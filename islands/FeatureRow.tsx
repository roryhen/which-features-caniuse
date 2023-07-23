import { Feature } from "caniuse-lite";
import Version from "./Version.tsx";
import { useChart } from "./ChartProvider.tsx";

export default function FeatureRow({ stats, ...props }: Feature) {
  const { data, status } = useChart();

  return (
    <div class="my-6 rounded-lg">
      <div class="flex items-center justify-between mb-2 px-1 py-2 dark:px-3 bg-gray-200 rounded dark:bg-gray-700">
        <h2 class="text-lg font-medium">{props.title}</h2>
        <p class="text-sm text-gray-500 font-extrabold dark:text-gray-300">
          {props.status}
        </p>
      </div>
      <ul class="grid grid-cols-4 md:grid-cols-7 gap-2">
        <li>
          <Version
            versionSupport={stats.chrome}
            browser="chrome"
          />
        </li>
        <li>
          <Version
            versionSupport={stats.edge}
            browser="edge"
          />
        </li>
        <li>
          <Version
            versionSupport={stats.firefox}
            browser="firefox"
          />
        </li>
        <li>
          <Version
            versionSupport={stats.safari}
            browser="safari"
          />
        </li>
        <li>
          <Version
            versionSupport={stats.and_chr}
            browser="and_chr"
          />
        </li>
        <li>
          <Version
            versionSupport={stats.and_ff}
            browser="and_ff"
          />
        </li>
        <li>
          <Version
            versionSupport={stats.ios_saf}
            browser="ios_saf"
          />
        </li>
      </ul>
      {status.value && (
        <div>
          {JSON.stringify(data.value, null, 2)}
        </div>
      )}
    </div>
  );
}
