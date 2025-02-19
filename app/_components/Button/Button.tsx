import React from "react";

import { Typography } from "../Typography/Typography";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: ButtonVariant;
  className?: string;
};

const buttonStyle: Record<ButtonVariant, string> = {
  primary: "bg-primary-main text-white border-2 border-primary-light/50",
  secondary: "text-white border-2 border-primary-light/50",
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const buttonClasses = `w-[400px] h-[78px] rounded-full font-bold ${buttonStyle[variant]} ${className}`;

  return (
    <>
      <button onClick={onClick} className={buttonClasses}>
        <Typography text={text} variant="button" color="white" bold="bold" />
      </button>
    </>
  );
};
