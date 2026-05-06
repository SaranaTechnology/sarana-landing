"use client";

import Link from "next/link";
import { useState } from "react";

const industriOptions = [
  "FnB (Restoran, Kafe, Catering)",
  "Retail & Toko",
  "Pendidikan",
  "Kesehatan",
  "Jasa & Konsultan",
  "Manufaktur",
  "Lainnya",
];

const budgetOptions = [
  "Belum tahu / Mau konsultasi dulu",
  "< Rp 5 juta",
  "Rp 5 - 15 juta",
  "Rp 15 - 50 juta",
  "Rp 50 - 100 juta",
  "> Rp 100 juta",
];

const layananOptions = [
  "Konsultasi Digitalisasi",
  "Pembuatan Aplikasi Web",
  "Pembuatan Aplikasi Mobile",
  "Sistem ERP / POS",
  "Integrasi Payment Gateway",
  "AI & Machine Learning",
  "Maintenance & Support",
  "Lainnya",
];

export default function ProposalPage() {
  const [form, setForm] = useState({
    nama: "",
    perusahaan: "",
    email: "",
    whatsapp: "",
    industri: "",
    layanan: [] as string[],
    budget: "",
    deskripsi: "",
    masalah: "",
    timeline: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleLayanan = (item: string) => {
    setForm((prev) => ({
      ...prev,
      layanan: prev.layanan.includes(item)
        ? prev.layanan.filter((l) => l !== item)
        : [...prev.layanan, item],
    }));
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.internal-go.saranatechnology.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(`${API_URL}/api/v1/proposals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: form.nama,
          perusahaan: form.perusahaan,
          email: form.email,
          whatsapp: form.whatsapp,
          industri: form.industri,
          layanan: form.layanan.join(", "),
          budget: form.budget,
          deskripsi: form.deskripsi,
          masalah: form.masalah,
          timeline: form.timeline,
        }),
      });
    } catch {
      // API save failed, continue to WhatsApp anyway
    }

    const waText = [
      `*Pengajuan Proposal Bisnis*`,
      ``,
      `Nama: ${form.nama}`,
      `Perusahaan: ${form.perusahaan}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Industri: ${form.industri}`,
      `Layanan: ${form.layanan.join(", ")}`,
      `Budget: ${form.budget}`,
      `Timeline: ${form.timeline}`,
      ``,
      `*Deskripsi Bisnis:*`,
      form.deskripsi,
      ``,
      `*Masalah / Kebutuhan:*`,
      form.masalah,
    ].join("\n");

    window.open(
      `https://wa.me/6285974118829?text=${encodeURIComponent(waText)}`,
      "_blank"
    );

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <nav className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Sarana <span className="font-light text-blue-600">Technology</span>
            </Link>
          </div>
        </nav>
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="text-5xl mb-6">&#128640;</div>
            <h1 className="text-2xl font-bold mb-3">Proposal Terkirim!</h1>
            <p className="text-gray-500 mb-6">
              Tim kami akan menganalisa kebutuhan bisnis kamu dan menghubungi
              dalam 1x24 jam kerja. Kami akan kasih rekomendasi jujur — termasuk
              kalau ternyata bisnis kamu belum perlu aplikasi.
            </p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-medium"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Sarana <span className="font-light text-blue-600">Technology</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
            Kembali
          </Link>
        </div>
      </nav>

      <div className="flex-1 px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Pengajuan Proposal Bisnis
            </h1>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Ceritakan bisnis dan kebutuhan kamu. Tim kami akan analisa dan
              berikan rekomendasi solusi terbaik — gratis, tanpa commitment.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Perusahaan / Usaha *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={form.perusahaan}
                  onChange={(e) =>
                    setForm({ ...form, perusahaan: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  No. WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="08xxxxxxxxxx"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industri *
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                value={form.industri}
                onChange={(e) => setForm({ ...form, industri: e.target.value })}
              >
                <option value="">Pilih industri</option>
                {industriOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Layanan yang Dibutuhkan (bisa pilih lebih dari satu)
              </label>
              <div className="flex flex-wrap gap-2">
                {layananOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleLayanan(opt)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                      form.layanan.includes(opt)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-600 border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimasi Budget
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="">Pilih range budget</option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ceritakan Bisnis Kamu *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Usaha apa, berapa lama berjalan, berapa tim, dll."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                value={form.deskripsi}
                onChange={(e) =>
                  setForm({ ...form, deskripsi: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Masalah / Kebutuhan yang Ingin Diselesaikan *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Apa yang jadi pain point? Proses apa yang ingin didigitalkan?"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                value={form.masalah}
                onChange={(e) => setForm({ ...form, masalah: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Target Timeline
              </label>
              <input
                type="text"
                placeholder="Contoh: 1 bulan, 3 bulan, secepatnya"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                value={form.timeline}
                onChange={(e) =>
                  setForm({ ...form, timeline: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Proposal via WhatsApp"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Proposal akan dikirim ke WhatsApp tim kami. Kami akan merespons
              dalam 1x24 jam kerja.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
