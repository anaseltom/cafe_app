import { Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Badge } from "reactstrap";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrint } from "./componentToPrint";
import { useRef, useState } from "react";
import Alert from "../../components/alert";
import axios from "axios";
import { apiURL } from "../../config.json";
import { deleteOrder, updateOrder } from "../../redux/actions/order/addOrder";

function OrderBadges() {
  const [classes, setClasses] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const saveOrder = (arr, total) => {
    axios
      .post(`${apiURL}/order`, {
        order: [...arr],
        total: total,
      })
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
        setMessage("Error");
        setTimeout(() => {
          setClasses("");
          setMessage("");
        }, 1000);
      });
  };

  const order = useSelector((state) => {
    return state.order;
  });
  let arr = [];
  return (
    <>
      <Row>
        <Row>
          {order.map((element) => {
            let acc = checkOcurances(order, element);
            let contain = containsObject(
              { name_en: element.name_en, category: element.categoryId, acc },
              arr
            );
            if (!contain) {
              arr.push({
                name_en: element.name_en,
                price: element.price,
                category: element.categoryId,
                acc: acc,
              });
            }
          })}
          {arr.map((element) => {
            return (
              <Col key={element.id}>
                <h5>
                  <Badge color="secondary" className="ms-5">
                    {element.name_en}
                  </Badge>
                  {"  "}
                  {`x${element.acc}`}
                  <i
                    class="bi bi-trash-fill"
                    style={{ color: "red", fontSize: "26px" }}
                    onClick={() => {
                      dispatch(updateOrder(order, element.name_en));
                    }}
                  ></i>
                </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <h2>Total is: {countTotal(order)}</h2>
          </Col>
          <Col>
            <Button
              onClick={() => {
                dispatch(deleteOrder());
              }}
              color="danger"
            >
              Remove Order
            </Button>
          </Col>
        </Row>

        <Row>
          <Button
            onClick={() => {
              handlePrint();
              saveOrder(arr, countTotal(order));
              dispatch(deleteOrder());
            }}
          >
            Save and print
          </Button>
        </Row>
        <Alert classes={classes} message={message} />
      </Row>
      <div style={{ display: "none" }}>
        <ComponentToPrint
          ref={componentRef}
          element={arr}
          total={countTotal(order)}
        />
      </div>
    </>
  );
}

const checkOcurances = (order, element) => {
  return order.reduce((acc, elem) => {
    return element == elem ? acc + 1 : acc;
  }, 0);
};

function containsObject(obj, list) {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i].name_en === obj.name_en) {
      return true;
    }
  }

  return false;
}

function countTotal(order) {
  let i = 0;
  order.forEach((element) => {
    i += element.price;
  });
  return i;
}
export default OrderBadges;
