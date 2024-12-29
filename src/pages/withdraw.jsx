import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Button,
  Alert,
  Image,
} from "react-bootstrap";
import btc from "../assets/coin-icons/btc.png";
import doge from "../assets/coin-icons/dogecoin.svg";
import eth from "../assets/coin-icons/ethereum.png";
import usdt from "../assets/coin-icons/usdt.svg";

import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { HighLight } from "./login";
import Footer from "../components/footer";
export const coins = [
  { name: "ethereum", id: "ethereum", image: eth },
  { name: "bitcoin", id: "bitcoin", image: btc },
  { name: "dogecoin", id: "dogecoin", image: doge },
  { name: "usdt", id: "usdt", image: usdt },
];
const App = () => {
  const logout = () => {};
  const balance = 500;
  const [selectedCoin, setSelectedCoin] = useState("");
  const [amount, setAmount] = useState();
  const [errors, setErrors] = useState([]);

  const withdraw = async () => {
    const errArray = [];
    if (amount > balance) {
      errArray.push("Insufficient funds");
    }
    if (!selectedCoin) {
      errArray.push("Select wallet by clicking the logo");
    }
    setErrors(errArray);
  };

  return (
    <>
      {/* Navbar Start */}
      <Navbar bg="light" expand="lg" fixed="top" className="py-3">
        <Container>
          <Navbar.Brand href="index.html" className="d-flex align-items-center">
            <h1 className="m-0">
              Health<HighLight>Support</HighLight>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="index.html">Home</Nav.Link>
              <Nav.Link href="about.html">About</Nav.Link>
              <Nav.Link href="service.html">Services</Nav.Link>
              <NavDropdown title="Actions" id="actions-dropdown">
                <NavDropdown.Item href="invest.html">Invest</NavDropdown.Item>
                <NavDropdown.Item href="withdraw.html">
                  Withdraw
                </NavDropdown.Item>
                <NavDropdown.Item href="userdashboard.html">
                  Dashboard
                </NavDropdown.Item>
                <Button
                  className="dropdown-item text-white bg-primary"
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </NavDropdown>
              <Nav.Link href="contact.html">Contact</Nav.Link>
            </Nav>
            <div className="d-none d-lg-flex ms-2">
              <a
                className="btn btn-light btn-sm-square rounded-circle ms-3"
                href=""
              >
                <i className="fab fa-facebook-f text-primary"></i>
              </a>
              <a
                className="btn btn-light btn-sm-square rounded-circle ms-3"
                href=""
              >
                <i className="fab fa-twitter text-primary"></i>
              </a>
              <a
                className="btn btn-light btn-sm-square rounded-circle ms-3"
                href=""
              >
                <i className="fab fa-linkedin-in text-primary"></i>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar End */}

      {/* Page Header Start */}
      <div className="container-fluid page-header mb-5">
        <div className="container">
          <h1 className="display-3 mb-4">Withdraw</h1>
        </div>
      </div>
      {/* Page Header End */}

      {/* Callback Start */}
      <div className="container-fluid callback my-5 pt-5">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bg-white border rounded p-4">
                <div className="text-center">
                  <p className="border rounded text-primary fw-bold py-1 px-3">
                    Current Balance: <span id="balanceCon"></span>
                  </p>
                  <p className="border rounded text-primary fw-bold py-1 px-3">
                    Current wallet: <span id="selectedCoin"></span>
                  </p>
                  <h1 className="display-5 mb-5">Withdraw</h1>
                </div>

                <div className="availableWallets text-center">
                  <p className="text-success mb-5 h4">Available wallets</p>
                  <div className="coins-con d-flex align-items-center justify-content-center gap-3 flex-wrap">
                    {coins.map((coin) => {
                      return (
                        <Image
                          onClick={() => {
                            setSelectedCoin(coin.id);
                          }}
                          key={coin.id}
                          id={coin.id}
                          src={coin.image}
                          width={70}
                          alt={coin.name}
                          className="coin-img"
                          style={{
                            objectFit: "cover",
                            borderRadius: "50%",
                            border:
                              coin.id === selectedCoin
                                ? "2px solid blue"
                                : "none",
                          }}
                        />
                      );
                    })}
                  </div>
                  <p id="walletId" className="text-primary h4"></p>
                </div>

                <Form>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="number"
                      placeholder="Amount"
                      onChange={(e) => {
                        setAmount(Number(e.target.value));
                      }}
                      style={{ height: "70px" }}
                    />
                  </Form.Group>
                  {errors.length > 0 && (
                    <Alert className="alert-secondary" id="errors">
                      <p>Please fix the following errors to continue:</p>
                      {errors.map((err) => (
                        <p>{err}</p>
                      ))}
                    </Alert>
                  )}
                  <Button
                    onClick={() => {
                      withdraw();
                    }}
                    id="submitBtn"
                    className="btn-primary w-100 py-3"
                  >
                    Withdraw
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Callback End */}

      <Footer />
    </>
  );
};

export default App;