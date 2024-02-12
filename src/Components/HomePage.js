import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      <div className="absolute w-full h-[700px] flex justify-center items-center bg-black opacity-75">
        <div className="  text-white">
          <h1 className="relative left-4 text-3xl md:text-5xl ml-8 md:ml-0 font-extrabold">
            The biggest Indian{" "}
            <span className="left-[-10px] md:ml-0 ">hits. Ready to watch</span>{" "}
            here from <span className="md:hidden">₹149.</span>
            <br></br>
            <span className="-left-[40%] relative md:left-[540px] md:mt-4  md:right-0 md:inset-x-[43%]">
              ₹149.
            </span>
          </h1>
          <div>
            <h3 className="text-xl  -ml-12 md:ml-[11%] relative inset-x-[29%] font-normal md:text-2xl mt-[14px] ">
              Join today. Cancel anytime.
            </h3>
            <h3 className="text-xl -ml-14 md:ml-[12%] relative inset-x-[25%] font-normal md:text-2xl mt-[14px] ">
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
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          ></img>
        </div>
        <div>
          {!user && (
            <button className=" end-[70px] top-[35px]  w-[100px] p-1 absolute text-white opacity-100  bg-red-700 font-semibold text-lg cursor-pointer">
              <Link to={"/Login"}>Sign In</Link>
            </button>
          )}
        </div>
      </div>
      <div className=" bg-gradient-to-r from-black to-black">
        <img
          className="h-screen object-cover md:w-screen md:bg-cover bg-gradient-to-b from-black to-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Bg-pic-netflix"
        ></img>
      </div>
    </div>
  );
};

export default HomePage;
