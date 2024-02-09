import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { NETFLIX_LOGO_URl } from "../Utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const photoClickHandler = () => {
    setIsClicked(!isClicked);
    console.log("clicked");
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

  return (
    <div className="absolute w-screen  p-3  bg-gradient-to-b from-black flex justify-between">
      <img className=" w-44 " alt="netflix-logo" src={NETFLIX_LOGO_URl}></img>
      {user && (
        <div className="flex p-2 relative right-20">
          <img
            onClick={photoClickHandler}
            className="w-12 h-12 rounded-[10%] relative left-14"
            alt="user-icon"
            src={user.photoURL}
          ></img>
          {isClicked && (
            <button
              onClick={handleSignOut}
              className="w-[80px] h-[40px] relative top-[68px] left-[-5px] mt-1  p-1 rounded-md bg-slate-700 font-bold text-white cursor-pointer"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
