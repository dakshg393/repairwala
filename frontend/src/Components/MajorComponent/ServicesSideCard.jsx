import React from "react";

const ServiceSideCard = () => {
    return (
        <div className="flex h-auto flex-wrap items p-5 bg-accent rounded-3xl w-full lg:w-74">


            <div className="flex flex-wrap h-auto  flex-col gap-10 rounded-3xl">
                <h1 className="text-primary">Repairwala Products Repair Services</h1>
                <div className="flex justify-center md:justify-start  md:flex-col h-auto gap-3 flex-wrap">
                    <div className="bg-white px-1.5 py-2.5 rounded-xl w-fit">Telivision</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit">Air Conditioners</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit">Window Air Conditioners</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit">Refrigerators</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit">Washing Machines</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit">water purifier</div>
                    <div className=" px-1.5 py-2.5 rounded-xl w-fit">Microwave Ovens</div>

                 
                </div>
            </div>


        </div>
    )
}

export default ServiceSideCard