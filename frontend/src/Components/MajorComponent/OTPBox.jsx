import React, { useState, useRef } from "react";

const OTPBox = ({
  length = 6,
  id, // same as name
  register,
  setValue,
  required = false,
  className = "",
  bg = "bg-white"
}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Update RHF hidden field
    setValue(id, newOtp.join(""));

    // Auto move
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Label */}
     

      {/* OTP Boxes */}
      <div className="flex gap-2">
        {otp.map((digit, index) => (
          <div
            key={index}
            className={`relative w-[54px] h-[54px] border-1 rounded-xl p-2 ${bg}`}
          >
            <input
              id={`${id}-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className={`w-full h-full text-center text-lg font-bold focus:outline-none ${bg}`}
            />
          </div>
        ))}
      </div>

      {/* Hidden field for form submission */}
      <input type="hidden" id={id} {...register(id, { required })} />
    </div>
  );
};

export default OTPBox;
