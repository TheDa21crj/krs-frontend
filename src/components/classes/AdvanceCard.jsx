import { useState } from "react";
function BasicCard(props) {
  return (
    <div>
      <div className="w-[230px] h-[320px] ">
        <div className="relative w-full h-full duration-1000">
          <div className="absolute backface-hidden w-full h-full justify-center items-center flex">
            <img src={props.img} alt="" className="h-full w-full absolute" />
            <img src={props.lock} alt="" className="h- w-ful absolute" />
          </div>
          {/* <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 bg-cover border-2 border-[#f3af40] rounded-md"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.popups})`,
            }}
          >
            <div className="text-center text-black flex flex-col items-center justify-center h-full bg-cover">
              <div className="z-0 absolute">
                <img src={props.smallb} alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BasicCard;
