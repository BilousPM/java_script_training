!function(){document.querySelector(".js-button").addEventListener("click",(function(){console.log("click")}));var e=document.querySelector("button[data-action=edit]"),t=document.querySelector("button[data-action=add]"),n=document.querySelector("button[data-action=remove]");function o(e){console.log(e),console.log("click on edit button")}t.addEventListener("click",(function(t){console.log("adds events listner "),e.addEventListener("click",o)})),n.addEventListener("click",(function(t){console.log("removes events listner"),e.removeEventListener("click",o)})),document.querySelector(".js-register-form").addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log(t),t.forEach((function(e,t){console.log("🚀 ~ formData.forEach ~ name:",t),console.log("🚀 ~ formData.forEach ~ value:",e)}))}));var c={input:document.querySelector(".js-input-name"),nameLabel:document.querySelector(".js-span"),licens:document.querySelector(".js-checkbox"),btn:document.querySelector(".js-btn")};c.input.addEventListener("blur",(function(){console.log("This is the input blur")})),c.input.addEventListener("change",(function(e){console.log(e.currentTarget.value)})),c.input.addEventListener("input",(function(e){console.log(e.currentTarget.value)})),c.input.addEventListener("input",(function(e){c.nameLabel.textContent=e.currentTarget.value})),c.licens.addEventListener("change",(function(e){console.log(e.currentTarget.checked),console.log(c.btn.disabled),c.btn.disabled=!e.currentTarget.checked}));var r={output:document.querySelector(".js-output"),clearBtn:document.querySelector(".js-clear")};window.addEventListener("keydown",(function(e){console.log("keydown",e.key)})),r.clearBtn.addEventListener("click",(function(){r.output.textContent=""}))}();
//# sourceMappingURL=dom.67d23d88.js.map