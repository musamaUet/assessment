import React from "react";
import { SpinnerIcon } from "../svgs";

const Button = ({
  title,
  onClick,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      className={`button flex items-center justify-center px-4 py-2 rounded ${
        disabled || isLoading
          ? "bg-gray-400 text-white cursor-not-allowed"
          : `hover:opacity-90`
      }`}
      onClick={!isLoading && !disabled ? onClick : undefined}
      disabled={disabled || isLoading}
    >
      {isLoading ? <SpinnerIcon /> : title}
    </button>
  );
};

export default Button;