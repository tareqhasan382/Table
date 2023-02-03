import React, { useState } from "react";
import axios from "axios";

const Add = () => {
  const [user, setUser] = useState({});

  const handleAdder = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("added successfully");
          event.target.reset();
        }
      });
  };
  

  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div className=" justify-center w-1/2 items-center m-20 ">
      <h3>Please Add new info</h3>
      <form
        onSubmit={handleAdder}
        className="flex flex-col gap-5 items-center justify-center lg:w-1/2"
      >
        <input
          onBlur={handleInputBlur}
          autoComplete="off"
          className="input input-bordered w-full max-w-xs"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          onBlur={handleInputBlur}
          className="input input-bordered w-full max-w-xs"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          onBlur={handleInputBlur}
          className="input input-bordered w-full max-w-xs"
          type="phone"
          name="phone"
          placeholder="Phone"
          required
          min="11"
          max="15"
        />
        <input
          onBlur={handleInputBlur}
          className="input input-bordered w-full max-w-xs"
          type="number"
          name="Amount"
          placeholder="Amount"
          required
        />
        <button
          type="Add"
          className="input text-lg font-bold input-bordered w-full max-w-xs"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
