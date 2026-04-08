import { useState, lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Landing Page/Hero.tsx";
import "./App.css";

const Features = lazy(() => import("./components/Landing Page/Features.tsx").then(m => ({ default: m.Features })));
const StudyResources = lazy(() => import("./components/Landing Page/StudyResources.tsx").then(m => ({ default: m.StudyResources })));
const Subjects = lazy(() => import("./components/Landing Page/Subjects.tsx").then(m => ({ default: m.Subjects })));
const CallToAction = lazy(() => import("./components/Landing Page/CallToAction.tsx").then(m => ({ default: m.CallToAction })));
const Footer = lazy(() => import("./components/Footer.tsx").then(m => ({ default: m.Footer })));

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  // const gradientRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     if(gradientRef.current){
  //       const rect = gradientRef.current.getBoundingClientRect();
  //       const radius = rect.width / 2;

  //       const gradientX = e.clientX - radius
  //       const gradientY = e.clientY - radius

  //       gradientRef.current.style.transform = `translate3d(${gradientX}px, ${gradientY}px, 0)`
  //     }
  //   }

  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, [])
  return (
    <>
    {/* <div ref={gradientRef} className="hover-gradient"></div> */}
    <div className="flex flex-col min-h-screen max-w-screen font-main relative overflow-x-clip! 
           bg-background text-primary -z-20">
      <Navbar onNavigate={setActiveSection} active={activeSection} />
      <main>
        <section>
          <Hero />
          <Suspense fallback={null}>
            <Features />
            <StudyResources />
            <Subjects />
            <CallToAction />
          </Suspense>
        </section>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
    </>
  );
};

export default App;