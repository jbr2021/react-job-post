import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"; //npm install react-router-dom --save

import './css/bootstrap.min.css';
import "./css/custom.css";

/** Masters **/
import HomeMasterLayout from "./views/shared/home-master";

/** Components */
import Home from "./views/component/home.js";
import PostAJob from "./views/component/post-a-job.js";
import Jobescription from "./views/component/job-description";

function App() {
  const [formData, setFormdata] = useState({jobTitle: "", email: "", mobile: "", vcancyFor: "", jobDesc: ""});
  function submitFormData(formData) {
    setFormdata(formData);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeMasterLayout path="/" component={Home} />
        </Route>
        <HomeMasterLayout path="/post-a-job" component={PostAJob} formData={formData} handler={submitFormData} />
        <HomeMasterLayout path="/job-description" component={Jobescription} formData={formData} />
      </Switch>
    </Router>
  );
}

export default App;
