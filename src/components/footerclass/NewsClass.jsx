import vector from "../../public/Vector.png";
import React, { useState } from "react";
import axios from "axios";
import popup from "../../public/yellow-bg.png";

function NewsClass() {
  const [show, set] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    set({ ...show, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, message } = show;

    let data = {
      name,
      email,
      message,
    };
    const resp = await axios.post(`/api/user/sendEmail`, data);
    if (resp.data.message == "Send") {
      set({ name: "", email: "", message: "" });
      alert("Feedback Submited");
    }
  };
  return (
    <div className="font-WorkSans w-[320px] mb-4">
      <div className="ml-4">
        <form>
          <h1 className="text-transparent text-center lg:text-left font-bold pb-2 text-xl bg-clip-text bg-gradient-to-r from-[#e2ad07] via-[#896a09] to-[#e2ad07]">
            Feedback
          </h1>
          <div class="form mb-4">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal placeholder-[#e2ad07] text-[#e2ad07] bg-zinc-800 rounded"
              id="exampleInput7"
              placeholder="Name"
              required
              name="name"
              value={show.name}
              onChange={onChange}
            />
          </div>
          <div class="form mb-4">
            <input
              type="email"
              class="fform-control block w-full px-3 py-1.5 text-base font-normal placeholder-[#e2ad07] text-[#e2ad07] bg-zinc-800 rounded"
              id="exampleInput8"
              placeholder="Your Email address"
              onChange={onChange}
              value={show.email}
              name="email"
            />
          </div>
          <div class="form mb-4">
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal placeholder-[#e2ad07] text-[#e2ad07] bg-zinc-800 rounded"
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
              required
              onChange={onChange}
              value={show.message}
              name="message"
            ></textarea>
          </div>
          <div class="form-group form-check text-center mb-6"></div>
          <div class="form mb-4 flex justify-center">
            <div
              className=" bg-gradient-to-r from-[#7a5101] via-[#d78f02]  to-[#7a5101]  h-[42px] w-[140px] flex justify-center items-center"
              style={{
                clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
              }}
            >
              <div
                className="bg-transparent h-10 w-[136px] flex justify-center items-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${popup})`,
                  clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                }}
              >
                <button
                  className="bg-cover h-8 w-32 text-lg font-semibold bg-gradient-to-r from-[#7a5101] via-[#d78f02] to-[#7a5101] hover:from-[#d78f02] hover:to-[#d78f02] px-4 py-1 flex justify-center items-center cur"
                  style={{
                    clipPath: `polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)`,
                  }}
                  onClick={postData}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsClass;
