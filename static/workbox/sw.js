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
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/next-precache-manifest-bf67a47b52a4a283a3b0760e8822d6a7.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-d44fe7c87487d7cfc38a9868c62b6c13.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js",
  "/static/workbox/next-precache-manifest-fd39bc26dc8a7cecbcfc7137bcbcf0f5.js"
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
    "revision": "12cfe26c2d0f86016471a2f5016cfedd"
  },
  {
    "url": "/_next/static/style.css",
    "revision": "ed36cf0c253d77f6fbe28811dae0f0fa"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "b0cbb8380f09f58635b19197d464add1"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "f5cb58461e76c8c1af75a60b9599884e"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "0ac4d2c210912135d88c640aa9f8e487"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "a6d9f029feddda5e48af8f2cf761fab2"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "022f5428f65c0361e640e73abdee382f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
