import React from "react";
import useService from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useService();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure");
    if (proceed) {
      const url = `https://safe-oasis-76261.herokuapp.com/service/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remain = services.filter((service) => service._id !== id);
          setServices(remain);
        });
    } else {
      alert("😒");
    }
  };

  return (
    <div>
      <h1>Manage Your Services</h1>
      {services.map((service) => (
        <div>
          <h1>
            {service.name}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
