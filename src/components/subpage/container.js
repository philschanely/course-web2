import React from "react";
import Subpage from "../subpage";

const SubpageContainer = ({ hasSubpages, subpages, children }) => {
  if (hasSubpages) {
    return (
      <div className="l-content">
        {subpages.map((subpage, i) => (
          <Subpage key={i} isActive={subpage.isActive} slug={subpage.slug}>
            {subpage.children}
          </Subpage>
        ))}
      </div>
    );
  }

  return (
    <div className="l-content">
      {children}
    </div>
  );
}

export default SubpageContainer;
