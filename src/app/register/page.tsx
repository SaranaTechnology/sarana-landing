"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.internal-go.saranatechnology.com";

function RegisterForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planParam = searchParams.get("plan") || "starter";

  const [form, setForm] = useState({
    nama_usaha: "",
    nama_pemilik: "",
    email: "",
    no_telp: "",
    password: "",
    password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.password_confirmation) {
      setError("Password tidak cocok");
      return;
    }
    if (form.password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/v1/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: form.nama_usaha,
          email: form.email,
          no_telp_pic: form.no_telp,
          pic: form.nama_pemilik,
          password: form.password,
          type: "ukm_fnb",
          plan: planParam,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Pendaftaran gagal. Silakan coba lagi.");
        return;
      }

      router.push("/register/success");
    } catch {
      setError("Gagal terhubung ke server. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const planLabels: Record<string, string> = {
    starter: "Starter (Gratis 14 Hari)",
    growth: "Growth (Rp 299.000/bulan)",
    pro: "Pro (Rp 599.000/bulan)",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">Cloudfix</span>
          </Link>
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900">
            Sudah punya akun? Masuk
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Daftar Cloudfix</h1>
            <p className="text-gray-500 text-sm">
              Paket: <span className="font-medium text-blue-600">{planLabels[planParam] || planParam}</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Usaha
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Warung Makan Sederhana"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.nama_usaha}
                onChange={(e) => setForm({ ...form, nama_usaha: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nama Pemilik
              </label>
              <input
                type="text"
                required
                placeholder="Nama lengkap"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.nama_pemilik}
                onChange={(e) => setForm({ ...form, nama_pemilik: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="email@usahakamu.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                No. WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="08xxxxxxxxxx"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.no_telp}
                onChange={(e) => setForm({ ...form, no_telp: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                placeholder="Minimal 6 karakter"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Konfirmasi Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                placeholder="Ulangi password"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={form.password_confirmation}
                onChange={(e) => setForm({ ...form, password_confirmation: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Mendaftarkan..." : "Daftar Sekarang"}
            </button>

            <p className="text-xs text-gray-400 text-center">
              Dengan mendaftar, kamu menyetujui Syarat & Ketentuan kami.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
