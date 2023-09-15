import React from "react";
import styles from "./Slide5tablet.module.scss";
import Slide5Image1 from "../Assests/Slide5Image1.png";
import Slide5Image2 from "../Assests/Slide5Image2.png";
import Slide5Image3 from "../Assests/Slide5Image3.png";
import Image from "next/image";

const Slide5tablet = () => {
  const data = [
    {
      image: Slide5Image2,
      heading: "Web Development",
      Subtitle: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
    },
    {
      image: Slide5Image2,
      heading: "Web Development",
      Subtitle: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
    },
    {
      image: Slide5Image3,
      heading: "Web Development",
      Subtitle: `Wordpress, React, Shopify, Marketing, Business, Portfolio, you name it and we'll build it. Our websites are light, fast and responsive. We guarantee the fastest load times and smoothest animations.`,
    },
  ];

  return (
    <div className={styles.Container}>
      {data.map((element, index) => {
        return (
          <div key={index} className={styles.card}>
            <div className={styles.cardInformation}>
              <p className={styles.heading}>{element.heading}</p>
              <p className={styles.Subtitle}>{element.Subtitle}</p>
            </div>

            <div className={styles.image}>
              <Image src={element.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slide5tablet;
