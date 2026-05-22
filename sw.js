// SophiA PWA Service Worker v1.0
const CACHE_NAME = 'sophia-pwa-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — Network first, fallback to cache
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // API calls: network only (no cache)
  if (url.hostname.includes('sophia.com.br') || url.hostname.includes('scld')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Static assets: network first, then cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

// Background sync for notes (future)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-notas') {
    event.waitUntil(syncPendingNotas());
  }
});

async function syncPendingNotas() {
  // Placeholder for offline note sync
  console.log('[SW] Syncing pending notes...');
}
