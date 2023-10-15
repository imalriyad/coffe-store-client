import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignin } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleLoginHandler = () => {
    const googleAuthProvier = new GoogleAuthProvider();
    googleSignin(googleAuthProvier)
      .then(() => {
        toast.success("logged in successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message.slice(10)));
  };
  return (
    <div>
      <button onClick={googleLoginHandler} className="btn mt-5 flex w-full">
      <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-10" alt="" />  Continue With google
      </button>
    </div>
  );
};

export default GoogleLogin;
