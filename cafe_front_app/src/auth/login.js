import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import Alert from "../components/alert";
import { apiURL } from "../config.json";

function Login() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      login: e.target[0].value,
      password: e.target[1].value,
    };
    axios
      .post(`${apiURL}/user/login`, formData)
      .then((res) => {
        if (res.status == 200) {
          setClasses("alert alert-success");
          setMessage("Success");
          setTimeout(() => {
            setClasses("");
            setMessage("");
          }, 1000);
          Cookies.set("user", res.data.id, { expires: 365 });
          Cookies.set("isLogged", true, { expires: 365 });
          navigate("/starter");
        }
      })
      .catch((err) => {
        if (err.response.status == 400) {
          setClasses("alert alert-danger");
          setMessage("Wrong Username or password");
          setTimeout(() => {
            setClasses("");
            setMessage("");
          }, 1000);
        } else {
          setClasses("alert alert-danger");
          setMessage("Error");
          setTimeout(() => {
            setClasses("");
            setMessage("");
          }, 1000);
        }
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <div style={{ width: "600px", height: "300px" }}>
        <Form onSubmit={formSubmit}>
          <FormGroup style={{ marginTop: "50px" }}>
            <Label foFormr="login">Username</Label>
            <Input
              id="login"
              name="login"
              placeholder="Username"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password placeholder"
              type="password"
              required
            />
          </FormGroup>
          <Button className="align-self-center">Submit</Button>
        </Form>

        <Link to="/register">Don't have an account?</Link>
        <Alert classes={classes} message={message} />
      </div>
    </div>
  );
}

export default Login;
