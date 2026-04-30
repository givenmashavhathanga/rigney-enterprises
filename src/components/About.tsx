import React from 'react';
import { motion } from 'framer-motion';
import { Building2, History, Target, Eye, ShieldCheck, Heart, Award, CheckCircle } from 'lucide-react';

const IMAGES = {
  about: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/engineering-team-aa9cd613-1777404480158.webp",
  project: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/engineering-team-aa9cd613-1777404860128.webp"
};

export const About = () => {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero */}
      <section className="bg-charcoal py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Legacy</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-8 leading-tight">Building South Africa, <br />One Project at a Time</h2>
            <p className="text-xl text-cream/70 leading-relaxed">
              Founded on the principles of engineering excellence and corporate integrity, Rigney Enterprises has grown into a leading force in the South African construction landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Expertises */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <History className="text-gold w-8 h-8" />
              <h3 className="text-3xl font-bold text-charcoal">15 Years of Excellence</h3>
            </div>
            <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
              What started as a specialized renovation firm has expanded into a multi-disciplinary construction and civil engineering enterprise. Our journey is marked by successful delivery of critical infrastructure and high-value private developments.
            </p>
            <div className="space-y-6">
              {[
                'CIDB Level 7 Registered Contractor',
                'B-BBEE Level 1 Contributor',
                'ISO 9001:2015 Quality Management Certified',
                'Proudly South African Engineering Excellence'
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle className="text-gold w-6 h-6" />
                  <span className="font-bold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src={IMAGES.project} 
              alt="Engineering Team"
              className="shadow-2xl w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -top-10 -right-10 bg-white p-8 shadow-xl hidden xl:block">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="text-gold w-10 h-10" />
                <h4 className="font-bold text-charcoal">Quality <br />Guaranteed</h4>
              </div>
              <p className="text-sm text-charcoal/50 max-w-[200px]">Strict adherence to South African Building Regulations (SANS 10400).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-beige/10 py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 shadow-lg border-t-4 border-gold"
          >
            <Target className="text-gold w-12 h-12 mb-8" />
            <h3 className="text-3xl font-bold text-charcoal mb-6">Our Mission</h3>
            <p className="text-charcoal/70 leading-relaxed text-lg">
              To deliver superior construction and engineering solutions that exceed client expectations through innovation, safety, and sustainable practices, contributing to the growth of South Africa's infrastructure.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-charcoal p-12 shadow-lg border-t-4 border-gold"
          >
            <Eye className="text-gold w-12 h-12 mb-8" />
            <h3 className="text-3xl font-bold text-cream mb-6">Our Vision</h3>
            <p className="text-cream/70 leading-relaxed text-lg">
              To be the most trusted and respected construction partner in Southern Africa, recognized for our commitment to quality, community development, and engineering leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Foundation</h2>
          <h3 className="text-4xl font-bold text-charcoal">Core Values</h3>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: 'Integrity', icon: ShieldCheck, desc: 'Honesty and transparency in every contract.' },
            { title: 'Excellence', icon: Award, desc: 'Striving for perfection in every brick laid.' },
            { title: 'Safety', icon: Building2, desc: 'Zero compromise on the health of our staff.' },
            { title: 'Growth', icon: Heart, desc: 'Developing local talent and communities.' }
          ].map((val) => (
            <div key={val.title} className="text-center p-8 bg-white shadow-sm hover:shadow-md transition-all border-b-2 border-transparent hover:border-gold">
              <val.icon className="text-gold w-12 h-12 mx-auto mb-6" />
              <h4 className="font-bold text-charcoal text-xl mb-3">{val.title}</h4>
              <p className="text-charcoal/60 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};