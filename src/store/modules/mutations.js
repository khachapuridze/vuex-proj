export const priceMinus = (state,price) => {
    state.amount -= price;
};
export const pricePlus = (state,price) => {
    state.amount += price;
};