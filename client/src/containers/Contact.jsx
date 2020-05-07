import React, { Fragment } from "react";
// import Header from "../components/shared/Header";

const Contact = () => {
  // const [title, setTitle] = useState("Contact Me");
  // const [subtitle, setSubtitle] = useState("Currently Accepting Work");

  return (
    <Fragment>
      {/* <Header title={title} subtitle={subtitle} /> */}
      <main className="container">
        <section className="row">
          <div className="col-md-8">
            <form className="block form-horizontal">
              <h3 className="block-header">Please Fill Completely</h3>
              <hr />
              <div className="form-group">
                <label htmlFor="name" className="col-sm-2 control-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-2 control-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="msg">
                  Message
                </label>
                <div className="col-sm-10">
                  <textarea
                    id="msg"
                    className="form-control"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Contact;
