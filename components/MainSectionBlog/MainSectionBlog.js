import React from "react";
import styles from "./MainSectionBlog.module.scss";
import Image from "next/image";
import MainSectionImageBlog from "../Assests/MainSectionImageBlog.png";

const MainSectionBlog = () => {
  return (
    <div className={styles.MainSectionBlog}>
      <div className={styles.imageSection}>
        <Image src={MainSectionImageBlog} />

        <div className={styles.CardContainer}>
          <div>
            <p className={styles.Tittle}>Technology</p>
            <p className={styles.Subtittle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSectionBlog;
