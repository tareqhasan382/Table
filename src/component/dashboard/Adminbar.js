import React from "react";
import { useLoaderData } from "react-router-dom";

const Adminbar = () => {
  const users = useLoaderData();
  const number = users.length;
  return (
    <div>
      <h1>Billing Data : {number} </h1>
      <h2>{users.length}</h2>
        {
          users.map(data=> <div key={data._id}>

          </div>)
        }
      
    </div>
  );
};

export default Adminbar;

/*

{[...Array(number).keys()].map((number) => (
        <tr>
          {users.map((data) => (
            <div key={data._id}>
              <td>{number}</td>
              <td>{data.name} </td>
              <td>{data.email} </td>
              <td>{data.phone} </td>
              <td>{data.Amount} </td>
            </div>
          ))}
        </tr>
      ))}

*/
