export default function Footer() {
  return (
    <footer style={{ padding: 20, background: "#1976d2", color: "#fff", textAlign: "center" }}>
      <p>Production : La Belle Littéraire</p>
      <p>Adresse : 36 rue Des Rosiers, Delmas, Ouest, Haïti</p>
      <form action="https://formspree.io/f/mldwvgdw" method="POST" style={{ marginTop: 10 }}>
        <input 
          type="email" 
          name="email"
          placeholder="Votre email"
          required
          style={{ padding: 6, borderRadius: 4, border: "none", marginRight: 6 }}
        />
        <button type="submit" style={{ padding: 6, borderRadius: 4, background: "#4CAF50", color: "#fff", border: "none" }}>
          S'abonner
        </button>
      </form>
      <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 10 }}>
        <a href="https://www.facebook.com/share/1H6Vtrg6Fi/" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/labellelitteraire?igsh=cmZsd25rM2Flcm9h" target="_blank">Instagram</a>
        <a href="https://www.threads.net/@labellelitteraire" target="_blank">Threads</a>
        <a href="https://wa.me/48321317" target="_blank">WhatsApp</a>
      </div>
    </footer>
  );
            }
