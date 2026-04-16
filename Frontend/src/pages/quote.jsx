import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteBanner from "../assets/IMAGES/QUOTE/quote-banner.jpg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";

const Quote = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("Cyber Security");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  // --- UPDATED STYLE: rounded-lg for rounded edges, border-[#800000] for Maroon ---
  const inputClass = "bg-black text-white border border-zinc-800 rounded-lg shadow-none px-3 py-2 text-sm tracking-widest transition-all duration-300 placeholder:text-zinc-600 focus:bg-black focus:text-white focus:!border-[#800000] focus:ring-2 focus:ring-[#800000]/20 outline-none";

  const handleTransmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceDescriptions = {
      "Cyber Security": "Our Cyber Security suite provides advanced threat detection, penetration testing, and 24/7 network monitoring to shield your digital assets.",
      "Armed Guards": "Our elite Armed Guard units are comprised of highly trained professionals authorized to provide high-level deterrents and rapid response.",
      "Unarmed Guards": "Professional Unarmed Guard services focus on vigilance, access control, and maintaining a secure presence at your premises.",
      "Event Security": "From crowd control to VIP management, our Event Security teams ensure your gathering proceeds without interruption.",
      "Executive Protection": "Discreet and professional, our Executive Protection details are specialized in risk mitigation for high-profile individuals."
    };

    const templateParams = {
      to_name: name,               
      user_email: email,              
      service: service,               
      service_paragraph: serviceDescriptions[service] || "Specialized security solutions.", 
      user_contact: contact,          
      user_address: address           
    };

    emailjs
      .send(
        "service_s65l3by", 
        "template_vmhcyvr",   
        templateParams,
        "mPtxfekfXl_jZzpZy"       
      )
      .then(() => {
        alert(`TRANSMISSION SUCCESSFUL. Check ${email} for your quote.`);
        setIsSending(false);
        setName(""); setAddress(""); setContact(""); setEmail("");
      })
      .catch((err) => {
        console.error("EMAILJS_CRITICAL_ERROR:", err);
        alert("TRANSMISSION FAILED. CHECK CONSOLE LOGS.");
        setIsSending(false);
      });
  };

  return (
    <div className="bg-black min-h-screen font-[Barlow]">
      <Navbar />

      <div className="pt-20"> 
        <div className="relative h-[25vh] md:h-[35vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${QuoteBanner})`, filter: "brightness(0.4)" }}
          ></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-light tracking-[0.3em] uppercase">
              Quotation
            </h1>
          </div>
        </div>
      </div>

      <Container className="py-12 md:py-20">
        <Row className="justify-content-center">
          <Col lg={8} className="px-4">
            <Form className="text-white" onSubmit={handleTransmit}>
              <p className="mb-5 text-lg tracking-wide">
                To the Management at <strong className="text-white">Guardian Fortitude Security Services</strong>,
              </p>

              {/* NAME */}
              <Row className="mb-4 items-center">
                <Col xs="auto"><span className="text-lg">My name is</span></Col>
                <Col xs={12} sm={5} md={4}>
                  <Form.Control
                    type="text" placeholder="NAME" required
                    value={name} onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </Col>
              </Row>

              {/* ADDRESS */}
              <Row className="mb-4 items-center">
                <Col xs="auto"><span className="text-lg">Residing at</span></Col>
                <Col xs={12} sm={8} md={6}>
                  <Form.Control
                    type="text" placeholder="ADDRESS" required
                    value={address} onChange={(e) => setAddress(e.target.value)}
                    className={inputClass}
                  />
                </Col>
              </Row>

              <p className="mb-4 text-lg">I am reaching out to inquire about your security services.</p>

              {/* SERVICE SELECT */}
              <Row className="mb-4 items-center">
                <Col xs="auto"><span className="text-lg">I would like to know more about</span></Col>
                <Col xs={12} sm={6} md={4}>
                  <Form.Select 
                    value={service} onChange={(e) => setService(e.target.value)}
                    className={inputClass}
                  >
                    <option value="Cyber Security" className="bg-black">Cyber Security</option>
                    <option value="Armed Guards" className="bg-black">Armed Guards</option>
                    <option value="Unarmed Guards" className="bg-black">Unarmed Guards</option>
                    <option value="Event Security" className="bg-black">Event Security</option>
                    <option value="Executive Protection" className="bg-black">Executive Protection</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* CONTACT */}
              <Row className="mb-4 items-center">
                <Col xs="auto"><span className="text-lg">You can reach me at</span></Col>
                <Col xs={12} sm={5} md={3}>
                  <Form.Control
                    type="text" placeholder="CONTACT NO." required
                    value={contact} onChange={(e) => setContact(e.target.value)}
                    className={inputClass}
                  />
                </Col>
              </Row>

              {/* EMAIL */}
              <Row className="mb-5 items-center">
                <Col xs="auto"><span className="text-lg">Or via email at</span></Col>
                <Col xs={12} sm={6} md={4}>
                  <Form.Control
                    type="email" placeholder="EMAIl" required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                </Col>
              </Row>

              <div className="mb-5 pt-4">
                <p className="text-zinc-500 mb-1 text-sm tracking-widest">Sincerely,</p>
                <p className="h5 border-b border-zinc-800 d-inline-block min-w-[200px] pb-1 uppercase tracking-tighter">
                  {name || "____________________"}
                </p>
              </div>

              <Form.Group className="mb-5">
                <Form.Check
                  type="checkbox" id="terms" required
                  label={<span className="text-zinc-500 text-xs tracking-widest ml-2">I AGREE TO THE TERMS & CONDITIONS</span>}
                  className="d-flex align-items-center"
                />
              </Form.Group>

              <Button 
                variant="outline-light" type="submit" disabled={isSending}
                className="rounded-lg px-5 py-3 text-uppercase tracking-[0.3em] font-bold text-xs hover:bg-[#800000] hover:border-[#800000] transition-all border-zinc-700"
              >
                {isSending ? "Transmitting..." : "Submit Request"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default Quote;