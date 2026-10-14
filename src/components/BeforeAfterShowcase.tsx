import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Star, 
  Clock, 
  CheckCircle2, 
  MoveHorizontal,
  Armchair
} from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/reclinerData';

export const BeforeAfterShowcase: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <section id="before-after" className="py-16 lg:py-24 bg-stone-900 text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2 px-3 py-1 bg-amber-950/70 border border-amber-800/60 rounded-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Verified Chennai Transformations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Before & After Recliner Restorations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            See how badly damaged, seized, and peeling recliners are restored back to pristine showroom condition by our Chennai craftsmen.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700'
              }`}
            >
              {item.brand} ({item.location.split(',')[0]})
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-8">
          {/* Visual Interactive Slider Area */}
          <div className="lg:col-span-7 select-none">
            <div className="relative w-full h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden border border-stone-700 bg-stone-900 shadow-2xl">
              {/* After State Image (Full Container) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={activeCase.afterImage}
                  alt="Restored Recliner Sofa After Repair"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 bg-emerald-950/90 text-emerald-400 border border-emerald-700/80 rounded-md shadow-md backdrop-blur-xs">
                    AFTER: Reupholstered & Restuffed
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 z-10 bg-stone-900/85 backdrop-blur-xs px-3 py-1 rounded text-[11px] text-emerald-400 font-semibold border border-stone-700">
                  ✓ High-Density 50D Foam Restuffed
                </div>
              </div>

              {/* Before State Image (Clipped by slider percentage) */}
              <div 
                className="absolute inset-0 h-full overflow-hidden border-r-2 border-amber-400 shadow-2xl z-10"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative h-full" style={{ width: '100%', minWidth: '460px' }}>
                  <img
                    src={activeCase.beforeImage}
                    alt="Damaged Peeling Recliner Before Repair"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 bg-rose-950/90 text-rose-400 border border-rose-700/80 rounded-md shadow-md backdrop-blur-xs">
                      BEFORE: Peeling & Sagging
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 bg-stone-950/85 backdrop-blur-xs px-3 py-1 rounded text-[11px] text-rose-400 font-semibold border border-rose-900/50">
                    ⚠️ Worn Flaking Leatherette
                  </div>
                </div>
              </div>

              {/* Drag Handle Indicator */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-2xl border-2 border-white ring-4 ring-amber-500/30">
                  <MoveHorizontal className="w-5 h-5 font-bold" />
                </div>
              </div>

              {/* Invisible Range Input for Easy Dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                aria-label="Drag before and after comparison slider"
              />
            </div>

            {/* Interactive Presets & Instructions */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 text-xs">
              <div className="flex items-center gap-1.5 text-stone-400">
                <MoveHorizontal className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px]">Drag slider or tap presets:</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setSliderPosition(100)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    sliderPosition === 100 
                      ? 'bg-rose-900/80 text-rose-300 border border-rose-700' 
                      : 'bg-stone-850 hover:bg-stone-800 text-stone-400'
                  }`}
                >
                  100% Before
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    sliderPosition === 50 
                      ? 'bg-amber-600 text-white' 
                      : 'bg-stone-850 hover:bg-stone-800 text-stone-400'
                  }`}
                >
                  50 / 50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(0)}
                  className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
                    sliderPosition === 0 
                      ? 'bg-emerald-900/80 text-emerald-300 border border-emerald-700' 
                      : 'bg-stone-850 hover:bg-stone-800 text-stone-400'
                  }`}
                >
                  100% After
                </button>
              </div>
            </div>

            {/* Side-by-Side Dual Card Preview below slider */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-stone-800">
              <div 
                onClick={() => setSliderPosition(100)}
                className="cursor-pointer group relative rounded-lg overflow-hidden border border-rose-900/50 bg-stone-900 hover:border-rose-500 transition-colors"
              >
                <div className="h-20 w-full overflow-hidden">
                  <img
                    src={activeCase.beforeImage}
                    alt="Before State Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-1.5 bg-stone-950 text-center">
                  <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wide block">
                    Before: Peeling Leatherette
                  </span>
                </div>
              </div>

              <div 
                onClick={() => setSliderPosition(0)}
                className="cursor-pointer group relative rounded-lg overflow-hidden border border-emerald-900/50 bg-stone-900 hover:border-emerald-500 transition-colors"
              >
                <div className="h-20 w-full overflow-hidden">
                  <img
                    src={activeCase.afterImage}
                    alt="After State Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-1.5 bg-stone-950 text-center">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide block">
                    After: Restored Mocha Suede
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Details */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{activeCase.location}</span>
                <span>·</span>
                <span>{activeCase.brand} Recliner</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {activeCase.title}
              </h3>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                  Initial Defect Reported:
                </span>
                <p className="text-stone-300">
                  {activeCase.issue}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Our Precision Fix:
                </span>
                <p className="text-stone-300">
                  {activeCase.solution}
                </p>
              </div>
            </div>

            {/* Turnaround & Customer Quote */}
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Turnaround: <strong className="text-white">{activeCase.turnaround}</strong></span>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(activeCase.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="text-[11px] text-stone-400 italic">
              Verified client: {activeCase.customerName}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
