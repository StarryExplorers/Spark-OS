const cacheName = 'spark-os-cache-v1';
const assets = [
  '/',
  'index.html',
  'manifest.json',
  'https://img.icons8.com/fluency/48/diary.png',
  'https://img.icons8.com/fluency/48/password.png',
  'https://img.icons8.com/fluency/48/source-code.png',
  'https://img.icons8.com/fluency/48/temperature.png',
  'https://img.icons8.com/fluency/48/combo-chart.png',
  'https://img.icons8.com/fluency/192/monitor.png',
  'https://img.icons8.com/fluency/512/monitor.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
