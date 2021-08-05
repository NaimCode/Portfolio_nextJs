const About = () => {
  return (
    <div className="px-2 md:px-0 flex flex-col md:flex-row md:justify-around  w-full h-auto bg-primary-light bg-opacity-10 py-10 md:py-36  lg:px-28">
      <div className="w-full md:w-2/5 h-[300px] md:h-[400px] bg-secondary-light overflow-hidden  anim1">
        <img src="../avatar.jpg" alt="" className="object-cover" />
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
    </div>
  );
};

export default About;
