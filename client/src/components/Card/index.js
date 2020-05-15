import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img
          className="card-img-top"
          src={`../images/` + props.image}
          alt={props.image}
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          iure exercitationem? Numquam sapiente pariatur officiis, eaque natus
          laboriosam molestiae voluptatibus.
        </p>
        <div class="btn-group" role="group" aria-label="">
          <a
            href={props.site}
            className="btn btn-outline-success"
            target="_blank"
          >
            Website
          </a>
        </div>
        <div class="btn-group" role="group" aria-label="">
          <a
            href={props.repo}
            className="btn btn-outline-primary"
            target="_blank"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
