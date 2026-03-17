import { motion } from 'framer-motion';
import {
  GiWeightLiftingUp, GiBoxingGlove, GiMeditation,
  GiRunningShoe, GiCycling, GiStrong,
} from 'react-icons/gi';

const services = [
  { icon: <GiWeightLiftingUp />, title: 'Weight Training', description: 'Build strength and muscle with our comprehensive free weights and machine zones.' },
  { icon: <GiRunningShoe />,     title: 'Cardio Zone',     description: 'State-of-the-art treadmills, bikes, and rowing machines for peak endurance.' },
  { icon: <GiMeditation />,      title: 'Yoga & Flexibility', description: 'Find your inner peace with guided yoga sessions and stretching programs.' },
  { icon: <GiStrong />,          title: 'CrossFit',        description: 'High-intensity functional training to push your limits and build total-body fitness.' },
  { icon: <GiBoxingGlove />,     title: 'Boxing',          description: 'Learn boxing techniques while getting an incredible full-body workout.' },
  { icon: <GiCycling />,         title: 'Spin Classes',    description: 'High-energy group cycling sessions with motivating music and expert instructors.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section id="services" className="py-24 max-[768px]:py-16 bg-[var(--color-charcoal)]">
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
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="opacity-70 text-[1.05rem] max-w-[600px] mx-auto">
            World-class programs designed to help you reach your fitness goals
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-[var(--color-black)] p-10 rounded-xl text-center relative overflow-hidden
                border border-transparent transition-all duration-300
                hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                group"
            >
              <div className="text-5xl text-gold mb-6 transition-transform duration-300 group-hover:scale-115">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold uppercase tracking-[1px] mb-3">{s.title}</h3>
              <p className="text-[0.9rem] opacity-70 leading-relaxed">{s.description}</p>
              <div className="w-[50px] h-[3px] bg-gold mx-auto mt-6 rounded-sm
                transition-all duration-300 group-hover:w-[80px]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
