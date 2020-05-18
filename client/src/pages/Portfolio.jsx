import React, { useState, useEffect } from "react";
import PortfolioDbAPI from "../utils/PortfolioDbAPI";
import Header from "../components/shared/Header";
import { Grid, GridItem } from "../components/Grid";
import Card from "../components/Card";

const Portfolio = () => {
  // Setting our component's initial state
  const [title, setTitle] = useState("My Portfolio");
  const [subtitle, setSubtitle] = useState("Individual & Group Projects");
  const [assignments, setAssignments] = useState([]);

  // Load all assignments and store them with setAssignments
  useEffect(() => {
    loadHeader();
    loadAssignments();
  }, []);

  const loadHeader = () => {
    setTitle(title);
    setSubtitle(subtitle);
  };

  // Loads all assignments and sets them to assignments
  const loadAssignments = () => {
    PortfolioDbAPI.getAssignments()
      .then((res) => setAssignments(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <div className="container">
        <div className="row">
          <div className="col">
            {assignments.length ? (
              <Grid>
                {assignments.map(({ title, image, site, repo, _id}) => (
                  <GridItem key={_id}>
                    <Card
                      title={title}
                      image={image}
                      site={site}
                      repo={repo}
                      key={_id}
                    />
                  </GridItem>
                ))}
              </Grid>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
