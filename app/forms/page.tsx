// app/forms/page.tsx
'use client'

export default function FormsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔍 Check Announcement (GET)</h2>
      <form action="/api/show-message" method="GET">
        <label>Announcement ID:</label><br />
        <input type="text" name="id" required /><br />
        <button type="submit">Search</button>
      </form>

      <hr style={{ margin: '2rem 0' }} />

      <h2>📩 Contact Committee (POST)</h2>
      <form action="/api/submit-form" method="POST">
        <label>Your Name:</label><br />
        <input type="text" name="name" required /><br />
        <label>Your Message:</label><br />
        <textarea name="message" required></textarea><br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
