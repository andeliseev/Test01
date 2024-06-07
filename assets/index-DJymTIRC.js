const __vite__fileDeps=["assets/browserAll-BVZx7Zd4.js","assets/webworkerAll-A2VYV6tz.js","assets/colorToUniform-r-qxCrUp.js","assets/CanvasPool-BVJAFm4t.js","assets/getBatchSamplersUniformGroup-CRunn2Y7.js","assets/WebGPURenderer-D-Df_Zf4.js","assets/SharedSystems-IkYgrCeo.js","assets/WebGLRenderer-Ctzi2R4W.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ll=Object.defineProperty;var ul=(i,t,e)=>t in i?ll(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var C=(i,t,e)=>(ul(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const hl="modulepreload",cl=function(i){return"/Test01/"+i},Ur={},Ri=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(a=>{if(a=cl(a),a in Ur)return;Ur[a]=!0;const l=a.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":hl,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var D=(i=>(i.Application="application",i.WebGLPipes="webgl-pipes",i.WebGLPipesAdaptor="webgl-pipes-adaptor",i.WebGLSystem="webgl-system",i.WebGPUPipes="webgpu-pipes",i.WebGPUPipesAdaptor="webgpu-pipes-adaptor",i.WebGPUSystem="webgpu-system",i.CanvasSystem="canvas-system",i.CanvasPipesAdaptor="canvas-pipes-adaptor",i.CanvasPipes="canvas-pipes",i.Asset="asset",i.LoadParser="load-parser",i.ResolveParser="resolve-parser",i.CacheParser="cache-parser",i.DetectionParser="detection-parser",i.MaskEffect="mask-effect",i.BlendMode="blend-mode",i.TextureSource="texture-source",i.Environment="environment",i))(D||{});const En=i=>{if(typeof i=="function"||typeof i=="object"&&i.extension){if(!i.extension)throw new Error("Extension class must have an extension object");i={...typeof i.extension!="object"?{type:i.extension}:i.extension,ref:i}}if(typeof i=="object")i={...i};else throw new Error("Invalid extension type");return typeof i.type=="string"&&(i.type=[i.type]),i},ui=(i,t)=>En(i).priority??t,yt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...i){return i.map(En).forEach(t=>{t.type.forEach(e=>{var n,r;return(r=(n=this._removeHandlers)[e])==null?void 0:r.call(n,t)})}),this},add(...i){return i.map(En).forEach(t=>{t.type.forEach(e=>{var s,o;const n=this._addHandlers,r=this._queue;n[e]?(o=n[e])==null||o.call(n,t):(r[e]=r[e]||[],(s=r[e])==null||s.push(t))})}),this},handle(i,t,e){var o;const n=this._addHandlers,r=this._removeHandlers;if(n[i]||r[i])throw new Error(`Extension type ${i} already has a handler`);n[i]=t,r[i]=e;const s=this._queue;return s[i]&&((o=s[i])==null||o.forEach(a=>t(a)),delete s[i]),this},handleByMap(i,t){return this.handle(i,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(i,t,e=-1){return this.handle(i,n=>{t.findIndex(s=>s.name===n.name)>=0||(t.push({name:n.name,value:n.ref}),t.sort((s,o)=>ui(o.value,e)-ui(s.value,e)))},n=>{const r=t.findIndex(s=>s.name===n.name);r!==-1&&t.splice(r,1)})},handleByList(i,t,e=-1){return this.handle(i,n=>{t.includes(n.ref)||(t.push(n.ref),t.sort((r,s)=>ui(s,e)-ui(r,e)))},n=>{const r=t.indexOf(n.ref);r!==-1&&t.splice(r,1)})}},fl={extension:{type:D.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Ri(()=>import("./browserAll-BVZx7Zd4.js"),__vite__mapDeps([0,1,2,3,4]))}},dl={extension:{type:D.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Ri(()=>import("./webworkerAll-A2VYV6tz.js"),__vite__mapDeps([1,2,3,4]))}};class it{constructor(t,e,n){this._x=e||0,this._y=n||0,this._observer=t}clone(t){return new it(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function fr(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Gs={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(l,h,u){this.fn=l,this.context=h,this.once=u||!1}function s(l,h,u,c,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new r(u,c||l,f),p=e?e+h:h;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],d]:l._events[p].push(d):(l._events[p]=d,l._eventsCount++),l}function o(l,h){--l._eventsCount===0?l._events=new n:delete l._events[h]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var h=[],u,c;if(this._eventsCount===0)return h;for(c in u=this._events)t.call(u,c)&&h.push(e?c.slice(1):c);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(u)):h},a.prototype.listeners=function(h){var u=e?e+h:h,c=this._events[u];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,p=new Array(d);f<d;f++)p[f]=c[f].fn;return p},a.prototype.listenerCount=function(h){var u=e?e+h:h,c=this._events[u];return c?c.fn?1:c.length:0},a.prototype.emit=function(h,u,c,f,d,p){var g=e?e+h:h;if(!this._events[g])return!1;var m=this._events[g],v=arguments.length,x,y;if(m.fn){switch(m.once&&this.removeListener(h,m.fn,void 0,!0),v){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,u),!0;case 3:return m.fn.call(m.context,u,c),!0;case 4:return m.fn.call(m.context,u,c,f),!0;case 5:return m.fn.call(m.context,u,c,f,d),!0;case 6:return m.fn.call(m.context,u,c,f,d,p),!0}for(y=1,x=new Array(v-1);y<v;y++)x[y-1]=arguments[y];m.fn.apply(m.context,x)}else{var _=m.length,F;for(y=0;y<_;y++)switch(m[y].once&&this.removeListener(h,m[y].fn,void 0,!0),v){case 1:m[y].fn.call(m[y].context);break;case 2:m[y].fn.call(m[y].context,u);break;case 3:m[y].fn.call(m[y].context,u,c);break;case 4:m[y].fn.call(m[y].context,u,c,f);break;default:if(!x)for(F=1,x=new Array(v-1);F<v;F++)x[F-1]=arguments[F];m[y].fn.apply(m[y].context,x)}}return!0},a.prototype.on=function(h,u,c){return s(this,h,u,c,!1)},a.prototype.once=function(h,u,c){return s(this,h,u,c,!0)},a.prototype.removeListener=function(h,u,c,f){var d=e?e+h:h;if(!this._events[d])return this;if(!u)return o(this,d),this;var p=this._events[d];if(p.fn)p.fn===u&&(!f||p.once)&&(!c||p.context===c)&&o(this,d);else{for(var g=0,m=[],v=p.length;g<v;g++)(p[g].fn!==u||f&&!p[g].once||c&&p[g].context!==c)&&m.push(p[g]);m.length?this._events[d]=m.length===1?m[0]:m:o(this,d)}return this},a.prototype.removeAllListeners=function(h){var u;return h?(u=e?e+h:h,this._events[u]&&o(this,u)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,i.exports=a})(Gs);var pl=Gs.exports;const Ot=fr(pl),ml=Math.PI*2,gl=180/Math.PI,Fe=Math.PI/180;class ut{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new ut(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return tn.x=0,tn.y=0,tn}}const tn=new ut;class Y{constructor(t=1,e=0,n=0,r=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,n,r,s,o){return this.a=t,this.b=e,this.c=n,this.d=r,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const n=e||this.array;return t?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n}apply(t,e){e=e||new ut;const n=t.x,r=t.y;return e.x=this.a*n+this.c*r+this.tx,e.y=this.b*n+this.d*r+this.ty,e}applyInverse(t,e){e=e||new ut;const n=this.a,r=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,h=1/(n*o+s*-r),u=t.x,c=t.y;return e.x=o*h*u+-s*h*c+(l*s-a*o)*h,e.y=n*h*c+-r*h*u+(-l*n+a*r)*h,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),r=this.a,s=this.c,o=this.tx;return this.a=r*e-this.b*n,this.b=r*n+this.b*e,this.c=s*e-this.d*n,this.d=s*n+this.d*e,this.tx=o*e-this.ty*n,this.ty=o*n+this.ty*e,this}append(t){const e=this.a,n=this.b,r=this.c,s=this.d;return this.a=t.a*e+t.b*r,this.b=t.a*n+t.b*s,this.c=t.c*e+t.d*r,this.d=t.c*n+t.d*s,this.tx=t.tx*e+t.ty*r+this.tx,this.ty=t.tx*n+t.ty*s+this.ty,this}appendFrom(t,e){const n=t.a,r=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,h=e.a,u=e.b,c=e.c,f=e.d;return this.a=n*h+r*c,this.b=n*u+r*f,this.c=s*h+o*c,this.d=s*u+o*f,this.tx=a*h+l*c+e.tx,this.ty=a*u+l*f+e.ty,this}setTransform(t,e,n,r,s,o,a,l,h){return this.a=Math.cos(a+h)*s,this.b=Math.sin(a+h)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(n*this.a+r*this.c),this.ty=e-(n*this.b+r*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const n=this.a,r=this.c;this.a=n*t.a+this.b*t.c,this.b=n*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,n=this.b,r=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-r,s),l=Math.atan2(n,e),h=Math.abs(a+l);return h<1e-5||Math.abs(ml-h)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+n*n),t.scale.y=Math.sqrt(r*r+s*s),t.position.x=this.tx+(o.x*e+o.y*r),t.position.y=this.ty+(o.x*n+o.y*s),t}invert(){const t=this.a,e=this.b,n=this.c,r=this.d,s=this.tx,o=t*r-e*n;return this.a=r/o,this.b=-e/o,this.c=-n/o,this.d=t/o,this.tx=(n*this.ty-r*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new Y;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return vl.identity()}static get shared(){return xl.identity()}}const xl=new Y,vl=new Y,ne=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],re=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],se=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],oe=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Rn=[],Ns=[],hi=Math.sign;function yl(){for(let i=0;i<16;i++){const t=[];Rn.push(t);for(let e=0;e<16;e++){const n=hi(ne[i]*ne[e]+se[i]*re[e]),r=hi(re[i]*ne[e]+oe[i]*re[e]),s=hi(ne[i]*se[e]+se[i]*oe[e]),o=hi(re[i]*se[e]+oe[i]*oe[e]);for(let a=0;a<16;a++)if(ne[a]===n&&re[a]===r&&se[a]===s&&oe[a]===o){t.push(a);break}}}for(let i=0;i<16;i++){const t=new Y;t.set(ne[i],re[i],se[i],oe[i],0,0),Ns.push(t)}}yl();const tt={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:i=>ne[i],uY:i=>re[i],vX:i=>se[i],vY:i=>oe[i],inv:i=>i&8?i&15:-i&7,add:(i,t)=>Rn[i][t],sub:(i,t)=>Rn[i][tt.inv(t)],rotate180:i=>i^4,isVertical:i=>(i&3)===2,byDirection:(i,t)=>Math.abs(i)*2<=Math.abs(t)?t>=0?tt.S:tt.N:Math.abs(t)*2<=Math.abs(i)?i>0?tt.E:tt.W:t>0?i>0?tt.SE:tt.SW:i>0?tt.NE:tt.NW,matrixAppendRotationInv:(i,t,e=0,n=0)=>{const r=Ns[tt.inv(t)];r.tx=e,r.ty=n,i.append(r)}},ci=[new ut,new ut,new ut,new ut];class rt{constructor(t=0,e=0,n=0,r=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(n),this.height=Number(r)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new rt(0,0,0,0)}clone(){return new rt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,n){const{width:r,height:s}=this;if(r<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-n/2,h=o+r+n/2,u=a-n/2,c=a+s+n/2,f=o+n/2,d=o+r-n/2,p=a+n/2,g=a+s-n/2;return t>=l&&t<=h&&e>=u&&e<=c&&!(t>f&&t<d&&e>p&&e<g)}intersects(t,e){if(!e){const z=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=z)return!1;const S=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>S}const n=this.left,r=this.right,s=this.top,o=this.bottom;if(r<=n||o<=s)return!1;const a=ci[0].set(t.left,t.top),l=ci[1].set(t.left,t.bottom),h=ci[2].set(t.right,t.top),u=ci[3].set(t.right,t.bottom);if(h.x<=a.x||l.y<=a.y)return!1;const c=Math.sign(e.a*e.d-e.b*e.c);if(c===0||(e.apply(a,a),e.apply(l,l),e.apply(h,h),e.apply(u,u),Math.max(a.x,l.x,h.x,u.x)<=n||Math.min(a.x,l.x,h.x,u.x)>=r||Math.max(a.y,l.y,h.y,u.y)<=s||Math.min(a.y,l.y,h.y,u.y)>=o))return!1;const f=c*(l.y-a.y),d=c*(a.x-l.x),p=f*n+d*s,g=f*r+d*s,m=f*n+d*o,v=f*r+d*o;if(Math.max(p,g,m,v)<=f*a.x+d*a.y||Math.min(p,g,m,v)>=f*u.x+d*u.y)return!1;const x=c*(a.y-h.y),y=c*(h.x-a.x),_=x*n+y*s,F=x*r+y*s,R=x*n+y*o,A=x*r+y*o;return!(Math.max(_,F,R,A)<=x*a.x+y*a.y||Math.min(_,F,R,A)>=x*u.x+y*u.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),n=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(n-e,0),this.y=r,this.height=Math.max(s-r,0),this}ceil(t=1,e=.001){const n=Math.ceil((this.x+this.width-e)*t)/t,r=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=n-this.x,this.height=r-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),n=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=n-e,this.y=r,this.height=s-r,this}getBounds(t){return t=t||new rt,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const en={default:-1};function st(i="default"){return en[i]===void 0&&(en[i]=-1),++en[i]}const kr={},Q="8.0.0";function U(i,t,e=3){if(kr[t])return;let n=new Error().stack;typeof n>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${i}`):(n=n.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${i}`),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${i}`),console.warn(n))),kr[t]=!0}const $s=()=>{};function Er(i){return i+=i===0?1:0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1}function Rr(i){return!(i&i-1)&&!!i}function _l(i){const t={};for(const e in i)i[e]!==void 0&&(t[e]=i[e]);return t}const Dr=Object.create(null);function bl(i){const t=Dr[i];return t===void 0&&(Dr[i]=st("resource")),t}const Ws=class Vs extends Ot{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Vs.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){U(Q,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=bl(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Ws.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Hs=Ws;const Xs=class Ys extends Ot{constructor(t={}){super(),this.options=t,this.uid=st("textureSource"),this._resourceType="textureSource",this._resourceId=st("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Ys.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Hs(_l(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,n;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(n=this._style)==null||n.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=st("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,n){n=n||this._resolution,t=t||this.width,e=e||this.height;const r=Math.round(t*n),s=Math.round(e*n);return this.width=r/n,this.height=s/n,this._resolution=n,this.pixelWidth===r&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=r,this.pixelHeight=s,this.emit("resize",this),this._resourceId=st("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Rr(this.pixelWidth)&&Rr(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Xs.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let Bt=Xs;class dr extends Bt{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let n=t.format;n||(e instanceof Float32Array?n="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?n="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?n="rgba16uint":(e instanceof Int8Array,n="bgra8unorm")),super({...t,resource:e,format:n}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}dr.extension=D.TextureSource;const Lr=new Y;class Sl{constructor(t,e){this.mapCoord=new Y,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const n=this.mapCoord;for(let r=0;r<t.length;r+=2){const s=t[r],o=t[r+1];e[r]=s*n.a+o*n.c+n.tx,e[r+1]=s*n.b+o*n.d+n.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const n=t.orig,r=t.trim;r&&(Lr.set(n.width/r.width,0,0,n.height/r.height,-r.x/r.width,-r.y/r.height),this.mapCoord.append(Lr));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class B extends Ot{constructor({source:t,label:e,frame:n,orig:r,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:h}={}){if(super(),this.uid=st("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new rt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new Bt,this.noFrame=!n,n)this.frame.copyFrom(n);else{const{width:u,height:c}=this._source;this.frame.width=u,this.frame.height=c}this.orig=r||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=h||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Sl(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:n,height:r}=this._source,s=e.x/n,o=e.y/r,a=e.width/n,l=e.height/r;let h=this.rotate;if(h){const u=a/2,c=l/2,f=s+u,d=o+c;h=tt.add(h,tt.NW),t.x0=f+u*tt.uX(h),t.y0=d+c*tt.uY(h),h=tt.add(h,2),t.x1=f+u*tt.uX(h),t.y1=d+c*tt.uY(h),h=tt.add(h,2),t.x2=f+u*tt.uX(h),t.y2=d+c*tt.uY(h),h=tt.add(h,2),t.x3=f+u*tt.uX(h),t.y3=d+c*tt.uY(h)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return U(Q,"Texture.baseTexture is now Texture.source"),this._source}}B.EMPTY=new B({label:"EMPTY",source:new Bt({label:"EMPTY"})});B.EMPTY.destroy=$s;B.WHITE=new B({source:new dr({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});B.WHITE.destroy=$s;function wl(i,t,e,n){const{width:r,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;i.minX=o.x-t._x*r-n,i.maxX=i.minX+a,i.minY=o.y-t._y*s-n,i.maxY=i.minY+l}else i.minX=-t._x*r-n,i.maxX=i.minX+r,i.minY=-t._y*s-n,i.maxY=i.minY+s}var Cl={grad:.9,turn:360,rad:360/(2*Math.PI)},Ut=function(i){return typeof i=="string"?i.length>0:typeof i=="number"},at=function(i,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*i)/e+0},xt=function(i,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),i>e?e:i>t?i:t},js=function(i){return(i=isFinite(i)?i%360:0)>0?i:i+360},Gr=function(i){return{r:xt(i.r,0,255),g:xt(i.g,0,255),b:xt(i.b,0,255),a:xt(i.a)}},nn=function(i){return{r:at(i.r),g:at(i.g),b:at(i.b),a:at(i.a,3)}},Pl=/^#([0-9a-f]{3,8})$/i,fi=function(i){var t=i.toString(16);return t.length<2?"0"+t:t},qs=function(i){var t=i.r,e=i.g,n=i.b,r=i.a,s=Math.max(t,e,n),o=s-Math.min(t,e,n),a=o?s===t?(e-n)/o:s===e?2+(n-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:r}},Ks=function(i){var t=i.h,e=i.s,n=i.v,r=i.a;t=t/360*6,e/=100,n/=100;var s=Math.floor(t),o=n*(1-e),a=n*(1-(t-s)*e),l=n*(1-(1-t+s)*e),h=s%6;return{r:255*[n,a,o,o,l,n][h],g:255*[l,n,n,a,o,o][h],b:255*[o,o,l,n,n,a][h],a:r}},Nr=function(i){return{h:js(i.h),s:xt(i.s,0,100),l:xt(i.l,0,100),a:xt(i.a)}},$r=function(i){return{h:at(i.h),s:at(i.s),l:at(i.l),a:at(i.a,3)}},Wr=function(i){return Ks((e=(t=i).s,{h:t.h,s:(e*=((n=t.l)<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:t.a}));var t,e,n},Ke=function(i){return{h:(t=qs(i)).h,s:(r=(200-(e=t.s))*(n=t.v)/100)>0&&r<200?e*n/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,e,n,r},Tl=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Al=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Ml=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Fl=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Dn={string:[[function(i){var t=Pl.exec(i);return t?(i=t[1]).length<=4?{r:parseInt(i[0]+i[0],16),g:parseInt(i[1]+i[1],16),b:parseInt(i[2]+i[2],16),a:i.length===4?at(parseInt(i[3]+i[3],16)/255,2):1}:i.length===6||i.length===8?{r:parseInt(i.substr(0,2),16),g:parseInt(i.substr(2,2),16),b:parseInt(i.substr(4,2),16),a:i.length===8?at(parseInt(i.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(i){var t=Ml.exec(i)||Fl.exec(i);return t?t[2]!==t[4]||t[4]!==t[6]?null:Gr({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(i){var t=Tl.exec(i)||Al.exec(i);if(!t)return null;var e,n,r=Nr({h:(e=t[1],n=t[2],n===void 0&&(n="deg"),Number(e)*(Cl[n]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Wr(r)},"hsl"]],object:[[function(i){var t=i.r,e=i.g,n=i.b,r=i.a,s=r===void 0?1:r;return Ut(t)&&Ut(e)&&Ut(n)?Gr({r:Number(t),g:Number(e),b:Number(n),a:Number(s)}):null},"rgb"],[function(i){var t=i.h,e=i.s,n=i.l,r=i.a,s=r===void 0?1:r;if(!Ut(t)||!Ut(e)||!Ut(n))return null;var o=Nr({h:Number(t),s:Number(e),l:Number(n),a:Number(s)});return Wr(o)},"hsl"],[function(i){var t=i.h,e=i.s,n=i.v,r=i.a,s=r===void 0?1:r;if(!Ut(t)||!Ut(e)||!Ut(n))return null;var o=function(a){return{h:js(a.h),s:xt(a.s,0,100),v:xt(a.v,0,100),a:xt(a.a)}}({h:Number(t),s:Number(e),v:Number(n),a:Number(s)});return Ks(o)},"hsv"]]},Vr=function(i,t){for(var e=0;e<t.length;e++){var n=t[e][0](i);if(n)return[n,t[e][1]]}return[null,void 0]},Il=function(i){return typeof i=="string"?Vr(i.trim(),Dn.string):typeof i=="object"&&i!==null?Vr(i,Dn.object):[null,void 0]},rn=function(i,t){var e=Ke(i);return{h:e.h,s:xt(e.s+100*t,0,100),l:e.l,a:e.a}},sn=function(i){return(299*i.r+587*i.g+114*i.b)/1e3/255},Hr=function(i,t){var e=Ke(i);return{h:e.h,s:e.s,l:xt(e.l+100*t,0,100),a:e.a}},Ln=function(){function i(t){this.parsed=Il(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return i.prototype.isValid=function(){return this.parsed!==null},i.prototype.brightness=function(){return at(sn(this.rgba),2)},i.prototype.isDark=function(){return sn(this.rgba)<.5},i.prototype.isLight=function(){return sn(this.rgba)>=.5},i.prototype.toHex=function(){return t=nn(this.rgba),e=t.r,n=t.g,r=t.b,o=(s=t.a)<1?fi(at(255*s)):"","#"+fi(e)+fi(n)+fi(r)+o;var t,e,n,r,s,o},i.prototype.toRgb=function(){return nn(this.rgba)},i.prototype.toRgbString=function(){return t=nn(this.rgba),e=t.r,n=t.g,r=t.b,(s=t.a)<1?"rgba("+e+", "+n+", "+r+", "+s+")":"rgb("+e+", "+n+", "+r+")";var t,e,n,r,s},i.prototype.toHsl=function(){return $r(Ke(this.rgba))},i.prototype.toHslString=function(){return t=$r(Ke(this.rgba)),e=t.h,n=t.s,r=t.l,(s=t.a)<1?"hsla("+e+", "+n+"%, "+r+"%, "+s+")":"hsl("+e+", "+n+"%, "+r+"%)";var t,e,n,r,s},i.prototype.toHsv=function(){return t=qs(this.rgba),{h:at(t.h),s:at(t.s),v:at(t.v),a:at(t.a,3)};var t},i.prototype.invert=function(){return Tt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},i.prototype.saturate=function(t){return t===void 0&&(t=.1),Tt(rn(this.rgba,t))},i.prototype.desaturate=function(t){return t===void 0&&(t=.1),Tt(rn(this.rgba,-t))},i.prototype.grayscale=function(){return Tt(rn(this.rgba,-1))},i.prototype.lighten=function(t){return t===void 0&&(t=.1),Tt(Hr(this.rgba,t))},i.prototype.darken=function(t){return t===void 0&&(t=.1),Tt(Hr(this.rgba,-t))},i.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},i.prototype.alpha=function(t){return typeof t=="number"?Tt({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):at(this.rgba.a,3);var e},i.prototype.hue=function(t){var e=Ke(this.rgba);return typeof t=="number"?Tt({h:t,s:e.s,l:e.l,a:e.a}):at(e.h)},i.prototype.isEqual=function(t){return this.toHex()===Tt(t).toHex()},i}(),Tt=function(i){return i instanceof Ln?i:new Ln(i)},Xr=[],zl=function(i){i.forEach(function(t){Xr.indexOf(t)<0&&(t(Ln,Dn),Xr.push(t))})};function Ol(i,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},n={};for(var r in e)n[e[r]]=r;var s={};i.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,h=n[this.toHex()];if(h)return h;if(o!=null&&o.closest){var u=this.toRgb(),c=1/0,f="black";if(!s.length)for(var d in e)s[d]=new i(e[d]).toRgb();for(var p in e){var g=(a=u,l=s[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<c&&(c=g,f=p)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new i(l).toRgb():null},"name"])}zl([Ol]);const Ie=class Ye{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Ye)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const n=typeof t;if(n!==typeof e)return!1;if(n==="number"||n==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,n,r]=this._components;return{r:t,g:e,b:n,a:r}}toRgb(){const[t,e,n]=this._components;return{r:t,g:e,b:n}}toRgbaString(){const[t,e,n]=this.toUint8RgbArray();return`rgba(${t},${e},${n},${this.alpha})`}toUint8RgbArray(t){const[e,n,r]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(n*255),t[2]=Math.round(r*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,n,r,s]=this._components;return t[0]=e,t[1]=n,t[2]=r,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,n,r]=this._components;return t[0]=e,t[1]=n,t[2]=r,t}toNumber(){return this._int}toBgrNumber(){const[t,e,n]=this.toUint8RgbArray();return(n<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,n,r,s]=Ye._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=n,this._components[2]*=r,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let n=this._int>>16&255,r=this._int>>8&255,s=this._int&255;return e&&(n=n*t+.5|0,r=r*t+.5|0,s=s*t+.5|0),(t*255<<24)+(n<<16)+(r<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,n,r,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,n=(o>>8&255)/255,r=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,n,r,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,n,r,s=255]=t,e/=255,n/=255,r/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Ye.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=Tt(t);o.isValid()&&({r:e,g:n,b:r,a:s}=o.rgba,e/=255,n/=255,r/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=n,this._components[2]=r,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,n]=this._components;this._int=(t*255<<16)+(e*255<<8)+(n*255|0)}_clamp(t,e=0,n=1){return typeof t=="number"?Math.min(Math.max(t,e),n):(t.forEach((r,s)=>{t[s]=Math.min(Math.max(r,e),n)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Ye||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};Ie.shared=new Ie;Ie._temp=new Ie;Ie.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let j=Ie;const Bl={cullArea:null,cullable:!1,cullableChildren:!0};function Ul(i,t,e){const n=i.length;let r;if(t>=n||e===0)return;e=t+e>n?n-t:e;const s=n-e;for(r=t;r<s;++r)i[r]=i[r+e];i.length=s}const kl={allowChildren:!0,removeChildren(i=0,t){const e=t??this.children.length,n=e-i,r=[];if(n>0&&n<=e){for(let o=e-1;o>=i;o--){const a=this.children[o];a&&(r.push(a),a.parent=null)}Ul(this.children,i,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(r);for(let o=0;o<r.length;++o)this.emit("childRemoved",r[o],this,o),r[o].emit("removed",this);return r}else if(n===0&&this.children.length===0)return r;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(i){const t=this.getChildAt(i);return this.removeChild(t)},getChildAt(i){if(i<0||i>=this.children.length)throw new Error(`getChildAt: Index (${i}) does not exist.`);return this.children[i]},setChildIndex(i,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(i),this.addChildAt(i,t)},getChildIndex(i){const t=this.children.indexOf(i);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(i,t){this.allowChildren||U(Q,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${i}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(i.parent){const r=i.parent.children.indexOf(i);if(i.parent===this&&r===t)return i;r!==-1&&i.parent.children.splice(r,1)}t===e.length?e.push(i):e.splice(t,0,i),i.parent=this,i.didChange=!0,i.didViewUpdate=!1,i._updateFlags=15;const n=this.renderGroup||this.parentRenderGroup;return n&&n.addChild(i),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",i,this,t),i.emit("added",this),i},swapChildren(i,t){if(i===t)return;const e=this.getChildIndex(i),n=this.getChildIndex(t);this.children[e]=t,this.children[n]=i},removeFromParent(){var i;(i=this.parent)==null||i.removeChild(this)}};class Yr{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class pr{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var n;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(n=e.init)==null||n.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class El{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new pr(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const n=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[n]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const Rt=new El;class Rl{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const n=this._tests[e];if(n.test(t))return Rt.get(n.maskClass,t)}return t}returnMaskEffect(t){Rt.return(t)}}const Gn=new Rl;yt.handleByList(D.MaskEffect,Gn._effectClasses);const Dl={_maskEffect:null,_filterEffect:null,effects:[],addEffect(i){if(this.effects.indexOf(i)!==-1)return;this.effects.push(i),this.effects.sort((n,r)=>n.priority-r.priority);const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0),this._updateIsSimple()},removeEffect(i){const t=this.effects.indexOf(i);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(i){const t=this._maskEffect;(t==null?void 0:t.mask)!==i&&(t&&(this.removeEffect(t),Gn.returnMaskEffect(t),this._maskEffect=null),i!=null&&(this._maskEffect=Gn.getMaskEffect(i),this.addEffect(this._maskEffect)))},get mask(){var i;return(i=this._maskEffect)==null?void 0:i.mask},set filters(i){var s;!Array.isArray(i)&&i&&(i=[i]);const t=this._filterEffect||(this._filterEffect=new Yr);i=i;const e=(i==null?void 0:i.length)>0,n=((s=t.filters)==null?void 0:s.length)>0,r=e!==n;i=Array.isArray(i)?i.slice(0):i,t.filters=Object.freeze(i),r&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=i??null))},get filters(){var i;return(i=this._filterEffect)==null?void 0:i.filters},set filterArea(i){this._filterEffect||(this._filterEffect=new Yr),this._filterEffect.filterArea=i},get filterArea(){var i;return(i=this._filterEffect)==null?void 0:i.filterArea}},Ll={label:null,get name(){return U(Q,"Container.name property has been removed, use Container.label instead"),this.label},set name(i){U(Q,"Container.name property has been removed, use Container.label instead"),this.label=i},getChildByName(i,t=!1){return this.getChildByLabel(i,t)},getChildByLabel(i,t=!1){const e=this.children;for(let n=0;n<e.length;n++){const r=e[n];if(r.label===i||i instanceof RegExp&&i.test(r.label))return r}if(t)for(let n=0;n<e.length;n++){const s=e[n].getChildByLabel(i,!0);if(s)return s}return null},getChildrenByLabel(i,t=!1,e=[]){const n=this.children;for(let r=0;r<n.length;r++){const s=n[r];(s.label===i||i instanceof RegExp&&i.test(s.label))&&e.push(s)}if(t)for(let r=0;r<n.length;r++)n[r].getChildrenByLabel(i,!0,e);return e}},jr=new Y;class It{constructor(t=1/0,e=1/0,n=-1/0,r=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=jr,this.minX=t,this.minY=e,this.maxX=n,this.maxY=r}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new rt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=jr,this}set(t,e,n,r){this.minX=t,this.minY=e,this.maxX=n,this.maxY=r}addFrame(t,e,n,r,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,h=s.d,u=s.tx,c=s.ty;let f=this.minX,d=this.minY,p=this.maxX,g=this.maxY,m=o*t+l*e+u,v=a*t+h*e+c;m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),m=o*n+l*e+u,v=a*n+h*e+c,m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),m=o*t+l*r+u,v=a*t+h*r+c,m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),m=o*n+l*r+u,v=a*n+h*r+c,m<f&&(f=m),v<d&&(d=v),m>p&&(p=m),v>g&&(g=v),this.minX=f,this.minY=d,this.maxX=p,this.maxY=g}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,n=this.minY,r=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:h,tx:u,ty:c}=t;let f=o*e+l*n+u,d=a*e+h*n+c;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*r+l*n+u,d=a*r+h*n+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*s+u,d=a*e+h*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*r+l*s+u,d=a*r+h*s+c,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,n,r){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<n&&(this.minY=n),this.maxY>r&&(this.maxY=r),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new It(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,n,r){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;r||(r=this.matrix);const h=r.a,u=r.b,c=r.c,f=r.d,d=r.tx,p=r.ty;for(let g=e;g<n;g+=2){const m=t[g],v=t[g+1],x=h*m+c*v+d,y=u*m+f*v+p;s=x<s?x:s,o=y<o?y:o,a=x>a?x:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Gt=new pr(Y),ze=new pr(It);function Zs(i,t,e){e.clear();let n,r;return i.parent?t?n=i.parent.worldTransform:(r=Gt.get().identity(),n=Di(i,r)):n=Y.IDENTITY,Qs(i,e,n,t),r&&Gt.return(r),e.isValid||e.set(0,0,0,0),e}function Qs(i,t,e,n){var a,l;if(!i.visible||!i.measurable)return;let r;n?r=i.worldTransform:(i.updateLocalTransform(),r=Gt.get(),r.appendFrom(i.localTransform,e));const s=t,o=!!i.effects.length;if(o&&(t=ze.get().clear()),i.boundsArea)t.addRect(i.boundsArea,r);else{i.addBounds&&(t.matrix=r,i.addBounds(t));for(let h=0;h<i.children.length;h++)Qs(i.children[h],t,r,n)}if(o){for(let h=0;h<i.effects.length;h++)(l=(a=i.effects[h]).addBounds)==null||l.call(a,t);s.addBounds(t,Y.IDENTITY),ze.return(t)}n||Gt.return(r)}function Di(i,t){const e=i.parent;return e&&(Di(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}let on=0;const qr=500;function ht(...i){on!==qr&&(on++,on===qr?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...i))}function Js(i,t,e){return t.clear(),e||(e=Y.IDENTITY),to(i,t,e,i,!0),t.isValid||t.set(0,0,0,0),t}function to(i,t,e,n,r){var l,h;let s;if(r)s=Gt.get(),s=e.copyTo(s);else{if(!i.visible||!i.measurable)return;i.updateLocalTransform();const u=i.localTransform;s=Gt.get(),s.appendFrom(u,e)}const o=t,a=!!i.effects.length;if(a&&(t=ze.get().clear()),i.boundsArea)t.addRect(i.boundsArea,s);else{i.renderPipeId&&(t.matrix=s,i.addBounds(t));const u=i.children;for(let c=0;c<u.length;c++)to(u[c],t,s,n,!1)}if(a){for(let u=0;u<i.effects.length;u++)(h=(l=i.effects[u]).addLocalBounds)==null||h.call(l,t,n);o.addBounds(t,Y.IDENTITY),ze.return(t)}Gt.return(s)}function eo(i,t){const e=i.children;for(let n=0;n<e.length;n++){const r=e[n],s=(r.uid&255)<<24|r._didChangeId&16777215;t.data[t.index]!==s&&(t.data[t.index]=s,t.didChange=!0),t.index++,r.children.length&&eo(r,t)}return t.didChange}const Gl=new Y,Nl={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(i,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=i/t*e:this.scale.x=e},_setHeight(i,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=i/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new It});const i=this._localBoundsCacheData;return i.index=1,i.didChange=!1,i.data[0]!==this._didChangeId>>12&&(i.didChange=!0,i.data[0]=this._didChangeId>>12),eo(this,i),i.didChange&&Js(this,i.localBounds,Gl),i.localBounds},getBounds(i,t){return Zs(this,i,t||new It)}},$l={_onRender:null,set onRender(i){const t=this.renderGroup||this.parentRenderGroup;if(!i){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=i},get onRender(){return this._onRender}},Wl={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(i){this._zIndex!==i&&(this._zIndex=i,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Vl))}};function Vl(i,t){return i._zIndex-t._zIndex}const Hl={getGlobalPosition(i=new ut,t=!1){return this.parent?this.parent.toGlobal(this._position,i,t):(i.x=this._position.x,i.y=this._position.y),i},toGlobal(i,t,e=!1){if(!e){this.updateLocalTransform();const n=Di(this,new Y);return n.append(this.localTransform),n.apply(i,t)}return this.worldTransform.apply(i,t)},toLocal(i,t,e,n){if(t&&(i=t.toGlobal(i,e,n)),!n){this.updateLocalTransform();const r=Di(this,new Y);return r.append(this.localTransform),r.applyInverse(i,e)}return this.worldTransform.applyInverse(i,e)}};class io{constructor(){this.uid=st("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Xl{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new Y,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new io,this._onRenderContainers=[],this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let n=0;n<e.length;n++)this.addChild(e[n])}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let n=0;n<e.length;n++)this.addChild(e[n])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let n=0;n<e.length;n++)this.removeChild(e[n])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}getChildren(t=[]){const e=this.root.children;for(let n=0;n<e.length;n++)this._getChildren(e[n],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const n=t.children;for(let r=0;r<n.length;r++)this._getChildren(n[r],e);return e}}function Yl(i,t,e={}){for(const n in t)!e[n]&&t[n]!==void 0&&(i[n]=t[n])}const an=new it(null),ln=new it(null),un=new it(null,1,1),Kr=1,jl=2,hn=4;class N extends Ot{constructor(t={}){var e,n;super(),this.uid=st("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new Y,this.relativeGroupTransform=new Y,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new it(this,0,0),this._scale=un,this._pivot=ln,this._skew=an,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,Yl(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(r=>this.addChild(r)),this.effects=[],(n=t.parent)==null||n.addChild(this)}static mixin(t){Object.defineProperties(N.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||U(Q,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let r=0;r<t.length;r++)this.addChild(t[r]);return t[0]}const e=t[0];if(e.parent===this)return this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),e;e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const n=this.renderGroup||this.parentRenderGroup;return n&&n.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didChangeId+=4096,e._zIndex!==0&&e.depthOfChildModified(),e}removeChild(...t){if(t.length>1){for(let r=0;r<t.length;r++)this.removeChild(t[r]);return t[0]}const e=t[0],n=this.children.indexOf(e);return n>-1&&(this._didChangeId+=4096,this.children.splice(n,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,n),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){if(this.renderGroup&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t&&t.removeChild(this),this.renderGroup=new Xl(this),t&&t.addChild(this),this._updateIsSimple(),this.groupTransform=Y.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new Y),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*gl}set angle(t){this.rotation=t*Fe}get pivot(){return this._pivot===ln&&(this._pivot=new it(this,0,0)),this._pivot}set pivot(t){this._pivot===ln&&(this._pivot=new it(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===an&&(this._skew=new it(this,0,0)),this._skew}set skew(t){this._skew===an&&(this._skew=new it(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===un&&(this._scale=new it(this,1,1)),this._scale}set scale(t){this._scale===un&&(this._scale=new it(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const n=this.getLocalBounds();let r,s;typeof t!="object"?(r=t,s=e??t):(r=t.width,s=t.height??t.width),r!==void 0&&this._setWidth(r,n.width),s!==void 0&&this._setHeight(s,n.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,e=this._scale,n=this._pivot,r=this._position,s=e._x,o=e._y,a=n._x,l=n._y;t.a=this._cx*s,t.b=this._sx*s,t.c=this._cy*o,t.d=this._sy*o,t.tx=r._x-(a*t.a+l*t.c),t.ty=r._y-(a*t.b+l*t.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=Kr,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const n=j.shared.setValue(t??16777215).toBgrNumber();n!==this.localColor&&(this.localColor=n,this._updateFlags|=Kr,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=jl,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?1:0;(this.localDisplayStatus&2)>>1!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=hn,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?1:0;(this.localDisplayStatus&4)>>2!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=hn,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=hn,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;const e=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let r=0;r<e.length;++r)e[r].destroy(t)}}N.mixin(kl);N.mixin(Hl);N.mixin($l);N.mixin(Nl);N.mixin(Dl);N.mixin(Ll);N.mixin(Wl);N.mixin(Bl);class Ft extends N{constructor(t=B.EMPTY){t instanceof B&&(t={texture:t});const{texture:e=B.EMPTY,anchor:n,roundPixels:r,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new it({_onUpdate:()=>{this.onViewUpdate()}}),n?this.anchor=n:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=r??!1,s&&(this.width=s),o&&(this.height=o)}static from(t,e=!1){return t instanceof B?new Ft(t):new Ft(B.from(t,e))}set texture(t){t||(t=B.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){wl(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,e=this._texture,n=this._sourceBounds,{width:r,height:s}=e.orig;n.maxX=-t._x*r,n.minX=n.maxX+r,n.maxY=-t._y*s,n.minY=n.maxY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const n=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(n)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width)}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){let n,r;typeof t!="object"?(n=t,r=e??t):(n=t.width,r=t.height??t.width),n!==void 0&&this._setWidth(n,this._texture.orig.width),r!==void 0&&this._setHeight(r,this._texture.orig.height)}}const ql=new It;function no(i,t,e){const n=ql;i.measurable=!0,Zs(i,e,n),t.addBoundsMask(n),i.measurable=!1}function ro(i,t,e){const n=ze.get();i.measurable=!0;const r=Gt.get().identity(),s=so(i,e,r);Js(i,n,s),i.measurable=!1,t.addBoundsMask(n),Gt.return(r),ze.return(n)}function so(i,t,e){return i?(i!==t&&(so(i.parent,t,e),i.updateLocalTransform(),e.append(i.localTransform)),e):(ht("Mask bounds, renderable is not inside the root container"),e)}class oo{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof Ft),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){no(this.mask,t,e)}addLocalBounds(t,e){ro(this.mask,t,e)}containsPoint(t,e){const n=this.mask;return e(n,t)}destroy(){this.reset()}static test(t){return t instanceof Ft}}oo.extension=D.MaskEffect;class ao{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}ao.extension=D.MaskEffect;class lo{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){no(this.mask,t,e)}addLocalBounds(t,e){ro(this.mask,t,e)}containsPoint(t,e){const n=this.mask;return e(n,t)}destroy(){this.reset()}static test(t){return t instanceof N}}lo.extension=D.MaskEffect;const Kl={createCanvas:(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(i,t)=>fetch(i,t),parseXML:i=>new DOMParser().parseFromString(i,"text/xml")};let Zr=Kl;const lt={get(){return Zr},set(i){Zr=i}};class uo extends Bt{constructor(t){t.resource||(t.resource=lt.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,n=this._resolution){const r=super.resize(t,e,n);return r&&this.resizeCanvas(),r}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}uo.extension=D.TextureSource;class Be extends Bt{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=lt.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0),t.resource=e,ht("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}Be.extension=D.TextureSource;var Li=(i=>(i[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY",i))(Li||{});class cn{constructor(t,e=null,n=0,r=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=n,this._once=r}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const ho=class mt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new cn(null,null,1/0),this.deltaMS=1/mt.targetFPMS,this.elapsedMS=1/mt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,n=Li.NORMAL){return this._addListener(new cn(t,e,n))}addOnce(t,e,n=Li.NORMAL){return this._addListener(new cn(t,e,n,!0))}_addListener(t){let e=this._head.next,n=this._head;if(!e)t.connect(n);else{for(;e;){if(t.priority>e.priority){t.connect(n);break}n=e,e=e.next}t.previous||t.connect(n)}return this._startIfPossible(),this}remove(t,e){let n=this._head.next;for(;n;)n.match(t,e)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*mt.targetFPMS;const n=this._head;let r=n.next;for(;r;)r=r.emit(this);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),n=Math.min(Math.max(0,e)/1e3,mt.targetFPMS);this._maxElapsedMS=1/n}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!mt._shared){const t=mt._shared=new mt;t.autoStart=!0,t._protected=!0}return mt._shared}static get system(){if(!mt._system){const t=mt._system=new mt;t.autoStart=!0,t._protected=!0}return mt._system}};ho.targetFPMS=.06;let Dt=ho,fn;async function co(){return fn??(fn=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);const r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(r),t.deleteTexture(n),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),fn}const $i=class fo extends Bt{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...fo.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=Dt.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await co(),this._load=new Promise((n,r)=>{this.isValid?n(this):(this._resolve=n,this._reject=r,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Dt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Dt.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Dt.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};$i.extension=D.TextureSource;$i.defaultOptions={...Bt.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};$i.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Ci=$i;const wt=(i,t,e=!1)=>(Array.isArray(i)||(i=[i]),t?i.map(n=>typeof n=="string"||e?t(n):n):i);class Zl{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||ht(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const n=wt(t);let r;for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];if(h.test(e)){r=h.getCacheableAssets(n,e);break}}const s=new Map(Object.entries(r||{}));r||n.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:n};n.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const h=r?r[l]:e;this._cache.has(l)&&this._cache.get(l)!==h&&ht("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){ht(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(r=>{this._cache.delete(r)}),e.keys.forEach(r=>{this._cacheMap.delete(r)})}get parsers(){return this._parsers}}const ct=new Zl,Nn=[];yt.handleByList(D.TextureSource,Nn);function Ql(i={}){const t=i&&i.resource,e=t?i.resource:i,n=t?i:{resource:i};for(let r=0;r<Nn.length;r++){const s=Nn[r];if(s.test(e))return new s(n)}throw new Error(`Could not find a source type for resource: ${n.resource}`)}function Jl(i={},t=!1){const e=i&&i.resource,n=e?i.resource:i,r=e?i:{resource:i};if(!t&&ct.has(n))return ct.get(n);const s=new B({source:Ql(r)});return s.on("destroy",()=>{ct.has(n)&&ct.remove(n)}),t||ct.set(n,s),s}function tu(i,t=!1){return typeof i=="string"?ct.get(i):i instanceof Bt?new B({source:i}):Jl(i,t)}B.from=tu;yt.add(oo,ao,lo,Ci,Be,uo,dr);var de=(i=>(i[i.Low=0]="Low",i[i.Normal=1]="Normal",i[i.High=2]="High",i))(de||{});function bt(i){if(typeof i!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`)}function Ne(i){return i.split("?")[0].split("#")[0]}function eu(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function iu(i,t,e){return i.replace(new RegExp(eu(t),"g"),e)}function nu(i,t){let e="",n=0,r=-1,s=0,o=-1;for(let a=0;a<=i.length;++a){if(a<i.length)o=i.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(r===a-1||s===1))if(r!==a-1&&s===2){if(e.length<2||n!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",n=0):(e=e.slice(0,l),n=e.length-1-e.lastIndexOf("/")),r=a,s=0;continue}}else if(e.length===2||e.length===1){e="",n=0,r=a,s=0;continue}}}else e.length>0?e+=`/${i.slice(r+1,a)}`:e=i.slice(r+1,a),n=a-r-1;r=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const zt={toPosix(i){return iu(i,"\\","/")},isUrl(i){return/^https?:/.test(this.toPosix(i))},isDataUrl(i){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i)},isBlobUrl(i){return i.startsWith("blob:")},hasProtocol(i){return/^[^/:]+:/.test(this.toPosix(i))},getProtocol(i){bt(i),i=this.toPosix(i);const t=/^file:\/\/\//.exec(i);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(i);return e?e[0]:""},toAbsolute(i,t,e){if(bt(i),this.isDataUrl(i)||this.isBlobUrl(i))return i;const n=Ne(this.toPosix(t??lt.get().getBaseUrl())),r=Ne(this.toPosix(e??this.rootname(n)));return i=this.toPosix(i),i.startsWith("/")?zt.join(r,i.slice(1)):this.isAbsolute(i)?i:this.join(n,i)},normalize(i){if(bt(i),i.length===0)return".";if(this.isDataUrl(i)||this.isBlobUrl(i))return i;i=this.toPosix(i);let t="";const e=i.startsWith("/");this.hasProtocol(i)&&(t=this.rootname(i),i=i.slice(t.length));const n=i.endsWith("/");return i=nu(i),i.length>0&&n&&(i+="/"),e?`/${i}`:t+i},isAbsolute(i){return bt(i),i=this.toPosix(i),this.hasProtocol(i)?!0:i.startsWith("/")},join(...i){if(i.length===0)return".";let t;for(let e=0;e<i.length;++e){const n=i[e];if(bt(n),n.length>0)if(t===void 0)t=n;else{const r=i[e-1]??"";this.joinExtensions.includes(this.extname(r).toLowerCase())?t+=`/../${n}`:t+=`/${n}`}}return t===void 0?".":this.normalize(t)},dirname(i){if(bt(i),i.length===0)return".";i=this.toPosix(i);let t=i.charCodeAt(0);const e=t===47;let n=-1,r=!0;const s=this.getProtocol(i),o=i;i=i.slice(s.length);for(let a=i.length-1;a>=1;--a)if(t=i.charCodeAt(a),t===47){if(!r){n=a;break}}else r=!1;return n===-1?e?"/":this.isUrl(o)?s+i:s:e&&n===1?"//":s+i.slice(0,n)},rootname(i){bt(i),i=this.toPosix(i);let t="";if(i.startsWith("/")?t="/":t=this.getProtocol(i),this.isUrl(i)){const e=i.indexOf("/",t.length);e!==-1?t=i.slice(0,e):t=i,t.endsWith("/")||(t+="/")}return t},basename(i,t){bt(i),t&&bt(t),i=Ne(this.toPosix(i));let e=0,n=-1,r=!0,s;if(t!==void 0&&t.length>0&&t.length<=i.length){if(t.length===i.length&&t===i)return"";let o=t.length-1,a=-1;for(s=i.length-1;s>=0;--s){const l=i.charCodeAt(s);if(l===47){if(!r){e=s+1;break}}else a===-1&&(r=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(n=s):(o=-1,n=a))}return e===n?n=a:n===-1&&(n=i.length),i.slice(e,n)}for(s=i.length-1;s>=0;--s)if(i.charCodeAt(s)===47){if(!r){e=s+1;break}}else n===-1&&(r=!1,n=s+1);return n===-1?"":i.slice(e,n)},extname(i){bt(i),i=Ne(this.toPosix(i));let t=-1,e=0,n=-1,r=!0,s=0;for(let o=i.length-1;o>=0;--o){const a=i.charCodeAt(o);if(a===47){if(!r){e=o+1;break}continue}n===-1&&(r=!1,n=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||n===-1||s===0||s===1&&t===n-1&&t===e+1?"":i.slice(t,n)},parse(i){bt(i);const t={root:"",dir:"",base:"",ext:"",name:""};if(i.length===0)return t;i=Ne(this.toPosix(i));let e=i.charCodeAt(0);const n=this.isAbsolute(i);let r;t.root=this.rootname(i),n||this.hasProtocol(i)?r=1:r=0;let s=-1,o=0,a=-1,l=!0,h=i.length-1,u=0;for(;h>=r;--h){if(e=i.charCodeAt(h),e===47){if(!l){o=h+1;break}continue}a===-1&&(l=!1,a=h+1),e===46?s===-1?s=h:u!==1&&(u=1):s!==-1&&(u=-1)}return s===-1||a===-1||u===0||u===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&n?t.base=t.name=i.slice(1,a):t.base=t.name=i.slice(o,a)):(o===0&&n?(t.name=i.slice(1,s),t.base=i.slice(1,a)):(t.name=i.slice(o,s),t.base=i.slice(o,a)),t.ext=i.slice(s,a)),t.dir=this.dirname(i),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function po(i,t,e,n,r){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?po(i.replace(n[e],a),t,e+1,n,r):r.push(i.replace(n[e],a))}}function ru(i){const t=/\{(.*?)\}/g,e=i.match(t),n=[];if(e){const r=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");r.push(o)}),po(i,r,0,e,n)}else n.push(i);return n}const Gi=i=>!Array.isArray(i);class Ue{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&")}}getAlias(t){const{alias:e,src:n}=t;return wt(e||n,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&ht("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const n=[];let r=e;Array.isArray(e)||(r=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),r.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const h=this._createBundleAssetId(t,a);n.push(h),l=[a,h]}else{const h=a.map(u=>this._createBundleAssetId(t,u));n.push(...h),l=[...a,...h]}this.add({...s,alias:l,src:o})}),this._bundles[t]=n}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let n;n=s=>{this.hasKey(s)&&ht(`[Resolver] already has key: ${s} overwriting`)},wt(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:h}=s;const u=wt(o).map(d=>typeof d=="string"?ru(d):Array.isArray(d)?d:[d]),c=this.getAlias(s);Array.isArray(c)?c.forEach(n):n(c);const f=[];u.forEach(d=>{d.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const v=this._parsers[m];if(v.test(p)){g=v.parse(p);break}}}else a=p.data??a,l=p.format??l,h=p.loadParser??h,g={...g,...p};if(!c)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:c,data:a,format:l,loadParser:h}),f.push(g)})}),c.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const e=Gi(t);t=wt(t);const n={};return t.forEach(r=>{const s=this._bundles[r];if(s){const o=this.resolve(s),a={};for(const l in o){const h=o[l];a[this._extractAssetIdFromBundle(r,l)]=h}n[r]=a}}),e?n[t[0]]:n}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const n={};for(const r in e)n[r]=e[r].src;return n}return e.src}resolve(t){const e=Gi(t);t=wt(t);const n={};return t.forEach(r=>{if(!this._resolverHash[r])if(this._assetMap[r]){let s=this._assetMap[r];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const h=s.filter(u=>u[a]?u[a]===l:!1);h.length&&(s=h)})}),this._resolverHash[r]=s[0]}else this._resolverHash[r]=this._buildResolvedAsset({alias:[r],src:r},{});n[r]=this._resolverHash[r]}),e?n[t[0]]:n}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const n=t[0],r=this._preferredOrder.find(s=>s.params.format.includes(n.format));if(r)return r}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:n,data:r,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=zt.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=n??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...r||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??su(t.src),t}}Ue.RETINA_PREFIX=/@([0-9\.]+)x/;function su(i){return i.split(".").pop().split("?").shift().split("#").shift()}const Qr=(i,t)=>{const e=t.split("?")[1];return e&&(i+=`?${e}`),i},mo=class je{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof B?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const n=parseFloat(e.meta.scale);n?(this.resolution=n,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=je.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const n=je.BATCH_SIZE;for(;e-t<n&&e<this._frameKeys.length;){const r=this._frameKeys[e],s=this._frames[r],o=s.frame;if(o){let a=null,l=null;const h=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new rt(0,0,Math.floor(h.w)/this.resolution,Math.floor(h.h)/this.resolution);s.rotated?a=new rt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new rt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new rt(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[r]=new B({source:this.textureSource,frame:a,orig:u,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:r.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let n=0;n<t[e].length;n++){const r=t[e][n];this.animations[e].push(this.textures[r])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*je.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*je.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};mo.BATCH_SIZE=1e3;let Jr=mo;const ou=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function go(i,t,e){const n={};if(i.forEach(r=>{n[r]=t}),Object.keys(t.textures).forEach(r=>{n[r]=t.textures[r]}),!e){const r=zt.dirname(i[0]);t.linkedSheets.forEach((s,o)=>{const a=go([`${r}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(n,a)})}return n}const au={extension:D.Asset,cache:{test:i=>i instanceof Jr,getCacheableAssets:(i,t)=>go(i,t,!1)},resolver:{test:i=>{const e=i.split("?")[0].split("."),n=e.pop(),r=e.pop();return n==="json"&&ou.includes(r)},parse:i=>{var e;const t=i.split(".");return{resolution:parseFloat(((e=Ue.RETINA_PREFIX.exec(i))==null?void 0:e[1])??"1"),format:t[t.length-2],src:i}}},loader:{name:"spritesheetLoader",extension:{type:D.LoadParser,priority:de.Normal},async testParse(i,t){return zt.extname(t.src).toLowerCase()===".json"&&!!i.frames},async parse(i,t,e){var h,u;const{texture:n,imageFilename:r}=(t==null?void 0:t.data)??{};let s=zt.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(n instanceof B)o=n;else{const c=Qr(s+(r??i.meta.image),t.src);o=(await e.load([c]))[c]}const a=new Jr(o.source,i);await a.parse();const l=(h=i==null?void 0:i.meta)==null?void 0:h.related_multi_packs;if(Array.isArray(l)){const c=[];for(const d of l){if(typeof d!="string")continue;let p=s+d;(u=t.data)!=null&&u.ignoreMultiPack||(p=Qr(p,t.src),c.push(e.load({src:p,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(c);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==d))})}return a},async unload(i,t,e){await e.unload(i.textureSource._sourceOrigin),i.destroy(!1)}}};yt.add(au);var dn=/iPhone/i,ts=/iPod/i,es=/iPad/i,is=/\biOS-universal(?:.+)Mac\b/i,pn=/\bAndroid(?:.+)Mobile\b/i,ns=/Android/i,me=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,di=/Silk/i,kt=/Windows Phone/i,rs=/\bWindows(?:.+)ARM\b/i,ss=/BlackBerry/i,os=/BB10/i,as=/Opera Mini/i,ls=/\b(CriOS|Chrome)(?:.+)Mobile/i,us=/Mobile(?:.+)Firefox\b/i,hs=function(i){return typeof i<"u"&&i.platform==="MacIntel"&&typeof i.maxTouchPoints=="number"&&i.maxTouchPoints>1&&typeof MSStream>"u"};function lu(i){return function(t){return t.test(i)}}function cs(i){var t={userAgent:"",platform:"",maxTouchPoints:0};!i&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof i=="string"?t.userAgent=i:i&&i.userAgent&&(t={userAgent:i.userAgent,platform:i.platform,maxTouchPoints:i.maxTouchPoints||0});var e=t.userAgent,n=e.split("[FBAN");typeof n[1]<"u"&&(e=n[0]),n=e.split("Twitter"),typeof n[1]<"u"&&(e=n[0]);var r=lu(e),s={apple:{phone:r(dn)&&!r(kt),ipod:r(ts),tablet:!r(dn)&&(r(es)||hs(t))&&!r(kt),universal:r(is),device:(r(dn)||r(ts)||r(es)||r(is)||hs(t))&&!r(kt)},amazon:{phone:r(me),tablet:!r(me)&&r(di),device:r(me)||r(di)},android:{phone:!r(kt)&&r(me)||!r(kt)&&r(pn),tablet:!r(kt)&&!r(me)&&!r(pn)&&(r(di)||r(ns)),device:!r(kt)&&(r(me)||r(di)||r(pn)||r(ns))||r(/\bokhttp\b/i)},windows:{phone:r(kt),tablet:r(rs),device:r(kt)||r(rs)},other:{blackberry:r(ss),blackberry10:r(os),opera:r(as),firefox:r(us),chrome:r(ls),device:r(ss)||r(os)||r(as)||r(us)||r(ls)},any:!1,phone:!1,tablet:!1};return s.any=s.apple.device||s.android.device||s.windows.device||s.other.device,s.phone=s.apple.phone||s.android.phone||s.windows.phone,s.tablet=s.apple.tablet||s.android.tablet||s.windows.tablet,s}const uu=cs.default??cs,Pi=uu(globalThis.navigator),mn=Object.create(null),fs=Object.create(null);function mr(i,t){let e=fs[i];return e===void 0&&(mn[t]===void 0&&(mn[t]=1),fs[i]=e=mn[t]++),e}let ge;function xo(){return(!ge||ge!=null&&ge.isContextLost())&&(ge=lt.get().createCanvas().getContext("webgl",{})),ge}let pi;function hu(){if(!pi){pi="mediump";const i=xo();i&&i.getShaderPrecisionFormat&&(pi=i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision?"highp":"mediump")}return pi}function cu(i,t,e){return t?i:e?(i=i.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${i}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${i}
        `}function fu(i,t,e){const n=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(i.substring(0,9)!=="precision"){let r=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return r==="highp"&&n!=="highp"&&(r="mediump"),`precision ${r} float;
${i}`}else if(n!=="highp"&&i.substring(0,15)==="precision highp")return i.replace("precision highp","precision mediump");return i}function du(i,t){return t?`#version 300 es
${i}`:i}const pu={},mu={};function gu(i,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const n=e?pu:mu;return n[t]?(n[t]++,t+=`-${n[t]}`):n[t]=1,i.indexOf("#define SHADER_NAME")!==-1?i:`${`#define SHADER_NAME ${t}`}
${i}`}function xu(i,t){return t?i.replace("#version 300 es",""):i}const gn={stripVersion:xu,ensurePrecision:fu,addProgramDefines:cu,setProgramName:gu,insertVersion:du},xn=Object.create(null),vo=class $n{constructor(t){t={...$n.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,n={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:hu()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let r=t.fragment,s=t.vertex;Object.keys(gn).forEach(o=>{const a=n[o];r=gn[o](r,a,!0),s=gn[o](s,a,!1)}),this.fragment=r,this.vertex=s,this._key=mr(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return xn[e]||(xn[e]=new $n(t)),xn[e]}};vo.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let G=vo;const ds={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function vu(i){return ds[i]??ds.float32}const yu={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function _u({source:i,entryPoint:t}){const e={},n=i.indexOf(`fn ${t}`);if(n!==-1){const r=i.indexOf("->",n);if(r!==-1){const s=i.substring(n,r),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=yu[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:vu(l).stride,offset:0,instance:!1,start:0}}}}return e}function vn(i){var c,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,n=/@binding\((\d+)\)/,r=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,h=(c=i.match(t))==null?void 0:c.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(n)[1],10),name:d.match(r)[2],isUniform:d.match(r)[1]==="<uniform>",type:d.match(s)[1]}));if(!h)return{groups:[],structs:[]};const u=((f=i.match(o))==null?void 0:f.map(d=>{const p=d.match(l)[1],g=d.match(a).reduce((m,v)=>{const[x,y]=v.split(":");return m[x.trim()]=y.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:d})=>h.some(p=>p.type===d)))??[];return{groups:h,structs:u}}var qe=(i=>(i[i.VERTEX=1]="VERTEX",i[i.FRAGMENT=2]="FRAGMENT",i[i.COMPUTE=4]="COMPUTE",i))(qe||{});function bu({groups:i}){const t=[];for(let e=0;e<i.length;e++){const n=i[e];t[n.group]||(t[n.group]=[]),n.isUniform?t[n.group].push({binding:n.binding,visibility:qe.VERTEX|qe.FRAGMENT,buffer:{type:"uniform"}}):n.type==="sampler"?t[n.group].push({binding:n.binding,visibility:qe.FRAGMENT,sampler:{type:"filtering"}}):n.type==="texture_2d"&&t[n.group].push({binding:n.binding,visibility:qe.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Su({groups:i}){const t=[];for(let e=0;e<i.length;e++){const n=i[e];t[n.group]||(t[n.group]={}),t[n.group][n.name]=n.binding}return t}function wu(i,t){const e=new Set,n=new Set,r=[...i.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...i.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return n.has(a)?!1:(n.add(a),!0)});return{structs:r,groups:s}}const yn=Object.create(null);class L{constructor(t){var a,l;this._layoutKey=0;const{fragment:e,vertex:n,layout:r,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=n,e.source===n.source){const h=vn(e.source);this.structsAndGroups=h}else{const h=vn(n.source),u=vn(e.source);this.structsAndGroups=wu(h,u)}this.layout=r??Su(this.structsAndGroups),this.gpuLayout=s??bu(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,n=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=mr(n,"program")}get attributeData(){return this._attributeData??(this._attributeData=_u(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return yn[e]||(yn[e]=new L(t)),yn[e]}}const yo=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],Cu=yo.reduce((i,t)=>(i[t]=!0,i),{});function Pu(i,t){switch(i){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const _o=class bo{constructor(t,e){this._touched=0,this.uid=st("uniform"),this._resourceType="uniformGroup",this._resourceId=st("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...bo.defaultOptions,...e},this.uniformStructures=t;const n={};for(const r in t){const s=t[r];if(s.name=r,s.size=s.size??1,!Cu[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${yo.join(", ")}`);s.value??(s.value=Pu(s.type,s.size)),n[r]=s.value}this.uniforms=n,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=mr(Object.keys(n).map(r=>`${r}-${t[r].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};_o.defaultOptions={ubo:!1,isStatic:!1};let So=_o;class Ti{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const n in t){const r=t[n];this.setResource(r,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const n in this.resources)t[e++]=this.resources[n]._resourceId;this._key=t.join("|")}setResource(t,e){var r,s;const n=this.resources[e];t!==n&&(n&&((r=t.off)==null||r.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const n in e)e[n]._touched=t}destroy(){var e;const t=this.resources;for(const n in t){const r=t[n];(e=r.off)==null||e.call(r,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const n in e)e[n]===t&&(e[n]=null)}else this._updateKey()}}var Ni=(i=>(i[i.WEBGL=1]="WEBGL",i[i.WEBGPU=2]="WEBGPU",i[i.BOTH=3]="BOTH",i))(Ni||{});class gr extends Ot{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:n,groups:r,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=n,o===void 0&&(o=0,e&&(o|=Ni.WEBGPU),n&&(o|=Ni.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!r&&(s={}),s&&r)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&r&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&r&&a)for(const h in a)for(const u in a[h]){const c=a[h][u];l[c]={group:h,binding:u,name:c}}else if(e&&r&&!a){const h=e.structsAndGroups.groups;a={},h.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else if(s){if(e){const h=e.structsAndGroups.groups;a={},h.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else{a={},r={99:new Ti},this._ownedBindGroups.push(r[99]);let h=0;for(const u in s)l[u]={group:99,binding:h,name:u},a[99]=a[99]||{},a[99][h]=u,h++}r={};for(const h in s){const u=h;let c=s[h];!c.source&&!c._resourceType&&(c=new So(c));const f=l[u];f&&(r[f.group]||(r[f.group]=new Ti,this._ownedBindGroups.push(r[f.group])),r[f.group].setResource(c,f.binding))}}this.groups=r,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(r,l)}addResource(t,e,n){var r,s;(r=this._uniformBindMap)[e]||(r[e]={}),(s=this._uniformBindMap[e])[n]||(s[n]=t),this.groups[e]||(this.groups[e]=new Ti,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const n={};for(const r in e){const s=e[r];Object.defineProperty(n,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return n}destroy(t=!1){var e,n;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(n=this.glProgram)==null||n.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(r=>{r.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:n,...r}=t;let s,o;return e&&(s=L.from(e)),n&&(o=G.from(n)),new gr({gpuProgram:s,glProgram:o,...r})}}const Tu={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},_n=0,bn=1,Sn=2,wn=3,Cn=4,Pn=5,Wn=class wo{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<_n)}set blend(t){!!(this.data&1<<_n)!==t&&(this.data^=1<<_n)}get offsets(){return!!(this.data&1<<bn)}set offsets(t){!!(this.data&1<<bn)!==t&&(this.data^=1<<bn)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Sn)}set culling(t){!!(this.data&1<<Sn)!==t&&(this.data^=1<<Sn)}get depthTest(){return!!(this.data&1<<wn)}set depthTest(t){!!(this.data&1<<wn)!==t&&(this.data^=1<<wn)}get depthMask(){return!!(this.data&1<<Pn)}set depthMask(t){!!(this.data&1<<Pn)!==t&&(this.data^=1<<Pn)}get clockwiseFrontFace(){return!!(this.data&1<<Cn)}set clockwiseFrontFace(t){!!(this.data&1<<Cn)!==t&&(this.data^=1<<Cn)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=Tu[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new wo;return t.depthTest=!1,t.blend=!0,t}};Wn.default2d=Wn.for2d();let Au=Wn;const Co=class Vn extends gr{constructor(t){t={...Vn.defaultOptions,...t},super(t),this.enabled=!0,this._state=Au.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,e,n,r){t.applyFilter(this,e,n,r)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:n,...r}=t;let s,o;return e&&(s=L.from(e)),n&&(o=G.from(n)),new Vn({gpuProgram:s,glProgram:o,...r})}};Co.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let $=Co;const Hn=[];yt.handleByNamedList(D.Environment,Hn);async function Mu(i){if(i)for(let t=0;t<Hn.length;t++){const e=Hn[t];if(e.value.test()){await e.value.load();return}}}let $e;function Fu(){if(typeof $e=="boolean")return $e;try{$e=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$e=!1}return $e}var xr={exports:{}};xr.exports=Wi;xr.exports.default=Wi;function Wi(i,t,e){e=e||2;var n=t&&t.length,r=n?t[0]*e:i.length,s=Po(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,h,u,c,f,d;if(n&&(s=Uu(i,t,s,e)),i.length>80*e){a=h=i[0],l=u=i[1];for(var p=e;p<r;p+=e)c=i[p],f=i[p+1],c<a&&(a=c),f<l&&(l=f),c>h&&(h=c),f>u&&(u=f);d=Math.max(h-a,u-l),d=d!==0?32767/d:0}return ti(s,o,e,a,l,d,0),o}function Po(i,t,e,n,r){var s,o;if(r===jn(i,t,e,n)>0)for(s=t;s<e;s+=n)o=ps(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=ps(s,i[s],i[s+1],o);return o&&Vi(o,o.next)&&(ii(o),o=o.next),o}function fe(i,t){if(!i)return i;t||(t=i);var e=i,n;do if(n=!1,!e.steiner&&(Vi(e,e.next)||et(e.prev,e,e.next)===0)){if(ii(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ti(i,t,e,n,r,s,o){if(i){!o&&s&&Lu(i,n,r,s);for(var a=i,l,h;i.prev!==i.next;){if(l=i.prev,h=i.next,s?zu(i,n,r,s):Iu(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),ii(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=Ou(fe(i),t,e),ti(i,t,e,n,r,s,2)):o===2&&Bu(i,t,e,n,r,s):ti(fe(i),t,e,n,r,s,1);break}}}}function Iu(i){var t=i.prev,e=i,n=i.next;if(et(t,e,n)>=0)return!1;for(var r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,h=n.y,u=r<s?r<o?r:o:s<o?s:o,c=a<l?a<h?a:h:l<h?l:h,f=r>s?r>o?r:o:s>o?s:o,d=a>l?a>h?a:h:l>h?l:h,p=n.next;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=c&&p.y<=d&&Pe(r,a,s,l,o,h,p.x,p.y)&&et(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function zu(i,t,e,n){var r=i.prev,s=i,o=i.next;if(et(r,s,o)>=0)return!1;for(var a=r.x,l=s.x,h=o.x,u=r.y,c=s.y,f=o.y,d=a<l?a<h?a:h:l<h?l:h,p=u<c?u<f?u:f:c<f?c:f,g=a>l?a>h?a:h:l>h?l:h,m=u>c?u>f?u:f:c>f?c:f,v=Xn(d,p,t,e,n),x=Xn(g,m,t,e,n),y=i.prevZ,_=i.nextZ;y&&y.z>=v&&_&&_.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Pe(a,u,l,c,h,f,y.x,y.y)&&et(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&Pe(a,u,l,c,h,f,_.x,_.y)&&et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=v;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=m&&y!==r&&y!==o&&Pe(a,u,l,c,h,f,y.x,y.y)&&et(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=m&&_!==r&&_!==o&&Pe(a,u,l,c,h,f,_.x,_.y)&&et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ou(i,t,e){var n=i;do{var r=n.prev,s=n.next.next;!Vi(r,s)&&To(r,n,n.next,s)&&ei(r,s)&&ei(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),ii(n),ii(n.next),n=i=s),n=n.next}while(n!==i);return fe(n)}function Bu(i,t,e,n,r,s){var o=i;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&$u(o,a)){var l=Ao(o,a);o=fe(o,o.next),l=fe(l,l.next),ti(o,t,e,n,r,s,0),ti(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Uu(i,t,e,n){var r=[],s,o,a,l,h;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,h=Po(i,a,l,n,!1),h===h.next&&(h.steiner=!0),r.push(Nu(h));for(r.sort(ku),s=0;s<r.length;s++)e=Eu(r[s],e);return e}function ku(i,t){return i.x-t.x}function Eu(i,t){var e=Ru(i,t);if(!e)return t;var n=Ao(e,i);return fe(n,n.next),fe(e,e.next)}function Ru(i,t){var e=t,n=i.x,r=i.y,s=-1/0,o;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){var a=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=n&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===n))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,h=o.x,u=o.y,c=1/0,f;e=o;do n>=e.x&&e.x>=h&&n!==e.x&&Pe(r<u?n:s,r,h,u,r<u?s:n,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(n-e.x),ei(e,i)&&(f<c||f===c&&(e.x>o.x||e.x===o.x&&Du(o,e)))&&(o=e,c=f)),e=e.next;while(e!==l);return o}function Du(i,t){return et(i.prev,i,t.prev)<0&&et(t.next,i,i.next)<0}function Lu(i,t,e,n){var r=i;do r.z===0&&(r.z=Xn(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Gu(r)}function Gu(i){var t,e,n,r,s,o,a,l,h=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,h*=2}while(o>1);return i}function Xn(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Nu(i){var t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pe(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function $u(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wu(i,t)&&(ei(i,t)&&ei(t,i)&&Vu(i,t)&&(et(i.prev,i,t.prev)||et(i,t.prev,t))||Vi(i,t)&&et(i.prev,i,i.next)>0&&et(t.prev,t,t.next)>0)}function et(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vi(i,t){return i.x===t.x&&i.y===t.y}function To(i,t,e,n){var r=gi(et(i,t,e)),s=gi(et(i,t,n)),o=gi(et(e,n,i)),a=gi(et(e,n,t));return!!(r!==s&&o!==a||r===0&&mi(i,e,t)||s===0&&mi(i,n,t)||o===0&&mi(e,i,n)||a===0&&mi(e,t,n))}function mi(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function gi(i){return i>0?1:i<0?-1:0}function Wu(i,t){var e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&To(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ei(i,t){return et(i.prev,i,i.next)<0?et(i,t,i.next)>=0&&et(i,i.prev,t)>=0:et(i,t,i.prev)<0||et(i,i.next,t)<0}function Vu(i,t){var e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ao(i,t){var e=new Yn(i.i,i.x,i.y),n=new Yn(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ps(i,t,e,n){var r=new Yn(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ii(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Yn(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Wi.deviation=function(i,t,e,n){var r=t&&t.length,s=r?t[0]*e:i.length,o=Math.abs(jn(i,0,s,e));if(r)for(var a=0,l=t.length;a<l;a++){var h=t[a]*e,u=a<l-1?t[a+1]*e:i.length;o-=Math.abs(jn(i,h,u,e))}var c=0;for(a=0;a<n.length;a+=3){var f=n[a]*e,d=n[a+1]*e,p=n[a+2]*e;c+=Math.abs((i[f]-i[p])*(i[d+1]-i[f+1])-(i[f]-i[d])*(i[p+1]-i[f+1]))}return o===0&&c===0?0:Math.abs((c-o)/o)};function jn(i,t,e,n){for(var r=0,s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}Wi.flatten=function(i){for(var t=i[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,r=0;r<i.length;r++){for(var s=0;s<i[r].length;s++)for(var o=0;o<t;o++)e.vertices.push(i[r][s][o]);r>0&&(n+=i[r-1].length,e.holes.push(n))}return e};var Hu=xr.exports;const Xu=fr(Hu);var Mo=(i=>(i[i.NONE=0]="NONE",i[i.COLOR=16384]="COLOR",i[i.STENCIL=1024]="STENCIL",i[i.DEPTH=256]="DEPTH",i[i.COLOR_DEPTH=16640]="COLOR_DEPTH",i[i.COLOR_STENCIL=17408]="COLOR_STENCIL",i[i.DEPTH_STENCIL=1280]="DEPTH_STENCIL",i[i.ALL=17664]="ALL",i))(Mo||{});class Yu{constructor(t){this.items=[],this._name=t}emit(t,e,n,r,s,o,a,l){const{name:h,items:u}=this;for(let c=0,f=u.length;c<f;c++)u[c][h](t,e,n,r,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const ju=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Fo=class Io extends Ot{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name;const e=[...ju,...t.runners??[]];this._addRunners(...e),this._addSystems(t.systems),this._addPipes(t.renderPipes,t.renderPipeAdaptors),this._unsafeEvalCheck()}async init(t={}){for(const e in this._systemsHash)t={...this._systemsHash[e].constructor.defaultOptions,...t};t={...Io.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let e=0;e<this.runners.init.items.length;e++)await this.runners.init.items[e].init(t);this._initOptions=t}render(t,e){let n=t;if(n instanceof N&&(n={container:n},e&&(U(Q,"passing a second argument is deprecated, please use render options instead"),n.target=e.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor=this.background.colorRgba),n.clearColor){const r=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=r?n.clearColor:j.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(t,e,n){this.view.resize(t,e,n),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Mo.ALL);const{clear:n,clearColor:r,target:s}=t;j.shared.setValue(r??this.background.colorRgba),e.renderTarget.clear(s,n,j.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new Yu(e)})}_addSystems(t){let e;for(e in t){const n=t[e];this._addSystem(n.value,n.name)}}_addSystem(t,e){const n=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=n,this._systemsHash[e]=n;for(const r in this.runners)this.runners[r].add(n);return this}_addPipes(t,e){const n=e.reduce((r,s)=>(r[s.name]=s.value,r),{});t.forEach(r=>{const s=r.value,o=r.name,a=n[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Fu())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Fo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let zo=Fo,xi;function qu(i){return xi!==void 0||(xi=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:i??zo.defaultOptions.failIfMajorPerformanceCaveat};try{if(!lt.get().getWebGLRenderingContext())return!1;let r=lt.get().createCanvas().getContext("webgl",t);const s=!!((e=r==null?void 0:r.getContextAttributes())!=null&&e.stencil);if(r){const o=r.getExtension("WEBGL_lose_context");o&&o.loseContext()}return r=null,s}catch{return!1}})()),xi}let vi;async function Ku(i={}){return vi!==void 0||(vi=await(async()=>{if(!lt.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(i)).requestDevice(),!0}catch{return!1}})()),vi}const ms=["webgl","webgpu","canvas"];async function Zu(i){let t=[];i.preference?(t.push(i.preference),ms.forEach(s=>{s!==i.preference&&t.push(s)})):t=ms.slice();let e;await Mu(i.manageImports??!0);let n={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await Ku()){const{WebGPURenderer:a}=await Ri(()=>import("./WebGPURenderer-D-Df_Zf4.js"),__vite__mapDeps([5,2,6,3]));e=a,n={...i,...i.webgpu};break}else if(o==="webgl"&&qu(i.failIfMajorPerformanceCaveat??zo.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Ri(()=>import("./WebGLRenderer-Ctzi2R4W.js"),__vite__mapDeps([7,2,4,6]));e=a,n={...i,...i.webgl};break}else if(o==="canvas")throw n={...i},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!e)throw new Error("No available renderer for the current environment");const r=new e;return await r.init(n),r}const Oo=class qn{constructor(...t){this.stage=new N,t[0]!==void 0&&U(Q,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Zu(t),qn._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return U(Q,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const n=qn._plugins.slice(0);n.reverse(),n.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Oo._plugins=[];let Bo=Oo;yt.handleByList(D.Application,Bo._plugins);class Qu{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<e;n++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const Ju={extension:D.CacheParser,test:i=>Array.isArray(i)&&i.every(t=>t instanceof B),getCacheableAssets:(i,t)=>{const e={};return i.forEach(n=>{t.forEach((r,s)=>{e[n+(s===0?"":s+1)]=r})}),e}};async function Uo(i){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=i});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(i)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const th={extension:{type:D.DetectionParser,priority:1},test:async()=>Uo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async i=>[...i,"avif"],remove:async i=>i.filter(t=>t!=="avif")},gs=["png","jpg","jpeg"],eh={extension:{type:D.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async i=>[...i,...gs],remove:async i=>i.filter(t=>!gs.includes(t))},ih="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function vr(i){return ih?!1:document.createElement("video").canPlayType(i)!==""}const nh={extension:{type:D.DetectionParser,priority:0},test:async()=>vr("video/mp4"),add:async i=>[...i,"mp4","m4v"],remove:async i=>i.filter(t=>t!=="mp4"&&t!=="m4v")},rh={extension:{type:D.DetectionParser,priority:0},test:async()=>vr("video/ogg"),add:async i=>[...i,"ogv"],remove:async i=>i.filter(t=>t!=="ogv")},sh={extension:{type:D.DetectionParser,priority:0},test:async()=>vr("video/webm"),add:async i=>[...i,"webm"],remove:async i=>i.filter(t=>t!=="webm")},oh={extension:{type:D.DetectionParser,priority:0},test:async()=>Uo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async i=>[...i,"webp"],remove:async i=>i.filter(t=>t!=="webp")};let ah=class{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,n)=>(this._parsersValidated=!1,t[e]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const n={promise:null,parser:null};return n.promise=(async()=>{var o,a;let r=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||ht(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];if(h.load&&((o=h.test)!=null&&o.call(h,t,e,this))){s=h;break}}if(!s)return ht(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await s.load(t,e,this),n.parser=s;for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];h.parse&&h.parse&&await((a=h.testParse)==null?void 0:a.call(h,r,e,this))&&(r=await h.parse(r,e,this)||r,n.parser=h)}return r})(),n}async load(t,e){this._parsersValidated||this._validateParsers();let n=0;const r={},s=Gi(t),o=wt(t,h=>({alias:[h],src:h})),a=o.length,l=o.map(async h=>{const u=zt.toAbsolute(h.src);if(!r[h.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,h)),r[h.src]=await this.promiseCache[u].promise,e&&e(++n/a)}catch(c){throw delete this.promiseCache[u],delete r[h.src],new Error(`[Loader.load] Failed to load ${u}.
${c}`)}});return await Promise.all(l),s?r[o[0].src]:r}async unload(t){const n=wt(t,r=>({alias:[r],src:r})).map(async r=>{var a,l;const s=zt.toAbsolute(r.src),o=this.promiseCache[s];if(o){const h=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,h,r,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&ht(`[Assets] loadParser name conflict "${e.name}"`):ht("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}};function ke(i,t){if(Array.isArray(t)){for(const e of t)if(i.startsWith(`data:${e}`))return!0;return!1}return i.startsWith(`data:${t}`)}function Ee(i,t){const e=i.split("?")[0],n=zt.extname(e).toLowerCase();return Array.isArray(t)?t.includes(n):n===t}const lh=".json",uh="application/json",hh={extension:{type:D.LoadParser,priority:de.Low},name:"loadJson",test(i){return ke(i,uh)||Ee(i,lh)},async load(i){return await(await lt.get().fetch(i)).json()}},ch=".txt",fh="text/plain",dh={name:"loadTxt",extension:{type:D.LoadParser,priority:de.Low},test(i){return ke(i,fh)||Ee(i,ch)},async load(i){return await(await lt.get().fetch(i)).text()}},ph=["normal","bold","100","200","300","400","500","600","700","800","900"],mh=[".ttf",".otf",".woff",".woff2"],gh=["font/ttf","font/otf","font/woff","font/woff2"],xh=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function vh(i){const t=zt.extname(i),r=zt.basename(i,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=r.length>0;for(const a of r)if(!a.match(xh)){s=!1;break}let o=r.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const yh=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function _h(i){return yh.test(i)?i:encodeURI(i)}const bh={extension:{type:D.LoadParser,priority:de.Low},name:"loadWebFont",test(i){return ke(i,gh)||Ee(i,mh)},async load(i,t){var n,r,s;const e=lt.get().getFontFaceSet();if(e){const o=[],a=((n=t.data)==null?void 0:n.family)??vh(i),l=((s=(r=t.data)==null?void 0:r.weights)==null?void 0:s.filter(u=>ph.includes(u)))??["normal"],h=t.data??{};for(let u=0;u<l.length;u++){const c=l[u],f=new FontFace(a,`url(${_h(i)})`,{...h,weight:c});await f.load(),e.add(f),o.push(f)}return ct.set(`${a}-and-url`,{url:i,fontFaces:o}),o.length===1?o[0]:o}return ht("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(i){(Array.isArray(i)?i:[i]).forEach(t=>{ct.remove(t.family),lt.get().getFontFaceSet().delete(t)})}};var Sh=Ch,Tn={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},wh=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Ch(i){var t=[];return i.replace(wh,function(e,n,r){var s=n.toLowerCase();for(r=Th(r),s=="m"&&r.length>2&&(t.push([n].concat(r.splice(0,2))),s="l",n=n=="m"?"l":"L");;){if(r.length==Tn[s])return r.unshift(n),t.push(r);if(r.length<Tn[s])throw new Error("malformed path data");t.push([n].concat(r.splice(0,Tn[s])))}}),t}var Ph=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Th(i){var t=i.match(Ph);return t?t.map(Number):[]}const Ah=fr(Sh);function Mh(i,t){const e=Ah(i),n=[];let r=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],h=l[0],u=l;switch(h){case"M":s=u[1],o=u[2],t.moveTo(s,o);break;case"m":s+=u[1],o+=u[2],t.moveTo(s,o);break;case"H":s=u[1],t.lineTo(s,o);break;case"h":s+=u[1],t.lineTo(s,o);break;case"V":o=u[1],t.lineTo(s,o);break;case"v":o+=u[1],t.lineTo(s,o);break;case"L":s=u[1],o=u[2],t.lineTo(s,o);break;case"l":s+=u[1],o+=u[2],t.lineTo(s,o);break;case"C":s=u[5],o=u[6],t.bezierCurveTo(u[1],u[2],u[3],u[4],s,o);break;case"c":t.bezierCurveTo(s+u[1],o+u[2],s+u[3],o+u[4],s+u[5],o+u[6]),s+=u[5],o+=u[6];break;case"S":s=u[3],o=u[4],t.bezierCurveToShort(u[1],u[2],s,o);break;case"s":t.bezierCurveToShort(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"Q":s=u[3],o=u[4],t.quadraticCurveTo(u[1],u[2],s,o);break;case"q":t.quadraticCurveTo(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"T":s=u[1],o=u[2],t.quadraticCurveToShort(s,o);break;case"t":s+=u[1],o+=u[2],t.quadraticCurveToShort(s,o);break;case"A":s=u[6],o=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"a":s+=u[6],o+=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"Z":case"z":t.closePath(),n.length>0&&(r=n.pop(),r?(s=r.startX,o=r.startY):(s=0,o=0)),r=null;break;default:ht(`Unknown SVG path command: ${h}`)}h!=="Z"&&h!=="z"&&r===null&&(r={startX:s,startY:o},n.push(r))}return t}class yr{constructor(t=0,e=0,n=0){this.type="circle",this.x=t,this.y=e,this.radius=n}clone(){return new yr(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const n=this.radius*this.radius;let r=this.x-t,s=this.y-e;return r*=r,s*=s,r+s<=n}strokeContains(t,e,n){if(this.radius===0)return!1;const r=this.x-t,s=this.y-e,o=this.radius,a=n/2,l=Math.sqrt(r*r+s*s);return l<o+a&&l>o-a}getBounds(t){return t=t||new rt,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class _r{constructor(t=0,e=0,n=0,r=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=n,this.halfHeight=r}clone(){return new _r(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let n=(t-this.x)/this.halfWidth,r=(e-this.y)/this.halfHeight;return n*=n,r*=r,n+r<=1}strokeContains(t,e,n){const{halfWidth:r,halfHeight:s}=this;if(r<=0||s<=0)return!1;const o=n/2,a=r-o,l=s-o,h=r+o,u=s+o,c=t-this.x,f=e-this.y,d=c*c/(a*a)+f*f/(l*l),p=c*c/(h*h)+f*f/(u*u);return d>1&&p<=1}getBounds(){return new rt(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Fh(i,t,e,n,r,s){const o=i-e,a=t-n,l=r-e,h=s-n,u=o*l+a*h,c=l*l+h*h;let f=-1;c!==0&&(f=u/c);let d,p;f<0?(d=e,p=n):f>1?(d=r,p=s):(d=e+f*l,p=n+f*h);const g=i-d,m=t-p;return g*g+m*m}class Ze{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const n=[];for(let r=0,s=e.length;r<s;r++)n.push(e[r].x,e[r].y);e=n}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new Ze(t);return e.closePath=this.closePath,e}contains(t,e){let n=!1;const r=this.points.length/2;for(let s=0,o=r-1;s<r;o=s++){const a=this.points[s*2],l=this.points[s*2+1],h=this.points[o*2],u=this.points[o*2+1];l>e!=u>e&&t<(h-a)*((e-l)/(u-l))+a&&(n=!n)}return n}strokeContains(t,e,n){const r=n/2,s=r*r,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const h=o[l],u=o[l+1],c=o[(l+2)%o.length],f=o[(l+3)%o.length];if(Fh(t,e,h,u,c,f)<=s)return!0}return!1}getBounds(t){t=t||new rt;const e=this.points;let n=1/0,r=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const h=e[a],u=e[a+1];n=h<n?h:n,r=h>r?h:r,s=u<s?u:s,o=u>o?u:o}return t.x=n,t.width=r-n,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const yi=(i,t,e,n,r,s)=>{const o=i-e,a=t-n,l=Math.sqrt(o*o+a*a);return l>=r-s&&l<=r+s};class br{constructor(t=0,e=0,n=0,r=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=n,this.height=r,this.radius=s}getBounds(t){return t=t||new rt,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new br(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+n&&e<=this.y+this.height-n||t>=this.x+n&&t<=this.x+this.width-n)return!0;let r=t-(this.x+n),s=e-(this.y+n);const o=n*n;if(r*r+s*s<=o||(r=t-(this.x+this.width-n),r*r+s*s<=o)||(s=e-(this.y+this.height-n),r*r+s*s<=o)||(r=t-(this.x+n),r*r+s*s<=o))return!0}return!1}strokeContains(t,e,n){const{x:r,y:s,width:o,height:a,radius:l}=this,h=n/2,u=r+l,c=s+l,f=o-l*2,d=a-l*2,p=r+o,g=s+a;return(t>=r-h&&t<=r+h||t>=p-h&&t<=p+h)&&e>=c&&e<=c+d||(e>=s-h&&e<=s+h||e>=g-h&&e<=g+h)&&t>=u&&t<=u+f?!0:t<u&&e<c&&yi(t,e,u,c,l,h)||t>p-l&&e<c&&yi(t,e,p-l,c,l,h)||t>p-l&&e>g-l&&yi(t,e,p-l,g-l,l,h)||t<u&&e>g-l&&yi(t,e,u,g-l,l,h)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var nt=(i=>(i[i.MAP_READ=1]="MAP_READ",i[i.MAP_WRITE=2]="MAP_WRITE",i[i.COPY_SRC=4]="COPY_SRC",i[i.COPY_DST=8]="COPY_DST",i[i.INDEX=16]="INDEX",i[i.VERTEX=32]="VERTEX",i[i.UNIFORM=64]="UNIFORM",i[i.STORAGE=128]="STORAGE",i[i.INDIRECT=256]="INDIRECT",i[i.QUERY_RESOLVE=512]="QUERY_RESOLVE",i[i.STATIC=1024]="STATIC",i))(nt||{});class qt extends Ot{constructor(t){let{data:e,size:n}=t;const{usage:r,label:s,shrinkToFit:o}=t;super(),this.uid=st("buffer"),this._resourceType="buffer",this._resourceId=st("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,n=n??(e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:n,usage:r,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&nt.STATIC)}set static(t){t?this.descriptor.usage|=nt.STATIC:this.descriptor.usage&=~nt.STATIC}setDataWithSize(t,e,n){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){n&&this.emit("update",this);return}const r=this._data;if(this._data=t,r.length!==t.length){!this.shrinkToFit&&t.byteLength<r.byteLength?n&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=st("resource"),this.emit("change",this));return}n&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function ko(i,t){if(!(i instanceof qt)){let e=t?nt.INDEX:nt.VERTEX;i instanceof Array&&(t?(i=new Uint32Array(i),e=nt.INDEX|nt.COPY_DST):(i=new Float32Array(i),e=nt.VERTEX|nt.COPY_DST)),i=new qt({data:i,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return i}function Ih(i,t,e){const n=i.getAttribute(t);if(!n)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const r=n.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const h=r.BYTES_PER_ELEMENT,u=(n.offset||0)/h,c=(n.stride||2*4)/h;for(let f=u;f<r.length;f+=c){const d=r[f],p=r[f+1];d>a&&(a=d),p>l&&(l=p),d<s&&(s=d),p<o&&(o=p)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function zh(i){return(i instanceof qt||Array.isArray(i)||i.BYTES_PER_ELEMENT)&&(i={buffer:i}),i.buffer=ko(i.buffer,!1),i}class Eo extends Ot{constructor(t){const{attributes:e,indexBuffer:n,topology:r}=t;super(),this.uid=st("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new It,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const s in e){const o=e[s]=zh(e[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}n&&(this.indexBuffer=ko(n,!0),this.buffers.push(this.indexBuffer)),this.topology=r||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Ih(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Oh=new Float32Array(1),Bh=new Uint32Array(1);class Uh extends Eo{constructor(){const e=new qt({data:Oh,label:"attribute-batch-buffer",usage:nt.VERTEX|nt.COPY_DST,shrinkToFit:!1}),n=new qt({data:Bh,label:"index-batch-buffer",usage:nt.INDEX|nt.COPY_DST,shrinkToFit:!1}),r=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:r,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:r,offset:2*4,location:3},aColor:{buffer:e,format:"unorm8x4",stride:r,offset:4*4,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:r,offset:5*4,location:2}},indexBuffer:n})}}let _i=null;function Ro(){if(_i)return _i;const i=xo();return _i=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_i}const Do={};function kh(i,t){let e=0;for(let n=0;n<t;n++)e=e*31+i[n].uid>>>0;return Do[e]||Eh(i,e)}let An=0;function Eh(i,t){const e={};let n=0;An||(An=Ro());for(let s=0;s<An;s++){const o=s<i.length?i[s]:B.EMPTY.source;e[n++]=o.source,e[n++]=o.style}const r=new Ti(e);return Do[t]=r,r}class xs{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function vs(i,t){const e=i.byteLength/8|0,n=new Float64Array(i,0,e);new Float64Array(t,0,e).set(n);const s=i.byteLength-e*8;if(s>0){const o=new Uint8Array(i,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const Rh={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Dh=(i=>(i[i.DISABLED=0]="DISABLED",i[i.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",i[i.MASK_ACTIVE=2]="MASK_ACTIVE",i[i.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",i[i.NONE=4]="NONE",i))(Dh||{});function ys(i,t){return t.alphaMode==="no-premultiply-alpha"&&Rh[i]||i}class _s{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class bs{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let We=0;const Lo=class Go{constructor(t={}){this.uid=st("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={...Go.defaultOptions,...t};const{vertexSize:e,indexSize:n}=t;this.attributeBuffer=new xs(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(n),this._maxTextures=Ro()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,e){const n=t.batch.textures.ids[e._source.uid];return!n&&n!==0?!1:(t.textureId=n,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const e=this._elements;let n=this._textureBatchPool[this._textureBatchPoolIndex++]||new _s;if(n.clear(),!e[this.elementStart])return;const r=e[this.elementStart];let s=ys(r.blendMode,r.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let h=this._batchIndexSize,u=this._batchIndexStart,c="startBatch",f=this._batchPool[this._batchPoolIndex++]||new bs;const d=this._maxTextures;for(let p=this.elementStart;p<this.elementSize;++p){const g=e[p];e[p]=null;const v=g.texture._source,x=ys(g.blendMode,v),y=s!==x;if(v._batchTick===We&&!y){g.textureId=v._textureBindLocation,h+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize),g.batch=f;continue}v._batchTick=We,(n.count>=d||y)&&(this._finishBatch(f,u,h-u,n,s,t,c),c="renderBatch",u=h,s=x,n=this._textureBatchPool[this._textureBatchPoolIndex++]||new _s,n.clear(),f=this._batchPool[this._batchPoolIndex++]||new bs,++We),g.textureId=v._textureBindLocation=n.count,n.ids[v.uid]=n.count,n.textures[n.count++]=v,g.batch=f,h+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize)}n.count>0&&(this._finishBatch(f,u,h-u,n,s,t,c),u=h,++We),this.elementStart=this.elementSize,this._batchIndexStart=u,this._batchIndexSize=h}_finishBatch(t,e,n,r,s,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=r,t.blendMode=s,t.start=e,t.size=n,++We,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),n=new xs(e);vs(this.attributeBuffer.rawBinaryData,n.rawBinaryData),this.attributeBuffer=n}_resizeIndexBuffer(t){const e=this.indexBuffer;let n=Math.max(t,e.length*1.5);n+=n%2;const r=n>65535?new Uint32Array(n):new Uint16Array(n);if(r.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)r[s]=e[s];else vs(e.buffer,r.buffer);this.indexBuffer=r}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Lo.defaultOptions={vertexSize:4,indexSize:6};let Lh=Lo;function Gh(i,t,e,n,r,s,o,a=null){let l=0;e*=t,r*=s;const h=a.a,u=a.b,c=a.c,f=a.d,d=a.tx,p=a.ty;for(;l<o;){const g=i[e],m=i[e+1];n[r]=h*g+c*m+d,n[r+1]=u*g+f*m+p,r+=s,e+=t,l++}}function Nh(i,t,e,n){let r=0;for(t*=e;r<n;)i[t]=0,i[t+1]=0,t+=e,r++}function No(i,t,e,n,r){const s=t.a,o=t.b,a=t.c,l=t.d,h=t.tx,u=t.ty;e=e||0,n=n||2,r=r||i.length/n-e;let c=e*n;for(let f=0;f<r;f++){const d=i[c],p=i[c+1];i[c]=s*d+a*p+h,i[c+1]=o*d+l*p+u,c+=n}}function $h(i,t){if(i===16777215||!t)return t;if(t===16777215||!i)return i;const e=i>>16&255,n=i>>8&255,r=i&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255,h=n*o/255,u=r*a/255;return(l<<16)+(h<<8)+u}class $o{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,e,n){const r=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)t[e++]=r[s+this.indexOffset]+n-this.vertexOffset}packAttributes(t,e,n,r){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,h=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,c=this.color,f=c>>16|c&65280|(c&255)<<16;if(this.applyTransform){const d=$h(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),p=o.groupTransform,g=r<<16|this.roundPixels&65535,m=p.a,v=p.b,x=p.c,y=p.d,_=p.tx,F=p.ty;for(let R=h;R<u;R+=2){const A=a[R],z=a[R+1];t[n]=m*A+x*z+_,t[n+1]=v*A+y*z+F,t[n+2]=l[R],t[n+3]=l[R+1],e[n+4]=d,e[n+5]=g,n+=6}}else{const d=f+(this.alpha*255<<24);for(let p=h;p<u;p+=2)t[n]=a[p],t[n+1]=a[p+1],t[n+2]=l[p],t[n+3]=l[p+1],e[n+4]=d,e[n+5]=r<<16,n+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const Mn={build(i,t){let e,n,r,s,o,a;if(i.type==="circle"){const _=i;e=_.x,n=_.y,o=a=_.radius,r=s=0}else if(i.type==="ellipse"){const _=i;e=_.x,n=_.y,o=_.halfWidth,a=_.halfHeight,r=s=0}else{const _=i,F=_.width/2,R=_.height/2;e=_.x+F,n=_.y+R,o=a=Math.max(0,Math.min(_.radius,Math.min(F,R))),r=F-o,s=R-a}if(!(o>=0&&a>=0&&r>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),h=l*8+(r?4:0)+(s?4:0);if(h===0)return t;if(l===0)return t[0]=t[6]=e+r,t[1]=t[3]=n+s,t[2]=t[4]=e-r,t[5]=t[7]=n-s,t;let u=0,c=l*4+(r?2:0)+2,f=c,d=h,p=r+o,g=s,m=e+p,v=e-p,x=n+g;if(t[u++]=m,t[u++]=x,t[--c]=x,t[--c]=v,s){const _=n-g;t[f++]=v,t[f++]=_,t[--d]=_,t[--d]=m}for(let _=1;_<l;_++){const F=Math.PI/2*(_/l),R=r+Math.cos(F)*o,A=s+Math.sin(F)*a,z=e+R,b=e-R,S=n+A,q=n-A;t[u++]=z,t[u++]=S,t[--c]=S,t[--c]=b,t[f++]=b,t[f++]=q,t[--d]=q,t[--d]=z}p=r,g=s+a,m=e+p,v=e-p,x=n+g;const y=n-g;return t[u++]=m,t[u++]=x,t[--d]=y,t[--d]=m,r&&(t[u++]=v,t[u++]=x,t[--d]=y,t[--d]=v),t},triangulate(i,t,e,n,r,s){if(i.length===0)return;let o=0,a=0;for(let u=0;u<i.length;u+=2)o+=i[u],a+=i[u+1];o/=i.length/2,a/=i.length/2;let l=n;t[l*e]=o,t[l*e+1]=a;const h=l++;for(let u=0;u<i.length;u+=2)t[l*e]=i[u],t[l*e+1]=i[u+1],u>0&&(r[s++]=l,r[s++]=h,r[s++]=l-1),l++;r[s++]=h+1,r[s++]=h,r[s++]=l-1}},Wh=1e-4,Ss=1e-4;function Vh(i){const t=i.length;if(t<6)return 1;let e=0;for(let n=0,r=i[t-2],s=i[t-1];n<t;n+=2){const o=i[n],a=i[n+1];e+=(o-r)*(a+s),r=o,s=a}return e<0?-1:1}function ws(i,t,e,n,r,s,o,a){const l=i-e*r,h=t-n*r,u=i+e*s,c=t+n*s;let f,d;o?(f=n,d=-e):(f=-n,d=e);const p=l+f,g=h+d,m=u+f,v=c+d;return a.push(p,g),a.push(m,v),2}function ie(i,t,e,n,r,s,o,a){const l=e-i,h=n-t;let u=Math.atan2(l,h),c=Math.atan2(r-i,s-t);a&&u<c?u+=Math.PI*2:!a&&u>c&&(c+=Math.PI*2);let f=u;const d=c-u,p=Math.abs(d),g=Math.sqrt(l*l+h*h),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,v=d/m;if(f+=v,a){o.push(i,t),o.push(e,n);for(let x=1,y=f;x<m;x++,y+=v)o.push(i,t),o.push(i+Math.sin(y)*g,t+Math.cos(y)*g);o.push(i,t),o.push(r,s)}else{o.push(e,n),o.push(i,t);for(let x=1,y=f;x<m;x++,y+=v)o.push(i+Math.sin(y)*g,t+Math.cos(y)*g),o.push(i,t);o.push(r,s),o.push(i,t)}return m*2}function Hh(i,t,e,n,r,s,o,a,l){const h=Wh;if(i.length===0)return;const u=t;let c=u.alignment;if(t.alignment!==.5){let K=Vh(i);c=(c-.5)*K+.5}const f=new ut(i[0],i[1]),d=new ut(i[i.length-2],i[i.length-1]),p=n,g=Math.abs(f.x-d.x)<h&&Math.abs(f.y-d.y)<h;if(p){i=i.slice(),g&&(i.pop(),i.pop(),d.set(i[i.length-2],i[i.length-1]));const K=(f.x+d.x)*.5,Nt=(d.y+f.y)*.5;i.unshift(K,Nt),i.push(K,Nt)}const m=r,v=i.length/2;let x=i.length;const y=m.length/2,_=u.width/2,F=_*_,R=u.miterLimit*u.miterLimit;let A=i[0],z=i[1],b=i[2],S=i[3],q=0,_t=0,E=-(z-S),I=A-b,W=0,J=0,T=Math.sqrt(E*E+I*I);E/=T,I/=T,E*=_,I*=_;const V=c,P=(1-V)*2,k=V*2;p||(u.cap==="round"?x+=ie(A-E*(P-k)*.5,z-I*(P-k)*.5,A-E*P,z-I*P,A+E*k,z+I*k,m,!0)+2:u.cap==="square"&&(x+=ws(A,z,E,I,P,k,!0,m))),m.push(A-E*P,z-I*P),m.push(A+E*k,z+I*k);for(let K=1;K<v-1;++K){A=i[(K-1)*2],z=i[(K-1)*2+1],b=i[K*2],S=i[K*2+1],q=i[(K+1)*2],_t=i[(K+1)*2+1],E=-(z-S),I=A-b,T=Math.sqrt(E*E+I*I),E/=T,I/=T,E*=_,I*=_,W=-(S-_t),J=b-q,T=Math.sqrt(W*W+J*J),W/=T,J/=T,W*=_,J*=_;const Nt=b-A,Re=z-S,De=b-q,Le=_t-S,Ir=Nt*De+Re*Le,oi=Re*De-Le*Nt,Ge=oi<0;if(Math.abs(oi)<.001*Math.abs(Ir)){m.push(b-E*P,S-I*P),m.push(b+E*k,S+I*k),Ir>=0&&(u.join==="round"?x+=ie(b,S,b-E*P,S-I*P,b-W*P,S-J*P,m,!1)+4:x+=2,m.push(b-W*k,S-J*k),m.push(b+W*P,S+J*P));continue}const zr=(-E+A)*(-I+S)-(-E+b)*(-I+z),Or=(-W+q)*(-J+S)-(-W+b)*(-J+_t),ai=(Nt*Or-De*zr)/oi,li=(Le*zr-Re*Or)/oi,Ji=(ai-b)*(ai-b)+(li-S)*(li-S),Qt=b+(ai-b)*P,Jt=S+(li-S)*P,te=b-(ai-b)*k,ee=S-(li-S)*k,ol=Math.min(Nt*Nt+Re*Re,De*De+Le*Le),Br=Ge?P:k,al=ol+Br*Br*F;Ji<=al?u.join==="bevel"||Ji/F>R?(Ge?(m.push(Qt,Jt),m.push(b+E*k,S+I*k),m.push(Qt,Jt),m.push(b+W*k,S+J*k)):(m.push(b-E*P,S-I*P),m.push(te,ee),m.push(b-W*P,S-J*P),m.push(te,ee)),x+=2):u.join==="round"?Ge?(m.push(Qt,Jt),m.push(b+E*k,S+I*k),x+=ie(b,S,b+E*k,S+I*k,b+W*k,S+J*k,m,!0)+4,m.push(Qt,Jt),m.push(b+W*k,S+J*k)):(m.push(b-E*P,S-I*P),m.push(te,ee),x+=ie(b,S,b-E*P,S-I*P,b-W*P,S-J*P,m,!1)+4,m.push(b-W*P,S-J*P),m.push(te,ee)):(m.push(Qt,Jt),m.push(te,ee)):(m.push(b-E*P,S-I*P),m.push(b+E*k,S+I*k),u.join==="round"?Ge?x+=ie(b,S,b+E*k,S+I*k,b+W*k,S+J*k,m,!0)+2:x+=ie(b,S,b-E*P,S-I*P,b-W*P,S-J*P,m,!1)+2:u.join==="miter"&&Ji/F<=R&&(Ge?(m.push(te,ee),m.push(te,ee)):(m.push(Qt,Jt),m.push(Qt,Jt)),x+=2),m.push(b-W*P,S-J*P),m.push(b+W*k,S+J*k),x+=2)}A=i[(v-2)*2],z=i[(v-2)*2+1],b=i[(v-1)*2],S=i[(v-1)*2+1],E=-(z-S),I=A-b,T=Math.sqrt(E*E+I*I),E/=T,I/=T,E*=_,I*=_,m.push(b-E*P,S-I*P),m.push(b+E*k,S+I*k),p||(u.cap==="round"?x+=ie(b-E*(P-k)*.5,S-I*(P-k)*.5,b-E*P,S-I*P,b+E*k,S+I*k,m,!1)+2:u.cap==="square"&&(x+=ws(b,S,E,I,P,k,!1,m)));const si=Ss*Ss;for(let K=y;K<x+y-2;++K)A=m[K*2],z=m[K*2+1],b=m[(K+1)*2],S=m[(K+1)*2+1],q=m[(K+2)*2],_t=m[(K+2)*2+1],!(Math.abs(A*(S-_t)+b*(_t-z)+q*(z-S))<si)&&a.push(K,K+1,K+2)}function Wo(i,t,e,n,r,s,o){const a=Xu(i,t,2);if(!a)return;for(let h=0;h<a.length;h+=3)s[o++]=a[h]+r,s[o++]=a[h+1]+r,s[o++]=a[h+2]+r;let l=r*n;for(let h=0;h<i.length;h+=2)e[l]=i[h],e[l+1]=i[h+1],l+=n}const Xh=[],Yh={build(i,t){for(let e=0;e<i.points.length;e++)t[e]=i.points[e];return t},triangulate(i,t,e,n,r,s){Wo(i,Xh,t,e,n,r,s)}},jh={build(i,t){const e=i,n=e.x,r=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=n,t[1]=r,t[2]=n+s,t[3]=r,t[4]=n+s,t[5]=r+o,t[6]=n,t[7]=r+o),t},triangulate(i,t,e,n,r,s){let o=0;n*=e,t[n+o]=i[0],t[n+o+1]=i[1],o+=e,t[n+o]=i[2],t[n+o+1]=i[3],o+=e,t[n+o]=i[6],t[n+o+1]=i[7],o+=e,t[n+o]=i[4],t[n+o+1]=i[5],o+=e;const a=n/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2,r[s++]=a+1,r[s++]=a+3,r[s++]=a+2}},qh={build(i,t){return t[0]=i.x,t[1]=i.y,t[2]=i.x2,t[3]=i.y2,t[4]=i.x3,t[5]=i.y3,t},triangulate(i,t,e,n,r,s){let o=0;n*=e,t[n+o]=i[0],t[n+o+1]=i[1],o+=e,t[n+o]=i[2],t[n+o+1]=i[3],o+=e,t[n+o]=i[4],t[n+o+1]=i[5];const a=n/e;r[s++]=a,r[s++]=a+1,r[s++]=a+2}},Sr={rectangle:jh,polygon:Yh,triangle:qh,circle:Mn,ellipse:Mn,roundedRectangle:Mn},Kh=new rt;function Zh(i,t){const{geometryData:e,batches:n}=t;n.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let r=0;r<i.instructions.length;r++){const s=i.instructions[r];if(s.action==="texture")Qh(s.data,n,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,h=s.data.hole;o&&h&&Cs(h.shapePath,l,null,!0,n,e),Cs(a,l,h,o,n,e)}}}function Qh(i,t,e){const{vertices:n,uvs:r,indices:s}=e,o=s.length,a=n.length/2,l=[],h=Sr.rectangle,u=Kh,c=i.image;u.x=i.dx,u.y=i.dy,u.width=i.dw,u.height=i.dh;const f=i.transform;h.build(u,l),f&&No(l,f),h.triangulate(l,n,2,a,s,o);const d=c.uvs;r.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const p=Rt.get($o);p.indexOffset=o,p.indexSize=s.length-o,p.vertexOffset=a,p.vertexSize=n.length/2-a,p.color=i.style,p.alpha=i.alpha,p.texture=c,p.geometryData=e,t.push(p)}function Cs(i,t,e,n,r,s){const{vertices:o,uvs:a,indices:l}=s,h=i.shapePrimitives.length-1;i.shapePrimitives.forEach(({shape:u,transform:c},f)=>{const d=l.length,p=o.length/2,g=[],m=Sr[u.type];if(m.build(u,g),c&&No(g,c),n){const _=u.closePath??!0;Hh(g,t,!1,_,o,2,p,l)}else if(e&&h===f){h!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],F=g.slice();Jh(e.shapePath).forEach(A=>{_.push(F.length/2),F.push(...A)}),Wo(F,_,o,2,p,l,d)}else m.triangulate(g,o,2,p,l,d);const v=a.length/2,x=t.texture;if(x!==B.WHITE){const _=t.matrix;c&&_.append(c.clone().invert()),Gh(o,2,p,a,v,2,o.length/2-p,_)}else Nh(a,v,2,o.length/2-p);const y=Rt.get($o);y.indexOffset=d,y.indexSize=l.length-d,y.vertexOffset=p,y.vertexSize=o.length/2-p,y.color=t.color,y.alpha=t.alpha,y.texture=x,y.geometryData=s,r.push(y)})}function Jh(i){if(!i)return[];const t=i.shapePrimitives,e=[];for(let n=0;n<t.length;n++){const r=t[n].shape,s=[];Sr[r.type].build(r,s),e.push(s)}return e}class tc{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class ec{constructor(){this.geometry=new Uh,this.instructions=new io}init(){this.instructions.reset()}}const wr=class Kn{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){Kn.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??Kn.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),Zh(t,e);const n=t.batchMode;t.customShader||n==="no-batch"?e.isBatchable=!1:n==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)Rt.return(this._activeBatchers[t]);this._activeBatchers.length=0}_initContextRenderData(t){const e=Rt.get(ec),{batches:n,geometryData:r}=this._gpuContextHash[t.uid],s=r.vertices.length,o=r.indices.length;for(let u=0;u<n.length;u++)n[u].applyTransform=!1;const a=Rt.get(Lh);this._activeBatchers.push(a),a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let u=0;u<n.length;u++){const c=n[u];a.add(c)}a.finish(e.instructions);const l=e.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const h=a.batches;for(let u=0;u<h.length;u++){const c=h[u];c.bindGroup=kh(c.textures.textures,c.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new tc;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(Rt.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(n=>{Rt.return(n)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};wr.extension={type:[D.WebGLSystem,D.WebGPUSystem,D.CanvasSystem],name:"graphicsContext"};wr.defaultOptions={bezierSmoothness:.5};let Vo=wr;const ic=8,bi=11920929e-14,nc=1;function Ho(i,t,e,n,r,s,o,a,l,h){const c=Math.min(.99,Math.max(0,h??Vo.defaultOptions.bezierSmoothness));let f=(nc-c)/1;return f*=f,rc(t,e,n,r,s,o,a,l,i,f),i}function rc(i,t,e,n,r,s,o,a,l,h){Zn(i,t,e,n,r,s,o,a,l,h,0),l.push(o,a)}function Zn(i,t,e,n,r,s,o,a,l,h,u){if(u>ic)return;const c=(i+e)/2,f=(t+n)/2,d=(e+r)/2,p=(n+s)/2,g=(r+o)/2,m=(s+a)/2,v=(c+d)/2,x=(f+p)/2,y=(d+g)/2,_=(p+m)/2,F=(v+y)/2,R=(x+_)/2;if(u>0){let A=o-i,z=a-t;const b=Math.abs((e-o)*z-(n-a)*A),S=Math.abs((r-o)*z-(s-a)*A);if(b>bi&&S>bi){if((b+S)*(b+S)<=h*(A*A+z*z)){l.push(F,R);return}}else if(b>bi){if(b*b<=h*(A*A+z*z)){l.push(F,R);return}}else if(S>bi){if(S*S<=h*(A*A+z*z)){l.push(F,R);return}}else if(A=F-(i+o)/2,z=R-(t+a)/2,A*A+z*z<=h){l.push(F,R);return}}Zn(i,t,c,f,v,x,F,R,l,h,u+1),Zn(F,R,y,_,g,m,o,a,l,h,u+1)}const sc=8,oc=11920929e-14,ac=1;function lc(i,t,e,n,r,s,o,a){const h=Math.min(.99,Math.max(0,a??Vo.defaultOptions.bezierSmoothness));let u=(ac-h)/1;return u*=u,uc(t,e,n,r,s,o,i,u),i}function uc(i,t,e,n,r,s,o,a){Qn(o,i,t,e,n,r,s,a,0),o.push(r,s)}function Qn(i,t,e,n,r,s,o,a,l){if(l>sc)return;const h=(t+n)/2,u=(e+r)/2,c=(n+s)/2,f=(r+o)/2,d=(h+c)/2,p=(u+f)/2;let g=s-t,m=o-e;const v=Math.abs((n-s)*m-(r-o)*g);if(v>oc){if(v*v<=a*(g*g+m*m)){i.push(d,p);return}}else if(g=d-(t+s)/2,m=p-(e+o)/2,g*g+m*m<=a){i.push(d,p);return}Qn(i,t,e,h,u,d,p,a,l+1),Qn(i,d,p,c,f,s,o,a,l+1)}function Xo(i,t,e,n,r,s,o,a){let l=Math.abs(r-s);(!o&&r>s||o&&s>r)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(n,1/3)*(l/Math.PI))),a=Math.max(a,3);let h=l/a,u=r;h*=o?-1:1;for(let c=0;c<a+1;c++){const f=Math.cos(u),d=Math.sin(u),p=t+f*n,g=e+d*n;i.push(p,g),u+=h}}function hc(i,t,e,n,r,s){const o=i[i.length-2],l=i[i.length-1]-e,h=o-t,u=r-e,c=n-t,f=Math.abs(l*c-h*u);if(f<1e-8||s===0){(i[i.length-2]!==t||i[i.length-1]!==e)&&i.push(t,e);return}const d=l*l+h*h,p=u*u+c*c,g=l*u+h*c,m=s*Math.sqrt(d)/f,v=s*Math.sqrt(p)/f,x=m*g/d,y=v*g/p,_=m*c+v*h,F=m*u+v*l,R=h*(v+x),A=l*(v+x),z=c*(m+y),b=u*(m+y),S=Math.atan2(A-F,R-_),q=Math.atan2(b-F,z-_);Xo(i,_+t,F+e,s,S,q,h*u>c*l)}const Qe=Math.PI*2,Fn={centerX:0,centerY:0,ang1:0,ang2:0},In=({x:i,y:t},e,n,r,s,o,a,l)=>{i*=e,t*=n;const h=r*i-s*t,u=s*i+r*t;return l.x=h+o,l.y=u+a,l};function cc(i,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),n=t===1.5707963267948966?.551915024494:e,r=Math.cos(i),s=Math.sin(i),o=Math.cos(i+t),a=Math.sin(i+t);return[{x:r-s*n,y:s+r*n},{x:o+a*n,y:a-o*n},{x:o,y:a}]}const Ps=(i,t,e,n)=>{const r=i*n-t*e<0?-1:1;let s=i*e+t*n;return s>1&&(s=1),s<-1&&(s=-1),r*Math.acos(s)},fc=(i,t,e,n,r,s,o,a,l,h,u,c,f)=>{const d=Math.pow(r,2),p=Math.pow(s,2),g=Math.pow(u,2),m=Math.pow(c,2);let v=d*p-d*m-p*g;v<0&&(v=0),v/=d*m+p*g,v=Math.sqrt(v)*(o===a?-1:1);const x=v*r/s*c,y=v*-s/r*u,_=h*x-l*y+(i+e)/2,F=l*x+h*y+(t+n)/2,R=(u-x)/r,A=(c-y)/s,z=(-u-x)/r,b=(-c-y)/s,S=Ps(1,0,R,A);let q=Ps(R,A,z,b);a===0&&q>0&&(q-=Qe),a===1&&q<0&&(q+=Qe),f.centerX=_,f.centerY=F,f.ang1=S,f.ang2=q};function dc(i,t,e,n,r,s,o,a=0,l=0,h=0){if(s===0||o===0)return;const u=Math.sin(a*Qe/360),c=Math.cos(a*Qe/360),f=c*(t-n)/2+u*(e-r)/2,d=-u*(t-n)/2+c*(e-r)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const p=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);p>1&&(s*=Math.sqrt(p),o*=Math.sqrt(p)),fc(t,e,n,r,s,o,l,h,u,c,f,d,Fn);let{ang1:g,ang2:m}=Fn;const{centerX:v,centerY:x}=Fn;let y=Math.abs(m)/(Qe/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);m/=_;let F=i[i.length-2],R=i[i.length-1];const A={x:0,y:0};for(let z=0;z<_;z++){const b=cc(g,m),{x:S,y:q}=In(b[0],s,o,c,u,v,x,A),{x:_t,y:E}=In(b[1],s,o,c,u,v,x,A),{x:I,y:W}=In(b[2],s,o,c,u,v,x,A);Ho(i,F,R,S,q,_t,E,I,W),F=I,R=W,g+=m}}function pc(i,t,e){const n=(o,a)=>{const l=a.x-o.x,h=a.y-o.y,u=Math.sqrt(l*l+h*h),c=l/u,f=h/u;return{len:u,nx:c,ny:f}},r=(o,a)=>{o===0?i.moveTo(a.x,a.y):i.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){r(o,a),s=a;continue}const h=t[(o+1)%t.length],u=n(a,s),c=n(a,h);if(u.len<1e-4||c.len<1e-4){r(o,a),s=a;continue}let f=Math.asin(u.nx*c.ny-u.ny*c.nx),d=1,p=!1;u.nx*c.nx-u.ny*-c.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,p=!0):f>0&&(d=-1,p=!0);const g=f/2;let m,v=Math.abs(Math.cos(g)*l/Math.sin(g));v>Math.min(u.len/2,c.len/2)?(v=Math.min(u.len/2,c.len/2),m=Math.abs(v*Math.sin(g)/Math.cos(g))):m=l;const x=a.x+c.nx*v+-c.ny*m*d,y=a.y+c.ny*v+c.nx*m*d,_=Math.atan2(u.ny,u.nx)+Math.PI/2*d,F=Math.atan2(c.ny,c.nx)-Math.PI/2*d;o===0&&i.moveTo(x+Math.cos(_)*m,y+Math.sin(_)*m),i.arc(x,y,m,_,F,p),s=a}}function mc(i,t,e,n){const r=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,h)=>({x:a.x+(l.x-a.x)*h,y:a.y+(l.y-a.y)*h}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],h=l.radius??e;if(h<=0){a===0?i.moveTo(l.x,l.y):i.lineTo(l.x,l.y);continue}const u=t[a],c=t[(a+2)%o],f=r(u,l);let d;if(f<1e-4)d=l;else{const m=Math.min(f/2,h);d=s(l,u,m/f)}const p=r(c,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,h);g=s(l,c,m/p)}a===0?i.moveTo(d.x,d.y):i.lineTo(d.x,d.y),i.quadraticCurveTo(l.x,l.y,g.x,g.y,n)}}const gc=new rt;class xc{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new It,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const n=this._currentPoly.points,r=n[n.length-2],s=n[n.length-1];return(r!==t||s!==e)&&n.push(t,e),this}arc(t,e,n,r,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Xo(a,t,e,n,r,s,o),this}arcTo(t,e,n,r,s){this._ensurePoly();const o=this._currentPoly.points;return hc(o,t,e,n,r,s),this}arcToSvg(t,e,n,r,s,o,a){const l=this._currentPoly.points;return dc(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,n,r,s),this}bezierCurveTo(t,e,n,r,s,o,a){this._ensurePoly();const l=this._currentPoly;return Ho(this._currentPoly.points,l.lastX,l.lastY,t,e,n,r,s,o,a),this}quadraticCurveTo(t,e,n,r,s){this._ensurePoly();const o=this._currentPoly;return lc(this._currentPoly.points,o.lastX,o.lastY,t,e,n,r,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let n=0;n<t.instructions.length;n++){const r=t.instructions[n];this[r.action](...r.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,n,r,s){return this.drawShape(new rt(t,e,n,r),s),this}circle(t,e,n,r){return this.drawShape(new yr(t,e,n),r),this}poly(t,e,n){const r=new Ze(t);return r.closePath=e,this.drawShape(r,n),this}regularPoly(t,e,n,r,s=0,o){r=Math.max(r|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/r,h=[];for(let u=0;u<r;u++){const c=u*l+a;h.push(t+n*Math.cos(c),e+n*Math.sin(c))}return this.poly(h,!0,o),this}roundPoly(t,e,n,r,s,o=0,a){if(r=Math.max(r|0,3),s<=0)return this.regularPoly(t,e,n,r,o);const l=n*Math.sin(Math.PI/r)-.001;s=Math.min(s,l);const h=-1*Math.PI/2+o,u=Math.PI*2/r,c=(r-2)*Math.PI/r/2;for(let f=0;f<r;f++){const d=f*u+h,p=t+n*Math.cos(d),g=e+n*Math.sin(d),m=d+Math.PI+c,v=d-Math.PI-c,x=p+s*Math.cos(m),y=g+s*Math.sin(m),_=p+s*Math.cos(v),F=g+s*Math.sin(v);f===0?this.moveTo(x,y):this.lineTo(x,y),this.quadraticCurveTo(p,g,_,F,a)}return this.closePath()}roundShape(t,e,n=!1,r){return t.length<3?this:(n?mc(this,t,e,r):pc(this,t,e),this.closePath())}filletRect(t,e,n,r,s){if(s===0)return this.rect(t,e,n,r);const o=Math.min(n,r)/2,a=Math.min(o,Math.max(-o,s)),l=t+n,h=e+r,u=a<0?-a:0,c=Math.abs(a);return this.moveTo(t,e+c).arcTo(t+u,e+u,t+c,e,c).lineTo(l-c,e).arcTo(l-u,e+u,l,e+c,c).lineTo(l,h-c).arcTo(l-u,h-u,t+n-c,h,c).lineTo(t+c,h).arcTo(t+u,h-u,t,h-c,c).closePath()}chamferRect(t,e,n,r,s,o){if(s<=0)return this.rect(t,e,n,r);const a=Math.min(s,Math.min(n,r)/2),l=t+n,h=e+r,u=[t+a,e,l-a,e,l,e+a,l,h-a,l-a,h,t+a,h,t,h-a,t,e+a];for(let c=u.length-1;c>=2;c-=2)u[c]===u[c-2]&&u[c-1]===u[c-3]&&u.splice(c-1,2);return this.poly(u,!0,o)}ellipse(t,e,n,r,s){return this.drawShape(new _r(t,e,n,r),s),this}roundRect(t,e,n,r,s,o){return this.drawShape(new br(t,e,n,r,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let n=this._currentPoly;return n&&this.endPoly(),n=new Ze,n.points.push(t,e),this._currentPoly=n,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Ze,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let n=e.shape.x,r=e.shape.y;if(!e.transform.isIdentity()){const s=e.transform,o=n;n=s.a*n+s.c*r+s.tx,r=s.b*o+s.d*r+s.ty}this._currentPoly.points.push(n,r)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const n=t.instructions[e];this[n.action](...n.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let n=0;n<e.length;n++){const r=e[n],s=r.shape.getBounds(gc);r.transform?t.addRect(s,r.transform):t.addRect(s)}return t}}class Oe{constructor(t){this.instructions=[],this.uid=st("graphicsPath"),this._dirty=!0,typeof t=="string"?Mh(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new xc(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,n,r,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(ut.shared);let l=0,h=0;if(!o||o.action!=="bezierCurveTo")l=a.x,h=a.y;else{l=o.data[2],h=o.data[3];const u=a.x,c=a.y;l=u+(u-l),h=c+(c-h)}return this.instructions.push({action:"bezierCurveTo",data:[l,h,t,e,n,r,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,n){const r=this.instructions[this.instructions.length-1],s=this.getLastPoint(ut.shared);let o=0,a=0;if(!r||r.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=r.data[0],a=r.data[1];const l=s.x,h=s.y;o=l+(l-o),a=h+(h-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,n]}),this._dirty=!0,this}rect(t,e,n,r,s){return this.instructions.push({action:"rect",data:[t,e,n,r,s]}),this._dirty=!0,this}circle(t,e,n,r){return this.instructions.push({action:"circle",data:[t,e,n,r]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,n,r,s,o,a){s=s||r/2;const l=-1*Math.PI/2+o,h=n*2,u=Math.PI*2/h,c=[];for(let f=0;f<h;f++){const d=f%2?s:r,p=f*u+l;c.push(t+d*Math.cos(p),e+d*Math.sin(p))}return this.poly(c,!0,a),this}clone(t=!1){const e=new Oe;if(!t)e.instructions=this.instructions.slice();else for(let n=0;n<this.instructions.length;n++){const r=this.instructions[n];e.instructions.push({action:r.action,data:r.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,n=t.b,r=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,h=0,u=0,c=0,f=0,d=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const v=this.instructions[m],x=v.data;switch(v.action){case"moveTo":case"lineTo":l=x[0],h=x[1],x[0]=e*l+r*h+o,x[1]=n*l+s*h+a;break;case"bezierCurveTo":u=x[0],c=x[1],f=x[2],d=x[3],l=x[4],h=x[5],x[0]=e*u+r*c+o,x[1]=n*u+s*c+a,x[2]=e*f+r*d+o,x[3]=n*f+s*d+a,x[4]=e*l+r*h+o,x[5]=n*l+s*h+a;break;case"quadraticCurveTo":u=x[0],c=x[1],l=x[2],h=x[3],x[0]=e*u+r*c+o,x[1]=n*u+s*c+a,x[2]=e*l+r*h+o,x[3]=n*l+s*h+a;break;case"arcToSvg":l=x[5],h=x[6],p=x[0],g=x[1],x[0]=e*p+r*g,x[1]=n*p+s*g,x[5]=e*l+r*h+o,x[6]=n*l+s*h+a;break;case"circle":x[4]=Ve(x[3],t);break;case"rect":x[4]=Ve(x[4],t);break;case"ellipse":x[8]=Ve(x[8],t);break;case"roundRect":x[5]=Ve(x[5],t);break;case"addPath":x[0].transform(t);break;case"poly":x[2]=Ve(x[2],t);break;default:ht("unknown transform action",v.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,n=this.instructions[e];if(!n)return t.x=0,t.y=0,t;for(;n.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;n=this.instructions[e]}switch(n.action){case"moveTo":case"lineTo":t.x=n.data[0],t.y=n.data[1];break;case"quadraticCurveTo":t.x=n.data[2],t.y=n.data[3];break;case"bezierCurveTo":t.x=n.data[4],t.y=n.data[5];break;case"arc":case"arcToSvg":t.x=n.data[5],t.y=n.data[6];break;case"addPath":n.data[0].getLastPoint(t);break}return t}}function Ve(i,t){return i?i.prepend(t):t.clone()}function vc(i,t){if(typeof i=="string"){const n=document.createElement("div");n.innerHTML=i.trim(),i=n.querySelector("svg")}const e={context:t,path:new Oe};return Yo(i,e,null,null),t}function Yo(i,t,e,n){const r=i.children,{fillStyle:s,strokeStyle:o}=yc(i);s&&e?e={...e,...s}:s&&(e=s),o&&n?n={...n,...o}:o&&(n=o),t.context.fillStyle=e,t.context.strokeStyle=n;let a,l,h,u,c,f,d,p,g,m,v,x,y,_,F,R,A;switch(i.nodeName.toLowerCase()){case"path":_=i.getAttribute("d"),F=new Oe(_),t.context.path(F),e&&t.context.fill(),n&&t.context.stroke();break;case"circle":d=ot(i,"cx",0),p=ot(i,"cy",0),g=ot(i,"r",0),t.context.ellipse(d,p,g,g),e&&t.context.fill(),n&&t.context.stroke();break;case"rect":a=ot(i,"x",0),l=ot(i,"y",0),R=ot(i,"width",0),A=ot(i,"height",0),m=ot(i,"rx",0),v=ot(i,"ry",0),m||v?t.context.roundRect(a,l,R,A,m||v):t.context.rect(a,l,R,A),e&&t.context.fill(),n&&t.context.stroke();break;case"ellipse":d=ot(i,"cx",0),p=ot(i,"cy",0),m=ot(i,"rx",0),v=ot(i,"ry",0),t.context.beginPath(),t.context.ellipse(d,p,m,v),e&&t.context.fill(),n&&t.context.stroke();break;case"line":h=ot(i,"x1",0),u=ot(i,"y1",0),c=ot(i,"x2",0),f=ot(i,"y2",0),t.context.beginPath(),t.context.moveTo(h,u),t.context.lineTo(c,f),n&&t.context.stroke();break;case"polygon":y=i.getAttribute("points"),x=y.match(/\d+/g).map(z=>parseInt(z,10)),t.context.poly(x,!0),e&&t.context.fill(),n&&t.context.stroke();break;case"polyline":y=i.getAttribute("points"),x=y.match(/\d+/g).map(z=>parseInt(z,10)),t.context.poly(x,!1),n&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${i.nodeName}> elements unsupported`);break}}for(let z=0;z<r.length;z++)Yo(r[z],t,e,n)}function ot(i,t,e){const n=i.getAttribute(t);return n?Number(n):e}function yc(i){const t=i.getAttribute("style"),e={},n={};let r=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[h,u]=l.split(":");switch(h){case"stroke":u!=="none"&&(e.color=j.shared.setValue(u).toNumber(),s=!0);break;case"stroke-width":e.width=Number(u);break;case"fill":u!=="none"&&(r=!0,n.color=j.shared.setValue(u).toNumber());break;case"fill-opacity":n.alpha=Number(u);break;case"stroke-opacity":e.alpha=Number(u);break;case"opacity":n.alpha=Number(u),e.alpha=Number(u);break}}}else{const o=i.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=j.shared.setValue(o).toNumber(),e.width=ot(i,"stroke-width",1));const a=i.getAttribute("fill");a&&a!=="none"&&(r=!0,n.color=j.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:r?n:null}}const jo=class Jn{constructor(t,e,n,r){this.uid=st("fillGradient"),this.type="linear",this.gradientStops=[],this.x0=t,this.y0=e,this.x1=n,this.y1=r}addColorStop(t,e){return this.gradientStops.push({offset:t,color:j.shared.setValue(e).toHex()}),this}buildLinearGradient(){const t=Jn.defaultTextureSize,{gradientStops:e}=this,n=lt.get().createCanvas();n.width=t,n.height=t;const r=n.getContext("2d"),s=r.createLinearGradient(0,0,Jn.defaultTextureSize,1);for(let g=0;g<e.length;g++){const m=e[g];s.addColorStop(m.offset,m.color)}r.fillStyle=s,r.fillRect(0,0,t,t),this.texture=new B({source:new Be({resource:n,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:h}=this,u=new Y,c=l-o,f=h-a,d=Math.sqrt(c*c+f*f),p=Math.atan2(f,c);u.translate(-o,-a),u.scale(1/t,1/t),u.rotate(-p),u.scale(256/d,1),this.transform=u}};jo.defaultTextureSize=256;let qo=jo;const Ts={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class _c{constructor(t,e){this.uid=st("fillPattern"),this.transform=new Y,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=Ts[e].addressModeU,t.source.style.addressModeV=Ts[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height)}}function Xt(i,t){var o;if(i==null)return null;let e,n;if(i!=null&&i.fill?(n=i.fill,e={...t,...i}):(n=i,e=t),j.isColorLike(n)){const a=j.shared.setValue(n??0);return{...e,color:a.toNumber(),alpha:a.alpha===1?e.alpha:a.alpha,texture:B.WHITE}}else if(n instanceof _c){const a=n;return{...e,color:16777215,texture:a.texture,matrix:a.transform,fill:e.fill??null}}else if(n instanceof qo){const a=n;return a.buildLinearGradient(),{...e,color:16777215,texture:a.texture,matrix:a.transform}}const r={...t,...i};if(r.texture){if(r.texture!==B.WHITE){const l=((o=r.matrix)==null?void 0:o.invert())||new Y;l.scale(1/r.texture.frame.width,1/r.texture.frame.height),r.matrix=l}const a=r.texture.source.style;a.addressMode==="clamp-to-edge"&&(a.addressMode="repeat")}const s=j.shared.setValue(r.color);return r.alpha*=s.alpha,r.color=s.toNumber(),r.matrix=r.matrix?r.matrix.clone():null,r}const bc=new ut,As=new Y,Cr=class At extends Ot{constructor(){super(...arguments),this.uid=st("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new Oe,this._transform=new Y,this._fillStyle={...At.defaultFillStyle},this._strokeStyle={...At.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new It,this._boundsDirty=!0}clone(){const t=new At;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=Xt(t,At.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=Xt(t,At.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=Xt(t,At.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=Xt(t,At.defaultStrokeStyle),this}texture(t,e,n,r,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:n||0,dy:r||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?j.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new Oe,this}fill(t,e){let n;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="stroke"?n=r.data.path:n=this._activePath.clone(),n?(t!=null&&(e!==void 0&&typeof t=="number"&&(U(Q,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=Xt(t,At.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:n}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(ut.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const n=this.instructions[this.instructions.length-1];return this._tick===0&&n&&n.action==="fill"?e=n.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=Xt(t,At.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],n=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(n);else{e.data.hole=n;break}}return this._initNextPathLocation(),this}arc(t,e,n,r,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,n,r,s,o),this}arcTo(t,e,n,r,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*n+o.c*r+o.tx,o.b*n+o.d*r+o.ty,s),this}arcToSvg(t,e,n,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,n,r,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,n,r,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*n+l.c*r+l.tx,l.b*n+l.d*r+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,n,r){return this._tick++,this._activePath.ellipse(t,e,n,r,this._transform.clone()),this}circle(t,e,n){return this._tick++,this._activePath.circle(t,e,n,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const n=this._transform;return this._activePath.lineTo(n.a*t+n.c*e+n.tx,n.b*t+n.d*e+n.ty),this}moveTo(t,e){this._tick++;const n=this._transform,r=this._activePath.instructions,s=n.a*t+n.c*e+n.tx,o=n.b*t+n.d*e+n.ty;return r.length===1&&r[0].action==="moveTo"?(r[0].data[0]=s,r[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,n,r,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*n+o.c*r+o.tx,o.b*n+o.d*r+o.ty,s),this}rect(t,e,n,r){return this._tick++,this._activePath.rect(t,e,n,r,this._transform.clone()),this}roundRect(t,e,n,r,s){return this._tick++,this._activePath.roundRect(t,e,n,r,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,n,r,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,n,r,s,o),this}roundPoly(t,e,n,r,s,o){return this._tick++,this._activePath.roundPoly(t,e,n,r,s,o),this}roundShape(t,e,n,r){return this._tick++,this._activePath.roundShape(t,e,n,r),this}filletRect(t,e,n,r,s){return this._tick++,this._activePath.filletRect(t,e,n,r,s),this}chamferRect(t,e,n,r,s,o){return this._tick++,this._activePath.chamferRect(t,e,n,r,s,o),this}star(t,e,n,r,s=0,o=0){return this._tick++,this._activePath.star(t,e,n,r,s,o,this._transform.clone()),this}svg(t){return this._tick++,vc(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,n,r,s,o){return t instanceof Y?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,n,r,s,o),this)}transform(t,e,n,r,s,o){return t instanceof Y?(this._transform.append(t),this):(As.set(t,e,n,r,s,o),this._transform.append(As),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const n=this.instructions[e],r=n.action;if(r==="fill"){const s=n.data;t.addBounds(s.path.bounds)}else if(r==="texture"){const s=n.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(r==="stroke"){const s=n.data,o=s.style.width/2,a=s.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var r;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let n=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const h=a.style,u=l.shapePath.shapePrimitives;for(let c=0;c<u.length;c++){const f=u[c].shape;if(!h||!f)continue;const d=u[c].transform,p=d?d.applyInverse(t,bc):t;o.action==="fill"?n=f.contains(p.x,p.y):n=f.strokeContains(p.x,p.y,h.width);const g=a.hole;if(g){const m=(r=g.shapePath)==null?void 0:r.shapePrimitives;if(m)for(let v=0;v<m.length;v++)m[v].shape.contains(p.x,p.y)&&(n=!1)}if(n)return!0}}return n}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const n=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(n),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(n)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Cr.defaultFillStyle={color:16777215,alpha:1,texture:B.WHITE,matrix:null,fill:null};Cr.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:B.WHITE,matrix:null,fill:null};let jt=Cr;function Pr(i,t=1){var n;const e=(n=Ue.RETINA_PREFIX)==null?void 0:n.exec(i);return e?parseFloat(e[1]):t}function Tr(i,t,e){i.label=e,i._sourceOrigin=e;const n=new B({source:i,label:e}),r=()=>{delete t.promiseCache[e],ct.has(e)&&ct.remove(e)};return n.source.once("destroy",()=>{t.promiseCache[e]&&(ht("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),n.once("destroy",()=>{i.destroyed||(ht("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),n}const Sc=".svg",wc="image/svg+xml",Cc={extension:{type:D.LoadParser,priority:de.Low},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(i){return ke(i,wc)||Ee(i,Sc)},async load(i,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Tc(i):Pc(i,t,e,this.config.crossOrigin)},unload(i){i.destroy(!0)}};async function Pc(i,t,e,n){var m,v,x;const s=await(await lt.get().fetch(i)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=n,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),h=l.getContext("2d"),u=((m=t.data)==null?void 0:m.resolution)||Pr(i),c=((v=t.data)==null?void 0:v.width)??a.width,f=((x=t.data)==null?void 0:x.height)??a.height;l.width=c*u,l.height=f*u,h.drawImage(a,0,0,c*u,f*u);const{parseAsGraphicsContext:d,...p}=t.data,g=new Be({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:u,...p});return Tr(g,e,i)}async function Tc(i){const e=await(await lt.get().fetch(i)).text(),n=new jt;return n.svg(e),n}const Ac=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let Te=null,tr=class{constructor(){Te||(Te=URL.createObjectURL(new Blob([Ac],{type:"application/javascript"}))),this.worker=new Worker(Te)}};tr.revokeObjectURL=function(){Te&&(URL.revokeObjectURL(Te),Te=null)};const Mc=`(function () {
    'use strict';

    async function loadImageBitmap(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      const imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap;
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let Ae=null;class Ko{constructor(){Ae||(Ae=URL.createObjectURL(new Blob([Mc],{type:"application/javascript"}))),this.worker=new Worker(Ae)}}Ko.revokeObjectURL=function(){Ae&&(URL.revokeObjectURL(Ae),Ae=null)};let Ms=0,zn;class Fc{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new tr;e.addEventListener("message",n=>{e.terminate(),tr.revokeObjectURL(),t(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){zn===void 0&&(zn=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<zn&&(this._createdWorkers++,t=new Ko().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const n=new Promise((r,s)=>{this._queue.push({id:t,arguments:e,resolve:r,reject:s})});return this._next(),n}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),n=e.id;this._resolveHash[Ms]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Ms++,id:n})}}const Fs=new Fc,Ic=[".jpeg",".jpg",".png",".webp",".avif"],zc=["image/jpeg","image/png","image/webp","image/avif"];async function Oc(i){const t=await lt.get().fetch(i);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${i}: ${t.status} ${t.statusText}`);const e=await t.blob();return await createImageBitmap(e)}const Zo={name:"loadTextures",extension:{type:D.LoadParser,priority:de.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(i){return ke(i,zc)||Ee(i,Ic)},async load(i,t,e){var s;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Fs.isImageBitmapSupported()?n=await Fs.loadImageBitmap(i):n=await Oc(i):n=await new Promise(o=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=i,n.complete?o(n):n.onload=()=>{o(n)}});const r=new Be({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||Pr(i),...t.data});return Tr(r,e,i)},unload(i){i.destroy(!0)}},Qo=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Bc=Qo.map(i=>`video/${i.substring(1)}`);function Uc(i,t,e){e===void 0&&!t.startsWith("data:")?i.crossOrigin=Ec(t):e!==!1&&(i.crossOrigin=typeof e=="string"?e:"anonymous")}function kc(i){return new Promise((t,e)=>{i.addEventListener("canplaythrough",n),i.addEventListener("error",r),i.load();function n(){s(),t()}function r(o){s(),e(o)}function s(){i.removeEventListener("canplaythrough",n),i.removeEventListener("error",r)}})}function Ec(i,t=globalThis.location){if(i.startsWith("data:"))return"";t=t||globalThis.location;const e=new URL(i,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const Rc={name:"loadVideo",extension:{type:D.LoadParser},config:null,test(i){const t=ke(i,Bc),e=Ee(i,Qo);return t||e},async load(i,t,e){var l,h;const n={...Ci.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Pr(i),alphaMode:((h=t.data)==null?void 0:h.alphaMode)||await co(),...t.data},r=document.createElement("video"),s={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(s).forEach(u=>{const c=s[u];c!==void 0&&r.setAttribute(u,c)}),n.muted===!0&&(r.muted=!0),Uc(r,i,n.crossorigin);const o=document.createElement("source");let a;if(i.startsWith("data:"))a=i.slice(5,i.indexOf(";"));else if(!i.startsWith("blob:")){const u=i.split("?")[0].slice(i.lastIndexOf(".")+1).toLowerCase();a=Ci.MIME_TYPES[u]||`video/${u}`}return o.src=i,a&&(o.type=a),new Promise(u=>{const c=async()=>{const f=new Ci({...n,resource:r});r.removeEventListener("canplay",c),t.data.preload&&await kc(r),u(Tr(f,e,i))};r.addEventListener("canplay",c),r.appendChild(o)})},unload(i){i.destroy(!0)}},Jo={extension:D.ResolveParser,test:Zo.test,parse:i=>{var t;return{resolution:parseFloat(((t=Ue.RETINA_PREFIX.exec(i))==null?void 0:t[1])??"1"),format:i.split(".").pop(),src:i}}},Dc={extension:D.ResolveParser,test:i=>Ue.RETINA_PREFIX.test(i)&&i.endsWith(".json"),parse:Jo.parse};class Lc{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ue,this.loader=new ah,this.cache=ct,this._backgroundLoader=new Qu(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){ht("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,n=typeof e=="number"?[e]:e,r=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:n}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const n=Gi(t),r=wt(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(h=>!this.resolver.hasKey(h))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(r),o=await this._mapLoadToResolve(s,e);return n?o[r[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let n=!1;typeof t=="string"&&(n=!0,t=[t]);const r=this.resolver.resolveBundle(t),s={},o=Object.keys(r);let a=0,l=0;const h=()=>{e==null||e(++a/l)},u=o.map(c=>{const f=r[c];return l+=Object.keys(f).length,this._mapLoadToResolve(f,h).then(d=>{s[c]=d})});return await Promise.all(u),n?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return ct.get(t);const e={};for(let n=0;n<t.length;n++)e[n]=ct.get(t[n]);return e}async _mapLoadToResolve(t,e){const n=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const r=await this.loader.load(n,e);this._backgroundLoader.active=!0;const s={};return n.forEach(o=>{const a=r[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(h=>{s[h]=a}),ct.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=wt(t).map(r=>typeof r!="string"?r.src:r),n=this.resolver.resolve(e);await this._unloadFromResolved(n)}async unloadBundle(t){this._initialized||await this.init(),t=wt(t);const e=this.resolver.resolveBundle(t),n=Object.keys(e).map(r=>this._unloadFromResolved(e[r]));await Promise.all(n)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(n=>{ct.remove(n.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const n of t.detections)t.skipDetections||await n.test()?e=await n.add(e):t.skipDetections||(e=await n.remove(e));return e=e.filter((n,r)=>e.indexOf(n)===r),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(n=>n in t).forEach(n=>{e.config[n]=t[n]})})}}const Lt=new Lc;yt.handleByList(D.LoadParser,Lt.loader.parsers).handleByList(D.ResolveParser,Lt.resolver.parsers).handleByList(D.CacheParser,Lt.cache.parsers).handleByList(D.DetectionParser,Lt.detections);yt.add(Ju,eh,th,oh,nh,rh,sh,hh,dh,bh,Cc,Zo,Rc,Jo,Dc);const Is={loader:D.LoadParser,resolver:D.ResolveParser,cache:D.CacheParser,detection:D.DetectionParser};yt.handle(D.Asset,i=>{const t=i.ref;Object.entries(Is).filter(([e])=>!!t[e]).forEach(([e,n])=>yt.add(Object.assign(t[e],{extension:t[e].extension??n})))},i=>{const t=i.ref;Object.keys(Is).filter(e=>!!t[e]).forEach(e=>yt.remove(t[e]))});var Gc=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Nc=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,zs=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const ta=class ea extends ${constructor(t){t={...ea.defaultOptions,...t};const e=L.from({vertex:{source:zs,entryPoint:"mainVertex"},fragment:{source:zs,entryPoint:"mainFragment"}}),n=G.from({vertex:Gc,fragment:Nc,name:"alpha-filter"}),{alpha:r,...s}=t,o=new So({uAlpha:{value:r,type:"f32"}});super({...s,gpuProgram:e,glProgram:n,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};ta.defaultOptions={alpha:1};let $c=ta,Wc=0;class Vc{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,n){const r=new Bt({...this.textureOptions,width:t,height:e,resolution:1,antialias:n,autoGarbageCollect:!0});return new B({source:r,label:`texturePool_${Wc++}`})}getOptimalTexture(t,e,n=1,r){let s=Math.ceil(t*n-1e-6),o=Math.ceil(e*n-1e-6);s=Er(s),o=Er(o);const a=(s<<17)+(o<<1)+(r?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,r)),l.source._resolution=n,l.source.width=s/n,l.source.height=o/n,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const n=t.source;return this.getOptimalTexture(t.width,t.height,n._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const n=this._texturePool[e];if(n)for(let r=0;r<n.length;r++)n[r].destroy(!0)}this._texturePool={}}}const vt=new Vc,ia={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Hc=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Xc(i){const t=ia[i],e=t.length;let n=Hc,r="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<i;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=i-a-1),l=l.replace("%value%",t[o].toString()),r+=l,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n}const Yc=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function jc(i,t){const e=Math.ceil(i/2);let n=Yc,r="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<i;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),r+=a,r+=`
`}return n=n.replace("%blur%",r),n=n.replace("%size%",i.toString()),n=n.replace("%dimension%",t?"z":"w"),n}function qc(i,t){const e=jc(t,i),n=Xc(t);return G.from({vertex:e,fragment:n,name:`blur-${i?"horizontal":"vertical"}-pass-filter`})}var Kc=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let strength = gfu.uInputSize.w * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function Zc(i,t){const e=ia[t],n=e.length,r=[],s=[],o=[];for(let c=0;c<t;c++){r[c]=`@location(${c}) offset${c}: vec2<f32>,`,i?s[c]=`filteredCord + vec2(${c-n+1} * strength, 0.0),`:s[c]=`filteredCord + vec2(0.0, ${c-n+1} * strength),`;const f=c<n?c:t-c-1,d=e[f].toString();o[c]=`finalColor += textureSample(uTexture, uSampler, offset${c}) * ${d};`}const a=r.join(`
`),l=s.join(`
`),h=o.join(`
`),u=Kc.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",h);return L.from({vertex:{source:u,entryPoint:"mainVertex"},fragment:{source:u,entryPoint:"mainFragment"}})}const na=class ra extends ${constructor(t){t={...ra.defaultOptions,...t};const e=qc(t.horizontal,t.kernelSize),n=Zc(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:n,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,n,r){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,n,r);else{const s=vt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){t.applyFilter(this,o,a,t.renderer.type===Ni.WEBGPU);const h=a;a=o,o=h}this._state.blend=!0,t.applyFilter(this,o,n,r),vt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};na.defaultOptions={strength:8,quality:4,kernelSize:5};let Os=na;class ft extends N{constructor(t){t instanceof jt&&(t={context:t});const{context:e,roundPixels:n,...r}=t||{};super({label:"Graphics",...r}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,e?this._context=e:this._context=this._ownedContext=new jt,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=n??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new ft(this._context.clone()):(this._ownedContext=null,new ft(this._context))}lineStyle(t,e,n){U(Q,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const r={};return t&&(r.width=t),e&&(r.color=e),n&&(r.alpha=n),this.context.strokeStyle=r,this}beginFill(t,e){U(Q,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const n={};return t&&(n.color=t),e&&(n.alpha=e),this.context.fillStyle=n,this}endFill(){U(Q,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==jt.defaultStrokeStyle.width||t.color!==jt.defaultStrokeStyle.color||t.alpha!==jt.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return U(Q,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return U(Q,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return U(Q,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return U(Q,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return U(Q,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return U(Q,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}const sa=class oa extends Eo{constructor(...t){let e=t[0]??{};e instanceof Float32Array&&(U(Q,"use new MeshGeometry({ positions, uvs, indices }) instead"),e={positions:e,uvs:t[1],indices:t[2]}),e={...oa.defaultOptions,...e};const n=e.positions||new Float32Array([0,0,1,0,1,1,0,1]),r=e.uvs||new Float32Array([0,0,1,0,1,1,0,1]),s=e.indices||new Uint32Array([0,1,2,0,2,3]),o=e.shrinkBuffersToFit,a=new qt({data:n,label:"attribute-mesh-positions",shrinkToFit:o,usage:nt.VERTEX|nt.COPY_DST}),l=new qt({data:r,label:"attribute-mesh-uvs",shrinkToFit:o,usage:nt.VERTEX|nt.COPY_DST}),h=new qt({data:s,label:"index-mesh-buffer",shrinkToFit:o,usage:nt.INDEX|nt.COPY_DST});super({attributes:{aPosition:{buffer:a,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:l,format:"float32x2",stride:2*4,offset:0}},indexBuffer:h,topology:e.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(t){this.attributes.aPosition.buffer.data=t}get uvs(){return this.attributes.aUV.buffer.data}set uvs(t){this.attributes.aUV.buffer.data=t}get indices(){return this.indexBuffer.data}set indices(t){this.indexBuffer.data=t}};sa.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let Qc=sa;class ni extends Ft{constructor(t,e=!0){super(t[0]instanceof B?t[0]:t[0].texture),this._textures=null,this._durations=null,this._autoUpdate=e,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=t}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Dt.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Dt.shared.add(this.update,this,Li.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(t){this.stop(),this.currentFrame=t}gotoAndPlay(t){this.currentFrame=t,this.play()}update(t){if(!this._playing)return;const e=t.deltaTime,n=this.animationSpeed*e,r=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=n/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this._updateTexture())}_updateTexture(){const t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this.texture=this._textures[t],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(t){const e=[];for(let n=0;n<t.length;++n)e.push(B.from(t[n]));return new ni(e)}static fromImages(t){const e=[];for(let n=0;n<t.length;++n)e.push(B.from(t[n]));return new ni(e)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(t){if(t[0]instanceof B)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(let e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}set currentFrame(t){if(t<0||t>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Dt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Dt.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class Jc{constructor({matrix:t,observer:e}={}){this.dirty=!0,this._matrix=t??new Y,this.observer=e,this.position=new it(this,0,0),this.scale=new it(this,1,1),this.pivot=new it(this,0,0),this.skew=new it(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){var e;this.dirty=!0,t===this.skew&&this.updateSkew(),(e=this.observer)==null||e._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const aa=class Ai extends N{constructor(...t){let e=t[0]||{};e instanceof B&&(e={texture:e}),t.length>1&&(U(Q,"use new TilingSprite({ texture, width:100, height:100 }) instead"),e.width=t[1],e.height=t[2]),e={...Ai.defaultOptions,...e};const{texture:n,anchor:r,tilePosition:s,tileScale:o,tileRotation:a,width:l,height:h,applyAnchorToTexture:u,roundPixels:c,...f}=e??{};super({label:"TilingSprite",...f}),this.renderPipeId="tilingSprite",this.canBundle=!0,this.batched=!0,this._roundPixels=0,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this.allowChildren=!1,this._anchor=new it({_onUpdate:()=>{this.onViewUpdate()}}),this._applyAnchorToTexture=u,this.texture=n,this._width=l??n.width,this._height=h??n.height,this._tileTransform=new Jc({observer:{_onUpdate:()=>this.onViewUpdate()}}),r&&(this.anchor=r),this.tilePosition=s,this.tileScale=o,this.tileRotation=a,this.roundPixels=c??!1}static from(t,e={}){return typeof t=="string"?new Ai({texture:ct.get(t),...e}):new Ai({texture:t,...e})}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}set texture(t){t||(t=B.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}_updateBounds(){const t=this._bounds,e=this._anchor,n=this._width,r=this._height;t.maxX=-e._x*n,t.minX=t.maxX+n,t.maxY=-e._y*r,t.minY=t.maxY+r}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.minX,n=this.bounds.minY,r=-e*this._anchor._x;let s=0;return t.x>=r&&t.x<=r+e&&(s=-n*this._anchor._y,t.y>=s&&t.y<=s+n)}onViewUpdate(){if(this._boundsDirty=!0,this._didTilingSpriteUpdate=!0,this._didChangeId+=4096,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t==null?void 0:t.texture){const n=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(n)}this._texture=null}};aa.defaultOptions={texture:B.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let He=aa;class tf extends N{constructor(t,e){const{text:n,resolution:r,style:s,anchor:o,width:a,height:l,roundPixels:h,...u}=t;super({...u}),this.batched=!0,this.resolution=null,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new It,this._boundsDirty=!0,this._styleClass=e,this.text=n??"",this.style=s,this.resolution=r??null,this.allowChildren=!1,this._anchor=new it({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=h??!1,a&&(this.width=a),l&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){let n,r;typeof t!="object"?(n=t,r=e??t):(n=t.width,r=t.height??t.width),n!==void 0&&this._setWidth(n,this.bounds.width),r!==void 0&&this._setHeight(r,this.bounds.height)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.maxX,n=this.bounds.maxY,r=-e*this.anchor.x;let s=0;return t.x>=r&&t.x<=r+e&&(s=-n*this.anchor.y,t.y>=s&&t.y<=s+n)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function ef(i,t){let e=i[0]??{};return(typeof e=="string"||i[1])&&(U(Q,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:i[1]}),e}const nf=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function rf(i){const t=typeof i.fontSize=="number"?`${i.fontSize}px`:i.fontSize;let e=i.fontFamily;Array.isArray(i.fontFamily)||(e=i.fontFamily.split(","));for(let n=e.length-1;n>=0;n--){let r=e[n].trim();!/([\"\'])[^\'\"]+\1/.test(r)&&!nf.includes(r)&&(r=`"${r}"`),e[n]=r}return`${i.fontStyle} ${i.fontVariant} ${i.fontWeight} ${t} ${e.join(",")}`}const On={willReadFrequently:!0},Ct=class M{static get experimentalLetterSpacingSupported(){let t=M._experimentalLetterSpacingSupported;if(t!==void 0){const e=lt.get().getCanvasRenderingContext2D().prototype;t=M._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,n,r,s,o,a,l,h){this.text=t,this.style=e,this.width=n,this.height=r,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=h}static measureText(t=" ",e,n=M._canvas,r=e.wordWrap){var x;const s=`${t}:${e.styleKey}`;if(M._measurementCache[s])return M._measurementCache[s];const o=rf(e),a=M.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=M.__context;l.font=o;const u=(r?M._wordWrap(t,e,n):t).split(/(?:\r\n|\r|\n)/),c=new Array(u.length);let f=0;for(let y=0;y<u.length;y++){const _=M._measureText(u[y],e.letterSpacing,l);c[y]=_,f=Math.max(f,_)}const d=((x=e._stroke)==null?void 0:x.width)||0;let p=f+d;e.dropShadow&&(p+=e.dropShadow.distance);const g=e.lineHeight||a.fontSize+d;let m=Math.max(g,a.fontSize+d*2)+(u.length-1)*(g+e.leading);return e.dropShadow&&(m+=e.dropShadow.distance),new M(t,e,p,m,u,c,g+e.leading,f,a)}static _measureText(t,e,n){let r=!1;M.experimentalLetterSpacingSupported&&(M.experimentalLetterSpacing?(n.letterSpacing=`${e}px`,n.textLetterSpacing=`${e}px`,r=!0):(n.letterSpacing="0px",n.textLetterSpacing="0px"));let s=n.measureText(t).width;return s>0&&(r?s-=e:s+=(M.graphemeSegmenter(t).length-1)*e),s}static _wordWrap(t,e,n=M._canvas){const r=n.getContext("2d",On);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:h,whiteSpace:u}=e,c=M._collapseSpaces(u),f=M._collapseNewlines(u);let d=!c;const p=e.wordWrapWidth+h,g=M._tokenize(t);for(let m=0;m<g.length;m++){let v=g[m];if(M._isNewline(v)){if(!f){a+=M._addLine(o),d=!c,o="",s=0;continue}v=" "}if(c){const y=M.isBreakingSpace(v),_=M.isBreakingSpace(o[o.length-1]);if(y&&_)continue}const x=M._getFromCache(v,h,l,r);if(x>p)if(o!==""&&(a+=M._addLine(o),o="",s=0),M.canBreakWords(v,e.breakWords)){const y=M.wordWrapSplit(v);for(let _=0;_<y.length;_++){let F=y[_],R=F,A=1;for(;y[_+A];){const b=y[_+A];if(!M.canBreakChars(R,b,v,_,e.breakWords))F+=b;else break;R=b,A++}_+=A-1;const z=M._getFromCache(F,h,l,r);z+s>p&&(a+=M._addLine(o),d=!1,o="",s=0),o+=F,s+=z}}else{o.length>0&&(a+=M._addLine(o),o="",s=0);const y=m===g.length-1;a+=M._addLine(v,!y),d=!1,o="",s=0}else x+s>p&&(d=!1,a+=M._addLine(o),o="",s=0),(o.length>0||!M.isBreakingSpace(v)||d)&&(o+=v,s+=x)}return a+=M._addLine(o,!1),a}static _addLine(t,e=!0){return t=M._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,n,r){let s=n[t];return typeof s!="number"&&(s=M._measureText(t,e,r)+e,n[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const n=t[e];if(!M.isBreakingSpace(n))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:M._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:M._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let n="";if(typeof t!="string")return e;for(let r=0;r<t.length;r++){const s=t[r],o=t[r+1];if(M.isBreakingSpace(s,o)||M._isNewline(s)){n!==""&&(e.push(n),n=""),e.push(s);continue}n+=s}return n!==""&&e.push(n),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,n,r,s){return!0}static wordWrapSplit(t){return M.graphemeSegmenter(t)}static measureFont(t){if(M._fonts[t])return M._fonts[t];const e=M._context;e.font=t;const n=e.measureText(M.METRICS_STRING+M.BASELINE_SYMBOL),r={ascent:n.actualBoundingBoxAscent,descent:n.actualBoundingBoxDescent,fontSize:n.actualBoundingBoxAscent+n.actualBoundingBoxDescent};return M._fonts[t]=r,r}static clearMetrics(t=""){t?delete M._fonts[t]:M._fonts={}}static get _canvas(){if(!M.__canvas){let t;try{const e=new OffscreenCanvas(0,0),n=e.getContext("2d",On);if(n!=null&&n.measureText)return M.__canvas=e,e;t=lt.get().createCanvas()}catch{t=lt.get().createCanvas()}t.width=t.height=10,M.__canvas=t}return M.__canvas}static get _context(){return M.__context||(M.__context=M._canvas.getContext("2d",On)),M.__context}};Ct.METRICS_STRING="|ÉqÅ";Ct.BASELINE_SYMBOL="M";Ct.BASELINE_MULTIPLIER=1.4;Ct.HEIGHT_MULTIPLIER=2;Ct.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const i=new Intl.Segmenter;return t=>[...i.segment(t)].map(e=>e.segment)}return i=>[...i]})();Ct.experimentalLetterSpacing=!1;Ct._fonts={};Ct._newlines=[10,13];Ct._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];Ct._measurementCache={};let sf=Ct;const Bs=["_fontFamily","_fontStyle","_fontSize","_fontVariant","_fontWeight","_breakWords","_align","_leading","_letterSpacing","_lineHeight","_textBaseline","_whiteSpace","_wordWrap","_wordWrapWidth","_padding","_cssOverrides","_trim"];function of(i){const t=[];let e=0;for(let n=0;n<Bs.length;n++){const r=Bs[n];t[e++]=i[r]}return e=la(i._fill,t,e),e=af(i._stroke,t,e),t.join("-")}function la(i,t,e){var n;return i&&(t[e++]=i.color,t[e++]=i.alpha,t[e++]=(n=i.fill)==null?void 0:n.uid),e}function af(i,t,e){return i&&(e=la(i,t,e),t[e++]=i.width,t[e++]=i.alignment,t[e++]=i.cap,t[e++]=i.join,t[e++]=i.miterLimit),e}const Ar=class _e extends Ot{constructor(t={}){super(),lf(t);const e={..._e.defaultTextStyle,...t};for(const n in e){const r=n;this[r]=e[n]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow={..._e.defaultDropShadow,...t}:this._dropShadow=t?{..._e.defaultDropShadow}:null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._fill=Xt(t===0?"black":t,jt.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._stroke=Xt(t,jt.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=of(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=_e.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new _e({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var n,r,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(n=this._fill)!=null&&n.texture&&this._fill.texture.destroy(a),(r=this._originalFill)!=null&&r.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}};Ar.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Ar.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let ua=Ar;function lf(i){const t=i;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=ua.defaultDropShadow;i.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){U(Q,"strokeThickness is now a part of stroke");const e=t.stroke;i.stroke={color:e,width:t.strokeThickness}}if(Array.isArray(t.fill)){U(Q,"gradient fill is now a fill pattern: `new FillGradient(...)`");const e=new qo(0,0,0,i.fontSize*1.7),n=t.fill.map(r=>j.shared.setValue(r).toNumber());n.forEach((r,s)=>{const o=t.fillGradientStops[s]??s/n.length;e.addColorStop(o,r)}),i.fill={fill:e}}}class Mi extends tf{constructor(...t){const e=ef(t,"Text");super(e,ua),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,e=this._style.padding,n=this._anchor,r=sf.measureText(this._text,this._style),{width:s,height:o}=r;t.minX=-n._x*s-e,t.maxX=t.minX+s+e*2,t.minY=-n._y*o-e,t.maxY=t.minY+o+e*2}}const ha=class ca extends Qc{constructor(...t){super({});let e=t[0]??{};typeof e=="number"&&(U(Q,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),e={width:e,height:t[1],verticesX:t[2],verticesY:t[3]}),this.build(e)}build(t){t={...ca.defaultOptions,...t},this.verticesX=this.verticesX??t.verticesX,this.verticesY=this.verticesY??t.verticesY,this.width=this.width??t.width,this.height=this.height??t.height;const e=this.verticesX*this.verticesY,n=[],r=[],s=[],o=this.verticesX-1,a=this.verticesY-1,l=this.width/o,h=this.height/a;for(let c=0;c<e;c++){const f=c%this.verticesX,d=c/this.verticesX|0;n.push(f*l,d*h),r.push(f/o,d/a)}const u=o*a;for(let c=0;c<u;c++){const f=c%o,d=c/o|0,p=d*this.verticesX+f,g=d*this.verticesX+f+1,m=(d+1)*this.verticesX+f,v=(d+1)*this.verticesX+f+1;s.push(p,g,m,g,v,m)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(r),this.indexBuffer.data=new Uint32Array(s),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};ha.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let uf=ha;const fa=class da extends uf{constructor(t={}){t={...da.defaultOptions,...t},super({width:t.width,height:t.height,verticesX:4,verticesY:4}),this.update(t)}update(t){this.width=t.width??this.width,this.height=t.height??this.height,this._originalWidth=t.originalWidth??this._originalWidth,this._originalHeight=t.originalHeight??this._originalHeight,this._leftWidth=t.leftWidth??this._leftWidth,this._rightWidth=t.rightWidth??this._rightWidth,this._topHeight=t.topHeight??this._topHeight,this._bottomHeight=t.bottomHeight??this._bottomHeight,this.updateUvs(),this.updatePositions()}updatePositions(){const t=this.positions,e=this._leftWidth+this._rightWidth,n=this.width>e?1:this.width/e,r=this._topHeight+this._bottomHeight,s=this.height>r?1:this.height/r,o=Math.min(n,s);t[9]=t[11]=t[13]=t[15]=this._topHeight*o,t[17]=t[19]=t[21]=t[23]=this.height-this._bottomHeight*o,t[25]=t[27]=t[29]=t[31]=this.height,t[2]=t[10]=t[18]=t[26]=this._leftWidth*o,t[4]=t[12]=t[20]=t[28]=this.width-this._rightWidth*o,t[6]=t[14]=t[22]=t[30]=this.width,this.getBuffer("aPosition").update()}updateUvs(){const t=this.uvs;t[0]=t[8]=t[16]=t[24]=0,t[1]=t[3]=t[5]=t[7]=0,t[6]=t[14]=t[22]=t[30]=1,t[25]=t[27]=t[29]=t[31]=1;const e=1/this._originalWidth,n=1/this._originalHeight;t[2]=t[10]=t[18]=t[26]=e*this._leftWidth,t[9]=t[11]=t[13]=t[15]=n*this._topHeight,t[4]=t[12]=t[20]=t[28]=1-e*this._rightWidth,t[17]=t[19]=t[21]=t[23]=1-n*this._bottomHeight,this.getBuffer("aUV").update()}};fa.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let xe=fa;const pa=class ma extends N{constructor(t){var c,f,d,p;t instanceof B&&(t={texture:t});const{width:e,height:n,leftWidth:r,rightWidth:s,topHeight:o,bottomHeight:a,texture:l,roundPixels:h,...u}=t;super({label:"NineSliceSprite",...u}),this._roundPixels=0,this.renderPipeId="nineSliceSprite",this.batched=!0,this._didSpriteUpdate=!0,this.bounds={minX:0,minY:0,maxX:0,maxY:0},this._leftWidth=r??((c=l==null?void 0:l.defaultBorders)==null?void 0:c.left)??xe.defaultOptions.leftWidth,this._topHeight=o??((f=l==null?void 0:l.defaultBorders)==null?void 0:f.top)??xe.defaultOptions.topHeight,this._rightWidth=s??((d=l==null?void 0:l.defaultBorders)==null?void 0:d.right)??xe.defaultOptions.rightWidth,this._bottomHeight=a??((p=l==null?void 0:l.defaultBorders)==null?void 0:p.bottom)??xe.defaultOptions.bottomHeight,this.bounds.maxX=this._width=e??l.width??xe.defaultOptions.width,this.bounds.maxY=this._height=n??l.height??xe.defaultOptions.height,this.allowChildren=!1,this.texture=l??ma.defaultOptions.texture,this.roundPixels=h??!1}get width(){return this._width}set width(t){this.bounds.maxX=this._width=t,this.onViewUpdate()}get height(){return this._height}set height(t){this.bounds.maxY=this._height=t,this.onViewUpdate()}get leftWidth(){return this._leftWidth}set leftWidth(t){this._leftWidth=t,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(t){this._topHeight=t,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(t){this._rightWidth=t,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(t){this._bottomHeight=t,this.onViewUpdate()}get texture(){return this._texture}set texture(t){t||(t=B.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds;return t.x>=e.minX&&t.x<=e.maxX&&t.y>=e.minY&&t.y<=e.maxY}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const n=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(n)}this._texture=null,this.bounds=null}};pa.defaultOptions={texture:B.EMPTY};let Fi=pa;yt.add(fl,dl);const Us={bundles:[{name:"background",assets:{background01:"backgrounds/background01.png",ground01:"backgrounds/ground01.png",clouds01:"backgrounds/clouds01.png",mountain01:"backgrounds/mountain01.png",trees01:"backgrounds/trees01.png"}},{name:"buildings",assets:{buildings:"buildings/buildings.json"}},{name:"testBundle",assets:{displacement:"https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png"}},{name:"fonts",assets:{tiny:"fonts/tiny.ttf"}}]};var Yt={},Zt={};Object.defineProperty(Zt,"__esModule",{value:!0});Zt.Collector=void 0;class hf{constructor(t){this.emit=(...e)=>{t.emitCollecting(this,e)}}}Zt.Collector=hf;var Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});Hi.CollectorArray=void 0;const cf=Zt;class ff extends cf.Collector{constructor(){super(...arguments),this.result=[]}handleResult(t){return this.result.push(t),!0}getResult(){return this.result}reset(){this.result.length=0}}Hi.CollectorArray=ff;var Xi={};Object.defineProperty(Xi,"__esModule",{value:!0});Xi.CollectorLast=void 0;const df=Zt;class pf extends df.Collector{handleResult(t){return this.result=t,!0}getResult(){return this.result}reset(){delete this.result}}Xi.CollectorLast=pf;var Yi={};Object.defineProperty(Yi,"__esModule",{value:!0});Yi.CollectorUntil0=void 0;const mf=Zt;class gf extends mf.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,this.result}getResult(){return this.result}reset(){this.result=!1}}Yi.CollectorUntil0=gf;var ji={};Object.defineProperty(ji,"__esModule",{value:!0});ji.CollectorWhile0=void 0;const xf=Zt;class vf extends xf.Collector{constructor(){super(...arguments),this.result=!1}handleResult(t){return this.result=t,!this.result}getResult(){return this.result}reset(){this.result=!1}}ji.CollectorWhile0=vf;var qi={},Ki={};Object.defineProperty(Ki,"__esModule",{value:!0});Ki.SignalConnectionImpl=void 0;class yf{constructor(t,e){this.link=t,this.parentCleanup=e}disconnect(){return this.link!==null?(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0):!1}set enabled(t){this.link&&this.link.setEnabled(t)}get enabled(){return this.link!==null&&this.link.isEnabled()}}Ki.SignalConnectionImpl=yf;var Zi={};Object.defineProperty(Zi,"__esModule",{value:!0});Zi.SignalLink=void 0;class Mr{constructor(t=null,e=null,n=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=t??this,this.next=e??this,this.order=n}isEnabled(){return this.enabled&&!this.newLink}setEnabled(t){this.enabled=t}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(t,e){let n=this.prev;for(;n!==this&&!(n.order<=e);)n=n.prev;const r=new Mr(n,n.next,e);return r.callback=t,n.next=r,r.next.prev=r,r}}Zi.SignalLink=Mr;Object.defineProperty(qi,"__esModule",{value:!0});qi.Signal=void 0;const _f=Ki,bf=Zi;class Sf{constructor(){this.head=new bf.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(t,e=0){this.connectionsCount++;const n=this.head.insert(t,e);return this.emitDepth>0&&(this.hasNewLinks=!0,n.newLink=!0),new _f.SignalConnectionImpl(n,()=>this.decrementConnectionCount())}decrementConnectionCount(){this.connectionsCount--}disconnect(t){for(let e=this.head.next;e!==this.head;e=e.next)if(e.callback===t)return this.decrementConnectionCount(),e.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...t){this.emitDepth++;for(let e=this.head.next;e!==this.head;e=e.next)e.isEnabled()&&e.callback&&e.callback.apply(null,t);this.emitDepth--,this.unsetNewLink()}emitCollecting(t,e){this.emitDepth++;for(let n=this.head.next;n!==this.head;n=n.next)if(n.isEnabled()&&n.callback){const r=n.callback.apply(null,e);if(!t.handleResult(r))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&this.emitDepth===0){for(let t=this.head.next;t!==this.head;t=t.next)t.newLink=!1;this.hasNewLinks=!1}}}qi.Signal=Sf;var Qi={};Object.defineProperty(Qi,"__esModule",{value:!0});Qi.SignalConnections=void 0;class wf{constructor(){this.list=[]}add(t){this.list.push(t)}disconnectAll(){for(const t of this.list)t.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return this.list.length===0}}Qi.SignalConnections=wf;(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.SignalConnections=i.Signal=i.CollectorWhile0=i.CollectorUntil0=i.CollectorLast=i.CollectorArray=i.Collector=void 0;var t=Zt;Object.defineProperty(i,"Collector",{enumerable:!0,get:function(){return t.Collector}});var e=Hi;Object.defineProperty(i,"CollectorArray",{enumerable:!0,get:function(){return e.CollectorArray}});var n=Xi;Object.defineProperty(i,"CollectorLast",{enumerable:!0,get:function(){return n.CollectorLast}});var r=Yi;Object.defineProperty(i,"CollectorUntil0",{enumerable:!0,get:function(){return r.CollectorUntil0}});var s=ji;Object.defineProperty(i,"CollectorWhile0",{enumerable:!0,get:function(){return s.CollectorWhile0}});var o=qi;Object.defineProperty(i,"Signal",{enumerable:!0,get:function(){return o.Signal}});var a=Qi;Object.defineProperty(i,"SignalConnections",{enumerable:!0,get:function(){return a.SignalConnections}})})(Yt);var Cf=Object.defineProperty,Pf=(i,t,e)=>t in i?Cf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,$t=(i,t,e)=>(Pf(i,typeof t!="symbol"?t+"":t,e),e);class Tf{constructor(){$t(this,"_isMouseIn"),$t(this,"_isDown"),$t(this,"onDown"),$t(this,"onUp"),$t(this,"onUpOut"),$t(this,"onOut"),$t(this,"onPress"),$t(this,"onHover"),this.onPress=new Yt.Signal,this.onDown=new Yt.Signal,this.onUp=new Yt.Signal,this.onHover=new Yt.Signal,this.onOut=new Yt.Signal,this.onUpOut=new Yt.Signal}connectEvents(t){Pi.any?(t.on("pointerdown",this.processDown,this),t.on("pointerup",this.processUp,this),t.on("pointerupoutside",this.processUpOut,this),t.on("pointerout",this.processOut,this),t.on("pointertap",this.processPress,this),t.on("pointerover",this.processOver,this)):(t.on("mousedown",this.processDown,this),t.on("mouseup",this.processUp,this),t.on("mouseupoutside",this.processUpOut,this),t.on("mouseout",this.processOut,this),t.on("click",this.processPress,this),t.on("mouseover",this.processOver,this))}disconnectEvents(t){Pi.any?(t.off("pointerdown",this.processDown,this),t.off("pointerup",this.processUp,this),t.off("pointerupoutside",this.processUpOut,this),t.off("pointerout",this.processOut,this),t.off("pointertap",this.processPress,this),t.off("pointerover",this.processOver,this)):(t.off("mousedown",this.processDown,this),t.off("mouseup",this.processUp,this),t.off("mouseupoutside",this.processUpOut,this),t.off("mouseout",this.processOut,this),t.off("click",this.processPress,this),t.off("mouseover",this.processOver,this))}processDown(t){this._isDown=!0,this.onDown.emit(this,t),this.down(t)}processUp(t){this._isDown&&(this.onUp.emit(this,t),this.up(t)),this._isDown=!1}processUpOut(t){this._isDown&&(this.onUp.emit(this,t),this.onUpOut.emit(this,t),this.up(t),this.upOut(t)),this._isDown=!1}processOut(t){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,t),this.out(t))}processPress(t){this._isDown=!1,this.onPress.emit(this,t),this.press(t)}processOver(t){Pi.any||(this._isMouseIn=!0,this.onHover.emit(this,t),this.hover(t))}down(t){}up(t){}upOut(t){}out(t){}press(t){}hover(t){}get isDown(){return this._isDown}}var Af=Object.defineProperty,Mf=(i,t,e)=>t in i?Af(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ht=(i,t,e)=>(Mf(i,typeof t!="symbol"?t+"":t,e),e);class Ff extends Tf{constructor(t){super(),Ht(this,"_view"),t&&(this.view=t,this.enabled=!0)}set view(t){!!this._view&&this.disconnectEvents(this._view),this._view=t,this.connectEvents(this._view)}get view(){return this._view}set enabled(t){if(!this.view){console.error("Button view is not set. Please set it before enabling the button.");return}this.view.eventMode=t?"static":"auto",this.view.cursor=t?"pointer":"default",!t&&this.isDown&&this.processUp()}get enabled(){return this.view.eventMode==="static"}}class If extends N{constructor(t){super(),Ht(this,"button"),Ht(this,"onDown"),Ht(this,"onUp"),Ht(this,"onUpOut"),Ht(this,"onOut"),Ht(this,"onPress"),Ht(this,"onHover"),this.button=new Ff(this),this.button.enabled=!0,t&&this.addChild(t),this.onPress=this.button.onPress,this.onDown=this.button.onDown,this.onUp=this.button.onUp,this.onHover=this.button.onHover,this.onOut=this.button.onOut,this.onUpOut=this.button.onUpOut}set enabled(t){this.button.enabled=t}get enabled(){return this.button.enabled}}function ks(i){return typeof i=="string"?Ft.from(i):i}var zf=Object.defineProperty,Of=(i,t,e)=>t in i?zf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Wt=(i,t,e)=>(Of(i,typeof t!="symbol"?t+"":t,e),e);class Bf extends N{constructor(t){super(),Wt(this,"bg"),Wt(this,"fill"),Wt(this,"fillMask"),Wt(this,"progressStart",0),Wt(this,"_progress",0),Wt(this,"options"),Wt(this,"innerView"),Wt(this,"_view"),this.options=t,this.innerView=new N,this.addChild(this.innerView),t!=null&&t.bg&&(t!=null&&t.fill)&&this.init(t)}init({bg:t,fill:e,fillPaddings:n,progress:r}){this.setBackground(t),this.setFill(e,n),this.progress=r}setBackground(t){var e;this.bg&&this.bg.destroy(),(e=this.options)!=null&&e.nineSliceSprite&&(typeof t=="string"?this.bg=new Fi({texture:B.from(t),leftWidth:this.options.nineSliceSprite.bg[0],topHeight:this.options.nineSliceSprite.bg[1],rightWidth:this.options.nineSliceSprite.bg[2],bottomHeight:this.options.nineSliceSprite.bg[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),t instanceof ft&&(this.bg=t),!this.bg&&(typeof t=="string"||t instanceof Ft)&&(this.bg=ks(t)),this.innerView.addChildAt(this.bg,0)}setFill(t,e){var u;if(this.fill&&this.fill.destroy(),this.bg instanceof Ft&&t===this.bg){console.warn("Can not use same Sprite instance for bg and fill.");return}(u=this.options)!=null&&u.nineSliceSprite&&(typeof t=="string"?this.fill=new Fi({texture:B.from(t),leftWidth:this.options.nineSliceSprite.fill[0],topHeight:this.options.nineSliceSprite.fill[1],rightWidth:this.options.nineSliceSprite.fill[2],bottomHeight:this.options.nineSliceSprite.fill[3]}):console.warn("NineSliceSprite can not be used with views set as Container.")),this.fill||(t instanceof ft?this.fill=t:this.fill=ks(t)),this.innerView.addChildAt(this.fill,1);const n=(e==null?void 0:e.left)??0,r=(e==null?void 0:e.top)??0;this.fill.x=n,this.fill.y=r,this.fillMask&&(this.fill.mask=null,this.fillMask.destroy());const s=this.fill.width/2,o=this.fill.width/2,a=this.fill.height/2,l=this.fill.height/2;let h=B.WHITE;this.fill instanceof Ft&&this.fill.texture&&(h=this.fill.texture),this.fillMask=new Fi({texture:h,leftWidth:s,topHeight:a,rightWidth:o,bottomHeight:l}),this.fillMask.position.copyFrom(this.fill),this.addChild(this.fillMask),this.fill.mask=this.fillMask}validate(t){return t=Math.round(t),t<0?0:t>100?100:t}set progress(t){this._progress=this.validate(t),this.fill&&this.fillMask&&(this.fill.mask=null,this.fillMask.width=this.fill.width/100*(this._progress-this.progressStart),this.fillMask.x=this.progressStart/100*this.fill.width+this.fill.x,this.fillMask.height=this.fill.height,this.fill.mask=this.fillMask)}get progress(){return this._progress}set width(t){var e,n,r;if((e=this.options)!=null&&e.nineSliceSprite){if(this.bg&&(this.bg.width=t),this.fill){const s=((n=this.options.fillPaddings)==null?void 0:n.left)??0,o=((r=this.options.fillPaddings)==null?void 0:r.right)??0;this.fill.width=t-s-o,this.fillMask.width=t-s-o}this.progress=this._progress}else super.width=t}get width(){return super.width}set height(t){var e,n,r;if((e=this.options)!=null&&e.nineSliceSprite){if(this.bg&&(this.bg.height=t),this.fill){const s=((n=this.options.fillPaddings)==null?void 0:n.top)??0,o=((r=this.options.fillPaddings)==null?void 0:r.bottom)??0;this.fill.height=t-s-o,this.fillMask.height=t-s-o}this.progress=this._progress}else super.height=t}get height(){return super.height}}var Uf=Object.defineProperty,kf=(i,t,e)=>t in i?Uf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Si=(i,t,e)=>(kf(i,typeof t!="symbol"?t+"":t,e),e);class Ef extends N{constructor(t){var e;super(),Si(this,"options"),Si(this,"view"),Si(this,"_type"),Si(this,"children",[]),t&&this.init(t),(e=t==null?void 0:t.items)==null||e.forEach(n=>this.addChild(n)),this.on("added",()=>this.arrangeChildren()),this.on("childAdded",()=>this.arrangeChildren())}init(t){this.options=t,t!=null&&t.type&&(this.type=t.type),t!=null&&t.children&&t.children.forEach(e=>this.addChild(e))}set type(t){this._type=t,this.arrangeChildren()}get type(){return this._type}set elementsMargin(t){if(!this.options)throw new Error("List has not been initiated!");this.options.elementsMargin=t,this.arrangeChildren()}get elementsMargin(){var t;return((t=this.options)==null?void 0:t.elementsMargin)??0}set padding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.padding=t,this.options.vertPadding=t,this.options.horPadding=t,this.options.leftPadding=t,this.options.rightPadding=t,this.options.topPadding=t,this.options.bottomPadding=t,this.arrangeChildren()}get padding(){var t;return((t=this.options)==null?void 0:t.padding)??0}set vertPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.vertPadding=t,this.options.topPadding=t,this.options.bottomPadding=t,this.arrangeChildren()}get vertPadding(){var t;return((t=this.options)==null?void 0:t.vertPadding)??this.padding??0}set horPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.horPadding=t,this.options.leftPadding=t,this.options.rightPadding=t,this.arrangeChildren()}get horPadding(){var t;return((t=this.options)==null?void 0:t.horPadding)??this.padding??0}set leftPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.leftPadding=t,this.arrangeChildren()}get leftPadding(){var t;return((t=this.options)==null?void 0:t.leftPadding)??this.horPadding}set rightPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.rightPadding=t,this.arrangeChildren()}get rightPadding(){var t;return((t=this.options)==null?void 0:t.rightPadding)??this.horPadding}set topPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.topPadding=t,this.arrangeChildren()}get topPadding(){var t;return((t=this.options)==null?void 0:t.topPadding)??this.vertPadding}set bottomPadding(t){if(!this.options)throw new Error("List has not been initiated!");this.options.bottomPadding=t,this.arrangeChildren()}get bottomPadding(){var t;return((t=this.options)==null?void 0:t.bottomPadding)??this.vertPadding}arrangeChildren(){var o,a;let t=0,e=this.leftPadding,n=this.topPadding;const r=((o=this.options)==null?void 0:o.elementsMargin)??0;let s=(a=this.parent)==null?void 0:a.width;this.rightPadding&&(s-=this.rightPadding),this.children.forEach((l,h)=>{switch(this.type){case"vertical":l.y=n,l.x=e,n+=r+l.height;break;case"horizontal":l.x=e,l.y=n,e+=r+l.width;break;default:l.x=e,l.y=n,l.x+l.width>s&&h>0&&(n+=r+t,e=this.leftPadding,l.x=e,l.y=n,t=0),t=Math.max(t,l.height),e+=r+l.width;break}})}removeItem(t){const e=this.children[t];e&&(this.removeChild(e),this.arrangeChildren())}}var Rf=Object.defineProperty,Df=(i,t,e)=>t in i?Rf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Xe=(i,t,e)=>(Df(i,typeof t!="symbol"?t+"":t,e),e);class Lf{constructor(t={}){Xe(this,"x"),Xe(this,"ax"),Xe(this,"dx"),Xe(this,"tx"),Xe(this,"_options"),this.x=0,this.ax=0,this.dx=0,this.tx=0,this._options=t,this._options.max=t.max||160,this._options.damp=t.damp||.8,this._options.springiness=t.springiness||.1}update(){this.ax=(this.tx-this.x)*this._options.springiness,this.dx+=this.ax,this.dx*=this._options.damp,this.dx<-this._options.max?this.dx=-this._options.max:this.dx>this._options.max&&(this.dx=this._options.max),this.x+=this.dx}reset(){this.x=0,this.ax=0,this.dx=0,this.tx=0}get max(){return this._options.max}set max(t){this._options.max=t}get damp(){return this._options.damp}set damp(t){this._options.damp=t}get springiness(){return this._options.springiness}set springiness(t){this._options.springiness=t}}var Gf=Object.defineProperty,Nf=(i,t,e)=>t in i?Gf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ve=(i,t,e)=>(Nf(i,typeof t!="symbol"?t+"":t,e),e);class $f{constructor(){ve(this,"done"),ve(this,"to"),ve(this,"_spring"),ve(this,"_pos"),ve(this,"_speed"),ve(this,"_correctSpeed"),this._spring=new Lf,this._pos=0,this.to=0}start(t,e,n){this._speed=t,this._pos=e,this.to=n,this.done=!1,this._spring.x=this._pos,this._spring.tx=this.to;const r=this.to-this._pos,s=Math.abs(r)/r,o=Math.abs(this._speed)/this._speed;s!==o?this._correctSpeed=!0:this._correctSpeed=!1}update(){if(this._correctSpeed)this._speed*=.6,Math.abs(this._speed)<2&&(this._correctSpeed=!1),this._pos+=this._speed,this._spring.x=this._pos;else{const t=this.to-this._pos;Math.abs(t)<.05?(this._pos=this.to,this.done=!0):(this._spring.tx=this.to,this._spring.update(),this._pos=this._spring.x)}return this._pos}cancel(){}}var Wf=Object.defineProperty,Vf=(i,t,e)=>t in i?Wf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,dt=(i,t,e)=>(Vf(i,typeof t!="symbol"?t+"":t,e),e);class Es{constructor(t={}){dt(this,"position",0),dt(this,"constrain",!0),dt(this,"min",0),dt(this,"max",0),dt(this,"maxSpeed",400),dt(this,"_ease"),dt(this,"_offset",0),dt(this,"_prev",0),dt(this,"_speed",0),dt(this,"_hasStopped"),dt(this,"_targetSpeed",0),dt(this,"_speedChecker",0),dt(this,"_grab",0),dt(this,"_activeEase"),this.constrain=t.constrain??!0,this.maxSpeed=t.maxSpeed??400,this._ease=t.ease??new $f}set value(t){this._speed=0,this.position=t}get value(){return this.position}grab(t){this._grab=t,this._offset=this.position-t,this._speedChecker=0,this._targetSpeed=this._speed=0,this._hasStopped=!1}hold(t){this._speedChecker++,this.position=t+this._offset,this._speedChecker>1&&(this._targetSpeed=this.position-this._prev),this._speed+=(this._targetSpeed-this._speed)/2,this._speed>this.maxSpeed?this._speed=this.maxSpeed:this._speed<-this.maxSpeed&&(this._speed=-this.maxSpeed),this._prev=this.position,this.constrain&&(this._activeEase=null,this.position>this.min?this.position-=(this.position-this.min)/1.5:this.position<this.max&&(this.position+=(this.max-this.position)/1.5))}slide(t=!1){this._hasStopped||(this.constrain?this._updateConstrain(t):this._updateDefault())}get moveAmount(){return-(this.position-this._offset-this._grab)}_updateDefault(){this._speed*=.9,this.position+=this._speed,(this._speed<0?this._speed*-1:this._speed)<.01&&(this._hasStopped=!0)}_updateConstrain(t=!1){const e=this.max;t?(this.value>0&&(this.value=0),this.value>0&&(this.value=0),this.value<this.max&&(this.value=this.max),this.value<this.max&&(this.value=this.max)):this.position>this.min||this.position<e||this._activeEase?(this._activeEase||(this._activeEase=this._ease,this.position>this.min?this._activeEase.start(this._speed,this.position,this.min):this._activeEase.start(this._speed,this.position,e)),this.position=this._activeEase.update(),this._activeEase.done&&(this.position=this._activeEase.to,this._speed=0,this._activeEase=null)):this._updateDefault()}}var Hf=Object.defineProperty,Xf=(i,t,e)=>t in i?Hf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Vt=(i,t,e)=>(Xf(i,typeof t!="symbol"?t+"":t,e),e);class Yf{constructor(t){Vt(this,"xAxis"),Vt(this,"yAxis"),Vt(this,"_isDown"),Vt(this,"_globalPosition"),Vt(this,"_frame"),Vt(this,"_bounds"),Vt(this,"_dirty"),Vt(this,"disableEasing",!1),this.xAxis=new Es({ease:t.xEase,maxSpeed:t.maxSpeed,constrain:t.constrain}),this.yAxis=new Es({ease:t.yEase,maxSpeed:t.maxSpeed,constrain:t.constrain}),this.disableEasing=t.disableEasing??!1,this._frame=new rt,this._bounds=new rt,this._globalPosition=new ut}pointerDown(t){this._globalPosition=t,this.xAxis.grab(t.x),this.yAxis.grab(t.y),this._isDown=!0}pointerUp(){this._isDown=!1}pointerMove(t){this._globalPosition=t}update(){this._dirty&&(this._dirty=!1,this.xAxis.min=this._bounds.left,this.xAxis.min=this._bounds.right-this._frame.width,this.xAxis.min=this._bounds.top,this.xAxis.min=this._bounds.bottom-this._frame.height),this._isDown?(this.xAxis.hold(this._globalPosition.x),this.yAxis.hold(this._globalPosition.y)):(this.xAxis.slide(this.disableEasing),this.yAxis.slide(this.disableEasing))}resize(t,e){this._frame.x=0,this._frame.width=t,this._frame.y=0,this._frame.height=e,this._dirty=!0}setBounds(t,e,n,r){this._bounds.x=t,this._bounds.width=e-t,this._bounds.y=n,this._bounds.height=r-n,this._dirty=!0}get x(){return this.xAxis.value}get y(){return this.yAxis.value}}var jf=Object.defineProperty,qf=(i,t,e)=>t in i?jf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Z=(i,t,e)=>(qf(i,typeof t!="symbol"?t+"":t,e),e);class Kf extends N{constructor(t){super(),Z(this,"background"),Z(this,"borderMask"),Z(this,"lastWidth"),Z(this,"lastHeight"),Z(this,"__width",0),Z(this,"__height",0),Z(this,"_dimensionChanged",!1),Z(this,"list"),Z(this,"_trackpad"),Z(this,"isDragging",0),Z(this,"interactiveStorage",[]),Z(this,"visibleItems",[]),Z(this,"pressedChild"),Z(this,"ticker",Dt.shared),Z(this,"options"),Z(this,"stopRenderHiddenItemsTimeout"),Z(this,"onMouseScrollBinding",this.onMouseScroll.bind(this)),Z(this,"dragStarTouchPoint"),Z(this,"isOver",!1),Z(this,"proximityRange"),Z(this,"proximityStatusCache",[]),Z(this,"lastScrollX"),Z(this,"lastScrollY"),Z(this,"proximityCheckFrameCounter",0),Z(this,"onProximityChange",new Yt.Signal),t&&this.init(t),this.ticker.add(this.update,this)}init(t){this.options=t,this.setBackground(t.background),this.__width=t.width|this.background.width,this.__height=t.height|this.background.height,this.proximityRange=t.proximityRange??0,this.list||(this.list=new Ef,super.addChild(this.list)),this.list.init({type:t.type,elementsMargin:t.elementsMargin,padding:t.padding,vertPadding:t.vertPadding,horPadding:t.horPadding,topPadding:t.topPadding,bottomPadding:t.bottomPadding,leftPadding:t.leftPadding,rightPadding:t.rightPadding}),this.addItems(t.items),this.hasBounds&&(this.addMask(),this.makeScrollable()),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.options.globalScroll=t.globalScroll??!0,this.options.shiftScroll=t.shiftScroll??!1,this.resize()}get hasBounds(){return!!this.__width||!!this.__height}addItems(t){t!=null&&t.length&&t.forEach(e=>this.addItem(e))}removeItems(){this.proximityStatusCache.length=0,this.list.removeChildren()}addItem(...t){if(t.length>1)t.forEach(e=>this.addItem(e));else{const e=t[0];(!e.width||!e.height)&&console.error("ScrollBox item should have size"),e.eventMode="static",this.list.addChild(e),this.proximityStatusCache.push(!1),this.options.disableDynamicRendering||(e.renderable=this.isItemVisible(e))}return this.resize(),t[0]}removeItem(t){this.list.removeItem(t),this.proximityStatusCache.splice(t,1),this.resize()}isItemVisible(t,e=0){const n=this.options.type==="vertical"||!this.options.type;let r=!1;const s=this.list;if(n){const o=t.y+s.y;o+t.height>=-e&&o<=this.options.height+e&&(r=!0)}else{const o=t.x+s.x;o+t.width>=-e&&o<=this.options.width+e&&(r=!0)}return r}get items(){var t;return((t=this.list)==null?void 0:t.children)??[]}setBackground(t){this.background&&this.removeChild(this.background),this.options.background=t,this.background=new ft,this.addChildAt(this.background,0),this.resize()}addMask(){this.borderMask||(this.borderMask=new ft,super.addChild(this.borderMask),this.mask=this.borderMask),this.resize()}makeScrollable(){this._trackpad||(this._trackpad=new Yf({disableEasing:this.options.disableEasing})),this.on("pointerdown",t=>{this.renderAllItems(),this.isDragging=1,this.dragStarTouchPoint=this.worldTransform.applyInverse(t.global),this._trackpad.pointerDown(this.dragStarTouchPoint);const e=this.list.worldTransform.applyInverse(t.global);this.visibleItems.forEach(n=>{n.x<e.x&&n.x+n.width>e.x&&n.y<e.y&&n.y+n.height>e.y&&(this.pressedChild=n)})}),this.on("pointerup",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("pointerover",()=>{this.isOver=!0}),this.on("pointerout",()=>{this.isOver=!1}),this.on("pointerupoutside",()=>{this.isDragging=0,this._trackpad.pointerUp(),this.restoreItemsInteractivity(),this.pressedChild=null,this.stopRenderHiddenItems()}),this.on("globalpointermove",t=>{if(!this.isDragging)return;const e=this.worldTransform.applyInverse(t.global);if(this.dragStarTouchPoint){const n=this.options.dragTrashHold??10;if(this.options.type==="horizontal"){const r=e.x-this.dragStarTouchPoint.x;Math.abs(r)>n&&(this.isDragging=2)}else{const r=e.y-this.dragStarTouchPoint.y;Math.abs(r)>n&&(this.isDragging=2)}}this.dragStarTouchPoint&&this.isDragging!==2||(this._trackpad.pointerMove(e),this.pressedChild&&(this.revertClick(this.pressedChild),this.pressedChild=null))}),document.addEventListener("wheel",this.onMouseScrollBinding,!0)}setInteractive(t){this.eventMode=t?"static":"auto"}get listHeight(){return this.list.height+this.list.topPadding+this.list.bottomPadding}get listWidth(){return this.list.width+this.list.leftPadding+this.list.rightPadding}resize(t=!1){if(this.hasBounds){if(this.renderAllItems(),this.borderMask&&(t||this._dimensionChanged||this.lastWidth!==this.listWidth||this.lastHeight!==this.listHeight)){this.options.width||(this.__width+=this.listWidth),this.options.height||(this.__height+=this.listHeight),this.borderMask.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill(16711935).stroke(0),this.borderMask.eventMode="none";const e=this.options.background;this.background.clear().roundRect(0,0,this.__width,this.__height,this.options.radius|0).fill({color:e??0,alpha:e?1:1e-7}),this.options.type==="horizontal"?this.setInteractive(this.listWidth>this.__width):this.setInteractive(this.listHeight>this.__height),this.lastWidth=this.listWidth,this.lastHeight=this.listHeight}if(this._trackpad){const e=this.borderMask.width-this.list.width-this.list.leftPadding-this.list.rightPadding,n=this.borderMask.height-this.list.height-this.list.topPadding-this.list.bottomPadding;this.options.type==="vertical"?this._trackpad.yAxis.max=-Math.abs(n):this.options.type==="horizontal"?this._trackpad.xAxis.max=-Math.abs(e):(this._trackpad.yAxis.max=-Math.abs(n),this._trackpad.xAxis.max=-Math.abs(e))}this._dimensionChanged?(this.list.arrangeChildren(),this.stopRenderHiddenItems(),this._dimensionChanged=!1):this.updateVisibleItems(),this.lastScrollX=null,this.lastScrollY=null}}onMouseScroll(t){if(!this.isOver&&!this.options.globalScroll)return;this.renderAllItems();const e=this.options.shiftScroll?typeof t.deltaX<"u"||typeof t.deltaY<"u":typeof t.deltaX<"u";if(this.options.type==="horizontal"&&e){const n=this.options.shiftScroll?t.deltaX:t.deltaY,r=this.list.x-n;if(this.listWidth<this.__width)this._trackpad.xAxis.value=0;else{const s=this.__width-this.listWidth,o=0;this._trackpad.xAxis.value=Math.min(o,Math.max(s,r))}}else if(typeof t.deltaY<"u"){const n=this.list.y-t.deltaY;if(this.listHeight<this.__height)this._trackpad.yAxis.value=0;else{const r=this.__height-this.listHeight,s=0;this._trackpad.yAxis.value=Math.min(s,Math.max(r,n))}}this.stopRenderHiddenItems()}scrollBottom(){this.interactive?this.scrollTo(this.list.children.length-1):this.scrollTop()}scrollTop(){this.renderAllItems(),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.stopRenderHiddenItems()}renderAllItems(){clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null,!this.options.disableDynamicRendering&&this.items.forEach(t=>{t.renderable=!0})}stopRenderHiddenItems(){this.options.disableDynamicRendering||(this.stopRenderHiddenItemsTimeout&&(clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null),this.stopRenderHiddenItemsTimeout=setTimeout(()=>this.updateVisibleItems(),2e3))}updateVisibleItems(){this.visibleItems.length=0,this.items.forEach(t=>{t.renderable=this.isItemVisible(t),this.visibleItems.push(t)})}scrollTo(t){if(!this.interactive)return;const e=this.list.children[t];e&&(this.renderAllItems(),this._trackpad.xAxis.value=this.options.type==="horizontal"?this.__width-e.x-e.width-this.list.rightPadding:0,this._trackpad.yAxis.value=!this.options.type||this.options.type==="vertical"?this.__height-e.y-e.height-this.list.bottomPadding:0,this.stopRenderHiddenItems())}scrollToPosition({x:t,y:e}){t===void 0&&e===void 0||(this.renderAllItems(),t!==void 0&&(this.scrollX=-t),e!==void 0&&(this.scrollY=-e),this.stopRenderHiddenItems())}get height(){return this.__height}set height(t){this.__height=t,this._dimensionChanged=!0,this.resize(),this.scrollTop()}get width(){return this.__width}set width(t){this.__width=t,this._dimensionChanged=!0,this.resize(),this.scrollTop()}get scrollX(){return this._trackpad.xAxis.value}set scrollX(t){this._trackpad.xAxis.value=t}get scrollY(){return this._trackpad.yAxis.value}set scrollY(t){this._trackpad.yAxis.value=t}update(){if(!this.list)return;this._trackpad.update();const t=this.options.type==="horizontal"?"x":"y";this.list[t]!==this._trackpad[t]&&(this.list[t]=this._trackpad[t]),!this.options.disableProximityCheck&&(this._trackpad.x!==this.lastScrollX||this._trackpad.y!==this.lastScrollY)&&(this.proximityCheckFrameCounter++,this.proximityCheckFrameCounter>=(this.options.proximityDebounce??10)&&(this.items.forEach((e,n)=>{const r=this.isItemVisible(e,this.proximityRange),s=this.proximityStatusCache[n];r!==s&&(this.proximityStatusCache[n]=r,this.onProximityChange.emit({item:e,index:n,inRange:r}))}),this.lastScrollX=this._trackpad.x,this.lastScrollY=this._trackpad.y,this.proximityCheckFrameCounter=0))}destroy(t){this.ticker.remove(this.update,this),document.removeEventListener("wheel",this.onMouseScrollBinding,!0),this.background.destroy(),this.list.destroy(),super.destroy(t)}restoreItemsInteractivity(){this.interactiveStorage.forEach(t=>{t.item.eventMode=t.eventMode}),this.interactiveStorage.length=0}revertClick(t){t.eventMode!=="auto"&&(Pi.any?t.emit("pointerupoutside",null):t.emit("mouseupoutside",null),this.interactiveStorage.push({item:t,eventMode:t.eventMode}),t.eventMode="auto"),t instanceof N&&t.children&&t.children.forEach(e=>this.revertClick(e))}}class Zf extends Bf{constructor(){const t=w.width,e=20,n=20,r=25,s=1,o="#FFFFFF",a="#270f07",l="#07dd00",h=new ft().roundRect(e,0,t-e*2,n,r).fill(o).roundRect(s+e,s,t-s*2-e*2,n-s*2,r).fill(a),u=new ft().roundRect(e,0,t-e*2,n,r).fill(o).roundRect(s+e,s,t-s*2-e*2,n-s*2,r).fill(l);super({bg:h,fill:u,progress:0})}downloadProgress(t){this.progress=t*100}}const Pt=window.Telegram.WebApp;class er{static get isDesktop(){return Pt.platform==="tdesktop"}static get isDev(){return Pt.platform==="unknown"}static get isMobile(){return Pt.platform==="ios"||Pt.platform==="android"}static Init(){Pt.platform!=="unknown"&&(Pt.ready(),Pt.enableClosingConfirmation(),Pt.setHeaderColor("#000000"),Pt.setBackgroundColor("#000000"))}static FixScroll(t){Pt.expand(),document.body.style.overflowY="hidden",document.body.style.marginTop=`${t}px`;const e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);document.body.style.height=e+t+"px",document.body.style.paddingBottom=`${t}px`,window.scrollTo(0,t)}}window.Telegram.WebApp;const O=class O{constructor(){}static get width(){return this._width}static get height(){return this._height}static get realHeight(){return this._realHeight}static get realWidth(){return this._realWidth}static get enlargedWidth(){return this._enlargedWidth}static get enlargedHeight(){return this._enlargedHeight}static get leftPos(){return this._leftPos}static get rightPos(){return this._rightPos}static get topPos(){return this._topPos}static get bottomPos(){return this._bottomPos}static async Init(t,e,n,r){O.initializeAssetsPromise=Lt.init({manifest:Us});const s=Us.bundles.map(a=>a.name);O.initializeAssetsPromise.then(()=>Lt.backgroundLoadBundle(s)),er.Init(),O._overflow=r,O._width=t,O._height=e,O.app=new Bo,await O.app.init({resolution:3,antialias:!1,background:n,autoDensity:!0,roundPixels:!0,width:t,height:e,hello:!1}),Hs.defaultOptions.scaleMode="nearest",document.body.appendChild(O.app.canvas),O.app.ticker.add(O.update),window.addEventListener("resize",()=>{O.Resize()}),O.Resize()}static Resize(){er.FixScroll(O._overflow);const t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);this.scaleFactor=Math.ceil(e/O.height),this._enlargedWidth=Math.round(this.scaleFactor*O.width),this._enlargedHeight=Math.round(this.scaleFactor*O.height),this._realWidth=Math.round(t/this.scaleFactor),this._realHeight=Math.round(e/this.scaleFactor),this._leftPos=Math.max(this._width/2-this._realWidth/2,0),this._rightPos=Math.min(this._width/2+this._realWidth/2,this._width),this._topPos=Math.max(this._height/2-this._realHeight/2,0),this._bottomPos=Math.min(this._height/2+this._realHeight/2,this._height);const n=Math.round((t-this._enlargedWidth)/2),r=Math.round((e-this._enlargedHeight)/2);O.app.canvas.style.width=`${this._enlargedWidth}px`,O.app.canvas.style.height=`${this._enlargedHeight}px`,O.app.canvas.style.marginLeft=O.app.canvas.style.marginRight=`${n}px`,O.app.canvas.style.marginTop=O.app.canvas.style.marginBottom=`${r}px`}static async ChangeScene(t){await O.initializeAssetsPromise,O.currentScene&&(O.app.stage.removeChild(O.currentScene),O.currentScene.destroy());let e=new Zf;e.y=O.height/2,O.app.stage.addChild(e),await Lt.loadBundle(t.assetBundles,e.downloadProgress.bind(e)),O.app.stage.removeChild(e),t.constructorWithAssets(),O.currentScene=t,O.app.stage.addChild(O.currentScene),O.Resize()}static update(t){window.scrollTo(0,O._overflow),O.currentScene&&O.currentScene.update(t)}};C(O,"app"),C(O,"currentScene"),C(O,"_width"),C(O,"_height"),C(O,"_realWidth"),C(O,"_realHeight"),C(O,"_leftPos"),C(O,"_rightPos"),C(O,"_topPos"),C(O,"_bottomPos"),C(O,"_enlargedWidth"),C(O,"_enlargedHeight"),C(O,"_overflow"),C(O,"initializeAssetsPromise"),C(O,"scaleFactor");let w=O;var H=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,X=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,Qf=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,Jf=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,td=Object.defineProperty,ed=(i,t,e)=>t in i?td(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ga=(i,t,e)=>(ed(i,typeof t!="symbol"?t+"":t,e),e);const id=class xa extends ${constructor(t){t={...xa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Jf,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Qf,name:"adjustment-filter"});super({gpuProgram:e,glProgram:n,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),ga(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};ga(id,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var nd=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,rd=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,sd=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,od=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,ad=Object.defineProperty,ld=(i,t,e)=>t in i?ad(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ae=(i,t,e)=>(ld(i,typeof t!="symbol"?t+"":t,e),e);const va=class ya extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(U("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...ya.DEFAULT_OPTIONS,...e};const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?od:rd,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:e!=null&&e.clamp?sd:nd,name:"kawase-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ae(this,"uniforms"),ae(this,"_pixelSize",{x:0,y:0}),ae(this,"_clamp"),ae(this,"_kernels",[]),ae(this,"_blur"),ae(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,n,r){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,n,r);else{const l=vt.getSameSizeTexture(e);let h=e,u=l,c;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,h,u,!0),c=h,h=u,u=c;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,h,n,r),vt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,n=[t];if(t>0){let r=t;const s=t/e;for(let o=1;o<e;o++)r-=s,n.push(r)}this._kernels=n,this._updatePadding()}};ae(va,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let _a=va;var ud=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,hd=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,cd=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,fd=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,dd=Object.defineProperty,pd=(i,t,e)=>t in i?dd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ba=(i,t,e)=>(pd(i,typeof t!="symbol"?t+"":t,e),e);const Sa=class wa extends ${constructor(t){t={...wa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:fd,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:cd,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:n,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),ba(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};ba(Sa,"DEFAULT_OPTIONS",{threshold:.5});let md=Sa;var gd=Object.defineProperty,xd=(i,t,e)=>t in i?gd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,be=(i,t,e)=>(xd(i,typeof t!="symbol"?t+"":t,e),e);const vd=class Ca extends ${constructor(t){t={...Ca.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:hd,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:ud,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:n,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:B.WHITE}}),be(this,"uniforms"),be(this,"bloomScale",1),be(this,"brightness",1),be(this,"_extractFilter"),be(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new md({threshold:t.threshold}),this._blurFilter=new _a({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,n,r){const s=vt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=vt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,n,r),vt.returnTexture(o),vt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};be(vd,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var yd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,_d=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,bd=Object.defineProperty,Sd=(i,t,e)=>t in i?bd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ir=(i,t,e)=>(Sd(i,typeof t!="symbol"?t+"":t,e),e);const wd=class Pa extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(U("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const n=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...Pa.DEFAULT_OPTIONS,...e};const r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:_d,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:yd,name:"ascii-filter"});super({gpuProgram:r,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(n),type:"f32"}}}}),ir(this,"uniforms"),ir(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new j,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};ir(wd,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Cd=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,Pd=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,Td=Object.defineProperty,Ad=(i,t,e)=>t in i?Td(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Se=(i,t,e)=>(Ad(i,typeof t!="symbol"?t+"":t,e),e);const Md=class Ta extends ${constructor(t){t={...Ta.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Pd,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Cd,name:"bevel-filter"});super({gpuProgram:e,glProgram:n,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),Se(this,"uniforms"),Se(this,"_thickness"),Se(this,"_rotation"),Se(this,"_lightColor"),Se(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new j,this._shadowColor=new j,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/Fe}set rotation(t){this._rotation=t*Fe,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,n,r]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=n,this.uniforms.uLightColor[2]=r}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,n,r]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=n,this.uniforms.uShadowColor[2]=r}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};Se(Md,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Fd=Object.defineProperty,Id=(i,t,e)=>t in i?Fd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ii=(i,t,e)=>(Id(i,typeof t!="symbol"?t+"":t,e),e);const zd=class Aa extends $c{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){U("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let n=e;Array.isArray(n)&&(n={x:n[0],y:n[1]}),e={strength:n},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={...Aa.DEFAULT_OPTIONS,...e},super(),Ii(this,"_blurXFilter"),Ii(this,"_blurYFilter"),Ii(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new Os({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Os({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,n,r){const s=vt.getSameSizeTexture(e);t.applyFilter(this,e,n,r),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,n,!1),vt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return U("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){U("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return U("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){U("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return U("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){U("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};Ii(zd,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Od=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,Bd=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,Ud=Object.defineProperty,kd=(i,t,e)=>t in i?Ud(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ma=(i,t,e)=>(kd(i,typeof t!="symbol"?t+"":t,e),e);const Ed=class Fa extends ${constructor(t){t={...Fa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Bd,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Od,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:n,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Ma(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,n,r)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Ma(Ed,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Rd=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,Dd=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,Rs=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,pe=pe||{};pe.stringify=function(){var i={"visit_linear-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return i.visit_gradient(t)},"visit_radial-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return i.visit_gradient(t)},visit_gradient:function(t){var e=i.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+i.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,n=i.visit(t.at),r=i.visit(t.style);return r&&(e+=" "+r),n&&(e+=" at "+n),e},"visit_default-radial":function(t){var e="",n=i.visit(t.at);return n&&(e+=n),e},"visit_extent-keyword":function(t){var e=t.value,n=i.visit(t.at);return n&&(e+=" at "+n),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return i.visit(t.value.x)+" "+i.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return i.visit_color(t.value,t)},visit_hex:function(t){return i.visit_color("#"+t.value,t)},visit_rgb:function(t){return i.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return i.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var n=t,r=i.visit(e.length);return r&&(n+=" "+r),n},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",n=t.length;return t.forEach(function(r,s){e+=i.visit(r),s<n-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return i.visit_array(t,e);if(t.type){var n=i["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return i.visit(t)}}();var pe=pe||{};pe.parse=function(){var i={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(T){var V=new Error(t+": "+T);throw V.source=t,V}function n(){var T=r();return t.length>0&&e("Invalid input not EOF"),T}function r(){return y(s)}function s(){return o("linear-gradient",i.linearGradient,l)||o("repeating-linear-gradient",i.repeatingLinearGradient,l)||o("radial-gradient",i.radialGradient,c)||o("repeating-radial-gradient",i.repeatingRadialGradient,c)}function o(T,V,P){return a(V,function(k){var si=P();return si&&(W(i.comma)||e("Missing comma before color stops")),{type:T,orientation:si,colorStops:y(_)}})}function a(T,V){var P=W(T);if(P){W(i.startCall)||e("Missing (");var k=V(P);return W(i.endCall)||e("Missing )"),k}}function l(){return h()||u()}function h(){return I("directional",i.sideOrCorner,1)}function u(){return I("angular",i.angleValue,1)}function c(){var T,V=f(),P;return V&&(T=[],T.push(V),P=t,W(i.comma)&&(V=f(),V?T.push(V):t=P)),T}function f(){var T=d()||p();if(T)T.at=m();else{var V=g();if(V){T=V;var P=m();P&&(T.at=P)}else{var k=v();k&&(T={type:"default-radial",at:k})}}return T}function d(){var T=I("shape",/^(circle)/i,0);return T&&(T.style=E()||g()),T}function p(){var T=I("shape",/^(ellipse)/i,0);return T&&(T.style=q()||g()),T}function g(){return I("extent-keyword",i.extentKeywords,1)}function m(){if(I("position",/^at/,0)){var T=v();return T||e("Missing positioning value"),T}}function v(){var T=x();if(T.x||T.y)return{type:"position",value:T}}function x(){return{x:q(),y:q()}}function y(T){var V=T(),P=[];if(V)for(P.push(V);W(i.comma);)V=T(),V?P.push(V):e("One extra comma");return P}function _(){var T=F();return T||e("Expected color definition"),T.length=q(),T}function F(){return A()||b()||z()||R()}function R(){return I("literal",i.literalColor,0)}function A(){return I("hex",i.hexColor,1)}function z(){return a(i.rgbColor,function(){return{type:"rgb",value:y(S)}})}function b(){return a(i.rgbaColor,function(){return{type:"rgba",value:y(S)}})}function S(){return W(i.number)[1]}function q(){return I("%",i.percentageValue,1)||_t()||E()}function _t(){return I("position-keyword",i.positionKeywords,1)}function E(){return I("px",i.pixelValue,1)||I("em",i.emValue,1)}function I(T,V,P){var k=W(V);if(k)return{type:T,value:k[P]}}function W(T){var V,P;return P=/^[\n\r\t\s]+/.exec(t),P&&J(P[0].length),V=T.exec(t),V&&J(V[0].length),V}function J(T){t=t.substr(T)}return function(T){return t=T.toString(),n()}}();var Ld=pe.parse;pe.stringify;function Gd(i){const t=Ld(jd(i));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],n=Nd(e.type),r=$d(e.colorStops),s=Xd(e.orientation);return{type:n,stops:r,angle:s}}function Nd(i){const t={"linear-gradient":0,"radial-gradient":1};if(!(i in t))throw new Error(`Unsupported gradient type "${i}"`);return t[i]}function $d(i){const t=Vd(i),e=[],n=new j;for(let r=0;r<i.length;r++){const s=Wd(i[r]),o=n.setValue(s).toArray();e.push({offset:t[r],color:o.slice(0,3),alpha:o[3]})}return e}function Wd(i){switch(i.type){case"hex":return`#${i.value}`;case"literal":return i.value;default:return`${i.type}(${i.value.join(",")})`}}function Vd(i){const t=[];for(let s=0;s<i.length;s++){const o=i[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const n=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let r=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)r=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=n(s),h=(a.offset-r)/(1+a.indexDelta);for(let u=0;u<=a.indexDelta;u++)t[s+u]=r+(u+1)*h;s+=a.indexDelta,r=t[s]}}return t.map(Hd)}function Hd(i){return i.toString().length>6?parseFloat(i.toString().substring(0,6)):i}function Xd(i){if(typeof i>"u")return 0;if("type"in i&&"value"in i)switch(i.type){case"angular":return parseFloat(i.value);case"directional":return Yd(i.value)}return 0}function Yd(i){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(i in t))throw new Error(`Unsupported directional value "${i}"`);return t[i]}function jd(i){let t=i.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var qd=Object.defineProperty,Kd=(i,t,e)=>t in i?qd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ce=(i,t,e)=>(Kd(i,typeof t!="symbol"?t+"":t,e),e);const Bn=90;function Zd(i){return[...i].sort((t,e)=>t.offset-e.offset)}const ri=class zi extends ${constructor(t){if(t&&"css"in t?t={...Gd(t.css||""),alpha:t.alpha??zi.defaults.alpha,maxColors:t.maxColors??zi.defaults.maxColors}:t={...zi.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=L.from({vertex:{source:Rs,entryPoint:"mainVertex"},fragment:{source:Rs,entryPoint:"mainFragment"}}),n=G.from({vertex:Dd,fragment:Rd,name:"color-gradient-filter"}),r=32;super({gpuProgram:e,glProgram:n,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Bn,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(r*3),type:"vec3<f32>",size:r},uStops:{value:new Float32Array(r*4),type:"vec4<f32>",size:r}}}}),ce(this,"baseUniforms"),ce(this,"stopsUniforms"),ce(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=Zd(t),n=new j;let r,s,o;for(let a=0;a<e.length;a++){n.setValue(e[a].color);const l=a*3;[r,s,o]=n.toArray(),this.stopsUniforms.uColors[l]=r,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Bn}set angle(t){this.baseUniforms.uOptions[1]=t-Bn}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};ce(ri,"LINEAR",0);ce(ri,"RADIAL",1);ce(ri,"CONIC",2);ce(ri,"defaults",{type:ri.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var Qd=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,Jd=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,tp=Object.defineProperty,ep=(i,t,e)=>t in i?tp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Et=(i,t,e)=>(ep(i,typeof t!="symbol"?t+"":t,e),e);const ip=class Ia extends ${constructor(...t){let e=t[0]??{};if((e instanceof B||e instanceof Bt)&&(U("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={...Ia.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Jd,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:Qd,name:"color-map-filter"});super({gpuProgram:n,glProgram:r,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),Et(this,"uniforms"),Et(this,"_size",0),Et(this,"_sliceSize",0),Et(this,"_slicePixelSize",0),Et(this,"_sliceInnerSize",0),Et(this,"_nearest",!1),Et(this,"_scaleMode","linear"),Et(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof B?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};Et(ip,"DEFAULT_OPTIONS",{colorMap:B.WHITE,nearest:!1,mix:1});var np=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,rp=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,sp=Object.defineProperty,op=(i,t,e)=>t in i?sp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,nr=(i,t,e)=>(op(i,typeof t!="symbol"?t+"":t,e),e);const ap=class za extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(U("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...za.DEFAULT_OPTIONS,...e};const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:rp,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:np,name:"color-overlay-filter"});super({gpuProgram:n,glProgram:r,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),nr(this,"uniforms"),nr(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new j,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};nr(ap,"DEFAULT_OPTIONS",{color:0,alpha:1});var lp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,up=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,hp=Object.defineProperty,cp=(i,t,e)=>t in i?hp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Oi=(i,t,e)=>(cp(i,typeof t!="symbol"?t+"":t,e),e);const fp=class Oa extends ${constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(U("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...Oa.DEFAULT_OPTIONS,...e};const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:up,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:lp,name:"color-replace-filter"});super({gpuProgram:n,glProgram:r,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),Oi(this,"uniforms"),Oi(this,"_originalColor"),Oi(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new j,this._targetColor=new j,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,n,r]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=n,this.uniforms.uOriginalColor[2]=r}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,n,r]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=n,this.uniforms.uTargetColor[2]=r}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){U("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return U("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){U("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return U("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};Oi(fp,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var dp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,pp=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,mp=Object.defineProperty,gp=(i,t,e)=>t in i?mp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ba=(i,t,e)=>(gp(i,typeof t!="symbol"?t+"":t,e),e);const xp=class Ua extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(U("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...Ua.DEFAULT_OPTIONS,...e};const n=e.width??200,r=e.height??200,s=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:pp,entryPoint:"mainFragment"}}),o=G.from({vertex:H,fragment:dp,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/n,y:1/r},type:"vec2<f32>"}}}}),Ba(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=n,this.height=r}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,n)=>{this.uniforms.uMatrix[n]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Ba(xp,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var vp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,yp=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,_p=Object.defineProperty,bp=(i,t,e)=>t in i?_p(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Bi=(i,t,e)=>(bp(i,typeof t!="symbol"?t+"":t,e),e);const Sp=class ka extends ${constructor(t){t={...ka.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:yp,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:vp,name:"crt-filter"});super({gpuProgram:e,glProgram:n,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Bi(this,"uniforms"),Bi(this,"seed"),Bi(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};Bi(Sp,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var wp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,Cp=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,Pp=Object.defineProperty,Tp=(i,t,e)=>t in i?Pp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ap=(i,t,e)=>(Tp(i,t+"",e),e);const Mp=class Ea extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(U("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...Ea.DEFAULT_OPTIONS,...e};const n={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Cp,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:wp,name:"dot-filter"});super({gpuProgram:r,glProgram:s,resources:{dotUniforms:n}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};Ap(Mp,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Fp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Ip=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,zp=Object.defineProperty,Op=(i,t,e)=>t in i?zp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,we=(i,t,e)=>(Op(i,typeof t!="symbol"?t+"":t,e),e);const Bp=class Ra extends ${constructor(t){t={...Ra.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ip,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Fp,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:n,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),we(this,"uniforms"),we(this,"shadowOnly",!1),we(this,"_color"),we(this,"_blurFilter"),we(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new j,this.color=t.color??0,this._blurFilter=new _a({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new $({gpuProgram:L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:G.from({vertex:H,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,n,r){const s=vt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,n,r),this.shadowOnly||t.applyFilter(this._basePass,e,n,!1),vt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};we(Bp,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var Up=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,kp=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,Ep=Object.defineProperty,Rp=(i,t,e)=>t in i?Ep(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Mt=(i,t,e)=>(Rp(i,typeof t!="symbol"?t+"":t,e),e);const Dp=class Da extends ${constructor(t){t={...Da.defaults,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:kp,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Up,name:"glitch-filter"}),r=document.createElement("canvas");r.width=4,r.height=t.sampleSize??512;const s=new B({source:new Be({resource:r})});super({gpuProgram:e,glProgram:n,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),Mt(this,"uniforms"),Mt(this,"average",!1),Mt(this,"minSize",8),Mt(this,"sampleSize",512),Mt(this,"_canvas"),Mt(this,"texture"),Mt(this,"_slices",0),Mt(this,"_sizes",new Float32Array(1)),Mt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=r,this.texture=s,Object.assign(this,t)}apply(t,e,n,r){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,n,r)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),h=Math.max(l*(1-Math.random()*.6),r);t[a]=h,o-=h}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),r);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let n=e;n>0;n--){const r=Math.random()*n>>0,s=t[n];t[n]=t[r],t[r]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,t);let r,s=0;for(let o=0;o<this._slices;o++){r=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=r>0?r:0,h=r<0?-r:0;n.fillStyle=`rgba(${l}, ${h}, 0, 1)`,n.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let n=0;n<e;n++)this._sizes[n]=t[n]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let n=0;n<e;n++)this._offsets[n]=t[n]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/Fe}set direction(t){this.uniforms.uDirection=t*Fe}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};Mt(Dp,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Lp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,Gp=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,Np=Object.defineProperty,$p=(i,t,e)=>t in i?Np(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,rr=(i,t,e)=>($p(i,typeof t!="symbol"?t+"":t,e),e);const Wp=class La extends ${constructor(t){t={...La.DEFAULT_OPTIONS,...t};const e=t.distance??10,n=t.quality??.1,r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Gp,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:Lp.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/n/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:r,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:n,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),rr(this,"uniforms"),rr(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new j,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};rr(Wp,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Vp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,Hp=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,Xp=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Yp=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,jp=Object.defineProperty,qp=(i,t,e)=>t in i?jp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ce=(i,t,e)=>(qp(i,typeof t!="symbol"?t+"":t,e),e);const Kp=class Ga extends ${constructor(t){t={...Ga.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Hp.replace("${PERLIN}",Yp),entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Vp.replace("${PERLIN}",Xp),name:"god-ray-filter"});super({gpuProgram:e,glProgram:n,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Ce(this,"uniforms"),Ce(this,"time",0),Ce(this,"_angleLight",[0,0]),Ce(this,"_angle",0),Ce(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*Fe;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};Ce(Kp,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var Zp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,Qp=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,Jp=Object.defineProperty,tm=(i,t,e)=>t in i?Jp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,sr=(i,t,e)=>(tm(i,typeof t!="symbol"?t+"":t,e),e);const em=class Na extends ${constructor(t){t={...Na.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Qp,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Zp,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:n,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),sr(this,"uniforms"),sr(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=t.hue}get hue(){return this._hue}set hue(t){this._hue=t,this.resources.hslUniforms.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(t){this.resources.hslUniforms.uniforms.uHsl[1]=t}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(t){this.resources.hslUniforms.uniforms.uHsl[2]=t}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(t){this.resources.hslUniforms.uniforms.uColorize=t?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(t){this.resources.hslUniforms.uniforms.uAlpha=t}};sr(em,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var im=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,nm=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,rm=Object.defineProperty,sm=(i,t,e)=>t in i?rm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,or=(i,t,e)=>(sm(i,typeof t!="symbol"?t+"":t,e),e);const om=class $a extends ${constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof it){U("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...$a.DEFAULT_OPTIONS,...e};const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:nm,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:im,name:"motion-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"f32"},uOffset:{value:e.offset,type:"f32"}}}}),or(this,"uniforms"),or(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};or(om,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var am=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,lm=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,um=Object.defineProperty,hm=(i,t,e)=>t in i?um(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ui=(i,t,e)=>(hm(i,typeof t!="symbol"?t+"":t,e),e);const cm=class Wa extends ${constructor(...t){let e=t[0]??{};Array.isArray(e)&&(U("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...Wa.DEFAULT_OPTIONS,...e};const n=e.maxColors??e.replacements.length,r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:lm.replace(/\$\{MAX_COLORS\}/g,n.toFixed(0)),entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:am.replace(/\$\{MAX_COLORS\}/g,n.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:r,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*n),type:"vec3<f32>",size:n},uTargetColors:{value:new Float32Array(3*n),type:"vec3<f32>",size:n},uTolerance:{value:e.tolerance,type:"f32"}}}}),Ui(this,"uniforms"),Ui(this,"_replacements",[]),Ui(this,"_maxColors"),this._maxColors=n,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,n=this.uniforms.uTargetColors,r=t.length,s=new j;if(r>this._maxColors)throw new Error(`Length of replacements (${r}) exceeds the maximum colors length (${this._maxColors})`);e[r*3]=-1;let o,a,l;for(let h=0;h<r;h++){const u=t[h];s.setValue(u[0]),[o,a,l]=s.toArray(),e[h*3]=o,e[h*3+1]=a,e[h*3+2]=l,s.setValue(u[1]),[o,a,l]=s.toArray(),n[h*3]=o,n[h*3+1]=a,n[h*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){U("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return U("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};Ui(cm,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var fm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,dm=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,pm=Object.defineProperty,mm=(i,t,e)=>t in i?pm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ar=(i,t,e)=>(mm(i,typeof t!="symbol"?t+"":t,e),e);const gm=class Va extends ${constructor(t){t={...Va.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:dm,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:fm,name:"old-film-filter"});super({gpuProgram:e,glProgram:n,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ar(this,"uniforms"),ar(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,n,r)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};ar(gm,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var xm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,vm=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,ym=Object.defineProperty,_m=(i,t,e)=>t in i?ym(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,he=(i,t,e)=>(_m(i,typeof t!="symbol"?t+"":t,e),e);const Fr=class le extends ${constructor(...t){let e=t[0]??{};typeof e=="number"&&(U("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...le.DEFAULT_OPTIONS,...e};const n=e.quality??.1,r=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:vm,entryPoint:"mainFragment"}}),s=G.from({vertex:H,fragment:xm.replace(/\$\{ANGLE_STEP\}/,le.getAngleStep(n).toFixed(7)),name:"outline-filter"});super({gpuProgram:r,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),he(this,"uniforms"),he(this,"_thickness"),he(this,"_quality"),he(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=le.getAngleStep(n),this._color=new j,this.color=e.color??0,Object.assign(this,e)}apply(t,e,n,r){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,n,r)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*le.MAX_SAMPLES,le.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=le.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};he(Fr,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});he(Fr,"MIN_SAMPLES",1);he(Fr,"MAX_SAMPLES",100);var bm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,Sm=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,wm=Object.defineProperty,Cm=(i,t,e)=>t in i?wm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ki=(i,t,e)=>(Cm(i,typeof t!="symbol"?t+"":t,e),e);const Pm=class Ha extends ${constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(U("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...Ha.DEFAULT_OPTIONS,...e};const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Sm,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:bm,name:"radial-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),ki(this,"uniforms"),ki(this,"_angle"),ki(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};ki(Pm,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Tm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,Am=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,Mm=Object.defineProperty,Fm=(i,t,e)=>t in i?Mm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,lr=(i,t,e)=>(Fm(i,typeof t!="symbol"?t+"":t,e),e);const Xa=class Ya extends ${constructor(t){t={...Ya.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Am,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Tm,name:"reflection-filter"});super({gpuProgram:e,glProgram:n,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),lr(this,"uniforms"),lr(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};lr(Xa,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});let Im=Xa;var zm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,Om=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,Bm=Object.defineProperty,Um=(i,t,e)=>t in i?Bm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ja=(i,t,e)=>(Um(i,typeof t!="symbol"?t+"":t,e),e);const km=class qa extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(U("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...qa.DEFAULT_OPTIONS,...e};const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Om,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:zm,name:"rgb-split-filter"});super({gpuProgram:n,glProgram:r,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),ja(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};ja(km,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Em=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Rm=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,Dm=Object.defineProperty,Lm=(i,t,e)=>t in i?Dm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,ur=(i,t,e)=>(Lm(i,typeof t!="symbol"?t+"":t,e),e);const Gm=class Ka extends ${constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(U("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={...Ka.DEFAULT_OPTIONS,...e};const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Rm,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:Em,name:"shockwave-filter"});super({gpuProgram:n,glProgram:r,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),ur(this,"uniforms"),ur(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,n,r){this.uniforms.uTime=this.time,t.applyFilter(this,e,n,r)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};ur(Gm,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Nm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,$m=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Wm=Object.defineProperty,Vm=(i,t,e)=>t in i?Wm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ei=(i,t,e)=>(Vm(i,typeof t!="symbol"?t+"":t,e),e);const Hm=class Za extends ${constructor(...t){let e=t[0]??{};if(e instanceof B&&(U("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...Za.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:$m,entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:Nm,name:"simple-lightmap-filter"});super({gpuProgram:n,glProgram:r,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),Ei(this,"uniforms"),Ei(this,"_color"),Ei(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new j,this.color=e.color??0,Object.assign(this,e)}apply(t,e,n,r){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,n,r)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,n,r]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=n,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Ei(Hm,"DEFAULT_OPTIONS",{lightMap:B.WHITE,color:0,alpha:1});var Xm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uTexSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uTexSize - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uTexSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,Ym=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uTexSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uTexSize = tiltShiftUniforms.uTexSize;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uTexSize - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uTexSize * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,jm=Object.defineProperty,qm=(i,t,e)=>t in i?jm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,hr=(i,t,e)=>(qm(i,typeof t!="symbol"?t+"":t,e),e);const Km=class Qa extends ${constructor(t){t={...Qa.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ym,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Xm,name:"tilt-shift-axis-filter"});super({gpuProgram:e,glProgram:n,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur??100,t.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),hr(this,"uniforms"),hr(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,n=t.x-e.x,r=t.y-e.y,s=Math.sqrt(n*n+r*r),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-r/s:n/s,this.uniforms.uDelta[1]=o?n/s:r/s}};hr(Km,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var Zm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,Qm=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,Jm=Object.defineProperty,tg=(i,t,e)=>t in i?Jm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Ja=(i,t,e)=>(tg(i,typeof t!="symbol"?t+"":t,e),e);const eg=class tl extends ${constructor(t){t={...tl.DEFAULT_OPTIONS,...t};const e=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Qm,entryPoint:"mainFragment"}}),n=G.from({vertex:H,fragment:Zm,name:"twist-filter"});super({gpuProgram:e,glProgram:n,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Ja(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Ja(eg,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var ig=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,ng=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,rg=Object.defineProperty,sg=(i,t,e)=>t in i?rg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,el=(i,t,e)=>(sg(i,typeof t!="symbol"?t+"":t,e),e);const og=class il extends ${constructor(t){t={...il.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,n=L.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:ng.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),r=G.from({vertex:H,fragment:ig.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:n,glProgram:r,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),el(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};el(og,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});function Kt(i){return new Mi({text:i,style:{fontFamily:"tiny",fontSize:9,fill:"white",align:"center",dropShadow:{alpha:.5,distance:1,angle:1,color:"#4a1850"},stroke:{color:"#4a1850",width:1,join:"round"}}})}class gt extends If{constructor(e){super();C(this,"text");C(this,"buttonBg");C(this,"noteText");C(this,"defaultBGTint");this.buttonBg=new Fi(B.from("button.png")),e!=null&&e.tint&&(this.buttonBg.tint=e.tint,this.defaultBGTint=e.tint),e!=null&&e.width&&(this.buttonBg.width=e.width),e!=null&&e.height&&(this.buttonBg.height=e.height),this.text=Kt((e==null?void 0:e.text)??""),this.text.anchor.set(.5),this.text.x=this.buttonBg.width/2,this.text.y=this.buttonBg.height/2-2,this.addChild(this.buttonBg),this.addChild(this.text),e!=null&&e.note&&(this.noteText=Kt(e==null?void 0:e.note),this.noteText.x=this.buttonBg.width-this.noteText.width-5,this.addChild(this.noteText)),this.onDown.connect(()=>{let n=new j(this.defaultBGTint).toRgba();n.r+=.25,n.g+=.25,n.b+=.25,this.buttonBg.tint=[n.r,n.g,n.b]}),this.onUp.connect(()=>{this.buttonBg.tint=this.defaultBGTint})}updateWidth(e){this.buttonBg.width=e,this.text.x=this.buttonBg.width/2}setEnabled(e){this.enabled=e,this.alpha=e?1:.4}}const Un=window.Telegram.WebApp;class ag extends N{constructor(e,n,r){var l,h,u;super();C(this,"sprite");C(this,"nameText");C(this,"levelText");C(this,"data");this.data=r;const s=Lt.get("buildings").data.animations;this.sprite=ni.fromImages(s[e]),this.sprite.anchor.set(.5,1),this.sprite.y=Math.round(w.height*.684),this.sprite.x=n*80,this.addChild(this.sprite);let o="Friend "+n,a=Un==null?void 0:Un.initDataUnsafe;n==0&&(a==null?void 0:a.user)!==void 0&&((a==null?void 0:a.user.username)!==""||(a==null?void 0:a.user.username)!==void 0?o=(l=a==null?void 0:a.user)==null?void 0:l.username:o=((h=a==null?void 0:a.user)==null?void 0:h.first_name)+" "+((u=a==null?void 0:a.user)==null?void 0:u.last_name)),this.nameText=Kt(o),this.nameText.anchor.set(.5),this.levelText=Kt("Lvl. "+r.level),this.levelText.style.fontSize=6,this.levelText.style.fill="gray",this.levelText.style.stroke={color:"black",width:1,join:"round"},this.levelText.style.dropShadow=!1,this.levelText.anchor.set(.5),this.setCurrentLevel()}setCurrentLevel(){this.sprite.currentFrame=Math.min(this.data.level,this.sprite.totalFrames-1),this.nameText.y=this.sprite.y-this.sprite.height-10,this.nameText.x=this.sprite.x,this.levelText.text="Lvl. "+this.data.level,this.levelText.x=this.sprite.x,this.levelText.y=this.sprite.y+6}update(e){}}class lg extends N{constructor(e){super();C(this,"players",[]);this.interactiveChildren=!1}update(e){for(let n=0;n<this.players.length;n++)this.players[n].update(e)}updatePosition(e){this.x=Math.round(e)}addBuilding(e){let n=new ag("building01",this.players.length,e);return this.players.push(n),this.addChild(n),n}}class ug extends N{constructor(e){super();C(this,"bg");C(this,"ground");C(this,"clouds");C(this,"mountain");C(this,"trees");this.interactiveChildren=!1,this.bg=new He({texture:B.from("background01"),width:w.width*3,height:w.height}),this.bg.tileScale.y=.81,this.bg.anchor.set(0,.5),this.bg.y=w.height/2,this.bg.height=w.height,this.addChild(this.bg);let n=B.from("clouds01");this.clouds=new He({texture:n,width:4e3,height:n.height}),this.clouds.anchor.set(.5),this.clouds.x=Math.round(e*.15+w.width/2),this.clouds.y=Math.round(w.height*.5),this.addChild(this.clouds);let r=B.from("mountain01");this.mountain=new He({texture:r,width:4e3,height:r.height}),this.mountain.anchor.set(.5),this.mountain.x=Math.round(e*.35+w.width/2),this.mountain.y=Math.round(w.height*.5),this.addChild(this.mountain);let s=B.from("trees01");this.trees=new He({texture:s,width:4e3,height:s.height}),this.trees.anchor.set(.5,0),this.trees.x=e,this.trees.y=Math.round(w.height*.5),this.addChild(this.trees),this.ground=new He({texture:B.from("ground01"),width:4e3,height:24}),this.ground.anchor.set(.5,0),this.ground.x=e,this.ground.y=Math.round(w.height*.68),this.addChild(this.ground)}updatePosition(e){this.ground.x=Math.round(e),this.clouds.x=Math.round(e*.15+w.width/2),this.mountain.x=Math.round(e*.35+w.width/2),this.trees.x=Math.round(e*.55+w.width/2)}update(e){}}var wi=[{divider:1e21,suffix:"Z"},{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"k"}];const cr=(i,t,e)=>i*(1-e)+t*e;function Ds(i){for(let t=0;t<wi.length;t++)if(i>=wi[t].divider)return(i/wi[t].divider).toFixed(3).toString()+wi[t].suffix;return i.toString()}function hg(i,t){const e=Math.ceil(i),n=Math.floor(t);return Math.floor(Math.random()*(n-e)+e)}class cg{constructor(){C(this,"friends");this.friends=[]}get ourMoney(){return this.friends[0].money}set ourMoney(t){this.friends[0].money=t}get ourLevel(){return this.friends[0].level}increaseMoney(t,e){this.friends[t].money+=e}increaseLevel(t){this.friends[t].level++}}class nl{constructor(t,e){C(this,"level");C(this,"money");t!=null?this.level=t:this.level=0,e!=null?this.money=e:this.money=0}}const ue=[0,5,15,30,60,120,240,500,1100,2250,5e3],Ls=50;class fg extends N{constructor(e){super();C(this,"scroller");C(this,"view");C(this,"ingameUI");C(this,"background");C(this,"buildings");C(this,"reflectionFilter");C(this,"_isDrag",!1);C(this,"_delta");C(this,"_prevDragPos");C(this,"_currentDragPosition");C(this,"_viewPos");C(this,"data");this.data=e,this.scroller=new N;const n=new ft().rect(0,0,w.width,w.height).fill("#1F66BA");this.scroller.addChild(n),this.scroller.eventMode="static",this.addChild(this.scroller),this.view=new N,this.addChild(this.view),this.background=new ug(Ls),this.view.addChild(this.background),this.ingameUI=new N,this.buildings=new lg(Ls),this.ingameUI.x=this.buildings.x,this.addChild(this.ingameUI);for(let a=0;a<e.friends.length;a++)this.addPlayer(e.friends[a]);this.view.addChild(this.buildings),this.reflectionFilter=new Im({boundary:.71,alpha:[.5,.25],amplitude:[1,2]}),this.view.filters=[this.reflectionFilter];const r=a=>{this._isDrag=!0,this._currentDragPosition=a.global.x,this._prevDragPos=this._currentDragPosition,this.scroller.on("pointermove",s)},s=a=>{this._currentDragPosition=a.global.x},o=()=>{this._isDrag=!1,this.scroller.off("pointermove",s)};this.scroller.on("pointerdown",r),this.scroller.on("pointerup",o),this.scroller.on("pointerupoutside",o),this._viewPos=w.width/2,this.updatePosition(),this.reflectionFilter.boundary=.672,this.view.y=-50,this.ingameUI.y=-50}get currentViewPos(){return this.buildings.x}addPlayer(e){const n=this.buildings.addBuilding(e);this.ingameUI.addChild(n.nameText),this.ingameUI.addChild(n.levelText)}increasePlayerLevel(e){this.buildings.players[e].setCurrentLevel()}updatePosition(){this.buildings.updatePosition(this._viewPos),this.background.updatePosition(this._viewPos),this.ingameUI.x=this.buildings.x}update(e){if(this._isDrag?(this._delta=this._currentDragPosition-this._prevDragPos,this._prevDragPos=this._currentDragPosition):this._delta=cr(this._delta,0,e.deltaTime*.04),Math.abs(this._delta)>.1){let n=this.buildings.players.length;this._viewPos=Math.min(this._viewPos+this._delta,w.width/2),this._viewPos=Math.max(this._viewPos,-(this.buildings.width-w.width/2-this.buildings.players[n-1].width)),this.updatePosition()}this.reflectionFilter.time+=e.deltaTime*.05,this.background.update(e)}updateByTimer(){const e=Lt.get("buildings").data.animations;for(let n=0;n<this.data.friends.length;n++)if(this.data.increaseMoney(n,ue[this.data.friends[n].level]),this.data.friends[n].level>0){const r=ni.fromImages(e.coin);r.anchor.set(.5);const s=this.buildings.players[n];r.x=s.nameText.x,r.y=s.nameText.y-16,r.animationSpeed=1/5,r.loop=!1,r.play(),r.onFrameChange=()=>{r.y=s.nameText.y-16-r.currentFrame},r.onComplete=()=>{r.destroy()},this.ingameUI.addChild(r)}}}class Je{static SaveData(t){localStorage.setItem("friends",JSON.stringify(t.friends))}static LoadData(t){const e=JSON.parse(localStorage.getItem("friends"));e!=null?t.friends=e:t.friends.push(new nl)}static ClearData(){localStorage.clear(),window.location.reload()}}class Me{static Name(t){return kn[t].name}static UnlockLevel(t){return kn[t].unlockLevel}static Tint(t){return kn[t].tint}}var pt=(i=>(i[i.PublicTransport=0]="PublicTransport",i[i.Retail=1]="Retail",i[i.Agriculture=2]="Agriculture",i[i.HealthCare=3]="HealthCare",i[i.Education=4]="Education",i[i.Telecommunication=5]="Telecommunication",i[i.Energy=6]="Energy",i[i.OilGas=7]="OilGas",i[i.Chemicals=8]="Chemicals",i[i.Biotech=9]="Biotech",i))(pt||{});const kn=[{name:` Public Transport 
🚌🚋🚕🚈`,unlockLevel:0,tint:"#9296A0"},{name:` Retail 
🛒🛍️🎁📦`,unlockLevel:0,tint:"#81B8A5"},{name:` Agriculture 
🚜🌽👨‍🌾`,unlockLevel:0,tint:"#33C481"},{name:` Health Care 
🧑‍⚕️🚑🩺🩼`,unlockLevel:15,tint:"#B65452"},{name:` Education 
🎓🏫📚🧑‍🎓`,unlockLevel:20,tint:"#D647E1"},{name:` Telecommunication 
🌍📡🌐`,unlockLevel:20,tint:"#3191F7"},{name:` Energy 
⚡🔌💡🔋`,unlockLevel:20,tint:"#F0E31A"},{name:` Oil & Gas 
⛽🛢️`,unlockLevel:40,tint:"#8F8F92"},{name:` Chemicals 
🧪⚗️👩‍🔬🔬`,unlockLevel:40,tint:"#22E528"},{name:` Biotech 
🦾🦿🤖`,unlockLevel:40,tint:"#47476C"}],St=5,ye=30;class dg extends N{constructor(){super();C(this,"scroller");C(this,"scrollerBg");C(this,"scrollBox");C(this,"backButton");const e=new ft().rect(0,0,w.width,w.height).fill("gray"),n=new ft().rect(0,w.bottomPos-ye-St*2,w.width,ye+St*2).fill("3E3E3E");this.addChild(e),this.addChild(n);const r=new ft().rect(0,0,w.width,ye).fill("2B2B2B");r.y=w.topPos,this.addChild(r);const s=Kt("Select Business");s.style.fontSize=12,s.anchor.set(.5),s.x=r.width/2,s.y=r.height/2-2,r.addChild(s);const o=w.rightPos-w.leftPos-St*2-6;function a(x){const y=Me.UnlockLevel(x),_=Me.Tint(x);return new gt({text:Me.Name(x),width:o,height:ye,tint:_,note:y>0?`lvl.${y}`:void 0})}const l=a(pt.PublicTransport),h=a(pt.Retail),u=a(pt.Agriculture),c=a(pt.HealthCare),f=a(pt.Education),d=a(pt.Telecommunication),p=a(pt.Energy),g=a(pt.OilGas),m=a(pt.Chemicals),v=a(pt.Biotech);this.scrollBox=new Kf({elementsMargin:St,width:w.rightPos-St*2,height:w.bottomPos-w.topPos-n.height-St*2-r.height,radius:5,disableEasing:!1,globalScroll:!0,shiftScroll:!1}),this.scrollBox.x=w.leftPos+St,this.scrollBox.y=w.topPos+St+r.height,this.addChild(this.scrollBox),this.scrollBox.addItem(l,h,u,c,f,d,p,g,m,v),c.setEnabled(!1),f.setEnabled(!1),d.setEnabled(!1),m.setEnabled(!1),p.setEnabled(!1),g.setEnabled(!1),v.setEnabled(!1),this.scrollerBg=new ft().rect(w.rightPos-6,0,4,this.scrollBox.height).fill("black"),this.scrollerBg.alpha=.5,this.scrollerBg.y=this.scrollBox.y,this.addChild(this.scrollerBg),this.scroller=new ft().rect(w.rightPos-6,0,4,40).fill("00DCFF"),this.addChild(this.scroller),this.backButton=new gt({text:" Back ",width:o+6,height:ye,tint:"ED4C4C"}),this.backButton.x=w.leftPos+St,this.backButton.y=w.bottomPos-this.backButton.height-St,this.backButton.onPress.connect(()=>{this.visible=!1}),this.addChild(this.backButton)}update(e){let n=this.scrollBox.items.length*ye+(this.scrollBox.items.length-1)*St,r=n/this.scrollBox.height;if(r-=1,r>0&&r<1){this.scrollerBg.visible=!0,this.scroller.visible=!0,this.scroller.height=cr(this.scrollerBg.height,0,r);let s=-this.scrollBox.scrollY/(n-this.scrollBox.height-1);s=Math.min(Math.max(s,0),1),this.scroller.y=cr(this.scrollBox.y,this.scrollBox.y+this.scrollBox.height-this.scroller.height,s)}else this.scrollerBg.visible=!1,this.scroller.visible=!1}}const pg=1;class mg extends N{constructor(e,n){super();C(this,"moneyText");C(this,"profitText");C(this,"friendsText");C(this,"selectBusinessScreen");C(this,"game");C(this,"data");C(this,"marketButton");C(this,"ratingButton");C(this,"businessButton");C(this,"stockButton");C(this,"friendButton");C(this,"clearSaveButton");C(this,"upgradeButton");this.game=e,this.data=n,this.moneyText=Kt(this.ourMoneyText),this.moneyText.style.fontSize=10,this.moneyText.anchor.set(0,.5),this.addChild(this.moneyText),this.profitText=Kt(this.updateProfitText),this.profitText.style.fontSize=10,this.profitText.anchor.set(1,.5),this.addChild(this.profitText),this.friendsText=Kt("Friends: "+n.friends.length),this.friendsText.anchor.set(0,.5),this.friendsText.visible=!1,this.addChild(this.friendsText),this.marketButton=new gt({text:"Market",tint:"gray",width:50,height:30}),this.marketButton.setEnabled(!1),this.addChild(this.marketButton),this.ratingButton=new gt({text:"Rating",tint:"gray",width:50,height:30}),this.ratingButton.setEnabled(!1),this.addChild(this.ratingButton),this.businessButton=new gt({text:"Business",tint:"orange",width:50,height:30}),this.addChild(this.businessButton),this.stockButton=new gt({text:"Stock",tint:"gray",width:50,height:30}),this.stockButton.setEnabled(!1),this.addChild(this.stockButton),this.friendButton=new gt({text:`Invite
friends`,tint:"gray",width:50,height:30}),this.friendButton.onPress.connect(()=>{const u=new nl(hg(1,5));n.friends.push(u),Je.SaveData(n),open("https://t.me/share/url?url=https://t.me/andeliseevTest01_bot&text=Играй! Строй! ЗАРАБАТЫВАЙ!","_blank"),this.friendsText.text="Friends: "+n.friends.length,e.gameView.addPlayer(u)}),this.updateInviteFriendButton(),this.addChild(this.friendButton),this.clearSaveButton=new gt({text:"❌",tint:"#404040",width:20,height:20}),this.clearSaveButton.onPress.connect(()=>{Je.ClearData()}),this.addChild(this.clearSaveButton);const r=5,s=w.rightPos-w.leftPos-r*2,o=new gt({text:Me.Name(pt.PublicTransport),width:s,height:25,tint:"#9296A0"}),a=new gt({text:Me.Name(pt.Agriculture),width:s,height:25,tint:"#9296A0"}),l=new gt({text:Me.Name(pt.Energy),width:s,height:25,tint:"#9296A0"});o.x=w.leftPos+r,o.y=w.bottomPos-o.height*3-this.businessButton.height,a.x=w.leftPos+r,a.y=w.bottomPos-o.height*2-this.businessButton.height,l.x=w.leftPos+r,l.y=w.bottomPos-o.height-this.businessButton.height;function h(u){u.text.x=u.x,u.text.anchor.set(0,.5),u.text.style.fontSize=8,u.text.style.align="left"}h(o),h(a),h(l),this.addChild(l),this.addChild(a),this.addChild(o),this.upgradeButton=new gt({text:this.updateUpgradeButtonText(ue[n.ourLevel]),tint:"orange",width:40,height:25}),this.upgradeButton.text.style.fontSize=7,this.upgradeButton.x=o.x+o.width-this.upgradeButton.width-r,this.upgradeButton.y=o.y,this.upgradeButton.setEnabled(n.ourLevel<ue.length-1),this.upgradeButton.onPress.connect(()=>{n.ourLevel<ue.length&&(n.ourMoney-=this.nextUpgradePrice,this.moneyText.text=this.ourMoneyText,n.increaseLevel(0),Je.SaveData(n),this.profitText.text=this.updateProfitText,e.gameView.increasePlayerLevel(0),this.updateInviteFriendButton())}),this.addChild(this.upgradeButton),this.selectBusinessScreen=new dg,this.addChild(this.selectBusinessScreen),this.resize()}get updateProfitText(){return`Profit: $${ue[this.data.ourLevel]}/s`}get ourMoneyText(){return`Money: $${Ds(this.data.ourMoney)}`}updateUpgradeButtonText(e){return e===0?"Upgrade":`Upgrade
$${Ds(e)}`}get nextUpgradePrice(){return ue[this.data.ourLevel]*25}updateInviteFriendButton(){this.data.ourLevel>pg?(this.friendButton.enabled=!0,this.friendButton.alpha=1):(this.friendButton.enabled=!1,this.friendButton.alpha=.4)}update(e){if(this.selectBusinessScreen.visible)this.selectBusinessScreen.update(e);else{let n=!0;if(this.data.ourLevel!==ue.length-1){let r=this.nextUpgradePrice;this.upgradeButton.text.text=this.updateUpgradeButtonText(r),this.data.ourMoney<r&&(n=!1)}else n=!1,this.upgradeButton.text.text="Upgrade";this.upgradeButton.setEnabled(n)}}updateByTimer(){this.moneyText.text=this.ourMoneyText}resize(){this.moneyText.x=w.leftPos+5,this.moneyText.y=w.topPos+10,this.friendsText.x=w.leftPos+5,this.friendsText.y=w.topPos+25,this.profitText.x=w.rightPos-5,this.profitText.y=w.topPos+10;const e=Math.floor(w.rightPos+w.leftPos)/5;this.marketButton.updateWidth(e),this.ratingButton.updateWidth(e),this.businessButton.updateWidth(e),this.stockButton.updateWidth(e),this.friendButton.updateWidth(e),this.marketButton.x=w.leftPos,this.ratingButton.x=w.leftPos+e,this.businessButton.x=w.leftPos+e*2,this.stockButton.x=w.leftPos+e*3,this.friendButton.x=w.leftPos+e*4;const n=w.bottomPos-this.businessButton.height;this.marketButton.y=n,this.ratingButton.y=n,this.businessButton.y=n,this.stockButton.y=n,this.friendButton.y=n,this.clearSaveButton.x=w.rightPos-this.clearSaveButton.width-5,this.clearSaveButton.y=w.topPos+20}}class gg extends N{constructor(){super();C(this,"gameView");C(this,"mainUI");C(this,"data");C(this,"timer");C(this,"assetBundles",["testBundle","background","buildings","fonts"]);this.data=new cg,Je.LoadData(this.data)}sizeLog(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=Math.max(document.documentElement.clientHeight,window.innerHeight||0),r=new Mi({text:e+"x"+n,style:{fontFamily:"Arial",fontSize:8,fontWeight:"bold",fill:"white",align:"center",stroke:{color:"#4a1850",width:2,join:"round"}}});r.anchor.set(.5),r.x=w.width/2,r.y=w.width/2-30,this.addChild(r);const s=new Mi({text:w.enlargedWidth+"x"+w.enlargedHeight,style:{fontFamily:"Arial",fontSize:8,fontWeight:"bold",fill:"white",align:"center",stroke:{color:"#4a1850",width:2,join:"round"}}});s.anchor.set(.5),s.x=w.width/2,s.y=w.width/2-20,this.addChild(s);const o=new Mi({text:window.Telegram.WebApp.platform,style:{fontFamily:"Arial",fontSize:8,fontWeight:"bold",fill:"white",align:"center",stroke:{color:"#4a1850",width:2,join:"round"}}});o.anchor.set(.5),o.x=w.width/2,o.y=w.width/2-10,this.addChild(o)}constructorWithAssets(){this.gameView=new fg(this.data),this.addChild(this.gameView),this.mainUI=new mg(this,this.data),this.addChild(this.mainUI)}update(e){this.gameView.update(e),this.mainUI.update(e),this.timer>0?this.timer-=e.deltaTime:this.data.ourLevel>0&&(this.timer=60,this.gameView.updateByTimer(),this.mainUI.updateByTimer(),Je.SaveData(this.data))}}let rl=420,sl=100;er.isDesktop&&(rl=400,sl=12);(async()=>(await w.Init(200,rl,1,sl),await w.ChangeScene(new gg)))();export{Q as $,zo as A,nt as B,N as C,lt as D,D as E,$ as F,L as G,It as H,Yr as I,Ft as J,vu as K,Fu as L,Y as M,st as N,rt as O,ut as P,Yu as Q,Ni as R,Au as S,Dt as T,So as U,Kr as V,jl as W,hn as X,j as Y,Js as Z,U as _,Li as a,Eo as a0,ze as a1,_c as a2,qo as a3,rf as a4,sf as a5,Be as a6,ct as a7,ua as a8,of as a9,$o as aa,xe as ab,Qc as ac,de as ad,zt as ae,Qr as af,ft as ag,wl as ah,Vo as ai,Ot as b,G as c,gr as d,yt as e,vs as f,kh as g,Dh as h,Pi as i,qt as j,Ti as k,mr as l,Ro as m,Er as n,Mo as o,uo as p,Bt as q,Ul as r,B as s,Sl as t,Lh as u,Uh as v,ht as w,Rt as x,Zs as y,vt as z};
