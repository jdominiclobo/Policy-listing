import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { BsFillEyeFill } from "react-icons/bs";

const Register = () => {
  const initialUsers = localStorage.getItem("users");
  const [users, setUsers] = useState(
    initialUsers ? JSON.parse(initialUsers) : []
  );
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    console.log("users", users);
    if (Object.keys(user).length) {
      localStorage.setItem("users", JSON.stringify(users.concat(user)));
      history.push("/users/login");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert("Passwords do not match!!!");
    } else {
      const formData = {
        id: uuidv4(),
        username: username,
        email: email,
        password: password,
      };
      setUser(formData);
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <div className="container">
        <div className="justify-content-md-center">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h1 mb-3 font-weight-normal text-center">Register</h1>
            <input
              required="required"
              className="form-control mb-3"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <input
              required="required"
              className="form-control mb-3"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              required="required"
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
              required="required"
              className="form-control mb-3"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <br />
            <input
              className="btn btn-lg btn-primary btn-block"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
