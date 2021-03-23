import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={styles.friendList__item} key={id}>
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
