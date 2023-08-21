import React from "react";

const Header = () => {
    return (
        <div className="flex flex-row justify-center md:justify-start items-center pb-[5%]">
            <img src="./budget-buddy-logo.png" alt="" className=" w-[100px] md:w-[8%] md:h-[8%] xs:mx-4" />
            <h1 className="header font-bold text-[24px] md:text-[32px] text-center">BUDGET BUDDY</h1>
        </div>
    )
}

export default Header