import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Stats = ({ followers, views, likes }) => {
  return (
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
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Stats;
