import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],

  resolve: {
    alias: {
      src: path.resolve('src/'),
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
})
