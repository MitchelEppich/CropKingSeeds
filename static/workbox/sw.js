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
  "/static/workbox/next-precache-manifest-bf67a47b52a4a283a3b0760e8822d6a7.js",
  "/static/workbox/next-precache-manifest-492c5b73505e07d4a3e6de585762c41a.js",
  "/static/workbox/next-precache-manifest-492c5b73505e07d4a3e6de585762c41a.js",
  "/static/workbox/next-precache-manifest-d44fe7c87487d7cfc38a9868c62b6c13.js"
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
    "revision": "f49579f28448f4b0630e0f835d31bcdc"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "72b989f7a9d8636de7bc8071e223d5d8"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "d3415deca42ff056368abb3829f964ba"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "80702d1fd425a8a539eac1d04f484da6"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "b8dfc54d3c6d02b0a37715f6a7d971cb"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "131a6dcfe6354b063988ea4272d59fce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
