import React from "react";
import { AuthContainerBanner, logo } from "../../assets/Images";
import { Link } from "react-router-dom";

const AuthContainer = ({ children }) => {
    return (
        <div className="relative flex h-screen md:h-full">
            {/* Left image container */}
            <div className="relative hidden md:block">
                <img
                    src={AuthContainerBanner}
                    alt="Repair Wala"
                    className="h-full object-cover"
                />
                <Link to={"/"} className="absolute top-6 left-6 z-10">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[210px] h-[49px]"
                    />
                </Link>
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