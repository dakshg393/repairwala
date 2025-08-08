import React from "react"
import { FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaBox = () => {
    return (
        <div className="flex flex-row gap-4">

            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <FaInstagram className="text-primary" size={18} />
            </a>

            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <FaWhatsapp className="text-primary" size={18} />
            </a>


            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <FaFacebookF className="text-primary" size={18} />
            </a>

            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-full p-1 bg-accent flex items-center justify-center">
                <FaLinkedinIn className="text-primary" size={18} />
            </a>


        </div>
    )
}

export default SocialMediaBox