function InventoryForm(props) {
  const {
    item,
    onChange,
    add,
    allMembers,
    handleTagsChange,
    handleSubmit,
    removeTag,
    discardUpdate,
  } = props;
  return (
    <div className="py-4 px-8 rounded-xl bg-krs-black">
      <h1 className="p-4 text-xl sm:text-xl font-bold font-mont text-white">
        {add ? 'Add' : 'Edit'} an inventory item
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="py-2 px-4">
          <input
            className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mr-4 rounded bg-krs-black text-white placeholder-white border-[0.5px] font-mont border-white-500"
            placeholder="Name"
            type="text"
            name="name"
            value={item.name}
            onChange={onChange}
          />
        </div>
        <div className="py-2 px-4">
          <input
            className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] ml-4 rounded bg-krs-black text-white placeholder-white border-[0.5px] font-mont border-white-500"
            placeholder="Quantity"
            type="number"
            name="quantity"
            value={item.quantity}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="py-2 px-4">
          <input
            className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mr-4 rounded bg-krs-black text-white placeholder-white border-[0.5px] font-mont border-white-500"
            placeholder="Image URL"
            type="text"
            name="image"
            value={item.image}
            onChange={onChange}
          />
        </div>
        <div className="py-2 px-4">
          <select
            className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] ml-4 rounded bg-krs-black text-white placeholder-white border-[0.5px] font-mont border-white-500"
            name="issuedBy"
            value={item.issuedBy}
            onChange={onChange}
          >
            <option hidden className="text-slate-300">
              Issued By
            </option>
            {allMembers.map((e, i) => (
              <option key={i} className="text-slate-300" value={e._id}>
                {e.name} ( {e.email} )
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="py-2 px-4">
          <input
            className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] mr-4 rounded bg-krs-black text-white placeholder-white border-[0.5px] font-mont border-white-500"
            placeholder="Tags"
            type="text"
            name="tag"
            value={item.tag}
            onChange={onChange}
            onKeyDown={handleTagsChange}
          />
        </div>
        <div className="py-2 px-4">
          <select
            className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] ml-4 rounded bg-krs-black text-white placeholder-white border-[0.5px] font-mont border-white-500"
            name="ownedBy"
            value={item.ownedBy}
            onChange={onChange}
          >
            <option hidden className="text-slate-300">
              Owned By
            </option>
            {allMembers.map((e, i) => (
              <option key={i} className="text-slate-300" value={e._id}>
                {e.name} ( {e.email} )
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex py-2 px-4">
        {item.tags.map((e, i) => (
          <div
            key={i}
            className="py-2 px-4 mr-2.5 bg-krs-tags text-white rounded-md flex justify-center items-center p-8"
          >
            <div className="text-base mr-2">{e} </div>
            <button
              className="text-[10px] ml-auto"
              onClick={(ev) => {
                ev.value = e;
                removeTag(ev);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 ">
        <div className="py-2 pl-4">
          <input
            className="sm:text-md w-full py-0.5 px-1 pl-4 h-[45px] rounded bg-krs-black text-white placeholder-white border-[0.5px] font-mont border-white-500"
            placeholder="Remarks"
            type="text"
            name="remarks"
            value={item.remarks}
            onChange={onChange}
          />
        </div>
      </div>
      <div
        className={`flex justify-end mt-5 mb-8 text-base ${
          item.error != '' ? 'text-red-500' : 'text-transparent'
        } font-bold`}
      >
        {item.error != '' ? item.error : 'No error'}
      </div>
      <div className="flex justify-end mt-5 mb-8">
        {!add ? (
          <button
            type="submit"
            className="mr-4 text-xl py-4 px-6 font-medium font-mont bg-krs-yellow rounded-md text-krs-black"
            onClick={discardUpdate}
          >
            DISCARD
          </button>
        ) : (
          <></>
        )}
        <button
          type="submit"
          className="text-xl py-4 px-6 font-medium font-mont bg-krs-yellow rounded-md text-krs-black"
          onClick={handleSubmit}
        >
          {add ? 'Add' : 'Update'} Item
        </button>
      </div>
    </div>
  );
}
export default InventoryForm;
