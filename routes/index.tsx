import { feature, features } from "caniuse-lite";
import FeatureRow from "../islands/FeatureRow.tsx";
import Legend from "../components/Legend.tsx";
import ChartProvider from "../islands/ChartProvider.tsx";
import Pagination from "../components/Pagination.tsx";

const PER_PAGE = 20;

export default function Home(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get("p") || "1";
  const currentPage = Number(query) || 1;
  const from = (currentPage - 1) * PER_PAGE;
  const to = currentPage * PER_PAGE - 1;
  const featureList = Object.values(features).map((packedFeature) =>
    feature(packedFeature)
  );
  const pages = Math.floor(featureList.length / 20);
  const filteredFeatureList = featureList.slice(from, to);

  console.log("start", from, "end", to);

  return (
    <div class="px-4 mx-auto max-w-screen-md space-y-8 pb-6">
      <div class="pt-2 sticky top-0">
        <div class="p-2 pl-4 bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-2 dark:bg-gray-600">
          <h1 class="flex-1 text-2xl font-light whitespace-nowrap overflow-hidden text-ellipsis">
            Browser Feature Support
          </h1>
          <label class="sr-only" htmlFor="search">Filter</label>
          <input
            id="search"
            class="rounded-lg flex-1 bg-gray-300 dark:bg-gray-300 text-xl p-2 dark:text-gray-700"
            type="text"
          />
        </div>
      </div>
      {filteredFeatureList.map((feature) => {
        return (
          <ChartProvider key={feature.title}>
            <FeatureRow {...feature} />
          </ChartProvider>
        );
      })}
      <div class="pb-2 sticky bottom-0 space-y-4">
        <Legend />
      </div>
      <Pagination pages={pages} currentPage={currentPage} />
    </div>
  );
}
