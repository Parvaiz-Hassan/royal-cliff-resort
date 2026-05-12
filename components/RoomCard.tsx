"use client";

import Link from "next/link";

interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  guests: number;
  view: string;
  tag: string;
  amenities: string[];
  gradient: string;
}

interface RoomCardProps {
  room: Room;
  onBook: (room: Room) => void;
}

export default function RoomCard({ room, onBook }: RoomCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "6px",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(26,22,18,0.07)",
        transition: "transform 0.35s, box-shadow 0.35s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 20px 60px rgba(26,22,18,0.18)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 20px rgba(26,22,18,0.07)";
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: room.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg viewBox="0 0 200 150" style={{ width: "60%", opacity: 0.15 }}>
            <polygon points="100,10 160,100 40,100" fill="white" />
            <polygon points="40,40 90,100 0,100" fill="rgba(255,255,255,0.5)" />
            <polygon points="160,50 200,100 120,100" fill="rgba(255,255,255,0.4)" />
            <circle cx="165" cy="25" r="15" fill="rgba(255,220,100,0.5)" />
          </svg>
        </div>

        {/* Tag */}
        <span
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "var(--gold)",
            color: "#fff",
            fontFamily: "var(--font-ui)",
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            padding: "0.3rem 0.8rem",
            borderRadius: "2px",
          }}
        >
          {room.tag}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "1.6rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 500,
            color: "var(--dark)",
            marginBottom: "0.4rem",
          }}
        >
          {room.name}
        </h3>

        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            marginBottom: "1rem",
            fontFamily: "var(--font-ui)",
          }}
        >
          {room.description}
        </p>

        {/* Amenities */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {room.amenities.map((a) => (
            <span
              key={a}
              style={{
                fontSize: "0.65rem",
                color: "var(--brown)",
                background: "var(--gold-pale)",
                borderRadius: "20px",
                padding: "0.25rem 0.75rem",
                fontWeight: 500,
                fontFamily: "var(--font-ui)",
              }}
            >
              {a}
            </span>
          ))}
        </div>

        {/* Info row */}
        <div
          style={{
            display: "flex",
            gap: "1.2rem",
            marginBottom: "1.2rem",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-ui)",
          }}
        >
          <span>📐 {room.size}</span>
          <span>👤 {room.guests} Guests</span>
          <span>🏔️ {room.view}</span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--border)",
            paddingTop: "1.2rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.6rem",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-ui)",
              }}
            >
              From
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "var(--gold)",
              }}
            >
              ₹{room.price.toLocaleString("en-IN")}
              <span
                style={{
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-ui)",
                  color: "var(--text-muted)",
                  fontWeight: 400,
                }}
              >
                {" "}/ night
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem" }}>
           <Link
              href={`/rooms/${room.id}`}
              className="btn-gold"
              style={{ fontSize: "0.62rem", padding: "0.55rem 1rem" }}
            >
              Details
            </Link>
            <button
              onClick={() => onBook(room)}
              className="btn-gold-solid"
              style={{ fontSize: "0.62rem", padding: "0.55rem 1.2rem", borderRadius: "2px" }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}