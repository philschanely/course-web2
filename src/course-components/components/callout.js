import React from "react";

import ClassNames from "classnames";


const CalloutContainer = ({ type, color, children }) => {
  let classNames = ClassNames(
    "callout",
    {
      [`callout--${color}`]: color,
      [`callout--${type}`]: type,
    }
  );

  return (
    <div className={classNames}>
      {children}
    </div>
  )
};

const CalloutNumber = ({ number }) => {
  return (
    <div className="callout__number">
      <strong className="t-display-3">{number}</strong>
    </div>
  )
};

const CalloutIcon = ({ icon, iconStyle }) => {
  return (
    <div className="callout__icon">
      <i className="icon icon--static icon--halo icon--lg fal fa-book"></i>
    </div>
  )
};

const CalloutText = ({ children }) => {
  return (
    <div className="callout__text">
      {children}
    </div>
  )
};

const Callout = ({ term, lead, color, children, number, icon }) => {
  let type = term && number
    ? "term"
    : (
        lead
          ? "lead"
          : false
      );

  let content;
  switch (type) {
    case "term":
      content = (
        <React.Fragment>
    			<CalloutNumber number={number} />
    			<CalloutText>
            <p className="t-display-6">{term}</p>
            {children}
          </CalloutText>
    		</React.Fragment>
      );
      break;
    case "lead":
      content = (
        <React.Fragment>
    			<CalloutIcon icon={icon} />
    			<CalloutText lead={true}>
            {children}
          </CalloutText>
    		</React.Fragment>
      );
      break;
    default:
      content = (
        <React.Fragment>
    			<CalloutIcon icon={icon} />
    			<CalloutText>
            {children}
          </CalloutText>
    		</React.Fragment>
      );
      break;
  }

  return (
    <CalloutContainer type={type} color={color}>
      {content}
    </CalloutContainer>
  );
}

export default Callout;
