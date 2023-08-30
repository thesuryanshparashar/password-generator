
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/', // Cache the root
          '/index.html',
          '/styles.css',
          '/script.js',
          '/service-worker.js',
          '/manifest.json',
          '/assets/password-lock.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  