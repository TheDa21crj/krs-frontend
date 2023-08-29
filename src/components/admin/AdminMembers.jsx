import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PP from "../../public/pp.jpeg";
// import Insta from "../../public/instagram.png";
// import Git from "../../public/github.png";
// import Linkedin from "../../public/linkedin.png";
import Delete from "../../public/delete.png";
import Edit from "../../public/edit.png";
// import Email from "../../public/email.png";
import axios from "axios";
import AuthContext from "../../store/auth-context";

const memberCard = [];

function AdminMembers() {
  const [members, setMembers] = useState(memberCard);
  const [mem, setMem] = useState({
    name: "",
    roll: "",
    domain: "",
    designation: "",
    about: "",
    year: "",
    img: "",
    linkedin: "",
    email: "",
    insta: "",
    github: "",
    branch: "",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    index: null,
    id: null,
  });
  const [show, set] = useState("");
  const authCtx = useContext(AuthContext);
  const [showMemData, setMemData] = useState();
  //fetch member
  useEffect(() => {}, []);
  //  add members
  const handleClick = async (e) => {
    e.preventDefault();

    const {
      name,
      domain,
      designation,
      about,
      year,
      img,
      linkedin,
      email,
      insta,
      github,
      branch,
    } = mem;

    if (
      name !== "" &&
      domain !== "" &&
      designation !== "" &&
      about !== "" &&
      year !== "" &&
      img !== "" &&
      linkedin !== "" &&
      email !== "" &&
      insta !== "" &&
      github !== "" &&
      email.indexOf("@") > -1 &&
      email.indexOf(".") !== -1 &&
      branch !== ""
    ) {
      // setMembers(members.concat(mem))

      await addmem();

      set("");
      setMem({
        name: "",
        domain: "",
        designation: "",
        about: "",
        year: "",
        img: "",
        linkedin: "",
        email: "",
        insta: "",
        github: "",
        branch: "",
      });
    } else {
      set("Please fill all the fields");
    }
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "1px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "1px solid rgb(203, 213, 225)";
      }
    } else if (value === "") {
      e.target.style.border = "1px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "1px solid rgb(203, 213, 225)";
    }

    setMem({ ...mem, [name]: value });
  };

  // deleting members
  const deleteMember = async (email) => {
    const resp = await axios.delete(`/api/members/removeMember/${email}`, {
      headers: { Authorization: `${authCtx.token}` },
    });
    makereq();
  };

  // editing members
  const updateCard = (i, id) => {
    setMem({
      name: showMemData[i].name,
      roll: showMemData[i].roll,
      domain: showMemData[i].domain,
      designation: showMemData[i].designation,
      about: showMemData[i].bio,
      year: showMemData[i].year,
      img: showMemData[i].image,
      linkedin: showMemData[i].linkedin,
      email: showMemData[i].email,
      insta: showMemData[i].insta,
      github: showMemData[i].github,
      // branch: showMemData[i].branch,
    });
    setShowModal({ show: true, index: i, id: id });
  };

  const editMembers = async () => {
    memberCard[showModal.index] = {
      name: mem.name,
      roll: mem.roll,
      domain: mem.domain,
      designation: mem.designation,
      about: mem.about,
      year: mem.year,
      img: mem.img,
      linkedin: mem.linkedin,
      email: mem.email,
      insta: mem.insta,
      github: mem.github,
      branch: mem.branch,
    };
    setMembers(memberCard);

    let dataAdd = {
      name: mem.name,
      designation: mem.designation,
      image: mem.img,
      domain: mem.domain,
      year: mem.year,
      bio: mem.about,
      email: mem.email,
      linkedin: mem.linkedin,
      insta: mem.insta,
      github: mem.github,
      branch: mem.branch,
      // password: mem,
    };

    const resp = await axios.patch(
      `/api/members/updateMember/${showModal.id}`,
      dataAdd,
      { headers: { Authorization: `${authCtx.token}` } }
    );

    setMem({
      name: "",
      roll: "",
      domain: "",
      designation: "",
      about: "",
      year: "",
      img: "",
      linkedin: "",
      email: "",
      insta: "",
      github: "",
    });
    setShowModal({ show: false, index: null, id: null });

    makereq();
  };

  // modal state
  const closeModal = () => {
    setMem({
      name: "",
      roll: "",
      domain: "",
      designation: "",
      about: "",
      year: "",
      img: "",
      linkedin: "",
      email: "",
      insta: "",
      github: "",
      branch: "",
    });
    setShowModal({ show: false, index: null, id: null });
  };

  useEffect(() => {
    makereq();
  }, []);

  // fetch members data
  async function makereq() {
    try {
      const resp = await axios.get(`/api/members`);
      const data = resp.data;

      setMemData(data);
    } catch (e) {}
  }

  // add members
  const addmem = async () => {
    let dataAdd = {
      name: mem.name,
      designation: mem.designation,
      image: mem.img,
      domain: mem.domain,
      year: mem.year,
      bio: mem.about,
      email: mem.email,
      linkedin: mem.linkedin,
      github: mem.github,
      insta: mem.insta,
      branch: mem.branch,
      // password: mem,
    };

    const resp = await axios.post(`api/members/addMember`, dataAdd, {
      headers: { Authorization: `${authCtx.token}` },
    });

    // console.log(dataAdd);

    makereq();
  };

  useEffect(() => {}, [mem]);

  return (
    <div className="flex-1 mx-6 sm:mx-20 justify-center items-center font-montserrat">
      {/* form */}
      <p className="text-yellow-500 text-2xl font-semibold py-8">Members</p>
      <div
        className="py-4 px-4 sm:px-8 rounded-xl"
        style={{ background: "rgba(28, 28, 28, 1)" }}
      >
        <h1 className="text-xl sm:text-2xl text-white font-semibold">
          Add a member
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Name</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
              placeholder="Name"
              type="text"
              name="name"
              value={mem.name}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Roll Number
            </h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Roll Number"
              type="text"
              name="roll"
              value={mem.roll}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Domain</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Domain"
              type="text"
              name="domain"
              value={mem.domain}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Branch</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Branch"
              type="text"
              name="branch"
              value={mem.branch}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Designation
            </h2> */}
            <select
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              id=""
              name="designation"
              value={mem.designation}
              onChange={onChange}
            >
              <option selected hidden className="text-slate-300">
                Designation
              </option>
              <option value="member" className="text-black">
                Member
              </option>
              <option value="oc" className="text-black">
                OC
              </option>
              <option value="coordinator" className="text-black">
                Coordinator
              </option>
              <option value="assistant coordinator" className="text-black">
                Assistant Coordinator
              </option>
              <option value="alumni" className="text-black">
                Alumni
              </option>
              <option value="admin" className="text-black">
                Admin
              </option>
            </select>
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Year</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Year"
              type="text"
              name="year"
              value={mem.year}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Image</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Image Link"
              type="text"
              name="img"
              value={mem.img}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">About</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="About"
              type="text"
              name="about"
              value={mem.about}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Linkdin</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Linkedin"
              type="text"
              name="linkedin"
              value={mem.linkedin}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Email</h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Email"
              type="text"
              name="email"
              value={mem.email}
              onChange={onChange}
            />
          </div>
          <div className="mt-[30px]">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Instagram
            </h2> */}
            <input
              className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Instagram"
              type="text"
              name="insta"
              value={mem.insta}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="">
          {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Github</h2> */}
          <input
            className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
            placeholder="GitHub"
            type="text"
            name="github"
            value={mem.github}
            onChange={onChange}
          />
        </div>
        <br />
        {show ? <p className="alertText text-red-500">{show}</p> : ""}
        <div className="flex justify-between mr-8">
          <div className="h-3"></div>
          <button
            type="submit"
            onClick={handleClick}
            className="text-xl py-1.5 px-4 bg-yellow-500 rounded-md text-black"
          >
            Add Member
          </button>
        </div>
      </div>

      <p className="text-yellow-500 text-2xl font-semibold pt-8">All Members</p>
      {showMemData ? (
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-stretch">
          {showMemData.map((value, key) => {
            return (
              <div
                key={key}
                className="w-[95%] p-5 rounded-2xl mb-[30px]"
                style={{ background: "rgba(28, 28, 28, 1)" }}
              >
                <div className="lg:flex">
                  <img
                    className="w-40 h-40 rounded-3xl"
                    src={value.image}
                    alt=""
                  />
                  <div className="lg:ml-4 lg:mt-0 mt-4">
                    <div className="text-[#60FF00] uppercase text-xs border-[1px] border-[#60FF00] w-min px-[10px] py-[3px] rounded-[40px]">
                      {value.designation}
                    </div>
                    <div className="text-yellow-500 font-semibold mt-[5px] text-3xl md:text-2xl">
                      {value.name}
                    </div>
                    <div className="text-white mt-[5px] text-2xl md:text-xl">
                      {value.year}-{value.domain}
                    </div>
                    <div className="mt-3 flex w-[100%] justify-between">
                      <a className="" href={`${value.github}`}>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.1306 0C9.78477 0 8.45213 0.265079 7.20875 0.780103C5.96537 1.29513 4.83561 2.05001 3.88397 3.00165C1.96205 4.92357 0.882324 7.53026 0.882324 10.2483C0.882324 14.778 3.82358 18.6211 7.89214 19.9841C8.40455 20.0661 8.56853 19.7484 8.56853 19.4717V17.7398C5.72976 18.3547 5.12511 16.3665 5.12511 16.3665C4.65369 15.1777 3.98755 14.86 3.98755 14.86C3.05496 14.2246 4.05929 14.2451 4.05929 14.2451C5.08412 14.3168 5.62727 15.3007 5.62727 15.3007C6.51887 16.8584 8.02537 16.3972 8.60952 16.1513C8.70175 15.4851 8.96821 15.0342 9.25516 14.778C6.98004 14.5218 4.5922 13.6404 4.5922 9.73586C4.5922 8.5983 4.98163 7.6862 5.64777 6.95858C5.54529 6.70237 5.1866 5.63655 5.75025 4.25303C5.75025 4.25303 6.61111 3.97633 8.56853 5.29836C9.37814 5.07289 10.2595 4.96016 11.1306 4.96016C12.0017 4.96016 12.883 5.07289 13.6927 5.29836C15.6501 3.97633 16.5109 4.25303 16.5109 4.25303C17.0746 5.63655 16.7159 6.70237 16.6134 6.95858C17.2796 7.6862 17.669 8.5983 17.669 9.73586C17.669 13.6507 15.2709 14.5115 12.9855 14.7678C13.3545 15.0855 13.6927 15.7106 13.6927 16.6637V19.4717C13.6927 19.7484 13.8566 20.0764 14.3793 19.9841C18.4479 18.6109 21.3789 14.778 21.3789 10.2483C21.3789 8.90245 21.1138 7.5698 20.5988 6.32643C20.0837 5.08305 19.3289 3.95329 18.3772 3.00165C17.4256 2.05001 16.2958 1.29513 15.0524 0.780103C13.8091 0.265079 12.4764 0 11.1306 0Z"
                            fill="#FFB742"
                          />
                        </svg>
                      </a>
                      <a className="" href={`${value.insta}`}>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.25618 0.06C7.32254 0.0109091 7.66254 0 10.3789 0C13.0953 0 13.4353 0.0118182 14.5007 0.06C15.5662 0.108182 16.2935 0.278182 16.9298 0.524545C17.5962 0.776364 18.2007 1.17 18.7007 1.67909C19.2098 2.17818 19.6025 2.78182 19.8535 3.44909C20.1007 4.08545 20.2698 4.81273 20.3189 5.87636C20.368 6.94455 20.3789 7.28455 20.3789 10C20.3789 12.7164 20.3671 13.0564 20.3189 14.1227C20.2707 15.1864 20.1007 15.9136 19.8535 16.55C19.6025 17.2174 19.2092 17.822 18.7007 18.3218C18.2007 18.8309 17.5962 19.2236 16.9298 19.4745C16.2935 19.7218 15.5662 19.8909 14.5025 19.94C13.4353 19.9891 13.0953 20 10.3789 20C7.66254 20 7.32254 19.9882 6.25618 19.94C5.19254 19.8918 4.46527 19.7218 3.82891 19.4745C3.16156 19.2236 2.55692 18.8302 2.05709 18.3218C1.54834 17.8224 1.15465 17.2181 0.903452 16.5509C0.657088 15.9145 0.487997 15.1873 0.438906 14.1236C0.389815 13.0555 0.378906 12.7155 0.378906 10C0.378906 7.28364 0.390724 6.94364 0.438906 5.87818C0.487088 4.81273 0.657088 4.08545 0.903452 3.44909C1.15502 2.78189 1.54901 2.17756 2.058 1.67818C2.55712 1.16955 3.16115 0.775858 3.828 0.524545C4.46436 0.278182 5.19163 0.109091 6.25527 0.06H6.25618ZM14.4198 1.86C13.3653 1.81182 13.0489 1.80182 10.3789 1.80182C7.70891 1.80182 7.39254 1.81182 6.338 1.86C5.36254 1.90455 4.83345 2.06727 4.48072 2.20455C4.01436 2.38636 3.68072 2.60182 3.33072 2.95182C2.99895 3.27459 2.74362 3.66753 2.58345 4.10182C2.44618 4.45455 2.28345 4.98364 2.23891 5.95909C2.19072 7.01364 2.18072 7.33 2.18072 10C2.18072 12.67 2.19072 12.9864 2.23891 14.0409C2.28345 15.0164 2.44618 15.5455 2.58345 15.8982C2.74345 16.3318 2.99891 16.7255 3.33072 17.0482C3.65345 17.38 4.04709 17.6355 4.48072 17.7955C4.83345 17.9327 5.36254 18.0955 6.338 18.14C7.39254 18.1882 7.708 18.1982 10.3789 18.1982C13.0498 18.1982 13.3653 18.1882 14.4198 18.14C15.3953 18.0955 15.9244 17.9327 16.2771 17.7955C16.7435 17.6136 17.0771 17.3982 17.4271 17.0482C17.7589 16.7255 18.0144 16.3318 18.1744 15.8982C18.3116 15.5455 18.4744 15.0164 18.5189 14.0409C18.5671 12.9864 18.5771 12.67 18.5771 10C18.5771 7.33 18.5671 7.01364 18.5189 5.95909C18.4744 4.98364 18.3116 4.45455 18.1744 4.10182C17.9925 3.63545 17.7771 3.30182 17.4271 2.95182C17.1043 2.62006 16.7114 2.36474 16.2771 2.20455C15.9244 2.06727 15.3953 1.90455 14.4198 1.86ZM9.10163 13.0827C9.81496 13.3797 10.6093 13.4197 11.3488 13.1961C12.0884 12.9725 12.7274 12.499 13.1567 11.8566C13.586 11.2142 13.779 10.4426 13.7026 9.67373C13.6262 8.90485 13.2853 8.18634 12.738 7.64091C12.3891 7.29225 11.9673 7.02528 11.5028 6.85922C11.0384 6.69317 10.5429 6.63215 10.0521 6.68056C9.56124 6.72897 9.08723 6.88562 8.66418 7.13921C8.24114 7.3928 7.87958 7.73704 7.60555 8.14714C7.33151 8.55723 7.15181 9.02299 7.07938 9.51087C7.00695 9.99876 7.04359 10.4966 7.18667 10.9687C7.32975 11.4407 7.57571 11.8751 7.90683 12.2407C8.23796 12.6062 8.64602 12.8938 9.10163 13.0827ZM6.74436 6.36545C7.22166 5.88816 7.78829 5.50955 8.4119 5.25124C9.03552 4.99293 9.70391 4.85998 10.3789 4.85998C11.0539 4.85998 11.7223 4.99293 12.3459 5.25124C12.9695 5.50955 13.5362 5.88816 14.0135 6.36545C14.4907 6.84275 14.8694 7.40938 15.1277 8.033C15.386 8.65662 15.5189 9.325 15.5189 10C15.5189 10.675 15.386 11.3434 15.1277 11.967C14.8694 12.5906 14.4907 13.1573 14.0135 13.6345C13.0495 14.5985 11.7421 15.14 10.3789 15.14C9.01569 15.14 7.7083 14.5985 6.74436 13.6345C5.78042 12.6706 5.23888 11.3632 5.23888 10C5.23888 8.63678 5.78042 7.3294 6.74436 6.36545ZM16.6589 5.62545C16.7772 5.51388 16.8719 5.37971 16.9374 5.23089C17.0029 5.08206 17.0378 4.92161 17.0402 4.75903C17.0426 4.59645 17.0123 4.43504 16.9512 4.28437C16.89 4.1337 16.7993 3.99683 16.6843 3.88185C16.5694 3.76688 16.4325 3.67614 16.2818 3.61502C16.1311 3.55389 15.9697 3.52361 15.8072 3.52598C15.6446 3.52835 15.4841 3.56332 15.3353 3.62881C15.1865 3.69431 15.0523 3.789 14.9407 3.90727C14.7237 4.1373 14.6049 4.44284 14.6095 4.75903C14.6142 5.07522 14.7418 5.37716 14.9654 5.60077C15.189 5.82437 15.491 5.95203 15.8072 5.95664C16.1233 5.96125 16.4289 5.84245 16.6589 5.62545Z"
                            fill="#FFD233"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.25618 0.06C7.32254 0.0109091 7.66254 0 10.3789 0C13.0953 0 13.4353 0.0118182 14.5007 0.06C15.5662 0.108182 16.2935 0.278182 16.9298 0.524545C17.5962 0.776364 18.2007 1.17 18.7007 1.67909C19.2098 2.17818 19.6025 2.78182 19.8535 3.44909C20.1007 4.08545 20.2698 4.81273 20.3189 5.87636C20.368 6.94455 20.3789 7.28455 20.3789 10C20.3789 12.7164 20.3671 13.0564 20.3189 14.1227C20.2707 15.1864 20.1007 15.9136 19.8535 16.55C19.6025 17.2174 19.2092 17.822 18.7007 18.3218C18.2007 18.8309 17.5962 19.2236 16.9298 19.4745C16.2935 19.7218 15.5662 19.8909 14.5025 19.94C13.4353 19.9891 13.0953 20 10.3789 20C7.66254 20 7.32254 19.9882 6.25618 19.94C5.19254 19.8918 4.46527 19.7218 3.82891 19.4745C3.16156 19.2236 2.55692 18.8302 2.05709 18.3218C1.54834 17.8224 1.15465 17.2181 0.903452 16.5509C0.657088 15.9145 0.487997 15.1873 0.438906 14.1236C0.389815 13.0555 0.378906 12.7155 0.378906 10C0.378906 7.28364 0.390724 6.94364 0.438906 5.87818C0.487088 4.81273 0.657088 4.08545 0.903452 3.44909C1.15502 2.78189 1.54901 2.17756 2.058 1.67818C2.55712 1.16955 3.16115 0.775858 3.828 0.524545C4.46436 0.278182 5.19163 0.109091 6.25527 0.06H6.25618ZM14.4198 1.86C13.3653 1.81182 13.0489 1.80182 10.3789 1.80182C7.70891 1.80182 7.39254 1.81182 6.338 1.86C5.36254 1.90455 4.83345 2.06727 4.48072 2.20455C4.01436 2.38636 3.68072 2.60182 3.33072 2.95182C2.99895 3.27459 2.74362 3.66753 2.58345 4.10182C2.44618 4.45455 2.28345 4.98364 2.23891 5.95909C2.19072 7.01364 2.18072 7.33 2.18072 10C2.18072 12.67 2.19072 12.9864 2.23891 14.0409C2.28345 15.0164 2.44618 15.5455 2.58345 15.8982C2.74345 16.3318 2.99891 16.7255 3.33072 17.0482C3.65345 17.38 4.04709 17.6355 4.48072 17.7955C4.83345 17.9327 5.36254 18.0955 6.338 18.14C7.39254 18.1882 7.708 18.1982 10.3789 18.1982C13.0498 18.1982 13.3653 18.1882 14.4198 18.14C15.3953 18.0955 15.9244 17.9327 16.2771 17.7955C16.7435 17.6136 17.0771 17.3982 17.4271 17.0482C17.7589 16.7255 18.0144 16.3318 18.1744 15.8982C18.3116 15.5455 18.4744 15.0164 18.5189 14.0409C18.5671 12.9864 18.5771 12.67 18.5771 10C18.5771 7.33 18.5671 7.01364 18.5189 5.95909C18.4744 4.98364 18.3116 4.45455 18.1744 4.10182C17.9925 3.63545 17.7771 3.30182 17.4271 2.95182C17.1043 2.62006 16.7114 2.36474 16.2771 2.20455C15.9244 2.06727 15.3953 1.90455 14.4198 1.86ZM9.10163 13.0827C9.81496 13.3797 10.6093 13.4197 11.3488 13.1961C12.0884 12.9725 12.7274 12.499 13.1567 11.8566C13.586 11.2142 13.779 10.4426 13.7026 9.67373C13.6262 8.90485 13.2853 8.18634 12.738 7.64091C12.3891 7.29225 11.9673 7.02528 11.5028 6.85922C11.0384 6.69317 10.5429 6.63215 10.0521 6.68056C9.56124 6.72897 9.08723 6.88562 8.66418 7.13921C8.24114 7.3928 7.87958 7.73704 7.60555 8.14714C7.33151 8.55723 7.15181 9.02299 7.07938 9.51087C7.00695 9.99876 7.04359 10.4966 7.18667 10.9687C7.32975 11.4407 7.57571 11.8751 7.90683 12.2407C8.23796 12.6062 8.64602 12.8938 9.10163 13.0827ZM6.74436 6.36545C7.22166 5.88816 7.78829 5.50955 8.4119 5.25124C9.03552 4.99293 9.70391 4.85998 10.3789 4.85998C11.0539 4.85998 11.7223 4.99293 12.3459 5.25124C12.9695 5.50955 13.5362 5.88816 14.0135 6.36545C14.4907 6.84275 14.8694 7.40938 15.1277 8.033C15.386 8.65662 15.5189 9.325 15.5189 10C15.5189 10.675 15.386 11.3434 15.1277 11.967C14.8694 12.5906 14.4907 13.1573 14.0135 13.6345C13.0495 14.5985 11.7421 15.14 10.3789 15.14C9.01569 15.14 7.7083 14.5985 6.74436 13.6345C5.78042 12.6706 5.23888 11.3632 5.23888 10C5.23888 8.63678 5.78042 7.3294 6.74436 6.36545ZM16.6589 5.62545C16.7772 5.51388 16.8719 5.37971 16.9374 5.23089C17.0029 5.08206 17.0378 4.92161 17.0402 4.75903C17.0426 4.59645 17.0123 4.43504 16.9512 4.28437C16.89 4.1337 16.7993 3.99683 16.6843 3.88185C16.5694 3.76688 16.4325 3.67614 16.2818 3.61502C16.1311 3.55389 15.9697 3.52361 15.8072 3.52598C15.6446 3.52835 15.4841 3.56332 15.3353 3.62881C15.1865 3.69431 15.0523 3.789 14.9407 3.90727C14.7237 4.1373 14.6049 4.44284 14.6095 4.75903C14.6142 5.07522 14.7418 5.37716 14.9654 5.60077C15.189 5.82437 15.491 5.95203 15.8072 5.95664C16.1233 5.96125 16.4289 5.84245 16.6589 5.62545Z"
                            fill="black"
                            fill-opacity="0.2"
                          />
                        </svg>
                      </a>
                      <a className="" href={`${value.linkedin}`}>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.80791 6.969H11.5219V8.819C12.0569 7.755 13.4289 6.799 15.4899 6.799C19.4409 6.799 20.3789 8.917 20.3789 12.803V20H16.3789V13.688C16.3789 11.475 15.8439 10.227 14.4819 10.227C12.5929 10.227 11.8079 11.572 11.8079 13.687V20H7.80791V6.969ZM0.948906 19.83H4.94891V6.799H0.948906V19.83ZM5.52191 2.55C5.52205 2.88528 5.45556 3.21724 5.32629 3.52659C5.19702 3.83594 5.00756 4.11651 4.76891 4.352C4.28531 4.83262 3.63072 5.10165 2.94891 5.1C2.2683 5.09954 1.61522 4.8312 1.13091 4.353C0.893118 4.11671 0.704292 3.83582 0.57525 3.52643C0.446208 3.21704 0.379485 2.88522 0.378906 2.55C0.378906 1.873 0.648906 1.225 1.13191 0.747C1.61579 0.268158 2.26915 -0.000299211 2.94991 2.50265e-07C3.63191 2.50265e-07 4.28591 0.269 4.76891 0.747C5.25091 1.225 5.52191 1.873 5.52191 2.55Z"
                            fill="#FFD233"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.80791 6.969H11.5219V8.819C12.0569 7.755 13.4289 6.799 15.4899 6.799C19.4409 6.799 20.3789 8.917 20.3789 12.803V20H16.3789V13.688C16.3789 11.475 15.8439 10.227 14.4819 10.227C12.5929 10.227 11.8079 11.572 11.8079 13.687V20H7.80791V6.969ZM0.948906 19.83H4.94891V6.799H0.948906V19.83ZM5.52191 2.55C5.52205 2.88528 5.45556 3.21724 5.32629 3.52659C5.19702 3.83594 5.00756 4.11651 4.76891 4.352C4.28531 4.83262 3.63072 5.10165 2.94891 5.1C2.2683 5.09954 1.61522 4.8312 1.13091 4.353C0.893118 4.11671 0.704292 3.83582 0.57525 3.52643C0.446208 3.21704 0.379485 2.88522 0.378906 2.55C0.378906 1.873 0.648906 1.225 1.13191 0.747C1.61579 0.268158 2.26915 -0.000299211 2.94991 2.50265e-07C3.63191 2.50265e-07 4.28591 0.269 4.76891 0.747C5.25091 1.225 5.52191 1.873 5.52191 2.55Z"
                            fill="black"
                            fill-opacity="0.2"
                          />
                        </svg>
                      </a>
                      <a className="mt-1" href={`${value.email}`}>
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.3789 4.608V12.75C20.379 13.5801 20.0614 14.3788 19.4912 14.9822C18.9211 15.5856 18.1417 15.948 17.3129 15.995L17.1289 16H3.62891C2.79877 16.0001 2.00008 15.6824 1.39668 15.1123C0.793273 14.5422 0.430905 13.7628 0.383906 12.934L0.378906 12.75V4.608L10.0309 9.664C10.1383 9.72024 10.2577 9.74962 10.3789 9.74962C10.5001 9.74962 10.6195 9.72024 10.7269 9.664L20.3789 4.608ZM3.62891 2.36051e-08H17.1289C17.9345 -9.70147e-05 18.7114 0.298996 19.3089 0.839267C19.9065 1.37954 20.2821 2.12248 20.3629 2.924L10.3789 8.154L0.394906 2.924C0.47243 2.15431 0.821956 1.43752 1.38066 0.902463C1.93936 0.367409 2.67059 0.049187 3.44291 0.00500014L3.62891 2.36051e-08H17.1289H3.62891Z"
                            fill="#FFD233"
                          />
                          <path
                            d="M20.3789 4.608V12.75C20.379 13.5801 20.0614 14.3788 19.4912 14.9822C18.9211 15.5856 18.1417 15.948 17.3129 15.995L17.1289 16H3.62891C2.79877 16.0001 2.00008 15.6824 1.39668 15.1123C0.793273 14.5422 0.430905 13.7628 0.383906 12.934L0.378906 12.75V4.608L10.0309 9.664C10.1383 9.72024 10.2577 9.74962 10.3789 9.74962C10.5001 9.74962 10.6195 9.72024 10.7269 9.664L20.3789 4.608ZM3.62891 2.36051e-08H17.1289C17.9345 -9.70147e-05 18.7114 0.298996 19.3089 0.839267C19.9065 1.37954 20.2821 2.12248 20.3629 2.924L10.3789 8.154L0.394906 2.924C0.47243 2.15431 0.821956 1.43752 1.38066 0.902463C1.93936 0.367409 2.67059 0.049187 3.44291 0.00500014L3.62891 2.36051e-08H17.1289H3.62891Z"
                            fill="black"
                            fill-opacity="0.2"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  {/* <div className="space-y-1 flex flex-col items-center">
                    <h1 className="text-yellow-500 font-bold text-lg sm:text-xl text-center">
                      {value.name}
                    </h1>
                    <h2 className="text-white font-semibold text-base sm:text-lg text-center">
                      {value.designation}
                    </h2>
                  </div> */}
                  {/* <div className="flex flex-col items-center"> */}
                  <p className="text-white text-justify text-sm xl:text-base">
                    "{value.about}"
                  </p>
                  {/* </div> */}

                  {/* <div className="flex space-x-3">
                    <a className="" href="">
                      <img className="w-8" src={Email} alt="" />
                    </a>
                    <a className="" href="">
                      <img className="w-8" src={Insta} alt="" />
                    </a>
                    <a className="" href="">
                      <img className="w-8" src={Git} alt="" />
                    </a>
                    <a className="" href="">
                      <img className="w-8" src={Linkedin} alt="" />
                    </a>
                  </div> */}

                  {/* <div className="flex space-x-4">
                    <Link
                      className="text-white"
                      onClick={() => deleteMember(value.email)}
                      to=""
                    >
                      <img className="w-6" src={Delete} alt="dlt" />
                    </Link>
                    <div
                      className="text-white"
                      onClick={() => updateCard(key, value._id)}
                      to=""
                    >
                      <img className="w-6" src={Edit} alt="edit" />
                    </div>
                  </div> */}
                </div>
                <div className="flex justify-between">
                  <div
                    className="text-white px-4 py-2 text-sm cursor-pointer hover:text-yellow-400"
                    onClick={() => updateCard(key, value._id)}
                  >
                    EDIT
                  </div>
                  <Link
                    className="text-white"
                    onClick={() => deleteMember(value.email)}
                    to=""
                  >
                    <div className="text-white px-4 py-2 text-sm hover:text-red-400">
                      DELETE
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {/* </div> */}

      {/* modal */}
      {showModal.show ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#1C1C1C] h-[450px] p-7 overflow-auto rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                  <h3 className="text-2xl text-white font-semibold">
                    Edit Member Details
                  </h3>
                  {/* <button
                    className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button> */}
                </div>
                {/*body*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Name</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={mem.name}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">
                      Roll Number
                    </h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Roll Number"
                      type="text"
                      name="roll"
                      value={mem.roll}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Domain</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Domain"
                      type="text"
                      name="domain"
                      value={mem.domain}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Branch</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Branch"
                      type="text"
                      name="branch"
                      value={mem.branch}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">
                      Designation
                    </h2> */}
                    <select
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      id=""
                      name="designation"
                      value={mem.designation}
                      onChange={onChange}
                    >
                      <option selected hidden>
                        Designation
                      </option>
                      <option value="member" className="text-black">
                        Member
                      </option>
                      <option value="oc" className="text-black">
                        OC
                      </option>
                      <option value="coordinator" className="text-black">
                        Coordinator
                      </option>
                      <option
                        value="assistant coordinator"
                        className="text-black"
                      >
                        Assistant Coordinator
                      </option>
                      <option value="alumni" className="text-black">
                        Alumni
                      </option>
                      <option value="admin" className="text-black">
                        Admin
                      </option>
                    </select>
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Year</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Year"
                      type="text"
                      name="year"
                      value={mem.year}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Image</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Image Link"
                      type="text"
                      name="img"
                      value={mem.img}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">About</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="About"
                      type="text"
                      name="about"
                      value={mem.about}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Linkdin</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Linkedin"
                      type="text"
                      name="linkedin"
                      value={mem.linkedin}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Email</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Email"
                      type="text"
                      name="email"
                      value={mem.email}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">
                      Instagram
                    </h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Instagram"
                      type="text"
                      name="insta"
                      value={mem.insta}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    {/* <h2 className="md:text-xl p-1 my-1 text-white">Github</h2> */}
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Github"
                      type="text"
                      name="github"
                      value={mem.github}
                      onChange={onChange}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex justify-between pt-5 pr-5">
                  <div className="h-1"></div>
                  <div>
                    <button
                      className="text-white background-transparent px-6 py-2 hover:text-red-500 text-xs font-semibold outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={closeModal}
                    >
                      DISCARD{" "}
                    </button>
                    <button
                      className="bg-yellow-500 text-black hover:bg-black hover:text-yellow-500 text-lg font-semibold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                      type="button"
                      onClick={editMembers}
                    >
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default AdminMembers;
