import React, {useContext} from "react";
import Form from "../Form/Form";
import List from "../List/List";
import { BudgetBuddyContext } from "../../context/context";


const MainContentCard = ({title}) => {
    const {totalBalance} = useContext(BudgetBuddyContext)
    const isRandom = Math.round(Math.random()*10)
    return (
        <div className=" w-[325px] md:w-[400px] lg:w-[450px] 2xl:w-[640px] 2xl:h-[840px] lg:mb-10 main-card-gradient p-[1px] rounded-[20px] shadow-card">
            <div options={{
                max: 45,
                scale: 1,
                speed: 450
            }} className="main-card-bg rounded-[20px] py-5 px-6 min-h-[280px] flex justify-evenly flex-col">
                <div className="mb-6">
                    <h3 className="font-bold title-text text-[32px] 2xl:text-[56px] text-start">Budget Buddy</h3>
                    <h4 className="font-semibold text-[20px] 2xl:text-[40px]">Powered By Speechly</h4>
                </div>
                <div className="">
                    <h3 className="text-center font-semibold text-[18px] 2xl:text-[32px]">Total balance ₹ {totalBalance}</h3>
                    <h4 className="font-semibold text-[18px] 2xl:text-[32px]">
                        {/* InfoCard */}
                        Try saying: Add {isRandom ? "Income " : "Expense "} for {isRandom*100} in Category { isRandom ? "Business " :"Travel "} for {isRandom ? "Monday " : "Friday "}...
                    </h4>
                    <div>
                        {/* Form */}
                        <Form />
                    </div>
                </div>
                <div>
                    {/* List */}
                    <List />
                </div>
            </div>
        </div>
    )
}

const MainContent = (props) => {
    return (
        <MainContentCard title={props.type} />
    )
}

export default MainContent