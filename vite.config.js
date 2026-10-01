import { existsSync } from 'node:fs';
import { join, normalize } from 'node:path';
import { defineConfig } from 'vite';

const TIENE_EXTENSION = /\.[a-z0-9]+$/i;

function redirigirDirectorios() {
  return {
    name: 'redirigir-directorios',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || req.method !== 'GET') return next();

        const [ruta] = req.url.split('?');
        if (ruta === '/' || ruta.endsWith('/') || TIENE_EXTENSION.test(ruta)) return next();

        try {
          const destino = join(process.cwd(), normalize(decodeURIComponent(ruta)));
          if (destino.startsWith(process.cwd()) && existsSync(join(destino, 'index.html'))) {
            res.statusCode = 301;
            res.setHeader('Location', `${ruta}/`);
            res.end();
            return;
          }
        } catch {
          return next();
        }

        return next();
      });
    },
  };
}

export default defineConfig({
  appType: 'mpa',
  plugins: [redirigirDirectorios()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});