import { Signal, signal } from "@preact/signals";
import * as semver from "semver";
import { OlderVersions } from "./FeatureRow.tsx";
import { useContext } from "preact/hooks";

type Props = {
  versions?: Readonly<{
    [version: string]: string;
  }>;
  browser?: string;
};

const largestVersion = (array: string[]) => {
  return array.reduce((previous, current) => {
    if (semver.valid(previous) && semver.valid(current)) {
      return semver.gt(previous, current) ? previous : current;
    }
    return current;
  });
};

function VersionNumber({ versions }: { versions: Props["versions"] }) {
  let largest;
  if (versions) {
    largest = largestVersion(Object.keys(versions));

    if (versions[largest] === "y") {
      return <strong class="text-green-600">{largest}</strong>;
    }
  }
  return <strong class="text-red-500">{largest}</strong>;
}

export default function Version({ versions, browser }: Props) {
  const olderVersions = useContext(OlderVersions);
  const isLoading = signal(false);
  const clickHandler = async (signal: Signal | null) => {
    try {
      isLoading.value = true;
      const res = await fetch(`/api/${browser}`);
      signal!.value = await res.json();
    } catch (err) {
      console.log(err);
    }
    isLoading.value = false;
  };

  return (
    <button type="button" onClick={() => clickHandler(olderVersions)}>
      {isLoading.value
        ? <p>Loading...</p>
        : <VersionNumber versions={versions} />}
    </button>
  );
}
