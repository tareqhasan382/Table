import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

//import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const { signIn } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  //InsertedCount  "http://localhost:5000/users" getInsertedCount `http://localhost:5000/users?email=${signIn.email}`
  const onSubmit = (data) => {
    axios.post("https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users", data).then((res) => {
      if (res.data.acknowledged) {
        alert("Added Successfully");
        reset();
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          type="text"
          placeholder="Name"
          class="input input-bordered w-full max-w-xs  mt-3"
        />
        {errors.name && <p className="text-red-400">{errors.name?.message}</p>}

        <input
          required
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email"
          class="input input-bordered w-full max-w-xs mt-3"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-400">{errors.email?.message}</p>
        )}

        <input
          {...register("phone", {
            required: "must be 11 digit",
            minLength: 11,
          })}
          aria-invalid={errors.phone ? "true" : "false"}
          type="number"
          placeholder="Phone Numbar"
          class="input input-bordered w-full max-w-xs mt-3"
        />
        {errors.phone?.type === "required" && (
          <p className="text-red-400">{errors.phone?.message}</p>
        )}

        <input
          {...register("Amount", { required: "Amount is required" })}
          aria-invalid={errors.Amount ? "true" : "false"}
          type="number"
          placeholder="Amount"
          class="input input-bordered w-full max-w-xs mt-3"
        />
        {errors.phone?.type === "required" && (
          <p className="text-red-400">{errors.Amount?.message}</p>
        )}
        <button class="btn btn-wide w-full max-w-xs mt-3">Add</button>
      </form>
    </div>
  );
};

export default AddUser;

/*
<input
          type="submit"
          className="btn w-full max-w-xs mt-3 bg-black"
        />
*/

/*
axios.post("http://localhost:5000/users", data).then((res) => {
      if (res.data.acknowledged) {
        alert("Added Successfully");
        reset();
      }
    });

*/
