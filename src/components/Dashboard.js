import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { AddProperty } from "./AddProperty";
import { ListProperty } from "./ListProperty";
import { Signup } from "./Signup";

export function Dashboard(props) {
  return (
    <div>
      <div>
        <nav className="navbar bg-danger">
          <h3 className="text-light m-2">Hello {props.obj.name}</h3>
          <div className="nav">
            <Link to="/selllogin/add-property" className="nav-link text-light">
              ADD PROPERTY
            </Link>
            <Link to="/selllogin/list-property" className="nav-link text-light">
              YOUR SELLING PROPERTIES
            </Link>
            <Link to="/signup" className="nav-link text-light">
              LOGOUT
            </Link>
          </div>
        </nav>
      </div>
      <Routes>
        <Route
          path="/add-property"
          element={<AddProperty userid={props.obj.id} />}
        />
        <Route
          path="/list-property"
          element={<ListProperty userid={props.obj.id} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
