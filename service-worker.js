const CACHE_NAME = 'fivdb-map-v1';

const urlsToCache = [
  '/',
  '/index.html',

  './resources/ol.js',
  './resources/ol.css',
  './resources/qgis2web.js',

  './layers/layers.js',
  './layers/FacilityInfo_4.js',

  './styles/FacilityInfo_4_style.js',

  './FIVDB.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
