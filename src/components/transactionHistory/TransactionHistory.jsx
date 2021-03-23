import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ item }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.transactionHistory__head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    {item.map(({ id, type, amount, currency }) => (
      <tbody key={id} className={styles.transactionHistory__body}>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
