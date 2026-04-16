import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { ShoppingCart, ShieldCheck, X, Trash2, ChevronDown, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {useCart} from "../../context/CartContext";



const AccessoriesDepartment = () => {
  const { cart, addToCart, setIsCartOpen } = useCart();

  // --- DATA STRUCTURE FOR ALL PRODUCTS ---
const accessoryData = {
  gloves: {
    title: "TACTICAL GLOVES",
    items: [
      { id: "Acc-Glo-IroncladExo", title: "IRONCLAD EXO", price: "$149.99", desc: "Synthetic Suede Palm, TPR Impact Protection with Trigger Finger Relief", img: "https://deltatac.shop/cdn/shop/files/IroncladEXO_OperatorImpactGloves.jpg?v=1701759496&width=713" },
      { id: "Acc-Glo-MPact3", title: "M-PACT 3", price: "$149.99", desc: "Embossed Patterning For Added Grip Where You Need It Most", img: "https://deltatac.shop/cdn/shop/files/TacticalGlovesfull_5.jpg?v=1700479371&width=713" },
      { id: "Acc-Glo-Ironclad", title: "IRONCLAD", price: "$149.99", desc: "Touchscreen Compatible Thumb & Index Finger with Hook & Loop Closure", img: "https://deltatac.shop/cdn/shop/files/3053_source_1713201232.jpg?v=1713955444&width=713" },
      { id: "Acc-Glo-Fangier", title: "FANGIER", price: "$149.99", desc: "Excellent Wear Resistance, Skid Resistance, and Strong Impact Resistance", img: "https://www.gosupps.com/media/catalog/product/cache/25/small_image/1500x1650/9df78eab33525d08d6e5fb8d27136e95/6/1/61oZ6we6PZL.jpg" },
      { id: "Acc-Glo-WolfTac", title: "WOLF TACTICAL", price: "$149.99", desc: "Thermoplastic Rubber Knuckle And Finger Guards Absorb Impacts", img: "https://m.media-amazon.com/images/I/91okdw4xguL.jpg" },
      { id: "Acc-Glo-ExoGreen", title: "IRONCLAD EXO OD-GREEN", price: "$149.99", desc: "TPR Impact Protection with Thumb Saddle Reinforcement", img: "https://deltatac.shop/cdn/shop/files/IroncladEXO_OperatorImpactGloves_a77a3b14-88d5-4f89-838d-4b1dbb10f103.jpg?v=1701760298&width=713" },
      { id: "Acc-Glo-Valken", title: "VALKEN", price: "$149.99", desc: "Reinforced High Wear Contact Points and Breathable Air Mesh Fabric", img: "https://cdn.shoplightspeed.com/shops/616834/files/17726822/800x1024x2/valken-valken-airsoft-paintball-tactical-gloves-bl.jpg" },
      { id: "Acc-Glo-Pinty", title: "PINTY SCOPES", price: "$149.99", desc: "Versatile Half Finger Tactical Gloves For Maximum Dexterity", img: "https://pintydevices.com/cdn/shop/files/S23ecd498cafc467887f4d0b30e7763551.jpg?v=1696994640&width=1000" },
      { id: "Acc-Glo-AirsoftCore", title: "AIRSOFTCORE", price: "$149.99", desc: "Made Of Tough Sturdy Material To Stand Extreme Wear And Tear", img: "https://www.airsoftcore.com/wp-content/uploads/2022/09/reebow-tactical-military-airsoft-glove-1024x830.jpg" }
    ]
  },
  backpack: {
    title: "TACTICAL BACKPACK",
    items: [
      { id: "Acc-Bag-Oreunik", title: "OREUNIK", price: "$149.99", desc: "Perfect Backpack With Large Capacity And Light Weight", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgP6_GqQNxrinsFnXcQ_KpvRfuGdgDz3WWsstRJ7mYtj_luz9-ODsHPfOU4ShIB4XfEDUmqOumnm7eUxzAPJ_ceEBa8MDSePah-3G7VwzxjaOUcRO86BxD&usqp=CAE" },
      { id: "Acc-Bag-GStatic", title: "G-STATIC", price: "$149.99", desc: "Made Of Oxford Cloth, 35L Capacity, Black Color", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSG00sL7az6GiaBnCF7DkKo1aZQ-VAqx59V9a5RCFknLgzHPQZf_ujPJwCyjOZr0cvhx9-8lb0V5N_HnrqUBXTyTo5uy2OrOfjGhrAUstd81l9mCjbq7rFg&usqp=CAE" },
      { id: "Acc-Bag-Meanbuy", title: "MEANBUY", price: "$149.99", desc: "80L Oxford Cloth Durable, Water Resistant & Multiple Compartments", img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjQ0NzIxXC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" },
      { id: "Acc-Bag-FGear", title: "F-GEAR", price: "$149.99", desc: "120L Durable Backpack, Ergonomically Designed With Padded Straps", img: "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjQ0NzMwXC9HcmVlbl9uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMDAsImhlaWdodCI6MTAwMCwiZml0IjoiY29udGFpbiIsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19" },
      { id: "Acc-Bag-Wildcraft", title: "WILDCRAFT", price: "$149.99", desc: "30L Backpack With 15 Inch Laptop Compartment", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTErAGW7Rj-wVagA_uPOhKtwPR1yTkYlUzsr2CW_bIlx2d551oQYj462AfcT--z_iZF8qTv6RYLWJJox3RqZc7eLczT1MhEefAI0Fxn3lDjpicNge5miNSz&usqp=CAE" },
      { id: "Acc-Bag-CVLife", title: "CVLIFE", price: "$149.99", desc: "Additional Pouches And Velcro System, Breathable Cloth", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrOifiscek_hVcwoyBQmh-4ZzDZSrIFO8tvRQlldxKbzBUOuErud_a-rPDteNnDC84rYwqF6iDeli1xNKyKueJ3o1wgJEH_X-oebTMnmwyB8srbHXnDNod&usqp=CAE" },
      { id: "Acc-Bag-VanHeusen", title: "VAN HEUSEN", price: "$149.99", desc: "Black Solid Fashion Backpack, Padded Haul Loop", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsZR8GXG7DZNbJ6dqymSioceg1AZ_OpkKfb7a23bNflHwMwP3bxMmcvRpMIgXkC-9BL3-DzWN0RXW-BRb3EH7AIIwvXkVOZxPLUBTS3PHeWmnhspMfsKdq" },
      { id: "Acc-Bag-Modpac", title: "MODPAC", price: "$149.99", desc: "The Ultimate Dry Pack For Outdoor Enthusiasts", img: "https://www.reisemoto.com/cdn/shop/files/Carbonado_Modpac_5L_7411320041-1_1.png?v=1734434510&width=900" }
    ]
  },
  flashlights: {
    title: "TACTICAL FLASHLIGHTS",
    items: [
      { id: "Acc-Lgt-Horbac", title: "HORBAC", price: "$149.99", desc: "Intense Spotlight For Long Range Observation", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT8pDNKKQX3nI82gRNqNrHrWi_jpTYqAWvQq3AEc-wJ8951d1kjWu18Kc9Yl_nC7vrOXnjIRhMAVq5hQZWj_mrz1uD6HAD6gSupufbxMtxoFy6zUpInHvHF6A&usqp=CAE" },
      { id: "Acc-Lgt-Philips", title: "PHILIPS", price: "$149.99", desc: "Aluminium Body, Digital Display, Battery Indicator", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvxVHI75R3HKHB6rP7sjKSJ41OU1ZrGEzrJePuOfMiG-tAyoHXCJuaBrMY29E4EVaSMZN7O4pXE96PrJ3Z6n2UzfOBBZN90ty9Saz7Qr0Wc6oeMgGsxoRHlA&usqp=CAE" },
      { id: "Acc-Lgt-FenixGL06", title: "FENIX GL06", price: "$149.99", desc: "Compact mount light, 600 Lumens Output", img: "https://ledflashlights.in/cdn/shop/files/gl06notext_1_280x.jpg?v=1711533097" },
      { id: "Acc-Lgt-FenixGL19R", title: "FENIX GL19R", price: "$149.99", desc: "Ultra-high intensity 44,300 Candela", img: "https://ledflashlights.in/cdn/shop/files/01_5_280x.jpg?v=1730979535" },
      { id: "Acc-Lgt-FenixAER05", title: "FENIX AER 05", price: "$149.99", desc: "Dual Tactical Switch Panel, APF Circuits", img: "https://ledflashlights.in/cdn/shop/products/1_3_280x.jpg?v=1638948811" },
      { id: "Acc-Lgt-FenixTK16", title: "FENIX TK-16", price: "$149.99", desc: "Powerful Output of 3100 Lumens", img: "https://ledflashlights.in/cdn/shop/files/TK16Tropicalgreen-min_280x.jpg?v=1700032658" },
      { id: "Acc-Lgt-CVLife2000", title: "CVLIFE 2000", price: "$149.99", desc: "2000 Lumens, 300m Visibility Range", img: "https://www.cvlife.com/cdn/shop/files/cvlife-2000-lumens-tactical-flashlight-1-1.jpg?v=1697075550" },
      { id: "Acc-Lgt-TDT3000", title: "TDT 3000", price: "$149.99", desc: "IPX7 Waterproof, Aircraft-grade Aluminum", img: "https://m.media-amazon.com/images/I/61vecKzL+VL._AC_UF894,1000_QL80_.jpg" },
      { id: "Acc-Lgt-TLRacker", title: "TL-RACKER", price: "$149.99", desc: "1,000 Lumens beam, Ambidextrous Switch", img: "https://www.streamlight.com/images/default-source/product-large-images/tl-racker_01.jpg?sfvrsn=63debdf0_9" }
    ]
  },
  holster: {
    title: "HOLSTERS",
    items: [
      { id: "Acc-Hol-IncogX", title: "INCOG X", price: "$149.99", desc: "IWB Gray Concealment, Spotlight Observation", img: "https://safariland.com/cdn/shop/files/SAF_IncogX_IWB_Gray_001.jpg?crop=center&height=1024&v=1690915017&width=1024" },
      { id: "Acc-Hol-SmithWesson", title: "SMITH & WESSONS", price: "$149.99", desc: "Aluminum Body, Battery Indicator Display", img: "https://hiddenhybridholsters.com/cdn/shop/files/Shield-Single-Clip-BlkCF-YesClaw-Rt-Sm_c50d6cfc-0396-4972-b828-8b65ad9b58ab_1200x.png?v=1728488447" },
      { id: "Acc-Hol-Duratek", title: "DURATEK", price: "$149.99", desc: "Compact Mount Light, 600 Lumens Output", img: "https://www.galls.com/photos/styles/NP512_500_1.JPG" },
      { id: "Acc-Hol-IWB", title: "IWB", price: "$149.99", desc: "Reliability and Versatility with 44,300 Candela", img: "https://i.ebayimg.com/images/g/5aMAAOSw42JZJMXT/s-l400.jpg" },
      { id: "Acc-Hol-Priority1", title: "Priority1", price: "$149.99", desc: "Tactical Dual Switch Panel for Fast Operation", img: "https://cdn11.bigcommerce.com/s-i8x3epyu14/images/stencil/500x659/products/198/1462/DSC00612__85551.1713803223.jpg?c=2" },
      { id: "Acc-Hol-SideTuck", title: "SideTuck", price: "$149.99", desc: "Powerful Output of 3100 Lumens with single 21700", img: "https://cdn11.bigcommerce.com/s-f6h7auv/images/stencil/1024x1024/products/8028/125520/sidetuck-front__62197__48781.1693513255.jpg?c=4" }
    ]
  },
  paracord: {
    title: "PARA CORD",
    items: [
      { id: "Acc-Par-White", title: "ATWOOD 550 - WHITE", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://www.cyclaireshop.co.uk/image/cache/catalog/atwood-rope/ARM-S08-1000x1000.jpg" },
      { id: "Acc-Par-Olive", title: "ATWOOD 550 - OLIVE", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://pictures.armytukku.fi/0/1/original/49406.webp" },
      { id: "Acc-Par-Neon", title: "ATWOOD 550 - NEON GREEN", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://www.armyaction.gr/wp-content/uploads/2024/11/shoini-artani-Paracord-550-Neon-Green-30m-Atwood-Rope120241109152844.jpg" },
      { id: "Acc-Par-Yellow", title: "ATWOOD 550 - YELLOW", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://images.north40.com/images/1281920/HO_atwood_rope_various_550_paracord_100_1__1281920__.jpg?width=900&format=pjpg" },
      { id: "Acc-Par-Helikon", title: "ATWOOD 550 - HELIKON TEX", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tBGJOWreIw6pDqU5y2oYtVBfezLh1_JlXg&s" },
      { id: "Acc-Par-Black", title: "ATWOOD 550 - BLACK", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://www.cyclaireshop.co.uk/image/cache/catalog/atwood-rope/ARM-S01-1000x1000.jpg" },
      { id: "Acc-Par-Blue", title: "ATWOOD 550 - BLUE", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://atwoodrope.com/cdn/shop/products/550Navy.jpg" },
      { id: "Acc-Par-BrcOlive", title: "PARACORD BRACELET - OLIVE", price: "$149.99", desc: "Nylon 550 Solomon Weave Bracelet", img: "https://oliveplanet.in/cdn/shop/files/nylon_paracord_550_bracelet_solomon_weave_cobra_weave_olive_green_colour_1280x.jpg?v=1720439930" },
      { id: "Acc-Par-BrcBrown", title: "PARACORD BRACELET - BROWN", price: "$149.99", desc: "Nylon 550 Solomon Weave Bracelet", img: "https://oliveplanet.in/cdn/shop/files/nylon_paracord_550_bracelet_solomon_weave_cobra_weave_olive_green_colour_13mm_buckle_1280x.jpg?v=1727697466" },
      { id: "Acc-Par-BrcTan", title: "PARACORD BRACELET - TAN", price: "$149.99", desc: "Nylon 550 Zipper Sinnet Weave Bracelet", img: "https://oliveplanet.in/cdn/shop/files/type_III_nylon_paracord_550_bracelet_brown_zipper_sinnet_weave_13mm_buckle_1280x.jpg?v=1727698275" },
      { id: "Acc-Par-BrcGreen", title: "PARACORD BRACELET - GREEN", price: "$149.99", desc: "Survival Bracelet with Compass & Whistle", img: "https://i5.walmartimages.com/seo/SDS-Survival-Paracord-Bracelet-Green-Compass-Whistle-and-Fire-Starter-Kit_8d7ec3f2-92d2-4bbb-ac33-a2765d87a36c.1583c3ad9b7bcb58af28585752111f7a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
      { id: "Acc-Par-Clasp", title: "PARACORD CLASP", price: "$149.99", desc: "Heavy Duty Stainless Steel Stealth Black", img: "https://image.made-in-china.com/2f0j00jqiokINzLMcP/Spring-Carabiner-Clasp-Paracord-Clip-Snap-Hook-Buckle-for-Purse-ID-Card-Flag-Pole-Zipper-Pull-Key-Chain.webp" }
    ]
  },
  walkietalkie: {
    title: "RADIOS & WALKIE TALKIE",
    items: [
      { id: "Acc-Rad-DigiLogger", title: "DIGI-LOGGER", price: "$149.99", desc: "All Metal, Tough Material, Physical Buttons", img: "https://cdnb.artstation.com/p/assets/images/images/016/905/495/large/levelup-digital-cemrender-d.jpg?1553911201" },
      { id: "Acc-Rad-Barrett", title: "BARRETT", price: "$149.99", desc: "All Metal, Tough Material, Physical Buttons", img: "https://cdnb.artstation.com/p/assets/images/images/015/172/017/large/james-furler-radio-portfolio-01.jpg?1547346548" },
      { id: "Acc-Rad-Manpack", title: "MANPACK", price: "$149.99", desc: "Single Layer 0.125″ thickness spring loaded", img: "https://cdna.artstation.com/p/assets/images/images/045/488/722/large/magesh-v-tbrender010-viewport-1080.jpg?1642835872" },
      { id: "Acc-Rad-Anton", title: "ANTON", price: "$149.99", desc: "Innovative Kydex Holster for AR Platform", img: "https://cdnb.artstation.com/p/assets/images/images/048/537/741/large/akshat-singh-shrike-tbrender-viewport.jpg?1650310192" },
      { id: "Acc-Rad-VHF", title: "VHF", price: "$149.99", desc: "Custom fit Optic ready, Durable Construction", img: "https://cdnb.artstation.com/p/assets/images/images/013/264/739/large/alex-tang-screenshot000.jpg?1538808865" },
      { id: "Acc-Rad-Sperasoft", title: "SPERASOFT", price: "$149.99", desc: "Made Of Carbon Fiber, Impact & Abrasion Resistance", img: "https://cdnb.artstation.com/p/assets/images/images/043/995/293/large/dmitriy-lipnevich-military-radio-by-dmitry-lipnevich1.jpg?1638823805" },
      { id: "Acc-Rad-PRC152", title: "PRC-152", price: "$149.99", desc: "Portable, Durable, Waterproof Rating IP54", img: "https://cdna.artstation.com/p/assets/images/images/015/642/216/large/alessandro-chierici-screenshot000.jpg?1549067134" },
      { id: "Acc-Rad-PortVHF", title: "PORTABLE VHF", price: "$149.99", desc: "Low-profile Carry, Dematte Edge Finish", img: "https://cdna.artstation.com/p/assets/images/images/012/731/682/large/anton-berkov-rs-02-main-2.jpg?1536230326" },
      { id: "Acc-Rad-PRC148", title: "PRC-148", price: "$149.99", desc: "Metal Clip, Universal Gun Clip for Handguns", img: "https://cdnb.artstation.com/p/assets/images/images/006/952/503/large/jason-mattke-radiofinal-06.jpg?1502511226" }
    ]
  },
  magpouch: {
    title: "MAGAZINE POUCH",
    items: [
      { id: "Acc-Mag-DualPistol", title: "DUAL PISTOL", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://loricaequipment.com/wp-content/uploads/2022/10/LORICA-Double-Pistol-Mag-Front.jpg" },
      { id: "Acc-Mag-SingleCarb", title: "SINGLE CARBINE", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://loricaequipment.com/wp-content/uploads/2022/09/LORICA-Rifle-Mag-Pouch-Front.jpg" },
      { id: "Acc-Mag-TripleCarb", title: "TRIPLE CARBINE", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://loricaequipment.com/wp-content/uploads/2023/01/LORICA-Triple-Rig-MCB.jpg" },
      { id: "Acc-Mag-Angled", title: "ANGLED MAG POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://tracer-tactical.com/cdn/shop/products/image_689d1bfe-2eb0-4202-8ea5-ccd0031f480b_1024x1024@2x.jpg?v=1680043163" },
      { id: "Acc-Mag-Combo", title: "CARBINE & PISTOL COMBO", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://images.squarespace-cdn.com/content/v1/5de76ab6b674ec5a6465e1d9/1675560599079-Z70S2NSWCVODUFMPG7HG/Photo%252BFeb%252B04%252B2023%25252C%252B2%252B58%252B45%252BPM.jpg?format=750w" },
      { id: "Acc-Mag-Triple", title: "TRIPLE", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://cdn11.bigcommerce.com/s-jlrunyc3d2/images/stencil/500x659/products/3277/8274/black_triple__72205.1705606337.jpg?c=1" },
      { id: "Acc-Mag-SglPistol", title: "SINGLE PISTOL", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://carcajoutactical.com/cdn/shop/products/Mag-Pouch-Pistol-Black-Front_540x.jpg?v=1689343843" },
      { id: "Acc-Mag-Saw", title: "SAW POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://carcajoutactical.com/cdn/shop/files/WithMag_1800x1800.png?v=1697579246" }
    ]
  },
  tactpouch: {
    title: "TACTICAL POUCH",
    items: [
      { id: "Acc-Pou-Tasmanian", title: "TASMANIAN POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://assets.cat5.com/images/catalog/products/6/2/6/8/5/0-650-tasmanian-tiger-tac-pouch-14-black.jpg?v=70008" },
      { id: "Acc-Pou-Magforce", title: "MAGFORCE POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://cdn11.bigcommerce.com/s-zv2yzuk65y/images/stencil/original/products/32328/141306/MF-A2601-B05__39277.1653639372.1280.1280__51685.1653646896.jpg?c=1" },
      { id: "Acc-Pou-Walmart", title: "WALMART POUCH", price: "$149.99", desc: "Multifunctional Drop Leg Waist Bag", img: "https://i5.walmartimages.com/seo/Multifunctional-Drop-Leg-Waist-Bag-Tactical-Military-Outdoor-Pack-Hunting-Bags-Hiking-Traveling-Tool-Pouch-Detachable-Water-Bottle-Phone-Black_cc101121-d061-4652-a103-123c83f588b5.e2950b0aea13c7b8506f1418d6e4ce81.jpeg?odnHeight=208&odnWidth=208&odnBg=FFFFFF" },
      { id: "Acc-Pou-Singapore", title: "SINGAPORE POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://img.myshopline.com/image/store/2001213091/1656481653253/kerospouch06.jpg?w=1800&h=1800" },
      { id: "Acc-Pou-Molle", title: "MOLLE POUCH", price: "$149.99", desc: "Medium Horizontal Utility Pouch BLK", img: "https://www.warriorassaultsystems.com/wp-content/uploads/2016/07/Medium-Horizontal-Utility-Pouch-BLK.jpg" },
      { id: "Acc-Pou-Orca", title: "ORCA POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQOnH-uFMKXWXDJYWD5DF9fG2TNE8XV8xRHBzmgSRkeXCktZOZe40zJ5WKJ1KpQLkx5E&usqp=CAU" },
      { id: "Acc-Pou-Ubuy", title: "UBUY POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://img.myshopline.com/image/store/2001213091/1656481653253/WeChatImage-20210114143801copycopy.jpg?w=800&h=800" },
      { id: "Acc-Pou-Tacwrk", title: "TACWRK POUCH", price: "$149.99", desc: "5.11 Tactical Flex Admin Pouch", img: "https://www.tacwrk.com/img/62756/511-tactical-flex-admin-pouch-black-56429abr019-1.jpg?options=rs:fill:616:762/g:ce/dpr:1" },
      { id: "Acc-Pou-Urban", title: "URBAN POUCH", price: "$149.99", desc: "Premium Feel, Safety Tested, Trusted by Millions", img: "https://urbantactical.com/cdn/shop/files/56653_019_01_1.jpg?v=1686758151&width=460" }
    ]
  },
  headset: {
    title: "TACTICAL HEADSET",
    items: [
      { id: "Acc-Hed-Walkers", title: "Walker's XCEL-500 BT", price: "$149.99", desc: "Premium Feel, Bluetooth Enabled Safety Gear", img: "https://cdna.artstation.com/p/assets/images/images/083/429/132/large/ruslan-kalinku-untitled.jpg?1735914036" },
      { id: "Acc-Hed-Sleek", title: "SLEEK 250", price: "$149.99", desc: "Sleek Black Headphones Against Dark Background", img: "https://png.pngtree.com/background/20231030/original/pngtree-sleek-black-headphones-against-a-dark-background-in-3d-rendering-picture-image_5800963.jpg" },
      { id: "Acc-Hed-Technine", title: "TECHNINE EARPIECES", price: "$149.99", desc: "High Cut Display Tactical Audio Gear", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAazmWAixj8NVs_K1CELkWmFKx2wmMJPo9ig&s" }
    ]
  },
  chemlights: {
    title: "TACTICAL CHEMLIGHTS",
    items: [
      { id: "Acc-Chm-Red", title: "Cyalume Red Chemlight", price: "$149.99", desc: "6-inch Orange Military Lightstick 12-24 Hours", img: "https://m.media-amazon.com/images/I/6166RLrBV8L.jpg" },
      { id: "Acc-Chm-Green", title: "Cyalume Green Chemlight", price: "$149.99", desc: "6-inch Green Military Lightstick 12-24 Hours", img: "https://m.media-amazon.com/images/I/71lU+MQULLL._AC_UF894,1000_QL80_.jpg" },
      { id: "Acc-Chm-Blue", title: "Cyalume Blue Chemlight", price: "$149.99", desc: "6-inch Blue Military Lightstick 12-24 Hours", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDj0vZ0tRP6sYAR-Yp6W8pio5gsjO_HyDTSvX3BfEO5k5jWePqYWLYFhygoRqjf5QYbgY&usqp=CAU" }
    ]
  },
  merch: {
    title: "OFFICIAL MERCH",
    items: [
      { id: "Acc-Mrc-Cup", title: "Guardian Fortitude CUP", price: "$149.99", desc: "Premium Quality Branded Drinkware", img: "../../IMAGES/PRODUCTS/ACCESSORIES/MERCH/cup.jpeg" },
      { id: "Acc-Mrc-Tshirt01", title: "GF Tshirt 01", price: "$149.99", desc: "Big Back Logo Signature Series", img: "../../IMAGES/PRODUCTS/ACCESSORIES/MERCH/bigbacklogo.jpeg" },
      { id: "Acc-Mrc-Tshirt02", title: "GF Tshirt 02", price: "$149.99", desc: "Small Back Logo Edition", img: "../../IMAGES/PRODUCTS/ACCESSORIES/MERCH/smallbacklogo.jpeg" },
      { id: "Acc-Mrc-Tshirt03", title: "GF Tshirt 03", price: "$149.99", desc: "Small Front Logo Minimalist", img: "../../IMAGES/PRODUCTS/ACCESSORIES/MERCH/smallfrontlogo.jpeg" },
      { id: "Acc-Mrc-Tshirt04", title: "GF Tshirt 04", price: "$149.99", desc: "Classic Front Logo Branding", img: "../../IMAGES/PRODUCTS/ACCESSORIES/MERCH/frontlogo.jpeg" }
    ]
  }
};

  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico] pt-24 md:pt-32">
  <Navbar />

  {/* --- HERO BANNER --- */}
  <div className="relative h-[30vh] flex items-center justify-center border-b border-white/10">
    <div className="absolute inset-0 bg-center bg-cover opacity-30" style={{ backgroundImage: `url('https://armour-works.com/images/accessories-banner.jpeg')` }} />
    <h1 className="relative z-10 text-4xl md:text-7xl font-black tracking-[0.4em]">ACCESSORIES</h1>
  </div>
      

      {/* --- CATEGORY SELECTOR GRID --- */}
     <Container className="py-24">
  {/* Header for the Grid */}
  <div className="mb-12 ps-4 border-l-4 border-[#800000]">
    <h4 className="text-[10px] tracking-[0.5em] text-gray-500 font-black uppercase">Asset Categorization</h4>
    <h2 className="text-3xl font-black tracking-tighter">HARDWARE <span className="text-[#800000]">DEPARTMENTS</span></h2>
  </div>

  <Row className="g-4">
    {Object.entries(accessoryData).map(([key, value]) => (
      /* Changed to md={6} and lg={4} to make cards physically larger on the screen */
      <Col key={key} md={6} lg={4} onClick={() => scrollToSection(key)}>
        <div className="group relative h-[450px] cursor-pointer overflow-hidden border border-white/10 bg-[#050505] transition-all duration-700 hover:border-[#800000]/80 shadow-2xl">
          
          {/* --- TACTICAL HUD OVERLAY --- */}
          <div className="absolute inset-0 z-20 p-4">
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#800000] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#800000] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            {/* Sector ID & Status */}
            <div className="flex justify-between items-start">
              <div className="bg-[#800000] text-white text-[8px] font-black px-2 py-1 tracking-tighter">
                SEC_{key.substring(0, 3).toUpperCase()}
              </div>
              <div className="text-right">
                <span className="block text-[8px] font-black text-[#800000] animate-pulse">● SYSTEM_ACTIVE</span>
                <span className="text-[7px] text-white/20 font-mono uppercase">Data_Stream_v4.2</span>
              </div>
            </div>
          </div>

          {/* --- ACTIVE SCAN LINE --- */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-[#800000] z-30 opacity-0 group-hover:animate-scan shadow-[0_0_15px_#800000]" />

          {/* --- BACKGROUND IMAGE --- */}
          <div className="absolute inset-0 z-10">
            <img 
              src={value.items[0].img} 
              className="w-100 h-100 object-cover opacity-20 grayscale group-hover:opacity-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
              alt={value.title} 
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
          </div>

          {/* --- FOOTER CONTENT --- */}
          <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-transparent to-transparent">
            <p className="text-[#800000] text-[10px] font-black tracking-[.4em] mb-1 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              OPEN_LOGISTICS
            </p>
            <h3 className="text-2xl md:text-3xl font-black tracking-widest uppercase mb-2">
              {value.title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "text-white" : "text-white/40"}>
                  {word}{' '}
                </span>
              ))}
            </h3>
            <div className="w-12 h-[3px] bg-[#800000] group-hover:w-full transition-all duration-700" />
          </div>

        </div>
      </Col>
    ))}
  </Row>

  <style>{`
    @keyframes scan {
      0% { top: -5%; }
      100% { top: 105%; }
    }
    .group:hover .animate-scan {
      animation: scan 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      opacity: 1;
    }
  `}</style>
</Container>

      {/* --- PRODUCT SECTIONS --- */}
      {Object.entries(accessoryData).map(([categoryID, data]) => (
        <section key={categoryID} id={categoryID} className="py-20 border-t border-white/5">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-widest">{data.title}</h2>
              <ChevronDown className="mx-auto mt-4 text-white/20 animate-bounce" />
            </div>

            <Row className="gy-5">
              {data.items.map((item) => (
                
                <Col key={item.id} xs={12} md={6} lg={4}>
                  <div className="group h-full flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all overflow-hidden rounded-sm">
                    <div className="relative aspect-square overflow-hidden bg-[#111]">
                      <img src={item.img} className="w-100 h-100 object-contain p-4 group-hover:scale-105 transition-transform duration-500" alt={item.title} />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-lg font-black tracking-tighter mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-xs font-sans leading-relaxed mb-6">{item.desc}</p>
                      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-xl font-black">{item.price}</span>
                        <button 
                        onClick={() => addToCart(item)}
                        style={{ backgroundColor: 'white', color: 'black' }}
                        className="px-4 py-2 text-[10px] font-black tracking-widest hover:!bg-[#800000] hover:!text-white transition-all uppercase border-0"
                        >
                        Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      ))}

      {/* --- FLOATING CART BUTTON (Bottom Corner) --- */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-[100] bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all border-4 border-black"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#800000] text-white text-[10px] font-bold w-6 h-6 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>


      <Footer />
    </div>
  );
};

export default AccessoriesDepartment;