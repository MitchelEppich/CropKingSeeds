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
  "/static/workbox/next-precache-manifest-bf67a47b52a4a283a3b0760e8822d6a7.js",
  "/static/workbox/next-precache-manifest-eafdd4c3127373036041ed63a6980c57.js",
  "/static/workbox/next-precache-manifest-eafdd4c3127373036041ed63a6980c57.js",
  "/static/workbox/next-precache-manifest-eafdd4c3127373036041ed63a6980c57.js",
  "/static/workbox/next-precache-manifest-eafdd4c3127373036041ed63a6980c57.js"
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
    "revision": "f2fc82fee6653418b614844fc2b1e078"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "877fe425adbc6a142697e720f3ddd68b"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "3933dd60b9f214bbecf91fc8495882cb"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "4f3944b256f19498356ef07680603420"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
