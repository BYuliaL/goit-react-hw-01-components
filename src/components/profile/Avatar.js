import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ name, tag, location, avatar }) => {
  return (
    <div className="description">
      <img src={avatar} alt={name} className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

// Profile.defaultProps = {
//   name: "kkkk",
// };

Avatar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Avatar;
