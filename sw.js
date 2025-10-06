// sw.js - Service Worker Básico

// Cuando el Service Worker se instala, se ejecuta este evento.
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado.');
});

// Este evento se activa cada vez que la app hace una petición (ej. cargar una imagen).
// Por ahora, simplemente dejamos que la petición continúe a la red.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});