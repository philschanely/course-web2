import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import LockupGroup from "../../components/lockup-group";
import Lockup from "../../components/lockup";

const ActivitiesIndexPage = ({ data }) => (
  <Layout activePath="/activities/">
    <SEO title="Home" />
    <main className="l-main page">
      <div className="page__lockups">
        <LockupGroup groupHeading="Activities">
          {data.activities.edges.map(({ node }, i) => (
            <Lockup
              key={i}
              id={node.id}
              title={node.frontmatter.title}
              type={node.frontmatter.type}
              slug={node.fields.slug}
              excerpt={node.excerpt}
              cover={node.frontmatter.cover}
            />
          ))}
        </LockupGroup>
      </div>
    </main>
  </Layout>
);

export default ActivitiesIndexPage;

export const pageQuery = graphql`
  query {
    activities: allMdx(filter: {frontmatter: {type: {eq: "activities"}}}, sort: {fields: frontmatter___title}) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            type
            cover
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
