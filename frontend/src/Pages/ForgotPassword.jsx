import React from "react";
import AuthContainer from "../Components/MajorComponent/AuthContainer";
import InputBox from "../Components/MinorComponent/InputBox";
import { useForm } from "react-hook-form";
import Button from "../Components/MinorComponent/Button";
import DashedLine from "../Components/MinorComponent/DashedLine.jsx";
import { Link } from "react-router-dom";
import { ICpassword,ICemail } from "../assets/icons/index.js";


const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    return (
        <AuthContainer>
           
           
            {/* <div className="w-[420px] flex flex-col gap-[50px] px-3 py-5"> */}
                {/* Top Div Include Logo And Title */}
                {/* <div className="flex flex-col gap-[30px] items-center justify-center">
                    <span>
                        <img src={ICpassword} alt="Logo" />
                    </span>
                    <span className="flex flex-col gap-[15px] items-center justify-center">
                        <h1>Forgot your password?</h1>
                        <p className="text-center">We've sent a 6-digit confirmation email to your email. Please enter the code in below box to verify your email.</p>
                    </span>
                </div> */}

                {/* Bottom Div Include Form With Mail id and Password */}

                {/* <div className="flex items-center justify-center flex-col gap-[30px] w-full">
                    <InputBox className={"w-full"} id={"email"} label={"Email"} type="email" placeholder=" Enter Email" register={register} bg="bg-white" required />
                   

                    <Button className="w-full max-w-none justify-center">Send Sequest </Button>
                   
                    <Link to={'/login'}  className="underline"> &lt; Return to sign in</Link>
                </div> */}


            {/* </div> */}













              <div className="w-[420px] flex flex-col gap-[50px] px-3 py-5">
                {/* Top Div Include Logo And Title */}
                <div className="flex flex-col gap-[30px] items-center justify-center">
                    <span>
                        <img src={ICemail} alt="Logo" />
                    </span>
                    <span className="flex flex-col gap-[15px] items-center justify-center">
                        <h1>Request sent successfully!</h1>
                        <p className="text-center">We've sent a 6-digit confirmation email to your email. Please enter the code in below box to verify your email.</p>
                    </span>
                </div>

                {/* Bottom Div Include Form With Mail id and Password */}

                <div className="flex items-center justify-center flex-col gap-[30px] w-full">
                    <InputBox className={"w-full"} id={"email"} label={"Email"} type="email" placeholder=" Enter Email" register={register} bg="bg-white" required />
                     <InputBox className={"w-full"} id={"password"} label={"Password"} type="password" placeholder="Enter 6+ Charecters" register={register} bg="bg-white" required />
                        <InputBox className={"w-full"} id={"confpassword"} label={"Confirm Password"} type="password" placeholder="Enter 6+ Charecters" register={register} bg="bg-white" required />
                 
                    <Button className="w-full max-w-none justify-center">Update Password </Button>

                    <p>Don’t have a code? <span  className="text-[#00A76F]"> Resend code</span></p>
                                        
                   
                    <Link to={'/login'} > &lt; <span  className="underline"> Return to sign in </span></Link>
                </div>


            </div>


        </AuthContainer>
    )
}

export default ForgotPassword