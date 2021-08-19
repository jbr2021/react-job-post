import React, { useState } from "react";

const PostAJob = () => {
  const [formdata, setFormdata] = useState({
    jobTitle: "",
    email: "",
    mobile: "",
    vcancyFor: "",
    jobDesc: "",
  });
  function submitFormData() {
    setFormdata(
      {
        jobTitle: "job",
        email: "eml",
        mobile: "mob",
        vcancyFor: "vacancy",
        jobDesc: "jd",
      },
      () => {
        console.log(JSON.stringify(formdata));
      }
    );
  }
  return (
    <div>
      <div className="card border-primary mb-3">
        <div className="card-header">Post A Job For Developers</div>
        <div className="card-body">
          <form className="mb-5">
            <fieldset>
              {/* <legend>Post A Job For Developers</legend> */}
              <div className="form-group">
                <label htmlFor="txtJobTitle" className="form-label mt-4">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtJobTitle"
                  placeholder="Enter Job Title"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Try to keep more than 10 and less than 200 characters.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                  Contact Eamil ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="txtMobNo" className="form-label mt-4">
                  Contact Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="txtMobNo"
                  placeholder="Enter Job Title"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Try to keep more than 10 and less than 200 characters.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleSelect1" className="form-label mt-4">
                  Select Vacancy For
                </label>
                <select className="form-select" id="exampleSelect1">
                  <option value="">Select Vacancy For</option>
                  <option value="java">Java Developer</option>
                  <option value="dotnet">.Net Developer</option>
                  <option value="php">PHP</option>
                  <option value="ang">Angular</option>
                  <option value="react">React Js</option>
                  <option value="sql">SQL Developer</option>
                  <option value="dba">Database Administrator</option>
                  <option value="bda">Big Database Administrator</option>
                  <option valud="front">Font End Developer</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label mt-4">
                  Job Discription
                </label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="button"
                className="btn btn-primary mt-4"
                onClick={submitFormData}
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
