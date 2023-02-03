import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { json, useLoaderData, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const update = useLoaderData();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  //InsertedCount  getInsertedCount   http://localhost:5000/users/${params.id}   http://localhost:5000/users/${params.id}
  const onSubmit = (data) => {
    console.log(data)
    fetch(`https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users/${update._id}`,{
      method:"PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount >0 ){
        alert("Updated successfully.")
        reset();
        navigate("/dashboard");
      }
    })
    
  };
  //InsertedCount  getInsertedCount

  return (
    <div className="justify-center items-center mt-10 flex flex-col">
      <h3 className="lg:text-xl xs:text-normal font-bold ">
        Update Data: {update.name}{" "}
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
        defaultValue={update.name}
          {...register("name", { required: "name is required" })}
          aria-invalid={errors.name ? "true" : "false"}
          type="text"
          placeholder="Name"
          class="input input-bordered w-full max-w-xs  mt-3"
        />
        {errors.name && <p className="text-red-400">{errors.name?.message}</p>}

        <input
        defaultValue={update.email}
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
        defaultValue={update.phone}
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
        defaultValue={update.Amount}
          {...register("Amount", { required: "Amount is required" })}
          aria-invalid={errors.Amount ? "true" : "false"}
          type="number"
          placeholder="Amount"
          class="input input-bordered w-full max-w-xs mt-3"
        />
        {errors.phone?.type === "required" && (
          <p className="text-red-400">{errors.Amount?.message}</p>
        )}
        <button class="btn btn-wide w-full max-w-xs mt-3">Update Data</button>
      </form>
    </div>
  );
};

export default UpdateUser;

/*

<form className="flex flex-col gap-2" onSubmit={handleUpdateData}>
        <div className="form-control">
          <label className="label"></label>
          <label className="input-group input-group-vertical">
            <span className="max-w-xs">Name</span>
            <input
              type="text"
              onChange={handleInputChange}
              defaultValue={update.name}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label"></label>
          <label className="input-group input-group-vertical">
            <span className="max-w-xs">Email</span>
            <input
              type="email"
              onChange={handleInputChange}
              defaultValue={update.email}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label"></label>
          <label className="input-group input-group-vertical">
            <span className="max-w-xs">Phone</span>
            <input
              type="number"
              onChange={handleInputChange}
              defaultValue={update.phone}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label"></label>
          <label className="input-group input-group-vertical">
            <span className="max-w-xs">Amount</span>
            <input
              type="number"
              onChange={handleInputChange}
              defaultValue={update.Amount}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>

        <button
          type="submit"
          className="input input-bordered w-full bg-slate-800 text-white max-w-xs  mt-3"
        >
          Update User
        </button>
      </form>












<div>
            <label
              for="add-modal"
              className="w-8 h-5 px-2 py-1 font-bold rounded bg-orange-500 m-3"
            >
              Add
            </label>

            <input type="checkbox" id="add-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  for="add-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Add New data</h3>
                <AddUser/>
              </div>
            </div>
          </div>



          <form className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs  mt-3"
        />
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs mt-3"
        />
        <input
          type="text"
          placeholder="Phone Numbar"
          className="input input-bordered w-full max-w-xs mt-3"
        />
        <input
          type="text"
          placeholder="Amount"
          className="input input-bordered w-full max-w-xs mt-3"
        />
        <button className="btn btn-wide w-full max-w-xs mt-3">Update User</button>
      </form>

*/



/*

axios.put(`http://localhost:5000/users/${update.id}`, data).then((res) => {
      if (res.data.modifiedCount> 0) {
        alert("Updated Successfully");
        reset();
      }
    });

*/



/*

const [updateData, setupdateData] = useState(update); //
  //user    setUser

  const handleUpdateData = (event) => {
    event.preventDefault();
    console.log(updateData);// http://localhost:5000/users/${params.id}    http://localhost:5000/users/${item._id}
   
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newData = { ...updateData };
    newData[field] = value;
    setupdateData(newData);
  };
*/
