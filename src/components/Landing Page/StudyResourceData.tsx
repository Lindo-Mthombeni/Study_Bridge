import { Zap, FileText, Lightbulb } from "lucide-react";
import type { ReactNode } from "react";

export interface StudyResourceData {
  head: string;
  name: string;
  text: string;
  icon: ReactNode;
  color: string;
}

export const studyResources: StudyResourceData[] = [
  {
    head: "25+ sheets",
    name: "Formula Sheets",
    text: "Quick access to all essential formulas for Maths and Physics",
    icon: <Zap />,
    color: "var(--color-orange)",
  },
  {
    head: "40+ guides",
    name: "Study Guides",
    text: "Comprehensive guides covering core concepts and exam tips",
    icon: <FileText />,
    color: "var(--color-lime)",
  },
  {
    head: "100+ tips",
    name: "Key Exam Tips",
    text: "Most repeated questions and strategies for tackling finals",
    icon: <Lightbulb />,
    color: "var(--color-magenta)",
  },
];