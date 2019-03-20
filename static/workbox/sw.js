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
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/next-precache-manifest-bf67a47b52a4a283a3b0760e8822d6a7.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-76dd3558068deed8e2a54244c6a95cb8.js",
  "/static/workbox/next-precache-manifest-76dd3558068deed8e2a54244c6a95cb8.js"
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
    "url": "/_next/static/791863919230013118ca972599033c54.woff",
    "revision": "791863919230013118ca972599033c54"
  },
  {
    "url": "/_next/static/9ccdb2e916cc1ec13bbe38acade5828d.woff",
    "revision": "9ccdb2e916cc1ec13bbe38acade5828d"
  },
  {
    "url": "/_next/static/manifest.json",
    "revision": "20498ce0f1a8fbe5bd12f1b7663b5663"
  },
  {
    "url": "/_next/static/style.css",
    "revision": "72b830441d83df6891d9c4df8def0b26"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "6dc234b79af62137e47a3b2fe7555092"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "36f36eed1ddf208cb50322a06a3490bd"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "f2424e5b598d813c067c2fea332ef069"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "b4777368967e990ead3549ad7a733e84"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "f1658626e8eb6d415b89c1c0b1f9f2bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
