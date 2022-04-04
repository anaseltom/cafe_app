import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { categorySchema } from "../../validations/categoryValidation";
import Alert from "../../components/alert";
import { apiURL } from "../../config.json";

function CategoryNew() {
  const [name_en, setEnglishName] = useState("");
  const [name_ar, setArabicName] = useState("");
  const [classes, setClasses] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      name_en,
      name_ar,
    };
    const isValid = await categorySchema.isValid(formData);
    if (isValid) {
      axios
        .post(`${apiURL}/category`, formData)
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
          setClasses("alert alert-danger");
          setMessage("Failed");
          setTimeout(() => {
            setClasses("");
            setMessage("");
          }, 1000);
        });
    }
  };
  return (
    <>
      <Form onSubmit={formSubmit}>
        <FormGroup>
          <Label foFormr="name_en">English Name</Label>
          <Input
            id="name_en"
            name="name_en"
            placeholder="Name in english"
            type="text"
            value={name_en}
            onChange={(e) => {
              setEnglishName(e.target.value);
            }}
            required
          />
          {/* <p>Name is required</p> */}
        </FormGroup>
        <FormGroup>
          <Label foFormr="name_ar">Arabic Name</Label>
          <Input
            id="name_ar"
            name="name_ar"
            placeholder="Name in Arabic"
            type="text"
            value={name_ar}
            onChange={(e) => {
              setArabicName(e.target.value);
            }}
            required
          />
          {/* <p>Last name is required.</p> */}
        </FormGroup>
        <Button>Save</Button>
      </Form>
      <Alert classes={classes} message={message} />
    </>
  );
}

export default CategoryNew;
