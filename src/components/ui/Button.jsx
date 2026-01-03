import React from "react";

const Button = ({ children, variant = "primary", ...props }) => {
  const baseClasses =
    "px-6 py-3 rounded-lg font-semibold transition-colors duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-(--color-primary) text-white hover:bg-(--color-primary-light)"
      : "bg-(--color-highlight) text-(--color-text-main) hover:opacity-85";

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
