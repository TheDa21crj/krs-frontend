import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PP from "../../public/pp.jpeg";
import Edit from "../../public/edit.png";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import githubadmin from "../../public/githubadmin.png";
import instaadmin from "../../public/instaadmin.png";
import linkedinadmin from "../../public/linkedinadmin.png";
import mailadmin from "../../public/mailadmin.png";
// const card = [
//   {
//     img1: "./mlproject.png",
//     heading: "YouTube Recommendation System",
//     description:
//       "The YouTube Recommendation System project aims to build a personalized video recommendation system using machine learning algorithms to suggest relevant videos to users based on their viewing history, search queries, and other activities on the platform. The final product will be a web-based",
//   },
//   {
//     img1: "./mlproject.png",
//     heading: "YouTube Recommendation System",
//     description:
//       "The YouTube Recommendation System project aims to build a personalized video recommendation system using machine learning algorithms to suggest relevant videos to users based on their viewing history, search queries, and other activities on the platform. The final product will be a web-based",
//   },
//   {
//     img1: "./mlproject.png",
//     heading: "YouTube Recommendation System",
//     description:
//       "The YouTube Recommendation System project aims to build a personalized video recommendation system using machine learning algorithms to suggest relevant videos to users based on their viewing history, search queries, and other activities on the platform. The final product will be a web-based",
//   },
// ];

