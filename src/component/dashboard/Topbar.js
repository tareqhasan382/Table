import React from "react";
import { Link } from "react-router-dom";

const Topbar = (props) => {
  const {query, setQuery} = props;

  return (
    <div>
      <div class="navbar bg-primary lg:px-20">
        <div class="flex-1 ">
          <Link
            to="/"
            class="btn btn-ghost normal-case text-white xs:text-md lg:text-xl"
          >
            Power-Hack
          </Link>
        </div>
        <div class="flex-none gap-2">
          <div class="form-control lg:w-100 xs:w-[50px]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search"
              class="input input-bordered input-sm"
            />
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://pngimg.com/uploads/wordpress/wordpress_PNG28.png" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
