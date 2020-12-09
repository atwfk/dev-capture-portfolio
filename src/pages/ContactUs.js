import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  const [contactInfo] = useState([
    { title: "Send Us A Message" },
    { title: "Send An Email" },
    { title: "Social Media" },
  ]);
  return (
    <StyledContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        {contactInfo.map((contact, index) => (
          <StyledHide key={index}>
            <StyledSocial variants={titleAnim}>
              <StyledCircle></StyledCircle>
              <h2>{contact.title}</h2>
            </StyledSocial>
          </StyledHide>
        ))}
      </div>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 660px) {
    padding: 2rem 2rem;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: #000;
  @media (max-width: 660px) {
    margin-top: 5rem;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
  h2 {
    @media (max-width: 660px) {
      font-size: 2rem;
    }
  }
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
  @media (max-width: 660px) {
    width: 2rem;
    height: 2rem;
  }
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    @media (max-width: 660px) {
      font-size: 2rem;
    }
  }
`;

export default ContactUs;
