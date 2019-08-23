import React from "react";

import ClassNames from "classnames";

const SubpageNavigation = ({ hasSubpages, subpages, children, onClickNavItem }) => {
  if (hasSubpages) {
    return (
      <nav className="l-side-nav side-nav">
        <ul className="side-nav__group">
          {subpages.map(({ slug, title, isActive }, i) => {
            let classNames = ClassNames(
              "side-nav__item",
              {
                "side-nav__item--active": isActive
              }
            );

            return (
              <li key={i} className={classNames}>
                <a className="side-nav__link" href={`#${slug}`} onClick={(e) => onClickNavItem(e, slug)}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return ("");
}

export default SubpageNavigation;
