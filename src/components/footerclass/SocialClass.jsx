import { Link } from "react-router-dom";
import fb from "../../public/fbc.png";
import ig from "../../public/instac.png";
import yt from "../../public/youtubec.png";
import mail from "../../public/mailc.png";
import li from "../../public/linkedinc.png";

function SocialClass() {
  return (
    <div className="font-WorkSans mb-16 justify-center md:justify-start">
      <h1 className="font-extrabold text-transparent text-xl mb-2 bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#896a09] to-[#e2ad07]">
        Social Media
      </h1>
      <div
        className="px-18 text-transparent bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#896a09] to-[#e2ad07]"
        style={{
          fontStyle: "normal",
          fontWeight: "bolder",
          fontSize: "18px",
          lineHeight: "36px",
          justifyItems: "center",
        }}
      >
        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.instagram.com/kiit_robotics.society/"
            class="mr-2 text-white w-5 py-1.5"
          >
            <img src={ig} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/kiit_robotics.society/"
          >
            Instagram
          </a>
        </div>

        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/kiit-robotics-society-bbsr/mycompany/"
            class="mr-2 text-white w-5 py-1.5"
          >
            <img src={li} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/kiit-robotics-society-bbsr/mycompany/"
          >
            Linkedln
          </a>
        </div>

        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.youtube.com/c/KIITROBOTICSSOCIETY"
            class="mr-2 text-white w-5 py-1.5"
          >
            <img src={yt} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/c/KIITROBOTICSSOCIETY"
          >
            Youtube
          </a>
        </div>

        <div className="flex flex-row">
          <a
            target="_blank"
            href="https://www.facebook.com/kiitroboticssociety/"
            class="mr-4 text-white w-5 py-1.5"
          >
            <img src={fb} alt="" />
          </a>

          <a
            target="_blank"
            href="https://www.facebook.com/kiitroboticssociety/"
          >
            Facebook
          </a>
        </div>

        <div className="flex flex-row ">
          <div className="mr-2 mt-2 text-white">
            <a href="#!" class="mr-2 text-white w-5 py-1.5">
              <img src={mail} alt="" />
            </a>
          </div>
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/1/?view=cm&to=robotics.society@kiit.ac.in"
          >
            Mail
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialClass;
