import { motion } from "framer-motion";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  HardHat, 
  Construction, 
  PaintBucket, 
  Briefcase, 
  FileCheck,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    subtitle: "Residential, commercial, industrial",
    desc: "From luxury housing estates to high-rise commercial office blocks, we build structures that stand the test of time.",
    benefits: ["Quality materials", "Modern support", "National code compliant"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/building-construction-f7470b91-1777404227126.webp"
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    subtitle: "Infrastructure & Concrete Works",
    desc: "Precision engineering for infrastructure projects. We handle bulk earthworks, road construction, and complex systems.",
    benefits: ["Technical precision", "Heavy machinery", "Sustainable focus"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/civil-engineering-9b2519bc-1777404227528.webp"
  },
  {
    icon: Construction,
    title: "Infrastructure Maintenance",
    subtitle: "Gov & Private Sector Contracts",
    desc: "Providing ongoing maintenance and repair services for essential infrastructure to ensure longevity and safety.",
    benefits: ["Routine inspections", "Rapid repairs", "Asset life extension"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/infrastructure-maintenance-30d61199-1777404230923.webp"
  },
  {
    icon: PaintBucket,
    title: "Renovations",
    subtitle: "Property & Structural Upgrades",
    desc: "Transforming existing spaces into modern masterpieces. We specialize in high-end office fit-outs and residential remodels.",
    benefits: ["Modern aesthetic", "Structural upgrades", "Value-adding"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/renovations-76d6615c-1777404228356.webp"
  },
  {
    icon: Briefcase,
    title: "Project Management",
    subtitle: "Planning & Site Supervision",
    desc: "Professional oversight for construction projects. We manage timelines, contractors, and budgets to ensure success.",
    benefits: ["Risk mitigation", "Timeline efficiency", "Budget control"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/project-management-64b51622-1777404230938.webp"
  },
  {
    icon: FileCheck,
    title: "Tender Support",
    subtitle: "Compliance & Documentation",
    desc: "Expert assistance and compliance documentation for tender applications in the South African construction sector.",
    benefits: ["CIDB compliance", "B-BBEE docs", "Professional statements"],
    img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/about-team-9765683a-1777404230624.webp"
  }
];

export default function Services() {
  return (
    <div className="pt-20 bg-background">
      <section className="bg-charcoal py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-gold text-white border-none mb-6 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Our Services</Badge>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">Expert Solutions</h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Comprehensive construction and engineering services tailored for the South African landscape.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row border border-cream hover:border-gold/30 transition-all group"
              >
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden shrink-0">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-charcoal/20" />
                </div>
                <div className="p-6 md:p-8 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded bg-cream flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-gold group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-1 leading-tight">{service.title}</h3>
                    <p className="text-gold font-bold text-[10px] uppercase tracking-widest mb-4">{service.subtitle}</p>
                    <p className="text-slate text-sm mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-charcoal uppercase tracking-wider">
                          <div className="h-1.5 w-1.5 bg-gold rounded-full" /> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild size="sm" className="w-full group-hover:shadow-gold/20">
                    <Link to="/request-quote" className="flex items-center justify-center gap-2">
                      Request Service <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}