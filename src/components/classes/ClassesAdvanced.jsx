import React from "react";
import broomleft from "../../public/broom-left.png";
import broomright from "../../public/broom-right.png";
import AdvanceCard from "./AdvanceCard";
import bluecard from "../../public/blue-card.png";
import lock from "../../public/lock.png";
import blblue from "../../public/black-blue.png";
import blyellow from "../../public/black-yellow.png";
import blgreen from "../../public/black-green.png";
import glass from "../../public/glass-footer.png";
import cloud from "../../public/clouds.png";

function ClassesAdvanced() {
  return (
    <div className="relative">
      <div className="flex w-full z-0 absolute -top-16 sm:-top-24 md:-top-28 lg:-top-40 justify-between">
        <img className="lg:w-full" src={cloud} alt="" />
      </div>
      {/* Advanced */}

      <div className="text-white relative z-10 flex justify-center items-center px-3 pt-12 md:pt-24 font-cormorant">
        <img className="w-28 sm:w-52 md:w-60 lg:w-80" src={broomleft} alt="" />
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#e2ad07] to-[#896a09]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cente">
            Advanced
          </h1>
        </div>
        <img className="w-28 sm:w-52 md:w-60 lg:w-80" src={broomright} alt="" />
      </div>

      {/* Advance Cards */}
      <section className="flex flex-col lg:flex-row w-full items-center space-y-12 lg:space-y-0 justify-between px-24 pb-20 text-white">
        <div className=" pt-8 lg:pt-36">
          <AdvanceCard img={blblue} lock={lock} />
        </div>

        <div className="flex relative py-8 lg:py-0">
          <div className="lg:pt-8 absolute z-20 lg:z-0 skew-x-12 -skew-y-12 lg:skew-x-0 lg:skew-y-0 right-2 lg:right-36">
            <AdvanceCard img={blyellow} lock={lock} />
          </div>

          <div className="z-10 lg:z-10">
            <AdvanceCard img={blyellow} lock={lock} />
          </div>

          <div className="lg:pt-8 absolute z-0 lg:z-0 -skew-x-12 skew-y-12 lg:skew-x-0 lg:skew-y-0 left-2 lg:left-36">
            <AdvanceCard img={blyellow} lock={lock} />
          </div>
        </div>

        <div className="lg:pt-36">
          <AdvanceCard img={blgreen} lock={lock} />
        </div>
      </section>
      <div className="flex items-center justify-center pb-4 px-4">
        <img className="w-" src={glass} alt="" />
      </div>
    </div>
  );
}

export default ClassesAdvanced;
