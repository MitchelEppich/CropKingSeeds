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
  "/static/workbox/next-precache-manifest-cee9b4b34161ba8ea76d9f4dc3648bad.js"
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
    "revision": "81bcbda289d912ee4957454c1d0abac4"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "ebe0500485f094204c4d1c8766873c46"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "0ba1ee5bf776a1f30932b588b7542ec8"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "3c606f9d2bf75a11f21e80edef43fa11"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "c2458285ff5db7f214914b7fe11c835b"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "6f68bb7bb4e9cc4ef14015708ddface3"
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
