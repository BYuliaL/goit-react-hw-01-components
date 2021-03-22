import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(({ label, percentage, id }) => (
        <li className="item" key={id}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
