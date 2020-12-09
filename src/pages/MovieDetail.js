import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import Award from "../components/Award";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const [movies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const url = history.location.pathname;
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <Fragment>
      {movie && (
        <StyledDetails
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <StyledHeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadLine>
          <StyledAwards>
            {movie.awards.map((award, index) => (
              <Award
                key={index}
                title={award.title}
                description={award.description}
              />
            ))}
          </StyledAwards>
          <StyledImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </Fragment>
  );
};

const StyledDetails = styled(motion.div)`
  color: #fff;
`;

const StyledHeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    @media (max-width: 575px) {
      font-size: 2.5rem;
    }
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  overflow: hidden;
  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
