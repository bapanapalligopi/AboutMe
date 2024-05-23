import React from "react";
import styles from "./profiles.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Allproflies from "../components/Allprofiles";
import { FaArrowRight } from "react-icons/fa6";
import theme from "../assets/theme_pattern.svg";

const Profiles = () => {
  return (
    <div className={`container ${styles.container}`} id="profiles">
      <div className={styles.profilesMessage}>
        <h1>Profiles</h1>
        <img src={theme} alt="" />
      </div>
      <div className={styles.allprofiles}>
        {Allproflies.map((profile) => {
          return (
            <div
              className={`card mb-3 ${styles.profilecard}`}
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={profile.image}
                    className={`img-fluid rounded-start p-2 ${styles.profileimage}`}
                    alt="Profile"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className={`card-title ${styles.cardTitle}`}>
                      {profile.title}
                    </h5>
                    <div className={`card-text ${styles.profiledesc}`}>
                      {profile.desc}
                    </div>
                    <div className="card-text">
                      <a href={profile.view} className={styles.profileViewLink}>
                        {" "}
                        <div className={styles.profleviewbutton}>
                          Visit My Profile{" "}
                          <FaArrowRight color="#ff00ff" fontSize="1.5rem" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profiles;
