import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://safe-oasis-76261.herokuapp.com/service`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="w-25 mx-auto">
      <h1>Add Something</h1>
      <form
        className="d-flex flex-column gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea placeholder="Discription" {...register("desc")} />
        <input placeholder="price" type="number" {...register("price")} />
        <input placeholder="photoURL" type="text" {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
