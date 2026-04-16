import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

// --- ASSET IMPORTS ---
import Logo from "../assets/Logo.png";
import AboutBanner from '../assets/IMAGES/ABOUT US/About-Banner.jpeg';

const About = () => {
    return (
        <div className="bg-black overflow-x-hidden font-[Quantico]">
            <Navbar />

            {/* --- HERO BANNER --- */}
            <div
                className="relative h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${AboutBanner})` }}>
                <div className="h-full w-full flex items-center justify-center bg-black/50">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-[0.4em] uppercase">About</h1>
                </div>
            </div>

            {/* --- MISSION STATEMENT --- */}
            <div className="text-white text-lg md:text-xl text-center max-w-6xl mx-auto px-6 py-20 leading-loose">
                <span className="text-7xl hover:text-[#800000] text-[#800000] font-black float-left mr-3 mt-[-10px] select-none">A</span>
                t Guardian Fortitude Security Services, We Pride Ourselves On Our Unwavering Dedication To Safeguarding What Matters Most To You. 
                Our Mission Is To Provide Unparalleled Security Solutions That Ensure The Safety And Peace Of Mind Of Our Clients. 
                With A Team Of Highly Trained And Experienced Security Professionals, We Employ The Latest In Surveillance Technology, Alarm Systems, And Emergency Response Protocols To Offer Comprehensive Protection. 
                We Understand That Each Client Has Unique Security Needs, Which Is Why We Tailor Our Services To Provide Personalized And Effective Security Strategies. Our Core Values Of Integrity, Vigilance, 
                And Reliability Guide Us In Every Aspect Of Our Operations.
            </div>

            {/* --- GOALS SECTION --- */}
            <div className="relative text-black bg-white flex flex-col md:flex-row min-h-[60vh] justify-around items-center py-16 px-4">
                <div className="text-4xl border-[#800000] border-b-4 pb-2 text-center mb-10 md:mb-0 md:rotate-[270deg] font-black tracking-widest">
                    GOALS
                </div>

                <div className="px-6 md:px-12 text-center md:border-[#800000] md:border-r-2 flex-1">
                    <h2 className="font-black uppercase text-2xl mb-4 text-[#800000]">Asset Protection</h2>
                    <p className="text-md leading-relaxed">Our Primary Goal As A Security Company Is To Safeguard The Valuable Assets Of Our Clients. This Encompasses Both Physical Assets and Intangible Data.</p>
                </div>

                <div className="px-6 md:px-12 text-center md:border-[#800000] md:border-r-2 flex-1">
                    <h2 className="font-black uppercase text-2xl mb-4 text-[#800000]">Risk Mitigation</h2>
                    <p className="text-md leading-relaxed">We Aim To Identify, Assess, And Minimize Risks. This Involves Conducting Thorough Risk Assessments and Implementing Effective Security Measures.</p>
                </div>

                <div className="px-6 md:px-12 text-center flex-1">
                    <h2 className="font-black uppercase text-2xl mb-4 text-[#800000]">Client Safety</h2>
                    <p className="text-md leading-relaxed">Ultimately, We Strive To Ensure Peace Of Mind By Providing Surveillance Systems, Alarm Monitoring, And Emergency Response Services.</p>
                </div>
            </div>

            {/* --- HISTORIC TIMELINE SECTION --- */}
            <div className="relative bg-black text-white px-6 md:px-24 py-32">
                
                {/* Timeline Heading */}
                <div className="flex justify-center items-center mb-32">
                    <h2 className="text-3xl tracking-[0.3em] font-black uppercase">Historic</h2>
                    <div className="h-8 w-[2px] bg-[#800000] mx-6"></div>
                    <h2 className="text-3xl tracking-[0.3em] font-black uppercase">Timeline</h2>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* CENTER LINE */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#800000] via-zinc-800 to-[#800000] -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-32">
                        
                        {/* 1. 2012-13: LEFT */}
                        <div className="relative flex flex-col md:flex-row md:justify-end md:pr-24 w-full md:w-1/2 ml-auto md:ml-0">
                            <div className="max-w-md text-left md:text-right group p-6 bg-[#0a0a0a] md:bg-transparent ">
                                <h3 className="text-xl font-black uppercase text-white group-hover:text-[#800000] transition-colors">The Foundation</h3>
                                <p className="text-[#800000] font-mono text-sm mb-3 font-bold tracking-tighter">2012–13</p>
                                <p className="text-gray-400 text-sm italic">EK_VILLAIN Founded Guardian Fortitude Security Services With A Vision To Provide Elite Security Solutions, Partnering With H3CT0R.</p>
                            </div>
                            <div className="hidden md:flex absolute -right-[20px] top-2 z-20 w-10 h-10 rounded-full bg-black border-2 border-[#800000] items-center justify-center shadow-[0_0_15px_rgba(128,0,0,0.5)] translate-x-1/2 overflow-hidden p-1">
                                <img src={Logo} alt="GF" className="w-full h-full object-contain" />
                            </div>
                        </div>

                        {/* 2. 2014-15: RIGHT */}
                        <div className="relative flex flex-col md:flex-row md:justify-start md:pl-24 w-full md:w-1/2 md:ml-auto">
                            <div className="max-w-md text-left group p-6 bg-[#0a0a0a] md:bg-transparent ">
                                <h3 className="text-xl font-black uppercase text-white group-hover:text-[#800000] transition-colors">Expanding Presence</h3>
                                <p className="text-[#800000] font-mono text-sm mb-3 font-bold tracking-tighter">2014–15</p>
                                <p className="text-gray-400 text-sm italic">SHAIKH AMMAAR Was Introduced As The Brand Ambassador, Enhancing Public Awareness And Credibility.</p>
                            </div>
                            <div className="hidden md:flex absolute -left-[20px] top-2 z-20 w-10 h-10 rounded-full bg-black border-2 border-[#800000] items-center justify-center -translate-x-1/2 overflow-hidden p-1">
                                <img src={Logo} alt="GF" className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>

                        {/* 3. 2016-17: LEFT */}
                        <div className="relative flex flex-col md:flex-row md:justify-end md:pr-24 w-full md:w-1/2 ml-auto md:ml-0">
                            <div className="max-w-md text-left md:text-right group p-6 bg-[#0a0a0a] md:bg-transparent ">
                                <h3 className="text-xl font-black uppercase text-white group-hover:text-[#800000] transition-colors">Tech Integration</h3>
                                <p className="text-[#800000] font-mono text-sm mb-3 font-bold tracking-tighter">2016–17</p>
                                <p className="text-gray-400 text-sm italic">H3CT0R Led The Integration Of Advanced Security Technologies, Positioning The Company As A Leader In Cybersecurity.</p>
                            </div>
                            <div className="hidden md:flex absolute -right-[20px] top-2 z-20 w-10 h-10 rounded-full bg-black border-2 border-[#800000] items-center justify-center translate-x-1/2 overflow-hidden p-1">
                                <img src={Logo} alt="GF" className="w-full h-full object-contain" />
                            </div>
                        </div>

                        {/* 4. 2024-Present: RIGHT */}
                        <div className="relative flex flex-col md:flex-row md:justify-start md:pl-24 w-full md:w-1/2 md:ml-auto">
                            <div className="max-w-md text-left group p-6 bg-[#0a0a0a] md:bg-transparent ">
                                <h3 className="text-xl font-black uppercase text-white group-hover:text-green-400 transition-colors">Sustaining Growth</h3>
                                <p className="text-[#800000] font-mono text-sm mb-3 font-bold tracking-tighter">2024–PRESENT</p>
                                <p className="text-gray-400 text-sm italic">Maintained A Strong Focus On Innovation, Ensuring The Company Remains At The Forefront Of The Security Industry.</p>
                            </div>
                            <div className="hidden md:flex absolute -left-[20px] top-2 z-20 w-10 h-10 rounded-full bg-black border-2 border-[#800000] items-center justify-center -translate-x-1/2 overflow-hidden p-1 animate-pulse">
                                <img src={Logo} alt="GF" className="w-full h-full object-contain shadow-[0_0_10px_#16a34a]" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;