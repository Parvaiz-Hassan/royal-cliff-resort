"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookingBar() {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [guests, setGuests] = useState("2 Guests");
  const [roomType, setRoomType] = useState("Any Room");

  const handleSearch = () => {
    router.push(
      `/rooms?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&type=${roomType}`
    );
  };

  return (
    <div
      style={{
        background: "var(--dark)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          maxWidth: "100%",
          overflowX: "auto",
        }}
      >
        {/* Check In */}
        <div style={fieldStyle}>
          <span style={labelStyle}>Check In</span>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => setCheckIn(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Check Out */}
        <div style={fieldStyle}>
          <span style={labelStyle}>Check Out</span>
          <input
            type="date"
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Guests */}
        <div style={fieldStyle}>
          <span style={labelStyle}>Guests</span>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={inputStyle}
          >
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>
        </div>

        {/* Room Type */}
        <div style={{ ...fieldStyle, borderRight: "none" }}>
          <span style={labelStyle}>Room Type</span>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            style={inputStyle}
          >
            <option>Any Room</option>
            <option>Deluxe Valley View</option>
            <option>Premium Mountain Suite</option>
            <option>Royal Cliff Suite</option>
            <option>Honeymoon Cottage</option>
            <option>Grand Family Suite</option>
          </select>
        </div>

        {/* Submit */}
        <button
          onClick={handleSearch}
          style={{
            background: "var(--gold)",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-ui)",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#fff",
            padding: "1.4rem 3rem",
            whiteSpace: "nowrap",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "var(--brown)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "var(--gold)")
          }
        >
          Check Availability →
        </button>
      </div>

      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          opacity: 0.5;
          cursor: pointer;
        }
        select option {
          background: #1a1612;
          color: #fff;
        }
        @media (max-width: 768px) {
          .bb-inner { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}

const fieldStyle: React.CSSProperties = {
  flex: 1,
  minWidth: "160px",
  display: "flex",
  flexDirection: "column",
  padding: "1.4rem 2rem",
  borderRight: "1px solid rgba(255,255,255,0.08)",
  cursor: "pointer",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.55rem",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "var(--gold-light)",
  fontWeight: 600,
  marginBottom: "0.4rem",
  fontFamily: "var(--font-ui)",
};

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-ui)",
  fontSize: "0.9rem",
  color: "#fff",
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
  width: "100%",
};