import { Logo } from "./svg";
import { MenuList } from "../data/internal";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
const Nav = () => {
  const [menu, setmenu] = useState(false);
  return (
    <>
      <div className=" md:h-[60px] w-full flex flex-row justify-between items-center  lg:px-28">
        <Logo />

        <div className="hidden md:flex max-w-lg  justify-around items-center">
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
        {menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="27"
            viewBox="0 0 60.088 60.832"
            onClick={() => {
              setmenu(false);
            }}
          >
            <g
              id="Group_35"
              data-name="Group 35"
              transform="translate(7904.982 -1329.853)"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M2.994.006,69.871.134a3.008,3.008,0,0,1,3,3l.011,5.988a2.98,2.98,0,0,1-2.989,2.988L3.017,11.982a3.008,3.008,0,0,1-3-3L.006,2.994A2.98,2.98,0,0,1,2.994.006Z"
                transform="matrix(0.695, 0.719, -0.719, 0.695, -7896.254, 1329.845)"
                fill="#FFA647"
              />
              <path
                id="Path_7"
                data-name="Path 7"
                d="M2.994-.006,69.868-.132a2.981,2.981,0,0,1,2.989,2.989l-.011,5.989a3.008,3.008,0,0,1-3,3l-66.873.127A2.981,2.981,0,0,1-.017,8.983l.011-5.989A3.008,3.008,0,0,1,2.994-.006Z"
                transform="translate(-7904.877 1381.83) rotate(-45)"
                fill="#fff"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="20"
            viewBox="0 0 71 54"
            onClick={() => {
              setmenu(true);
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
                fill="#FFA647"
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
        )}
      </div>
      {menu && (
        <div className="flex flex-col py-24 items-center gap-4">
          {MenuList.map((e) => (
            <div
              key={MenuList.indexOf(e)}
              className="mx-3 text-accent text-4xl font-primary  hover:scale-110 hover:text-secondary-light transition duration-200"
            >
              <button
                className="focus:border-none"
                onClick={() => {
                  setmenu(false);
                  Router.push(e.route);
                }}
              >
                <span>{e.title}</span>
              </button>
            </div>
          ))}

          <button
            onClick={() => {
              setmenu(false);
              Router.push("/contact");
            }}
            className="text-2xl rounded-md border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 anim2"
          >
            Contactez Moi
          </button>
        </div>
      )}
    </>
  );
};

export default Nav;
