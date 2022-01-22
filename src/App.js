import "./App.css";
import React, { Component } from "react";
import Nav from "./Component/Nav";
import Newss from "./Component/Newss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/entertainment">
              <Newss
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/business">
              <Newss
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/general">
              <Newss
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <Newss key="health" pageSize={5} country="in" category="health" />
            </Route>
            <Route exact path="/sports">
              <Newss key="sports" pageSize={5} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <Newss
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/science">
              <Newss
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
