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
  "/static/workbox/next-precache-manifest-b06c8128e1ad94c526bc9eb8091f787b.js"
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
    "revision": "32dd6f6d49668e7074e266ad2fcda430"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("/", workbox.strategies.networkFirst({ "cacheName":"html-cache", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/dcfgweqx7od72.cloudfront.net\/*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"cloudfront", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/embed.tawk.to\/*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"tawkto", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/www.google-analytics.com\/*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"ga", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[200]})] }), 'GET');
workbox.routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif)/, workbox.strategies.cacheFirst({ "cacheName":"image-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
