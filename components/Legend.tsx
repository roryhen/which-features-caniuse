export default function Legend() {
  return (
    <ul class="text-center grid grid-cols-7 gap-2 text-gray-100 font-semibold text-gray-800 dark:text-gray-300">
      <li class="p-2 rounded bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
        Chrome
      </li>
      <li class="p-2 rounded bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
        Edge
      </li>
      <li class="p-2 rounded bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
        Firefox
      </li>
      <li class="p-2 rounded bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
        Safari
      </li>
      <li class="p-2 rounded bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
        Android Chrome
      </li>
      <li class="p-2 rounded bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
        Android Firefox
      </li>
      <li class="p-2 rounded bg-gray-400 dark:bg-gray-600 flex items-center justify-center">
        iOS Safari
      </li>
    </ul>
  );
}
