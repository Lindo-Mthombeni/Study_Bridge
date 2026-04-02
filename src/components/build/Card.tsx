import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function styleMerge(...styles: ClassValue[]) {
  return twMerge(clsx(...styles));
}


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  additionalStyles?: string;
}

export const Card: React.FC<CardProps> = ({
  variant,
  children,
  additionalStyles,
  ...props
}) => {
  const baseStyles = "rounded-[50px] flex p-6";

  const variantStyles = {
    primary: 'card-primary',
    secondary: "card-secondary",
  };

  return (
    <div
      className={styleMerge(
        baseStyles,
        variantStyles[variant],
        additionalStyles
      )}
      {...props}
    >
      {children}
    </div>
  );
};