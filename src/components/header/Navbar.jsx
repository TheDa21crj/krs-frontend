import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import krslogo from "./../../KRS.png";
import ksaclogo1 from "./ks2.png";
import { useContext } from "react";
import GoToTop from "./GoToTop";
import AuthContext from "../../store/auth-context";
import kiit from "./kt1.png";
import kiit25 from "../../public/KIITLOGOSVG.svg";
import kiit25w from "../../public/KIIT25w.svg";
import hat1 from "../../public/profile-hat.png";
import hat from "../../public/hat.png";

function Navbar() {
  var krsClasses = location.pathname == "/krsclasses" ? true : false;

  const [visible, setVisible] = useState("-translate-x-[100%]");
  const [visiblebtn1, setVisiblebtn1] = useState(true);
  // const [visiblebtn2, setVisiblebtn2] = useState("hidden");
  const authCtx = useContext(AuthContext);

  function menuClick() {
    if (visible) {
      setVisible("");
    } else if (visible === "") {
      setVisible("-translate-x-[100%]");
    }

    if (visiblebtn1 === true) {
      setVisiblebtn1(false);
    } else if (visiblebtn1 === false) {
      setVisiblebtn1(true);
    }

    // if (visiblebtn2 === "block") {
    //   setVisiblebtn2("hidden");
    // } else if ("hidden") {
    //   setVisiblebtn2("block");
    // }
  }

  var name;
  if (authCtx.user.name) {
    name = authCtx.user.name.split(" ")[0];
  }

  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    color: "rgb(234 179 8)",
  };

  return (
    <>
      <nav
        className={
          !krsClasses
            ? "bg-[#111111] w-full sticky top-0 z-50"
            : "bg-[#111111] bg-opacity-70 backdrop-blur-lg w-full sticky top-0 z-50 font-cormorant"
        }
      >
        <div className="mx-auto pr-6 pl-[2px] z-10">
          <div className="flex justify-between">
            <div className="flex w-full space-x-4 justify-between">
              {/* logo */}
              <div className="flex">
                <Link to="/" className="flex items-center py-5 px-1">
                  <img
                    className="w-8 rounded-full ml-4 cursor-pointer"
                    src={krslogo}
                    alt="KRS"
                  />
                </Link>
                <a
                  target="_blank"
                  href="https://kiit.ac.in/"
                  className="flex items-center py-5 px-1"
                >
                  <img
                    className="w-28 ml-4 cursor-pointer"
                    src={kiit25}
                    alt="KIIT"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://ksac.kiit.ac.in/"
                  className="flex items-center py-5 px-1"
                >
                  <img
                    className="w-8  ml-4 cursor-pointer"
                    src={ksaclogo1}
                    alt="KSAC"
                  />
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden xl:flex pr-[6%] items-centerz space-x-2 text-lg">
                <NavLink
                  to="/"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
                {/* <NavLink
                  to="/krsclasses"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  KRS Classes
                </NavLink> */}
                <NavLink
                  to="/featured"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Featured
                </NavLink>

                <NavLink
                  to="/events"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Events
                </NavLink>
                <NavLink
                  to="/achievements"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Achievements
                </NavLink>
                <NavLink
                  to="/members"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Members
                </NavLink>
                <NavLink
                  to="/recruitments"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Recruitments
                </NavLink>

                <a
                  href="#footer"
                  className="py-5 px-2 text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
                  // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Contact Us
                </a>
              </div>

              {/* secondary nav */}
              {authCtx.isLoggedIn && (
                <div className="hidden xl:flex rounded-[100px] items-center">
                  <Link to="/admin">
                    <div className="text-black relative">
                      <img
                        className={
                          !krsClasses
                            ? "hidden"
                            : "absolute -top-4 left-1.5 w-5"
                        }
                        src={hat}
                        alt=""
                      />
                      <button className="flex items-center  space-x-2 bg-yellow-500 rounded-full pr-2">
                        <img
                          className="w-[32px] h-[32px] rounded-full border-2"
                          src={authCtx.user.pic}
                          alt=""
                        />
                        <h1 className="text-ellipsis  font-semibold overflow-hidden">
                          {name}
                        </h1>
                      </button>
                    </div>
                  </Link>
                </div>
              )}
              {!authCtx.isLoggedIn && (
                <div className="hidden xl:flex my-5 rounded-full font-medium  bg-yellow-500 items-center text-lg">
                  <Link
                    to="/signin"
                    className="py-1 px-3 hover:text-black rounded transition duration-300"
                  >
                    Log in
                  </Link>
                </div>
              )}
            </div>

            {/* mobile button goes here */}
            <div className="xl:hidden flex items-center select-none">
              <button
                className="mobile-menu-button text-yellow-500 select-none"
                onClick={menuClick}
              >
                {visiblebtn1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class={`h-8 w-8 fade-anim select-none`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
                {!visiblebtn1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class={`h-8 w-8 rotate-45 fade-anim select-none`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`mobile-menu  flex flex-col ${visible}  duration-1000 text-white font-semibold w-full h-[100vh] absolute lg:hidden`}
        >
          <div
            className={
              !krsClasses
                ? "bg-[#111111] text-center w-full pl-2 sm:pl-8 h-[100vh]"
                : "bg-[#111111] bg-opacity-95 backdrop-blur-lg text-center w-full pl-2 sm:pl-8 h-[100vh] font-cormorant"
            }
          >
            {authCtx.isLoggedIn && (
              <div className="flex my-1 px-4 rounded-[100px] font-semibold justify-center items-center">
                <Link to="/admin">
                  <div className="text-black mt-3 pb-4 relative">
                    <img
                      className={
                        !krsClasses
                          ? "hidden"
                          : "absolute -top-3.5 left-1.5 w-5"
                      }
                      src={hat}
                      alt=""
                    />
                    <button className="flex items-center w-32 sm:w-36 space-x-4 rounded-full">
                      <img
                        className="w-[32px] h-[32px] rounded-full border-2"
                        src={authCtx.user.pic}
                        alt=""
                      />
                      <div className="text-ellipsis overflow-hidden text-left">
                        <h1 className="text-sm text-yellow-500 font-semibold text-ellipsis overflow-hidden">
                          {name}
                        </h1>
                        <h1 className="text-xs text-blue-400">Dashboard</h1>
                      </div>
                    </button>
                  </div>
                </Link>
              </div>
            )}

            {!authCtx.isLoggedIn && (
              <div className=" lg:flex my-4 py-1 rounded-full font-medium w-full items-center justify-center text-lg">
                <NavLink
                  to="/signin "
                  className="py-1 w-fit px-3 hover:text-black font-medium text-sm bg-yellow-500 rounded-full transition duration-300"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Log in
                </NavLink>
              </div>
            )}
            <center>
              <hr className="h-0.5 items-center w-[80%] border-0 border-yellow-500 bg-yellow-500" />
            </center>

            <NavLink
              to="/"
              className="block py-2 px-4 my-1 text-sm hover:text-yellow-500 hover:underline hover:underline-offset-2"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button onClick={menuClick}>Home</button>
            </NavLink>
            {/* <NavLink
              to="/krsclasses"
              className="block py-2 px-4 my-1 text-sm hover:text-yellow-500 hover:underline hover:underline-offset-2"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button onClick={menuClick}>KRS Classes</button>
            </NavLink> */}
            <NavLink
              to="/Featured"
              className="block py-2 px-4 my-1 text-sm hover:text-yellow-500 hover:underline hover:underline-offset-2"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button onClick={menuClick}>Featured</button>
            </NavLink>
            <NavLink
              to="/recruitments"
              className="block py-2 px-4 my-1 text-sm hover:text-yellow-500 hover:underline hover:underline-offset-2"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button onClick={menuClick}>Recruitments</button>
            </NavLink>

            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/Events"
              className="block py-2 px-4 my-1 text-sm hover:text-yellow-500 hover:underline hover:underline-offset-2"
            >
              <button onClick={menuClick}>Events</button>
            </NavLink>

            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/Achievements"
              className="block py-2 px-4 my-1 text-sm hover:text-yellow-500 hover:underline hover:underline-offset-2"
            >
              <button onClick={menuClick}>Achievements</button>
            </NavLink>

            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/Members"
              className="block py-2 px-4 my-1 text-sm hover:text-yellow-500 hover:underline hover:underline-offset-2"
            >
              <button onClick={menuClick}>Members</button>
            </NavLink>
            <a
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
              href="#footer"
              className="py-2 px-4 text-sm text-white hover:text-yellow-500 hover:underline hover:underline-offset-2"
            >
              <button onClick={menuClick}>Contact Us</button>
            </a>
          </div>
        </div>
        <GoToTop />
      </nav>
    </>
  );
}

export default Navbar;
