import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const icons = [
    {
      name: "LinkedIn",
      component: FaLinkedin,
      url: "https://www.linkedin.com/in/nitinthakur01/",
    },
    {
      name: "GitHub",
      component: FaGithub,
      url: "https://github.com/nitinthakur01",
    },
  ];

  return (
    <nav className="flex items-center justify-between py-3 lg:py-8 ">
      <div className="flex items-center flex-shrink-0">
        <a href="/">
          <img className="mx-2 w-[5rem]" src={Logo} alt="logo" />
        </a>
      </div>

      <div className="flex items-center justify-center gap-4 m-4 text-yellow-400 lg:gap-8 lg:m-8">
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIcon(icon.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => window.open(icon.url, "_blank")}
              className="flex items-center justify-center cursor-pointer"
            >
              <div className="block lg:hidden">
                <IconComponent style={{ fontSize: "25px" }} />
              </div>
              <div className="hidden lg:block">
                {hoveredIcon === icon.name ? (
                  <span className="text-[20px]">{icon.name}</span>
                ) : (
                  <IconComponent style={{ fontSize: "25px" }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
