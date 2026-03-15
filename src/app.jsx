import { useState, useEffect } from "react";

// ─── MICHAEL'S CREDENTIALS ────────────────────────────────────────────────────
const MECHANIC = {
  name: "Michael (Bromine) Muchai",
  shortName: "Michael Muchai",
  nickname: "Bromine",
  title: "Multi-brand Automotive Technician",
  bio: "Advanced diagnostics, engine & electrical systems expert. Delivering accurate, reliable repairs.",
  whatsapp: "254110291123",
  phone: "0115101100",
  phone2: "0110291123",
  garage: "Desai Road, Ngara — Opposite Club One Touch",
  garageShort: "Desai Rd, Ngara",
  hours: "Mon–Sat: 7:00 AM – 8:00 PM",
  emergency: "Available 24/7",
  specialities: ["All Car Makes", "Engine Systems", "Electrical & Diagnostics", "Advanced Diagnostics", "Mobile Visits", "PSV / Commercial"],
  gmaps: "https://www.google.com/maps/search/Desai+Road+Ngara+Nairobi",
  referralDiscount: 10,
  appUrl: "https://carcare.ke",
};

// ─── STORAGE ──────────────────────────────────────────────────────────────────
const useLS = (key, init) => {
  const [v, setV] = useState(() => {
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init; } catch { return init; }
  });
  const set = (x) => { setV(x); localStorage.setItem(key, JSON.stringify(x)); };
  return [v, set];
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const S = {
  input: { width: "100%", background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: 12, padding: "12px 14px", color: "#fff", fontSize: 14, fontFamily: "'DM Mono', monospace", marginBottom: 10, outline: "none", boxSizing: "border-box" },
  btn: { width: "100%", padding: 14, borderRadius: 12, marginBottom: 10, background: "#f97316", color: "#fff", fontFamily: "'DM Mono', monospace", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em", cursor: "pointer", border: "none" },
  ghost: { width: "100%", padding: 14, borderRadius: 12, marginBottom: 10, background: "transparent", color: "#555", fontFamily: "'DM Mono', monospace", fontWeight: 600, fontSize: 13, cursor: "pointer", border: "1px solid #2a2a2a" },
  card: { background: "#141414", border: "1px solid #1e1e1e", borderRadius: 18, padding: 16, marginBottom: 12 },
  lbl: { color: "#444", fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", marginBottom: 6, display: "block" },
  h1: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, color: "#fff", marginBottom: 4 },
  sub: { color: "#444", fontSize: 12, fontFamily: "'DM Mono', monospace", marginBottom: 18 },
};

const KES = (n) => `KES ${parseInt(n || 0).toLocaleString("en-KE")}`;
const today = () => new Date().toISOString().split("T")[0];
const daysFromNow = (d) => Math.ceil((new Date(d) - new Date()) / 86400000);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const QUOTE_SERVICES = [
  { name: "Oil Change", basePrice: 3500 }, { name: "Brake Pads (Front)", basePrice: 6000 },
  { name: "Brake Pads (Rear)", basePrice: 5500 }, { name: "Battery Replacement", basePrice: 12000 },
  { name: "Engine Diagnostics", basePrice: 3000 }, { name: "Air Filter", basePrice: 2500 },
  { name: "Spark Plugs (Set)", basePrice: 5000 }, { name: "Wheel Alignment", basePrice: 3000 },
  { name: "Tyre Fitting (each)", basePrice: 500 }, { name: "Coolant Flush", basePrice: 4000 },
  { name: "Suspension Check", basePrice: 2000 }, { name: "Full Service", basePrice: 18000 },
  { name: "Electrical Fault", basePrice: 4000 }, { name: "AC Service", basePrice: 8000 },
  { name: "Gearbox Service", basePrice: 15000 }, { name: "PSV Inspection", basePrice: 5000 },
  { name: "Labour (per hour)", basePrice: 1500 }, { name: "Custom Item", basePrice: 0 },
];

const INSURANCE_TYPES = ["Comprehensive", "Third Party Only", "Third Party Fire & Theft"];

const ROAD_SAFETY_TIPS = [
  { icon: "🛑", title: "Blood Alcohol Limit Kenya", tip: "Kenya's legal BAC limit is 0.08%. That's roughly 2 beers for an average adult. Don't risk it — NTSA checkpoints are frequent, especially Friday nights.", category: "Legal" },
  { icon: "📱", title: "Phone While Driving", tip: "Using a handheld phone while driving carries a KES 10,000 fine in Kenya. Use hands-free or pull over completely. Not worth it.", category: "Legal" },
  { icon: "🔆", title: "Headlights in Rain", tip: "Kenyan law requires headlights ON when visibility is poor — not just at night. Nairobi rains can reduce visibility dramatically.", category: "Safety" },
  { icon: "🦺", title: "Reflective Jacket", tip: "Always keep a reflective jacket in your car. If you break down at night, wear it before stepping out — especially on Mombasa Road or Thika Road.", category: "Safety" },
  { icon: "⚡", title: "Speed Governors", tip: "All PSV vehicles must have a sealed speed governor set at 80 km/h. Tampering with it is a criminal offence under Kenyan traffic law.", category: "PSV" },
  { icon: "🚦", title: "Nairobi Traffic Fines", tip: "Common fines: Speeding KES 3,000–10,000 | No seatbelt KES 500 | Jumping lights KES 3,000 | Overloading KES 50,000. Keep your car legal.", category: "Legal" },
  { icon: "🛞", title: "Tyre Tread Depth", tip: "Minimum legal tyre tread in Kenya is 1.6mm. Worn tyres on wet Nairobi roads massively increase stopping distance. Check monthly.", category: "Safety" },
  { icon: "📋", title: "Documents You Must Carry", tip: "At all times carry: Driving licence, Vehicle logbook, Insurance certificate, Inspection certificate (for PSVs). NTSA can fine you KES 2,000–20,000 per missing document.", category: "Legal" },
];

const PARTS_SHOPS = [
  { name: "Caltex Spare Parts", area: "Industrial Area", speciality: "All Makes", phone: "0722111001" },
  { name: "Car & General", area: "Westlands", speciality: "Toyota / Isuzu", phone: "0733222002" },
  { name: "Simba Tyres", area: "Ngara", speciality: "Tyres & Rims", phone: "0711333003" },
  { name: "Magunas Auto Parts", area: "Gikomba", speciality: "Budget Parts", phone: "0700444004" },
  { name: "Toyota Kenya Parts", area: "Upper Hill", speciality: "Genuine Toyota", phone: "0722555005" },
  { name: "Subaru Kenya Parts", area: "Westlands", speciality: "Genuine Subaru", phone: "0733666006" },
  { name: "Ngara Auto Spares", area: "Ngara", speciality: "General Spares", phone: "0712777007" },
  { name: "AA Kenya", area: "Nairobi CBD", speciality: "Batteries & Tyres", phone: "0722888008" },
];

const WARNING_LIGHTS = [
  { id: 1, name: "Check Engine", icon: "🔧", severity: "Medium", meaning: "ECU fault detected — could be minor or serious.", action: "Drive to mechanic soon. Request a diagnostic scan.", costRange: "2,000 – 15,000" },
  { id: 2, name: "Oil Pressure", icon: "🛢️", severity: "Critical", meaning: "Oil pressure critically low. Engine at risk.", action: "STOP immediately. Don't drive. Call Michael.", costRange: "1,500 – 8,000" },
  { id: 3, name: "Battery", icon: "🔋", severity: "Medium", meaning: "Battery not charging properly.", action: "Don't switch off engine. Drive to mechanic.", costRange: "8,000 – 20,000" },
  { id: 4, name: "Temperature", icon: "🌡️", severity: "Critical", meaning: "Engine overheating. Coolant low.", action: "Pull over. Engine off. Wait 30 mins. Call Michael.", costRange: "3,000 – 25,000" },
  { id: 5, name: "ABS Warning", icon: "⚙️", severity: "Medium", meaning: "ABS fault. Brakes work but ABS may fail.", action: "Drive carefully to mechanic.", costRange: "5,000 – 18,000" },
  { id: 6, name: "Brake Warning", icon: "🅿️", severity: "Critical", meaning: "Brake fluid low OR pads worn. Safety critical.", action: "Check handbrake. If still lit — stop driving!", costRange: "4,000 – 12,000" },
  { id: 7, name: "Airbag / SRS", icon: "💺", severity: "Medium", meaning: "Airbag system fault.", action: "Drive carefully. Don't delay.", costRange: "3,000 – 20,000" },
  { id: 8, name: "Fuel Low", icon: "⛽", severity: "Low", meaning: "~50km of fuel remaining.", action: "Find petrol station soon.", costRange: "150/litre" },
  { id: 9, name: "Tyre Pressure", icon: "🔴", severity: "Low", meaning: "One or more tyres has low pressure.", action: "Check at petrol station. Inflate to 30–35 PSI.", costRange: "100 – 500" },
];
const FUEL_PRICES = [{ type: "Super Petrol", price: 176.30, icon: "⛽", color: "#f97316" }, { type: "Diesel", price: 163.50, icon: "🛢️", color: "#3b82f6" }, { type: "Kerosene", price: 145.94, icon: "💧", color: "#8b5cf6" }];
const TANK_SIZES = [{ label: "Small (35L)", value: 35 }, { label: "Medium (45L)", value: 45 }, { label: "Large (55L)", value: 55 }, { label: "PSV/Matatu (70L)", value: 70 }, { label: "Bus (100L)", value: 100 }];
const CAR_TYPES = ["Saloon / Sedan", "Hatchback", "SUV / 4x4", "Pickup / Truck", "Matatu (14-seater)", "Matatu (33-seater)", "Bus", "Taxi / Uber", "Tuk-tuk / Bajaj", "Motorcycle (Boda)"];
const SERVICE_TYPES = ["Oil Change", "Brake Service", "Tyre Change", "Air Filter", "Battery", "Full Service", "Wheel Alignment", "Engine Diagnostics", "Electrical", "Suspension", "AC Repair", "Gearbox", "PSV Inspection", "Other"];
const SEV = { Low: { bg: "#22c55e20", text: "#22c55e", border: "#22c55e40" }, Medium: { bg: "#f59e0b20", text: "#f59e0b", border: "#f59e0b40" }, Critical: { bg: "#ef444420", text: "#ef4444", border: "#ef444440" } };

// ═══════════════════════════════════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════════════════════════════════
const AuthPage = ({ onLogin }) => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", referral: "" });
  const [err, setErr] = useState("");
  const f = k => e => setForm({ ...form, [k]: e.target.value });
  const handle = () => {
    if (!form.email || !form.password) return setErr("Fill in all fields");
    if (mode === "signup" && !form.name) return setErr("Enter your name");
    const ref = form.referral?.trim().toUpperCase();
    onLogin({ name: form.name || form.email.split("@")[0], email: form.email, referredBy: ref || null, joinedAt: today(), discountEarned: ref ? MECHANIC.referralDiscount : 0 });
  };
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px 20px", background: "#080808" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Mono:wght@400;500&display=swap');`}</style>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 60, marginBottom: 10 }}>🚗</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: "#f97316", lineHeight: 1.1 }}>Car Care<br />Companion KE</h1>
        <p style={{ color: "#333", fontSize: 11, fontFamily: "'DM Mono', monospace", marginTop: 8 }}>By Michael (Bromine) Muchai • Ngara, Nairobi</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
          {["🔧 Expert Mechanic", "🇰🇪 Kenya-Built", "24/7 Emergency"].map(tag => (
            <span key={tag} style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "#f97316", background: "#f9731612", padding: "3px 8px", borderRadius: 20, border: "1px solid #f9731628" }}>{tag}</span>
          ))}
        </div>
      </div>
      <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 24, padding: 24 }}>
        <div style={{ display: "flex", background: "#0a0a0a", borderRadius: 14, padding: 4, marginBottom: 20 }}>
          {["login", "signup"].map(m => (
            <button key={m} onClick={() => setMode(m)} style={{ flex: 1, padding: 10, borderRadius: 10, fontSize: 11, fontFamily: "'DM Mono', monospace", fontWeight: 600, background: mode === m ? "#f97316" : "transparent", color: mode === m ? "#fff" : "#444", border: "none", cursor: "pointer" }}>
              {m === "login" ? "LOGIN" : "SIGN UP"}
            </button>
          ))}
        </div>
        {mode === "signup" && <input placeholder="Your full name" value={form.name} onChange={f("name")} style={S.input} />}
        <input placeholder="Email address" type="email" value={form.email} onChange={f("email")} style={S.input} />
        <input placeholder="Password" type="password" value={form.password} onChange={f("password")} style={S.input} />
        {mode === "signup" && (
          <div>
            <input placeholder="Referral code (optional — get discount!)" value={form.referral} onChange={f("referral")} style={{ ...S.input, textTransform: "uppercase" }} />
            {form.referral && <p style={{ color: "#22c55e", fontSize: 11, fontFamily: "'DM Mono', monospace", marginTop: -6, marginBottom: 10 }}>✓ {MECHANIC.referralDiscount}% discount applied on your first service!</p>}
          </div>
        )}
        {err && <p style={{ color: "#ef4444", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 10 }}>{err}</p>}
        <button onClick={handle} style={S.btn}>{mode === "login" ? "→ Login" : "→ Create Account"}</button>
        <button onClick={() => onLogin({ name: "Demo User", email: "demo@carcare.ke", joinedAt: today() })} style={S.ghost}>Try Demo (No Account Needed)</button>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// QUOTE GENERATOR
