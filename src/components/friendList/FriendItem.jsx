import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem__item}>
      <span
        className={
          isOnline
            ? styles.friendList__statusTrue
            : styles.friendList__statusFalse
        }
      ></span>
      <img
        className={styles.friendList__avatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={styles.friendList__name}>{name}</p>
    </div>
  );
};

FriendItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
