import React from 'react';

export default function PulseWaveform() {
  return (
    <div className="relative w-full h-16 overflow-hidden rounded-lg flex items-center">
      {/* Dark background glow behind waveform */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/25 to-emerald-500/20 rounded-lg blur-xl"></div>
      
      <svg
        className="w-full h-full relative z-10"
        viewBox="0 0 600 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pulseGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#c084fc" stopOpacity="1" />
            <stop offset="65%" stopColor="#34d399" stopOpacity="1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="fillGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.0" />
          </linearGradient>

          <filter id="glowDark" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Shading under waveform */}
        <path
          d="M0 45 C40 45, 60 25, 90 25 C120 25, 140 60, 170 60 C200 60, 220 30, 250 30 C280 30, 300 45, 330 45 C360 45, 380 15, 410 15 C440 15, 460 50, 490 50 C520 50, 550 35, 600 35 L600 80 L0 80 Z"
          fill="url(#fillGradientDark)"
        />

        {/* Secondary wave line */}
        <path
          d="M0 50 C50 50, 70 35, 100 35 C130 35, 150 55, 180 55 C210 55, 230 40, 260 40 C290 40, 310 50, 340 50 C370 50, 390 25, 420 25 C450 25, 470 45, 500 45 C530 45, 560 40, 600 40"
          stroke="#6366f1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        {/* Primary Animated Waveform */}
        <path
          d="M0 45 C40 45, 60 25, 90 25 C120 25, 140 60, 170 60 C200 60, 220 30, 250 30 C280 30, 300 45, 330 45 C360 45, 380 15, 410 15 C440 15, 460 50, 490 50 C520 50, 550 35, 600 35"
          stroke="url(#pulseGradientDark)"
          strokeWidth="3.5"
          strokeLinecap="round"
          filter="url(#glowDark)"
        />

        {/* Pulse Peak Indicator Dot */}
        <circle cx="410" cy="15" r="5" fill="#34d399">
          <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="410" cy="15" r="11" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.6">
          <animate attributeName="r" values="7;15;7" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
