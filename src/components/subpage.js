import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";

const Subpage = ({ slug, children, isActive }) => {
  let classNames = ClassNames(
    "subpage",
    {
      "subpage--active": isActive,
    }
  );

  return (
    <div className={classNames} id={slug}>
      {children}
    </div>
  );
};

Subpage.propTypes = {
  isActive: PropTypes.bool,
  slug: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Subpage.defaultProps = {
  isActive: false,
};

export default Subpage;
