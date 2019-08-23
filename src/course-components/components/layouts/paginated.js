import React from "react";
import ClassNames from "classnames";

import SubpageContainer from "../subpage/container";
import SubpageNavigation from "../subpage/navigation";
import SubpagePager from "../subpage/pager";

class PaginatedLayout extends React.Component {

  constructor(props, state) {
    super(props, state);

    this.state = {
      navItems: [],
      hasSubpages: false,
    }

    this.onClickNavItem = this.onClickNavItem.bind(this);
  }

  componentDidMount() {
    let { navItems, hasSubpages } = this.state;

    if (Array.isArray(this.props.children)) {
      let locationHash = this.props.location.hash.replace("#", "");
      let hasLocationHash = !!locationHash;

      let isFirst = true;

      this.props.children.forEach((child, index) => {
        if (child.props.mdxType === "Subpage") {
          hasSubpages = true;

          let isActive = false;
          if (hasLocationHash && locationHash === child.props.slug) {
            isActive = true;
          } else if (!hasLocationHash && isFirst) {
            isActive = true;
          }

          navItems.push({
            slug: child.props.slug,
            title: child.props.children[0].props.children,
            children: child.props.children,
            isActive
          });
        }

        isFirst = false;
      });
    } else if (this.props.children.props.mdxType === "Subpage") {
      hasSubpages = true;

      navItems.push({
        slug: this.props.children.props.slug,
        title: this.props.children.props.children[0].props.children,
        children: this.props.children.props.children,
        isActive: true,
      });
    }

    this.setState({ navItems, hasSubpages });
  }

  getActiveItem() {
    let activeItem = { slug: null };
    let previous = { slug: null };
    let next = { slug: null };
    const { navItems } = this.state;

    navItems.forEach((item, i) => {
      if (item.isActive) {
        activeItem = item;
        previous = i > 0 ? navItems[i-1] : { slug: null };
        next = i < navItems.length - 1 ? navItems[i+1] : { slug: null };
      }
    });

    return {
      activeItem,
      previous,
      next
    };
  }

  onClickNavItem(e, slug) {
    e.preventDefault();

    let { navItems } = this.state;

    if (navItems.length < 1) {
      return;
    }

    // Loop through nav items to set the appropriate item as active (and others not)
    navItems.forEach((item, index) => {
      item.isActive = slug === item.slug;
    });

    this.setState({ navItems }, () => {
      console.log("Call navigate here!");
      this.props.onClickNavItem(slug);
    });
  }

  render() {
    const { title, number, cover, children } = this.props;
    const { navItems, hasSubpages } = this.state;

    const activeItem = this.getActiveItem();

    const numberString = number
      ? `Lesson ${number}: `
      : "";

    const pageNameClasses = ClassNames(
      "l-page-name t-display-2"
    );

    const mainClasses = ClassNames(
      "l-main",
      {
        "l-main--lesson": hasSubpages,
        "l-main--page": !hasSubpages,
      }
    );

    const mainStyles = {
       "--cover": `url("${cover}/1600x1600")`
    };

    return (
      <main className={mainClasses} style={mainStyles}>
        <h2 className={pageNameClasses}>{numberString}{title}</h2>
        <SubpageNavigation
          hasSubpages={hasSubpages}
          subpages={navItems}
          onClickNavItem={this.onClickNavItem}
        />
        <SubpageContainer
          hasSubpages={hasSubpages}
          subpages={navItems}
        >
          {children}
        </SubpageContainer>
        <SubpagePager
          hasSubpages={hasSubpages}
          nextPageSlug={activeItem.next.slug}
          prevPageSlug={activeItem.previous.slug}
          onClickPager={this.onClickNavItem}
        />
      </main>
    );
  }
};

export default PaginatedLayout;
