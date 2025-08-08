import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../MinorComponent/InputBox";
import TextAreaBox from "../MinorComponent/TextAreaBox";
import Button from "../MinorComponent/Button";
import SelectBox from "../MinorComponent/SelectBox";
import requestToCallBackBanner from '../../assets/Images/ReqestToCallBackBanner.png'

const RequestCallbackForm = ({ className }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Submitted:", data);
        // TODO: send data to your backend here
        reset();
    };

    return (
        <div className="flex flex-col-reverse md:flex-row w-full items-stretch  h-auto gap-5">

            {/* Image Div  */}
            <div className="relative w-full md:w-4/12  md:h-full rounded-2xl">
                <img
                    src={requestToCallBackBanner}
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                />

                {/* Text at bottom of image */}
                <div className="absolute bottom-4  text-white text-lg font-medium p-10 rounded w-full text-center text-[28px] font-heading">
                    Repair Wala Service repairs your home appliaces
                </div>
            </div>




            {/* Contact Form */}
            <div className="flex-1 bg-accent p-8 w-auto rounded-2xl">

                <form className="flex w-full  flex-col gap-[36px]">
                    <h1 className="font-medium font-heading text-[32px] text-primary">Fill the Form to <br />
                        Request Free Call Back
                    </h1>

                    {/* FirstName,LastName,Email,Phone No Div Box */}
                    <div className="flex flex-col gap-[20px] w-full">
                        <span className="flex flex-row gap-[26px] w-full ">
                            <InputBox label="First Name" id="firstName" placeholder="Enter  First Name" register={register} required={true} type="text" className={'w-1/2'} />
                            <InputBox label="Last Name" id="lastName" placeholder="Enter  Last Name" register={register} required={true} type="text" className={'w-1/2'} />

                        </span>
                        <span className="flex flex-row gap-[26px] w-full">
                            <InputBox label="Email" id="email" placeholder="Enter  E-Mail" register={register} required={true} type="email" className={'w-1/2'} />
                            <InputBox label="Phone Number" id="phoneNo" placeholder="Enter  Phone Number" register={register} required={true} type="number" className={'w-1/2'} />

                        </span>

                    </div>

                    {/* Service Location Address Div Box*/}
                    <h1 className="font-medium font-heading text-[20px] text-primary">Service Location Address</h1>
                    <div className="flex flex-col gap-[20px]">
                        <InputBox label="Stress Address" id="stressAddress" placeholder="Enter Address (Flat no., Building No., Landmarks)" register={register} required={true} type="text" className={'w-full'} />

                        <span className="flex flex-row gap-[26px]" >
                            <SelectBox label="City" id="city" register={register} options={["Delhi", "Mumbai", "Bhopal", "Indore"]} />
                            <SelectBox label="State" id="state" register={register} options={["DH", "MH", "UP", "Mp"]} />
                        </span>
                        <InputBox label="Postal/Zip Code" id="zipCode" placeholder="Enter Postal / Zip Code" register={register} required={true} type="number" className={''} />

                    </div>

                    {/* Product Details div Box */}
                    <h1 className="font-medium font-heading text-[20px] text-primary">Product Details</h1>

                    <div className="flex flex-col gap-[20px]">

                        <span className="flex flex-row gap-[26px]" >
                            <SelectBox label="Type" id="type" register={register} options={["MicroWave", "T.V", "Refrigerator", "Other"]} />
                            <SelectBox label="Brand" id="brand" register={register} options={["L.G", "Samsung", "Hevels", "Sony"]} />

                        </span>
                        <span className="flex flex-row gap-[26px] " >
                            <SelectBox label="Model" id="model" register={register} options={["Solo MicroWave", "GrillMicroWave"]} />
                            <InputBox label="Appliance Age" id="applianceAge" placeholder="Enter Age of Appliances" register={register} required={true} type="number" className={''} />

                        </span>

                        <TextAreaBox label="Description" id="description" placeholder="Enter..." register={register} required={true} type="text" className={'w-full'} />

                    </div>

                    <Button>SUBMIT</Button>


                </form>
            </div>


        </div>
    );
};

export default RequestCallbackForm;
