import React from "react";
import { Link } from "react-router-dom";
import Fac from "../../public/facult.jpg";
import { useLayoutEffect, useRef } from "react";
import mrk from "../../public/mrk.jpg";
import nkr from "../../public/nkr.jpg";
import nrb from "../../public/nrb.jpg";
import ssb from "../../public/ssb.jpg";
import vks from "../../public/vks.jpg";
import apn from "../../public/apn.jpg";
import iali from "../../public/iali.jpg";
import pch from "../../public/pch.jpg";
import spg from "../../public/spg.jpg";

function HomeAbout() {
  const aboutRef = useRef();
  const aboutCardRef = [useRef(0), useRef(1), useRef(2), useRef(3), useRef(4)];
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScrollAbout);

    return () => {
      window.removeEventListener("scroll", onScrollAbout);
    };
  }, []);

  const onScrollAbout = () => {
    const topPos = aboutRef.current.getBoundingClientRect().top;
    const scrollPos = window.innerHeight;

    if (topPos < scrollPos - 100 && topPos > 0) {
      aboutRef.current.style.opacity = 1;
      aboutRef.current.classList.add("fade-animation");
    }
    for (var i = 0; i < 5; i++) {
      const topPoscard = aboutCardRef[i].current.getBoundingClientRect().top;
      const scrollPoscard = window.innerHeight;
      if (topPoscard < scrollPoscard - 100 && topPoscard > 0) {
        aboutCardRef[i].current.style.opacity = 1;

        aboutCardRef[i].current.classList.add("fade-animation");
      }
    }
  };

  return (
    <div
      className=" bg-black bg-[length:300%_100%] bg-[center_left_-22rem] sm:bg-cover  lg:bg-cover  md:bg-cover   px-8 py0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Fac})`,
        backgroundPosition: "top -100px",
      }}
    >
      <div className="w-full flex flex-col">
        <div
          ref={aboutRef}
          className="w-full items-center space-y-1 lg:px-6 xl:px-12 pb-8 md:py-8 flex flex-col mb-4"
          style={{ opacity: 0 }}
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Meet Our
          </h1>
          <h1 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Faculty
          </h1>
          <h1 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Advisory
          </h1>
          <h1 className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Committee
          </h1>
        </div>
        <div className="mb-4 ">
          <div className="w-full px-5 flex flex-col lg:flex-row lg:space-x-16 justify-center items-center">
            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px] h-[235px] col-span-2 space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={nkr} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://electronics.kiit.ac.in/profiles/nirmal-k-rout/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Dr. Nirmal K. Rout
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Director-Student Research Cell
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>

            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px] h-[235px] space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={ssb} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://kids.kiit.ac.in/profiles/shyam-sundar-behura/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Dr. Shyam Sundar Behura
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Dy. Director-KSAC
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>

            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px]  h-[235px] col-span-2 space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={vks} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://electronics.kiit.ac.in/profiles/vimal-k-shrivastava/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Dr. Vimal K. Shrivastava
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Faculty Co-Ordinator
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>

            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px] h-[235px]  col-span-2 space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={pch} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://mechanical.kiit.ac.in/profiles/p-chandrasekhar/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Dr. P. Chandrasekhar
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Faculty Co-Ordinator
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>
          </div>

          <div className="w-full px-5 flex flex-col lg:flex-row lg:space-x-16 justify-center  items-center">
            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px] h-[235px] space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={mrk} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://electronics.kiit.ac.in/profiles/dr-mano-ranjan-kumar/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Dr. Mano Ranjan Kumar
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Faculty Co-Ordinator
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>

            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px] h-[235px] space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={spg} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://electronics.kiit.ac.in/profiles/shivam-prakash-gautam/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Dr. Shivam P Gautam
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Faculty Co-Ordinator
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>

            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px] h-[235px] space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={iali} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://electronics.kiit.ac.in/profiles/israj-ali/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Israj Ali
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Faculty Co-Ordinator
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>

            <div
              ref={aboutCardRef[0]}
              className="bg-black w-[220px] h-[235px] space-y-1 pb-1 mb-8 flex justify-center rounded-3xl"
              style={{ position: "relative", alignItems: "center" }}
            >
              <div
                className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                style={{ position: "absolute", top: "0" }}
              ></div>
              <div
                className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-black items-center flex flex-col"
                style={{ zIndex: "9" }}
              >
                <div className="">
                  <img className="w-24 h-24 rounded-3xl" src={apn} alt="" />
                </div>
                <div className="flex flex-col justify-between space-y-3 h-full items-center mx-5">
                  <div className=" flex flex-col items-center">
                    <a
                      href="https://mechanical.kiit.ac.in/profiles/anish-pandey/"
                      target="_blank"
                    >
                      <h1 className="text-yellow-500 font-bold text-base sm:text-lg text-center my-1">
                        Dr. Anish Pandey
                      </h1>
                    </a>
                    <h2 className="text-white font-semibold text-base sm:text-base text-center">
                      Faculty Co-Ordinator
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                style={{ position: "absolute", bottom: "0" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
