import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();
  const closeSidebarHandler = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 600);
  };
  return (
    <StyledSidebar
      style={{ transform: `translateX(${isOpen ? "0vw" : "-120vw"})` }}
    >
      <div className="side-header">
        <h1 id="logo">Capture</h1>
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          <div></div>
          <div></div>
        </div>
      </div>
      <ul>
        <li>
          <Link onClick={closeSidebarHandler} to="/">
            1. About us
          </Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link onClick={closeSidebarHandler} to="/work">
            2. Our work
          </Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link onClick={closeSidebarHandler} to="contact">
            3. Contact us
          </Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  background-color: #282828;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 30rem;
  z-index: 20;
  transform: translatex(-120vw);
  transition: transform 0.5s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  .side-header {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    #logo {
      color: #fff;
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      font-weight: lighter;
    }
    .close-btn {
      cursor: pointer;
      border-radius: 0.5rem;
      padding: 1rem 0.5rem;
      border: 0.1rem solid #fff;
      width: 3.2rem;
      div {
        background-color: #fff;
        width: 2rem;
        height: 0.2rem;
        &:first-child {
          transform: rotate(45deg);
        }
        &:last-child {
          transform: rotate(-45deg);
          position: relative;
          top: -0.2rem;
        }
      }
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    li {
      padding-top: 1rem;
      padding-left: 2rem;
      position: relative;
      font-size: 2rem;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 575px) {
    width: 100vw;
  }
`;

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -10%;
  left: 5%;
  @media (max-width: 900px) {
    left: 2%;
  }
`;

export default SideBar;
