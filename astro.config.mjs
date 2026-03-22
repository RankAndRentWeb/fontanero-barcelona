import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from "@astrojs/vercel";

const allowedSitemapPaths = new Set([
  '/',
  '/servicios/',
  '/precios/',
  '/contacto/',
  '/aviso-legal/',
  '/politica-privacidad/',
  '/politica-cookies/',
  '/servicios/pladur-techos-valencia/',
  '/servicios/reforma-terraza-valencia/',
  '/servicios/reformas-banos-valencia/',
  '/servicios/reformas-chalets-valencia/',
  '/servicios/reformas-cocinas-valencia/',
  '/servicios/reformas-fachadas-valencia/',
  '/servicios/reformas-integrales-valencia/',
  '/servicios/reformas-locales-comerciales-valencia/',
  '/servicios/reformas-pisos-valencia/'
]);

export default defineConfig({
  site: 'https://mejoresreformasvalencia.es',
  trailingSlash: 'always',
  output: 'server',
  adapter: vercel(),
  redirects: {
    '/servicios/pintura-exterior/': '/servicios/pintura-exterior-fachadas/',
    '/servicios/impermeabilizacion/': '/servicios/impermeabilizacion-terrazas/',
  },
  integrations: [
    tailwind(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => {
        const { pathname } = new URL(page);
        return allowedSitemapPaths.has(pathname);
      },
      serialize: (item) => item,
      entryLimit: 45000
    }), 
    react()
  ],
  markdown: {
    remarkPlugins: [
      (await import('./src/plugins/remark-callouts.ts')).default
    ]
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});