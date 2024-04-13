import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-12">
        <div className="grid gap-16">
          <Home />
          <Education />
          <Experience />
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}

export function Footer() {
  return (
    <div className="p-2 bg-zinc-500">
      Check out the source code on{" "}
      <a
        className="underline text-cyan-800"
        href="https://github.com/stuott/stuott.github.io"
      >
        GitHub
      </a>
    </div>
  );
}

export default App;
