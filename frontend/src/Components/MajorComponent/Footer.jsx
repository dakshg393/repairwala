import React from "react";
import FrezzerBanner from "../MinorComponent/FrezzerBanner";
import footerBanner from '../../assets/Images/FooterBanner.png'
import Button from "../MinorComponent/Button";
import logo from "../../assets/Images/Logo.png";
import footerBg from "../../assets/Images/FooterBg.png"
import { ArrowUp, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center h-auto w-full px-4">

            {/* Fotter Banner Div */}
            <FrezzerBanner banner={footerBanner} >
                <div className="h-full flex items-center justify-center gap-[70px] flex-col">
                    <h1>Having a problem? We’ll fixed it today!</h1>
                    <p>Please feel free to contact us. We’re super happy to talk to you.</p>
                    <Button>Contact us Now</Button>
                </div>
            </FrezzerBanner>


            {/* Main Footer with Major Footer and Term and Conditions also */}
            <div className="flex flex-col w-full pt-10 gap-8.5" style={{backgeoundImage:`url(${footerBg})`}}>

                {/* {Main Footer With Major Components} */}
                <div className="flex  justify-between w-full flex-col md:flex-row gap-12 ">
                    {/* Left Side Div Of Footer Main */}
                    <div className="flex flex-col gap-8.5">
                        <img className="max-w-[213px]" src={logo} alt="Logo" />
                        <span>
                            Monday – Friday: 9 AM – 7 PM<br />
                            Saturday: 10 AM – 5 PM
                        </span>
                        <span className="flex flex-row">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    {/* Center Side Div Of Footer Main */}
                    <div className="flex flex-col md:flex-row gap-5 md:gap-20">

                        <div className="flex flex-col gap-5">
                            <span >// Navigation</span>
                            <span className="flex flex-col gap-4 ">
                                <h1>Home</h1>
                                <h1>About</h1>
                                <h1>Service</h1>
                                <h1>Contact Us</h1>
                            </span>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <span>// Services</span>
                            <span className="flex flex-col gap-4 ">
                                <h1>Refrigerators </h1>
                                <h1>Air Conditioners </h1>
                                <h1>Window Air Conditioners </h1>
                                <h1>Water Purifiers </h1>
                                <h1>Microwave Ovens </h1>
                                <h1>Television </h1>
                            </span>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <span>// Contact us</span>
                            <span className="flex flex-col gap-4 ">
                                <h1>+1(135)658-9856</h1>
                                <h1>hello@example.com</h1>
                            </span>
                        </div>
                    </div>

                    {/* Right Side Div Of Footer Main */}
                    <div>
                        <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <ArrowUp/></Button>
                    </div>


                </div>
               
                {/* Foooter Below Div Of Terms And Conditions */}
                <div className="w-full flex flex-col gap-5 md:flex-row justify-between py-5 border-t-1 border-accent">
                    <span>Terms and conditions</span>
                    <span>© Electrician. All Rights Reserved. Licensing</span>
                    <span>Privacy policy</span>

                </div>

            </div>




        </footer>

    )
}

export default Footer