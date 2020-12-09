import React, { useState } from "react";
import styled from "styled-components";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import Card from "./UI/Card";
import * as Services from "./UI/styles";
import { useScroll } from "./useScroll";
import { scrollReveal, photoAnim } from "../animation";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  const [cardInfo] = useState([
    { src: clock, title: "Efficient" },
    { src: teamwork, title: "Teamwork" },
    { src: diaphragm, title: "Diaphragam" },
    { src: money, title: "Affordable" },
  ]);
  return (
    <StyledServices
      className="services"
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <Services.StyledDescription className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards className="cards">
          {cardInfo.map((card, index) => (
            <Card key={index} src={card.src} title={card.title} alt="icon" />
          ))}
        </StyledCards>
      </Services.StyledDescription>
      <Services.StyledImage className="image">
        <motion.img
          src={home2}
          alt="camera"
          variants={photoAnim}
          ref={element}
          animate={controls}
          initial="hidden"
        />
      </Services.StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(Services.StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
    z-index: 100;
  }
`;

export default ServicesSection;
