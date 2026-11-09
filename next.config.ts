import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // better-sqlite3 é um módulo nativo: deve rodar fora do bundle
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
