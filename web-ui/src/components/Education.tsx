import jsonData from "../data/education.json";
import { Badges, Section, SectionTitle } from "./SectionUtils";

export default function Education() {
  return (
    <Section id="education">
      <SectionTitle title="Education" />
      <div className="flex flex-col sm:flex-row gap-4 p-4">
        <a
          className="w-4/6 sm:1/2 md:w-1/3"
          href="https://www.mtu.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="transition hover:scale-[1.02] p-4 hover:bg-cyan-700"
            alt="Michigan Techological University Logo"
            src={process.env.PUBLIC_URL + "/MTU_Logo.png"}
          />
        </a>
        <div className=" sm:w-3/4">
          <p className="text-zinc-200 font-bold">BS Computer Engineering</p>
          <p className="text-zinc-400 italic">3.93 GPA | Dean's List</p>
          <Badges
            captions={[
              "Triangle Fraternity - President",
              "Blue Marble Security Enterprise",
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export function EducationDetailed() {
  const data = jsonData.data;

  return (
    <div className="grid xl:grid-cols-2 gap-16 w-full text-left">
      {data.map((grade) => (
        <EducationCard data={grade} />
      ))}
    </div>
  );
}

interface educationCategory {
  title: string;
  courses: string[];
}

interface grade {
  title: string;
  years: string;
  categories: educationCategory[];
}

function EducationCard(props: { data: grade }) {
  const { data } = props;

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 text-white ">
      <div className="w-full md:w-1/4">
        <h1 className="text-2xl font-serif ">{data.title}</h1>
        <h2 className="italic">{data.years}</h2>
      </div>
      <div className="grid p-6 gap-6 w-full md:w-3/4 bg-cyan-900">
        {data.categories.map((category) => {
          return (
            <div className="flex flex-col">
              <h2 className="font-bold">{category.title}</h2>
              <ul className="list-disc list-inside">
                {category.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
