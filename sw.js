let PRECACHE = 'good-game-precache';
let PRECACHE_URLS = [
    './', // remove this for js13k
    'index.html',
    'entities.json',
    'system.js'
];

let createCacheBustedRequest = url => {
    let request = new Request(url, { cache: 'reload' });
    if ('cache' in request) {
        return request;
    }
    let bustedUrl = new URL(url, self.location.href);
    bustedUrl.search += (bustedUrl.search ? '&' : '') + 'cachebust=' + Date.now();
    return new Request(bustedUrl);
}

self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cachesToDelete => {
            return Promise.all(cachesToDelete.map(cacheToDelete => {
                return caches.delete(cacheToDelete);
            }));
        }).then(() => fetch(createCacheBustedRequest('./entities.json'))
        ).then(r => r.json()
        ).then(entities => {
            Object.keys(entities).forEach(id => {
                Object.keys(entities[id]).forEach(comp => {
                    if (['states', 'state'].indexOf(comp) < 0) {
                        let path = 'components/' + comp + '.js';
                        if (PRECACHE_URLS.indexOf(path) < 0) {
                            PRECACHE_URLS.push(path);
                        }
                    }
                });
            });
            return caches.open(PRECACHE);
        }).then(cache => cache.addAll(PRECACHE_URLS)
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith(self.location.origin)) {
        let fromNetwork = _ => {
            return fetch(createCacheBustedRequest(event.request.url)).then(response => {
                caches.open(PRECACHE).then(cache => cache.put(event.request.url, response.clone()));
                return response.clone();
            }).catch(error => {
                return error;
            });
        };
        let fromCache = _ => {
            return caches.match(event.request.url).then(response => {
                if (navigator.onLine) {
                    fromNetwork();
                }
                return response.clone();
            }).catch(error => {
                if (navigator.onLine) {
                    return fromNetwork();
                }
                return error;
            });
        };
        event.respondWith(fromCache());
    }
});
