import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ParallaxImg from '../../assets/IMAGES/PRODUCTS/ARMOURY/Parallax.jpg';
import { Container, Row, Col, Card, Button, Badge, Stack } from 'react-bootstrap';
import { ShoppingCart, X, Trash2, ShieldCheck, Target } from 'lucide-react';

const Armoury = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("series");

  const categoryMap = {
    PISTOLS: "Pistols",
    HUNTINGRIFLES: "Hunting Rifles",
    SMG: "Sub-Machine Guns",
    SHOTGUNS: "Shotguns",
    ASSAULT_RIFLES: "Assault Rifles",
    SNIPER_RIFLES: "Sniper Rifles",
    LAUNCHERS: "Launchers",
    MACHINE_GUNS: "Machine Guns",
    GRENADES_IED: "Explosives & IED",
    KNIVES: "Blades & Knives"
  };

 const caliberData = [
    { 
      label: ".22 LR", 
      viewBox: "0 0 63.4 415", 
      path: "M46.7,409.7h-1.5v-70.2h-.2v-18.3h-1c-1.8-17.9-6.6-26.9-12.5-26.9s-10.8,9-12.5,26.9h-1v18.3h-.2v70.2h-1c-.5,0-1,.4-1,1v1.6c0,.5.4,1,1,1h30.1c.5,0,1-.4,1-1v-1.6c-.2-.6-.6-1-1.2-1Z" 
    },
    { 
      label: "9 MM", 
      viewBox: "0 0 63.4 415", 
      path: "M51.3,404.6v-2.9l2.4-5.1v-73.5h-1.3c0-26.1-8.8-44-14.5-47.2h0c-.4-.3-.8-.4-1.3-.5-1.6-.6-3.2-.9-4.9-.8-1.7,0-3.3.2-4.9.8-.4.1-.9.3-1.3.4v.2c-5.7,3.1-14.5,21-14.5,47.1h-1.3v73.5l2.4,5.1v2.9h-3.3v4.9s.5,2.6,16.7,3.4v.3c2.2,0,4.3,0,6.2-.1s3.9.1,6.2.1v-.3c16.3-.9,16.7-3.4,16.7-3.4v-4.9h-3.3Z" 
    },
    { 
      label: ".40 S&W", 
      viewBox: "0 0 63.4 415", 
      path: "M57.2,312.5h-2c0-22.1-8.1-32.3-9.4-33.8v-.2h-28.3v.2c-1.3,1.5-9.4,11.7-9.4,33.8h-2v81.9l4.9,4-.7,5h-4.1v6.6c2.7.7,5.5,1.3,8.3,1.8,0,0,11.1,1.6,16.4,1.5,5.3.1,18.1-1.5,18.1-1.5,2.8-.5,5.6-1,8.3-1.8v-6.6h-4.3l-.7-5,5-4v-81.9h-.1Z" 
    },
    { 
      label: ".45 ACP", 
      viewBox: "0 0 63.4 415", 
      path: "M59.5,409.3v-5.3h-4.3v-4.9l4.3-8.9v-85.9h-2.6c.2-29.4-9.4-39.6-18.2-42.8-2.2-.9-4.6-1.4-6.9-1.3-2.4-.1-4.8.4-6.9,1.3-8.8,3.2-18.3,13.4-18.2,42.8h-2.7v85.9l4.3,8.9v5h-4.3v5.3s-.9,2.5,18.5,3.5c0,0,6.5.4,9.2.3s9.2-.3,9.2-.3c19.5-1.1,18.6-3.6,18.6-3.6Z" 
    },
    { 
      label: "5.56", 
      viewBox: "0 0 63.4 415", 
      path: "M51.8,409.7v-4.6l-2.3-2,2.3-5.9v-151.6l-6.3-12.9v-24.4h-2c0-35-5.8-53-7.9-58.4l-.6-1.8h-6.6l-.7,1.8c-2.1,5.4-7.9,23.4-7.9,58.4h-2v24.4l-6.3,12.9v151.6l2.3,5.9-2.3,2v4.6s-.9,1.6,8.3,2.6c0,0,8.5.9,11.9.8,3.4.1,11.9-.8,11.9-.8,9.1-1,8.2-2.6,8.2-2.6Z" 
    },
    { 
      label: "6 CM", 
      viewBox: "0 0 63.4 415", 
      path: "M57.1,407.8l-4.4-4.7v-5.5l2.8-4.2v-153l-10.5-24.2c2.8-18.9,0-27.9,0-27.9,0-54.6-13.2-87.4-13.2-87.4h-.2c0,0-.2,0-.2,0,0,0-13.2,32.9-13.2,87.4,0,0-2.8,9.1,0,27.9l-10.3,24.1v153l2.8,4.2v5.5l-4.4,4.7s-2.6,4.3,21,5.2h0c1.6.1,3,.1,4.4.1h4.4c23.6-.9,21-5.2,21-5.2h0Z" 
    },
    { 
      label: ".308 Win", 
      viewBox: "0 0 63.4 415", 
      path: "M58.8,406.8l-7.3-6,4-8.6v-163.7l-6-19.8c0-77.9-12.8-114.9-15.9-117.6l-.3-.2c-.9-1-2.4-1-3.4,0h-.1c0,0-.3.3-.3.3-3,2.6-15.9,39.6-15.9,117.6l-5.9,19.8v163.8l4,8.6-7.3,6s0,5.9,27.1,5.9,27.3-6,27.3-6Z" 
    },
    { 
      label: "7 MM", 
      viewBox: "0 0 63.4 415", 
      path: "M58.8,406.8l-7.3-6,4-8.6v-201.7l-6-17.8c0-14.7-.5-33.1-1.2-45.3s0-.6,0-.9c-3.3-52.1-12.1-78.2-14.6-80.3l-.3-.2c-.9-1-2.4-1-3.4-.1h-.1c0,.1-.3.3-.3.3-2.4,2.1-11.2,27.8-14.6,79.4v1.3c-.8,12.4-1.3,31-1.3,45.9l-5.9,17.8v201.8l4,8.6-7.3,6s0,5.9,27.1,5.9,27.3-6,27.3-6h0Z" 
    },
    { 
      label: "50 CAL.", 
      viewBox: "0 0 63.4 415", 
      path: "M47,124C47,68.5,31.8,3.2,31.8,3.2h-.4s-15.2,65.4-15.2,120.8l-3.2,23.4-10.9,26.1v219l3.5,4.6v6l-5.5,5.1s-3.2,4.7,26.1,5.7v.2h11v-.3c29.4-1,26.1-5.7,26.1-5.7l-5.5-5.1v-6l3.5-4.6v-219l-11-26.1-3.3-23.3h0Z" 
    }
  ];

  const seriesItems = [
    { title: "PISTOLS", img: "https://cdnb.artstation.com/p/assets/images/images/031/942/803/large/ryzin-art-screenshot096.jpg?1605033339" },
    { title: "HUNTING RIFLES", img: "https://cdna.artstation.com/p/assets/images/images/010/130/402/large/linus-scheffel-5.jpg?1522743897" },
    { title: "SUB MACHINE GUNS", img: "https://cdna.artstation.com/p/assets/images/images/075/080/848/large/egor-rzhevskii-ump-4k-right-min.jpg?1713714355" },
    { title: "SHOTGUNS", img: "https://cdnb.artstation.com/p/assets/images/images/069/643/793/large/pascual-hernandez-pascualhernandez-remington-870-frontground.jpg?1700641488" },
    { title: "ASSAULT RIFLES", img: "https://cdnb.artstation.com/p/assets/images/images/024/195/279/large/florian-neumann-06-side.jpg?1581607642" },
    { title: "SNIPER RIFLES", img: "https://cdnb.artstation.com/p/assets/images/images/032/325/659/large/laurentiu-nedelca-pms-akrapov-s4-artstation-010.jpg?1606131873" },
    { title: "LAUNCHERS", img: "https://cdna.artstation.com/p/assets/images/images/043/750/398/large/james-shock-2-edited.jpg?1638179700" },
    { title: "MACHINE GUNS", img: "https://cdnb.artstation.com/p/assets/images/images/035/824/167/large/laurentiu-nedelca-pms-stal-51-0011.jpg?1615993846" },
    { title: "GRENADES & IED", img: "https://images2.alphacoders.com/108/1085880.jpg" },
    { title: "KNIVES", img: "https://cdna.artstation.com/p/assets/images/images/051/947/416/large/jason-h-ka-bar-second.jpg?1658571531" }
  ];

