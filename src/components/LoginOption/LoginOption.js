import React from "react";
import FacebookIcon from "./../../img/facebook-icon.png";
import GoogleIcon from "./../../img/google-icon.png";
import TwitterIcon from "./../../img/twitter-icon.png";
import "./LoginOption.scss";

export default function LoginOption() {
  return (
    <div>
      <div className="loginOptionContainer">
        <div className="info">
          <h3 className="infoText"> OR LOGIN WITH</h3>
        </div>
        <div className="optionIcons">
          <img src={GoogleIcon} className="googleOptionIcon" alt="googleIcon" />
          <img
            src={FacebookIcon}
            className="facebookOptionIcon"
            alt="facebookIcon"
          />
          <img
            src={TwitterIcon}
            className="twitterOptionIcon"
            alt="twitterIcon"
          />
        </div>
      </div>
    </div>
  );
}
