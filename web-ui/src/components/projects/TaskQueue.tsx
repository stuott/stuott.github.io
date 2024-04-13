import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function TaskQueue() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([""]);

  function addTask() {
    tasks.push(text);
    setTasks(tasks);
  }

  return (
    <>
      <div className="flex w-full gap-3">
        <form className="w-full">
          <input
            className="w-full p-2 rounded-lg"
            type="text"
            onChange={(event) => setText(event.target.value)}
          />
        </form>
        <FontAwesomeIcon
          className="p-3 hover:outline rounded-lg active:bg-cyan-800"
          onClick={() => addTask()}
          icon={faAdd}
        />
      </div>
      {tasks.map((task) => (
        <div>{task}</div>
      ))}
    </>
  );
}
