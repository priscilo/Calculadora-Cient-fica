import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,      // Puerto fijo
        strictPort: true // Si el puerto está ocupado, falla en lugar de cambiar
    }
});
