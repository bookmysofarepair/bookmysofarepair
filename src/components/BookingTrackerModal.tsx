import React, { useState } from 'react';
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  User, 
  ShieldCheck, 
  Truck, 
  Armchair,
  Wrench,
  AlertCircle
} from 'lucide-react';
import { INITIAL_DEMO_BOOKINGS, CHENNAI_PHONE, CHENNAI_PHONE_CLEAN } from '../data/reclinerData';
import { BookMySofaLogo } from './BookMySofaLogo';

interface BookingTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBookingId?: string;
}

export const BookingTrackerModal: React.FC<BookingTrackerModalProps> = ({
  isOpen,
  onClose,
  defaultBookingId
}) => {
  const [searchInput, setSearchInput] = useState(defaultBookingId || 'CHN-REC-1042');
  const [activeBooking, setActiveBooking] = useState<any>(() => {
    // Check localStorage first
    try {
      const stored = localStorage.getItem('chennai_recliner_bookings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (defaultBookingId && parsed[defaultBookingId]) {
          return parsed[defaultBookingId];
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_DEMO_BOOKINGS['CHN-REC-1042'];
  });

  const [hasSearched, setHasSearched] = useState(false);
  const [notFound, setNotFound] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    setNotFound(false);

    const query = searchInput.trim().toUpperCase();

    // Check demo records first
    if (INITIAL_DEMO_BOOKINGS[query]) {
      setActiveBooking(INITIAL_DEMO_BOOKINGS[query]);
      return;
    }

    // Check local storage
    try {
      const stored = localStorage.getItem('chennai_recliner_bookings');
      if (stored) {
        const parsed = JSON.parse(stored);
        // By ID
        if (parsed[query]) {
          setActiveBooking(parsed[query]);
          return;
        }
        // By phone match
        const foundByPhone = Object.values(parsed).find((item: any) => 
          item.phoneNumber.replace(/\D/g, '').includes(searchInput.replace(/\D/g, ''))
        );
        if (foundByPhone) {
          setActiveBooking(foundByPhone);
          return;
        }
      }
    } catch (err) {
      console.error(err);
    }

    // Default match if query contains 1088
    if (query.includes('1088')) {
      setActiveBooking(INITIAL_DEMO_BOOKINGS['CHN-REC-1088']);
      return;
    }

    setNotFound(true);
  };

  const steps = [
    { title: 'Booking Confirmed', desc: 'Job registered in Chennai Dispatch System', done: true },
    { 
      title: 'Technician Dispatched', 
      desc: 'Mobile technician assigned with genuine spare parts kit', 
      done: true, 
      active: activeBooking?.status === 'Technician Dispatched' 
    },
    { 
      title: 'Doorstep Arrival & Diagnostic', 
      desc: 'On-site multimeter testing & scissor linkage check', 
      done: activeBooking?.status === 'Diagnosis & Repair in Progress' || activeBooking?.status === 'Completed', 
      active: activeBooking?.status === 'Diagnosis & Repair in Progress' 
    },
    { 
      title: 'Precision Repair & Load Testing', 
      desc: 'Parts installed and tested with 120kg weight cycle', 
      done: activeBooking?.status === 'Completed' || activeBooking?.status === 'Delivered with Warranty', 
      active: false 
    },
    { 
      title: 'Warranty Card Issued', 
      desc: '1-2 Year official replacement guarantee card handed over', 
      done: activeBooking?.status === 'Delivered with Warranty', 
      active: false 
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-stone-900 text-stone-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookMySofaLogo variant="light" className="h-8 sm:h-9 w-auto" />
            <div className="border-l border-stone-700 pl-2.5 hidden sm:block">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                Chennai Live Tracking
              </span>
              <span className="text-[11px] text-stone-400">
                Doorstep Van Dispatch
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-5">
          {/* Lookup Input Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Enter Booking ID (e.g. CHN-REC-1042) or Phone Number"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-lg shadow-xs cursor-pointer"
            >
              Track
            </button>
          </form>

          {/* Quick Demo Pre-set buttons */}
          <div className="flex items-center gap-2 text-[11px] text-stone-500">
            <span>Try sample codes:</span>
            <button
              type="button"
              onClick={() => {
                setSearchInput('CHN-REC-1042');
                setActiveBooking(INITIAL_DEMO_BOOKINGS['CHN-REC-1042']);
                setNotFound(false);
              }}
              className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-mono font-bold cursor-pointer"
            >
              CHN-REC-1042 (Anna Nagar)
            </button>
            <button
              type="button"
              onClick={() => {
                setSearchInput('CHN-REC-1088');
                setActiveBooking(INITIAL_DEMO_BOOKINGS['CHN-REC-1088']);
                setNotFound(false);
              }}
              className="px-2 py-0.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded font-mono font-bold cursor-pointer"
            >
              CHN-REC-1088 (Velachery)
            </button>
          </div>

          {notFound ? (
            <div className="p-6 text-center bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="text-sm font-bold text-stone-800">Booking Record Not Found</h4>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                No active booking found for "{searchInput}". Please verify the booking ID or call our Chennai dispatch team at {CHENNAI_PHONE}.
              </p>
            </div>
          ) : activeBooking ? (
            <div className="space-y-5">
              {/* Top Booking Card */}
              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200/80 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-amber-950 bg-amber-200/80 px-2 py-0.5 rounded">
                    {activeBooking.id}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    {activeBooking.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-500 block text-[11px]">Customer & Area:</span>
                    <span className="font-bold text-stone-900">{activeBooking.customerName}</span>
                    <span className="text-stone-600 block text-[11px] truncate">{activeBooking.area}</span>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-[11px]">Recliner & Defect:</span>
                    <span className="font-bold text-stone-900">{activeBooking.reclinerType}</span>
                    <span className="text-stone-600 block text-[11px] truncate">{activeBooking.issueType}</span>
                  </div>
                </div>

                {activeBooking.estimatedCost && (
                  <div className="pt-2 border-t border-amber-200/60 text-[11px] text-amber-900 flex justify-between">
                    <span>Quotation: <strong>{activeBooking.estimatedCost}</strong></span>
                    <span>Slot: <strong>{activeBooking.preferredDate || 'Scheduled Today'}</strong></span>
                  </div>
                )}
              </div>

              {/* Assigned Technician Profile */}
              {activeBooking.assignedTechnician && (
                <div className="p-4 bg-stone-900 text-stone-100 rounded-xl border border-stone-800 flex items-center justify-between gap-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0 border-2 border-amber-400">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-amber-400">
                        Assigned Chennai Technician
                      </div>
                      <div className="text-sm font-bold text-white">
                        {activeBooking.assignedTechnician.name}
                      </div>
                      <div className="text-[11px] text-stone-300">
                        {activeBooking.assignedTechnician.experience} · ★ {activeBooking.assignedTechnician.rating}
                      </div>
                    </div>
                  </div>

                  <a
                    href={`tel:${CHENNAI_PHONE_CLEAN}`}
                    className="p-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl flex items-center gap-1.5 text-xs font-bold shrink-0 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Call Tech</span>
                  </a>
                </div>
              )}

              {/* Progress Stepper */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">
                  Live Dispatch Timeline
                </h4>
                <div className="space-y-4 relative pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
                  {steps.map((st, idx) => (
                    <div key={idx} className="relative flex items-start gap-3">
                      <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                        st.done 
                          ? 'bg-amber-600 border-amber-600 text-white' 
                          : st.active
                          ? 'bg-white border-amber-600 text-amber-600 animate-pulse'
                          : 'bg-white border-stone-300 text-transparent'
                      }`}>
                        {st.done && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${
                          st.active ? 'text-amber-800 font-extrabold' : st.done ? 'text-stone-900' : 'text-stone-400'
                        }`}>
                          {st.title} {st.active && <span className="text-[10px] text-amber-600 ml-1 font-normal">(In Progress)</span>}
                        </div>
                        <div className="text-[11px] text-stone-500">
                          {st.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help Line */}
              <div className="pt-2 border-t border-stone-200 text-center text-xs text-stone-500">
                Need to reschedule or speak to Chennai Dispatch? Call{' '}
                <a href={`tel:${CHENNAI_PHONE_CLEAN}`} className="font-bold text-amber-800 underline">
                  {CHENNAI_PHONE}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
