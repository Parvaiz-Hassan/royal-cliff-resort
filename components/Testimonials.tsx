"use client";

import { useState, useEffect, useRef } from "react";
import { client } from "@/lib/sanity";
import { testimonialsQuery } from "@/lib/queries";

interface Testimonial {
  _id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  room: string;
  title: string;
  review: string;
  verified: boolean;
}

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "#e5e7eb"}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const getInitials = (name: string) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

const avatarColors = [
  "#4285F4", "#EA4335", "#34A853", "#9C27B0",
  "#FF5722", "#009688", "#3F51B5", "#F44336",
];

const getAvatarColor = (name: string) =>
  avatarColors[name.charCodeAt(0) % avatarColors.length];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const visible = 4;

  useEffect(() => {
    client.fetch(testimonialsQuery)
      .then((data) => {
        setTestimonials(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const max = Math.max(0, testimonials.length - visible);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  // Static fallback if Sanity empty
  const fallback: Testimonial[] = [
    { _id: "1", name: "Arjun Mehta", location: "Mumbai", date: "2 months ago", rating: 5, room: "Royal Cliff Suite", title: "Exceptional Stay", review: "The Royal Cliff Suite was beyond anything I had imagined. Waking up to that view every morning felt like a dream — the valley below, the peaks above, and the silence of Kashmir all around.", verified: true },
    { _id: "2", name: "Priya Sharma", location: "Delhi", date: "3 months ago", rating: 5, room: "Honeymoon Package", title: "Perfect Honeymoon", review: "The staff arranged our entire trek itinerary, packed us a Kashmiri lunch, and had Kahwa ready when we returned. This is what true hospitality feels like — thoughtful, warm, and absolutely genuine.", verified: true },
    { _id: "3", name: "Imran Khan", location: "Bangalore", date: "5 months ago", rating: 5, room: "Family Suite", title: "Great Family Trip", review: "We brought our family of five and everyone was taken care of. The kids loved the garden, we loved the views, and the Wazwan dinner was the highlight of our entire Kashmir trip.", verified: true },
    { _id: "4", name: "Sneha Patel", location: "Ahmedabad", date: "6 months ago", rating: 5, room: "Deluxe Valley View", title: "Breathtaking Views", review: "Words cannot describe the beauty of this place. Every morning we woke up to pristine mountain views. The staff was incredibly warm and the food was outstanding. Will definitely return.", verified: true },
    { _id: "5", name: "Rahul Gupta", location: "Pune", date: "8 months ago", rating: 5, room: "Premium Suite", title: "Truly Luxurious", review: "From check-in to check-out, everything was flawless. The room was spacious, beautifully decorated with Kashmiri crafts, and the view from our balcony was simply stunning.", verified: true },
  ];

  const items = testimonials.length > 0 ? testimonials : fallback;
  const displayMax = Math.max(0, items.length - visible);

  return (
    <section style={{ background: "#fff", padding: "70px 0" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-ui)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
            — Guest Stories —
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--dark)" }}>
            What Our{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Guests Say</em>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", margin: "1.5rem auto 0" }} />
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "1rem" }}>
            Real stories from guests who experienced Kashmir with us
          </p>
        </div>

        {/* Carousel wrapper */}
        <div style={{ position: "relative" }}>

          {/* Prev button */}
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)",
              width: "40px", height: "40px", borderRadius: "50%",
              background: "#fff", border: "1px solid #e5e7eb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: current === 0 ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", color: current === 0 ? "#d1d5db" : "#374151",
              zIndex: 2, transition: "all 0.2s",
            }}
          >←</button>

          {/* Next button */}
          <button
            onClick={next}
            disabled={current >= displayMax}
            style={{
              position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
              width: "40px", height: "40px", borderRadius: "50%",
              background: "#fff", border: "1px solid #e5e7eb",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              cursor: current >= displayMax ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", color: current >= displayMax ? "#d1d5db" : "#374151",
              zIndex: 2, transition: "all 0.2s",
            }}
          >→</button>

          {/* Cards track */}
          <div
            style={{ overflow: "hidden" }}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              const diff = touchStartX.current - e.changedTouches[0].clientX;
              if (diff > 50) setCurrent((c) => Math.min(displayMax, c + 1));
              if (diff < -50) setCurrent((c) => Math.max(0, c - 1));
            }}
          >
            <div
  className="testimonials-track"
  style={{
    display: "flex",
    gap: "1.2rem",
    transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
    transform: `translateX(calc(-${current} * (100% / ${visible} + 1.2rem / ${visible})))`,
  }}
>
              {items.map((t) => (
                <div
                  key={t._id}
                  className="testimonials-card"
  style={{
    flex: `0 0 calc(${100 / visible}% - ${(1.2 * (visible - 1)) / visible}rem)`,
                    background: "#f9fafb",
                    borderRadius: "12px",
                    padding: "1.4rem",
                    border: "1px solid #f3f4f6",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.8rem",
                    minHeight: "220px",
                  }}
                >
                  {/* Top row — avatar + name + Google icon */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                      {/* Avatar */}
                      <div style={{
                        width: "42px", height: "42px", borderRadius: "50%",
                        background: getAvatarColor(t.name),
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "var(--font-ui)", fontSize: "0.85rem",
                        fontWeight: 600, color: "#fff", flexShrink: 0,
                      }}>
                        {getInitials(t.name)}
                      </div>
                      <div>
                        <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 600, color: "#1f2937", lineHeight: 1.2 }}>
                          {t.name}
                        </div>
                        <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "#9ca3af", marginTop: "2px" }}>
                          {t.date || t.location}
                        </div>
                      </div>
                    </div>
                    <GoogleIcon />
                  </div>

                  {/* Stars */}
                  <div style={{ display: "flex", gap: "2px" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <StarIcon key={s} filled={s <= (t.rating || 5)} />
                    ))}
                  </div>

                  {/* Review text */}
                  <p style={{
                    fontFamily: "var(--font-ui)", fontSize: "0.82rem",
                    color: "#4b5563", lineHeight: 1.7,
                    display: "-webkit-box", WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical", overflow: "hidden",
                    flex: 1,
                  }}>
                    {t.review}
                  </p>

                  {/* Room tag */}
                  {t.room && (
                    <div style={{ fontFamily: "var(--font-label)", fontSize: "0.55rem", letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase" }}>
                      {t.room}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "2rem" }}>
          {Array.from({ length: displayMax + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "24px" : "8px", height: "8px",
                borderRadius: i === current ? "4px" : "50%",
                background: i === current ? "var(--gold)" : "rgba(201,169,110,0.25)",
                border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
  @media (max-width: 768px) {
    .testimonials-track {
      transform: translateX(calc(-${current} * 83%)) !important;
    }
    .testimonials-card {
      flex: 0 0 78% !important;
    }
  }
`}</style>
    </section>
  );
}