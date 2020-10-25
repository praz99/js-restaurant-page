(()=>{"use strict";var e={810:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,".about-container {\n  background: rgba(95, 95, 60, 0.5);\n}\n\n.about-container h1 {\n  text-align: center;\n  z-index: 2;\n}\n\n.about-items {\n  display: flex;\n  width: 100%;\n}\n\n.about-item {\n  width: calc(100% / 3);\n  height: 100%;\n  margin: 0 0.5em;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.about-image {\n  height: 85vh;\n}",""]);const d=i},996:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,".contact-container {\n  background: rgba(95, 95, 60, 0.5);\n}\n\n.contact-container h1 {\n  text-align: center;\n  z-index: 2;\n}\n\n.contact-items {\n  display: flex;\n  width: 100%;\n}\n\n.contact-item {\n  width: calc(100% / 3);\n  height: 100%;\n  margin: 0 0.5em;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.contact-image {\n  height: 85vh;\n}",""]);const d=i},309:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(645),i=t.n(a),d=t(667),c=t.n(d),o=t(659),r=i()((function(e){return e[1]})),s=c()(o.Z);r.push([e.id,".home-welcome {\n  position: relative;\n  background: #626d80;\n  overflow: hidden;\n  height: 92vh;\n  width: 100%;\n}\n\n.home-welcome:before {\n  content: ' ';\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0.5;\n  background-image: url("+s+");\n  background-repeat: no-repeat;\n  background-position: 50% 0;\n  background-size: cover;\n}",""]);const l=r},195:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,".menu-container {\n  background: rgba(95, 95, 60, 0.5);\n}\n\n.menu-container h1 {\n  text-align: center;\n  z-index: 2;\n}\n\n.menu-items {\n  display: flex;\n  width: 100%;\n}\n\n.menu-item {\n  width: calc(100% / 3);\n  height: 100%;\n  margin: 0 0.5em;\n  object-fit: cover;\n  overflow: hidden;\n  border-radius: 10px;\n}\n\n.menu-image {\n  height: 85vh;\n}",""]);const d=i},145:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.navbar {\n  height: 50px;\n  width: 100%;\n  border-bottom: 1px solid red;\n  background-color: lightblue;\n\n  display: flex;\n  align-items: center;\n\n}\n\n.nav-left,\n.nav-right {\n  width: 50%;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.nav-right .nav-list {\n  display: flex;\n  list-style-type: none;\n}\n\n.nav-list .list-item {\n  padding: 0 0.5em;\n}\n\n.brand {\n  width: fit-content;\n}",""]);const d=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var o=0;o<e.length;o++){var r=[].concat(e[o]);a&&i[r[0]]||(t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),n.push(r))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},659:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"9da8826878df7209807f5d2c7e129a5e.jpg"},379:(e,n,t)=>{var a,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),d=[];function c(e){for(var n=-1,t=0;t<d.length;t++)if(d[t].identifier===e){n=t;break}return n}function o(e,n){for(var t={},a=[],i=0;i<e.length;i++){var o=e[i],r=n.base?o[0]+n.base:o[0],s=t[r]||0,l="".concat(r," ").concat(s);t[r]=s+1;var u=c(l),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(d[u].references++,d[u].updater(m)):d.push({identifier:l,updater:f(m,n),references:1}),a.push(l)}return a}function r(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var d=t.nc;d&&(a.nonce=d)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=l(n,i);else{var d=document.createTextNode(i),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(d,c[n]):e.appendChild(d)}}function m(e,n,t){var a=t.css,i=t.media,d=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),d&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,h=0;function f(e,n){var t,a,i;if(n.singleton){var d=h++;t=p||(p=r(n)),a=u.bind(null,t,d,!1),i=u.bind(null,t,d,!0)}else t=r(n),a=m.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=o(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=c(t[a]);d[i].references--}for(var r=o(e,n),s=0;s<t.length;s++){var l=c(t[s]);0===d[l].references&&(d[l].updater(),d.splice(l,1))}t=r}}}}},n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),a=t(145);n()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i=document.getElementById("content"),d=document.createElement("nav"),c=document.createElement("ul"),o=document.createElement("li"),r=document.createElement("li"),s=document.createElement("li"),l=document.createElement("div");var u=t(195);n()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const m=t.p+"743bc7e55970605f6737d0e3f9dd7a99.jpg",p=t.p+"add0f712bd09976e54a205c304d99f7e.jpg",h=t.p+"a6217b7231578b1a9c891ce36d5d0cf7.jpg",f=document.getElementById("content");var g=t(996);n()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const v=t.p+"bb93196231634ee2ab91ad1fd2747872.jpg",b=t.p+"8a8afbb1379656a0a8f0355b60c4ff06.jpg",w=t.p+"3e1ee95d75e766087b1c780783f53b5a.jpg",C=document.getElementById("content");var E=t(810);n()(E.Z,{insert:"head",singleton:!1}),E.Z.locals;const y=t.p+"5e4d4ff5c07d5324460a6feb3c89069c.jpg",x=t.p+"389569f22cd0931a29384b3814af162c.jpg",L=t.p+"1275ffd38d1e6fd2fd108ab082d243b6.jpg",j=document.getElementById("content");var T=t(309);n()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;const I=document.getElementById("content"),Z=()=>{const e=document.createElement("div");e.classList.add("home-welcome"),I.appendChild(e);const n=document.createElement("h1");n.innerText="Welcome!",e.appendChild(n)},k=document.getElementById("content");Z();const B=()=>{k.innerHTML=""};l.onclick=()=>{B(),Z()},(()=>{const e=document.createElement("div");d.classList.add("navbar"),l.classList.add("brand"),l.innerText="RestYourAnt",e.appendChild(l),e.classList.add("nav-left");const n=document.createElement("div");n.classList.add("nav-right"),n.appendChild((c.classList.add("nav-list"),o.classList.add("list-item"),o.innerText="menu",c.appendChild(o),r.classList.add("list-item"),r.innerText="contact",c.appendChild(r),s.classList.add("list-item"),s.innerText="about",c.appendChild(s),c)),d.appendChild(e),d.appendChild(n),document.body.insertBefore(d,i)})(),o.addEventListener("click",(()=>{B(),(()=>{const e=document.createElement("div");e.classList.add("menu-container"),f.appendChild(e);const n=document.createElement("h1");n.innerText="menu",e.appendChild(n);const t=document.createElement("div");t.classList.add("menu-items"),e.appendChild(t);const a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),c=new Image,o=new Image,r=new Image;c.src=m,c.classList.add("menu-image"),o.src=p,o.classList.add("menu-image"),r.src=h,r.classList.add("menu-image"),a.classList.add("menu-item"),i.classList.add("menu-item"),d.classList.add("menu-item"),t.appendChild(a),t.appendChild(i),t.appendChild(d),a.appendChild(c),i.appendChild(o),d.appendChild(r)})()})),r.addEventListener("click",(()=>{B(),(()=>{const e=document.createElement("div");e.classList.add("contact-container"),C.appendChild(e);const n=document.createElement("h1");n.innerText="contact",e.appendChild(n);const t=document.createElement("div");t.classList.add("contact-items"),e.appendChild(t);const a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),c=new Image,o=new Image,r=new Image;c.src=v,c.classList.add("contact-image"),o.src=b,o.classList.add("contact-image"),r.src=w,r.classList.add("contact-image"),a.classList.add("contact-item"),i.classList.add("contact-item"),d.classList.add("contact-item"),t.appendChild(a),t.appendChild(i),t.appendChild(d),a.appendChild(c),i.appendChild(o),d.appendChild(r)})()})),s.addEventListener("click",(()=>{B(),(()=>{const e=document.createElement("div");e.classList.add("about-container"),j.appendChild(e);const n=document.createElement("h1");n.innerText="about",e.appendChild(n);const t=document.createElement("div");t.classList.add("about-items"),e.appendChild(t);const a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),c=new Image,o=new Image,r=new Image;c.src=y,c.classList.add("about-image"),o.src=x,o.classList.add("about-image"),r.src=L,r.classList.add("about-image"),a.classList.add("about-item"),i.classList.add("about-item"),d.classList.add("about-item"),t.appendChild(a),t.appendChild(i),t.appendChild(d),a.appendChild(c),i.appendChild(o),d.appendChild(r)})()}))})()})();