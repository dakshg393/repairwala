import React from "react";

const TextAreaBox = ({ label, id, register, required = false, type = "text", placeholder="", className ,bg="bg-accent"}) => {
    return (
        <div className={`relative   w-auto border-1 rounded-xl p-2 ${className} ${bg}`}>
            <textarea 
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id, { required })}
                className="w-full h-full p-2 focus:outline-none "
            />
            <label
                htmlFor={id}
                className={`absolute -top-4 left-4  ${bg}`} 
            >
                {label}
            </label>
        </div>
    );
};

export default TextAreaBox;
