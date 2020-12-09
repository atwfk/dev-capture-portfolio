import React, { useState } from "react";
import Question from "./UI/Question";
import styled from "styled-components";
import { StyledAbout } from "./UI/styles";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [faqInfo, setFaqInfo] = useState([
    { title: "How Do I Start?", open: false },
    { title: "Daily Schedule", open: false },
    { title: "Diferrent Payment Methods", open: false },
    { title: "What Products Do You Offer?", open: false },
  ]);
  const [element, controls] = useScroll();
  const toggleFaqHandler = (index) => {
    setFaqInfo(
      faqInfo.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };
  return (
    <StyledFaq
      className="faq"
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
        <AnimateSharedLayout>
          {faqInfo.map((faq, index) => (
            <Question
              click={() => toggleFaqHandler(index)}
              key={index}
              faqInfo={faq}
            >
              {faq.title}
            </Question>
          ))}
        </AnimateSharedLayout>
      </h2>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .question {
    padding: 3rem 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    cursor: pointer;
    background-color: #3b3b3b;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
  .answer {
    padding-top: 2rem;
    p {
      padding: 1rem 0rem;
    }
    .faq-line {
      background: #ccc;
      height: 0.2rem;
      margin: 2rem 0rem;
      width: 100%;
    }
  }
`;

export default FaqSection;
