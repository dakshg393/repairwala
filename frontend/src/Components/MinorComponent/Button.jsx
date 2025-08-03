import React from "react";

const Button = ({ children, icon: Icon, className = "", ...props }) => {
  return (
    <button
      className={` items-center gap-2 bg-primary text-white px-4 py-2 cursor-pointer rounded w-auto inline-flex ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5 " />} {/* Lucide icon */}
      {children}
    </button>
  );
};

export default Button;
