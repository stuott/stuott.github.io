import { JsxElement } from "typescript";
import "./App.css";
import { Education } from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";

import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page mainElement={<Home />} />} />
        <Route
          path="/education"
          element={<Page mainElement={<Education />} />}
        />
        <Route
          path="/experience"
          element={<Page mainElement={<Experience />} />}
        />
        <Route path="/projects" element={<Page mainElement={<Projects />} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

interface pageProps {
  mainElement: JSX.Element;
}

export function Page(props: pageProps) {
  const { mainElement } = props;

  return (
    <>
      <Toolbar />
      <main className="flex min-h-screen w-full flex-col items-center p-20">
        {mainElement}
      </main>
    </>
  );
}

export function Toolbar() {
  return (
    <header className="bg-zinc-900 fixed top-0 w-full">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-evenly items-center font-serif">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </nav>
    </header>
  );
}

export default App;
