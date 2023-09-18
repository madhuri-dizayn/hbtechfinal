import React from "react";
import styles from "./Slide6.module.scss";
import Image from "next/image";
import FrameIcon1 from "../Icons/FrameIcon1";
import imageslide from "../Assests/imageslide.png";
import imageslide3 from "../Assests/imageslide3.png";
import imageslide2 from "../Assests/imageslide2.png";

const Slide6 = () => {
  const data = [
    {
      image: imageslide2,
      information1: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam`,
      information: "CableVision",
      viewinfo: "View Full Project",
      frameicon: FrameIcon1,
    },
    {
      image: imageslide3,
      information1: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam`,
      information: "CableVision",
      viewinfo: "View Full Project",
      frameicon: FrameIcon1,
    },
    {
      image: imageslide,
      information1: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam`,
      information: "CableVision",
      viewinfo: "View Full Project",
      frameicon: FrameIcon1,
    },
  ];

  return (
    <div id="our-projects">
      <div className={styles.Slide6}>
        <p className={styles.heading}>
          Our
          <span className={styles.heading2}>Projects</span>
        </p>
      </div>
      <div className={styles.cardContainer}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.details}>
                <p className={styles.title}>{item.information}</p>
                <p className={styles.subtitle}>{item.information1}</p>

                <div className={styles.button}>
                  <div className={styles.seccircle}></div>
                  <p className={styles.btnText}>{item.viewinfo}</p>
                  <div className={styles.btnIcon}>
                    <FrameIcon1 />
                  </div>
                </div>
              </div>

              <div className={styles.image}>
                <Image src={item.image} />
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.slide2btn}>
        <button className={styles.btn}>View All</button>
      </div>
    </div>
  );
};

export default Slide6;
