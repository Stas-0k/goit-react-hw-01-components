import PropTypes from 'prop-types';
import { Transaction } from './Transaction'
import css from './transaction-history.module.css'

export const TransactionHistory = ({transactions}) => { 
    return (
        <table className={css.transactionHistory}>
  <thead>
                <tr className={css.tableName }>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody className={css.tbody }>{
                transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}                    
                    />
                ))
            }
            </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}