import React from "react";
// import { Link } from "react-router-dom";

function AdminAchievementModal(props) {
  const { ach } = props;
  console.log(ach);
  return (
    <div>
      <div className="justify-center overflow-y-hidden items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none my-6">
        <div className="relative fade-anim my-8 mr-[100px] sm:w-[500px] md:w-[800px] lg:mx-auto w-[1000px]">
          {/*content*/}
          <div className="bg-[#1C1C1C] h-[400px] overflow-auto rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none mt-[50px] ml-[80px] ">
            {/*header*/}
            <div className="flex items-start justify-between p-5 rounded-t">
              <h3 className="text-2xl my-2 overflow-hidden text-white font-semibold">
                Edit achievements
              </h3>
              <button
                className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.closeModal}
              ></button>
            </div>
            {/*body*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4">
              <div className="md:py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Team name"
                  type="text"
                  name="teamname"
                  value={ach.teamname}
                  onChange={props.onChange}
                />
              </div>
              <div className="md:py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Competition Name"
                  type="text"
                  name="competitionname"
                  value={ach.competitionname}
                  onChange={props.onChange}
                />
              </div>
              <div className="md:py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Team Members"
                  type="text"
                  name="teammembers"
                  value={ach.teammembers}
                  onChange={props.onChange}
                />
              </div>
              <div className="md:py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Year"
                  type="text"
                  name="year"
                  value={ach.year}
                  onChange={props.onChange}
                />
              </div>
              <div className="md:py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Image 1 "
                  type="text"
                  name="img1"
                  value={ach.img1}
                  onChange={props.onChange}
                />
              </div>
              <div className="md:py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Image 2"
                  type="text"
                  name="img2"
                  value={ach.img2}
                  onChange={props.onChange}
                />
              </div>
              <div className="md:py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Position"
                  type="text"
                  name="position"
                  value={ach.position}
                  onChange={props.onChange}
                />
              </div>
              <div className="py-2 px-4">
                <input
                  className="bg-[#1C1C1C] mt-4 text-white placeholder-white md:text-lg w-full md:py-0.5 px-1 mx-1 rounded border border-slate-400"
                  placeholder="Location"
                  type="text"
                  name="location"
                  value={ach.location}
                  onChange={props.onChange}
                />
              </div>
            </div>
            {/*footer*/}
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
                onClick={props.editAchievements}
              >
                Save Changes
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
