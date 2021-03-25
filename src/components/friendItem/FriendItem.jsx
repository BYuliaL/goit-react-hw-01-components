import PropTypes from 'prop-types';
import styles from './FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendItem__item}>
      <span
        className={
          isOnline
            ? styles.friendItem__statusTrue
            : styles.friendItem__statusFalse
        }
      ></span>
      <img
        className={styles.friendItem__avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={styles.friendItem__name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
