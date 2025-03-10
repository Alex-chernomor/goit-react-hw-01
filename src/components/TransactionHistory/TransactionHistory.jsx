import firstLetter from '../renderFunctions.jsx';
import css from '../TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({transactions}) {
    const TransactionsTable = ({transactions})=>{
        return (
            <tbody>
               {
                transactions.map((transaction,index)=>{
                    return   <tr key = {index} className={index%2===0 ? css.even : css.odd}> 
                                <td>{firstLetter(transaction.type)}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.currency}</td>
                             </tr>
                })
               }
            </tbody>
        )
    }


  return (
    <table className={css.table}>
        <thead className={css.title}>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
            <TransactionsTable transactions = {transactions}/>
    </table>
  )
}
