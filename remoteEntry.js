var Sendpulse;!function(){"use strict";var n,e,t,r,u,o,i,f,c,a,l,s,d,h,p,v,m,b,g={8694:function(n,e,t){var r={"./app":function(){return Promise.all([t.e(508),t.e(747),t.e(170),t.e(301),t.e(497)]).then((function(){return function(){return t(3497)}}))},"./settings":function(){return Promise.all([t.e(508),t.e(54),t.e(747),t.e(56),t.e(170),t.e(301),t.e(345),t.e(969)]).then((function(){return function(){return t(3969)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r="default",u=t.S[r];if(u&&u!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[r]=n,t.I(r,e)}};t.d(e,{get:function(){return u},init:function(){return o}})}},y={};function w(n){var e=y[n];if(void 0!==e)return e.exports;var t=y[n]={exports:{}};return g[n](t,t.exports,w),t.exports}w.m=g,w.c=y,w.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return w.d(e,{a:e}),e},w.d=function(n,e){for(var t in e)w.o(e,t)&&!w.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},w.f={},w.e=function(n){return Promise.all(Object.keys(w.f).reduce((function(e,t){return w.f[t](n,e),e}),[]))},w.u=function(n){return"static/js/"+n+"."+{54:"8fa605e2",56:"630e51ea",101:"e4d323ed",131:"02cc6ed2",170:"b17c7e9c",216:"2386f9c8",294:"4fca81f3",301:"d31335b0",311:"362f93b3",345:"89b535dc",404:"15562e91",455:"972bd813",483:"f42fec86",497:"b3790ae7",508:"f6ba5af3",550:"f1fe6af0",629:"70dece0b",747:"7f71d959",751:"24602333",932:"a6963d55",935:"b2654abc",969:"c9a0b85a"}[n]+".chunk.js"},w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),w.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},n={},e="container:",w.l=function(t,r,u,o){if(n[t])n[t].push(r);else{var i,f;if(void 0!==u)for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var l=c[a];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==e+u){i=l;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,w.nc&&i.setAttribute("nonce",w.nc),i.setAttribute("data-webpack",e+u),i.src=t),n[t]=[r];var s=function(e,r){i.onerror=i.onload=null,clearTimeout(d);var u=n[t];if(delete n[t],i.parentNode&&i.parentNode.removeChild(i),u&&u.forEach((function(n){return n(r)})),e)return e(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},w.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},function(){w.S={};var n={},e={};w.I=function(t,r){r||(r=[]);var u=e[t];if(u||(u=e[t]={}),!(r.indexOf(u)>=0)){if(r.push(u),n[t])return n[t];w.o(w.S,t)||(w.S[t]={});var o=w.S[t],i="container",f=function(n,e,t,r){var u=o[n]=o[n]||{},f=u[e];(!f||!f.loaded&&(!r!=!f.eager?r:i>f.from))&&(u[e]={get:t,from:i,eager:!!r})},c=[];return"default"===t&&(f("@emotion/react","11.11.1",(function(){return Promise.all([w.e(751),w.e(747),w.e(550)]).then((function(){return function(){return w(3550)}}))})),f("@emotion/styled","11.11.0",(function(){return Promise.all([w.e(747),w.e(170),w.e(404)]).then((function(){return function(){return w(932)}}))})),f("@mui/material","5.14.7",(function(){return Promise.all([w.e(508),w.e(751),w.e(54),w.e(455),w.e(747),w.e(56),w.e(170),w.e(301)]).then((function(){return function(){return w(5455)}}))})),f("@reduxjs/toolkit","1.8.1",(function(){return w.e(629).then((function(){return function(){return w(3629)}}))})),f("localforage","1.10.0",(function(){return w.e(483).then((function(){return function(){return w(9483)}}))})),f("notistack","3.0.1",(function(){return Promise.all([w.e(311),w.e(747),w.e(56)]).then((function(){return function(){return w(3311)}}))})),f("react-dom","18.2.0",(function(){return Promise.all([w.e(935),w.e(747)]).then((function(){return function(){return w(3935)}}))})),f("react-redux","7.2.8",(function(){return Promise.all([w.e(216),w.e(747),w.e(56),w.e(101)]).then((function(){return function(){return w(372)}}))})),f("react","18.2.0",(function(){return w.e(294).then((function(){return function(){return w(7294)}}))}))),n[t]=c.length?Promise.all(c).then((function(){return n[t]=1})):1}}}(),function(){var n;w.g.importScripts&&(n=w.g.location+"");var e=w.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=n}(),t=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},r=function(n,e){n=t(n),e=t(e);for(var r=0;;){if(r>=n.length)return r<e.length&&"u"!=(typeof e[r])[0];var u=n[r],o=(typeof u)[0];if(r>=e.length)return"u"==o;var i=e[r],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&u!=i)return u<i;r++}},u=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var r=1,o=1;o<n.length;o++)r--,t+="u"==(typeof(f=n[o]))[0]?"-":(r>0?".":"")+(r=2,f);return t}var i=[];for(o=1;o<n.length;o++){var f=n[o];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():u(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=function(n,e){if(0 in n){e=t(e);var r=n[0],u=r<0;u&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,l,s=f<n.length?(typeof n[f])[0]:"";if(i>=e.length||"o"==(l=(typeof(a=e[i]))[0]))return!c||("u"==s?f>r&&!u:""==s!=u);if("u"==l){if(!c||"u"!=s)return!1}else if(c)if(s==l)if(f<=r){if(a!=n[f])return!1}else{if(u?a>n[f]:a<n[f])return!1;a!=n[f]&&(c=!1)}else if("s"!=s&&"n"!=s){if(u||f<=r)return!1;c=!1,f--}else{if(f<=r||l<s!=u)return!1;c=!1}else"s"!=s&&"n"!=s&&(c=!1,f--)}}var d=[],h=d.pop.bind(d);for(i=1;i<n.length;i++){var p=n[i];d.push(1==p?h()|h():2==p?h()&h():p?o(p,e):!h())}return!!h()},i=function(n,e){var t=n[e];return Object.keys(t).reduce((function(n,e){return!n||!t[n].loaded&&r(n,e)?e:n}),0)},f=function(n,e,t,r){return"Unsatisfied version "+t+" from "+(t&&n[e][t].from)+" of shared singleton module "+e+" (required "+u(r)+")"},c=function(n,e,t,r){var u=i(n,t);return o(r,u)||l(f(n,t,u,r)),s(n[t][u])},a=function(n,e,t){var u=n[e];return(e=Object.keys(u).reduce((function(n,e){return!o(t,e)||n&&!r(n,e)?n:e}),0))&&u[e]},l=function(n){"undefined"!=typeof console&&console.warn&&console.warn(n)},s=function(n){return n.loaded=1,n.get()},h=(d=function(n){return function(e,t,r,u){var o=w.I(e);return o&&o.then?o.then(n.bind(n,e,w.S[e],t,r,u)):n(e,w.S[e],t,r,u)}})((function(n,e,t,r,u){return e&&w.o(e,t)?c(e,0,t,r):u()})),p=d((function(n,e,t,r,u){var o=e&&w.o(e,t)&&a(e,t,r);return o?s(o):u()})),v={},m={2747:function(){return h("default","react",[4,18,2,0],(function(){return w.e(294).then((function(){return function(){return w(7294)}}))}))},2170:function(){return h("default","@emotion/react",[1,11,11,0],(function(){return Promise.all([w.e(751),w.e(131)]).then((function(){return function(){return w(3550)}}))}))},56:function(){return h("default","react-dom",[4,18,2,0],(function(){return w.e(935).then((function(){return function(){return w(3935)}}))}))},4301:function(){return h("default","@emotion/styled",[1,11,11,0],(function(){return w.e(932).then((function(){return function(){return w(932)}}))}))},2084:function(){return p("default","react-redux",[4,7,2,8],(function(){return w.e(216).then((function(){return function(){return w(372)}}))}))},2623:function(){return h("default","@mui/material",[1,5,13,0],(function(){return Promise.all([w.e(751),w.e(455)]).then((function(){return function(){return w(5455)}}))}))},2670:function(){return p("default","notistack",[1,3,0,1],(function(){return w.e(311).then((function(){return function(){return w(3311)}}))}))},5552:function(){return p("default","@reduxjs/toolkit",[4,1,8,1],(function(){return w.e(629).then((function(){return function(){return w(3629)}}))}))},5762:function(){return p("default","localforage",[4,1,10,0],(function(){return w.e(483).then((function(){return function(){return w(9483)}}))}))}},b={56:[56],170:[2170],301:[4301],345:[2084,2623,2670,5552,5762],747:[2747]},w.f.consumes=function(n,e){w.o(b,n)&&b[n].forEach((function(n){if(w.o(v,n))return e.push(v[n]);var t=function(e){v[n]=0,w.m[n]=function(t){delete w.c[n],t.exports=e()}},r=function(e){delete v[n],w.m[n]=function(t){throw delete w.c[n],e}};try{var u=m[n]();u.then?e.push(v[n]=u.then(t).catch(r)):t(u)}catch(n){r(n)}}))},function(){var n={15:0};w.f.j=function(e,t){var r=w.o(n,e)?n[e]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(170|301|56|747)$/.test(e))n[e]=0;else{var u=new Promise((function(t,u){r=n[e]=[t,u]}));t.push(r[2]=u);var o=w.p+w.u(e),i=new Error;w.l(o,(function(t){if(w.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+u+": "+o+")",i.name="ChunkLoadError",i.type=u,i.request=o,r[1](i)}}),"chunk-"+e,e)}};var e=function(e,t){var r,u,o=t[0],i=t[1],f=t[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(r in i)w.o(i,r)&&(w.m[r]=i[r]);f&&f(w)}for(e&&e(t);c<o.length;c++)u=o[c],w.o(n,u)&&n[u]&&n[u][0](),n[u]=0},t=self.webpackChunkcontainer=self.webpackChunkcontainer||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var P=w(8694);Sendpulse=P}();
//# sourceMappingURL=remoteEntry.js.map