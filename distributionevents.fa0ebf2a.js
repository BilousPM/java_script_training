!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequiree025;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequiree025=n),n.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||o.default(e)||l.default(e)||u.default()};var r=i(n("kMC0W")),o=i(n("7AJDX")),u=i(n("8CtQK")),l=i(n("auk6i"));function i(e){return e&&e.__esModule?e:{default:e}}})),n.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return o.default(e)};var r,o=(r=n("8NIkP"))&&r.__esModule?r:{default:r}})),n.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}})),n.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),n.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),n.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o.default(e,t)};var r,o=(r=n("8NIkP"))&&r.__esModule?r:{default:r}}));var u,l,i=n("8nrFW"),a={boxRef:document.querySelector("#boxes"),controls:document.querySelector("#controls"),input:document.querySelector('input[type="number"]'),createBtn:document.querySelector("button[data-create]"),destoryBtn:document.querySelector("button[data-destroy]"),body:document.querySelector("body")};function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}a.createBtn.addEventListener("click",(function(){var t,r=function(e){for(var t=[],r=1;r<=e;r+=1){divBoxRef=document.createElement("div"),divBoxRef.classList.add("color");var o=d();divBoxRef.style.backgroundColor=o,divBoxRef.textContent="".concat(o),t.push(divBoxRef)}return a.boxRef.classList.add("color-box"),t}(a.input.value);(t=a.boxRef).append.apply(t,e(i)(r))})),a.boxRef.addEventListener("click",(function(e){if(!e.target.classList.contains("color"))return;var t=document.querySelector(".current");null==t||t.classList.remove("current"),e.target.classList.add("current"),a.body.style.backgroundColor=e.target.textContent})),a.destoryBtn.addEventListener("click",(function(){a.boxRef.innerHTML="",a.body.style.backgroundColor="#fff",a.input.value=0}));var c={theme:{userDefined:{color:"qwerty"}}};c&&c.theme&&c.theme.userDefined&&console.log(c.theme.userDefined.color),console.log(null==c||null===(u=c.theme)||void 0===u||null===(l=u.userDefined)||void 0===l?void 0:l.color)}();
//# sourceMappingURL=distributionevents.fa0ebf2a.js.map
