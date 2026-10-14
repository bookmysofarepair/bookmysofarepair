import React from 'react';
import { Star, CheckCircle2, MapPin, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '../data/reclinerData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-widest mb-2 px-3 py-1 bg-amber-100 rounded-md">
            Chennai Homeowner Testimonials
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Trusted by 1,840+ Recliner Owners in Chennai
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-stone-600">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-stone-900">4.9 / 5.0</span>
            <span className="text-stone-400">·</span>
            <span>Based on 380+ verified Google & WhatsApp reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900">
                      {review.name}
                    </h4>
                    <p className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-700" />
                      <span>{review.location}</span>
                    </p>
                  </div>
                  {review.verified && (
                    <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-0.5 bg-emerald-50 px-1.5 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>

                <div className="mt-2 text-[10px] text-amber-900 font-medium bg-amber-50/70 px-2 py-0.5 rounded truncate">
                  {review.service} · {review.brand}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
