import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import ItemContext from "../assets/contexts/item-context";
import formatCurrency from "./formatCurrency";

const Item = (props) => {
  const item = props.item;

  const itemCtx = useContext(ItemContext);

  const quantity = itemCtx.getItemsQuantity(item.id);

  const minHandler = () => {
    itemCtx.decreaseItemQuantity(item.id);
    console.log(item);
  };

  const addHandler = () => {
    itemCtx.increaseItemQuantity(item.id);
    console.log(item);
  };

  const removeHandler = () => {
    itemCtx.removeItem(item.id);
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={item.imgUrl}
        style={{ height: "18rem", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span className="fs-2">{item.name}</span>
          <span className="text-muted me-2">{formatCurrency(item.price)}</span>
        </Card.Title>

        <div className="d-flex justify-content-center">
          {quantity === 0 ? (
            <Button variant="primary" className="w-100" onClick={addHandler}>
              Add To Cart
            </Button>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex align-items-center">
                <Button onClick={minHandler}>-</Button>
                <span className="fs-2 ms-2 me-2">{quantity} in cart</span>
                <Button onClick={addHandler}>+</Button>
              </div>
              <Button className="btn-danger mt-2" onClick={removeHandler}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
