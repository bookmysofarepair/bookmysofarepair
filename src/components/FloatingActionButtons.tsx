import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CHENNAI_PHONE, CHENNAI_PHONE_CLEAN } from '../data/reclinerData';

interface FloatingActionButtonsProps {
  onOpenBooking: () => void;
}

export const FloatingActionButtons: React.FC<FloatingActionButtonsProps> = ({ onOpenBooking }) => {
  const whatsappMessage = encodeURIComponent(
    "Hello Chennai Recliner Repair! I need urgent repair for my recliner sofa in Chennai. Please let me know technician availability."
  );

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CHENNAI_PHONE_CLEAN}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200"
          aria-label="WhatsApp Chennai Recliner Repair"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold tracking-wide max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            WhatsApp Chennai
          </span>
        </a>

        {/* Direct Phone Call Button */}
        <a
          href={`tel:${CHENNAI_PHONE_CLEAN}`}
          className="group flex items-center gap-2 px-4 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200"
          aria-label="Call Chennai Recliner Repair"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-bold tracking-wide">
            {CHENNAI_PHONE}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Floating Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${CHENNAI_PHONE_CLEAN}`}
          className="flex-1 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-700" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${CHENNAI_PHONE_CLEAN}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-1.2 py-2.5 px-3 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </button>
      </div>
    </>
  );
};
