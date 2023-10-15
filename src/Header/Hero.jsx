import { LuCupSoda } from "react-icons/lu";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero md:h-[70vh] md:py-0 py-5"
      style={{
        backgroundImage: "url(https://i.postimg.cc/5tmj50mB/3.png)",
      }}
    >
      <div className="text-white">
        <div className="max-w-screen-xl md:flex md:flex-row-reverse items-center">
          <div>
            <img
              src="https://i.postimg.cc/c486tBkY/2.png"
              className="md:w-auto w-[70%] mx-auto"
              alt=""
            />
          </div>
          <div className="px-4">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 md:text-base text-sm">
              It is coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
          <Link to={'/AddCoffe'}>  <button className="btn bg-[#3B2B2B] normal-case rounded btn-md  hover:bg-[#3B2B2B] text-white">
              <LuCupSoda className="text-xl" /> Order Now
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
