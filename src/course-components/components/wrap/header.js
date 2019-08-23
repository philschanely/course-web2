import React from "react";
import PropTypes from "prop-types";
import NavMain from "../nav/main";
import Brand from "../brand/base";

const Header = ({ activePath, pages, title }) => {
  console.log(pages, title);
  return (
    <header className="masthead masthead--course">
  		<Brand />
  		<h1 className="masthead__brand brand">
  			<a className="brand__course-name" href="/">{title}</a>
  		</h1>
      <NavMain pages={pages} activePath={activePath} />
  	</header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  activePath: PropTypes.string
};

Header.defaultProps = {
  siteTitle: `Course name`
};

export default Header;
