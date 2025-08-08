import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../MinorComponent/InputBox";
import TextAreaBox from "../MinorComponent/TextAreaBox";
import Button from "../MinorComponent/Button";
import baseMapImage from "../../assets/Images/BasemapImage.png"
import SocialMediaBox from "../MinorComponent/SocialIconsBox";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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

                {/* Text at bottom of image Contect no and Social media icons and links */}
                <div className="flex flex-col mt-10 gap-5 w-full ">
                    <span className="flex flex-col gap-4">
                        <h1 className="font-para font-semibold text-[28px] text-primary">// Contact us</h1>

                        <span className="flex items-center  flex-row">
                            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-[6px] p-1 bg-accent flex items-center justify-center flex-row">
                                <FaPhoneAlt className="text-primary" size={18} />
                            </a>
                            <h1 className="font-para font-medium text-para text-primary">+1(135)658-9856</h1>
                        </span>

                        <span className="flex items-center  flex-row" >
                            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="size-[34px] rounded-[6px] p-1 bg-accent flex items-center justify-center">
                                <IoIosMail className="text-primary" size={18} />

                            </a>
                            <h1 className="font-para font-medium text-para text-primary">hello@example.com</h1>
                        </span>

                    </span>


                    <span className="flex flex-col gap-5">

                        <h1 className="font-para font-semibold text-[28px] text-primary"> // Social Media </h1>
                        <SocialMediaBox />
                    </span>

                </div>
            </div>




            {/* Contact Form */}
            <div className="flex-1 bg-accent p-8 w-auto rounded-2xl">

                <form className="flex w-full  flex-col gap-[30px]">
                    <div>
                    <h1 className="font-heading font-medium text-heading text-primary">Contact Repairwala </h1>
                    <p className="font-heading font-normal text-para text-primary">If you have a question, please reach out to our national office below:</p>

</div>
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
                        <span  className="flex flex-col">
                            <label className="font-heading font-medium text-para text-primary-text">
                                <input type="checkbox" required className="h-[21px] w-[21px]"/>
                                Yes! You can text me service reminders and other messages.
                            </label>
                            <p className="font-heading font-normal text-black text-[14px]">By checking this box, I consent to receive automated informational and promotional SMS
                                and/or MMS messages from Mr. Appliance, a Neighborly company, and its franchisees to the
                                provided mobile number(s). Message & data rates may apply. Message frequency may vary.
                                Reply STOP to opt out of future messages. Reply HELP for help or visit Repairwala.in.
                                View Terms and Privacy Policy.</p>
                        </span>
                        <span className="flex flex-col gap-[26px] mb-5" >
                            <h1 className="font-heading font-medium text-[20px] text-primary">Are you a new customer?</h1>

                            <label htmlFor="newCustomer" className="font-heading font-medium text-para text-primary">
                                <input
                                    id="newCustomer"
                                    type="radio"
                                    value="newCustomer"
                                    {...register("customerType", { required: true })}
                                />
                                Yes, I'm a potential new customer
                            </label>

                            <label htmlFor="existingCustomer" className="font-heading font-medium text-[20px] text-primary">
                                <input
                                    id="existingCustomer"
                                    type="radio"
                                    value="existingCustomer"
                                    {...register("customerType", { required: true })}
                                />
                                No, I'm a current existing customer
                            </label>

                            <label htmlFor="neitherCustomer" className="font-heading font-medium text-[20px] text-primary">
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
                            <TextAreaBox className={`h-[99px]`} label={"Comments"} id="comments" placeholder="Enter...." register={register} />
                        </span>
                        <span className="font-heading font-normal text-[16px] text-primary">
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
