(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{108:function(e,t,r){"use strict";r.r(t);r(109)},109:function(e,t,r){e.exports=function(){"use strict";var e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t};function o(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(o.prototype,HTMLElement.prototype),Object.setPrototypeOf(o,HTMLElement);var i=function(o){function i(){e(this,i);var t=n(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));if(t.webShare="share"in navigator,t.webShare){var r=t.getTemplateId();if(null!==r){var o=document.getElementById(r);if(!o)return n(t);t.removeChildren();var u=document.importNode(o.content,!0);t.appendChild(u)}else t.text=document.createTextNode(t.getAttribute("text")||"Share"),t.button=document.createElement("button"),t.button.appendChild(t.text),t.removeChildren(),t.appendChild(t.button);t.share=t.share.bind(t)}return t}return r(i,o),t(i,[{key:"share",value:function(e){var t=this;e.preventDefault();var r={title:this.getTitle(),text:this.getText(),url:this.getUrl()};navigator.share(r).then((function(){return t.successfulShare(r)})).catch((function(e){return t.abortedShare(e,r)}))}},{key:"connectedCallback",value:function(){this.webShare&&this.addEventListener("click",this.share)}},{key:"disconnectedCallback",value:function(){this.webShare&&this.removeEventListener("click",this.share)}},{key:"successfulShare",value:function(e){var t=new CustomEvent("share-success",e);this.dispatchEvent(t,{detail:e})}},{key:"abortedShare",value:function(e,t){t.error=e;var r=new CustomEvent("share-failure",{detail:t});this.dispatchEvent(r)}},{key:"getTitle",value:function(){return this.getAttribute("sharetitle")}},{key:"getText",value:function(){return this.getAttribute("sharetext")||document.querySelector("title").textContent}},{key:"getUrl",value:function(){if(this.getAttribute("shareurl"))return this.getAttribute("shareurl");var e=document.querySelector("link[rel=canonical]");return null!==e?e.getAttribute("href"):window.location.href}},{key:"getTemplateId",value:function(){return this.getAttribute("template")}},{key:"removeChildren",value:function(){for(;this.firstChild;)this.removeChild(this.firstChild)}}]),i}(o);return"customElements"in window&&!customElements.get("web-share-wrapper")&&customElements.define("web-share-wrapper",i),i}()}},[[108,98]]]);
//# sourceMappingURL=webShare-b1d63158a79cdcdb8c63.chunk.js.map