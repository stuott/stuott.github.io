export default function Title(props: { title: string }) {
  const { title } = props;
  return <h2 className="text-xl font-bold">{title}</h2>;
}
