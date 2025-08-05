import React from "react";
import { logo } from "../../assets/Images/index.js";
import Button from "../MinorComponent/Button";
import { navItems } from "../../utils/Home.utils";
import { Link, NavLink } from "react-router-dom";
import { User ,AlignLeft,ShoppingCart} from 'lucide-react';

const Header = () => {
    return (
        <>
{/* Header For Mobile Screen */}
            <div className="flex md:hidden items-center justify-between py-2  px-4">
                <div><AlignLeft/></div>
                <div> <img src={logo} alt="Logo" className="w-38 h-auto" /></div>
                <div>
                    <span className="flex flex-row gap-4">
                    <User/>
                    <ShoppingCart/>
                    </span>
                    
                </div>
            </div>



            {/* // Header For DeskTop Screen  */}
            <div className="w-full hidden md:block">
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
                                <select className="pr-2 border-0 focus:outline-none" id="category" name="category">
                                    <option value="mobile">All Category</option>
                                    <option value="ac">AC Repair</option>
                                    <option value="plumbing">Plumbing</option>
                                    <option value="electrical">Electrical</option>
                                </select>
                                <input className="pl-1 border-l-1 focus:border-0 focus:outline-none" placeholder="Search for products.." />

                            </span>
                            <Button >Search</Button>
                        </div>
                        {/* {left div} */}
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex flex-row items-center gap-2">
                                <span><User/></span>
                                <span>
                                    <h1>Sign in <br /><span>
                                    User Account</span></h1>
                                </span>

                            </div>
                            <div><ShoppingCart/></div>
                        </div>

                    </div>



                    {/* Navigation Row */}
                    <div className="flex items-center justify-between flex-wrap gap-4 border-b-1 py-2 ">


                        <div className="flex justify-center items-center ">
                            <Button> <AlignLeft/> Browse All Categories</Button>

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

                        <div className="flex flex-row gap-4 items-center">
                            <Link>Book Appointment</Link>
                            <Button>Login Employee DashBoard</Button>
                        </div>



                    </div>

                </div>



            </div>

        </>
    );
};

export default Header;
