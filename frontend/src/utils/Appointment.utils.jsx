import { FaFileAlt } from "react-icons/fa";
import { TbCopyPlusFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { BsCurrencyRupee } from "react-icons/bs";

const AppointmentSteps = [
    {
        step:1,
        icon:FaFileAlt,
        name:"Appointment",
        desc:"Please Enter Your Details",
    },
    {
        step:2,
        icon:TbCopyPlusFilled,
        name:"Services",
        desc:"Choose/Select Services, Confirm your convienent Date & Time",
    },
    {
        step:3,
        icon:FaLocationDot,
        name:"Address",
        desc:"Please Add Your Address",
    },
    {
        step:4,
        icon:BsCurrencyRupee,
        name:"Payment",
        desc:"Pay Cash on Service Delivery",
    },
]

export {AppointmentSteps}