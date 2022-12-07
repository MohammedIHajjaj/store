import React, { useEffect, useState } from "react";
import ItemContext from "./item-context";

const initialItems = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const ItemProvider = (props) => {
  const [items, setItems] = useState(initialItems);

  const getItemsQuantity = (id) => {
    // const i = items.find((item) => item.id === id);
    // if (i) {
    //   return i.quantity;
    // }else{
    // return 0;
    // }
    return items.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id) => {
    setItems((prev) => {
      if (!prev.find((item) => item.id === id)) {
        return [...items, { id: id, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQuantity = (id) => {
    setItems((prev) => {
      if (!prev.find((item) => item.id === id)) {
        return prev.filter((i) => i.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id) => {
    setItems((prev) => {
      prev.filter((item) => item.id !== id);
    });
  };

  const defaultValues = {
    items,
    getItemsQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemContext.Provider value={defaultValues}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
