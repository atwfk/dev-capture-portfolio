import React, { useState } from "react";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import MovieSection from "../components/MovieSection";
import { motion } from "framer-motion";
import { pageAnimation, slider, sliderContainer } from "../animation";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [movieInfo] = useState([
    {
      title: "The Athlete",
      src: athlete,
      alt: "athlete",
      url: "the-athlete",
    },
    {
      title: "The Racer",
      src: theracer,
      alt: "theracer",
      url: "the-racer",
    },
    {
      title: "Good Times",
      src: goodtimes,
      aly: "goodtimes",
      url: "good-times",
    },
  ]);
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {movieInfo.map((movie, index) => (
        <MovieSection
          key={index}
          title={movie.title}
          src={movie.src}
          alt={movie.alt}
          url={`/work/${movie.url}`}
        />
      ))}
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100vw;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
