import React from "react";
import Collab from "../../public/collab1.jpg";
import ohm from "../../public/99ohms.png";
import karkhana from "../../public/karkhana1.jpg";
import mba from "../../public/MBA Chaiwala.png";
import biggies from "../../public/Biggies@4x.png";
import panther from "../../public/Panther Noir@4x.png";
import mad from "../../public/mad moose logo@3x.png";
import jugaad from "../../public/Jugaad Junction.png";
import eduvance from "../../public/edu1.jpg";
import desipot from "../../public/dpot.png";
import chaicorner from "../../public/chaic.png";
import hoverrobotics from "../../public/hovr.png";
import mentrx from "../../public/mntx.png";
import revup from "../../public/rev.png";

function HomeCollaborations() {
  return (
    <div
      className="bg-black bg-cover flex flex-col pb-10 items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${Collab})`,
      }}
    >
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold pt-10 px-10 text-yellow-500">
        Collaborations
      </h1>
      <div className="bg-[#111111e1] drop-shadow-2xl gap-4 mx-[10%] py-8 pr-14 pl-6 mt-10 rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        <div className="w-[250px] h-[250px] flex justify-center items-center px-2">
          <a target="_blank" href="https://99ohms.com/">
            <img className="rounded-md w-fit" src={ohm} alt="" />
          </a>
        </div>
        <div className=" w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://www.eduvance.in/">
            <img
              className="rounded-md w-fit"
              src="https://eduvance.in/static/assets/new/img/logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center px-2">
          <a target="_blank" href="https://karkhana.co.in/">
            <img
              className="rounded-md w-fit"
              src="https://7j49dd.p3cdn1.secureserver.net/wp-content/uploads/2021/08/Untitled-design-100.png"
              alt=""
            />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://www.spacechase.in/">
            <img
              className="rounded-md w-fit"
              src="https://static.wixstatic.com/media/068e00_61a8ac05331b46a29dc6ba09d972d571~mv2.png/v1/fill/w_369,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TEXT%20white%20png%20(1).png"
              alt=""
            />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://www.geeksforgeeks.org/">
            <img
              className="rounded-md w-fit"
              src="https://ik.imagekit.io/krs/GeeksforGeeks_PHMv3yyOO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660935160708"
              alt=""
            />
          </a>
        </div>
        <div className=" w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://www.mbachaiwala.com/">
            <img className="rounded-md w-fit" src={mba} alt="" />
          </a>
        </div>

        <div className=" w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://biggiesburger.com/">
            <img className="rounded-md w-fit h-48" src={biggies} alt="" />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://panthernoircoffee.com/">
            <img className="rounded-md w-fit" src={panther} alt="" />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://www.facebook.com/MADMOOSEGELATERIA/">
            <img className="rounded-md w-fit" src={mad} alt="" />
          </a>
        </div>
        <div className=" w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://www.facebook.com/jn.jugaad/">
            <img className="rounded-md w-fit h-48" src={jugaad} alt="" />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a
            target="_blank"
            href="https://www.facebook.com/people/Desi-Pot/100063872391030/"
          >
            <img className="rounded-md w-fit h-44" src={desipot} alt="" />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://thementorx.com/">
            <img className="rounded-md w-fit h-44" src={mentrx} alt="" />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center px-2">
          <a target="_blank" href="">
            <img className="rounded-md w-fit" src={revup} alt="" />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="https://hoverrobotix.com">
            <img className="rounded-md w-fit h-48" src={hoverrobotics} alt="" />
          </a>
        </div>
        <div className="w-[250px] h-[250px] flex justify-center items-center">
          <a target="_blank" href="">
            <img className="rounded-md w-fit h-48" src={chaicorner} alt="" />
          </a>
        </div>

        {/* <a target="_blank" href="https://www.eduvance.in/">
          <img className="h-48 m-4 rounded-md w-full" src={eduvance} alt="" />
        </a> */}
        {/* <a target="_blank" href="https://karkhana.co.in/">
          <img className="h-48 m-4 rounded-md w-full" src={karkhana} alt="" />
        </a> */}
        {/* <a target="_blank" href="https://www.spacechase.in/">
          <div className="bg-white h-48 m-4 rounded-md w-full flex justify-center items-center">
            <img
              className="h-full scale-75 m-4 rounded-md w- bg-white"
              src="https://ik.imagekit.io/krs/achivements/i_8Cr7rtYC3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660053945967"
              alt=""
            />
          </div>
        </a> */}
        {/* <a target="_blank" href="https://www.geeksforgeeks.org/">
          <img
            className="h-48 m-4 rounded-md w-full"
            src={
              "https://ik.imagekit.io/krs/GeeksforGeeks_PHMv3yyOO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660935160708"
            }
            alt=""
          />
        </a> */}
        {/* <a target="_blank" href="https://www.mbachaiwala.com/">
          <img className="h-48 m-4 rounded-md w-full" src={mba} alt="" />
        </a> */}
        {/* <a target="_blank" href="https://biggiesburger.com/">
          <img className="h-48 m-4 rounded-md w-full" src={biggies} alt="" />
        </a>
        <a target="_blank" href="https://panthernoircoffee.com/">
          <img className="h-48 m-4 rounded-md w-full" src={panther} alt="" />
        </a> */}
        {/* <a target="_blank" href="/">
          <img className="h-48 m-4 rounded-md w-full" src={mad} alt="" />
        </a>
        <a target="_blank" href="/">
          <img className="h-48 m-4 rounded-md w-full" src={jugaad} alt="" />
        </a>
        <a target="_blank" href="/">
          <img className="h-48 m-4 rounded-md w-full" src={desipot} alt="" />
        </a>
        <a target="_blank" href="/">
          <img className="h-48 m-4 rounded-md w-full" src={mentrx} alt="" />
        </a>
        <a target="_blank" href="/">
          <img className="h-48 m-4 rounded-md w-full" src={revup} alt="" />
        </a>
        <a target="_blank" href="/">
          <img
            className="h-48 m-4 rounded-md w-full"
            src={hoverrobotics}
            alt=""
          />
        </a>
        <a target="_blank" href="/">
          <img className="h-48 m-4 rounded-md w-full" src={chaicorner} alt="" />
        </a> */}
      </div>
    </div>
  );
}

export default HomeCollaborations;
