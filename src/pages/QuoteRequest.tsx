import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HardHat, Send, FileUp, CheckCircle } from "lucide-react";

export default function QuoteRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request sent successfully! We will contact you shortly.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center px-6 min-h-screen bg-cream">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-white p-8 md:p-16 rounded-2xl shadow-2xl text-center border-t-8 border-gold"
        >
          <div className="h-20 w-20 bg-cream rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle className="h-10 w-10 text-gold" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-4 leading-tight">Request Received!</h1>
          <p className="text-slate mb-10 leading-relaxed text-lg">
            Thank you for reaching out to Rigney Enterprises. Our estimators will get back to you within 24-48 business hours.
          </p>
          <Button asChild size="lg" className="w-full">
            <a href="/">Return Home</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-cream min-h-screen">
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge className="bg-gold text-white border-none mb-6 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Estimations</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">Request a Quote</h1>
            <p className="text-slate text-lg md:text-xl max-w-2xl mx-auto">Provide project details below for a comprehensive cost estimation.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-12 rounded-2xl shadow-2xl border border-cream/50"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate">Full Name *</Label>
                  <Input id="name" placeholder="John Doe" required className="bg-cream/10 border-cream h-12 md:h-14 focus:border-gold" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-slate">Company Name</Label>
                  <Input id="company" placeholder="ACME Corp" className="bg-cream/10 border-cream h-12 md:h-14 focus:border-gold" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="+27 00 000 0000" required className="bg-cream/10 border-cream h-12 md:h-14 focus:border-gold" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-cream/10 border-cream h-12 md:h-14 focus:border-gold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-slate">Project Type *</Label>
                  <Select required>
                    <SelectTrigger className="bg-cream/10 border-cream h-12 md:h-14 focus:border-gold">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="building">Building Construction</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="renovation">Renovations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="location" className="text-xs font-bold uppercase tracking-widest text-slate">Project Location *</Label>
                  <Input id="location" placeholder="City, Province" required className="bg-cream/10 border-cream h-12 md:h-14 focus:border-gold" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="plans" className="text-xs font-bold uppercase tracking-widest text-slate flex items-center gap-2 cursor-pointer">
                  Upload Plans (PDF/JPG) <FileUp className="h-4 w-4 text-gold" />
                </Label>
                <div className="border-2 border-dashed border-cream rounded-xl p-8 md:p-12 text-center hover:bg-cream/20 transition-all cursor-pointer group">
                  <Input id="plans" type="file" className="hidden" />
                  <p className="text-xs text-slate font-bold uppercase tracking-[0.2em] group-hover:text-gold transition-colors">Click to upload or drag & drop</p>
                  <p className="text-[10px] text-slate/50 mt-2 uppercase">Max file size: 10MB</p>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="notes" className="text-xs font-bold uppercase tracking-widest text-slate">Project Details</Label>
                <Textarea id="notes" placeholder="Tell us about your requirements..." className="bg-cream/10 border-cream min-h-[150px] md:min-h-[200px] focus:border-gold" />
              </div>

              <Button type="submit" size="lg" className="w-full h-16 md:h-20 text-lg">
                <Send className="mr-2 h-6 w-6" /> Submit Quote Request
              </Button>
            </form>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-60">
             <div className="flex items-center justify-center gap-2 font-bold text-[9px] md:text-xs uppercase tracking-widest"><HardHat className="h-4 w-4 text-gold" /> Licensed Contractor</div>
             <div className="flex items-center justify-center gap-2 font-bold text-[9px] md:text-xs uppercase tracking-widest"><CheckCircle className="h-4 w-4 text-gold" /> Prof. Estimates</div>
             <div className="flex items-center justify-center gap-2 font-bold text-[9px] md:text-xs uppercase tracking-widest"><CheckCircle className="h-4 w-4 text-gold" /> CSD Compliant</div>
          </div>
        </div>
      </section>
    </div>
  );
}