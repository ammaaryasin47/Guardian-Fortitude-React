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
      <Carousel fade className="shadow-2xl">
        <Carousel.Item>
          <img
            className="d-block w-100 object-cover h-[500px] brightness-50"
            src="https://image.tmdb.org/t/p/original/6lDCSxbht0i3R1z191t3zaSKKAN.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="pb-20">
            <h2 className="font-black text-red-600 text-4xl tracking-tighter uppercase italic">EK_VILLAIN</h2>
            <p className="text-[#800000] font-bold tracking-[0.3em] text-xs">UNIT_COMMANDER</p>
            <p className="text-gray-300 italic">"Someone Has To Make The Enemies Scared Of The Dark"</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100 object-cover h-[500px] brightness-50"
            src="https://wallpapercave.com/wp/wp12521426.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="pb-20">
            <h2 className="font-black text-cyan-500 text-4xl tracking-tighter uppercase italic text-center">SUPPRESSOR</h2>
            <p className="text-cyan-800 font-bold tracking-[0.3em] text-xs">BRAND_AMBASSADOR</p>
            <p className="text-gray-300 italic">"Survival Must Be Your Only Goal"</p>
          </Carousel.Caption>
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100 object-cover h-[500px] brightness-50"
            src="https://wallpapers.com/images/hd/black-and-white-anonymous-hacker-0t3ibs8rld889nia.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="pb-20">
            <h2 className="font-black text-white text-4xl tracking-tighter uppercase italic">H3CT0R</h2>
            <p className="text-gray-500 font-bold tracking-[0.3em] text-xs">CYBER_PARTNER</p>
            <p className="text-gray-300 italic">"Internet Without Privacy Turns Piracy Real Fast"</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
  
const Index = () => {
    return (  
    <div className="bg-black min-h-screen font-[Barlow] selection:bg-[#800000] selection:text-white">
        <Navbar />

        {/* Hero Section */}
        <div
            className="relative h-[60vh] md:h-screen bg-center bg-cover bg-no-repeat overflow-hidden border-b border-white/5"
            style={{ backgroundImage: `url(${Banner})` }}>
            
            {/* HUD Overlay Text */}
            <div className="absolute top-[10%] left-[5%] md:top-[20%] space-y-0 select-none pointer-events-none">
                {["GUARDIAN", "FORTITUDE", "SECURITY", "SERVICES"].map((text, idx) => (
                    <h1 key={idx} className="
                        text-white
                        text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem]
                        font-black leading-tight opacity-10
                        skew-y-[-12deg] mix-blend-overlay
                        transition-all duration-700 hover:opacity-30
                    "> 
                        {text} 
                    </h1>
                ))}
            </div>
        </div>

        {/* Tactical Carousel */}
        <div className="border-y-4 border-[#800000]">
            <CarouselFade />
        </div>

        {/* Core Features */}
        <section className="py-20 px-6 bg-gradient-to-b from-black via-[#050505] to-black relative">
            <h2 className="text-center text-3xl font-black tracking-[0.5em] text-white mb-16 uppercase italic">
                WHY <span className="text-[#800000]">CHOOSE</span> US?
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white/5 border border-white/5 rounded-sm hover:border-[#800000]/50 transition-all">
                    <i className="fa-solid fa-briefcase text-4xl text-[#800000]"></i>
                    <h3 className="text-xl font-black tracking-widest uppercase">Decades of Experience</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Founded in 2012, our extensive knowledge enables us to address evolving threats across all sectors.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white/5 border border-white/5 rounded-sm hover:border-[#800000]/50 transition-all">
                    <i className="fa-solid fa-headphones text-4xl text-[#800000]"></i>
                    <h3 className="text-xl font-black tracking-widest uppercase">24/7 Support</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Our team is always on standby, ready to act swiftly and safeguard your interests at any hour.
                    </p>
                </div>
            </div>

            {/* Floating Watermark Logo */}
            <div className="flex justify-center my-12 opacity-10">
                <img className="w-64 animate-pulse grayscale" src={Logo} alt="Logo" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white/5 border border-white/5 rounded-sm hover:border-[#800000]/50 transition-all">
                    <i className="fa-solid fa-microchip text-4xl text-[#800000]"></i>
                    <h3 className="text-xl font-black tracking-widest uppercase">State-of-the-Art Tech</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Leveraging cutting-edge surveillance and real-time monitoring to provide proactive security.
                    </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-4 p-8 bg-white/5 border border-white/5 rounded-sm hover:border-[#800000]/50 transition-all">
                    <i className="fa-solid fa-globe text-4xl text-[#800000]"></i>
                    <h3 className="text-xl font-black tracking-widest uppercase">World Wide Reach</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Our international partners ensure high-quality security services, no matter your location.
                    </p>
                </div>
            </div>
        </section>

        {/* Intelligence / Blogs */}
        <section className="py-20 px-6 bg-black border-t border-white/5">
            <h3 className="text-center text-3xl font-black tracking-[0.5em] text-white mb-16 uppercase italic">
                INTELLIGENCE <span className="text-[#800000]">LOGS</span>
            </h3>

            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
                {[
                    { title: "Bullet Calibers", author: "SUPPRESSOR", img: "https://cdnb.artstation.com/p/assets/images/images/034/890/181/4k/andrei-popescu-357-s-w-magnum-357-s-w-magnum.jpg?1613514909" },
                    { title: "Security Consultancy", author: "EK_VILLAIN", img: "https://img.freepik.com/free-photo/close-up-man-writing-paper_23-2148377689.jpg" },
                    { title: "Legal Boundaries", author: "DAX", img: "https://t4.ftcdn.net/jpg/05/82/19/57/360_F_582195761_R6KLj1upLmNAtkn5GM2Lsc4Sv56gxeT8.jpg" }
                ].map((blog, idx) => (
                    <div key={idx} className="group w-full sm:w-64 bg-[#0a0a0a] border border-white/5 p-4 transition-all hover:scale-105 hover:border-[#800000]">
                        <div className="overflow-hidden h-40 mb-4 border-b border-[#800000]/30">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={blog.img} alt={blog.title} />
                        </div>
                        <h3 className="text-center text-sm font-bold tracking-widest uppercase mb-1">{blog.title}</h3>
                        <h4 className="text-[10px] text-center text-[#800000] font-black uppercase tracking-widest">BY {blog.author}</h4>
                    </div>
                ))}
            </div>
        </section>

        <Footer/>
    </div>
    );
};

export default Index;