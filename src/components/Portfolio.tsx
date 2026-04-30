import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Calendar, DollarSign, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const IMAGES = {
  residential: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/hero-construction-f2a5e95d-1777404856598.webp",
  civil: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/civil-engineering-10c9203a-1777404856432.webp",
  renovation: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/luxury-renovation-699790cd-1777404859490.webp",
  maintenance: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/infrastructure-maintenance-e99b6d33-1777404856231.webp"
};

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      name: 'Residential Housing Development',
      location: 'Johannesburg, Gauteng',
      value: 'R2,500,000',
      timeline: '12 Months',
      category: 'Residential',
      img: IMAGES.residential,
      scope: ['Foundations', 'Brickwork', 'Roofing', 'Plumbing', 'Electrical'],
      description: 'A multi-unit luxury housing development focused on modern aesthetics and structural durability.'
    },
    {
      id: 2,
      name: 'Stormwater Infrastructure Upgrade',
      location: 'Pretoria, Gauteng',
      value: 'R12,800,000',
      timeline: '18 Months',
      category: 'Civil',
      img: IMAGES.civil,
      scope: ['Excavation', 'Concrete Pipe Laying', 'Road Restoration', 'Drainage Systems'],
      description: 'Critical infrastructure project to mitigate seasonal flooding in high-density areas.'
    },
    {
      id: 3,
      name: 'Commercial Office Renovation',
      location: 'Sandton, JHB',
      value: 'R4,200,000',
      timeline: '6 Months',
      category: 'Renovation',
      img: IMAGES.renovation,
      scope: ['Interior Refurbishment', 'Electrical Re-wiring', 'HVAC Installation', 'Custom Joinery'],
      description: 'Complete structural and aesthetic overhaul of a Grade-A office building.'
    },
    {
      id: 4,
      name: 'Municipal Road Maintenance',
      location: 'Ekurhuleni',
      value: 'R8,500,000',
      timeline: '24 Months (Contract)',
      category: 'Maintenance',
      img: IMAGES.maintenance,
      scope: ['Pothole Repair', 'Resurfacing', 'Line Marking', 'Side-walk Maintenance'],
      description: 'Ongoing infrastructure maintenance to ensure safety and longevity of municipal road networks.'
    }
  ];

  return (
    <div className="bg-cream min-h-screen pb-24">
      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Work</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">Proven Excellence <br />in Every Sector</h2>
            <p className="text-xl text-cream/70">
              A showcase of our multi-million rand projects delivering value to both government and private sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer relative overflow-hidden shadow-2xl bg-white"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button className="bg-gold text-charcoal font-bold rounded-none">View Details</Button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-xs font-bold text-gold uppercase tracking-widest">{project.category}</p>
                  <p className="text-charcoal font-bold">{project.value}</p>
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{project.name}</h3>
                <div className="flex items-center gap-2 text-charcoal/50 text-sm">
                  <MapPin size={16} className="text-gold" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-charcoal/90 backdrop-blur-md"
            ></motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-5xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-charcoal text-gold hover:bg-gold hover:text-charcoal transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              <div className="grid lg:grid-cols-2">
                <div className="h-full">
                  <img src={selectedProject.img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="p-8 md:p-12">
                  <p className="text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">Project Overview</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-8">{selectedProject.name}</h2>
                  
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="flex items-center gap-2 text-charcoal/40 mb-1">
                        <DollarSign size={14} />
                        <span className="text-xs font-bold uppercase">Project Value</span>
                      </div>
                      <p className="font-bold text-charcoal text-lg">{selectedProject.value}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-charcoal/40 mb-1">
                        <Calendar size={14} />
                        <span className="text-xs font-bold uppercase">Timeline</span>
                      </div>
                      <p className="font-bold text-charcoal text-lg">{selectedProject.timeline}</p>
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 text-charcoal/40 mb-1">
                        <MapPin size={14} />
                        <span className="text-xs font-bold uppercase">Location</span>
                      </div>
                      <p className="font-bold text-charcoal text-lg">{selectedProject.location}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2">
                        <Briefcase size={18} className="text-gold" />
                        Scope of Work
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.scope.map((item: string) => (
                          <span key={item} className="bg-beige/10 text-charcoal/70 px-4 py-2 text-sm font-medium border border-beige/20">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-charcoal mb-3">Project Description</h4>
                      <p className="text-charcoal/70 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};