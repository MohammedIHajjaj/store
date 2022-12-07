import React from "react";
import { Button, Stack } from "react-bootstrap";
import data from "../data/items.json";
import formatCurrency from "./formatCurrency";

const CartItem = (props) => {
  const item = data.find((i) => i.id === props.item.id);
  if (item.id == null) {
    return;
  }

  const removeHandler = () => {
    props.onRemove(item.id);
  };

  return (
    <Stack direction="horizontal" className="mb-1 d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "120px", height: "75px", objectFit: "cover" }}
      />
      <div className="ms-1">
        <div>
          {item.name}
          {props.item.quantity > 1 && <span>X {props.item.quantity}</span>}
        </div>
        <div>{formatCurrency(item.price)}</div>
      </div>
      <div className="ms-auto d-flex flex-column justify-content-center align-items-end">
        <Button onClick={removeHandler} variant="outline-danger">
          X
        </Button>
        <div>{formatCurrency(item.price * props.item.quantity)}</div>
      </div>
    </Stack>
  );
};

export default CartItem;
