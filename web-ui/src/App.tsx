import "./App.css";
import { Education } from "./Education";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main className="flex min-h-screen flex-col items-center p-20">
        <Education />
        {/* <div className="flex flex-row shrink-0 p-6 gap-4 bg-zinc-900 rounded-xl"></div> */}
      </main>
    </div>
  );
}

interface toolbarProps {}

export function Toolbar(props: toolbarProps) {
  return (
    <header className="bg-zinc-900 fixed top-0 w-full">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-evenly items-center font-serif">
          <button>Experience</button>
          <button>Education</button>
          <button>Projects</button>
        </div>
      </nav>
    </header>
  );
}

export default App;
