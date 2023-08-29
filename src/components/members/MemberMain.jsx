import React, { useState } from "react";
import PP from "../../public/pp.jpeg";
import MembersMembers from "./MembersMembers";
import MembersAlumni from "./MembersAlumni";
import BgImg from "../../public/Robowars.jpg";
import axios from "axios";
import { useEffect } from "react";
import Insta from "./icons/Insta";
import Github from "./icons/Github";
import loading from "../../public/loading.svg"
import Linkedin from "./icons/Linkedin";


function MemberMain() {
  const [memVis, setmemVis] = useState({
    visibility: "block",
    border: "yellow-500",
  });
  const [aluVis, setaluVis] = useState({
    visibility: "hidden",
    border: "white",
  });
  const [maindata, setMainData] = useState({
    alumni: [],
    member: [],
    aco: [],
    co: [],
  });

  useEffect(() => {
    async function makereq() {
      try {
        const resp = await axios.get("/api/members/");
     
        const data = resp.data;
  
        const alumni = data.filter((e) => e.designation == "alumni");
        const mem = data.filter((e) => e.designation == "member" || e.designation == "oc");
        const aco = data.filter(
          (e) => e.designation == "assistant coordinator"
        ).reverse();
        const co = data.filter((e) => e.designation == "coordinator");
       
        setMainData({ alumni: alumni, member: mem, aco: aco, co: co });
      } catch (e) {}
    }
    makereq();
  }, []);
  const handleOnMembers = () => {
    setmemVis({ visibility: "block", border: "yellow-500" });
    setaluVis({ visibility: "hidden", border: "white" });
  };
  const handleOnAlumni = () => {
    setmemVis({ visibility: "hidden", border: "white" });
    setaluVis({ visibility: "block", border: "yellow-500" });
  };

  return (
    <div
      className="bg-black bg-cover bg-bottom bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BgImg})`,
      }}
    >
     {maindata.alumni.length!=0 ? <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold pt-6 px-10 text-yellow-500">
          Coordinator
        </h1>
        <div className="w-full py-10 px-[5%] lg:px-[25%] grid  justify-items-center">
          {maindata.co.map((data) => {
            return (
              <div
                className="bg-[#111111] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[70%] xl:w-[60%]  mx-10 my-5 flex justify-center rounded-3xl"
                style={{ position: "relative", alignItems: "center" }}
              >
                <div
                  className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                  style={{ position: "absolute", top: "0" }}
                ></div>
                <div
                  className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-[#111111] items-center flex flex-col"
                  style={{ zIndex: "9" }}
                >
                  <div className="">
                    <img
                      className="w-40 h-40 rounded-3xl"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-5 h-full items-center mx-5">
                    <div className="space-y-1 flex flex-col items-center">
                      <h1 className="text-yellow-500 font-bold text-lg sm:text-xl text-center">
                        {data.name}
                      </h1>
                      <h2 className="text-white font-semibold text-base sm:text-lg text-center">
                        {data.domain}
                      </h2>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-white text-justify text-sm xl:text-base">
                      {data.bio!="null" && data.bio}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-yellow-500 text-justify text-sm xl:text-base">
                        {data.email}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                    {data.insta!="null" && <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.insta}
                  >
                    <Insta />
                  </a>}
                  {data.github!="null" &&   <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.github}
                  >
                    <Github />
                  </a>}
                  {data.linkedin!="null" &&  <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.linkedin}
                  >
                    <Linkedin />
                  </a>}
                  
                   </div>
                  </div>
                </div>
                <div
                  className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                  style={{ position: "absolute", bottom: "0" }}
                ></div>
              </div>
            );
          })}
        </div>

        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold pt-6 px-10 text-yellow-500">
          Assistant Coordinators
        </h1>
        <div className="w-full py-10 px-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {maindata.aco.map((data) => {
            return (
              <div
                className="bg-[#111111] w-[80%] sm:w-[70%] md:w-[80%] lg:w-[90%] xl:w-[80%]  mx-10 my-5 flex justify-center rounded-3xl"
                style={{ position: "relative", alignItems: "center" }}
              >
                <div
                  className="bg-yellow-500 w-[100%] h-12 rounded-3xl rounded-b"
                  style={{ position: "absolute", top: "0" }}
                ></div>
                <div
                  className="w-[97.5%] h-[98%] py-5 rounded-3xl bg-[#111111] items-center flex flex-col"
                  style={{ zIndex: "9" }}
                >
                  <div className="">
                    <img
                      className="w-40 h-40 rounded-3xl"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between space-y-5 h-full items-center mx-5">
                    <div className="space-y-1 flex flex-col items-center">
                      <h1 className="text-yellow-500 font-bold text-lg sm:text-xl text-center">
                        {data.name}
                      </h1>
                      <h2 className="text-white font-semibold text-base sm:text-lg text-center">
                        {data.domain}
                      </h2>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-white text-justify text-sm xl:text-base">
                      {data.bio!="null" && data.bio}
                      </p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-yellow-500 text-justify text-sm xl:text-base">
                        {data.email}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                    {data.insta!="null" && <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.insta}
                  >
                    <Insta />
                  </a>}
                  {data.github!="null" &&   <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.github}
                  >
                    <Github />
                  </a>}
                  {data.linkedin!="null" &&  <a
                    target="_blank"
                    className="text-yellow-500"
                    href={data.linkedin}
                  >
                    <Linkedin />
                  </a>}
                    </div>
                  </div>
                </div>
                <div
                  className="bg-yellow-500  w-[100%] h-12 rounded-3xl rounded-t"
                  style={{ position: "absolute", bottom: "0" }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col w-[80%]">
          <div className="flex justify-center">
            <button className="w-full" onClick={handleOnMembers}>
              <h1
                className={`text-center text-3xl sm:text-5xl md:text-6xl border-b-0 rounded-t-lg text-${memVis.border} border-yellow-500 font-bold mt-6`}
              >
                Members
              </h1>
            </button>
            <button className="w-full " onClick={handleOnAlumni}>
              <h1
                className={`text-center text-3xl sm:text-5xl md:text-6xl border-b-0 rounded-t-lg text-${aluVis.border} border-yellow-500 font-bold mt-6`}
              >
                Alumni
              </h1>
            </button>
          </div>
          {/* <hr className="w-[20%] ml-[14%] border-[1px] border-yellow-500 bg-yellow-500" /> */}
        </div>

        <MembersMembers data={maindata.member} memVisible={memVis} />
        <MembersAlumni data={maindata.alumni} aluVisible={aluVis} />
      </div>:<div className="flex items-center justify-center"><img className='h-56 w-56' src={loading}/></div>
}
    </div>
  );
}

export default MemberMain;
