import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function styleMerge(...styles: ClassValue[]) {
  return twMerge(clsx(...styles));
}

interface SquircleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  additionalStyles?: string;
}
// M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9 (for squircle)
export const Squircle: React.FC<SquircleProps> = ({
  children,
  additionalStyles,
  ...props
}) => {
  const baseStyles = "squircle";
  return (
    <div className={styleMerge(baseStyles, additionalStyles)} {...props}>
      {children}
    </div>
  );
};
