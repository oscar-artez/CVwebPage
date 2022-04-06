
// asignar un nombre y versión delk cache

const CACHE_NAME = 'v1_cache_cvpage',
urlsToCache = [
    './',
    './styles.css',
    './main.js'
]
// durante la fase de instalación, generalmente se almacenan en cache los activos estaticos

self.addEventListener('install', e=>{
e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
        return cache.addAll(urlsToCache)
        .then (() => self.skipWaiting())
    })
    .catch(err => console.log('Falló registro de cache', err))
)
})

// una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e=>{
    const cacheWhitelist = [CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            cacheNames.map(cacheName => {
                //eliminamos lo que ya no se necesita en cache
                if(cacheWhitelist.indexOf(cacheName) === -1){
                    return caches.delete(cacheName)
                }
            })
        })
        .then(() => self.clients.claim())
    )
    
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e=>{
    //Responder ya sea con un objeto  en cache o  continuar y buscar la url
    e.respondeWith(
        caches.match(e.request)
        .then(res => {
            if(res){
                //recupera del cache
                return res
            }
            // Recupera de la peticion de url
            return fetch(e.request)        
        })
    )
})
