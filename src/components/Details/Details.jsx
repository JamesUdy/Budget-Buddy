import React from "react";
import {Chart, ArcElement, Legend, Tooltip, Title} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
import UseTransaction from "../../useTransaction";
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import {fadeIn, textVariant} from'/src/utils/motion.js'


Chart.register(ArcElement, Title, Tooltip, Legend)  

const DetailCard = ({title}) => {
    const {totalTransaction, chartData} = UseTransaction(title)

    return (
        <Tilt className="w-[225px] sm:w-[300px] md:w-[275px] lg:w-[325px] 2xl:w-[375px]">
            <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className={`"w-full detail-card-gradient p-[1px] rounded-[20px] shadow-card"`}>
            <div options={{
                max: 45,
                scale: 1,
                speed: 450
            }} className="detail-card-bg rounded-[20px] py-5 px-6 lg:px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <h3 className="font-bold title-text text-[30px] xl:text-[32px] text-center text-[#ff0a54]">{title}</h3>
                <h4 className="font-semibold xl:text-[24px]">Total: ₹ {totalTransaction}</h4>
                <Doughnut data={chartData} />
            </div>
            </motion.div>
        </Tilt>
    )
}

const Details = (props) => {
    return (
        <DetailCard title={props.type}  />
    )
}

export default Details