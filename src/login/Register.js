import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState("");

  const handleRegister = (data) => {

    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user created successfully.");

        fetch("https://t-server-9mew5zhwx-tareqhasan382.vercel.app/registation", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert("Registation successfully");
          }
        });
        const userInfo = {
          displayName: data.name,

          
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
      
  };

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl">Sign Up</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              autoComplete="off"
              className="input input-bordered w-full max-w-xs"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              required
              autoComplete="off"
              className="input input-bordered w-full max-w-xs"
              type="text"
              {...register("number", { required: true })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              autoComplete="off"
              className="input input-bordered w-full max-w-xs"
              type="text"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              required
              autoComplete="off"
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password")}
            />
            <label className="label">
              <span className="label-text">Forget Password? </span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600 ">{signUpError}</p>}
        </form>
        <p className=" text-start mb-2 ">
          Alreaday have an Account ?{" "}
          <Link to="/login">
            <span className="text-red-500 font-bold">Sign In</span>
          </Link>{" "}
        </p>
        <div class="divider">OR</div>
        <button className="uppercase btn btn-outline w-full ">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Register;
