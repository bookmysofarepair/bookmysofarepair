import React, { useState } from 'react';
import { 
  Zap, 
  Wrench, 
  Maximize2, 
  Sparkles, 
  Layers, 
  Tv, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { REPAIR_SERVICES } from '../data/reclinerData';
import { RepairService } from '../types/recliner';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(REPAIR_SERVICES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Tv': return <Tv className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  const activeService = REPAIR_SERVICES.find(s => s.id === selectedServiceId) || REPAIR_SERVICES[0];

  return (
    <section id="services" className="py-16 lg:py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest mb-2 px-3 py-1 bg-amber-100 rounded-md">
            <Wrench className="w-3.5 h-3.5 text-amber-700" />
            Specialized Recliner Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Our Certified Doorstep Recliner Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Unlike general sofa carpenters who use makeshift nails, our technicians use specialized recliner mechanical tools, original actuators, and precision calibration.
          </p>
        </div>

        {/* Desktop Split View / Interactive Service Browser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Services List / Tabs */}
          <div className="lg:col-span-5 space-y-2.5">
            {REPAIR_SERVICES.map((service) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'border-amber-600 bg-white shadow-md ring-2 ring-amber-600/10'
                      : 'border-stone-200 bg-stone-100/60 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-200 text-stone-700'
                    }`}>
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-sm font-bold ${
                          isSelected ? 'text-amber-950' : 'text-stone-900'
                        }`}>
                          {service.title}
                        </h3>
                        {service.badge && (
                          <span className="hidden sm:inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5 line-clamp-1">
                        {service.shortDesc}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-extrabold text-stone-900 block">
                      From ₹{service.startingPrice}
                    </span>
                    <ChevronRight className={`w-4 h-4 ml-auto mt-0.5 transition-transform ${
                      isSelected ? 'text-amber-600 translate-x-1' : 'text-stone-400'
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Detailed Spotlight Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-amber-50 text-amber-700">
                  {getIcon(activeService.iconName)}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-950">
                    {activeService.title}
                  </h3>
                  {activeService.tamilTitle && (
                    <span className="text-xs text-amber-800 font-medium">
                      {activeService.tamilTitle}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-stone-500 uppercase font-bold tracking-wider">Starts at</div>
                <div className="text-2xl font-black text-amber-700">
                  ₹{activeService.startingPrice.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <p className="text-sm text-stone-700 leading-relaxed">
              {activeService.detailedDesc}
            </p>

            {/* Common Symptoms / Signs */}
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2.5">
                Common Signs That Your Recliner Needs This Fix:
              </h4>
              <ul className="space-y-2">
                {activeService.commonSigns.map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spare Parts & Specs */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-2.5">
                Genuine OEM Spare Parts & Materials Used:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeService.partsUsed.map((part, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-100/60 p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-medium">{part}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Guarantee Banner & Action Button */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-xs text-stone-600">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{activeService.warranty}</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-500">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Turnaround: {activeService.turnaroundTime}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectService(activeService.title)}
                className="w-full sm:w-auto px-6 py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book This Service at Doorstep</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
