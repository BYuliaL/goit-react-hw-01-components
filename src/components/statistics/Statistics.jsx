import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const color = function generateRandomColor() {
  return (
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')'
  );
};

const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title.length > 0 && <h2 className={styles.statistics__title}>{title}</h2>}

    <ul className={styles.statistics__statList}>
      {stats.map(({ label, percentage, id }) => (
        <li
          className={styles.statistics__item}
          key={id}
          style={{ backgroundColor: color() }}
        >
          <span>{label}</span>
          <span>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
