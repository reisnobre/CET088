/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["./index.html","30653af5df595dcdc587f1fc72d9b85c"],["./static/img/logo.png","82b9c7a5a3f405032b1db71a25f67021"],["./static/img/logos/android-chrome-144x144.png","2bd71e05694d2a4a084dd7c178c95f1d"],["./static/img/logos/android-chrome-192x192.png","c8aeb9ff73109e94df5ec5d4d2d12d32"],["./static/img/logos/android-chrome-256x256.png","df061f7c0b0e6823c614fd07e9c9582b"],["./static/img/logos/android-chrome-36x36.png","586d9362e7982a7f6311c4971e086e3a"],["./static/img/logos/android-chrome-384x384.png","78b49e8c4e0b20a4d3e753df3f943971"],["./static/img/logos/android-chrome-48x48.png","3010143dbb3a9901f6a82353dc610a80"],["./static/img/logos/android-chrome-512x512.png","b62d084b88de2fdadadbec4c781e7033"],["./static/img/logos/android-chrome-72x72.png","53a60027cb0442602492f82e71cbac27"],["./static/img/logos/android-chrome-96x96.png","a740ea2c5e1816b1e51652ac70ee2dd0"],["./static/img/logos/apple-touch-icon-114x114.png","d25f35782a5702ba1dda5a0ebefcd6ae"],["./static/img/logos/apple-touch-icon-120x120.png","43f1213ab18349dcc078f8837d335c85"],["./static/img/logos/apple-touch-icon-144x144.png","6de05e203c485e60c0740eb8d3c9d442"],["./static/img/logos/apple-touch-icon-152x152.png","ef68f801f642813b5c6273dc62615e78"],["./static/img/logos/apple-touch-icon-167x167.png","e1f2f37d0da73fc6ed4df8d0b8c7e1b4"],["./static/img/logos/apple-touch-icon-180x180.png","d2e025f1efcb6104741e52a6ac482d61"],["./static/img/logos/apple-touch-icon-57x57.png","b76c9d045d643337cf33b54f025653bb"],["./static/img/logos/apple-touch-icon-60x60.png","ec4f252fbeff65af2bca5b33657ba400"],["./static/img/logos/apple-touch-icon-72x72.png","1ac3243711c90983c0dc5a07691f2ec3"],["./static/img/logos/apple-touch-icon-76x76.png","3ed288a41338fe9ae050ff0127831346"],["./static/img/logos/apple-touch-icon-precomposed.png","d2e025f1efcb6104741e52a6ac482d61"],["./static/img/logos/apple-touch-icon.png","d2e025f1efcb6104741e52a6ac482d61"],["./static/img/logos/apple-touch-startup-image-1182x2208.png","97eed684fe1fc80881331314c5932bf0"],["./static/img/logos/apple-touch-startup-image-1242x2148.png","09ec42afb656d4b899ff4f23165df103"],["./static/img/logos/apple-touch-startup-image-1496x2048.png","92a6b48a1be2a5e0f006ac3a3b810328"],["./static/img/logos/apple-touch-startup-image-1536x2008.png","8c75a17dc4d36ab10da55144c018193b"],["./static/img/logos/apple-touch-startup-image-320x460.png","213f5e19ecece4cf9218f8ab0ab670d1"],["./static/img/logos/apple-touch-startup-image-640x1096.png","e447d8115550833aab7d20ad67e0f9b5"],["./static/img/logos/apple-touch-startup-image-640x920.png","d4373ae9e5472fc9821e577446b54bbf"],["./static/img/logos/apple-touch-startup-image-748x1024.png","ce6b9a498da957f6f1048d86273202fa"],["./static/img/logos/apple-touch-startup-image-750x1294.png","8776c6a888fb4fcd805c94120d774a76"],["./static/img/logos/apple-touch-startup-image-768x1004.png","ae1ddc0c61fec1dac78e6bb0799b11dc"],["./static/img/logos/browserconfig.xml","cd159f569536bad48eb667a55ec51f61"],["./static/img/logos/favicon-16x16.png","6e5c251c863669650788ff9298a6d7b3"],["./static/img/logos/favicon-32x32.png","ca26f805ac72f8714118dca8d5731f18"],["./static/img/logos/favicon.ico","31ea71814c695ebe264459459220cfec"],["./static/img/logos/firefox_app_128x128.png","02b379012bb23954904f766f05be9083"],["./static/img/logos/firefox_app_512x512.png","85cf2573ec1c33fe667226f9a65ce449"],["./static/img/logos/firefox_app_60x60.png","61346fa58593adfa1086abeaa9dff66c"],["./static/img/logos/manifest.json","6c560d0be539b7f33fd9cdbf786baad1"],["./static/img/logos/manifest.webapp","59010e7bb45ffec4e72a1e89a7e2a7d3"],["./static/img/logos/mstile-144x144.png","2bd71e05694d2a4a084dd7c178c95f1d"],["./static/img/logos/mstile-150x150.png","b710b02773ec7fbb21b12488448c00f4"],["./static/img/logos/mstile-310x150.png","85bf4826129676006cf497891e158d9a"],["./static/img/logos/mstile-310x310.png","be72f52872ffa33be1cc761d3fa0597f"],["./static/img/logos/mstile-70x70.png","5dd7c212e95fcd3e38462a579a13e5e6"],["./static/img/manifest.json","b58fcfa7628c9205cb11a1b2c3e8f99a"],["./static/js/app.4adc3fc71c7f99dbca65.js","e1e7c2722ea453d34a6cde0116fcfbba"],["./static/js/app.4adc3fc71c7f99dbca65.js.map","39a3cc3a2c7232d0413e8cec5c30a03a"],["./static/js/vendor.ebb8ccaf7269b359c9a6.js","26f5b247ccc86b3677f14fcc65f3a557"],["./static/js/vendor.ebb8ccaf7269b359c9a6.js.map","ae13e82f02a624be15a588b5c62c9d2f"],["./static/manifest.json","908720bd333dfac79d514eed4e8bb6ff"]];
var cacheName = 'sw-precache-v3-2018-03-19T23:17:49.415Z-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







