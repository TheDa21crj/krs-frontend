import React, { useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Delete from "../../public/delete.png";
import Edit from "../../public/edit.png";
import qr from "../../public/qr.png";
import EventSlider from "../events/EventSlider";
import axios from "axios";
import { Html5Qrcode } from "html5-qrcode";
import AuthContext from "../../store/auth-context";
import loading from "../../public/loading.svg";
import coun from "../../public/counter.png";
import RegisterCounter from "./components/RegisterCounter";
import { useEffect } from "react";
import calender from "../../public/calender.svg";
import location from "../../public/location.svg";
function AdminEvents({ level }) {
  const [events, setEvents] = useState([]);
  const [eve, setEve] = useState({
    _id: "",
    price: 0,
    title: "",
    subtitle: "",
    date: "",
    venue: "",
    status: "",
    mode: "",
    teamcreation: "",
    teamsize: 0,
    img1: "",
    img2: "",
    img3: "",
    description: "",
    sheetid: "",
    reasultlink: "",
  });
  const [showModal, setShowModal] = useState({ show: false, index: null });
  const [show, set] = useState("");
  const authCtx = useContext(AuthContext);
  const [qrdata, setQrData] = useState({
    code: null,
    info: "",
    verifying: false,
  });
  const [loadin, setLoadin] = useState(false);
  const selectref = useRef();
  const selectref1 = useRef();
  const selectref2 = useRef();

  // counter modal state
  const [showcounter, setShowCounter] = useState({
    show: false,
    sid: "",
    fid: "",
  });

  const counter = (sid, fid) => {
    setShowCounter({ show: true, sid: sid, fid });
  };
  // qr modal state
  const [showqrModal, setShowQrModal] = useState({
    status: false,
    sid: "",
    fid: "",
  });

  useEffect(() => {
    async function makereq() {
      try {
        const resp = await axios.get("/api/events/");
        const data = resp.data;

        setEvents(events.concat(data));
      } catch (e) {
        console.log(e);
      }
    }

    makereq();
  }, []);

  //detectqr
  const detectqr = async (code, sid, fid) => {
    try {
      setLoadin(true);
      const resp = await axios.post(
        `/api/registration/register/verify/`,
        { code: code, sheetid: sid, formid: fid, type: "detect" },
        { headers: { Authorization: `${authCtx.token}` } }
      );
      const data = resp.data;

      if (data.success == true) {
        setQrData({ code: code, info: data.info });
        setLoadin(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  //initscan

  const initscan = (sid, fid) => {
    console.log("scan initialized");
    const html5QrCode = new Html5Qrcode("qrreader");
    const qrCodeSuccessCallback = async (decodedText, decodedResult) => {
      console.log("dnejnejdnejdnej");
      console.log(decodedText);
      detectqr(decodedText, sid, fid);
      html5QrCode
        .stop()
        .then((ignore) => {})
        .catch((err) => {
          console.log(err);
        });
    };
    const config = { fps: 10, qrbox: { width: 1550, height: 1550 } };

    html5QrCode.start(
      { facingMode: "environment" },
      config,
      qrCodeSuccessCallback
    );
  };

  //verify qr
  const verifyqr = async (code) => {
    try {
      setQrData({ code: null, info: "", verifying: true });
      const resp = await axios.post(
        `/api/registration/register/verify/`,
        {
          code: code,
          sheetid: showqrModal.sid,
          formid: showqrModal.fid,
          type: "verify",
        },
        { headers: { Authorization: `${authCtx.token}` } }
      );
      const data = resp.data;
      if (data.success == true) {
        setQrData({ code: code, info: data.info, verifying: false });
      }
    } catch (e) {
      console.log(e);
    }
  };
  //openscan
  const openscan = (sid, fid) => {
    setTimeout(() => {
      initscan(sid, fid);
    }, 100);
    setShowQrModal({ status: true, sid: sid, fid: fid });
  };
  //  add events
  const handleClick = async (e) => {
    e.preventDefault();
    const {
      title,
      date,
      venue,
      status,
      mode,
      teamcreation,
      img1,
      img2,
      img3,
      description,
      sheetid,
      reasultlink,
    } = eve;
    if (
      title !== "" &&
      date !== "" &&
      venue !== "" &&
      status !== "" &&
      mode !== "" &&
      teamcreation !== "" &&
      img1 !== "" &&
      img2 !== "" &&
      img3 !== "" &&
      description !== "" &&
      sheetid !== ""
    ) {
      try {
        const resp = await axios.post("/api/events/addEvent", eve, {
          headers: { Authorization: `${authCtx.token}` },
        });

        const id = resp.data.data;
        eve._id = id;
        setEve(eve);
        setEvents([...events, eve]);
      } catch (err) {
        console.log(err);
      }
      selectref.current.value = "Select";
      selectref1.current.value = "Select";
      selectref2.current.value = "Select";
      setEve({
        title: "",
        price: 0,
        subtitle: "",
        teamsize: null,
        date: "",
        venue: "",
        status: "",
        mode: "",
        teamcreation: "Select",
        img1: "",
        img2: "",
        img3: "",
        description: "",
        sheetid: "",
        reasultlink: "",
      });
      set("");
    } else {
      set("Please fill all the fields");
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }
    setEve({ ...eve, [e.target.name]: e.target.value });
  };

  // deleting events
  const deleteEvent = async (id) => {
    try {
      const newEvents = events.filter((event) => {
        return event._id !== id;
      });
      setEvents(newEvents);
      const resp = await axios.delete(`/api/events/deleteEvent/${id}`, {
        headers: { Authorization: `${authCtx.token}` },
      });
    } catch (e) {
      console.log(e);
    }
  };

  //editing events
  const updateCard = (i) => {
    setEve({
      _id: events[i]._id,
      price: events[i].price,
      subtitle: events[i].subtitle,
      title: events[i].title,
      date: events[i].date,
      venue: events[i].venue,
      status: events[i].status,
      mode: events[i].mode,
      teamcreation: events[i].teamcreation,
      teamsize: events[i].teamsize,
      img1: events[i].img1,
      img2: events[i].img2,
      img3: events[i].img3,
      description: events[i].description,
      sheetid: events[i].sheetid,
      reasultlink: events[i].reasultlink,
    });

    setShowModal({ show: true, index: i });
  };

  const editEvents = async () => {
    const updatedcard = {
      _id: eve._id,
      subtitle: eve.subtitle,
      title: eve.title,
      price: eve.price,
      date: eve.date,
      venue: eve.venue,
      status: eve.status,
      mode: eve.mode,
      teamcreation: eve.teamcreation,
      teamsize: eve.teamsize,
      img1: eve.img1,
      img2: eve.img2,
      img3: eve.img3,
      description: eve.description,
      sheetid: eve.sheetid,
      reasultlink: eve.reasultlink,
    };

    events[showModal.index] = updatedcard;
    try {
      const resp = await axios.patch(
        `/api/events/editEvent/${eve._id}`,
        updatedcard,
        { headers: { Authorization: `${authCtx.token}` } }
      );
      setEvents(events);
    } catch (e) {
      console.log(e);
    }
    setEve({
      title: "",
      date: "",
      venue: "",
      status: "",
      price: 0,
      teamsize: 0,
      mode: "",
      teamcreation: "",
      img1: "",
      img2: "",
      img3: "",
      description: "",
      sheetid: "",
      reasultlink: "",
    });
    setShowModal({ show: false, index: null });
  };

  // modal state
  const closeModal = () => {
    setEve({
      title: "",
      date: "",
      venue: "",
      status: "",
      price: 0,
      teamsize: 0,
      mode: "",
      teamcreation: "",
      img1: "",
      img2: "",
      img3: "",
      description: "",
      sheetid: "",
      reasultlink: "",
    });
    setShowModal({ show: false, index: null });
  };

  return (
    <div className="flex-1 my-12 mx-6 md:mx-20 justify-center items-center">
      <div className="py-4  rounded-xl">
        <h1 className="p-2 text-3xl pl-[120px] md:px-4 lg:px-1 text-3xl font-bold font-mont text-yellow-500">
          Events
        </h1>
      </div>
      {/* form */}
      {level == "admin" && (
        <div className="py-4 px-8 rounded-xl bg-[#1C1C1C] mr-4">
          <h1 className="p-4 text-xl sm:text-xl font-bold font-mont text-white">
            Add an event{" "}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Event name"
                type="text"
                name="title"
                value={eve.title}
                onChange={onChange}
              />
            </div>
            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Sub-heading"
                type="text"
                name="subtitle"
                value={eve.subtitle}
                onChange={onChange}
              />
            </div>
            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Enter event date"
                type="date"
                name="date"
                value={eve.date}
                onChange={onChange}
              />
            </div>
            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Enter venue"
                type="text"
                name="venue"
                value={eve.venue}
                onChange={onChange}
              />
            </div>
            <div className="mt-[30px]">
              <select
                ref={selectref}
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                name="status"
                onChange={onChange}
              >
                <option
                  value="Select"
                  selected
                  disabled
                  hidden
                  className="text-slate-300"
                >
                  Status
                </option>
                <option value="Upcoming" className="text-black">
                  Upcoming
                </option>
                <option value="Registrations Open" className="text-black">
                  Registrations Open
                </option>
                <option value="Registrations Closed" className="text-black">
                  Registrations Closed
                </option>
                <option value="Over" className="text-black">
                  Over
                </option>
              </select>
            </div>
            <div className="mt-[30px]">
              <select
                ref={selectref1}
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                name="mode"
                onChange={onChange}
              >
                <option
                  value="Select"
                  selected
                  disabled
                  hidden
                  className="text-slate-300"
                >
                  Mode
                </option>
                <option value="Offline" className="text-black">
                  Offline
                </option>
                <option value="Online" className="text-black">
                  Online
                </option>
                <option value="Hybrid" className="text-black">
                  Hybrid
                </option>
              </select>
            </div>

            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                style={{ appearance: "none" }}
                placeholder="Price"
                type="number"
                name="price"
                value={eve.price}
                onChange={onChange}
              />
            </div>
            <div className="mt-[30px]">
              <select
                ref={selectref2}
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                name="teamcreation"
                id=""
                onChange={onChange}
              >
                <option
                  value="Select"
                  selected
                  disabled
                  hidden
                  className="text-slate-300"
                >
                  Team Creation
                </option>
                <option value="Allowed" className="text-black">
                  Allowed
                </option>
                <option value="Not allowed" className="text-black">
                  Not allowed
                </option>
              </select>
            </div>
            {eve.teamcreation == "Allowed" && (
              <div className="mt-[30px]">
                <input
                  className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                  placeholder="Enter team size"
                  type="text"
                  name="teamsize"
                  value={eve.teamsize}
                  onChange={onChange}
                />
              </div>
            )}
            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                placeholder="Image 1 link"
                type="text"
                name="img1"
                value={eve.img1}
                onChange={onChange}
              />
            </div>
            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                placeholder="Image 2 link"
                type="text"
                name="img2"
                value={eve.img2}
                onChange={onChange}
              />
            </div>

            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                placeholder="Image 3 link"
                type="text"
                name="img3"
                value={eve.img3}
                onChange={onChange}
              />
            </div>

            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                placeholder="Enter event Sheet ID"
                type="text"
                name="sheetid"
                value={eve.sheetid}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="mt-[30px]">
            <textarea
              className="sm:text-base w-[96%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
              placeholder="Enter description of the event..."
              name="description"
              value={eve.description}
              onChange={onChange}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <br />
          {show ? <p className="alertText">{show}</p> : ""}
          <button
            type="submit"
            onClick={handleClick}
            className="ml-[20%] text-xl py-1 px-3 h-[50px] font-medium font-mont  bg-yellow-500 rounded-md text-black md:ml-[25%] lg:ml-[79%]"
          >
            {" "}
            Add event{" "}
          </button>
        </div>
      )}

      {/* card */}
      <h1 className="text-yellow-500 font-mont mt-[60px] mb-[30px] font-semibold text-3xl">
        Previous Events
      </h1>
      <div className="grid grid-cols-1 my-[20px] w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {events.map((eventsData, i) => {
          const eventDate = new Date(eventsData.date); // Convert the date string to a Date object

          // Format the date using toLocaleDateString()
          const formattedDate = eventDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          });
          return (
            <div key={i} className="">
              <div className="bg-[#1C1C1C] border rounded-xl border-[#1C1C1C] mx-[8px] my-[20px]">
                <div className="">
                  <img
                    src={eventsData.img1}
                    className="border rounded-xl h-[236px] object-cover w-[530px]"
                  />
                </div>
                <div className="">
                  <h1 className="text-yellow-500 font-mont  p-4 font-semibold text-1xl">
                    {eventsData.title}
                  </h1>
                </div>
                <div className="flex flex-row gap-14">
                  <div className="flex flex-row">
                    <img src={calender} className="ml-4" />
                    <div className=" text-white font-mont  p-4">
                      {formattedDate}
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <img src={location} />
                    <div className=" text-white font-mont  p-4">
                      {eventsData.venue}
                    </div>
                  </div>
                </div>
                <div className="">
                  <pre className="whitespace-pre-wrap text-white font-mont  p-4">
                    {eventsData.description}
                  </pre>
                </div>
                <div className="flex flex-row">
                  {level == "admin" && (
                    <div
                      className="text-white font-mont p-4"
                      onClick={() => updateCard(i)}
                    >
                      EDIT
                    </div>
                  )}
                  {(level == "admin" || level == "oc") && (
                    <div
                      className="text-white font-mont p-4"
                      onClick={() => {
                        openscan(
                          eventsData.sheetid,
                          eventsData.registrationformid
                        );
                      }}
                    >
                      VIEW QR
                    </div>
                  )}
                  {level == "admin" && (
                    <div
                      className="text-white font-mont ml-auto p-4"
                      onClick={() => deleteEvent(eventsData._id)}
                    >
                      DELETE
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* modal */}
      {showModal.show ? (
        <>
          <div
            key={showModal.index}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mt-20"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#1C1C1C] h-[450px] p-7 overflow-auto rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                  <h3 className="text-2xl text-white font-semibold">
                    Edit event
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
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter name"
                      type="text"
                      name="title"
                      value={eve.title}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter name"
                      type="text"
                      name="subtitle"
                      value={eve.subtitle}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter date"
                      type="date"
                      name="date"
                      value={new Date(eve.date).toISOString().split("T")[0]}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter venue"
                      type="text"
                      name="venue"
                      value={eve.venue}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <select
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      name="status"
                      defaultValue={eve.status}
                      onChange={onChange}
                    >
                      {eve.status == "Select" ? (
                        <option selected disabled hidden>
                          Select
                        </option>
                      ) : (
                        <option disabled hidden>
                          Select
                        </option>
                      )}
                      {eve.status == "Upcoming" ? (
                        <option
                          value="Upcoming"
                          selected
                          className="text-black"
                        >
                          Upcoming
                        </option>
                      ) : (
                        <option value="Upcoming" className="text-black">
                          Upcoming
                        </option>
                      )}
                      {eve.status == "Registrations Open" ? (
                        <option
                          value="Registrations Open"
                          selected
                          className="text-black"
                        >
                          Registrations Open
                        </option>
                      ) : (
                        <option
                          value="Registrations Open"
                          className="text-black"
                        >
                          Registrations Open
                        </option>
                      )}
                      {eve.status == "Registrations Closed" ? (
                        <option
                          value="Registrations Closed"
                          selected
                          className="text-black"
                        >
                          Registrations Closed
                        </option>
                      ) : (
                        <option
                          value="Registrations Closed"
                          className="text-black"
                        >
                          Registrations Closed
                        </option>
                      )}
                      {eve.status == "Over" ? (
                        <option value="Over" selected className="text-black">
                          Over
                        </option>
                      ) : (
                        <option value="Over" className="text-black">
                          Over
                        </option>
                      )}
                    </select>
                  </div>
                  <div className="mt-7">
                    <select
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      name="mode"
                      defaultValue={eve.mode}
                      onChange={onChange}
                    >
                      <option disabled hidden>
                        Select
                      </option>
                      {eve.mode == "Select" ? (
                        <option selected disabled hidden>
                          Select
                        </option>
                      ) : (
                        <option disabled hidden>
                          Select
                        </option>
                      )}
                      {eve.mode == "Offline" ? (
                        <option value="Offline" selected className="text-black">
                          Offline
                        </option>
                      ) : (
                        <option value="Offline" className="text-black">
                          Offline
                        </option>
                      )}
                      {eve.mode == "Online" ? (
                        <option value="Online" selected className="text-black">
                          Online
                        </option>
                      ) : (
                        <option value="Online" className="text-black">
                          Online
                        </option>
                      )}
                      {eve.mode == "Hybrid" ? (
                        <option value="Hybrid" selected className="text-black">
                          Hybrid
                        </option>
                      ) : (
                        <option value="Hybrid" className="text-black">
                          Hybrid
                        </option>
                      )}
                    </select>
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter price"
                      type="number"
                      name="price"
                      value={eve.price}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <select
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      name="teamcreation"
                      defaultValue={eve.teamcreation}
                      onChange={onChange}
                    >
                      {eve.teamcreation == "Select" ? (
                        <option selected dsabled hidden>
                          Select
                        </option>
                      ) : (
                        <option dsabled hidden>
                          Select
                        </option>
                      )}
                      {eve.teamcreation == "Allowed" ? (
                        <option value="Allowed" selected className="text-black">
                          Allowed
                        </option>
                      ) : (
                        <option value="Allowed" className="text-black">
                          Allowed
                        </option>
                      )}
                      {eve.teamcreation == "Not allowed" ? (
                        <option
                          value="Not allowed"
                          selected
                          className="text-black"
                        >
                          Not allowed
                        </option>
                      ) : (
                        <option value="Not allowed" className="text-black">
                          Not allowed
                        </option>
                      )}
                    </select>
                  </div>
                  {eve.teamcreation == "Allowed" && (
                    <div className="mt-7">
                      <input
                        className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                        placeholder="Enter team size"
                        type="text"
                        name="teamsize"
                        value={eve.teamsize}
                        onChange={onChange}
                      />
                    </div>
                  )}
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter image"
                      type="text"
                      name="img1"
                      value={eve.img1}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter image"
                      type="text"
                      name="img2"
                      value={eve.img2}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter image"
                      type="text"
                      name="img3"
                      value={eve.img3}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter SheetID"
                      type="text"
                      name="sheetid"
                      value={eve.sheetid}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mt-7">
                    <textarea
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter description of the event..."
                      name="description"
                      value={eve.description}
                      onChange={onChange}
                      id=""
                      cols="30"
                      rows="1"
                    ></textarea>
                  </div>
                  <div className="mt-7">
                    <input
                      className="sm:text-base w-[90%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                      placeholder="Enter reasultlink"
                      type="text"
                      name="reasultlink"
                      value={eve.reasultlink}
                      onChange={onChange}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex flex-row ml-auto mr-8 pt-4">
                  <button
                    className="text-white background-transparent px-6 py-2 hover:text-red-500 text-lg font-semibold outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className="bg-yellow-500 text-black hover:bg-black hover:text-yellow-500 text-lg font-semibold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    onClick={editEvents}
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
      {/* counter modal */}

      {showcounter.show == true ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">Counter</h3>
                  <button
                    className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowCounter({ status: false });
                    }}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex-col justify-center px-16 py-2 text-white">
                  <RegisterCounter
                    sid={showcounter.sid}
                    fid={showcounter.fid}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-yellow-500 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowCounter({ status: false, sid: "", fid: "" });
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* qr modal */}
      {showqrModal.status == true ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-[#1C1C1C]  rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">QR Scan</h3>
                  <button
                    className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowQrModal({ status: false, sid: "", fid: "" });
                      setQrData({ code: null, info: "", verifying: false });
                    }}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex-col justify-center px-16 py-2">
                  {qrdata.verifying === true && (
                    <div className="flex items-center justify-center">
                      {" "}
                      <img
                        src={loading}
                        className="h-48 w-48"
                        alt="mySvgImage"
                      />{" "}
                    </div>
                  )}
                  {showqrModal.status == true &&
                  qrdata.code == null &&
                  loadin == false ? (
                    <div
                      id="qrreader"
                      className={
                        qrdata.verifying === false ? "h-52 w-52" : "h-0 w-0"
                      }
                    ></div>
                  ) : null}

                  {qrdata.code != null && (
                    <center>
                      <p style={{ color: "white" }}>
                        <span className="text-[#EAB308]">
                          UUID - {qrdata.code}
                        </span>
                        <br />
                        <span className="text-[#EAB308]">
                          {qrdata.info.slot}
                        </span>{" "}
                        <br /> {qrdata.info.name} - {qrdata.info.roll}
                        <br /> {qrdata.info.email} <br />
                      </p>
                      <br />
                      {qrdata.info.verification == "Verified" && (
                        <span style={{ color: "green" }}>Verified</span>
                      )}
                      {qrdata.info.verification == "Not Verified" && (
                        <span style={{ color: "red", marginBottom: "12px" }}>
                          Not Verified
                        </span>
                      )}
                      <br />
                      {qrdata.info.verification == "Not Verified" && (
                        <button
                          onClick={() => verifyqr(qrdata.code)}
                          className="text-white bg-green-600 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                          Verify
                        </button>
                      )}

                      <button></button>
                    </center>
                  )}

                  {loadin && (
                    <img src={loading} className="h-10 w-10" alt="mySvgImage" />
                  )}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-black bg-yellow-500 rounded-lg font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowQrModal({ status: false, sid: "", fid: "" });
                      setQrData({ code: null, info: "", verifying: false });
                    }}
                  >
                    Close
                  </button>
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

export default AdminEvents;
