import { Logo } from "./svg";
import { MenuList } from "../data/internal";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
const Nav = () => {
  const [menu, setmenu] = useState(false);
  return (
    <div className=" h-auto md:h-16">
      <div className=" w-full flex flex-row justify-between items-center  lg:px-28">
        <Logo />

        <div className="flex max-w-lg  justify-around items-center">
          {MenuList.map((e) => (
            <div
              key={MenuList.indexOf(e)}
              className="mx-3 text-accent text-lg font-primary  hover:scale-110 hover:text-secondary-light transition duration-200"
            >
              <Link href={e.route}>
                <a>
                  <span>{e.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            Router.push("/contact");
          }}
          className="hidden md:block text-xl rounded-md border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 "
        >
          Contactez Moi
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="20"
          viewBox="0 0 71 54"
          onClick={() => {
            console.log("works");
          }}
          className="cursor-pointer  md:hidden"
        >
          <g
            id="Group_32"
            data-name="Group 32"
            transform="translate(7910 -1334)"
          >
            <rect
              id="Rectangle_52"
              data-name="Rectangle 52"
              width="71"
              height="12"
              rx="3"
              transform="translate(-7910 1334)"
              fill="#fff"
            />
            <rect
              id="Rectangle_53"
              data-name="Rectangle 53"
              width="71"
              height="12"
              rx="3"
              transform="translate(-7910 1355)"
              fill="#fff"
            />
            <rect
              id="Rectangle_54"
              data-name="Rectangle 54"
              width="71"
              height="12"
              rx="3"
              transform="translate(-7910 1376)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-col py-24 ">
        {MenuList.map((e) => (
          <div
            key={MenuList.indexOf(e)}
            className="mx-3 text-accent text-lg font-primary  hover:scale-110 hover:text-secondary-light transition duration-200"
          >
            <Link href={e.route}>
              <a>
                <span>{e.title}</span>
              </a>
            </Link>
          </div>
        ))}

        <button
          onClick={() => {
            Router.push("/contact");
          }}
          className="text-xl rounded-md border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 "
        >
          Contactez Moi
        </button>
      </div>
    </div>
  );
};

export default Nav;
