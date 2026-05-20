import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  label?: string;
}

export function BackButton({ label = 'Projetos' }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2d48bd] transition-colors duration-200 group"
    >
      <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
      {label}
    </button>
  );
}
