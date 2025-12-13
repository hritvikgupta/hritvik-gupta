import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // For GitHub Pages: if repo name is username.github.io, use '/', otherwise use '/repo-name/'
    // This will be set automatically by GitHub Actions, or you can set it manually
    const repoName = process.env.GITHUB_REPOSITORY 
      ? process.env.GITHUB_REPOSITORY.split('/')[1]
      : 'hritvik-gupta'; // Repository name
    
    // If repo is username.github.io, base is '/', otherwise '/repo-name/'
    const base = repoName.endsWith('.github.io') ? '/' : `/${repoName}/`;
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
