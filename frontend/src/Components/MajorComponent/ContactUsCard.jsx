import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../MinorComponent/InputBox";
import TextAreaBox from "../MinorComponent/TextAreaBox";
import Button from "../MinorComponent/Button";
import baseMapImage from "../../assets/Images/BasemapImage.png"

const ContactUsCard = ({ className }) => {
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
        <div className={`flex flex-col md:flex-row-reverse justify-between  w-full   h-auto gap-10 ${className}`}>

            {/* Image Div  */}
            <div className="w-full md:w-auto   rounded-2xl">
                <img
                    src={baseMapImage}
                    alt="Base Map image"
                    className="w-full  object-cover rounded-2xl h-[390px] md:h-[683px] md:max-w-[499px]"
                />

                {/* Text at bottom of image */}
                <div className="  ">
                    <span></span>
                    <span></span>
                </div>
            </div>




            {/* Contact Form */}
            <div className="flex-1 bg-accent p-8 w-auto rounded-2xl">

                <form className="flex w-full  flex-col gap-[36px]">
                    <h1>Contact Repairwala </h1>
                    <p>If you have a question, please reach out to our national office below:</p>


                    {/* FirstName,LastName,Email,Phone No Div Box */}
                    <div className="flex flex-col gap-[20px] w-full">
                        <span className="flex flex-row gap-[26px] w-full ">
                            <InputBox label="First Name" id="firstName" placeholder="Enter  First Name" register={register} required={true} type="text" className={'w-1/2'} />
                            <InputBox label="Last Name" id="lastName" placeholder="Enter  Last Name" register={register} required={true} type="text" className={'w-1/2'} />

                        </span>
                        <span className="flex flex-row gap-[26px] w-full">
                            <InputBox label="Zip/Postal Code" id="zip" placeholder="Enter Zip/Postal Code" register={register} required={true} type="number" className={'w-1/2'} />
                            <InputBox label="Phone Number" id="phoneNo" placeholder="Enter  Phone Number" register={register} required={true} type="number" className={'w-1/2'} />

                        </span>
                        <span>
                            <InputBox label="E-mail" id="email" placeholder="Enter Email" register={register} required={true} type="text" className={'w-full'} />
                        </span>

                    </div>

                    {/* Check Mark Are u Customer and comment div*/}

                    <div className="flex flex-col gap-[20px]">
                        <span>
                            <label>
                                <input type="checkbox" required />
                                Yes! You can text me service reminders and other messages.
                            </label>
                            <p>By checking this box, I consent to receive automated informational and promotional SMS
                                and/or MMS messages from Mr. Appliance, a Neighborly company, and its franchisees to the
                                provided mobile number(s). Message & data rates may apply. Message frequency may vary.
                                Reply STOP to opt out of future messages. Reply HELP for help or visit Repairwala.in.
                                View Terms and Privacy Policy.</p>
                        </span>
                        <span className="flex flex-col gap-[26px] mb-5" >
                            <h1>Are you a new customer?</h1>

                            <label htmlFor="newCustomer">
                                <input
                                    id="newCustomer"
                                    type="radio"
                                    value="newCustomer"
                                    {...register("customerType", { required: true })}
                                />
                                Yes, I'm a potential new customer
                            </label>

                            <label htmlFor="existingCustomer">
                                <input
                                    id="existingCustomer"
                                    type="radio"
                                    value="existingCustomer"
                                    {...register("customerType", { required: true })}
                                />
                                No, I'm a current existing customer
                            </label>

                            <label htmlFor="neitherCustomer">
                                <input
                                    id="neitherCustomer"
                                    type="radio"
                                    value="neither"
                                    {...register("customerType", { required: true })}
                                />
                                I'm neither
                            </label>
                            </span>
                        <span>
                            <TextAreaBox label={"Comments"} id="comments" placeholder="Enter...." register={register} />
                        </span>
                        <span>
                            By entering your email address, you agree to receive emails about services, updates or promotions, and you agree to the Terms and Privacy Policy. You may unsubscribe at any time.
                        </span>
                    </div>


                    <Button>SUBMIT</Button>


                </form>
            </div>


        </div>
    );
};

export default ContactUsCard;
