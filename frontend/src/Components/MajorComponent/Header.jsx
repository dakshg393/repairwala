import React from "react";
import { logo } from "../../assets/Images/index.js";
import Button from "../MinorComponent/Button";
import { navItems } from "../../utils/Home.utils";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full">
            {/* Top Bar */}

            <div className="flex items-center justify-center bg-primary text-white py-2 text-sm ">
                Welcome to Repairwala.com
            </div>
            {/* Header Content */}
            <div className="px-6 py-4 flex flex-col gap-4 bg-white shadow-md ">

                {/* Logo Row */}
                <div className="flex items-center justify-between border-b-1 py-2">
                    <img src={logo} alt="Logo" className="w-38 h-auto" />

                    <div className="flex flex-row ">
                        <span className="flex flex-row border-1  rounded-xl p-2 mx-2">
                            <select className="pr-2 border-0" id="category" name="category">
                                <option value="mobile">All Category</option>
                                <option value="ac">AC Repair</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="electrical">Electrical</option>
                            </select>
                            <input className="pl-1 border-l-1 focus:border-0" placeholder="Search for products.." />

                        </span>
                        <Button >Search</Button>
                    </div>
                    {/* {left div} */}
                    <div className="flex items-center justify-center">
                        <div className="flex ">
                            <span>Icon</span>
                            <span><h1>Sign in <br/><span>
                                User Account</span></h1>
                            </span>

                             </div>
                        <div>Cart</div>
                    </div>

                </div>



                {/* Navigation Row */}
                <div className="flex items-center justify-between flex-wrap gap-4 border-b-1 py-2 ">


                    <div className="flex justify-center items-center ">
                        <Button>Browse All Categories</Button>

                        <nav className="flex gap-6 text-gray-700 text-sm px-6 ">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-primary font-semibold border-b-2 border-primary"
                                            : "hover:text-primary"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <Button>Login Employee DashBoard</Button>
                    </div>



                </div>

            </div>



        </div>
    );
};

export default Header;
