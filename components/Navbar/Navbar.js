"use client";
import React, { useState } from "react";
import Navbarlogo from "../Icons/Navbarlogo";
import styles from "./Navbar.module.scss";
import Hamburger from "../Icons/HamburgerMenu";
import NavbarPhoneView from "../NavbarPhoneView/NavbarPhoneView";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  //  console.log("crossIcon");

  const toggleNavbar = () => {
    // console.log("madhu",isOpen);

    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarlogo}>
        <Link href="/">
          <Navbarlogo />
        </Link>
      </div>

      <div className={styles.sectionItem}>
        <Link href="/#home" >
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

      <div className={styles.navbarBtn}>
        <button className={styles.btn}>Contact Us</button>
        {isOpen && <NavbarPhoneView toggleNavbar={toggleNavbar} />}
        <div className={styles.hamburgerIcon}>
          <Hamburger onClick={toggleNavbar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
