import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute text-center bg-gradient-to-b from-black w-full flex justify-between z-10">
      <img
        className="m-4 p-4 w-48"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="flex px-6">
          <img className=" my-8 w-12 h-12 " alt="logo" src={user.photoURL} />
          <button
            type="button"
            className="p-2 m-2 text-white"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
