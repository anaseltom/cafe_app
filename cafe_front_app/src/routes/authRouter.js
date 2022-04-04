import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
// const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Login = lazy(() => import("../auth/login"));
const Register = lazy(() => import("../auth/register"));

/*****Routes******/

const AuthRoutes = [
  {
    path: "/",
    // element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/register", exact: true, element: <Register /> },
    ],
  },
];

export default AuthRoutes;
