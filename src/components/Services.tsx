import React from 'react';
import { Building2, HardHat, Pickaxe, Paintbrush, Briefcase, FileSignature, ArrowRight, Shield, TrendingUp, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const IMAGES = {
  compliance: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/commercial-development-21fbb358-1777404859110.webp"
};

export const Services = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  const services = [
    {
      title: 'Building Construction',
      icon: Building2,
      desc: 'Expert construction of residential housing, commercial office spaces, and large-scale industrial developments.',
      benefits: ['Quality architectural execution', 'Rigorous safety standards', 'Timeline adherence'],
      details: 'Residential, commercial, industrial developments'
    },
    {
      title: 'Civil Engineering',
      icon: HardHat,
      desc: 'Professional civil works focusing on critical infrastructure and large-scale public and private works.',
      benefits: ['Precision road works', 'Sustainable stormwater management', 'Structural concrete expertise'],
      details: 'Roads, stormwater, drainage, concrete works'
    },
    {
      title: 'Infrastructure Maintenance',
      icon: Pickaxe,
      desc: 'Long-term maintenance contracts for public infrastructure and private commercial properties.',
      benefits: ['Proactive site inspections', 'Rapid repair response', 'Cost-effective lifecycle management'],
      details: 'Government and private sector maintenance'
    },
    {
      title: 'Renovations',
      icon: Paintbrush,
      desc: 'High-end property upgrades and structural improvements to revitalize existing buildings.',
      benefits: ['Modern architectural upgrades', 'Structural integrity focused', 'Enhanced property value'],
      details: 'Property upgrades, refurbishments'
    },
    {
      title: 'Project Management',
      icon: Briefcase,
      desc: 'End-to-end oversight of construction projects ensuring compliance, safety, and operational excellence.',
      benefits: ['Comprehensive planning', 'Safety & compliance oversight', 'Strict budget control'],
      details: 'Planning, supervision, execution'
    },
    {
      title: 'Tender Support',
      icon: FileSignature,
      desc: 'Assisting partners and clients in professional government and private sector tender participations.',
      benefits: ['Documentation compliance', 'Strategic bidding advice', 'Technical proposal support'],
      details: 'Government and private tenders'
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      <section className="bg-charcoal py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Capabilities</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-8 leading-tight">Comprehensive Construction <br />& Engineering Services</h2>
            <p className="text-xl text-cream/70 max-w-3xl mx-auto">
              We provide a full spectrum of services tailored to meet the rigorous demands of South African infrastructure and development sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full border-none rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col bg-white">
                <CardHeader className="bg-white border-b border-gold/10 p-8">
                  <div className="bg-charcoal w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                    <service.icon className="text-gold group-hover:text-charcoal w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-charcoal mb-2">{service.title}</CardTitle>
                  <p className="text-charcoal/60 text-sm font-semibold uppercase tracking-widest">{service.details}</p>
                </CardHeader>
                <CardContent className="p-8 flex-grow">
                  <p className="text-charcoal/70 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 bg-gold rounded-full"></div>
                        <span className="text-charcoal/80 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button 
                    className="w-full bg-gold hover:bg-gold/90 text-charcoal font-bold rounded-none h-12"
                    onClick={() => setActivePage('quote')}
                  >
                    Request Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-beige/10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4">Professional Standards</h2>
              <h3 className="text-4xl font-bold text-charcoal mb-8">Why Rigney Enterprises?</h3>
              <p className="text-charcoal/70 text-lg mb-12">
                Our approach combines engineering precision with corporate integrity, making us the partner of choice for complex infrastructure projects.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Quality Assurance', icon: Shield, desc: 'Highest standard materials and workmanship.' },
                  { title: 'Safety First', icon: HardHat, desc: 'Zero-harm policy on all project sites.' },
                  { title: 'Strategic Efficiency', icon: TrendingUp, desc: 'Optimized timelines and resource allocation.' },
                  { title: 'Compliance', icon: UserCheck, desc: 'Fully accredited with South African authorities.' }
                ].map((item) => (
                  <div key={item.title}>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="text-gold w-6 h-6" />
                      <h4 className="font-bold text-charcoal">{item.title}</h4>
                    </div>
                    <p className="text-charcoal/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={IMAGES.compliance} 
                alt="Compliance"
                className="shadow-2xl grayscale"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold p-10 text-charcoal hidden md:block">
                <p className="text-5xl font-bold mb-1">15+</p>
                <p className="font-bold tracking-widest uppercase text-xs">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};