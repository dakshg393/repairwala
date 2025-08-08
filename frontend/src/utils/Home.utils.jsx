import { refrigerators, airConditioners, windowAirConditioners, washingMachines, waterPurifier, microWave, smartTv, support } from "../assets/Images/Categories/index.js"

const navItems = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About Us",
        path: "aboutus"
    },
    {
        name: "Services",
        path: "services"
    },
    {
        name: "Contact Us",
        path: "/contactus"
    },
]

const categories = [
    {
        name: "Refrigerators",
        image: refrigerators

    },
    {
        name: "Air Conditioners",
        image: airConditioners

    },
    {
        name: "Window Air Conditioners",
        image: windowAirConditioners

    },
    {
        name: "Washing Machines",
        image: washingMachines

    },
    {
        name: "Water Purifier",
        image: waterPurifier

    },
    {
        name: "MicroWave Ovens",
        image: microWave

    },
    {
        name: "Smart T.V",
        image: smartTv

    },
    {
        name: "Support",
        image: support

    },


]

import { FiShield, FiUser, FiBookOpen, FiFileText, FiLock, FiSettings } from "react-icons/fi";

const mobileNavItems = [
    {
        icon: FiShield,
        name: "Home",
        path: "/"
    },
    {
        icon: FiUser,
        name: "About Us",
        path: "aboutus"
    },
    {
        icon: FiBookOpen,
        name: "Services",
        path: "services"
    },
    {
        icon: FiFileText,
        name: "Contact Us",
        path: "/contactus"
    },
    {
        icon: FiLock,
        name: "Book Appointment",
        path: "/"
    },
    {
        icon: FiSettings,
        name: "Login Employee Dashboard",
        path: "/"
    }
]


export {
    navItems, categories, mobileNavItems
}