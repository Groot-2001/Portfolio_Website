import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


import { styles } from "../styles"
import { navLinks } from "../constants";
import { shiva, menu, close, Resume } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center backdrop-blur bg-transparent py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <img src={shiva} alt="logo" dir="rtl" className='w-9 h-9 object-contain border-s-[3px] drop-shadow-3xl ' style={{ width: "80px", height: "80px" }} />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Shiva Silmawala <span className='sm:block hidden'>Backend Enthusiast</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            key={1025}
            className={`text-secondary
            hover:text-white text-[18px]
            font-medium cursor-pointer
            `}
          ><a href={Resume} download>Resume</a></li>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"}
              hover:text-white text-[18px]
              font-medium cursor-pointer
              `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-cyan-950 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <li
                key={1025}
                className={`
          hover:text-white text-[16px]
          font-medium font-poppins cursor-pointer
          `}
              ><a href={Resume} download>Resume</a></li>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-secondary"}
              hover:text-white text-[16px]
              font-medium font-poppins cursor-pointer
              `}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar