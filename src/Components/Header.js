import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { USER_AVATAR } from "../Utils/Constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  return (
    <div className="absolute w-screen z-20  p-3  bg-gradient-to-b from-black flex justify-between">
      <img
        className=" w-44 "
        alt="netflix-logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {user && (
        <div className="flex p-2 relative right-20">
          <img
            onClick={photoClickHandler}
            className="w-14 h-14 rounded-sm relative left-20 -right-6 cursor-pointer"
            alt="user-icon"
            src={USER_AVATAR}
          ></img>
          {isClicked && (
            <button
              onClick={handleSignOut}
              className="w-[100px] h-[40px] relative top-[68px] left-[8px] text-xl bg-black text-white mt-1  p-1  font-bold  cursor-pointer"
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
