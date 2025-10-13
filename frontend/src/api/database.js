const API_BASE = "http://localhost:4000";

async function getDoctors() {
  const res = await fetch(`${API_BASE}/doctors`);
  if (!res.ok) throw new Error("Failed to load doctors");
  return res.json();
}