import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { BookOpen, ExternalLink, Shield } from 'lucide-react';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";


const LibraryBanner = 'https://i.pinimg.com/736x/84/15/b5/8415b57b5f1469181c28f76744d516f2.jpg';

const GuidesAndBooks = () => {
  // --- BOOK DATA ---
  const popularBooks = [
    {
      title: "100 DEADLY SKILLS",
      author: "CLINT EMERSON",
      desc: "A Practical Guide Detailing Survival Techniques Inspired By Special Forces.",
      img: "https://media3.ubook.com/catalog/book-cover-image/549940/400x600/1811111245-100-deadly-skills-the-seal-operatives-guide-to-eluding-pursuers-evading-capture-and-surviving-any-dangerous-situation.jpg",
      link: "https://drive.google.com/file/d/1IVO2CjZ3WpU99k30NPxU0j0j0bJmp4d_/view?usp=sharing"
    },
    {
      title: "HACKING: THE ART OF EXPLOITATION",
      author: "ERICKSON",
      desc: "A Comprehensive Guide To Understand The Technical Foundations Of Hacking.",
      img: "https://m.media-amazon.com/images/I/91dLDp5XzYL._UF1000,1000_QL80_.jpg",
      link: "#"
    },
    {
      title: "LAW FOR THE LAYMAN",
      author: "MINISTRY OF INFO, INDIA",
      desc: "A Practical Guide That Presents Essential Legal Concepts In Accessible Language.",
      img: "https://m.media-amazon.com/images/I/41K-UqYyDVL.jpg", // Optimized link from your placeholder
      link: "https://drive.google.com/file/d/1Q7_cltT-XB9O_nl9WvspnfXqAxnvga0K/view?usp=sharing"
    },
    {
      title: "THE ART OF DECEPTION",
      author: "KEVIN D. MITNICK",
      desc: "Explores The Psychology Of Social Engineering And Human Manipulation.",
      img: "https://m.media-amazon.com/images/I/61vKRgeuSGL._AC_UF1000,1000_QL80_.jpg",
      link: "https://drive.google.com/file/d/1m7coiUOY88lXM7gwXsfiF2Wv5iz2x2Do/view?usp=sharing"
    },
    {
      title: "HANDBOOK OF CRIME PREVENTION",
      author: "LAWRENCE J. FENNELLY",
      desc: "Practical Solutions For Safeguarding Individuals And Property.",
      img: "https://m.media-amazon.com/images/I/4179SEOOobL._UF1000,1000_QL80_.jpg",
      link: "https://drive.google.com/file/d/1m7coiUOY88lXM7gwXsfiF2Wv5iz2x2Do/view?usp=sharing"
    },
    {
      title: "METASPLOIT",
      author: "DEVON KEARNS",
      desc: "A Hands-On Book That Teaches Ethical Hackers How To Use The Framework.",
      img: "https://m.media-amazon.com/images/I/91920apJNBL._UF1000,1000_QL80_.jpg",
      link: "https://drive.google.com/file/d/1m7coiUOY88lXM7gwXsfiF2Wv5iz2x2Do/view?usp=sharing"
    },
    {
      title: "SECURITY ENGINEERING",
      author: "ROSS ANDERSON",
      desc: "A Comprehensive Guide To Designing Secure Systems.",
      img: "https://m.media-amazon.com/images/I/71UnvnvCQEL._AC_UF1000,1000_QL80_.jpg",
      link: "https://drive.google.com/file/d/1m7coiUOY88lXM7gwXsfiF2Wv5iz2x2Do/view?usp=sharing"
    },
    {
      title: "US ARMY SURVIVAL MANUAL",
      author: "U.S ARMY",
      desc: "Allrounded Survival Manual For Operatives.",
      img: "https://m.media-amazon.com/images/I/51WZWjgY1dL._AC_UF1000,1000_QL80_.jpg",
      link: "https://drive.google.com/file/d/1m7coiUOY88lXM7gwXsfiF2Wv5iz2x2Do/view?usp=sharing"
    }
  ];
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <div className="bg-black min-h-screen text-white font-[Quantico] pt-24 md:pt-32">
      <Navbar />

      {/* --- HERO BANNER --- */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30" 
          style={{ backgroundImage: `url(${LibraryBanner})` }} 
        />
        <Container className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-[0.4em] mb-4">
            GUIDES & <span className="text-[#800000]">BOOKS</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base font-sans">
              <span className="text-5xl text-[#800000] font-black float-left mr-2 leading-none">W</span>
              elcome To The Open Source Library Page. A Free To Read Section Of E-Books From 
              Guardian Fortitude Charitable Trust, Offering Free & Accessible Resources To Empower 
              Your Journey Towards Knowledge.
            </p>
          </div>
        </Container>
      </div>

      {/* --- OWNER'S FAVOURITE (Featured) --- */}
      <section className="py-20">
        <Container>
          <div className="border border-white/10 bg-[#050505] p-1 shadow-2xl">
            <Row className="g-0 align-items-center">
              <Col md={4}>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRd3VIeHhNoH2TsFCjDDpCEgfVVkuJCfbSxKRT8vJ9yoGr1azKFU6NrBtqruE4A75tts&usqp=CAU" 
                  className="w-100 h-100 object-fit-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Featured"
                />
              </Col>
              <Col md={8} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="text-[#800000]" size={20} />
                  <span className="text-[10px] tracking-[0.5em] font-bold text-gray-500 uppercase">Owner's Favourite</span>
                </div>
                <h2 className="text-4xl font-black mb-2 tracking-tighter">THE ULTIMATE SNIPER</h2>
                <h4 className="text-[#800000] font-bold mb-6 tracking-widest uppercase">By John L. Plaster</h4>
                <a 
                  href="https://drive.google.com/file/d/1CIa4pyDlPDxFjiSby9e8TYEgyQtiWv9T/view?usp=sharing" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#800000] text-white px-8 py-3 font-black text-xs tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  READ ASSET <ExternalLink size={14} />
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* --- MOST POPULAR GRID --- */}
      <div className="bg-black min-h-screen text-white font-[Quantico]">
      {/* --- MOST POPULAR GRID --- */}
      <section className="py-20 bg-[#030303]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-[0.3em] uppercase">
              MOST <span className="text-[#800000]">POPULAR</span>
            </h2>
            <hr className="w-20 mx-auto border-[#800000] border-2 opacity-100 mt-4" />
          </div>

          <Row className="gy-5">
            {popularBooks.map((book, idx) => (
              <Col key={idx} xs={12} sm={6} lg={3}>
                <div className="group h-full flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-[#800000]/40 transition-all duration-500 rounded-sm overflow-hidden shadow-xl">
                  
                  {/* Image Container with fixed Aspect Ratio to prevent jumping */}
                  <div className="relative aspect-[2/3] overflow-hidden bg-[#111]">
                    <img 
                      src={book.img} 
                      className="w-100 h-100 object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      alt={book.title}
                    />
                    {/* Dark Overlay that lightens on hover */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
                  </div>
                  
                  {/* Content Area - Using flex-grow to push button down */}
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-[13px] font-black tracking-widest uppercase mb-1 leading-tight text-white">
                        {book.title}
                      </h3>
                      <p className="text-[10px] text-[#800000] font-bold uppercase tracking-widest">
                        {book.author}
                      </p>
                    </div>

                    <p className="text-gray-400 text-[11px] leading-relaxed mb-6 font-sans italic opacity-80">
                      {book.desc}
                    </p>
                    
                    {/* Fixed Bottom Button Wrapper */}
                    <div className="mt-auto pt-4">
                        <a 
                            href={book.link} 
                            target="_blank" 
                            rel="noreferrer"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="d-flex align-items-center justify-content-center gap-2 w-100 py-3 transition-all uppercase no-underline shadow-lg"
                            style={{ 
                            border: '1px solid #800000',
                            backgroundColor: hoveredIndex === idx ? 'white' : '#800000',
                            color: hoveredIndex === idx ? 'black' : 'white', // Manual override
                            fontWeight: '900',
                            fontSize: '10px',
                            letterSpacing: '0.2em'
                            }}
                        >
                            <BookOpen size={14} /> VIEW DOCUMENT
                        </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>

      <Footer />
    </div>
  );
};

export default GuidesAndBooks;