import React from "react";

const ItemContext = React.createContext({
  items: [],
  getItemsQuantity: (id) => {},
  increaseItemQuantity: (id) => {},
  decreaseItemQuantity: (id) => {},
  removeItem: (id) => {},
});

export default ItemContext;
