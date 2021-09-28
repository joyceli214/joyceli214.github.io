'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "12e15db121c6fdd660fe06b2c9229d0c",
"live2d/L2Dwidget.0.min.js": "e9a9939b5ecfce89b3cd0ce26dbc3d12",
"live2d/L2Dwidget.min.js": "eb180315a40e296580d6c398d0363eac",
"live2d/tororo/package.json": "6aff88bd8121788b1d867731f4fc02f8",
"live2d/tororo/assets/mtn/06.mtn": "e501a844485009ae1f20ca34c78980fd",
"live2d/tororo/assets/mtn/07.mtn": "0c525b689fb884f384f3dffe7ec02a14",
"live2d/tororo/assets/mtn/05.mtn": "fe773c56df1f924e687c75ae00ca79f9",
"live2d/tororo/assets/mtn/04.mtn": "0f6a2a80dc8413198e59881d6637d607",
"live2d/tororo/assets/mtn/01.mtn": "ecfe8cd31fcdcdb84f6af7d4a5f80545",
"live2d/tororo/assets/mtn/03.mtn": "9774f3029b05d7078fe4d372ba17fb85",
"live2d/tororo/assets/mtn/02.mtn": "cdcd3669fe3a46d41fa421e946606263",
"live2d/tororo/assets/mtn/08.mtn": "a6a984fb72ddc64adff0ba57df921f3f",
"live2d/tororo/assets/mtn/00_idle.mtn": "f08d091c1d4aabfd9bf425fffeb86cc8",
"live2d/tororo/assets/tororo.model.json": "62abd8195c644379b85d54011d708feb",
"live2d/tororo/assets/moc/tororo.2048/texture_00.png": "817ca52e35fef3ef3a452127d1c88f43",
"live2d/tororo/assets/moc/tororo.2048/texture_01.png": "9bd791736cfc91b62670dee5f7fbd45c",
"live2d/tororo/assets/moc/tororo.moc": "50f3411b59c322d917a0be3b8b5cd76b",
"live2d/tororo/assets/tororo.pose.json": "e0eec0e71f146917081b4dd53cda90ee",
"index.html": "f093db03788902d612d86761aa7729df",
"/": "f093db03788902d612d86761aa7729df",
"main.dart.js": "6b39206b800643f3ba327c8e3a9c4305",
"README.md": "91fb83f1671da851b0ad6d2fe48e1062",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e29d005fe5e6545a9df6c5653d6ce02",
".git/config": "9c7a87fddad784273dbb80cdbf3145be",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/c1bdc555a648ea96429928b417e44c83ea8fb1": "4b7c9485faf995cd35e400d0bc7474ed",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/58/4b15dcbd4700c5c4192ae4e850f1ca18f09a49": "6f733258d262c6f666785a3f820e1fd7",
".git/objects/a3/caab722beb7b83f2d00413fc95785ae5e70a37": "10450444f454b6d81f5d7c558f77adc9",
".git/objects/d9/a611eaf0d9eaf18fd2c3c9d6417272f6a771cc": "4f4edec4b10d92d82a6a25cc20003b7b",
".git/objects/b3/500c56a60e28b6611c634af67735f92413e02a": "33dd159483ef72ba1a98b60b8ed9d412",
".git/objects/b3/75e0ff6afc941b88c71cc92e995993b94a2254": "153308a7c0fe6d844839afab2d74d687",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e3/6ff310bb8de72a35eeca889cfbc70349860172": "edbe2b4fde1aeb50e6a0295184758002",
".git/objects/42/b1f275cc4d97f426a58522cf129be45013ed16": "2b5381de415b490b7bef543536b58ec1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/87a52e2d4c27c833e8e5b95423baaee849e753": "d47df7d16b3df7edb13f8e1710cba4a7",
".git/objects/75/55962d54567ff0cc4eee8c859f9fbcf674467f": "12fe4add3e6afa392edf5accc8163d43",
".git/objects/86/ae15fecbf4492da383986ccf4dd1348f54d4e1": "2ad7a65ac4697aade0bd09be6b30a57a",
".git/objects/2a/8e63bb4bbfa572f09c8e9ec4a0e4212a01df03": "1614079325475b12a1df59a9e460f756",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/01/1332bf0dc75284f1d33bc14cc7b858d7a893fd": "6146234bc300b9b9e5fb71a56baf280d",
".git/objects/55/be2f798b42eb0082ea53d7d5e50d609bdb4271": "14d0163a0421c45a4d4a0ab02f48441c",
".git/objects/aa/72fbff0f45f89f8ebb24adbf260c4867b4bbc8": "d105cb7722603865b31f06c6f187ad89",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f8/a43f2b203054676b64e38e2b78af5468c39b6d": "c74b50a853cc4b1a5f5dc1f07b4a619a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2e/3daa4501cec01d2f26b37fb53b6f830d17e2ea": "89653bc932c88880b72f84c69bea5ad4",
".git/objects/13/cea5bdcbe3e17bd689f389c69a7a32c49b44df": "663636a721d0a36352a68ba864a37d9b",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "11289bdc566094dc3b3b7b5d938eda9c",
".git/logs/refs/heads/main": "11289bdc566094dc3b3b7b5d938eda9c",
".git/logs/refs/remotes/origin/main": "e2169f2fcea2881ab044cf47e615f996",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/refs/heads/main": "c121fd409ca5d5437de2084c3bf1b1e4",
".git/refs/remotes/origin/main": "c121fd409ca5d5437de2084c3bf1b1e4",
".git/index": "d4b955e08d93ee079db6c8de60e83a7f",
".git/COMMIT_EDITMSG": "2f1776049191aa4a4fb1e9234e309039",
".git/FETCH_HEAD": "f1586509e6ff498aff94769bebf4b4a0",
"assets/images/logo.png": "64d8ff86f2ddbf1a6d6c9857ca62bed8",
"assets/AssetManifest.json": "4522278cc7c36110dac1a35033f6f155",
"assets/NOTICES": "f6ab236c1d93c38997fce205356a46d7",
"assets/FontManifest.json": "e77070caa4819cf88e28e42f00e271bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
