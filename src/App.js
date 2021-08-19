import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom"; //npm install react-router-dom --save
import "./css/custom.css";

/** Masters **/
import HomeMasterLayout from "./views/shared/home-master";

/** Components */
import Home from "./views/component/home.js";
import PostAJob from "./views/component/post-a-job.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeMasterLayout path="/" component={Home} />
        </Route>
        <HomeMasterLayout path="/#/post-a-job" component={PostAJob} />
      </Switch>
    </Router>
  );
}

export default App;
