import ReactDOM from "react-dom";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useContext } from "react";
import ItemContext from "../assets/contexts/item-context";
import CartItem from "./CartItem";
import data from "../data/items.json";
import formatCurrency from "./formatCurrency";

const Canvas = (props) => {
  const cartCtx = useContext(ItemContext);

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const totalPrice = cartCtx.items.reduce((total, item) => {
    const it = data.find((i) => i.id === item.id);
    return (total += it?.price * item.quantity);
  }, 0);

  return (
    <Offcanvas show={true} onHide={props.onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {cartCtx.items.map((item) => (
            <CartItem key={item.id} onRemove={removeItemHandler} item={item} />
          ))}
          <div className="d-flex flex-column justify-content-center align-items-center pt-3">
            {totalPrice > 0 && (
              <div>
                <div> Total Price {formatCurrency(totalPrice)} </div>
                <div>
                  <Button className="ms-2" variant="danger">
                    Buy
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

const Cart = (props) => {
  return ReactDOM.createPortal(
    <Canvas onHide={props.onHide} />,
    document.getElementById("offcanvas")
  );
};

export default Cart;
