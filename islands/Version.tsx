import { Signal, useSignal } from "@preact/signals";
import { Agent } from "caniuse-lite";
import { useChart } from "./ChartProvider.tsx";

type Props = {
  versionData?: Signal<
    Readonly<{
      [id: string]: Readonly<Agent> | undefined;
    }>
  >;
  versionSupport?: Readonly<{
    [version: string]: string;
  }>;
  browser?: string;
};

const versionRegExp = /\d{1,4}(?:\.\d{1,2})?/;

const largestVersion = (array: string[]) => {
  return array.reduce((previous, current) => {
    const prevVersion = previous.match(versionRegExp);
    const currVersion = current.match(versionRegExp);
    return Number(prevVersion) > Number(currVersion) ? previous : current;
  });
};

function VersionNumber({ versions }: { versions: Props["versionSupport"] }) {
  if (versions) {
    const largest = largestVersion(Object.keys(versions));
    const supported = versions[largest] === "y";

    return (
      <strong
        class={`block rounded-full p-2 dark:text-white ${
          supported
            ? "text-blue-600 bg-blue-200 dark:bg-teal-600"
            : "text-red-600 bg-red-200 dark:bg-pink-600"
        }`}
      >
        {largest}
      </strong>
    );
  }

  return <></>;
}

export default function Version(
  { versionSupport, browser }: Props,
) {
  const { status, data } = useChart();
  const isLoading = useSignal(false);

  const clickHandler = async () => {
    try {
      isLoading.value = true;
      const res = await fetch(`/api/${browser}`);
      data.value = await res.json();
    } catch (error) {
      console.error(error);
    }
    isLoading.value = false;
    status.value = !status.value;
  };

  return (
    <button
      class={`w-full cursor-pointer ${isLoading.value ? "opacity-80" : ""}`}
      type="button"
      onClick={clickHandler}
      title="browser version"
    >
      <VersionNumber versions={versionSupport} />
    </button>
  );
}
