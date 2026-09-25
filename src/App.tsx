import { useEffect, useSyncExternalStore } from "react";
import { About, Experience, Home, Projects, Shell, Teaching } from "./Portfolio";
import InformationRetrieval from "./courses/InformationRetrieval";

// ponytail: hash routing keeps static hosting config-free; switch to a router lib if routes grow past a handful.
const pages: Record<string, { page: () => React.ReactNode; title: string }> = {
  "#/about": { page: About, title: "About" },
  "#/teaching": { page: Teaching, title: "Teaching" },
  "#/projects": { page: Projects, title: "Projects" },
  "#/experience": { page: Experience, title: "Experience" },
  "#/teaching/information-retrieval": {
    page: InformationRetrieval,
    title: "Information Retrieval FS26",
  },
};

const subscribe = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};

function App() {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash);
  const page = pages[hash];
  const title = page?.title;

  useEffect(() => {
    document.title = title ? `${title} · Severin Mills` : "Severin Mills";
    window.scrollTo(0, 0);
  }, [hash, title]);

  const Page = page?.page ?? Home;
  return (
    <Shell hash={hash}>
      <Page />
    </Shell>
  );
}

export default App;
