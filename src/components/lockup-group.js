import React from "react";
import PropTypes from "prop-types";

const LockupGroup = ({ groupHeading, children }) => (
  <div className="lockup-group">
		<h2 className="lockup-group__heading">{groupHeading}</h2>
		<ul className="lockups">
      {children}
    </ul>
  </div>
);

LockupGroup.propTypes = {
  children: PropTypes.node.isRequired,
  groupHeading: PropTypes.string,
};

export default LockupGroup;
