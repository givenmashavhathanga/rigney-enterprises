import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, ShieldAlert, Award, FileSpreadsheet, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export const TenderPortal = () => {
  const documents = [
    { title: 'CIDB Certificate', size: '1.2 MB', type: 'PDF', icon: Award, id: 'cidb' },
    { title: 'CSD Report', size: '2.5 MB', type: 'PDF', icon: FileText, id: 'csd' },
    { title: 'Tax Clearance Certificate', size: '0.8 MB', type: 'PDF', icon: CheckCircle2, id: 'tax' },
    { title: 'BBBEE Certificate', size: '1.1 MB', type: 'PDF', icon: ShieldAlert, id: 'bbbee' },
    { title: 'COID Letter of Good Standing', size: '0.5 MB', type: 'PDF', icon: FileSpreadsheet, id: 'coid' },
    { title: 'Company Profile', size: '8.4 MB', type: 'PDF', icon: Briefcase, id: 'profile' },
  ];

  const handleDownload = (docName: string) => {
    toast.success(`Starting download: ${docName}`);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-charcoal py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4">Compliance & Credentials</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-cream mb-6">Tender Compliance <br />Made Simple</h2>
            <p className="text-xl text-cream/70">
              Access and download our official credentials and certifications for your tender and bidding requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all group overflow-hidden bg-white rounded-none">
                <CardHeader className="flex flex-row items-center space-y-0 gap-4 p-8 border-b border-gold/10">
                  <div className="bg-beige/50 p-4 rounded-full group-hover:bg-gold transition-colors">
                    <doc.icon className="text-gold group-hover:text-white w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-charcoal">{doc.title}</CardTitle>
                    <p className="text-xs text-charcoal/40 font-bold uppercase tracking-widest">{doc.type} • {doc.size}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-charcoal/60 text-sm mb-8 leading-relaxed">
                    Official {doc.title} issued by relevant South African authorities, current and valid for 2024-2025.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full border-charcoal/20 text-charcoal hover:bg-gold hover:border-gold hover:text-white font-bold h-12 rounded-none transition-all"
                    onClick={() => handleDownload(doc.title)}
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download Document
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Security Info */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gold/10 border border-gold/30 p-12 rounded-none">
            <h3 className="text-2xl font-bold text-gold mb-4">Requesting More Specific Information?</h3>
            <p className="text-cream/70 mb-8">
              If your tender requires specific capability statements, detailed project references, or additional financial guarantees, please contact our dedicated tender desk.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <span className="text-cream font-bold">Email: <a href="mailto:tenders@rigneyenterprises.co.za" className="text-gold hover:underline">tenders@rigneyenterprises.co.za</a></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};