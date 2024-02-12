import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../Utils/Constants";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isClicked, setIsClicked] = useState(false);
  const photoClickHandler = () => {
    setIsClicked(!isClicked);
  };
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="">
      <div className="absolute bg-gradient-to-b from-black w-screen z-20  p-3 flex flex-col md:flex-row justify-between">
        <img
          className=" w-44 mx-auto md:mx-0"
          alt="netflix-logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
        {user && (
          <div className="ml-1 md:ml-0 flex p-2 relative right-20">
            {showGptSearch && (
              <select
                onClick={handleLanguageChange}
                className="-mr-8 md:mr-0 p-2 mt-4 h-12 bg-gray-800 text-white m-2 ml-[84px] md:ml-0"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="-mr-10 md:mr-0 ml-[85px] md:ml-10 py-2 px-4 mx-4 my-4 bg-purple-800 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "HomePage" : "GptSearch"}
            </button>
            <img
              onClick={photoClickHandler}
              className="w-12 h-12 md:w-14 md:h-14 mr-10 mt-3 md:mt-2 rounded-lg relative left-20 -right-6 cursor-pointer"
              alt="user-icon"
              src={USER_AVATAR}
            ></img>
            {isClicked && (
              <button
                onClick={handleSignOut}
                className="w-[100px]  h-[40px] relative top-[68px] left-[-34px] text-xl bg-black text-white mt-1  p-1  font-bold  cursor-pointer"
              >
                Sign Out
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
