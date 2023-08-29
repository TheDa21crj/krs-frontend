import { useEffect, useRef, useState } from 'react';

const FormField = ({
  setisAdding,
  modifyField,
  deleteField,
  isAdding,
  data,
  index,
}) => {
  const [isDone, setIsDone] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [fielddata, setFieldData] = useState({
    name: '',
    type: 'select',
    default: '',
    autofill: 'none',
    required: false,
  });
  const OnValueChange = (e) => {
    const name = e.target.name;
    var value = e.target.value;
    if (name === 'required') {
      value = !fielddata.required;
    }
    setFieldData({ ...fielddata, [name]: value });
  };

  const OnDone = () => {
    if (fielddata.name === '' || fielddata.type === '') {
      setErrMsg('Please fill all the Fields');
      return;
    }
    setErrMsg('');
    setIsDone(true);
    modifyField(index, fielddata);
  };
  const editField = () => {
    if (isAdding === false) {
      setisAdding(true);
      setIsDone(false);
    }
  };
  const discardChange = () => {
    setFieldData(data);
  };
  const onDelete = () => {
    if (isAdding === false) {
      deleteField(index);
    }
  };
  useEffect(() => {
    setFieldData(data);
    if (JSON.stringify(data) !== JSON.stringify(fielddata)) {
      setIsDone(true);
    }
  }, []);

  return (
    <>
      <div className=" flex  items-center flex-wrap w-full justify-start ">
        <input
          className="sm:text-lg w-[30%] py-0.5 px-1 mx-1  rounded"
          placeholder="Name"
          type="text"
          name="name"
          value={fielddata.name}
          onChange={OnValueChange}
        />
        <select
          className="sm:text-lg w-1/3 py-0.5 px-1 mx-1 rounded"
          name="type"
          value={fielddata.type}
          onChange={OnValueChange}
        >
          <option name="type" value="select" selected>
            select
          </option>
          <option name="type" value="text">
            text
          </option>
          <option name="type" value="number">
            number
          </option>
          <option name="type" value="email">
            email
          </option>
          <option name="type" value="checkbox">
            checkbox
          </option>
          <option name="type" value="multiplecheckbox">
            multiple checkbox
          </option>
          <option name="type" value="dropdown">
            dropdown
          </option>
        </select>
        <input
          className="sm:text-lg w-1/3 py-0.5 px-1 mx-1 rounded"
          placeholder="default"
          type="text"
          name="default"
          value={fielddata.default}
          onChange={OnValueChange}
        />

        <select
          className="sm:text-lg w-[30%] mt-3 mr-4 py-0.5 px-1 mx-1 rounded"
          name="autofill"
          value={fielddata.autofill}
          onChange={OnValueChange}
        >
          <option value="none" selected>
            none
          </option>
          <option name="autofill" value="name">
            name
          </option>
          <option name="autofill" value="email">
            email
          </option>
          <option name="autofill" value="roll">
            roll
          </option>
          <option name="autofill" value="branch">
            branch
          </option>
          <option name="type" value="year">
            year
          </option>
          <option name="autofill" value="contact">
            contact
          </option>
        </select>
        <label className="w-1/3">
          <input
            checked={fielddata.required}
            onChange={OnValueChange}
            type="checkbox"
            name="required"
          />
          <span className="ml-2 text-red-500">Mark as mandatory</span>
        </label>
        {isDone === false && (
          <>
            <div className="w-1/3 flex items-start pt-3 cursor-pointer justify-center gap-4">
              <div className="text-[#8F8E8E]" onClick={discardChange}>
                DISCARD
              </div>
              <div className="text-white" onClick={OnDone}>
                DONE
              </div>
            </div>
          </>
        )}
        {isDone === true && (
          <>
            <div className="w-1/3 flex items-start pt-3 cursor-pointer justify-center gap-4">
              <div className="text-[#8F8E8E]" onClick={onDelete}>
                DELETE
              </div>
              <div className="text-white" onClick={editField}>
                EDIT
              </div>
            </div>
          </>
        )}
      </div>
      <div className="text-red-500">{errMsg}</div>
    </>
  );
};
export default FormField;
