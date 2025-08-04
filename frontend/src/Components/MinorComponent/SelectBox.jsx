import React from "react";
const SelectBox = ({ label, id, register, options = [], required = false }) => {
  return (
    <div className="relative bg-accent  max-w-[315px] h-[54px] border-1 rounded-xl p-2">
      <select
        id={id}
        {...register(id, { required })}
        className="w-full h-full p-2 bg-accent text-black focus:outline-none rounded"
      >
        <option value="" disabled>Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <label htmlFor={id} className="absolute -top-4 left-4 bg-accent">
        {label}
      </label>
    </div>
  );
};

export default SelectBox
