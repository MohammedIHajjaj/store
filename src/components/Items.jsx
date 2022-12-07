import React from "react";
import { Col, Row } from "react-bootstrap";
import data from "../data/items.json";
import Item from "./Item";

const Items = () => {
  return (
    <Row sm={1} md={2} lg={3} className='g-3'>
      {data.map((item) => (
        <Col key={item.id}>
          <Item item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default Items;
