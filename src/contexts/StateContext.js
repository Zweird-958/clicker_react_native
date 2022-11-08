import React, { createContext, useState } from "react";
import { INITIAL_STATE, SHOP_ITEMS_BUYABLE, SHOP_MULTIPLIER } from "../config";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const upMoney = () => {
    setState({ ...state, money: state.money + state.cpc });
  };

  const resetData = () => {
    setState(INITIAL_STATE);
    setItem(SHOP_ITEMS_BUYABLE);
  };

  const [item, setItem] = useState(SHOP_ITEMS_BUYABLE);

  const saveShop = (id) => {
    let actualItem = item[id];
    let updatedValue = {};
    updatedValue = {
      ...actualItem,
      price: Math.round(actualItem.price * SHOP_MULTIPLIER),
      owned: actualItem.owned + 1
    };
    setItem(
      SHOP_ITEMS_BUYABLE.map((shop, index) =>
        index === id ? updatedValue : { ...item[index] }
      )
    );
  };

  const buyItem = (index) => {
    const actualItem = item[index];
    const price = actualItem.price;
    if (price <= state.money) {
      setState({
        ...state,
        money: state.money - price,
        cps: state.cps + actualItem.cps,
        cpc: state.cpc + actualItem.cpc
      });
      saveShop(index);
    }
  };
  

  return (
    <StateContext.Provider value={{ state, upMoney, resetData, buyItem, item }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;