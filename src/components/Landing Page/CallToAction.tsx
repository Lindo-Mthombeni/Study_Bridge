import { Rocket } from "lucide-react";
import { Card } from "../build/Card";
import { Button } from "../build/Buttons";
import { useItemObserver } from "../build/Hooks";
import type React from "react";

export const CallToAction: React.FC = () => {

  const { elementRef, isObserved } = useItemObserver<HTMLDivElement>(.8);



  return (
    <section className="my-30">
      <Card ref={elementRef} variant="primary" additionalStyles={`call-to-action-card ${isObserved ? "opacity-100" : "opacity-0"}`}>
        <h2 className="text-head font-extrabold">
          Ready to Bridge Your Way to Success?
        </h2>
        <p className="text-related text-center">
          Join 10,000+ South African students already using StudyBridge to
          prepare for their exams
        </p>
        <Button
          variant="primary"
          additionalStyles="call-to-action-card-btn"
        >
          Get Started - It's Free <Rocket />
        </Button>
      </Card>
    </section>
  );
};
