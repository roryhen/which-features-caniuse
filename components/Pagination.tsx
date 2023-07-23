export default function Pagination(props: { pages: number }) {
  return (
    <ul className="flex flex-wrap">
      {Array.from({ length: props.pages ?? 0 }, (_, i) => {
        const page = i + 1;
        return (
          <li>
            <a
              className="block bg-white/10 p-2 rounded-full aspect-square hover:bg-teal-400/50"
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
