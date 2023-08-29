import React from "react";
import Text from "./TextClass";
import Useful from "./UsefulClass";
import Social from "./SocialClass";
import News from "./NewsClass";

function FooterClass() {
  return (
    <div id="footer" className="bg-transparent px-12 pt-8">
      <div className="p-4 flex flex-col lg:flex-row items-center lg:items-start justify-between ">
        <Text />
        <div className="flex space-x-20">
          <Useful />
          <Social />
        </div>

        <News />
      </div>

      <div className="flex flex-row justify-center items-center ">
        <div className="pb-4">
          <svg
            fill="#eab308"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z" />
          </svg>
        </div>

        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#896a09] to-[#e2ad07]">
          <h1 className=" text-base ml-2 pb-4">
            Copyrights Reserved @2022 | KIIT Robotics Society
          </h1>
        </div>
      </div>
    </div>
  );
}
export default FooterClass;
