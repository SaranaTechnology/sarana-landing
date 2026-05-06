"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          href="/dashboard/subscription"
          className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition"
        >
          <div className="text-2xl mb-3">&#128179;</div>
          <h2 className="font-semibold mb-1">Langganan & Pembayaran</h2>
          <p className="text-sm text-gray-500">Lihat status langganan, pilih plan, dan bayar.</p>
        </Link>
        <Link
          href="/dashboard/tickets"
          className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition"
        >
          <div className="text-2xl mb-3">&#127915;</div>
          <h2 className="font-semibold mb-1">Tiket Bantuan</h2>
          <p className="text-sm text-gray-500">Ajukan keluhan, request fitur, atau tanya apa saja.</p>
        </Link>
      </div>
    </div>
  );
}
