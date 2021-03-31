import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
          <a className="navbar-brand " href="/">
            <h1>POLICIES</h1>
          </a>
          <ul className="ml-auto navbar-nav">
            <Link to="/users/login">
              <li className="nav-item">
                <button
                  style={{ padding: "10px", fontSize: "1.5rem", margin: "8px" }}
                  type="button"
                  class="btn btn-primary"
                  href="/login"
                >
                  Login
                </button>
              </li>
            </Link>
            <Link to="/users/register">
              <li className="nav-item">
                <button
                  style={{ padding: "10px", fontSize: "1.5rem", margin: "8px" }}
                  type="button"
                  className="btn btn-primary"
                  href="/register"
                >
                  Register
                </button>
              </li>
            </Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/users/login" component={Login} />
          <Route path="/users/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
