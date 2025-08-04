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
        <div className="w-full flex flex-col md:flex-row h-auto gap-5">

            {/* Image Div  */}
            <div className="md:w-[509px] h-full w-full">
                <img className="h-full w-full" src={requestToCallBackBanner} alt="" />
            </div>

            {/* Contact Form */}
            <div className="flex-1 bg-accent p-8 w-auto rounded-2xl">

                <form className="flex  flex-col gap-[36px]">
                    <h1>Fill the Form to <br />
                        Request Free Call Back
                    </h1>

                    {/* FirstName,LastName,Email,Phone No Div Box */}
                    <div className="flex flex-col gap-[20px]">
                        <span className="flex flex-row gap-[26px]">
                            <InputBox label="First Name" id="firstName" placeholder="Enter Your First Name" register={register} required={true} type="text" className={''} />
                            <InputBox label="Last Name" id="lastName" placeholder="Enter Your Last Name" register={register} required={true} type="text" className={''} />

                        </span>
                        <span className="flex flex-row gap-[26px]">
                            <InputBox label="Email" id="email" placeholder="Enter Your E-Mail" register={register} required={true} type="email" className={''} />
                            <InputBox label="Phone Number" id="Enter Your Phone Number" register={register} required={true} type="Number" className={''} />

                        </span>

                    </div>

                    {/* Service Location Address Div Box*/}
                    <h1>Service Location Address</h1>
                    <div className="flex flex-col gap-[20px]">
                        <InputBox label="Stress Address" id="stressAddress" placeholder="Enter Address (Flat no., Building No., Landmarks)" register={register} required={true} type="text" className={'w-full'} />

                        <span className="flex flex-row gap-[26px]" >
                            <SelectBox label="City"  id="city" register={register} options={["Delhi", "Mumbai", "Bhopal", "Indore"]} />
                            <SelectBox label="State"  id="state" register={register} options={["DH", "MH", "UP", "Mp"]} />
                            </span>
                        <InputBox label="Postal/Zip Code" id="zipCode" placeholder="Enter Postal / Zip Code" register={register} required={true} type="Number" className={''} />

                    </div>

                    {/* Product Details div Box */}
                    <h1>Product Details</h1>

                    <div className="flex flex-col gap-[20px]">

                        <span className="flex flex-row gap-[26px]" >
                           <SelectBox label="Type"  id="type" register={register} options={["MicroWave", "T.V", "Refrigerator", "Other"]} />
                            <SelectBox label="Brand"  id="brand" register={register} options={["L.G", "Samsung", "Hevels", "Sony"]} />
                            
                        </span>
                        <span className="flex flex-row gap-[26px]" >
                           <SelectBox label="Model"  id="model" register={register} options={["Solo MicroWave", "GrillMicroWave"]} />
                             <InputBox label="Approximate Age of Appliances" id="ageOfAooliances" placeholder="Enter Age of Appliances" register={register} required={true} type="Number" className={''} />

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
