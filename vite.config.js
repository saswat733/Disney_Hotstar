import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      'firebase/app': 'firebase/app',
      'firebase/auth': 'firebase/auth',
      'firebase/firestore': 'firebase/firestore',
      'firebase/storage': 'firebase/storage',
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit as needed
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          // Add more manual chunks as needed based on your project
        },
      },
    },
  },
});
