!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,g=Math.max,m=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function w(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function S(e){return l=e,f=setTimeout(T,t),s?w(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function T(){var e=v();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return d?m(n,a-(e-l)):n}(e))}function h(e){return f=void 0,p&&r?w(e):(r=i=void 0,u)}function O(){var e=v(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(T,t),w(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},O.flush=function(){return void 0===f?u:h(v())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})},localStorage.setItem("my-data","localstorage"),localStorage.setItem("user",JSON.stringify({name:"mango",age:5})),console.log(JSON.parse(localStorage.getItem("user"))),sessionStorage.setItem("my-data","qweqweqweqweqweqwe");const w="feetback",S=document.querySelector(".js-feedback-form"),j=document.querySelector(".js-feedback-form textarea");!function(e){const t=localStorage.getItem(w);j.value=t}(),S.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(w)})),j.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem(w,t)}),2e3))}();
//# sourceMappingURL=distributionevents.a9156e44.js.map
