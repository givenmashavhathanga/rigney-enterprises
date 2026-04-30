import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Clock, MapPin, Send, ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      title: 'Call Us',
      desc: 'Mon - Fri, 8am - 5pm',
      info: '+27 11 000 0000',
      icon: Phone,
      action: 'tel:+27110000000'
    },
    {
      title: 'Email Us',
      desc: 'For all inquiries',
      info: 'info@rigneyenterprises.co.za',
      icon: Mail,
      action: 'mailto:info@rigneyenterprises.co.za'
    },
    {
      title: 'WhatsApp',
      desc: 'Instant message',
      info: '+27 82 000 0000',
      icon: MessageSquare,
      action: 'https://wa.me/27820000000'
    },
    {
      title: 'Office',
      desc: 'Visit us',
      info: '123 Business Way, Sandton, JHB',
      icon: MapPin,
      action: '#'
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">Let's Build Your <br />Next Project</h2>
            <p className="text-xl text-cream/70">
              Our experts are ready to discuss your construction or engineering requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-8">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((item) => (
                  <a 
                    href={item.action} 
                    key={item.title} 
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="bg-charcoal p-3 group-hover:bg-gold transition-colors h-fit">
                      <item.icon className="text-gold group-hover:text-charcoal w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate mb-1">{item.title}</p>
                      <p className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors">{item.info}</p>
                      <p className="text-sm text-charcoal/50">{item.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-charcoal mb-6">Social Presence</h3>
              <div className="flex gap-4">
                {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                  <Button 
                    key={idx} 
                    variant="outline" 
                    size="icon" 
                    className="border-charcoal/10 hover:border-gold hover:text-gold rounded-none h-12 w-12"
                  >
                    <Icon size={20} />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-charcoal mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold">Name</Label>
                <Input id="name" placeholder="John Doe" required className="rounded-none h-12 border-charcoal/10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="rounded-none h-12 border-charcoal/10" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="subject" className="font-bold">Subject</Label>
                <Input id="subject" placeholder="Project Inquiry" className="rounded-none h-12 border-charcoal/10" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message" className="font-bold">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" required className="rounded-none min-h-[150px] border-charcoal/10" />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-charcoal font-bold h-14 rounded-none text-lg">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Mockup */}
      <section className="h-[500px] w-full bg-slate relative grayscale">
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40 text-cream p-4 text-center">
          <div>
            <MapPin className="w-16 h-16 text-gold mx-auto mb-4 animate-float" />
            <h3 className="text-3xl font-bold mb-2">Our Headquarters</h3>
            <p className="text-xl text-cream/80">Sandton Business District, Johannesburg, South Africa</p>
          </div>
        </div>
      </section>
    </div>
  );
};