/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/next-precache-manifest-93e5a0f5a03f0fbec53c0b3b8c40136a.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/_next/static/icon_128x128.ico",
    "revision": "003369fe5660c6b70e452aa985c72feb"
  },
  {
    "url": "/_next/static/icon_192x192.ico",
    "revision": "003369fe5660c6b70e452aa985c72feb"
  },
  {
    "url": "/_next/static/icon_256x256.ico",
    "revision": "003369fe5660c6b70e452aa985c72feb"
  },
  {
    "url": "/_next/static/icon_384x384.ico",
    "revision": "003369fe5660c6b70e452aa985c72feb"
  },
  {
    "url": "/_next/static/icon_512x512.ico",
    "revision": "003369fe5660c6b70e452aa985c72feb"
  },
  {
    "url": "/_next/static/icon_96x96.ico",
    "revision": "003369fe5660c6b70e452aa985c72feb"
  },
  {
    "url": "/_next/static/manifest.json",
    "revision": "793c67547b2c72b4235b18d9ceb5c256"
  },
  {
    "url": "/_next/static/style.css",
    "revision": "b8dbbda81945554602d31cd3768458f3"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "b9e17bbdeeca0989804f005cfcbc3028"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "f098a9bcac6000c8297f5900abb35cd5"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "5122a076cc051717f771290275d5daa8"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "dfb763931efd69b0a94a974862e16f6d"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "9b3bbc526065712c7ec45f27ddd9cbfc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/", workbox.strategies.networkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/dcfgweqx7od72.cloudfront.net\/*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"cloudfront", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/embed.tawk.to\/*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"tawkto", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/www.google-analytics.com\/*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"ga", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/www.cropkingseeds.com\/*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"ga", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({ "cacheName":"image-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
