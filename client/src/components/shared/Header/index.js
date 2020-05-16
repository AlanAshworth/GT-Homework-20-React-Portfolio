import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <>
      <header className="row">
        <div className="col">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
