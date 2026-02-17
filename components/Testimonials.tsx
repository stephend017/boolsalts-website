"use client";

import { useState, useEffect } from "react";
import { GlobeAmericasIcon, ShieldCheckIcon, FireIcon } from "@/components/Icons";

const reviews = [
  {
    stars: 5,
    text: "80-hr weeks require a calm and steady energy source, not just caffeine. bool's nootropic blend helps me ride out the tough weeks (yes, even at 2AM...)",
    name: "Kiyon Hahm",
    role: "Big Law Associate @ Cravath",
    avatar: "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bf369d0ddd3bb7458d15_Kiyon%20Hahm.jpg",
    tag: "WORKDAYS",
  },
  {
    stars: 5,
    text: "Hangovers fear bool. Took one before passing out and woke up feeling dangerous. The only way to survive the weekend...",
    name: "Ethan Kovar",
    role: "Professional Party Animal",
    avatar: "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfa2211349d9896e791a_Ethan%20Kovar.jpg",
    tag: "WEEKENDS",
  },
  {
    stars: 5,
    text: "Finally, an electrolyte that doesn't taste like ass.",
    name: "Zain Yousef",
    role: "Unemployed (made all his money on crypto)",
    avatar: "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfaf5f722932ed33c418_Zain%20Yousef.jpg",
    tag: "ALWAYS",
  },
  {
    stars: 5,
    text: "Swapped my afternoon cold brew for bool. The brain fog lifts quickly without the caffeine jitters. Game changer and pure flow state.",
    name: "William Laast",
    role: "PM @ Zillow",
    avatar: "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfc90282b5a88939f9d1_William%20Laast.jpg",
    tag: "WORKDAYS",
  },
  {
    stars: 5,
    text: "Half Marathons in Singapore humidity are brutal. This is the only electrolyte that keeps me hitting PBs without that heavy, sugary stomach feeling.",
    name: "Mady Quek",
    role: "Fitness Geek",
    avatar: "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfda90f7627055fae5fb_Mady%20Quek.jpg",
    tag: "WORKOUTS",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-bool-orange fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-bool-black">
      {/* Orange diagonal accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bool-orange/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="section-label mb-4">Tested in the Wild</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
              <span className="flex items-center gap-3 flex-wrap">
                LET THE
                <GlobeAmericasIcon className="w-8 h-8 opacity-50" />
                BOOL
                <ShieldCheckIcon className="w-8 h-8 opacity-50" />
              </span>
              <span className="flex items-center gap-3 flex-wrap">
                FLOW THRU YOU
                <FireIcon className="w-8 h-8 opacity-50" />
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="font-body text-sm text-white/30">
              Results from New York, London & Singapore.
            </p>
          </div>
        </div>

        {/* Main featured review */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <StarRating count={review.stars} />
                    <span className="ingredient-pill">{review.tag}</span>
                  </div>

                  <blockquote className="font-display text-[clamp(1.5rem,4vw,3rem)] leading-tight text-white/90 mb-10">
                    "{review.text}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <div className="font-display-normal text-sm tracking-wider">
                        {review.name}
                      </div>
                      <div className="font-body text-xs text-white/40 italic">
                        {review.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div
          className="flex items-center gap-4 mt-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={() => setActive((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-bool-orange hover:text-bool-orange transition-colors text-white/40"
          >
            ←
          </button>

          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 h-0.5 ${
                  i === active ? "w-10 bg-bool-orange" : "w-3 bg-white/15"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((prev) => (prev + 1) % reviews.length)}
            className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-bool-orange hover:text-bool-orange transition-colors text-white/40"
          >
            →
          </button>

          <span className="font-body text-xs text-white/20 ml-2">
            {active + 1} / {reviews.length}
          </span>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
