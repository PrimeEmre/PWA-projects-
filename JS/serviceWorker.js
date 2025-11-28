let assets = [
    '/',
    'index.html',
    'script.js',
]

self.addEventListener("install") , function(installEvent){
    installEvent.waitUntil(
        caches.open("ai-generator-pwa").then(function(caches){
            caches.addAll(assets)
        })
    )
}

self.addEventListener("fetch",function(fetchEvent){

    fetchEvent.reponWith(
        caches.match(fetchEvent.request).then(function (res){
            return res || fetch(fetchEvent).request
        })
    )
})