import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuoteBanner from "../assets/IMAGES/QUOTE/quote-banner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Quote = () => {
  const [name, setName] = useState("");
return (
    <div className="bg-black">

      <Navbar />

      <div className="text-white relative h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] my-5 overflow-hidden px-5">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-75"
          style={{ backgroundImage: `url(${QuoteBanner})` }}
        ></div>
        <div className="relative h-full flex items-center justify-center text-3xl text-white">
          QUOTE
        </div>
      </div>
      
      <Container fluid className="mt-5 pt-5 text-light">
      <Row className="justify-content-start">
        <Col
          xs={12}
          md={10}
          lg={8}
          className="
            ml-4 md:ml-12 lg:ml-24
            px-3 md:px-4 lg:px-5
            max-w-full md:max-w-4xl lg:max-w-3xl
            leading-relaxed md:leading-loose
            tracking-normal md:tracking-wide lg:tracking-widest
          "
        >
          <h2 className="text-white text-lg md:text-xl tracking-widest mb-3">
            This Is A Complimentary Quotation From
          </h2>

          <h1 className="text-xl md:text-2xl font-bold tracking-[0.25em] mb-8">
            GUARDIAN FORTITUDE
          </h1>

          <p className="quote-para mb-5">
            To The Management At&nbsp;
            <strong className="tracking-widest">
              GUARDIAN FORTITUDE SECURITY SERVICES
            </strong>,
          </p>

          <p className="quote-para mb-5">
            My Name Is{" "}
            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                bg-transparent border-b border-light text-white
                outline-none mx-2
                w-full sm:w-64
                tracking-wide
              "
              required
            />
          </p>

          <p className="quote-para mb-5">
            Residing At{" "}
            <input
              type="text"
              placeholder="ADDRESS"
              className="
                bg-transparent border-b border-light text-white
                outline-none mx-2
                w-full sm:w-96
                tracking-wide
              "
              required
            />
          </p>

          <p className="quote-para mb-5">
            I Am Reaching Out To Inquire About Your Security Services.
          </p>

          <p className="quote-para mb-5">
            I Would Like To Know More About{" "}
            <select
              className="
                bg-transparent border border-light bg-dark text-white
                px-3 py-1 mt-2 sm:mt-0
                w-full sm:w-auto
                tracking-wide outline-none
              " required
            >
               <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Cyber Security
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Armed Guards
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Unarmed Guards
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Event Security
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Surveillance & Monitoring
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Executive Protection
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Detective Services
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Consultation Services
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Vehicle Convoy Service
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Special Assault Team
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  Extraction
                </option>
                <option style={{ backgroundColor: "#212529", color: "#fff" }}>
                  K9 Unit
                </option>
            </select>
          </p>

          <p className="quote-para mb-5">
            You Can Reach Me At{" "}
            <input
              type="text"
              placeholder="CONTACT NO."
              className="
                bg-transparent border-b border-light text-white
                outline-none mx-2
                w-full sm:w-64
                tracking-wide
              "
              required
            />
          </p>

          <p className="quote-para mb-8">
            Or Via Email At{" "}
            <input
              type="email"
              placeholder="EMAIL"
              className="
                bg-transparent border-b border-light text-white
                outline-none mx-2
                w-full sm:w-72
                tracking-wide
              "
              required
            />
          </p>

          <p className="quote-para mb-5 tracking-widest">Sincerely,</p>

          <p className="quote-para mb-8">
            <input
              type="text"
              placeholder="NAME"
              value={name}
              className="
                bg-transparent border-b border-light text-white
                outline-none
                w-full sm:w-64
                tracking-wide
              "
              disabled
              readOnly
            />
          </p>

          <p className="quote-para mb-6 text-sm tracking-wide">
            <input type="checkbox" required className="mr-2" />
            I Hereby Agree To All The{" "}
            <a href="#" className="underline tracking-widest">
              Terms & Conditions
            </a>
          </p>

          <a
            href="#"
            className="inline-block text-white text-xl tracking-widest"
          >
            <i className="bx bx-send"></i>
          </a>
        </Col>
      </Row>
    </Container>


            <Footer />
    </div>
    );
};
      
export default Quote;