!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=155)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(59))},function(t,n,r){var e=r(0),o=r(13),i=r(30),c=r(50),u=e.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(7),o=r(37),i=r(4),c=r(19),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(7),o=r(6),i=r(17);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(0),o=r(20).f,i=r(8),c=r(10),u=r(25),a=r(46),f=r(39);t.exports=function(t,n){var r,s,l,p,v,y=t.target,g=t.global,d=t.stat;if(r=g?e:d?e[y]||u(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(g?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n,r){var e=r(0),o=r(13),i=r(8),c=r(5),u=r(25),a=r(38),f=r(26),s=f.get,l=f.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,r,o){var a=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||c(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a.call(this)}))},function(t,n,r){var e=r(47),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(22),o=r(60);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(45),o=r(21);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(27),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"c",(function(){return o})),r.d(n,"b",(function(){return i})),r.d(n,"e",(function(){return c})),r.d(n,"f",(function(){return u})),r.d(n,"d",(function(){return a}));var e="https://api.github.com/repos/danedavydov/newsanalyzer/commits",o="http://newsapi.org/v2/everything?",i="0d4793d1a17c490687368bffb25473fe",c=20,u=6,a=3},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return c}));r(58);var e=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];function o(t){t=new Date(t);return"".concat(t.getDate()," ").concat(e[t.getMonth()],", ").concat(t.getFullYear())}function i(t){return new Date((new Date).getTime()-5184e5+864e5*t)}function c(t){return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(7),o=r(44),i=r(17),c=r(14),u=r(19),a=r(5),f=r(37),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e=r(21);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(0),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e,o,i,c=r(61),u=r(0),a=r(3),f=r(8),s=r(5),l=r(29),p=r(23),v=u.WeakMap;if(c){var y=new v,g=y.get,d=y.has,h=y.set;e=function(t,n){return h.call(y,t,n),n},o=function(t){return g.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var b=l("state");p[b]=!0,e=function(t,n){return f(t,b,n),n},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(13),o=r(30),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(48),o=r(35).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(12);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e,o,i=r(0),c=r(53),u=i.process,a=u&&u.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(0),o=r(3),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(28);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(7),o=r(2),i=r(34);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(13);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(3),o=r(32),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(6).f,o=r(5),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},,,function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(2),o=r(12),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,r){var e=r(5),o=r(62),i=r(20),c=r(6);t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(5),o=r(14),i=r(63).indexOf,c=r(23);t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);for(;n.length>a;)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";var e=r(19),o=r(6),i=r(17);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){var e=r(2),o=r(1),i=r(33),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e=r(11);t.exports=e("navigator","userAgent")||""},,function(t,n,r){var e=r(27),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n,r){var e=r(36),o=r(45),i=r(24),c=r(15),u=r(40),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,g,d){for(var h,b,x=i(v),m=o(x),S=e(y,g,3),w=c(m.length),O=0,E=d||u,j=n?E(v,w):r?E(v,0):void 0;w>O;O++)if((p||O in m)&&(b=S(h=m[O],O,x),t))if(n)j[O]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:a.call(j,h)}else if(s)return!1;return l?-1:f||s?s:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(11);t.exports=e("document","documentElement")},function(t,n,r){"use strict";var e=r(9),o=r(2),i=r(32),c=r(3),u=r(24),a=r(15),f=r(51),s=r(40),l=r(52),p=r(1),v=r(33),y=p("isConcatSpreadable"),g=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),d=l("concat"),h=function(t){if(!c(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!g||!d},{concat:function(t){var n,r,e,o,i,c=u(this),l=s(c,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?c:arguments[n],h(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(0),o=r(25),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=r(38),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(11),o=r(31),i=r(49),c=r(4);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(14),o=r(15),i=r(55),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,r){"use strict";var e=r(56).forEach,o=r(90);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},,,function(t,n,r){"use strict";var e=r(11),o=r(6),i=r(1),c=r(7),u=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[u]&&r(n,u,{configurable:!0,get:function(){return this}})}},,,,function(t,n,r){var e=r(4),o=r(98),i=r(35),c=r(23),u=r(57),a=r(34),f=r(29)("IE_PROTO"),s=function(){},l=function(){var t,n=a("iframe"),r=i.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[i[r]];return l()};t.exports=Object.create||function(t,n){var r;return null!==t?(s.prototype=e(t),r=new s,s.prototype=null,r[f]=t):r=l(),void 0===n?r:o(r,n)},c[f]=!0},function(t,n,r){var e=r(48),o=r(35);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){n.f=r(1)},function(t,n,r){"use strict";var e=r(4);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}r.d(n,"a",(function(){return o}));var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r,o;return n=t,(r=[{key:"saveStorage",value:function(t){localStorage.setItem("news",JSON.stringify(t))}},{key:"clearStorage",value:function(){localStorage.clear()}},{key:"loadData",value:function(){return JSON.parse(localStorage.getItem("news"))}}])&&e(n.prototype,r),o&&e(n,o),t}()},function(t,n,r){"use strict";var e=r(9),o=r(64);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},,,,,,,,,function(t,n,r){var e=r(0),o=r(86),i=r(64),c=r(8);for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";var e=r(9),o=r(0),i=r(11),c=r(22),u=r(7),a=r(50),f=r(2),s=r(5),l=r(32),p=r(3),v=r(4),y=r(24),g=r(14),d=r(19),h=r(17),b=r(71),x=r(72),m=r(31),S=r(99),w=r(49),O=r(20),E=r(6),j=r(44),_=r(8),P=r(10),L=r(13),T=r(29),C=r(23),A=r(30),M=r(1),N=r(73),R=r(88),k=r(41),D=r(26),I=r(56).forEach,F=T("hidden"),q=M("toPrimitive"),G=D.set,V=D.getterFor("Symbol"),z=Object.prototype,H=o.Symbol,J=i("JSON","stringify"),W=O.f,$=E.f,Y=S.f,B=j.f,K=L("symbols"),Q=L("op-symbols"),U=L("string-to-symbol-registry"),X=L("symbol-to-string-registry"),Z=L("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,rt=u&&f((function(){return 7!=b($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=W(z,n);e&&delete z[n],$(t,n,r),e&&t!==z&&$(z,n,e)}:$,et=function(t,n){var r=K[t]=b(H.prototype);return G(r,{type:"Symbol",tag:t,description:n}),u||(r.description=n),r},ot=a&&"symbol"==typeof H.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},it=function(t,n,r){t===z&&it(Q,n,r),v(t);var e=d(n,!0);return v(r),s(K,e)?(r.enumerable?(s(t,F)&&t[F][e]&&(t[F][e]=!1),r=b(r,{enumerable:h(0,!1)})):(s(t,F)||$(t,F,h(1,{})),t[F][e]=!0),rt(t,e,r)):$(t,e,r)},ct=function(t,n){v(t);var r=g(n),e=x(r).concat(st(r));return I(e,(function(n){u&&!ut.call(r,n)||it(t,n,r[n])})),t},ut=function(t){var n=d(t,!0),r=B.call(this,n);return!(this===z&&s(K,n)&&!s(Q,n))&&(!(r||!s(this,n)||!s(K,n)||s(this,F)&&this[F][n])||r)},at=function(t,n){var r=g(t),e=d(n,!0);if(r!==z||!s(K,e)||s(Q,e)){var o=W(r,e);return!o||!s(K,e)||s(r,F)&&r[F][e]||(o.enumerable=!0),o}},ft=function(t){var n=Y(g(t)),r=[];return I(n,(function(t){s(K,t)||s(C,t)||r.push(t)})),r},st=function(t){var n=t===z,r=Y(n?Q:g(t)),e=[];return I(r,(function(t){!s(K,t)||n&&!s(z,t)||e.push(K[t])})),e};(a||(P((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=A(t),r=function(t){this===z&&r.call(Q,t),s(this,F)&&s(this[F],n)&&(this[F][n]=!1),rt(this,n,h(1,t))};return u&&nt&&rt(z,n,{configurable:!0,set:r}),et(n,t)}).prototype,"toString",(function(){return V(this).tag})),j.f=ut,E.f=it,O.f=at,m.f=S.f=ft,w.f=st,u&&($(H.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),c||P(z,"propertyIsEnumerable",ut,{unsafe:!0})),N.f=function(t){return et(M(t),t)}),e({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),I(x(Z),(function(t){R(t)})),e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(s(U,n))return U[n];var r=H(n);return U[n]=r,X[r]=n,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(s(X,t))return X[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),e({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?b(t):ct(b(t),n)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:at}),e({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ft,getOwnPropertySymbols:st}),e({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(y(t))}}),J)&&e({target:"JSON",stat:!0,forced:!a||f((function(){var t=H();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!ot(n))return n}),o[1]=n,J.apply(null,o)}});H.prototype[q]||_(H.prototype,q,H.prototype.valueOf),k(H,"Symbol"),C[F]=!0},function(t,n,r){var e=r(47),o=r(5),i=r(73),c=r(6).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,r){"use strict";var e=r(9),o=r(7),i=r(0),c=r(5),u=r(3),a=r(6).f,f=r(46),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var y=v.toString,g="Symbol(test)"==String(s("test")),d=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=y.call(t);if(c(l,t))return"";var r=g?n.slice(7,-1):n.replace(d,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){var r=[][t];return!r||!e((function(){r.call(null,n||function(){throw 1},1)}))}},,,,,,,,function(t,n,r){var e=r(7),o=r(6),i=r(4),c=r(72);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),u=e.length,a=0;u>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(14),o=r(31).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(e(t))}},,function(t,n,r){var e=r(4),o=r(102);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(10),o=r(4),i=r(2),c=r(74),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in u)?c.call(t):r)}),{unsafe:!0})},function(t,n,r){var e=r(27),o=r(21),i=function(t){return function(n,r){var i,c,u=String(o(n)),a=e(r),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},,,function(t,n,r){"use strict";var e,o,i=r(74),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,f=(e=/a/,o=/b*/g,c.call(e,"a"),c.call(o,"a"),0!==e.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(a=function(t){var n,r,e,o,a=this;return s&&(r=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(n=a.lastIndex),e=c.call(a,t),f&&e&&(a.lastIndex=a.global?e.index+e[0].length:n),s&&e&&e.length>1&&u.call(e[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){"use strict";var e=r(9),o=r(56).filter;e({target:"Array",proto:!0,forced:!r(52)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(7),o=r(0),i=r(39),c=r(145),u=r(6).f,a=r(31).f,f=r(146),s=r(74),l=r(10),p=r(2),v=r(67),y=r(1)("match"),g=o.RegExp,d=g.prototype,h=/a/g,b=/a/g,x=new g(h)!==h;if(e&&i("RegExp",!x||p((function(){return b[y]=!1,g(h)!=h||g(b)==b||"/a/i"!=g(h,"i")})))){for(var m=function(t,n){var r=this instanceof m,e=f(t),o=void 0===n;return!r&&e&&t.constructor===m&&o?t:c(x?new g(e&&!o?t.source:t,n):g((e=t instanceof m)?t.source:t,e&&o?s.call(t):n),r?this:d,m)},S=function(t){t in m||u(m,t,{configurable:!0,get:function(){return g[t]},set:function(n){g[t]=n}})},w=a(g),O=0;w.length>O;)S(w[O++]);d.constructor=m,m.prototype=d,l(o,"RegExp",m)}v("RegExp")},function(t,n,r){var e=r(3),o=r(101);t.exports=function(t,n,r){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==r&&e(c=i.prototype)&&c!==r.prototype&&o(t,c),t}},function(t,n,r){var e=r(3),o=r(12),i=r(1)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,r){"use strict";var e=r(9),o=r(107);e({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,r){"use strict";var e=r(149),o=r(4),i=r(15),c=r(21),u=r(150),a=r(151);e("match",1,(function(t,n,r){return[function(n){var r=c(this),e=null==n?void 0:n[t];return void 0!==e?e.call(n,r):new RegExp(n)[t](String(r))},function(t){var e=r(n,t,this);if(e.done)return e.value;var c=o(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],v=0;null!==(l=a(c,f));){var y=String(l[0]);p[v]=y,""===y&&(c.lastIndex=u(f,i(c.lastIndex),s)),v++}return 0===v?null:p}]}))},function(t,n,r){"use strict";var e=r(8),o=r(10),i=r(2),c=r(1),u=r(107),a=c("species"),f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,n,r,l){var p=c(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),y=v&&!i((function(){var n=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[a]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return n=!0,null},r[p](""),!n}));if(!v||!y||"replace"===t&&!f||"split"===t&&!s){var g=/./[p],d=r(p,""[t],(function(t,n,r,e,o){return n.exec===u?v&&!o?{done:!0,value:g.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),h=d[0],b=d[1];o(String.prototype,t,h),o(RegExp.prototype,p,2==n?function(t,n){return b.call(t,this,n)}:function(t){return b.call(t,this)}),l&&e(RegExp.prototype[p],"sham",!0)}}},function(t,n,r){"use strict";var e=r(104).charAt;t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e=r(12),o=r(107);t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var i=r.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==e(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,r){},,,function(t,n,r){"use strict";r.r(n);r(87),r(89),r(143),r(76),r(144),r(147),r(103),r(148),r(85),r(152);function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._statisticsChart=n}var n,r,o;return n=t,(r=[{key:"render",value:function(t,n){var r=document.createElement("p"),e=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.createElementNS("http://www.w3.org/2000/svg","rect"),i=document.createElementNS("http://www.w3.org/2000/svg","text");r.textContent=t,e.setAttributeNS(null,"width","100%"),e.setAttributeNS(null,"height","24"),o.setAttributeNS(null,"width","".concat(n,"%")),o.setAttributeNS(null,"height","24"),i.setAttributeNS(null,"x","2"),i.setAttributeNS(null,"y","65%"),r.classList.add("chart__date"),o.classList.add("chart__bar"),i.classList.add("chart__bar-text"),i.textContent=n,e.appendChild(o),e.appendChild(i),this._statisticsChart.appendChild(r),this._statisticsChart.appendChild(e)}}])&&e(n.prototype,r),o&&e(n,o),t}(),i=r(75),c=r(16),u=r(18),a=new o(document.querySelector(".chart__table")),f=document.querySelector(".analytics__weekly-news"),s=document.querySelector(".analytics__mentioned-in-titles"),l=document.querySelector(".analytics__topic"),p=document.querySelector(".chart__month"),v=localStorage.getItem("query");function y(t,n){var r=new RegExp("".concat(n),"gi"),e=t.toLowerCase().match(r);return e?e.length:0}window.onload=function(){var t=(new i.a).loadData(),n="";l.textContent="«".concat(v,"»"),f.textContent=t.totalResults,p.textContent="(".concat((new Date).toLocaleString("ru",{month:"long"}),")"),t.articles.forEach((function(t){n+=" "+t.title})),s.textContent=y(n,v);for(var r=t.articles,e=function(t){var n=0;r.filter((function(n){return Object(u.c)(new Date(n.publishedAt))==Object(u.c)(Object(u.b)(t))})).forEach((function(t){n=y(t.title,v)+y(t.description,v)+n}));var e=Object(u.b)(t);a.render(e.getDate()+", "+e.toLocaleDateString("ru",{weekday:"short"}),n)},o=0;o<=c.f;o++)e(o)}}]);