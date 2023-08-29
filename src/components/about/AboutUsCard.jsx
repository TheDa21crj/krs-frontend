import letter from "../../public/card1.jpg";
import bulb from "../../public/card2.jpg";
import tar from "../../public/card3.jpg";
import nhand from "../../public/newhand.jpg";
import { useLayoutEffect, useRef } from "react";
import AboutUsCardMain from "./AboutUsCardMain";
const AboutUsData = [
  {
    description:
      "We here at KIIT Robotics Society are made of ideas and initiatives that make a difference. We always face challenges with an unwavering attitude.",
    img: bulb,
    title: "PROGRESSION IS PASSION",
  },
  {
    description:
      "Our team has members who are zealous enough to succeed. Whenever we fail, we recollect and regroup ourselves the very next moment to attempt again. That has been our motto to success.",
    img: nhand,
    title: "ENDEAVOUR FOR EFFICACY",
  },
  {
    description:
      "Our team of young innovators and developers constantly develop innovative projects that are bound to get you awestruck. Thus, we have some of best project setups across domains. Check them out; we assure, you won't regret.",
    img: tar,
    title: "UNMATCHED PROJECTS",
  },

  {
    description:
      "We here at KIIT Robotics Society are continuously nurturing impressive ideas hosting various events on diverse technical topics ranging from Machine Learning, Web Development, IOT, Robotics, Embedded Systems and processes and a lot more. We partner with various reputed organization to bring you the best expertise in the market",
    img: letter,
    title: "IDEAS THAT ENLIGHTEN",
  },
];

function f1() {
  const aboutRef = useRef();
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
  };

  return (
    <div className="w-full flex flex-col lg:flex-row   pb-6">
      <div
        ref={aboutRef}
        className="w-full lg:w-1/3 mr-0 items-center lg:items-start space-y-1 md:space-y-9 px-12 md:py-12 flex flex-col"
        style={{ opacity: 0 }}
      >
        <h1 className="text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          ABOUT
        </h1>
        <h1 className="text-yellow-500 text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
          US
        </h1>
      </div>

      <div className="w-full lg:w-1/1 py-10 grid md:grid-cols-2 mx-0 grid-cols-1 xl:mr-10 justify-items-center">
        {AboutUsData.map((data, i) => {
          return <AboutUsCardMain key={i} data={data} index={i} />;
        })}
      </div>
    </div>
  );
}

export default f1;
