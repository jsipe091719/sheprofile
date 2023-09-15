import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz ">
            <div className="colz-icon">
              <a href="https://web.facebook.com/dzazeelinfaith.andujar/">
                <i className="fa fa-facebook-square"></i>
              </a>
              {/* <a href="https://myaccount.google.com/?hl=en_GB">
                <i className="fa fa-google"></i>
              </a>
              <a href="https://www.instagram.com/serenityph24/">
                <i className="fa fa-instagram"></i>
              </a> */}
              <a href="https://www.youtube.com/@donbelleupdatesofficial">
                <i className="fa fa-youtube-square"></i>
              </a>
              {/* <a href="https://github.com/jsipe091719">
                <i className="fa fa-github-square"></i>
              </a> */}
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Dzazeelin Faith Andujar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Funny",
                    1000,
                    "Simple",
                    1000,
                    "Stubborn",
                    1000,
                    "Friendly",
                    1000,
                    "Loud",
                    1000,
                    "Beautiful",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I shall find a way or make one
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="https://web.facebook.com/dzazeelinfaith.andujar">
              <button className="btn primary-btn">
                {" "}
                aut viam inveniam aut faciam{" "}
              </button>
            </a>
            {/* <a href="RESUME.pdf" download="SIPE RESUME.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
