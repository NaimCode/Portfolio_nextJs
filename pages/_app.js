import "tailwindcss/tailwind.css";
import Particles from "react-particles-js";
import Head from "next/head";
import Nav from "../components/Nav";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
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
    <div>
      <Head>
        <title>Naim Dev</title>
        <link rel="icon" href="logo.png" />
        <meta name="theme-color" content="#11001C" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <div className="bg-primary-dark relative overflow-hidden">
        <Particles
          id="particles-js"
          className="h-screen"
          params={{
            particles: {
              number: {
                value: 6,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#F77F00",
              },
              shape: {
                type: "polygon",
                stroke: {
                  width: 0,
                  color: "#F77F00",
                },
                polygon: {
                  nb_sides: 6,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.26456299004281125,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 184.39238699953512,
                random: false,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: true,
                },
              },
              line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        ></Particles>

        <div className="absolute mx-auto  top-0 left-0 z-50 backdrop-filter backdrop-blur-3xl w-full">
          <Nav />
        </div>

        <div className="absolute top-0 h-screen w-full overflow-y-scroll backdrop-filter backdrop-blur-lg">
          <Component {...pageProps} />
          <div className=" backdrop-filter backdrop-blur-md  p-8 bg-primary-light bg-opacity-10 mt-8">
            <h4 className="text-center text-2xl text-accent-dark font-special">
              2021 - NaimDev
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
