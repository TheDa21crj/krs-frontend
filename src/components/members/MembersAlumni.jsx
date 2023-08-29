import React from "react";
import PP from "../../public/pp.jpeg";
import Insta from "./icons/Insta";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";

const CoordinatorsData = [
  {
    name: "Alumni Jaiswal",
    about:
      "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com",
  },
  {
    name: "Alumni Jaiswal",
    about:
      "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com",
  },
  {
    name: "Alumni Jaiswal",
    about:
      "um exexplicat quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
    email: "xyz@gmail.com",
  },
];

function MembersAlumni(props) {
  const visi = props.aluVisible.visibility;

  return (
    <div
      className={`w-full py-10 grid px-[5%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${visi} justify-items-center`}
    >
      {props.data.map((data) => {
     
        return (
          <div
            className="bg-[#111111] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[90%] xl:w-[80%]  mx-10 my-5 flex justify-center rounded-3xl"
            style={{ position: "relative", alignItems: "center" }}
          >
            <div
              className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
              style={{ position: "absolute", top: "0" }}
            ></div>
            <div
              className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-[#111111] items-center flex flex-col"
              style={{ zIndex: "9" }}
            >
              <div className="">
                <img
                  className="w-40 h-40 rounded-3xl"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between space-y-5 h-full items-center mx-5">
                <div className="space-y-1 flex flex-col items-center">
                  <h1 className="text-yellow-500 font-bold text-lg sm:text-xl text-center">
                    {data.name}
                  </h1>
                 {data.domain!="null" &&  <h2 className="text-white font-semibold text-base sm:text-lg text-center">
                    {data.domain}
                  </h2>}
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-white text-justify text-sm xl:text-base">
                    "{data.bio}"
                  </p>
                </div>
                {/* <div className="flex flex-col items-center">
                  <p className="text-yellow-500 text-justify text-sm xl:text-base">
                    {data.email}
                  </p>
                </div> */}
                <div className="flex space-x-3">
                 {data.insta!="null" && <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.insta}
                  >
                    <Insta />
                  </a>}
                  {data.github!="null" &&   <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.github}
                  >
                    <Github />
                  </a>}
                  {data.linkedin!="null" &&  <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.linkedin}
                  >
                    <Linkedin />
                  </a>}
                </div>
                
              </div>
            </div>
            <div
              className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
              style={{ position: "absolute", bottom: "0" }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default MembersAlumni;
