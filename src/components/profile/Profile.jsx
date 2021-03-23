import Avatar from './Avatar';
import Stats from './Stats';
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <Avatar
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};

export default Profile;
