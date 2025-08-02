import React from "react";

const Button = ({ children, icon: Icon, className = "", ...props }) => {
  return (
    <button
      className={`flex items-center gap-2 bg-primary text-white px-4 py-2 cursor-pointer rounded ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />} {/* Lucide icon */}
      {children}
    </button>
  );
};

export default Button;
