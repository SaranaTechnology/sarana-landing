import Link from "next/link";

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">&#10003;</div>
        <h1 className="text-2xl font-bold mb-3">Pendaftaran Berhasil!</h1>
        <p className="text-gray-500 mb-6">
          Akun Cloudfix kamu sudah aktif dengan trial gratis 14 hari.
          Cek email untuk detail login.
        </p>
        <div className="space-y-3">
          <Link
            href="/login"
            className="block bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Masuk ke Dashboard
          </Link>
          <Link
            href="/"
            className="block text-gray-500 text-sm hover:text-gray-700"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
