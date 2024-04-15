export function Title(props: { title: string }) {
  const { title } = props;
  return <h2 className="text-zinc-300 text-xl font-bold">{title}</h2>;
}

export function Badges(props: { captions: string[] }) {
  const { captions } = props;

  return (
    <ul className="flex flex-wrap gap-2 pt-2">
      {captions.map((caption) => {
        return (
          <li className="rounded-xl bg-cyan-900 py-1 px-2 text-sm">
            {caption}
          </li>
        );
      })}
    </ul>
  );
}
