import { type JSX, useRef, useEffect, useState, memo } from "react";
import { useItemObserver, useScrollTrigger } from "../build/Hooks";
import { studyResources, type StudyResourceData } from "./StudyResourceData";
import { Squircle } from "lucide-react";
import { Card } from "../build/Card";

interface StudyResourceItemProps {
  studyResource: StudyResourceData;
  index: number;
}

const StudyResourceItem = memo(({ studyResource, index }: StudyResourceItemProps) => {
  const {
    elementRef: studyResourceRef,
    isObserved: studyResourceObserved,
    transitionDone,
    setTransitionDone,
  } = useItemObserver<HTMLDivElement>(0.65);

  return (
    <Card
      variant="secondary"
      ref={studyResourceRef}
      onTransitionEnd={() => setTransitionDone(true)}
      additionalStyles={`resource-card ${studyResourceObserved ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}
      style={
        {
          "--resource-color": studyResource.color,
          transitionDelay:
            studyResourceObserved && !transitionDone
              ? `${index * 200}ms`
              : "0ms",
        } as React.CSSProperties
      }
    >
      <div className="relative h-20 w-20 rounded-full -left-3 shrink-0">
        <Squircle className="squircle-resource-config" />
        <div className="squircle-resource-icon">{studyResource.icon}</div>
      </div>
      <div>
        <h3 className="text-aside text-(--resource-color) brightness-85 font-bold">
          {studyResource.head}
        </h3>
        <h2 className="text-related font-black">{studyResource.name}</h2>
        <p className="text-content mt-7 mb-2">{studyResource.text}</p>
      </div>
    </Card>
  );
});

function StudyResourceItems(): JSX.Element {
  return (
    <>
      {studyResources.map((resource, index) => (
        <StudyResourceItem key={index} studyResource={resource} index={index} />
      ))}
    </>
  );
}

function StudyResourceSection(): JSX.Element {
  return (
    <section className="flex flex-col my-20 gap-5 p-6">
      <h1 className="text-lg md:text-xl font-black self-center">
        Study Resources
      </h1>
      <p className="text-title self-center mb-10">
        Everything you need to ace your exams, all in one place, completely free
      </p>
      <div className="resources">
        <StudyResourceItems />
      </div>
    </section>
  );
}

export const StudyResources: React.FC = () => {
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
          <StudyResourceSection />
        </div>
      )}
      <div ref={anchorRef} className="h-1 w-full mt-20 invisible" />
      {isTriggered ? (
        <StudyResourceSection />
      ) : (
        <div style={{ height: measuredHeight }} />
      )}
    </>
  );
};