import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Download, ShieldCheck, FileCheck, Award, Briefcase } from "lucide-react";

const documents = [
  { name: "CIDB Certificate", size: "1.2 MB", icon: Award },
  { name: "CSD Report", size: "850 KB", icon: FileCheck },
  { name: "Tax Clearance", size: "1.1 MB", icon: ShieldCheck },
  { name: "BBBEE (Level 1)", size: "2.4 MB", icon: FileText },
  { name: "Letter of Good Standing", size: "900 KB", icon: ShieldCheck },
  { name: "Company Profile", size: "15.5 MB", icon: Briefcase },
];

export default function TenderPortal() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge className="bg-gold text-white border-none mb-6 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Compliance</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6 leading-tight">Tender Documents</h1>
            <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Securely access our professional compliance documents for your tender applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, idx) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="p-6 border-cream hover:border-gold transition-all duration-300 group shadow-sm hover:shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-8">
                      <div className="h-12 w-12 rounded bg-cream flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                        <doc.icon className="h-6 w-6 text-gold group-hover:text-white transition-colors duration-300" />
                      </div>
                      <Badge variant="secondary" className="bg-cream text-[9px] text-charcoal/60 font-bold uppercase tracking-wider">PDF</Badge>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal mb-2 leading-tight">{doc.name}</h3>
                    <p className="text-[10px] text-slate font-bold uppercase tracking-widest mb-6">Size: {doc.size}</p>
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-gold group-hover:text-white group-hover:border-gold">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 p-8 md:p-12 bg-charcoal rounded-2xl text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-serif font-bold mb-4">Need Custom Documents?</h3>
                <p className="text-white/60 text-base max-w-md">Contact our tender support department for project-specific capability statements and specialized certifications.</p>
              </div>
              <Button asChild size="lg" className="w-full md:w-auto">
                <a href="mailto:tenders@rigneyenterprises.co.za">Email Support</a>
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-forest/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}