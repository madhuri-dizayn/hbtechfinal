import React, { useState } from "react";
import styles from "./Slide5.module.scss";
import Image from "next/image";
import FrameIcon from "../Icons/FrameIcon";
import UiIcon from "../Icons/UiIcon";
import Slide5Image1 from "../Assests/Slide5Image1.png";
import Slide5Image2 from "../Assests/Slide5Image2.png";
import Slide5Image3 from "../Assests/Slide5Image3.png";
import Slide5tablet from "../Slide5tablet/Slide5tablet";
const Slide5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Web Development",
      description: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
      logo: UiIcon,
      activeLogo: UiIcon,
      imgUrl: Slide5Image1,
    },
    {
      title: "App Design & Development",
      description: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
      logo: UiIcon,
      activeLogo: UiIcon,
      imgUrl: Slide5Image2,
    },
    {
      title: "UI/UX Design",
      description: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
      logo: UiIcon,
      activeLogo: UiIcon,
      imgUrl: Slide5Image3,
    },
  ];

  return (
    <div className={styles.Slide5}>
      <div className={styles.Section}>
        <div className={styles.heading}>
          <p className={styles.para1}>OUR SERVICES</p>
          <p className={styles.para2}>
            Bring the world to your door with our Best in class services
          </p>
        </div>
        <div className={styles.cardContainer}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.card} ${
                  activeIndex == index ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                <div className={styles.icon}>
                  <item.logo />
                </div>
                <div className={styles.details}>
                  <div className={styles.cardHeader}>
                    <p className={styles.title}>{item.title}</p>
                    <FrameIcon
                      style={{
                        transform:
                          activeIndex == index
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                        transition: "all .3s ease-out",
                      }}
                    />
                  </div>
                  <div
                    hidden={activeIndex != index}
                    className={styles.description}
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.boxImage}>
          <Image src={data[activeIndex].imgUrl} />
        </div>
      </div>
      <div className={styles.Slide5tablet}>
        <Slide5tablet />
      </div>
    </div>
  );
};

export default Slide5;
