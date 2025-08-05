import React from "react";
import { s2banner1 } from "../../assets/Images/Hero";

const FrezzerBanner = ({ children, banner={s2banner1}, insideBoxCss , className }) => {
    return (
        <div className={`flex items-center justify-center  rounded-2xl w-full bg-cover bg-center text-white p-6 min-h-[411px] ${className}`} style={{ backgroundImage: `url(${banner})` }}>

            <div className={`flex items-center flex-col justify-between bg-[#A1A1A1]/40 rounded-2xl p-6 min-h-[354px] gap-12 w-full ${insideBoxCss} `} >
                {children}
            </div>

        </div>
    )

}

export default FrezzerBanner