const inventory = [
  // --- PISTOLS ---
  { id: 'M9', name: 'M9 BERETTA', price: 22495, capacity: '15 Rounds', weight: '0.95 kg', action: 'SA / DA', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/016/854/158/large/renderdock-studio-m9-01.jpg?1553718783', flip: true, category: 'PISTOLS' },
  { id: '1911', name: 'COLT 1911', price: 22495, capacity: '7 Rounds', weight: '1.1 kg', action: 'Single Action', caliber: '.45ACP', img: 'https://cdna.artstation.com/p/assets/images/images/037/885/138/large/heavy-machinery-1.jpg?1621560428', flip: true, category: 'PISTOLS' },
  { id: 'G17', name: 'GLOCK 17', price: 22495, capacity: '17 Rounds', weight: '0.63 kg', action: 'Safe Action', caliber: '.40S&W', img: 'https://cdnb.artstation.com/p/assets/images/images/016/497/851/large/renderdock-studio-glock17-3.jpg?1552392649', flip: false, category: 'PISTOLS' },
  { id: 'G19X', name: 'GLOCK 19X', price: 22495, capacity: '17 Rounds', weight: '0.62 kg', action: 'Double Action', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/016/523/154/large/renderdock-studio-glock17-6.jpg?1552487107', flip: false, category: 'PISTOLS' },
  { id: 'G19', name: 'GLOCK 19', price: 22495, capacity: '15 Rounds', weight: '0.61 kg', action: 'Single Action', caliber: '9MM', img: 'https://cdnb.artstation.com/p/assets/images/images/073/294/159/large/forge-studios-g19-03.jpg?1709316837', flip: false, category: 'PISTOLS' },
  { id: 'G22', name: 'GLOCK 22', price: 22495, capacity: '17 Rounds', weight: '0.64 kg', action: 'Single Action', caliber: '.40S&W', img: 'https://cdna.artstation.com/p/assets/images/images/028/004/730/large/carlos-morales-empire-3d-std-glock22-01b.jpg?1593196387', flip: false, category: 'PISTOLS' },
  { id: 'G34', name: 'GLOCK 34', price: 22495, capacity: '17 Rounds', weight: '0.65 kg', action: 'Single Action', caliber: '9MM', img: 'https://cdnb.artstation.com/p/assets/images/images/024/091/775/large/shanji-wang-g34-render-2.jpg?1581298047', flip: false, category: 'PISTOLS' },
  { id: 'SIGP226', name: 'SIG SAUER P226', price: 22495, capacity: '12 Rounds', weight: '0.96 kg', action: 'Single Action', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/041/832/444/large/joris-chambard-p226-camera-1-002.jpg?1632829967', flip: false, category: 'PISTOLS' },
  { id: 'SIGP320', name: 'SIG SAUER P320', price: 22495, capacity: '15 Rounds', weight: '0.63 kg', action: 'Double Action', caliber: '9MM', img: 'https://cdnb.artstation.com/p/assets/images/images/063/071/727/large/zhabin-yuri-16.jpg?1684659807', flip: false, category: 'PISTOLS' },
  { id: 'SIGP365', name: 'SIG SAUER P365', price: 22495, capacity: '12 Rounds', weight: '0.5 kg', action: 'Double Action', caliber: '9MM', img: 'https://cdnb.artstation.com/p/assets/images/images/066/363/709/large/igor-antonov-closedcase.jpg?1692723049', flip: false, category: 'PISTOLS' },
  { id: 'SIGP322', name: 'SIG SAUER P322', price: 22495, capacity: '20 Rounds', weight: '0.48 kg', action: 'Single Action', caliber: '.22LR', img: 'https://cdna.artstation.com/p/assets/images/images/060/765/108/large/niraj-sahgel-1-013.jpg?1679290256', flip: false, category: 'PISTOLS' },
  { id: 'SIGP228', name: 'SIG SAUER P228', price: 22495, capacity: '13 Rounds', weight: '0.73 kg', action: 'Double Action', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/029/317/812/large/david-oroian-0.jpg?1597158574', flip: true, category: 'PISTOLS' },

  // --- HUNTING RIFLES ---
  { id: 'WIN70', name: 'WINCHESTER 70', price: 22495, capacity: '5 Rounds', weight: '3.06 kg', action: 'Bolt Action', caliber: '.22LR', img: 'https://cdnb.artstation.com/p/assets/images/images/052/989/163/large/artem-nasyrov-1.jpg?1661170503', flip: true, category: 'HUNTINGRIFLES' },
  { id: 'SAV99', name: 'SAVAGE 99', price: 22495, capacity: '5 Rounds', weight: '4.99 kg', action: 'Lever Action', caliber: '.22LR', img: 'https://cdna.artstation.com/p/assets/images/images/037/324/030/large/sheila-hernanz-rifle-11.jpg?1620091356', flip: false, category: 'HUNTINGRIFLES' },
  { id: 'M40A5', name: 'M40A5', price: 22495, capacity: '10 Rounds', weight: '6.57 kg', action: 'Bolt Action', caliber: '.22LR', img: 'https://cdna.artstation.com/p/assets/images/images/052/251/938/large/paddingsons-outsourcing-argocomfortech-5.jpg?1659352972', flip: false, category: 'HUNTINGRIFLES' },
  { id: 'ZASTAVA93', name: 'ZASTAVA 9.3', price: 22495, capacity: '5 Rounds', weight: '3.5 kg', action: 'Bolt Action', caliber: '.22LR', img: 'https://cdnb.artstation.com/p/assets/images/images/065/938/295/large/wanis-kazi-03-1-pp.jpg?1691604687', flip: true, category: 'HUNTINGRIFLES' },
  { id: 'HOLLAND', name: 'HOLLAND & HOLLAND', price: 22495, capacity: '5 Rounds', weight: '4.8 kg', action: 'Bolt Action', caliber: '.22LR', img: 'https://cdnb.artstation.com/p/assets/images/images/014/185/133/large/joshua-abbott-8.jpg?1542849472', flip: false, category: 'HUNTINGRIFLES' },
  { id: 'HOWA1500', name: 'HOWA 1500', price: 22495, capacity: '10 Rounds', weight: '4.2 kg', action: 'Bolt Action', caliber: '.22LR', img: 'https://cdnb.artstation.com/p/assets/images/images/077/515/427/large/ryland-scott-howahr-ue-neutral-renderv01.jpg?1719645588', flip: true, category: 'HUNTINGRIFLES' },
  { id: 'TOZ34', name: 'TOZ-34', price: 22495, capacity: '2 Rounds', weight: '3.3 kg', action: 'Break Action', caliber: '.22LR', img: 'https://cdnb.artstation.com/p/assets/images/images/043/728/865/large/luminiferous_slavoch-toz-34-art-2.jpg?1638120893', flip: false, category: 'HUNTINGRIFLES' },
  { id: 'SAUER101', name: 'SAUER 101', price: 22495, capacity: '5 Rounds', weight: '2.5 kg', action: 'Bolt Action', caliber: '.22LR', img: 'https://cdna.artstation.com/p/assets/images/images/032/036/716/large/bastien-blanch-sauer-render-4.jpg?1605286506', flip: false, category: 'HUNTINGRIFLES' },

  // --- SUB-MACHINE GUNS (SMG) ---
  { id: 'MP9', name: 'MP-9', price: 22495, capacity: '30 Rounds', weight: '1.4 kg', action: 'Full Auto', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/075/391/806/large/laurentiun-sow-mp9-006.jpg?1714466659', flip: false, category: 'SMG' },
  { id: 'RHN9', name: 'RHN-9', price: 22495, capacity: '33 Rounds', weight: '2.1 kg', action: 'Full Auto', caliber: '9MM', img: 'https://cdnb.artstation.com/p/assets/images/images/047/110/807/large/vladislav-babiak-main.jpg?1646820274', flip: false, category: 'SMG' },
  { id: 'SMG45', name: 'SMG-45', price: 22495, capacity: '25 Rounds', weight: '2.5 kg', action: 'Full Auto', caliber: '.45ACP', img: 'https://cdna.artstation.com/p/assets/images/images/077/318/398/large/barkin-eraslan-be-lwrc-9.jpg?1719161863', flip: false, category: 'SMG' },
  { id: 'ZJ01', name: 'ZJ01', price: 22495, capacity: '30 Rounds', weight: '2.3 kg', action: 'Full Auto', caliber: '5.56', img: 'https://cdnb.artstation.com/p/assets/images/images/038/185/817/large/jinyi-zhu-zj01-15.jpg?1622425072', flip: true, category: 'SMG' },
  { id: 'P90', name: 'P90', price: 22495, capacity: '50 Rounds', weight: '2.6 kg', action: 'Full Auto', caliber: '9MM', img: 'https://cdnb.artstation.com/p/assets/images/images/017/502/931/large/jonathan-norden-new-render7.jpg?1556230289', flip: false, category: 'SMG' },
  { id: 'TOMMY', name: 'TOMMY', price: 22495, capacity: '30 Rounds', weight: '4.5 kg', action: 'Full Auto', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/009/780/566/large/linus-scheffel-2.jpg?1520872244', flip: false, category: 'SMG' },
  { id: 'CENTAUR', name: 'ADT CENTAUR', price: 22495, capacity: '30 Rounds', weight: '2.5 kg', action: 'Full Auto', caliber: '5.56', img: 'https://cdna.artstation.com/p/assets/images/images/051/088/058/large/sam-white-1.jpg?1656429947', flip: true, category: 'SMG' },
  { id: 'LWRC45', name: 'LWRC-45', price: 22495, capacity: '25 Rounds', weight: '2.5 kg', action: 'Full Auto', caliber: '.45ACP', img: 'https://cdnb.artstation.com/p/assets/images/images/014/486/737/large/sviatoslav-chervatiuk-3-1.jpg?1544138779', flip: true, category: 'SMG' },
  { id: 'VECTOR', name: 'SOW VECTOR', price: 22495, capacity: '30 Rounds', weight: '2.7 kg', action: 'Full Auto', caliber: '9MM', img: 'https://cdnb.artstation.com/p/assets/images/images/078/529/115/large/laurentiun-sow-kv-showcase-014.jpg?1722359554', flip: false, category: 'SMG' },
  { id: 'KH9', name: 'KH9', price: 22495, capacity: '30 Rounds', weight: '2.4 kg', action: 'Full Auto', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/011/742/678/large/ben-armstrong-kh9-alternate-01.jpg?1531173726', flip: true, category: 'SMG' },
  { id: 'MAC10', name: 'MAC-10', price: 22495, capacity: '32 Rounds', weight: '2.8 kg', action: 'Full Auto', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/032/635/884/large/laurentiu-nedelca-pms-mac-10-v2-003.jpg?1607013910', flip: false, category: 'SMG' },
  { id: 'PPK42', name: 'PPK-42', price: 22495, capacity: '25 Rounds', weight: '2.5 kg', action: 'Full Auto', caliber: '7.62mm', img: 'https://cdnb.artstation.com/p/assets/images/images/068/328/445/large/stefan-engdahl-render06.jpg?1697550040', flip: true, category: 'SMG' },

  // --- SHOTGUNS ---
  { id: 'DBLBARELL', name: 'DOUBLE BARREL', price: 22495, capacity: '2 Rounds', weight: '2.5 kg', action: 'Break Action', caliber: '12 GAUGE', img: 'https://cdna.artstation.com/p/assets/images/images/030/503/648/large/ryzin-art-screenshot005.jpg?1600801744', flip: false, category: 'SHOTGUNS' },
  { id: 'BENELIM4', name: 'BENELLI M4', price: 22495, capacity: '7 Rounds', weight: '3.8 kg', action: 'Semi-Auto', caliber: '16 GAUGE', img: 'https://cdnb.artstation.com/p/assets/images/images/071/149/895/large/artem-n-anton-huleha-benelli-m4-1.jpg?1704558641', flip: false, category: 'SHOTGUNS' },
  { id: 'MOSS590M', name: 'MOSSBERG 590M', price: 22495, capacity: '10 Rounds', weight: '3.5 kg', action: 'Pump Action', caliber: '12 GAUGE', img: 'https://cdna.artstation.com/p/assets/images/images/035/815/734/large/amc-ro-studio-render-6.jpg?1615976732', flip: false, category: 'SHOTGUNS' },
  { id: 'REM870_TACT', name: 'REMINGTON 870 TACT', price: 22495, capacity: '6 Rounds', weight: '3.4 kg', action: 'Pump Action', caliber: '10 GAUGE', img: 'https://cdnb.artstation.com/p/assets/images/images/069/643/793/large/pascual-hernandez-pascualhernandez-remington-870-frontground.jpg?1700641488', flip: false, category: 'SHOTGUNS' },
  { id: 'SIX12', name: 'SIX12', price: 22495, capacity: '6 Rounds', weight: '2.5 kg', action: 'Revolving', caliber: '16 GAUGE', img: 'https://cdnb.artstation.com/p/assets/images/images/033/584/731/large/alexandru-voinea-studio-1.jpg?1610020632', flip: true, category: 'SHOTGUNS' },
  { id: 'PPK42_SG', name: 'PPK-42 SG', price: 22495, capacity: '5 Rounds', weight: '2.5 kg', action: 'Semi-Auto', caliber: '12 GAUGE', img: 'https://cdnb.artstation.com/p/assets/images/images/068/328/445/large/stefan-engdahl-render06.jpg?1697550040', flip: true, category: 'SHOTGUNS' },
  { id: 'BOLTONBSS', name: 'BOLTON BSS', price: 22495, capacity: '5 Rounds', weight: '2.5 kg', action: 'Semi-Auto', caliber: '12 GAUGE', img: 'https://cdnb.artstation.com/p/assets/images/images/054/264/885/large/ben-bolton-cs-039.jpg?1664149233', flip: false, category: 'SHOTGUNS' },
  { id: 'PMSM12', name: 'PMS M12', price: 22495, capacity: '8 Rounds', weight: '2.5 kg', action: 'Pump Action', caliber: '12 GAUGE', img: 'https://cdna.artstation.com/p/assets/images/images/032/738/658/large/laurentiu-nedelca-pms-m12-006.jpg?1607341003', flip: false, category: 'SHOTGUNS' },
  { id: 'WIN1895', name: 'WINCHESTER 1895', price: 22495, capacity: '4 Rounds', weight: '4.1 kg', action: 'Lever Action', caliber: '12 GAUGE', img: 'https://cdna.artstation.com/p/assets/images/images/016/207/242/large/johann-william-loffler-win1895-3.jpg?1551305389', flip: true, category: 'SHOTGUNS' },
  { id: 'REM870_CLASSIC', name: 'REMINGTON 870', price: 22495, capacity: '8 Rounds', weight: '3.6 kg', action: 'Pump Action', caliber: '12 GAUGE', img: 'https://cdna.artstation.com/p/assets/images/images/019/878/478/large/carlos-morales-sm-shotgun-01f.jpg?1565379313', flip: true, category: 'SHOTGUNS' },
  { id: 'DP12', name: 'DP-12', price: 22495, capacity: '14 Rounds', weight: '4.0 kg', action: 'Double Pump', caliber: '16 GAUGE', img: 'https://cdnb.artstation.com/p/assets/images/images/015/032/659/large/carlos-morales-cmgs-dp12-00.jpg?1546801438', flip: false, category: 'SHOTGUNS' },
  { id: 'SPAS12', name: 'FRANCHI SPAS-12', price: 22495, capacity: '8 Rounds', weight: '3.6 kg', action: 'Pump / Semi', caliber: '12 GAUGE', img: 'https://cdna.artstation.com/p/assets/images/images/039/699/066/large/game-weapons-spas12-main-camera.jpg?1626687138', flip: false, category: 'SHOTGUNS' },

  // --- ASSAULT RIFLES (AR) ---
  { id: 'AR15', name: 'AR-15 TACTICAL', price: 22495, capacity: '30 Rounds', weight: '3.6 kg', action: 'Semi-Automatic', caliber: '5.56mm', img: 'https://cdnb.artstation.com/p/assets/images/images/038/298/795/large/emiel-sleegers-gun-cama.jpg?1622709260', flip: false, category: 'ASSAULT_RIFLES' },
  { id: 'SCARL', name: 'FN SCAR-L', price: 22495, capacity: '30 Rounds', weight: '3.5 kg', action: 'Select Fire', caliber: '5.56mm', img: 'https://cdnb.artstation.com/p/assets/images/images/063/012/355/large/vladyslav-narozhnyi-4-1.jpg?1684483766', flip: false, category: 'ASSAULT_RIFLES' },
  { id: 'AK74', name: 'AK-74M', price: 22495, capacity: '30 Rounds', weight: '3.4 kg', action: 'Select Fire', caliber: '5.45mm', img: 'https://cdnb.artstation.com/p/assets/images/images/026/080/777/large/alvaro-fuster-plano01-2.jpg?1587825005', flip: false, category: 'ASSAULT_RIFLES' },
  { id: 'HK416', name: 'HK 416', price: 24500, capacity: '30 Rounds', weight: '3.7 kg', action: 'Gas Operated', caliber: '5.56mm', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/385/large/vladislav-narozhnyi-hk416-main.jpg?1556736287', flip: false, category: 'ASSAULT_RIFLES' },
  { id: 'M4A1', name: 'M4A1 CARBINE', price: 22495, capacity: '30 Rounds', weight: '2.9 kg', action: 'Select Fire', caliber: '5.56mm', img: 'https://cdnb.artstation.com/p/assets/images/images/007/325/291/large/vladislav-narozhnyi-m4-main-render.jpg?1505312389', flip: true, category: 'ASSAULT_RIFLES' },
  { id: 'GROZA', name: 'OZ-14 GROZA', price: 22495, capacity: '20 Rounds', weight: '3.2 kg', action: 'Bullpup Auto', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/023/908/824/large/ohle-mathiebe-asd.jpg?1580739750', flip: false, category: 'ASSAULT_RIFLES' },
  { id: 'TYPE95', name: 'TYPE-95', price: 22495, capacity: '30 Rounds', weight: '3.25 kg', action: 'Select Fire', caliber: '5.56mm', img: 'https://cdnb.artstation.com/p/assets/images/images/004/870/763/large/hong-kim-type-95-2.jpg?1486890963', flip: true, category: 'ASSAULT_RIFLES' },
  { id: 'RK95', name: 'SAKO RK 95 TP', price: 22495, capacity: '30 Rounds', weight: '3.7 kg', action: 'Select Fire', caliber: '5.56mm', img: 'https://cdna.artstation.com/p/assets/images/images/032/564/734/large/mattias-h-mattias-h-sako-rk-95tp-1.jpg?1606821646', flip: false, category: 'ASSAULT_RIFLES' },
  { id: 'BREN', name: 'CZ 805 BREN A1', price: 22495, capacity: '30 Rounds', weight: '3.6 kg', action: 'Select Fire', caliber: '5.56mm', img: 'https://cdna.artstation.com/p/assets/images/images/074/103/752/large/parisa-mohammadsadeghi-untitled-001.jpg?1711233352', flip: false, category: 'ASSAULT_RIFLES' },
  { id: 'SAIGA12', name: 'SAIGA 12 XTS', price: 22495, capacity: '10 Rounds', weight: '3.6 kg', action: 'Semi-Auto', caliber: '12 GAUGE', img: 'https://cdna.artstation.com/p/assets/images/images/009/411/894/large/sergejs-karpovs-saiga12-xts-render-3k-fn1.jpg?1518833428', flip: false, category: 'ASSAULT_RIFLES' },

  // --- SNIPER RIFLES ---
  { id: 'MK22', name: 'BARRETT MK22', price: 22495, capacity: '10 Rounds', weight: '7.0 kg', action: 'Bolt Action', caliber: '7MM', img: 'https://cdna.artstation.com/p/assets/images/images/058/455/110/large/dreamerz-lab-1.jpg?1674190194', flip: false, category: 'SNIPER_RIFLES' },
  { id: 'SNOWOWL', name: 'SNOW OWL', price: 22495, capacity: '5 Rounds', weight: '6.2 kg', action: 'Bolt Action', caliber: '.308', img: 'https://cdna.artstation.com/p/assets/images/images/020/398/178/large/jinyi-zhu-asset.jpg?1567617654', flip: true, category: 'SNIPER_RIFLES' },
  { id: 'M82', name: 'BARRETT M82', price: 22495, capacity: '10 Rounds', weight: '13.5 kg', action: 'Semi-Auto', caliber: '50 CAL', img: 'https://cdnb.artstation.com/p/assets/images/images/009/556/217/large/madushan-wenuranga-m82-01.jpg?1519659409', flip: false, category: 'SNIPER_RIFLES' },
  { id: 'VSS', name: 'VSS VINTOREZ', price: 22495, capacity: '10 Rounds', weight: '2.6 kg', action: 'Select Fire', caliber: '9MM', img: 'https://cdna.artstation.com/p/assets/images/images/031/003/458/large/matthieu-labrie-vss-side-1.jpg?1602282112', flip: false, category: 'SNIPER_RIFLES' },
  { id: 'TAC50', name: 'MCMILLAN TAC-50', price: 22495, capacity: '5 Rounds', weight: '11.8 kg', action: 'Bolt Action', caliber: '50 CAL', img: 'https://cdna.artstation.com/p/assets/images/images/042/554/882/large/david-avakov-base-right.jpg?1634820191', flip: false, category: 'SNIPER_RIFLES' },

  // --- LAUNCHERS ---
  { id: 'RGM40', name: 'RGM-40', price: 22495, capacity: '1 Round', weight: '2.5 kg', action: 'Break Action', caliber: '40mm', img: 'https://cdna.artstation.com/p/assets/images/images/022/975/710/large/stefan-engdahl-rend3.jpg?1577552097', flip: false, category: 'LAUNCHERS' },
  { id: 'TOW', name: 'TOW MISSILE', price: 22495, capacity: '1 Round', weight: '18.0 kg', action: 'Wire-Guided', caliber: 'BGM-71', img: 'https://cdnb.artstation.com/p/assets/images/images/082/794/963/large/canoe-render-003-logo.jpg?1733935435', flip: false, category: 'LAUNCHERS' },
  { id: 'M320', name: 'M320 GRL', price: 22495, capacity: '1 Round', weight: '1.5 kg', action: 'Single Shot', caliber: '40mm', img: 'https://cdna.artstation.com/p/assets/images/images/043/651/684/large/james-mainwaring-m320-06.jpg?1637867742', flip: false, category: 'LAUNCHERS' },
  { id: 'STINGER', name: 'FIM-92J STINGER', price: 22495, capacity: '1 Round', weight: '15.2 kg', action: 'Infrared', caliber: 'Projectile', img: 'https://cdna.artstation.com/p/assets/images/images/075/667/816/large/oliver-kay-fim92j-05.jpg?1715135077', flip: true, category: 'LAUNCHERS' },
  { id: 'RPG7', name: 'RPG LAUNCHER', price: 22495, capacity: '1 Round', weight: '7.0 kg', action: 'Smoothbore', caliber: '85mm', img: 'https://cdna.artstation.com/p/assets/images/images/039/317/318/large/diptiranjan-panigrahi-rpg-5.jpg?1625567421', flip: false, category: 'LAUNCHERS' },
  { id: 'M79', name: 'M79 THUMPER', price: 22495, capacity: '1 Round', weight: '2.7 kg', action: 'Break Action', caliber: '40mm', img: 'https://cdna.artstation.com/p/assets/images/images/081/207/922/large/anton-kunstmann-tbrender-camera-3.jpg?1729658616', flip: true, category: 'LAUNCHERS' },
  { id: 'NSV', name: 'NSV HEAVY MG', price: 22495, capacity: '50 Rounds', weight: '25.0 kg', action: 'Gas Operated', caliber: '12.7mm', img: 'https://cdnb.artstation.com/p/assets/images/images/067/302/959/large/yahli-mendler-full-right-front.jpg?1695055452', flip: false, category: 'MACHINE_GUNS' },
  { id: 'BRENLMG', name: 'BREN LMG', price: 22495, capacity: '30 Rounds', weight: '10.3 kg', action: 'Select Fire', caliber: '.303', img: 'https://cdnb.artstation.com/p/assets/images/images/030/906/233/large/ryzin-art-screenshot004.jpg?1602009117', flip: false, category: 'MACHINE_GUNS' },
  { id: 'MADEUCE', name: 'MA DEUCE (M2HB)', price: 22495, capacity: '100 Rounds', weight: '38.0 kg', action: 'Recoil Operated', caliber: '50 CAL', img: 'https://cdna.artstation.com/p/assets/images/images/016/368/578/large/tim-shumaker-3.jpg?1551896691', flip: false, category: 'MACHINE_GUNS' },
  { id: 'M249', name: 'M249 SAW', price: 22495, capacity: '200 Rounds', weight: '7.5 kg', action: 'Full Auto', caliber: '5.56mm', img: 'https://cdna.artstation.com/p/assets/images/images/080/931/942/large/3dma-studios-saw-pb-01.jpg?1728933712', flip: true, category: 'MACHINE_GUNS' },
  { id: 'GATLING', name: 'GATLING GUN', price: 22495, capacity: '1000 Rounds', weight: '27.2 kg', action: 'Rotary', caliber: '7.62mm', img: 'https://cdna.artstation.com/p/assets/images/images/031/404/822/large/akash-bhatt-gatling-close.jpg?1603523410', flip: true, category: 'MACHINE_GUNS' },

  // --- GRENADES & IED ---
  { id: 'FLASHBANG', name: 'M84 FLASHBANG', price: 22495, capacity: 'Single Use', weight: '0.23 kg', action: 'Pyrotechnic', caliber: 'Stun', img: 'https://cdna.artstation.com/p/assets/images/images/056/277/092/large/jason-h-m48-fourth-new.jpg?1668861580', flip: true, category: 'GRENADES_&_IED' },
  { id: 'C4', name: 'C4 EXPLOSIVE', price: 22495, capacity: '1 Block', weight: '0.57 kg', action: 'Remote Det', caliber: 'Plastic', img: 'https://cdnb.artstation.com/p/assets/images/images/064/474/107/large/fan-cheng-tbrender-main-camera.jpg?1688002790', flip: false, category: 'GRENADES_&_IED' },
  { id: 'M67', name: 'M67 FRAG', price: 22495, capacity: 'Single Use', weight: '0.4 kg', action: 'Timed Fuse', caliber: 'Fragmentation', img: 'https://cdnb.artstation.com/p/assets/images/images/035/152/499/large/vladislav-fjh-gavrilin-shot0.jpg?1614223264', flip: false, category: 'GRENADES_&_IED' },

  // --- KNIVES ---
  { id: 'KUKRI', name: 'COMBAT KUKRI', price: 22495, capacity: 'N/A', weight: '0.6 kg', action: 'Fixed Blade', caliber: 'Steel', img: 'https://cdna.artstation.com/p/marketplace/presentation_assets/001/760/002/large/file.jpg?1654356909', flip: false, category: 'KNIVES' },
  { id: 'KARAMBIT', name: 'KARAMBIT', price: 22495, capacity: 'N/A', weight: '0.12 kg', action: 'Fixed Blade', caliber: 'Steel', img: 'https://cdna.artstation.com/p/assets/images/images/026/197/952/large/himanshu-sandhu-5k.jpg?1588155323', flip: false, category: 'KNIVES' },
  { id: 'BUTTERFLY', name: 'BUTTERFLY KNIFE', price: 22495, capacity: 'N/A', weight: '0.15 kg', action: 'Folding', caliber: 'Steel', img: 'https://cdna.artstation.com/p/assets/images/images/034/982/294/large/sean-o-brien-renders1.jpg?1613765173', flip: true, category: 'KNIVES' },
  { id: 'MACHETE', name: 'MACHETE', price: 22495, capacity: 'N/A', weight: '0.5 kg', action: 'Fixed Blade', caliber: 'Steel', img: 'https://cdna.artstation.com/p/assets/images/images/031/660/680/large/kirill-sp-8-5.jpg?1604253408', flip: false, category: 'KNIVES' },
  { id: 'TOMAHAWK', name: 'TOMAHAWK', price: 22495, capacity: 'N/A', weight: '0.7 kg', action: 'Fixed/Throw', caliber: 'Steel', img: 'https://cdna.artstation.com/p/assets/images/images/072/895/272/large/reviron-img-9.jpg?1708449581', flip: false, category: 'KNIVES' }
];


  const addToCart = (item) => setCart([...cart, item]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico] pt-24 md:pt-32">
      <Navbar />

    
<div className="relative h-[25vh] md:h-[40vh] mb-10 overflow-hidden border-b border-[#800000]/30 shadow-[0_10px_30px_rgba(128,0,0,0.1)]">
  
  
  <div 
    className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 blur-[1px] scale-105 transition-transform duration-700 hover:scale-100" 
    style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/049/495/071/small_2x/bullet-isolated-on-black-background-with-reflexion-rifle-bullets-close-up-on-black-back-cartridges-for-rifle-and-carbine-on-a-black-photo.jpg')` }} 
  />

  
  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

  {/* Text Content */}
  <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
    {/* Decorative HUD line */}
    <div className="w-16 h-[2px] bg-[#800000] mb-4 animate-pulse shadow-[0_0_10px_#800000]" />
    
    <h1 className="text-4xl md:text-7xl font-black tracking-[0.4em] uppercase text-white drop-shadow-[0_0_20px_rgba(128,0,0,0.5)] font-[Quantico]">
      ARM<span className="text-[#800000]">O</span>URY
    </h1>

    {/* Technical Subtitle / Data Point */}
    <div className="flex items-center gap-3 mt-4">
        <span className="w-2 h-2 bg-[#800000] rounded-full animate-ping" />
        <p className="text-[10px] tracking-[0.6em] text-gray-400 font-mono uppercase">
          Ballistics_Inventory_v2.04
        </p>
    </div>
  </div>

  {/* HUD Corner Accents */}
  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#800000]/40" />
  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#800000]/40" />
  <div className="absolute bottom-4 left-4 w-8 h-[2px] bg-[#800000]/30" />
  <div className="absolute bottom-4 right-4 w-8 h-[2px] bg-[#800000]/30" />
  
  {/* Scanline Effect (Optional - add to global CSS for extra grit) */}
  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />
</div>
      {/* Tabs */}
      <div className="flex justify-center gap-8 py-12">
        {["series", "caliber"].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${activeTab === tab ? "border-[#800000] text-white" : "border-transparent text-gray-500"}`}
          >
            By {tab}
          </button>
        ))}
      </div>

      {/* Series Selection Grid */}
      {activeTab === "series" && (
        <Container className="mb-5">
          <Row className="g-4">
            {seriesItems.map((item) => (
              <Col lg={4} md={6} key={item.title}>
                <Card 
                  className="bg-[#050505] border-0 rounded-0 text-white overflow-hidden group cursor-pointer"
                  onClick={() => {
                    const id = Object.keys(categoryMap).find(k => categoryMap[k].toUpperCase() === item.title.toUpperCase());
                    if (id) scrollToCategory(id);
                  }}
                >
                  <div className="position-relative" style={{ height: '240px' }}>
                    <Card.Img src={item.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute inset-0 d-flex flex-column justify-content-end p-4">
                      <h4 className="fw-black m-0 tracking-widest">{item.title}</h4>
                      <div className="w-0 group-hover:w-full h-[2px] bg-[#800000] transition-all duration-500" />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}

      {/* Caliber Selection */}
      {activeTab === "caliber" && (
        <div className="max-w-7xl mx-auto px-4 mb-20 flex justify-center gap-10 overflow-x-auto py-10">
          {caliberData.map((c, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <svg viewBox={c.viewBox} className="w-12 h-40 text-[#333] group-hover:text-[#800000] transition-all">
                <path fill="currentColor" d={c.path} />
              </svg>
              <p className="mt-4 text-[10px] font-bold tracking-widest text-gray-500 group-hover:text-white">{c.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Main Inventory Sections */}
      <Container className="pb-5">
        {Object.entries(categoryMap).map(([key, label]) => {
          const items = inventory.filter(i => i.category === key);
          if (items.length === 0) return null;

          return (
            <div key={key} id={key} className="mb-20 pt-5">
              <div className="mb-5">
                <h2 className="text-4xl font-black tracking-tighter text-white uppercase m-0">{label}</h2>
                <div className="bg-[#800000] h-[4px] w-24 mt-2" />
              </div>

              <Row className="g-4">
                {items.map((item) => (
                  <Col key={item.id} xl={3} lg={4} md={6}>
                    <Card className="bg-[#0a0a0a] border-secondary border-opacity-25 rounded-0 h-100 tactical-card position-relative overflow-hidden">
                      {/* Tactical Accents */}
                      <div className="position-absolute top-0 end-0 p-2" style={{ zIndex: 10 }}>
                         <Badge bg="transparent" className="border border-danger text-danger font-monospace px-2 py-1" style={{ fontSize: '0.6rem' }}>
                            READY
                         </Badge>
                      </div>

                      <div className="p-4 text-center bg-black border-bottom border-secondary border-opacity-10">
                        <Card.Img 
                          src={item.img} 
                          style={{ 
                            maxHeight: '140px', 
                            objectFit: 'contain', 
                            transform: item.flip ? 'scaleX(-1)' : 'none',
                            filter: 'drop-shadow(0 0 15px rgba(255,0,0,0.1))'
                          }} 
                        />
                      </div>

                      <Card.Body className="d-flex flex-column p-4">
                        <Stack direction="horizontal" className="justify-content-between align-items-start mb-3">
                          <div>
                            <h6 className="m-0 fw-black text-white">{item.name}</h6>
                            <small className="text-secondary font-monospace" style={{ fontSize: '0.6rem' }}>SN: {item.id}-TX</small>
                          </div>
                          <span className="text-danger fw-bold font-monospace">${item.price.toLocaleString()}</span>
                        </Stack>

                        <div className="flex-grow-1 mb-4">
                          {[
                            { label: "MAG", val: item.capacity },
                            { label: "WT", val: item.weight },
                            { label: "ACT", val: item.action }
                          ].map((stat, idx) => (
                            <div key={idx} className="d-flex justify-content-between mb-1 border-bottom border-secondary border-opacity-10 pb-1">
                              <span className="text-secondary fw-bold" style={{ fontSize: '0.65rem' }}>{stat.label}</span>
                              <span className="text-white font-monospace" style={{ fontSize: '0.75rem' }}>{stat.val}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          onClick={() => addToCart(item)}
                          variant="outline-light" 
                          className="rounded-0 fw-bold border-2 btn-sm py-2 hover-red-glow"
                          style={{ letterSpacing: '2px', fontSize: '0.7rem' }}
                        >
                          INITIATE ORDER
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          );
        })}
      </Container>

      {/* Cart UI */}
      <button onClick={() => setIsCartOpen(true)} className="fixed bottom-8 right-8 z-50 bg-[#800000] p-4 rounded-full shadow-lg">
        <ShoppingCart size={24} />
        {cart.length > 0 && <Badge bg="white" text="dark" className="position-absolute top-0 start-100 translate-middle rounded-circle">{cart.length}</Badge>}
      </button>

      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-md bg-[#050505] h-full border-l border-[#800000]/40 p-8">
            <div className="flex justify-between items-center mb-10 border-bottom border-secondary pb-4">
              <h3 className="text-xl font-black flex items-center gap-2"><Target className="text-[#800000]" /> LOADOUT_LOG</h3>
              <X className="cursor-pointer hover:text-[#800000]" onClick={() => setIsCartOpen(false)} />
            </div>
            <div className="overflow-y-auto h-[70vh]">
              {cart.map((item, i) => (
                <div key={i} className="flex gap-4 mb-4 bg-[#111] p-3 border-l-2 border-[#800000]">
                  <div className="flex-1">
                    <p className="text-xs font-bold">{item.name}</p>
                    <p className="text-[#800000] font-monospace">${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(i)} className="text-gray-500 hover:text-white transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <Button className="w-100 mt-5 rounded-0 fw-bold bg-[#800000] border-0 py-3">CONFIRM SHIPMENT</Button>
          </div>
        </div>
      )}

      <Footer />

      {/* Embedded CSS for effects that Bootstrap can't handle alone */}
      <style>{`
        .tactical-card:hover {
          border-color: #800000 !important;
          box-shadow: 0 0 20px rgba(128, 0, 0, 0.2);
          transform: translateY(-5px);
          transition: all 0.3s ease;
        }
        .hover-red-glow:hover {
          background-color: #800000 !important;
          border-color: #800000 !important;
          box-shadow: 0 0 15px rgba(128, 0, 0, 0.6);
        }
        .font-monospace { font-family: 'Courier New', Courier, monospace !important; }
      `}</style>
    </div>
  );
};

export default Armoury;