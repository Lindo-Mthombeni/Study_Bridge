import { type JSX, useState, useEffect, useRef, memo } from "react";
import { useItemObserver, useScrollTrigger } from "../build/Hooks";
import { subjects, type SubjectData } from "./SubjectData";
import { Squircle, ChevronRight, ArrowRight } from "lucide-react";
import { Card } from "../build/Card.tsx";
import { Button } from "../build/Buttons.tsx";

interface SubjectItemProps {
  subject: SubjectData;
  index: number;
}

const SubjectItem = memo(({ subject, index }: SubjectItemProps) => {
  const {
    elementRef: subjectRef,
    isObserved: subjectObserved,
    transitionDone,
    setTransitionDone,
  } = useItemObserver<HTMLDivElement>(0.5);

  return (
    <Card
      variant="secondary"
      ref={subjectRef}
      onTransitionEnd={() => setTransitionDone(true)}
      additionalStyles={`subject-card ${subjectObserved ? "opacity-100 scale-100" : "opacity-0 scale-60 translate-y-20"}`}
      style={
        {
          "--subject-color": subject.color,
          transitionDelay:
            subjectObserved && !transitionDone ? `${index * 100}ms` : "0ms",
        } as React.CSSProperties
      }
    >
      <div className="grow shrink-0 flex flex-col gap-3">
        <div className="relative h-25 w-25 rounded-full -left-3">
          <div className="subject-icon">{subject.icon}</div>
          <Squircle className="squircle-subject-config" />
        </div>
        <h2 className="font-black text-head">{subject.subject}</h2>
        <p className="text-content">{subject.text}</p>
      </div>
      <hr className="border-t border-grey/70" />
      <button className="explore-btn">
        Explore <ChevronRight />
      </button>
    </Card>
  );
});

function SubjectItems(): JSX.Element {
  return (
    <>
      {subjects.map((subject, index) => (
        <SubjectItem key={index} subject={subject} index={index} />
      ))}
    </>
  );
}

function SubjectSection(): JSX.Element {
  return (
    <section className="subjects-section">
      <h1 className="text-lg md:text-xl font-black self-center">
        Popular Subjects
      </h1>
      <p className="text-title self-center mb-10">
        CAPS-aligned study materials for all Grade 8-12 subjects, updated for
        the 2024 academic year
      </p>
      <div className="subjects">
        <SubjectItems />
      </div>
      <Button variant="primary" additionalStyles="view-subjects-btn">
        View all subjects <ArrowRight />
      </Button>
    </section>
  );
}

export const Subjects: React.FC = () => {
  const { anchorRef, isTriggered } = useScrollTrigger();
  const [measuredHeight, setMeasuredHeight] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      setMeasuredHeight(measureRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
      {!isTriggered && (
        <div
          ref={measureRef}
          style={{
            position: "absolute",
            visibility: "hidden",
            pointerEvents: "none",
            top: "-9999px",
            width: "100%",
          }}
        >
          <SubjectSection />
        </div>
      )}
      <div ref={anchorRef} className="h-1 w-full mt-20 invisible" />
      {isTriggered ? (
        <SubjectSection />
      ) : (
        <div style={{ height: measuredHeight }} />
      )}
    </>
  );
};