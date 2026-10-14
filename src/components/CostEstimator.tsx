import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  Layers,
  Wrench,
  Zap
} from 'lucide-react';

interface CostEstimatorProps {
  onOpenBooking: (prefill: { reclinerType: string; service: string; estimatedCost?: string }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenBooking }) => {
  const [reclinerType, setReclinerType] = useState('single_motorized');
  const [selectedIssue, setSelectedIssue] = useState('motor_actuator');
  const [upholsteryPref, setUpholsteryPref] = useState('nappa');

  // Pricing calculations
  const calculateEstimate = () => {
    let minPrice = 0;
    let maxPrice = 0;
    let duration = '45 - 60 Minutes (At Home)';
    let warranty = '1 Year Replacement Warranty';
    let isDoorstep = true;
    let issueTitle = '';

    if (selectedIssue === 'cable_handle') {
      minPrice = 799;
      maxPrice = 1199;
      duration = '30 - 45 Minutes (Doorstep)';
      warranty = '1 Year Cable & Spring Warranty';
      issueTitle = 'Pull Cable & Release Handle Replacement';
    } else if (selectedIssue === 'motor_actuator') {
      minPrice = 1699;
      maxPrice = 2899;
      duration = '60 - 90 Minutes (Doorstep)';
      warranty = '1 to 2 Years Motor Warranty';
      issueTitle = 'Linear Actuator Motor Replacement';
    } else if (selectedIssue === 'power_adapter') {
      minPrice = 1199;
      maxPrice = 1799;
      duration = '30 Minutes (Doorstep)';
      warranty = '1 Year Power Supply Warranty';
      issueTitle = '29V Power Adapter & Remote Switch Fix';
    } else if (selectedIssue === 'scissor_footrest') {
      minPrice = 999;
      maxPrice = 1599;
      duration = '45 - 75 Minutes (Doorstep)';
      warranty = '1 Year Mechanical Linkage Warranty';
      issueTitle = 'Footrest Scissor Alignment & Rivet Fix';
    } else if (selectedIssue === 'cushion_foam') {
      const seatMultiplier = reclinerType === 'two_seater' ? 2 : reclinerType === 'three_seater' ? 3 : 1;
      minPrice = 1299 * seatMultiplier;
      maxPrice = 2199 * seatMultiplier;
      duration = 'Doorstep or 24-hr Express Workshop';
      warranty = '3 Years Anti-Sagging Warranty';
      issueTitle = `45D/50D High-Resilience Foam Overhaul (${seatMultiplier} Seat${seatMultiplier > 1 ? 's' : ''})`;
    } else if (selectedIssue === 'reupholstery') {
      const seatMultiplier = reclinerType === 'two_seater' ? 2 : reclinerType === 'three_seater' ? 3 : 1;
      if (upholsteryPref === 'genuine_leather') {
        minPrice = 6999 * seatMultiplier;
        maxPrice = 10999 * seatMultiplier;
        warranty = '3 to 5 Years Italian Leather Warranty';
        issueTitle = `Genuine Italian Top-Grain Leather Reupholstery (${seatMultiplier} Seat${seatMultiplier > 1 ? 's' : ''})`;
      } else if (upholsteryPref === 'nappa') {
        minPrice = 3499 * seatMultiplier;
        maxPrice = 5499 * seatMultiplier;
        warranty = '2 to 3 Years Material Warranty';
        issueTitle = `Breathable Nappa Leatherette Reupholstery (${seatMultiplier} Seat${seatMultiplier > 1 ? 's' : ''})`;
      } else {
        minPrice = 2899 * seatMultiplier;
        maxPrice = 4299 * seatMultiplier;
        warranty = '2 Years Fabric Warranty';
        issueTitle = `Premium Stain-Resistant Fabric Reupholstery (${seatMultiplier} Seat${seatMultiplier > 1 ? 's' : ''})`;
      }
      duration = 'Doorstep Swatch Selection + 3-4 Days Workshop Delivery';
      isDoorstep = false;
    } else {
      // General Servicing
      minPrice = 699;
      maxPrice = 999;
      duration = '45 Minutes (Doorstep)';
      warranty = '6 Months Service Warranty';
      issueTitle = 'Deep Cleaning, Joint Lubrication & Mechanism Check';
    }

    return {
      minPrice,
      maxPrice,
      duration,
      warranty,
      isDoorstep,
      issueTitle
    };
  };

  const estimate = calculateEstimate();

  const handleBookEstimate = () => {
    let typeName = 'Single Motorized Recliner';
    if (reclinerType === 'manual_single') typeName = 'Manual Pull-Handle Recliner';
    if (reclinerType === 'dual_lift') typeName = 'Dual Motor Lift Chair';
    if (reclinerType === 'two_seater') typeName = '2-Seater Recliner Console';
    if (reclinerType === 'three_seater') typeName = '3-Seater Cinema Recliner';

    onOpenBooking({
      reclinerType: typeName,
      service: estimate.issueTitle,
      estimatedCost: `₹${estimate.minPrice.toLocaleString('en-IN')} - ₹${estimate.maxPrice.toLocaleString('en-IN')}`
    });
  };

  return (
    <section id="calculator" className="py-16 lg:py-20 bg-stone-100/90 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest mb-2 px-3 py-1 bg-amber-100/80 rounded-md">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Transparent Chennai Pricing
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Instant Recliner Repair Cost Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            No unexpected shocks. Select your recliner model and symptom to view our upfront pricing bracket for Chennai doorstep service.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            {/* Step 1: Recliner Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                1. Select Recliner Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'single_motorized', label: '1-Seater Motorized', icon: Zap },
                  { id: 'manual_single', label: '1-Seater Manual', icon: Wrench },
                  { id: 'dual_lift', label: 'Dual-Motor Lift Chair', icon: Zap },
                  { id: 'two_seater', label: '2-Seater with Console', icon: Layers },
                  { id: 'three_seater', label: '3-Seater Cinema Sofa', icon: Layers }
                ].map((item) => {
                  const Icon = item.icon;
                  const active = reclinerType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setReclinerType(item.id)}
                      className={`flex flex-col items-center justify-center text-center p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        active
                          ? 'border-amber-600 bg-amber-50/70 text-amber-900 ring-2 ring-amber-600/20'
                          : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1.5 ${active ? 'text-amber-700' : 'text-stone-500'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: What is broken? */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                2. What Problem Are You Facing?
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'cable_handle',
                    title: 'Broken Pull Cable & Plastic/Metal Handle',
                    desc: 'Handle spins freely or pulled out, cable snapped inside'
                  },
                  {
                    id: 'motor_actuator',
                    title: 'Motor Actuator Stuck, Buzzing or Humming',
                    desc: 'Chair stopped moving midway, motor groans or clicks'
                  },
                  {
                    id: 'power_adapter',
                    title: 'Zero Power / Remote Controller Switch Dead',
                    desc: 'No LED lights, transformer blown, broken toggle switch'
                  },
                  {
                    id: 'scissor_footrest',
                    title: 'Footrest Stuck Open / Won\'t Lock Closed',
                    desc: 'Scissor arms bent, broken pivot rivets, spring popped off'
                  },
                  {
                    id: 'cushion_foam',
                    title: 'Sagging Cushion & Collapsed Foam Restuffing',
                    desc: 'Deep middle sag, feeling hard frame, loss of lumbar support'
                  },
                  {
                    id: 'reupholstery',
                    title: 'Leather Peeling / Fabric Tear / Full Reupholstery',
                    desc: 'Cracked peeling leather, humidity flaking, complete makeover'
                  },
                  {
                    id: 'general_service',
                    title: 'General Servicing & Mechanism Lubrication',
                    desc: 'Squeaking noise removal, frame tightening, joint descaling'
                  }
                ].map((issue) => {
                  const active = selectedIssue === issue.id;
                  return (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssue(issue.id)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-start justify-between gap-3 cursor-pointer ${
                        active
                          ? 'border-amber-600 bg-amber-50/60 ring-2 ring-amber-600/20'
                          : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/70'
                      }`}
                    >
                      <div>
                        <div className={`font-bold ${active ? 'text-amber-950' : 'text-stone-900'}`}>
                          {issue.title}
                        </div>
                        <div className="text-stone-500 text-[11px] mt-0.5">
                          {issue.desc}
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${
                        active ? 'border-amber-600 bg-amber-600 text-white' : 'border-stone-300'
                      }`}>
                        {active && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional sub-selector if Reupholstery is chosen */}
            {selectedIssue === 'reupholstery' && (
              <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/70 space-y-2">
                <label className="block text-xs font-bold text-amber-950">
                  Select Material Preference (450+ Swatches brought home):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'fabric', label: 'Stain-Resistant Fabric', sub: 'High GSM Velvet/Linen' },
                    { id: 'nappa', label: 'Breathable Nappa Leatherette', sub: 'Humidity Resistant' },
                    { id: 'genuine_leather', label: 'Genuine Italian Leather', sub: 'Top-Grain Cowhide' }
                  ].map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => setUpholsteryPref(mat.id)}
                      className={`p-2.5 rounded-lg border text-left text-xs cursor-pointer ${
                        upholsteryPref === mat.id
                          ? 'border-amber-700 bg-amber-100/80 font-bold text-amber-950'
                          : 'border-stone-200 bg-white text-stone-700'
                      }`}
                    >
                      <div>{mat.label}</div>
                      <div className="text-[10px] text-stone-500 font-normal">{mat.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-7 border border-stone-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs uppercase font-bold text-stone-300 tracking-wider">
                    Estimated Quotation
                  </span>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-medium">
                  Guaranteed Chennai Rate
                </span>
              </div>

              {/* Price Display */}
              <div>
                <div className="text-xs text-stone-400 mb-1">
                  Estimated Repair & Spare Parts Cost:
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ₹{estimate.minPrice.toLocaleString('en-IN')} - ₹{estimate.maxPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="text-[11px] text-stone-400 mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Doorstep Inspection Fee: <strong>₹0</strong> (Waived on repair)</span>
                </div>
              </div>

              {/* Selected Job Summary */}
              <div className="bg-stone-800/80 rounded-xl p-4 border border-stone-700/60 space-y-3 text-xs">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-stone-400">Diagnosis:</span>
                  <span className="font-semibold text-white text-right">{estimate.issueTitle}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Expected Time:</span>
                  <span className="font-medium text-amber-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {estimate.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-400">Warranty:</span>
                  <span className="font-medium text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {estimate.warranty}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-stone-700 text-[11px]">
                  <span className="text-stone-400">Service Mode:</span>
                  <span className="text-stone-200">
                    {estimate.isDoorstep ? '100% Home Doorstep Repair in Chennai' : 'Doorstep Pickup & Free Delivery'}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleBookEstimate}
                className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Doorstep Visit with this Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-stone-400 space-y-1">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  No advance payment. Pay only after chair is tested and functioning.
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Written digital invoice and warranty card issued on spot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
