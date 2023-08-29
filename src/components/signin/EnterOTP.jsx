import React, { useState, useEffect, useContext } from "react";
import BG from "../../public/dronebackground.jpg";
import KRS from "../../public/krslogo.jpg";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";
import "./css/Sign.css";

export default function EnterOTP() {
  const [showOTP, setOTP] = useState(0);
  const [showE, setE] = useState("");

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value <= 0) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }

    setOTP(value);
  };

  const sendOtp = async () => {
    try {
      let email = localStorage.getItem("email");
      const FEmail = email.substring(1, email.length - 1);
      if (showOTP.length >= 1) {
        let data = {
          email: FEmail,
          otp: showOTP,
        };

        const resp = await axios.post(
          `api/login/forgotPassword/otpValidate`,
          data,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );

     
        if (resp.status === 202) {
          navigate("/ChangePass");
        }
      } else {
        setE("Invalid OTP");
      }
    } catch (error) {
      setE("Invalid OTP");
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
        <h1 className="text-white text-3xl font-bold">Enter the OTP</h1>
        <br />
        <br />
        <input
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="number"
          name="email"
          id="email"
          placeholder="OTP"
          onChange={PostData}
          style={{ border: "2px solid  transparent" }}
        />
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold mt-5"
          onClick={sendOtp}
        >
          Submit
        </button>
        <div id="SignInDiv"></div>
        <br />
        {showE ? (
          <p className="alertTextOTP font-bold tracking-wide">{showE}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
