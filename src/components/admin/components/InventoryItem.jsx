function InventoryItem({ item, getUserFromID, handleEdit, handleDelete }) {
  return (
    <div className="grow lg:max-w-[50%] basis-5/12 rounded-xl flex-col font-mont flex bg-krs-black p-5">
      <div className="flex mb-0.5">
        <div
          className="w-[150px] h-[150px] mr-4 flex justify-center"
          alt="Inventory Item Picture"
        >
          <img
            className="h-full object-scale-down rounded"
            src={item.image}
            alt={item.name}
          ></img>
        </div>
        <div className="text-white">
          <div className="text-4xl text-krs-yellow font-bold mb-1">
            {item.name}
          </div>
          <div className="text-base">Quantity: {item.quantity}</div>
          <div className="text-base">
            Issued By: {getUserFromID(item.issuedBy).name}
          </div>
          <div className="text-base">
            Owned By: {getUserFromID(item.ownedBy).name}
          </div>
          <div className="flex mt-6">
            {item.tags.map((e, i) => (
              <div
                key={i}
                className="p-1.5 rounded-[3.63px] text-sm bg-krs-tags text-white text-center"
              >
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 mt-9">
        <div className="text-white cursor-pointer" onClick={handleEdit}>
          EDIT
        </div>
        <div className="cursor-pointer text-krs-grey" onClick={handleDelete}>
          DELETE
        </div>
      </div>
    </div>
  );
}

export default InventoryItem;
