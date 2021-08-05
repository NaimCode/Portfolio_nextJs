import Projects from "../components/Projects";

const projets = ({ results }) => {
  return (
    <div className="pt-24">
      <Projects results={results} />
    </div>
  );
};

export default projets;
export async function getServerSideProps() {
  const request = await fetch(`https://ob2a.herokuapp.com/projects`).then(
    (res) => res.json()
  );
  console.log(request);
  return {
    props: {
      results: request,
    },
  };
}
