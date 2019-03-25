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
  "/static/workbox/next-precache-manifest-492c5b73505e07d4a3e6de585762c41a.js",
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
    "revision": "c737cd89281e2f4da2f295602045cf3c"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "8ded7d84c826404f31a3c666c5408731"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "d9773abb21cdff43ba55090bdfbc02c9"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "95bf1bbed2b3b30edfe6f073d7d475e4"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "510a4e1b4f9100c6d4600810d4f197f5"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "7d109c661b0dce03d3582734b9d602f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
