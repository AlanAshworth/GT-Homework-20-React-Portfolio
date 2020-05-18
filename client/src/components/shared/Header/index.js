import React from "react";
import "./style.css";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <header className="row">
        <div className="col">
          <h1 className="block-header">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </header>
      {/* <header className="container">
        <div className="row">
          <div className="col">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
