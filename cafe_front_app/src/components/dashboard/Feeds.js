import { arrayOf, element } from "prop-types";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
  Row,
  Col,
  Input,
} from "reactstrap";
import { ComponentToPrint } from "./componentToPrint";
import { useReactToPrint } from "react-to-print";

const Feeds = () => {
  const last = useSelector((state) => {
    return state.last;
  });
  const [productId, setProductID] = useState(1);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleChange = (e) => {
    setProductID(e.target.value);
  };
  let x = [];
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Feeds</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Last Orders
        </CardSubtitle>
        <ListGroup flush className="mt-4 ">
          <ListGroupItem>
            <>
              <h4
                className="ms-auto text-muted text-small"
                style={{ display: "inline-block" }}
              >
                Order
              </h4>
              <h4
                style={{ position: "absolute", right: "1px" }}
                className="d-inline-block text-muted text-small "
              >
                Total
              </h4>
            </>
          </ListGroupItem>
          {last.map((feed, index) => {
            x = JSON.parse(feed.order);
            return (
              <ListGroupItem
                key={feed.id}
                action
                tag="a"
                className="p-3 border-0 "
              >
                {x.map((element) => {
                  return (
                    <>
                      <small
                        className="ms-auto text-muted text-small"
                        style={{ display: "inline-block" }}
                      >
                        {element.name_en} x {element.acc}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </>
                  );
                })}

                <p
                  style={{ position: "absolute", right: "1px" }}
                  className="d-inline-block text-muted text-small "
                >
                  {feed.total}
                </p>
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <Row>
          <Col>
            <Button
              style={{ width: "100%" }}
              onClick={() => {
                handlePrint();
              }}
            >
              print last order
            </Button>
          </Col>
          <Col>
            <Input
              name="select"
              type="select"
              onChange={handleChange}
              value={productId}
            >
              <option value={0}>1</option>
              <option value={1}>2</option>
              <option value={2}>3</option>
              <option value={3}>4</option>
              <option value={4}>5</option>
              <option value={5}>6</option>
              <option value={6}>7</option>
              <option value={7}>8</option>
              <option value={8}>9</option>
              <option value={9}>10</option>
            </Input>
          </Col>
        </Row>
        <div style={{ display: "none" }}>
          <ComponentToPrint
            ref={componentRef}
            element={last && last[productId]}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default Feeds;
