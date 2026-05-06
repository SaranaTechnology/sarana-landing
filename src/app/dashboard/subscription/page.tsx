"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.internal-go.saranatechnology.com";

const plans = [
  { id: "starter", name: "Starter", price: 0, period: "14 hari trial", features: ["1 outlet", "1 kasir", "POS + Kitchen Display", "Inventori dasar"] },
  { id: "growth", name: "Growth", price: 299000, period: "/bulan", features: ["1 outlet", "3 kasir", "HRD + Payroll", "Akuntansi lengkap", "Customer loyalty"] },
  { id: "pro", name: "Pro", price: 599000, period: "/bulan", features: ["5 outlet", "Kasir unlimited", "WhatsApp notifikasi", "Multi-outlet", "Prediksi stok AI", "Priority support"] },
];

interface Subscription {
  id: number;
  status: string;
  plan_id: number;
  start_date: string;
  end_date: string;
}

export default function SubscriptionPage() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState("");

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const token = localStorage.getItem("token");
      const client = JSON.parse(localStorage.getItem("client") || "{}");
      const res = await fetch(`${API_URL}/api/v1/clients/${client.id}/subscription`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success && data.data) setSubscription(data.data);
    } catch { /* no subscription */ }
    setLoading(false);
  };

  const handlePayment = async (planName: string, amount: number) => {
    setPaying(true);
    try {
      const token = localStorage.getItem("token");
      const client = JSON.parse(localStorage.getItem("client") || "{}");
      const res = await fetch(`${API_URL}/api/v1/payments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          client_id: client.id,
          amount,
          payment_type: "subscription",
          channel_code: "QRIS",
          description: `Langganan Cloudfix ${planName}`,
        }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        const url = data.data.checkout_url || data.data.invoice_url || data.data.qr_string;
        if (url) {
          setPaymentUrl(url);
          if (url.startsWith("http")) window.open(url, "_blank");
        }
      }
    } catch { /* error */ }
    setPaying(false);
  };

  const daysRemaining = subscription?.end_date
    ? Math.max(0, Math.ceil((new Date(subscription.end_date).getTime() - Date.now()) / 86400000))
    : 0;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Langganan & Pembayaran</h1>

      {loading ? (
        <div className="text-gray-400">Memuat...</div>
      ) : subscription ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-500">Status Langganan</div>
              <div className={`text-lg font-bold ${subscription.status === "active" ? "text-green-600" : "text-yellow-600"}`}>
                {subscription.status === "active" ? "Aktif" : subscription.status}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Sisa Waktu</div>
              <div className="text-lg font-bold">{daysRemaining} hari</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            Berlaku hingga: {new Date(subscription.end_date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 text-sm text-yellow-800">
          Belum ada langganan aktif. Pilih plan di bawah untuk memulai.
        </div>
      )}

      {paymentUrl && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
          Pembayaran sedang diproses. {paymentUrl.startsWith("http") ? (
            <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium">Buka halaman pembayaran</a>
          ) : (
            <span>Scan QR code untuk membayar.</span>
          )}
        </div>
      )}

      <h2 className="text-lg font-semibold mb-4">Pilih Plan</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                {plan.price === 0 ? "Gratis" : `Rp ${plan.price.toLocaleString("id-ID")}`}
              </span>
              <span className="text-gray-400 text-sm"> {plan.period}</span>
            </div>
            <ul className="space-y-1 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="text-sm text-gray-500 flex gap-2">
                  <span className="text-green-500">&#10003;</span>{f}
                </li>
              ))}
            </ul>
            {plan.price > 0 ? (
              <button
                onClick={() => handlePayment(plan.name, plan.price)}
                disabled={paying}
                className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
              >
                {paying ? "Memproses..." : "Bayar Sekarang"}
              </button>
            ) : (
              <div className="w-full bg-gray-100 text-gray-500 py-2.5 rounded-xl text-sm font-medium text-center">
                Trial Aktif
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
