import React from "react";

import FrezzerBanner from "../Components/MinorComponent/FrezzerBanner.jsx";
import { mainPageTitleBanner } from "../assets/Images/index.js";
import Button from "../Components/MinorComponent/Button.jsx";
import InputBox from "../Components/MinorComponent/InputBox.jsx";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
const Profile = () => {


    
          const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    

    return (
        <>
            <section className={`flex items-center flex-col`} >

                <FrezzerBanner banner={mainPageTitleBanner} insideBoxCss="border-1 border-mushroom justify-center">
                    <h1 className="text-[52px] font-heading font-medium text-black">Profile</h1>
                </FrezzerBanner>


            </section>


            {/* Brand banner and other image Poster*/}
            <section className="w-full my-20 flex flex-col  gap-[100px]">

                <div className="bg-accent w-full p-[25px] gap-[63px] rounded-[20px] flex flex-col md:flex-row">
                    <div className="flex  flex-1 flex-col gap-[32px]  ">
                        <Button className="p-[20px] gap-[10px] md:w-[338px] h-[64px] max-w-none">Account Details</Button>
                        <Button className="bg-accent p-[20px] gap-[10px] md:w-[338px] h-[64px] max-w-none">Logout </Button>
                    </div>

                    <div className="flex flex-col   md:w-[782px] gap-[50px]">
                        <span className="flex flex-row gap-[20px] w-full">
                            <InputBox id={"firstname"} label={"First Name"} type="text" placeholder=" Enter First Name"  register={register} required />
                            <InputBox id={"lastname"} label={"Last Name"} type="text" placeholder=" Enter First Name"  register={register} required />
                        </span>
                        <span className="flex flex-col">
                           <InputBox id={"username"} label={"Username"} type="text" placeholder="Enter Username"  register={register} required />
                           <p>This will be how your name will be displayedin the accountsection and in reviews </p>
                           </span>
                            <InputBox id={"email"} label={"Email"} type="text" placeholder=" Enter Email"  register={register} required />
                           
                        <div className="flex flex-col md:flex-row gap-[13px] items-center ">
                            <span className="flex flex-row gap-[13px]">
                                <Button>Save Changes</Button>
                           <Button>Change Password</Button>
                           </span>
                           <Link className="underline">View Book Appointment</Link>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Profile