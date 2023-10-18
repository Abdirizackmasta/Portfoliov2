import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Slick = () => {
  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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

      <Slider {...settings}>
        <a href="https://abdirizackmasta.github.io/bank-app/">
          <div className={`${css.project}`}>
            <h3>Bank App</h3>
            <img src="./bank.jpg" alt="bank-app picture" />

            {/* <a href="https://abdirizackmasta.github.io/bank-app/">
              See the live project
            </a> */}
          </div>
        </a>
        <a href="https://restaurant-v4d.pages.dev//">
          <div className={`${css.project}`}>
            <h3>Restaurant website</h3>
            <img src="./restaurant.jpg" alt="bank-app picture" />
            {/* <a href="https://abdirizackmasta.github.io/bank-app/">
              See the live project
            </a> */}
          </div>
        </a>
        <a href="https://budgetting-app.pages.dev/">
          <div className={`${css.project}`}>
            <h3>Budgetting App</h3>
            <img src="./budgetting.png" alt="budgetting app pic" />

            {/* <a href="https://abdirizackmasta.github.io/bank-app/">
              See the live project
            </a> */}
          </div>
        </a>
        <a href="https://real-estate-7p9.pages.dev/">
          <div className={`${css.project}`}>
            <h3>Real state</h3>
            <img src="./realstate.png" alt="real state picture" />

            {/* <a href="https://abdirizackmasta.github.io/bank-app/">
              See the live project
            </a> */}
          </div>
        </a>
        <a href="https://abdirizackmasta.github.io/a-ludo-game//">
          <div className={`${css.project}`}>
            <h3>Ludo game</h3>
            <img src="./ludo.png" alt="bank-app picture" />

            {/* <a href="https://abdirizackmasta.github.io/bank-app/">
              See the live project
            </a> */}
          </div>
        </a>
        <a href="https://abdirizackmasta.github.io/a-bank-website//">
          <div className={`${css.project}`}>
            <h3>Bank website</h3>
            <img src="./bank-website.png" alt="bank-app picture" />

            {/* <a href="https://abdirizackmasta.github.io/bank-app/">
              See the live project
            </a> */}
          </div>
        </a>
      </Slider>
    </motion.section>
  );
};

export default Slick;
