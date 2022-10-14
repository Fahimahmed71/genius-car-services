import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, img, price, description } = service;
  const navigate = useNavigate();

  const handleServiceId = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div  id="services" className="service">
      <img src={img} alt="" />
      <h1 style={{ margin: "0" }}>{name}</h1>
      <h4 style={{ margin: "0" }}>Price:{price}</h4>
      <h4 style={{ margin: "0" }}>
        <small>{description}</small>
      </h4>
      <button
        onClick={() => handleServiceId(_id)}
        className="bg-primary border-0 px-5 text-white mt-3"
      >
        Service
      </button>
    </div>
  );
};

export default Service;
