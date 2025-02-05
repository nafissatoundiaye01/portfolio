import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { githubIcon, mailIcon, phoneIcon } from "../assets";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex flex-col items-center py-5 bg-transparent`}
    >
      <div className='w-full flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto'>
        {/* Section des contacts */}
        <div className='flex flex-col sm:flex-row gap-6 items-center'>
          <a
            href="mailto:nafissatou.ndiaye.epro@gmail.com"
            className="flex items-center gap-2 text-white text-[18px] font-medium cursor-pointer hover:text-secondary"
          >
            <img src={mailIcon} alt="mail" className="w-[20px] h-[20px]" />
            Email
          </a>
          <a
            href="tel:+221771308507"
            className="flex items-center gap-2 text-white text-[18px] font-medium cursor-pointer hover:text-secondary"
          >
            <img src={phoneIcon} alt="phone" className="w-[20px] h-[20px]" />
            Téléphone
          </a>
          
        </div>

        {/* Section copyright */}
        <div className='mt-4 sm:mt-0 text-center text-white text-[16px]'>
          <p>@2025 Nafissatou Ndiaye. Fait avec React.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
