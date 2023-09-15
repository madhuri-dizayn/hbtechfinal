"use client";
import React, { useState } from "react";
import styles from "./CategoriesSectionBlog.module.scss";
import cx from "classnames";

const CategoriesSectionBlog = () => {
  const [selectedButton, setSelectedButton] = useState(false);
  const [color, setColor] = useState(false);
  const buttons = [
    {
      title: "General",
      title1: "Technology",
      title2: "Legal",
      title3: "Studio",
      title4: "Sales",
      title5: "Networking",
    },
  ];

  const handleButtonClick = () => {
    setColor(!color);
  };
  return (
    <div className={styles.section1}>
      <div>
        {buttons.map((item, index) => {
          return (
            <div key={index} className={styles.CategoriesSection}>
              <button
                onClick={() => handleButtonClick(index)}
                // className={styles.btn}
                className={cx(styles.btn, {
                  [styles.box]: color,
                })}
              >
                {item.title}
              </button>
              <button onClick={() => handle()} className={styles.btn}>
                {item.title1}
              </button>
              <button className={styles.btn}>{item.title2}</button>
              <button className={styles.btn}>{item.title3}</button>

              <button className={styles.btn}>{item.title4}</button>
              <button className={styles.btn}>{item.title5}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesSectionBlog;
