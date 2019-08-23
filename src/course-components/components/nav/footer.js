import React from "react";
import PropTypes from "prop-types";

import ClassNames from "classnames";

const NavFooter = ({ pages }) => {
  let classNames = ClassNames(
    "footer__nav",
    "nav-footer"
  );

  return (
		<nav className={classNames}>
			<ul className="nav-footer__items">
        {pages.map(({ label, path }, i) => (
          <li key={i} className="nav-footer__item">
            <a href={path}>{label}</a>
          </li>
        ))}
			</ul>
		</nav>
  );
}

NavFooter.propTypes = {
  pages: PropTypes.array,
};

export default NavFooter;
