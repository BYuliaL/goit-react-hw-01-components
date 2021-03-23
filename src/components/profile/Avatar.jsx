import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import defaultImg from './Profile.png';

const Avatar = ({ name, tag, location, avatar }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt={name} className={styles.description__avatar} />
      <p className={styles.description__name}>{name}</p>
      <p className={styles.description__tag}>@{tag}</p>
      <p className={styles.description__location}>{location}</p>
    </div>
  );
};

Avatar.defaultProps = {
  avatar: defaultImg,
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Avatar;
