import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowUp } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = ['Home', 'About', 'Services', 'Trainers', 'Pricing', 'Contact'];
  const serviceLinks = ['Weight Training', 'Cardio Zone', 'Yoga & Wellness', 'CrossFit', 'Boxing', 'Spin Classes'];
  const hours = [
    { day: 'Monday - Friday', time: '5:00 AM - 10:00 PM' },
    { day: 'Saturday',        time: '6:00 AM - 8:00 PM' },
    { day: 'Sunday',          time: '7:00 AM - 6:00 PM' },
  ];

  return (
    <footer className="bg-[var(--color-charcoal)] pt-16 border-t border-[rgba(213,163,16,0.15)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 pb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Fitness Sports Center" className="h-[60px] w-[60px] rounded-full object-cover mb-4" />
            <p className="text-[0.9rem] opacity-70 leading-relaxed mb-6">
              Transform your life with us. Join the ultimate fitness community
              and achieve your goals with expert guidance.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 rounded-full bg-[rgba(213,163,16,0.1)] border border-[rgba(213,163,16,0.3)]
                    flex items-center justify-center text-gold text-[0.95rem]
                    transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-[3px]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-[1px] mb-6 relative
              after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-[30px] after:h-[2px] after:bg-gold">
              Quick Links
            </h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l} className="mb-3">
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-[0.9rem] opacity-70 transition-all duration-300
                      hover:opacity-100 hover:text-gold hover:pl-[5px]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-[1px] mb-6 relative
              after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-[30px] after:h-[2px] after:bg-gold">
              Services
            </h4>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l} className="mb-3">
                  <a
                    href="#services"
                    className="text-[0.9rem] opacity-70 transition-all duration-300
                      hover:opacity-100 hover:text-gold hover:pl-[5px]"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-[1px] mb-6 relative
              after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-[30px] after:h-[2px] after:bg-gold">
              Working Hours
            </h4>
            <ul>
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between py-2.5 border-b border-[rgba(255,255,255,0.05)]
                    text-[0.85rem] opacity-70"
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between py-6 border-t border-[rgba(255,255,255,0.08)]">
          <p className="text-[0.85rem] opacity-50">
            &copy; {new Date().getFullYear()} Fitness Sports Center. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-[42px] h-[42px] rounded-full bg-gold text-black
              flex items-center justify-center cursor-pointer
              transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_5px_20px_rgba(213,163,16,0.3)]"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
