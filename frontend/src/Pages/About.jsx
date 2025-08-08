import React from "react";

import FrezzerBanner from "../Components/MinorComponent/FrezzerBanner.jsx";
import BrandCard from "../Components/MajorComponent/BrandCard.jsx";
import { mainPageTitleBanner } from "../assets/Images/index.js";
import s2banner1 from "../assets/Images/About/s2banner1.png";
import s2banner2 from "../assets/Images/About/s2banner2.png";


const About = () => {

    return (
        <>
            <section className={`flex items-center flex-col`} >

                <FrezzerBanner banner={mainPageTitleBanner} insideBoxCss="border-1 border-mushroom justify-center">
                    <h1>About Us</h1>
                </FrezzerBanner>


            </section>


            {/* Brand banner and other image Poster*/}
            <section className="w-full my-20 flex flex-col gap-10">


                {/* First Image + Text div on About Page */}
                <div className="flex items-center flex-col-reverse md:flex-row w-full gap-7  justify-between">

                    <div className="w-full md:w-1/2 h-full">
                        <img src={s2banner1} alt="s2banner1" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 gap-3 ">
                        <h1>India’s Trusted RepairWala Services Provider</h1>
                        <p>RepairWala is a trusted service platform founded in 2020, specializing in home appliance repairs. With 5 years of experience, we offer convenient, on-site repair services for Television, A/C, Window A/C, Refrigerators, Washing Machine, Water Purifier Microwave Ovens, and more. Our services also include painting and pest control, making us your one-stop solution for all home repair needs.</p>
                    </div>

                </div>


                {/* Second Image +Text div on About Page above brand Card*/}
                <div className="flex flex-col md:flex-row w-full gap-7 justify-between ">

                    {/* Left Side Div */}
                    <div className="flex items-center flex-col w-full md:w-1/2 gap-3">

                        {/* Title and sicription div */}
                        <div className="flex flex-col gap-3 order-1 md:order-1 ">
                            <h1>Why RepairWala?</h1>
                            <p>RepairWala offers Skilled, Experienced and Certified Technicians who specialize in repairing and servicing home appliances from all brands, ensuring timely and convenient service delivery.</p>
                        </div>

                        {/* Icons Div */}
                        <div className="order-3 md:order-2 ">


icons
                        </div>


                    </div>

                    {/* Side Image div on md and below image div on Small */}
                    <div className="order-2 md:order-3">
                        <img src={s2banner2} alt="s2Banner2" />
                    </div>

                </div>


                <BrandCard className={`md:flex-row-reverse`} />
            </section>

        </>
    )
}

export default About