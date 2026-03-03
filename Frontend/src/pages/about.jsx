import React from "react";
import Banner from "../assets/Home.jpg";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Logo from '../assets/Logo.png';
import AboutBanner from '../assets/IMAGES/ABOUT US/About-Banner.jpeg';
import Footer from "../components/footer"

const cards = [
    {
      img: "https://i.pinimg.com/564x/cb/13/b7/cb13b751d146415931fbd9f883f2bc10.jpg",
      title: "SUPPЯESSOЯ",
      subtitle: "BRAND AMBASSADOR",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      img: "https://i.pinimg.com/564x/ea/42/49/ea4249bd38cbddc7c2c94e449d9f3d38.jpg",
      title: "VALKYRIE",
      subtitle: "OPERATIONS MANAGER",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      img: "https://i.pinimg.com/564x/0d/b5/25/0db52583dc1baa8f777009c289e8bb69.jpg",
      title: "IRONCLAD",
      subtitle: "SECURITY SPECIALIST",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  ];

const about = () => {
    return (  
    <div className="bg-black">
        <div >
            <Navbar />
        </div>

        <div
        className="relative h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] bg-center bg-cover bg-no-repeat font-[Quantico]"
        style={{ backgroundImage: `url(${AboutBanner})` }}>
            <div className="h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] text-3xl relative text-white w-full flex items-center justify-center">ABOUT</div>
        </div>

        <div className="text-white text-xl text-center m-5 ">
            <a className="text-5xl text-decoration-none hover:text-[#800000] text-[#800000]">A</a>t Guardian Fortitude Security Services, We Pride Ourselves On Our Unwavering Dedication To Safeguarding What Matters Most To You. 
            Our Mission Is To Provide Unparalleled Security Solutions That Ensure The Safety And Peace Of Mind Of Our Clients. 
            With A Team Of Highly Trained And Experienced Security Professionals, We Employ The Latest In Surveillance Technology, Alarm Systems, And Emergency Response Protocols To Offer Comprehensive Protection. 
            We Understand That Each Client Has Unique Security Needs, Which Is Why We Tailor Our Services To Provide Personalized And Effective Security Strategies. Our Core Values Of Integrity, Vigilance, 
            And Reliability Guide Us In Every Aspect Of Our Operations, From The Initial Assessment To The Implementation And Ongoing Management Of Our Security Solutions. 
            At Guardian Fortitude, We Believe That True Security Comes From A Combination Of Advanced Technology, Skilled Personnel, And A Proactive Approach To Identifying And Mitigating Risks. Whether It's Protecting Your Home, Business, Or Community, 
            We Are Committed To Delivering Top-Notch Security Services That You Can Trust. With Guardian Fortitude Security Services, You Can Rest Assured That Your Safety Is Our Top Priority, 
            And WeAre Always Ready To Respond To Any Challenge With Strength And Precision.
        </div>

        <div className="relative text-black bg-white flex flex-row h-[70vh] justify-around items-center">
            <div className="text-3xl border-[#800000] border-b-2 pb-2 text-center m-4 rotate-[270deg] font-medium">
                <h1>GOALS</h1>
            </div>

            <div className=" px-[5rem] h-auto text-center border-[#800000] border-r-2">
                <h2 className="font-semibold text-2xl my-3">Asset Protection</h2>
                <p className="text-lg">Our Primary Goal As A Security Company Is To Safeguard The Valuable Assets Of Our Clients. This Encompasses Both Physical Assets, Such As Property, And Equipment, And Intangible Assets, Including Sensitive Data & Intellectual Property.</p>
            </div>

            <div className=" px-[5rem] text-center border-[#800000] border-r-2">
                <h2 className="font-semibold text-2xl my-3">Risk Mitigation</h2>
                <p className="text-lg">We Aim To Identify, Assess, And Minimize Risks To Their Clients. This Involves Conducting Thorough Risk Assessments, Implementing Effective Security Measures, And Providing Ongoing Monitoring And Response Services To Prevent Security Breaches.</p>
            </div>

            <div className="px-[5rem] text-center">
                <h2 className="font-semibold text-2xl my-3">Client Safety</h2>
                <p className="text-lg">Ultimately, We Strive To Ensure The Safety And Peace Of Mind Of Their Clients. This Involves Providing Security Personnel, Surveillance Systems, Alarm Monitoring, And Emergency Response Services To Promptly Address Any Security Threats Or Incidents That May Arise.</p>
            </div>
        </div>

        <div>
            <h1 className="border-b-2 border-[#800000] text-white text-2xl w-max m-3 font-medium">OUR EXECUTIVE TEAM </h1>

        <div className="flex flex-row gap-6 w-full justify-around my-5">

            <div 
                className="relative h-80 w-80 rounded-2xl bg-cover bg-center shadow-lg overflow-hidden"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/5b/98/89/5b9889b63f5bd3d5aca5e2e89911935c.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-2xl font-bold">SUPPЯESSOЯ</h2>
                <p className="text-sm opacity-90 mb-3">BRAND AMBASSADOR</p>

                <div className="flex space-x-4 text-xl">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-twitter"></i></a>
                    <a href="#"><i className="bx bxl-linkedin"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                </div>
                </div>
            </div>

            {/* Card 2 */}
            <div 
                className="relative h-80 w-80 rounded-2xl bg-cover bg-center shadow-lg overflow-hidden"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/5b/98/89/5b9889b63f5bd3d5aca5e2e89911935c.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-2xl font-bold">EK_VILLAIN</h2>
                <p className="text-sm opacity-90 mb-3">OWNER</p>

                <div className="flex space-x-4 text-xl">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-twitter"></i></a>
                    <a href="#"><i className="bx bxl-linkedin"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                </div>
                </div>
            </div>

            {/* Card 3 */}
            <div 
                className="relative h-80 w-80 rounded-2xl bg-cover bg-center shadow-lg overflow-hidden"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/5b/98/89/5b9889b63f5bd3d5aca5e2e89911935c.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-2xl font-bold">H3CT0R</h2>
                <p className="text-sm opacity-90 mb-3">PARTNER</p>

                <div className="flex space-x-4 text-xl">
                    <a href="#"><i className="bx bxl-facebook"></i></a>
                    <a href="#"><i className="bx bxl-twitter"></i></a>
                    <a href="#"><i className="bx bxl-linkedin"></i></a>
                    <a href="#"><i className="bx bxl-instagram"></i></a>
                </div>
                </div>
      </div>

    </div>
        </div>

    <div className="text-white ">
        <h1 className="text-3xl font-medium text-center my-4">HISTORIC TIMELINE</h1>
        <div className="max-w-md flex justify-end items-center w-50 border-right border-white px-5">
            <div className="my-5 w-30 flex flex-col justify-end items-end pr-5">
                <h5 className=" my-2 text-lg">The Foundation</h5>  
                <p className="text-muted text-lg mb-2">2012-13</p>
                <p className="text-right text-muted">
                    EK_VILLAIN Founded Guardian Fortitude Security Services With A Vision To Provide Elite
                    Security Solutions, Partnering With H3CT0R, A Cybersecurity Expert.
                </p>
            </div>
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>

        </div>
        <div className="flex justify-end items-center">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="my-5 w-70 flex flex-col justify-start items-start pr-5">
                <h5 className=" my-2 text-lg">Expanding Brand Presence</h5>
                <p className="text-muted text-lg mb-2">2014-15</p>
                <p className="text-right text-muted">
                SUPPRESSOR Was Introduced As The Brand Ambassador, Enhancing Public Awareness And Credibility For The Company.</p>
            </div>
            
        </div>
    </div>

<div className="relative min-h-screen bg-black text-white px-24 py-16">

{/* Heading */}
<div className="flex justify-center items-center mb-24">
  <h2 className="text-3xl tracking-widest">HISTORIC</h2>
  <div className="h-8 w-[2px] bg-white mx-6"></div>
  <h2 className="text-3xl tracking-widest">TIMELINE</h2>
</div>

{/* Center Line */}
<div className="absolute left-1/2 top-32 bottom-0 w-[2px] bg-white -translate-x-1/2"></div>

{/* Timeline Items */}
<div className="space-y-32">

  {/* LEFT ITEM */}
  <div className="relative flex justify-end pr-24 w-50">
    <div className="max-w-md text-right">
      <h3 className="text-xl font-semibold">The Foundation</h3>
      <p className="text-gray-400 mb-3">2012–13</p>
      <p className="text-gray-400 leading-relaxed">
        EK_VILLAIN Founded Guardian Fortitude Security Services With A Vision
        To Provide Elite Security Solutions, Partnering With H3CTOR,
        A Cybersecurity Expert.
      </p>
    </div>

    {/* Connector */}
    <div className="absolute right-0 top-6 w-10 h-[1px] bg-white"></div>

    {/* Icon */}
    <div className="absolute -right-14 top-3 w-8 h-8 rounded-full border border-white flex items-center justify-center">
      ⚙️
    </div>
  </div>

  {/* RIGHT ITEM */}
  <div className="relative flex justify-start pl-24 w-50">
    <div className="max-w-md text-left">
      <h3 className="text-xl font-semibold">Expanding Brand Presence</h3>
      <p className="text-gray-400 mb-3">2014–15</p>
      <p className="text-gray-400 leading-relaxed">
        SHAIKH AMMAAR Was Introduced As The Brand Ambassador,
        Enhancing Public Awareness And Credibility For The Company.
      </p>
    </div>

    {/* Connector */}
    <div className="absolute left-0 top-6 w-10 h-[1px] bg-white"></div>

    {/* Icon */}
    <div className="absolute -left-14 top-3 w-8 h-8 rounded-full border border-white flex items-center justify-center">
      ⚙️
    </div>
  </div>

  {/* LEFT ITEM */}
  <div className="relative flex justify-end pr-24 w-50">
    <div className="max-w-md text-right">
      <h3 className="text-xl font-semibold">Technological Integration</h3>
      <p className="text-gray-400 mb-3">2016–17</p>
      <p className="text-gray-400 leading-relaxed">
        H3CTOR Led The Integration Of Advanced Security Technologies,
        Positioning The Company As A Leader In Both Physical And
        Cybersecurity.
      </p>
    </div>

    {/* Icon */}
    <div className="absolute -right-14 top-3 w-8 h-8 rounded-full border border-white flex items-center justify-center">
      ⚙️
    </div>
  </div>

</div>
</div>
        
        <div>
            <Footer/>
        </div>
    
    </div>
        
    );
    };
    
    export default about;
    