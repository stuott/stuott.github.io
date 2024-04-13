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

  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full text-white ">
      <div className="grid grid-cols-4 p-4 gap-4 place-content-around">
        {projects.map((project) => {
          return (
            <button
              onClick={() => setSelected(project.id)}
              className={
                "transition rounded-xl p-4 hover:bg-cyan-600" +
                (selected == project.id ? " bg-cyan-800" : " bg-slate-600")
              }
            >
              {project.title}
            </button>
          );
        })}
      </div>
      <div className="w-full ">{projects[selected].element}</div>
    </div>
  );
}
