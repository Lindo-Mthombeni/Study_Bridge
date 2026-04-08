import { type JSX, useState, useEffect, useRef, memo } from "react";
import { useItemObserver, useScrollTrigger } from "../build/Hooks";
import { features, type FeatureData } from "./FeatureData";
import { Card } from "../build/Card";

interface FeatureItemProps {
  feature: FeatureData;
  index: number;
}

const FeatureItem = memo(({ feature, index }: FeatureItemProps) => {
  const {
    elementRef: featureRef,
    isObserved: featureObserved,
    transitionDone,
    setTransitionDone,
  } = useItemObserver<HTMLDivElement>(0.5);

  return (
    <Card
      variant="secondary"
      ref={featureRef}
      onTransitionEnd={() => setTransitionDone(true)}
      additionalStyles={`feat-content ${featureObserved ? "opacity-100 scale-100" : "opacity-0 scale-70"}`}
      style={
        {
          "--feat-color": feature.color,
          transitionDelay:
            featureObserved && !transitionDone ? `${index * 200}ms` : "0ms",
        } as React.CSSProperties
      }
    >
      <h3>{feature.head}</h3>
      <p>{feature.content}</p>
    </Card>
  );
});

function FeatureCards(): JSX.Element {
  return (
    <>
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} index={index} />
      ))}
    </>
  );
}

function FeatureSection(): JSX.Element {
  return (
    <section className="features-section grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-15 mt-40 mb-70 justify-center p-6 auto-rows-[400px]">
      <FeatureCards />
    </section>
  );
}

export const Features: React.FC = () => {
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
          <FeatureSection />
        </div>
      )}
      <div ref={anchorRef} className="h-1 w-full mt-20 invisible" />
      {isTriggered ? (
        <FeatureSection />
      ) : (
        <div style={{ height: measuredHeight }} />
      )}
    </>
  );
};