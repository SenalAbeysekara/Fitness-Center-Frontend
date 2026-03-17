import { motion } from 'framer-motion';
import trainer1 from '../../assets/trainer1.png';
import trainer2 from '../../assets/trainer2.png';
import trainer3 from '../../assets/trainer3.png';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const trainers = [
  { name: 'Marcus Johnson', role: 'Strength & Conditioning', image: trainer1, bio: '10+ years experience in competitive bodybuilding and strength coaching.' },
  { name: 'Sarah Williams',  role: 'Yoga & Wellness',        image: trainer2, bio: 'Certified yoga instructor specializing in flexibility and mindful training.' },
  { name: 'David Chen',      role: 'CrossFit & HIIT',        image: trainer3, bio: 'Former military fitness coach with expertise in high-intensity programs.' },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 max-[768px]:py-16 bg-[var(--color-black)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl max-[768px]:text-3xl max-[480px]:text-2xl font-extrabold uppercase tracking-[2px] mb-2">
            Expert <span className="text-gold">Trainers</span>
          </h2>
          <p className="opacity-70 text-[1.05rem] max-w-[600px] mx-auto">
            Meet the dedicated professionals who will guide your fitness journey
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-[550px]:max-w-[400px] max-[550px]:mx-auto">
          {trainers.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[var(--color-charcoal)] rounded-xl overflow-hidden
                transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[350px]">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,3,4,0.9)] to-transparent
                  flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {[FaInstagram, FaTwitter, FaLinkedin].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        aria-label="Social"
                        className="w-10 h-10 rounded-full bg-[rgba(213,163,16,0.2)] border border-gold
                          flex items-center justify-center text-gold transition-all duration-300
                          hover:bg-gold hover:text-black"
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{t.name}</h3>
                <span className="text-gold text-[0.85rem] font-semibold uppercase tracking-[1px]">
                  {t.role}
                </span>
                <p className="mt-3 text-[0.9rem] opacity-70 leading-relaxed">{t.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
