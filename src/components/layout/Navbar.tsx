import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Về chúng tôi</a>
            <a href="#benefits" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Lợi ích</a>
            <a href="#courses" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Khóa học</a>
            <a 
              href="#register" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/30"
            >
              Đăng ký ngay
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <a href="#about" className="block text-slate-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Về chúng tôi</a>
          <a href="#benefits" className="block text-slate-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Lợi ích</a>
          <a href="#courses" className="block text-slate-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Khóa học</a>
          <a 
            href="#register" 
            className="block text-center bg-orange-500 text-white px-6 py-3 rounded-full font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Đăng ký ngay
          </a>
        </div>
      )}
    </nav>
  );
}
