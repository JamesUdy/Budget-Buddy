const contextReducer = (state, action) => {
    let transactions
    switch (action.type) {
        case 'Delete_Transaction':
            transactions = state.filter((transaction) => transaction.id !== action.payload)

            localStorage.setItem('transactions', JSON.stringify(transactions))

            return transactions

        case 'Add_Transaction':
            transactions = [action.payload, ...state]
            
            localStorage.setItem('transactions', JSON.stringify(transactions))

            return transactions
        default:
            return state
    }
}
export default contextReducer