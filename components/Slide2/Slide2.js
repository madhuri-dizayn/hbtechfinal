import React from "react";
import styles from "./Slide2.module.scss";
import Laptop from "../Assests/Laptop.png";
import Notes from "../Assests/Notes.png";
import Phone from "../Assests/Phone.png";
import Carousel from "../Slider/Carousel";
import Image from "next/image";
// import SimpleSlider from "../Slider/Carousel";

const Slide2 = () => {
  return (
    <div id="our-products" className={styles.Slide2}>
      <div className={styles.leftSection}>
        <div className={styles.leftinfo}>
          <p className={styles.product}>Products</p>
          <p className={styles.we}>We have made some of the best</p>
        </div>

        <div className={styles.slide2btn}>
          <button className={styles.btn}>View All</button>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.imageContainer}>
          <Carousel
            extraSettings={{
              slidesToShow: 2,
            }}
          >
            <div className={`${styles.imageBox} ${styles.active}`}>
              <Image src={Notes} />
            </div>

            <div className={`${styles.imageBox} ${styles.active}`}>
              <Image src={Phone} />
            </div>

            <div className={`${styles.imageBox} ${styles.active}`}>
              <Image src={Laptop} />
            </div>
            <div className={`${styles.imageBox} ${styles.active}`}>
              <Image src={Laptop} />
            </div>
            <div className={`${styles.imageBox} ${styles.active}`}>
              <Image src={Laptop} />
            </div>
            <div className={`${styles.imageBox} ${styles.active}`}>
              <Image src={Notes} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
