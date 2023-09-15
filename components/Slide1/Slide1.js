import React from "react";
import styles from "./Slide1.module.scss";

const Slide1 = () => {
  return (
    <div id="home" className={styles.Slide1}>
      <div className={styles.heading1}>
        <p>
          We’ll build the <span className={styles.heading1_bold}>website </span>
          and <span className={styles.heading1_bold}>App</span> of your{" "}
          <span className={styles.gradient_g1}>Dream</span>
        </p>
      </div>
      {/* <div className={styles.section1info}>
        <p className={styles.webuild}>
          We’ll build the
          <span className={styles.appInfo}> Website </span>
          <span className={styles.and}> and</span>
        </p>
      </div>
      <div className={styles.sectioninfo}>
        <p className={styles.appInfo}>
          App
          <span className={styles.of}> of your</span>
        </p>
        <span className={styles.dream}> Dream </span>
      </div> */}

      <div className={styles.description}>
        <p>
          Best quality/price ratio in the industry • Fast, Responsive & Animated
          Mobile and Web Apps • Unbeatable Prices
        </p>
      </div>
    </div>
  );
};

export default Slide1;
