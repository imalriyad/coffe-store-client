import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const { Signin } = useContext(AuthContext);
  const navigate = useNavigate();
  const signInHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Signin(email, password)
      .then((res) => {
        const lastSignInTime = res.user.metadata.lastSignInTime;
        const user = { email, lastSignInTime };
        fetch(`http://localhost:5000/user`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
        toast.success("logged in successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message.slice(10)));
  };

  return (
    <div className="px-4">
      <h1 className="text-4xl font-bold mt-12 text-center">
        Login your Account
      </h1>

      <div className="mx-auto max-w-sm flex-col flex mt-14 ">
        <form onSubmit={signInHandler}>
          <div>
            <h1 className="text-lg text-[#403F3F] font-semibold">
              {" "}
              Email address
            </h1>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input mt-2 bg-[#F3F3F3] rounded-sm focus:outline-none w-full max-w-sm"
            />
          </div>

          <div className="mt-5">
            <h1 className="text-lg text-[#403F3F] font-semibold"> Password</h1>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] focus:outline-none rounded-sm w-full mt-2 max-w-sm "
            />
          </div>
          <label className="label mt-1">
            <Link to={"/login/resetpassword"}>
              {" "}
              <p className="label-text-alt link link-hover">Forgot password?</p>
            </Link>
          </label>
          <button className="btn mt-4 btn-neutral rounded w-full text-white">
            Login
          </button>
        </form>
        <GoogleLogin></GoogleLogin>
        <span className="mt-4">
          Dont’t Have An Account ?{" "}
          <Link to={"/Register"}>
            <span className="underline">Register</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
