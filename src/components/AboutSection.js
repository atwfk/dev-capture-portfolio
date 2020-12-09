import React from "react";
import home1 from "../img/home1.png";
import * as About from "./UI/styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About.StyledAbout>
      <About.StyledDescription className="description">
        <motion.div className="title">
          <About.StyledHide className="hide">
            <motion.h2 variants={titleAnim}>We Work To Make</motion.h2>
          </About.StyledHide>
          <About.StyledHide className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreames</span> come
            </motion.h2>
          </About.StyledHide>
          <About.StyledHide className="hide">
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </About.StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photogrophy or videography ideas that you have. we
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </About.StyledDescription>
      <About.StyledImage className="image">
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </About.StyledImage>
      <Wave />
    </About.StyledAbout>
  );
};

export default AboutSection;
