export const addressInitState = {
  address: [
    {
      id: 1,
      name: "Amit Shah",
      street: "105 B, Twin Arcade, Military Road, Andheri(e)",
      city: "Bangalore",
      pincode: "400059",
      state: "Karnataka",
      country: "India",
      mobile: "1234567890",
    },
  ],
  deliveryAddress: {
    id: 1,
    name: "Amit Shah",
    street: "105 B, Twin Arcade, Military Road, Andheri(e)",
    city: "Bangalore",
    pincode: "400059",
    state: "Karnataka",
    country: "India",
    mobile: "1234567890",
  },
  inputAddress: {
    name: "Manish Manohtra",
    street: "102, Bapu Khote St, Jamli Mohalla, Mandvi",
    city: "Mumbai",
    pincode: "400003",
    state: "Maharashtra",
    country: "India",
    mobile: "02223461193",
  },
  orderDetails: [],
};

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_DELIVERY_ADDRESS":
      return { ...state, deliveryAddress: action.payload };
    case "SET_INPUT_ADDRESS":
      return { ...state, inputAddress: action.payload };
    case "SET_ORDER_DETAILS":
      return {
        ...state,
        orderDetails: [...state.orderDetails, action.payload],
      };
    default:
      return state;
  }
};
