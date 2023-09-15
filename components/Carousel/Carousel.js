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
          // slidesToScroll: 2,
          // infinite: true,
          // dots: true
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
