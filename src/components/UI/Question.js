import { motion } from "framer-motion";
import React from "react";

const Question = (props) => {
  return (
    <motion.div layout className="question" onClick={props.click}>
      <motion.h4 layout>{props.children}</motion.h4>
      {props.faqInfo.open && (
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
            delectus!
          </p>
          <div className="faq-line"></div>
        </div>
      )}
    </motion.div>
  );
};

export default Question;
