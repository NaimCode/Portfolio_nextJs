import { API } from "../utils/env";

const ServiceSection = ({ data }) => {
  console.log(data);
  return <div className=""></div>;
};

export default ServiceSection;
export async function getStaticProps(context) {
  const res = await fetch(`${API}/services`);
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
