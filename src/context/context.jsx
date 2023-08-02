import React, {useReducer, createContext} from "react";
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":700,"category":"Travel","type":"Expense","date":"2023-08-01","id":"2589d9a4-18cb-4fa2-b916-79526a631cf5"},{"amount":230,"category":"Entertainment","type":"Expense","date":"2023-08-01","id":"bf9cb0ec-cc0b-44b8-b191-72a0022b9471"},{"amount":450,"category":"Savings","type":"Income","date":"2023-07-21","id":"913d4fc0-83f4-4721-a932-95a4f9608ae4"},{"amount":15000,"category":"Salary","type":"Income","date":"2023-08-06","id":"1aa743b1-3515-4e94-9f51-3fcb40da1028"}]

export const BudgetBuddyContext = createContext(initialState)

export const Provider = ({children}) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //Action Creators
    const deleteTransaction = (id) => {
        dispatch({type: 'Delete_Transaction', payload: id })
    }

    const addTransaction = (transaction) => {
        dispatch({type: 'Add_Transaction', payload: transaction })
    }

    const totalBalance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    },0)

    return (
        <BudgetBuddyContext.Provider value = {{
            transactions,
            deleteTransaction,
            addTransaction,
            totalBalance
        }}>
            {children}
        </BudgetBuddyContext.Provider>
    )
}