import "./register.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="register">
        {/* Navbar */}
          <nav className="navbar-login d-flex align-items-center justify-content-between">
            <h1
              className="logo fw-bold"
              style={{ fontFamily: "Urbanist, sans-serif" }}>
              <span
                className="fw-bold"
                style={{ color: "#7939FF", fontSize: "16px" }}>
                Talents
              </span>
              Space
            </h1>
            {/* <div className="right-bar">
            <span style={{ color: "rgba(18, 18, 18, 0.6)" }}>
              Don't have Account?
            </span>
            <Link
              to={"/register"}
              style={{ color: "#7939FF", fontWeight: "700" }}>
              Apply Now
            </Link>
          </div> */}
          </nav>

        {/* <h1>Register Page</h1> */}
        <div
          className="welcome d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#F6F6F6" }}>
          <div className="left-side d-flex align-items-center justify-content-center">
            <div className="form-parts">
              <h1 className="welcome-title">Hello! Register to get started</h1>
              <Form>
                <div className="form-container">
                  <Form.Group
                    className="form-custom mb-3 mt-4"
                    controlId="formBasicName">
                    {/* <Form.Label>UserName</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter Your Name" />
                  </Form.Group>

                  <Form.Group
                    className="form-custom mb-3 mt-4"
                    controlId="formBasicEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter Your Email" />
                  </Form.Group>

                  <Form.Group
                    className="form-custom mb-3 mt-4"
                    controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group
                    className="form-custom mb-3 mt-4"
                    controlId="formBasicConfirmPassword">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>

                  <Button className="submit btn w-100" type="submit">
                    Register
                  </Button>

                  <div className="social">
                    <span className="social-info">Or Register With</span>
                    <div className="d-flex align-items-center justify-content-center gap-5">
                      <Link className="social-login facebook d-flex align-items-center- justify-content-center">
                        <img
                          // width={"50px"}
                          src={require("../../../../Assets/Images/facebook.png")}
                          alt="facebook"
                        />
                      </Link>
                      <Link className="social-login google d-flex align-items-center- justify-content-center">
                        <img
                          // width={"50px"}
                          src={require("../../../../Assets/Images/google.png")}
                          alt="google"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          <div className="right-side">
            <img
              src={require("../../../../Assets/Images/login.png")}
              alt="login-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
