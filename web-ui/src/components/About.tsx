import {
  faBriefcase,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsonData from "../data/about.json";
import { Section, SectionTitle } from "./SectionUtils";

export default function Intro() {
  const introLines = [
    {
      text: "Software Developer",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    {
      text: "Madison, WI",
      icon: <FontAwesomeIcon icon={faLocationDot} />,
    },
    {
      text: "(920) 286-1509",
      icon: <FontAwesomeIcon icon={faPhone} />,
    },
  ];

  return (
    <div className="">
      <h1 className="text-white text-4xl md:text-5xl">Steven Ott</h1>
      <IconTable lines={introLines} />
    </div>
  );
}

interface iconTableProps {
  lines: { icon: JSX.Element; text: string }[];
}

function IconTable(props: iconTableProps) {
  const { lines } = props;

  return (
    <table className="text-zinc-400 border-separate border-spacing-x-2">
      {lines.map((line) => {
        return (
          <tr>
            <td className="text-center">{line.icon}</td>
            <td>{line.text}</td>
          </tr>
        );
      })}
    </table>
  );
}

export function About() {
  const data = jsonData.data;

  return (
    <Section id="about">
      <SectionTitle title="About" />
      <div className="grid gap-3">
        {data.map((paragraph) => {
          return <p className="">{paragraph.join(". ") + "."}</p>;
        })}
      </div>
    </Section>
  );
}
