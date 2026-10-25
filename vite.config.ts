import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// GitHub Actions supplies this automatically, including after a repository rename.
const [owner = 'AjayJasperJ', repository = 'portfolio'] = (process.env.GITHUB_REPOSITORY || 'AjayJasperJ/portfolio').split('/');
const base = repository.toLowerCase() === `${owner.toLowerCase()}.github.io` ? '/' : `/${repository}/`;
const siteUrl = `https://${owner.toLowerCase()}.github.io${base}`;

export default defineConfig({
  base,
  plugins: [react(), {
    name: 'portfolio-site-url',
    transformIndexHtml: (html) => html.replaceAll('__PORTFOLIO_URL__', siteUrl),
  }],
  server: { host: '0.0.0.0', port: 8080 },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
