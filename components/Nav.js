import { Logo } from "./svg";
import { MenuList } from "../data/internal";
import Link from "next/link";
const Nav = () => {
  return (
    <div className=" w-full h-16 flex flex-row justify-between items-center  lg:px-28">
      <Logo />

      <div className="max-w-lg flex justify-around items-center">
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

      <button className="bg-secondary text-accent-light py-2 px-8 rounded-lg font-primary font-bold">
        Contactez moi
      </button>
    </div>
  );
};

export default Nav;
