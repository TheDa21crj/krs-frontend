const EditFormModal = ({setShowModal,formData,onChange,closeModal,editForms}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="bg-[#111111] border-2 border-yellow-500 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl text-white font-semibold">Edit form</h3>
              <button
                className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal({ show: false, index: null })}
              >
                <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="py-2 px-4">
                <h2 className="text-xl p-1 my-1 text-white">Heading</h2>
                <input
                  className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                  placeholder="Enter heading"
                  type="text"
                  name="heading"
                  value={formData.heading}
                  onChange={onChange}
                />
              </div>
              <div className="py-2 px-4">
                <h2 className="text-xl p-1 my-1 text-white">Subtitle</h2>
                <input
                  className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                  placeholder="Enter subtitle"
                  type="text"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={onChange}
                />
              </div>
              <div className="py-2 px-4">
                <h2 className="text-xl p-1 my-1 text-white">Instructions</h2>
                <input
                  className="text-lg w-full py-0.5 px-1 mx-1 rounded"
                  placeholder="Enter instructions"
                  type="text"
                  name="instruction"
                  value={formData.instruction}
                  onChange={onChange}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close{" "}
              </button>
              <button
                className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={editForms}
              >
                Save Changes{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default EditFormModal;
