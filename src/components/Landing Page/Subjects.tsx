import {
  Calculator,
  FlaskConical,
  Dna,
  BadgeDollarSign,
  Briefcase,
  Languages,
  Globe,
  History,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Card } from "../build/Card.tsx";
import { Button } from "../build/Buttons.tsx";
import { Squircle } from "lucide-react";

export const Subjects: React.FC = () => {
  const subjects = [
    {
      subject: "Mathematics",
      icon: <Calculator />,
      color: "var(--color-cyan)",
      text: (
        <>
          Solve for <span>𝑥</span> like a pro
        </>
      ),
    },
    {
      subject: "Physical Science",
      icon: <FlaskConical />,
      color: "var(--color-orange)",
      text: (
        <>
          Understand the <span>Scientific</span> Reasons
        </>
      ),
    },
    {
      subject: "Life Sciences",
      icon: <Dna />,
      color: "var(--color-lime)",
      text: (
        <>
          <span>Investigate</span> and Experiment
        </>
      ),
    },
    {
      subject: "Accounting",
      icon: <BadgeDollarSign />,
      color: "var(--color-yellow)",
      text: (
        <>
          Learn to keep track of <span>financial records</span>
        </>
      ),
    },
    {
      subject: "Business Studies",
      icon: <Briefcase />,
      color: "var(--color-pink)",
      text: (
        <>
          <span>Manage</span> resources and analyze markets
        </>
      ),
    },
    {
      subject: "English",
      icon: <Languages />,
      color: "var(--color-magenta)",
      text: (
        <>
          Build your <span>vocabulary</span> and language skills
        </>
      ),
    },
    {
      subject: "Geography",
      icon: <Globe />,
      color: "var(--color-dark-cyan)",
      text: (
        <>
          Explore the <span>world</span>
        </>
      ),
    },
    {
      subject: "History",
      icon: <History />,
      color: "var(--color-red)",
      text: (
        <>
          Dive Deeper into the <span>past </span>
        </>
      ),
    },
  ];

  return (
    <section className="subjects-section">
      <h1 className="text-lg font-black self-center">Popular Subjects</h1>
      <p className="text-aside self-center mb-10">
        CAPS-aligned study materials for all Grade 8-12 subjects, updated for
        the 2024 academic year
      </p>
      <div className="subjects">
        {subjects.map((subject, index) => {
          return (
            <Card
              variant="secondary"
              key={index}
              additionalStyles="subject-card"
              style={
                { "--subject-color": subject.color } as React.CSSProperties
              }
            >
              <div className="grow shrink-0 flex flex-col gap-3">
                <div className="relative h-25 w-25 rounded-full -left-3">
                  <div className="subject-icon">{subject.icon}</div>
                  <Squircle className="squircle-subject-config" />
                </div>

                <h2 className="font-black text-related">{subject.subject}</h2>
                <p className="text-content">{subject.text}</p>
              </div>
              <hr className="border-t border-grey/70" />
              <button className="explore-btn">
                Explore <ChevronRight />
              </button>
            </Card>
          );
        })}
      </div>
      <Button variant="primary" additionalStyles="view-subjects-btn">
        View all subjects <ArrowRight />
      </Button>
    </section>
  );
};
