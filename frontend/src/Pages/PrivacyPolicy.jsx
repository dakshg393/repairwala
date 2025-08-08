import React from "react";

import FrezzerBanner from "../Components/MinorComponent/FrezzerBanner.jsx";
import { mainPageTitleBanner } from "../assets/Images/index.js";
import { privacyPolicy, privacyPolicy2 } from "../utils/privacyPolicy.js";


const PrivacyPolicy = () => {

    return (
        <>
            <section className={`flex items-center flex-col`} >

                <FrezzerBanner banner={mainPageTitleBanner} insideBoxCss="border-1 border-mushroom justify-center">
                    <h1 className="text-[52px] font-heading font-medium text-black">Privacy Policy</h1>
                </FrezzerBanner>


            </section>


            {/* Brand banner and other image Poster*/}
            <section className="w-full my-20 flex flex-col gap-10">
                <h1 className="text-center font-heading font-medium text-[32px] text-primary-text">Privacy Policy of RepairWala</h1>



                {/* {privacyPolicy div} */}
                <div className="flex flex-col flex-wrap gap-[40px] w-full">
                    {privacyPolicy.map((terms) => (

                        <div className="text-wrap gap-[15px] flex flex-wrap flex-col w-full">

                            <div className="flex items-center gap-3 text-center ">
                                {/* Circular dot */}
                                <span className="w-4 h-4 rounded-full bg-primary  "></span>

                                {/* Title */}
                                <h1 className="font-heading font-medium text-[24px] text-primary-text">
                                    {terms.title}
                                </h1>
                            </div>

                            {/* <h1 className="font-heading font-medium text-[24px] text-primary-text">{terms.title}</h1> */}
                            <p className="font-heading font-normal  text-primary-text text-[16px] whitespace-pre-line m-0 leading-4">{terms.text}</p>
                        </div>

                    ))}
                </div>


                {/* Terms And Conditions for Service Providers */}

                <div className="flex flex-col flex-wrap gap-[40px] w-full">
                      <h1 className="font-heading font-medium text-[24px] text-primary-text my-4">TERMS AND CONDITIONS FOR SERVICE PROVIDERS</h1>
                    {privacyPolicy2.map((terms) => (

                        <div className="text-wrap gap-[15px] flex flex-wrap flex-col w-full">

                            <div className="flex items-center gap-3 text-center ">
                                {/* Circular dot */}
                                <span className="w-4 h-4 rounded-full bg-primary  "></span>

                                {/* Title */}
                                <h1 className="font-heading font-medium text-[24px] text-primary-text">
                                    {terms.title}
                                </h1>
                            </div>

                            {/* <h1 className="font-heading font-medium text-[24px] text-primary-text">{terms.title}</h1> */}
                            <p className="font-heading font-normal  text-primary-text text-[16px] whitespace-pre-line m-0 leading-4">{terms.text}</p>
                        </div>

                    ))}
                </div>
            </section>

        </>
    )
}

export default PrivacyPolicy