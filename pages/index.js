import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ServiceSection from "../components/ServiceSection";
import { useEffect } from "react";
import { service } from "../data/internal";
import { CheckIcon } from "../components/svg";
export default function Home() {
  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        console.log(entry);

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
        console.log(entry);

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
        console.log(entry);

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
      
      <div className="text-accent-light flex flex-row justify-around items-center w-full h-[100vh]   lg:px-28 ">
        <div className="w-2/5 flex flex-col justify-center ">
          <span className="font-primary text-accent-light text-[3vw] anim2 opacity-0">
            Bonjour, je suis{" "}
          </span>
          <h1 className="font-primary text-secondary-light text-[4vw] font-bold anim2">
            NAIM{" "}
            <span className="font-primary text-accent-light text-[3vw] font-normal">
              AbdelKerim,
            </span>
          </h1>
          <p className="text-[1.4vw] text-gray-400 anim2">
            Un développeur fullstack web and mobile.
          </p>
          <div>
            <button
              className="border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 anim2"
            >
              Télecharger le CV
            </button>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center anim1 ">
          <img src="/hero.svg" alt="" className=" w-full h-[60vh] " />
        </div>
      </div>
      <div className="vis flex flex-row justify-around  w-full h-auto bg-primary-light bg-opacity-10 py-36  lg:px-28">
        <div className="w-2/5 h-[400px] bg-secondary-light overflow-hidden opacity-0 anim1">
          <img src="/avatar.jpg" alt="" className="object-cover" />
        </div>
        <div className="w-[50%] h-[400px] flex flex-col anim2">
          <h2 className="group text-[6vw]  text-accent-dark font-special font-semibold hover:text-secondary-light transition-colors 1s">
            <span className="text-[10vw] font-bold text-secondary-light group-hover:text-accent-light transition-colors 1s">
              A
            </span>
            bout Me
          </h2>
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-accent-light font-primary text-lg text-opacity-80 ">
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
      <div className="w-full lg:px-28 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="group text-[6vw]  text-accent-dark font-special font-semibold hover:text-secondary-light transition-colors 1s">
            <span className="text-[10vw] font-bold text-secondary-light group-hover:text-accent-light transition-colors 1s">
              S
            </span>
            ervices
          </h2>
          <p className="text-accent-light font-primary text-lg text-opacity-80 max-w-2xl">
            Ayant obtenu une licence en{" "}
            <span className="text-secondary-light ">
              {" "}
              Science Mathématique {"&"} Informatique
            </span>{" "}
            à l'université{" "}
            <span className="text-secondary-light">Ibn Tofail</span> de Kenitra
            au Maroc, je suis actuellement à l'école d'ingénieur{" "}
            <span className="text-secondary-light">ISGA</span> de Rabat au Maroc
            pour un diplôme d'{" "}
            <span className="text-secondary-light">
              ingénieur en développement web et mobile
            </span>
            .
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-3xl grid grid-cols-2 py-12 gap-16">
            {service.map((s) => (
              <div className=" bg-primary bg-opacity-20 backdrop-filter backdrop-blur-lg anim1 p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-3xl text-center text-secondary-light">
                  {s.title}
                </h3>
                <img src={s.image} alt="" className="w-full scale-75" />
                {/* <div className="h-[2px] w-full bg-accent-light opacity-25 my-7"></div> */}
                <div className="flex flex-wrap gap-4 justify-center">
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
      <div className="w-full bg-primary-light bg-opacity-10 py-36 lg:px-28 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="group text-[6vw]  text-accent-dark font-special font-semibold hover:text-secondary-light transition-colors 1s">
            <span className="text-[10vw] font-bold text-secondary-light group-hover:text-accent-light transition-colors 1s">
              P
            </span>
            rojects
          </h2>
          <p className="text-accent-light font-primary text-lg text-opacity-80 max-w-2xl">
            Ayant obtenu une licence en{" "}
            <span className="text-secondary-light ">
              {" "}
              Science Mathématique {"&"} Informatique
            </span>{" "}
            à l'université{" "}
            <span className="text-secondary-light">Ibn Tofail</span> de Kenitra
            au Maroc, je suis actuellement à l'école d'ingénieur{" "}
            <span className="text-secondary-light">ISGA</span> de Rabat au Maroc
            pour un diplôme d'{" "}
            <span className="text-secondary-light">
              ingénieur en développement web et mobile
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
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
