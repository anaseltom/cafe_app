import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Card, CardText, CardTitle, Button, Row, Col } from "reactstrap";

import { getProducts } from "../../redux/actions/product/getProducts";
import { addOrder } from "../../redux/actions/order/addOrder";

function Product() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });
  const products = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className="mt-2">
        <Row>
          {products.map((element) => {
            return (
              <Col md="3" lg="2" key={element.id}>
                <Card body color="light-info">
                  <CardTitle tag="h5">
                    {/* <img
                      src="https://www.vegrecipesofindia.com/wp-content/uploads/2018/02/cafe-style-hot-coffee-recipe-1.jpg"
                      width="100%"
                    /> */}
                  </CardTitle>
                  <CardText>
                    {element.name_en} <b>${element.price}</b>
                  </CardText>
                  <div>
                    <Button
                      style={{ marginLeft: "30%" }}
                      onClick={() => {
                        dispatch(addOrder(element));
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <hr />
    </>
  );
}

export default Product;
