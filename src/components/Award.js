import React from "react";
import styled from "styled-components";

const Award = (props) => {
  return (
    <StyledAward>
      <h3>{props.title}</h3>
      <div className="line"></div>
      <p>{props.description}</p>
    </StyledAward>
  );
};

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 1.3rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.3rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
    font-size: 1rem;
  }
`;

export default Award;
