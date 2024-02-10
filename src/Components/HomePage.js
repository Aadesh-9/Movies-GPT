import { Link } from "react-router-dom";
import { NETFLIX_BG_IMAGE, NETFLIX_LOGO_URl } from "../Utils/Constants";

const HomePage = () => {
  return (
    <div>
      <div className="absolute w-full h-[700px] flex justify-center items-center bg-black opacity-75">
        <div className="  text-white">
          <h1 className="text-5xl font-extrabold">
            The biggest Indian hits. Ready to watch here <br></br>
            <span className=" relative inset-x-[30%] ">from ₹149.</span>
          </h1>
          <div>
            <h3 className="relative inset-x-[29%] font-normal text-2xl mt-[14px] ">
              Join today. Cancel anytime.
            </h3>
            <h3 className="relative inset-x-[25%] font-normal text-2xl mt-[14px] ">
              Ready to watch? Sign In to Enjoy.
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between absolute  p-3  bg-gradient-to-b from-black ">
        <div>
          <img
            className=" w-48 "
            alt="netflix-logo"
            src={NETFLIX_LOGO_URl}
          ></img>
        </div>
        <div>
          <button className="end-[70px] top-[35px]  w-[100px] p-1 absolute text-white opacity-100  bg-red-700 font-semibold text-lg cursor-pointer">
            <Link to={"/Login"}>Sign In</Link>
          </button>
        </div>
      </div>
      <div className=" bg-gradient-to-r from-black to-black">
        <img
          className="bg-cover bg-gradient-to-b from-black to-black"
          src={NETFLIX_BG_IMAGE}
          alt="Bg-pic-netflix"
        ></img>
      </div>
    </div>
  );
};

export default HomePage;
