import React from "react";
import { useState } from "react";   
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ServicesBanner from '../assets/IMAGES/SERVICES/Service-Banner02.jpg';
import Footer from "../components/footer"
import { Form } from "react-bootstrap";

const ServiceIcons = require.context(
    
    '../assets/IMAGES/SERVICES/Icons',
    false,
    /\.(png|jpg|svg)$/
  )



const Services = () => {
    const [services, setServices] = useState([]);
    const handleChange = (service) => {
        setServices((prev) =>
          prev.includes(service)
            ? prev.filter((s) => s !== service)
            : [...prev, service]
        );
      };
      
    const [value, setValue] = useState("");
    const [PersonalProtection, setPersonalProtection] = useState(false);
    const [AssetProtection, setAssetProtection] = useState(false);
    const [SurvellianceMonitoring , setSurvellianceMonitoring] = useState(false);
    const [SiteSecurity , setSiteSecurity] = useState(false);
    const [TrainingConsultation , setTrainingConsultation] = useState(false);
    const [EmergencyExtraction , setEmergencyExtraction] = useState(false);
    const [AssaultTeam , setAssaultTeam] = useState(false);
    const [CrisisManagement , setCrisisManagement] = useState(false);
    const [CyberSecurity , setCyberSecurity] = useState(false);
    const [PrivateDetectives , setPrivateDetectives] = useState(false);

    return (  
        
    <div className="bg-black">
        <div >
            <Navbar />
        </div>

        <div
        className="relative h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] bg-center mt-5 bg-cover bg-no-repeat font-[Quantico]"
        style={{ backgroundImage: `url(${ServicesBanner})` }}>
            <div className="h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] text-3xl relative text-white w-full flex items-center justify-center">SERVICES</div>
        </div>

        <div className="text-white font-medium py-4 w-screen">
            <h1 className="text-center text-2xl border-b-2 w-fit flex items-center justify-center border-[#800000]">WE PROVIDE</h1>
            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4"  onClick={() => setPersonalProtection(!PersonalProtection)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Personal Protection.png')} alt="Personal Protection" className="h-10"/>
                    </div>
                    <h1 className="px-4">PERSONAL PROTECTION</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ PersonalProtection ? "rotate-180" : ""}`}></i>
                </div>
                {PersonalProtection && (
                <div className="flex text-lg py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                        Personal Protection Plays Paramount Priority Providing Peaceful Perimeter
                        Protection, Preventing Potential Perils. Guardian Fortitude Guarantees
                        Genuine, Groundbreaking Guarding, Granting Guaranteed Safety.
                    </p>
                    <img src="https://kadavy.net/wp-content/uploads/2018/10/security-3028679_1920-350x233.jpg" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[10vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>
                
            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4"onClick={() => setAssetProtection(!AssetProtection)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Asset Protection.png')} alt="Asset Protection" className="h-10"/>
                    </div>
                    <h1 className="px-4">ASSET PROTECTION</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ AssetProtection ? "rotate-180" : ""}`}></i>
                </div>
                {AssetProtection && (
                <div className="flex text-lg py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    Asset Protection Represents A Critical Component Of Our Comprehensive Security Services. 
                    By Safeguarding Physical, Digital, And Intellectual Resources, We Ensure That Your Valuables Remain Secure From Threats Such As Theft, 
                    Vandalism, And Unauthorized Access. Our Expertise In Risk Assessment, Advanced Surveillance Systems, And Highly Trained Security Personnel 
                    Guarantees That Every Asset Is Protected Around The Clock. Whether You Require On-Site Security, Remote Monitoring, Or Customized Protective Solutions, Guardian Fortitude Delivers Peace Of Mind Through Reliable And Strategic Asset Protection Services
                    </p>
                    <img src="https://i.pinimg.com/564x/0d/e7/02/0de702b4538fa91a9761d5089af29b77.jpg" className="w-[20vh] sm:w-[30vh] md:w-[40vh] lg:w-[50vh] h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setSurvellianceMonitoring(!SurvellianceMonitoring)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Survelliance&Monitoring.png')} alt="SurvellianceMonitoring" className="h-10 transform -scale-x-100"/>
                    </div>
                    <h1 className="px-4">SURVELLIANCE & MONITORING</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ SurvellianceMonitoring ? "rotate-180" : ""}`}></i>
                </div>
                {SurvellianceMonitoring && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    We Provide Premium Surveillance & Monitoring Services Designed To Ensure The Safety And Security Of Your Business Or Property Around The Clock. Our Advanced Technologies And Highly Trained Professionals Constantly Monitor Your Premises, Detecting Any Suspicious Activities In Real-Time To Prevent Potential Threats Before They Escalate.
                    </p>
                    <img src="https://i.pinimg.com/564x/08/89/a5/0889a50bafd5318798346ddd9cc2da0f.jpg" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setSiteSecurity(!SiteSecurity)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./SiteSecurity.png')} alt="SiteSecurity" className="h-10"/>
                    </div>
                    <h1 className="px-4">SITE SECURITY</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ SiteSecurity ? "rotate-180" : ""}`}></i>
                </div>
                {SiteSecurity && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    Our Team Of Highly Trained Security Professionals Delivers Round-The-Clock Surveillance, Threat Assessment, And Rapid Response To Potential Risks. With Cutting-Edge Technology And Proactive Monitoring, We Deter Unauthorized Access, Vandalism, And Theft, Tailoring Solutions To Your Specific Needs. Whether It's Commercial, Industrial, Or Residential Sites, Guardian Fortitude Provides Unmatched Reliability, Expertise, And Peace Of Mind.
                    </p>
                    <img src="https://i.pinimg.com/564x/63/99/ac/6399ac6601f5e28a38b0f4dce553fbce.jpg" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setTrainingConsultation(!TrainingConsultation)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Training&Consultation.png')} alt="TrainingConsultation" className="h-10"/>
                    </div>
                    <h1 className="px-4">TRAINING & CONSTULTATION</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ TrainingConsultation ? "rotate-180" : ""}`}></i>
                </div>
                {TrainingConsultation && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    We Offer Comprehensive Training & Consultation Services Tailored To Equip Your Team With The Necessary Skills And Knowledge To Excel In Security Management. Our Expert Trainers Provide Hands-On Training In Surveillance, Risk Assessment, Crisis Management, And Threat Mitigation, Ensuring Your Personnel Are Prepared For Real-World Scenarios. Additionally, Our Consultation Services Are Designed To Analyze Your Current Security Systems, Identify Vulnerabilities, And Recommend Strategic Enhancements.
                    </p>
                    <img src="https://i.pinimg.com/564x/d6/2a/f1/d62af148a35217796286df8307784acd.jpg" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[10vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setEmergencyExtraction(!EmergencyExtraction)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Emergency Extraction.png')} alt="EmergencyExtraction" className="h-10"/>
                    </div>
                    <h1 className="px-4">EMERGENCY EXTRACTION</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ EmergencyExtraction ? "rotate-180" : ""}`}></i>
                </div>
                {EmergencyExtraction && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    Emergency Extraction Services Provided By Guardian Fortitude Ensure Rapid And Safe Evacuations In Critical Situations. Our Highly Trained Professionals Are Equipped With Advanced Skills And Technology To Respond Effectively To Emergencies. Whether It's A Natural Disaster, Civil Unrest, Or Any Life-Threatening Scenario, We Prioritize The Safety Of Our Clients And Their Assets.
                    </p>
                    <img src="https://media.defense.gov/2025/May/13/2003708835/-1/-1/0/250404-N-BC658-2243.JPG" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setAssaultTeam(!AssaultTeam)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./AssaultTeam.png')} alt="AssaultTeam" className="h-10 transform -scale-x-100"/>
                    </div>
                    <h1 className="px-4">SPECIAL ASSAULT TEAM</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ AssaultTeam ? "rotate-180" : ""}`}></i>
                </div>
                {AssaultTeam && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    Introducing Our Elite Special Assault Team, A Highly Trained Group Of Professionals Committed To Ensuring The Safety And Security Of Our Clients. With Extensive Experience In High-Risk Situations, Our Team Utilizes Advanced Tactics And Cutting-Edge Technology To Neutralize Threats Effectively. At Guardian Fortitude, We Prioritize Your Protection, Offering Tailored Security Solutions That Address Your Unique Needs.
                    </p>
                    <img src="https://i.insider.com/5f8f64bbb0526700185cc7fe?width=800&format=jpeg&auto=webp" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setCrisisManagement(!CrisisManagement)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Crisis Management.png')} alt="CrisisManagement" className="h-10"/>
                    </div>
                    <h1 className="px-4">EMERGENCY CRISIS MANAGEMENT</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ CrisisManagement ? "rotate-180" : ""}`}></i>
                </div>
                {CrisisManagement && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    We Understand That Effective Emergency Crisis Management Is Crucial For Protecting Lives And Assets. Our Expert Team Is Dedicated To Providing Comprehensive Solutions Tailored To Meet The Unique Needs Of Each Client. We Specialize In Risk Assessment, Response Planning, And On-Site Support To Ensure Swift And Effective Action During Emergencies.
                    </p>
                    <img src="https://i.pinimg.com/564x/6c/b1/37/6cb137650eb8d155cd5419655211c473.jpg" className="w-[25vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[15vh] sm:h-[10vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setCyberSecurity(!CyberSecurity)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Cyber Security.png')} alt="CyberSecurity" className="h-10"/>
                    </div>
                    <h1 className="px-4">CYBER SECURITY</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ CyberSecurity ? "rotate-180" : ""}`}></i>
                </div>
                {CyberSecurity && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    We Understand That Cyber Security Is Vital In Protecting Your Digital Assets And Information. Our Comprehensive Services Offer Advanced Solutions To Safeguard Your Organization From Cyber Threats And Data Breaches. With A Team Of Experts Dedicated To Monitoring, Assessing, And Mitigating Risks, We Ensure Your Systems Remain Secure And Resilient Against Evolving Threats.
                    </p>
                    <img src="https://i.pinimg.com/736x/78/97/4a/78974a9f8c088587bd9a040717309601.jpg" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>

            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4" onClick={() => setPrivateDetectives(!PrivateDetectives)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Private Detective.png')} alt="PrivateDetectives" className="h-10"/>
                    </div>
                    <h1 className="px-4">PRIVATE DETECTIVES</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ PrivateDetectives ? "rotate-180" : ""}`}></i>
                </div>
                {PrivateDetectives && (
                <div className="flex text-lg ml-5 py-3 flex-col sm:flex-row md:flex-row lg:flex-row justify-center rounded-md ">
                    <p className="flex items-center w-2/3 text-xs sm:text-sm md:text-lg lg:text-xl">
                    We Understand The Unique Role Private Detectives Play In Today's Complex World. They Are Skilled Professionals, Expertly Trained To Uncover Information, Investigate Cases, And Ensure Client Safety. With A Keen Eye For Detail And An Unwavering Commitment To Integrity, Our Private Detectives Utilize Cutting-Edge Technology And Proven Techniques To Deliver Results. Whether It's Conducting Background Checks, Surveillance, Or Gathering Evidence, Their Expertise Is Indispensable.
                    </p>
                    <img src="https://i.pinimg.com/564x/41/80/ca/4180cae6291514976108b5011ab85e32.jpg" className="w-[20vh] sm:w-[20vh] md:w-[30vh] lg:w-[40vh] h-[15vh] sm:h-[15vh] md:h-[20vh] lg:h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>
        </div>

        <div className="text-center text-2xl my-4 text-white">
            <h1>USER INFORMATION</h1>

            <Form className="p-4 space-y-4 bg-black my-4">
                <div className="flex flex-col items-center gap-4 sm:flex-col md:flex-col lg:flex-row lg:justify-center">
                <Form.Control
                    type="text"
                    placeholder="NAME"
                    className=" w-1/4 h-10 border border-white bg-black text-white transition-all duration-300 
                    ease-in-out focus:h-[3rem] focus:ring-0 focus:border-[#800000] focus:bg-black"
                />

                <Form.Control
                    type="text"
                    placeholder="ZIP"
                    className=" w-1/4 h-10 border border-white bg-black text-white transition-all duration-300 
                    ease-in-out focus:h-[3rem] focus:ring-0 focus:border-[#800000] focus:bg-black"
                />
                </div>

                <div className="flex flex-col items-center gap-4 sm:flex-col md:flex-col lg:flex-row lg:justify-center">
                <Form.Control
                    type="text"
                    placeholder="CONTACT"
                    className=" w-1/4 h-10 border border-white bg-black text-white transition-all duration-300 
                    ease-in-out focus:h-[3rem] focus:ring-0 focus:border-[#800000] focus:bg-black"
                />

                <Form.Control
                    type="text"
                    placeholder="LOCATION"
                    className=" w-1/4 h-10 border border-white bg-black text-white transition-all duration-300 
                    ease-in-out focus:h-[3rem] focus:ring-0 focus:border-[#800000] focus:bg-black"
                />
                </div>
            </Form>
        </div>

        <div className="text-center my-2">
            <h1 className="text-2xl text-white py-4">CHOOSE YOUR SERVICE</h1>

        <div className=" flex flex-col md:flex-row gap-12 justify-center">
            <div className="flex flex-col text-white space-y-4 mx-auto w-fit">

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="PERSONAL_PROTECTION" checked={services.includes("PERSONAL_PROTECTION")} onChange={() => handleChange("PERSONAL_PROTECTION")} className="accent-[#800000] scale-125"/>
                PERSONAL PROTECTION
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="ASSET_PROTECTION" checked={services.includes("ASSET_PROTECTION")} onChange={() => handleChange("ASSET_PROTECTION")} className="accent-[#800000] scale-125"/>
                ASSET PROTECTION
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="SURVELLIANCE&MONITORING" checked={services.includes("SURVELLIANCE&MONITORING")} onChange={() => handleChange("SURVELLIANCE&MONITORING")} className="accent-[#800000] scale-125"/>
                SURVELLIANCE & MONITORING
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="SITE_SECURITY" checked={services.includes("SITE_SECURITY")} onChange={() => handleChange("SITE_SECURITY")} className="accent-[#800000] scale-125"/>
                SITE SECURITY
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="TRAINING&CONSULTATION" checked={services.includes("TRAINING&CONSULTATION")} onChange={() => handleChange("TRAINING&CONSULTATION")} className="accent-[#800000] scale-125"/>
                TRAINING & CONSULTATION
                </label>

            </div>

            <div className="flex flex-col  text-white space-y-4 mx-auto w-fit">

            <label className="flex items-center gap-3 cursor-pointer ">
                <input type="checkbox" value="EMERGENCYEXTRACTION" checked={services.includes("EMERGENCYEXTRACTION")} onChange={() => handleChange("EMERGENCYEXTRACTION")} className="accent-[#800000] scale-125"/>
                EMERGENCY EXTRACTION
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="ASSAULTTEAM" checked={services.includes("ASSAULTTEAM")} onChange={() => handleChange("ASSAULTTEAM")} className="accent-[#800000] scale-125"/>
                SPECIAL ASSAULT TEAM
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="CRISISMANAGEMENT" checked={services.includes("CRISISMANAGEMENT")} onChange={() => handleChange("CRISISMANAGEMENT")} className="accent-[#800000] scale-125"/>
                EMERGENCY CRISIS MANAGEMENT
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="CYBERSECURITY" checked={services.includes("CYBERSECURITY")} onChange={() => handleChange("CYBERSECURITY")} className="accent-[#800000] scale-125"/>
                CYBER SECURITY
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" value="DETECTIVES" checked={services.includes("DETECTIVES")} onChange={() => handleChange("DETECTIVES")} className="accent-[#800000] scale-125"/>
                PRIVATE DETECTIVES
                </label>

            </div>
        </div>

            <button type="submit" className=" px-3 py-2 my-4 rounded-lg bg-white text-black font-semibold transition-colors duration-200 hover:bg-gray-800 focus:outline-none focus:bg-[#800000] focus:ring-2 focus:ring-[#800000] focus:ring-offset-2 focus:ring-offset-black">
                    SUBMIT
            </button>

        </div>
                    
        <div>
            <Footer/>
        </div>
            
    </div>

    )
    };
    
    export default Services;
    