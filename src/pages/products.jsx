import React from "react";
import { useState } from "react";   
import Navbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsBanner from '../assets/IMAGES/PRODUCTS/Products-Banner.jpg';
import Footer from "../components/footer"
import { Form } from "react-bootstrap";

const Products = () => {
    const cards = [
        {
          title: "SPECIALIZED VEHICALS",
          desc: "Unleash Unparalleled Protection And Power With Our State-Of-The-Art B6 Level Armored Vehicals .",
          img: "https://images.squarespace-cdn.com/content/v1/5f6f5a30a49b5d4c23bee3fe/ab198a33-1032-4e38-a300-3de3be395787/overhead-front-angled-dark.png?format=1500w",
        },
        {
          title: "PROTECTIVE GEARS",
          desc: "Stay Protected With Our Top-Of-The-Line Armored Vests And Helmets, Superior Comfort For Ultimate Luxury .",
          img: "https://www.aa-store.at/images/cached/625EE5A2489D5/products/27040/65758/800x800/pts-mtek-flux-helmet-tan.jpg",
        },
        {
          title: "ARMOURY",
          desc: "Discover Top-Tier Precision With Our Premium Selection Of Firearms At Armoury.",
          img: "https://i.pinimg.com/564x/09/4f/2f/094f2ff1d0be52d7c4cd0b341f0c8915.jpg",
        },
        {
          title: "OPTICS",
          desc: "Dominate The Field With Our State-Of-The-Art Military Optics, Engineered For Durability In The Toughest Conditions.",
          img: "https://i.pinimg.com/564x/93/5f/52/935f52fde0180d61a5698b880133a197.jpg",
        },
        {
          title: "GUIDES & BOOKS",
          desc: "Let The Books Be Your Guide To New Worlds , Unlocking The Boundless Realms Of Knowledge",
          img: "https://i.pinimg.com/736x/20/80/dd/2080ddd565c3228750a349741760cf7c.jpg",
        },
        {
          title: "ACCESSORIES",
          desc: "Discover The Ultimate In Stealth And Concealment With Our Premium Camouflage Materials",
          img: "https://i.redd.it/rwk6zckyj1v71.jpg",
        },
        {
          title: "UNMANNED VEHICALS",
          desc: "Experience The Future Of Mobility With Our Cutting-Edge Unmanned Vehicles !",
          img: "https://i.pinimg.com/564x/ac/54/e9/ac54e9f9e65b83b8dbdf17c0afd46f68.jpg",
        },
      ];
      
return (  
        
    <div className="bg-black">

        <div >
            <Navbar />
        </div>

        <div className="relative h-[15vh] sm:h-[25vh] md:h-[35vh] lg:h-[45vh] my-5 font-[Quantico] overflow-hidden">
            <div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-75 blur-sm"
                style={{ backgroundImage: `url(${ProductsBanner})` }} />
            <div className="relative h-full w-full flex items-center justify-center text-3xl text-white">
                PRODUCTS
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => (
                <div
                key={i}
                className={`group relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-center bg-cover
                    ${i === cards.length - 1 ? "lg:col-span-1 lg:col-start-2" : ""}`}
                style={{ backgroundImage: `url(${card.img})` }}
                >   
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10 h-full p-6 flex flex-col justify-end text-white">
                    <h3 className="text-2xl font-semibold">{card.title}</h3>
                    <p className="mt-2 text-base opacity-90">{card.desc}</p>

                    <button
                    className="
                        mt-6 px-6 py-2 border border-white rounded-md text-base
                        opacity-0 translate-y-4
                        group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300
                    "
                    >
                    Read More
                    </button>
                </div>
                </div>
            ))}
        </div>



                    
        <div>
            <Footer/>   
        </div>
            
    </div>

    )};
    
    export default Products;