import React from "react";
import styles from "./CardInfoBlog.module.scss";
import CardImage from "../Assests/CardImage.png";
import Image from "next/image";
import CardImage1 from "../Assests/CardImage1.png";
import CardImage2 from "../Assests/CardImage2.png";
import CardImage3 from "../Assests/CardImage3.png";
import CardImage4 from "../Assests/CardImage4.png";
import CardImage5 from "../Assests/CardImage5.png";
import IconImage from "../Assests/IconImage.png";

const CardInfoBlog = () => {
  const data = [
    {
      image: CardImage,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage1,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage2,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage3,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage4,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage5,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage2,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage4,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage3,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage5,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
    {
      image: CardImage2,
      title: "Technology",
      description: `The Impact of Technology on the Workplace: How Technology is Changing`,
      iconimage: IconImage,
      title1: "Tracey Wilson",
      title2: "August 20, 2022",
    },
  ];
  return (
    <>
      <div className={styles.CardInfoBlog}>
        <p className={styles.heading}>Latest Post</p>
      </div>

      <div className={styles.CardContainer}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.image}>
                <Image src={item.image} />
              </div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.des}>{item.description}</p>
              <div className={styles.cardSection}>
                <div>
                  <Image src={item.iconimage} />
                </div>
                <p className={styles.title1}>{item.title1}</p>
                <p className={styles.title1}>{item.title2}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardInfoBlog;
