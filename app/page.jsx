export default function Page() {
  const whatsappNumber = "48451617961"; // номер без плюса и пробелов
  const twitterUrl = "https://x.com/plgdct";
  const youtubeUrl = "https://www.youtube.com/@alexanderlebedkov1013";
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <main style={{
      fontFamily: "system-ui, sans-serif",
      padding: "40px",
      maxWidth: "600px",
      margin: "0 auto",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#222" }}>
        Alex Lebedkov
      </h1>
      <p style={{ color: "#555", fontSize: "1.1rem", marginBottom: "25px" }}>
        Educator • Writer • Researcher in Public Administration and Social Sciences
      </p>

      <div style={{ margin: "30px 0" }}>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            textDecoration: "none",
            color: "#1DA1F2",
            fontWeight: "bold"
          }}
        >
          🐦 Twitter
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            textDecoration: "none",
            color: "#25D366",
            fontWeight: "bold"
          }}
        >
          💬 WhatsApp
        </a>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            margin: "0 10px",
            textDecoration: "none",
            color: "#FF0000",
            fontWeight: "bold"
          }}
        >
          ▶️ YouTube
        </a>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
        <textarea
          name="message"
          placeholder="Write me a message..."
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            resize: "none",
            fontSize: "1rem"
          }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem"
          }}
        >
          Send via WhatsApp
        </button>
      </form>

      <footer style={{ marginTop: "50px", fontSize: "0.9rem", color: "#777" }}>
        © {new Date().getFullYear()} Alex Lebedkov. All rights reserved.
      </footer>
    </main>
  );
}
