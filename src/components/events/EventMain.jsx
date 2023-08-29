import React, { useEffect, useState } from "react";
import EventSlider from "./EventSlider";
import bg from "../../public/bg.png";
import loading from "../../public/loading.svg";
import axios from "axios";

function EventMain() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    document.title = "Events";
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
  let obj
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
       {events.length != 0 ? (
        <div>
          {events.map((eventsData, i) => {
            const date = new Date(eventsData.date);
            const datestring = `${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`;
           if(eventsData.title==="NonTech Recruitments2023") {
            return (
              <div
                id={eventsData._id}
                key={eventsData._id}
                className="flex flex-col md:flex-row h-[] px-10 py-10 items-center justify-between"
              >
                <div className="text-white order-2 md:order-1 w-full md:w-2/3 py-10 sm:px-10 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-2 text-center md:text-left text-yellow-500">
                      <span className="text-white">
                        {" "}
                        {eventsData.title.split(" ")[0]}
                      </span>
                      <br />
                      {eventsData.title.split(" ").slice(1)}
                    </h1>
                    <div className="text-xl font-light pb-6 text-yellow-500">
                      {eventsData.subtitle}
                    </div>
                    <div className="flex justify-between">
                      <h6 className="text-1xl sm:text-1xl flex space-x-1 md:text-1xl xl:text-1xl font-light pb-4 text-center md:text-left text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <i>{datestring}</i>
                      </h6>

                      <h6 className="text-1xl flex space-x-1 sm:text-1xl  md:text-1xl xl:text-1xl font-light pb-4 text-center md:text-left text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <i>{eventsData.venue}</i>
                      </h6>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          color="green"
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                      <h1 className="text-green-600 mb-5 w-fit px-2 font-semibold">
                        &#8377; {eventsData.price}
                      </h1>
                    </div>

                    <p className="text-2x1 font-thin sm:text-xl text-justify">
                      {eventsData.description}
                    </p>
                    <br />
                  </div>

                  {eventsData.title === "Konquest Ideathon" && (
                    <p>
                      <div className="flex flex-wrap md:w-[70%] lg:w-[60%] gap-2 py-8">
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Irrigation
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Defence
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Smart Automation
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Product Design
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Industry IoT
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Healthcare
                        </h1>
                      </div>
                      <a
                        href="https://drive.google.com/uc?export=download&id=13J53NS5NZfGEeCDAEGJxsPY1B6BgIToP"
                        className="text-yellow-500 font-bold mr-3"
                      >
                        View Rules
                      </a>
                    </p>
                  )}
                  {eventsData.title === "Konquest Line Crawler" && (
                    <p>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1geH6RzffBN5Rpyw281h2jrbJcPiDNxS9"
                        className="text-yellow-500 font-bold"
                      >
                        View Rules
                      </a>
                    </p>
                  )}
                  {eventsData.title === "Konquest RoadRunner" && (
                    <p>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1dwBGX8K4DktHgHCo1LBTKMIUPtc6Awuz"
                        className="text-yellow-500 font-bold"
                      >
                        View Rules
                      </a>
                    </p>
                  )}
                  <div className="flex mt-6">
                    {eventsData.registrationformid &&
                      eventsData.status == "Registrations Open" && (
                        <a href={`/form/${eventsData.registrationformid}`}>
                          <button className="bg-yellow-500 text-black text-xl w-32 font-semibold px-2 py-2 rounded-full">
                            Register
                          </button>
                        </a>
                      )}
                    {eventsData.registrationformid &&
                      eventsData.status == "Registrations Closed" && (
                        <button className="bg-amber-600 text-black text-xl w-64 font-semibold px-2 py-2 rounded-lg">
                          Registrations Closed
                        </button>
                      )}

                    {eventsData.status == "Upcoming" && (
                      <button className="bg-amber-600 text-black text-xl w-64 font-semibold px-2 py-2 rounded-lg">
                        Upcoming
                      </button>
                    )}
                    {eventsData.status == "Over" &&
                      eventsData.reasultlink != "" && (
                        <a href={`${eventsData.reasultlink}`}>
                          <button className="bg-yellow-500 text-black text-xl w-32 font-semibold px-2 py-2 rounded-full">
                            Results
                          </button>
                        </a>
                      )}
                    {eventsData.status == "Over" &&
                      eventsData.reasultlink == "" && (
                        <button className="bg-amber-600 text-black text-xl w-64 font-semibold px-2 py-2 rounded-lg">
                          Registrations Over
                        </button>
                      )}
                  </div>
                </div>
                <div className="w-[350px] bg-white order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2 event_slider_body ">
                  <EventSlider
                    thumb={[eventsData.img1, eventsData.img2, eventsData.img3]}
                    key={i}
                  />
                </div>
              </div>
            );
                      }
          })}
        </div>
      ) :null}
      {events.length != 0 ? (
        <div>
          {events.map((eventsData, i) => {
            const date = new Date(eventsData.date);
            const datestring = `${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`;
            if(eventsData.title!=="NonTech Recruitments2023") {
            return (
              <div
                id={eventsData._id}
                key={eventsData._id}
                className="flex flex-col md:flex-row h-[] px-10 py-10 items-center justify-between"
              >
                <div className="text-white order-2 md:order-1 w-full md:w-2/3 py-10 sm:px-10 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold pb-2 text-center md:text-left text-yellow-500">
                      <span className="text-white">
                        {" "}
                        {eventsData.title.split(" ")[0]}
                      </span>
                      <br />
                      {eventsData.title.split(" ").slice(1)}
                    </h1>
                    <div className="text-xl font-light pb-6 text-yellow-500">
                      {eventsData.subtitle}
                    </div>
                    <div className="flex justify-between">
                      <h6 className="text-1xl sm:text-1xl flex space-x-1 md:text-1xl xl:text-1xl font-light pb-4 text-center md:text-left text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <i>{datestring}</i>
                      </h6>

                      <h6 className="text-1xl flex space-x-1 sm:text-1xl  md:text-1xl xl:text-1xl font-light pb-4 text-center md:text-left text-yellow-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <i>{eventsData.venue}</i>
                      </h6>
                    </div>
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          color="green"
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                      <h1 className="text-green-600 mb-5 w-fit px-2 font-semibold">
                        &#8377; {eventsData.price}
                      </h1>
                    </div>

                    <p className="text-2x1 font-thin sm:text-xl text-justify">
                      {eventsData.description}
                    </p>
                    <br />
                  </div>

                  {eventsData.title === "Konquest Ideathon" && (
                    <p>
                      <div className="flex flex-wrap md:w-[70%] lg:w-[60%] gap-2 py-8">
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Irrigation
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Defence
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Smart Automation
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Product Design
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Industry IoT
                        </h1>
                        <h1 className="border-[1px] border-yellow-500  text-yellow-500 rounded-full px-2 py-1">
                          Healthcare
                        </h1>
                      </div>
                      <a
                        href="https://drive.google.com/uc?export=download&id=13J53NS5NZfGEeCDAEGJxsPY1B6BgIToP"
                        className="text-yellow-500 font-bold mr-3"
                      >
                        View Rules
                      </a>
                    </p>
                  )}
                  {eventsData.title === "Konquest Line Crawler" && (
                    <p>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1geH6RzffBN5Rpyw281h2jrbJcPiDNxS9"
                        className="text-yellow-500 font-bold"
                      >
                        View Rules
                      </a>
                    </p>
                  )}
                  {eventsData.title === "Konquest RoadRunner" && (
                    <p>
                      <a
                        href="https://drive.google.com/uc?export=download&id=1dwBGX8K4DktHgHCo1LBTKMIUPtc6Awuz"
                        className="text-yellow-500 font-bold"
                      >
                        View Rules
                      </a>
                    </p>
                  )}
                  <div className="flex mt-6">
                    {eventsData.registrationformid &&
                      eventsData.status == "Registrations Open" && (
                        <a href={`/form/${eventsData.registrationformid}`}>
                          <button className="bg-yellow-500 text-black text-xl w-32 font-semibold px-2 py-2 rounded-full">
                            Register
                          </button>
                        </a>
                      )}
                    {eventsData.registrationformid &&
                      eventsData.status == "Registrations Closed" && (
                        <button className="bg-amber-600 text-black text-xl w-64 font-semibold px-2 py-2 rounded-lg">
                          Registrations Closed
                        </button>
                      )}

                    {eventsData.status == "Upcoming" && (
                      <button className="bg-amber-600 text-black text-xl w-64 font-semibold px-2 py-2 rounded-lg">
                        Upcoming
                      </button>
                    )}
                    {eventsData.status == "Over" &&
                      eventsData.reasultlink != "" && (
                        <a href={`${eventsData.reasultlink}`}>
                          <button className="bg-yellow-500 text-black text-xl w-32 font-semibold px-2 py-2 rounded-full">
                            Results
                          </button>
                        </a>
                      )}
                    {eventsData.status == "Over" &&
                      eventsData.reasultlink == "" && (
                        <button className="bg-amber-600 text-black text-xl w-64 font-semibold px-2 py-2 rounded-lg">
                          Registrations Over
                        </button>
                      )}
                  </div>
                </div>
                <div className="w-[350px] bg-white order-1 md:order-2 h-[350px] sm:w-[400px] sm:h-[400px] py-2 px-2 event_slider_body ">
                  <EventSlider
                    thumb={[eventsData.img1, eventsData.img2, eventsData.img3]}
                    key={i}
                  />
                </div>
              </div>
            );
            }
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <img className="h-56 w-56" src={loading} />
        </div>
      )}
    </div>
  );
}

export default EventMain;
