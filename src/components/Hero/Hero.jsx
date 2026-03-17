import { motion } from 'framer-motion';
import heroBg from '../../assets/hero-bg.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(4,3,4,0.92)] via-[rgba(4,3,4,0.75)] to-[rgba(41,33,19,0.6)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-20 w-full text-[#f1f0eb]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-[700px]"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-5 py-2 bg-[rgba(213,163,16,0.12)] border border-[rgba(213,163,16,0.3)]
              rounded-full text-[0.85rem] font-medium text-gold mb-6"
          >
            🏋️ Welcome to the Ultimate Fitness Experience
          </motion.span>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] mb-5 tracking-[1px] text-[#f1f0eb]">
            Build Your{' '}
            <span className="bg-gradient-to-br from-gold to-gold-light bg-clip-text text-transparent">
              Dream Body
            </span>{' '}
            With Us
          </h1>

          {/* Sub text */}
          <p className="text-lg opacity-80 mb-8 leading-relaxed max-w-[520px] text-[#f1f0eb]">
            Transform your life at Fitness Sports Center. World-class equipment,
            expert trainers, and a community that pushes you beyond your limits.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-12 max-[768px]:flex-col">
            <a
              href="#pricing"
              className="inline-block px-9 py-3.5 rounded-full bg-gradient-to-br from-gold to-gold-light
                text-black font-semibold uppercase tracking-[1px] text-center
                transition-all duration-300 hover:-translate-y-[3px]
                hover:shadow-[0_10px_30px_rgba(213,163,16,0.3)]"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="inline-block px-9 py-3.5 rounded-full border-2 border-gold
                text-gold font-semibold uppercase tracking-[1px] text-center
                transition-all duration-300 hover:bg-gold hover:text-black hover:-translate-y-[3px]"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 pt-8 border-t border-[rgba(255,255,255,0.1)]
            max-[480px]:flex-col max-[480px]:gap-4 max-[768px]:gap-6">
            {[
              { val: '500+', label: 'Active Members' },
              { val: '10+', label: 'Expert Trainers' },
              { val: '15+', label: 'Programs' },
            ].map((s) => (
              <div key={s.label}>
                <h3 className="text-3xl font-extrabold text-gold max-[768px]:text-2xl">{s.val}</h3>
                <p className="text-[0.85rem] opacity-60 uppercase tracking-[1px] text-[#f1f0eb]">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
        w-6 h-10 border-2 border-[rgba(213,163,16,0.4)] rounded-xl
        flex justify-center pt-1.5">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-2 bg-gold rounded-sm"
        />
      </div>
    </section>
  );
};

export default Hero;
