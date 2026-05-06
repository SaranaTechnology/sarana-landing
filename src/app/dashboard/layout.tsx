"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/subscription", label: "Langganan" },
  { href: "/dashboard/tickets", label: "Tiket Bantuan" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [client, setClient] = useState<{ nama?: string; email?: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const c = JSON.parse(localStorage.getItem("client") || "{}");
      setClient(c);
    } catch {
      router.push("/login");
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("client");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-lg font-bold text-gray-900">
              Sarana <span className="font-light text-blue-600">Technology</span>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm transition ${
                    pathname === item.href
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:block">{client?.nama || client?.email}</span>
            <button onClick={logout} className="text-sm text-red-500 hover:text-red-700">
              Keluar
            </button>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">{children}</main>
    </div>
  );
}
