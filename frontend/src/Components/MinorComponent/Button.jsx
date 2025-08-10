import React from "react";

const Button = ({ children, className = "" ,onClick}) => {
  return (
    <button onClick={onClick}
      className={`inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded cursor-pointer max-w-fit   text-[14px] font-para font-normal ${className}`}

    >

      {children}
    </button>
  );
};

export default Button;
