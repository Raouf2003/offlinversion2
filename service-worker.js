self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('student-manager-v1').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.png',
        './sw.js',
        './tailwind.min.js',
        './xlsx.full.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request).catch(() => caches.match('./index.html'));
    })
  );
});
