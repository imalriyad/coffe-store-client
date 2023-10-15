import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = ["Home", "Menu", "Reservation", "About", "Contact"];
  const navlink = navLinks.map((link) => {
    return (
      <NavLink
        className={"cursor-pointer ml-6"}
        to={`${link === "Home" ? "/" : link}`}
        key={link}
      >
        {" "}
        <li className="text-white text-base ">{link}</li>
      </NavLink>
    );
  });
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
          <a className="btn md:btn-md md:px-7 rounded bg-[#4f3d3dad] text-white hover:bg-gray-200 hover:text-[#3B2B2B] btn-sm normal-case">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
