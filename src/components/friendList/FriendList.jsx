import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendItem from '../friendItem/FriendItem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendList;
