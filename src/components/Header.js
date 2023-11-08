import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { netflix_logo } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispathch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispathch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispathch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute text-center bg-gradient-to-b from-black w-full flex justify-between z-10">
      <img className="m-2 p-4 w-44" alt="logo" src={netflix_logo} />
      {user && (
        <div className="flex px-6">
          <img className=" my-8 w-10 h-10 " alt="logo" src={user.photoURL} />
          <div className="p-[3px] my-7 text-white text-sm">
            <p>{user?.displayName}</p>
            <button
              type="button"
              className="mx-2 text-white"
              onClick={handleSignOut}
            >
              (Sign Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
