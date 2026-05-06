import Link from "next/link";

const features = [
  {
    title: "Point of Sale",
    desc: "Kasir cepat, QRIS, cetak struk. Terima pembayaran dari mana saja.",
    icon: "🛒",
  },
  {
    title: "Manajemen Inventori",
    desc: "Stok real-time, reorder otomatis, HPP per menu. Tahu margin tiap item.",
    icon: "📦",
  },
  {
    title: "Keuangan & Akuntansi",
    desc: "Laporan laba rugi, neraca, arus kas. Auto-journal dari payroll & penjualan.",
    icon: "📊",
  },
  {
    title: "HRD & Karyawan",
    desc: "Absensi face recognition, cuti, lembur, kasbon, penggajian otomatis.",
    icon: "👥",
  },
  {
    title: "Kitchen Display",
    desc: "Pesanan langsung masuk ke dapur. Status real-time, estimasi waktu.",
    icon: "🍳",
  },
  {
    title: "Loyalty Pelanggan",
    desc: "Poin, tier member, referral, birthday reward. Bikin pelanggan balik lagi.",
    icon: "🎁",
  },
];

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    period: "14 hari",
    desc: "Coba semua fitur tanpa bayar",
    features: [
      "1 outlet",
      "1 kasir",
      "POS + Kitchen Display",
      "Inventori dasar",
      "Laporan harian",
    ],
    cta: "Coba Gratis",
    href: "/register",
    popular: false,
  },
  {
    name: "Growth",
    price: "Rp 299.000",
    period: "/bulan",
    desc: "Untuk usaha yang mulai berkembang",
    features: [
      "1 outlet",
      "3 kasir",
      "Semua fitur Starter",
      "HRD + Payroll",
      "Akuntansi lengkap",
      "Customer loyalty",
    ],
    cta: "Mulai Sekarang",
    href: "/register?plan=growth",
    popular: true,
  },
  {
    name: "Pro",
    price: "Rp 599.000",
    period: "/bulan",
    desc: "Multi-outlet & fitur enterprise",
    features: [
      "Hingga 5 outlet",
      "Kasir unlimited",
      "Semua fitur Growth",
      "WhatsApp notifikasi",
      "Multi-outlet management",
      "Prediksi stok AI",
      "API integration",
      "Priority support",
    ],
    cta: "Hubungi Kami",
    href: "/register?plan=pro",
    popular: false,
  },
];

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">Cloudfix</span>
            <span className="text-xs text-gray-400">by Sarana Technology</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fitur" className="text-gray-600 hover:text-gray-900">
              Fitur
            </a>
            <a href="#harga" className="text-gray-600 hover:text-gray-900">
              Harga
            </a>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Masuk
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Coba Gratis
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            Gratis 14 hari, tanpa kartu kredit
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Kelola Usaha FnB Kamu
            <br />
            <span className="text-blue-600">Dalam Satu Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            POS, inventori, keuangan, karyawan, dan loyalty pelanggan. Semua
            terintegrasi. Dibuat khusus untuk restoran, kafe, dan cloud kitchen
            Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition font-medium"
            >
              Coba Gratis 14 Hari
            </Link>
            <a
              href="#fitur"
              className="border border-gray-200 text-gray-700 text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition font-medium"
            >
              Lihat Fitur
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Dipercaya 50+ UKM FnB di Indonesia
          </p>
        </div>
      </section>

      <section className="py-4 border-y border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-xs text-gray-500">Modul Terintegrasi</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">5</div>
            <div className="text-xs text-gray-500">Aplikasi (Admin, POS, Dapur, Staff, Customer)</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">QRIS</div>
            <div className="text-xs text-gray-500">Pembayaran Digital</div>
          </div>
        </div>
      </section>

      <section id="fitur" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Semua yang Kamu Butuhkan
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Dari kasir sampai laporan keuangan, semua ada di Cloudfix.
              Terintegrasi, real-time, bisa diakses dari HP.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tahu Margin Tiap Menu Kamu
          </h2>
          <p className="text-blue-100 text-lg mb-2">
            Cloudfix menghitung HPP (Harga Pokok Penjualan) otomatis dari resep
            + harga bahan. Kamu langsung tahu menu mana yang paling untung.
          </p>
          <p className="text-blue-200 text-sm">
            Fitur yang tidak ada di kompetitor.
          </p>
        </div>
      </section>

      <section id="harga" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Harga Terjangkau untuk UKM
            </h2>
            <p className="text-gray-500">
              Mulai gratis, upgrade kapan saja. Tanpa biaya tersembunyi.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border-2 bg-white ${
                  plan.popular
                    ? "border-blue-600 shadow-lg scale-105"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Paling Populer
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm"> {plan.period}</span>
                </div>
                <Link
                  href={plan.href}
                  className={`block text-center py-3 rounded-xl font-medium transition mb-6 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Link>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-500 mt-0.5">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Kelola Usaha Lebih Efisien?
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Daftar sekarang dan langsung pakai. Setup dalam 5 menit,
            tanpa perlu training.
          </p>
          <Link
            href="/register"
            className="inline-block bg-blue-600 text-white text-lg px-10 py-4 rounded-xl hover:bg-blue-700 transition font-medium"
          >
            Coba Gratis 14 Hari
          </Link>
          <p className="mt-3 text-sm text-gray-400">
            Tidak perlu kartu kredit. Bisa cancel kapan saja.
          </p>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold text-blue-600 mb-2">
              Cloudfix
            </div>
            <p className="text-sm text-gray-400">
              ERP lengkap untuk UKM FnB Indonesia. Oleh Sarana Technology.
            </p>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Produk</div>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#fitur" className="hover:text-gray-900">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-gray-900">
                  Harga
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Bantuan</div>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/login" className="hover:text-gray-900">
                  Masuk
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-gray-900">
                  Daftar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Kontak</div>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>info@saranatechnology.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-100 text-center text-xs text-gray-400">
          &copy; 2026 Sarana Technology. Hak cipta dilindungi.
        </div>
      </footer>
    </>
  );
}
