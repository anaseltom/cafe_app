import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Logo = () => {
  return (
    <Row>
      <Col>
        <Link to="/">
          <img
            src={require("../assets/images/logos/cloudcafe.jpg").default}
            width={120}
          />
        </Link>
      </Col>
    </Row>
  );
};

export default Logo;
