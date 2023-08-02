import { useContext } from "react";
import { BudgetBuddyContext } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";

const UseTransaction = (title) => {
    resetCategories();
    const {transactions} = useContext(BudgetBuddyContext)
    const selectedTransactionType = transactions.filter((transaction) => transaction.type === title)

    const totalTransaction = selectedTransactionType.reduce((acc, currentValue) => acc += currentValue.amount, 0)

    const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({selectedTransactionType, totalTransaction, categories})

    selectedTransactionType.forEach((transaction) => {
        const category = categories.find((cat) => cat.type === transaction.category)

        if(category) category.amount += transaction.amount
    })

    const filteredCategory = categories.filter((catAmt) => catAmt.amount > 0)

    const options = {
        plugins: {
            // chart: {
            //     type: 'variablepie'
            // },
            // title: {
            //     display: true,
            //     padding:{
            //         top:30,
            //         bottom:30
            //     },
            //     responsive:true,
            //     animation:{
            //         animateScale: true,
            //     }
            // },
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 56,
                        weight: 'bold'
                    }
                }
            } 
        }        
    }

    const chartData = {
        datasets: [{
            data: filteredCategory.map((cat) => cat.amount),    
            backgroundColor: filteredCategory.map((cat) => cat.color),
            borderColor: 'transparent', 
        }],
        labels: filteredCategory.map((cat) => cat.type)
    }

    return {totalTransaction, chartData, options}
}

export default UseTransaction

