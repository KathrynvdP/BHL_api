(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9381"],{"8d32":function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return i}));var r=n("ec02"),c=n("442e"),o=n("e379");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=(e,t,n,i,a)=>{const s=e.ownerDocument.defaultView,u=Object(c["a"])(e),d=e=>{const t=50,{startX:n}=e;return u?n>=s.innerWidth-t:n<=t},w=e=>u?-e.deltaX:e.deltaX,h=e=>u?-e.velocityX:e.velocityX,l=e=>d(e)&&t(),b=e=>{const t=w(e),n=t/s.innerWidth;i(n)},p=e=>{const t=w(e),n=s.innerWidth,c=t/n,o=h(e),i=n/2,u=o>=0&&(o>.2||t>i),d=u?1-c:c,l=d*n;let b=0;if(l>5){const e=l/Math.abs(o);b=Math.min(e,540)}a(u,c<=0?.01:Object(r["j"])(0,c,.9999),b)};return Object(o["createGesture"])({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:l,onStart:n,onMove:b,onEnd:p})}}}]);
//# sourceMappingURL=chunk-2d0e9381.4cd78f01.js.map