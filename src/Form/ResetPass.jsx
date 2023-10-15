import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const ResetPass = () => {
  const { resetPass } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passResetHandler = () => {
    const email = emailRef.current.value;
    resetPass(email)
      .then(() => {
        toast.success("Reset link sent! Cheak your email");
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-auto text-center max-w-sm my-[10%]">
      <input
        type="email"
        ref={emailRef}
        placeholder="Type your Registerd Email"
        className="input input-bordered input-md w-full max-w-sm"
      />
      <button
        onClick={passResetHandler}
        className="btn my-5 w-full
 btn-neutral"
      >
        Reset Password
      </button>
    </div>
  );
};

export default ResetPass;
