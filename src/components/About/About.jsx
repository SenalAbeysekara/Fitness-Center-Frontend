import { motion } from 'framer-motion';
import aboutImg from '../../assets/about.png';

const About = () => {
  return (
    <section id="about" className="py-24 max-[768px]:py-16 bg-[var(--color-black)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={aboutImg}
              alt="Our Gym"
              className="rounded-xl w-full h-[500px] max-[900px]:h-[350px] object-cover"
            />
            {/* Accent border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-xl -z-10 max-[900px]:hidden" />
            {/* Experience badge */}
            <div className="absolute -bottom-5 -right-5 max-[900px]:right-2.5 max-[900px]:-bottom-2.5
              bg-gradient-to-br from-gold to-gold-dark p-5 rounded-xl text-center
              shadow-[0_10px_30px_rgba(213,163,16,0.3)]">
              <h3 className="text-3xl font-extrabold text-black leading-none">3+</h3>
              <p className="text-[0.8rem] font-semibold text-black uppercase tracking-[1px]">Years Experience</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block text-gold font-semibold uppercase tracking-[2px] text-[0.85rem] mb-3">
              About Us
            </span>
            <h2 className="text-4xl max-[480px]:text-[1.8rem] font-extrabold uppercase mb-6 leading-tight">
              We Are <span className="text-gold">Fitness Sports Center</span>
            </h2>
            <p className="opacity-80 mb-4 leading-relaxed">
              Established in 2023, Fitness Sports Center is more than just a gym —
              it's a lifestyle. Our state-of-the-art facility features the latest
              equipment, dedicated training zones, and a community of passionate
              fitness enthusiasts.
            </p>
            <p className="opacity-80 mb-8 leading-relaxed">
              Whether you're a beginner looking to start your fitness journey or a
              seasoned athlete pushing your limits, our expert trainers and diverse
              programs are designed to help you achieve your goals.
            </p>

            {/* Feature cards */}
            <div className="flex flex-col gap-3">
              {[
                { icon: '💪', title: 'Modern Equipment', desc: 'Latest fitness technology and machines' },
                { icon: '🎯', title: 'Personal Training', desc: 'Customized workout plans for your goals' },
                { icon: '🥗', title: 'Nutrition Guidance', desc: 'Expert diet plans and supplements advice' },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex items-center gap-4 p-4 bg-[var(--color-charcoal)] rounded-xl
                    transition-all duration-300 hover:translate-x-2.5 hover:border-l-[3px] hover:border-gold"
                >
                  <div className="text-3xl min-w-[50px] h-[50px] flex items-center justify-center
                    bg-[rgba(213,163,16,0.1)] rounded-[10px]">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{f.title}</h4>
                    <p className="text-[0.85rem] opacity-60">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
