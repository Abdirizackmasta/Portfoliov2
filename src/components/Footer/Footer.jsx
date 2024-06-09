import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={css.wrapper}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span>
            Let's make something <br />
            amazing together.
          </span>
          <span>
            Start by
            <a href="mailto:abdirizackissack2018@gmail.com">saying hi</a>
          </span>
        </div>
        {/* center/Social links */}
        <div className={`paddings flexCenter ${css.social}`}>
          <h1>Find Me in Social Media</h1>
          <div className={css.socialLinks}>
            <ul className="flexCenter">
              <li>
                <a href="https://wa.me/+254719455494">
                  <WhatsAppIcon className={css.icon}/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/abdirizack.issacksiyat">
                  <FacebookIcon className={css.icon}/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abdulrazaq_masta/">
                  <InstagramIcon className={css.icon}/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ibnu_isxaq">
                  <TwitterIcon className={css.icon}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/Abdirizackmasta">
                  <GitHubIcon className={css.icon}/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Nairobi, Easteligh, 12th Street, Kenya</p>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="#experties">Services</a>
            </li>
            <li>
              <a href="#work">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Works</a>
            </li>
            <li>
              <a href="#people">Testimonials</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
