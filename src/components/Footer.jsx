import React from "react";
import { CONTACT } from "../constants";
import Flogo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="pb-4 text-white">
      <h2 className="mt-16 mb-8 text-4xl text-center">
        Let's <span className="text-yellow-400">Connect</span>
      </h2>
      <div className="flex flex-col items-center text-center">
        <div className="w-[7rem]">
          <a href="/">
            <img className="w-full" src={Flogo} alt="Logo" />
          </a>
        </div>
        <div className="flex gap-2">
          <a href={`mailto:${CONTACT.email}`} className="text-yellow-400">
            {CONTACT.email}
          </a>
          |<p className="">{CONTACT.phoneNo}</p>
        </div>
        <div className="mt-4">
          <p className="">{CONTACT.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
