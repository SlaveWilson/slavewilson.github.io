importScripts("/precache-manifest.9a59af48aa3fd1d780893f92c9deb596.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("message", msg => {
  if (msg.data.action == "skipWaiting") {
    self.skipWaiting();
  }
})
