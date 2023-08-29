import vector from "../../public/Vector.png";
import React, { useState } from "react";
import axios from "axios";

function News() {
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
    if(resp.data.message=="Send"){
      set({ name: "", email: "", message: "" })
      alert("Feedback Submited")
    }
  };
  return (
    <div className="font-WorkSans w-[320px] mb-4">
      <div className="ml-4">
        <form>
          <h1 className="text-white text-center lg:text-left font-bold pb-2 text-lg">
            Feedback
          </h1>
          <div class="form mb-4">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-zinc-800 rounded"
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
              class="fform-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-zinc-800 rounded"
              id="exampleInput8"
              placeholder="Your Email address"
              onChange={onChange}
              value={show.email}
              name="email"
            />
          </div>
          <div class="form mb-4">
            <textarea
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-zinc-800 rounded"
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
            <button
              className="bg-yellow-500 py-2 px-3 rounded-full"
              onClick={postData}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default News;
