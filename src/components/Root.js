import React from "react";
import { Provider } from "react-redux";
import App from "./App"
import { BrowserRouter as Router, Route, Link,Redirect,Switch  } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    <Switch>
      <Route path="/:filter" component={App}/>
      <Route path="/" component={App}/>
      <Redirect to="/"/> 
      </Switch> 
    </Router>
  </Provider>
);

export default Root;


//(:filter)-->()--> to tell the react router tthat it is optional