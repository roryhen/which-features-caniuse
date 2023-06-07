import { Feature } from "caniuse-lite";
import Version from "./Version.tsx";
import { Signal, useSignal } from "@preact/signals";
import { createContext } from "preact";

export const OlderVersions = createContext<Signal | null>(null);

export default function FeatureRow({ title, status, stats }: Feature) {
  const isChartShown = useSignal(true);
  const versionList = useSignal(null);
  return (
    <div class="my-4 rounded-lg">
      <div class="flex justify-between mb-2 p-2 bg-gray-200 rounded dark:bg-gray-700">
        <h2 class="text-lg font-medium">{title}</h2>
        <p>{status}</p>
      </div>
      <OlderVersions.Provider value={versionList}>
        <ul class="grid grid-cols-7 gap-2">
          <li>
            <Version
              versions={stats.chrome}
              browser="chrome"
            />
          </li>
          <li>
            <Version
              versions={stats.edge}
              browser="edge"
            />
          </li>
          <li>
            <Version
              versions={stats.firefox}
              browser="firefox"
            />
          </li>
          <li>
            <Version
              versions={stats.safari}
              browser="safari"
            />
          </li>
          <li>
            <Version
              versions={stats.and_chr}
              browser="and_chr"
            />
          </li>
          <li>
            <Version versions={stats.and_ff} browser="and_ff" />
          </li>
          <li>
            <Version
              versions={stats.ios_saf}
              browser="ios_saf"
            />
          </li>
        </ul>
        {isChartShown.value && (
          <div>
            {JSON.stringify(versionList.value, null, 2)}
          </div>
        )}
      </OlderVersions.Provider>
    </div>
  );
}
