import React from "react";
import Form from "../components/register/Form";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import bg from "../public/bg.png";
import load from "../public/loading.svg";
// import submited from '../public/submited.png'
import submited from "../public/submitted-new.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Register() {
  const [submit, setSubmit] = useState({ status: false, type: "not found" });
  const [title, setTitle] = useState("");

  const onSubmit = (status, type) => {
    setSubmit({ status: status, type: type });
  };

  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-fixed bg-black bg-bottom py-5 px-4 sm:px-10 font-montserrat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${bg})`,
        }}
      >
        {title != "" && (
          <div className=" fade-anim w-[90%] mb-10">
            <div className="m-4 text-4xl font-bold md:text-5xl lg:text-6xl text-[#EAB308]">
              {title}
            </div>
          </div>
        )}

        {/* <div
          className=" fade-anim border-2 w-[90%] border-yellow-500 rounded-lg ml-5 lg:ml-14 mb-10 items-center"
          style={{  background: "rgba(4, 0, 0, 0.60)" }}
        > */}
        <div className=" flex flex-col-reverse pb-32 lg:pb-20 xl:flex-row lg:flex-row items-center">
          {submit.status == false && (
            <Form submit={onSubmit} settitle={setTitle} />
          )}

          {submit.status == false && submit.type == "not found" && (
            <img
              src={load}
              className="flex justify-center items-center h-52 w-full my-1"
              alt="mySvgImage"
            />
          )}
          {submit.status == true && submit.type == "submit" && (
            <img
              src={load}
              className="flex justify-center items-center h-52 w-full my-1"
              alt="mySvgImage"
            />
          )}
          {submit.status == true && submit.type == "done" && (
            <div
              className="flex flex-col justify-center items-center w-full ml-96 mr-96"
              style={{ background: "rgba(4, 0, 0, 0.60)" }}
            >
              {/* <div className="text-emerald-600 text-5xl  font-bold">Success !</div> */}
              <img
                src={submited}
                className="fade-anim flex justify-center items-center h-20 mt-20 mb-14"
                alt="mySvgImage"
              />
              <div className="text-yellow-500 text-4xl  font-semibold">
                Form Completed!
              </div>
              <div className="text-white">Thank you for filling the form.</div>
              <Link to="/admin/userprofile">
                <button className=" fade-anim bg-yellow-500 hover:bg-yellow-700 text-black mt-14 mb-20 py-2 px-4 rounded mr-5 text-base">
                  OKAY
                </button>
              </Link>
            </div>
          )}
          {submit.status == true && submit.type == "already" && (
            <div className="fade-anim flex justify-center text-[#EAB308]  items-center p-4  w-[100%] h-96 text-3xl">
              You Have Already Filled This Form
            </div>
          )}
          {submit.status == true && submit.type == "not allowed" && (
            <div className="fade-anim flex justify-center text-[#EAB308]  items-center p-4  w-[100%] h-96 text-3xl">
              Not Allowed
            </div>
          )}
          {submit.status == true && submit.type == "regclosed" && (
            <div className="fade-anim flex justify-center text-[#EAB308]  items-center p-4  w-[100%] h-96 text-3xl">
              Registrations Closed
            </div>
          )}
          {submit.status == true && submit.type == "not found" && (
            <div className="fade-anim flex justify-center text-[#EAB308]  items-center p-4  w-[100%] h-96 text-3xl">
              Invalid form link{" "}
            </div>
          )}
          {submit.status == true && submit.type == "not allowed class" && (
            <div className="fade-anim flex justify-center text-[#EAB308]  items-center p-4  w-[100%] h-96 text-3xl">
              First years not allowed
            </div>
          )}
          {submit.status == true && submit.type == "not allowed kiit" && (
            <div className="fade-anim flex justify-center text-[#EAB308]  items-center p-4  w-[100%] h-96 text-3xl">
              Please login with your KIIT mail id to register{" "}
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
