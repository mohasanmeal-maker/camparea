const CACHE_NAME = 'fivdb-map-v1';

const urlsToCache = [
  '/',
  '/index.html',

  './resources/ol.js',
  './resources/ol.css',
  './resources/qgis2web.js',
  './resources/ol-layerswitcher.js',
  './resources/photon-geocoder-autocomplete.min.js',

  './layers/layers.js',
  './layers/FacilityInfo_4.js',

  './styles/FacilityInfo_4_style.js',

  './FIVDB.jpg'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
