import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope,  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-mycolor-200 text-center items-center justify-center">
      <div className="container  flex-center p-12 flex flex-col sm:flex-row gap-10 w-full sm:gap-5 text-2xl text-white text-center items-center justify-between">
      <span className="font-semibold font-pacifico ml-4">Hasan Emir Caglar</span>
        <div className="flex  flex-wrap  items-center gap-4">
          <a href="https://www.instagram.com/cagscode" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/hasan-emir-caglar" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/Hcaglar32" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:hasan.49.5012@gmail.com" target="_blank" rel="noopener noreferrer">
            < FaEnvelope/>
          </a>
        </div>
        <span className="font-semibold text-center  text-sm ">All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
