import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20 bg-background">
      {/* Hero Header */}
      <section className="bg-charcoal py-16 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-gold text-white border-none mb-6 px-4 py-1.5 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">Contact Us</Badge>
            <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">Let’s Build <span className="text-gold">Together.</span></h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to start your next major infrastructure or residential project? Our expert team is standing by to assist.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8 md:mb-12">Professional Contact Center</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12">
              <Card className="p-6 border-cream shadow-sm hover:border-gold transition-all duration-300 group">
                <div className="h-12 w-12 rounded bg-cream flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Phone className="h-6 w-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-charcoal mb-3 text-lg">Phone</h4>
                <p className="text-slate text-sm font-medium">+27 (0) 11 123 4567</p>
                <p className="text-slate text-sm font-medium">+27 (0) 12 345 6789</p>
              </Card>
              <Card className="p-6 border-cream shadow-sm hover:border-gold transition-all duration-300 group">
                <div className="h-12 w-12 rounded bg-cream flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Mail className="h-6 w-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-charcoal mb-3 text-lg">Email Channels</h4>
                <p className="text-slate text-sm font-medium">info@rigneyenterprises.co.za</p>
                <p className="text-slate text-sm font-medium">quotes@rigneyenterprises.co.za</p>
              </Card>
              <Card className="p-6 border-cream shadow-sm hover:border-gold transition-all duration-300 group">
                <div className="h-12 w-12 rounded bg-cream flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <MapPin className="h-6 w-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-charcoal mb-3 text-lg">Main Office</h4>
                <p className="text-slate text-sm font-medium">123 Sandton Drive, Sandton</p>
                <p className="text-slate text-sm font-medium">Johannesburg, 2196</p>
              </Card>
              <Card className="p-6 border-cream shadow-sm hover:border-gold transition-all duration-300 group">
                <div className="h-12 w-12 rounded bg-cream flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Clock className="h-6 w-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-charcoal mb-3 text-lg">Working Hours</h4>
                <p className="text-slate text-sm font-medium">Mon - Fri: 08:00 - 17:00</p>
                <p className="text-slate text-sm font-medium">Sat: 09:00 - 13:00</p>
              </Card>
            </div>

            <div className="bg-forest/5 p-8 md:p-10 rounded-2xl border border-forest/10 flex flex-col md:flex-row items-center gap-8 md:gap-10">
               <div className="h-20 w-20 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                 <AlertCircle className="h-10 w-10 text-forest" />
               </div>
               <div className="flex-1 text-center md:text-left">
                 <h3 className="text-xl md:text-2xl font-serif font-bold text-forest mb-2">Emergency Response Unit</h3>
                 <p className="text-forest/70 text-sm mb-6 leading-relaxed font-medium">
                   For urgent structural concerns or maintenance emergencies outside regular business hours.
                 </p>
                 <Button className="bg-forest hover:bg-forest/90 text-white font-bold px-10 h-14 w-full md:w-auto shadow-lg shadow-forest/20">
                   Call Emergency Line
                 </Button>
               </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
               <Button className="flex-1 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold shadow-lg">
                 <MessageCircle className="mr-3 h-6 w-6" /> WhatsApp Us
               </Button>
               <Button variant="secondary" className="flex-1 h-16 font-bold shadow-lg">
                 Company Profile
               </Button>
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-5">
            <Card className="p-8 md:p-12 border-none shadow-2xl bg-white relative overflow-hidden h-full">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-10">Instant Inquiry</h3>
              <form className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Input placeholder="Your Full Name" className="bg-cream/10 border-cream h-14 focus:border-gold" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email Address" className="bg-cream/10 border-cream h-14 focus:border-gold" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Project Subject" className="bg-cream/10 border-cream h-14 focus:border-gold" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your Message..." className="bg-cream/10 border-cream min-h-[220px] focus:border-gold" />
                </div>
                <Button size="xl" className="w-full">
                  Send Message
                </Button>
              </form>
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gold/5 rounded-full" />
            </Card>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="h-[400px] md:h-[500px] bg-cream relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center grayscale opacity-60">
           <div className="text-center px-6">
             <div className="h-20 w-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <MapPin className="h-10 w-10 text-gold" />
             </div>
             <p className="font-serif italic text-charcoal text-2xl mb-2">Sandton Office</p>
             <p className="text-slate font-bold uppercase tracking-widest text-xs">123 Sandton Drive, Johannesburg</p>
           </div>
        </div>
        <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/28.0567,26.1076,12/800x450?access_token=pk.placeholder')] bg-cover opacity-20" />
      </section>
    </div>
  );
}