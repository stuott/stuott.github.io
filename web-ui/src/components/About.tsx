import jsonData from "../data/about.json";
import { Title } from "./CardUtils";

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
  const data = jsonData.data;

  return (
    <div className="text-zinc-300 grid gap-6">
      <Title title="About" />
      <div className="grid gap-3">
        {data.map((paragraph) => {
          return <p className="">{paragraph.join(". ") + "."}</p>;
        })}
      </div>
    </div>
  );
}
