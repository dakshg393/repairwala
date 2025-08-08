import React from "react";
import { Link } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";

const ServiceSideCard = () => {
    return (
        <div className="flex h-auto flex-wrap items p-5 bg-accent rounded-3xl w-full lg:w-74">


            <div className="flex flex-wrap h-auto  flex-col gap-10 rounded-3xl">
                <h1 className="text-primary inline-flex items-center font-heading font-bold text-[28px]">Repairwala Products Repair Services <CgArrowTopRight color="bg-primary" size={18}/> </h1>
                <div className="flex justify-center md:justify-start  md:flex-col h-auto gap-3 flex-wrap">
                    <div className="bg-white px-1.5 py-2.5 rounded-xl w-fit font-medium font-heading text-para text-black">Telivision</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit font-medium font-heading text-para text-black">Air Conditioners</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit font-medium font-heading text-para text-black">Window Air Conditioners</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit font-medium font-heading text-para text-black">Refrigerators</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit font-medium font-heading text-para text-black">Washing Machines</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit font-medium font-heading text-para text-black">water purifier</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit font-medium font-heading text-para text-black">Microwave Ovens</div>
                </div>

            </div>


        </div>
    )
}

export default ServiceSideCard