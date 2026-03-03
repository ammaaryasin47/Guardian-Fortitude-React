import React, { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // 1. Unified State for all steps
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    preferredLanguage: "",
    chainOfCommand: "",
    acknowledgeTerms: false,
    sector: "",
    nature: "individual",
    armsLicense: "",
    role: "",
    address: "",
  });

  // 2. Dynamic handler for all input types
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 3. Final submission to your Express server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      alert(response.data.message);
    } catch (err) {
      console.error("Registration Error:", err);
      alert("Registration Failed: " + (err.response?.data?.error || "Server connection error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-black px-4 my-[5rem]">
        <div className="w-full max-w-4xl">
          <Card className="rounded-2xl overflow-hidden bg-black text-white shadow-2xl">
            <Row className="g-0 h-full">
              {/* Left Side Image */}
              <Col md={6} lg={5} className="hidden md:block h-full">
                <img
                  src="https://collider.com/wp-content/uploads/agents-of-shield-comic-con-poster.jpg"
                  alt="register form"
                  className="w-full h-full object-cover rounded-l-2xl"
                />
              </Col>

              {/* Right Side Form */}
              <Col md={6} lg={7} className="flex items-center h-full">
                <Card.Body className="p-4 lg:p-4 text-white w-full">
                  <Form onSubmit={handleSubmit}>
                    
                    {/* STEP 1: PERSONAL INFO */}
                    {step === 1 && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="text-sm tracking-widest mb-1">FULL NAME</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-black text-light border-secondary focus:border-white focus:bg-black focus:ring-0"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="text-sm tracking-widest mb-1">CONTACT NUMBER</Form.Label>
                          <Form.Control
                            type="tel"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            className="bg-black text-light border-secondary focus:bg-black focus:ring-0"
                          />
                        </Form.Group>

                        <button type="button" onClick={() => setStep(2)} className="login-btn relative min-w-[180px] h-[50px] bg-black text-white tracking-widest text-sm border border-white mt-3">
                          NEXT →
                        </button>
                      </>
                    )}

                    {/* STEP 2: CREDENTIALS */}
                    {step === 2 && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="text-sm tracking-widest mb-1">EMAIL ADDRESS</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-black text-light focus:bg-black border-secondary"
                          />
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label className="text-sm tracking-widest mb-1">PASSWORD</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="bg-black text-light focus:bg-black border-secondary"
                          />
                        </Form.Group>

                        <div className="flex gap-3">
                          <button type="button" onClick={() => setStep(1)} className="text-sm tracking-widest text-gray-400">← BACK</button>
                          <button type="button" onClick={() => setStep(3)} className="login-btn border border-white px-4 py-2">NEXT →</button>
                        </div>
                      </>
                    )}

                    {/* STEP 3: PREFERENCES */}
                    {step === 3 && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="text-sm tracking-widest mb-1">SECURITY UPDATES LANGUAGE</Form.Label>
                          <Form.Select
                            name="preferredLanguage"
                            value={formData.preferredLanguage}
                            onChange={handleChange}
                            required
                            className="bg-black text-light focus:bg-black border-secondary"
                          >
                            <option value="">Select Language</option>
                            <option value="hindi">Hindi</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label className="text-sm tracking-widest mb-1">CHAIN OF COMMAND</Form.Label>
                          <Form.Select
                            name="chainOfCommand"
                            value={formData.chainOfCommand}
                            onChange={handleChange}
                            required
                            className="bg-black text-light focus:bg-black border-secondary"
                          >
                            <option value="">Select Preference</option>
                            <option value="notify_before_action">Notify before action</option>
                            <option value="immediate_intervention">Immediate intervention</option>
                          </Form.Select>
                        </Form.Group>

                        <div className="flex gap-3">
                          <button type="button" onClick={() => setStep(2)} className="text-sm tracking-widest text-gray-400">← BACK</button>
                          <button type="button" onClick={() => setStep(4)} className="login-btn border border-white px-4 py-2">NEXT →</button>
                        </div>
                      </>
                    )}

                    {/* STEP 4: LEGAL */}
                    {step === 4 && (
                      <>
                        <div className="mb-4 px-2 text-sm text-gray-400">
                          <strong className="text-danger">GUARDIAN FORTITUDE</strong>: You acknowledge all data protection laws. Accurate information is mandatory for platform use.
                        </div>
                        <Form.Check
                          type="checkbox"
                          name="acknowledgeTerms"
                          checked={formData.acknowledgeTerms}
                          onChange={handleChange}
                          required
                          label="I accept these Terms and Conditions"
                          className="mb-4 focus:bg-black text-light"
                        />
                        <div className="flex gap-3">
                          <button type="button" onClick={() => setStep(3)} className="text-sm tracking-widest text-gray-400">← BACK</button>
                          <button type="button" onClick={() => setStep(5)} className="login-btn border border-white px-4 py-2">NEXT →</button>
                        </div>
                      </>
                    )}

                    {/* STEP 5: SECTOR & ROLE */}
                    {step === 5 && (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label className="text-sm tracking-widest">SECTOR / OCCUPATION</Form.Label>
                          <Form.Control name="sector" value={formData.sector} onChange={handleChange} required className="bg-black focus:bg-black text-white border-secondary" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="text-sm tracking-widest">ROLE IN THIS FIRM</Form.Label>
                          <Form.Select name="role" value={formData.role} onChange={handleChange} required className="bg-black focus:bg-black text-white border-secondary">
                            <option value="">Select Role</option>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-4">
                          <Form.Label className="text-sm tracking-widest">ADDRESS</Form.Label>
                          <Form.Control as="textarea" rows={2} name="address" value={formData.address} onChange={handleChange} required className="bg-black focus:bg-black text-white border-secondary" />
                        </Form.Group>

                        <div className="flex justify-between gap-3 pt-2">
                          <button type="button" onClick={() => setStep(4)} className="text-gray-400">← BACK</button>
                          <button type="submit" disabled={loading} className="login-btn border border-white px-5 py-2">
                            {loading ? "AUTHORIZING..." : "REGISTER"}
                          </button>
                        </div>
                      </>
                    )}
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

export default Register;