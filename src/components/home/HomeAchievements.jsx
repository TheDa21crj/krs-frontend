import React from "react";
import PP from "../../public/pp.jpeg";
import Ach from "../../public/ach.jpg";
import Pradar from "../../public/imagee.jpg";

const achData = [
  {
    id: 2,
    name: "Team Skypavar",
    event: "Robocon  IIT Delhi",
    position: "Final Stage",
    img: "https://ik.imagekit.io/krs/achivements/Robo2_jsZxLZuuw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660047579494",
  },
  {
    id: 3,
    name: "Team Robusta",
    event: "X Race  IEM Kolkata",
    position: "3rd Position",
    img: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-06_at_2.17.18_AM_3PmdKEOko.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660028787057",
  },
  {
    id: 5,
    name: "Team Tech.Zip",
    event: "Robovation  IIT BHU",
    position: "3rd Position",
    img: "https://ik.imagekit.io/krs/achivements/gb_6m088_-83?ik-sdk-version=javascript-1.4.3&updatedAt=1660055261428",
  },
];

function HomeAchievements() {
  return (
    <div
      className="bg-black bg-cover bg-bottom flex flex-col pb-10 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${Ach})`,
      }}
    >
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500">
        Achievements
        <button className="bg-yellow-500 w-fit self-center px-4 ml-5 text-black font-semibold text-2xl rounded-lg">
          <a href="/achievements">All</a>
        </button>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 justify-items-center sm:px-[5%] py-10">
        {achData.map((data) => {
          return (
            <div className="w-[70%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] h-96 relative rounded-xl bg-black shadow-2xl overflow-hidden">
              <img
                className="z-0 h-full opacity-60 w-full"
                src={data.img}
                alt=""
              />
              <div className="absolute bottom-0 py-4 space-y-1 px-5 w-full z-10">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl pb-1 font-bold">
                  {data.name}
                </h1>
                <h2 className="text-white font-semibold">{data.event}</h2>
                <h2 className="text-white pb-1 font-semibold">
                  {data.position}
                </h2>
                <button className="bg-yellow-500 text-black w-fit self-center px-2 py-1 font-semibold text-lg  rounded-md">
                  <a href={`/achievements#${data.id}`}>Read More</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeAchievements;
