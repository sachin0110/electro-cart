import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@angular/animations/browser': require.resolve('@angular/animations/browser')
    }
  },
  optimizeDeps: {
    include: ['@angular/animations/browser']
  }
});
