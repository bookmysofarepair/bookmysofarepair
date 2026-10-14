import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CostEstimator } from './components/CostEstimator';
import { ServicesSection } from './components/ServicesSection';
import { ChennaiCoverage } from './components/ChennaiCoverage';
import { SymptomDiagnostic } from './components/SymptomDiagnostic';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { BrandCompatibility } from './components/BrandCompatibility';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingActionButtons } from './components/FloatingActionButtons';
import { QuickBookingModal } from './components/QuickBookingModal';
import { BookingTrackerModal } from './components/BookingTrackerModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    area?: string;
    service?: string;
    reclinerType?: string;
    estimatedCost?: string;
  }>({});

  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState<string>('CHN-REC-1042');

  const handleOpenBooking = (prefill?: {
    area?: string;
    service?: string;
    reclinerType?: string;
    estimatedCost?: string;
  }) => {
    if (prefill) {
      setBookingPrefill(prefill);
    } else {
      setBookingPrefill({});
    }
    setIsBookingOpen(true);
  };

  const handleOpenTracker = (id?: string) => {
    if (id) setActiveTrackId(id);
    setIsTrackerOpen(true);
  };

  const handleBookingSuccess = (newBookingId: string) => {
    setActiveTrackId(newBookingId);
  };

  const handleSelectArea = (areaName: string) => {
    handleOpenBooking({ area: areaName });
  };

  const handleSelectService = (serviceTitle: string) => {
    handleOpenBooking({ service: serviceTitle });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        onOpenTracker={() => handleOpenTracker()} 
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero with Chennai live dispatch & interactive recliner visualizer */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Brand compatibility ticker / banner */}
        <BrandCompatibility />

        {/* Interactive Cost Estimator */}
        <CostEstimator onOpenBooking={handleOpenBooking} />

        {/* Specialized Recliner Services Grid */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Chennai Neighborhood Coverage & Pincode Finder */}
        <ChennaiCoverage onSelectArea={handleSelectArea} />

        {/* Interactive Recliner Faults & Self-Diagnostic Tool */}
        <SymptomDiagnostic onOpenBooking={handleOpenBooking} />

        {/* Interactive Draggable Before & After Restoration Showcase */}
        <BeforeAfterShowcase />

        {/* 4-Step Doorstep Workflow */}
        <ProcessSection onOpenBooking={() => handleOpenBooking()} />

        {/* Chennai Customer Testimonials & Reviews */}
        <ReviewsSection />

        {/* Chennai FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracker={() => handleOpenTracker()}
        onSelectArea={handleSelectArea}
      />

      {/* Sticky Call & WhatsApp Floating CTA on mobile and desktop */}
      <FloatingActionButtons onOpenBooking={() => handleOpenBooking()} />

      {/* Quick Doorstep Booking Modal */}
      <QuickBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        prefill={bookingPrefill}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Booking Tracker Modal */}
      <BookingTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        defaultBookingId={activeTrackId}
      />
    </div>
  );
}
