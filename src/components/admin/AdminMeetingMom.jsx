import React from "react";
function AdminMeetingMom(props) {
  const { meet } = props;
  console.log(meet);
  return (
    <div>
      <div className="justify-center overflow-y-hidden items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none my-6">
        <div className="relative fade-anim my-8 mr-[100px] sm:w-[500px] md:w-[800px] lg:mx-auto w-[1000px]">
          <div className="bg-[#1C1C1C] max-h-[400px] overflow-auto rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none mt-[50px] ml-[80px] ">
            <div className=" items-start justify-between p-5 rounded-t">
              <h1 className="text-2xl my-2 overflow-hidden text-white font-semibold">
                MOM of the Meeting {meet.title}
              </h1>
              <p className="sm:text-md  h-[45px] mx-1 rounded bg-[#1C1C1C] text-white  font-mont ">
                {meet.date}-{meet.time}
              </p>
            </div>
            <fieldset className="border border-solid border-gray-300  mx-6 my-4 rounded-lg  ">
              <pre className=" whitespace-pre-wrap sm:text-md   mx-1 rounded bg-[#1C1C1C] text-white  font-mont  p-4">
                {meet.mom}
              </pre>
            </fieldset>
            <div className=" items-center justify-end px-6 py-2 h-[100px] rounded-b mb-4">
              <div
                className="bg-yellow-500 text-black active:bg-emerald-600 font-mont uppercase text-sm w-20 px-5  py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-auto mr-1 "
                type="button"
                onClick={props.closeModal}
              >
                Close{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminMeetingMom;
