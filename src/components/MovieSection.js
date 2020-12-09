import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = (props) => {
  const [element, controls] = useScroll();
  return (
    <StyledMovie
      ref={element}
      variants={fade}
      animate={controls}
      initial="hidden"
    >
      <motion.h2 variants={fade}>{props.title}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <Link to={props.url}>
        <StyledHide>
          <motion.img variants={photoAnim} src={props.src} alt={props.alt} />
        </StyledHide>
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default OurWork;
