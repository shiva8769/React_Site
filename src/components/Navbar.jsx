import React from "react";

export default function Navbar () {
    return (
        <>
        <nav className="flex items-center bg-[#21222A] h-20">
            <img src="/Images/react-logo.png" width="30px" alt="" 
            className="lg:ml-6 mr-2 sm:ml-0"/>

            <h3 className="mr-auto text-[#61DAFB] font-bold text-[22px]">ReactFacts</h3>

            <h4 className="text-[#DEEBF8] font-[600] lg:text-[18px] lg:mr-5  sm:text-[16px] sm:mr-3 mt-1">React Course - Project 1</h4>
        </nav>
        </>
    )
}