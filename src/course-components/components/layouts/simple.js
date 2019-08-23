import React from "react";

const LayoutSimple = ({ title, children }) => (
  <main className="l-main l-main--page">
    <h2 className="l-page-name t-display-2">{title}</h2>
    <div className="l-content">
      {children}
    </div>
  </main>
);

export default LayoutSimple;
