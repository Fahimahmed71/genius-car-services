import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Expert = ({ expert }) => {
  const { name, img } = expert;

  return (
    <Col id="experts" className="col-lg-3 col-md-3 col-sm-12 gap={3} ">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <img src={img} alt="" />

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Expert;
