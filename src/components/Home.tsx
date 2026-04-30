import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Award, FileText, CheckCircle, 
  Users, Briefcase, Building2, HardHat, Pickaxe, 
  ChevronRight, Construction, MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { LOGOS } from '@/constants/logos';

const IMAGES = {
  hero: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/hero-construction-f2a5e95d-1777404856598.webp",
  civil: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/civil-engineering-10c9203a-1777404856432.webp",
  maintenance: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/infrastructure-maintenance-e99b6d33-1777404856231.webp",
  commercial: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/commercial-development-21fbb358-1777404859110.webp",
  plans: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/engineering-team-aa9cd613-1777404860128.webp"
};

export const Home = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  const stats = [
    { label: 'Years Experience', value: '15+', icon: Briefcase },
    { label: 'Projects Completed', value: '450+', icon: CheckCircle },
    { label: 'Professional Staff', value: '120+', icon: Users },
    { label: 'CIDB Rating', value: 'Level 7', icon: Award },
  ];

  const featuredServices = [
    {
      title: 'Building Construction',
      desc: 'Residential, commercial, and industrial developments of any scale.',
      icon: Building2,
      img: IMAGES.hero
    },
    {
      title: 'Civil Engineering',
      desc: 'Expertise in roads, stormwater, drainage, and concrete works.',
      icon: HardHat,
      img: IMAGES.civil
    },
    {
      title: 'Infrastructure Maintenance',
      desc: 'Comprehensive maintenance for government and private sectors.',
      icon: Pickaxe,
      img: IMAGES.maintenance
    }
  ];

  const trustBadges = [
    { name: 'CIDB Registered', logo: LOGOS.CERT_1 },
    { name: 'CSD Compliant', logo: LOGOS.CERT_2 },
    { name: 'BBBEE Verified', logo: LOGOS.CERT_3 },
    { name: 'COID Certified', logo: LOGOS.CERT_1 }, // Reusing for variety
  ];

  const faqs = [
    {
      q: "Is Rigney Enterprises CIDB registered?",
      a: "Yes, Rigney Enterprises is a Level 7 CIDB registered contractor, allowing us to participate in multi-million rand government and private sector infrastructure projects."
    },
    {
      q: "What regions do you operate in?",
      a: "While our headquarters are in Johannesburg, we provide construction and civil engineering services across all provinces in South Africa, including Gauteng, Western Cape, and KwaZulu-Natal."
    },
    {
      q: "Do you offer project management services?",
      a: "Absolutely. We provide end-to-end project management, from initial planning and technical drawings to site supervision and final compliance certification."
    },
    {
      q: "How can I request a tender document?",
      a: "You can download our basic compliance documents from our Tender Portal. For project-specific tender inquiries, please contact our tender desk at tenders@rigneyenterprises.co.za."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            className="w-full h-full object-cover scale-105"
            alt="Construction site Sandton"
          />
          <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gold"></div>
              <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm">Rigney Enterprises</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight">
              Building Excellence. <br />
              <span className="text-gold">Delivering Trust.</span>
            </h1>
            <p className="text-xl text-cream/80 mb-10 max-w-2xl leading-relaxed">
              Rigney Enterprises provides professional building construction, civil engineering, 
              infrastructure maintenance, and renovation services across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setActivePage('quote')}
                className="bg-gold hover:bg-gold/90 text-charcoal font-bold text-lg h-16 px-8 rounded-none group"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => setActivePage('portfolio')}
                className="border-cream text-cream hover:bg-cream hover:text-charcoal font-bold text-lg h-16 px-8 rounded-none bg-transparent"
              >
                View Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="bg-charcoal py-10 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {trustBadges.map((badge, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, filter: 'grayscale(1)' }}
              whileInView={{ opacity: 1, filter: 'grayscale(0)' }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="h-16 w-32 flex items-center justify-center p-2 bg-white/5 rounded backdrop-blur-sm border border-white/10 group-hover:border-gold/50 transition-colors">
                <img src={badge.logo} alt={badge.name} className="max-h-full max-w-full object-contain" />
              </div>
              <span className="font-bold text-[10px] tracking-[0.2em] text-gold uppercase">{badge.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Stats */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <stat.icon className="text-gold w-10 h-10" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-charcoal mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-beige/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-charcoal">World-Class Construction Solutions</h3>
            </div>
            <Button 
              variant="link" 
              className="text-gold font-bold flex items-center gap-2 px-0"
              onClick={() => setActivePage('services')}
            >
              View All Services <ChevronRight size={20} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setActivePage('services')}
              >
                <div className="relative h-80 overflow-hidden mb-6">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-2">
                      <service.icon className="text-gold w-8 h-8" />
                      <h4 className="text-xl font-bold text-charcoal">{service.title}</h4>
                    </div>
                    <p className="text-charcoal/70 text-sm">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl font-bold mb-8">Built on a Foundation of <br />Professional Credibility</h3>
              <p className="text-cream/60 text-lg mb-12">
                We maintain the highest levels of accreditation and compliance to ensure that every project we undertake is managed with absolute precision and legal integrity.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Quality Assurance', icon: ShieldCheck, desc: 'Highest standard materials and workmanship.' },
                  { title: 'Safety First', icon: HardHat, desc: 'Zero-harm policy on all project sites.' },
                  { title: 'Engineering Precision', icon: Construction, desc: 'Optimized timelines and resource allocation.' },
                  { title: 'Local Expertise', icon: MapPin, desc: 'Deep understanding of South African terrain.' }
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-3 mb-3 text-gold">
                      <item.icon size={24} />
                      <h4 className="font-bold text-cream">{item.title}</h4>
                    </div>
                    <p className="text-cream/50 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={IMAGES.commercial} 
                alt="Commercial Project"
                className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-10 text-charcoal hidden md:block">
                <p className="text-5xl font-bold mb-1">Level 1</p>
                <p className="font-bold tracking-widest uppercase text-xs">B-BBEE Contributor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Information Desk</h2>
            <h3 className="text-4xl font-bold text-charcoal">Frequently Asked Questions</h3>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-charcoal/10 px-6 bg-white">
                <AccordionTrigger className="text-left font-bold text-charcoal hover:text-gold hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal/70 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.plans} 
            className="w-full h-full object-cover"
            alt="Engineering plans"
          />
          <div className="absolute inset-0 bg-charcoal/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-cream mb-8">Ready to Build Your Next Project?</h2>
          <p className="text-xl text-cream/70 mb-12 max-w-2xl mx-auto">
            From large scale infrastructure to luxury renovations, we deliver on time and within budget.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              className="bg-gold hover:bg-gold/90 text-charcoal font-bold text-lg h-16 px-10 rounded-none"
              onClick={() => setActivePage('quote')}
            >
              Get a Professional Quote
            </Button>
            <Button 
              variant="outline"
              className="border-cream text-cream hover:bg-cream hover:text-charcoal font-bold text-lg h-16 px-10 rounded-none bg-transparent"
              onClick={() => setActivePage('contact')}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};