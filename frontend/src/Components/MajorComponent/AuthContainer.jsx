import React from "react";
import { AuthContainerBanner } from "../../assets/Images";

const AuthContainer = ({children}) => {
    return (
        <div className="relative flex h-screen">
            {/* Left image container */}
            <div className="relative">
                <img
                    src={AuthContainerBanner}
                    alt="Repair Wala"
                    className="h-full object-cover"
                />
            </div>

            {/* Right form container */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-full md:w-[597px] lg:w-[50vw] bg-white shadow-lg rounded-l-2xl">
                <div className="w-full flex items-center justify-center">
                    {/* Form content here */}
                    {children}
                    {/* ...form fields */}
                </div>
            </div>
        </div>

    )
}

export default AuthContainer