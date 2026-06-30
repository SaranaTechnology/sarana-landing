import Link from "next/link";

const portfolios = [
  {
    name: "Smart School",
    desc: "Platform manajemen sekolah: akademik, kesiswaan, guru, keuangan, perpustakaan. Digunakan oleh SD & SMP.",
    url: "https://smart.sch.id",
    tag: "Pendidikan",
  },
  {
    name: "SGP — Sekolah Guru Pendidikancerdas",
    desc: "LMS & program pelatihan guru. Manajemen fasilitator, kurikulum, dan sertifikasi.",
    url: "https://sgp.pendidikancerdas.com",
    tag: "Pendidikan",
  },
  {
    name: "DisabilitasKu",
    desc: "Platform aksesibilitas digital untuk penyandang disabilitas. AI penerjemah bahasa isyarat & bantuan penglihatan.",
    url: "https://disabilitasku.id",
    tag: "Sosial & AI",
  },
  {
    name: "KemakananKu",
    desc: "E-commerce yang fokus di makanan & kuliner Indonesia. Marketplace khusus produk FnB dari UKM lokal.",
    url: "#",
    tag: "Coming Soon",
  },
];

const cloudfixFeatures = [
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
    href: "/proposal",
    popular: false,
  },
];

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">Sarana</span>
            <span className="text-xl font-light text-blue-600">Technology</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#tentang" className="text-gray-600 hover:text-gray-900">Tentang</a>
            <a href="#cloudfix" className="text-gray-600 hover:text-gray-900">Cloudfix</a>
            <a href="#portofolio" className="text-gray-600 hover:text-gray-900">Portofolio</a>
            <a href="#harga" className="text-gray-600 hover:text-gray-900">Harga</a>
            <Link href="/login" className="text-gray-600 hover:text-gray-900">Masuk</Link>
            <Link
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Coba Gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero — Company */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            Digital Accelerator & IT Consultant
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Mempercepat Pertumbuhan
            <br />
            <span className="text-blue-600">Bisnis Digital Kamu</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Sarana Technology adalah mitra strategis yang membantu bisnis kamu
            bertransformasi digital — dari strategi, konsultasi, hingga produk SaaS siap pakai.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#cloudfix"
              className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl hover:bg-blue-700 transition font-medium"
            >
              Lihat Produk Kami
            </a>
            <a
              href="#portofolio"
              className="border border-gray-200 text-gray-700 text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition font-medium"
            >
              Portofolio
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl mb-3">&#9889;</div>
            <h3 className="font-semibold mb-2">Digital Accelerator</h3>
            <p className="text-sm text-gray-500">
              Bukan software house biasa. Kami mempercepat transformasi digital dengan produk siap pakai + konsultasi strategis.
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">&#128736;</div>
            <h3 className="font-semibold mb-2">IT Consultant</h3>
            <p className="text-sm text-gray-500">
              Konsultasi digitalisasi bisnis, arsitektur sistem, cloud infrastructure, dan strategi teknologi untuk scale.
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">&#128221;</div>
            <h3 className="font-semibold mb-2">Smart Agile Contract</h3>
            <p className="text-sm text-gray-500">
              Tidak ada yang saling tunggu. Revisi dan feedback di setiap sprint, bukan di akhir. Progres transparan, delivery cepat.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Digital Accelerator vs Software House</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Software House menjawab &ldquo;bagaimana cara membuatnya&rdquo;.
              Digital Accelerator menjawab &ldquo;apa yang harus dibuat, mengapa, dan bagaimana dampak bisnisnya&rdquo;.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
            {/* Software House */}
            <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Software House</div>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex gap-3">
                  <span className="text-gray-300 mt-0.5">&#9679;</span>
                  <div><span className="font-medium text-gray-600">Fokus:</span> Membangun software sesuai permintaan klien</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-300 mt-0.5">&#9679;</span>
                  <div><span className="font-medium text-gray-600">Peran:</span> Eksekutor teknis — terima brief, kerjakan, serahkan</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-300 mt-0.5">&#9679;</span>
                  <div><span className="font-medium text-gray-600">Output:</span> Aplikasi custom per klien</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-300 mt-0.5">&#9679;</span>
                  <div><span className="font-medium text-gray-600">Kontrak:</span> Waterfall — revisi di akhir, perubahan mahal</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-300 mt-0.5">&#9679;</span>
                  <div><span className="font-medium text-gray-600">Biaya:</span> Puluhan hingga ratusan juta, maintenance terpisah</div>
                </li>
              </ul>
            </div>

            {/* Digital Accelerator */}
            <div className="p-6 rounded-2xl border-2 border-blue-600 bg-blue-50/40">
              <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-4">Digital Accelerator — Sarana</div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-0.5">&#9889;</span>
                  <div><span className="font-medium text-gray-900">Fokus:</span> Strategi bisnis digital, efisiensi operasional, peningkatan revenue</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-0.5">&#9889;</span>
                  <div><span className="font-medium text-gray-900">Peran:</span> Mitra strategis — analisa kebutuhan, rekomendasi solusi, eksekusi</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-0.5">&#9889;</span>
                  <div><span className="font-medium text-gray-900">Output:</span> Produk SaaS siap pakai + konsultasi transformasi digital</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-0.5">&#9889;</span>
                  <div><span className="font-medium text-gray-900">Kontrak:</span> Smart Agile — delivery tiap sprint, feedback terus-menerus</div>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-0.5">&#9889;</span>
                  <div><span className="font-medium text-gray-900">Biaya:</span> Langganan terjangkau, update & maintenance termasuk</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-10 p-6 rounded-xl bg-gray-50 border border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Intinya:</span> Kami tidak hanya coding.
              Kami bantu identifikasi masalah bisnis, tentukan solusi yang tepat, dan eksekusi dengan pendekatan agile.
              Kalau ternyata bisnis kamu belum butuh aplikasi — kami akan jujur bilang dan kasih alternatif yang lebih sederhana.
            </p>
          </div>
        </div>
      </section>

      {/* Honest Consulting */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Konsultasi Jujur, Bukan Jualan</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Kami tidak langsung menyarankan bikin aplikasi. Kami bantu analisa dulu apakah bisnis kamu memang sudah butuh solusi digital, atau ada cara yang lebih sederhana.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
              <div className="text-green-400 font-semibold text-sm mb-3">Kamu Butuh Aplikasi Kalau:</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-green-400">&#10003;</span>Operasional harian sudah kompleks (multi staff, multi outlet)</li>
                <li className="flex gap-2"><span className="text-green-400">&#10003;</span>Sering salah hitung stok atau keuangan</li>
                <li className="flex gap-2"><span className="text-green-400">&#10003;</span>Butuh data real-time untuk keputusan bisnis</li>
                <li className="flex gap-2"><span className="text-green-400">&#10003;</span>Mau scale tapi proses manual jadi bottleneck</li>
                <li className="flex gap-2"><span className="text-green-400">&#10003;</span>Pelanggan mulai banyak dan perlu loyalty program</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
              <div className="text-yellow-400 font-semibold text-sm mb-3">Belum Perlu? Kami Sarankan Ini Dulu:</div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2"><span className="text-yellow-400">&#9679;</span>Baru mulai? Pakai <span className="text-white font-medium">Excel / Google Sheets</span> untuk catat penjualan</li>
                <li className="flex gap-2"><span className="text-yellow-400">&#9679;</span>Tim kecil? <span className="text-white font-medium">WhatsApp Group</span> cukup untuk koordinasi</li>
                <li className="flex gap-2"><span className="text-yellow-400">&#9679;</span>Keuangan simpel? <span className="text-white font-medium">Buku kas manual</span> atau app catatan</li>
                <li className="flex gap-2"><span className="text-yellow-400">&#9679;</span>Budget terbatas? Fokus ke <span className="text-white font-medium">marketing & produk</span> dulu</li>
                <li className="flex gap-2"><span className="text-yellow-400">&#9679;</span>Nanti kalau sudah kompleks, kami siap bantu migrasi ke SaaS</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Mulai dari yang sederhana. Kalau bisnis sudah kompleks dan tools manual jadi bottleneck, kami siap buatkan solusi SaaS yang pas. Konsultasi gratis, tanpa commitment.
            </p>
            <Link
              href="/proposal"
              className="inline-block border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-800 transition text-sm font-medium"
            >
              Ajukan Proposal Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Cloudfix Product Section */}
      <section id="cloudfix" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Produk Unggulan
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Cloudfix</span> — ERP untuk UKM FnB
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            POS, inventori, keuangan, karyawan, dan loyalty pelanggan dalam satu platform.
            Dibuat khusus untuk restoran, kafe, dan cloud kitchen Indonesia.
          </p>
          <div className="mt-6">
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition font-medium"
            >
              Coba Gratis 14 Hari
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cloudfixFeatures.map((f) => (
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
      </section>

      {/* HPP Differentiator */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Tahu Margin Tiap Menu Kamu</h2>
          <p className="text-blue-100 text-lg mb-2">
            Cloudfix menghitung HPP (Harga Pokok Penjualan) otomatis dari resep + harga bahan.
            Kamu langsung tahu menu mana yang paling untung.
          </p>
          <p className="text-blue-200 text-sm">Fitur yang tidak ada di kompetitor.</p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portofolio" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portofolio Kami</h2>
            <p className="text-gray-500">Solusi digital yang sudah berjalan dan berdampak.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolios.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition group"
              >
                <div className="inline-block bg-blue-50 text-blue-600 text-xs font-medium px-2 py-1 rounded-full mb-4">
                  {p.tag}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <span className="text-blue-600 text-sm font-medium">
                  Kunjungi &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="harga" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Harga Cloudfix</h2>
            <p className="text-gray-500">Mulai gratis, upgrade kapan saja. Tanpa biaya tersembunyi.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border-2 bg-white ${
                  plan.popular ? "border-blue-600 shadow-lg scale-105" : "border-gray-100"
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
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
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

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Transformasi Digital?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Mulai dengan Cloudfix untuk usaha FnB kamu, atau hubungi kami
            untuk konsultasi solusi digital lainnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 text-white text-lg px-10 py-4 rounded-xl hover:bg-blue-700 transition font-medium"
            >
              Coba Cloudfix Gratis
            </Link>
            <Link
              href="/proposal"
              className="border border-gray-600 text-gray-300 text-lg px-10 py-4 rounded-xl hover:bg-gray-800 transition font-medium"
            >
              Ajukan Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-bold text-gray-900 mb-1">Sarana Technology</div>
            <p className="text-sm text-gray-400">
              Digital Accelerator & IT Consultant. Membangun solusi digital untuk Indonesia.
            </p>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Produk</div>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#cloudfix" className="hover:text-gray-900">Cloudfix ERP</a></li>
              <li><a href="#harga" className="hover:text-gray-900">Harga</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Portofolio</div>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="https://smart.sch.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Smart School</a></li>
              <li><a href="https://sgp.pendidikancerdas.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">SGP</a></li>
              <li><a href="https://disabilitasku.id" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">DisabilitasKu</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3 text-sm">Kontak</div>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>WhatsApp: +62 859-7411-8829</li>
              <li>
                <Link href="/login" className="hover:text-gray-900">Masuk</Link>
                {" / "}
                <Link href="/register" className="hover:text-gray-900">Daftar</Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-gray-900">Dokumentasi Developer API</Link>
              </li>
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