// ═══════════════════════════════════════════════════════════════════════════════
const QuotePage = ({ cars, activeCar, clientHistory, setClientHistory }) => {
  const car = cars.find(c => c.id === activeCar);
  const [items, setItems] = useState([{ service: "", price: "", qty: 1, custom: "" }]);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientCar, setClientCar] = useState(car ? `${car.make} ${car.model} ${car.year || ""} (${car.plate || ""})` : "");
  const [notes, setNotes] = useState("");
  const [vatIncluded, setVatIncluded] = useState(false);
  const [sent, setSent] = useState(false);

  const addItem = () => setItems([...items, { service: "", price: "", qty: 1, custom: "" }]);
  const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i));
  const updateItem = (i, k, v) => setItems(items.map((it, idx) => idx === i ? { ...it, [k]: v } : it));
  const setService = (i, name) => {
    const found = QUOTE_SERVICES.find(s => s.name === name);
    updateItem(i, "service", name);
    if (found) updateItem(i, "price", found.basePrice);
  };

  const subtotal = items.reduce((s, it) => s + ((parseFloat(it.price) || 0) * (parseInt(it.qty) || 1)), 0);
  const vat = vatIncluded ? subtotal * 0.16 : 0;
  const total = subtotal + vat;
  const quoteNo = `BRM-${Date.now().toString().slice(-6)}`;

  const sendQuote = () => {
    const lineItems = items.filter(it => it.service || it.custom).map(it =>
      `  • ${it.custom || it.service} x${it.qty || 1} — ${KES((parseFloat(it.price) || 0) * (parseInt(it.qty) || 1))}`
    ).join("\n");
    const msg = encodeURIComponent(
      `🔧 *QUOTATION — ${quoteNo}*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 Client: ${clientName || "—"}\n` +
      `📞 Phone: ${clientPhone || "—"}\n` +
      `🚗 Vehicle: ${clientCar || "—"}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      `SERVICES:\n${lineItems}\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      (vatIncluded ? `Subtotal: ${KES(subtotal)}\nVAT (16%): ${KES(vat)}\n` : "") +
      `*TOTAL: ${KES(total)}*\n` +
      `━━━━━━━━━━━━━━━━━━━━\n` +
      (notes ? `Notes: ${notes}\n` : "") +
      `📍 ${MECHANIC.garage}\n` +
      `📞 ${MECHANIC.phone} | 💬 wa.me/${MECHANIC.whatsapp}\n` +
      `\n_This quote is valid for 7 days. Prices exclude parts unless stated._`
    );
    window.open(`https://wa.me/${clientPhone ? "254" + clientPhone.replace(/^0/, "") : MECHANIC.whatsapp}?text=${msg}`, "_blank");

    // Save to client history
    if (clientName) {
      const record = { id: Date.now(), clientName, clientPhone, clientCar, items, total, date: today(), quoteNo, type: "quote" };
      setClientHistory([...clientHistory, record]);
    }
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Quote Generator</h2>
      <p style={S.sub}>Build & send professional quotes via WhatsApp</p>

      {/* Client Details */}
      <div style={S.card}>
        <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>👤 CLIENT DETAILS</p>
        <span style={S.lbl}>CLIENT NAME</span>
        <input placeholder="e.g. John Kamau" value={clientName} onChange={e => setClientName(e.target.value)} style={S.input} />
        <span style={S.lbl}>CLIENT PHONE</span>
        <input placeholder="e.g. 0712 345 678" value={clientPhone} onChange={e => setClientPhone(e.target.value)} style={S.input} />
        <span style={S.lbl}>VEHICLE</span>
        <input placeholder="Toyota Axio 2016 KDG 123A" value={clientCar} onChange={e => setClientCar(e.target.value)} style={S.input} />
      </div>

      {/* Line Items */}
      <div style={S.card}>
        <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>🔧 SERVICES & PARTS</p>
        {items.map((it, i) => (
          <div key={i} style={{ background: "#0d0d0d", borderRadius: 12, padding: 12, marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ ...S.lbl, marginBottom: 0 }}>ITEM {i + 1}</span>
              {items.length > 1 && <button onClick={() => removeItem(i)} style={{ color: "#ef4444", background: "transparent", border: "none", fontSize: 14, cursor: "pointer" }}>✕</button>}
            </div>
            <select value={it.service} onChange={e => setService(i, e.target.value)} style={{ ...S.input, marginBottom: 6 }}>
              <option value="">Select service...</option>
              {QUOTE_SERVICES.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
            </select>
            {it.service === "Custom Item" && (
              <input placeholder="Describe item..." value={it.custom} onChange={e => updateItem(i, "custom", e.target.value)} style={{ ...S.input, marginBottom: 6 }} />
            )}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 80px", gap: 8 }}>
              <div>
                <span style={S.lbl}>PRICE (KES)</span>
                <input type="number" placeholder="0" value={it.price} onChange={e => updateItem(i, "price", e.target.value)} style={{ ...S.input, marginBottom: 0 }} />
              </div>
              <div>
                <span style={S.lbl}>QTY</span>
                <input type="number" min="1" value={it.qty} onChange={e => updateItem(i, "qty", e.target.value)} style={{ ...S.input, marginBottom: 0 }} />
              </div>
            </div>
            {it.price && <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace", marginTop: 4 }}>= {KES((parseFloat(it.price) || 0) * (parseInt(it.qty) || 1))}</p>}
          </div>
        ))}
        <button onClick={addItem} style={S.ghost}>+ Add Another Item</button>
      </div>

      {/* Notes & VAT */}
      <div style={S.card}>
        <span style={S.lbl}>NOTES (OPTIONAL)</span>
        <input placeholder="e.g. Parts not included, labour only" value={notes} onChange={e => setNotes(e.target.value)} style={S.input} />
        <button onClick={() => setVatIncluded(!vatIncluded)} style={{ display: "flex", alignItems: "center", gap: 10, background: "transparent", border: "none", cursor: "pointer", padding: "4px 0" }}>
          <span style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${vatIncluded ? "#f97316" : "#333"}`, background: vatIncluded ? "#f97316" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>{vatIncluded ? "✓" : ""}</span>
          <span style={{ color: "#888", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>Include VAT (16%)</span>
        </button>
      </div>

      {/* Total */}
      <div style={{ ...S.card, border: "1px solid #f9731640", background: "linear-gradient(135deg, #1a0f00, #0f0f0f)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <p style={{ color: "#555", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>Subtotal</p>
          <p style={{ color: "#888", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{KES(subtotal)}</p>
        </div>
        {vatIncluded && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <p style={{ color: "#555", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>VAT (16%)</p>
          <p style={{ color: "#888", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{KES(vat)}</p>
        </div>}
        <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#fff", fontSize: 14, fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>TOTAL</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#f97316" }}>{KES(total)}</p>
        </div>
        <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace", marginTop: 4 }}>Quote No: {quoteNo}</p>
      </div>

      <button onClick={sendQuote} style={S.btn}>
        {sent ? "✓ Quote Sent via WhatsApp!" : "📤 Send Quote via WhatsApp"}
      </button>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// CLIENT HISTORY
// ═══════════════════════════════════════════════════════════════════════════════
const ClientHistoryPage = ({ clientHistory, setClientHistory }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // Group by client name
  const grouped = {};
  clientHistory.forEach(r => {
    const key = r.clientName || "Unknown";
    if (!grouped[key]) grouped[key] = { name: key, phone: r.clientPhone, jobs: [] };
    grouped[key].jobs.push(r);
  });
  const clients = Object.values(grouped).filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || (c.phone || "").includes(search));
  const totalRevenue = clientHistory.reduce((s, r) => s + (r.total || 0), 0);

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Client History</h2>
      <p style={S.sub}>Every client. Every job. All in one place.</p>

      {/* Summary Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
        {[
          { label: "CLIENTS", val: Object.keys(grouped).length, color: "#f97316" },
          { label: "JOBS", val: clientHistory.length, color: "#3b82f6" },
          { label: "REVENUE", val: KES(totalRevenue).replace("KES ", ""), color: "#22c55e" },
        ].map((s, i) => (
          <div key={i} style={{ background: "#141414", border: "1px solid #1e1e1e", borderRadius: 14, padding: "12px 10px", textAlign: "center" }}>
            <p style={{ color: s.color, fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700 }}>{s.val}</p>
            <p style={{ color: "#333", fontSize: 9, fontFamily: "'DM Mono', monospace", marginTop: 2 }}>{s.label}</p>
          </div>
        ))}
      </div>

      <input placeholder="Search client name or phone..." value={search} onChange={e => setSearch(e.target.value)} style={{ ...S.input, marginBottom: 14 }} />

      {clients.length === 0 && (
        <div style={{ textAlign: "center", padding: 40, color: "#2a2a2a" }}>
          <div style={{ fontSize: 48 }}>👤</div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 10, color: "#333" }}>No clients yet. Send quotes to start building history.</p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {clients.map((client, i) => {
          const totalSpent = client.jobs.reduce((s, j) => s + (j.total || 0), 0);
          const lastJob = client.jobs[client.jobs.length - 1];
          return (
            <button key={i} onClick={() => setSelected(selected?.name === client.name ? null : client)}
              style={{ ...S.card, cursor: "pointer", textAlign: "left", border: `1px solid ${selected?.name === client.name ? "#f97316" : "#1e1e1e"}`, marginBottom: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "#f9731620", border: "1px solid #f9731630", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>👤</div>
                  <div>
                    <p style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{client.name}</p>
                    <p style={{ color: "#444", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>{client.phone || "No phone"} • {client.jobs.length} job{client.jobs.length !== 1 ? "s" : ""}</p>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: "#22c55e", fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 700 }}>{KES(totalSpent)}</p>
                  <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{lastJob?.date}</p>
                </div>
              </div>

              {selected?.name === client.name && (
                <div style={{ marginTop: 14, borderTop: "1px solid #1e1e1e", paddingTop: 14 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <button onClick={e => { e.stopPropagation(); window.open(`tel:${client.phone}`); }} style={{ flex: 1, padding: "8px", borderRadius: 10, background: "#22c55e15", border: "1px solid #22c55e30", color: "#22c55e", fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: "pointer" }}>📞 Call</button>
                    <button onClick={e => { e.stopPropagation(); window.open(`https://wa.me/254${(client.phone || "").replace(/^0/, "")}?text=${encodeURIComponent(`Hello ${client.name}! Following up from Michael (Bromine) Muchai regarding your car service.`)}`); }} style={{ flex: 1, padding: "8px", borderRadius: 10, background: "#25D36615", border: "1px solid #25D36630", color: "#25D366", fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: "pointer" }}>💬 WhatsApp</button>
                  </div>
                  <p style={{ ...S.lbl, marginBottom: 8 }}>JOB HISTORY</p>
                  {client.jobs.map((job, j) => (
                    <div key={j} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid #1a1a1a" }}>
                      <div>
                        <p style={{ color: "#aaa", fontSize: 12 }}>{job.type === "quote" ? "📋 Quote" : "🔧 Service"} #{job.quoteNo || job.id?.toString().slice(-4)}</p>
                        <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{job.date} • {job.clientCar}</p>
                      </div>
                      <p style={{ color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 12 }}>{KES(job.total)}</p>
                    </div>
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// REFERRAL SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════
const ReferralPage = ({ user }) => {
  const referralCode = user.email.split("@")[0].toUpperCase().slice(0, 6) + "BRM";
  const [copied, setCopied] = useState(false);

  const shareMsg = encodeURIComponent(
    `🚗 Hey! I use this app to manage my car maintenance in Nairobi.\n\n` +
    `It's connected to *Michael (Bromine) Muchai* — a trusted mechanic in Ngara.\n\n` +
    `✅ Warning light guide\n✅ Service reminders\n✅ Emergency help 24/7\n✅ AI car diagnosis\n\n` +
    `Use my referral code *${referralCode}* when signing up to get *${MECHANIC.referralDiscount}% off* your first service!\n\n` +
    `Download: ${MECHANIC.appUrl}`
  );

  const copy = () => {
    navigator.clipboard?.writeText(referralCode).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Refer & Earn</h2>
      <p style={S.sub}>Share the app. Your friends save money. You earn discounts.</p>

      {/* Referral Card */}
      <div style={{ background: "linear-gradient(135deg, #1a0f00 0%, #0f0f0f 50%, #0a1a00 100%)", border: "1px solid #f9731640", borderRadius: 22, padding: 24, marginBottom: 16, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: "50%", border: "1px solid #f9731615", pointerEvents: "none" }} />
        <p style={{ color: "#555", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>YOUR REFERRAL CODE</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "#f97316", letterSpacing: "0.1em" }}>{referralCode}</p>
          <button onClick={copy} style={{ padding: "8px 14px", borderRadius: 10, background: copied ? "#22c55e20" : "#f9731620", border: `1px solid ${copied ? "#22c55e40" : "#f9731640"}`, color: copied ? "#22c55e" : "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: "pointer" }}>
            {copied ? "✓ COPIED" : "COPY"}
          </button>
        </div>
        <p style={{ color: "#555", fontSize: 12, lineHeight: 1.6 }}>When a friend signs up with your code, they get <span style={{ color: "#22c55e" }}>{MECHANIC.referralDiscount}% off</span> their first service with Michael.</p>

        {user.referredBy && (
          <div style={{ background: "#22c55e10", border: "1px solid #22c55e30", borderRadius: 12, padding: "8px 14px", marginTop: 14 }}>
            <p style={{ color: "#22c55e", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>✓ You were referred by: {user.referredBy} — {user.discountEarned}% discount active!</p>
          </div>
        )}
      </div>

      {/* How It Works */}
      <div style={S.card}>
        <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 14 }}>HOW IT WORKS</p>
        {[
          { step: "1", text: "Copy your referral code above" },
          { step: "2", text: `Share it with friends via WhatsApp` },
          { step: "3", text: "They sign up & enter your code" },
          { step: "4", text: `They get ${MECHANIC.referralDiscount}% off their first service with Michael` },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "8px 0", borderBottom: "1px solid #1a1a1a" }}>
            <span style={{ width: 28, height: 28, borderRadius: 8, background: "#f9731620", color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.step}</span>
            <p style={{ color: "#888", fontSize: 13 }}>{s.text}</p>
          </div>
        ))}
      </div>

      {/* Share Buttons */}
      <button onClick={() => window.open(`https://wa.me/?text=${shareMsg}`, "_blank")} style={S.btn}>
        💬 Share via WhatsApp
      </button>
      <button onClick={() => { navigator.share ? navigator.share({ title: "Car Care KE", text: decodeURIComponent(shareMsg) }) : window.open(`https://wa.me/?text=${shareMsg}`, "_blank"); }} style={S.ghost}>
        🔗 Share via Other Apps
      </button>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// REVIEWS & RATINGS
// ═══════════════════════════════════════════════════════════════════════════════
const ReviewsPage = ({ reviews, setReviews, user }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ rating: 5, comment: "", service: "" });
  const [submitted, setSubmitted] = useState(false);
  const userReviewed = reviews.some(r => r.userEmail === user.email);
  const avgRating = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : "5.0";
  const dist = [5, 4, 3, 2, 1].map(star => ({ star, count: reviews.filter(r => r.rating === star).length }));

  const submit = () => {
    if (!form.comment) return;
    const review = { id: Date.now(), userName: user.name, userEmail: user.email, rating: form.rating, comment: form.comment, service: form.service, date: today() };
    const updated = [...reviews, review];
    setReviews(updated);
    // Share to WhatsApp
    window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`⭐ NEW REVIEW from ${user.name}\nRating: ${"★".repeat(form.rating)}${"☆".repeat(5 - form.rating)}\nService: ${form.service || "General"}\n\n"${form.comment}"`)}`, "_blank");
    setSubmitted(true);
    setShowForm(false);
  };

  const Stars = ({ rating, size = 16, interactive = false, onRate }) => (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(s => (
        <button key={s} onClick={() => interactive && onRate && onRate(s)}
          style={{ background: "transparent", border: "none", cursor: interactive ? "pointer" : "default", fontSize: size, color: s <= rating ? "#f97316" : "#333", padding: 0 }}>★</button>
      ))}
    </div>
  );

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Reviews & Ratings</h2>
      <p style={S.sub}>Client feedback for Michael (Bromine) Muchai</p>

      {/* Rating Summary */}
      <div style={{ ...S.card, border: "1px solid #f9731640", display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, color: "#f97316", lineHeight: 1 }}>{avgRating}</p>
          <Stars rating={Math.round(parseFloat(avgRating))} size={14} />
          <p style={{ color: "#444", fontSize: 10, fontFamily: "'DM Mono', monospace", marginTop: 4 }}>{reviews.length} reviews</p>
        </div>
        <div style={{ flex: 1 }}>
          {dist.map(({ star, count }) => (
            <div key={star} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <p style={{ color: "#555", fontSize: 10, fontFamily: "'DM Mono', monospace", width: 8 }}>{star}</p>
              <div style={{ flex: 1, background: "#0d0d0d", borderRadius: 20, height: 6, overflow: "hidden" }}>
                <div style={{ width: reviews.length ? `${(count / reviews.length) * 100}%` : "0%", height: "100%", background: "#f97316", borderRadius: 20 }} />
              </div>
              <p style={{ color: "#444", fontSize: 10, fontFamily: "'DM Mono', monospace", width: 16 }}>{count}</p>
            </div>
          ))}
        </div>
      </div>

      {!userReviewed && !submitted && (
        <button onClick={() => setShowForm(!showForm)} style={S.btn}>
          {showForm ? "✕ Cancel" : "⭐ Leave a Review"}
        </button>
      )}
      {submitted && <div style={{ ...S.card, border: "1px solid #22c55e40", textAlign: "center" }}><p style={{ color: "#22c55e", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>✓ Thank you! Your review has been submitted.</p></div>}

      {showForm && (
        <div style={{ ...S.card, border: "1px solid #f9731640", marginBottom: 14 }}>
          <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 14 }}>YOUR REVIEW</p>
          <span style={S.lbl}>YOUR RATING</span>
          <div style={{ marginBottom: 12 }}>
            <Stars rating={form.rating} size={32} interactive onRate={r => setForm({ ...form, rating: r })} />
          </div>
          <span style={S.lbl}>SERVICE RECEIVED</span>
          <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} style={S.input}>
            <option value="">Select service...</option>
            {SERVICE_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <span style={S.lbl}>YOUR COMMENT</span>
          <textarea placeholder="Share your experience with Michael..." value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })} style={{ ...S.input, minHeight: 90, resize: "vertical" }} />
          <button onClick={submit} disabled={!form.comment} style={{ ...S.btn, opacity: !form.comment ? 0.5 : 1 }}>Submit Review</button>
        </div>
      )}

      {/* Default reviews + user reviews */}
      {[
        { id: 0, userName: "James Waweru", rating: 5, comment: "Michael diagnosed my Toyota Axio's engine problem in under 10 minutes. Fixed it same day. Fair price, no surprises. Highly recommend!", service: "Engine Diagnostics", date: "2026-02-15" },
        { id: 0, userName: "Grace Akinyi", rating: 5, comment: "Best mechanic in Ngara. He explained everything clearly and even showed me the worn brake pads before replacing them. Very transparent.", service: "Brake Service", date: "2026-02-28" },
        { id: 0, userName: "David Mwangi", rating: 5, comment: "My matatu broke down on Thika Road at night. Michael came for a mobile visit within the hour. Lifesaver! Will always call him.", service: "Emergency Repair", date: "2026-03-01" },
        ...reviews
      ].map((r, i) => (
        <div key={i} style={{ ...S.card, marginBottom: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f9731620", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>👤</div>
              <div>
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{r.userName}</p>
                <p style={{ color: "#444", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{r.service || "General"}</p>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ display: "flex", gap: 1 }}>{[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: s <= r.rating ? "#f97316" : "#333", fontSize: 12 }}>★</span>)}</div>
              <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{r.date}</p>
            </div>
          </div>
          <p style={{ color: "#888", fontSize: 13, lineHeight: 1.6, fontStyle: "italic" }}>"{r.comment}"</p>
        </div>
      ))}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// INSURANCE TRACKER
// ═══════════════════════════════════════════════════════════════════════════════
const InsurancePage = ({ cars, insurance, setInsurance }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ carId: "", insurer: "", type: "Comprehensive", policyNo: "", startDate: "", endDate: "", cost: "", phone: "" });
  const f = k => e => setForm({ ...form, [k]: e.target.value });

  const add = () => {
    if (!form.carId || !form.endDate) return;
    setInsurance([...insurance, { ...form, id: Date.now() }]);
    setForm({ carId: "", insurer: "", type: "Comprehensive", policyNo: "", startDate: "", endDate: "", cost: "", phone: "" });
    setShowForm(false);
  };

  const remove = (id) => setInsurance(insurance.filter(i => i.id !== id));

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Insurance Tracker</h2>
      <p style={S.sub}>Never let your insurance lapse. Get reminders before it expires.</p>

      <button onClick={() => setShowForm(!showForm)} style={S.btn}>
        {showForm ? "✕ Cancel" : "+ Add Insurance Policy"}
      </button>

      {showForm && (
        <div style={{ ...S.card, border: "1px solid #f9731640" }}>
          <span style={S.lbl}>SELECT CAR</span>
          <select value={form.carId} onChange={f("carId")} style={S.input}>
            <option value="">Choose car...</option>
            {cars.map(c => <option key={c.id} value={c.id}>{c.make} {c.model} {c.plate ? `(${c.plate})` : ""}</option>)}
          </select>
          <span style={S.lbl}>INSURANCE COMPANY</span>
          <input placeholder="e.g. Jubilee Insurance, AAR, APA..." value={form.insurer} onChange={f("insurer")} style={S.input} />
          <span style={S.lbl}>POLICY TYPE</span>
          <select value={form.type} onChange={f("type")} style={S.input}>
            {INSURANCE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <span style={S.lbl}>POLICY NUMBER</span>
          <input placeholder="e.g. POL/2024/12345" value={form.policyNo} onChange={f("policyNo")} style={S.input} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <div><span style={S.lbl}>START DATE</span><input type="date" value={form.startDate} onChange={f("startDate")} style={S.input} /></div>
            <div><span style={S.lbl}>EXPIRY DATE</span><input type="date" value={form.endDate} onChange={f("endDate")} style={S.input} /></div>
          </div>
          <span style={S.lbl}>ANNUAL PREMIUM (KES)</span>
          <input type="number" placeholder="e.g. 45000" value={form.cost} onChange={f("cost")} style={S.input} />
          <span style={S.lbl}>INSURER PHONE (optional)</span>
          <input placeholder="e.g. 0800 123 456" value={form.phone} onChange={f("phone")} style={S.input} />
          <button onClick={add} style={S.btn}>Save Insurance</button>
        </div>
      )}

      {insurance.length === 0 && !showForm && (
        <div style={{ textAlign: "center", padding: 40, color: "#2a2a2a" }}>
          <div style={{ fontSize: 48 }}>🛡️</div>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 10, color: "#333" }}>No policies added yet</p>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {insurance.map(pol => {
          const days = daysFromNow(pol.endDate);
          const car = cars.find(c => c.id === pol.carId);
          const isExpired = days < 0;
          const isUrgent = days >= 0 && days <= 30;
          const color = isExpired ? "#ef4444" : isUrgent ? "#f59e0b" : "#22c55e";
          return (
            <div key={pol.id} style={{ ...S.card, border: `1px solid ${color}30`, marginBottom: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{pol.insurer || "Insurance Policy"}</p>
                    <span style={{ fontSize: 9, background: color + "20", color, padding: "2px 8px", borderRadius: 20, fontFamily: "'DM Mono', monospace", border: `1px solid ${color}40` }}>
                      {isExpired ? "EXPIRED" : isUrgent ? `${days}D LEFT` : "ACTIVE"}
                    </span>
                  </div>
                  <p style={{ color: "#444", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>{pol.type} • {car ? `${car.make} ${car.model}` : "Car"}</p>
                  {pol.policyNo && <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>Policy: {pol.policyNo}</p>}
                </div>
                <button onClick={() => remove(pol.id)} style={{ color: "#333", background: "transparent", border: "none", fontSize: 16, cursor: "pointer" }}>🗑</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div style={{ background: "#0d0d0d", borderRadius: 10, padding: 10 }}>
                  <p style={S.lbl}>EXPIRES</p>
                  <p style={{ color, fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>{pol.endDate}</p>
                </div>
                <div style={{ background: "#0d0d0d", borderRadius: 10, padding: 10 }}>
                  <p style={S.lbl}>PREMIUM</p>
                  <p style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>{pol.cost ? KES(pol.cost) : "—"}</p>
                </div>
              </div>
              {isUrgent && (
                <button onClick={() => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`Hello Michael! My ${pol.type} insurance for my ${car?.make || "car"} expires on ${pol.endDate}. Can you advise?`)}`, "_blank")}
                  style={{ ...S.btn, marginTop: 10, marginBottom: 0, background: "#f59e0b" }}>
                  ⚠️ Insurance Expiring — Get Help Renewing
                </button>
              )}
              {isExpired && (
                <div style={{ background: "#ef444415", border: "1px solid #ef444430", borderRadius: 10, padding: 10, marginTop: 10 }}>
                  <p style={{ color: "#ef4444", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>⛔ EXPIRED — Driving without valid insurance is illegal in Kenya. Renew immediately!</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ROAD SAFETY
// ═══════════════════════════════════════════════════════════════════════════════
const RoadSafetyPage = () => {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Legal", "Safety", "PSV"];
  const filtered = filter === "All" ? ROAD_SAFETY_TIPS : ROAD_SAFETY_TIPS.filter(t => t.category === filter);
  const [open, setOpen] = useState(null);

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Road Safety & Laws</h2>
      <p style={S.sub}>Kenya traffic laws, fines & safety tips every driver should know.</p>

      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }}>
        {cats.map(c => (
          <button key={c} onClick={() => setFilter(c)} style={{ whiteSpace: "nowrap", padding: "6px 14px", borderRadius: 20, fontSize: 10, fontFamily: "'DM Mono', monospace", fontWeight: 600, background: filter === c ? "#f97316" : "#141414", color: filter === c ? "#fff" : "#555", border: `1px solid ${filter === c ? "#f97316" : "#2a2a2a"}`, cursor: "pointer" }}>{c}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((tip, i) => (
          <button key={i} onClick={() => setOpen(open === i ? null : i)}
            style={{ ...S.card, cursor: "pointer", textAlign: "left", border: `1px solid ${open === i ? "#f9731640" : "#1e1e1e"}`, marginBottom: 0 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{tip.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 700 }}>{tip.title}</p>
                <span style={{ fontSize: 9, background: tip.category === "Legal" ? "#3b82f620" : tip.category === "PSV" ? "#8b5cf620" : "#22c55e20", color: tip.category === "Legal" ? "#3b82f6" : tip.category === "PSV" ? "#8b5cf6" : "#22c55e", padding: "2px 8px", borderRadius: 20, fontFamily: "'DM Mono', monospace", border: `1px solid transparent` }}>{tip.category}</span>
              </div>
              <span style={{ color: "#444", fontSize: 16 }}>{open === i ? "▲" : "▼"}</span>
            </div>
            {open === i && (
              <p style={{ color: "#888", fontSize: 13, lineHeight: 1.7, marginTop: 12, paddingTop: 12, borderTop: "1px solid #1e1e1e" }}>{tip.tip}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// PARTS LOCATOR
// ═══════════════════════════════════════════════════════════════════════════════
const PartsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = PARTS_SHOPS.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.area.toLowerCase().includes(search.toLowerCase()) || s.speciality.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Parts & Tyre Shops</h2>
      <p style={S.sub}>Trusted spare parts shops across Nairobi.</p>

      <div style={{ ...S.card, border: "1px solid #f9731630", marginBottom: 14 }}>
        <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 6 }}>💡 PRO TIP FROM MICHAEL</p>
        <p style={{ color: "#666", fontSize: 12, lineHeight: 1.6 }}>Always buy parts from a trusted supplier — counterfeit parts are common in Nairobi. Ask Michael to source parts for you directly to guarantee quality.</p>
        <button onClick={() => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent("Hello Michael! Can you help me source quality spare parts for my car?")}`)} style={{ ...S.btn, marginTop: 10, marginBottom: 0 }}>
          💬 Ask Michael to Source Parts
        </button>
      </div>

      <input placeholder="Search by name, area or speciality..." value={search} onChange={e => setSearch(e.target.value)} style={{ ...S.input, marginBottom: 14 }} />

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {filtered.map((shop, i) => (
          <div key={i} style={S.card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div>
                <p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{shop.name}</p>
                <p style={{ color: "#444", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>📍 {shop.area} • 🔩 {shop.speciality}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => window.open(`tel:${shop.phone}`)} style={{ flex: 1, padding: "8px", borderRadius: 10, background: "#22c55e15", border: "1px solid #22c55e30", color: "#22c55e", fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: "pointer" }}>📞 {shop.phone}</button>
              <button onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(shop.name + " " + shop.area + " Nairobi")}`, "_blank")} style={{ padding: "8px 12px", borderRadius: 10, background: "#4285F415", border: "1px solid #4285F430", color: "#4285F4", fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: "pointer" }}>📍 Map</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// REMAINING PAGES (Dashboard, Warnings, Log, Fuel, AI, Cars, Emergency, PSV)
// ═══════════════════════════════════════════════════════════════════════════════
const Dashboard = ({ user, cars, activeCar, serviceLog, setPage, insurance }) => {
  const car = cars.find(c => c.id === activeCar);
  const carMileage = car?.mileage ? parseInt(car.mileage) : 0;
  const nextService = carMileage ? carMileage + 5000 : null;
  const lastSvc = serviceLog.filter(s => s.carId === activeCar).slice(-1)[0];
  const dueAlert = nextService && (nextService - carMileage) <= 500;
  const isPSV = car?.type?.includes("Matatu") || car?.type?.includes("Bus") || car?.type?.includes("Taxi");
  const expiringInsurance = insurance.filter(p => { const d = daysFromNow(p.endDate); return d >= 0 && d <= 30; });
  const userCar = car ? `${car.make} ${car.model} ${car.year || ""}` : "";

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
        <div>
          <p style={{ color: "#333", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>KARIBU,</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#fff", marginTop: 2 }}>{user.name} 👋</h2>
        </div>
        <button onClick={() => setPage("cars")} style={{ background: car ? "#f9731615" : "#ef444415", border: `1px solid ${car ? "#f9731640" : "#ef444440"}`, borderRadius: 12, padding: "8px 12px", cursor: "pointer" }}>
          <p style={{ color: car ? "#f97316" : "#ef4444", fontSize: 10, fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>{car ? `🚗 ${car.plate || car.make}` : "+ ADD CAR"}</p>
        </button>
      </div>

      {/* Alerts */}
      {user.discountEarned > 0 && <div style={{ background: "#22c55e15", border: "1px solid #22c55e40", borderRadius: 14, padding: "10px 14px", marginBottom: 10 }}><p style={{ color: "#22c55e", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>🎉 You have a {user.discountEarned}% referral discount on your first service!</p></div>}
      {dueAlert && <div style={{ background: "#ef444418", border: "1px solid #ef4444", borderRadius: 14, padding: "10px 14px", marginBottom: 10 }}><p style={{ color: "#ef4444", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>⚠️ SERVICE DUE — Only {nextService - carMileage} km remaining!</p></div>}
      {expiringInsurance.length > 0 && <div style={{ background: "#f59e0b15", border: "1px solid #f59e0b40", borderRadius: 14, padding: "10px 14px", marginBottom: 10 }}><p style={{ color: "#f59e0b", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>🛡️ Insurance expiring in {daysFromNow(expiringInsurance[0].endDate)} days — tap to renew!</p></div>}
      {isPSV && <div style={{ background: "#3b82f615", border: "1px solid #3b82f640", borderRadius: 14, padding: "10px 14px", marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}><p style={{ color: "#3b82f6", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>🚐 PSV Mode Active</p><button onClick={() => setPage("psv")} style={{ color: "#3b82f6", fontSize: 11, fontFamily: "'DM Mono', monospace", background: "transparent", border: "1px solid #3b82f640", borderRadius: 8, padding: "3px 10px", cursor: "pointer" }}>Open →</button></div>}

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
        {[
          { label: "MILEAGE", val: carMileage ? `${carMileage.toLocaleString()} km` : "—", icon: "📍" },
          { label: "NEXT SERVICE", val: nextService ? `${nextService.toLocaleString()} km` : "—", icon: "🔜", alert: dueAlert },
          { label: "LAST SERVICE", val: lastSvc ? lastSvc.date : "None", icon: "📅" },
          { label: "SERVICES", val: serviceLog.filter(s => s.carId === activeCar).length, icon: "📋" },
        ].map((st, i) => (
          <div key={i} style={{ background: "#141414", border: `1px solid ${st.alert ? "#ef4444" : "#1e1e1e"}`, borderRadius: 16, padding: 14 }}>
            <span style={{ fontSize: 22 }}>{st.icon}</span>
            <p style={{ color: "#333", fontSize: 9, fontFamily: "'DM Mono', monospace", marginTop: 8, letterSpacing: "0.1em" }}>{st.label}</p>
            <p style={{ color: st.alert ? "#ef4444" : "#e0e0e0", fontSize: 13, fontWeight: 700, marginTop: 2, fontFamily: "'DM Mono', monospace" }}>{st.val}</p>
          </div>
        ))}
      </div>

      {/* Michael compact card */}
      <div style={{ ...S.card, border: "1px solid #f9731640", background: "linear-gradient(135deg,#1a0f00,#0f0f0f)", marginBottom: 16 }}>
        <p style={{ ...S.lbl, color: "#f97316" }}>YOUR TRUSTED MECHANIC</p>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#f97316,#c2410c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🔧</div>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{MECHANIC.shortName}</p>
            <p style={{ color: "#f97316", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{MECHANIC.garageShort} • 24/7 Emergency</p>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={() => window.open(`tel:${MECHANIC.phone}`)} style={{ width: 34, height: 34, borderRadius: 10, background: "#22c55e20", border: "1px solid #22c55e40", color: "#22c55e", fontSize: 15, cursor: "pointer" }}>📞</button>
            <button onClick={() => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`Hello Michael! I need help with my car. ${userCar ? `My car: ${userCar}` : ""}`)}`)} style={{ width: 34, height: 34, borderRadius: 10, background: "#25D36620", border: "1px solid #25D36640", color: "#25D366", fontSize: 15, cursor: "pointer" }}>💬</button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <p style={{ ...S.lbl, marginBottom: 10 }}>QUICK ACTIONS</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
        {[
          { icon: "📋", label: "Quote Generator", page: "quote" },
          { icon: "🤖", label: "AI Diagnosis", page: "ai" },
          { icon: "⚠️", label: "Warning Lights", page: "warnings" },
          { icon: "👤", label: "Client History", page: "clients" },
          { icon: "🛡️", label: "Insurance", page: "insurance" },
          { icon: "🆘", label: "Emergency Help", page: "emergency" },
          { icon: "⭐", label: "Reviews", page: "reviews" },
          { icon: "🔗", label: "Refer & Earn", page: "referral" },
        ].map(q => (
          <button key={q.page} onClick={() => setPage(q.page)} style={{ background: "#141414", border: "1px solid #1e1e1e", borderRadius: 16, padding: "14px 12px", textAlign: "left", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#f9731640"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1e1e"}>
            <span style={{ fontSize: 24 }}>{q.icon}</span>
            <p style={{ color: "#ccc", fontSize: 12, fontWeight: 600, marginTop: 8, fontFamily: "'DM Mono', monospace" }}>{q.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const WarningsPage = () => {
  const [sel, setSel] = useState(null);
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? WARNING_LIGHTS : WARNING_LIGHTS.filter(w => w.severity === filter);
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Warning Lights</h2>
      <p style={S.sub}>Tap any light to understand it immediately.</p>
      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto" }}>
        {["All", "Low", "Medium", "Critical"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ whiteSpace: "nowrap", padding: "6px 14px", borderRadius: 20, fontSize: 10, fontFamily: "'DM Mono', monospace", fontWeight: 600, background: filter === f ? (f === "Low" ? "#22c55e" : f === "Medium" ? "#f59e0b" : f === "Critical" ? "#ef4444" : "#f97316") : "#141414", color: filter === f ? "#fff" : "#555", border: `1px solid ${filter === f ? "transparent" : "#2a2a2a"}`, cursor: "pointer" }}>{f}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 16 }}>
        {filtered.map(w => (
          <button key={w.id} onClick={() => setSel(w)} style={{ background: "#141414", border: `1px solid ${sel?.id === w.id ? "#f97316" : "#1e1e1e"}`, borderRadius: 14, padding: 12, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}>
            <span style={{ fontSize: 28 }}>{w.icon}</span>
            <p style={{ color: "#aaa", fontSize: 9, fontFamily: "'DM Mono', monospace", textAlign: "center" }}>{w.name}</p>
            <span style={{ fontSize: 8, padding: "2px 6px", borderRadius: 20, background: SEV[w.severity].bg, color: SEV[w.severity].text, fontFamily: "'DM Mono', monospace" }}>{w.severity}</span>
          </button>
        ))}
      </div>
      {sel && (
        <div style={{ ...S.card, border: `1px solid ${SEV[sel.severity].border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ fontSize: 36 }}>{sel.icon}</span>
              <div><p style={{ color: "#fff", fontSize: 17, fontWeight: 700 }}>{sel.name}</p><span style={{ fontSize: 10, padding: "2px 10px", borderRadius: 20, background: SEV[sel.severity].bg, color: SEV[sel.severity].text, fontFamily: "'DM Mono', monospace" }}>{sel.severity.toUpperCase()}</span></div>
            </div>
            <button onClick={() => setSel(null)} style={{ color: "#444", fontSize: 18, background: "transparent", border: "none", cursor: "pointer" }}>✕</button>
          </div>
          {[{ lbl: "MEANING", val: sel.meaning }, { lbl: "WHAT TO DO", val: sel.action, hi: true }, { lbl: "COST RANGE (KES)", val: sel.costRange, or: true }].map((r, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <p style={S.lbl}>{r.lbl}</p>
              <p style={{ color: r.or ? "#f97316" : r.hi ? "#e0e0e0" : "#888", fontSize: 13, lineHeight: 1.6, background: r.hi ? "#ffffff06" : "transparent", padding: r.hi ? "10px 12px" : 0, borderRadius: 10, borderLeft: r.hi ? "2px solid #f97316" : "none", paddingLeft: r.hi ? 12 : 0 }}>{r.val}</p>
            </div>
          ))}
          <button onClick={() => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`Hello Michael! My ${sel.name} warning light is on. What should I do?`)}`)} style={{ ...S.btn, marginBottom: 0 }}>💬 Ask Michael About This</button>
        </div>
      )}
    </div>
  );
};

const ServiceLogPage = ({ serviceLog, setServiceLog, cars, activeCar, setCars }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ date: "", mileage: "", type: "", cost: "", notes: "" });
  const f = k => e => setForm({ ...form, [k]: e.target.value });
  const car = cars.find(c => c.id === activeCar);
  const logs = serviceLog.filter(s => s.carId === activeCar);
  const add = () => {
    if (!form.date || !form.type) return;
    setServiceLog([...serviceLog, { ...form, id: Date.now(), carId: activeCar }]);
    if (form.mileage) setCars(cars.map(c => c.id === activeCar ? { ...c, mileage: form.mileage } : c));
    setForm({ date: "", mileage: "", type: "", cost: "", notes: "" }); setShowForm(false);
  };
  const total = logs.reduce((s, r) => s + (parseInt(r.cost) || 0), 0);
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Service Log</h2>
      <p style={S.sub}>Track every service. Know what's coming next.</p>
      {!activeCar ? <div style={{ ...S.card, border: "1px solid #f9731640", textAlign: "center" }}><p style={{ color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 12 }}>⚠️ Add a car first to log services</p></div>
        : <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
            <div style={{ ...S.card, textAlign: "center", marginBottom: 0 }}><p style={S.lbl}>TOTAL SPENT</p><p style={{ color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 700 }}>{KES(total)}</p></div>
            <div style={{ ...S.card, textAlign: "center", marginBottom: 0 }}><p style={S.lbl}>SERVICES</p><p style={{ color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: 15, fontWeight: 700 }}>{logs.length}</p></div>
          </div>
          <button onClick={() => setShowForm(!showForm)} style={S.btn}>{showForm ? "✕ Cancel" : "+ Log Service"}</button>
          {showForm && <div style={{ ...S.card, border: "1px solid #f9731640" }}>
            <span style={S.lbl}>DATE</span><input type="date" value={form.date} onChange={f("date")} style={S.input} />
            <span style={S.lbl}>SERVICE TYPE</span>
            <select value={form.type} onChange={f("type")} style={S.input}><option value="">Select type</option>{SERVICE_TYPES.map(s => <option key={s} value={s}>{s}</option>)}</select>
            <span style={S.lbl}>MILEAGE (km)</span><input type="number" placeholder="45000" value={form.mileage} onChange={f("mileage")} style={S.input} />
            <span style={S.lbl}>COST (KES)</span><input type="number" placeholder="5000" value={form.cost} onChange={f("cost")} style={S.input} />
            <span style={S.lbl}>NOTES</span><input placeholder="Optional notes..." value={form.notes} onChange={f("notes")} style={S.input} />
            <button onClick={add} style={S.btn}>Save Service</button>
          </div>}
          {logs.length === 0 && <div style={{ textAlign: "center", padding: 40, color: "#2a2a2a" }}><div style={{ fontSize: 40 }}>📋</div><p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 10 }}>No records yet</p></div>}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{[...logs].reverse().map(s => (
            <div key={s.id} style={{ ...S.card, display: "flex", gap: 12, marginBottom: 0 }}>
              <div style={{ width: 3, background: "#f97316", borderRadius: 4, flexShrink: 0, alignSelf: "stretch" }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{s.type}</p>{s.cost && <p style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>{KES(s.cost)}</p>}</div>
                <p style={{ color: "#333", fontSize: 11, fontFamily: "'DM Mono', monospace", marginTop: 3 }}>{s.date}{s.mileage ? ` • ${parseInt(s.mileage).toLocaleString()} km` : ""}</p>
                {s.notes && <p style={{ color: "#444", fontSize: 12, marginTop: 4 }}>{s.notes}</p>}
              </div>
            </div>
          ))}</div>
        </>}
    </div>
  );
};

const AIDiagPage = ({ cars, activeCar }) => {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const car = cars.find(c => c.id === activeCar);
  const diagnose = async () => {
    if (!problem.trim()) return; setLoading(true); setResult(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: `You are Michael Muchai, expert multi-brand automotive technician Nairobi Kenya. ${car ? `Car: ${car.year || ""} ${car.make} ${car.model}` : ""}. Respond ONLY raw JSON no markdown: { "likely_causes": [2-3 strings], "severity": "Low"|"Medium"|"Critical", "what_to_do": string, "estimated_cost_kes": string, "can_drive": boolean, "swahili_summary": string }`, messages: [{ role: "user", content: problem }] }) });
      const data = await res.json();
      const text = data.content.map(b => b.text || "").join("");
      setResult(JSON.parse(text.replace(/```json|```/g, "").trim()));
    } catch { setResult({ error: "AI error. Please try again." }); }
    setLoading(false);
  };
  const sc = { Low: "#22c55e", Medium: "#f59e0b", Critical: "#ef4444" };
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>AI Diagnosis</h2>
      <p style={S.sub}>Describe your problem — AI gives instant diagnosis.</p>
      <div style={{ ...S.card, border: "1px solid #f9731630" }}>
        <textarea value={problem} onChange={e => setProblem(e.target.value)} placeholder="e.g. Engine making clicking noise on startup. White smoke from exhaust. Car pulls to the left when braking..." style={{ ...S.input, minHeight: 100, resize: "vertical" }} />
        {car && <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>🚗 {car.make} {car.model} {car.year || ""}</p>}
        <button onClick={diagnose} disabled={loading || !problem.trim()} style={{ ...S.btn, opacity: loading || !problem.trim() ? 0.5 : 1, marginBottom: 0 }}>{loading ? "⏳ Analyzing..." : "🔍 Diagnose My Car"}</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
        {["Engine won't start", "Overheating", "Brake grinding", "White smoke", "Rough idle", "Battery draining", "AC not cooling", "Car pulls to side"].map(s => (
          <button key={s} onClick={() => setProblem(s)} style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", padding: "5px 10px", borderRadius: 20, background: "#141414", color: "#555", border: "1px solid #2a2a2a", cursor: "pointer" }}>{s}</button>
        ))}
      </div>
      {result && !result.error && (
        <div style={{ ...S.card, border: `1px solid ${(sc[result.severity] || "#f97316")}40` }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#fff" }}>AI Diagnosis</p>
            <span style={{ background: (sc[result.severity] || "#888") + "20", color: sc[result.severity] || "#888", fontSize: 10, fontFamily: "'DM Mono', monospace", padding: "4px 10px", borderRadius: 20 }}>{result.severity?.toUpperCase()}</span>
          </div>
          {result.swahili_summary && <div style={{ background: "#f9731610", borderLeft: "3px solid #f97316", padding: "8px 12px", borderRadius: "0 8px 8px 0", marginBottom: 12 }}><p style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>🇰🇪 {result.swahili_summary}</p></div>}
          <p style={S.lbl}>LIKELY CAUSES</p>
          {(result.likely_causes || []).map((c, i) => <p key={i} style={{ color: "#aaa", fontSize: 13, padding: "6px 0", borderBottom: "1px solid #1e1e1e", fontFamily: "'DM Mono', monospace" }}>{i + 1}. {c}</p>)}
          <p style={{ ...S.lbl, marginTop: 12 }}>WHAT TO DO</p>
          <p style={{ color: "#ccc", fontSize: 13, lineHeight: 1.7, background: "#ffffff06", padding: "10px 12px", borderRadius: 10, borderLeft: "2px solid #f97316", paddingLeft: 12 }}>{result.what_to_do}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
            <div style={{ background: "#0d0d0d", borderRadius: 12, padding: 12 }}><p style={S.lbl}>COST (KES)</p><p style={{ color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 700 }}>{result.estimated_cost_kes}</p></div>
            <div style={{ background: "#0d0d0d", borderRadius: 12, padding: 12 }}><p style={S.lbl}>SAFE TO DRIVE?</p><p style={{ color: result.can_drive ? "#22c55e" : "#ef4444", fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 700 }}>{result.can_drive ? "✓ Yes" : "✗ No"}</p></div>
          </div>
          <button onClick={() => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`Hello Michael! AI diagnosed my car problem as: ${result.likely_causes?.join(", ")}. Estimated cost: KES ${result.estimated_cost_kes}. Please advise.`)}`)} style={{ ...S.btn, marginTop: 12, marginBottom: 0 }}>💬 Send Diagnosis to Michael</button>
        </div>
      )}
      {result?.error && <div style={{ ...S.card, border: "1px solid #ef444440" }}><p style={{ color: "#ef4444", fontFamily: "'DM Mono', monospace", fontSize: 13 }}>{result.error}</p></div>}
    </div>
  );
};

const FuelPage = () => {
  const [tank, setTank] = useState(45); const [level, setLevel] = useState(10); const [sel, setSel] = useState(0);
  const fill = tank - level; const cost = fill * FUEL_PRICES[sel].price;
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Fuel Prices</h2>
      <p style={S.sub}>EPRA Kenya prices + fill cost calculator</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {FUEL_PRICES.map((f, i) => (
          <button key={i} onClick={() => setSel(i)} style={{ ...S.card, border: `1px solid ${sel === i ? f.color : "#1e1e1e"}`, display: "flex", alignItems: "center", gap: 14, cursor: "pointer", marginBottom: 0 }}>
            <span style={{ fontSize: 28 }}>{f.icon}</span>
            <div style={{ flex: 1, textAlign: "left" }}><p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{f.type}</p><p style={{ color: "#444", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>Per litre</p></div>
            <p style={{ color: f.color, fontFamily: "'DM Mono', monospace", fontSize: 18, fontWeight: 700 }}>KES {f.price.toFixed(2)}</p>
          </button>
        ))}
      </div>
      <div style={{ ...S.card, border: "1px solid #f9731640" }}>
        <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace", marginBottom: 14 }}>⛽ FILL COST CALCULATOR</p>
        <span style={S.lbl}>TANK SIZE</span>
        <select value={tank} onChange={e => setTank(parseInt(e.target.value))} style={S.input}>{TANK_SIZES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}</select>
        <span style={S.lbl}>CURRENT FUEL — {level}L remaining</span>
        <input type="range" min={0} max={tank} value={level} onChange={e => setLevel(parseInt(e.target.value))} style={{ width: "100%", accentColor: "#f97316", marginBottom: 14 }} />
        <div style={{ background: "#0d0d0d", borderRadius: 14, padding: 16, textAlign: "center" }}>
          <p style={{ color: "#444", fontSize: 10, fontFamily: "'DM Mono', monospace", marginBottom: 4 }}>FILL {fill}L OF {FUEL_PRICES[sel].type.toUpperCase()}</p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, color: "#f97316" }}>{KES(Math.round(cost))}</p>
          <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace", marginTop: 4 }}>@ KES {FUEL_PRICES[sel].price}/L × {fill}L</p>
        </div>
      </div>
    </div>
  );
};

const CarsPage = ({ cars, setCars, activeCar, setActiveCar }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", make: "", model: "", year: "", plate: "", type: "Saloon / Sedan", mileage: "" });
  const f = k => e => setForm({ ...form, [k]: e.target.value });
  const add = () => {
    if (!form.make || !form.model) return;
    const car = { ...form, id: Date.now() };
    setCars([...cars, car]); setActiveCar(car.id); setShowForm(false);
    setForm({ name: "", make: "", model: "", year: "", plate: "", type: "Saloon / Sedan", mileage: "" });
  };
  const isPSV = t => t?.includes("Matatu") || t?.includes("Bus") || t?.includes("Taxi");
  const remove = id => { setCars(cars.filter(c => c.id !== id)); if (activeCar === id) setActiveCar(null); };
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>My Cars</h2>
      <p style={S.sub}>Manage all your vehicles in one place.</p>
      {cars.map(car => (
        <div key={car.id} style={{ ...S.card, border: `1px solid ${activeCar === car.id ? "#f97316" : "#1e1e1e"}`, display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <button onClick={() => setActiveCar(car.id)} style={{ display: "flex", alignItems: "center", gap: 14, flex: 1, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
            <span style={{ fontSize: 32 }}>{isPSV(car.type) ? "🚐" : "🚗"}</span>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{car.name || `${car.make} ${car.model}`}</p>
              <p style={{ color: "#444", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>{car.plate || "No plate"} • {car.year || "—"} • {car.mileage ? `${parseInt(car.mileage).toLocaleString()} km` : "No mileage"}</p>
            </div>
          </button>
          <div style={{ display: "flex", gap: 6 }}>
            {activeCar === car.id && <span style={{ color: "#f97316", fontSize: 16 }}>✓</span>}
            <button onClick={() => remove(car.id)} style={{ color: "#333", background: "transparent", border: "none", fontSize: 16, cursor: "pointer" }}>🗑</button>
          </div>
        </div>
      ))}
      {cars.length === 0 && <div style={{ textAlign: "center", padding: 30 }}><div style={{ fontSize: 48 }}>🚗</div><p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, marginTop: 10, color: "#333" }}>No cars yet</p></div>}
      <button onClick={() => setShowForm(!showForm)} style={S.btn}>{showForm ? "✕ Cancel" : "+ Add Car"}</button>
      {showForm && <div style={{ ...S.card, border: "1px solid #f9731640" }}>
        {[["CAR NICKNAME", "name", "e.g. My Axio, Work Matatu"], ["MAKE", "make", "Toyota, Nissan, Isuzu..."], ["MODEL", "model", "Axio, Demio, NZE..."]].map(([lbl, key, ph]) => (
          <div key={key}><span style={S.lbl}>{lbl}</span><input placeholder={ph} value={form[key]} onChange={f(key)} style={S.input} /></div>
        ))}
        <span style={S.lbl}>YEAR</span><input type="number" placeholder="2018" value={form.year} onChange={f("year")} style={S.input} />
        <span style={S.lbl}>NUMBER PLATE</span><input placeholder="KDG 123A" value={form.plate} onChange={f("plate")} style={{ ...S.input, textTransform: "uppercase" }} />
        <span style={S.lbl}>CAR TYPE</span><select value={form.type} onChange={f("type")} style={S.input}>{CAR_TYPES.map(t => <option key={t} value={t}>{t}</option>)}</select>
        <span style={S.lbl}>CURRENT MILEAGE (km)</span><input type="number" placeholder="45000" value={form.mileage} onChange={f("mileage")} style={S.input} />
        <button onClick={add} style={S.btn}>Save Car</button>
      </div>}
    </div>
  );
};

const EmergencyPage = ({ cars, activeCar }) => {
  const [checked, setChecked] = useState({});
  const [showBooking, setShowBooking] = useState(false);
  const [booking, setBooking] = useState({ name: "", phone: "", car: "", date: "", time: "", type: "", location: "", problem: "" });
  const [sent, setSent] = useState(false);
  const car = cars.find(c => c.id === activeCar);
  const userCar = car ? `${car.make} ${car.model} ${car.year || ""} (${car.plate || ""})` : "";
  const f = k => e => setBooking({ ...booking, [k]: e.target.value });

  const handleSOS = () => {
    const msg = `🆘 *EMERGENCY — I need urgent help!*\nCar: ${userCar || "Not specified"}\n📍 Getting GPS...`;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const gps = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
        window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`🆘 *EMERGENCY!*\nCar: ${userCar || "Not specified"}\n📍 My Location: ${gps}\nPlease call me back immediately!`)}`, "_blank");
      }, () => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank"));
    } else window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const sendBooking = () => {
    window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`📅 *NEW BOOKING REQUEST*\n👤 ${booking.name}\n📞 ${booking.phone}\n🚗 ${booking.car || userCar}\n🔧 ${booking.type}\n📍 ${booking.location}\n📆 ${booking.date} at ${booking.time}\n📝 ${booking.problem || "Not described"}`)}`, "_blank");
    setSent(true); setTimeout(() => { setSent(false); setShowBooking(false); setBooking({ name: "", phone: "", car: "", date: "", time: "", type: "", location: "", problem: "" }); }, 3000);
  };

  const times = ["7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];

  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Emergency Help</h2>
      <p style={S.sub}>Stuck on the road? Michael responds 24/7.</p>

      {/* Michael Hero */}
      <div style={{ background: "linear-gradient(135deg,#1a0f00,#0f0f0f,#1a0800)", border: "1px solid #f9731650", borderRadius: 22, padding: 20, marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#f97316,#c2410c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0, boxShadow: "0 4px 20px #f9731640" }}>🔧</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "#fff" }}>{MECHANIC.shortName}</p>
            <p style={{ color: "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>{MECHANIC.title}</p>
            <p style={{ color: "#555", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>📍 {MECHANIC.garage}</p>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>{MECHANIC.specialities.map((s, i) => <span key={i} style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", background: "#f9731610", color: "#f97316", padding: "3px 8px", borderRadius: 20, border: "1px solid #f9731625" }}>{s}</span>)}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
          {[
            { label: "📞 Call", color: "#22c55e", action: () => window.open(`tel:${MECHANIC.phone}`) },
            { label: "💬 WhatsApp", color: "#25D366", action: () => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`Hello Michael! I need car help. My car: ${userCar || "Not specified"}`)}`) },
            { label: "📍 Directions", color: "#4285F4", action: () => window.open(MECHANIC.gmaps) },
            { label: "🏍️ Mobile", color: "#8b5cf6", action: () => window.open(`https://wa.me/${MECHANIC.whatsapp}?text=${encodeURIComponent(`Hello Michael! I need a mobile visit. My car: ${userCar || "Not specified"}. Can you come to me?`)}`) },
          ].map((btn, i) => (
            <button key={i} onClick={btn.action} style={{ padding: "8px 4px", borderRadius: 10, background: btn.color + "15", border: `1px solid ${btn.color}30`, color: btn.color, fontFamily: "'DM Mono', monospace", fontSize: 9, fontWeight: 700, cursor: "pointer", textAlign: "center" }}>{btn.label}</button>
          ))}
        </div>
      </div>

      {/* SOS */}
      <div style={{ textAlign: "center", padding: "18px 0" }}>
        <button onClick={handleSOS} style={{ width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle at 40% 40%,#ef4444,#7f1d1d)", border: "4px solid #ef444450", boxShadow: "0 0 60px #ef444420", fontSize: 14, fontWeight: 900, color: "#fff", fontFamily: "'DM Mono', monospace", cursor: "pointer", lineHeight: 1.5 }}>
          🆘{"\n"}SEND{"\n"}HELP
        </button>
        <p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace", marginTop: 10 }}>Sends your GPS to Michael instantly</p>
      </div>

      {/* Book */}
      <button onClick={() => setShowBooking(!showBooking)} style={S.btn}>{showBooking ? "✕ Cancel" : "📅 Book a Service"}</button>
      {showBooking && (
        <div style={{ ...S.card, border: "1px solid #f9731640" }}>
          {sent ? <div style={{ textAlign: "center", padding: 20 }}><div style={{ fontSize: 48 }}>✅</div><p style={{ color: "#22c55e", fontFamily: "'DM Mono', monospace", fontSize: 14, marginTop: 10 }}>Booking sent to Michael!</p></div>
            : <>
              <p style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>📅 BOOK A SERVICE WITH MICHAEL</p>
              <span style={S.lbl}>YOUR NAME</span><input placeholder="John Kamau" value={booking.name} onChange={f("name")} style={S.input} />
              <span style={S.lbl}>YOUR PHONE</span><input placeholder="0712 345 678" value={booking.phone} onChange={f("phone")} type="tel" style={S.input} />
              <span style={S.lbl}>YOUR CAR</span><input placeholder={userCar || "Toyota Axio 2016"} value={booking.car} onChange={f("car")} style={S.input} />
              <span style={S.lbl}>SERVICE TYPE</span><select value={booking.type} onChange={f("type")} style={S.input}><option value="">Select...</option>{SERVICE_TYPES.map(s => <option key={s} value={s}>{s}</option>)}</select>
              <span style={S.lbl}>LOCATION</span><select value={booking.location} onChange={f("location")} style={S.input}><option value="">Select...</option><option>Bring to Garage (Desai Rd, Ngara)</option><option>Mobile Visit — Come to Me</option></select>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div><span style={S.lbl}>DATE</span><input type="date" value={booking.date} onChange={f("date")} style={S.input} /></div>
                <div><span style={S.lbl}>TIME</span><select value={booking.time} onChange={f("time")} style={S.input}><option value="">Select...</option>{times.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
              </div>
              <span style={S.lbl}>PROBLEM (OPTIONAL)</span>
              <textarea placeholder="Describe the issue..." value={booking.problem} onChange={f("problem")} style={{ ...S.input, minHeight: 70, resize: "vertical" }} />
              <button onClick={sendBooking} disabled={!booking.name || !booking.phone || !booking.type || !booking.date} style={{ ...S.btn, opacity: (!booking.name || !booking.phone || !booking.type || !booking.date) ? 0.5 : 1, marginBottom: 0 }}>📤 Send Booking Request</button>
            </>}
        </div>
      )}

      {/* Checklist */}
      <div style={{ ...S.card, marginTop: 4 }}>
        <p style={{ color: "#f97316", fontSize: 10, fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>📋 BREAKDOWN CHECKLIST</p>
        {["Move car to a safe spot off the road", "Switch on hazard lights (emergency flashers)", "Apply handbrake and put in Park (P)", "Place warning triangle 50m behind your car", "Stay visible — don't sit inside on highways", "Call Michael or use the SOS button above", "Note your location (road name, landmark)"].map((item, i) => (
          <button key={i} onClick={() => setChecked({ ...checked, [i]: !checked[i] })} style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", padding: "9px 0", borderBottom: "1px solid #1a1a1a", background: "transparent", cursor: "pointer" }}>
            <span style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${checked[i] ? "#22c55e" : "#333"}`, background: checked[i] ? "#22c55e" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>{checked[i] ? "✓" : ""}</span>
            <p style={{ color: checked[i] ? "#444" : "#888", fontSize: 12, textDecoration: checked[i] ? "line-through" : "none", fontFamily: "'DM Mono', monospace" }}>{item}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const PSVPage = () => {
  const [tab, setTab] = useState("daily");
  const [checked, setChecked] = useLS("psv_v4", {});
  const daily = ["Engine oil level (dipstick check)", "Coolant level in reservoir", "Tyre pressure visual check", "All lights & indicators", "Brakes feel responsive", "No unusual sounds on startup", "Fuel level sufficient for route", "Windscreen clean & clear"];
  const ntsa = ["Valid PSV licence & insurance", "NTSA inspection sticker current", "Tyre condition & pressure (all 4 + spare)", "Brake functionality test", "All lights working (head, brake, indicator)", "Fire extinguisher onboard", "First aid kit stocked", "Reflective triangles (2)", "Seatbelts for all passengers", "Speed governor sealed & working", "Windscreen wipers functional", "Horn working"];
  const items = tab === "daily" ? daily : ntsa;
  const done = items.filter(i => checked[i]).length;
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}><span style={{ fontSize: 32 }}>🚐</span><h2 style={S.h1}>PSV Mode</h2></div>
      <p style={S.sub}>Matatu, Taxi & Uber operator tools</p>
      <div style={{ display: "flex", background: "#0d0d0d", borderRadius: 14, padding: 4, marginBottom: 18 }}>
        {[{ id: "daily", lbl: "DAILY CHECK" }, { id: "ntsa", lbl: "NTSA PSV" }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, padding: 10, borderRadius: 10, fontSize: 11, fontFamily: "'DM Mono', monospace", fontWeight: 600, background: tab === t.id ? "#f97316" : "transparent", color: tab === t.id ? "#fff" : "#444", border: "none", cursor: "pointer" }}>{t.lbl}</button>
        ))}
      </div>
      <div style={{ ...S.card, marginBottom: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={S.lbl}>PROGRESS</span><p style={{ color: done === items.length ? "#22c55e" : "#f97316", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>{done}/{items.length}</p></div>
        <div style={{ background: "#0d0d0d", borderRadius: 20, height: 6, overflow: "hidden" }}><div style={{ width: `${(done / items.length) * 100}%`, height: "100%", background: done === items.length ? "#22c55e" : "#f97316", borderRadius: 20, transition: "width 0.3s" }} /></div>
        {done === items.length && <p style={{ color: "#22c55e", fontSize: 11, fontFamily: "'DM Mono', monospace", marginTop: 8 }}>✓ All clear! Ready to roll 🚐</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((item, i) => (
          <button key={i} onClick={() => setChecked({ ...checked, [item]: !checked[item] })} style={{ display: "flex", alignItems: "center", gap: 12, background: "#141414", border: `1px solid ${checked[item] ? "#22c55e30" : "#1e1e1e"}`, borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left" }}>
            <span style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${checked[item] ? "#22c55e" : "#333"}`, background: checked[item] ? "#22c55e" : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12 }}>{checked[item] ? "✓" : ""}</span>
            <p style={{ color: checked[item] ? "#444" : "#aaa", fontSize: 12, textDecoration: checked[item] ? "line-through" : "none" }}>{item}</p>
          </button>
        ))}
      </div>
      <button onClick={() => setChecked({})} style={{ ...S.ghost, marginTop: 14 }}>Reset Checklist</button>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MORE MENU
// ═══════════════════════════════════════════════════════════════════════════════
const MoreMenu = ({ setPage }) => {
  const items = [
    { icon: "📋", label: "Quote Generator", sub: "Build & send professional quotes", page: "quote" },
    { icon: "👤", label: "Client History", sub: "All your clients & jobs", page: "clients" },
    { icon: "⭐", label: "Reviews & Ratings", sub: "Client feedback for Michael", page: "reviews" },
    { icon: "🔗", label: "Refer & Earn", sub: "Share app, friends get discount", page: "referral" },
    { icon: "🛡️", label: "Insurance Tracker", sub: "Track policy expiry dates", page: "insurance" },
    { icon: "🛞", label: "Parts & Tyre Shops", sub: "Trusted shops in Nairobi", page: "parts" },
    { icon: "🚦", label: "Road Safety & Laws", sub: "Kenya traffic rules & fines", page: "safety" },
    { icon: "⛽", label: "Fuel Prices", sub: "EPRA prices + fill calculator", page: "fuel" },
    { icon: "🚗", label: "My Cars", sub: "Manage your vehicles", page: "cars" },
    { icon: "🚐", label: "PSV Tools", sub: "Matatu & taxi checklists", page: "psv" },
    { icon: "💰", label: "Repair Costs", sub: "Kenya price guide", page: "costs" },
  ];
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>More Features</h2>
      <p style={S.sub}>Everything Car Care KE has to offer.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map(item => (
          <button key={item.page} onClick={() => setPage(item.page)} style={{ ...S.card, display: "flex", alignItems: "center", gap: 14, cursor: "pointer", textAlign: "left", marginBottom: 0 }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#f9731640"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#1e1e1e"}>
            <span style={{ fontSize: 26, width: 44, height: 44, background: "#f9731610", border: "1px solid #f9731620", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</span>
            <div style={{ flex: 1 }}>
              <p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{item.label}</p>
              <p style={{ color: "#444", fontSize: 11, fontFamily: "'DM Mono', monospace" }}>{item.sub}</p>
            </div>
            <span style={{ color: "#333", fontSize: 16 }}>›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const CostsPage = () => {
  const costs = [{ s: "Oil Change", r: "3,000 – 7,000", i: "🛢️", f: "Every 5,000 km" }, { s: "Brake Pads", r: "4,000 – 12,000", i: "🔴", f: "Every 30,000–50,000 km" }, { s: "Battery", r: "8,000 – 20,000", i: "🔋", f: "Every 3–5 years" }, { s: "Diagnostics", r: "2,000 – 5,000", i: "🔧", f: "As needed" }, { s: "Air Filter", r: "1,500 – 4,000", i: "💨", f: "Every 15,000 km" }, { s: "Spark Plugs", r: "2,500 – 8,000", i: "⚡", f: "Every 30,000 km" }, { s: "Wheel Alignment", r: "2,000 – 5,000", i: "⚙️", f: "Every 10,000 km" }, { s: "Full Service", r: "15,000 – 40,000", i: "🚗", f: "Every 20,000 km" }];
  return (
    <div style={{ padding: "24px 16px 100px" }}>
      <h2 style={S.h1}>Repair Costs</h2>
      <p style={S.sub}>Kenya-based estimates. Always get a quote from Michael.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{costs.map((c, i) => (
        <div key={i} style={{ ...S.card, display: "flex", alignItems: "center", gap: 14, marginBottom: 0 }}>
          <span style={{ fontSize: 28, flexShrink: 0 }}>{c.i}</span>
          <div style={{ flex: 1 }}><p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{c.s}</p><p style={{ color: "#333", fontSize: 10, fontFamily: "'DM Mono', monospace" }}>{c.f}</p></div>
          <p style={{ color: "#f97316", fontSize: 12, fontFamily: "'DM Mono', monospace", fontWeight: 700 }}>KES {c.r}</p>
        </div>
      ))}</div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// NAV + APP ROOT
// ═══════════════════════════════════════════════════════════════════════════════
const Nav = ({ page, setPage }) => {
  const tabs = [{ id: "dashboard", icon: "🏠", label: "Home" }, { id: "warnings", icon: "⚠️", label: "Lights" }, { id: "ai", icon: "🤖", label: "AI" }, { id: "emergency", icon: "🆘", label: "Help" }, { id: "more", icon: "☰", label: "More" }];
  return (
    <nav style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#080808", borderTop: "1px solid #1a1a1a", display: "flex", justifyContent: "space-around", alignItems: "center", padding: "8px 4px", zIndex: 50 }}>
      {tabs.map(tab => (
        <button key={tab.id} onClick={() => setPage(tab.id)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "4px 12px", borderRadius: 12, background: page === tab.id ? "#f9731615" : "transparent", border: "none", cursor: "pointer" }}>
          <span style={{ fontSize: 20 }}>{tab.icon}</span>
          <span style={{ fontSize: 9, fontFamily: "'DM Mono', monospace", color: page === tab.id ? "#f97316" : "#444" }}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default function App() {
  const [user, setUser] = useLS("ccc_user", null);
  const [page, setPage] = useState("dashboard");
  const [cars, setCars] = useLS("ccc_cars", []);
  const [activeCar, setActiveCar] = useLS("ccc_active_car", null);
  const [serviceLog, setServiceLog] = useLS("ccc_services", []);
  const [clientHistory, setClientHistory] = useLS("ccc_clients", []);
  const [reviews, setReviews] = useLS("ccc_reviews", []);
  const [insurance, setInsurance] = useLS("ccc_insurance", []);

  if (!user) return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#080808" }}>
      <AuthPage onLogin={u => setUser(u)} />
    </div>
  );

  const pages = {
    dashboard: <Dashboard user={user} cars={cars} activeCar={activeCar} serviceLog={serviceLog} setPage={setPage} insurance={insurance} />,
    warnings: <WarningsPage />,
    ai: <AIDiagPage cars={cars} activeCar={activeCar} />,
    log: <ServiceLogPage serviceLog={serviceLog} setServiceLog={setServiceLog} cars={cars} activeCar={activeCar} setCars={setCars} />,
    costs: <CostsPage />,
    fuel: <FuelPage />,
    emergency: <EmergencyPage cars={cars} activeCar={activeCar} />,
    cars: <CarsPage cars={cars} setCars={setCars} activeCar={activeCar} setActiveCar={setActiveCar} />,
    psv: <PSVPage />,
    quote: <QuotePage cars={cars} activeCar={activeCar} clientHistory={clientHistory} setClientHistory={setClientHistory} />,
    clients: <ClientHistoryPage clientHistory={clientHistory} setClientHistory={setClientHistory} />,
    referral: <ReferralPage user={user} />,
    reviews: <ReviewsPage reviews={reviews} setReviews={setReviews} user={user} />,
    insurance: <InsurancePage cars={cars} insurance={insurance} setInsurance={setInsurance} />,
    safety: <RoadSafetyPage />,
    parts: <PartsPage />,
    more: <MoreMenu setPage={setPage} />,
  };

  return (
    <div style={{ maxWidth: 430, margin: "0 auto", minHeight: "100vh", background: "#080808", position: "relative" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Mono:wght@400;500&display=swap'); *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent} input,select,button{-webkit-appearance:none;font-family:inherit} select option{background:#141414;color:#fff} ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-thumb{background:#222;border-radius:4px}`}</style>

      {/* Top Bar */}
      <div style={{ position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: "#080808cc", backdropFilter: "blur(12px)", borderBottom: "1px solid #181818", zIndex: 40, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px" }}>
        <button onClick={() => setPage("dashboard")} style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", border: "none", cursor: "pointer" }}>
          <span style={{ fontSize: 18 }}>🚗</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: "#f97316" }}>Car Care KE</span>
        </button>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <button onClick={() => setPage("log")} style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "#888", background: "transparent", border: "1px solid #222", borderRadius: 8, padding: "3px 8px", cursor: "pointer" }}>🚗 {cars.length}</button>
          <button onClick={() => { setUser(null); localStorage.removeItem("ccc_user"); }} style={{ fontSize: 10, color: "#333", fontFamily: "'DM Mono', monospace", background: "transparent", border: "none", cursor: "pointer" }}>Logout</button>
        </div>
      </div>

      <div style={{ paddingTop: 50 }}>{pages[page] || pages.dashboard}</div>
      <Nav page={page} setPage={setPage} />
    </div>
  );
}