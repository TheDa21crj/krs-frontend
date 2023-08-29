import React from "react";
import PP from "../../public/drone.jpg";
import FlipCard from "./FlipCard";
import dbg from "../../public/dronebackground.jpg";

const featuredData = [
  {
    heading: "Drone 1.0",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
  },
  {
    heading: "Drone 2.0",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit qui, aliquid illo quibusdam eveniet sit rerum placeat praesentium explicabo. Repudiandae, praesentium assumenda ratione tempora explicabo cum voluptatum eligendi deserunt est quam. Minus id magni voluptatum. Beatae neque perferendis quo modi, quae nobis ullam eveniet eius praesentium incidunt eaque quibusdam commodi?",
    img: PP,
  },
];

function FeaturedMain() {
  return (
    <div
      className="bg-cover bg-fixed bg-black pb-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${dbg})`,
      }}
    >
      <div className="">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-4 pb-6 px-5 text-yellow-500">
          Featured Works
        </h1>
        {/* {featuredData.map((featuredData) => {
          return ( */}
        <div class=" px-[7%]">
          <div class="flex ">
            <FlipCard
              title="Med Box"
              img="https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-09_at_7.11.05_PM_QbeLL3OSB.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660052494651"
              desc="Are you among those who constantly forget to take their medicines on time or misplace your medicines? If so, this product definitely is a life saver for you. A Med Box that reminds you to take your medicines timely, keeps your medicines safe and also has the ability to measure your heart rate and blood oxygen level and displays it on the screen attached to the med box itself."
              width="50%"
            />
            <FlipCard
              title="Smart Watch"
              img="https://ik.imagekit.io/krs/achivements/smartwatch3_azfxYDV8Q.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660051732641"
              desc="A smart watch made by our members that has all the features possible and above. From using calculator on the watch itself, sending quick replies, monitoring health and playing games, this watch can easily become your best companion."
              width="50%"
            />
          </div>
          <div className="flex justify-center items-center">
            <FlipCard
              title="Robocon"
              img="https://ik.imagekit.io/krs/achivements/rob_JWC-MsH0t?ik-sdk-version=javascript-1.4.3&updatedAt=1660052158760"
              desc="A competition where we needed to build team of two robots to defeat two enemy bots in a match of lagori. Both the bots built had different capabilities and features. Firs bot, R1 was built with the purpose to shoot the lagori pile or to shoot the ball off the head of the enemy bot. The other bot, R2 was built to provide support such as refueling the R1 with balls and reconstruct the lagori pile before the enemy team shoots the ball on the head of R2."
              width="100%"
            />
          </div>
        </div>
        <div class=" px-[7%]">
          <div class="flex ">
            <FlipCard
              title="Smart Glass"
              img="https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-09_at_7.09.16_PM_YvygKZCNi.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660052423271"
              desc="A smart glass that can make you feel no less than a superhero. A glass that has exquisite features like finding weapons, counting people, identifying them as well as magnify texts that can barely be read by human eyes."
              width="50%"
            />
            <FlipCard
              title="Smart Mask"
              img="https://ik.imagekit.io/krs/achivements/mask_4GCQR0Btw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660124318102"
              desc="You might have contracted a virus or might be suffering from a chronic condition . Think of wearing a mask in such a situation. Can it monitor your health on a daily basis as well as clean itself. Well, it might !"
              width="50%"
            />
          </div>
          <div className="flex justify-center items-center">
            <FlipCard
              title="Cubesat"
              img="https://ik.imagekit.io/krs/achivements/WhatsApp_Image_2022-08-09_at_7.18.03_PM_0BAErTmrt.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1660053367091"
              desc="Our Mission is to make a satellite made only by students, which can meet the mechanical and electrical requirements to be working in the hostile environment of space, and eventually launch the satellite into the lower earth orbit with the help of Indian Space Research Organisation which can be further used for a particularly targetted purposes."
              width="100%"
            />
          </div>
        </div>
        {/* <div className="flex justify-center items-center">
            <FlipCard
              title=""
              img=""
              desc=""
              width="100%"
            />
          </div> */}
        {/* </div> */}
        {/* );
        })} */}
      </div>
    </div>
  );
}

export default FeaturedMain;
