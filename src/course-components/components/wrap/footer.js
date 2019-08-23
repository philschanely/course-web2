import React from "react";

import NavFooter from "../nav/footer";
import FooterBrand from "../brand/footer";

const Footer = ({ title, pages }) => (
  <footer className="footer">
    <h2 className="footer__course-name">
      {title}
    </h2>
    <NavFooter pages={pages} />
    <FooterBrand />
    <p className="footer__copyright">
      Copyright ©2019 by Phil Schanely.<br className="br--only-md" />
      All rights reserved.
    </p>
  </footer>
);

export default Footer;
