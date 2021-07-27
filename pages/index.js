import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ServiceSection from "../components/ServiceSection";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-topOpa1");
        } else {
          entry.target.classList.remove("animate-topOpa1");
        }
      });
    };
    const callback2 = function (entries) {
      entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-topOpa3");
        } else {
          entry.target.classList.remove("animate-topOpa3");
        }
      });
    };
    const observer2 = new IntersectionObserver(callback2);
    const observer = new IntersectionObserver(callback);
    const targets2 = document.querySelectorAll(".anim2");
    targets2.forEach(function (target) {
      observer2.observe(target);
    });
    const targets = document.querySelectorAll(".anim1");
    targets.forEach(function (target) {
      observer.observe(target);
    });
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <Nav />
      <div className="text-accent-light flex flex-row justify-around items-center w-full h-[100vh]   lg:px-28 ">
        <div className="w-2/5 flex flex-col justify-center ">
          <span className="font-primary text-accent-light text-[3vw] anim2">
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
      <div className="vis flex flex-row justify-around  w-full h-auto   lg:px-28">
        <div className="w-2/5 h-[400px] bg-secondary-light overflow-hidden anim1">
          <img src="/avatar.jpg" alt="" className="object-cover" />
        </div>
        <div className="w-[50%] h-[400px] flex flex-col anim2">
          <h2 className="text-6xl  text-accent-dark font-special font-semibold">
            <span className="text-9xl font-bold text-secondary-light">A</span>
            bout Me
          </h2>
          <div className="flex-grow flex flex-col justify-center">
            <p className="text-accent-light font-primary text-lg">
              Ayant obtenu une licence en Science Mathématique {"&"}{" "}
              Informatique à l'université Ibn Tofail de Kenitra au Maroc, je
              suis actuellement à l'école d'ingénieur ISGA de Rabat au Maroc
              pour un diplôme d'ingénieur en développement web et mobile.
            </p>
          </div>
        </div>
      </div>
      <div className="text-accent-light flex justify-center items-center w-full h-screen">
        <h1 className="text-4xl">Page 2</h1>
      </div>
      <div className="text-accent-light flex justify-center items-center w-full h-screen">
        <h1 className="text-4xl">Page 3</h1>
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
