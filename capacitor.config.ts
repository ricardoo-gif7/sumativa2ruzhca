import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'myapp',
  webDir: 'dist'
};

export default {
  webDir: 'dist/myapp',  // Asegúrate de que el nombre de la carpeta coincida
  bundledWebRuntime: false
};
