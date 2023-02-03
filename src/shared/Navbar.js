import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="nav justify-center  bg-black h-10 items-center">
      <ul className="nav-ul list-none flex flex-row gap-4 justify-center items-center text-center text-white pt-1">
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="home">Home</Link>
        </li>
        {user?.uid ? (
          
          <>
          <li>
          <Link to="dashboard">DashBoard</Link>
        </li>
          <li>
            <button onClick={handleLogout}>Sign out</button>
          </li>
          </>
        ) : (
          <li>
            <Link to="login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
/*
<ul class="menu">
      <li><Link to="about">About</Link></li>
      <li><Link to="home">Home</Link></li>
      <li><Link to="login">Login</Link></li>
      <li><Link to="register">Register</Link></li>
      
    </ul>
*/
