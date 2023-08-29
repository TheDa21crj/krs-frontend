import React from "react";
import Text from "./Text";
import Useful from "./Useful";
import Social from "./Social";
import News from "./News";

function Footer() {
  return (
    <div id="footer" className="bg-[#111111] px-12 pt-8">
      <div className="p-4 flex flex-col lg:flex-row items-center lg:items-start justify-between ">
        <Text />
        <div className="flex space-x-20">
          <Useful />
          <Social />
        </div>

        <News />
      </div>
      <div className="flex justify-center pb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1539.194923523781!2d85.81960417371538!3d20.35505607991974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908c555555555%3A0x35232e5ac74b6dc3!2sKIIT%20Robotics%20Society!5e0!3m2!1sen!2sin!4v1669108018463!5m2!1sen!2sin"
          className="w-[90%] md:w-[80%]  h-96"
          style={{ border: `0` }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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

        <div>
          <h1 className="text-yellow-500 text-base ml-2 pb-4">
            Copyrights Reserved @2022 | KIIT Robotics Society
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Footer;
