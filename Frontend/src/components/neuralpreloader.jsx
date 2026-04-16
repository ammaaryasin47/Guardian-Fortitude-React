import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import Logo from "../assets/Logo.png";

const DissolveNetPreloader = ({ onFinished }) => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particlesRef = useRef([]);
  const activeBeamsRef = useRef([]); // Move beams to a Ref to prevent re-render lag
  const [isEnding, setIsEnding] = useState(false);

  useEffect(() => {
    // Start dissolve effect
    const dissolveTimer = setTimeout(() => setIsEnding(true), 2500);

    // Give extra padding for the fade to finish completely
    const finishTimer = setTimeout(() => {
      if (onFinished) onFinished();
    }, 3800); 

    return () => {
      clearTimeout(dissolveTimer);
      clearTimeout(finishTimer);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [onFinished]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const particleCount = 150;
    const connectionDist = 140;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Beam {
      constructor(p1, p2, isOutgoing = false) {
        this.p1 = p1;
        this.p2 = p2;
        this.progress = 0;
        this.active = true;
        // Faster speed for the final "explosion"
        this.speed = isOutgoing ? 0.045 : 0.02; 
      }
      update() {
        this.progress += this.speed;
        if (this.progress >= 1) this.active = false;
      }
      draw(ctx) {
        if (!this.active) return;
        const x = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
        const y = this.p1.y + (this.p2.y - this.p1.y) * this.progress;
        ctx.shadowColor = '#800000';
        ctx.shadowBlur = 10;
        ctx.fillStyle = '#ff1a1a';
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    if (particlesRef.current.length === 0) {
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    }

    const draw = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // STAGGERED BEAM SPAWNING
      if (isEnding) {
        // Only spawn 2 new beams per frame during the dissolve to prevent CPU lag
        if (activeBeamsRef.current.length < 80) {
          const centerNode = { x: canvas.width / 2, y: canvas.height / 2 };
          for(let k = 0; k < 2; k++) {
            const randomTarget = particlesRef.current[Math.floor(Math.random() * particlesRef.current.length)];
            activeBeamsRef.current.push(new Beam(centerNode, randomTarget, true));
          }
        }
      } else {
        // Normal state spawning
        if (Math.random() < 0.02 && activeBeamsRef.current.length < 10) {
          const p = particlesRef.current[Math.floor(Math.random() * particlesRef.current.length)];
          const target = particlesRef.current[Math.floor(Math.random() * particlesRef.current.length)];
          activeBeamsRef.current.push(new Beam(p, target));
        }
      }

      // Update Particles and Lines
      particlesRef.current.forEach((p, i) => {
        p.update();
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < connectionDist) {
            const alpha = isEnding ? 0.05 : (1 - dist / connectionDist) * 0.6;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      // Update and draw Beams
      activeBeamsRef.current.forEach(b => {
        b.update();
        b.draw(ctx);
      });
      activeBeamsRef.current = activeBeamsRef.current.filter(b => b.active);

      animationFrameId.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isEnding]); 

  return (
    <div className={`fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center overflow-hidden transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) ${isEnding ? 'opacity-0 scale-[1.05] pointer-events-none' : 'opacity-100 scale-100'}`}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className={`relative z-50 flex flex-col items-center transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) ${isEnding ? 'opacity-0 blur-3xl scale-125' : 'scale-100 opacity-100'}`}>
        <div className="relative w-40 h-40 flex items-center justify-center">
          <img 
            src={Logo}
            alt="Core" 
            className="w-full h-full object-contain brightness-110 animate-pulse transition-opacity" 
          />
          <div className="absolute -inset-4 rounded-full shadow-[0_0_20px_rgba(128,0,0,0.3)] animate-[spin_12s_linear_infinite]" />
          <div className="absolute -inset-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)] animate-[spin_24s_linear_reverse_infinite]" />
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center gap-3 justify-center opacity-70">
            <ShieldCheck className="text-[#800000]" size={14}/>
            <p className="text-[10px] tracking-[0.8em] text-zinc-400 font-black uppercase">Transferring_Core_Data</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default DissolveNetPreloader;