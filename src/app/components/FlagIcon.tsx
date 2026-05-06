interface FlagIconProps {
  country: 'br' | 'gb' | 'es';
  className?: string;
}

export function FlagIcon({ country, className = "w-5 h-5" }: FlagIconProps) {
  const baseClasses = `${className} rounded-full overflow-hidden border border-gray-200`;
  
  switch (country) {
    case 'br':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 20 20" className="w-full h-full">
            <rect width="20" height="20" fill="#009b3a"/>
            <polygon points="10,2 18,10 10,18 2,10" fill="#fedf00"/>
            <circle cx="10" cy="10" r="3.5" fill="#002776"/>
            <path d="M7 10.5 Q10 8.5 13 10.5 Q10 12.5 7 10.5" fill="#009b3a" stroke="#fedf00" strokeWidth="0.3"/>
          </svg>
        </div>
      );
    
    case 'gb':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 20 20" className="w-full h-full">
            <rect width="20" height="20" fill="#012169"/>
            <path d="M0,0 L20,14 L20,12 L4,0 Z M0,20 L16,20 L0,6 Z M20,20 L0,6 L0,8 L16,20 Z M20,0 L4,0 L20,14 Z" fill="#ffffff"/>
            <path d="M0,0 L20,14 L20,11.5 L5.5,0 Z M0,20 L14.5,20 L0,8.5 Z M20,20 L0,8.5 L0,5.5 L14.5,20 Z M20,0 L5.5,0 L20,11.5 Z" fill="#c8102e"/>
            <rect x="8" y="0" width="4" height="20" fill="#ffffff"/>
            <rect x="0" y="8" width="20" height="4" fill="#ffffff"/>
            <rect x="9" y="0" width="2" height="20" fill="#c8102e"/>
            <rect x="0" y="9" width="20" height="2" fill="#c8102e"/>
          </svg>
        </div>
      );
    
    case 'es':
      return (
        <div className={baseClasses}>
          <svg viewBox="0 0 20 20" className="w-full h-full">
            <rect width="20" height="5" y="0" fill="#aa151b"/>
            <rect width="20" height="10" y="5" fill="#f1bf00"/>
            <rect width="20" height="5" y="15" fill="#aa151b"/>
            <g transform="translate(6,10)">
              <rect x="0" y="-2" width="1.5" height="4" fill="#aa151b"/>
              <rect x="0.2" y="-1.5" width="1.1" height="1" fill="#f1bf00"/>
              <rect x="0.2" y="-0.3" width="1.1" height="0.6" fill="#f1bf00"/>
              <rect x="0.2" y="0.7" width="1.1" height="1" fill="#f1bf00"/>
            </g>
          </svg>
        </div>
      );
    
    default:
      return <div className={baseClasses} />;
  }
}