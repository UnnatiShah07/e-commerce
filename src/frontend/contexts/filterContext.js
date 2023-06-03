import { createContext, useContext, useReducer } from "react";
import { filterInitState, filterReducer } from "../reducers";
import { useProductContext } from "./productContext";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, filterInitState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterProvider, useFilterContext };
