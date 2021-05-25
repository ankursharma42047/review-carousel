// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3Imd1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
// declaring variables

let img;
let clsblue;
let person;
let revie;
let nam;
let jo;
let prev;
let next;
let id;
let person_ht;

// initializing variables

img = document.querySelector("img[alt='person']");
clsblue = document.querySelector(".blue");
person = document.querySelector("#person");
revie = document.querySelector("#review");
nam = document.querySelector("#name");
jo = document.querySelector("#job");
prev = document.querySelector("#previous");
next = document.querySelector("#next");
person_ht = `${person.clientHeight}px`;

// setting image size same as container (width & height same) & clsblue size same as image

img.style.width = person_ht;
img.style.height = person_ht;
clsblue.style.width = person_ht;
clsblue.style.height = person_ht;

// data

let data = [
  {
    name: "Shinchan",
    job: "5 Year Old Boy",
    review:
      "Shinchan is my favourite cartoon character of all time. He is very best. No one can beat him. He is very cute. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/shinchan.png"); //for running at server
      } else {
        return "../Images/shinchan.png"; //for running locally
      }
    },
  },
  {
    name: "Doraemon",
    job: "Future Robot",
    review:
      "Doraemon is my favourite cartoon character of all time. He is very best. No one can beat him. He is very cute. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/doraemon.png"); //for running at server
      } else {
        return "../Images/doraemon.png"; //for running locally
      }
    },
  },
  {
    name: "Perman",
    job: "Superman",
    review:
      "Perman is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/perman.png"); //for running at server
      } else {
        return "../Images/perman.png"; //for running locally
      }
    },
  },
  {
    name: "Kochikame",
    job: "Police Officer",
    review:
      "Kochikame is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/kochikame.png"); //for running at server
      } else {
        return "../Images/kochikame.png"; //for running locally
      }
    },
  },
  {
    name: "Chhota Bheem",
    job: "SuperBoy",
    review:
      "Chhota Bheem is my favourite cartoon character of all time. He is very best. No one can beat him. He is very powerful. Watch him at Pogo TV. He is very popular. He is from India.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/bheem.png"); //for running at server
      } else {
        return "../Images/bheem.png"; //for running locally
      }
    },
  },
  {
    name: "Ninja Hattori",
    job: "Ninja",
    review:
      "Ninja Hattori is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Sonic. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/hattori.png"); //for running at server
      } else {
        return "../Images/hattori.png"; //for running locally
      }
    },
  },
  {
    name: "Kiteretsu",
    job: "Inventor",
    review:
      "Kiteretsu is my favourite cartoon character of all time. He is very best. No one can beat him. Watch him at Hungama TV. He is very popular. He is from Japan.",
    image: () => {
      if (typeof require == "function") {
        return require("url:../Images/kiteretsu.png"); //for running at server
      } else {
        return "../Images/kiteretsu.png"; //for running locally
      }
    },
  },
];

// put data in html

function put(number) {
  nam.textContent = data[number].name;
  jo.textContent = data[number].job;
  revie.textContent = data[number].review;
  img.src = data[number].image();
  id = number;
}

// load random character on DOMContentLoaded

window.addEventListener("DOMContentLoaded", () => {
  put(Math.floor(Math.random() * data.length)); // random no. b/w 0 & (data.length-1) including both of them
});

// previous & next function

prev.addEventListener("click", () => {
  if (id !== 0) {
    put(id - 1);
  } else {
    put(data.length - 1);
  }
});

next.addEventListener("click", () => {
  if (id != data.length - 1) {
    put(id + 1);
  } else {
    put(0);
  }
});

},{"url:../Images/shinchan.png":"3RRdQ","url:../Images/doraemon.png":"6tpqM","url:../Images/perman.png":"134Ch","url:../Images/kochikame.png":"6Qen2","url:../Images/bheem.png":"Y3PjU","url:../Images/hattori.png":"1S1UR","url:../Images/kiteretsu.png":"1PmuB"}],"3RRdQ":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "shinchan.ff6e6a3b.png"
},{"./bundle-url":"3seVR"}],"3seVR":[function(require,module,exports) {
"use strict";

/* globals document:readonly */
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.


function getOrigin(url) {
  let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);

  if (!matches) {
    throw new Error('Origin not found');
  }

  return matches[0];
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;
},{}],"6tpqM":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "doraemon.3d91bf6b.png"
},{"./bundle-url":"3seVR"}],"134Ch":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "perman.b8e97643.png"
},{"./bundle-url":"3seVR"}],"6Qen2":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "kochikame.21752b7d.png"
},{"./bundle-url":"3seVR"}],"Y3PjU":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "bheem.83db65f8.png"
},{"./bundle-url":"3seVR"}],"1S1UR":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "hattori.bbe94aac.png"
},{"./bundle-url":"3seVR"}],"1PmuB":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "kiteretsu.ef471887.png"
},{"./bundle-url":"3seVR"}]},["3Imd1","5rkFb"], "5rkFb", "parcelRequire7c27")

//# sourceMappingURL=index.3fafb3e2.js.map
