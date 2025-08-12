import React from "react"
import InputBox from "../../MinorComponent/InputBox"


const Step4Appointment = ({register}) => {
 
    return (

        <div className="flex flex-col   gap-[40px] w-full h-full">
            <h1 className="text-center">Book Appointment</h1>
            <span className="flex flex-row gap-[29px]">
                <InputBox id={"firstname"} label={"First Name"} type="text" placeholder=" Enter First Name" bg="bg-[#E5F2F2]" register={register} required />
                <InputBox id={"lastname"} label={"Last Name"} type="text" placeholder=" Enter First Name" bg="bg-[#E5F2F2]" register={register} required />
            </span>
            <InputBox id={"phonenumber"} label={"Phone Number"} type="text" placeholder=" Enter Phone Number" bg="bg-[#E5F2F2]" register={register} required />
            <InputBox id={"email"} label={"Email"} type="email" placeholder=" Enter Email" register={register} bg="bg-[#E5F2F2]" required />

            <h1>Click Next & You Required Services</h1>
            <h1>Note: Services Available Cities are Indore</h1>
        </div>
    )
}

export default Step4Appointment