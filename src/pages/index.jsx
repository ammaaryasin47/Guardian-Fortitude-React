import React from "react";
import Banner from "../assets/Home.jpg";
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import Carousel from "react-bootstrap/Carousel";
import Logo from '../assets/Logo.png';
import Footer from "../components/footer"

function CarouselFade() {
    return (
      <Carousel fade >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/original/6lDCSxbht0i3R1z191t3zaSKKAN.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="font-bold text-red-600 text-xl">EK_VILLAIN</h2>
            <p>Owner</p>
            <p>Someone Has To Make The Enemies Scared Of The Dark</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp12521426.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="font-bold text-cyan-500 text-xl text-center">SUPPRESSOR</h2>
            <p>Brand Ambassador</p>
            <p>Survival Must Be Your Only Goal</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapers.com/images/hd/black-and-white-anonymous-hacker-0t3ibs8rld889nia.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="font-bold text-xl">H3CT0R</h2>
            <p>Partner</p>
            <p>Internet Without Privacy Turns Piracy Real Fast</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
const index = () => {
    return (  
    <div className="bg-black">
        <div >
            <Navbar />
        </div>

        <div
        className="relative h-[40vh] sm:h-[50vh] md:h-[80vh] lg:h-screen bg-center bg-cover bg-no-repeat font-[Quantico]"
        style={{ backgroundImage: `url(${Banner})` }}>
      <div className="absolute top-[5rem] left-[3rem] md:top-[15rem] space-y-2">

        <h1 className="
          relative
          text-white
          w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[22rem]
          text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]
          opacity-20 skew-y-[-18deg] mix-blend-color-dodge
          transition-all duration-500
        "> GUARDIAN </h1>

        <h1 className="
          relative
          text-white
          w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[22rem]
          text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]
          opacity-20 skew-y-[-17deg] mix-blend-color-dodge
          transition-all duration-500
        "> FORTITUDE </h1>

        <h1 className="
          relative
          text-white
          w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[22rem]
          text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]
          opacity-20 skew-y-[-17deg] mix-blend-color-dodge
          transition-all duration-500
        "> SECURITY </h1>

        <h1 className="
          relative
          text-white
          w-[12rem] sm:w-[16rem] md:w-[20rem] lg:w-[22rem]
          text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[4rem]
          opacity-20 skew-y-[-18deg] mix-blend-color-dodge
          transition-all duration-500
        "> SERVICES </h1>

      </div>
    </div>

      <div>
        <CarouselFade />
      </div>

      <div className="text-white w-full flex items-center flex-col">
        <h2 className="border-b-2 border-[#800000] my-3 py-3 w-full text-center text-2xl text-white flex-wrap"> WHY CHOOSE US ?</h2>
          <div className="flex flex-row m-6 p-6">
            <div className="flex flex-col items-center justify-center w-15 m-3">
              <i class="fa-solid fa-briefcase"></i>
              <h3 className="my-3 text-lg font-semibold">DECADES OF EXPERIENCE</h3>
              <p>Founded In 2012, Our Extensive Knowledge And Proven Adaptability Enable Us To Address The Evolving Threats And Challenges Across Various Sectors. Our Longevity In The Industry Is A Testament To Our Ability To Adapt.</p>
            </div>
            <div className="flex flex-col items-center justify-center w-15">
              <i class="fa-solid fa-headphones"></i>
              <h3 className="my-3 text-lg font-semibold">24/7 SUPPORT</h3>
              <p>Guardian Fortitude Security Services Offers 24/7 Support, Ensuring That Security Needs Are Addressed At Any Hour Of The Day. Our Team Is Always On Standby Ready To Act Swiftly And Effectively To Safeguard Your Interests At All Times.</p>
            </div>
          </div>
          <div>
            <img className="h-auto w-[250px] relative opacity-40 " src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-row m-6 p-6">
            <div className="flex flex-col items-center justify-center w-15 m-3">
              <i class="fa-solid fa-microchip"></i>
              <h3 className="my-3 text-lg font-semibold">STATE-OF-THE-ART TECHNOLOGY</h3>
              <p>Guardian Fortitude Leverages Cutting-Edge Technology, Including Advanced Surveillance Systems, Real-Time Monitoring, And Analytics, To Provide Proactive And Responsive Security Solutions.</p>
            </div>
            <div className="flex flex-col items-center justify-center w-15">
              <i class="fa-solid fa-globe"></i>
              <h3 className="my-3 text-lg font-semibold">WORLD WIDE REACH</h3>
              <p>Our Extensive Network Of International Partners And Highly Skilled Personnel Ensures That No Matter Where You Are Located, We Can Deliver The Same High-Quality Security Services You Deserve.</p>
            </div>
          </div>
      </div>

      <div>
        <h3 className="border-b-2 border-[#800000] my-3 py-3 w-full text-center text-2xl text-white flex-wrap">BLOGS</h3>
        <div className="flex text-white justify-evenly items-center flex-wrap ">
          <div className="border-r-2 border-[#800000] p-5 m-3">
            <img className="w-52" src="https://cdnb.artstation.com/p/assets/images/images/034/890/181/4k/andrei-popescu-357-s-w-magnum-357-s-w-magnum.jpg?1613514909" />
            <h3 className="text-center text-lg font-semibold">Understanding Bullet Calibers</h3>
            <h4 className="text-sm text-center">By SUPPRESSOR</h4>
            
          </div>
          <div className=" p-5 m-3">
            <img className="w-52" src="https://img.freepik.com/free-photo/close-up-man-writing-paper_23-2148377689.jpg" />
            <h3 className="text-center  text-lg font-semibold">Impacts Of Security Consultancy</h3>
            <h4 className="text-sm text-center">By EK_VILLAIN</h4>
            
          </div>
          <div className="border-l-2 border-[#800000] p-5 m-3">
            <img className="w-52" src="https://t4.ftcdn.net/jpg/05/82/19/57/360_F_582195761_R6KLj1upLmNAtkn5GM2Lsc4Sv56gxeT8.jpg" />
            <h3 className="text-center text-lg font-semibold">Exploring Your Legal Boundaries</h3>
            <h4 className="text-sm text-center">By DAX</h4>
          </div>
        </div>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
    
);
};

export default index;