import React from "react";
import mainbanner from "../assets/Images/Hero/main-banner.png"
import sidebanner1 from "../assets/Images/Hero/side-banner-1.png"
import sidebanner2 from "../assets/Images/Hero/side-banner-2.png"
import Button from "../Components/MinorComponent/Button";
import { categories } from "../utils/Home.utils.jsx";

const Home = () => {

    return (
        <section className="h-[100vh] flex  justify-center flex-col gap-10">

            <div className="flex flex-row  w-full h-[70%] gap-x-2">
                <div
                    className="flex p-4 text-white flex-col w-[60%] h-full bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url(${mainbanner})` }}
                >
                    <h1 className="font-heading ">We Bring Your <br />
                        Home Appliances Back to Life
                    </h1>
                    <p className="font-para">We are Committed to Provide you a <br />
                        Safe Service Experience</p>
                </div>
                <div className="flex flex-col  w-[40%] gap-y-2 h-full">
                    <div className="w-full h-1/2 bg-cover bg-center rounded-2xl text-white p-4  " style={{ backgroundImage: `url(${sidebanner1})` }}>
                        <p className="pb-4">Your Local Appliance Repair Service Expert</p>
                        <h1 className="pb-4">Skilled, Affordable Service <br />
                            on Your Schedule</h1>
                        <Button>Book Appointment</Button>
                    </div>
                    <div className="w-full h-1/2 bg-cover bg-center rounded-2xl text-white p-4 " style={{ backgroundImage: `url(${sidebanner2})` }}>
                        <p className="bottom-0">Home Appliances <br />
                            Repair & Installation Services <br />
                            in Indore</p>
                    </div>
                </div>

            </div>

            {/* <div className="flex items-center justify-center flex-wrap gap-6 w-full overflow-y-auto">

                {categories.map((categorie)=>(
                    <div key={categorie} className=" flex flex-col items-center w-36 h-52 border-2 border-accent border-solid  ">
                    <span className=" w-full h-[70%] flex justify-center items-center"><img className="  " src={categorie.image} alt="" /></span>
                    <span className="bg-accent w-full h-[30%] flex justify-center items-center text-center">{categorie.name}</span>
                </div>
                ))}
                
            </div> */}
            <div className="flex items-center justify-center gap-6 h-60 w-full overflow-x-auto overflow-y-hidden p-4 scrollbar-hide">

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
    )
}

export default Home