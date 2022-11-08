import React, { createContext, useState } from "react";
export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(false);
  const toggleStore = () => {
    setStore(!store);
  };

  

  return (
    <StoreContext.Provider value={{ store, toggleStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;