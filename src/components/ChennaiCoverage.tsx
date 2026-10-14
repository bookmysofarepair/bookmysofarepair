import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  Clock, 
  Users, 
  CheckCircle2, 
  Navigation,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CHENNAI_AREAS } from '../data/reclinerData';

interface ChennaiCoverageProps {
  onSelectArea: (areaName: string) => void;
}

export const ChennaiCoverage: React.FC<ChennaiCoverageProps> = ({ onSelectArea }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const zones = ['All', 'Central Chennai', 'South Chennai & OMR', 'West Chennai', 'North Chennai', 'Chennai Suburbs'];

  const filteredAreas = useMemo(() => {
    return CHENNAI_AREAS.filter((area) => {
      const matchesSearch = 
        area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.pincode.includes(searchQuery) ||
        area.zone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        area.nearestHub.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesZone = selectedZone === 'All' || area.zone === selectedZone;

      return matchesSearch && matchesZone;
    });
  }, [searchQuery, selectedZone]);

  return (
    <section id="coverage" className="py-16 lg:py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest mb-2 px-3 py-1 bg-amber-100 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            100% Chennai Doorstep Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Doorstep Recliner Repair in Every Chennai Neighborhood
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Our certified recliner repair technicians operate across all 15 Chennai Corporation zones. Enter your area or pincode to check technician availability today.
          </p>
        </div>

        {/* Live Van Dispatch Stats Banner */}
        <div className="mb-8 p-4 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Chennai Mobile Fleet Active
              </div>
              <div className="text-sm font-medium text-stone-200">
                5 Regional Service Hubs & Fully Stocked Mobile Vans in Chennai
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Avg. Response: <strong>45 Mins</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>18+ Certified Technicians</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Tools & OEM Spares on Board</span>
            </div>
          </div>
        </div>

        {/* Search Bar & Zone Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="Search by area name or 6-digit Pincode (e.g., Velachery, 600040, Adyar, OMR)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm focus:outline-hidden focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-600/10 transition-all text-stone-900 placeholder-stone-500 shadow-xs"
            />
          </div>

          {/* Zone filter segmented tabs */}
          <div className="flex items-center justify-center flex-wrap gap-1.5">
            {zones.map((zone) => (
              <button
                key={zone}
                type="button"
                onClick={() => setSelectedZone(zone)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedZone === zone
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-amber-400/80 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                    Pin: {area.pincode}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{area.availableTechnicians} Active Techs</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {area.name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Zone: {area.zone}
                </p>
                <div className="mt-2 text-xs text-stone-600 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Doorstep visit in ~{area.avgResponseMins} mins</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-[10px] text-stone-400 font-medium truncate max-w-[120px]">
                  {area.nearestHub}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectArea(area.name)}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer group-hover:underline"
                >
                  <span>Book in {area.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="text-center py-12 bg-stone-50 rounded-2xl border border-stone-200">
            <MapPin className="w-8 h-8 text-stone-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-stone-700">Area Not Found in Quick List?</h4>
            <p className="text-xs text-stone-500 mt-1 max-w-md mx-auto">
              We service <strong>all locations in Chennai and surrounding suburbs</strong>. Book an inspection or contact us directly at +91 97911 80388.
            </p>
            <button
              type="button"
              onClick={() => onSelectArea(searchQuery || 'Chennai City')}
              className="mt-4 px-4 py-2 bg-amber-700 text-white font-bold text-xs rounded-lg hover:bg-amber-800 cursor-pointer"
            >
              Book Inspection for "{searchQuery || 'My Area'}"
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