function MemberProfile() {
  // modal state
  // const [showCardData, setShowCardData] = useState(false);
  const [cards, setCard] = useState([]);
  // const [showCard, setShowCard] = useState({
  //   image: "",
  //   name: "",
  //   description: "",
  //   member: [],
  //   tag: [],
  // });

  const [showModal, setShowModal] = useState(false);
  const [mem, setMem] = useState({});
  const [showData, setData] = useState({
    bio: "",
    linkdin: "",
    instagram: "",
    github: "",
    image: "",
  });

  const authCtx = useContext(AuthContext);
  async function makereq() {
    try {
      const resp = await axios.post(
        `/api/members/one`,
        { email: authCtx.user.email },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      const data = resp.data;

      setMem(data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    makereq();
  }, [showModal]);
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...showData, [name]: value });
  };

  const PostData = async () => {
    let dataAdd = {
      bio: showData.bio,
      linkedin: showData.linkdin,
      insta: showData.instagram,
      github: showData.github,
      image: showData.image,
    };

    const resp = await axios.post(`api/members/MemUpdate`, dataAdd, {
      headers: { Authorization: `${authCtx.token}` },
    });
    makereq();
    // setShowModal(false);
  };

  async function makeReq() {
    try {
      const resp = await axios.post(
        `/api/members/memberProject`,
        { email: authCtx.user.email },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      const data = resp.data;
      console.log(data);
      setCard(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    makeReq();
  }, []);

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setShowCard({ ...showCard, [name]: value });
  // };

  return (
    <div className=" px-10  md:mx-col  justify-center items-center overflow-x-hidden overflow-y-hidden inset-0 z-50">
      <div className="py-4  rounded-xl">
        <h1 className="p-2 text-3xl pl-[120px] md:px-4 lg:px-1  font-bold font-mont text-yellow-500">
          Member Profile
        </h1>
      </div>
      {mem && (
        <>
          <div className="flex-1 lg:flex-row px-4 rounded-xl bg-[#1C1C1C] h-[320px] ml-2">
            <div className=" w-full  flex flex-row items-center">
              <img
                className="w-[196px] h-[200px] rounded-xl  bg-blue border mt-10 ml-6"
                src={mem.image}
                alt="image"
              />

              <div className="ml-10 flex flex-col ">
                <h2 className="text-[#60FF00] text-sm font-mont  border border-[#60FF00] rounded-xl px-2 py-1 w-20 text-center mt-12">
                  ADMIN
                </h2>
                <h1 className="text-yellow-500 text-center text-3xl font-bold pt-4 pb-1 ml-0 pl-0 mr-auto ">
                  {mem.name}
                </h1>
                <h1 className="font-mont text-white text-2xl  mb-auto">
                  2nd Year-{mem.domain}
                </h1>
                <div className="whitespace-pre-wrap sm:text-md  rounded bg-[#1C1C1C] text-white font-mont  pb-10">
                  {mem.bio}
                </div>
              </div>
              <span className="flex flex-row ml-auto mb-auto pt-8">
                <a className="" href={mem.github}>
                  <img className="w-4 h-4 m-2" src={githubadmin}></img>
                </a>
                <a className="" href={mem.insta}>
                  <img className="w-4 h-4 m-2" src={instaadmin}></img>
                </a>
                <a className="" href={mem.linkdin}>
                  <img className="w-4 h-4 m-2" src={linkedinadmin}></img>
                </a>
                <a className="" href={mem.email}>
                  <img className="w-4 h-4 m-2" src={mailadmin}></img>
                </a>
              </span>
            </div>

            <div
              className="text-white font-mont md:ml-[630px]  pt-4 pb-4 "
              onClick={() => setShowModal(true)}
            >
              EDIT PROFILE
            </div>
          </div>
        </>
      )}
      {/* modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#1C1C1C] rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5  rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Edit member
                  </h3>
                </div>
                {/*body*/}
                <div className="grid grid-cols-3 mt-8">
                  <div className="py-2 px-4">
                    <input
                      className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500 "
                      placeholder="Enter About"
                      type="text"
                      defaultValue={mem.bio}
                      name="bio"
                      onChange={onChange}
                    />
                  </div>
                  <div className="py-2 px-4">
                    <input
                      className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
                      placeholder="Enter Linkedin link"
                      type="text"
                      name="linkdin"
                      defaultValue={mem.linkedin}
                      onChange={onChange}
                    />
                  </div>
                  <div className="py-2 px-4">
                    <input
                      className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
                      placeholder="Enter Instageam link"
                      type="text"
                      name="instagram"
                      defaultValue={mem.insta}
                      onChange={onChange}
                    />
                  </div>
                  <div className="py-2 px-4">
                    <input
                      className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500 mt-6"
                      placeholder="Enter Github link"
                      type="text"
                      name="github"
                      defaultValue={mem.github}
                      onChange={onChange}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close{" "}
                  </button>
                  <button
                    className="bg-yellow-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      PostData();
                      setShowModal(false);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div>
        {/* card */}
        <h1 className="text-yellow-500 font-mont mt-[60px] mb-[30px] font-semibold text-3xl">
          Working Projects
        </h1>
        <div className="grid grid-cols-1 my-[20px] w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-4">
          {" "}
          {cards.map((projects) => {
            return (
              <>
                {projects.project.map((cardData, index) => {
                  return (
                    <div
                      className="bg-[#1C1C1C] border rounded-xl border-[#1C1C1C]  my-[20px] w-[400px]"
                      key={index}
                    >
                      <div className="">
                        <img
                          src={cardData.image}
                          className="border-none rounded-xl h-[236px] object-cover w-[400px]"
                        />
                      </div>
                      <div className="">
                        <h1 className="text-yellow-500 font-mont  p-4 font-semibold text-1xl">
                          {cardData.name}
                        </h1>
                      </div>
                      <div className="flex flex-row">
                        <span className="bg-[#535353] text-white p-2 ml-4 rounded-xl">
                          {cardData.tag}
                        </span>
                      </div>
                      <div className="">
                        <pre className="whitespace-pre-wrap text-white font-mont  p-4">
                          {cardData.description}
                        </pre>
                      </div>
                      <div className="flex flex-row pb-4">
                        {cardData.member.map((memberData, index) => {
                          return (
                            <>
                              <span
                                className="bg-[#535353] text-white p-2 ml-4 rounded-xl flex flex-row"
                                key={index}
                              >
                                <img
                                  className="border-none rounded-xl"
                                  src={memberData.image}
                                />
                                <div>{memberData.name}</div>
                              </span>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MemberProfile;
