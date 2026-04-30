import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Award, Users, ShieldCheck, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 bg-background">
      {/* Header */}
      <section className="bg-charcoal py-16 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-gold text-white border-none mb-6 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">About Us</Badge>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">
              Building South Africa,<br />
              <span className="text-gold italic">One Project at a Time</span>
            </h1>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 md:opacity-40">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/about-team-9765683a-1777404230624.webp" 
            alt="Engineering" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">Our Company History</h2>
            <p className="text-slate text-base md:text-lg mb-6 leading-relaxed">
              Founded over 15 years ago, Rigney Enterprises started with a singular vision: to redefine the construction landscape in South Africa through uncompromising quality and professional integrity. 
            </p>
            <p className="text-slate text-base md:text-lg mb-10 leading-relaxed">
              What began as a small family-operated business has evolved into a multi-disciplinary construction and civil engineering firm, capable of handling large-scale infrastructure projects across Gauteng and beyond.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="border-l-4 border-gold pl-4 py-2">
                <span className="block text-3xl md:text-4xl font-serif font-bold text-charcoal">15+</span>
                <span className="text-[10px] text-gold font-bold uppercase tracking-widest">Years Excellence</span>
              </div>
              <div className="border-l-4 border-gold pl-4 py-2">
                <span className="block text-3xl md:text-4xl font-serif font-bold text-charcoal">250+</span>
                <span className="text-[10px] text-gold font-bold uppercase tracking-widest">Projects Done</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-full">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/building-construction-f7470b91-1777404227126.webp" alt="Work 1" className="rounded shadow-lg h-48 md:h-64 w-full object-cover" />
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f1dce016-e744-43e9-a59d-583d79a269f0/civil-engineering-9b2519bc-1777404227528.webp" alt="Work 2" className="rounded shadow-lg h-48 md:h-64 w-full object-cover mt-8 md:mt-12" />
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-8 md:p-12 rounded shadow-xl border-t-4 border-gold transition-all"
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
              <Award className="text-gold h-8 w-8 shrink-0" /> Our Mission
            </h3>
            <p className="text-slate leading-relaxed italic text-lg">
              "To deliver world-class construction and engineering services that empower South African communities and set the gold standard for structural integrity."
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-8 md:p-12 rounded shadow-xl border-t-4 border-forest transition-all"
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 flex items-center gap-3">
              <ShieldCheck className="text-forest h-8 w-8 shrink-0" /> Our Vision
            </h3>
            <p className="text-slate leading-relaxed italic text-lg">
              "To be the most trusted infrastructure partner in Southern Africa, known for technical precision, safety leadership, and sustainable building practices."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-charcoal">Why Professional Clients Choose Us</h2>
            <div className="h-1 w-20 bg-gold mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left">
            {[
              { icon: CheckCircle2, title: "Quality Assurance", text: "Rigorous quality control measures at every stage to ensure structural excellence and client satisfaction." },
              { icon: ShieldCheck, title: "Safety Commitment", text: "Safety is our priority. We are fully COID compliant and maintain strict OHS standards on all sites." },
              { icon: Users, title: "Expert Management", text: "Our managers ensure timelines are met, budgets respected, and communication remains transparent." },
              { icon: Clock, title: "Timely Delivery", text: "We understand time is money. Our streamlined processes ensure on-time completion of all contracts." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-5 group">
                <div className="h-12 w-12 rounded bg-cream flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-charcoal mb-2">{item.title}</h4>
                  <p className="text-slate text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}