import React from "react";
import styles from "./last.module.css";
import { FaUserTie } from "react-icons/fa";
import { MdSettingsPhone } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaCircleArrowUp } from "react-icons/fa6";

const Last = () => {
  return (
    <div className={styles.container}>
      {/* developer details */}
      <div className={styles.developer}>
        <div className={styles.developername}>
          <div>
            <FaUserTie color="#e0115f" fontSize="1.5rem" />{" "}
          </div>
          <div className={styles.name}> Developed by Gopi Bapanapalli</div>
        </div>
        <div className={styles.developerphone}>
          <div>
            <MdSettingsPhone color="#e0115f" fontSize="1.5rem" />{" "}
          </div>
          <div className={styles.phone}>7672005018</div>
        </div>
        <div className={styles.developermail}>
          <div>
            <SiGmail color="#e0115f" fontSize="1.5rem" />{" "}
          </div>
          <div className={styles.mail}>bapanapalligopi7@gmail.com</div>
        </div>
      </div>

      {/* social media */}
      <div className={styles.socialmedia}>
        <div>
          <a href="https://www.linkedin.com/in/bapanapalli-gopi-55a2771a7/">
            <TfiLinkedin fontSize="2rem" color="blue" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/B_GOPI_17">
            <FaXTwitter fontSize="2rem" color="white" />
          </a>
        </div>
        <div>
          <a href="https://github.com/bapanapalligopi">
            <GrGithub fontSize="2rem" color="white" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/g.o.p.i_17/?hl=en">
            <GrInstagram fontSize="2rem" color="#e0115f" />
          </a>
        </div>
      </div>
      <div className={styles.top}>
        <a href="#" className={styles.toplink}>
          Goto Top <FaCircleArrowUp />
        </a>
      </div>
    </div>
  );
};

export default Last;
