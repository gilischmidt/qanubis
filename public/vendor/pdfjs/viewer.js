/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
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
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
!function webpackUniversalModuleDefinition(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",[],r):"object"==typeof exports?exports["pdfjs-dist/build/pdf"]=r():t["pdfjs-dist/build/pdf"]=t.pdfjsLib=r()}(this,(function(){return function(t){var r={};function __w_pdfjs_require__(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};t[a].call(o.exports,o,o.exports,__w_pdfjs_require__);o.l=!0;return o.exports}__w_pdfjs_require__.m=t;__w_pdfjs_require__.c=r;__w_pdfjs_require__.d=function(t,r,a){__w_pdfjs_require__.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:a})};__w_pdfjs_require__.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});Object.defineProperty(t,"__esModule",{value:!0})};__w_pdfjs_require__.t=function(t,r){1&r&&(t=__w_pdfjs_require__(t));if(8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);__w_pdfjs_require__.r(a);Object.defineProperty(a,"default",{enumerable:!0,value:t});if(2&r&&"string"!=typeof t)for(var o in t)__w_pdfjs_require__.d(a,o,function(r){return t[r]}.bind(null,o));return a};__w_pdfjs_require__.n=function(t){var r=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t};__w_pdfjs_require__.d(r,"a",r);return r};__w_pdfjs_require__.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)};__w_pdfjs_require__.p="";return __w_pdfjs_require__(__w_pdfjs_require__.s=0)}([function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});Object.defineProperty(r,"addLinkAttributes",{enumerable:!0,get:function get(){return o.addLinkAttributes}});Object.defineProperty(r,"getFilenameFromUrl",{enumerable:!0,get:function get(){return o.getFilenameFromUrl}});Object.defineProperty(r,"LinkTarget",{enumerable:!0,get:function get(){return o.LinkTarget}});Object.defineProperty(r,"loadScript",{enumerable:!0,get:function get(){return o.loadScript}});Object.defineProperty(r,"PDFDateString",{enumerable:!0,get:function get(){return o.PDFDateString}});Object.defineProperty(r,"RenderingCancelledException",{enumerable:!0,get:function get(){return o.RenderingCancelledException}});Object.defineProperty(r,"build",{enumerable:!0,get:function get(){return i.build}});Object.defineProperty(r,"getDocument",{enumerable:!0,get:function get(){return i.getDocument}});Object.defineProperty(r,"LoopbackPort",{enumerable:!0,get:function get(){return i.LoopbackPort}});Object.defineProperty(r,"PDFDataRangeTransport",{enumerable:!0,get:function get(){return i.PDFDataRangeTransport}});Object.defineProperty(r,"PDFWorker",{enumerable:!0,get:function get(){return i.PDFWorker}});Object.defineProperty(r,"version",{enumerable:!0,get:function get(){return i.version}});Object.defineProperty(r,"CMapCompressionType",{enumerable:!0,get:function get(){return l.CMapCompressionType}});Object.defineProperty(r,"createObjectURL",{enumerable:!0,get:function get(){return l.createObjectURL}});Object.defineProperty(r,"createPromiseCapability",{enumerable:!0,get:function get(){return l.createPromiseCapability}});Object.defineProperty(r,"createValidAbsoluteUrl",{enumerable:!0,get:function get(){return l.createValidAbsoluteUrl}});Object.defineProperty(r,"InvalidPDFException",{enumerable:!0,get:function get(){return l.InvalidPDFException}});Object.defineProperty(r,"MissingPDFException",{enumerable:!0,get:function get(){return l.MissingPDFException}});Object.defineProperty(r,"OPS",{enumerable:!0,get:function get(){return l.OPS}});Object.defineProperty(r,"PasswordResponses",{enumerable:!0,get:function get(){return l.PasswordResponses}});Object.defineProperty(r,"PermissionFlag",{enumerable:!0,get:function get(){return l.PermissionFlag}});Object.defineProperty(r,"removeNullCharacters",{enumerable:!0,get:function get(){return l.removeNullCharacters}});Object.defineProperty(r,"shadow",{enumerable:!0,get:function get(){return l.shadow}});Object.defineProperty(r,"UnexpectedResponseException",{enumerable:!0,get:function get(){return l.UnexpectedResponseException}});Object.defineProperty(r,"UNSUPPORTED_FEATURES",{enumerable:!0,get:function get(){return l.UNSUPPORTED_FEATURES}});Object.defineProperty(r,"Util",{enumerable:!0,get:function get(){return l.Util}});Object.defineProperty(r,"VerbosityLevel",{enumerable:!0,get:function get(){return l.VerbosityLevel}});Object.defineProperty(r,"AnnotationLayer",{enumerable:!0,get:function get(){return c.AnnotationLayer}});Object.defineProperty(r,"apiCompatibilityParams",{enumerable:!0,get:function get(){return u.apiCompatibilityParams}});Object.defineProperty(r,"GlobalWorkerOptions",{enumerable:!0,get:function get(){return d.GlobalWorkerOptions}});Object.defineProperty(r,"renderTextLayer",{enumerable:!0,get:function get(){return h.renderTextLayer}});Object.defineProperty(r,"SVGGraphics",{enumerable:!0,get:function get(){return p.SVGGraphics}});var o=a(1),i=a(202),l=a(5),c=a(216),u=a(206),d=a(209),h=a(217),p=a(218);if(a(7).isNodeJS){var m=a(219).PDFNodeStream;(0,i.setPDFNetworkStreamFactory)((function(t){return new m(t)}))}else{var v,g=a(222).PDFNetworkStream;(0,o.isFetchSupported)()&&(v=a(223).PDFFetchStream);(0,i.setPDFNetworkStreamFactory)((function(t){return v&&(0,o.isValidFetchUrl)(t.url)?new v(t):new g(t)}))}},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.addLinkAttributes=function addLinkAttributes(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.url,o=r.target,l=r.rel,c=r.enabled,u=void 0===c||c;(0,i.assert)(a&&"string"==typeof a,'addLinkAttributes: A valid "url" parameter must provided.');var d=(0,i.removeNullCharacters)(a);if(u)t.href=t.title=d;else{t.href="";t.title="Disabled: ".concat(d);t.onclick=function(){return!1}}var h="";switch(o){case g.NONE:break;case g.SELF:h="_self";break;case g.BLANK:h="_blank";break;case g.PARENT:h="_parent";break;case g.TOP:h="_top"}t.target=h;t.rel="string"==typeof l?l:"noopener noreferrer nofollow"};r.getFilenameFromUrl=function getFilenameFromUrl(t){var r=t.indexOf("#"),a=t.indexOf("?"),o=Math.min(r>0?r:t.length,a>0?a:t.length);return t.substring(t.lastIndexOf("/",o)+1,o)};r.isFetchSupported=isFetchSupported;r.isValidFetchUrl=isValidFetchUrl;r.loadScript=function loadScript(t){return new Promise((function(r,a){var o=document.createElement("script");o.src=t;o.onload=r;o.onerror=function(){a(new Error("Cannot load script at: ".concat(o.src)))};(document.head||document.documentElement).appendChild(o)}))};r.deprecated=function deprecated(t){console.log("Deprecated API usage: "+t)};r.PDFDateString=r.StatTimer=r.DOMSVGFactory=r.DOMCMapReaderFactory=r.BaseCMapReaderFactory=r.DOMCanvasFactory=r.BaseCanvasFactory=r.DEFAULT_LINK_REL=r.LinkTarget=r.RenderingCancelledException=r.PageViewport=void 0;var o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(a(2)),i=a(5);function _createForOfIteratorHelper(t,r){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function F(){};return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function s(){a=t[Symbol.iterator]()},n:function n(){var t=a.next();c=t.done;return t},e:function e(t){u=!0;l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}});r&&_setPrototypeOf(t,r)}function _setPrototypeOf(t,r){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,r){t.__proto__=r;return t})(t,r)}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=_getPrototypeOf(t);if(r){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}r.DEFAULT_LINK_REL="noopener noreferrer nofollow";var l="http://www.w3.org/2000/svg",c=function(){function BaseCanvasFactory(){_classCallCheck(this,BaseCanvasFactory);this.constructor===BaseCanvasFactory&&(0,i.unreachable)("Cannot initialize BaseCanvasFactory.")}_createClass(BaseCanvasFactory,[{key:"create",value:function create(t,r){(0,i.unreachable)("Abstract method `create` called.")}},{key:"reset",value:function reset(t,r,a){if(!t.canvas)throw new Error("Canvas is not specified");if(r<=0||a<=0)throw new Error("Invalid canvas size");t.canvas.width=r;t.canvas.height=a}},{key:"destroy",value:function destroy(t){if(!t.canvas)throw new Error("Canvas is not specified");t.canvas.width=0;t.canvas.height=0;t.canvas=null;t.context=null}}]);return BaseCanvasFactory}();r.BaseCanvasFactory=c;var u=function(t){_inherits(DOMCanvasFactory,t);var r=_createSuper(DOMCanvasFactory);function DOMCanvasFactory(){var t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=a.ownerDocument,i=void 0===o?globalThis.document:o;_classCallCheck(this,DOMCanvasFactory);(t=r.call(this))._document=i;return t}_createClass(DOMCanvasFactory,[{key:"create",value:function create(t,r){if(t<=0||r<=0)throw new Error("Invalid canvas size");var a=this._document.createElement("canvas"),o=a.getContext("2d");a.width=t;a.height=r;return{canvas:a,context:o}}}]);return DOMCanvasFactory}(c);r.DOMCanvasFactory=u;var d=function(){function BaseCMapReaderFactory(t){var r=t.baseUrl,a=void 0===r?null:r,o=t.isCompressed,l=void 0!==o&&o;_classCallCheck(this,BaseCMapReaderFactory);this.constructor===BaseCMapReaderFactory&&(0,i.unreachable)("Cannot initialize BaseCMapReaderFactory.");this.baseUrl=a;this.isCompressed=l}_createClass(BaseCMapReaderFactory,[{key:"fetch",value:(t=_asyncToGenerator(o.default.mark((function _callee(t){var r,a,l,c=this;return o.default.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:r=t.name;if(this.baseUrl){o.next=3;break}throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');case 3:if(r){o.next=5;break}throw new Error("CMap name must be specified.");case 5:a=this.baseUrl+r+(this.isCompressed?".bcmap":"");l=this.isCompressed?i.CMapCompressionType.BINARY:i.CMapCompressionType.NONE;return o.abrupt("return",this._fetchData(a,l).catch((function(t){throw new Error("Unable to load ".concat(c.isCompressed?"binary ":"","CMap at: ").concat(a))})));case 8:case"end":return o.stop()}}),_callee,this)}))),function fetch(r){return t.apply(this,arguments)})},{key:"_fetchData",value:function _fetchData(t,r){(0,i.unreachable)("Abstract method `_fetchData` called.")}}]);var t;return BaseCMapReaderFactory}();r.BaseCMapReaderFactory=d;var h=function(t){_inherits(DOMCMapReaderFactory,t);var r=_createSuper(DOMCMapReaderFactory);function DOMCMapReaderFactory(){_classCallCheck(this,DOMCMapReaderFactory);return r.apply(this,arguments)}_createClass(DOMCMapReaderFactory,[{key:"_fetchData",value:function _fetchData(t,r){var a=this;return isFetchSupported()&&isValidFetchUrl(t,document.baseURI)?fetch(t).then(function(){var t=_asyncToGenerator(o.default.mark((function _callee2(t){var l;return o.default.wrap((function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:if(t.ok){o.next=2;break}throw new Error(t.statusText);case 2:if(!a.isCompressed){o.next=10;break}o.t0=Uint8Array;o.next=6;return t.arrayBuffer();case 6:o.t1=o.sent;l=new o.t0(o.t1);o.next=15;break;case 10:o.t2=i.stringToBytes;o.next=13;return t.text();case 13:o.t3=o.sent;l=(0,o.t2)(o.t3);case 15:return o.abrupt("return",{cMapData:l,compressionType:r});case 16:case"end":return o.stop()}}),_callee2)})));return function(r){return t.apply(this,arguments)}}()):new Promise((function(o,l){var c=new XMLHttpRequest;c.open("GET",t,!0);a.isCompressed&&(c.responseType="arraybuffer");c.onreadystatechange=function(){if(c.readyState===XMLHttpRequest.DONE){if(200===c.status||0===c.status){var t;a.isCompressed&&c.response?t=new Uint8Array(c.response):!a.isCompressed&&c.responseText&&(t=(0,i.stringToBytes)(c.responseText));if(t){o({cMapData:t,compressionType:r});return}}l(new Error(c.statusText))}};c.send(null)}))}}]);return DOMCMapReaderFactory}(d);r.DOMCMapReaderFactory=h;var p=function(){function DOMSVGFactory(){_classCallCheck(this,DOMSVGFactory)}_createClass(DOMSVGFactory,[{key:"create",value:function create(t,r){(0,i.assert)(t>0&&r>0,"Invalid SVG dimensions");var a=document.createElementNS(l,"svg:svg");a.setAttribute("version","1.1");a.setAttribute("width",t+"px");a.setAttribute("height",r+"px");a.setAttribute("preserveAspectRatio","none");a.setAttribute("viewBox","0 0 "+t+" "+r);return a}},{key:"createElement",value:function createElement(t){(0,i.assert)("string"==typeof t,"Invalid SVG element type");return document.createElementNS(l,t)}}]);return DOMSVGFactory}();r.DOMSVGFactory=p;var m=function(){function PageViewport(t){var r=t.viewBox,a=t.scale,o=t.rotation,i=t.offsetX,l=void 0===i?0:i,c=t.offsetY,u=void 0===c?0:c,d=t.dontFlip,h=void 0!==d&&d;_classCallCheck(this,PageViewport);this.viewBox=r;this.scale=a;this.rotation=o;this.offsetX=l;this.offsetY=u;var p,m,v,g,y,b,_,S,C=(r[2]+r[0])/2,A=(r[3]+r[1])/2;switch(o=(o%=360)<0?o+360:o){case 180:p=-1;m=0;v=0;g=1;break;case 90:p=0;m=1;v=1;g=0;break;case 270:p=0;m=-1;v=-1;g=0;break;case 0:p=1;m=0;v=0;g=-1;break;default:throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")}if(h){v=-v;g=-g}if(0===p){y=Math.abs(A-r[1])*a+l;b=Math.abs(C-r[0])*a+u;_=Math.abs(r[3]-r[1])*a;S=Math.abs(r[2]-r[0])*a}else{y=Math.abs(C-r[0])*a+l;b=Math.abs(A-r[1])*a+u;_=Math.abs(r[2]-r[0])*a;S=Math.abs(r[3]-r[1])*a}this.transform=[p*a,m*a,v*a,g*a,y-p*a*C-v*a*A,b-m*a*C-g*a*A];this.width=_;this.height=S}_createClass(PageViewport,[{key:"clone",value:function clone(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.scale,a=void 0===r?this.scale:r,o=t.rotation,i=void 0===o?this.rotation:o,l=t.offsetX,c=void 0===l?this.offsetX:l,u=t.offsetY,d=void 0===u?this.offsetY:u,h=t.dontFlip,p=void 0!==h&&h;return new PageViewport({viewBox:this.viewBox.slice(),scale:a,rotation:i,offsetX:c,offsetY:d,dontFlip:p})}},{key:"convertToViewportPoint",value:function convertToViewportPoint(t,r){return i.Util.applyTransform([t,r],this.transform)}},{key:"convertToViewportRectangle",value:function convertToViewportRectangle(t){var r=i.Util.applyTransform([t[0],t[1]],this.transform),a=i.Util.applyTransform([t[2],t[3]],this.transform);return[r[0],r[1],a[0],a[1]]}},{key:"convertToPdfPoint",value:function convertToPdfPoint(t,r){return i.Util.applyInverseTransform([t,r],this.transform)}}]);return PageViewport}();r.PageViewport=m;var v=function(t){_inherits(RenderingCancelledException,t);var r=_createSuper(RenderingCancelledException);function RenderingCancelledException(t,a){var o;_classCallCheck(this,RenderingCancelledException);(o=r.call(this,t)).type=a;return o}return RenderingCancelledException}(i.BaseException);r.RenderingCancelledException=v;var g={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4};r.LinkTarget=g;var y,b=function(){function StatTimer(){_classCallCheck(this,StatTimer);this.started=Object.create(null);this.times=[]}_createClass(StatTimer,[{key:"time",value:function time(t){t in this.started&&(0,i.warn)("Timer is already running for ".concat(t));this.started[t]=Date.now()}},{key:"timeEnd",value:function timeEnd(t){t in this.started||(0,i.warn)("Timer has not been started for ".concat(t));this.times.push({name:t,start:this.started[t],end:Date.now()});delete this.started[t]}},{key:"toString",value:function toString(){var t,r=[],a=0,o=_createForOfIteratorHelper(this.times);try{for(o.s();!(t=o.n()).done;){var i=t.value.name;i.length>a&&(a=i.length)}}catch(t){o.e(t)}finally{o.f()}var l,c=_createForOfIteratorHelper(this.times);try{for(c.s();!(l=c.n()).done;){var u=l.value,d=u.end-u.start;r.push("".concat(u.name.padEnd(a)," ").concat(d,"ms\n"))}}catch(t){c.e(t)}finally{c.f()}return r.join("")}}]);return StatTimer}();r.StatTimer=b;function isFetchSupported(){return"undefined"!=typeof fetch&&"undefined"!=typeof Response&&"body"in Response.prototype&&"undefined"!=typeof ReadableStream}function isValidFetchUrl(t,r){try{var a=(r?new URL(t,r):new URL(t)).protocol;return"http:"===a||"https:"===a}catch(t){return!1}}var _=function(){function PDFDateString(){_classCallCheck(this,PDFDateString)}_createClass(PDFDateString,null,[{key:"toDateObject",value:function toDateObject(t){if(!t||!(0,i.isString)(t))return null;y||(y=new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));var r=y.exec(t);if(!r)return null;var a=parseInt(r[1],10),o=parseInt(r[2],10);o=o>=1&&o<=12?o-1:0;var l=parseInt(r[3],10);l=l>=1&&l<=31?l:1;var c=parseInt(r[4],10);c=c>=0&&c<=23?c:0;var u=parseInt(r[5],10);u=u>=0&&u<=59?u:0;var d=parseInt(r[6],10);d=d>=0&&d<=59?d:0;var h=r[7]||"Z",p=parseInt(r[8],10);p=p>=0&&p<=23?p:0;var m=parseInt(r[9],10)||0;m=m>=0&&m<=59?m:0;if("-"===h){c+=p;u+=m}else if("+"===h){c-=p;u-=m}return new Date(Date.UTC(a,o,l,c,u,d))}}]);return PDFDateString}();r.PDFDateString=_},function(t,r,a){"use strict";t.exports=a(3)},function(t,r,a){"use strict";(function(t){function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(t){var r=Object.prototype,a=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function define(t,r,a){Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0});return t[r]}try{define({},"")}catch(t){define=function define(t,r,a){return t[r]=a}}function wrap(t,r,a,o){var i=r&&r.prototype instanceof Generator?r:Generator,l=Object.create(i.prototype),c=new Context(o||[]);l._invoke=function makeInvokeMethod(t,r,a){var o="suspendedStart";return function invoke(i,l){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===i)throw l;return doneResult()}a.method=i;a.arg=l;for(;;){var c=a.delegate;if(c){var d=maybeInvokeDelegate(c,a);if(d){if(d===u)continue;return d}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===o){o="completed";throw a.arg}a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);o="executing";var h=tryCatch(t,r,a);if("normal"===h.type){o=a.done?"completed":"suspendedYield";if(h.arg===u)continue;return{value:h.arg,done:a.done}}if("throw"===h.type){o="completed";a.method="throw";a.arg=h.arg}}}}(t,a,c);return l}t.wrap=wrap;function tryCatch(t,r,a){try{return{type:"normal",arg:t.call(r,a)}}catch(t){return{type:"throw",arg:t}}}var u={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var d={};d[i]=function(){return this};var h=Object.getPrototypeOf,p=h&&h(h(values([])));p&&p!==r&&a.call(p,i)&&(d=p);var m=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(d);GeneratorFunction.prototype=m.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunction.displayName=define(GeneratorFunctionPrototype,c,"GeneratorFunction");function defineIteratorMethods(t){["next","throw","return"].forEach((function(r){define(t,r,(function(t){return this._invoke(r,t)}))}))}t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===GeneratorFunction||"GeneratorFunction"===(r.displayName||r.name))};t.mark=function(t){if(Object.setPrototypeOf)Object.setPrototypeOf(t,GeneratorFunctionPrototype);else{t.__proto__=GeneratorFunctionPrototype;define(t,c,"GeneratorFunction")}t.prototype=Object.create(m);return t};t.awrap=function(t){return{__await:t}};function AsyncIterator(t,r){var o;this._invoke=function enqueue(i,l){function callInvokeWithMethodAndArg(){return new r((function(o,c){!function invoke(o,i,l,c){var u=tryCatch(t[o],t,i);if("throw"!==u.type){var d=u.arg,h=d.value;return h&&"object"===_typeof(h)&&a.call(h,"__await")?r.resolve(h.__await).then((function(t){invoke("next",t,l,c)}),(function(t){invoke("throw",t,l,c)})):r.resolve(h).then((function(t){d.value=t;l(d)}),(function(t){return invoke("throw",t,l,c)}))}c(u.arg)}(i,l,o,c)}))}return o=o?o.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[l]=function(){return this};t.AsyncIterator=AsyncIterator;t.async=function(r,a,o,i,l){void 0===l&&(l=Promise);var c=new AsyncIterator(wrap(r,a,o,i),l);return t.isGeneratorFunction(a)?c:c.next().then((function(t){return t.done?t.value:c.next()}))};function maybeInvokeDelegate(t,r){var a=t.iterator[r.method];if(void 0===a){r.delegate=null;if("throw"===r.method){if(t.iterator.return){r.method="return";r.arg=void 0;maybeInvokeDelegate(t,r);if("throw"===r.method)return u}r.method="throw";r.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var o=tryCatch(a,t.iterator,r.arg);if("throw"===o.type){r.method="throw";r.arg=o.arg;r.delegate=null;return u}var i=o.arg;if(!i){r.method="throw";r.arg=new TypeError("iterator result is not an object");r.delegate=null;return u}if(!i.done)return i;r[t.resultName]=i.value;r.next=t.nextLoc;if("return"!==r.method){r.method="next";r.arg=void 0}r.delegate=null;return u}defineIteratorMethods(m);define(m,c,"Generator");m[i]=function(){return this};m.toString=function(){return"[object Generator]"};function pushTryEntry(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]);if(2 in t){r.finallyLoc=t[2];r.afterLoc=t[3]}this.tryEntries.push(r)}function resetTryEntry(t){var r=t.completion||{};r.type="normal";delete r.arg;t.completion=r}function Context(t){this.tryEntries=[{tryLoc:"root"}];t.forEach(pushTryEntry,this);this.reset(!0)}t.keys=function(t){var r=[];for(var a in t)r.push(a);r.reverse();return function next(){for(;r.length;){var a=r.pop();if(a in t){next.value=a;next.done=!1;return next}}next.done=!0;return next}};function values(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,l=function next(){for(;++o<t.length;)if(a.call(t,o)){next.value=t[o];next.done=!1;return next}next.value=void 0;next.done=!0;return next};return l.next=l}}return{next:doneResult}}t.values=values;function doneResult(){return{value:void 0,done:!0}}Context.prototype={constructor:Context,reset:function reset(t){this.prev=0;this.next=0;this.sent=this._sent=void 0;this.done=!1;this.delegate=null;this.method="next";this.arg=void 0;this.tryEntries.forEach(resetTryEntry);if(!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(t){if(this.done)throw t;var r=this;function handle(a,o){l.type="throw";l.arg=t;r.next=a;if(o){r.method="next";r.arg=void 0}return!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,r){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var l=i;break}}l&&("break"===t||"continue"===t)&&l.tryLoc<=r&&r<=l.finallyLoc&&(l=null);var c=l?l.completion:{};c.type=t;c.arg=r;if(l){this.method="next";this.next=l.finallyLoc;return u}return this.complete(c)},complete:function complete(t,r){if("throw"===t.type)throw t.arg;if("break"===t.type||"continue"===t.type)this.next=t.arg;else if("return"===t.type){this.rval=this.arg=t.arg;this.method="return";this.next="end"}else"normal"===t.type&&r&&(this.next=r);return u},finish:function finish(t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.finallyLoc===t){this.complete(a.completion,a.afterLoc);resetTryEntry(a);return u}}},catch:function _catch(t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc===t){var o=a.completion;if("throw"===o.type){var i=o.arg;resetTryEntry(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(t,r,a){this.delegate={iterator:values(t),resultName:r,nextLoc:a};"next"===this.method&&(this.arg=void 0);return u}};return t}("object"===_typeof(t)?t.exports:{});try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}).call(this,a(4)(t))},function(t,r,a){"use strict";t.exports=function(t){if(!t.webpackPolyfill){t.deprecate=function(){};t.paths=[];t.children||(t.children=[]);Object.defineProperty(t,"loaded",{enumerable:!0,get:function get(){return t.l}});Object.defineProperty(t,"id",{enumerable:!0,get:function get(){return t.i}});t.webpackPolyfill=1}return t}},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.arrayByteLength=arrayByteLength;r.arraysToBytes=function arraysToBytes(t){var r=t.length;if(1===r&&t[0]instanceof Uint8Array)return t[0];for(var a=0,o=0;o<r;o++)a+=arrayByteLength(t[o]);for(var i=0,l=new Uint8Array(a),c=0;c<r;c++){var u=t[c];u instanceof Uint8Array||(u="string"==typeof u?stringToBytes(u):new Uint8Array(u));var d=u.byteLength;l.set(u,i);i+=d}return l};r.assert=assert;r.bytesToString=function bytesToString(t){assert(null!==t&&"object"===_typeof(t)&&void 0!==t.length,"Invalid argument for bytesToString");var r=t.length;if(r<8192)return String.fromCharCode.apply(null,t);for(var a=[],o=0;o<r;o+=8192){var i=Math.min(o+8192,r),l=t.subarray(o,i);a.push(String.fromCharCode.apply(null,l))}return a.join("")};r.createPromiseCapability=function createPromiseCapability(){var t=Object.create(null),r=!1;Object.defineProperty(t,"settled",{get:function get(){return r}});t.promise=new Promise((function(a,o){t.resolve=function(t){r=!0;a(t)};t.reject=function(t){r=!0;o(t)}}));return t};r.escapeString=function escapeString(t){return t.replace(/([\(\)\\])/g,"\\$1")};r.getModificationDate=function getModificationDate(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()),r=[t.getUTCFullYear().toString(),(t.getUTCMonth()+1).toString().padStart(2,"0"),(t.getUTCDate()+1).toString().padStart(2,"0"),t.getUTCHours().toString().padStart(2,"0"),t.getUTCMinutes().toString().padStart(2,"0"),t.getUTCSeconds().toString().padStart(2,"0")];return r.join("")};r.getVerbosityLevel=function getVerbosityLevel(){return i};r.info=function info(t){i>=o.INFOS&&console.log("Info: ".concat(t))};r.isArrayBuffer=function isArrayBuffer(t){return"object"===_typeof(t)&&null!==t&&void 0!==t.byteLength};r.isArrayEqual=function isArrayEqual(t,r){if(t.length!==r.length)return!1;return t.every((function(t,a){return t===r[a]}))};r.isBool=function isBool(t){return"boolean"==typeof t};r.isNum=function isNum(t){return"number"==typeof t};r.isString=function isString(t){return"string"==typeof t};r.isSameOrigin=function isSameOrigin(t,r){var a;try{if(!(a=new URL(t)).origin||"null"===a.origin)return!1}catch(t){return!1}var o=new URL(r,a);return a.origin===o.origin};r.createValidAbsoluteUrl=function createValidAbsoluteUrl(t,r){if(!t)return null;try{var a=r?new URL(t,r):new URL(t);if(function _isValidProtocol(t){if(!t)return!1;switch(t.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0;default:return!1}}(a))return a}catch(t){}return null};r.removeNullCharacters=function removeNullCharacters(t){if("string"!=typeof t){warn("The argument for removeNullCharacters must be a string.");return t}return t.replace(g,"")};r.setVerbosityLevel=function setVerbosityLevel(t){Number.isInteger(t)&&(i=t)};r.shadow=shadow;r.string32=function string32(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t)};r.stringToBytes=stringToBytes;r.stringToPDFString=function stringToPDFString(t){var r=t.length,a=[];if("þ"===t[0]&&"ÿ"===t[1])for(var o=2;o<r;o+=2)a.push(String.fromCharCode(t.charCodeAt(o)<<8|t.charCodeAt(o+1)));else if("ÿ"===t[0]&&"þ"===t[1])for(var i=2;i<r;i+=2)a.push(String.fromCharCode(t.charCodeAt(i+1)<<8|t.charCodeAt(i)));else for(var l=0;l<r;++l){var c=C[t.charCodeAt(l)];a.push(c?String.fromCharCode(c):t.charAt(l))}return a.join("")};r.stringToUTF8String=function stringToUTF8String(t){return decodeURIComponent(escape(t))};r.utf8StringToString=function utf8StringToString(t){return unescape(encodeURIComponent(t))};r.warn=warn;r.unreachable=unreachable;r.IsEvalSupportedCached=r.IsLittleEndianCached=r.createObjectURL=r.FormatError=r.Util=r.UnknownErrorException=r.UnexpectedResponseException=r.TextRenderingMode=r.StreamType=r.PermissionFlag=r.PasswordResponses=r.PasswordException=r.MissingPDFException=r.InvalidPDFException=r.AbortException=r.CMapCompressionType=r.ImageKind=r.FontType=r.AnnotationType=r.AnnotationStateModelType=r.AnnotationReviewState=r.AnnotationReplyType=r.AnnotationMarkedState=r.AnnotationFlag=r.AnnotationFieldFlag=r.AnnotationBorderStyleType=r.UNSUPPORTED_FEATURES=r.VerbosityLevel=r.OPS=r.IDENTITY_MATRIX=r.FONT_IDENTITY_MATRIX=r.BaseException=void 0;a(6);function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}});r&&_setPrototypeOf(t,r)}function _setPrototypeOf(t,r){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,r){t.__proto__=r;return t})(t,r)}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=_getPrototypeOf(t);if(r){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.IDENTITY_MATRIX=[1,0,0,1,0,0];r.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0];r.PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048};r.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4};r.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3};r.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26};r.AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"};r.AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"};r.AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"};r.AnnotationReplyType={GROUP:"Group",REPLY:"R"};r.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512};r.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864};r.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5};r.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"};r.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"};var o={ERRORS:0,WARNINGS:1,INFOS:5};r.VerbosityLevel=o;r.CMapCompressionType={NONE:0,BINARY:1,STREAM:2};r.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91};r.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent"};r.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};var i=o.WARNINGS;function warn(t){i>=o.WARNINGS&&console.log("Warning: ".concat(t))}function unreachable(t){throw new Error(t)}function assert(t,r){t||unreachable(r)}function shadow(t,r,a){Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!1});return a}var l=function BaseExceptionClosure(){function BaseException(t){this.constructor===BaseException&&unreachable("Cannot initialize BaseException.");this.message=t;this.name=this.constructor.name}BaseException.prototype=new Error;BaseException.constructor=BaseException;return BaseException}();r.BaseException=l;var c=function(t){_inherits(PasswordException,t);var r=_createSuper(PasswordException);function PasswordException(t,a){var o;_classCallCheck(this,PasswordException);(o=r.call(this,t)).code=a;return o}return PasswordException}(l);r.PasswordException=c;var u=function(t){_inherits(UnknownErrorException,t);var r=_createSuper(UnknownErrorException);function UnknownErrorException(t,a){var o;_classCallCheck(this,UnknownErrorException);(o=r.call(this,t)).details=a;return o}return UnknownErrorException}(l);r.UnknownErrorException=u;var d=function(t){_inherits(InvalidPDFException,t);var r=_createSuper(InvalidPDFException);function InvalidPDFException(){_classCallCheck(this,InvalidPDFException);return r.apply(this,arguments)}return InvalidPDFException}(l);r.InvalidPDFException=d;var h=function(t){_inherits(MissingPDFException,t);var r=_createSuper(MissingPDFException);function MissingPDFException(){_classCallCheck(this,MissingPDFException);return r.apply(this,arguments)}return MissingPDFException}(l);r.MissingPDFException=h;var p=function(t){_inherits(UnexpectedResponseException,t);var r=_createSuper(UnexpectedResponseException);function UnexpectedResponseException(t,a){var o;_classCallCheck(this,UnexpectedResponseException);(o=r.call(this,t)).status=a;return o}return UnexpectedResponseException}(l);r.UnexpectedResponseException=p;var m=function(t){_inherits(FormatError,t);var r=_createSuper(FormatError);function FormatError(){_classCallCheck(this,FormatError);return r.apply(this,arguments)}return FormatError}(l);r.FormatError=m;var v=function(t){_inherits(AbortException,t);var r=_createSuper(AbortException);function AbortException(){_classCallCheck(this,AbortException);return r.apply(this,arguments)}return AbortException}(l);r.AbortException=v;var g=/\x00/g;function stringToBytes(t){assert("string"==typeof t,"Invalid argument for stringToBytes");for(var r=t.length,a=new Uint8Array(r),o=0;o<r;++o)a[o]=255&t.charCodeAt(o);return a}function arrayByteLength(t){if(void 0!==t.length)return t.length;assert(void 0!==t.byteLength,"arrayByteLength - invalid argument.");return t.byteLength}var y={get value(){return shadow(this,"value",function isLittleEndian(){var t=new Uint8Array(4);t[0]=1;return 1===new Uint32Array(t.buffer,0,1)[0]}())}};r.IsLittleEndianCached=y;var b={get value(){return shadow(this,"value",function isEvalSupported(){try{new Function("");return!0}catch(t){return!1}}())}};r.IsEvalSupportedCached=b;var _=["rgb(",0,",",0,",",0,")"],S=function(){function Util(){_classCallCheck(this,Util)}!function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}(Util,null,[{key:"makeCssRgb",value:function makeCssRgb(t,r,a){_[1]=t;_[3]=r;_[5]=a;return _.join("")}},{key:"transform",value:function transform(t,r){return[t[0]*r[0]+t[2]*r[1],t[1]*r[0]+t[3]*r[1],t[0]*r[2]+t[2]*r[3],t[1]*r[2]+t[3]*r[3],t[0]*r[4]+t[2]*r[5]+t[4],t[1]*r[4]+t[3]*r[5]+t[5]]}},{key:"applyTransform",value:function applyTransform(t,r){return[t[0]*r[0]+t[1]*r[2]+r[4],t[0]*r[1]+t[1]*r[3]+r[5]]}},{key:"applyInverseTransform",value:function applyInverseTransform(t,r){var a=r[0]*r[3]-r[1]*r[2];return[(t[0]*r[3]-t[1]*r[2]+r[2]*r[5]-r[4]*r[3])/a,(-t[0]*r[1]+t[1]*r[0]+r[4]*r[1]-r[5]*r[0])/a]}},{key:"getAxialAlignedBoundingBox",value:function getAxialAlignedBoundingBox(t,r){var a=Util.applyTransform(t,r),o=Util.applyTransform(t.slice(2,4),r),i=Util.applyTransform([t[0],t[3]],r),l=Util.applyTransform([t[2],t[1]],r);return[Math.min(a[0],o[0],i[0],l[0]),Math.min(a[1],o[1],i[1],l[1]),Math.max(a[0],o[0],i[0],l[0]),Math.max(a[1],o[1],i[1],l[1])]}},{key:"inverseTransform",value:function inverseTransform(t){var r=t[0]*t[3]-t[1]*t[2];return[t[3]/r,-t[1]/r,-t[2]/r,t[0]/r,(t[2]*t[5]-t[4]*t[3])/r,(t[4]*t[1]-t[5]*t[0])/r]}},{key:"apply3dTransform",value:function apply3dTransform(t,r){return[t[0]*r[0]+t[1]*r[1]+t[2]*r[2],t[3]*r[0]+t[4]*r[1]+t[5]*r[2],t[6]*r[0]+t[7]*r[1]+t[8]*r[2]]}},{key:"singularValueDecompose2dScale",value:function singularValueDecompose2dScale(t){var r=[t[0],t[2],t[1],t[3]],a=t[0]*r[0]+t[1]*r[2],o=t[0]*r[1]+t[1]*r[3],i=t[2]*r[0]+t[3]*r[2],l=t[2]*r[1]+t[3]*r[3],c=(a+l)/2,u=Math.sqrt((a+l)*(a+l)-4*(a*l-i*o))/2,d=c+u||1,h=c-u||1;return[Math.sqrt(d),Math.sqrt(h)]}},{key:"normalizeRect",value:function normalizeRect(t){var r=t.slice(0);if(t[0]>t[2]){r[0]=t[2];r[2]=t[0]}if(t[1]>t[3]){r[1]=t[3];r[3]=t[1]}return r}},{key:"intersect",value:function intersect(t,r){function compare(t,r){return t-r}var a=[t[0],t[2],r[0],r[2]].sort(compare),o=[t[1],t[3],r[1],r[3]].sort(compare),i=[];t=Util.normalizeRect(t);r=Util.normalizeRect(r);if(!(a[0]===t[0]&&a[1]===r[0]||a[0]===r[0]&&a[1]===t[0]))return null;i[0]=a[1];i[2]=a[2];if(!(o[0]===t[1]&&o[1]===r[1]||o[0]===r[1]&&o[1]===t[1]))return null;i[1]=o[1];i[3]=o[2];return i}}]);return Util}();r.Util=S;var C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364];var A=function createObjectURLClosure(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return function createObjectURL(r,a){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!o&&URL.createObjectURL){var i=new Blob([r],{type:a});return URL.createObjectURL(i)}for(var l="data:".concat(a,";base64,"),c=0,u=r.length;c<u;c+=3){var d=255&r[c],h=255&r[c+1],p=255&r[c+2],m=d>>2,v=(3&d)<<4|h>>4,g=c+1<u?(15&h)<<2|p>>6:64,y=c+2<u?63&p:64;l+=t[m]+t[v]+t[g]+t[y]}return l}}();r.createObjectURL=A},function(t,r,a){"use strict";var o=a(7);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}if("undefined"==typeof globalThis||!globalThis._pdfjsCompatibilityChecked){"undefined"!=typeof globalThis&&globalThis.Math===Math||(globalThis=a(8));globalThis._pdfjsCompatibilityChecked=!0;var i="object"===("undefined"==typeof window?"undefined":_typeof(window))&&"object"===("undefined"==typeof document?"undefined":_typeof(document)),l="undefined"!=typeof navigator&&navigator.userAgent||"",c=/Trident/.test(l);!function checkNodeBtoa(){!globalThis.btoa&&o.isNodeJS&&(globalThis.btoa=function(t){return Buffer.from(t,"binary").toString("base64")})}();!function checkNodeAtob(){!globalThis.atob&&o.isNodeJS&&(globalThis.atob=function(t){return Buffer.from(t,"base64").toString("binary")})}();!function checkChildNodeRemove(){i&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();!function checkDOMTokenListAddRemove(){if(i&&!o.isNodeJS){var t=document.createElement("div");t.classList.add("testOne","testTwo");if(!0!==t.classList.contains("testOne")||!0!==t.classList.contains("testTwo")){var r=DOMTokenList.prototype.add,a=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];for(var i=0,l=a;i<l.length;i++){var c=l[i];r.call(this,c)}};DOMTokenList.prototype.remove=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];for(var i=0,l=r;i<l.length;i++){var c=l[i];a.call(this,c)}}}}}();!function checkDOMTokenListToggle(){if(i&&!o.isNodeJS){!1!==document.createElement("div").classList.toggle("test",0)&&(DOMTokenList.prototype.toggle=function(t){var r=arguments.length>1?!!arguments[1]:!this.contains(t);return this[r?"add":"remove"](t),r})}}();!function checkWindowHistoryPushStateReplaceState(){if(i&&c){var t=window.history.pushState,r=window.history.replaceState;window.history.pushState=function(r,a,o){var i=void 0===o?[r,a]:[r,a,o];t.apply(this,i)};window.history.replaceState=function(t,a,o){var i=void 0===o?[t,a]:[t,a,o];r.apply(this,i)}}}();!function checkStringStartsWith(){String.prototype.startsWith||a(53)}();!function checkStringEndsWith(){String.prototype.endsWith||a(64)}();!function checkStringIncludes(){String.prototype.includes||a(66)}();!function checkArrayIncludes(){Array.prototype.includes||a(68)}();!function checkArrayFrom(){Array.from||a(76)}();!function checkObjectAssign(){Object.assign||a(98)}();!function checkObjectFromEntries(){Object.fromEntries||a(101)}();!function checkMathLog2(){Math.log2||(Math.log2=a(105))}();!function checkNumberIsNaN(){Number.isNaN||(Number.isNaN=a(107))}();!function checkNumberIsInteger(){Number.isInteger||(Number.isInteger=a(109))}();!function checkTypedArraySlice(){Uint8Array.prototype.slice||a(112)}();!function checkPromise(){globalThis.Promise&&globalThis.Promise.allSettled||(globalThis.Promise=a(117))}();!function checkURL(){globalThis.URL=a(138)}();!function checkReadableStream(){var t=!1;if("undefined"!=typeof ReadableStream)try{new ReadableStream({start:function start(t){t.close()}});t=!0}catch(t){}t||(globalThis.ReadableStream=a(145).ReadableStream)}();!function checkMapEntries(){globalThis.Map&&globalThis.Map.prototype.entries||(globalThis.Map=a(146))}();!function checkSetEntries(){globalThis.Set&&globalThis.Set.prototype.entries||(globalThis.Set=a(153))}();!function checkWeakMap(){globalThis.WeakMap||(globalThis.WeakMap=a(155))}();!function checkWeakSet(){globalThis.WeakSet||(globalThis.WeakSet=a(161))}();!function checkStringCodePointAt(){String.prototype.codePointAt||a(163)}();!function checkStringFromCodePoint(){String.fromCodePoint||(String.fromCodePoint=a(165))}();!function checkSymbol(){globalThis.Symbol||a(167)}();!function checkStringPadStart(){String.prototype.padStart||a(190)}();!function checkStringPadEnd(){String.prototype.padEnd||a(195)}();!function checkObjectValues(){Object.values||(Object.values=a(197))}();!function checkObjectEntries(){Object.entries||(Object.entries=a(200))}()}},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.isNodeJS=void 0;function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=!("object"!==("undefined"==typeof process?"undefined":_typeof(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type);r.isNodeJS=o},function(t,r,a){a(9);t.exports=a(11)},function(t,r,a){a(10)({global:!0},{globalThis:a(11)})},function(t,r,a){var o=a(11),i=a(12).f,l=a(26),c=a(29),u=a(30),d=a(40),h=a(52);t.exports=function(t,r){var a,p,m,v,g,y=t.target,b=t.global,_=t.stat;if(a=b?o:_?o[y]||u(y,{}):(o[y]||{}).prototype)for(p in r){v=r[p];m=t.noTargetGet?(g=i(a,p))&&g.value:a[p];if(!h(b?p:y+(_?".":"#")+p,t.forced)&&void 0!==m){if(typeof v==typeof m)continue;d(v,m)}(t.sham||m&&m.sham)&&l(v,"sham",!0);c(a,p,v,t)}}},function(t,r){var check=function(t){return t&&t.Math==Math&&t};t.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof global&&global)||Function("return this")()},function(t,r,a){var o=a(13),i=a(15),l=a(16),c=a(17),u=a(21),d=a(23),h=a(24),p=Object.getOwnPropertyDescriptor;r.f=o?p:function getOwnPropertyDescriptor(t,r){t=c(t);r=u(r,!0);if(h)try{return p(t,r)}catch(t){}if(d(t,r))return l(!i.f.call(t,r),t[r])}},function(t,r,a){var o=a(14);t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,a){"use strict";var o={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,l=i&&!o.call({1:2},1);r.f=l?function propertyIsEnumerable(t){var r=i(this,t);return!!r&&r.enumerable}:o},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,a){var o=a(18),i=a(20);t.exports=function(t){return o(i(t))}},function(t,r,a){var o=a(14),i=a(19),l="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?l.call(t,""):Object(t)}:Object},function(t,r){var a={}.toString;t.exports=function(t){return a.call(t).slice(8,-1)}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,a){var o=a(22);t.exports=function(t,r){if(!o(t))return t;var a,i;if(r&&"function"==typeof(a=t.toString)&&!o(i=a.call(t)))return i;if("function"==typeof(a=t.valueOf)&&!o(i=a.call(t)))return i;if(!r&&"function"==typeof(a=t.toString)&&!o(i=a.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r){var a={}.hasOwnProperty;t.exports=function(t,r){return a.call(t,r)}},function(t,r,a){var o=a(13),i=a(14),l=a(25);t.exports=!o&&!i((function(){return 7!=Object.defineProperty(l("div"),"a",{get:function(){return 7}}).a}))},function(t,r,a){var o=a(11),i=a(22),l=o.document,c=i(l)&&i(l.createElement);t.exports=function(t){return c?l.createElement(t):{}}},function(t,r,a){var o=a(13),i=a(27),l=a(16);t.exports=o?function(t,r,a){return i.f(t,r,l(1,a))}:function(t,r,a){t[r]=a;return t}},function(t,r,a){var o=a(13),i=a(24),l=a(28),c=a(21),u=Object.defineProperty;r.f=o?u:function defineProperty(t,r,a){l(t);r=c(r,!0);l(a);if(i)try{return u(t,r,a)}catch(t){}if("get"in a||"set"in a)throw TypeError("Accessors not supported");"value"in a&&(t[r]=a.value);return t}},function(t,r,a){var o=a(22);t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,a){var o=a(11),i=a(26),l=a(23),c=a(30),u=a(31),d=a(33),h=d.get,p=d.enforce,m=String(String).split("String");(t.exports=function(t,r,a,u){var d=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;if("function"==typeof a){"string"!=typeof r||l(a,"name")||i(a,"name",r);p(a).source=m.join("string"==typeof r?r:"")}if(t!==o){d?!v&&t[r]&&(h=!0):delete t[r];h?t[r]=a:i(t,r,a)}else h?t[r]=a:c(r,a)})(Function.prototype,"toString",(function toString(){return"function"==typeof this&&h(this).source||u(this)}))},function(t,r,a){var o=a(11),i=a(26);t.exports=function(t,r){try{i(o,t,r)}catch(a){o[t]=r}return r}},function(t,r,a){var o=a(32),i=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(t){return i.call(t)});t.exports=o.inspectSource},function(t,r,a){var o=a(11),i=a(30),l=o["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=l},function(t,r,a){var o,i,l,c=a(34),u=a(11),d=a(22),h=a(26),p=a(23),m=a(35),v=a(39),g=u.WeakMap;if(c){var y=new g,b=y.get,_=y.has,S=y.set;o=function(t,r){S.call(y,t,r);return r};i=function(t){return b.call(y,t)||{}};l=function(t){return _.call(y,t)}}else{var C=m("state");v[C]=!0;o=function(t,r){h(t,C,r);return r};i=function(t){return p(t,C)?t[C]:{}};l=function(t){return p(t,C)}}t.exports={set:o,get:i,has:l,enforce:function(t){return l(t)?i(t):o(t,{})},getterFor:function(t){return function(r){var a;if(!d(r)||(a=i(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return a}}}},function(t,r,a){var o=a(11),i=a(31),l=o.WeakMap;t.exports="function"==typeof l&&/native code/.test(i(l))},function(t,r,a){var o=a(36),i=a(38),l=o("keys");t.exports=function(t){return l[t]||(l[t]=i(t))}},function(t,r,a){var o=a(37),i=a(32);(t.exports=function(t,r){return i[t]||(i[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:o?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){t.exports=!1},function(t,r){var a=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++a+o).toString(36)}},function(t,r){t.exports={}},function(t,r,a){var o=a(23),i=a(41),l=a(12),c=a(27);t.exports=function(t,r){for(var a=i(r),u=c.f,d=l.f,h=0;h<a.length;h++){var p=a[h];o(t,p)||u(t,p,d(r,p))}}},function(t,r,a){var o=a(42),i=a(44),l=a(51),c=a(28);t.exports=o("Reflect","ownKeys")||function ownKeys(t){var r=i.f(c(t)),a=l.f;return a?r.concat(a(t)):r}},function(t,r,a){var o=a(43),i=a(11),aFunction=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?aFunction(o[t])||aFunction(i[t]):o[t]&&o[t][r]||i[t]&&i[t][r]}},function(t,r,a){var o=a(11);t.exports=o},function(t,r,a){var o=a(45),i=a(50).concat("length","prototype");r.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return o(t,i)}},function(t,r,a){var o=a(23),i=a(17),l=a(46).indexOf,c=a(39);t.exports=function(t,r){var a,u=i(t),d=0,h=[];for(a in u)!o(c,a)&&o(u,a)&&h.push(a);for(;r.length>d;)o(u,a=r[d++])&&(~l(h,a)||h.push(a));return h}},function(t,r,a){var o=a(17),i=a(47),l=a(49),createMethod=function(t){return function(r,a,c){var u,d=o(r),h=i(d.length),p=l(c,h);if(t&&a!=a){for(;h>p;)if((u=d[p++])!=u)return!0}else for(;h>p;p++)if((t||p in d)&&d[p]===a)return t||p||0;return!t&&-1}};t.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},function(t,r,a){var o=a(48),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,r){var a=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:a)(t)}},function(t,r,a){var o=a(48),i=Math.max,l=Math.min;t.exports=function(t,r){var a=o(t);return a<0?i(a+r,0):l(a,r)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,a){var o=a(14),i=/#|\.prototype\./,isForced=function(t,r){var a=c[l(t)];return a==d||a!=u&&("function"==typeof r?o(r):!!r)},l=isForced.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=isForced.data={},u=isForced.NATIVE="N",d=isForced.POLYFILL="P";t.exports=isForced},function(t,r,a){a(54);var o=a(61);t.exports=o("String","startsWith")},function(t,r,a){"use strict";var o,i=a(10),l=a(12).f,c=a(47),u=a(55),d=a(20),h=a(60),p=a(37),m="".startsWith,v=Math.min,g=h("startsWith");i({target:"String",proto:!0,forced:!(!p&&!g&&!!(o=l(String.prototype,"startsWith"),o&&!o.writable))&&!g},{startsWith:function startsWith(t){var r=String(d(this));u(t);var a=c(v(arguments.length>1?arguments[1]:void 0,r.length)),o=String(t);return m?m.call(r,o,a):r.slice(a,a+o.length)===o}})},function(t,r,a){var o=a(56);t.exports=function(t){if(o(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,r,a){var o=a(22),i=a(19),l=a(57)("match");t.exports=function(t){var r;return o(t)&&(void 0!==(r=t[l])?!!r:"RegExp"==i(t))}},function(t,r,a){var o=a(11),i=a(36),l=a(23),c=a(38),u=a(58),d=a(59),h=i("wks"),p=o.Symbol,m=d?p:p&&p.withoutSetter||c;t.exports=function(t){l(h,t)||(u&&l(p,t)?h[t]=p[t]:h[t]=m("Symbol."+t));return h[t]}},function(t,r,a){var o=a(14);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},function(t,r,a){var o=a(58);t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,a){var o=a(57)("match");t.exports=function(t){var r=/./;try{"/./"[t](r)}catch(a){try{r[o]=!1;return"/./"[t](r)}catch(t){}}return!1}},function(t,r,a){var o=a(11),i=a(62),l=Function.call;t.exports=function(t,r,a){return i(l,o[t].prototype[r],a)}},function(t,r,a){var o=a(63);t.exports=function(t,r,a){o(t);if(void 0===r)return t;switch(a){case 0:return function(){return t.call(r)};case 1:return function(a){return t.call(r,a)};case 2:return function(a,o){return t.call(r,a,o)};case 3:return function(a,o,i){return t.call(r,a,o,i)}}return function(){return t.apply(r,arguments)}}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,a){a(65);var o=a(61);t.exports=o("String","endsWith")},function(t,r,a){"use strict";var o,i=a(10),l=a(12).f,c=a(47),u=a(55),d=a(20),h=a(60),p=a(37),m="".endsWith,v=Math.min,g=h("endsWith");i({target:"String",proto:!0,forced:!(!p&&!g&&!!(o=l(String.prototype,"endsWith"),o&&!o.writable))&&!g},{endsWith:function endsWith(t){var r=String(d(this));u(t);var a=arguments.length>1?arguments[1]:void 0,o=c(r.length),i=void 0===a?o:v(c(a),o),l=String(t);return m?m.call(r,l,i):r.slice(i-l.length,i)===l}})},function(t,r,a){a(67);var o=a(61);t.exports=o("String","includes")},function(t,r,a){"use strict";var o=a(10),i=a(55),l=a(20);o({target:"String",proto:!0,forced:!a(60)("includes")},{includes:function includes(t){return!!~String(l(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},function(t,r,a){a(69);var o=a(61);t.exports=o("Array","includes")},function(t,r,a){"use strict";var o=a(10),i=a(46).includes,l=a(70);o({target:"Array",proto:!0,forced:!a(75)("indexOf",{ACCESSORS:!0,1:0})},{includes:function includes(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}});l("includes")},function(t,r,a){var o=a(57),i=a(71),l=a(27),c=o("unscopables"),u=Array.prototype;null==u[c]&&l.f(u,c,{configurable:!0,value:i(null)});t.exports=function(t){u[c][t]=!0}},function(t,r,a){var o,i=a(28),l=a(72),c=a(50),u=a(39),d=a(74),h=a(25),p=a(35),m=p("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(t){return"<script>"+t+"<\/script>"},NullProtoObject=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(t){}NullProtoObject=o?function(t){t.write(scriptTag(""));t.close();var r=t.parentWindow.Object;t=null;return r}(o):function(){var t,r=h("iframe");r.style.display="none";d.appendChild(r);r.src=String("javascript:");(t=r.contentWindow.document).open();t.write(scriptTag("document.F=Object"));t.close();return t.F}();for(var t=c.length;t--;)delete NullProtoObject.prototype[c[t]];return NullProtoObject()};u[m]=!0;t.exports=Object.create||function create(t,r){var a;if(null!==t){EmptyConstructor.prototype=i(t);a=new EmptyConstructor;EmptyConstructor.prototype=null;a[m]=t}else a=NullProtoObject();return void 0===r?a:l(a,r)}},function(t,r,a){var o=a(13),i=a(27),l=a(28),c=a(73);t.exports=o?Object.defineProperties:function defineProperties(t,r){l(t);for(var a,o=c(r),u=o.length,d=0;u>d;)i.f(t,a=o[d++],r[a]);return t}},function(t,r,a){var o=a(45),i=a(50);t.exports=Object.keys||function keys(t){return o(t,i)}},function(t,r,a){var o=a(42);t.exports=o("document","documentElement")},function(t,r,a){var o=a(13),i=a(14),l=a(23),c=Object.defineProperty,u={},thrower=function(t){throw t};t.exports=function(t,r){if(l(u,t))return u[t];r||(r={});var a=[][t],d=!!l(r,"ACCESSORS")&&r.ACCESSORS,h=l(r,0)?r[0]:thrower,p=l(r,1)?r[1]:void 0;return u[t]=!!a&&!i((function(){if(d&&!o)return!0;var t={length:-1};d?c(t,1,{enumerable:!0,get:thrower}):t[1]=1;a.call(t,h,p)}))}},function(t,r,a){a(77);a(89);var o=a(43);t.exports=o.Array.from},function(t,r,a){"use strict";var o=a(78).charAt,i=a(33),l=a(79),c=i.set,u=i.getterFor("String Iterator");l(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function next(){var t,r=u(this),a=r.string,i=r.index;if(i>=a.length)return{value:void 0,done:!0};t=o(a,i);r.index+=t.length;return{value:t,done:!1}}))},function(t,r,a){var o=a(48),i=a(20),createMethod=function(t){return function(r,a){var l,c,u=String(i(r)),d=o(a),h=u.length;return d<0||d>=h?t?"":void 0:(l=u.charCodeAt(d))<55296||l>56319||d+1===h||(c=u.charCodeAt(d+1))<56320||c>57343?t?u.charAt(d):l:t?u.slice(d,d+2):c-56320+(l-55296<<10)+65536}};t.exports={codeAt:createMethod(!1),charAt:createMethod(!0)}},function(t,r,a){"use strict";var o=a(10),i=a(80),l=a(82),c=a(87),u=a(85),d=a(26),h=a(29),p=a(57),m=a(37),v=a(86),g=a(81),y=g.IteratorPrototype,b=g.BUGGY_SAFARI_ITERATORS,_=p("iterator"),returnThis=function(){return this};t.exports=function(t,r,a,p,g,S,C){i(a,r,p);var A,R,k,getIterationMethod=function(t){if(t===g&&E)return E;if(!b&&t in x)return x[t];switch(t){case"keys":return function keys(){return new a(this,t)};case"values":return function values(){return new a(this,t)};case"entries":return function entries(){return new a(this,t)}}return function(){return new a(this)}},w=r+" Iterator",P=!1,x=t.prototype,T=x[_]||x["@@iterator"]||g&&x[g],E=!b&&T||getIterationMethod(g),O="Array"==r&&x.entries||T;if(O){A=l(O.call(new t));if(y!==Object.prototype&&A.next){m||l(A)===y||(c?c(A,y):"function"!=typeof A[_]&&d(A,_,returnThis));u(A,w,!0,!0);m&&(v[w]=returnThis)}}if("values"==g&&T&&"values"!==T.name){P=!0;E=function values(){return T.call(this)}}m&&!C||x[_]===E||d(x,_,E);v[r]=E;if(g){R={values:getIterationMethod("values"),keys:S?E:getIterationMethod("keys"),entries:getIterationMethod("entries")};if(C)for(k in R)(b||P||!(k in x))&&h(x,k,R[k]);else o({target:r,proto:!0,forced:b||P},R)}return R}},function(t,r,a){"use strict";var o=a(81).IteratorPrototype,i=a(71),l=a(16),c=a(85),u=a(86),returnThis=function(){return this};t.exports=function(t,r,a){var d=r+" Iterator";t.prototype=i(o,{next:l(1,a)});c(t,d,!1,!0);u[d]=returnThis;return t}},function(t,r,a){"use strict";var o,i,l,c=a(82),u=a(26),d=a(23),h=a(57),p=a(37),m=h("iterator"),v=!1;[].keys&&("next"in(l=[].keys())?(i=c(c(l)))!==Object.prototype&&(o=i):v=!0);null==o&&(o={});p||d(o,m)||u(o,m,(function(){return this}));t.exports={IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:v}},function(t,r,a){var o=a(23),i=a(83),l=a(35),c=a(84),u=l("IE_PROTO"),d=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){t=i(t);return o(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?d:null}},function(t,r,a){var o=a(20);t.exports=function(t){return Object(o(t))}},function(t,r,a){var o=a(14);t.exports=!o((function(){function F(){}F.prototype.constructor=null;return Object.getPrototypeOf(new F)!==F.prototype}))},function(t,r,a){var o=a(27).f,i=a(23),l=a(57)("toStringTag");t.exports=function(t,r,a){t&&!i(t=a?t:t.prototype,l)&&o(t,l,{configurable:!0,value:r})}},function(t,r){t.exports={}},function(t,r,a){var o=a(28),i=a(88);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,a={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(a,[]);r=a instanceof Array}catch(t){}return function setPrototypeOf(a,l){o(a);i(l);r?t.call(a,l):a.__proto__=l;return a}}():void 0)},function(t,r,a){var o=a(22);t.exports=function(t){if(!o(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,a){var o=a(10),i=a(90);o({target:"Array",stat:!0,forced:!a(97)((function(t){Array.from(t)}))},{from:i})},function(t,r,a){"use strict";var o=a(62),i=a(83),l=a(91),c=a(92),u=a(47),d=a(93),h=a(94);t.exports=function from(t){var r,a,p,m,v,g,y=i(t),b="function"==typeof this?this:Array,_=arguments.length,S=_>1?arguments[1]:void 0,C=void 0!==S,A=h(y),R=0;C&&(S=o(S,_>2?arguments[2]:void 0,2));if(null==A||b==Array&&c(A)){a=new b(r=u(y.length));for(;r>R;R++){g=C?S(y[R],R):y[R];d(a,R,g)}}else{v=(m=A.call(y)).next;a=new b;for(;!(p=v.call(m)).done;R++){g=C?l(m,S,[p.value,R],!0):p.value;d(a,R,g)}}a.length=R;return a}},function(t,r,a){var o=a(28);t.exports=function(t,r,a,i){try{return i?r(o(a)[0],a[1]):r(a)}catch(r){var l=t.return;void 0!==l&&o(l.call(t));throw r}}},function(t,r,a){var o=a(57),i=a(86),l=o("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||c[l]===t)}},function(t,r,a){"use strict";var o=a(21),i=a(27),l=a(16);t.exports=function(t,r,a){var c=o(r);c in t?i.f(t,c,l(0,a)):t[c]=a}},function(t,r,a){var o=a(95),i=a(86),l=a(57)("iterator");t.exports=function(t){if(null!=t)return t[l]||t["@@iterator"]||i[o(t)]}},function(t,r,a){var o=a(96),i=a(19),l=a(57)("toStringTag"),c="Arguments"==i(function(){return arguments}());t.exports=o?i:function(t){var r,a,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(a=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),l))?a:c?i(r):"Object"==(o=i(r))&&"function"==typeof r.callee?"Arguments":o}},function(t,r,a){var o={};o[a(57)("toStringTag")]="z";t.exports="[object z]"===String(o)},function(t,r,a){var o=a(57)("iterator"),i=!1;try{var l=0,c={next:function(){return{done:!!l++}},return:function(){i=!0}};c[o]=function(){return this};Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!i)return!1;var a=!1;try{var l={};l[o]=function(){return{next:function(){return{done:a=!0}}}};t(l)}catch(t){}return a}},function(t,r,a){a(99);var o=a(43);t.exports=o.Object.assign},function(t,r,a){var o=a(10),i=a(100);o({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},function(t,r,a){"use strict";var o=a(13),i=a(14),l=a(73),c=a(51),u=a(15),d=a(83),h=a(18),p=Object.assign,m=Object.defineProperty;t.exports=!p||i((function(){if(o&&1!==p({b:1},p(m({},"a",{enumerable:!0,get:function(){m(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},r={},a=Symbol();t[a]=7;"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t}));return 7!=p({},t)[a]||"abcdefghijklmnopqrst"!=l(p({},r)).join("")}))?function assign(t,r){for(var a=d(t),i=arguments.length,p=1,m=c.f,v=u.f;i>p;)for(var g,y=h(arguments[p++]),b=m?l(y).concat(m(y)):l(y),_=b.length,S=0;_>S;){g=b[S++];o&&!v.call(y,g)||(a[g]=y[g])}return a}:p},function(t,r,a){a(102);a(103);var o=a(43);t.exports=o.Object.fromEntries},function(t,r,a){"use strict";var o=a(17),i=a(70),l=a(86),c=a(33),u=a(79),d=c.set,h=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,r){d(this,{type:"Array Iterator",target:o(t),index:0,kind:r})}),(function(){var t=h(this),r=t.target,a=t.kind,o=t.index++;if(!r||o>=r.length){t.target=void 0;return{value:void 0,done:!0}}return"keys"==a?{value:o,done:!1}:"values"==a?{value:r[o],done:!1}:{value:[o,r[o]],done:!1}}),"values");l.Arguments=l.Array;i("keys");i("values");i("entries")},function(t,r,a){var o=a(10),i=a(104),l=a(93);o({target:"Object",stat:!0},{fromEntries:function fromEntries(t){var r={};i(t,(function(t,a){l(r,t,a)}),void 0,!0);return r}})},function(t,r,a){var o=a(28),i=a(92),l=a(47),c=a(62),u=a(94),d=a(91),Result=function(t,r){this.stopped=t;this.result=r};(t.exports=function(t,r,a,h,p){var m,v,g,y,b,_,S,C=c(r,a,h?2:1);if(p)m=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(i(v)){for(g=0,y=l(t.length);y>g;g++)if((b=h?C(o(S=t[g])[0],S[1]):C(t[g]))&&b instanceof Result)return b;return new Result(!1)}m=v.call(t)}_=m.next;for(;!(S=_.call(m)).done;)if("object"==typeof(b=d(m,C,S.value,h))&&b&&b instanceof Result)return b;return new Result(!1)}).stop=function(t){return new Result(!0,t)}},function(t,r,a){a(106);var o=a(43);t.exports=o.Math.log2},function(t,r,a){var o=a(10),i=Math.log,l=Math.LN2;o({target:"Math",stat:!0},{log2:function log2(t){return i(t)/l}})},function(t,r,a){a(108);var o=a(43);t.exports=o.Number.isNaN},function(t,r,a){a(10)({target:"Number",stat:!0},{isNaN:function isNaN(t){return t!=t}})},function(t,r,a){a(110);var o=a(43);t.exports=o.Number.isInteger},function(t,r,a){a(10)({target:"Number",stat:!0},{isInteger:a(111)})},function(t,r,a){var o=a(22),i=Math.floor;t.exports=function isInteger(t){return!o(t)&&isFinite(t)&&i(t)===t}},function(t,r,a){a(113)},function(t,r,a){"use strict";var o=a(114),i=a(116),l=a(14),c=o.aTypedArray,u=o.aTypedArrayConstructor,d=o.exportTypedArrayMethod,h=[].slice;d("slice",(function slice(t,r){for(var a=h.call(c(this),t,r),o=i(this,this.constructor),l=0,d=a.length,p=new(u(o))(d);d>l;)p[l]=a[l++];return p}),l((function(){new Int8Array(1).slice()})))},function(t,r,a){"use strict";var o,i=a(115),l=a(13),c=a(11),u=a(22),d=a(23),h=a(95),p=a(26),m=a(29),v=a(27).f,g=a(82),y=a(87),b=a(57),_=a(38),S=c.Int8Array,C=S&&S.prototype,A=c.Uint8ClampedArray,R=A&&A.prototype,k=S&&g(S),w=C&&g(C),P=Object.prototype,x=P.isPrototypeOf,T=b("toStringTag"),E=_("TYPED_ARRAY_TAG"),O=i&&!!y&&"Opera"!==h(c.opera),I=!1,D={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},isTypedArray=function(t){return u(t)&&d(D,h(t))};for(o in D)c[o]||(O=!1);if(!O||"function"!=typeof k||k===Function.prototype){k=function TypedArray(){throw TypeError("Incorrect invocation")};if(O)for(o in D)c[o]&&y(c[o],k)}if(!O||!w||w===P){w=k.prototype;if(O)for(o in D)c[o]&&y(c[o].prototype,w)}O&&g(R)!==w&&y(R,w);if(l&&!d(w,T)){I=!0;v(w,T,{get:function(){return u(this)?this[E]:void 0}});for(o in D)c[o]&&p(c[o],E,o)}t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_TAG:I&&E,aTypedArray:function(t){if(isTypedArray(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(y){if(x.call(k,t))return t}else for(var r in D)if(d(D,o)){var a=c[r];if(a&&(t===a||x.call(a,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,r,a){if(l){if(a)for(var o in D){var i=c[o];i&&d(i.prototype,t)&&delete i.prototype[t]}w[t]&&!a||m(w,t,a?r:O&&C[t]||r)}},exportTypedArrayStaticMethod:function(t,r,a){var o,i;if(l){if(y){if(a)for(o in D)(i=c[o])&&d(i,t)&&delete i[t];if(k[t]&&!a)return;try{return m(k,t,a?r:O&&S[t]||r)}catch(t){}}for(o in D)!(i=c[o])||i[t]&&!a||m(i,t,r)}},isView:function isView(t){var r=h(t);return"DataView"===r||d(D,r)},isTypedArray:isTypedArray,TypedArray:k,TypedArrayPrototype:w}},function(t,r){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,r,a){var o=a(28),i=a(63),l=a(57)("species");t.exports=function(t,r){var a,c=o(t).constructor;return void 0===c||null==(a=o(c)[l])?r:i(a)}},function(t,r,a){a(118);a(77);a(120);a(122);a(136);a(137);var o=a(43);t.exports=o.Promise},function(t,r,a){var o=a(96),i=a(29),l=a(119);o||i(Object.prototype,"toString",l,{unsafe:!0})},function(t,r,a){"use strict";var o=a(96),i=a(95);t.exports=o?{}.toString:function toString(){return"[object "+i(this)+"]"}},function(t,r,a){var o=a(11),i=a(121),l=a(102),c=a(26),u=a(57),d=u("iterator"),h=u("toStringTag"),p=l.values;for(var m in i){var v=o[m],g=v&&v.prototype;if(g){if(g[d]!==p)try{c(g,d,p)}catch(t){g[d]=p}g[h]||c(g,h,m);if(i[m])for(var y in l)if(g[y]!==l[y])try{c(g,y,l[y])}catch(t){g[y]=l[y]}}}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,a){"use strict";var o,i,l,c,u=a(10),d=a(37),h=a(11),p=a(42),m=a(123),v=a(29),g=a(124),y=a(85),b=a(125),_=a(22),S=a(63),C=a(126),A=a(19),R=a(31),k=a(104),w=a(97),P=a(116),x=a(127).set,T=a(130),E=a(131),O=a(133),I=a(132),D=a(134),L=a(33),M=a(52),W=a(57),j=a(135),N=W("species"),B="Promise",q=L.get,G=L.set,U=L.getterFor(B),z=m,H=h.TypeError,V=h.document,Y=h.process,X=p("fetch"),Q=I.f,K=Q,J="process"==A(Y),$=!!(V&&V.createEvent&&h.dispatchEvent),Z=M(B,(function(){if(!(R(z)!==String(z))){if(66===j)return!0;if(!J&&"function"!=typeof PromiseRejectionEvent)return!0}if(d&&!z.prototype.finally)return!0;if(j>=51&&/native code/.test(z))return!1;var t=z.resolve(1),FakePromise=function(t){t((function(){}),(function(){}))};(t.constructor={})[N]=FakePromise;return!(t.then((function(){}))instanceof FakePromise)})),ee=Z||!w((function(t){z.all(t).catch((function(){}))})),isThenable=function(t){var r;return!(!_(t)||"function"!=typeof(r=t.then))&&r},notify=function(t,r,a){if(!r.notified){r.notified=!0;var o=r.reactions;T((function(){for(var i=r.value,l=1==r.state,c=0;o.length>c;){var u,d,h,p=o[c++],m=l?p.ok:p.fail,v=p.resolve,g=p.reject,y=p.domain;try{if(m){if(!l){2===r.rejection&&onHandleUnhandled(t,r);r.rejection=1}if(!0===m)u=i;else{y&&y.enter();u=m(i);if(y){y.exit();h=!0}}u===p.promise?g(H("Promise-chain cycle")):(d=isThenable(u))?d.call(u,v,g):v(u)}else g(i)}catch(t){y&&!h&&y.exit();g(t)}}r.reactions=[];r.notified=!1;a&&!r.rejection&&onUnhandled(t,r)}))}},dispatchEvent=function(t,r,a){var o,i;if($){(o=V.createEvent("Event")).promise=r;o.reason=a;o.initEvent(t,!1,!0);h.dispatchEvent(o)}else o={promise:r,reason:a};(i=h["on"+t])?i(o):"unhandledrejection"===t&&O("Unhandled promise rejection",a)},onUnhandled=function(t,r){x.call(h,(function(){var a,o=r.value;if(isUnhandled(r)){a=D((function(){J?Y.emit("unhandledRejection",o,t):dispatchEvent("unhandledrejection",t,o)}));r.rejection=J||isUnhandled(r)?2:1;if(a.error)throw a.value}}))},isUnhandled=function(t){return 1!==t.rejection&&!t.parent},onHandleUnhandled=function(t,r){x.call(h,(function(){J?Y.emit("rejectionHandled",t):dispatchEvent("rejectionhandled",t,r.value)}))},bind=function(t,r,a,o){return function(i){t(r,a,i,o)}},internalReject=function(t,r,a,o){if(!r.done){r.done=!0;o&&(r=o);r.value=a;r.state=2;notify(t,r,!0)}},internalResolve=function(t,r,a,o){if(!r.done){r.done=!0;o&&(r=o);try{if(t===a)throw H("Promise can't be resolved itself");var i=isThenable(a);if(i)T((function(){var o={done:!1};try{i.call(a,bind(internalResolve,t,o,r),bind(internalReject,t,o,r))}catch(a){internalReject(t,o,a,r)}}));else{r.value=a;r.state=1;notify(t,r,!1)}}catch(a){internalReject(t,{done:!1},a,r)}}};if(Z){z=function Promise(t){C(this,z,B);S(t);o.call(this);var r=q(this);try{t(bind(internalResolve,this,r),bind(internalReject,this,r))}catch(t){internalReject(this,r,t)}};(o=function Promise(t){G(this,{type:B,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=g(z.prototype,{then:function then(t,r){var a=U(this),o=Q(P(this,z));o.ok="function"!=typeof t||t;o.fail="function"==typeof r&&r;o.domain=J?Y.domain:void 0;a.parent=!0;a.reactions.push(o);0!=a.state&&notify(this,a,!1);return o.promise},catch:function(t){return this.then(void 0,t)}});i=function(){var t=new o,r=q(t);this.promise=t;this.resolve=bind(internalResolve,t,r);this.reject=bind(internalReject,t,r)};I.f=Q=function(t){return t===z||t===l?new i(t):K(t)};if(!d&&"function"==typeof m){c=m.prototype.then;v(m.prototype,"then",(function then(t,r){var a=this;return new z((function(t,r){c.call(a,t,r)})).then(t,r)}),{unsafe:!0});"function"==typeof X&&u({global:!0,enumerable:!0,forced:!0},{fetch:function fetch(t){return E(z,X.apply(h,arguments))}})}}u({global:!0,wrap:!0,forced:Z},{Promise:z});y(z,B,!1,!0);b(B);l=p(B);u({target:B,stat:!0,forced:Z},{reject:function reject(t){var r=Q(this);r.reject.call(void 0,t);return r.promise}});u({target:B,stat:!0,forced:d||Z},{resolve:function resolve(t){return E(d&&this===l?z:this,t)}});u({target:B,stat:!0,forced:ee},{all:function all(t){var r=this,a=Q(r),o=a.resolve,i=a.reject,l=D((function(){var a=S(r.resolve),l=[],c=0,u=1;k(t,(function(t){var d=c++,h=!1;l.push(void 0);u++;a.call(r,t).then((function(t){if(!h){h=!0;l[d]=t;--u||o(l)}}),i)}));--u||o(l)}));l.error&&i(l.value);return a.promise},race:function race(t){var r=this,a=Q(r),o=a.reject,i=D((function(){var i=S(r.resolve);k(t,(function(t){i.call(r,t).then(a.resolve,o)}))}));i.error&&o(i.value);return a.promise}})},function(t,r,a){var o=a(11);t.exports=o.Promise},function(t,r,a){var o=a(29);t.exports=function(t,r,a){for(var i in r)o(t,i,r[i],a);return t}},function(t,r,a){"use strict";var o=a(42),i=a(27),l=a(57),c=a(13),u=l("species");t.exports=function(t){var r=o(t),a=i.f;c&&r&&!r[u]&&a(r,u,{configurable:!0,get:function(){return this}})}},function(t,r){t.exports=function(t,r,a){if(!(t instanceof r))throw TypeError("Incorrect "+(a?a+" ":"")+"invocation");return t}},function(t,r,a){var o,i,l,c=a(11),u=a(14),d=a(19),h=a(62),p=a(74),m=a(25),v=a(128),g=c.location,y=c.setImmediate,b=c.clearImmediate,_=c.process,S=c.MessageChannel,C=c.Dispatch,A=0,R={},run=function(t){if(R.hasOwnProperty(t)){var r=R[t];delete R[t];r()}},runner=function(t){return function(){run(t)}},listener=function(t){run(t.data)},post=function(t){c.postMessage(t+"",g.protocol+"//"+g.host)};if(!y||!b){y=function setImmediate(t){for(var r=[],a=1;arguments.length>a;)r.push(arguments[a++]);R[++A]=function(){("function"==typeof t?t:Function(t)).apply(void 0,r)};o(A);return A};b=function clearImmediate(t){delete R[t]};if("process"==d(_))o=function(t){_.nextTick(runner(t))};else if(C&&C.now)o=function(t){C.now(runner(t))};else if(S&&!v){l=(i=new S).port2;i.port1.onmessage=listener;o=h(l.postMessage,l,1)}else if(!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(post)||"file:"===g.protocol)o="onreadystatechange"in m("script")?function(t){p.appendChild(m("script")).onreadystatechange=function(){p.removeChild(this);run(t)}}:function(t){setTimeout(runner(t),0)};else{o=post;c.addEventListener("message",listener,!1)}}t.exports={set:y,clear:b}},function(t,r,a){var o=a(129);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(o)},function(t,r,a){var o=a(42);t.exports=o("navigator","userAgent")||""},function(t,r,a){var o,i,l,c,u,d,h,p,m=a(11),v=a(12).f,g=a(19),y=a(127).set,b=a(128),_=m.MutationObserver||m.WebKitMutationObserver,S=m.process,C=m.Promise,A="process"==g(S),R=v(m,"queueMicrotask"),k=R&&R.value;if(!k){o=function(){var t,r;A&&(t=S.domain)&&t.exit();for(;i;){r=i.fn;i=i.next;try{r()}catch(t){i?c():l=void 0;throw t}}l=void 0;t&&t.enter()};if(A)c=function(){S.nextTick(o)};else if(_&&!b){u=!0;d=document.createTextNode("");new _(o).observe(d,{characterData:!0});c=function(){d.data=u=!u}}else if(C&&C.resolve){h=C.resolve(void 0);p=h.then;c=function(){p.call(h,o)}}else c=function(){y.call(m,o)}}t.exports=k||function(t){var r={fn:t,next:void 0};l&&(l.next=r);if(!i){i=r;c()}l=r}},function(t,r,a){var o=a(28),i=a(22),l=a(132);t.exports=function(t,r){o(t);if(i(r)&&r.constructor===t)return r;var a=l.f(t);(0,a.resolve)(r);return a.promise}},function(t,r,a){"use strict";var o=a(63),PromiseCapability=function(t){var r,a;this.promise=new t((function(t,o){if(void 0!==r||void 0!==a)throw TypeError("Bad Promise constructor");r=t;a=o}));this.resolve=o(r);this.reject=o(a)};t.exports.f=function(t){return new PromiseCapability(t)}},function(t,r,a){var o=a(11);t.exports=function(t,r){var a=o.console;a&&a.error&&(1===arguments.length?a.error(t):a.error(t,r))}},function(t,r){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,r,a){var o,i,l=a(11),c=a(129),u=l.process,d=u&&u.versions,h=d&&d.v8;h?i=(o=h.split("."))[0]+o[1]:c&&(!(o=c.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=c.match(/Chrome\/(\d+)/))&&(i=o[1]);t.exports=i&&+i},function(t,r,a){"use strict";var o=a(10),i=a(63),l=a(132),c=a(134),u=a(104);o({target:"Promise",stat:!0},{allSettled:function allSettled(t){var r=this,a=l.f(r),o=a.resolve,d=a.reject,h=c((function(){var a=i(r.resolve),l=[],c=0,d=1;u(t,(function(t){var i=c++,u=!1;l.push(void 0);d++;a.call(r,t).then((function(t){if(!u){u=!0;l[i]={status:"fulfilled",value:t};--d||o(l)}}),(function(t){if(!u){u=!0;l[i]={status:"rejected",reason:t};--d||o(l)}}))}));--d||o(l)}));h.error&&d(h.value);return a.promise}})},function(t,r,a){"use strict";var o=a(10),i=a(37),l=a(123),c=a(14),u=a(42),d=a(116),h=a(131),p=a(29);o({target:"Promise",proto:!0,real:!0,forced:!!l&&c((function(){l.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var r=d(this,u("Promise")),a="function"==typeof t;return this.then(a?function(a){return h(r,t()).then((function(){return a}))}:t,a?function(a){return h(r,t()).then((function(){throw a}))}:t)}});i||"function"!=typeof l||l.prototype.finally||p(l.prototype,"finally",u("Promise").prototype.finally)},function(t,r,a){a(139);a(144);a(142);var o=a(43);t.exports=o.URL},function(t,r,a){"use strict";a(77);var o,i=a(10),l=a(13),c=a(140),u=a(11),d=a(72),h=a(29),p=a(126),m=a(23),v=a(100),g=a(90),y=a(78).codeAt,b=a(141),_=a(85),S=a(142),C=a(33),A=u.URL,R=S.URLSearchParams,k=S.getState,w=C.set,P=C.getterFor("URL"),x=Math.floor,T=Math.pow,E=/[A-Za-z]/,O=/[\d+-.A-Za-z]/,I=/\d/,D=/^(0x|0X)/,L=/^[0-7]+$/,M=/^\d+$/,W=/^[\dA-Fa-f]+$/,j=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,N=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,B=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,q=/[\u0009\u000A\u000D]/g,parseHost=function(t,r){var a,o,i;if("["==r.charAt(0)){if("]"!=r.charAt(r.length-1))return"Invalid host";if(!(a=parseIPv6(r.slice(1,-1))))return"Invalid host";t.host=a}else if(isSpecial(t)){r=b(r);if(j.test(r))return"Invalid host";if(null===(a=parseIPv4(r)))return"Invalid host";t.host=a}else{if(N.test(r))return"Invalid host";a="";o=g(r);for(i=0;i<o.length;i++)a+=percentEncode(o[i],G);t.host=a}},parseIPv4=function(t){var r,a,o,i,l,c,u,d=t.split(".");d.length&&""==d[d.length-1]&&d.pop();if((r=d.length)>4)return t;a=[];for(o=0;o<r;o++){if(""==(i=d[o]))return t;l=10;if(i.length>1&&"0"==i.charAt(0)){l=D.test(i)?16:8;i=i.slice(8==l?1:2)}if(""===i)c=0;else{if(!(10==l?M:8==l?L:W).test(i))return t;c=parseInt(i,l)}a.push(c)}for(o=0;o<r;o++){c=a[o];if(o==r-1){if(c>=T(256,5-r))return null}else if(c>255)return null}u=a.pop();for(o=0;o<a.length;o++)u+=a[o]*T(256,3-o);return u},parseIPv6=function(t){var r,a,o,i,l,c,u,d=[0,0,0,0,0,0,0,0],h=0,p=null,m=0,char=function(){return t.charAt(m)};if(":"==char()){if(":"!=t.charAt(1))return;m+=2;p=++h}for(;char();){if(8==h)return;if(":"!=char()){r=a=0;for(;a<4&&W.test(char());){r=16*r+parseInt(char(),16);m++;a++}if("."==char()){if(0==a)return;m-=a;if(h>6)return;o=0;for(;char();){i=null;if(o>0){if(!("."==char()&&o<4))return;m++}if(!I.test(char()))return;for(;I.test(char());){l=parseInt(char(),10);if(null===i)i=l;else{if(0==i)return;i=10*i+l}if(i>255)return;m++}d[h]=256*d[h]+i;2!=++o&&4!=o||h++}if(4!=o)return;break}if(":"==char()){m++;if(!char())return}else if(char())return;d[h++]=r}else{if(null!==p)return;m++;p=++h}}if(null!==p){c=h-p;h=7;for(;0!=h&&c>0;){u=d[h];d[h--]=d[p+c-1];d[p+--c]=u}}else if(8!=h)return;return d},serializeHost=function(t){var r,a,o,i;if("number"==typeof t){r=[];for(a=0;a<4;a++){r.unshift(t%256);t=x(t/256)}return r.join(".")}if("object"==typeof t){r="";o=function(t){for(var r=null,a=1,o=null,i=0,l=0;l<8;l++)if(0!==t[l]){if(i>a){r=o;a=i}o=null;i=0}else{null===o&&(o=l);++i}if(i>a){r=o;a=i}return r}(t);for(a=0;a<8;a++)if(!i||0!==t[a]){i&&(i=!1);if(o===a){r+=a?":":"::";i=!0}else{r+=t[a].toString(16);a<7&&(r+=":")}}return"["+r+"]"}return t},G={},U=v({},G,{" ":1,'"':1,"<":1,">":1,"`":1}),z=v({},U,{"#":1,"?":1,"{":1,"}":1}),H=v({},z,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),percentEncode=function(t,r){var a=y(t,0);return a>32&&a<127&&!m(r,t)?t:encodeURIComponent(t)},V={ftp:21,file:null,http:80,https:443,ws:80,wss:443},isSpecial=function(t){return m(V,t.scheme)},includesCredentials=function(t){return""!=t.username||""!=t.password},cannotHaveUsernamePasswordPort=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},isWindowsDriveLetter=function(t,r){var a;return 2==t.length&&E.test(t.charAt(0))&&(":"==(a=t.charAt(1))||!r&&"|"==a)},startsWithWindowsDriveLetter=function(t){var r;return t.length>1&&isWindowsDriveLetter(t.slice(0,2))&&(2==t.length||"/"===(r=t.charAt(2))||"\\"===r||"?"===r||"#"===r)},shortenURLsPath=function(t){var r=t.path,a=r.length;!a||"file"==t.scheme&&1==a&&isWindowsDriveLetter(r[0],!0)||r.pop()},isSingleDot=function(t){return"."===t||"%2e"===t.toLowerCase()},Y={},X={},Q={},K={},J={},$={},Z={},ee={},te={},re={},ne={},ae={},oe={},ie={},se={},le={},ce={},ue={},fe={},de={},he={},parseURL=function(t,r,a,i){var l,c,u,d,h,p=a||Y,v=0,y="",b=!1,_=!1,S=!1;if(!a){t.scheme="";t.username="";t.password="";t.host=null;t.port=null;t.path=[];t.query=null;t.fragment=null;t.cannotBeABaseURL=!1;r=r.replace(B,"")}r=r.replace(q,"");l=g(r);for(;v<=l.length;){c=l[v];switch(p){case Y:if(!c||!E.test(c)){if(a)return"Invalid scheme";p=Q;continue}y+=c.toLowerCase();p=X;break;case X:if(c&&(O.test(c)||"+"==c||"-"==c||"."==c))y+=c.toLowerCase();else{if(":"!=c){if(a)return"Invalid scheme";y="";p=Q;v=0;continue}if(a&&(isSpecial(t)!=m(V,y)||"file"==y&&(includesCredentials(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;t.scheme=y;if(a){isSpecial(t)&&V[t.scheme]==t.port&&(t.port=null);return}y="";if("file"==t.scheme)p=ie;else if(isSpecial(t)&&i&&i.scheme==t.scheme)p=K;else if(isSpecial(t))p=ee;else if("/"==l[v+1]){p=J;v++}else{t.cannotBeABaseURL=!0;t.path.push("");p=fe}}break;case Q:if(!i||i.cannotBeABaseURL&&"#"!=c)return"Invalid scheme";if(i.cannotBeABaseURL&&"#"==c){t.scheme=i.scheme;t.path=i.path.slice();t.query=i.query;t.fragment="";t.cannotBeABaseURL=!0;p=he;break}p="file"==i.scheme?ie:$;continue;case K:if("/"!=c||"/"!=l[v+1]){p=$;continue}p=te;v++;break;case J:if("/"==c){p=re;break}p=ue;continue;case $:t.scheme=i.scheme;if(c==o){t.username=i.username;t.password=i.password;t.host=i.host;t.port=i.port;t.path=i.path.slice();t.query=i.query}else if("/"==c||"\\"==c&&isSpecial(t))p=Z;else if("?"==c){t.username=i.username;t.password=i.password;t.host=i.host;t.port=i.port;t.path=i.path.slice();t.query="";p=de}else{if("#"!=c){t.username=i.username;t.password=i.password;t.host=i.host;t.port=i.port;t.path=i.path.slice();t.path.pop();p=ue;continue}t.username=i.username;t.password=i.password;t.host=i.host;t.port=i.port;t.path=i.path.slice();t.query=i.query;t.fragment="";p=he}break;case Z:if(!isSpecial(t)||"/"!=c&&"\\"!=c){if("/"!=c){t.username=i.username;t.password=i.password;t.host=i.host;t.port=i.port;p=ue;continue}p=re}else p=te;break;case ee:p=te;if("/"!=c||"/"!=y.charAt(v+1))continue;v++;break;case te:if("/"!=c&&"\\"!=c){p=re;continue}break;case re:if("@"==c){b&&(y="%40"+y);b=!0;u=g(y);for(var C=0;C<u.length;C++){var A=u[C];if(":"!=A||S){var R=percentEncode(A,H);S?t.password+=R:t.username+=R}else S=!0}y=""}else if(c==o||"/"==c||"?"==c||"#"==c||"\\"==c&&isSpecial(t)){if(b&&""==y)return"Invalid authority";v-=g(y).length+1;y="";p=ne}else y+=c;break;case ne:case ae:if(a&&"file"==t.scheme){p=le;continue}if(":"!=c||_){if(c==o||"/"==c||"?"==c||"#"==c||"\\"==c&&isSpecial(t)){if(isSpecial(t)&&""==y)return"Invalid host";if(a&&""==y&&(includesCredentials(t)||null!==t.port))return;if(d=parseHost(t,y))return d;y="";p=ce;if(a)return;continue}"["==c?_=!0:"]"==c&&(_=!1);y+=c}else{if(""==y)return"Invalid host";if(d=parseHost(t,y))return d;y="";p=oe;if(a==ae)return}break;case oe:if(!I.test(c)){if(c==o||"/"==c||"?"==c||"#"==c||"\\"==c&&isSpecial(t)||a){if(""!=y){var k=parseInt(y,10);if(k>65535)return"Invalid port";t.port=isSpecial(t)&&k===V[t.scheme]?null:k;y=""}if(a)return;p=ce;continue}return"Invalid port"}y+=c;break;case ie:t.scheme="file";if("/"==c||"\\"==c)p=se;else{if(!i||"file"!=i.scheme){p=ue;continue}if(c==o){t.host=i.host;t.path=i.path.slice();t.query=i.query}else if("?"==c){t.host=i.host;t.path=i.path.slice();t.query="";p=de}else{if("#"!=c){if(!startsWithWindowsDriveLetter(l.slice(v).join(""))){t.host=i.host;t.path=i.path.slice();shortenURLsPath(t)}p=ue;continue}t.host=i.host;t.path=i.path.slice();t.query=i.query;t.fragment="";p=he}}break;case se:if("/"==c||"\\"==c){p=le;break}i&&"file"==i.scheme&&!startsWithWindowsDriveLetter(l.slice(v).join(""))&&(isWindowsDriveLetter(i.path[0],!0)?t.path.push(i.path[0]):t.host=i.host);p=ue;continue;case le:if(c==o||"/"==c||"\\"==c||"?"==c||"#"==c){if(!a&&isWindowsDriveLetter(y))p=ue;else if(""==y){t.host="";if(a)return;p=ce}else{if(d=parseHost(t,y))return d;"localhost"==t.host&&(t.host="");if(a)return;y="";p=ce}continue}y+=c;break;case ce:if(isSpecial(t)){p=ue;if("/"!=c&&"\\"!=c)continue}else if(a||"?"!=c)if(a||"#"!=c){if(c!=o){p=ue;if("/"!=c)continue}}else{t.fragment="";p=he}else{t.query="";p=de}break;case ue:if(c==o||"/"==c||"\\"==c&&isSpecial(t)||!a&&("?"==c||"#"==c)){if(".."===(h=(h=y).toLowerCase())||"%2e."===h||".%2e"===h||"%2e%2e"===h){shortenURLsPath(t);"/"==c||"\\"==c&&isSpecial(t)||t.path.push("")}else if(isSingleDot(y))"/"==c||"\\"==c&&isSpecial(t)||t.path.push("");else{if("file"==t.scheme&&!t.path.length&&isWindowsDriveLetter(y)){t.host&&(t.host="");y=y.charAt(0)+":"}t.path.push(y)}y="";if("file"==t.scheme&&(c==o||"?"==c||"#"==c))for(;t.path.length>1&&""===t.path[0];)t.path.shift();if("?"==c){t.query="";p=de}else if("#"==c){t.fragment="";p=he}}else y+=percentEncode(c,z);break;case fe:if("?"==c){t.query="";p=de}else if("#"==c){t.fragment="";p=he}else c!=o&&(t.path[0]+=percentEncode(c,G));break;case de:if(a||"#"!=c)c!=o&&("'"==c&&isSpecial(t)?t.query+="%27":t.query+="#"==c?"%23":percentEncode(c,G));else{t.fragment="";p=he}break;case he:c!=o&&(t.fragment+=percentEncode(c,U))}v++}},pe=function URL(t){var r,a,o=p(this,pe,"URL"),i=arguments.length>1?arguments[1]:void 0,c=String(t),u=w(o,{type:"URL"});if(void 0!==i)if(i instanceof pe)r=P(i);else if(a=parseURL(r={},String(i)))throw TypeError(a);if(a=parseURL(u,c,null,r))throw TypeError(a);var d=u.searchParams=new R,h=k(d);h.updateSearchParams(u.query);h.updateURL=function(){u.query=String(d)||null};if(!l){o.href=serializeURL.call(o);o.origin=getOrigin.call(o);o.protocol=getProtocol.call(o);o.username=getUsername.call(o);o.password=getPassword.call(o);o.host=getHost.call(o);o.hostname=getHostname.call(o);o.port=getPort.call(o);o.pathname=getPathname.call(o);o.search=getSearch.call(o);o.searchParams=getSearchParams.call(o);o.hash=getHash.call(o)}},me=pe.prototype,serializeURL=function(){var t=P(this),r=t.scheme,a=t.username,o=t.password,i=t.host,l=t.port,c=t.path,u=t.query,d=t.fragment,h=r+":";if(null!==i){h+="//";includesCredentials(t)&&(h+=a+(o?":"+o:"")+"@");h+=serializeHost(i);null!==l&&(h+=":"+l)}else"file"==r&&(h+="//");h+=t.cannotBeABaseURL?c[0]:c.length?"/"+c.join("/"):"";null!==u&&(h+="?"+u);null!==d&&(h+="#"+d);return h},getOrigin=function(){var t=P(this),r=t.scheme,a=t.port;if("blob"==r)try{return new URL(r.path[0]).origin}catch(t){return"null"}return"file"!=r&&isSpecial(t)?r+"://"+serializeHost(t.host)+(null!==a?":"+a:""):"null"},getProtocol=function(){return P(this).scheme+":"},getUsername=function(){return P(this).username},getPassword=function(){return P(this).password},getHost=function(){var t=P(this),r=t.host,a=t.port;return null===r?"":null===a?serializeHost(r):serializeHost(r)+":"+a},getHostname=function(){var t=P(this).host;return null===t?"":serializeHost(t)},getPort=function(){var t=P(this).port;return null===t?"":String(t)},getPathname=function(){var t=P(this),r=t.path;return t.cannotBeABaseURL?r[0]:r.length?"/"+r.join("/"):""},getSearch=function(){var t=P(this).query;return t?"?"+t:""},getSearchParams=function(){return P(this).searchParams},getHash=function(){var t=P(this).fragment;return t?"#"+t:""},accessorDescriptor=function(t,r){return{get:t,set:r,configurable:!0,enumerable:!0}};l&&d(me,{href:accessorDescriptor(serializeURL,(function(t){var r=P(this),a=String(t),o=parseURL(r,a);if(o)throw TypeError(o);k(r.searchParams).updateSearchParams(r.query)})),origin:accessorDescriptor(getOrigin),protocol:accessorDescriptor(getProtocol,(function(t){var r=P(this);parseURL(r,String(t)+":",Y)})),username:accessorDescriptor(getUsername,(function(t){var r=P(this),a=g(String(t));if(!cannotHaveUsernamePasswordPort(r)){r.username="";for(var o=0;o<a.length;o++)r.username+=percentEncode(a[o],H)}})),password:accessorDescriptor(getPassword,(function(t){var r=P(this),a=g(String(t));if(!cannotHaveUsernamePasswordPort(r)){r.password="";for(var o=0;o<a.length;o++)r.password+=percentEncode(a[o],H)}})),host:accessorDescriptor(getHost,(function(t){var r=P(this);r.cannotBeABaseURL||parseURL(r,String(t),ne)})),hostname:accessorDescriptor(getHostname,(function(t){var r=P(this);r.cannotBeABaseURL||parseURL(r,String(t),ae)})),port:accessorDescriptor(getPort,(function(t){var r=P(this);cannotHaveUsernamePasswordPort(r)||(""==(t=String(t))?r.port=null:parseURL(r,t,oe))})),pathname:accessorDescriptor(getPathname,(function(t){var r=P(this);if(!r.cannotBeABaseURL){r.path=[];parseURL(r,t+"",ce)}})),search:accessorDescriptor(getSearch,(function(t){var r=P(this);if(""==(t=String(t)))r.query=null;else{"?"==t.charAt(0)&&(t=t.slice(1));r.query="";parseURL(r,t,de)}k(r.searchParams).updateSearchParams(r.query)})),searchParams:accessorDescriptor(getSearchParams),hash:accessorDescriptor(getHash,(function(t){var r=P(this);if(""!=(t=String(t))){"#"==t.charAt(0)&&(t=t.slice(1));r.fragment="";parseURL(r,t,he)}else r.fragment=null}))});h(me,"toJSON",(function toJSON(){return serializeURL.call(this)}),{enumerable:!0});h(me,"toString",(function toString(){return serializeURL.call(this)}),{enumerable:!0});if(A){var ve=A.createObjectURL,ge=A.revokeObjectURL;ve&&h(pe,"createObjectURL",(function createObjectURL(t){return ve.apply(A,arguments)}));ge&&h(pe,"revokeObjectURL",(function revokeObjectURL(t){return ge.apply(A,arguments)}))}_(pe,"URL");i({global:!0,forced:!c,sham:!l},{URL:pe})},function(t,r,a){var o=a(14),i=a(57),l=a(37),c=i("iterator");t.exports=!o((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),r=t.searchParams,a="";t.pathname="c%20d";r.forEach((function(t,o){r.delete("b");a+=o+t}));return l&&!t.toJSON||!r.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==r.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!r[c]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==a||"x"!==new URL("http://x",void 0).host}))},function(t,r,a){"use strict";var o=/[^\0-\u007E]/,i=/[.\u3002\uFF0E\uFF61]/g,l="Overflow: input needs wider integers to process",c=Math.floor,u=String.fromCharCode,digitToBasic=function(t){return t+22+75*(t<26)},adapt=function(t,r,a){var o=0;t=a?c(t/700):t>>1;t+=c(t/r);for(;t>455;o+=36)t=c(t/35);return c(o+36*t/(t+38))},encode=function(t){var r,a,o=[],i=(t=function(t){for(var r=[],a=0,o=t.length;a<o;){var i=t.charCodeAt(a++);if(i>=55296&&i<=56319&&a<o){var l=t.charCodeAt(a++);if(56320==(64512&l))r.push(((1023&i)<<10)+(1023&l)+65536);else{r.push(i);a--}}else r.push(i)}return r}(t)).length,d=128,h=0,p=72;for(r=0;r<t.length;r++)(a=t[r])<128&&o.push(u(a));var m=o.length,v=m;m&&o.push("-");for(;v<i;){var g=2147483647;for(r=0;r<t.length;r++)(a=t[r])>=d&&a<g&&(g=a);var y=v+1;if(g-d>c((2147483647-h)/y))throw RangeError(l);h+=(g-d)*y;d=g;for(r=0;r<t.length;r++){if((a=t[r])<d&&++h>2147483647)throw RangeError(l);if(a==d){for(var b=h,_=36;;_+=36){var S=_<=p?1:_>=p+26?26:_-p;if(b<S)break;var C=b-S,A=36-S;o.push(u(digitToBasic(S+C%A)));b=c(C/A)}o.push(u(digitToBasic(b)));p=adapt(h,y,v==m);h=0;++v}}++h;++d}return o.join("")};t.exports=function(t){var r,a,l=[],c=t.toLowerCase().replace(i,".").split(".");for(r=0;r<c.length;r++){a=c[r];l.push(o.test(a)?"xn--"+encode(a):a)}return l.join(".")}},function(t,r,a){"use strict";a(102);var o=a(10),i=a(42),l=a(140),c=a(29),u=a(124),d=a(85),h=a(80),p=a(33),m=a(126),v=a(23),g=a(62),y=a(95),b=a(28),_=a(22),S=a(71),C=a(16),A=a(143),R=a(94),k=a(57),w=i("fetch"),P=i("Headers"),x=k("iterator"),T=p.set,E=p.getterFor("URLSearchParams"),O=p.getterFor("URLSearchParamsIterator"),I=/\+/g,D=Array(4),percentSequence=function(t){return D[t-1]||(D[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},percentDecode=function(t){try{return decodeURIComponent(t)}catch(r){return t}},deserialize=function(t){var r=t.replace(I," "),a=4;try{return decodeURIComponent(r)}catch(t){for(;a;)r=r.replace(percentSequence(a--),percentDecode);return r}},L=/[!'()~]|%20/g,M={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},replacer=function(t){return M[t]},serialize=function(t){return encodeURIComponent(t).replace(L,replacer)},parseSearchParams=function(t,r){if(r)for(var a,o,i=r.split("&"),l=0;l<i.length;)if((a=i[l++]).length){o=a.split("=");t.push({key:deserialize(o.shift()),value:deserialize(o.join("="))})}},updateSearchParams=function(t){this.entries.length=0;parseSearchParams(this.entries,t)},validateArgumentsLength=function(t,r){if(t<r)throw TypeError("Not enough arguments")},W=h((function Iterator(t,r){T(this,{type:"URLSearchParamsIterator",iterator:A(E(t).entries),kind:r})}),"Iterator",(function next(){var t=O(this),r=t.kind,a=t.iterator.next(),o=a.value;a.done||(a.value="keys"===r?o.key:"values"===r?o.value:[o.key,o.value]);return a})),j=function URLSearchParams(){m(this,j,"URLSearchParams");var t,r,a,o,i,l,c,u,d,h=arguments.length>0?arguments[0]:void 0,p=this,g=[];T(p,{type:"URLSearchParams",entries:g,updateURL:function(){},updateSearchParams:updateSearchParams});if(void 0!==h)if(_(h))if("function"==typeof(t=R(h))){a=(r=t.call(h)).next;for(;!(o=a.call(r)).done;){if((c=(l=(i=A(b(o.value))).next).call(i)).done||(u=l.call(i)).done||!l.call(i).done)throw TypeError("Expected sequence with length 2");g.push({key:c.value+"",value:u.value+""})}}else for(d in h)v(h,d)&&g.push({key:d,value:h[d]+""});else parseSearchParams(g,"string"==typeof h?"?"===h.charAt(0)?h.slice(1):h:h+"")},N=j.prototype;u(N,{append:function append(t,r){validateArgumentsLength(arguments.length,2);var a=E(this);a.entries.push({key:t+"",value:r+""});a.updateURL()},delete:function(t){validateArgumentsLength(arguments.length,1);for(var r=E(this),a=r.entries,o=t+"",i=0;i<a.length;)a[i].key===o?a.splice(i,1):i++;r.updateURL()},get:function get(t){validateArgumentsLength(arguments.length,1);for(var r=E(this).entries,a=t+"",o=0;o<r.length;o++)if(r[o].key===a)return r[o].value;return null},getAll:function getAll(t){validateArgumentsLength(arguments.length,1);for(var r=E(this).entries,a=t+"",o=[],i=0;i<r.length;i++)r[i].key===a&&o.push(r[i].value);return o},has:function has(t){validateArgumentsLength(arguments.length,1);for(var r=E(this).entries,a=t+"",o=0;o<r.length;)if(r[o++].key===a)return!0;return!1},set:function set(t,r){validateArgumentsLength(arguments.length,1);for(var a,o=E(this),i=o.entries,l=!1,c=t+"",u=r+"",d=0;d<i.length;d++)if((a=i[d]).key===c)if(l)i.splice(d--,1);else{l=!0;a.value=u}l||i.push({key:c,value:u});o.updateURL()},sort:function sort(){var t,r,a,o=E(this),i=o.entries,l=i.slice();i.length=0;for(a=0;a<l.length;a++){t=l[a];for(r=0;r<a;r++)if(i[r].key>t.key){i.splice(r,0,t);break}r===a&&i.push(t)}o.updateURL()},forEach:function forEach(t){for(var r,a=E(this).entries,o=g(t,arguments.length>1?arguments[1]:void 0,3),i=0;i<a.length;)o((r=a[i++]).value,r.key,this)},keys:function keys(){return new W(this,"keys")},values:function values(){return new W(this,"values")},entries:function entries(){return new W(this,"entries")}},{enumerable:!0});c(N,x,N.entries);c(N,"toString",(function toString(){for(var t,r=E(this).entries,a=[],o=0;o<r.length;){t=r[o++];a.push(serialize(t.key)+"="+serialize(t.value))}return a.join("&")}),{enumerable:!0});d(j,"URLSearchParams");o({global:!0,forced:!l},{URLSearchParams:j});l||"function"!=typeof w||"function"!=typeof P||o({global:!0,enumerable:!0,forced:!0},{fetch:function fetch(t){var r,a,o,i=[t];if(arguments.length>1){if(_(r=arguments[1])){a=r.body;if("URLSearchParams"===y(a)){(o=r.headers?new P(r.headers):new P).has("content-type")||o.set("content-type","application/x-www-form-urlencoded;charset=UTF-8");r=S(r,{body:C(0,String(a)),headers:C(0,o)})}}i.push(r)}return w.apply(this,i)}});t.exports={URLSearchParams:j,getState:E}},function(t,r,a){var o=a(28),i=a(94);t.exports=function(t){var r=i(t);if("function"!=typeof r)throw TypeError(String(t)+" is not iterable");return o(r.call(t))}},function(t,r,a){"use strict";a(10)({target:"URL",proto:!0,enumerable:!0},{toJSON:function toJSON(){return URL.prototype.toString.call(this)}})},function(t,r,a){!function(t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol:function(t){return"Symbol("+t+")"};function noop(){}var a=Number.isNaN||function(t){return t!=t},o=noop;function typeIsObject(t){return"object"==typeof t&&null!==t||"function"==typeof t}function createArrayFromList(t){return t.slice()}function IsFiniteNonNegativeNumber(t){return!1!==function IsNonNegativeNumber(t){return"number"==typeof t&&(!a(t)&&!(t<0))}(t)&&t!==1/0}function Call(t,r,a){if("function"!=typeof t)throw new TypeError("Argument is not a function");return Function.prototype.apply.call(t,r,a)}function CreateAlgorithmFromUnderlyingMethod(t,r,a,o){var i=t[r];if(void 0!==i){if("function"!=typeof i)throw new TypeError(i+" is not a method");switch(a){case 0:return function(){return PromiseCall(i,t,o)};case 1:return function(r){var a=[r].concat(o);return PromiseCall(i,t,a)}}}return function(){return promiseResolvedWith(void 0)}}function InvokeOrNoop(t,r,a){var o=t[r];if(void 0!==o)return Call(o,t,a)}function PromiseCall(t,r,a){try{return promiseResolvedWith(Call(t,r,a))}catch(t){return promiseRejectedWith(t)}}function ValidateAndNormalizeHighWaterMark(t){t=Number(t);if(a(t)||t<0)throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN");return t}function MakeSizeAlgorithmFromSizeFunction(t){if(void 0===t)return function(){return 1};if("function"!=typeof t)throw new TypeError("size property of a queuing strategy must be a function");return function(r){return t(r)}}var i=Promise,l=Promise.prototype.then,c=Promise.resolve.bind(i),u=Promise.reject.bind(i);function newPromise(t){return new i(t)}function promiseResolvedWith(t){return c(t)}function promiseRejectedWith(t){return u(t)}function PerformPromiseThen(t,r,a){return l.call(t,r,a)}function uponPromise(t,r,a){PerformPromiseThen(PerformPromiseThen(t,r,a),void 0,o)}function uponFulfillment(t,r){uponPromise(t,r)}function uponRejection(t,r){uponPromise(t,void 0,r)}function transformPromiseWith(t,r,a){return PerformPromiseThen(t,r,a)}function setPromiseIsHandledToTrue(t){PerformPromiseThen(t,void 0,o)}var d=function(){function SimpleQueue(){this._cursor=0;this._size=0;this._front={_elements:[],_next:void 0};this._back=this._front;this._cursor=0;this._size=0}Object.defineProperty(SimpleQueue.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0});SimpleQueue.prototype.push=function(t){var r=this._back,a=r;16383===r._elements.length&&(a={_elements:[],_next:void 0});r._elements.push(t);if(a!==r){this._back=a;r._next=a}++this._size};SimpleQueue.prototype.shift=function(){var t=this._front,r=t,a=this._cursor,o=a+1,i=t._elements,l=i[a];if(16384===o){r=t._next;o=0}--this._size;this._cursor=o;t!==r&&(this._front=r);i[a]=void 0;return l};SimpleQueue.prototype.forEach=function(t){for(var r=this._cursor,a=this._front,o=a._elements;r!==o.length||void 0!==a._next;){if(r===o.length){r=0;if(0===(o=(a=a._next)._elements).length)break}t(o[r]);++r}};SimpleQueue.prototype.peek=function(){var t=this._front,r=this._cursor;return t._elements[r]};return SimpleQueue}();function ReadableStreamCreateReadResult(t,r,a){var o=null;!0===a&&(o=Object.prototype);var i=Object.create(o);i.value=t;i.done=r;return i}function ReadableStreamReaderGenericInitialize(t,r){t._forAuthorCode=!0;t._ownerReadableStream=r;r._reader=t;"readable"===r._state?defaultReaderClosedPromiseInitialize(t):"closed"===r._state?function defaultReaderClosedPromiseInitializeAsResolved(t){defaultReaderClosedPromiseInitialize(t);defaultReaderClosedPromiseResolve(t)}(t):defaultReaderClosedPromiseInitializeAsRejected(t,r._storedError)}function ReadableStreamReaderGenericCancel(t,r){return ReadableStreamCancel(t._ownerReadableStream,r)}function ReadableStreamReaderGenericRelease(t){"readable"===t._ownerReadableStream._state?defaultReaderClosedPromiseReject(t,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):function defaultReaderClosedPromiseResetToRejected(t,r){defaultReaderClosedPromiseInitializeAsRejected(t,r)}(t,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));t._ownerReadableStream._reader=void 0;t._ownerReadableStream=void 0}function readerLockException(t){return new TypeError("Cannot "+t+" a stream using a released reader")}function defaultReaderClosedPromiseInitialize(t){t._closedPromise=newPromise((function(r,a){t._closedPromise_resolve=r;t._closedPromise_reject=a}))}function defaultReaderClosedPromiseInitializeAsRejected(t,r){defaultReaderClosedPromiseInitialize(t);defaultReaderClosedPromiseReject(t,r)}function defaultReaderClosedPromiseReject(t,r){setPromiseIsHandledToTrue(t._closedPromise);t._closedPromise_reject(r);t._closedPromise_resolve=void 0;t._closedPromise_reject=void 0}function defaultReaderClosedPromiseResolve(t){t._closedPromise_resolve(void 0);t._closedPromise_resolve=void 0;t._closedPromise_reject=void 0}var h=r("[[CancelSteps]]"),p=r("[[PullSteps]]");function AcquireReadableStreamDefaultReader(t,r){void 0===r&&(r=!1);var a=new g(t);a._forAuthorCode=r;return a}function ReadableStreamAddReadRequest(t){return newPromise((function(r,a){var o={_resolve:r,_reject:a};t._reader._readRequests.push(o)}))}function ReadableStreamFulfillReadRequest(t,r,a){var o=t._reader;o._readRequests.shift()._resolve(ReadableStreamCreateReadResult(r,a,o._forAuthorCode))}function ReadableStreamGetNumReadRequests(t){return t._reader._readRequests.length}function ReadableStreamHasDefaultReader(t){var r=t._reader;return void 0!==r&&!!IsReadableStreamDefaultReader(r)}var m,v,g=function(){function ReadableStreamDefaultReader(t){if(!1===IsReadableStream(t))throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance");if(!0===IsReadableStreamLocked(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");ReadableStreamReaderGenericInitialize(this,t);this._readRequests=new d}Object.defineProperty(ReadableStreamDefaultReader.prototype,"closed",{get:function(){return IsReadableStreamDefaultReader(this)?this._closedPromise:promiseRejectedWith(defaultReaderBrandCheckException("closed"))},enumerable:!0,configurable:!0});ReadableStreamDefaultReader.prototype.cancel=function(t){return IsReadableStreamDefaultReader(this)?void 0===this._ownerReadableStream?promiseRejectedWith(readerLockException("cancel")):ReadableStreamReaderGenericCancel(this,t):promiseRejectedWith(defaultReaderBrandCheckException("cancel"))};ReadableStreamDefaultReader.prototype.read=function(){return IsReadableStreamDefaultReader(this)?void 0===this._ownerReadableStream?promiseRejectedWith(readerLockException("read from")):ReadableStreamDefaultReaderRead(this):promiseRejectedWith(defaultReaderBrandCheckException("read"))};ReadableStreamDefaultReader.prototype.releaseLock=function(){if(!IsReadableStreamDefaultReader(this))throw defaultReaderBrandCheckException("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");ReadableStreamReaderGenericRelease(this)}};return ReadableStreamDefaultReader}();function IsReadableStreamDefaultReader(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_readRequests")}function ReadableStreamDefaultReaderRead(t){var r=t._ownerReadableStream;r._disturbed=!0;return"closed"===r._state?promiseResolvedWith(ReadableStreamCreateReadResult(void 0,!0,t._forAuthorCode)):"errored"===r._state?promiseRejectedWith(r._storedError):r._readableStreamController[p]()}function defaultReaderBrandCheckException(t){return new TypeError("ReadableStreamDefaultReader.prototype."+t+" can only be used on a ReadableStreamDefaultReader")}if("symbol"==typeof r.asyncIterator){v=((m={})[r.asyncIterator]=function(){return this},m);Object.defineProperty(v,r.asyncIterator,{enumerable:!1})}var y={next:function(){if(!1===IsReadableStreamAsyncIterator(this))return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));var t=this._asyncIteratorReader;return void 0===t._ownerReadableStream?promiseRejectedWith(readerLockException("iterate")):transformPromiseWith(ReadableStreamDefaultReaderRead(t),(function(r){var a=r.done;a&&ReadableStreamReaderGenericRelease(t);return ReadableStreamCreateReadResult(r.value,a,!0)}))},return:function(t){if(!1===IsReadableStreamAsyncIterator(this))return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));var r=this._asyncIteratorReader;if(void 0===r._ownerReadableStream)return promiseRejectedWith(readerLockException("finish iterating"));if(r._readRequests.length>0)return promiseRejectedWith(new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled"));if(!1===this._preventCancel){var a=ReadableStreamReaderGenericCancel(r,t);ReadableStreamReaderGenericRelease(r);return transformPromiseWith(a,(function(){return ReadableStreamCreateReadResult(t,!0,!0)}))}ReadableStreamReaderGenericRelease(r);return promiseResolvedWith(ReadableStreamCreateReadResult(t,!0,!0))}};void 0!==v&&Object.setPrototypeOf(y,v);Object.defineProperty(y,"next",{enumerable:!1});Object.defineProperty(y,"return",{enumerable:!1});function IsReadableStreamAsyncIterator(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_asyncIteratorReader")}function streamAsyncIteratorBrandCheckException(t){return new TypeError("ReadableStreamAsyncIterator."+t+" can only be used on a ReadableSteamAsyncIterator")}function DequeueValue(t){var r=t._queue.shift();t._queueTotalSize-=r.size;t._queueTotalSize<0&&(t._queueTotalSize=0);return r.value}function EnqueueValueWithSize(t,r,a){if(!IsFiniteNonNegativeNumber(a=Number(a)))throw new RangeError("Size must be a finite, non-NaN, non-negative number.");t._queue.push({value:r,size:a});t._queueTotalSize+=a}function ResetQueue(t){t._queue=new d;t._queueTotalSize=0}var b=r("[[AbortSteps]]"),_=r("[[ErrorSteps]]"),S=function(){function WritableStream(t,r){void 0===t&&(t={});void 0===r&&(r={});InitializeWritableStream(this);var a=r.size,o=r.highWaterMark;if(void 0!==t.type)throw new RangeError("Invalid type is specified");var i=MakeSizeAlgorithmFromSizeFunction(a);void 0===o&&(o=1);!function SetUpWritableStreamDefaultControllerFromUnderlyingSink(t,r,a,o){var i=Object.create(A.prototype),l=CreateAlgorithmFromUnderlyingMethod(r,"write",1,[i]),c=CreateAlgorithmFromUnderlyingMethod(r,"close",0,[]),u=CreateAlgorithmFromUnderlyingMethod(r,"abort",1,[]);SetUpWritableStreamDefaultController(t,i,(function startAlgorithm(){return InvokeOrNoop(r,"start",[i])}),l,c,u,a,o)}(this,t,o=ValidateAndNormalizeHighWaterMark(o),i)}Object.defineProperty(WritableStream.prototype,"locked",{get:function(){if(!1===IsWritableStream(this))throw streamBrandCheckException("locked");return IsWritableStreamLocked(this)},enumerable:!0,configurable:!0});WritableStream.prototype.abort=function(t){return!1===IsWritableStream(this)?promiseRejectedWith(streamBrandCheckException("abort")):!0===IsWritableStreamLocked(this)?promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer")):WritableStreamAbort(this,t)};WritableStream.prototype.close=function(){return!1===IsWritableStream(this)?promiseRejectedWith(streamBrandCheckException("close")):!0===IsWritableStreamLocked(this)?promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer")):!0===WritableStreamCloseQueuedOrInFlight(this)?promiseRejectedWith(new TypeError("Cannot close an already-closing stream")):WritableStreamClose(this)};WritableStream.prototype.getWriter=function(){if(!1===IsWritableStream(this))throw streamBrandCheckException("getWriter");return AcquireWritableStreamDefaultWriter(this)};return WritableStream}();function AcquireWritableStreamDefaultWriter(t){return new C(t)}function InitializeWritableStream(t){t._state="writable";t._storedError=void 0;t._writer=void 0;t._writableStreamController=void 0;t._writeRequests=new d;t._inFlightWriteRequest=void 0;t._closeRequest=void 0;t._inFlightCloseRequest=void 0;t._pendingAbortRequest=void 0;t._backpressure=!1}function IsWritableStream(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_writableStreamController")}function IsWritableStreamLocked(t){return void 0!==t._writer}function WritableStreamAbort(t,r){var a=t._state;if("closed"===a||"errored"===a)return promiseResolvedWith(void 0);if(void 0!==t._pendingAbortRequest)return t._pendingAbortRequest._promise;var o=!1;if("erroring"===a){o=!0;r=void 0}var i=newPromise((function(a,i){t._pendingAbortRequest={_promise:void 0,_resolve:a,_reject:i,_reason:r,_wasAlreadyErroring:o}}));t._pendingAbortRequest._promise=i;!1===o&&WritableStreamStartErroring(t,r);return i}function WritableStreamClose(t){var r=t._state;if("closed"===r||"errored"===r)return promiseRejectedWith(new TypeError("The stream (in "+r+" state) is not in the writable state and cannot be closed"));var a=newPromise((function(r,a){var o={_resolve:r,_reject:a};t._closeRequest=o})),o=t._writer;void 0!==o&&!0===t._backpressure&&"writable"===r&&defaultWriterReadyPromiseResolve(o);!function WritableStreamDefaultControllerClose(t){EnqueueValueWithSize(t,"close",0);WritableStreamDefaultControllerAdvanceQueueIfNeeded(t)}(t._writableStreamController);return a}function WritableStreamDealWithRejection(t,r){"writable"!==t._state?WritableStreamFinishErroring(t):WritableStreamStartErroring(t,r)}function WritableStreamStartErroring(t,r){var a=t._writableStreamController;t._state="erroring";t._storedError=r;var o=t._writer;void 0!==o&&WritableStreamDefaultWriterEnsureReadyPromiseRejected(o,r);!1===function WritableStreamHasOperationMarkedInFlight(t){return void 0!==t._inFlightWriteRequest||void 0!==t._inFlightCloseRequest}(t)&&!0===a._started&&WritableStreamFinishErroring(t)}function WritableStreamFinishErroring(t){t._state="errored";t._writableStreamController[_]();var r=t._storedError;t._writeRequests.forEach((function(t){t._reject(r)}));t._writeRequests=new d;if(void 0!==t._pendingAbortRequest){var a=t._pendingAbortRequest;t._pendingAbortRequest=void 0;if(!0!==a._wasAlreadyErroring)uponPromise(t._writableStreamController[b](a._reason),(function(){a._resolve();WritableStreamRejectCloseAndClosedPromiseIfNeeded(t)}),(function(r){a._reject(r);WritableStreamRejectCloseAndClosedPromiseIfNeeded(t)}));else{a._reject(r);WritableStreamRejectCloseAndClosedPromiseIfNeeded(t)}}else WritableStreamRejectCloseAndClosedPromiseIfNeeded(t)}function WritableStreamCloseQueuedOrInFlight(t){return void 0!==t._closeRequest||void 0!==t._inFlightCloseRequest}function WritableStreamRejectCloseAndClosedPromiseIfNeeded(t){if(void 0!==t._closeRequest){t._closeRequest._reject(t._storedError);t._closeRequest=void 0}var r=t._writer;void 0!==r&&defaultWriterClosedPromiseReject(r,t._storedError)}function WritableStreamUpdateBackpressure(t,r){var a=t._writer;void 0!==a&&r!==t._backpressure&&(!0===r?function defaultWriterReadyPromiseReset(t){defaultWriterReadyPromiseInitialize(t)}(a):defaultWriterReadyPromiseResolve(a));t._backpressure=r}var C=function(){function WritableStreamDefaultWriter(t){if(!1===IsWritableStream(t))throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance");if(!0===IsWritableStreamLocked(t))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=t;t._writer=this;var r=t._state;if("writable"===r){!1===WritableStreamCloseQueuedOrInFlight(t)&&!0===t._backpressure?defaultWriterReadyPromiseInitialize(this):defaultWriterReadyPromiseInitializeAsResolved(this);defaultWriterClosedPromiseInitialize(this)}else if("erroring"===r){defaultWriterReadyPromiseInitializeAsRejected(this,t._storedError);defaultWriterClosedPromiseInitialize(this)}else if("closed"===r){defaultWriterReadyPromiseInitializeAsResolved(this);!function defaultWriterClosedPromiseInitializeAsResolved(t){defaultWriterClosedPromiseInitialize(t);defaultWriterClosedPromiseResolve(t)}(this)}else{var a=t._storedError;defaultWriterReadyPromiseInitializeAsRejected(this,a);defaultWriterClosedPromiseInitializeAsRejected(this,a)}}Object.defineProperty(WritableStreamDefaultWriter.prototype,"closed",{get:function(){return!1===IsWritableStreamDefaultWriter(this)?promiseRejectedWith(defaultWriterBrandCheckException("closed")):this._closedPromise},enumerable:!0,configurable:!0});Object.defineProperty(WritableStreamDefaultWriter.prototype,"desiredSize",{get:function(){if(!1===IsWritableStreamDefaultWriter(this))throw defaultWriterBrandCheckException("desiredSize");if(void 0===this._ownerWritableStream)throw defaultWriterLockException("desiredSize");return function WritableStreamDefaultWriterGetDesiredSize(t){var r=t._ownerWritableStream,a=r._state;return"errored"===a||"erroring"===a?null:"closed"===a?0:WritableStreamDefaultControllerGetDesiredSize(r._writableStreamController)}(this)},enumerable:!0,configurable:!0});Object.defineProperty(WritableStreamDefaultWriter.prototype,"ready",{get:function(){return!1===IsWritableStreamDefaultWriter(this)?promiseRejectedWith(defaultWriterBrandCheckException("ready")):this._readyPromise},enumerable:!0,configurable:!0});WritableStreamDefaultWriter.prototype.abort=function(t){return!1===IsWritableStreamDefaultWriter(this)?promiseRejectedWith(defaultWriterBrandCheckException("abort")):void 0===this._ownerWritableStream?promiseRejectedWith(defaultWriterLockException("abort")):function WritableStreamDefaultWriterAbort(t,r){return WritableStreamAbort(t._ownerWritableStream,r)}(this,t)};WritableStreamDefaultWriter.prototype.close=function(){if(!1===IsWritableStreamDefaultWriter(this))return promiseRejectedWith(defaultWriterBrandCheckException("close"));var t=this._ownerWritableStream;return void 0===t?promiseRejectedWith(defaultWriterLockException("close")):!0===WritableStreamCloseQueuedOrInFlight(t)?promiseRejectedWith(new TypeError("Cannot close an already-closing stream")):WritableStreamDefaultWriterClose(this)};WritableStreamDefaultWriter.prototype.releaseLock=function(){if(!1===IsWritableStreamDefaultWriter(this))throw defaultWriterBrandCheckException("releaseLock");void 0!==this._ownerWritableStream&&WritableStreamDefaultWriterRelease(this)};WritableStreamDefaultWriter.prototype.write=function(t){return!1===IsWritableStreamDefaultWriter(this)?promiseRejectedWith(defaultWriterBrandCheckException("write")):void 0===this._ownerWritableStream?promiseRejectedWith(defaultWriterLockException("write to")):WritableStreamDefaultWriterWrite(this,t)};return WritableStreamDefaultWriter}();function IsWritableStreamDefaultWriter(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_ownerWritableStream")}function WritableStreamDefaultWriterClose(t){return WritableStreamClose(t._ownerWritableStream)}function WritableStreamDefaultWriterEnsureClosedPromiseRejected(t,r){"pending"===t._closedPromiseState?defaultWriterClosedPromiseReject(t,r):function defaultWriterClosedPromiseResetToRejected(t,r){defaultWriterClosedPromiseInitializeAsRejected(t,r)}(t,r)}function WritableStreamDefaultWriterEnsureReadyPromiseRejected(t,r){"pending"===t._readyPromiseState?defaultWriterReadyPromiseReject(t,r):function defaultWriterReadyPromiseResetToRejected(t,r){defaultWriterReadyPromiseInitializeAsRejected(t,r)}(t,r)}function WritableStreamDefaultWriterRelease(t){var r=t._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");WritableStreamDefaultWriterEnsureReadyPromiseRejected(t,a);WritableStreamDefaultWriterEnsureClosedPromiseRejected(t,a);r._writer=void 0;t._ownerWritableStream=void 0}function WritableStreamDefaultWriterWrite(t,r){var a=t._ownerWritableStream,o=a._writableStreamController,i=function WritableStreamDefaultControllerGetChunkSize(t,r){try{return t._strategySizeAlgorithm(r)}catch(r){WritableStreamDefaultControllerErrorIfNeeded(t,r);return 1}}(o,r);if(a!==t._ownerWritableStream)return promiseRejectedWith(defaultWriterLockException("write to"));var l=a._state;if("errored"===l)return promiseRejectedWith(a._storedError);if(!0===WritableStreamCloseQueuedOrInFlight(a)||"closed"===l)return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));if("erroring"===l)return promiseRejectedWith(a._storedError);var c=function WritableStreamAddWriteRequest(t){return newPromise((function(r,a){var o={_resolve:r,_reject:a};t._writeRequests.push(o)}))}(a);!function WritableStreamDefaultControllerWrite(t,r,a){var o={chunk:r};try{EnqueueValueWithSize(t,o,a)}catch(r){WritableStreamDefaultControllerErrorIfNeeded(t,r);return}var i=t._controlledWritableStream;if(!1===WritableStreamCloseQueuedOrInFlight(i)&&"writable"===i._state){var l=WritableStreamDefaultControllerGetBackpressure(t);WritableStreamUpdateBackpressure(i,l)}WritableStreamDefaultControllerAdvanceQueueIfNeeded(t)}(o,r,i);return c}var A=function(){function WritableStreamDefaultController(){throw new TypeError("WritableStreamDefaultController cannot be constructed explicitly")}WritableStreamDefaultController.prototype.error=function(t){if(!1===function IsWritableStreamDefaultController(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_controlledWritableStream")}(this))throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController");"writable"===this._controlledWritableStream._state&&WritableStreamDefaultControllerError(this,t)};WritableStreamDefaultController.prototype[b]=function(t){var r=this._abortAlgorithm(t);WritableStreamDefaultControllerClearAlgorithms(this);return r};WritableStreamDefaultController.prototype[_]=function(){ResetQueue(this)};return WritableStreamDefaultController}();function SetUpWritableStreamDefaultController(t,r,a,o,i,l,c,u){r._controlledWritableStream=t;t._writableStreamController=r;r._queue=void 0;r._queueTotalSize=void 0;ResetQueue(r);r._started=!1;r._strategySizeAlgorithm=u;r._strategyHWM=c;r._writeAlgorithm=o;r._closeAlgorithm=i;r._abortAlgorithm=l;var d=WritableStreamDefaultControllerGetBackpressure(r);WritableStreamUpdateBackpressure(t,d);uponPromise(promiseResolvedWith(a()),(function(){r._started=!0;WritableStreamDefaultControllerAdvanceQueueIfNeeded(r)}),(function(a){r._started=!0;WritableStreamDealWithRejection(t,a)}))}function WritableStreamDefaultControllerClearAlgorithms(t){t._writeAlgorithm=void 0;t._closeAlgorithm=void 0;t._abortAlgorithm=void 0;t._strategySizeAlgorithm=void 0}function WritableStreamDefaultControllerGetDesiredSize(t){return t._strategyHWM-t._queueTotalSize}function WritableStreamDefaultControllerAdvanceQueueIfNeeded(t){var r=t._controlledWritableStream;if(!1!==t._started&&void 0===r._inFlightWriteRequest)if("erroring"!==r._state){if(0!==t._queue.length){var a=function PeekQueueValue(t){return t._queue.peek().value}(t);"close"===a?function WritableStreamDefaultControllerProcessClose(t){var r=t._controlledWritableStream;!function WritableStreamMarkCloseRequestInFlight(t){t._inFlightCloseRequest=t._closeRequest;t._closeRequest=void 0}(r);DequeueValue(t);var a=t._closeAlgorithm();WritableStreamDefaultControllerClearAlgorithms(t);uponPromise(a,(function(){!function WritableStreamFinishInFlightClose(t){t._inFlightCloseRequest._resolve(void 0);t._inFlightCloseRequest=void 0;if("erroring"===t._state){t._storedError=void 0;if(void 0!==t._pendingAbortRequest){t._pendingAbortRequest._resolve();t._pendingAbortRequest=void 0}}t._state="closed";var r=t._writer;void 0!==r&&defaultWriterClosedPromiseResolve(r)}(r)}),(function(t){!function WritableStreamFinishInFlightCloseWithError(t,r){t._inFlightCloseRequest._reject(r);t._inFlightCloseRequest=void 0;if(void 0!==t._pendingAbortRequest){t._pendingAbortRequest._reject(r);t._pendingAbortRequest=void 0}WritableStreamDealWithRejection(t,r)}(r,t)}))}(t):function WritableStreamDefaultControllerProcessWrite(t,r){var a=t._controlledWritableStream;!function WritableStreamMarkFirstWriteRequestInFlight(t){t._inFlightWriteRequest=t._writeRequests.shift()}(a);uponPromise(t._writeAlgorithm(r),(function(){!function WritableStreamFinishInFlightWrite(t){t._inFlightWriteRequest._resolve(void 0);t._inFlightWriteRequest=void 0}(a);var r=a._state;DequeueValue(t);if(!1===WritableStreamCloseQueuedOrInFlight(a)&&"writable"===r){var o=WritableStreamDefaultControllerGetBackpressure(t);WritableStreamUpdateBackpressure(a,o)}WritableStreamDefaultControllerAdvanceQueueIfNeeded(t)}),(function(r){"writable"===a._state&&WritableStreamDefaultControllerClearAlgorithms(t);!function WritableStreamFinishInFlightWriteWithError(t,r){t._inFlightWriteRequest._reject(r);t._inFlightWriteRequest=void 0;WritableStreamDealWithRejection(t,r)}(a,r)}))}(t,a.chunk)}}else WritableStreamFinishErroring(r)}function WritableStreamDefaultControllerErrorIfNeeded(t,r){"writable"===t._controlledWritableStream._state&&WritableStreamDefaultControllerError(t,r)}function WritableStreamDefaultControllerGetBackpressure(t){return WritableStreamDefaultControllerGetDesiredSize(t)<=0}function WritableStreamDefaultControllerError(t,r){var a=t._controlledWritableStream;WritableStreamDefaultControllerClearAlgorithms(t);WritableStreamStartErroring(a,r)}function streamBrandCheckException(t){return new TypeError("WritableStream.prototype."+t+" can only be used on a WritableStream")}function defaultWriterBrandCheckException(t){return new TypeError("WritableStreamDefaultWriter.prototype."+t+" can only be used on a WritableStreamDefaultWriter")}function defaultWriterLockException(t){return new TypeError("Cannot "+t+" a stream using a released writer")}function defaultWriterClosedPromiseInitialize(t){t._closedPromise=newPromise((function(r,a){t._closedPromise_resolve=r;t._closedPromise_reject=a;t._closedPromiseState="pending"}))}function defaultWriterClosedPromiseInitializeAsRejected(t,r){defaultWriterClosedPromiseInitialize(t);defaultWriterClosedPromiseReject(t,r)}function defaultWriterClosedPromiseReject(t,r){setPromiseIsHandledToTrue(t._closedPromise);t._closedPromise_reject(r);t._closedPromise_resolve=void 0;t._closedPromise_reject=void 0;t._closedPromiseState="rejected"}function defaultWriterClosedPromiseResolve(t){t._closedPromise_resolve(void 0);t._closedPromise_resolve=void 0;t._closedPromise_reject=void 0;t._closedPromiseState="resolved"}function defaultWriterReadyPromiseInitialize(t){t._readyPromise=newPromise((function(r,a){t._readyPromise_resolve=r;t._readyPromise_reject=a}));t._readyPromiseState="pending"}function defaultWriterReadyPromiseInitializeAsRejected(t,r){defaultWriterReadyPromiseInitialize(t);defaultWriterReadyPromiseReject(t,r)}function defaultWriterReadyPromiseInitializeAsResolved(t){defaultWriterReadyPromiseInitialize(t);defaultWriterReadyPromiseResolve(t)}function defaultWriterReadyPromiseReject(t,r){setPromiseIsHandledToTrue(t._readyPromise);t._readyPromise_reject(r);t._readyPromise_resolve=void 0;t._readyPromise_reject=void 0;t._readyPromiseState="rejected"}function defaultWriterReadyPromiseResolve(t){t._readyPromise_resolve(void 0);t._readyPromise_resolve=void 0;t._readyPromise_reject=void 0;t._readyPromiseState="fulfilled"}function isAbortSignal(t){if("object"!=typeof t||null===t)return!1;try{return"boolean"==typeof t.aborted}catch(t){return!1}}var R="undefined"!=typeof DOMException?DOMException:void 0,k=function isDOMExceptionConstructor(t){if("function"!=typeof t&&"object"!=typeof t)return!1;try{new t;return!0}catch(t){return!1}}(R)?R:function createDOMExceptionPolyfill(){var t=function DOMException(t,r){this.message=t||"";this.name=r||"Error";Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)};t.prototype=Object.create(Error.prototype);Object.defineProperty(t.prototype,"constructor",{value:t,writable:!0,configurable:!0});return t}();function ReadableStreamPipeTo(t,r,a,o,i,l){var c=AcquireReadableStreamDefaultReader(t),u=AcquireWritableStreamDefaultWriter(r);t._disturbed=!0;var d=!1,h=promiseResolvedWith(void 0);return newPromise((function(p,m){var v;if(void 0!==l){v=function(){var a=new k("Aborted","AbortError"),l=[];!1===o&&l.push((function(){return"writable"===r._state?WritableStreamAbort(r,a):promiseResolvedWith(void 0)}));!1===i&&l.push((function(){return"readable"===t._state?ReadableStreamCancel(t,a):promiseResolvedWith(void 0)}));shutdownWithAction((function(){return Promise.all(l.map((function(t){return t()})))}),!0,a)};if(!0===l.aborted){v();return}l.addEventListener("abort",v)}isOrBecomesErrored(t,c._closedPromise,(function(t){!1===o?shutdownWithAction((function(){return WritableStreamAbort(r,t)}),!0,t):shutdown(!0,t)}));isOrBecomesErrored(r,u._closedPromise,(function(r){!1===i?shutdownWithAction((function(){return ReadableStreamCancel(t,r)}),!0,r):shutdown(!0,r)}));!function isOrBecomesClosed(t,r,a){"closed"===t._state?a():uponFulfillment(r,a)}(t,c._closedPromise,(function(){!1===a?shutdownWithAction((function(){return function WritableStreamDefaultWriterCloseWithErrorPropagation(t){var r=t._ownerWritableStream,a=r._state;return!0===WritableStreamCloseQueuedOrInFlight(r)||"closed"===a?promiseResolvedWith(void 0):"errored"===a?promiseRejectedWith(r._storedError):WritableStreamDefaultWriterClose(t)}(u)})):shutdown()}));if(!0===WritableStreamCloseQueuedOrInFlight(r)||"closed"===r._state){var g=new TypeError("the destination writable stream closed before all data could be piped to it");!1===i?shutdownWithAction((function(){return ReadableStreamCancel(t,g)}),!0,g):shutdown(!0,g)}setPromiseIsHandledToTrue(function pipeLoop(){return newPromise((function(t,r){!function next(a){a?t():PerformPromiseThen(function pipeStep(){return!0===d?promiseResolvedWith(!0):PerformPromiseThen(u._readyPromise,(function(){return PerformPromiseThen(ReadableStreamDefaultReaderRead(c),(function(t){if(!0===t.done)return!0;h=PerformPromiseThen(WritableStreamDefaultWriterWrite(u,t.value),void 0,noop);return!1}))}))}(),next,r)}(!1)}))}());function waitForWritesToFinish(){var t=h;return PerformPromiseThen(h,(function(){return t!==h?waitForWritesToFinish():void 0}))}function isOrBecomesErrored(t,r,a){"errored"===t._state?a(t._storedError):uponRejection(r,a)}function shutdownWithAction(t,a,o){if(!0!==d){d=!0;"writable"===r._state&&!1===WritableStreamCloseQueuedOrInFlight(r)?uponFulfillment(waitForWritesToFinish(),doTheRest):doTheRest()}function doTheRest(){uponPromise(t(),(function(){return finalize(a,o)}),(function(t){return finalize(!0,t)}))}}function shutdown(t,a){if(!0!==d){d=!0;"writable"===r._state&&!1===WritableStreamCloseQueuedOrInFlight(r)?uponFulfillment(waitForWritesToFinish(),(function(){return finalize(t,a)})):finalize(t,a)}}function finalize(t,r){WritableStreamDefaultWriterRelease(u);ReadableStreamReaderGenericRelease(c);void 0!==l&&l.removeEventListener("abort",v);t?m(r):p(void 0)}}))}var w=function(){function ReadableStreamDefaultController(){throw new TypeError}Object.defineProperty(ReadableStreamDefaultController.prototype,"desiredSize",{get:function(){if(!1===IsReadableStreamDefaultController(this))throw defaultControllerBrandCheckException("desiredSize");return ReadableStreamDefaultControllerGetDesiredSize(this)},enumerable:!0,configurable:!0});ReadableStreamDefaultController.prototype.close=function(){if(!1===IsReadableStreamDefaultController(this))throw defaultControllerBrandCheckException("close");if(!1===ReadableStreamDefaultControllerCanCloseOrEnqueue(this))throw new TypeError("The stream is not in a state that permits close");ReadableStreamDefaultControllerClose(this)};ReadableStreamDefaultController.prototype.enqueue=function(t){if(!1===IsReadableStreamDefaultController(this))throw defaultControllerBrandCheckException("enqueue");if(!1===ReadableStreamDefaultControllerCanCloseOrEnqueue(this))throw new TypeError("The stream is not in a state that permits enqueue");return ReadableStreamDefaultControllerEnqueue(this,t)};ReadableStreamDefaultController.prototype.error=function(t){if(!1===IsReadableStreamDefaultController(this))throw defaultControllerBrandCheckException("error");ReadableStreamDefaultControllerError(this,t)};ReadableStreamDefaultController.prototype[h]=function(t){ResetQueue(this);var r=this._cancelAlgorithm(t);ReadableStreamDefaultControllerClearAlgorithms(this);return r};ReadableStreamDefaultController.prototype[p]=function(){var t=this._controlledReadableStream;if(this._queue.length>0){var r=DequeueValue(this);if(!0===this._closeRequested&&0===this._queue.length){ReadableStreamDefaultControllerClearAlgorithms(this);ReadableStreamClose(t)}else ReadableStreamDefaultControllerCallPullIfNeeded(this);return promiseResolvedWith(ReadableStreamCreateReadResult(r,!1,t._reader._forAuthorCode))}var a=ReadableStreamAddReadRequest(t);ReadableStreamDefaultControllerCallPullIfNeeded(this);return a};return ReadableStreamDefaultController}();function IsReadableStreamDefaultController(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_controlledReadableStream")}function ReadableStreamDefaultControllerCallPullIfNeeded(t){if(!1!==ReadableStreamDefaultControllerShouldCallPull(t))if(!0!==t._pulling){t._pulling=!0;uponPromise(t._pullAlgorithm(),(function(){t._pulling=!1;if(!0===t._pullAgain){t._pullAgain=!1;ReadableStreamDefaultControllerCallPullIfNeeded(t)}}),(function(r){ReadableStreamDefaultControllerError(t,r)}))}else t._pullAgain=!0}function ReadableStreamDefaultControllerShouldCallPull(t){var r=t._controlledReadableStream;return!1!==ReadableStreamDefaultControllerCanCloseOrEnqueue(t)&&!1!==t._started&&(!0===IsReadableStreamLocked(r)&&ReadableStreamGetNumReadRequests(r)>0||ReadableStreamDefaultControllerGetDesiredSize(t)>0)}function ReadableStreamDefaultControllerClearAlgorithms(t){t._pullAlgorithm=void 0;t._cancelAlgorithm=void 0;t._strategySizeAlgorithm=void 0}function ReadableStreamDefaultControllerClose(t){var r=t._controlledReadableStream;t._closeRequested=!0;if(0===t._queue.length){ReadableStreamDefaultControllerClearAlgorithms(t);ReadableStreamClose(r)}}function ReadableStreamDefaultControllerEnqueue(t,r){var a=t._controlledReadableStream;if(!0===IsReadableStreamLocked(a)&&ReadableStreamGetNumReadRequests(a)>0)ReadableStreamFulfillReadRequest(a,r,!1);else{var o=void 0;try{o=t._strategySizeAlgorithm(r)}catch(r){ReadableStreamDefaultControllerError(t,r);throw r}try{EnqueueValueWithSize(t,r,o)}catch(r){ReadableStreamDefaultControllerError(t,r);throw r}}ReadableStreamDefaultControllerCallPullIfNeeded(t)}function ReadableStreamDefaultControllerError(t,r){var a=t._controlledReadableStream;if("readable"===a._state){ResetQueue(t);ReadableStreamDefaultControllerClearAlgorithms(t);ReadableStreamError(a,r)}}function ReadableStreamDefaultControllerGetDesiredSize(t){var r=t._controlledReadableStream._state;return"errored"===r?null:"closed"===r?0:t._strategyHWM-t._queueTotalSize}function ReadableStreamDefaultControllerCanCloseOrEnqueue(t){var r=t._controlledReadableStream._state;return!1===t._closeRequested&&"readable"===r}function SetUpReadableStreamDefaultController(t,r,a,o,i,l,c){r._controlledReadableStream=t;r._queue=void 0;r._queueTotalSize=void 0;ResetQueue(r);r._started=!1;r._closeRequested=!1;r._pullAgain=!1;r._pulling=!1;r._strategySizeAlgorithm=c;r._strategyHWM=l;r._pullAlgorithm=o;r._cancelAlgorithm=i;t._readableStreamController=r;uponPromise(promiseResolvedWith(a()),(function(){r._started=!0;ReadableStreamDefaultControllerCallPullIfNeeded(r)}),(function(t){ReadableStreamDefaultControllerError(r,t)}))}function defaultControllerBrandCheckException(t){return new TypeError("ReadableStreamDefaultController.prototype."+t+" can only be used on a ReadableStreamDefaultController")}var P=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},x=function(){function ReadableStreamBYOBRequest(){throw new TypeError("ReadableStreamBYOBRequest cannot be used directly")}Object.defineProperty(ReadableStreamBYOBRequest.prototype,"view",{get:function(){if(!1===IsReadableStreamBYOBRequest(this))throw byobRequestBrandCheckException("view");return this._view},enumerable:!0,configurable:!0});ReadableStreamBYOBRequest.prototype.respond=function(t){if(!1===IsReadableStreamBYOBRequest(this))throw byobRequestBrandCheckException("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");this._view.buffer;!function ReadableByteStreamControllerRespond(t,r){if(!1===IsFiniteNonNegativeNumber(r=Number(r)))throw new RangeError("bytesWritten must be a finite");ReadableByteStreamControllerRespondInternal(t,r)}(this._associatedReadableByteStreamController,t)};ReadableStreamBYOBRequest.prototype.respondWithNewView=function(t){if(!1===IsReadableStreamBYOBRequest(this))throw byobRequestBrandCheckException("respond");if(void 0===this._associatedReadableByteStreamController)throw new TypeError("This BYOB request has been invalidated");if(!ArrayBuffer.isView(t))throw new TypeError("You can only respond with array buffer views");t.buffer;!function ReadableByteStreamControllerRespondWithNewView(t,r){var a=t._pendingPullIntos.peek();if(a.byteOffset+a.bytesFilled!==r.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.byteLength!==r.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");a.buffer=r.buffer;ReadableByteStreamControllerRespondInternal(t,r.byteLength)}(this._associatedReadableByteStreamController,t)};return ReadableStreamBYOBRequest}(),T=function(){function ReadableByteStreamController(){throw new TypeError("ReadableByteStreamController constructor cannot be used directly")}Object.defineProperty(ReadableByteStreamController.prototype,"byobRequest",{get:function(){if(!1===IsReadableByteStreamController(this))throw byteStreamControllerBrandCheckException("byobRequest");if(void 0===this._byobRequest&&this._pendingPullIntos.length>0){var t=this._pendingPullIntos.peek(),r=new Uint8Array(t.buffer,t.byteOffset+t.bytesFilled,t.byteLength-t.bytesFilled),a=Object.create(x.prototype);!function SetUpReadableStreamBYOBRequest(t,r,a){t._associatedReadableByteStreamController=r;t._view=a}(a,this,r);this._byobRequest=a}return this._byobRequest},enumerable:!0,configurable:!0});Object.defineProperty(ReadableByteStreamController.prototype,"desiredSize",{get:function(){if(!1===IsReadableByteStreamController(this))throw byteStreamControllerBrandCheckException("desiredSize");return ReadableByteStreamControllerGetDesiredSize(this)},enumerable:!0,configurable:!0});ReadableByteStreamController.prototype.close=function(){if(!1===IsReadableByteStreamController(this))throw byteStreamControllerBrandCheckException("close");if(!0===this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");var t=this._controlledReadableByteStream._state;if("readable"!==t)throw new TypeError("The stream (in "+t+" state) is not in the readable state and cannot be closed");!function ReadableByteStreamControllerClose(t){var r=t._controlledReadableByteStream;if(t._queueTotalSize>0)t._closeRequested=!0;else{if(t._pendingPullIntos.length>0&&t._pendingPullIntos.peek().bytesFilled>0){var a=new TypeError("Insufficient bytes to fill elements in the given buffer");ReadableByteStreamControllerError(t,a);throw a}ReadableByteStreamControllerClearAlgorithms(t);ReadableStreamClose(r)}}(this)};ReadableByteStreamController.prototype.enqueue=function(t){if(!1===IsReadableByteStreamController(this))throw byteStreamControllerBrandCheckException("enqueue");if(!0===this._closeRequested)throw new TypeError("stream is closed or draining");var r=this._controlledReadableByteStream._state;if("readable"!==r)throw new TypeError("The stream (in "+r+" state) is not in the readable state and cannot be enqueued to");if(!ArrayBuffer.isView(t))throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController");t.buffer;!function ReadableByteStreamControllerEnqueue(t,r){var a=t._controlledReadableByteStream,o=r.buffer,i=r.byteOffset,l=r.byteLength,c=o;if(!0===ReadableStreamHasDefaultReader(a))if(0===ReadableStreamGetNumReadRequests(a))ReadableByteStreamControllerEnqueueChunkToQueue(t,c,i,l);else{var u=new Uint8Array(c,i,l);ReadableStreamFulfillReadRequest(a,u,!1)}else if(!0===ReadableStreamHasBYOBReader(a)){ReadableByteStreamControllerEnqueueChunkToQueue(t,c,i,l);ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t)}else ReadableByteStreamControllerEnqueueChunkToQueue(t,c,i,l);ReadableByteStreamControllerCallPullIfNeeded(t)}(this,t)};ReadableByteStreamController.prototype.error=function(t){if(!1===IsReadableByteStreamController(this))throw byteStreamControllerBrandCheckException("error");ReadableByteStreamControllerError(this,t)};ReadableByteStreamController.prototype[h]=function(t){this._pendingPullIntos.length>0&&(this._pendingPullIntos.peek().bytesFilled=0);ResetQueue(this);var r=this._cancelAlgorithm(t);ReadableByteStreamControllerClearAlgorithms(this);return r};ReadableByteStreamController.prototype[p]=function(){var t=this._controlledReadableByteStream;if(this._queueTotalSize>0){var r=this._queue.shift();this._queueTotalSize-=r.byteLength;ReadableByteStreamControllerHandleQueueDrain(this);var a=void 0;try{a=new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}catch(t){return promiseRejectedWith(t)}return promiseResolvedWith(ReadableStreamCreateReadResult(a,!1,t._reader._forAuthorCode))}var o=this._autoAllocateChunkSize;if(void 0!==o){var i=void 0;try{i=new ArrayBuffer(o)}catch(t){return promiseRejectedWith(t)}var l={buffer:i,byteOffset:0,byteLength:o,bytesFilled:0,elementSize:1,ctor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(l)}var c=ReadableStreamAddReadRequest(t);ReadableByteStreamControllerCallPullIfNeeded(this);return c};return ReadableByteStreamController}();function IsReadableByteStreamController(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_controlledReadableByteStream")}function IsReadableStreamBYOBRequest(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_associatedReadableByteStreamController")}function ReadableByteStreamControllerCallPullIfNeeded(t){if(!1!==function ReadableByteStreamControllerShouldCallPull(t){var r=t._controlledReadableByteStream;return"readable"===r._state&&(!0!==t._closeRequested&&(!1!==t._started&&(!0===ReadableStreamHasDefaultReader(r)&&ReadableStreamGetNumReadRequests(r)>0||(!0===ReadableStreamHasBYOBReader(r)&&ReadableStreamGetNumReadIntoRequests(r)>0||ReadableByteStreamControllerGetDesiredSize(t)>0))))}(t))if(!0!==t._pulling){t._pulling=!0;uponPromise(t._pullAlgorithm(),(function(){t._pulling=!1;if(!0===t._pullAgain){t._pullAgain=!1;ReadableByteStreamControllerCallPullIfNeeded(t)}}),(function(r){ReadableByteStreamControllerError(t,r)}))}else t._pullAgain=!0}function ReadableByteStreamControllerCommitPullIntoDescriptor(t,r){var a=!1;"closed"===t._state&&(a=!0);var o=ReadableByteStreamControllerConvertPullIntoDescriptor(r);"default"===r.readerType?ReadableStreamFulfillReadRequest(t,o,a):function ReadableStreamFulfillReadIntoRequest(t,r,a){var o=t._reader;o._readIntoRequests.shift()._resolve(ReadableStreamCreateReadResult(r,a,o._forAuthorCode))}(t,o,a)}function ReadableByteStreamControllerConvertPullIntoDescriptor(t){var r=t.bytesFilled,a=t.elementSize;return new t.ctor(t.buffer,t.byteOffset,r/a)}function ReadableByteStreamControllerEnqueueChunkToQueue(t,r,a,o){t._queue.push({buffer:r,byteOffset:a,byteLength:o});t._queueTotalSize+=o}function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(t,r){var a=r.elementSize,o=r.bytesFilled-r.bytesFilled%a,i=Math.min(t._queueTotalSize,r.byteLength-r.bytesFilled),l=r.bytesFilled+i,c=l-l%a,u=i,d=!1;if(c>o){u=c-r.bytesFilled;d=!0}for(var h,p,m,v,g,y=t._queue;u>0;){var b=y.peek(),_=Math.min(u,b.byteLength),S=r.byteOffset+r.bytesFilled;h=r.buffer,p=S,m=b.buffer,v=b.byteOffset,g=_,new Uint8Array(h).set(new Uint8Array(m,v,g),p);if(b.byteLength===_)y.shift();else{b.byteOffset+=_;b.byteLength-=_}t._queueTotalSize-=_;ReadableByteStreamControllerFillHeadPullIntoDescriptor(t,_,r);u-=_}return d}function ReadableByteStreamControllerFillHeadPullIntoDescriptor(t,r,a){ReadableByteStreamControllerInvalidateBYOBRequest(t);a.bytesFilled+=r}function ReadableByteStreamControllerHandleQueueDrain(t){if(0===t._queueTotalSize&&!0===t._closeRequested){ReadableByteStreamControllerClearAlgorithms(t);ReadableStreamClose(t._controlledReadableByteStream)}else ReadableByteStreamControllerCallPullIfNeeded(t)}function ReadableByteStreamControllerInvalidateBYOBRequest(t){if(void 0!==t._byobRequest){t._byobRequest._associatedReadableByteStreamController=void 0;t._byobRequest._view=void 0;t._byobRequest=void 0}}function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t){for(;t._pendingPullIntos.length>0;){if(0===t._queueTotalSize)return;var r=t._pendingPullIntos.peek();if(!0===ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(t,r)){ReadableByteStreamControllerShiftPendingPullInto(t);ReadableByteStreamControllerCommitPullIntoDescriptor(t._controlledReadableByteStream,r)}}}function ReadableByteStreamControllerRespondInternal(t,r){var a=t._pendingPullIntos.peek();if("closed"===t._controlledReadableByteStream._state){if(0!==r)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");!function ReadableByteStreamControllerRespondInClosedState(t,r){r.buffer=r.buffer;var a=t._controlledReadableByteStream;if(!0===ReadableStreamHasBYOBReader(a))for(;ReadableStreamGetNumReadIntoRequests(a)>0;)ReadableByteStreamControllerCommitPullIntoDescriptor(a,ReadableByteStreamControllerShiftPendingPullInto(t))}(t,a)}else!function ReadableByteStreamControllerRespondInReadableState(t,r,a){if(a.bytesFilled+r>a.byteLength)throw new RangeError("bytesWritten out of range");ReadableByteStreamControllerFillHeadPullIntoDescriptor(t,r,a);if(!(a.bytesFilled<a.elementSize)){ReadableByteStreamControllerShiftPendingPullInto(t);var o=a.bytesFilled%a.elementSize;if(o>0){var i=a.byteOffset+a.bytesFilled,l=a.buffer.slice(i-o,i);ReadableByteStreamControllerEnqueueChunkToQueue(t,l,0,l.byteLength)}a.buffer=a.buffer;a.bytesFilled-=o;ReadableByteStreamControllerCommitPullIntoDescriptor(t._controlledReadableByteStream,a);ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(t)}}(t,r,a);ReadableByteStreamControllerCallPullIfNeeded(t)}function ReadableByteStreamControllerShiftPendingPullInto(t){var r=t._pendingPullIntos.shift();ReadableByteStreamControllerInvalidateBYOBRequest(t);return r}function ReadableByteStreamControllerClearAlgorithms(t){t._pullAlgorithm=void 0;t._cancelAlgorithm=void 0}function ReadableByteStreamControllerError(t,r){var a=t._controlledReadableByteStream;if("readable"===a._state){!function ReadableByteStreamControllerClearPendingPullIntos(t){ReadableByteStreamControllerInvalidateBYOBRequest(t);t._pendingPullIntos=new d}(t);ResetQueue(t);ReadableByteStreamControllerClearAlgorithms(t);ReadableStreamError(a,r)}}function ReadableByteStreamControllerGetDesiredSize(t){var r=t._controlledReadableByteStream._state;return"errored"===r?null:"closed"===r?0:t._strategyHWM-t._queueTotalSize}function SetUpReadableByteStreamControllerFromUnderlyingSource(t,r,a){var o=Object.create(T.prototype),i=CreateAlgorithmFromUnderlyingMethod(r,"pull",0,[o]),l=CreateAlgorithmFromUnderlyingMethod(r,"cancel",1,[]),c=r.autoAllocateChunkSize;if(void 0!==c){c=Number(c);if(!1===P(c)||c<=0)throw new RangeError("autoAllocateChunkSize must be a positive integer")}!function SetUpReadableByteStreamController(t,r,a,o,i,l,c){r._controlledReadableByteStream=t;r._pullAgain=!1;r._pulling=!1;r._byobRequest=void 0;r._queue=r._queueTotalSize=void 0;ResetQueue(r);r._closeRequested=!1;r._started=!1;r._strategyHWM=ValidateAndNormalizeHighWaterMark(l);r._pullAlgorithm=o;r._cancelAlgorithm=i;r._autoAllocateChunkSize=c;r._pendingPullIntos=new d;t._readableStreamController=r;uponPromise(promiseResolvedWith(a()),(function(){r._started=!0;ReadableByteStreamControllerCallPullIfNeeded(r)}),(function(t){ReadableByteStreamControllerError(r,t)}))}(t,o,(function startAlgorithm(){return InvokeOrNoop(r,"start",[o])}),i,l,a,c)}function byobRequestBrandCheckException(t){return new TypeError("ReadableStreamBYOBRequest.prototype."+t+" can only be used on a ReadableStreamBYOBRequest")}function byteStreamControllerBrandCheckException(t){return new TypeError("ReadableByteStreamController.prototype."+t+" can only be used on a ReadableByteStreamController")}function ReadableStreamAddReadIntoRequest(t){return newPromise((function(r,a){var o={_resolve:r,_reject:a};t._reader._readIntoRequests.push(o)}))}function ReadableStreamGetNumReadIntoRequests(t){return t._reader._readIntoRequests.length}function ReadableStreamHasBYOBReader(t){var r=t._reader;return void 0!==r&&!!IsReadableStreamBYOBReader(r)}var E=function(){function ReadableStreamBYOBReader(t){if(!IsReadableStream(t))throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source");if(!1===IsReadableByteStreamController(t._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");if(IsReadableStreamLocked(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");ReadableStreamReaderGenericInitialize(this,t);this._readIntoRequests=new d}Object.defineProperty(ReadableStreamBYOBReader.prototype,"closed",{get:function(){return IsReadableStreamBYOBReader(this)?this._closedPromise:promiseRejectedWith(byobReaderBrandCheckException("closed"))},enumerable:!0,configurable:!0});ReadableStreamBYOBReader.prototype.cancel=function(t){return IsReadableStreamBYOBReader(this)?void 0===this._ownerReadableStream?promiseRejectedWith(readerLockException("cancel")):ReadableStreamReaderGenericCancel(this,t):promiseRejectedWith(byobReaderBrandCheckException("cancel"))};ReadableStreamBYOBReader.prototype.read=function(t){if(!IsReadableStreamBYOBReader(this))return promiseRejectedWith(byobReaderBrandCheckException("read"));if(void 0===this._ownerReadableStream)return promiseRejectedWith(readerLockException("read from"));if(!ArrayBuffer.isView(t))return promiseRejectedWith(new TypeError("view must be an array buffer view"));t.buffer;return 0===t.byteLength?promiseRejectedWith(new TypeError("view must have non-zero byteLength")):function ReadableStreamBYOBReaderRead(t,r){var a=t._ownerReadableStream;a._disturbed=!0;return"errored"===a._state?promiseRejectedWith(a._storedError):function ReadableByteStreamControllerPullInto(t,r){var a=t._controlledReadableByteStream,o=1;r.constructor!==DataView&&(o=r.constructor.BYTES_PER_ELEMENT);var i=r.constructor,l={buffer:r.buffer,byteOffset:r.byteOffset,byteLength:r.byteLength,bytesFilled:0,elementSize:o,ctor:i,readerType:"byob"};if(t._pendingPullIntos.length>0){t._pendingPullIntos.push(l);return ReadableStreamAddReadIntoRequest(a)}if("closed"===a._state)return promiseResolvedWith(ReadableStreamCreateReadResult(new i(l.buffer,l.byteOffset,0),!0,a._reader._forAuthorCode));if(t._queueTotalSize>0){if(!0===ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(t,l)){var c=ReadableByteStreamControllerConvertPullIntoDescriptor(l);ReadableByteStreamControllerHandleQueueDrain(t);return promiseResolvedWith(ReadableStreamCreateReadResult(c,!1,a._reader._forAuthorCode))}if(!0===t._closeRequested){var u=new TypeError("Insufficient bytes to fill elements in the given buffer");ReadableByteStreamControllerError(t,u);return promiseRejectedWith(u)}}t._pendingPullIntos.push(l);var d=ReadableStreamAddReadIntoRequest(a);ReadableByteStreamControllerCallPullIfNeeded(t);return d}(a._readableStreamController,r)}(this,t)};ReadableStreamBYOBReader.prototype.releaseLock=function(){if(!IsReadableStreamBYOBReader(this))throw byobReaderBrandCheckException("releaseLock");if(void 0!==this._ownerReadableStream){if(this._readIntoRequests.length>0)throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");ReadableStreamReaderGenericRelease(this)}};return ReadableStreamBYOBReader}();function IsReadableStreamBYOBReader(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_readIntoRequests")}function byobReaderBrandCheckException(t){return new TypeError("ReadableStreamBYOBReader.prototype."+t+" can only be used on a ReadableStreamBYOBReader")}var O=function(){function ReadableStream(t,r){void 0===t&&(t={});void 0===r&&(r={});InitializeReadableStream(this);var a=r.size,o=r.highWaterMark,i=t.type;if("bytes"===String(i)){if(void 0!==a)throw new RangeError("The strategy for a byte stream cannot have a size function");void 0===o&&(o=0);SetUpReadableByteStreamControllerFromUnderlyingSource(this,t,o=ValidateAndNormalizeHighWaterMark(o))}else{if(void 0!==i)throw new RangeError("Invalid type is specified");var l=MakeSizeAlgorithmFromSizeFunction(a);void 0===o&&(o=1);!function SetUpReadableStreamDefaultControllerFromUnderlyingSource(t,r,a,o){var i=Object.create(w.prototype),l=CreateAlgorithmFromUnderlyingMethod(r,"pull",0,[i]),c=CreateAlgorithmFromUnderlyingMethod(r,"cancel",1,[]);SetUpReadableStreamDefaultController(t,i,(function startAlgorithm(){return InvokeOrNoop(r,"start",[i])}),l,c,a,o)}(this,t,o=ValidateAndNormalizeHighWaterMark(o),l)}}Object.defineProperty(ReadableStream.prototype,"locked",{get:function(){if(!1===IsReadableStream(this))throw streamBrandCheckException$1("locked");return IsReadableStreamLocked(this)},enumerable:!0,configurable:!0});ReadableStream.prototype.cancel=function(t){return!1===IsReadableStream(this)?promiseRejectedWith(streamBrandCheckException$1("cancel")):!0===IsReadableStreamLocked(this)?promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader")):ReadableStreamCancel(this,t)};ReadableStream.prototype.getReader=function(t){var r=(void 0===t?{}:t).mode;if(!1===IsReadableStream(this))throw streamBrandCheckException$1("getReader");if(void 0===r)return AcquireReadableStreamDefaultReader(this,!0);if("byob"===(r=String(r)))return function AcquireReadableStreamBYOBReader(t,r){void 0===r&&(r=!1);var a=new E(t);a._forAuthorCode=r;return a}(this,!0);throw new RangeError("Invalid mode is specified")};ReadableStream.prototype.pipeThrough=function(t,r){var a=t.writable,o=t.readable,i=void 0===r?{}:r,l=i.preventClose,c=i.preventAbort,u=i.preventCancel,d=i.signal;if(!1===IsReadableStream(this))throw streamBrandCheckException$1("pipeThrough");if(!1===IsWritableStream(a))throw new TypeError("writable argument to pipeThrough must be a WritableStream");if(!1===IsReadableStream(o))throw new TypeError("readable argument to pipeThrough must be a ReadableStream");l=Boolean(l);c=Boolean(c);u=Boolean(u);if(void 0!==d&&!isAbortSignal(d))throw new TypeError("ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal");if(!0===IsReadableStreamLocked(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(!0===IsWritableStreamLocked(a))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");setPromiseIsHandledToTrue(ReadableStreamPipeTo(this,a,l,c,u,d));return o};ReadableStream.prototype.pipeTo=function(t,r){var a=void 0===r?{}:r,o=a.preventClose,i=a.preventAbort,l=a.preventCancel,c=a.signal;if(!1===IsReadableStream(this))return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));if(!1===IsWritableStream(t))return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));o=Boolean(o);i=Boolean(i);l=Boolean(l);return void 0===c||isAbortSignal(c)?!0===IsReadableStreamLocked(this)?promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):!0===IsWritableStreamLocked(t)?promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):ReadableStreamPipeTo(this,t,o,i,l,c):promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's signal option must be an AbortSignal"))};ReadableStream.prototype.tee=function(){if(!1===IsReadableStream(this))throw streamBrandCheckException$1("tee");var t=function ReadableStreamTee(t,r){var a,o,i,l,c,u=AcquireReadableStreamDefaultReader(t),d=!1,h=!1,p=!1,m=newPromise((function(t){c=t}));function pullAlgorithm(){if(!0===d)return promiseResolvedWith(void 0);d=!0;setPromiseIsHandledToTrue(transformPromiseWith(ReadableStreamDefaultReaderRead(u),(function(t){d=!1;if(!0!==t.done){var r=t.value,a=r,o=r;!1===h&&ReadableStreamDefaultControllerEnqueue(i._readableStreamController,a);!1===p&&ReadableStreamDefaultControllerEnqueue(l._readableStreamController,o)}else{!1===h&&ReadableStreamDefaultControllerClose(i._readableStreamController);!1===p&&ReadableStreamDefaultControllerClose(l._readableStreamController)}})));return promiseResolvedWith(void 0)}function startAlgorithm(){}i=CreateReadableStream(startAlgorithm,pullAlgorithm,(function cancel1Algorithm(r){h=!0;a=r;if(!0===p){var i=createArrayFromList([a,o]),l=ReadableStreamCancel(t,i);c(l)}return m}));l=CreateReadableStream(startAlgorithm,pullAlgorithm,(function cancel2Algorithm(r){p=!0;o=r;if(!0===h){var i=createArrayFromList([a,o]),l=ReadableStreamCancel(t,i);c(l)}return m}));uponRejection(u._closedPromise,(function(t){ReadableStreamDefaultControllerError(i._readableStreamController,t);ReadableStreamDefaultControllerError(l._readableStreamController,t)}));return[i,l]}(this);return createArrayFromList(t)};ReadableStream.prototype.getIterator=function(t){var r=(void 0===t?{}:t).preventCancel,a=void 0!==r&&r;if(!1===IsReadableStream(this))throw streamBrandCheckException$1("getIterator");return function AcquireReadableStreamAsyncIterator(t,r){void 0===r&&(r=!1);var a=AcquireReadableStreamDefaultReader(t),o=Object.create(y);o._asyncIteratorReader=a;o._preventCancel=Boolean(r);return o}(this,a)};return ReadableStream}();"symbol"==typeof r.asyncIterator&&Object.defineProperty(O.prototype,r.asyncIterator,{value:O.prototype.getIterator,enumerable:!1,writable:!0,configurable:!0});function CreateReadableStream(t,r,a,o,i){void 0===o&&(o=1);void 0===i&&(i=function(){return 1});var l=Object.create(O.prototype);InitializeReadableStream(l);SetUpReadableStreamDefaultController(l,Object.create(w.prototype),t,r,a,o,i);return l}function InitializeReadableStream(t){t._state="readable";t._reader=void 0;t._storedError=void 0;t._disturbed=!1}function IsReadableStream(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_readableStreamController")}function IsReadableStreamLocked(t){return void 0!==t._reader}function ReadableStreamCancel(t,r){t._disturbed=!0;if("closed"===t._state)return promiseResolvedWith(void 0);if("errored"===t._state)return promiseRejectedWith(t._storedError);ReadableStreamClose(t);return transformPromiseWith(t._readableStreamController[h](r),noop)}function ReadableStreamClose(t){t._state="closed";var r=t._reader;if(void 0!==r){if(IsReadableStreamDefaultReader(r)){r._readRequests.forEach((function(t){t._resolve(ReadableStreamCreateReadResult(void 0,!0,r._forAuthorCode))}));r._readRequests=new d}defaultReaderClosedPromiseResolve(r)}}function ReadableStreamError(t,r){t._state="errored";t._storedError=r;var a=t._reader;if(void 0!==a){if(IsReadableStreamDefaultReader(a)){a._readRequests.forEach((function(t){t._reject(r)}));a._readRequests=new d}else{a._readIntoRequests.forEach((function(t){t._reject(r)}));a._readIntoRequests=new d}defaultReaderClosedPromiseReject(a,r)}}function streamBrandCheckException$1(t){return new TypeError("ReadableStream.prototype."+t+" can only be used on a ReadableStream")}var I=function(){function ByteLengthQueuingStrategy(t){var r=t.highWaterMark;this.highWaterMark=r}ByteLengthQueuingStrategy.prototype.size=function(t){return t.byteLength};return ByteLengthQueuingStrategy}(),D=function(){function CountQueuingStrategy(t){var r=t.highWaterMark;this.highWaterMark=r}CountQueuingStrategy.prototype.size=function(){return 1};return CountQueuingStrategy}(),L=function(){function TransformStream(t,r,a){void 0===t&&(t={});void 0===r&&(r={});void 0===a&&(a={});var o=r.size,i=r.highWaterMark,l=a.size,c=a.highWaterMark;if(void 0!==t.writableType)throw new RangeError("Invalid writable type specified");var u=MakeSizeAlgorithmFromSizeFunction(o);void 0===i&&(i=1);i=ValidateAndNormalizeHighWaterMark(i);if(void 0!==t.readableType)throw new RangeError("Invalid readable type specified");var d,h=MakeSizeAlgorithmFromSizeFunction(l);void 0===c&&(c=0);c=ValidateAndNormalizeHighWaterMark(c);!function InitializeTransformStream(t,r,a,o,i,l){function startAlgorithm(){return r}t._writable=function CreateWritableStream(t,r,a,o,i,l){void 0===i&&(i=1);void 0===l&&(l=function(){return 1});var c=Object.create(S.prototype);InitializeWritableStream(c);SetUpWritableStreamDefaultController(c,Object.create(A.prototype),t,r,a,o,i,l);return c}(startAlgorithm,(function writeAlgorithm(r){return function TransformStreamDefaultSinkWriteAlgorithm(t,r){var a=t._transformStreamController;return!0===t._backpressure?transformPromiseWith(t._backpressureChangePromise,(function(){var o=t._writable;if("erroring"===o._state)throw o._storedError;return TransformStreamDefaultControllerPerformTransform(a,r)})):TransformStreamDefaultControllerPerformTransform(a,r)}(t,r)}),(function closeAlgorithm(){return function TransformStreamDefaultSinkCloseAlgorithm(t){var r=t._readable,a=t._transformStreamController,o=a._flushAlgorithm();TransformStreamDefaultControllerClearAlgorithms(a);return transformPromiseWith(o,(function(){if("errored"===r._state)throw r._storedError;var t=r._readableStreamController;!0===ReadableStreamDefaultControllerCanCloseOrEnqueue(t)&&ReadableStreamDefaultControllerClose(t)}),(function(a){TransformStreamError(t,a);throw r._storedError}))}(t)}),(function abortAlgorithm(r){return function TransformStreamDefaultSinkAbortAlgorithm(t,r){TransformStreamError(t,r);return promiseResolvedWith(void 0)}(t,r)}),a,o);t._readable=CreateReadableStream(startAlgorithm,(function pullAlgorithm(){return function TransformStreamDefaultSourcePullAlgorithm(t){TransformStreamSetBackpressure(t,!1);return t._backpressureChangePromise}(t)}),(function cancelAlgorithm(r){TransformStreamErrorWritableAndUnblockWrite(t,r);return promiseResolvedWith(void 0)}),i,l);t._backpressure=void 0;t._backpressureChangePromise=void 0;t._backpressureChangePromise_resolve=void 0;TransformStreamSetBackpressure(t,!0);t._transformStreamController=void 0}(this,newPromise((function(t){d=t})),i,u,c,h);!function SetUpTransformStreamDefaultControllerFromTransformer(t,r){var a=Object.create(M.prototype),transformAlgorithm=function(t){try{TransformStreamDefaultControllerEnqueue(a,t);return promiseResolvedWith(void 0)}catch(t){return promiseRejectedWith(t)}},o=r.transform;if(void 0!==o){if("function"!=typeof o)throw new TypeError("transform is not a method");transformAlgorithm=function(t){return PromiseCall(o,r,[t,a])}}var i=CreateAlgorithmFromUnderlyingMethod(r,"flush",0,[a]);!function SetUpTransformStreamDefaultController(t,r,a,o){r._controlledTransformStream=t;t._transformStreamController=r;r._transformAlgorithm=a;r._flushAlgorithm=o}(t,a,transformAlgorithm,i)}(this,t);var p=InvokeOrNoop(t,"start",[this._transformStreamController]);d(p)}Object.defineProperty(TransformStream.prototype,"readable",{get:function(){if(!1===IsTransformStream(this))throw streamBrandCheckException$2("readable");return this._readable},enumerable:!0,configurable:!0});Object.defineProperty(TransformStream.prototype,"writable",{get:function(){if(!1===IsTransformStream(this))throw streamBrandCheckException$2("writable");return this._writable},enumerable:!0,configurable:!0});return TransformStream}();function IsTransformStream(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_transformStreamController")}function TransformStreamError(t,r){ReadableStreamDefaultControllerError(t._readable._readableStreamController,r);TransformStreamErrorWritableAndUnblockWrite(t,r)}function TransformStreamErrorWritableAndUnblockWrite(t,r){TransformStreamDefaultControllerClearAlgorithms(t._transformStreamController);WritableStreamDefaultControllerErrorIfNeeded(t._writable._writableStreamController,r);!0===t._backpressure&&TransformStreamSetBackpressure(t,!1)}function TransformStreamSetBackpressure(t,r){void 0!==t._backpressureChangePromise&&t._backpressureChangePromise_resolve();t._backpressureChangePromise=newPromise((function(r){t._backpressureChangePromise_resolve=r}));t._backpressure=r}var M=function(){function TransformStreamDefaultController(){throw new TypeError("TransformStreamDefaultController instances cannot be created directly")}Object.defineProperty(TransformStreamDefaultController.prototype,"desiredSize",{get:function(){if(!1===IsTransformStreamDefaultController(this))throw defaultControllerBrandCheckException$1("desiredSize");return ReadableStreamDefaultControllerGetDesiredSize(this._controlledTransformStream._readable._readableStreamController)},enumerable:!0,configurable:!0});TransformStreamDefaultController.prototype.enqueue=function(t){if(!1===IsTransformStreamDefaultController(this))throw defaultControllerBrandCheckException$1("enqueue");TransformStreamDefaultControllerEnqueue(this,t)};TransformStreamDefaultController.prototype.error=function(t){if(!1===IsTransformStreamDefaultController(this))throw defaultControllerBrandCheckException$1("error");!function TransformStreamDefaultControllerError(t,r){TransformStreamError(t._controlledTransformStream,r)}(this,t)};TransformStreamDefaultController.prototype.terminate=function(){if(!1===IsTransformStreamDefaultController(this))throw defaultControllerBrandCheckException$1("terminate");!function TransformStreamDefaultControllerTerminate(t){var r=t._controlledTransformStream,a=r._readable._readableStreamController;!0===ReadableStreamDefaultControllerCanCloseOrEnqueue(a)&&ReadableStreamDefaultControllerClose(a);var o=new TypeError("TransformStream terminated");TransformStreamErrorWritableAndUnblockWrite(r,o)}(this)};return TransformStreamDefaultController}();function IsTransformStreamDefaultController(t){return!!typeIsObject(t)&&!!Object.prototype.hasOwnProperty.call(t,"_controlledTransformStream")}function TransformStreamDefaultControllerClearAlgorithms(t){t._transformAlgorithm=void 0;t._flushAlgorithm=void 0}function TransformStreamDefaultControllerEnqueue(t,r){var a=t._controlledTransformStream,o=a._readable._readableStreamController;if(!1===ReadableStreamDefaultControllerCanCloseOrEnqueue(o))throw new TypeError("Readable side is not in a state that permits enqueue");try{ReadableStreamDefaultControllerEnqueue(o,r)}catch(t){TransformStreamErrorWritableAndUnblockWrite(a,t);throw a._readable._storedError}(function ReadableStreamDefaultControllerHasBackpressure(t){return!0!==ReadableStreamDefaultControllerShouldCallPull(t)})(o)!==a._backpressure&&TransformStreamSetBackpressure(a,!0)}function TransformStreamDefaultControllerPerformTransform(t,r){return transformPromiseWith(t._transformAlgorithm(r),void 0,(function(r){TransformStreamError(t._controlledTransformStream,r);throw r}))}function defaultControllerBrandCheckException$1(t){return new TypeError("TransformStreamDefaultController.prototype."+t+" can only be used on a TransformStreamDefaultController")}function streamBrandCheckException$2(t){return new TypeError("TransformStream.prototype."+t+" can only be used on a TransformStream")}t.ByteLengthQueuingStrategy=I;t.CountQueuingStrategy=D;t.ReadableStream=O;t.TransformStream=L;t.WritableStream=S;Object.defineProperty(t,"__esModule",{value:!0})}(r)},function(t,r,a){a(147);a(118);a(77);a(120);var o=a(43);t.exports=o.Map},function(t,r,a){"use strict";var o=a(148),i=a(152);t.exports=o("Map",(function(t){return function Map(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},function(t,r,a){"use strict";var o=a(10),i=a(11),l=a(52),c=a(29),u=a(149),d=a(104),h=a(126),p=a(22),m=a(14),v=a(97),g=a(85),y=a(151);t.exports=function(t,r,a){var b=-1!==t.indexOf("Map"),_=-1!==t.indexOf("Weak"),S=b?"set":"add",C=i[t],A=C&&C.prototype,R=C,k={},fixMethod=function(t){var r=A[t];c(A,t,"add"==t?function add(t){r.call(this,0===t?0:t);return this}:"delete"==t?function(t){return!(_&&!p(t))&&r.call(this,0===t?0:t)}:"get"==t?function get(t){return _&&!p(t)?void 0:r.call(this,0===t?0:t)}:"has"==t?function has(t){return!(_&&!p(t))&&r.call(this,0===t?0:t)}:function set(t,a){r.call(this,0===t?0:t,a);return this})};if(l(t,"function"!=typeof C||!(_||A.forEach&&!m((function(){(new C).entries().next()}))))){R=a.getConstructor(r,t,b,S);u.REQUIRED=!0}else if(l(t,!0)){var w=new R,P=w[S](_?{}:-0,1)!=w,x=m((function(){w.has(1)})),T=v((function(t){new C(t)})),E=!_&&m((function(){for(var t=new C,r=5;r--;)t[S](r,r);return!t.has(-0)}));if(!T){(R=r((function(r,a){h(r,R,t);var o=y(new C,r,R);null!=a&&d(a,o[S],o,b);return o}))).prototype=A;A.constructor=R}if(x||E){fixMethod("delete");fixMethod("has");b&&fixMethod("get")}(E||P)&&fixMethod(S);_&&A.clear&&delete A.clear}k[t]=R;o({global:!0,forced:R!=C},k);g(R,t);_||a.setStrong(R,t,b);return R}},function(t,r,a){var o=a(39),i=a(22),l=a(23),c=a(27).f,u=a(38),d=a(150),h=u("meta"),p=0,m=Object.isExtensible||function(){return!0},setMetadata=function(t){c(t,h,{value:{objectID:"O"+ ++p,weakData:{}}})},v=t.exports={REQUIRED:!1,fastKey:function(t,r){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!l(t,h)){if(!m(t))return"F";if(!r)return"E";setMetadata(t)}return t[h].objectID},getWeakData:function(t,r){if(!l(t,h)){if(!m(t))return!0;if(!r)return!1;setMetadata(t)}return t[h].weakData},onFreeze:function(t){d&&v.REQUIRED&&m(t)&&!l(t,h)&&setMetadata(t);return t}};o[h]=!0},function(t,r,a){var o=a(14);t.exports=!o((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,r,a){var o=a(22),i=a(87);t.exports=function(t,r,a){var l,c;i&&"function"==typeof(l=r.constructor)&&l!==a&&o(c=l.prototype)&&c!==a.prototype&&i(t,c);return t}},function(t,r,a){"use strict";var o=a(27).f,i=a(71),l=a(124),c=a(62),u=a(126),d=a(104),h=a(79),p=a(125),m=a(13),v=a(149).fastKey,g=a(33),y=g.set,b=g.getterFor;t.exports={getConstructor:function(t,r,a,h){var p=t((function(t,o){u(t,p,r);y(t,{type:r,index:i(null),first:void 0,last:void 0,size:0});m||(t.size=0);null!=o&&d(o,t[h],t,a)})),g=b(r),define=function(t,r,a){var o,i,l=g(t),c=getEntry(t,r);if(c)c.value=a;else{l.last=c={index:i=v(r,!0),key:r,value:a,previous:o=l.last,next:void 0,removed:!1};l.first||(l.first=c);o&&(o.next=c);m?l.size++:t.size++;"F"!==i&&(l.index[i]=c)}return t},getEntry=function(t,r){var a,o=g(t),i=v(r);if("F"!==i)return o.index[i];for(a=o.first;a;a=a.next)if(a.key==r)return a};l(p.prototype,{clear:function clear(){for(var t=g(this),r=t.index,a=t.first;a;){a.removed=!0;a.previous&&(a.previous=a.previous.next=void 0);delete r[a.index];a=a.next}t.first=t.last=void 0;m?t.size=0:this.size=0},delete:function(t){var r=g(this),a=getEntry(this,t);if(a){var o=a.next,i=a.previous;delete r.index[a.index];a.removed=!0;i&&(i.next=o);o&&(o.previous=i);r.first==a&&(r.first=o);r.last==a&&(r.last=i);m?r.size--:this.size--}return!!a},forEach:function forEach(t){for(var r,a=g(this),o=c(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.next:a.first;){o(r.value,r.key,this);for(;r&&r.removed;)r=r.previous}},has:function has(t){return!!getEntry(this,t)}});l(p.prototype,a?{get:function get(t){var r=getEntry(this,t);return r&&r.value},set:function set(t,r){return define(this,0===t?0:t,r)}}:{add:function add(t){return define(this,t=0===t?0:t,t)}});m&&o(p.prototype,"size",{get:function(){return g(this).size}});return p},setStrong:function(t,r,a){var o=r+" Iterator",i=b(r),l=b(o);h(t,r,(function(t,r){y(this,{type:o,target:t,state:i(t),kind:r,last:void 0})}),(function(){for(var t=l(this),r=t.kind,a=t.last;a&&a.removed;)a=a.previous;if(!t.target||!(t.last=a=a?a.next:t.state.first)){t.target=void 0;return{value:void 0,done:!0}}return"keys"==r?{value:a.key,done:!1}:"values"==r?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}}),a?"entries":"values",!a,!0);p(r)}}},function(t,r,a){a(154);a(118);a(77);a(120);var o=a(43);t.exports=o.Set},function(t,r,a){"use strict";var o=a(148),i=a(152);t.exports=o("Set",(function(t){return function Set(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},function(t,r,a){a(118);a(156);a(120);var o=a(43);t.exports=o.WeakMap},function(t,r,a){"use strict";var o,i=a(11),l=a(124),c=a(149),u=a(148),d=a(157),h=a(22),p=a(33).enforce,m=a(34),v=!i.ActiveXObject&&"ActiveXObject"in i,g=Object.isExtensible,wrapper=function(t){return function WeakMap(){return t(this,arguments.length?arguments[0]:void 0)}},y=t.exports=u("WeakMap",wrapper,d);if(m&&v){o=d.getConstructor(wrapper,"WeakMap",!0);c.REQUIRED=!0;var b=y.prototype,_=b.delete,S=b.has,C=b.get,A=b.set;l(b,{delete:function(t){if(h(t)&&!g(t)){var r=p(this);r.frozen||(r.frozen=new o);return _.call(this,t)||r.frozen.delete(t)}return _.call(this,t)},has:function has(t){if(h(t)&&!g(t)){var r=p(this);r.frozen||(r.frozen=new o);return S.call(this,t)||r.frozen.has(t)}return S.call(this,t)},get:function get(t){if(h(t)&&!g(t)){var r=p(this);r.frozen||(r.frozen=new o);return S.call(this,t)?C.call(this,t):r.frozen.get(t)}return C.call(this,t)},set:function set(t,r){if(h(t)&&!g(t)){var a=p(this);a.frozen||(a.frozen=new o);S.call(this,t)?A.call(this,t,r):a.frozen.set(t,r)}else A.call(this,t,r);return this}})}},function(t,r,a){"use strict";var o=a(124),i=a(149).getWeakData,l=a(28),c=a(22),u=a(126),d=a(104),h=a(158),p=a(23),m=a(33),v=m.set,g=m.getterFor,y=h.find,b=h.findIndex,_=0,uncaughtFrozenStore=function(t){return t.frozen||(t.frozen=new UncaughtFrozenStore)},UncaughtFrozenStore=function(){this.entries=[]},findUncaughtFrozen=function(t,r){return y(t.entries,(function(t){return t[0]===r}))};UncaughtFrozenStore.prototype={get:function(t){var r=findUncaughtFrozen(this,t);if(r)return r[1]},has:function(t){return!!findUncaughtFrozen(this,t)},set:function(t,r){var a=findUncaughtFrozen(this,t);a?a[1]=r:this.entries.push([t,r])},delete:function(t){var r=b(this.entries,(function(r){return r[0]===t}));~r&&this.entries.splice(r,1);return!!~r}};t.exports={getConstructor:function(t,r,a,h){var m=t((function(t,o){u(t,m,r);v(t,{type:r,id:_++,frozen:void 0});null!=o&&d(o,t[h],t,a)})),y=g(r),define=function(t,r,a){var o=y(t),c=i(l(r),!0);!0===c?uncaughtFrozenStore(o).set(r,a):c[o.id]=a;return t};o(m.prototype,{delete:function(t){var r=y(this);if(!c(t))return!1;var a=i(t);return!0===a?uncaughtFrozenStore(r).delete(t):a&&p(a,r.id)&&delete a[r.id]},has:function has(t){var r=y(this);if(!c(t))return!1;var a=i(t);return!0===a?uncaughtFrozenStore(r).has(t):a&&p(a,r.id)}});o(m.prototype,a?{get:function get(t){var r=y(this);if(c(t)){var a=i(t);return!0===a?uncaughtFrozenStore(r).get(t):a?a[r.id]:void 0}},set:function set(t,r){return define(this,t,r)}}:{add:function add(t){return define(this,t,!0)}});return m}}},function(t,r,a){var o=a(62),i=a(18),l=a(83),c=a(47),u=a(159),d=[].push,createMethod=function(t){var r=1==t,a=2==t,h=3==t,p=4==t,m=6==t,v=5==t||m;return function(g,y,b,_){for(var S,C,A=l(g),R=i(A),k=o(y,b,3),w=c(R.length),P=0,x=_||u,T=r?x(g,w):a?x(g,0):void 0;w>P;P++)if(v||P in R){C=k(S=R[P],P,A);if(t)if(r)T[P]=C;else if(C)switch(t){case 3:return!0;case 5:return S;case 6:return P;case 2:d.call(T,S)}else if(p)return!1}return m?-1:h||p?p:T}};t.exports={forEach:createMethod(0),map:createMethod(1),filter:createMethod(2),some:createMethod(3),every:createMethod(4),find:createMethod(5),findIndex:createMethod(6)}},function(t,r,a){var o=a(22),i=a(160),l=a(57)("species");t.exports=function(t,r){var a;i(t)&&("function"!=typeof(a=t.constructor)||a!==Array&&!i(a.prototype)?o(a)&&null===(a=a[l])&&(a=void 0):a=void 0);return new(void 0===a?Array:a)(0===r?0:r)}},function(t,r,a){var o=a(19);t.exports=Array.isArray||function isArray(t){return"Array"==o(t)}},function(t,r,a){a(118);a(162);a(120);var o=a(43);t.exports=o.WeakSet},function(t,r,a){"use strict";a(148)("WeakSet",(function(t){return function WeakSet(){return t(this,arguments.length?arguments[0]:void 0)}}),a(157))},function(t,r,a){a(164);var o=a(61);t.exports=o("String","codePointAt")},function(t,r,a){"use strict";var o=a(10),i=a(78).codeAt;o({target:"String",proto:!0},{codePointAt:function codePointAt(t){return i(this,t)}})},function(t,r,a){a(166);var o=a(43);t.exports=o.String.fromCodePoint},function(t,r,a){var o=a(10),i=a(49),l=String.fromCharCode,c=String.fromCodePoint;o({target:"String",stat:!0,forced:!!c&&1!=c.length},{fromCodePoint:function fromCodePoint(t){for(var r,a=[],o=arguments.length,c=0;o>c;){r=+arguments[c++];if(i(r,1114111)!==r)throw RangeError(r+" is not a valid code point");a.push(r<65536?l(r):l(55296+((r-=65536)>>10),r%1024+56320))}return a.join("")}})},function(t,r,a){a(168);a(118);a(170);a(174);a(175);a(176);a(177);a(178);a(179);a(180);a(181);a(182);a(183);a(184);a(185);a(186);a(187);a(188);a(189);var o=a(43);t.exports=o.Symbol},function(t,r,a){"use strict";var o=a(10),i=a(14),l=a(160),c=a(22),u=a(83),d=a(47),h=a(93),p=a(159),m=a(169),v=a(57),g=a(135),y=v("isConcatSpreadable"),b=g>=51||!i((function(){var t=[];t[y]=!1;return t.concat()[0]!==t})),_=m("concat"),isConcatSpreadable=function(t){if(!c(t))return!1;var r=t[y];return void 0!==r?!!r:l(t)};o({target:"Array",proto:!0,forced:!b||!_},{concat:function concat(t){var r,a,o,i,l,c=u(this),m=p(c,0),v=0;for(r=-1,o=arguments.length;r<o;r++)if(isConcatSpreadable(l=-1===r?c:arguments[r])){if(v+(i=d(l.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(a=0;a<i;a++,v++)a in l&&h(m,v,l[a])}else{if(v>=9007199254740991)throw TypeError("Maximum allowed index exceeded");h(m,v++,l)}m.length=v;return m}})},function(t,r,a){var o=a(14),i=a(57),l=a(135),c=i("species");t.exports=function(t){return l>=51||!o((function(){var r=[];(r.constructor={})[c]=function(){return{foo:1}};return 1!==r[t](Boolean).foo}))}},function(t,r,a){"use strict";var o=a(10),i=a(11),l=a(42),c=a(37),u=a(13),d=a(58),h=a(59),p=a(14),m=a(23),v=a(160),g=a(22),y=a(28),b=a(83),_=a(17),S=a(21),C=a(16),A=a(71),R=a(73),k=a(44),w=a(171),P=a(51),x=a(12),T=a(27),E=a(15),O=a(26),I=a(29),D=a(36),L=a(35),M=a(39),W=a(38),j=a(57),N=a(172),B=a(173),q=a(85),G=a(33),U=a(158).forEach,z=L("hidden"),H=j("toPrimitive"),V=G.set,Y=G.getterFor("Symbol"),X=Object.prototype,Q=i.Symbol,K=l("JSON","stringify"),J=x.f,$=T.f,Z=w.f,ee=E.f,te=D("symbols"),re=D("op-symbols"),ne=D("string-to-symbol-registry"),ae=D("symbol-to-string-registry"),oe=D("wks"),ie=i.QObject,se=!ie||!ie.prototype||!ie.prototype.findChild,le=u&&p((function(){return 7!=A($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,r,a){var o=J(X,r);o&&delete X[r];$(t,r,a);o&&t!==X&&$(X,r,o)}:$,wrap=function(t,r){var a=te[t]=A(Q.prototype);V(a,{type:"Symbol",tag:t,description:r});u||(a.description=r);return a},ce=h?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ue=function defineProperty(t,r,a){t===X&&ue(re,r,a);y(t);var o=S(r,!0);y(a);if(m(te,o)){if(a.enumerable){m(t,z)&&t[z][o]&&(t[z][o]=!1);a=A(a,{enumerable:C(0,!1)})}else{m(t,z)||$(t,z,C(1,{}));t[z][o]=!0}return le(t,o,a)}return $(t,o,a)},fe=function defineProperties(t,r){y(t);var a=_(r),o=R(a).concat(me(a));U(o,(function(r){u&&!de.call(a,r)||ue(t,r,a[r])}));return t},de=function propertyIsEnumerable(t){var r=S(t,!0),a=ee.call(this,r);return!(this===X&&m(te,r)&&!m(re,r))&&(!(a||!m(this,r)||!m(te,r)||m(this,z)&&this[z][r])||a)},he=function getOwnPropertyDescriptor(t,r){var a=_(t),o=S(r,!0);if(a!==X||!m(te,o)||m(re,o)){var i=J(a,o);!i||!m(te,o)||m(a,z)&&a[z][o]||(i.enumerable=!0);return i}},pe=function getOwnPropertyNames(t){var r=Z(_(t)),a=[];U(r,(function(t){m(te,t)||m(M,t)||a.push(t)}));return a},me=function getOwnPropertySymbols(t){var r=t===X,a=Z(r?re:_(t)),o=[];U(a,(function(t){!m(te,t)||r&&!m(X,t)||o.push(te[t])}));return o};if(!d){I((Q=function Symbol(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=W(t),setter=function(t){this===X&&setter.call(re,t);m(this,z)&&m(this[z],r)&&(this[z][r]=!1);le(this,r,C(1,t))};u&&se&&le(X,r,{configurable:!0,set:setter});return wrap(r,t)}).prototype,"toString",(function toString(){return Y(this).tag}));I(Q,"withoutSetter",(function(t){return wrap(W(t),t)}));E.f=de;T.f=ue;x.f=he;k.f=w.f=pe;P.f=me;N.f=function(t){return wrap(j(t),t)};if(u){$(Q.prototype,"description",{configurable:!0,get:function description(){return Y(this).description}});c||I(X,"propertyIsEnumerable",de,{unsafe:!0})}}o({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Q});U(R(oe),(function(t){B(t)}));o({target:"Symbol",stat:!0,forced:!d},{for:function(t){var r=String(t);if(m(ne,r))return ne[r];var a=Q(r);ne[r]=a;ae[a]=r;return a},keyFor:function keyFor(t){if(!ce(t))throw TypeError(t+" is not a symbol");if(m(ae,t))return ae[t]},useSetter:function(){se=!0},useSimple:function(){se=!1}});o({target:"Object",stat:!0,forced:!d,sham:!u},{create:function create(t,r){return void 0===r?A(t):fe(A(t),r)},defineProperty:ue,defineProperties:fe,getOwnPropertyDescriptor:he});o({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:pe,getOwnPropertySymbols:me});o({target:"Object",stat:!0,forced:p((function(){P.f(1)}))},{getOwnPropertySymbols:function getOwnPropertySymbols(t){return P.f(b(t))}});if(K){o({target:"JSON",stat:!0,forced:!d||p((function(){var t=Q();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}))},{stringify:function stringify(t,r,a){for(var o,i=[t],l=1;arguments.length>l;)i.push(arguments[l++]);o=r;if((g(r)||void 0!==t)&&!ce(t)){v(r)||(r=function(t,r){"function"==typeof o&&(r=o.call(this,t,r));if(!ce(r))return r});i[1]=r;return K.apply(null,i)}}})}Q.prototype[H]||O(Q.prototype,H,Q.prototype.valueOf);q(Q,"Symbol");M[z]=!0},function(t,r,a){var o=a(17),i=a(44).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function getOwnPropertyNames(t){return c&&"[object Window]"==l.call(t)?function(t){try{return i(t)}catch(t){return c.slice()}}(t):i(o(t))}},function(t,r,a){var o=a(57);r.f=o},function(t,r,a){var o=a(43),i=a(23),l=a(172),c=a(27).f;t.exports=function(t){var r=o.Symbol||(o.Symbol={});i(r,t)||c(r,t,{value:l.f(t)})}},function(t,r,a){a(173)("asyncIterator")},function(t,r,a){"use strict";var o=a(10),i=a(13),l=a(11),c=a(23),u=a(22),d=a(27).f,h=a(40),p=l.Symbol;if(i&&"function"==typeof p&&(!("description"in p.prototype)||void 0!==p().description)){var m={},v=function Symbol(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof v?new p(t):void 0===t?p():p(t);""===t&&(m[r]=!0);return r};h(v,p);var g=v.prototype=p.prototype;g.constructor=v;var y=g.toString,b="Symbol(test)"==String(p("test")),_=/^Symbol\((.*)\)[^)]+$/;d(g,"description",{configurable:!0,get:function description(){var t=u(this)?this.valueOf():this,r=y.call(t);if(c(m,t))return"";var a=b?r.slice(7,-1):r.replace(_,"$1");return""===a?void 0:a}});o({global:!0,forced:!0},{Symbol:v})}},function(t,r,a){a(173)("hasInstance")},function(t,r,a){a(173)("isConcatSpreadable")},function(t,r,a){a(173)("iterator")},function(t,r,a){a(173)("match")},function(t,r,a){a(173)("matchAll")},function(t,r,a){a(173)("replace")},function(t,r,a){a(173)("search")},function(t,r,a){a(173)("species")},function(t,r,a){a(173)("split")},function(t,r,a){a(173)("toPrimitive")},function(t,r,a){a(173)("toStringTag")},function(t,r,a){a(173)("unscopables")},function(t,r,a){a(85)(Math,"Math",!0)},function(t,r,a){var o=a(11);a(85)(o.JSON,"JSON",!0)},function(t,r,a){a(191);var o=a(61);t.exports=o("String","padStart")},function(t,r,a){"use strict";var o=a(10),i=a(192).start;o({target:"String",proto:!0,forced:a(194)},{padStart:function padStart(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,a){var o=a(47),i=a(193),l=a(20),c=Math.ceil,createMethod=function(t){return function(r,a,u){var d,h,p=String(l(r)),m=p.length,v=void 0===u?" ":String(u),g=o(a);if(g<=m||""==v)return p;d=g-m;(h=i.call(v,c(d/v.length))).length>d&&(h=h.slice(0,d));return t?p+h:h+p}};t.exports={start:createMethod(!1),end:createMethod(!0)}},function(t,r,a){"use strict";var o=a(48),i=a(20);t.exports="".repeat||function repeat(t){var r=String(i(this)),a="",l=o(t);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(r+=r))1&l&&(a+=r);return a}},function(t,r,a){var o=a(129);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o)},function(t,r,a){a(196);var o=a(61);t.exports=o("String","padEnd")},function(t,r,a){"use strict";var o=a(10),i=a(192).end;o({target:"String",proto:!0,forced:a(194)},{padEnd:function padEnd(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,r,a){a(198);var o=a(43);t.exports=o.Object.values},function(t,r,a){var o=a(10),i=a(199).values;o({target:"Object",stat:!0},{values:function values(t){return i(t)}})},function(t,r,a){var o=a(13),i=a(73),l=a(17),c=a(15).f,createMethod=function(t){return function(r){for(var a,u=l(r),d=i(u),h=d.length,p=0,m=[];h>p;){a=d[p++];o&&!c.call(u,a)||m.push(t?[a,u[a]]:u[a])}return m}};t.exports={entries:createMethod(!0),values:createMethod(!1)}},function(t,r,a){a(201);var o=a(43);t.exports=o.Object.entries},function(t,r,a){var o=a(10),i=a(199).entries;o({target:"Object",stat:!0},{entries:function entries(t){return i(t)}})},function(module,exports,__w_pdfjs_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.getDocument=getDocument;exports.setPDFNetworkStreamFactory=setPDFNetworkStreamFactory;exports.build=exports.version=exports.PDFPageProxy=exports.PDFDocumentProxy=exports.PDFWorker=exports.PDFDataRangeTransport=exports.LoopbackPort=void 0;var _regenerator=_interopRequireDefault(__w_pdfjs_require__(2)),_util=__w_pdfjs_require__(5),_display_utils=__w_pdfjs_require__(1),_font_loader=__w_pdfjs_require__(203),_node_utils=__w_pdfjs_require__(204),_annotation_storage=__w_pdfjs_require__(205),_api_compatibility=__w_pdfjs_require__(206),_canvas=__w_pdfjs_require__(207),_worker_options=__w_pdfjs_require__(209),_is_node=__w_pdfjs_require__(7),_message_handler=__w_pdfjs_require__(210),_metadata=__w_pdfjs_require__(211),_optional_content_config=__w_pdfjs_require__(213),_transport_stream=__w_pdfjs_require__(214),_webgl=__w_pdfjs_require__(215);function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _createForOfIteratorHelper(t,r){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function F(){};return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function s(){a=t[Symbol.iterator]()},n:function n(){var t=a.next();c=t.done;return t},e:function e(t){u=!0;l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}function _slicedToArray(t,r){return _arrayWithHoles(t)||_iterableToArrayLimit(t,r)||_unsupportedIterableToArray(t,r)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);return"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function _iterableToArrayLimit(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var a=[],o=!0,i=!1,l=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){a.push(c.value);if(r&&a.length===r)break}}catch(t){i=!0;l=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return a}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var DEFAULT_RANGE_CHUNK_SIZE=65536,RENDERING_CANCELLED_TIMEOUT=100,DefaultCanvasFactory=_is_node.isNodeJS?_node_utils.NodeCanvasFactory:_display_utils.DOMCanvasFactory,DefaultCMapReaderFactory=_is_node.isNodeJS?_node_utils.NodeCMapReaderFactory:_display_utils.DOMCMapReaderFactory,createPDFNetworkStream;function setPDFNetworkStreamFactory(t){createPDFNetworkStream=t}function getDocument(t){var r,a=new PDFDocumentLoadingTask;if("string"==typeof t)r={url:t};else if((0,_util.isArrayBuffer)(t))r={data:t};else if(t instanceof PDFDataRangeTransport)r={range:t};else{if("object"!==_typeof(t))throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object");if(!t.url&&!t.data&&!t.range)throw new Error("Invalid parameter object: need either .data, .range or .url");r=t}var o=Object.create(null),i=null,l=null;for(var c in r)if("url"!==c||"undefined"==typeof window)if("range"!==c)if("worker"!==c)if("data"!==c||r[c]instanceof Uint8Array)o[c]=r[c];else{var u=r[c];if("string"==typeof u)o[c]=(0,_util.stringToBytes)(u);else if("object"!==_typeof(u)||null===u||isNaN(u.length)){if(!(0,_util.isArrayBuffer)(u))throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.");o[c]=new Uint8Array(u)}else o[c]=new Uint8Array(u)}else l=r[c];else i=r[c];else o[c]=new URL(r[c],window.location).href;o.rangeChunkSize=o.rangeChunkSize||DEFAULT_RANGE_CHUNK_SIZE;o.CMapReaderFactory=o.CMapReaderFactory||DefaultCMapReaderFactory;o.ignoreErrors=!0!==o.stopAtErrors;o.fontExtraProperties=!0===o.fontExtraProperties;o.pdfBug=!0===o.pdfBug;Number.isInteger(o.maxImageSize)||(o.maxImageSize=-1);"boolean"!=typeof o.isEvalSupported&&(o.isEvalSupported=!0);"boolean"!=typeof o.disableFontFace&&(o.disableFontFace=_api_compatibility.apiCompatibilityParams.disableFontFace||!1);void 0===o.ownerDocument&&(o.ownerDocument=globalThis.document);"boolean"!=typeof o.disableRange&&(o.disableRange=!1);"boolean"!=typeof o.disableStream&&(o.disableStream=!1);"boolean"!=typeof o.disableAutoFetch&&(o.disableAutoFetch=!1);(0,_util.setVerbosityLevel)(o.verbosity);if(!l){var d={verbosity:o.verbosity,port:_worker_options.GlobalWorkerOptions.workerPort};l=d.port?PDFWorker.fromPort(d):new PDFWorker(d);a._worker=l}var h=a.docId;l.promise.then((function(){if(a.destroyed)throw new Error("Loading aborted");var t=_fetchDocument(l,o,i,h),r=new Promise((function(t){var r;i?r=new _transport_stream.PDFDataTransportStream({length:o.length,initialData:o.initialData,progressiveDone:o.progressiveDone,disableRange:o.disableRange,disableStream:o.disableStream},i):o.data||(r=createPDFNetworkStream({url:o.url,length:o.length,httpHeaders:o.httpHeaders,withCredentials:o.withCredentials,rangeChunkSize:o.rangeChunkSize,disableRange:o.disableRange,disableStream:o.disableStream}));t(r)}));return Promise.all([t,r]).then((function(t){var r=_slicedToArray(t,2),i=r[0],c=r[1];if(a.destroyed)throw new Error("Loading aborted");var u=new _message_handler.MessageHandler(h,i,l.port);u.postMessageTransfers=l.postMessageTransfers;var d=new WorkerTransport(u,a,c,o);a._transport=d;u.send("Ready",null)}))})).catch(a._capability.reject);return a}function _fetchDocument(t,r,a,o){if(t.destroyed)return Promise.reject(new Error("Worker was destroyed"));if(a){r.length=a.length;r.initialData=a.initialData;r.progressiveDone=a.progressiveDone}return t.messageHandler.sendWithPromise("GetDocRequest",{docId:o,apiVersion:"2.6.347",source:{data:r.data,url:r.url,password:r.password,disableAutoFetch:r.disableAutoFetch,rangeChunkSize:r.rangeChunkSize,length:r.length},maxImageSize:r.maxImageSize,disableFontFace:r.disableFontFace,postMessageTransfers:t.postMessageTransfers,docBaseUrl:r.docBaseUrl,ignoreErrors:r.ignoreErrors,isEvalSupported:r.isEvalSupported,fontExtraProperties:r.fontExtraProperties}).then((function(r){if(t.destroyed)throw new Error("Worker was destroyed");return r}))}var PDFDocumentLoadingTask=function PDFDocumentLoadingTaskClosure(){var t=0;return function(){function PDFDocumentLoadingTask(){_classCallCheck(this,PDFDocumentLoadingTask);this._capability=(0,_util.createPromiseCapability)();this._transport=null;this._worker=null;this.docId="d"+t++;this.destroyed=!1;this.onPassword=null;this.onProgress=null;this.onUnsupportedFeature=null}_createClass(PDFDocumentLoadingTask,[{key:"destroy",value:function destroy(){var t=this;this.destroyed=!0;return(this._transport?this._transport.destroy():Promise.resolve()).then((function(){t._transport=null;if(t._worker){t._worker.destroy();t._worker=null}}))}},{key:"promise",get:function get(){return this._capability.promise}}]);return PDFDocumentLoadingTask}()}(),PDFDataRangeTransport=function(){function PDFDataRangeTransport(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_classCallCheck(this,PDFDataRangeTransport);this.length=t;this.initialData=r;this.progressiveDone=a;this._rangeListeners=[];this._progressListeners=[];this._progressiveReadListeners=[];this._progressiveDoneListeners=[];this._readyCapability=(0,_util.createPromiseCapability)()}_createClass(PDFDataRangeTransport,[{key:"addRangeListener",value:function addRangeListener(t){this._rangeListeners.push(t)}},{key:"addProgressListener",value:function addProgressListener(t){this._progressListeners.push(t)}},{key:"addProgressiveReadListener",value:function addProgressiveReadListener(t){this._progressiveReadListeners.push(t)}},{key:"addProgressiveDoneListener",value:function addProgressiveDoneListener(t){this._progressiveDoneListeners.push(t)}},{key:"onDataRange",value:function onDataRange(t,r){var a,o=_createForOfIteratorHelper(this._rangeListeners);try{for(o.s();!(a=o.n()).done;){(0,a.value)(t,r)}}catch(t){o.e(t)}finally{o.f()}}},{key:"onDataProgress",value:function onDataProgress(t,r){var a=this;this._readyCapability.promise.then((function(){var o,i=_createForOfIteratorHelper(a._progressListeners);try{for(i.s();!(o=i.n()).done;){(0,o.value)(t,r)}}catch(t){i.e(t)}finally{i.f()}}))}},{key:"onDataProgressiveRead",value:function onDataProgressiveRead(t){var r=this;this._readyCapability.promise.then((function(){var a,o=_createForOfIteratorHelper(r._progressiveReadListeners);try{for(o.s();!(a=o.n()).done;){(0,a.value)(t)}}catch(t){o.e(t)}finally{o.f()}}))}},{key:"onDataProgressiveDone",value:function onDataProgressiveDone(){var t=this;this._readyCapability.promise.then((function(){var r,a=_createForOfIteratorHelper(t._progressiveDoneListeners);try{for(a.s();!(r=a.n()).done;){(0,r.value)()}}catch(t){a.e(t)}finally{a.f()}}))}},{key:"transportReady",value:function transportReady(){this._readyCapability.resolve()}},{key:"requestDataRange",value:function requestDataRange(t,r){(0,_util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")}},{key:"abort",value:function abort(){}}]);return PDFDataRangeTransport}();exports.PDFDataRangeTransport=PDFDataRangeTransport;var PDFDocumentProxy=function(){function PDFDocumentProxy(t,r){_classCallCheck(this,PDFDocumentProxy);this._pdfInfo=t;this._transport=r}_createClass(PDFDocumentProxy,[{key:"getPage",value:function getPage(t){return this._transport.getPage(t)}},{key:"getPageIndex",value:function getPageIndex(t){return this._transport.getPageIndex(t)}},{key:"getDestinations",value:function getDestinations(){return this._transport.getDestinations()}},{key:"getDestination",value:function getDestination(t){return this._transport.getDestination(t)}},{key:"getPageLabels",value:function getPageLabels(){return this._transport.getPageLabels()}},{key:"getPageLayout",value:function getPageLayout(){return this._transport.getPageLayout()}},{key:"getPageMode",value:function getPageMode(){return this._transport.getPageMode()}},{key:"getViewerPreferences",value:function getViewerPreferences(){return this._transport.getViewerPreferences()}},{key:"getOpenAction",value:function getOpenAction(){return this._transport.getOpenAction()}},{key:"getAttachments",value:function getAttachments(){return this._transport.getAttachments()}},{key:"getJavaScript",value:function getJavaScript(){return this._transport.getJavaScript()}},{key:"getOutline",value:function getOutline(){return this._transport.getOutline()}},{key:"getOptionalContentConfig",value:function getOptionalContentConfig(){return this._transport.getOptionalContentConfig()}},{key:"getPermissions",value:function getPermissions(){return this._transport.getPermissions()}},{key:"getMetadata",value:function getMetadata(){return this._transport.getMetadata()}},{key:"getData",value:function getData(){return this._transport.getData()}},{key:"getDownloadInfo",value:function getDownloadInfo(){return this._transport.downloadInfoCapability.promise}},{key:"getStats",value:function getStats(){return this._transport.getStats()}},{key:"cleanup",value:function cleanup(){return this._transport.startCleanup()}},{key:"destroy",value:function destroy(){return this.loadingTask.destroy()}},{key:"saveDocument",value:function saveDocument(t){return this._transport.saveDocument(t)}},{key:"annotationStorage",get:function get(){return(0,_util.shadow)(this,"annotationStorage",new _annotation_storage.AnnotationStorage)}},{key:"numPages",get:function get(){return this._pdfInfo.numPages}},{key:"fingerprint",get:function get(){return this._pdfInfo.fingerprint}},{key:"loadingParams",get:function get(){return this._transport.loadingParams}},{key:"loadingTask",get:function get(){return this._transport.loadingTask}}]);return PDFDocumentProxy}();exports.PDFDocumentProxy=PDFDocumentProxy;var PDFPageProxy=function(){function PDFPageProxy(t,r,a,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];_classCallCheck(this,PDFPageProxy);this._pageIndex=t;this._pageInfo=r;this._ownerDocument=o;this._transport=a;this._stats=i?new _display_utils.StatTimer:null;this._pdfBug=i;this.commonObjs=a.commonObjs;this.objs=new PDFObjects;this.cleanupAfterRender=!1;this.pendingCleanup=!1;this._intentStates=new Map;this.destroyed=!1}_createClass(PDFPageProxy,[{key:"getViewport",value:function getViewport(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.scale,a=t.rotation,o=void 0===a?this.rotate:a,i=t.offsetX,l=void 0===i?0:i,c=t.offsetY,u=void 0===c?0:c,d=t.dontFlip,h=void 0!==d&&d;return new _display_utils.PageViewport({viewBox:this.view,scale:r,rotation:o,offsetX:l,offsetY:u,dontFlip:h})}},{key:"getAnnotations",value:function getAnnotations(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.intent,a=void 0===r?null:r;if(!this.annotationsPromise||this.annotationsIntent!==a){this.annotationsPromise=this._transport.getAnnotations(this._pageIndex,a);this.annotationsIntent=a}return this.annotationsPromise}},{key:"render",value:function render(t){var r=this,a=t.canvasContext,o=t.viewport,i=t.intent,l=void 0===i?"display":i,c=t.enableWebGL,u=void 0!==c&&c,d=t.renderInteractiveForms,h=void 0!==d&&d,p=t.transform,m=void 0===p?null:p,v=t.imageLayer,g=void 0===v?null:v,y=t.canvasFactory,b=void 0===y?null:y,_=t.background,S=void 0===_?null:_,C=t.annotationStorage,A=void 0===C?null:C,R=t.optionalContentConfigPromise,k=void 0===R?null:R;this._stats&&this._stats.time("Overall");var w="print"===l?"print":"display";this.pendingCleanup=!1;k||(k=this._transport.getOptionalContentConfig());var P=this._intentStates.get(w);if(!P){P=Object.create(null);this._intentStates.set(w,P)}if(P.streamReaderCancelTimeout){clearTimeout(P.streamReaderCancelTimeout);P.streamReaderCancelTimeout=null}var x=b||new DefaultCanvasFactory({ownerDocument:this._ownerDocument}),T=new _webgl.WebGLContext({enable:u});if(!P.displayReadyCapability){P.displayReadyCapability=(0,_util.createPromiseCapability)();P.operatorList={fnArray:[],argsArray:[],lastChunk:!1};this._stats&&this._stats.time("Page Request");this._pumpOperatorList({pageIndex:this._pageIndex,intent:w,renderInteractiveForms:!0===h,annotationStorage:A&&A.getAll()||null})}var E=function complete(t){var a=P.renderTasks.indexOf(O);a>=0&&P.renderTasks.splice(a,1);(r.cleanupAfterRender||"print"===w)&&(r.pendingCleanup=!0);r._tryCleanup();if(t){O.capability.reject(t);r._abortOperatorList({intentState:P,reason:t})}else O.capability.resolve();if(r._stats){r._stats.timeEnd("Rendering");r._stats.timeEnd("Overall")}},O=new InternalRenderTask({callback:E,params:{canvasContext:a,viewport:o,transform:m,imageLayer:g,background:S},objs:this.objs,commonObjs:this.commonObjs,operatorList:P.operatorList,pageIndex:this._pageIndex,canvasFactory:x,webGLContext:T,useRequestAnimationFrame:"print"!==w,pdfBug:this._pdfBug});P.renderTasks||(P.renderTasks=[]);P.renderTasks.push(O);var I=O.task;Promise.all([P.displayReadyCapability.promise,k]).then((function(t){var a=_slicedToArray(t,2),o=a[0],i=a[1];if(r.pendingCleanup)E();else{r._stats&&r._stats.time("Rendering");O.initializeGraphics({transparency:o,optionalContentConfig:i});O.operatorListChanged()}})).catch(E);return I}},{key:"getOperatorList",value:function getOperatorList(){var t,r=this._intentStates.get("oplist");if(!r){r=Object.create(null);this._intentStates.set("oplist",r)}if(!r.opListReadCapability){(t=Object.create(null)).operatorListChanged=function operatorListChanged(){if(r.operatorList.lastChunk){r.opListReadCapability.resolve(r.operatorList);var a=r.renderTasks.indexOf(t);a>=0&&r.renderTasks.splice(a,1)}};r.opListReadCapability=(0,_util.createPromiseCapability)();r.renderTasks=[];r.renderTasks.push(t);r.operatorList={fnArray:[],argsArray:[],lastChunk:!1};this._stats&&this._stats.time("Page Request");this._pumpOperatorList({pageIndex:this._pageIndex,intent:"oplist"})}return r.opListReadCapability.promise}},{key:"streamTextContent",value:function streamTextContent(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.normalizeWhitespace,a=void 0!==r&&r,o=t.disableCombineTextItems,i=void 0!==o&&o,l=100;return this._transport.messageHandler.sendWithStream("GetTextContent",{pageIndex:this._pageIndex,normalizeWhitespace:!0===a,combineTextItems:!0!==i},{highWaterMark:l,size:function size(t){return t.items.length}})}},{key:"getTextContent",value:function getTextContent(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.streamTextContent(t);return new Promise((function(t,a){var o=r.getReader(),i={items:[],styles:Object.create(null)};!function pump(){o.read().then((function(r){var a,o=r.value;if(r.done)t(i);else{Object.assign(i.styles,o.styles);(a=i.items).push.apply(a,_toConsumableArray(o.items));pump()}}),a)}()}))}},{key:"_destroy",value:function _destroy(){this.destroyed=!0;this._transport.pageCache[this._pageIndex]=null;var t,r=[],a=_createForOfIteratorHelper(this._intentStates);try{for(a.s();!(t=a.n()).done;){var o=_slicedToArray(t.value,2),i=o[0],l=o[1];this._abortOperatorList({intentState:l,reason:new Error("Page was destroyed."),force:!0});if("oplist"!==i){var c,u=_createForOfIteratorHelper(l.renderTasks);try{for(u.s();!(c=u.n()).done;){var d=c.value;r.push(d.completed);d.cancel()}}catch(t){u.e(t)}finally{u.f()}}}}catch(t){a.e(t)}finally{a.f()}this.objs.clear();this.annotationsPromise=null;this.pendingCleanup=!1;return Promise.all(r)}},{key:"cleanup",value:function cleanup(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.pendingCleanup=!0;return this._tryCleanup(t)}},{key:"_tryCleanup",value:function _tryCleanup(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.pendingCleanup)return!1;var r,a=_createForOfIteratorHelper(this._intentStates.values());try{for(a.s();!(r=a.n()).done;){var o=r.value,i=o.renderTasks,l=o.operatorList;if(0!==i.length||!l.lastChunk)return!1}}catch(t){a.e(t)}finally{a.f()}this._intentStates.clear();this.objs.clear();this.annotationsPromise=null;t&&this._stats&&(this._stats=new _display_utils.StatTimer);this.pendingCleanup=!1;return!0}},{key:"_startRenderPage",value:function _startRenderPage(t,r){var a=this._intentStates.get(r);if(a){this._stats&&this._stats.timeEnd("Page Request");a.displayReadyCapability&&a.displayReadyCapability.resolve(t)}}},{key:"_renderPageChunk",value:function _renderPageChunk(t,r){for(var a=0,o=t.length;a<o;a++){r.operatorList.fnArray.push(t.fnArray[a]);r.operatorList.argsArray.push(t.argsArray[a])}r.operatorList.lastChunk=t.lastChunk;for(var i=0;i<r.renderTasks.length;i++)r.renderTasks[i].operatorListChanged();t.lastChunk&&this._tryCleanup()}},{key:"_pumpOperatorList",value:function _pumpOperatorList(t){var r=this;(0,_util.assert)(t.intent,'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');var a=this._transport.messageHandler.sendWithStream("GetOperatorList",t).getReader(),o=this._intentStates.get(t.intent);o.streamReader=a;!function pump(){a.read().then((function(t){var a=t.value;if(t.done)o.streamReader=null;else if(!r._transport.destroyed){r._renderPageChunk(a,o);pump()}}),(function(t){o.streamReader=null;if(!r._transport.destroyed){if(o.operatorList){o.operatorList.lastChunk=!0;for(var a=0;a<o.renderTasks.length;a++)o.renderTasks[a].operatorListChanged();r._tryCleanup()}if(o.displayReadyCapability)o.displayReadyCapability.reject(t);else{if(!o.opListReadCapability)throw t;o.opListReadCapability.reject(t)}}}))}()}},{key:"_abortOperatorList",value:function _abortOperatorList(t){var r=this,a=t.intentState,o=t.reason,i=t.force,l=void 0!==i&&i;(0,_util.assert)(o instanceof Error||"object"===_typeof(o)&&null!==o,'PDFPageProxy._abortOperatorList: Expected "reason" argument.');if(a.streamReader){if(!l){if(0!==a.renderTasks.length)return;if(o instanceof _display_utils.RenderingCancelledException){a.streamReaderCancelTimeout=setTimeout((function(){r._abortOperatorList({intentState:a,reason:o,force:!0});a.streamReaderCancelTimeout=null}),RENDERING_CANCELLED_TIMEOUT);return}}a.streamReader.cancel(new _util.AbortException(o&&o.message));a.streamReader=null;if(!this._transport.destroyed){var c,u=_createForOfIteratorHelper(this._intentStates);try{for(u.s();!(c=u.n()).done;){var d=_slicedToArray(c.value,2),h=d[0];if(d[1]===a){this._intentStates.delete(h);break}}}catch(t){u.e(t)}finally{u.f()}this.cleanup()}}}},{key:"pageNumber",get:function get(){return this._pageIndex+1}},{key:"rotate",get:function get(){return this._pageInfo.rotate}},{key:"ref",get:function get(){return this._pageInfo.ref}},{key:"userUnit",get:function get(){return this._pageInfo.userUnit}},{key:"view",get:function get(){return this._pageInfo.view}},{key:"stats",get:function get(){return this._stats}}]);return PDFPageProxy}();exports.PDFPageProxy=PDFPageProxy;var LoopbackPort=function(){function LoopbackPort(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];_classCallCheck(this,LoopbackPort);this._listeners=[];this._defer=t;this._deferred=Promise.resolve(void 0)}_createClass(LoopbackPort,[{key:"postMessage",value:function postMessage(t,r){var a=this;if(this._defer){var o=new WeakMap,i={data:function cloneValue(t){if("object"!==_typeof(t)||null===t)return t;if(o.has(t))return o.get(t);var a,i;if((a=t.buffer)&&(0,_util.isArrayBuffer)(a)){i=r&&r.includes(a)?new t.constructor(a,t.byteOffset,t.byteLength):new t.constructor(t);o.set(t,i);return i}i=Array.isArray(t)?[]:{};o.set(t,i);for(var l in t){for(var c=void 0,u=t;!(c=Object.getOwnPropertyDescriptor(u,l));)u=Object.getPrototypeOf(u);if(void 0!==c.value)if("function"!=typeof c.value)i[l]=cloneValue(c.value);else if(t.hasOwnProperty&&t.hasOwnProperty(l))throw new Error("LoopbackPort.postMessage - cannot clone: ".concat(t[l]))}return i}(t)};this._deferred.then((function(){a._listeners.forEach((function(t){t.call(a,i)}))}))}else this._listeners.forEach((function(r){r.call(a,{data:t})}))}},{key:"addEventListener",value:function addEventListener(t,r){this._listeners.push(r)}},{key:"removeEventListener",value:function removeEventListener(t,r){var a=this._listeners.indexOf(r);this._listeners.splice(a,1)}},{key:"terminate",value:function terminate(){this._listeners.length=0}}]);return LoopbackPort}();exports.LoopbackPort=LoopbackPort;var PDFWorker=function PDFWorkerClosure(){var pdfWorkerPorts=new WeakMap,isWorkerDisabled=!1,fallbackWorkerSrc,nextFakeWorkerId=0,fakeWorkerCapability;if(_is_node.isNodeJS&&"function"==typeof require){isWorkerDisabled=!0;fallbackWorkerSrc="./pdf.worker.js"}else if("object"===("undefined"==typeof document?"undefined":_typeof(document))&&"currentScript"in document){var pdfjsFilePath=document.currentScript&&document.currentScript.src;pdfjsFilePath&&(fallbackWorkerSrc=pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i,".worker$1$2"))}function _getWorkerSrc(){if(_worker_options.GlobalWorkerOptions.workerSrc)return _worker_options.GlobalWorkerOptions.workerSrc;if(void 0!==fallbackWorkerSrc){_is_node.isNodeJS||(0,_display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');return fallbackWorkerSrc}throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')}function getMainThreadWorkerMessageHandler(){var t;try{t=globalThis.pdfjsWorker&&globalThis.pdfjsWorker.WorkerMessageHandler}catch(t){}return t||null}function setupFakeWorkerGlobal(){if(fakeWorkerCapability)return fakeWorkerCapability.promise;fakeWorkerCapability=(0,_util.createPromiseCapability)();var loader=function(){var _ref12=_asyncToGenerator(_regenerator.default.mark((function _callee(){var mainWorkerMessageHandler,worker;return _regenerator.default.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:mainWorkerMessageHandler=getMainThreadWorkerMessageHandler();if(!mainWorkerMessageHandler){_context.next=3;break}return _context.abrupt("return",mainWorkerMessageHandler);case 3:if(!_is_node.isNodeJS||"function"!=typeof require){_context.next=6;break}worker=eval("require")(_getWorkerSrc());return _context.abrupt("return",worker.WorkerMessageHandler);case 6:_context.next=8;return(0,_display_utils.loadScript)(_getWorkerSrc());case 8:return _context.abrupt("return",window.pdfjsWorker.WorkerMessageHandler);case 9:case"end":return _context.stop()}}),_callee)})));return function loader(){return _ref12.apply(this,arguments)}}();loader().then(fakeWorkerCapability.resolve,fakeWorkerCapability.reject);return fakeWorkerCapability.promise}function createCDNWrapper(t){var r="importScripts('"+t+"');";return URL.createObjectURL(new Blob([r]))}var PDFWorker=function(){function PDFWorker(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,a=void 0===r?null:r,o=t.port,i=void 0===o?null:o,l=t.verbosity,c=void 0===l?(0,_util.getVerbosityLevel)():l;_classCallCheck(this,PDFWorker);if(i&&pdfWorkerPorts.has(i))throw new Error("Cannot use more than one PDFWorker per port");this.name=a;this.destroyed=!1;this.postMessageTransfers=!0;this.verbosity=c;this._readyCapability=(0,_util.createPromiseCapability)();this._port=null;this._webWorker=null;this._messageHandler=null;if(i){pdfWorkerPorts.set(i,this);this._initializeFromPort(i)}else this._initialize()}_createClass(PDFWorker,[{key:"_initializeFromPort",value:function _initializeFromPort(t){this._port=t;this._messageHandler=new _message_handler.MessageHandler("main","worker",t);this._messageHandler.on("ready",(function(){}));this._readyCapability.resolve()}},{key:"_initialize",value:function _initialize(){var t=this;if("undefined"!=typeof Worker&&!isWorkerDisabled&&!getMainThreadWorkerMessageHandler()){var r=_getWorkerSrc();try{(0,_util.isSameOrigin)(window.location.href,r)||(r=createCDNWrapper(new URL(r,window.location).href));var a=new Worker(r),o=new _message_handler.MessageHandler("main","worker",a),i=function terminateEarly(){a.removeEventListener("error",l);o.destroy();a.terminate();t.destroyed?t._readyCapability.reject(new Error("Worker was destroyed")):t._setupFakeWorker()},l=function onWorkerError(){t._webWorker||i()};a.addEventListener("error",l);o.on("test",(function(r){a.removeEventListener("error",l);if(t.destroyed)i();else if(r){t._messageHandler=o;t._port=a;t._webWorker=a;r.supportTransfers||(t.postMessageTransfers=!1);t._readyCapability.resolve();o.send("configure",{verbosity:t.verbosity})}else{t._setupFakeWorker();o.destroy();a.terminate()}}));o.on("ready",(function(r){a.removeEventListener("error",l);if(t.destroyed)i();else try{c()}catch(r){t._setupFakeWorker()}}));var c=function sendTest(){var r=new Uint8Array([t.postMessageTransfers?255:0]);try{o.send("test",r,[r.buffer])}catch(t){(0,_util.warn)("Cannot use postMessage transfers.");r[0]=0;o.send("test",r)}};c();return}catch(t){(0,_util.info)("The worker has been disabled.")}}this._setupFakeWorker()}},{key:"_setupFakeWorker",value:function _setupFakeWorker(){var t=this;if(!isWorkerDisabled){(0,_util.warn)("Setting up fake worker.");isWorkerDisabled=!0}setupFakeWorkerGlobal().then((function(r){if(t.destroyed)t._readyCapability.reject(new Error("Worker was destroyed"));else{var a=new LoopbackPort;t._port=a;var o="fake"+nextFakeWorkerId++,i=new _message_handler.MessageHandler(o+"_worker",o,a);r.setup(i,a);var l=new _message_handler.MessageHandler(o,o+"_worker",a);t._messageHandler=l;t._readyCapability.resolve();l.send("configure",{verbosity:t.verbosity})}})).catch((function(r){t._readyCapability.reject(new Error('Setting up fake worker failed: "'.concat(r.message,'".')))}))}},{key:"destroy",value:function destroy(){this.destroyed=!0;if(this._webWorker){this._webWorker.terminate();this._webWorker=null}pdfWorkerPorts.delete(this._port);this._port=null;if(this._messageHandler){this._messageHandler.destroy();this._messageHandler=null}}},{key:"promise",get:function get(){return this._readyCapability.promise}},{key:"port",get:function get(){return this._port}},{key:"messageHandler",get:function get(){return this._messageHandler}}],[{key:"fromPort",value:function fromPort(t){if(!t||!t.port)throw new Error("PDFWorker.fromPort - invalid method signature.");return pdfWorkerPorts.has(t.port)?pdfWorkerPorts.get(t.port):new PDFWorker(t)}},{key:"getWorkerSrc",value:function getWorkerSrc(){return _getWorkerSrc()}}]);return PDFWorker}();return PDFWorker}();exports.PDFWorker=PDFWorker;var WorkerTransport=function(){function WorkerTransport(t,r,a,o){_classCallCheck(this,WorkerTransport);this.messageHandler=t;this.loadingTask=r;this.commonObjs=new PDFObjects;this.fontLoader=new _font_loader.FontLoader({docId:r.docId,onUnsupportedFeature:this._onUnsupportedFeature.bind(this),ownerDocument:o.ownerDocument});this._params=o;this.CMapReaderFactory=new o.CMapReaderFactory({baseUrl:o.cMapUrl,isCompressed:o.cMapPacked});this.destroyed=!1;this.destroyCapability=null;this._passwordCapability=null;this._networkStream=a;this._fullReader=null;this._lastProgress=null;this.pageCache=[];this.pagePromises=[];this.downloadInfoCapability=(0,_util.createPromiseCapability)();this.setupMessageHandler()}_createClass(WorkerTransport,[{key:"destroy",value:function destroy(){var t=this;if(this.destroyCapability)return this.destroyCapability.promise;this.destroyed=!0;this.destroyCapability=(0,_util.createPromiseCapability)();this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));var r=[];this.pageCache.forEach((function(t){t&&r.push(t._destroy())}));this.pageCache.length=0;this.pagePromises.length=0;var a=this.messageHandler.sendWithPromise("Terminate",null);r.push(a);Promise.all(r).then((function(){t.fontLoader.clear();t._networkStream&&t._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));if(t.messageHandler){t.messageHandler.destroy();t.messageHandler=null}t.destroyCapability.resolve()}),this.destroyCapability.reject);return this.destroyCapability.promise}},{key:"setupMessageHandler",value:function setupMessageHandler(){var t=this,r=this.messageHandler,a=this.loadingTask;r.on("GetReader",(function(r,a){(0,_util.assert)(t._networkStream,"GetReader - no `IPDFStream` instance available.");t._fullReader=t._networkStream.getFullReader();t._fullReader.onProgress=function(r){t._lastProgress={loaded:r.loaded,total:r.total}};a.onPull=function(){t._fullReader.read().then((function(t){var r=t.value;if(t.done)a.close();else{(0,_util.assert)((0,_util.isArrayBuffer)(r),"GetReader - expected an ArrayBuffer.");a.enqueue(new Uint8Array(r),1,[r])}})).catch((function(t){a.error(t)}))};a.onCancel=function(r){t._fullReader.cancel(r);a.ready.catch((function(r){if(!t.destroyed)throw r}))}}));r.on("ReaderHeadersReady",(function(r){var o=(0,_util.createPromiseCapability)(),i=t._fullReader;i.headersReady.then((function(){if(!i.isStreamingSupported||!i.isRangeSupported){t._lastProgress&&a.onProgress&&a.onProgress(t._lastProgress);i.onProgress=function(t){a.onProgress&&a.onProgress({loaded:t.loaded,total:t.total})}}o.resolve({isStreamingSupported:i.isStreamingSupported,isRangeSupported:i.isRangeSupported,contentLength:i.contentLength})}),o.reject);return o.promise}));r.on("GetRangeReader",(function(r,a){(0,_util.assert)(t._networkStream,"GetRangeReader - no `IPDFStream` instance available.");var o=t._networkStream.getRangeReader(r.begin,r.end);if(o){a.onPull=function(){o.read().then((function(t){var r=t.value;if(t.done)a.close();else{(0,_util.assert)((0,_util.isArrayBuffer)(r),"GetRangeReader - expected an ArrayBuffer.");a.enqueue(new Uint8Array(r),1,[r])}})).catch((function(t){a.error(t)}))};a.onCancel=function(r){o.cancel(r);a.ready.catch((function(r){if(!t.destroyed)throw r}))}}else a.close()}));r.on("GetDoc",(function(r){var o=r.pdfInfo;t._numPages=o.numPages;a._capability.resolve(new PDFDocumentProxy(o,t))}));r.on("DocException",(function(t){var r;switch(t.name){case"PasswordException":r=new _util.PasswordException(t.message,t.code);break;case"InvalidPDFException":r=new _util.InvalidPDFException(t.message);break;case"MissingPDFException":r=new _util.MissingPDFException(t.message);break;case"UnexpectedResponseException":r=new _util.UnexpectedResponseException(t.message,t.status);break;case"UnknownErrorException":r=new _util.UnknownErrorException(t.message,t.details)}if(!(r instanceof Error)){(0,_util.warn)("DocException - expected a valid Error.")}a._capability.reject(r)}));r.on("PasswordRequest",(function(r){t._passwordCapability=(0,_util.createPromiseCapability)();if(a.onPassword){try{a.onPassword((function updatePassword(r){t._passwordCapability.resolve({password:r})}),r.code)}catch(r){t._passwordCapability.reject(r)}}else t._passwordCapability.reject(new _util.PasswordException(r.message,r.code));return t._passwordCapability.promise}));r.on("DataLoaded",(function(r){a.onProgress&&a.onProgress({loaded:r.length,total:r.length});t.downloadInfoCapability.resolve(r)}));r.on("StartRenderPage",(function(r){if(!t.destroyed){t.pageCache[r.pageIndex]._startRenderPage(r.transparency,r.intent)}}));r.on("commonobj",(function(a){if(!t.destroyed){var o=_slicedToArray(a,3),i=o[0],l=o[1],c=o[2];if(!t.commonObjs.has(i))switch(l){case"Font":var u=t._params;if("error"in c){var d=c.error;(0,_util.warn)("Error during font loading: ".concat(d));t.commonObjs.resolve(i,d);break}var h=null;u.pdfBug&&globalThis.FontInspector&&globalThis.FontInspector.enabled&&(h={registerFont:function registerFont(t,r){globalThis.FontInspector.fontAdded(t,r)}});var p=new _font_loader.FontFaceObject(c,{isEvalSupported:u.isEvalSupported,disableFontFace:u.disableFontFace,ignoreErrors:u.ignoreErrors,onUnsupportedFeature:t._onUnsupportedFeature.bind(t),fontRegistry:h});t.fontLoader.bind(p).catch((function(t){return r.sendWithPromise("FontFallback",{id:i})})).finally((function(){!u.fontExtraProperties&&p.data&&(p.data=null);t.commonObjs.resolve(i,p)}));break;case"FontPath":case"Image":t.commonObjs.resolve(i,c);break;default:throw new Error("Got unknown common object type ".concat(l))}}}));r.on("obj",(function(r){if(!t.destroyed){var a=_slicedToArray(r,4),o=a[0],i=a[1],l=a[2],c=a[3],u=t.pageCache[i];if(!u.objs.has(o))switch(l){case"Image":u.objs.resolve(o,c);c&&"data"in c&&c.data.length>8e6&&(u.cleanupAfterRender=!0);break;default:throw new Error("Got unknown object type ".concat(l))}}}));r.on("DocProgress",(function(r){t.destroyed||a.onProgress&&a.onProgress({loaded:r.loaded,total:r.total})}));r.on("UnsupportedFeature",this._onUnsupportedFeature.bind(this));r.on("FetchBuiltInCMap",(function(r,a){if(t.destroyed)a.error(new Error("Worker was destroyed"));else{var o=!1;a.onPull=function(){if(o)a.close();else{o=!0;t.CMapReaderFactory.fetch(r).then((function(t){a.enqueue(t,1,[t.cMapData.buffer])})).catch((function(t){a.error(t)}))}}}}))}},{key:"_onUnsupportedFeature",value:function _onUnsupportedFeature(t){var r=t.featureId;this.destroyed||this.loadingTask.onUnsupportedFeature&&this.loadingTask.onUnsupportedFeature(r)}},{key:"getData",value:function getData(){return this.messageHandler.sendWithPromise("GetData",null)}},{key:"getPage",value:function getPage(t){var r=this;if(!Number.isInteger(t)||t<=0||t>this._numPages)return Promise.reject(new Error("Invalid page request"));var a=t-1;if(a in this.pagePromises)return this.pagePromises[a];var o=this.messageHandler.sendWithPromise("GetPage",{pageIndex:a}).then((function(t){if(r.destroyed)throw new Error("Transport destroyed");var o=new PDFPageProxy(a,t,r,r._params.ownerDocument,r._params.pdfBug);r.pageCache[a]=o;return o}));this.pagePromises[a]=o;return o}},{key:"getPageIndex",value:function getPageIndex(t){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:t}).catch((function(t){return Promise.reject(new Error(t))}))}},{key:"getAnnotations",value:function getAnnotations(t,r){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:t,intent:r})}},{key:"saveDocument",value:function saveDocument(t){return this.messageHandler.sendWithPromise("SaveDocument",{numPages:this._numPages,annotationStorage:t&&t.getAll()||null,filename:this._fullReader?this._fullReader.filename:null}).finally((function(){t&&t.resetModified()}))}},{key:"getDestinations",value:function getDestinations(){return this.messageHandler.sendWithPromise("GetDestinations",null)}},{key:"getDestination",value:function getDestination(t){return"string"!=typeof t?Promise.reject(new Error("Invalid destination request.")):this.messageHandler.sendWithPromise("GetDestination",{id:t})}},{key:"getPageLabels",value:function getPageLabels(){return this.messageHandler.sendWithPromise("GetPageLabels",null)}},{key:"getPageLayout",value:function getPageLayout(){return this.messageHandler.sendWithPromise("GetPageLayout",null)}},{key:"getPageMode",value:function getPageMode(){return this.messageHandler.sendWithPromise("GetPageMode",null)}},{key:"getViewerPreferences",value:function getViewerPreferences(){return this.messageHandler.sendWithPromise("GetViewerPreferences",null)}},{key:"getOpenAction",value:function getOpenAction(){return this.messageHandler.sendWithPromise("GetOpenAction",null)}},{key:"getAttachments",value:function getAttachments(){return this.messageHandler.sendWithPromise("GetAttachments",null)}},{key:"getJavaScript",value:function getJavaScript(){return this.messageHandler.sendWithPromise("GetJavaScript",null)}},{key:"getOutline",value:function getOutline(){return this.messageHandler.sendWithPromise("GetOutline",null)}},{key:"getOptionalContentConfig",value:function getOptionalContentConfig(){return this.messageHandler.sendWithPromise("GetOptionalContentConfig",null).then((function(t){return new _optional_content_config.OptionalContentConfig(t)}))}},{key:"getPermissions",value:function getPermissions(){return this.messageHandler.sendWithPromise("GetPermissions",null)}},{key:"getMetadata",value:function getMetadata(){var t=this;return this.messageHandler.sendWithPromise("GetMetadata",null).then((function(r){return{info:r[0],metadata:r[1]?new _metadata.Metadata(r[1]):null,contentDispositionFilename:t._fullReader?t._fullReader.filename:null}}))}},{key:"getStats",value:function getStats(){return this.messageHandler.sendWithPromise("GetStats",null)}},{key:"startCleanup",value:function startCleanup(){var t=this;return this.messageHandler.sendWithPromise("Cleanup",null).then((function(){for(var r=0,a=t.pageCache.length;r<a;r++){var o=t.pageCache[r];if(o){if(!o.cleanup())throw new Error("startCleanup: Page ".concat(r+1," is currently rendering."))}}t.commonObjs.clear();t.fontLoader.clear()}))}},{key:"loadingParams",get:function get(){var t=this._params;return(0,_util.shadow)(this,"loadingParams",{disableAutoFetch:t.disableAutoFetch,disableFontFace:t.disableFontFace})}}]);return WorkerTransport}(),PDFObjects=function(){function PDFObjects(){_classCallCheck(this,PDFObjects);this._objs=Object.create(null)}_createClass(PDFObjects,[{key:"_ensureObj",value:function _ensureObj(t){return this._objs[t]?this._objs[t]:this._objs[t]={capability:(0,_util.createPromiseCapability)(),data:null,resolved:!1}}},{key:"get",value:function get(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(r){this._ensureObj(t).capability.promise.then(r);return null}var a=this._objs[t];if(!a||!a.resolved)throw new Error("Requesting object that isn't resolved yet ".concat(t,"."));return a.data}},{key:"has",value:function has(t){var r=this._objs[t];return!!r&&r.resolved}},{key:"resolve",value:function resolve(t,r){var a=this._ensureObj(t);a.resolved=!0;a.data=r;a.capability.resolve(r)}},{key:"clear",value:function clear(){this._objs=Object.create(null)}}]);return PDFObjects}(),RenderTask=function(){function RenderTask(t){_classCallCheck(this,RenderTask);this._internalRenderTask=t;this.onContinue=null}_createClass(RenderTask,[{key:"cancel",value:function cancel(){this._internalRenderTask.cancel()}},{key:"promise",get:function get(){return this._internalRenderTask.capability.promise}}]);return RenderTask}(),InternalRenderTask=function InternalRenderTaskClosure(){var t=new WeakSet;return function(){function InternalRenderTask(t){var r=t.callback,a=t.params,o=t.objs,i=t.commonObjs,l=t.operatorList,c=t.pageIndex,u=t.canvasFactory,d=t.webGLContext,h=t.useRequestAnimationFrame,p=void 0!==h&&h,m=t.pdfBug,v=void 0!==m&&m;_classCallCheck(this,InternalRenderTask);this.callback=r;this.params=a;this.objs=o;this.commonObjs=i;this.operatorListIdx=null;this.operatorList=l;this._pageIndex=c;this.canvasFactory=u;this.webGLContext=d;this._pdfBug=v;this.running=!1;this.graphicsReadyCallback=null;this.graphicsReady=!1;this._useRequestAnimationFrame=!0===p&&"undefined"!=typeof window;this.cancelled=!1;this.capability=(0,_util.createPromiseCapability)();this.task=new RenderTask(this);this._continueBound=this._continue.bind(this);this._scheduleNextBound=this._scheduleNext.bind(this);this._nextBound=this._next.bind(this);this._canvas=a.canvasContext.canvas}_createClass(InternalRenderTask,[{key:"initializeGraphics",value:function initializeGraphics(r){var a=r.transparency,o=void 0!==a&&a,i=r.optionalContentConfig;if(!this.cancelled){if(this._canvas){if(t.has(this._canvas))throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");t.add(this._canvas)}if(this._pdfBug&&globalThis.StepperManager&&globalThis.StepperManager.enabled){this.stepper=globalThis.StepperManager.create(this._pageIndex);this.stepper.init(this.operatorList);this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint()}var l=this.params,c=l.canvasContext,u=l.viewport,d=l.transform,h=l.imageLayer,p=l.background;this.gfx=new _canvas.CanvasGraphics(c,this.commonObjs,this.objs,this.canvasFactory,this.webGLContext,h,i);this.gfx.beginDrawing({transform:d,viewport:u,transparency:o,background:p});this.operatorListIdx=0;this.graphicsReady=!0;this.graphicsReadyCallback&&this.graphicsReadyCallback()}}},{key:"cancel",value:function cancel(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.running=!1;this.cancelled=!0;this.gfx&&this.gfx.endDrawing();this._canvas&&t.delete(this._canvas);this.callback(r||new _display_utils.RenderingCancelledException("Rendering cancelled, page ".concat(this._pageIndex+1),"canvas"))}},{key:"operatorListChanged",value:function operatorListChanged(){if(this.graphicsReady){this.stepper&&this.stepper.updateOperatorList(this.operatorList);this.running||this._continue()}else this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound)}},{key:"_continue",value:function _continue(){this.running=!0;this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())}},{key:"_scheduleNext",value:function _scheduleNext(){var t=this;this._useRequestAnimationFrame?window.requestAnimationFrame((function(){t._nextBound().catch(t.cancel.bind(t))})):Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this))}},{key:"_next",value:(r=_asyncToGenerator(_regenerator.default.mark((function _callee2(){return _regenerator.default.wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(!this.cancelled){r.next=2;break}return r.abrupt("return");case 2:this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper);if(this.operatorListIdx===this.operatorList.argsArray.length){this.running=!1;if(this.operatorList.lastChunk){this.gfx.endDrawing();this._canvas&&t.delete(this._canvas);this.callback()}}case 4:case"end":return r.stop()}}),_callee2,this)}))),function _next(){return r.apply(this,arguments)})},{key:"completed",get:function get(){return this.capability.promise.catch((function(){}))}}]);var r;return InternalRenderTask}()}(),version="2.6.347";exports.version=version;var build="3be9c65f";exports.build=build},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.FontLoader=r.FontFaceObject=void 0;var o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(a(2)),i=a(5);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _setPrototypeOf(t,r){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,r){t.__proto__=r;return t})(t,r)}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=_getPrototypeOf(t);if(r){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}var l,c=function(){function BaseFontLoader(t){var r=t.docId,a=t.onUnsupportedFeature,o=t.ownerDocument,l=void 0===o?globalThis.document:o;_classCallCheck(this,BaseFontLoader);this.constructor===BaseFontLoader&&(0,i.unreachable)("Cannot initialize BaseFontLoader.");this.docId=r;this._onUnsupportedFeature=a;this._document=l;this.nativeFontFaces=[];this.styleElement=null}_createClass(BaseFontLoader,[{key:"addNativeFontFace",value:function addNativeFontFace(t){this.nativeFontFaces.push(t);this._document.fonts.add(t)}},{key:"insertRule",value:function insertRule(t){var r=this.styleElement;if(!r){(r=this.styleElement=this._document.createElement("style")).id="PDFJS_FONT_STYLE_TAG_".concat(this.docId);this._document.documentElement.getElementsByTagName("head")[0].appendChild(r)}var a=r.sheet;a.insertRule(t,a.cssRules.length)}},{key:"clear",value:function clear(){var t=this;this.nativeFontFaces.forEach((function(r){t._document.fonts.delete(r)}));this.nativeFontFaces.length=0;if(this.styleElement){this.styleElement.remove();this.styleElement=null}}},{key:"bind",value:(t=function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}(o.default.mark((function _callee(t){var r,a,l=this;return o.default.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(!t.attached&&!t.missingFile){o.next=2;break}return o.abrupt("return");case 2:t.attached=!0;if(!this.isFontLoadingAPISupported){o.next=19;break}if(!(r=t.createNativeFontFace())){o.next=18;break}this.addNativeFontFace(r);o.prev=7;o.next=10;return r.loaded;case 10:o.next=18;break;case 12:o.prev=12;o.t0=o.catch(7);this._onUnsupportedFeature({featureId:i.UNSUPPORTED_FEATURES.errorFontLoadNative});(0,i.warn)("Failed to load font '".concat(r.family,"': '").concat(o.t0,"'."));t.disableFontFace=!0;throw o.t0;case 18:return o.abrupt("return");case 19:if(!(a=t.createFontFaceRule())){o.next=26;break}this.insertRule(a);if(!this.isSyncFontLoadingSupported){o.next=24;break}return o.abrupt("return");case 24:o.next=26;return new Promise((function(r){var o=l._queueLoadingCallback(r);l._prepareFontLoadEvent([a],[t],o)}));case 26:case"end":return o.stop()}}),_callee,this,[[7,12]])}))),function bind(r){return t.apply(this,arguments)})},{key:"_queueLoadingCallback",value:function _queueLoadingCallback(t){(0,i.unreachable)("Abstract method `_queueLoadingCallback`.")}},{key:"_prepareFontLoadEvent",value:function _prepareFontLoadEvent(t,r,a){(0,i.unreachable)("Abstract method `_prepareFontLoadEvent`.")}},{key:"isFontLoadingAPISupported",get:function get(){var t=void 0!==this._document&&!!this._document.fonts;return(0,i.shadow)(this,"isFontLoadingAPISupported",t)}},{key:"isSyncFontLoadingSupported",get:function get(){(0,i.unreachable)("Abstract method `isSyncFontLoadingSupported`.")}},{key:"_loadTestFont",get:function get(){(0,i.unreachable)("Abstract method `_loadTestFont`.")}}]);var t;return BaseFontLoader}();r.FontLoader=l;r.FontLoader=l=function(t){!function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}});r&&_setPrototypeOf(t,r)}(GenericFontLoader,t);var r=_createSuper(GenericFontLoader);function GenericFontLoader(t){var a;_classCallCheck(this,GenericFontLoader);(a=r.call(this,t)).loadingContext={requests:[],nextRequestId:0};a.loadTestFontId=0;return a}_createClass(GenericFontLoader,[{key:"_queueLoadingCallback",value:function _queueLoadingCallback(t){var r=this.loadingContext,a={id:"pdfjs-font-loading-".concat(r.nextRequestId++),done:!1,complete:function completeRequest(){(0,i.assert)(!a.done,"completeRequest() cannot be called twice.");a.done=!0;for(;r.requests.length>0&&r.requests[0].done;){var t=r.requests.shift();setTimeout(t.callback,0)}},callback:t};r.requests.push(a);return a}},{key:"_prepareFontLoadEvent",value:function _prepareFontLoadEvent(t,r,a){var o,l,c=this;function int32(t,r){return t.charCodeAt(r)<<24|t.charCodeAt(r+1)<<16|t.charCodeAt(r+2)<<8|255&t.charCodeAt(r+3)}function spliceString(t,r,a,o){return t.substring(0,r)+o+t.substring(r+a)}var u=this._document.createElement("canvas");u.width=1;u.height=1;var d=u.getContext("2d"),h=0;var p="lt".concat(Date.now()).concat(this.loadTestFontId++),m=this._loadTestFont,v=int32(m=spliceString(m,976,p.length,p),16);for(o=0,l=p.length-3;o<l;o+=4)v=v-1482184792+int32(p,o)|0;o<p.length&&(v=v-1482184792+int32(p+"XXX",o)|0);m=spliceString(m,16,4,(0,i.string32)(v));var g="url(data:font/opentype;base64,".concat(btoa(m),");"),y='@font-face {font-family:"'.concat(p,'";src:').concat(g,"}");this.insertRule(y);var b=[];for(o=0,l=r.length;o<l;o++)b.push(r[o].loadedName);b.push(p);var _=this._document.createElement("div");_.style.visibility="hidden";_.style.width=_.style.height="10px";_.style.position="absolute";_.style.top=_.style.left="0px";for(o=0,l=b.length;o<l;++o){var S=this._document.createElement("span");S.textContent="Hi";S.style.fontFamily=b[o];_.appendChild(S)}this._document.body.appendChild(_);!function isFontReady(t,r){if(++h>30){(0,i.warn)("Load test font never loaded.");r()}else{d.font="30px "+t;d.fillText(".",0,20);d.getImageData(0,0,1,1).data[3]>0?r():setTimeout(isFontReady.bind(null,t,r))}}(p,(function(){c._document.body.removeChild(_);a.complete()}))}},{key:"isSyncFontLoadingSupported",get:function get(){var t=!1;if("undefined"==typeof navigator)t=!0;else{var r=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);r&&r[1]>=14&&(t=!0)}return(0,i.shadow)(this,"isSyncFontLoadingSupported",t)}},{key:"_loadTestFont",get:function get(){return(0,i.shadow)(this,"_loadTestFont",function getLoadTestFont(){return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")}())}}]);return GenericFontLoader}(c);var u=function(){function FontFaceObject(t,r){var a=r.isEvalSupported,o=void 0===a||a,i=r.disableFontFace,l=void 0!==i&&i,c=r.ignoreErrors,u=void 0!==c&&c,d=r.onUnsupportedFeature,h=void 0===d?null:d,p=r.fontRegistry,m=void 0===p?null:p;_classCallCheck(this,FontFaceObject);this.compiledGlyphs=Object.create(null);for(var v in t)this[v]=t[v];this.isEvalSupported=!1!==o;this.disableFontFace=!0===l;this.ignoreErrors=!0===u;this._onUnsupportedFeature=h;this.fontRegistry=m}_createClass(FontFaceObject,[{key:"createNativeFontFace",value:function createNativeFontFace(){if(!this.data||this.disableFontFace)return null;var t=new FontFace(this.loadedName,this.data,{});this.fontRegistry&&this.fontRegistry.registerFont(this);return t}},{key:"createFontFaceRule",value:function createFontFaceRule(){if(!this.data||this.disableFontFace)return null;var t=(0,i.bytesToString)(new Uint8Array(this.data)),r="url(data:".concat(this.mimetype,";base64,").concat(btoa(t),");"),a='@font-face {font-family:"'.concat(this.loadedName,'";src:').concat(r,"}");this.fontRegistry&&this.fontRegistry.registerFont(this,r);return a}},{key:"getPathGenerator",value:function getPathGenerator(t,r){if(void 0!==this.compiledGlyphs[r])return this.compiledGlyphs[r];var a,o;try{a=t.get(this.loadedName+"_path_"+r)}catch(t){if(!this.ignoreErrors)throw t;this._onUnsupportedFeature&&this._onUnsupportedFeature({featureId:i.UNSUPPORTED_FEATURES.errorFontGetPath});(0,i.warn)('getPathGenerator - ignoring character: "'.concat(t,'".'));return this.compiledGlyphs[r]=function(t,r){}}if(this.isEvalSupported&&i.IsEvalSupportedCached.value){for(var l,c="",u=0,d=a.length;u<d;u++){l=void 0!==(o=a[u]).args?o.args.join(","):"";c+="c."+o.cmd+"("+l+");\n"}return this.compiledGlyphs[r]=new Function("c","size",c)}return this.compiledGlyphs[r]=function(t,r){for(var i=0,l=a.length;i<l;i++){"scale"===(o=a[i]).cmd&&(o.args=[r,-r]);t[o.cmd].apply(t,o.args)}}}}]);return FontFaceObject}();r.FontFaceObject=u},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.NodeCMapReaderFactory=r.NodeCanvasFactory=void 0;var o=a(1),i=a(7),l=a(5);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}});r&&_setPrototypeOf(t,r)}function _setPrototypeOf(t,r){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,r){t.__proto__=r;return t})(t,r)}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=_getPrototypeOf(t);if(r){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var c=function NodeCanvasFactory(){_classCallCheck(this,NodeCanvasFactory);(0,l.unreachable)("Not implemented: NodeCanvasFactory")};r.NodeCanvasFactory=c;var u=function NodeCMapReaderFactory(){_classCallCheck(this,NodeCMapReaderFactory);(0,l.unreachable)("Not implemented: NodeCMapReaderFactory")};r.NodeCMapReaderFactory=u;if(i.isNodeJS){r.NodeCanvasFactory=c=function(t){_inherits(NodeCanvasFactory,t);var r=_createSuper(NodeCanvasFactory);function NodeCanvasFactory(){_classCallCheck(this,NodeCanvasFactory);return r.apply(this,arguments)}_createClass(NodeCanvasFactory,[{key:"create",value:function create(t,r){if(t<=0||r<=0)throw new Error("Invalid canvas size");var a=require("canvas").createCanvas(t,r);return{canvas:a,context:a.getContext("2d")}}}]);return NodeCanvasFactory}(o.BaseCanvasFactory);r.NodeCMapReaderFactory=u=function(t){_inherits(NodeCMapReaderFactory,t);var r=_createSuper(NodeCMapReaderFactory);function NodeCMapReaderFactory(){_classCallCheck(this,NodeCMapReaderFactory);return r.apply(this,arguments)}_createClass(NodeCMapReaderFactory,[{key:"_fetchData",value:function _fetchData(t,r){return new Promise((function(a,o){require("fs").readFile(t,(function(t,i){!t&&i?a({cMapData:new Uint8Array(i),compressionType:r}):o(new Error(t))}))}))}}]);return NodeCMapReaderFactory}(o.BaseCMapReaderFactory)}},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.AnnotationStorage=void 0;function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}var o=function(){function AnnotationStorage(){!function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,AnnotationStorage);this._storage=new Map;this._modified=!1;this.onSetModified=null;this.onResetModified=null}!function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}(AnnotationStorage,[{key:"getOrCreateValue",value:function getOrCreateValue(t,r){if(this._storage.has(t))return this._storage.get(t);this._storage.set(t,r);return r}},{key:"setValue",value:function setValue(t,r){this._storage.get(t)!==r&&this._setModified();this._storage.set(t,r)}},{key:"getAll",value:function getAll(){return 0===this._storage.size?null:Object.fromEntries(this._storage)}},{key:"_setModified",value:function _setModified(){if(!this._modified){this._modified=!0;"function"==typeof this.onSetModified&&this.onSetModified()}}},{key:"resetModified",value:function resetModified(){if(this._modified){this._modified=!1;"function"==typeof this.onResetModified&&this.onResetModified()}}},{key:"size",get:function get(){return this._storage.size}}]);return AnnotationStorage}();r.AnnotationStorage=o},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.apiCompatibilityParams=void 0;var o=a(7),i=Object.create(null);!function checkFontFace(){o.isNodeJS&&(i.disableFontFace=!0)}();var l=Object.freeze(i);r.apiCompatibilityParams=l},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.CanvasGraphics=void 0;var o=a(5),i=a(208);function _createForOfIteratorHelper(t,r){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function F(){};return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function s(){a=t[Symbol.iterator]()},n:function n(){var t=a.next();c=t.done;return t},e:function e(t){u=!0;l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function addContextCurrentTransform(t){if(!t.mozCurrentTransform){t._originalSave=t.save;t._originalRestore=t.restore;t._originalRotate=t.rotate;t._originalScale=t.scale;t._originalTranslate=t.translate;t._originalTransform=t.transform;t._originalSetTransform=t.setTransform;t._transformMatrix=t._transformMatrix||[1,0,0,1,0,0];t._transformStack=[];Object.defineProperty(t,"mozCurrentTransform",{get:function getCurrentTransform(){return this._transformMatrix}});Object.defineProperty(t,"mozCurrentTransformInverse",{get:function getCurrentTransformInverse(){var t=this._transformMatrix,r=t[0],a=t[1],o=t[2],i=t[3],l=t[4],c=t[5],u=r*i-a*o,d=a*o-r*i;return[i/u,a/d,o/d,r/u,(i*l-o*c)/d,(a*l-r*c)/u]}});t.save=function ctxSave(){var t=this._transformMatrix;this._transformStack.push(t);this._transformMatrix=t.slice(0,6);this._originalSave()};t.restore=function ctxRestore(){var t=this._transformStack.pop();if(t){this._transformMatrix=t;this._originalRestore()}};t.translate=function ctxTranslate(t,r){var a=this._transformMatrix;a[4]=a[0]*t+a[2]*r+a[4];a[5]=a[1]*t+a[3]*r+a[5];this._originalTranslate(t,r)};t.scale=function ctxScale(t,r){var a=this._transformMatrix;a[0]=a[0]*t;a[1]=a[1]*t;a[2]=a[2]*r;a[3]=a[3]*r;this._originalScale(t,r)};t.transform=function ctxTransform(r,a,o,i,l,c){var u=this._transformMatrix;this._transformMatrix=[u[0]*r+u[2]*a,u[1]*r+u[3]*a,u[0]*o+u[2]*i,u[1]*o+u[3]*i,u[0]*l+u[2]*c+u[4],u[1]*l+u[3]*c+u[5]];t._originalTransform(r,a,o,i,l,c)};t.setTransform=function ctxSetTransform(r,a,o,i,l,c){this._transformMatrix=[r,a,o,i,l,c];t._originalSetTransform(r,a,o,i,l,c)};t.rotate=function ctxRotate(t){var r=Math.cos(t),a=Math.sin(t),o=this._transformMatrix;this._transformMatrix=[o[0]*r+o[2]*a,o[1]*r+o[3]*a,o[0]*-a+o[2]*r,o[1]*-a+o[3]*r,o[4],o[5]];this._originalRotate(t)}}}var l=function CachedCanvasesClosure(){function CachedCanvases(t){this.canvasFactory=t;this.cache=Object.create(null)}CachedCanvases.prototype={getCanvas:function CachedCanvases_getCanvas(t,r,a,o){var i;if(void 0!==this.cache[t]){i=this.cache[t];this.canvasFactory.reset(i,r,a);i.context.setTransform(1,0,0,1,0,0)}else{i=this.canvasFactory.create(r,a);this.cache[t]=i}o&&addContextCurrentTransform(i.context);return i},clear:function clear(){for(var t in this.cache){var r=this.cache[t];this.canvasFactory.destroy(r);delete this.cache[t]}}};return CachedCanvases}();var c=function CanvasExtraStateClosure(){function CanvasExtraState(){this.alphaIsShape=!1;this.fontSize=0;this.fontSizeScale=1;this.textMatrix=o.IDENTITY_MATRIX;this.textMatrixScale=1;this.fontMatrix=o.FONT_IDENTITY_MATRIX;this.leading=0;this.x=0;this.y=0;this.lineX=0;this.lineY=0;this.charSpacing=0;this.wordSpacing=0;this.textHScale=1;this.textRenderingMode=o.TextRenderingMode.FILL;this.textRise=0;this.fillColor="#000000";this.strokeColor="#000000";this.patternFill=!1;this.fillAlpha=1;this.strokeAlpha=1;this.lineWidth=1;this.activeSMask=null;this.resumeSMaskCtx=null;this.transferMaps=null}CanvasExtraState.prototype={clone:function CanvasExtraState_clone(){return Object.create(this)},setCurrentPoint:function CanvasExtraState_setCurrentPoint(t,r){this.x=t;this.y=r}};return CanvasExtraState}(),u=function CanvasGraphicsClosure(){function CanvasGraphics(t,r,a,o,i,u,d){this.ctx=t;this.current=new c;this.stateStack=[];this.pendingClip=null;this.pendingEOFill=!1;this.res=null;this.xobjs=null;this.commonObjs=r;this.objs=a;this.canvasFactory=o;this.webGLContext=i;this.imageLayer=u;this.groupStack=[];this.processingType3=null;this.baseTransform=null;this.baseTransformStack=[];this.groupLevel=0;this.smaskStack=[];this.smaskCounter=0;this.tempSMask=null;this.contentVisible=!0;this.markedContentStack=[];this.optionalContentConfig=d;this.cachedCanvases=new l(this.canvasFactory);t&&addContextCurrentTransform(t);this._cachedGetSinglePixelWidth=null}function putBinaryImageData(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("undefined"!=typeof ImageData&&r instanceof ImageData)t.putImageData(r,0,0);else{var i,l,c,u,d,h,p,m,v,g=r.height,y=r.width,b=g%16,_=(g-b)/16,S=0===b?_:_+1,C=t.createImageData(y,16),A=0,R=r.data,k=C.data;if(a)switch(a.length){case 1:h=a[0];p=a[0];m=a[0];v=a[0];break;case 4:h=a[0];p=a[1];m=a[2];v=a[3]}if(r.kind===o.ImageKind.GRAYSCALE_1BPP){var w=R.byteLength,P=new Uint32Array(k.buffer,0,k.byteLength>>2),x=P.length,T=y+7>>3,E=4294967295,O=o.IsLittleEndianCached.value?4278190080:255;if(v&&255===v[0]&&0===v[255]){var I=[O,E];E=I[0];O=I[1]}for(l=0;l<S;l++){u=l<_?16:b;i=0;for(c=0;c<u;c++){for(var D=w-A,L=0,M=D>T?y:8*D-7,W=-8&M,j=0,N=0;L<W;L+=8){N=R[A++];P[i++]=128&N?E:O;P[i++]=64&N?E:O;P[i++]=32&N?E:O;P[i++]=16&N?E:O;P[i++]=8&N?E:O;P[i++]=4&N?E:O;P[i++]=2&N?E:O;P[i++]=1&N?E:O}for(;L<M;L++){if(0===j){N=R[A++];j=128}P[i++]=N&j?E:O;j>>=1}}for(;i<x;)P[i++]=0;t.putImageData(C,0,16*l)}}else if(r.kind===o.ImageKind.RGBA_32BPP){var B=!!(h||p||m);c=0;d=16*y*4;for(l=0;l<_;l++){k.set(R.subarray(A,A+d));A+=d;if(B)for(var q=0;q<d;q+=4){h&&(k[q+0]=h[k[q+0]]);p&&(k[q+1]=p[k[q+1]]);m&&(k[q+2]=m[k[q+2]])}t.putImageData(C,0,c);c+=16}if(l<S){d=y*b*4;k.set(R.subarray(A,A+d));if(B)for(var G=0;G<d;G+=4){h&&(k[G+0]=h[k[G+0]]);p&&(k[G+1]=p[k[G+1]]);m&&(k[G+2]=m[k[G+2]])}t.putImageData(C,0,c)}}else{if(r.kind!==o.ImageKind.RGB_24BPP)throw new Error("bad image kind: ".concat(r.kind));var U=!!(h||p||m);d=y*(u=16);for(l=0;l<S;l++){l>=_&&(d=y*(u=b));i=0;for(c=d;c--;){k[i++]=R[A++];k[i++]=R[A++];k[i++]=R[A++];k[i++]=255}if(U)for(var z=0;z<i;z+=4){h&&(k[z+0]=h[k[z+0]]);p&&(k[z+1]=p[k[z+1]]);m&&(k[z+2]=m[k[z+2]])}t.putImageData(C,0,16*l)}}}}function putBinaryImageMask(t,r){for(var a=r.height,o=r.width,i=a%16,l=(a-i)/16,c=0===i?l:l+1,u=t.createImageData(o,16),d=0,h=r.data,p=u.data,m=0;m<c;m++){for(var v=m<l?16:i,g=3,y=0;y<v;y++)for(var b=0,_=0;_<o;_++){if(!b){var S=h[d++];b=128}p[g]=S&b?0:255;g+=4;b>>=1}t.putImageData(u,0,16*m)}}function copyCtxState(t,r){for(var a=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],o=0,i=a.length;o<i;o++){var l=a[o];void 0!==t[l]&&(r[l]=t[l])}if(void 0!==t.setLineDash){r.setLineDash(t.getLineDash());r.lineDashOffset=t.lineDashOffset}}function resetCtxToDefault(t){t.strokeStyle="#000000";t.fillStyle="#000000";t.fillRule="nonzero";t.globalAlpha=1;t.lineWidth=1;t.lineCap="butt";t.lineJoin="miter";t.miterLimit=10;t.globalCompositeOperation="source-over";t.font="10px sans-serif";if(void 0!==t.setLineDash){t.setLineDash([]);t.lineDashOffset=0}}function composeSMaskBackdrop(t,r,a,o){for(var i=t.length,l=3;l<i;l+=4){var c=t[l];if(0===c){t[l-3]=r;t[l-2]=a;t[l-1]=o}else if(c<255){var u=255-c;t[l-3]=t[l-3]*c+r*u>>8;t[l-2]=t[l-2]*c+a*u>>8;t[l-1]=t[l-1]*c+o*u>>8}}}function composeSMaskAlpha(t,r,a){for(var o=t.length,i=3;i<o;i+=4){var l=a?a[t[i]]:t[i];r[i]=r[i]*l*(1/255)|0}}function composeSMaskLuminosity(t,r,a){for(var o=t.length,i=3;i<o;i+=4){var l=77*t[i-3]+152*t[i-2]+28*t[i-1];r[i]=a?r[i]*a[l>>8]>>8:r[i]*l>>16}}function composeSMask(t,r,a,o){var i=r.canvas,l=r.context;t.setTransform(r.scaleX,0,0,r.scaleY,r.offsetX,r.offsetY);var c=r.backdrop||null;if(r.transferMap||!o.isEnabled){!function genericComposeSMask(t,r,a,o,i,l,c){var u,d=!!l,h=d?l[0]:0,p=d?l[1]:0,m=d?l[2]:0;u="Luminosity"===i?composeSMaskLuminosity:composeSMaskAlpha;for(var v=Math.min(o,Math.ceil(1048576/a)),g=0;g<o;g+=v){var y=Math.min(v,o-g),b=t.getImageData(0,g,a,y),_=r.getImageData(0,g,a,y);d&&composeSMaskBackdrop(b.data,h,p,m);u(b.data,_.data,c);t.putImageData(_,0,g)}}(l,a,i.width,i.height,r.subtype,c,r.transferMap);t.drawImage(i,0,0)}else{var u=o.composeSMask({layer:a.canvas,mask:i,properties:{subtype:r.subtype,backdrop:c}});t.setTransform(1,0,0,1,0,0);t.drawImage(u,r.offsetX,r.offsetY)}}var t=["butt","round","square"],r=["miter","round","bevel"],a={},u={};CanvasGraphics.prototype={beginDrawing:function beginDrawing(t){var r=t.transform,a=t.viewport,o=t.transparency,i=void 0!==o&&o,l=t.background,c=void 0===l?null:l,u=this.ctx.canvas.width,d=this.ctx.canvas.height;this.ctx.save();this.ctx.fillStyle=c||"rgb(255, 255, 255)";this.ctx.fillRect(0,0,u,d);this.ctx.restore();if(i){var h=this.cachedCanvases.getCanvas("transparent",u,d,!0);this.compositeCtx=this.ctx;this.transparentCanvas=h.canvas;this.ctx=h.context;this.ctx.save();this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save();resetCtxToDefault(this.ctx);r&&this.ctx.transform.apply(this.ctx,r);this.ctx.transform.apply(this.ctx,a.transform);this.baseTransform=this.ctx.mozCurrentTransform.slice();this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function CanvasGraphics_executeOperatorList(t,r,a,i){var l=t.argsArray,c=t.fnArray,u=r||0,d=l.length;if(d===u)return u;for(var h,p=d-u>10&&"function"==typeof a,m=p?Date.now()+15:0,v=0,g=this.commonObjs,y=this.objs;;){if(void 0!==i&&u===i.nextBreakPoint){i.breakIt(u,a);return u}if((h=c[u])!==o.OPS.dependency)this[h].apply(this,l[u]);else{var b,_=_createForOfIteratorHelper(l[u]);try{for(_.s();!(b=_.n()).done;){var S=b.value,C=S.startsWith("g_")?g:y;if(!C.has(S)){C.get(S,a);return u}}}catch(t){_.e(t)}finally{_.f()}}if(++u===d)return u;if(p&&++v>10){if(Date.now()>m){a();return u}v=0}}},endDrawing:function CanvasGraphics_endDrawing(){null!==this.current.activeSMask&&this.endSMaskGroup();this.ctx.restore();if(this.transparentCanvas){this.ctx=this.compositeCtx;this.ctx.save();this.ctx.setTransform(1,0,0,1,0,0);this.ctx.drawImage(this.transparentCanvas,0,0);this.ctx.restore();this.transparentCanvas=null}this.cachedCanvases.clear();this.webGLContext.clear();this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function CanvasGraphics_setLineWidth(t){this.current.lineWidth=t;this.ctx.lineWidth=t},setLineCap:function CanvasGraphics_setLineCap(r){this.ctx.lineCap=t[r]},setLineJoin:function CanvasGraphics_setLineJoin(t){this.ctx.lineJoin=r[t]},setMiterLimit:function CanvasGraphics_setMiterLimit(t){this.ctx.miterLimit=t},setDash:function CanvasGraphics_setDash(t,r){var a=this.ctx;if(void 0!==a.setLineDash){a.setLineDash(t);a.lineDashOffset=r}},setRenderingIntent:function setRenderingIntent(t){},setFlatness:function setFlatness(t){},setGState:function CanvasGraphics_setGState(t){for(var r=0,a=t.length;r<a;r++){var o=t[r],i=o[0],l=o[1];switch(i){case"LW":this.setLineWidth(l);break;case"LC":this.setLineCap(l);break;case"LJ":this.setLineJoin(l);break;case"ML":this.setMiterLimit(l);break;case"D":this.setDash(l[0],l[1]);break;case"RI":this.setRenderingIntent(l);break;case"FL":this.setFlatness(l);break;case"Font":this.setFont(l[0],l[1]);break;case"CA":this.current.strokeAlpha=o[1];break;case"ca":this.current.fillAlpha=o[1];this.ctx.globalAlpha=o[1];break;case"BM":this.ctx.globalCompositeOperation=l;break;case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup());this.current.activeSMask=l?this.tempSMask:null;this.current.activeSMask&&this.beginSMaskGroup();this.tempSMask=null;break;case"TR":this.current.transferMaps=l}}},beginSMaskGroup:function CanvasGraphics_beginSMaskGroup(){var t=this.current.activeSMask,r=t.canvas.width,a=t.canvas.height,o="smaskGroupAt"+this.groupLevel,i=this.cachedCanvases.getCanvas(o,r,a,!0),l=this.ctx,c=l.mozCurrentTransform;this.ctx.save();var u=i.context;u.scale(1/t.scaleX,1/t.scaleY);u.translate(-t.offsetX,-t.offsetY);u.transform.apply(u,c);t.startTransformInverse=u.mozCurrentTransformInverse;copyCtxState(l,u);this.ctx=u;this.setGState([["BM","source-over"],["ca",1],["CA",1]]);this.groupStack.push(l);this.groupLevel++},suspendSMaskGroup:function CanvasGraphics_endSMaskGroup(){var t=this.ctx;this.groupLevel--;this.ctx=this.groupStack.pop();composeSMask(this.ctx,this.current.activeSMask,t,this.webGLContext);this.ctx.restore();this.ctx.save();copyCtxState(t,this.ctx);this.current.resumeSMaskCtx=t;var r=o.Util.transform(this.current.activeSMask.startTransformInverse,t.mozCurrentTransform);this.ctx.transform.apply(this.ctx,r);t.save();t.setTransform(1,0,0,1,0,0);t.clearRect(0,0,t.canvas.width,t.canvas.height);t.restore()},resumeSMaskGroup:function CanvasGraphics_endSMaskGroup(){var t=this.current.resumeSMaskCtx,r=this.ctx;this.ctx=t;this.groupStack.push(r);this.groupLevel++},endSMaskGroup:function CanvasGraphics_endSMaskGroup(){var t=this.ctx;this.groupLevel--;this.ctx=this.groupStack.pop();composeSMask(this.ctx,this.current.activeSMask,t,this.webGLContext);this.ctx.restore();copyCtxState(t,this.ctx);var r=o.Util.transform(this.current.activeSMask.startTransformInverse,t.mozCurrentTransform);this.ctx.transform.apply(this.ctx,r)},save:function CanvasGraphics_save(){this.ctx.save();var t=this.current;this.stateStack.push(t);this.current=t.clone();this.current.resumeSMaskCtx=null},restore:function CanvasGraphics_restore(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup();null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup();if(0!==this.stateStack.length){this.current=this.stateStack.pop();this.ctx.restore();this.pendingClip=null;this._cachedGetSinglePixelWidth=null}},transform:function CanvasGraphics_transform(t,r,a,o,i,l){this.ctx.transform(t,r,a,o,i,l);this._cachedGetSinglePixelWidth=null},constructPath:function CanvasGraphics_constructPath(t,r){for(var a=this.ctx,i=this.current,l=i.x,c=i.y,u=0,d=0,h=t.length;u<h;u++)switch(0|t[u]){case o.OPS.rectangle:l=r[d++];c=r[d++];var p=r[d++],m=r[d++];0===p&&a.lineWidth<this.getSinglePixelWidth()&&(p=this.getSinglePixelWidth());0===m&&a.lineWidth<this.getSinglePixelWidth()&&(m=this.getSinglePixelWidth());var v=l+p,g=c+m;a.moveTo(l,c);a.lineTo(v,c);a.lineTo(v,g);a.lineTo(l,g);a.lineTo(l,c);a.closePath();break;case o.OPS.moveTo:l=r[d++];c=r[d++];a.moveTo(l,c);break;case o.OPS.lineTo:l=r[d++];c=r[d++];a.lineTo(l,c);break;case o.OPS.curveTo:l=r[d+4];c=r[d+5];a.bezierCurveTo(r[d],r[d+1],r[d+2],r[d+3],l,c);d+=6;break;case o.OPS.curveTo2:a.bezierCurveTo(l,c,r[d],r[d+1],r[d+2],r[d+3]);l=r[d+2];c=r[d+3];d+=4;break;case o.OPS.curveTo3:l=r[d+2];c=r[d+3];a.bezierCurveTo(r[d],r[d+1],l,c,l,c);d+=4;break;case o.OPS.closePath:a.closePath()}i.setCurrentPoint(l,c)},closePath:function CanvasGraphics_closePath(){this.ctx.closePath()},stroke:function CanvasGraphics_stroke(t){t=void 0===t||t;var r=this.ctx,a=this.current.strokeColor;r.globalAlpha=this.current.strokeAlpha;if(this.contentVisible)if(a&&a.hasOwnProperty("type")&&"Pattern"===a.type){r.save();var i=r.mozCurrentTransform,l=o.Util.singularValueDecompose2dScale(i)[0];r.strokeStyle=a.getPattern(r,this);r.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth*l);r.stroke();r.restore()}else{r.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth);r.stroke()}t&&this.consumePath();r.globalAlpha=this.current.fillAlpha},closeStroke:function CanvasGraphics_closeStroke(){this.closePath();this.stroke()},fill:function CanvasGraphics_fill(t){t=void 0===t||t;var r=this.ctx,a=this.current.fillColor,o=!1;if(this.current.patternFill){r.save();this.baseTransform&&r.setTransform.apply(r,this.baseTransform);r.fillStyle=a.getPattern(r,this);o=!0}if(this.contentVisible)if(this.pendingEOFill){r.fill("evenodd");this.pendingEOFill=!1}else r.fill();o&&r.restore();t&&this.consumePath()},eoFill:function CanvasGraphics_eoFill(){this.pendingEOFill=!0;this.fill()},fillStroke:function CanvasGraphics_fillStroke(){this.fill(!1);this.stroke(!1);this.consumePath()},eoFillStroke:function CanvasGraphics_eoFillStroke(){this.pendingEOFill=!0;this.fillStroke()},closeFillStroke:function CanvasGraphics_closeFillStroke(){this.closePath();this.fillStroke()},closeEOFillStroke:function CanvasGraphics_closeEOFillStroke(){this.pendingEOFill=!0;this.closePath();this.fillStroke()},endPath:function CanvasGraphics_endPath(){this.consumePath()},clip:function CanvasGraphics_clip(){this.pendingClip=a},eoClip:function CanvasGraphics_eoClip(){this.pendingClip=u},beginText:function CanvasGraphics_beginText(){this.current.textMatrix=o.IDENTITY_MATRIX;this.current.textMatrixScale=1;this.current.x=this.current.lineX=0;this.current.y=this.current.lineY=0},endText:function CanvasGraphics_endText(){var t=this.pendingTextPaths,r=this.ctx;if(void 0!==t){r.save();r.beginPath();for(var a=0;a<t.length;a++){var o=t[a];r.setTransform.apply(r,o.transform);r.translate(o.x,o.y);o.addToPath(r,o.fontSize)}r.restore();r.clip();r.beginPath();delete this.pendingTextPaths}else r.beginPath()},setCharSpacing:function CanvasGraphics_setCharSpacing(t){this.current.charSpacing=t},setWordSpacing:function CanvasGraphics_setWordSpacing(t){this.current.wordSpacing=t},setHScale:function CanvasGraphics_setHScale(t){this.current.textHScale=t/100},setLeading:function CanvasGraphics_setLeading(t){this.current.leading=-t},setFont:function CanvasGraphics_setFont(t,r){var a=this.commonObjs.get(t),i=this.current;if(!a)throw new Error("Can't find font for ".concat(t));i.fontMatrix=a.fontMatrix?a.fontMatrix:o.FONT_IDENTITY_MATRIX;0!==i.fontMatrix[0]&&0!==i.fontMatrix[3]||(0,o.warn)("Invalid font matrix for font "+t);if(r<0){r=-r;i.fontDirection=-1}else i.fontDirection=1;this.current.font=a;this.current.fontSize=r;if(!a.isType3Font){var l=a.loadedName||"sans-serif",c="normal";a.black?c="900":a.bold&&(c="bold");var u=a.italic?"italic":"normal",d='"'.concat(l,'", ').concat(a.fallbackName),h=r;r<16?h=16:r>100&&(h=100);this.current.fontSizeScale=r/h;this.ctx.font="".concat(u," ").concat(c," ").concat(h,"px ").concat(d)}},setTextRenderingMode:function CanvasGraphics_setTextRenderingMode(t){this.current.textRenderingMode=t},setTextRise:function CanvasGraphics_setTextRise(t){this.current.textRise=t},moveText:function CanvasGraphics_moveText(t,r){this.current.x=this.current.lineX+=t;this.current.y=this.current.lineY+=r},setLeadingMoveText:function CanvasGraphics_setLeadingMoveText(t,r){this.setLeading(-r);this.moveText(t,r)},setTextMatrix:function CanvasGraphics_setTextMatrix(t,r,a,o,i,l){this.current.textMatrix=[t,r,a,o,i,l];this.current.textMatrixScale=Math.sqrt(t*t+r*r);this.current.x=this.current.lineX=0;this.current.y=this.current.lineY=0},nextLine:function CanvasGraphics_nextLine(){this.moveText(0,this.current.leading)},paintChar:function paintChar(t,r,a,i){var l,c=this.ctx,u=this.current,d=u.font,h=u.textRenderingMode,p=u.fontSize/u.fontSizeScale,m=h&o.TextRenderingMode.FILL_STROKE_MASK,v=!!(h&o.TextRenderingMode.ADD_TO_PATH_FLAG),g=u.patternFill&&!d.missingFile;(d.disableFontFace||v||g)&&(l=d.getPathGenerator(this.commonObjs,t));if(d.disableFontFace||g){c.save();c.translate(r,a);c.beginPath();l(c,p);i&&c.setTransform.apply(c,i);m!==o.TextRenderingMode.FILL&&m!==o.TextRenderingMode.FILL_STROKE||c.fill();m!==o.TextRenderingMode.STROKE&&m!==o.TextRenderingMode.FILL_STROKE||c.stroke();c.restore()}else{m!==o.TextRenderingMode.FILL&&m!==o.TextRenderingMode.FILL_STROKE||c.fillText(t,r,a);m!==o.TextRenderingMode.STROKE&&m!==o.TextRenderingMode.FILL_STROKE||c.strokeText(t,r,a)}if(v){(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:c.mozCurrentTransform,x:r,y:a,fontSize:p,addToPath:l})}},get isFontSubpixelAAEnabled(){var t=this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled",10,10).context;t.scale(1.5,1);t.fillText("I",0,10);for(var r=t.getImageData(0,0,10,10).data,a=!1,i=3;i<r.length;i+=4)if(r[i]>0&&r[i]<255){a=!0;break}return(0,o.shadow)(this,"isFontSubpixelAAEnabled",a)},showText:function CanvasGraphics_showText(t){var r=this.current,a=r.font;if(a.isType3Font)return this.showType3Text(t);var i=r.fontSize;if(0!==i){var l,c=this.ctx,u=r.fontSizeScale,d=r.charSpacing,h=r.wordSpacing,p=r.fontDirection,m=r.textHScale*p,v=t.length,g=a.vertical,y=g?1:-1,b=a.defaultVMetrics,_=i*r.fontMatrix[0],S=r.textRenderingMode===o.TextRenderingMode.FILL&&!a.disableFontFace&&!r.patternFill;c.save();if(r.patternFill){c.save();var C=r.fillColor.getPattern(c,this);l=c.mozCurrentTransform;c.restore();c.fillStyle=C}c.transform.apply(c,r.textMatrix);c.translate(r.x,r.y+r.textRise);p>0?c.scale(m,-1):c.scale(m,1);var A=r.lineWidth,R=r.textMatrixScale;if(0===R||0===A){var k=r.textRenderingMode&o.TextRenderingMode.FILL_STROKE_MASK;if(k===o.TextRenderingMode.STROKE||k===o.TextRenderingMode.FILL_STROKE){this._cachedGetSinglePixelWidth=null;A=.65*this.getSinglePixelWidth()}}else A/=R;if(1!==u){c.scale(u,u);A/=u}c.lineWidth=A;var w,P=0;for(w=0;w<v;++w){var x=t[w];if((0,o.isNum)(x))P+=y*x*i/1e3;else{var T,E,O,I,D=!1,L=(x.isSpace?h:0)+d,M=x.fontChar,W=x.accent,j=x.width;if(g){var N,B,q;N=x.vmetric||b;B=-(B=x.vmetric?N[1]:.5*j)*_;q=N[2]*_;j=N?-N[0]:j;T=B/u;E=(P+q)/u}else{T=P/u;E=0}if(a.remeasure&&j>0){var G=1e3*c.measureText(M).width/i*u;if(j<G&&this.isFontSubpixelAAEnabled){var U=j/G;D=!0;c.save();c.scale(U,1);T/=U}else j!==G&&(T+=(j-G)/2e3*i/u)}if(this.contentVisible&&(x.isInFont||a.missingFile))if(S&&!W)c.fillText(M,T,E);else{this.paintChar(M,T,E,l);if(W){O=T+i*W.offset.x/u;I=E-i*W.offset.y/u;this.paintChar(W.fontChar,O,I,l)}}P+=g?j*_-L*p:j*_+L*p;D&&c.restore()}}g?r.y-=P:r.x+=P*m;c.restore()}},showType3Text:function CanvasGraphics_showType3Text(t){var r,a,i,l,c=this.ctx,u=this.current,d=u.font,h=u.fontSize,p=u.fontDirection,m=d.vertical?1:-1,v=u.charSpacing,g=u.wordSpacing,y=u.textHScale*p,b=u.fontMatrix||o.FONT_IDENTITY_MATRIX,_=t.length;if(!(u.textRenderingMode===o.TextRenderingMode.INVISIBLE)&&0!==h){this._cachedGetSinglePixelWidth=null;c.save();c.transform.apply(c,u.textMatrix);c.translate(u.x,u.y);c.scale(y,p);for(r=0;r<_;++r){a=t[r];if((0,o.isNum)(a)){l=m*a*h/1e3;this.ctx.translate(l,0);u.x+=l*y}else{var S=(a.isSpace?g:0)+v,C=d.charProcOperatorList[a.operatorListId];if(C){if(this.contentVisible){this.processingType3=a;this.save();c.scale(h,h);c.transform.apply(c,b);this.executeOperatorList(C);this.restore()}i=o.Util.applyTransform([a.width,0],b)[0]*h+S;c.translate(i,0);u.x+=i*y}else(0,o.warn)('Type3 character "'.concat(a.operatorListId,'" is not available.'))}}c.restore();this.processingType3=null}},setCharWidth:function CanvasGraphics_setCharWidth(t,r){},setCharWidthAndBounds:function CanvasGraphics_setCharWidthAndBounds(t,r,a,o,i,l){this.ctx.rect(a,o,i-a,l-o);this.clip();this.endPath()},getColorN_Pattern:function CanvasGraphics_getColorN_Pattern(t){var r,a=this;if("TilingPattern"===t[0]){var o=t[1],l=this.baseTransform||this.ctx.mozCurrentTransform.slice(),c={createCanvasGraphics:function createCanvasGraphics(t){return new CanvasGraphics(t,a.commonObjs,a.objs,a.canvasFactory,a.webGLContext)}};r=new i.TilingPattern(t,o,this.ctx,c,l)}else r=(0,i.getShadingPatternFromIR)(t);return r},setStrokeColorN:function CanvasGraphics_setStrokeColorN(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function CanvasGraphics_setFillColorN(){this.current.fillColor=this.getColorN_Pattern(arguments);this.current.patternFill=!0},setStrokeRGBColor:function CanvasGraphics_setStrokeRGBColor(t,r,a){var i=o.Util.makeCssRgb(t,r,a);this.ctx.strokeStyle=i;this.current.strokeColor=i},setFillRGBColor:function CanvasGraphics_setFillRGBColor(t,r,a){var i=o.Util.makeCssRgb(t,r,a);this.ctx.fillStyle=i;this.current.fillColor=i;this.current.patternFill=!1},shadingFill:function CanvasGraphics_shadingFill(t){if(this.contentVisible){var r=this.ctx;this.save();var a=(0,i.getShadingPatternFromIR)(t);r.fillStyle=a.getPattern(r,this,!0);var l=r.mozCurrentTransformInverse;if(l){var c=r.canvas,u=c.width,d=c.height,h=o.Util.applyTransform([0,0],l),p=o.Util.applyTransform([0,d],l),m=o.Util.applyTransform([u,0],l),v=o.Util.applyTransform([u,d],l),g=Math.min(h[0],p[0],m[0],v[0]),y=Math.min(h[1],p[1],m[1],v[1]),b=Math.max(h[0],p[0],m[0],v[0]),_=Math.max(h[1],p[1],m[1],v[1]);this.ctx.fillRect(g,y,b-g,_-y)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10);this.restore()}},beginInlineImage:function CanvasGraphics_beginInlineImage(){(0,o.unreachable)("Should not call beginInlineImage")},beginImageData:function CanvasGraphics_beginImageData(){(0,o.unreachable)("Should not call beginImageData")},paintFormXObjectBegin:function CanvasGraphics_paintFormXObjectBegin(t,r){if(this.contentVisible){this.save();this.baseTransformStack.push(this.baseTransform);Array.isArray(t)&&6===t.length&&this.transform.apply(this,t);this.baseTransform=this.ctx.mozCurrentTransform;if(r){var a=r[2]-r[0],o=r[3]-r[1];this.ctx.rect(r[0],r[1],a,o);this.clip();this.endPath()}}},paintFormXObjectEnd:function CanvasGraphics_paintFormXObjectEnd(){if(this.contentVisible){this.restore();this.baseTransform=this.baseTransformStack.pop()}},beginGroup:function CanvasGraphics_beginGroup(t){if(this.contentVisible){this.save();var r=this.ctx;t.isolated||(0,o.info)("TODO: Support non-isolated groups.");t.knockout&&(0,o.warn)("Knockout groups not supported.");var a=r.mozCurrentTransform;t.matrix&&r.transform.apply(r,t.matrix);if(!t.bbox)throw new Error("Bounding box is required.");var i=o.Util.getAxialAlignedBoundingBox(t.bbox,r.mozCurrentTransform),l=[0,0,r.canvas.width,r.canvas.height];i=o.Util.intersect(i,l)||[0,0,0,0];var c=Math.floor(i[0]),u=Math.floor(i[1]),d=Math.max(Math.ceil(i[2])-c,1),h=Math.max(Math.ceil(i[3])-u,1),p=1,m=1;if(d>4096){p=d/4096;d=4096}if(h>4096){m=h/4096;h=4096}var v="groupAt"+this.groupLevel;t.smask&&(v+="_smask_"+this.smaskCounter++%2);var g=this.cachedCanvases.getCanvas(v,d,h,!0),y=g.context;y.scale(1/p,1/m);y.translate(-c,-u);y.transform.apply(y,a);if(t.smask)this.smaskStack.push({canvas:g.canvas,context:y,offsetX:c,offsetY:u,scaleX:p,scaleY:m,subtype:t.smask.subtype,backdrop:t.smask.backdrop,transferMap:t.smask.transferMap||null,startTransformInverse:null});else{r.setTransform(1,0,0,1,0,0);r.translate(c,u);r.scale(p,m)}copyCtxState(r,y);this.ctx=y;this.setGState([["BM","source-over"],["ca",1],["CA",1]]);this.groupStack.push(r);this.groupLevel++;this.current.activeSMask=null}},endGroup:function CanvasGraphics_endGroup(t){if(this.contentVisible){this.groupLevel--;var r=this.ctx;this.ctx=this.groupStack.pop();void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1;t.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(r.canvas,0,0);this.restore()}},beginAnnotations:function CanvasGraphics_beginAnnotations(){this.save();this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function CanvasGraphics_endAnnotations(){this.restore()},beginAnnotation:function CanvasGraphics_beginAnnotation(t,r,a){this.save();resetCtxToDefault(this.ctx);this.current=new c;if(Array.isArray(t)&&4===t.length){var o=t[2]-t[0],i=t[3]-t[1];this.ctx.rect(t[0],t[1],o,i);this.clip();this.endPath()}this.transform.apply(this,r);this.transform.apply(this,a)},endAnnotation:function CanvasGraphics_endAnnotation(){this.restore()},paintImageMaskXObject:function CanvasGraphics_paintImageMaskXObject(t){if(this.contentVisible){var r=this.ctx,a=t.width,o=t.height,i=this.current.fillColor,l=this.current.patternFill,c=this.processingType3;c&&void 0===c.compiled&&(c.compiled=a<=1e3&&o<=1e3?function compileType3Glyph(t){var r,a,o,i,l=t.width,c=t.height,u=l+1,d=new Uint8Array(u*(c+1)),h=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),p=l+7&-8,m=t.data,v=new Uint8Array(p*c),g=0;for(r=0,i=m.length;r<i;r++)for(var y=128,b=m[r];y>0;){v[g++]=b&y?0:255;y>>=1}var _=0;if(0!==v[g=0]){d[0]=1;++_}for(a=1;a<l;a++){if(v[g]!==v[g+1]){d[a]=v[g]?2:1;++_}g++}if(0!==v[g]){d[a]=2;++_}for(r=1;r<c;r++){o=r*u;if(v[(g=r*p)-p]!==v[g]){d[o]=v[g]?1:8;++_}var S=(v[g]?4:0)+(v[g-p]?8:0);for(a=1;a<l;a++){if(h[S=(S>>2)+(v[g+1]?4:0)+(v[g-p+1]?8:0)]){d[o+a]=h[S];++_}g++}if(v[g-p]!==v[g]){d[o+a]=v[g]?2:4;++_}if(_>1e3)return null}o=r*u;if(0!==v[g=p*(c-1)]){d[o]=8;++_}for(a=1;a<l;a++){if(v[g]!==v[g+1]){d[o+a]=v[g]?4:8;++_}g++}if(0!==v[g]){d[o+a]=4;++_}if(_>1e3)return null;var C=new Int32Array([0,u,-1,0,-u,0,0,0,1]),A=[];for(r=0;_&&r<=c;r++){for(var R=r*u,k=R+l;R<k&&!d[R];)R++;if(R!==k){var w,P=[R%u,r],x=d[R],T=R;do{var E=C[x];do{R+=E}while(!d[R]);if(5!==(w=d[R])&&10!==w){x=w;d[R]=0}else{x=w&51*x>>4;d[R]&=x>>2|x<<2}P.push(R%u);P.push(R/u|0);d[R]||--_}while(T!==R);A.push(P);--r}}return function drawOutline(t){t.save();t.scale(1/l,-1/c);t.translate(0,-c);t.beginPath();for(var r=0,a=A.length;r<a;r++){var o=A[r];t.moveTo(o[0],o[1]);for(var i=2,u=o.length;i<u;i+=2)t.lineTo(o[i],o[i+1])}t.fill();t.beginPath();t.restore()}}({data:t.data,width:a,height:o}):null);if(c&&c.compiled)c.compiled(r);else{var u=this.cachedCanvases.getCanvas("maskCanvas",a,o),d=u.context;d.save();putBinaryImageMask(d,t);d.globalCompositeOperation="source-in";d.fillStyle=l?i.getPattern(d,this):i;d.fillRect(0,0,a,o);d.restore();this.paintInlineImageXObject(u.canvas)}}},paintImageMaskXObjectRepeat:function paintImageMaskXObjectRepeat(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0;if(this.contentVisible){var c=t.width,u=t.height,d=this.current.fillColor,h=this.current.patternFill,p=this.cachedCanvases.getCanvas("maskCanvas",c,u),m=p.context;m.save();putBinaryImageMask(m,t);m.globalCompositeOperation="source-in";m.fillStyle=h?d.getPattern(m,this):d;m.fillRect(0,0,c,u);m.restore();for(var v=this.ctx,g=0,y=l.length;g<y;g+=2){v.save();v.transform(r,a,o,i,l[g],l[g+1]);v.scale(1,-1);v.drawImage(p.canvas,0,0,c,u,0,-1,1,1);v.restore()}}},paintImageMaskXObjectGroup:function CanvasGraphics_paintImageMaskXObjectGroup(t){if(this.contentVisible)for(var r=this.ctx,a=this.current.fillColor,o=this.current.patternFill,i=0,l=t.length;i<l;i++){var c=t[i],u=c.width,d=c.height,h=this.cachedCanvases.getCanvas("maskCanvas",u,d),p=h.context;p.save();putBinaryImageMask(p,c);p.globalCompositeOperation="source-in";p.fillStyle=o?a.getPattern(p,this):a;p.fillRect(0,0,u,d);p.restore();r.save();r.transform.apply(r,c.transform);r.scale(1,-1);r.drawImage(h.canvas,0,0,u,d,0,-1,1,1);r.restore()}},paintImageXObject:function CanvasGraphics_paintImageXObject(t){if(this.contentVisible){var r=t.startsWith("g_")?this.commonObjs.get(t):this.objs.get(t);r?this.paintInlineImageXObject(r):(0,o.warn)("Dependent image isn't ready yet")}},paintImageXObjectRepeat:function CanvasGraphics_paintImageXObjectRepeat(t,r,a,i){if(this.contentVisible){var l=t.startsWith("g_")?this.commonObjs.get(t):this.objs.get(t);if(l){for(var c=l.width,u=l.height,d=[],h=0,p=i.length;h<p;h+=2)d.push({transform:[r,0,0,a,i[h],i[h+1]],x:0,y:0,w:c,h:u});this.paintInlineImageXObjectGroup(l,d)}else(0,o.warn)("Dependent image isn't ready yet")}},paintInlineImageXObject:function CanvasGraphics_paintInlineImageXObject(t){if(this.contentVisible){var r=t.width,a=t.height,o=this.ctx;this.save();o.scale(1/r,-1/a);var i,l,c=o.mozCurrentTransformInverse,u=c[0],d=c[1],h=Math.max(Math.sqrt(u*u+d*d),1),p=c[2],m=c[3],v=Math.max(Math.sqrt(p*p+m*m),1);if("function"==typeof HTMLElement&&t instanceof HTMLElement||!t.data)i=t;else{var g=(l=this.cachedCanvases.getCanvas("inlineImage",r,a)).context;putBinaryImageData(g,t,this.current.transferMaps);i=l.canvas}for(var y=r,b=a,_="prescale1";h>2&&y>1||v>2&&b>1;){var S=y,C=b;h>2&&y>1&&(h/=y/(S=Math.ceil(y/2)));v>2&&b>1&&(v/=b/(C=Math.ceil(b/2)));(g=(l=this.cachedCanvases.getCanvas(_,S,C)).context).clearRect(0,0,S,C);g.drawImage(i,0,0,y,b,0,0,S,C);i=l.canvas;y=S;b=C;_="prescale1"===_?"prescale2":"prescale1"}o.drawImage(i,0,0,y,b,0,-a,r,a);if(this.imageLayer){var A=this.getCanvasPosition(0,-a);this.imageLayer.appendImage({imgData:t,left:A[0],top:A[1],width:r/c[0],height:a/c[3]})}this.restore()}},paintInlineImageXObjectGroup:function CanvasGraphics_paintInlineImageXObjectGroup(t,r){if(this.contentVisible){var a=this.ctx,o=t.width,i=t.height,l=this.cachedCanvases.getCanvas("inlineImage",o,i);putBinaryImageData(l.context,t,this.current.transferMaps);for(var c=0,u=r.length;c<u;c++){var d=r[c];a.save();a.transform.apply(a,d.transform);a.scale(1,-1);a.drawImage(l.canvas,d.x,d.y,d.w,d.h,0,-1,1,1);if(this.imageLayer){var h=this.getCanvasPosition(d.x,d.y);this.imageLayer.appendImage({imgData:t,left:h[0],top:h[1],width:o,height:i})}a.restore()}}},paintSolidColorImageMask:function CanvasGraphics_paintSolidColorImageMask(){this.contentVisible&&this.ctx.fillRect(0,0,1,1)},markPoint:function CanvasGraphics_markPoint(t){},markPointProps:function CanvasGraphics_markPointProps(t,r){},beginMarkedContent:function CanvasGraphics_beginMarkedContent(t){this.markedContentStack.push({visible:!0})},beginMarkedContentProps:function CanvasGraphics_beginMarkedContentProps(t,r){"OC"===t?this.markedContentStack.push({visible:this.optionalContentConfig.isVisible(r)}):this.markedContentStack.push({visible:!0});this.contentVisible=this.isContentVisible()},endMarkedContent:function CanvasGraphics_endMarkedContent(){this.markedContentStack.pop();this.contentVisible=this.isContentVisible()},beginCompat:function CanvasGraphics_beginCompat(){},endCompat:function CanvasGraphics_endCompat(){},consumePath:function CanvasGraphics_consumePath(){var t=this.ctx;if(this.pendingClip){this.pendingClip===u?t.clip("evenodd"):t.clip();this.pendingClip=null}t.beginPath()},getSinglePixelWidth:function getSinglePixelWidth(t){if(null===this._cachedGetSinglePixelWidth){var r=this.ctx.mozCurrentTransformInverse;this._cachedGetSinglePixelWidth=Math.sqrt(Math.max(r[0]*r[0]+r[1]*r[1],r[2]*r[2]+r[3]*r[3]))}return this._cachedGetSinglePixelWidth},getCanvasPosition:function CanvasGraphics_getCanvasPosition(t,r){var a=this.ctx.mozCurrentTransform;return[a[0]*t+a[2]*r+a[4],a[1]*t+a[3]*r+a[5]]},isContentVisible:function CanvasGraphics_isContentVisible(){for(var t=this.markedContentStack.length-1;t>=0;t--)if(!this.markedContentStack[t].visible)return!1;return!0}};for(var d in o.OPS)CanvasGraphics.prototype[o.OPS[d]]=CanvasGraphics.prototype[d];return CanvasGraphics}();r.CanvasGraphics=u},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.getShadingPatternFromIR=function getShadingPatternFromIR(t){var r=i[t[0]];if(!r)throw new Error("Unknown IR type: ".concat(t[0]));return r.fromIR(t)};r.TilingPattern=void 0;var o=a(5),i={};function applyBoundingBox(t,r){if(r&&"undefined"!=typeof Path2D){var a=r[2]-r[0],o=r[3]-r[1],i=new Path2D;i.rect(r[0],r[1],a,o);t.clip(i)}}i.RadialAxial={fromIR:function RadialAxial_fromIR(t){var r=t[1],a=t[2],o=t[3],i=t[4],l=t[5],c=t[6],u=t[7];return{type:"Pattern",getPattern:function RadialAxial_getPattern(t){applyBoundingBox(t,a);var d;"axial"===r?d=t.createLinearGradient(i[0],i[1],l[0],l[1]):"radial"===r&&(d=t.createRadialGradient(i[0],i[1],c,l[0],l[1],u));for(var h=0,p=o.length;h<p;++h){var m=o[h];d.addColorStop(m[0],m[1])}return d}}}};var l=function createMeshCanvasClosure(){function drawTriangle(t,r,a,o,i,l,c,u){var d,h=r.coords,p=r.colors,m=t.data,v=4*t.width;if(h[a+1]>h[o+1]){d=a;a=o;o=d;d=l;l=c;c=d}if(h[o+1]>h[i+1]){d=o;o=i;i=d;d=c;c=u;u=d}if(h[a+1]>h[o+1]){d=a;a=o;o=d;d=l;l=c;c=d}var g=(h[a]+r.offsetX)*r.scaleX,y=(h[a+1]+r.offsetY)*r.scaleY,b=(h[o]+r.offsetX)*r.scaleX,_=(h[o+1]+r.offsetY)*r.scaleY,S=(h[i]+r.offsetX)*r.scaleX,C=(h[i+1]+r.offsetY)*r.scaleY;if(!(y>=C))for(var A,R,k,w,P,x,T,E,O=p[l],I=p[l+1],D=p[l+2],L=p[c],M=p[c+1],W=p[c+2],j=p[u],N=p[u+1],B=p[u+2],q=Math.round(y),G=Math.round(C),U=q;U<=G;U++){if(U<_){var z=void 0;A=g-(g-b)*(z=U<y?0:y===_?1:(y-U)/(y-_));R=O-(O-L)*z;k=I-(I-M)*z;w=D-(D-W)*z}else{var H=void 0;A=b-(b-S)*(H=U>C?1:_===C?0:(_-U)/(_-C));R=L-(L-j)*H;k=M-(M-N)*H;w=W-(W-B)*H}var V=void 0;P=g-(g-S)*(V=U<y?0:U>C?1:(y-U)/(y-C));x=O-(O-j)*V;T=I-(I-N)*V;E=D-(D-B)*V;for(var Y=Math.round(Math.min(A,P)),X=Math.round(Math.max(A,P)),Q=v*U+4*Y,K=Y;K<=X;K++){(V=(A-K)/(A-P))<0?V=0:V>1&&(V=1);m[Q++]=R-(R-x)*V|0;m[Q++]=k-(k-T)*V|0;m[Q++]=w-(w-E)*V|0;m[Q++]=255}}}function drawFigure(t,r,a){var o,i,l=r.coords,c=r.colors;switch(r.type){case"lattice":var u=r.verticesPerRow,d=Math.floor(l.length/u)-1,h=u-1;for(o=0;o<d;o++)for(var p=o*u,m=0;m<h;m++,p++){drawTriangle(t,a,l[p],l[p+1],l[p+u],c[p],c[p+1],c[p+u]);drawTriangle(t,a,l[p+u+1],l[p+1],l[p+u],c[p+u+1],c[p+1],c[p+u])}break;case"triangles":for(o=0,i=l.length;o<i;o+=3)drawTriangle(t,a,l[o],l[o+1],l[o+2],c[o],c[o+1],c[o+2]);break;default:throw new Error("illegal figure")}}return function createMeshCanvas(t,r,a,o,i,l,c,u){var d,h,p,m,v=Math.floor(t[0]),g=Math.floor(t[1]),y=Math.ceil(t[2])-v,b=Math.ceil(t[3])-g,_=Math.min(Math.ceil(Math.abs(y*r[0]*1.1)),3e3),S=Math.min(Math.ceil(Math.abs(b*r[1]*1.1)),3e3),C=y/_,A=b/S,R={coords:a,colors:o,offsetX:-v,offsetY:-g,scaleX:1/C,scaleY:1/A},k=_+4,w=S+4;if(u.isEnabled){d=u.drawFigures({width:_,height:S,backgroundColor:l,figures:i,context:R});(h=c.getCanvas("mesh",k,w,!1)).context.drawImage(d,2,2);d=h.canvas}else{var P=(h=c.getCanvas("mesh",k,w,!1)).context,x=P.createImageData(_,S);if(l){var T=x.data;for(p=0,m=T.length;p<m;p+=4){T[p]=l[0];T[p+1]=l[1];T[p+2]=l[2];T[p+3]=255}}for(p=0;p<i.length;p++)drawFigure(x,i[p],R);P.putImageData(x,2,2);d=h.canvas}return{canvas:d,offsetX:v-2*C,offsetY:g-2*A,scaleX:C,scaleY:A}}}();i.Mesh={fromIR:function Mesh_fromIR(t){var r=t[2],a=t[3],i=t[4],c=t[5],u=t[6],d=t[7],h=t[8];return{type:"Pattern",getPattern:function Mesh_getPattern(t,p,m){applyBoundingBox(t,d);var v;if(m)v=o.Util.singularValueDecompose2dScale(t.mozCurrentTransform);else{v=o.Util.singularValueDecompose2dScale(p.baseTransform);if(u){var g=o.Util.singularValueDecompose2dScale(u);v=[v[0]*g[0],v[1]*g[1]]}}var y=l(c,v,r,a,i,m?null:h,p.cachedCanvases,p.webGLContext);if(!m){t.setTransform.apply(t,p.baseTransform);u&&t.transform.apply(t,u)}t.translate(y.offsetX,y.offsetY);t.scale(y.scaleX,y.scaleY);return t.createPattern(y.canvas,"no-repeat")}}}};i.Dummy={fromIR:function Dummy_fromIR(){return{type:"Pattern",getPattern:function Dummy_fromIR_getPattern(){return"hotpink"}}}};var c=function TilingPatternClosure(){var t=1,r=2;function TilingPattern(t,r,a,o,i){this.operatorList=t[2];this.matrix=t[3]||[1,0,0,1,0,0];this.bbox=t[4];this.xstep=t[5];this.ystep=t[6];this.paintType=t[7];this.tilingType=t[8];this.color=r;this.canvasGraphicsFactory=o;this.baseTransform=i;this.type="Pattern";this.ctx=a}TilingPattern.prototype={createPatternCanvas:function TilinPattern_createPatternCanvas(t){var r=this.operatorList,a=this.bbox,i=this.xstep,l=this.ystep,c=this.paintType,u=this.tilingType,d=this.color,h=this.canvasGraphicsFactory;(0,o.info)("TilingType: "+u);var p=a[0],m=a[1],v=a[2],g=a[3],y=o.Util.singularValueDecompose2dScale(this.matrix),b=o.Util.singularValueDecompose2dScale(this.baseTransform),_=[y[0]*b[0],y[1]*b[1]],S=this.getSizeAndScale(i,this.ctx.canvas.width,_[0]),C=this.getSizeAndScale(l,this.ctx.canvas.height,_[1]),A=t.cachedCanvases.getCanvas("pattern",S.size,C.size,!0),R=A.context,k=h.createCanvasGraphics(R);k.groupLevel=t.groupLevel;this.setFillAndStrokeStyleToContext(k,c,d);k.transform(S.scale,0,0,C.scale,0,0);k.transform(1,0,0,1,-p,-m);this.clipBbox(k,a,p,m,v,g);k.executeOperatorList(r);this.ctx.transform(1,0,0,1,p,m);this.ctx.scale(1/S.scale,1/C.scale);return A.canvas},getSizeAndScale:function TilingPattern_getSizeAndScale(t,r,a){t=Math.abs(t);var o=Math.max(3e3,r),i=Math.ceil(t*a);i>=o?i=o:a=i/t;return{scale:a,size:i}},clipBbox:function clipBbox(t,r,a,o,i,l){if(Array.isArray(r)&&4===r.length){var c=i-a,u=l-o;t.ctx.rect(a,o,c,u);t.clip();t.endPath()}},setFillAndStrokeStyleToContext:function setFillAndStrokeStyleToContext(a,i,l){var c=a.ctx,u=a.current;switch(i){case t:var d=this.ctx;c.fillStyle=d.fillStyle;c.strokeStyle=d.strokeStyle;u.fillColor=d.fillStyle;u.strokeColor=d.strokeStyle;break;case r:var h=o.Util.makeCssRgb(l[0],l[1],l[2]);c.fillStyle=h;c.strokeStyle=h;u.fillColor=h;u.strokeColor=h;break;default:throw new o.FormatError("Unsupported paint type: ".concat(i))}},getPattern:function TilingPattern_getPattern(t,r){(t=this.ctx).setTransform.apply(t,this.baseTransform);t.transform.apply(t,this.matrix);var a=this.createPatternCanvas(r);return t.createPattern(a,"repeat")}};return TilingPattern}();r.TilingPattern=c},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.GlobalWorkerOptions=void 0;var o=Object.create(null);r.GlobalWorkerOptions=o;o.workerPort=void 0===o.workerPort?null:o.workerPort;o.workerSrc=void 0===o.workerSrc?"":o.workerSrc},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.MessageHandler=void 0;var o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(a(2)),i=a(5);function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var l=1,c=2,u=1,d=2,h=3,p=4,m=5,v=6,g=7,y=8;function wrapReason(t){if("object"!==_typeof(t)||null===t)return t;switch(t.name){case"AbortException":return new i.AbortException(t.message);case"MissingPDFException":return new i.MissingPDFException(t.message);case"UnexpectedResponseException":return new i.UnexpectedResponseException(t.message,t.status);case"UnknownErrorException":return new i.UnknownErrorException(t.message,t.details);default:return new i.UnknownErrorException(t.message,t.toString())}}var b=function(){function MessageHandler(t,r,a){var o=this;!function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,MessageHandler);this.sourceName=t;this.targetName=r;this.comObj=a;this.callbackId=1;this.streamId=1;this.postMessageTransfers=!0;this.streamSinks=Object.create(null);this.streamControllers=Object.create(null);this.callbackCapabilities=Object.create(null);this.actionHandler=Object.create(null);this._onComObjOnMessage=function(t){var r=t.data;if(r.targetName===o.sourceName)if(r.stream)o._processStreamMessage(r);else if(r.callback){var i=r.callbackId,u=o.callbackCapabilities[i];if(!u)throw new Error("Cannot resolve callback ".concat(i));delete o.callbackCapabilities[i];if(r.callback===l)u.resolve(r.data);else{if(r.callback!==c)throw new Error("Unexpected callback case");u.reject(wrapReason(r.reason))}}else{var d=o.actionHandler[r.action];if(!d)throw new Error("Unknown action from worker: ".concat(r.action));if(r.callbackId){var h=o.sourceName,p=r.sourceName;new Promise((function(t){t(d(r.data))})).then((function(t){a.postMessage({sourceName:h,targetName:p,callback:l,callbackId:r.callbackId,data:t})}),(function(t){a.postMessage({sourceName:h,targetName:p,callback:c,callbackId:r.callbackId,reason:wrapReason(t)})}))}else r.streamId?o._createStreamSink(r):d(r.data)}};a.addEventListener("message",this._onComObjOnMessage)}!function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}(MessageHandler,[{key:"on",value:function on(t,r){var a=this.actionHandler;if(a[t])throw new Error('There is already an actionName called "'.concat(t,'"'));a[t]=r}},{key:"send",value:function send(t,r,a){this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:t,data:r},a)}},{key:"sendWithPromise",value:function sendWithPromise(t,r,a){var o=this.callbackId++,l=(0,i.createPromiseCapability)();this.callbackCapabilities[o]=l;try{this._postMessage({sourceName:this.sourceName,targetName:this.targetName,action:t,callbackId:o,data:r},a)}catch(t){l.reject(t)}return l.promise}},{key:"sendWithStream",value:function sendWithStream(t,r,a,o){var l=this,c=this.streamId++,d=this.sourceName,h=this.targetName,p=this.comObj;return new ReadableStream({start:function start(a){var u=(0,i.createPromiseCapability)();l.streamControllers[c]={controller:a,startCall:u,pullCall:null,cancelCall:null,isClosed:!1};l._postMessage({sourceName:d,targetName:h,action:t,streamId:c,data:r,desiredSize:a.desiredSize},o);return u.promise},pull:function pull(t){var r=(0,i.createPromiseCapability)();l.streamControllers[c].pullCall=r;p.postMessage({sourceName:d,targetName:h,stream:v,streamId:c,desiredSize:t.desiredSize});return r.promise},cancel:function cancel(t){(0,i.assert)(t instanceof Error,"cancel must have a valid reason");var r=(0,i.createPromiseCapability)();l.streamControllers[c].cancelCall=r;l.streamControllers[c].isClosed=!0;p.postMessage({sourceName:d,targetName:h,stream:u,streamId:c,reason:wrapReason(t)});return r.promise}},a)}},{key:"_createStreamSink",value:function _createStreamSink(t){var r=this,a=this.actionHandler[t.action],o=t.streamId,l=this.sourceName,c=t.sourceName,u=this.comObj,d={enqueue:function enqueue(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,u=arguments.length>2?arguments[2]:void 0;if(!this.isCancelled){var d=this.desiredSize;this.desiredSize-=a;if(d>0&&this.desiredSize<=0){this.sinkCapability=(0,i.createPromiseCapability)();this.ready=this.sinkCapability.promise}r._postMessage({sourceName:l,targetName:c,stream:p,streamId:o,chunk:t},u)}},close:function close(){if(!this.isCancelled){this.isCancelled=!0;u.postMessage({sourceName:l,targetName:c,stream:h,streamId:o});delete r.streamSinks[o]}},error:function error(t){(0,i.assert)(t instanceof Error,"error must have a valid reason");if(!this.isCancelled){this.isCancelled=!0;u.postMessage({sourceName:l,targetName:c,stream:m,streamId:o,reason:wrapReason(t)})}},sinkCapability:(0,i.createPromiseCapability)(),onPull:null,onCancel:null,isCancelled:!1,desiredSize:t.desiredSize,ready:null};d.sinkCapability.resolve();d.ready=d.sinkCapability.promise;this.streamSinks[o]=d;new Promise((function(r){r(a(t.data,d))})).then((function(){u.postMessage({sourceName:l,targetName:c,stream:y,streamId:o,success:!0})}),(function(t){u.postMessage({sourceName:l,targetName:c,stream:y,streamId:o,reason:wrapReason(t)})}))}},{key:"_processStreamMessage",value:function _processStreamMessage(t){var r=t.streamId,a=this.sourceName,o=t.sourceName,l=this.comObj;switch(t.stream){case y:t.success?this.streamControllers[r].startCall.resolve():this.streamControllers[r].startCall.reject(wrapReason(t.reason));break;case g:t.success?this.streamControllers[r].pullCall.resolve():this.streamControllers[r].pullCall.reject(wrapReason(t.reason));break;case v:if(!this.streamSinks[r]){l.postMessage({sourceName:a,targetName:o,stream:g,streamId:r,success:!0});break}this.streamSinks[r].desiredSize<=0&&t.desiredSize>0&&this.streamSinks[r].sinkCapability.resolve();this.streamSinks[r].desiredSize=t.desiredSize;var c=this.streamSinks[t.streamId].onPull;new Promise((function(t){t(c&&c())})).then((function(){l.postMessage({sourceName:a,targetName:o,stream:g,streamId:r,success:!0})}),(function(t){l.postMessage({sourceName:a,targetName:o,stream:g,streamId:r,reason:wrapReason(t)})}));break;case p:(0,i.assert)(this.streamControllers[r],"enqueue should have stream controller");if(this.streamControllers[r].isClosed)break;this.streamControllers[r].controller.enqueue(t.chunk);break;case h:(0,i.assert)(this.streamControllers[r],"close should have stream controller");if(this.streamControllers[r].isClosed)break;this.streamControllers[r].isClosed=!0;this.streamControllers[r].controller.close();this._deleteStreamController(r);break;case m:(0,i.assert)(this.streamControllers[r],"error should have stream controller");this.streamControllers[r].controller.error(wrapReason(t.reason));this._deleteStreamController(r);break;case d:t.success?this.streamControllers[r].cancelCall.resolve():this.streamControllers[r].cancelCall.reject(wrapReason(t.reason));this._deleteStreamController(r);break;case u:if(!this.streamSinks[r])break;var b=this.streamSinks[t.streamId].onCancel;new Promise((function(r){r(b&&b(wrapReason(t.reason)))})).then((function(){l.postMessage({sourceName:a,targetName:o,stream:d,streamId:r,success:!0})}),(function(t){l.postMessage({sourceName:a,targetName:o,stream:d,streamId:r,reason:wrapReason(t)})}));this.streamSinks[r].sinkCapability.reject(wrapReason(t.reason));this.streamSinks[r].isCancelled=!0;delete this.streamSinks[r];break;default:throw new Error("Unexpected stream case")}}},{key:"_deleteStreamController",value:(t=function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}(o.default.mark((function _callee(t){return o.default.wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:r.next=2;return Promise.allSettled([this.streamControllers[t].startCall,this.streamControllers[t].pullCall,this.streamControllers[t].cancelCall].map((function(t){return t&&t.promise})));case 2:delete this.streamControllers[t];case 3:case"end":return r.stop()}}),_callee,this)}))),function _deleteStreamController(r){return t.apply(this,arguments)})},{key:"_postMessage",value:function _postMessage(t,r){r&&this.postMessageTransfers?this.comObj.postMessage(t,r):this.comObj.postMessage(t)}},{key:"destroy",value:function destroy(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}}]);var t;return MessageHandler}();r.MessageHandler=b},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.Metadata=void 0;var o=a(5),i=a(212);function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}var l=function(){function Metadata(t){!function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Metadata);(0,o.assert)("string"==typeof t,"Metadata: input is not a string");t=this._repair(t);var r=(new i.SimpleXMLParser).parseFromString(t);this._metadataMap=new Map;r&&this._parse(r)}!function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}(Metadata,[{key:"_repair",value:function _repair(t){return t.replace(/^[^<]+/,"").replace(/>\\376\\377([^<]+)/g,(function(t,r){for(var a=r.replace(/\\([0-3])([0-7])([0-7])/g,(function(t,r,a,o){return String.fromCharCode(64*r+8*a+1*o)})).replace(/&(amp|apos|gt|lt|quot);/g,(function(t,r){switch(r){case"amp":return"&";case"apos":return"'";case"gt":return">";case"lt":return"<";case"quot":return'"'}throw new Error("_repair: ".concat(r," isn't defined."))})),o="",i=0,l=a.length;i<l;i+=2){var c=256*a.charCodeAt(i)+a.charCodeAt(i+1);o+=c>=32&&c<127&&60!==c&&62!==c&&38!==c?String.fromCharCode(c):"&#x"+(65536+c).toString(16).substring(1)+";"}return">"+o}))}},{key:"_parse",value:function _parse(t){var r=t.documentElement;if("rdf:rdf"!==r.nodeName.toLowerCase()){r=r.firstChild;for(;r&&"rdf:rdf"!==r.nodeName.toLowerCase();)r=r.nextSibling}var a=r?r.nodeName.toLowerCase():null;if(r&&"rdf:rdf"===a&&r.hasChildNodes())for(var o=r.childNodes,i=0,l=o.length;i<l;i++){var c=o[i];if("rdf:description"===c.nodeName.toLowerCase())for(var u=0,d=c.childNodes.length;u<d;u++)if("#text"!==c.childNodes[u].nodeName.toLowerCase()){var h=c.childNodes[u],p=h.nodeName.toLowerCase();this._metadataMap.set(p,h.textContent.trim())}}}},{key:"get",value:function get(t){return this._metadataMap.has(t)?this._metadataMap.get(t):null}},{key:"getAll",value:function getAll(){return Object.fromEntries(this._metadataMap)}},{key:"has",value:function has(t){return this._metadataMap.has(t)}}]);return Metadata}();r.Metadata=l},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.SimpleXMLParser=void 0;function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _slicedToArray(t,r){return function _arrayWithHoles(t){if(Array.isArray(t))return t}(t)||function _iterableToArrayLimit(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],o=!0,i=!1,l=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){a.push(c.value);if(r&&a.length===r)break}}catch(t){i=!0;l=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return a}(t,r)||function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t,r)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function _get(t,r,a){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function _get(t,r,a){var o=function _superPropBase(t,r){for(;!Object.prototype.hasOwnProperty.call(t,r)&&null!==(t=_getPrototypeOf(t)););return t}(t,r);if(o){var i=Object.getOwnPropertyDescriptor(o,r);return i.get?i.get.call(a):i.value}})(t,r,a||t)}function _setPrototypeOf(t,r){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,r){t.__proto__=r;return t})(t,r)}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=_getPrototypeOf(t);if(r){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}var o=0,i=-2,l=-3,c=-4,u=-5,d=-6,h=-9;function isWhitespace(t,r){var a=t[r];return" "===a||"\n"===a||"\r"===a||"\t"===a}var p=function(){function XMLParserBase(){_classCallCheck(this,XMLParserBase)}_createClass(XMLParserBase,[{key:"_resolveEntities",value:function _resolveEntities(t){var r=this;return t.replace(/&([^;]+);/g,(function(t,a){if("#x"===a.substring(0,2))return String.fromCharCode(parseInt(a.substring(2),16));if("#"===a.substring(0,1))return String.fromCharCode(parseInt(a.substring(1),10));switch(a){case"lt":return"<";case"gt":return">";case"amp":return"&";case"quot":return'"'}return r.onResolveEntity(a)}))}},{key:"_parseContent",value:function _parseContent(t,r){var a=[],o=r;function skipWs(){for(;o<t.length&&isWhitespace(t,o);)++o}for(;o<t.length&&!isWhitespace(t,o)&&">"!==t[o]&&"/"!==t[o];)++o;var i=t.substring(r,o);skipWs();for(;o<t.length&&">"!==t[o]&&"/"!==t[o]&&"?"!==t[o];){skipWs();for(var l,c="";o<t.length&&!isWhitespace(t,o)&&"="!==t[o];){c+=t[o];++o}skipWs();if("="!==t[o])return null;++o;skipWs();var u=t[o];if('"'!==u&&"'"!==u)return null;var d=t.indexOf(u,++o);if(d<0)return null;l=t.substring(o,d);a.push({name:c,value:this._resolveEntities(l)});o=d+1;skipWs()}return{name:i,attributes:a,parsed:o-r}}},{key:"_parseProcessingInstruction",value:function _parseProcessingInstruction(t,r){var a=r;for(;a<t.length&&!isWhitespace(t,a)&&">"!==t[a]&&"/"!==t[a];)++a;var o=t.substring(r,a);!function skipWs(){for(;a<t.length&&isWhitespace(t,a);)++a}();for(var i=a;a<t.length&&("?"!==t[a]||">"!==t[a+1]);)++a;return{name:o,value:t.substring(i,a),parsed:a-r}}},{key:"parseXml",value:function parseXml(t){for(var r=0;r<t.length;){var a=r;if("<"===t[r]){var o=void 0;switch(t[++a]){case"/":++a;if((o=t.indexOf(">",a))<0){this.onError(h);return}this.onEndElement(t.substring(a,o));a=o+1;break;case"?":++a;var p=this._parseProcessingInstruction(t,a);if("?>"!==t.substring(a+p.parsed,a+p.parsed+2)){this.onError(l);return}this.onPi(p.name,p.value);a+=p.parsed+2;break;case"!":if("--"===t.substring(a+1,a+3)){if((o=t.indexOf("--\x3e",a+3))<0){this.onError(u);return}this.onComment(t.substring(a+3,o));a=o+3}else if("[CDATA["===t.substring(a+1,a+8)){if((o=t.indexOf("]]>",a+8))<0){this.onError(i);return}this.onCdata(t.substring(a+8,o));a=o+3}else{if("DOCTYPE"!==t.substring(a+1,a+8)){this.onError(d);return}var m=t.indexOf("[",a+8),v=!1;if((o=t.indexOf(">",a+8))<0){this.onError(c);return}if(m>0&&o>m){if((o=t.indexOf("]>",a+8))<0){this.onError(c);return}v=!0}var g=t.substring(a+8,o+(v?1:0));this.onDoctype(g);a=o+(v?2:1)}break;default:var y=this._parseContent(t,a);if(null===y){this.onError(d);return}var b=!1;if("/>"===t.substring(a+y.parsed,a+y.parsed+2))b=!0;else if(">"!==t.substring(a+y.parsed,a+y.parsed+1)){this.onError(h);return}this.onBeginElement(y.name,y.attributes,b);a+=y.parsed+(b?2:1)}}else{for(;a<t.length&&"<"!==t[a];)a++;var _=t.substring(r,a);this.onText(this._resolveEntities(_))}r=a}}},{key:"onResolveEntity",value:function onResolveEntity(t){return"&".concat(t,";")}},{key:"onPi",value:function onPi(t,r){}},{key:"onComment",value:function onComment(t){}},{key:"onCdata",value:function onCdata(t){}},{key:"onDoctype",value:function onDoctype(t){}},{key:"onText",value:function onText(t){}},{key:"onBeginElement",value:function onBeginElement(t,r,a){}},{key:"onEndElement",value:function onEndElement(t){}},{key:"onError",value:function onError(t){}}]);return XMLParserBase}(),m=function(){function SimpleDOMNode(t,r){_classCallCheck(this,SimpleDOMNode);this.nodeName=t;this.nodeValue=r;Object.defineProperty(this,"parentNode",{value:null,writable:!0})}_createClass(SimpleDOMNode,[{key:"hasChildNodes",value:function hasChildNodes(){return this.childNodes&&this.childNodes.length>0}},{key:"firstChild",get:function get(){return this.childNodes&&this.childNodes[0]}},{key:"nextSibling",get:function get(){var t=this.parentNode.childNodes;if(t){var r=t.indexOf(this);if(-1!==r)return t[r+1]}}},{key:"textContent",get:function get(){return this.childNodes?this.childNodes.map((function(t){return t.textContent})).join(""):this.nodeValue||""}}]);return SimpleDOMNode}(),v=function(t){!function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}});r&&_setPrototypeOf(t,r)}(SimpleXMLParser,t);var r=_createSuper(SimpleXMLParser);function SimpleXMLParser(){var t;_classCallCheck(this,SimpleXMLParser);(t=r.call(this))._currentFragment=null;t._stack=null;t._errorCode=o;return t}_createClass(SimpleXMLParser,[{key:"parseFromString",value:function parseFromString(t){this._currentFragment=[];this._stack=[];this._errorCode=o;this.parseXml(t);if(this._errorCode===o){var r=_slicedToArray(this._currentFragment,1)[0];if(r)return{documentElement:r}}}},{key:"onResolveEntity",value:function onResolveEntity(t){switch(t){case"apos":return"'"}return _get(_getPrototypeOf(SimpleXMLParser.prototype),"onResolveEntity",this).call(this,t)}},{key:"onText",value:function onText(t){if(!function isWhitespaceString(t){for(var r=0,a=t.length;r<a;r++)if(!isWhitespace(t,r))return!1;return!0}(t)){var r=new m("#text",t);this._currentFragment.push(r)}}},{key:"onCdata",value:function onCdata(t){var r=new m("#text",t);this._currentFragment.push(r)}},{key:"onBeginElement",value:function onBeginElement(t,r,a){var o=new m(t);o.childNodes=[];this._currentFragment.push(o);if(!a){this._stack.push(this._currentFragment);this._currentFragment=o.childNodes}}},{key:"onEndElement",value:function onEndElement(t){this._currentFragment=this._stack.pop()||[];var r=this._currentFragment[this._currentFragment.length-1];if(r)for(var a=0,o=r.childNodes.length;a<o;a++)r.childNodes[a].parentNode=r}},{key:"onError",value:function onError(t){this._errorCode=t}}]);return SimpleXMLParser}(p);r.SimpleXMLParser=v},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.OptionalContentConfig=void 0;var o=a(5);function _createForOfIteratorHelper(t,r){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function F(){};return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function s(){a=t[Symbol.iterator]()},n:function n(){var t=a.next();c=t.done;return t},e:function e(t){u=!0;l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var i=function OptionalContentGroup(t,r){_classCallCheck(this,OptionalContentGroup);this.visible=!0;this.name=t;this.intent=r},l=function(){function OptionalContentConfig(t){_classCallCheck(this,OptionalContentConfig);this.name=null;this.creator=null;this._order=null;this._groups=new Map;if(null!==t){this.name=t.name;this.creator=t.creator;this._order=t.order;var r,a=_createForOfIteratorHelper(t.groups);try{for(a.s();!(r=a.n()).done;){var o=r.value;this._groups.set(o.id,new i(o.name,o.intent))}}catch(t){a.e(t)}finally{a.f()}if("OFF"===t.baseState){var l,c=_createForOfIteratorHelper(this._groups);try{for(c.s();!(l=c.n()).done;){l.value.visible=!1}}catch(t){c.e(t)}finally{c.f()}}var u,d=_createForOfIteratorHelper(t.on);try{for(d.s();!(u=d.n()).done;){var h=u.value;this._groups.get(h).visible=!0}}catch(t){d.e(t)}finally{d.f()}var p,m=_createForOfIteratorHelper(t.off);try{for(m.s();!(p=m.n()).done;){var v=p.value;this._groups.get(v).visible=!1}}catch(t){m.e(t)}finally{m.f()}}}!function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}(OptionalContentConfig,[{key:"isVisible",value:function isVisible(t){if("OCG"===t.type){if(!this._groups.has(t.id)){(0,o.warn)("Optional content group not found: ".concat(t.id));return!0}return this._groups.get(t.id).visible}if("OCMD"===t.type){t.expression&&(0,o.warn)("Visibility expression not supported yet.");if(!t.policy||"AnyOn"===t.policy){var r,a=_createForOfIteratorHelper(t.ids);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(!this._groups.has(i)){(0,o.warn)("Optional content group not found: ".concat(i));return!0}if(this._groups.get(i).visible)return!0}}catch(t){a.e(t)}finally{a.f()}return!1}if("AllOn"===t.policy){var l,c=_createForOfIteratorHelper(t.ids);try{for(c.s();!(l=c.n()).done;){var u=l.value;if(!this._groups.has(u)){(0,o.warn)("Optional content group not found: ".concat(u));return!0}if(!this._groups.get(u).visible)return!1}}catch(t){c.e(t)}finally{c.f()}return!0}if("AnyOff"===t.policy){var d,h=_createForOfIteratorHelper(t.ids);try{for(h.s();!(d=h.n()).done;){var p=d.value;if(!this._groups.has(p)){(0,o.warn)("Optional content group not found: ".concat(p));return!0}if(!this._groups.get(p).visible)return!0}}catch(t){h.e(t)}finally{h.f()}return!1}if("AllOff"===t.policy){var m,v=_createForOfIteratorHelper(t.ids);try{for(v.s();!(m=v.n()).done;){var g=m.value;if(!this._groups.has(g)){(0,o.warn)("Optional content group not found: ".concat(g));return!0}if(this._groups.get(g).visible)return!1}}catch(t){v.e(t)}finally{v.f()}return!0}(0,o.warn)("Unknown optional content policy ".concat(t.policy,"."));return!0}(0,o.warn)("Unknown group type ".concat(t.type,"."));return!0}},{key:"setVisibility",value:function setVisibility(t){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._groups.has(t)?this._groups.get(t).visible=!!r:(0,o.warn)("Optional content group not found: ".concat(t))}},{key:"getOrder",value:function getOrder(){return this._groups.size?this._order?this._order.slice():Array.from(this._groups.keys()):null}},{key:"getGroups",value:function getGroups(){return this._groups.size?Object.fromEntries(this._groups):null}},{key:"getGroup",value:function getGroup(t){return this._groups.get(t)||null}}]);return OptionalContentConfig}();r.OptionalContentConfig=l},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.PDFDataTransportStream=void 0;var o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(a(2)),i=a(5);function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}function _createForOfIteratorHelper(t,r){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function F(){};return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function s(){a=t[Symbol.iterator]()},n:function n(){var t=a.next();c=t.done;return t},e:function e(t){u=!0;l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}var l=function(){function PDFDataTransportStream(t,r){var a=this;_classCallCheck(this,PDFDataTransportStream);(0,i.assert)(r,'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');this._queuedChunks=[];this._progressiveDone=t.progressiveDone||!1;var o=t.initialData;if(o&&o.length>0){var l=new Uint8Array(o).buffer;this._queuedChunks.push(l)}this._pdfDataRangeTransport=r;this._isStreamingSupported=!t.disableStream;this._isRangeSupported=!t.disableRange;this._contentLength=t.length;this._fullRequestReader=null;this._rangeReaders=[];this._pdfDataRangeTransport.addRangeListener((function(t,r){a._onReceiveData({begin:t,chunk:r})}));this._pdfDataRangeTransport.addProgressListener((function(t,r){a._onProgress({loaded:t,total:r})}));this._pdfDataRangeTransport.addProgressiveReadListener((function(t){a._onReceiveData({chunk:t})}));this._pdfDataRangeTransport.addProgressiveDoneListener((function(){a._onProgressiveDone()}));this._pdfDataRangeTransport.transportReady()}_createClass(PDFDataTransportStream,[{key:"_onReceiveData",value:function _onReceiveData(t){var r=new Uint8Array(t.chunk).buffer;if(void 0===t.begin)this._fullRequestReader?this._fullRequestReader._enqueue(r):this._queuedChunks.push(r);else{var a=this._rangeReaders.some((function(a){if(a._begin!==t.begin)return!1;a._enqueue(r);return!0}));(0,i.assert)(a,"_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")}}},{key:"_onProgress",value:function _onProgress(t){if(void 0===t.total){var r=this._rangeReaders[0];r&&r.onProgress&&r.onProgress({loaded:t.loaded})}else{var a=this._fullRequestReader;a&&a.onProgress&&a.onProgress({loaded:t.loaded,total:t.total})}}},{key:"_onProgressiveDone",value:function _onProgressiveDone(){this._fullRequestReader&&this._fullRequestReader.progressiveDone();this._progressiveDone=!0}},{key:"_removeRangeReader",value:function _removeRangeReader(t){var r=this._rangeReaders.indexOf(t);r>=0&&this._rangeReaders.splice(r,1)}},{key:"getFullReader",value:function getFullReader(){(0,i.assert)(!this._fullRequestReader,"PDFDataTransportStream.getFullReader can only be called once.");var t=this._queuedChunks;this._queuedChunks=null;return new c(this,t,this._progressiveDone)}},{key:"getRangeReader",value:function getRangeReader(t,r){if(r<=this._progressiveDataLength)return null;var a=new u(this,t,r);this._pdfDataRangeTransport.requestDataRange(t,r);this._rangeReaders.push(a);return a}},{key:"cancelAllRequests",value:function cancelAllRequests(t){this._fullRequestReader&&this._fullRequestReader.cancel(t);this._rangeReaders.slice(0).forEach((function(r){r.cancel(t)}));this._pdfDataRangeTransport.abort()}},{key:"_progressiveDataLength",get:function get(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]);return PDFDataTransportStream}();r.PDFDataTransportStream=l;var c=function(){function PDFDataTransportStreamReader(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_classCallCheck(this,PDFDataTransportStreamReader);this._stream=t;this._done=a||!1;this._filename=null;this._queuedChunks=r||[];this._loaded=0;var o,i=_createForOfIteratorHelper(this._queuedChunks);try{for(i.s();!(o=i.n()).done;){var l=o.value;this._loaded+=l.byteLength}}catch(t){i.e(t)}finally{i.f()}this._requests=[];this._headersReady=Promise.resolve();t._fullRequestReader=this;this.onProgress=null}_createClass(PDFDataTransportStreamReader,[{key:"_enqueue",value:function _enqueue(t){if(!this._done){if(this._requests.length>0){this._requests.shift().resolve({value:t,done:!1})}else this._queuedChunks.push(t);this._loaded+=t.byteLength}}},{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee(){var t,r;return o.default.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(!(this._queuedChunks.length>0)){a.next=3;break}t=this._queuedChunks.shift();return a.abrupt("return",{value:t,done:!1});case 3:if(!this._done){a.next=5;break}return a.abrupt("return",{value:void 0,done:!0});case 5:r=(0,i.createPromiseCapability)();this._requests.push(r);return a.abrupt("return",r.promise);case 8:case"end":return a.stop()}}),_callee,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._done=!0;this._requests.forEach((function(t){t.resolve({value:void 0,done:!0})}));this._requests=[]}},{key:"progressiveDone",value:function progressiveDone(){this._done||(this._done=!0)}},{key:"headersReady",get:function get(){return this._headersReady}},{key:"filename",get:function get(){return this._filename}},{key:"isRangeSupported",get:function get(){return this._stream._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._stream._isStreamingSupported}},{key:"contentLength",get:function get(){return this._stream._contentLength}}]);var t;return PDFDataTransportStreamReader}(),u=function(){function PDFDataTransportStreamRangeReader(t,r,a){_classCallCheck(this,PDFDataTransportStreamRangeReader);this._stream=t;this._begin=r;this._end=a;this._queuedChunk=null;this._requests=[];this._done=!1;this.onProgress=null}_createClass(PDFDataTransportStreamRangeReader,[{key:"_enqueue",value:function _enqueue(t){if(!this._done){if(0===this._requests.length)this._queuedChunk=t;else{this._requests.shift().resolve({value:t,done:!1});this._requests.forEach((function(t){t.resolve({value:void 0,done:!0})}));this._requests=[]}this._done=!0;this._stream._removeRangeReader(this)}}},{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee2(){var t,r;return o.default.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(!this._queuedChunk){a.next=4;break}t=this._queuedChunk;this._queuedChunk=null;return a.abrupt("return",{value:t,done:!1});case 4:if(!this._done){a.next=6;break}return a.abrupt("return",{value:void 0,done:!0});case 6:r=(0,i.createPromiseCapability)();this._requests.push(r);return a.abrupt("return",r.promise);case 9:case"end":return a.stop()}}),_callee2,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._done=!0;this._requests.forEach((function(t){t.resolve({value:void 0,done:!0})}));this._requests=[];this._stream._removeRangeReader(this)}},{key:"isStreamingSupported",get:function get(){return!1}}]);var t;return PDFDataTransportStreamRangeReader}()},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.WebGLContext=void 0;var o=a(5);function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}var i=function(){function WebGLContext(t){var r=t.enable,a=void 0!==r&&r;!function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,WebGLContext);this._enabled=!0===a}!function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}(WebGLContext,[{key:"composeSMask",value:function composeSMask(t){var r=t.layer,a=t.mask,o=t.properties;return l.composeSMask(r,a,o)}},{key:"drawFigures",value:function drawFigures(t){var r=t.width,a=t.height,o=t.backgroundColor,i=t.figures,c=t.context;return l.drawFigures(r,a,o,i,c)}},{key:"clear",value:function clear(){l.cleanup()}},{key:"isEnabled",get:function get(){var t=this._enabled;t&&(t=l.tryInitGL());return(0,o.shadow)(this,"isEnabled",t)}}]);return WebGLContext}();r.WebGLContext=i;var l=function WebGLUtilsClosure(){function loadShader(t,r,a){var o=t.createShader(a);t.shaderSource(o,r);t.compileShader(o);if(!t.getShaderParameter(o,t.COMPILE_STATUS)){var i=t.getShaderInfoLog(o);throw new Error("Error during shader compilation: "+i)}return o}function createVertexShader(t,r){return loadShader(t,r,t.VERTEX_SHADER)}function createFragmentShader(t,r){return loadShader(t,r,t.FRAGMENT_SHADER)}function createProgram(t,r){for(var a=t.createProgram(),o=0,i=r.length;o<i;++o)t.attachShader(a,r[o]);t.linkProgram(a);if(!t.getProgramParameter(a,t.LINK_STATUS)){var l=t.getProgramInfoLog(a);throw new Error("Error during program linking: "+l)}return a}function createTexture(t,r,a){t.activeTexture(a);var o=t.createTexture();t.bindTexture(t.TEXTURE_2D,o);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,r);return o}var t,r;function generateGL(){if(!t){r=document.createElement("canvas");t=r.getContext("webgl",{premultipliedalpha:!1})}}var a=null;var o=null;return{tryInitGL:function tryInitGL(){try{generateGL();return!!t}catch(t){}return!1},composeSMask:function composeSMask(o,i,l){var c=o.width,u=o.height;a||function initSmaskGL(){var o,i;generateGL();o=r;r=null;i=t;t=null;var l=createProgram(i,[createVertexShader(i,"  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             "),createFragmentShader(i,"  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ")]);i.useProgram(l);var c={};c.gl=i;c.canvas=o;c.resolutionLocation=i.getUniformLocation(l,"u_resolution");c.positionLocation=i.getAttribLocation(l,"a_position");c.backdropLocation=i.getUniformLocation(l,"u_backdrop");c.subtypeLocation=i.getUniformLocation(l,"u_subtype");var u=i.getAttribLocation(l,"a_texCoord"),d=i.getUniformLocation(l,"u_image"),h=i.getUniformLocation(l,"u_mask"),p=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,p);i.bufferData(i.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),i.STATIC_DRAW);i.enableVertexAttribArray(u);i.vertexAttribPointer(u,2,i.FLOAT,!1,0,0);i.uniform1i(d,0);i.uniform1i(h,1);a=c}();var d=a,h=d.canvas,p=d.gl;h.width=c;h.height=u;p.viewport(0,0,p.drawingBufferWidth,p.drawingBufferHeight);p.uniform2f(d.resolutionLocation,c,u);l.backdrop?p.uniform4f(d.resolutionLocation,l.backdrop[0],l.backdrop[1],l.backdrop[2],1):p.uniform4f(d.resolutionLocation,0,0,0,0);p.uniform1i(d.subtypeLocation,"Luminosity"===l.subtype?1:0);var m=createTexture(p,o,p.TEXTURE0),v=createTexture(p,i,p.TEXTURE1),g=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,g);p.bufferData(p.ARRAY_BUFFER,new Float32Array([0,0,c,0,0,u,0,u,c,0,c,u]),p.STATIC_DRAW);p.enableVertexAttribArray(d.positionLocation);p.vertexAttribPointer(d.positionLocation,2,p.FLOAT,!1,0,0);p.clearColor(0,0,0,0);p.enable(p.BLEND);p.blendFunc(p.ONE,p.ONE_MINUS_SRC_ALPHA);p.clear(p.COLOR_BUFFER_BIT);p.drawArrays(p.TRIANGLES,0,6);p.flush();p.deleteTexture(m);p.deleteTexture(v);p.deleteBuffer(g);return h},drawFigures:function drawFigures(a,i,l,c,u){o||function initFiguresGL(){var a,i;generateGL();a=r;r=null;i=t;t=null;var l=createProgram(i,[createVertexShader(i,"  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             "),createFragmentShader(i,"  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ")]);i.useProgram(l);var c={};c.gl=i;c.canvas=a;c.resolutionLocation=i.getUniformLocation(l,"u_resolution");c.scaleLocation=i.getUniformLocation(l,"u_scale");c.offsetLocation=i.getUniformLocation(l,"u_offset");c.positionLocation=i.getAttribLocation(l,"a_position");c.colorLocation=i.getAttribLocation(l,"a_color");o=c}();var d=o,h=d.canvas,p=d.gl;h.width=a;h.height=i;p.viewport(0,0,p.drawingBufferWidth,p.drawingBufferHeight);p.uniform2f(d.resolutionLocation,a,i);var m,v,g,y=0;for(m=0,v=c.length;m<v;m++)switch(c[m].type){case"lattice":y+=((g=c[m].coords.length/c[m].verticesPerRow|0)-1)*(c[m].verticesPerRow-1)*6;break;case"triangles":y+=c[m].coords.length}var b=new Float32Array(2*y),_=new Uint8Array(3*y),S=u.coords,C=u.colors,A=0,R=0;for(m=0,v=c.length;m<v;m++){var k=c[m],w=k.coords,P=k.colors;switch(k.type){case"lattice":var x=k.verticesPerRow;g=w.length/x|0;for(var T=1;T<g;T++)for(var E=T*x+1,O=1;O<x;O++,E++){b[A]=S[w[E-x-1]];b[A+1]=S[w[E-x-1]+1];b[A+2]=S[w[E-x]];b[A+3]=S[w[E-x]+1];b[A+4]=S[w[E-1]];b[A+5]=S[w[E-1]+1];_[R]=C[P[E-x-1]];_[R+1]=C[P[E-x-1]+1];_[R+2]=C[P[E-x-1]+2];_[R+3]=C[P[E-x]];_[R+4]=C[P[E-x]+1];_[R+5]=C[P[E-x]+2];_[R+6]=C[P[E-1]];_[R+7]=C[P[E-1]+1];_[R+8]=C[P[E-1]+2];b[A+6]=b[A+2];b[A+7]=b[A+3];b[A+8]=b[A+4];b[A+9]=b[A+5];b[A+10]=S[w[E]];b[A+11]=S[w[E]+1];_[R+9]=_[R+3];_[R+10]=_[R+4];_[R+11]=_[R+5];_[R+12]=_[R+6];_[R+13]=_[R+7];_[R+14]=_[R+8];_[R+15]=C[P[E]];_[R+16]=C[P[E]+1];_[R+17]=C[P[E]+2];A+=12;R+=18}break;case"triangles":for(var I=0,D=w.length;I<D;I++){b[A]=S[w[I]];b[A+1]=S[w[I]+1];_[R]=C[P[I]];_[R+1]=C[P[I]+1];_[R+2]=C[P[I]+2];A+=2;R+=3}}}l?p.clearColor(l[0]/255,l[1]/255,l[2]/255,1):p.clearColor(0,0,0,0);p.clear(p.COLOR_BUFFER_BIT);var L=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,L);p.bufferData(p.ARRAY_BUFFER,b,p.STATIC_DRAW);p.enableVertexAttribArray(d.positionLocation);p.vertexAttribPointer(d.positionLocation,2,p.FLOAT,!1,0,0);var M=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,M);p.bufferData(p.ARRAY_BUFFER,_,p.STATIC_DRAW);p.enableVertexAttribArray(d.colorLocation);p.vertexAttribPointer(d.colorLocation,3,p.UNSIGNED_BYTE,!1,0,0);p.uniform2f(d.scaleLocation,u.scaleX,u.scaleY);p.uniform2f(d.offsetLocation,u.offsetX,u.offsetY);p.drawArrays(p.TRIANGLES,0,y);p.flush();p.deleteBuffer(L);p.deleteBuffer(M);return h},cleanup:function cleanup(){if(a&&a.canvas){a.canvas.width=0;a.canvas.height=0}if(o&&o.canvas){o.canvas.width=0;o.canvas.height=0}a=null;o=null}}}()},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.AnnotationLayer=void 0;var o=a(1),i=a(5),l=a(205);function _get(t,r,a){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function _get(t,r,a){var o=function _superPropBase(t,r){for(;!Object.prototype.hasOwnProperty.call(t,r)&&null!==(t=_getPrototypeOf(t)););return t}(t,r);if(o){var i=Object.getOwnPropertyDescriptor(o,r);return i.get?i.get.call(a):i.value}})(t,r,a||t)}function _createForOfIteratorHelper(t,r){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function F(){};return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function s(){a=t[Symbol.iterator]()},n:function n(){var t=a.next();c=t.done;return t},e:function e(t){u=!0;l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}});r&&_setPrototypeOf(t,r)}function _setPrototypeOf(t,r){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,r){t.__proto__=r;return t})(t,r)}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=_getPrototypeOf(t);if(r){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?_assertThisInitialized(t):r}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}var c=function(){function AnnotationElementFactory(){_classCallCheck(this,AnnotationElementFactory)}_createClass(AnnotationElementFactory,null,[{key:"create",value:function create(t){switch(t.data.annotationType){case i.AnnotationType.LINK:return new d(t);case i.AnnotationType.TEXT:return new h(t);case i.AnnotationType.WIDGET:switch(t.data.fieldType){case"Tx":return new m(t);case"Btn":return t.data.radioButton?new g(t):t.data.checkBox?new v(t):new y(t);case"Ch":return new b(t)}return new p(t);case i.AnnotationType.POPUP:return new _(t);case i.AnnotationType.FREETEXT:return new C(t);case i.AnnotationType.LINE:return new A(t);case i.AnnotationType.SQUARE:return new R(t);case i.AnnotationType.CIRCLE:return new k(t);case i.AnnotationType.POLYLINE:return new w(t);case i.AnnotationType.CARET:return new x(t);case i.AnnotationType.INK:return new T(t);case i.AnnotationType.POLYGON:return new P(t);case i.AnnotationType.HIGHLIGHT:return new E(t);case i.AnnotationType.UNDERLINE:return new O(t);case i.AnnotationType.SQUIGGLY:return new I(t);case i.AnnotationType.STRIKEOUT:return new D(t);case i.AnnotationType.STAMP:return new L(t);case i.AnnotationType.FILEATTACHMENT:return new M(t);default:return new u(t)}}}]);return AnnotationElementFactory}(),u=function(){function AnnotationElement(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_classCallCheck(this,AnnotationElement);this.isRenderable=r;this.data=t.data;this.layer=t.layer;this.page=t.page;this.viewport=t.viewport;this.linkService=t.linkService;this.downloadManager=t.downloadManager;this.imageResourcesPath=t.imageResourcesPath;this.renderInteractiveForms=t.renderInteractiveForms;this.svgFactory=t.svgFactory;this.annotationStorage=t.annotationStorage;r&&(this.container=this._createContainer(a))}_createClass(AnnotationElement,[{key:"_createContainer",value:function _createContainer(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.data,a=this.page,o=this.viewport,l=document.createElement("section"),c=r.rect[2]-r.rect[0],u=r.rect[3]-r.rect[1];l.setAttribute("data-annotation-id",r.id);var d=i.Util.normalizeRect([r.rect[0],a.view[3]-r.rect[1]+a.view[1],r.rect[2],a.view[3]-r.rect[3]+a.view[1]]);l.style.transform="matrix(".concat(o.transform.join(","),")");l.style.transformOrigin="-".concat(d[0],"px -").concat(d[1],"px");if(!t&&r.borderStyle.width>0){l.style.borderWidth="".concat(r.borderStyle.width,"px");if(r.borderStyle.style!==i.AnnotationBorderStyleType.UNDERLINE){c-=2*r.borderStyle.width;u-=2*r.borderStyle.width}var h=r.borderStyle.horizontalCornerRadius,p=r.borderStyle.verticalCornerRadius;if(h>0||p>0){var m="".concat(h,"px / ").concat(p,"px");l.style.borderRadius=m}switch(r.borderStyle.style){case i.AnnotationBorderStyleType.SOLID:l.style.borderStyle="solid";break;case i.AnnotationBorderStyleType.DASHED:l.style.borderStyle="dashed";break;case i.AnnotationBorderStyleType.BEVELED:(0,i.warn)("Unimplemented border style: beveled");break;case i.AnnotationBorderStyleType.INSET:(0,i.warn)("Unimplemented border style: inset");break;case i.AnnotationBorderStyleType.UNDERLINE:l.style.borderBottomStyle="solid"}r.color?l.style.borderColor=i.Util.makeCssRgb(0|r.color[0],0|r.color[1],0|r.color[2]):l.style.borderWidth=0}l.style.left="".concat(d[0],"px");l.style.top="".concat(d[1],"px");l.style.width="".concat(c,"px");l.style.height="".concat(u,"px");return l}},{key:"_createPopup",value:function _createPopup(t,r,a){if(!r){(r=document.createElement("div")).style.height=t.style.height;r.style.width=t.style.width;t.appendChild(r)}var o=new S({container:t,trigger:r,color:a.color,title:a.title,modificationDate:a.modificationDate,contents:a.contents,hideWrapper:!0}).render();o.style.left=t.style.width;t.appendChild(o)}},{key:"render",value:function render(){(0,i.unreachable)("Abstract method `AnnotationElement.render` called")}}]);return AnnotationElement}(),d=function(t){_inherits(LinkAnnotationElement,t);var r=_createSuper(LinkAnnotationElement);function LinkAnnotationElement(t){_classCallCheck(this,LinkAnnotationElement);var a=!!(t.data.url||t.data.dest||t.data.action);return r.call(this,t,a)}_createClass(LinkAnnotationElement,[{key:"render",value:function render(){this.container.className="linkAnnotation";var t=this.data,r=this.linkService,a=document.createElement("a");t.url?(0,o.addLinkAttributes)(a,{url:t.url,target:t.newWindow?o.LinkTarget.BLANK:r.externalLinkTarget,rel:r.externalLinkRel,enabled:r.externalLinkEnabled}):t.action?this._bindNamedAction(a,t.action):this._bindLink(a,t.dest);this.container.appendChild(a);return this.container}},{key:"_bindLink",value:function _bindLink(t,r){var a=this;t.href=this.linkService.getDestinationHash(r);t.onclick=function(){r&&a.linkService.navigateTo(r);return!1};r&&(t.className="internalLink")}},{key:"_bindNamedAction",value:function _bindNamedAction(t,r){var a=this;t.href=this.linkService.getAnchorUrl("");t.onclick=function(){a.linkService.executeNamedAction(r);return!1};t.className="internalLink"}}]);return LinkAnnotationElement}(u),h=function(t){_inherits(TextAnnotationElement,t);var r=_createSuper(TextAnnotationElement);function TextAnnotationElement(t){_classCallCheck(this,TextAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a)}_createClass(TextAnnotationElement,[{key:"render",value:function render(){this.container.className="textAnnotation";var t=document.createElement("img");t.style.height=this.container.style.height;t.style.width=this.container.style.width;t.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg";t.alt="[{{type}} Annotation]";t.dataset.l10nId="text_annotation_type";t.dataset.l10nArgs=JSON.stringify({type:this.data.name});this.data.hasPopup||this._createPopup(this.container,t,this.data);this.container.appendChild(t);return this.container}}]);return TextAnnotationElement}(u),p=function(t){_inherits(WidgetAnnotationElement,t);var r=_createSuper(WidgetAnnotationElement);function WidgetAnnotationElement(){_classCallCheck(this,WidgetAnnotationElement);return r.apply(this,arguments)}_createClass(WidgetAnnotationElement,[{key:"render",value:function render(){return this.container}}]);return WidgetAnnotationElement}(u),m=function(t){_inherits(TextWidgetAnnotationElement,t);var r=_createSuper(TextWidgetAnnotationElement);function TextWidgetAnnotationElement(t){_classCallCheck(this,TextWidgetAnnotationElement);var a=t.renderInteractiveForms||!t.data.hasAppearance&&!!t.data.fieldValue;return r.call(this,t,a)}_createClass(TextWidgetAnnotationElement,[{key:"render",value:function render(){var t=this.annotationStorage,r=this.data.id;this.container.className="textWidgetAnnotation";var a=null;if(this.renderInteractiveForms){var o=t.getOrCreateValue(r,this.data.fieldValue);if(this.data.multiLine)(a=document.createElement("textarea")).textContent=o;else{(a=document.createElement("input")).type="text";a.setAttribute("value",o)}a.addEventListener("input",(function(a){t.setValue(r,a.target.value)}));a.disabled=this.data.readOnly;a.name=this.data.fieldName;null!==this.data.maxLen&&(a.maxLength=this.data.maxLen);if(this.data.comb){var i=(this.data.rect[2]-this.data.rect[0])/this.data.maxLen;a.classList.add("comb");a.style.letterSpacing="calc(".concat(i,"px - 1ch)")}}else{(a=document.createElement("div")).textContent=this.data.fieldValue;a.style.verticalAlign="middle";a.style.display="table-cell";var l=null;this.data.fontRefName&&this.page.commonObjs.has(this.data.fontRefName)&&(l=this.page.commonObjs.get(this.data.fontRefName));this._setTextStyle(a,l)}null!==this.data.textAlignment&&(a.style.textAlign=["left","center","right"][this.data.textAlignment]);this.container.appendChild(a);return this.container}},{key:"_setTextStyle",value:function _setTextStyle(t,r){var a=t.style;a.fontSize="".concat(this.data.fontSize,"px");a.direction=this.data.fontDirection<0?"rtl":"ltr";if(r){var o="normal";r.black?o="900":r.bold&&(o="bold");a.fontWeight=o;a.fontStyle=r.italic?"italic":"normal";var i=r.loadedName?'"'.concat(r.loadedName,'", '):"",l=r.fallbackName||"Helvetica, sans-serif";a.fontFamily=i+l}}}]);return TextWidgetAnnotationElement}(p),v=function(t){_inherits(CheckboxWidgetAnnotationElement,t);var r=_createSuper(CheckboxWidgetAnnotationElement);function CheckboxWidgetAnnotationElement(t){_classCallCheck(this,CheckboxWidgetAnnotationElement);return r.call(this,t,t.renderInteractiveForms)}_createClass(CheckboxWidgetAnnotationElement,[{key:"render",value:function render(){var t=this.annotationStorage,r=this.data,a=r.id,o=t.getOrCreateValue(a,r.fieldValue&&"Off"!==r.fieldValue);this.container.className="buttonWidgetAnnotation checkBox";var i=document.createElement("input");i.disabled=r.readOnly;i.type="checkbox";i.name=this.data.fieldName;o&&i.setAttribute("checked",!0);i.addEventListener("change",(function(r){t.setValue(a,r.target.checked)}));this.container.appendChild(i);return this.container}}]);return CheckboxWidgetAnnotationElement}(p),g=function(t){_inherits(RadioButtonWidgetAnnotationElement,t);var r=_createSuper(RadioButtonWidgetAnnotationElement);function RadioButtonWidgetAnnotationElement(t){_classCallCheck(this,RadioButtonWidgetAnnotationElement);return r.call(this,t,t.renderInteractiveForms)}_createClass(RadioButtonWidgetAnnotationElement,[{key:"render",value:function render(){this.container.className="buttonWidgetAnnotation radioButton";var t=this.annotationStorage,r=this.data,a=r.id,o=t.getOrCreateValue(a,r.fieldValue===r.buttonValue),i=document.createElement("input");i.disabled=r.readOnly;i.type="radio";i.name=r.fieldName;o&&i.setAttribute("checked",!0);i.addEventListener("change",(function(r){var o,i=r.target.name,l=_createForOfIteratorHelper(document.getElementsByName(i));try{for(l.s();!(o=l.n()).done;){var c=o.value;c!==r.target&&t.setValue(c.parentNode.getAttribute("data-annotation-id"),!1)}}catch(t){l.e(t)}finally{l.f()}t.setValue(a,r.target.checked)}));this.container.appendChild(i);return this.container}}]);return RadioButtonWidgetAnnotationElement}(p),y=function(t){_inherits(PushButtonWidgetAnnotationElement,t);var r=_createSuper(PushButtonWidgetAnnotationElement);function PushButtonWidgetAnnotationElement(){_classCallCheck(this,PushButtonWidgetAnnotationElement);return r.apply(this,arguments)}_createClass(PushButtonWidgetAnnotationElement,[{key:"render",value:function render(){var t=_get(_getPrototypeOf(PushButtonWidgetAnnotationElement.prototype),"render",this).call(this);t.className="buttonWidgetAnnotation pushButton";return t}}]);return PushButtonWidgetAnnotationElement}(d),b=function(t){_inherits(ChoiceWidgetAnnotationElement,t);var r=_createSuper(ChoiceWidgetAnnotationElement);function ChoiceWidgetAnnotationElement(t){_classCallCheck(this,ChoiceWidgetAnnotationElement);return r.call(this,t,t.renderInteractiveForms)}_createClass(ChoiceWidgetAnnotationElement,[{key:"render",value:function render(){this.container.className="choiceWidgetAnnotation";var t=this.annotationStorage,r=this.data.id;t.getOrCreateValue(r,this.data.fieldValue.length>0?this.data.fieldValue[0]:null);var a=document.createElement("select");a.disabled=this.data.readOnly;a.name=this.data.fieldName;if(!this.data.combo){a.size=this.data.options.length;this.data.multiSelect&&(a.multiple=!0)}var o,i=_createForOfIteratorHelper(this.data.options);try{for(i.s();!(o=i.n()).done;){var l=o.value,c=document.createElement("option");c.textContent=l.displayValue;c.value=l.exportValue;this.data.fieldValue.includes(l.exportValue)&&c.setAttribute("selected",!0);a.appendChild(c)}}catch(t){i.e(t)}finally{i.f()}a.addEventListener("input",(function(a){var o=a.target.options,i=o[o.selectedIndex].value;t.setValue(r,i)}));this.container.appendChild(a);return this.container}}]);return ChoiceWidgetAnnotationElement}(p),_=function(t){_inherits(PopupAnnotationElement,t);var r=_createSuper(PopupAnnotationElement);function PopupAnnotationElement(t){_classCallCheck(this,PopupAnnotationElement);var a=!(!t.data.title&&!t.data.contents);return r.call(this,t,a)}_createClass(PopupAnnotationElement,[{key:"render",value:function render(){this.container.className="popupAnnotation";if(["Line","Square","Circle","PolyLine","Polygon","Ink"].includes(this.data.parentType))return this.container;var t='[data-annotation-id="'.concat(this.data.parentId,'"]'),r=this.layer.querySelector(t);if(!r)return this.container;var a=new S({container:this.container,trigger:r,color:this.data.color,title:this.data.title,modificationDate:this.data.modificationDate,contents:this.data.contents}),o=parseFloat(r.style.left),i=parseFloat(r.style.width);this.container.style.transformOrigin="-".concat(o+i,"px -").concat(r.style.top);this.container.style.left="".concat(o+i,"px");this.container.appendChild(a.render());return this.container}}]);return PopupAnnotationElement}(u),S=function(){function PopupElement(t){_classCallCheck(this,PopupElement);this.container=t.container;this.trigger=t.trigger;this.color=t.color;this.title=t.title;this.modificationDate=t.modificationDate;this.contents=t.contents;this.hideWrapper=t.hideWrapper||!1;this.pinned=!1}_createClass(PopupElement,[{key:"render",value:function render(){var t=document.createElement("div");t.className="popupWrapper";this.hideElement=this.hideWrapper?t:this.container;this.hideElement.setAttribute("hidden",!0);var r=document.createElement("div");r.className="popup";var a=this.color;if(a){var l=.7*(255-a[0])+a[0],c=.7*(255-a[1])+a[1],u=.7*(255-a[2])+a[2];r.style.backgroundColor=i.Util.makeCssRgb(0|l,0|c,0|u)}var d=document.createElement("h1");d.textContent=this.title;r.appendChild(d);var h=o.PDFDateString.toDateObject(this.modificationDate);if(h){var p=document.createElement("span");p.textContent="{{date}}, {{time}}";p.dataset.l10nId="annotation_date_string";p.dataset.l10nArgs=JSON.stringify({date:h.toLocaleDateString(),time:h.toLocaleTimeString()});r.appendChild(p)}var m=this._formatContents(this.contents);r.appendChild(m);this.trigger.addEventListener("click",this._toggle.bind(this));this.trigger.addEventListener("mouseover",this._show.bind(this,!1));this.trigger.addEventListener("mouseout",this._hide.bind(this,!1));r.addEventListener("click",this._hide.bind(this,!0));t.appendChild(r);return t}},{key:"_formatContents",value:function _formatContents(t){for(var r=document.createElement("p"),a=t.split(/(?:\r\n?|\n)/),o=0,i=a.length;o<i;++o){var l=a[o];r.appendChild(document.createTextNode(l));o<i-1&&r.appendChild(document.createElement("br"))}return r}},{key:"_toggle",value:function _toggle(){this.pinned?this._hide(!0):this._show(!0)}},{key:"_show",value:function _show(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(this.pinned=!0);if(this.hideElement.hasAttribute("hidden")){this.hideElement.removeAttribute("hidden");this.container.style.zIndex+=1}}},{key:"_hide",value:function _hide(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t&&(this.pinned=!1);if(!this.hideElement.hasAttribute("hidden")&&!this.pinned){this.hideElement.setAttribute("hidden",!0);this.container.style.zIndex-=1}}}]);return PopupElement}(),C=function(t){_inherits(FreeTextAnnotationElement,t);var r=_createSuper(FreeTextAnnotationElement);function FreeTextAnnotationElement(t){_classCallCheck(this,FreeTextAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(FreeTextAnnotationElement,[{key:"render",value:function render(){this.container.className="freeTextAnnotation";this.data.hasPopup||this._createPopup(this.container,null,this.data);return this.container}}]);return FreeTextAnnotationElement}(u),A=function(t){_inherits(LineAnnotationElement,t);var r=_createSuper(LineAnnotationElement);function LineAnnotationElement(t){_classCallCheck(this,LineAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(LineAnnotationElement,[{key:"render",value:function render(){this.container.className="lineAnnotation";var t=this.data,r=t.rect[2]-t.rect[0],a=t.rect[3]-t.rect[1],o=this.svgFactory.create(r,a),i=this.svgFactory.createElement("svg:line");i.setAttribute("x1",t.rect[2]-t.lineCoordinates[0]);i.setAttribute("y1",t.rect[3]-t.lineCoordinates[1]);i.setAttribute("x2",t.rect[2]-t.lineCoordinates[2]);i.setAttribute("y2",t.rect[3]-t.lineCoordinates[3]);i.setAttribute("stroke-width",t.borderStyle.width||1);i.setAttribute("stroke","transparent");o.appendChild(i);this.container.append(o);this._createPopup(this.container,i,t);return this.container}}]);return LineAnnotationElement}(u),R=function(t){_inherits(SquareAnnotationElement,t);var r=_createSuper(SquareAnnotationElement);function SquareAnnotationElement(t){_classCallCheck(this,SquareAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(SquareAnnotationElement,[{key:"render",value:function render(){this.container.className="squareAnnotation";var t=this.data,r=t.rect[2]-t.rect[0],a=t.rect[3]-t.rect[1],o=this.svgFactory.create(r,a),i=t.borderStyle.width,l=this.svgFactory.createElement("svg:rect");l.setAttribute("x",i/2);l.setAttribute("y",i/2);l.setAttribute("width",r-i);l.setAttribute("height",a-i);l.setAttribute("stroke-width",i||1);l.setAttribute("stroke","transparent");l.setAttribute("fill","none");o.appendChild(l);this.container.append(o);this._createPopup(this.container,l,t);return this.container}}]);return SquareAnnotationElement}(u),k=function(t){_inherits(CircleAnnotationElement,t);var r=_createSuper(CircleAnnotationElement);function CircleAnnotationElement(t){_classCallCheck(this,CircleAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(CircleAnnotationElement,[{key:"render",value:function render(){this.container.className="circleAnnotation";var t=this.data,r=t.rect[2]-t.rect[0],a=t.rect[3]-t.rect[1],o=this.svgFactory.create(r,a),i=t.borderStyle.width,l=this.svgFactory.createElement("svg:ellipse");l.setAttribute("cx",r/2);l.setAttribute("cy",a/2);l.setAttribute("rx",r/2-i/2);l.setAttribute("ry",a/2-i/2);l.setAttribute("stroke-width",i||1);l.setAttribute("stroke","transparent");l.setAttribute("fill","none");o.appendChild(l);this.container.append(o);this._createPopup(this.container,l,t);return this.container}}]);return CircleAnnotationElement}(u),w=function(t){_inherits(PolylineAnnotationElement,t);var r=_createSuper(PolylineAnnotationElement);function PolylineAnnotationElement(t){var a;_classCallCheck(this,PolylineAnnotationElement);var o=!!(t.data.hasPopup||t.data.title||t.data.contents);(a=r.call(this,t,o,!0)).containerClassName="polylineAnnotation";a.svgElementName="svg:polyline";return a}_createClass(PolylineAnnotationElement,[{key:"render",value:function render(){this.container.className=this.containerClassName;var t,r=this.data,a=r.rect[2]-r.rect[0],o=r.rect[3]-r.rect[1],i=this.svgFactory.create(a,o),l=[],c=_createForOfIteratorHelper(r.vertices);try{for(c.s();!(t=c.n()).done;){var u=t.value,d=u.x-r.rect[0],h=r.rect[3]-u.y;l.push(d+","+h)}}catch(t){c.e(t)}finally{c.f()}l=l.join(" ");var p=this.svgFactory.createElement(this.svgElementName);p.setAttribute("points",l);p.setAttribute("stroke-width",r.borderStyle.width||1);p.setAttribute("stroke","transparent");p.setAttribute("fill","none");i.appendChild(p);this.container.append(i);this._createPopup(this.container,p,r);return this.container}}]);return PolylineAnnotationElement}(u),P=function(t){_inherits(PolygonAnnotationElement,t);var r=_createSuper(PolygonAnnotationElement);function PolygonAnnotationElement(t){var a;_classCallCheck(this,PolygonAnnotationElement);(a=r.call(this,t)).containerClassName="polygonAnnotation";a.svgElementName="svg:polygon";return a}return PolygonAnnotationElement}(w),x=function(t){_inherits(CaretAnnotationElement,t);var r=_createSuper(CaretAnnotationElement);function CaretAnnotationElement(t){_classCallCheck(this,CaretAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(CaretAnnotationElement,[{key:"render",value:function render(){this.container.className="caretAnnotation";this.data.hasPopup||this._createPopup(this.container,null,this.data);return this.container}}]);return CaretAnnotationElement}(u),T=function(t){_inherits(InkAnnotationElement,t);var r=_createSuper(InkAnnotationElement);function InkAnnotationElement(t){var a;_classCallCheck(this,InkAnnotationElement);var o=!!(t.data.hasPopup||t.data.title||t.data.contents);(a=r.call(this,t,o,!0)).containerClassName="inkAnnotation";a.svgElementName="svg:polyline";return a}_createClass(InkAnnotationElement,[{key:"render",value:function render(){this.container.className=this.containerClassName;var t,r=this.data,a=r.rect[2]-r.rect[0],o=r.rect[3]-r.rect[1],i=this.svgFactory.create(a,o),l=_createForOfIteratorHelper(r.inkLists);try{for(l.s();!(t=l.n()).done;){var c,u=t.value,d=[],h=_createForOfIteratorHelper(u);try{for(h.s();!(c=h.n()).done;){var p=c.value,m=p.x-r.rect[0],v=r.rect[3]-p.y;d.push("".concat(m,",").concat(v))}}catch(t){h.e(t)}finally{h.f()}d=d.join(" ");var g=this.svgFactory.createElement(this.svgElementName);g.setAttribute("points",d);g.setAttribute("stroke-width",r.borderStyle.width||1);g.setAttribute("stroke","transparent");g.setAttribute("fill","none");this._createPopup(this.container,g,r);i.appendChild(g)}}catch(t){l.e(t)}finally{l.f()}this.container.append(i);return this.container}}]);return InkAnnotationElement}(u),E=function(t){_inherits(HighlightAnnotationElement,t);var r=_createSuper(HighlightAnnotationElement);function HighlightAnnotationElement(t){_classCallCheck(this,HighlightAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(HighlightAnnotationElement,[{key:"render",value:function render(){this.container.className="highlightAnnotation";this.data.hasPopup||this._createPopup(this.container,null,this.data);return this.container}}]);return HighlightAnnotationElement}(u),O=function(t){_inherits(UnderlineAnnotationElement,t);var r=_createSuper(UnderlineAnnotationElement);function UnderlineAnnotationElement(t){_classCallCheck(this,UnderlineAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(UnderlineAnnotationElement,[{key:"render",value:function render(){this.container.className="underlineAnnotation";this.data.hasPopup||this._createPopup(this.container,null,this.data);return this.container}}]);return UnderlineAnnotationElement}(u),I=function(t){_inherits(SquigglyAnnotationElement,t);var r=_createSuper(SquigglyAnnotationElement);function SquigglyAnnotationElement(t){_classCallCheck(this,SquigglyAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(SquigglyAnnotationElement,[{key:"render",value:function render(){this.container.className="squigglyAnnotation";this.data.hasPopup||this._createPopup(this.container,null,this.data);return this.container}}]);return SquigglyAnnotationElement}(u),D=function(t){_inherits(StrikeOutAnnotationElement,t);var r=_createSuper(StrikeOutAnnotationElement);function StrikeOutAnnotationElement(t){_classCallCheck(this,StrikeOutAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(StrikeOutAnnotationElement,[{key:"render",value:function render(){this.container.className="strikeoutAnnotation";this.data.hasPopup||this._createPopup(this.container,null,this.data);return this.container}}]);return StrikeOutAnnotationElement}(u),L=function(t){_inherits(StampAnnotationElement,t);var r=_createSuper(StampAnnotationElement);function StampAnnotationElement(t){_classCallCheck(this,StampAnnotationElement);var a=!!(t.data.hasPopup||t.data.title||t.data.contents);return r.call(this,t,a,!0)}_createClass(StampAnnotationElement,[{key:"render",value:function render(){this.container.className="stampAnnotation";this.data.hasPopup||this._createPopup(this.container,null,this.data);return this.container}}]);return StampAnnotationElement}(u),M=function(t){_inherits(FileAttachmentAnnotationElement,t);var r=_createSuper(FileAttachmentAnnotationElement);function FileAttachmentAnnotationElement(t){var a;_classCallCheck(this,FileAttachmentAnnotationElement);var l=(a=r.call(this,t,!0)).data.file,c=l.filename,u=l.content;a.filename=(0,o.getFilenameFromUrl)(c);a.content=u;a.linkService.eventBus&&a.linkService.eventBus.dispatch("fileattachmentannotation",{source:_assertThisInitialized(a),id:(0,i.stringToPDFString)(c),filename:c,content:u});return a}_createClass(FileAttachmentAnnotationElement,[{key:"render",value:function render(){this.container.className="fileAttachmentAnnotation";var t=document.createElement("div");t.style.height=this.container.style.height;t.style.width=this.container.style.width;t.addEventListener("dblclick",this._download.bind(this));this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,t,this.data);this.container.appendChild(t);return this.container}},{key:"_download",value:function _download(){this.downloadManager?this.downloadManager.downloadData(this.content,this.filename,""):(0,i.warn)("Download cannot be started due to unavailable download manager")}}]);return FileAttachmentAnnotationElement}(u),W=function(){function AnnotationLayer(){_classCallCheck(this,AnnotationLayer)}_createClass(AnnotationLayer,null,[{key:"render",value:function render(t){var r,a=[],u=[],d=_createForOfIteratorHelper(t.annotations);try{for(d.s();!(r=d.n()).done;){var h=r.value;h&&(h.annotationType!==i.AnnotationType.POPUP?a.push(h):u.push(h))}}catch(t){d.e(t)}finally{d.f()}u.length&&a.push.apply(a,u);for(var p=0,m=a;p<m.length;p++){var v=m[p],g=c.create({data:v,layer:t.div,page:t.page,viewport:t.viewport,linkService:t.linkService,downloadManager:t.downloadManager,imageResourcesPath:t.imageResourcesPath||"",renderInteractiveForms:"boolean"!=typeof t.renderInteractiveForms||t.renderInteractiveForms,svgFactory:new o.DOMSVGFactory,annotationStorage:t.annotationStorage||new l.AnnotationStorage});g.isRenderable&&t.div.appendChild(g.render())}}},{key:"update",value:function update(t){var r,a=_createForOfIteratorHelper(t.annotations);try{for(a.s();!(r=a.n()).done;){var o=r.value,i=t.div.querySelector('[data-annotation-id="'.concat(o.id,'"]'));i&&(i.style.transform="matrix(".concat(t.viewport.transform.join(","),")"))}}catch(t){a.e(t)}finally{a.f()}t.div.removeAttribute("hidden")}}]);return AnnotationLayer}();r.AnnotationLayer=W},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.renderTextLayer=void 0;var o=a(5),i=function renderTextLayerClosure(){var t=/\S/;function appendText(r,a,i){var l=document.createElement("span"),c={angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1};r._textDivs.push(l);if(function isAllWhitespace(r){return!t.test(r)}(a.str)){c.isWhitespace=!0;r._textDivProperties.set(l,c)}else{var u=o.Util.transform(r._viewport.transform,a.transform),d=Math.atan2(u[1],u[0]),h=i[a.fontName];h.vertical&&(d+=Math.PI/2);var p,m,v=Math.sqrt(u[2]*u[2]+u[3]*u[3]),g=v;h.ascent?g=h.ascent*g:h.descent&&(g=(1+h.descent)*g);if(0===d){p=u[4];m=u[5]-g}else{p=u[4]+g*Math.sin(d);m=u[5]-g*Math.cos(d)}l.style.left="".concat(p,"px");l.style.top="".concat(m,"px");l.style.fontSize="".concat(v,"px");l.style.fontFamily=h.fontFamily;l.textContent=a.str;r._fontInspectorEnabled&&(l.dataset.fontName=a.fontName);0!==d&&(c.angle=d*(180/Math.PI));var y=!1;if(a.str.length>1)y=!0;else if(a.transform[0]!==a.transform[3]){var b=Math.abs(a.transform[0]),_=Math.abs(a.transform[3]);b!==_&&Math.max(b,_)/Math.min(b,_)>1.5&&(y=!0)}y&&(h.vertical?c.canvasWidth=a.height*r._viewport.scale:c.canvasWidth=a.width*r._viewport.scale);r._textDivProperties.set(l,c);r._textContentStream&&r._layoutText(l);if(r._enhanceTextSelection){var S=1,C=0;if(0!==d){S=Math.cos(d);C=Math.sin(d)}var A,R,k=(h.vertical?a.height:a.width)*r._viewport.scale,w=v;if(0!==d){A=[S,C,-C,S,p,m];R=o.Util.getAxialAlignedBoundingBox([0,0,k,w],A)}else R=[p,m,p+k,m+w];r._bounds.push({left:R[0],top:R[1],right:R[2],bottom:R[3],div:l,size:[k,w],m:A})}}}function render(t){if(!t._canceled){var r=t._textDivs,a=t._capability,o=r.length;if(o>1e5){t._renderingDone=!0;a.resolve()}else{if(!t._textContentStream)for(var i=0;i<o;i++)t._layoutText(r[i]);t._renderingDone=!0;a.resolve()}}}function findPositiveMin(t,r,a){for(var o=0,i=0;i<a;i++){var l=t[r++];l>0&&(o=o?Math.min(l,o):l)}return o}function expand(t){for(var r=t._bounds,a=t._viewport,i=function expandBounds(t,r,a){var o=a.map((function(t,r){return{x1:t.left,y1:t.top,x2:t.right,y2:t.bottom,index:r,x1New:void 0,x2New:void 0}}));expandBoundsLTR(t,o);var i=new Array(a.length);o.forEach((function(t){var r=t.index;i[r]={left:t.x1New,top:0,right:t.x2New,bottom:0}}));a.map((function(r,a){var l=i[a],c=o[a];c.x1=r.top;c.y1=t-l.right;c.x2=r.bottom;c.y2=t-l.left;c.index=a;c.x1New=void 0;c.x2New=void 0}));expandBoundsLTR(r,o);o.forEach((function(t){var r=t.index;i[r].top=t.x1New;i[r].bottom=t.x2New}));return i}(a.width,a.height,r),l=0;l<i.length;l++){var c=r[l].div,u=t._textDivProperties.get(c);if(0!==u.angle){var d=i[l],h=r[l],p=h.m,m=p[0],v=p[1],g=[[0,0],[0,h.size[1]],[h.size[0],0],h.size],y=new Float64Array(64);g.forEach((function(t,r){var a=o.Util.applyTransform(t,p);y[r+0]=m&&(d.left-a[0])/m;y[r+4]=v&&(d.top-a[1])/v;y[r+8]=m&&(d.right-a[0])/m;y[r+12]=v&&(d.bottom-a[1])/v;y[r+16]=v&&(d.left-a[0])/-v;y[r+20]=m&&(d.top-a[1])/m;y[r+24]=v&&(d.right-a[0])/-v;y[r+28]=m&&(d.bottom-a[1])/m;y[r+32]=m&&(d.left-a[0])/-m;y[r+36]=v&&(d.top-a[1])/-v;y[r+40]=m&&(d.right-a[0])/-m;y[r+44]=v&&(d.bottom-a[1])/-v;y[r+48]=v&&(d.left-a[0])/v;y[r+52]=m&&(d.top-a[1])/-m;y[r+56]=v&&(d.right-a[0])/v;y[r+60]=m&&(d.bottom-a[1])/-m}));var b=1+Math.min(Math.abs(m),Math.abs(v));u.paddingLeft=findPositiveMin(y,32,16)/b;u.paddingTop=findPositiveMin(y,48,16)/b;u.paddingRight=findPositiveMin(y,0,16)/b;u.paddingBottom=findPositiveMin(y,16,16)/b;t._textDivProperties.set(c,u)}else{u.paddingLeft=r[l].left-i[l].left;u.paddingTop=r[l].top-i[l].top;u.paddingRight=i[l].right-r[l].right;u.paddingBottom=i[l].bottom-r[l].bottom;t._textDivProperties.set(c,u)}}}function expandBoundsLTR(t,r){r.sort((function(t,r){return t.x1-r.x1||t.index-r.index}));var a=[{start:-1/0,end:1/0,boundary:{x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0}}];r.forEach((function(t){for(var r=0;r<a.length&&a[r].end<=t.y1;)r++;for(var o,i,l=a.length-1;l>=0&&a[l].start>=t.y2;)l--;var c,u,d=-1/0;for(c=r;c<=l;c++){var h;(h=(i=(o=a[c]).boundary).x2>t.x1?i.index>t.index?i.x1New:t.x1:void 0===i.x2New?(i.x2+t.x1)/2:i.x2New)>d&&(d=h)}t.x1New=d;for(c=r;c<=l;c++)void 0===(i=(o=a[c]).boundary).x2New?i.x2>t.x1?i.index>t.index&&(i.x2New=i.x2):i.x2New=d:i.x2New>d&&(i.x2New=Math.max(d,i.x2));var p=[],m=null;for(c=r;c<=l;c++){var v=(i=(o=a[c]).boundary).x2>t.x2?i:t;if(m===v)p[p.length-1].end=o.end;else{p.push({start:o.start,end:o.end,boundary:v});m=v}}if(a[r].start<t.y1){p[0].start=t.y1;p.unshift({start:a[r].start,end:t.y1,boundary:a[r].boundary})}if(t.y2<a[l].end){p[p.length-1].end=t.y2;p.push({start:t.y2,end:a[l].end,boundary:a[l].boundary})}for(c=r;c<=l;c++)if(void 0===(i=(o=a[c]).boundary).x2New){var g=!1;for(u=r-1;!g&&u>=0&&a[u].start>=i.y1;u--)g=a[u].boundary===i;for(u=l+1;!g&&u<a.length&&a[u].end<=i.y2;u++)g=a[u].boundary===i;for(u=0;!g&&u<p.length;u++)g=p[u].boundary===i;g||(i.x2New=d)}Array.prototype.splice.apply(a,[r,l-r+1].concat(p))}));a.forEach((function(r){var a=r.boundary;void 0===a.x2New&&(a.x2New=Math.max(t,a.x2))}))}function TextLayerRenderTask(t){var r=this,a=t.textContent,i=t.textContentStream,l=t.container,c=t.viewport,u=t.textDivs,d=t.textContentItemsStr,h=t.enhanceTextSelection;this._textContent=a;this._textContentStream=i;this._container=l;this._document=l.ownerDocument;this._viewport=c;this._textDivs=u||[];this._textContentItemsStr=d||[];this._enhanceTextSelection=!!h;this._fontInspectorEnabled=!(!globalThis.FontInspector||!globalThis.FontInspector.enabled);this._reader=null;this._layoutTextLastFontSize=null;this._layoutTextLastFontFamily=null;this._layoutTextCtx=null;this._textDivProperties=new WeakMap;this._renderingDone=!1;this._canceled=!1;this._capability=(0,o.createPromiseCapability)();this._renderTimer=null;this._bounds=[];this._capability.promise.finally((function(){if(r._layoutTextCtx){r._layoutTextCtx.canvas.width=0;r._layoutTextCtx.canvas.height=0;r._layoutTextCtx=null}})).catch((function(){}))}TextLayerRenderTask.prototype={get promise(){return this._capability.promise},cancel:function TextLayer_cancel(){this._canceled=!0;if(this._reader){this._reader.cancel(new o.AbortException("TextLayer task cancelled."));this._reader=null}if(null!==this._renderTimer){clearTimeout(this._renderTimer);this._renderTimer=null}this._capability.reject(new Error("TextLayer task cancelled."))},_processItems:function _processItems(t,r){for(var a=0,o=t.length;a<o;a++){this._textContentItemsStr.push(t[a].str);appendText(this,t[a],r)}},_layoutText:function _layoutText(t){var r=this._textDivProperties.get(t);if(!r.isWhitespace){var a="";if(0!==r.canvasWidth){var o=t.style,i=o.fontSize,l=o.fontFamily;if(i!==this._layoutTextLastFontSize||l!==this._layoutTextLastFontFamily){this._layoutTextCtx.font="".concat(i," ").concat(l);this._layoutTextLastFontSize=i;this._layoutTextLastFontFamily=l}var c=this._layoutTextCtx.measureText(t.textContent).width;if(c>0){r.scale=r.canvasWidth/c;a="scaleX(".concat(r.scale,")")}}0!==r.angle&&(a="rotate(".concat(r.angle,"deg) ").concat(a));if(a.length>0){this._enhanceTextSelection&&(r.originalTransform=a);t.style.transform=a}this._textDivProperties.set(t,r);this._container.appendChild(t)}},_render:function TextLayer_render(t){var r=this,a=(0,o.createPromiseCapability)(),i=Object.create(null),l=this._document.createElement("canvas");l.mozOpaque=!0;this._layoutTextCtx=l.getContext("2d",{alpha:!1});if(this._textContent){var c=this._textContent.items,u=this._textContent.styles;this._processItems(c,u);a.resolve()}else{if(!this._textContentStream)throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');this._reader=this._textContentStream.getReader();!function pump(){r._reader.read().then((function(t){var o=t.value;if(t.done)a.resolve();else{Object.assign(i,o.styles);r._processItems(o.items,i);pump()}}),a.reject)}()}a.promise.then((function(){i=null;t?r._renderTimer=setTimeout((function(){render(r);r._renderTimer=null}),t):render(r)}),this._capability.reject)},expandTextDivs:function TextLayer_expandTextDivs(t){if(this._enhanceTextSelection&&this._renderingDone){if(null!==this._bounds){expand(this);this._bounds=null}for(var r=[],a=[],o=0,i=this._textDivs.length;o<i;o++){var l=this._textDivs[o],c=this._textDivProperties.get(l);if(!c.isWhitespace)if(t){r.length=0;a.length=0;c.originalTransform&&r.push(c.originalTransform);if(c.paddingTop>0){a.push("".concat(c.paddingTop,"px"));r.push("translateY(".concat(-c.paddingTop,"px)"))}else a.push(0);c.paddingRight>0?a.push("".concat(c.paddingRight/c.scale,"px")):a.push(0);c.paddingBottom>0?a.push("".concat(c.paddingBottom,"px")):a.push(0);if(c.paddingLeft>0){a.push("".concat(c.paddingLeft/c.scale,"px"));r.push("translateX(".concat(-c.paddingLeft/c.scale,"px)"))}else a.push(0);l.style.padding=a.join(" ");r.length&&(l.style.transform=r.join(" "))}else{l.style.padding=null;l.style.transform=c.originalTransform}}}}};return function renderTextLayer(t){var r=new TextLayerRenderTask({textContent:t.textContent,textContentStream:t.textContentStream,container:t.container,viewport:t.viewport,textDivs:t.textDivs,textContentItemsStr:t.textContentItemsStr,enhanceTextSelection:t.enhanceTextSelection});r._render(t.timeout);return r}}();r.renderTextLayer=i},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.SVGGraphics=void 0;var o=a(5),i=a(1),l=a(7);function _toConsumableArray(t){return function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}(t)||function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||_unsupportedIterableToArray(t)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(t,r){return function _arrayWithHoles(t){if(Array.isArray(t))return t}(t)||function _iterableToArrayLimit(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],o=!0,i=!1,l=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){a.push(c.value);if(r&&a.length===r)break}}catch(t){i=!0;l=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return a}(t,r)||_unsupportedIterableToArray(t,r)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _createForOfIteratorHelper(t,r){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||r&&t&&"number"==typeof t.length){a&&(t=a);var o=0,i=function F(){};return{s:i,n:function n(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function s(){a=t[Symbol.iterator]()},n:function n(){var t=a.next();c=t.done;return t},e:function e(t){u=!0;l=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw l}}}}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);return"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(t,r):void 0}}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}var c=function SVGGraphics(){throw new Error("Not implemented: SVGGraphics")};r.SVGGraphics=c;var u=function pf(t){if(Number.isInteger(t))return t.toString();var r=t.toFixed(10),a=r.length-1;if("0"!==r[a])return r;do{a--}while("0"===r[a]);return r.substring(0,"."===r[a]?a:a+1)},d=function pm(t){if(0===t[4]&&0===t[5]){if(0===t[1]&&0===t[2])return 1===t[0]&&1===t[3]?"":"scale(".concat(u(t[0])," ").concat(u(t[3]),")");if(t[0]===t[3]&&t[1]===-t[2]){var r=180*Math.acos(t[0])/Math.PI;return"rotate(".concat(u(r),")")}}else if(1===t[0]&&0===t[1]&&0===t[2]&&1===t[3])return"translate(".concat(u(t[4])," ").concat(u(t[5]),")");return"matrix(".concat(u(t[0])," ").concat(u(t[1])," ").concat(u(t[2])," ").concat(u(t[3])," ").concat(u(t[4])," ")+"".concat(u(t[5]),")")},h={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},p=["butt","round","square"],m=["miter","round","bevel"],v=function(){for(var t=new Uint8Array([137,80,78,71,13,10,26,10]),r=new Int32Array(256),a=0;a<256;a++){for(var i=a,c=0;c<8;c++)i=1&i?3988292384^i>>1&2147483647:i>>1&2147483647;r[a]=i}function writePngChunk(t,a,o,i){var l=i,c=a.length;o[l]=c>>24&255;o[l+1]=c>>16&255;o[l+2]=c>>8&255;o[l+3]=255&c;o[l+=4]=255&t.charCodeAt(0);o[l+1]=255&t.charCodeAt(1);o[l+2]=255&t.charCodeAt(2);o[l+3]=255&t.charCodeAt(3);l+=4;o.set(a,l);var u=function crc32(t,a,o){for(var i=-1,l=a;l<o;l++){var c=255&(i^t[l]);i=i>>>8^r[c]}return-1^i}(o,i+4,l+=a.length);o[l]=u>>24&255;o[l+1]=u>>16&255;o[l+2]=u>>8&255;o[l+3]=255&u}function deflateSyncUncompressed(t){var r=t.length,a=Math.ceil(r/65535),o=new Uint8Array(2+r+5*a+4),i=0;o[i++]=120;o[i++]=156;for(var l=0;r>65535;){o[i++]=0;o[i++]=255;o[i++]=255;o[i++]=0;o[i++]=0;o.set(t.subarray(l,l+65535),i);i+=65535;l+=65535;r-=65535}o[i++]=1;o[i++]=255&r;o[i++]=r>>8&255;o[i++]=255&~r;o[i++]=(65535&~r)>>8&255;o.set(t.subarray(l),i);i+=t.length-l;var c=function adler32(t,r,a){for(var o=1,i=0,l=r;l<a;++l)i=(i+(o=(o+(255&t[l]))%65521))%65521;return i<<16|o}(t,0,t.length);o[i++]=c>>24&255;o[i++]=c>>16&255;o[i++]=c>>8&255;o[i++]=255&c;return o}function encode(r,a,i,c){var u,d,h,p=r.width,m=r.height,v=r.data;switch(a){case o.ImageKind.GRAYSCALE_1BPP:d=0;u=1;h=p+7>>3;break;case o.ImageKind.RGB_24BPP:d=2;u=8;h=3*p;break;case o.ImageKind.RGBA_32BPP:d=6;u=8;h=4*p;break;default:throw new Error("invalid format")}for(var g=new Uint8Array((1+h)*m),y=0,b=0,_=0;_<m;++_){g[y++]=0;g.set(v.subarray(b,b+h),y);b+=h;y+=h}if(a===o.ImageKind.GRAYSCALE_1BPP&&c){y=0;for(var S=0;S<m;S++){y++;for(var C=0;C<h;C++)g[y++]^=255}}var A=new Uint8Array([p>>24&255,p>>16&255,p>>8&255,255&p,m>>24&255,m>>16&255,m>>8&255,255&m,u,d,0,0,0]),R=function deflateSync(t){if(!l.isNodeJS)return deflateSyncUncompressed(t);try{var r;r=parseInt(process.versions.node)>=8?t:Buffer.from(t);var a=require("zlib").deflateSync(r,{level:9});return a instanceof Uint8Array?a:new Uint8Array(a)}catch(t){(0,o.warn)("Not compressing PNG because zlib.deflateSync is unavailable: "+t)}return deflateSyncUncompressed(t)}(g),k=t.length+36+A.length+R.length,w=new Uint8Array(k),P=0;w.set(t,P);writePngChunk("IHDR",A,w,P+=t.length);writePngChunk("IDATA",R,w,P+=12+A.length);P+=12+R.length;writePngChunk("IEND",new Uint8Array(0),w,P);return(0,o.createObjectURL)(w,"image/png",i)}return function convertImgDataToPng(t,r,a){return encode(t,void 0===t.kind?o.ImageKind.GRAYSCALE_1BPP:t.kind,r,a)}}(),g=function(){function SVGExtraState(){_classCallCheck(this,SVGExtraState);this.fontSizeScale=1;this.fontWeight=h.fontWeight;this.fontSize=0;this.textMatrix=o.IDENTITY_MATRIX;this.fontMatrix=o.FONT_IDENTITY_MATRIX;this.leading=0;this.textRenderingMode=o.TextRenderingMode.FILL;this.textMatrixScale=1;this.x=0;this.y=0;this.lineX=0;this.lineY=0;this.charSpacing=0;this.wordSpacing=0;this.textHScale=1;this.textRise=0;this.fillColor=h.fillColor;this.strokeColor="#000000";this.fillAlpha=1;this.strokeAlpha=1;this.lineWidth=1;this.lineJoin="";this.lineCap="";this.miterLimit=0;this.dashArray=[];this.dashPhase=0;this.dependencies=[];this.activeClipUrl=null;this.clipGroup=null;this.maskId=""}_createClass(SVGExtraState,[{key:"clone",value:function clone(){return Object.create(this)}},{key:"setCurrentPoint",value:function setCurrentPoint(t,r){this.x=t;this.y=r}}]);return SVGExtraState}(),y=0,b=0,_=0;r.SVGGraphics=c=function(){function SVGGraphics(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_classCallCheck(this,SVGGraphics);this.svgFactory=new i.DOMSVGFactory;this.current=new g;this.transformMatrix=o.IDENTITY_MATRIX;this.transformStack=[];this.extraStack=[];this.commonObjs=t;this.objs=r;this.pendingClip=null;this.pendingEOFill=!1;this.embedFonts=!1;this.embeddedFonts=Object.create(null);this.cssStyle=null;this.forceDataSchema=!!a;this._operatorIdMapping=[];for(var l in o.OPS)this._operatorIdMapping[o.OPS[l]]=l}_createClass(SVGGraphics,[{key:"save",value:function save(){this.transformStack.push(this.transformMatrix);var t=this.current;this.extraStack.push(t);this.current=t.clone()}},{key:"restore",value:function restore(){this.transformMatrix=this.transformStack.pop();this.current=this.extraStack.pop();this.pendingClip=null;this.tgrp=null}},{key:"group",value:function group(t){this.save();this.executeOpTree(t);this.restore()}},{key:"loadDependencies",value:function loadDependencies(t){for(var r=this,a=t.fnArray,i=t.argsArray,l=0,c=a.length;l<c;l++)if(a[l]===o.OPS.dependency){var u,d=_createForOfIteratorHelper(i[l]);try{var h=function _loop(){var t=u.value,a=t.startsWith("g_")?r.commonObjs:r.objs,o=new Promise((function(r){a.get(t,r)}));r.current.dependencies.push(o)};for(d.s();!(u=d.n()).done;)h()}catch(t){d.e(t)}finally{d.f()}}return Promise.all(this.current.dependencies)}},{key:"transform",value:function transform(t,r,a,i,l,c){var u=[t,r,a,i,l,c];this.transformMatrix=o.Util.transform(this.transformMatrix,u);this.tgrp=null}},{key:"getSVG",value:function getSVG(t,r){var a=this;this.viewport=r;var i=this._initialize(r);return this.loadDependencies(t).then((function(){a.transformMatrix=o.IDENTITY_MATRIX;a.executeOpTree(a.convertOpList(t));return i}))}},{key:"convertOpList",value:function convertOpList(t){for(var r=this._operatorIdMapping,a=t.argsArray,o=t.fnArray,i=[],l=0,c=o.length;l<c;l++){var u=o[l];i.push({fnId:u,fn:r[u],args:a[l]})}return function opListToTree(t){var r,a=[],o=[],i=_createForOfIteratorHelper(t);try{for(i.s();!(r=i.n()).done;){var l=r.value;if("save"!==l.fn)"restore"===l.fn?a=o.pop():a.push(l);else{a.push({fnId:92,fn:"group",items:[]});o.push(a);a=a[a.length-1].items}}}catch(t){i.e(t)}finally{i.f()}return a}(i)}},{key:"executeOpTree",value:function executeOpTree(t){var r,a=_createForOfIteratorHelper(t);try{for(a.s();!(r=a.n()).done;){var i=r.value,l=i.fn,c=i.fnId,u=i.args;switch(0|c){case o.OPS.beginText:this.beginText();break;case o.OPS.dependency:break;case o.OPS.setLeading:this.setLeading(u);break;case o.OPS.setLeadingMoveText:this.setLeadingMoveText(u[0],u[1]);break;case o.OPS.setFont:this.setFont(u);break;case o.OPS.showText:case o.OPS.showSpacedText:this.showText(u[0]);break;case o.OPS.endText:this.endText();break;case o.OPS.moveText:this.moveText(u[0],u[1]);break;case o.OPS.setCharSpacing:this.setCharSpacing(u[0]);break;case o.OPS.setWordSpacing:this.setWordSpacing(u[0]);break;case o.OPS.setHScale:this.setHScale(u[0]);break;case o.OPS.setTextMatrix:this.setTextMatrix(u[0],u[1],u[2],u[3],u[4],u[5]);break;case o.OPS.setTextRise:this.setTextRise(u[0]);break;case o.OPS.setTextRenderingMode:this.setTextRenderingMode(u[0]);break;case o.OPS.setLineWidth:this.setLineWidth(u[0]);break;case o.OPS.setLineJoin:this.setLineJoin(u[0]);break;case o.OPS.setLineCap:this.setLineCap(u[0]);break;case o.OPS.setMiterLimit:this.setMiterLimit(u[0]);break;case o.OPS.setFillRGBColor:this.setFillRGBColor(u[0],u[1],u[2]);break;case o.OPS.setStrokeRGBColor:this.setStrokeRGBColor(u[0],u[1],u[2]);break;case o.OPS.setStrokeColorN:this.setStrokeColorN(u);break;case o.OPS.setFillColorN:this.setFillColorN(u);break;case o.OPS.shadingFill:this.shadingFill(u[0]);break;case o.OPS.setDash:this.setDash(u[0],u[1]);break;case o.OPS.setRenderingIntent:this.setRenderingIntent(u[0]);break;case o.OPS.setFlatness:this.setFlatness(u[0]);break;case o.OPS.setGState:this.setGState(u[0]);break;case o.OPS.fill:this.fill();break;case o.OPS.eoFill:this.eoFill();break;case o.OPS.stroke:this.stroke();break;case o.OPS.fillStroke:this.fillStroke();break;case o.OPS.eoFillStroke:this.eoFillStroke();break;case o.OPS.clip:this.clip("nonzero");break;case o.OPS.eoClip:this.clip("evenodd");break;case o.OPS.paintSolidColorImageMask:this.paintSolidColorImageMask();break;case o.OPS.paintImageXObject:this.paintImageXObject(u[0]);break;case o.OPS.paintInlineImageXObject:this.paintInlineImageXObject(u[0]);break;case o.OPS.paintImageMaskXObject:this.paintImageMaskXObject(u[0]);break;case o.OPS.paintFormXObjectBegin:this.paintFormXObjectBegin(u[0],u[1]);break;case o.OPS.paintFormXObjectEnd:this.paintFormXObjectEnd();break;case o.OPS.closePath:this.closePath();break;case o.OPS.closeStroke:this.closeStroke();break;case o.OPS.closeFillStroke:this.closeFillStroke();break;case o.OPS.closeEOFillStroke:this.closeEOFillStroke();break;case o.OPS.nextLine:this.nextLine();break;case o.OPS.transform:this.transform(u[0],u[1],u[2],u[3],u[4],u[5]);break;case o.OPS.constructPath:this.constructPath(u[0],u[1]);break;case o.OPS.endPath:this.endPath();break;case 92:this.group(i.items);break;default:(0,o.warn)("Unimplemented operator ".concat(l))}}}catch(t){a.e(t)}finally{a.f()}}},{key:"setWordSpacing",value:function setWordSpacing(t){this.current.wordSpacing=t}},{key:"setCharSpacing",value:function setCharSpacing(t){this.current.charSpacing=t}},{key:"nextLine",value:function nextLine(){this.moveText(0,this.current.leading)}},{key:"setTextMatrix",value:function setTextMatrix(t,r,a,o,i,l){var c=this.current;c.textMatrix=c.lineMatrix=[t,r,a,o,i,l];c.textMatrixScale=Math.sqrt(t*t+r*r);c.x=c.lineX=0;c.y=c.lineY=0;c.xcoords=[];c.ycoords=[];c.tspan=this.svgFactory.createElement("svg:tspan");c.tspan.setAttributeNS(null,"font-family",c.fontFamily);c.tspan.setAttributeNS(null,"font-size","".concat(u(c.fontSize),"px"));c.tspan.setAttributeNS(null,"y",u(-c.y));c.txtElement=this.svgFactory.createElement("svg:text");c.txtElement.appendChild(c.tspan)}},{key:"beginText",value:function beginText(){var t=this.current;t.x=t.lineX=0;t.y=t.lineY=0;t.textMatrix=o.IDENTITY_MATRIX;t.lineMatrix=o.IDENTITY_MATRIX;t.textMatrixScale=1;t.tspan=this.svgFactory.createElement("svg:tspan");t.txtElement=this.svgFactory.createElement("svg:text");t.txtgrp=this.svgFactory.createElement("svg:g");t.xcoords=[];t.ycoords=[]}},{key:"moveText",value:function moveText(t,r){var a=this.current;a.x=a.lineX+=t;a.y=a.lineY+=r;a.xcoords=[];a.ycoords=[];a.tspan=this.svgFactory.createElement("svg:tspan");a.tspan.setAttributeNS(null,"font-family",a.fontFamily);a.tspan.setAttributeNS(null,"font-size","".concat(u(a.fontSize),"px"));a.tspan.setAttributeNS(null,"y",u(-a.y))}},{key:"showText",value:function showText(t){var r=this.current,a=r.font,i=r.fontSize;if(0!==i){var l,c=r.fontSizeScale,p=r.charSpacing,m=r.wordSpacing,v=r.fontDirection,g=r.textHScale*v,y=a.vertical,b=y?1:-1,_=a.defaultVMetrics,S=i*r.fontMatrix[0],C=0,A=_createForOfIteratorHelper(t);try{for(A.s();!(l=A.n()).done;){var R=l.value;if(null!==R)if((0,o.isNum)(R))C+=b*R*i/1e3;else{var k=(R.isSpace?m:0)+p,w=R.fontChar,P=void 0,x=void 0,T=R.width;if(y){var E=void 0,O=R.vmetric||_;E=-(E=R.vmetric?O[1]:.5*T)*S;var I=O[2]*S;T=O?-O[0]:T;P=E/c;x=(C+I)/c}else{P=C/c;x=0}if(R.isInFont||a.missingFile){r.xcoords.push(r.x+P);y&&r.ycoords.push(-r.y+x);r.tspan.textContent+=w}C+=y?T*S-k*v:T*S+k*v}else C+=v*m}}catch(t){A.e(t)}finally{A.f()}r.tspan.setAttributeNS(null,"x",r.xcoords.map(u).join(" "));y?r.tspan.setAttributeNS(null,"y",r.ycoords.map(u).join(" ")):r.tspan.setAttributeNS(null,"y",u(-r.y));y?r.y-=C:r.x+=C*g;r.tspan.setAttributeNS(null,"font-family",r.fontFamily);r.tspan.setAttributeNS(null,"font-size","".concat(u(r.fontSize),"px"));r.fontStyle!==h.fontStyle&&r.tspan.setAttributeNS(null,"font-style",r.fontStyle);r.fontWeight!==h.fontWeight&&r.tspan.setAttributeNS(null,"font-weight",r.fontWeight);var D=r.textRenderingMode&o.TextRenderingMode.FILL_STROKE_MASK;if(D===o.TextRenderingMode.FILL||D===o.TextRenderingMode.FILL_STROKE){r.fillColor!==h.fillColor&&r.tspan.setAttributeNS(null,"fill",r.fillColor);r.fillAlpha<1&&r.tspan.setAttributeNS(null,"fill-opacity",r.fillAlpha)}else r.textRenderingMode===o.TextRenderingMode.ADD_TO_PATH?r.tspan.setAttributeNS(null,"fill","transparent"):r.tspan.setAttributeNS(null,"fill","none");if(D===o.TextRenderingMode.STROKE||D===o.TextRenderingMode.FILL_STROKE){var L=1/(r.textMatrixScale||1);this._setStrokeAttributes(r.tspan,L)}var M=r.textMatrix;0!==r.textRise&&((M=M.slice())[5]+=r.textRise);r.txtElement.setAttributeNS(null,"transform","".concat(d(M)," scale(").concat(u(g),", -1)"));r.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve");r.txtElement.appendChild(r.tspan);r.txtgrp.appendChild(r.txtElement);this._ensureTransformGroup().appendChild(r.txtElement)}}},{key:"setLeadingMoveText",value:function setLeadingMoveText(t,r){this.setLeading(-r);this.moveText(t,r)}},{key:"addFontStyle",value:function addFontStyle(t){if(!t.data)throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');if(!this.cssStyle){this.cssStyle=this.svgFactory.createElement("svg:style");this.cssStyle.setAttributeNS(null,"type","text/css");this.defs.appendChild(this.cssStyle)}var r=(0,o.createObjectURL)(t.data,t.mimetype,this.forceDataSchema);this.cssStyle.textContent+='@font-face { font-family: "'.concat(t.loadedName,'";')+" src: url(".concat(r,"); }\n")}},{key:"setFont",value:function setFont(t){var r=this.current,a=this.commonObjs.get(t[0]),i=t[1];r.font=a;if(this.embedFonts&&!a.missingFile&&!this.embeddedFonts[a.loadedName]){this.addFontStyle(a);this.embeddedFonts[a.loadedName]=a}r.fontMatrix=a.fontMatrix?a.fontMatrix:o.FONT_IDENTITY_MATRIX;var l="normal";a.black?l="900":a.bold&&(l="bold");var c=a.italic?"italic":"normal";if(i<0){i=-i;r.fontDirection=-1}else r.fontDirection=1;r.fontSize=i;r.fontFamily=a.loadedName;r.fontWeight=l;r.fontStyle=c;r.tspan=this.svgFactory.createElement("svg:tspan");r.tspan.setAttributeNS(null,"y",u(-r.y));r.xcoords=[];r.ycoords=[]}},{key:"endText",value:function endText(){var t=this.current;if(t.textRenderingMode&o.TextRenderingMode.ADD_TO_PATH_FLAG&&t.txtElement&&t.txtElement.hasChildNodes()){t.element=t.txtElement;this.clip("nonzero");this.endPath()}}},{key:"setLineWidth",value:function setLineWidth(t){t>0&&(this.current.lineWidth=t)}},{key:"setLineCap",value:function setLineCap(t){this.current.lineCap=p[t]}},{key:"setLineJoin",value:function setLineJoin(t){this.current.lineJoin=m[t]}},{key:"setMiterLimit",value:function setMiterLimit(t){this.current.miterLimit=t}},{key:"setStrokeAlpha",value:function setStrokeAlpha(t){this.current.strokeAlpha=t}},{key:"setStrokeRGBColor",value:function setStrokeRGBColor(t,r,a){this.current.strokeColor=o.Util.makeCssRgb(t,r,a)}},{key:"setFillAlpha",value:function setFillAlpha(t){this.current.fillAlpha=t}},{key:"setFillRGBColor",value:function setFillRGBColor(t,r,a){this.current.fillColor=o.Util.makeCssRgb(t,r,a);this.current.tspan=this.svgFactory.createElement("svg:tspan");this.current.xcoords=[];this.current.ycoords=[]}},{key:"setStrokeColorN",value:function setStrokeColorN(t){this.current.strokeColor=this._makeColorN_Pattern(t)}},{key:"setFillColorN",value:function setFillColorN(t){this.current.fillColor=this._makeColorN_Pattern(t)}},{key:"shadingFill",value:function shadingFill(t){var r=this.viewport.width,a=this.viewport.height,i=o.Util.inverseTransform(this.transformMatrix),l=o.Util.applyTransform([0,0],i),c=o.Util.applyTransform([0,a],i),u=o.Util.applyTransform([r,0],i),d=o.Util.applyTransform([r,a],i),h=Math.min(l[0],c[0],u[0],d[0]),p=Math.min(l[1],c[1],u[1],d[1]),m=Math.max(l[0],c[0],u[0],d[0]),v=Math.max(l[1],c[1],u[1],d[1]),g=this.svgFactory.createElement("svg:rect");g.setAttributeNS(null,"x",h);g.setAttributeNS(null,"y",p);g.setAttributeNS(null,"width",m-h);g.setAttributeNS(null,"height",v-p);g.setAttributeNS(null,"fill",this._makeShadingPattern(t));this.current.fillAlpha<1&&g.setAttributeNS(null,"fill-opacity",this.current.fillAlpha);this._ensureTransformGroup().appendChild(g)}},{key:"_makeColorN_Pattern",value:function _makeColorN_Pattern(t){return"TilingPattern"===t[0]?this._makeTilingPattern(t):this._makeShadingPattern(t)}},{key:"_makeTilingPattern",value:function _makeTilingPattern(t){var r=t[1],a=t[2],i=t[3]||o.IDENTITY_MATRIX,l=_slicedToArray(t[4],4),c=l[0],u=l[1],d=l[2],h=l[3],p=t[5],m=t[6],v=t[7],g="shading".concat(_++),y=_slicedToArray(o.Util.applyTransform([c,u],i),2),b=y[0],S=y[1],C=_slicedToArray(o.Util.applyTransform([d,h],i),2),A=C[0],R=C[1],k=_slicedToArray(o.Util.singularValueDecompose2dScale(i),2),w=p*k[0],P=m*k[1],x=this.svgFactory.createElement("svg:pattern");x.setAttributeNS(null,"id",g);x.setAttributeNS(null,"patternUnits","userSpaceOnUse");x.setAttributeNS(null,"width",w);x.setAttributeNS(null,"height",P);x.setAttributeNS(null,"x","".concat(b));x.setAttributeNS(null,"y","".concat(S));var T=this.svg,E=this.transformMatrix,O=this.current.fillColor,I=this.current.strokeColor,D=this.svgFactory.create(A-b,R-S);this.svg=D;this.transformMatrix=i;if(2===v){var L=o.Util.makeCssRgb.apply(o.Util,_toConsumableArray(r));this.current.fillColor=L;this.current.strokeColor=L}this.executeOpTree(this.convertOpList(a));this.svg=T;this.transformMatrix=E;this.current.fillColor=O;this.current.strokeColor=I;x.appendChild(D.childNodes[0]);this.defs.appendChild(x);return"url(#".concat(g,")")}},{key:"_makeShadingPattern",value:function _makeShadingPattern(t){switch(t[0]){case"RadialAxial":var r,a="shading".concat(_++),i=t[3];switch(t[1]){case"axial":var l=t[4],c=t[5];(r=this.svgFactory.createElement("svg:linearGradient")).setAttributeNS(null,"id",a);r.setAttributeNS(null,"gradientUnits","userSpaceOnUse");r.setAttributeNS(null,"x1",l[0]);r.setAttributeNS(null,"y1",l[1]);r.setAttributeNS(null,"x2",c[0]);r.setAttributeNS(null,"y2",c[1]);break;case"radial":var u=t[4],d=t[5],h=t[6],p=t[7];(r=this.svgFactory.createElement("svg:radialGradient")).setAttributeNS(null,"id",a);r.setAttributeNS(null,"gradientUnits","userSpaceOnUse");r.setAttributeNS(null,"cx",d[0]);r.setAttributeNS(null,"cy",d[1]);r.setAttributeNS(null,"r",p);r.setAttributeNS(null,"fx",u[0]);r.setAttributeNS(null,"fy",u[1]);r.setAttributeNS(null,"fr",h);break;default:throw new Error("Unknown RadialAxial type: ".concat(t[1]))}var m,v=_createForOfIteratorHelper(i);try{for(v.s();!(m=v.n()).done;){var g=m.value,y=this.svgFactory.createElement("svg:stop");y.setAttributeNS(null,"offset",g[0]);y.setAttributeNS(null,"stop-color",g[1]);r.appendChild(y)}}catch(t){v.e(t)}finally{v.f()}this.defs.appendChild(r);return"url(#".concat(a,")");case"Mesh":(0,o.warn)("Unimplemented pattern Mesh");return null;case"Dummy":return"hotpink";default:throw new Error("Unknown IR type: ".concat(t[0]))}}},{key:"setDash",value:function setDash(t,r){this.current.dashArray=t;this.current.dashPhase=r}},{key:"constructPath",value:function constructPath(t,r){var a,i=this.current,l=i.x,c=i.y,d=[],h=0,p=_createForOfIteratorHelper(t);try{for(p.s();!(a=p.n()).done;){switch(0|a.value){case o.OPS.rectangle:l=r[h++];c=r[h++];var m=r[h++],v=r[h++],g=l+m,y=c+v;d.push("M",u(l),u(c),"L",u(g),u(c),"L",u(g),u(y),"L",u(l),u(y),"Z");break;case o.OPS.moveTo:l=r[h++];c=r[h++];d.push("M",u(l),u(c));break;case o.OPS.lineTo:l=r[h++];c=r[h++];d.push("L",u(l),u(c));break;case o.OPS.curveTo:l=r[h+4];c=r[h+5];d.push("C",u(r[h]),u(r[h+1]),u(r[h+2]),u(r[h+3]),u(l),u(c));h+=6;break;case o.OPS.curveTo2:d.push("C",u(l),u(c),u(r[h]),u(r[h+1]),u(r[h+2]),u(r[h+3]));l=r[h+2];c=r[h+3];h+=4;break;case o.OPS.curveTo3:l=r[h+2];c=r[h+3];d.push("C",u(r[h]),u(r[h+1]),u(l),u(c),u(l),u(c));h+=4;break;case o.OPS.closePath:d.push("Z")}}}catch(t){p.e(t)}finally{p.f()}d=d.join(" ");if(i.path&&t.length>0&&t[0]!==o.OPS.rectangle&&t[0]!==o.OPS.moveTo)d=i.path.getAttributeNS(null,"d")+d;else{i.path=this.svgFactory.createElement("svg:path");this._ensureTransformGroup().appendChild(i.path)}i.path.setAttributeNS(null,"d",d);i.path.setAttributeNS(null,"fill","none");i.element=i.path;i.setCurrentPoint(l,c)}},{key:"endPath",value:function endPath(){var t=this.current;t.path=null;if(this.pendingClip)if(t.element){var r="clippath".concat(y++),a=this.svgFactory.createElement("svg:clipPath");a.setAttributeNS(null,"id",r);a.setAttributeNS(null,"transform",d(this.transformMatrix));var o=t.element.cloneNode(!0);"evenodd"===this.pendingClip?o.setAttributeNS(null,"clip-rule","evenodd"):o.setAttributeNS(null,"clip-rule","nonzero");this.pendingClip=null;a.appendChild(o);this.defs.appendChild(a);if(t.activeClipUrl){t.clipGroup=null;this.extraStack.forEach((function(t){t.clipGroup=null}));a.setAttributeNS(null,"clip-path",t.activeClipUrl)}t.activeClipUrl="url(#".concat(r,")");this.tgrp=null}else this.pendingClip=null}},{key:"clip",value:function clip(t){this.pendingClip=t}},{key:"closePath",value:function closePath(){var t=this.current;if(t.path){var r="".concat(t.path.getAttributeNS(null,"d"),"Z");t.path.setAttributeNS(null,"d",r)}}},{key:"setLeading",value:function setLeading(t){this.current.leading=-t}},{key:"setTextRise",value:function setTextRise(t){this.current.textRise=t}},{key:"setTextRenderingMode",value:function setTextRenderingMode(t){this.current.textRenderingMode=t}},{key:"setHScale",value:function setHScale(t){this.current.textHScale=t/100}},{key:"setRenderingIntent",value:function setRenderingIntent(t){}},{key:"setFlatness",value:function setFlatness(t){}},{key:"setGState",value:function setGState(t){var r,a=_createForOfIteratorHelper(t);try{for(a.s();!(r=a.n()).done;){var i=_slicedToArray(r.value,2),l=i[0],c=i[1];switch(l){case"LW":this.setLineWidth(c);break;case"LC":this.setLineCap(c);break;case"LJ":this.setLineJoin(c);break;case"ML":this.setMiterLimit(c);break;case"D":this.setDash(c[0],c[1]);break;case"RI":this.setRenderingIntent(c);break;case"FL":this.setFlatness(c);break;case"Font":this.setFont(c);break;case"CA":this.setStrokeAlpha(c);break;case"ca":this.setFillAlpha(c);break;default:(0,o.warn)("Unimplemented graphic state operator ".concat(l))}}}catch(t){a.e(t)}finally{a.f()}}},{key:"fill",value:function fill(){var t=this.current;if(t.element){t.element.setAttributeNS(null,"fill",t.fillColor);t.element.setAttributeNS(null,"fill-opacity",t.fillAlpha);this.endPath()}}},{key:"stroke",value:function stroke(){var t=this.current;if(t.element){this._setStrokeAttributes(t.element);t.element.setAttributeNS(null,"fill","none");this.endPath()}}},{key:"_setStrokeAttributes",value:function _setStrokeAttributes(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.current,o=a.dashArray;1!==r&&o.length>0&&(o=o.map((function(t){return r*t})));t.setAttributeNS(null,"stroke",a.strokeColor);t.setAttributeNS(null,"stroke-opacity",a.strokeAlpha);t.setAttributeNS(null,"stroke-miterlimit",u(a.miterLimit));t.setAttributeNS(null,"stroke-linecap",a.lineCap);t.setAttributeNS(null,"stroke-linejoin",a.lineJoin);t.setAttributeNS(null,"stroke-width",u(r*a.lineWidth)+"px");t.setAttributeNS(null,"stroke-dasharray",o.map(u).join(" "));t.setAttributeNS(null,"stroke-dashoffset",u(r*a.dashPhase)+"px")}},{key:"eoFill",value:function eoFill(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd");this.fill()}},{key:"fillStroke",value:function fillStroke(){this.stroke();this.fill()}},{key:"eoFillStroke",value:function eoFillStroke(){this.current.element&&this.current.element.setAttributeNS(null,"fill-rule","evenodd");this.fillStroke()}},{key:"closeStroke",value:function closeStroke(){this.closePath();this.stroke()}},{key:"closeFillStroke",value:function closeFillStroke(){this.closePath();this.fillStroke()}},{key:"closeEOFillStroke",value:function closeEOFillStroke(){this.closePath();this.eoFillStroke()}},{key:"paintSolidColorImageMask",value:function paintSolidColorImageMask(){var t=this.svgFactory.createElement("svg:rect");t.setAttributeNS(null,"x","0");t.setAttributeNS(null,"y","0");t.setAttributeNS(null,"width","1px");t.setAttributeNS(null,"height","1px");t.setAttributeNS(null,"fill",this.current.fillColor);this._ensureTransformGroup().appendChild(t)}},{key:"paintImageXObject",value:function paintImageXObject(t){var r=t.startsWith("g_")?this.commonObjs.get(t):this.objs.get(t);r?this.paintInlineImageXObject(r):(0,o.warn)("Dependent image with object ID ".concat(t," is not ready yet"))}},{key:"paintInlineImageXObject",value:function paintInlineImageXObject(t,r){var a=t.width,o=t.height,i=v(t,this.forceDataSchema,!!r),l=this.svgFactory.createElement("svg:rect");l.setAttributeNS(null,"x","0");l.setAttributeNS(null,"y","0");l.setAttributeNS(null,"width",u(a));l.setAttributeNS(null,"height",u(o));this.current.element=l;this.clip("nonzero");var c=this.svgFactory.createElement("svg:image");c.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);c.setAttributeNS(null,"x","0");c.setAttributeNS(null,"y",u(-o));c.setAttributeNS(null,"width",u(a)+"px");c.setAttributeNS(null,"height",u(o)+"px");c.setAttributeNS(null,"transform","scale(".concat(u(1/a)," ").concat(u(-1/o),")"));r?r.appendChild(c):this._ensureTransformGroup().appendChild(c)}},{key:"paintImageMaskXObject",value:function paintImageMaskXObject(t){var r=this.current,a=t.width,o=t.height,i=r.fillColor;r.maskId="mask".concat(b++);var l=this.svgFactory.createElement("svg:mask");l.setAttributeNS(null,"id",r.maskId);var c=this.svgFactory.createElement("svg:rect");c.setAttributeNS(null,"x","0");c.setAttributeNS(null,"y","0");c.setAttributeNS(null,"width",u(a));c.setAttributeNS(null,"height",u(o));c.setAttributeNS(null,"fill",i);c.setAttributeNS(null,"mask","url(#".concat(r.maskId,")"));this.defs.appendChild(l);this._ensureTransformGroup().appendChild(c);this.paintInlineImageXObject(t,l)}},{key:"paintFormXObjectBegin",value:function paintFormXObjectBegin(t,r){Array.isArray(t)&&6===t.length&&this.transform(t[0],t[1],t[2],t[3],t[4],t[5]);if(r){var a=r[2]-r[0],o=r[3]-r[1],i=this.svgFactory.createElement("svg:rect");i.setAttributeNS(null,"x",r[0]);i.setAttributeNS(null,"y",r[1]);i.setAttributeNS(null,"width",u(a));i.setAttributeNS(null,"height",u(o));this.current.element=i;this.clip("nonzero");this.endPath()}}},{key:"paintFormXObjectEnd",value:function paintFormXObjectEnd(){}},{key:"_initialize",value:function _initialize(t){var r=this.svgFactory.create(t.width,t.height),a=this.svgFactory.createElement("svg:defs");r.appendChild(a);this.defs=a;var o=this.svgFactory.createElement("svg:g");o.setAttributeNS(null,"transform",d(t.transform));r.appendChild(o);this.svg=o;return r}},{key:"_ensureClipGroup",value:function _ensureClipGroup(){if(!this.current.clipGroup){var t=this.svgFactory.createElement("svg:g");t.setAttributeNS(null,"clip-path",this.current.activeClipUrl);this.svg.appendChild(t);this.current.clipGroup=t}return this.current.clipGroup}},{key:"_ensureTransformGroup",value:function _ensureTransformGroup(){if(!this.tgrp){this.tgrp=this.svgFactory.createElement("svg:g");this.tgrp.setAttributeNS(null,"transform",d(this.transformMatrix));this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)}return this.tgrp}}]);return SVGGraphics}()},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.PDFNodeStream=void 0;var o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(a(2)),i=a(5),l=a(220);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _inherits(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}});r&&_setPrototypeOf(t,r)}function _setPrototypeOf(t,r){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,r){t.__proto__=r;return t})(t,r)}function _createSuper(t){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(t){return!1}}();return function _createSuperInternal(){var a,o=_getPrototypeOf(t);if(r){var i=_getPrototypeOf(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return _possibleConstructorReturn(this,a)}}function _possibleConstructorReturn(t,r){return!r||"object"!==_typeof(r)&&"function"!=typeof r?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):r}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}var c=require("fs"),u=require("http"),d=require("https"),h=require("url"),p=/^file:\/\/\/[a-zA-Z]:\//;var m=function(){function PDFNodeStream(t){_classCallCheck(this,PDFNodeStream);this.source=t;this.url=function parseUrl(t){var r=h.parse(t);if("file:"===r.protocol||r.host)return r;if(/^[a-z]:[/\\]/i.test(t))return h.parse("file:///".concat(t));r.host||(r.protocol="file:");return r}(t.url);this.isHttp="http:"===this.url.protocol||"https:"===this.url.protocol;this.isFsUrl="file:"===this.url.protocol;this.httpHeaders=this.isHttp&&t.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[]}_createClass(PDFNodeStream,[{key:"getFullReader",value:function getFullReader(){(0,i.assert)(!this._fullRequestReader,"PDFNodeStream.getFullReader can only be called once.");this._fullRequestReader=this.isFsUrl?new _(this):new y(this);return this._fullRequestReader}},{key:"getRangeReader",value:function getRangeReader(t,r){if(r<=this._progressiveDataLength)return null;var a=this.isFsUrl?new S(this,t,r):new b(this,t,r);this._rangeRequestReaders.push(a);return a}},{key:"cancelAllRequests",value:function cancelAllRequests(t){this._fullRequestReader&&this._fullRequestReader.cancel(t);this._rangeRequestReaders.slice(0).forEach((function(r){r.cancel(t)}))}},{key:"_progressiveDataLength",get:function get(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]);return PDFNodeStream}();r.PDFNodeStream=m;var v=function(){function BaseFullReader(t){_classCallCheck(this,BaseFullReader);this._url=t.url;this._done=!1;this._storedError=null;this.onProgress=null;var r=t.source;this._contentLength=r.length;this._loaded=0;this._filename=null;this._disableRange=r.disableRange||!1;this._rangeChunkSize=r.rangeChunkSize;this._rangeChunkSize||this._disableRange||(this._disableRange=!0);this._isStreamingSupported=!r.disableStream;this._isRangeSupported=!r.disableRange;this._readableStream=null;this._readCapability=(0,i.createPromiseCapability)();this._headersCapability=(0,i.createPromiseCapability)()}_createClass(BaseFullReader,[{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee(){var t,r;return o.default.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:a.next=2;return this._readCapability.promise;case 2:if(!this._done){a.next=4;break}return a.abrupt("return",{value:void 0,done:!0});case 4:if(!this._storedError){a.next=6;break}throw this._storedError;case 6:if(null!==(t=this._readableStream.read())){a.next=10;break}this._readCapability=(0,i.createPromiseCapability)();return a.abrupt("return",this.read());case 10:this._loaded+=t.length;this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength});r=new Uint8Array(t).buffer;return a.abrupt("return",{value:r,done:!1});case 14:case"end":return a.stop()}}),_callee,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._readableStream?this._readableStream.destroy(t):this._error(t)}},{key:"_error",value:function _error(t){this._storedError=t;this._readCapability.resolve()}},{key:"_setReadableStream",value:function _setReadableStream(t){var r=this;this._readableStream=t;t.on("readable",(function(){r._readCapability.resolve()}));t.on("end",(function(){t.destroy();r._done=!0;r._readCapability.resolve()}));t.on("error",(function(t){r._error(t)}));!this._isStreamingSupported&&this._isRangeSupported&&this._error(new i.AbortException("streaming is disabled"));this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"headersReady",get:function get(){return this._headersCapability.promise}},{key:"filename",get:function get(){return this._filename}},{key:"contentLength",get:function get(){return this._contentLength}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}}]);var t;return BaseFullReader}(),g=function(){function BaseRangeReader(t){_classCallCheck(this,BaseRangeReader);this._url=t.url;this._done=!1;this._storedError=null;this.onProgress=null;this._loaded=0;this._readableStream=null;this._readCapability=(0,i.createPromiseCapability)();var r=t.source;this._isStreamingSupported=!r.disableStream}_createClass(BaseRangeReader,[{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee2(){var t,r;return o.default.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:a.next=2;return this._readCapability.promise;case 2:if(!this._done){a.next=4;break}return a.abrupt("return",{value:void 0,done:!0});case 4:if(!this._storedError){a.next=6;break}throw this._storedError;case 6:if(null!==(t=this._readableStream.read())){a.next=10;break}this._readCapability=(0,i.createPromiseCapability)();return a.abrupt("return",this.read());case 10:this._loaded+=t.length;this.onProgress&&this.onProgress({loaded:this._loaded});r=new Uint8Array(t).buffer;return a.abrupt("return",{value:r,done:!1});case 14:case"end":return a.stop()}}),_callee2,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._readableStream?this._readableStream.destroy(t):this._error(t)}},{key:"_error",value:function _error(t){this._storedError=t;this._readCapability.resolve()}},{key:"_setReadableStream",value:function _setReadableStream(t){var r=this;this._readableStream=t;t.on("readable",(function(){r._readCapability.resolve()}));t.on("end",(function(){t.destroy();r._done=!0;r._readCapability.resolve()}));t.on("error",(function(t){r._error(t)}));this._storedError&&this._readableStream.destroy(this._storedError)}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}}]);var t;return BaseRangeReader}();function createRequestOptions(t,r){return{protocol:t.protocol,auth:t.auth,host:t.hostname,port:t.port,path:t.path,method:"GET",headers:r}}var y=function(t){_inherits(PDFNodeStreamFullReader,t);var r=_createSuper(PDFNodeStreamFullReader);function PDFNodeStreamFullReader(t){var a;_classCallCheck(this,PDFNodeStreamFullReader);var o=function handleResponse(r){if(404!==r.statusCode){a._headersCapability.resolve();a._setReadableStream(r);var o=function getResponseHeader(t){return a._readableStream.headers[t.toLowerCase()]},c=(0,l.validateRangeRequestCapabilities)({getResponseHeader:o,isHttp:t.isHttp,rangeChunkSize:a._rangeChunkSize,disableRange:a._disableRange}),u=c.allowRangeRequests,d=c.suggestedLength;a._isRangeSupported=u;a._contentLength=d||a._contentLength;a._filename=(0,l.extractFilenameFromHeader)(o)}else{var h=new i.MissingPDFException('Missing PDF "'.concat(a._url,'".'));a._storedError=h;a._headersCapability.reject(h)}};(a=r.call(this,t))._request=null;"http:"===a._url.protocol?a._request=u.request(createRequestOptions(a._url,t.httpHeaders),o):a._request=d.request(createRequestOptions(a._url,t.httpHeaders),o);a._request.on("error",(function(t){a._storedError=t;a._headersCapability.reject(t)}));a._request.end();return a}return PDFNodeStreamFullReader}(v),b=function(t){_inherits(PDFNodeStreamRangeReader,t);var r=_createSuper(PDFNodeStreamRangeReader);function PDFNodeStreamRangeReader(t,a,o){var l;_classCallCheck(this,PDFNodeStreamRangeReader);(l=r.call(this,t))._httpHeaders={};for(var c in t.httpHeaders){var h=t.httpHeaders[c];void 0!==h&&(l._httpHeaders[c]=h)}l._httpHeaders.Range="bytes=".concat(a,"-").concat(o-1);var p=function handleResponse(t){if(404!==t.statusCode)l._setReadableStream(t);else{var r=new i.MissingPDFException('Missing PDF "'.concat(l._url,'".'));l._storedError=r}};l._request=null;"http:"===l._url.protocol?l._request=u.request(createRequestOptions(l._url,l._httpHeaders),p):l._request=d.request(createRequestOptions(l._url,l._httpHeaders),p);l._request.on("error",(function(t){l._storedError=t}));l._request.end();return l}return PDFNodeStreamRangeReader}(g),_=function(t){_inherits(PDFNodeStreamFsFullReader,t);var r=_createSuper(PDFNodeStreamFsFullReader);function PDFNodeStreamFsFullReader(t){var a;_classCallCheck(this,PDFNodeStreamFsFullReader);a=r.call(this,t);var o=decodeURIComponent(a._url.path);p.test(a._url.href)&&(o=o.replace(/^\//,""));c.lstat(o,(function(t,r){if(t){"ENOENT"===t.code&&(t=new i.MissingPDFException('Missing PDF "'.concat(o,'".')));a._storedError=t;a._headersCapability.reject(t)}else{a._contentLength=r.size;a._setReadableStream(c.createReadStream(o));a._headersCapability.resolve()}}));return a}return PDFNodeStreamFsFullReader}(v),S=function(t){_inherits(PDFNodeStreamFsRangeReader,t);var r=_createSuper(PDFNodeStreamFsRangeReader);function PDFNodeStreamFsRangeReader(t,a,o){var i;_classCallCheck(this,PDFNodeStreamFsRangeReader);i=r.call(this,t);var l=decodeURIComponent(i._url.path);p.test(i._url.href)&&(l=l.replace(/^\//,""));i._setReadableStream(c.createReadStream(l,{start:a,end:o-1}));return i}return PDFNodeStreamFsRangeReader}(g)},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.createResponseStatusError=function createResponseStatusError(t,r){if(404===t||0===t&&r.startsWith("file:"))return new o.MissingPDFException('Missing PDF "'+r+'".');return new o.UnexpectedResponseException("Unexpected server response ("+t+') while retrieving PDF "'+r+'".',t)};r.extractFilenameFromHeader=function extractFilenameFromHeader(t){var r=t("Content-Disposition");if(r){var a=(0,i.getFilenameFromContentDispositionHeader)(r);if(a.includes("%"))try{a=decodeURIComponent(a)}catch(t){}if(/\.pdf$/i.test(a))return a}return null};r.validateRangeRequestCapabilities=function validateRangeRequestCapabilities(t){var r=t.getResponseHeader,a=t.isHttp,i=t.rangeChunkSize,l=t.disableRange;(0,o.assert)(i>0,"Range chunk size must be larger than zero");var c={allowRangeRequests:!1,suggestedLength:void 0},u=parseInt(r("Content-Length"),10);if(!Number.isInteger(u))return c;c.suggestedLength=u;if(u<=2*i)return c;if(l||!a)return c;if("bytes"!==r("Accept-Ranges"))return c;if("identity"!==(r("Content-Encoding")||"identity"))return c;c.allowRangeRequests=!0;return c};r.validateResponseStatus=function validateResponseStatus(t){return 200===t||206===t};var o=a(5),i=a(221)},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.getFilenameFromContentDispositionHeader=function getFilenameFromContentDispositionHeader(t){var r=!0,a=toParamRegExp("filename\\*","i").exec(t);if(a){var o=rfc2616unquote(a=a[1]);return fixupEncoding(o=rfc2047decode(o=rfc5987decode(o=unescape(o))))}if(a=function rfc2231getparam(t){var r,a=[],o=toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)","ig");for(;null!==(r=o.exec(t));){var i=_slicedToArray(r,4),l=i[1],c=i[2],u=i[3];if((l=parseInt(l,10))in a){if(0===l)break}else a[l]=[c,u]}for(var d=[],h=0;h<a.length&&h in a;++h){var p=_slicedToArray(a[h],2),m=p[0],v=p[1];v=rfc2616unquote(v);if(m){v=unescape(v);0===h&&(v=rfc5987decode(v))}d.push(v)}return d.join("")}(t)){return fixupEncoding(rfc2047decode(a))}if(a=toParamRegExp("filename","i").exec(t)){var i=rfc2616unquote(a=a[1]);return fixupEncoding(i=rfc2047decode(i))}function toParamRegExp(t,r){return new RegExp("(?:^|;)\\s*"+t+'\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',r)}function textdecode(t,a){if(t){if(!/^[\x00-\xFF]+$/.test(a))return a;try{var o=new TextDecoder(t,{fatal:!0}),i=Array.from(a,(function(t){return 255&t.charCodeAt(0)}));a=o.decode(new Uint8Array(i));r=!1}catch(o){if(/^utf-?8$/i.test(t))try{a=decodeURIComponent(escape(a));r=!1}catch(t){}}}return a}function fixupEncoding(t){if(r&&/[\x80-\xff]/.test(t)){t=textdecode("utf-8",t);r&&(t=textdecode("iso-8859-1",t))}return t}function rfc2616unquote(t){if(t.startsWith('"')){for(var r=t.slice(1).split('\\"'),a=0;a<r.length;++a){var o=r[a].indexOf('"');if(-1!==o){r[a]=r[a].slice(0,o);r.length=a+1}r[a]=r[a].replace(/\\(.)/g,"$1")}t=r.join('"')}return t}function rfc5987decode(t){var r=t.indexOf("'");return-1===r?t:textdecode(t.slice(0,r),t.slice(r+1).replace(/^[^']*'/,""))}function rfc2047decode(t){return!t.startsWith("=?")||/[\x00-\x19\x80-\xff]/.test(t)?t:t.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,(function(t,r,a,o){if("q"===a||"Q"===a)return textdecode(r,o=(o=o.replace(/_/g," ")).replace(/=([0-9a-fA-F]{2})/g,(function(t,r){return String.fromCharCode(parseInt(r,16))})));try{o=atob(o)}catch(t){}return textdecode(r,o)}))}return""};function _slicedToArray(t,r){return function _arrayWithHoles(t){if(Array.isArray(t))return t}(t)||function _iterableToArrayLimit(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var a=[],o=!0,i=!1,l=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){a.push(c.value);if(r&&a.length===r)break}}catch(t){i=!0;l=t}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}return a}(t,r)||function _unsupportedIterableToArray(t,r){if(!t)return;if("string"==typeof t)return _arrayLikeToArray(t,r);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(t,r)}(t,r)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var a=0,o=new Array(r);a<r;a++)o[a]=t[a];return o}},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.PDFNetworkStream=void 0;var o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(a(2)),i=a(5),l=a(220);function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}var c=function(){function NetworkManager(t,r){_classCallCheck(this,NetworkManager);this.url=t;r=r||{};this.isHttp=/^https?:/i.test(t);this.httpHeaders=this.isHttp&&r.httpHeaders||{};this.withCredentials=r.withCredentials||!1;this.getXhr=r.getXhr||function NetworkManager_getXhr(){return new XMLHttpRequest};this.currXhrId=0;this.pendingRequests=Object.create(null)}_createClass(NetworkManager,[{key:"requestRange",value:function requestRange(t,r,a){var o={begin:t,end:r};for(var i in a)o[i]=a[i];return this.request(o)}},{key:"requestFull",value:function requestFull(t){return this.request(t)}},{key:"request",value:function request(t){var r=this.getXhr(),a=this.currXhrId++,o=this.pendingRequests[a]={xhr:r};r.open("GET",this.url);r.withCredentials=this.withCredentials;for(var i in this.httpHeaders){var l=this.httpHeaders[i];void 0!==l&&r.setRequestHeader(i,l)}if(this.isHttp&&"begin"in t&&"end"in t){r.setRequestHeader("Range","bytes=".concat(t.begin,"-").concat(t.end-1));o.expectedStatus=206}else o.expectedStatus=200;r.responseType="arraybuffer";t.onError&&(r.onerror=function(a){t.onError(r.status)});r.onreadystatechange=this.onStateChange.bind(this,a);r.onprogress=this.onProgress.bind(this,a);o.onHeadersReceived=t.onHeadersReceived;o.onDone=t.onDone;o.onError=t.onError;o.onProgress=t.onProgress;r.send(null);return a}},{key:"onProgress",value:function onProgress(t,r){var a=this.pendingRequests[t];a&&a.onProgress&&a.onProgress(r)}},{key:"onStateChange",value:function onStateChange(t,r){var a=this.pendingRequests[t];if(a){var o=a.xhr;if(o.readyState>=2&&a.onHeadersReceived){a.onHeadersReceived();delete a.onHeadersReceived}if(4===o.readyState&&t in this.pendingRequests){delete this.pendingRequests[t];if(0===o.status&&this.isHttp)a.onError&&a.onError(o.status);else{var l=o.status||200;if(200===l&&206===a.expectedStatus||l===a.expectedStatus){var c=function getArrayBuffer(t){var r=t.response;return"string"!=typeof r?r:(0,i.stringToBytes)(r).buffer}(o);if(206===l){var u=o.getResponseHeader("Content-Range"),d=/bytes (\d+)-(\d+)\/(\d+)/.exec(u);a.onDone({begin:parseInt(d[1],10),chunk:c})}else c?a.onDone({begin:0,chunk:c}):a.onError&&a.onError(o.status)}else a.onError&&a.onError(o.status)}}}}},{key:"getRequestXhr",value:function getRequestXhr(t){return this.pendingRequests[t].xhr}},{key:"isPendingRequest",value:function isPendingRequest(t){return t in this.pendingRequests}},{key:"abortRequest",value:function abortRequest(t){var r=this.pendingRequests[t].xhr;delete this.pendingRequests[t];r.abort()}}]);return NetworkManager}(),u=function(){function PDFNetworkStream(t){_classCallCheck(this,PDFNetworkStream);this._source=t;this._manager=new c(t.url,{httpHeaders:t.httpHeaders,withCredentials:t.withCredentials});this._rangeChunkSize=t.rangeChunkSize;this._fullRequestReader=null;this._rangeRequestReaders=[]}_createClass(PDFNetworkStream,[{key:"_onRangeRequestReaderClosed",value:function _onRangeRequestReaderClosed(t){var r=this._rangeRequestReaders.indexOf(t);r>=0&&this._rangeRequestReaders.splice(r,1)}},{key:"getFullReader",value:function getFullReader(){(0,i.assert)(!this._fullRequestReader,"PDFNetworkStream.getFullReader can only be called once.");this._fullRequestReader=new d(this._manager,this._source);return this._fullRequestReader}},{key:"getRangeReader",value:function getRangeReader(t,r){var a=new h(this._manager,t,r);a.onClosed=this._onRangeRequestReaderClosed.bind(this);this._rangeRequestReaders.push(a);return a}},{key:"cancelAllRequests",value:function cancelAllRequests(t){this._fullRequestReader&&this._fullRequestReader.cancel(t);this._rangeRequestReaders.slice(0).forEach((function(r){r.cancel(t)}))}}]);return PDFNetworkStream}();r.PDFNetworkStream=u;var d=function(){function PDFNetworkStreamFullRequestReader(t,r){_classCallCheck(this,PDFNetworkStreamFullRequestReader);this._manager=t;var a={onHeadersReceived:this._onHeadersReceived.bind(this),onDone:this._onDone.bind(this),onError:this._onError.bind(this),onProgress:this._onProgress.bind(this)};this._url=r.url;this._fullRequestId=t.requestFull(a);this._headersReceivedCapability=(0,i.createPromiseCapability)();this._disableRange=r.disableRange||!1;this._contentLength=r.length;this._rangeChunkSize=r.rangeChunkSize;this._rangeChunkSize||this._disableRange||(this._disableRange=!0);this._isStreamingSupported=!1;this._isRangeSupported=!1;this._cachedChunks=[];this._requests=[];this._done=!1;this._storedError=void 0;this._filename=null;this.onProgress=null}_createClass(PDFNetworkStreamFullRequestReader,[{key:"_onHeadersReceived",value:function _onHeadersReceived(){var t=this._fullRequestId,r=this._manager.getRequestXhr(t),a=function getResponseHeader(t){return r.getResponseHeader(t)},o=(0,l.validateRangeRequestCapabilities)({getResponseHeader:a,isHttp:this._manager.isHttp,rangeChunkSize:this._rangeChunkSize,disableRange:this._disableRange}),i=o.allowRangeRequests,c=o.suggestedLength;i&&(this._isRangeSupported=!0);this._contentLength=c||this._contentLength;this._filename=(0,l.extractFilenameFromHeader)(a);this._isRangeSupported&&this._manager.abortRequest(t);this._headersReceivedCapability.resolve()}},{key:"_onDone",value:function _onDone(t){if(t)if(this._requests.length>0){this._requests.shift().resolve({value:t.chunk,done:!1})}else this._cachedChunks.push(t.chunk);this._done=!0;if(!(this._cachedChunks.length>0)){this._requests.forEach((function(t){t.resolve({value:void 0,done:!0})}));this._requests=[]}}},{key:"_onError",value:function _onError(t){var r=this._url,a=(0,l.createResponseStatusError)(t,r);this._storedError=a;this._headersReceivedCapability.reject(a);this._requests.forEach((function(t){t.reject(a)}));this._requests=[];this._cachedChunks=[]}},{key:"_onProgress",value:function _onProgress(t){this.onProgress&&this.onProgress({loaded:t.loaded,total:t.lengthComputable?t.total:this._contentLength})}},{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee(){var t,r;return o.default.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(!this._storedError){a.next=2;break}throw this._storedError;case 2:if(!(this._cachedChunks.length>0)){a.next=5;break}t=this._cachedChunks.shift();return a.abrupt("return",{value:t,done:!1});case 5:if(!this._done){a.next=7;break}return a.abrupt("return",{value:void 0,done:!0});case 7:r=(0,i.createPromiseCapability)();this._requests.push(r);return a.abrupt("return",r.promise);case 10:case"end":return a.stop()}}),_callee,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._done=!0;this._headersReceivedCapability.reject(t);this._requests.forEach((function(t){t.resolve({value:void 0,done:!0})}));this._requests=[];this._manager.isPendingRequest(this._fullRequestId)&&this._manager.abortRequest(this._fullRequestId);this._fullRequestReader=null}},{key:"filename",get:function get(){return this._filename}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}},{key:"contentLength",get:function get(){return this._contentLength}},{key:"headersReady",get:function get(){return this._headersReceivedCapability.promise}}]);var t;return PDFNetworkStreamFullRequestReader}(),h=function(){function PDFNetworkStreamRangeRequestReader(t,r,a){_classCallCheck(this,PDFNetworkStreamRangeRequestReader);this._manager=t;var o={onDone:this._onDone.bind(this),onProgress:this._onProgress.bind(this)};this._requestId=t.requestRange(r,a,o);this._requests=[];this._queuedChunk=null;this._done=!1;this.onProgress=null;this.onClosed=null}_createClass(PDFNetworkStreamRangeRequestReader,[{key:"_close",value:function _close(){this.onClosed&&this.onClosed(this)}},{key:"_onDone",value:function _onDone(t){var r=t.chunk;if(this._requests.length>0){this._requests.shift().resolve({value:r,done:!1})}else this._queuedChunk=r;this._done=!0;this._requests.forEach((function(t){t.resolve({value:void 0,done:!0})}));this._requests=[];this._close()}},{key:"_onProgress",value:function _onProgress(t){!this.isStreamingSupported&&this.onProgress&&this.onProgress({loaded:t.loaded})}},{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee2(){var t,r;return o.default.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:if(null===this._queuedChunk){a.next=4;break}t=this._queuedChunk;this._queuedChunk=null;return a.abrupt("return",{value:t,done:!1});case 4:if(!this._done){a.next=6;break}return a.abrupt("return",{value:void 0,done:!0});case 6:r=(0,i.createPromiseCapability)();this._requests.push(r);return a.abrupt("return",r.promise);case 9:case"end":return a.stop()}}),_callee2,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._done=!0;this._requests.forEach((function(t){t.resolve({value:void 0,done:!0})}));this._requests=[];this._manager.isPendingRequest(this._requestId)&&this._manager.abortRequest(this._requestId);this._close()}},{key:"isStreamingSupported",get:function get(){return!1}}]);var t;return PDFNetworkStreamRangeRequestReader}()},function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.PDFFetchStream=void 0;var o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(a(2)),i=a(5),l=a(220);function asyncGeneratorStep(t,r,a,o,i,l,c){try{var u=t[l](c),d=u.value}catch(t){a(t);return}u.done?r(d):Promise.resolve(d).then(o,i)}function _asyncToGenerator(t){return function(){var r=this,a=arguments;return new Promise((function(o,i){var l=t.apply(r,a);function _next(t){asyncGeneratorStep(l,o,i,_next,_throw,"next",t)}function _throw(t){asyncGeneratorStep(l,o,i,_next,_throw,"throw",t)}_next(void 0)}))}}function _classCallCheck(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1;o.configurable=!0;"value"in o&&(o.writable=!0);Object.defineProperty(t,o.key,o)}}function _createClass(t,r,a){r&&_defineProperties(t.prototype,r);a&&_defineProperties(t,a);return t}function createFetchOptions(t,r,a){return{method:"GET",headers:t,signal:a&&a.signal,mode:"cors",credentials:r?"include":"same-origin",redirect:"follow"}}function createHeaders(t){var r=new Headers;for(var a in t){var o=t[a];void 0!==o&&r.append(a,o)}return r}var c=function(){function PDFFetchStream(t){_classCallCheck(this,PDFFetchStream);this.source=t;this.isHttp=/^https?:/i.test(t.url);this.httpHeaders=this.isHttp&&t.httpHeaders||{};this._fullRequestReader=null;this._rangeRequestReaders=[]}_createClass(PDFFetchStream,[{key:"getFullReader",value:function getFullReader(){(0,i.assert)(!this._fullRequestReader,"PDFFetchStream.getFullReader can only be called once.");this._fullRequestReader=new u(this);return this._fullRequestReader}},{key:"getRangeReader",value:function getRangeReader(t,r){if(r<=this._progressiveDataLength)return null;var a=new d(this,t,r);this._rangeRequestReaders.push(a);return a}},{key:"cancelAllRequests",value:function cancelAllRequests(t){this._fullRequestReader&&this._fullRequestReader.cancel(t);this._rangeRequestReaders.slice(0).forEach((function(r){r.cancel(t)}))}},{key:"_progressiveDataLength",get:function get(){return this._fullRequestReader?this._fullRequestReader._loaded:0}}]);return PDFFetchStream}();r.PDFFetchStream=c;var u=function(){function PDFFetchStreamReader(t){var r=this;_classCallCheck(this,PDFFetchStreamReader);this._stream=t;this._reader=null;this._loaded=0;this._filename=null;var a=t.source;this._withCredentials=a.withCredentials||!1;this._contentLength=a.length;this._headersCapability=(0,i.createPromiseCapability)();this._disableRange=a.disableRange||!1;this._rangeChunkSize=a.rangeChunkSize;this._rangeChunkSize||this._disableRange||(this._disableRange=!0);"undefined"!=typeof AbortController&&(this._abortController=new AbortController);this._isStreamingSupported=!a.disableStream;this._isRangeSupported=!a.disableRange;this._headers=createHeaders(this._stream.httpHeaders);var o=a.url;fetch(o,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then((function(t){if(!(0,l.validateResponseStatus)(t.status))throw(0,l.createResponseStatusError)(t.status,o);r._reader=t.body.getReader();r._headersCapability.resolve();var a=function getResponseHeader(r){return t.headers.get(r)},c=(0,l.validateRangeRequestCapabilities)({getResponseHeader:a,isHttp:r._stream.isHttp,rangeChunkSize:r._rangeChunkSize,disableRange:r._disableRange}),u=c.allowRangeRequests,d=c.suggestedLength;r._isRangeSupported=u;r._contentLength=d||r._contentLength;r._filename=(0,l.extractFilenameFromHeader)(a);!r._isStreamingSupported&&r._isRangeSupported&&r.cancel(new i.AbortException("Streaming is disabled."))})).catch(this._headersCapability.reject);this.onProgress=null}_createClass(PDFFetchStreamReader,[{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee(){var t,r,a,i;return o.default.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:o.next=2;return this._headersCapability.promise;case 2:o.next=4;return this._reader.read();case 4:t=o.sent;r=t.value;if(!(a=t.done)){o.next=9;break}return o.abrupt("return",{value:r,done:a});case 9:this._loaded+=r.byteLength;this.onProgress&&this.onProgress({loaded:this._loaded,total:this._contentLength});i=new Uint8Array(r).buffer;return o.abrupt("return",{value:i,done:!1});case 13:case"end":return o.stop()}}),_callee,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._reader&&this._reader.cancel(t);this._abortController&&this._abortController.abort()}},{key:"headersReady",get:function get(){return this._headersCapability.promise}},{key:"filename",get:function get(){return this._filename}},{key:"contentLength",get:function get(){return this._contentLength}},{key:"isRangeSupported",get:function get(){return this._isRangeSupported}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}}]);var t;return PDFFetchStreamReader}(),d=function(){function PDFFetchStreamRangeReader(t,r,a){var o=this;_classCallCheck(this,PDFFetchStreamRangeReader);this._stream=t;this._reader=null;this._loaded=0;var c=t.source;this._withCredentials=c.withCredentials||!1;this._readCapability=(0,i.createPromiseCapability)();this._isStreamingSupported=!c.disableStream;"undefined"!=typeof AbortController&&(this._abortController=new AbortController);this._headers=createHeaders(this._stream.httpHeaders);this._headers.append("Range","bytes=".concat(r,"-").concat(a-1));var u=c.url;fetch(u,createFetchOptions(this._headers,this._withCredentials,this._abortController)).then((function(t){if(!(0,l.validateResponseStatus)(t.status))throw(0,l.createResponseStatusError)(t.status,u);o._readCapability.resolve();o._reader=t.body.getReader()})).catch((function(t){if(!t||"AbortError"!==t.name)throw t}));this.onProgress=null}_createClass(PDFFetchStreamRangeReader,[{key:"read",value:(t=_asyncToGenerator(o.default.mark((function _callee2(){var t,r,a,i;return o.default.wrap((function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:o.next=2;return this._readCapability.promise;case 2:o.next=4;return this._reader.read();case 4:t=o.sent;r=t.value;if(!(a=t.done)){o.next=9;break}return o.abrupt("return",{value:r,done:a});case 9:this._loaded+=r.byteLength;this.onProgress&&this.onProgress({loaded:this._loaded});i=new Uint8Array(r).buffer;return o.abrupt("return",{value:i,done:!1});case 13:case"end":return o.stop()}}),_callee2,this)}))),function read(){return t.apply(this,arguments)})},{key:"cancel",value:function cancel(t){this._reader&&this._reader.cancel(t);this._abortController&&this._abortController.abort()}},{key:"isStreamingSupported",get:function get(){return this._isStreamingSupported}}]);var t;return PDFFetchStreamRangeReader}()}])}));
/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
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
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pdfjs-dist/web/pdf_viewer", [], factory);
	else if(typeof exports === 'object')
		exports["pdfjs-dist/web/pdf_viewer"] = factory();
	else
		root["pdfjs-dist/web/pdf_viewer"] = root.pdfjsViewer = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__w_pdfjs_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__w_pdfjs_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__w_pdfjs_require__.d = function(exports, name, getter) {
/******/ 		if(!__w_pdfjs_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__w_pdfjs_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__w_pdfjs_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __w_pdfjs_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__w_pdfjs_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __w_pdfjs_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__w_pdfjs_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__w_pdfjs_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__w_pdfjs_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__w_pdfjs_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AnnotationLayerBuilder", {
  enumerable: true,
  get: function get() {
    return _annotation_layer_builder.AnnotationLayerBuilder;
  }
});
Object.defineProperty(exports, "DefaultAnnotationLayerFactory", {
  enumerable: true,
  get: function get() {
    return _annotation_layer_builder.DefaultAnnotationLayerFactory;
  }
});
Object.defineProperty(exports, "DefaultTextLayerFactory", {
  enumerable: true,
  get: function get() {
    return _text_layer_builder.DefaultTextLayerFactory;
  }
});
Object.defineProperty(exports, "TextLayerBuilder", {
  enumerable: true,
  get: function get() {
    return _text_layer_builder.TextLayerBuilder;
  }
});
Object.defineProperty(exports, "EventBus", {
  enumerable: true,
  get: function get() {
    return _ui_utils.EventBus;
  }
});
Object.defineProperty(exports, "NullL10n", {
  enumerable: true,
  get: function get() {
    return _ui_utils.NullL10n;
  }
});
Object.defineProperty(exports, "ProgressBar", {
  enumerable: true,
  get: function get() {
    return _ui_utils.ProgressBar;
  }
});
Object.defineProperty(exports, "PDFLinkService", {
  enumerable: true,
  get: function get() {
    return _pdf_link_service.PDFLinkService;
  }
});
Object.defineProperty(exports, "SimpleLinkService", {
  enumerable: true,
  get: function get() {
    return _pdf_link_service.SimpleLinkService;
  }
});
Object.defineProperty(exports, "DownloadManager", {
  enumerable: true,
  get: function get() {
    return _download_manager.DownloadManager;
  }
});
Object.defineProperty(exports, "GenericL10n", {
  enumerable: true,
  get: function get() {
    return _genericl10n.GenericL10n;
  }
});
Object.defineProperty(exports, "PDFFindController", {
  enumerable: true,
  get: function get() {
    return _pdf_find_controller.PDFFindController;
  }
});
Object.defineProperty(exports, "PDFHistory", {
  enumerable: true,
  get: function get() {
    return _pdf_history.PDFHistory;
  }
});
Object.defineProperty(exports, "PDFPageView", {
  enumerable: true,
  get: function get() {
    return _pdf_page_view.PDFPageView;
  }
});
Object.defineProperty(exports, "PDFSinglePageViewer", {
  enumerable: true,
  get: function get() {
    return _pdf_single_page_viewer.PDFSinglePageViewer;
  }
});
Object.defineProperty(exports, "PDFViewer", {
  enumerable: true,
  get: function get() {
    return _pdf_viewer.PDFViewer;
  }
});

var _annotation_layer_builder = __w_pdfjs_require__(1);

var _text_layer_builder = __w_pdfjs_require__(8);

var _ui_utils = __w_pdfjs_require__(3);

var _pdf_link_service = __w_pdfjs_require__(7);

var _download_manager = __w_pdfjs_require__(9);

var _genericl10n = __w_pdfjs_require__(11);

var _pdf_find_controller = __w_pdfjs_require__(13);

var _pdf_history = __w_pdfjs_require__(15);

var _pdf_page_view = __w_pdfjs_require__(16);

var _pdf_single_page_viewer = __w_pdfjs_require__(18);

var _pdf_viewer = __w_pdfjs_require__(20);

var pdfjsVersion = '2.6.347';
var pdfjsBuild = '3be9c65f';

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultAnnotationLayerFactory = exports.AnnotationLayerBuilder = void 0;

var _pdfjsLib = __w_pdfjs_require__(2);

var _ui_utils = __w_pdfjs_require__(3);

var _pdf_link_service = __w_pdfjs_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AnnotationLayerBuilder = /*#__PURE__*/function () {
  function AnnotationLayerBuilder(_ref) {
    var pageDiv = _ref.pageDiv,
        pdfPage = _ref.pdfPage,
        linkService = _ref.linkService,
        downloadManager = _ref.downloadManager,
        _ref$annotationStorag = _ref.annotationStorage,
        annotationStorage = _ref$annotationStorag === void 0 ? null : _ref$annotationStorag,
        _ref$imageResourcesPa = _ref.imageResourcesPath,
        imageResourcesPath = _ref$imageResourcesPa === void 0 ? "" : _ref$imageResourcesPa,
        _ref$renderInteractiv = _ref.renderInteractiveForms,
        renderInteractiveForms = _ref$renderInteractiv === void 0 ? true : _ref$renderInteractiv,
        _ref$l10n = _ref.l10n,
        l10n = _ref$l10n === void 0 ? _ui_utils.NullL10n : _ref$l10n;

    _classCallCheck(this, AnnotationLayerBuilder);

    this.pageDiv = pageDiv;
    this.pdfPage = pdfPage;
    this.linkService = linkService;
    this.downloadManager = downloadManager;
    this.imageResourcesPath = imageResourcesPath;
    this.renderInteractiveForms = renderInteractiveForms;
    this.l10n = l10n;
    this.annotationStorage = annotationStorage;
    this.div = null;
    this._cancelled = false;
  }

  _createClass(AnnotationLayerBuilder, [{
    key: "render",
    value: function render(viewport) {
      var _this = this;

      var intent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "display";
      return this.pdfPage.getAnnotations({
        intent: intent
      }).then(function (annotations) {
        if (_this._cancelled) {
          return;
        }

        if (annotations.length === 0) {
          return;
        }

        var parameters = {
          viewport: viewport.clone({
            dontFlip: true
          }),
          div: _this.div,
          annotations: annotations,
          page: _this.pdfPage,
          imageResourcesPath: _this.imageResourcesPath,
          renderInteractiveForms: _this.renderInteractiveForms,
          linkService: _this.linkService,
          downloadManager: _this.downloadManager,
          annotationStorage: _this.annotationStorage
        };

        if (_this.div) {
          _pdfjsLib.AnnotationLayer.update(parameters);
        } else {
          _this.div = document.createElement("div");
          _this.div.className = "annotationLayer";

          _this.pageDiv.appendChild(_this.div);

          parameters.div = _this.div;

          _pdfjsLib.AnnotationLayer.render(parameters);

          _this.l10n.translate(_this.div);
        }
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this._cancelled = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.div) {
        return;
      }

      this.div.setAttribute("hidden", "true");
    }
  }]);

  return AnnotationLayerBuilder;
}();

exports.AnnotationLayerBuilder = AnnotationLayerBuilder;

var DefaultAnnotationLayerFactory = /*#__PURE__*/function () {
  function DefaultAnnotationLayerFactory() {
    _classCallCheck(this, DefaultAnnotationLayerFactory);
  }

  _createClass(DefaultAnnotationLayerFactory, [{
    key: "createAnnotationLayerBuilder",
    value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
      var annotationStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var imageResourcesPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var renderInteractiveForms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var l10n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _ui_utils.NullL10n;
      return new AnnotationLayerBuilder({
        pageDiv: pageDiv,
        pdfPage: pdfPage,
        imageResourcesPath: imageResourcesPath,
        renderInteractiveForms: renderInteractiveForms,
        linkService: new _pdf_link_service.SimpleLinkService(),
        l10n: l10n,
        annotationStorage: annotationStorage
      });
    }
  }]);

  return DefaultAnnotationLayerFactory;
}();

exports.DefaultAnnotationLayerFactory = DefaultAnnotationLayerFactory;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pdfjsLib;

if (typeof window !== "undefined" && window["pdfjs-dist/build/pdf"]) {
  pdfjsLib = window["pdfjs-dist/build/pdf"];
} else {
  pdfjsLib = require("../build/pdf.js");
}

module.exports = pdfjsLib;

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidRotation = isValidRotation;
exports.isValidScrollMode = isValidScrollMode;
exports.isValidSpreadMode = isValidSpreadMode;
exports.isPortraitOrientation = isPortraitOrientation;
exports.clamp = clamp;
exports.getPDFFileNameFromURL = getPDFFileNameFromURL;
exports.noContextMenuHandler = noContextMenuHandler;
exports.parseQueryString = parseQueryString;
exports.backtrackBeforeAllVisibleElements = backtrackBeforeAllVisibleElements;
exports.getVisibleElements = getVisibleElements;
exports.roundToDivide = roundToDivide;
exports.getPageSizeInches = getPageSizeInches;
exports.approximateFraction = approximateFraction;
exports.getOutputScale = getOutputScale;
exports.scrollIntoView = scrollIntoView;
exports.watchScroll = watchScroll;
exports.binarySearchFirstItem = binarySearchFirstItem;
exports.normalizeWheelEventDirection = normalizeWheelEventDirection;
exports.normalizeWheelEventDelta = normalizeWheelEventDelta;
exports.waitOnEventOrTimeout = waitOnEventOrTimeout;
exports.moveToEndOfArray = moveToEndOfArray;
exports.WaitOnType = exports.animationStarted = exports.ProgressBar = exports.EventBus = exports.NullL10n = exports.SpreadMode = exports.ScrollMode = exports.TextLayerMode = exports.RendererType = exports.PresentationModeState = exports.VERTICAL_PADDING = exports.SCROLLBAR_PADDING = exports.MAX_AUTO_SCALE = exports.UNKNOWN_SCALE = exports.MAX_SCALE = exports.MIN_SCALE = exports.DEFAULT_SCALE = exports.DEFAULT_SCALE_VALUE = exports.CSS_UNITS = exports.AutoPrintRegExp = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CSS_UNITS = 96.0 / 72.0;
exports.CSS_UNITS = CSS_UNITS;
var DEFAULT_SCALE_VALUE = "auto";
exports.DEFAULT_SCALE_VALUE = DEFAULT_SCALE_VALUE;
var DEFAULT_SCALE = 1.0;
exports.DEFAULT_SCALE = DEFAULT_SCALE;
var MIN_SCALE = 0.1;
exports.MIN_SCALE = MIN_SCALE;
var MAX_SCALE = 10.0;
exports.MAX_SCALE = MAX_SCALE;
var UNKNOWN_SCALE = 0;
exports.UNKNOWN_SCALE = UNKNOWN_SCALE;
var MAX_AUTO_SCALE = 1.25;
exports.MAX_AUTO_SCALE = MAX_AUTO_SCALE;
var SCROLLBAR_PADDING = 40;
exports.SCROLLBAR_PADDING = SCROLLBAR_PADDING;
var VERTICAL_PADDING = 5;
exports.VERTICAL_PADDING = VERTICAL_PADDING;
var PresentationModeState = {
  UNKNOWN: 0,
  NORMAL: 1,
  CHANGING: 2,
  FULLSCREEN: 3
};
exports.PresentationModeState = PresentationModeState;
var RendererType = {
  CANVAS: "canvas",
  SVG: "svg"
};
exports.RendererType = RendererType;
var TextLayerMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_ENHANCE: 2
};
exports.TextLayerMode = TextLayerMode;
var ScrollMode = {
  UNKNOWN: -1,
  VERTICAL: 0,
  HORIZONTAL: 1,
  WRAPPED: 2
};
exports.ScrollMode = ScrollMode;
var SpreadMode = {
  UNKNOWN: -1,
  NONE: 0,
  ODD: 1,
  EVEN: 2
};
exports.SpreadMode = SpreadMode;
var AutoPrintRegExp = /\bprint\s*\(/;
exports.AutoPrintRegExp = AutoPrintRegExp;

function formatL10nValue(text, args) {
  if (!args) {
    return text;
  }

  return text.replace(/\{\{\s*(\w+)\s*\}\}/g, function (all, name) {
    return name in args ? args[name] : "{{" + name + "}}";
  });
}

var NullL10n = {
  getLanguage: function getLanguage() {
    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "en-us");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getDirection: function getDirection() {
    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", "ltr");

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  get: function get(property, args, fallback) {
    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", formatL10nValue(fallback, args));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  translate: function translate(element) {
    return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
exports.NullL10n = NullL10n;

function getOutputScale(ctx) {
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
  var pixelRatio = devicePixelRatio / backingStoreRatio;
  return {
    sx: pixelRatio,
    sy: pixelRatio,
    scaled: pixelRatio !== 1
  };
}

function scrollIntoView(element, spot) {
  var skipOverflowHiddenElements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var parent = element.offsetParent;

  if (!parent) {
    console.error("offsetParent is not set -- cannot scroll");
    return;
  }

  var offsetY = element.offsetTop + element.clientTop;
  var offsetX = element.offsetLeft + element.clientLeft;

  while (parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth || skipOverflowHiddenElements && getComputedStyle(parent).overflow === "hidden") {
    if (parent.dataset._scaleY) {
      offsetY /= parent.dataset._scaleY;
      offsetX /= parent.dataset._scaleX;
    }

    offsetY += parent.offsetTop;
    offsetX += parent.offsetLeft;
    parent = parent.offsetParent;

    if (!parent) {
      return;
    }
  }

  if (spot) {
    if (spot.top !== undefined) {
      offsetY += spot.top;
    }

    if (spot.left !== undefined) {
      offsetX += spot.left;
      parent.scrollLeft = offsetX;
    }
  }

  parent.scrollTop = offsetY;
}

function watchScroll(viewAreaElement, callback) {
  var debounceScroll = function debounceScroll(evt) {
    if (rAF) {
      return;
    }

    rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
      rAF = null;
      var currentX = viewAreaElement.scrollLeft;
      var lastX = state.lastX;

      if (currentX !== lastX) {
        state.right = currentX > lastX;
      }

      state.lastX = currentX;
      var currentY = viewAreaElement.scrollTop;
      var lastY = state.lastY;

      if (currentY !== lastY) {
        state.down = currentY > lastY;
      }

      state.lastY = currentY;
      callback(state);
    });
  };

  var state = {
    right: true,
    down: true,
    lastX: viewAreaElement.scrollLeft,
    lastY: viewAreaElement.scrollTop,
    _eventHandler: debounceScroll
  };
  var rAF = null;
  viewAreaElement.addEventListener("scroll", debounceScroll, true);
  return state;
}

function parseQueryString(query) {
  var parts = query.split("&");
  var params = Object.create(null);

  for (var i = 0, ii = parts.length; i < ii; ++i) {
    var param = parts[i].split("=");
    var key = param[0].toLowerCase();
    var value = param.length > 1 ? param[1] : null;
    params[decodeURIComponent(key)] = decodeURIComponent(value);
  }

  return params;
}

function binarySearchFirstItem(items, condition) {
  var minIndex = 0;
  var maxIndex = items.length - 1;

  if (maxIndex < 0 || !condition(items[maxIndex])) {
    return items.length;
  }

  if (condition(items[minIndex])) {
    return minIndex;
  }

  while (minIndex < maxIndex) {
    var currentIndex = minIndex + maxIndex >> 1;
    var currentItem = items[currentIndex];

    if (condition(currentItem)) {
      maxIndex = currentIndex;
    } else {
      minIndex = currentIndex + 1;
    }
  }

  return minIndex;
}

function approximateFraction(x) {
  if (Math.floor(x) === x) {
    return [x, 1];
  }

  var xinv = 1 / x;
  var limit = 8;

  if (xinv > limit) {
    return [1, limit];
  } else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }

  var x_ = x > 1 ? xinv : x;
  var a = 0,
      b = 1,
      c = 1,
      d = 1;

  while (true) {
    var p = a + c,
        q = b + d;

    if (q > limit) {
      break;
    }

    if (x_ <= p / q) {
      c = p;
      d = q;
    } else {
      a = p;
      b = q;
    }
  }

  var result;

  if (x_ - a / b < c / d - x_) {
    result = x_ === x ? [a, b] : [b, a];
  } else {
    result = x_ === x ? [c, d] : [d, c];
  }

  return result;
}

function roundToDivide(x, div) {
  var r = x % div;
  return r === 0 ? x : Math.round(x - r + div);
}

function getPageSizeInches(_ref) {
  var view = _ref.view,
      userUnit = _ref.userUnit,
      rotate = _ref.rotate;

  var _view = _slicedToArray(view, 4),
      x1 = _view[0],
      y1 = _view[1],
      x2 = _view[2],
      y2 = _view[3];

  var changeOrientation = rotate % 180 !== 0;
  var width = (x2 - x1) / 72 * userUnit;
  var height = (y2 - y1) / 72 * userUnit;
  return {
    width: changeOrientation ? height : width,
    height: changeOrientation ? width : height
  };
}

function backtrackBeforeAllVisibleElements(index, views, top) {
  if (index < 2) {
    return index;
  }

  var elt = views[index].div;
  var pageTop = elt.offsetTop + elt.clientTop;

  if (pageTop >= top) {
    elt = views[index - 1].div;
    pageTop = elt.offsetTop + elt.clientTop;
  }

  for (var i = index - 2; i >= 0; --i) {
    elt = views[i].div;

    if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
      break;
    }

    index = i;
  }

  return index;
}

function getVisibleElements(scrollEl, views) {
  var sortByVisibility = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var horizontal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var top = scrollEl.scrollTop,
      bottom = top + scrollEl.clientHeight;
  var left = scrollEl.scrollLeft,
      right = left + scrollEl.clientWidth;

  function isElementBottomAfterViewTop(view) {
    var element = view.div;
    var elementBottom = element.offsetTop + element.clientTop + element.clientHeight;
    return elementBottom > top;
  }

  function isElementRightAfterViewLeft(view) {
    var element = view.div;
    var elementRight = element.offsetLeft + element.clientLeft + element.clientWidth;
    return elementRight > left;
  }

  var visible = [],
      numViews = views.length;
  var firstVisibleElementInd = numViews === 0 ? 0 : binarySearchFirstItem(views, horizontal ? isElementRightAfterViewLeft : isElementBottomAfterViewTop);

  if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
    firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views, top);
  }

  var lastEdge = horizontal ? right : -1;

  for (var i = firstVisibleElementInd; i < numViews; i++) {
    var view = views[i],
        element = view.div;
    var currentWidth = element.offsetLeft + element.clientLeft;
    var currentHeight = element.offsetTop + element.clientTop;
    var viewWidth = element.clientWidth,
        viewHeight = element.clientHeight;
    var viewRight = currentWidth + viewWidth;
    var viewBottom = currentHeight + viewHeight;

    if (lastEdge === -1) {
      if (viewBottom >= bottom) {
        lastEdge = viewBottom;
      }
    } else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
      break;
    }

    if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
      continue;
    }

    var hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
    var hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
    var percent = (viewHeight - hiddenHeight) * (viewWidth - hiddenWidth) * 100 / viewHeight / viewWidth | 0;
    visible.push({
      id: view.id,
      x: currentWidth,
      y: currentHeight,
      view: view,
      percent: percent
    });
  }

  var first = visible[0],
      last = visible[visible.length - 1];

  if (sortByVisibility) {
    visible.sort(function (a, b) {
      var pc = a.percent - b.percent;

      if (Math.abs(pc) > 0.001) {
        return -pc;
      }

      return a.id - b.id;
    });
  }

  return {
    first: first,
    last: last,
    views: visible
  };
}

function noContextMenuHandler(evt) {
  evt.preventDefault();
}

function isDataSchema(url) {
  var i = 0;
  var ii = url.length;

  while (i < ii && url[i].trim() === "") {
    i++;
  }

  return url.substring(i, i + 5).toLowerCase() === "data:";
}

function getPDFFileNameFromURL(url) {
  var defaultFilename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "document.pdf";

  if (typeof url !== "string") {
    return defaultFilename;
  }

  if (isDataSchema(url)) {
    console.warn("getPDFFileNameFromURL: " + 'ignoring "data:" URL for performance reasons.');
    return defaultFilename;
  }

  var reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
  var reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
  var splitURI = reURI.exec(url);
  var suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);

  if (suggestedFilename) {
    suggestedFilename = suggestedFilename[0];

    if (suggestedFilename.includes("%")) {
      try {
        suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
      } catch (ex) {}
    }
  }

  return suggestedFilename || defaultFilename;
}

function normalizeWheelEventDirection(evt) {
  var delta = Math.sqrt(evt.deltaX * evt.deltaX + evt.deltaY * evt.deltaY);
  var angle = Math.atan2(evt.deltaY, evt.deltaX);

  if (-0.25 * Math.PI < angle && angle < 0.75 * Math.PI) {
    delta = -delta;
  }

  return delta;
}

function normalizeWheelEventDelta(evt) {
  var delta = normalizeWheelEventDirection(evt);
  var MOUSE_DOM_DELTA_PIXEL_MODE = 0;
  var MOUSE_DOM_DELTA_LINE_MODE = 1;
  var MOUSE_PIXELS_PER_LINE = 30;
  var MOUSE_LINES_PER_PAGE = 30;

  if (evt.deltaMode === MOUSE_DOM_DELTA_PIXEL_MODE) {
    delta /= MOUSE_PIXELS_PER_LINE * MOUSE_LINES_PER_PAGE;
  } else if (evt.deltaMode === MOUSE_DOM_DELTA_LINE_MODE) {
    delta /= MOUSE_LINES_PER_PAGE;
  }

  return delta;
}

function isValidRotation(angle) {
  return Number.isInteger(angle) && angle % 90 === 0;
}

function isValidScrollMode(mode) {
  return Number.isInteger(mode) && Object.values(ScrollMode).includes(mode) && mode !== ScrollMode.UNKNOWN;
}

function isValidSpreadMode(mode) {
  return Number.isInteger(mode) && Object.values(SpreadMode).includes(mode) && mode !== SpreadMode.UNKNOWN;
}

function isPortraitOrientation(size) {
  return size.width <= size.height;
}

var WaitOnType = {
  EVENT: "event",
  TIMEOUT: "timeout"
};
exports.WaitOnType = WaitOnType;

function waitOnEventOrTimeout(_ref2) {
  var target = _ref2.target,
      name = _ref2.name,
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay;
  return new Promise(function (resolve, reject) {
    if (_typeof(target) !== "object" || !(name && typeof name === "string") || !(Number.isInteger(delay) && delay >= 0)) {
      throw new Error("waitOnEventOrTimeout - invalid parameters.");
    }

    function handler(type) {
      if (target instanceof EventBus) {
        target._off(name, eventHandler);
      } else {
        target.removeEventListener(name, eventHandler);
      }

      if (timeout) {
        clearTimeout(timeout);
      }

      resolve(type);
    }

    var eventHandler = handler.bind(null, WaitOnType.EVENT);

    if (target instanceof EventBus) {
      target._on(name, eventHandler);
    } else {
      target.addEventListener(name, eventHandler);
    }

    var timeoutHandler = handler.bind(null, WaitOnType.TIMEOUT);
    var timeout = setTimeout(timeoutHandler, delay);
  });
}

var animationStarted = new Promise(function (resolve) {
  window.requestAnimationFrame(resolve);
});
exports.animationStarted = animationStarted;

function dispatchDOMEvent(eventName) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  throw new Error("Not implemented: dispatchDOMEvent");
}

var EventBus = /*#__PURE__*/function () {
  function EventBus(options) {
    _classCallCheck(this, EventBus);

    this._listeners = Object.create(null);
  }

  _createClass(EventBus, [{
    key: "on",
    value: function on(eventName, listener) {
      this._on(eventName, listener, {
        external: true
      });
    }
  }, {
    key: "off",
    value: function off(eventName, listener) {
      this._off(eventName, listener, {
        external: true
      });
    }
  }, {
    key: "dispatch",
    value: function dispatch(eventName) {
      var eventListeners = this._listeners[eventName];

      if (!eventListeners || eventListeners.length === 0) {
        return;
      }

      var args = Array.prototype.slice.call(arguments, 1);
      var externalListeners;
      eventListeners.slice(0).forEach(function (_ref3) {
        var listener = _ref3.listener,
            external = _ref3.external;

        if (external) {
          if (!externalListeners) {
            externalListeners = [];
          }

          externalListeners.push(listener);
          return;
        }

        listener.apply(null, args);
      });

      if (externalListeners) {
        externalListeners.forEach(function (listener) {
          listener.apply(null, args);
        });
        externalListeners = null;
      }
    }
  }, {
    key: "_on",
    value: function _on(eventName, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var eventListeners = this._listeners[eventName];

      if (!eventListeners) {
        this._listeners[eventName] = eventListeners = [];
      }

      eventListeners.push({
        listener: listener,
        external: (options && options.external) === true
      });
    }
  }, {
    key: "_off",
    value: function _off(eventName, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var eventListeners = this._listeners[eventName];

      if (!eventListeners) {
        return;
      }

      for (var i = 0, ii = eventListeners.length; i < ii; i++) {
        if (eventListeners[i].listener === listener) {
          eventListeners.splice(i, 1);
          return;
        }
      }
    }
  }]);

  return EventBus;
}();

exports.EventBus = EventBus;

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}

var ProgressBar = /*#__PURE__*/function () {
  function ProgressBar(id) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        height = _ref4.height,
        width = _ref4.width,
        units = _ref4.units;

    _classCallCheck(this, ProgressBar);

    this.visible = true;
    this.div = document.querySelector(id + " .progress");
    this.bar = this.div.parentNode;
    this.height = height || 100;
    this.width = width || 100;
    this.units = units || "%";
    this.div.style.height = this.height + this.units;
    this.percent = 0;
  }

  _createClass(ProgressBar, [{
    key: "_updateBar",
    value: function _updateBar() {
      if (this._indeterminate) {
        this.div.classList.add("indeterminate");
        this.div.style.width = this.width + this.units;
        return;
      }

      this.div.classList.remove("indeterminate");
      var progressSize = this.width * this._percent / 100;
      this.div.style.width = progressSize + this.units;
    }
  }, {
    key: "setWidth",
    value: function setWidth(viewer) {
      if (!viewer) {
        return;
      }

      var container = viewer.parentNode;
      var scrollbarWidth = container.offsetWidth - viewer.offsetWidth;

      if (scrollbarWidth > 0) {
        this.bar.style.width = "calc(100% - ".concat(scrollbarWidth, "px)");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.visible) {
        return;
      }

      this.visible = false;
      this.bar.classList.add("hidden");
      document.body.classList.remove("loadingInProgress");
    }
  }, {
    key: "show",
    value: function show() {
      if (this.visible) {
        return;
      }

      this.visible = true;
      document.body.classList.add("loadingInProgress");
      this.bar.classList.remove("hidden");
    }
  }, {
    key: "percent",
    get: function get() {
      return this._percent;
    },
    set: function set(val) {
      this._indeterminate = isNaN(val);
      this._percent = clamp(val, 0, 100);

      this._updateBar();
    }
  }]);

  return ProgressBar;
}();

exports.ProgressBar = ProgressBar;

function moveToEndOfArray(arr, condition) {
  var moved = [],
      len = arr.length;
  var write = 0;

  for (var read = 0; read < len; ++read) {
    if (condition(arr[read])) {
      moved.push(arr[read]);
    } else {
      arr[write] = arr[read];
      ++write;
    }
  }

  for (var _read = 0; write < len; ++_read, ++write) {
    arr[write] = moved[_read];
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = __w_pdfjs_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap;

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator;

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      return info;
    }

    context.delegate = null;
    return ContinueSentinel;
  }

  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
  return exports;
}(( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __w_pdfjs_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = [];
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleLinkService = exports.PDFLinkService = void 0;

var _ui_utils = __w_pdfjs_require__(3);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PDFLinkService = /*#__PURE__*/function () {
  function PDFLinkService() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        eventBus = _ref.eventBus,
        _ref$externalLinkTarg = _ref.externalLinkTarget,
        externalLinkTarget = _ref$externalLinkTarg === void 0 ? null : _ref$externalLinkTarg,
        _ref$externalLinkRel = _ref.externalLinkRel,
        externalLinkRel = _ref$externalLinkRel === void 0 ? null : _ref$externalLinkRel,
        _ref$externalLinkEnab = _ref.externalLinkEnabled,
        externalLinkEnabled = _ref$externalLinkEnab === void 0 ? true : _ref$externalLinkEnab,
        _ref$ignoreDestinatio = _ref.ignoreDestinationZoom,
        ignoreDestinationZoom = _ref$ignoreDestinatio === void 0 ? false : _ref$ignoreDestinatio;

    _classCallCheck(this, PDFLinkService);

    this.eventBus = eventBus;
    this.externalLinkTarget = externalLinkTarget;
    this.externalLinkRel = externalLinkRel;
    this.externalLinkEnabled = externalLinkEnabled;
    this._ignoreDestinationZoom = ignoreDestinationZoom;
    this.baseUrl = null;
    this.pdfDocument = null;
    this.pdfViewer = null;
    this.pdfHistory = null;
    this._pagesRefCache = null;
  }

  _createClass(PDFLinkService, [{
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      var baseUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.baseUrl = baseUrl;
      this.pdfDocument = pdfDocument;
      this._pagesRefCache = Object.create(null);
    }
  }, {
    key: "setViewer",
    value: function setViewer(pdfViewer) {
      this.pdfViewer = pdfViewer;
    }
  }, {
    key: "setHistory",
    value: function setHistory(pdfHistory) {
      this.pdfHistory = pdfHistory;
    }
  }, {
    key: "navigateTo",
    value: function navigateTo(dest) {
      var _this = this;

      var goToDestination = function goToDestination(_ref2) {
        var namedDest = _ref2.namedDest,
            explicitDest = _ref2.explicitDest;
        var destRef = explicitDest[0];
        var pageNumber;

        if (destRef instanceof Object) {
          pageNumber = _this._cachedPageNumber(destRef);

          if (pageNumber === null) {
            _this.pdfDocument.getPageIndex(destRef).then(function (pageIndex) {
              _this.cachePageRef(pageIndex + 1, destRef);

              goToDestination({
                namedDest: namedDest,
                explicitDest: explicitDest
              });
            })["catch"](function () {
              console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid page reference, for dest=\"".concat(dest, "\"."));
            });

            return;
          }
        } else if (Number.isInteger(destRef)) {
          pageNumber = destRef + 1;
        } else {
          console.error("PDFLinkService.navigateTo: \"".concat(destRef, "\" is not ") + "a valid destination reference, for dest=\"".concat(dest, "\"."));
          return;
        }

        if (!pageNumber || pageNumber < 1 || pageNumber > _this.pagesCount) {
          console.error("PDFLinkService.navigateTo: \"".concat(pageNumber, "\" is not ") + "a valid page number, for dest=\"".concat(dest, "\"."));
          return;
        }

        if (_this.pdfHistory) {
          _this.pdfHistory.pushCurrentPosition();

          _this.pdfHistory.push({
            namedDest: namedDest,
            explicitDest: explicitDest,
            pageNumber: pageNumber
          });
        }

        _this.pdfViewer.scrollPageIntoView({
          pageNumber: pageNumber,
          destArray: explicitDest,
          ignoreDestinationZoom: _this._ignoreDestinationZoom
        });
      };

      new Promise(function (resolve, reject) {
        if (typeof dest === "string") {
          _this.pdfDocument.getDestination(dest).then(function (destArray) {
            resolve({
              namedDest: dest,
              explicitDest: destArray
            });
          });

          return;
        }

        resolve({
          namedDest: "",
          explicitDest: dest
        });
      }).then(function (data) {
        if (!Array.isArray(data.explicitDest)) {
          console.error("PDFLinkService.navigateTo: \"".concat(data.explicitDest, "\" is") + " not a valid destination array, for dest=\"".concat(dest, "\"."));
          return;
        }

        goToDestination(data);
      });
    }
  }, {
    key: "getDestinationHash",
    value: function getDestinationHash(dest) {
      if (typeof dest === "string") {
        return this.getAnchorUrl("#" + escape(dest));
      }

      if (Array.isArray(dest)) {
        var str = JSON.stringify(dest);
        return this.getAnchorUrl("#" + escape(str));
      }

      return this.getAnchorUrl("");
    }
  }, {
    key: "getAnchorUrl",
    value: function getAnchorUrl(anchor) {
      return (this.baseUrl || "") + anchor;
    }
  }, {
    key: "setHash",
    value: function setHash(hash) {
      var pageNumber, dest;

      if (hash.includes("=")) {
        var params = (0, _ui_utils.parseQueryString)(hash);

        if ("search" in params) {
          this.eventBus.dispatch("findfromurlhash", {
            source: this,
            query: params.search.replace(/"/g, ""),
            phraseSearch: params.phrase === "true"
          });
        }

        if ("page" in params) {
          pageNumber = params.page | 0 || 1;
        }

        if ("zoom" in params) {
          var zoomArgs = params.zoom.split(",");
          var zoomArg = zoomArgs[0];
          var zoomArgNumber = parseFloat(zoomArg);

          if (!zoomArg.includes("Fit")) {
            dest = [null, {
              name: "XYZ"
            }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null, zoomArgs.length > 2 ? zoomArgs[2] | 0 : null, zoomArgNumber ? zoomArgNumber / 100 : zoomArg];
          } else {
            if (zoomArg === "Fit" || zoomArg === "FitB") {
              dest = [null, {
                name: zoomArg
              }];
            } else if (zoomArg === "FitH" || zoomArg === "FitBH" || zoomArg === "FitV" || zoomArg === "FitBV") {
              dest = [null, {
                name: zoomArg
              }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
            } else if (zoomArg === "FitR") {
              if (zoomArgs.length !== 5) {
                console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
              } else {
                dest = [null, {
                  name: zoomArg
                }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
              }
            } else {
              console.error("PDFLinkService.setHash: \"".concat(zoomArg, "\" is not ") + "a valid zoom value.");
            }
          }
        }

        if (dest) {
          this.pdfViewer.scrollPageIntoView({
            pageNumber: pageNumber || this.page,
            destArray: dest,
            allowNegativeOffset: true
          });
        } else if (pageNumber) {
          this.page = pageNumber;
        }

        if ("pagemode" in params) {
          this.eventBus.dispatch("pagemode", {
            source: this,
            mode: params.pagemode
          });
        }

        if ("nameddest" in params) {
          this.navigateTo(params.nameddest);
        }
      } else {
        dest = unescape(hash);

        try {
          dest = JSON.parse(dest);

          if (!Array.isArray(dest)) {
            dest = dest.toString();
          }
        } catch (ex) {}

        if (typeof dest === "string" || isValidExplicitDestination(dest)) {
          this.navigateTo(dest);
          return;
        }

        console.error("PDFLinkService.setHash: \"".concat(unescape(hash), "\" is not ") + "a valid destination.");
      }
    }
  }, {
    key: "executeNamedAction",
    value: function executeNamedAction(action) {
      switch (action) {
        case "GoBack":
          if (this.pdfHistory) {
            this.pdfHistory.back();
          }

          break;

        case "GoForward":
          if (this.pdfHistory) {
            this.pdfHistory.forward();
          }

          break;

        case "NextPage":
          if (this.page < this.pagesCount) {
            this.page++;
          }

          break;

        case "PrevPage":
          if (this.page > 1) {
            this.page--;
          }

          break;

        case "LastPage":
          this.page = this.pagesCount;
          break;

        case "FirstPage":
          this.page = 1;
          break;

        default:
          break;
      }

      this.eventBus.dispatch("namedaction", {
        source: this,
        action: action
      });
    }
  }, {
    key: "cachePageRef",
    value: function cachePageRef(pageNum, pageRef) {
      if (!pageRef) {
        return;
      }

      var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
      this._pagesRefCache[refStr] = pageNum;
    }
  }, {
    key: "_cachedPageNumber",
    value: function _cachedPageNumber(pageRef) {
      var refStr = pageRef.gen === 0 ? "".concat(pageRef.num, "R") : "".concat(pageRef.num, "R").concat(pageRef.gen);
      return this._pagesRefCache && this._pagesRefCache[refStr] || null;
    }
  }, {
    key: "isPageVisible",
    value: function isPageVisible(pageNumber) {
      return this.pdfViewer.isPageVisible(pageNumber);
    }
  }, {
    key: "pagesCount",
    get: function get() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
  }, {
    key: "page",
    get: function get() {
      return this.pdfViewer.currentPageNumber;
    },
    set: function set(value) {
      this.pdfViewer.currentPageNumber = value;
    }
  }, {
    key: "rotation",
    get: function get() {
      return this.pdfViewer.pagesRotation;
    },
    set: function set(value) {
      this.pdfViewer.pagesRotation = value;
    }
  }]);

  return PDFLinkService;
}();

exports.PDFLinkService = PDFLinkService;

function isValidExplicitDestination(dest) {
  if (!Array.isArray(dest)) {
    return false;
  }

  var destLength = dest.length;

  if (destLength < 2) {
    return false;
  }

  var page = dest[0];

  if (!(_typeof(page) === "object" && Number.isInteger(page.num) && Number.isInteger(page.gen)) && !(Number.isInteger(page) && page >= 0)) {
    return false;
  }

  var zoom = dest[1];

  if (!(_typeof(zoom) === "object" && typeof zoom.name === "string")) {
    return false;
  }

  var allowNull = true;

  switch (zoom.name) {
    case "XYZ":
      if (destLength !== 5) {
        return false;
      }

      break;

    case "Fit":
    case "FitB":
      return destLength === 2;

    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (destLength !== 3) {
        return false;
      }

      break;

    case "FitR":
      if (destLength !== 6) {
        return false;
      }

      allowNull = false;
      break;

    default:
      return false;
  }

  for (var i = 2; i < destLength; i++) {
    var param = dest[i];

    if (!(typeof param === "number" || allowNull && param === null)) {
      return false;
    }
  }

  return true;
}

var SimpleLinkService = /*#__PURE__*/function () {
  function SimpleLinkService() {
    _classCallCheck(this, SimpleLinkService);

    this.externalLinkTarget = null;
    this.externalLinkRel = null;
    this.externalLinkEnabled = true;
    this._ignoreDestinationZoom = false;
  }

  _createClass(SimpleLinkService, [{
    key: "navigateTo",
    value: function navigateTo(dest) {}
  }, {
    key: "getDestinationHash",
    value: function getDestinationHash(dest) {
      return "#";
    }
  }, {
    key: "getAnchorUrl",
    value: function getAnchorUrl(hash) {
      return "#";
    }
  }, {
    key: "setHash",
    value: function setHash(hash) {}
  }, {
    key: "executeNamedAction",
    value: function executeNamedAction(action) {}
  }, {
    key: "cachePageRef",
    value: function cachePageRef(pageNum, pageRef) {}
  }, {
    key: "isPageVisible",
    value: function isPageVisible(pageNumber) {
      return true;
    }
  }, {
    key: "pagesCount",
    get: function get() {
      return 0;
    }
  }, {
    key: "page",
    get: function get() {
      return 0;
    },
    set: function set(value) {}
  }, {
    key: "rotation",
    get: function get() {
      return 0;
    },
    set: function set(value) {}
  }]);

  return SimpleLinkService;
}();

exports.SimpleLinkService = SimpleLinkService;

/***/ }),
/* 8 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultTextLayerFactory = exports.TextLayerBuilder = void 0;

var _pdfjsLib = __w_pdfjs_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EXPAND_DIVS_TIMEOUT = 300;

var TextLayerBuilder = /*#__PURE__*/function () {
  function TextLayerBuilder(_ref) {
    var textLayerDiv = _ref.textLayerDiv,
        eventBus = _ref.eventBus,
        pageIndex = _ref.pageIndex,
        viewport = _ref.viewport,
        _ref$findController = _ref.findController,
        findController = _ref$findController === void 0 ? null : _ref$findController,
        _ref$enhanceTextSelec = _ref.enhanceTextSelection,
        enhanceTextSelection = _ref$enhanceTextSelec === void 0 ? false : _ref$enhanceTextSelec;

    _classCallCheck(this, TextLayerBuilder);

    this.textLayerDiv = textLayerDiv;
    this.eventBus = eventBus;
    this.textContent = null;
    this.textContentItemsStr = [];
    this.textContentStream = null;
    this.renderingDone = false;
    this.pageIdx = pageIndex;
    this.pageNumber = this.pageIdx + 1;
    this.matches = [];
    this.viewport = viewport;
    this.textDivs = [];
    this.findController = findController;
    this.textLayerRenderTask = null;
    this.enhanceTextSelection = enhanceTextSelection;
    this._onUpdateTextLayerMatches = null;

    this._bindMouse();
  }

  _createClass(TextLayerBuilder, [{
    key: "_finishRendering",
    value: function _finishRendering() {
      this.renderingDone = true;

      if (!this.enhanceTextSelection) {
        var endOfContent = document.createElement("div");
        endOfContent.className = "endOfContent";
        this.textLayerDiv.appendChild(endOfContent);
      }

      this.eventBus.dispatch("textlayerrendered", {
        source: this,
        pageNumber: this.pageNumber,
        numTextDivs: this.textDivs.length
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!(this.textContent || this.textContentStream) || this.renderingDone) {
        return;
      }

      this.cancel();
      this.textDivs = [];
      var textLayerFrag = document.createDocumentFragment();
      this.textLayerRenderTask = (0, _pdfjsLib.renderTextLayer)({
        textContent: this.textContent,
        textContentStream: this.textContentStream,
        container: textLayerFrag,
        viewport: this.viewport,
        textDivs: this.textDivs,
        textContentItemsStr: this.textContentItemsStr,
        timeout: timeout,
        enhanceTextSelection: this.enhanceTextSelection
      });
      this.textLayerRenderTask.promise.then(function () {
        _this.textLayerDiv.appendChild(textLayerFrag);

        _this._finishRendering();

        _this._updateMatches();
      }, function (reason) {});

      if (!this._onUpdateTextLayerMatches) {
        this._onUpdateTextLayerMatches = function (evt) {
          if (evt.pageIndex === _this.pageIdx || evt.pageIndex === -1) {
            _this._updateMatches();
          }
        };

        this.eventBus._on("updatetextlayermatches", this._onUpdateTextLayerMatches);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.textLayerRenderTask) {
        this.textLayerRenderTask.cancel();
        this.textLayerRenderTask = null;
      }

      if (this._onUpdateTextLayerMatches) {
        this.eventBus._off("updatetextlayermatches", this._onUpdateTextLayerMatches);

        this._onUpdateTextLayerMatches = null;
      }
    }
  }, {
    key: "setTextContentStream",
    value: function setTextContentStream(readableStream) {
      this.cancel();
      this.textContentStream = readableStream;
    }
  }, {
    key: "setTextContent",
    value: function setTextContent(textContent) {
      this.cancel();
      this.textContent = textContent;
    }
  }, {
    key: "_convertMatches",
    value: function _convertMatches(matches, matchesLength) {
      if (!matches) {
        return [];
      }

      var findController = this.findController,
          textContentItemsStr = this.textContentItemsStr;
      var i = 0,
          iIndex = 0;
      var end = textContentItemsStr.length - 1;
      var queryLen = findController.state.query.length;
      var result = [];

      for (var m = 0, mm = matches.length; m < mm; m++) {
        var matchIdx = matches[m];

        while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
          iIndex += textContentItemsStr[i].length;
          i++;
        }

        if (i === textContentItemsStr.length) {
          console.error("Could not find a matching mapping");
        }

        var match = {
          begin: {
            divIdx: i,
            offset: matchIdx - iIndex
          }
        };

        if (matchesLength) {
          matchIdx += matchesLength[m];
        } else {
          matchIdx += queryLen;
        }

        while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
          iIndex += textContentItemsStr[i].length;
          i++;
        }

        match.end = {
          divIdx: i,
          offset: matchIdx - iIndex
        };
        result.push(match);
      }

      return result;
    }
  }, {
    key: "_renderMatches",
    value: function _renderMatches(matches) {
      if (matches.length === 0) {
        return;
      }

      var findController = this.findController,
          pageIdx = this.pageIdx,
          textContentItemsStr = this.textContentItemsStr,
          textDivs = this.textDivs;
      var isSelectedPage = pageIdx === findController.selected.pageIdx;
      var selectedMatchIdx = findController.selected.matchIdx;
      var highlightAll = findController.state.highlightAll;
      var prevEnd = null;
      var infinity = {
        divIdx: -1,
        offset: undefined
      };

      function beginText(begin, className) {
        var divIdx = begin.divIdx;
        textDivs[divIdx].textContent = "";
        appendTextToDiv(divIdx, 0, begin.offset, className);
      }

      function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
        var div = textDivs[divIdx];
        var content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
        var node = document.createTextNode(content);

        if (className) {
          var span = document.createElement("span");
          span.className = className;
          span.appendChild(node);
          div.appendChild(span);
          return;
        }

        div.appendChild(node);
      }

      var i0 = selectedMatchIdx,
          i1 = i0 + 1;

      if (highlightAll) {
        i0 = 0;
        i1 = matches.length;
      } else if (!isSelectedPage) {
        return;
      }

      for (var i = i0; i < i1; i++) {
        var match = matches[i];
        var begin = match.begin;
        var end = match.end;
        var isSelected = isSelectedPage && i === selectedMatchIdx;
        var highlightSuffix = isSelected ? " selected" : "";

        if (isSelected) {
          findController.scrollMatchIntoView({
            element: textDivs[begin.divIdx],
            pageIndex: pageIdx,
            matchIndex: selectedMatchIdx
          });
        }

        if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
          if (prevEnd !== null) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
          }

          beginText(begin);
        } else {
          appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
        }

        if (begin.divIdx === end.divIdx) {
          appendTextToDiv(begin.divIdx, begin.offset, end.offset, "highlight" + highlightSuffix);
        } else {
          appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, "highlight begin" + highlightSuffix);

          for (var n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
            textDivs[n0].className = "highlight middle" + highlightSuffix;
          }

          beginText(end, "highlight end" + highlightSuffix);
        }

        prevEnd = end;
      }

      if (prevEnd) {
        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
      }
    }
  }, {
    key: "_updateMatches",
    value: function _updateMatches() {
      if (!this.renderingDone) {
        return;
      }

      var findController = this.findController,
          matches = this.matches,
          pageIdx = this.pageIdx,
          textContentItemsStr = this.textContentItemsStr,
          textDivs = this.textDivs;
      var clearedUntilDivIdx = -1;

      for (var i = 0, ii = matches.length; i < ii; i++) {
        var match = matches[i];
        var begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);

        for (var n = begin, end = match.end.divIdx; n <= end; n++) {
          var div = textDivs[n];
          div.textContent = textContentItemsStr[n];
          div.className = "";
        }

        clearedUntilDivIdx = match.end.divIdx + 1;
      }

      if (!findController || !findController.highlightMatches) {
        return;
      }

      var pageMatches = findController.pageMatches[pageIdx] || null;
      var pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
      this.matches = this._convertMatches(pageMatches, pageMatchesLength);

      this._renderMatches(this.matches);
    }
  }, {
    key: "_bindMouse",
    value: function _bindMouse() {
      var _this2 = this;

      var div = this.textLayerDiv;
      var expandDivsTimer = null;
      div.addEventListener("mousedown", function (evt) {
        if (_this2.enhanceTextSelection && _this2.textLayerRenderTask) {
          _this2.textLayerRenderTask.expandTextDivs(true);

          if (expandDivsTimer) {
            clearTimeout(expandDivsTimer);
            expandDivsTimer = null;
          }

          return;
        }

        var end = div.querySelector(".endOfContent");

        if (!end) {
          return;
        }

        var adjustTop = evt.target !== div;
        adjustTop = adjustTop && window.getComputedStyle(end).getPropertyValue("-moz-user-select") !== "none";

        if (adjustTop) {
          var divBounds = div.getBoundingClientRect();
          var r = Math.max(0, (evt.pageY - divBounds.top) / divBounds.height);
          end.style.top = (r * 100).toFixed(2) + "%";
        }

        end.classList.add("active");
      });
      div.addEventListener("mouseup", function () {
        if (_this2.enhanceTextSelection && _this2.textLayerRenderTask) {
          expandDivsTimer = setTimeout(function () {
            if (_this2.textLayerRenderTask) {
              _this2.textLayerRenderTask.expandTextDivs(false);
            }

            expandDivsTimer = null;
          }, EXPAND_DIVS_TIMEOUT);
          return;
        }

        var end = div.querySelector(".endOfContent");

        if (!end) {
          return;
        }

        end.style.top = "";
        end.classList.remove("active");
      });
    }
  }]);

  return TextLayerBuilder;
}();

exports.TextLayerBuilder = TextLayerBuilder;

var DefaultTextLayerFactory = /*#__PURE__*/function () {
  function DefaultTextLayerFactory() {
    _classCallCheck(this, DefaultTextLayerFactory);
  }

  _createClass(DefaultTextLayerFactory, [{
    key: "createTextLayerBuilder",
    value: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
      var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var eventBus = arguments.length > 4 ? arguments[4] : undefined;
      return new TextLayerBuilder({
        textLayerDiv: textLayerDiv,
        pageIndex: pageIndex,
        viewport: viewport,
        enhanceTextSelection: enhanceTextSelection,
        eventBus: eventBus
      });
    }
  }]);

  return DefaultTextLayerFactory;
}();

exports.DefaultTextLayerFactory = DefaultTextLayerFactory;

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadManager = void 0;

var _pdfjsLib = __w_pdfjs_require__(2);

var _viewer_compatibility = __w_pdfjs_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

;

function _download(blobUrl, filename) {
  var a = document.createElement("a");

  if (!a.click) {
    throw new Error('DownloadManager: "a.click()" is not supported.');
  }

  a.href = blobUrl;
  a.target = "_parent";

  if ("download" in a) {
    a.download = filename;
  }

  (document.body || document.documentElement).appendChild(a);
  a.click();
  a.remove();
}

var DownloadManager = /*#__PURE__*/function () {
  function DownloadManager() {
    _classCallCheck(this, DownloadManager);
  }

  _createClass(DownloadManager, [{
    key: "downloadUrl",
    value: function downloadUrl(url, filename) {
      if (!(0, _pdfjsLib.createValidAbsoluteUrl)(url, "http://example.com")) {
        return;
      }

      _download(url + "#pdfjs.action=download", filename);
    }
  }, {
    key: "downloadData",
    value: function downloadData(data, filename, contentType) {
      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(new Blob([data], {
          type: contentType
        }), filename);
        return;
      }

      var blobUrl = (0, _pdfjsLib.createObjectURL)(data, contentType, _viewer_compatibility.viewerCompatibilityParams.disableCreateObjectURL);

      _download(blobUrl, filename);
    }
  }, {
    key: "download",
    value: function download(blob, url, filename) {
      var sourceEventType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "download";

      if (navigator.msSaveBlob) {
        if (!navigator.msSaveBlob(blob, filename)) {
          this.downloadUrl(url, filename);
        }

        return;
      }

      if (_viewer_compatibility.viewerCompatibilityParams.disableCreateObjectURL) {
        this.downloadUrl(url, filename);
        return;
      }

      var blobUrl = URL.createObjectURL(blob);

      _download(blobUrl, filename);
    }
  }]);

  return DownloadManager;
}();

exports.DownloadManager = DownloadManager;

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewerCompatibilityParams = void 0;
var compatibilityParams = Object.create(null);
{
  var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
  var platform = typeof navigator !== "undefined" && navigator.platform || "";
  var maxTouchPoints = typeof navigator !== "undefined" && navigator.maxTouchPoints || 1;
  var isAndroid = /Android/.test(userAgent);
  var isIE = /Trident/.test(userAgent);
  var isIOS = /\b(iPad|iPhone|iPod)(?=;)/.test(userAgent) || platform === "MacIntel" && maxTouchPoints > 1;
  var isIOSChrome = /CriOS/.test(userAgent);

  (function checkOnBlobSupport() {
    if (isIE || isIOSChrome) {
      compatibilityParams.disableCreateObjectURL = true;
    }
  })();

  (function checkCanvasSizeLimitation() {
    if (isIOS || isAndroid) {
      compatibilityParams.maxCanvasPixels = 5242880;
    }
  })();
}
var viewerCompatibilityParams = Object.freeze(compatibilityParams);
exports.viewerCompatibilityParams = viewerCompatibilityParams;

/***/ }),
/* 11 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericL10n = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(4));

__w_pdfjs_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var webL10n = document.webL10n;

var GenericL10n = /*#__PURE__*/function () {
  function GenericL10n(lang) {
    _classCallCheck(this, GenericL10n);

    this._lang = lang;
    this._ready = new Promise(function (resolve, reject) {
      webL10n.setLanguage(lang, function () {
        resolve(webL10n);
      });
    });
  }

  _createClass(GenericL10n, [{
    key: "getLanguage",
    value: function () {
      var _getLanguage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var l10n;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._ready;

              case 2:
                l10n = _context.sent;
                return _context.abrupt("return", l10n.getLanguage());

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getLanguage() {
        return _getLanguage.apply(this, arguments);
      }

      return getLanguage;
    }()
  }, {
    key: "getDirection",
    value: function () {
      var _getDirection = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var l10n;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._ready;

              case 2:
                l10n = _context2.sent;
                return _context2.abrupt("return", l10n.getDirection());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getDirection() {
        return _getDirection.apply(this, arguments);
      }

      return getDirection;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(property, args, fallback) {
        var l10n;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._ready;

              case 2:
                l10n = _context3.sent;
                return _context3.abrupt("return", l10n.get(property, args, fallback));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function get(_x, _x2, _x3) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "translate",
    value: function () {
      var _translate = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(element) {
        var l10n;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._ready;

              case 2:
                l10n = _context4.sent;
                return _context4.abrupt("return", l10n.translate(element));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function translate(_x4) {
        return _translate.apply(this, arguments);
      }

      return translate;
    }()
  }]);

  return GenericL10n;
}();

exports.GenericL10n = GenericL10n;

/***/ }),
/* 12 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


document.webL10n = function (window, document, undefined) {
  var gL10nData = {};
  var gTextData = '';
  var gTextProp = 'textContent';
  var gLanguage = '';
  var gMacros = {};
  var gReadyState = 'loading';
  var gAsyncResourceLoading = true;

  function getL10nResourceLinks() {
    return document.querySelectorAll('link[type="application/l10n"]');
  }

  function getL10nDictionary() {
    var script = document.querySelector('script[type="application/l10n"]');
    return script ? JSON.parse(script.innerHTML) : null;
  }

  function getTranslatableChildren(element) {
    return element ? element.querySelectorAll('*[data-l10n-id]') : [];
  }

  function getL10nAttributes(element) {
    if (!element) return {};
    var l10nId = element.getAttribute('data-l10n-id');
    var l10nArgs = element.getAttribute('data-l10n-args');
    var args = {};

    if (l10nArgs) {
      try {
        args = JSON.parse(l10nArgs);
      } catch (e) {
        console.warn('could not parse arguments for #' + l10nId);
      }
    }

    return {
      id: l10nId,
      args: args
    };
  }

  function xhrLoadText(url, onSuccess, onFailure) {
    onSuccess = onSuccess || function _onSuccess(data) {};

    onFailure = onFailure || function _onFailure() {};

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, gAsyncResourceLoading);

    if (xhr.overrideMimeType) {
      xhr.overrideMimeType('text/plain; charset=utf-8');
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200 || xhr.status === 0) {
          onSuccess(xhr.responseText);
        } else {
          onFailure();
        }
      }
    };

    xhr.onerror = onFailure;
    xhr.ontimeout = onFailure;

    try {
      xhr.send(null);
    } catch (e) {
      onFailure();
    }
  }

  function parseResource(href, lang, successCallback, failureCallback) {
    var baseURL = href.replace(/[^\/]*$/, '') || './';

    function evalString(text) {
      if (text.lastIndexOf('\\') < 0) return text;
      return text.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\t/g, '\t').replace(/\\b/g, '\b').replace(/\\f/g, '\f').replace(/\\{/g, '{').replace(/\\}/g, '}').replace(/\\"/g, '"').replace(/\\'/g, "'");
    }

    function parseProperties(text, parsedPropertiesCallback) {
      var dictionary = {};
      var reBlank = /^\s*|\s*$/;
      var reComment = /^\s*#|^\s*$/;
      var reSection = /^\s*\[(.*)\]\s*$/;
      var reImport = /^\s*@import\s+url\((.*)\)\s*$/i;
      var reSplit = /^([^=\s]*)\s*=\s*(.+)$/;

      function parseRawLines(rawText, extendedSyntax, parsedRawLinesCallback) {
        var entries = rawText.replace(reBlank, '').split(/[\r\n]+/);
        var currentLang = '*';
        var genericLang = lang.split('-', 1)[0];
        var skipLang = false;
        var match = '';

        function nextEntry() {
          while (true) {
            if (!entries.length) {
              parsedRawLinesCallback();
              return;
            }

            var line = entries.shift();
            if (reComment.test(line)) continue;

            if (extendedSyntax) {
              match = reSection.exec(line);

              if (match) {
                currentLang = match[1].toLowerCase();
                skipLang = currentLang !== '*' && currentLang !== lang && currentLang !== genericLang;
                continue;
              } else if (skipLang) {
                continue;
              }

              match = reImport.exec(line);

              if (match) {
                loadImport(baseURL + match[1], nextEntry);
                return;
              }
            }

            var tmp = line.match(reSplit);

            if (tmp && tmp.length == 3) {
              dictionary[tmp[1]] = evalString(tmp[2]);
            }
          }
        }

        nextEntry();
      }

      function loadImport(url, callback) {
        xhrLoadText(url, function (content) {
          parseRawLines(content, false, callback);
        }, function () {
          console.warn(url + ' not found.');
          callback();
        });
      }

      parseRawLines(text, true, function () {
        parsedPropertiesCallback(dictionary);
      });
    }

    xhrLoadText(href, function (response) {
      gTextData += response;
      parseProperties(response, function (data) {
        for (var key in data) {
          var id,
              prop,
              index = key.lastIndexOf('.');

          if (index > 0) {
            id = key.substring(0, index);
            prop = key.substring(index + 1);
          } else {
            id = key;
            prop = gTextProp;
          }

          if (!gL10nData[id]) {
            gL10nData[id] = {};
          }

          gL10nData[id][prop] = data[key];
        }

        if (successCallback) {
          successCallback();
        }
      });
    }, failureCallback);
  }

  function loadLocale(lang, callback) {
    if (lang) {
      lang = lang.toLowerCase();
    }

    callback = callback || function _callback() {};

    clear();
    gLanguage = lang;
    var langLinks = getL10nResourceLinks();
    var langCount = langLinks.length;

    if (langCount === 0) {
      var dict = getL10nDictionary();

      if (dict && dict.locales && dict.default_locale) {
        console.log('using the embedded JSON directory, early way out');
        gL10nData = dict.locales[lang];

        if (!gL10nData) {
          var defaultLocale = dict.default_locale.toLowerCase();

          for (var anyCaseLang in dict.locales) {
            anyCaseLang = anyCaseLang.toLowerCase();

            if (anyCaseLang === lang) {
              gL10nData = dict.locales[lang];
              break;
            } else if (anyCaseLang === defaultLocale) {
              gL10nData = dict.locales[defaultLocale];
            }
          }
        }

        callback();
      } else {
        console.log('no resource to load, early way out');
      }

      gReadyState = 'complete';
      return;
    }

    var onResourceLoaded = null;
    var gResourceCount = 0;

    onResourceLoaded = function onResourceLoaded() {
      gResourceCount++;

      if (gResourceCount >= langCount) {
        callback();
        gReadyState = 'complete';
      }
    };

    function L10nResourceLink(link) {
      var href = link.href;

      this.load = function (lang, callback) {
        parseResource(href, lang, callback, function () {
          console.warn(href + ' not found.');
          console.warn('"' + lang + '" resource not found');
          gLanguage = '';
          callback();
        });
      };
    }

    for (var i = 0; i < langCount; i++) {
      var resource = new L10nResourceLink(langLinks[i]);
      resource.load(lang, onResourceLoaded);
    }
  }

  function clear() {
    gL10nData = {};
    gTextData = '';
    gLanguage = '';
  }

  function getPluralRules(lang) {
    var locales2rules = {
      'af': 3,
      'ak': 4,
      'am': 4,
      'ar': 1,
      'asa': 3,
      'az': 0,
      'be': 11,
      'bem': 3,
      'bez': 3,
      'bg': 3,
      'bh': 4,
      'bm': 0,
      'bn': 3,
      'bo': 0,
      'br': 20,
      'brx': 3,
      'bs': 11,
      'ca': 3,
      'cgg': 3,
      'chr': 3,
      'cs': 12,
      'cy': 17,
      'da': 3,
      'de': 3,
      'dv': 3,
      'dz': 0,
      'ee': 3,
      'el': 3,
      'en': 3,
      'eo': 3,
      'es': 3,
      'et': 3,
      'eu': 3,
      'fa': 0,
      'ff': 5,
      'fi': 3,
      'fil': 4,
      'fo': 3,
      'fr': 5,
      'fur': 3,
      'fy': 3,
      'ga': 8,
      'gd': 24,
      'gl': 3,
      'gsw': 3,
      'gu': 3,
      'guw': 4,
      'gv': 23,
      'ha': 3,
      'haw': 3,
      'he': 2,
      'hi': 4,
      'hr': 11,
      'hu': 0,
      'id': 0,
      'ig': 0,
      'ii': 0,
      'is': 3,
      'it': 3,
      'iu': 7,
      'ja': 0,
      'jmc': 3,
      'jv': 0,
      'ka': 0,
      'kab': 5,
      'kaj': 3,
      'kcg': 3,
      'kde': 0,
      'kea': 0,
      'kk': 3,
      'kl': 3,
      'km': 0,
      'kn': 0,
      'ko': 0,
      'ksb': 3,
      'ksh': 21,
      'ku': 3,
      'kw': 7,
      'lag': 18,
      'lb': 3,
      'lg': 3,
      'ln': 4,
      'lo': 0,
      'lt': 10,
      'lv': 6,
      'mas': 3,
      'mg': 4,
      'mk': 16,
      'ml': 3,
      'mn': 3,
      'mo': 9,
      'mr': 3,
      'ms': 0,
      'mt': 15,
      'my': 0,
      'nah': 3,
      'naq': 7,
      'nb': 3,
      'nd': 3,
      'ne': 3,
      'nl': 3,
      'nn': 3,
      'no': 3,
      'nr': 3,
      'nso': 4,
      'ny': 3,
      'nyn': 3,
      'om': 3,
      'or': 3,
      'pa': 3,
      'pap': 3,
      'pl': 13,
      'ps': 3,
      'pt': 3,
      'rm': 3,
      'ro': 9,
      'rof': 3,
      'ru': 11,
      'rwk': 3,
      'sah': 0,
      'saq': 3,
      'se': 7,
      'seh': 3,
      'ses': 0,
      'sg': 0,
      'sh': 11,
      'shi': 19,
      'sk': 12,
      'sl': 14,
      'sma': 7,
      'smi': 7,
      'smj': 7,
      'smn': 7,
      'sms': 7,
      'sn': 3,
      'so': 3,
      'sq': 3,
      'sr': 11,
      'ss': 3,
      'ssy': 3,
      'st': 3,
      'sv': 3,
      'sw': 3,
      'syr': 3,
      'ta': 3,
      'te': 3,
      'teo': 3,
      'th': 0,
      'ti': 4,
      'tig': 3,
      'tk': 3,
      'tl': 4,
      'tn': 3,
      'to': 0,
      'tr': 0,
      'ts': 3,
      'tzm': 22,
      'uk': 11,
      'ur': 3,
      've': 3,
      'vi': 0,
      'vun': 3,
      'wa': 4,
      'wae': 3,
      'wo': 0,
      'xh': 3,
      'xog': 3,
      'yo': 0,
      'zh': 0,
      'zu': 3
    };

    function isIn(n, list) {
      return list.indexOf(n) !== -1;
    }

    function isBetween(n, start, end) {
      return start <= n && n <= end;
    }

    var pluralRules = {
      '0': function _(n) {
        return 'other';
      },
      '1': function _(n) {
        if (isBetween(n % 100, 3, 10)) return 'few';
        if (n === 0) return 'zero';
        if (isBetween(n % 100, 11, 99)) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '2': function _(n) {
        if (n !== 0 && n % 10 === 0) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '3': function _(n) {
        if (n == 1) return 'one';
        return 'other';
      },
      '4': function _(n) {
        if (isBetween(n, 0, 1)) return 'one';
        return 'other';
      },
      '5': function _(n) {
        if (isBetween(n, 0, 2) && n != 2) return 'one';
        return 'other';
      },
      '6': function _(n) {
        if (n === 0) return 'zero';
        if (n % 10 == 1 && n % 100 != 11) return 'one';
        return 'other';
      },
      '7': function _(n) {
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '8': function _(n) {
        if (isBetween(n, 3, 6)) return 'few';
        if (isBetween(n, 7, 10)) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '9': function _(n) {
        if (n === 0 || n != 1 && isBetween(n % 100, 1, 19)) return 'few';
        if (n == 1) return 'one';
        return 'other';
      },
      '10': function _(n) {
        if (isBetween(n % 10, 2, 9) && !isBetween(n % 100, 11, 19)) return 'few';
        if (n % 10 == 1 && !isBetween(n % 100, 11, 19)) return 'one';
        return 'other';
      },
      '11': function _(n) {
        if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
        if (n % 10 === 0 || isBetween(n % 10, 5, 9) || isBetween(n % 100, 11, 14)) return 'many';
        if (n % 10 == 1 && n % 100 != 11) return 'one';
        return 'other';
      },
      '12': function _(n) {
        if (isBetween(n, 2, 4)) return 'few';
        if (n == 1) return 'one';
        return 'other';
      },
      '13': function _(n) {
        if (isBetween(n % 10, 2, 4) && !isBetween(n % 100, 12, 14)) return 'few';
        if (n != 1 && isBetween(n % 10, 0, 1) || isBetween(n % 10, 5, 9) || isBetween(n % 100, 12, 14)) return 'many';
        if (n == 1) return 'one';
        return 'other';
      },
      '14': function _(n) {
        if (isBetween(n % 100, 3, 4)) return 'few';
        if (n % 100 == 2) return 'two';
        if (n % 100 == 1) return 'one';
        return 'other';
      },
      '15': function _(n) {
        if (n === 0 || isBetween(n % 100, 2, 10)) return 'few';
        if (isBetween(n % 100, 11, 19)) return 'many';
        if (n == 1) return 'one';
        return 'other';
      },
      '16': function _(n) {
        if (n % 10 == 1 && n != 11) return 'one';
        return 'other';
      },
      '17': function _(n) {
        if (n == 3) return 'few';
        if (n === 0) return 'zero';
        if (n == 6) return 'many';
        if (n == 2) return 'two';
        if (n == 1) return 'one';
        return 'other';
      },
      '18': function _(n) {
        if (n === 0) return 'zero';
        if (isBetween(n, 0, 2) && n !== 0 && n != 2) return 'one';
        return 'other';
      },
      '19': function _(n) {
        if (isBetween(n, 2, 10)) return 'few';
        if (isBetween(n, 0, 1)) return 'one';
        return 'other';
      },
      '20': function _(n) {
        if ((isBetween(n % 10, 3, 4) || n % 10 == 9) && !(isBetween(n % 100, 10, 19) || isBetween(n % 100, 70, 79) || isBetween(n % 100, 90, 99))) return 'few';
        if (n % 1000000 === 0 && n !== 0) return 'many';
        if (n % 10 == 2 && !isIn(n % 100, [12, 72, 92])) return 'two';
        if (n % 10 == 1 && !isIn(n % 100, [11, 71, 91])) return 'one';
        return 'other';
      },
      '21': function _(n) {
        if (n === 0) return 'zero';
        if (n == 1) return 'one';
        return 'other';
      },
      '22': function _(n) {
        if (isBetween(n, 0, 1) || isBetween(n, 11, 99)) return 'one';
        return 'other';
      },
      '23': function _(n) {
        if (isBetween(n % 10, 1, 2) || n % 20 === 0) return 'one';
        return 'other';
      },
      '24': function _(n) {
        if (isBetween(n, 3, 10) || isBetween(n, 13, 19)) return 'few';
        if (isIn(n, [2, 12])) return 'two';
        if (isIn(n, [1, 11])) return 'one';
        return 'other';
      }
    };
    var index = locales2rules[lang.replace(/-.*$/, '')];

    if (!(index in pluralRules)) {
      console.warn('plural form unknown for [' + lang + ']');
      return function () {
        return 'other';
      };
    }

    return pluralRules[index];
  }

  gMacros.plural = function (str, param, key, prop) {
    var n = parseFloat(param);
    if (isNaN(n)) return str;
    if (prop != gTextProp) return str;

    if (!gMacros._pluralRules) {
      gMacros._pluralRules = getPluralRules(gLanguage);
    }

    var index = '[' + gMacros._pluralRules(n) + ']';

    if (n === 0 && key + '[zero]' in gL10nData) {
      str = gL10nData[key + '[zero]'][prop];
    } else if (n == 1 && key + '[one]' in gL10nData) {
      str = gL10nData[key + '[one]'][prop];
    } else if (n == 2 && key + '[two]' in gL10nData) {
      str = gL10nData[key + '[two]'][prop];
    } else if (key + index in gL10nData) {
      str = gL10nData[key + index][prop];
    } else if (key + '[other]' in gL10nData) {
      str = gL10nData[key + '[other]'][prop];
    }

    return str;
  };

  function getL10nData(key, args, fallback) {
    var data = gL10nData[key];

    if (!data) {
      console.warn('#' + key + ' is undefined.');

      if (!fallback) {
        return null;
      }

      data = fallback;
    }

    var rv = {};

    for (var prop in data) {
      var str = data[prop];
      str = substIndexes(str, args, key, prop);
      str = substArguments(str, args, key);
      rv[prop] = str;
    }

    return rv;
  }

  function substIndexes(str, args, key, prop) {
    var reIndex = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/;
    var reMatch = reIndex.exec(str);
    if (!reMatch || !reMatch.length) return str;
    var macroName = reMatch[1];
    var paramName = reMatch[2];
    var param;

    if (args && paramName in args) {
      param = args[paramName];
    } else if (paramName in gL10nData) {
      param = gL10nData[paramName];
    }

    if (macroName in gMacros) {
      var macro = gMacros[macroName];
      str = macro(str, param, key, prop);
    }

    return str;
  }

  function substArguments(str, args, key) {
    var reArgs = /\{\{\s*(.+?)\s*\}\}/g;
    return str.replace(reArgs, function (matched_text, arg) {
      if (args && arg in args) {
        return args[arg];
      }

      if (arg in gL10nData) {
        return gL10nData[arg];
      }

      console.log('argument {{' + arg + '}} for #' + key + ' is undefined.');
      return matched_text;
    });
  }

  function translateElement(element) {
    var l10n = getL10nAttributes(element);
    if (!l10n.id) return;
    var data = getL10nData(l10n.id, l10n.args);

    if (!data) {
      console.warn('#' + l10n.id + ' is undefined.');
      return;
    }

    if (data[gTextProp]) {
      if (getChildElementCount(element) === 0) {
        element[gTextProp] = data[gTextProp];
      } else {
        var children = element.childNodes;
        var found = false;

        for (var i = 0, l = children.length; i < l; i++) {
          if (children[i].nodeType === 3 && /\S/.test(children[i].nodeValue)) {
            if (found) {
              children[i].nodeValue = '';
            } else {
              children[i].nodeValue = data[gTextProp];
              found = true;
            }
          }
        }

        if (!found) {
          var textNode = document.createTextNode(data[gTextProp]);
          element.insertBefore(textNode, element.firstChild);
        }
      }

      delete data[gTextProp];
    }

    for (var k in data) {
      element[k] = data[k];
    }
  }

  function getChildElementCount(element) {
    if (element.children) {
      return element.children.length;
    }

    if (typeof element.childElementCount !== 'undefined') {
      return element.childElementCount;
    }

    var count = 0;

    for (var i = 0; i < element.childNodes.length; i++) {
      count += element.nodeType === 1 ? 1 : 0;
    }

    return count;
  }

  function translateFragment(element) {
    element = element || document.documentElement;
    var children = getTranslatableChildren(element);
    var elementCount = children.length;

    for (var i = 0; i < elementCount; i++) {
      translateElement(children[i]);
    }

    translateElement(element);
  }

  return {
    get: function get(key, args, fallbackString) {
      var index = key.lastIndexOf('.');
      var prop = gTextProp;

      if (index > 0) {
        prop = key.substring(index + 1);
        key = key.substring(0, index);
      }

      var fallback;

      if (fallbackString) {
        fallback = {};
        fallback[prop] = fallbackString;
      }

      var data = getL10nData(key, args, fallback);

      if (data && prop in data) {
        return data[prop];
      }

      return '{{' + key + '}}';
    },
    getData: function getData() {
      return gL10nData;
    },
    getText: function getText() {
      return gTextData;
    },
    getLanguage: function getLanguage() {
      return gLanguage;
    },
    setLanguage: function setLanguage(lang, callback) {
      loadLocale(lang, function () {
        if (callback) callback();
      });
    },
    getDirection: function getDirection() {
      var rtlList = ['ar', 'he', 'fa', 'ps', 'ur'];
      var shortCode = gLanguage.split('-', 1)[0];
      return rtlList.indexOf(shortCode) >= 0 ? 'rtl' : 'ltr';
    },
    translate: translateFragment,
    getReadyState: function getReadyState() {
      return gReadyState;
    },
    ready: function ready(callback) {
      if (!callback) {
        return;
      } else if (gReadyState == 'complete' || gReadyState == 'interactive') {
        window.setTimeout(function () {
          callback();
        });
      } else if (document.addEventListener) {
        document.addEventListener('localized', function once() {
          document.removeEventListener('localized', once);
          callback();
        });
      }
    }
  };
}(window, document);

/***/ }),
/* 13 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFFindController = exports.FindState = void 0;

var _pdfjsLib = __w_pdfjs_require__(2);

var _pdf_find_utils = __w_pdfjs_require__(14);

var _ui_utils = __w_pdfjs_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FindState = {
  FOUND: 0,
  NOT_FOUND: 1,
  WRAPPED: 2,
  PENDING: 3
};
exports.FindState = FindState;
var FIND_TIMEOUT = 250;
var MATCH_SCROLL_OFFSET_TOP = -50;
var MATCH_SCROLL_OFFSET_LEFT = -400;
var CHARACTERS_TO_NORMALIZE = {
  "\u2018": "'",
  "\u2019": "'",
  "\u201A": "'",
  "\u201B": "'",
  "\u201C": '"',
  "\u201D": '"',
  "\u201E": '"',
  "\u201F": '"',
  "\xBC": "1/4",
  "\xBD": "1/2",
  "\xBE": "3/4"
};
var normalizationRegex = null;

function normalize(text) {
  if (!normalizationRegex) {
    var replace = Object.keys(CHARACTERS_TO_NORMALIZE).join("");
    normalizationRegex = new RegExp("[".concat(replace, "]"), "g");
  }

  return text.replace(normalizationRegex, function (ch) {
    return CHARACTERS_TO_NORMALIZE[ch];
  });
}

var PDFFindController = /*#__PURE__*/function () {
  function PDFFindController(_ref) {
    var linkService = _ref.linkService,
        eventBus = _ref.eventBus;

    _classCallCheck(this, PDFFindController);

    this._linkService = linkService;
    this._eventBus = eventBus;

    this._reset();

    eventBus._on("findbarclose", this._onFindBarClose.bind(this));
  }

  _createClass(PDFFindController, [{
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      if (this._pdfDocument) {
        this._reset();
      }

      if (!pdfDocument) {
        return;
      }

      this._pdfDocument = pdfDocument;

      this._firstPageCapability.resolve();
    }
  }, {
    key: "executeCommand",
    value: function executeCommand(cmd, state) {
      var _this = this;

      if (!state) {
        return;
      }

      var pdfDocument = this._pdfDocument;

      if (this._state === null || this._shouldDirtyMatch(cmd, state)) {
        this._dirtyMatch = true;
      }

      this._state = state;

      if (cmd !== "findhighlightallchange") {
        this._updateUIState(FindState.PENDING);
      }

      this._firstPageCapability.promise.then(function () {
        if (!_this._pdfDocument || pdfDocument && _this._pdfDocument !== pdfDocument) {
          return;
        }

        _this._extractText();

        var findbarClosed = !_this._highlightMatches;
        var pendingTimeout = !!_this._findTimeout;

        if (_this._findTimeout) {
          clearTimeout(_this._findTimeout);
          _this._findTimeout = null;
        }

        if (cmd === "find") {
          _this._findTimeout = setTimeout(function () {
            _this._nextMatch();

            _this._findTimeout = null;
          }, FIND_TIMEOUT);
        } else if (_this._dirtyMatch) {
          _this._nextMatch();
        } else if (cmd === "findagain") {
          _this._nextMatch();

          if (findbarClosed && _this._state.highlightAll) {
            _this._updateAllPages();
          }
        } else if (cmd === "findhighlightallchange") {
          if (pendingTimeout) {
            _this._nextMatch();
          } else {
            _this._highlightMatches = true;
          }

          _this._updateAllPages();
        } else {
          _this._nextMatch();
        }
      });
    }
  }, {
    key: "scrollMatchIntoView",
    value: function scrollMatchIntoView(_ref2) {
      var _ref2$element = _ref2.element,
          element = _ref2$element === void 0 ? null : _ref2$element,
          _ref2$pageIndex = _ref2.pageIndex,
          pageIndex = _ref2$pageIndex === void 0 ? -1 : _ref2$pageIndex,
          _ref2$matchIndex = _ref2.matchIndex,
          matchIndex = _ref2$matchIndex === void 0 ? -1 : _ref2$matchIndex;

      if (!this._scrollMatches || !element) {
        return;
      } else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
        return;
      } else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
        return;
      }

      this._scrollMatches = false;
      var spot = {
        top: MATCH_SCROLL_OFFSET_TOP,
        left: MATCH_SCROLL_OFFSET_LEFT
      };
      (0, _ui_utils.scrollIntoView)(element, spot, true);
    }
  }, {
    key: "_reset",
    value: function _reset() {
      this._highlightMatches = false;
      this._scrollMatches = false;
      this._pdfDocument = null;
      this._pageMatches = [];
      this._pageMatchesLength = [];
      this._state = null;
      this._selected = {
        pageIdx: -1,
        matchIdx: -1
      };
      this._offset = {
        pageIdx: null,
        matchIdx: null,
        wrapped: false
      };
      this._extractTextPromises = [];
      this._pageContents = [];
      this._matchesCountTotal = 0;
      this._pagesToSearch = null;
      this._pendingFindMatches = Object.create(null);
      this._resumePageIdx = null;
      this._dirtyMatch = false;
      clearTimeout(this._findTimeout);
      this._findTimeout = null;
      this._firstPageCapability = (0, _pdfjsLib.createPromiseCapability)();
    }
  }, {
    key: "_shouldDirtyMatch",
    value: function _shouldDirtyMatch(cmd, state) {
      if (state.query !== this._state.query) {
        return true;
      }

      switch (cmd) {
        case "findagain":
          var pageNumber = this._selected.pageIdx + 1;
          var linkService = this._linkService;

          if (pageNumber >= 1 && pageNumber <= linkService.pagesCount && pageNumber !== linkService.page && !linkService.isPageVisible(pageNumber)) {
            return true;
          }

          return false;

        case "findhighlightallchange":
          return false;
      }

      return true;
    }
  }, {
    key: "_prepareMatches",
    value: function _prepareMatches(matchesWithLength, matches, matchesLength) {
      function isSubTerm(currentIndex) {
        var currentElem = matchesWithLength[currentIndex];
        var nextElem = matchesWithLength[currentIndex + 1];

        if (currentIndex < matchesWithLength.length - 1 && currentElem.match === nextElem.match) {
          currentElem.skipped = true;
          return true;
        }

        for (var i = currentIndex - 1; i >= 0; i--) {
          var prevElem = matchesWithLength[i];

          if (prevElem.skipped) {
            continue;
          }

          if (prevElem.match + prevElem.matchLength < currentElem.match) {
            break;
          }

          if (prevElem.match + prevElem.matchLength >= currentElem.match + currentElem.matchLength) {
            currentElem.skipped = true;
            return true;
          }
        }

        return false;
      }

      matchesWithLength.sort(function (a, b) {
        return a.match === b.match ? a.matchLength - b.matchLength : a.match - b.match;
      });

      for (var i = 0, len = matchesWithLength.length; i < len; i++) {
        if (isSubTerm(i)) {
          continue;
        }

        matches.push(matchesWithLength[i].match);
        matchesLength.push(matchesWithLength[i].matchLength);
      }
    }
  }, {
    key: "_isEntireWord",
    value: function _isEntireWord(content, startIdx, length) {
      if (startIdx > 0) {
        var first = content.charCodeAt(startIdx);
        var limit = content.charCodeAt(startIdx - 1);

        if ((0, _pdf_find_utils.getCharacterType)(first) === (0, _pdf_find_utils.getCharacterType)(limit)) {
          return false;
        }
      }

      var endIdx = startIdx + length - 1;

      if (endIdx < content.length - 1) {
        var last = content.charCodeAt(endIdx);

        var _limit = content.charCodeAt(endIdx + 1);

        if ((0, _pdf_find_utils.getCharacterType)(last) === (0, _pdf_find_utils.getCharacterType)(_limit)) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "_calculatePhraseMatch",
    value: function _calculatePhraseMatch(query, pageIndex, pageContent, entireWord) {
      var matches = [];
      var queryLen = query.length;
      var matchIdx = -queryLen;

      while (true) {
        matchIdx = pageContent.indexOf(query, matchIdx + queryLen);

        if (matchIdx === -1) {
          break;
        }

        if (entireWord && !this._isEntireWord(pageContent, matchIdx, queryLen)) {
          continue;
        }

        matches.push(matchIdx);
      }

      this._pageMatches[pageIndex] = matches;
    }
  }, {
    key: "_calculateWordMatch",
    value: function _calculateWordMatch(query, pageIndex, pageContent, entireWord) {
      var matchesWithLength = [];
      var queryArray = query.match(/\S+/g);

      for (var i = 0, len = queryArray.length; i < len; i++) {
        var subquery = queryArray[i];
        var subqueryLen = subquery.length;
        var matchIdx = -subqueryLen;

        while (true) {
          matchIdx = pageContent.indexOf(subquery, matchIdx + subqueryLen);

          if (matchIdx === -1) {
            break;
          }

          if (entireWord && !this._isEntireWord(pageContent, matchIdx, subqueryLen)) {
            continue;
          }

          matchesWithLength.push({
            match: matchIdx,
            matchLength: subqueryLen,
            skipped: false
          });
        }
      }

      this._pageMatchesLength[pageIndex] = [];
      this._pageMatches[pageIndex] = [];

      this._prepareMatches(matchesWithLength, this._pageMatches[pageIndex], this._pageMatchesLength[pageIndex]);
    }
  }, {
    key: "_calculateMatch",
    value: function _calculateMatch(pageIndex) {
      var pageContent = this._pageContents[pageIndex];
      var query = this._query;
      var _this$_state = this._state,
          caseSensitive = _this$_state.caseSensitive,
          entireWord = _this$_state.entireWord,
          phraseSearch = _this$_state.phraseSearch;

      if (query.length === 0) {
        return;
      }

      if (!caseSensitive) {
        pageContent = pageContent.toLowerCase();
        query = query.toLowerCase();
      }

      if (phraseSearch) {
        this._calculatePhraseMatch(query, pageIndex, pageContent, entireWord);
      } else {
        this._calculateWordMatch(query, pageIndex, pageContent, entireWord);
      }

      if (this._state.highlightAll) {
        this._updatePage(pageIndex);
      }

      if (this._resumePageIdx === pageIndex) {
        this._resumePageIdx = null;

        this._nextPageMatch();
      }

      var pageMatchesCount = this._pageMatches[pageIndex].length;

      if (pageMatchesCount > 0) {
        this._matchesCountTotal += pageMatchesCount;

        this._updateUIResultsCount();
      }
    }
  }, {
    key: "_extractText",
    value: function _extractText() {
      var _this2 = this;

      if (this._extractTextPromises.length > 0) {
        return;
      }

      var promise = Promise.resolve();

      var _loop = function _loop(i, ii) {
        var extractTextCapability = (0, _pdfjsLib.createPromiseCapability)();
        _this2._extractTextPromises[i] = extractTextCapability.promise;
        promise = promise.then(function () {
          return _this2._pdfDocument.getPage(i + 1).then(function (pdfPage) {
            return pdfPage.getTextContent({
              normalizeWhitespace: true
            });
          }).then(function (textContent) {
            var textItems = textContent.items;
            var strBuf = [];

            for (var j = 0, jj = textItems.length; j < jj; j++) {
              strBuf.push(textItems[j].str);
            }

            _this2._pageContents[i] = normalize(strBuf.join(""));
            extractTextCapability.resolve(i);
          }, function (reason) {
            console.error("Unable to get text content for page ".concat(i + 1), reason);
            _this2._pageContents[i] = "";
            extractTextCapability.resolve(i);
          });
        });
      };

      for (var i = 0, ii = this._linkService.pagesCount; i < ii; i++) {
        _loop(i, ii);
      }
    }
  }, {
    key: "_updatePage",
    value: function _updatePage(index) {
      if (this._scrollMatches && this._selected.pageIdx === index) {
        this._linkService.page = index + 1;
      }

      this._eventBus.dispatch("updatetextlayermatches", {
        source: this,
        pageIndex: index
      });
    }
  }, {
    key: "_updateAllPages",
    value: function _updateAllPages() {
      this._eventBus.dispatch("updatetextlayermatches", {
        source: this,
        pageIndex: -1
      });
    }
  }, {
    key: "_nextMatch",
    value: function _nextMatch() {
      var _this3 = this;

      var previous = this._state.findPrevious;
      var currentPageIndex = this._linkService.page - 1;
      var numPages = this._linkService.pagesCount;
      this._highlightMatches = true;

      if (this._dirtyMatch) {
        this._dirtyMatch = false;
        this._selected.pageIdx = this._selected.matchIdx = -1;
        this._offset.pageIdx = currentPageIndex;
        this._offset.matchIdx = null;
        this._offset.wrapped = false;
        this._resumePageIdx = null;
        this._pageMatches.length = 0;
        this._pageMatchesLength.length = 0;
        this._matchesCountTotal = 0;

        this._updateAllPages();

        for (var i = 0; i < numPages; i++) {
          if (this._pendingFindMatches[i] === true) {
            continue;
          }

          this._pendingFindMatches[i] = true;

          this._extractTextPromises[i].then(function (pageIdx) {
            delete _this3._pendingFindMatches[pageIdx];

            _this3._calculateMatch(pageIdx);
          });
        }
      }

      if (this._query === "") {
        this._updateUIState(FindState.FOUND);

        return;
      }

      if (this._resumePageIdx) {
        return;
      }

      var offset = this._offset;
      this._pagesToSearch = numPages;

      if (offset.matchIdx !== null) {
        var numPageMatches = this._pageMatches[offset.pageIdx].length;

        if (!previous && offset.matchIdx + 1 < numPageMatches || previous && offset.matchIdx > 0) {
          offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;

          this._updateMatch(true);

          return;
        }

        this._advanceOffsetPage(previous);
      }

      this._nextPageMatch();
    }
  }, {
    key: "_matchesReady",
    value: function _matchesReady(matches) {
      var offset = this._offset;
      var numMatches = matches.length;
      var previous = this._state.findPrevious;

      if (numMatches) {
        offset.matchIdx = previous ? numMatches - 1 : 0;

        this._updateMatch(true);

        return true;
      }

      this._advanceOffsetPage(previous);

      if (offset.wrapped) {
        offset.matchIdx = null;

        if (this._pagesToSearch < 0) {
          this._updateMatch(false);

          return true;
        }
      }

      return false;
    }
  }, {
    key: "_nextPageMatch",
    value: function _nextPageMatch() {
      if (this._resumePageIdx !== null) {
        console.error("There can only be one pending page.");
      }

      var matches = null;

      do {
        var pageIdx = this._offset.pageIdx;
        matches = this._pageMatches[pageIdx];

        if (!matches) {
          this._resumePageIdx = pageIdx;
          break;
        }
      } while (!this._matchesReady(matches));
    }
  }, {
    key: "_advanceOffsetPage",
    value: function _advanceOffsetPage(previous) {
      var offset = this._offset;
      var numPages = this._linkService.pagesCount;
      offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
      offset.matchIdx = null;
      this._pagesToSearch--;

      if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
        offset.pageIdx = previous ? numPages - 1 : 0;
        offset.wrapped = true;
      }
    }
  }, {
    key: "_updateMatch",
    value: function _updateMatch() {
      var found = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var state = FindState.NOT_FOUND;
      var wrapped = this._offset.wrapped;
      this._offset.wrapped = false;

      if (found) {
        var previousPage = this._selected.pageIdx;
        this._selected.pageIdx = this._offset.pageIdx;
        this._selected.matchIdx = this._offset.matchIdx;
        state = wrapped ? FindState.WRAPPED : FindState.FOUND;

        if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
          this._updatePage(previousPage);
        }
      }

      this._updateUIState(state, this._state.findPrevious);

      if (this._selected.pageIdx !== -1) {
        this._scrollMatches = true;

        this._updatePage(this._selected.pageIdx);
      }
    }
  }, {
    key: "_onFindBarClose",
    value: function _onFindBarClose(evt) {
      var _this4 = this;

      var pdfDocument = this._pdfDocument;

      this._firstPageCapability.promise.then(function () {
        if (!_this4._pdfDocument || pdfDocument && _this4._pdfDocument !== pdfDocument) {
          return;
        }

        if (_this4._findTimeout) {
          clearTimeout(_this4._findTimeout);
          _this4._findTimeout = null;
        }

        if (_this4._resumePageIdx) {
          _this4._resumePageIdx = null;
          _this4._dirtyMatch = true;
        }

        _this4._updateUIState(FindState.FOUND);

        _this4._highlightMatches = false;

        _this4._updateAllPages();
      });
    }
  }, {
    key: "_requestMatchesCount",
    value: function _requestMatchesCount() {
      var _this$_selected = this._selected,
          pageIdx = _this$_selected.pageIdx,
          matchIdx = _this$_selected.matchIdx;
      var current = 0,
          total = this._matchesCountTotal;

      if (matchIdx !== -1) {
        for (var i = 0; i < pageIdx; i++) {
          current += this._pageMatches[i] && this._pageMatches[i].length || 0;
        }

        current += matchIdx + 1;
      }

      if (current < 1 || current > total) {
        current = total = 0;
      }

      return {
        current: current,
        total: total
      };
    }
  }, {
    key: "_updateUIResultsCount",
    value: function _updateUIResultsCount() {
      this._eventBus.dispatch("updatefindmatchescount", {
        source: this,
        matchesCount: this._requestMatchesCount()
      });
    }
  }, {
    key: "_updateUIState",
    value: function _updateUIState(state, previous) {
      this._eventBus.dispatch("updatefindcontrolstate", {
        source: this,
        state: state,
        previous: previous,
        matchesCount: this._requestMatchesCount(),
        rawQuery: this._state ? this._state.query : null
      });
    }
  }, {
    key: "highlightMatches",
    get: function get() {
      return this._highlightMatches;
    }
  }, {
    key: "pageMatches",
    get: function get() {
      return this._pageMatches;
    }
  }, {
    key: "pageMatchesLength",
    get: function get() {
      return this._pageMatchesLength;
    }
  }, {
    key: "selected",
    get: function get() {
      return this._selected;
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
  }, {
    key: "_query",
    get: function get() {
      if (this._state.query !== this._rawQuery) {
        this._rawQuery = this._state.query;
        this._normalizedQuery = normalize(this._state.query);
      }

      return this._normalizedQuery;
    }
  }]);

  return PDFFindController;
}();

exports.PDFFindController = PDFFindController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCharacterType = getCharacterType;
exports.CharacterType = void 0;
var CharacterType = {
  SPACE: 0,
  ALPHA_LETTER: 1,
  PUNCT: 2,
  HAN_LETTER: 3,
  KATAKANA_LETTER: 4,
  HIRAGANA_LETTER: 5,
  HALFWIDTH_KATAKANA_LETTER: 6,
  THAI_LETTER: 7
};
exports.CharacterType = CharacterType;

function isAlphabeticalScript(charCode) {
  return charCode < 0x2e80;
}

function isAscii(charCode) {
  return (charCode & 0xff80) === 0;
}

function isAsciiAlpha(charCode) {
  return charCode >= 0x61 && charCode <= 0x7a || charCode >= 0x41 && charCode <= 0x5a;
}

function isAsciiDigit(charCode) {
  return charCode >= 0x30 && charCode <= 0x39;
}

function isAsciiSpace(charCode) {
  return charCode === 0x20 || charCode === 0x09 || charCode === 0x0d || charCode === 0x0a;
}

function isHan(charCode) {
  return charCode >= 0x3400 && charCode <= 0x9fff || charCode >= 0xf900 && charCode <= 0xfaff;
}

function isKatakana(charCode) {
  return charCode >= 0x30a0 && charCode <= 0x30ff;
}

function isHiragana(charCode) {
  return charCode >= 0x3040 && charCode <= 0x309f;
}

function isHalfwidthKatakana(charCode) {
  return charCode >= 0xff60 && charCode <= 0xff9f;
}

function isThai(charCode) {
  return (charCode & 0xff80) === 0x0e00;
}

function getCharacterType(charCode) {
  if (isAlphabeticalScript(charCode)) {
    if (isAscii(charCode)) {
      if (isAsciiSpace(charCode)) {
        return CharacterType.SPACE;
      } else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === 0x5f) {
        return CharacterType.ALPHA_LETTER;
      }

      return CharacterType.PUNCT;
    } else if (isThai(charCode)) {
      return CharacterType.THAI_LETTER;
    } else if (charCode === 0xa0) {
      return CharacterType.SPACE;
    }

    return CharacterType.ALPHA_LETTER;
  }

  if (isHan(charCode)) {
    return CharacterType.HAN_LETTER;
  } else if (isKatakana(charCode)) {
    return CharacterType.KATAKANA_LETTER;
  } else if (isHiragana(charCode)) {
    return CharacterType.HIRAGANA_LETTER;
  } else if (isHalfwidthKatakana(charCode)) {
    return CharacterType.HALFWIDTH_KATAKANA_LETTER;
  }

  return CharacterType.ALPHA_LETTER;
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDestHashesEqual = isDestHashesEqual;
exports.isDestArraysEqual = isDestArraysEqual;
exports.PDFHistory = void 0;

var _ui_utils = __w_pdfjs_require__(3);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HASH_CHANGE_TIMEOUT = 1000;
var POSITION_UPDATED_THRESHOLD = 50;
var UPDATE_VIEWAREA_TIMEOUT = 1000;

function getCurrentHash() {
  return document.location.hash;
}

var PDFHistory = /*#__PURE__*/function () {
  function PDFHistory(_ref) {
    var _this = this;

    var linkService = _ref.linkService,
        eventBus = _ref.eventBus;

    _classCallCheck(this, PDFHistory);

    this.linkService = linkService;
    this.eventBus = eventBus;
    this._initialized = false;
    this._fingerprint = "";
    this.reset();
    this._boundEvents = null;
    this._isViewerInPresentationMode = false;

    this.eventBus._on("presentationmodechanged", function (evt) {
      _this._isViewerInPresentationMode = evt.active || evt.switchInProgress;
    });

    this.eventBus._on("pagesinit", function () {
      _this._isPagesLoaded = false;

      var onPagesLoaded = function onPagesLoaded(evt) {
        _this.eventBus._off("pagesloaded", onPagesLoaded);

        _this._isPagesLoaded = !!evt.pagesCount;
      };

      _this.eventBus._on("pagesloaded", onPagesLoaded);
    });
  }

  _createClass(PDFHistory, [{
    key: "initialize",
    value: function initialize(_ref2) {
      var fingerprint = _ref2.fingerprint,
          _ref2$resetHistory = _ref2.resetHistory,
          resetHistory = _ref2$resetHistory === void 0 ? false : _ref2$resetHistory,
          _ref2$updateUrl = _ref2.updateUrl,
          updateUrl = _ref2$updateUrl === void 0 ? false : _ref2$updateUrl;

      if (!fingerprint || typeof fingerprint !== "string") {
        console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
        return;
      }

      if (this._initialized) {
        this.reset();
      }

      var reInitialized = this._fingerprint !== "" && this._fingerprint !== fingerprint;
      this._fingerprint = fingerprint;
      this._updateUrl = updateUrl === true;
      this._initialized = true;

      this._bindEvents();

      var state = window.history.state;
      this._popStateInProgress = false;
      this._blockHashChange = 0;
      this._currentHash = getCurrentHash();
      this._numPositionUpdates = 0;
      this._uid = this._maxUid = 0;
      this._destination = null;
      this._position = null;

      if (!this._isValidState(state, true) || resetHistory) {
        var _this$_parseCurrentHa = this._parseCurrentHash(true),
            hash = _this$_parseCurrentHa.hash,
            page = _this$_parseCurrentHa.page,
            rotation = _this$_parseCurrentHa.rotation;

        if (!hash || reInitialized || resetHistory) {
          this._pushOrReplaceState(null, true);

          return;
        }

        this._pushOrReplaceState({
          hash: hash,
          page: page,
          rotation: rotation
        }, true);

        return;
      }

      var destination = state.destination;

      this._updateInternalState(destination, state.uid, true);

      if (this._uid > this._maxUid) {
        this._maxUid = this._uid;
      }

      if (destination.rotation !== undefined) {
        this._initialRotation = destination.rotation;
      }

      if (destination.dest) {
        this._initialBookmark = JSON.stringify(destination.dest);
        this._destination.page = null;
      } else if (destination.hash) {
        this._initialBookmark = destination.hash;
      } else if (destination.page) {
        this._initialBookmark = "page=".concat(destination.page);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this._initialized) {
        this._pageHide();

        this._initialized = false;

        this._unbindEvents();
      }

      if (this._updateViewareaTimeout) {
        clearTimeout(this._updateViewareaTimeout);
        this._updateViewareaTimeout = null;
      }

      this._initialBookmark = null;
      this._initialRotation = null;
    }
  }, {
    key: "push",
    value: function push(_ref3) {
      var _this2 = this;

      var _ref3$namedDest = _ref3.namedDest,
          namedDest = _ref3$namedDest === void 0 ? null : _ref3$namedDest,
          explicitDest = _ref3.explicitDest,
          pageNumber = _ref3.pageNumber;

      if (!this._initialized) {
        return;
      }

      if (namedDest && typeof namedDest !== "string") {
        console.error("PDFHistory.push: " + "\"".concat(namedDest, "\" is not a valid namedDest parameter."));
        return;
      } else if (!Array.isArray(explicitDest)) {
        console.error("PDFHistory.push: " + "\"".concat(explicitDest, "\" is not a valid explicitDest parameter."));
        return;
      } else if (!(Number.isInteger(pageNumber) && pageNumber > 0 && pageNumber <= this.linkService.pagesCount)) {
        if (pageNumber !== null || this._destination) {
          console.error("PDFHistory.push: " + "\"".concat(pageNumber, "\" is not a valid pageNumber parameter."));
          return;
        }
      }

      var hash = namedDest || JSON.stringify(explicitDest);

      if (!hash) {
        return;
      }

      var forceReplace = false;

      if (this._destination && (isDestHashesEqual(this._destination.hash, hash) || isDestArraysEqual(this._destination.dest, explicitDest))) {
        if (this._destination.page) {
          return;
        }

        forceReplace = true;
      }

      if (this._popStateInProgress && !forceReplace) {
        return;
      }

      this._pushOrReplaceState({
        dest: explicitDest,
        hash: hash,
        page: pageNumber,
        rotation: this.linkService.rotation
      }, forceReplace);

      if (!this._popStateInProgress) {
        this._popStateInProgress = true;
        Promise.resolve().then(function () {
          _this2._popStateInProgress = false;
        });
      }
    }
  }, {
    key: "pushCurrentPosition",
    value: function pushCurrentPosition() {
      if (!this._initialized || this._popStateInProgress) {
        return;
      }

      this._tryPushCurrentPosition();
    }
  }, {
    key: "back",
    value: function back() {
      if (!this._initialized || this._popStateInProgress) {
        return;
      }

      var state = window.history.state;

      if (this._isValidState(state) && state.uid > 0) {
        window.history.back();
      }
    }
  }, {
    key: "forward",
    value: function forward() {
      if (!this._initialized || this._popStateInProgress) {
        return;
      }

      var state = window.history.state;

      if (this._isValidState(state) && state.uid < this._maxUid) {
        window.history.forward();
      }
    }
  }, {
    key: "_pushOrReplaceState",
    value: function _pushOrReplaceState(destination) {
      var forceReplace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var shouldReplace = forceReplace || !this._destination;
      var newState = {
        fingerprint: this._fingerprint,
        uid: shouldReplace ? this._uid : this._uid + 1,
        destination: destination
      };

      this._updateInternalState(destination, newState.uid);

      var newUrl;

      if (this._updateUrl && destination && destination.hash) {
        var baseUrl = document.location.href.split("#")[0];

        if (!baseUrl.startsWith("file://")) {
          newUrl = "".concat(baseUrl, "#").concat(destination.hash);
        }
      }

      if (shouldReplace) {
        window.history.replaceState(newState, "", newUrl);
      } else {
        this._maxUid = this._uid;
        window.history.pushState(newState, "", newUrl);
      }
    }
  }, {
    key: "_tryPushCurrentPosition",
    value: function _tryPushCurrentPosition() {
      var temporary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this._position) {
        return;
      }

      var position = this._position;

      if (temporary) {
        position = Object.assign(Object.create(null), this._position);
        position.temporary = true;
      }

      if (!this._destination) {
        this._pushOrReplaceState(position);

        return;
      }

      if (this._destination.temporary) {
        this._pushOrReplaceState(position, true);

        return;
      }

      if (this._destination.hash === position.hash) {
        return;
      }

      if (!this._destination.page && (POSITION_UPDATED_THRESHOLD <= 0 || this._numPositionUpdates <= POSITION_UPDATED_THRESHOLD)) {
        return;
      }

      var forceReplace = false;

      if (this._destination.page >= position.first && this._destination.page <= position.page) {
        if (this._destination.dest || !this._destination.first) {
          return;
        }

        forceReplace = true;
      }

      this._pushOrReplaceState(position, forceReplace);
    }
  }, {
    key: "_isValidState",
    value: function _isValidState(state) {
      var checkReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!state) {
        return false;
      }

      if (state.fingerprint !== this._fingerprint) {
        if (checkReload) {
          if (typeof state.fingerprint !== "string" || state.fingerprint.length !== this._fingerprint.length) {
            return false;
          }

          var _performance$getEntri = performance.getEntriesByType("navigation"),
              _performance$getEntri2 = _slicedToArray(_performance$getEntri, 1),
              perfEntry = _performance$getEntri2[0];

          if (!perfEntry || perfEntry.type !== "reload") {
            return false;
          }
        } else {
          return false;
        }
      }

      if (!Number.isInteger(state.uid) || state.uid < 0) {
        return false;
      }

      if (state.destination === null || _typeof(state.destination) !== "object") {
        return false;
      }

      return true;
    }
  }, {
    key: "_updateInternalState",
    value: function _updateInternalState(destination, uid) {
      var removeTemporary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this._updateViewareaTimeout) {
        clearTimeout(this._updateViewareaTimeout);
        this._updateViewareaTimeout = null;
      }

      if (removeTemporary && destination && destination.temporary) {
        delete destination.temporary;
      }

      this._destination = destination;
      this._uid = uid;
      this._numPositionUpdates = 0;
    }
  }, {
    key: "_parseCurrentHash",
    value: function _parseCurrentHash() {
      var checkNameddest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var hash = unescape(getCurrentHash()).substring(1);
      var params = (0, _ui_utils.parseQueryString)(hash);
      var nameddest = params.nameddest || "";
      var page = params.page | 0;

      if (!(Number.isInteger(page) && page > 0 && page <= this.linkService.pagesCount) || checkNameddest && nameddest.length > 0) {
        page = null;
      }

      return {
        hash: hash,
        page: page,
        rotation: this.linkService.rotation
      };
    }
  }, {
    key: "_updateViewarea",
    value: function _updateViewarea(_ref4) {
      var _this3 = this;

      var location = _ref4.location;

      if (this._updateViewareaTimeout) {
        clearTimeout(this._updateViewareaTimeout);
        this._updateViewareaTimeout = null;
      }

      this._position = {
        hash: this._isViewerInPresentationMode ? "page=".concat(location.pageNumber) : location.pdfOpenParams.substring(1),
        page: this.linkService.page,
        first: location.pageNumber,
        rotation: location.rotation
      };

      if (this._popStateInProgress) {
        return;
      }

      if (POSITION_UPDATED_THRESHOLD > 0 && this._isPagesLoaded && this._destination && !this._destination.page) {
        this._numPositionUpdates++;
      }

      if (UPDATE_VIEWAREA_TIMEOUT > 0) {
        this._updateViewareaTimeout = setTimeout(function () {
          if (!_this3._popStateInProgress) {
            _this3._tryPushCurrentPosition(true);
          }

          _this3._updateViewareaTimeout = null;
        }, UPDATE_VIEWAREA_TIMEOUT);
      }
    }
  }, {
    key: "_popState",
    value: function _popState(_ref5) {
      var _this4 = this;

      var state = _ref5.state;
      var newHash = getCurrentHash(),
          hashChanged = this._currentHash !== newHash;
      this._currentHash = newHash;

      if (!state) {
        this._uid++;

        var _this$_parseCurrentHa2 = this._parseCurrentHash(),
            hash = _this$_parseCurrentHa2.hash,
            page = _this$_parseCurrentHa2.page,
            rotation = _this$_parseCurrentHa2.rotation;

        this._pushOrReplaceState({
          hash: hash,
          page: page,
          rotation: rotation
        }, true);

        return;
      }

      if (!this._isValidState(state)) {
        return;
      }

      this._popStateInProgress = true;

      if (hashChanged) {
        this._blockHashChange++;
        (0, _ui_utils.waitOnEventOrTimeout)({
          target: window,
          name: "hashchange",
          delay: HASH_CHANGE_TIMEOUT
        }).then(function () {
          _this4._blockHashChange--;
        });
      }

      var destination = state.destination;

      this._updateInternalState(destination, state.uid, true);

      if (this._uid > this._maxUid) {
        this._maxUid = this._uid;
      }

      if ((0, _ui_utils.isValidRotation)(destination.rotation)) {
        this.linkService.rotation = destination.rotation;
      }

      if (destination.dest) {
        this.linkService.navigateTo(destination.dest);
      } else if (destination.hash) {
        this.linkService.setHash(destination.hash);
      } else if (destination.page) {
        this.linkService.page = destination.page;
      }

      Promise.resolve().then(function () {
        _this4._popStateInProgress = false;
      });
    }
  }, {
    key: "_pageHide",
    value: function _pageHide() {
      if (!this._destination || this._destination.temporary) {
        this._tryPushCurrentPosition();
      }
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      if (this._boundEvents) {
        return;
      }

      this._boundEvents = {
        updateViewarea: this._updateViewarea.bind(this),
        popState: this._popState.bind(this),
        pageHide: this._pageHide.bind(this)
      };

      this.eventBus._on("updateviewarea", this._boundEvents.updateViewarea);

      window.addEventListener("popstate", this._boundEvents.popState);
      window.addEventListener("pagehide", this._boundEvents.pageHide);
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (!this._boundEvents) {
        return;
      }

      this.eventBus._off("updateviewarea", this._boundEvents.updateViewarea);

      window.removeEventListener("popstate", this._boundEvents.popState);
      window.removeEventListener("pagehide", this._boundEvents.pageHide);
      this._boundEvents = null;
    }
  }, {
    key: "popStateInProgress",
    get: function get() {
      return this._initialized && (this._popStateInProgress || this._blockHashChange > 0);
    }
  }, {
    key: "initialBookmark",
    get: function get() {
      return this._initialized ? this._initialBookmark : null;
    }
  }, {
    key: "initialRotation",
    get: function get() {
      return this._initialized ? this._initialRotation : null;
    }
  }]);

  return PDFHistory;
}();

exports.PDFHistory = PDFHistory;

function isDestHashesEqual(destHash, pushHash) {
  if (typeof destHash !== "string" || typeof pushHash !== "string") {
    return false;
  }

  if (destHash === pushHash) {
    return true;
  }

  var _parseQueryString = (0, _ui_utils.parseQueryString)(destHash),
      nameddest = _parseQueryString.nameddest;

  if (nameddest === pushHash) {
    return true;
  }

  return false;
}

function isDestArraysEqual(firstDest, secondDest) {
  function isEntryEqual(first, second) {
    if (_typeof(first) !== _typeof(second)) {
      return false;
    }

    if (Array.isArray(first) || Array.isArray(second)) {
      return false;
    }

    if (first !== null && _typeof(first) === "object" && second !== null) {
      if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
      }

      for (var key in first) {
        if (!isEntryEqual(first[key], second[key])) {
          return false;
        }
      }

      return true;
    }

    return first === second || Number.isNaN(first) && Number.isNaN(second);
  }

  if (!(Array.isArray(firstDest) && Array.isArray(secondDest))) {
    return false;
  }

  if (firstDest.length !== secondDest.length) {
    return false;
  }

  for (var i = 0, ii = firstDest.length; i < ii; i++) {
    if (!isEntryEqual(firstDest[i], secondDest[i])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFPageView = void 0;

var _regenerator = _interopRequireDefault(__w_pdfjs_require__(4));

var _ui_utils = __w_pdfjs_require__(3);

var _pdfjsLib = __w_pdfjs_require__(2);

var _pdf_rendering_queue = __w_pdfjs_require__(17);

var _viewer_compatibility = __w_pdfjs_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MAX_CANVAS_PIXELS = _viewer_compatibility.viewerCompatibilityParams.maxCanvasPixels || 16777216;

var PDFPageView = /*#__PURE__*/function () {
  function PDFPageView(options) {
    _classCallCheck(this, PDFPageView);

    var container = options.container;
    var defaultViewport = options.defaultViewport;
    this.id = options.id;
    this.renderingId = "page" + this.id;
    this.pdfPage = null;
    this.pageLabel = null;
    this.rotation = 0;
    this.scale = options.scale || _ui_utils.DEFAULT_SCALE;
    this.viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
    this._annotationStorage = options.annotationStorage || null;
    this._optionalContentConfigPromise = options.optionalContentConfigPromise || null;
    this.hasRestrictedScaling = false;
    this.textLayerMode = Number.isInteger(options.textLayerMode) ? options.textLayerMode : _ui_utils.TextLayerMode.ENABLE;
    this.imageResourcesPath = options.imageResourcesPath || "";
    this.renderInteractiveForms = typeof options.renderInteractiveForms === "boolean" ? options.renderInteractiveForms : true;
    this.useOnlyCssZoom = options.useOnlyCssZoom || false;
    this.maxCanvasPixels = options.maxCanvasPixels || MAX_CANVAS_PIXELS;
    this.eventBus = options.eventBus;
    this.renderingQueue = options.renderingQueue;
    this.textLayerFactory = options.textLayerFactory;
    this.annotationLayerFactory = options.annotationLayerFactory;
    this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
    this.enableWebGL = options.enableWebGL || false;
    this.l10n = options.l10n || _ui_utils.NullL10n;
    this.paintTask = null;
    this.paintedViewportMap = new WeakMap();
    this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
    this.resume = null;
    this.error = null;
    this.annotationLayer = null;
    this.textLayer = null;
    this.zoomLayer = null;
    var div = document.createElement("div");
    div.className = "page";
    div.style.width = Math.floor(this.viewport.width) + "px";
    div.style.height = Math.floor(this.viewport.height) + "px";
    div.setAttribute("data-page-number", this.id);
    this.div = div;
    container.appendChild(div);
  }

  _createClass(PDFPageView, [{
    key: "setPdfPage",
    value: function setPdfPage(pdfPage) {
      this.pdfPage = pdfPage;
      this.pdfPageRotate = pdfPage.rotate;
      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = pdfPage.getViewport({
        scale: this.scale * _ui_utils.CSS_UNITS,
        rotation: totalRotation
      });
      this.stats = pdfPage.stats;
      this.reset();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.reset();

      if (this.pdfPage) {
        this.pdfPage.cleanup();
      }
    }
  }, {
    key: "_renderAnnotationLayer",
    value: function () {
      var _renderAnnotationLayer2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var error;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                error = null;
                _context.prev = 1;
                _context.next = 4;
                return this.annotationLayer.render(this.viewport, "display");

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                error = _context.t0;

              case 9:
                _context.prev = 9;
                this.eventBus.dispatch("annotationlayerrendered", {
                  source: this,
                  pageNumber: this.id,
                  error: error
                });
                return _context.finish(9);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6, 9, 12]]);
      }));

      function _renderAnnotationLayer() {
        return _renderAnnotationLayer2.apply(this, arguments);
      }

      return _renderAnnotationLayer;
    }()
  }, {
    key: "_resetZoomLayer",
    value: function _resetZoomLayer() {
      var removeFromDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.zoomLayer) {
        return;
      }

      var zoomLayerCanvas = this.zoomLayer.firstChild;
      this.paintedViewportMap["delete"](zoomLayerCanvas);
      zoomLayerCanvas.width = 0;
      zoomLayerCanvas.height = 0;

      if (removeFromDOM) {
        this.zoomLayer.remove();
      }

      this.zoomLayer = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      var keepZoomLayer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var keepAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.cancelRendering(keepAnnotations);
      this.renderingState = _pdf_rendering_queue.RenderingStates.INITIAL;
      var div = this.div;
      div.style.width = Math.floor(this.viewport.width) + "px";
      div.style.height = Math.floor(this.viewport.height) + "px";
      var childNodes = div.childNodes;
      var currentZoomLayerNode = keepZoomLayer && this.zoomLayer || null;
      var currentAnnotationNode = keepAnnotations && this.annotationLayer && this.annotationLayer.div || null;

      for (var i = childNodes.length - 1; i >= 0; i--) {
        var node = childNodes[i];

        if (currentZoomLayerNode === node || currentAnnotationNode === node) {
          continue;
        }

        div.removeChild(node);
      }

      div.removeAttribute("data-loaded");

      if (currentAnnotationNode) {
        this.annotationLayer.hide();
      } else if (this.annotationLayer) {
        this.annotationLayer.cancel();
        this.annotationLayer = null;
      }

      if (!currentZoomLayerNode) {
        if (this.canvas) {
          this.paintedViewportMap["delete"](this.canvas);
          this.canvas.width = 0;
          this.canvas.height = 0;
          delete this.canvas;
        }

        this._resetZoomLayer();
      }

      if (this.svg) {
        this.paintedViewportMap["delete"](this.svg);
        delete this.svg;
      }

      this.loadingIconDiv = document.createElement("div");
      this.loadingIconDiv.className = "loadingIcon";
      div.appendChild(this.loadingIconDiv);
    }
  }, {
    key: "update",
    value: function update(scale, rotation) {
      var optionalContentConfigPromise = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.scale = scale || this.scale;

      if (typeof rotation !== "undefined") {
        this.rotation = rotation;
      }

      if (optionalContentConfigPromise instanceof Promise) {
        this._optionalContentConfigPromise = optionalContentConfigPromise;
      }

      var totalRotation = (this.rotation + this.pdfPageRotate) % 360;
      this.viewport = this.viewport.clone({
        scale: this.scale * _ui_utils.CSS_UNITS,
        rotation: totalRotation
      });

      if (this.svg) {
        this.cssTransform(this.svg, true);
        this.eventBus.dispatch("pagerendered", {
          source: this,
          pageNumber: this.id,
          cssTransform: true,
          timestamp: performance.now()
        });
        return;
      }

      var isScalingRestricted = false;

      if (this.canvas && this.maxCanvasPixels > 0) {
        var outputScale = this.outputScale;

        if ((Math.floor(this.viewport.width) * outputScale.sx | 0) * (Math.floor(this.viewport.height) * outputScale.sy | 0) > this.maxCanvasPixels) {
          isScalingRestricted = true;
        }
      }

      if (this.canvas) {
        if (this.useOnlyCssZoom || this.hasRestrictedScaling && isScalingRestricted) {
          this.cssTransform(this.canvas, true);
          this.eventBus.dispatch("pagerendered", {
            source: this,
            pageNumber: this.id,
            cssTransform: true,
            timestamp: performance.now()
          });
          return;
        }

        if (!this.zoomLayer && !this.canvas.hasAttribute("hidden")) {
          this.zoomLayer = this.canvas.parentNode;
          this.zoomLayer.style.position = "absolute";
        }
      }

      if (this.zoomLayer) {
        this.cssTransform(this.zoomLayer.firstChild);
      }

      this.reset(true, true);
    }
  }, {
    key: "cancelRendering",
    value: function cancelRendering() {
      var keepAnnotations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.paintTask) {
        this.paintTask.cancel();
        this.paintTask = null;
      }

      this.resume = null;

      if (this.textLayer) {
        this.textLayer.cancel();
        this.textLayer = null;
      }

      if (!keepAnnotations && this.annotationLayer) {
        this.annotationLayer.cancel();
        this.annotationLayer = null;
      }
    }
  }, {
    key: "cssTransform",
    value: function cssTransform(target) {
      var redrawAnnotations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var width = this.viewport.width;
      var height = this.viewport.height;
      var div = this.div;
      target.style.width = target.parentNode.style.width = div.style.width = Math.floor(width) + "px";
      target.style.height = target.parentNode.style.height = div.style.height = Math.floor(height) + "px";
      var relativeRotation = this.viewport.rotation - this.paintedViewportMap.get(target).rotation;
      var absRotation = Math.abs(relativeRotation);
      var scaleX = 1,
          scaleY = 1;

      if (absRotation === 90 || absRotation === 270) {
        scaleX = height / width;
        scaleY = width / height;
      }

      var cssTransform = "rotate(" + relativeRotation + "deg) " + "scale(" + scaleX + "," + scaleY + ")";
      target.style.transform = cssTransform;

      if (this.textLayer) {
        var textLayerViewport = this.textLayer.viewport;
        var textRelativeRotation = this.viewport.rotation - textLayerViewport.rotation;
        var textAbsRotation = Math.abs(textRelativeRotation);
        var scale = width / textLayerViewport.width;

        if (textAbsRotation === 90 || textAbsRotation === 270) {
          scale = width / textLayerViewport.height;
        }

        var textLayerDiv = this.textLayer.textLayerDiv;
        var transX, transY;

        switch (textAbsRotation) {
          case 0:
            transX = transY = 0;
            break;

          case 90:
            transX = 0;
            transY = "-" + textLayerDiv.style.height;
            break;

          case 180:
            transX = "-" + textLayerDiv.style.width;
            transY = "-" + textLayerDiv.style.height;
            break;

          case 270:
            transX = "-" + textLayerDiv.style.width;
            transY = 0;
            break;

          default:
            console.error("Bad rotation value.");
            break;
        }

        textLayerDiv.style.transform = "rotate(" + textAbsRotation + "deg) " + "scale(" + scale + ", " + scale + ") " + "translate(" + transX + ", " + transY + ")";
        textLayerDiv.style.transformOrigin = "0% 0%";
      }

      if (redrawAnnotations && this.annotationLayer) {
        this._renderAnnotationLayer();
      }
    }
  }, {
    key: "getPagePoint",
    value: function getPagePoint(x, y) {
      return this.viewport.convertToPdfPoint(x, y);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      if (this.renderingState !== _pdf_rendering_queue.RenderingStates.INITIAL) {
        console.error("Must be in new state before drawing");
        this.reset();
      }

      var div = this.div,
          pdfPage = this.pdfPage;

      if (!pdfPage) {
        this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;

        if (this.loadingIconDiv) {
          div.removeChild(this.loadingIconDiv);
          delete this.loadingIconDiv;
        }

        return Promise.reject(new Error("pdfPage is not loaded"));
      }

      this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
      var canvasWrapper = document.createElement("div");
      canvasWrapper.style.width = div.style.width;
      canvasWrapper.style.height = div.style.height;
      canvasWrapper.classList.add("canvasWrapper");

      if (this.annotationLayer && this.annotationLayer.div) {
        div.insertBefore(canvasWrapper, this.annotationLayer.div);
      } else {
        div.appendChild(canvasWrapper);
      }

      var textLayer = null;

      if (this.textLayerMode !== _ui_utils.TextLayerMode.DISABLE && this.textLayerFactory) {
        var textLayerDiv = document.createElement("div");
        textLayerDiv.className = "textLayer";
        textLayerDiv.style.width = canvasWrapper.style.width;
        textLayerDiv.style.height = canvasWrapper.style.height;

        if (this.annotationLayer && this.annotationLayer.div) {
          div.insertBefore(textLayerDiv, this.annotationLayer.div);
        } else {
          div.appendChild(textLayerDiv);
        }

        textLayer = this.textLayerFactory.createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport, this.textLayerMode === _ui_utils.TextLayerMode.ENABLE_ENHANCE, this.eventBus);
      }

      this.textLayer = textLayer;
      var renderContinueCallback = null;

      if (this.renderingQueue) {
        renderContinueCallback = function renderContinueCallback(cont) {
          if (!_this.renderingQueue.isHighestPriority(_this)) {
            _this.renderingState = _pdf_rendering_queue.RenderingStates.PAUSED;

            _this.resume = function () {
              _this.renderingState = _pdf_rendering_queue.RenderingStates.RUNNING;
              cont();
            };

            return;
          }

          cont();
        };
      }

      var finishPaintTask = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(error) {
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (paintTask === _this.paintTask) {
                    _this.paintTask = null;
                  }

                  if (!(error instanceof _pdfjsLib.RenderingCancelledException)) {
                    _context2.next = 4;
                    break;
                  }

                  _this.error = null;
                  return _context2.abrupt("return");

                case 4:
                  _this.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;

                  if (_this.loadingIconDiv) {
                    div.removeChild(_this.loadingIconDiv);
                    delete _this.loadingIconDiv;
                  }

                  _this._resetZoomLayer(true);

                  _this.error = error;
                  _this.stats = pdfPage.stats;

                  _this.eventBus.dispatch("pagerendered", {
                    source: _this,
                    pageNumber: _this.id,
                    cssTransform: false,
                    timestamp: performance.now()
                  });

                  if (!error) {
                    _context2.next = 12;
                    break;
                  }

                  throw error;

                case 12:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function finishPaintTask(_x) {
          return _ref.apply(this, arguments);
        };
      }();

      var paintTask = this.renderer === _ui_utils.RendererType.SVG ? this.paintOnSvg(canvasWrapper) : this.paintOnCanvas(canvasWrapper);
      paintTask.onRenderContinue = renderContinueCallback;
      this.paintTask = paintTask;
      var resultPromise = paintTask.promise.then(function () {
        return finishPaintTask(null).then(function () {
          if (textLayer) {
            var readableStream = pdfPage.streamTextContent({
              normalizeWhitespace: true
            });
            textLayer.setTextContentStream(readableStream);
            textLayer.render();
          }
        });
      }, function (reason) {
        return finishPaintTask(reason);
      });

      if (this.annotationLayerFactory) {
        if (!this.annotationLayer) {
          this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(div, pdfPage, this._annotationStorage, this.imageResourcesPath, this.renderInteractiveForms, this.l10n);
        }

        this._renderAnnotationLayer();
      }

      div.setAttribute("data-loaded", true);
      this.eventBus.dispatch("pagerender", {
        source: this,
        pageNumber: this.id
      });
      return resultPromise;
    }
  }, {
    key: "paintOnCanvas",
    value: function paintOnCanvas(canvasWrapper) {
      var renderCapability = (0, _pdfjsLib.createPromiseCapability)();
      var result = {
        promise: renderCapability.promise,
        onRenderContinue: function onRenderContinue(cont) {
          cont();
        },
        cancel: function cancel() {
          renderTask.cancel();
        }
      };
      var viewport = this.viewport;
      var canvas = document.createElement("canvas");
      this.l10n.get("page_canvas", {
        page: this.id
      }, "Page {{page}}").then(function (msg) {
        canvas.setAttribute("aria-label", msg);
      });
      canvas.setAttribute("hidden", "hidden");
      var isCanvasHidden = true;

      var showCanvas = function showCanvas() {
        if (isCanvasHidden) {
          canvas.removeAttribute("hidden");
          isCanvasHidden = false;
        }
      };

      canvasWrapper.appendChild(canvas);
      this.canvas = canvas;
      canvas.mozOpaque = true;
      var ctx = canvas.getContext("2d", {
        alpha: false
      });
      var outputScale = (0, _ui_utils.getOutputScale)(ctx);
      this.outputScale = outputScale;

      if (this.useOnlyCssZoom) {
        var actualSizeViewport = viewport.clone({
          scale: _ui_utils.CSS_UNITS
        });
        outputScale.sx *= actualSizeViewport.width / viewport.width;
        outputScale.sy *= actualSizeViewport.height / viewport.height;
        outputScale.scaled = true;
      }

      if (this.maxCanvasPixels > 0) {
        var pixelsInViewport = viewport.width * viewport.height;
        var maxScale = Math.sqrt(this.maxCanvasPixels / pixelsInViewport);

        if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
          outputScale.sx = maxScale;
          outputScale.sy = maxScale;
          outputScale.scaled = true;
          this.hasRestrictedScaling = true;
        } else {
          this.hasRestrictedScaling = false;
        }
      }

      var sfx = (0, _ui_utils.approximateFraction)(outputScale.sx);
      var sfy = (0, _ui_utils.approximateFraction)(outputScale.sy);
      canvas.width = (0, _ui_utils.roundToDivide)(viewport.width * outputScale.sx, sfx[0]);
      canvas.height = (0, _ui_utils.roundToDivide)(viewport.height * outputScale.sy, sfy[0]);
      canvas.style.width = (0, _ui_utils.roundToDivide)(viewport.width, sfx[1]) + "px";
      canvas.style.height = (0, _ui_utils.roundToDivide)(viewport.height, sfy[1]) + "px";
      this.paintedViewportMap.set(canvas, viewport);
      var transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
      var renderContext = {
        canvasContext: ctx,
        transform: transform,
        viewport: this.viewport,
        enableWebGL: this.enableWebGL,
        renderInteractiveForms: this.renderInteractiveForms,
        optionalContentConfigPromise: this._optionalContentConfigPromise
      };
      var renderTask = this.pdfPage.render(renderContext);

      renderTask.onContinue = function (cont) {
        showCanvas();

        if (result.onRenderContinue) {
          result.onRenderContinue(cont);
        } else {
          cont();
        }
      };

      renderTask.promise.then(function () {
        showCanvas();
        renderCapability.resolve(undefined);
      }, function (error) {
        showCanvas();
        renderCapability.reject(error);
      });
      return result;
    }
  }, {
    key: "paintOnSvg",
    value: function paintOnSvg(wrapper) {
      var _this2 = this;

      var cancelled = false;

      var ensureNotCancelled = function ensureNotCancelled() {
        if (cancelled) {
          throw new _pdfjsLib.RenderingCancelledException("Rendering cancelled, page ".concat(_this2.id), "svg");
        }
      };

      var pdfPage = this.pdfPage;
      var actualSizeViewport = this.viewport.clone({
        scale: _ui_utils.CSS_UNITS
      });
      var promise = pdfPage.getOperatorList().then(function (opList) {
        ensureNotCancelled();
        var svgGfx = new _pdfjsLib.SVGGraphics(pdfPage.commonObjs, pdfPage.objs);
        return svgGfx.getSVG(opList, actualSizeViewport).then(function (svg) {
          ensureNotCancelled();
          _this2.svg = svg;

          _this2.paintedViewportMap.set(svg, actualSizeViewport);

          svg.style.width = wrapper.style.width;
          svg.style.height = wrapper.style.height;
          _this2.renderingState = _pdf_rendering_queue.RenderingStates.FINISHED;
          wrapper.appendChild(svg);
        });
      });
      return {
        promise: promise,
        onRenderContinue: function onRenderContinue(cont) {
          cont();
        },
        cancel: function cancel() {
          cancelled = true;
        }
      };
    }
  }, {
    key: "setPageLabel",
    value: function setPageLabel(label) {
      this.pageLabel = typeof label === "string" ? label : null;

      if (this.pageLabel !== null) {
        this.div.setAttribute("data-page-label", this.pageLabel);
      } else {
        this.div.removeAttribute("data-page-label");
      }
    }
  }, {
    key: "width",
    get: function get() {
      return this.viewport.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.viewport.height;
    }
  }]);

  return PDFPageView;
}();

exports.PDFPageView = PDFPageView;

/***/ }),
/* 17 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFRenderingQueue = exports.RenderingStates = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CLEANUP_TIMEOUT = 30000;
var RenderingStates = {
  INITIAL: 0,
  RUNNING: 1,
  PAUSED: 2,
  FINISHED: 3
};
exports.RenderingStates = RenderingStates;

var PDFRenderingQueue = /*#__PURE__*/function () {
  function PDFRenderingQueue() {
    _classCallCheck(this, PDFRenderingQueue);

    this.pdfViewer = null;
    this.pdfThumbnailViewer = null;
    this.onIdle = null;
    this.highestPriorityPage = null;
    this.idleTimeout = null;
    this.printing = false;
    this.isThumbnailViewEnabled = false;
  }

  _createClass(PDFRenderingQueue, [{
    key: "setViewer",
    value: function setViewer(pdfViewer) {
      this.pdfViewer = pdfViewer;
    }
  }, {
    key: "setThumbnailViewer",
    value: function setThumbnailViewer(pdfThumbnailViewer) {
      this.pdfThumbnailViewer = pdfThumbnailViewer;
    }
  }, {
    key: "isHighestPriority",
    value: function isHighestPriority(view) {
      return this.highestPriorityPage === view.renderingId;
    }
  }, {
    key: "renderHighestPriority",
    value: function renderHighestPriority(currentlyVisiblePages) {
      if (this.idleTimeout) {
        clearTimeout(this.idleTimeout);
        this.idleTimeout = null;
      }

      if (this.pdfViewer.forceRendering(currentlyVisiblePages)) {
        return;
      }

      if (this.pdfThumbnailViewer && this.isThumbnailViewEnabled) {
        if (this.pdfThumbnailViewer.forceRendering()) {
          return;
        }
      }

      if (this.printing) {
        return;
      }

      if (this.onIdle) {
        this.idleTimeout = setTimeout(this.onIdle.bind(this), CLEANUP_TIMEOUT);
      }
    }
  }, {
    key: "getHighestPriority",
    value: function getHighestPriority(visible, views, scrolledDown) {
      var visibleViews = visible.views;
      var numVisible = visibleViews.length;

      if (numVisible === 0) {
        return null;
      }

      for (var i = 0; i < numVisible; ++i) {
        var view = visibleViews[i].view;

        if (!this.isViewFinished(view)) {
          return view;
        }
      }

      if (scrolledDown) {
        var nextPageIndex = visible.last.id;

        if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
          return views[nextPageIndex];
        }
      } else {
        var previousPageIndex = visible.first.id - 2;

        if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
          return views[previousPageIndex];
        }
      }

      return null;
    }
  }, {
    key: "isViewFinished",
    value: function isViewFinished(view) {
      return view.renderingState === RenderingStates.FINISHED;
    }
  }, {
    key: "renderView",
    value: function renderView(view) {
      var _this = this;

      switch (view.renderingState) {
        case RenderingStates.FINISHED:
          return false;

        case RenderingStates.PAUSED:
          this.highestPriorityPage = view.renderingId;
          view.resume();
          break;

        case RenderingStates.RUNNING:
          this.highestPriorityPage = view.renderingId;
          break;

        case RenderingStates.INITIAL:
          this.highestPriorityPage = view.renderingId;
          view.draw()["finally"](function () {
            _this.renderHighestPriority();
          })["catch"](function (reason) {
            console.error("renderView: \"".concat(reason, "\""));
          });
          break;
      }

      return true;
    }
  }]);

  return PDFRenderingQueue;
}();

exports.PDFRenderingQueue = PDFRenderingQueue;

/***/ }),
/* 18 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFSinglePageViewer = void 0;

var _base_viewer = __w_pdfjs_require__(19);

var _pdfjsLib = __w_pdfjs_require__(2);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PDFSinglePageViewer = /*#__PURE__*/function (_BaseViewer) {
  _inherits(PDFSinglePageViewer, _BaseViewer);

  var _super = _createSuper(PDFSinglePageViewer);

  function PDFSinglePageViewer(options) {
    var _this;

    _classCallCheck(this, PDFSinglePageViewer);

    _this = _super.call(this, options);

    _this.eventBus._on("pagesinit", function (evt) {
      _this._ensurePageViewVisible();
    });

    return _this;
  }

  _createClass(PDFSinglePageViewer, [{
    key: "_resetView",
    value: function _resetView() {
      _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_resetView", this).call(this);

      this._previousPageNumber = 1;
      this._shadowViewer = document.createDocumentFragment();
      this._updateScrollDown = null;
    }
  }, {
    key: "_ensurePageViewVisible",
    value: function _ensurePageViewVisible() {
      var pageView = this._pages[this._currentPageNumber - 1];
      var previousPageView = this._pages[this._previousPageNumber - 1];
      var viewerNodes = this.viewer.childNodes;

      switch (viewerNodes.length) {
        case 0:
          this.viewer.appendChild(pageView.div);
          break;

        case 1:
          if (viewerNodes[0] !== previousPageView.div) {
            throw new Error("_ensurePageViewVisible: Unexpected previously visible page.");
          }

          if (pageView === previousPageView) {
            break;
          }

          this._shadowViewer.appendChild(previousPageView.div);

          this.viewer.appendChild(pageView.div);
          this.container.scrollTop = 0;
          break;

        default:
          throw new Error("_ensurePageViewVisible: Only one page should be visible at a time.");
      }

      this._previousPageNumber = this._currentPageNumber;
    }
  }, {
    key: "_scrollUpdate",
    value: function _scrollUpdate() {
      if (this._updateScrollDown) {
        this._updateScrollDown();
      }

      _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_scrollUpdate", this).call(this);
    }
  }, {
    key: "_scrollIntoView",
    value: function _scrollIntoView(_ref) {
      var _this2 = this;

      var pageDiv = _ref.pageDiv,
          _ref$pageSpot = _ref.pageSpot,
          pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
          _ref$pageNumber = _ref.pageNumber,
          pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;

      if (pageNumber) {
        this._setCurrentPageNumber(pageNumber);
      }

      var scrolledDown = this._currentPageNumber >= this._previousPageNumber;

      this._ensurePageViewVisible();

      this.update();

      _get(_getPrototypeOf(PDFSinglePageViewer.prototype), "_scrollIntoView", this).call(this, {
        pageDiv: pageDiv,
        pageSpot: pageSpot,
        pageNumber: pageNumber
      });

      this._updateScrollDown = function () {
        _this2.scroll.down = scrolledDown;
        _this2._updateScrollDown = null;
      };
    }
  }, {
    key: "_getVisiblePages",
    value: function _getVisiblePages() {
      return this._getCurrentVisiblePage();
    }
  }, {
    key: "_updateHelper",
    value: function _updateHelper(visiblePages) {}
  }, {
    key: "_updateScrollMode",
    value: function _updateScrollMode() {}
  }, {
    key: "_updateSpreadMode",
    value: function _updateSpreadMode() {}
  }, {
    key: "_viewerElement",
    get: function get() {
      return (0, _pdfjsLib.shadow)(this, "_viewerElement", this._shadowViewer);
    }
  }, {
    key: "_isScrollModeHorizontal",
    get: function get() {
      return (0, _pdfjsLib.shadow)(this, "_isScrollModeHorizontal", false);
    }
  }]);

  return PDFSinglePageViewer;
}(_base_viewer.BaseViewer);

exports.PDFSinglePageViewer = PDFSinglePageViewer;

/***/ }),
/* 19 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseViewer = void 0;

var _ui_utils = __w_pdfjs_require__(3);

var _pdf_rendering_queue = __w_pdfjs_require__(17);

var _annotation_layer_builder = __w_pdfjs_require__(1);

var _pdfjsLib = __w_pdfjs_require__(2);

var _pdf_page_view = __w_pdfjs_require__(16);

var _pdf_link_service = __w_pdfjs_require__(7);

var _text_layer_builder = __w_pdfjs_require__(8);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_CACHE_SIZE = 10;

function PDFPageViewBuffer(size) {
  var data = [];

  this.push = function (view) {
    var i = data.indexOf(view);

    if (i >= 0) {
      data.splice(i, 1);
    }

    data.push(view);

    if (data.length > size) {
      data.shift().destroy();
    }
  };

  this.resize = function (newSize, pagesToKeep) {
    size = newSize;

    if (pagesToKeep) {
      var pageIdsToKeep = new Set();

      for (var i = 0, iMax = pagesToKeep.length; i < iMax; ++i) {
        pageIdsToKeep.add(pagesToKeep[i].id);
      }

      (0, _ui_utils.moveToEndOfArray)(data, function (page) {
        return pageIdsToKeep.has(page.id);
      });
    }

    while (data.length > size) {
      data.shift().destroy();
    }
  };
}

function isSameScale(oldScale, newScale) {
  if (newScale === oldScale) {
    return true;
  }

  if (Math.abs(newScale - oldScale) < 1e-15) {
    return true;
  }

  return false;
}

var BaseViewer = /*#__PURE__*/function () {
  function BaseViewer(options) {
    var _this = this;

    _classCallCheck(this, BaseViewer);

    if (this.constructor === BaseViewer) {
      throw new Error("Cannot initialize BaseViewer.");
    }

    this._name = this.constructor.name;
    this.container = options.container;
    this.viewer = options.viewer || options.container.firstElementChild;

    if (!(this.container instanceof HTMLDivElement && this.viewer instanceof HTMLDivElement)) {
      throw new Error("Invalid `container` and/or `viewer` option.");
    }

    this.eventBus = options.eventBus;
    this.linkService = options.linkService || new _pdf_link_service.SimpleLinkService();
    this.downloadManager = options.downloadManager || null;
    this.findController = options.findController || null;
    this.removePageBorders = options.removePageBorders || false;
    this.textLayerMode = Number.isInteger(options.textLayerMode) ? options.textLayerMode : _ui_utils.TextLayerMode.ENABLE;
    this.imageResourcesPath = options.imageResourcesPath || "";
    this.renderInteractiveForms = typeof options.renderInteractiveForms === "boolean" ? options.renderInteractiveForms : true;
    this.enablePrintAutoRotate = options.enablePrintAutoRotate || false;
    this.renderer = options.renderer || _ui_utils.RendererType.CANVAS;
    this.enableWebGL = options.enableWebGL || false;
    this.useOnlyCssZoom = options.useOnlyCssZoom || false;
    this.maxCanvasPixels = options.maxCanvasPixels;
    this.l10n = options.l10n || _ui_utils.NullL10n;
    this.defaultRenderingQueue = !options.renderingQueue;

    if (this.defaultRenderingQueue) {
      this.renderingQueue = new _pdf_rendering_queue.PDFRenderingQueue();
      this.renderingQueue.setViewer(this);
    } else {
      this.renderingQueue = options.renderingQueue;
    }

    this.scroll = (0, _ui_utils.watchScroll)(this.container, this._scrollUpdate.bind(this));
    this.presentationModeState = _ui_utils.PresentationModeState.UNKNOWN;
    this._onBeforeDraw = this._onAfterDraw = null;

    this._resetView();

    if (this.removePageBorders) {
      this.viewer.classList.add("removePageBorders");
    }

    Promise.resolve().then(function () {
      _this.eventBus.dispatch("baseviewerinit", {
        source: _this
      });
    });
  }

  _createClass(BaseViewer, [{
    key: "getPageView",
    value: function getPageView(index) {
      return this._pages[index];
    }
  }, {
    key: "_setCurrentPageNumber",
    value: function _setCurrentPageNumber(val) {
      var resetCurrentPageView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this._currentPageNumber === val) {
        if (resetCurrentPageView) {
          this._resetCurrentPageView();
        }

        return true;
      }

      if (!(0 < val && val <= this.pagesCount)) {
        return false;
      }

      this._currentPageNumber = val;
      this.eventBus.dispatch("pagechanging", {
        source: this,
        pageNumber: val,
        pageLabel: this._pageLabels && this._pageLabels[val - 1]
      });

      if (resetCurrentPageView) {
        this._resetCurrentPageView();
      }

      return true;
    }
  }, {
    key: "_onePageRenderedOrForceFetch",
    value: function _onePageRenderedOrForceFetch() {
      if (!this.container.offsetParent || this._getVisiblePages().views.length === 0) {
        return Promise.resolve();
      }

      return this._onePageRenderedCapability.promise;
    }
  }, {
    key: "setDocument",
    value: function setDocument(pdfDocument) {
      var _this2 = this;

      if (this.pdfDocument) {
        this._cancelRendering();

        this._resetView();

        if (this.findController) {
          this.findController.setDocument(null);
        }
      }

      this.pdfDocument = pdfDocument;

      if (!pdfDocument) {
        return;
      }

      var pagesCount = pdfDocument.numPages;
      var firstPagePromise = pdfDocument.getPage(1);
      var annotationStorage = pdfDocument.annotationStorage;
      var optionalContentConfigPromise = pdfDocument.getOptionalContentConfig();

      this._pagesCapability.promise.then(function () {
        _this2.eventBus.dispatch("pagesloaded", {
          source: _this2,
          pagesCount: pagesCount
        });
      });

      this._onBeforeDraw = function (evt) {
        var pageView = _this2._pages[evt.pageNumber - 1];

        if (!pageView) {
          return;
        }

        _this2._buffer.push(pageView);
      };

      this.eventBus._on("pagerender", this._onBeforeDraw);

      this._onAfterDraw = function (evt) {
        if (evt.cssTransform || _this2._onePageRenderedCapability.settled) {
          return;
        }

        _this2._onePageRenderedCapability.resolve();

        _this2.eventBus._off("pagerendered", _this2._onAfterDraw);

        _this2._onAfterDraw = null;
      };

      this.eventBus._on("pagerendered", this._onAfterDraw);

      firstPagePromise.then(function (firstPdfPage) {
        _this2._firstPageCapability.resolve(firstPdfPage);

        _this2._optionalContentConfigPromise = optionalContentConfigPromise;
        var scale = _this2.currentScale;
        var viewport = firstPdfPage.getViewport({
          scale: scale * _ui_utils.CSS_UNITS
        });
        var textLayerFactory = _this2.textLayerMode !== _ui_utils.TextLayerMode.DISABLE ? _this2 : null;

        for (var pageNum = 1; pageNum <= pagesCount; ++pageNum) {
          var pageView = new _pdf_page_view.PDFPageView({
            container: _this2._viewerElement,
            eventBus: _this2.eventBus,
            id: pageNum,
            scale: scale,
            defaultViewport: viewport.clone(),
            annotationStorage: annotationStorage,
            optionalContentConfigPromise: optionalContentConfigPromise,
            renderingQueue: _this2.renderingQueue,
            textLayerFactory: textLayerFactory,
            textLayerMode: _this2.textLayerMode,
            annotationLayerFactory: _this2,
            imageResourcesPath: _this2.imageResourcesPath,
            renderInteractiveForms: _this2.renderInteractiveForms,
            renderer: _this2.renderer,
            enableWebGL: _this2.enableWebGL,
            useOnlyCssZoom: _this2.useOnlyCssZoom,
            maxCanvasPixels: _this2.maxCanvasPixels,
            l10n: _this2.l10n
          });

          _this2._pages.push(pageView);
        }

        var firstPageView = _this2._pages[0];

        if (firstPageView) {
          firstPageView.setPdfPage(firstPdfPage);

          _this2.linkService.cachePageRef(1, firstPdfPage.ref);
        }

        if (_this2._spreadMode !== _ui_utils.SpreadMode.NONE) {
          _this2._updateSpreadMode();
        }

        _this2._onePageRenderedOrForceFetch().then(function () {
          if (_this2.findController) {
            _this2.findController.setDocument(pdfDocument);
          }

          if (pdfDocument.loadingParams.disableAutoFetch || pagesCount > 7500) {
            _this2._pagesCapability.resolve();

            return;
          }

          var getPagesLeft = pagesCount - 1;

          if (getPagesLeft <= 0) {
            _this2._pagesCapability.resolve();

            return;
          }

          var _loop = function _loop(_pageNum) {
            pdfDocument.getPage(_pageNum).then(function (pdfPage) {
              var pageView = _this2._pages[_pageNum - 1];

              if (!pageView.pdfPage) {
                pageView.setPdfPage(pdfPage);
              }

              _this2.linkService.cachePageRef(_pageNum, pdfPage.ref);

              if (--getPagesLeft === 0) {
                _this2._pagesCapability.resolve();
              }
            }, function (reason) {
              console.error("Unable to get page ".concat(_pageNum, " to initialize viewer"), reason);

              if (--getPagesLeft === 0) {
                _this2._pagesCapability.resolve();
              }
            });
          };

          for (var _pageNum = 2; _pageNum <= pagesCount; ++_pageNum) {
            _loop(_pageNum);
          }
        });

        _this2.eventBus.dispatch("pagesinit", {
          source: _this2
        });

        if (_this2.defaultRenderingQueue) {
          _this2.update();
        }
      })["catch"](function (reason) {
        console.error("Unable to initialize viewer", reason);
      });
    }
  }, {
    key: "setPageLabels",
    value: function setPageLabels(labels) {
      if (!this.pdfDocument) {
        return;
      }

      if (!labels) {
        this._pageLabels = null;
      } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
        this._pageLabels = null;
        console.error("".concat(this._name, ".setPageLabels: Invalid page labels."));
      } else {
        this._pageLabels = labels;
      }

      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        var pageView = this._pages[i];
        var label = this._pageLabels && this._pageLabels[i];
        pageView.setPageLabel(label);
      }
    }
  }, {
    key: "_resetView",
    value: function _resetView() {
      this._pages = [];
      this._currentPageNumber = 1;
      this._currentScale = _ui_utils.UNKNOWN_SCALE;
      this._currentScaleValue = null;
      this._pageLabels = null;
      this._buffer = new PDFPageViewBuffer(DEFAULT_CACHE_SIZE);
      this._location = null;
      this._pagesRotation = 0;
      this._optionalContentConfigPromise = null;
      this._pagesRequests = new WeakMap();
      this._firstPageCapability = (0, _pdfjsLib.createPromiseCapability)();
      this._onePageRenderedCapability = (0, _pdfjsLib.createPromiseCapability)();
      this._pagesCapability = (0, _pdfjsLib.createPromiseCapability)();
      this._scrollMode = _ui_utils.ScrollMode.VERTICAL;
      this._spreadMode = _ui_utils.SpreadMode.NONE;

      if (this._onBeforeDraw) {
        this.eventBus._off("pagerender", this._onBeforeDraw);

        this._onBeforeDraw = null;
      }

      if (this._onAfterDraw) {
        this.eventBus._off("pagerendered", this._onAfterDraw);

        this._onAfterDraw = null;
      }

      this.viewer.textContent = "";

      this._updateScrollMode();
    }
  }, {
    key: "_scrollUpdate",
    value: function _scrollUpdate() {
      if (this.pagesCount === 0) {
        return;
      }

      this.update();
    }
  }, {
    key: "_scrollIntoView",
    value: function _scrollIntoView(_ref) {
      var pageDiv = _ref.pageDiv,
          _ref$pageSpot = _ref.pageSpot,
          pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
          _ref$pageNumber = _ref.pageNumber,
          pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;
      (0, _ui_utils.scrollIntoView)(pageDiv, pageSpot);
    }
  }, {
    key: "_setScaleUpdatePages",
    value: function _setScaleUpdatePages(newScale, newValue) {
      var noScroll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var preset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this._currentScaleValue = newValue.toString();

      if (isSameScale(this._currentScale, newScale)) {
        if (preset) {
          this.eventBus.dispatch("scalechanging", {
            source: this,
            scale: newScale,
            presetValue: newValue
          });
        }

        return;
      }

      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        this._pages[i].update(newScale);
      }

      this._currentScale = newScale;

      if (!noScroll) {
        var page = this._currentPageNumber,
            dest;

        if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
          page = this._location.pageNumber;
          dest = [null, {
            name: "XYZ"
          }, this._location.left, this._location.top, null];
        }

        this.scrollPageIntoView({
          pageNumber: page,
          destArray: dest,
          allowNegativeOffset: true
        });
      }

      this.eventBus.dispatch("scalechanging", {
        source: this,
        scale: newScale,
        presetValue: preset ? newValue : undefined
      });

      if (this.defaultRenderingQueue) {
        this.update();
      }
    }
  }, {
    key: "_setScale",
    value: function _setScale(value) {
      var noScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scale = parseFloat(value);

      if (scale > 0) {
        this._setScaleUpdatePages(scale, value, noScroll, false);
      } else {
        var currentPage = this._pages[this._currentPageNumber - 1];

        if (!currentPage) {
          return;
        }

        var noPadding = this.isInPresentationMode || this.removePageBorders;
        var hPadding = noPadding ? 0 : _ui_utils.SCROLLBAR_PADDING;
        var vPadding = noPadding ? 0 : _ui_utils.VERTICAL_PADDING;

        if (!noPadding && this._isScrollModeHorizontal) {
          var _ref2 = [vPadding, hPadding];
          hPadding = _ref2[0];
          vPadding = _ref2[1];
        }

        var pageWidthScale = (this.container.clientWidth - hPadding) / currentPage.width * currentPage.scale;
        var pageHeightScale = (this.container.clientHeight - vPadding) / currentPage.height * currentPage.scale;

        switch (value) {
          case "page-actual":
            scale = 1;
            break;

          case "page-width":
            scale = pageWidthScale;
            break;

          case "page-height":
            scale = pageHeightScale;
            break;

          case "page-fit":
            scale = Math.min(pageWidthScale, pageHeightScale);
            break;

          case "auto":
            var horizontalScale = (0, _ui_utils.isPortraitOrientation)(currentPage) ? pageWidthScale : Math.min(pageHeightScale, pageWidthScale);
            scale = Math.min(_ui_utils.MAX_AUTO_SCALE, horizontalScale);
            break;

          default:
            console.error("".concat(this._name, "._setScale: \"").concat(value, "\" is an unknown zoom value."));
            return;
        }

        this._setScaleUpdatePages(scale, value, noScroll, true);
      }
    }
  }, {
    key: "_resetCurrentPageView",
    value: function _resetCurrentPageView() {
      if (this.isInPresentationMode) {
        this._setScale(this._currentScaleValue, true);
      }

      var pageView = this._pages[this._currentPageNumber - 1];

      this._scrollIntoView({
        pageDiv: pageView.div
      });
    }
  }, {
    key: "scrollPageIntoView",
    value: function scrollPageIntoView(_ref3) {
      var pageNumber = _ref3.pageNumber,
          _ref3$destArray = _ref3.destArray,
          destArray = _ref3$destArray === void 0 ? null : _ref3$destArray,
          _ref3$allowNegativeOf = _ref3.allowNegativeOffset,
          allowNegativeOffset = _ref3$allowNegativeOf === void 0 ? false : _ref3$allowNegativeOf,
          _ref3$ignoreDestinati = _ref3.ignoreDestinationZoom,
          ignoreDestinationZoom = _ref3$ignoreDestinati === void 0 ? false : _ref3$ignoreDestinati;

      if (!this.pdfDocument) {
        return;
      }

      var pageView = Number.isInteger(pageNumber) && this._pages[pageNumber - 1];

      if (!pageView) {
        console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(pageNumber, "\" is not a valid pageNumber parameter."));
        return;
      }

      if (this.isInPresentationMode || !destArray) {
        this._setCurrentPageNumber(pageNumber, true);

        return;
      }

      var x = 0,
          y = 0;
      var width = 0,
          height = 0,
          widthScale,
          heightScale;
      var changeOrientation = pageView.rotation % 180 !== 0;
      var pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scale / _ui_utils.CSS_UNITS;
      var pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scale / _ui_utils.CSS_UNITS;
      var scale = 0;

      switch (destArray[1].name) {
        case "XYZ":
          x = destArray[2];
          y = destArray[3];
          scale = destArray[4];
          x = x !== null ? x : 0;
          y = y !== null ? y : pageHeight;
          break;

        case "Fit":
        case "FitB":
          scale = "page-fit";
          break;

        case "FitH":
        case "FitBH":
          y = destArray[2];
          scale = "page-width";

          if (y === null && this._location) {
            x = this._location.left;
            y = this._location.top;
          }

          break;

        case "FitV":
        case "FitBV":
          x = destArray[2];
          width = pageWidth;
          height = pageHeight;
          scale = "page-height";
          break;

        case "FitR":
          x = destArray[2];
          y = destArray[3];
          width = destArray[4] - x;
          height = destArray[5] - y;
          var hPadding = this.removePageBorders ? 0 : _ui_utils.SCROLLBAR_PADDING;
          var vPadding = this.removePageBorders ? 0 : _ui_utils.VERTICAL_PADDING;
          widthScale = (this.container.clientWidth - hPadding) / width / _ui_utils.CSS_UNITS;
          heightScale = (this.container.clientHeight - vPadding) / height / _ui_utils.CSS_UNITS;
          scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
          break;

        default:
          console.error("".concat(this._name, ".scrollPageIntoView: ") + "\"".concat(destArray[1].name, "\" is not a valid destination type."));
          return;
      }

      if (!ignoreDestinationZoom) {
        if (scale && scale !== this._currentScale) {
          this.currentScaleValue = scale;
        } else if (this._currentScale === _ui_utils.UNKNOWN_SCALE) {
          this.currentScaleValue = _ui_utils.DEFAULT_SCALE_VALUE;
        }
      }

      if (scale === "page-fit" && !destArray[4]) {
        this._scrollIntoView({
          pageDiv: pageView.div,
          pageNumber: pageNumber
        });

        return;
      }

      var boundingRect = [pageView.viewport.convertToViewportPoint(x, y), pageView.viewport.convertToViewportPoint(x + width, y + height)];
      var left = Math.min(boundingRect[0][0], boundingRect[1][0]);
      var top = Math.min(boundingRect[0][1], boundingRect[1][1]);

      if (!allowNegativeOffset) {
        left = Math.max(left, 0);
        top = Math.max(top, 0);
      }

      this._scrollIntoView({
        pageDiv: pageView.div,
        pageSpot: {
          left: left,
          top: top
        },
        pageNumber: pageNumber
      });
    }
  }, {
    key: "_updateLocation",
    value: function _updateLocation(firstPage) {
      var currentScale = this._currentScale;
      var currentScaleValue = this._currentScaleValue;
      var normalizedScaleValue = parseFloat(currentScaleValue) === currentScale ? Math.round(currentScale * 10000) / 100 : currentScaleValue;
      var pageNumber = firstPage.id;
      var pdfOpenParams = "#page=" + pageNumber;
      pdfOpenParams += "&zoom=" + normalizedScaleValue;
      var currentPageView = this._pages[pageNumber - 1];
      var container = this.container;
      var topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
      var intLeft = Math.round(topLeft[0]);
      var intTop = Math.round(topLeft[1]);
      pdfOpenParams += "," + intLeft + "," + intTop;
      this._location = {
        pageNumber: pageNumber,
        scale: normalizedScaleValue,
        top: intTop,
        left: intLeft,
        rotation: this._pagesRotation,
        pdfOpenParams: pdfOpenParams
      };
    }
  }, {
    key: "_updateHelper",
    value: function _updateHelper(visiblePages) {
      throw new Error("Not implemented: _updateHelper");
    }
  }, {
    key: "update",
    value: function update() {
      var visible = this._getVisiblePages();

      var visiblePages = visible.views,
          numVisiblePages = visiblePages.length;

      if (numVisiblePages === 0) {
        return;
      }

      var newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);

      this._buffer.resize(newCacheSize, visiblePages);

      this.renderingQueue.renderHighestPriority(visible);

      this._updateHelper(visiblePages);

      this._updateLocation(visible.first);

      this.eventBus.dispatch("updateviewarea", {
        source: this,
        location: this._location
      });
    }
  }, {
    key: "containsElement",
    value: function containsElement(element) {
      return this.container.contains(element);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.container.focus();
    }
  }, {
    key: "_getCurrentVisiblePage",
    value: function _getCurrentVisiblePage() {
      if (!this.pagesCount) {
        return {
          views: []
        };
      }

      var pageView = this._pages[this._currentPageNumber - 1];
      var element = pageView.div;
      var view = {
        id: pageView.id,
        x: element.offsetLeft + element.clientLeft,
        y: element.offsetTop + element.clientTop,
        view: pageView
      };
      return {
        first: view,
        last: view,
        views: [view]
      };
    }
  }, {
    key: "_getVisiblePages",
    value: function _getVisiblePages() {
      return (0, _ui_utils.getVisibleElements)(this.container, this._pages, true, this._isScrollModeHorizontal);
    }
  }, {
    key: "isPageVisible",
    value: function isPageVisible(pageNumber) {
      if (!this.pdfDocument) {
        return false;
      }

      if (pageNumber < 1 || pageNumber > this.pagesCount) {
        console.error("".concat(this._name, ".isPageVisible: \"").concat(pageNumber, "\" is out of bounds."));
        return false;
      }

      return this._getVisiblePages().views.some(function (view) {
        return view.id === pageNumber;
      });
    }
  }, {
    key: "cleanup",
    value: function cleanup() {
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        if (this._pages[i] && this._pages[i].renderingState !== _pdf_rendering_queue.RenderingStates.FINISHED) {
          this._pages[i].reset();
        }
      }
    }
  }, {
    key: "_cancelRendering",
    value: function _cancelRendering() {
      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        if (this._pages[i]) {
          this._pages[i].cancelRendering();
        }
      }
    }
  }, {
    key: "_ensurePdfPageLoaded",
    value: function _ensurePdfPageLoaded(pageView) {
      var _this3 = this;

      if (pageView.pdfPage) {
        return Promise.resolve(pageView.pdfPage);
      }

      if (this._pagesRequests.has(pageView)) {
        return this._pagesRequests.get(pageView);
      }

      var promise = this.pdfDocument.getPage(pageView.id).then(function (pdfPage) {
        if (!pageView.pdfPage) {
          pageView.setPdfPage(pdfPage);
        }

        _this3._pagesRequests["delete"](pageView);

        return pdfPage;
      })["catch"](function (reason) {
        console.error("Unable to get page for page view", reason);

        _this3._pagesRequests["delete"](pageView);
      });

      this._pagesRequests.set(pageView, promise);

      return promise;
    }
  }, {
    key: "forceRendering",
    value: function forceRendering(currentlyVisiblePages) {
      var _this4 = this;

      var visiblePages = currentlyVisiblePages || this._getVisiblePages();

      var scrollAhead = this._isScrollModeHorizontal ? this.scroll.right : this.scroll.down;
      var pageView = this.renderingQueue.getHighestPriority(visiblePages, this._pages, scrollAhead);

      if (pageView) {
        this._ensurePdfPageLoaded(pageView).then(function () {
          _this4.renderingQueue.renderView(pageView);
        });

        return true;
      }

      return false;
    }
  }, {
    key: "createTextLayerBuilder",
    value: function createTextLayerBuilder(textLayerDiv, pageIndex, viewport) {
      var enhanceTextSelection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var eventBus = arguments.length > 4 ? arguments[4] : undefined;
      return new _text_layer_builder.TextLayerBuilder({
        textLayerDiv: textLayerDiv,
        eventBus: eventBus,
        pageIndex: pageIndex,
        viewport: viewport,
        findController: this.isInPresentationMode ? null : this.findController,
        enhanceTextSelection: this.isInPresentationMode ? false : enhanceTextSelection
      });
    }
  }, {
    key: "createAnnotationLayerBuilder",
    value: function createAnnotationLayerBuilder(pageDiv, pdfPage) {
      var annotationStorage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var imageResourcesPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var renderInteractiveForms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var l10n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _ui_utils.NullL10n;
      return new _annotation_layer_builder.AnnotationLayerBuilder({
        pageDiv: pageDiv,
        pdfPage: pdfPage,
        annotationStorage: annotationStorage,
        imageResourcesPath: imageResourcesPath,
        renderInteractiveForms: renderInteractiveForms,
        linkService: this.linkService,
        downloadManager: this.downloadManager,
        l10n: l10n
      });
    }
  }, {
    key: "getPagesOverview",
    value: function getPagesOverview() {
      var pagesOverview = this._pages.map(function (pageView) {
        var viewport = pageView.pdfPage.getViewport({
          scale: 1
        });
        return {
          width: viewport.width,
          height: viewport.height,
          rotation: viewport.rotation
        };
      });

      if (!this.enablePrintAutoRotate) {
        return pagesOverview;
      }

      return pagesOverview.map(function (size) {
        if ((0, _ui_utils.isPortraitOrientation)(size)) {
          return size;
        }

        return {
          width: size.height,
          height: size.width,
          rotation: (size.rotation + 90) % 360
        };
      });
    }
  }, {
    key: "_updateScrollMode",
    value: function _updateScrollMode() {
      var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var scrollMode = this._scrollMode,
          viewer = this.viewer;
      viewer.classList.toggle("scrollHorizontal", scrollMode === _ui_utils.ScrollMode.HORIZONTAL);
      viewer.classList.toggle("scrollWrapped", scrollMode === _ui_utils.ScrollMode.WRAPPED);

      if (!this.pdfDocument || !pageNumber) {
        return;
      }

      if (this._currentScaleValue && isNaN(this._currentScaleValue)) {
        this._setScale(this._currentScaleValue, true);
      }

      this._setCurrentPageNumber(pageNumber, true);

      this.update();
    }
  }, {
    key: "_updateSpreadMode",
    value: function _updateSpreadMode() {
      var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.pdfDocument) {
        return;
      }

      var viewer = this.viewer,
          pages = this._pages;
      viewer.textContent = "";

      if (this._spreadMode === _ui_utils.SpreadMode.NONE) {
        for (var i = 0, iMax = pages.length; i < iMax; ++i) {
          viewer.appendChild(pages[i].div);
        }
      } else {
        var parity = this._spreadMode - 1;
        var spread = null;

        for (var _i = 0, _iMax = pages.length; _i < _iMax; ++_i) {
          if (spread === null) {
            spread = document.createElement("div");
            spread.className = "spread";
            viewer.appendChild(spread);
          } else if (_i % 2 === parity) {
            spread = spread.cloneNode(false);
            viewer.appendChild(spread);
          }

          spread.appendChild(pages[_i].div);
        }
      }

      if (!pageNumber) {
        return;
      }

      this._setCurrentPageNumber(pageNumber, true);

      this.update();
    }
  }, {
    key: "pagesCount",
    get: function get() {
      return this._pages.length;
    }
  }, {
    key: "pageViewsReady",
    get: function get() {
      if (!this._pagesCapability.settled) {
        return false;
      }

      return this._pages.every(function (pageView) {
        return pageView && pageView.pdfPage;
      });
    }
  }, {
    key: "currentPageNumber",
    get: function get() {
      return this._currentPageNumber;
    },
    set: function set(val) {
      if (!Number.isInteger(val)) {
        throw new Error("Invalid page number.");
      }

      if (!this.pdfDocument) {
        return;
      }

      if (!this._setCurrentPageNumber(val, true)) {
        console.error("".concat(this._name, ".currentPageNumber: \"").concat(val, "\" is not a valid page."));
      }
    }
  }, {
    key: "currentPageLabel",
    get: function get() {
      return this._pageLabels && this._pageLabels[this._currentPageNumber - 1];
    },
    set: function set(val) {
      if (!this.pdfDocument) {
        return;
      }

      var page = val | 0;

      if (this._pageLabels) {
        var i = this._pageLabels.indexOf(val);

        if (i >= 0) {
          page = i + 1;
        }
      }

      if (!this._setCurrentPageNumber(page, true)) {
        console.error("".concat(this._name, ".currentPageLabel: \"").concat(val, "\" is not a valid page."));
      }
    }
  }, {
    key: "currentScale",
    get: function get() {
      return this._currentScale !== _ui_utils.UNKNOWN_SCALE ? this._currentScale : _ui_utils.DEFAULT_SCALE;
    },
    set: function set(val) {
      if (isNaN(val)) {
        throw new Error("Invalid numeric scale.");
      }

      if (!this.pdfDocument) {
        return;
      }

      this._setScale(val, false);
    }
  }, {
    key: "currentScaleValue",
    get: function get() {
      return this._currentScaleValue;
    },
    set: function set(val) {
      if (!this.pdfDocument) {
        return;
      }

      this._setScale(val, false);
    }
  }, {
    key: "pagesRotation",
    get: function get() {
      return this._pagesRotation;
    },
    set: function set(rotation) {
      if (!(0, _ui_utils.isValidRotation)(rotation)) {
        throw new Error("Invalid pages rotation angle.");
      }

      if (!this.pdfDocument) {
        return;
      }

      if (this._pagesRotation === rotation) {
        return;
      }

      this._pagesRotation = rotation;
      var pageNumber = this._currentPageNumber;

      for (var i = 0, ii = this._pages.length; i < ii; i++) {
        var pageView = this._pages[i];
        pageView.update(pageView.scale, rotation);
      }

      if (this._currentScaleValue) {
        this._setScale(this._currentScaleValue, true);
      }

      this.eventBus.dispatch("rotationchanging", {
        source: this,
        pagesRotation: rotation,
        pageNumber: pageNumber
      });

      if (this.defaultRenderingQueue) {
        this.update();
      }
    }
  }, {
    key: "firstPagePromise",
    get: function get() {
      return this.pdfDocument ? this._firstPageCapability.promise : null;
    }
  }, {
    key: "onePageRendered",
    get: function get() {
      return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
    }
  }, {
    key: "pagesPromise",
    get: function get() {
      return this.pdfDocument ? this._pagesCapability.promise : null;
    }
  }, {
    key: "_viewerElement",
    get: function get() {
      throw new Error("Not implemented: _viewerElement");
    }
  }, {
    key: "_isScrollModeHorizontal",
    get: function get() {
      return this.isInPresentationMode ? false : this._scrollMode === _ui_utils.ScrollMode.HORIZONTAL;
    }
  }, {
    key: "isInPresentationMode",
    get: function get() {
      return this.presentationModeState === _ui_utils.PresentationModeState.FULLSCREEN;
    }
  }, {
    key: "isChangingPresentationMode",
    get: function get() {
      return this.presentationModeState === _ui_utils.PresentationModeState.CHANGING;
    }
  }, {
    key: "isHorizontalScrollbarEnabled",
    get: function get() {
      return this.isInPresentationMode ? false : this.container.scrollWidth > this.container.clientWidth;
    }
  }, {
    key: "isVerticalScrollbarEnabled",
    get: function get() {
      return this.isInPresentationMode ? false : this.container.scrollHeight > this.container.clientHeight;
    }
  }, {
    key: "hasEqualPageSizes",
    get: function get() {
      var firstPageView = this._pages[0];

      for (var i = 1, ii = this._pages.length; i < ii; ++i) {
        var pageView = this._pages[i];

        if (pageView.width !== firstPageView.width || pageView.height !== firstPageView.height) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "optionalContentConfigPromise",
    get: function get() {
      if (!this.pdfDocument) {
        return Promise.resolve(null);
      }

      if (!this._optionalContentConfigPromise) {
        return this.pdfDocument.getOptionalContentConfig();
      }

      return this._optionalContentConfigPromise;
    },
    set: function set(promise) {
      if (!(promise instanceof Promise)) {
        throw new Error("Invalid optionalContentConfigPromise: ".concat(promise));
      }

      if (!this.pdfDocument) {
        return;
      }

      if (!this._optionalContentConfigPromise) {
        return;
      }

      this._optionalContentConfigPromise = promise;

      var _iterator = _createForOfIteratorHelper(this._pages),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pageView = _step.value;
          pageView.update(pageView.scale, pageView.rotation, promise);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.update();
      this.eventBus.dispatch("optionalcontentconfigchanged", {
        source: this,
        promise: promise
      });
    }
  }, {
    key: "scrollMode",
    get: function get() {
      return this._scrollMode;
    },
    set: function set(mode) {
      if (this._scrollMode === mode) {
        return;
      }

      if (!(0, _ui_utils.isValidScrollMode)(mode)) {
        throw new Error("Invalid scroll mode: ".concat(mode));
      }

      this._scrollMode = mode;
      this.eventBus.dispatch("scrollmodechanged", {
        source: this,
        mode: mode
      });

      this._updateScrollMode(this._currentPageNumber);
    }
  }, {
    key: "spreadMode",
    get: function get() {
      return this._spreadMode;
    },
    set: function set(mode) {
      if (this._spreadMode === mode) {
        return;
      }

      if (!(0, _ui_utils.isValidSpreadMode)(mode)) {
        throw new Error("Invalid spread mode: ".concat(mode));
      }

      this._spreadMode = mode;
      this.eventBus.dispatch("spreadmodechanged", {
        source: this,
        mode: mode
      });

      this._updateSpreadMode(this._currentPageNumber);
    }
  }]);

  return BaseViewer;
}();

exports.BaseViewer = BaseViewer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFViewer = void 0;

var _base_viewer = __w_pdfjs_require__(19);

var _pdfjsLib = __w_pdfjs_require__(2);

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PDFViewer = /*#__PURE__*/function (_BaseViewer) {
  _inherits(PDFViewer, _BaseViewer);

  var _super = _createSuper(PDFViewer);

  function PDFViewer() {
    _classCallCheck(this, PDFViewer);

    return _super.apply(this, arguments);
  }

  _createClass(PDFViewer, [{
    key: "_scrollIntoView",
    value: function _scrollIntoView(_ref) {
      var pageDiv = _ref.pageDiv,
          _ref$pageSpot = _ref.pageSpot,
          pageSpot = _ref$pageSpot === void 0 ? null : _ref$pageSpot,
          _ref$pageNumber = _ref.pageNumber,
          pageNumber = _ref$pageNumber === void 0 ? null : _ref$pageNumber;

      if (!pageSpot && !this.isInPresentationMode) {
        var left = pageDiv.offsetLeft + pageDiv.clientLeft;
        var right = left + pageDiv.clientWidth;
        var _this$container = this.container,
            scrollLeft = _this$container.scrollLeft,
            clientWidth = _this$container.clientWidth;

        if (this._isScrollModeHorizontal || left < scrollLeft || right > scrollLeft + clientWidth) {
          pageSpot = {
            left: 0,
            top: 0
          };
        }
      }

      _get(_getPrototypeOf(PDFViewer.prototype), "_scrollIntoView", this).call(this, {
        pageDiv: pageDiv,
        pageSpot: pageSpot,
        pageNumber: pageNumber
      });
    }
  }, {
    key: "_getVisiblePages",
    value: function _getVisiblePages() {
      if (this.isInPresentationMode) {
        return this._getCurrentVisiblePage();
      }

      return _get(_getPrototypeOf(PDFViewer.prototype), "_getVisiblePages", this).call(this);
    }
  }, {
    key: "_updateHelper",
    value: function _updateHelper(visiblePages) {
      if (this.isInPresentationMode) {
        return;
      }

      var currentId = this._currentPageNumber;
      var stillFullyVisible = false;

      var _iterator = _createForOfIteratorHelper(visiblePages),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var page = _step.value;

          if (page.percent < 100) {
            break;
          }

          if (page.id === currentId) {
            stillFullyVisible = true;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!stillFullyVisible) {
        currentId = visiblePages[0].id;
      }

      this._setCurrentPageNumber(currentId);
    }
  }, {
    key: "_viewerElement",
    get: function get() {
      return (0, _pdfjsLib.shadow)(this, "_viewerElement", this.viewer);
    }
  }]);

  return PDFViewer;
}(_base_viewer.BaseViewer);

exports.PDFViewer = PDFViewer;

/***/ })
/******/ ]);
});
//# sourceMappingURL=pdf_viewer.js.map
/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
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
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("pdfjs-dist/image_decoders/pdf.image_decoders",[],t):"object"==typeof exports?exports["pdfjs-dist/image_decoders/pdf.image_decoders"]=t():e["pdfjs-dist/image_decoders/pdf.image_decoders"]=e.pdfjsImageDecoders=t()}(this,(function(){return function(e){var t={};function __w_pdfjs_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};e[r].call(n.exports,n,n.exports,__w_pdfjs_require__);n.l=!0;return n.exports}__w_pdfjs_require__.m=e;__w_pdfjs_require__.c=t;__w_pdfjs_require__.d=function(e,t,r){__w_pdfjs_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})};__w_pdfjs_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:!0})};__w_pdfjs_require__.t=function(e,t){1&t&&(e=__w_pdfjs_require__(e));if(8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);__w_pdfjs_require__.r(r);Object.defineProperty(r,"default",{enumerable:!0,value:e});if(2&t&&"string"!=typeof e)for(var n in e)__w_pdfjs_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r};__w_pdfjs_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};__w_pdfjs_require__.d(t,"a",t);return t};__w_pdfjs_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};__w_pdfjs_require__.p="";return __w_pdfjs_require__(__w_pdfjs_require__.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});Object.defineProperty(t,"getVerbosityLevel",{enumerable:!0,get:function get(){return n.getVerbosityLevel}});Object.defineProperty(t,"setVerbosityLevel",{enumerable:!0,get:function get(){return n.setVerbosityLevel}});Object.defineProperty(t,"Jbig2mage",{enumerable:!0,get:function get(){return i.Jbig2mage}});Object.defineProperty(t,"JpegImage",{enumerable:!0,get:function get(){return o.JpegImage}});Object.defineProperty(t,"JpxImage",{enumerable:!0,get:function get(){return a.JpxImage}});var n=r(1),i=r(178),o=r(182),a=r(183)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.arrayByteLength=arrayByteLength;t.arraysToBytes=function arraysToBytes(e){var t=e.length;if(1===t&&e[0]instanceof Uint8Array)return e[0];for(var r=0,n=0;n<t;n++)r+=arrayByteLength(e[n]);for(var i=0,o=new Uint8Array(r),a=0;a<t;a++){var s=e[a];s instanceof Uint8Array||(s="string"==typeof s?stringToBytes(s):new Uint8Array(s));var c=s.byteLength;o.set(s,i);i+=c}return o};t.assert=assert;t.bytesToString=function bytesToString(e){assert(null!==e&&"object"===_typeof(e)&&void 0!==e.length,"Invalid argument for bytesToString");var t=e.length;if(t<8192)return String.fromCharCode.apply(null,e);for(var r=[],n=0;n<t;n+=8192){var i=Math.min(n+8192,t),o=e.subarray(n,i);r.push(String.fromCharCode.apply(null,o))}return r.join("")};t.createPromiseCapability=function createPromiseCapability(){var e=Object.create(null),t=!1;Object.defineProperty(e,"settled",{get:function get(){return t}});e.promise=new Promise((function(r,n){e.resolve=function(e){t=!0;r(e)};e.reject=function(e){t=!0;n(e)}}));return e};t.escapeString=function escapeString(e){return e.replace(/([\(\)\\])/g,"\\$1")};t.getModificationDate=function getModificationDate(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date(Date.now()),t=[e.getUTCFullYear().toString(),(e.getUTCMonth()+1).toString().padStart(2,"0"),(e.getUTCDate()+1).toString().padStart(2,"0"),e.getUTCHours().toString().padStart(2,"0"),e.getUTCMinutes().toString().padStart(2,"0"),e.getUTCSeconds().toString().padStart(2,"0")];return t.join("")};t.getVerbosityLevel=function getVerbosityLevel(){return i};t.info=function info(e){i>=n.INFOS&&console.log("Info: ".concat(e))};t.isArrayBuffer=function isArrayBuffer(e){return"object"===_typeof(e)&&null!==e&&void 0!==e.byteLength};t.isArrayEqual=function isArrayEqual(e,t){if(e.length!==t.length)return!1;return e.every((function(e,r){return e===t[r]}))};t.isBool=function isBool(e){return"boolean"==typeof e};t.isNum=function isNum(e){return"number"==typeof e};t.isString=function isString(e){return"string"==typeof e};t.isSameOrigin=function isSameOrigin(e,t){var r;try{if(!(r=new URL(e)).origin||"null"===r.origin)return!1}catch(e){return!1}var n=new URL(t,r);return r.origin===n.origin};t.createValidAbsoluteUrl=function createValidAbsoluteUrl(e,t){if(!e)return null;try{var r=t?new URL(e,t):new URL(e);if(function _isValidProtocol(e){if(!e)return!1;switch(e.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0;default:return!1}}(r))return r}catch(e){}return null};t.removeNullCharacters=function removeNullCharacters(e){if("string"!=typeof e){warn("The argument for removeNullCharacters must be a string.");return e}return e.replace(d,"")};t.setVerbosityLevel=function setVerbosityLevel(e){Number.isInteger(e)&&(i=e)};t.shadow=shadow;t.string32=function string32(e){return String.fromCharCode(e>>24&255,e>>16&255,e>>8&255,255&e)};t.stringToBytes=stringToBytes;t.stringToPDFString=function stringToPDFString(e){var t=e.length,r=[];if("þ"===e[0]&&"ÿ"===e[1])for(var n=2;n<t;n+=2)r.push(String.fromCharCode(e.charCodeAt(n)<<8|e.charCodeAt(n+1)));else if("ÿ"===e[0]&&"þ"===e[1])for(var i=2;i<t;i+=2)r.push(String.fromCharCode(e.charCodeAt(i+1)<<8|e.charCodeAt(i)));else for(var o=0;o<t;++o){var a=y[e.charCodeAt(o)];r.push(a?String.fromCharCode(a):e.charAt(o))}return r.join("")};t.stringToUTF8String=function stringToUTF8String(e){return decodeURIComponent(escape(e))};t.utf8StringToString=function utf8StringToString(e){return unescape(encodeURIComponent(e))};t.warn=warn;t.unreachable=unreachable;t.IsEvalSupportedCached=t.IsLittleEndianCached=t.createObjectURL=t.FormatError=t.Util=t.UnknownErrorException=t.UnexpectedResponseException=t.TextRenderingMode=t.StreamType=t.PermissionFlag=t.PasswordResponses=t.PasswordException=t.MissingPDFException=t.InvalidPDFException=t.AbortException=t.CMapCompressionType=t.ImageKind=t.FontType=t.AnnotationType=t.AnnotationStateModelType=t.AnnotationReviewState=t.AnnotationReplyType=t.AnnotationMarkedState=t.AnnotationFlag=t.AnnotationFieldFlag=t.AnnotationBorderStyleType=t.UNSUPPORTED_FEATURES=t.VerbosityLevel=t.OPS=t.IDENTITY_MATRIX=t.FONT_IDENTITY_MATRIX=t.BaseException=void 0;r(2);function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}t.IDENTITY_MATRIX=[1,0,0,1,0,0];t.FONT_IDENTITY_MATRIX=[.001,0,0,.001,0,0];t.PermissionFlag={PRINT:4,MODIFY_CONTENTS:8,COPY:16,MODIFY_ANNOTATIONS:32,FILL_INTERACTIVE_FORMS:256,COPY_FOR_ACCESSIBILITY:512,ASSEMBLE:1024,PRINT_HIGH_QUALITY:2048};t.TextRenderingMode={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4};t.ImageKind={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3};t.AnnotationType={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26};t.AnnotationStateModelType={MARKED:"Marked",REVIEW:"Review"};t.AnnotationMarkedState={MARKED:"Marked",UNMARKED:"Unmarked"};t.AnnotationReviewState={ACCEPTED:"Accepted",REJECTED:"Rejected",CANCELLED:"Cancelled",COMPLETED:"Completed",NONE:"None"};t.AnnotationReplyType={GROUP:"Group",REPLY:"R"};t.AnnotationFlag={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512};t.AnnotationFieldFlag={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864};t.AnnotationBorderStyleType={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5};t.StreamType={UNKNOWN:"UNKNOWN",FLATE:"FLATE",LZW:"LZW",DCT:"DCT",JPX:"JPX",JBIG:"JBIG",A85:"A85",AHX:"AHX",CCF:"CCF",RLX:"RLX"};t.FontType={UNKNOWN:"UNKNOWN",TYPE1:"TYPE1",TYPE1C:"TYPE1C",CIDFONTTYPE0:"CIDFONTTYPE0",CIDFONTTYPE0C:"CIDFONTTYPE0C",TRUETYPE:"TRUETYPE",CIDFONTTYPE2:"CIDFONTTYPE2",TYPE3:"TYPE3",OPENTYPE:"OPENTYPE",TYPE0:"TYPE0",MMTYPE1:"MMTYPE1"};var n={ERRORS:0,WARNINGS:1,INFOS:5};t.VerbosityLevel=n;t.CMapCompressionType={NONE:0,BINARY:1,STREAM:2};t.OPS={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91};t.UNSUPPORTED_FEATURES={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font",errorTilingPattern:"errorTilingPattern",errorExtGState:"errorExtGState",errorXObject:"errorXObject",errorFontLoadType3:"errorFontLoadType3",errorFontState:"errorFontState",errorFontMissing:"errorFontMissing",errorFontTranslate:"errorFontTranslate",errorColorSpace:"errorColorSpace",errorOperatorList:"errorOperatorList",errorFontToUnicode:"errorFontToUnicode",errorFontLoadNative:"errorFontLoadNative",errorFontGetPath:"errorFontGetPath",errorMarkedContent:"errorMarkedContent"};t.PasswordResponses={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};var i=n.WARNINGS;function warn(e){i>=n.WARNINGS&&console.log("Warning: ".concat(e))}function unreachable(e){throw new Error(e)}function assert(e,t){e||unreachable(t)}function shadow(e,t,r){Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!1});return r}var o=function BaseExceptionClosure(){function BaseException(e){this.constructor===BaseException&&unreachable("Cannot initialize BaseException.");this.message=e;this.name=this.constructor.name}BaseException.prototype=new Error;BaseException.constructor=BaseException;return BaseException}();t.BaseException=o;var a=function(e){_inherits(PasswordException,e);var t=_createSuper(PasswordException);function PasswordException(e,r){var n;_classCallCheck(this,PasswordException);(n=t.call(this,e)).code=r;return n}return PasswordException}(o);t.PasswordException=a;var s=function(e){_inherits(UnknownErrorException,e);var t=_createSuper(UnknownErrorException);function UnknownErrorException(e,r){var n;_classCallCheck(this,UnknownErrorException);(n=t.call(this,e)).details=r;return n}return UnknownErrorException}(o);t.UnknownErrorException=s;var c=function(e){_inherits(InvalidPDFException,e);var t=_createSuper(InvalidPDFException);function InvalidPDFException(){_classCallCheck(this,InvalidPDFException);return t.apply(this,arguments)}return InvalidPDFException}(o);t.InvalidPDFException=c;var u=function(e){_inherits(MissingPDFException,e);var t=_createSuper(MissingPDFException);function MissingPDFException(){_classCallCheck(this,MissingPDFException);return t.apply(this,arguments)}return MissingPDFException}(o);t.MissingPDFException=u;var f=function(e){_inherits(UnexpectedResponseException,e);var t=_createSuper(UnexpectedResponseException);function UnexpectedResponseException(e,r){var n;_classCallCheck(this,UnexpectedResponseException);(n=t.call(this,e)).status=r;return n}return UnexpectedResponseException}(o);t.UnexpectedResponseException=f;var l=function(e){_inherits(FormatError,e);var t=_createSuper(FormatError);function FormatError(){_classCallCheck(this,FormatError);return t.apply(this,arguments)}return FormatError}(o);t.FormatError=l;var p=function(e){_inherits(AbortException,e);var t=_createSuper(AbortException);function AbortException(){_classCallCheck(this,AbortException);return t.apply(this,arguments)}return AbortException}(o);t.AbortException=p;var d=/\x00/g;function stringToBytes(e){assert("string"==typeof e,"Invalid argument for stringToBytes");for(var t=e.length,r=new Uint8Array(t),n=0;n<t;++n)r[n]=255&e.charCodeAt(n);return r}function arrayByteLength(e){if(void 0!==e.length)return e.length;assert(void 0!==e.byteLength,"arrayByteLength - invalid argument.");return e.byteLength}var h={get value(){return shadow(this,"value",function isLittleEndian(){var e=new Uint8Array(4);e[0]=1;return 1===new Uint32Array(e.buffer,0,1)[0]}())}};t.IsLittleEndianCached=h;var g={get value(){return shadow(this,"value",function isEvalSupported(){try{new Function("");return!0}catch(e){return!1}}())}};t.IsEvalSupportedCached=g;var v=["rgb(",0,",",0,",",0,")"],m=function(){function Util(){_classCallCheck(this,Util)}!function _createClass(e,t,r){t&&_defineProperties(e.prototype,t);r&&_defineProperties(e,r);return e}(Util,null,[{key:"makeCssRgb",value:function makeCssRgb(e,t,r){v[1]=e;v[3]=t;v[5]=r;return v.join("")}},{key:"transform",value:function transform(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}},{key:"applyTransform",value:function applyTransform(e,t){return[e[0]*t[0]+e[1]*t[2]+t[4],e[0]*t[1]+e[1]*t[3]+t[5]]}},{key:"applyInverseTransform",value:function applyInverseTransform(e,t){var r=t[0]*t[3]-t[1]*t[2];return[(e[0]*t[3]-e[1]*t[2]+t[2]*t[5]-t[4]*t[3])/r,(-e[0]*t[1]+e[1]*t[0]+t[4]*t[1]-t[5]*t[0])/r]}},{key:"getAxialAlignedBoundingBox",value:function getAxialAlignedBoundingBox(e,t){var r=Util.applyTransform(e,t),n=Util.applyTransform(e.slice(2,4),t),i=Util.applyTransform([e[0],e[3]],t),o=Util.applyTransform([e[2],e[1]],t);return[Math.min(r[0],n[0],i[0],o[0]),Math.min(r[1],n[1],i[1],o[1]),Math.max(r[0],n[0],i[0],o[0]),Math.max(r[1],n[1],i[1],o[1])]}},{key:"inverseTransform",value:function inverseTransform(e){var t=e[0]*e[3]-e[1]*e[2];return[e[3]/t,-e[1]/t,-e[2]/t,e[0]/t,(e[2]*e[5]-e[4]*e[3])/t,(e[4]*e[1]-e[5]*e[0])/t]}},{key:"apply3dTransform",value:function apply3dTransform(e,t){return[e[0]*t[0]+e[1]*t[1]+e[2]*t[2],e[3]*t[0]+e[4]*t[1]+e[5]*t[2],e[6]*t[0]+e[7]*t[1]+e[8]*t[2]]}},{key:"singularValueDecompose2dScale",value:function singularValueDecompose2dScale(e){var t=[e[0],e[2],e[1],e[3]],r=e[0]*t[0]+e[1]*t[2],n=e[0]*t[1]+e[1]*t[3],i=e[2]*t[0]+e[3]*t[2],o=e[2]*t[1]+e[3]*t[3],a=(r+o)/2,s=Math.sqrt((r+o)*(r+o)-4*(r*o-i*n))/2,c=a+s||1,u=a-s||1;return[Math.sqrt(c),Math.sqrt(u)]}},{key:"normalizeRect",value:function normalizeRect(e){var t=e.slice(0);if(e[0]>e[2]){t[0]=e[2];t[2]=e[0]}if(e[1]>e[3]){t[1]=e[3];t[3]=e[1]}return t}},{key:"intersect",value:function intersect(e,t){function compare(e,t){return e-t}var r=[e[0],e[2],t[0],t[2]].sort(compare),n=[e[1],e[3],t[1],t[3]].sort(compare),i=[];e=Util.normalizeRect(e);t=Util.normalizeRect(t);if(!(r[0]===e[0]&&r[1]===t[0]||r[0]===t[0]&&r[1]===e[0]))return null;i[0]=r[1];i[2]=r[2];if(!(n[0]===e[1]&&n[1]===t[1]||n[0]===t[1]&&n[1]===e[1]))return null;i[1]=n[1];i[3]=n[2];return i}}]);return Util}();t.Util=m;var y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364];var b=function createObjectURLClosure(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return function createObjectURL(t,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!n&&URL.createObjectURL){var i=new Blob([t],{type:r});return URL.createObjectURL(i)}for(var o="data:".concat(r,";base64,"),a=0,s=t.length;a<s;a+=3){var c=255&t[a],u=255&t[a+1],f=255&t[a+2],l=c>>2,p=(3&c)<<4|u>>4,d=a+1<s?(15&u)<<2|f>>6:64,h=a+2<s?63&f:64;o+=e[l]+e[p]+e[d]+e[h]}return o}}();t.createObjectURL=b},function(e,t,r){"use strict";var n=r(3);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}if("undefined"==typeof globalThis||!globalThis._pdfjsCompatibilityChecked){"undefined"!=typeof globalThis&&globalThis.Math===Math||(globalThis=r(4));globalThis._pdfjsCompatibilityChecked=!0;var i="object"===("undefined"==typeof window?"undefined":_typeof(window))&&"object"===("undefined"==typeof document?"undefined":_typeof(document)),o="undefined"!=typeof navigator&&navigator.userAgent||"",a=/Trident/.test(o);!function checkNodeBtoa(){!globalThis.btoa&&n.isNodeJS&&(globalThis.btoa=function(e){return Buffer.from(e,"binary").toString("base64")})}();!function checkNodeAtob(){!globalThis.atob&&n.isNodeJS&&(globalThis.atob=function(e){return Buffer.from(e,"base64").toString("binary")})}();!function checkChildNodeRemove(){i&&void 0===Element.prototype.remove&&(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();!function checkDOMTokenListAddRemove(){if(i&&!n.isNodeJS){var e=document.createElement("div");e.classList.add("testOne","testTwo");if(!0!==e.classList.contains("testOne")||!0!==e.classList.contains("testTwo")){var t=DOMTokenList.prototype.add,r=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];for(var i=0,o=r;i<o.length;i++){var a=o[i];t.call(this,a)}};DOMTokenList.prototype.remove=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=0,o=t;i<o.length;i++){var a=o[i];r.call(this,a)}}}}}();!function checkDOMTokenListToggle(){if(i&&!n.isNodeJS){!1!==document.createElement("div").classList.toggle("test",0)&&(DOMTokenList.prototype.toggle=function(e){var t=arguments.length>1?!!arguments[1]:!this.contains(e);return this[t?"add":"remove"](e),t})}}();!function checkWindowHistoryPushStateReplaceState(){if(i&&a){var e=window.history.pushState,t=window.history.replaceState;window.history.pushState=function(t,r,n){var i=void 0===n?[t,r]:[t,r,n];e.apply(this,i)};window.history.replaceState=function(e,r,n){var i=void 0===n?[e,r]:[e,r,n];t.apply(this,i)}}}();!function checkStringStartsWith(){String.prototype.startsWith||r(49)}();!function checkStringEndsWith(){String.prototype.endsWith||r(60)}();!function checkStringIncludes(){String.prototype.includes||r(62)}();!function checkArrayIncludes(){Array.prototype.includes||r(64)}();!function checkArrayFrom(){Array.from||r(72)}();!function checkObjectAssign(){Object.assign||r(94)}();!function checkObjectFromEntries(){Object.fromEntries||r(97)}();!function checkMathLog2(){Math.log2||(Math.log2=r(101))}();!function checkNumberIsNaN(){Number.isNaN||(Number.isNaN=r(103))}();!function checkNumberIsInteger(){Number.isInteger||(Number.isInteger=r(105))}();!function checkTypedArraySlice(){Uint8Array.prototype.slice||r(108)}();!function checkMapEntries(){globalThis.Map&&globalThis.Map.prototype.entries||(globalThis.Map=r(113))}();!function checkSetEntries(){globalThis.Set&&globalThis.Set.prototype.entries||(globalThis.Set=r(127))}();!function checkWeakMap(){globalThis.WeakMap||(globalThis.WeakMap=r(129))}();!function checkWeakSet(){globalThis.WeakSet||(globalThis.WeakSet=r(135))}();!function checkStringCodePointAt(){String.prototype.codePointAt||r(137)}();!function checkStringFromCodePoint(){String.fromCodePoint||(String.fromCodePoint=r(139))}();!function checkSymbol(){globalThis.Symbol||r(141)}();!function checkStringPadStart(){String.prototype.padStart||r(166)}();!function checkStringPadEnd(){String.prototype.padEnd||r(171)}();!function checkObjectValues(){Object.values||(Object.values=r(173))}();!function checkObjectEntries(){Object.entries||(Object.entries=r(176))}()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.isNodeJS=void 0;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=!("object"!==("undefined"==typeof process?"undefined":_typeof(process))||process+""!="[object process]"||process.versions.nw||process.versions.electron&&process.type&&"browser"!==process.type);t.isNodeJS=n},function(e,t,r){r(5);e.exports=r(7)},function(e,t,r){r(6)({global:!0},{globalThis:r(7)})},function(e,t,r){var n=r(7),i=r(8).f,o=r(22),a=r(25),s=r(26),c=r(36),u=r(48);e.exports=function(e,t){var r,f,l,p,d,h=e.target,g=e.global,v=e.stat;if(r=g?n:v?n[h]||s(h,{}):(n[h]||{}).prototype)for(f in t){p=t[f];l=e.noTargetGet?(d=i(r,f))&&d.value:r[f];if(!u(g?f:h+(v?".":"#")+f,e.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(e.sham||l&&l.sham)&&o(p,"sham",!0);a(r,f,p,e)}}},function(e,t){var check=function(e){return e&&e.Math==Math&&e};e.exports=check("object"==typeof globalThis&&globalThis)||check("object"==typeof window&&window)||check("object"==typeof self&&self)||check("object"==typeof global&&global)||Function("return this")()},function(e,t,r){var n=r(9),i=r(11),o=r(12),a=r(13),s=r(17),c=r(19),u=r(20),f=Object.getOwnPropertyDescriptor;t.f=n?f:function getOwnPropertyDescriptor(e,t){e=a(e);t=s(t,!0);if(u)try{return f(e,t)}catch(e){}if(c(e,t))return o(!i.f.call(e,t),e[t])}},function(e,t,r){var n=r(10);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,r){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!n.call({1:2},1);t.f=o?function propertyIsEnumerable(e){var t=i(this,e);return!!t&&t.enumerable}:n},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(14),i=r(16);e.exports=function(e){return n(i(e))}},function(e,t,r){var n=r(10),i=r(15),o="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,r){var n=r(18);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t,r){var n=r(9),i=r(10),o=r(21);e.exports=!n&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(e,t,r){var n=r(7),i=r(18),o=n.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},function(e,t,r){var n=r(9),i=r(23),o=r(12);e.exports=n?function(e,t,r){return i.f(e,t,o(1,r))}:function(e,t,r){e[t]=r;return e}},function(e,t,r){var n=r(9),i=r(20),o=r(24),a=r(17),s=Object.defineProperty;t.f=n?s:function defineProperty(e,t,r){o(e);t=a(t,!0);o(r);if(i)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");"value"in r&&(e[t]=r.value);return e}},function(e,t,r){var n=r(18);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,r){var n=r(7),i=r(22),o=r(19),a=r(26),s=r(27),c=r(29),u=c.get,f=c.enforce,l=String(String).split("String");(e.exports=function(e,t,r,s){var c=!!s&&!!s.unsafe,u=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;if("function"==typeof r){"string"!=typeof t||o(r,"name")||i(r,"name",t);f(r).source=l.join("string"==typeof t?t:"")}if(e!==n){c?!p&&e[t]&&(u=!0):delete e[t];u?e[t]=r:i(e,t,r)}else u?e[t]=r:a(t,r)})(Function.prototype,"toString",(function toString(){return"function"==typeof this&&u(this).source||s(this)}))},function(e,t,r){var n=r(7),i=r(22);e.exports=function(e,t){try{i(n,e,t)}catch(r){n[e]=t}return t}},function(e,t,r){var n=r(28),i=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return i.call(e)});e.exports=n.inspectSource},function(e,t,r){var n=r(7),i=r(26),o=n["__core-js_shared__"]||i("__core-js_shared__",{});e.exports=o},function(e,t,r){var n,i,o,a=r(30),s=r(7),c=r(18),u=r(22),f=r(19),l=r(31),p=r(35),d=s.WeakMap;if(a){var h=new d,g=h.get,v=h.has,m=h.set;n=function(e,t){m.call(h,e,t);return t};i=function(e){return g.call(h,e)||{}};o=function(e){return v.call(h,e)}}else{var y=l("state");p[y]=!0;n=function(e,t){u(e,y,t);return t};i=function(e){return f(e,y)?e[y]:{}};o=function(e){return f(e,y)}}e.exports={set:n,get:i,has:o,enforce:function(e){return o(e)?i(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!c(t)||(r=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},function(e,t,r){var n=r(7),i=r(27),o=n.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},function(e,t,r){var n=r(32),i=r(34),o=n("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},function(e,t,r){var n=r(33),i=r(28);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++r+n).toString(36)}},function(e,t){e.exports={}},function(e,t,r){var n=r(19),i=r(37),o=r(8),a=r(23);e.exports=function(e,t){for(var r=i(t),s=a.f,c=o.f,u=0;u<r.length;u++){var f=r[u];n(e,f)||s(e,f,c(t,f))}}},function(e,t,r){var n=r(38),i=r(40),o=r(47),a=r(24);e.exports=n("Reflect","ownKeys")||function ownKeys(e){var t=i.f(a(e)),r=o.f;return r?t.concat(r(e)):t}},function(e,t,r){var n=r(39),i=r(7),aFunction=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?aFunction(n[e])||aFunction(i[e]):n[e]&&n[e][t]||i[e]&&i[e][t]}},function(e,t,r){var n=r(7);e.exports=n},function(e,t,r){var n=r(41),i=r(46).concat("length","prototype");t.f=Object.getOwnPropertyNames||function getOwnPropertyNames(e){return n(e,i)}},function(e,t,r){var n=r(19),i=r(13),o=r(42).indexOf,a=r(35);e.exports=function(e,t){var r,s=i(e),c=0,u=[];for(r in s)!n(a,r)&&n(s,r)&&u.push(r);for(;t.length>c;)n(s,r=t[c++])&&(~o(u,r)||u.push(r));return u}},function(e,t,r){var n=r(13),i=r(43),o=r(45),createMethod=function(e){return function(t,r,a){var s,c=n(t),u=i(c.length),f=o(a,u);if(e&&r!=r){for(;u>f;)if((s=c[f++])!=s)return!0}else for(;u>f;f++)if((e||f in c)&&c[f]===r)return e||f||0;return!e&&-1}};e.exports={includes:createMethod(!0),indexOf:createMethod(!1)}},function(e,t,r){var n=r(44),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(44),i=Math.max,o=Math.min;e.exports=function(e,t){var r=n(e);return r<0?i(r+t,0):o(r,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,r){var n=r(10),i=/#|\.prototype\./,isForced=function(e,t){var r=a[o(e)];return r==c||r!=s&&("function"==typeof t?n(t):!!t)},o=isForced.normalize=function(e){return String(e).replace(i,".").toLowerCase()},a=isForced.data={},s=isForced.NATIVE="N",c=isForced.POLYFILL="P";e.exports=isForced},function(e,t,r){r(50);var n=r(57);e.exports=n("String","startsWith")},function(e,t,r){"use strict";var n,i=r(6),o=r(8).f,a=r(43),s=r(51),c=r(16),u=r(56),f=r(33),l="".startsWith,p=Math.min,d=u("startsWith");i({target:"String",proto:!0,forced:!(!f&&!d&&!!(n=o(String.prototype,"startsWith"),n&&!n.writable))&&!d},{startsWith:function startsWith(e){var t=String(c(this));s(e);var r=a(p(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,r):t.slice(r,r+n.length)===n}})},function(e,t,r){var n=r(52);e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},function(e,t,r){var n=r(18),i=r(15),o=r(53)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},function(e,t,r){var n=r(7),i=r(32),o=r(19),a=r(34),s=r(54),c=r(55),u=i("wks"),f=n.Symbol,l=c?f:f&&f.withoutSetter||a;e.exports=function(e){o(u,e)||(s&&o(f,e)?u[e]=f[e]:u[e]=l("Symbol."+e));return u[e]}},function(e,t,r){var n=r(10);e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(e,t,r){var n=r(54);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,r){var n=r(53)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{t[n]=!1;return"/./"[e](t)}catch(e){}}return!1}},function(e,t,r){var n=r(7),i=r(58),o=Function.call;e.exports=function(e,t,r){return i(o,n[e].prototype[t],r)}},function(e,t,r){var n=r(59);e.exports=function(e,t,r){n(e);if(void 0===t)return e;switch(r){case 0:return function(){return e.call(t)};case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},function(e,t,r){r(61);var n=r(57);e.exports=n("String","endsWith")},function(e,t,r){"use strict";var n,i=r(6),o=r(8).f,a=r(43),s=r(51),c=r(16),u=r(56),f=r(33),l="".endsWith,p=Math.min,d=u("endsWith");i({target:"String",proto:!0,forced:!(!f&&!d&&!!(n=o(String.prototype,"endsWith"),n&&!n.writable))&&!d},{endsWith:function endsWith(e){var t=String(c(this));s(e);var r=arguments.length>1?arguments[1]:void 0,n=a(t.length),i=void 0===r?n:p(a(r),n),o=String(e);return l?l.call(t,o,i):t.slice(i-o.length,i)===o}})},function(e,t,r){r(63);var n=r(57);e.exports=n("String","includes")},function(e,t,r){"use strict";var n=r(6),i=r(51),o=r(16);n({target:"String",proto:!0,forced:!r(56)("includes")},{includes:function includes(e){return!!~String(o(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(65);var n=r(57);e.exports=n("Array","includes")},function(e,t,r){"use strict";var n=r(6),i=r(42).includes,o=r(66);n({target:"Array",proto:!0,forced:!r(71)("indexOf",{ACCESSORS:!0,1:0})},{includes:function includes(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}});o("includes")},function(e,t,r){var n=r(53),i=r(67),o=r(23),a=n("unscopables"),s=Array.prototype;null==s[a]&&o.f(s,a,{configurable:!0,value:i(null)});e.exports=function(e){s[a][e]=!0}},function(e,t,r){var n,i=r(24),o=r(68),a=r(46),s=r(35),c=r(70),u=r(21),f=r(31),l=f("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(e){return"<script>"+e+"<\/script>"},NullProtoObject=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}NullProtoObject=n?function(e){e.write(scriptTag(""));e.close();var t=e.parentWindow.Object;e=null;return t}(n):function(){var e,t=u("iframe");t.style.display="none";c.appendChild(t);t.src=String("javascript:");(e=t.contentWindow.document).open();e.write(scriptTag("document.F=Object"));e.close();return e.F}();for(var e=a.length;e--;)delete NullProtoObject.prototype[a[e]];return NullProtoObject()};s[l]=!0;e.exports=Object.create||function create(e,t){var r;if(null!==e){EmptyConstructor.prototype=i(e);r=new EmptyConstructor;EmptyConstructor.prototype=null;r[l]=e}else r=NullProtoObject();return void 0===t?r:o(r,t)}},function(e,t,r){var n=r(9),i=r(23),o=r(24),a=r(69);e.exports=n?Object.defineProperties:function defineProperties(e,t){o(e);for(var r,n=a(t),s=n.length,c=0;s>c;)i.f(e,r=n[c++],t[r]);return e}},function(e,t,r){var n=r(41),i=r(46);e.exports=Object.keys||function keys(e){return n(e,i)}},function(e,t,r){var n=r(38);e.exports=n("document","documentElement")},function(e,t,r){var n=r(9),i=r(10),o=r(19),a=Object.defineProperty,s={},thrower=function(e){throw e};e.exports=function(e,t){if(o(s,e))return s[e];t||(t={});var r=[][e],c=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:thrower,f=o(t,1)?t[1]:void 0;return s[e]=!!r&&!i((function(){if(c&&!n)return!0;var e={length:-1};c?a(e,1,{enumerable:!0,get:thrower}):e[1]=1;r.call(e,u,f)}))}},function(e,t,r){r(73);r(85);var n=r(39);e.exports=n.Array.from},function(e,t,r){"use strict";var n=r(74).charAt,i=r(29),o=r(75),a=i.set,s=i.getterFor("String Iterator");o(String,"String",(function(e){a(this,{type:"String Iterator",string:String(e),index:0})}),(function next(){var e,t=s(this),r=t.string,i=t.index;if(i>=r.length)return{value:void 0,done:!0};e=n(r,i);t.index+=e.length;return{value:e,done:!1}}))},function(e,t,r){var n=r(44),i=r(16),createMethod=function(e){return function(t,r){var o,a,s=String(i(t)),c=n(r),u=s.length;return c<0||c>=u?e?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}};e.exports={codeAt:createMethod(!1),charAt:createMethod(!0)}},function(e,t,r){"use strict";var n=r(6),i=r(76),o=r(78),a=r(83),s=r(81),c=r(22),u=r(25),f=r(53),l=r(33),p=r(82),d=r(77),h=d.IteratorPrototype,g=d.BUGGY_SAFARI_ITERATORS,v=f("iterator"),returnThis=function(){return this};e.exports=function(e,t,r,f,d,m,y){i(r,t,f);var b,x,w,getIterationMethod=function(e){if(e===d&&C)return C;if(!g&&e in T)return T[e];switch(e){case"keys":return function keys(){return new r(this,e)};case"values":return function values(){return new r(this,e)};case"entries":return function entries(){return new r(this,e)}}return function(){return new r(this)}},S=t+" Iterator",_=!1,T=e.prototype,P=T[v]||T["@@iterator"]||d&&T[d],C=!g&&P||getIterationMethod(d),k="Array"==t&&T.entries||P;if(k){b=o(k.call(new e));if(h!==Object.prototype&&b.next){l||o(b)===h||(a?a(b,h):"function"!=typeof b[v]&&c(b,v,returnThis));s(b,S,!0,!0);l&&(p[S]=returnThis)}}if("values"==d&&P&&"values"!==P.name){_=!0;C=function values(){return P.call(this)}}l&&!y||T[v]===C||c(T,v,C);p[t]=C;if(d){x={values:getIterationMethod("values"),keys:m?C:getIterationMethod("keys"),entries:getIterationMethod("entries")};if(y)for(w in x)(g||_||!(w in T))&&u(T,w,x[w]);else n({target:t,proto:!0,forced:g||_},x)}return x}},function(e,t,r){"use strict";var n=r(77).IteratorPrototype,i=r(67),o=r(12),a=r(81),s=r(82),returnThis=function(){return this};e.exports=function(e,t,r){var c=t+" Iterator";e.prototype=i(n,{next:o(1,r)});a(e,c,!1,!0);s[c]=returnThis;return e}},function(e,t,r){"use strict";var n,i,o,a=r(78),s=r(22),c=r(19),u=r(53),f=r(33),l=u("iterator"),p=!1;[].keys&&("next"in(o=[].keys())?(i=a(a(o)))!==Object.prototype&&(n=i):p=!0);null==n&&(n={});f||c(n,l)||s(n,l,(function(){return this}));e.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(e,t,r){var n=r(19),i=r(79),o=r(31),a=r(80),s=o("IE_PROTO"),c=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){e=i(e);return n(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},function(e,t,r){var n=r(16);e.exports=function(e){return Object(n(e))}},function(e,t,r){var n=r(10);e.exports=!n((function(){function F(){}F.prototype.constructor=null;return Object.getPrototypeOf(new F)!==F.prototype}))},function(e,t,r){var n=r(23).f,i=r(19),o=r(53)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},function(e,t){e.exports={}},function(e,t,r){var n=r(24),i=r(84);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]);t=r instanceof Array}catch(e){}return function setPrototypeOf(r,o){n(r);i(o);t?e.call(r,o):r.__proto__=o;return r}}():void 0)},function(e,t,r){var n=r(18);e.exports=function(e){if(!n(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},function(e,t,r){var n=r(6),i=r(86);n({target:"Array",stat:!0,forced:!r(93)((function(e){Array.from(e)}))},{from:i})},function(e,t,r){"use strict";var n=r(58),i=r(79),o=r(87),a=r(88),s=r(43),c=r(89),u=r(90);e.exports=function from(e){var t,r,f,l,p,d,h=i(e),g="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,y=void 0!==m,b=u(h),x=0;y&&(m=n(m,v>2?arguments[2]:void 0,2));if(null==b||g==Array&&a(b)){r=new g(t=s(h.length));for(;t>x;x++){d=y?m(h[x],x):h[x];c(r,x,d)}}else{p=(l=b.call(h)).next;r=new g;for(;!(f=p.call(l)).done;x++){d=y?o(l,m,[f.value,x],!0):f.value;c(r,x,d)}}r.length=x;return r}},function(e,t,r){var n=r(24);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var o=e.return;void 0!==o&&n(o.call(e));throw t}}},function(e,t,r){var n=r(53),i=r(82),o=n("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||a[o]===e)}},function(e,t,r){"use strict";var n=r(17),i=r(23),o=r(12);e.exports=function(e,t,r){var a=n(t);a in e?i.f(e,a,o(0,r)):e[a]=r}},function(e,t,r){var n=r(91),i=r(82),o=r(53)("iterator");e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[n(e)]}},function(e,t,r){var n=r(92),i=r(15),o=r(53)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=n?i:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?r:a?i(t):"Object"==(n=i(t))&&"function"==typeof t.callee?"Arguments":n}},function(e,t,r){var n={};n[r(53)("toStringTag")]="z";e.exports="[object z]"===String(n)},function(e,t,r){var n=r(53)("iterator"),i=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){i=!0}};a[n]=function(){return this};Array.from(a,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var o={};o[n]=function(){return{next:function(){return{done:r=!0}}}};e(o)}catch(e){}return r}},function(e,t,r){r(95);var n=r(39);e.exports=n.Object.assign},function(e,t,r){var n=r(6),i=r(96);n({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},function(e,t,r){"use strict";var n=r(9),i=r(10),o=r(69),a=r(47),s=r(11),c=r(79),u=r(14),f=Object.assign,l=Object.defineProperty;e.exports=!f||i((function(){if(n&&1!==f({b:1},f(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},r=Symbol();e[r]=7;"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e}));return 7!=f({},e)[r]||"abcdefghijklmnopqrst"!=o(f({},t)).join("")}))?function assign(e,t){for(var r=c(e),i=arguments.length,f=1,l=a.f,p=s.f;i>f;)for(var d,h=u(arguments[f++]),g=l?o(h).concat(l(h)):o(h),v=g.length,m=0;v>m;){d=g[m++];n&&!p.call(h,d)||(r[d]=h[d])}return r}:f},function(e,t,r){r(98);r(99);var n=r(39);e.exports=n.Object.fromEntries},function(e,t,r){"use strict";var n=r(13),i=r(66),o=r(82),a=r(29),s=r(75),c=a.set,u=a.getterFor("Array Iterator");e.exports=s(Array,"Array",(function(e,t){c(this,{type:"Array Iterator",target:n(e),index:0,kind:t})}),(function(){var e=u(this),t=e.target,r=e.kind,n=e.index++;if(!t||n>=t.length){e.target=void 0;return{value:void 0,done:!0}}return"keys"==r?{value:n,done:!1}:"values"==r?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values");o.Arguments=o.Array;i("keys");i("values");i("entries")},function(e,t,r){var n=r(6),i=r(100),o=r(89);n({target:"Object",stat:!0},{fromEntries:function fromEntries(e){var t={};i(e,(function(e,r){o(t,e,r)}),void 0,!0);return t}})},function(e,t,r){var n=r(24),i=r(88),o=r(43),a=r(58),s=r(90),c=r(87),Result=function(e,t){this.stopped=e;this.result=t};(e.exports=function(e,t,r,u,f){var l,p,d,h,g,v,m,y=a(t,r,u?2:1);if(f)l=e;else{if("function"!=typeof(p=s(e)))throw TypeError("Target is not iterable");if(i(p)){for(d=0,h=o(e.length);h>d;d++)if((g=u?y(n(m=e[d])[0],m[1]):y(e[d]))&&g instanceof Result)return g;return new Result(!1)}l=p.call(e)}v=l.next;for(;!(m=v.call(l)).done;)if("object"==typeof(g=c(l,y,m.value,u))&&g&&g instanceof Result)return g;return new Result(!1)}).stop=function(e){return new Result(!0,e)}},function(e,t,r){r(102);var n=r(39);e.exports=n.Math.log2},function(e,t,r){var n=r(6),i=Math.log,o=Math.LN2;n({target:"Math",stat:!0},{log2:function log2(e){return i(e)/o}})},function(e,t,r){r(104);var n=r(39);e.exports=n.Number.isNaN},function(e,t,r){r(6)({target:"Number",stat:!0},{isNaN:function isNaN(e){return e!=e}})},function(e,t,r){r(106);var n=r(39);e.exports=n.Number.isInteger},function(e,t,r){r(6)({target:"Number",stat:!0},{isInteger:r(107)})},function(e,t,r){var n=r(18),i=Math.floor;e.exports=function isInteger(e){return!n(e)&&isFinite(e)&&i(e)===e}},function(e,t,r){r(109)},function(e,t,r){"use strict";var n=r(110),i=r(112),o=r(10),a=n.aTypedArray,s=n.aTypedArrayConstructor,c=n.exportTypedArrayMethod,u=[].slice;c("slice",(function slice(e,t){for(var r=u.call(a(this),e,t),n=i(this,this.constructor),o=0,c=r.length,f=new(s(n))(c);c>o;)f[o]=r[o++];return f}),o((function(){new Int8Array(1).slice()})))},function(e,t,r){"use strict";var n,i=r(111),o=r(9),a=r(7),s=r(18),c=r(19),u=r(91),f=r(22),l=r(25),p=r(23).f,d=r(78),h=r(83),g=r(53),v=r(34),m=a.Int8Array,y=m&&m.prototype,b=a.Uint8ClampedArray,x=b&&b.prototype,w=m&&d(m),S=y&&d(y),_=Object.prototype,T=_.isPrototypeOf,P=g("toStringTag"),C=v("TYPED_ARRAY_TAG"),k=i&&!!h&&"Opera"!==u(a.opera),I=!1,O={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},isTypedArray=function(e){return s(e)&&c(O,u(e))};for(n in O)a[n]||(k=!1);if(!k||"function"!=typeof w||w===Function.prototype){w=function TypedArray(){throw TypeError("Incorrect invocation")};if(k)for(n in O)a[n]&&h(a[n],w)}if(!k||!S||S===_){S=w.prototype;if(k)for(n in O)a[n]&&h(a[n].prototype,S)}k&&d(x)!==S&&h(x,S);if(o&&!c(S,P)){I=!0;p(S,P,{get:function(){return s(this)?this[C]:void 0}});for(n in O)a[n]&&f(a[n],C,n)}e.exports={NATIVE_ARRAY_BUFFER_VIEWS:k,TYPED_ARRAY_TAG:I&&C,aTypedArray:function(e){if(isTypedArray(e))return e;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(e){if(h){if(T.call(w,e))return e}else for(var t in O)if(c(O,n)){var r=a[t];if(r&&(e===r||T.call(r,e)))return e}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r){if(o){if(r)for(var n in O){var i=a[n];i&&c(i.prototype,e)&&delete i.prototype[e]}S[e]&&!r||l(S,e,r?t:k&&y[e]||t)}},exportTypedArrayStaticMethod:function(e,t,r){var n,i;if(o){if(h){if(r)for(n in O)(i=a[n])&&c(i,e)&&delete i[e];if(w[e]&&!r)return;try{return l(w,e,r?t:k&&m[e]||t)}catch(e){}}for(n in O)!(i=a[n])||i[e]&&!r||l(i,e,t)}},isView:function isView(e){var t=u(e);return"DataView"===t||c(O,t)},isTypedArray:isTypedArray,TypedArray:w,TypedArrayPrototype:S}},function(e,t){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(e,t,r){var n=r(24),i=r(59),o=r(53)("species");e.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||null==(r=n(a)[o])?t:i(r)}},function(e,t,r){r(114);r(123);r(73);r(125);var n=r(39);e.exports=n.Map},function(e,t,r){"use strict";var n=r(115),i=r(120);e.exports=n("Map",(function(e){return function Map(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},function(e,t,r){"use strict";var n=r(6),i=r(7),o=r(48),a=r(25),s=r(116),c=r(100),u=r(118),f=r(18),l=r(10),p=r(93),d=r(81),h=r(119);e.exports=function(e,t,r){var g=-1!==e.indexOf("Map"),v=-1!==e.indexOf("Weak"),m=g?"set":"add",y=i[e],b=y&&y.prototype,x=y,w={},fixMethod=function(e){var t=b[e];a(b,e,"add"==e?function add(e){t.call(this,0===e?0:e);return this}:"delete"==e?function(e){return!(v&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function get(e){return v&&!f(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function has(e){return!(v&&!f(e))&&t.call(this,0===e?0:e)}:function set(e,r){t.call(this,0===e?0:e,r);return this})};if(o(e,"function"!=typeof y||!(v||b.forEach&&!l((function(){(new y).entries().next()}))))){x=r.getConstructor(t,e,g,m);s.REQUIRED=!0}else if(o(e,!0)){var S=new x,_=S[m](v?{}:-0,1)!=S,T=l((function(){S.has(1)})),P=p((function(e){new y(e)})),C=!v&&l((function(){for(var e=new y,t=5;t--;)e[m](t,t);return!e.has(-0)}));if(!P){(x=t((function(t,r){u(t,x,e);var n=h(new y,t,x);null!=r&&c(r,n[m],n,g);return n}))).prototype=b;b.constructor=x}if(T||C){fixMethod("delete");fixMethod("has");g&&fixMethod("get")}(C||_)&&fixMethod(m);v&&b.clear&&delete b.clear}w[e]=x;n({global:!0,forced:x!=y},w);d(x,e);v||r.setStrong(x,e,g);return x}},function(e,t,r){var n=r(35),i=r(18),o=r(19),a=r(23).f,s=r(34),c=r(117),u=s("meta"),f=0,l=Object.isExtensible||function(){return!0},setMetadata=function(e){a(e,u,{value:{objectID:"O"+ ++f,weakData:{}}})},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,u)){if(!l(e))return"F";if(!t)return"E";setMetadata(e)}return e[u].objectID},getWeakData:function(e,t){if(!o(e,u)){if(!l(e))return!0;if(!t)return!1;setMetadata(e)}return e[u].weakData},onFreeze:function(e){c&&p.REQUIRED&&l(e)&&!o(e,u)&&setMetadata(e);return e}};n[u]=!0},function(e,t,r){var n=r(10);e.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(e,t){e.exports=function(e,t,r){if(!(e instanceof t))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return e}},function(e,t,r){var n=r(18),i=r(83);e.exports=function(e,t,r){var o,a;i&&"function"==typeof(o=t.constructor)&&o!==r&&n(a=o.prototype)&&a!==r.prototype&&i(e,a);return e}},function(e,t,r){"use strict";var n=r(23).f,i=r(67),o=r(121),a=r(58),s=r(118),c=r(100),u=r(75),f=r(122),l=r(9),p=r(116).fastKey,d=r(29),h=d.set,g=d.getterFor;e.exports={getConstructor:function(e,t,r,u){var f=e((function(e,n){s(e,f,t);h(e,{type:t,index:i(null),first:void 0,last:void 0,size:0});l||(e.size=0);null!=n&&c(n,e[u],e,r)})),d=g(t),define=function(e,t,r){var n,i,o=d(e),a=getEntry(e,t);if(a)a.value=r;else{o.last=a={index:i=p(t,!0),key:t,value:r,previous:n=o.last,next:void 0,removed:!1};o.first||(o.first=a);n&&(n.next=a);l?o.size++:e.size++;"F"!==i&&(o.index[i]=a)}return e},getEntry=function(e,t){var r,n=d(e),i=p(t);if("F"!==i)return n.index[i];for(r=n.first;r;r=r.next)if(r.key==t)return r};o(f.prototype,{clear:function clear(){for(var e=d(this),t=e.index,r=e.first;r;){r.removed=!0;r.previous&&(r.previous=r.previous.next=void 0);delete t[r.index];r=r.next}e.first=e.last=void 0;l?e.size=0:this.size=0},delete:function(e){var t=d(this),r=getEntry(this,e);if(r){var n=r.next,i=r.previous;delete t.index[r.index];r.removed=!0;i&&(i.next=n);n&&(n.previous=i);t.first==r&&(t.first=n);t.last==r&&(t.last=i);l?t.size--:this.size--}return!!r},forEach:function forEach(e){for(var t,r=d(this),n=a(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:r.first;){n(t.value,t.key,this);for(;t&&t.removed;)t=t.previous}},has:function has(e){return!!getEntry(this,e)}});o(f.prototype,r?{get:function get(e){var t=getEntry(this,e);return t&&t.value},set:function set(e,t){return define(this,0===e?0:e,t)}}:{add:function add(e){return define(this,e=0===e?0:e,e)}});l&&n(f.prototype,"size",{get:function(){return d(this).size}});return f},setStrong:function(e,t,r){var n=t+" Iterator",i=g(t),o=g(n);u(e,t,(function(e,t){h(this,{type:n,target:e,state:i(e),kind:t,last:void 0})}),(function(){for(var e=o(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;if(!e.target||!(e.last=r=r?r.next:e.state.first)){e.target=void 0;return{value:void 0,done:!0}}return"keys"==t?{value:r.key,done:!1}:"values"==t?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}}),r?"entries":"values",!r,!0);f(t)}}},function(e,t,r){var n=r(25);e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r);return e}},function(e,t,r){"use strict";var n=r(38),i=r(23),o=r(53),a=r(9),s=o("species");e.exports=function(e){var t=n(e),r=i.f;a&&t&&!t[s]&&r(t,s,{configurable:!0,get:function(){return this}})}},function(e,t,r){var n=r(92),i=r(25),o=r(124);n||i(Object.prototype,"toString",o,{unsafe:!0})},function(e,t,r){"use strict";var n=r(92),i=r(91);e.exports=n?{}.toString:function toString(){return"[object "+i(this)+"]"}},function(e,t,r){var n=r(7),i=r(126),o=r(98),a=r(22),s=r(53),c=s("iterator"),u=s("toStringTag"),f=o.values;for(var l in i){var p=n[l],d=p&&p.prototype;if(d){if(d[c]!==f)try{a(d,c,f)}catch(e){d[c]=f}d[u]||a(d,u,l);if(i[l])for(var h in o)if(d[h]!==o[h])try{a(d,h,o[h])}catch(e){d[h]=o[h]}}}},function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(e,t,r){r(128);r(123);r(73);r(125);var n=r(39);e.exports=n.Set},function(e,t,r){"use strict";var n=r(115),i=r(120);e.exports=n("Set",(function(e){return function Set(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},function(e,t,r){r(123);r(130);r(125);var n=r(39);e.exports=n.WeakMap},function(e,t,r){"use strict";var n,i=r(7),o=r(121),a=r(116),s=r(115),c=r(131),u=r(18),f=r(29).enforce,l=r(30),p=!i.ActiveXObject&&"ActiveXObject"in i,d=Object.isExtensible,wrapper=function(e){return function WeakMap(){return e(this,arguments.length?arguments[0]:void 0)}},h=e.exports=s("WeakMap",wrapper,c);if(l&&p){n=c.getConstructor(wrapper,"WeakMap",!0);a.REQUIRED=!0;var g=h.prototype,v=g.delete,m=g.has,y=g.get,b=g.set;o(g,{delete:function(e){if(u(e)&&!d(e)){var t=f(this);t.frozen||(t.frozen=new n);return v.call(this,e)||t.frozen.delete(e)}return v.call(this,e)},has:function has(e){if(u(e)&&!d(e)){var t=f(this);t.frozen||(t.frozen=new n);return m.call(this,e)||t.frozen.has(e)}return m.call(this,e)},get:function get(e){if(u(e)&&!d(e)){var t=f(this);t.frozen||(t.frozen=new n);return m.call(this,e)?y.call(this,e):t.frozen.get(e)}return y.call(this,e)},set:function set(e,t){if(u(e)&&!d(e)){var r=f(this);r.frozen||(r.frozen=new n);m.call(this,e)?b.call(this,e,t):r.frozen.set(e,t)}else b.call(this,e,t);return this}})}},function(e,t,r){"use strict";var n=r(121),i=r(116).getWeakData,o=r(24),a=r(18),s=r(118),c=r(100),u=r(132),f=r(19),l=r(29),p=l.set,d=l.getterFor,h=u.find,g=u.findIndex,v=0,uncaughtFrozenStore=function(e){return e.frozen||(e.frozen=new UncaughtFrozenStore)},UncaughtFrozenStore=function(){this.entries=[]},findUncaughtFrozen=function(e,t){return h(e.entries,(function(e){return e[0]===t}))};UncaughtFrozenStore.prototype={get:function(e){var t=findUncaughtFrozen(this,e);if(t)return t[1]},has:function(e){return!!findUncaughtFrozen(this,e)},set:function(e,t){var r=findUncaughtFrozen(this,e);r?r[1]=t:this.entries.push([e,t])},delete:function(e){var t=g(this.entries,(function(t){return t[0]===e}));~t&&this.entries.splice(t,1);return!!~t}};e.exports={getConstructor:function(e,t,r,u){var l=e((function(e,n){s(e,l,t);p(e,{type:t,id:v++,frozen:void 0});null!=n&&c(n,e[u],e,r)})),h=d(t),define=function(e,t,r){var n=h(e),a=i(o(t),!0);!0===a?uncaughtFrozenStore(n).set(t,r):a[n.id]=r;return e};n(l.prototype,{delete:function(e){var t=h(this);if(!a(e))return!1;var r=i(e);return!0===r?uncaughtFrozenStore(t).delete(e):r&&f(r,t.id)&&delete r[t.id]},has:function has(e){var t=h(this);if(!a(e))return!1;var r=i(e);return!0===r?uncaughtFrozenStore(t).has(e):r&&f(r,t.id)}});n(l.prototype,r?{get:function get(e){var t=h(this);if(a(e)){var r=i(e);return!0===r?uncaughtFrozenStore(t).get(e):r?r[t.id]:void 0}},set:function set(e,t){return define(this,e,t)}}:{add:function add(e){return define(this,e,!0)}});return l}}},function(e,t,r){var n=r(58),i=r(14),o=r(79),a=r(43),s=r(133),c=[].push,createMethod=function(e){var t=1==e,r=2==e,u=3==e,f=4==e,l=6==e,p=5==e||l;return function(d,h,g,v){for(var m,y,b=o(d),x=i(b),w=n(h,g,3),S=a(x.length),_=0,T=v||s,P=t?T(d,S):r?T(d,0):void 0;S>_;_++)if(p||_ in x){y=w(m=x[_],_,b);if(e)if(t)P[_]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return _;case 2:c.call(P,m)}else if(f)return!1}return l?-1:u||f?f:P}};e.exports={forEach:createMethod(0),map:createMethod(1),filter:createMethod(2),some:createMethod(3),every:createMethod(4),find:createMethod(5),findIndex:createMethod(6)}},function(e,t,r){var n=r(18),i=r(134),o=r(53)("species");e.exports=function(e,t){var r;i(e)&&("function"!=typeof(r=e.constructor)||r!==Array&&!i(r.prototype)?n(r)&&null===(r=r[o])&&(r=void 0):r=void 0);return new(void 0===r?Array:r)(0===t?0:t)}},function(e,t,r){var n=r(15);e.exports=Array.isArray||function isArray(e){return"Array"==n(e)}},function(e,t,r){r(123);r(136);r(125);var n=r(39);e.exports=n.WeakSet},function(e,t,r){"use strict";r(115)("WeakSet",(function(e){return function WeakSet(){return e(this,arguments.length?arguments[0]:void 0)}}),r(131))},function(e,t,r){r(138);var n=r(57);e.exports=n("String","codePointAt")},function(e,t,r){"use strict";var n=r(6),i=r(74).codeAt;n({target:"String",proto:!0},{codePointAt:function codePointAt(e){return i(this,e)}})},function(e,t,r){r(140);var n=r(39);e.exports=n.String.fromCodePoint},function(e,t,r){var n=r(6),i=r(45),o=String.fromCharCode,a=String.fromCodePoint;n({target:"String",stat:!0,forced:!!a&&1!=a.length},{fromCodePoint:function fromCodePoint(e){for(var t,r=[],n=arguments.length,a=0;n>a;){t=+arguments[a++];if(i(t,1114111)!==t)throw RangeError(t+" is not a valid code point");r.push(t<65536?o(t):o(55296+((t-=65536)>>10),t%1024+56320))}return r.join("")}})},function(e,t,r){r(142);r(123);r(146);r(150);r(151);r(152);r(153);r(154);r(155);r(156);r(157);r(158);r(159);r(160);r(161);r(162);r(163);r(164);r(165);var n=r(39);e.exports=n.Symbol},function(e,t,r){"use strict";var n=r(6),i=r(10),o=r(134),a=r(18),s=r(79),c=r(43),u=r(89),f=r(133),l=r(143),p=r(53),d=r(144),h=p("isConcatSpreadable"),g=d>=51||!i((function(){var e=[];e[h]=!1;return e.concat()[0]!==e})),v=l("concat"),isConcatSpreadable=function(e){if(!a(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)};n({target:"Array",proto:!0,forced:!g||!v},{concat:function concat(e){var t,r,n,i,o,a=s(this),l=f(a,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(isConcatSpreadable(o=-1===t?a:arguments[t])){if(p+(i=c(o.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<i;r++,p++)r in o&&u(l,p,o[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");u(l,p++,o)}l.length=p;return l}})},function(e,t,r){var n=r(10),i=r(53),o=r(144),a=i("species");e.exports=function(e){return o>=51||!n((function(){var t=[];(t.constructor={})[a]=function(){return{foo:1}};return 1!==t[e](Boolean).foo}))}},function(e,t,r){var n,i,o=r(7),a=r(145),s=o.process,c=s&&s.versions,u=c&&c.v8;u?i=(n=u.split("."))[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(i=n[1]);e.exports=i&&+i},function(e,t,r){var n=r(38);e.exports=n("navigator","userAgent")||""},function(e,t,r){"use strict";var n=r(6),i=r(7),o=r(38),a=r(33),s=r(9),c=r(54),u=r(55),f=r(10),l=r(19),p=r(134),d=r(18),h=r(24),g=r(79),v=r(13),m=r(17),y=r(12),b=r(67),x=r(69),w=r(40),S=r(147),_=r(47),T=r(8),P=r(23),C=r(11),k=r(22),I=r(25),O=r(32),E=r(31),A=r(35),R=r(34),M=r(53),D=r(148),L=r(149),B=r(81),U=r(29),N=r(132).forEach,j=E("hidden"),z=M("toPrimitive"),H=U.set,W=U.getterFor("Symbol"),X=Object.prototype,q=i.Symbol,Y=o("JSON","stringify"),V=T.f,J=P.f,G=S.f,K=C.f,Q=O("symbols"),Z=O("op-symbols"),$=O("string-to-symbol-registry"),ee=O("symbol-to-string-registry"),te=O("wks"),re=i.QObject,ne=!re||!re.prototype||!re.prototype.findChild,ie=s&&f((function(){return 7!=b(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=V(X,t);n&&delete X[t];J(e,t,r);n&&e!==X&&J(X,t,n)}:J,wrap=function(e,t){var r=Q[e]=b(q.prototype);H(r,{type:"Symbol",tag:e,description:t});s||(r.description=t);return r},oe=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof q},ae=function defineProperty(e,t,r){e===X&&ae(Z,t,r);h(e);var n=m(t,!0);h(r);if(l(Q,n)){if(r.enumerable){l(e,j)&&e[j][n]&&(e[j][n]=!1);r=b(r,{enumerable:y(0,!1)})}else{l(e,j)||J(e,j,y(1,{}));e[j][n]=!0}return ie(e,n,r)}return J(e,n,r)},se=function defineProperties(e,t){h(e);var r=v(t),n=x(r).concat(le(r));N(n,(function(t){s&&!ce.call(r,t)||ae(e,t,r[t])}));return e},ce=function propertyIsEnumerable(e){var t=m(e,!0),r=K.call(this,t);return!(this===X&&l(Q,t)&&!l(Z,t))&&(!(r||!l(this,t)||!l(Q,t)||l(this,j)&&this[j][t])||r)},ue=function getOwnPropertyDescriptor(e,t){var r=v(e),n=m(t,!0);if(r!==X||!l(Q,n)||l(Z,n)){var i=V(r,n);!i||!l(Q,n)||l(r,j)&&r[j][n]||(i.enumerable=!0);return i}},fe=function getOwnPropertyNames(e){var t=G(v(e)),r=[];N(t,(function(e){l(Q,e)||l(A,e)||r.push(e)}));return r},le=function getOwnPropertySymbols(e){var t=e===X,r=G(t?Z:v(e)),n=[];N(r,(function(e){!l(Q,e)||t&&!l(X,e)||n.push(Q[e])}));return n};if(!c){I((q=function Symbol(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=R(e),setter=function(e){this===X&&setter.call(Z,e);l(this,j)&&l(this[j],t)&&(this[j][t]=!1);ie(this,t,y(1,e))};s&&ne&&ie(X,t,{configurable:!0,set:setter});return wrap(t,e)}).prototype,"toString",(function toString(){return W(this).tag}));I(q,"withoutSetter",(function(e){return wrap(R(e),e)}));C.f=ce;P.f=ae;T.f=ue;w.f=S.f=fe;_.f=le;D.f=function(e){return wrap(M(e),e)};if(s){J(q.prototype,"description",{configurable:!0,get:function description(){return W(this).description}});a||I(X,"propertyIsEnumerable",ce,{unsafe:!0})}}n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q});N(x(te),(function(e){L(e)}));n({target:"Symbol",stat:!0,forced:!c},{for:function(e){var t=String(e);if(l($,t))return $[t];var r=q(t);$[t]=r;ee[r]=t;return r},keyFor:function keyFor(e){if(!oe(e))throw TypeError(e+" is not a symbol");if(l(ee,e))return ee[e]},useSetter:function(){ne=!0},useSimple:function(){ne=!1}});n({target:"Object",stat:!0,forced:!c,sham:!s},{create:function create(e,t){return void 0===t?b(e):se(b(e),t)},defineProperty:ae,defineProperties:se,getOwnPropertyDescriptor:ue});n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:le});n({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function getOwnPropertySymbols(e){return _.f(g(e))}});if(Y){n({target:"JSON",stat:!0,forced:!c||f((function(){var e=q();return"[null]"!=Y([e])||"{}"!=Y({a:e})||"{}"!=Y(Object(e))}))},{stringify:function stringify(e,t,r){for(var n,i=[e],o=1;arguments.length>o;)i.push(arguments[o++]);n=t;if((d(t)||void 0!==e)&&!oe(e)){p(t)||(t=function(e,t){"function"==typeof n&&(t=n.call(this,e,t));if(!oe(t))return t});i[1]=t;return Y.apply(null,i)}}})}q.prototype[z]||k(q.prototype,z,q.prototype.valueOf);B(q,"Symbol");A[j]=!0},function(e,t,r){var n=r(13),i=r(40).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function getOwnPropertyNames(e){return a&&"[object Window]"==o.call(e)?function(e){try{return i(e)}catch(e){return a.slice()}}(e):i(n(e))}},function(e,t,r){var n=r(53);t.f=n},function(e,t,r){var n=r(39),i=r(19),o=r(148),a=r(23).f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});i(t,e)||a(t,e,{value:o.f(e)})}},function(e,t,r){r(149)("asyncIterator")},function(e,t,r){"use strict";var n=r(6),i=r(9),o=r(7),a=r(19),s=r(18),c=r(23).f,u=r(36),f=o.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function Symbol(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new f(e):void 0===e?f():f(e);""===e&&(l[t]=!0);return t};u(p,f);var d=p.prototype=f.prototype;d.constructor=p;var h=d.toString,g="Symbol(test)"==String(f("test")),v=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function description(){var e=s(this)?this.valueOf():this,t=h.call(e);if(a(l,e))return"";var r=g?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}});n({global:!0,forced:!0},{Symbol:p})}},function(e,t,r){r(149)("hasInstance")},function(e,t,r){r(149)("isConcatSpreadable")},function(e,t,r){r(149)("iterator")},function(e,t,r){r(149)("match")},function(e,t,r){r(149)("matchAll")},function(e,t,r){r(149)("replace")},function(e,t,r){r(149)("search")},function(e,t,r){r(149)("species")},function(e,t,r){r(149)("split")},function(e,t,r){r(149)("toPrimitive")},function(e,t,r){r(149)("toStringTag")},function(e,t,r){r(149)("unscopables")},function(e,t,r){r(81)(Math,"Math",!0)},function(e,t,r){var n=r(7);r(81)(n.JSON,"JSON",!0)},function(e,t,r){r(167);var n=r(57);e.exports=n("String","padStart")},function(e,t,r){"use strict";var n=r(6),i=r(168).start;n({target:"String",proto:!0,forced:r(170)},{padStart:function padStart(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){var n=r(43),i=r(169),o=r(16),a=Math.ceil,createMethod=function(e){return function(t,r,s){var c,u,f=String(o(t)),l=f.length,p=void 0===s?" ":String(s),d=n(r);if(d<=l||""==p)return f;c=d-l;(u=i.call(p,a(c/p.length))).length>c&&(u=u.slice(0,c));return e?f+u:u+f}};e.exports={start:createMethod(!1),end:createMethod(!0)}},function(e,t,r){"use strict";var n=r(44),i=r(16);e.exports="".repeat||function repeat(e){var t=String(i(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},function(e,t,r){var n=r(145);e.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n)},function(e,t,r){r(172);var n=r(57);e.exports=n("String","padEnd")},function(e,t,r){"use strict";var n=r(6),i=r(168).end;n({target:"String",proto:!0,forced:r(170)},{padEnd:function padEnd(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t,r){r(174);var n=r(39);e.exports=n.Object.values},function(e,t,r){var n=r(6),i=r(175).values;n({target:"Object",stat:!0},{values:function values(e){return i(e)}})},function(e,t,r){var n=r(9),i=r(69),o=r(13),a=r(11).f,createMethod=function(e){return function(t){for(var r,s=o(t),c=i(s),u=c.length,f=0,l=[];u>f;){r=c[f++];n&&!a.call(s,r)||l.push(e?[r,s[r]]:s[r])}return l}};e.exports={entries:createMethod(!0),values:createMethod(!1)}},function(e,t,r){r(177);var n=r(39);e.exports=n.Object.entries},function(e,t,r){var n=r(6),i=r(175).entries;n({target:"Object",stat:!0},{entries:function entries(e){return i(e)}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Jbig2Image=void 0;var n=r(1),i=r(179),o=r(180),a=r(181);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&_setPrototypeOf(e,t)}(Jbig2Error,e);var t=_createSuper(Jbig2Error);function Jbig2Error(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Jbig2Error);return t.call(this,"JBIG2 error: ".concat(e))}return Jbig2Error}(n.BaseException),c=function Jbig2ImageClosure(){function ContextCache(){}ContextCache.prototype={getContexts:function getContexts(e){return e in this?this[e]:this[e]=new Int8Array(65536)}};function DecodingContext(e,t,r){this.data=e;this.start=t;this.end=r}DecodingContext.prototype={get decoder(){var e=new o.ArithmeticDecoder(this.data,this.start,this.end);return(0,n.shadow)(this,"decoder",e)},get contextCache(){var e=new ContextCache;return(0,n.shadow)(this,"contextCache",e)}};function decodeInteger(e,t,r){var n=e.getContexts(t),i=1;function readBits(e){for(var t=0,o=0;o<e;o++){var a=r.readBit(n,i);i=i<256?i<<1|a:511&(i<<1|a)|256;t=t<<1|a}return t>>>0}var o=readBits(1),a=readBits(1)?readBits(1)?readBits(1)?readBits(1)?readBits(1)?readBits(32)+4436:readBits(12)+340:readBits(8)+84:readBits(6)+20:readBits(4)+4:readBits(2);return 0===o?a:a>0?-a:null}function decodeIAID(e,t,r){for(var n=e.getContexts("IAID"),i=1,o=0;o<r;o++){i=i<<1|t.readBit(n,i)}return r<31?i&(1<<r)-1:2147483647&i}var e=["SymbolDictionary",null,null,null,"IntermediateTextRegion",null,"ImmediateTextRegion","ImmediateLosslessTextRegion",null,null,null,null,null,null,null,null,"PatternDictionary",null,null,null,"IntermediateHalftoneRegion",null,"ImmediateHalftoneRegion","ImmediateLosslessHalftoneRegion",null,null,null,null,null,null,null,null,null,null,null,null,"IntermediateGenericRegion",null,"ImmediateGenericRegion","ImmediateLosslessGenericRegion","IntermediateGenericRefinementRegion",null,"ImmediateGenericRefinementRegion","ImmediateLosslessGenericRefinementRegion",null,null,null,null,"PageInformation","EndOfPage","EndOfStripe","EndOfFile","Profiles","Tables",null,null,null,null,null,null,null,null,"Extension"],t=[[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:2,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:2,y:-1},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}],[{x:-1,y:-2},{x:0,y:-2},{x:1,y:-2},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-2,y:0},{x:-1,y:0}],[{x:-3,y:-1},{x:-2,y:-1},{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-4,y:0},{x:-3,y:0},{x:-2,y:0},{x:-1,y:0}]],r=[{coding:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:1,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:1}]},{coding:[{x:-1,y:-1},{x:0,y:-1},{x:1,y:-1},{x:-1,y:0}],reference:[{x:0,y:-1},{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}]}],c=[39717,1941,229,405],u=[32,8];function decodeBitmap(e,r,n,i,o,a,s,u){if(e){return decodeMMRBitmap(new Reader(u.data,u.start,u.end),r,n,!1)}if(0===i&&!a&&!o&&4===s.length&&3===s[0].x&&-1===s[0].y&&-3===s[1].x&&-1===s[1].y&&2===s[2].x&&-2===s[2].y&&-2===s[3].x&&-2===s[3].y)return function decodeBitmapTemplate0(e,t,r){var n,i,o,a,s,c,u,f=r.decoder,l=r.contextCache.getContexts("GB"),p=[];for(i=0;i<t;i++){s=p[i]=new Uint8Array(e);c=i<1?s:p[i-1];n=(u=i<2?s:p[i-2])[0]<<13|u[1]<<12|u[2]<<11|c[0]<<7|c[1]<<6|c[2]<<5|c[3]<<4;for(o=0;o<e;o++){s[o]=a=f.readBit(l,n);n=(31735&n)<<1|(o+3<e?u[o+3]<<11:0)|(o+4<e?c[o+4]<<4:0)|a}}return p}(r,n,u);var f=!!a,l=t[i].concat(s);l.sort((function(e,t){return e.y-t.y||e.x-t.x}));var p,d,h=l.length,g=new Int8Array(h),v=new Int8Array(h),m=[],y=0,b=0,x=0,w=0;for(d=0;d<h;d++){g[d]=l[d].x;v[d]=l[d].y;b=Math.min(b,l[d].x);x=Math.max(x,l[d].x);w=Math.min(w,l[d].y);d<h-1&&l[d].y===l[d+1].y&&l[d].x===l[d+1].x-1?y|=1<<h-1-d:m.push(d)}var S=m.length,_=new Int8Array(S),T=new Int8Array(S),P=new Uint16Array(S);for(p=0;p<S;p++){d=m[p];_[p]=l[d].x;T[p]=l[d].y;P[p]=1<<h-1-d}for(var C,k,I,O,E,A=-b,R=-w,M=r-x,D=c[i],L=new Uint8Array(r),B=[],U=u.decoder,N=u.contextCache.getContexts("GB"),j=0,z=0,H=0;H<n;H++){if(o){if(j^=U.readBit(N,D)){B.push(L);continue}}L=new Uint8Array(L);B.push(L);for(C=0;C<r;C++)if(f&&a[H][C])L[C]=0;else{if(C>=A&&C<M&&H>=R){z=z<<1&y;for(d=0;d<S;d++){k=H+T[d];I=C+_[d];(O=B[k][I])&&(z|=O=P[d])}}else{z=0;E=h-1;for(d=0;d<h;d++,E--)(I=C+g[d])>=0&&I<r&&(k=H+v[d])>=0&&(O=B[k][I])&&(z|=O<<E)}var W=U.readBit(N,z);L[C]=W}}return B}function decodeRefinement(e,t,n,i,o,a,c,f,l){var p=r[n].coding;0===n&&(p=p.concat([f[0]]));var d,h=p.length,g=new Int32Array(h),v=new Int32Array(h);for(d=0;d<h;d++){g[d]=p[d].x;v[d]=p[d].y}var m=r[n].reference;0===n&&(m=m.concat([f[1]]));var y=m.length,b=new Int32Array(y),x=new Int32Array(y);for(d=0;d<y;d++){b[d]=m[d].x;x[d]=m[d].y}for(var w=i[0].length,S=i.length,_=u[n],T=[],P=l.decoder,C=l.contextCache.getContexts("GR"),k=0,I=0;I<t;I++){if(c){if(k^=P.readBit(C,_))throw new s("prediction is not supported")}var O=new Uint8Array(e);T.push(O);for(var E=0;E<e;E++){var A,R,M=0;for(d=0;d<h;d++){A=I+v[d];R=E+g[d];A<0||R<0||R>=e?M<<=1:M=M<<1|T[A][R]}for(d=0;d<y;d++){A=I+x[d]-a;R=E+b[d]-o;A<0||A>=S||R<0||R>=w?M<<=1:M=M<<1|i[A][R]}var D=P.readBit(C,M);O[E]=D}}return T}function decodeTextRegion(e,t,r,n,i,o,a,c,u,f,l,p,d,h,g,v,m,y,b){if(e&&t)throw new s("refinement with Huffman is not supported");var x,w,S=[];for(x=0;x<n;x++){w=new Uint8Array(r);if(i)for(var _=0;_<r;_++)w[_]=i;S.push(w)}var T=m.decoder,P=m.contextCache,C=e?-h.tableDeltaT.decode(b):-decodeInteger(P,"IADT",T),k=0;x=0;for(;x<o;){C+=e?h.tableDeltaT.decode(b):decodeInteger(P,"IADT",T);for(var I=k+=e?h.tableFirstS.decode(b):decodeInteger(P,"IAFS",T);;){var O=0;a>1&&(O=e?b.readBits(y):decodeInteger(P,"IAIT",T));var E=a*C+O,A=e?h.symbolIDTable.decode(b):decodeIAID(P,T,u),R=t&&(e?b.readBit():decodeInteger(P,"IARI",T)),M=c[A],D=M[0].length,L=M.length;if(R){var B=decodeInteger(P,"IARDW",T),U=decodeInteger(P,"IARDH",T);M=decodeRefinement(D+=B,L+=U,g,M,(B>>1)+decodeInteger(P,"IARDX",T),(U>>1)+decodeInteger(P,"IARDY",T),!1,v,m)}var N,j,z,H=E-(1&p?0:L-1),W=I-(2&p?D-1:0);if(f){for(N=0;N<L;N++)if(w=S[W+N]){z=M[N];var X=Math.min(r-H,D);switch(d){case 0:for(j=0;j<X;j++)w[H+j]|=z[j];break;case 2:for(j=0;j<X;j++)w[H+j]^=z[j];break;default:throw new s("operator ".concat(d," is not supported"))}}I+=L-1}else{for(j=0;j<L;j++)if(w=S[H+j]){z=M[j];switch(d){case 0:for(N=0;N<D;N++)w[W+N]|=z[N];break;case 2:for(N=0;N<D;N++)w[W+N]^=z[N];break;default:throw new s("operator ".concat(d," is not supported"))}}I+=D-1}x++;var q=e?h.tableDeltaS.decode(b):decodeInteger(P,"IADS",T);if(null===q)break;I+=q+l}}return S}function readSegmentHeader(t,r){var n={};n.number=(0,i.readUint32)(t,r);var o=t[r+4],a=63&o;if(!e[a])throw new s("invalid segment type: "+a);n.type=a;n.typeName=e[a];n.deferredNonRetain=!!(128&o);var c=!!(64&o),u=t[r+5],l=u>>5&7,p=[31&u],d=r+6;if(7===u){l=536870911&(0,i.readUint32)(t,d-1);d+=3;var h=l+7>>3;p[0]=t[d++];for(;--h>0;)p.push(t[d++])}else if(5===u||6===u)throw new s("invalid referred-to flags");n.retainBits=p;var g=4;n.number<=256?g=1:n.number<=65536&&(g=2);var v,m,y=[];for(v=0;v<l;v++){var b=void 0;b=1===g?t[d]:2===g?(0,i.readUint16)(t,d):(0,i.readUint32)(t,d);y.push(b);d+=g}n.referredTo=y;if(c){n.pageAssociation=(0,i.readUint32)(t,d);d+=4}else n.pageAssociation=t[d++];n.length=(0,i.readUint32)(t,d);d+=4;if(4294967295===n.length){if(38!==a)throw new s("invalid unknown segment length");var x=readRegionSegmentInformation(t,d),w=!!(1&t[d+f]),S=new Uint8Array(6);if(!w){S[0]=255;S[1]=172}S[2]=x.height>>>24&255;S[3]=x.height>>16&255;S[4]=x.height>>8&255;S[5]=255&x.height;for(v=d,m=t.length;v<m;v++){for(var _=0;_<6&&S[_]===t[v+_];)_++;if(6===_){n.length=v+6;break}}if(4294967295===n.length)throw new s("segment end was not found")}n.headerEnd=d;return n}function readSegments(e,t,r,n){for(var i=[],o=r;o<n;){var a=readSegmentHeader(t,o);o=a.headerEnd;var s={header:a,data:t};if(!e.randomAccess){s.start=o;o+=a.length;s.end=o}i.push(s);if(51===a.type)break}if(e.randomAccess)for(var c=0,u=i.length;c<u;c++){i[c].start=o;o+=i[c].header.length;i[c].end=o}return i}function readRegionSegmentInformation(e,t){return{width:(0,i.readUint32)(e,t),height:(0,i.readUint32)(e,t+4),x:(0,i.readUint32)(e,t+8),y:(0,i.readUint32)(e,t+12),combinationOperator:7&e[t+16]}}var f=17;function processSegment(e,t){var r,n,o,a,c=e.header,u=e.data,l=e.start,p=e.end;switch(c.type){case 0:var d={},h=(0,i.readUint16)(u,l);d.huffman=!!(1&h);d.refinement=!!(2&h);d.huffmanDHSelector=h>>2&3;d.huffmanDWSelector=h>>4&3;d.bitmapSizeSelector=h>>6&1;d.aggregationInstancesSelector=h>>7&1;d.bitmapCodingContextUsed=!!(256&h);d.bitmapCodingContextRetained=!!(512&h);d.template=h>>10&3;d.refinementTemplate=h>>12&1;l+=2;if(!d.huffman){a=0===d.template?4:1;n=[];for(o=0;o<a;o++){n.push({x:(0,i.readInt8)(u,l),y:(0,i.readInt8)(u,l+1)});l+=2}d.at=n}if(d.refinement&&!d.refinementTemplate){n=[];for(o=0;o<2;o++){n.push({x:(0,i.readInt8)(u,l),y:(0,i.readInt8)(u,l+1)});l+=2}d.refinementAt=n}d.numberOfExportedSymbols=(0,i.readUint32)(u,l);l+=4;d.numberOfNewSymbols=(0,i.readUint32)(u,l);l+=4;r=[d,c.number,c.referredTo,u,l,p];break;case 6:case 7:var g={};g.info=readRegionSegmentInformation(u,l);l+=f;var v=(0,i.readUint16)(u,l);l+=2;g.huffman=!!(1&v);g.refinement=!!(2&v);g.logStripSize=v>>2&3;g.stripSize=1<<g.logStripSize;g.referenceCorner=v>>4&3;g.transposed=!!(64&v);g.combinationOperator=v>>7&3;g.defaultPixelValue=v>>9&1;g.dsOffset=v<<17>>27;g.refinementTemplate=v>>15&1;if(g.huffman){var m=(0,i.readUint16)(u,l);l+=2;g.huffmanFS=3&m;g.huffmanDS=m>>2&3;g.huffmanDT=m>>4&3;g.huffmanRefinementDW=m>>6&3;g.huffmanRefinementDH=m>>8&3;g.huffmanRefinementDX=m>>10&3;g.huffmanRefinementDY=m>>12&3;g.huffmanRefinementSizeSelector=!!(16384&m)}if(g.refinement&&!g.refinementTemplate){n=[];for(o=0;o<2;o++){n.push({x:(0,i.readInt8)(u,l),y:(0,i.readInt8)(u,l+1)});l+=2}g.refinementAt=n}g.numberOfSymbolInstances=(0,i.readUint32)(u,l);l+=4;r=[g,c.referredTo,u,l,p];break;case 16:var y={},b=u[l++];y.mmr=!!(1&b);y.template=b>>1&3;y.patternWidth=u[l++];y.patternHeight=u[l++];y.maxPatternIndex=(0,i.readUint32)(u,l);l+=4;r=[y,c.number,u,l,p];break;case 22:case 23:var x={};x.info=readRegionSegmentInformation(u,l);l+=f;var w=u[l++];x.mmr=!!(1&w);x.template=w>>1&3;x.enableSkip=!!(8&w);x.combinationOperator=w>>4&7;x.defaultPixelValue=w>>7&1;x.gridWidth=(0,i.readUint32)(u,l);l+=4;x.gridHeight=(0,i.readUint32)(u,l);l+=4;x.gridOffsetX=4294967295&(0,i.readUint32)(u,l);l+=4;x.gridOffsetY=4294967295&(0,i.readUint32)(u,l);l+=4;x.gridVectorX=(0,i.readUint16)(u,l);l+=2;x.gridVectorY=(0,i.readUint16)(u,l);l+=2;r=[x,c.referredTo,u,l,p];break;case 38:case 39:var S={};S.info=readRegionSegmentInformation(u,l);l+=f;var _=u[l++];S.mmr=!!(1&_);S.template=_>>1&3;S.prediction=!!(8&_);if(!S.mmr){a=0===S.template?4:1;n=[];for(o=0;o<a;o++){n.push({x:(0,i.readInt8)(u,l),y:(0,i.readInt8)(u,l+1)});l+=2}S.at=n}r=[S,u,l,p];break;case 48:var T={width:(0,i.readUint32)(u,l),height:(0,i.readUint32)(u,l+4),resolutionX:(0,i.readUint32)(u,l+8),resolutionY:(0,i.readUint32)(u,l+12)};4294967295===T.height&&delete T.height;var P=u[l+16];(0,i.readUint16)(u,l+17);T.lossless=!!(1&P);T.refinement=!!(2&P);T.defaultPixelValue=P>>2&1;T.combinationOperator=P>>3&3;T.requiresBuffer=!!(32&P);T.combinationOperatorOverride=!!(64&P);r=[T];break;case 49:case 50:case 51:break;case 53:r=[c.number,u,l,p];break;case 62:break;default:throw new s("segment type ".concat(c.typeName,"(").concat(c.type,")")+" is not implemented")}var C="on"+c.typeName;C in t&&t[C].apply(t,r)}function processSegments(e,t){for(var r=0,n=e.length;r<n;r++)processSegment(e[r],t)}function SimpleSegmentVisitor(){}SimpleSegmentVisitor.prototype={onPageInformation:function SimpleSegmentVisitor_onPageInformation(e){this.currentPageInfo=e;var t=e.width+7>>3,r=new Uint8ClampedArray(t*e.height);if(e.defaultPixelValue)for(var n=0,i=r.length;n<i;n++)r[n]=255;this.buffer=r},drawBitmap:function SimpleSegmentVisitor_drawBitmap(e,t){var r,n,i,o,a=this.currentPageInfo,c=e.width,u=e.height,f=a.width+7>>3,l=a.combinationOperatorOverride?e.combinationOperator:a.combinationOperator,p=this.buffer,d=128>>(7&e.x),h=e.y*f+(e.x>>3);switch(l){case 0:for(r=0;r<u;r++){i=d;o=h;for(n=0;n<c;n++){t[r][n]&&(p[o]|=i);if(!(i>>=1)){i=128;o++}}h+=f}break;case 2:for(r=0;r<u;r++){i=d;o=h;for(n=0;n<c;n++){t[r][n]&&(p[o]^=i);if(!(i>>=1)){i=128;o++}}h+=f}break;default:throw new s("operator ".concat(l," is not supported"))}},onImmediateGenericRegion:function SimpleSegmentVisitor_onImmediateGenericRegion(e,t,r,n){var i=e.info,o=new DecodingContext(t,r,n),a=decodeBitmap(e.mmr,i.width,i.height,e.template,e.prediction,null,e.at,o);this.drawBitmap(i,a)},onImmediateLosslessGenericRegion:function SimpleSegmentVisitor_onImmediateLosslessGenericRegion(){this.onImmediateGenericRegion.apply(this,arguments)},onSymbolDictionary:function SimpleSegmentVisitor_onSymbolDictionary(e,t,r,n,o,a){var c,u;if(e.huffman){c=function getSymbolDictionaryHuffmanTables(e,t,r){var n,i,o,a,c=0;switch(e.huffmanDHSelector){case 0:case 1:n=getStandardTable(e.huffmanDHSelector+4);break;case 3:n=getCustomHuffmanTable(c,t,r);c++;break;default:throw new s("invalid Huffman DH selector")}switch(e.huffmanDWSelector){case 0:case 1:i=getStandardTable(e.huffmanDWSelector+2);break;case 3:i=getCustomHuffmanTable(c,t,r);c++;break;default:throw new s("invalid Huffman DW selector")}if(e.bitmapSizeSelector){o=getCustomHuffmanTable(c,t,r);c++}else o=getStandardTable(1);a=e.aggregationInstancesSelector?getCustomHuffmanTable(c,t,r):getStandardTable(1);return{tableDeltaHeight:n,tableDeltaWidth:i,tableBitmapSize:o,tableAggregateInstances:a}}(e,r,this.customTables);u=new Reader(n,o,a)}var f=this.symbols;f||(this.symbols=f={});for(var l=[],p=0,d=r.length;p<d;p++){var h=f[r[p]];h&&(l=l.concat(h))}var g=new DecodingContext(n,o,a);f[t]=function decodeSymbolDictionary(e,t,r,n,o,a,c,u,f,l,p,d){if(e&&t)throw new s("symbol refinement with Huffman is not supported");var h,g,v=[],m=0,y=(0,i.log2)(r.length+n),b=p.decoder,x=p.contextCache;if(e){h=getStandardTable(1);g=[];y=Math.max(y,1)}for(;v.length<n;){m+=e?a.tableDeltaHeight.decode(d):decodeInteger(x,"IADH",b);for(var w=0,S=0,_=e?g.length:0;;){var T,P=e?a.tableDeltaWidth.decode(d):decodeInteger(x,"IADW",b);if(null===P)break;S+=w+=P;if(t){var C=decodeInteger(x,"IAAI",b);if(C>1)T=decodeTextRegion(e,t,w,m,0,C,1,r.concat(v),y,0,0,1,0,a,f,l,p,0,d);else{var k=decodeIAID(x,b,y),I=decodeInteger(x,"IARDX",b),O=decodeInteger(x,"IARDY",b);T=decodeRefinement(w,m,f,k<r.length?r[k]:v[k-r.length],I,O,!1,l,p)}v.push(T)}else if(e)g.push(w);else{T=decodeBitmap(!1,w,m,c,!1,null,u,p);v.push(T)}}if(e&&!t){var E=a.tableBitmapSize.decode(d);d.byteAlign();var A=void 0;if(0===E)A=readUncompressedBitmap(d,S,m);else{var R=d.end,M=d.position+E;d.end=M;A=decodeMMRBitmap(d,S,m,!1);d.end=R;d.position=M}var D=g.length;if(_===D-1)v.push(A);else{var L=void 0,B=void 0,U=0,N=void 0,j=void 0;for(L=_;L<D;L++){N=U+g[L];j=[];for(B=0;B<m;B++)j.push(A[B].subarray(U,N));v.push(j);U=N}}}}for(var z=[],H=[],W=!1,X=r.length+n;H.length<X;){for(var q=e?h.decode(d):decodeInteger(x,"IAEX",b);q--;)H.push(W);W=!W}for(var Y=0,V=r.length;Y<V;Y++)H[Y]&&z.push(r[Y]);for(var J=0;J<n;Y++,J++)H[Y]&&z.push(v[J]);return z}(e.huffman,e.refinement,l,e.numberOfNewSymbols,e.numberOfExportedSymbols,c,e.template,e.at,e.refinementTemplate,e.refinementAt,g,u)},onImmediateTextRegion:function SimpleSegmentVisitor_onImmediateTextRegion(e,t,r,n,o){for(var a,c,u=e.info,f=this.symbols,l=[],p=0,d=t.length;p<d;p++){var h=f[t[p]];h&&(l=l.concat(h))}var g=(0,i.log2)(l.length);if(e.huffman){c=new Reader(r,n,o);a=function getTextRegionHuffmanTables(e,t,r,n,i){for(var o=[],a=0;a<=34;a++){var c=i.readBits(4);o.push(new HuffmanLine([a,c,0,0]))}var u=new HuffmanTable(o,!1);o.length=0;for(var f=0;f<n;){var l=u.decode(i);if(l>=32){var p=void 0,d=void 0,h=void 0;switch(l){case 32:if(0===f)throw new s("no previous value in symbol ID table");d=i.readBits(2)+3;p=o[f-1].prefixLength;break;case 33:d=i.readBits(3)+3;p=0;break;case 34:d=i.readBits(7)+11;p=0;break;default:throw new s("invalid code length in symbol ID table")}for(h=0;h<d;h++){o.push(new HuffmanLine([f,p,0,0]));f++}}else{o.push(new HuffmanLine([f,l,0,0]));f++}}i.byteAlign();var g,v,m,y=new HuffmanTable(o,!1),b=0;switch(e.huffmanFS){case 0:case 1:g=getStandardTable(e.huffmanFS+6);break;case 3:g=getCustomHuffmanTable(b,t,r);b++;break;default:throw new s("invalid Huffman FS selector")}switch(e.huffmanDS){case 0:case 1:case 2:v=getStandardTable(e.huffmanDS+8);break;case 3:v=getCustomHuffmanTable(b,t,r);b++;break;default:throw new s("invalid Huffman DS selector")}switch(e.huffmanDT){case 0:case 1:case 2:m=getStandardTable(e.huffmanDT+11);break;case 3:m=getCustomHuffmanTable(b,t,r);b++;break;default:throw new s("invalid Huffman DT selector")}if(e.refinement)throw new s("refinement with Huffman is not supported");return{symbolIDTable:y,tableFirstS:g,tableDeltaS:v,tableDeltaT:m}}(e,t,this.customTables,l.length,c)}var v=new DecodingContext(r,n,o),m=decodeTextRegion(e.huffman,e.refinement,u.width,u.height,e.defaultPixelValue,e.numberOfSymbolInstances,e.stripSize,l,g,e.transposed,e.dsOffset,e.referenceCorner,e.combinationOperator,a,e.refinementTemplate,e.refinementAt,v,e.logStripSize,c);this.drawBitmap(u,m)},onImmediateLosslessTextRegion:function SimpleSegmentVisitor_onImmediateLosslessTextRegion(){this.onImmediateTextRegion.apply(this,arguments)},onPatternDictionary:function onPatternDictionary(e,t,r,n,i){var o=this.patterns;o||(this.patterns=o={});var a=new DecodingContext(r,n,i);o[t]=function decodePatternDictionary(e,t,r,n,i,o){var a=[];if(!e){a.push({x:-t,y:0});if(0===i){a.push({x:-3,y:-1});a.push({x:2,y:-2});a.push({x:-2,y:-2})}}for(var s=decodeBitmap(e,(n+1)*t,r,i,!1,null,a,o),c=[],u=0;u<=n;u++){for(var f=[],l=t*u,p=l+t,d=0;d<r;d++)f.push(s[d].subarray(l,p));c.push(f)}return c}(e.mmr,e.patternWidth,e.patternHeight,e.maxPatternIndex,e.template,a)},onImmediateHalftoneRegion:function onImmediateHalftoneRegion(e,t,r,n,o){var a=this.patterns[t[0]],c=e.info,u=new DecodingContext(r,n,o),f=function decodeHalftoneRegion(e,t,r,n,o,a,c,u,f,l,p,d,h,g,v){if(c)throw new s("skip is not supported");if(0!==u)throw new s("operator "+u+" is not supported in halftone region");var m,y,b,x=[];for(m=0;m<o;m++){b=new Uint8Array(n);if(a)for(y=0;y<n;y++)b[y]=a;x.push(b)}var w=t.length,S=t[0],_=S[0].length,T=S.length,P=(0,i.log2)(w),C=[];if(!e){C.push({x:r<=1?3:2,y:-1});if(0===r){C.push({x:-3,y:-1});C.push({x:2,y:-2});C.push({x:-2,y:-2})}}var k,I,O,E,A,R,M,D,L,B,U,N=[];e&&(k=new Reader(v.data,v.start,v.end));for(m=P-1;m>=0;m--){I=e?decodeMMRBitmap(k,f,l,!0):decodeBitmap(!1,f,l,r,!1,null,C,v);N[m]=I}for(O=0;O<l;O++)for(E=0;E<f;E++){A=0;R=0;for(y=P-1;y>=0;y--)R|=(A=N[y][O][E]^A)<<y;M=t[R];L=d+O*h-E*g>>8;if((D=p+O*g+E*h>>8)>=0&&D+_<=n&&L>=0&&L+T<=o)for(m=0;m<T;m++){U=x[L+m];B=M[m];for(y=0;y<_;y++)U[D+y]|=B[y]}else{var j=void 0,z=void 0;for(m=0;m<T;m++)if(!((z=L+m)<0||z>=o)){U=x[z];B=M[m];for(y=0;y<_;y++)(j=D+y)>=0&&j<n&&(U[j]|=B[y])}}}return x}(e.mmr,a,e.template,c.width,c.height,e.defaultPixelValue,e.enableSkip,e.combinationOperator,e.gridWidth,e.gridHeight,e.gridOffsetX,e.gridOffsetY,e.gridVectorX,e.gridVectorY,u);this.drawBitmap(c,f)},onImmediateLosslessHalftoneRegion:function onImmediateLosslessHalftoneRegion(){this.onImmediateHalftoneRegion.apply(this,arguments)},onTables:function onTables(e,t,r,n){var o=this.customTables;o||(this.customTables=o={});o[e]=function decodeTablesSegment(e,t,r){var n,o,a=e[t],s=4294967295&(0,i.readUint32)(e,t+1),c=4294967295&(0,i.readUint32)(e,t+5),u=new Reader(e,t+9,r),f=1+(a>>1&7),l=1+(a>>4&7),p=[],d=s;do{n=u.readBits(f);o=u.readBits(l);p.push(new HuffmanLine([d,n,o,0]));d+=1<<o}while(d<c);n=u.readBits(f);p.push(new HuffmanLine([s-1,n,32,0,"lower"]));n=u.readBits(f);p.push(new HuffmanLine([c,n,32,0]));if(1&a){n=u.readBits(f);p.push(new HuffmanLine([n,0]))}return new HuffmanTable(p,!1)}(t,r,n)}};function HuffmanLine(e){if(2===e.length){this.isOOB=!0;this.rangeLow=0;this.prefixLength=e[0];this.rangeLength=0;this.prefixCode=e[1];this.isLowerRange=!1}else{this.isOOB=!1;this.rangeLow=e[0];this.prefixLength=e[1];this.rangeLength=e[2];this.prefixCode=e[3];this.isLowerRange="lower"===e[4]}}function HuffmanTreeNode(e){this.children=[];if(e){this.isLeaf=!0;this.rangeLength=e.rangeLength;this.rangeLow=e.rangeLow;this.isLowerRange=e.isLowerRange;this.isOOB=e.isOOB}else this.isLeaf=!1}HuffmanTreeNode.prototype={buildTree:function buildTree(e,t){var r=e.prefixCode>>t&1;if(t<=0)this.children[r]=new HuffmanTreeNode(e);else{var n=this.children[r];n||(this.children[r]=n=new HuffmanTreeNode(null));n.buildTree(e,t-1)}},decodeNode:function decodeNode(e){if(this.isLeaf){if(this.isOOB)return null;var t=e.readBits(this.rangeLength);return this.rangeLow+(this.isLowerRange?-t:t)}var r=this.children[e.readBit()];if(!r)throw new s("invalid Huffman data");return r.decodeNode(e)}};function HuffmanTable(e,t){t||this.assignPrefixCodes(e);this.rootNode=new HuffmanTreeNode(null);for(var r=0,n=e.length;r<n;r++){var i=e[r];i.prefixLength>0&&this.rootNode.buildTree(i,i.prefixLength-1)}}HuffmanTable.prototype={decode:function decode(e){return this.rootNode.decodeNode(e)},assignPrefixCodes:function assignPrefixCodes(e){for(var t=e.length,r=0,n=0;n<t;n++)r=Math.max(r,e[n].prefixLength);for(var i=new Uint32Array(r+1),o=0;o<t;o++)i[e[o].prefixLength]++;var a,s,c,u=1,f=0;i[0]=0;for(;u<=r;){a=f=f+i[u-1]<<1;s=0;for(;s<t;){if((c=e[s]).prefixLength===u){c.prefixCode=a;a++}s++}u++}}};var l={};function getStandardTable(e){var t,r=l[e];if(r)return r;switch(e){case 1:t=[[0,1,4,0],[16,2,8,2],[272,3,16,6],[65808,3,32,7]];break;case 2:t=[[0,1,0,0],[1,2,0,2],[2,3,0,6],[3,4,3,14],[11,5,6,30],[75,6,32,62],[6,63]];break;case 3:t=[[-256,8,8,254],[0,1,0,0],[1,2,0,2],[2,3,0,6],[3,4,3,14],[11,5,6,30],[-257,8,32,255,"lower"],[75,7,32,126],[6,62]];break;case 4:t=[[1,1,0,0],[2,2,0,2],[3,3,0,6],[4,4,3,14],[12,5,6,30],[76,5,32,31]];break;case 5:t=[[-255,7,8,126],[1,1,0,0],[2,2,0,2],[3,3,0,6],[4,4,3,14],[12,5,6,30],[-256,7,32,127,"lower"],[76,6,32,62]];break;case 6:t=[[-2048,5,10,28],[-1024,4,9,8],[-512,4,8,9],[-256,4,7,10],[-128,5,6,29],[-64,5,5,30],[-32,4,5,11],[0,2,7,0],[128,3,7,2],[256,3,8,3],[512,4,9,12],[1024,4,10,13],[-2049,6,32,62,"lower"],[2048,6,32,63]];break;case 7:t=[[-1024,4,9,8],[-512,3,8,0],[-256,4,7,9],[-128,5,6,26],[-64,5,5,27],[-32,4,5,10],[0,4,5,11],[32,5,5,28],[64,5,6,29],[128,4,7,12],[256,3,8,1],[512,3,9,2],[1024,3,10,3],[-1025,5,32,30,"lower"],[2048,5,32,31]];break;case 8:t=[[-15,8,3,252],[-7,9,1,508],[-5,8,1,253],[-3,9,0,509],[-2,7,0,124],[-1,4,0,10],[0,2,1,0],[2,5,0,26],[3,6,0,58],[4,3,4,4],[20,6,1,59],[22,4,4,11],[38,4,5,12],[70,5,6,27],[134,5,7,28],[262,6,7,60],[390,7,8,125],[646,6,10,61],[-16,9,32,510,"lower"],[1670,9,32,511],[2,1]];break;case 9:t=[[-31,8,4,252],[-15,9,2,508],[-11,8,2,253],[-7,9,1,509],[-5,7,1,124],[-3,4,1,10],[-1,3,1,2],[1,3,1,3],[3,5,1,26],[5,6,1,58],[7,3,5,4],[39,6,2,59],[43,4,5,11],[75,4,6,12],[139,5,7,27],[267,5,8,28],[523,6,8,60],[779,7,9,125],[1291,6,11,61],[-32,9,32,510,"lower"],[3339,9,32,511],[2,0]];break;case 10:t=[[-21,7,4,122],[-5,8,0,252],[-4,7,0,123],[-3,5,0,24],[-2,2,2,0],[2,5,0,25],[3,6,0,54],[4,7,0,124],[5,8,0,253],[6,2,6,1],[70,5,5,26],[102,6,5,55],[134,6,6,56],[198,6,7,57],[326,6,8,58],[582,6,9,59],[1094,6,10,60],[2118,7,11,125],[-22,8,32,254,"lower"],[4166,8,32,255],[2,2]];break;case 11:t=[[1,1,0,0],[2,2,1,2],[4,4,0,12],[5,4,1,13],[7,5,1,28],[9,5,2,29],[13,6,2,60],[17,7,2,122],[21,7,3,123],[29,7,4,124],[45,7,5,125],[77,7,6,126],[141,7,32,127]];break;case 12:t=[[1,1,0,0],[2,2,0,2],[3,3,1,6],[5,5,0,28],[6,5,1,29],[8,6,1,60],[10,7,0,122],[11,7,1,123],[13,7,2,124],[17,7,3,125],[25,7,4,126],[41,8,5,254],[73,8,32,255]];break;case 13:t=[[1,1,0,0],[2,3,0,4],[3,4,0,12],[4,5,0,28],[5,4,1,13],[7,3,3,5],[15,6,1,58],[17,6,2,59],[21,6,3,60],[29,6,4,61],[45,6,5,62],[77,7,6,126],[141,7,32,127]];break;case 14:t=[[-2,3,0,4],[-1,3,0,5],[0,1,0,0],[1,3,0,6],[2,3,0,7]];break;case 15:t=[[-24,7,4,124],[-8,6,2,60],[-4,5,1,28],[-2,4,0,12],[-1,3,0,4],[0,1,0,0],[1,3,0,5],[2,4,0,13],[3,5,1,29],[5,6,2,61],[9,7,4,125],[-25,7,32,126,"lower"],[25,7,32,127]];break;default:throw new s("standard table B.".concat(e," does not exist"))}for(var n=0,i=t.length;n<i;n++)t[n]=new HuffmanLine(t[n]);r=new HuffmanTable(t,!0);l[e]=r;return r}function Reader(e,t,r){this.data=e;this.start=t;this.end=r;this.position=t;this.shift=-1;this.currentByte=0}Reader.prototype={readBit:function readBit(){if(this.shift<0){if(this.position>=this.end)throw new s("end of data while reading bit");this.currentByte=this.data[this.position++];this.shift=7}var e=this.currentByte>>this.shift&1;this.shift--;return e},readBits:function readBits(e){var t,r=0;for(t=e-1;t>=0;t--)r|=this.readBit()<<t;return r},byteAlign:function byteAlign(){this.shift=-1},next:function next(){return this.position>=this.end?-1:this.data[this.position++]}};function getCustomHuffmanTable(e,t,r){for(var n=0,i=0,o=t.length;i<o;i++){var a=r[t[i]];if(a){if(e===n)return a;n++}}throw new s("can't find custom Huffman table")}function readUncompressedBitmap(e,t,r){for(var n=[],i=0;i<r;i++){var o=new Uint8Array(t);n.push(o);for(var a=0;a<t;a++)o[a]=e.readBit();e.byteAlign()}return n}function decodeMMRBitmap(e,t,r,n){for(var i,o={K:-1,Columns:t,Rows:r,BlackIs1:!0,EndOfBlock:n},s=new a.CCITTFaxDecoder(e,o),c=[],u=!1,f=0;f<r;f++){var l=new Uint8Array(t);c.push(l);for(var p=-1,d=0;d<t;d++){if(p<0){if(-1===(i=s.readNextChar())){i=0;u=!0}p=7}l[d]=i>>p&1;p--}}if(n&&!u)for(var h=0;h<5&&-1!==s.readNextChar();h++);return c}function Jbig2Image(){}Jbig2Image.prototype={parseChunks:function parseChunks(e){return function parseJbig2Chunks(e){for(var t=new SimpleSegmentVisitor,r=0,n=e.length;r<n;r++){var i=e[r];processSegments(readSegments({},i.data,i.start,i.end),t)}return t.buffer}(e)},parse:function parse(e){var t=function parseJbig2(e){var t=e.length,r=0;if(151!==e[r]||74!==e[r+1]||66!==e[r+2]||50!==e[r+3]||13!==e[r+4]||10!==e[r+5]||26!==e[r+6]||10!==e[r+7])throw new s("parseJbig2 - invalid header.");var n=Object.create(null);r+=8;var o=e[r++];n.randomAccess=!(1&o);if(!(2&o)){n.numberOfPages=(0,i.readUint32)(e,r);r+=4}var a=readSegments(n,e,r,t),c=new SimpleSegmentVisitor;processSegments(a,c);for(var u=c.currentPageInfo,f=u.width,l=u.height,p=c.buffer,d=new Uint8ClampedArray(f*l),h=0,g=0,v=0;v<l;v++)for(var m=0,y=void 0,b=0;b<f;b++){if(!m){m=128;y=p[g++]}d[h++]=y&m?0:255;m>>=1}return{imgData:d,width:f,height:l}}(e),r=t.imgData,n=t.width,o=t.height;this.width=n;this.height=o;return r}};return Jbig2Image}();t.Jbig2Image=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getLookupTableFactory=function getLookupTableFactory(e){var t;return function(){if(e){t=Object.create(null);e(t);e=null}return t}};t.getInheritableProperty=function getInheritableProperty(e){var t,r=e.dict,i=e.key,o=e.getArray,a=void 0!==o&&o,s=e.stopWhenFound,c=void 0===s||s,u=0;for(;r;){var f=a?r.getArray(i):r.get(i);if(void 0!==f){if(c)return f;t||(t=[]);t.push(f)}if(++u>100){(0,n.warn)('getInheritableProperty: maximum loop count exceeded for "'.concat(i,'"'));break}r=r.get("Parent")}return t};t.toRomanNumerals=function toRomanNumerals(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,n.assert)(Number.isInteger(e)&&e>0,"The number should be a positive integer.");var r,i=[];for(;e>=1e3;){e-=1e3;i.push("M")}r=e/100|0;e%=100;i.push(s[r]);r=e/10|0;e%=10;i.push(s[10+r]);i.push(s[20+e]);var o=i.join("");return t?o.toLowerCase():o};t.log2=function log2(e){if(e<=0)return 0;return Math.ceil(Math.log2(e))};t.readInt8=function readInt8(e,t){return e[t]<<24>>24};t.readUint16=function readUint16(e,t){return e[t]<<8|e[t+1]};t.readUint32=function readUint32(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0};t.isWhiteSpace=function isWhiteSpace(e){return 32===e||9===e||13===e||10===e};t.XRefParseException=t.XRefEntryException=t.MissingDataException=void 0;var n=r(1);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var i=function(e){_inherits(MissingDataException,e);var t=_createSuper(MissingDataException);function MissingDataException(e,r){var n;_classCallCheck(this,MissingDataException);(n=t.call(this,"Missing data [".concat(e,", ").concat(r,")"))).begin=e;n.end=r;return n}return MissingDataException}(n.BaseException);t.MissingDataException=i;var o=function(e){_inherits(XRefEntryException,e);var t=_createSuper(XRefEntryException);function XRefEntryException(){_classCallCheck(this,XRefEntryException);return t.apply(this,arguments)}return XRefEntryException}(n.BaseException);t.XRefEntryException=o;var a=function(e){_inherits(XRefParseException,e);var t=_createSuper(XRefParseException);function XRefParseException(){_classCallCheck(this,XRefParseException);return t.apply(this,arguments)}return XRefParseException}(n.BaseException);t.XRefParseException=a;var s=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"]},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ArithmeticDecoder=void 0;function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}var n=[{qe:22017,nmps:1,nlps:1,switchFlag:1},{qe:13313,nmps:2,nlps:6,switchFlag:0},{qe:6145,nmps:3,nlps:9,switchFlag:0},{qe:2753,nmps:4,nlps:12,switchFlag:0},{qe:1313,nmps:5,nlps:29,switchFlag:0},{qe:545,nmps:38,nlps:33,switchFlag:0},{qe:22017,nmps:7,nlps:6,switchFlag:1},{qe:21505,nmps:8,nlps:14,switchFlag:0},{qe:18433,nmps:9,nlps:14,switchFlag:0},{qe:14337,nmps:10,nlps:14,switchFlag:0},{qe:12289,nmps:11,nlps:17,switchFlag:0},{qe:9217,nmps:12,nlps:18,switchFlag:0},{qe:7169,nmps:13,nlps:20,switchFlag:0},{qe:5633,nmps:29,nlps:21,switchFlag:0},{qe:22017,nmps:15,nlps:14,switchFlag:1},{qe:21505,nmps:16,nlps:14,switchFlag:0},{qe:20737,nmps:17,nlps:15,switchFlag:0},{qe:18433,nmps:18,nlps:16,switchFlag:0},{qe:14337,nmps:19,nlps:17,switchFlag:0},{qe:13313,nmps:20,nlps:18,switchFlag:0},{qe:12289,nmps:21,nlps:19,switchFlag:0},{qe:10241,nmps:22,nlps:19,switchFlag:0},{qe:9217,nmps:23,nlps:20,switchFlag:0},{qe:8705,nmps:24,nlps:21,switchFlag:0},{qe:7169,nmps:25,nlps:22,switchFlag:0},{qe:6145,nmps:26,nlps:23,switchFlag:0},{qe:5633,nmps:27,nlps:24,switchFlag:0},{qe:5121,nmps:28,nlps:25,switchFlag:0},{qe:4609,nmps:29,nlps:26,switchFlag:0},{qe:4353,nmps:30,nlps:27,switchFlag:0},{qe:2753,nmps:31,nlps:28,switchFlag:0},{qe:2497,nmps:32,nlps:29,switchFlag:0},{qe:2209,nmps:33,nlps:30,switchFlag:0},{qe:1313,nmps:34,nlps:31,switchFlag:0},{qe:1089,nmps:35,nlps:32,switchFlag:0},{qe:673,nmps:36,nlps:33,switchFlag:0},{qe:545,nmps:37,nlps:34,switchFlag:0},{qe:321,nmps:38,nlps:35,switchFlag:0},{qe:273,nmps:39,nlps:36,switchFlag:0},{qe:133,nmps:40,nlps:37,switchFlag:0},{qe:73,nmps:41,nlps:38,switchFlag:0},{qe:37,nmps:42,nlps:39,switchFlag:0},{qe:21,nmps:43,nlps:40,switchFlag:0},{qe:9,nmps:44,nlps:41,switchFlag:0},{qe:5,nmps:45,nlps:42,switchFlag:0},{qe:1,nmps:45,nlps:43,switchFlag:0},{qe:22017,nmps:46,nlps:46,switchFlag:0}],i=function(){function ArithmeticDecoder(e,t,r){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ArithmeticDecoder);this.data=e;this.bp=t;this.dataEnd=r;this.chigh=e[t];this.clow=0;this.byteIn();this.chigh=this.chigh<<7&65535|this.clow>>9&127;this.clow=this.clow<<7&65535;this.ct-=7;this.a=32768}!function _createClass(e,t,r){t&&_defineProperties(e.prototype,t);r&&_defineProperties(e,r);return e}(ArithmeticDecoder,[{key:"byteIn",value:function byteIn(){var e=this.data,t=this.bp;if(255===e[t])if(e[t+1]>143){this.clow+=65280;this.ct=8}else{t++;this.clow+=e[t]<<9;this.ct=7;this.bp=t}else{t++;this.clow+=t<this.dataEnd?e[t]<<8:65280;this.ct=8;this.bp=t}if(this.clow>65535){this.chigh+=this.clow>>16;this.clow&=65535}}},{key:"readBit",value:function readBit(e,t){var r,i=e[t]>>1,o=1&e[t],a=n[i],s=a.qe,c=this.a-s;if(this.chigh<s)if(c<s){c=s;r=o;i=a.nmps}else{c=s;r=1^o;1===a.switchFlag&&(o=r);i=a.nlps}else{this.chigh-=s;if(0!=(32768&c)){this.a=c;return o}if(c<s){r=1^o;1===a.switchFlag&&(o=r);i=a.nlps}else{r=o;i=a.nmps}}do{0===this.ct&&this.byteIn();c<<=1;this.chigh=this.chigh<<1&65535|this.clow>>15&1;this.clow=this.clow<<1&65535;this.ct--}while(0==(32768&c));this.a=c;e[t]=i<<1|o;return r}}]);return ArithmeticDecoder}();t.ArithmeticDecoder=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CCITTFaxDecoder=void 0;var n=r(1),i=function CCITTFaxDecoder(){var e=[[-1,-1],[-1,-1],[7,8],[7,7],[6,6],[6,6],[6,5],[6,5],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[4,0],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[3,3],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2]],t=[[-1,-1],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[12,1984],[12,2048],[12,2112],[12,2176],[12,2240],[12,2304],[11,1856],[11,1856],[11,1920],[11,1920],[12,2368],[12,2432],[12,2496],[12,2560]],r=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[8,29],[8,29],[8,30],[8,30],[8,45],[8,45],[8,46],[8,46],[7,22],[7,22],[7,22],[7,22],[7,23],[7,23],[7,23],[7,23],[8,47],[8,47],[8,48],[8,48],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[6,13],[7,20],[7,20],[7,20],[7,20],[8,33],[8,33],[8,34],[8,34],[8,35],[8,35],[8,36],[8,36],[8,37],[8,37],[8,38],[8,38],[7,19],[7,19],[7,19],[7,19],[8,31],[8,31],[8,32],[8,32],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[6,12],[8,53],[8,53],[8,54],[8,54],[7,26],[7,26],[7,26],[7,26],[8,39],[8,39],[8,40],[8,40],[8,41],[8,41],[8,42],[8,42],[8,43],[8,43],[8,44],[8,44],[7,21],[7,21],[7,21],[7,21],[7,28],[7,28],[7,28],[7,28],[8,61],[8,61],[8,62],[8,62],[8,63],[8,63],[8,0],[8,0],[8,320],[8,320],[8,384],[8,384],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,10],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[5,11],[7,27],[7,27],[7,27],[7,27],[8,59],[8,59],[8,60],[8,60],[9,1472],[9,1536],[9,1600],[9,1728],[7,18],[7,18],[7,18],[7,18],[7,24],[7,24],[7,24],[7,24],[8,49],[8,49],[8,50],[8,50],[8,51],[8,51],[8,52],[8,52],[7,25],[7,25],[7,25],[7,25],[8,55],[8,55],[8,56],[8,56],[8,57],[8,57],[8,58],[8,58],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,192],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[6,1664],[8,448],[8,448],[8,512],[8,512],[9,704],[9,768],[8,640],[8,640],[8,576],[8,576],[9,832],[9,896],[9,960],[9,1024],[9,1088],[9,1152],[9,1216],[9,1280],[9,1344],[9,1408],[7,256],[7,256],[7,256],[7,256],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,128],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,8],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[5,9],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,16],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[6,17],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,4],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[4,5],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,14],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[6,15],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[5,64],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,6],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7],[4,7]],i=[[-1,-1],[-1,-1],[12,-2],[12,-2],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[11,1792],[11,1792],[11,1792],[11,1792],[12,1984],[12,1984],[12,2048],[12,2048],[12,2112],[12,2112],[12,2176],[12,2176],[12,2240],[12,2240],[12,2304],[12,2304],[11,1856],[11,1856],[11,1856],[11,1856],[11,1920],[11,1920],[11,1920],[11,1920],[12,2368],[12,2368],[12,2432],[12,2432],[12,2496],[12,2496],[12,2560],[12,2560],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[10,18],[12,52],[12,52],[13,640],[13,704],[13,768],[13,832],[12,55],[12,55],[12,56],[12,56],[13,1280],[13,1344],[13,1408],[13,1472],[12,59],[12,59],[12,60],[12,60],[13,1536],[13,1600],[11,24],[11,24],[11,24],[11,24],[11,25],[11,25],[11,25],[11,25],[13,1664],[13,1728],[12,320],[12,320],[12,384],[12,384],[12,448],[12,448],[13,512],[13,576],[12,53],[12,53],[12,54],[12,54],[13,896],[13,960],[13,1024],[13,1088],[13,1152],[13,1216],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64],[10,64]],o=[[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[8,13],[11,23],[11,23],[12,50],[12,51],[12,44],[12,45],[12,46],[12,47],[12,57],[12,58],[12,61],[12,256],[10,16],[10,16],[10,16],[10,16],[10,17],[10,17],[10,17],[10,17],[12,48],[12,49],[12,62],[12,63],[12,30],[12,31],[12,32],[12,33],[12,40],[12,41],[11,22],[11,22],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[8,14],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,10],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[7,11],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[9,15],[12,128],[12,192],[12,26],[12,27],[12,28],[12,29],[11,19],[11,19],[11,20],[11,20],[12,34],[12,35],[12,36],[12,37],[12,38],[12,39],[11,21],[11,21],[12,42],[12,43],[10,0],[10,0],[10,0],[10,0],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12],[7,12]],a=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[6,9],[6,8],[5,7],[5,7],[4,6],[4,6],[4,6],[4,6],[4,5],[4,5],[4,5],[4,5],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,1],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[3,4],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,3],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]];function CCITTFaxDecoder(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||"function"!=typeof e.next)throw new Error('CCITTFaxDecoder - invalid "source" parameter.');this.source=e;this.eof=!1;this.encoding=t.K||0;this.eoline=t.EndOfLine||!1;this.byteAlign=t.EncodedByteAlign||!1;this.columns=t.Columns||1728;this.rows=t.Rows||0;var r,n=t.EndOfBlock;null==n&&(n=!0);this.eoblock=n;this.black=t.BlackIs1||!1;this.codingLine=new Uint32Array(this.columns+1);this.refLine=new Uint32Array(this.columns+2);this.codingLine[0]=this.columns;this.codingPos=0;this.row=0;this.nextLine2D=this.encoding<0;this.inputBits=0;this.inputBuf=0;this.outputBits=0;this.rowsDone=!1;for(;0===(r=this._lookBits(12));)this._eatBits(1);1===r&&this._eatBits(12);if(this.encoding>0){this.nextLine2D=!this._lookBits(1);this._eatBits(1)}}CCITTFaxDecoder.prototype={readNextChar:function readNextChar(){if(this.eof)return-1;var e,t,r,i,o,a=this.refLine,s=this.codingLine,c=this.columns;if(0===this.outputBits){this.rowsDone&&(this.eof=!0);if(this.eof)return-1;this.err=!1;var u,f,l;if(this.nextLine2D){for(i=0;s[i]<c;++i)a[i]=s[i];a[i++]=c;a[i]=c;s[0]=0;this.codingPos=0;e=0;t=0;for(;s[this.codingPos]<c;)switch(u=this._getTwoDimCode()){case 0:this._addPixels(a[e+1],t);a[e+1]<c&&(e+=2);break;case 1:u=f=0;if(t){do{u+=l=this._getBlackCode()}while(l>=64);do{f+=l=this._getWhiteCode()}while(l>=64)}else{do{u+=l=this._getWhiteCode()}while(l>=64);do{f+=l=this._getBlackCode()}while(l>=64)}this._addPixels(s[this.codingPos]+u,t);s[this.codingPos]<c&&this._addPixels(s[this.codingPos]+f,1^t);for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2;break;case 7:this._addPixels(a[e]+3,t);t^=1;if(s[this.codingPos]<c){++e;for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2}break;case 5:this._addPixels(a[e]+2,t);t^=1;if(s[this.codingPos]<c){++e;for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2}break;case 3:this._addPixels(a[e]+1,t);t^=1;if(s[this.codingPos]<c){++e;for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2}break;case 2:this._addPixels(a[e],t);t^=1;if(s[this.codingPos]<c){++e;for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2}break;case 8:this._addPixelsNeg(a[e]-3,t);t^=1;if(s[this.codingPos]<c){e>0?--e:++e;for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2}break;case 6:this._addPixelsNeg(a[e]-2,t);t^=1;if(s[this.codingPos]<c){e>0?--e:++e;for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2}break;case 4:this._addPixelsNeg(a[e]-1,t);t^=1;if(s[this.codingPos]<c){e>0?--e:++e;for(;a[e]<=s[this.codingPos]&&a[e]<c;)e+=2}break;case-1:this._addPixels(c,0);this.eof=!0;break;default:(0,n.info)("bad 2d code");this._addPixels(c,0);this.err=!0}}else{s[0]=0;this.codingPos=0;t=0;for(;s[this.codingPos]<c;){u=0;if(t)do{u+=l=this._getBlackCode()}while(l>=64);else do{u+=l=this._getWhiteCode()}while(l>=64);this._addPixels(s[this.codingPos]+u,t);t^=1}}var p=!1;this.byteAlign&&(this.inputBits&=-8);if(this.eoblock||this.row!==this.rows-1){u=this._lookBits(12);if(this.eoline)for(;-1!==u&&1!==u;){this._eatBits(1);u=this._lookBits(12)}else for(;0===u;){this._eatBits(1);u=this._lookBits(12)}if(1===u){this._eatBits(12);p=!0}else-1===u&&(this.eof=!0)}else this.rowsDone=!0;if(!this.eof&&this.encoding>0&&!this.rowsDone){this.nextLine2D=!this._lookBits(1);this._eatBits(1)}if(this.eoblock&&p&&this.byteAlign){if(1===(u=this._lookBits(12))){this._eatBits(12);if(this.encoding>0){this._lookBits(1);this._eatBits(1)}if(this.encoding>=0)for(i=0;i<4;++i){1!==(u=this._lookBits(12))&&(0,n.info)("bad rtc code: "+u);this._eatBits(12);if(this.encoding>0){this._lookBits(1);this._eatBits(1)}}this.eof=!0}}else if(this.err&&this.eoline){for(;;){if(-1===(u=this._lookBits(13))){this.eof=!0;return-1}if(u>>1==1)break;this._eatBits(1)}this._eatBits(12);if(this.encoding>0){this._eatBits(1);this.nextLine2D=!(1&u)}}s[0]>0?this.outputBits=s[this.codingPos=0]:this.outputBits=s[this.codingPos=1];this.row++}if(this.outputBits>=8){o=1&this.codingPos?0:255;this.outputBits-=8;if(0===this.outputBits&&s[this.codingPos]<c){this.codingPos++;this.outputBits=s[this.codingPos]-s[this.codingPos-1]}}else{r=8;o=0;do{if(this.outputBits>r){o<<=r;1&this.codingPos||(o|=255>>8-r);this.outputBits-=r;r=0}else{o<<=this.outputBits;1&this.codingPos||(o|=255>>8-this.outputBits);r-=this.outputBits;this.outputBits=0;if(s[this.codingPos]<c){this.codingPos++;this.outputBits=s[this.codingPos]-s[this.codingPos-1]}else if(r>0){o<<=r;r=0}}}while(r)}this.black&&(o^=255);return o},_addPixels:function _addPixels(e,t){var r=this.codingLine,i=this.codingPos;if(e>r[i]){if(e>this.columns){(0,n.info)("row is wrong length");this.err=!0;e=this.columns}1&i^t&&++i;r[i]=e}this.codingPos=i},_addPixelsNeg:function _addPixelsNeg(e,t){var r=this.codingLine,i=this.codingPos;if(e>r[i]){if(e>this.columns){(0,n.info)("row is wrong length");this.err=!0;e=this.columns}1&i^t&&++i;r[i]=e}else if(e<r[i]){if(e<0){(0,n.info)("invalid code");this.err=!0;e=0}for(;i>0&&e<r[i-1];)--i;r[i]=e}this.codingPos=i},_findTableCode:function _findTableCode(e,t,r,n){for(var i=n||0,o=e;o<=t;++o){var a=this._lookBits(o);if(-1===a)return[!0,1,!1];o<t&&(a<<=t-o);if(!i||a>=i){var s=r[a-i];if(s[0]===o){this._eatBits(o);return[!0,s[1],!0]}}}return[!1,0,!1]},_getTwoDimCode:function _getTwoDimCode(){var t,r=0;if(this.eoblock){r=this._lookBits(7);if((t=e[r])&&t[0]>0){this._eatBits(t[0]);return t[1]}}else{var i=this._findTableCode(1,7,e);if(i[0]&&i[2])return i[1]}(0,n.info)("Bad two dim code");return-1},_getWhiteCode:function _getWhiteCode(){var e,i=0;if(this.eoblock){if(-1===(i=this._lookBits(12)))return 1;if((e=i>>5==0?t[i]:r[i>>3])[0]>0){this._eatBits(e[0]);return e[1]}}else{var o=this._findTableCode(1,9,r);if(o[0])return o[1];if((o=this._findTableCode(11,12,t))[0])return o[1]}(0,n.info)("bad white code");this._eatBits(1);return 1},_getBlackCode:function _getBlackCode(){var e,t;if(this.eoblock){if(-1===(e=this._lookBits(13)))return 1;if((t=e>>7==0?i[e]:e>>9==0&&e>>7!=0?o[(e>>1)-64]:a[e>>7])[0]>0){this._eatBits(t[0]);return t[1]}}else{var r=this._findTableCode(2,6,a);if(r[0])return r[1];if((r=this._findTableCode(7,12,o,64))[0])return r[1];if((r=this._findTableCode(10,13,i))[0])return r[1]}(0,n.info)("bad black code");this._eatBits(1);return 1},_lookBits:function _lookBits(e){for(var t;this.inputBits<e;){if(-1===(t=this.source.next()))return 0===this.inputBits?-1:this.inputBuf<<e-this.inputBits&65535>>16-e;this.inputBuf=this.inputBuf<<8|t;this.inputBits+=8}return this.inputBuf>>this.inputBits-e&65535>>16-e},_eatBits:function _eatBits(e){(this.inputBits-=e)<0&&(this.inputBits=0)}};return CCITTFaxDecoder}();t.CCITTFaxDecoder=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.JpegImage=void 0;var n=r(1),i=r(179);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=function(e){_inherits(JpegError,e);var t=_createSuper(JpegError);function JpegError(e){_classCallCheck(this,JpegError);return t.call(this,"JPEG error: ".concat(e))}return JpegError}(n.BaseException),a=function(e){_inherits(DNLMarkerError,e);var t=_createSuper(DNLMarkerError);function DNLMarkerError(e,r){var n;_classCallCheck(this,DNLMarkerError);(n=t.call(this,e)).scanLines=r;return n}return DNLMarkerError}(n.BaseException),s=function(e){_inherits(EOIMarkerError,e);var t=_createSuper(EOIMarkerError);function EOIMarkerError(){_classCallCheck(this,EOIMarkerError);return t.apply(this,arguments)}return EOIMarkerError}(n.BaseException),c=function JpegImageClosure(){var e=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);function JpegImage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.decodeTransform,r=void 0===t?null:t,n=e.colorTransform,i=void 0===n?-1:n;this._decodeTransform=r;this._colorTransform=i}function buildHuffmanTable(e,t){for(var r,n,i=0,o=[],a=16;a>0&&!e[a-1];)a--;o.push({children:[],index:0});var s,c=o[0];for(r=0;r<a;r++){for(n=0;n<e[r];n++){(c=o.pop()).children[c.index]=t[i];for(;c.index>0;)c=o.pop();c.index++;o.push(c);for(;o.length<=r;){o.push(s={children:[],index:0});c.children[c.index]=s.children;c=s}i++}if(r+1<a){o.push(s={children:[],index:0});c.children[c.index]=s.children;c=s}}return o[0].children}function getBlockBufferOffset(e,t,r){return 64*((e.blocksPerLine+1)*t+r)}function decodeScan(t,r,c,u,f,l,p,d,h){var g=arguments.length>9&&void 0!==arguments[9]&&arguments[9],v=c.mcusPerLine,m=c.progressive,y=r,b=0,x=0;function readBit(){if(x>0){x--;return b>>x&1}if(255===(b=t[r++])){var e=t[r++];if(e){if(220===e&&g){r+=2;var n=(0,i.readUint16)(t,r);r+=2;if(n>0&&n!==c.scanLines)throw new a("Found DNL marker (0xFFDC) while parsing scan data",n)}else if(217===e){if(g){var u=T*(8===c.precision?8:0);if(u>0&&Math.round(c.scanLines/u)>=10)throw new a("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",u)}throw new s("Found EOI marker (0xFFD9) while parsing scan data")}throw new o("unexpected marker ".concat((b<<8|e).toString(16)))}}x=7;return b>>>7}function decodeHuffman(e){for(var t=e;;){switch(_typeof(t=t[readBit()])){case"number":return t;case"object":continue}throw new o("invalid huffman sequence")}}function receive(e){for(var t=0;e>0;){t=t<<1|readBit();e--}return t}function receiveAndExtend(e){if(1===e)return 1===readBit()?1:-1;var t=receive(e);return t>=1<<e-1?t:t+(-1<<e)+1}function decodeBaseline(t,r){var n=decodeHuffman(t.huffmanTableDC),i=0===n?0:receiveAndExtend(n);t.blockData[r]=t.pred+=i;for(var o=1;o<64;){var a=decodeHuffman(t.huffmanTableAC),s=15&a,c=a>>4;if(0!==s){var u=e[o+=c];t.blockData[r+u]=receiveAndExtend(s);o++}else{if(c<15)break;o+=16}}}function decodeDCFirst(e,t){var r=decodeHuffman(e.huffmanTableDC),n=0===r?0:receiveAndExtend(r)<<h;e.blockData[t]=e.pred+=n}function decodeDCSuccessive(e,t){e.blockData[t]|=readBit()<<h}var w=0;function decodeACFirst(t,r){if(w>0)w--;else for(var n=l,i=p;n<=i;){var o=decodeHuffman(t.huffmanTableAC),a=15&o,s=o>>4;if(0!==a){var c=e[n+=s];t.blockData[r+c]=receiveAndExtend(a)*(1<<h);n++}else{if(s<15){w=receive(s)+(1<<s)-1;break}n+=16}}}var S,_=0;function decodeACSuccessive(t,r){for(var n,i,a=l,s=p,c=0;a<=s;){var u=r+e[a],f=t.blockData[u]<0?-1:1;switch(_){case 0:c=(i=decodeHuffman(t.huffmanTableAC))>>4;if(0===(n=15&i))if(c<15){w=receive(c)+(1<<c);_=4}else{c=16;_=1}else{if(1!==n)throw new o("invalid ACn encoding");S=receiveAndExtend(n);_=c?2:3}continue;case 1:case 2:t.blockData[u]?t.blockData[u]+=f*(readBit()<<h):0===--c&&(_=2===_?3:0);break;case 3:if(t.blockData[u])t.blockData[u]+=f*(readBit()<<h);else{t.blockData[u]=S<<h;_=0}break;case 4:t.blockData[u]&&(t.blockData[u]+=f*(readBit()<<h))}a++}4===_&&0===--w&&(_=0)}var T=0;function decodeMcu(e,t,r,n,i){var o=r%v;T=(r/v|0)*e.v+n;var a=o*e.h+i;t(e,getBlockBufferOffset(e,T,a))}function decodeBlock(e,t,r){T=r/e.blocksPerLine|0;var n=r%e.blocksPerLine;t(e,getBlockBufferOffset(e,T,n))}var P,C,k,I,O,E,A=u.length;E=m?0===l?0===d?decodeDCFirst:decodeDCSuccessive:0===d?decodeACFirst:decodeACSuccessive:decodeBaseline;var R,M,D,L,B=0;M=1===A?u[0].blocksPerLine*u[0].blocksPerColumn:v*c.mcusPerColumn;for(;B<=M;){var U=f?Math.min(M-B,f):M;if(U>0){for(C=0;C<A;C++)u[C].pred=0;w=0;if(1===A){P=u[0];for(O=0;O<U;O++){decodeBlock(P,E,B);B++}}else for(O=0;O<U;O++){for(C=0;C<A;C++){D=(P=u[C]).h;L=P.v;for(k=0;k<L;k++)for(I=0;I<D;I++)decodeMcu(P,E,B,k,I)}B++}}x=0;if(!(R=findNextFileMarker(t,r)))break;if(R.invalid){var N=U>0?"unexpected":"excessive";(0,n.warn)("decodeScan - ".concat(N," MCU data, current marker is: ").concat(R.invalid));r=R.offset}if(!(R.marker>=65488&&R.marker<=65495))break;r+=2}return r-y}function quantizeAndInverse(e,t,r){var n,i,a,s,c,u,f,l,p,d,h,g,v,m,y,b,x,w=e.quantizationTable,S=e.blockData;if(!w)throw new o("missing required Quantization Table.");for(var _=0;_<64;_+=8){p=S[t+_];d=S[t+_+1];h=S[t+_+2];g=S[t+_+3];v=S[t+_+4];m=S[t+_+5];y=S[t+_+6];b=S[t+_+7];p*=w[_];if(0!=(d|h|g|v|m|y|b)){d*=w[_+1];h*=w[_+2];g*=w[_+3];v*=w[_+4];m*=w[_+5];i=(n=(n=5793*p+128>>8)+(i=5793*v+128>>8)+1>>1)-i;x=3784*(a=h)+1567*(s=y*=w[_+6])+128>>8;a=1567*a-3784*s+128>>8;f=(c=(c=2896*(d-(b*=w[_+7]))+128>>8)+(f=m<<4)+1>>1)-f;u=(l=(l=2896*(d+b)+128>>8)+(u=g<<4)+1>>1)-u;s=(n=n+(s=x)+1>>1)-s;a=(i=i+a+1>>1)-a;x=2276*c+3406*l+2048>>12;c=3406*c-2276*l+2048>>12;l=x;x=799*u+4017*f+2048>>12;u=4017*u-799*f+2048>>12;f=x;r[_]=n+l;r[_+7]=n-l;r[_+1]=i+f;r[_+6]=i-f;r[_+2]=a+u;r[_+5]=a-u;r[_+3]=s+c;r[_+4]=s-c}else{x=5793*p+512>>10;r[_]=x;r[_+1]=x;r[_+2]=x;r[_+3]=x;r[_+4]=x;r[_+5]=x;r[_+6]=x;r[_+7]=x}}for(var T=0;T<8;++T){p=r[T];if(0!=((d=r[T+8])|(h=r[T+16])|(g=r[T+24])|(v=r[T+32])|(m=r[T+40])|(y=r[T+48])|(b=r[T+56]))){i=(n=4112+((n=5793*p+2048>>12)+(i=5793*v+2048>>12)+1>>1))-i;x=3784*(a=h)+1567*(s=y)+2048>>12;a=1567*a-3784*s+2048>>12;s=x;f=(c=(c=2896*(d-b)+2048>>12)+(f=m)+1>>1)-f;u=(l=(l=2896*(d+b)+2048>>12)+(u=g)+1>>1)-u;x=2276*c+3406*l+2048>>12;c=3406*c-2276*l+2048>>12;l=x;x=799*u+4017*f+2048>>12;u=4017*u-799*f+2048>>12;(p=(n=n+s+1>>1)+l)<16?p=0:p>=4080?p=255:p>>=4;(d=(i=i+a+1>>1)+(f=x))<16?d=0:d>=4080?d=255:d>>=4;(h=(a=i-a)+u)<16?h=0:h>=4080?h=255:h>>=4;(g=(s=n-s)+c)<16?g=0:g>=4080?g=255:g>>=4;(v=s-c)<16?v=0:v>=4080?v=255:v>>=4;(m=a-u)<16?m=0:m>=4080?m=255:m>>=4;(y=i-f)<16?y=0:y>=4080?y=255:y>>=4;(b=n-l)<16?b=0:b>=4080?b=255:b>>=4;S[t+T]=p;S[t+T+8]=d;S[t+T+16]=h;S[t+T+24]=g;S[t+T+32]=v;S[t+T+40]=m;S[t+T+48]=y;S[t+T+56]=b}else{x=(x=5793*p+8192>>14)<-2040?0:x>=2024?255:x+2056>>4;S[t+T]=x;S[t+T+8]=x;S[t+T+16]=x;S[t+T+24]=x;S[t+T+32]=x;S[t+T+40]=x;S[t+T+48]=x;S[t+T+56]=x}}}function buildComponentData(e,t){for(var r=t.blocksPerLine,n=t.blocksPerColumn,i=new Int16Array(64),o=0;o<n;o++)for(var a=0;a<r;a++){quantizeAndInverse(t,getBlockBufferOffset(t,o,a),i)}return t.blockData}function findNextFileMarker(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=e.length-1,o=r<t?r:t;if(t>=n)return null;var a=(0,i.readUint16)(e,t);if(a>=65472&&a<=65534)return{invalid:null,marker:a,offset:t};for(var s=(0,i.readUint16)(e,o);!(s>=65472&&s<=65534);){if(++o>=n)return null;s=(0,i.readUint16)(e,o)}return{invalid:a.toString(16),marker:s,offset:o}}JpegImage.prototype={parse:function parse(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=r.dnlScanLines,u=void 0===c?null:c;function readDataBlock(){var e=(0,i.readUint16)(t,p),r=(p+=2)+e-2,o=findNextFileMarker(t,r,p);if(o&&o.invalid){(0,n.warn)("readDataBlock - incorrect length, current marker is: "+o.invalid);r=o.offset}var a=t.subarray(p,r);p+=a.length;return a}function prepareComponents(e){for(var t=Math.ceil(e.samplesPerLine/8/e.maxH),r=Math.ceil(e.scanLines/8/e.maxV),n=0;n<e.components.length;n++){W=e.components[n];var i=Math.ceil(Math.ceil(e.samplesPerLine/8)*W.h/e.maxH),o=Math.ceil(Math.ceil(e.scanLines/8)*W.v/e.maxV),a=t*W.h,s=64*(r*W.v)*(a+1);W.blockData=new Int16Array(s);W.blocksPerLine=i;W.blocksPerColumn=o}e.mcusPerLine=t;e.mcusPerColumn=r}var f,l,p=0,d=null,h=null,g=0,v=[],m=[],y=[],b=(0,i.readUint16)(t,p);p+=2;if(65496!==b)throw new o("SOI not found");b=(0,i.readUint16)(t,p);p+=2;e:for(;65497!==b;){var x,w,S;switch(b){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var _=readDataBlock();65504===b&&74===_[0]&&70===_[1]&&73===_[2]&&70===_[3]&&0===_[4]&&(d={version:{major:_[5],minor:_[6]},densityUnits:_[7],xDensity:_[8]<<8|_[9],yDensity:_[10]<<8|_[11],thumbWidth:_[12],thumbHeight:_[13],thumbData:_.subarray(14,14+3*_[12]*_[13])});65518===b&&65===_[0]&&100===_[1]&&111===_[2]&&98===_[3]&&101===_[4]&&(h={version:_[5]<<8|_[6],flags0:_[7]<<8|_[8],flags1:_[9]<<8|_[10],transformCode:_[11]});break;case 65499:for(var T=(0,i.readUint16)(t,p),P=T+(p+=2)-2;p<P;){var C=t[p++],k=new Uint16Array(64);if(C>>4==0)for(w=0;w<64;w++)k[e[w]]=t[p++];else{if(C>>4!=1)throw new o("DQT - invalid table spec");for(w=0;w<64;w++){k[e[w]]=(0,i.readUint16)(t,p);p+=2}}v[15&C]=k}break;case 65472:case 65473:case 65474:if(f)throw new o("Only single frame JPEGs supported");p+=2;(f={}).extended=65473===b;f.progressive=65474===b;f.precision=t[p++];var I=(0,i.readUint16)(t,p);p+=2;f.scanLines=u||I;f.samplesPerLine=(0,i.readUint16)(t,p);p+=2;f.components=[];f.componentIds={};var O,E=t[p++],A=0,R=0;for(x=0;x<E;x++){O=t[p];var M=t[p+1]>>4,D=15&t[p+1];A<M&&(A=M);R<D&&(R=D);var L=t[p+2];S=f.components.push({h:M,v:D,quantizationId:L,quantizationTable:null});f.componentIds[O]=S-1;p+=3}f.maxH=A;f.maxV=R;prepareComponents(f);break;case 65476:var B=(0,i.readUint16)(t,p);p+=2;for(x=2;x<B;){var U=t[p++],N=new Uint8Array(16),j=0;for(w=0;w<16;w++,p++)j+=N[w]=t[p];var z=new Uint8Array(j);for(w=0;w<j;w++,p++)z[w]=t[p];x+=17+j;(U>>4==0?y:m)[15&U]=buildHuffmanTable(N,z)}break;case 65501:p+=2;l=(0,i.readUint16)(t,p);p+=2;break;case 65498:var H=1==++g&&!u;p+=2;var W,X=t[p++],q=[];for(x=0;x<X;x++){var Y=t[p++],V=f.componentIds[Y];(W=f.components[V]).index=Y;var J=t[p++];W.huffmanTableDC=y[J>>4];W.huffmanTableAC=m[15&J];q.push(W)}var G=t[p++],K=t[p++],Q=t[p++];try{var Z=decodeScan(t,p,f,q,l,G,K,Q>>4,15&Q,H);p+=Z}catch(e){if(e instanceof a){(0,n.warn)("".concat(e.message," -- attempting to re-parse the JPEG image."));return this.parse(t,{dnlScanLines:e.scanLines})}if(e instanceof s){(0,n.warn)("".concat(e.message," -- ignoring the rest of the image data."));break e}throw e}break;case 65500:p+=4;break;case 65535:255!==t[p]&&p--;break;default:var $=findNextFileMarker(t,p-2,p-3);if($&&$.invalid){(0,n.warn)("JpegImage.parse - unexpected data, current marker is: "+$.invalid);p=$.offset;break}if(p>=t.length-1){(0,n.warn)("JpegImage.parse - reached the end of the image data without finding an EOI marker (0xFFD9).");break e}throw new o("JpegImage.parse - unknown marker: "+b.toString(16))}b=(0,i.readUint16)(t,p);p+=2}this.width=f.samplesPerLine;this.height=f.scanLines;this.jfif=d;this.adobe=h;this.components=[];for(x=0;x<f.components.length;x++){var ee=v[(W=f.components[x]).quantizationId];ee&&(W.quantizationTable=ee);this.components.push({index:W.index,output:buildComponentData(0,W),scaleX:W.h/f.maxH,scaleY:W.v/f.maxV,blocksPerLine:W.blocksPerLine,blocksPerColumn:W.blocksPerColumn})}this.numComponents=this.components.length},_getLinearizedBlockData:function _getLinearizedBlockData(e,t){var r,n,i,o,a,s,c,u,f,l,p,d,h=arguments.length>2&&void 0!==arguments[2]&&arguments[2],g=this.width/e,v=this.height/t,m=0,y=this.components.length,b=e*t*y,x=new Uint8ClampedArray(b),w=new Uint32Array(e),S=4294967288;for(c=0;c<y;c++){n=(r=this.components[c]).scaleX*g;i=r.scaleY*v;m=c;p=r.output;o=r.blocksPerLine+1<<3;if(n!==d){for(a=0;a<e;a++){u=0|a*n;w[a]=(u&S)<<3|7&u}d=n}for(s=0;s<t;s++){l=o*((u=0|s*i)&S)|(7&u)<<3;for(a=0;a<e;a++){x[m]=p[l+w[a]];m+=y}}}var _=this._decodeTransform;h||4!==y||_||(_=new Int32Array([-256,255,-256,255,-256,255,-256,255]));if(_)for(c=0;c<b;)for(u=0,f=0;u<y;u++,c++,f+=2)x[c]=(x[c]*_[f]>>8)+_[f+1];return x},get _isColorConversionNeeded(){return this.adobe?!!this.adobe.transformCode:3===this.numComponents?0!==this._colorTransform&&(82!==this.components[0].index||71!==this.components[1].index||66!==this.components[2].index):1===this._colorTransform},_convertYccToRgb:function convertYccToRgb(e){for(var t,r,n,i=0,o=e.length;i<o;i+=3){t=e[i];r=e[i+1];n=e[i+2];e[i]=t-179.456+1.402*n;e[i+1]=t+135.459-.344*r-.714*n;e[i+2]=t-226.816+1.772*r}return e},_convertYcckToRgb:function convertYcckToRgb(e){for(var t,r,n,i,o=0,a=0,s=e.length;a<s;a+=4){t=e[a];r=e[a+1];n=e[a+2];i=e[a+3];e[o++]=r*(-660635669420364e-19*r+.000437130475926232*n-54080610064599e-18*t+.00048449797120281*i-.154362151871126)-122.67195406894+n*(-.000957964378445773*n+.000817076911346625*t-.00477271405408747*i+1.53380253221734)+t*(.000961250184130688*t-.00266257332283933*i+.48357088451265)+i*(-.000336197177618394*i+.484791561490776);e[o++]=107.268039397724+r*(219927104525741e-19*r-.000640992018297945*n+.000659397001245577*t+.000426105652938837*i-.176491792462875)+n*(-.000778269941513683*n+.00130872261408275*t+.000770482631801132*i-.151051492775562)+t*(.00126935368114843*t-.00265090189010898*i+.25802910206845)+i*(-.000318913117588328*i-.213742400323665);e[o++]=r*(-.000570115196973677*r-263409051004589e-19*n+.0020741088115012*t-.00288260236853442*i+.814272968359295)-20.810012546947+n*(-153496057440975e-19*n-.000132689043961446*t+.000560833691242812*i-.195152027534049)+t*(.00174418132927582*t-.00255243321439347*i+.116935020465145)+i*(-.000343531996510555*i+.24165260232407)}return e.subarray(0,o)},_convertYcckToCmyk:function convertYcckToCmyk(e){for(var t,r,n,i=0,o=e.length;i<o;i+=4){t=e[i];r=e[i+1];n=e[i+2];e[i]=434.456-t-1.402*n;e[i+1]=119.541-t+.344*r+.714*n;e[i+2]=481.816-t-1.772*r}return e},_convertCmykToRgb:function convertCmykToRgb(e){for(var t,r,n,i,o=0,a=0,s=e.length;a<s;a+=4){t=e[a];r=e[a+1];n=e[a+2];i=e[a+3];e[o++]=255+t*(-6747147073602441e-20*t+.0008379262121013727*r+.0002894718188643294*n+.003264231057537806*i-1.1185611867203937)+r*(26374107616089405e-21*r-8626949158638572e-20*n-.0002748769067499491*i-.02155688794978967)+n*(-3878099212869363e-20*n-.0003267808279485286*i+.0686742238595345)-i*(.0003361971776183937*i+.7430659151342254);e[o++]=255+t*(.00013596372813588848*t+.000924537132573585*r+.00010567359618683593*n+.0004791864687436512*i-.3109689587515875)+r*(-.00023545346108370344*r+.0002702845253534714*n+.0020200308977307156*i-.7488052167015494)+n*(6834815998235662e-20*n+.00015168452363460973*i-.09751927774728933)-i*(.0003189131175883281*i+.7364883807733168);e[o++]=255+t*(13598650411385307e-21*t+.00012423956175490851*r+.0004751985097583589*n-36729317476630422e-22*i-.05562186980264034)+r*(.00016141380598724676*r+.0009692239130725186*n+.0007782692450036253*i-.44015232367526463)+n*(5.068882914068769e-7*n+.0017778369011375071*i-.7591454649749609)-i*(.0003435319965105553*i+.7063770186160144)}return e.subarray(0,o)},getData:function getData(e){var t=e.width,r=e.height,n=e.forceRGB,i=void 0!==n&&n,a=e.isSourcePDF,s=void 0!==a&&a;if(this.numComponents>4)throw new o("Unsupported color mode");var c=this._getLinearizedBlockData(t,r,s);if(1===this.numComponents&&i){for(var u=c.length,f=new Uint8ClampedArray(3*u),l=0,p=0;p<u;p++){var d=c[p];f[l++]=d;f[l++]=d;f[l++]=d}return f}if(3===this.numComponents&&this._isColorConversionNeeded)return this._convertYccToRgb(c);if(4===this.numComponents){if(this._isColorConversionNeeded)return i?this._convertYcckToRgb(c):this._convertYcckToCmyk(c);if(i)return this._convertCmykToRgb(c)}return c}};return JpegImage}();t.JpegImage=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.JpxImage=void 0;var n=r(1),i=r(179),o=r(180);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var a=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}});t&&_setPrototypeOf(e,t)}(JpxError,e);var t=_createSuper(JpxError);function JpxError(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,JpxError);return t.call(this,"JPX error: ".concat(e))}return JpxError}(n.BaseException),s=function JpxImageClosure(){var e={LL:0,LH:1,HL:1,HH:2};function JpxImage(){this.failOnCorruptedImage=!1}JpxImage.prototype={parse:function JpxImage_parse(e){if(65359!==(0,i.readUint16)(e,0))for(var t=0,r=e.length;t<r;){var o=8,s=(0,i.readUint32)(e,t),c=(0,i.readUint32)(e,t+4);t+=o;if(1===s){s=4294967296*(0,i.readUint32)(e,t)+(0,i.readUint32)(e,t+4);t+=8;o+=8}0===s&&(s=r-t+o);if(s<o)throw new a("Invalid box field size");var u=s-o,f=!0;switch(c){case 1785737832:f=!1;break;case 1668246642:var l=e[t];if(1===l){var p=(0,i.readUint32)(e,t+3);switch(p){case 16:case 17:case 18:break;default:(0,n.warn)("Unknown colorspace "+p)}}else 2===l&&(0,n.info)("ICC profile not supported");break;case 1785737827:this.parseCodestream(e,t,t+u);break;case 1783636e3:218793738!==(0,i.readUint32)(e,t)&&(0,n.warn)("Invalid JP2 signature");break;case 1783634458:case 1718909296:case 1920099697:case 1919251232:case 1768449138:break;default:var d=String.fromCharCode(c>>24&255,c>>16&255,c>>8&255,255&c);(0,n.warn)("Unsupported header type "+c+" ("+d+")")}f&&(t+=u)}else this.parseCodestream(e,0,e.length)},parseImageProperties:function JpxImage_parseImageProperties(e){for(var t=e.getByte();t>=0;){if(65361===(t<<8|(t=e.getByte()))){e.skip(4);var r=e.getInt32()>>>0,n=e.getInt32()>>>0,i=e.getInt32()>>>0,o=e.getInt32()>>>0;e.skip(16);var s=e.getUint16();this.width=r-i;this.height=n-o;this.componentsCount=s;this.bitsPerComponent=8;return}}throw new a("No size marker found in JPX stream")},parseCodestream:function JpxImage_parseCodestream(e,t,r){var o={},s=!1;try{for(var c=t;c+1<r;){var u=(0,i.readUint16)(e,c);c+=2;var f,l,p,d,h,g,v=0;switch(u){case 65359:o.mainHeader=!0;break;case 65497:break;case 65361:v=(0,i.readUint16)(e,c);var m={};m.Xsiz=(0,i.readUint32)(e,c+4);m.Ysiz=(0,i.readUint32)(e,c+8);m.XOsiz=(0,i.readUint32)(e,c+12);m.YOsiz=(0,i.readUint32)(e,c+16);m.XTsiz=(0,i.readUint32)(e,c+20);m.YTsiz=(0,i.readUint32)(e,c+24);m.XTOsiz=(0,i.readUint32)(e,c+28);m.YTOsiz=(0,i.readUint32)(e,c+32);var y=(0,i.readUint16)(e,c+36);m.Csiz=y;var b=[];f=c+38;for(var x=0;x<y;x++){var w={precision:1+(127&e[f]),isSigned:!!(128&e[f]),XRsiz:e[f+1],YRsiz:e[f+2]};f+=3;calculateComponentDimensions(w,m);b.push(w)}o.SIZ=m;o.components=b;calculateTileGrids(o,b);o.QCC=[];o.COC=[];break;case 65372:v=(0,i.readUint16)(e,c);var S={};f=c+2;switch(31&(l=e[f++])){case 0:d=8;h=!0;break;case 1:d=16;h=!1;break;case 2:d=16;h=!0;break;default:throw new Error("Invalid SQcd value "+l)}S.noQuantization=8===d;S.scalarExpounded=h;S.guardBits=l>>5;p=[];for(;f<v+c;){var _={};if(8===d){_.epsilon=e[f++]>>3;_.mu=0}else{_.epsilon=e[f]>>3;_.mu=(7&e[f])<<8|e[f+1];f+=2}p.push(_)}S.SPqcds=p;if(o.mainHeader)o.QCD=S;else{o.currentTile.QCD=S;o.currentTile.QCC=[]}break;case 65373:v=(0,i.readUint16)(e,c);var T,P={};f=c+2;if(o.SIZ.Csiz<257)T=e[f++];else{T=(0,i.readUint16)(e,f);f+=2}switch(31&(l=e[f++])){case 0:d=8;h=!0;break;case 1:d=16;h=!1;break;case 2:d=16;h=!0;break;default:throw new Error("Invalid SQcd value "+l)}P.noQuantization=8===d;P.scalarExpounded=h;P.guardBits=l>>5;p=[];for(;f<v+c;){_={};if(8===d){_.epsilon=e[f++]>>3;_.mu=0}else{_.epsilon=e[f]>>3;_.mu=(7&e[f])<<8|e[f+1];f+=2}p.push(_)}P.SPqcds=p;o.mainHeader?o.QCC[T]=P:o.currentTile.QCC[T]=P;break;case 65362:v=(0,i.readUint16)(e,c);var C={};f=c+2;var k=e[f++];C.entropyCoderWithCustomPrecincts=!!(1&k);C.sopMarkerUsed=!!(2&k);C.ephMarkerUsed=!!(4&k);C.progressionOrder=e[f++];C.layersCount=(0,i.readUint16)(e,f);f+=2;C.multipleComponentTransform=e[f++];C.decompositionLevelsCount=e[f++];C.xcb=2+(15&e[f++]);C.ycb=2+(15&e[f++]);var I=e[f++];C.selectiveArithmeticCodingBypass=!!(1&I);C.resetContextProbabilities=!!(2&I);C.terminationOnEachCodingPass=!!(4&I);C.verticallyStripe=!!(8&I);C.predictableTermination=!!(16&I);C.segmentationSymbolUsed=!!(32&I);C.reversibleTransformation=e[f++];if(C.entropyCoderWithCustomPrecincts){for(var O=[];f<v+c;){var E=e[f++];O.push({PPx:15&E,PPy:E>>4})}C.precinctsSizes=O}var A=[];C.selectiveArithmeticCodingBypass&&A.push("selectiveArithmeticCodingBypass");C.resetContextProbabilities&&A.push("resetContextProbabilities");C.terminationOnEachCodingPass&&A.push("terminationOnEachCodingPass");C.verticallyStripe&&A.push("verticallyStripe");C.predictableTermination&&A.push("predictableTermination");if(A.length>0){s=!0;throw new Error("Unsupported COD options ("+A.join(", ")+")")}if(o.mainHeader)o.COD=C;else{o.currentTile.COD=C;o.currentTile.COC=[]}break;case 65424:v=(0,i.readUint16)(e,c);(g={}).index=(0,i.readUint16)(e,c+2);g.length=(0,i.readUint32)(e,c+4);g.dataEnd=g.length+c-2;g.partIndex=e[c+8];g.partsCount=e[c+9];o.mainHeader=!1;if(0===g.partIndex){g.COD=o.COD;g.COC=o.COC.slice(0);g.QCD=o.QCD;g.QCC=o.QCC.slice(0)}o.currentTile=g;break;case 65427:if(0===(g=o.currentTile).partIndex){initializeTile(o,g.index);buildPackets(o)}parseTilePackets(o,e,c,v=g.dataEnd-c);break;case 65365:case 65367:case 65368:case 65380:v=(0,i.readUint16)(e,c);break;case 65363:throw new Error("Codestream code 0xFF53 (COC) is not implemented");default:throw new Error("Unknown codestream code: "+u.toString(16))}c+=v}}catch(e){if(s||this.failOnCorruptedImage)throw new a(e.message);(0,n.warn)("JPX: Trying to recover from: "+e.message)}this.tiles=function transformComponents(e){for(var t=e.SIZ,r=e.components,n=t.Csiz,i=[],o=0,a=e.tiles.length;o<a;o++){var s,c=e.tiles[o],u=[];for(s=0;s<n;s++)u[s]=transformTile(e,c,s);var f,l,p,d,h,g,v,m=u[0],y=new Uint8ClampedArray(m.items.length*n),b={left:m.left,top:m.top,width:m.width,height:m.height,items:y},x=0;if(c.codingStyleDefaultParameters.multipleComponentTransform){var w=4===n,S=u[0].items,_=u[1].items,T=u[2].items,P=w?u[3].items:null;f=r[0].precision-8;l=.5+(128<<f);var C=c.components[0],k=n-3;d=S.length;if(C.codingStyleParameters.reversibleTransformation)for(p=0;p<d;p++,x+=k){h=S[p]+l;g=_[p];v=T[p];var I=h-(v+g>>2);y[x++]=I+v>>f;y[x++]=I>>f;y[x++]=I+g>>f}else for(p=0;p<d;p++,x+=k){h=S[p]+l;g=_[p];v=T[p];y[x++]=h+1.402*v>>f;y[x++]=h-.34413*g-.71414*v>>f;y[x++]=h+1.772*g>>f}if(w)for(p=0,x=3;p<d;p++,x+=4)y[x]=P[p]+l>>f}else for(s=0;s<n;s++){var O=u[s].items;f=r[s].precision-8;l=.5+(128<<f);for(x=s,p=0,d=O.length;p<d;p++){y[x]=O[p]+l>>f;x+=n}}i.push(b)}return i}(o);this.width=o.SIZ.Xsiz-o.SIZ.XOsiz;this.height=o.SIZ.Ysiz-o.SIZ.YOsiz;this.componentsCount=o.SIZ.Csiz}};function calculateComponentDimensions(e,t){e.x0=Math.ceil(t.XOsiz/e.XRsiz);e.x1=Math.ceil(t.Xsiz/e.XRsiz);e.y0=Math.ceil(t.YOsiz/e.YRsiz);e.y1=Math.ceil(t.Ysiz/e.YRsiz);e.width=e.x1-e.x0;e.height=e.y1-e.y0}function calculateTileGrids(e,t){for(var r,n=e.SIZ,i=[],o=Math.ceil((n.Xsiz-n.XTOsiz)/n.XTsiz),a=Math.ceil((n.Ysiz-n.YTOsiz)/n.YTsiz),s=0;s<a;s++)for(var c=0;c<o;c++){(r={}).tx0=Math.max(n.XTOsiz+c*n.XTsiz,n.XOsiz);r.ty0=Math.max(n.YTOsiz+s*n.YTsiz,n.YOsiz);r.tx1=Math.min(n.XTOsiz+(c+1)*n.XTsiz,n.Xsiz);r.ty1=Math.min(n.YTOsiz+(s+1)*n.YTsiz,n.Ysiz);r.width=r.tx1-r.tx0;r.height=r.ty1-r.ty0;r.components=[];i.push(r)}e.tiles=i;for(var u=0,f=n.Csiz;u<f;u++)for(var l=t[u],p=0,d=i.length;p<d;p++){var h={};r=i[p];h.tcx0=Math.ceil(r.tx0/l.XRsiz);h.tcy0=Math.ceil(r.ty0/l.YRsiz);h.tcx1=Math.ceil(r.tx1/l.XRsiz);h.tcy1=Math.ceil(r.ty1/l.YRsiz);h.width=h.tcx1-h.tcx0;h.height=h.tcy1-h.tcy0;r.components[u]=h}}function getBlocksDimensions(e,t,r){var n=t.codingStyleParameters,i={};if(n.entropyCoderWithCustomPrecincts){i.PPx=n.precinctsSizes[r].PPx;i.PPy=n.precinctsSizes[r].PPy}else{i.PPx=15;i.PPy=15}i.xcb_=r>0?Math.min(n.xcb,i.PPx-1):Math.min(n.xcb,i.PPx);i.ycb_=r>0?Math.min(n.ycb,i.PPy-1):Math.min(n.ycb,i.PPy);return i}function buildPrecincts(e,t,r){var n=1<<r.PPx,i=1<<r.PPy,o=0===t.resLevel,a=1<<r.PPx+(o?0:-1),s=1<<r.PPy+(o?0:-1),c=t.trx1>t.trx0?Math.ceil(t.trx1/n)-Math.floor(t.trx0/n):0,u=t.try1>t.try0?Math.ceil(t.try1/i)-Math.floor(t.try0/i):0,f=c*u;t.precinctParameters={precinctWidth:n,precinctHeight:i,numprecinctswide:c,numprecinctshigh:u,numprecincts:f,precinctWidthInSubband:a,precinctHeightInSubband:s}}function buildCodeblocks(e,t,r){var n,i,o,a,s=r.xcb_,c=r.ycb_,u=1<<s,f=1<<c,l=t.tbx0>>s,p=t.tby0>>c,d=t.tbx1+u-1>>s,h=t.tby1+f-1>>c,g=t.resolution.precinctParameters,v=[],m=[];for(i=p;i<h;i++)for(n=l;n<d;n++){(o={cbx:n,cby:i,tbx0:u*n,tby0:f*i,tbx1:u*(n+1),tby1:f*(i+1)}).tbx0_=Math.max(t.tbx0,o.tbx0);o.tby0_=Math.max(t.tby0,o.tby0);o.tbx1_=Math.min(t.tbx1,o.tbx1);o.tby1_=Math.min(t.tby1,o.tby1);a=Math.floor((o.tbx0_-t.tbx0)/g.precinctWidthInSubband)+Math.floor((o.tby0_-t.tby0)/g.precinctHeightInSubband)*g.numprecinctswide;o.precinctNumber=a;o.subbandType=t.type;o.Lblock=3;if(!(o.tbx1_<=o.tbx0_||o.tby1_<=o.tby0_)){v.push(o);var y=m[a];if(void 0!==y){n<y.cbxMin?y.cbxMin=n:n>y.cbxMax&&(y.cbxMax=n);i<y.cbyMin?y.cbxMin=i:i>y.cbyMax&&(y.cbyMax=i)}else m[a]=y={cbxMin:n,cbyMin:i,cbxMax:n,cbyMax:i};o.precinct=y}}t.codeblockParameters={codeblockWidth:s,codeblockHeight:c,numcodeblockwide:d-l+1,numcodeblockhigh:h-p+1};t.codeblocks=v;t.precincts=m}function createPacket(e,t,r){for(var n=[],i=e.subbands,o=0,a=i.length;o<a;o++)for(var s=i[o].codeblocks,c=0,u=s.length;c<u;c++){var f=s[c];f.precinctNumber===t&&n.push(f)}return{layerNumber:r,codeblocks:n}}function LayerResolutionComponentPositionIterator(e){for(var t=e.SIZ,r=e.currentTile.index,n=e.tiles[r],i=n.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=0,c=0;c<o;c++)s=Math.max(s,n.components[c].codingStyleParameters.decompositionLevelsCount);var u=0,f=0,l=0,p=0;this.nextPacket=function JpxImage_nextPacket(){for(;u<i;u++){for(;f<=s;f++){for(;l<o;l++){var e=n.components[l];if(!(f>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[f],r=t.precinctParameters.numprecincts;p<r;){var c=createPacket(t,p,u);p++;return c}p=0}}l=0}f=0}throw new a("Out of packets")}}function ResolutionLayerComponentPositionIterator(e){for(var t=e.SIZ,r=e.currentTile.index,n=e.tiles[r],i=n.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=0,c=0;c<o;c++)s=Math.max(s,n.components[c].codingStyleParameters.decompositionLevelsCount);var u=0,f=0,l=0,p=0;this.nextPacket=function JpxImage_nextPacket(){for(;u<=s;u++){for(;f<i;f++){for(;l<o;l++){var e=n.components[l];if(!(u>e.codingStyleParameters.decompositionLevelsCount)){for(var t=e.resolutions[u],r=t.precinctParameters.numprecincts;p<r;){var c=createPacket(t,p,f);p++;return c}p=0}}l=0}f=0}throw new a("Out of packets")}}function ResolutionPositionComponentLayerIterator(e){var t,r,n,i,o=e.SIZ,s=e.currentTile.index,c=e.tiles[s],u=c.codingStyleDefaultParameters.layersCount,f=o.Csiz,l=0;for(n=0;n<f;n++){var p=c.components[n];l=Math.max(l,p.codingStyleParameters.decompositionLevelsCount)}var d=new Int32Array(l+1);for(r=0;r<=l;++r){var h=0;for(n=0;n<f;++n){var g=c.components[n].resolutions;r<g.length&&(h=Math.max(h,g[r].precinctParameters.numprecincts))}d[r]=h}t=0;r=0;n=0;i=0;this.nextPacket=function JpxImage_nextPacket(){for(;r<=l;r++){for(;i<d[r];i++){for(;n<f;n++){var e=c.components[n];if(!(r>e.codingStyleParameters.decompositionLevelsCount)){var o=e.resolutions[r],s=o.precinctParameters.numprecincts;if(!(i>=s)){for(;t<u;){var p=createPacket(o,i,t);t++;return p}t=0}}}n=0}i=0}throw new a("Out of packets")}}function PositionComponentResolutionLayerIterator(e){var t=e.SIZ,r=e.currentTile.index,n=e.tiles[r],i=n.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=getPrecinctSizesInImageScale(n),c=s,u=0,f=0,l=0,p=0,d=0;this.nextPacket=function JpxImage_nextPacket(){for(;d<c.maxNumHigh;d++){for(;p<c.maxNumWide;p++){for(;l<o;l++){for(var e=n.components[l],t=e.codingStyleParameters.decompositionLevelsCount;f<=t;f++){var r=e.resolutions[f],h=s.components[l].resolutions[f],g=getPrecinctIndexIfExist(p,d,h,c,r);if(null!==g){for(;u<i;){var v=createPacket(r,g,u);u++;return v}u=0}}f=0}l=0}p=0}throw new a("Out of packets")}}function ComponentPositionResolutionLayerIterator(e){var t=e.SIZ,r=e.currentTile.index,n=e.tiles[r],i=n.codingStyleDefaultParameters.layersCount,o=t.Csiz,s=getPrecinctSizesInImageScale(n),c=0,u=0,f=0,l=0,p=0;this.nextPacket=function JpxImage_nextPacket(){for(;f<o;++f){for(var e=n.components[f],t=s.components[f],r=e.codingStyleParameters.decompositionLevelsCount;p<t.maxNumHigh;p++){for(;l<t.maxNumWide;l++){for(;u<=r;u++){var d=e.resolutions[u],h=t.resolutions[u],g=getPrecinctIndexIfExist(l,p,h,t,d);if(null!==g){for(;c<i;){var v=createPacket(d,g,c);c++;return v}c=0}}u=0}l=0}p=0}throw new a("Out of packets")}}function getPrecinctIndexIfExist(e,t,r,n,i){var o=e*n.minWidth,a=t*n.minHeight;if(o%r.width!=0||a%r.height!=0)return null;var s=a/r.width*i.precinctParameters.numprecinctswide;return o/r.height+s}function getPrecinctSizesInImageScale(e){for(var t=e.components.length,r=Number.MAX_VALUE,n=Number.MAX_VALUE,i=0,o=0,a=new Array(t),s=0;s<t;s++){for(var c=e.components[s],u=c.codingStyleParameters.decompositionLevelsCount,f=new Array(u+1),l=Number.MAX_VALUE,p=Number.MAX_VALUE,d=0,h=0,g=1,v=u;v>=0;--v){var m=c.resolutions[v],y=g*m.precinctParameters.precinctWidth,b=g*m.precinctParameters.precinctHeight;l=Math.min(l,y);p=Math.min(p,b);d=Math.max(d,m.precinctParameters.numprecinctswide);h=Math.max(h,m.precinctParameters.numprecinctshigh);f[v]={width:y,height:b};g<<=1}r=Math.min(r,l);n=Math.min(n,p);i=Math.max(i,d);o=Math.max(o,h);a[s]={resolutions:f,minWidth:l,minHeight:p,maxNumWide:d,maxNumHigh:h}}return{components:a,minWidth:r,minHeight:n,maxNumWide:i,maxNumHigh:o}}function buildPackets(e){for(var t=e.SIZ,r=e.currentTile.index,n=e.tiles[r],i=t.Csiz,o=0;o<i;o++){for(var s=n.components[o],c=s.codingStyleParameters.decompositionLevelsCount,u=[],f=[],l=0;l<=c;l++){var p,d=getBlocksDimensions(0,s,l),h={},g=1<<c-l;h.trx0=Math.ceil(s.tcx0/g);h.try0=Math.ceil(s.tcy0/g);h.trx1=Math.ceil(s.tcx1/g);h.try1=Math.ceil(s.tcy1/g);h.resLevel=l;buildPrecincts(0,h,d);u.push(h);if(0===l){(p={}).type="LL";p.tbx0=Math.ceil(s.tcx0/g);p.tby0=Math.ceil(s.tcy0/g);p.tbx1=Math.ceil(s.tcx1/g);p.tby1=Math.ceil(s.tcy1/g);p.resolution=h;buildCodeblocks(0,p,d);f.push(p);h.subbands=[p]}else{var v=1<<c-l+1,m=[];(p={}).type="HL";p.tbx0=Math.ceil(s.tcx0/v-.5);p.tby0=Math.ceil(s.tcy0/v);p.tbx1=Math.ceil(s.tcx1/v-.5);p.tby1=Math.ceil(s.tcy1/v);p.resolution=h;buildCodeblocks(0,p,d);f.push(p);m.push(p);(p={}).type="LH";p.tbx0=Math.ceil(s.tcx0/v);p.tby0=Math.ceil(s.tcy0/v-.5);p.tbx1=Math.ceil(s.tcx1/v);p.tby1=Math.ceil(s.tcy1/v-.5);p.resolution=h;buildCodeblocks(0,p,d);f.push(p);m.push(p);(p={}).type="HH";p.tbx0=Math.ceil(s.tcx0/v-.5);p.tby0=Math.ceil(s.tcy0/v-.5);p.tbx1=Math.ceil(s.tcx1/v-.5);p.tby1=Math.ceil(s.tcy1/v-.5);p.resolution=h;buildCodeblocks(0,p,d);f.push(p);m.push(p);h.subbands=m}}s.resolutions=u;s.subbands=f}var y=n.codingStyleDefaultParameters.progressionOrder;switch(y){case 0:n.packetsIterator=new LayerResolutionComponentPositionIterator(e);break;case 1:n.packetsIterator=new ResolutionLayerComponentPositionIterator(e);break;case 2:n.packetsIterator=new ResolutionPositionComponentLayerIterator(e);break;case 3:n.packetsIterator=new PositionComponentResolutionLayerIterator(e);break;case 4:n.packetsIterator=new ComponentPositionResolutionLayerIterator(e);break;default:throw new a("Unsupported progression order ".concat(y))}}function parseTilePackets(e,n,o,a){var s,c=0,u=0,f=!1;function readBits(e){for(;u<e;){var t=n[o+c];c++;if(f){s=s<<7|t;u+=7;f=!1}else{s=s<<8|t;u+=8}255===t&&(f=!0)}return s>>>(u-=e)&(1<<e)-1}function skipMarkerIfEqual(e){if(255===n[o+c-1]&&n[o+c]===e){skipBytes(1);return!0}if(255===n[o+c]&&n[o+c+1]===e){skipBytes(2);return!0}return!1}function skipBytes(e){c+=e}function alignToByte(){u=0;if(f){c++;f=!1}}function readCodingpasses(){if(0===readBits(1))return 1;if(0===readBits(1))return 2;var e=readBits(2);return e<3?e+3:(e=readBits(5))<31?e+6:(e=readBits(7))+37}for(var l=e.currentTile.index,p=e.tiles[l],d=e.COD.sopMarkerUsed,h=e.COD.ephMarkerUsed,g=p.packetsIterator;c<a;){alignToByte();d&&skipMarkerIfEqual(145)&&skipBytes(4);var v=g.nextPacket();if(readBits(1)){for(var m,y=v.layerNumber,b=[],x=0,w=v.codeblocks.length;x<w;x++){var S=(m=v.codeblocks[x]).precinct,_=m.cbx-S.cbxMin,T=m.cby-S.cbyMin,P=!1,C=!1;if(void 0!==m.included)P=!!readBits(1);else{var k,I;if(void 0!==(S=m.precinct).inclusionTree)k=S.inclusionTree;else{var O=S.cbxMax-S.cbxMin+1,E=S.cbyMax-S.cbyMin+1;k=new r(O,E,y);I=new t(O,E);S.inclusionTree=k;S.zeroBitPlanesTree=I}if(k.reset(_,T,y))for(;;){if(!readBits(1)){k.incrementValue(y);break}if(!k.nextLevel()){m.included=!0;P=C=!0;break}}}if(P){if(C){(I=S.zeroBitPlanesTree).reset(_,T);for(;;)if(readBits(1)){if(!I.nextLevel())break}else I.incrementValue();m.zeroBitPlanes=I.value}for(var A=readCodingpasses();readBits(1);)m.Lblock++;var R=(0,i.log2)(A),M=readBits((A<1<<R?R-1:R)+m.Lblock);b.push({codeblock:m,codingpasses:A,dataLength:M})}}alignToByte();h&&skipMarkerIfEqual(146);for(;b.length>0;){var D=b.shift();void 0===(m=D.codeblock).data&&(m.data=[]);m.data.push({data:n,start:o+c,end:o+c+D.dataLength,codingpasses:D.codingpasses});c+=D.dataLength}}}return c}function copyCoefficients(e,t,r,n,i,a,c,u){for(var f=n.tbx0,l=n.tby0,p=n.tbx1-n.tbx0,d=n.codeblocks,h="H"===n.type.charAt(0)?1:0,g="H"===n.type.charAt(1)?t:0,v=0,m=d.length;v<m;++v){var y=d[v],b=y.tbx1_-y.tbx0_,x=y.tby1_-y.tby0_;if(0!==b&&0!==x&&void 0!==y.data){var w,S;w=new s(b,x,y.subbandType,y.zeroBitPlanes,a);S=2;var _,T,P,C=y.data,k=0,I=0;for(_=0,T=C.length;_<T;_++){k+=(P=C[_]).end-P.start;I+=P.codingpasses}var O=new Uint8Array(k),E=0;for(_=0,T=C.length;_<T;_++){var A=(P=C[_]).data.subarray(P.start,P.end);O.set(A,E);E+=A.length}var R=new o.ArithmeticDecoder(O,0,k);w.setDecoder(R);for(_=0;_<I;_++){switch(S){case 0:w.runSignificancePropagationPass();break;case 1:w.runMagnitudeRefinementPass();break;case 2:w.runCleanupPass();u&&w.checkSegmentationSymbol()}S=(S+1)%3}var M,D,L,B=y.tbx0_-f+(y.tby0_-l)*p,U=w.coefficentsSign,N=w.coefficentsMagnitude,j=w.bitsDecoded,z=c?0:.5;E=0;var H="LL"!==n.type;for(_=0;_<x;_++){var W=2*(B/p|0)*(t-p)+h+g;for(M=0;M<b;M++){if(0!==(D=N[E])){D=(D+z)*i;0!==U[E]&&(D=-D);L=j[E];var X=H?W+(B<<1):B;e[X]=c&&L>=a?D:D*(1<<a-L)}B++;E++}B+=p-b}}}}function transformTile(t,r,n){for(var i=r.components[n],o=i.codingStyleParameters,a=i.quantizationParameters,s=o.decompositionLevelsCount,c=a.SPqcds,l=a.scalarExpounded,p=a.guardBits,d=o.segmentationSymbolUsed,h=t.components[n].precision,g=o.reversibleTransformation,v=g?new f:new u,m=[],y=0,b=0;b<=s;b++){for(var x=i.resolutions[b],w=x.trx1-x.trx0,S=x.try1-x.try0,_=new Float32Array(w*S),T=0,P=x.subbands.length;T<P;T++){var C,k;if(l){C=c[y].mu;k=c[y].epsilon;y++}else{C=c[0].mu;k=c[0].epsilon+(b>0?1-b:0)}var I=x.subbands[T],O=e[I.type];copyCoefficients(_,w,0,I,g?1:Math.pow(2,h+O-k)*(1+C/2048),p+k-1,g,d)}m.push({width:w,height:S,items:_})}var E=v.calculate(m,i.tcx0,i.tcy0);return{left:i.tcx0,top:i.tcy0,width:E.width,height:E.height,items:E.items}}function initializeTile(e,t){for(var r=e.SIZ.Csiz,n=e.tiles[t],i=0;i<r;i++){var o=n.components[i],a=void 0!==e.currentTile.QCC[i]?e.currentTile.QCC[i]:e.currentTile.QCD;o.quantizationParameters=a;var s=void 0!==e.currentTile.COC[i]?e.currentTile.COC[i]:e.currentTile.COD;o.codingStyleParameters=s}n.codingStyleDefaultParameters=e.currentTile.COD}var t=function TagTreeClosure(){function TagTree(e,t){var r=(0,i.log2)(Math.max(e,t))+1;this.levels=[];for(var n=0;n<r;n++){var o={width:e,height:t,items:[]};this.levels.push(o);e=Math.ceil(e/2);t=Math.ceil(t/2)}}TagTree.prototype={reset:function TagTree_reset(e,t){for(var r,n=0,i=0;n<this.levels.length;){var o=e+t*(r=this.levels[n]).width;if(void 0!==r.items[o]){i=r.items[o];break}r.index=o;e>>=1;t>>=1;n++}n--;(r=this.levels[n]).items[r.index]=i;this.currentLevel=n;delete this.value},incrementValue:function TagTree_incrementValue(){var e=this.levels[this.currentLevel];e.items[e.index]++},nextLevel:function TagTree_nextLevel(){var e=this.currentLevel,t=this.levels[e],r=t.items[t.index];if(--e<0){this.value=r;return!1}this.currentLevel=e;(t=this.levels[e]).items[t.index]=r;return!0}};return TagTree}(),r=function InclusionTreeClosure(){function InclusionTree(e,t,r){var n=(0,i.log2)(Math.max(e,t))+1;this.levels=[];for(var o=0;o<n;o++){for(var a=new Uint8Array(e*t),s=0,c=a.length;s<c;s++)a[s]=r;var u={width:e,height:t,items:a};this.levels.push(u);e=Math.ceil(e/2);t=Math.ceil(t/2)}}InclusionTree.prototype={reset:function InclusionTree_reset(e,t,r){for(var n=0;n<this.levels.length;){var i=this.levels[n],o=e+t*i.width;i.index=o;var a=i.items[o];if(255===a)break;if(a>r){this.currentLevel=n;this.propagateValues();return!1}e>>=1;t>>=1;n++}this.currentLevel=n-1;return!0},incrementValue:function InclusionTree_incrementValue(e){var t=this.levels[this.currentLevel];t.items[t.index]=e+1;this.propagateValues()},propagateValues:function InclusionTree_propagateValues(){for(var e=this.currentLevel,t=this.levels[e],r=t.items[t.index];--e>=0;)(t=this.levels[e]).items[t.index]=r},nextLevel:function InclusionTree_nextLevel(){var e=this.currentLevel,t=this.levels[e],r=t.items[t.index];t.items[t.index]=255;if(--e<0)return!1;this.currentLevel=e;(t=this.levels[e]).items[t.index]=r;return!0}};return InclusionTree}(),s=function BitModelClosure(){var e=new Uint8Array([0,5,8,0,3,7,8,0,4,7,8,0,0,0,0,0,1,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8,0,0,0,0,0,2,6,8,0,3,7,8,0,4,7,8]),t=new Uint8Array([0,3,4,0,5,7,7,0,8,8,8,0,0,0,0,0,1,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8,0,0,0,0,0,2,3,4,0,6,7,7,0,8,8,8]),r=new Uint8Array([0,1,2,0,1,2,2,0,2,2,2,0,0,0,0,0,3,4,5,0,4,5,5,0,5,5,5,0,0,0,0,0,6,7,7,0,7,7,7,0,7,7,7,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8,0,0,0,0,0,8,8,8,0,8,8,8,0,8,8,8]);function BitModel(n,i,o,a,s){this.width=n;this.height=i;var c;c="HH"===o?r:"HL"===o?t:e;this.contextLabelTable=c;var u,f=n*i;this.neighborsSignificance=new Uint8Array(f);this.coefficentsSign=new Uint8Array(f);u=s>14?new Uint32Array(f):s>6?new Uint16Array(f):new Uint8Array(f);this.coefficentsMagnitude=u;this.processingFlags=new Uint8Array(f);var l=new Uint8Array(f);if(0!==a)for(var p=0;p<f;p++)l[p]=a;this.bitsDecoded=l;this.reset()}BitModel.prototype={setDecoder:function BitModel_setDecoder(e){this.decoder=e},reset:function BitModel_reset(){this.contexts=new Int8Array(19);this.contexts[0]=8;this.contexts[17]=92;this.contexts[18]=6},setNeighborsSignificance:function BitModel_setNeighborsSignificance(e,t,r){var n,i=this.neighborsSignificance,o=this.width,a=this.height,s=t>0,c=t+1<o;if(e>0){n=r-o;s&&(i[n-1]+=16);c&&(i[n+1]+=16);i[n]+=4}if(e+1<a){n=r+o;s&&(i[n-1]+=16);c&&(i[n+1]+=16);i[n]+=4}s&&(i[r-1]+=1);c&&(i[r+1]+=1);i[r]|=128},runSignificancePropagationPass:function BitModel_runSignificancePropagationPass(){for(var e=this.decoder,t=this.width,r=this.height,n=this.coefficentsMagnitude,i=this.coefficentsSign,o=this.neighborsSignificance,a=this.processingFlags,s=this.contexts,c=this.contextLabelTable,u=this.bitsDecoded,f=0;f<r;f+=4)for(var l=0;l<t;l++)for(var p=f*t+l,d=0;d<4;d++,p+=t){var h=f+d;if(h>=r)break;a[p]&=-2;if(!n[p]&&o[p]){var g=c[o[p]];if(e.readBit(s,g)){var v=this.decodeSignBit(h,l,p);i[p]=v;n[p]=1;this.setNeighborsSignificance(h,l,p);a[p]|=2}u[p]++;a[p]|=1}}},decodeSignBit:function BitModel_decodeSignBit(e,t,r){var n,i,o,a,s,c,u=this.width,f=this.height,l=this.coefficentsMagnitude,p=this.coefficentsSign;a=t>0&&0!==l[r-1];if(t+1<u&&0!==l[r+1]){o=p[r+1];n=a?1-o-(i=p[r-1]):1-o-o}else n=a?1-(i=p[r-1])-i:0;var d=3*n;a=e>0&&0!==l[r-u];if(e+1<f&&0!==l[r+u]){o=p[r+u];n=a?1-o-(i=p[r-u])+d:1-o-o+d}else n=a?1-(i=p[r-u])-i+d:d;if(n>=0){s=9+n;c=this.decoder.readBit(this.contexts,s)}else{s=9-n;c=1^this.decoder.readBit(this.contexts,s)}return c},runMagnitudeRefinementPass:function BitModel_runMagnitudeRefinementPass(){for(var e,t=this.decoder,r=this.width,n=this.height,i=this.coefficentsMagnitude,o=this.neighborsSignificance,a=this.contexts,s=this.bitsDecoded,c=this.processingFlags,u=r*n,f=4*r,l=0;l<u;l=e){e=Math.min(u,l+f);for(var p=0;p<r;p++)for(var d=l+p;d<e;d+=r)if(i[d]&&0==(1&c[d])){var h=16;if(0!=(2&c[d])){c[d]^=2;h=0===(127&o[d])?15:14}var g=t.readBit(a,h);i[d]=i[d]<<1|g;s[d]++;c[d]|=1}}},runCleanupPass:function BitModel_runCleanupPass(){for(var e,t=this.decoder,r=this.width,n=this.height,i=this.neighborsSignificance,o=this.coefficentsMagnitude,a=this.coefficentsSign,s=this.contexts,c=this.contextLabelTable,u=this.bitsDecoded,f=this.processingFlags,l=r,p=2*r,d=3*r,h=0;h<n;h=e){e=Math.min(h+4,n);for(var g=h*r,v=h+3<n,m=0;m<r;m++){var y,b=g+m,x=0,w=b,S=h;if(v&&0===f[b]&&0===f[b+l]&&0===f[b+p]&&0===f[b+d]&&0===i[b]&&0===i[b+l]&&0===i[b+p]&&0===i[b+d]){if(!t.readBit(s,18)){u[b]++;u[b+l]++;u[b+p]++;u[b+d]++;continue}if(0!==(x=t.readBit(s,17)<<1|t.readBit(s,17))){S=h+x;w+=x*r}y=this.decodeSignBit(S,m,w);a[w]=y;o[w]=1;this.setNeighborsSignificance(S,m,w);f[w]|=2;w=b;for(var _=h;_<=S;_++,w+=r)u[w]++;x++}for(S=h+x;S<e;S++,w+=r)if(!o[w]&&0==(1&f[w])){var T=c[i[w]];if(1===t.readBit(s,T)){y=this.decodeSignBit(S,m,w);a[w]=y;o[w]=1;this.setNeighborsSignificance(S,m,w);f[w]|=2}u[w]++}}}},checkSegmentationSymbol:function BitModel_checkSegmentationSymbol(){var e=this.decoder,t=this.contexts;if(10!==(e.readBit(t,17)<<3|e.readBit(t,17)<<2|e.readBit(t,17)<<1|e.readBit(t,17)))throw new a("Invalid segmentation symbol")}};return BitModel}(),c=function TransformClosure(){function Transform(){}Transform.prototype.calculate=function transformCalculate(e,t,r){for(var n=e[0],i=1,o=e.length;i<o;i++)n=this.iterate(n,e[i],t,r);return n};Transform.prototype.extend=function extend(e,t,r){var n=t-1,i=t+1,o=t+r-2,a=t+r;e[n--]=e[i++];e[a++]=e[o--];e[n--]=e[i++];e[a++]=e[o--];e[n--]=e[i++];e[a++]=e[o--];e[n]=e[i];e[a]=e[o]};Transform.prototype.iterate=function Transform_iterate(e,t,r,n){var i,o,a,s,c,u,f=e.width,l=e.height,p=e.items,d=t.width,h=t.height,g=t.items;for(a=0,i=0;i<l;i++){s=2*i*d;for(o=0;o<f;o++,a++,s+=2)g[s]=p[a]}p=e.items=null;var v=new Float32Array(d+8);if(1===d){if(0!=(1&r))for(u=0,a=0;u<h;u++,a+=d)g[a]*=.5}else for(u=0,a=0;u<h;u++,a+=d){v.set(g.subarray(a,a+d),4);this.extend(v,4,d);this.filter(v,4,d);g.set(v.subarray(4,4+d),a)}var m=16,y=[];for(i=0;i<m;i++)y.push(new Float32Array(h+8));var b,x=0;e=4+h;if(1===h){if(0!=(1&n))for(c=0;c<d;c++)g[c]*=.5}else for(c=0;c<d;c++){if(0===x){m=Math.min(d-c,m);for(a=c,s=4;s<e;a+=d,s++)for(b=0;b<m;b++)y[b][s]=g[a+b];x=m}var w=y[--x];this.extend(w,4,h);this.filter(w,4,h);if(0===x){a=c-m+1;for(s=4;s<e;a+=d,s++)for(b=0;b<m;b++)g[a+b]=y[b][s]}}return{width:d,height:h,items:g}};return Transform}(),u=function IrreversibleTransformClosure(){function IrreversibleTransform(){c.call(this)}IrreversibleTransform.prototype=Object.create(c.prototype);IrreversibleTransform.prototype.filter=function irreversibleTransformFilter(e,t,r){var n,i,o,a,s=r>>1,c=-1.586134342059924,u=-.052980118572961,f=.882911075530934,l=.443506852043971,p=1.230174104914001;n=(t|=0)-3;for(i=s+4;i--;n+=2)e[n]*=.8128930661159609;o=l*e[(n=t-2)-1];for(i=s+3;i--;n+=2){a=l*e[n+1];e[n]=p*e[n]-o-a;if(!i--)break;o=l*e[(n+=2)+1];e[n]=p*e[n]-o-a}o=f*e[(n=t-1)-1];for(i=s+2;i--;n+=2){a=f*e[n+1];e[n]-=o+a;if(!i--)break;o=f*e[(n+=2)+1];e[n]-=o+a}o=u*e[(n=t)-1];for(i=s+1;i--;n+=2){a=u*e[n+1];e[n]-=o+a;if(!i--)break;o=u*e[(n+=2)+1];e[n]-=o+a}if(0!==s){o=c*e[(n=t+1)-1];for(i=s;i--;n+=2){a=c*e[n+1];e[n]-=o+a;if(!i--)break;o=c*e[(n+=2)+1];e[n]-=o+a}}};return IrreversibleTransform}(),f=function ReversibleTransformClosure(){function ReversibleTransform(){c.call(this)}ReversibleTransform.prototype=Object.create(c.prototype);ReversibleTransform.prototype.filter=function reversibleTransformFilter(e,t,r){var n,i,o=r>>1;for(n=t|=0,i=o+1;i--;n+=2)e[n]-=e[n-1]+e[n+1]+2>>2;for(n=t+1,i=o;i--;n+=2)e[n]+=e[n-1]+e[n+1]>>1};return ReversibleTransform}();return JpxImage}();t.JpxImage=s}])}));