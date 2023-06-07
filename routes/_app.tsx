import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <div class="antialiased bg-gray-200 text-gray-700 dark:text-gray-100 dark:bg-gray-800">
      <Component />
    </div>
  );
}
