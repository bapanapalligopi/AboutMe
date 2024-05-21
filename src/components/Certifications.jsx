import React from "react";
import styles from "./certifications.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import contactme from "../images/contactme.png";
import gfg from "../certificates/gfg.png";
import AllCertificates from "./AllCertificates";
const Certifications = () => {
  return (
    <div className={`container ${styles.container}`} id="certifications">
      <div className={styles.CertificationsMessage}>Certifications</div>
      <div className={styles.certificates}>
        <div
          id="carouselExampleAutoplaying"
          className={`carousel slide ${styles.certificatesCarouselSlideBar}`}
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {AllCertificates.map((certificate, index) => {
              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={certificate.id}
                >
                  <a href={certificate.view}>
                    {" "}
                    <img
                      src={certificate.source}
                      className={`${styles.certificatesImage} d-block w-100`}
                      alt="Certificate"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <button
            className={`carousel-control-prev `}
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className={`carousel-control-prev-icon ${styles.CertificationsCarouselPrevButton}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className={`carousel-control-next-icon ${styles.CertificationsCarouselNextButton}`}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
