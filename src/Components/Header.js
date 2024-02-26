import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import {
  NETFLIX_LOGO_URl,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../Utils/Constants";
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
          src={NETFLIX_LOGO_URl}
        ></img>
        {user && (
          <div className="ml-1 md:ml-0 flex p-2 relative right-20">
            {showGptSearch && (
              <select
                onClick={handleLanguageChange}
                className=" md:mr-10 ml-[75px] md:ml-10 py-2  md:px-4 md:py-4  md:my-4 md:mb-0 bg-gray-800 text-white rounded-lg"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="w-28 h-12 md:w-auto md:h-auto md:mr-0 ml-[55px] md:mt-4 md:ml-10 md:px-4 md:py-4 mx-4  md:my-4 md:mb-0 bg-purple-800 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "HomePage" : "GptSearch"}
            </button>
            <img
              onClick={photoClickHandler}
              className="w-[54px] h-[54px] md:w-14  md:h-14 mr-5 -mt-[10px] md:mt-2 rounded-lg relative left-[160px] md:left-20 -right-6 top-2 cursor-pointer"
              alt="user-icon"
              src={USER_AVATAR}
            ></img>
            {isClicked && (
              <button
                onClick={handleSignOut}
                className="w-[130px] md:w-[140px]  h-[40px] relative left-[52px] top-[53px] md:top-[78px] md:left-[-36px] text-xl rounded-lg bg-black text-white mt-1  p-1  font-bold  cursor-pointer "
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
