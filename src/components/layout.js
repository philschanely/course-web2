import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import { Header, Footer } from "course-components";

const Layout = ({ activePath, children, title }) => {
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
    <>
      <Helmet>
        <script src="https://kit.fontawesome.com/848ac60b9f.js" crossorigin="anonymous"></script>
        <link type="text/css" rel="stylesheet" href={`${process.env.GATSBY_TOOLKIT_URL}/assets/toolkit/styles/toolkit.css`} />
      </Helmet>
      <Header activePath={activePath} pages={data.site.siteMetadata.pages} title={data.site.siteMetadata.title} />
        {children}
      <Footer title={data.site.siteMetadata.title} pages={data.site.siteMetadata.pages} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePath: PropTypes.string,
};

export default Layout;
