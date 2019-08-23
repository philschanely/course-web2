import PropTypes from "prop-types";
import React from "react";

import ClassNames from "classnames";

class NavMain extends React.Component {

  state = {
    active: false
  };

  constructor(props, state) {
    super(props, state);

    this.onClickToggle = this.onClickToggle.bind(this);
  }

  onClickToggle(e) {
    e.preventDefault();
    let active = !this.state.active;
    this.setState({ active });
  }

  render() {
    let classNames = ClassNames(
      "masthead__nav",
      "nav-main",
      {
        "nav-main--active": this.state.active
      }
    );

    return (
  		<nav className={classNames}>
  			<button
          onClick={this.onClickToggle}
          className="btn--unstyled nav-main__toggle"
          title="Mobile Navigation Toggle"
        >
  				<i className="far fa-bars"></i>
  			</button>
  			<ul className="nav-main__items">
          {this.props.pages.map(({ label, path }, i) => {
            let classNames = ClassNames({
              "nav-main__item": true,
              "nav-main__item--active": path === this.props.activePath
            });

            return (
              <li key={i} className={classNames}>
                <a className="nav-main__link" href={path}>{label}</a>
              </li>
            );
          })}
  			</ul>
  		</nav>
    );
  }
}

NavMain.propTypes = {
  activePath: PropTypes.string,
  pages: PropTypes.array,
};

NavMain.defaultProps = {
  activePath: `/`,
};

export default NavMain;
