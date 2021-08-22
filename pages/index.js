import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ServiceSection from "../components/ServiceSection";
import { useEffect, useState } from "react";
import { service } from "../data/internal";
import { CheckIcon } from "../components/svg";
import { language } from "../data/internal";
import Projects from "../components/Projects";
import Link from "next/link";

import About from "../components/About";
import ContactSection from "../components/ContactSection";
export default function Home({ results }) {
  const [isMobile, setisMobile] = useState();
//jkjkjkkjjkjk
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
      <About />
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
      <Projects results={results} />
      <div className="w-full  lg:px-28">
        <div className="flex flex-col justify-center items-center">
          <h2 className="group text-4xl md:text-[6vw] text-accent-dark font-special font-semibold ">
            <span className="text-6xl md:text-[10vw]  font-bold text-secondary-light ">
              C
            </span>
            ontact
          </h2>
        </div>
        <ContactSection />
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
