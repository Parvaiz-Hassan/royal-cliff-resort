export default function WhatsAppFloat() {
  const url = "https://wa.me/919622299302?text=Hi!%20I%20would%20like%20to%20enquire%20about%20Royal%20Cliff%20Resort.";

  const style: React.CSSProperties = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 999,
    width: "56px",
    height: "56px",
    background: "#25D366",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
    fontSize: "1.6rem",
    textDecoration: "none",
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" style={style}>
      💬
    </a>
  );
}