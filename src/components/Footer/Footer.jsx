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
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by
            <a href="mailto:abdirizackissack2018@gmail.com">saying hi</a>
          </span>
        </div>
        {/* center/Social links */}
        <div className={`paddings flexCenter ${css.social}`}>
          <h1 className="primaryText">Social links</h1>
          <div className={css.socialLinks}>
            <ul className="flexCenter">
              <li>
                <a href="https://wa.me/+254719455494">
                  {/* WhatsApp */}
                  <WhatsAppIcon />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/abdirizack.issacksiyat">
                  {/* Facebook */}
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abdulrazaq_masta/">
                  <InstagramIcon />
                  {/* Instagram */}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ibnu_isxaq">
                  {/* Twitter */}
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://github.com/Abdirizackmasta">
                  {/* Github */}
                  <GitHubIcon />
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
