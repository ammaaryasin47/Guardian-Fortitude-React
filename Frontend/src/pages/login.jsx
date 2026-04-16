import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Row, Col, Form } from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Required for HttpOnly Cookies to be sent/received
axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // 1. State to store credentials
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // 2. Handler to update state on input
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // 3. Logic to hit the Backend
 const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", credentials);
      
      // Success feedback
      alert(response.data.message);
      
      // --- CRITICAL CHANGE HERE ---
      // We change "userInfo" to "user" to match your ProtectedRoute in App.jsx
      localStorage.setItem("user", JSON.stringify(response.data.user));

      if (response.data.redirectTo) {
        navigate(response.data.redirectTo);
      } else {
        // Fallback: Send everyone to /profile 
        // The Profile.jsx component we built handles the Role-based view internally
        navigate("/profile");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert(err.response?.data?.error || "Unauthorized Access: Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-black">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-black px-4 my-[5rem]">
        <div className="w-full max-w-4xl">
          <Card className="rounded-2xl overflow-hidden bg-black text-white shadow-2xl max-h-[480px]">
            <Row className="g-0 h-full">
              <Col md={6} lg={5} className="hidden md:block h-full">
                <img
                  src="https://i.pinimg.com/736x/1a/98/91/1a989129e180cd30f47eae53a183757f.jpg"
                  alt="Guardian Fortitude Security"
                  className="w-full h-full object-cover rounded-l-2xl"
                />
              </Col>

              <Col md={6} lg={7} className="flex items-center h-full">
                <Card.Body className="p-4 lg:p-4 text-white w-full">
                  <Form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <span className="text-3xl font-medium leading-tight block">
                        GUARDIAN FORTITUDE
                        <br />
                        SECURITY SERVICES
                      </span>
                    </div>

                    <h5
                      className="fw-normal mb-2 pb-2 text-sm"
                      style={{ letterSpacing: "1px" }}
                    >
                      AUTHORIZED PERSONNEL ONLY: SIGN IN
                    </h5>

                    <Form.Group className="mb-3">
                      <Form.Label className="text-sm tracking-widest mb-1">
                        EMAIL ADDRESS
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        className="bg-black text-light rounded-md py-2 text-sm focus:bg-black focus:text-white focus:border-white focus:ring-0 border-secondary"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="text-sm tracking-widest mb-1">
                        PASSWORD
                      </Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        className="bg-black text-light rounded-md py-2 text-sm focus:bg-black focus:text-white focus:border-white focus:ring-0 border-secondary"
                      />
                    </Form.Group>

                    <div className="pt-1 mb-3 flex justify-start">
                      <button
                        type="submit"
                        disabled={loading}
                        className="login-btn relative min-w-[180px] h-[60px] bg-black text-white tracking-widest text-sm outline-none"
                      >
                        <svg
                          width="180"
                          height="60"
                          viewBox="0 0 180 60"
                          className="absolute inset-0"
                        >
                          <polyline
                            points="179,1 179,59 1,59 1,1 179,1"
                            className="bg-line"
                          />
                          <polyline
                            points="179,1 179,59 1,59 1,1 179,1"
                            className="hl-line"
                          />
                        </svg>

                        <span className="relative z-10">
                          {loading ? "AUTHORIZING..." : "LOGIN"}
                        </span>
                      </button>
                    </div>

                    <a href="#!" className="text-muted text-sm block mb-1">
                      FORGOT PASSWORD?
                    </a>

                    <p className="mb-3 text-sm text-[#393f81]">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-[#393f81] text-decoration-none hover:text-white"
                      >
                        REGISTER HERE
                      </Link>
                    </p>

                    <a href="#!" className="text-muted text-sm">
                      Terms & Conditions
                    </a>
                  </Form>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;