import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dropdown-menu', 'framer-motion'],
          'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-dropdown-menu',
      'framer-motion'
    ]
  },
  server: {
    fs: {
      allow: ['..'],
    },
  }
})
