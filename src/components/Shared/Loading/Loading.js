import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="w-100 ">
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loading;
