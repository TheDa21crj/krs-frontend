import React, { useEffect, useState, useContext, useDebugValue } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import Tags from "../admin/project/Tags";

export default function ProjectModal(props) {
  //initializations
  const authCtx = useContext(AuthContext);
  const [projectDetails, setProjectDetails] = useState(props.data);
  const [workingMem, setWorkingMem] = useState(props.data.member);
  const [individualTag, setindividualTag] = useState();
  const [tag, setTag] = useState(props.data.tag);
  const [memArray, setMemArray] = useState([]);
  const memberList = props.memberList;

  //initialize member array
  useEffect(() => {
    for (var i = 0; i < workingMem.length; i++) {
      memArray.push({ id: workingMem[i]._id, operation: "none" });
    }
  }, []);

  //   updating input fields
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

    var alreadyExists1 = false;
    workingMem.forEach((element) => {
      if (element._id == ID) {
        alreadyExists1 = true;
      }
    });
    if (!alreadyExists1) {
      memberList.forEach((element) => {
        if (element.memberId == ID) {
          setWorkingMem([
            ...workingMem,
            { name: element.name, image: element.image, _id: element.memberId },
          ]);
        }
      });
    }

    // setProjectDetails({ ...projectDetails, [name]: workingMem });

    var alreadyExists2 = false;
    memArray.forEach((element) => {
      if (element.id == ID) {
        alreadyExists2 = true;
      }
    });
    if (alreadyExists2) {
      memArray.forEach((element) => {
        if (element.id == ID) {
          if (element.operation == "delete") {
            element.operation = "none";
          } else if (element.operation == "none") {
            element.operation = "add";
          }
        }
      });
    } else {
      setMemArray([...memArray, { id: ID, operation: "add" }]);
    }
  };

  // adding tags
  const keyEventHandler = (e) => {
    if (e.key === "Enter" && individualTag.trim() !== "") {
      setTag([...tag, individualTag]);
      setindividualTag("");
    }
    setProjectDetails({ ...projectDetails, tag: tag });
  };

  //delete member tag
  const deleteMemHandler = (name) => {
    var indexToRemove;
    var ID;
    for (var i = 0; i < workingMem.length; i++) {
      if (workingMem[i].name == name) {
        indexToRemove = i;
        ID = workingMem[i]._id;
      }
    }
    setWorkingMem([
      ...workingMem.filter((_, index) => index !== indexToRemove),
    ]);

    console.log(ID);
    memArray.forEach((element) => {
      if (element.id == ID) {
        if (element.operation == "add") {
          element.operation = "none";
        } else if (element.operation == "none") {
          element.operation = "delete";
        }
      } else {
        console.log(element);
      }
      console.log(memArray);
    });
  };

  //delete tag
  const deleteTagHandler = (name) => {
    const indexToRemove = tag.indexOf(name);
    setTag([...tag.filter((_, index) => index !== indexToRemove)]);
  };

  //save changes
  const handleEdit = async () => {
    let projectData = {
      name: projectDetails.name,
      description: projectDetails.description,
      link: projectDetails.link,
      image: projectDetails.image,
      // member: projectDetails.member,
      // tag: projectDetails.tag,
      member: memArray,
      tag: tag,
    };
    console.log(projectData);
    const resp = await axios.patch(
      `/api/project/editProject/${props.data._id}`,
      projectData,
      { headers: { Authorization: `${authCtx.token}` } }
    );
    props.setShowModal(false);
    props.makeRequest();
    // console.log(memArray);
  };

  return (
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      {/* <div className="relative w-[100%] my-6 mx-auto max-w-3xl"> */}
      <div className="bg-[#1C1C1C] p-7 rounded-lg relative outline-none focus:outline-none w-[60%]">
        <div className="items-start justify-between rounded-t">
          <h3 className="text-2xl text-white font-semibold">Edit project</h3>
          {/* form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
            <div className="mt-[20px]">
              <input
                className="sm:text-base w-[100%] pl-2 py-2 rounded bg-transparent border-[1px] border-slate-300 text-white focus:border-[1px] focus:border-slate-300"
                placeholder="Project Name"
                type="text"
                name="name"
                value={projectDetails.name}
                onChange={onChange}
              />
            </div>
            <div className="mt-0 md:mt-[20px]">
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
                  //   key={data.memberId}
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
          {/* form buttons */}
          <div className="flex justify-between pt-5 pr-5">
            <div className="h-1"></div>
            <div>
              <button
                className="text-white background-transparent px-6 py-2 hover:text-red-500 text-xs font-semibold outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  props.setShowModal(false);
                }}
              >
                DISCARD
              </button>
              <button
                className="bg-yellow-500 text-black hover:bg-black hover:text-yellow-500 text-lg font-semibold px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="button"
                onClick={handleEdit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
