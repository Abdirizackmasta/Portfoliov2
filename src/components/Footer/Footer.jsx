import React from "react";
import css from "./Footer.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <section className={css.footer}>
      <div>
        <div className={css.upper}>
          <span >
            Let's make something <br />
            amazing together.
          </span>
          <span>
            Start by
            <a href="mailto:abdirizackissack2018@gmail.com">saying hi</a>
          </span>
        </div>
        <div className={css.middle}>
          <div>
            <span className={css.header}>Information</span>
            <p>Nairobi, Easteligh, 12th Street, Kenya</p>
          </div>
          <ul>
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
        {/* center/Social links */}
        <hr />
        <div className={css.social}>
          <ul>
              <li>
                <a href="https://wa.me/+254719455494">
                  <WhatsAppIcon />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/abdirizack.issacksiyat">
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abdulrazaq_masta/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ibnu_isxaq">
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a href="https://github.com/Abdirizackmasta">
                  <GitHubIcon />
                </a>
              </li>
            </ul>
        </div>
      </div>
       
    </section>
  );
};

export default Footer;
