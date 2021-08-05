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
      <div className="w-full lg:px-28">
        <div className="flex flex-col justify-center items-center">
          <h2 className="group text-4xl md:text-[6vw] text-accent-dark font-special font-semibold ">
            <span className="text-6xl md:text-[10vw]  font-bold text-secondary-light ">
              C
            </span>
            ontact
          </h2>
        </div>
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="w-full  rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      class="w-full  rounded border border-gray-300 focus:border-secondary-light focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="py-2 px-7 w-full">
                  <button class="flex mx-auto text-white bg-secondary-light border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg font-primary">
                    Envoyer
                  </button>
                </div>
                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a class="text-indigo-500">naimdev4@gmail.com</a>
                  <p class="leading-normal my-5">
                    Diguel, Rue 30
                    <br />
                    N'Djamena - TCHAD
                  </p>
                  <span class="inline-flex">
                    <a class="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-4 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
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
