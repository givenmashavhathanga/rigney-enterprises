import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Camera, 
  FileText, 
  CreditCard, 
  Calendar, 
  ArrowRight,
  CircleCheck,
  CircleDashed
} from "lucide-react";

export default function ClientPortal() {
  const activeProject = {
    name: "Luxury Estate - Block C",
    location: "Bryanston, Johannesburg",
    progress: 55,
    nextStage: "Roof Installation",
    completionDate: "Aug 2026",
    status: "On Track",
    lastUpdate: "Yesterday, 14:30"
  };

  const milestones = [
    { name: "Foundations & Earthworks", date: "Jan 2025", completed: true },
    { name: "Superstructure & Brickwork", date: "April 2025", completed: true },
    { name: "Electrical Rough-in", date: "June 2025", completed: false },
    { name: "Roof Installation", date: "August 2025", completed: false },
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal mb-2">Client Portal</h1>
            <p className="text-slate text-sm md:text-base">Monitoring: <span className="text-charcoal font-bold">{activeProject.name}</span></p>
          </motion.div>
          <Badge className="bg-forest text-white py-2 px-6 rounded-full text-xs font-bold uppercase tracking-widest self-start md:self-center shadow-lg">Status: {activeProject.status}</Badge>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Main Dashboard */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-6 md:p-10 shadow-xl border-none overflow-hidden relative group bg-white">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12 relative z-10">
                <div>
                  <h3 className="text-[10px] md:text-xs font-bold text-slate uppercase tracking-[0.2em] mb-4">Overall Progress</h3>
                  <div className="text-6xl md:text-8xl font-serif font-bold text-charcoal leading-none">{activeProject.progress}%</div>
                </div>
                <div className="sm:text-right">
                  <p className="text-[10px] md:text-xs text-slate font-bold uppercase tracking-widest mb-1">Next Major Stage</p>
                  <p className="text-xl md:text-2xl font-bold text-gold">{activeProject.nextStage}</p>
                </div>
              </div>
              <Progress value={activeProject.progress} className="h-4 bg-cream [&>div]:bg-gold shadow-inner" />
              <div className="mt-8 text-[10px] md:text-xs font-bold text-slate flex items-center justify-between uppercase tracking-widest">
                <span>Start: Nov 2024</span>
                <span>Target: {activeProject.completionDate}</span>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-colors duration-500" />
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-all duration-300 flex items-center gap-6 group">
                <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Camera className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg">Site Photos</h4>
                  <p className="text-xs text-slate mb-3">24 New Updates</p>
                  <Button variant="link" className="p-0 h-auto text-blue-600 text-xs font-bold uppercase tracking-widest">View Gallery <ArrowRight className="h-3 w-3 ml-2 transition-transform group-hover:translate-x-1" /></Button>
                </div>
              </Card>
              <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-all duration-300 flex items-center gap-6 group">
                <div className="h-16 w-16 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors duration-300">
                  <FileText className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-charcoal text-lg">Site Reports</h4>
                  <p className="text-xs text-slate mb-3">Weekly Progress PDF</p>
                  <Button variant="link" className="p-0 h-auto text-orange-600 text-xs font-bold uppercase tracking-widest">Download <ArrowRight className="h-3 w-3 ml-2 transition-transform group-hover:translate-x-1" /></Button>
                </div>
              </Card>
            </div>

            <Card className="p-6 md:p-10 border-none shadow-lg bg-white">
              <h3 className="text-2xl font-serif font-bold mb-10">Project Milestones</h3>
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-6 pb-8 border-b border-slate-100 last:border-none last:pb-0">
                    {m.completed ? <CircleCheck className="h-7 w-7 text-green-500 shrink-0" /> : <CircleDashed className="h-7 w-7 text-slate-200 shrink-0" />}
                    <div className="flex-1">
                      <p className={`font-bold text-base md:text-lg ${m.completed ? 'text-charcoal' : 'text-slate-300'}`}>{m.name}</p>
                      <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Target: {m.date}</p>
                    </div>
                    {m.completed && <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none font-bold text-[9px] uppercase tracking-wider">Done</Badge>}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar Section */}
          <div className="space-y-8">
            <Card className="p-8 md:p-10 bg-charcoal text-white border-none shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-white/10">
                <div className="h-14 w-14 rounded-full bg-gold/20 flex items-center justify-center shadow-inner">
                  <CreditCard className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-tight">Financial Summary</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Payment Status</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/60 font-bold uppercase tracking-widest">Project Value</span>
                  <span className="font-serif font-bold text-xl">R12.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/60 font-bold uppercase tracking-widest">Invoiced</span>
                  <span className="font-serif font-bold text-xl text-green-400">R6.8M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/60 font-bold uppercase tracking-widest">Balance</span>
                  <span className="font-serif font-bold text-xl text-gold">R5.6M</span>
                </div>
                <Button variant="white" className="w-full mt-4 h-14 md:h-16">
                  Full Statement
                </Button>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            </Card>

            <Card className="p-8 md:p-10 border-none shadow-lg bg-white">
              <div className="flex items-center gap-4 mb-8">
                <Calendar className="h-7 w-7 text-gold shrink-0" />
                <h4 className="font-bold text-lg">Next Site Visit</h4>
              </div>
              <div className="p-6 bg-cream rounded-xl mb-8 border border-gold/10">
                <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-3">Upcoming Appointment</p>
                <p className="text-lg font-bold text-charcoal leading-tight">Tuesday, 14 April<br />@ 10:00 AM</p>
                <p className="text-[11px] text-slate-500 mt-4 italic">Meeting with Lead Engineer</p>
              </div>
              <Button variant="outline" className="w-full h-14">
                Reschedule Visit
              </Button>
            </Card>

            <div className="p-8 md:p-10 rounded-2xl bg-forest text-white text-center shadow-2xl relative overflow-hidden">
               <BarChart3 className="h-12 w-12 text-white/20 mx-auto mb-6" />
               <h4 className="font-bold text-xl mb-2">Project Support</h4>
               <p className="text-xs text-white/60 mb-8 leading-relaxed">Need technical assistance or have a question about the build?</p>
               <Button variant="white" size="sm" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 h-12">
                 Direct Message
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}