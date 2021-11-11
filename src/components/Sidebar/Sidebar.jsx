import React from "react";

import './Sidebar.css'
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";
import pin from "../../assets/icons/pin.svg";
import tie from "../../assets/icons/tie.svg";
import myimage from "../../assets/myimage.png"
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:aanuj.sharma2590@gmail.com");
  };
  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,

      transition: {
        delay: 0.1,
        duration: 0.5,
        type: "spring",
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={myimage} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        <span> Anuj Sharma</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">
        Full Stack Web Developer
      </div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon mr-1" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="!#">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="!#">
          <img src={instagram} alt="instagram" className="sidebar__icon mr-3" />
        </a>
        <a href="!#">
          <img src={github} alt="github" className="sidebar__icon mr-3" />
        </a>
      </figure>
      <div className="sidebar__contact">
 
        <div className="sidebar__location sidebar__item">
          <img src={pin} alt="location" className="sidebar__icon mr-1" />
          Gwalior, India
        </div>
        <div className="sidebar__item">aanuj.sharma2590@gmail.com</div>
        <div className="sidebar__item">9057524316/9872515499</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
