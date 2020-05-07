import React, { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <header className="row">
        <div className="col">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
