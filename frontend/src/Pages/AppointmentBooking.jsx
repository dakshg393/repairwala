// MultiStepForm.jsx
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logo, AppointmentBanner } from "../assets/Images/index.js"
import { AppointmentSteps } from "../utils/Appointment.utils.jsx";
import Button from "../Components/MinorComponent/Button.jsx";
import Step1Appointment from "../Components/MajorComponent/MultiStepForm/Step1Appointment.jsx";
import Step2Appointment from "../Components/MajorComponent/MultiStepForm/Step2Appointment.jsx";
import Step3Appointment from "../Components/MajorComponent/MultiStepForm/Step3Appointment.jsx";
import Step4Appointment from "../Components/MajorComponent/MultiStepForm/Step4Appointment.jsx";

import { useForm } from "react-hook-form";

const AppointmentBooking = () => {


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data,e) => {
        e.preventDefault();
        console.log("Form Data:", data);
        // you can send data to backend here
    };




    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        services: [],
        date: "",
        address: "",
        paymentMethod: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = (e) =>{
          e.preventDefault();
          setCurrentStep((prev) => prev + 1);
    } 
    const prevStep = (e) =>{
         e.preventDefault();
        setCurrentStep((prev) => prev - 1);
    } 

    // const handleSubmit = () => {
    //     console.log(formData);
    //     // send to backend API
    // };

    return (


        <section className="flex  justify-between bg-accent min-h-screen relative w-full pb-20">
            <div className="mt-6 flex justify-center w-full">
                <Link to={"/"}>
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[209px] h-[49px]  cursor-pointer"
                    />
                </Link>
            </div>

            <div className="flex h-full justify-center ">


                <div className="bg-[#E5F2F2] w-[90vw] md:w-[820px] min-h-[639px]  rounded-[20px] absolute top-[140px] left-[24px] p-10">

                    {/* Steps Div */}
                    {(currentStep <= 4) &&
                        <div className=" flex flex-row  w-full h-auto relative -top-[70px] gap-[25px] overflow-auto">
                            {AppointmentSteps.map((step) => (
                                <div key={step.name} className="flex  items-center gap-[15px] flex-col max-w-[191px]">
                                    <span className={`h-[49px] w-[49px] flex items-center justify-center ${currentStep >= step.step ? "bg-primary" : "bg-[#E5F2F2]"} rounded-full `}><step.icon size={18} /></span>
                                    <span className="flex flex-col items-center justify-center gap-[7px] text-center">
                                        <h1>{step.name}</h1>
                                        <p className="">{step.desc}</p>
                                    </span>
                                </div>
                            ))}
                        </div>
                    }

                    {/* Mid Div Of children */}
                    <form action="" onSubmit={handleSubmit(onSubmit)} >

                        <div className="">

                            {currentStep === 1 && <Step1Appointment formData={formData} handleChange={handleChange} register={register} />}
                            {currentStep === 2 && <Step2Appointment formData={formData} handleChange={handleChange} register={register} />}
                            {currentStep === 3 && <Step3Appointment formData={formData} handleChange={handleChange} register={register} />}
                            {currentStep === 4 && <Step4Appointment formData={formData} handleChange={handleChange} register={register} />}

                        </div>
                        <div className="flex flex-row gap-[20px] pt-[20px]">
                            {currentStep > 1 && <Button onClick={prevStep}>Back</Button>}
                            {currentStep < 5 && <Button onClick={nextStep}>Next</Button>}
                            {currentStep === 5 && <Button type="submit" onClick={handleSubmit}>Submit</Button>}
                        </div>

                    </form>



                </div>

            </div>





            <div className="w-[513px] h-[832px] bg-primary right-0 rounded-bl-[30px] rounded-tl-[30px] flex items-center">
                <img src={AppointmentBanner} alt="" />
            </div>




            {/* 
            {currentStep === 1 && <Step1Appointment formData={formData} handleChange={handleChange} />}
            {currentStep === 2 && <Step2Services formData={formData} handleChange={handleChange} />}
            {currentStep === 3 && <Step3Address formData={formData} handleChange={handleChange} />}
            {currentStep === 4 && <Step4Payment formData={formData} handleChange={handleChange} />}

            <div>
                {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                {currentStep < 4 && <button onClick={nextStep}>Next</button>}
                {currentStep === 4 && <button onClick={handleSubmit}>Submit</button>}
            </div> */}
        </section>


    );
}


export default AppointmentBooking