import { Handlers, PageProps } from "$fresh/server.ts";
import type { Feature } from "caniuse-lite";
import { feature, features } from "caniuse-lite";
import FeatureRow from "../islands/FeatureRow.tsx";
import Legend from "../components/Legend.tsx";

export const handler: Handlers<Feature[] | null> = {
  GET(_, ctx) {
    const featureList = Object.keys(features).map((key) =>
      feature(features[key])
    );
    return ctx.render(featureList);
  },
};

export default function Home({ data }: PageProps<Feature[] | null>) {
  return (
    <div class="px-4 mx-auto max-w-screen-md">
      <div class="pt-2 sticky top-0">
        <div class="p-2 bg-gray-100 rounded flex justify-between gap-8 dark:bg-gray-500">
          <h1 class="flex-1 text-xl font-extrabold">
            Browser Support Chart
          </h1>
          <label class="sr-only" htmlFor="search">Filter</label>
          <input
            id="search"
            class="rounded-sm flex-1 dark:bg-gray-300"
            type="text"
          />
        </div>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data?.map((feature) => <FeatureRow {...feature} />)}
      <div class="pb-2 sticky bottom-0">
        <Legend />
      </div>
    </div>
  );
}
