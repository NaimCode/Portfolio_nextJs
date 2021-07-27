const Hero = () => {
  return (
    <div className="text-accent-light flex flex-row justify-around items-center w-full h-[100vh]   lg:px-28 ">
      <div className="w-2/5 flex flex-col justify-center">
        <span className="font-primary text-accent-light text-[3vw] animate-topOpa1">
          Hi, i'm{" "}
        </span>
        <h1 className="font-primary text-secondary-light text-[4vw] font-bold animate-topOpa2">
          NAIM{" "}
          <span className="font-primary text-accent-light text-[3vw] font-normal">
            AbdelKerim,
          </span>
        </h1>
        <p className="text-[1.4vw] text-gray-400 animate-topOpa3">
          A FullStack web and mobile developer.
        </p>
        <div>
          <button
            className="border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 animate-topOpa4"
          >
            Download resume
          </button>
        </div>
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center">
        <img
          src="/hero.svg"
          alt=""
          className=" w-full h-[60vh] animate-topOpa1 "
        />
      </div>
    </div>
  );
};

export default Hero;
