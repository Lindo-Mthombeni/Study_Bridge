import { Rocket } from "lucide-react";
import { Card } from "../build/Card";
import { Button } from "../build/Buttons";

export const CallToAction: React.FC = () => {
  return (
    <section className="my-30">
      <Card variant="primary" additionalStyles="call-to-action-card">
        <h2 className="text-head font-bold">
          Ready to Bridge Your Way to Success?
        </h2>
        <p className="text-content text-center">
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
