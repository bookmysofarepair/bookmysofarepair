import React from 'react';
import { BRANDS_SERVICED } from '../data/reclinerData';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const BrandCompatibility: React.FC = () => {
  return (
    <section className="py-12 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-1">
            Compatible With All Brands in India
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900">
            Certified Repair for Major Recliner Brands
          </h3>
          <p className="text-xs text-stone-600 mt-1">
            Our Chennai technicians carry genuine mounting plates, pitch-matched gears, and OEM linear actuators.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BRANDS_SERVICED.map((brand, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-white rounded-xl border border-stone-200/80 shadow-2xs hover:shadow-sm hover:border-amber-400 transition-all text-center"
            >
              <div className="text-sm font-black text-stone-900 tracking-tight">
                {brand.name}
              </div>
              <div className="text-[10px] text-stone-500 mt-0.5">
                {brand.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Linak & Kaidi Actuator Certified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Heavy-Duty 300lb Scissor Standards</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>1 to 2 Years Written Warranty Card</span>
          </div>
        </div>
      </div>
    </section>
  );
};
