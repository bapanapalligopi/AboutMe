import React from "react";
import styles from "./services.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "../assets/theme_pattern.svg";
import AllServices from "./AllServices";
const Services = () => {
  return (
    <div className={`container ${styles.container}`} id="services">
      <div className={styles.serviceHeading}>
        <h1>My Services</h1>
      </div>
      <div className={styles.allservices}>
        {AllServices.map((myservice, index) => {
          return (
            <div className={styles.singleService} key={index}>
              <div>
                <img
                  src={myservice.logo}
                  alt=""
                  className={styles.serviceimage}
                />
              </div>
              <div className={styles.aboutService}>
                <div className={styles.serviceName}>{myservice.service}</div>
                <div className={styles.serviceDesc}>{myservice.desc}</div>
                <div className={styles.moreAboutService}>
                  <a href={myservice.more}>More About {myservice.service}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
