!function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!u&&c)return c(o,!0);if(i)return i(o,!0);var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(n){var r=t[o][1][n];return s(r||n)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}return e}()({1:[function(t,n,r){(function(n){"use strict";t(2),t(3),t(9),t(8),t(10),t(5),t(6),t(4),t(7),t(279),t(280),n._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),n._babelPolyfill=!0}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{10:10,2:2,279:279,280:280,3:3,4:4,5:5,6:6,7:7,8:8,9:9}],2:[function(t,n,r){t(254),t(190),t(192),t(191),t(194),t(196),t(201),t(195),t(193),t(203),t(202),t(198),t(199),t(197),t(189),t(200),t(204),t(205),t(156),t(158),t(157),t(207),t(206),t(177),t(187),t(188),t(178),t(179),t(180),t(181),t(182),t(183),t(184),t(185),t(186),t(160),t(161),t(162),t(163),t(164),t(165),t(166),t(167),t(168),t(169),t(170),t(171),t(172),t(173),t(174),t(175),t(176),t(241),t(246),t(253),t(244),t(236),t(237),t(242),t(247),t(249),t(232),t(233),t(234),t(235),t(238),t(239),t(240),t(243),t(245),t(248),t(250),t(251),t(252),t(151),t(153),t(152),t(155),t(154),t(139),t(137),t(144),t(141),t(147),t(149),t(136),t(143),t(133),t(148),t(131),t(146),t(145),t(138),t(142),t(130),t(132),t(135),t(134),t(150),t(140),t(223),t(224),t(230),t(225),t(226),t(227),t(228),t(229),t(208),t(159),t(231),t(266),t(267),t(255),t(256),t(261),t(264),t(265),t(259),t(262),t(260),t(263),t(257),t(258),t(209),t(210),t(211),t(212),t(213),t(216),t(214),t(215),t(217),t(218),t(219),t(220),t(222),t(221),n.exports=t(30)},{130:130,131:131,132:132,133:133,134:134,135:135,136:136,137:137,138:138,139:139,140:140,141:141,142:142,143:143,144:144,145:145,146:146,147:147,148:148,149:149,150:150,151:151,152:152,153:153,154:154,155:155,156:156,157:157,158:158,159:159,160:160,161:161,162:162,163:163,164:164,165:165,166:166,167:167,168:168,169:169,170:170,171:171,172:172,173:173,174:174,175:175,176:176,177:177,178:178,179:179,180:180,181:181,182:182,183:183,184:184,185:185,186:186,187:187,188:188,189:189,190:190,191:191,192:192,193:193,194:194,195:195,196:196,197:197,198:198,199:199,200:200,201:201,202:202,203:203,204:204,205:205,206:206,207:207,208:208,209:209,210:210,211:211,212:212,213:213,214:214,215:215,216:216,217:217,218:218,219:219,220:220,221:221,222:222,223:223,224:224,225:225,226:226,227:227,228:228,229:229,230:230,231:231,232:232,233:233,234:234,235:235,236:236,237:237,238:238,239:239,240:240,241:241,242:242,243:243,244:244,245:245,246:246,247:247,248:248,249:249,250:250,251:251,252:252,253:253,254:254,255:255,256:256,257:257,258:258,259:259,260:260,261:261,262:262,263:263,264:264,265:265,266:266,267:267,30:30}],3:[function(t,n,r){t(268),n.exports=t(30).Array.includes},{268:268,30:30}],4:[function(t,n,r){t(269),n.exports=t(30).Object.entries},{269:269,30:30}],5:[function(t,n,r){t(270),n.exports=t(30).Object.getOwnPropertyDescriptors},{270:270,30:30}],6:[function(t,n,r){t(271),n.exports=t(30).Object.values},{271:271,30:30}],7:[function(t,n,r){"use strict";t(208),t(272),n.exports=t(30).Promise.finally},{208:208,272:272,30:30}],8:[function(t,n,r){t(273),n.exports=t(30).String.padEnd},{273:273,30:30}],9:[function(t,n,r){t(274),n.exports=t(30).String.padStart},{274:274,30:30}],10:[function(t,n,r){t(275),n.exports=t(127).f("asyncIterator")},{127:127,275:275}],11:[function(t,n,r){n.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},{}],12:[function(t,n,r){var e=t(26);n.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},{26:26}],13:[function(t,n,r){var e=t(128)("unscopables"),i=Array.prototype;void 0==i[e]&&t(48)(i,e,{}),n.exports=function(t){i[e][t]=!0}},{128:128,48:48}],14:[function(t,n,r){"use strict";var e=t(105)(!0);n.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},{105:105}],15:[function(t,n,r){n.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},{}],16:[function(t,n,r){var e=t(57);n.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},{57:57}],17:[function(t,n,r){"use strict";var e=t(118),i=t(113),o=t(117);n.exports=[].copyWithin||function copyWithin(t,n){var r=e(this),u=o(r.length),c=i(t,u),a=i(n,u),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?u:i(f,u))-a,u-c),l=1;for(a<c&&c<a+s&&(l=-1,a+=s-1,c+=s-1);s-- >0;)a in r?r[c]=r[a]:delete r[c],c+=l,a+=l;return r}},{113:113,117:117,118:118}],18:[function(t,n,r){"use strict";var e=t(118),i=t(113),o=t(117);n.exports=function fill(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,f=void 0===a?r:i(a,r);f>c;)n[c++]=t;return n}},{113:113,117:117,118:118}],19:[function(t,n,r){var e=t(116),i=t(117),o=t(113);n.exports=function(t){return function(n,r,u){var c,a=e(n),f=i(a.length),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}}},{113:113,116:116,117:117}],20:[function(t,n,r){var e=t(32),i=t(53),o=t(118),u=t(117),c=t(23);n.exports=function(t,n){var r=1==t,a=2==t,f=3==t,s=4==t,l=6==t,h=5==t||l,p=n||c;return function(n,c,v){for(var d,y,g=o(n),x=i(g),m=e(c,v,3),b=u(x.length),S=0,w=r?p(n,b):a?p(n,0):void 0;b>S;S++)if((h||S in x)&&(d=x[S],y=m(d,S,g),t))if(r)w[S]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return S;case 2:w.push(d)}else if(s)return!1;return l?-1:f||s?s:w}}},{117:117,118:118,23:23,32:32,53:53}],21:[function(t,n,r){var e=t(11),i=t(118),o=t(53),u=t(117);n.exports=function(t,n,r,c,a){e(n);var f=i(t),s=o(f),l=u(f.length),h=a?l-1:0,p=a?-1:1;if(r<2)for(;;){if(h in s){c=s[h],h+=p;break}if(h+=p,a?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;a?h>=0:l>h;h+=p)h in s&&(c=n(c,s[h],h,f));return c}},{11:11,117:117,118:118,53:53}],22:[function(t,n,r){var e=t(57),i=t(55),o=t(128)("species");n.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},{128:128,55:55,57:57}],23:[function(t,n,r){var e=t(22);n.exports=function(t,n){return new(e(t))(n)}},{22:22}],24:[function(t,n,r){"use strict";var e=t(11),i=t(57),o=t(52),u=[].slice,c={},a=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};n.exports=Function.bind||function bind(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?a(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},{11:11,52:52,57:57}],25:[function(t,n,r){var e=t(26),i=t(128)("toStringTag"),o="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};n.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),i))?r:o?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},{128:128,26:26}],26:[function(t,n,r){var e={}.toString;n.exports=function(t){return e.call(t).slice(8,-1)}},{}],27:[function(t,n,r){"use strict";var e=t(75).f,i=t(74),o=t(93),u=t(32),c=t(15),a=t(45),f=t(61),s=t(63),l=t(99),h=t(36),p=t(70).fastKey,v=t(125),d=h?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};n.exports={getConstructor:function(t,n,r,f){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[f],t)});return o(s.prototype,{clear:function clear(){for(var t=v(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=v(this,n),e=y(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[d]--}return!!e},forEach:function forEach(t){v(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function has(t){return!!y(v(this,n),t)}}),h&&e(s.prototype,"size",{get:function(){return v(this,n)[d]}}),s},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,r){f(t,n,function(t,r){this._t=v(t,n),this._k=r,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?s(0,r.k):"values"==n?s(0,r.v):s(0,[r.k,r.v]):(t._t=void 0,s(1))},r?"entries":"values",!r,!0),l(n)}}},{125:125,15:15,32:32,36:36,45:45,61:61,63:63,70:70,74:74,75:75,93:93,99:99}],28:[function(t,n,r){"use strict";var e=t(93),i=t(70).getWeak,o=t(16),u=t(57),c=t(15),a=t(45),f=t(20),s=t(47),l=t(125),h=f(5),p=f(6),v=0,d=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,n){return h(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=g(this,t);if(n)return n[1]},has:function(t){return!!g(this,t)},set:function(t,n){var r=g(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=p(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},n.exports={getConstructor:function(t,n,r,o){var f=t(function(t,e){c(t,f,n,"_i"),t._t=n,t._i=v++,t._l=void 0,void 0!=e&&a(e,r,t[o],t)});return e(f.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).delete(t):r&&s(r,this._i)&&delete r[this._i]},has:function has(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).has(t):r&&s(r,this._i)}}),f},def:function(t,n,r){var e=i(o(n),!0);return!0===e?d(t).set(n,r):e[t._i]=r,t},ufstore:d}},{125:125,15:15,16:16,20:20,45:45,47:47,57:57,70:70,93:93}],29:[function(t,n,r){"use strict";var e=t(46),i=t(40),o=t(94),u=t(93),c=t(70),a=t(45),f=t(15),s=t(57),l=t(42),h=t(62),p=t(100),v=t(51);n.exports=function(t,n,r,d,y,g){var x=e[t],m=x,b=y?"set":"add",S=m&&m.prototype,w={},_=function(t){var n=S[t];o(S,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function has(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function get(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function add(t){return n.call(this,0===t?0:t),this}:function set(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof m&&(g||S.forEach&&!l(function(){(new m).entries().next()}))){var E=new m,F=E[b](g?{}:-0,1)!=E,I=l(function(){E.has(1)}),O=h(function(t){new m(t)}),P=!g&&l(function(){for(var t=new m,n=5;n--;)t[b](n,n);return!t.has(-0)});O||(m=n(function(n,r){f(n,m,t);var e=v(new x,n,m);return void 0!=r&&a(r,y,e[b],e),e}),m.prototype=S,S.constructor=m),(I||P)&&(_("delete"),_("has"),y&&_("get")),(P||F)&&_(b),g&&S.clear&&delete S.clear}else m=d.getConstructor(n,t,y,b),u(m.prototype,r),c.NEED=!0;return p(m,t),w[t]=m,i(i.G+i.W+i.F*(m!=x),w),g||d.setStrong(m,t,y),m}},{100:100,15:15,40:40,42:42,45:45,46:46,51:51,57:57,62:62,70:70,93:93,94:94}],30:[function(t,n,r){var e=n.exports={version:"2.6.1"};"number"==typeof __e&&(__e=e)},{}],31:[function(t,n,r){"use strict";var e=t(75),i=t(92);n.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},{75:75,92:92}],32:[function(t,n,r){var e=t(11);n.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},{11:11}],33:[function(t,n,r){"use strict";var e=t(42),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};n.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function toISOString(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},{42:42}],34:[function(t,n,r){"use strict";var e=t(16),i=t(119);n.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},{119:119,16:16}],35:[function(t,n,r){n.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},{}],36:[function(t,n,r){n.exports=!t(42)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{42:42}],37:[function(t,n,r){var e=t(57),i=t(46).document,o=e(i)&&e(i.createElement);n.exports=function(t){return o?i.createElement(t):{}}},{46:46,57:57}],38:[function(t,n,r){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],39:[function(t,n,r){var e=t(83),i=t(80),o=t(84);n.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),a=o.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},{80:80,83:83,84:84}],40:[function(t,n,r){var e=t(46),i=t(30),o=t(48),u=t(94),c=t(32),a=function(t,n,r){var f,s,l,h,p=t&a.F,v=t&a.G,d=t&a.S,y=t&a.P,g=t&a.B,x=v?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,m=v?i:i[n]||(i[n]={}),b=m.prototype||(m.prototype={});v&&(r=n);for(f in r)s=!p&&x&&void 0!==x[f],l=(s?x:r)[f],h=g&&s?c(l,e):y&&"function"==typeof l?c(Function.call,l):l,x&&u(x,f,l,t&a.U),m[f]!=l&&o(m,f,h),y&&b[f]!=l&&(b[f]=l)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},{30:30,32:32,46:46,48:48,94:94}],41:[function(t,n,r){var e=t(128)("match");n.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},{128:128}],42:[function(t,n,r){n.exports=function(t){try{return!!t()}catch(t){return!0}}},{}],43:[function(t,n,r){"use strict";t(224);var e=t(94),i=t(48),o=t(42),u=t(35),c=t(128),a=t(96),f=c("species"),s=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();n.exports=function(t,n,r){var h=c(t),p=!o(function(){var n={};return n[h]=function(){return 7},7!=""[t](n)}),v=p?!o(function(){var n=!1,r=/a/;return r.exec=function(){return n=!0,null},"split"===t&&(r.constructor={},r.constructor[f]=function(){return r}),r[h](""),!n}):void 0;if(!p||!v||"replace"===t&&!s||"split"===t&&!l){var d=/./[h],y=r(u,h,""[t],function maybeCallNative(t,n,r,e,i){return n.exec===a?p&&!i?{done:!0,value:d.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}}),g=y[0],x=y[1];e(String.prototype,t,g),i(RegExp.prototype,h,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},{128:128,224:224,35:35,42:42,48:48,94:94,96:96}],44:[function(t,n,r){"use strict";var e=t(16);n.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},{16:16}],45:[function(t,n,r){var e=t(32),i=t(59),o=t(54),u=t(16),c=t(117),a=t(129),f={},s={},r=n.exports=function(t,n,r,l,h){var p,v,d,y,g=h?function(){return t}:a(t),x=e(r,l,n?2:1),m=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(p=c(t.length);p>m;m++)if((y=n?x(u(v=t[m])[0],v[1]):x(t[m]))===f||y===s)return y}else for(d=g.call(t);!(v=d.next()).done;)if((y=i(d,x,v.value,n))===f||y===s)return y};r.BREAK=f,r.RETURN=s},{117:117,129:129,16:16,32:32,54:54,59:59}],46:[function(t,n,r){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},{}],47:[function(t,n,r){var e={}.hasOwnProperty;n.exports=function(t,n){return e.call(t,n)}},{}],48:[function(t,n,r){var e=t(75),i=t(92);n.exports=t(36)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},{36:36,75:75,92:92}],49:[function(t,n,r){var e=t(46).document;n.exports=e&&e.documentElement},{46:46}],50:[function(t,n,r){n.exports=!t(36)&&!t(42)(function(){return 7!=Object.defineProperty(t(37)("div"),"a",{get:function(){return 7}}).a})},{36:36,37:37,42:42}],51:[function(t,n,r){var e=t(57),i=t(98).set;n.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},{57:57,98:98}],52:[function(t,n,r){n.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},{}],53:[function(t,n,r){var e=t(26);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},{26:26}],54:[function(t,n,r){var e=t(64),i=t(128)("iterator"),o=Array.prototype;n.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},{128:128,64:64}],55:[function(t,n,r){var e=t(26);n.exports=Array.isArray||function isArray(t){return"Array"==e(t)}},{26:26}],56:[function(t,n,r){var e=t(57),i=Math.floor;n.exports=function isInteger(t){return!e(t)&&isFinite(t)&&i(t)===t}},{57:57}],57:[function(t,n,r){n.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},{}],58:[function(t,n,r){var e=t(57),i=t(26),o=t(128)("match");n.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},{128:128,26:26,57:57}],59:[function(t,n,r){var e=t(16);n.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},{16:16}],60:[function(t,n,r){"use strict";var e=t(74),i=t(92),o=t(100),u={};t(48)(u,t(128)("iterator"),function(){return this}),n.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},{100:100,128:128,48:48,74:74,92:92}],61:[function(t,n,r){"use strict";var e=t(65),i=t(40),o=t(94),u=t(48),c=t(64),a=t(60),f=t(100),s=t(81),l=t(128)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};n.exports=function(t,n,r,v,d,y,g){a(r,n,v);var x,m,b,S=function(t){if(!h&&t in F)return F[t];switch(t){case"keys":return function keys(){return new r(this,t)};case"values":return function values(){return new r(this,t)}}return function entries(){return new r(this,t)}},w=n+" Iterator",_="values"==d,E=!1,F=t.prototype,I=F[l]||F["@@iterator"]||d&&F[d],O=I||S(d),P=d?_?S("entries"):O:void 0,A="Array"==n?F.entries||I:I;if(A&&(b=s(A.call(new t)))!==Object.prototype&&b.next&&(f(b,w,!0),e||"function"==typeof b[l]||u(b,l,p)),_&&I&&"values"!==I.name&&(E=!0,O=function values(){return I.call(this)}),e&&!g||!h&&!E&&F[l]||u(F,l,O),c[n]=O,c[w]=p,d)if(x={values:_?O:S("values"),keys:y?O:S("keys"),entries:P},g)for(m in x)m in F||o(F,m,x[m]);else i(i.P+i.F*(h||E),n,x);return x}},{100:100,128:128,40:40,48:48,60:60,64:64,65:65,81:81,94:94}],62:[function(t,n,r){var e=t(128)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}n.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},{128:128}],63:[function(t,n,r){n.exports=function(t,n){return{value:n,done:!!t}}},{}],64:[function(t,n,r){n.exports={}},{}],65:[function(t,n,r){n.exports=!1},{}],66:[function(t,n,r){var e=Math.expm1;n.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function expm1(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},{}],67:[function(t,n,r){var e=t(69),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),a=i(2,-126),f=function(t){return t+1/o-1/o};n.exports=Math.fround||function fround(t){var n,r,i=Math.abs(t),s=e(t);return i<a?s*f(i/a/u)*a*u:(n=(1+u/o)*i,r=n-(n-i),r>c||r!=r?s*(1/0):s*r)}},{69:69}],68:[function(t,n,r){n.exports=Math.log1p||function log1p(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},{}],69:[function(t,n,r){n.exports=Math.sign||function sign(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},{}],70:[function(t,n,r){var e=t(123)("meta"),i=t(57),o=t(47),u=t(75).f,c=0,a=Object.isExtensible||function(){return!0},f=!t(42)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},h=function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},p=function(t){return f&&v.NEED&&a(t)&&!o(t,e)&&s(t),t},v=n.exports={KEY:e,NEED:!1,fastKey:l,getWeak:h,onFreeze:p}},{123:123,42:42,47:47,57:57,75:75}],71:[function(t,n,r){var e=t(46),i=t(112).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==t(26)(u);n.exports=function(){var t,n,r,f=function(){var e,i;for(a&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(f)};else if(!o||e.navigator&&e.navigator.standalone)if(c&&c.resolve){var s=c.resolve(void 0);r=function(){s.then(f)}}else r=function(){i.call(e,f)};else{var l=!0,h=document.createTextNode("");new o(f).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},{112:112,26:26,46:46}],72:[function(t,n,r){"use strict";function PromiseCapability(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}var e=t(11);n.exports.f=function(t){return new PromiseCapability(t)}},{11:11}],73:[function(t,n,r){"use strict";var e=t(83),i=t(80),o=t(84),u=t(118),c=t(53),a=Object.assign;n.exports=!a||t(42)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=a({},t)[r]||Object.keys(a({},n)).join("")!=e})?function assign(t,n){for(var r=u(t),a=arguments.length,f=1,s=i.f,l=o.f;a>f;)for(var h,p=c(arguments[f++]),v=s?e(p).concat(s(p)):e(p),d=v.length,y=0;d>y;)l.call(p,h=v[y++])&&(r[h]=p[h]);return r}:a},{118:118,42:42,53:53,80:80,83:83,84:84}],74:[function(t,n,r){var e=t(16),i=t(76),o=t(38),u=t(101)("IE_PROTO"),c=function(){},a=function(){var n,r=t(37)("iframe"),e=o.length;for(r.style.display="none",t(49).appendChild(r),r.src="javascript:",n=r.contentWindow.document,n.open(),n.write("<script>document.F=Object<\/script>"),n.close(),a=n.F;e--;)delete a.prototype[o[e]];return a()};n.exports=Object.create||function create(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},{101:101,16:16,37:37,38:38,49:49,76:76}],75:[function(t,n,r){var e=t(16),i=t(50),o=t(119),u=Object.defineProperty;r.f=t(36)?Object.defineProperty:function defineProperty(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},{119:119,16:16,36:36,50:50}],76:[function(t,n,r){var e=t(75),i=t(16),o=t(83);n.exports=t(36)?Object.defineProperties:function defineProperties(t,n){i(t);for(var r,u=o(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},{16:16,36:36,75:75,83:83}],77:[function(t,n,r){var e=t(84),i=t(92),o=t(116),u=t(119),c=t(47),a=t(50),f=Object.getOwnPropertyDescriptor;r.f=t(36)?f:function getOwnPropertyDescriptor(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},{116:116,119:119,36:36,47:47,50:50,84:84,92:92}],78:[function(t,n,r){var e=t(116),i=t(79).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return u.slice()}};n.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},{116:116,79:79}],79:[function(t,n,r){var e=t(82),i=t(38).concat("length","prototype");r.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return e(t,i)}},{38:38,82:82}],80:[function(t,n,r){r.f=Object.getOwnPropertySymbols},{}],81:[function(t,n,r){var e=t(47),i=t(118),o=t(101)("IE_PROTO"),u=Object.prototype;n.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},{101:101,118:118,47:47}],82:[function(t,n,r){var e=t(47),i=t(116),o=t(19)(!1),u=t(101)("IE_PROTO");n.exports=function(t,n){var r,c=i(t),a=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~o(f,r)||f.push(r));return f}},{101:101,116:116,19:19,47:47}],83:[function(t,n,r){var e=t(82),i=t(38);n.exports=Object.keys||function keys(t){return e(t,i)}},{38:38,82:82}],84:[function(t,n,r){r.f={}.propertyIsEnumerable},{}],85:[function(t,n,r){var e=t(40),i=t(30),o=t(42);n.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},{30:30,40:40,42:42}],86:[function(t,n,r){var e=t(83),i=t(116),o=t(84).f;n.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),a=c.length,f=0,s=[];a>f;)o.call(u,r=c[f++])&&s.push(t?[r,u[r]]:u[r]);return s}}},{116:116,83:83,84:84}],87:[function(t,n,r){var e=t(79),i=t(80),o=t(16),u=t(46).Reflect;n.exports=u&&u.ownKeys||function ownKeys(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},{16:16,46:46,79:79,80:80}],88:[function(t,n,r){var e=t(46).parseFloat,i=t(110).trim;n.exports=1/e(t(111)+"-0")!=-1/0?function parseFloat(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},{110:110,111:111,46:46}],89:[function(t,n,r){var e=t(46).parseInt,i=t(110).trim,o=t(111),u=/^[-+]?0[xX]/;n.exports=8!==e(o+"08")||22!==e(o+"0x16")?function parseInt(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},{110:110,111:111,46:46}],90:[function(t,n,r){n.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},{}],91:[function(t,n,r){var e=t(16),i=t(57),o=t(72);n.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},{16:16,57:57,72:72}],92:[function(t,n,r){n.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},{}],93:[function(t,n,r){var e=t(94);n.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},{94:94}],94:[function(t,n,r){var e=t(46),i=t(48),o=t(47),u=t(123)("src"),c=Function.toString,a=(""+c).split("toString");t(30).inspectSource=function(t){return c.call(t)},(n.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function toString(){return"function"==typeof this&&this[u]||c.call(this)})},{123:123,30:30,46:46,47:47,48:48}],95:[function(t,n,r){"use strict";var e=t(25),i=RegExp.prototype.exec;n.exports=function(t,n){var r=t.exec;if("function"==typeof r){var o=r.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==e(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},{25:25}],96:[function(t,n,r){"use strict";var e=t(44),i=RegExp.prototype.exec,o=String.prototype.replace,u=i,c=function(){var t=/a/,n=/b*/g;return i.call(t,"a"),i.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),a=void 0!==/()??/.exec("")[1];(c||a)&&(u=function exec(t){var n,r,u,f,s=this;return a&&(r=new RegExp("^"+s.source+"$(?!\\s)",e.call(s))),c&&(n=s.lastIndex),u=i.call(s,t),c&&u&&(s.lastIndex=s.global?u.index+u[0].length:n),a&&u&&u.length>1&&o.call(u[0],r,function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(u[f]=void 0)}),u}),n.exports=u},{44:44}],97:[function(t,n,r){n.exports=Object.is||function is(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},{}],98:[function(t,n,r){var e=t(57),i=t(16),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,r,e){try{e=t(32)(Function.call,t(77).f(Object.prototype,"__proto__").set,2),e(n,[]),r=!(n instanceof Array)}catch(t){r=!0}return function setPrototypeOf(t,n){return o(t,n),r?t.__proto__=n:e(t,n),t}}({},!1):void 0),check:o}},{16:16,32:32,57:57,77:77}],99:[function(t,n,r){"use strict";var e=t(46),i=t(75),o=t(36),u=t(128)("species");n.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},{128:128,36:36,46:46,75:75}],100:[function(t,n,r){var e=t(75).f,i=t(47),o=t(128)("toStringTag");n.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},{128:128,47:47,75:75}],101:[function(t,n,r){var e=t(102)("keys"),i=t(123);n.exports=function(t){return e[t]||(e[t]=i(t))}},{102:102,123:123}],102:[function(t,n,r){var e=t(30),i=t(46),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(n.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:t(65)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},{30:30,46:46,65:65}],103:[function(t,n,r){var e=t(16),i=t(11),o=t(128)("species");n.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},{11:11,128:128,16:16}],104:[function(t,n,r){"use strict";var e=t(42);n.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},{42:42}],105:[function(t,n,r){var e=t(115),i=t(35);n.exports=function(t){return function(n,r){var o,u,c=String(i(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536)}}},{115:115,35:35}],106:[function(t,n,r){var e=t(58),i=t(35);n.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},{35:35,58:58}],107:[function(t,n,r){var e=t(40),i=t(42),o=t(35),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};n.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},{35:35,40:40,42:42}],108:[function(t,n,r){var e=t(117),i=t(109),o=t(35);n.exports=function(t,n,r,u){var c=String(o(t)),a=c.length,f=void 0===r?" ":String(r),s=e(n);if(s<=a||""==f)return c;var l=s-a,h=i.call(f,Math.ceil(l/f.length));return h.length>l&&(h=h.slice(0,l)),u?h+c:c+h}},{109:109,117:117,35:35}],109:[function(t,n,r){"use strict";var e=t(115),i=t(35);n.exports=function repeat(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},{115:115,35:35}],110:[function(t,n,r){var e=t(40),i=t(35),o=t(42),u=t(111),c="["+u+"]",a="​",f=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),l=function(t,n,r){var i={},c=o(function(){return!!u[t]()||a[t]()!=a}),f=i[t]=c?n(h):u[t];r&&(i[r]=f),e(e.P+e.F*c,"String",i)},h=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(s,"")),t};n.exports=l},{111:111,35:35,40:40,42:42}],111:[function(t,n,r){n.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},{}],
112:[function(t,n,r){var e,i,o,u=t(32),c=t(52),a=t(49),f=t(37),s=t(46),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,d=s.Dispatch,y=0,g={},x=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},m=function(t){x.call(t.data)};h&&p||(h=function setImmediate(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return g[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function clearImmediate(t){delete g[t]},"process"==t(26)(l)?e=function(t){l.nextTick(u(x,t,1))}:d&&d.now?e=function(t){d.now(u(x,t,1))}:v?(i=new v,o=i.port2,i.port1.onmessage=m,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",m,!1)):e="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),x.call(t)}}:function(t){setTimeout(u(x,t,1),0)}),n.exports={set:h,clear:p}},{26:26,32:32,37:37,46:46,49:49,52:52}],113:[function(t,n,r){var e=t(115),i=Math.max,o=Math.min;n.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},{115:115}],114:[function(t,n,r){var e=t(115),i=t(117);n.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},{115:115,117:117}],115:[function(t,n,r){var e=Math.ceil,i=Math.floor;n.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},{}],116:[function(t,n,r){var e=t(53),i=t(35);n.exports=function(t){return e(i(t))}},{35:35,53:53}],117:[function(t,n,r){var e=t(115),i=Math.min;n.exports=function(t){return t>0?i(e(t),9007199254740991):0}},{115:115}],118:[function(t,n,r){var e=t(35);n.exports=function(t){return Object(e(t))}},{35:35}],119:[function(t,n,r){var e=t(57);n.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},{57:57}],120:[function(t,n,r){"use strict";if(t(36)){var e=t(65),i=t(46),o=t(42),u=t(40),c=t(122),a=t(121),f=t(32),s=t(15),l=t(92),h=t(48),p=t(93),v=t(115),d=t(117),y=t(114),g=t(113),x=t(119),m=t(47),b=t(25),S=t(57),w=t(118),_=t(54),E=t(74),F=t(81),I=t(79).f,O=t(129),P=t(123),A=t(128),M=t(20),k=t(19),N=t(103),j=t(140),T=t(64),L=t(62),R=t(99),C=t(18),D=t(17),G=t(75),W=t(77),U=G.f,V=W.f,B=i.RangeError,z=i.TypeError,q=i.Uint8Array,Y=Array.prototype,K=a.ArrayBuffer,$=a.DataView,J=M(0),H=M(2),X=M(3),Z=M(4),Q=M(5),tt=M(6),nt=k(!0),rt=k(!1),et=j.values,it=j.keys,ot=j.entries,ut=Y.lastIndexOf,ct=Y.reduce,at=Y.reduceRight,ft=Y.join,st=Y.sort,lt=Y.slice,ht=Y.toString,pt=Y.toLocaleString,vt=A("iterator"),dt=A("toStringTag"),yt=P("typed_constructor"),gt=P("def_constructor"),xt=c.CONSTR,mt=c.TYPED,bt=c.VIEW,St=M(1,function(t,n){return It(N(t,t[gt]),n)}),wt=o(function(){return 1===new q(new Uint16Array([1]).buffer)[0]}),_t=!!q&&!!q.prototype.set&&o(function(){new q(1).set({})}),Et=function(t,n){var r=v(t);if(r<0||r%n)throw B("Wrong offset!");return r},Ft=function(t){if(S(t)&&mt in t)return t;throw z(t+" is not a typed array!")},It=function(t,n){if(!(S(t)&&yt in t))throw z("It is not a typed array constructor!");return new t(n)},Ot=function(t,n){return Pt(N(t,t[gt]),n)},Pt=function(t,n){for(var r=0,e=n.length,i=It(t,e);e>r;)i[r]=n[r++];return i},At=function(t,n,r){U(t,n,{get:function(){return this._d[r]}})},Mt=function from(t){var n,r,e,i,o,u,c=w(t),a=arguments.length,s=a>1?arguments[1]:void 0,l=void 0!==s,h=O(c);if(void 0!=h&&!_(h)){for(u=h.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(l&&a>2&&(s=f(s,arguments[2],2)),n=0,r=d(c.length),i=It(this,r);r>n;n++)i[n]=l?s(c[n],n):c[n];return i},kt=function of(){for(var t=0,n=arguments.length,r=It(this,n);n>t;)r[t]=arguments[t++];return r},Nt=!!q&&o(function(){pt.call(new q(1))}),jt=function toLocaleString(){return pt.apply(Nt?lt.call(Ft(this)):Ft(this),arguments)},Tt={copyWithin:function copyWithin(t,n){return D.call(Ft(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function every(t){return Z(Ft(this),t,arguments.length>1?arguments[1]:void 0)},fill:function fill(t){return C.apply(Ft(this),arguments)},filter:function filter(t){return Ot(this,H(Ft(this),t,arguments.length>1?arguments[1]:void 0))},find:function find(t){return Q(Ft(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function findIndex(t){return tt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function forEach(t){J(Ft(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function indexOf(t){return rt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},includes:function includes(t){return nt(Ft(this),t,arguments.length>1?arguments[1]:void 0)},join:function join(t){return ft.apply(Ft(this),arguments)},lastIndexOf:function lastIndexOf(t){return ut.apply(Ft(this),arguments)},map:function map(t){return St(Ft(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function reduce(t){return ct.apply(Ft(this),arguments)},reduceRight:function reduceRight(t){return at.apply(Ft(this),arguments)},reverse:function reverse(){for(var t,n=this,r=Ft(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function some(t){return X(Ft(this),t,arguments.length>1?arguments[1]:void 0)},sort:function sort(t){return st.call(Ft(this),t)},subarray:function subarray(t,n){var r=Ft(this),e=r.length,i=g(t,e);return new(N(r,r[gt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:g(n,e))-i))}},Lt=function slice(t,n){return Ot(this,lt.call(Ft(this),t,n))},Rt=function set(t){Ft(this);var n=Et(arguments[1],1),r=this.length,e=w(t),i=d(e.length),o=0;if(i+n>r)throw B("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Ct={entries:function entries(){return ot.call(Ft(this))},keys:function keys(){return it.call(Ft(this))},values:function values(){return et.call(Ft(this))}},Dt=function(t,n){return S(t)&&t[mt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Gt=function getOwnPropertyDescriptor(t,n){return Dt(t,n=x(n,!0))?l(2,t[n]):V(t,n)},Wt=function defineProperty(t,n,r){return!(Dt(t,n=x(n,!0))&&S(r)&&m(r,"value"))||m(r,"get")||m(r,"set")||r.configurable||m(r,"writable")&&!r.writable||m(r,"enumerable")&&!r.enumerable?U(t,n,r):(t[n]=r.value,t)};xt||(W.f=Gt,G.f=Wt),u(u.S+u.F*!xt,"Object",{getOwnPropertyDescriptor:Gt,defineProperty:Wt}),o(function(){ht.call({})})&&(ht=pt=function toString(){return ft.call(this)});var Ut=p({},Tt);p(Ut,Ct),h(Ut,vt,Ct.values),p(Ut,{slice:Lt,set:Rt,constructor:function(){},toString:ht,toLocaleString:jt}),At(Ut,"buffer","b"),At(Ut,"byteOffset","o"),At(Ut,"byteLength","l"),At(Ut,"length","e"),U(Ut,dt,{get:function(){return this[mt]}}),n.exports=function(t,n,r,a){a=!!a;var f=t+(a?"Clamped":"")+"Array",l="get"+t,p="set"+t,v=i[f],g=v||{},x=v&&F(v),m=!v||!c.ABV,w={},_=v&&v.prototype,O=function(t,r){var e=t._d;return e.v[l](r*n+e.o,wt)},P=function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[p](r*n+i.o,e,wt)},A=function(t,n){U(t,n,{get:function(){return O(this,n)},set:function(t){return P(this,n,t)},enumerable:!0})};m?(v=r(function(t,r,e,i){s(t,v,f,"_d");var o,u,c,a,l=0,p=0;if(S(r)){if(!(r instanceof K||"ArrayBuffer"==(a=b(r))||"SharedArrayBuffer"==a))return mt in r?Pt(v,r):Mt.call(v,r);o=r,p=Et(e,n);var g=r.byteLength;if(void 0===i){if(g%n)throw B("Wrong length!");if((u=g-p)<0)throw B("Wrong length!")}else if((u=d(i)*n)+p>g)throw B("Wrong length!");c=u/n}else c=y(r),u=c*n,o=new K(u);for(h(t,"_d",{b:o,o:p,l:u,e:c,v:new $(o)});l<c;)A(t,l++)}),_=v.prototype=E(Ut),h(_,"constructor",v)):o(function(){v(1)})&&o(function(){new v(-1)})&&L(function(t){new v,new v(null),new v(1.5),new v(t)},!0)||(v=r(function(t,r,e,i){s(t,v,f);var o;return S(r)?r instanceof K||"ArrayBuffer"==(o=b(r))||"SharedArrayBuffer"==o?void 0!==i?new g(r,Et(e,n),i):void 0!==e?new g(r,Et(e,n)):new g(r):mt in r?Pt(v,r):Mt.call(v,r):new g(y(r))}),J(x!==Function.prototype?I(g).concat(I(x)):I(g),function(t){t in v||h(v,t,g[t])}),v.prototype=_,e||(_.constructor=v));var M=_[vt],k=!!M&&("values"==M.name||void 0==M.name),N=Ct.values;h(v,yt,!0),h(_,mt,f),h(_,bt,!0),h(_,gt,v),(a?new v(1)[dt]==f:dt in _)||U(_,dt,{get:function(){return f}}),w[f]=v,u(u.G+u.W+u.F*(v!=g),w),u(u.S,f,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){g.of.call(v,1)}),f,{from:Mt,of:kt}),"BYTES_PER_ELEMENT"in _||h(_,"BYTES_PER_ELEMENT",n),u(u.P,f,Tt),R(f),u(u.P+u.F*_t,f,{set:Rt}),u(u.P+u.F*!k,f,Ct),e||_.toString==ht||(_.toString=ht),u(u.P+u.F*o(function(){new v(1).slice()}),f,{slice:Lt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),f,{toLocaleString:jt}),T[f]=k?M:N,e||k||h(_,vt,N)}}else n.exports=function(){}},{103:103,113:113,114:114,115:115,117:117,118:118,119:119,121:121,122:122,123:123,128:128,129:129,140:140,15:15,17:17,18:18,19:19,20:20,25:25,32:32,36:36,40:40,42:42,46:46,47:47,48:48,54:54,57:57,62:62,64:64,65:65,74:74,75:75,77:77,79:79,81:81,92:92,93:93,99:99}],121:[function(t,n,r){"use strict";function packIEEE754(t,n,r){var e,i,o,u=new Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?O(2,-24)-O(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for(t=I(t),t!=t||t===E?(i=t!=t?1:0,e=a):(e=P(A(t)/M),t*(o=O(2,-e))<1&&(e--,o*=2),t+=e+f>=1?s/o:s*O(2,1-f),t*o>=2&&(e++,o/=2),e+f>=a?(i=0,e=a):e+f>=1?(i=(t*o-1)*O(2,n),e+=f):(i=t*O(2,f-1)*O(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[l++]=255&e,e/=256,c-=8);return u[--l]|=128*h,u}function unpackIEEE754(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;c>0;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-E:E;e+=O(2,n),s-=u}return(f?-1:1)*e*O(2,s-n)}function unpackI32(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function packI8(t){return[255&t]}function packI16(t){return[255&t,t>>8&255]}function packI32(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function packF64(t){return packIEEE754(t,52,8)}function packF32(t){return packIEEE754(t,23,4)}function addGetter(t,n,r){d(t[x],n,{get:function(){return this[r]}})}function get(t,n,r,e){var i=+r,o=p(i);if(o+n>t[N])throw _(m);var u=t[k]._b,c=o+t[j],a=u.slice(c,c+n);return e?a:a.reverse()}function set(t,n,r,e,i,o){var u=+r,c=p(u);if(c+n>t[N])throw _(m);for(var a=t[k]._b,f=c+t[j],s=e(+i),l=0;l<n;l++)a[f+l]=s[o?l:n-l-1]}var e=t(46),i=t(36),o=t(65),u=t(122),c=t(48),a=t(93),f=t(42),s=t(15),l=t(115),h=t(117),p=t(114),v=t(79).f,d=t(75).f,y=t(18),g=t(100),x="prototype",m="Wrong index!",b=e.ArrayBuffer,S=e.DataView,w=e.Math,_=e.RangeError,E=e.Infinity,F=b,I=w.abs,O=w.pow,P=w.floor,A=w.log,M=w.LN2,k=i?"_b":"buffer",N=i?"_l":"byteLength",j=i?"_o":"byteOffset";if(u.ABV){if(!f(function(){b(1)})||!f(function(){new b(-1)})||f(function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name})){b=function ArrayBuffer(t){return s(this,b),new F(p(t))};for(var T,L=b[x]=F[x],R=v(F),C=0;R.length>C;)(T=R[C++])in b||c(b,T,F[T]);o||(L.constructor=b)}var D=new S(new b(2)),G=S[x].setInt8;D.setInt8(0,2147483648),D.setInt8(1,2147483649),!D.getInt8(0)&&D.getInt8(1)||a(S[x],{setInt8:function setInt8(t,n){G.call(this,t,n<<24>>24)},setUint8:function setUint8(t,n){G.call(this,t,n<<24>>24)}},!0)}else b=function ArrayBuffer(t){s(this,b,"ArrayBuffer");var n=p(t);this._b=y.call(new Array(n),0),this[N]=n},S=function DataView(t,n,r){s(this,S,"DataView"),s(t,b,"DataView");var e=t[N],i=l(n);if(i<0||i>e)throw _("Wrong offset!");if(r=void 0===r?e-i:h(r),i+r>e)throw _("Wrong length!");this[k]=t,this[j]=i,this[N]=r},i&&(addGetter(b,"byteLength","_l"),addGetter(S,"buffer","_b"),addGetter(S,"byteLength","_l"),addGetter(S,"byteOffset","_o")),a(S[x],{getInt8:function getInt8(t){return get(this,1,t)[0]<<24>>24},getUint8:function getUint8(t){return get(this,1,t)[0]},getInt16:function getInt16(t){var n=get(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function getUint16(t){var n=get(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function getInt32(t){return unpackI32(get(this,4,t,arguments[1]))},getUint32:function getUint32(t){return unpackI32(get(this,4,t,arguments[1]))>>>0},getFloat32:function getFloat32(t){return unpackIEEE754(get(this,4,t,arguments[1]),23,4)},getFloat64:function getFloat64(t){return unpackIEEE754(get(this,8,t,arguments[1]),52,8)},setInt8:function setInt8(t,n){set(this,1,t,packI8,n)},setUint8:function setUint8(t,n){set(this,1,t,packI8,n)},setInt16:function setInt16(t,n){set(this,2,t,packI16,n,arguments[2])},setUint16:function setUint16(t,n){set(this,2,t,packI16,n,arguments[2])},setInt32:function setInt32(t,n){set(this,4,t,packI32,n,arguments[2])},setUint32:function setUint32(t,n){set(this,4,t,packI32,n,arguments[2])},setFloat32:function setFloat32(t,n){set(this,4,t,packF32,n,arguments[2])},setFloat64:function setFloat64(t,n){set(this,8,t,packF64,n,arguments[2])}});g(b,"ArrayBuffer"),g(S,"DataView"),c(S[x],u.VIEW,!0),r.ArrayBuffer=b,r.DataView=S},{100:100,114:114,115:115,117:117,122:122,15:15,18:18,36:36,42:42,46:46,48:48,65:65,75:75,79:79,93:93}],122:[function(t,n,r){for(var e,i=t(46),o=t(48),u=t(123),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;n.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},{123:123,46:46,48:48}],123:[function(t,n,r){var e=0,i=Math.random();n.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},{}],124:[function(t,n,r){var e=t(46),i=e.navigator;n.exports=i&&i.userAgent||""},{46:46}],125:[function(t,n,r){var e=t(57);n.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},{57:57}],126:[function(t,n,r){var e=t(46),i=t(30),o=t(65),u=t(127),c=t(75).f;n.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},{127:127,30:30,46:46,65:65,75:75}],127:[function(t,n,r){r.f=t(128)},{128:128}],128:[function(t,n,r){var e=t(102)("wks"),i=t(123),o=t(46).Symbol,u="function"==typeof o;(n.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},{102:102,123:123,46:46}],129:[function(t,n,r){var e=t(25),i=t(128)("iterator"),o=t(64);n.exports=t(30).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},{128:128,25:25,30:30,64:64}],130:[function(t,n,r){var e=t(40);e(e.P,"Array",{copyWithin:t(17)}),t(13)("copyWithin")},{13:13,17:17,40:40}],131:[function(t,n,r){"use strict";var e=t(40),i=t(20)(4);e(e.P+e.F*!t(104)([].every,!0),"Array",{every:function every(t){return i(this,t,arguments[1])}})},{104:104,20:20,40:40}],132:[function(t,n,r){var e=t(40);e(e.P,"Array",{fill:t(18)}),t(13)("fill")},{13:13,18:18,40:40}],133:[function(t,n,r){"use strict";var e=t(40),i=t(20)(2);e(e.P+e.F*!t(104)([].filter,!0),"Array",{filter:function filter(t){return i(this,t,arguments[1])}})},{104:104,20:20,40:40}],134:[function(t,n,r){"use strict";var e=t(40),i=t(20)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function findIndex(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(13)(o)},{13:13,20:20,40:40}],135:[function(t,n,r){"use strict";var e=t(40),i=t(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),e(e.P+e.F*o,"Array",{find:function find(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(13)("find")},{13:13,20:20,40:40}],136:[function(t,n,r){"use strict";var e=t(40),i=t(20)(0),o=t(104)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function forEach(t){return i(this,t,arguments[1])}})},{104:104,20:20,40:40}],137:[function(t,n,r){"use strict";var e=t(32),i=t(40),o=t(118),u=t(59),c=t(54),a=t(117),f=t(31),s=t(129);i(i.S+i.F*!t(62)(function(t){Array.from(t)}),"Array",{from:function from(t){var n,r,i,l,h=o(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,g=0,x=s(h);if(y&&(d=e(d,v>2?arguments[2]:void 0,2)),void 0==x||p==Array&&c(x))for(n=a(h.length),r=new p(n);n>g;g++)f(r,g,y?d(h[g],g):h[g]);else for(l=x.call(h),r=new p;!(i=l.next()).done;g++)f(r,g,y?u(l,d,[i.value,g],!0):i.value);return r.length=g,r}})},{117:117,118:118,129:129,31:31,32:32,40:40,54:54,59:59,62:62}],138:[function(t,n,r){"use strict";var e=t(40),i=t(19)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!t(104)(o)),"Array",{indexOf:function indexOf(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},{104:104,19:19,40:40}],139:[function(t,n,r){var e=t(40);e(e.S,"Array",{isArray:t(55)})},{40:40,55:55}],140:[function(t,n,r){"use strict";var e=t(13),i=t(63),o=t(64),u=t(116);n.exports=t(61)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,r):"values"==n?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},{116:116,13:13,61:61,63:63,64:64}],141:[function(t,n,r){"use strict";var e=t(40),i=t(116),o=[].join;e(e.P+e.F*(t(53)!=Object||!t(104)(o)),"Array",{join:function join(t){return o.call(i(this),void 0===t?",":t)}})},{104:104,116:116,40:40,53:53}],142:[function(t,n,r){"use strict";var e=t(40),i=t(116),o=t(115),u=t(117),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!t(104)(c)),"Array",{lastIndexOf:function lastIndexOf(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},{104:104,115:115,116:116,117:117,40:40}],143:[function(t,n,r){"use strict";var e=t(40),i=t(20)(1);e(e.P+e.F*!t(104)([].map,!0),"Array",{map:function map(t){return i(this,t,arguments[1])}})},{104:104,20:20,40:40}],144:[function(t,n,r){"use strict";var e=t(40),i=t(31);e(e.S+e.F*t(42)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{of:function of(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},{31:31,40:40,42:42}],145:[function(t,n,r){"use strict";var e=t(40),i=t(21);e(e.P+e.F*!t(104)([].reduceRight,!0),"Array",{reduceRight:function reduceRight(t){return i(this,t,arguments.length,arguments[1],!0)}})},{104:104,21:21,40:40}],146:[function(t,n,r){"use strict";var e=t(40),i=t(21);e(e.P+e.F*!t(104)([].reduce,!0),"Array",{reduce:function reduce(t){return i(this,t,arguments.length,arguments[1],!1)}})},{104:104,21:21,40:40}],147:[function(t,n,r){"use strict";var e=t(40),i=t(49),o=t(26),u=t(113),c=t(117),a=[].slice;e(e.P+e.F*t(42)(function(){i&&a.call(i)}),"Array",{slice:function slice(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return a.call(this,t,n);for(var i=u(t,r),f=u(n,r),s=c(f-i),l=new Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},{113:113,117:117,26:26,40:40,42:42,49:49}],148:[function(t,n,r){"use strict";var e=t(40),i=t(20)(3);e(e.P+e.F*!t(104)([].some,!0),"Array",{some:function some(t){return i(this,t,arguments[1])}})},{104:104,20:20,40:40}],149:[function(t,n,r){"use strict";var e=t(40),i=t(11),o=t(118),u=t(42),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!t(104)(c)),"Array",{sort:function sort(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},{104:104,11:11,118:118,40:40,42:42}],150:[function(t,n,r){t(99)("Array")},{99:99}],151:[function(t,n,r){var e=t(40);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},{40:40}],152:[function(t,n,r){var e=t(40),i=t(33);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},{33:33,40:40}],153:[function(t,n,r){"use strict";var e=t(40),i=t(118),o=t(119);e(e.P+e.F*t(42)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function toJSON(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},{118:118,119:119,40:40,42:42}],154:[function(t,n,r){var e=t(128)("toPrimitive"),i=Date.prototype;e in i||t(48)(i,e,t(34))},{128:128,34:34,48:48}],155:[function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&t(94)(e,"toString",function toString(){var t=o.call(this);return t===t?i.call(this):"Invalid Date"})},{94:94}],156:[function(t,n,r){var e=t(40);e(e.P,"Function",{bind:t(24)})},{24:24,40:40}],157:[function(t,n,r){"use strict";var e=t(57),i=t(81),o=t(128)("hasInstance"),u=Function.prototype;o in u||t(75).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},{128:128,57:57,75:75,81:81}],158:[function(t,n,r){var e=t(75).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||t(36)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},{36:36,75:75}],159:[function(t,n,r){"use strict";var e=t(27),i=t(125);n.exports=t(29)("Map",function(t){return function Map(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function get(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function set(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},{125:125,27:27,29:29}],160:[function(t,n,r){var e=t(40),i=t(68),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function acosh(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},{40:40,68:68}],161:[function(t,n,r){function asinh(t){return isFinite(t=+t)&&0!=t?t<0?-asinh(-t):Math.log(t+Math.sqrt(t*t+1)):t}var e=t(40),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},{40:40}],162:[function(t,n,r){var e=t(40),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function atanh(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},{40:40}],163:[function(t,n,r){var e=t(40),i=t(69);e(e.S,"Math",{cbrt:function cbrt(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},{40:40,69:69}],164:[function(t,n,r){var e=t(40);e(e.S,"Math",{clz32:function clz32(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},{40:40}],165:[function(t,n,r){var e=t(40),i=Math.exp;e(e.S,"Math",{cosh:function cosh(t){return(i(t=+t)+i(-t))/2}})},{40:40}],166:[function(t,n,r){var e=t(40),i=t(66);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},{40:40,66:66}],167:[function(t,n,r){var e=t(40);e(e.S,"Math",{fround:t(67)})},{40:40,67:67}],168:[function(t,n,r){var e=t(40),i=Math.abs;e(e.S,"Math",{hypot:function hypot(t,n){for(var r,e,o=0,u=0,c=arguments.length,a=0;u<c;)r=i(arguments[u++]),a<r?(e=a/r,o=o*e*e+1,a=r):r>0?(e=r/a,o+=e*e):o+=r;return a===1/0?1/0:a*Math.sqrt(o)}})},{40:40}],169:[function(t,n,r){var e=t(40),i=Math.imul;e(e.S+e.F*t(42)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function imul(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},{40:40,42:42}],170:[function(t,n,r){var e=t(40);e(e.S,"Math",{log10:function log10(t){return Math.log(t)*Math.LOG10E}})},{40:40}],171:[function(t,n,r){var e=t(40);e(e.S,"Math",{log1p:t(68)})},{40:40,68:68}],172:[function(t,n,r){var e=t(40);e(e.S,"Math",{log2:function log2(t){return Math.log(t)/Math.LN2}})},{40:40}],173:[function(t,n,r){var e=t(40);e(e.S,"Math",{sign:t(69)})},{40:40,69:69}],174:[function(t,n,r){var e=t(40),i=t(66),o=Math.exp;e(e.S+e.F*t(42)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function sinh(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},{40:40,42:42,66:66}],175:[function(t,n,r){var e=t(40),i=t(66),o=Math.exp;e(e.S,"Math",{tanh:function tanh(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},{40:40,66:66}],176:[function(t,n,r){var e=t(40);e(e.S,"Math",{trunc:function trunc(t){return(t>0?Math.floor:Math.ceil)(t)}})},{40:40}],177:[function(t,n,r){"use strict";var e=t(46),i=t(47),o=t(26),u=t(51),c=t(119),a=t(42),f=t(79).f,s=t(77).f,l=t(75).f,h=t(110).trim,p=e.Number,v=p,d=p.prototype,y="Number"==o(t(74)(d)),g="trim"in String.prototype,x=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=g?n.trim():h(n,3);var r,e,i,o=n.charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),f=0,s=a.length;f<s;f++)if((u=a.charCodeAt(f))<48||u>i)return NaN;return parseInt(a,e)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function Number(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(y?a(function(){d.valueOf.call(r)}):"Number"!=o(r))?u(new v(x(n)),r,p):x(n)};for(var m,b=t(36)?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;b.length>S;S++)i(v,m=b[S])&&!i(p,m)&&l(p,m,s(v,m));p.prototype=d,d.constructor=p,t(94)(e,"Number",p)}},{110:110,119:119,26:26,36:36,42:42,46:46,47:47,51:51,74:74,75:75,77:77,79:79,94:94}],178:[function(t,n,r){var e=t(40);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},{40:40}],179:[function(t,n,r){var e=t(40),i=t(46).isFinite;e(e.S,"Number",{isFinite:function isFinite(t){return"number"==typeof t&&i(t)}})},{40:40,46:46}],180:[function(t,n,r){var e=t(40);e(e.S,"Number",{isInteger:t(56)})},{40:40,56:56}],181:[function(t,n,r){var e=t(40);e(e.S,"Number",{isNaN:function isNaN(t){return t!=t}})},{40:40}],182:[function(t,n,r){var e=t(40),i=t(56),o=Math.abs;e(e.S,"Number",{isSafeInteger:function isSafeInteger(t){return i(t)&&o(t)<=9007199254740991}})},{40:40,56:56}],183:[function(t,n,r){var e=t(40);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},{40:40}],184:[function(t,n,r){var e=t(40);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},{40:40}],185:[function(t,n,r){var e=t(40),i=t(88);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},{40:40,88:88}],186:[function(t,n,r){var e=t(40),i=t(89);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},{40:40,89:89}],187:[function(t,n,r){"use strict";var e=t(40),i=t(115),o=t(12),u=t(109),c=1..toFixed,a=Math.floor,f=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*f[r],f[r]=e%1e7,e=a(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=f[n],f[n]=a(r/t),r=r%t*1e7},p=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==f[t]){var r=String(f[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},v=function(t,n,r){return 0===n?r:n%2==1?v(t,n-1,r*t):v(t*t,n/2,r)},d=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!t(42)(function(){c.call({})})),"Number",{toFixed:function toFixed(t){var n,r,e,c,a=o(this,s),f=i(t),y="",g="0";if(f<0||f>20)throw RangeError(s);if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(y="-",a=-a),a>1e-21)if(n=d(a*v(2,69,1))-69,r=n<0?a*v(2,-n,1):a/v(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=f;e>=7;)l(1e7,0),e-=7;for(l(v(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),g=p()}else l(0,r),l(1<<-n,0),g=p()+u.call("0",f);return f>0?(c=g.length,g=y+(c<=f?"0."+u.call("0",f-c)+g:g.slice(0,c-f)+"."+g.slice(c-f))):g=y+g,g}})},{109:109,115:115,12:12,40:40,42:42}],188:[function(t,n,r){"use strict";var e=t(40),i=t(42),o=t(12),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function toPrecision(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},{12:12,40:40,42:42}],189:[function(t,n,r){var e=t(40);e(e.S+e.F,"Object",{assign:t(73)})},{40:40,73:73}],190:[function(t,n,r){var e=t(40);e(e.S,"Object",{create:t(74)})},{40:40,74:74}],191:[function(t,n,r){var e=t(40);e(e.S+e.F*!t(36),"Object",{defineProperties:t(76)})},{36:36,40:40,76:76}],192:[function(t,n,r){var e=t(40);e(e.S+e.F*!t(36),"Object",{defineProperty:t(75).f})},{36:36,40:40,75:75}],193:[function(t,n,r){var e=t(57),i=t(70).onFreeze;t(85)("freeze",function(t){return function freeze(n){return t&&e(n)?t(i(n)):n}})},{57:57,70:70,85:85}],194:[function(t,n,r){var e=t(116),i=t(77).f;t(85)("getOwnPropertyDescriptor",function(){return function getOwnPropertyDescriptor(t,n){return i(e(t),n)}})},{116:116,77:77,85:85}],195:[function(t,n,r){t(85)("getOwnPropertyNames",function(){return t(78).f})},{78:78,85:85}],196:[function(t,n,r){var e=t(118),i=t(81);t(85)("getPrototypeOf",function(){return function getPrototypeOf(t){return i(e(t))}})},{118:118,81:81,85:85}],197:[function(t,n,r){var e=t(57);t(85)("isExtensible",function(t){return function isExtensible(n){return!!e(n)&&(!t||t(n))}})},{57:57,85:85}],198:[function(t,n,r){var e=t(57);t(85)("isFrozen",function(t){return function isFrozen(n){return!e(n)||!!t&&t(n)}})},{57:57,85:85}],199:[function(t,n,r){var e=t(57);t(85)("isSealed",function(t){return function isSealed(n){return!e(n)||!!t&&t(n)}})},{57:57,85:85}],200:[function(t,n,r){var e=t(40);e(e.S,"Object",{is:t(97)})},{40:40,97:97}],201:[function(t,n,r){var e=t(118),i=t(83);t(85)("keys",function(){return function keys(t){return i(e(t))}})},{118:118,83:83,85:85}],202:[function(t,n,r){var e=t(57),i=t(70).onFreeze;t(85)("preventExtensions",function(t){return function preventExtensions(n){return t&&e(n)?t(i(n)):n}})},{57:57,70:70,85:85}],203:[function(t,n,r){var e=t(57),i=t(70).onFreeze;t(85)("seal",function(t){return function seal(n){return t&&e(n)?t(i(n)):n}})},{57:57,70:70,85:85}],204:[function(t,n,r){var e=t(40);e(e.S,"Object",{setPrototypeOf:t(98).set})},{40:40,98:98}],205:[function(t,n,r){"use strict";var e=t(25),i={};i[t(128)("toStringTag")]="z",i+""!="[object z]"&&t(94)(Object.prototype,"toString",function toString(){return"[object "+e(this)+"]"},!0)},{128:128,25:25,94:94}],206:[function(t,n,r){var e=t(40),i=t(88);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},{40:40,88:88}],207:[function(t,n,r){var e=t(40),i=t(89);e(e.G+e.F*(parseInt!=i),{parseInt:i})},{40:40,89:89}],208:[function(t,n,r){"use strict";var e,i,o,u,c=t(65),a=t(46),f=t(32),s=t(25),l=t(40),h=t(57),p=t(11),v=t(15),d=t(45),y=t(103),g=t(112).set,x=t(71)(),m=t(72),b=t(90),S=t(124),w=t(91),_=a.TypeError,E=a.process,F=E&&E.versions,I=F&&F.v8||"",O=a.Promise,P="process"==s(E),A=function(){},M=i=m.f,k=!!function(){try{var n=O.resolve(1),r=(n.constructor={})[t(128)("species")]=function(t){t(A,A)};return(P||"function"==typeof PromiseRejectionEvent)&&n.then(A)instanceof r&&0!==I.indexOf("6.6")&&-1===S.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},j=function(t,n){if(!t._n){t._n=!0;var r=t._c;x(function(){for(var e=t._v,i=1==t._s,o=0;r.length>o;)!function(n){var r,o,u,c=i?n.ok:n.fail,a=n.resolve,f=n.reject,s=n.domain;try{c?(i||(2==t._h&&R(t),t._h=1),!0===c?r=e:(s&&s.enter(),r=c(e),s&&(s.exit(),u=!0)),r===n.promise?f(_("Promise-chain cycle")):(o=N(r))?o.call(r,a,f):a(r)):f(e)}catch(t){s&&!u&&s.exit(),f(t)}}(r[o++]);t._c=[],t._n=!1,n&&!t._h&&T(t)})}},T=function(t){g.call(a,function(){var n,r,e,i=t._v,o=L(t);if(o&&(n=b(function(){P?E.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=P||L(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},L=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){g.call(a,function(){var n;P?E.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},C=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),j(n,!0))},D=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw _("Promise can't be resolved itself")
;(n=N(t))?x(function(){var e={_w:r,_d:!1};try{n.call(t,f(D,e,1),f(C,e,1))}catch(t){C.call(e,t)}}):(r._v=t,r._s=1,j(r,!1))}catch(t){C.call({_w:r,_d:!1},t)}}};k||(O=function Promise(t){v(this,O,"Promise","_h"),p(t),e.call(this);try{t(f(D,this,1),f(C,this,1))}catch(t){C.call(this,t)}},e=function Promise(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=t(93)(O.prototype,{then:function then(t,n){var r=M(y(this,O));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=P?E.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&j(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=f(D,t,1),this.reject=f(C,t,1)},m.f=M=function(t){return t===O||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!k,{Promise:O}),t(100)(O,"Promise"),t(99)("Promise"),u=t(30).Promise,l(l.S+l.F*!k,"Promise",{reject:function reject(t){var n=M(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!k),"Promise",{resolve:function resolve(t){return w(c&&this===u?O:this,t)}}),l(l.S+l.F*!(k&&t(62)(function(t){O.all(t).catch(A)})),"Promise",{all:function all(t){var n=this,r=M(n),e=r.resolve,i=r.reject,o=b(function(){var r=[],o=0,u=1;d(t,!1,function(t){var c=o++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o.e&&i(o.v),r.promise},race:function race(t){var n=this,r=M(n),e=r.reject,i=b(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},{100:100,103:103,11:11,112:112,124:124,128:128,15:15,25:25,30:30,32:32,40:40,45:45,46:46,57:57,62:62,65:65,71:71,72:72,90:90,91:91,93:93,99:99}],209:[function(t,n,r){var e=t(40),i=t(11),o=t(16),u=(t(46).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!t(42)(function(){u(function(){})}),"Reflect",{apply:function apply(t,n,r){var e=i(t),a=o(r);return u?u(e,n,a):c.call(e,n,a)}})},{11:11,16:16,40:40,42:42,46:46}],210:[function(t,n,r){var e=t(40),i=t(74),o=t(11),u=t(16),c=t(57),a=t(42),f=t(24),s=(t(46).Reflect||{}).construct,l=a(function(){function F(){}return!(s(function(){},[],F)instanceof F)}),h=!a(function(){s(function(){})});e(e.S+e.F*(l||h),"Reflect",{construct:function construct(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(f.apply(t,e))}var a=r.prototype,p=i(c(a)?a:Object.prototype),v=Function.apply.call(t,p,n);return c(v)?v:p}})},{11:11,16:16,24:24,40:40,42:42,46:46,57:57,74:74}],211:[function(t,n,r){var e=t(75),i=t(40),o=t(16),u=t(119);i(i.S+i.F*t(42)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function defineProperty(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},{119:119,16:16,40:40,42:42,75:75}],212:[function(t,n,r){var e=t(40),i=t(77).f,o=t(16);e(e.S,"Reflect",{deleteProperty:function deleteProperty(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},{16:16,40:40,77:77}],213:[function(t,n,r){"use strict";var e=t(40),i=t(16),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};t(60)(o,"Object",function(){var t,n=this,r=n._k;do{if(n._i>=r.length)return{value:void 0,done:!0}}while(!((t=r[n._i++])in n._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function enumerate(t){return new o(t)}})},{16:16,40:40,60:60}],214:[function(t,n,r){var e=t(77),i=t(40),o=t(16);i(i.S,"Reflect",{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(t,n){return e.f(o(t),n)}})},{16:16,40:40,77:77}],215:[function(t,n,r){var e=t(40),i=t(81),o=t(16);e(e.S,"Reflect",{getPrototypeOf:function getPrototypeOf(t){return i(o(t))}})},{16:16,40:40,81:81}],216:[function(t,n,r){function get(t,n){var r,u,f=arguments.length<3?t:arguments[2];return a(t)===f?t[n]:(r=e.f(t,n))?o(r,"value")?r.value:void 0!==r.get?r.get.call(f):void 0:c(u=i(t))?get(u,n,f):void 0}var e=t(77),i=t(81),o=t(47),u=t(40),c=t(57),a=t(16);u(u.S,"Reflect",{get:get})},{16:16,40:40,47:47,57:57,77:77,81:81}],217:[function(t,n,r){var e=t(40);e(e.S,"Reflect",{has:function has(t,n){return n in t}})},{40:40}],218:[function(t,n,r){var e=t(40),i=t(16),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function isExtensible(t){return i(t),!o||o(t)}})},{16:16,40:40}],219:[function(t,n,r){var e=t(40);e(e.S,"Reflect",{ownKeys:t(87)})},{40:40,87:87}],220:[function(t,n,r){var e=t(40),i=t(16),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function preventExtensions(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},{16:16,40:40}],221:[function(t,n,r){var e=t(40),i=t(98);i&&e(e.S,"Reflect",{setPrototypeOf:function setPrototypeOf(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},{40:40,98:98}],222:[function(t,n,r){function set(t,n,r){var c,l,h=arguments.length<4?t:arguments[3],p=i.f(f(t),n);if(!p){if(s(l=o(t)))return set(l,n,r,h);p=a(0)}if(u(p,"value")){if(!1===p.writable||!s(h))return!1;if(c=i.f(h,n)){if(c.get||c.set||!1===c.writable)return!1;c.value=r,e.f(h,n,c)}else e.f(h,n,a(0,r));return!0}return void 0!==p.set&&(p.set.call(h,r),!0)}var e=t(75),i=t(77),o=t(81),u=t(47),c=t(40),a=t(92),f=t(16),s=t(57);c(c.S,"Reflect",{set:set})},{16:16,40:40,47:47,57:57,75:75,77:77,81:81,92:92}],223:[function(t,n,r){var e=t(46),i=t(51),o=t(75).f,u=t(79).f,c=t(58),a=t(44),f=e.RegExp,s=f,l=f.prototype,h=/a/g,p=/a/g,v=new f(h)!==h;if(t(36)&&(!v||t(42)(function(){return p[t(128)("match")]=!1,f(h)!=h||f(p)==p||"/a/i"!=f(h,"i")}))){f=function RegExp(t,n){var r=this instanceof f,e=c(t),o=void 0===n;return!r&&e&&t.constructor===f&&o?t:i(v?new s(e&&!o?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&o?a.call(t):n),r?this:l,f)};for(var d=u(s),y=0;d.length>y;)!function(t){t in f||o(f,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})}(d[y++]);l.constructor=f,f.prototype=l,t(94)(e,"RegExp",f)}t(99)("RegExp")},{128:128,36:36,42:42,44:44,46:46,51:51,58:58,75:75,79:79,94:94,99:99}],224:[function(t,n,r){"use strict";var e=t(96);t(40)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},{40:40,96:96}],225:[function(t,n,r){t(36)&&"g"!=/./g.flags&&t(75).f(RegExp.prototype,"flags",{configurable:!0,get:t(44)})},{36:36,44:44,75:75}],226:[function(t,n,r){"use strict";var e=t(16),i=t(117),o=t(14),u=t(95);t(43)("match",1,function(t,n,r,c){return[function match(r){var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},function(t){var n=c(r,t,this);if(n.done)return n.value;var a=e(t),f=String(this);if(!a.global)return u(a,f);var s=a.unicode;a.lastIndex=0;for(var l,h=[],p=0;null!==(l=u(a,f));){var v=String(l[0]);h[p]=v,""===v&&(a.lastIndex=o(f,i(a.lastIndex),s)),p++}return 0===p?null:h}]})},{117:117,14:14,16:16,43:43,95:95}],227:[function(t,n,r){"use strict";var e=t(16),i=t(118),o=t(117),u=t(115),c=t(14),a=t(95),f=Math.max,s=Math.min,l=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};t(43)("replace",2,function(t,n,r,d){function getSubstitution(t,n,e,o,u,c){var a=e+t.length,f=o.length,s=p;return void 0!==u&&(u=i(u),s=h),r.call(c,s,function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(a);case"<":c=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return i;if(s>f){var h=l(s/10);return 0===h?i:h<=f?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):i}c=o[s-1]}return void 0===c?"":c})}return[function replace(e,i){var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},function(t,n){var i=d(r,t,this,n);if(i.done)return i.value;var l=e(t),h=String(this),p="function"==typeof n;p||(n=String(n));var y=l.global;if(y){var g=l.unicode;l.lastIndex=0}for(var x=[];;){var m=a(l,h);if(null===m)break;if(x.push(m),!y)break;""===String(m[0])&&(l.lastIndex=c(h,o(l.lastIndex),g))}for(var b="",S=0,w=0;w<x.length;w++){m=x[w];for(var _=String(m[0]),E=f(s(u(m.index),h.length),0),F=[],I=1;I<m.length;I++)F.push(v(m[I]));var O=m.groups;if(p){var P=[_].concat(F,E,h);void 0!==O&&P.push(O);var A=String(n.apply(void 0,P))}else A=getSubstitution(_,h,E,F,O,n);E>=S&&(b+=h.slice(S,E)+A,S=E+_.length)}return b+h.slice(S)}]})},{115:115,117:117,118:118,14:14,16:16,43:43,95:95}],228:[function(t,n,r){"use strict";var e=t(16),i=t(97),o=t(95);t(43)("search",1,function(t,n,r,u){return[function search(r){var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},function(t){var n=u(r,t,this);if(n.done)return n.value;var c=e(t),a=String(this),f=c.lastIndex;i(f,0)||(c.lastIndex=0);var s=o(c,a);return i(c.lastIndex,f)||(c.lastIndex=f),null===s?-1:s.index}]})},{16:16,43:43,95:95,97:97}],229:[function(t,n,r){"use strict";var e=t(58),i=t(16),o=t(103),u=t(14),c=t(117),a=t(95),f=t(96),s=Math.min,l=[].push,h="length",p=!!function(){try{return new RegExp("x","y")}catch(t){}}();t(43)("split",2,function(t,n,r,v){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[h]||2!="ab".split(/(?:ab)*/)[h]||4!=".".split(/(.?)(.?)/)[h]||".".split(/()()/)[h]>1||"".split(/.?/)[h]?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!e(t))return r.call(i,t,n);for(var o,u,c,a=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=void 0===n?4294967295:n>>>0,d=new RegExp(t.source,s+"g");(o=f.call(d,i))&&!((u=d.lastIndex)>p&&(a.push(i.slice(p,o.index)),o[h]>1&&o.index<i[h]&&l.apply(a,o.slice(1)),c=o[0][h],p=u,a[h]>=v));)d.lastIndex===o.index&&d.lastIndex++;return p===i[h]?!c&&d.test("")||a.push(""):a.push(i.slice(p)),a[h]>v?a.slice(0,v):a}:"0".split(void 0,0)[h]?function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)}:r,[function split(r,e){var i=t(this),o=void 0==r?void 0:r[n];return void 0!==o?o.call(r,i,e):d.call(String(i),r,e)},function(t,n){var e=v(d,t,this,n,d!==r);if(e.done)return e.value;var f=i(t),l=String(this),h=o(f,RegExp),y=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"y":"g"),x=new h(p?f:"^(?:"+f.source+")",g),m=void 0===n?4294967295:n>>>0;if(0===m)return[];if(0===l.length)return null===a(x,l)?[l]:[];for(var b=0,S=0,w=[];S<l.length;){x.lastIndex=p?S:0;var _,E=a(x,p?l:l.slice(S));if(null===E||(_=s(c(x.lastIndex+(p?0:S)),l.length))===b)S=u(l,S,y);else{if(w.push(l.slice(b,S)),w.length===m)return w;for(var F=1;F<=E.length-1;F++)if(w.push(E[F]),w.length===m)return w;S=b=_}}return w.push(l.slice(b)),w}]})},{103:103,117:117,14:14,16:16,43:43,58:58,95:95,96:96}],230:[function(t,n,r){"use strict";t(225);var e=t(16),i=t(44),o=t(36),u=/./.toString,c=function(n){t(94)(RegExp.prototype,"toString",n,!0)};t(42)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function toString(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=u.name&&c(function toString(){return u.call(this)})},{16:16,225:225,36:36,42:42,44:44,94:94}],231:[function(t,n,r){"use strict";var e=t(27),i=t(125);n.exports=t(29)("Set",function(t){return function Set(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},{125:125,27:27,29:29}],232:[function(t,n,r){"use strict";t(107)("anchor",function(t){return function anchor(n){return t(this,"a","name",n)}})},{107:107}],233:[function(t,n,r){"use strict";t(107)("big",function(t){return function big(){return t(this,"big","","")}})},{107:107}],234:[function(t,n,r){"use strict";t(107)("blink",function(t){return function blink(){return t(this,"blink","","")}})},{107:107}],235:[function(t,n,r){"use strict";t(107)("bold",function(t){return function bold(){return t(this,"b","","")}})},{107:107}],236:[function(t,n,r){"use strict";var e=t(40),i=t(105)(!1);e(e.P,"String",{codePointAt:function codePointAt(t){return i(this,t)}})},{105:105,40:40}],237:[function(t,n,r){"use strict";var e=t(40),i=t(117),o=t(106),u="".endsWith;e(e.P+e.F*t(41)("endsWith"),"String",{endsWith:function endsWith(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),c=void 0===r?e:Math.min(i(r),e),a=String(t);return u?u.call(n,a,c):n.slice(c-a.length,c)===a}})},{106:106,117:117,40:40,41:41}],238:[function(t,n,r){"use strict";t(107)("fixed",function(t){return function fixed(){return t(this,"tt","","")}})},{107:107}],239:[function(t,n,r){"use strict";t(107)("fontcolor",function(t){return function fontcolor(n){return t(this,"font","color",n)}})},{107:107}],240:[function(t,n,r){"use strict";t(107)("fontsize",function(t){return function fontsize(n){return t(this,"font","size",n)}})},{107:107}],241:[function(t,n,r){var e=t(40),i=t(113),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function fromCodePoint(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},{113:113,40:40}],242:[function(t,n,r){"use strict";var e=t(40),i=t(106);e(e.P+e.F*t(41)("includes"),"String",{includes:function includes(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},{106:106,40:40,41:41}],243:[function(t,n,r){"use strict";t(107)("italics",function(t){return function italics(){return t(this,"i","","")}})},{107:107}],244:[function(t,n,r){"use strict";var e=t(105)(!0);t(61)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},{105:105,61:61}],245:[function(t,n,r){"use strict";t(107)("link",function(t){return function link(n){return t(this,"a","href",n)}})},{107:107}],246:[function(t,n,r){var e=t(40),i=t(116),o=t(117);e(e.S,"String",{raw:function raw(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},{116:116,117:117,40:40}],247:[function(t,n,r){var e=t(40);e(e.P,"String",{repeat:t(109)})},{109:109,40:40}],248:[function(t,n,r){"use strict";t(107)("small",function(t){return function small(){return t(this,"small","","")}})},{107:107}],249:[function(t,n,r){"use strict";var e=t(40),i=t(117),o=t(106),u="".startsWith;e(e.P+e.F*t(41)("startsWith"),"String",{startsWith:function startsWith(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},{106:106,117:117,40:40,41:41}],250:[function(t,n,r){"use strict";t(107)("strike",function(t){return function strike(){return t(this,"strike","","")}})},{107:107}],251:[function(t,n,r){"use strict";t(107)("sub",function(t){return function sub(){return t(this,"sub","","")}})},{107:107}],252:[function(t,n,r){"use strict";t(107)("sup",function(t){return function sup(){return t(this,"sup","","")}})},{107:107}],253:[function(t,n,r){"use strict";t(110)("trim",function(t){return function trim(){return t(this,3)}})},{110:110}],254:[function(t,n,r){"use strict";var e=t(46),i=t(47),o=t(36),u=t(40),c=t(94),a=t(70).KEY,f=t(42),s=t(102),l=t(100),h=t(123),p=t(128),v=t(127),d=t(126),y=t(39),g=t(55),x=t(16),m=t(57),b=t(116),S=t(119),w=t(92),_=t(74),E=t(78),F=t(77),I=t(75),O=t(83),P=F.f,A=I.f,M=E.f,k=e.Symbol,N=e.JSON,j=N&&N.stringify,T=p("_hidden"),L=p("toPrimitive"),R={}.propertyIsEnumerable,C=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),W=Object.prototype,U="function"==typeof k,V=e.QObject,B=!V||!V.prototype||!V.prototype.findChild,z=o&&f(function(){return 7!=_(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=P(W,n);e&&delete W[n],A(t,n,r),e&&t!==W&&A(W,n,e)}:A,q=function(t){var n=D[t]=_(k.prototype);return n._k=t,n},Y=U&&"symbol"==typeof k.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof k},K=function defineProperty(t,n,r){return t===W&&K(G,n,r),x(t),n=S(n,!0),x(r),i(D,n)?(r.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),r=_(r,{enumerable:w(0,!1)})):(i(t,T)||A(t,T,w(1,{})),t[T][n]=!0),z(t,n,r)):A(t,n,r)},$=function defineProperties(t,n){x(t);for(var r,e=y(n=b(n)),i=0,o=e.length;o>i;)K(t,r=e[i++],n[r]);return t},J=function create(t,n){return void 0===n?_(t):$(_(t),n)},H=function propertyIsEnumerable(t){var n=R.call(this,t=S(t,!0));return!(this===W&&i(D,t)&&!i(G,t))&&(!(n||!i(this,t)||!i(D,t)||i(this,T)&&this[T][t])||n)},X=function getOwnPropertyDescriptor(t,n){if(t=b(t),n=S(n,!0),t!==W||!i(D,n)||i(G,n)){var r=P(t,n);return!r||!i(D,n)||i(t,T)&&t[T][n]||(r.enumerable=!0),r}},Z=function getOwnPropertyNames(t){for(var n,r=M(b(t)),e=[],o=0;r.length>o;)i(D,n=r[o++])||n==T||n==a||e.push(n);return e},Q=function getOwnPropertySymbols(t){for(var n,r=t===W,e=M(r?G:b(t)),o=[],u=0;e.length>u;)!i(D,n=e[u++])||r&&!i(W,n)||o.push(D[n]);return o};U||(k=function Symbol(){if(this instanceof k)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===W&&n.call(G,r),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),z(this,t,w(1,r))};return o&&B&&z(W,t,{configurable:!0,set:n}),q(t)},c(k.prototype,"toString",function toString(){return this._k}),F.f=X,I.f=K,t(79).f=E.f=Z,t(84).f=H,t(80).f=Q,o&&!t(65)&&c(W,"propertyIsEnumerable",H,!0),v.f=function(t){return q(p(t))}),u(u.G+u.W+u.F*!U,{Symbol:k});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;tt.length>nt;)p(tt[nt++]);for(var rt=O(p.store),et=0;rt.length>et;)d(rt[et++]);u(u.S+u.F*!U,"Symbol",{for:function(t){return i(C,t+="")?C[t]:C[t]=k(t)},keyFor:function keyFor(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var n in C)if(C[n]===t)return n},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!U,"Object",{create:J,defineProperty:K,defineProperties:$,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:Q}),N&&u(u.S+u.F*(!U||f(function(){var t=k();return"[null]"!=j([t])||"{}"!=j({a:t})||"{}"!=j(Object(t))})),"JSON",{stringify:function stringify(t){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);if(r=n=e[1],(m(n)||void 0!==t)&&!Y(t))return g(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!Y(n))return n}),e[1]=n,j.apply(N,e)}}),k.prototype[L]||t(48)(k.prototype,L,k.prototype.valueOf),l(k,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},{100:100,102:102,116:116,119:119,123:123,126:126,127:127,128:128,16:16,36:36,39:39,40:40,42:42,46:46,47:47,48:48,55:55,57:57,65:65,70:70,74:74,75:75,77:77,78:78,79:79,80:80,83:83,84:84,92:92,94:94}],255:[function(t,n,r){"use strict";var e=t(40),i=t(122),o=t(121),u=t(16),c=t(113),a=t(117),f=t(57),s=t(46).ArrayBuffer,l=t(103),h=o.ArrayBuffer,p=o.DataView,v=i.ABV&&s.isView,d=h.prototype.slice,y=i.VIEW;e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function isView(t){return v&&v(t)||f(t)&&y in t}}),e(e.P+e.U+e.F*t(42)(function(){return!new h(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function slice(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(l(this,h))(a(i-e)),f=new p(this),s=new p(o),v=0;e<i;)s.setUint8(v++,f.getUint8(e++));return o}}),t(99)("ArrayBuffer")},{103:103,113:113,117:117,121:121,122:122,16:16,40:40,42:42,46:46,57:57,99:99}],256:[function(t,n,r){var e=t(40);e(e.G+e.W+e.F*!t(122).ABV,{DataView:t(121).DataView})},{121:121,122:122,40:40}],257:[function(t,n,r){t(120)("Float32",4,function(t){return function Float32Array(n,r,e){return t(this,n,r,e)}})},{120:120}],258:[function(t,n,r){t(120)("Float64",8,function(t){return function Float64Array(n,r,e){return t(this,n,r,e)}})},{120:120}],259:[function(t,n,r){t(120)("Int16",2,function(t){return function Int16Array(n,r,e){return t(this,n,r,e)}})},{120:120}],260:[function(t,n,r){t(120)("Int32",4,function(t){return function Int32Array(n,r,e){return t(this,n,r,e)}})},{120:120}],261:[function(t,n,r){t(120)("Int8",1,function(t){return function Int8Array(n,r,e){return t(this,n,r,e)}})},{120:120}],262:[function(t,n,r){t(120)("Uint16",2,function(t){return function Uint16Array(n,r,e){return t(this,n,r,e)}})},{120:120}],263:[function(t,n,r){t(120)("Uint32",4,function(t){return function Uint32Array(n,r,e){return t(this,n,r,e)}})},{120:120}],264:[function(t,n,r){t(120)("Uint8",1,function(t){return function Uint8Array(n,r,e){return t(this,n,r,e)}})},{120:120}],265:[function(t,n,r){t(120)("Uint8",1,function(t){return function Uint8ClampedArray(n,r,e){return t(this,n,r,e)}},!0)},{120:120}],266:[function(t,n,r){"use strict";var e,i=t(20)(0),o=t(94),u=t(70),c=t(73),a=t(28),f=t(57),s=t(42),l=t(125),h=u.getWeak,p=Object.isExtensible,v=a.ufstore,d={},y=function(t){return function WeakMap(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function get(t){if(f(t)){var n=h(t);return!0===n?v(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function set(t,n){return a.def(l(this,"WeakMap"),t,n)}},x=n.exports=t(29)("WeakMap",y,g,a,!0,!0);s(function(){return 7!=(new x).set((Object.freeze||Object)(d),7).get(d)})&&(e=a.getConstructor(y,"WeakMap"),c(e.prototype,g),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=x.prototype,r=n[t];o(n,t,function(n,i){if(f(n)&&!p(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},{125:125,20:20,28:28,29:29,42:42,57:57,70:70,73:73,94:94}],267:[function(t,n,r){"use strict";var e=t(28),i=t(125);t(29)("WeakSet",function(t){return function WeakSet(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function add(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},{125:125,28:28,29:29}],268:[function(t,n,r){"use strict";var e=t(40),i=t(19)(!0);e(e.P,"Array",{includes:function includes(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),t(13)("includes")},{13:13,19:19,40:40}],269:[function(t,n,r){var e=t(40),i=t(86)(!0);e(e.S,"Object",{entries:function entries(t){return i(t)}})},{40:40,86:86}],270:[function(t,n,r){var e=t(40),i=t(87),o=t(116),u=t(77),c=t(31);e(e.S,"Object",{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(t){for(var n,r,e=o(t),a=u.f,f=i(e),s={},l=0;f.length>l;)void 0!==(r=a(e,n=f[l++]))&&c(s,n,r);return s}})},{116:116,31:31,40:40,77:77,87:87}],271:[function(t,n,r){var e=t(40),i=t(86)(!1);e(e.S,"Object",{values:function values(t){return i(t)}})},{40:40,86:86}],272:[function(t,n,r){"use strict";var e=t(40),i=t(30),o=t(46),u=t(103),c=t(91);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},{103:103,30:30,40:40,46:46,91:91}],273:[function(t,n,r){"use strict";var e=t(40),i=t(108),o=t(124);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function padEnd(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},{108:108,124:124,40:40}],274:[function(t,n,r){"use strict";var e=t(40),i=t(108),o=t(124);e(e.P+e.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function padStart(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},{108:108,124:124,40:40}],275:[function(t,n,r){t(126)("asyncIterator")},{126:126}],276:[function(t,n,r){for(var e=t(140),i=t(83),o=t(94),u=t(46),c=t(48),a=t(64),f=t(128),s=f("iterator"),l=f("toStringTag"),h=a.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),d=0;d<v.length;d++){var y,g=v[d],x=p[g],m=u[g],b=m&&m.prototype;if(b&&(b[s]||c(b,s,h),b[l]||c(b,l,g),a[g]=h,x))for(y in e)b[y]||o(b,y,e[y],!0)}},{128:128,140:140,46:46,48:48,64:64,83:83,94:94}],277:[function(t,n,r){var e=t(40),i=t(112);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},{112:112,40:40}],278:[function(t,n,r){var e=t(46),i=t(40),o=t(124),u=[].slice,c=/MSIE .\./.test(o),a=function(t){return function(n,r){var e=arguments.length>2,i=!!e&&u.call(arguments,2);return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,r)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},{124:124,40:40,46:46}],279:[function(t,n,r){t(278),t(277),t(276),n.exports=t(30)},{276:276,277:277,278:278,30:30}],280:[function(t,n,r){!function(t){"use strict";function wrap(t,n,r,e){var i=n&&n.prototype instanceof Generator?n:Generator,o=Object.create(i.prototype),u=new Context(e||[]);return o._invoke=makeInvokeMethod(t,r,u),o}function tryCatch(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function AsyncIterator(t){function invoke(n,r,e,o){var u=tryCatch(t[n],t,r);if("throw"!==u.type){var c=u.arg,a=c.value;return a&&"object"==typeof a&&i.call(a,"__await")?Promise.resolve(a.__await).then(function(t){invoke("next",t,e,o)},function(t){invoke("throw",t,e,o)}):Promise.resolve(a).then(function(t){c.value=t,e(c)},function(t){return invoke("throw",t,e,o)})}o(u.arg)}function enqueue(t,r){function callInvokeWithMethodAndArg(){return new Promise(function(n,e){invoke(t,r,n,e)})}return n=n?n.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}var n;this._invoke=enqueue}function makeInvokeMethod(t,n,r){var e=l;return function invoke(i,o){if(e===p)throw new Error("Generator is already running");if(e===v){if("throw"===i)throw o;return doneResult()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var c=maybeInvokeDelegate(u,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=p;var a=tryCatch(t,n,r);if("normal"===a.type){if(e=r.done?v:h,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=v,r.method="throw",r.arg=a.arg)}}}function maybeInvokeDelegate(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,maybeInvokeDelegate(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=tryCatch(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function pushTryEntry(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function resetTryEntry(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function next(){for(;++e<t.length;)if(i.call(t,e))return next.value=t[e],next.done=!1,next;return next.value=r,next.done=!0,next};return o.next=o}}return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,e=Object.prototype,i=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag",f="object"==typeof n,s=t.regeneratorRuntime;if(s)return void(f&&(n.exports=s));s=t.regeneratorRuntime=f?n.exports:{},s.wrap=wrap;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={},y={};y[u]=function(){return this};var g=Object.getPrototypeOf,x=g&&g(g(values([])));x&&x!==e&&i.call(x,u)&&(y=x);var m=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(y);GeneratorFunction.prototype=m.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[a]=GeneratorFunction.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===GeneratorFunction||"GeneratorFunction"===(n.displayName||n.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},s.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[c]=function(){return this},s.AsyncIterator=AsyncIterator,s.async=function(t,n,r,e){var i=new AsyncIterator(wrap(t,n,r,e));return s.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},defineIteratorMethods(m),m[a]="Generator",m[u]=function(){return this},m.toString=function(){return"[object Generator]"},s.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function next(){for(;n.length;){var r=n.pop();if(r in t)return next.value=r,next.done=!1,next}return next.done=!0,next}},s.values=values,Context.prototype={constructor:Context,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(resetTryEntry),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function handle(e,i){return u.type="throw",u.arg=t,n.next=e,i&&(n.method="next",n.arg=r),!!i}if(this.done)throw t;for(var n=this,e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e],u=o.completion;if("root"===o.tryLoc)return handle("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),a=i.call(o,"finallyLoc");if(c&&a){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var o=e;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;resetTryEntry(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){
return this.delegate={iterator:values(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},{}]},{},[1]);

/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue = factory());
}(this, (function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : typeof val === 'object'
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = /[^\w.$]/;
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm || {};
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // the current target watcher being evaluated.
  // this is globally unique because there could be only one
  // watcher being evaluated at any time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    return childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!/^[a-zA-Z][\w-]*$/.test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'can only contain alphanumeric characters and the hyphen, ' +
        'and must start with a letter.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def = dirs[key];
        if (typeof def === 'function') {
          dirs[key] = { bind: def, update: def };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);
    
    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        logError(e, null, 'config.errorHandler');
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using both microtasks and (macro) tasks.
  // In < 2.4 we used microtasks everywhere, but there are some scenarios where
  // microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690) or even between bubbling of the same
  // event (#6566). However, using (macro) tasks everywhere also has subtle problems
  // when state is changed right before repaint (e.g. #6813, out-in transitions).
  // Here we use microtask by default, but expose a way to force (macro) task when
  // needed (e.g. in event handlers attached by v-on).
  var microTimerFunc;
  var macroTimerFunc;
  var useMacroTask = false;

  // Determine (macro) task defer implementation.
  // Technically setImmediate should be the ideal choice, but it's only available
  // in IE. The only polyfill that consistently queues the callback after all DOM
  // events triggered in the same loop is by using MessageChannel.
  /* istanbul ignore if */
  if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    macroTimerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else if (typeof MessageChannel !== 'undefined' && (
    isNative(MessageChannel) ||
    // PhantomJS
    MessageChannel.toString() === '[object MessageChannelConstructor]'
  )) {
    var channel = new MessageChannel();
    var port = channel.port2;
    channel.port1.onmessage = flushCallbacks;
    macroTimerFunc = function () {
      port.postMessage(1);
    };
  } else {
    /* istanbul ignore next */
    macroTimerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  // Determine microtask defer implementation.
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    microTimerFunc = function () {
      p.then(flushCallbacks);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else {
    // fallback to macro
    microTimerFunc = macroTimerFunc;
  }

  /**
   * Wrap a function so that if any code inside triggers state change,
   * the changes are queued using a (macro) task instead of a microtask.
   */
  function withMacroTask (fn) {
    return fn._withTask || (fn._withTask = function () {
      useMacroTask = true;
      try {
        return fn.apply(null, arguments)
      } finally {
        useMacroTask = false;    
      }
    })
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      if (useMacroTask) {
        macroTimerFunc();
      } else {
        microTimerFunc();
      }
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        perf.clearMeasures(name);
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          cloned[i].apply(null, arguments$1);
        }
      } else {
        // return handler return value for single handlers
        return fns.apply(null, arguments)
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor,
    context
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (isDef(factory.contexts)) {
      // already pending
      factory.contexts.push(context);
    } else {
      var contexts = factory.contexts = [context];
      var sync = true;

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = contexts.length; i < l; i++) {
          contexts[i].$forceUpdate();
        }

        if (renderCompleted) {
          contexts.length = 0;
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (typeof res.then === 'function') {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isDef(res.component) && typeof res.component.then === 'function') {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              setTimeout(function () {
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            setTimeout(function () {
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$off(event[i], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      if (fn) {
        // specific handler
        var cb;
        var i$1 = cbs.length;
        while (i$1--) {
          cb = cbs[i$1];
          if (cb === fn || cb.fn === fn) {
            cbs.splice(i$1, 1);
            break
          }
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          try {
            cbs[i].apply(vm, args);
          } catch (e) {
            handleError(e, vm, ("event handler for \"" + event + "\""));
          }
        }
      }
      return vm
    };
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    var slots = {};
    if (!children) {
      return slots
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  function resolveScopedSlots (
    fns, // see flow/vnode
    res
  ) {
    res = res || {};
    for (var i = 0; i < fns.length; i++) {
      if (Array.isArray(fns[i])) {
        resolveScopedSlots(fns[i], res);
      } else {
        res[fns[i].key] = fns[i].fn;
      }
    }
    return res
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren
    var hasChildren = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      parentVnode.data.scopedSlots || // has new scoped slots
      vm.$scopedSlots !== emptyObject // has old scoped slots
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        try {
          handlers[i].call(vm);
        } catch (e) {
          handleError(e, vm, (hook + " hook"));
        }
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$1 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$1; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          if (!(key in hash) && !(camelizedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + camelizedKey)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () { return resolveSlots(children, parent); };

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = data.scopedSlots || emptyObject;
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.props || (data.props = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var extended = Ctor.extendOptions;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
      }
    }
    return modified
  }

  function dedupe (latest, extended, sealed) {
    // compare latest and sealed to ensure lifecycle hooks won't be duplicated
    // between merges
    if (Array.isArray(latest)) {
      var res = [];
      sealed = Array.isArray(sealed) ? sealed : [sealed];
      extended = Array.isArray(extended) ? extended : [extended];
      for (var i = 0; i < latest.length; i++) {
        // push original options and not sealed options to exclude duplicated options
        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
          res.push(latest[i]);
        }
      }
      return res
    } else {
      return latest
    }
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.5.21';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
        key === 'placeholder' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */

  function baseWarn (msg) {
    console.error(("[Vue compiler]: " + msg));
  }

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value) {
    (el.props || (el.props = [])).push({ name: name, value: value });
    el.plain = false;
  }

  function addAttr (el, name, value) {
    (el.attrs || (el.attrs = [])).push({ name: name, value: value });
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value) {
    el.attrsMap[name] = value;
    el.attrsList.push({ name: name, value: value });
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    modifiers
  ) {
    (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
    el.plain = false;
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.'
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (name === 'click') {
      if (modifiers.right) {
        name = 'contextmenu';
        delete modifiers.right;
      } else if (modifiers.middle) {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = '!' + name; // mark the event as captured
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = '~' + name; // mark the event as once
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = '&' + name; // mark the event as passive
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = {
      value: value.trim()
    };
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead."
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.'
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally'
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  function add$1 (
    event,
    handler,
    capture,
    passive
  ) {
    handler = withMacroTask(handler);
    target$1.addEventListener(
      event,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    event,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      event,
      handler._withTask || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (isUndef(props[key])) {
        elm[key] = '';
      }
    }
    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else {
        elm[key] = cur;
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.lazy) {
        // inputs with lazy should only be updated when not in focus
        return false
      }
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(name, val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      transitionNode = transitionNode.parent;
      context = transitionNode.context;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else if (
          isChrome
        ) {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.'
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.'
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  // could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
  // but for Vue templates we can enforce a simple charset
  var ncname = '[a-zA-Z_][\\w\\-\\.]*';
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t'
  };
  var encodedAttr = /&(?:lt|gt|quot|amp);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd));
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
          advance(textEnd);
        }

        if (textEnd < 0) {
          text = html;
          html = '';
        }

        if (options.chars && text) {
          options.chars(text);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
          advance(attr[0].length);
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag.")
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^v-bind:/;
  var modifierRE = /\.[^.]+/g;

  var decodeHTMLCached = cached(he.decode);

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;



  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg) {
      if (!warned) {
        warned = true;
        warn$2(msg);
      }
    }

    function closeElement (element) {
      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      start: function start (tag, attrs, unary) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.'
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
          // element-scope stuff
          processElement(element, options);
        }

        function checkRootConstraints (el) {
          {
            if (el.tag === 'slot' || el.tag === 'template') {
              warnOnce(
                "Cannot use <" + (el.tag) + "> as component root element because it may " +
                'contain multiple nodes.'
              );
            }
            if (el.attrsMap.hasOwnProperty('v-for')) {
              warnOnce(
                'Cannot use v-for on stateful component root element because ' +
                'it renders multiple elements.'
              );
            }
          }
        }

        // tree management
        if (!root) {
          root = element;
          checkRootConstraints(root);
        } else if (!stack.length) {
          // allow root elements with v-if, v-else-if and v-else
          if (root.if && (element.elseif || element.else)) {
            checkRootConstraints(element);
            addIfCondition(root, {
              exp: element.elseif,
              block: element
            });
          } else {
            warnOnce(
              "Component template should contain exactly one root element. " +
              "If you are using v-if on multiple elements, " +
              "use v-else-if to chain them instead."
            );
          }
        }
        if (currentParent && !element.forbidden) {
          if (element.elseif || element.else) {
            processIfConditions(element, currentParent);
          } else if (element.slotScope) { // scoped slot
            currentParent.plain = false;
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          } else {
            currentParent.children.push(element);
            element.parent = currentParent;
          }
        }
        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end () {
        // remove trailing whitespace
        var element = stack[stack.length - 1];
        var lastNode = element.children[element.children.length - 1];
        if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
          element.children.pop();
        }
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        closeElement(element);
      },

      chars: function chars (text) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.'
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored.")
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        text = inPre || text.trim()
          ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
          // only preserve whitespace if its not right after a starting tag
          : preserveWhitespace && children.length ? ' ' : '';
        if (text) {
          var res;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            children.push({
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            });
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            children.push({
              type: 3,
              text: text
            });
          }
        }
      },
      comment: function comment (text) {
        currentParent.children.push({
          type: 3,
          text: text,
          isComment: true
        });
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var l = el.attrsList.length;
    if (l) {
      var attrs = el.attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        attrs[i] = {
          name: el.attrsList[i].name,
          value: JSON.stringify(el.attrsList[i].value)
        };
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (element, options) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = !element.key && !element.attrsList.length;

    processRef(element);
    processSlot(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2("<template> cannot be keyed. Place the key on real elements instead.");
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys."
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp)
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if."
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored."
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  function processSlot (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead."
        );
      }
    } else {
      var slotScope;
      if (el.tag === 'template') {
        slotScope = getAndRemoveAttr(el, 'scope');
        /* istanbul ignore if */
        if (slotScope) {
          warn$2(
            "the \"scope\" attribute for scoped slots have been deprecated and " +
            "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
            "can also be used on plain elements in addition to <template> to " +
            "denote scoped slots.",
            true
          );
        }
        el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
      } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
        /* istanbul ignore if */
        if (el.attrsMap['v-for']) {
          warn$2(
            "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
            "(v-for takes higher priority). Use a wrapper <template> for the " +
            "scoped slot to make it clearer.",
            true
          );
        }
        el.slotScope = slotScope;
      }
      var slotTarget = getBindingAttr(el, 'slot');
      if (slotTarget) {
        el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
        // preserve slot as an attribute for native shadow DOM compat
        // only for non-scoped slots.
        if (el.tag !== 'template' && !el.slotScope) {
          addAttr(el, 'slot', slotTarget);
        }
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, isProp;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name);
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isProp = false;
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop) {
              isProp = true;
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                genAssignmentCode(value, "$event")
              );
            }
          }
          if (isProp || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value);
          } else {
            addAttr(el, name, value);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          addHandler(el, name, value, modifiers, false, warn$2);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
          }
          addDirective(el, name, rawName, value, arg, modifiers);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.'
            );
          }
        }
        addAttr(el, name, JSON.stringify(value));
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true');
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead."
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var res = isNative ? 'nativeOn:{' : 'on:{';
    for (var name in events) {
      res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
    }
    return res.slice(0, -1) + '}'
  }

  function genHandler (
    name,
    handler
  ) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. "
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:{" + (genProps(el.attrs)) + "},";
    }
    // DOM props
    if (el.props) {
      data += "domProps:{" + (genProps(el.props)) + "},";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn('Inline-template components must have exactly one child element.');
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    slots,
    state
  ) {
    return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
        return genScopedSlot(key, slots[key], state)
      }).join(',')) + "])")
  }

  function genScopedSlot (
    key,
    el,
    state
  ) {
    if (el.for && !el.forProcessed) {
      return genForScopedSlot(key, el, state)
    }
    var fn = "function(" + (String(el.slotScope)) + "){" +
      "return " + (el.tag === 'template'
        ? el.if
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    return ("{key:" + key + ",fn:" + fn + "}")
  }

  function genForScopedSlot (
    key,
    el,
    state
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
    el.forProcessed = true; // avoid recursion
    return "_l((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + (genScopedSlot(key, el, state)) +
      '})'
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var res = '';
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      /* istanbul ignore if */
      {
        res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
      }
    }
    return res.slice(0, -1)
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */

  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast) {
    var errors = [];
    if (ast) {
      checkNode(ast, errors);
    }
    return errors
  }

  function checkNode (node, errors) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), errors);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), errors);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), errors);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], errors);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, errors);
    }
  }

  function checkEvent (exp, text, errors) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      errors.push(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    }
    checkExpression(exp, text, errors);
  }

  function checkFor (node, text, errors) {
    checkExpression(node.for || '', text, errors);
    checkIdentifier(node.alias, 'v-for alias', text, errors);
    checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
    checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    errors
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
      }
    }
  }

  function checkExpression (exp, text, errors) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        errors.push(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
        );
      } else {
        errors.push(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n"
        );
      }
    }
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
        if (compiled.tips && compiled.tips.length) {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];
        finalOptions.warn = function (msg, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        var compiled = baseCompile(template, finalOptions);
        {
          errors.push.apply(errors, detectErrors(compiled.ast));
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

})));

(function(t,e){typeof exports==="object"&&typeof module!=="undefined"?module.exports=e():typeof define==="function"&&define.amd?define(e):t.bootstrapVue=e()})(this,function(){"use strict";var t=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){for(var r in e=arguments[i]){Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}}return t};function e(){for(var e,i,n={},r=arguments.length;r--;){for(var a=0,s=Object.keys(arguments[r]);a<s.length;a++){switch(e=s[a]){case"class":case"style":case"directives":Array.isArray(n[e])||(n[e]=[]),n[e]=n[e].concat(arguments[r][e]);break;case"staticClass":if(!arguments[r][e])break;void 0===n[e]&&(n[e]=""),n[e]&&(n[e]+=" "),n[e]+=arguments[r][e].trim();break;case"on":case"nativeOn":n[e]||(n[e]={});for(var o=0,l=Object.keys(arguments[r][e]||{});o<l.length;o++){i=l[o],n[e][i]?n[e][i]=[].concat(n[e][i],arguments[r][e][i]):n[e][i]=arguments[r][e][i]}break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[e]||(n[e]={}),n[e]=t({},arguments[r][e],n[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[e]||(n[e]=arguments[r][e])}}}return n}var i=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var n=function(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}};var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}return function(e,i,n){if(i)t(e.prototype,i);if(n)t(e,n);return e}}();var a=function(t,e,i){if(e in t){Object.defineProperty(t,e,{value:i,enumerable:true,configurable:true,writable:true})}else{t[e]=i}return t};var s=function(t,e){if(typeof e!=="function"&&e!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof e)}t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:false,writable:true,configurable:true}});if(e)Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e};var o=function(t,e){if(!t){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e&&(typeof e==="object"||typeof e==="function")?e:t};var l=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}else{return Array.from(t)}};var u={disabled:{type:Boolean,default:false},ariaLabel:{type:String,default:"Close"},textVariant:{type:String,default:null}};var f={functional:true,props:u,render:function t(i,n){var r=n.props,s=n.data,o=n.listeners,l=n.slots;var u={staticClass:"close",class:a({},"text-"+r.textVariant,r.textVariant),attrs:{type:"button",disabled:r.disabled,"aria-label":r.ariaLabel?String(r.ariaLabel):null},on:{click:function t(e){if(r.disabled&&e instanceof Event){e.stopPropagation();e.preventDefault()}}}};if(!l().default){u.domProps={innerHTML:"&times;"}}return i("button",e(s,u),l().default)}};var d={components:{bButtonClose:f},render:function t(e){if(!this.localShow){return e(false)}var i=e(false);if(this.dismissible){i=e("b-button-close",{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.$slots.dismiss])}var n=e("div",{class:this.classObject,attrs:{role:"alert","aria-live":"polite","aria-atomic":true}},[i,this.$slots.default]);return!this.fade?n:e("transition",{props:{name:"fade",appear:true}},[n])},model:{prop:"show",event:"input"},data:function t(){return{countDownTimerId:null,dismissed:false}},computed:{classObject:function t(){return["alert",this.alertVariant,this.dismissible?"alert-dismissible":""]},alertVariant:function t(){var e=this.variant;return"alert-"+e},localShow:function t(){return!this.dismissed&&(this.countDownTimerId||this.show)}},props:{variant:{type:String,default:"info"},dismissible:{type:Boolean,default:false},dismissLabel:{type:String,default:"Close"},show:{type:[Boolean,Number],default:false},fade:{type:Boolean,default:false}},watch:{show:function t(){this.showChanged()}},mounted:function t(){this.showChanged()},destroyed:function t(){this.clearCounter()},methods:{dismiss:function t(){this.clearCounter();this.dismissed=true;this.$emit("dismissed");this.$emit("input",false);if(typeof this.show==="number"){this.$emit("dismiss-count-down",0);this.$emit("input",0)}else{this.$emit("input",false)}},clearCounter:function t(){if(this.countDownTimerId){clearInterval(this.countDownTimerId);this.countDownTimerId=null}},showChanged:function t(){var e=this;this.clearCounter();this.dismissed=false;if(this.show===true||this.show===false||this.show===null||this.show===0){return}var i=this.show;this.countDownTimerId=setInterval(function(){if(i<1){e.dismiss();return}i--;e.$emit("dismiss-count-down",i);e.$emit("input",i)},1e3)}}};function c(t,e,i){t._bootstrap_vue_components_=t._bootstrap_vue_components_||{};var n=t._bootstrap_vue_components_[e];if(!n&&i&&e){t._bootstrap_vue_components_[e]=true;t.component(e,i)}return n}function h(t,e){for(var i in e){c(t,i,e[i])}}function p(t,e,i){t._bootstrap_vue_directives_=t._bootstrap_vue_directives_||{};var n=t._bootstrap_vue_directives_[e];if(!n&&i&&e){t._bootstrap_vue_directives_[e]=true;t.directive(e,i)}return n}function v(t,e){for(var i in e){p(t,i,e[i])}}function g(t){if(typeof window!=="undefined"&&window.Vue){window.Vue.use(t)}}var m={bAlert:d};var b={install:function t(e){h(e,m)}};g(b);if(typeof Object.assign!=="function"){Object.assign=function(t,e){if(t==null){throw new TypeError("Cannot convert undefined or null to object")}var i=Object(t);for(var n=1;n<arguments.length;n++){var r=arguments[n];if(r!=null){for(var a in r){if(Object.prototype.hasOwnProperty.call(r,a)){i[a]=r[a]}}}}return i}}if(!Object.is){Object.is=function(t,e){if(t===e){return t!==0||1/t===1/e}else{return t!==t&&e!==e}}}var y=Object.assign;var S=Object.keys;var w=Object.defineProperties;var k=Object.defineProperty;var T=Object.create;function _(){return{enumerable:true,configurable:false,writable:false}}if(!Array.from){Array.from=function(){var t=Object.prototype.toString;var e=function e(i){return typeof i==="function"||t.call(i)==="[object Function]"};var i=function t(e){var i=Number(e);if(isNaN(i)){return 0}if(i===0||!isFinite(i)){return i}return(i>0?1:-1)*Math.floor(Math.abs(i))};var n=Math.pow(2,53)-1;var r=function t(e){return Math.min(Math.max(i(e),0),n)};return function t(i){var n=this;var a=Object(i);if(i==null){throw new TypeError("Array.from requires an array-like object - not null or undefined")}var s=arguments.length>1?arguments[1]:void undefined;var o=void 0;if(typeof s!=="undefined"){if(!e(s)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){o=arguments[2]}}var l=r(a.length);var u=e(n)?Object(new n(l)):new Array(l);var f=0;var d=void 0;while(f<l){d=a[f];if(s){u[f]=typeof o==="undefined"?s(d,f):s.call(o,d,f)}else{u[f]=d}f+=1}u.length=l;return u}}()}if(!Array.prototype.find){Object.defineProperty(Array.prototype,"find",{value:function t(e){if(this==null){throw new TypeError('"this" is null or not defined')}var i=Object(this);var n=i.length>>>0;if(typeof e!=="function"){throw new TypeError("predicate must be a function")}var r=arguments[1];var a=0;while(a<n){var s=i[a];if(e.call(r,s,a,i)){return s}a++}return undefined}})}if(!Array.isArray){Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}var $=Array.from;var C=Array.isArray;var B=function t(e,i){return e.indexOf(i)!==-1};function x(){return Array.prototype.concat.apply([],arguments)}function E(t){return t}function O(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:E;return(C(t)?t.slice():S(t)).reduce(function(t,n){return t[i(n)]=e[n],t},{})}function P(){return{href:{type:String,default:null},rel:{type:String,default:null},target:{type:String,default:"_self"},active:{type:Boolean,default:false},activeClass:{type:String,default:"active"},append:{type:Boolean,default:false},disabled:{type:Boolean,default:false},event:{type:[String,Array],default:"click"},exact:{type:Boolean,default:false},exactActiveClass:{type:String,default:"active"},replace:{type:Boolean,default:false},routerTag:{type:String,default:"a"},to:{type:[String,Object],default:null}}}function I(t){var e=P();t=x(t);return S(e).reduce(function(i,n){if(B(t,n)){i[n]=e[n]}return i},{})}function L(t,e){return Boolean(e.$router)&&t.to&&!t.disabled?"router-link":"a"}function F(t,e){var n=t.disabled,r=t.href,a=t.to;if(e==="router-link")return void 0;if(r)return r;if(a){if(typeof a==="string")return a;if((typeof a==="undefined"?"undefined":i(a))==="object"&&typeof a.path==="string")return a.path}return"#"}function N(t){var e=t.target,i=t.rel;if(e==="_blank"&&i===null){return"noopener"}return i||null}function A(t){var e=t.disabled,i=t.tag,n=t.href,r=t.suppliedHandler,a=t.parent;var s=i==="router-link";return function t(i){if(e&&i instanceof Event){i.stopPropagation();i.stopImmediatePropagation()}else{a.$root.$emit("clicked::link",i);if(s&&i.target.__vue__){i.target.__vue__.$emit("click",i)}if(typeof r==="function"){r.apply(undefined,arguments)}}if(!s&&n==="#"||e){i.preventDefault()}}}var D={functional:true,props:P(),render:function t(i,n){var r=n.props,a=n.data,s=n.parent,o=n.children;var l=L(r,s);var u=N(r);var f=F(r,l);var d=l==="router-link"?"nativeOn":"on";var c=(a[d]||{}).click;var h={click:A({tag:l,href:f,disabled:r.disabled,suppliedHandler:c,parent:s})};var p=e(a,{class:[r.active?r.exact?r.exactActiveClass:r.activeClass:null,{disabled:r.disabled}],attrs:{rel:u,href:f,target:r.target,tabindex:r.disabled?"-1":a.attrs?a.attrs.tabindex:null,"aria-disabled":l==="a"&&r.disabled?"true":null},props:y(r,{tag:r.routerTag})});if(!p.attrs.href){delete p.attrs.href}p[d]=y(p[d]||{},h);return i(l,p,o)}};var V=P();delete V.href.default;delete V.to.default;var M=y(V,{tag:{type:String,default:"span"},variant:{type:String,default:"secondary"},pill:{type:Boolean,default:false}});var j={functional:true,props:M,render:function t(i,n){var r=n.props,a=n.data,s=n.children;var o=!r.href&&!r.to?r.tag:D;var l={staticClass:"badge",class:[!r.variant?"badge-secondary":"badge-"+r.variant,{"badge-pill":Boolean(r.pill),active:r.active,disabled:r.disabled}],props:O(V,r)};return i(o,e(a,l),s)}};var R={bBadge:j};var H={install:function t(e){h(e,R)}};g(H);var z=y(P(),{text:{type:String,default:null},active:{type:Boolean,default:false},href:{type:String,default:"#"},ariaCurrent:{type:String,default:"location"}});var W={functional:true,props:z,render:function t(i,n){var r=n.props,a=n.data,s=n.children;var o=r.active?"span":D;var l={props:O(z,r)};if(r.active){l.attrs={"aria-current":r.ariaCurrent}}else{l.attrs={href:r.href}}return i(o,e(a,l),s||r.text)}};var G=y({},z,{text:{type:String,default:null},href:{type:String,default:null}});var U={functional:true,props:G,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i("li",e(a,{staticClass:"breadcrumb-item",class:{active:r.active},attrs:{role:"presentation"}}),[i(W,{props:r},s)])}};var q={items:{type:Array,default:null}};var K={functional:true,props:q,render:function t(n,r){var a=r.props,s=r.data,o=r.children;var l=o;if(C(a.items)){var u=false;l=a.items.map(function(t,e){if((typeof t==="undefined"?"undefined":i(t))!=="object"){t={text:t}}var r=t.active;if(r){u=true}if(!r&&!u){r=e+1===a.items.length}return n(U,{props:y({},t,{active:r})})})}return n("ol",e(s,{staticClass:"breadcrumb"}),l)}};var Y={bBreadcrumb:K,bBreadcrumbItem:U,bBreadcrumbLink:W};var Z={install:function t(e){h(e,Y)}};g(Z);var X=function t(e){return e&&e.nodeType===Node.ELEMENT_NODE};var J=function t(e){return X(e)&&document.body.contains(e)&&e.getBoundingClientRect().height>0&&e.getBoundingClientRect().width>0};var Q=function t(e){return!X(e)||e.disabled||e.classList.contains("disabled")||Boolean(e.getAttribute("disabled"))};var tt=function t(e){return X(e)&&e.offsetHeight};var et=function t(e,i){if(!X(i)){i=document}return $(i.querySelectorAll(e))};var it=function t(e,i){if(!X(i)){i=document}return i.querySelector(e)||null};var nt=function t(e,i){if(!X(e)){return false}var n=Element.prototype;var r=n.matches||n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector||function(t){var e=this;var i=et(t,e.document||e.ownerDocument);var n=i.length;while(--n>=0&&i.item(n)!==e){}return n>-1};return r.call(e,i)};var rt=function t(e,i){if(!X(i)){return null}var n=Element.prototype.closest||function(t){var e=this;if(!document.documentElement.contains(e)){return null}do{if(nt(e,t)){return e}e=e.parentElement}while(e!==null);return null};var r=n.call(i,e);return r===i?null:r};var at=function t(e){return document.getElementById(/^#/.test(e)?e.slice(1):e)||null};var st=function t(e,i){if(i&&X(e)){e.classList.add(i)}};var ot=function t(e,i){if(i&&X(e)){e.classList.remove(i)}};var lt=function t(e,i){if(i&&X(e)){return e.classList.contains(i)}return false};var ut=function t(e,i,n){if(i&&X(e)){e.setAttribute(i,n)}};var ft=function t(e,i){if(i&&X(e)){e.removeAttribute(i)}};var dt=function t(e,i){if(i&&X(e)){return e.getAttribute(i)}return null};var ct=function t(e,i){if(i&&X(e)){return e.hasAttribute(i)}return null};var ht=function t(e){return X(e)?e.getBoundingClientRect():null};var pt=function t(e){return X(e)?window.getComputedStyle(e):{}};var vt=function t(e){if(X(e)){if(!e.getClientRects().length){return{top:0,left:0}}var i=ht(e);var n=e.ownerDocument.defaultView;return{top:i.top+n.pageYOffset,left:i.left+n.pageXOffset}}};var gt=function t(e){if(!X(e)){return}var i={top:0,left:0};var n=void 0;var r=void 0;if(pt(e).position==="fixed"){n=ht(e)}else{n=vt(e);var a=e.ownerDocument;r=e.offsetParent||a.documentElement;while(r&&(r===a.body||r===a.documentElement)&&pt(r).position==="static"){r=r.parentNode}if(r&&r!==e&&r.nodeType===Node.ELEMENT_NODE){i=vt(r);i.top+=parseFloat(pt(r).borderTopWidth);i.left+=parseFloat(pt(r).borderLeftWidth)}}return{top:n.top-i.top-parseFloat(pt(e).marginTop),left:n.left-i.left-parseFloat(pt(e).marginLeft)}};var mt=function t(e,i,n){if(e&&e.addEventListener){e.addEventListener(i,n)}};var bt=function t(e,i,n){if(e&&e.removeEventListener){e.removeEventListener(i,n)}};var yt={block:{type:Boolean,default:false},disabled:{type:Boolean,default:false},size:{type:String,default:null},variant:{type:String,default:null},type:{type:String,default:"button"},pressed:{type:Boolean,default:null}};var St=P();delete St.href.default;delete St.to.default;var wt=S(St);var kt=y(St,yt);function Tt(t){if(t.type==="focusin"){st(t.target,"focus")}else if(t.type==="focusout"){ot(t.target,"focus")}}var _t={functional:true,props:kt,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.listeners,u=n.children;var f=Boolean(s.href||s.to);var d=typeof s.pressed==="boolean";var c={click:function t(e){if(s.disabled&&e instanceof Event){e.stopPropagation();e.preventDefault()}else if(d){x(l["update:pressed"]).forEach(function(t){if(typeof t==="function"){t(!s.pressed)}})}}};if(d){c.focusin=Tt;c.focusout=Tt}var h={staticClass:"btn",class:[s.variant?"btn-"+s.variant:"btn-secondary",(r={},a(r,"btn-"+s.size,Boolean(s.size)),a(r,"btn-block",s.block),a(r,"disabled",s.disabled),a(r,"active",s.pressed),r)],props:f?O(wt,s):null,attrs:{type:f?null:s.type,disabled:f?null:s.disabled,"data-toggle":d?"button":null,"aria-pressed":d?String(s.pressed):null,tabindex:s.disabled&&f?"-1":o.attrs?o.attrs["tabindex"]:null},on:c};return i(f?D:"button",e(o,h),u)}};var $t={bButton:_t,bBtn:_t,bButtonClose:f,bBtnClose:f};var Ct={install:function t(e){h(e,$t)}};g(Ct);var Bt={vertical:{type:Boolean,default:false},size:{type:String,default:null,validator:function t(e){return B(["sm","","lg"],e)}},tag:{type:String,default:"div"},ariaRole:{type:String,default:"group"}};var xt={functional:true,props:Bt,render:function t(i,n){var r=n.props,s=n.data,o=n.children;return i(r.tag,e(s,{class:a({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-"+r.size,Boolean(r.size)),attrs:{role:r.ariaRole}}),o)}};var Et={bButtonGroup:xt,bBtnGroup:xt};var Ot={install:function t(e){h(e,Et)}};g(Ot);var Pt={SPACE:32,ENTER:13,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35};var It=[".btn:not(.disabled):not([disabled]):not(.dropdown-item)",".form-control:not(.disabled):not([disabled])","select:not(.disabled):not([disabled])",'input[type="checkbox"]:not(.disabled)','input[type="radio"]:not(.disabled)'].join(",");var Lt={render:function t(e){return e("div",{class:this.classObject,attrs:{role:"toolbar",tabindex:this.keyNav?"0":null},on:{focusin:this.onFocusin,keydown:this.onKeydown}},[this.$slots.default])},computed:{classObject:function t(){return["btn-toolbar",this.justify&&!this.vertical?"justify-content-between":""]}},props:{justify:{type:Boolean,default:false},keyNav:{type:Boolean,default:false}},methods:{onFocusin:function t(e){if(e.target===this.$el){e.preventDefault();e.stopPropagation();this.focusFirst(e)}},onKeydown:function t(e){if(!this.keyNav){return}var i=e.keyCode;var n=e.shiftKey;if(i===Pt.UP||i===Pt.LEFT){e.preventDefault();e.stopPropagation();if(n){this.focusFirst(e)}else{this.focusNext(e,true)}}else if(i===Pt.DOWN||i===Pt.RIGHT){e.preventDefault();e.stopPropagation();if(n){this.focusLast(e)}else{this.focusNext(e,false)}}},setItemFocus:function t(e){this.$nextTick(function(){e.focus()})},focusNext:function t(e,i){var n=this.getItems();if(n.length<1){return}var r=n.indexOf(e.target);if(i&&r>0){r--}else if(!i&&r<n.length-1){r++}if(r<0){r=0}this.setItemFocus(n[r])},focusFirst:function t(e){var i=this.getItems();if(i.length>0){this.setItemFocus(i[0])}},focusLast:function t(e){var i=this.getItems();if(i.length>0){this.setItemFocus([i.length-1])}},getItems:function t(){var e=et(It,this.$el);e.forEach(function(t){t.tabIndex=-1});return e.filter(function(t){return J(t)})}},mounted:function t(){if(this.keyNav){this.getItems()}}};var Ft={bButtonToolbar:Lt,bBtnToolbar:Lt};var Nt={install:function t(e){h(e,Ft)}};g(Nt);var At={tag:{type:String,default:"div"}};var Dt={props:At,functional:true,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"input-group-text"}),s)}};var Vt=function t(e){return{id:{type:String,default:null},tag:{type:String,default:"div"},append:{type:Boolean,default:e},isText:{type:Boolean,default:false}}};var Mt={functional:true,props:Vt(false),render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"input-group-"+(r.append?"append":"prepend"),attrs:{id:r.id}}),r.isText?[i(Dt,s)]:s)}};var jt={functional:true,props:Vt(false),render:Mt.render};var Rt={functional:true,props:Vt(true),render:Mt.render};var Ht={id:{type:String,default:null},size:{type:String,default:null},prepend:{type:String,default:null},append:{type:String,default:null},tag:{type:String,default:"div"}};var zt={functional:true,props:Ht,render:function t(i,n){var r=n.props,s=n.data,o=n.slots;var l=o();var u=[];if(r.prepend){u.push(i(jt,[i(Dt,{domProps:{innerHTML:r.prepend}})]))}if(l.prepend){u.push(i(jt,l.prepend))}u.push(l.default);if(r.append){u.push(i(Rt,[i(Dt,{domProps:{innerHTML:r.append}})]))}if(l.append){u.push(i(Rt,l.append))}return i(r.tag,e(s,{staticClass:"input-group",class:a({},"input-group-"+r.size,Boolean(r.size)),attrs:{id:r.id||null,role:"group"}}),u)}};var Wt={bInputGroup:zt,bInputGroupAddon:Mt,bInputGroupPrepend:jt,bInputGroupAppend:Rt,bInputGroupText:Dt};var Gt={install:function t(e){h(e,Wt)}};g(Gt);function Ut(t){if(typeof t!=="string"){t=String(t)}return t.charAt(0).toUpperCase()+t.slice(1)}function qt(t,e){return t+Ut(e)}function Kt(t){if(typeof t!=="string"){t=String(t)}return t.charAt(0).toLowerCase()+t.slice(1)}function Yt(t,e){return Kt(e.replace(t,""))}function Zt(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:E;if(C(t)){return t.map(e)}var n={};for(var r in t){if(t.hasOwnProperty(r)){if((typeof r==="undefined"?"undefined":i(r))==="object"){n[e(r)]=y({},t[r])}else{n[e(r)]=t[r]}}}return n}var Xt={props:{tag:{type:String,default:"div"},bgVariant:{type:String,default:null},borderVariant:{type:String,default:null},textVariant:{type:String,default:null}}};var Jt=y({},Zt(Xt.props,qt.bind(null,"body")),{bodyClass:{type:[String,Object,Array],default:null},title:{type:String,default:null},titleTag:{type:String,default:"h4"},subTitle:{type:String,default:null},subTitleTag:{type:String,default:"h6"},overlay:{type:Boolean,default:false}});var Qt={functional:true,props:Jt,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.slots;var u=[];if(s.title){u.push(i(s.titleTag,{staticClass:"card-title",domProps:{innerHTML:s.title}}))}if(s.subTitle){u.push(i(s.subTitleTag,{staticClass:"card-subtitle mb-2 text-muted",domProps:{innerHTML:s.subTitle}}))}u.push(l().default);return i(s.bodyTag,e(o,{staticClass:"card-body",class:[(r={"card-img-overlay":s.overlay},a(r,"bg-"+s.bodyBgVariant,Boolean(s.bodyBgVariant)),a(r,"border-"+s.bodyBorderVariant,Boolean(s.bodyBorderVariant)),a(r,"text-"+s.bodyTextVariant,Boolean(s.bodyTextVariant)),r),s.bodyClass||{}]}),u)}};var te=y({},Zt(Xt.props,qt.bind(null,"header")),{header:{type:String,default:null},headerClass:{type:[String,Object,Array],default:null}});var ee={functional:true,props:te,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.slots,u=n.children;return i(s.headerTag,e(o,{staticClass:"card-header",class:[s.headerClass,(r={},a(r,"bg-"+s.headerBgVariant,Boolean(s.headerBgVariant)),a(r,"border-"+s.headerBorderVariant,Boolean(s.headerBorderVariant)),a(r,"text-"+s.headerTextVariant,Boolean(s.headerTextVariant)),r)]}),u||[i("div",{domProps:{innerHTML:s.header}})])}};var ie=y({},Zt(Xt.props,qt.bind(null,"footer")),{footer:{type:String,default:null},footerClass:{type:[String,Object,Array],default:null}});var ne={functional:true,props:ie,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.slots,u=n.children;return i(s.footerTag,e(o,{staticClass:"card-footer",class:[s.footerClass,(r={},a(r,"bg-"+s.footerBgVariant,Boolean(s.footerBgVariant)),a(r,"border-"+s.footerBorderVariant,Boolean(s.footerBorderVariant)),a(r,"text-"+s.footerTextVariant,Boolean(s.footerTextVariant)),r)]}),u||[i("div",{domProps:{innerHTML:s.footer}})])}};var re={src:{type:String,default:null,required:true},alt:{type:String,default:null},top:{type:Boolean,default:false},bottom:{type:Boolean,default:false},fluid:{type:Boolean,default:false}};var ae={functional:true,props:re,render:function t(i,n){var r=n.props,a=n.data,s=n.slots;var o="card-img";if(r.top){o+="-top"}else if(r.bottom){o+="-bottom"}return i("img",e(a,{staticClass:o,class:{"img-fluid":r.fluid},attrs:{src:r.src,alt:r.alt}}))}};var se=Zt(re,qt.bind(null,"img"));se.imgSrc.required=false;var oe=y({},Jt,te,ie,se,Zt(Xt.props),{align:{type:String,default:null},noBody:{type:Boolean,default:false}});var le={functional:true,props:oe,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.slots,u=n.children;var f=[];var d=l();var c=s.imgSrc?i(ae,{props:O(se,s,Yt.bind(null,"img"))}):null;if(c){if(s.imgTop||!s.imgBottom){f.push(c)}}if(s.header||d.header){f.push(i(ee,{props:O(te,s)},d.header))}if(s.noBody){f.push(d.default)}else{f.push(i(Qt,{props:O(Jt,s)},d.default))}if(s.footer||d.footer){f.push(i(ne,{props:O(ie,s)},d.footer))}if(c&&s.imgBottom){f.push(c)}return i(s.tag,e(o,{staticClass:"card",class:(r={},a(r,"text-"+s.align,Boolean(s.align)),a(r,"bg-"+s.bgVariant,Boolean(s.bgVariant)),a(r,"border-"+s.borderVariant,Boolean(s.borderVariant)),a(r,"text-"+s.textVariant,Boolean(s.textVariant)),r)}),f)}};var ue={tag:{type:String,default:"div"},deck:{type:Boolean,default:false},columns:{type:Boolean,default:false}};var fe={functional:true,props:ue,render:function t(i,n){var r=n.props,a=n.data,s=n.children;var o="card-group";if(r.columns){o="card-columns"}if(r.deck){o="card-deck"}return i(r.tag,e(a,{staticClass:o}),s)}};var de={bCard:le,bCardHeader:ee,bCardBody:Qt,bCardFooter:ne,bCardImg:ae,bCardGroup:fe};var ce={install:function t(e){h(e,de)}};g(ce);function he(t,e,i){var n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;var r=window.addEventListener;t=t?t.$el||t:null;if(!X(t)){return null}var a=null;if(n){a=new n(function(t){var i=false;for(var n=0;n<t.length&&!i;n++){var r=t[n];var a=r.type;var s=r.target;if(a==="characterData"&&s.nodeType===Node.TEXT_NODE){i=true}else if(a==="attributes"){i=true}else if(a==="childList"&&(r.addedNodes.length>0||r.removedNodes.length>0)){i=true}}if(i){e()}});a.observe(t,y({childList:true,subtree:true},i))}else if(r){t.addEventListener("DOMNodeInserted",e,false);t.addEventListener("DOMNodeRemoved",e,false)}return a}var pe={props:{id:{type:String,default:null}},methods:{safeId:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";var i=this.id||this.localId_||null;if(!i){return null}e=String(e).replace(/\s+/g,"_");return e?i+"_"+e:i}},computed:{localId_:function t(){if(!this.$isServer&&!this.id&&typeof this._uid!=="undefined"){return"__BVID__"+this._uid}}}};var ve={next:{dirClass:"carousel-item-left",overlayClass:"carousel-item-next"},prev:{dirClass:"carousel-item-right",overlayClass:"carousel-item-prev"}};var ge=600+50;var me={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend oTransitionEnd",transition:"transitionend"};function be(t){for(var e in me){if(t.style[e]!==undefined){return me[e]}}return null}var ye={mixins:[pe],render:function t(e){var i=this;var n=e("div",{ref:"inner",class:["carousel-inner"],attrs:{id:this.safeId("__BV_inner_"),role:"list"}},[this.$slots.default]);var r=e(false);if(this.controls){r=[e("a",{class:["carousel-control-prev"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_")},on:{click:function t(e){e.preventDefault();e.stopPropagation();i.prev()},keydown:function t(e){var n=e.keyCode;if(n===Pt.SPACE||n===Pt.ENTER){e.preventDefault();e.stopPropagation();i.prev()}}}},[e("span",{class:["carousel-control-prev-icon"],attrs:{"aria-hidden":"true"}}),e("span",{class:["sr-only"]},[this.labelPrev])]),e("a",{class:["carousel-control-next"],attrs:{href:"#",role:"button","aria-controls":this.safeId("__BV_inner_")},on:{click:function t(e){e.preventDefault();e.stopPropagation();i.next()},keydown:function t(e){var n=e.keyCode;if(n===Pt.SPACE||n===Pt.ENTER){e.preventDefault();e.stopPropagation();i.next()}}}},[e("span",{class:["carousel-control-next-icon"],attrs:{"aria-hidden":"true"}}),e("span",{class:["sr-only"]},[this.labelNext])])]}var a=e("ol",{class:["carousel-indicators"],directives:[{name:"show",rawName:"v-show",value:this.indicators,expression:"indicators"}],attrs:{id:this.safeId("__BV_indicators_"),"aria-hidden":this.indicators?"false":"true","aria-label":this.labelIndicators,"aria-owns":this.safeId("__BV_inner_")}},this.slides.map(function(t,n){return e("li",{key:"slide_"+n,class:{active:n===i.index},attrs:{role:"button",id:i.safeId("__BV_indicator_"+(n+1)+"_"),tabindex:i.indicators?"0":"-1","aria-current":n===i.index?"true":"false","aria-label":i.labelGotoSlide+" "+(n+1),"aria-describedby":i.slides[n].id||null,"aria-controls":i.safeId("__BV_inner_")},on:{click:function t(e){i.setSlide(n)},keydown:function t(e){var r=e.keyCode;if(r===Pt.SPACE||r===Pt.ENTER){e.preventDefault();e.stopPropagation();i.setSlide(n)}}}})}));return e("div",{class:["carousel","slide"],style:{background:this.background},attrs:{role:"region",id:this.safeId(),"aria-busy":this.isSliding?"true":"false"},on:{mouseenter:this.pause,mouseleave:this.restart,focusin:this.pause,focusout:this.restart,keydown:function t(e){var n=e.keyCode;if(n===Pt.LEFT||n===Pt.RIGHT){e.preventDefault();e.stopPropagation();i[n===Pt.LEFT?"prev":"next"]()}}}},[n,r,a])},data:function t(){return{index:this.value||0,isSliding:false,intervalId:null,transitionEndEvent:null,slides:[],direction:null}},props:{labelPrev:{type:String,default:"Previous Slide"},labelNext:{type:String,default:"Next Slide"},labelGotoSlide:{type:String,default:"Goto Slide"},labelIndicators:{type:String,default:"Select a slide to display"},interval:{type:Number,default:5e3},indicators:{type:Boolean,default:false},controls:{type:Boolean,default:false},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},background:{type:String},value:{type:Number,default:0}},computed:{isCycling:function t(){return Boolean(this.intervalId)}},methods:{setSlide:function t(e){var i=this;if(typeof document!=="undefined"&&document.visibilityState&&document.hidden){return}var n=this.slides.length;if(n===0){return}if(this.isSliding){this.$once("sliding-end",function(){return i.setSlide(e)});return}e=Math.floor(e);this.index=e>=n?0:e>=0?e:n-1},prev:function t(){this.direction="prev";this.setSlide(this.index-1)},next:function t(){this.direction="next";this.setSlide(this.index+1)},pause:function t(){if(this.isCycling){clearInterval(this.intervalId);this.intervalId=null;if(this.slides[this.index]){this.slides[this.index].tabIndex=0}}},start:function t(){var e=this;if(!this.interval||this.isCycling){return}this.slides.forEach(function(t){t.tabIndex=-1});this.intervalId=setInterval(function(){e.next()},Math.max(1e3,this.interval))},restart:function t(e){if(!this.$el.contains(document.activeElement)){this.start()}},updateSlides:function t(){this.pause();this.slides=et(".carousel-item",this.$refs.inner);var e=this.slides.length;var i=Math.max(0,Math.min(Math.floor(this.index),e-1));this.slides.forEach(function(t,n){var r=n+1;if(n===i){st(t,"active")}else{ot(t,"active")}ut(t,"aria-current",n===i?"true":"false");ut(t,"aria-posinset",String(r));ut(t,"aria-setsize",String(e));t.tabIndex=-1});this.setSlide(i);this.start()},calcDirection:function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;if(!e){return n>i?ve.next:ve.prev}return ve[e]}},watch:{value:function t(e,i){if(e!==i){this.setSlide(e)}},interval:function t(e,i){if(e===i){return}if(!e){this.pause()}else{this.pause();this.start()}},index:function t(e,i){var n=this;if(e===i||this.isSliding){return}var r=this.calcDirection(this.direction,i,e);var a=this.slides[i];var s=this.slides[e];if(!a||!s){return}this.isSliding=true;this.$emit("sliding-start",e);this.$emit("input",this.index);s.classList.add(r.overlayClass);tt(s);st(a,r.dirClass);st(s,r.dirClass);var o=false;var l=function t(i){if(o){return}o=true;if(n.transitionEndEvent){var l=n.transitionEndEvent.split(/\s+/);l.forEach(function(e){bt(a,e,t)})}n._animationTimeout=null;ot(s,r.dirClass);ot(s,r.overlayClass);st(s,"active");ot(a,"active");ot(a,r.dirClass);ot(a,r.overlayClass);ut(a,"aria-current","false");ut(s,"aria-current","true");ut(a,"aria-hidden","true");ut(s,"aria-hidden","false");a.tabIndex=-1;s.tabIndex=-1;if(!n.isCycling){s.tabIndex=0;n.$nextTick(function(){s.focus()})}n.isSliding=false;n.direction=null;n.$nextTick(function(){return n.$emit("sliding-end",e)})};if(this.transitionEndEvent){var u=this.transitionEndEvent.split(/\s+/);u.forEach(function(t){mt(a,t,l)})}this._animationTimeout=setTimeout(l,ge)}},created:function t(){this._animationTimeout=null},mounted:function t(){this.transitionEndEvent=be(this.$el)||null;this.updateSlides();he(this.$refs.inner,this.updateSlides.bind(this),{subtree:false,childList:true,attributes:true,attributeFilter:["id"]})},beforeDestroy:function t(){clearInterval(this.intervalId);clearTimeout(this._animationTimeout);this.intervalId=null;this._animationTimeout=null}};var Se='<svg width="%{w}" height="%{h}" '+'xmlns="http://www.w3.org/2000/svg" '+'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">'+'<rect width="100%" height="100%" style="fill:%{f};"></rect>'+"</svg>";function we(t,e,i){var n=encodeURIComponent(Se.replace("%{w}",String(t)).replace("%{h}",String(e)).replace("%{f}",i));return"data:image/svg+xml;charset=UTF-8,"+n}var ke={src:{type:String,default:null},alt:{type:String,default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},block:{type:Boolean,default:false},fluid:{type:Boolean,default:false},fluidGrow:{type:Boolean,default:false},rounded:{type:[Boolean,String],default:false},thumbnail:{type:Boolean,default:false},left:{type:Boolean,default:false},right:{type:Boolean,default:false},center:{type:Boolean,default:false},blank:{type:Boolean,default:false},blankColor:{type:String,default:"transparent"}};var Te={functional:true,props:ke,render:function t(i,n){var r;var s=n.props,o=n.data;var l=s.src;var u=parseInt(s.width,10)?parseInt(s.width,10):null;var f=parseInt(s.height,10)?parseInt(s.height,10):null;var d=null;var c=s.block;if(s.blank){if(!f&&Boolean(u)){f=u}else if(!u&&Boolean(f)){u=f}if(!u&&!f){u=1;f=1}l=we(u,f,s.blankColor||"transparent")}if(s.left){d="float-left"}else if(s.right){d="float-right"}else if(s.center){d="mx-auto";c=true}return i("img",e(o,{attrs:{src:l,alt:s.alt,width:u?String(u):null,height:f?String(f):null},class:(r={"img-thumbnail":s.thumbnail,"img-fluid":s.fluid||s.fluidGrow,"w-100":s.fluidGrow,rounded:s.rounded===""||s.rounded===true},a(r,"rounded-"+s.rounded,typeof s.rounded==="string"&&s.rounded!==""),a(r,d,Boolean(d)),a(r,"d-block",c),r)}))}};function _e(t){console.warn("[Bootstrap-Vue warn]: "+t)}var $e={components:{bImg:Te},mixins:[pe],render:function t(e){var i=this.$slots;var n=i.img;if(!n&&(this.imgSrc||this.imgBlank)){n=e("b-img",{props:{fluidGrow:true,block:true,src:this.imgSrc,blank:this.imgBlank,blankColor:this.imgBlankColor,width:this.computedWidth,height:this.computedHeight,alt:this.imgAlt}})}var r=e(this.contentTag,{class:this.contentClasses},[this.caption?e(this.captionTag,{domProps:{innerHTML:this.caption}}):e(false),this.text?e(this.textTag,{domProps:{innerHTML:this.text}}):e(false),i.default]);return e("div",{class:["carousel-item"],style:{background:this.background},attrs:{id:this.safeId(),role:"listitem"}},[n,r])},props:{imgSrc:{type:String,default:function t(){if(this&&this.src){_e("b-carousel-slide: prop 'src' has been deprecated. Use 'img-src' instead");return this.src}return null}},src:{type:String},imgAlt:{type:String},imgWidth:{type:[Number,String]},imgHeight:{type:[Number,String]},imgBlank:{type:Boolean,default:false},imgBlankColor:{type:String,default:"transparent"},contentVisibleUp:{type:String},contentTag:{type:String,default:"div"},caption:{type:String},captionTag:{type:String,default:"h3"},text:{type:String},textTag:{type:String,default:"p"},background:{type:String}},computed:{contentClasses:function t(){return["carousel-caption",this.contentVisibleUp?"d-none":"",this.contentVisibleUp?"d-"+this.contentVisibleUp+"-block":""]},computedWidth:function t(){return this.imgWidth||this.$parent.imgWidth},computedHeight:function t(){return this.imgHeight||this.$parent.imgHeight}}};var Ce={bCarousel:ye,bCarouselSlide:$e};var Be={install:function t(e){h(e,Ce)}};g(Be);var xe={tag:{type:String,default:"div"},fluid:{type:Boolean,default:false}};var Ee={functional:true,props:xe,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{class:{container:!r.fluid,"container-fluid":r.fluid}}),s)}};var Oe=["start","end","center"];var Pe={tag:{type:String,default:"div"},noGutters:{type:Boolean,default:false},alignV:{type:String,default:null,validator:function t(e){return B(Oe.concat(["baseline","stretch"]),e)}},alignH:{type:String,default:null,validator:function t(e){return B(Oe.concat(["between","around"]),e)}},alignContent:{type:String,default:null,validator:function t(e){return B(Oe.concat(["between","around","stretch"]),e)}}};var Ie={functional:true,props:Pe,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.children;return i(s.tag,e(o,{staticClass:"row",class:(r={"no-gutters":s.noGutters},a(r,"align-items-"+s.alignV,s.alignV),a(r,"justify-content-"+s.alignH,s.alignH),a(r,"align-content-"+s.alignContent,s.alignContent),r)}),l)}};function Le(t){var e=T(null);return function i(){var n=JSON.stringify(arguments);return e[n]=e[n]||t.apply(null,arguments)}}function Fe(t,e){return e+(t?Ut(t):"")}function Ne(){return{type:[Boolean,String,Number],default:false}}function Ae(){return{type:[String,Number],default:null}}var De=Le(function t(e,i,n){var r=e;if(n===false||n===null||n===undefined){return undefined}if(i){r+="-"+i}if(e==="col"&&(n===""||n===true)){return r.toLowerCase()}r+="-"+n;return r.toLowerCase()});var Ve=["sm","md","lg","xl"];var Me=Ve.reduce(function(t,e){return t[e]=Ne(),t},T(null));var je=Ve.reduce(function(t,e){return t[Fe(e,"offset")]=Ae(),t},T(null));var Re=Ve.reduce(function(t,e){return t[Fe(e,"order")]=Ae(),t},T(null));var He=y(T(null),{col:S(Me),offset:S(je),order:S(Re)});var ze=y({},Me,je,Re,{tag:{type:String,default:"div"},col:{type:Boolean,default:false},cols:Ae(),offset:Ae(),order:Ae(),alignSelf:{type:String,default:null,validator:function t(e){return B(["auto","start","end","center","baseline","stretch"],e)}}});var We={functional:true,props:ze,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.children;var u=[];for(var f in He){var d=He[f];for(var c=0;c<d.length;c++){var h=De(f,d[c].replace(f,""),s[d[c]]);if(h){u.push(h)}}}u.push((r={col:s.col||u.length===0&&!s.cols},a(r,"col-"+s.cols,s.cols),a(r,"offset-"+s.offset,s.offset),a(r,"order-"+s.order,s.order),a(r,"align-self-"+s.alignSelf,s.alignSelf),r));return i(s.tag,e(o,{class:u}),l)}};var Ge={tag:{type:String,default:"div"}};var Ue={functional:true,props:Ge,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"form-row"}),s)}};var qe={bContainer:Ee,bRow:Ie,bCol:We,bFormRow:Ue};var Ke={install:function t(e){h(e,qe)}};g(Ke);var Ye="__BV_root_listeners__";var Ze={methods:{listenOnRoot:function t(e,i){if(!this[Ye]||!C(this[Ye])){this[Ye]=[]}this[Ye].push({event:e,callback:i});this.$root.$on(e,i);return this},emitOnRoot:function t(e){var i;for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++){r[a-1]=arguments[a]}(i=this.$root).$emit.apply(i,[e].concat(l(r)));return this}},beforeDestroy:function t(){if(this[Ye]&&C(this[Ye])){while(this[Ye].length>0){var e=this[Ye].shift(),i=e.event,n=e.callback;this.$root.$off(i,n)}}}};var Xe="bv::collapse::state";var Je="bv::collapse::accordion";var Qe="bv::toggle::collapse";var ti={mixins:[Ze],render:function t(e){var i=e(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.id||null},on:{click:this.clickHandler}},[this.$slots.default]);return e("transition",{props:{enterClass:"",enterActiveClass:"collapsing",enterToClass:"",leaveClass:"",leaveActiveClass:"collapsing",leaveToClass:""},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])},data:function t(){return{show:this.visible,transitioning:false}},model:{prop:"visible",event:"input"},props:{id:{type:String,required:true},isNav:{type:Boolean,default:false},accordion:{type:String,default:null},visible:{type:Boolean,default:false},tag:{type:String,default:"div"}},watch:{visible:function t(e){if(e!==this.show){this.show=e}},show:function t(e,i){if(e!==i){this.emitState()}}},computed:{classObject:function t(){return{"navbar-collapse":this.isNav,collapse:!this.transitioning,show:this.show&&!this.transitioning}}},methods:{toggle:function t(){this.show=!this.show},onEnter:function t(e){e.style.height=0;tt(e);e.style.height=e.scrollHeight+"px";this.transitioning=true;this.$emit("show")},onAfterEnter:function t(e){e.style.height=null;this.transitioning=false;this.$emit("shown")},onLeave:function t(e){e.style.height="auto";e.style.display="block";e.style.height=e.getBoundingClientRect().height+"px";tt(e);this.transitioning=true;e.style.height=0;this.$emit("hide")},onAfterLeave:function t(e){e.style.height=null;this.transitioning=false;this.$emit("hidden")},emitState:function t(){this.$emit("input",this.show);this.$root.$emit(Xe,this.id,this.show);if(this.accordion&&this.show){this.$root.$emit(Je,this.id,this.accordion)}},clickHandler:function t(e){var i=e.target;if(!this.isNav||!i||getComputedStyle(this.$el).display!=="block"){return}if(lt(i,"nav-link")||lt(i,"dropdown-item")){this.show=false}},handleToggleEvt:function t(e){if(e!==this.id){return}this.toggle()},handleAccordionEvt:function t(e,i){if(!this.accordion||i!==this.accordion){return}if(e===this.id){if(!this.show){this.toggle()}}else{if(this.show){this.toggle()}}},handleResize:function t(){this.show=getComputedStyle(this.$el).display==="block"}},created:function t(){this.listenOnRoot(Qe,this.handleToggleEvt);this.listenOnRoot(Je,this.handleAccordionEvt)},mounted:function t(){if(this.isNav&&typeof document!=="undefined"){window.addEventListener("resize",this.handleResize,false);window.addEventListener("orientationchange",this.handleResize,false);this.handleResize()}this.emitState()},beforeDestroy:function t(){if(this.isNav&&typeof document!=="undefined"){window.removeEventListener("resize",this.handleResize,false);window.removeEventListener("orientationchange",this.handleResize,false)}}};var ei={hover:true,click:true,focus:true};var ii="__BV_boundEventListeners__";var ni=function t(e,i,n,r){var a=S(i.modifiers||{}).filter(function(t){return!ei[t]});if(i.value){a.push(i.value)}var s=function t(){r({targets:a,vnode:e})};S(ei).forEach(function(t){if(n[t]||i.modifiers[t]){e.elm.addEventListener(t,s);var r=e.elm[ii]||{};r[t]=r[t]||[];r[t].push(s);e.elm[ii]=r}});return a};var ri=function t(e,i,n){S(ei).forEach(function(t){if(n[t]||i.modifiers[t]){var r=e.elm[ii]&&e.elm[ii][t];if(r){r.forEach(function(i){return e.elm.removeEventListener(t,i)});delete e.elm[ii][t]}}})};var ai=typeof window!=="undefined";var si={click:true};var oi="__BV_toggle__";var li="bv::toggle::collapse";var ui="bv::collapse::state";var fi={bind:function t(e,i,n){var r=ni(n,i,si,function(t){var e=t.targets,i=t.vnode;e.forEach(function(t){i.context.$root.$emit(li,t)})});if(ai&&n.context&&r.length>0){ut(e,"aria-controls",r.join(" "));ut(e,"aria-expanded","false");if(e.tagName!=="BUTTON"){ut(e,"role","button")}e[oi]=function t(i,n){if(r.indexOf(i)!==-1){ut(e,"aria-expanded",n?"true":"false");if(n){ot(e,"collapsed")}else{st(e,"collapsed")}}};n.context.$root.$on(ui,e[oi])}},unbind:function t(e,i,n){if(e[oi]){n.context.$root.$off(ui,e[oi]);e[oi]=null}}};var di={bToggle:fi};var ci={install:function t(e){v(e,di)}};g(ci);var hi={bCollapse:ti};var pi={install:function t(e){h(e,hi);e.use(ci)}};g(pi);var vi=typeof window!=="undefined"&&typeof document!=="undefined";var gi=["Edge","Trident","Firefox"];var mi=0;for(var bi=0;bi<gi.length;bi+=1){if(vi&&navigator.userAgent.indexOf(gi[bi])>=0){mi=1;break}}function yi(t){var e=false;return function(){if(e){return}e=true;window.Promise.resolve().then(function(){e=false;t()})}}function Si(t){var e=false;return function(){if(!e){e=true;setTimeout(function(){e=false;t()},mi)}}}var wi=vi&&window.Promise;var ki=wi?yi:Si;function Ti(t){var e={};return t&&e.toString.call(t)==="[object Function]"}function _i(t,e){if(t.nodeType!==1){return[]}var i=getComputedStyle(t,null);return e?i[e]:i}function $i(t){if(t.nodeName==="HTML"){return t}return t.parentNode||t.host}function Ci(t){if(!t){return document.body}switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=_i(t),i=e.overflow,n=e.overflowX,r=e.overflowY;if(/(auto|scroll|overlay)/.test(i+r+n)){return t}return Ci($i(t))}var Bi=vi&&!!(window.MSInputMethodContext&&document.documentMode);var xi=vi&&/MSIE 10/.test(navigator.userAgent);function Ei(t){if(t===11){return Bi}if(t===10){return xi}return Bi||xi}function Oi(t){if(!t){return document.documentElement}var e=Ei(10)?document.body:null;var i=t.offsetParent;while(i===e&&t.nextElementSibling){i=(t=t.nextElementSibling).offsetParent}var n=i&&i.nodeName;if(!n||n==="BODY"||n==="HTML"){return t?t.ownerDocument.documentElement:document.documentElement}if(["TD","TABLE"].indexOf(i.nodeName)!==-1&&_i(i,"position")==="static"){return Oi(i)}return i}function Pi(t){var e=t.nodeName;if(e==="BODY"){return false}return e==="HTML"||Oi(t.firstElementChild)===t}function Ii(t){if(t.parentNode!==null){return Ii(t.parentNode)}return t}function Li(t,e){if(!t||!t.nodeType||!e||!e.nodeType){return document.documentElement}var i=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING;var n=i?t:e;var r=i?e:t;var a=document.createRange();a.setStart(n,0);a.setEnd(r,0);var s=a.commonAncestorContainer;if(t!==s&&e!==s||n.contains(r)){if(Pi(s)){return s}return Oi(s)}var o=Ii(t);if(o.host){return Li(o.host,e)}else{return Li(t,Ii(e).host)}}function Fi(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"top";var i=e==="top"?"scrollTop":"scrollLeft";var n=t.nodeName;if(n==="BODY"||n==="HTML"){var r=t.ownerDocument.documentElement;var a=t.ownerDocument.scrollingElement||r;return a[i]}return t[i]}function Ni(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var n=Fi(e,"top");var r=Fi(e,"left");var a=i?-1:1;t.top+=n*a;t.bottom+=n*a;t.left+=r*a;t.right+=r*a;return t}function Ai(t,e){var i=e==="x"?"Left":"Top";var n=i==="Left"?"Right":"Bottom";return parseFloat(t["border"+i+"Width"],10)+parseFloat(t["border"+n+"Width"],10)}function Di(t,e,i,n){return Math.max(e["offset"+t],e["scroll"+t],i["client"+t],i["offset"+t],i["scroll"+t],Ei(10)?i["offset"+t]+n["margin"+(t==="Height"?"Top":"Left")]+n["margin"+(t==="Height"?"Bottom":"Right")]:0)}function Vi(){var t=document.body;var e=document.documentElement;var i=Ei(10)&&getComputedStyle(e);return{height:Di("Height",t,e,i),width:Di("Width",t,e,i)}}var Mi=function t(e,i){if(!(e instanceof i)){throw new TypeError("Cannot call a class as a function")}};var ji=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}return function(e,i,n){if(i)t(e.prototype,i);if(n)t(e,n);return e}}();var Ri=function t(e,i,n){if(i in e){Object.defineProperty(e,i,{value:n,enumerable:true,configurable:true,writable:true})}else{e[i]=n}return e};var Hi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i){if(Object.prototype.hasOwnProperty.call(i,n)){t[n]=i[n]}}}return t};function zi(t){return Hi({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Wi(t){var e={};try{if(Ei(10)){e=t.getBoundingClientRect();var i=Fi(t,"top");var n=Fi(t,"left");e.top+=i;e.left+=n;e.bottom+=i;e.right+=n}else{e=t.getBoundingClientRect()}}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top};var a=t.nodeName==="HTML"?Vi():{};var s=a.width||t.clientWidth||r.right-r.left;var o=a.height||t.clientHeight||r.bottom-r.top;var l=t.offsetWidth-s;var u=t.offsetHeight-o;if(l||u){var f=_i(t);l-=Ai(f,"x");u-=Ai(f,"y");r.width-=l;r.height-=u}return zi(r)}function Gi(t,e){var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var n=Ei(10);var r=e.nodeName==="HTML";var a=Wi(t);var s=Wi(e);var o=Ci(t);var l=_i(e);var u=parseFloat(l.borderTopWidth,10);var f=parseFloat(l.borderLeftWidth,10);if(i&&e.nodeName==="HTML"){s.top=Math.max(s.top,0);s.left=Math.max(s.left,0)}var d=zi({top:a.top-s.top-u,left:a.left-s.left-f,width:a.width,height:a.height});d.marginTop=0;d.marginLeft=0;if(!n&&r){var c=parseFloat(l.marginTop,10);var h=parseFloat(l.marginLeft,10);d.top-=u-c;d.bottom-=u-c;d.left-=f-h;d.right-=f-h;d.marginTop=c;d.marginLeft=h}if(n&&!i?e.contains(o):e===o&&o.nodeName!=="BODY"){d=Ni(d,e)}return d}function Ui(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var i=t.ownerDocument.documentElement;var n=Gi(t,i);var r=Math.max(i.clientWidth,window.innerWidth||0);var a=Math.max(i.clientHeight,window.innerHeight||0);var s=!e?Fi(i):0;var o=!e?Fi(i,"left"):0;var l={top:s-n.top+n.marginTop,left:o-n.left+n.marginLeft,width:r,height:a};return zi(l)}function qi(t){var e=t.nodeName;if(e==="BODY"||e==="HTML"){return false}if(_i(t,"position")==="fixed"){return true}return qi($i(t))}function Ki(t){if(!t||!t.parentElement||Ei()){return document.documentElement}var e=t.parentElement;while(e&&_i(e,"transform")==="none"){e=e.parentElement}return e||document.documentElement}function Yi(t,e,i,n){var r=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var a={top:0,left:0};var s=r?Ki(t):Li(t,e);if(n==="viewport"){a=Ui(s,r)}else{var o=void 0;if(n==="scrollParent"){o=Ci($i(e));if(o.nodeName==="BODY"){o=t.ownerDocument.documentElement}}else if(n==="window"){o=t.ownerDocument.documentElement}else{o=n}var l=Gi(o,s,r);if(o.nodeName==="HTML"&&!qi(s)){var u=Vi(),f=u.height,d=u.width;a.top+=l.top-l.marginTop;a.bottom=f+l.top;a.left+=l.left-l.marginLeft;a.right=d+l.left}else{a=l}}a.left+=i;a.top+=i;a.right-=i;a.bottom-=i;return a}function Zi(t){var e=t.width,i=t.height;return e*i}function Xi(t,e,i,n,r){var a=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(t.indexOf("auto")===-1){return t}var s=Yi(i,n,a,r);var o={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}};var l=Object.keys(o).map(function(t){return Hi({key:t},o[t],{area:Zi(o[t])})}).sort(function(t,e){return e.area-t.area});var u=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight});var f=u.length>0?u[0].key:l[0].key;var d=t.split("-")[1];return f+(d?"-"+d:"")}function Ji(t,e,i){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var r=n?Ki(e):Li(e,i);return Gi(i,r,n)}function Qi(t){var e=getComputedStyle(t);var i=parseFloat(e.marginTop)+parseFloat(e.marginBottom);var n=parseFloat(e.marginLeft)+parseFloat(e.marginRight);var r={width:t.offsetWidth+n,height:t.offsetHeight+i};return r}function tn(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function en(t,e,i){i=i.split("-")[0];var n=Qi(t);var r={width:n.width,height:n.height};var a=["right","left"].indexOf(i)!==-1;var s=a?"top":"left";var o=a?"left":"top";var l=a?"height":"width";var u=!a?"height":"width";r[s]=e[s]+e[l]/2-n[l]/2;if(i===o){r[o]=e[o]-n[u]}else{r[o]=e[tn(o)]}return r}function nn(t,e){if(Array.prototype.find){return t.find(e)}return t.filter(e)[0]}function rn(t,e,i){if(Array.prototype.findIndex){return t.findIndex(function(t){return t[e]===i})}var n=nn(t,function(t){return t[e]===i});return t.indexOf(n)}function an(t,e,i){var n=i===undefined?t:t.slice(0,rn(t,"name",i));n.forEach(function(t){if(t["function"]){console.warn("`modifier.function` is deprecated, use `modifier.fn`!")}var i=t["function"]||t.fn;if(t.enabled&&Ti(i)){e.offsets.popper=zi(e.offsets.popper);e.offsets.reference=zi(e.offsets.reference);e=i(e,t)}});return e}function sn(){if(this.state.isDestroyed){return}var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};t.offsets.reference=Ji(this.state,this.popper,this.reference,this.options.positionFixed);t.placement=Xi(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);t.originalPlacement=t.placement;t.positionFixed=this.options.positionFixed;t.offsets.popper=en(this.popper,t.offsets.reference,t.placement);t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";t=an(this.modifiers,t);if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(t)}else{this.options.onUpdate(t)}}function on(t,e){return t.some(function(t){var i=t.name,n=t.enabled;return n&&i===e})}function ln(t){var e=[false,"ms","Webkit","Moz","O"];var i=t.charAt(0).toUpperCase()+t.slice(1);for(var n=0;n<e.length;n++){var r=e[n];var a=r?""+r+i:t;if(typeof document.body.style[a]!=="undefined"){return a}}return null}function un(){this.state.isDestroyed=true;if(on(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");this.popper.style.position="";this.popper.style.top="";this.popper.style.left="";this.popper.style.right="";this.popper.style.bottom="";this.popper.style.willChange="";this.popper.style[ln("transform")]=""}this.disableEventListeners();if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)}return this}function fn(t){var e=t.ownerDocument;return e?e.defaultView:window}function dn(t,e,i,n){var r=t.nodeName==="BODY";var a=r?t.ownerDocument.defaultView:t;a.addEventListener(e,i,{passive:true});if(!r){dn(Ci(a.parentNode),e,i,n)}n.push(a)}function cn(t,e,i,n){i.updateBound=n;fn(t).addEventListener("resize",i.updateBound,{passive:true});var r=Ci(t);dn(r,"scroll",i.updateBound,i.scrollParents);i.scrollElement=r;i.eventsEnabled=true;return i}function hn(){if(!this.state.eventsEnabled){this.state=cn(this.reference,this.options,this.state,this.scheduleUpdate)}}function pn(t,e){fn(t).removeEventListener("resize",e.updateBound);e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)});e.updateBound=null;e.scrollParents=[];e.scrollElement=null;e.eventsEnabled=false;return e}function vn(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=pn(this.reference,this.state)}}function gn(t){return t!==""&&!isNaN(parseFloat(t))&&isFinite(t)}function mn(t,e){Object.keys(e).forEach(function(i){var n="";if(["width","height","top","right","bottom","left"].indexOf(i)!==-1&&gn(e[i])){n="px"}t.style[i]=e[i]+n})}function bn(t,e){Object.keys(e).forEach(function(i){var n=e[i];if(n!==false){t.setAttribute(i,e[i])}else{t.removeAttribute(i)}})}function yn(t){mn(t.instance.popper,t.styles);bn(t.instance.popper,t.attributes);if(t.arrowElement&&Object.keys(t.arrowStyles).length){mn(t.arrowElement,t.arrowStyles)}return t}function Sn(t,e,i,n,r){var a=Ji(r,e,t,i.positionFixed);var s=Xi(i.placement,a,e,t,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);e.setAttribute("x-placement",s);mn(e,{position:i.positionFixed?"fixed":"absolute"});return i}function wn(t,e){var i=e.x,n=e.y;var r=t.offsets.popper;var a=nn(t.instance.modifiers,function(t){return t.name==="applyStyle"}).gpuAcceleration;if(a!==undefined){console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")}var s=a!==undefined?a:e.gpuAcceleration;var o=Oi(t.instance.popper);var l=Wi(o);var u={position:r.position};var f={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)};var d=i==="bottom"?"top":"bottom";var c=n==="right"?"left":"right";var h=ln("transform");var p=void 0,v=void 0;if(d==="bottom"){v=-l.height+f.bottom}else{v=f.top}if(c==="right"){p=-l.width+f.right}else{p=f.left}if(s&&h){u[h]="translate3d("+p+"px, "+v+"px, 0)";u[d]=0;u[c]=0;u.willChange="transform"}else{var g=d==="bottom"?-1:1;var m=c==="right"?-1:1;u[d]=v*g;u[c]=p*m;u.willChange=d+", "+c}var b={"x-placement":t.placement};t.attributes=Hi({},b,t.attributes);t.styles=Hi({},u,t.styles);t.arrowStyles=Hi({},t.offsets.arrow,t.arrowStyles);return t}function kn(t,e,i){var n=nn(t,function(t){var i=t.name;return i===e});var r=!!n&&t.some(function(t){return t.name===i&&t.enabled&&t.order<n.order});if(!r){var a="`"+e+"`";var s="`"+i+"`";console.warn(s+" modifier is required by "+a+" modifier in order to work, be sure to include it before "+a+"!")}return r}function Tn(t,e){var i;if(!kn(t.instance.modifiers,"arrow","keepTogether")){return t}var n=e.element;if(typeof n==="string"){n=t.instance.popper.querySelector(n);if(!n){return t}}else{if(!t.instance.popper.contains(n)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return t}}var r=t.placement.split("-")[0];var a=t.offsets,s=a.popper,o=a.reference;var l=["left","right"].indexOf(r)!==-1;var u=l?"height":"width";var f=l?"Top":"Left";var d=f.toLowerCase();var c=l?"left":"top";var h=l?"bottom":"right";var p=Qi(n)[u];if(o[h]-p<s[d]){t.offsets.popper[d]-=s[d]-(o[h]-p)}if(o[d]+p>s[h]){t.offsets.popper[d]+=o[d]+p-s[h]}t.offsets.popper=zi(t.offsets.popper);var v=o[d]+o[u]/2-p/2;var g=_i(t.instance.popper);var m=parseFloat(g["margin"+f],10);var b=parseFloat(g["border"+f+"Width"],10);var y=v-t.offsets.popper[d]-m-b;y=Math.max(Math.min(s[u]-p,y),0);t.arrowElement=n;t.offsets.arrow=(i={},Ri(i,d,Math.round(y)),Ri(i,c,""),i);return t}function _n(t){if(t==="end"){return"start"}else if(t==="start"){return"end"}return t}var $n=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var Cn=$n.slice(3);function Bn(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var i=Cn.indexOf(t);var n=Cn.slice(i+1).concat(Cn.slice(0,i));return e?n.reverse():n}var xn={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function En(t,e){if(on(t.instance.modifiers,"inner")){return t}if(t.flipped&&t.placement===t.originalPlacement){return t}var i=Yi(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed);var n=t.placement.split("-")[0];var r=tn(n);var a=t.placement.split("-")[1]||"";var s=[];switch(e.behavior){case xn.FLIP:s=[n,r];break;case xn.CLOCKWISE:s=Bn(n);break;case xn.COUNTERCLOCKWISE:s=Bn(n,true);break;default:s=e.behavior}s.forEach(function(o,l){if(n!==o||s.length===l+1){return t}n=t.placement.split("-")[0];r=tn(n);var u=t.offsets.popper;var f=t.offsets.reference;var d=Math.floor;var c=n==="left"&&d(u.right)>d(f.left)||n==="right"&&d(u.left)<d(f.right)||n==="top"&&d(u.bottom)>d(f.top)||n==="bottom"&&d(u.top)<d(f.bottom);var h=d(u.left)<d(i.left);var p=d(u.right)>d(i.right);var v=d(u.top)<d(i.top);var g=d(u.bottom)>d(i.bottom);var m=n==="left"&&h||n==="right"&&p||n==="top"&&v||n==="bottom"&&g;var b=["top","bottom"].indexOf(n)!==-1;var y=!!e.flipVariations&&(b&&a==="start"&&h||b&&a==="end"&&p||!b&&a==="start"&&v||!b&&a==="end"&&g);if(c||m||y){t.flipped=true;if(c||m){n=s[l+1]}if(y){a=_n(a)}t.placement=n+(a?"-"+a:"");t.offsets.popper=Hi({},t.offsets.popper,en(t.instance.popper,t.offsets.reference,t.placement));t=an(t.instance.modifiers,t,"flip")}});return t}function On(t){var e=t.offsets,i=e.popper,n=e.reference;var r=t.placement.split("-")[0];var a=Math.floor;var s=["top","bottom"].indexOf(r)!==-1;var o=s?"right":"bottom";var l=s?"left":"top";var u=s?"width":"height";if(i[o]<a(n[l])){t.offsets.popper[l]=a(n[l])-i[u]}if(i[l]>a(n[o])){t.offsets.popper[l]=a(n[o])}return t}function Pn(t,e,i,n){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var a=+r[1];var s=r[2];if(!a){return t}if(s.indexOf("%")===0){var o=void 0;switch(s){case"%p":o=i;break;case"%":case"%r":default:o=n}var l=zi(o);return l[e]/100*a}else if(s==="vh"||s==="vw"){var u=void 0;if(s==="vh"){u=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}else{u=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}return u/100*a}else{return a}}function In(t,e,i,n){var r=[0,0];var a=["right","left"].indexOf(n)!==-1;var s=t.split(/(\+|\-)/).map(function(t){return t.trim()});var o=s.indexOf(nn(s,function(t){return t.search(/,|\s/)!==-1}));if(s[o]&&s[o].indexOf(",")===-1){console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")}var l=/\s*,\s*|\s+/;var u=o!==-1?[s.slice(0,o).concat([s[o].split(l)[0]]),[s[o].split(l)[1]].concat(s.slice(o+1))]:[s];u=u.map(function(t,n){var r=(n===1?!a:a)?"height":"width";var s=false;return t.reduce(function(t,e){if(t[t.length-1]===""&&["+","-"].indexOf(e)!==-1){t[t.length-1]=e;s=true;return t}else if(s){t[t.length-1]+=e;s=false;return t}else{return t.concat(e)}},[]).map(function(t){return Pn(t,r,e,i)})});u.forEach(function(t,e){t.forEach(function(i,n){if(gn(i)){r[e]+=i*(t[n-1]==="-"?-1:1)}})});return r}function Ln(t,e){var i=e.offset;var n=t.placement,r=t.offsets,a=r.popper,s=r.reference;var o=n.split("-")[0];var l=void 0;if(gn(+i)){l=[+i,0]}else{l=In(i,a,s,o)}if(o==="left"){a.top+=l[0];a.left-=l[1]}else if(o==="right"){a.top+=l[0];a.left+=l[1]}else if(o==="top"){a.left+=l[0];a.top-=l[1]}else if(o==="bottom"){a.left+=l[0];a.top+=l[1]}t.popper=a;return t}function Fn(t,e){var i=e.boundariesElement||Oi(t.instance.popper);if(t.instance.reference===i){i=Oi(i)}var n=ln("transform");var r=t.instance.popper.style;var a=r.top,s=r.left,o=r[n];r.top="";r.left="";r[n]="";var l=Yi(t.instance.popper,t.instance.reference,e.padding,i,t.positionFixed);r.top=a;r.left=s;r[n]=o;e.boundaries=l;var u=e.priority;var f=t.offsets.popper;var d={primary:function t(i){var n=f[i];if(f[i]<l[i]&&!e.escapeWithReference){n=Math.max(f[i],l[i])}return Ri({},i,n)},secondary:function t(i){var n=i==="right"?"left":"top";var r=f[n];if(f[i]>l[i]&&!e.escapeWithReference){r=Math.min(f[n],l[i]-(i==="right"?f.width:f.height))}return Ri({},n,r)}};u.forEach(function(t){var e=["left","top"].indexOf(t)!==-1?"primary":"secondary";f=Hi({},f,d[e](t))});t.offsets.popper=f;return t}function Nn(t){var e=t.placement;var i=e.split("-")[0];var n=e.split("-")[1];if(n){var r=t.offsets,a=r.reference,s=r.popper;var o=["bottom","top"].indexOf(i)!==-1;var l=o?"left":"top";var u=o?"width":"height";var f={start:Ri({},l,a[l]),end:Ri({},l,a[l]+a[u]-s[u])};t.offsets.popper=Hi({},s,f[n])}return t}function An(t){if(!kn(t.instance.modifiers,"hide","preventOverflow")){return t}var e=t.offsets.reference;var i=nn(t.instance.modifiers,function(t){return t.name==="preventOverflow"}).boundaries;if(e.bottom<i.top||e.left>i.right||e.top>i.bottom||e.right<i.left){if(t.hide===true){return t}t.hide=true;t.attributes["x-out-of-boundaries"]=""}else{if(t.hide===false){return t}t.hide=false;t.attributes["x-out-of-boundaries"]=false}return t}function Dn(t){var e=t.placement;var i=e.split("-")[0];var n=t.offsets,r=n.popper,a=n.reference;var s=["left","right"].indexOf(i)!==-1;var o=["top","left"].indexOf(i)===-1;r[s?"left":"top"]=a[i]-(o?r[s?"width":"height"]:0);t.placement=tn(e);t.offsets.popper=zi(r);return t}var Vn={shift:{order:100,enabled:true,fn:Nn},offset:{order:200,enabled:true,fn:Ln,offset:0},preventOverflow:{order:300,enabled:true,fn:Fn,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:true,fn:On},arrow:{order:500,enabled:true,fn:Tn,element:"[x-arrow]"},flip:{order:600,enabled:true,fn:En,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:false,fn:Dn},hide:{order:800,enabled:true,fn:An},computeStyle:{order:850,enabled:true,fn:wn,gpuAcceleration:true,x:"bottom",y:"right"},applyStyle:{order:900,enabled:true,fn:yn,onLoad:Sn,gpuAcceleration:undefined}};var Mn={placement:"bottom",positionFixed:false,eventsEnabled:true,removeOnDestroy:false,onCreate:function t(){},onUpdate:function t(){},modifiers:Vn};var jn=function(){function t(e,i){var n=this;var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};Mi(this,t);this.scheduleUpdate=function(){return requestAnimationFrame(n.update)};this.update=ki(this.update.bind(this));this.options=Hi({},t.Defaults,r);this.state={isDestroyed:false,isCreated:false,scrollParents:[]};this.reference=e&&e.jquery?e[0]:e;this.popper=i&&i.jquery?i[0]:i;this.options.modifiers={};Object.keys(Hi({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=Hi({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})});this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Hi({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order});this.modifiers.forEach(function(t){if(t.enabled&&Ti(t.onLoad)){t.onLoad(n.reference,n.popper,n.options,t,n.state)}});this.update();var a=this.options.eventsEnabled;if(a){this.enableEventListeners()}this.state.eventsEnabled=a}ji(t,[{key:"update",value:function t(){return sn.call(this)}},{key:"destroy",value:function t(){return un.call(this)}},{key:"enableEventListeners",value:function t(){return hn.call(this)}},{key:"disableEventListeners",value:function t(){return vn.call(this)}}]);return t}();jn.Utils=(typeof window!=="undefined"?window:global).PopperUtils;jn.placements=$n;jn.Defaults=Mn;var Rn={mounted:function t(){if(typeof document!=="undefined"){document.documentElement.addEventListener("click",this._clickOutListener)}},beforeDestroy:function t(){if(typeof document!=="undefined"){document.documentElement.removeEventListener("click",this._clickOutListener)}},methods:{_clickOutListener:function t(e){if(!this.$el.contains(e.target)){if(this.clickOutListener){this.clickOutListener()}}}}};var Hn=function(){function t(e){var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};n(this,t);if(!e){throw new TypeError("Failed to construct '"+this.constructor.name+"'. 1 argument required, "+arguments.length+" given.")}y(this,t.defaults(),i,{type:e});w(this,{type:_(),cancelable:_(),nativeEvent:_(),target:_(),relatedTarget:_(),vueTarget:_()});var r=false;this.preventDefault=function t(){if(this.cancelable){r=true}};k(this,"defaultPrevented",{enumerable:true,get:function t(){return r}})}r(t,null,[{key:"defaults",value:function t(){return{type:"",cancelable:true,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null}}}]);return t}();function zn(t){return(t||[]).filter(J)}var Wn=".dropdown-item:not(.disabled):not([disabled])";var Gn={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"};var Un={mixins:[Rn,Ze],props:{disabled:{type:Boolean,default:false},text:{type:String,default:""},dropup:{type:Boolean,default:false},right:{type:Boolean,default:false},offset:{type:[Number,String],default:0},noFlip:{type:Boolean,default:false},popperOpts:{type:Object,default:function t(){}}},data:function t(){return{visible:false,inNavbar:null,visibleChangePrevented:false}},created:function t(){this._popper=null},mounted:function t(){this.listenOnRoot("bv::dropdown::shown",this.rootCloseListener);this.listenOnRoot("clicked::link",this.rootCloseListener);this.listenOnRoot("bv::link::clicked",this.rootCloseListener)},deactivated:function t(){this.visible=false;this.setTouchStart(false);this.removePopper()},beforeDestroy:function t(){this.visible=false;this.setTouchStart(false);this.removePopper()},watch:{visible:function t(e,i){if(this.visibleChangePrevented){this.visibleChangePrevented=false;return}if(e!==i){var n=e?"show":"hide";var r=new Hn(n,{cancelable:true,vueTarget:this,target:this.$refs.menu,relatedTarget:null});this.emitEvent(r);if(r.defaultPrevented){this.visibleChangePrevented=true;this.visible=i;return}if(n==="show"){this.showMenu()}else{this.hideMenu()}}},disabled:function t(e,i){if(e!==i&&e&&this.visible){this.visible=false}}},computed:{toggler:function t(){return this.$refs.toggle.$el||this.$refs.toggle}},methods:{emitEvent:function t(e){var i=e.type;this.$emit(i,e);this.emitOnRoot("bv::dropdown::"+i,e)},showMenu:function t(){if(this.disabled){return}this.emitOnRoot("bv::dropdown::shown",this);if(this.inNavbar===null&&this.isNav){this.inNavbar=Boolean(rt(".navbar",this.$el))}if(!this.inNavbar){if(typeof jn==="undefined"){_e("b-dropdown: Popper.js not found. Falling back to CSS positioning.")}else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e;this.createPopper(e)}}this.setTouchStart(true);this.$emit("shown");this.$nextTick(this.focusFirstItem)},hideMenu:function t(){this.setTouchStart(false);this.emitOnRoot("bv::dropdown::hidden",this);this.$emit("hidden");this.removePopper()},createPopper:function t(e){this.removePopper();this._popper=new jn(e,this.$refs.menu,this.getPopperConfig())},removePopper:function t(){if(this._popper){this._popper.destroy()}this._popper=null},getPopperConfig:function t(){var e=Gn.BOTTOM;if(this.dropup&&this.right){e=Gn.TOPEND}else if(this.dropup){e=Gn.TOP}else if(this.right){e=Gn.BOTTOMEND}var i={placement:e,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}};if(this.boundary){i.modifiers.preventOverflow={boundariesElement:this.boundary}}return y(i,this.popperOpts||{})},setTouchStart:function t(e){var i=this;if("ontouchstart"in document.documentElement){var n=$(document.body.children);n.forEach(function(t){if(e){mt("mouseover",i._noop)}else{bt("mouseover",i._noop)}})}},_noop:function t(){},rootCloseListener:function t(e){if(e!==this){this.visible=false}},clickOutListener:function t(){this.visible=false},show:function t(){if(this.disabled){return}this.visible=true},hide:function t(){if(this.disabled){return}this.visible=false},toggle:function t(e){e=e||{};var i=e.type;var n=e.keyCode;if(i!=="click"&&!(i==="keydown"&&(n===Pt.ENTER||n===Pt.SPACE||n===Pt.DOWN))){return}if(this.disabled){this.visible=false;return}this.$emit("toggle",e);if(e.defaultPrevented){return}e.preventDefault();e.stopPropagation();this.visible=!this.visible},click:function t(e){if(this.disabled){this.visible=false;return}this.$emit("click",e)},onKeydown:function t(e){var i=e.keyCode;if(i===Pt.ESC){this.onEsc(e)}else if(i===Pt.TAB){this.onTab(e)}else if(i===Pt.DOWN){this.focusNext(e,false)}else if(i===Pt.UP){this.focusNext(e,true)}},onEsc:function t(e){if(this.visible){this.visible=false;e.preventDefault();e.stopPropagation();this.$nextTick(this.focusToggler)}},onTab:function t(e){if(this.visible){this.visible=false}},onFocusOut:function t(e){if(this.$refs.menu.contains(e.relatedTarget)){return}this.visible=false},onMouseOver:function t(e){var i=e.target;if(i.classList.contains("dropdown-item")&&!i.disabled&&!i.classList.contains("disabled")&&i.focus){i.focus()}},focusNext:function t(e,i){var n=this;if(!this.visible){return}e.preventDefault();e.stopPropagation();this.$nextTick(function(){var t=n.getItems();if(t.length<1){return}var r=t.indexOf(e.target);if(i&&r>0){r--}else if(!i&&r<t.length-1){r++}if(r<0){r=0}n.focusItem(r,t)})},focusItem:function t(e,i){var n=i.find(function(t,i){return i===e});if(n&&dt(n,"tabindex")!=="-1"){n.focus()}},getItems:function t(){return zn(et(Wn,this.$refs.menu))},getFirstItem:function t(){var e=this.getItems()[0];return e||null},focusFirstItem:function t(){var e=this.getFirstItem();if(e){this.focusItem(0,[e])}},focusToggler:function t(){var e=this.toggler;if(e&&e.focus){e.focus()}}}};var qn={mixins:[pe,Un],components:{bButton:_t},render:function t(e){var i=e(false);if(this.split){i=e("b-button",{ref:"button",props:{disabled:this.disabled,variant:this.variant,size:this.size},attrs:{id:this.safeId("_BV_button_")},on:{click:this.click}},[this.$slots["button-content"]||this.$slots.text||this.text])}var n=e("b-button",{ref:"toggle",class:this.toggleClasses,props:{variant:this.variant,size:this.size,disabled:this.disabled},attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":this.visible?"true":"false"},on:{click:this.toggle,keydown:this.toggle}},[this.split?e("span",{class:["sr-only"]},[this.toggleText]):this.$slots["button-content"]||this.$slots.text||this.text]);var r=e("div",{ref:"menu",class:this.menuClasses,attrs:{role:this.role,"aria-labelledby":this.safeId(this.split?"_BV_button_":"_BV_toggle_")},on:{mouseover:this.onMouseOver,keydown:this.onKeydown}},[this.$slots.default]);return e("div",{attrs:{id:this.safeId()},class:this.dropdownClasses},[i,n,r])},props:{split:{type:Boolean,default:false},toggleText:{type:String,default:"Toggle Dropdown"},size:{type:String,default:null},variant:{type:String,default:null},menuClass:{type:[String,Array],default:null},toggleClass:{type:[String,Array],default:null},noCaret:{type:Boolean,default:false},role:{type:String,default:"menu"},boundary:{type:[String,Object],default:"scrollParent"}},computed:{dropdownClasses:function t(){var e="";if(this.boundary!=="scrollParent"||!this.boundary){e="position-static"}return["btn-group","b-dropdown","dropdown",this.dropup?"dropup":"",this.visible?"show":"",e]},menuClasses:function t(){return["dropdown-menu",{"dropdown-menu-right":this.right,show:this.visible},this.menuClass]},toggleClasses:function t(){return[{"dropdown-toggle":!this.noCaret||this.split,"dropdown-toggle-split":this.split},this.toggleClass]}}};var Kn=P();var Yn={functional:true,props:Kn,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(D,e(a,{props:r,staticClass:"dropdown-item",attrs:{role:"menuitem"}}),s)}};var Zn={disabled:{type:Boolean,default:false}};var Xn={functional:true,props:Zn,render:function t(i,n){var r=n.props,a=n.data,s=n.parent,o=n.children;return i("button",e(a,{props:r,staticClass:"dropdown-item",attrs:{role:"menuitem",type:"button",disabled:r.disabled},on:{click:function t(e){s.$root.$emit("clicked::link",e)}}}),o)}};var Jn={id:{type:String,default:null},tag:{type:String,default:"h6"}};var Qn={functional:true,props:Jn,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"dropdown-header",attrs:{id:r.id||null}}),s)}};var tr={tag:{type:String,default:"div"}};var er={functional:true,props:tr,render:function t(i,n){var r=n.props,a=n.data;return i(r.tag,e(a,{staticClass:"dropdown-divider",attrs:{role:"separator"}}))}};var ir={bDropdown:qn,bDd:qn,bDropdownItem:Yn,bDdItem:Yn,bDropdownItemButton:Xn,bDropdownItemBtn:Xn,bDdItemButton:Xn,bDdItemBtn:Xn,bDropdownHeader:Qn,bDdHeader:Qn,bDropdownDivider:er,bDdDivider:er};var nr={install:function t(e){h(e,ir)}};g(nr);var rr={type:{type:String,default:"iframe",validator:function t(e){return B(["iframe","embed","video","object","img","b-img","b-img-lazy"],e)}},tag:{type:String,default:"div"},aspect:{type:String,default:"16by9"}};var ar={functional:true,props:rr,render:function t(i,n){var r=n.props,s=n.data,o=n.children;return i(r.tag,{ref:s.ref,staticClass:"embed-responsive",class:a({},"embed-responsive-"+r.aspect,Boolean(r.aspect))},[i(r.type,e(s,{ref:"",staticClass:"embed-responsive-item"}),o)])}};var sr={bEmbed:ar};var or={install:function t(e){h(e,sr)}};g(or);var lr={id:{type:String,default:null},inline:{type:Boolean,default:false},novalidate:{type:Boolean,default:false},validated:{type:Boolean,default:false}};var ur={functional:true,props:lr,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i("form",e(a,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),s)}};var fr={id:{type:String,default:null},tag:{type:String,default:"small"},textVariant:{type:String,default:"muted"},inline:{type:Boolean,default:false}};var dr={functional:true,props:fr,render:function t(i,n){var r=n.props,s=n.data,o=n.children;return i(r.tag,e(s,{class:a({"form-text":!r.inline},"text-"+r.textVariant,Boolean(r.textVariant)),attrs:{id:r.id}}),o)}};var cr={id:{type:String,default:null},tag:{type:String,default:"div"},forceShow:{type:Boolean,default:false}};var hr={functional:true,props:cr,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"invalid-feedback",class:{"d-block":r.forceShow},attrs:{id:r.id}}),s)}};var pr={id:{type:String,default:null},tag:{type:String,default:"div"},forceShow:{type:Boolean,default:false}};var vr={functional:true,props:pr,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"valid-feedback",class:{"d-block":r.forceShow},attrs:{id:r.id}}),s)}};var gr={bForm:ur,bFormRow:Ue,bFormText:dr,bFormInvalidFeedback:hr,bFormFeedback:hr,bFormValidFeedback:vr};var mr={install:function t(e){h(e,gr)}};g(mr);var br={props:{state:{type:[Boolean,String],default:null}},computed:{computedState:function t(){var e=this.state;if(e===true||e==="valid"){return true}else if(e===false||e==="invalid"){return false}return null},stateClass:function t(){var e=this.computedState;if(e===true){return"is-valid"}else if(e===false){return"is-invalid"}return null}}};var yr="input:not(:disabled),textarea:not(:disabled),select:not(:disabled)";var Sr={mixins:[pe,br],components:{bFormRow:Ue,bFormText:dr,bFormInvalidFeedback:hr,bFormValidFeedback:vr},render:function t(e){var i=this.$slots;var n=e(false);if(this.hasLabel){var r=i["label"];var a=this.labelFor?"label":"legend";var s=r?{}:{innerHTML:this.label};var o={id:this.labelId,for:this.labelFor||null};var l=this.labelFor||this.labelSrOnly?{}:{click:this.legendClick};if(this.horizontal){if(this.labelSrOnly){r=e(a,{class:["sr-only"],attrs:o,domProps:s},r);n=e("div",{class:this.labelLayoutClasses},[r])}else{n=e(a,{class:[this.labelLayoutClasses,this.labelClasses],attrs:o,domProps:s,on:l},r)}}else{n=e(a,{class:this.labelSrOnly?["sr-only"]:this.labelClasses,attrs:o,domProps:s,on:l},r)}}else if(this.horizontal){n=e("div",{class:this.labelLayoutClasses})}var u=e(false);if(this.hasInvalidFeedback){var f={};if(!i["invalid-feedback"]&&!i["feedback"]){f={innerHTML:this.invalidFeedback||this.feedback||""}}u=e("b-form-invalid-feedback",{props:{id:this.invalidFeedbackId,forceShow:this.computedState===false},attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"},domProps:f},i["invalid-feedback"]||i["feedback"])}var d=e(false);if(this.hasValidFeedback){var c=i["valid-feedback"]?{}:{innerHTML:this.validFeedback||""};d=e("b-form-valid-feedback",{props:{id:this.validFeedbackId,forceShow:this.computedState===true},attrs:{role:"alert","aria-live":"assertive","aria-atomic":"true"},domProps:c},i["valid-feedback"])}var h=e(false);if(this.hasDescription){var p=i["description"]?{}:{innerHTML:this.description||""};h=e("b-form-text",{attrs:{id:this.descriptionId},domProps:p},i["description"])}var v=e("div",{ref:"content",class:this.inputLayoutClasses,attrs:this.labelFor?{}:{role:"group","aria-labelledby":this.labelId}},[i["default"],u,d,h]);return e(this.labelFor?"div":"fieldset",{class:this.groupClasses,attrs:{id:this.safeId(),disabled:this.disabled,role:"group","aria-invalid":this.computedState===false?"true":null,"aria-labelledby":this.labelId,"aria-describedby":this.labelFor?null:this.describedByIds}},this.horizontal?[e("b-form-row",{},[n,v])]:[n,v])},props:{horizontal:{type:Boolean,default:false},labelCols:{type:[Number,String],default:3,validator:function t(e){if(Number(e)>=1&&Number(e)<=11){return true}_e("b-form-group: label-cols must be a value between 1 and 11");return false}},breakpoint:{type:String,default:"sm"},labelTextAlign:{type:String,default:null},label:{type:String,default:null},labelFor:{type:String,default:null},labelSize:{type:String,default:null},labelSrOnly:{type:Boolean,default:false},labelClass:{type:[String,Array],default:null},description:{type:String,default:null},invalidFeedback:{type:String,default:null},feedback:{type:String,default:null},validFeedback:{type:String,default:null},validated:{type:Boolean,default:false}},computed:{groupClasses:function t(){return["b-form-group","form-group",this.validated?"was-validated":null,this.stateClass]},labelClasses:function t(){return["col-form-label",this.labelSize?"col-form-label-"+this.labelSize:null,this.labelTextAlign?"text-"+this.labelTextAlign:null,this.horizontal?null:"pt-0",this.labelClass]},labelLayoutClasses:function t(){return[this.horizontal?"col-"+this.breakpoint+"-"+this.labelCols:null]},inputLayoutClasses:function t(){return[this.horizontal?"col-"+this.breakpoint+"-"+(12-Number(this.labelCols)):null]},hasLabel:function t(){return this.label||this.$slots["label"]},hasDescription:function t(){return this.description||this.$slots["description"]},hasInvalidFeedback:function t(){if(this.computedState===true){return false}return this.invalidFeedback||this.feedback||this.$slots["invalid-feedback"]||this.$slots["feedback"]},hasValidFeedback:function t(){if(this.computedState===false){return false}return this.validFeedback||this.$slots["valid-feedback"]},labelId:function t(){return this.hasLabel?this.safeId("_BV_label_"):null},descriptionId:function t(){return this.hasDescription?this.safeId("_BV_description_"):null},invalidFeedbackId:function t(){return this.hasInvalidFeedback?this.safeId("_BV_feedback_invalid_"):null},validFeedbackId:function t(){return this.hasValidFeedback?this.safeId("_BV_feedback_valid_"):null},describedByIds:function t(){return[this.descriptionId,this.invalidFeedbackId,this.validFeedbackId].filter(function(t){return t}).join(" ")||null}},watch:{describedByIds:function t(e,i){if(e!==i){this.setInputDescribedBy(e,i)}}},methods:{legendClick:function t(e){var i=e.target?e.target.tagName:"";if(/^(input|select|textarea|label)$/i.test(i)){return}var n=et(yr,this.$refs.content).filter(J);if(n[0]&&n[0].focus){n[0].focus()}},setInputDescribedBy:function t(e,i){if(this.labelFor&&typeof document!=="undefined"){var n=it("#"+this.labelFor,this.$refs.content);if(n){var r="aria-describedby";var a=(dt(n,r)||"").split(/\s+/);i=(i||"").split(/\s+/);a=a.filter(function(t){return i.indexOf(t)===-1}).concat(e||"").join(" ").trim();if(a){ut(n,r,a)}else{ft(n,r)}}}}},mounted:function t(){var e=this;this.$nextTick(function(){e.setInputDescribedBy(e.describedByIds)})}};var wr={bFormGroup:Sr,bFormFieldset:Sr};var kr={install:function t(e){h(e,wr)}};g(kr);var Tr={data:function t(){return{localChecked:this.checked,hasFocus:false}},model:{prop:"checked",event:"input"},props:{value:{},checked:{},buttonVariant:{type:String,default:null}},computed:{computedLocalChecked:{get:function t(){if(this.is_Child){return this.$parent.localChecked}else{return this.localChecked}},set:function t(e){if(this.is_Child){this.$parent.localChecked=e}else{this.localChecked=e}}},is_Child:function t(){return Boolean(this.$parent&&this.$parent.is_RadioCheckGroup)},is_Disabled:function t(){return Boolean(this.is_Child?this.$parent.disabled||this.disabled:this.disabled)},is_Required:function t(){return Boolean(this.is_Child?this.$parent.required:this.required)},is_Plain:function t(){return Boolean(this.is_Child?this.$parent.plain:this.plain)},is_Custom:function t(){return!this.is_Plain},get_Size:function t(){return this.is_Child?this.$parent.size:this.size},get_State:function t(){if(this.is_Child&&typeof this.$parent.get_State==="boolean"){return this.$parent.get_State}return this.computedState},get_StateClass:function t(){return typeof this.get_State==="boolean"?this.get_State?"is-valid":"is-invalid":""},is_Stacked:function t(){return Boolean(this.is_Child&&this.$parent.stacked)},is_Inline:function t(){return!this.is_Stacked},is_ButtonMode:function t(){return Boolean(this.is_Child&&this.$parent.buttons)},get_ButtonVariant:function t(){return this.buttonVariant||(this.is_Child?this.$parent.buttonVariant:null)||"secondary"},get_Name:function t(){return(this.is_Child?this.$parent.name||this.$parent.safeId():this.name)||null},buttonClasses:function t(){return["btn","btn-"+this.get_ButtonVariant,this.get_Size?"btn-"+this.get_Size:"",this.is_Disabled?"disabled":"",this.is_Checked?"active":"",this.hasFocus?"focus":""]}},methods:{handleFocus:function t(e){if(this.is_ButtonMode&&e.target){if(e.type==="focus"){this.hasFocus=true}else if(e.type==="blur"){this.hasFocus=false}}}}};var _r={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:false}}};var $r={props:{size:{type:String,default:null}},computed:{sizeFormClass:function t(){return[this.size?"form-control-"+this.size:null]},sizeBtnClass:function t(){return[this.size?"btn-"+this.size:null]}}};var Cr={computed:{custom:function t(){return!this.plain}},props:{plain:{type:Boolean,default:false}}};function Br(t){return t!==null&&(typeof t==="undefined"?"undefined":i(t))==="object"}function xr(t,e){if(t===e)return true;var i=Br(t);var n=Br(e);if(i&&n){try{var r=C(t);var a=C(e);if(r&&a){return t.length===e.length&&t.every(function(t,i){return xr(t,e[i])})}else if(!r&&!a){var s=S(t);var o=S(e);return s.length===o.length&&s.every(function(i){return xr(t[i],e[i])})}else{return false}}catch(t){return false}}else if(!i&&!n){return String(t)===String(e)}else{return false}}var Er={mixins:[pe,Tr,_r,$r,br,Cr],render:function t(e){var i=this;var n=e("input",{ref:"check",class:[this.is_ButtonMode?"":this.is_Plain?"form-check-input":"custom-control-input",this.get_StateClass],directives:[{name:"model",rawName:"v-model",value:this.computedLocalChecked,expression:"computedLocalChecked"}],attrs:{id:this.safeId(),type:"checkbox",name:this.get_Name,disabled:this.is_Disabled,required:this.is_Required,autocomplete:"off","true-value":this.value,"false-value":this.uncheckedValue,"aria-required":this.is_Required?"true":null},domProps:{value:this.value,checked:this.is_Checked},on:{focus:this.handleFocus,blur:this.handleFocus,change:this.emitChange,__c:function t(e){var n=i.computedLocalChecked;var r=e.target;if(C(n)){var a=i.value;var s=i._i(n,a);if(r.checked){s<0&&(i.computedLocalChecked=n.concat([a]))}else{s>-1&&(i.computedLocalChecked=n.slice(0,s).concat(n.slice(s+1)))}}else{i.computedLocalChecked=r.checked?i.value:i.uncheckedValue}}}});var r=e(this.is_ButtonMode?"span":"label",{class:this.is_ButtonMode?null:this.is_Plain?"form-check-label":"custom-control-label",attrs:{for:this.is_ButtonMode?null:this.safeId()}},[this.$slots.default]);if(!this.is_ButtonMode){return e("div",{class:[this.is_Plain?"form-check":this.labelClasses,{"form-check-inline":this.is_Plain&&!this.is_Stacked},{"custom-control-inline":!this.is_Plain&&!this.is_Stacked}]},[n,r])}else{return e("label",{class:[this.buttonClasses]},[n,r])}},props:{value:{default:true},uncheckedValue:{default:false},indeterminate:{type:Boolean,default:false}},computed:{labelClasses:function t(){return["custom-control","custom-checkbox",this.get_Size?"form-control-"+this.get_Size:"",this.get_StateClass]},is_Checked:function t(){var e=this.computedLocalChecked;if(C(e)){for(var i=0;i<e.length;i++){if(xr(e[i],this.value)){return true}}return false}else{return xr(e,this.value)}}},watch:{computedLocalChecked:function t(e,i){if(xr(e,i)){return}this.$emit("input",e);this.$emit("update:indeterminate",this.$refs.check.indeterminate)},checked:function t(e,i){if(this.is_Child||xr(e,i)){return}this.computedLocalChecked=e},indeterminate:function t(e,i){this.setIndeterminate(e)}},methods:{emitChange:function t(e){var i=e.target.checked;if(this.is_Child||C(this.computedLocalChecked)){this.$emit("change",i?this.value:null);if(this.is_Child){this.$parent.$emit("change",this.computedLocalChecked)}}else{this.$emit("change",i?this.value:this.uncheckedValue)}this.$emit("update:indeterminate",this.$refs.check.indeterminate)},setIndeterminate:function t(e){if(this.is_Child||C(this.computedLocalChecked)){return}this.$refs.check.indeterminate=e;this.$emit("update:indeterminate",this.$refs.check.indeterminate)}},mounted:function t(){this.setIndeterminate(this.indeterminate)}};function Or(t){return t&&{}.toString.call(t)==="[object Object]"}var Pr={props:{options:{type:[Array,Object],default:function t(){return[]}},valueField:{type:String,default:"value"},textField:{type:String,default:"text"},disabledField:{type:String,default:"disabled"}},computed:{formOptions:function t(){var e=this.options;var i=this.valueField;var n=this.textField;var r=this.disabledField;if(C(e)){return e.map(function(t){if(Or(t)){return{value:t[i],text:String(t[n]),disabled:t[r]||false}}return{value:t,text:String(t),disabled:false}})}else{return S(e).map(function(t){var a=e[t]||{};if(Or(a)){var s=a[i];var o=a[n];return{value:typeof s==="undefined"?t:s,text:typeof o==="undefined"?t:String(o),disabled:a[r]||false}}return{value:t,text:String(a),disabled:false}})}}}};var Ir={mixins:[pe,_r,$r,br,Cr,Pr],components:{bFormCheckbox:Er},render:function t(e){var i=this;var n=this.$slots;var r=this.formOptions.map(function(t,n){return e("b-form-checkbox",{key:"check_"+n+"_opt",props:{id:i.safeId("_BV_check_"+n+"_opt_"),name:i.name,value:t.value,required:i.name&&i.required,disabled:t.disabled}},[e("span",{domProps:{innerHTML:t.text}})])});return e("div",{class:this.groupClasses,attrs:{id:this.safeId(),role:"group",tabindex:"-1","aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},[n.first,r,n.default])},data:function t(){return{localChecked:this.checked||[],is_RadioCheckGroup:true}},model:{prop:"checked",event:"input"},props:{checked:{type:[String,Number,Object,Array,Boolean],default:null},validated:{type:Boolean,default:false},ariaInvalid:{type:[Boolean,String],default:false},stacked:{type:Boolean,default:false},buttons:{type:Boolean,default:false},buttonVariant:{type:String,default:"secondary"}},watch:{checked:function t(e,i){this.localChecked=this.checked},localChecked:function t(e,i){this.$emit("input",e)}},computed:{groupClasses:function t(){if(this.buttons){return["btn-group-toggle",this.stacked?"btn-group-vertical":"btn-group",this.size?"btn-group-"+this.size:"",this.validated?"was-validated":""]}return[this.sizeFormClass,this.stacked&&this.custom?"custom-controls-stacked":"",this.validated?"was-validated":""]},computedAriaInvalid:function t(){if(this.ariaInvalid===true||this.ariaInvalid==="true"||this.ariaInvalid===""){return"true"}return this.get_State===false?"true":null},get_State:function t(){return this.computedState}}};var Lr={bFormCheckbox:Er,bCheckbox:Er,bCheck:Er,bFormCheckboxGroup:Ir,bCheckboxGroup:Ir,bCheckGroup:Ir};var Fr={install:function t(e){h(e,Lr)}};g(Fr);var Nr={mixins:[pe,Tr,_r,br],render:function t(e){var i=this;var n=e("input",{ref:"radio",class:[this.is_ButtonMode?"":this.is_Plain?"form-check-input":"custom-control-input",this.get_StateClass],directives:[{name:"model",rawName:"v-model",value:this.computedLocalChecked,expression:"computedLocalChecked"}],attrs:{id:this.safeId(),type:"radio",name:this.get_Name,required:this.get_Name&&this.is_Required,disabled:this.is_Disabled,autocomplete:"off"},domProps:{value:this.value,checked:xr(this.computedLocalChecked,this.value)},on:{focus:this.handleFocus,blur:this.handleFocus,change:this.emitChange,__c:function t(e){i.computedLocalChecked=i.value}}});var r=e(this.is_ButtonMode?"span":"label",{class:this.is_ButtonMode?null:this.is_Plain?"form-check-label":"custom-control-label",attrs:{for:this.is_ButtonMode?null:this.safeId()}},[this.$slots.default]);if(!this.is_ButtonMode){return e("div",{class:[this.is_Plain?"form-check":this.labelClasses,{"form-check-inline":this.is_Plain&&!this.is_Stacked},{"custom-control-inline":!this.is_Plain&&!this.is_Stacked}]},[n,r])}else{return e("label",{class:[this.buttonClasses]},[n,r])}},watch:{checked:function t(e,i){this.computedLocalChecked=e},computedLocalChceked:function t(e,i){this.$emit("input",this.computedLocalChceked)}},computed:{is_Checked:function t(){return xr(this.value,this.computedLocalChecked)},labelClasses:function t(){return[this.get_Size?"form-control-"+this.get_Size:"","custom-control","custom-radio",this.get_StateClass]}},methods:{emitChange:function t(e){var i=e.target.checked;this.$emit("change",i?this.value:null);if(this.is_Child){this.$parent.$emit("change",this.computedLocalChecked)}}}};var Ar={mixins:[pe,_r,$r,br,Cr,Pr],components:{bFormRadio:Nr},render:function t(e){var i=this;var n=this.$slots;var r=this.formOptions.map(function(t,n){return e("b-form-radio",{key:"radio_"+n+"_opt",props:{id:i.safeId("_BV_radio_"+n+"_opt_"),name:i.name,value:t.value,required:Boolean(i.name&&i.required),disabled:t.disabled}},[e("span",{domProps:{innerHTML:t.text}})])});return e("div",{class:this.groupClasses,attrs:{id:this.safeId(),role:"radiogroup",tabindex:"-1","aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},[n.first,r,n.default])},data:function t(){return{localChecked:this.checked,is_RadioCheckGroup:true}},model:{prop:"checked",event:"input"},props:{checked:{type:[String,Object,Number,Boolean],default:null},validated:{type:Boolean,default:false},ariaInvalid:{type:[Boolean,String],default:false},stacked:{type:Boolean,default:false},buttons:{type:Boolean,default:false},buttonVariant:{type:String,default:"secondary"}},watch:{checked:function t(e,i){this.localChecked=this.checked},localChecked:function t(e,i){this.$emit("input",e)}},computed:{groupClasses:function t(){if(this.buttons){return["btn-group-toggle",this.stacked?"btn-group-vertical":"btn-group",this.size?"btn-group-"+this.size:"",this.validated?"was-validated":""]}return[this.sizeFormClass,this.stacked&&this.custom?"custom-controls-stacked":"",this.validated?"was-validated":""]},computedAriaInvalid:function t(){if(this.ariaInvalid===true||this.ariaInvalid==="true"||this.ariaInvalid===""){return"true"}return this.get_State===false?"true":null},get_State:function t(){return this.computedState}}};var Dr={bFormRadio:Nr,bRadio:Nr,bFormRadioGroup:Ar,bRadioGroup:Ar};var Vr={install:function t(e){h(e,Dr)}};g(Vr);var Mr=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"];var jr={mixins:[pe,_r,$r,br],render:function t(e){return e("input",{ref:"input",class:this.inputClass,attrs:{id:this.safeId(),name:this.name,type:this.localType,disabled:this.disabled,required:this.required,readonly:this.readonly||this.plaintext,placeholder:this.placeholder,autocomplete:this.autocomplete||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid,value:this.value},on:{input:this.onInput,change:this.onChange}})},props:{value:{default:null},type:{type:String,default:"text",validator:function t(e){return B(Mr,e)}},ariaInvalid:{type:[Boolean,String],default:false},readonly:{type:Boolean,default:false},plaintext:{type:Boolean,default:false},autocomplete:{type:String,default:null},placeholder:{type:String,default:null},formatter:{type:Function},lazyFormatter:{type:Boolean,default:false}},computed:{localType:function t(){return B(Mr,this.type)?this.type:"text"},inputClass:function t(){return[this.plaintext?"form-control-plaintext":"form-control",this.sizeFormClass,this.stateClass]},computedAriaInvalid:function t(){if(!this.ariaInvalid||this.ariaInvalid==="false"){return this.computedState===false?"true":null}if(this.ariaInvalid===true){return"true"}return this.ariaInvalid}},mounted:function t(){if(this.value){var e=this.format(this.value,null);this.setValue(e)}},watch:{value:function t(e){if(this.lazyFormatter){this.setValue(e)}else{var i=this.format(e,null);this.setValue(i)}}},methods:{format:function t(e,i){if(this.formatter){return this.formatter(e,i)}return e},setValue:function t(e){this.$emit("input",e);this.$refs.input.value=e},onInput:function t(e){var i=e.target.value;if(this.lazyFormatter){this.setValue(i)}else{var n=this.format(i,e);this.setValue(n)}},onChange:function t(e){var i=this.format(e.target.value,e);this.setValue(i);this.$emit("change",i)},focus:function t(){if(!this.disabled){this.$el.focus()}}}};var Rr={bFormInput:jr,bInput:jr};var Hr={install:function t(e){h(e,Rr)}};g(Hr);var zr={mixins:[pe,_r,$r,br],render:function t(e){var i=this;return e("textarea",{ref:"input",class:this.inputClass,style:this.inputStyle,directives:[{name:"model",rawName:"v-model",value:this.localValue,expression:"localValue"}],domProps:{value:this.value},attrs:{id:this.safeId(),name:this.name,disabled:this.disabled,placeholder:this.placeholder,required:this.required,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.rowsCount,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid},on:{input:function t(e){i.localValue=e.target.value}}})},data:function t(){return{localValue:this.value}},props:{value:{type:String,default:""},ariaInvalid:{type:[Boolean,String],default:false},readonly:{type:Boolean,default:false},plaintext:{type:Boolean,default:false},autocomplete:{type:String,default:null},placeholder:{type:String,default:null},rows:{type:[Number,String],default:null},maxRows:{type:[Number,String],default:null},wrap:{type:String,default:"soft"},noResize:{type:Boolean,default:false}},computed:{rowsCount:function t(){var e=parseInt(this.rows,10)||1;var i=parseInt(this.maxRows,10)||0;var n=(this.localValue||"").toString().split("\n").length;return i?Math.min(i,Math.max(e,n)):Math.max(e,n)},inputClass:function t(){return[this.plaintext?"form-control-plaintext":"form-control",this.sizeFormClass,this.stateClass]},inputStyle:function t(){return{width:this.plaintext?"100%":null,resize:this.noResize?"none":null}},computedAriaInvalid:function t(){if(!this.ariaInvalid||this.ariaInvalid==="false"){return this.computedState===false?"true":null}if(this.ariaInvalid===true){return"true"}return this.ariaInvalid}},watch:{value:function t(e,i){if(e!==i){this.localValue=e}},localValue:function t(e,i){if(e!==i){this.$emit("input",e)}}},methods:{focus:function t(){if(!this.disabled){this.$el.focus()}}}};var Wr={bFormTextarea:zr,bTextarea:zr};var Gr={install:function t(e){h(e,Wr)}};g(Gr);var Ur={mixins:[pe,_r,br,Cr],render:function t(e){var i=e("input",{ref:"input",class:[{"form-control-file":this.plain,"custom-file-input":this.custom,focus:this.custom&&this.hasFocus},this.stateClass],attrs:{type:"file",id:this.safeId(),name:this.name,disabled:this.disabled,required:this.required,capture:this.capture||null,accept:this.accept||null,multiple:this.multiple,webkitdirectory:this.directory,"aria-required":this.required?"true":null,"aria-describedby":this.plain?null:this.safeId("_BV_file_control_")},on:{change:this.onFileChange,focusin:this.focusHandler,focusout:this.focusHandler}});if(this.plain){return i}var n=e("label",{class:["custom-file-label",this.dragging?"dragging":null],attrs:{id:this.safeId("_BV_file_control_")}},this.selectLabel);return e("div",{class:["custom-file","b-form-file",this.stateClass],attrs:{id:this.safeId("_BV_file_outer_")},on:{dragover:this.dragover}},[i,n])},data:function t(){return{selectedFile:null,dragging:false,hasFocus:false}},props:{accept:{type:String,default:""},capture:{type:Boolean,default:false},placeholder:{type:String,default:undefined},multiple:{type:Boolean,default:false},directory:{type:Boolean,default:false},noTraverse:{type:Boolean,default:false},noDrop:{type:Boolean,default:false}},computed:{selectLabel:function t(){if(!this.selectedFile||this.selectedFile.length===0){return this.placeholder}if(this.multiple){if(this.selectedFile.length===1){return this.selectedFile[0].name}return this.selectedFile.map(function(t){return t.name}).join(", ")}return this.selectedFile.name}},watch:{selectedFile:function t(e,i){if(e===i){return}if(!e&&this.multiple){this.$emit("input",[])}else{this.$emit("input",e)}}},methods:{focusHandler:function t(e){if(this.plain||e.type==="focusout"){this.hasFocus=false}else{this.hasFocus=true}},reset:function t(){try{this.$refs.input.value=""}catch(t){}this.$refs.input.type="";this.$refs.input.type="file";this.selectedFile=this.multiple?[]:null},onFileChange:function t(e){var i=this;this.$emit("change",e);var n=e.dataTransfer&&e.dataTransfer.items;if(n&&!this.noTraverse){var r=[];for(var a=0;a<n.length;a++){var s=n[a].webkitGetAsEntry();if(s){r.push(this.traverseFileTree(s))}}Promise.all(r).then(function(t){i.setFiles($(t))});return}this.setFiles(e.target.files||e.dataTransfer.files)},setFiles:function t(e){if(!e){this.selectedFile=null;return}if(!this.multiple){this.selectedFile=e[0];return}var i=[];for(var n=0;n<e.length;n++){if(e[n].type.match(this.accept)){i.push(e[n])}}this.selectedFile=i},dragover:function t(e){e.preventDefault();e.stopPropagation();if(this.noDrop||!this.custom){return}this.dragging=true;e.dataTransfer.dropEffect="copy"},dragleave:function t(e){e.preventDefault();e.stopPropagation();this.dragging=false},drop:function t(e){e.preventDefault();e.stopPropagation();if(this.noDrop){return}this.dragging=false;if(e.dataTransfer.files&&e.dataTransfer.files.length>0){this.onFileChange(e)}},traverseFileTree:function t(e,i){var n=this;return new Promise(function(t){i=i||"";if(e.isFile){e.file(function(e){e.$path=i;t(e)})}else if(e.isDirectory){e.createReader().readEntries(function(r){var a=[];for(var s=0;s<r.length;s++){a.push(n.traverseFileTree(r[s],i+e.name+"/"))}Promise.all(a).then(function(e){t($(e))})})}})}}};var qr={bFormFile:Ur,bFile:Ur};var Kr={install:function t(e){h(e,qr)}};g(Kr);var Yr={mixins:[pe,_r,$r,br,Cr,Pr],render:function t(e){var i=this;var n=this.$slots;var r=this.formOptions.map(function(t,i){return e("option",{key:"option_"+i+"_opt",attrs:{disabled:Boolean(t.disabled)},domProps:{innerHTML:t.text,value:t.value}})});return e("select",{ref:"input",class:this.inputClass,directives:[{name:"model",rawName:"v-model",value:this.localValue,expression:"localValue"}],attrs:{id:this.safeId(),name:this.name,multiple:this.multiple||null,size:this.computedSelectSize,disabled:this.disabled,required:this.required,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:function t(e){var n=e.target;var r=$(n.options).filter(function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});i.localValue=n.multiple?r:r[0];i.$emit("change",i.localValue)}}},[n.first,r,n.default])},data:function t(){return{localValue:this.value}},watch:{value:function t(e,i){this.localValue=e},localValue:function t(e,i){this.$emit("input",this.localValue)}},props:{value:{},multiple:{type:Boolean,default:false},selectSize:{type:Number,default:0},ariaInvalid:{type:[Boolean,String],default:false}},computed:{computedSelectSize:function t(){return!this.plain&&this.selectSize===0?null:this.selectSize},inputClass:function t(){return["form-control",this.stateClass,this.sizeFormClass,this.plain?null:"custom-select",this.plain||!this.size?null:"custom-select-"+this.size]},computedAriaInvalid:function t(){if(this.ariaInvalid===true||this.ariaInvalid==="true"){return"true"}return this.stateClass==="is-invalid"?"true":null}}};var Zr={bFormSelect:Yr,bSelect:Yr};var Xr={install:function t(e){h(e,Zr)}};g(Xr);var Jr=100;var Qr={components:{bImg:Te},render:function t(e){return e("b-img",{props:{src:this.computedSrc,alt:this.alt,blank:this.computedBlank,blankColor:this.blankColor,width:this.computedWidth,height:this.computedHeight,fluid:this.fluid,fluidGrow:this.fluidGrow,block:this.block,thumbnail:this.thumbnail,rounded:this.rounded,left:this.left,right:this.right,center:this.center}})},data:function t(){return{isShown:false,scrollTimeout:null}},props:{src:{type:String,default:null,required:true},alt:{type:String,default:null},width:{type:[Number,String],default:null},height:{type:[Number,String],default:null},blankSrc:{type:String,default:null},blankColor:{type:String,default:"transparent"},blankWidth:{type:[Number,String],default:null},blankHeight:{type:[Number,String],default:null},fluid:{type:Boolean,default:false},fluidGrow:{type:Boolean,default:false},block:{type:Boolean,default:false},thumbnail:{type:Boolean,default:false},rounded:{type:[Boolean,String],default:false},left:{type:Boolean,default:false},right:{type:Boolean,default:false},center:{type:Boolean,default:false},offset:{type:[Number,String],default:360},throttle:{type:[Number,String],default:Jr}},computed:{computedSrc:function t(){return!this.blankSrc||this.isShown?this.src:this.blankSrc},computedBlank:function t(){return!(this.isShown||this.blankSrc)},computedWidth:function t(){return this.isShown?this.width:this.blankWidth||this.width},computedHeight:function t(){return this.isShown?this.height:this.blankHeight||this.height}},mounted:function t(){this.setListeners(true);this.checkView()},activated:function t(){this.setListeners(true);this.checkView()},deactivated:function t(){this.setListeners(false)},beforeDdestroy:function t(){this.setListeners(false)},methods:{setListeners:function t(e){clearTimeout(this.scrollTimer);this.scrollTimeout=null;var i=window;if(e){mt(i,"scroll",this.onScroll);mt(i,"resize",this.onScroll);mt(i,"orientationchange",this.onScroll)}else{bt(i,"scroll",this.onScroll);bt(i,"resize",this.onScroll);bt(i,"orientationchange",this.onScroll)}},checkView:function t(){if(!J(this.$el)){return}var e=parseInt(this.offset,10)||0;var i=document.documentElement;var n={l:0-e,t:0-e,b:i.clientHeight+e,r:i.clientWidth+e};var r=ht(this.$el);if(r.right>=n.l&&r.bottom>=n.t&&r.left<=n.r&&r.top<=n.b){this.isShown=true;this.setListeners(false)}},onScroll:function t(){if(this.isShown){this.setListeners(false)}else{clearTimeout(this.scrollTimeout);this.scrollTimeout=setTimeout(this.checkView,parseInt(this.throttle,10)||Jr)}}}};var ta={bImg:Te,bImgLazy:Qr};var ea={install:function t(e){h(e,ta)}};g(ea);var ia={fluid:{type:Boolean,default:false},containerFluid:{type:Boolean,default:false},header:{type:String,default:null},headerTag:{type:String,default:"h1"},headerLevel:{type:[Number,String],default:"3"},lead:{type:String,default:null},leadTag:{type:String,default:"p"},tag:{type:String,default:"div"},bgVariant:{type:String,default:null},borderVariant:{type:String,default:null},textVariant:{type:String,default:null}};var na={functional:true,props:ia,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.slots;var u=[];var f=l();if(s.header||f.header){u.push(i(s.headerTag,{class:a({},"display-"+s.headerLevel,Boolean(s.headerLevel))},f.header||s.header))}if(s.lead||f.lead){u.push(i(s.leadTag,{staticClass:"lead"},f.lead||s.lead))}if(f.default){u.push(f.default)}if(s.fluid){u=[i(Ee,{props:{fluid:s.containerFluid}},u)]}return i(s.tag,e(o,{staticClass:"jumbotron",class:(r={"jumbotron-fluid":s.fluid},a(r,"text-"+s.textVariant,Boolean(s.textVariant)),a(r,"bg-"+s.bgVariant,Boolean(s.bgVariant)),a(r,"border-"+s.borderVariant,Boolean(s.borderVariant)),a(r,"border",Boolean(s.borderVariant)),r)}),u)}};var ra={bJumbotron:na};var aa={install:function t(e){h(e,ra)}};g(aa);var sa={bLink:D};var oa={install:function t(e){h(e,sa)}};g(oa);var la={tag:{type:String,default:"div"},flush:{type:Boolean,default:false}};var ua={functional:true,props:la,render:function t(i,n){var r=n.props,a=n.data,s=n.children;var o={staticClass:"list-group",class:{"list-group-flush":r.flush}};return i(r.tag,e(a,o),s)}};var fa=["a","router-link","button","b-link"];var da=P();delete da.href.default;delete da.to.default;var ca=y({tag:{type:String,default:"div"},action:{type:Boolean,default:null},button:{type:Boolean,default:null},variant:{type:String,default:null}},da);var ha={functional:true,props:ca,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.children;var u=s.button?"button":!s.href&&!s.to?s.tag:D;var f=Boolean(s.href||s.to||s.action||s.button||B(fa,s.tag));var d={staticClass:"list-group-item",class:(r={},a(r,"list-group-item-"+s.variant,Boolean(s.variant)),a(r,"list-group-item-action",f),a(r,"active",s.active),a(r,"disabled",s.disabled),r),attrs:u==="button"&&s.disabled?{disabled:true}:{},props:s.button?{}:O(da,s)};return i(u,e(o,d),l)}};var pa={bListGroup:ua,bListGroupItem:ha};var va={install:function t(e){h(e,pa)}};g(va);var ga={tag:{type:String,default:"div"}};var ma={functional:true,props:ga,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"media-body"}),s)}};var ba={tag:{type:String,default:"div"},verticalAlign:{type:String,default:"top"}};var ya={functional:true,props:ba,render:function t(i,n){var r=n.props,s=n.data,o=n.children;return i(r.tag,e(s,{staticClass:"d-flex",class:a({},"align-self-"+r.verticalAlign,r.verticalAlign)}),o)}};var Sa={tag:{type:String,default:"div"},rightAlign:{type:Boolean,default:false},verticalAlign:{type:String,default:"top"},noBody:{type:Boolean,default:false}};var wa={functional:true,props:Sa,render:function t(i,n){var r=n.props,a=n.data,s=n.slots,o=n.children;var l=r.noBody?o:[];var u=s();if(!r.noBody){if(u.aside&&!r.rightAlign){l.push(i(ya,{staticClass:"mr-3",props:{verticalAlign:r.verticalAlign}},u.aside))}l.push(i(ma,u.default));if(u.aside&&r.rightAlign){l.push(i(ya,{staticClass:"ml-3",props:{verticalAlign:r.verticalAlign}},u.aside))}}return i(r.tag,e(a,{staticClass:"media"}),l)}};var ka={bMedia:wa,bMediaAside:ya,bMediaBody:ma};var Ta={install:function t(e){h(e,ka)}};g(Ta);var _a={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};var $a={subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["style","class"]};var Ca={mixins:[pe,Ze],components:{bBtn:_t,bBtnClose:f},render:function t(e){var i=this;var n=this.$slots;var r=e(false);if(!this.hideHeader){var a=n["modal-header"];if(!a){var s=e(false);if(!this.hideHeaderClose){s=e("b-btn-close",{props:{disabled:this.is_transitioning,ariaLabel:this.headerCloseLabel,textVariant:this.headerTextVariant},on:{click:function t(e){i.hide("header-close")}}},[n["modal-header-close"]])}a=[e(this.titleTag,{class:["modal-title"]},[n["modal-title"]||this.title]),s]}r=e("header",{ref:"header",class:this.headerClasses,attrs:{id:this.safeId("__BV_modal_header_")}},[a])}var o=e("div",{ref:"body",class:this.bodyClasses,attrs:{id:this.safeId("__BV_modal_body_")}},[n.default]);var l=e(false);if(!this.hideFooter){var u=n["modal-footer"];if(!u){var f=e(false);if(!this.okOnly){f=e("b-btn",{props:{variant:this.cancelVariant,size:this.buttonSize,disabled:this.cancelDisabled||this.busy||this.is_transitioning},on:{click:function t(e){i.hide("cancel")}}},[n["modal-cancel"]||this.cancelTitle])}var d=e("b-btn",{props:{variant:this.okVariant,size:this.buttonSize,disabled:this.okDisabled||this.busy||this.is_transitioning},on:{click:function t(e){i.hide("ok")}}},[n["modal-ok"]||this.okTitle]);u=[f,d]}l=e("footer",{ref:"footer",class:this.footerClasses,attrs:{id:this.safeId("__BV_modal_footer_")}},[u])}var c=e("div",{ref:"content",class:["modal-content"],attrs:{tabindex:"-1",role:"document","aria-labelledby":this.hideHeader?null:this.safeId("__BV_modal_header_"),"aria-describedby":this.safeId("__BV_modal_body_")},on:{focusout:this.onFocusout,click:function t(e){e.stopPropagation();i.$root.$emit("bv::dropdown::shown")}}},[r,o,l]);var h=e("div",{class:this.dialogClasses},[c]);var p=e("div",{ref:"modal",class:this.modalClasses,directives:[{name:"show",rawName:"v-show",value:this.is_visible,expression:"is_visible"}],attrs:{id:this.safeId(),role:"dialog","aria-hidden":this.is_visible?null:"true"},on:{click:this.onClickOut,keydown:this.onEsc}},[h]);p=e("transition",{props:{enterClass:"",enterToClass:"",enterActiveClass:"",leaveClass:"",leaveActiveClass:"",leaveToClass:""},on:{"before-enter":this.onBeforeEnter,enter:this.onEnter,"after-enter":this.onAfterEnter,"before-leave":this.onBeforeLeave,leave:this.onLeave,"after-leave":this.onAfterLeave}},[p]);var v=e(false);if(!this.hideBackdrop&&(this.is_visible||this.is_transitioning)){v=e("div",{class:this.backdropClasses,attrs:{id:this.safeId("__BV_modal_backdrop_")}})}var g=e(false);if(!this.is_hidden){g=e("div",{attrs:{id:this.safeId("__BV_modal_outer_")}},[p,v])}return e("div",{},[g])},data:function t(){return{is_hidden:this.lazy||false,is_visible:false,is_transitioning:false,is_show:false,is_block:false,scrollbarWidth:0,isBodyOverflowing:false,return_focus:this.returnFocus||null}},model:{prop:"visible",event:"change"},props:{title:{type:String,default:""},titleTag:{type:String,default:"h5"},size:{type:String,default:"md"},centered:{type:Boolean,default:false},buttonSize:{type:String,default:""},noFade:{type:Boolean,default:false},noCloseOnBackdrop:{type:Boolean,default:false},noCloseOnEsc:{type:Boolean,default:false},noEnforceFocus:{type:Boolean,default:false},headerBgVariant:{type:String,default:null},headerBorderVariant:{type:String,default:null},headerTextVariant:{type:String,default:null},headerClass:{type:[String,Array],default:null},bodyBgVariant:{type:String,default:null},bodyTextVariant:{type:String,default:null},modalClass:{type:[String,Array],default:null},bodyClass:{type:[String,Array],default:null},footerBgVariant:{type:String,default:null},footerBorderVariant:{type:String,default:null},footerTextVariant:{type:String,default:null},footerClass:{type:[String,Array],default:null},hideHeader:{type:Boolean,default:false},hideFooter:{type:Boolean,default:false},hideHeaderClose:{type:Boolean,default:false},hideBackdrop:{type:Boolean,default:false},okOnly:{type:Boolean,default:false},okDisabled:{type:Boolean,default:false},cancelDisabled:{type:Boolean,default:false},visible:{type:Boolean,default:false},returnFocus:{default:null},headerCloseLabel:{type:String,default:"Close"},cancelTitle:{type:String,default:"Cancel"},okTitle:{type:String,default:"OK"},cancelVariant:{type:String,default:"secondary"},okVariant:{type:String,default:"primary"},lazy:{type:Boolean,default:false},busy:{type:Boolean,default:false}},computed:{modalClasses:function t(){return["modal",{fade:!this.noFade,show:this.is_show,"d-block":this.is_block},this.modalClass]},dialogClasses:function t(){var e;return["modal-dialog",(e={},a(e,"modal-"+this.size,Boolean(this.size)),a(e,"modal-dialog-centered",this.centered),e)]},backdropClasses:function t(){return["modal-backdrop",{fade:!this.noFade,show:this.is_show||this.noFade}]},headerClasses:function t(){var e;return["modal-header",(e={},a(e,"bg-"+this.headerBgVariant,Boolean(this.headerBgVariant)),a(e,"text-"+this.headerTextVariant,Boolean(this.headerTextVariant)),a(e,"border-"+this.headerBorderVariant,Boolean(this.headerBorderVariant)),e),this.headerClass]},bodyClasses:function t(){var e;return["modal-body",(e={},a(e,"bg-"+this.bodyBgVariant,Boolean(this.bodyBgVariant)),a(e,"text-"+this.bodyTextVariant,Boolean(this.bodyTextVariant)),e),this.bodyClass]},footerClasses:function t(){var e;return["modal-footer",(e={},a(e,"bg-"+this.footerBgVariant,Boolean(this.footerBgVariant)),a(e,"text-"+this.footerTextVariant,Boolean(this.footerTextVariant)),a(e,"border-"+this.footerBorderVariant,Boolean(this.footerBorderVariant)),e),this.footerClass]}},watch:{visible:function t(e,i){if(e===i){return}this[e?"show":"hide"]()}},methods:{show:function t(){if(this.is_visible){return}var e=new Hn("show",{cancelable:true,vueTarget:this,target:this.$refs.modal,relatedTarget:null});this.emitEvent(e);if(e.defaultPrevented||this.is_visible){return}if(lt(document.body,"modal-open")){this.$root.$once("bv::modal::hidden",this.doShow)}else{this.doShow()}},hide:function t(e){if(!this.is_visible){return}var i=new Hn("hide",{cancelable:true,vueTarget:this,target:this.$refs.modal,relatedTarget:null,isOK:e||null,trigger:e||null,cancel:function t(){_e("b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().");this.preventDefault()}});if(e==="ok"){this.$emit("ok",i)}else if(e==="cancel"){this.$emit("cancel",i)}this.emitEvent(i);if(i.defaultPrevented||!this.is_visible){return}if(this._observer){this._observer.disconnect();this._observer=null}this.is_visible=false;this.$emit("change",false)},doShow:function t(){var e=this;this.is_hidden=false;this.$nextTick(function(){e.is_visible=true;e.$emit("change",true);e._observer=he(e.$refs.content,e.adjustDialog.bind(e),$a)})},onBeforeEnter:function t(){this.is_transitioning=true;this.checkScrollbar();this.setScrollbar();this.adjustDialog();st(document.body,"modal-open");this.setResizeEvent(true)},onEnter:function t(){this.is_block=true;this.$refs.modal.scrollTop=0},onAfterEnter:function t(){var e=this;this.is_show=true;this.is_transitioning=false;this.$nextTick(function(){e.focusFirst();var t=new Hn("shown",{cancelable:false,vueTarget:e,target:e.$refs.modal,relatedTarget:null});e.emitEvent(t)})},onBeforeLeave:function t(){this.is_transitioning=true;this.setResizeEvent(false)},onLeave:function t(){this.is_show=false},onAfterLeave:function t(){var e=this;this.is_block=false;this.resetAdjustments();this.resetScrollbar();this.is_transitioning=false;ot(document.body,"modal-open");this.$nextTick(function(){e.is_hidden=e.lazy||false;e.returnFocusTo();var t=new Hn("hidden",{cancelable:false,vueTarget:e,target:e.lazy?null:e.$refs.modal,relatedTarget:null});e.emitEvent(t)})},emitEvent:function t(e){var i=e.type;this.$emit(i,e);this.$root.$emit("bv::modal::"+i,e)},onClickOut:function t(e){if(this.is_visible&&!this.noCloseOnBackdrop){this.hide("backdrop")}},onEsc:function t(e){if(e.keyCode===Pt.ESC&&this.is_visible&&!this.noCloseOnEsc){this.hide("esc")}},onFocusout:function t(e){var i=this.$refs.content;if(!this.noEnforceFocus&&this.is_visible&&i&&!i.contains(e.relatedTarget)){i.focus()}},setResizeEvent:function t(e){var i=this;["resize","orientationchange"].forEach(function(t){if(e){mt(window,t,i.adjustDialog)}else{bt(window,t,i.adjustDialog)}})},showHandler:function t(e,i){if(e===this.id){this.return_focus=i||null;this.show()}},hideHandler:function t(e){if(e===this.id){this.hide()}},modalListener:function t(e){if(e.vueTarget!==this){this.hide()}},focusFirst:function t(){if(typeof document==="undefined"){return}var e=this.$refs.content;var i=this.$refs.modal;var n=document.activeElement;if(n&&e&&e.contains(n));else if(e){if(i){i.scrollTop=0}e.focus()}},returnFocusTo:function t(){var e=this.returnFocus||this.return_focus||null;if(typeof e==="string"){e=it(e)}if(e){e=e.$el||e;if(J(e)){e.focus()}}},getScrollbarWidth:function t(){var e=document.createElement("div");e.className="modal-scrollbar-measure";document.body.appendChild(e);this.scrollbarWidth=e.getBoundingClientRect().width-e.clientWidth;document.body.removeChild(e)},adjustDialog:function t(){if(!this.is_visible){return}var e=this.$refs.modal;var i=e.scrollHeight>document.documentElement.clientHeight;if(!this.isBodyOverflowing&&i){e.style.paddingLeft=this.scrollbarWidth+"px"}if(this.isBodyOverflowing&&!i){e.style.paddingRight=this.scrollbarWidth+"px"}},resetAdjustments:function t(){var e=this.$refs.modal;if(e){e.style.paddingLeft="";e.style.paddingRight=""}},checkScrollbar:function t(){var e=ht(document.body);this.isBodyOverflowing=e.left+e.right<window.innerWidth},setScrollbar:function t(){if(this.isBodyOverflowing){var e=window.getComputedStyle;var i=document.body;var n=this.scrollbarWidth;et(_a.FIXED_CONTENT).forEach(function(t){var i=t.style.paddingRight;var r=e(t).paddingRight||0;ut(t,"data-padding-right",i);t.style.paddingRight=parseFloat(r)+n+"px"});et(_a.STICKY_CONTENT).forEach(function(t){var i=t.style.marginRight;var r=e(t).marginRight||0;ut(t,"data-margin-right",i);t.style.marginRight=parseFloat(r)-n+"px"});et(_a.NAVBAR_TOGGLER).forEach(function(t){var i=t.style.marginRight;var r=e(t).marginRight||0;ut(t,"data-margin-right",i);t.style.marginRight=parseFloat(r)+n+"px"});var r=i.style.paddingRight;var a=e(i).paddingRight;ut(i,"data-padding-right",r);i.style.paddingRight=parseFloat(a)+n+"px"}},resetScrollbar:function t(){et(_a.FIXED_CONTENT).forEach(function(t){if(ct(t,"data-padding-right")){t.style.paddingRight=dt(t,"data-padding-right")||"";ft(t,"data-padding-right")}});et(_a.STICKY_CONTENT+", "+_a.NAVBAR_TOGGLER).forEach(function(t){if(ct(t,"data-margin-right")){t.style.marginRight=dt(t,"data-margin-right")||"";ft(t,"data-margin-right")}});var e=document.body;if(ct(e,"data-padding-right")){e.style.paddingRight=dt(e,"data-padding-right")||"";ft(e,"data-padding-right")}}},created:function t(){this._observer=null},mounted:function t(){this.getScrollbarWidth();this.listenOnRoot("bv::show::modal",this.showHandler);this.listenOnRoot("bv::hide::modal",this.hideHandler);this.listenOnRoot("bv::modal::show",this.modalListener);if(this.visible===true){this.show()}},beforeDestroy:function t(){if(this._observer){this._observer.disconnect();this._observer=null}this.setResizeEvent(false);ot(document.body,"modal-open");this.resetAdjustments();this.resetScrollbar()}};var Ba={click:true};var xa={bind:function t(e,i,n){ni(n,i,Ba,function(t){var e=t.targets,i=t.vnode;e.forEach(function(t){i.context.$root.$emit("bv::show::modal",t,i.elm)})});if(e.tagName!=="BUTTON"){ut(e,"role","button")}},unbind:function t(e,i,n){ri(n,i,Ba);if(e.tagName!=="BUTTON"){ft(e,"role","button")}}};var Ea={bModal:xa};var Oa={install:function t(e){v(e,Ea)}};g(Oa);var Pa={bModal:Ca};var Ia={install:function t(e){h(e,Pa);e.use(Oa)}};g(Ia);var La={tag:{type:String,default:"ul"},fill:{type:Boolean,default:false},justified:{type:Boolean,default:false},tabs:{type:Boolean,default:false},pills:{type:Boolean,default:false},vertical:{type:Boolean,default:false},isNavBar:{type:Boolean,default:false}};var Fa={functional:true,props:La,render:function t(i,n){var r=n.props,a=n.data,s=n.children;if(r.isNavBar){_e("b-nav: Prop 'is-nav-bar' is deprecated. Please use component '<b-navbar-nav>' instead.")}return i(r.tag,e(a,{class:{nav:!r.isNavBar,"navbar-nav":r.isNavBar,"nav-tabs":r.tabs&&!r.isNavBar,"nav-pills":r.pills&&!r.isNavBar,"flex-column":r.vertical&&!r.isNavBar,"nav-fill":r.fill,"nav-justified":r.justified}}),s)}};var Na=P();var Aa={functional:true,props:Na,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i("li",e(a,{staticClass:"nav-item"}),[i(D,{staticClass:"nav-link",props:r},s)])}};var Da={tag:{type:String,default:"span"}};var Va={functional:true,props:Da,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"navbar-text"}),s)}};var Ma={functional:true,props:{id:{type:String,default:null}},render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(ur,e(a,{attrs:{id:r.id},props:{inline:true}}),s)}};var ja={mixins:[pe,Un],render:function t(e){var i=e("a",{class:this.toggleClasses,ref:"toggle",attrs:{href:"#",id:this.safeId("_BV_button_"),disabled:this.disabled,"aria-haspopup":"true","aria-expanded":this.visible?"true":"false"},on:{click:this.toggle,keydown:this.toggle}},[this.$slots["button-content"]||this.$slots.text||e("span",{domProps:{innerHTML:this.text}})]);var n=e("div",{class:this.menuClasses,ref:"menu",attrs:{"aria-labelledby":this.safeId("_BV_button_")},on:{mouseover:this.onMouseOver,keydown:this.onKeydown}},[this.$slots.default]);return e("li",{attrs:{id:this.safeId()},class:this.dropdownClasses},[i,n])},computed:{isNav:function t(){return true},dropdownClasses:function t(){return["nav-item","b-nav-dropdown","dropdown",this.dropup?"dropup":"",this.visible?"show":""]},toggleClasses:function t(){return["nav-link",this.noCaret?"":"dropdown-toggle",this.disabled?"disabled":"",this.extraToggleClasses?this.extraToggleClasses:""]},menuClasses:function t(){return["dropdown-menu",this.right?"dropdown-menu-right":"dropdown-menu-left",this.visible?"show":"",this.extraMenuClasses?this.extraMenuClasses:""]}},props:{noCaret:{type:Boolean,default:false},extraToggleClasses:{type:String,default:""},extraMenuClasses:{type:String,default:""},role:{type:String,default:"menu"}}};var Ra={bNav:Fa,bNavItem:Aa,bNavText:Va,bNavForm:Ma,bNavItemDropdown:ja,bNavItemDd:ja,bNavDropdown:ja,bNavDd:ja};var Ha={install:function t(e){h(e,Ra);e.use(nr)}};g(Ha);var za={tag:{type:String,default:"nav"},type:{type:String,default:"light"},variant:{type:String},toggleable:{type:[Boolean,String],default:false},toggleBreakpoint:{type:String,default:null},fixed:{type:String},sticky:{type:Boolean,default:false}};var Wa={functional:true,props:za,render:function t(i,n){var r;var s=n.props,o=n.data,l=n.children;var u=s.toggleBreakpoint||(s.toggleable===true?"sm":s.toggleable)||"sm";return i(s.tag,e(o,{staticClass:"navbar",class:(r={},a(r,"navbar-"+s.type,Boolean(s.type)),a(r,"bg-"+s.variant,Boolean(s.variant)),a(r,"fixed-"+s.fixed,Boolean(s.fixed)),a(r,"sticky-top",s.sticky),a(r,"navbar-expand-"+u,s.toggleable!==false),r)}),l)}};var Ga={tag:{type:String,default:"ul"},fill:{type:Boolean,default:false},justified:{type:Boolean,default:false}};var Ua={functional:true,props:Ga,render:function t(i,n){var r=n.props,a=n.data,s=n.children;return i(r.tag,e(a,{staticClass:"navbar-nav",class:{"nav-fill":r.fill,"nav-justified":r.justified}}),s)}};var qa=P();qa.href.default=undefined;qa.to.default=undefined;var Ka=y(qa,{tag:{type:String,default:"div"}});var Ya={functional:true,props:Ka,render:function t(i,n){var r=n.props,a=n.data,s=n.children;var o=Boolean(r.to||r.href);var l=o?D:r.tag;return i(l,e(a,{staticClass:"navbar-brand",props:o?O(qa,r):{}}),s)}};var Za={mixins:[Ze],render:function t(e){return e("button",{class:["navbar-toggler"],attrs:{type:"button","aria-label":this.label,"aria-controls":this.target,"aria-expanded":this.toggleState?"true":"false"},on:{click:this.onClick}},[this.$slots.default||e("span",{class:["navbar-toggler-icon"]})])},data:function t(){return{toggleState:false}},props:{label:{type:String,default:"Toggle navigation"},target:{type:String,required:true}},methods:{onClick:function t(){this.$root.$emit("bv::toggle::collapse",this.target)},handleStateEvt:function t(e,i){if(e===this.target){this.toggleState=i}}},created:function t(){this.listenOnRoot("bv::collapse::state",this.handleStateEvt)}};var Xa={bNavbar:Wa,bNavbarNav:Ua,bNavbarBrand:Ya,bNavbarToggle:Za,bNavToggle:Za};var Ja={install:function t(e){h(e,Xa);e.use(Ha);e.use(pi);e.use(nr)}};g(Ja);var Qa=function(t){return Array.apply(null,{length:t})};function ts(t,e){return Qa(e).map(function(e,i){return{number:i+t,className:null}})}var es=3;var is={disabled:{type:Boolean,default:false},value:{type:Number,default:1},limit:{type:Number,default:5},size:{type:String,default:"md"},align:{type:String,default:"left"},hideGotoEndButtons:{type:Boolean,default:false},ariaLabel:{type:String,default:"Pagination"},labelFirstPage:{type:String,default:"Goto first page"},firstText:{type:String,default:"&laquo;"},labelPrevPage:{type:String,default:"Goto previous page"},prevText:{type:String,default:"&lsaquo;"},labelNextPage:{type:String,default:"Goto next page"},nextText:{type:String,default:"&rsaquo;"},labelLastPage:{type:String,default:"Goto last page"},lastText:{type:String,default:"&raquo;"},labelPage:{type:String,default:"Goto page"},hideEllipsis:{type:Boolean,default:false},ellipsisText:{type:String,default:"&hellip;"}};var ns={components:{bLink:D},data:function t(){return{showFirstDots:false,showLastDots:false,currentPage:this.value}},props:is,render:function t(e){var i=this;var n=[];var r=function t(n,r,a,s){var o=void 0;s=s||n;if(i.disabled||i.isActive(s)){o=e("li",{class:["page-item","disabled"],attrs:{role:"none presentation","aria-hidden":"true"}},[e("span",{class:["page-link"],domProps:{innerHTML:a}})])}else{o=e("li",{class:["page-item"],attrs:{role:"none presentation"}},[e("b-link",{class:["page-link"],props:i.linkProps(n),attrs:{role:"menuitem",tabindex:"-1","aria-label":r,"aria-controls":i.ariaControls||null},on:{click:function t(e){i.onClick(n,e)},keydown:function t(e){if(e.keyCode===Pt.SPACE){e.preventDefault();i.onClick(n,e)}}}},[e("span",{attrs:{"aria-hidden":"true"},domProps:{innerHTML:a}})])])}return o};var a=function t(){return e("li",{class:["page-item","disabled","d-none","d-sm-flex"],attrs:{role:"separator"}},[e("span",{class:["page-link"],domProps:{innerHTML:i.ellipsisText}})])};n.push(this.hideGotoEndButtons?e(false):r(1,this.labelFirstPage,this.firstText));n.push(r(this.currentPage-1,this.labelPrevPage,this.prevText,1));n.push(this.showFirstDots?a():e(false));this.pageList.forEach(function(t){var r=void 0;var a=i.makePage(t.number);if(i.disabled){r=e("span",{class:["page-link"],domProps:{innerHTML:a}})}else{var s=i.isActive(t.number);r=e("b-link",{class:i.pageLinkClasses(t),props:i.linkProps(t.number),attrs:{role:"menuitemradio",tabindex:s?"0":"-1","aria-controls":i.ariaControls||null,"aria-label":i.labelPage+" "+t.number,"aria-checked":s?"true":"false","aria-posinset":t.number,"aria-setsize":i.numberOfPages},domProps:{innerHTML:a},on:{click:function e(n){i.onClick(t.number,n)},keydown:function e(n){if(n.keyCode===Pt.SPACE){n.preventDefault();i.onClick(t.number,n)}}}})}n.push(e("li",{key:t.number,class:i.pageItemClasses(t),attrs:{role:"none presentation"}},[r]))});n.push(this.showLastDots?a():e(false));n.push(r(this.currentPage+1,this.labelNextPage,this.nextText,this.numberOfPages));n.push(this.hideGotoEndButtons?e(false):r(this.numberOfPages,this.labelLastPage,this.lastText));var s=e("ul",{ref:"ul",class:["pagination","b-pagination",this.btnSize,this.alignment],attrs:{role:"menubar","aria-disabled":this.disabled?"true":"false","aria-label":this.ariaLabel||null},on:{keydown:function t(e){var n=e.keyCode;var r=e.shiftKey;if(n===Pt.LEFT){e.preventDefault();r?i.focusFirst():i.focusPrev()}else if(n===Pt.RIGHT){e.preventDefault();r?i.focusLast():i.focusNext()}}}},n);return this.isNav?e("nav",{},[s]):s},watch:{currentPage:function t(e,i){if(e!==i){this.$emit("input",e)}},value:function t(e,i){if(e!==i){this.currentPage=e}}},computed:{btnSize:function t(){return this.size?"pagination-"+this.size:""},alignment:function t(){if(this.align==="center"){return"justify-content-center"}else if(this.align==="end"||this.align==="right"){return"justify-content-end"}return""},pageList:function t(){if(this.currentPage>this.numberOfPages){this.currentPage=this.numberOfPages}else if(this.currentPage<1){this.currentPage=1}this.showFirstDots=false;this.showLastDots=false;var e=this.limit;var i=1;if(this.numberOfPages<=this.limit){e=this.numberOfPages}else if(this.currentPage<this.limit-1&&this.limit>es){if(!this.hideEllipsis){e=this.limit-1;this.showLastDots=true}}else if(this.numberOfPages-this.currentPage+2<this.limit&&this.limit>es){if(!this.hideEllipsis){this.showFirstDots=true;e=this.limit-1}i=this.numberOfPages-e+1}else{if(this.limit>es&&!this.hideEllipsis){this.showFirstDots=true;this.showLastDots=true;e=this.limit-2}i=this.currentPage-Math.floor(e/2)}if(i<1){i=1}else if(i>this.numberOfPages-e){i=this.numberOfPages-e+1}var n=ts(i,e);if(n.length>3){var r=this.currentPage-i;if(r===0){for(var a=3;a<n.length;a++){n[a].className="d-none d-sm-flex"}}else if(r===n.length-1){for(var s=0;s<n.length-3;s++){n[s].className="d-none d-sm-flex"}}else{for(var o=0;o<r-1;o++){n[o].className="d-none d-sm-flex"}for(var l=n.length-1;l>r+1;l--){n[l].className="d-none d-sm-flex"}}}return n}},methods:{isActive:function t(e){return e===this.currentPage},pageItemClasses:function t(e){return["page-item",this.disabled?"disabled":"",this.isActive(e.number)?"active":"",e.className]},pageLinkClasses:function t(e){return["page-link",this.disabled?"disabled":"",this.isActive(e.number)?"btn-primary":""]},getButtons:function t(){return et("a.page-link",this.$el).filter(function(t){return J(t)})},setBtnFocus:function t(e){this.$nextTick(function(){e.focus()})},focusCurrent:function t(){var e=this;var i=this.getButtons().find(function(t){return parseInt(dt(t,"aria-posinset"),10)===e.currentPage});if(i&&i.focus){this.setBtnFocus(i)}else{this.focusFirst()}},focusFirst:function t(){var e=this.getButtons().find(function(t){return!Q(t)});if(e&&e.focus&&e!==document.activeElement){this.setBtnFocus(e)}},focusLast:function t(){var e=this.getButtons().reverse().find(function(t){return!Q(t)});if(e&&e.focus&&e!==document.activeElement){this.setBtnFocus(e)}},focusPrev:function t(){var e=this.getButtons();var i=e.indexOf(document.activeElement);if(i>0&&!Q(e[i-1])&&e[i-1].focus){this.setBtnFocus(e[i-1])}},focusNext:function t(){var e=this.getButtons();var i=e.indexOf(document.activeElement);var n=e.length-1;if(i<n&&!Q(e[i+1])&&e[i+1].focus){this.setBtnFocus(e[i+1])}}}};var rs={perPage:{type:Number,default:20},totalRows:{type:Number,default:20},ariaControls:{type:String,default:null}};var as={mixins:[ns],props:rs,computed:{numberOfPages:function t(){var e=Math.ceil(this.totalRows/this.perPage);return e<1?1:e}},methods:{onClick:function t(e,i){var n=this;if(e>this.numberOfPages){e=this.numberOfPages}else if(e<1){e=1}this.currentPage=e;this.$nextTick(function(){var t=i.target;if(J(t)&&n.$el.contains(t)&&t.focus){t.focus()}else{n.focusCurrent()}});this.$emit("change",this.currentPage)},makePage:function t(e){return e},linkProps:function t(e){return{href:"#"}}}};var ss={bPagination:as};var os={install:function t(e){h(e,ss)}};g(os);var ls=I("activeClass","exactActiveClass","append","exact","replace","target","rel");var us=y({numberOfPages:{type:Number,default:1},baseUrl:{type:String,default:"/"},useRouter:{type:Boolean,default:false},linkGen:{type:Function,default:null},pageGen:{type:Function,default:null}},ls);var fs={mixins:[ns],props:us,computed:{isNav:function t(){return true}},methods:{onClick:function t(e,i){this.currentPage=e},makePage:function t(e){if(this.pageGen&&typeof this.pageGen==="function"){return this.pageGen(e)}return e},makeLink:function t(e){if(this.linkGen&&typeof this.linkGen==="function"){return this.linkGen(e)}var i=""+this.baseUrl+e;return this.useRouter?{path:i}:i},linkProps:function t(e){var n=this.makeLink(e);var r={href:typeof n==="string"?n:void 0,target:this.target||null,rel:this.rel||null,disabled:this.disabled};if(this.useRouter||(typeof n==="undefined"?"undefined":i(n))==="object"){r=y(r,{to:n,exact:this.exact,activeClass:this.activeClass,exactActiveClass:this.exactActiveClass,append:this.append,replace:this.replace})}return r}}};var ds={bPaginationNav:fs};var cs={install:function t(e){h(e,ds)}};g(cs);var hs="tooltip";var ps="bs-tooltip";var vs=new RegExp("\\b"+ps+"\\S+","g");var gs=150;var ms="bv::modal::hidden";var bs=".modal-content";var ys={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"};var Ss={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:+1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:+1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:+1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:+1};var ws={SHOW:"show",OUT:"out"};var ks={FADE:"fade",SHOW:"show"};var Ts={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"};var _s={animation:true,template:'<div class="tooltip" role="tooltip">'+'<div class="arrow"></div>'+'<div class="tooltip-inner"></div>'+"</div>",trigger:"hover focus",title:"",delay:0,html:false,placement:"top",offset:0,arrowPadding:6,container:false,fallbackPlacement:"flip",callbacks:{},boundary:"scrollParent"};var $s={WebkitTransition:["webkitTransitionEnd"],MozTransition:["transitionend"],OTransition:["otransitionend","oTransitionEnd"],transition:["transitionend"]};var Cs=1;function Bs(t){return"__BV_"+t+"_"+Cs+++"__"}var xs=function(){function t(e,i,r){n(this,t);this.$isEnabled=true;this.$fadeTimeout=null;this.$hoverTimeout=null;this.$visibleInterval=null;this.$hoverState="";this.$activeTrigger={};this.$popper=null;this.$element=e;this.$tip=null;this.$id=Bs(this.constructor.NAME);this.$root=r||null;this.$routeWatcher=null;this.$forceHide=this.forceHide.bind(this);this.$doHide=this.doHide.bind(this);this.$doShow=this.doShow.bind(this);this.$doDisable=this.doDisable.bind(this);this.$doEnable=this.doEnable.bind(this);this.updateConfig(i)}r(t,[{key:"updateConfig",value:function t(e){var i=y({},this.constructor.Default,e);if(e.delay&&typeof e.delay==="number"){i.delay={show:e.delay,hide:e.delay}}if(e.title&&typeof e.title==="number"){i.title=e.title.toString()}if(e.content&&typeof e.content==="number"){i.content=e.content.toString()}this.fixTitle();this.$config=i;this.unListen();this.listen()}},{key:"destroy",value:function t(){this.unListen();this.setWhileOpenListeners(false);clearTimeout(this.$hoverTimeout);this.$hoverTimeout=null;clearTimeout(this.$fadeTimeout);this.$fadeTimeout=null;if(this.$popper){this.$popper.destroy()}this.$popper=null;if(this.$tip&&this.$tip.parentElement){this.$tip.parentElement.removeChild(this.$tip)}this.$tip=null;this.$id=null;this.$isEnabled=null;this.$root=null;this.$element=null;this.$config=null;this.$hoverState=null;this.$activeTrigger=null;this.$forceHide=null;this.$doHide=null;this.$doShow=null;this.$doDisable=null;this.$doEnable=null}},{key:"enable",value:function t(){var e=new Hn("enabled",{cancelable:false,target:this.$element,relatedTarget:null});this.$isEnabled=true;this.emitEvent(e)}},{key:"disable",value:function t(){var e=new Hn("disabled",{cancelable:false,target:this.$element,relatedTarget:null});this.$isEnabled=false;this.emitEvent(e)}},{key:"toggle",value:function t(e){if(!this.$isEnabled){return}if(e){this.$activeTrigger.click=!this.$activeTrigger.click;if(this.isWithActiveTrigger()){this.enter(null)}else{this.leave(null)}}else{if(lt(this.getTipElement(),ks.SHOW)){this.leave(null)}else{this.enter(null)}}}},{key:"show",value:function t(){var e=this;if(!document.body.contains(this.$element)||!J(this.$element)){return}var i=this.getTipElement();this.fixTitle();this.setContent(i);if(!this.isWithContent(i)){this.$tip=null;return}ut(i,"id",this.$id);this.addAriaDescribedby();if(this.$config.animation){st(i,ks.FADE)}else{ot(i,ks.FADE)}var n=this.getPlacement();var r=this.constructor.getAttachment(n);this.addAttachmentClass(r);var a=new Hn("show",{cancelable:true,target:this.$element,relatedTarget:i});this.emitEvent(a);if(a.defaultPrevented){this.$tip=null;return}var s=this.getContainer();if(!document.body.contains(i)){s.appendChild(i)}this.removePopper();this.$popper=new jn(this.$element,i,this.getPopperConfig(n,i));var o=function t(){if(e.$config.animation){e.fixTransition(i)}var n=e.$hoverState;e.$hoverState=null;if(n===ws.OUT){e.leave(null)}var r=new Hn("shown",{cancelable:false,target:e.$element,relatedTarget:i});e.emitEvent(r)};this.setWhileOpenListeners(true);st(i,ks.SHOW);this.transitionOnce(i,o)}},{key:"visibleCheck",value:function t(e){var i=this;clearInterval(this.$visibleInterval);this.$visibleInterval=null;if(e){this.$visibleInterval=setInterval(function(){var t=i.getTipElement();if(t&&!J(i.$element)&&lt(t,ks.SHOW)){i.forceHide()}},100)}}},{key:"setWhileOpenListeners",value:function t(e){this.setModalListener(e);this.visibleCheck(e);this.setRouteWatcher(e);this.setOnTouchStartListener(e);if(e&&/(focus|blur)/.test(this.$config.trigger)){mt(this.$tip,"focusout",this)}else{bt(this.$tip,"focusout",this)}}},{key:"forceHide",value:function t(){if(!this.$tip||!lt(this.$tip,ks.SHOW)){return}this.setWhileOpenListeners(false);clearTimeout(this.$hoverTimeout);this.$hoverTimeout=null;this.$hoverState="";this.hide(null,true)}},{key:"hide",value:function t(e,i){var n=this;var r=this.$tip;if(!r){return}var a=new Hn("hide",{cancelable:!i,target:this.$element,relatedTarget:r});this.emitEvent(a);if(a.defaultPrevented){return}var s=function t(){if(n.$hoverState!==ws.SHOW&&r.parentNode){r.parentNode.removeChild(r);n.removeAriaDescribedby();n.removePopper();n.$tip=null}if(e){e()}var i=new Hn("hidden",{cancelable:false,target:n.$element,relatedTarget:null});n.emitEvent(i)};this.setWhileOpenListeners(false);if(i){ot(r,ks.FADE)}ot(r,ks.SHOW);this.$activeTrigger.click=false;this.$activeTrigger.focus=false;this.$activeTrigger.hover=false;this.transitionOnce(r,s);this.$hoverState=""}},{key:"emitEvent",value:function t(e){var i=e.type;if(this.$root&&this.$root.$emit){this.$root.$emit("bv::"+this.constructor.NAME+"::"+i,e)}var n=this.$config.callbacks||{};if(typeof n[i]==="function"){n[i](e)}}},{key:"getContainer",value:function t(){var e=this.$config.container;var i=document.body;return e===false?rt(bs,this.$element)||i:it(e,i)||i}},{key:"addAriaDescribedby",value:function t(){var e=dt(this.$element,"aria-describedby")||"";e=e.split(/\s+/).concat(this.$id).join(" ").trim();ut(this.$element,"aria-describedby",e)}},{key:"removeAriaDescribedby",value:function t(){var e=this;var i=dt(this.$element,"aria-describedby")||"";i=i.split(/\s+/).filter(function(t){return t!==e.$id}).join(" ").trim();if(i){ut(this.$element,"aria-describedby",i)}else{ft(this.$element,"aria-describedby")}}},{key:"removePopper",value:function t(){if(this.$popper){this.$popper.destroy()}this.$popper=null}},{key:"transitionOnce",value:function t(e,i){var n=this;var r=this.getTransitionEndEvents();var a=false;clearTimeout(this.$fadeTimeout);this.$fadeTimeout=null;var s=function t(){if(a){return}a=true;clearTimeout(n.$fadeTimeout);n.$fadeTimeout=null;r.forEach(function(i){bt(e,i,t)});i()};if(lt(e,ks.FADE)){r.forEach(function(t){mt(e,t,s)});this.$fadeTimeout=setTimeout(s,gs)}else{s()}}},{key:"getTransitionEndEvents",value:function t(){for(var e in $s){if(this.$element.style[e]!==undefined){return $s[e]}}return[]}},{key:"update",value:function t(){if(this.$popper!==null){this.$popper.scheduleUpdate()}}},{key:"isWithContent",value:function t(e){e=e||this.$tip;if(!e){return false}return Boolean((it(Ts.TOOLTIP_INNER,e)||{}).innerHTML)}},{key:"addAttachmentClass",value:function t(e){st(this.getTipElement(),ps+"-"+e)}},{key:"getTipElement",value:function t(){if(!this.$tip){this.$tip=this.compileTemplate(this.$config.template)||this.compileTemplate(this.constructor.Default.template)}this.$tip.tabIndex=-1;return this.$tip}},{key:"compileTemplate",value:function t(e){if(!e||typeof e!=="string"){return null}var i=document.createElement("div");i.innerHTML=e.trim();var n=i.firstElementChild?i.removeChild(i.firstElementChild):null;i=null;return n}},{key:"setContent",value:function t(e){this.setElementContent(it(Ts.TOOLTIP_INNER,e),this.getTitle());ot(e,ks.FADE);ot(e,ks.SHOW)}},{key:"setElementContent",value:function t(e,n){if(!e){return}var r=this.$config.html;if((typeof n==="undefined"?"undefined":i(n))==="object"&&n.nodeType){if(r){if(n.parentElement!==e){e.innerHtml="";e.appendChild(n)}}else{e.innerText=n.innerText}}else{e[r?"innerHTML":"innerText"]=n}}},{key:"getTitle",value:function t(){var e=this.$config.title||"";if(typeof e==="function"){e=e(this.$element)}if((typeof e==="undefined"?"undefined":i(e))==="object"&&e.nodeType&&!e.innerHTML.trim()){e=""}if(typeof e==="string"){e=e.trim()}if(!e){e=dt(this.$element,"title")||dt(this.$element,"data-original-title")||"";e=e.trim()}return e}},{key:"listen",value:function t(){var e=this;var i=this.$config.trigger.trim().split(/\s+/);var n=this.$element;this.setRootListener(true);i.forEach(function(t){if(t==="click"){mt(n,"click",e)}else if(t==="focus"){mt(n,"focusin",e);mt(n,"focusout",e)}else if(t==="blur"){mt(n,"focusout",e)}else if(t==="hover"){mt(n,"mouseenter",e);mt(n,"mouseleave",e)}},this)}},{key:"unListen",value:function t(){var e=this;var i=["click","focusin","focusout","mouseenter","mouseleave"];i.forEach(function(t){bt(e.$element,t,e)},this);this.setRootListener(false)}},{key:"handleEvent",value:function t(e){if(Q(this.$element)){return}if(!this.$isEnabled){return}var i=e.type;var n=e.target;var r=e.relatedTarget;var a=this.$element;var s=this.$tip;if(i==="click"){this.toggle(e)}else if(i==="focusin"||i==="mouseenter"){this.enter(e)}else if(i==="focusout"){if(s&&a&&a.contains(n)&&s.contains(r)){return}if(s&&a&&s.contains(n)&&a.contains(r)){return}if(s&&s.contains(n)&&s.contains(r)){return}if(a&&a.contains(n)&&a.contains(r)){return}this.leave(e)}else if(i==="mouseleave"){this.leave(e)}}},{key:"setRouteWatcher",value:function t(e){var i=this;if(e){this.setRouteWatcher(false);if(this.$root&&Boolean(this.$root.$route)){this.$routeWatcher=this.$root.$watch("$route",function(t,e){if(t===e){return}i.forceHide()})}}else{if(this.$routeWatcher){this.$routeWatcher();this.$routeWatcher=null}}}},{key:"setModalListener",value:function t(e){var i=rt(bs,this.$element);if(!i){return}if(this.$root){this.$root[e?"$on":"$off"](ms,this.$forceHide)}}},{key:"setRootListener",value:function t(e){if(this.$root){this.$root[e?"$on":"$off"]("bv::hide::"+this.constructor.NAME,this.$doHide);this.$root[e?"$on":"$off"]("bv::show::"+this.constructor.NAME,this.$doShow);this.$root[e?"$on":"$off"]("bv::disable::"+this.constructor.NAME,this.$doDisable);this.$root[e?"$on":"$off"]("bv::enable::"+this.constructor.NAME,this.$doEnable)}}},{key:"doHide",value:function t(e){if(!e){this.forceHide()}else if(this.$element&&this.$element.id&&this.$element.id===e){this.hide()}}},{key:"doShow",value:function t(e){if(!e){this.show()}else if(e&&this.$element&&this.$element.id&&this.$element.id===e){this.show()}}},{key:"doDisable",value:function t(e){if(!e){this.disable()}else if(this.$element&&this.$element.id&&this.$element.id===e){this.disable()}}},{key:"doEnable",value:function t(e){if(!e){this.enable()}else if(this.$element&&this.$element.id&&this.$element.id===e){this.enable()}}},{key:"setOnTouchStartListener",value:function t(e){var i=this;if("ontouchstart"in document.documentElement){$(document.body.children).forEach(function(t){if(e){mt(t,"mouseover",i._noop)}else{bt(t,"mouseover",i._noop)}})}}},{key:"_noop",value:function t(){}},{key:"fixTitle",value:function t(){var e=this.$element;var n=i(dt(e,"data-original-title"));if(dt(e,"title")||n!=="string"){ut(e,"data-original-title",dt(e,"title")||"");ut(e,"title","")}}},{key:"enter",value:function t(e){var i=this;if(e){this.$activeTrigger[e.type==="focusin"?"focus":"hover"]=true}if(lt(this.getTipElement(),ks.SHOW)||this.$hoverState===ws.SHOW){this.$hoverState=ws.SHOW;return}clearTimeout(this.$hoverTimeout);this.$hoverState=ws.SHOW;if(!this.$config.delay||!this.$config.delay.show){this.show();return}this.$hoverTimeout=setTimeout(function(){if(i.$hoverState===ws.SHOW){i.show()}},this.$config.delay.show)}},{key:"leave",value:function t(e){var i=this;if(e){this.$activeTrigger[e.type==="focusout"?"focus":"hover"]=false;if(e.type==="focusout"&&/blur/.test(this.$config.trigger)){this.$activeTrigger.click=false;this.$activeTrigger.hover=false}}if(this.isWithActiveTrigger()){return}clearTimeout(this.$hoverTimeout);this.$hoverState=ws.OUT;if(!this.$config.delay||!this.$config.delay.hide){this.hide();return}this.$hoverTimeout=setTimeout(function(){if(i.$hoverState===ws.OUT){i.hide()}},this.$config.delay.hide)}},{key:"getPopperConfig",value:function t(e,i){var n=this;return{placement:this.constructor.getAttachment(e),modifiers:{offset:{offset:this.getOffset(e,i)},flip:{behavior:this.$config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.$config.boundary}},onCreate:function t(e){if(e.originalPlacement!==e.placement){n.handlePopperPlacementChange(e)}},onUpdate:function t(e){n.handlePopperPlacementChange(e)}}}},{key:"getOffset",value:function t(e,i){if(!this.$config.offset){var n=it(Ts.ARROW,i);var r=parseFloat(pt(n).width)+parseFloat(this.$config.arrowPadding);switch(Ss[e.toUpperCase()]){case+1:return"+50%p - "+r+"px";case-1:return"-50%p + "+r+"px";default:return 0}}return this.$config.offset}},{key:"getPlacement",value:function t(){var e=this.$config.placement;if(typeof e==="function"){return e.call(this,this.$tip,this.$element)}return e}},{key:"isWithActiveTrigger",value:function t(){for(var e in this.$activeTrigger){if(this.$activeTrigger[e]){return true}}return false}},{key:"cleanTipClass",value:function t(){var e=this.getTipElement();var i=e.className.match(vs);if(i!==null&&i.length>0){i.forEach(function(t){ot(e,t)})}}},{key:"handlePopperPlacementChange",value:function t(e){this.cleanTipClass();this.addAttachmentClass(this.constructor.getAttachment(e.placement))}},{key:"fixTransition",value:function t(e){var i=this.$config.animation||false;if(dt(e,"x-placement")!==null){return}ot(e,ks.FADE);this.$config.animation=false;this.hide();this.show();this.$config.animation=i}}],[{key:"getAttachment",value:function t(e){return ys[e.toUpperCase()]}},{key:"Default",get:function t(){return _s}},{key:"NAME",get:function t(){return hs}}]);return t}();var Es="popover";var Os="bs-popover";var Ps=new RegExp("\\b"+Os+"\\S+","g");var Is=y({},xs.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip">'+'<div class="arrow"></div>'+'<h3 class="popover-header"></h3>'+'<div class="popover-body"></div></div>'});var Ls={FADE:"fade",SHOW:"show"};var Fs={TITLE:".popover-header",CONTENT:".popover-body"};var Ns=function(t){s(e,t);function e(){n(this,e);return o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}r(e,[{key:"isWithContent",value:function t(e){e=e||this.$tip;if(!e){return false}var i=Boolean((it(Fs.TITLE,e)||{}).innerHTML);var n=Boolean((it(Fs.CONTENT,e)||{}).innerHTML);return i||n}},{key:"addAttachmentClass",value:function t(e){st(this.getTipElement(),Os+"-"+e)}},{key:"setContent",value:function t(e){this.setElementContent(it(Fs.TITLE,e),this.getTitle());this.setElementContent(it(Fs.CONTENT,e),this.getContent());ot(e,Ls.FADE);ot(e,Ls.SHOW)}},{key:"cleanTipClass",value:function t(){var e=this.getTipElement();var i=e.className.match(Ps);if(i!==null&&i.length>0){i.forEach(function(t){ot(e,t)})}}},{key:"getTitle",value:function t(){var e=this.$config.title||"";if(typeof e==="function"){e=e(this.$element)}if((typeof e==="undefined"?"undefined":i(e))==="object"&&e.nodeType&&!e.innerHTML.trim()){e=""}if(typeof e==="string"){e=e.trim()}if(!e){e=dt(this.$element,"title")||dt(this.$element,"data-original-title")||"";e=e.trim()}return e}},{key:"getContent",value:function t(){var e=this.$config.content||"";if(typeof e==="function"){e=e(this.$element)}if((typeof e==="undefined"?"undefined":i(e))==="object"&&e.nodeType&&!e.innerHTML.trim()){e=""}if(typeof e==="string"){e=e.trim()}return e}}],[{key:"Default",get:function t(){return Is}},{key:"NAME",get:function t(){return Es}}]);return e}(xs);var As=typeof window==="undefined";var Ds=As?Object:window.HTMLElement;var Vs={top:"top",topleft:"topleft",topright:"topright",right:"right",righttop:"righttop",rightbottom:"rightbottom",bottom:"bottom",bottomleft:"bottomleft",bottomright:"bottomright",left:"left",lefttop:"lefttop",leftbottom:"leftbottom",auto:"auto"};var Ms={subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["class","style"]};var js={props:{target:{type:[String,Object,Ds,Function]},delay:{type:[Number,Object,String],default:0},offset:{type:[Number,String],default:0},noFade:{type:Boolean,default:false},container:{type:String,default:null},boundary:{type:[String,Object],default:"scrollParent"},show:{type:Boolean,default:false},disabled:{type:Boolean,default:false}},watch:{show:function t(e,i){if(e===i){return}e?this.onOpen():this.onClose()},disabled:function t(e,i){if(e===i){return}e?this.onDisable():this.onEnable()}},created:function t(){this._toolpop=null;this._obs_title=null;this._obs_content=null},mounted:function t(){var e=this;this.$nextTick(function(){if(e.createToolpop()){if(e.disabled){e.onDisable()}e.$on("open",e.onOpen);e.$on("close",e.onClose);e.$on("disable",e.onDisable);e.$on("enable",e.onEnable);e.setObservers(true);if(e.show){e.onOpen()}}})},updated:function t(){if(this._toolpop){this._toolpop.updateConfig(this.getConfig())}},activated:function t(){this.setObservers(true)},deactivated:function t(){if(this._toolpop){this.setObservers(false);this._toolpop.hide()}},beforeDestroy:function t(){this.$off("open",this.onOpen);this.$off("close",this.onClose);this.$off("disable",this.onDisable);this.$off("enable",this.onEnable);this.setObservers(false);this.bringItBack();if(this._toolpop){this._toolpop.destroy();this._toolpop=null}},computed:{baseConfig:function t(){var e=this.container;var n=i(this.delay)==="object"?this.delay:parseInt(this.delay,10)||0;return{title:(this.title||"").trim()||"",content:(this.content||"").trim()||"",placement:Vs[this.placement]||"auto",container:e?/^#/.test(e)?e:"#"+e:false,boundary:this.boundary,delay:n||0,offset:this.offset||0,animation:!this.noFade,trigger:C(this.triggers)?this.triggers.join(" "):this.triggers,callbacks:{show:this.onShow,shown:this.onShown,hide:this.onHide,hidden:this.onHidden,enabled:this.onEnabled,disabled:this.onDisabled}}}},methods:{getConfig:function t(){var e=y({},this.baseConfig);if(this.$refs.title&&this.$refs.title.innerHTML.trim()){e.title=this.$refs.title;e.html=true}if(this.$refs.content&&this.$refs.content.innerHTML.trim()){e.content=this.$refs.content;e.html=true}return e},onOpen:function t(){if(this._toolpop){this._toolpop.show()}},onClose:function t(e){if(this._toolpop){this._toolpop.hide(e)}else if(typeof e==="function"){e()}},onDisable:function t(){if(this._toolpop){this._toolpop.disable()}},onEnable:function t(){if(this._toolpop){this._toolpop.enable()}},updatePosition:function t(){if(this._toolpop){this._toolpop.update()}},getTarget:function t(){var e=this.target;if(typeof e==="function"){e=e()}if(typeof e==="string"){return at(e)}else if((typeof e==="undefined"?"undefined":i(e))==="object"&&X(e.$el)){return e.$el}else if((typeof e==="undefined"?"undefined":i(e))==="object"&&X(e)){return e}return null},onShow:function t(e){this.$emit("show",e)},onShown:function t(e){this.setObservers(true);this.$emit("update:show",true);this.$emit("shown",e)},onHide:function t(e){this.$emit("hide",e)},onHidden:function t(e){this.setObservers(false);this.bringItBack();this.$emit("update:show",false);this.$emit("hidden",e)},onEnabled:function t(e){if(!e||e.type!=="enabled"){return}this.$emit("update:disabled",false);this.$emit("disabled")},onDisabled:function t(e){if(!e||e.type!=="disabled"){return}this.$emit("update:disabled",true);this.$emit("enabled")},bringItBack:function t(){if(this.$el&&this.$refs.title){this.$el.appendChild(this.$refs.title)}if(this.$el&&this.$refs.content){this.$el.appendChild(this.$refs.content)}},setObservers:function t(e){if(e){if(this.$refs.title){this._obs_title=he(this.$refs.title,this.updatePosition.bind(this),Ms)}if(this.$refs.content){this._obs_content=he(this.$refs.content,this.updatePosition.bind(this),Ms)}}else{if(this._obs_title){this._obs_title.disconnect();this._obs_title=null}if(this._obs_content){this._obs_content.disconnect();this._obs_content=null}}}}};var Rs={mixins:[js],render:function t(e){return e("div",{class:["d-none"],style:{display:"none"},attrs:{"aria-hidden":true}},[e("div",{ref:"title"},this.$slots.title),e("div",{ref:"content"},this.$slots.default)])},data:function t(){return{}},props:{title:{type:String,default:""},content:{type:String,default:""},triggers:{type:[String,Array],default:"click"},placement:{type:String,default:"right"}},methods:{createToolpop:function t(){var e=this.getTarget();if(e){this._toolpop=new Ns(e,this.getConfig(),this.$root)}else{this._toolpop=null;_e("b-popover: 'target' element not found!")}return this._toolpop}}};var Hs={bPopover:Rs};var zs={install:function t(e){h(e,Hs)}};g(zs);var Ws={render:function t(e){var i=e(false);if(this.$slots.default){i=this.$slots.default}else if(this.label){i=e("span",{domProps:{innerHTML:this.label}})}else if(this.computedShowProgress){i=this.progress.toFixed(this.computedPrecision)}else if(this.computedShowValue){i=this.value.toFixed(this.computedPrecision)}return e("div",{class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":this.computedMax.toString(),"aria-valuenow":this.value.toFixed(this.computedPrecision)}},[i])},computed:{progressBarClasses:function t(){return["progress-bar",this.computedVariant?"bg-"+this.computedVariant:"",this.computedStriped||this.computedAnimated?"progress-bar-striped":"",this.computedAnimated?"progress-bar-animated":""]},progressBarStyles:function t(){return{width:100*(this.value/this.computedMax)+"%"}},progress:function t(){var e=Math.pow(10,this.computedPrecision);return Math.round(100*e*this.value/this.computedMax)/e},computedMax:function t(){return typeof this.max==="number"?this.max:this.$parent.max||100},computedVariant:function t(){return this.variant||this.$parent.variant},computedPrecision:function t(){return typeof this.precision==="number"?this.precision:this.$parent.precision||0},computedStriped:function t(){return typeof this.striped==="boolean"?this.striped:this.$parent.striped||false},computedAnimated:function t(){return typeof this.animated==="boolean"?this.animated:this.$parent.animated||false},computedShowProgress:function t(){return typeof this.showProgress==="boolean"?this.showProgress:this.$parent.showProgress||false},computedShowValue:function t(){return typeof this.showValue==="boolean"?this.showValue:this.$parent.showValue||false}},props:{value:{type:Number,default:0},label:{type:String,default:null},max:{type:Number,default:null},precision:{type:Number,default:null},variant:{type:String,default:null},striped:{type:Boolean,default:null},animated:{type:Boolean,default:null},showProgress:{type:Boolean,default:null},showValue:{type:Boolean,default:null}}};var Gs={components:{bProgressBar:Ws},render:function t(e){var i=this.$slots.default;if(!i){i=e("b-progress-bar",{props:{value:this.value,max:this.max,precision:this.precision,variant:this.variant,animated:this.animated,striped:this.striped,showProgress:this.showProgress,showValue:this.showValue}})}return e("div",{class:["progress"],style:this.progressHeight},[i])},props:{variant:{type:String,default:null},striped:{type:Boolean,default:false},animated:{type:Boolean,default:false},height:{type:String,default:null},precision:{type:Number,default:0},showProgress:{type:Boolean,default:false},showValue:{type:Boolean,default:false},max:{type:Number,default:100},value:{type:Number,default:0}},computed:{progressHeight:function t(){return{height:this.height||null}}}};var Us={bProgress:Gs,bProgressBar:Ws};var qs={install:function t(e){h(e,Us)}};g(qs);var Ks=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};var Ys=1/0;var Zs="[object Symbol]";var Xs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var Js=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;var Qs="\\ud800-\\udfff",to="\\u0300-\\u036f\\ufe20-\\ufe23",eo="\\u20d0-\\u20f0",io="\\u2700-\\u27bf",no="a-z\\xdf-\\xf6\\xf8-\\xff",ro="\\xac\\xb1\\xd7\\xf7",ao="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",so="\\u2000-\\u206f",oo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",lo="A-Z\\xc0-\\xd6\\xd8-\\xde",uo="\\ufe0e\\ufe0f",fo=ro+ao+so+oo;var co="['’]",ho="["+Qs+"]",po="["+fo+"]",vo="["+to+eo+"]",go="\\d+",mo="["+io+"]",bo="["+no+"]",yo="[^"+Qs+fo+go+io+no+lo+"]",So="\\ud83c[\\udffb-\\udfff]",wo="(?:"+vo+"|"+So+")",ko="[^"+Qs+"]",To="(?:\\ud83c[\\udde6-\\uddff]){2}",_o="[\\ud800-\\udbff][\\udc00-\\udfff]",$o="["+lo+"]",Co="\\u200d";var Bo="(?:"+bo+"|"+yo+")",xo="(?:"+$o+"|"+yo+")",Eo="(?:"+co+"(?:d|ll|m|re|s|t|ve))?",Oo="(?:"+co+"(?:D|LL|M|RE|S|T|VE))?",Po=wo+"?",Io="["+uo+"]?",Lo="(?:"+Co+"(?:"+[ko,To,_o].join("|")+")"+Io+Po+")*",Fo=Io+Po+Lo,No="(?:"+[mo,To,_o].join("|")+")"+Fo,Ao="(?:"+[ko+vo+"?",vo,To,_o,ho].join("|")+")";var Do=RegExp(co,"g");var Vo=RegExp(vo,"g");var Mo=RegExp(So+"(?="+So+")|"+Ao+Fo,"g");var jo=RegExp([$o+"?"+bo+"+"+Eo+"(?="+[po,$o,"$"].join("|")+")",xo+"+"+Oo+"(?="+[po,$o+Bo,"$"].join("|")+")",$o+"?"+Bo+"+"+Eo,$o+"+"+Oo,go,No].join("|"),"g");var Ro=RegExp("["+Co+Qs+to+eo+uo+"]");var Ho=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var zo={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"};var Wo=i(Ks)=="object"&&Ks&&Ks.Object===Object&&Ks;var Go=(typeof self==="undefined"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self;var Uo=Wo||Go||Function("return this")();function qo(t,e,i,n){var r=-1,a=t?t.length:0;if(n&&a){i=t[++r]}while(++r<a){i=e(i,t[r],r,t)}return i}function Ko(t){return t.split("")}function Yo(t){return t.match(Xs)||[]}function Zo(t){return function(e){return t==null?undefined:t[e]}}var Xo=Zo(zo);function Jo(t){return Ro.test(t)}function Qo(t){return Ho.test(t)}function tl(t){return Jo(t)?el(t):Ko(t)}function el(t){return t.match(Mo)||[]}function il(t){return t.match(jo)||[]}var nl=Object.prototype;var rl=nl.toString;var al=Uo.Symbol;var sl=al?al.prototype:undefined,ol=sl?sl.toString:undefined;function ll(t,e,i){var n=-1,r=t.length;if(e<0){e=-e>r?0:r+e}i=i>r?r:i;if(i<0){i+=r}r=e>i?0:i-e>>>0;e>>>=0;var a=Array(r);while(++n<r){a[n]=t[n+e]}return a}function ul(t){if(typeof t=="string"){return t}if(pl(t)){return ol?ol.call(t):""}var e=t+"";return e=="0"&&1/t==-Ys?"-0":e}function fl(t,e,i){var n=t.length;i=i===undefined?n:i;return!e&&i>=n?t:ll(t,e,i)}function dl(t){return function(e){e=vl(e);var i=Jo(e)?tl(e):undefined;var n=i?i[0]:e.charAt(0);var r=i?fl(i,1).join(""):e.slice(1);return n[t]()+r}}function cl(t){return function(e){return qo(yl(gl(e).replace(Do,"")),t,"")}}function hl(t){return!!t&&(typeof t==="undefined"?"undefined":i(t))=="object"}function pl(t){return(typeof t==="undefined"?"undefined":i(t))=="symbol"||hl(t)&&rl.call(t)==Zs}function vl(t){return t==null?"":ul(t)}function gl(t){t=vl(t);return t&&t.replace(Js,Xo).replace(Vo,"")}var ml=cl(function(t,e,i){return t+(i?" ":"")+bl(e)});var bl=dl("toUpperCase");function yl(t,e,i){t=vl(t);e=i?undefined:e;if(e===undefined){return Qo(t)?il(t):Yo(t)}return t.match(e)||[]}var Sl=ml;var wl="Expected a function";var kl="__lodash_hash_undefined__";var Tl=1/0;var _l="[object Function]",$l="[object GeneratorFunction]",Cl="[object Symbol]";var Bl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xl=/^\w*$/,El=/^\./,Ol=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var Pl=/[\\^$.*+?()[\]{}|]/g;var Il=/\\(\\)?/g;var Ll=/^\[object .+?Constructor\]$/;var Fl=i(Ks)=="object"&&Ks&&Ks.Object===Object&&Ks;var Nl=(typeof self==="undefined"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self;var Al=Fl||Nl||Function("return this")();function Dl(t,e){return t==null?undefined:t[e]}function Vl(t){var e=false;if(t!=null&&typeof t.toString!="function"){try{e=!!(t+"")}catch(t){}}return e}var Ml=Array.prototype,jl=Function.prototype,Rl=Object.prototype;var Hl=Al["__core-js_shared__"];var zl=function(){var t=/[^.]+$/.exec(Hl&&Hl.keys&&Hl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();var Wl=jl.toString;var Gl=Rl.hasOwnProperty;var Ul=Rl.toString;var ql=RegExp("^"+Wl.call(Gl).replace(Pl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Kl=Al.Symbol,Yl=Ml.splice;var Zl=_u(Al,"Map"),Xl=_u(Object,"create");var Jl=Kl?Kl.prototype:undefined,Ql=Jl?Jl.toString:undefined;function tu(t){var e=-1,i=t?t.length:0;this.clear();while(++e<i){var n=t[e];this.set(n[0],n[1])}}function eu(){this.__data__=Xl?Xl(null):{}}function iu(t){return this.has(t)&&delete this.__data__[t]}function nu(t){var e=this.__data__;if(Xl){var i=e[t];return i===kl?undefined:i}return Gl.call(e,t)?e[t]:undefined}function ru(t){var e=this.__data__;return Xl?e[t]!==undefined:Gl.call(e,t)}function au(t,e){var i=this.__data__;i[t]=Xl&&e===undefined?kl:e;return this}tu.prototype.clear=eu;tu.prototype["delete"]=iu;tu.prototype.get=nu;tu.prototype.has=ru;tu.prototype.set=au;function su(t){var e=-1,i=t?t.length:0;this.clear();while(++e<i){var n=t[e];this.set(n[0],n[1])}}function ou(){this.__data__=[]}function lu(t){var e=this.__data__,i=bu(e,t);if(i<0){return false}var n=e.length-1;if(i==n){e.pop()}else{Yl.call(e,i,1)}return true}function uu(t){var e=this.__data__,i=bu(e,t);return i<0?undefined:e[i][1]}function fu(t){return bu(this.__data__,t)>-1}function du(t,e){var i=this.__data__,n=bu(i,t);if(n<0){i.push([t,e])}else{i[n][1]=e}return this}su.prototype.clear=ou;su.prototype["delete"]=lu;su.prototype.get=uu;su.prototype.has=fu;su.prototype.set=du;function cu(t){var e=-1,i=t?t.length:0;this.clear();while(++e<i){var n=t[e];this.set(n[0],n[1])}}function hu(){this.__data__={hash:new tu,map:new(Zl||su),string:new tu}}function pu(t){return Tu(this,t)["delete"](t)}function vu(t){return Tu(this,t).get(t)}function gu(t){return Tu(this,t).has(t)}function mu(t,e){Tu(this,t).set(t,e);return this}cu.prototype.clear=hu;cu.prototype["delete"]=pu;cu.prototype.get=vu;cu.prototype.has=gu;cu.prototype.set=mu;function bu(t,e){var i=t.length;while(i--){if(Iu(t[i][0],e)){return i}}return-1}function yu(t,e){e=$u(e,t)?[e]:ku(e);var i=0,n=e.length;while(t!=null&&i<n){t=t[Eu(e[i++])]}return i&&i==n?t:undefined}function Su(t){if(!Nu(t)||Bu(t)){return false}var e=Fu(t)||Vl(t)?ql:Ll;return e.test(Ou(t))}function wu(t){if(typeof t=="string"){return t}if(Du(t)){return Ql?Ql.call(t):""}var e=t+"";return e=="0"&&1/t==-Tl?"-0":e}function ku(t){return Lu(t)?t:xu(t)}function Tu(t,e){var i=t.__data__;return Cu(e)?i[typeof e=="string"?"string":"hash"]:i.map}function _u(t,e){var i=Dl(t,e);return Su(i)?i:undefined}function $u(t,e){if(Lu(t)){return false}var n=typeof t==="undefined"?"undefined":i(t);if(n=="number"||n=="symbol"||n=="boolean"||t==null||Du(t)){return true}return xl.test(t)||!Bl.test(t)||e!=null&&t in Object(e)}function Cu(t){var e=typeof t==="undefined"?"undefined":i(t);return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Bu(t){return!!zl&&zl in t}var xu=Pu(function(t){t=Vu(t);var e=[];if(El.test(t)){e.push("")}t.replace(Ol,function(t,i,n,r){e.push(n?r.replace(Il,"$1"):i||t)});return e});function Eu(t){if(typeof t=="string"||Du(t)){return t}var e=t+"";return e=="0"&&1/t==-Tl?"-0":e}function Ou(t){if(t!=null){try{return Wl.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Pu(t,e){if(typeof t!="function"||e&&typeof e!="function"){throw new TypeError(wl)}var i=function i(){var n=arguments,r=e?e.apply(this,n):n[0],a=i.cache;if(a.has(r)){return a.get(r)}var s=t.apply(this,n);i.cache=a.set(r,s);return s};i.cache=new(Pu.Cache||cu);return i}Pu.Cache=cu;function Iu(t,e){return t===e||t!==t&&e!==e}var Lu=Array.isArray;function Fu(t){var e=Nu(t)?Ul.call(t):"";return e==_l||e==$l}function Nu(t){var e=typeof t==="undefined"?"undefined":i(t);return!!t&&(e=="object"||e=="function")}function Au(t){return!!t&&(typeof t==="undefined"?"undefined":i(t))=="object"}function Du(t){return(typeof t==="undefined"?"undefined":i(t))=="symbol"||Au(t)&&Ul.call(t)==Cl}function Vu(t){return t==null?"":wu(t)}function Mu(t,e,i){var n=t==null?undefined:yu(t,e);return n===undefined?i:n}var ju=Mu;function Ru(t,e){return t.map(function(t,e){return[e,t]}).sort(function(t,e){return this(t[1],e[1])||t[0]-e[0]}.bind(e)).map(function(t){return t[1]})}function Hu(t){if(!t){return""}if(t instanceof Object){return S(t).map(function(e){return Hu(t[e])}).join(" ")}return String(t)}function zu(t){if(!(t instanceof Object)){return""}return Hu(S(t).reduce(function(e,i){if(!/^_/.test(i)){e[i]=t[i]}return e},{}))}function Wu(t,e,i){if(typeof t[i]==="number"&&typeof e[i]==="number"){return t[i]<e[i]&&-1||t[i]>e[i]&&1||0}return Hu(t[i]).localeCompare(Hu(e[i]),undefined,{numeric:true})}function Gu(t,e){var n=null;if(typeof e==="string"){n={key:t,label:e}}else if(typeof e==="function"){n={key:t,formatter:e}}else if((typeof e==="undefined"?"undefined":i(e))==="object"){n=y({},e);n.key=n.key||t}else if(e!==false){n={key:t}}return n}var Uu={mixins:[pe,Ze],render:function t(e){var i=this;var n=this.$slots;var r=this.$scopedSlots;var a=this.computedFields;var s=this.computedItems;var o=e(false);if(this.caption||n["table-caption"]){var l={style:this.captionStyles};if(!n["table-caption"]){l.domProps={innerHTML:this.caption}}o=e("caption",l,n["table-caption"])}var u=n["table-colgroup"]?e("colgroup",{},n["table-colgroup"]):e(false);var f=function t(){var n=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;return a.map(function(t,a){var s={key:t.key,class:i.fieldClasses(t),style:t.thStyle||{},attrs:{tabindex:t.sortable?"0":null,abbr:t.headerAbbr||null,title:t.headerTitle||null,"aria-colindex":String(a+1),"aria-label":t.sortable?i.localSortDesc&&i.localSortBy===t.key?i.labelSortAsc:i.labelSortDesc:null,"aria-sort":t.sortable&&i.localSortBy===t.key?i.localSortDesc?"descending":"ascending":null},on:{click:function e(n){n.stopPropagation();n.preventDefault();i.headClicked(n,t)},keydown:function e(n){var r=n.keyCode;if(r===Pt.ENTER||r===Pt.SPACE){n.stopPropagation();n.preventDefault();i.headClicked(n,t)}}}};var o=n&&r["FOOT_"+t.key]?r["FOOT_"+t.key]:r["HEAD_"+t.key];if(o){o=[o({label:t.label,column:t.key,field:t})]}else{s.domProps={innerHTML:t.label}}return e("th",s,o)})};var d=e(false);if(this.isStacked!==true){d=e("thead",{class:this.headClasses},[e("tr",{class:this.theadTrClass},f(false))])}var c=e(false);if(this.footClone&&this.isStacked!==true){c=e("tfoot",{class:this.footClasses},[e("tr",{class:this.tfootTrClass},f(true))])}var h=[];if(r["top-row"]&&this.isStacked!==true){h.push(e("tr",{key:"top-row",class:["b-table-top-row",this.tbodyTrClass]},[r["top-row"]({columns:a.length,fields:a})]))}else{h.push(e(false))}s.forEach(function(t,n){var s=r["row-details"];var o=Boolean(t._showDetails&&s);var l=o?i.safeId("_details_"+n+"_"):null;var u=function e(){if(s){i.$set(t,"_showDetails",!t._showDetails)}};var f=a.map(function(a,s){var o={key:"row-"+n+"-cell-"+s,class:i.tdClasses(a,t),attrs:i.tdAttrs(a,t,s),domProps:{}};var l=void 0;if(r[a.key]){l=[r[a.key]({item:t,index:n,field:a,unformatted:ju(t,a.key),value:i.getFormattedValue(t,a),toggleDetails:u,detailsShowing:Boolean(t._showDetails)})];if(i.isStacked){l=[e("div",{},[l])]}}else{var f=i.getFormattedValue(t,a);if(i.isStacked){l=[e("div",f)]}else{l=f}}return e(a.isRowHeader?"th":"td",o,l)});var d=null;if(i.currentPage&&i.perPage&&i.perPage>0){d=(i.currentPage-1)*i.perPage+n+1}h.push(e("tr",{key:"row-"+n,class:[i.rowClasses(t),{"b-table-has-details":o}],attrs:{"aria-describedby":l,"aria-rowindex":d,role:i.isStacked?"row":null},on:{click:function e(r){i.rowClicked(r,t,n)},dblclick:function e(r){i.rowDblClicked(r,t,n)},mouseenter:function e(r){i.rowHovered(r,t,n)}}},f));if(o){var c={colspan:String(a.length)};var p={id:l};if(i.isStacked){c["role"]="cell";p["role"]="row"}var v=e("td",{attrs:c},[s({item:t,index:n,fields:a,toggleDetails:u})]);h.push(e("tr",{key:"details-"+n,class:["b-table-details",i.tbodyTrClass],attrs:p},[v]))}else if(s){h.push(e(false))}});if(this.showEmpty&&(!s||s.length===0)){var p=this.filter?n["emptyfiltered"]:n["empty"];if(!p){p=e("div",{class:["text-center","my-2"],domProps:{innerHTML:this.filter?this.emptyFilteredText:this.emptyText}})}p=e("td",{attrs:{colspan:String(a.length),role:this.isStacked?"cell":null}},[e("div",{attrs:{role:"alert","aria-live":"polite"}},[p])]);h.push(e("tr",{key:"empty-row",class:["b-table-empty-row",this.tbodyTrClass],attrs:this.isStacked?{role:"row"}:{}},[p]))}else{h.push(e(false))}if(r["bottom-row"]&&this.isStacked!==true){h.push(e("tr",{key:"bottom-row",class:["b-table-bottom-row",this.tbodyTrClass]},[r["bottom-row"]({columns:a.length,fields:a})]))}else{h.push(e(false))}var v=e("tbody",{class:this.bodyClasses,attrs:this.isStacked?{role:"rowgroup"}:{}},h);var g=e("table",{class:this.tableClasses,attrs:{id:this.safeId(),role:this.isStacked?"table":null,"aria-busy":this.computedBusy?"true":"false","aria-colcount":String(a.length),"aria-rowcount":this.$attrs["aria-rowcount"]||this.items.length>this.perPage?this.items.length:null}},[o,u,d,c,v]);return this.isResponsive?e("div",{class:this.responsiveClass},[g]):g},data:function t(){return{localSortBy:this.sortBy||"",localSortDesc:this.sortDesc||false,localItems:[],filteredItems:[],localBusy:false}},props:{items:{type:[Array,Function],default:function t(){return[]}},fields:{type:[Object,Array],default:null},sortBy:{type:String,default:null},sortDesc:{type:Boolean,default:false},sortDirection:{type:String,default:"asc",validator:function t(e){return B(["asc","desc","last"],e)}},caption:{type:String,default:null},captionTop:{type:Boolean,default:false},striped:{type:Boolean,default:false},bordered:{type:Boolean,default:false},outlined:{type:Boolean,default:false},dark:{type:Boolean,default:function t(){if(this&&typeof this.inverse==="boolean"){_e("b-table: prop 'inverse' has been deprecated. Use 'dark' instead");return this.dark}return false}},inverse:{type:Boolean,default:null},hover:{type:Boolean,default:false},small:{type:Boolean,default:false},fixed:{type:Boolean,default:false},footClone:{type:Boolean,default:false},responsive:{type:[Boolean,String],default:false},stacked:{type:[Boolean,String],default:false},headVariant:{type:String,default:""},footVariant:{type:String,default:""},theadClass:{type:[String,Array],default:null},theadTrClass:{type:[String,Array],default:null},tbodyClass:{type:[String,Array],default:null},tbodyTrClass:{type:[String,Array],default:null},tfootClass:{type:[String,Array],default:null},tfootTrClass:{type:[String,Array],default:null},perPage:{type:Number,default:0},currentPage:{type:Number,default:1},filter:{type:[String,RegExp,Function],default:null},sortCompare:{type:Function,default:null},noLocalSorting:{type:Boolean,default:false},noProviderPaging:{type:Boolean,default:false},noProviderSorting:{type:Boolean,default:false},noProviderFiltering:{type:Boolean,default:false},noSortReset:{type:Boolean,default:false},busy:{type:Boolean,default:false},value:{type:Array,default:function t(){return[]}},labelSortAsc:{type:String,default:"Click to sort Ascending"},labelSortDesc:{type:String,default:"Click to sort Descending"},showEmpty:{type:Boolean,default:false},emptyText:{type:String,default:"There are no records to show"},emptyFilteredText:{type:String,default:"There are no records matching your request"},apiUrl:{type:String,default:""}},watch:{items:function t(e,i){if(i!==e){this._providerUpdate()}},context:function t(e,i){if(!xr(e,i)){this.$emit("context-changed",e)}},filteredItems:function t(e,i){if(this.localFiltering&&e.length!==i.length){this.$emit("filtered",e)}},sortDesc:function t(e,i){if(e===this.localSortDesc){return}this.localSortDesc=e||false},localSortDesc:function t(e,i){if(e!==i){this.$emit("update:sortDesc",e);if(!this.noProviderSorting){this._providerUpdate()}}},sortBy:function t(e,i){if(e===this.localSortBy){return}this.localSortBy=e||null},localSortBy:function t(e,i){if(e!==i){this.$emit("update:sortBy",e);if(!this.noProviderSorting){this._providerUpdate()}}},perPage:function t(e,i){if(i!==e&&!this.noProviderPaging){this._providerUpdate()}},currentPage:function t(e,i){if(i!==e&&!this.noProviderPaging){this._providerUpdate()}},filter:function t(e,i){if(i!==e&&!this.noProviderFiltering){this._providerUpdate()}},localBusy:function t(e,i){if(e!==i){this.$emit("update:busy",e)}}},mounted:function t(){var e=this;this.localSortBy=this.sortBy;this.localSortDesc=this.sortDesc;if(this.hasProvider){this._providerUpdate()}this.listenOnRoot("bv::refresh::table",function(t){if(t===e.id||t===e){e._providerUpdate()}})},computed:{isStacked:function t(){return this.stacked===""?true:this.stacked},isResponsive:function t(){var e=this.responsive===""?true:this.responsive;return this.isStacked?false:e},responsiveClass:function t(){return this.isResponsive===true?"table-responsive":this.isResponsive?"table-responsive-"+this.responsive:""},tableClasses:function t(){return["table","b-table",this.striped?"table-striped":"",this.hover?"table-hover":"",this.dark?"table-dark":"",this.bordered?"table-bordered":"",this.small?"table-sm":"",this.outlined?"border":"",this.fixed?"b-table-fixed":"",this.isStacked===true?"b-table-stacked":this.isStacked?"b-table-stacked-"+this.stacked:""]},headClasses:function t(){return[this.headVariant?"thead-"+this.headVariant:"",this.theadClass]},bodyClasses:function t(){return[this.tbodyClass]},footClasses:function t(){var e=this.footVariant||this.headVariant||null;return[e?"thead-"+e:"",this.tfootClass]},captionStyles:function t(){return this.captionTop?{captionSide:"top"}:{}},hasProvider:function t(){return this.items instanceof Function},localFiltering:function t(){return this.hasProvider?this.noProviderFiltering:true},localSorting:function t(){return this.hasProvider?this.noProviderSorting:!this.noLocalSorting},localPaging:function t(){return this.hasProvider?this.noProviderPaging:true},context:function t(){return{perPage:this.perPage,currentPage:this.currentPage,filter:this.filter,sortBy:this.localSortBy,sortDesc:this.localSortDesc,apiUrl:this.apiUrl}},computedFields:function t(){var e=this;var n=[];if(C(this.fields)){this.fields.filter(function(t){return t}).forEach(function(t){if(typeof t==="string"){n.push({key:t,label:Sl(t)})}else if((typeof t==="undefined"?"undefined":i(t))==="object"&&t.key&&typeof t.key==="string"){n.push(y({},t))}else if((typeof t==="undefined"?"undefined":i(t))==="object"&&S(t).length===1){var e=S(t)[0];var r=Gu(e,t[e]);if(r){n.push(r)}}})}else if(this.fields&&i(this.fields)==="object"&&S(this.fields).length>0){S(this.fields).forEach(function(t){var i=Gu(t,e.fields[t]);if(i){n.push(i)}})}if(n.length===0&&this.computedItems.length>0){var r=this.computedItems[0];var a=["_rowVariant","_cellVariants","_showDetails"];S(r).forEach(function(t){if(!a.includes(t)){n.push({key:t,label:Sl(t)})}})}var s={};return n.filter(function(t){if(!s[t.key]){s[t.key]=true;t.label=typeof t.label==="string"?t.label:Sl(t.key);return true}return false})},computedItems:function t(){var e=this.perPage;var i=this.currentPage;var n=this.filter;var r=this.localSortBy;var a=this.localSortDesc;var s=this.sortCompare;var o=this.localFiltering;var l=this.localSorting;var u=this.localPaging;var f=this.hasProvider?this.localItems:this.items;if(!f){this.$nextTick(this._providerUpdate);return[]}f=f.slice();if(n&&o){if(n instanceof Function){f=f.filter(n)}else{var d=void 0;if(n instanceof RegExp){d=n}else{d=new RegExp(".*"+n+".*","ig")}f=f.filter(function(t){var e=d.test(zu(t));d.lastIndex=0;return e})}}if(o){this.filteredItems=f.slice()}if(r&&l){f=Ru(f,function(t,e){var i=null;if(typeof s==="function"){i=s(t,e,r)}if(i===null||i===undefined){i=Wu(t,e,r)}return(i||0)*(a?-1:1)})}if(Boolean(e)&&u){f=f.slice((i-1)*e,i*e)}this.$emit("input",f);return f},computedBusy:function t(){return this.busy||this.localBusy}},methods:{keys:S,fieldClasses:function t(e){return[e.sortable?"sorting":"",e.sortable&&this.localSortBy===e.key?"sorting_"+(this.localSortDesc?"desc":"asc"):"",e.variant?"table-"+e.variant:"",e.class?e.class:"",e.thClass?e.thClass:""]},tdClasses:function t(e,i){var n="";if(i._cellVariants&&i._cellVariants[e.key]){n=(this.dark?"bg":"table")+"-"+i._cellVariants[e.key]}return[e.variant&&!n?(this.dark?"bg":"table")+"-"+e.variant:"",n,e.class?e.class:"",this.getTdValues(i,e.key,e.tdClass,"")]},tdAttrs:function t(e,i,n){var r={};r["aria-colindex"]=String(n+1);if(this.isStacked){r["data-label"]=e.label;if(e.isRowHeader){r["role"]="rowheader"}else{r["role"]="cell"}}return y({},r,this.getTdValues(i,e.key,e.tdAttr,{}))},rowClasses:function t(e){return[e._rowVariant?(this.dark?"bg":"table")+"-"+e._rowVariant:"",this.tbodyTrClass]},rowClicked:function t(e,i,n){if(this.stopIfBusy(e)){return}this.$emit("row-clicked",i,n,e)},rowDblClicked:function t(e,i,n){if(this.stopIfBusy(e)){return}this.$emit("row-dblclicked",i,n,e)},rowHovered:function t(e,i,n){if(this.stopIfBusy(e)){return}this.$emit("row-hovered",i,n,e)},headClicked:function t(e,i){var n=this;if(this.stopIfBusy(e)){return}var r=false;var a=function t(){var e=i.sortDirection||n.sortDirection;if(e==="asc"){n.localSortDesc=false}else if(e==="desc"){n.localSortDesc=true}};if(i.sortable){if(i.key===this.localSortBy){this.localSortDesc=!this.localSortDesc}else{this.localSortBy=i.key;a()}r=true}else if(this.localSortBy&&!this.noSortReset){this.localSortBy=null;a();r=true}this.$emit("head-clicked",i.key,i,e);if(r){this.$emit("sort-changed",this.context)}},stopIfBusy:function t(e){if(this.computedBusy){e.preventDefault();e.stopPropagation();return true}return false},refresh:function t(){if(this.hasProvider){this._providerUpdate()}},_providerSetLocal:function t(e){this.localItems=e&&e.length>0?e.slice():[];this.localBusy=false;this.$emit("refreshed");this.emitOnRoot("table::refreshed",this.id);if(this.id){this.emitOnRoot("bv::table::refreshed",this.id)}},_providerUpdate:function t(){var e=this;if(this.computedBusy||!this.hasProvider){return}this.localBusy=true;var i=this.items(this.context,this._providerSetLocal);if(i&&i.then&&typeof i.then==="function"){i.then(function(t){e._providerSetLocal(t)})}else{this._providerSetLocal(i)}},getTdValues:function t(e,i,n,r){var a=this.$parent;if(n){if(typeof n==="function"){var s=ju(e,i);return n(s,i,e)}else if(typeof n==="string"&&typeof a[n]==="function"){var o=ju(e,i);return a[n](o,i,e)}return n}return r},getFormattedValue:function t(e,i){var n=i.key;var r=i.formatter;var a=this.$parent;var s=ju(e,n);if(r){if(typeof r==="function"){s=r(s,n,e)}else if(typeof r==="string"&&typeof a[r]==="function"){s=a[r](s,n,e)}}return s}}};var qu={bTable:Uu};var Ku={install:function t(e){h(e,qu)}};g(Ku);var Yu={name:"bTabButtonHelper",props:{content:{type:[String,Array],default:""},href:{type:String,default:"#"},posInSet:{type:Number,default:null},setSize:{type:Number,default:null},controls:{type:String,default:null},id:{type:String,default:null},active:{type:Boolean,default:false},disabled:{type:Boolean,default:false},linkClass:{default:null},itemClass:{default:null},noKeyNav:{type:Boolean,default:false}},render:function t(e){var i=e("a",{class:["nav-link",{active:this.active,disabled:this.disabled},this.linkClass],attrs:{role:"tab",tabindex:this.noKeyNav?null:"-1",href:this.href,id:this.id,disabled:this.disabled,"aria-selected":this.active?"true":"false","aria-setsize":this.setSize,"aria-posinset":this.posInSet,"aria-controls":this.controls},on:{click:this.handleClick,keydown:this.handleClick}},this.content);return e("li",{class:["nav-item",this.itemClass],attrs:{role:"presentation"}},[i])},methods:{handleClick:function t(e){function i(){e.preventDefault();e.stopPropagation()}if(e.type!=="click"&&this.noKeyNav){return}if(this.disabled){i();return}if(e.type==="click"||e.keyCode===Pt.ENTER||e.keyCode===Pt.SPACE){i();this.$emit("click",e)}}}};var Zu={mixins:[pe],render:function t(e){var i=this,n;var r=this.tabs;var s=r.map(function(t,n){return e(Yu,{key:n,props:{content:t.$slots.title||t.title,href:t.href,id:t.controlledBy||i.safeId("_BV_tab_"+(n+1)+"_"),active:t.localActive,disabled:t.disabled,setSize:r.length,posInSet:n+1,controls:i.safeId("_BV_tab_container_"),linkClass:t.titleLinkClass,itemClass:t.titleItemClass,noKeyNav:i.noKeyNav},on:{click:function t(e){i.setTab(n)}}})});var o=e("ul",{class:["nav",(n={},a(n,"nav-"+this.navStyle,!this.noNavStyle),a(n,"card-header-"+this.navStyle,this.card&&!this.vertical),a(n,"card-header",this.card&&this.vertical),a(n,"h-100",this.card&&this.vertical),a(n,"flex-column",this.vertical),a(n,"border-bottom-0",this.vertical),a(n,"rounded-0",this.vertical),a(n,"small",this.small),n),this.navClass],attrs:{role:"tablist",tabindex:this.noKeyNav?null:"0",id:this.safeId("_BV_tab_controls_")},on:{keydown:this.onKeynav}},[s,this.$slots.tabs]);o=e("div",{class:[{"card-header":this.card&&!this.vertical&&!(this.end||this.bottom),"card-footer":this.card&&!this.vertical&&(this.end||this.bottom),"col-auto":this.vertical},this.navWrapperClass]},[o]);var l=void 0;if(r&&r.length){l=e(false)}else{l=e("div",{class:["tab-pane","active",{"card-body":this.card}]},this.$slots.empty)}var u=e("div",{ref:"tabsContainer",class:["tab-content",{col:this.vertical},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")}},[this.$slots.default,l]);return e(this.tag,{class:["tabs",{row:this.vertical,"no-gutters":this.vertical&&this.card}],attrs:{id:this.safeId()}},[this.end||this.bottom?u:e(false),[o],this.end||this.bottom?e(false):u])},data:function t(){return{currentTab:this.value,tabs:[]}},props:{tag:{type:String,default:"div"},card:{type:Boolean,default:false},small:{type:Boolean,default:false},value:{type:Number,default:null},pills:{type:Boolean,default:false},vertical:{type:Boolean,default:false},bottom:{type:Boolean,default:false},end:{type:Boolean,default:false},noFade:{type:Boolean,default:false},noNavStyle:{type:Boolean,default:false},noKeyNav:{type:Boolean,default:false},lazy:{type:Boolean,default:false},contentClass:{type:[String,Array,Object],default:null},navClass:{type:[String,Array,Object],default:null},navWrapperClass:{type:[String,Array,Object],default:null}},watch:{currentTab:function t(e,i){if(e===i){return}this.$root.$emit("changed::tab",this,e,this.tabs[e]);this.$emit("input",e);this.tabs[e].$emit("click")},value:function t(e,i){if(e===i){return}if(typeof i!=="number"){i=0}var n=e<i?-1:1;this.setTab(e,false,n)}},computed:{fade:function t(){return!this.noFade},navStyle:function t(){return this.pills?"pills":"tabs"}},methods:{sign:function t(e){return e===0?0:e>0?1:-1},onKeynav:function t(e){if(this.noKeyNav){return}var i=e.keyCode;var n=e.shiftKey;function r(){e.preventDefault();e.stopPropagation()}if(i===Pt.UP||i===Pt.LEFT){r();if(n){this.setTab(0,false,1)}else{this.previousTab()}}else if(i===Pt.DOWN||i===Pt.RIGHT){r();if(n){this.setTab(this.tabs.length-1,false,-1)}else{this.nextTab()}}},nextTab:function t(){this.setTab(this.currentTab+1,false,1)},previousTab:function t(){this.setTab(this.currentTab-1,false,-1)},setTab:function t(e,i,n){var r=this;n=this.sign(n||0);e=e||0;if(!i&&e===this.currentTab){return}var a=this.tabs[e];if(!a){this.$emit("input",this.currentTab);return}if(a.disabled){if(n){this.setTab(e+n,i,n)}return}this.tabs.forEach(function(t){if(t===a){r.$set(t,"localActive",true)}else{r.$set(t,"localActive",false)}});this.currentTab=e},updateTabs:function t(){this.tabs=this.$children.filter(function(t){return t._isTab});var e=null;this.tabs.forEach(function(t,i){if(t.localActive&&!t.disabled){e=i}});if(e===null){if(this.currentTab>=this.tabs.length){this.setTab(this.tabs.length-1,true,-1);return}else if(this.tabs[this.currentTab]&&!this.tabs[this.currentTab].disabled){e=this.currentTab}}if(e===null){this.tabs.forEach(function(t,i){if(!t.disabled&&e===null){e=i}})}this.setTab(e||0,true,0)}},mounted:function t(){this.updateTabs();he(this.$refs.tabsContainer,this.updateTabs.bind(this),{subtree:false})}};var Xu={mixins:[pe],render:function t(e){var i=e(false);if(this.localActive||!this.computedLazy){i=e(this.tag,{ref:"panel",class:this.tabClasses,directives:[{name:"show",value:this.localActive}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":this.localActive?"false":"true","aria-expanded":this.localActive?"true":"false","aria-lablelledby":this.controlledBy||null}},[this.$slots.default])}return e("transition",{props:{mode:"out-in"},on:{beforeEnter:this.beforeEnter,beforeLeave:this.beforeLeave}},[i])},methods:{beforeEnter:function t(){var e=this;window.requestAnimationFrame(function(){e.show=true})},beforeLeave:function t(){this.show=false}},data:function t(){return{localActive:this.active&&!this.disabled,show:false}},mounted:function t(){this.show=this.localActive},computed:{tabClasses:function t(){return["tab-pane",this.$parent&&this.$parent.card&&!this.noBody?"card-body":"",this.show?"show":"",this.computedFade?"fade":"",this.disabled?"disabled":"",this.localActive?"active":""]},controlledBy:function t(){return this.buttonId||this.safeId("__BV_tab_button__")},computedFade:function t(){return this.$parent.fade},computedLazy:function t(){return this.$parent.lazy},_isTab:function t(){return true}},props:{active:{type:Boolean,default:false},tag:{type:String,default:"div"},buttonId:{type:String,default:""},title:{type:String,default:""},titleItemClass:{type:[String,Array,Object],default:null},titleLinkClass:{type:[String,Array,Object],default:null},headHtml:{type:String,default:null},disabled:{type:Boolean,default:false},noBody:{type:Boolean,default:false},href:{type:String,default:"#"}}};var Ju={bTabs:Zu,bTab:Xu};var Qu={install:function t(e){h(e,Ju)}};g(Qu);var tf={mixins:[js],render:function t(e){return e("div",{class:["d-none"],style:{display:"none"},attrs:{"aria-hidden":true}},[e("div",{ref:"title"},this.$slots.default)])},data:function t(){return{}},props:{title:{type:String,default:""},triggers:{type:[String,Array],default:"hover focus"},placement:{type:String,default:"top"}},methods:{createToolpop:function t(){var e=this.getTarget();if(e){this._toolpop=new xs(e,this.getConfig(),this.$root)}else{this._toolpop=null;_e("b-tooltip: 'target' element not found!")}return this._toolpop}}};var ef={bTooltip:tf};var nf={install:function t(e){h(e,ef)}};g(nf);var rf=Object.freeze({Alert:b,Badge:H,Breadcrumb:Z,Button:Ct,ButtonToolbar:Nt,ButtonGroup:Ot,Card:ce,Carousel:Be,Collapse:pi,Dropdown:nr,Embed:or,Form:mr,FormGroup:kr,FormInput:Hr,FormTextarea:Gr,FormFile:Kr,FormCheckbox:Fr,FormRadio:Vr,FormSelect:Xr,Image:ea,InputGroup:Gt,Jumbotron:aa,Layout:Ke,Link:oa,ListGroup:va,Media:Ta,Modal:Ia,Nav:Ha,Navbar:Ja,Pagination:os,PaginationNav:cs,Popover:zs,Progress:qs,Table:Ku,Tabs:Qu,Tooltip:nf});var af="v-b-scrollspy";var sf="bv::scrollspy::activate";var of={element:"body",offset:10,method:"auto",throttle:75};var lf={element:"(string|element|component)",offset:"number",method:"string",throttle:"number"};var uf={DROPDOWN_ITEM:"dropdown-item",ACTIVE:"active"};var ff={ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown, .dropup",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"};var df={OFFSET:"offset",POSITION:"position"};var cf=/^#[^/!]+/;var hf=["webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd"];function pf(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function vf(t,e,i){for(var n in i){if(Object.prototype.hasOwnProperty.call(i,n)){var r=i[n];var a=e[n];var s=a&&X(a)?"element":pf(a);s=a&&a._isVue?"component":s;if(!new RegExp(r).test(s)){_e(t+': Option "'+n+'" provided type "'+s+'", but expected type "'+r+'"')}}}}var gf=function(){function t(e,i,r){n(this,t);this.$el=e;this.$scroller=null;this.$selector=[ff.NAV_LINKS,ff.LIST_ITEMS,ff.DROPDOWN_ITEMS].join(",");this.$offsets=[];this.$targets=[];this.$activeTarget=null;this.$scrollHeight=0;this.$resizeTimeout=null;this.$obs_scroller=null;this.$obs_targets=null;this.$root=r||null;this.$config=null;this.updateConfig(i)}r(t,[{key:"updateConfig",value:function t(e,i){if(this.$scroller){this.unlisten();this.$scroller=null}var n=y({},this.constructor.Default,e);if(i){this.$root=i}vf(this.constructor.Name,n,this.constructor.DefaultType);this.$config=n;if(this.$root){var r=this;this.$root.$nextTick(function(){r.listen()})}else{this.listen()}}},{key:"dispose",value:function t(){this.unlisten();clearTimeout(this.$resizeTimeout);this.$resizeTimeout=null;this.$el=null;this.$config=null;this.$scroller=null;this.$selector=null;this.$offsets=null;this.$targets=null;this.$activeTarget=null;this.$scrollHeight=null}},{key:"listen",value:function t(){var e=this;var i=this.getScroller();if(i&&i.tagName!=="BODY"){mt(i,"scroll",this)}mt(window,"scroll",this);mt(window,"resize",this);mt(window,"orientationchange",this);hf.forEach(function(t){mt(window,t,e)});this.setObservers(true);this.handleEvent("refresh")}},{key:"unlisten",value:function t(){var e=this;var i=this.getScroller();this.setObservers(false);if(i&&i.tagName!=="BODY"){bt(i,"scroll",this)}bt(window,"scroll",this);bt(window,"resize",this);bt(window,"orientationchange",this);hf.forEach(function(t){bt(window,t,e)})}},{key:"setObservers",value:function t(e){var i=this;if(this.$obs_scroller){this.$obs_scroller.disconnect();this.$obs_scroller=null}if(this.$obs_targets){this.$obs_targets.disconnect();this.$obs_targets=null}if(e){this.$obs_targets=he(this.$el,function(){i.handleEvent("mutation")},{subtree:true,childList:true,attributes:true,attributeFilter:["href"]});this.$obs_scroller=he(this.getScroller(),function(){i.handleEvent("mutation")},{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["id","style","class"]})}}},{key:"handleEvent",value:function t(e){var i=typeof e==="string"?e:e.type;var n=this;function r(){if(!n.$resizeTimeout){n.$resizeTimeout=setTimeout(function(){n.refresh();n.process();n.$resizeTimeout=null},n.$config.throttle)}}if(i==="scroll"){if(!this.$obs_scroller){this.listen()}this.process()}else if(/(resize|orientationchange|mutation|refresh)/.test(i)){r()}}},{key:"refresh",value:function t(){var e=this;var i=this.getScroller();if(!i){return}var n=i!==i.window?df.POSITION:df.OFFSET;var r=this.$config.method==="auto"?n:this.$config.method;var a=r===df.POSITION?gt:vt;var s=r===df.POSITION?this.getScrollTop():0;this.$offsets=[];this.$targets=[];this.$scrollHeight=this.getScrollHeight();et(this.$selector,this.$el).map(function(t){return dt(t,"href")}).filter(function(t){return cf.test(t||"")}).map(function(t){var e=it(t,i);if(J(e)){return{offset:parseInt(a(e).top,10)+s,target:t}}return null}).filter(function(t){return t}).sort(function(t,e){return t.offset-e.offset}).reduce(function(t,i){if(!t[i.target]){e.$offsets.push(i.offset);e.$targets.push(i.target);t[i.target]=true}return t},{});return this}},{key:"process",value:function t(){var e=this.getScrollTop()+this.$config.offset;var i=this.getScrollHeight();var n=this.$config.offset+i-this.getOffsetHeight();if(this.$scrollHeight!==i){this.refresh()}if(e>=n){var r=this.$targets[this.$targets.length-1];if(this.$activeTarget!==r){this.activate(r)}return}if(this.$activeTarget&&e<this.$offsets[0]&&this.$offsets[0]>0){this.$activeTarget=null;this.clear();return}for(var a=this.$offsets.length;a--;){var s=this.$activeTarget!==this.$targets[a]&&e>=this.$offsets[a]&&(typeof this.$offsets[a+1]==="undefined"||e<this.$offsets[a+1]);if(s){this.activate(this.$targets[a])}}}},{key:"getScroller",value:function t(){if(this.$scroller){return this.$scroller}var e=this.$config.element;if(!e){return null}else if(X(e.$el)){e=e.$el}else if(typeof e==="string"){e=it(e)}if(!e){return null}this.$scroller=e.tagName==="BODY"?window:e;return this.$scroller}},{key:"getScrollTop",value:function t(){var e=this.getScroller();return e===window?e.pageYOffset:e.scrollTop}},{key:"getScrollHeight",value:function t(){return this.getScroller().scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"getOffsetHeight",value:function t(){var e=this.getScroller();return e===window?window.innerHeight:ht(e).height}},{key:"activate",value:function t(e){var i=this;this.$activeTarget=e;this.clear();var n=et(this.$selector.split(",").map(function(t){return t+'[href="'+e+'"]'}).join(","),this.$el);n.forEach(function(t){if(lt(t,uf.DROPDOWN_ITEM)){var e=rt(ff.DROPDOWN,t);if(e){i.setActiveState(it(ff.DROPDOWN_TOGGLE,e),true)}i.setActiveState(t,true)}else{i.setActiveState(t,true);if(nt(t.parentElement,ff.NAV_ITEMS)){i.setActiveState(t.parentElement,true)}var n=t;while(n){n=rt(ff.NAV_LIST_GROUP,n);var r=n?n.previousElementSibling:null;if(nt(r,ff.NAV_LINKS+", "+ff.LIST_ITEMS)){i.setActiveState(r,true)}if(nt(r,ff.NAV_ITEMS)){i.setActiveState(it(ff.NAV_LINKS,r),true);i.setActiveState(r,true)}}}});if(n&&n.length>0&&this.$root){this.$root.$emit(sf,e,n)}}},{key:"clear",value:function t(){var e=this;et(this.$selector+", "+ff.NAV_ITEMS,this.$el).filter(function(t){return lt(t,uf.ACTIVE)}).forEach(function(t){return e.setActiveState(t,false)})}},{key:"setActiveState",value:function t(e,i){if(!e){return}if(i){st(e,uf.ACTIVE)}else{ot(e,uf.ACTIVE)}}}],[{key:"Name",get:function t(){return af}},{key:"Default",get:function t(){return of}},{key:"DefaultType",get:function t(){return lf}}]);return t}();var mf=typeof window!=="undefined";var bf=!mf;var yf="__BV_ScrollSpy__";function Sf(t){var e={};if(t.arg){e.element="#"+t.arg}S(t.modifiers).forEach(function(t){if(/^\d+$/.test(t)){e.offset=parseInt(t,10)}else if(/^(auto|position|offset)$/.test(t)){e.method=t}});if(typeof t.value==="string"){e.element=t.value}else if(typeof t.value==="number"){e.offset=Math.round(t.value)}else if(i(t.value)==="object"){S(t.value).filter(function(t){return Boolean(gf.DefaultType[t])}).forEach(function(i){e[i]=t.value[i]})}return e}function wf(t,e,i){if(bf){return}var n=Sf(e);if(!t[yf]){t[yf]=new gf(t,n,i.context.$root)}else{t[yf].updateConfig(n,i.context.$root)}return t[yf]}function kf(t){if(t[yf]){t[yf].dispose();t[yf]=null}}var Tf={bind:function t(e,i,n){wf(e,i,n)},inserted:function t(e,i,n){wf(e,i,n)},update:function t(e,i,n){wf(e,i,n)},componentUpdated:function t(e,i,n){wf(e,i,n)},unbind:function t(e){if(bf){return}kf(e)}};var _f={bScrollspy:Tf};var $f={install:function t(e){v(e,_f)}};g($f);var Cf=typeof window!=="undefined"&&typeof document!=="undefined";var Bf="__BV_ToolTip__";var xf={focus:true,hover:true,click:true,blur:true};function Ef(t){var e={};if(typeof t.value==="string"){e.title=t.value}else if(typeof t.value==="function"){e.title=t.value}else if(i(t.value)==="object"){e=y(t.value)}if(t.arg){e.container="#"+t.arg}S(t.modifiers).forEach(function(t){if(/^html$/.test(t)){e.html=true}else if(/^nofade$/.test(t)){e.animation=false}else if(/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(t)){e.placement=t}else if(/^(window|viewport)$/.test(t)){e.boundary=t}else if(/^d\d+$/.test(t)){var i=parseInt(t.slice(1),10)||0;if(i){e.delay=i}}else if(/^o-?\d+$/.test(t)){var n=parseInt(t.slice(1),10)||0;if(n){e.offset=n}}});var n={};var r=typeof e.trigger==="string"?e.trigger.trim().split(/\s+/):[];r.forEach(function(t){if(xf[t]){n[t]=true}});S(xf).forEach(function(e){if(t.modifiers[e]){n[e]=true}});e.trigger=S(n).join(" ");if(e.trigger==="blur"){e.trigger="focus"}if(!e.trigger){delete e.trigger}return e}function Of(t,e,i){if(!Cf){return}if(!jn){_e("v-b-tooltip: Popper.js is required for tooltips to work");return}if(t[Bf]){t[Bf].updateConfig(Ef(e))}else{t[Bf]=new xs(t,Ef(e),i.context.$root)}}function Pf(t){if(!Cf){return}if(t[Bf]){t[Bf].destroy();t[Bf]=null;delete t[Bf]}}var If={bind:function t(e,i,n){Of(e,i,n)},inserted:function t(e,i,n){Of(e,i,n)},update:function t(e,i,n){if(i.value!==i.oldValue){Of(e,i,n)}},componentUpdated:function t(e,i,n){if(i.value!==i.oldValue){Of(e,i,n)}},unbind:function t(e){Pf(e)}};var Lf={bTooltip:If};var Ff={install:function t(e){v(e,Lf)}};g(Ff);var Nf=typeof window!=="undefined"&&typeof document!=="undefined";var Af="__BV_PopOver__";var Df={focus:true,hover:true,click:true,blur:true};function Vf(t){var e={};if(typeof t.value==="string"){e.content=t.value}else if(typeof t.value==="function"){e.content=t.value}else if(i(t.value)==="object"){e=y(t.value)}if(t.arg){e.container="#"+t.arg}S(t.modifiers).forEach(function(t){if(/^html$/.test(t)){e.html=true}else if(/^nofade$/.test(t)){e.animation=false}else if(/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/.test(t)){e.placement=t}else if(/^(window|viewport)$/.test(t)){e.boundary=t}else if(/^d\d+$/.test(t)){var i=parseInt(t.slice(1),10)||0;if(i){e.delay=i}}else if(/^o-?\d+$/.test(t)){var n=parseInt(t.slice(1),10)||0;if(n){e.offset=n}}});var n={};var r=typeof e.trigger==="string"?e.trigger.trim().split(/\s+/):[];r.forEach(function(t){if(Df[t]){n[t]=true}});S(Df).forEach(function(e){if(t.modifiers[e]){n[e]=true}});e.trigger=S(n).join(" ");if(e.trigger==="blur"){e.trigger="focus"}if(!e.trigger){delete e.trigger}return e}function Mf(t,e,i){if(!Nf){return}if(!jn){_e("v-b-popover: Popper.js is required for popovers to work");return}if(t[Af]){t[Af].updateConfig(Vf(e))}else{t[Af]=new Ns(t,Vf(e),i.context.$root)}}function jf(t){if(!Nf){return}if(t[Af]){t[Af].destroy();t[Af]=null;delete t[Af]}}var Rf={bind:function t(e,i,n){Mf(e,i,n)},inserted:function t(e,i,n){Mf(e,i,n)},update:function t(e,i,n){if(i.value!==i.oldValue){Mf(e,i,n)}},componentUpdated:function t(e,i,n){if(i.value!==i.oldValue){Mf(e,i,n)}},unbind:function t(e){jf(e)}};var Hf={bPopover:Rf};var zf={install:function t(e){v(e,Hf)}};g(zf);var Wf=Object.freeze({Toggle:ci,Modal:Oa,Scrollspy:$f,Tooltip:Ff,Popover:zf});var Gf={install:function t(e){if(e._bootstrap_vue_installed){return}e._bootstrap_vue_installed=true;for(var i in rf){e.use(rf[i])}for(var n in Wf){e.use(Wf[n])}}};g(Gf);return Gf});
/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,r){return e.controller.visit(t,r)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}}}).call(this)}).call(t);var e=t.Turbolinks;(function(){(function(){var t,r,n,o=[].slice;e.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},e.closest=function(e,r){return t.call(e,r)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},e.dispatch=function(t,e){var r,o,i,s,a,u;return a=null!=e?e:{},u=a.target,r=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,r===!0),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}).call(this),function(){e.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(n).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR()}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar}var n,o,i;return i=e.HttpRequest,n=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function r(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(t,r){return t=e.Location.wrap(t),this.update("push",t,r)},r.prototype.replace=function(t,r){return t=e.Location.wrap(t),this.update("replace",t,r)},r.prototype.onPopState=function(t){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=t.state)?n.turbolinks:void 0)?(r=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}()}.call(this),function(){e.HeadDetails=function(){function t(t){var e,r,n,s,a,u;for(this.elements={},n=0,a=t.length;a>n;n++)u=t[n],u.nodeType===Node.ELEMENT_NODE&&(s=u.outerHTML,r=null!=(e=this.elements)[s]?e[s]:e[s]={type:i(u),tracked:o(u),elements:[]},r.elements.push(u))}var e,r,n,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var r,n,o,i;r=void 0,i=this.elements;for(o in i)n=i[o].elements,e(n[0],t)&&(r=n[0]);return r},i=function(t){return r(t)?"script":n(t)?"stylesheet":void 0},o=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},r=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},n=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){var r;return r=t.tagName.toLowerCase(),"meta"===r&&t.getAttribute("name")===e},t}()}.call(this),function(){e.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var r,n,o,i;return o=t.querySelector("head"),r=null!=(i=t.querySelector("body"))?i:document.createElement("body"),n=e.HeadDetails.fromHeadElement(o),new this(n,r)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,r;return r=null!=(t=this.getSetting("root"))?t:"/",new e.Location(r)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,r,n,o,i;for(o=this.getPermanentElements(),i=[],r=0,n=o.length;n>r;r++)e=o[r],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}()}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){var t,r,n=function(t,e){function r(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.SnapshotRenderer=function(e){function o(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement}return n(o,e),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var e,n,o,i,s,a,u;for(a=this.getCurrentBodyPermanentElements(),u=[],e=0,n=a.length;n>e;e++)i=a[e],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),r(i,s.element),r(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var e,n,o,i,s,a,u;for(u=[],o=0,i=t.length;i>o;o++)a=t[o],n=a.element,s=a.permanentElement,e=s.cloneNode(!0),u.push(r(n,e));return u},o.prototype.activateNewBodyScriptElements=function(){var t,e,n,o,i,s;for(i=this.getNewBodyScriptElements(),s=[],e=0,o=i.length;o>e;e++)n=i[e],t=this.createScriptElement(n),s.push(r(n,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(e.Renderer),t=function(t){var e;return e=document.createElement("meta"),e.setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},r=function(t,e){var r;return(r=t.parentNode)?r.replaceChild(e,t):void 0}}.call(this),function(){var t=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.ErrorRenderer=function(e){function r(t){var e;e=document.createElement("html"),e.innerHTML=t,this.newHead=e.querySelector("head"),this.newBody=e.querySelector("body")}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceHeadAndBody(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceHeadAndBody=function(){var t,e;return e=document.head,t=document.body,e.parentNode.replaceChild(this.newHead,e),t.parentNode.replaceChild(this.newBody,t)},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(e.Renderer)}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,r,n){return e.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),e.Snapshot.wrap(t),r)},t.prototype.renderError=function(t,r){return e.ErrorRenderer.render(this.delegate,r,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}()}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var r;return t.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},t.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},t.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(t){return e.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return r.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(t,r){return this.response=t,null!=r&&(this.redirectedToLocation=e.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function r(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return r.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},r.prototype.visit=function(t,r){var n,o;return null==r&&(r={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},r.prototype.startVisitToLocationWithAction=function(t,r,n){var o;return e.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(t,r,{restorationData:o})):window.location=t},r.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},r.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable();
},r.prototype.cacheSnapshot=function(){var t,r;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),r=this.view.getSnapshot(),t=this.lastRenderedLocation,e.defer(function(e){return function(){return e.cache.put(t,r.clone())}}(this))):void 0},r.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,r){return e.dispatch("turbolinks:click",{target:t,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},r.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(t,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,r),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(t){var r;return r=new e.Location(t.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(t){var r;return(r=e.closest(t,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,r,n;e.start=function(){return r()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=e),n()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},n=function(){return window.Turbolinks===e},n()&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);