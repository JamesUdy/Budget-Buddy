import React, {useContext} from 'react';
import {BudgetBuddyContext} from '../../context/context'


const List = () => {

    const {transactions, deleteTransaction} = useContext(BudgetBuddyContext)

    // console.log(globalState)

    // const transactions = [
    //     {id: 1, type: 'Income', category: 'Salary', amount: 50, date: "Mon Jul 23"},
    //     {id: 2, type: 'Expense', category: 'Business', amount: 150, date: "Mon Jul 23"},
    //     {id: 3, type: 'Income', category: 'Pets', amount: 50, date: "Mon Jul 23"}
    // ]

    const colorStatus = (status) => {
        return ( status === "Income" ? "bg-[#55a630]" : "bg-[#ef233c]")
    }

    return (
        <>
            <ul className='overflow-scroll overflow-y-scroll overflow-x-hidden scrollEffect h-[160px] 2xl:h-[190px] 2xl:text-[20px] '>
                {transactions.map((transaction, index) => (
                    <li key={index} className='flex flex-row px-2 py-3 bg-[#ffc2e2] my-2 rounded-lg items-center justify-between'>
                        <div className='flex flex-row items-center'>
                            <div className={`${colorStatus(transaction.type)} rounded-full`}><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" width="32" className='p-1'><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"/></svg></div>
                            <div className='pl-3'>
                                <h3>{transaction.category}</h3>
                                <h4>₹ {transaction.amount} - {transaction.date}</h4>
                            </div>
                        </div>
                        <div className='cursor-pointer'  onClick={() => deleteTransaction(transaction.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='cursor-pointerw-6 h-6'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                        </div>
                        

                    </li>
                ))}
            </ul>
        </>
    )
}

export default List
