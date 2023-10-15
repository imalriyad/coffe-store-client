import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import auth from "../firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
  const navLinks = ["Home", "Menu", "About", "Contact"];
  const navlink = navLinks.map((link) => {
    return (
      <NavLink
        className={"cursor-pointer mr-7"}
        to={`${link === "Home" ? "/" : link}`}
        key={link}
      >
        {" "}
        <li className="text-white text-base">{link}</li>
      </NavLink>
    );
  });

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const signoutHandle = () => {
    logOut(auth)
      .then(() => {
        toast.success("Logut Successfully");
        navigate("/Login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-[white] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-[#3B2B2B] dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/HLXK79Sv/logo1.png"
            className="w-[30px] md:w-[50px]"
            alt=""
          />{" "}
          <a className="btn btn-ghost navbar-center normal-case md:text-xl text-xs ml-2 text-white px-0">
            Espresso Emporium
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>

        <div className="navbar-end">
          {!user ? (
            <Link to={"/Login"}>
              <p className="btn md:btn-md md:px-7 rounded bg-[#4f3d3dad] text-white hover:bg-gray-200 hover:text-[#3B2B2B] btn-sm normal-case">
                Login
              </p>
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-white">
                  <img src={user.photoURL ? user.photoURL : 'https://i.ibb.co/3CNtLPY/blankdp.png'} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </p>
                </li>
                <li>
                <h1> {user?.email}</h1>
                </li>
                <li onClick={signoutHandle}>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
            // <p
            //
            //   className="btn md:btn-md md:px-7 rounded bg-[#4f3d3dad] text-white hover:bg-gray-200 hover:text-[#3B2B2B] btn-sm normal-case"
            // >
            //   Logout
            // </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
