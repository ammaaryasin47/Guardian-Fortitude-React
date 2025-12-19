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

const [value, setValue] = useState("");

const Services = () => {
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

        <div className="text-white font-medium py-4">
            <h1 className="text-center text-2xl">WE PROVIDE</h1>
            <div className="mx-4 text-xl">
                <div className="flex mx-4 items-center my-4"  onClick={() => setPersonalProtection(!PersonalProtection)}>
                    <div className="bg-gray-200 p-[5px] inline-block rounded-md">
                        <img src={ServiceIcons('./Personal Protection.png')} alt="Personal Protection" className="h-10"/>
                    </div>
                    <h1 className="px-4">PERSONAL PROTECTION</h1>
                    <i className={`fa-solid fa-angle-down transition-transform duration-300 ${ PersonalProtection ? "rotate-180" : ""}`}></i>
                </div>
                {PersonalProtection && (
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                        Personal Protection Plays Paramount Priority Providing Peaceful Perimeter
                        Protection, Preventing Potential Perils. Guardian Fortitude Guarantees
                        Genuine, Groundbreaking Guarding, Granting Guaranteed Safety.
                    </p>
                    <img src="https://kadavy.net/wp-content/uploads/2018/10/security-3028679_1920-350x233.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    Asset Protection Represents A Critical Component Of Our Comprehensive Security Services. 
                    By Safeguarding Physical, Digital, And Intellectual Resources, We Ensure That Your Valuables Remain Secure From Threats Such As Theft, 
                    Vandalism, And Unauthorized Access. Our Expertise In Risk Assessment, Advanced Surveillance Systems, And Highly Trained Security Personnel 
                    Guarantees That Every Asset Is Protected Around The Clock. Whether You Require On-Site Security, Remote Monitoring, Or Customized Protective Solutions, Guardian Fortitude Delivers Peace Of Mind Through Reliable And Strategic Asset Protection Services
                    </p>
                    <img src="https://i.pinimg.com/564x/0d/e7/02/0de702b4538fa91a9761d5089af29b77.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    We Provide Premium Surveillance & Monitoring Services Designed To Ensure The Safety And Security Of Your Business Or Property Around The Clock. Our Advanced Technologies And Highly Trained Professionals Constantly Monitor Your Premises, Detecting Any Suspicious Activities In Real-Time To Prevent Potential Threats Before They Escalate.
                    </p>
                    <img src="https://i.pinimg.com/564x/08/89/a5/0889a50bafd5318798346ddd9cc2da0f.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    Our Team Of Highly Trained Security Professionals Delivers Round-The-Clock Surveillance, Threat Assessment, And Rapid Response To Potential Risks. With Cutting-Edge Technology And Proactive Monitoring, We Deter Unauthorized Access, Vandalism, And Theft, Tailoring Solutions To Your Specific Needs. Whether It's Commercial, Industrial, Or Residential Sites, Guardian Fortitude Provides Unmatched Reliability, Expertise, And Peace Of Mind.
                    </p>
                    <img src="https://i.pinimg.com/564x/63/99/ac/6399ac6601f5e28a38b0f4dce553fbce.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    We Offer Comprehensive Training & Consultation Services Tailored To Equip Your Team With The Necessary Skills And Knowledge To Excel In Security Management. Our Expert Trainers Provide Hands-On Training In Surveillance, Risk Assessment, Crisis Management, And Threat Mitigation, Ensuring Your Personnel Are Prepared For Real-World Scenarios. Additionally, Our Consultation Services Are Designed To Analyze Your Current Security Systems, Identify Vulnerabilities, And Recommend Strategic Enhancements.
                    </p>
                    <img src="https://i.pinimg.com/564x/d6/2a/f1/d62af148a35217796286df8307784acd.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    Emergency Extraction Services Provided By Guardian Fortitude Ensure Rapid And Safe Evacuations In Critical Situations. Our Highly Trained Professionals Are Equipped With Advanced Skills And Technology To Respond Effectively To Emergencies. Whether It's A Natural Disaster, Civil Unrest, Or Any Life-Threatening Scenario, We Prioritize The Safety Of Our Clients And Their Assets.
                    </p>
                    <img src="https://media.defense.gov/2025/May/13/2003708835/-1/-1/0/250404-N-BC658-2243.JPG" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    Introducing Our Elite Special Assault Team, A Highly Trained Group Of Professionals Committed To Ensuring The Safety And Security Of Our Clients. With Extensive Experience In High-Risk Situations, Our Team Utilizes Advanced Tactics And Cutting-Edge Technology To Neutralize Threats Effectively. At Guardian Fortitude, We Prioritize Your Protection, Offering Tailored Security Solutions That Address Your Unique Needs.
                    </p>
                    <img src="https://media.defense.gov/2025/May/13/2003708835/-1/-1/0/250404-N-BC658-2243.JPG" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    We Understand That Effective Emergency Crisis Management Is Crucial For Protecting Lives And Assets. Our Expert Team Is Dedicated To Providing Comprehensive Solutions Tailored To Meet The Unique Needs Of Each Client. We Specialize In Risk Assessment, Response Planning, And On-Site Support To Ensure Swift And Effective Action During Emergencies.
                    </p>
                    <img src="https://i.pinimg.com/564x/6c/b1/37/6cb137650eb8d155cd5419655211c473.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    We Understand That Cyber Security Is Vital In Protecting Your Digital Assets And Information. Our Comprehensive Services Offer Advanced Solutions To Safeguard Your Organization From Cyber Threats And Data Breaches. With A Team Of Experts Dedicated To Monitoring, Assessing, And Mitigating Risks, We Ensure Your Systems Remain Secure And Resilient Against Evolving Threats.
                    </p>
                    <img src="https://i.pinimg.com/736x/78/97/4a/78974a9f8c088587bd9a040717309601.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
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
                <div className="text-lg ml-5 py-3 flex justify-center rounded-md">
                    <p className="flex items-center w-50">
                    We Understand The Unique Role Private Detectives Play In Today's Complex World. They Are Skilled Professionals, Expertly Trained To Uncover Information, Investigate Cases, And Ensure Client Safety. With A Keen Eye For Detail And An Unwavering Commitment To Integrity, Our Private Detectives Utilize Cutting-Edge Technology And Proven Techniques To Deliver Results. Whether It's Conducting Background Checks, Surveillance, Or Gathering Evidence, Their Expertise Is Indispensable.
                    </p>
                    <img src="https://i.pinimg.com/564x/41/80/ca/4180cae6291514976108b5011ab85e32.jpg" className="h-[30vh] border-2 border-white rounded-xl p-1"/>
                </div>)}
            </div>
        </div>

        <div className="text-center text-2xl my-4 text-white">
            <h1>USER INFORMATION</h1>

            <Form className="p-4 space-y-4 bg-black my-4">
                <div className="flex justify-center gap-4">
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

                <div className="flex justify-center gap-4">
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

        <div>
            <h1>CHOOSE YOUR SERVICE</h1>

            <div>
                <input type="radio" name="PERSONAL_PROTECTION" value="PERSONAL_PROTECTION" checked={value === "PERSONAL_PROTECTION"} onChange={(e) => setValue(e.target.value)} className="accent-[#800000]" />
            </div>
        </div>
                    
        <div>
            <Footer/>
        </div>
            
    </div>

    )
    };
    
    export default Services;
    