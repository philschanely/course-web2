import React from "react";

import ClassNames from "classnames";

const SubpagePager = ({ hasSubpages, nextPageSlug, prevPageSlug, onClickPager }) => {
  if (hasSubpages) {
    let prevBtnClassNames = ClassNames(
        "btn",
        "btn--prev",
        {
          "btn--disabled": !prevPageSlug
        }
      );

    let nextBtnClassNames = ClassNames(
        "btn",
        "btn--next",
        {
          "btn--disabled": !nextPageSlug
        }
      );

    return (
      <nav className="l-pager">
        <a
          className={prevBtnClassNames}
          href={`#${prevPageSlug}`}
          onClick={(e) => prevPageSlug ? onClickPager(e, prevPageSlug) : e.preventDefault()}
        >
            Previous
        </a>
        <a
          className={nextBtnClassNames}
          href={`#${nextPageSlug}`}
          onClick={(e) => nextPageSlug ? onClickPager(e, nextPageSlug) : e.preventDefault()}
        >
            Next
        </a>
      </nav>
    );
  }

  return ("");
}

export default SubpagePager;
