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
  "/static/workbox/next-precache-manifest-bf67a47b52a4a283a3b0760e8822d6a7.js",
  "/static/workbox/next-precache-manifest-bf67a47b52a4a283a3b0760e8822d6a7.js",
  "/static/workbox/next-precache-manifest-eafdd4c3127373036041ed63a6980c57.js",
  "/static/workbox/next-precache-manifest-eafdd4c3127373036041ed63a6980c57.js",
  "/static/workbox/next-precache-manifest-eafdd4c3127373036041ed63a6980c57.js",
  "/static/workbox/next-precache-manifest-7d0447df23d5c1da124316b012ae9724.js",
  "/static/workbox/next-precache-manifest-7d0447df23d5c1da124316b012ae9724.js",
  "/static/workbox/next-precache-manifest-7d0447df23d5c1da124316b012ae9724.js",
  "/static/workbox/next-precache-manifest-7d0447df23d5c1da124316b012ae9724.js"
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
    "revision": "864f65f2687c6c0ca5cddf997873d653"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "b7dd28596ce10d378661988243f6d1e6"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "338eb1c44902ced65a467eed4f607ff2"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "ba49ef090b4c1116951c919f42ec706e"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "1ace3f3a7ecb38c3109b08ec1aeeb4ba"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "7ad0931b9cbec4c41f29fdbe95079555"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
