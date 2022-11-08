export const SHOP_HEADING = ["NAME", "CPS", "CPC", "PRICE", "OWNED"];

export const INITIAL_STATE = {
  money: 0,
  cps: 0,
  cpc: 1,
};

export const SHOP_ITEMS_BUYABLE = [
  {
    name: "Basic Miner",
    cpc: 1,
    cps: 0,
    price: 10,
    owned: 0,
  },
  {
    name: "Advanced Miner",
    cpc: 1,
    cps: 5,
    price: 20,
    owned: 0,
  },
];

export const SHOP_MULTIPLIER = 1.1;
