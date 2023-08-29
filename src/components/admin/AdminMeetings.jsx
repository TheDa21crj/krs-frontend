import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import AdminMeetingModal from "./AdminMeetingModal";
import AdminMeetingMom from "./AdminMeetingMom";
const toTimeString = (date) => {
  const d = new Date(date);
  let str = "";
  if (d.getHours() < 10) str += "0";
  str += d.getHours();
  str += ":";
  if (d.getMinutes() < 10) str += "0";
  str += d.getMinutes();
  return str;
};

const toDateString = (date) => {
  const d = new Date(date);
  let str = "";
  if (d.getDate() < 10) str += "0";
  str += d.getDate();
  str += "/";
  if (d.getMonth() < 10) str += "0";
  str += d.getMonth();
  str += "/";
  str += d.getFullYear();
  return str;
};

function AdminMeetings() {
  const [meetings, setMeetings] = useState([]);
  const [meet, setMeet] = useState({
    id: "",
    title: "",
    description: "",
    time: "",
    date: "",
    mode: "",
    venue: "",
  });
  const [currentMeet, setCurrentMeet] = useState({
    id: "",
    title: "",
    description: "",
    time: "",
    date: "",
    mode: "",
    venue: "",
    mom: "",
  });
  const [showModal, setShowModal] = useState({
    show: false,
    index: null,
    id: null,
  });
  const [show, set] = useState("");
  const [momdata, setmomdata] = useState({
    show: false,
    index: null,
  });
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function makereq() {
      try {
        const resp = await axios.get("/api/meetings/");
        const data = resp.data;
        let arr = [];
        for (const x of data) {
          let ob = {
            id: x._id,
            title: x.title,
            description: x.description,
            time: toTimeString(x.dateTime),
            date: toDateString(x.dateTime),
            mode: x.mode,
            venue: x.venue,
            mom: x.mom,
          };
          arr.push(ob);
        }
        console.log(arr);
        setMeetings(meetings.concat(arr));
      } catch (e) {
        console.log(e);
      }
    }

    makereq();
  }, []);
  //add a meeting
  const handleClick = async (e) => {
    e.preventDefault();
    const { title, description, time, date, mode, venue } = meet;
    if (
      title !== "" &&
      description !== "" &&
      time !== "" &&
      date !== "" &&
      mode !== "" &&
      venue !== ""
    ) {
      try {
        const resp = await axios.post(
          "/api/meetings/add",
          { ...meet, date: Date(date) },
          {
            headers: { Authorization: `${authCtx.token}` },
          }
        );
        const id = resp.data.data;
        meet.id = id;
        setMeet(meet);
        setMeetings([...meetings, meet]);
      } catch (err) {
        console.log(err);
      }
      setMeet({
        title: "",
        description: "",
        time: "",
        date: "",
        mode: "",
        venue: "",
      });
      set("");
    } else {
      set("please fill all the fields");
    }
  };
  const onChange = (e) => {
    const value = e.target.value;
    setMeet({ ...meet, [e.target.name]: e.target.value });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setCurrentMeet({ ...currentMeet, [e.target.name]: e.target.value });
  };
  //deleting
  const deleteMeeting = async (id) => {
    try {
      const newMeetings = meetings.filter((meeting) => {
        return meeting.id !== id;
      });

      const resp = await axios.delete(
        `/api/meetings/delete/${id}`,

        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      setMeetings(newMeetings);
    } catch (e) {
      console.log(e);
    }
  };

  const updateCard = (i) => {
    setCurrentMeet({
      id: meetings[i].id,
      title: meetings[i].title,
      description: meetings[i].description,
      time: meetings[i].time,
      date: meetings[i].date,
      mode: meetings[i].mode,
      venue: meetings[i].venue,
      mom: meetings[i].mom,
    });
    setShowModal({ show: true, index: i });
  };
  const updateMom = (i) => {
    setCurrentMeet({
      id: meetings[i].id,
      title: meetings[i].title,
      description: meetings[i].description,
      time: meetings[i].time,
      date: meetings[i].date,
      mode: meetings[i].mode,
      venue: meetings[i].venue,
      mom: meetings[i].mom,
    });
    setmomdata({ show: true, index: i });
  };
  const editMeetings = async () => {
    const updatedcard = {
      id: currentMeet.id,
      title: currentMeet.title,
      description: currentMeet.description,
      time: currentMeet.time,
      date: currentMeet.date,
      mode: currentMeet.mode,
      venue: currentMeet.venue,
      mom: currentMeet.mom,
    };
    meetings[showModal.index] = updatedcard;
    try {
      console.log(updatedcard);
      const resp = await axios.patch(
        "/api/meetings/update",
        { ...updatedcard, date: Date(updateCard.date) },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      setMeetings(meetings);
    } catch (e) {
      console.log(e);
    }
    setCurrentMeet({
      title: "",
      description: "",
      time: "",
      date: "",
      mode: "",
      venue: "",
    });
    setShowModal({ show: false, index: null });
  };
  //modal state
  const closeModal = () => {
    setCurrentMeet({
      title: "",
      description: "",
      time: "",
      date: "",
      mode: "",
      venue: "",
    });
    setShowModal({
      show: false,
      index: null,
    });
    setmomdata({
      show: false,
      index: null,
    });
  };

  return (
    <div className="flex-1 mx-6 md:mx-20 justify-center items-center">
      <div className="py-4  rounded-xl">
        <h1 className="p-2 text-3xl pl-[120px] md:px-4 lg:px-1 text-3xl font-bold font-mont text-yellow-500">
          Meetings
        </h1>
      </div>
      {/* form */}
      <div className="py-4 px-8 rounded-xl bg-[#1C1C1C]">
        <h1 className="p-4 text-xl sm:text-xl font-bold font-mont text-white">
          Add a meeting
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="py-2 px-4">
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mx-1 rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Meeting Name"
              type="text"
              name="title"
              value={meet.title}
              onChange={onChange}
            />
          </div>
          <div className="py-2 px-4">
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Description"
              type="text"
              name="description"
              value={meet.description}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="py-3 px-4">
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mx-1 rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Time"
              type="text"
              name="time"
              value={meet.time}
              onChange={onChange}
            />
          </div>
          <div className="py-3 px-4">
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Date"
              type="date"
              name="date"
              value={meet.date}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="py-3 px-4">
            <select
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              id=""
              name="mode"
              value={meet.mode}
              onChange={onChange}
            >
              <option selected hidden className="text-slate-300">
                Mode
              </option>

              <option value="Online" className="text-slate-300">
                Online
              </option>
              <option value="Offline" className="text-slate-300">
                Offline
              </option>
            </select>
          </div>
          <div className="py-3 px-4">
            <input
              className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
              placeholder="Venue/Meeting Link"
              type="text"
              name="venue"
              value={meet.venue}
              onChange={onChange}
            />
          </div>
        </div>
        {show ? <p className="alertText">{show}</p> : ""}
        <button
          type="submit"
          onClick={handleClick}
          className="ml-[20%] text-xl py-1 px-3 h-[60px] font-medium font-mont my-3 bg-yellow-500 rounded-md text-black md:ml-[25%] lg:ml-[79%] "
        >
          Add meeting
        </button>
      </div>

      {/* cards */}

      <div className="py-4  rounded-xl">
        <h1 className="p-2 text-3xl pl-[120px] md:px-4 lg:px-1 text-3xl font-bold font-mont text-yellow-500">
          All Meetings
        </h1>
      </div>
      {meetings.map((meetingsData, i) => {
        return (
          <div className="px-8 rounded-xl bg-[#1C1C1C] mb-4">
            <div className="flex flex-row flex-wrap">
              <div className="">
                <h1 className="p-2 text-3xl pl-[120px] md:px-4 lg:px-1 text-3xl font-bold font-mont text-yellow-500">
                  {meetingsData.title}
                </h1>
                <p className="sm:text-md  p-2 pl-1 h-[45px] mx-1 rounded bg-[#1C1C1C] text-white  font-mont ">
                  {meetingsData.date}-{meetingsData.time}
                </p>
              </div>
              <div className="flex flex-row flex-wrap  gap-12 p-4 ml-auto">
                <div className="text-white" onClick={() => updateMom(i)}>
                  <h2 className="font-mont text-white hover:text-yellow-500 active:text-yellow-500">
                    OPEN MOM
                  </h2>
                </div>

                <div className="text-white" onClick={() => updateCard(i)}>
                  <h2 className="font-mont text-white hover:text-yellow-500 active:text-yellow-500">
                    EDIT
                  </h2>
                </div>
                <div
                  className="text-white"
                  onClick={() => deleteMeeting(meetingsData.id)}
                >
                  <h2 className="font-mont text-white hover:text-yellow-500 active:text-yellow-500">
                    DELETE
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* modal */}
      {showModal.show ? (
        <>
          {/*  */}
          <div className="">
            <AdminMeetingModal
              meet={currentMeet}
              closeModal={closeModal}
              editMeetings={editMeetings}
              onChange={handleChange}
            />
          </div>
        </>
      ) : null}
      {momdata.show ? (
        <>
          <AdminMeetingMom
            meet={currentMeet}
            onChange={handleChange}
            closeModal={closeModal}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminMeetings;
