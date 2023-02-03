import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
//import { AuthContext } from "../../context/AuthProvider";
//import { Link } from "react-router-dom";
import "./Table.css";
import ReactPaginate from "react-paginate";
import AddUser from "./AddUser";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
//import UpdateUser from "./UpdateUser";

const Table = (props) => {
  const { signIn } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  //const [query, setQuery] = useState(""); `http://localhost:5000/users?email=${signIn.email}`
  const { query } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState("");
  const [itemOffset, setItemOffset] = useState("");
  const itemPerPage = 10;

  useEffect(() => {
    axios
      .get(`https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users?email=${signIn?.email}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
      });
  }, [signIn?.email]);

  let total = 0;
  for (const user of userData) {
    total = total + parseInt(user.Amount);
  }

  //const [displayUsers, setDisplayUsers]=useState(userData);
  const handleDelete = (item) => {
    // console.log(item.name)
    const agree = window.confirm(`Are you Sure ? want to delete: ${item.name}`);
    //console.log(agree);
    if (agree) {
      fetch(`https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users/${item._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("user deleted successfully");
            const remainingUsers = currentItems.filter(
              (user) => user._id !== item._id
            );
            setCurrentItems(remainingUsers);
          }
        });
    }
  };

  useEffect(() => {
    const endOffset = itemOffset + itemPerPage;
    setCurrentItems(userData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userData.length / itemPerPage));
  }, [itemOffset, itemPerPage, userData]);

  const handlePageClick = (event) => {
    console.log(event.selected);
    const newOffset = (event.selected * itemPerPage) % userData.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="lg:w-full">
      <div className="bg-gray-200">
        <table className=" bg-slate-400  flex flex-row items-center justify-around w-full lg:mx-20 xs:ml-3">
          <h1 className="my-3 text-base lg:font-bold xs:font-xs text-right">
            Billing page
          </h1>
          <h1 className="text-base lg:font-bold xs:font-xs text-right">
            Total Amount : {total}{" "}
          </h1>

          {/* modal */}
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
                <AddUser />
              </div>
            </div>
          </div>
        </table>
        <div className="overflow-x-auto xs:overflow-x-scroll">
          <table className="table table-compact lg:ml-20 xs:mx-2">
            <tr className="bg-teal-400 ">
              <th>Id</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Total Paid</th>
              <th>Action</th>
            </tr>
            {currentItems
              .filter((item) => {
                if (query === "") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(query.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.email.toLowerCase().includes(query.toLowerCase())
                ) {
                  return item;
                } else if (item.length === 0) {
                  return (item = { name: "no Data" }); //setUserData([{"name":"no Data"}] //tabIndex + 1   // console.log(item.name)
                }
              })
              .map((item) => (
                <tr key={item._id}>
                  <td>{item._id} </td>
                  <td>{item.name} </td>
                  <td>{item.email} </td>
                  <td>{item.phone} </td>
                  <td>{item.Amount} </td>
                  <td>
                    <div className="flex flex-row gap-3 font-bold ">
                      <Link to={`/update/${item._id}`}>
                        <label
                          for="add-modal"
                          className="w-8 h-5 px-2 py-1 font-bold rounded bg-orange-500 m-3"
                        >
                          Edit
                        </label>
                      </Link>

                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-xs btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
      <div className="ml-2 mr-3 my-5 justify-center items-center ">
        <ReactPaginate
          previousLabel="<previous"
          breakLabel="..."
          nextLabel="next>"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeClassName="active"
        />
      </div>
    </div>
  );
};

export default Table;
/*

                <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs  mt-3" />
                <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs mt-3" />
                <input type="text" placeholder="Phone Numbar" class="input input-bordered w-full max-w-xs mt-3" />
                <input type="text" placeholder="Amount" class="input input-bordered w-full max-w-xs mt-3" /> 
                <button class="btn btn-wide w-full max-w-xs mt-3">Add</button>


<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>



pageRangeDisplayed={2}
renderOnZeroPageCount={null}


<Link to="/add">
            <button className="lg:m-2 lg:text-base xs:text-xs w-10 h-10 rounded bg-orange-500 m-3">
              Add
            </button>
          </Link>
*/
