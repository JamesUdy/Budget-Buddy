import React, {useContext, useEffect, useState} from "react";
import {BudgetBuddyContext} from '../../context/context'
import {incomeCategories, expenseCategories} from '../../constants/categories'
// import {formatDate} from '../../format/formatDate'
import { useSpeechContext } from "@speechly/react-client";
import {v4 as uuidv4} from 'uuid'
import Notify from "../../notification/Notification";


const initialState = {
    amount: '',
    category: '',
    type: '',
    date: new Date().toISOString().slice(0, 10)
    //  formatDate(new Date())
}
const Form = () => {

    const [formData, setFormData] = useState(initialState)

    const {addTransaction} = useContext(BudgetBuddyContext)

    const [open, setOpen] = useState(false)

    const {segment} = useSpeechContext()

    const createTransaction = () => {
        if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return
        const transaction = {
            ...formData, 
            amount: Number(formData.amount),
            id: uuidv4()
        }
        setOpen(true)
        addTransaction(transaction)
        setFormData(initialState)
    }

    useEffect (() => {
        if(segment) {
            if (segment.intent.intent === 'add_expense') {
                setFormData({...formData, type: 'Expense'})
            }   else if (segment.intent.intent === 'add_income') {
                setFormData({...formData, type: 'Income'})
            }   else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
                return createTransaction()
            } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
                return setFormData(initialState)
            }

            segment.entities.forEach((entity) => {
                const category = `${entity.value.charAt(0)}${entity.value.slice(1).toLowerCase}`
                switch(entity.type) {
                    case 'amount':
                        setFormData({...formData, amount: entity.value})
                        break
                    case 'category':
                        if (incomeCategories.map((incomeCategory) => incomeCategory.type).includes(category)){
                            setFormData({...formData, type:'Income', category})
                        } else if (expenseCategories.map((expenseCategory) => expenseCategory.type).includes(category)){
                            setFormData({...formData, type:'Expense', category})
                        }
                        break
                    case 'date':
                        setFormData({...formData, date: entity.value})
                        break
                    default:
                        break
                }
            })
            if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
                createTransaction()
            }
        }
    }, [segment])

    // console.log(formData)


    const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories 

    

    return (
        
        <div className="flex flex-col gap-2 items-center py-3 2xl:text-[24px]">
            <Notify open={open} setOpen={setOpen}/>
            <span className="text-center w-full rounded-md bg-[#ffc2e2] outline-none px-3 py-5">{segment && segment.words.map((word) => word.value).join(" ")}</span>
            <div>
                <form action="" className="flex flex-col justify-center lg:justify-start items-center font-medium">                    
                    <div className="flex flex-wrap gap-4 py-6">
                        <div className="flex flex-row gap-2 items-center">
                            <label htmlFor="type">Type:</label>
                            <select name="type" id="type" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="bg-[#ffc2e2] rounded-md cursor-pointer text-center">
                                <option value="">--Select Type--</option>
                                <option name="income" id="income" value="Income">Income</option>
                                <option name="Expense" id="Expense" value="Expense">Expense</option>
                            </select>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <label htmlFor="category">Category:</label>
                            <select name="category" id="category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="bg-[#ffc2e2] rounded-md cursor-pointer text-center">
                                <option value="">--Select Category--</option>
                                {/* <option name="Business" id="Business" value="Business">Business</option>
                                <option name="Salary" id="Salary" value="Salary">Salary</option> */}
                                {selectedCategories.map((selectedCategory) => {
                                    return <option key={selectedCategory.type} value={selectedCategory.type}>{selectedCategory.type}</option>
                                })}
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-5 py-2">
                            <div className="flex flex-row gap-2 items-center">
                                <label htmlFor="amount">Amount:</label>
                                <input type="number" id="amount" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} className=" w-[100px] rounded-md bg-[#ffc2e2] text-center outline-none p-2" />
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <label htmlFor="date">Date:</label>
                                <input type="date" id="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className=" rounded-md bg-[#ffc2e2] outline-none p-2" />
                            </div>
                        </div>
                    </div>
                    <button type="button" className="w-full py-2 px-4 bg-[#ffc2e2] hover:text-white hover:bg-[#ff6eb9] rounded-lg" onClick={createTransaction}>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Form