import React from "react";
import ServiceCard from "./ServiceCard";
import CategoriesCard from "../MinorComponent/CategoriesCard";

const ProductCard = ()=>{
    return(
        <div className="flex items-center justify-center md:justify-start h-auto flex-wrap gap-3.5 rounded-3xl">
           <CategoriesCard/>
           <CategoriesCard/>
           <CategoriesCard/>
           <CategoriesCard/>
           <CategoriesCard/>
           
        </div>
    )
}

export default ProductCard