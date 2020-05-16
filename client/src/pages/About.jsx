import React, { useState } from "react";
// import Header from "../components/shared/Header";
import Avatar from "../assets/images/avatar.jpg";

const About = () => {
  // const [title, setTitle] = useState("About Me");
  // const [subtitle, setSubTitle] = useState("Full Stack Web Developer");

  return (
    <>
      {/* <Header title={title} subtitle={subtitle} /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <article className="block">
              <h3 className="block-header">Alan Ashworth</h3>
              <hr />
              <img src={Avatar} alt="" id="about-image" />
              <p>
                Welcome to my site! I'm a Georgia native, looking for
                oppurtunities to collaborate with others in the greater Atlanta
                area and beyond. New to the scene, I see exciting possibilities
                to grow as a web devloper and as a member of the web development
                community.
              </p>
              <p>
                Thanks for stopping by, and before you go, please have a look at
                my projects. I've worked hard on them and want to share them
                with you. Head over to my Portfolio page and take a look at some
                of my various projects.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
