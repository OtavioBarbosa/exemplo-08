# Demo: Next.js + Better Auth + GitHub + SQLite

Demo mínimo de login com GitHub usando [Better Auth](https://better-auth.com), Next.js (App Router), SQLite (`better-sqlite3`) e Tailwind CSS.

## 1. Criar o OAuth App no GitHub

1. Acesse **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**
2. Preencha:
   - **Homepage URL:** `http://localhost:3000`
   - **Authorization callback URL:** `http://localhost:3000/api/auth/callback/github`
3. Copie o **Client ID** e gere um **Client Secret**.

## 2. Configurar variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
cp .env.example .env.local
```

```env
BETTER_AUTH_SECRET=   # gere com: openssl rand -base64 32
BETTER_AUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=seu-client-id
GITHUB_CLIENT_SECRET=seu-client-secret
```

## 3. Rodar

```bash
npm install
npm install-scripts approve better-sqlite3   # só se o npm avisar sobre install scripts
npx @better-auth/cli migrate                 # cria as tabelas em ./better-auth.sqlite
npm run dev                                  # http://localhost:3000
```

## Como funciona

| Arquivo | Função |
| --- | --- |
| `lib/auth.ts` | Instância do Better Auth (SQLite + provider GitHub) |
| `lib/auth-client.ts` | Client React (`signIn.social`, `signOut`) |
| `app/api/auth/[...all]/route.ts` | Rotas do Better Auth (`/api/auth/*`) |
| `app/page.tsx` | Home: "Logado como …" ou "Você não está logado" |
| `app/login/page.tsx` | Botão "Entrar com GitHub" |
| `components/auth-buttons.tsx` | Botões de entrar/sair (client components) |

Fluxo: **Entrar com GitHub** → OAuth no GitHub → volta para `/` com a sessão salva no SQLite → **Sair** encerra a sessão.
