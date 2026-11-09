import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { SignOutButton } from "@/components/auth-buttons";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900/70 p-8 text-center shadow-2xl backdrop-blur">
      <h1 className="mb-6 text-4xl font-bold tracking-tight">Hello World 👋</h1>

      {session ? (
        <div className="space-y-6">
          {session.user.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={session.user.image}
              alt={session.user.name}
              className="mx-auto h-20 w-20 rounded-full ring-2 ring-emerald-400"
            />
          )}
          <p className="text-lg">
            Logado como{" "}
            <span className="font-semibold text-emerald-400">
              {session.user.name || session.user.email}
            </span>
          </p>
          <div className="rounded-lg bg-slate-800 p-4 text-left text-sm text-slate-300">
            <p><b>E-mail:</b> {session.user.email}</p>
            <p><b>Sessão expira:</b> {new Date(session.session.expiresAt).toLocaleString("pt-BR")}</p>
          </div>
          <SignOutButton />
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-lg text-slate-400">Você não está logado</p>
          <Link
            href="/login"
            className="block w-full rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Ir para Login
          </Link>
        </div>
      )}
    </div>
  );
}
