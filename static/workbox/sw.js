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
  "/static/workbox/next-precache-manifest-90188670955f830b649f329ee1741895.js"
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
    "revision": "5d1d9226ee14ffb380b4bc21a52405cb"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "eeb240ce58311407087f58f86efaa12e"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "4a03072276c3d926b5219c063c7defdb"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "3b1cbd0cce2a29d42a8ddfec01b87f73"
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
