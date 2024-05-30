const __vite__fileDeps=["assets/browserAll-BGWdMN7L.js","assets/webworkerAll-BcNDIRvW.js","assets/colorToUniform-C5IXOCfX.js","assets/CanvasPool-BCSwuw65.js","assets/getBatchSamplersUniformGroup-BOL99xIx.js","assets/WebGPURenderer-DBT8-AIf.js","assets/SharedSystems-6njY3Bgk.js","assets/WebGLRenderer-C22Jpku2.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var qo=Object.defineProperty;var Ko=(n,t,e)=>t in n?qo(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var $=(n,t,e)=>(Ko(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Zo="modulepreload",Qo=function(n){return"/Test01/"+n},Hr={},hn=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(e.map(a=>{if(a=Qo(a),a in Hr)return;Hr[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Zo,l||(u.as="script",u.crossOrigin=""),u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((h,f)=>{u.addEventListener("load",h),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var B=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n))(B||{});const Zn=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},Ge=(n,t)=>Zn(n).priority??t,mt={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Zn).forEach(t=>{t.type.forEach(e=>{var r,i;return(i=(r=this._removeHandlers)[e])==null?void 0:i.call(r,t)})}),this},add(...n){return n.map(Zn).forEach(t=>{t.type.forEach(e=>{var s,o;const r=this._addHandlers,i=this._queue;r[e]?(o=r[e])==null||o.call(r,t):(i[e]=i[e]||[],(s=i[e])==null||s.push(t))})}),this},handle(n,t,e){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=t,i[n]=e;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>t(a)),delete s[n]),this},handleByMap(n,t){return this.handle(n,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(n,t,e=-1){return this.handle(n,r=>{t.findIndex(s=>s.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((s,o)=>Ge(o.value,e)-Ge(s.value,e)))},r=>{const i=t.findIndex(s=>s.name===r.name);i!==-1&&t.splice(i,1)})},handleByList(n,t,e=-1){return this.handle(n,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((i,s)=>Ge(s,e)-Ge(i,e)))},r=>{const i=t.indexOf(r.ref);i!==-1&&t.splice(i,1)})}},Jo={extension:{type:B.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await hn(()=>import("./browserAll-BGWdMN7L.js"),__vite__mapDeps([0,1,2,3,4]))}},ta={extension:{type:B.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await hn(()=>import("./webworkerAll-BcNDIRvW.js"),__vite__mapDeps([1,2,3,4]))}};class et{constructor(t,e,r){this._x=e||0,this._y=r||0,this._observer=t}clone(t){return new et(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function Tr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Li={exports:{}};(function(n){var t=Object.prototype.hasOwnProperty,e="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(e=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function s(l,c,u,h,f){if(typeof u!="function")throw new TypeError("The listener must be a function");var d=new i(u,h||l,f),m=e?e+c:c;return l._events[m]?l._events[m].fn?l._events[m]=[l._events[m],d]:l._events[m].push(d):(l._events[m]=d,l._eventsCount++),l}function o(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,h;if(this._eventsCount===0)return c;for(h in u=this._events)t.call(u,h)&&c.push(e?h.slice(1):h);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=e?e+c:c,h=this._events[u];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,m=new Array(d);f<d;f++)m[f]=h[f].fn;return m},a.prototype.listenerCount=function(c){var u=e?e+c:c,h=this._events[u];return h?h.fn?1:h.length:0},a.prototype.emit=function(c,u,h,f,d,m){var g=e?e+c:c;if(!this._events[g])return!1;var p=this._events[g],v=arguments.length,x,y;if(p.fn){switch(p.once&&this.removeListener(c,p.fn,void 0,!0),v){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,h),!0;case 4:return p.fn.call(p.context,u,h,f),!0;case 5:return p.fn.call(p.context,u,h,f,d),!0;case 6:return p.fn.call(p.context,u,h,f,d,m),!0}for(y=1,x=new Array(v-1);y<v;y++)x[y-1]=arguments[y];p.fn.apply(p.context,x)}else{var _=p.length,P;for(y=0;y<_;y++)switch(p[y].once&&this.removeListener(c,p[y].fn,void 0,!0),v){case 1:p[y].fn.call(p[y].context);break;case 2:p[y].fn.call(p[y].context,u);break;case 3:p[y].fn.call(p[y].context,u,h);break;case 4:p[y].fn.call(p[y].context,u,h,f);break;default:if(!x)for(P=1,x=new Array(v-1);P<v;P++)x[P-1]=arguments[P];p[y].fn.apply(p[y].context,x)}}return!0},a.prototype.on=function(c,u,h){return s(this,c,u,h,!1)},a.prototype.once=function(c,u,h){return s(this,c,u,h,!0)},a.prototype.removeListener=function(c,u,h,f){var d=e?e+c:c;if(!this._events[d])return this;if(!u)return o(this,d),this;var m=this._events[d];if(m.fn)m.fn===u&&(!f||m.once)&&(!h||m.context===h)&&o(this,d);else{for(var g=0,p=[],v=m.length;g<v;g++)(m[g].fn!==u||f&&!m[g].once||h&&m[g].context!==h)&&p.push(m[g]);p.length?this._events[d]=p.length===1?p[0]:p:o(this,d)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=e?e+c:c,this._events[u]&&o(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,n.exports=a})(Li);var ea=Li.exports;const wt=Tr(ea),na=Math.PI*2,ra=180/Math.PI,se=Math.PI/180;class ut{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new ut(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return yn.x=0,yn.y=0,yn}}const yn=new ut;class Y{constructor(t=1,e=0,r=0,i=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,r,i,s,o){return this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,e){e=e||new ut;const r=t.x,i=t.y;return e.x=this.a*r+this.c*i+this.tx,e.y=this.b*r+this.d*i+this.ty,e}applyInverse(t,e){e=e||new ut;const r=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,c=1/(r*o+s*-i),u=t.x,h=t.y;return e.x=o*c*u+-s*c*h+(l*s-a*o)*c,e.y=r*c*h+-i*c*u+(-l*r+a*i)*c,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),r=Math.sin(t),i=this.a,s=this.c,o=this.tx;return this.a=i*e-this.b*r,this.b=i*r+this.b*e,this.c=s*e-this.d*r,this.d=s*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this}append(t){const e=this.a,r=this.b,i=this.c,s=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*s,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*s,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*s+this.ty,this}appendFrom(t,e){const r=t.a,i=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,c=e.a,u=e.b,h=e.c,f=e.d;return this.a=r*c+i*h,this.b=r*u+i*f,this.c=s*c+o*h,this.d=s*u+o*f,this.tx=a*c+l*h+e.tx,this.ty=a*u+l*f+e.ty,this}setTransform(t,e,r,i,s,o,a,l,c){return this.a=Math.cos(a+c)*s,this.b=Math.sin(a+c)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(r*this.a+i*this.c),this.ty=e-(r*this.b+i*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,i=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,r=this.b,i=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-i,s),l=Math.atan2(r,e),c=Math.abs(a+l);return c<1e-5||Math.abs(na-c)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(i*i+s*s),t.position.x=this.tx+(o.x*e+o.y*i),t.position.y=this.ty+(o.x*r+o.y*s),t}invert(){const t=this.a,e=this.b,r=this.c,i=this.d,s=this.tx,o=t*i-e*r;return this.a=i/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new Y;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return sa.identity()}static get shared(){return ia.identity()}}const ia=new Y,sa=new Y,Dt=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Lt=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Gt=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Nt=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Qn=[],Gi=[],Ne=Math.sign;function oa(){for(let n=0;n<16;n++){const t=[];Qn.push(t);for(let e=0;e<16;e++){const r=Ne(Dt[n]*Dt[e]+Gt[n]*Lt[e]),i=Ne(Lt[n]*Dt[e]+Nt[n]*Lt[e]),s=Ne(Dt[n]*Gt[e]+Gt[n]*Nt[e]),o=Ne(Lt[n]*Gt[e]+Nt[n]*Nt[e]);for(let a=0;a<16;a++)if(Dt[a]===r&&Lt[a]===i&&Gt[a]===s&&Nt[a]===o){t.push(a);break}}}for(let n=0;n<16;n++){const t=new Y;t.set(Dt[n],Lt[n],Gt[n],Nt[n],0,0),Gi.push(t)}}oa();const Z={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Dt[n],uY:n=>Lt[n],vX:n=>Gt[n],vY:n=>Nt[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>Qn[n][t],sub:(n,t)=>Qn[n][Z.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?Z.S:Z.N:Math.abs(t)*2<=Math.abs(n)?n>0?Z.E:Z.W:t>0?n>0?Z.SE:Z.SW:n>0?Z.NE:Z.NW,matrixAppendRotationInv:(n,t,e=0,r=0)=>{const i=Gi[Z.inv(t)];i.tx=e,i.ty=r,n.append(i)}},$e=[new ut,new ut,new ut,new ut];class ot{constructor(t=0,e=0,r=0,i=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new ot(0,0,0,0)}clone(){return new ot(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,r){const{width:i,height:s}=this;if(i<=0||s<=0)return!1;const o=this.x,a=this.y,l=o-r/2,c=o+i+r/2,u=a-r/2,h=a+s+r/2,f=o+r/2,d=o+i-r/2,m=a+r/2,g=a+s-r/2;return t>=l&&t<=c&&e>=u&&e<=h&&!(t>f&&t<d&&e>m&&e<g)}intersects(t,e){if(!e){const F=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=F)return!1;const S=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>S}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const a=$e[0].set(t.left,t.top),l=$e[1].set(t.left,t.bottom),c=$e[2].set(t.right,t.top),u=$e[3].set(t.right,t.bottom);if(c.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(e.a*e.d-e.b*e.c);if(h===0||(e.apply(a,a),e.apply(l,l),e.apply(c,c),e.apply(u,u),Math.max(a.x,l.x,c.x,u.x)<=r||Math.min(a.x,l.x,c.x,u.x)>=i||Math.max(a.y,l.y,c.y,u.y)<=s||Math.min(a.y,l.y,c.y,u.y)>=o))return!1;const f=h*(l.y-a.y),d=h*(a.x-l.x),m=f*r+d*s,g=f*i+d*s,p=f*r+d*o,v=f*i+d*o;if(Math.max(m,g,p,v)<=f*a.x+d*a.y||Math.min(m,g,p,v)>=f*u.x+d*u.y)return!1;const x=h*(a.y-c.y),y=h*(c.x-a.x),_=x*r+y*s,P=x*i+y*s,U=x*r+y*o,A=x*i+y*o;return!(Math.max(_,P,U,A)<=x*a.x+y*a.y||Math.min(_,P,U,A)>=x*u.x+y*u.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(r-e,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(t=1,e=.001){const r=Math.ceil((this.x+this.width-e)*t)/t,i=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=r-this.x,this.height=i-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=r-e,this.y=i,this.height=s-i,this}getBounds(t){return t=t||new ot,t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const _n={default:-1};function nt(n="default"){return _n[n]===void 0&&(_n[n]=-1),++_n[n]}const jr={},Q="8.0.0";function I(n,t,e=3){if(jr[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`):(r=r.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`),console.warn(r))),jr[t]=!0}const Ni=()=>{};function qr(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Kr(n){return!(n&n-1)&&!!n}function aa(n){const t={};for(const e in n)n[e]!==void 0&&(t[e]=n[e]);return t}const Zr=Object.create(null);function la(n){const t=Zr[n];return t===void 0&&(Zr[n]=nt("resource")),t}const $i=class Vi extends wt{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...Vi.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){I(Q,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=la(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};$i.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Wi=$i;const Xi=class Yi extends wt{constructor(t={}){super(),this.options=t,this.uid=nt("textureSource"),this._resourceType="textureSource",this._resourceId=nt("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...Yi.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Wi(aa(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,r;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=nt("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,r){r=r||this._resolution,t=t||this.width,e=e||this.height;const i=Math.round(t*r),s=Math.round(e*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=nt("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Kr(this.pixelWidth)&&Kr(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};Xi.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let At=Xi;class Pr extends At{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(e instanceof Float32Array?r="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?r="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?r="rgba16uint":(e instanceof Int8Array,r="bgra8unorm")),super({...t,resource:e,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}Pr.extension=B.TextureSource;const Qr=new Y;class ua{constructor(t,e){this.mapCoord=new Y,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const r=this.mapCoord;for(let i=0;i<t.length;i+=2){const s=t[i],o=t[i+1];e[i]=s*r.a+o*r.c+r.tx,e[i+1]=s*r.b+o*r.d+r.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const r=t.orig,i=t.trim;i&&(Qr.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Qr));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=l/s.pixelWidth,this.uClampOffset[1]=l/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class E extends wt{constructor({source:t,label:e,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:c}={}){if(super(),this.uid=nt("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new ot,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new At,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:u,height:h}=this._source;this.frame.width=u,this.frame.height=h}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=c||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new ua(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:r,height:i}=this._source,s=e.x/r,o=e.y/i,a=e.width/r,l=e.height/i;let c=this.rotate;if(c){const u=a/2,h=l/2,f=s+u,d=o+h;c=Z.add(c,Z.NW),t.x0=f+u*Z.uX(c),t.y0=d+h*Z.uY(c),c=Z.add(c,2),t.x1=f+u*Z.uX(c),t.y1=d+h*Z.uY(c),c=Z.add(c,2),t.x2=f+u*Z.uX(c),t.y2=d+h*Z.uY(c),c=Z.add(c,2),t.x3=f+u*Z.uX(c),t.y3=d+h*Z.uY(c)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return I(Q,"Texture.baseTexture is now Texture.source"),this._source}}E.EMPTY=new E({label:"EMPTY",source:new At({label:"EMPTY"})});E.EMPTY.destroy=Ni;E.WHITE=new E({source:new Pr({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});E.WHITE.destroy=Ni;function ca(n,t,e,r){const{width:i,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-t._x*i-r,n.maxX=n.minX+a,n.minY=o.y-t._y*s-r,n.maxY=n.minY+l}else n.minX=-t._x*i-r,n.maxX=n.minX+i,n.minY=-t._y*s-r,n.maxY=n.minY+s}var ha={grad:.9,turn:360,rad:360/(2*Math.PI)},Tt=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},it=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*n)/e+0},ft=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),n>e?e:n>t?n:t},Hi=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},Jr=function(n){return{r:ft(n.r,0,255),g:ft(n.g,0,255),b:ft(n.b,0,255),a:ft(n.a)}},bn=function(n){return{r:it(n.r),g:it(n.g),b:it(n.b),a:it(n.a,3)}},fa=/^#([0-9a-f]{3,8})$/i,Ve=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},ji=function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=Math.max(t,e,r),o=s-Math.min(t,e,r),a=o?s===t?(e-r)/o:s===e?2+(r-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},qi=function(n){var t=n.h,e=n.s,r=n.v,i=n.a;t=t/360*6,e/=100,r/=100;var s=Math.floor(t),o=r*(1-e),a=r*(1-(t-s)*e),l=r*(1-(1-t+s)*e),c=s%6;return{r:255*[r,a,o,o,l,r][c],g:255*[l,r,r,a,o,o][c],b:255*[o,o,l,r,r,a][c],a:i}},ti=function(n){return{h:Hi(n.h),s:ft(n.s,0,100),l:ft(n.l,0,100),a:ft(n.a)}},ei=function(n){return{h:it(n.h),s:it(n.s),l:it(n.l),a:it(n.a,3)}},ni=function(n){return qi((e=(t=n).s,{h:t.h,s:(e*=((r=t.l)<50?r:100-r)/100)>0?2*e/(r+e)*100:0,v:r+e,a:t.a}));var t,e,r},Me=function(n){return{h:(t=ji(n)).h,s:(i=(200-(e=t.s))*(r=t.v)/100)>0&&i<200?e*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,e,r,i},da=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ma=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,pa=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ga=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Jn={string:[[function(n){var t=fa.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?it(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?it(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=pa.exec(n)||ga.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:Jr({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=da.exec(n)||ma.exec(n);if(!t)return null;var e,r,i=ti({h:(e=t[1],r=t[2],r===void 0&&(r="deg"),Number(e)*(ha[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return ni(i)},"hsl"]],object:[[function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return Tt(t)&&Tt(e)&&Tt(r)?Jr({r:Number(t),g:Number(e),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var t=n.h,e=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!Tt(t)||!Tt(e)||!Tt(r))return null;var o=ti({h:Number(t),s:Number(e),l:Number(r),a:Number(s)});return ni(o)},"hsl"],[function(n){var t=n.h,e=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!Tt(t)||!Tt(e)||!Tt(r))return null;var o=function(a){return{h:Hi(a.h),s:ft(a.s,0,100),v:ft(a.v,0,100),a:ft(a.a)}}({h:Number(t),s:Number(e),v:Number(r),a:Number(s)});return qi(o)},"hsv"]]},ri=function(n,t){for(var e=0;e<t.length;e++){var r=t[e][0](n);if(r)return[r,t[e][1]]}return[null,void 0]},xa=function(n){return typeof n=="string"?ri(n.trim(),Jn.string):typeof n=="object"&&n!==null?ri(n,Jn.object):[null,void 0]},Sn=function(n,t){var e=Me(n);return{h:e.h,s:ft(e.s+100*t,0,100),l:e.l,a:e.a}},Cn=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},ii=function(n,t){var e=Me(n);return{h:e.h,s:e.s,l:ft(e.l+100*t,0,100),a:e.a}},tr=function(){function n(t){this.parsed=xa(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return it(Cn(this.rgba),2)},n.prototype.isDark=function(){return Cn(this.rgba)<.5},n.prototype.isLight=function(){return Cn(this.rgba)>=.5},n.prototype.toHex=function(){return t=bn(this.rgba),e=t.r,r=t.g,i=t.b,o=(s=t.a)<1?Ve(it(255*s)):"","#"+Ve(e)+Ve(r)+Ve(i)+o;var t,e,r,i,s,o},n.prototype.toRgb=function(){return bn(this.rgba)},n.prototype.toRgbString=function(){return t=bn(this.rgba),e=t.r,r=t.g,i=t.b,(s=t.a)<1?"rgba("+e+", "+r+", "+i+", "+s+")":"rgb("+e+", "+r+", "+i+")";var t,e,r,i,s},n.prototype.toHsl=function(){return ei(Me(this.rgba))},n.prototype.toHslString=function(){return t=ei(Me(this.rgba)),e=t.h,r=t.s,i=t.l,(s=t.a)<1?"hsla("+e+", "+r+"%, "+i+"%, "+s+")":"hsl("+e+", "+r+"%, "+i+"%)";var t,e,r,i,s},n.prototype.toHsv=function(){return t=ji(this.rgba),{h:it(t.h),s:it(t.s),v:it(t.v),a:it(t.a,3)};var t},n.prototype.invert=function(){return yt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),yt(Sn(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),yt(Sn(this.rgba,-t))},n.prototype.grayscale=function(){return yt(Sn(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),yt(ii(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),yt(ii(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?yt({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):it(this.rgba.a,3);var e},n.prototype.hue=function(t){var e=Me(this.rgba);return typeof t=="number"?yt({h:t,s:e.s,l:e.l,a:e.a}):it(e.h)},n.prototype.isEqual=function(t){return this.toHex()===yt(t).toHex()},n}(),yt=function(n){return n instanceof tr?n:new tr(n)},si=[],va=function(n){n.forEach(function(t){si.indexOf(t)<0&&(t(tr,Jn),si.push(t))})};function ya(n,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in e)r[e[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,c=r[this.toHex()];if(c)return c;if(o!=null&&o.closest){var u=this.toRgb(),h=1/0,f="black";if(!s.length)for(var d in e)s[d]=new n(e[d]).toRgb();for(var m in e){var g=(a=u,l=s[m],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,f=m)}return f}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new n(l).toRgb():null},"name"])}va([ya]);const oe=class Ae{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Ae)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._normalize(t),this._value=this._cloneSource(t))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const r=typeof t;if(r!==typeof e)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,r,i]=this._components;return{r:t,g:e,b:r,a:i}}toRgb(){const[t,e,r]=this._components;return{r:t,g:e,b:r}}toRgbaString(){const[t,e,r]=this.toUint8RgbArray();return`rgba(${t},${e},${r},${this.alpha})`}toUint8RgbArray(t){const[e,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb,t[0]=Math.round(e*255),t[1]=Math.round(r*255),t[2]=Math.round(i*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t=t||this._arrayRgba;const[e,r,i,s]=this._components;return t[0]=e,t[1]=r,t[2]=i,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t=t||this._arrayRgb;const[e,r,i]=this._components;return t[0]=e,t[1]=r,t[2]=i,t}toNumber(){return this._int}toBgrNumber(){const[t,e,r]=this.toUint8RgbArray();return(r<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,r,i,s]=Ae._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return e&&(r=r*t+.5|0,i=i*t+.5|0,s=s*t+.5|0),(t*255<<24)+(r<<16)+(i<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,r,i,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,r,i,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,r,i,s=255]=t,e/=255,r/=255,i/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Ae.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=yt(t);o.isValid()&&({r:e,g:r,b:i,a:s}=o.rgba,e/=255,r/=255,i/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,r]=this._components;this._int=(t*255<<16)+(e*255<<8)+(r*255|0)}_clamp(t,e=0,r=1){return typeof t=="number"?Math.min(Math.max(t,e),r):(t.forEach((i,s)=>{t[s]=Math.min(Math.max(i,e),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Ae||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};oe.shared=new oe;oe._temp=new oe;oe.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let H=oe;const _a={cullArea:null,cullable:!1,cullableChildren:!0};function ba(n,t,e){const r=n.length;let i;if(t>=r||e===0)return;e=t+e>r?r-t:e;const s=r-e;for(i=t;i<s;++i)n[i]=n[i+e];n.length=s}const Sa={allowChildren:!0,removeChildren(n=0,t){const e=t??this.children.length,r=e-n,i=[];if(r>0&&r<=e){for(let o=e-1;o>=n;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}ba(this.children,n,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const t=this.getChildAt(n);return this.removeChild(t)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,t)},getChildIndex(n){const t=this.children.indexOf(n);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(n,t){this.allowChildren||I(Q,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===t)return n;i!==-1&&n.parent.children.splice(i,1)}t===e.length?e.push(n):e.splice(t,0,n),n.parent=this,n.didChange=!0,n.didViewUpdate=!1,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,t),n.emit("added",this),n},swapChildren(n,t){if(n===t)return;const e=this.getChildIndex(n),r=this.getChildIndex(t);this.children[e]=t,this.children[r]=n},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)}};class oi{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class Mr{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var r;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(r=e.init)==null||r.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}}class Ca{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new Mr(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const r=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[r]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const Mt=new Ca;class wa{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const r=this._tests[e];if(r.test(t))return Mt.get(r.maskClass,t)}return t}returnMaskEffect(t){Mt.return(t)}}const er=new wa;mt.handleByList(B.MaskEffect,er._effectClasses);const Aa={_maskEffect:null,_filterEffect:null,effects:[],addEffect(n){if(this.effects.indexOf(n)!==-1)return;this.effects.push(n),this.effects.sort((r,i)=>r.priority-i.priority);const e=this.renderGroup||this.parentRenderGroup;e&&(e.structureDidChange=!0),this._updateIsSimple()},removeEffect(n){const t=this.effects.indexOf(n);t!==-1&&(this.effects.splice(t,1),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateIsSimple())},set mask(n){const t=this._maskEffect;(t==null?void 0:t.mask)!==n&&(t&&(this.removeEffect(t),er.returnMaskEffect(t),this._maskEffect=null),n!=null&&(this._maskEffect=er.getMaskEffect(n),this.addEffect(this._maskEffect)))},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const t=this._filterEffect||(this._filterEffect=new oi);n=n;const e=(n==null?void 0:n.length)>0,r=((s=t.filters)==null?void 0:s.length)>0,i=e!==r;n=Array.isArray(n)?n.slice(0):n,t.filters=Object.freeze(n),i&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new oi),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},Ta={label:null,get name(){return I(Q,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){I(Q,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,t=!1){return this.getChildByLabel(n,t)},getChildByLabel(n,t=!1){const e=this.children;for(let r=0;r<e.length;r++){const i=e[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(t)for(let r=0;r<e.length;r++){const s=e[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,t=!1,e=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&e.push(s)}if(t)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,e);return e}},ai=new Y;class St{constructor(t=1/0,e=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=ai,this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new ot);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=ai,this}set(t,e,r,i){this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}addFrame(t,e,r,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,c=s.d,u=s.tx,h=s.ty;let f=this.minX,d=this.minY,m=this.maxX,g=this.maxY,p=o*t+l*e+u,v=a*t+c*e+h;p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),p=o*r+l*e+u,v=a*r+c*e+h,p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),p=o*t+l*i+u,v=a*t+c*i+h,p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),p=o*r+l*i+u,v=a*r+c*i+h,p<f&&(f=p),v<d&&(d=v),p>m&&(m=p),v>g&&(g=v),this.minX=f,this.minY=d,this.maxX=m,this.maxY=g}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:c,tx:u,ty:h}=t;let f=o*e+l*r+u,d=a*e+c*r+h;this.minX=f,this.minY=d,this.maxX=f,this.maxY=d,f=o*i+l*r+u,d=a*i+c*r+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*e+l*s+u,d=a*e+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY,f=o*i+l*s+u,d=a*i+c*s+h,this.minX=f<this.minX?f:this.minX,this.minY=d<this.minY?d:this.minY,this.maxX=f>this.maxX?f:this.maxX,this.maxY=d>this.maxY?d:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,r,i){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new St(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,r,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const c=i.a,u=i.b,h=i.c,f=i.d,d=i.tx,m=i.ty;for(let g=e;g<r;g+=2){const p=t[g],v=t[g+1],x=c*p+h*v+d,y=u*p+f*v+m;s=x<s?x:s,o=y<o?y:o,a=x>a?x:a,l=y>l?y:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}}const Ft=new Mr(Y),ae=new Mr(St);function Ki(n,t,e){e.clear();let r,i;return n.parent?t?r=n.parent.worldTransform:(i=Ft.get().identity(),r=fn(n,i)):r=Y.IDENTITY,Zi(n,e,r,t),i&&Ft.return(i),e.isValid||e.set(0,0,0,0),e}function Zi(n,t,e,r){var a,l;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=Ft.get(),i.appendFrom(n.localTransform,e));const s=t,o=!!n.effects.length;if(o&&(t=ae.get().clear()),n.boundsArea)t.addRect(n.boundsArea,i);else{n.addBounds&&(t.matrix=i,n.addBounds(t));for(let c=0;c<n.children.length;c++)Zi(n.children[c],t,i,r)}if(o){for(let c=0;c<n.effects.length;c++)(l=(a=n.effects[c]).addBounds)==null||l.call(a,t);s.addBounds(t,Y.IDENTITY),ae.return(t)}r||Ft.return(i)}function fn(n,t){const e=n.parent;return e&&(fn(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}let wn=0;const li=500;function at(...n){wn!==li&&(wn++,wn===li?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function Qi(n,t,e){return t.clear(),e||(e=Y.IDENTITY),Ji(n,t,e,n,!0),t.isValid||t.set(0,0,0,0),t}function Ji(n,t,e,r,i){var l,c;let s;if(i)s=Ft.get(),s=e.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const u=n.localTransform;s=Ft.get(),s.appendFrom(u,e)}const o=t,a=!!n.effects.length;if(a&&(t=ae.get().clear()),n.boundsArea)t.addRect(n.boundsArea,s);else{n.renderPipeId&&(t.matrix=s,n.addBounds(t));const u=n.children;for(let h=0;h<u.length;h++)Ji(u[h],t,s,r,!1)}if(a){for(let u=0;u<n.effects.length;u++)(c=(l=n.effects[u]).addLocalBounds)==null||c.call(l,t,r);o.addBounds(t,Y.IDENTITY),ae.return(t)}Ft.return(s)}function ts(n,t){const e=n.children;for(let r=0;r<e.length;r++){const i=e[r],s=(i.uid&255)<<24|i._didChangeId&16777215;t.data[t.index]!==s&&(t.data[t.index]=s,t.didChange=!0),t.index++,i.children.length&&ts(i,t)}return t.didChange}const Pa=new Y,Ma={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=n/t*e:this.scale.x=e},_setHeight(n,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=n/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new St});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didChangeId>>12&&(n.didChange=!0,n.data[0]=this._didChangeId>>12),ts(this,n),n.didChange&&Qi(this,n.localBounds,Pa),n.localBounds},getBounds(n,t){return Ki(this,n,t||new St)}},Fa={_onRender:null,set onRender(n){const t=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},za={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(Ia))}};function Ia(n,t){return n._zIndex-t._zIndex}const Oa={getGlobalPosition(n=new ut,t=!1){return this.parent?this.parent.toGlobal(this._position,n,t):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,t,e=!1){if(!e){this.updateLocalTransform();const r=fn(this,new Y);return r.append(this.localTransform),r.apply(n,t)}return this.worldTransform.apply(n,t)},toLocal(n,t,e,r){if(t&&(n=t.toGlobal(n,e,r)),!r){this.updateLocalTransform();const i=fn(this,new Y);return i.append(this.localTransform),i.applyInverse(n,e)}return this.worldTransform.applyInverse(n,e)}};class es{constructor(){this.uid=nt("instructionSet"),this.instructions=[],this.instructionSize=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}class Ra{constructor(t){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new Y,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new es,this._onRenderContainers=[],this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let r=0;r<e.length;r++)this.addChild(e[r])}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let r=0;r<e.length;r++)this.addChild(e[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let r=0;r<e.length;r++)this.removeChild(e[r])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(t.didViewUpdate=!1,this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t))}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}getChildren(t=[]){const e=this.root.children;for(let r=0;r<e.length;r++)this._getChildren(e[r],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const r=t.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],e);return e}}function Ua(n,t,e={}){for(const r in t)!e[r]&&t[r]!==void 0&&(n[r]=t[r])}const An=new et(null),Tn=new et(null),Pn=new et(null,1,1),ui=1,Ea=2,Mn=4;class tt extends wt{constructor(t={}){var e,r;super(),this.uid=nt("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new Y,this.relativeGroupTransform=new Y,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new et(this,0,0),this._scale=Pn,this._pivot=Tn,this._skew=An,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didChangeId=0,this._didLocalTransformChangeId=-1,Ua(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(i=>this.addChild(i)),this.effects=[],(r=t.parent)==null||r.addChild(this)}static mixin(t){Object.defineProperties(tt.prototype,Object.getOwnPropertyDescriptors(t))}addChild(...t){if(this.allowChildren||I(Q,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let i=0;i<t.length;i++)this.addChild(t[i]);return t[0]}const e=t[0];if(e.parent===this)return this.children.splice(this.children.indexOf(e),1),this.children.push(e),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),e;e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e.didViewUpdate=!1,e._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didChangeId+=4096,e._zIndex!==0&&e.depthOfChildModified(),e}removeChild(...t){if(t.length>1){for(let i=0;i<t.length;i++)this.removeChild(t[i]);return t[0]}const e=t[0],r=this.children.indexOf(e);return r>-1&&(this._didChangeId+=4096,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,r),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didChangeId++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){if(this.renderGroup&&t===!1)throw new Error("[Pixi] cannot undo a render group just yet");t&&this.enableRenderGroup()}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t&&t.removeChild(this),this.renderGroup=new Ra(this),t&&t.addChild(this),this._updateIsSimple(),this.groupTransform=Y.IDENTITY}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new Y),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*ra}set angle(t){this.rotation=t*se}get pivot(){return this._pivot===Tn&&(this._pivot=new et(this,0,0)),this._pivot}set pivot(t){this._pivot===Tn&&(this._pivot=new et(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===An&&(this._skew=new et(this,0,0)),this._skew}set skew(t){this._skew===An&&(this._skew=new et(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===Pn&&(this._scale=new et(this,1,1)),this._scale}set scale(t){this._scale===Pn&&(this._scale=new et(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const r=this.getLocalBounds();let i,s;typeof t!="object"?(i=t,s=e??t):(i=t.width,s=t.height??t.width),i!==void 0&&this._setWidth(i,r.width),s!==void 0&&this._setHeight(s,r.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){if((this._didLocalTransformChangeId&15)===this._didChangeId)return;this._didLocalTransformChangeId=this._didChangeId;const t=this.localTransform,e=this._scale,r=this._pivot,i=this._position,s=e._x,o=e._y,a=r._x,l=r._y;t.a=this._cx*s,t.b=this._sx*s,t.c=this._cy*o,t.d=this._sy*o,t.tx=i._x-(a*t.a+l*t.c),t.ty=i._y-(a*t.b+l*t.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=ui,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=H.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=ui,this._onUpdate())}get tint(){const t=this.localColor;return((t&255)<<16)+(t&65280)+(t>>16&255)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Ea,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?1:0;(this.localDisplayStatus&2)>>1!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Mn,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?1:0;(this.localDisplayStatus&4)>>2!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=Mn,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=Mn,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){if(this.destroyed)return;this.destroyed=!0;const e=this.removeChildren(0,this.children.length);if(this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.children)for(let i=0;i<e.length;++i)e[i].destroy(t)}}tt.mixin(Sa);tt.mixin(Oa);tt.mixin(Fa);tt.mixin(Ma);tt.mixin(Aa);tt.mixin(Ta);tt.mixin(za);tt.mixin(_a);class le extends tt{constructor(t=E.EMPTY){t instanceof E&&(t={texture:t});const{texture:e=E.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._didSpriteUpdate=!1,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._sourceBounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this._sourceBoundsDirty=!0,this._roundPixels=0,this._anchor=new et({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=i??!1,s&&(this.width=s),o&&(this.height=o)}static from(t,e=!1){return t instanceof E?new le(t):new le(E.from(t,e))}set texture(t){t||(t=E.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get sourceBounds(){return this._sourceBoundsDirty&&(this._updateSourceBounds(),this._sourceBoundsDirty=!1),this._sourceBounds}containsPoint(t){const e=this.sourceBounds;return t.x>=e.maxX&&t.x<=e.minX&&t.y>=e.maxY&&t.y<=e.minY}addBounds(t){const e=this._texture.trim?this.sourceBounds:this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}onViewUpdate(){if(this._didChangeId+=4096,this._didSpriteUpdate=!0,this._sourceBoundsDirty=this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_updateBounds(){ca(this._bounds,this._anchor,this._texture,0)}_updateSourceBounds(){const t=this._anchor,e=this._texture,r=this._sourceBounds,{width:i,height:s}=e.orig;r.maxX=-t._x*i,r.minX=r.maxX+i,r.maxY=-t._y*s,r.minY=r.maxY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null,this._bounds=null,this._sourceBounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width)}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){let r,i;typeof t!="object"?(r=t,i=e??t):(r=t.width,i=t.height??t.width),r!==void 0&&this._setWidth(r,this._texture.orig.width),i!==void 0&&this._setHeight(i,this._texture.orig.height)}}const Ba=new St;function ns(n,t,e){const r=Ba;n.measurable=!0,Ki(n,e,r),t.addBoundsMask(r),n.measurable=!1}function rs(n,t,e){const r=ae.get();n.measurable=!0;const i=Ft.get().identity(),s=is(n,e,i);Qi(n,r,s),n.measurable=!1,t.addBoundsMask(r),Ft.return(i),ae.return(r)}function is(n,t,e){return n?(n!==t&&(is(n.parent,t,e),n.updateLocalTransform(),e.append(n.localTransform)),e):(at("Mask bounds, renderable is not inside the root container"),e)}class ss{constructor(t){this.priority=0,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof le),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){ns(this.mask,t,e)}addLocalBounds(t,e){rs(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof le}}ss.extension=B.MaskEffect;class os{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}os.extension=B.MaskEffect;class as{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){ns(this.mask,t,e)}addLocalBounds(t,e){rs(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof tt}}as.extension=B.MaskEffect;const ka={createCanvas:(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let ci=ka;const st={get(){return ci},set(n){ci=n}};class ls extends At{constructor(t){t.resource||(t.resource=st.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity;const e=t.resource;(this.pixelWidth!==e.width||this.pixelWidth!==e.height)&&this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,r=this._resolution){const i=super.resize(t,e,r);return i&&this.resizeCanvas(),i}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}}ls.extension=B.TextureSource;class he extends At{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=st.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0),t.resource=e,at("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap}}he.extension=B.TextureSource;var nr=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(nr||{});class Fn{constructor(t,e=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=r,this._once=i}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const us=class ht{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Fn(null,null,1/0),this.deltaMS=1/ht.targetFPMS,this.elapsedMS=1/ht.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,r=nr.NORMAL){return this._addListener(new Fn(t,e,r))}addOnce(t,e,r=nr.NORMAL){return this._addListener(new Fn(t,e,r,!0))}_addListener(t){let e=this._head.next,r=this._head;if(!e)t.connect(r);else{for(;e;){if(t.priority>e.priority){t.connect(r);break}r=e,e=e.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,e){let r=this._head.next;for(;r;)r.match(t,e)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*ht.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,e)/1e3,ht.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!ht._shared){const t=ht._shared=new ht;t.autoStart=!0,t._protected=!0}return ht._shared}static get system(){if(!ht._system){const t=ht._system=new ht;t.autoStart=!0,t._protected=!0}return ht._system}};us.targetFPMS=.06;let We=us,zn;async function cs(){return zn??(zn=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(i),t.deleteTexture(r),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),zn}const pn=class hs extends At{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...hs.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=We.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await cs(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(We.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(We.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(We.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||globalThis.VideoFrame&&t instanceof VideoFrame}};pn.extension=B.TextureSource;pn.defaultOptions={...At.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};pn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let Je=pn;const xt=(n,t,e=!1)=>(Array.isArray(n)||(n=[n]),t?n.map(r=>typeof r=="string"||e?t(r):r):n);class Da{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||at(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const r=xt(t);let i;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.test(e)){i=c.getCacheableAssets(r,e);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const c=i?i[l]:e;this._cache.has(l)&&this._cache.get(l)!==c&&at("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){at(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(i=>{this._cache.delete(i)}),e.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const lt=new Da,rr=[];mt.handleByList(B.TextureSource,rr);function La(n={}){const t=n&&n.resource,e=t?n.resource:n,r=t?n:{resource:n};for(let i=0;i<rr.length;i++){const s=rr[i];if(s.test(e))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function Ga(n={},t=!1){const e=n&&n.resource,r=e?n.resource:n,i=e?n:{resource:n};if(!t&&lt.has(r))return lt.get(r);const s=new E({source:La(i)});return s.on("destroy",()=>{lt.has(r)&&lt.remove(r)}),t||lt.set(r,s),s}function Na(n,t=!1){return typeof n=="string"?lt.get(n):n instanceof At?new E({source:n}):Ga(n,t)}E.from=Na;mt.add(ss,os,as,Je,he,ls,Pr);var jt=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(jt||{});function gt(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function ye(n){return n.split("?")[0].split("#")[0]}function $a(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Va(n,t,e){return n.replace(new RegExp($a(t),"g"),e)}function Wa(n,t){let e="",r=0,i=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(e.length<2||r!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",r=0):(e=e.slice(0,l),r=e.length-1-e.lastIndexOf("/")),i=a,s=0;continue}}else if(e.length===2||e.length===1){e="",r=0,i=a,s=0;continue}}}else e.length>0?e+=`/${n.slice(i+1,a)}`:e=n.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const Ct={toPosix(n){return Va(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){gt(n),n=this.toPosix(n);const t=/^file:\/\/\//.exec(n);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(n);return e?e[0]:""},toAbsolute(n,t,e){if(gt(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=ye(this.toPosix(t??st.get().getBaseUrl())),i=ye(this.toPosix(e??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?Ct.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(gt(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let t="";const e=n.startsWith("/");this.hasProtocol(n)&&(t=this.rootname(n),n=n.slice(t.length));const r=n.endsWith("/");return n=Wa(n),n.length>0&&r&&(n+="/"),e?`/${n}`:t+n},isAbsolute(n){return gt(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let t;for(let e=0;e<n.length;++e){const r=n[e];if(gt(r),r.length>0)if(t===void 0)t=r;else{const i=n[e-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(n){if(gt(n),n.length===0)return".";n=this.toPosix(n);let t=n.charCodeAt(0);const e=t===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(t=n.charCodeAt(a),t===47){if(!i){r=a;break}}else i=!1;return r===-1?e?"/":this.isUrl(o)?s+n:s:e&&r===1?"//":s+n.slice(0,r)},rootname(n){gt(n),n=this.toPosix(n);let t="";if(n.startsWith("/")?t="/":t=this.getProtocol(n),this.isUrl(n)){const e=n.indexOf("/",t.length);e!==-1?t=n.slice(0,e):t=n,t.endsWith("/")||(t+="/")}return t},basename(n,t){gt(n),t&&gt(t),n=ye(this.toPosix(n));let e=0,r=-1,i=!0,s;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";let o=t.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!i){e=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return e===r?r=a:r===-1&&(r=n.length),n.slice(e,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){e=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(e,r)},extname(n){gt(n),n=ye(this.toPosix(n));let t=-1,e=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!i){e=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||r===-1||s===0||s===1&&t===r-1&&t===e+1?"":n.slice(t,r)},parse(n){gt(n);const t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;n=ye(this.toPosix(n));let e=n.charCodeAt(0);const r=this.isAbsolute(n);let i;t.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,c=n.length-1,u=0;for(;c>=i;--c){if(e=n.charCodeAt(c),e===47){if(!l){o=c+1;break}continue}a===-1&&(l=!1,a=c+1),e===46?s===-1?s=c:u!==1&&(u=1):s!==-1&&(u=-1)}return s===-1||a===-1||u===0||u===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&r?t.base=t.name=n.slice(1,a):t.base=t.name=n.slice(o,a)):(o===0&&r?(t.name=n.slice(1,s),t.base=n.slice(1,a)):(t.name=n.slice(o,s),t.base=n.slice(o,a)),t.ext=n.slice(s,a)),t.dir=this.dirname(n),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function fs(n,t,e,r,i){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?fs(n.replace(r[e],a),t,e+1,r,i):i.push(n.replace(r[e],a))}}function Xa(n){const t=/\{(.*?)\}/g,e=n.match(t),r=[];if(e){const i=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),fs(n,i,0,e,r)}else r.push(n);return r}const dn=n=>!Array.isArray(n);class fe{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&")}}getAlias(t){const{alias:e,src:r}=t;return xt(e||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&at("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const r=[];let i=e;Array.isArray(e)||(i=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const c=this._createBundleAssetId(t,a);r.push(c),l=[a,c]}else{const c=a.map(u=>this._createBundleAssetId(t,u));r.push(...c),l=[...a,...c]}this.add({...s,alias:l,src:o})}),this._bundles[t]=r}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let r;r=s=>{this.hasKey(s)&&at(`[Resolver] already has key: ${s} overwriting`)},xt(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:c}=s;const u=xt(o).map(d=>typeof d=="string"?Xa(d):Array.isArray(d)?d:[d]),h=this.getAlias(s);Array.isArray(h)?h.forEach(r):r(h);const f=[];u.forEach(d=>{d.forEach(m=>{let g={};if(typeof m!="object"){g.src=m;for(let p=0;p<this._parsers.length;p++){const v=this._parsers[p];if(v.test(m)){g=v.parse(m);break}}}else a=m.data??a,l=m.format??l,c=m.loadParser??c,g={...g,...m};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:c}),f.push(g)})}),h.forEach(d=>{this._assetMap[d]=f})})}resolveBundle(t){const e=dn(t);t=xt(t);const r={};return t.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const c=o[l];a[this._extractAssetIdFromBundle(i,l)]=c}r[i]=a}}),e?r[t[0]]:r}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const r={};for(const i in e)r[i]=e[i].src;return r}return e.src}resolve(t){const e=dn(t);t=xt(t);const r={};return t.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const c=s.filter(u=>u[a]?u[a]===l:!1);c.length&&(s=c)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),e?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const r=t[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:r,data:i,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=Ct.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...i||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??Ya(t.src),t}}fe.RETINA_PREFIX=/@([0-9\.]+)x/;function Ya(n){return n.split(".").pop().split("?").shift().split("#").shift()}const hi=(n,t)=>{const e=t.split("?")[1];return e&&(n+=`?${e}`),n},ds=class Te{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof E?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const r=parseFloat(e.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Te.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const r=Te.BATCH_SIZE;for(;e-t<r&&e<this._frameKeys.length;){const i=this._frameKeys[e],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const c=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,u=new ot(0,0,Math.floor(c.w)/this.resolution,Math.floor(c.h)/this.resolution);s.rotated?a=new ot(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new ot(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new ot(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new E({source:this.textureSource,frame:a,orig:u,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let r=0;r<t[e].length;r++){const i=t[e][r];this.animations[e].push(this.textures[i])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Te.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Te.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};ds.BATCH_SIZE=1e3;let fi=ds;const Ha=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function ms(n,t,e){const r={};if(n.forEach(i=>{r[i]=t}),Object.keys(t.textures).forEach(i=>{r[i]=t.textures[i]}),!e){const i=Ct.dirname(n[0]);t.linkedSheets.forEach((s,o)=>{const a=ms([`${i}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,a)})}return r}const ja={extension:B.Asset,cache:{test:n=>n instanceof fi,getCacheableAssets:(n,t)=>ms(n,t,!1)},resolver:{test:n=>{const e=n.split("?")[0].split("."),r=e.pop(),i=e.pop();return r==="json"&&Ha.includes(i)},parse:n=>{var e;const t=n.split(".");return{resolution:parseFloat(((e=fe.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:t[t.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:B.LoadParser,priority:jt.Normal},async testParse(n,t){return Ct.extname(t.src).toLowerCase()===".json"&&!!n.frames},async parse(n,t,e){var c,u;const{texture:r,imageFilename:i}=(t==null?void 0:t.data)??{};let s=Ct.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof E)o=r;else{const h=hi(s+(i??n.meta.image),t.src);o=(await e.load([h]))[h]}const a=new fi(o.source,n);await a.parse();const l=(c=n==null?void 0:n.meta)==null?void 0:c.related_multi_packs;if(Array.isArray(l)){const h=[];for(const d of l){if(typeof d!="string")continue;let m=s+d;(u=t.data)!=null&&u.ignoreMultiPack||(m=hi(m,t.src),h.push(e.load({src:m,data:{ignoreMultiPack:!0}})))}const f=await Promise.all(h);a.linkedSheets=f,f.forEach(d=>{d.linkedSheets=[a].concat(a.linkedSheets.filter(m=>m!==d))})}return a},async unload(n,t,e){await e.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};mt.add(ja);const In=Object.create(null),di=Object.create(null);function Fr(n,t){let e=di[n];return e===void 0&&(In[t]===void 0&&(In[t]=1),di[n]=e=In[t]++),e}let Kt;function ps(){return(!Kt||Kt!=null&&Kt.isContextLost())&&(Kt=st.get().createCanvas().getContext("webgl",{})),Kt}let Xe;function qa(){if(!Xe){Xe="mediump";const n=ps();n&&n.getShaderPrecisionFormat&&(Xe=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return Xe}function Ka(n,t,e){return t?n:e?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function Za(n,t,e){const r=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function Qa(n,t){return t?`#version 300 es
${n}`:n}const Ja={},tl={};function el(n,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const r=e?Ja:tl;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${t}`}
${n}`}function nl(n,t){return t?n.replace("#version 300 es",""):n}const On={stripVersion:nl,ensurePrecision:Za,addProgramDefines:Ka,setProgramName:el,insertVersion:Qa},Rn=Object.create(null),gs=class ir{constructor(t){t={...ir.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:qa()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let i=t.fragment,s=t.vertex;Object.keys(On).forEach(o=>{const a=r[o];i=On[o](i,a,!0),s=On[o](s,a,!1)}),this.fragment=i,this.vertex=s,this._key=Fr(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return Rn[e]||(Rn[e]=new ir(t)),Rn[e]}};gs.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let D=gs;const mi={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function rl(n){return mi[n]??mi.float32}const il={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function sl({source:n,entryPoint:t}){const e={},r=n.indexOf(`fn ${t}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=il[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:rl(l).stride,offset:0,instance:!1,start:0}}}}return e}function Un(n){var h,f;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,c=(h=n.match(t))==null?void 0:h.map(d=>({group:parseInt(d.match(e)[1],10),binding:parseInt(d.match(r)[1],10),name:d.match(i)[2],isUniform:d.match(i)[1]==="<uniform>",type:d.match(s)[1]}));if(!c)return{groups:[],structs:[]};const u=((f=n.match(o))==null?void 0:f.map(d=>{const m=d.match(l)[1],g=d.match(a).reduce((p,v)=>{const[x,y]=v.split(":");return p[x.trim()]=y.trim(),p},{});return g?{name:m,members:g}:null}).filter(({name:d})=>c.some(m=>m.type===d)))??[];return{groups:c,structs:u}}var Pe=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Pe||{});function ol({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:Pe.VERTEX|Pe.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:Pe.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:Pe.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function al({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function ll(n,t){const e=new Set,r=new Set,i=[...n.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...n.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:s}}const En=Object.create(null);class k{constructor(t){var a,l;this._layoutKey=0;const{fragment:e,vertex:r,layout:i,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=r,e.source===r.source){const c=Un(e.source);this.structsAndGroups=c}else{const c=Un(r.source),u=Un(e.source);this.structsAndGroups=ll(c,u)}this.layout=i??al(this.structsAndGroups),this.gpuLayout=s??ol(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,r=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=Fr(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=sl(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return En[e]||(En[e]=new k(t)),En[e]}}const xs=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>"],ul=xs.reduce((n,t)=>(n[t]=!0,n),{});function cl(n,t){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const vs=class ys{constructor(t,e){this._touched=0,this.uid=nt("uniform"),this._resourceType="uniformGroup",this._resourceId=nt("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...ys.defaultOptions,...e},this.uniformStructures=t;const r={};for(const i in t){const s=t[i];if(s.name=i,s.size=s.size??1,!ul[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${xs.join(", ")}`);s.value??(s.value=cl(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=Fr(Object.keys(r).map(i=>`${i}-${t[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};vs.defaultOptions={ubo:!1,isStatic:!1};let _s=vs;class tn{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const r in t){const i=t[r];this.setResource(i,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const r in this.resources)t[e++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,e){var i,s;const r=this.resources[e];t!==r&&(r&&((i=t.off)==null||i.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const r in e)e[r]._touched=t}destroy(){var e;const t=this.resources;for(const r in t){const i=t[r];(e=i.off)==null||e.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const r in e)e[r]===t&&(e[r]=null)}else this._updateKey()}}var mn=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(mn||{});class zr extends wt{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=r,o===void 0&&(o=0,e&&(o|=mn.WEBGPU),r&&(o|=mn.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&i&&a)for(const c in a)for(const u in a[c]){const h=a[c][u];l[h]={group:c,binding:u,name:h}}else if(e&&i&&!a){const c=e.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else if(s){if(e){const c=e.structsAndGroups.groups;a={},c.forEach(u=>{a[u.group]=a[u.group]||{},a[u.group][u.binding]=u.name,l[u.name]=u})}else{a={},i={99:new tn},this._ownedBindGroups.push(i[99]);let c=0;for(const u in s)l[u]={group:99,binding:c,name:u},a[99]=a[99]||{},a[99][c]=u,c++}i={};for(const c in s){const u=c;let h=s[c];!h.source&&!h._resourceType&&(h=new _s(h));const f=l[u];f&&(i[f.group]||(i[f.group]=new tn,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(h,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(t,e,r){var i,s;(i=this._uniformBindMap)[e]||(i[e]={}),(s=this._uniformBindMap[e])[r]||(s[r]=t),this.groups[e]||(this.groups[e]=new tn,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const r={};for(const i in e){const s=e[i];Object.defineProperty(r,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return r}destroy(t=!1){var e,r;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=k.from(e)),r&&(o=D.from(r)),new zr({gpuProgram:s,glProgram:o,...i})}}const hl={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8},Bn=0,kn=1,Dn=2,Ln=3,Gn=4,Nn=5,sr=class bs{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Bn)}set blend(t){!!(this.data&1<<Bn)!==t&&(this.data^=1<<Bn)}get offsets(){return!!(this.data&1<<kn)}set offsets(t){!!(this.data&1<<kn)!==t&&(this.data^=1<<kn)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<Dn)}set culling(t){!!(this.data&1<<Dn)!==t&&(this.data^=1<<Dn)}get depthTest(){return!!(this.data&1<<Ln)}set depthTest(t){!!(this.data&1<<Ln)!==t&&(this.data^=1<<Ln)}get depthMask(){return!!(this.data&1<<Nn)}set depthMask(t){!!(this.data&1<<Nn)!==t&&(this.data^=1<<Nn)}get clockwiseFrontFace(){return!!(this.data&1<<Gn)}set clockwiseFrontFace(t){!!(this.data&1<<Gn)!==t&&(this.data^=1<<Gn)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=hl[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new bs;return t.depthTest=!1,t.blend=!0,t}};sr.default2d=sr.for2d();let fl=sr;const Ss=class or extends zr{constructor(t){t={...or.defaultOptions,...t},super(t),this.enabled=!0,this._state=fl.for2d(),this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.addResource("uTexture",0,1)}apply(t,e,r,i){t.applyFilter(this,e,r,i)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=k.from(e)),r&&(o=D.from(r)),new or({gpuProgram:s,glProgram:o,...i})}};Ss.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1};let G=Ss;const ar=[];mt.handleByNamedList(B.Environment,ar);async function dl(n){if(n)for(let t=0;t<ar.length;t++){const e=ar[t];if(e.value.test()){await e.value.load();return}}}let _e;function ml(){if(typeof _e=="boolean")return _e;try{_e=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{_e=!1}return _e}var Ir={exports:{}};Ir.exports=gn;Ir.exports.default=gn;function gn(n,t,e){e=e||2;var r=t&&t.length,i=r?t[0]*e:n.length,s=Cs(n,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,u,h,f,d;if(r&&(s=yl(n,t,s,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(var m=e;m<i;m+=e)h=n[m],f=n[m+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?32767/d:0}return Ie(s,o,e,a,l,d,0),o}function Cs(n,t,e,r,i){var s,o;if(i===cr(n,t,e,r)>0)for(s=t;s<e;s+=r)o=pi(s,n[s],n[s+1],o);else for(s=e-r;s>=t;s-=r)o=pi(s,n[s],n[s+1],o);return o&&xn(o,o.next)&&(Re(o),o=o.next),o}function Ht(n,t){if(!n)return n;t||(t=n);var e=n,r;do if(r=!1,!e.steiner&&(xn(e,e.next)||J(e.prev,e,e.next)===0)){if(Re(e),e=t=e.prev,e===e.next)break;r=!0}else e=e.next;while(r||e!==t);return t}function Ie(n,t,e,r,i,s,o){if(n){!o&&s&&wl(n,r,i,s);for(var a=n,l,c;n.prev!==n.next;){if(l=n.prev,c=n.next,s?gl(n,r,i,s):pl(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Re(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=xl(Ht(n),t,e),Ie(n,t,e,r,i,s,2)):o===2&&vl(n,t,e,r,i,s):Ie(Ht(n),t,e,r,i,s,1);break}}}}function pl(n){var t=n.prev,e=n,r=n.next;if(J(t,e,r)>=0)return!1;for(var i=t.x,s=e.x,o=r.x,a=t.y,l=e.y,c=r.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,m=r.next;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&ne(i,a,s,l,o,c,m.x,m.y)&&J(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gl(n,t,e,r){var i=n.prev,s=n,o=n.next;if(J(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,v=lr(d,m,t,e,r),x=lr(g,p,t,e,r),y=n.prevZ,_=n.nextZ;y&&y.z>=v&&_&&_.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&ne(a,u,l,h,c,f,y.x,y.y)&&J(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&ne(a,u,l,h,c,f,_.x,_.y)&&J(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=v;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&ne(a,u,l,h,c,f,y.x,y.y)&&J(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=g&&_.y>=m&&_.y<=p&&_!==i&&_!==o&&ne(a,u,l,h,c,f,_.x,_.y)&&J(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function xl(n,t,e){var r=n;do{var i=r.prev,s=r.next.next;!xn(i,s)&&ws(i,r,r.next,s)&&Oe(i,s)&&Oe(s,i)&&(t.push(i.i/e|0),t.push(r.i/e|0),t.push(s.i/e|0),Re(r),Re(r.next),r=n=s),r=r.next}while(r!==n);return Ht(r)}function vl(n,t,e,r,i,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Pl(o,a)){var l=As(o,a);o=Ht(o,o.next),l=Ht(l,l.next),Ie(o,t,e,r,i,s,0),Ie(l,t,e,r,i,s,0);return}a=a.next}o=o.next}while(o!==n)}function yl(n,t,e,r){var i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*r,l=s<o-1?t[s+1]*r:n.length,c=Cs(n,a,l,r,!1),c===c.next&&(c.steiner=!0),i.push(Tl(c));for(i.sort(_l),s=0;s<i.length;s++)e=bl(i[s],e);return e}function _l(n,t){return n.x-t.x}function bl(n,t){var e=Sl(n,t);if(!e)return t;var r=As(e,n);return Ht(r,r.next),Ht(e,e.next)}function Sl(n,t){var e=t,r=n.x,i=n.y,s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=r&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===r))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,c=o.x,u=o.y,h=1/0,f;e=o;do r>=e.x&&e.x>=c&&r!==e.x&&ne(i<u?r:s,i,c,u,i<u?s:r,i,e.x,e.y)&&(f=Math.abs(i-e.y)/(r-e.x),Oe(e,n)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Cl(o,e)))&&(o=e,h=f)),e=e.next;while(e!==l);return o}function Cl(n,t){return J(n.prev,n,t.prev)<0&&J(t.next,n,n.next)<0}function wl(n,t,e,r){var i=n;do i.z===0&&(i.z=lr(i.x,i.y,t,e,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,Al(i)}function Al(n){var t,e,r,i,s,o,a,l,c=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,r=e,a=0,t=0;t<c&&(a++,r=r.nextZ,!!r);t++);for(l=c;a>0||l>0&&r;)a!==0&&(l===0||!r||e.z<=r.z)?(i=e,e=e.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;e=r}s.nextZ=null,c*=2}while(o>1);return n}function lr(n,t,e,r,i){return n=(n-e)*i|0,t=(t-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Tl(n){var t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ne(n,t,e,r,i,s,o,a){return(i-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(r-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(r-a)}function Pl(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ml(n,t)&&(Oe(n,t)&&Oe(t,n)&&Fl(n,t)&&(J(n.prev,n,t.prev)||J(n,t.prev,t))||xn(n,t)&&J(n.prev,n,n.next)>0&&J(t.prev,t,t.next)>0)}function J(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function xn(n,t){return n.x===t.x&&n.y===t.y}function ws(n,t,e,r){var i=He(J(n,t,e)),s=He(J(n,t,r)),o=He(J(e,r,n)),a=He(J(e,r,t));return!!(i!==s&&o!==a||i===0&&Ye(n,e,t)||s===0&&Ye(n,r,t)||o===0&&Ye(e,n,r)||a===0&&Ye(e,t,r))}function Ye(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function He(n){return n>0?1:n<0?-1:0}function Ml(n,t){var e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ws(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Oe(n,t){return J(n.prev,n,n.next)<0?J(n,t,n.next)>=0&&J(n,n.prev,t)>=0:J(n,t,n.prev)<0||J(n,n.next,t)<0}function Fl(n,t){var e=n,r=!1,i=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(r=!r),e=e.next;while(e!==n);return r}function As(n,t){var e=new ur(n.i,n.x,n.y),r=new ur(t.i,t.x,t.y),i=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=i,i.prev=e,r.next=e,e.prev=r,s.next=r,r.prev=s,r}function pi(n,t,e,r){var i=new ur(n,t,e);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Re(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ur(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}gn.deviation=function(n,t,e,r){var i=t&&t.length,s=i?t[0]*e:n.length,o=Math.abs(cr(n,0,s,e));if(i)for(var a=0,l=t.length;a<l;a++){var c=t[a]*e,u=a<l-1?t[a+1]*e:n.length;o-=Math.abs(cr(n,c,u,e))}var h=0;for(a=0;a<r.length;a+=3){var f=r[a]*e,d=r[a+1]*e,m=r[a+2]*e;h+=Math.abs((n[f]-n[m])*(n[d+1]-n[f+1])-(n[f]-n[d])*(n[m+1]-n[f+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function cr(n,t,e,r){for(var i=0,s=t,o=e-r;s<e;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}gn.flatten=function(n){for(var t=n[0][0].length,e={vertices:[],holes:[],dimensions:t},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<t;o++)e.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,e.holes.push(r))}return e};var zl=Ir.exports;const Il=Tr(zl);var Ts=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Ts||{});class Ol{constructor(t){this.items=[],this._name=t}emit(t,e,r,i,s,o,a,l){const{name:c,items:u}=this;for(let h=0,f=u.length;h<f;h++)u[h][c](t,e,r,i,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Rl=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Ps=class Ms extends wt{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name;const e=[...Rl,...t.runners??[]];this._addRunners(...e),this._addSystems(t.systems),this._addPipes(t.renderPipes,t.renderPipeAdaptors),this._unsafeEvalCheck()}async init(t={}){for(const e in this._systemsHash)t={...this._systemsHash[e].constructor.defaultOptions,...t};t={...Ms.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let e=0;e<this.runners.init.items.length;e++)await this.runners.init.items[e].init(t);this._initOptions=t}render(t,e){let r=t;if(r instanceof tt&&(r={container:r},e&&(I(Q,"passing a second argument is deprecated, please use render options instead"),r.target=e.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:H.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,e,r){this.view.resize(t,e,r),this.emit("resize",this.view.screen.width,this.view.screen.height)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Ts.ALL);const{clear:r,clearColor:i,target:s}=t;H.shared.setValue(i??this.background.colorRgba),e.renderTarget.clear(s,r,H.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new Ol(e)})}_addSystems(t){let e;for(e in t){const r=t[e];this._addSystem(r.value,r.name)}}_addSystem(t,e){const r=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=r,this._systemsHash[e]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(t,e){const r=e.reduce((i,s)=>(i[s.name]=s.value,i),{});t.forEach(i=>{const s=i.value,o=i.name,a=r[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!ml())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Ps.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Fs=Ps,je;function Ul(n){return je!==void 0||(je=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:n??Fs.defaultOptions.failIfMajorPerformanceCaveat};try{if(!st.get().getWebGLRenderingContext())return!1;let i=st.get().createCanvas().getContext("webgl",t);const s=!!((e=i==null?void 0:i.getContextAttributes())!=null&&e.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),je}let qe;async function El(n={}){return qe!==void 0||(qe=await(async()=>{if(!st.get().getNavigator().gpu)return!1;try{return await(await navigator.gpu.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),qe}const gi=["webgl","webgpu","canvas"];async function Bl(n){let t=[];n.preference?(t.push(n.preference),gi.forEach(s=>{s!==n.preference&&t.push(s)})):t=gi.slice();let e;await dl(n.manageImports??!0);let r={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await El()){const{WebGPURenderer:a}=await hn(()=>import("./WebGPURenderer-DBT8-AIf.js"),__vite__mapDeps([5,2,6,3]));e=a,r={...n,...n.webgpu};break}else if(o==="webgl"&&Ul(n.failIfMajorPerformanceCaveat??Fs.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await hn(()=>import("./WebGLRenderer-C22Jpku2.js"),__vite__mapDeps([7,2,4,6]));e=a,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!e)throw new Error("No available renderer for the current environment");const i=new e;return await i.init(r),i}const zs=class hr{constructor(...t){this.stage=new tt,t[0]!==void 0&&I(Q,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await Bl(t),hr._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return I(Q,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const r=hr._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};zs._plugins=[];let Is=zs;mt.handleByList(B.Application,Is._plugins);class kl{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<e;r++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const Dl={extension:B.CacheParser,test:n=>Array.isArray(n)&&n.every(t=>t instanceof E),getCacheableAssets:(n,t)=>{const e={};return n.forEach(r=>{t.forEach((i,s)=>{e[r+(s===0?"":s+1)]=i})}),e}};async function Os(n){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(n)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const Ll={extension:{type:B.DetectionParser,priority:1},test:async()=>Os("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(t=>t!=="avif")},xi=["png","jpg","jpeg"],Gl={extension:{type:B.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...xi],remove:async n=>n.filter(t=>!xi.includes(t))},Nl="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Or(n){return Nl?!1:document.createElement("video").canPlayType(n)!==""}const $l={extension:{type:B.DetectionParser,priority:0},test:async()=>Or("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(t=>t!=="mp4"&&t!=="m4v")},Vl={extension:{type:B.DetectionParser,priority:0},test:async()=>Or("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(t=>t!=="ogv")},Wl={extension:{type:B.DetectionParser,priority:0},test:async()=>Or("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(t=>t!=="webm")},Xl={extension:{type:B.DetectionParser,priority:0},test:async()=>Os("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(t=>t!=="webp")};let Yl=class{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,r)=>(this._parsersValidated=!1,t[e]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let i=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||at(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];if(c.load&&((o=c.test)!=null&&o.call(c,t,e,this))){s=c;break}}if(!s)return at(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(t,e,this),r.parser=s;for(let l=0;l<this.parsers.length;l++){const c=this.parsers[l];c.parse&&c.parse&&await((a=c.testParse)==null?void 0:a.call(c,i,e,this))&&(i=await c.parse(i,e,this)||i,r.parser=c)}return i})(),r}async load(t,e){this._parsersValidated||this._validateParsers();let r=0;const i={},s=dn(t),o=xt(t,c=>({alias:[c],src:c})),a=o.length,l=o.map(async c=>{const u=Ct.toAbsolute(c.src);if(!i[c.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,c)),i[c.src]=await this.promiseCache[u].promise,e&&e(++r/a)}catch(h){throw delete this.promiseCache[u],delete i[c.src],new Error(`[Loader.load] Failed to load ${u}.
${h}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(t){const r=xt(t,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=Ct.toAbsolute(i.src),o=this.promiseCache[s];if(o){const c=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,c,i,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&at(`[Assets] loadParser name conflict "${e.name}"`):at("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}};function de(n,t){if(Array.isArray(t)){for(const e of t)if(n.startsWith(`data:${e}`))return!0;return!1}return n.startsWith(`data:${t}`)}function me(n,t){const e=n.split("?")[0],r=Ct.extname(e).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}const Hl=".json",jl="application/json",ql={extension:{type:B.LoadParser,priority:jt.Low},name:"loadJson",test(n){return de(n,jl)||me(n,Hl)},async load(n){return await(await st.get().fetch(n)).json()}},Kl=".txt",Zl="text/plain",Ql={name:"loadTxt",extension:{type:B.LoadParser,priority:jt.Low},test(n){return de(n,Zl)||me(n,Kl)},async load(n){return await(await st.get().fetch(n)).text()}},Jl=["normal","bold","100","200","300","400","500","600","700","800","900"],tu=[".ttf",".otf",".woff",".woff2"],eu=["font/ttf","font/otf","font/woff","font/woff2"],nu=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ru(n){const t=Ct.extname(n),i=Ct.basename(n,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(nu)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const iu=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function su(n){return iu.test(n)?n:encodeURI(n)}const ou={extension:{type:B.LoadParser,priority:jt.Low},name:"loadWebFont",test(n){return de(n,eu)||me(n,tu)},async load(n,t){var r,i,s;const e=st.get().getFontFaceSet();if(e){const o=[],a=((r=t.data)==null?void 0:r.family)??ru(n),l=((s=(i=t.data)==null?void 0:i.weights)==null?void 0:s.filter(u=>Jl.includes(u)))??["normal"],c=t.data??{};for(let u=0;u<l.length;u++){const h=l[u],f=new FontFace(a,`url(${su(n)})`,{...c,weight:h});await f.load(),e.add(f),o.push(f)}return lt.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return at("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(t=>{lt.remove(t.family),st.get().getFontFaceSet().delete(t)})}};var au=uu,$n={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},lu=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function uu(n){var t=[];return n.replace(lu,function(e,r,i){var s=r.toLowerCase();for(i=hu(i),s=="m"&&i.length>2&&(t.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==$n[s])return i.unshift(r),t.push(i);if(i.length<$n[s])throw new Error("malformed path data");t.push([r].concat(i.splice(0,$n[s])))}}),t}var cu=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function hu(n){var t=n.match(cu);return t?t.map(Number):[]}const fu=Tr(au);function du(n,t){const e=fu(n),r=[];let i=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],c=l[0],u=l;switch(c){case"M":s=u[1],o=u[2],t.moveTo(s,o);break;case"m":s+=u[1],o+=u[2],t.moveTo(s,o);break;case"H":s=u[1],t.lineTo(s,o);break;case"h":s+=u[1],t.lineTo(s,o);break;case"V":o=u[1],t.lineTo(s,o);break;case"v":o+=u[1],t.lineTo(s,o);break;case"L":s=u[1],o=u[2],t.lineTo(s,o);break;case"l":s+=u[1],o+=u[2],t.lineTo(s,o);break;case"C":s=u[5],o=u[6],t.bezierCurveTo(u[1],u[2],u[3],u[4],s,o);break;case"c":t.bezierCurveTo(s+u[1],o+u[2],s+u[3],o+u[4],s+u[5],o+u[6]),s+=u[5],o+=u[6];break;case"S":s=u[3],o=u[4],t.bezierCurveToShort(u[1],u[2],s,o);break;case"s":t.bezierCurveToShort(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"Q":s=u[3],o=u[4],t.quadraticCurveTo(u[1],u[2],s,o);break;case"q":t.quadraticCurveTo(s+u[1],o+u[2],s+u[3],o+u[4]),s+=u[3],o+=u[4];break;case"T":s=u[1],o=u[2],t.quadraticCurveToShort(s,o);break;case"t":s+=u[1],o+=u[2],t.quadraticCurveToShort(s,o);break;case"A":s=u[6],o=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"a":s+=u[6],o+=u[7],t.arcToSvg(u[1],u[2],u[3],u[4],u[5],s,o);break;case"Z":case"z":t.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:at(`Unknown SVG path command: ${c}`)}c!=="Z"&&c!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return t}class Rr{constructor(t=0,e=0,r=0){this.type="circle",this.x=t,this.y=e,this.radius=r}clone(){return new Rr(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-t,s=this.y-e;return i*=i,s*=s,i+s<=r}strokeContains(t,e,r){if(this.radius===0)return!1;const i=this.x-t,s=this.y-e,o=this.radius,a=r/2,l=Math.sqrt(i*i+s*s);return l<o+a&&l>o-a}getBounds(t){return t=t||new ot,t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Ur{constructor(t=0,e=0,r=0,i=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=r,this.halfHeight=i}clone(){return new Ur(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(t-this.x)/this.halfWidth,i=(e-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(t,e,r){const{halfWidth:i,halfHeight:s}=this;if(i<=0||s<=0)return!1;const o=r/2,a=i-o,l=s-o,c=i+o,u=s+o,h=t-this.x,f=e-this.y,d=h*h/(a*a)+f*f/(l*l),m=h*h/(c*c)+f*f/(u*u);return d>1&&m<=1}getBounds(){return new ot(this.x-this.halfWidth,this.y-this.halfHeight,this.halfWidth*2,this.halfHeight*2)}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function mu(n,t,e,r,i,s){const o=n-e,a=t-r,l=i-e,c=s-r,u=o*l+a*c,h=l*l+c*c;let f=-1;h!==0&&(f=u/h);let d,m;f<0?(d=e,m=r):f>1?(d=i,m=s):(d=e+f*l,m=r+f*c);const g=n-d,p=t-m;return g*g+p*p}class Fe{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const r=[];for(let i=0,s=e.length;i<s;i++)r.push(e[i].x,e[i].y);e=r}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new Fe(t);return e.closePath=this.closePath,e}contains(t,e){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],c=this.points[o*2],u=this.points[o*2+1];l>e!=u>e&&t<(c-a)*((e-l)/(u-l))+a&&(r=!r)}return r}strokeContains(t,e,r){const i=r/2,s=i*i,{points:o}=this,a=o.length-(this.closePath?0:2);for(let l=0;l<a;l+=2){const c=o[l],u=o[l+1],h=o[(l+2)%o.length],f=o[(l+3)%o.length];if(mu(t,e,c,u,h,f)<=s)return!0}return!1}getBounds(t){t=t||new ot;const e=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const c=e[a],u=e[a+1];r=c<r?c:r,i=c>i?c:i,s=u<s?u:s,o=u>o?u:o}return t.x=r,t.width=i-r,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const Ke=(n,t,e,r,i,s)=>{const o=n-e,a=t-r,l=Math.sqrt(o*o+a*a);return l>=i-s&&l<=i+s};class Er{constructor(t=0,e=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=r,this.height=i,this.radius=s}getBounds(t){return t=t||new ot,t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new Er(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+r&&e<=this.y+this.height-r||t>=this.x+r&&t<=this.x+this.width-r)return!0;let i=t-(this.x+r),s=e-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=t-(this.x+this.width-r),i*i+s*s<=o)||(s=e-(this.y+this.height-r),i*i+s*s<=o)||(i=t-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(t,e,r){const{x:i,y:s,width:o,height:a,radius:l}=this,c=r/2,u=i+l,h=s+l,f=o-l*2,d=a-l*2,m=i+o,g=s+a;return(t>=i-c&&t<=i+c||t>=m-c&&t<=m+c)&&e>=h&&e<=h+d||(e>=s-c&&e<=s+c||e>=g-c&&e<=g+c)&&t>=u&&t<=u+f?!0:t<u&&e<h&&Ke(t,e,u,h,l,c)||t>m-l&&e<h&&Ke(t,e,m-l,h,l,c)||t>m-l&&e>g-l&&Ke(t,e,m-l,g-l,l,c)||t<u&&e>g-l&&Ke(t,e,u,g-l,l,c)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}var ct=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(ct||{});class Ue extends wt{constructor(t){let{data:e,size:r}=t;const{usage:i,label:s,shrinkToFit:o}=t;super(),this.uid=nt("buffer"),this._resourceType="buffer",this._resourceId=nt("resource"),this._touched=0,this._updateID=1,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,r=r??(e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get static(){return!!(this.descriptor.usage&ct.STATIC)}set static(t){t?this.descriptor.usage|=ct.STATIC:this.descriptor.usage&=~ct.STATIC}setDataWithSize(t,e,r){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const i=this._data;if(this._data=t,i.length!==t.length){!this.shrinkToFit&&t.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=nt("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Rs(n,t){if(!(n instanceof Ue)){let e=t?ct.INDEX:ct.VERTEX;n instanceof Array&&(t?(n=new Uint32Array(n),e=ct.INDEX|ct.COPY_DST):(n=new Float32Array(n),e=ct.VERTEX|ct.COPY_DST)),n=new Ue({data:n,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return n}function pu(n,t,e){const r=n.getAttribute(t);if(!r)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const i=r.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const c=i.BYTES_PER_ELEMENT,u=(r.offset||0)/c,h=(r.stride||2*4)/c;for(let f=u;f<i.length;f+=h){const d=i[f],m=i[f+1];d>a&&(a=d),m>l&&(l=m),d<s&&(s=d),m<o&&(o=m)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function gu(n){return(n instanceof Ue||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=Rs(n.buffer,!1),n}class xu extends wt{constructor(t){const{attributes:e,indexBuffer:r,topology:i}=t;super(),this.uid=nt("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new St,this._boundsDirty=!0,this.attributes=e,this.buffers=[],this.instanceCount=t.instanceCount||1;for(const s in e){const o=e[s]=gu(e[s]);this.buffers.indexOf(o.buffer)===-1&&(this.buffers.push(o.buffer),o.buffer.on("update",this.onBufferUpdate,this),o.buffer.on("change",this.onBufferUpdate,this))}r&&(this.indexBuffer=Rs(r,!0),this.buffers.push(this.indexBuffer)),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,pu(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const vu=new Float32Array(1),yu=new Uint32Array(1);class _u extends xu{constructor(){const e=new Ue({data:vu,label:"attribute-batch-buffer",usage:ct.VERTEX|ct.COPY_DST,shrinkToFit:!1}),r=new Ue({data:yu,label:"index-batch-buffer",usage:ct.INDEX|ct.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:i,offset:0,location:1},aUV:{buffer:e,format:"float32x2",stride:i,offset:2*4,location:3},aColor:{buffer:e,format:"unorm8x4",stride:i,offset:4*4,location:0},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:i,offset:5*4,location:2}},indexBuffer:r})}}let Ze=null;function Us(){if(Ze)return Ze;const n=ps();return Ze=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),Ze}const Es={};function bu(n,t){let e=0;for(let r=0;r<t;r++)e=e*31+n[r].uid>>>0;return Es[e]||Su(n,e)}let Vn=0;function Su(n,t){const e={};let r=0;Vn||(Vn=Us());for(let s=0;s<Vn;s++){const o=s<n.length?n[s]:E.EMPTY.source;e[r++]=o.source,e[r++]=o.style}const i=new tn(e);return Es[t]=i,i}class vi{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function yi(n,t){const e=n.byteLength/8|0,r=new Float64Array(n,0,e);new Float64Array(t,0,e).set(r);const s=n.byteLength-e*8;if(s>0){const o=new Uint8Array(n,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const Cu={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var wu=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(wu||{});function _i(n,t){return t.alphaMode==="no-premultiply-alpha"&&Cu[n]||n}class bi{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class Si{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.blendMode="normal",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}let be=0;const Bs=class ks{constructor(t={}){this.uid=nt("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._vertexSize=6,this._elements=[],this._batchPool=[],this._batchPoolIndex=0,this._textureBatchPool=[],this._textureBatchPoolIndex=0,t={...ks.defaultOptions,...t};const{vertexSize:e,indexSize:r}=t;this.attributeBuffer=new vi(e*this._vertexSize*4),this.indexBuffer=new Uint16Array(r),this._maxTextures=Us()}begin(){this.batchIndex=0,this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0,this._batchPoolIndex=0,this._textureBatchPoolIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t.indexStart=this.indexSize,t.location=this.attributeSize,t.batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.vertexSize*this._vertexSize}checkAndUpdateTexture(t,e){const r=t.batch.textures.ids[e._source.uid];return!r&&r!==0?!1:(t.textureId=r,t.texture=e,!0)}updateElement(t){this.dirty=!0,t.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,t.location,t.textureId)}break(t){const e=this._elements;let r=this._textureBatchPool[this._textureBatchPoolIndex++]||new bi;if(r.clear(),!e[this.elementStart])return;const i=e[this.elementStart];let s=_i(i.blendMode,i.texture._source);this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const o=this.attributeBuffer.float32View,a=this.attributeBuffer.uint32View,l=this.indexBuffer;let c=this._batchIndexSize,u=this._batchIndexStart,h="startBatch",f=this._batchPool[this._batchPoolIndex++]||new Si;const d=this._maxTextures;for(let m=this.elementStart;m<this.elementSize;++m){const g=e[m];e[m]=null;const v=g.texture._source,x=_i(g.blendMode,v),y=s!==x;if(v._batchTick===be&&!y){g.textureId=v._textureBindLocation,c+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize),g.batch=f;continue}v._batchTick=be,(r.count>=d||y)&&(this._finishBatch(f,u,c-u,r,s,t,h),h="renderBatch",u=c,s=x,r=this._textureBatchPool[this._textureBatchPoolIndex++]||new bi,r.clear(),f=this._batchPool[this._batchPoolIndex++]||new Si,++be),g.textureId=v._textureBindLocation=r.count,r.ids[v.uid]=r.count,r.textures[r.count++]=v,g.batch=f,c+=g.indexSize,g.packAttributes(o,a,g.location,g.textureId),g.packIndex(l,g.indexStart,g.location/this._vertexSize)}r.count>0&&(this._finishBatch(f,u,c-u,r,s,t,h),u=c,++be),this.elementStart=this.elementSize,this._batchIndexStart=u,this._batchIndexSize=c}_finishBatch(t,e,r,i,s,o,a){t.gpuBindGroup=null,t.action=a,t.batcher=this,t.textures=i,t.blendMode=s,t.start=e,t.size=r,++be,o.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),r=new vi(e);yi(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(t){const e=this.indexBuffer;let r=Math.max(t,e.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)i[s]=e[s];else yi(e.buffer,i.buffer);this.indexBuffer=i}destroy(){for(let t=0;t<this.batches.length;t++)this.batches[t].destroy();this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t].batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Bs.defaultOptions={vertexSize:4,indexSize:6};let Au=Bs;function Tu(n,t,e,r,i,s,o,a=null){let l=0;e*=t,i*=s;const c=a.a,u=a.b,h=a.c,f=a.d,d=a.tx,m=a.ty;for(;l<o;){const g=n[e],p=n[e+1];r[i]=c*g+h*p+d,r[i+1]=u*g+f*p+m,i+=s,e+=t,l++}}function Pu(n,t,e,r){let i=0;for(t*=e;i<r;)n[t]=0,n[t+1]=0,t+=e,i++}function Ds(n,t,e,r,i){const s=t.a,o=t.b,a=t.c,l=t.d,c=t.tx,u=t.ty;e=e||0,r=r||2,i=i||n.length/r-e;let h=e*r;for(let f=0;f<i;f++){const d=n[h],m=n[h+1];n[h]=s*d+a*m+c,n[h+1]=o*d+l*m+u,h+=r}}function Mu(n,t){if(n===16777215||!t)return t;if(t===16777215||!n)return n;const e=n>>16&255,r=n>>8&255,i=n&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255,c=r*o/255,u=i*a/255;return(l<<16)+(c<<8)+u}class Ls{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0,this.roundPixels=0}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}packIndex(t,e,r){const i=this.geometryData.indices;for(let s=0;s<this.indexSize;s++)t[e++]=i[s+this.indexOffset]+r-this.vertexOffset}packAttributes(t,e,r,i){const s=this.geometryData,o=this.renderable,a=s.vertices,l=s.uvs,c=this.vertexOffset*2,u=(this.vertexOffset+this.vertexSize)*2,h=this.color,f=h>>16|h&65280|(h&255)<<16;if(this.applyTransform){const d=Mu(f,o.groupColor)+(this.alpha*o.groupAlpha*255<<24),m=o.groupTransform,g=i<<16|this.roundPixels&65535,p=m.a,v=m.b,x=m.c,y=m.d,_=m.tx,P=m.ty;for(let U=c;U<u;U+=2){const A=a[U],F=a[U+1];t[r]=p*A+x*F+_,t[r+1]=v*A+y*F+P,t[r+2]=l[U],t[r+3]=l[U+1],e[r+4]=d,e[r+5]=g,r+=6}}else{const d=f+(this.alpha*255<<24);for(let m=c;m<u;m+=2)t[r]=a[m],t[r+1]=a[m+1],t[r+2]=l[m],t[r+3]=l[m+1],e[r+4]=d,e[r+5]=i<<16,r+=6}}get vertSize(){return this.vertexSize}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.vertexOffset=this.vertexOffset,t.vertexSize=this.vertexSize,t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData}reset(){this.applyTransform=!0}}const Wn={build(n,t){let e,r,i,s,o,a;if(n.type==="circle"){const _=n;e=_.x,r=_.y,o=a=_.radius,i=s=0}else if(n.type==="ellipse"){const _=n;e=_.x,r=_.y,o=_.halfWidth,a=_.halfHeight,i=s=0}else{const _=n,P=_.width/2,U=_.height/2;e=_.x+P,r=_.y+U,o=a=Math.max(0,Math.min(_.radius,Math.min(P,U))),i=P-o,s=U-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),c=l*8+(i?4:0)+(s?4:0);if(c===0)return t;if(l===0)return t[0]=t[6]=e+i,t[1]=t[3]=r+s,t[2]=t[4]=e-i,t[5]=t[7]=r-s,t;let u=0,h=l*4+(i?2:0)+2,f=h,d=c,m=i+o,g=s,p=e+m,v=e-m,x=r+g;if(t[u++]=p,t[u++]=x,t[--h]=x,t[--h]=v,s){const _=r-g;t[f++]=v,t[f++]=_,t[--d]=_,t[--d]=p}for(let _=1;_<l;_++){const P=Math.PI/2*(_/l),U=i+Math.cos(P)*o,A=s+Math.sin(P)*a,F=e+U,b=e-U,S=r+A,j=r-A;t[u++]=F,t[u++]=S,t[--h]=S,t[--h]=b,t[f++]=b,t[f++]=j,t[--d]=j,t[--d]=F}m=i,g=s+a,p=e+m,v=e-m,x=r+g;const y=r-g;return t[u++]=p,t[u++]=x,t[--d]=y,t[--d]=p,i&&(t[u++]=v,t[u++]=x,t[--d]=y,t[--d]=v),t},triangulate(n,t,e,r,i,s){if(n.length===0)return;let o=0,a=0;for(let u=0;u<n.length;u+=2)o+=n[u],a+=n[u+1];o/=n.length/2,a/=n.length/2;let l=r;t[l*e]=o,t[l*e+1]=a;const c=l++;for(let u=0;u<n.length;u+=2)t[l*e]=n[u],t[l*e+1]=n[u+1],u>0&&(i[s++]=l,i[s++]=c,i[s++]=l-1),l++;i[s++]=c+1,i[s++]=c,i[s++]=l-1}},Fu=1e-4,Ci=1e-4;function zu(n){const t=n.length;if(t<6)return 1;let e=0;for(let r=0,i=n[t-2],s=n[t-1];r<t;r+=2){const o=n[r],a=n[r+1];e+=(o-i)*(a+s),i=o,s=a}return e<0?-1:1}function wi(n,t,e,r,i,s,o,a){const l=n-e*i,c=t-r*i,u=n+e*s,h=t+r*s;let f,d;o?(f=r,d=-e):(f=-r,d=e);const m=l+f,g=c+d,p=u+f,v=h+d;return a.push(m,g),a.push(p,v),2}function kt(n,t,e,r,i,s,o,a){const l=e-n,c=r-t;let u=Math.atan2(l,c),h=Math.atan2(i-n,s-t);a&&u<h?u+=Math.PI*2:!a&&u>h&&(h+=Math.PI*2);let f=u;const d=h-u,m=Math.abs(d),g=Math.sqrt(l*l+c*c),p=(15*m*Math.sqrt(g)/Math.PI>>0)+1,v=d/p;if(f+=v,a){o.push(n,t),o.push(e,r);for(let x=1,y=f;x<p;x++,y+=v)o.push(n,t),o.push(n+Math.sin(y)*g,t+Math.cos(y)*g);o.push(n,t),o.push(i,s)}else{o.push(e,r),o.push(n,t);for(let x=1,y=f;x<p;x++,y+=v)o.push(n+Math.sin(y)*g,t+Math.cos(y)*g),o.push(n,t);o.push(i,s),o.push(n,t)}return p*2}function Iu(n,t,e,r,i,s,o,a,l){const c=Fu;if(n.length===0)return;const u=t;let h=u.alignment;if(t.alignment!==.5){let q=zu(n);h=(h-.5)*q+.5}const f=new ut(n[0],n[1]),d=new ut(n[n.length-2],n[n.length-1]),m=r,g=Math.abs(f.x-d.x)<c&&Math.abs(f.y-d.y)<c;if(m){n=n.slice(),g&&(n.pop(),n.pop(),d.set(n[n.length-2],n[n.length-1]));const q=(f.x+d.x)*.5,zt=(d.y+f.y)*.5;n.unshift(q,zt),n.push(q,zt)}const p=i,v=n.length/2;let x=n.length;const y=p.length/2,_=u.width/2,P=_*_,U=u.miterLimit*u.miterLimit;let A=n[0],F=n[1],b=n[2],S=n[3],j=0,pt=0,O=-(F-S),M=A-b,N=0,K=0,w=Math.sqrt(O*O+M*M);O/=w,M/=w,O*=_,M*=_;const V=h,C=(1-V)*2,z=V*2;m||(u.cap==="round"?x+=kt(A-O*(C-z)*.5,F-M*(C-z)*.5,A-O*C,F-M*C,A+O*z,F+M*z,p,!0)+2:u.cap==="square"&&(x+=wi(A,F,O,M,C,z,!0,p))),p.push(A-O*C,F-M*C),p.push(A+O*z,F+M*z);for(let q=1;q<v-1;++q){A=n[(q-1)*2],F=n[(q-1)*2+1],b=n[q*2],S=n[q*2+1],j=n[(q+1)*2],pt=n[(q+1)*2+1],O=-(F-S),M=A-b,w=Math.sqrt(O*O+M*M),O/=w,M/=w,O*=_,M*=_,N=-(S-pt),K=b-j,w=Math.sqrt(N*N+K*K),N/=w,K/=w,N*=_,K*=_;const zt=b-A,pe=F-S,ge=b-j,xe=pt-S,Vr=zt*ge+pe*xe,ke=pe*ge-xe*zt,ve=ke<0;if(Math.abs(ke)<.001*Math.abs(Vr)){p.push(b-O*C,S-M*C),p.push(b+O*z,S+M*z),Vr>=0&&(u.join==="round"?x+=kt(b,S,b-O*C,S-M*C,b-N*C,S-K*C,p,!1)+4:x+=2,p.push(b-N*z,S-K*z),p.push(b+N*C,S+K*C));continue}const Wr=(-O+A)*(-M+S)-(-O+b)*(-M+F),Xr=(-N+j)*(-K+S)-(-N+b)*(-K+pt),De=(zt*Xr-ge*Wr)/ke,Le=(xe*Wr-pe*Xr)/ke,vn=(De-b)*(De-b)+(Le-S)*(Le-S),Rt=b+(De-b)*C,Ut=S+(Le-S)*C,Et=b-(De-b)*z,Bt=S-(Le-S)*z,Ho=Math.min(zt*zt+pe*pe,ge*ge+xe*xe),Yr=ve?C:z,jo=Ho+Yr*Yr*P;vn<=jo?u.join==="bevel"||vn/P>U?(ve?(p.push(Rt,Ut),p.push(b+O*z,S+M*z),p.push(Rt,Ut),p.push(b+N*z,S+K*z)):(p.push(b-O*C,S-M*C),p.push(Et,Bt),p.push(b-N*C,S-K*C),p.push(Et,Bt)),x+=2):u.join==="round"?ve?(p.push(Rt,Ut),p.push(b+O*z,S+M*z),x+=kt(b,S,b+O*z,S+M*z,b+N*z,S+K*z,p,!0)+4,p.push(Rt,Ut),p.push(b+N*z,S+K*z)):(p.push(b-O*C,S-M*C),p.push(Et,Bt),x+=kt(b,S,b-O*C,S-M*C,b-N*C,S-K*C,p,!1)+4,p.push(b-N*C,S-K*C),p.push(Et,Bt)):(p.push(Rt,Ut),p.push(Et,Bt)):(p.push(b-O*C,S-M*C),p.push(b+O*z,S+M*z),u.join==="round"?ve?x+=kt(b,S,b+O*z,S+M*z,b+N*z,S+K*z,p,!0)+2:x+=kt(b,S,b-O*C,S-M*C,b-N*C,S-K*C,p,!1)+2:u.join==="miter"&&vn/P<=U&&(ve?(p.push(Et,Bt),p.push(Et,Bt)):(p.push(Rt,Ut),p.push(Rt,Ut)),x+=2),p.push(b-N*C,S-K*C),p.push(b+N*z,S+K*z),x+=2)}A=n[(v-2)*2],F=n[(v-2)*2+1],b=n[(v-1)*2],S=n[(v-1)*2+1],O=-(F-S),M=A-b,w=Math.sqrt(O*O+M*M),O/=w,M/=w,O*=_,M*=_,p.push(b-O*C,S-M*C),p.push(b+O*z,S+M*z),m||(u.cap==="round"?x+=kt(b-O*(C-z)*.5,S-M*(C-z)*.5,b-O*C,S-M*C,b+O*z,S+M*z,p,!1)+2:u.cap==="square"&&(x+=wi(b,S,O,M,C,z,!1,p)));const Be=Ci*Ci;for(let q=y;q<x+y-2;++q)A=p[q*2],F=p[q*2+1],b=p[(q+1)*2],S=p[(q+1)*2+1],j=p[(q+2)*2],pt=p[(q+2)*2+1],!(Math.abs(A*(S-pt)+b*(pt-F)+j*(F-S))<Be)&&a.push(q,q+1,q+2)}function Gs(n,t,e,r,i,s,o){const a=Il(n,t,2);if(!a)return;for(let c=0;c<a.length;c+=3)s[o++]=a[c]+i,s[o++]=a[c+1]+i,s[o++]=a[c+2]+i;let l=i*r;for(let c=0;c<n.length;c+=2)e[l]=n[c],e[l+1]=n[c+1],l+=r}const Ou=[],Ru={build(n,t){for(let e=0;e<n.points.length;e++)t[e]=n.points[e];return t},triangulate(n,t,e,r,i,s){Gs(n,Ou,t,e,r,i,s)}},Uu={build(n,t){const e=n,r=e.x,i=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=r,t[1]=i,t[2]=r+s,t[3]=i,t[4]=r+s,t[5]=i+o,t[6]=r,t[7]=i+o),t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[6],t[r+o+1]=n[7],o+=e,t[r+o]=n[4],t[r+o+1]=n[5],o+=e;const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},Eu={build(n,t){return t[0]=n.x,t[1]=n.y,t[2]=n.x2,t[3]=n.y2,t[4]=n.x3,t[5]=n.y3,t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[4],t[r+o+1]=n[5];const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},Br={rectangle:Uu,polygon:Ru,triangle:Eu,circle:Wn,ellipse:Wn,roundedRectangle:Wn},Bu=new ot;function ku(n,t){const{geometryData:e,batches:r}=t;r.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")Du(s.data,r,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,c=s.data.hole;o&&c&&Ai(c.shapePath,l,null,!0,r,e),Ai(a,l,c,o,r,e)}}}function Du(n,t,e){const{vertices:r,uvs:i,indices:s}=e,o=s.length,a=r.length/2,l=[],c=Br.rectangle,u=Bu,h=n.image;u.x=n.dx,u.y=n.dy,u.width=n.dw,u.height=n.dh;const f=n.transform;c.build(u,l),f&&Ds(l,f),c.triangulate(l,r,2,a,s,o);const d=h.uvs;i.push(d.x0,d.y0,d.x1,d.y1,d.x3,d.y3,d.x2,d.y2);const m=Mt.get(Ls);m.indexOffset=o,m.indexSize=s.length-o,m.vertexOffset=a,m.vertexSize=r.length/2-a,m.color=n.style,m.alpha=n.alpha,m.texture=h,m.geometryData=e,t.push(m)}function Ai(n,t,e,r,i,s){const{vertices:o,uvs:a,indices:l}=s,c=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:u,transform:h},f)=>{const d=l.length,m=o.length/2,g=[],p=Br[u.type];if(p.build(u,g),h&&Ds(g,h),r){const _=u.closePath??!0;Iu(g,t,!1,_,o,2,m,l)}else if(e&&c===f){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const _=[],P=g.slice();Lu(e.shapePath).forEach(A=>{_.push(P.length/2),P.push(...A)}),Gs(P,_,o,2,m,l,d)}else p.triangulate(g,o,2,m,l,d);const v=a.length/2,x=t.texture;if(x!==E.WHITE){const _=t.matrix;h&&_.append(h.clone().invert()),Tu(o,2,m,a,v,2,o.length/2-m,_)}else Pu(a,v,2,o.length/2-m);const y=Mt.get(Ls);y.indexOffset=d,y.indexSize=l.length-d,y.vertexOffset=m,y.vertexSize=o.length/2-m,y.color=t.color,y.alpha=t.alpha,y.texture=x,y.geometryData=s,i.push(y)})}function Lu(n){if(!n)return[];const t=n.shapePrimitives,e=[];for(let r=0;r<t.length;r++){const i=t[r].shape,s=[];Br[i.type].build(i,s),e.push(s)}return e}class Gu{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Nu{constructor(){this.geometry=new _u,this.instructions=new es}init(){this.instructions.reset()}}const kr=class fr{constructor(){this._activeBatchers=[],this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null)}init(t){fr.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??fr.defaultOptions.bezierSmoothness}prerender(){this._returnActiveBatchers()}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),ku(t,e);const r=t.batchMode;t.customShader||r==="no-batch"?e.isBatchable=!1:r==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_returnActiveBatchers(){for(let t=0;t<this._activeBatchers.length;t++)Mt.return(this._activeBatchers[t]);this._activeBatchers.length=0}_initContextRenderData(t){const e=Mt.get(Nu),{batches:r,geometryData:i}=this._gpuContextHash[t.uid],s=i.vertices.length,o=i.indices.length;for(let u=0;u<r.length;u++)r[u].applyTransform=!1;const a=Mt.get(Au);this._activeBatchers.push(a),a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let u=0;u<r.length;u++){const h=r[u];a.add(h)}a.finish(e.instructions);const l=e.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const c=a.batches;for(let u=0;u<c.length;u++){const h=c[u];h.bindGroup=bu(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new Gu;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(Mt.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(r=>{Mt.return(r)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};kr.extension={type:[B.WebGLSystem,B.WebGPUSystem,B.CanvasSystem],name:"graphicsContext"};kr.defaultOptions={bezierSmoothness:.5};let Ns=kr;const $u=8,Qe=11920929e-14,Vu=1;function $s(n,t,e,r,i,s,o,a,l,c){const h=Math.min(.99,Math.max(0,c??Ns.defaultOptions.bezierSmoothness));let f=(Vu-h)/1;return f*=f,Wu(t,e,r,i,s,o,a,l,n,f),n}function Wu(n,t,e,r,i,s,o,a,l,c){dr(n,t,e,r,i,s,o,a,l,c,0),l.push(o,a)}function dr(n,t,e,r,i,s,o,a,l,c,u){if(u>$u)return;const h=(n+e)/2,f=(t+r)/2,d=(e+i)/2,m=(r+s)/2,g=(i+o)/2,p=(s+a)/2,v=(h+d)/2,x=(f+m)/2,y=(d+g)/2,_=(m+p)/2,P=(v+y)/2,U=(x+_)/2;if(u>0){let A=o-n,F=a-t;const b=Math.abs((e-o)*F-(r-a)*A),S=Math.abs((i-o)*F-(s-a)*A);if(b>Qe&&S>Qe){if((b+S)*(b+S)<=c*(A*A+F*F)){l.push(P,U);return}}else if(b>Qe){if(b*b<=c*(A*A+F*F)){l.push(P,U);return}}else if(S>Qe){if(S*S<=c*(A*A+F*F)){l.push(P,U);return}}else if(A=P-(n+o)/2,F=U-(t+a)/2,A*A+F*F<=c){l.push(P,U);return}}dr(n,t,h,f,v,x,P,U,l,c,u+1),dr(P,U,y,_,g,p,o,a,l,c,u+1)}const Xu=8,Yu=11920929e-14,Hu=1;function ju(n,t,e,r,i,s,o,a){const c=Math.min(.99,Math.max(0,a??Ns.defaultOptions.bezierSmoothness));let u=(Hu-c)/1;return u*=u,qu(t,e,r,i,s,o,n,u),n}function qu(n,t,e,r,i,s,o,a){mr(o,n,t,e,r,i,s,a,0),o.push(i,s)}function mr(n,t,e,r,i,s,o,a,l){if(l>Xu)return;const c=(t+r)/2,u=(e+i)/2,h=(r+s)/2,f=(i+o)/2,d=(c+h)/2,m=(u+f)/2;let g=s-t,p=o-e;const v=Math.abs((r-s)*p-(i-o)*g);if(v>Yu){if(v*v<=a*(g*g+p*p)){n.push(d,m);return}}else if(g=d-(t+s)/2,p=m-(e+o)/2,g*g+p*p<=a){n.push(d,m);return}mr(n,t,e,c,u,d,m,a,l+1),mr(n,d,m,h,f,s,o,a,l+1)}function Vs(n,t,e,r,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a=a||Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI))),a=Math.max(a,3);let c=l/a,u=i;c*=o?-1:1;for(let h=0;h<a+1;h++){const f=Math.cos(u),d=Math.sin(u),m=t+f*r,g=e+d*r;n.push(m,g),u+=c}}function Ku(n,t,e,r,i,s){const o=n[n.length-2],l=n[n.length-1]-e,c=o-t,u=i-e,h=r-t,f=Math.abs(l*h-c*u);if(f<1e-8||s===0){(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e);return}const d=l*l+c*c,m=u*u+h*h,g=l*u+c*h,p=s*Math.sqrt(d)/f,v=s*Math.sqrt(m)/f,x=p*g/d,y=v*g/m,_=p*h+v*c,P=p*u+v*l,U=c*(v+x),A=l*(v+x),F=h*(p+y),b=u*(p+y),S=Math.atan2(A-P,U-_),j=Math.atan2(b-P,F-_);Vs(n,_+t,P+e,s,S,j,c*u>h*l)}const ze=Math.PI*2,Xn={centerX:0,centerY:0,ang1:0,ang2:0},Yn=({x:n,y:t},e,r,i,s,o,a,l)=>{n*=e,t*=r;const c=i*n-s*t,u=s*n+i*t;return l.x=c+o,l.y=u+a,l};function Zu(n,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),r=t===1.5707963267948966?.551915024494:e,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+t),a=Math.sin(n+t);return[{x:i-s*r,y:s+i*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const Ti=(n,t,e,r)=>{const i=n*r-t*e<0?-1:1;let s=n*e+t*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},Qu=(n,t,e,r,i,s,o,a,l,c,u,h,f)=>{const d=Math.pow(i,2),m=Math.pow(s,2),g=Math.pow(u,2),p=Math.pow(h,2);let v=d*m-d*p-m*g;v<0&&(v=0),v/=d*p+m*g,v=Math.sqrt(v)*(o===a?-1:1);const x=v*i/s*h,y=v*-s/i*u,_=c*x-l*y+(n+e)/2,P=l*x+c*y+(t+r)/2,U=(u-x)/i,A=(h-y)/s,F=(-u-x)/i,b=(-h-y)/s,S=Ti(1,0,U,A);let j=Ti(U,A,F,b);a===0&&j>0&&(j-=ze),a===1&&j<0&&(j+=ze),f.centerX=_,f.centerY=P,f.ang1=S,f.ang2=j};function Ju(n,t,e,r,i,s,o,a=0,l=0,c=0){if(s===0||o===0)return;const u=Math.sin(a*ze/360),h=Math.cos(a*ze/360),f=h*(t-r)/2+u*(e-i)/2,d=-u*(t-r)/2+h*(e-i)/2;if(f===0&&d===0)return;s=Math.abs(s),o=Math.abs(o);const m=Math.pow(f,2)/Math.pow(s,2)+Math.pow(d,2)/Math.pow(o,2);m>1&&(s*=Math.sqrt(m),o*=Math.sqrt(m)),Qu(t,e,r,i,s,o,l,c,u,h,f,d,Xn);let{ang1:g,ang2:p}=Xn;const{centerX:v,centerY:x}=Xn;let y=Math.abs(p)/(ze/4);Math.abs(1-y)<1e-7&&(y=1);const _=Math.max(Math.ceil(y),1);p/=_;let P=n[n.length-2],U=n[n.length-1];const A={x:0,y:0};for(let F=0;F<_;F++){const b=Zu(g,p),{x:S,y:j}=Yn(b[0],s,o,h,u,v,x,A),{x:pt,y:O}=Yn(b[1],s,o,h,u,v,x,A),{x:M,y:N}=Yn(b[2],s,o,h,u,v,x,A);$s(n,P,U,S,j,pt,O,M,N),P=M,U=N,g+=p}}function tc(n,t,e){const r=(o,a)=>{const l=a.x-o.x,c=a.y-o.y,u=Math.sqrt(l*l+c*c),h=l/u,f=c/u;return{len:u,nx:h,ny:f}},i=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){i(o,a),s=a;continue}const c=t[(o+1)%t.length],u=r(a,s),h=r(a,c);if(u.len<1e-4||h.len<1e-4){i(o,a),s=a;continue}let f=Math.asin(u.nx*h.ny-u.ny*h.nx),d=1,m=!1;u.nx*h.nx-u.ny*-h.ny<0?f<0?f=Math.PI+f:(f=Math.PI-f,d=-1,m=!0):f>0&&(d=-1,m=!0);const g=f/2;let p,v=Math.abs(Math.cos(g)*l/Math.sin(g));v>Math.min(u.len/2,h.len/2)?(v=Math.min(u.len/2,h.len/2),p=Math.abs(v*Math.sin(g)/Math.cos(g))):p=l;const x=a.x+h.nx*v+-h.ny*p*d,y=a.y+h.ny*v+h.nx*p*d,_=Math.atan2(u.ny,u.nx)+Math.PI/2*d,P=Math.atan2(h.ny,h.nx)-Math.PI/2*d;o===0&&n.moveTo(x+Math.cos(_)*p,y+Math.sin(_)*p),n.arc(x,y,p,_,P,m),s=a}}function ec(n,t,e,r){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,c)=>({x:a.x+(l.x-a.x)*c,y:a.y+(l.y-a.y)*c}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],c=l.radius??e;if(c<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const u=t[a],h=t[(a+2)%o],f=i(u,l);let d;if(f<1e-4)d=l;else{const p=Math.min(f/2,c);d=s(l,u,p/f)}const m=i(h,l);let g;if(m<1e-4)g=l;else{const p=Math.min(m/2,c);g=s(l,h,p/m)}a===0?n.moveTo(d.x,d.y):n.lineTo(d.x,d.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,r)}}const nc=new ot;class rc{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new St,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==t||s!==e)&&r.push(t,e),this}arc(t,e,r,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return Vs(a,t,e,r,i,s,o),this}arcTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return Ku(o,t,e,r,i,s),this}arcToSvg(t,e,r,i,s,o,a){const l=this._currentPoly.points;return Ju(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,r,i,s),this}bezierCurveTo(t,e,r,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return $s(this._currentPoly.points,l.lastX,l.lastY,t,e,r,i,s,o,a),this}quadraticCurveTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly;return ju(this._currentPoly.points,o.lastX,o.lastY,t,e,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let r=0;r<t.instructions.length;r++){const i=t.instructions[r];this[i.action](...i.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,r,i,s){return this.drawShape(new ot(t,e,r,i),s),this}circle(t,e,r,i){return this.drawShape(new Rr(t,e,r),i),this}poly(t,e,r){const i=new Fe(t);return i.closePath=e,this.drawShape(i,r),this}regularPoly(t,e,r,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,c=[];for(let u=0;u<i;u++){const h=u*l+a;c.push(t+r*Math.cos(h),e+r*Math.sin(h))}return this.poly(c,!0,o),this}roundPoly(t,e,r,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(t,e,r,i,o);const l=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const c=-1*Math.PI/2+o,u=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let f=0;f<i;f++){const d=f*u+c,m=t+r*Math.cos(d),g=e+r*Math.sin(d),p=d+Math.PI+h,v=d-Math.PI-h,x=m+s*Math.cos(p),y=g+s*Math.sin(p),_=m+s*Math.cos(v),P=g+s*Math.sin(v);f===0?this.moveTo(x,y):this.lineTo(x,y),this.quadraticCurveTo(m,g,_,P,a)}return this.closePath()}roundShape(t,e,r=!1,i){return t.length<3?this:(r?ec(this,t,e,i):tc(this,t,e),this.closePath())}filletRect(t,e,r,i,s){if(s===0)return this.rect(t,e,r,i);const o=Math.min(r,i)/2,a=Math.min(o,Math.max(-o,s)),l=t+r,c=e+i,u=a<0?-a:0,h=Math.abs(a);return this.moveTo(t,e+h).arcTo(t+u,e+u,t+h,e,h).lineTo(l-h,e).arcTo(l-u,e+u,l,e+h,h).lineTo(l,c-h).arcTo(l-u,c-u,t+r-h,c,h).lineTo(t+h,c).arcTo(t+u,c-u,t,c-h,h).closePath()}chamferRect(t,e,r,i,s,o){if(s<=0)return this.rect(t,e,r,i);const a=Math.min(s,Math.min(r,i)/2),l=t+r,c=e+i,u=[t+a,e,l-a,e,l,e+a,l,c-a,l-a,c,t+a,c,t,c-a,t,e+a];for(let h=u.length-1;h>=2;h-=2)u[h]===u[h-2]&&u[h-1]===u[h-3]&&u.splice(h-1,2);return this.poly(u,!0,o)}ellipse(t,e,r,i,s){return this.drawShape(new Ur(t,e,r,i),s),this}roundRect(t,e,r,i,s,o){return this.drawShape(new Er(t,e,r,i,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let r=this._currentPoly;return r&&this.endPoly(),r=new Fe,r.points.push(t,e),this._currentPoly=r,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Fe,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let r=e.shape.x,i=e.shape.y;if(!e.transform.isIdentity()){const s=e.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const r=t.instructions[e];this[r.action](...r.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let r=0;r<e.length;r++){const i=e[r],s=i.shape.getBounds(nc);i.transform?t.addRect(s,i.transform):t.addRect(s)}return t}}class ue{constructor(t){this.instructions=[],this.uid=nt("graphicsPath"),this._dirty=!0,typeof t=="string"?du(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new rc(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,r,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(ut.shared);let l=0,c=0;if(!o||o.action!=="bezierCurveTo")l=a.x,c=a.y;else{l=o.data[2],c=o.data[3];const u=a.x,h=a.y;l=u+(u-l),c=h+(h-c)}return this.instructions.push({action:"bezierCurveTo",data:[l,c,t,e,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(ut.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,c=s.y;o=l+(l-o),a=c+(c-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,r]}),this._dirty=!0,this}rect(t,e,r,i,s){return this.instructions.push({action:"rect",data:[t,e,r,i,s]}),this._dirty=!0,this}circle(t,e,r,i){return this.instructions.push({action:"circle",data:[t,e,r,i]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,r,i,s,o,a){s=s||i/2;const l=-1*Math.PI/2+o,c=r*2,u=Math.PI*2/c,h=[];for(let f=0;f<c;f++){const d=f%2?s:i,m=f*u+l;h.push(t+d*Math.cos(m),e+d*Math.sin(m))}return this.poly(h,!0,a),this}clone(t=!1){const e=new ue;if(!t)e.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];e.instructions.push({action:i.action,data:i.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,r=t.b,i=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,c=0,u=0,h=0,f=0,d=0,m=0,g=0;for(let p=0;p<this.instructions.length;p++){const v=this.instructions[p],x=v.data;switch(v.action){case"moveTo":case"lineTo":l=x[0],c=x[1],x[0]=e*l+i*c+o,x[1]=r*l+s*c+a;break;case"bezierCurveTo":u=x[0],h=x[1],f=x[2],d=x[3],l=x[4],c=x[5],x[0]=e*u+i*h+o,x[1]=r*u+s*h+a,x[2]=e*f+i*d+o,x[3]=r*f+s*d+a,x[4]=e*l+i*c+o,x[5]=r*l+s*c+a;break;case"quadraticCurveTo":u=x[0],h=x[1],l=x[2],c=x[3],x[0]=e*u+i*h+o,x[1]=r*u+s*h+a,x[2]=e*l+i*c+o,x[3]=r*l+s*c+a;break;case"arcToSvg":l=x[5],c=x[6],m=x[0],g=x[1],x[0]=e*m+i*g,x[1]=r*m+s*g,x[5]=e*l+i*c+o,x[6]=r*l+s*c+a;break;case"circle":x[4]=Se(x[3],t);break;case"rect":x[4]=Se(x[4],t);break;case"ellipse":x[8]=Se(x[8],t);break;case"roundRect":x[5]=Se(x[5],t);break;case"addPath":x[0].transform(t);break;case"poly":x[2]=Se(x[2],t);break;default:at("unknown transform action",v.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,r=this.instructions[e];if(!r)return t.x=0,t.y=0,t;for(;r.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;r=this.instructions[e]}switch(r.action){case"moveTo":case"lineTo":t.x=r.data[0],t.y=r.data[1];break;case"quadraticCurveTo":t.x=r.data[2],t.y=r.data[3];break;case"bezierCurveTo":t.x=r.data[4],t.y=r.data[5];break;case"arc":case"arcToSvg":t.x=r.data[5],t.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(t);break}return t}}function Se(n,t){return n?n.prepend(t):t.clone()}function ic(n,t){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const e={context:t,path:new ue};return Ws(n,e,null,null),t}function Ws(n,t,e,r){const i=n.children,{fillStyle:s,strokeStyle:o}=sc(n);s&&e?e={...e,...s}:s&&(e=s),o&&r?r={...r,...o}:o&&(r=o),t.context.fillStyle=e,t.context.strokeStyle=r;let a,l,c,u,h,f,d,m,g,p,v,x,y,_,P,U,A;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),P=new ue(_),t.context.path(P),e&&t.context.fill(),r&&t.context.stroke();break;case"circle":d=rt(n,"cx",0),m=rt(n,"cy",0),g=rt(n,"r",0),t.context.ellipse(d,m,g,g),e&&t.context.fill(),r&&t.context.stroke();break;case"rect":a=rt(n,"x",0),l=rt(n,"y",0),U=rt(n,"width",0),A=rt(n,"height",0),p=rt(n,"rx",0),v=rt(n,"ry",0),p||v?t.context.roundRect(a,l,U,A,p||v):t.context.rect(a,l,U,A),e&&t.context.fill(),r&&t.context.stroke();break;case"ellipse":d=rt(n,"cx",0),m=rt(n,"cy",0),p=rt(n,"rx",0),v=rt(n,"ry",0),t.context.beginPath(),t.context.ellipse(d,m,p,v),e&&t.context.fill(),r&&t.context.stroke();break;case"line":c=rt(n,"x1",0),u=rt(n,"y1",0),h=rt(n,"x2",0),f=rt(n,"y2",0),t.context.beginPath(),t.context.moveTo(c,u),t.context.lineTo(h,f),r&&t.context.stroke();break;case"polygon":y=n.getAttribute("points"),x=y.match(/\d+/g).map(F=>parseInt(F,10)),t.context.poly(x,!0),e&&t.context.fill(),r&&t.context.stroke();break;case"polyline":y=n.getAttribute("points"),x=y.match(/\d+/g).map(F=>parseInt(F,10)),t.context.poly(x,!1),r&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let F=0;F<i.length;F++)Ws(i[F],t,e,r)}function rt(n,t,e){const r=n.getAttribute(t);return r?Number(r):e}function sc(n){const t=n.getAttribute("style"),e={},r={};let i=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[c,u]=l.split(":");switch(c){case"stroke":u!=="none"&&(e.color=H.shared.setValue(u).toNumber(),s=!0);break;case"stroke-width":e.width=Number(u);break;case"fill":u!=="none"&&(i=!0,r.color=H.shared.setValue(u).toNumber());break;case"fill-opacity":r.alpha=Number(u);break;case"stroke-opacity":e.alpha=Number(u);break;case"opacity":r.alpha=Number(u),e.alpha=Number(u);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=H.shared.setValue(o).toNumber(),e.width=rt(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(i=!0,r.color=H.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:i?r:null}}const Xs=class pr{constructor(t,e,r,i){this.uid=nt("fillGradient"),this.type="linear",this.gradientStops=[],this.x0=t,this.y0=e,this.x1=r,this.y1=i}addColorStop(t,e){return this.gradientStops.push({offset:t,color:H.shared.setValue(e).toHex()}),this}buildLinearGradient(){const t=pr.defaultTextureSize,{gradientStops:e}=this,r=st.get().createCanvas();r.width=t,r.height=t;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,pr.defaultTextureSize,1);for(let g=0;g<e.length;g++){const p=e[g];s.addColorStop(p.offset,p.color)}i.fillStyle=s,i.fillRect(0,0,t,t),this.texture=new E({source:new he({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:c}=this,u=new Y,h=l-o,f=c-a,d=Math.sqrt(h*h+f*f),m=Math.atan2(f,h);u.translate(-o,-a),u.scale(1/t,1/t),u.rotate(-m),u.scale(256/d,1),this.transform=u}};Xs.defaultTextureSize=256;let Ys=Xs;const Pi={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class oc{constructor(t,e){this.uid=nt("fillPattern"),this.transform=new Y,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=Pi[e].addressModeU,t.source.style.addressModeV=Pi[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height)}}function It(n,t){var o;if(n==null)return null;let e,r;if(n!=null&&n.fill?(r=n.fill,e={...t,...n}):(r=n,e=t),H.isColorLike(r)){const a=H.shared.setValue(r??0);return{...e,color:a.toNumber(),alpha:a.alpha===1?e.alpha:a.alpha,texture:E.WHITE}}else if(r instanceof oc){const a=r;return{...e,color:16777215,texture:a.texture,matrix:a.transform,fill:e.fill??null}}else if(r instanceof Ys){const a=r;return a.buildLinearGradient(),{...e,color:16777215,texture:a.texture,matrix:a.transform}}const i={...t,...n};if(i.texture){if(i.texture!==E.WHITE){const l=((o=i.matrix)==null?void 0:o.invert())||new Y;l.scale(1/i.texture.frame.width,1/i.texture.frame.height),i.matrix=l}const a=i.texture.source.style;a.addressMode==="clamp-to-edge"&&(a.addressMode="repeat")}const s=H.shared.setValue(i.color);return i.alpha*=s.alpha,i.color=s.toNumber(),i.matrix=i.matrix?i.matrix.clone():null,i}const ac=new ut,Mi=new Y,Dr=class _t extends wt{constructor(){super(...arguments),this.uid=nt("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new ue,this._transform=new Y,this._fillStyle={..._t.defaultFillStyle},this._strokeStyle={..._t.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new St,this._boundsDirty=!0}clone(){const t=new _t;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=It(t,_t.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=It(t,_t.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=It(t,_t.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=It(t,_t.defaultStrokeStyle),this}texture(t,e,r,i,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:r||0,dy:i||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?H.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new ue,this}fill(t,e){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(t!=null&&(e!==void 0&&typeof t=="number"&&(I(Q,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=It(t,_t.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(ut.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?e=r.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=It(t,_t.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],r=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(r);else{e.data.hole=r;break}}return this._initNextPathLocation(),this}arc(t,e,r,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,r,i,s,o),this}arcTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,r,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*r+l.c*i+l.tx,l.b*r+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,r,i){return this._tick++,this._activePath.ellipse(t,e,r,i,this._transform.clone()),this}circle(t,e,r){return this._tick++,this._activePath.circle(t,e,r,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*t+r.c*e+r.tx,r.b*t+r.d*e+r.ty),this}moveTo(t,e){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*t+r.c*e+r.tx,o=r.b*t+r.d*e+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(t,e,r,i){return this._tick++,this._activePath.rect(t,e,r,i,this._transform.clone()),this}roundRect(t,e,r,i,s){return this._tick++,this._activePath.roundRect(t,e,r,i,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,r,i,s,o),this}roundPoly(t,e,r,i,s,o){return this._tick++,this._activePath.roundPoly(t,e,r,i,s,o),this}roundShape(t,e,r,i){return this._tick++,this._activePath.roundShape(t,e,r,i),this}filletRect(t,e,r,i,s){return this._tick++,this._activePath.filletRect(t,e,r,i,s),this}chamferRect(t,e,r,i,s,o){return this._tick++,this._activePath.chamferRect(t,e,r,i,s,o),this}star(t,e,r,i,s=0,o=0){return this._tick++,this._activePath.star(t,e,r,i,s,o,this._transform.clone()),this}svg(t){return this._tick++,ic(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,r,i,s,o){return t instanceof Y?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,r,i,s,o),this)}transform(t,e,r,i,s,o){return t instanceof Y?(this._transform.append(t),this):(Mi.set(t,e,r,i,s,o),this._transform.append(Mi),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const r=this.instructions[e],i=r.action;if(i==="fill"){const s=r.data;t.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.width/2,a=s.path.bounds;t.addFrame(a.minX-o,a.minY-o,a.maxX+o,a.maxY+o)}}return t}containsPoint(t){var i;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let r=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const c=a.style,u=l.shapePath.shapePrimitives;for(let h=0;h<u.length;h++){const f=u[h].shape;if(!c||!f)continue;const d=u[h].transform,m=d?d.applyInverse(t,ac):t;o.action==="fill"?r=f.contains(m.x,m.y):r=f.strokeContains(m.x,m.y,c.width);const g=a.hole;if(g){const p=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(p)for(let v=0;v<p.length;v++)p[v].shape.contains(m.x,m.y)&&(r=!1)}if(r)return!0}}return r}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Dr.defaultFillStyle={color:16777215,alpha:1,texture:E.WHITE,matrix:null,fill:null};Dr.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:E.WHITE,matrix:null,fill:null};let Ot=Dr;function Lr(n,t=1){var r;const e=(r=fe.RETINA_PREFIX)==null?void 0:r.exec(n);return e?parseFloat(e[1]):t}function Gr(n,t,e){n.label=e,n._sourceOrigin=e;const r=new E({source:n,label:e}),i=()=>{delete t.promiseCache[e],lt.has(e)&&lt.remove(e)};return r.source.once("destroy",()=>{t.promiseCache[e]&&(at("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),r.once("destroy",()=>{n.destroyed||(at("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),r}const lc=".svg",uc="image/svg+xml",cc={extension:{type:B.LoadParser,priority:jt.Low},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return de(n,uc)||me(n,lc)},async load(n,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?fc(n):hc(n,t,e,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function hc(n,t,e,r){var p,v,x;const s=await(await st.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),c=l.getContext("2d"),u=((p=t.data)==null?void 0:p.resolution)||Lr(n),h=((v=t.data)==null?void 0:v.width)??a.width,f=((x=t.data)==null?void 0:x.height)??a.height;l.width=h*u,l.height=f*u,c.drawImage(a,0,0,h*u,f*u);const{parseAsGraphicsContext:d,...m}=t.data,g=new he({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:u,...m});return Gr(g,e,n)}async function fc(n){const e=await(await st.get().fetch(n)).text(),r=new Ot;return r.svg(e),r}const dc=`(function () {
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
`;let re=null,gr=class{constructor(){re||(re=URL.createObjectURL(new Blob([dc],{type:"application/javascript"}))),this.worker=new Worker(re)}};gr.revokeObjectURL=function(){re&&(URL.revokeObjectURL(re),re=null)};const mc=`(function () {
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
`;let ie=null;class Hs{constructor(){ie||(ie=URL.createObjectURL(new Blob([mc],{type:"application/javascript"}))),this.worker=new Worker(ie)}}Hs.revokeObjectURL=function(){ie&&(URL.revokeObjectURL(ie),ie=null)};let Fi=0,Hn;class pc{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new gr;e.addEventListener("message",r=>{e.terminate(),gr.revokeObjectURL(),t(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Hn===void 0&&(Hn=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<Hn&&(this._createdWorkers++,t=new Hs().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const r=new Promise((i,s)=>{this._queue.push({id:t,arguments:e,resolve:i,reject:s})});return this._next(),r}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),r=e.id;this._resolveHash[Fi]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Fi++,id:r})}}const zi=new pc,gc=[".jpeg",".jpg",".png",".webp",".avif"],xc=["image/jpeg","image/png","image/webp","image/avif"];async function vc(n){const t=await st.get().fetch(n);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${t.status} ${t.statusText}`);const e=await t.blob();return await createImageBitmap(e)}const js={name:"loadTextures",extension:{type:B.LoadParser,priority:jt.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return de(n,xc)||me(n,gc)},async load(n,t,e){var s;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await zi.isImageBitmapSupported()?r=await zi.loadImageBitmap(n):r=await vc(n):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=n,r.complete?o(r):r.onload=()=>{o(r)}});const i=new he({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||Lr(n),...t.data});return Gr(i,e,n)},unload(n){n.destroy(!0)}},qs=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],yc=qs.map(n=>`video/${n.substring(1)}`);function _c(n,t,e){e===void 0&&!t.startsWith("data:")?n.crossOrigin=Sc(t):e!==!1&&(n.crossOrigin=typeof e=="string"?e:"anonymous")}function bc(n){return new Promise((t,e)=>{n.addEventListener("canplaythrough",r),n.addEventListener("error",i),n.load();function r(){s(),t()}function i(o){s(),e(o)}function s(){n.removeEventListener("canplaythrough",r),n.removeEventListener("error",i)}})}function Sc(n,t=globalThis.location){if(n.startsWith("data:"))return"";t=t||globalThis.location;const e=new URL(n,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const Cc={name:"loadVideo",extension:{type:B.LoadParser},config:null,test(n){const t=de(n,yc),e=me(n,qs);return t||e},async load(n,t,e){var l,c;const r={...Je.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Lr(n),alphaMode:((c=t.data)==null?void 0:c.alphaMode)||await cs(),...t.data},i=document.createElement("video"),s={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(s).forEach(u=>{const h=s[u];h!==void 0&&i.setAttribute(u,h)}),r.muted===!0&&(i.muted=!0),_c(i,n,r.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const u=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=Je.MIME_TYPES[u]||`video/${u}`}return o.src=n,a&&(o.type=a),new Promise(u=>{const h=async()=>{const f=new Je({...r,resource:i});i.removeEventListener("canplay",h),t.data.preload&&await bc(i),u(Gr(f,e,n))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(n){n.destroy(!0)}},Ks={extension:B.ResolveParser,test:js.test,parse:n=>{var t;return{resolution:parseFloat(((t=fe.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:n.split(".").pop(),src:n}}},wc={extension:B.ResolveParser,test:n=>fe.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:Ks.parse};class Ac{constructor(){this._detections=[],this._initialized=!1,this.resolver=new fe,this.loader=new Yl,this.cache=lt,this._backgroundLoader=new kl(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){at("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,r=typeof e=="number"?[e]:e,i=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const r=dn(t),i=xt(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(c=>!this.resolver.hasKey(c))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,e);return r?o[i[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let r=!1;typeof t=="string"&&(r=!0,t=[t]);const i=this.resolver.resolveBundle(t),s={},o=Object.keys(i);let a=0,l=0;const c=()=>{e==null||e(++a/l)},u=o.map(h=>{const f=i[h];return l+=Object.keys(f).length,this._mapLoadToResolve(f,c).then(d=>{s[h]=d})});return await Promise.all(u),r?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return lt.get(t);const e={};for(let r=0;r<t.length;r++)e[r]=lt.get(t[r]);return e}async _mapLoadToResolve(t,e){const r=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const i=await this.loader.load(r,e);this._backgroundLoader.active=!0;const s={};return r.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(c=>{s[c]=a}),lt.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=xt(t).map(i=>typeof i!="string"?i.src:i),r=this.resolver.resolve(e);await this._unloadFromResolved(r)}async unloadBundle(t){this._initialized||await this.init(),t=xt(t);const e=this.resolver.resolveBundle(t),r=Object.keys(e).map(i=>this._unloadFromResolved(e[i]));await Promise.all(r)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(r=>{lt.remove(r.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const r of t.detections)t.skipDetections||await r.test()?e=await r.add(e):t.skipDetections||(e=await r.remove(e));return e=e.filter((r,i)=>e.indexOf(r)===i),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(r=>r in t).forEach(r=>{e.config[r]=t[r]})})}}const Wt=new Ac;mt.handleByList(B.LoadParser,Wt.loader.parsers).handleByList(B.ResolveParser,Wt.resolver.parsers).handleByList(B.CacheParser,Wt.cache.parsers).handleByList(B.DetectionParser,Wt.detections);mt.add(Dl,Gl,Ll,Xl,$l,Vl,Wl,ql,Ql,ou,cc,js,Cc,Ks,wc);const Ii={loader:B.LoadParser,resolver:B.ResolveParser,cache:B.CacheParser,detection:B.DetectionParser};mt.handle(B.Asset,n=>{const t=n.ref;Object.entries(Ii).filter(([e])=>!!t[e]).forEach(([e,r])=>mt.add(Object.assign(t[e],{extension:t[e].extension??r})))},n=>{const t=n.ref;Object.keys(Ii).filter(e=>!!t[e]).forEach(e=>mt.remove(t[e]))});var Tc=`in vec2 aPosition;
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
`,Pc=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Oi=`struct GlobalFilterUniforms {
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
}`;const Zs=class Qs extends G{constructor(t){t={...Qs.defaultOptions,...t};const e=k.from({vertex:{source:Oi,entryPoint:"mainVertex"},fragment:{source:Oi,entryPoint:"mainFragment"}}),r=D.from({vertex:Tc,fragment:Pc,name:"alpha-filter"}),{alpha:i,...s}=t,o=new _s({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:e,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};Zs.defaultOptions={alpha:1};let Mc=Zs,Fc=0;class zc{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,r){const i=new At({...this.textureOptions,width:t,height:e,resolution:1,antialias:r,autoGarbageCollect:!0});return new E({source:i,label:`texturePool_${Fc++}`})}getOptimalTexture(t,e,r=1,i){let s=Math.ceil(t*r-1e-6),o=Math.ceil(e*r-1e-6);s=qr(s),o=qr(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=r,l.source.width=s/r,l.source.height=o/r,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const r=this._texturePool[e];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const dt=new zc,Js={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Ic=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function Oc(n){const t=Js[n],e=t.length;let r=Ic,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=n-a-1),l=l.replace("%value%",t[o].toString()),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const Rc=`
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
    }`;function Uc(n,t){const e=Math.ceil(n/2);let r=Rc,i="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function Ec(n,t){const e=Uc(t,n),r=Oc(t);return D.from({vertex:e,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var Bc=`

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
}`;function kc(n,t){const e=Js[t],r=e.length,i=[],s=[],o=[];for(let h=0;h<t;h++){i[h]=`@location(${h}) offset${h}: vec2<f32>,`,n?s[h]=`filteredCord + vec2(${h-r+1} * strength, 0.0),`:s[h]=`filteredCord + vec2(0.0, ${h-r+1} * strength),`;const f=h<r?h:t-h-1,d=e[f].toString();o[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${d};`}const a=i.join(`
`),l=s.join(`
`),c=o.join(`
`),u=Bc.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",c);return k.from({vertex:{source:u,entryPoint:"mainVertex"},fragment:{source:u,entryPoint:"mainFragment"}})}const to=class eo extends G{constructor(t){t={...eo.defaultOptions,...t};const e=Ec(t.horizontal,t.kernelSize),r=kc(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,r,i);else{const s=dt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;for(let l=0;l<this.passes-1;l++){t.applyFilter(this,o,a,t.renderer.type===mn.WEBGPU);const c=a;a=o,o=c}this._state.blend=!0,t.applyFilter(this,o,r,i),dt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};to.defaultOptions={strength:8,quality:4,kernelSize:5};let Ri=to;class ce extends tt{constructor(t){t instanceof Ot&&(t={context:t});const{context:e,roundPixels:r,...i}=t||{};super({label:"Graphics",...i}),this.canBundle=!0,this.renderPipeId="graphics",this._roundPixels=0,e?this._context=e:this._context=this._ownedContext=new Ot,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}addBounds(t){t.addBounds(this._context.bounds)}containsPoint(t){return this._context.containsPoint(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}onViewUpdate(){if(this._didChangeId+=4096,this._didGraphicsUpdate=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new ce(this._context.clone()):(this._ownedContext=null,new ce(this._context))}lineStyle(t,e,r){I(Q,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return t&&(i.width=t),e&&(i.color=e),r&&(i.alpha=r),this.context.strokeStyle=i,this}beginFill(t,e){I(Q,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return t&&(r.color=t),e&&(r.alpha=e),this.context.fillStyle=r,this}endFill(){I(Q,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Ot.defaultStrokeStyle.width||t.color!==Ot.defaultStrokeStyle.color||t.alpha!==Ot.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return I(Q,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return I(Q,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return I(Q,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return I(Q,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return I(Q,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return I(Q,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}class Dc{constructor({matrix:t,observer:e}={}){this.dirty=!0,this._matrix=t??new Y,this.observer=e,this.position=new et(this,0,0),this.scale=new et(this,1,1),this.pivot=new et(this,0,0),this.skew=new et(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){var e;this.dirty=!0,t===this.skew&&this.updateSkew(),(e=this.observer)==null||e._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const no=class en extends tt{constructor(...t){let e=t[0]||{};e instanceof E&&(e={texture:e}),t.length>1&&(I(Q,"use new TilingSprite({ texture, width:100, height:100 }) instead"),e.width=t[1],e.height=t[2]),e={...en.defaultOptions,...e};const{texture:r,anchor:i,tilePosition:s,tileScale:o,tileRotation:a,width:l,height:c,applyAnchorToTexture:u,roundPixels:h,...f}=e??{};super({label:"TilingSprite",...f}),this.renderPipeId="tilingSprite",this.canBundle=!0,this.batched=!0,this._roundPixels=0,this._bounds={minX:0,maxX:1,minY:0,maxY:0},this._boundsDirty=!0,this.allowChildren=!1,this._anchor=new et({_onUpdate:()=>{this.onViewUpdate()}}),this._applyAnchorToTexture=u,this.texture=r,this._width=l??r.width,this._height=c??r.height,this._tileTransform=new Dc({observer:{_onUpdate:()=>this.onViewUpdate()}}),i&&(this.anchor=i),this.tilePosition=s,this.tileScale=o,this.tileRotation=a,this.roundPixels=h??!1}static from(t,e={}){return typeof t=="string"?new en({texture:lt.get(t),...e}):new en({texture:t,...e})}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}set texture(t){t||(t=E.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}_updateBounds(){const t=this._bounds,e=this._anchor,r=this._width,i=this._height;t.maxX=-e._x*r,t.minX=t.maxX+r,t.maxY=-e._y*i,t.minY=t.maxY+i}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.minX,r=this.bounds.minY,i=-e*this._anchor._x;let s=0;return t.x>=i&&t.x<=i+e&&(s=-r*this._anchor._y,t.y>=s&&t.y<=s+r)}onViewUpdate(){if(this._boundsDirty=!0,this._didTilingSpriteUpdate=!0,this._didChangeId+=4096,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null}};no.defaultOptions={texture:E.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let Ce=no;class Lc extends tt{constructor(t,e){const{text:r,resolution:i,style:s,anchor:o,width:a,height:l,roundPixels:c,...u}=t;super({...u}),this.batched=!0,this.resolution=null,this._didTextUpdate=!0,this._roundPixels=0,this._bounds=new St,this._boundsDirty=!0,this._styleClass=e,this.text=r??"",this.style=s,this.resolution=i??null,this.allowChildren=!1,this._anchor=new et({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=c??!1,a&&(this.width=a),l&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}get style(){return this._style}set style(t){var e;t=t||{},(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get bounds(){return this._boundsDirty&&(this._updateBounds(),this._boundsDirty=!1),this._bounds}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){let r,i;typeof t!="object"?(r=t,i=e??t):(r=t.width,i=t.height??t.width),r!==void 0&&this._setWidth(r,this.bounds.width),i!==void 0&&this._setHeight(i,this.bounds.height)}addBounds(t){const e=this.bounds;t.addFrame(e.minX,e.minY,e.maxX,e.maxY)}containsPoint(t){const e=this.bounds.maxX,r=this.bounds.maxY,i=-e*this.anchor.x;let s=0;return t.x>=i&&t.x<=i+e&&(s=-r*this.anchor.y,t.y>=s&&t.y<=s+r)}onViewUpdate(){if(this._didChangeId+=4096,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0,this._didTextUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}_getKey(){return`${this.text}:${this._style.styleKey}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function Gc(n,t){let e=n[0]??{};return(typeof e=="string"||n[1])&&(I(Q,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:n[1]}),e}const Nc=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function $c(n){const t=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let e=n.fontFamily;Array.isArray(n.fontFamily)||(e=n.fontFamily.split(","));for(let r=e.length-1;r>=0;r--){let i=e[r].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!Nc.includes(i)&&(i=`"${i}"`),e[r]=i}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`}const jn={willReadFrequently:!0},vt=class T{static get experimentalLetterSpacingSupported(){let t=T._experimentalLetterSpacingSupported;if(t!==void 0){const e=st.get().getCanvasRenderingContext2D().prototype;t=T._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,r,i,s,o,a,l,c){this.text=t,this.style=e,this.width=r,this.height=i,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=c}static measureText(t=" ",e,r=T._canvas,i=e.wordWrap){var x;const s=`${t}:${e.styleKey}`;if(T._measurementCache[s])return T._measurementCache[s];const o=$c(e),a=T.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=T.__context;l.font=o;const u=(i?T._wordWrap(t,e,r):t).split(/(?:\r\n|\r|\n)/),h=new Array(u.length);let f=0;for(let y=0;y<u.length;y++){const _=T._measureText(u[y],e.letterSpacing,l);h[y]=_,f=Math.max(f,_)}const d=((x=e._stroke)==null?void 0:x.width)||0;let m=f+d;e.dropShadow&&(m+=e.dropShadow.distance);const g=e.lineHeight||a.fontSize+d;let p=Math.max(g,a.fontSize+d*2)+(u.length-1)*(g+e.leading);return e.dropShadow&&(p+=e.dropShadow.distance),new T(t,e,m,p,u,h,g+e.leading,f,a)}static _measureText(t,e,r){let i=!1;T.experimentalLetterSpacingSupported&&(T.experimentalLetterSpacing?(r.letterSpacing=`${e}px`,r.textLetterSpacing=`${e}px`,i=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));let s=r.measureText(t).width;return s>0&&(i?s-=e:s+=(T.graphemeSegmenter(t).length-1)*e),s}static _wordWrap(t,e,r=T._canvas){const i=r.getContext("2d",jn);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:c,whiteSpace:u}=e,h=T._collapseSpaces(u),f=T._collapseNewlines(u);let d=!h;const m=e.wordWrapWidth+c,g=T._tokenize(t);for(let p=0;p<g.length;p++){let v=g[p];if(T._isNewline(v)){if(!f){a+=T._addLine(o),d=!h,o="",s=0;continue}v=" "}if(h){const y=T.isBreakingSpace(v),_=T.isBreakingSpace(o[o.length-1]);if(y&&_)continue}const x=T._getFromCache(v,c,l,i);if(x>m)if(o!==""&&(a+=T._addLine(o),o="",s=0),T.canBreakWords(v,e.breakWords)){const y=T.wordWrapSplit(v);for(let _=0;_<y.length;_++){let P=y[_],U=P,A=1;for(;y[_+A];){const b=y[_+A];if(!T.canBreakChars(U,b,v,_,e.breakWords))P+=b;else break;U=b,A++}_+=A-1;const F=T._getFromCache(P,c,l,i);F+s>m&&(a+=T._addLine(o),d=!1,o="",s=0),o+=P,s+=F}}else{o.length>0&&(a+=T._addLine(o),o="",s=0);const y=p===g.length-1;a+=T._addLine(v,!y),d=!1,o="",s=0}else x+s>m&&(d=!1,a+=T._addLine(o),o="",s=0),(o.length>0||!T.isBreakingSpace(v)||d)&&(o+=v,s+=x)}return a+=T._addLine(o,!1),a}static _addLine(t,e=!0){return t=T._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,r,i){let s=r[t];return typeof s!="number"&&(s=T._measureText(t,e,i)+e,r[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const r=t[e];if(!T.isBreakingSpace(r))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:T._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:T._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let r="";if(typeof t!="string")return e;for(let i=0;i<t.length;i++){const s=t[i],o=t[i+1];if(T.isBreakingSpace(s,o)||T._isNewline(s)){r!==""&&(e.push(r),r=""),e.push(s);continue}r+=s}return r!==""&&e.push(r),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,r,i,s){return!0}static wordWrapSplit(t){return T.graphemeSegmenter(t)}static measureFont(t){if(T._fonts[t])return T._fonts[t];const e=T._context;e.font=t;const r=e.measureText(T.METRICS_STRING+T.BASELINE_SYMBOL),i={ascent:r.actualBoundingBoxAscent,descent:r.actualBoundingBoxDescent,fontSize:r.actualBoundingBoxAscent+r.actualBoundingBoxDescent};return T._fonts[t]=i,i}static clearMetrics(t=""){t?delete T._fonts[t]:T._fonts={}}static get _canvas(){if(!T.__canvas){let t;try{const e=new OffscreenCanvas(0,0),r=e.getContext("2d",jn);if(r!=null&&r.measureText)return T.__canvas=e,e;t=st.get().createCanvas()}catch{t=st.get().createCanvas()}t.width=t.height=10,T.__canvas=t}return T.__canvas}static get _context(){return T.__context||(T.__context=T._canvas.getContext("2d",jn)),T.__context}};vt.METRICS_STRING="|ÉqÅ";vt.BASELINE_SYMBOL="M";vt.BASELINE_MULTIPLIER=1.4;vt.HEIGHT_MULTIPLIER=2;vt.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return t=>[...n.segment(t)].map(e=>e.segment)}return n=>[...n]})();vt.experimentalLetterSpacing=!1;vt._fonts={};vt._newlines=[10,13];vt._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];vt._measurementCache={};let Vc=vt;const Ui=["_fontFamily","_fontStyle","_fontSize","_fontVariant","_fontWeight","_breakWords","_align","_leading","_letterSpacing","_lineHeight","_textBaseline","_whiteSpace","_wordWrap","_wordWrapWidth","_padding","_cssOverrides","_trim"];function Wc(n){const t=[];let e=0;for(let r=0;r<Ui.length;r++){const i=Ui[r];t[e++]=n[i]}return e=ro(n._fill,t,e),e=Xc(n._stroke,t,e),t.join("-")}function ro(n,t,e){var r;return n&&(t[e++]=n.color,t[e++]=n.alpha,t[e++]=(r=n.fill)==null?void 0:r.uid),e}function Xc(n,t,e){return n&&(e=ro(n,t,e),t[e++]=n.width,t[e++]=n.alignment,t[e++]=n.cap,t[e++]=n.join,t[e++]=n.miterLimit),e}const Nr=class Zt extends wt{constructor(t={}){super(),Yc(t);const e={...Zt.defaultTextStyle,...t};for(const r in e){const i=r;this[i]=e[r]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow={...Zt.defaultDropShadow,...t}:this._dropShadow=t?{...Zt.defaultDropShadow}:null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t,this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._fill=It(t===0?"black":t,Ot.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._stroke=It(t,Ot.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=Wc(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=Zt.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new Zt({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var r,i,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(r=this._fill)!=null&&r.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}};Nr.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};Nr.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let io=Nr;function Yc(n){const t=n;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=io.defaultDropShadow;n.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){I(Q,"strokeThickness is now a part of stroke");const e=t.stroke;n.stroke={color:e,width:t.strokeThickness}}if(Array.isArray(t.fill)){I(Q,"gradient fill is now a fill pattern: `new FillGradient(...)`");const e=new Ys(0,0,0,n.fontSize*1.7),r=t.fill.map(i=>H.shared.setValue(i).toNumber());r.forEach((i,s)=>{const o=t.fillGradientStops[s]??s/r.length;e.addColorStop(o,i)}),n.fill={fill:e}}}class nn extends Lc{constructor(...t){const e=Gc(t,"Text");super(e,io),this.renderPipeId="text"}_updateBounds(){const t=this._bounds,e=this._style.padding,r=this._anchor,i=Vc.measureText(this._text,this._style),{width:s,height:o}=i;t.minX=-r._x*s-e,t.maxX=t.minX+s+e*2,t.minY=-r._y*o-e,t.maxY=t.minY+o+e*2}}mt.add(Jo,ta);const Ei={bundles:[{name:"background",assets:{background01:"backgrounds/background01.png",ground01:"backgrounds/ground01.png",clouds01:"backgrounds/clouds01.png",mountain01:"backgrounds/mountain01.png",trees01:"backgrounds/trees01.png"}},{name:"buildings",assets:{building01:"buildings/building01.png",building02:"buildings/building02.png"}},{name:"testBundle",assets:{displacement:"https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png"}}]},qn=window.Telegram.WebApp;class Hc extends tt{constructor(e,r){var o,a,l;super();$(this,"sprite");$(this,"text");$(this,"_positionX");$(this,"_startPositionX");this.sprite=le.from(e),this.sprite.anchor.set(.5,1),this.sprite.y=L.height*.68,this.sprite.x=r*60,this.addChild(this.sprite);let i="Player "+r,s=qn==null?void 0:qn.initDataUnsafe;r==0&&(s==null?void 0:s.user)!==void 0&&((s==null?void 0:s.user.username)!==""||(s==null?void 0:s.user.username)!==void 0?i=(o=s==null?void 0:s.user)==null?void 0:o.username:i=((a=s==null?void 0:s.user)==null?void 0:a.first_name)+" "+((l=s==null?void 0:s.user)==null?void 0:l.last_name)),this.text=new nn({text:i,style:{fontFamily:"Arial",fontSize:9,fontWeight:"bold",fill:"white",align:"center",stroke:{color:"#4a1850",width:2,join:"round"}}}),this.text.anchor.set(.5),this._startPositionX=this.sprite.x,this._positionX=this.sprite.x}get startPositionX(){return this._startPositionX}setStartPositionX(){this._startPositionX=this.sprite.x}get positionX(){return this._positionX}set positionX(e){this._positionX=e,this.sprite.x=e}UpdateTextPos(){this.text.y=this.sprite.getGlobalPosition().y-this.sprite.height-10,this.text.x=this.sprite.getGlobalPosition().x}}var W=`in vec2 aPosition;
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
}`,jc=`in vec2 vTextureCoord;
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
`,qc=`struct AdjustmentUniforms {
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
}`,Kc=Object.defineProperty,Zc=(n,t,e)=>t in n?Kc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,so=(n,t,e)=>(Zc(n,typeof t!="symbol"?t+"":t,e),e);const Qc=class oo extends G{constructor(t){t={...oo.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:qc,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:jc,name:"adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),so(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};so(Qc,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var Jc=`
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
}`,th=`struct KawaseBlurUniforms {
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
}`,eh=`
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
`,nh=`struct KawaseBlurUniforms {
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
}`,rh=Object.defineProperty,ih=(n,t,e)=>t in n?rh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,$t=(n,t,e)=>(ih(n,typeof t!="symbol"?t+"":t,e),e);const ao=class lo extends G{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(I("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...lo.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?nh:th,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:e!=null&&e.clamp?eh:Jc,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),$t(this,"uniforms"),$t(this,"_pixelSize",{x:0,y:0}),$t(this,"_clamp"),$t(this,"_kernels",[]),$t(this,"_blur"),$t(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,r,i){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,r,i);else{const l=dt.getSameSizeTexture(e);let c=e,u=l,h;const f=this._quality-1;for(let d=0;d<f;d++)a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,c,u,!0),h=c,c=u,u=h;a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,c,r,i),dt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,r=[t];if(t>0){let i=t;const s=t/e;for(let o=1;o<e;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};$t(ao,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let uo=ao;var sh=`in vec2 vTextureCoord;
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
`,oh=`struct AdvancedBloomUniforms {
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
`,ah=`
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
`,lh=`struct ExtractBrightnessUniforms {
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
`,uh=Object.defineProperty,ch=(n,t,e)=>t in n?uh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,co=(n,t,e)=>(ch(n,typeof t!="symbol"?t+"":t,e),e);const ho=class fo extends G{constructor(t){t={...fo.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:lh,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:ah,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),co(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};co(ho,"DEFAULT_OPTIONS",{threshold:.5});let hh=ho;var fh=Object.defineProperty,dh=(n,t,e)=>t in n?fh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Qt=(n,t,e)=>(dh(n,typeof t!="symbol"?t+"":t,e),e);const mh=class mo extends G{constructor(t){t={...mo.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:oh,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:sh,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:E.WHITE}}),Qt(this,"uniforms"),Qt(this,"bloomScale",1),Qt(this,"brightness",1),Qt(this,"_extractFilter"),Qt(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new hh({threshold:t.threshold}),this._blurFilter=new uo({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,r,i){const s=dt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=dt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,r,i),dt.returnTexture(o),dt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};Qt(mh,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var ph=`precision highp float;
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
`,gh=`struct AsciiUniforms {
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
}`,xh=Object.defineProperty,vh=(n,t,e)=>t in n?xh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,xr=(n,t,e)=>(vh(n,typeof t!="symbol"?t+"":t,e),e);const yh=class po extends G{constructor(...t){let e=t[0]??{};typeof e=="number"&&(I("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const r=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...po.DEFAULT_OPTIONS,...e};const i=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:gh,entryPoint:"mainFragment"}}),s=D.from({vertex:W,fragment:ph,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),xr(this,"uniforms"),xr(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new H,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};xr(yh,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var _h=`precision highp float;
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
`,bh=`struct BevelUniforms {
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
}`,Sh=Object.defineProperty,Ch=(n,t,e)=>t in n?Sh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Jt=(n,t,e)=>(Ch(n,typeof t!="symbol"?t+"":t,e),e);const wh=class go extends G{constructor(t){t={...go.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:bh,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:_h,name:"bevel-filter"});super({gpuProgram:e,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),Jt(this,"uniforms"),Jt(this,"_thickness"),Jt(this,"_rotation"),Jt(this,"_lightColor"),Jt(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new H,this._shadowColor=new H,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/se}set rotation(t){this._rotation=t*se,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};Jt(wh,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Ah=Object.defineProperty,Th=(n,t,e)=>t in n?Ah(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,rn=(n,t,e)=>(Th(n,typeof t!="symbol"?t+"":t,e),e);const Ph=class xo extends Mc{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){I("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=e;Array.isArray(r)&&(r={x:r[0],y:r[1]}),e={strength:r},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={...xo.DEFAULT_OPTIONS,...e},super(),rn(this,"_blurXFilter"),rn(this,"_blurYFilter"),rn(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new Ri({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new Ri({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,r,i){const s=dt.getSameSizeTexture(e);t.applyFilter(this,e,r,i),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,r,!1),dt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return I("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){I("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return I("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){I("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return I("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){I("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};rn(Ph,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Mh=`precision highp float;
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
`,Fh=`struct BulgePinchUniforms {
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
}`,zh=Object.defineProperty,Ih=(n,t,e)=>t in n?zh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,vo=(n,t,e)=>(Ih(n,typeof t!="symbol"?t+"":t,e),e);const Oh=class yo extends G{constructor(t){t={...yo.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Fh,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:Mh,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),vo(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};vo(Oh,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Rh=`precision highp float;
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
`,Uh=`in vec2 aPosition;
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
`,Bi=`struct BaseUniforms {
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
const MAX_STOPS: i32 = 32;`,qt=qt||{};qt.stringify=function(){var n={"visit_linear-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return n.visit_gradient(t)},"visit_radial-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return n.visit_gradient(t)},visit_gradient:function(t){var e=n.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+n.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,r=n.visit(t.at),i=n.visit(t.style);return i&&(e+=" "+i),r&&(e+=" at "+r),e},"visit_default-radial":function(t){var e="",r=n.visit(t.at);return r&&(e+=r),e},"visit_extent-keyword":function(t){var e=t.value,r=n.visit(t.at);return r&&(e+=" at "+r),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return n.visit(t.value.x)+" "+n.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return n.visit_color(t.value,t)},visit_hex:function(t){return n.visit_color("#"+t.value,t)},visit_rgb:function(t){return n.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return n.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var r=t,i=n.visit(e.length);return i&&(r+=" "+i),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",r=t.length;return t.forEach(function(i,s){e+=n.visit(i),s<r-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return n.visit_array(t,e);if(t.type){var r=n["visit_"+t.type];if(r)return r(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return n.visit(t)}}();var qt=qt||{};qt.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(w){var V=new Error(t+": "+w);throw V.source=t,V}function r(){var w=i();return t.length>0&&e("Invalid input not EOF"),w}function i(){return y(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,h)||o("repeating-radial-gradient",n.repeatingRadialGradient,h)}function o(w,V,C){return a(V,function(z){var Be=C();return Be&&(N(n.comma)||e("Missing comma before color stops")),{type:w,orientation:Be,colorStops:y(_)}})}function a(w,V){var C=N(w);if(C){N(n.startCall)||e("Missing (");var z=V(C);return N(n.endCall)||e("Missing )"),z}}function l(){return c()||u()}function c(){return M("directional",n.sideOrCorner,1)}function u(){return M("angular",n.angleValue,1)}function h(){var w,V=f(),C;return V&&(w=[],w.push(V),C=t,N(n.comma)&&(V=f(),V?w.push(V):t=C)),w}function f(){var w=d()||m();if(w)w.at=p();else{var V=g();if(V){w=V;var C=p();C&&(w.at=C)}else{var z=v();z&&(w={type:"default-radial",at:z})}}return w}function d(){var w=M("shape",/^(circle)/i,0);return w&&(w.style=O()||g()),w}function m(){var w=M("shape",/^(ellipse)/i,0);return w&&(w.style=j()||g()),w}function g(){return M("extent-keyword",n.extentKeywords,1)}function p(){if(M("position",/^at/,0)){var w=v();return w||e("Missing positioning value"),w}}function v(){var w=x();if(w.x||w.y)return{type:"position",value:w}}function x(){return{x:j(),y:j()}}function y(w){var V=w(),C=[];if(V)for(C.push(V);N(n.comma);)V=w(),V?C.push(V):e("One extra comma");return C}function _(){var w=P();return w||e("Expected color definition"),w.length=j(),w}function P(){return A()||b()||F()||U()}function U(){return M("literal",n.literalColor,0)}function A(){return M("hex",n.hexColor,1)}function F(){return a(n.rgbColor,function(){return{type:"rgb",value:y(S)}})}function b(){return a(n.rgbaColor,function(){return{type:"rgba",value:y(S)}})}function S(){return N(n.number)[1]}function j(){return M("%",n.percentageValue,1)||pt()||O()}function pt(){return M("position-keyword",n.positionKeywords,1)}function O(){return M("px",n.pixelValue,1)||M("em",n.emValue,1)}function M(w,V,C){var z=N(V);if(z)return{type:w,value:z[C]}}function N(w){var V,C;return C=/^[\n\r\t\s]+/.exec(t),C&&K(C[0].length),V=w.exec(t),V&&K(V[0].length),V}function K(w){t=t.substr(w)}return function(w){return t=w.toString(),r()}}();var Eh=qt.parse;qt.stringify;function Bh(n){const t=Eh(Wh(n));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],r=kh(e.type),i=Dh(e.colorStops),s=$h(e.orientation);return{type:r,stops:i,angle:s}}function kh(n){const t={"linear-gradient":0,"radial-gradient":1};if(!(n in t))throw new Error(`Unsupported gradient type "${n}"`);return t[n]}function Dh(n){const t=Gh(n),e=[],r=new H;for(let i=0;i<n.length;i++){const s=Lh(n[i]),o=r.setValue(s).toArray();e.push({offset:t[i],color:o.slice(0,3),alpha:o[3]})}return e}function Lh(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function Gh(n){const t=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const r=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let i=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)i=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=r(s),c=(a.offset-i)/(1+a.indexDelta);for(let u=0;u<=a.indexDelta;u++)t[s+u]=i+(u+1)*c;s+=a.indexDelta,i=t[s]}}return t.map(Nh)}function Nh(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function $h(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return Vh(n.value)}return 0}function Vh(n){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in t))throw new Error(`Unsupported directional value "${n}"`);return t[n]}function Wh(n){let t=n.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var Xh=Object.defineProperty,Yh=(n,t,e)=>t in n?Xh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Yt=(n,t,e)=>(Yh(n,typeof t!="symbol"?t+"":t,e),e);const Kn=90;function Hh(n){return[...n].sort((t,e)=>t.offset-e.offset)}const Ee=class sn extends G{constructor(t){if(t&&"css"in t?t={...Bh(t.css||""),alpha:t.alpha??sn.defaults.alpha,maxColors:t.maxColors??sn.defaults.maxColors}:t={...sn.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=k.from({vertex:{source:Bi,entryPoint:"mainVertex"},fragment:{source:Bi,entryPoint:"mainFragment"}}),r=D.from({vertex:Uh,fragment:Rh,name:"color-gradient-filter"}),i=32;super({gpuProgram:e,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Kn,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),Yt(this,"baseUniforms"),Yt(this,"stopsUniforms"),Yt(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=Hh(t),r=new H;let i,s,o;for(let a=0;a<e.length;a++){r.setValue(e[a].color);const l=a*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Kn}set angle(t){this.baseUniforms.uOptions[1]=t-Kn}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};Yt(Ee,"LINEAR",0);Yt(Ee,"RADIAL",1);Yt(Ee,"CONIC",2);Yt(Ee,"defaults",{type:Ee.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var jh=`in vec2 vTextureCoord;
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

}`,qh=`struct ColorMapUniforms {
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
}`,Kh=Object.defineProperty,Zh=(n,t,e)=>t in n?Kh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pt=(n,t,e)=>(Zh(n,typeof t!="symbol"?t+"":t,e),e);const Qh=class _o extends G{constructor(...t){let e=t[0]??{};if((e instanceof E||e instanceof At)&&(I("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={..._o.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:qh,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:jh,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),Pt(this,"uniforms"),Pt(this,"_size",0),Pt(this,"_sliceSize",0),Pt(this,"_slicePixelSize",0),Pt(this,"_sliceInnerSize",0),Pt(this,"_nearest",!1),Pt(this,"_scaleMode","linear"),Pt(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof E?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};Pt(Qh,"DEFAULT_OPTIONS",{colorMap:E.WHITE,nearest:!1,mix:1});var Jh=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,tf=`struct ColorOverlayUniforms {
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
`,ef=Object.defineProperty,nf=(n,t,e)=>t in n?ef(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,vr=(n,t,e)=>(nf(n,typeof t!="symbol"?t+"":t,e),e);const rf=class bo extends G{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(I("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...bo.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:tf,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:Jh,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),vr(this,"uniforms"),vr(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new H,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};vr(rf,"DEFAULT_OPTIONS",{color:0,alpha:1});var sf=`in vec2 vTextureCoord;
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
`,of=`struct ColorReplaceUniforms {
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
}`,af=Object.defineProperty,lf=(n,t,e)=>t in n?af(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,on=(n,t,e)=>(lf(n,typeof t!="symbol"?t+"":t,e),e);const uf=class So extends G{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(I("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...So.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:of,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:sf,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),on(this,"uniforms"),on(this,"_originalColor"),on(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new H,this._targetColor=new H,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){I("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return I("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){I("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return I("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};on(uf,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var cf=`in vec2 vTextureCoord;
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
}`,hf=`struct ConvolutionUniforms {
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
}`,ff=Object.defineProperty,df=(n,t,e)=>t in n?ff(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Co=(n,t,e)=>(df(n,typeof t!="symbol"?t+"":t,e),e);const mf=class wo extends G{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(I("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...wo.DEFAULT_OPTIONS,...e};const r=e.width??200,i=e.height??200,s=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:hf,entryPoint:"mainFragment"}}),o=D.from({vertex:W,fragment:cf,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),Co(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,r)=>{this.uniforms.uMatrix[r]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};Co(mf,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var pf=`precision highp float;
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
`,gf=`struct CRTUniforms {
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
}`,xf=Object.defineProperty,vf=(n,t,e)=>t in n?xf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,an=(n,t,e)=>(vf(n,typeof t!="symbol"?t+"":t,e),e);const yf=class Ao extends G{constructor(t){t={...Ao.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:gf,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:pf,name:"crt-filter"});super({gpuProgram:e,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),an(this,"uniforms"),an(this,"seed"),an(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};an(yf,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var _f=`precision highp float;
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
`,bf=`struct DotUniforms {
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
}`,Sf=Object.defineProperty,Cf=(n,t,e)=>t in n?Sf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,wf=(n,t,e)=>(Cf(n,t+"",e),e);const Af=class To extends G{constructor(...t){let e=t[0]??{};typeof e=="number"&&(I("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...To.DEFAULT_OPTIONS,...e};const r={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},i=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:bf,entryPoint:"mainFragment"}}),s=D.from({vertex:W,fragment:_f,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};wf(Af,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Tf=`precision highp float;
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
}`,Pf=`struct DropShadowUniforms {
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
}`,Mf=Object.defineProperty,Ff=(n,t,e)=>t in n?Mf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,te=(n,t,e)=>(Ff(n,typeof t!="symbol"?t+"":t,e),e);const zf=class Po extends G{constructor(t){t={...Po.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Pf,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:Tf,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),te(this,"uniforms"),te(this,"shadowOnly",!1),te(this,"_color"),te(this,"_blurFilter"),te(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new H,this.color=t.color??0,this._blurFilter=new uo({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new G({gpuProgram:k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:D.from({vertex:W,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,r,i){const s=dt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,r,i),this.shadowOnly||t.applyFilter(this._basePass,e,r,!1),dt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};te(zf,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var If=`precision highp float;
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
`,Of=`struct GlitchUniforms {
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
const MIRROR: i32 = 4;`,Rf=Object.defineProperty,Uf=(n,t,e)=>t in n?Rf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,bt=(n,t,e)=>(Uf(n,typeof t!="symbol"?t+"":t,e),e);const Ef=class Mo extends G{constructor(t){t={...Mo.defaults,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Of,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:If,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=t.sampleSize??512;const s=new E({source:new he({resource:i})});super({gpuProgram:e,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),bt(this,"uniforms"),bt(this,"average",!1),bt(this,"minSize",8),bt(this,"sampleSize",512),bt(this,"_canvas"),bt(this,"texture"),bt(this,"_slices",0),bt(this,"_sizes",new Float32Array(1)),bt(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,t)}apply(t,e,r,i){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,r,i)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),c=Math.max(l*(1-Math.random()*.6),i);t[a]=c,o-=c}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),i);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let r=e;r>0;r--){const i=Math.random()*r>>0,s=t[r];t[r]=t[i],t[i]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=i>0?i:0,c=i<0?-i:0;r.fillStyle=`rgba(${l}, ${c}, 0, 1)`,r.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/se}set direction(t){this.uniforms.uDirection=t*se}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};bt(Ef,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var Bf=`precision highp float;
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
`,kf=`struct GlowUniforms {
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

const PI: f32 = 3.14159265358979323846264;`,Df=Object.defineProperty,Lf=(n,t,e)=>t in n?Df(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,yr=(n,t,e)=>(Lf(n,typeof t!="symbol"?t+"":t,e),e);const Gf=class Fo extends G{constructor(t){t={...Fo.DEFAULT_OPTIONS,...t};const e=t.distance??10,r=t.quality??.1,i=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:kf,entryPoint:"mainFragment"}}),s=D.from({vertex:W,fragment:Bf.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),yr(this,"uniforms"),yr(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new H,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};yr(Gf,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Nf=`precision highp float;
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
`,$f=`struct GodrayUniforms {
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

\${PERLIN}`,Vf=`vec3 mod289(vec3 x)
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
`,Wf=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

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
}`,Xf=Object.defineProperty,Yf=(n,t,e)=>t in n?Xf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ee=(n,t,e)=>(Yf(n,typeof t!="symbol"?t+"":t,e),e);const Hf=class zo extends G{constructor(t){t={...zo.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:$f.replace("${PERLIN}",Wf),entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:Nf.replace("${PERLIN}",Vf),name:"god-ray-filter"});super({gpuProgram:e,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ee(this,"uniforms"),ee(this,"time",0),ee(this,"_angleLight",[0,0]),ee(this,"_angle",0),ee(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*se;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};ee(Hf,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var jf=`in vec2 vTextureCoord;
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
`,qf=`struct HslUniforms {
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
}`,Kf=Object.defineProperty,Zf=(n,t,e)=>t in n?Kf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_r=(n,t,e)=>(Zf(n,typeof t!="symbol"?t+"":t,e),e);const Qf=class Io extends G{constructor(t){t={...Io.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:qf,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:jf,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),_r(this,"uniforms"),_r(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,this.hue=t.hue}get hue(){return this._hue}set hue(t){this._hue=t,this.resources.hslUniforms.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.resources.hslUniforms.uniforms.uHsl[1]}set saturation(t){this.resources.hslUniforms.uniforms.uHsl[1]=t}get lightness(){return this.resources.hslUniforms.uniforms.uHsl[2]}set lightness(t){this.resources.hslUniforms.uniforms.uHsl[2]=t}get colorize(){return this.resources.hslUniforms.uniforms.uColorize===1}set colorize(t){this.resources.hslUniforms.uniforms.uColorize=t?1:0}get alpha(){return this.resources.hslUniforms.uniforms.uAlpha}set alpha(t){this.resources.hslUniforms.uniforms.uAlpha=t}};_r(Qf,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var Jf=`precision highp float;
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
`,td=`struct MotionBlurUniforms {
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

const MAX_KERNEL_SIZE: f32 = 2048;`,ed=Object.defineProperty,nd=(n,t,e)=>t in n?ed(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,br=(n,t,e)=>(nd(n,typeof t!="symbol"?t+"":t,e),e);const rd=class Oo extends G{constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof et){I("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...Oo.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:td,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:Jf,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"f32"},uOffset:{value:e.offset,type:"f32"}}}}),br(this,"uniforms"),br(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};br(rd,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var id=`in vec2 vTextureCoord;
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
`,sd=`struct MultiColorReplaceUniforms {
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

const MAX_COLORS: i32 = \${MAX_COLORS};`,od=Object.defineProperty,ad=(n,t,e)=>t in n?od(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ln=(n,t,e)=>(ad(n,typeof t!="symbol"?t+"":t,e),e);const ld=class Ro extends G{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(I("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...Ro.DEFAULT_OPTIONS,...e};const r=e.maxColors??e.replacements.length,i=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:sd.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=D.from({vertex:W,fragment:id.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:e.tolerance,type:"f32"}}}}),ln(this,"uniforms"),ln(this,"_replacements",[]),ln(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=t.length,s=new H;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);e[i*3]=-1;let o,a,l;for(let c=0;c<i;c++){const u=t[c];s.setValue(u[0]),[o,a,l]=s.toArray(),e[c*3]=o,e[c*3+1]=a,e[c*3+2]=l,s.setValue(u[1]),[o,a,l]=s.toArray(),r[c*3]=o,r[c*3+1]=a,r[c*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){I("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return I("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};ln(ld,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var ud=`precision highp float;
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
}`,cd=`struct OldFilmUniforms {
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
}`,hd=Object.defineProperty,fd=(n,t,e)=>t in n?hd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Sr=(n,t,e)=>(fd(n,typeof t!="symbol"?t+"":t,e),e);const dd=class Uo extends G{constructor(t){t={...Uo.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:cd,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:ud,name:"old-film-filter"});super({gpuProgram:e,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Sr(this,"uniforms"),Sr(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};Sr(dd,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var md=`precision highp float;
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
`,pd=`struct OutlineUniforms {
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

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,gd=Object.defineProperty,xd=(n,t,e)=>t in n?gd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Xt=(n,t,e)=>(xd(n,typeof t!="symbol"?t+"":t,e),e);const $r=class Vt extends G{constructor(...t){let e=t[0]??{};typeof e=="number"&&(I("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...Vt.DEFAULT_OPTIONS,...e};const r=e.quality??.1,i=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:pd,entryPoint:"mainFragment"}}),s=D.from({vertex:W,fragment:md.replace(/\$\{ANGLE_STEP\}/,Vt.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),Xt(this,"uniforms"),Xt(this,"_thickness"),Xt(this,"_quality"),Xt(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=Vt.getAngleStep(r),this._color=new H,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,r,i)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*Vt.MAX_SAMPLES,Vt.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=Vt.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Xt($r,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Xt($r,"MIN_SAMPLES",1);Xt($r,"MAX_SAMPLES",100);var vd=`precision highp float;
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
`,yd=`struct RadialBlurUniforms {
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

const MAX_KERNEL_SIZE: i32 = 2048;`,_d=Object.defineProperty,bd=(n,t,e)=>t in n?_d(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,un=(n,t,e)=>(bd(n,typeof t!="symbol"?t+"":t,e),e);const Sd=class Eo extends G{constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(I("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...Eo.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:yd,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:vd,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),un(this,"uniforms"),un(this,"_angle"),un(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};un(Sd,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var Cd=`precision highp float;
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
`,wd=`struct ReflectionUniforms {
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
}`,Ad=Object.defineProperty,Td=(n,t,e)=>t in n?Ad(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Cr=(n,t,e)=>(Td(n,typeof t!="symbol"?t+"":t,e),e);const Bo=class ko extends G{constructor(t){t={...ko.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:wd,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:Cd,name:"reflection-filter"});super({gpuProgram:e,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Cr(this,"uniforms"),Cr(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};Cr(Bo,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});let Pd=Bo;var Md=`precision highp float;
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
`,Fd=`struct RgbSplitUniforms {
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
`,zd=Object.defineProperty,Id=(n,t,e)=>t in n?zd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Do=(n,t,e)=>(Id(n,typeof t!="symbol"?t+"":t,e),e);const Od=class Lo extends G{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(I("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...Lo.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Fd,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:Md,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),Do(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};Do(Od,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Rd=`
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
`,Ud=`
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
`,Ed=Object.defineProperty,Bd=(n,t,e)=>t in n?Ed(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,wr=(n,t,e)=>(Bd(n,typeof t!="symbol"?t+"":t,e),e);const kd=class Go extends G{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(I("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={...Go.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ud,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:Rd,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),wr(this,"uniforms"),wr(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};wr(kd,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Dd=`precision highp float;
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
`,Ld=`struct SimpleLightmapUniforms {
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
}`,Gd=Object.defineProperty,Nd=(n,t,e)=>t in n?Gd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,cn=(n,t,e)=>(Nd(n,typeof t!="symbol"?t+"":t,e),e);const $d=class No extends G{constructor(...t){let e=t[0]??{};if(e instanceof E&&(I("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...No.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Ld,entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:Dd,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),cn(this,"uniforms"),cn(this,"_color"),cn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new H,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};cn($d,"DEFAULT_OPTIONS",{lightMap:E.WHITE,color:0,alpha:1});var Vd=`in vec2 vTextureCoord;
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
`,Wd=`struct TiltShiftUniforms {
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
}`,Xd=Object.defineProperty,Yd=(n,t,e)=>t in n?Xd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ar=(n,t,e)=>(Yd(n,typeof t!="symbol"?t+"":t,e),e);const Hd=class $o extends G{constructor(t){t={...$o.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:Wd,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:Vd,name:"tilt-shift-axis-filter"});super({gpuProgram:e,glProgram:r,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur??100,t.gradientBlur??600]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([30,30]),type:"vec2<f32>"},uTexSize:{value:new Float32Array([window.innerWidth,window.innerHeight]),type:"vec2<f32>"}}}}),Ar(this,"uniforms"),Ar(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis,this.updateDelta()}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,r=t.x-e.x,i=t.y-e.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};Ar(Hd,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600,start:{x:0,y:window.innerHeight/2},end:{x:600,y:window.innerHeight/2}});var jd=`precision highp float;
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
`,qd=`struct TwistUniforms {
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
`,Kd=Object.defineProperty,Zd=(n,t,e)=>t in n?Kd(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Vo=(n,t,e)=>(Zd(n,typeof t!="symbol"?t+"":t,e),e);const Qd=class Wo extends G{constructor(t){t={...Wo.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:qd,entryPoint:"mainFragment"}}),r=D.from({vertex:W,fragment:jd,name:"twist-filter"});super({gpuProgram:e,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Vo(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Vo(Qd,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var Jd=`precision highp float;
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
`,tm=`struct ZoomBlurUniforms {
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
}`,em=Object.defineProperty,nm=(n,t,e)=>t in n?em(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Xo=(n,t,e)=>(nm(n,typeof t!="symbol"?t+"":t,e),e);const rm=class Yo extends G{constructor(t){t={...Yo.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,r=k.from({vertex:{source:X,entryPoint:"mainVertex"},fragment:{source:tm.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),i=D.from({vertex:W,fragment:Jd.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Xo(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Xo(rm,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});class im extends tt{constructor(e){super();$(this,"bg");$(this,"ground");$(this,"clouds");$(this,"mountain");$(this,"trees");$(this,"reflectionFilter");this.interactiveChildren=!1,this.bg=new Ce({texture:E.from("background01"),width:L.width*3,height:L.height}),this.bg.tileScale.y=.81,this.bg.anchor.set(0,.5),this.bg.x=-100,this.bg.y=L.height/2,this.bg.height=L.height,this.addChild(this.bg);let r=E.from("clouds01");this.clouds=new Ce({texture:r,width:4e3,height:r.height}),this.clouds.anchor.set(.5),this.clouds.x=Math.round(e*.15)+L.width/2,this.clouds.y=L.height*.5,this.addChild(this.clouds);let i=E.from("mountain01");this.mountain=new Ce({texture:i,width:4e3,height:i.height}),this.mountain.anchor.set(.5),this.mountain.x=Math.round(e*.35)+L.width/2,this.mountain.y=L.height*.5,this.addChild(this.mountain);let s=E.from("trees01");this.trees=new Ce({texture:s,width:4e3,height:s.height}),this.trees.anchor.set(.5),this.trees.x=Math.round(e*.55)+L.width/2,this.trees.y=L.height*.6,this.addChild(this.trees),this.ground=new Ce({texture:E.from("ground01"),width:4e3,height:24}),this.ground.anchor.set(.5,0),this.ground.x=e,this.ground.y=L.height*.68,this.addChild(this.ground),this.reflectionFilter=new Pd({boundary:.71,alpha:[.5,.25],amplitude:[1,2]}),this.filters=[this.reflectionFilter]}updatePosition(e){this.ground.x=e,this.clouds.x=Math.round(e*.15)+L.width/2,this.mountain.x=Math.round(e*.35)+L.width/2,this.trees.x=Math.round(e*.55)+L.width/2}update(e){this.reflectionFilter.time+=e.deltaTime*.05}}class sm extends tt{constructor(e){super();$(this,"startPos");$(this,"players",[]);$(this,"dragLimit");this.interactiveChildren=!1,this.dragLimit=e,this.x=e}onDragStart(){this.startPos=this.x}OnDragMove(e){let r=Math.round(e+this.startPos);this.x=Math.min(r,this.dragLimit),this.x=Math.max(this.x,-(this.width-L.width))}OnDragEnd(){this.startPos=this.x}velMove(e){let r=this.x+e;this.x=Math.min(r,this.dragLimit),this.x=Math.max(this.x,-(this.width-L.width))}update(e){for(let r=0;r<this.players.length;r++)this.players[r].UpdateTextPos()}}const ki=50,om=12;class am extends tt{constructor(){super();$(this,"background");$(this,"buildings");$(this,"isDrag",!1);$(this,"dragStartPos");$(this,"delta");$(this,"velX",0);$(this,"assetBundles",["testBundle","background","buildings"]);this.eventMode="static"}sizeLog(){const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0),i=new nn({text:e+"x"+r,style:{fontFamily:"Arial",fontSize:9,fontWeight:"bold",fill:"white",align:"center",stroke:{color:"#4a1850",width:2,join:"round"}}});i.anchor.set(.5),i.x=L.width/2,i.y=L.width/2-30,this.addChild(i);const s=new nn({text:L.enlargedWidth+"x"+L.enlargedHeight,style:{fontFamily:"Arial",fontSize:9,fontWeight:"bold",fill:"white",align:"center",stroke:{color:"#4a1850",width:2,join:"round"}}});s.anchor.set(.5),s.x=L.width/2,s.y=L.width/2-20,this.addChild(s);const o=new nn({text:window.Telegram.WebApp.platform,style:{fontFamily:"Arial",fontSize:9,fontWeight:"bold",fill:"white",align:"center",stroke:{color:"#4a1850",width:2,join:"round"}}});o.anchor.set(.5),o.x=L.width/2,o.y=L.width/2-10,this.addChild(o)}constructorWithAssets(){const e=new ce;e.rect(0,0,L.width,L.height),e.fill("#1F66BA"),this.addChild(e),this.background=new im(ki),this.addChild(this.background),this.buildings=new sm(ki);for(let o=0;o<om;o++){let a=new Hc(o%2?"building01":"building02",o);this.buildings.players.push(a),this.buildings.addChild(a),this.addChild(a.text)}this.background.addChild(this.buildings),this.background.updatePosition(this.buildings.x),this.sizeLog();const r=o=>{this.isDrag=!0,this.dragStartPos=o.global.x,this.on("pointermove",i),this.buildings.onDragStart()},i=o=>{let a=this.delta;this.delta=o.data.global.x-this.dragStartPos,this.velX=this.delta-a,this.buildings.OnDragMove(this.delta),this.background.updatePosition(this.buildings.x)},s=()=>{this.isDrag=!1,this.buildings.OnDragEnd(),this.off("pointermove",i)};this.on("pointerdown",r),this.on("pointerup",s),this.on("pointerupoutside",s)}update(e){this.velX*=.95*e.deltaTime,Math.abs(this.velX)>0&&!this.isDrag&&(this.buildings.velMove(this.velX*e.deltaTime),this.background.updatePosition(this.buildings.x)),this.background.update(e),this.buildings.update(e)}}class lm extends tt{constructor(){super();$(this,"loaderBar");$(this,"loaderBarBoder");$(this,"loaderBarFill");const e=L.width*.8;this.loaderBarFill=new ce,this.loaderBarFill.rect(0,0,e,50),this.loaderBarFill.fill(34816),this.loaderBarFill.scale.x=0,this.loaderBarBoder=new ce,this.loaderBarBoder.rect(0,0,e,50),this.loaderBarBoder.stroke({width:10,color:0,alpha:1}),this.loaderBar=new tt,this.loaderBar.addChild(this.loaderBarFill),this.loaderBar.addChild(this.loaderBarBoder),this.loaderBar.position.x=(L.width-this.loaderBar.width)/2,this.loaderBar.position.y=(L.height-this.loaderBar.height)/2,this.addChild(this.loaderBar)}downloadProgress(e){this.loaderBarFill.scale.x=e}}const R=class R{constructor(){}static get width(){return R._width}static get height(){return R._height}static get enlargedWidth(){return R._enlargedWidth}static get enlargedHeight(){return R._enlargedHeight}static async init(t,e,r){R.initializeAssetsPromise=Wt.init({manifest:Ei});const i=Ei.bundles.map(s=>s.name);R.initializeAssetsPromise.then(()=>Wt.backgroundLoadBundle(i)),R._width=t,R._height=e,R.app=new Is,await R.app.init({resolution:2,antialias:!1,background:r,autoDensity:!0,roundPixels:!0,width:t,height:e,hello:!1}),Wi.defaultOptions.scaleMode="nearest",document.body.appendChild(R.app.canvas),R.app.ticker.add(R.update),window.addEventListener("resize",R.resize),R.resize()}static resize(){const t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);this.scaleFactor=Math.ceil(e/R.height),this._enlargedWidth=Math.round(this.scaleFactor*R.width),this._enlargedHeight=Math.round(this.scaleFactor*R.height);const r=(t-this._enlargedWidth)/2,i=(e-this._enlargedHeight)/2;R.app.canvas.style.width=`${this._enlargedWidth}px`,R.app.canvas.style.height=`${this._enlargedHeight}px`,R.app.canvas.style.marginLeft=R.app.canvas.style.marginRight=`${r}px`,R.app.canvas.style.marginTop=R.app.canvas.style.marginBottom=`${i}px`}static async changeScene(t){await R.initializeAssetsPromise,R.currentScene&&(R.app.stage.removeChild(R.currentScene),R.currentScene.destroy());let e=new lm;R.app.stage.addChild(e),await Wt.loadBundle(t.assetBundles,e.downloadProgress.bind(e)),R.app.stage.removeChild(e),t.constructorWithAssets(),R.currentScene=t,R.app.stage.addChild(R.currentScene)}static update(t){R.currentScene&&R.currentScene.update(t)}};$(R,"app"),$(R,"currentScene"),$(R,"_width"),$(R,"_height"),$(R,"_enlargedWidth"),$(R,"_enlargedHeight"),$(R,"initializeAssetsPromise"),$(R,"scaleFactor");let L=R;const we=window.Telegram.WebApp;var Di;((Di=we.initDataUnsafe)==null?void 0:Di.user)!==void 0&&(we.ready(),we.expand(),(we.platform==="ios"||we.platform==="android")&&(document.body.style.overflowY="hidden",document.body.style.marginTop="100px",document.body.style.height=window.innerHeight+100+"px",document.body.style.paddingBottom="100px",window.scrollTo(0,100)));(async()=>(await L.init(200,420,1),await L.changeScene(new am)))();export{xu as $,Fs as A,ct as B,tt as C,st as D,B as E,G as F,k as G,oi as H,le as I,rl as J,ml as K,nt as L,Y as M,ot as N,Ol as O,ut as P,ui as Q,mn as R,fl as S,We as T,_s as U,Ea as V,Mn as W,H as X,Qi as Y,I as Z,Q as _,nr as a,ae as a0,oc as a1,Ys as a2,$c as a3,Vc as a4,he as a5,lt as a6,io as a7,Wc as a8,Ls as a9,jt as aa,Ct as ab,hi as ac,ce as ad,ca as ae,Ns as af,wt as b,D as c,zr as d,mt as e,yi as f,bu as g,wu as h,Ue as i,tn as j,Fr as k,Ts as l,Us as m,qr as n,ls as o,At as p,E as q,ba as r,ua as s,Au as t,_u as u,Mt as v,at as w,Ki as x,dt as y,St as z};
