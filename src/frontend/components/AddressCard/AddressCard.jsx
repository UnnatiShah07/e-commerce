import { useState } from "react";
import FormModal from "../FormModal/FormModal";
import { useAddressContext } from "../../contexts";

const AddressCard = ({ item, isEdit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    state: { address },
    dispatch,
  } = useAddressContext();

  const handleEdit = () => setIsOpen(true);

  const handleDelete = () => {
    const newAddress = address.filter((addr) => addr.id !== item.id);
    dispatch({
      type: "SET_ADDRESS",
      payload: newAddress,
    });
  };

  return (
    <div className="address-card">
      <p className="name">{item.name}</p>
      <p>{`${item.street},`}</p>
      <p>{`${item.city}, ${item.pincode}, ${item.state}, ${item.country}.`}</p>
      <p>{item.mobile}</p>
      {isEdit && (
        <div className="btn-div">
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
      <FormModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editValues={item}
        isEdit
      />
    </div>
  );
};

export default AddressCard;
