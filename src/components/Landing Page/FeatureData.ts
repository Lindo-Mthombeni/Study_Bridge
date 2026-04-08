export interface FeatureData {
  head: string;
  content: string;
  color: string;
}

export const features: FeatureData[] = [
  { head: "10k+", content: "students", color: "var(--color-cyan)" },
  { head: "500+", content: "papers", color: "var(--color-orange)" },
  { head: "95%", content: "pass rate", color: "var(--color-lime)" },
  { head: "Free", content: "forever", color: "var(--color-magenta)" },
];