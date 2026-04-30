import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send, UploadCloud, Info } from 'lucide-react';

export const QuoteForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("New Project Request Generated Successfully! Our team will contact you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-beige/30">
      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Project Inquiry</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">Request a Professional Quote</h2>
            <p className="text-xl text-cream/70">
              Complete the detailed form below. This helps us provide a more accurate estimate and understand your technical requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-10 p-4 bg-gold/5 border-l-4 border-gold">
            <Info className="text-gold w-6 h-6 shrink-0 mt-1" />
            <p className="text-sm text-charcoal/70">
              For large-scale infrastructure and government tenders, please ensure you upload the relevant building plans or bill of quantities (BOQ).
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-charcoal font-bold">Full Name *</Label>
              <Input id="fullName" placeholder="John Doe" required className="rounded-none border-charcoal/20 focus:border-gold transition-colors h-12" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-charcoal font-bold">Company Name</Label>
              <Input id="companyName" placeholder="Enter company if applicable" className="rounded-none border-charcoal/20 focus:border-gold transition-colors h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-charcoal font-bold">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="+27 ..." required className="rounded-none border-charcoal/20 focus:border-gold transition-colors h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-charcoal font-bold">Email Address *</Label>
              <Input id="email" type="email" placeholder="john@example.co.za" required className="rounded-none border-charcoal/20 focus:border-gold transition-colors h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectType" className="text-charcoal font-bold">Project Type *</Label>
              <Select required>
                <SelectTrigger className="rounded-none border-charcoal/20 h-12">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential Construction</SelectItem>
                  <SelectItem value="commercial">Commercial Development</SelectItem>
                  <SelectItem value="industrial">Industrial Works</SelectItem>
                  <SelectItem value="civil">Civil Engineering / Roads</SelectItem>
                  <SelectItem value="renovation">Structural Renovation</SelectItem>
                  <SelectItem value="maintenance">Maintenance Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget" className="text-charcoal font-bold">Budget Range *</Label>
              <Select required>
                <SelectTrigger className="rounded-none border-charcoal/20 h-12">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="below-500k">Below R500,000</SelectItem>
                  <SelectItem value="500k-1m">R500,000 - R1,000,000</SelectItem>
                  <SelectItem value="1m-5m">R1,000,000 - R5,000,000</SelectItem>
                  <SelectItem value="5m-10m">R5,000,000 - R10,000,000</SelectItem>
                  <SelectItem value="above-10m">Above R10,000,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="location" className="text-charcoal font-bold">Project Location *</Label>
              <Input id="location" placeholder="e.g. Sandton, Johannesburg" required className="rounded-none border-charcoal/20 h-12" />
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label className="text-charcoal font-bold">Upload Building Plans / BOQ</Label>
              <div className="border-2 border-dashed border-charcoal/20 p-10 text-center hover:border-gold/50 transition-colors cursor-pointer group">
                <UploadCloud className="mx-auto w-10 h-10 text-charcoal/30 group-hover:text-gold transition-colors mb-4" />
                <p className="text-sm text-charcoal/60">Drag and drop files here or <span className="text-gold font-bold">click to browse</span></p>
                <p className="text-xs text-charcoal/40 mt-2">Max file size: 20MB (.pdf, .dwg, .docx)</p>
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="notes" className="text-charcoal font-bold">Additional Project Notes</Label>
              <Textarea id="notes" placeholder="Tell us more about your specific requirements..." className="rounded-none border-charcoal/20 min-h-[150px]" />
            </div>

            <div className="md:col-span-2 pt-6">
              <Button type="submit" className="w-full bg-charcoal hover:bg-charcoal/90 text-gold font-bold text-lg h-16 rounded-none group transition-all">
                <Send className="mr-2 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Submit Project Request
              </Button>
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};