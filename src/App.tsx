import { useState } from "react";
// import { Background } from './components/Background.tsx'
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Landing Page/Hero.tsx";
import { Features } from "./components/Landing Page/Features.tsx";
import { StudyResources } from "./components/Landing Page/StudyResources.tsx";
import { Subjects } from "./components/Landing Page/Subjects.tsx";
import { CallToAction } from "./components/Landing Page/CallToAction.tsx";
import { Footer } from "./components/Footer.tsx";
import "./App.css";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex flex-col min-h-screen max-w-screen overflow-x-clip">
      {/* <Background /> */}
      <Navbar onNavigate={setActiveSection} active={activeSection} />
      <main>
        <section>
          <Hero />
          <Features />
          <StudyResources />
          <Subjects />
          <CallToAction />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
