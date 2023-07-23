import { feature, features } from "caniuse-lite";
import FeatureRow from "../islands/FeatureRow.tsx";
import Legend from "../components/Legend.tsx";
import ChartProvider from "../islands/ChartProvider.tsx";
import Pagination from "../components/Pagination.tsx";

export default function Home(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get("p") || "";
  const num = Number(query);
  const start = isNaN(num) ? num : 0;
  const end = start + 20;
  const featureList = Object.keys(features).map((key) => feature(features[key]))
    .slice(start, end);
  const pages = Math.floor(featureList.length / end - start);

  return (
    <div class="px-4 mx-auto max-w-screen-md">
      <div class="pt-2 sticky top-0">
        <div class="p-2 bg-gray-400 rounded flex flex-col md:flex-row items-center justify-between gap-2 dark:bg-gray-600">
          <h1 class="ms-2 flex-1 text-2xl font-light whitespace-nowrap overflow-hidden text-ellipsis">
            Browser Feature Support
          </h1>
          <label class="sr-only" htmlFor="search">Filter</label>
          <input
            id="search"
            class="rounded-sm flex-1 dark:bg-gray-300 text-xl p-2 dark:text-gray-700"
            type="text"
          />
        </div>
      </div>
      {featureList.map((feature) => {
        return (
          <ChartProvider key={feature.title}>
            <FeatureRow {...feature} />
          </ChartProvider>
        );
      })}
      <div class="pb-2 sticky bottom-0">
        <Legend />
      </div>
      <Pagination pages={pages} />
    </div>
  );
}
