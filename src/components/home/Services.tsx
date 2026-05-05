import { motion } from 'motion/react';
import { Truck, ShoppingCart, Hospital, Users } from 'lucide-react';

const services = [
  {
    title: 'Pharmaceutical Importation',
    description: 'Sourcing and importing high-quality medicines from globally recognized manufacturers to ensure safety and effectiveness.',
    icon: Truck,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Wholesale & Retail Distribution',
    description: 'Efficient distribution network supplying pharmacies and retail outlets across the region with essential drugs.',
    icon: ShoppingCart,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Hospital & Pharmacy Supply',
    description: 'Dedicated supply chain for hospitals and clinics, providing diagnostic equipment and critical care medications.',
    icon: Hospital,
    color: 'bg-medical-50 text-medical-600',
  },
  {
    title: 'Medical Consultation Services',
    description: 'Professional guidance on pharmaceutical management and healthcare solutions for institutions and NGOs.',
    icon: Users,
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 medical-grid opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-medical-600 font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Healthcare Supply Services</h3>
          <p className="text-gray-600">
            We bridge the gap between global medicine manufacturers and the people who need them most, ensuring reliability at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.2 } 
              }}
              className="p-8 rounded-3xl glass-card transition-colors group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
