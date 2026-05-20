interface ImagePlaceholderProps {
  label?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2';
  className?: string;
}

export function ImagePlaceholder({
  label = 'Imagem',
  aspectRatio = '16/9',
  className = '',
}: ImagePlaceholderProps) {
  const aspectMap = {
    '16/9': 'aspect-video',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
  };

  return (
    <div
      className={`relative w-full ${aspectMap[aspectRatio]} bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200" />
      <div className="relative z-10 flex flex-col items-center gap-2 text-gray-400">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
          <path d="M21 15l-5-5L5 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
      </div>
    </div>
  );
}
