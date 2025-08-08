import React from "react"
import brandBanner from '../../assets/Images/BrandBanner.png'


const BrandCard = ({ className }) => {
    return (
        <div className={`w-full min-h[149px] flex flex-col md:flex-row items-center justify-between md:justify-between flex-wrap gap-8 ${className}`}>

            {/* Brand Text Card */}
            <div className="h-full w-full md:w-fit">
                <span className="flex flex-row gap-[20px]  md:flex-col items-center md:items-start justify-between w-full md:w-auto">
                    <h1 className="text-heading font-heading font-medium">BRANDS</h1>
                    <p className="text-para font-normal font-para text-primary-text">Any Make - Any Brand - We Have The Technicians For <br />
                        Providing Repairing Solutions. </p>
                </span>

            </div>

            {/* Brands Image Banner */}
            <div className="h-full w-full md:w-1/2">
                <img className="w-full h-full" src={brandBanner} alt="Brand Bannenr" />
            </div>
        </div>
    )
}

export default BrandCard
