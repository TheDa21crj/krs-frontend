import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./home.css";
import robocon from "../../public/robocon.jpg";
import ff from "../../public/face_fence.jpg";
import Pradarshana from "../../public/prdar.jpeg";
import liftoff from "../../public/liftoff.jpg";
import flashmob from "../../public/drones.jpg";
import { Link } from "react-router-dom";
const homePageData = [
  {
    img: "https://ik.imagekit.io/krs/achivements/1662315730878-01_yB0tSaS3l.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1665286994296",
    heading1: "KIIT ROBOTICS SOCIETY",
    heading2: "Ideas that enlighten",
    description:
      "Robotics is an inter disciplinary field , so also ,we at kiit robotics society believe in innovation through teamwork.The aim is to build a community and technical hub where teaching , training and research bind tech enthusiasts, to create a better tomorrow.",
  },
  {
    img: liftoff,
    heading1: "LIFT OFF !",
    heading2: "The highly anticipated and technically prodigious event.",
    description:
      "LIFT OFF is KIIT Robotics Society’s first offline workshop post the pandemic in collaboration with Space Chase. It will be a drone based workshop where the participants will be provided complete hands-on experience on drone construction and flying. It will be an event full of crucial insights, fun and exhilarating experiences.",
  },

  {
    img: Pradarshana,
    heading1: "Pradarshana 1.0",
    heading2: "Greatest technical exhibition!",
    description:
      "KRS brings to you one of the most awaited and greatest technical exhibitions.Pradarshana 1.0 is our motive to display the amazing talent showcased by our participants in the projects they made",
  },
  {
    img: robocon,
    heading1: "Robocon 2022",
    heading2: "Went For Nationals!! ",
    description:
      "KRS Participated in The prestigious international competion Robocon 2022.Our Team SKYPAVAR played in the Nationals and competed among 43 colleges all over India and represented KIIT for the first time in the national arena of ROBOCON ",
  },
  {
    img: ff,
    heading1: "Face Fence",
    heading2: "Know your breath!",
    description:
      " A smart mask that moniters your health.Equiped with exhale breath analysis and exquisite app interface for the users ",
  },
];

let count = 0;
function HomeMain() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const handleOnNextClick = () => {
    count = (count + 1) % homePageData.length;
  
    setCurrentIndex(count);

    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const productsLength = homePageData.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  useLayoutEffect(() => {
    const slideInterval = setInterval(() => {
    

      handleOnNextClick();
      setTimeout(() => {
        slideRef.current.classList.remove("fade-anim");
      }, 2000);
    }, 7000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="m-auto">
      <div ref={slideRef} className="w-full relative select-none ">
        <div
          className="h-[100vh]  bg-[length:300%_100%] bg-[center_left_-22rem] sm:bg-cover sm:bg-left lg:bg-cover lg:bg-left md:bg-cover md:bg-left  "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${homePageData[currentIndex].img})`,
          }}
        >
          <div className="lg:pl-20 px-12 pt-28 ">
            <h1 className="text-5xl md:text-6xl lg:text-7xl   font-bold text-yellow-500">
              {homePageData[currentIndex].heading1}
            </h1>
            <br />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-left pl-5 font-semibold text-white">
              {homePageData[currentIndex].heading2}
            </h2>
            <br />
            <p className="w-full text-justify pr-2 lg:w-1/3 pl-7 text-lg sm:text-xl text-white">
              {homePageData[currentIndex].description} {homePageData[currentIndex].heading1=="LIFT OFF !" && <Link to="/events"><span className="text-yellow-500">..Know More</span></Link>} 
            </p>            
          </div>
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={handleOnPrevClick}>
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              className="lg:h-10 lg:w-10  h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </button>
          <button onClick={handleOnNextClick}>
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              class="lg:h-10 lg:w-10  h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
