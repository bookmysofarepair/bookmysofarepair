import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Armchair,
  Star,
  Award
} from 'lucide-react';
import { CHENNAI_AREAS, CHENNAI_PHONE, CHENNAI_PHONE_CLEAN } from '../data/reclinerData';

interface HeroProps {
  onOpenBooking: (prefill?: { area?: string; service?: string; reclinerType?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedArea, setSelectedArea] = useState('Anna Nagar');
  const [selectedIssue, setSelectedIssue] = useState('Broken Pull Cable & Handle');
  const [selectedType, setSelectedType] = useState('Motorized Electric Recliner');
  const [phoneInput, setPhoneInput] = useState('');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);

  const hotspots = [
    {
      id: 0,
      title: 'Linear Electric Actuator Motor',
      position: 'bottom-20 left-1/3',
      badge: 'Electrical',
      desc: 'Genuine Linak, Kaidi & Okin 29V replacement motors for recliners that buzz, click, or won\'t move.',
      warranty: '1 - 2 Years Replacement Warranty'
    },
    {
      id: 1,
      title: 'Braided Steel Parachute Cable',
      position: 'top-1/2 left-10',
      badge: 'Mechanical',
      desc: 'Heavy-duty 3mm stainless steel cables & cast alloy release handles to fix floppy or loose levers.',
      warranty: '1 Year Full Warranty'
    },
    {
      id: 2,
      title: 'Scissor Footrest Linkage & Rivets',
      position: 'bottom-8 right-12',
      badge: 'Structural',
      desc: 'High-carbon steel link realignment and aerospace rivets to eliminate stuck, jamming footrests.',
      warranty: '1 Year Mechanical Warranty'
    },
    {
      id: 3,
      title: '40D/50D Ergonomic Molded Foam',
      position: 'top-1/3 right-1/4',
      badge: 'Comfort',
      desc: 'Replaces deflated, sunken seating with orthopedic high-resilience foam and lumbar microfibre.',
      warranty: '3 Years Anti-Sag Warranty'
    }
  ];

