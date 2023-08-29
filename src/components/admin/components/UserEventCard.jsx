import QRCode from "qrcode";
import axios from "axios";
import { memo } from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../store/auth-context";
import loading from "../../../public/loading.svg";

const UserEventCard = ({
  eventsData,
  re,
  teammodal,
  qrmodal,
  qrimg,
  email,
}) => {
  const authCtx = useContext(AuthContext);
  const [domain,setDomain]=useState("")
  const [teamexist, setTeamexist] = useState({
    status: false,
    teaminfo: {},
    info: {},
    verification: "",
  });

  const [loadin, setLoadin] = useState(false);

  useEffect(() => {
    async function makereq() {
      try {
        setLoadin(true);
        const resp = await axios.post(
          `/api/registration/register/teamstatus/`,
          {
            email: email,
            sheetid: eventsData.sheetid,
            formid: eventsData.registrationformid,
          },
          { headers: { Authorization: `${authCtx.token}` } }
        );
        setLoadin(false);
        setDomain(resp.data.domain)
        if (resp.data.exist == true) {
          setTeamexist({
            status: true,
            teaminfo: resp.data.teaminfo,
            verification: resp.data.verification,
          });
        } else {
          setTeamexist({
            status: false,
            teaminfo: {},
            info: {
              sid: eventsData.sheetid,
              fid: eventsData.registrationformid,
            },
            verification: resp.data.verification,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    if(eventsData.status!=="Over" && re===false){
      makereq();
    }

  
  }, [re]);

  const generateQR = async (sid, fid) => {
    try {
      qrmodal(true);
      const resp = await axios.post(
        `/api/registration/register/checkreg/`,
        { email: email, sheetid: sid, formid: fid },
        { headers: { Authorization: `${authCtx.token}` } }
      );
      const data = resp.data;
      if (data.reg == true) {
      } else {
        return;
      }
      const imgurl = await QRCode.toDataURL(data.code);
      qrimg(imgurl);
    } catch (err) {
      console.error(err);
    }
  };

  const date = new Date(eventsData.date);
  const datestring = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return (
    <div className="border-4 bg-black rounded-xl border-yellow-500  w-[230px] h-[350px]">
      <div className="text-white w-full pt-3 px-5 flex flex-col justify-between "></div>
      <div className="text-white w-full pt-3 px-5 flex flex-col justify-between s">
        <h1 className="text-base md:text-base xl:text-lg font-bold pb-4  md:items-start text-yellow-500 sm:text-center items-center uppercase">
          {eventsData.title}
        </h1>
        <div className="flex italic">
          <h2 className="text-xs md:text-xs text-yellow-500">{datestring}</h2>
          <h2 className="text-xs md:text-xs text-yellow-500 ml-10">
            {eventsData.venue}
          </h2>
        </div>

        <div className="flex justify-center py-2 px-2">
          <img
            className="w-[180px] h-[130px] rounded-xl"
            src={eventsData.thumbnil[0]}
          />
        </div>
        {eventsData.status !== "Over" && (
          <div className="flex space-x-4 pt-3 ml-3">
            {eventsData.mode == "Offline" && (
              <div
                onClick={() =>
                  generateQR(eventsData.sheetid, eventsData.registrationformid)
                }
                className="text-white mr-2 mt-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 "
                  viewBox="0 0 20 20"
                  fill="#EAB308"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                    clip-rule="evenodd"
                  />
                  <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                </svg>
              </div>
            )}

            <div className="flex space-x-4 pt-1">
              {domain=="Web Development" &&
              
              <a href="https://classroom.google.com/c/NTU1NTcwNzU4MTM5?cjc=xugjqah">  <button
                  className="text-black p-1 xl:p-2 text-xs md:text-[10px] xl:text-md button-24 bg-yellow-500 rounded-md font-bold"
                  
                >
                  Join Class
                </button> </a>
              }
               {domain=="Machine Learning" &&
              
              <a href="https://classroom.google.com/c/NTAyNjMwODk5Mjk0?cjc=iwbom3k">  <button
                  className="text-black p-1 xl:p-2 text-xs md:text-[10px] xl:text-md button-24 bg-yellow-500 rounded-md font-bold"
                  
                >
                  Join Class
                </button> </a>
              }
                {domain=="Embeded System" &&
              
              <a href="https://classroom.google.com/c/NTU1NTY5ODU4NTcy?cjc=rbca2fm">  <button
                  className="text-black p-1 xl:p-2 text-xs md:text-[10px] xl:text-md button-24 bg-yellow-500 rounded-md font-bold"
                  
                >
                  Join Class
                </button> </a>
              }
              
              {
                (eventsData.teamcreation == "Allowed" && loadin == false && (
                  <button
                    className="text-black p-1 xl:p-2 text-xs md:text-[10px] xl:text-md button-24 bg-yellow-500 rounded-md font-bold"
                    onClick={() => {
                      teammodal({
                        status: true,
                        teamexist: teamexist.status,
                        teaminfo: teamexist.teaminfo,
                        verification: teamexist.verification,
                        info: {
                          sid: eventsData.sheetid,
                          fid: eventsData.registrationformid,
                          teamsize: eventsData.teamsize,
                        },
                      });
                    }}
                  >
                    {teamexist.status && "View Team"}
                    {!teamexist.status && "Join/Create Team"}
                  </button>
                ))
              }
              {loadin == true && (
                <img src={loading} className="h-8 w-8" alt="mySvgImage" />
              )}
            </div>
          </div>
        )}

        <span className="text-green-400 font-bold uppercase align-middle text-xs flex justify-center mt-4">
          {eventsData.status !== "Over" &&
            teamexist.verification == "Not Verified" &&
            "Registered"}

          {eventsData.status !== "Over" &&
            teamexist.verification == "Verified" &&
            "Verified"}
          {eventsData.status === "Over" && "Completed"}
        </span>
      </div>
    </div>
  );
};

export default memo(UserEventCard);
