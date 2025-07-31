// vite.config.ts (do projeto Amberstone)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Se você não usa o plugin viteSourceLocator, pode remover a linha abaixo:
// import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";

// https://vitejs.dev/config/
export default defineConfig({ // <<< Note que removemos '({ mode }) =>'
  plugins: [
    // Mantenha viteSourceLocator se for usar, caso contrário remova:
    // viteSourceLocator({
    //  prefix: "mgx",
    // }),
    react(),
  ],
  // >>> ADICIONE ESTA LINHA CRÍTICA <<<
  base: '/amberstone/', // Isso define a base para ambos dev e build

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Se houver qualquer outro bloco 'server' ou 'build' que possa estar conflitante,
  // ou se você não precisar de configurações específicas para o servidor de dev, pode remover.
  // Exemplo de bloco server que NÃO deve conflitar com 'base':
  // server: {
  //   port: 5173,
  //   host: true,
  // }
});