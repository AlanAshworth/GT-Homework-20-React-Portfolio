import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function Grid({ children }) {
  return (
    <div className="list-overflow-container d-flex justify-content-center">
      <ul className="row">{children}</ul>
    </div>
  );
}

export function GridItem({ children }) {
  return (
    <div className="col-sm-4">
      <li className="list-group-item">{children}</li>
    </div>
  );
}
