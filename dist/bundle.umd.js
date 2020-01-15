!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.vueVimeoPlayer={})}(this,function(e){"use strict";function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function r(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function o(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function i(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,r=t.url,i=n||r;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(e=i,!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e)return"https://vimeo.com/".concat(i);if(o(i))return i.replace("http:","https:");if(n)throw new TypeError("“".concat(n,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var a=void 0!==Array.prototype.indexOf,u="undefined"!=typeof window&&void 0!==window.postMessage;if(!(n||a&&u))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var c="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id","_WeakMap"+"_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",function(e){if(o(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),n(e.prototype,"get",function(e){if(o(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),n(e.prototype,"has",function(e){if(o(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),n(e.prototype,"set",function(e,t){if(o(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)}),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:c);var s,l=(function(e){var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function l(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then(function(e){n(o,e)},r)}(o)}function f(e){this.def=e,this.triggered=!1}function d(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new d(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t}),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(t){var n,r=this;if(!r.triggered){r.triggered=!0,r.def&&(r=r.def);try{(n=a(t))?i(function(){var o=new f(r);try{n.call(t,function(){e.apply(o,arguments)},function(){s.apply(o,arguments)})}catch(e){s.call(o,e)}}):(r.msg=t,r.state=1,r.chain.length>0&&i(u,r))}catch(e){s.call(new f(r),e)}}}).call(t,e)},function(e){s.call(t,e)})}catch(e){s.call(t,e)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var v=e({},"constructor",h,!1);return h.prototype=v,e(v,"__NPO__",0,!1),e(h,"resolve",function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),e(h,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),e(h,"all",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;l(t,e,function(e,t){i[e]=t,++a===o&&n(i)},r)})}),e(h,"race",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t(function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");l(t,e,function(e,t){n(t)},r)})}),h},(n=c)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])}(s={exports:{}},s.exports),s.exports),f=new WeakMap;function d(e,t,n){var r=f.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),f.set(e.element,r)}function h(e,t){return(f.get(e.element)||{})[t]||[]}function v(e,t,n){var r=f.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],f.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),f.set(e.element,r),r[t]&&0===r[t].length}var p=["autopause","autoplay","background","byline","color","controls","dnt","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return p.reduce(function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t},t)}function m(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(r,i){if(!o(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var a="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var u in t)t.hasOwnProperty(u)&&(a+="&".concat(u,"=").concat(encodeURIComponent(t[u])));var c="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;c.open("GET",a,!0),c.onload=function(){if(404!==c.status)if(403!==c.status)try{var t=JSON.parse(c.responseText);if(403===t.domain_status_code)return m(t,n),void i(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){i(e)}else i(new Error("“".concat(e,"” is not embeddable.")));else i(new Error("“".concat(e,"” was not found.")))},c.onerror=function(){var e=c.status?" (".concat(c.status,")"):"";i(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},c.send()})}function w(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function b(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function k(e,t){var n,r=[];if((t=w(t)).event){if("error"===t.event)h(e,t.data.method).forEach(function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),v(e,t.data.method,n)});r=h(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=h(e,t);if(n.length<1)return!1;var r=n.shift();return v(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach(function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}})}var E=new WeakMap,T=new WeakMap,j=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!function(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}(t))throw new TypeError("You must pass either a valid element or a valid id.");var a=t.ownerDocument.defaultView;if("IFRAME"!==t.nodeName){var u=t.querySelector("iframe");u&&(t=u)}if("IFRAME"===t.nodeName&&!o(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(E.has(t))return E.get(t);this.element=t,this.origin="*";var c=new l(function(e,u){var c=function(t){if(o(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=w(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void u(i)}var a=r&&"ready"===r.event,c=r&&"ping"===r.method;if(a||c)return n.element.setAttribute("data-ready","true"),void e();k(n,r)}};if(a.addEventListener?a.addEventListener("message",c,!1):a.attachEvent&&a.attachEvent("onmessage",c),"IFRAME"!==n.element.nodeName){var s=y(t,r);g(i(s),s,t).then(function(e){var r,o,i,a=m(e,t);return n.element=a,n._originalElement=t,r=t,o=a,i=f.get(r),f.set(o,i),f.delete(r),E.set(n.element,n),e}).catch(u)}});return T.set(this,c),E.set(this.element,this),"IFRAME"===this.element.nodeName&&b(this,"ping"),this}var n,a,u;return n=e,(a=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new l(function(r,o){return t.ready().then(function(){d(t,e,{resolve:r,reject:o}),b(t,e,n)}).catch(o)})}},{key:"get",value:function(e){var t=this;return new l(function(n,o){return e=r(e,"get"),t.ready().then(function(){d(t,e,{resolve:n,reject:o}),b(t,e)}).catch(o)})}},{key:"set",value:function(e,t){var n=this;return new l(function(o,i){if(e=r(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then(function(){d(n,e,{resolve:o,reject:i}),b(n,e,t)}).catch(i)})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===h(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),d(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");v(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=T.get(this)||new l(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return l.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new l(function(t){T.delete(e),E.delete(e.element),e._originalElement&&(E.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&e.element.parentNode.removeChild(e.element),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&t(n.prototype,a),u&&t(n,u),e}();n||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=y(e);g(i(t),t,e).then(function(t){return m(t,e)}).catch(n)}catch(e){n(e)}})}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(o(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}}());var _=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var M=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=arguments,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var u in n=Object(o[a]))O.call(n,u)&&(i[u]=n[u]);if(_){r=_(n);for(var c=0;c<r.length;c++)P.call(n,r[c])&&(i[r[c]]=n[r[c]])}}return i},N=0;var x=["play","pause","ended","timeupdate","progress","seeked","texttrackchange","cuechange","cuepoint","volumechange","error","loaded"],A={props:{playerHeight:{default:320},playerWidth:{default:640},options:{default:function(){return{}}},videoId:{required:!0},videoUrl:{default:void 0},loop:{default:!1},autoplay:{default:!1},controls:{default:!0}},render:function(e){return e("div",{attrs:{id:this.elementId}})},watch:{videoId:"update"},data:function(){return{elementId:"vimeo-player-"+(N+=1),player:null}},methods:{update:function(e){return this.player.loadVideo(e)},play:function(){return this.player.play()},pause:function(){return this.player.pause()},mute:function(){return this.player.setVolume(0)},unmute:function(e){return void 0===e&&(e=.5),this.player.setVolume(e)},setEvents:function(){var e=this;this.player.ready().then(function(){e.$emit("ready",e.player)}).catch(function(t){e.$emit("error",t,e.player)}),x.forEach(function(t){return function(e){var t=this;this.player.on(e,function(n){t.$emit(e,n,t.player)})}.call(e,t)})}},mounted:function(){var e={id:this.videoId,width:this.playerWidth,height:this.playerHeight,loop:this.loop,autoplay:this.autoplay,controls:this.controls};this.videoUrl&&(e.url=this.videoUrl),this.player=new j(this.elementId,M(e,this.options)),this.setEvents()},beforeDestroy:function(){this.player.unload()}};function C(e,t){e.component("vimeo-player",A)}C.version="0.1.0","undefined"!=typeof window&&window.Vue&&window.Vue.use(C),e.default=C,e.vueVimeoPlayer=A,Object.defineProperty(e,"__esModule",{value:!0})});
