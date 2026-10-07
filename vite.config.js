import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config: разрешаем доступ по сети, чтобы друг мог открыть сайт по ссылке
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // слушать все интерфейсы (localhost + локальный IP)
    port: 5173,        // стандартный порт Vite
    strictPort: true,  // не искать другой порт, если 5173 занят — лучше упасть с ошибкой
    open: false,       // не открывать браузер автоматически
  },
  preview: {
    host: true,        // то же и для npm run preview
    port: 4173,
  },
});