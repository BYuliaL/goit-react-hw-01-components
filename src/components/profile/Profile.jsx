import styles from './Profile.module.css';
import PropTypes from 'prop-types';
import defaultImg from '../image/Profile.png';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.description__avatar} />
        <p className={styles.description__name}>{name}</p>
        <p className={styles.description__tag}>@{tag}</p>
        <p className={styles.description__location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.stats__item}>
          <span className={styles.stats__label}>Followers</span>
          <span className={styles.stats__quantity}>{followers}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.stats__label}>Views</span>
          <span className={styles.stats__quantity}>{views}</span>
        </li>
        <li className={styles.stats__item}>
          <span className={styles.stats__label}>Likes</span>
          <span className={styles.stats__quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Profile;
