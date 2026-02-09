import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'wordmark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', className = '' }) => {
  const sizes = {
    sm: { mark: 32, text: 13 },
    md: { mark: 48, text: 16 },
    lg: { mark: 64, text: 22 }
  };

  const sizeConfig = sizes[size];

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 64 64"
        width={sizeConfig.mark}
        height={sizeConfig.mark}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle - gold stroke */}
        <circle cx="32" cy="32" r="30" fill="none" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Inner circle - gold stroke subtle */}
        <circle cx="32" cy="32" r="27" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        
        {/* Center filled circle - gold */}
        <circle cx="32" cy="32" r="25" fill="#D4AF37" opacity="0.08" />
        
        {/* LH monogram - text */}
        <text
          x="32"
          y="38"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fontFamily="'Playfair Display', serif"
          fill="#D4AF37"
          letterSpacing="-1"
        >
          LH
        </text>
      </svg>
    );
  }

  if (variant === 'wordmark') {
    return (
      <span
        className={`font-serif font-bold tracking-[0.08em] text-white ${className}`}
        style={{
          fontSize: `${sizeConfig.text}px`,
          letterSpacing: '0.08em',
          fontFamily: '"Playfair Display", serif',
          fontWeight: 600,
          textTransform: 'uppercase'
        }}
      >
        LOWVELD<span className="text-[#D4AF37]">HUB</span>
      </span>
    );
  }

  // Full logo (mark + wordmark)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        width={sizeConfig.mark}
        height={sizeConfig.mark}
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer circle - gold stroke */}
        <circle cx="32" cy="32" r="30" fill="none" stroke="#D4AF37" strokeWidth="2" />
        
        {/* Inner circle - gold stroke subtle */}
        <circle cx="32" cy="32" r="27" fill="none" stroke="#D4AF37" strokeWidth="0.8" opacity="0.5" />
        
        {/* Center filled circle - gold */}
        <circle cx="32" cy="32" r="25" fill="#D4AF37" opacity="0.08" />
        
        {/* LH monogram - text */}
        <text
          x="32"
          y="38"
          textAnchor="middle"
          fontSize="18"
          fontWeight="700"
          fontFamily="'Playfair Display', serif"
          fill="#D4AF37"
          letterSpacing="-1"
        >
          LH
        </text>
      </svg>
      
      <span
        className="font-serif font-bold text-white"
        style={{
          fontSize: `${sizeConfig.text}px`,
          letterSpacing: '0.08em',
          fontFamily: '"Playfair Display", serif',
          fontWeight: 600,
          textTransform: 'uppercase'
        }}
      >
        LOWVELD<span className="text-[#D4AF37]">HUB</span>
      </span>
    </div>
  );
};
