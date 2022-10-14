import React from "react";

import Row from "react-bootstrap/Row";

import img1 from "../../../images/experts/expert-1.jpg";
import img2 from "../../../images/experts/expert-2.jpg";
import img3 from "../../../images/experts/expert-3.jpg";
import img4 from "../../../images/experts/expert-4.jpg";
import img5 from "../../../images/experts/expert-5.jpg";
import Expert from "./Expert/Expert";

const experts = [
  { id: 1, name: "will smith", img: img1 },
  { id: 2, name: "will smith", img: img2 },
  { id: 3, name: "will smith", img: img3 },
  { id: 4, name: "will smith", img: img4 },
  { id: 5, name: "will smith", img: img5 },
];

const Experts = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary">Our Experts</h1>

      <Row>
        {experts.map((experts) => (
          <Expert key={experts.id} expert={experts}></Expert>
        ))}
      </Row>
    </div>
  );
};

export default Experts;
