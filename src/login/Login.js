import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");

    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log("user info: ",user);

        const currentUser = {
          email:user.email,
        }
        console.log("Current info :",currentUser)
        
        // jwt token
        fetch('http://localhost:5000/jwt',{
          method:"POST",
          headers:{
            'content-type':"Application/json"
          },
          body:JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log("Server data: ",data);

          // local stored store jot token
          localStorage.setItem('token',data.token);
          navigate(from, { replace: true })
        })

        //navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });


      

  };


  //setLoginError(errors.message);
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-2xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <label className="label">
              <span className="label-text">Forget Password? </span>
            </label>
          </div>
          <input
            className="btn btn-accent w-full"
            value="Log In"
            type="submit"
          />
          <div>
            {loginError && (
              <p className="text-red-500 text-base font-bold">{loginError}</p>
            )}
          </div>
        </form>
        <p className=" text-start mb-2 ">
          New Account ?{" "}
          <Link to="/register">
            <span className="text-red-500 font-bold">Create Account</span>
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

export default Login;
