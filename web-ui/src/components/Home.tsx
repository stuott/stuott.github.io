export default function Home() {
  return <Intro />;
}

function Intro() {
  const emphasis =
    "transition p-3 bg-teal-800 hover:bg-teal-400 font-bold font-mono";

  return (
    <div className="w-full text-5xl leading-relaxed px-20">
      <p>Hi! I'm</p>
      <span className={emphasis}>Steven Ott</span>
      <p>and I'm a </p>
      <span className={emphasis}>Software Developer</span>
      <p>who lives in </p>
      <span className={emphasis}>Madison, WI</span>
    </div>
  );
}
