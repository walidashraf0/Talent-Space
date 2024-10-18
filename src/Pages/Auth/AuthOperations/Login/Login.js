import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="login">
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
          <div className="right-bar">
            <span style={{ color: "rgba(18, 18, 18, 0.6)" }}>
              Don't have Account?
            </span>
            <Link
              to={"/register"}
              style={{ color: "#7939FF", fontWeight: "700" }}>
              Apply Now
            </Link>
          </div>
        </nav>
      </div>

      {/* <h1>Login Page</h1> */}
      <div
        className="welcome d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#F6F6F6" }}>
        <div className="left-side d-flex align-items-center justify-content-center">
          <div className="form-parts">
            <h1 className="welcome-title">
              Welcome to
              <span className="spacific-logo" style={{ color: "#7939FF" }}>
                Talents
              </span>
              Space
            </h1>
            <p style={{ color: "#717171", fontSize: "18px" }}>
              with{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                TalentSpace
              </span>{" "}
              Here you can share your talent and we will help you get
              acquainted.
            </p>
            <Form>
              <div className="form-container">
                <Form.Group
                  className="form-custom mb-3 mt-4"
                  controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <div className="input-container">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <Form.Control type="email" placeholder="Enter Your Email" />
                  </div>
                </Form.Group>

                <Form.Group
                  className="form-custom mb-3 mt-4"
                  controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-container">
                    <FontAwesomeIcon className="icon" icon={faLock} />
                    <Form.Control type="password" placeholder="Password" />
                  </div>
                </Form.Group>

                <Link
                  to={"/"}
                  className="forget mb-4"
                  style={{
                    display: "block",
                    color: "#6A707C",
                    fontSize: "12px",
                  }}>
                  Forgot Password
                </Link>

                <Button className="submit btn w-100" type="submit">
                  Login
                </Button>

                <div className="social">
                  <span className="social-info">Or Login With</span>
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
    </>
  );
}
