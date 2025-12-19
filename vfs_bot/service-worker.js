self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cyro-pay-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'cyro-login.html',
        'cyro-signup.html'
      ]);
    })
  );
});
