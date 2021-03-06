import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import {
  Route,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/projects/Projects";
import './index.css'

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app__main-content">
            {/* navbar */}
            <Navbar />

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;