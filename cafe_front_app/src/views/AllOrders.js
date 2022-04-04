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
import { apiURL } from "../config.json";

//

const AllOrders = () => {
  let data = [];
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [id, setId] = useState(0);

  const dispatch = useDispatch();
  data = useSelector((state) => {
    return state.year;
  });
  console.log(data);

  useEffect(() => {
    dispatch(getYear());
  }, []);
  const fieldAction = (data, row) => {
    return (
      <>
        <Button
          color="danger"
          className="ms-5"
          onClick={() => {
            setShow(true);
            setId(data);
          }}
        >
          Delete
        </Button>
      </>
    );
  };
  let arr = [];
  let x = [];

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
    });
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
      dataField: "id",
      text: "Delete",
      formatter: fieldAction,
    },
  ];
  return (
    <>
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
