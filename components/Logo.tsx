import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  onDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", onDark = false }) => {
  // Brand color from the provided logo image (vibrant red)
  const brandRed = "#ff3344";
  const textColor = onDark ? "text-white" : "text-slate-900";
  
  // Use a unique ID for each instance of the logo to prevent mask conflicts
  const uniqueId = useId();
  const maskId = `logo-hole-mask-${uniqueId}`;

  return (
    <div className={`flex items-center gap-3 ${className} select-none`}>
      {/* Icon: 8-pointed star with a hole */}
      <div className="relative w-11 h-11 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full transition-colors duration-300" style={{ color: brandRed }}>
          <defs>
            <mask id={maskId}>
              <rect width="100" height="100" fill="white" />
              <circle cx="50" cy="50" r="22" fill="black" />
            </mask>
          </defs>
          <g mask={`url(#${maskId})`}>
            <g transform="translate(50,50)">
               {/* Square 1 */}
               <rect x="-36" y="-36" width="72" height="72" fill="currentColor" rx="2" />
               {/* Square 2 (Rotated 45deg) */}
               <rect x="-36" y="-36" width="72" height="72" fill="currentColor" rx="2" transform="rotate(45)" />
            </g>
          </g>
        </svg>
      </div>
      
      {/* Text Stack: Smart / Renowable / Energy */}
      <div className={`flex flex-col justify-center font-bold tracking-tight leading-[0.95] ${textColor}`}>
        <span className="text-[13px]">Smart</span>
        <span className="text-[13px]">Renowable</span>
        <span className="text-[13px]" style={{ color: brandRed }}>Energy</span>
      </div>
    </div>
  );
};

export default Logo;