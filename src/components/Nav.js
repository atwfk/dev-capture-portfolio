import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBar from "./Sidebar";
import Modal from "./UI/Modal";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <div className="toggle-btn" onClick={() => setIsOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: sticky;
  top: 0;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  z-index: 10;
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  .toggle-btn {
    border-radius: 0.3rem;
    border: 0.1rem solid #fff;
    padding: 0.4rem;
    cursor: pointer;
    div {
      background-color: #fff;
      width: 2rem;
      height: 0.3rem;
      &:not(:last-of-type) {
        margin-bottom: 2px;
      }
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 900px) {
    padding: 1rem 2rem;
  }
`;

export default Nav;
