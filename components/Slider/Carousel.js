// import React, { Component } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import Notes from "../Assests/Notes.png";
// import Phone from "../Assests/Phone.png";
// import Image from "next/image";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <Image src={Notes} />
//           </div>

//           <div>
//             <Image src={Phone} />
//           </div>

//           <div>
//             <Image src={Notes} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";

function Carousel({ children, extraSettings = {} }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    initialSlide: 0,
    arrows: false,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          // dots: true,
        },
      },
    ],
    ...extraSettings,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {children}
    </Slider>
  );
}

export default Carousel;
