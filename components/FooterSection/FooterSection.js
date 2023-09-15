"use client";
import React from "react";
import styles from "./FooterSection.module.scss";
import FooterIcon from "../Icons/FooterIcon";

import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const FooterSection = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerTop}>
        <div className={styles.footerIcon}>
          <FooterIcon />
          <p>HB - Tech</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href={"#"}>
            <p>COMPANY</p>
          </Link>
          <Link href={"#"}>
            <p>ABOUT US</p>
          </Link>
          <Link href={"#"}>
            <p>SERVICES</p>
          </Link>
          <Link href={"#"}>
            <p>OUR WORK</p>
          </Link>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footerBottom}>
        <div className={styles.socialMedia}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className={styles.copyright}>Copyright ©2023 HB-Tech</div>
      </div>
    </footer>
  );
};

export default FooterSection;
