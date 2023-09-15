import React from "react";
import styles from "./Slide4.module.scss";

import iconimage from "../Assests/icon.png";
import SlideIcon from "../Icons/SlideIcon";
import SlideIcon2 from "../Icons/SlideIcon2";
import SlideIcon3 from "../Icons/SlideIcon3";
import SlideIcon4 from "../Icons/SlideIcon4";
import SlideIcon5 from "../Icons/SlideIcon5";
import Image from "next/image";

const Slide4 = () => {
  return (
    <div className={styles.Slide4}>
      <div className={styles.section1}>
        <p>
          Meet our top-tier
          <span className={styles.customer}> Customers</span>
        </p>
      </div>

      <div className={`${styles.imageBoxSlide} ${styles.desktop}`}>
        <div className={styles.section2}>
          <div className={styles.imageBox}>
            <Image src={iconimage} />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon3 />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon4 />
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon2 />
          </div>
        </div>
      </div>
      <div className={`${styles.imageBoxSlide} ${styles.laptop}`}>
        <div className={styles.section2}>
          <div className={styles.imageBox}>
            <Image src={iconimage} />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.imageBox}>
            <SlideIcon3 />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon4 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>
          <div className={styles.imageBox}>
            <SlideIcon5 />
          </div>

          <div className={styles.imageBox}>
            <SlideIcon2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
