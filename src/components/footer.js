import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import NavFooter from "./nav-footer";
import BrandFooter from "./brand-footer";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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
    <footer className="footer">
      <h2 className="footer__course-name">
        {data.site.siteMetadata.title}
      </h2>
      <NavFooter pages={data.site.siteMetadata.pages} />
      <BrandFooter />
      <p className="footer__copyright">
        Copyright ©2019 by Phil Schanely.<br className="br--only-md" />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
