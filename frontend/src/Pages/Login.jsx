import React from "react";
import AuthContainer from "../Components/MajorComponent/AuthContainer";
import {logo } from "../assets/Images/index.js"
import InputBox from "../Components/MinorComponent/InputBox";
import { useForm } from "react-hook-form";
import Button from "../Components/MinorComponent/Button";
import DashedLine from "../Components/MinorComponent/DashedLine.jsx";


const Login = ()=>{
          const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    

    return(
        <AuthContainer>
            <div className="w-[420px] flex flex-col gap-[50px] px-3 py-5">

               {/* Top Div Include Logo And Title */}
                <div className="flex flex-col gap-[30px] items-center justify-center">
                    <span>
                        <img src={logo} alt="Logo" />
                    </span>
                    <span className="flex flex-col gap-[15px] items-center justify-center">
                        <h1>Sign in to your account</h1>
                        <p>Don't have an account? <span>Get started</span></p>
                    </span>
                </div>

{/* Bottom Div Include Form With Mail id and Password */}

<div className="flex items-center justify-center flex-col gap-[30px] w-full">
         <InputBox className={"w-full"} id={"email"} label={"Email"} type="email" placeholder=" Enter Email" register={register} bg="bg-white"  required />
         <span className="flex flex-col w-full gap-[15px]">
            <h1 className="text-right">Forgot Password?</h1>
            <InputBox className={"w-full"} id={"password"} label={"Password"} type="password" placeholder=" Enter Email" register={register} bg="bg-white" required />
        </span>

        <Button className="w-full max-w-none justify-center">Sign In</Button>
        <DashedLine>OR</DashedLine>
</div>


            </div>
        </AuthContainer>
    )
}

export default Login