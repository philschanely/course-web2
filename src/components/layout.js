import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ activePath, children }) => {
  return (
    <>
      <Helmet>
        <link type="text/css" rel="stylesheet" href={`${process.env.GATSBY_TOOLKIT_URL}/assets/toolkit/styles/toolkit.css`} />
      </Helmet>
      <Header activePath={activePath} />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activePath: PropTypes.string,
};

export default Layout;
