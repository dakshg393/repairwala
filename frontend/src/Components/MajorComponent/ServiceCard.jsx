//This Card Is Major Card Inside which Side ServiceSide Card And Service Card Covered

import React from "react";
import ServiceSideCard from "./ServicesSideCard";
import ProductCard from "./ProductCard";

const ServiceCard = () => {
    return (
       <div  className="flex  w-full flex-col md:flex-row  gap-5 my-20">
        <ServiceSideCard/>
        <ProductCard/>
       </div>
    )
}

export default ServiceCard