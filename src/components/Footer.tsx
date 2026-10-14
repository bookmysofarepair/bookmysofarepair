import React from 'react';
import { 
  Armchair, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  Heart
} from 'lucide-react';
import { 
  CHENNAI_PHONE, 
  CHENNAI_PHONE_CLEAN, 
  CHENNAI_EMAIL, 
  CHENNAI_OFFICE_ADDRESS, 
  CHENNAI_AREAS 
} from '../data/reclinerData';
import { BookMySofaLogo } from './BookMySofaLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
  onSelectArea: (area: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenBooking, 
  onOpenTracker, 
  onSelectArea 
}) => {
  const whatsappMessage = encodeURIComponent(
    "Hello Chennai Recliner Repair! I want to enquire about recliner repair service in Chennai."
  );

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-24 sm:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <BookMySofaLogo variant="light" className="h-10 sm:h-11 w-auto" />
              <div className="text-[11px] text-amber-400 font-semibold tracking-wide pl-1">
                Chennai Recliner Specialists · bookmysofarepair.in
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-xs">
              Chennai's premier doorstep service dedicated solely to recliner sofas. We replace linear motors, pull cables, footrest scissor linkages, and provide high-density foam & Italian leather restoration right at your home.
            </p>

            <div className="space-y-2 pt-1 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{CHENNAI_OFFICE_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${CHENNAI_PHONE_CLEAN}`} className="hover:text-white font-bold text-amber-400">
                  {CHENNAI_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Open 7 Days a Week: 8:30 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Recliner Services
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  Cost Estimator
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">
                  Chennai Localities
                </a>
              </li>
              <li>
                <a href="#anatomy" className="hover:text-amber-400 transition-colors">
                  Fault Diagnosis
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-amber-400 transition-colors">
                  Before & After Cases
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenTracker}
                  className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
                >
                  Track Existing Booking →
                </button>
              </li>
            </ul>
          </div>

          {/* Common Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Repairs
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>Motorized Recliner Actuator Fix</li>
              <li>Parachute Steel Pull Cable Replacement</li>
              <li>Footrest Scissor Linkage Realignment</li>
              <li>Sagging Foam & Lumbar Overhaul (45D)</li>
              <li>Genuine Italian Leather Reupholstery</li>
              <li>Home Theatre Cinema Recliner Maintenance</li>
              <li>Dual Motor Power Lift Chair Service</li>
            </ul>
          </div>

          {/* Chennai Service Hubs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Chennai Regional Hubs
            </h4>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-center justify-between py-1 border-b border-stone-900">
                <span>Central Chennai</span>
                <span className="text-stone-300">Anna Nagar / T. Nagar</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-stone-900">
                <span>South & OMR</span>
                <span className="text-stone-300">Velachery / Adyar / OMR</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-stone-900">
                <span>West Chennai</span>
                <span className="text-stone-300">Porur / Vadapalani</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-stone-900">
                <span>South-West Suburbs (HQ)</span>
                <span className="text-amber-300 font-semibold">Mudichur / Varadharajapuram</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full mt-3 py-2 px-3 bg-amber-700 hover:bg-amber-600 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Book Doorstep Inspection Now
            </button>
          </div>
        </div>

        {/* Chennai Neighborhood Cloud */}
        <div className="pt-8 border-t border-stone-900">
          <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3">
            Doorstep Recliner Repair Available Across All Chennai Localities:
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-stone-400">
            {CHENNAI_AREAS.slice(0, 24).map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => onSelectArea(area.name)}
                className="hover:text-amber-400 hover:underline cursor-pointer"
              >
                {area.name} ({area.pincode}) ·
              </button>
            ))}
            <span className="text-stone-400">and all surrounding Chennai regions</span>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400">
          <p>
            © {new Date().getFullYear()} Book My Sofa Repair (Chennai). Dedicated Doorstep Recliner Mechanism, Motor & Leather Restoration.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Genuine Spare Parts & Written Warranty
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
