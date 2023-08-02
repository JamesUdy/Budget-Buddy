import React from "react";

const Header = () => {
    return (
        <div className="flex flex-row justify-start items-center pb-[5%]">
            <img src="./budget-buddy-logo.png" alt="" className="w-[8%] h-[8%] mx-4" />
            <h1 className="header font-bold text-[32px] text-center">BUDGET BUDDY</h1>
        </div>
    )
}

export default Header