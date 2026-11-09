import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { SignInButton } from "@/components/auth-buttons";

export default async function LoginPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session) redirect("/");

  return (
    <div className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900/70 p-8 text-center shadow-2xl backdrop-blur">
      <h1 className="mb-2 text-3xl font-bold">Login / Cadastro</h1>
      <p className="mb-8 text-slate-400">Use sua conta do GitHub para continuar.</p>
      <SignInButton />
      <Link href="/" className="mt-6 inline-block text-sm text-slate-400 hover:text-slate-200">
        ← Voltar para Home
      </Link>
    </div>
  );
}
