import React, { useState, useEffect, useRef } from "react";
import EventSlider from "../events/EventSlider";

const achievementsData = [
  {
    id: 1,
    img1: "https://ik.imagekit.io/krs/achivements/WISSRNARE_dVtS1jUQP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660033068947",
    img2: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-04_at_11.26.25_PM_eFVwnMHI-Z.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660028787221",
    img3: "https://ik.imagekit.io/krs/achivements/Screenshot_2022-08-09_193959_OF4sth-xZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660054216477",
    position: "1st Position",
    year: "2022",
    teamName: "Team KRS",
    description:
      "Owned by Hritabrata Mandal, member of KIIT Robotics Society in Analog Circuit Design- IIT Bhubaneswar 2022. The intention of the event was to  test the knowledge of students in the field of Analog electronics and spread awareness about the importance of analog electronics in modern electronic technology. ",
    eventName: "Wissenaire",
    eventPlace: "IIT BBSR",
  },

  {
    id: 2,
    img1: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-07-17_at_6.25.43_PM_HOIu6E-O9.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660047834938",
    img2: "https://ik.imagekit.io/krs/achivements/robo1_X0AnNRBiY.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660047578311",
    img3: "https://ik.imagekit.io/krs/achivements/Robo2_jsZxLZuuw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660047579494",
    position: "Final Stage",
    year: "2022",
    teamName: "Team Skypavar",
    description:
      "The SKYPAVAR group of KIIT Robotics Society, contain and embodied by Aditya Ranjan,Purendra Vishwakarma,Rohit Mundhra,Shivans Awasthi ,Yashaswi Ranjan,Varshika, Anshuman Sharma and Kaiwalya Deshpande levitated to final stage of ROBOCON hosted by IIT Delhi in 2022. The purpose of the event was to create friendship among young people with similar interests who will lead their countries in the 21st century, as well as help advance engineering and broadcasting technologies in the region. ",
    eventName: "Robocon",
    eventPlace: "IIT Delhi",
  },
  {
    id: 3,
    img1: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-06_at_2.16.39_AM__1__og69aqB5pz.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660028786703",
    img2: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-06_at_2.15.26_AM_uyoB65GI6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660028787142",
    img3: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-06_at_2.17.18_AM_3PmdKEOko.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660028787057",
    position: "3rd Position",
    year: "2022",
    teamName: "Team Robusta",
    description:
      "The Robusta group of KIIT Robotics Society, composed of  Rohit Mundhra,Yashaswi Ranjan,Purendra Vishwakarma and Varshika were designated 3rd position in Innovacion “X race”  anchored by IEM Kolkata in the year 2022. The intent of the event was to provide the students around the globe a platform to showcase their talent and technical skills and also witness lectures of great scholars from reputed educational firms and industries.",
    eventName: "X Race",
    eventPlace: "IEM Kolkata",
  },
  {
    id: 4,
    img1: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-09_at_6.50.55_PM_pHWMslvBr.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660051391061",
    img2: "https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-09_at_6.50.55_PM__1__6BleW_gx6.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660051391302",
    img3: "https://ik.imagekit.io/krs/achivements/Screenshot_2022-08-09_185253_8gnIoUHSi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660051391553",
    position: "Winners",
    year: "2021",
    teamName: "Team Ghostbusters",
    description:
      "The Ghostbusters group of KIIT Robotics Society, where Dipanjan Bakshi ,Prajesh Kr De and Mayukh Bhattacharya collaborated and were adjudged as winners in Replica organized by NIT Rourkela in the year 2021. The objective of the event was to foster 21st-century skills and competencies supported by defined learning frameworks for the students.",
    eventName: "Replica",
    eventPlace: "NIT Rourkela",
  },
  {
    id: 5,
    img1: "https://ik.imagekit.io/krs/achivements/image_yJv8MCLvvN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660028787497",
    img2: "https://ik.imagekit.io/krs/achivements/image__1__rfBSSpINXw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660028788127",
    img3: "https://ik.imagekit.io/krs/achivements/image_3IJ5LDS1cj.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660028787762",
    position: "1st Position",
    year: "2021",
    teamName: "Team Tech.zip",
    description:
      "The Tech.Zip team of KIIT Robotics Society represented by team members Aaryaman Bhardwaj ,Dipanjan Bakshi,Pallabika Bora  clinched the 1st position in an event arranged by IIT BHU in the year 2021. The dictum of the event was to encourage the students to present their knowledge, idea and problem solving skills regarding the world of robotics.",
    eventName: "Robovation",
    eventPlace: "IIT BHU",
  },
];

