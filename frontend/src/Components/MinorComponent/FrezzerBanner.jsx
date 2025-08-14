import React from "react";
import { s2banner1 } from "../../assets/Images/Hero";

const FrezzerBanner = ({ children, banner={s2banner1}, insideBoxCss , className }) => {
    return (
        <div className={`flex items-center justify-center  rounded-2xl w-full bg-cover bg-center text-white p-6 min-h-[411px] z-10 ${className}`} style={{ backgroundImage: `url(${banner})` }}>

            <div className={`flex items-center flex-col justify-center bg-[#A1A1A1]/40 rounded-2xl  min-h-[354px] gap-12 w-full text-center backdrop-blur-sm texture-noise  ${insideBoxCss} `} >
                {children}
            </div>

        </div>
    )

}

export default FrezzerBanner