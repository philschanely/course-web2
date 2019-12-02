import React from "react";
import { navigate } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../layout";
import { LayoutPaginated } from "course-components";

class PaginatedLayout extends React.Component {

  constructor(props, state) {
    super(props, state);

    this.onClickNavItem = this.onClickNavItem.bind(this);
  }

  onClickNavItem(slug) {
    let currentPath = this.props.location.pathname;
    navigate(currentPath + "#" + slug);
  }

  render() {
    const { title, number, cover, type } = this.props.pageContext.frontmatter;
    const { children } = this.props;

    return (
      <Layout activePath={`/${type}/`}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <LayoutPaginated
          title={title}
          number={number}
          cover={cover}
          location={this.props.location}
          onClickNavItem={this.onClickNavItem}
        >
          {children}
        </LayoutPaginated>
      </Layout>
    );
  }
};

export default PaginatedLayout;
