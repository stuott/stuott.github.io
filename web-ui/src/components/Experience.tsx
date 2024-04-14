import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsonData from "../data/experience.json";
import Title from "./CardUtils";

interface experience {
  title: string;
  company: string;
  companyURL: string;
  location: string;
  time: string;
  points: string[];
  skills: string[];
}

export default function Experience() {
  const data: experience[] = jsonData.data;

  return (
    <div className="flex flex-col gap-4 text-white">
      <Title title="Experience" />
      <ExperienceList experiences={data} />
    </div>
  );
}

function ExperienceList(props: { experiences: experience[] }) {
  const { experiences } = props;

  return (
    <div className="grid divide-y border-y sm:divide-none sm:border-none">
      {experiences.map((exp) => (
        <ExperienceCard exp={exp} />
      ))}
    </div>
  );
}

function ExperienceCard(props: { exp: experience }) {
  const { exp } = props;

  return (
    <div className="flex flex-col sm:flex-row sm:divide-x">
      <div className="pt-4 pb-2 sm:w-1/4 sm:p-2">
        <p className="italic text-zinc-500">{exp.time}</p>
      </div>
      <div className="grid sm:w-3/4 pb-6 sm:pl-5">
        <ExperienceMeta
          title={exp.title}
          company={exp.company}
          companyURL={exp.companyURL}
          location={exp.location}
        />
        <ExperienceSkills skills={exp.skills} />
        <ExperiencePoints points={exp.points} />
      </div>
    </div>
  );
}

function ExperienceMeta(props: {
  title: string;
  company: string;
  companyURL: string;
  location: string;
}) {
  const { title, company, companyURL, location } = props;

  return (
    <>
      <a
        className="transition hover:text-cyan-300"
        href={companyURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title + ", "}
        {company + " "}
        <FontAwesomeIcon className="text-sm" icon={faArrowUpRightFromSquare} />
      </a>
      <p className="italic text-zinc-500">{location}</p>
    </>
  );
}

function ExperienceSkills(props: { skills: string[] }) {
  const { skills } = props;

  return (
    <ul className="flex flex-wrap gap-2 pt-2">
      {skills.map((skill) => {
        return (
          <li className="rounded-xl bg-cyan-900 py-1 px-2 text-sm">{skill}</li>
        );
      })}
    </ul>
  );
}

function ExperiencePoints(props: { points: string[] }) {
  const { points } = props;

  return (
    // <ul className="grid gap-2 py-2">
    //   {points.map((point) => {
    //     return <li className="text-zinc-400">{point}</li>;
    //   })}
    // </ul>
    <p className="pt-2 text-zinc-400">{points.join(". ") + "."}</p>
  );
}
