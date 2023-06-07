import { Feature } from "caniuse-lite";
import FeatureRow from "../islands/FeatureRow.tsx";

type Props = {
  list: Feature[] | null;
};

export default function Counter({ list }: Props) {
  return (
    <div>
      {list?.map((feature) => <FeatureRow {...feature} />)}
      <ul class="grid grid-cols-7 sticky bottom-0 bg-gray-300 text-gray-900 font-semibold dark:bg-gray-700 dark:text-gray-300">
        <li>Chrome</li>
        <li>Edge</li>
        <li>Firefox</li>
        <li>Safari</li>
        <li>Android Chrome</li>
        <li>Android Firefox</li>
        <li>iOS Safari</li>
      </ul>
    </div>
  );
}
