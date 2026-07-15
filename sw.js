const CACHE_NAME = 'mashielo-v1';

const ASSETS = [
  '/',
  '/index.html',
  '/style.min.css',
  '/contacto.html',
  '/qr/index.html',
  '/qr/style.min.css',
  '/logo.png',
  '/qr/logo.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap'
];

self.addEventListener('install', (event) => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then((cache) => cache.addAll(ASSETS))

  );

  self.skipWaiting();

});

self.addEventListener('activate', (event) => {

  event.waitUntil(

    caches.keys().then((keys) => {

      return Promise.all(

        keys.filter((key) => key !== CACHE_NAME)

          .map((key) => caches.delete(key))

      );

    })

  );

  self.clients.claim();

});

self.addEventListener('fetch', (event) => {

  if (event.request.method !== 'GET') return;

  event.respondWith(

    caches.match(event.request)

      .then((cached) => {

        const fetched = fetch(event.request).then((response) => {

          if (response && response.status === 200) {

            const clone = response.clone();

            caches.open(CACHE_NAME).then((cache) => {

              cache.put(event.request, clone);

            });

          }

          return response;

        }).catch(() => cached);

        return cached || fetched;

      })

  );

});