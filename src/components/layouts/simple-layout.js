import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";

import { LayoutSimple } from "course-components";

function SimpleLayout({ children, pageContext }) {
  const { title, navPath } = pageContext.frontmatter;
  let activePath = navPath || "/";

  return (
    <Layout activePath={activePath} title={title}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <LayoutSimple title={title}>
        {children}
      </LayoutSimple>
    </Layout>
  );
};

export default SimpleLayout;
