import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[rgba(4,3,4,0.95)] backdrop-blur-[10px] py-2 shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
            : 'bg-[rgba(255,255,255,0.95)] backdrop-blur-[10px] py-2 shadow-[0_2px_20px_rgba(0,0,0,0.1)]'
          : 'py-4'
      }`}
    >
      <div className={`max-w-[1200px] mx-auto px-6 flex items-center justify-between ${!scrolled || darkMode ? 'text-[#f1f0eb]' : 'text-[#2c2c2c]'}`}>
        {/* Logo */}
        <a href="#home">
          <img
            src={logo}
            alt="Fitness Sports Center"
            className={`transition-all duration-300 ${scrolled ? 'h-[45px] w-[45px]' : 'h-[55px] w-[55px]'} rounded-full object-cover`}
          />
        </a>

        {/* Desktop links */}
        <ul
          className={`
            flex items-center gap-8
            max-[900px]:fixed max-[900px]:top-0 max-[900px]:h-screen max-[900px]:w-[280px]
            max-[900px]:bg-[rgba(4,3,4,0.98)] max-[900px]:backdrop-blur-[20px]
            max-[900px]:flex-col max-[900px]:justify-center max-[900px]:gap-8
            max-[900px]:border-l max-[900px]:border-gray-light
            max-[900px]:transition-[right] max-[900px]:duration-400
            ${isOpen ? 'max-[900px]:right-0' : 'max-[900px]:right-[-100%]'}
          `}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="font-medium text-[0.95rem] uppercase tracking-[1px] relative transition-colors duration-300
                  hover:text-gold
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0
                  after:h-[2px] after:bg-gold after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* Mobile-only button */}
          <li className="hidden max-[900px]:block mt-4">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-block px-7 py-3 rounded-full bg-gradient-to-br from-gold to-gold-light
                text-black font-semibold uppercase tracking-[1px] text-sm
                transition-all duration-300 hover:-translate-y-[3px]
                hover:shadow-[0_10px_30px_rgba(213,163,16,0.3)]"
            >
              Join Now
            </a>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
              text-lg transition-all duration-300
              hover:border-gold hover:text-gold cursor-pointer
              ${!scrolled || darkMode ? 'border-[rgba(255,255,255,0.3)] text-[#f1f0eb]' : 'border-[#c5c5bf] text-[#2c2c2c]'}`}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <a
            href="#contact"
            className="hidden min-[901px]:inline-block px-5 py-2.5 rounded-full
              bg-gradient-to-br from-gold to-gold-light text-black font-semibold
              uppercase tracking-[1px] text-[0.85rem] transition-all duration-300
              hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(213,163,16,0.3)]"
          >
            Join Now
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className={`hidden max-[900px]:block bg-transparent border-none
              text-3xl cursor-pointer transition-colors duration-300 hover:text-gold
              ${!scrolled || darkMode ? 'text-[#f1f0eb]' : 'text-[#2c2c2c]'}`}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
