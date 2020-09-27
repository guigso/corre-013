import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { ArrowBack, ArrowForward } from "@material-ui/icons/";

import styles from "./Slider.module.css";

const FeaturedSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrowNext: <ArrowForward />,
    arrowBack: <ArrowBack />,
  };

  return (
    <Slider {...settings} adaptiveHeight>
      {slides.map((slide) => (
        <div key={slide.slug} className={styles.slideItem}>
          <a href={`/produto/${slide.slug}`} className={styles.slideLink}>
            <img
              src={slide.photos[0].fields.file.url}
              alt={slide.photos[0].fields.file.name}
              className={styles.slideImage}
            />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default FeaturedSlider;

FeaturedSlider.propTypes = {
  slides: PropTypes.arrayOf(Object).isRequired,
};
