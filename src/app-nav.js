import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"; //npm install react-router-dom --save

import './css/slate/bootstrap.min.css';
import "./css/custom.css";

/** Masters **/
// import HomeMasterLayout from "./views/shared/home-master";

/** Components */
import Home from "./views/component/home.js";
import PostAJob from "./views/component/post-a-job.js";
import Jobescription from "./views/component/job-description";
import HomeHeader from "./views/shared/home-header";

function AppNav() {
  const [formData, setFormdata] = useState({
    jobTitle: "",
    email: "",
    mobile: "",
    vcancyFor: "",
    jobDesc: "",
  });
  function submitFormData(formDataVal) {
    setFormdata(formDataVal);
  }

  const[cssUrl, setCssUrl] = useState("./css/slate/bootstrap.min.css");

  const setTheme = (styleName) => {
    switch(styleName){
      case "cerulean":
        setCssUrl("./css/"+styleName+"/bootstrap.min.css");
        break;
      default:
        setCssUrl("./css/slate/bootstrap.min.css");
        break;
    }
  }

  return (
    <Router>
      <link rel="stylesheet" type="text/css" href={cssUrl} />
      <HomeHeader handlerSetTheme={setTheme} />
      <div className="container pad-top-90px">
      <Switch>
        <Route exact path="/">
          <Home path="/" />
        </Route>
        <PostAJob path="/post-a-job" formData={formData} handler={submitFormData} />
        <Jobescription path="/job-description" formData={formData} />
      </Switch>
      </div>
    </Router>
  );
}

export default AppNav;
