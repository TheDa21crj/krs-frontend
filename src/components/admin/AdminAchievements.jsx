import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./AdminAchievement.css";
import "../../App.css";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import AdminAchievementModal from "./AdminAchievementModal";

function AdminAchievements() {
  const [achievements, setAchievements] = useState([]);

  // const [achievements,setAchievements]=useState([])
  const [ach, setAch] = useState({
    _id: "",
    teamname: "",
    image1: "",
    image2: "",
    position: "",
    year: "",
    competitionname: "",
    teammembers: "",
    location: "",
  });
  const [currentAchievement, setCurrentAchievement] = useState({
    _id: "",
    teamname: "",
    image1: "",
    image2: "",
    position: "",
    year: "",
    competitionname: "",
    teammembers: "",
    location: "",
  });
  const [showModal, setShowModal] = useState({ show: false, index: null });
  const [show, set] = useState("");
  const authCtx = useContext(AuthContext);

  //fetch

  useEffect(() => {
    async function makereq() {
      try {
        const resp = await axios.get("/api/achievements/getAllAchievement");
        const data = resp.data;

        setAchievements(achievements.concat(data.achieve));
      } catch (e) {
        console.log("data cant be fetch correctly");
      }
    }

    makereq();
  }, []);

  //  add events
  const handleClick = async (e) => {
    e.preventDefault();

    const {
      teamname,
      image1,
      image2,
      position,
      password,
      year,
      competitionname,
      teammembers,
      location,
    } = ach;
    if (
      teamname !== "" &&
      image1 !== "" &&
      image2 !== "" &&
      position !== "" &&
      password !== "" &&
      year !== "" &&
      competitionname !== "" &&
      teammembers !== "" &&
      location !== ""
    ) {
      try {
        const resp = await axios.post(
          `/api/achievements/CreateAchievements`,
          ach,
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );
        console.log(resp.data);

        const id = resp.data.data;
        console.log("id", id);
        ach._id = id;
        console.log("ach.id", ach._id);
        setAch(ach);
        console.log("ach", ach);
        setAchievements([...achievements, ach]);
      } catch (err) {
        console.log(err);
      }

      set("");
      setAch({
        teamname: "",
        image1: "",
        image2: "",
        position: "",
        year: "",
        competitionname: "",
        teammembers: "",
        location: "",
      });
      // set("");
    } else {
      set("Please fill all the fields");
    }
  };

  // console.log(ach)
  const onChange = (e) => {
    const value = e.target.value;
    setAch({ ...ach, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentAchievement({
      ...currentAchievement,
      [e.target.name]: e.target.value,
    });
  };
  // deleting
  const deleteAchievement = async (teamname) => {
    try {
      const newAchievements = achievements.filter((achievement) => {
        return achievement.teamname !== teamname;
      });
      setAchievements(newAchievements);
      const resp = await axios.delete(
        `/api/achievements/deleteAchievement/${teamname}`,

        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  // editing
  const updateCard = (i) => {
    setCurrentAchievement({
      _id: achievements[i]._id,
      teamname: achievements[i].teamname,
      image1: achievements[i].image1,
      image2: achievements[i].image2,
      position: achievements[i].position,
      year: achievements[i].year,
      competitionname: achievements[i].competitionname,
      teammembers: achievements[i].teammembers,
      location: achievements[i].location,
    });

    setShowModal({ show: true, index: i });
  };

  const editAchievements = async () => {
    const updatedcard = {
      _id: currentAchievement._id,
      teamname: currentAchievement.teamname,
      image1: currentAchievement.image1,
      image2: currentAchievement.image2,
      position: currentAchievement.position,
      year: currentAchievement.year,
      competitionname: currentAchievement.competitionname,
      teammembers: currentAchievement.teammembers,
      location: currentAchievement.location,
    };
    achievements[showModal.index] = updatedcard;

    console.log("yup");
    try {
      const resp = await axios.patch(
        `/api/achievements/editAchievement/${currentAchievement._id}`,
        updatedcard,
        { headers: { Authorization: `${authCtx.token}` } }
      );

      console.log(resp.data);
      setAchievements(achievements);
    } catch (e) {
      console.log(e);
    }

    setCurrentAchievement({
      teamname: "",
      image1: "",
      image2: "",
      position: "",
      year: "",
      competitionname: "",
      teammembers: "",
      location: "",
    });
    setShowModal({ show: false, index: null });
  };

  // modal state
  const closeModal = () => {
    setCurrentAchievement({
      teamname: "",
      image1: "",
      image2: "",
      position: "",
      year: "",
      competitionname: "",
      teammembers: "",
      location: "",
    });
    setShowModal({ show: false, index: null });
  };

  return (
    <div className="flex-1 mx-6 md:mx-20 justify-center items-center">
      <div className="py-4  rounded-xl">
        <h1 className="p-2 text-3xl pl-[120px] md:px-4 lg:px-1 text-3xl font-bold font-mont text-yellow-500">
          Achievements
        </h1>
      </div>
      {/* form */}
      <div className="py-4 px-8 rounded-xl bg-[#1C1C1C]">
        <h1 className="p-4 text-xl sm:text-xl font-bold font-mont text-white">
          Add an achievement
        </h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="py-2 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Team Name
            </h2> */}
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mx-1 rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Team Name"
              type="text"
              name="teamname"
              value={ach.teamname}
              onChange={onChange}
            />
          </div>
          <div className="py-2 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Event Name1
            </h2> */}
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Competition Name"
              type="text"
              name="competitionname"
              value={ach.competitionname}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="py-4 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Event Name2
            </h2> */}
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Team Members"
              type="text"
              name="teammembers"
              value={ach.teammembers}
              onChange={onChange}
            />
          </div>
          <div className="py-4 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Year</h2> */}
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Year"
              type="number"
              name="year"
              value={ach.year}
              onChange={onChange}
            />
          </div>
          <div className="py-4 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Image 1</h2> */}
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Image 1 link"
              type="text"
              name="image1"
              value={ach.image1}
              onChange={onChange}
            />
          </div>
          <div className="py-4 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Image 2</h2> */}
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mx-1 rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Image 2 Link"
              type="text"
              name="image2"
              value={ach.image2}
              onChange={onChange}
            />
          </div>
          <div className="py-4 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Position</h2> */}
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Position"
              type="text"
              name="position"
              value={ach.position}
              onChange={onChange}
            />
          </div>
          <div className="py-4 px-4">
            {/* <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Event Place
            </h2> */}
            <input
              className="sm:text-md w-full py-1 px-1 pl-4 mx-1 h-[45px] placeholder-white rounded bg-[#1C1C1C] text-white font-mont border border-white-500"
              placeholder="Location"
              type="text"
              name="location"
              value={ach.location}
              onChange={onChange}
            />
          </div>
        </div>
        <br />
        {show ? <p className="alertText">{show}</p> : ""}
        <button
          type="submit"
          onClick={handleClick}
          className="ml-[20%] text-xl py-1 px-2 h-[60px] font-medium font-mont my-6 bg-yellow-500 rounded-md text-black md:ml-[25%] lg:ml-[76%] "
        >
          Add achievement
        </button>
      </div>

      {/* cards */}
      <h1 className="text-yellow-500 font-mont mt-[60px] mb-[30px] font-semibold text-3xl">
        Previous Achievements
      </h1>
      <div className="grid grid-cols-1 my-[20px] w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {achievements.map((achievementsData, i) => {
          return (
            <div className="bg-[#1C1C1C] border rounded-xl border-[#1C1C1C] mx-[8px] my-[20px]">
              <img
                key={i}
                src={achievementsData.image1}
                className="border rounded-xl h-[400px] object-cover w-[440px]"
              />
              <div className="flex flex-row py-2 flex-wrap mx-4">
                <h1 className="text-yellow-500 font-mont mt-[30px] mr-[26px] font-semibold text-3xl">
                  {achievementsData.teamname}
                </h1>
                <h2 className="text-[#60FF00] text-sm font-mont mt-[30px] border border-[#60FF00] rounded-xl px-4 py-2">
                  {achievementsData.position} Position
                </h2>
              </div>
              <div className="mx-2">
                <h6 className="text-white font-sm">
                  Team members : {achievementsData.teammembers}
                </h6>
              </div>
              <div className="flex flex-row flex-grow justify-between mx-4">
                <div className="flex flex-row my-4 text-white">
                  {/* add svg */}
                  <div className="mr-[5px] mt-[3px] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      // fill="yellow-500"
                      viewBox="0 0 14 20"
                      // stroke="currentColor"
                      // stroke-width="1"
                    >
                      <path
                        className="fill-yellow-500 stroke-yellow-500 mr-2 "
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        d="M 7 0 C 3.13 0 0 3.13 0 7 C 0 12.25 7 20 7 20 C 7 20 14 12.25 14 7 C 14 3.13 10.87 0 7 0 Z M 7 9.5 C 6.33696 9.5 5.70107 9.23661 5.23223 8.76777 C 4.76339 8.29893 4.5 7.66304 4.5 7 C 4.5 6.33696 4.76339 5.70107 5.23223 5.23223 C 5.70107 4.76339 6.33696 4.5 7 4.5 C 7.66304 4.5 8.29893 4.76339 8.76777 5.23223 C 9.23661 5.70107 9.5 6.33696 9.5 7 C 9.5 7.66304 9.23661 8.29893 8.76777 8.76777 C 8.29893 9.23661 7.66304 9.5 7 9.5 Z"
                      />
                    </svg>
                  </div>
                  <div className="">{achievementsData.location}</div>
                </div>
                <div className="flex flex-row my-4 mr-2 text-white">
                  {/* add svg  */}
                  <div className="mr-[5px] mt-[3px] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      // fill="yellow-500"
                      viewBox="0 0 18 20"
                      // stroke="currentColor"
                      // stroke-width="1"
                    >
                      <path
                        className="fill-[#FFB742] mx-2 stroke-yellow-500"
                        // stroke-linecap="round"
                        // stroke-linejoin="round"
                        d="M 5 12 C 4.71667 12 4.479 11.904 4.287 11.712 C 4.095 11.52 3.99934 11.2827 4 11 C 4 10.7167 4.096 10.479 4.288 10.287 C 4.48 10.095 4.71734 9.99933 5 10 C 5.28334 10 5.521 10.096 5.713 10.288 C 5.905 10.48 6.00067 10.7173 6 11 C 6 11.2833 5.904 11.521 5.712 11.713 C 5.52 11.905 5.28267 12.0007 5 12 Z M 9 12 C 8.71667 12 8.479 11.904 8.287 11.712 C 8.095 11.52 7.99934 11.2827 8 11 C 8 10.7167 8.096 10.479 8.288 10.287 C 8.48 10.095 8.71734 9.99933 9 10 C 9.28334 10 9.521 10.096 9.713 10.288 C 9.905 10.48 10.0007 10.7173 10 11 C 10 11.2833 9.904 11.521 9.712 11.713 C 9.52 11.905 9.28267 12.0007 9 12 Z M 13 12 C 12.7167 12 12.479 11.904 12.287 11.712 C 12.095 11.52 11.9993 11.2827 12 11 C 12 10.7167 12.096 10.479 12.288 10.287 C 12.48 10.095 12.7173 9.99933 13 10 C 13.2833 10 13.521 10.096 13.713 10.288 C 13.905 10.48 14.0007 10.7173 14 11 C 14 11.2833 13.904 11.521 13.712 11.713 C 13.52 11.905 13.2827 12.0007 13 12 Z M 2 20 C 1.45 20 0.979002 19.804 0.587002 19.412 C 0.195002 19.02 -0.000664969 18.5493 0.00000169779 18 V 4 C 0.00000169779 3.45 0.196002 2.979 0.588002 2.587 C 0.980002 2.195 1.45067 1.99933 2 2 H 3 V 0 H 5 V 2 H 13 V 0 H 15 V 2 H 16 C 16.55 2 17.021 2.196 17.413 2.588 C 17.805 2.98 18.0007 3.45067 18 4 V 18 C 18 18.55 17.804 19.021 17.412 19.413 C 17.02 19.805 16.5493 20.0007 16 20 H 2 Z M 2 18 H 16 V 8 H 2 V 18 Z"
                      />
                    </svg>
                  </div>
                  <div className="">{achievementsData.location}</div>
                </div>
              </div>
              <div className="flex flex-row flex-wrap justify-between mx-[7%] my-4">
                <div className="text-white" onClick={() => updateCard(i)}>
                  <h2 className="font-mont text-white hover:text-yellow-500 active:text-yellow-500">
                    EDIT
                  </h2>
                </div>
                <div
                  className="text-white"
                  onClick={() => deleteAchievement(achievementsData.teamname)}
                >
                  <h2 className="font-mont text-slate-400">DELETE</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* modal */}
      {showModal.show ? (
        <>
          {/*  */}
          <div className="">
            <AdminAchievementModal
              ach={currentAchievement}
              closeModal={closeModal}
              editAchievements={editAchievements}
              onChange={handleChange}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default AdminAchievements;
