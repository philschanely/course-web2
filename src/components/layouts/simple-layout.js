import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";

function SimpleLayout({ children, pageContext }) {
  const { title, navPath } = pageContext.frontmatter;
  let activePath = navPath || "/";

  return (
    <Layout activePath={activePath}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="l-main l-main--page">
        <h2 className="l-page-name t-display-2">{title}</h2>
        <div className="l-content">
          {children}
        </div>
      </main>
    </Layout>
  );
};

export default SimpleLayout;
