import React from "react";

import { s3banner1 } from "../assets/Images/Hero/index.js";
import ServiceCard from "../Components/MajorComponent/ServiceCard.jsx";
import RequestCallbackForm from "../Components/MajorComponent/RequestCallBackForm.jsx";
import FrezzerBanner from "../Components/MinorComponent/FrezzerBanner.jsx";
import BrandCard from "../Components/MajorComponent/BrandCard.jsx";
import BasemapImage from "../assets/Images/BasemapImage.png"


const Services = () => {

    return (
        <>
            <section className={`flex items-center `} >

                <FrezzerBanner banner={s3banner1} insideBoxCss="border-1 border-mushroom justify-center">
                    <h1>Services</h1>
                </FrezzerBanner>

            </section>


            <section className="my-10">
                <ServiceCard />
            </section>

            {/* Brand banner and Brand Card and BaseMap */}
            <section className="w-full my-20 flex flex-col gap-10">
                <BrandCard />

                {/*  Map Div */}
                <div className="flex flex-col gap-7 items-center h-[390px] md:h-[376px] bg-center bg-cover bg-no-repeat rounded-2xl pt-10 " style={{ backgroundImage: `url(${BasemapImage})` }}>
                    <h1>Areas We Services</h1>
                    <p>We offer wide range of services to all major locations</p>
                </div>

            </section>

            <section className="my-10">
                <RequestCallbackForm />
            </section>


            <section className="">

            </section>
        </>
    )
}

export default Services