import Hero from "../components/Hero";
import Nav from "../components/Nav";
import ServiceSection from "../components/ServiceSection";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="flex flex-row justify-around  w-full h-auto   lg:px-28">
        <div className="w-[38%] h-[400px] bg-secondary-light overflow-hidden">
          <img src="/avatar.jpg" alt="" className="object-cover" />
        </div>
        <div className="w-[50%] h-auto flex flex-col ">
          <h2 className="text-6xl text-secondary-light font-primary font-semibold">
            About Me
          </h2>
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
