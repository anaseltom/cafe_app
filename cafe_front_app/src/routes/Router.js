import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Orders = lazy(() => import("../views/Orders.js"));
const Category = lazy(() => import("../views/Category.js"));
const Product = lazy(() => import("../views/Product.js"));
const Profile = lazy(() => import("../views/Profile.js"));
const AllOrders = lazy(() => import("../views/AllOrders.js"));

const CategoryEdit = lazy(() => import("../views/edit/categoryEdit.js"));
const ProductEdit = lazy(() => import("../views/edit/productEdit.js"));
const CategoryNew = lazy(() => import("../views/new/categoryNew.js"));
const ProductNew = lazy(() => import("../views/new/productNew.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/order", exact: true, element: <Orders /> },
      { path: "/category", exact: true, element: <Category /> },
      { path: "/product", exact: true, element: <Product /> },
      { path: "/profile", exact: true, element: <Profile /> },
      { path: "/allorders", exact: true, element: <AllOrders /> },

      { path: "/category/edit/:id", exact: true, element: <CategoryEdit /> },
      { path: "/product/edit/:id", exact: true, element: <ProductEdit /> },
      { path: "/category/new", exact: true, element: <CategoryNew /> },
      { path: "/product/new", exact: true, element: <ProductNew /> },
    ],
  },
];

export default ThemeRoutes;
