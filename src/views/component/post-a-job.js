import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PostAJob(props) {
  const [formData, setFormdata] = useState(props.formData);
  const history = useHistory();

  var handlerToUpdate = props.handler;
  const submitFormData = () => {
    // setFormdata({
    //     jobTitle: "job",
    //     email: "eml",
    //     mobile: "mob",
    //     vcancyFor: "vacancy",
    //     jobDesc: "jd",
    //   }
    // );
    handlerToUpdate(formData);
    history.push("/job-description");
  }

  return (
    <div>
      <div className="card border-primary mb-3">
        <div className="card-header">Post A Job For Developers</div>
        <div className="card-body">
          <div className="mb-5">
            <fieldset>
              {/* <legend>Post A Job For Developers</legend> */}
              <div className="form-group row mb-2">
                <label htmlFor="txtJobTitle" className="col-sm-2 col-form-label">
                  Job Title
                </label>
                <div className="col-sm-10">
                <input type="text"
                  className="form-control"
                  id="txtJobTitle"
                  placeholder="Enter Job Title"
                  value={formData.jobTitle}
                  onChange={e => setFormdata({ ...formData, jobTitle : e.target.value })} />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label htmlFor="exampleInputEmail1" className="col-sm-2 col-form-label">
                  Contact Eamil ID
                </label>
                <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={e => setFormdata({ ...formData, email : e.target.value })}
                />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label htmlFor="txtMobNo" className="col-sm-2 col-form-label">
                  Contact Mobile Number
                </label>
                <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="txtMobNo"
                  placeholder="Enter Mobile Number"
                  value={formData.mobile}
                  onChange={e => setFormdata({ ...formData, mobile : e.target.value })}
                />
                </div>
              </div>
              <div className="form-group row mb-2">
                <label htmlFor="exampleSelect1" className="col-sm-2 col-form-label">
                  Select Vacancy For
                </label>
                <div className="col-sm-10">
                <select className="form-select"
                defaultValue={formData.vcancyFor}
                onChange={e => setFormdata({ ...formData, vcancyFor : e.target.value })}>
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
              </div>
              <div className="form-group mb-2">
                <label htmlFor="exampleTextarea" className="col-sm-2 col-form-label">
                  Job Description
                </label>
                <textarea
                  className="form-control" rows="3" defaultValue={formData.jobDesc}
                  onChange={e => setFormdata({ ...formData, jobDesc : e.target.value })}></textarea>
              </div>
              <button type="button" className="btn btn-success mt-4" onClick={submitFormData}>
                Submit
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
