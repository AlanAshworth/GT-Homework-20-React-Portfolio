import React, { useState, useEffect } from "react";
import PortfolioDbAPI from "../utils/PortfolioDbAPI";
import { Grid, GridItem } from "../components/Grid";
// import { Link } from "react-router-dom";
import Card from "../components/Card";

const Portfolio = () => {
  // Setting our component's initial state
  const [assignments, setAssignments] = useState([]);

  // Load all assignments and store them with setAssignments
  useEffect(() => {
    loadAssignments();
  }, []);

  // Loads all assignments and sets them to assignments
  const loadAssignments = () => {
    PortfolioDbAPI.getAssignments()
      .then((res) => setAssignments(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm"></div>
          {assignments.length ? (
            <Grid>
              {assignments.map((assignment) => (
                <GridItem key={assignment._id}>
                  {/* <Link to={"/assignments/" + assignment._id}>
                <Card
                    title={assignment.title}
                    image={assignment.image}
                    site={assignment.site}
                    repo={assignment.repo}
                    key={assignment._id}
                  />
                </Link> */}
                  <Card
                    title={assignment.title}
                    image={assignment.image}
                    site={assignment.site}
                    repo={assignment.repo}
                    key={assignment._id}
                  />
                </GridItem>
              ))}
            </Grid>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
