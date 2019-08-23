import React from "react";
import PropTypes from "prop-types";

const Lockup = ({ id, slug, title, type, excerpt, number, cover }) => {
  let numberString = number
    ? `${number}: `
    : "";

  let coverSrc = cover || "https://source.unsplash.com/abkEAOjnY0s";
  coverSrc += "/420x420";

  return (
    <li className="lockup">
      <header>
        <h3 className="lockup__title">
          <a className="lockup__title-link" href={slug}>
            {numberString}{title}
          </a>
        </h3>
        <p className="lockup__categories">
          <i className="fal fa-book icon icon--display-5" />
          {type}
        </p>
      </header>
      <p className="lockup__lead">
        {excerpt}
      </p>
      <div className="lockup__banner">
        <img src={coverSrc} alt="" />
      </div>
      <a className="lockup__link btn" href={slug}>
        Get started
      </a>
    </li>
  );
}

Lockup.propTypes = {
  id: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  excerpt: PropTypes.string,
  number: PropTypes.number,
};

export default Lockup;
