import React from "react"
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin  } from 'react-icons/fa';
import { PiInstagramLogoFill } from "react-icons/pi";


const SocialMediaBox = () => {
    return (
        <div className="flex flex-row gap-4">

            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <PiInstagramLogoFill className="text-primary" size={18} />
            </a>

            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <FaWhatsapp className="text-primary" size={18} />
            </a>


            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <FaFacebook className="text-primary" size={18} />
            </a>

            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <FaLinkedin className="text-primary" size={18} />
            </a>


        </div>
    )
}

export default SocialMediaBox