  const handleHeroBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking({
      area: selectedArea,
      reclinerType: selectedType,
      service: selectedIssue
    });
  };

  return (
    <section className="relative overflow-hidden bg-stone-900 text-stone-100 pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-600 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-amber-700 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Clean Trust Header */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-amber-300 font-semibold tracking-wide">
          <span className="flex items-center gap-1.5 text-stone-200">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Exclusively Dedicated to Chennai City & Suburbs</span>
          </span>
          <span className="text-stone-500">·</span>
          <span>Doorstep Repair Within a Day</span>
          <span className="text-stone-500">·</span>
          <span className="text-emerald-400">சென்னையில் நம்பகமான ரெக்லைனர் சர்வீஸ்</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Value Prop & Hero Booking Box */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Book My Sofa Repair <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Chennai Doorstep Recliner Repair
              </span> & Restoration
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
              Book My Sofa Repair Chennai is your dedicated doorstep specialist for recliners. Whether it's a snapped pull cable, seized electric motor, stuck footrest mechanism, sagging lumbar foam, or peeling leather — our certified Chennai specialists fix it <strong className="text-amber-300 font-semibold">right inside your living room</strong>.
            </p>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-stone-800 text-xs">
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-amber-400">1,840+</span>
                <span className="text-stone-400">Recliners Restored</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white">Within a Day</span>
                <span className="text-stone-400">Doorstep Arrival</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-white">100% OEM</span>
                <span className="text-stone-400">Genuine Spare Parts</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold text-emerald-400">1–2 Years</span>
                <span className="text-stone-400">Written Warranty</span>
              </div>
            </div>

            {/* Quick Hero Booking Card */}
            <div className="bg-stone-800/90 border border-stone-700/80 rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Book Doorstep Inspection in Chennai
                  </h3>
                </div>
                <span className="text-xs text-amber-400 font-medium">Free with repair</span>
              </div>

              <form onSubmit={handleHeroBookingSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Chennai Locality
                    </label>
                    <select
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-stone-100 text-xs rounded-lg px-3 py-2.5 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all cursor-pointer"
                    >
                      {CHENNAI_AREAS.map((area) => (
                        <option key={area.id} value={area.name}>
                          {area.name} ({area.pincode})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Recliner Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-stone-100 text-xs rounded-lg px-3 py-2.5 focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all cursor-pointer"
                    >
                      <option value="Single Motorized Recliner">Single Motorized Electric</option>
                      <option value="Manual Pull Handle Recliner">Manual Pull Handle Recliner</option>
                      <option value="Dual Motor Lift Chair">Dual Motor Power Lift Chair</option>
                      <option value="2-Seater with Console">2-Seater Recliner Console</option>
                      <option value="3-Seater Home Theatre">3-Seater Home Cinema Recliner</option>
                      <option value="Swivel Rocker Recliner">360° Swivel Rocker Recliner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1">
                      Primary Issue
                    </label>
                    <select
                      value={selectedIssue}
                      onChange={(e) => setSelectedIssue(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-700 text-stone-100 text-xs rounded-lg px-3 py-2.5 focus:outline-hidden focus:border-amber-500"
                    >
                      <option value="Broken Pull Cable & Handle">Broken Pull Cable & Handle</option>
                      <option value="Motor Not Working / Humming">Motor Not Working / Humming</option>
                      <option value="Footrest Stuck Open / Won't Close">Footrest Stuck Open / Won't Close</option>
                      <option value="Sagging Seat & Deflated Foam">Sagging Seat & Deflated Foam</option>
                      <option value="Leather Peeling & Reupholstery">Leather Peeling & Reupholstery</option>
                      <option value="Squeaking / Metal Grinding Noises">Squeaking / Metal Grinding Noises</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <input
                    type="tel"
                    placeholder="Enter 10-digit Chennai Mobile Number"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="flex-1 bg-stone-900 border border-stone-700 text-stone-100 placeholder-stone-500 text-xs rounded-lg px-3.5 py-2.5 focus:outline-hidden focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                  >
                    <span>Check Technician Availability</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>

              <div className="mt-3 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  No advance payment needed for inspection
                </span>
                <span className="hidden sm:inline">Certified Chennai Recliner Techs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Anatomy of a Recliner */}
          <div className="lg:col-span-5">
            <div className="bg-stone-800/80 border border-stone-700/80 rounded-2xl p-5 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-700">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Armchair className="w-4 h-4 text-amber-400" />
                    Interactive Recliner Anatomy
                  </h3>
                  <p className="text-[11px] text-stone-400">
                    Tap a component below to see how our Chennai technicians fix it
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-amber-950 text-amber-300 border border-amber-800/60 rounded">
                  Diagnostics
                </span>
              </div>

              {/* Graphical Recliner Visual Area with Hotspots */}
              <div className="relative w-full h-64 bg-stone-950/70 rounded-xl border border-stone-800 flex items-center justify-center overflow-hidden p-4">
                {/* Stylized Recliner Vector Illustration */}
                <svg className="w-48 h-48 text-stone-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Backrest */}
                  <path d="M30 20 C30 15, 45 12, 55 12 C60 12, 65 16, 62 35 L58 60" className="stroke-amber-500/80" strokeWidth="3.5" />
                  {/* Seat Cushion */}
                  <path d="M32 60 C38 60, 68 60, 75 60 C78 60, 80 64, 78 68 C76 72, 30 72, 28 68 C27 64, 29 60, 32 60 Z" className="stroke-amber-400/90" strokeWidth="3" />
                  {/* Armrests */}
                  <path d="M25 40 C35 38, 48 38, 52 45 L50 68" strokeWidth="2.5" />
                  {/* Extended Footrest */}
                  <path d="M75 62 L88 68 C92 70, 94 74, 91 76 L78 72" className="stroke-stone-300" strokeWidth="3" />
                  {/* Base & Scissor Linkage */}
                  <path d="M38 72 L38 86 M68 72 L68 86 M30 86 L76 86" strokeWidth="2.5" />
                  <path d="M45 74 L60 84 M60 74 L45 84" className="stroke-stone-500" strokeWidth="1.5" />
                </svg>

                {/* Hotspot buttons */}
                {hotspots.map((spot) => {
                  const isSelected = activeHotspot === spot.id;
                  let positionClasses = '';
                  if (spot.id === 0) positionClasses = 'bottom-6 left-1/3';
                  if (spot.id === 1) positionClasses = 'top-16 left-6';
                  if (spot.id === 2) positionClasses = 'bottom-10 right-8';
                  if (spot.id === 3) positionClasses = 'top-10 right-1/4';

                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot.id)}
                      className={`absolute ${positionClasses} group flex items-center justify-center cursor-pointer transition-transform duration-200 z-10 ${
                        isSelected ? 'scale-125' : 'hover:scale-110'
                      }`}
                      aria-label={spot.title}
                    >
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-lg border-2 ${
                        isSelected 
                          ? 'bg-amber-500 text-stone-950 border-white ring-4 ring-amber-500/30' 
                          : 'bg-stone-800 text-amber-400 border-amber-500/60'
                      }`}>
                        {spot.id + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Hotspot Details Card */}
              {activeHotspot !== null && (
                <div className="mt-3.5 bg-stone-900 border border-stone-700/80 rounded-xl p-3.5">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-amber-600 text-white text-[11px] font-bold flex items-center justify-center">
                        {activeHotspot + 1}
                      </span>
                      <h4 className="text-xs font-bold text-white">
                        {hotspots[activeHotspot].title}
                      </h4>
                    </div>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-amber-300 font-semibold">
                      {hotspots[activeHotspot].badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-300 mb-2 leading-relaxed">
                    {hotspots[activeHotspot].desc}
                  </p>
                  <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-stone-800">
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {hotspots[activeHotspot].warranty}
                    </span>
                    <button
                      onClick={() => onOpenBooking({ service: hotspots[activeHotspot].title })}
                      className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
                    >
                      Book Doorstep Repair →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
