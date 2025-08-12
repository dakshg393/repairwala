// import React from "react";

// const InputBox = ({ label, id, register, required = false, type = "text", placeholder="", className }) => {
//     return (
//         <div className={`relative bg-accent w-auto h-[54px] border-1 rounded-xl p-2 ${className}`}>
//             <input
//                 id={id}
//                 type={type}
//                 placeholder={placeholder}
//                 {...register(id, { required })}
//                 className="w-full h-full p-2 focus:outline-none focus:bg-none bg-accent"
//             />
//             <label
//                 htmlFor={id}
//                 className="absolute -top-4 left-4 bg-accent w-auto whitespace-normal "
//             >
//                 {label}
//             </label>
//         </div>
//     );
// };

// export default InputBox;


import React from "react";

const InputBox = ({ label, id, register, required = false, type = "text", placeholder="", className ,bg="bg-accent"}) => {
    return (
        <div className={`relative bg-inherit w-auto h-[54px] border-1 rounded-xl p-2 ${className} ${bg}`}>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id, { required })}
                className={`w-full h-full p-2 focus:outline-none focus:bg-none ${bg}`}
            />
            <label
                htmlFor={id}
                className={`absolute -top-4 left-4  w-auto whitespace-normal ${bg} `}
            >
                {label}
            </label>
        </div>
    );
};

export default InputBox;
