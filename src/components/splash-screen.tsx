"use client";

import React, { useEffect, useState } from 'react';
import { Microscope } from 'lucide-react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  // All slogans combined
  const slogans = [
    "Digitizing Dairy Science.",
    "Smart Tech for Dairy.",
    "Science Meets Dairy.",
    "Your Dairy, Our Logic.",
    "Digital Dairy. Real Results.",
    "From Milk to Molecules — Digitizing Every Step.",
    "Your Complete Digital Solution for Dairy Processing & Testing.",
    "Smart Dairy, Smarter Chemistry.",
    "Precision, Purity, and Progress — All in One Hub.",
    "Transforming Dairy Science into Digital Simplicity.",
    "Where Dairy Processing Meets Innovation.",
    "Integrating Technology with the Art of Dairy.",
    "Empowering Dairy Processing through Intelligent Automation.",
    "From Collection to Chemistry — One Smart Platform.",
    "Digital Intelligence for Dairy Innovation.",
    "Where Data Meets Dairy Science.",
    "Redefining Dairy with Smart Technology.",
    "Simplifying Complex Dairy Operations Digitally.",
    "Smart Science for a Smarter Dairy Future.",
    "Precision in Every Drop, Accuracy in Every Test.",
    "Digitizing Dairy Labs for Reliable Results.",
    "From Milk Molecules to Digital Metrics.",
    "Innovating Dairy Chemistry through Technology.",
    "Ensuring Quality through Digital Precision.",
    "Precision. Purity. Performance.",
    "Smart Dairy. Simple Tech.",
    "Where Dairy Becomes Digital.",
    "Tech for Tomorrow's Dairy.",
    "Digital Dairy. Real Science.",
    "Think Smart, Do Fast."
  ];

  const [currentSlogan] = useState(() => {
    return slogans[Math.floor(Math.random() * slogans.length)];
  });

  // Different colors for each spoke segment (base)
  const baseSpokeColors = [
    "#3B82F6", // Blue
    "#8B5CF6", // Purple
    "#EC4899", // Pink
    "#10B981", // Green
    "#F59E0B", // Amber
    "#EF4444", // Red
    "#06B6D4", // Cyan
    "#6366F1", // Indigo
    "#84CC16", // Lime
    "#F97316", // Orange
    "#14B8A6", // Teal
    "#A855F7"  // Violet
  ];

  // Theme + Center design options
  const themeOptions = ['whiteBlue', 'multicolorRing', 'custom']; // 1.a,1.b,1.c
  const centerOptions = ['milkDropCircuit', 'gearMilkFusion', 'networkHub']; // 2.a,2.b,2.c

  // randomly choose theme & center design on mount (cold start)
  const [selectedTheme] = useState(() =>
    themeOptions[Math.floor(Math.random() * themeOptions.length)]
  );
  const [selectedCenter] = useState(() =>
    centerOptions[Math.floor(Math.random() * centerOptions.length)]
  );

  // derive speaker colors based on theme (if whiteBlue then soft blue palette else base)
  const spokeColors = (() => {
    if (selectedTheme === 'whiteBlue') {
      return [
        "#EFF6FF","#DBEAFE","#BFDBFE","#93C5FD","#60A5FA","#3B82F6",
        "#60A5FA","#93C5FD","#BFDBFE","#DBEAFE","#EFF6FF","#DDEAFE"
      ];
    }
    if (selectedTheme === 'custom') {
      // subtle grayscale / two-tone
      return [
        "#94A3B8","#CBD5E1","#E2E8F0","#94A3B8","#94A3B8","#64748B",
        "#CBD5E1","#E2E8F0","#64748B","#94A3B8","#CBD5E1","#E2E8F0"
      ];
    }
    // default multicolorRing
    return baseSpokeColors;
  })();

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onFinished]);

  // Helper: render selected center SVG (inline). You can replace with <img src="..."> or <SvgPicture /> using your assets.
  const CenterSVG = ({ size = 80 }: { size?: number }) => {
    if (selectedCenter === 'milkDropCircuit') {
      // 2.a Milk Drop + Circuit Lines
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mdcGrad" x1="0" x2="1">
              <stop offset="0" stopColor="#E0F2FE" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path d="M40 8 C34 20 24 32 24 44 A16 16 0 1 0 56 44 C56 32 46 20 40 8 Z" fill="url(#mdcGrad)" />
          {/* simple circuit traces */}
          <rect x="36" y="36" width="8" height="4" rx="1" fill="#0369A1" />
          <circle cx="30" cy="26" r="2.5" fill="#0369A1" />
          <circle cx="50" cy="26" r="2.5" fill="#0369A1" />
          <path d="M30 26 L36 38 L44 38 L50 26" stroke="#0369A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      );
    }

    if (selectedCenter === 'networkHub') {
      // 2.c Network Hub inside Milk Drop
      return (
        <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nhGrad">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#E6F6F9"/>
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="26" fill="url(#nhGrad)" />
          <circle cx="40" cy="40" r="6" fill="#2563EB" />
          <path d="M40 16 L40 28" stroke="#0EA5A4" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 52 L40 64" stroke="#0EA5A4" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 40 L28 40" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
          <path d="M52 40 L64 40" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="40" cy="28" r="2.6" fill="#06B6D4"/>
          <circle cx="28" cy="40" r="2.6" fill="#F59E0B"/>
          <circle cx="52" cy="40" r="2.6" fill="#EC4899"/>
        </svg>
      );
    }

    // default gear + milk (gearMilkFusion) 2.b
    return (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gmfGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#DCEFFF" />
          </linearGradient>
        </defs>
        {/* milk droplet backdrop */}
        <path d="M40 10 C35 20 28 32 28 44 A12 12 0 1 0 52 44 C52 32 45 20 40 10 Z" fill="url(#gmfGrad)"/>
        {/* gear */}
        <g transform="translate(40,44) scale(0.9) translate(-40,-44)">
          <circle cx="40" cy="36" r="8" fill="#E6EEF9" stroke="#254E90" strokeWidth="1.6"/>
          {/* gear teeth (simple) */}
          <path d="M40 24 L42.5 28 L46 27 L44 32 L48 34 L44 36 L46 41 L42 40 L40 44 L38 40 L34 41 L36 36 L32 34 L36 32 L34 27 L37.5 28 Z"
            fill="#3B82F6" transform="translate(0,6)"/>
          <circle cx="40" cy="36" r="3.5" fill="#FFFFFF" stroke="#254E90" strokeWidth="1"/>
        </g>
      </svg>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
        <style jsx>{`
            .title-container {
                animation: fade-in-out 4s ease-in-out 1s forwards, fade-out 1s ease-in 5s forwards;
             }
             .container-fade-out{
                animation: fade-out 1s ease-in 5s forwards;
             }
             .drawing-animation {
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: draw-outline 2.5s ease-in-out 0.5s forwards;
             }
             
             @keyframes fade-in-out {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 1; }
             }
             
             @keyframes fade-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
             }
             
             @keyframes draw-outline {
                to {
                    stroke-dashoffset: 0;
                }
             }

             /* Wheel segment fill animation */
             .wheel-segment {
                animation: fill-segment 0.3s ease-in-out forwards;
                opacity: 0;
             }

             @keyframes fill-segment {
                to {
                    opacity: 1;
                }
             }

             /* Spoke animation */
             .spoke-line {
                stroke-dasharray: 100;
                stroke-dashoffset: 100;
                animation: draw-spoke 1.5s ease-in-out forwards;
             }

             @keyframes draw-spoke {
                to {
                    stroke-dashoffset: 0;
                }
             }

             /* Colorful Microscope appearance after wheel completes */
             .microscope-color {
                animation: microscope-appear 0.8s ease-out 2.8s forwards;
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
             }

             @keyframes microscope-appear {
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
             }

             /* Star Animation */
             .star {
                display: inline-block;
                color: #FFD700;
                animation: star-twinkle 1.5s ease-in-out infinite;
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
                font-size: 1.5rem;
             }
             
             .star:nth-child(1) { animation-delay: 0s; }
             .star:nth-child(2) { animation-delay: 0.3s; }
             .star:nth-child(3) { animation-delay: 0.6s; }
             
             @keyframes star-twinkle {
                0%, 100% {
                    opacity: 1;
                    transform: scale(1);
                }
                50% {
                    opacity: 0.5;
                    transform: scale(0.85);
                }
             }

             /* Premium Tagline */
             .premium-tagline {
                margin-top: 1rem;
                padding: 0.75rem 1.5rem 0.5rem 1.5rem;
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.9));
                border: 2px solid rgba(59, 130, 246, 0.3);
                border-radius: 50px;
                box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
                animation: fade-in-out 4s ease-in-out 1.5s forwards, fade-out 1s ease-in 5s forwards, border-glow 3s ease-in-out 2s infinite;
                opacity: 0;
             }
             
             @keyframes border-glow {
                0%, 100% {
                    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.2);
                    border-color: rgba(59, 130, 246, 0.3);
                }
                50% {
                    box-shadow: 0 4px 30px rgba(59, 130, 246, 0.5), 0 0 20px rgba(255, 215, 0, 0.3);
                    border-color: rgba(59, 130, 246, 0.6);
                }
             }
             
             .premium-text {
                font-weight: 800;
                font-size: 1.1rem;
                background: linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa);
                background-size: 200% 200%;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: gradient-flow 3s ease infinite;
                letter-spacing: 0.5px;
                display: block;
                text-align: center;
             }
             
             @keyframes gradient-flow {
                0%, 100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
             }

             .stars-container {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                margin-top: 0.25rem;
             }

             /* Responsive Design */
             @media (max-width: 768px) {
                .premium-text {
                    font-size: 0.95rem;
                }
                .star {
                    font-size: 1.2rem;
                }
             }
        `}</style>
        
        <div className="relative mb-4 container-fade-out w-36 h-36">
           <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Colored wheel segments (pizza slices) */}
              {[...Array(12)].map((_, i) => {
                const angle1 = (i * Math.PI / 6) - (Math.PI / 12);
                const angle2 = ((i + 1) * Math.PI / 6) - (Math.PI / 12);
                const outerRadius = 37.5;
                const innerRadius = 30;
                
                const x1 = 50 + innerRadius * Math.cos(angle1);
                const y1 = 50 + innerRadius * Math.sin(angle1);
                const x2 = 50 + outerRadius * Math.cos(angle1);
                const y2 = 50 + outerRadius * Math.sin(angle1);
                const x3 = 50 + outerRadius * Math.cos(angle2);
                const y3 = 50 + outerRadius * Math.sin(angle2);
                const x4 = 50 + innerRadius * Math.cos(angle2);
                const y4 = 50 + innerRadius * Math.sin(angle2);
                
                return (
                  <path
                    key={`segment-${i}`}
                    className="wheel-segment"
                    d={`M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 0 0 ${x1} ${y1} Z`}
                    fill={spokeColors[i]}
                    opacity="0.7"
                    style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                  />
                );
              })}
              
              {/* Outer Circle */}
              <path className="drawing-animation text-gray-600" stroke="currentColor" strokeWidth="3" d="M87.5,50a37.5,37.5 0 1,1 -75,0a37.5,37.5 0 1,1 75,0" style={{ animationDelay: '0.2s' }} />
              
              {/* Inner Circle */}
              <path className="drawing-animation text-gray-600" stroke="currentColor" strokeWidth="3" d="M80,50a30,30 0 1,1 -60,0a30,30 0 1,1 60,0" style={{ animationDelay: '0.4s' }} />
              
              {/* Spokes with different colors */}
              {[...Array(12)].map((_, i) => (
                  <path
                      key={i}
                      className="spoke-line"
                      stroke={spokeColors[i]}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      d={`M ${50 + 30 * Math.cos(i * Math.PI / 6)} ${50 + 30 * Math.sin(i * Math.PI / 6)} L ${50 + 37.5 * Math.cos(i * Math.PI / 6)} ${50 + 37.5 * Math.sin(i * Math.PI / 6)}`}
                      style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                  />
              ))}
              
              {/* Center circle filled with gradient */}
              <circle 
                cx="50" 
                cy="50" 
                r="28" 
                fill="url(#centerGradient)" 
                className="drawing-animation"
                style={{ animationDelay: '0.6s' }}
              />
              
              <defs>
                <radialGradient id="centerGradient">
                  <stop offset="0%" stopColor={selectedTheme === 'whiteBlue' ? "#ffffff" : "#ffffff"} />
                  <stop offset="100%" stopColor={selectedTheme === 'whiteBlue' ? "#eef7ff" : "#f3f4f6"} />
                </radialGradient>
              </defs>
           </svg>
           
           {/* Center design: this renders the selected center design (milk drop/gear/network) */}
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ pointerEvents: 'none' }}>
             <CenterSVG size={72} />
           </div>

           {/* Colorful Microscope Icon that appears after wheel completes (kept as original) */}
           <div className="microscope-color absolute top-1/2 left-1/2">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Base */}
                <ellipse cx="40" cy="75" rx="30" ry="3" fill="#2C3E50"/>
                
                {/* Stand/Pillar */}
                <rect x="36" y="50" width="8" height="25" fill="#7F8C8D" rx="1"/>
                <rect x="34" y="50" width="12" height="4" fill="#95A5A6" rx="1"/>
                
                {/* Arm */}
                <rect x="30" y="30" width="6" height="22" fill="#7F8C8D" rx="2" transform="rotate(-15 33 30)"/>
                
                {/* Body */}
                <rect x="28" y="22" width="22" height="16" fill="#3B82F6" rx="2"/>
                <circle cx="39" cy="22" r="4" fill="#8B5CF6"/>
                
                {/* Eyepiece */}
                <rect x="36" y="12" width="6" height="12" fill="#10B981" rx="1"/>
                <ellipse cx="39" cy="11" rx="3" ry="2" fill="#34495E"/>
                
                {/* Objective Lenses */}
                <circle cx="39" cy="40" r="6" fill="#EC4899"/>
                <circle cx="39" cy="40" r="4" fill="#F59E0B"/>
                <circle cx="39" cy="40" r="2.5" fill="#EF4444" opacity="0.8"/>
                
                {/* Revolving Nosepiece */}
                <circle cx="39" cy="36" r="7" fill="#6366F1"/>
                
                {/* Stage */}
                <rect x="28" y="44" width="22" height="3" fill="#14B8A6" rx="1"/>
                
                {/* Stage Clips */}
                <rect x="27" y="44" width="2" height="4" fill="#5D6D7E" rx="0.5"/>
                <rect x="49" y="44" width="2" height="4" fill="#5D6D7E" rx="0.5"/>
                
                {/* Focus Knobs */}
                <circle cx="52" cy="48" r="3" fill="#EF4444"/>
                <circle cx="52" cy="54" r="3" fill="#F59E0B"/>
                
                {/* Light Source */}
                <rect x="34" y="48" width="10" height="6" fill="#FBBF24" rx="1"/>
                <circle cx="39" cy="51" r="2" fill="#FCD34D" opacity="0.9"/>
              </svg>
           </div>
        </div>

        <div className="title-container opacity-0 text-center px-4">
             <h1 className="text-3xl md:text-5xl font-extrabold font-headline">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                    Welcome To Dairy Hub
                </span>
            </h1>
            <p className="mt-2 text-lg md:text-xl font-semibold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    {currentSlogan}
                </span>
            </p>

            {/* Premium Tagline with Stars Below */}
            <div className="premium-tagline">
                <span className="premium-text">
                    Advanced Dairy App
                </span>
                <div className="stars-container">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                </div>
            </div>
        </div>
    </div>
  );
}