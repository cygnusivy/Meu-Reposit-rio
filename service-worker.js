var cacheName = 'goview+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
		'./contato.html',
		'./login.html',
        
		'./assets/css/fontawesome-all.min.css',
		'./assets/css/login.css',
		'./assets/css/main.css',
		'./assets/css/noscript.css',
		
		'./assets/fontawesome/css/all.min.css',
		
		'./images/analise.avif',
		'./images/banner.avif',
		'./images/banner.jpg',
		'./images/entrevista.avif',
		'./images/fundo.avif',
		'./images/tempo.avif',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});