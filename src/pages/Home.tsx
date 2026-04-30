import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Blueprint3D from "@/components/Blueprint3D";

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "250+" },
  { label: "Expert Engineers", value: "45" },
  { label: "Value Delivered", value: "R500M+" },
];

const certifications = [
  { name: "CIDB Registered", logo: "CIDB" },
  { name: "CSD Compliant", logo: "CSD" },
  { name: "BBBEE Verified", logo: "B-BBEE" },
  { name: "COID Certified", logo: "COID" },
];

export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-charcoal">
        {/* 3D Blueprint Background */}
        <Blueprint3D />

        {/* Hero Content Overlay */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <Badge className="bg-gold text-white border-none mb-6 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
              Building South Africa
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8">
              Building <span className="text-gold">Excellence.</span><br />
              Delivering <span className="text-gold">Trust.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 font-light mb-10 md:mb-12 leading-relaxed max-w-2xl">
              Rigney Enterprises provides professional building construction, civil engineering, and infrastructure maintenance across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Button asChild size="lg" className="w-full sm:w-auto bg-gold hover:bg-white hover:text-charcoal transition-all duration-500">
                <Link to="/request-quote">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline-white" size="lg" className="w-full sm:w-auto">
                <Link to="/portfolio">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
          <div className="w-[1px] h-12 bg-gold/50" />
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="bg-charcoal py-10 md:py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center justify-center md:justify-start gap-3 text-white">
                <div className="h-8 w-8 bg-gold/20 rounded flex items-center justify-center border border-gold/40 shrink-0">
                  <span className="text-[8px] font-bold text-gold">{cert.logo}</span>
                </div>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-2">{stat.value}</h3>
                <p className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cream -skew-x-12 translate-x-1/2 hidden md:block" />
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">About Rigney Enterprises</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-6 md:mb-8 leading-tight">
              A Legacy of Quality and Structural Integrity.
            </h2>
            <p className="text-slate text-base md:text-lg mb-8 leading-relaxed">
              Based in South Africa, Rigney Enterprises has established itself as a leading force in the construction and civil engineering sector. Our commitment to quality, safety, and innovation allows us to handle projects of immense scale while maintaining the precision of a master craftsman.
            </p>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/about">Our Company History <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 md:w-24 md:h-24 border-t-2 border-l-2 border-gold z-10" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/about-team-9765683a-1777404230624.webp" 
              alt="About Us" 
              className="rounded-sm shadow-2xl relative z-0 grayscale-[0.2] w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-24 md:h-24 border-b-2 border-r-2 border-gold z-10" />
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4">Our Expertise</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-4">Comprehensive Solutions</h2>
            <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {[
              { 
                title: "Building Construction", 
                desc: "Residential, commercial, and industrial developments built to the highest standards.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/building-construction-f7470b91-1777404227126.webp"
              },
              { 
                title: "Civil Engineering", 
                desc: "Roads, stormwater, drainage, and concrete works with technical precision.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/civil-engineering-9b2519bc-1777404227528.webp"
              },
              { 
                title: "Infrastructure Maintenance", 
                desc: "Specialized maintenance for government and private sector infrastructure assets.",
                img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/infrastructure-maintenance-30d61199-1777404230923.webp"
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-sm shadow-xl aspect-[3/4] md:aspect-[4/5]"
              >
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/80 text-sm mb-6 line-clamp-2 md:line-clamp-none opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {service.desc}
                  </p>
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="ghost" className="text-charcoal hover:text-gold transition-colors text-lg font-serif italic h-auto py-2 group">
              <Link to="/services">Explore All Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">Ready to Build Your Next Major Project?</h2>
          <p className="text-cream/80 text-lg md:text-xl mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with Rigney Enterprises for unmatched quality, engineering excellence, and professional project management in South Africa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/request-quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline-white" size="lg" className="w-full sm:w-auto">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}