import { faSimplybuilt } from "@fortawesome/free-brands-svg-icons";
import { faFax, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Intro />
    </>
  );
}

function Intro() {
  const emphasis = "transition p-3 bg-cyan-800 font-bold font-mono";

  return (
    <div className="w-full text-white leading-relaxed text-2xl md:text-3xl md:leading-relaxed lg:text-6xl lg:leading-relaxed">
      <p>My name is</p>
      <span className={emphasis}>Steven Ott</span>
      <p>and I'm a </p>
      <span className={emphasis}>Software Developer</span>
      <p>who lives in </p>
      <span className={emphasis}>Madison, WI</span>
    </div>
  );
}
