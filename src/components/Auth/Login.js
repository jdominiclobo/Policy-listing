import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      <div className="container">
        <div className="justify-content-md-center">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h1 mb-3 font-weight-normal text-center">Login</h1>
            <input
              className="form-control mb-3"
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              className="form-control mb-3"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <input
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
