import React from "react";

const toDateString = (date) => {
  const d = new Date(date);
  let str = "";
  str += d.getFullYear();
  str += "-";
  if (d.getMonth() < 10) str += "0";
  str += d.getMonth();
  str += "-";
  if (d.getDate() < 10) str += "0";
  str += d.getDate();
  return str;
};
import AdminMeetings from "./AdminMeetings";
function AdminAchievementModal(props) {
  const { meet } = props;
  console.log(meet);
  return (
    <div>
      <div className="justify-center overflow-y-hidden items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none my-6">
        <div className="relative fade-anim my-8 mr-[100px] sm:w-[500px] md:w-[800px] lg:mx-auto w-[1000px]">
          <div className="bg-[#1C1C1C] h-[400px] overflow-auto rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none mt-[50px] ml-[80px] ">
            <div className="flex items-start justify-between p-5 rounded-t">
              <h1 className="text-2xl my-2 overflow-hidden text-white font-semibold">
                Edit Meetings Details
              </h1>
              <button
                className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.closeModal}
              ></button>
            </div>
            {/* body */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="py-2 px-4">
                <input
                  className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mx-1 rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
                  placeholder="Meeting Name"
                  type="text"
                  name="title"
                  value={meet.title}
                  onChange={props.onChange}
                />
              </div>
              <div className="py-2 px-4">
                <input
                  className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
                  placeholder="Description"
                  type="text"
                  name="description"
                  value={meet.description}
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="py-3 px-4">
                <input
                  className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mx-1 rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
                  placeholder="Time"
                  type="text"
                  name="text"
                  value={meet.time}
                  onChange={props.onChange}
                />
              </div>
              <div className="py-3 px-4">
                <input
                  className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
                  placeholder="Date"
                  type="date"
                  name="date"
                  value={toDateString(meet.date)}
                  onChange={props.onChange}
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
                  onChange={props.onChange}
                >
                  <option selected hidden className="text-slate-300">
                    Mode
                  </option>
                  <option
                    value="Online"
                    className="text-slate-300"
                    selected={meet.mode == "Online"}
                  >
                    Online
                  </option>
                  <option
                    value="Offline"
                    className="text-slate-300"
                    selected={meet.mode == "Offline"}
                  >
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
                  onChange={props.onChange}
                />
              </div>
            </div>
            <div className="py-3 px-4">
              <textarea
                className="sm:text-md w-full py-0.5 px-1 pl-4 mx-1 h-[45px] rounded bg-[#1C1C1C] text-white placeholder-white border font-mont border-white-500"
                placeholder="Add MOM of the meeting"
                type="text"
                name="mom"
                value={meet.mom}
                onChange={props.onChange}
              />
            </div>
            {/* footer */}
            <div className="flex items-center justify-end px-6 py-2 h-[100px] rounded-b">
              <div
                className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.closeModal}
              >
                DISCARD{" "}
              </div>
              <div
                className="bg-yellow-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.editMeetings}
              >
                Save Changes{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
}
export default AdminAchievementModal;
