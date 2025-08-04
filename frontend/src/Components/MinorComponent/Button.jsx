import React from "react";

const Button = ({ children, icon: Icon, className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded cursor-pointer max-w-fit ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;
