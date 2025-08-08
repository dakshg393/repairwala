import React from "react";

import FrezzerBanner from "../Components/MinorComponent/FrezzerBanner.jsx";
import { mainPageTitleBanner } from "../assets/Images/index.js";
import { termsAndConditions } from "../utils/termsAndConditions.utils.js";

const TermsAndConditions = () => {

    return (
        <>
            <section className={`flex items-center flex-col`} >

                <FrezzerBanner banner={mainPageTitleBanner} insideBoxCss="border-1 border-mushroom justify-center">
                    <h1 className="text-[52px] font-heading font-medium text-black">Terms and Conditions</h1>
                </FrezzerBanner>


            </section>


            {/* Brand banner and other image Poster*/}
            <section className="w-full my-20 flex flex-col gap-10">
                <h1 className="text-center font-heading font-medium text-[32px] text-primary-text">Terms & Conditions of RepairWala</h1>
                <div>

                    <p className="font-heading font-normal  text-primary-text text-[16px]">Document is revealed in accordance with the provisions of Rule three (1) of the knowledge Technology (Intermediaries guidelines) Rules, 2016 that need business enterprise the foundations and laws, privacy policy and User agreement for access or usages of the www.doorstephub.com website.
                        The terms "Doorstep Hub " utilized in this document refers to Doorstep Hub a press release by you that the knowledge in your notice is correct which you're approved to act on behalf of the various business.

                        The term " Platform " utilized in this document refers to the web site (being www.doorstephub.com), mobile apps and or the other services offered / to be offered by Doorstep Hub.

                        These Terms and Conditions, in conjunction with the Terms of Use, Privacy Policy, IPR Infringement Policy and the other terms specifically noted in any of these documents, represent a wrongfully binding agreement (the "Agreement") between you and Doorstep Hub in relevancy your use of the Platform.
                        All material possession that is in relevancy this Platform is in hand by and vests in Doorstep Hub.

                        Acceptance of any product beneath DSAR shall be at the only discretion of Doorstep Hub repairs. DSAR supply are going to be as per the Scheme/rate card certified by Doorstep Hub with Seal & signature. DSAR costs & terms area unit subject to alter with none previous notice.</p>
                </div>


                <div className="flex flex-col flex-wrap gap-[40px] w-full">
                    {termsAndConditions.map((terms) => (

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

export default TermsAndConditions