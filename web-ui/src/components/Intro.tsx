import Title from "./CardUtils";

export default function Intro() {
  const emphasis = "transition p-1 bg-cyan-800 font-bold font-mono";

  return (
    <div className="text-white text-pretty leading-relaxed text-3xl md:text-4xl md:leading-relaxed">
      <p>
        My name is <span className={emphasis}>Steven Ott</span> and I'm a{" "}
        <span className={emphasis}>Software Developer</span> who lives in{" "}
        <span className={emphasis}>Madison, WI</span>
      </p>
    </div>
  );
}

export function About() {
  return (
    <div className="text-white grid gap-6">
      <Title title="About Me" />
      <p>Summary</p>
    </div>
  );
}
