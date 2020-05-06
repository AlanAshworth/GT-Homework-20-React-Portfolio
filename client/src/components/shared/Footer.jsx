import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="two-toned-footer-color"></div>
        <p className="text-muted text-muted-footer text-center">
          &copy; Copyright
          <span>
            Email:{" "}
            <a href="mailto:awashworth927@gmail.com">awashworth927@gmail.com</a>{" "}
            |{" "}
          </span>
          <span>
            Mobile: <a href="tel:770-823-9350">(770) 823-9350</a> |{" "}
          </span>
          <span>
            My Resume:{" "}
            <a href="Assets/resources/MyResume.pdf" target="_blank">
              Link
            </a>
          </span>
        </p>
        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/alan-ashworth-4019b519a/"
            target="_blank"
          >
            <img
              id="img-linkedin"
              src="Assets/Images/linkedin.png"
              alt="Linkedin"
            />
          </a>
          <a href="https://github.com/AlanAshworth" target="_blank">
            <img id="img-github" src="Assets/Images/github.png" alt="Github" />
          </a>
          <a
            href="https://stackoverflow.com/users/12620631/alan-ashworth"
            target="_blank"
          >
            <img
              id="img-stackoverflow"
              src="Assets/Images/stackover2.png"
              alt="stack overflow"
            />
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
