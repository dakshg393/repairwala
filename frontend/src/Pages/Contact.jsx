import React from "react";

import { s3banner1 } from "../assets/Images/Hero/index.js";
import FrezzerBanner from "../Components/MinorComponent/FrezzerBanner.jsx";
import BrandCard from "../Components/MajorComponent/BrandCard.jsx";
import { mainPageTitleBanner } from "../assets/Images/index.js";
import ContactUsCard from "../Components/MajorComponent/ContactUsCard.jsx";

const Contact = () => {

    return (
        <>
            <section className={`flex items-center `} >

                <FrezzerBanner banner={mainPageTitleBanner} insideBoxCss="border-1 border-mushroom justify-center">
                    <h1>Contact Us</h1>
                </FrezzerBanner>

            </section>



            {/* Constact us Card And Brand Card */}
            <section className="w-full my-20 flex flex-col gap-10">
                <ContactUsCard  />
                <BrandCard />
            </section>

        </>
    )
}

export default Contact