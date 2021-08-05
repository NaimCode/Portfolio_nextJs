import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ServiceSection from "../components/ServiceSection";
import { useEffect, useState } from "react";
import { service } from "../data/internal";
import { CheckIcon } from "../components/svg";
import { language } from "../data/internal";
import Projects from "../components/Projects";

export default function Home({ results }) {
  const [isMobile, setisMobile] = useState();

  useEffect(() => {
    window.addEventListener("resize", function (event) {
      console.log(this.window.innerWidth);
    });
    const callback = function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-topOpa1");
        } else {
          entry.target.classList.remove("animate-topOpa1");
          entry.target.classList.add("opacity-0");
        }
      });
    };
    const callback2 = function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-topOpa2");
        } else {
          entry.target.classList.remove("animate-topOpa2");
          entry.target.classList.add("opacity-0");
        }
      });
    };
    const callback3 = function (entries) {
      entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("fixe");
        } else {
          entry.target.classList.remove("fixe");
          entry.target.classList.add("opacity-0");
        }
      });
    };
    const observer2 = new IntersectionObserver(callback2);

    const observer3 = new IntersectionObserver(callback3);
    const observer = new IntersectionObserver(callback);
    const targets2 = document.querySelectorAll(".anim2");
    targets2.forEach(function (target) {
      observer2.observe(target);
    });
    const targets = document.querySelectorAll(".anim1");
    targets.forEach(function (target) {
      observer.observe(target);
    });

    const targets3 = document.querySelectorAll(".nav");
    targets3.forEach(function (target) {
      observer3.observe(target);
    });
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <div className="text-accent-light px-2 md:px-0 h-auto flex flex-col md:flex-row justify-center md:justify-around items-center w-full md:h-[100vh]   lg:px-28 ">
        <div className="h-[50vh]  md:h-auto w-full md:w-2/5 flex flex-col justify-end md:justify-center  items-center md:items-start">
          <span className="font-primary text-accent-light text-4xl md:text-[3vw] anim2 opacity-0">
            Bonjour, je suis{" "}
          </span>
          <h1 className="font-primary text-secondary-light text-5xl md:text-[4vw] font-bold anim2">
            NAIM{" "}
            <span className="font-primary text-accent-light text-4xl md:text-[3vw] font-normal">
              AbdelKerim,
            </span>
          </h1>
          <p className="py-4 md:py-0 text-center md:text-left text-2xl md:text-[1.4vw] text-gray-400 anim2">
            Un développeur fullstack web and mobile.
          </p>
          <div>
            <button
              className="text-xl border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 anim2"
            >
              Télecharger le CV
            </button>
          </div>
        </div>
        <div className="w-full h-[50vh] md:h-auto  md:w-[50%] flex flex-col justify-center items-center anim1 ">
          <img src="/hero.svg" alt="" className=" w-full h-auto md:h-[60vh] " />
        </div>
      </div>
      <div className="px-2 md:px-0 flex flex-col md:flex-row md:justify-around  w-full h-auto bg-primary-light bg-opacity-10 py-10 md:py-36  lg:px-28">
        <div className="w-full md:w-2/5 h-[300px] md:h-[400px] bg-secondary-light overflow-hidden opacity-0 anim1">
          <img src="/avatar.jpg" alt="" className="object-cover" />
        </div>
        <div className="w-full md:w-[50%] h-auto md:h-[400px] flex flex-col anim2">
          <h2 className="py-4 md:py-0 text-center md:text-left group text-4xl md:text-[6vw]  text-accent-dark font-special font-semibold ">
            <span className="text-6xl md:text-[10vw] font-bold text-secondary-light ">
              A
            </span>
            bout Me
          </h2>
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-center md:text-left text-accent-light font-primary text-lg text-opacity-80 ">
              Ayant obtenu une licence en{" "}
              <span className="text-secondary-light ">
                {" "}
                Science Mathématique {"&"} Informatique
              </span>{" "}
              à l'université{" "}
              <span className="text-secondary-light">Ibn Tofail</span> de
              Kenitra au Maroc, je suis actuellement à l'école d'ingénieur{" "}
              <span className="text-secondary-light">ISGA</span> de Rabat au
              Maroc pour un diplôme d'{" "}
              <span className="text-secondary-light">
                ingénieur en développement web et mobile
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-2 py-4 lg:px-28 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="group text-4xl md:text-[6vw] text-accent-dark font-special font-semibold ">
            <span className="text-6xl md:text-[10vw]  font-bold text-secondary-light ">
              S
            </span>
            ervices
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="max-w-3xl grid grid-cols-1 md:grid-cols-2 py-12 gap-2 md:gap-16">
            {service.map((s) => (
              <div className=" bg-primary bg-opacity-20 backdrop-filter backdrop-blur-lg anim1 p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl text-center text-secondary-light">
                  {s.title}
                </h3>
                <img src={s.image} alt="" className="w-full scale-75" />
                {/* <div className="h-[2px] w-full bg-accent-light opacity-25 my-7"></div> */}
                <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
                  {s.framework.map((f) => (
                    <div className="rounded-lg py-2 px-4 text-black  bg-gray-300 ">
                      {f}
                    </div>
                  ))}
                </div>

                {/* {s.services.map((ser) => (
                <div className="flex items-start">
                  <svg
                    className="text-secondary-light"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z" />
                  </svg>
                  <span className="flex-grow">{ser}</span>
                </div>
              ))} */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-light bg-opacity-10 py-20 lg:px-28 flex flex-wrap justify-center gap-9">
        {language.map((l) => (
          <span
            className={`text-4xl font-secondary font-bold text-accent-light opacity-40 transition-opacity `}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="w-full  py-20 lg:px-28">
        <div className="flex flex-col justify-center items-center">
          <h2 className="group text-4xl md:text-[6vw] text-accent-dark font-special font-semibold ">
            <span className="text-6xl md:text-[10vw]  font-bold text-secondary-light ">
              P
            </span>
            rojets
          </h2>
        </div>
        {results.map((r) => (
          <div
            key={r.id}
            className={`py-3 my-3 md:py-7 md:my-7  flex flex-col md:flex-row 
              bg-primary-light bg-opacity-10 justify-center md:justify-around items-center px-3 md:px-0`}
          >
            {/* {results.indexOf(r) % 2 == 0 ? ( */}
            <ImageProject r={r} />
            {/* // ) : ( */}
            <DescProject r={r} />
            {/* // )} */}
            {/* {results.indexOf(r) % 2 == 0 ? (
              <DescProject r={r} />
            ) : (
              <ImageProject r={r} />
            )} */}
          </div>
        ))}
      </div>
      <div className="w-full  py-20 lg:px-28">
        <div className="flex flex-col justify-center items-center">
          <h2 className="group text-4xl md:text-[6vw] text-accent-dark font-special font-semibold ">
            <span className="text-6xl md:text-[10vw]  font-bold text-secondary-light ">
              C
            </span>
            ontact
          </h2>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const request = await fetch(`https://ob2a.herokuapp.com/projects`).then(
    (res) => res.json()
  );

  return {
    props: {
      results: request,
    },
  };
}
//  <Nav />
//       <div className="w-full h-[90vh] bg-primary-dark flex justify-center items-center text-4xl text-accent-dark">
//         Hero
//       </div>
//       <ServiceSection />
//       <div className="w-full h-36">
//         <span className="object-cover text-gray-400 w-3/4">{"</about"}</span>
//       </div>
//       <div className="flex justify-around items-center bg-primary-dark py-20">
//         <div className="w-1/3 h-[440px] bg-secondary"></div>
//         <div className="w-1/3 h-auto">
//           <h2 className="font-secondary font-bold text-4xl text-accent hover:scale-x-125  transition ease-linear 3s">
//             About Me
//           </h2>
//         </div>
//       </div>

const ImageProject = ({ r }) => (
  <img
    src={r.logo.formats.large.url}
    alt=""
    className="w-full md:w-[55%] anim1"
  />
);
const DescProject = ({ r }) => (
  <div className="w-full md:w-[40%] anim2 text-center md:text-left">
    <h2 className="text-secondary-light text-6xl font-secondary font-semibold">
      {r.title}
    </h2>
    <p className="text-green-500">{r.description}</p>
    <div className="w-full h-[1px] bg-white opacity-50 my-4"></div>
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {r.tags.map((t) => (
        <div
          key={r.tags.indexOf(t)}
          className="rounded-lg py-2 px-4 text-black  bg-gray-300 "
        >
          <span>{t.title}</span>
        </div>
      ))}
    </div>
    <div className="w-full h-[1px] bg-white opacity-50 my-4"></div>
    <div className="flex gap-4 md:gap-8 items-center justify-around md:justify-start">
      {r.source != null && (
        <button
          className="text-xl rounded-sm border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 "
        >
          Code source
        </button>
      )}
      {r.link != null && (
        <button
          className="text-xl rounded-sm border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 "
        >
          Lien
        </button>
      )}
    </div>
  </div>
);
