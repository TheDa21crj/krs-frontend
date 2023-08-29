import React, { useState } from "react";
import Tags from "./Tags";
// import ProjectModal from "../../modals/ProjectModal";

export default function ProjectCard(props) {
  const modalData = props.data;
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* card */}
      <div
        className="w-[95%] rounded-md mt-8"
        style={{ background: "rgba(28, 28, 28, 1)" }}
      >
        <div>
          <img
            className="h-60 w-[100%] rounded-md"
            src={props.data.image}
            alt=""
          />
        </div>
        <div className="p-5">
          <div className="text-yellow-500 font-semibold text-xl">
            {props.data.name}
          </div>
          <div className="flex">
            {props.data.tag.map((data) => (
              <Tags
                name={data}
                imageView={false}
                visible={false}
                border="roundSm"
              />
            ))}
          </div>
          <div className="mt-2 text-white">{props.data.description}</div>
          <div className="flex">
            {props.data.member.map((data) => (
              <Tags
                name={data.name}
                imageView={true}
                image={data.image}
                visible={false}
                border="round"
              />
            ))}
          </div>
          <div className="md:flex justify-between mt-2 px-4 text-sm bottom-0">
            <div className="flex md:w-[30%] w-[100%] justify-between">
              <div
                className="text-white hover:text-yellow-500 cursor-pointer"
                onClick={() => {
                  props.setShowModal(true);
                  props.setModalData(modalData);
                  console.log(props.data);
                }}
              >
                EDIT
              </div>
              {props.data.link == "" ? (
                <></>
              ) : (
                <a
                  href={props.data.link}
                  target="_blank"
                  className="text-white hover:text-yellow-500 cursor-pointer"
                >
                  GITHUB
                </a>
              )}
            </div>
            <div>
              <div
                className="text-white hover:text-red-500 cursor-pointer flex justify-center"
                onClick={props.deleteHandler}
              >
                DELETE
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
