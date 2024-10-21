import { useRef, useState } from "react";
import Header from "./Header";
import { validateSignIn } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO, Photo_url } from "../utils/constants";

const Login = () => {
  const [signUp, setsignUp] = useState(false);
  const [errmsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const passwd = useRef(null);
  const name = useRef(null);
  const dispathch = useDispatch();

  const handleSignIn = () => {
    const msg = validateSignIn(email.current.value, passwd.current.value);
    setErrorMsg(msg);
    if (msg) return;

    if (signUp) {
      //Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        passwd.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Photo_url,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log(auth);
              dispathch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "" + errorMessage);
        });
    } else {
      //Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        passwd.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img alt="bg" src={LOGO} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 absolute text-white bg-black my-36 m-auto right-0 left-0 bg-opacity-80"
      >
        <h3 className="font-bold text-2xl py-4">
          {signUp ? `Sign Up` : `Sign In`}
        </h3>
        {signUp && (
          <input
            ref={name}
            type="text"
            className="my-3 p-3 bg-gray-800 w-full"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="my-3 p-3 bg-gray-800 w-full"
          placeholder="Email"
        />
        <input
          ref={passwd}
          type="password"
          className="my-3 p-3 bg-gray-800 w-full"
          placeholder="Password"
        />
        <p className="text-red-600 font-bold text-sm">{errmsg}</p>
        <button
          className="bg-red-700 rounded-2xl my-4 p-2 w-full"
          onClick={handleSignIn}
        >
          {!signUp ? `Sign In` : `Sign Up`}
        </button>

        <p className="text-sm my-2">
          {!signUp ? `New to Netflix?` : `Already a member?`}
          <a
            className="text-blue-500"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setsignUp(!signUp);
            }}
          >
            {" "}
            {!signUp ? `Sign up Now!` : `Sign In`}
          </a>
        </p>
      </form>
    </>
  );
};

export default Login;
