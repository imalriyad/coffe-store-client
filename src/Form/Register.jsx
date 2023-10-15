import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import GoogleLogin from "../Form/GoogleLogin";
const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const sigupHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const cheakMark = e.target.check.checked;
    if (!cheakMark) {
      toast.error("Please accpet terms and conditions to procced!");
    }
    creatUser(email, password)
      .then(() => {
        toast.success("Your account has been created successfully");
        navigate("/");
        const user = { name , email, password };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });
      })
      .catch((err) => toast.error(err.message.slice(10)));
  };
  return (
    <div className="px-4">
      <h1 className="text-4xl font-bold mt-12 text-center">
        Register your account
      </h1>

      <div className="mx-auto max-w-sm flex-col flex mt-14 ">
        <form onSubmit={sigupHandler}>
          <div>
            <h1 className="text-lg text-[#403F3F] font-semibold"> Your Name</h1>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input mt-2 bg-[#F3F3F3] rounded-sm focus:outline-none w-full max-w-sm"
            />
          </div>
          <div className="mt-5">
            <h1 className="text-lg text-[#403F3F] font-semibold">
              {" "}
              Email address
            </h1>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="input mt-2 bg-[#F3F3F3] rounded-sm focus:outline-none w-full max-w-sm"
            />
          </div>

          <div className="mt-5">
            <h1 className="text-lg text-[#403F3F] font-semibold"> Password</h1>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input bg-[#F3F3F3] focus:outline-none rounded-sm w-full mt-2 max-w-sm "
            />
          </div>
          <div className="mt-5 flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              name="check"
            />
            <p className="text-sm">
              Accept <b>Term & Conditions</b>
            </p>
          </div>
          <button className="btn mt-5 btn-neutral rounded w-full text-white">
            Register
          </button>
        </form>
        <GoogleLogin></GoogleLogin>
        <span className="mt-4">
          Already have an account ?{" "}
          <Link to={"/Login"}>
            <span className="underline">Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
