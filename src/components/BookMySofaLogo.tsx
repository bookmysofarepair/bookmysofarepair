import React from 'react';

interface BookMySofaLogoProps {
  variant?: 'light' | 'dark'; // 'light' for dark background, 'dark' for light background
  className?: string;
  withTagline?: boolean;
}

export const BookMySofaLogo: React.FC<BookMySofaLogoProps> = ({
  variant = 'dark',
  className = 'h-11 w-auto',
  withTagline = false
}) => {
  const textColor = variant === 'light' ? '#f4f4f5' : '#1e2226';
  const redColor = '#e3274b';
  const redDark = '#bf1839';

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 540 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} select-none`}
        aria-label="Book My Sofa Repair Logo"
      >
        {/* Left Text: 'book' */}
        <text
          x="20"
          y="104"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="84"
          letterSpacing="-1.5px"
        >
          book
        </text>

        {/* Center: Red Classic Chesterfield Sofa Icon */}
        <g transform="translate(196, 20)">
          {/* Main Sofa Body */}
          <path
            d="M 24 16 C 26 2, 114 2, 116 16 C 124 14, 134 26, 134 40 C 146 44, 154 58, 150 72 C 146 84, 136 88, 126 88 L 126 95 L 118 95 L 120 88 L 20 88 L 22 95 L 14 95 L 14 88 C 4 88, -6 84, -10 72 C -14 58, -6 44, 6 40 C 6 26, 16 14, 24 16 Z"
            fill={redColor}
          />

          {/* Armrest Contour Shadow Lines */}
          <path
            d="M 12 44 C 6 48, 4 60, 8 72 C 11 80, 18 84, 25 84"
            stroke={redDark}
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 128 44 C 134 48, 136 60, 132 72 C 129 80, 122 84, 115 84"
            stroke={redDark}
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Seat Cushion Divider Line */}
          <path
            d="M 20 64 C 48 67, 92 67, 120 64"
            stroke={redDark}
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.65"
          />

          {/* Sofa Legs */}
          <path d="M 17 88 L 15 97 L 23 97 L 21 88 Z" fill="#9e122d" />
          <path d="M 119 88 L 117 97 L 125 97 L 123 88 Z" fill="#9e122d" />

          {/* Fluid Brush Script 'My' */}
          <g transform="translate(18, 6) rotate(-10)">
            {/* 'M' stroke */}
            <path
              d="M 22 46 C 26 32, 34 20, 42 16 C 46 14, 48 18, 43 28 C 39 36, 33 46, 30 52 C 28 55, 33 52, 38 43 C 44 32, 51 22, 57 23 C 60 24, 61 28, 58 35 C 54 44, 49 53, 47 57 C 51 53, 60 37, 69 34 C 74 32, 77 36, 73 45 C 69 55, 63 60, 60 62"
              stroke="#ffffff"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* 'y' stroke with loop */}
            <path
              d="M 68 40 C 73 48, 77 56, 81 56 C 85 56, 89 48, 93 36 M 92 37 C 88 47, 82 58, 77 69 C 72 79, 63 88, 54 84 C 47 80, 52 70, 62 67 C 72 64, 82 55, 87 46"
              stroke="#ffffff"
              strokeWidth="6.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </g>

        {/* Right Text: 'sofa' */}
        <text
          x="356"
          y="104"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="84"
          letterSpacing="-1.5px"
        >
          sofa
        </text>

        {/* Red Accent Divider Line */}
        <line
          x1="20"
          y1="126"
          x2="335"
          y2="126"
          stroke={redColor}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Subtitle: 'REPAIR' on bottom right */}
        <text
          x="360"
          y="166"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="37"
          letterSpacing="9px"
        >
          REPAIR
        </text>
      </svg>

      {withTagline && (
        <div className="hidden sm:flex flex-col border-l border-stone-300 pl-3 py-0.5">
          <span className="text-[10px] font-extrabold tracking-wider uppercase text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200 w-fit">
            Chennai Recliner Hub
          </span>
          <span className="text-[11px] text-stone-500 font-medium mt-0.5">
            Doorstep Specialists
          </span>
        </div>
      )}
    </div>
  );
};
