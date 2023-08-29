import axios from 'axios';
import AuthContext from '../../store/auth-context';
import { useContext, useEffect, useState } from 'react';
import InventoryForm from './components/InventoryForm';
import InventoryItem from './components/InventoryItem';

const initItem = {
  name: '',
  quantity: 0,
  image: '',
  issuedBy: '',
  tag: '',
  tags: [],
  ownedBy: '',
  remarks: '',
  error: '',
};

const errors = [
  'Invalid Name.',
  'Invalid quantity.',
  "Invalid image URL. Image URL should start with https:// and should end with a picture's extension like .jpg",
  'Select a valid option for issuer.',
  'Invalid tag',
  'Select a valid option for the owner',
  'Invalid remarks',
];

function Inventory() {
  const [allMembers, setAllMembers] = useState([]);
  const [initialItems, setInitalItems] = useState([]);
  const [item, setItem] = useState(JSON.parse(JSON.stringify(initItem)));
  const [currentItem, setCurrentItem] = useState(
    JSON.parse(JSON.stringify(initItem))
  );
  const [showModal, setShowModal] = useState(false);
  const authCtx = useContext(AuthContext);
  const getAllMembers = async () => {
    const members = await axios.get('/api/members');
    return members.data;
  };
  const getAllItems = async () => {
    const items = await axios.get('/api/inventory/get');
    setInitalItems(items.data);
  };
  const init = async () => {
    const data = await getAllMembers();
    setAllMembers(data);
    await getAllItems();
  };
  useEffect(() => {
    init();
  }, []);
  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleCurrentChange = (e) => {
    setCurrentItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const getUserFromID = (id) => {
    return allMembers.find((val, index, obj) => val._id == id);
  };
  const handleTagsChange = (e) => {
    if (e.key == 'Enter') {
      let tags = item.tags;
      tags.push(e.target.value);
      setItem((prev) => ({ ...prev, tags, tag: '' }));
    }
  };
  const handleCurrentTagsChange = (e) => {
    if (e.key == 'Enter') {
      let tags = currentItem.tags;
      tags.push(e.target.value);
      setCurrentItem((prev) => ({ ...prev, tags, tag: '' }));
    }
  };
  const removeTag = (e) => {
    let tags = item.tags;
    tags = tags.filter((val, i, arr) => val != e.value);
    setItem((prev) => ({ ...prev, tags }));
  };
  const removeCurrentTag = (e) => {
    let tags = currentItem.tags;
    tags = tags.filter((val, i, arr) => val != e.value);
    setCurrentItem((prev) => ({ ...prev, tags }));
  };
  const discardUpdate = (e) => {
    setCurrentItem(JSON.parse(JSON.stringify(initItem)));
    setShowModal(false);
  };
  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete('/api/inventory/delete', {
        headers: { Authorization: authCtx.token },
        data: { id: id },
      });
      await getAllItems();
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = async (c) => {
    try {
      const currentUser = allMembers.find(
        (val, i, obj) => val.email == authCtx.user.email
      );
      if (currentUser && currentUser._id == initialItems[c].ownedBy) {
        const itemObj = initialItems[c];
        setCurrentItem({
          id: initialItems[c]._id,
          name: itemObj.name,
          quantity: itemObj.quantity,
          image: itemObj.image,
          issuedBy: itemObj.issuedBy,
          tag: itemObj.tag,
          tags: itemObj.tags,
          ownedBy: itemObj.ownedBy,
          remarks: itemObj.remark,
        });
        setShowModal(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const validate = (item) => {
    if (item.name == '') return errors[0];
    if (item.quantity == '') return errors[1];
    if (
      !/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim.test(
        item.image
      ) &&
      item.image != ''
    )
      return errors[2];
    if (item.issuedBy == '') return errors[3];
    if (item.ownedBy == '') return errors[4];
    return null;
  };
  const handleSubmit = async (e) => {
    try {
      const errorMsg = validate(item);
      if (!errorMsg) {
        const iItem = {
          name: item.name,
          quantity: item.quantity,
          issuedBy: item.issuedBy,
          tags: item.tags,
          ownedBy: item.ownedBy,
          remark: item.remarks,
        };
        if (item.image != '') iItem.image = item.image;
        const resp = await axios.post('/api/inventory/add', iItem, {
          headers: { Authorization: `${authCtx.token}` },
        });
        await getAllItems();
        setItem(JSON.parse(JSON.stringify(initItem)));
      } else {
        setItem((prev) => ({ ...prev, error: errorMsg }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCurrentSubmit = async (e) => {
    try {
      const errorMsg = validate(currentItem);
      if (!errorMsg) {
        const iItem = {
          id: currentItem.id,
          name: currentItem.name,
          quantity: currentItem.quantity,
          issuedBy: currentItem.issuedBy,
          tags: currentItem.tags,
          ownedBy: currentItem.ownedBy,
          remarks: currentItem.remarks,
        };
        if (currentItem.image != '') iItem.image = currentItem.image;
        await axios.patch('/api/inventory/update', iItem, {
          headers: { Authorization: `${authCtx.token}` },
        });
        await getAllItems();
        setItem(JSON.parse(JSON.stringify(initItem)));
      } else {
        setCurrentItem((prev) => ({ ...prev, error: errorMsg }));
      }
    } catch (err) {
      console.log(err);
    }
    setShowModal(false);
  };
  return (
    <div className="flex-1 mx-6 md:mx-20 justify-center items-center">
      <div className="py-4 rounded-xl">
        <h1 className="p-2 pl-[120px] md:px-4 lg:px-1 text-3xl font-bold font-mont text-krs-yellow">
          Inventory
        </h1>
      </div>
      <InventoryForm
        item={item}
        add={true}
        onChange={handleChange}
        allMembers={allMembers}
        handleTagsChange={handleTagsChange}
        handleSubmit={handleSubmit}
        removeTag={removeTag}
      ></InventoryForm>
      <div className="my-8 rounded-xl">
        <h1 className="px-2 pl-[120px] md:px-4 lg:px-1 text-3xl font-bold font-mont text-krs-yellow">
          All Inventory Items
        </h1>
        <div className="flex gap-4 flex-wrap my-8">
          {initialItems.map((i, c) => (
            <InventoryItem
              key={c}
              getUserFromID={getUserFromID}
              item={i}
              handleEdit={(e) => {
                handleEdit(c);
              }}
              handleDelete={(e) => {
                handleDelete(i._id);
              }}
            ></InventoryItem>
          ))}
        </div>
      </div>
      {showModal ? (
        <div className="fixed w-full h-full z-50 top-0 -left-0 flex justify-center bg-black/50 fade-anim">
          <div className="flex justify-center items-center w-full h-screen">
            <InventoryForm
              item={currentItem}
              add={false}
              onChange={handleCurrentChange}
              allMembers={allMembers}
              handleTagsChange={handleCurrentTagsChange}
              handleSubmit={handleCurrentSubmit}
              removeTag={removeCurrentTag}
              discardUpdate={discardUpdate}
            ></InventoryForm>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Inventory;
