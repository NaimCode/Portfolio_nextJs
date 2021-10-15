import router from "next/router";
const Succes = () => {
  return (
    <div className="h-screen flex items-center flex-col justify-center opacity-70 text-white text-3xl font-semibold">
      Votre message a été envoyé !
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer h-16 w-16 rounded-full shadow-xl bg-secondary-light mt-8 flex  flex-col justify-center items-center"
      >
        OK
      </div>
    </div>
  );
};

export default Succes;
