importScripts("/precache-manifest.352e69e041c763e9db6498e0f82fcfcb.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
  if (msg.data.action == "skipWaiting") {
    self.skipWaiting();
  }
})
