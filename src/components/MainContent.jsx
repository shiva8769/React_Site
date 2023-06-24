import React from "react";

export default function MainContent(){
    return(
        <main className="p-[57px_27px] text-white bg-[#282D35] 
                         lg:h-[87.7vh] sm:h-[88vh] md:h-[86.5vh]
                         bg-[url(Images/react-icon-large.png)] bg-no-repeat bg-right 
                         sm:bg-[250px_130px]
                         lg:bg-[right_45%]">

            <h1 className="m-0 lg:text-[39px] sm:text-[32px] tracking-[-0.05rem]">
            Fun facts about React</h1>

            <ul className="mt-[46px] max-w-[400px] list-disc lg:ps-10 sm:ps-5">
                <li className="leading-[19px] py-[10px]" >Was first released in 2013</li>

                <li className="leading-[19px] py-[10px]">Was originally created by Jordan Walke</li>

                <li className="leading-[19px] py-[10px]">Has well over 100K stars on GitHub</li>

                <li className="leading-[19px] py-[10px]">Is maintained by Facebook</li>

                <li className="leading-[19px] py-[10px]">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}