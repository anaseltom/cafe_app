import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import Alert from "../../components/alert";
import { apiURL } from "../../config.json";

function Password() {
  let id = Cookies.get("user");

  const [classes, setClasses] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      oldPassword: e.target[0].value,
      password: e.target[1].value,
    };
    axios
      .put(`${apiURL}/user/pass/${id}`, formData)
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
          setMessage("Wrong password");
          setTimeout(() => {
            setClasses("");
            setMessage("");
          }, 1000);
        } else if (err.response.status == 400) {
          setClasses("alert alert-danger");
          setMessage("wrong user");
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
      className="border border-3 col-md-5 ms-5"
      style={{ display: "inline-block" }}
    >
      <div style={{ padding: "10px" }}>
        <Form onSubmit={formSubmit}>
          <FormGroup>
            <Label for="check">Old password</Label>
            <Input
              id="check"
              name="check"
              placeholder="Old Password"
              type="password"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">New password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
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

export default Password;
