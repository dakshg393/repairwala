import {refrigerators,airConditioners,windowAirConditioners,washingMachines,waterPurifier,microWave,smartTv,support} from "../assets/Images/Categories/index.js"
 
const navItems = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About Us",
        path:"aboutus"
    },
    {
        name:"Services",
        path:"services"
    },
    {
        name:"Contact Us",
        path:"/contactus"
    },
]

const categories = [
    {
        name:"Refrigerators",
        image:refrigerators

    },
    {
        name:"Air Conditioners",
        image:airConditioners

    },
    {
        name:"Window Air Conditioners",
        image:windowAirConditioners

    },
    {
        name:"Washing Machines",
        image:washingMachines

    },
    {
        name:"Water Purifier",
        image:waterPurifier

    },
    {
        name:"MicroWave Ovens",
        image:microWave

    },
    {
        name:"Smart T.V",
        image:smartTv

    },
    {
        name:"Support",
        image:support

    },
   
    
]

export {
     navItems,categories
}