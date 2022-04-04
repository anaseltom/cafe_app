import axios from "axios";
import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/category/getCategories";
import { productSchema } from "../../validations/productValidation";
import Alert from "../../components/alert";
import { apiURL } from "../../config.json";

function ProductNew() {
  const [name_en, setEnglishName] = useState("");
  const [name_ar, setArabicName] = useState("");
  const [price, setPrice] = useState(0);
  const [classes, setClasses] = useState("");
  const [message, setMessage] = useState("");

  const categories = useSelector((state) => {
    return state.categories;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      name_en,
      name_ar,
      categoryId: e.target[2].value,
      price,
    };
    const isValid = await productSchema.isValid(formData);
    if (isValid) {
      axios
        .post(`${apiURL}/product`, formData)
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
        .catch((err) => console.log(err));
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
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="select" type="select">
            {categories.map((elem) => {
              return (
                <option key={elem.id} value={elem.id}>
                  {elem.name_en}
                </option>
              );
            })}
          </Input>
          <Label foFormr="name_ar">Price</Label>
          <Input
            id="price"
            name="price"
            placeholder="price"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          />
        </FormGroup>
        <Button>Save</Button>
      </Form>
      <Alert classes={classes} message={message} />
    </>
  );
}

export default ProductNew;
