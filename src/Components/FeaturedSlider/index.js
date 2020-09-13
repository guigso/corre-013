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
    arrowNext: <ArrowForward />,
    arrowBack: <ArrowBack />,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.slug}>
          <a href={`/produto/${slide.slug}`}>
            <img src={slide.photos[0].fields.file.url} />
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
