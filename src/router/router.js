import { createBrowserRouter } from "react-router-dom";
import About from "../component/About";
import AddUser from "../component/dashboard/AddUser";
//import Add from "../component/dashboard/Add";
import Adminbar from "../component/dashboard/Adminbar";
import DashBoard from "../component/dashboard/DashBoard";
import Table from "../component/dashboard/Table";
import UpdateUser from "../component/dashboard/UpdateUser";
import Home from "../component/Home";
import NotFound from "../component/NotFound";
import Main from "../layout/Main";
import Login from "../login/Login";
import Register from "../login/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <About></About>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "table",
        element: <Table> </Table>,
        //loader: () => fetch("https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users"),
      }
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
  },
  {
    path: "add",
    element: (
      <PrivateRoute>
        <AddUser></AddUser>
      </PrivateRoute>
    ),
    loader: () => fetch("https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users"),
  },
  {
    path: "admin",
    element: <PrivateRoute><Adminbar></Adminbar></PrivateRoute> ,
    loader: () => fetch("https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users"),
  },
  {
    path: "/update/:id",
    element: (
      <PrivateRoute>
        <UpdateUser></UpdateUser>
      </PrivateRoute>
    ),
    loader: ({params}) =>fetch(`https://t-server-9mew5zhwx-tareqhasan382.vercel.app/users/${params.id}`)
  },
  {
    path:"*",
    element: <NotFound></NotFound>
  }

]);

export default router;
