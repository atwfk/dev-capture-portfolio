import React from "react";
import styled from "styled-components";

const Modal = ({ setIsOpen }) => {
  return <StyledModal onClick={() => setIsOpen(false)}></StyledModal>;
};

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export default Modal;
