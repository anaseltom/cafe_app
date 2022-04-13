import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getWeek } from "../redux/actions/dashboard/DashboarWeek";
import { getLast } from "../redux/actions/dashboard/dashboardLast";
import { getYear } from "../redux/actions/dashboard/dashboardYear";
import { getDay } from "../redux/actions/dashboard/dashboardDay";
import { element } from "prop-types";

const Starter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state;
  });
  const { year, week, last, day } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    dispatch(getLast());
    dispatch(getWeek());
    dispatch(getYear());
    dispatch(getDay());
  }, []);
  let yearIncome = 0;
  year.forEach((element) => {
    yearIncome += element.total;
  });
  let weekIncome = 0;
  week.forEach((element) => {
    weekIncome += element.total;
  });
  let dayIncome = 0;
  day.forEach((element) => {
    dayIncome += element.total;
  });

  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Yearly Earning"
            earning={yearIncome || 0}
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Last Day"
            earning={dayIncome || 0}
            icon="bi bi-coin"
          />
        </Col>
        {/* <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col> */}
        <Col sm="6" lg="4">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning={weekIncome || 0}
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="12" lg="12" xl="12" xxl="12">
          <SalesChart />
        </Col>
        <Col sm="12" lg="12" xl="12" xxl="12">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      {/* <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row> */}
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
    </div>
  );
};

export default Starter;
