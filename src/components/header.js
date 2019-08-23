// import { Link } from "gatsby"
import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import NavMain from "./nav-main";
import Brand from "./brand";

const Header = ({ activePath }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title,
          pages {
            label,
            path
          }
        }
      }
    }
  `);

  return (
    <header className="masthead masthead--course">
  		<Brand />
  		<h1 className="masthead__brand brand">
  			<a className="brand__course-name" href="/">{data.site.siteMetadata.title}</a>
  		</h1>
  		<NavMain pages={data.site.siteMetadata.pages} activePath={activePath} />
  	</header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  activePath: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `Course name`,
};

export default Header;
