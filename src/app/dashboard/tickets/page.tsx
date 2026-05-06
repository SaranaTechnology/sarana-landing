"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.internal-go.saranatechnology.com";

interface Ticket {
  id: number;
  subject: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
}

interface Reply {
  id: number;
  message: string;
  is_admin: boolean;
  created_at: string;
}

const categoryLabels: Record<string, string> = {
  bug: "Bug / Error",
  feature_request: "Request Fitur",
  question: "Pertanyaan",
  other: "Lainnya",
};

const statusColors: Record<string, string> = {
  open: "bg-blue-100 text-blue-700",
  in_progress: "bg-yellow-100 text-yellow-700",
  resolved: "bg-green-100 text-green-700",
  closed: "bg-gray-100 text-gray-500",
};

export default function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [replyText, setReplyText] = useState("");
  const [form, setForm] = useState({ subject: "", description: "", category: "bug", priority: "medium" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => { fetchTickets(); }, []);

  const getHeaders = () => {
    const token = localStorage.getItem("token");
    return { "Content-Type": "application/json", Authorization: `Bearer ${token}` };
  };

  const getClientID = () => {
    try { return JSON.parse(localStorage.getItem("client") || "{}").id; } catch { return 0; }
  };

  const fetchTickets = async () => {
    try {
      const res = await fetch(`${API_URL}/api/v1/tickets?client_id=${getClientID()}&per_page=50`, { headers: getHeaders() });
      const data = await res.json();
      if (data.success) setTickets(data.data || []);
    } catch { /* */ }
    setLoading(false);
  };

  const createTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/v1/tickets`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ ...form, client_id: getClientID() }),
      });
      const data = await res.json();
      if (data.success) {
        setShowForm(false);
        setForm({ subject: "", description: "", category: "bug", priority: "medium" });
        fetchTickets();
      }
    } catch { /* */ }
    setSubmitting(false);
  };

  const openTicket = async (t: Ticket) => {
    setSelectedTicket(t);
    try {
      const res = await fetch(`${API_URL}/api/v1/tickets/${t.id}`, { headers: getHeaders() });
      const data = await res.json();
      if (data.success) setReplies(data.data.replies || []);
    } catch { /* */ }
  };

  const sendReply = async () => {
    if (!replyText.trim() || !selectedTicket) return;
    try {
      await fetch(`${API_URL}/api/v1/tickets/${selectedTicket.id}/reply`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ client_id: getClientID(), is_admin: false, message: replyText }),
      });
      setReplyText("");
      openTicket(selectedTicket);
    } catch { /* */ }
  };

  if (selectedTicket) {
    return (
      <div>
        <button onClick={() => setSelectedTicket(null)} className="text-sm text-blue-600 mb-4 hover:underline">
          &larr; Kembali ke daftar tiket
        </button>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="font-bold text-lg">{selectedTicket.subject}</h2>
              <div className="flex gap-2 mt-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[selectedTicket.status] || "bg-gray-100"}`}>
                  {selectedTicket.status}
                </span>
                <span className="text-xs text-gray-400">{categoryLabels[selectedTicket.category] || selectedTicket.category}</span>
              </div>
            </div>
            <span className="text-xs text-gray-400">
              {new Date(selectedTicket.created_at).toLocaleDateString("id-ID")}
            </span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {replies.map((r) => (
            <div key={r.id} className={`p-4 rounded-xl text-sm ${r.is_admin ? "bg-blue-50 border border-blue-100" : "bg-gray-50 border border-gray-100"}`}>
              <div className="flex justify-between mb-1">
                <span className={`text-xs font-medium ${r.is_admin ? "text-blue-600" : "text-gray-500"}`}>
                  {r.is_admin ? "Tim Sarana" : "Kamu"}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(r.created_at).toLocaleString("id-ID")}
                </span>
              </div>
              <p className="text-gray-700">{r.message}</p>
            </div>
          ))}
          {replies.length === 0 && <p className="text-sm text-gray-400">Belum ada balasan.</p>}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Tulis balasan..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendReply()}
          />
          <button
            onClick={sendReply}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
          >
            Kirim
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tiket Bantuan</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
        >
          {showForm ? "Batal" : "+ Buat Tiket"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={createTicket} className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Judul *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Tidak bisa login ke POS"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="bug">Bug / Error</option>
                <option value="feature_request">Request Fitur</option>
                <option value="question">Pertanyaan</option>
                <option value="other">Lainnya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prioritas</label>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value })}
              >
                <option value="low">Rendah</option>
                <option value="medium">Sedang</option>
                <option value="high">Tinggi</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi *</label>
            <textarea
              required
              rows={4}
              placeholder="Jelaskan masalah atau kebutuhan kamu secara detail..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {submitting ? "Mengirim..." : "Kirim Tiket"}
          </button>
        </form>
      )}

      {loading ? (
        <div className="text-gray-400">Memuat...</div>
      ) : tickets.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400">
          Belum ada tiket. Klik &ldquo;+ Buat Tiket&rdquo; untuk mengajukan keluhan atau request fitur.
        </div>
      ) : (
        <div className="space-y-3">
          {tickets.map((t) => (
            <button
              key={t.id}
              onClick={() => openTicket(t)}
              className="w-full bg-white rounded-xl border border-gray-100 p-4 text-left hover:border-blue-200 transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{t.subject}</div>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[t.status] || "bg-gray-100"}`}>
                      {t.status}
                    </span>
                    <span className="text-xs text-gray-400">{categoryLabels[t.category] || t.category}</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {new Date(t.created_at).toLocaleDateString("id-ID")}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
