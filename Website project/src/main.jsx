import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Leyout from "./Leyout";
import Home from "./componants/Home/Home";
import About from "./componants/About/About";
import Contact from "./componants/Contact/Contact";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Leyout />}>
//       <Route path="" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Route>
//   )
// );


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Leyout />}>
        <Route path="" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
