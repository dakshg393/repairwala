import React from "react"
import Button from "./Button"
import talivison from '../../assets/Images/Categories/smartTv.png'

const CategoriesCard = () => {
    return (
        <div className="w-74 h-83 p-2.5 rounded-2xl flex flex-col bg-accent">
            <div className="w-full h-64 gap-2.5">
                <img src={talivison} className="h-46 rounded-2xl w-full" />
                <div>
                    <h3>Telivision </h3>
                    <h1>Lcd T.v</h1>
                </div>

            </div>
            <div className="">
                <Button>Book Now</Button>
            </div>
        </div>
    )
}

export default CategoriesCard