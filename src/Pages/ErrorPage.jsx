import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-md text-center my-[10%]">
        <Link to={"/"}>
          <button className="btn bg-[#D2B48C] hover:bg-[#D2B48C]">
            <AiOutlineArrowLeft className="text-xl" />
            Go Back
          </button>
        </Link>
        <img src="https://i.postimg.cc/NMxvszPm/404.gif" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
