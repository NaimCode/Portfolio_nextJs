import Link from "next/link";
const Projects = ({ results }) => {
  return (
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
  );
};

export default Projects;
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
        <Link href={r.source}>
          <a target="_blank">
            <div
              className="cursor-pointer text-xl rounded-sm border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 "
            >
              Code source
            </div>
          </a>
        </Link>
      )}
      {r.link != null && (
        <Link href={r.link}>
          <a target="_blank">
            <div
              className="cursor-pointer text-xl rounded-sm border-secondary-light py-1 px-3 text-secondary-light border-2 my-9 
             hover:bg-secondary-light hover:text-black transition duration-300 "
            >
              Lien
            </div>
          </a>
        </Link>
      )}
    </div>
  </div>
);
