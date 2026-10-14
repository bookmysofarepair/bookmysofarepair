import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  User, 
  Armchair, 
  Wrench, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle,
  Camera,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CHENNAI_AREAS, CHENNAI_PHONE, CHENNAI_PHONE_CLEAN } from '../data/reclinerData';
import { BookingRequest } from '../types/recliner';
import { BookMySofaLogo } from './BookMySofaLogo';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    area?: string;
    service?: string;
    reclinerType?: string;
    estimatedCost?: string;
  };
  onBookingSuccess: (bookingId: string) => void;
}

export const QuickBookingModal: React.FC<QuickBookingModalProps> = ({
  isOpen,
  onClose,
  prefill,
  onBookingSuccess
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [area, setArea] = useState(prefill?.area || 'Anna Nagar');
  const [address, setAddress] = useState('');
  const [reclinerType, setReclinerType] = useState(prefill?.reclinerType || 'Single Motorized Electric');
  const [issueType, setIssueType] = useState(prefill?.service || 'Broken Pull Cable & Handle');
  const [description, setDescription] = useState('');
  const [preferredDate, setPreferredDate] = useState('Today (Within a Day)');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('Immediate / Next Available Slot');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRequest | null>(null);

  // Sync prefill changes
  useEffect(() => {
    if (prefill?.area) setArea(prefill.area);
    if (prefill?.service) setIssueType(prefill.service);
    if (prefill?.reclinerType) setReclinerType(prefill.reclinerType);
  }, [prefill]);

  if (!isOpen) return null;

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phoneNumber || !address) {
      alert('Please fill in your Name, Mobile Number, and Chennai Address.');
      return;
    }

    setIsSubmitting(true);

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const bookingId = `CHN-REC-${randomNum}`;

    const newBooking: BookingRequest = {
      id: bookingId,
      customerName,
      phoneNumber,
      area,
      address,
      reclinerType,
      issueType,
      description,
      preferredDate,
      preferredTimeSlot,
      status: 'Inspection Scheduled',
      assignedTechnician: {
        name: 'Suresh Kumar (Recliner Specialist)',
        phone: CHENNAI_PHONE,
        experience: '9+ Years in Motor & Mechanism Repair',
        rating: 4.9
      },
      estimatedCost: prefill?.estimatedCost || 'Inspection Free with Repair (₹199 otherwise)',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', Today'
    };

    // Save to localStorage
    try {
      const stored = localStorage.getItem('chennai_recliner_bookings');
      const list = stored ? JSON.parse(stored) : {};
      list[bookingId] = newBooking;
      localStorage.setItem('chennai_recliner_bookings', JSON.stringify(list));
    } catch (err) {
      console.error(err);
    }

    // Fire Confetti!
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking(newBooking);
      onBookingSuccess(bookingId);
    }, 400);
  };

  const getWhatsAppBookingUrl = (booking: BookingRequest) => {
    const text = encodeURIComponent(
      `Hello Book My Sofa Repair (Chennai)! I booked a doorstep recliner service.\n\n` +
      `📋 Booking ID: ${booking.id}\n` +
      `👤 Name: ${booking.customerName}\n` +
      `📞 Phone: ${booking.phoneNumber}\n` +
      `📍 Area: ${booking.area}, Chennai\n` +
      `🏠 Address: ${booking.address}\n` +
      `🛋️ Recliner: ${booking.reclinerType}\n` +
      `⚠️ Issue: ${booking.issueType}\n` +
      `⏰ Slot: ${booking.preferredDate} (${booking.preferredTimeSlot})\n\n` +
      `Please confirm technician arrival.`
    );
    return `https://wa.me/${CHENNAI_PHONE_CLEAN}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
        {/* Header */}
        <div className="bg-stone-900 text-stone-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookMySofaLogo variant="light" className="h-8 sm:h-9 w-auto" />
            <div className="border-l border-stone-700 pl-2.5 hidden sm:block">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                Chennai Doorstep Service
              </span>
              <span className="text-[11px] text-stone-400">
                Doorstep Visit Within a Day
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

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {confirmedBooking ? (
            /* Confirmation Success Screen */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-800 bg-amber-100 px-2.5 py-1 rounded">
                  Booking Confirmed
                </span>
                <h3 className="text-2xl font-black text-stone-900 mt-2">
                  Doorstep Inspection Scheduled!
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Your Booking Reference: <strong className="text-stone-900 text-sm font-mono">{confirmedBooking.id}</strong>
                </p>
              </div>

              {/* Technician Dispatch Box */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="text-stone-500 font-medium">Assigned Service Hub:</span>
                  <span className="font-bold text-stone-900">{confirmedBooking.area} Hub (Chennai)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-bold text-stone-800">{confirmedBooking.issueType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Estimated Arrival:</span>
                  <span className="font-bold text-amber-700">{confirmedBooking.preferredDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Assigned Tech:</span>
                  <span className="font-bold text-stone-900">{confirmedBooking.assignedTechnician?.name}</span>
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-emerald-700">
                  <span className="flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Genuine OEM Spares & 1-Year Warranty
                  </span>
                  <span>{confirmedBooking.estimatedCost}</span>
                </div>
              </div>

              {/* WhatsApp & Call CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppBookingUrl(confirmedBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details on WhatsApp</span>
                </a>
                <a
                  href={`tel:${CHENNAI_PHONE_CLEAN}`}
                  className="py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>Call {CHENNAI_PHONE}</span>
                </a>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
              >
                Close and return to website
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Estimated hint banner if available */}
              {prefill?.estimatedCost && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-center justify-between text-xs">
                  <span className="text-amber-950 font-medium">
                    Estimated Cost Range: <strong>{prefill.estimatedCost}</strong>
                  </span>
                  <span className="text-[10px] text-amber-800 font-bold bg-amber-200/60 px-2 py-0.5 rounded">
                    Doorstep Free with Repair
                  </span>
                </div>
              )}

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh S."
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Mobile Number (Chennai) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98400 12345"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Area & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Chennai Locality *
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full py-2 px-3 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                  >
                    {CHENNAI_AREAS.map((a) => (
                      <option key={a.id} value={a.name}>
                        {a.name} ({a.pincode})
                      </option>
                    ))}
                    <option value="Other Chennai Area">Other Chennai Locality</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Apartment / Flat & Street Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <input
                      type="text"
                      required
                      placeholder="Flat No, Apartment Name, Landmark"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Recliner Type & Issue */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Recliner Type
                  </label>
                  <select
                    value={reclinerType}
                    onChange={(e) => setReclinerType(e.target.value)}
                    className="w-full py-2 px-3 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                  >
                    <option value="Single Motorized Electric">Single Motorized Electric Recliner</option>
                    <option value="Manual Pull Handle Recliner">Manual Pull Handle Recliner</option>
                    <option value="Dual Motor Lift Chair">Dual Motor Power Lift Chair</option>
                    <option value="2-Seater with Console">2-Seater Recliner with Console</option>
                    <option value="3-Seater Cinema Recliner">3-Seater Cinema Recliner</option>
                    <option value="Swivel Rocker Recliner">Swivel Rocker Recliner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Reported Issue
                  </label>
                  <select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="w-full py-2 px-3 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                  >
                    <option value="Broken Pull Cable & Handle">Broken Pull Cable & Handle</option>
                    <option value="Electric Motor Not Working / Stuck">Electric Motor Not Working / Stuck</option>
                    <option value="Footrest Jammed Open / Won't Close">Footrest Jammed Open / Won't Close</option>
                    <option value="Power Supply / Remote Switch Blown">Power Supply / Remote Switch Blown</option>
                    <option value="Sagging Seat & Deflated Foam">Sagging Seat & Deflated Foam</option>
                    <option value="Leather Peeling / Reupholstery">Leather Peeling / Reupholstery</option>
                    <option value="Metal Squeaking & Loose Frame">Metal Squeaking & Loose Frame</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <select
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                    >
                      <option value="Today (Within a Day)">Today Express (Within a Day)</option>
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="This Weekend (Saturday/Sunday)">This Weekend (Saturday/Sunday)</option>
                      <option value="Specific Date Required">Pick Custom Date</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                    <select
                      value={preferredTimeSlot}
                      onChange={(e) => setPreferredTimeSlot(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                    >
                      <option value="Immediate / Next Available Slot">Immediate / Next Available Slot</option>
                      <option value="Morning (9:30 AM - 12:30 PM)">Morning (9:30 AM - 12:30 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:30 PM - 8:00 PM)">Evening (4:30 PM - 8:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional Photo Attachment */}
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Upload Photo of Damaged Part / Brand Label (Optional)
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-3 py-2 border border-dashed border-stone-300 rounded-lg bg-stone-50 hover:bg-stone-100 cursor-pointer text-xs text-stone-600">
                    <Camera className="w-4 h-4 text-amber-600" />
                    <span>{photoPreview ? 'Change Photo' : 'Attach Photo'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                  </label>
                  {photoPreview && (
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-amber-300">
                      <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <span className="text-[11px] text-stone-400">
                    Helps the Chennai technician bring the exact matching OEM part.
                  </span>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Additional Notes (e.g. Brand name, floor number, gate code)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. La-Z-Boy single seater, handle broke off on right side..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs text-stone-900 focus:bg-white focus:border-amber-600 focus:outline-hidden"
                />
              </div>

              {/* Guarantee Disclaimer */}
              <div className="p-3 bg-stone-100/70 rounded-xl border border-stone-200 text-[11px] text-stone-600 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-stone-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Doorstep Guarantee in Chennai</span>
                </div>
                <p>
                  No advance payment. Inspection is 100% free with repair. You receive a 1-year written warranty card upon completion.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {isSubmitting ? 'Scheduling Chennai Dispatch...' : 'Confirm Doorstep Repair Inspection'}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
