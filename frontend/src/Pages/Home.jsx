import React from "react";
import Button from "../Components/MinorComponent/Button";
import { categories } from "../utils/Home.utils.jsx";
import { logo } from "../assets/Images/index.js";
import {s1banner1,s1Sidebanner1,s1Sidebanner2, s2banner1 } from "../assets/Images/Hero/index.js";

const Home = () => {

    return (
        <>
            {/* Section one that includes Main Home Page Banners and Categories below */}
            <section className="h-[100vh] flex  justify-center flex-col gap-10 ">

                {/* Main Banners Main Div */}
                <div className="flex flex-row  w-full h-[70%] gap-x-2">

                    {/* Main Banner Sub Div Bannner 1 */}
                    <div className="flex p-4 text-white flex-col w-[60%] h-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${s1banner1})` }} >
                        <h1 className="font-heading ">We Bring Your <br />
                            Home Appliances Back to Life
                        </h1>
                        <p className="font-para">We are Committed to Provide you a <br /> Safe Service Experience</p>
                    </div>

                    {/* Main Banner Sub Div 2  */}
                    <div className="flex flex-col  w-[40%] gap-y-2 h-full">
                        {/* Sub div 2 Banner 1 */}
                        <div className="w-full h-1/2 bg-cover bg-center rounded-2xl text-white p-4  " style={{ backgroundImage: `url(${s1Sidebanner1})` }}>
                            <p className="pb-4">Your Local Appliance Repair Service Expert</p>
                            <h1 className="pb-4">Skilled, Affordable Service <br />
                                on Your Schedule</h1>
                            <Button>Book Appointment</Button>
                        </div>
                        {/* sub Div2 Banner 2 */}
                        <div className="w-full h-1/2 bg-cover bg-center rounded-2xl text-white p-4 " style={{ backgroundImage: `url(${s1Sidebanner2})` }}>
                            <p className="bottom-0">Home Appliances <br />
                                Repair & Installation Services <br />
                                in Indore</p>
                        </div>
                    </div>

                </div>

                {/* Categories Div in Section 1 Below Banner Div */}
                <div className="flex items-center justify-center gap-x-12 h-60 w-full overflow-x-auto overflow-y-hidden  scrollbar-hide">

                    {/* Categories List under Catergories div */}
                    {categories.map((categorie, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 flex flex-col items-center w-36 h-52 border-2 border-accent border-solid"
                        >
                            <span className="w-full h-[70%] flex justify-center items-center">
                                <img className="max-h-full object-contain" src={categorie.image} alt={categorie.name} />
                            </span>
                            <span className="bg-accent w-full h-[30%] flex justify-center items-center text-center text-sm">
                                {categorie.name}
                            </span>
                        </div>
                    ))}

                </div>

            </section >

            {/* Section 2 Of Home Page includes Communications details and Banner */}
            <section className="flex  gap-y-2.5  w-full h-[100vh] my-20 flex-col">

                {/*  Communication details div */}

                <div className=" w-full flex itesms-center justify-between h-50 flex-row  " >

                    <div className="flex items-start justify-between  flex-col  ">
                        <h1>The key to a long lasting <br />
                            relationship is communication</h1>
                        <h1>Multiple ways to reach us.</h1>
                        <Button className="w-20" >Book Now</Button>
                    </div>

                    <div className=" flex justify-between items-end flex-col  gap-y-2.5">

                        <div className="flex gap-2.5">
                            <span className="bg-accent px-7.5 py-2.5 rounded-xl border-1 border-accent">Helpline number: 1800 266 1880 </span>
                            <span className=" px-7.5 py-2.5 rounded-xl border-1 border-accent">Email: service.in@bosch-home.com</span>
                        </div>

                        <div className="flex gap-2.5">
                            <span className=" px-7.5 py-2.5 rounded-xl border-1 border-accent">Chat with us via WhatsApp: +918451000555</span>
                            <span className="bg-accent px-7.5 py-2.5 rounded-xl border-1 border-accent">Book appointment online </span>
                        </div>

                        <div className="flex gap-2.5">
                            <span className=" px-7.5 py-2.5 rounded-xl border-1 border-accent">SMS Service: Please send an SMS to 9133711006 by typing- BSH "Your Pincode".  </span>
                     
                        </div>
                    </div>
                </div>

                {/* Banner div Under communication div */}

                <div className="w-full h-91.5 rounded-2xl relative bg-cover bg-center" style={{ backgroundImage: `url(${s2banner1})` }}>
                    <img className="w-42.5 h-10 left-7.5 top-7.5 absolute" src={logo} />
                </div>


            </section>

        </>
    )
}

export default Home