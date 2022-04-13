import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/category/getCategories";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { getWeek } from "../redux/actions/dashboard/DashboarWeek";
import { getYear } from "../redux/actions/dashboard/dashboardYear";
import { getDay } from "../redux/actions/dashboard/dashboardDay";

import { getStock } from "../redux/actions/order/stock";
import { apiURL } from "../config.json";

//

const AllOrders = () => {
  let data = [];
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [id, setId] = useState(0);
  const [time, setTime] = useState(1);

  const dispatch = useDispatch();
  data = useSelector((state) => {
    return state.stock;
  });

  useEffect(() => {
    dispatch(getStock(time));
  }, [time]);
  const fieldAction = (data, row) => {
    return (
      <>
        <i
          class="bi bi-trash-fill ms-4"
          style={{ color: "red", fontSize: "26px" }}
          onClick={() => {
            setShow(true);
            setId(data);
          }}
        ></i>
      </>
    );
  };
  let arr = [];
  let x = [];
  let total = 0;
  const getStringfromOrderArray = (arr) => {
    let str = "";
    arr.forEach((elem) => {
      str += `${elem.name_en} x ${elem.acc} `;
    });
    return str;
  };
  data.forEach((element) => {
    x = JSON.parse(element.order);
    let orderString = getStringfromOrderArray(x);
    arr.push({
      id: element.id,
      orderString,
      total: element.total,
      date: element.createdAt,
    });
    total += element.total;
  });
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "orderString",
      text: "Order",
      sort: true,
    },
    {
      dataField: "total",
      text: "Total",
      sort: true,
    },
    {
      dataField: "date",
      text: "Date",
      sort: true,
    },
    {
      dataField: "id",
      text: "Actions",
      formatter: fieldAction,
    },
  ];
  return (
    <>
      <h4 className="mb-4">Order List</h4>
      <Button
        color="info"
        className="ms-2 mb-3 mt-1 "
        outline={time === 1 ? "" : true}
        onClick={() => setTime(1)}
      >
        Day
      </Button>{" "}
      <Button
        color="info"
        className="ms-2 mb-3 mt-1 "
        outline={time === 2 ? "" : true}
        onClick={() => setTime(2)}
      >
        Week
      </Button>
      <Button
        color="info"
        className="ms-2 mb-3 mt-1 "
        outline={time === 3 ? "" : true}
        onClick={() => setTime(3)}
      >
        Month
      </Button>
      <BootstrapTable
        keyField="id"
        data={arr}
        columns={columns}
        variant="dark"
        striped
        hover
        condensed
        pagination={paginationFactory()}
      />
      <h5>Total is: {total}</h5>
      {show && (
        <Alert>
          <h4>Are you sure you want to delete it?</h4>
          <Button
            onClick={() => {
              setShow(false);
            }}
          >
            cancel
          </Button>
          <Button
            className="ms-5"
            onClick={() => {
              axios
                .delete(`${apiURL}/order/${id}`)
                .then((res) => {
                  if (res.status == 200) {
                    setShow2(true);
                    setTimeout(() => {
                      setShow2(false);
                      setShow(false);
                    }, 1000);
                    dispatch(getWeek());
                  }
                })
                .catch((err) => {
                  setShow3(true);
                  setTimeout(() => {
                    setShow3(false);
                  }, 1000);
                });
            }}
          >
            Yes!
          </Button>
        </Alert>
      )}
      {show2 && (
        <Alert>
          <h4>Deleted successfully</h4>
        </Alert>
      )}
      {show3 && (
        <Alert color="danger">
          <h4>Error</h4>
        </Alert>
      )}
    </>
  );
};

export default AllOrders;
