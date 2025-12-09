import { Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import './Fotter.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <div className="social-icon">
              <a href="javascript:void(0);">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="javascript:void(0);">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="javascript:void(0);">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  );
};
