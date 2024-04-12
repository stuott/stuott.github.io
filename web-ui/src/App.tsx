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
      <main className="flex min-h-screen w-full flex-col items-center py-32">
        {mainElement}
      </main>
    </>
  );
}

export function Toolbar() {
  return (
    <header className="bg-zinc-900 fixed top-0 w-full">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-evenly gap-3 items-center text-lg">
          <ToolbarLink text="Home" to="/" />
          <ToolbarLink text="Experience" to="/experience" />
          <ToolbarLink text="Education" to="/education" />
          <ToolbarLink text="Projects" to="/projects" />
        </div>
      </nav>
    </header>
  );
}

interface toolbarLinkProps {
  text: string;
  to: string;
}

function ToolbarLink(props: toolbarLinkProps) {
  const { text, to } = props;

  return (
    <Link
      className="transition ease-in-out hover:bg-teal-500 hover:scale-105 py-2 px-4 rounded-lg"
      to={to}
    >
      {text}
    </Link>
  );
}

export default App;
