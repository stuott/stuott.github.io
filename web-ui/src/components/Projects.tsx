import { useState } from "react";
import { Section, SectionTitle } from "./SectionUtils";
import DietTracker from "./projects/DietTracker";
import ReadingList from "./projects/ReadingList";
import TaskQueue from "./projects/TaskQueue";
import WorkoutCatalog from "./projects/WorkoutCatalog";

export default function Projects() {
  const projects = [
    { id: 0, title: "Task Queue", element: <TaskQueue /> },
    { id: 1, title: "Reading List", element: <ReadingList /> },
    { id: 2, title: "Workout Catalog", element: <WorkoutCatalog /> },
    { id: 3, title: "Diet Tracker", element: <DietTracker /> },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <Section id="projects">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-2 sm:grid-cols-4 p-4 gap-4 place-content-around">
        {projects.map((project) => {
          return (
            <button
              onClick={() => setSelected(project.id)}
              className={
                "transition rounded-xl p-4 hover:bg-cyan-600 hover:scale-[1.05]" +
                (selected === project.id ? " bg-cyan-800" : " bg-zinc-800")
              }
            >
              {project.title}
            </button>
          );
        })}
      </div>
      <div className="w-full ">{projects[selected].element}</div>
    </Section>
  );
}
