import "./checkout.css";
import { useAddressContext } from "../../contexts";
import { AddressCard, CartTotalCard, FormModal } from "../../components";
import { useState } from "react";

const Checkout = () => {
  const {
    state: { address },
  } = useAddressContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="checkout-page">
      <p className="heading">Checkout</p>

      <div className="list-container">
        <div className="list-product-div">
          {address.length ? (
            address.map((item) => (
              <RadioAddressCard item={item} key={item.id} />
            ))
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              style={{ alignSelf: "center" }}
            >
              Add new address
            </button>
          )}
        </div>
        <div className="list-total-div">
          <CartTotalCard />
        </div>
      </div>
      <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Checkout;

const RadioAddressCard = ({ item }) => {
  const {
    state: { deliveryAddress },
    dispatch,
  } = useAddressContext();

  const updateDeliveryAddress = () =>
    dispatch({ type: "SET_DELIVERY_ADDRESS", payload: item });

  return (
    <div className="radio-addr-div">
      <input
        type="radio"
        name={`address${item.id}`}
        id={`address${item.id}`}
        checked={deliveryAddress.id === item.id}
        onChange={updateDeliveryAddress}
      />
      <AddressCard item={item} isEdit={false} />
    </div>
  );
};
