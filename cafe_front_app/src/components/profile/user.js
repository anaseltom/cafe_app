import axios from "axios";
import Cookies from "js-cookie";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import Alert from "../../components/alert";
import { useState } from "react";
import { apiURL } from "../../config.json";

function User() {
  let id = Cookies.get("user");

  const [classes, setClasses] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      first_name: e.target[0].value,
      last_name: e.target[1].value,
      email: e.target[2].value,
      login: e.target[3].value,
      role: 1,
    };
    axios
      .put(`${apiURL}/user/${id}`, formData)
      .then((res) => {
        if (res.status == 200) {
          setClasses("alert alert-success");
          setMessage("Success");
          setTimeout(() => {
            setClasses("");
            setMessage("");
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          setClasses("alert alert-danger");
          setMessage("Wrong User");
          setTimeout(() => {
            setClasses("");
            setMessage("");
          }, 1000);
        } else if (err.response.status == 400) {
          setClasses("alert alert-danger");
          setMessage("Username taken");
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
      className="border border-3 col-md-6"
      style={{ display: "inline-block" }}
    >
      <div style={{ padding: "10px" }}>
        <Form onSubmit={formSubmit}>
          <FormGroup style={{ marginTop: "50px" }}>
            <Label foFormr="first_name">First name</Label>
            <Input
              id="first_name"
              name="first_name"
              placeholder="First name"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="last_name">Last name</Label>
            <Input
              id="last_name"
              name="last_name"
              placeholder="Last name"
              type="text"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="login">Username</Label>
            <Input
              id="login"
              name="login"
              placeholder="Username"
              type="text"
              required
            />
          </FormGroup>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button className="align-self-center">Submit</Button>
          </div>
        </Form>
        <Alert classes={classes} message={message} />
      </div>
    </div>
  );
}

export default User;
