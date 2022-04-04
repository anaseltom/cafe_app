import axios from "axios";
import { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions/category/getCategories";
import { getProductById } from "../../redux/actions/product/getProducts";
import { productSchema } from "../../validations/productValidation";
import { useParams } from "react-router-dom";
import Alert from "../../components/alert";
import { apiURL } from "../../config.json";

function ProductNew() {
  let { id } = useParams();
  const [name_en, setEnglishName] = useState("");
  const [name_ar, setArabicName] = useState("");
  const [price, setPrice] = useState(0);
  const [classes, setClasses] = useState("");
  const [message, setMessage] = useState("");
  const { productForEdit, categories } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProductById(id));
  }, []);

  useEffect(() => {
    setEnglishName(productForEdit.name_en);
    setArabicName(productForEdit.name_ar);
    setPrice(productForEdit.price);
  }, [productForEdit]);

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
        .put(`${apiURL}/product/${id}`, formData)
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="categoryId">Select</Label>
          <Input id="categoryId" name="select" type="select">
            {categories.map((elem) => {
              return (
                <option key={elem.id} value={elem.id}>
                  {elem.name_en}
                </option>
              );
            })}
          </Input>
          <Label foFormr="name_ar">Arabic Name</Label>
          <Input
            id="price"
            name="price"
            placeholder="price"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </FormGroup>
        <Button>Update</Button>
      </Form>
      <Alert classes={classes} message={message} />
    </>
  );
}

export default ProductNew;
