import { useState } from "react";
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

  const [selected, setSelected] = useState(projects[0].element);

  return (
    <div className="flex gap-4 w-full px-10 md:px-20">
      <div className="grid gap-5 w-1/3 rounded-xl">
        {projects.map((project) => {
          return (
            <button
              onClick={() => setSelected(project.element)}
              className="text-left rounded-xl outline p-4
              hover:text-cyan-800 hover:outline-cyan-800 hover:bg-gray-300"
            >
              {project.title}
            </button>
          );
        })}
      </div>
      <div className="w-full rounded-xl p-6 outline">{selected}</div>
    </div>
  );
}
