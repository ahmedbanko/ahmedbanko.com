import NavBar from "./components/NavBar/MyNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Stack from "./components/pages/Stack";
import Education from "./components/pages/Education";
import WhyMe from "./components/pages/WhyMe";
import PageNotFound from "./components/pages/PageNotFound";
import Contact from "./components/pages/Contact";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDark } = useTheme();
  return (
    <Router>
      <NavBar />
      <div className="flex justify-center pt-10 md:p-0 md:my-20 pb-16">
        <div className="w-screen max-w-3xl mx-4 md:mx-0 p-6 rounded-xl bg-bodyBg-light bg-opacity-90 dark:bg-opacity-90 dark:bg-bodyBg-dark mb-10 md:mb-20">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/education" element={<Education />} />
            <Route path="/why-me" element={<WhyMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;