import React from 'react';
import { 
  CalendarCheck, 
  Truck, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Book in 60 Seconds',
      desc: 'Select your Chennai area (e.g. Velachery, Anna Nagar, OMR) and describe the problem or snap a photo.',
      icon: CalendarCheck,
      badge: 'Easy Online / WhatsApp'
    },
    {
      num: '02',
      title: 'Doorstep Arrival Within a Day',
      desc: 'Our nearest Chennai technician is dispatched with dedicated recliner spare parts, cables, and testing meters.',
      icon: Truck,
      badge: 'Stocked Mobile Van'
    },
    {
      num: '03',
      title: 'Transparent Repair at Home',
      desc: 'Exact upfront quotation provided before touching the chair. 85% of issues resolved right in your living room.',
      icon: Wrench,
      badge: 'No Hidden Costs'
    },
    {
      num: '04',
      title: 'Load Testing & 1-Year Warranty',
      desc: 'The recliner is weight-tested under 120kg load. Official written and digital warranty card issued on spot.',
      icon: ShieldCheck,
      badge: 'Peace of Mind'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest mb-2 px-3 py-1 bg-amber-100 rounded-md">
            Seamless Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            How Doorstep Recliner Repair Works in Chennai
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            No need to haul heavy, 60kg recliners through staircases or pay hefty tempo transport fees. We bring the workshop to your doorstep.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-600/30">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-amber-600 flex items-center justify-center text-white mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200/80 flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Doorstep Inspection in Chennai</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Schedule Doorstep Visit Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
