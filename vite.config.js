import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { exec } from 'child_process'

function autoResumePdfPlugin() {
  return {
    name: 'auto-resume-pdf',
    configureServer(server) {
      server.watcher.add(['public/Resume_Rituraj_Kumar.html', 'public/style.css']);
      server.watcher.on('change', (file) => {
        if (file.includes('Resume_Rituraj_Kumar.html') || file.includes('style.css')) {
          console.log('\n📄 Resume HTML/CSS updated. Auto-generating PDF...');
          exec('node scripts/generate-resume-pdf.js', (err) => {
            if (!err) console.log('✅ Resume PDF updated successfully!\n');
          });
        }
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), autoResumePdfPlugin()],
})
