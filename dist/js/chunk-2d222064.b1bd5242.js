(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222064"],{cd9f:function(t,e,o){"use strict";o.r(e),o.d(e,"startTapClick",(function(){return s}));var n=o("ec02");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=t=>{let e,o,s,p=10*-u,f=0;const v=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),w=new WeakMap,h=t=>{p=Object(n["t"])(t),T(t)},m=t=>{p=Object(n["t"])(t),g(t)},L=t=>{if(2===t.button)return;const e=Object(n["t"])(t)-u;p<e&&T(t)},b=t=>{const e=Object(n["t"])(t)-u;p<e&&g(t)},E=()=>{clearTimeout(s),s=void 0,e&&(R(!1),e=void 0)},T=t=>{e||j(i(t),t)},g=t=>{j(void 0,t)},j=(t,o)=>{if(t&&t===e)return;clearTimeout(s),s=void 0;const{x:i,y:a}=Object(n["p"])(o);if(e){if(w.has(e))throw new Error("internal error");e.classList.contains(r)||k(e,i,a),R(!0)}if(t){const e=w.get(t);e&&(clearTimeout(e),w.delete(t));const o=c(t)?0:d;t.classList.remove(r),s=setTimeout(()=>{k(t,i,a),s=void 0},o)}e=t},k=(t,e,n)=>{f=Date.now(),t.classList.add(r);const s=v&&a(t);s&&s.addRipple&&(O(),o=s.addRipple(e,n))},O=()=>{void 0!==o&&(o.then(t=>t()),o=void 0)},R=t=>{O();const o=e;if(!o)return;const n=l-Date.now()+f;if(t&&n>0&&!c(o)){const t=setTimeout(()=>{o.classList.remove(r),w.delete(o)},l);w.set(o,t)}else o.classList.remove(r)},y=document;y.addEventListener("ionGestureCaptured",E),y.addEventListener("touchstart",h,!0),y.addEventListener("touchcancel",m,!0),y.addEventListener("touchend",m,!0),y.addEventListener("pointercancel",E,!0),y.addEventListener("mousedown",L,!0),y.addEventListener("mouseup",b,!0)},i=t=>{if(!t.composedPath)return t.target.closest(".ion-activatable");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const o=e[t];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},c=t=>t.classList.contains("ion-activatable-instant"),a=t=>{if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=chunk-2d222064.b1bd5242.js.map