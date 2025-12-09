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
              <button type="button" className="social-btn" aria-label="social link 1">
                <img src={navIcon1} alt="Icon" />
              </button>
              <button type="button" className="social-btn" aria-label="social link 2">
                <img src={navIcon2} alt="Icon" />
              </button>
              <button type="button" className="social-btn" aria-label="social link 3">
                <img src={navIcon3} alt="Icon" />
              </button>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  );
};
