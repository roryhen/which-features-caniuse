export default function Pagination(
  props: { pages: number; currentPage: number },
) {
  return (
    <ul class="grid grid-cols-12 md:grid-cols-[repeat(21,minmax(0,1fr))] gap-2">
      {Array.from({ length: props.pages ?? 0 }, (_, i) => {
        const page = i + 1;
        return (
          <li class="grid">
            <a
              class={`py-1 rounded-xl hover:bg-teal-300 dark:hover:bg-teal-800 font-semibold text-sm text-center ${
                props.currentPage === page
                  ? "bg-teal-400 dark:bg-teal-700"
                  : "bg-gray-100 dark:bg-gray-600"
              }`}
              href={i === 0 ? "/" : `/?p=${page}`}
            >
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
