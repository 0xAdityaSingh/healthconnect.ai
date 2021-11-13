'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b22efa0ad999e2ad0741cbd71ab65253",
"index.html": "de318e721ed8b9f347b5c06d4671d292",
"/": "de318e721ed8b9f347b5c06d4671d292",
"main.dart.js": "5f8a8e61e5efc58d8e97e914a7f4d9a9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8642e939d3dd3b13f2045b76adc2d639",
".git/ORIG_HEAD": "e4925a61c6759c9dff4031e45dfbaa10",
".git/config": "0bfa5b2e6adee2a23098a7b776c78c84",
".git/objects/3e/05e947f64208cd3f94bb620883c98d53887dc2": "e818f9128f41e63df1208e9fe1eefd72",
".git/objects/6f/1fea38f07cf3f5766b21d9e0012300d4560792": "47a3272affd738a297327cd968015034",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/925a4ee2cf7d81543a5caf1a142d7d3dc46e18": "e99f39d141824b3f400b75f44b4c66b7",
".git/objects/67/3cc11335d5ea714215bcc79bc08a062c454f3b": "6e89b57f22c02d857894a0a8d661e5bc",
".git/objects/0b/347cd8bea193778932acd745b3b5736d59ea12": "68d1b08738cf9638c73dbbaf03af2ac3",
".git/objects/34/a1df9d28b3800e14aff82a097c8e6a2f5e7699": "184f24148c89f95c91770cac2ff9a6e0",
".git/objects/b2/d91adfbec6018b61f04433f9d9a4a5ef373b14": "78590ef4c94b2e6ffd055715770f7c05",
".git/objects/bb/2764e9ad41d931cf68dbce1e635052cb34a45c": "265a36d561c7ada31eadd935b7b3a380",
".git/objects/a2/98a169cb81ae56c749808eb04d7aea57a17be5": "f5be7f42988efb39cbd8a9f22f6c73d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/db3e619ec4ef14f4171abaa1844142bb82e516": "5b138c1d1bf17dc153a433d860cb683c",
".git/objects/ae/784b56bca4b74fa1e7c8ae382978276bba6cb1": "c57de1a76075cefaa406c1995630cbe6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/9d37db53f0a99a17cf150ddf122a9df4b8acf8": "b17bf12af80907bd2fd8fcfa3b44d4dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/29871ed83f9659cf5e96bd6569bb3b9cd45f8b": "151b7e38c55bd9dde788bb43d8158bd0",
".git/objects/fc/e3658e8f37d4c81865a3a2d60e4693ad75c4d3": "8f41b3d8bef59ed8eb83e8b1fb2b46c8",
".git/objects/fd/24ed30d1ac965afe150f173775f0c2e768e589": "348b37ecbb00376e41ab1d58a21d0e93",
".git/objects/f2/72dcb8020734f1318ce6e32a4b48cc1dbbd428": "031f23767f88fde96d1689632dbf76fc",
".git/objects/f2/e6d3fab8530aa1ab26408a48f5f4706b93dfd3": "275dad5f418f5908645da75f31b29f07",
".git/objects/f5/712c961e242f48b846207687706e0ee2ee4d2e": "8bbb02a2fcf84313c798231fb38e1f0f",
".git/objects/c8/630a9e9bd43b99b2b579282809fe8782ed5c38": "592f76950583c90099f4151e458299ce",
".git/objects/fb/9092a28b558dc22ce1b64cf30715266d728084": "543f29fe5f99829550b7c6e679819c80",
".git/objects/c1/621177b747353b4075831a12b5b3f2dadf24fa": "08c859005c86438d1092f87e979ed552",
".git/objects/c1/b53c00faf93afa3becd67d4a43e3618fea995d": "5186bc58fa5d17bfc996805442711f1f",
".git/objects/c6/15b4c2b3ec03bf9d559a6eebf71e50bb49d069": "1b0003c0a9430f91d661ed8fe3b81f68",
".git/objects/27/4e4c5bbd58bd5123b09d118a661ea089569af3": "20a10cf342c8bfb116c5f7fa5b9e2e2f",
".git/objects/16/06718c7e58ca21cd3eda70a69c3381c735e045": "d6cf0d18389fb514ce4472882b4ab3f6",
".git/objects/1f/56ff0c6e4333e3598bfac3682e9986e47b1071": "5a880721f2befc101d702f909f19bdc3",
".git/objects/80/ccf3b60f15784dad72e253a0e51ca119cf893e": "507250aeade50ba8873d2aa4edc18f34",
".git/objects/74/f0208ba6b48eb067f4caaf608ffe6a2e498ccf": "7a7cc15dd8804ab3ef854159320d1eee",
".git/objects/28/ed65e1e989f1e3db2d6a835fbaeb94f6e39150": "7a22ccac4932dd2826f0cf813e7409d1",
".git/objects/7b/84eb1e70c34b42fd216d144acf440b1ce22eb9": "a3e0bed0181276849550e24864b7109e",
".git/objects/8f/564c061759172439ac0c252efff69fc5feb30a": "7b54d94bc896ddbc455597070ee0cb34",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/9f264c60410fb6461a5d5f192859971dc6ca0f": "c33747b39a25f79920c395e2878bef2f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/8c7c808c29f7dee79a1f596275bc37b1801984": "55c614f775ec7d6ae6292f1940a6e857",
".git/objects/91/5c34fcc43fecce06d407b1ac57ce1688eaecae": "9ab2697618a63d97f08181a81da1a058",
".git/objects/65/72ee8663e666e64cafad780889a9725d9d4d79": "a539bf02597f24d63dbcefac5d78a2a1",
".git/objects/65/df37222210993dc002c0c4c291dc09e476ef19": "9dad33f8e2372e6a6423f9d558c77d70",
".git/objects/96/5b7866fe60ea9dc1cdbdd7cd77d71b84f7484e": "8ca4e2fdb962b8136bd12dabd9b8fc6d",
".git/objects/54/f18f0f78d89910dcd2cd3f8a12c9edd04c761e": "68d13adf1729a976abe730a84bd80fdf",
".git/objects/3f/0ecce1f8b71ec39536290f310beff23ac910df": "b92fb2697194062ef2b231c3ec3a08ff",
".git/objects/30/c8fe5987b1f104764f5abdc1be77ffec4fd385": "2b59aebc98a3c3178232ffff878c9068",
".git/objects/01/bb17668aefbba95199e202d61e8693d278003e": "9542d5cb3b219ba4f1d900c18cf8c15b",
".git/objects/01/7078fcf6e671ab504c8217324080a38c653883": "c9c2b31ea961a0130f7fcbf39111fd3c",
".git/objects/99/503972b8858ed4c1eb7b40cf2ce7bb4eccbb69": "3c22318fc22e27c2d966174806611abe",
".git/objects/97/f854662c95f1c8b8a67e30813b2f8cbd6cdee0": "c8bf4aa0f3e19ffbfef13febfe6f8e74",
".git/objects/0f/8320fb31543c3a462e26210920b2fae2284c37": "b70156f3a57bb87ee3ab74fa7e6f2dd4",
".git/objects/90/5c046725e34df0ea79d05cb1ad0d6a07ce57c4": "b9522a3fdf4772d942f5f1a4af7e41c2",
".git/objects/a0/c1ef23fe13eb5a88b28d8682286d8ce0dd0de6": "0f6ca9440a861d8d578295b7a8c80cdf",
".git/objects/dd/2a3334a0b36347aa178ff52f16c41e703a8093": "9e289d36760ecf9c532a34e8c140df85",
".git/objects/d2/7a0b057281abf6fe5e7294b06b829052c4498b": "ad445a41bfc6571416f4a7918f714448",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/93be2c6858800e396994f83173b39ea9547bb7": "1be5cf5015bd231331adcd02b7c70211",
".git/objects/e1/7dcdf7f11891650fb670cdcfd3d731db72d294": "068dd142ba598fcd7c3cea633357b3ae",
".git/objects/f9/0e87ac16e2296674ffe6beb1c76600c7f0c5b3": "8979610820fac3747337f108e7287ce3",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/ff/5cbd57d6df2a03f35ebe99391ef753c946d43e": "b06b632b02d5a6dc20fa27ea0edf3216",
".git/objects/f8/301333e51810ee21b6f09d021a1a58ff48c5f0": "7eb2760cd6453fb8619eabd199160182",
".git/objects/ce/7278906a20bc792a14e59ffe7500ada9203cf2": "ef108928e1f634952a714de67bc86529",
".git/objects/46/907b7d08f0c9be01eabeebdf97128c72e8f034": "89b3c5826533c16643c7b7fb617d3122",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/7caf71eda34a2f3ebaabca608864a4240a14e0": "72faf941d81cab21c584b3ebb8d5621a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/24/1d4742d450822043daad6446e8d0abe17596b9": "26cd3f940e387d2261d66802d1a0eaa1",
".git/objects/4f/3e0b2ab7a85a6eb03fb91dd247f6787f21b6c4": "f2c0140d0f40149c2faa8229d99366de",
".git/objects/15/b41b7631771f499abdbccdddfb162a389fc0b4": "5456862aadbcf854e4e7f4fde8227d54",
".git/objects/71/6e59d23b28d1e9fa23cdf9993b7bd6163bcfb8": "0e41064afe3d36aac69885dfd9b13f36",
".git/objects/47/5462ce907ec1cf8a92bac976ec04fdfd153c25": "5fd678ea3a214dc8a3de3142ff1addc7",
".git/objects/13/34a7f3b805959a25554d5a13ccf423d20eda10": "27c230b5514fb529420aa9e889fef74f",
".git/objects/13/205853455d877d4223b8e990fd0c2849f26781": "2b46d31d7d0cfd28c1b99acca00772a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "02c3b4e7646b17e08b451059e791414e",
".git/logs/refs/heads/main": "66cd423aa72ebe0647b3f4557d93f2d9",
".git/logs/refs/remotes/origin/main": "bcabeda87300ad1cc8819bf801926ef9",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ba79bf8e0ff2ebc908bf9fd456f58637",
".git/refs/remotes/origin/main": "b21cad3a080b1ecb733f42556b4bfaa1",
".git/index": "092472569e7c3c8ebd90912731680eee",
".git/COMMIT_EDITMSG": "dcb7e4d9a45e14639917c673efb74a62",
".git/FETCH_HEAD": "977bb7a6270da8938da88ea52029d56e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "2756a2d5c97a6d61a2fb60ef81b19add",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
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
