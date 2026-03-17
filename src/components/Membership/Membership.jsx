import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Basic', price: '29', period: 'month', popular: false,
    features: ['Access to gym floor', 'Locker room access', 'Free WiFi', '2 group classes/week', 'Basic fitness assessment'],
  },
  {
    name: 'Pro', price: '59', period: 'month', popular: true,
    features: ['Full gym access 24/7', 'All group classes', 'Personal trainer (2x/month)', 'Nutrition consultation', 'Sauna & steam room', 'Free parking'],
  },
  {
    name: 'Elite', price: '99', period: 'month', popular: false,
    features: ['Everything in Pro', 'Unlimited personal training', 'Custom meal plans', 'Recovery zone access', 'Guest passes (4/month)', 'Priority class booking', 'Exclusive events'],
  },
];

const Membership = () => {
  return (
    <section id="pricing" className="py-24 max-[768px]:py-16 bg-[var(--color-charcoal)]">
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
            Membership <span className="text-gold">Plans</span>
          </h2>
          <p className="opacity-70 text-[1.05rem] max-w-[600px] mx-auto">
            Choose the perfect plan to start your fitness journey
          </p>
        </motion.div>

        {/* Cards — items-stretch makes all cards the same height */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-[900px]:max-w-[400px] max-[900px]:mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`bg-[var(--color-black)] rounded-2xl text-center relative
                transition-all duration-400 ease-out
                flex flex-col justify-between
                py-10 px-8
                group cursor-pointer
                hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(213,163,16,0.25)]
                ${plan.popular
                  ? 'border-2 border-gold shadow-[0_20px_60px_rgba(213,163,16,0.15)]'
                  : 'border border-transparent hover:border-gold'
                }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {plan.popular && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2
                  bg-gradient-to-br from-gold to-gold-light text-black
                  px-6 py-1.5 rounded-b-[10px] text-[0.75rem] font-bold uppercase tracking-[1px]">
                  Most Popular
                </div>
              )}

              {/* Top content */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-[1px] mb-4 opacity-80">{plan.name}</h3>

                <div className="flex items-start justify-center gap-0.5 mb-8">
                  <span className="text-2xl font-bold text-gold mt-2">$</span>
                  <span className="text-6xl font-black text-gold leading-none">{plan.price}</span>
                  <span className="text-[0.9rem] opacity-50 self-end mb-2">/{plan.period}</span>
                </div>

                <ul className="text-left mb-8">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 py-2.5 text-[0.9rem] opacity-80
                        border-b border-[rgba(255,255,255,0.05)]"
                    >
                      <FaCheck className="text-gold text-xs flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button pinned to bottom */}
              <a
                href="#contact"
                className={`block w-full py-4 rounded-full font-semibold uppercase tracking-[1px]
                  text-center transition-all duration-300
                  group-hover:-translate-y-[2px] group-hover:shadow-[0_8px_25px_rgba(213,163,16,0.3)]
                  ${plan.popular
                    ? 'bg-gradient-to-br from-gold to-gold-light text-black'
                    : 'border-2 border-gold text-gold group-hover:bg-gold group-hover:text-black'
                  }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
