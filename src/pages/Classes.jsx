import React from "react";
import ClassesAdvanced from "../components/classes/ClassesAdvanced";
import ClassesMain from "../components/classes/ClassesMain";
import FooterClass from "../components/footerclass/FooterClasss";
import Navbar from "../components/header/Navbar";
import bg1 from "../public/bg-1.jpg";
import bg2 from "../public/bg-2.jpg";
import cloud from "../public/clouds.png";

function Classes() {
  return (
    <div>
      <div
        className="bg-black bg-cover lg:bg-[length:300%_100%]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bg1})`,
          backgroundPosition: "top -100px",
        }}
      >
        <Navbar />
        <ClassesMain />
        <div
          className="bg-black bg-right sm:bg-cover relative font-cormorant"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${bg2})`,
            backgroundPosition: "top -100px",
          }}
        >
          {/* <div className="flex w-full z-0 absolute -top-16 sm:-top-24 md:-top-28 lg:-top-40 justify-between">
            <img className="lg:w-full" src={cloud} alt="" />
          </div> */}
          <ClassesAdvanced />
          <FooterClass />
        </div>
      </div>
    </div>
  );
}

export default Classes;
