import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Wrench, 
  Home, 
  XCircle,
  ArrowRight
} from 'lucide-react';
import { SYMPTOM_DIAGNOSTICS } from '../data/reclinerData';

interface SymptomDiagnosticProps {
  onOpenBooking: (prefill: { service: string }) => void;
}

export const SymptomDiagnostic: React.FC<SymptomDiagnosticProps> = ({ onOpenBooking }) => {
  const [selectedSymptomId, setSelectedSymptomId] = useState(SYMPTOM_DIAGNOSTICS[0].id);

  const currentItem = SYMPTOM_DIAGNOSTICS.find(item => item.id === selectedSymptomId) || SYMPTOM_DIAGNOSTICS[0];

  return (
    <section id="anatomy" className="py-16 lg:py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest mb-2 px-3 py-1 bg-amber-100 rounded-md">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            Quick Self-Diagnosis Tool
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            What is Wrong With Your Recliner?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Identify the root mechanical or electrical cause before booking. See safety guidance so you don't worsen the damage.
          </p>
        </div>

        {/* Diagnosis Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Symptoms List (Interactive Selector) */}
          <div className="lg:col-span-5 space-y-2.5">
            {SYMPTOM_DIAGNOSTICS.map((item, idx) => {
              const active = item.id === selectedSymptomId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSymptomId(item.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                    active
                      ? 'border-amber-600 bg-amber-50/70 shadow-xs'
                      : 'border-stone-200 bg-stone-50/60 hover:bg-stone-50 hover:border-stone-300'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    active ? 'bg-amber-700 text-white' : 'bg-stone-200 text-stone-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <div className={`text-xs font-bold ${active ? 'text-amber-950' : 'text-stone-800'}`}>
                      {item.symptom}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Diagnostic Result Card */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Diagnosis Report
              </span>
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                  currentItem.severity === 'Immediate Stop'
                    ? 'bg-rose-100 text-rose-800 border border-rose-300'
                    : currentItem.severity === 'Moderate'
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-blue-100 text-blue-800 border border-blue-300'
                }`}>
                  Urgency: {currentItem.severity}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                {currentItem.symptom}
              </h3>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200/80 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
                  Root Cause:
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {currentItem.probableCause}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-950 block mb-1">
                  Recommended Professional Fix:
                </span>
                <p className="text-xs text-stone-700 leading-relaxed">
                  {currentItem.solution}
                </p>
              </div>
            </div>

            {/* Quick Metrics & Feasibility */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <span className="text-stone-500 text-[11px] block">Doorstep Feasible?</span>
                <span className="font-bold text-stone-800 flex items-center gap-1 mt-0.5">
                  <Home className="w-3.5 h-3.5 text-emerald-600" />
                  {currentItem.doorstepFeasible ? 'Yes, 100% at home' : 'Workshop pickup'}
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200">
                <span className="text-stone-500 text-[11px] block">Estimated Cost:</span>
                <span className="font-bold text-amber-800 mt-0.5 block">
                  {currentItem.estCost}
                </span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-stone-200 col-span-2 sm:col-span-1">
                <span className="text-stone-500 text-[11px] block">Safe to use right now?</span>
                <span className="font-bold mt-0.5 flex items-center gap-1">
                  {currentItem.canUseChair ? (
                    <span className="text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Can sit gently
                    </span>
                  ) : (
                    <span className="text-rose-700 flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> Stop forcing
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenBooking({ service: currentItem.symptom })}
                className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Technician for this Issue in Chennai</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
