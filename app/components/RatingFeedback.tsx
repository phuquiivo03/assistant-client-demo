"use client";

import { useState } from "react";
import { Star, Send } from "lucide-react";

export default function RatingFeedback() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="neu-extruded rounded-[32px] p-8 md:p-12 bg-[#E0E5EC]">
        <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight text-[#3D4852] mb-2">
          Rate Your Experience
        </h2>
        <p className="text-[#6B7280] mb-8">
          How would you rate the Premium Noise-Canceling Headphones?
        </p>

        {/* Star Rating */}
        <div className="flex items-center gap-6 mb-8">
          <div className="neu-inset-deep rounded-2xl px-6 py-4 bg-[#E0E5EC] flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setRating(star)}
                className="cursor-pointer transition-transform duration-300 hover:scale-125"
              >
                <Star
                  size={32}
                  className={`transition-colors duration-200 ${
                    star <= (hoveredStar || rating)
                      ? "fill-[#6C63FF] text-[#6C63FF]"
                      : "text-[#B0B8C4]"
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <span className="text-lg font-semibold text-[#3D4852]">
              {rating === 1
                ? "Poor"
                : rating === 2
                ? "Fair"
                : rating === 3
                ? "Good"
                : rating === 4
                ? "Great"
                : "Excellent!"}
            </span>
          )}
        </div>

        {/* Comment */}
        <div className="mb-6">
          <label className="text-sm font-medium text-[#6B7280] mb-2 block">
            Your Feedback
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us what you think..."
            rows={4}
            className="w-full rounded-2xl bg-[#E0E5EC] neu-inset-deep px-5 py-4 text-[#3D4852] placeholder-[#A0AEC0] outline-none resize-none transition-all duration-300 focus:ring-2 focus:ring-[#6C63FF] focus:ring-offset-2 focus:ring-offset-[#E0E5EC]"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSubmit}
            disabled={rating === 0}
            className={`flex items-center gap-2 h-12 px-8 rounded-2xl font-semibold text-base transition-all duration-300 cursor-pointer ${
              rating > 0
                ? "bg-[#6C63FF] text-white neu-extruded hover:-translate-y-0.5 hover:bg-[#8B84FF] active:translate-y-[0.5px] active:neu-inset-sm"
                : "bg-[#B0B8C4] text-white/70 cursor-not-allowed neu-extruded-sm"
            }`}
          >
            <Send size={16} />
            Submit Review
          </button>
          {submitted && (
            <span className="text-sm font-medium text-[#38B2AC] animate-slide-in">
              ✓ Thank you for your feedback!
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
