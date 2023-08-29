import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/auth-context";

import axios from "axios";
import Tags from "./project/Tags";
import ProjectCard from "./project/ProjectCard";
import ProjectModal from "../modals/ProjectModal";

function AdminProjects() {
  //variable initializations
  const authCtx = useContext(AuthContext);
  const [projectData, setProjectData] = useState();
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    link: "",
    image: "",
    member: [],
    tag: [],
  });
  const [memberList, setMemberList] = useState([]);
  const [workingMem, setWorkingMem] = useState([]);
  const [individualTag, setindividualTag] = useState("");
  const [tag, setTag] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  //add project (submit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, link, image, member, tag } = projectDetails;
    if (name !== "" && description !== "" && image !== "" && member !== "") {
      await addProject();
      console.log("Project added!!");
      setProjectDetails({
        name: "",
        description: "",
        link: "",
        image: "",
        member: [],
        tag: [],
      });
      setWorkingMem([]);
      setTag([]);
      // setWorkingMemId([]);
    } else {
      console.log("Field empty");
    }
    // console.log(workingMem);
  };

  //add project
  const addProject = async () => {
    var array = [];
    for (var i = 0; i < workingMem.length; i++) {
      array.push(workingMem[i].memberId);
    }
    let projectData = {
      name: projectDetails.name,
      description: projectDetails.description,
      link: projectDetails.link,
      image: projectDetails.image,
      // member: projectDetails.member,
      // tag: projectDetails.tag,
      member: array,
      tag: tag,
    };

    const response = await axios.post("api/project/addProject", projectData, {
      headers: { Authorization: `${authCtx.token}` },
    });

    makeRequest();
  };

  //fetch data about all project
  async function makeRequest() {
    try {
      const response = await axios.get("/api/project");
      console.log(response.data);
      setProjectData(response.data);
      console.log(projectData);
    } catch (e) {
      console.log(e);
    }
  }

  //updating input fields
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (value === "") {
      e.target.style.border = "1px solid #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "1px solid rgb(203, 213, 225)";
    }

    setProjectDetails({ ...projectDetails, [name]: value });
  };

  //multivalued select
  const onChangeMultiValued = (e) => {
    const name = e.target.name;
    const ID = e.target.value;

    var alreadyExists = false;
    workingMem.forEach((element) => {
      if (element.memberId == ID) {
        alreadyExists = true;
      }
    });
    if (!alreadyExists) {
      memberList.forEach((element) => {
        if (element.memberId == ID) {
          setWorkingMem([...workingMem, element]);
        }
      });
    }
    // setProjectDetails({ ...projectDetails, [name]: workingMem });
  };

  //fetch member list
  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get("/api/members/memberList", {
          headers: { Authorization: `${authCtx.token}` },
        });
        setMemberList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMember();
    makeRequest();
    console.log(projectData);
  }, []);

  //delete working member
  const deleteMemHandler = (name) => {
    var indexToRemove;
    for (var i = 0; i < workingMem.length; i++) {
      if (workingMem[i].name == name) {
        indexToRemove = i;
      }
    }
    setWorkingMem([
      ...workingMem.filter((_, index) => index !== indexToRemove),
    ]);
  };

  //delete tag
  const deleteTagHandler = (name) => {
    const indexToRemove = tag.indexOf(name);
    setTag([...tag.filter((_, index) => index !== indexToRemove)]);
  };

  // adding tags
  const keyEventHandler = (e) => {
    if (e.key === "Enter" && individualTag.trim() !== "") {
      setTag([...tag, individualTag]);
      setindividualTag("");
    }
  };

  // deleting project
  const deleteProject = async (pid) => {
    const response = await axios.delete(`/api/project/deleteProject/${pid}`, {
      headers: { Authorization: `${authCtx.token}` },
    });
    makeRequest();
  };

  return (
    <div className="w-[100%]">
      {/* project form */}
      <div className="flex-1 mx-6 sm:mx-20 justify-center items-center font-mont">
        <p className="text-yellow-500 text-2xl font-semibold py-8">Projects</p>
        <div
          className="py-4 px-4 sm:px-8 rounded-xl"
          style={{ background: "rgba(28, 28, 28, 1)" }}
        >
          <h1 className="text-xl sm:text-2xl text-white font-semibold">
            Add a project
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="mt-[30px]">
              <input
                className="sm:text-base w-[100%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Project Name"
                type="text"
                name="name"
                value={projectDetails.name}
                onChange={onChange}
              />
            </div>
            <div className="mt-0 md:mt-[30px]">
              <input
                className="sm:text-base w-[100%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Project Description"
                type="text"
                name="description"
                value={projectDetails.description}
                onChange={onChange}
              />
            </div>
            <div className="">
              <input
                className="sm:text-base w-[100%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="GitHub/Website Link"
                type="text"
                name="link"
                value={projectDetails.link}
                onChange={onChange}
              />
            </div>
            <div className="">
              <input
                className="sm:text-base w-[100%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Image Link"
                type="text"
                name="image"
                value={projectDetails.image}
                onChange={onChange}
              />
            </div>
            <div className="">
              <select
                className="sm:text-base w-[100%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px]"
                id=""
                name="member"
                value=""
                onChange={onChangeMultiValued}
              >
                <option hidden>Working Member</option>
                {memberList.map((data) => (
                  <option value={data.memberId} className="text-black">
                    {data.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <input
                className="sm:text-base w-[100%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Add Tags"
                type="text"
                name="tag"
                value={individualTag}
                onChange={(e) => setindividualTag(e.target.value)}
                onKeyDown={keyEventHandler}
              />
            </div>
          </div>
          {/* tags */}
          <div className="flex w-[100%]">
            <div className="flex w-[50%] flex-wrap">
              {workingMem.map((data) => (
                <Tags
                  name={data.name}
                  key={data.memberId}
                  visible={true}
                  border="roundSm"
                  image={data.image}
                  imageView={true}
                  deleteHandler={deleteMemHandler}
                />
              ))}
            </div>
            <div className="ml-8 flex w-[50%] flex-wrap">
              {tag.map((data) => (
                <Tags
                  name={data}
                  visible={true}
                  border="roundSm"
                  imageView={false}
                  deleteHandler={deleteTagHandler}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-[30px]">
            <div className="h-3"></div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-xl py-1.5 px-4 bg-yellow-500 rounded-md text-black"
            >
              Add project
            </button>
          </div>
        </div>
      </div>
      {/* project cards */}
      <div className="mx-6 mb-10 sm:mx-20 justify-center items-center font-mont">
        {projectData ? (
          <>
            <p className="text-yellow-500 text-2xl font-semibold pt-8">
              All Projects
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-stretch">
              {projectData.map((data) => {
                return (
                  <ProjectCard
                    data={data}
                    deleteHandler={() => deleteProject(data._id)}
                    setShowModal={setShowModal}
                    setModalData={setModalData}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {/* modal */}
      {showModal ? (
        <ProjectModal
          setShowModal={setShowModal}
          data={modalData}
          memberList={memberList}
          onChange={onChange}
          makeRequest={makeRequest}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default AdminProjects;
