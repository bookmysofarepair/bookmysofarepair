import React, { useState } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Search, 
  Calendar, 
  Armchair, 
  MessageCircle, 
  CheckCircle2
} from 'lucide-react';
import { CHENNAI_PHONE, CHENNAI_PHONE_CLEAN } from '../data/reclinerData';
import { BookMySofaLogo } from './BookMySofaLogo';

interface NavbarProps {
  onOpenBooking: (prefill?: { area?: string; service?: string; reclinerType?: string }) => void;
  onOpenTracker: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenTracker }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Book My Sofa Repair! I need doorstep repair service for my recliner sofa in Chennai. Please let me know technician availability."
  );

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Chennai Local Dispatch Notice Bar */}
      <div className="bg-stone-900 text-stone-100 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-amber-300">Book My Sofa Repair (Chennai):</span>
            <span className="text-stone-300 hidden sm:inline">Active doorstep technicians in Anna Nagar, Velachery, OMR, Adyar & Porur</span>
            <span className="text-stone-300 sm:hidden">Doorstep visits across all Chennai zones</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300 text-xs ml-auto">
            <div className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Doorstep Visit Within a Day</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Genuine OEM Motors & Cables</span>
            </div>
            <button 
              onClick={onOpenTracker}
              className="text-amber-400 hover:text-amber-300 underline underline-offset-2 font-medium cursor-pointer"
            >
              Track Booking Status
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Chennai Tagline */}
          <a href="#" className="flex items-center gap-3 group py-1" aria-label="Book My Sofa Repair Home">
            <BookMySofaLogo variant="dark" className="h-10 sm:h-12 w-auto" withTagline={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            <a href="#services" className="hover:text-amber-800 transition-colors">
              Recliner Services
            </a>
            <a href="#calculator" className="hover:text-amber-800 transition-colors">
              Cost Estimator
            </a>
            <a href="#coverage" className="hover:text-amber-800 transition-colors">
              Chennai Localities
            </a>
            <a href="#anatomy" className="hover:text-amber-800 transition-colors">
              Fault Diagnosis
            </a>
            <a href="#before-after" className="hover:text-amber-800 transition-colors">
              Before & After
            </a>
            <a href="#reviews" className="hover:text-amber-800 transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-amber-800 transition-colors">
              FAQs
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${CHENNAI_PHONE_CLEAN}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${CHENNAI_PHONE_CLEAN}`}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{CHENNAI_PHONE}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Doorstep Visit</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CHENNAI_PHONE_CLEAN}`}
              className="p-2 text-amber-700 bg-amber-50 rounded-lg border border-amber-200"
              aria-label="Call Chennai Recliner Repair"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="p-3 bg-amber-50/70 rounded-xl border border-amber-200/60 mb-2">
            <div className="text-xs font-semibold text-amber-950 flex items-center gap-1 mb-1">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              Chennai Recliner Emergency Helpline
            </div>
            <div className="text-xs text-stone-600">
              Direct Doorstep Dispatch across all Chennai zones
            </div>
            <div className="mt-2 flex gap-2">
              <a
                href={`tel:${CHENNAI_PHONE_CLEAN}`}
                className="flex-1 py-2 text-center text-xs font-bold bg-amber-700 text-white rounded-lg"
              >
                Call: {CHENNAI_PHONE}
              </a>
              <a
                href={`https://wa.me/${CHENNAI_PHONE_CLEAN}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-xs font-bold bg-emerald-600 text-white rounded-lg flex items-center justify-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="space-y-1 text-sm font-medium text-stone-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Recliner Repair Services
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Interactive Cost Estimator
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Chennai Localities & Pincodes
            </a>
            <a
              href="#anatomy"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Recliner Anatomy & Diagnostics
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Before & After Transformations
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Chennai Customer Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-stone-100"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full py-2.5 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg border border-stone-300 flex items-center justify-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Track Existing Chennai Booking</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 rounded-lg shadow-sm flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Doorstep Inspection</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
