import React, { Fragment, useState } from "react";
// import Header from "../components/shared/Header";
import hw01 from "../assets/images/homework_01_code-refactor.png";
import hw02 from "../assets/images/homework_02_responsiveness-portfolio.png";
import hw03 from "../assets/images/homework_03_password-generator.png";
import hw04 from "../assets/images/homework_04_code-quiz.png";
import hw05 from "../assets/images/homework_05_day-planner.png";
import hw06 from "../assets/images/homework_06_weather-dashboard.png";
import hw07 from "../assets/images/project_02_project-2.png";
import hw08 from "../assets/images/homework_08_updated-portfolio-page.png";
import hw09 from "../assets/images/homework_09_good-readme-generator.png";
import hw10 from "../assets/images/homework_10_team-profile-generator.png";
import hw11 from "../assets/images/homework_11_note-taker.png";
import hw12 from "../assets/images/homework_12_employee-tracker.png";
import hw13 from "../assets/images/homework_13_node-express-handlebars.png";
import hw14 from "../assets/images/homework_14_nosql-workout-tracker.png";
import hw15 from "../assets/images/homework_15_pwa-budget-tracker.png";
import hw19 from "../assets/images/homework_19_react-employee-tracker.png";
import hw20 from "../assets/images/homework_20_react-portfolio.png";

const Portfolio = () => {
  // const [title, setTitle] = useState("My Portfolio");
  // const [subtitle, setSubtitle] = useState("Individual & Group Projects");

  return (
    <Fragment>
      {/* <Header title={title} subtitle={subtitle} /> */}
      <main className="container">
        <section className="row">
          <div className="col-md-8">
            <article className="block">
              <h3 className="block-header">Individual Projects</h3>
              <hr />
              
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw01}
                    alt="Code Refactor"
                  />
                  <div>
                    <span className="float-left">
                      <h6>1. Code Refactor</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://alanashworth.github.io/GT-Homework-01/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-01"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw02}
                    alt="Responsiveness Portfolio"
                  />
                  <div>
                    <span className="float-left">
                      <h6>2. Responsiveness Portfolio</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://alanashworth.github.io/GT-Homework-02/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-02"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw03}
                    alt="Password Generator"
                  />
                  <div>
                    <span className="float-left">
                      <h6>3. Password Generator</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://alanashworth.github.io/GT-Homework-03/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-03"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw04}
                    alt="Code Quiz"
                  />
                  <div>
                    <span className="float-left">
                      <h6>4. Code Quiz</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://alanashworth.github.io/GT-Homework-04/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-04"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw05}
                    alt="Day Planner"
                  />
                  <div>
                    <span className="float-left">
                      <h6>5. Day Planner</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://alanashworth.github.io/GT-Homework-05/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-05"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw06}
                    alt="Weather Dashboard"
                  />
                  <div>
                    <span className="float-left">
                      <h6>6. Weather Dashboard</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://alanashworth.github.io/GT-Homework-06/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-06"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw08}
                    alt="Updated Portfolio Page"
                  />
                  <div>
                    <span className="float-left">
                      <h6>7. Updated Portfolio Page</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://alanashworth.github.io/GT-Homework-08-Updated-Portfolio-Page/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-08-Updated-Portfolio-Page"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw09}
                    alt="Good README Generator"
                  />
                  <div>
                    <span className="float-left">
                      <h6>8. Good README Generator</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-09-Good-README-Generator"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw10}
                    alt="Team Profile Generator"
                  />
                  <div>
                    <span className="float-left">
                      <h6>9. Team Profile Generator</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-10-Team-Profile-Generator"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw11}
                    alt="Note Taker"
                  />
                  <div>
                    <span className="float-left">
                      <h6>10. Note Taker</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://blooming-temple-60682.herokuapp.com/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-11-Note-Taker"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw12}
                    alt="Employee Tracker"
                  />
                  <div>
                    <span className="float-left">
                      <h6>11. Employee Tracker</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-12-Employee-Tracker"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw13}
                    alt="Node Express Handlebars"
                  />
                  <div>
                    <span className="float-left">
                      <h6>12. Node Express Handlebars</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://immense-peak-43329.herokuapp.com/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-13-Node-Express-Handlebars"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw14}
                    alt="Fitness Tracker"
                  />
                  <div>
                    <span className="float-left">
                      <h6>13. Fitness Tracker</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://gentle-badlands-62416.herokuapp.com/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-14-NoSQL-Workout-Tracker"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw15}
                    alt="Budget Tracker"
                  />
                  <div>
                    <span className="float-left">
                      <h6>14. PWA Budget Tracker</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://stark-sea-84315.herokuapp.com/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-15-Online-Offline-Budget-Tracker"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw19}
                    alt="React Employee Tracker"
                  />
                  <div>
                    <span className="float-left">
                      <h6>15. React Employee Tracker</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://github.com/AlanAshworth/gt-homework-19-employee-directory"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw20}
                    alt="React Portfolio"
                  />
                  <div>
                    <span className="float-left">
                      <h6>16. React Portfolio</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://dry-beach-35920.herokuapp.com/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/AlanAshworth/GT-Homework-20-React-Portfolio"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
              <br />
              <h3 className="block-header">Group Projects</h3>
              <hr />
              <section className="row">
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src="assets/images/project_01_rise-and-shine.png"
                    alt="Rise and Shine"
                  />
                  <div>
                    <span className="float-left">
                      <h6>1. Rise and Shine</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://fmiusov.github.io/Rise-and-Shine/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/fmiusov/Rise-and-Shine"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                  <img
                    className="img-fluid port-image"
                    src={hw07}
                    alt="Project 2"
                  />
                  <div>
                    <span className="float-left">
                      <h6>2. Project 2</h6>
                    </span>
                    <span className="float-right">
                      <a
                        href="https://steam-comparison.herokuapp.com/"
                        target="_blank"
                      >
                        site
                      </a>
                      <span>|</span>
                      <a
                        href="https://github.com/SamSherrill/project-2"
                        target="_blank"
                      >
                        repo
                      </a>
                    </span>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Portfolio;
