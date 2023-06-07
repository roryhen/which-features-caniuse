import Table from "../components/Table.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import type { Feature } from "caniuse-lite";
import { feature, features } from "caniuse-lite";

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
      <div class="py-4 sticky top-0">
        <h1 class="text-xl font-extrabold">Browser Support Chart</h1>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Table list={data} />
    </div>
  );
}
