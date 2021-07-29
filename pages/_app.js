import "tailwindcss/tailwind.css";
import Particles from "react-particles-js";
import Head from "next/head";
import Nav from "../components/Nav";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Naim Dev</title>
        <link rel="icon" href="/logo.png" />
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
        <div className="absolute top-0 left-0 z-50 w-full backdrop-filter backdrop-blur-md">
          <Nav />
        </div>
        <div className="absolute top-0 h-screen w-full overflow-y-scroll backdrop-filter backdrop-blur-lg">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
