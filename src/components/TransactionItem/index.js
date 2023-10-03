// Write your code here
import './index.css'

const TransactionItem = propr => {
    const {transactionDetails, deleteTransaction} = props 
    const {id, title, amount, type} = transactionDetails

    const deleteTransaction = () => {
        deleteTransaction(id)
    }

    return (
        <li className="table-row">
        <p className="transaction-text">{title}</p>
        <p className="transaction-text">Rs {amount}</p>
        <p className="transaction-text">{type}</p>
        <div className="delete-container">
         <button 
           className="delete-button"
           type="button"
           onclick={onDeleteTransaction}
           testid="delete"
         >
          <img 
           className="delete-img"
           src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
           alt="delete"
          />
         </button>
        </div>
        </li>
    )
}

export default TransactionItem 