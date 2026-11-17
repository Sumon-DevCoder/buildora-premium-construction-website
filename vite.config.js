import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/*
 * Windows: when the project is opened as `d:\...` instead of `D:\...`, the
 * bundler sees two spellings of the same file and bundles modules twice.
 * Two copies of React or React Router break hooks and context at runtime
 * ("reading 'useState' of null", "useLocation() may be used only in the
 * context of a <Router>"). Always use an uppercase drive letter.
 */
const upperDrive = (p) => (/^[a-z]:/.test(p) ? p[0].toUpperCase() + p.slice(1) : p)
const ROOT = upperDrive(path.dirname(fileURLToPath(import.meta.url)))
if (process.platform === 'win32') process.chdir(upperDrive(process.cwd()))

/*
 * Core libraries used on every page share one long-cacheable vendor chunk.
 * Page-specific heavy libraries (recharts, lightbox) stay in lazy chunks.
 */
const CORE_VENDOR =
  /[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|framer-motion|motion-dom|motion-utils|lucide-react)[\\/]/

// https://vite.dev/config/
export default defineConfig({
  root: ROOT,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.join(ROOT, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [{ name: 'vendor', test: CORE_VENDOR }],
        },
      },
    },
  },
})
