import { createContext, useContext, useReducer } from "react";
import { addressInitState, addressReducer } from "../reducers";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, addressInitState);

  return (
    <AddressContext.Provider value={{ state, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddressContext = () => useContext(AddressContext);

export { AddressProvider, useAddressContext };
