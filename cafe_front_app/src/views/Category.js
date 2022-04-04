import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../redux/actions/category/getCategories";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import { apiURL } from "../config.json";

//

const Category = () => {
  let data = [];
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [id, setId] = useState(0);

  const dispatch = useDispatch();
  data = useSelector((state) => {
    return state.categories;
  });

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const fieldAction = (data, row) => {
    return (
      <>
        <Link className="warning ms-5" to={`/category/edit/${data}`}>
          <Button color="warning" className="ms-5">
            Edit
          </Button>
        </Link>
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

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
    },
    {
      dataField: "name_en",
      text: "Name English",
      sort: true,
    },
    {
      dataField: "name_ar",
      text: "Name Arabic",
      sort: true,
    },
    {
      dataField: "id",
      text: "Edit",
      formatter: fieldAction,
    },
  ];
  return (
    <>
      <Link to="/category/new">
        <Button className="" style={{ float: "right" }}>
          New Category
        </Button>
      </Link>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
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
                .delete(`${apiURL}/category/${id}`)
                .then((res) => {
                  if (res.status == 200) {
                    setShow2(true);
                    setTimeout(() => {
                      setShow2(false);
                      setShow(false);
                    }, 1000);
                    dispatch(getCategories());
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

export default Category;