function AhievementsMain() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      // console.log("hbsdjs"+windowHeight);
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      var tt = windowHeight - elementVisible;
      if (elementTop - 50 < tt) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  const [upper, setUpper] = useState("z-10 h-4/5");
  function changeU() {
    if (upper === "z-10 h-4/5") {
      setUpper("z-0 blur-[2px] h-2/3");
    } else if (upper === "z-0 blur-[2px] h-2/3") {
      setUpper("z-10 h-4/5");
    }
  }
  const [lower, setLower] = useState("z-0 blur-[2px] h-2/3");
  function changeL() {
    if (lower === "z-0 blur-[2px] h-2/3") {
      setLower("z-10 h-4/5");
    } else if (lower === "z-10 h-4/5") {
      setLower("z-0 blur-[2px] h-2/3");
    }
  }

  useEffect(() => {
    startSlider();
  });

  const startSlider = () => {
    setInterval(() => {
      changeL();
      changeU();
    }, 3000);
  };

  return (
    <div
      className="bg-black bg-cover bg-bottom bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://ik.imagekit.io/krs/sh-unsplash_fo7jilwjotu-4096x2731_Yxyi90fgI.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659954459122)`,
      }}
    >
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-6 px-10 text-yellow-500">
        Achievements
      </h1>
      {achievementsData.map((achievementsData, i) => {
        if (i === 0) {
          return (
            <div
              id={achievementsData.id}
              className="flex flex-col-reverse lg:flex-row lg:px-24 xl:px-32 py-10 items-center lg:justify-between"
            >
              <div className="text-white w-2/3 py-10 px-5 flex flex-col items-center lg:items-start ">
                <div className="w-full">
                  <h1 className="text-2xl text-center lg:text-left sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-4 text-yellow-500">
                    {achievementsData.teamName}
                  </h1>
                  {/* <h1 className='text-2xl pb-2 '></h1> */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="grid grid-cols-2 sm:grid-cols-3 w-[95%] sm:w-[80%] md:w-[70%] xl:w-[50%] justify-items-center items-start py-1">
                      <div>
                        <h1 className="text-xl text-yellow-500">
                          {achievementsData.eventPlace}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-xl text-yellow-500">
                          {achievementsData.year}
                        </h1>
                      </div>
                      <div className="col-span-2 sm:col-span-1 justify-items-center justify-center">
                        <h1 className="text-xl text-yellow-500">
                          {achievementsData.eventName}
                        </h1>
                      </div>
                    </div>
                    <div className="flex w-[95%] sm:w-[80%] md:w-[70%] justify-center lg:justify-start py-8">
                      <h1 className="text-xl text-yellow-500 font-bold">
                        {achievementsData.position}
                      </h1>
                    </div>
                  </div>
                  {/* <h2 className="text-2xl md:text-2xl">Participated by: </h2> */}
                  <h2 className="text-xl">{achievementsData.description}</h2>
                </div>
              </div>
              <div className=" bg-white order-1 w-[350px] h-[350px]  sm:w-[400px] sm:h-[400px] py-2 event_slider_body ">
                <EventSlider
                  thumb={[
                    achievementsData.img1,
                    achievementsData.img2,
                    achievementsData.img3,
                  ]}
                  key={i}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div
              id={achievementsData.id}
              className="flex flex-col-reverse lg:flex-row lg:px-24 xl:px-32 py-10 items-center lg:justify-between"
            >
              <div className="text-white w-2/3 py-10 px-5 flex flex-col items-center lg:items-start reveal fade-left">
                <div className="w-full">
                  <h1 className="text-2xl text-center lg:text-left sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-4 text-yellow-500">
                    {achievementsData.teamName}
                  </h1>
                  {/* <h1 className='text-2xl pb-2 '></h1> */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="grid grid-cols-2 sm:grid-cols-3 w-[95%] sm:w-[80%] md:w-[70%] xl:w-[50%] justify-items-center items-start py-1">
                      <div>
                        <h1 className="text-xl text-yellow-500">
                          {achievementsData.eventPlace}
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-xl text-yellow-500">
                          {achievementsData.year}
                        </h1>
                      </div>
                      <div className="col-span-2 sm:col-span-1 justify-items-center justify-center">
                        <h1 className="text-xl text-yellow-500">
                          {achievementsData.eventName}
                        </h1>
                      </div>
                    </div>
                    <div className="flex w-[95%] sm:w-[80%] md:w-[70%] justify-center lg:justify-start py-8">
                      <h1 className="text-xl text-yellow-500 font-bold">
                        {achievementsData.position}
                      </h1>
                    </div>
                  </div>
                  {/* <h2 className="text-2xl md:text-2xl">Participated by: </h2> */}
                  <h2 className="text-xl">{achievementsData.description}</h2>
                </div>
              </div>
              <div className=" bg-white order-1 w-[350px] h-[350px]  sm:w-[400px] sm:h-[400px] py-2 event_slider_body ">
                <EventSlider
                  thumb={[
                    achievementsData.img1,
                    achievementsData.img2,
                    achievementsData.img3,
                  ]}
                  key={i}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default AhievementsMain;
