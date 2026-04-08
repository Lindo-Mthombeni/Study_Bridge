import {
  Calculator,
  FlaskConical,
  Dna,
  BadgeDollarSign,
  Briefcase,
  Languages,
  Globe,
  History,
} from "lucide-react";
import type { ReactNode, JSX } from "react";

export interface SubjectData {
  subject: string;
  icon: ReactNode;
  color: string;
  text: JSX.Element;
}

export const subjects: SubjectData[] = [
  {
    subject: "Mathematics",
    icon: <Calculator />,
    color: "var(--color-cyan)",
    text: <>Solve for <span>𝑥</span> like a pro</>,
  },
  {
    subject: "Physical Science",
    icon: <FlaskConical />,
    color: "var(--color-orange)",
    text: <>Understand the <span>Scientific</span> Reasons</>,
  },
  {
    subject: "Life Sciences",
    icon: <Dna />,
    color: "var(--color-lime)",
    text: <><span>Investigate</span> and Experiment</>,
  },
  {
    subject: "Accounting",
    icon: <BadgeDollarSign />,
    color: "var(--color-yellow)",
    text: <>Learn to keep track of <span>financial records</span></>,
  },
  {
    subject: "Business Studies",
    icon: <Briefcase />,
    color: "var(--color-pink)",
    text: <><span>Manage</span> resources and analyze markets</>,
  },
  {
    subject: "English",
    icon: <Languages />,
    color: "var(--color-magenta)",
    text: <>Build your <span>vocabulary</span> and language skills</>,
  },
  {
    subject: "Geography",
    icon: <Globe />,
    color: "var(--color-dark-cyan)",
    text: <>Explore the <span>world</span></>,
  },
  {
    subject: "History",
    icon: <History />,
    color: "var(--color-red)",
    text: <>Dive Deeper into the <span>past</span></>,
  },
];