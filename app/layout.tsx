import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Better Auth + GitHub",
  description: "Demo Next.js + Better Auth + GitHub + SQLite",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 antialiased">
        <main className="flex min-h-screen items-center justify-center p-4">{children}</main>
      </body>
    </html>
  );
}
