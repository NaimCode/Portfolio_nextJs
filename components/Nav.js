import { Logo } from "./svg";
import { MenuList } from "../data/internal";
import Link from "next/link";
const Nav = () => {
  return (
    <div className=" w-full h-16 flex flex-row justify-between items-center  lg:px-28">
      <Logo />

      <div className="hidden md:flex max-w-lg  justify-around items-center">
        {MenuList.map((e) => (
          <div
            key={MenuList.indexOf(e)}
            className="mx-3 text-accent text-lg font-primary hover:scale-110 hover:text-secondary-light transition duration-200"
          >
            <Link href={e.route}>
              <a>
                <span>{e.title}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <button className="hidden md:block bg-secondary text-accent-light py-2 px-8 rounded-lg font-primary font-bold">
        Contactez moi
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
        <g id="Group_32" data-name="Group 32" transform="translate(7910 -1334)">
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
  );
};

export default Nav;
