import React, { useState, useEffect, useRef, useContext } from 'react';
import cross from '../../public/cross.png';
import Questions from './Questions';
import axios from 'axios';
import AuthContext from '../../store/auth-context';
import Delete from '../../public/delete.png';
import Edit from '../../public/edit.png';
import FormField from './components/FormField';
import EditFormModal from '../modals/EditFormModal';

// import Questions from './Questions'

function Forms(props) {
  //refs
  const del = useRef(null);
  const selectref = useRef();
  const selectref2 = useRef();
  //context
  const authCtx = useContext(AuthContext);
  //states
  const [eventlist, setEventlist] = useState([]);
  const [regexist, setRegexist] = useState(false);
  const [showFinalData, setShowFinalData] = useState([]);
  const [addField, setAddField] = useState([
    {
      name: '',
      type: 'select',
      default: '',
      autofill: 'none',
      required: false,
    },
  ]);

  const [isAdding, setisAdding] = useState(true);
  const [showForm, setshowForm] = useState(true);
  const [showModal, setShowModal] = useState({ show: false, index: null });
  const [formData, setformData] = useState({
    eventid: '',
    typeofform: '',
    heading: '',
    subtitle: '',
    instruction: '',
  });
  //errors states

  const [showE, setE] = useState('');
  const [showE2, setE2] = useState('');

  useEffect(() => {
    async function makereq() {
      try {
        const resp = await axios.get('/api/events/list');
        const resp2 = await axios.get('/api/form/getForms');
        const data = resp.data;
        const getformdata = resp2.data.forms;
        setEventlist(data.list);
        setShowFinalData(getformdata);
      } catch (e) {
        console.log(e);
      }
    }

    makereq();
  }, []);

  const createForm = async () => {
    const { eventid, typeofform, heading, subtitle, instruction } = formData;
    if (
      eventid !== '' &&
      typeofform !== '' &&
      heading !== '' &&
      subtitle !== '' &&
      instruction !== ''
    ) {
      var final = {
        eventid,
        typeofform,
        heading,
        subtitle,
        instruction,
        fields: addField,
      };

      try {
        const resp = await axios.post('/api/form/createForms', final, {
          headers: { Authorization: `${authCtx.token}` },
        });
        const data = resp.data;
        final._id = data.form._id;
      } catch (e) {
        console.log(e);
      }

      setShowFinalData((e) => [...e, final]);
      selectref.current.value = 'Select';
      selectref2.current.value = 'Select';
      setformData({
        eventid: '',
        typeofform: '',
        heading: '',
        subtitle: '',
        instruction: '',
      });
      setAddField([]);
      setE('');
    } else {
      setE('Please fill all the fields');
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      e.target.style.border = '2px solid  #FF0000';
      e.target.style.outline = 'none';
    } else {
      e.target.style.border = '2px solid  transparent';
    }
    if (e.target.name == 'eventid') {
      async function makereq1() {
        try {
          const resp = await axios.get(`/api/events/checkform/${value}`);
          const data = resp.data;
          if (data.exist == true) {
            setRegexist(true);
          } else {
            setRegexist(false);
          }
        } catch (e) {
          console.log(e);
        }
      }
      makereq1();
    }

    setformData({ ...formData, [e.target.name]: e.target.value });
    // setformM({ ...formData, [e.target.name]: e.target.value })
  };

  const addNewField = (e) => {
    if (isAdding === false) {
      setAddField((old) => [
        ...old,
        {
          name: '',
          type: 'select',
          default: '',
          autofill: 'none',
          required: false,
        },
      ]);
      setisAdding(true);
    }
  };
  //modifying field
  const modifyField = (index, data) => {
    var newFileds = addField;
    newFileds[index] = data;
    setAddField(newFileds);
    setisAdding(false);
  };
  //delete field
  const deleteField = (index) => {
    setAddField((currentItems) => currentItems.filter((_, i) => i !== index));
  };
  // delete form
  const deleteForm = async (fid) => {
    const newFinalData = showFinalData.filter((data) => {
      return data._id !== fid;
    });
    setShowFinalData(newFinalData);

    try {
      const resp = await axios.delete(`/api/form/deleteForms/${fid}`, {
        headers: { Authorization: `${authCtx.token}` },
      });
    } catch (e) {
      console.log(e);
    }
  };

  // editing form
  const updateCard = (key) => {
    setformData({
      eventid: showFinalData[key].eventid,
      heading: showFinalData[key].heading,
      subtitle: showFinalData[key].subtitle,
      instruction: showFinalData[key].instruction,
    });
    setShowModal({ show: true, index: key });
  };

  // add changes
  const editForms = async () => {
    showFinalData[showModal.index].heading = formData.heading;
    showFinalData[showModal.index].subtitle = formData.subtitle;
    showFinalData[showModal.index].instruction = formData.instruction;
    const upadtedforminfo = {
      heading: formData.heading,
      subtitle: formData.subtitle,
      instruction: formData.instruction,
    };
    const fid = showFinalData[showModal.index]._id;
    try {
      closeModal();
      setShowFinalData(showFinalData);

      setformData({
        eventid: '',
        typeofform: '',
        heading: '',
        subtitle: '',
        instruction: '',
      });
      const resp = await axios.patch(
        `/api/form/editForms/${fid}`,
        upadtedforminfo,
        { headers: { Authorization: `${authCtx.token}` } }
      );
    } catch (e) {
      console.log(e);
    }
  };

  // modal
  const closeModal = () => {
    setShowModal({ show: false, index: null });
  };

  return (
    <div className="flex-1 my-12 mx-6 md:mx-20 justify-center w-[60%] items-center">
      <div className="py-4 px-8 rounded-xl bg-[#111111] border-2 border-yellow-500">
        <h1 className="p-2 text-xl sm:text-3xl text-white">Create a Form</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="py-2 px-4">
            <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Select Event
            </h2>
            <select
              className="sm:text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="eventid"
              ref={selectref}
              onChange={onChange}
            >
              <option value="Select" selected disabled hidden>
                Select
              </option>
              {eventlist.map((e) => (
                <option value={e.id}>{e.title}</option>
              ))}
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Type of Form
            </h2>
            <select
              className="sm:text-lg w-full py-0.5 px-1 mx-1 rounded"
              name="typeofform"
              ref={selectref2}
              onChange={onChange}
            >
              <option value={'Select'} selected disabled hidden>
                Select
              </option>
              {regexist == false && (
                <option value="Registration">Registration</option>
              )}
              <option value="Normal">Normal</option>
            </select>
          </div>
          <div className="py-2 px-4">
            <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Heading</h2>
            <input
              className="sm:text-lg w-full py-0.5 px-1 mx-1 rounded"
              placeholder="Enter heading"
              type="text"
              name="heading"
              value={formData.heading}
              onChange={onChange}
            />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-lg sm:text-xl p-1 my-1 text-white">Subtitle</h2>
            <input
              className="sm:text-lg w-full py-0.5 px-1 mx-1 rounded"
              placeholder="Enter subtitle"
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={onChange}
            />
          </div>
          <div className="py-2 px-4">
            <h2 className="text-lg sm:text-xl p-1 my-1 text-white">
              Instructions
            </h2>
            <input
              className="sm:text-lg w-full py-0.5 px-1 mx-1 rounded"
              placeholder="Enter instructions"
              type="text"
              name="instruction"
              value={formData.instruction}
              onChange={onChange}
            />
          </div>
        </div>

        <h1 className="p-2 pt-4 text-xl sm:text-2xl text-white">Add Fields</h1>
        <div className="px-5">
          {addField.length !== 0
            ? addField.map((v, i) => {
                return (
                  <>
                    <FormField
                      key={v.name}
                      data={v}
                      modifyField={modifyField}
                      isAdding={isAdding}
                      index={i}
                      deleteField={deleteField}
                      setisAdding={setisAdding}
                    />
                    <br />
                  </>
                );
              })
            : null}

          {/* For More Feilds */}
        </div>
        <br />
        {showE2 ? <p className="alertText">{showE2}</p> : ''}
        <button
          className="text-xl py-1 px-2 mx-1 my-6 bg-yellow-500 rounded-lg text-white"
          onClick={addNewField}
        >
          + Add field
        </button>
        <br />
        {showE ? <p className="alertText">{showE}</p> : ''}
        <button
          type="submit"
          className="text-2xl py-1.5 px-3 mx-1 my-6 bg-yellow-500 rounded-lg text-white"
          onClick={createForm}
        >
          Create Form
        </button>
      </div>

      {showFinalData ? (
        <div>
          {showFinalData.map((value, key) => {
            var l = showFinalData[key].fields.length;

            return (
              <div
                key={key}
                className="flex flex-col sm:flex-row-reverse  border-2 bg-black bg-opacity-25 border-yellow-500 px- my-5 rounded-xl"
              >
                <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-l border-yellow-500 p-4 flex flex-col items-center">
                  <span className="text-yellow-400">{value._id}</span>
                  <h1 className="p-2 text-3xl text-center text-yellow-500">
                    <b>
                      {eventlist.map((e) => {
                        if (e.id == value.eventid) {
                          return e.title;
                        }
                      })}
                    </b>
                  </h1>
                  <div className="text-white w-[95%] py-3">
                    <p className="text-xl text-center break-words  my-2">
                      {value.heading}
                    </p>
                    <p className="text-xl text-center break-words my-2">
                      {value.subtitle}
                    </p>
                    <p className="text-xl text-white text-center break-words my-2">
                      {value.instruction}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <div
                      className="text-white"
                      onClick={() => deleteForm(value._id)}
                      to=""
                    >
                      <img className="w-6" src={Delete} alt="dlt" />
                    </div>
                    <div
                      className="text-white"
                      onClick={() => updateCard(key)}
                      to=""
                    >
                      <img className="w-6" src={Edit} alt="edit" />
                    </div>
                  </div>
                </div>

                {showForm && (
                  <div className="w-full sm:w-2/3" id="" key={key}>
                    <Questions len={l} fields={showFinalData[key].fields} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}

      {/* modal */}
      {showModal.show ? (
        <EditFormModal
          formData={formData}
          setShowModal={setShowModal}
          closeModal={closeModal}
          editForms={editForms}
          onChange={onChange}
        />
      ) : null}
      {/* modal */}
    </div>
  );
}

export default Forms;
