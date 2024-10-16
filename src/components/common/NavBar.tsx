"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const links = [
    {
      name: "About us",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Use Cases",
      link: "/",
    },
    {
      name: "Pricing",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in backdrop-blur p-4">
        <div className="flex justify-between mx-4 md:mx-[85px] items-center">
          <div className=" flex gap-2">
            <img src="/images/green_logo.png" alt="logo" className="w-[7rem]" />
            <h1 className=" text-4xl font-bold">Greenspot</h1>
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {/* {links.map((link, index) => (
              <p
                key={index}
                className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
              >
                {link.name}
              </p>
            ))} */}

            <div className="flex items-center gap-[40px] select-none">
              <MainButton
              text="Join in the waitlist"
              tallyAttributes={{
                "data-tally-open": "wQJ48Y",
                "data-tally-layout": "modal",
                "data-tally-width": "478",
                "data-tally-emoji-text": "👋",
                "data-tally-emoji-animation": "wave",
                "data-tally-auto-close": "0",
              }}
            />
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/green_logo.png" alt="logo" className="w-[5rem]" />
          </div>
          <div>
            <MainButton
              text="Join in"
              size="small"
              width="10"
              tallyAttributes={{
                "data-tally-open": "wQJ48Y",
                "data-tally-layout": "modal",
                "data-tally-width": "478",
                "data-tally-emoji-text": "👋",
                "data-tally-emoji-animation": "wave",
                "data-tally-auto-close": "0",
              }}
            />
          </div>
          {/* <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.png"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div> */}
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((link, index) => (
                <p
                  key={index}
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  {link.name}
                </p>
              ))}

              <div className="flex items-center gap-[40px] select-none">
                <MainButton text="Request a quoute" />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
