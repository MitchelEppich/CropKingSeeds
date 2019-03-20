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
  "/static/workbox/next-precache-manifest-d8ad4acf140dd841d459d7e2430e4bd4.js"
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
    "revision": "e89787ac6d088a9aeaa7962a68f0a8a9"
  },
  {
    "url": "/_next/static/style.css",
    "revision": "b53cca02bde8a1c95b80c38a66f91ff1"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "6dc234b79af62137e47a3b2fe7555092"
  },
  {
    "url": "/_next/static/commons/main-1d3a993c26c3d3a8f453.js",
    "revision": "13fc7d497ae29d106da9713f2885b4f2"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "d7e07c3205a35f3e381bbc4a406734fc"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "d9b41a05cebc8a48c0b859108cf20acc"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "5c7b480dcdf6051544cee115a3d2dd02"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "0c4e3472a45797383429a36dce50ff71"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
