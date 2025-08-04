import React from "react";

const InputBox = ({ label, id, register, required = false, type = "text", placeholder="", className }) => {
    return (
        <div className={`relative bg-accent min-w-[294px] max-w-[315px] h-[54px] border-1 rounded-xl p-2 ${className}`}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id, { required })}
                className="w-full h-full p-2 focus:outline-none"
            />
            <label
                htmlFor={id}
                className="absolute -top-4 left-4 bg-accent"
            >
                {label}
            </label>
        </div>
    );
};

export default InputBox;
