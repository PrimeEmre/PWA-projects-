const assets = [
    './',
    './index.html',
    './CSS/style.css',   
    './js/script.js',    // Make sure this matches your folder name (JS vs js)
    // './images/AI-genrate.jpg'
];

// FIXED: Removed the extra comma outside the function
self.addEventListener("install", function(installEvent) {
    installEvent.waitUntil(
        caches.open("ai-generator-pwa").then(function(cache) {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", function(fetchEvent) {
    // FIXED: Spelling 'respondWith'
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(function(res) {
            // FIXED: fetch(fetchEvent.request)
            return res || fetch(fetchEvent.request);
        })
    );
});