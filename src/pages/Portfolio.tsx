import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Banknote, Maximize2 } from "lucide-react";

const projects = [
  {
    title: "Residential Housing Estate",
    location: "Johannesburg",
    value: "R2.5M",
    timeline: "Completed 2023",
    scope: ["Foundations", "Brickwork", "Roofing", "Plumbing"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/portfolio-residential-7236c7c4-1777404227976.webp"
  },
  {
    title: "Corporate Office Complex",
    location: "Sandton",
    value: "R15.8M",
    timeline: "Completed 2024",
    scope: ["Glass Facade", "Structural Steel", "HVAC"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/portfolio-commercial-bf895cbc-1777404228450.webp"
  },
  {
    title: "Modern Infrastructure",
    location: "Pretoria",
    value: "R8.2M",
    timeline: "Completed 2024",
    scope: ["Architecture", "Civil Works", "Finishing"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/building-construction-f7470b91-1777404227126.webp"
  }
];

export default function Portfolio() {
  return (
    <div className="pt-20 bg-cream min-h-screen">
      <section className="py-16 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 md:mb-20"
          >
            <Badge className="bg-gold text-white border-none mb-6 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Our Portfolio</Badge>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-charcoal mb-6 leading-tight">Built to Last.</h1>
            <p className="text-slate text-lg md:text-xl max-w-2xl leading-relaxed">
              Explore our portfolio of completed projects across South Africa, showcasing our commitment to structural excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-2xl group cursor-pointer h-full flex flex-col">
                  <div className="relative aspect-video shrink-0">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">{project.title}</h3>
                      <div className="flex flex-wrap gap-3 text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-gold" /> {project.location}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-gold" /> {project.timeline}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                       <Button size="icon-sm" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md text-white border-white/10 hover:bg-gold">
                         <Maximize2 className="h-4 w-4" />
                       </Button>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-white grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 flex-1">
                    <div>
                      <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest mb-3">Project Value</h4>
                      <p className="text-xl md:text-2xl font-bold text-charcoal flex items-center gap-2">
                         <Banknote className="h-5 w-5 text-gold" /> {project.value}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-gold font-bold text-[10px] uppercase tracking-widest mb-3">Scope</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.scope.map(s => (
                          <Badge key={s} variant="outline" className="text-[9px] text-charcoal/60 border-charcoal/10 font-bold uppercase tracking-tighter">{s}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-charcoal py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          <div>
            <div className="text-4xl md:text-6xl font-serif font-bold text-gold mb-2">12M+</div>
            <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/40">Concrete Poured</p>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-serif font-bold text-gold mb-2">450k</div>
            <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/40">Safe Hours Worked</p>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-serif font-bold text-gold mb-2">85+</div>
            <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/40">Active Sites</p>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-serif font-bold text-gold mb-2">99%</div>
            <p className="text-[9px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/40">Client Trust</p>
          </div>
        </div>
      </section>
    </div>
  );
}