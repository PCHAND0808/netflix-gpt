import { useRef, useState } from "react";
import Header from "./Header";
import { validateSignIn } from "../utils/validate";

const Login = () => {
  const [signUp, setsignUp] = useState(false);
  const [errmsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const passwd = useRef(null);

  const handleSignIn = () => {
    const msg = validateSignIn(email.current.value, passwd.current.value);
    setErrorMsg(msg);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          alt="Bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
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
          Sign In
        </button>

        <p className="text-sm my-2">
          {!signUp ? `New to Netflix?` : `Already a member?`}
          <a
            className="text-blue-500"
            href=""
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
