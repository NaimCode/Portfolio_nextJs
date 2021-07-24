const Hero = () => {
  return (
    <div className="text-accent-light flex flex-row justify-around items-center w-full h-[90vh]   lg:px-28 animate-topOpa">
      <div className="w-2/5 flex flex-col justify-center">
        <span className="font-primary text-accent-light text-[3vw]">
          Hi, i'm{" "}
        </span>
        <h1 className="font-primary text-secondary-light text-[4vw] font-bold">
          NAIM{" "}
          <span className="font-primary text-accent-light text-[3vw] font-normal">
            AbdelKerim,
          </span>
        </h1>
        <p className="text-[1.4vw] text-gray-400">
          A FullStack web and mobile developer.
        </p>
        <div>
          <button
            className="border-secondary-light py-1 px-3 text-secondary-light border-2 my-9
             hover:bg-secondary-light hover:text-black transition duration-300"
          >
            Download resume
          </button>
        </div>
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <div className="w-full h-[60vh]   overflow-hidden">
          <img
            src="/hero.svg"
            alt=""
            className="object-cover  shadow-2xl animate-topOpa "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
