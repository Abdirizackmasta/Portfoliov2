import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { myProjects } from "../../utils/data";
const Slick = () => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          // background: "wheat",
          // borderRadius: "10px",
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="paddings"
    >
      <motion.div variants={textVariant(0.4)} className={`  ${css.heading}`}>
        <div>
          <span className="primaryText">My Latest Works</span>
          <p style={{ marginTop: "10px" }}>
            Perfect solution for digital experience
          </p>
        </div>
      </motion.div>
      <motion.div variants={footerVariants}>
        <Slider {...settings} className={css.slider}>
          {myProjects.map((project, i) => {
            return (
              <a href={project.link}>
                <div className={css.project}>
                  <h3>{project.projectName}</h3>
                  <img src={project.image} alt="App-image" />
                </div>
              </a>
            );
          })}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default Slick;
