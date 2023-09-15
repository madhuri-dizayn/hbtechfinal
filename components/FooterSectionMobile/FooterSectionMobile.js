import React from "react";
import styles from "./FooterSectionMobile.module.scss";
import FooterIcon from "../Icons/FooterIcon";

const FooterSectionMobile = () => {
  return (
    <div className={styles.FooterSectionMobile}>
      <div className={styles.section}>
        <FooterIcon />
        <p>HB - Tech</p>
      </div>
    </div>
  );
};

export default FooterSectionMobile;
