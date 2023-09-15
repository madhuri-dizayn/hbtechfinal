import React from "react";
import styles from "./NavbarPhoneView.module.scss";
import NavMobileIcon from "../Icons/NavMobileIcon";
import CrossIcon from "../Icons/CrossIcon";
import Link from "next/link";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const NavbarPhoneView = ({ toggleNavbar }) => {
  return (
    <div className={styles.NavbarPhoneView}>
      <div className={styles.logoSection}>
        <div>
          <NavMobileIcon />
        </div>
        <div className={styles.closeIcon}>
          <CrossIcon onClick={() => toggleNavbar()} />
        </div>
      </div>

      <div className={styles.itemSection}>
        <Link href="/#home">
          <p>Home</p>
        </Link>
        <Link href="/#our-projects">
          <p>Our Projects</p>
        </Link>
        <Link href="/#our-products">
          <p>Our Products</p>
        </Link>
        <Link href="/blogs">
          <p>Blogs</p>
        </Link>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.socialMedia}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <div className={styles.copyright}>Copyright ©2023 HB-Tech</div>
      </div>
    </div>
  );
};

export default NavbarPhoneView;
