import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <main className="container">
        <section className="row">
          <div className="col-md-8">
            <article className="block">
              <h1 className="block-header">About Me</h1>
              <hr />
              <img src="assets/images/avatar.jpg" alt="" id="about-image" />
              <p>
                Welcome to my site! My name is Alan Ashworth. I'm Georgia
                native, looking for oppurtunities to collaborate with others in
                the greater Atlanta area and beyond. New to the scene, I see
                exciting possibilities to grow as a web devloper and as a member
                of the web development community.
              </p>
              <br />
              <p>
                Thanks for stopping by, and before you go, please have a look at
                my projects. I've worked hard on them and want to share them
                with you. I've listed my favorite small projects, along with a
                larger project I am currently collaborating with other new
                developers like myself.
              </p>
              <hr />
              <div>
                <span className="float-left">
                  Collaboration:{" "}
                  <a
                    href="https://fmiusov.github.io/Rise-and-Shine/"
                    target="_blank"
                  >
                    Rise and Shine
                  </a>
                </span>
                <span className="float-right">
                  Individual Works:{" "}
                  <a
                    href="https://alanashworth.github.io/GT-Homework-03/"
                    target="_blank"
                  >
                    Password Generator
                  </a>
                  <span> | </span>
                  <a
                    href="https://alanashworth.github.io/GT-Homework-04/"
                    target="_blank"
                  >
                    Code Quiz
                  </a>
                </span>
              </div>
            </article>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default About;
