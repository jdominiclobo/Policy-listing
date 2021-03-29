import React from "react";

const Dashboard = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand " href="#">
          <h1>POLICIES</h1>
        </a>
        <div>
          <button
            type="button"
            class="btn btn-primary btn-lg"
            href="javascript:;"
          >
            Register
          </button>
          {"         "}
          <button
            type="button"
            class="btn btn-primary btn-lg"
            href="javascript:;"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Dashboard;
