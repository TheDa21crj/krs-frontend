import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import KRS from "../../public/krslogo.jpg";
import BG from "../../public/dronebackground.jpg";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import "./css/Sign.css";

function SigninUp() {
  const [showUser, setUser] = useState({
    name: "",
    email: "",
    Branch: "",
    Year: "",
    Roll: "",
    number: "",
    password: "",
    cpassword: "",
  });
  const [show, set] = useState("");

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const signup = async () => {
    const { name, email, Branch, Year, Roll, number, password, cpassword } =
      showUser;
    if (
      name !== "" &&
      email !== "" &&
      Branch !== "" &&
      Year !== "" &&
      password !== "" &&
      Roll !== "" &&
      number !== "" &&
      cpassword !== "" &&
      email.indexOf("@") > -1 &&
      email.indexOf(".") !== -1 &&
      number.length >= 10 &&
      number.length <= 12
    ) {
      if (password === cpassword) {
        const userObject = {
          name: name,
          email: email,
          branch: Branch,
          year: Year,
          password: password,
          roll: Roll,
          number: number,
          designation: "user",
        };
        try {
          const res = await axios.post("/api/login/signup", userObject, {
            headers: { Authorization: `${authCtx.token}` },
          });
          const data = res.data;

          if (res.data.exists == false) {
            const info = data.user;
            await authCtx.login(
              info.name,
              info.email,
              info.pic,
              info.roll,
              info.branch,
              info.year,
              res.data.token,
              10800000
            );
            if (authCtx.target == null) {
              redirect("/admin");
            } else {
              redirect(`/${authCtx.target}`);
              authCtx.settarget(null);
            }
          } else {
            alert("Account already exists . please login");
            redirect("/signin");
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        set("Passwords Does Not Match");
      }
    } else if (!(number.length >= 10 && number.length <= 12)) {
      set("Please enter a valid a number");
    } else {
      set("Please fill all the fields");
      console.log("Error");
    }
  };

  const PostData = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    } else if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }

    if (name === "number") {
      if (value.length >= 10 && value.length <= 12) {
        e.target.style.border = "2px solid  transparent";
      } else {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      }
    }

    setUser({ ...showUser, [name]: value });
  };

  return (
    <div
      className="bg-black  bg-cover flex justify-center items-center h-[100%]"
      style={{ backgroundImage: ` url(${BG})` }}
    >
      <div className="flex mt-10 mb-10 flex-col justify-center items-center border-2 border-yellow-500 p-5 sm:p-10 rounded-xl  backdrop-blur-2xl">
        <img className="w-16 rounded-full" src={KRS} alt="krsLogo" />
        <br />
        <h1 className="text-white text-3xl font-bold">Sign Up</h1>
        <br />
        <br />
        <input
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="text"
          name="name"
          id="email"
          placeholder="Enter Name"
        />
        <br />
        <input
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Enter KIIT email address"
        />
        <br />
        <input
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="number"
          name="Roll"
          id="roll"
          placeholder="Enter your roll number"
        />
        <br />
        <input
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="number"
          name="number"
          id="number"
          placeholder="Enter Your Phone Number"
        />
        <br />
        <select
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 mb-5 p-1.5 text-lg rounded"
          name="Branch"
          id="email"
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
        <select
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 mb-5 p-1.5 text-lg rounded"
          name="Year"
          id="email"
        >
          <option selected disabled hidden>
            Select Year
          </option>
          <option value={"1st"}>1st</option>
          <option value={"2nd"}>2nd</option>
          <option value={"3rd"}>3rd</option>
          <option value={"4th"}>4th</option>
        </select>
        <input
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <br />
        <input
          onChange={PostData}
          className="w-[300px] sm:w-[400px] bg-zinc-800 text-gray-300 p-1.5 text-lg rounded"
          type="password"
          name="cpassword"
          id="password"
          placeholder="Confirm Password"
        />
        <br />
        {show ? <p className="alertText">{show}</p> : ""}
        <br />
        <button
          className="w-[200px] bg-yellow-500 text-lg rounded p-1.5 font-bold"
          onClick={signup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SigninUp;
