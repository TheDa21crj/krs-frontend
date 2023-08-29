import React, { useEffect, useState, useContext } from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { Link, useNavigate } from "react-router-dom";
import "./css/Sign.css";

export default function UserData() {
  const [showData, setData] = useState({
    roll: "",
    branch: "",
    year: "",
    number: "",
  });
  const [show, set] = useState("");

  const redirect = useNavigate();

  const authCtx = useContext(AuthContext);

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "number") {
      if (value.length >= 10 && value.length <= 12) {
        e.target.style.border = "2px solid  transparent";
      } else {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      }
    }

    if (value == "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }
     console.log(name,value)
    setData({ ...showData, [name]: value });
  };

  const sendOtp = async () => {
    const { roll, branch, year, number } = showData;

    if (number === "" || number.length < 10 || number.length > 12) {
      set("Enter a valid Number");
      return;
    }
    if (roll === "" || branch === "" || year === "" || number === "") {
      set("Enter all the details");
    } else {
      set("");
      let newUserName = localStorage.getItem("newUserName");
      let newUserEmail = localStorage.getItem("newUserEmail");
      let newUserPicture = localStorage.getItem("newUserPicture");

      newUserName = newUserName.substring(1, newUserName.length - 1);
      newUserEmail = newUserEmail.substring(1, newUserEmail.length - 1);
      newUserPicture = newUserPicture.substring(1, newUserPicture.length - 1);

      let data = {
        roll,
        branch,
        year,
        number,
        name: newUserName,
        email: newUserEmail,
        image: newUserPicture,
      };

      const resp = await axios.post(`/api/user/add`, data, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (resp.status === 200) {
        localStorage.removeItem("newUserName");
        localStorage.removeItem("newUserEmail");
        localStorage.removeItem("newUserPicture");
        const info = resp.data.user;
        await authCtx.login(
          info.name,
          info.email,
          info.pic,
          info.roll,
          info.branch,
          info.year,
          resp.data.token,
          10800000
        );
        set("");
        if (authCtx.target == null) {
          redirect("/admin");
        } else {
          redirect(`/${authCtx.target}`);
          authCtx.settarget("");
        }
      } else if (resp.status === 304) {
        if (authCtx.target == null) {
          redirect("/admin");
        } else {
          redirect(`/${authCtx.target}`);
          authCtx.settarget("");
        }
      } else {
        set("Error");
      }
    }
  };

  return (
    <div
      className="bg-black  bg-cover flex justify-center items-center "
      style={{ backgroundImage: ` url(${BG})` }}
    >
      <div className="flex flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl backdrop-blur-2xl  mt-5 mb-5">
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" />
        <br />
        <h1 className="text-white text-3xl font-bold">Enter all the Details</h1>
        <br />
        <br />
        <select
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          name="year"
          placeholder="Year"
        >
          <option selected disabled hidden>
            Select Year
          </option>
          <option value={"1st"}>1st</option>
          <option value={"2nd"}>2nd</option>
          <option value={"3rd"}>3rd</option>
          <option value={"4th"}>4th</option>
        </select>
        <select
          onChange={PostData}
         
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded mt-5"    
          name="branch"
        >
          <option selected disabled hidden>
            Select Branch
          </option>
          <option value={"CSE"}>CSE</option>
          <option value={"CSSE"}>CSSE</option>
          <option value={"CSCE"}>CSCE</option>
          <option value={"IT"}>IT</option>
          <option value={"ETC"}>ETC</option>
          <option value={"EEE"}>EEE</option>
          <option value={"ECS"}>ECS</option>
          <option value={"EE&I"}>E&I</option>
          <option value={"Electrical"}>Electrical</option>
          <option value={"CIVIL"}>CIVIL</option>
          <option value={"Mech"}>Mech</option>
          <option value={"Mechtronics"}>Mechtronics</option>
          <option value={"Aerospace"}>Aerospace</option>
          <option value={"Mass Communication"}>Mass Comunication</option>
          <option value={"Medical Sciences"}>Medical Sciences</option>
          <option value={"Dental Sciences"}>Dental Sciences</option>
          <option value={"Nursing Sciences"}>Nursing Sciences</option>
          <option value={"Not Mentioned"}>Not Mentioned</option>
        </select>
     
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded mt-5"
          type="number"
          name="roll"
          placeholder="Roll"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded mt-5"
          type="number"
          name="number"
          placeholder="Contact Number"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        {show ? (
          <p className="alertTextOTP font-bold tracking-wide my-5">{show}</p>
        ) : (
          ""
        )}
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold mt-5"
          onClick={sendOtp}
        >
          Submit
        </button>

        <br />
      </div>
    </div>
  );
}
