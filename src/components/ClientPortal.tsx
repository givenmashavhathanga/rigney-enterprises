import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Camera, FileText, CheckCircle2, Clock, Calendar, ChevronRight, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const ClientPortal = () => {
  const currentProject = {
    name: 'Luxury Residential Development',
    location: 'Sandton, Johannesburg',
    progress: 55,
    nextStage: 'Roof Installation',
    completionDate: 'August 2026',
    status: 'In Progress',
    milestones: [
      { name: 'Foundations', status: 'completed' },
      { name: 'Structural Brickwork', status: 'completed' },
      { name: 'Roof Installation', status: 'current' },
      { name: 'Plumbing & Electrical', status: 'pending' },
      { name: 'Interior Finishes', status: 'pending' },
    ]
  };

  return (
    <div className="min-h-screen bg-beige/20">
      <section className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-gold font-bold tracking-[0.3em] uppercase text-xs mb-2">Project Oversight</h1>
            <h2 className="text-3xl font-bold text-cream">Client Tracking Portal</h2>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-4 border border-white/10">
            <div className="bg-gold p-2 rounded-full">
              <User className="text-charcoal" />
            </div>
            <div>
              <p className="text-xs text-cream/50 uppercase font-bold tracking-widest">Logged in as</p>
              <p className="text-cream font-bold">Standard Bank Property Dept.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Status */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="rounded-none border-none shadow-xl bg-white">
              <CardHeader className="border-b border-charcoal/5 pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-bold text-charcoal mb-1">{currentProject.name}</CardTitle>
                    <p className="text-charcoal/50 flex items-center gap-1 text-sm">
                      <Calendar size={14} /> Site Address: {currentProject.location}
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {currentProject.status}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-sm font-bold text-charcoal/60 uppercase tracking-widest mb-1">Overall Construction Progress</p>
                      <h4 className="text-4xl font-black text-charcoal">{currentProject.progress}%</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-charcoal/60 uppercase tracking-widest mb-1">Target Completion</p>
                      <p className="font-bold text-gold">{currentProject.completionDate}</p>
                    </div>
                  </div>
                  <Progress value={currentProject.progress} className="h-4 rounded-none bg-beige/50 text-gold" />
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="bg-beige/20 p-6 border-l-4 border-gold">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="text-gold w-5 h-5" />
                      <p className="text-sm font-bold text-charcoal/60 uppercase tracking-widest">Current Stage</p>
                    </div>
                    <p className="text-xl font-bold text-charcoal">{currentProject.nextStage}</p>
                  </div>
                  <div className="bg-charcoal p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Camera className="text-gold w-5 h-5" />
                      <p className="text-sm font-bold text-gold/60 uppercase tracking-widest">Recent Photo Update</p>
                    </div>
                    <p className="text-cream text-sm">Site update uploaded 2 hours ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Site Reports', icon: FileText, count: '12 Files' },
                { title: 'Milestones', icon: CheckCircle2, count: '2/5 Done' },
                { title: 'Project Notes', icon: LayoutDashboard, count: '4 Updates' }
              ].map((item) => (
                <Card key={item.title} className="rounded-none border-none shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-beige/50 p-3 group-hover:bg-gold transition-colors">
                        <item.icon className="text-gold group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">{item.title}</p>
                        <p className="font-bold text-charcoal">{item.count}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-charcoal/20" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <Card className="rounded-none border-none shadow-xl bg-white h-fit">
            <CardHeader className="border-b border-charcoal/5">
              <CardTitle className="text-xl font-bold">Construction Timeline</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-10 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-beige/50"></div>
                {currentProject.milestones.map((ms, idx) => (
                  <div key={idx} className="flex gap-6 relative z-10">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      ms.status === 'completed' ? 'bg-green-500' : 
                      ms.status === 'current' ? 'bg-gold animate-pulse' : 'bg-beige'
                    }`}>
                      {ms.status === 'completed' && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <div>
                      <p className={`font-bold ${ms.status === 'pending' ? 'text-charcoal/30' : 'text-charcoal'}`}>
                        {ms.name}
                      </p>
                      <p className="text-xs text-charcoal/40 font-bold uppercase tracking-widest">
                        {ms.status.charAt(0).toUpperCase() + ms.status.slice(1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};