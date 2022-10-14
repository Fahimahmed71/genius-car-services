import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);

  //  const [user, setUser] = useState({
  //   name: "meo",
  //   email: "Meo@mail.com",
  //   phone: "00000000000",
  // });

  // const handleNameChange = (e) => {
  //   console.log(e.target.value);
  //   const { name, ...rest } = user;
  //   const newName = e.target.value;
  //   const newUser = { name: newName, ...rest };
  //   setUser(newUser);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      user: user?.displayName,
      email: user?.email,
      service: service?.name,
      tel: e.target.tel.value,
    };
    console.log(order);
    axios
      .post("https://safe-oasis-76261.herokuapp.com/order", order)
      .then((res) => {
        const { data } = res;
        if (data.insertedId) {
          alert("meo");
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <h1>Checkout item {service?.name}</h1>
      <form onSubmit={handleSubmit}>
        <input
          // onChange={handleNameChange}
          value={user?.displayName}
          disabled
          readOnly
          className="w-25 d-block mx-auto"
          type="text"
          placeholder="First name"
          required
        />
        <br />
        <input
          value={user?.email}
          readOnly
          disabled
          className="w-25 d-block mx-auto"
          type="text"
          placeholder="Email"
        />
        <br />

        <input
          className="w-25 d-block mx-auto"
          type="text"
          readOnly
          disabled
          value={service?.name}
          placeholder="Service"
        />
        <br />
        <input
          // value={user.phone}
          className="w-25 d-block mx-auto"
          type="tel"
          name="tel"
          placeholder="Mobile number"
          required
        />
        <br />

        <input className="d-block mx-auto" type="submit" />
      </form>
    </div>
  );
};

export default CheckOut;
