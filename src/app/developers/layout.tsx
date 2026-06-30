import Link from "next/link";

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full bg-white">
      <header className="sticky top-0 z-10 border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-semibold text-gray-900">
            Sarana Technology
          </Link>
          <a
            href="https://api.internal-go.saranatechnology.com/api/v2/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Referensi API (Swagger)
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">{children}</main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-gray-500">
          © Sarana Technology — butuh akses developer?{" "}
          <a
            href="mailto:sales@saranatechnology.com"
            className="text-indigo-600 hover:underline"
          >
            Hubungi kami
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
