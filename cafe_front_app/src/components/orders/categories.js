import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button, Badge } from "reactstrap";

import { getCategories } from "../../redux/actions/category/getCategories";
import {
  getProducts,
  getProductsByCategory,
} from "../../redux/actions/product/getProducts";

function Category() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => {
    return state.categories;
  });

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Button
        color="info"
        className="ms-3"
        outline
        onClick={() => {
          dispatch(getProducts());
        }}
      >
        All
      </Button>
      {categories.map((element) => {
        return (
          <Button
            color="info"
            className="ms-3"
            outline
            key={element.id}
            onClick={() => {
              dispatch(getProductsByCategory(element.id));
            }}
          >
            {element.name_en}
          </Button>
        );
      })}
    </>
  );
}

export default Category;
