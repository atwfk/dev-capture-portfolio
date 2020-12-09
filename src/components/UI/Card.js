import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <StyledCard className="card">
      <div className="icon">
        <img src={props.src} alt={props.alt} />
        <h3>{props.title}</h3>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  //flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #fff;
      color: #000;
      padding: 1rem;
    }
  }
`;

export default Card;
