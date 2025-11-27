// --- sw.js ---

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
    event.waitUntil(
        caches.open('static-v1').then((cache) => {
            console.log('Caching files...');
            return cache.addAll([
                './',
                './index.html',
                './css/style.css',   // Lowercase css
                './js/script.js',    // Lowercase js
                // './images/AI-genrate.jpg' // Keep commented out if you want to be safe
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== 'static-v1')
                .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});