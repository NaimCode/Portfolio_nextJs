const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      {projects.map((p) =>
        p.webImage.length != 0 ? (
          <div className="flex py-5 my-5 justify-around items-center">
            <div className=" w-7/12 border-t-[20px] border-b-[20px] border-l-[10px] border-r-[10px] border-black rounded-md shadow-2xl">
              <img
                src={
                  p.webImage[0].formats != null
                    ? p.webImage[0].formats.large.url
                    : p.webImage[0].url
                }
                alt=""
                className="object-right-top"
              />
            </div>
            <div className=" h-60 bottom-0 right-4 border-t-[10px] border-b-[10px] border-l-[6px] border-r-[6px] border-black rounded-md shadow-2xl">
              <img
                src={
                  p.mobileImage[0].formats != null
                    ? p.mobileImage[0].formats.thumbnail.url
                    : p.mobileImage[0].url
                }
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="w-[60%] flex justify-around items-center">
            {p.mobileImage.map(
              (i) =>
                p.mobileImage.indexOf(i) <= 2 && (
                  <img
                    src={i.formats != null ? i.formats.large.url : i.url}
                    alt=""
                    className="rounded-lg h-60 shadow-2xl"
                  />
                )
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
