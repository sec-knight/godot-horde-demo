(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sa="170",qc=0,Wa=1,Yc=2,oc=1,$c=2,pn=3,Pn=0,Dt=1,Ot=2,Rn=0,Mi=1,Xa=2,qa=3,Ya=4,Zc=5,Vn=100,Kc=101,jc=102,Jc=103,Qc=104,el=200,tl=201,nl=202,il=203,Ds=204,Is=205,rl=206,sl=207,al=208,ol=209,cl=210,ll=211,ul=212,dl=213,hl=214,Us=0,Ns=1,Fs=2,Ei=3,Os=4,Bs=5,zs=6,ks=7,Ea=0,fl=1,pl=2,Cn=0,ml=1,gl=2,_l=3,vl=4,xl=5,Ml=6,yl=7,cc=300,bi=301,wi=302,Hs=303,Vs=304,$r=306,Gs=1e3,Wn=1001,Ws=1002,Bt=1003,Sl=1004,ur=1005,sn=1006,ts=1007,Xn=1008,vn=1009,lc=1010,uc=1011,tr=1012,ba=1013,Yn=1014,an=1015,sr=1016,wa=1017,Ta=1018,Ti=1020,dc=35902,hc=1021,fc=1022,en=1023,pc=1024,mc=1025,yi=1026,Ai=1027,Aa=1028,Ra=1029,gc=1030,Ca=1031,Pa=1033,Or=33776,Br=33777,zr=33778,kr=33779,Xs=35840,qs=35841,Ys=35842,$s=35843,Zs=36196,Ks=37492,js=37496,Js=37808,Qs=37809,ea=37810,ta=37811,na=37812,ia=37813,ra=37814,sa=37815,aa=37816,oa=37817,ca=37818,la=37819,ua=37820,da=37821,Hr=36492,ha=36494,fa=36495,_c=36283,pa=36284,ma=36285,ga=36286,El=3200,bl=3201,vc=0,wl=1,An="",Lt="srgb",Li="srgb-linear",Zr="linear",rt="srgb",jn=7680,$a=519,Tl=512,Al=513,Rl=514,xc=515,Cl=516,Pl=517,Ll=518,Dl=519,_a=35044,Za=35048,Ka="300 es",mn=2e3,Gr=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ja=1234567;const ji=Math.PI/180,nr=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function La(i,e){return(i%e+e)%e}function Il(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ul(i,e,t){return i!==e?(t-i)/(e-i):0}function Ji(i,e,t){return(1-t)*i+t*e}function Nl(i,e,t,n){return Ji(i,e,1-Math.exp(-t*n))}function Fl(i,e=1){return e-Math.abs(La(i,e*2)-e)}function Ol(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kl(i,e){return i+Math.random()*(e-i)}function Hl(i){return i*(.5-Math.random())}function Vl(i){i!==void 0&&(ja=i);let e=ja+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gl(i){return i*ji}function Wl(i){return i*nr}function Xl(i){return(i&i-1)===0&&i!==0}function ql(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $l(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),m=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*m,o*l);break;case"YXY":i.set(c*m,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qi={DEG2RAD:ji,RAD2DEG:nr,generateUUID:gn,clamp:Ct,euclideanModulo:La,mapLinear:Il,inverseLerp:Ul,lerp:Ji,damp:Nl,pingpong:Fl,smoothstep:Ol,smootherstep:Bl,randInt:zl,randFloat:kl,randFloatSpread:Hl,seededRandom:Vl,degToRad:Gl,radToDeg:Wl,isPowerOfTwo:Xl,ceilPowerOfTwo:ql,floorPowerOfTwo:Yl,setQuaternionFromProperEuler:$l,normalize:it,denormalize:Qt};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],v=n[8],x=r[0],p=r[3],d=r[6],w=r[1],E=r[4],g=r[7],P=r[2],T=r[5],R=r[8];return s[0]=a*x+o*w+c*P,s[3]=a*p+o*E+c*T,s[6]=a*d+o*g+c*R,s[1]=l*x+u*w+h*P,s[4]=l*p+u*E+h*T,s[7]=l*d+u*g+h*R,s[2]=f*x+m*w+v*P,s[5]=f*p+m*E+v*T,s[8]=f*d+m*g+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,m=l*s-a*c,v=t*h+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(o*n-r*a)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ns.makeScale(e,t)),this}rotate(e){return this.premultiply(ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ns=new We;function Mc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zl(){const i=Wr("canvas");return i.style.display="block",i}const Ja={};function Zi(i){i in Ja||(Ja[i]=!0,console.warn(i))}function Kl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function jl(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?Zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Si(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Qa=[.64,.33,.3,.6,.15,.06],eo=[.2126,.7152,.0722],to=[.3127,.329],no=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),io=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Li]:{primaries:Qa,whitePoint:to,transfer:Zr,toXYZ:no,fromXYZ:io,luminanceCoefficients:eo,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:Qa,whitePoint:to,transfer:rt,toXYZ:no,fromXYZ:io,luminanceCoefficients:eo,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}});let Jn;class Ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Wr("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_n(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eu=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(is(r[a].image)):s.push(is(r[a]))}else s=is(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function is(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tu=0;class wt extends Di{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Wn,r=Wn,s=sn,a=Xn,o=en,c=vn,l=wt.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=gn(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=cc;wt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],v=c[9],x=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,g=(m+1)/2,P=(d+1)/2,T=(u+f)/4,R=(h+x)/4,C=(v+p)/4;return E>g&&E>P?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=T/n,s=R/n):g>P?g<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),n=T/r,s=C/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=C/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-v)*(p-v)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(h-x)/w,this.z=(f-u)/w,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nu extends Di{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends nu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sc extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iu extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(h!==x||c!==f||l!==m||u!==v){let p=1-o;const d=c*f+l*m+u*v+h*x,w=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const P=Math.sqrt(E),T=Math.atan2(P,d*w);p=Math.sin(p*T)/P,o=Math.sin(o*T)/P}const g=o*w;if(c=c*p+f*g,l=l*p+m*g,u=u*p+v*g,h=h*p+x*g,p===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*h+c*m-l*f,e[t+1]=c*v+u*f+l*h-o*m,e[t+2]=l*v+u*m+o*f-c*h,e[t+3]=u*v-o*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),f=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*m*v,this._y=l*m*h-f*u*v,this._z=l*u*v+f*m*h,this._w=l*u*h-f*m*v;break;case"YXZ":this._x=f*u*h+l*m*v,this._y=l*m*h-f*u*v,this._z=l*u*v-f*m*h,this._w=l*u*h+f*m*v;break;case"ZXY":this._x=f*u*h-l*m*v,this._y=l*m*h+f*u*v,this._z=l*u*v+f*m*h,this._w=l*u*h-f*m*v;break;case"ZYX":this._x=f*u*h-l*m*v,this._y=l*m*h+f*u*v,this._z=l*u*v-f*m*h,this._w=l*u*h+f*m*v;break;case"YZX":this._x=f*u*h+l*m*v,this._y=l*m*h+f*u*v,this._z=l*u*v-f*m*h,this._w=l*u*h-f*m*v;break;case"XZY":this._x=f*u*h-l*m*v,this._y=l*m*h-f*u*v,this._z=l*u*v+f*m*h,this._w=l*u*h+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rs.copy(this).projectOnVector(e),this.sub(rs)}reflect(e){return this.sub(rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rs=new V,ro=new ar;class Zn{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),hr.subVectors(this.max,zi),Qn.subVectors(e.a,zi),ei.subVectors(e.b,zi),ti.subVectors(e.c,zi),yn.subVectors(ei,Qn),Sn.subVectors(ti,ei),In.subVectors(Qn,ti);let t=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-In.z,In.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,In.z,0,-In.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-In.y,In.x,0];return!ss(t,Qn,ei,ti,hr)||(t=[1,0,0,0,1,0,0,0,1],!ss(t,Qn,ei,ti,hr))?!1:(fr.crossVectors(yn,Sn),t=[fr.x,fr.y,fr.z],ss(t,Qn,ei,ti,hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new V,new V,new V,new V,new V,new V,new V,new V],$t=new V,dr=new Zn,Qn=new V,ei=new V,ti=new V,yn=new V,Sn=new V,In=new V,zi=new V,hr=new V,fr=new V,Un=new V;function ss(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Un.fromArray(i,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ru=new Zn,ki=new V,as=new V;class Ii{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ru.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ki,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(as.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(as)),this.expandByPoint(ki.copy(e.center).sub(as))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new V,os=new V,pr=new V,En=new V,cs=new V,mr=new V,ls=new V;class su{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){os.copy(e).add(t).multiplyScalar(.5),pr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(os);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pr),o=En.dot(this.direction),c=-En.dot(pr),l=En.lengthSq(),u=Math.abs(1-a*a);let h,f,m,v;if(u>0)if(h=a*c-o,f=a*o-c,v=s*u,h>=0)if(f>=-v)if(f<=v){const x=1/u;h*=x,f*=x,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(os).addScaledVector(pr,f),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){cs.subVectors(t,e),mr.subVectors(n,e),ls.crossVectors(cs,mr);let a=this.direction.dot(ls),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const c=o*this.direction.dot(mr.crossVectors(En,mr));if(c<0)return null;const l=o*this.direction.dot(cs.cross(En));if(l<0||c+l>a)return null;const u=-o*En.dot(ls);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,a,o,c,l,u,h,f,m,v,x,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,f,m,v,x,p)}set(e,t,n,r,s,a,o,c,l,u,h,f,m,v,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=v,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),s=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,v=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+v*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,v=l*u,x=l*h;t[0]=f+x*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,v=l*u,x=l*h;t[0]=f-x*o,t[4]=-a*h,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,m=a*h,v=o*u,x=o*h;t[0]=c*u,t[4]=v*l-m,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,v=o*c,x=o*l;t[0]=c*u,t[4]=x-f*h,t[8]=v*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=m*h+v,t[10]=f-x*h}else if(e.order==="XZY"){const f=a*c,m=a*l,v=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=a*u,t[9]=m*h-v,t[2]=v*h-m,t[6]=o*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(au,e,ou)}lookAt(e,t,n){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),bn.crossVectors(n,Nt),bn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),bn.crossVectors(n,Nt)),bn.normalize(),gr.crossVectors(Nt,bn),r[0]=bn.x,r[4]=gr.x,r[8]=Nt.x,r[1]=bn.y,r[5]=gr.y,r[9]=Nt.y,r[2]=bn.z,r[6]=gr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],v=n[2],x=n[6],p=n[10],d=n[14],w=n[3],E=n[7],g=n[11],P=n[15],T=r[0],R=r[4],C=r[8],y=r[12],M=r[1],b=r[5],O=r[9],N=r[13],G=r[2],X=r[6],Z=r[10],j=r[14],L=r[3],ie=r[7],ae=r[11],te=r[15];return s[0]=a*T+o*M+c*G+l*L,s[4]=a*R+o*b+c*X+l*ie,s[8]=a*C+o*O+c*Z+l*ae,s[12]=a*y+o*N+c*j+l*te,s[1]=u*T+h*M+f*G+m*L,s[5]=u*R+h*b+f*X+m*ie,s[9]=u*C+h*O+f*Z+m*ae,s[13]=u*y+h*N+f*j+m*te,s[2]=v*T+x*M+p*G+d*L,s[6]=v*R+x*b+p*X+d*ie,s[10]=v*C+x*O+p*Z+d*ae,s[14]=v*y+x*N+p*j+d*te,s[3]=w*T+E*M+g*G+P*L,s[7]=w*R+E*b+g*X+P*ie,s[11]=w*C+E*O+g*Z+P*ae,s[15]=w*y+E*N+g*j+P*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],v=e[3],x=e[7],p=e[11],d=e[15];return v*(+s*c*h-r*l*h-s*o*f+n*l*f+r*o*m-n*c*m)+x*(+t*c*m-t*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+p*(+t*l*h-t*o*m-s*a*h+n*a*m+s*o*u-n*l*u)+d*(-r*o*u-t*c*h+t*o*f+r*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],v=e[12],x=e[13],p=e[14],d=e[15],w=h*p*l-x*f*l+x*c*m-o*p*m-h*c*d+o*f*d,E=v*f*l-u*p*l-v*c*m+a*p*m+u*c*d-a*f*d,g=u*x*l-v*h*l+v*o*m-a*x*m-u*o*d+a*h*d,P=v*h*c-u*x*c-v*o*f+a*x*f+u*o*p-a*h*p,T=t*w+n*E+r*g+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=w*R,e[1]=(x*f*s-h*p*s-x*r*m+n*p*m+h*r*d-n*f*d)*R,e[2]=(o*p*s-x*c*s+x*r*l-n*p*l-o*r*d+n*c*d)*R,e[3]=(h*c*s-o*f*s-h*r*l+n*f*l+o*r*m-n*c*m)*R,e[4]=E*R,e[5]=(u*p*s-v*f*s+v*r*m-t*p*m-u*r*d+t*f*d)*R,e[6]=(v*c*s-a*p*s-v*r*l+t*p*l+a*r*d-t*c*d)*R,e[7]=(a*f*s-u*c*s+u*r*l-t*f*l-a*r*m+t*c*m)*R,e[8]=g*R,e[9]=(v*h*s-u*x*s-v*n*m+t*x*m+u*n*d-t*h*d)*R,e[10]=(a*x*s-v*o*s+v*n*l-t*x*l-a*n*d+t*o*d)*R,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*m-t*o*m)*R,e[12]=P*R,e[13]=(u*x*r-v*h*r+v*n*f-t*x*f-u*n*p+t*h*p)*R,e[14]=(v*o*r-a*x*r-v*n*c+t*x*c+a*n*p-t*o*p)*R,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,f=s*l,m=s*u,v=s*h,x=a*u,p=a*h,d=o*h,w=c*l,E=c*u,g=c*h,P=n.x,T=n.y,R=n.z;return r[0]=(1-(x+d))*P,r[1]=(m+g)*P,r[2]=(v-E)*P,r[3]=0,r[4]=(m-g)*T,r[5]=(1-(f+d))*T,r[6]=(p+w)*T,r[7]=0,r[8]=(v+E)*R,r[9]=(p-w)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ni.set(r[0],r[1],r[2]).length();const a=ni.set(r[4],r[5],r[6]).length(),o=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const l=1/s,u=1/a,h=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=mn){const c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(o===mn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Gr)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=mn){const c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(a-s),f=(t+e)*l,m=(n+r)*u;let v,x;if(o===mn)v=(a+s)*h,x=-2*h;else if(o===Gr)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new V,Zt=new at,au=new V(0,0,0),ou=new V(1,1,1),bn=new V,gr=new V,Nt=new V,so=new at,ao=new ar;class on{constructor(e=0,t=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return so.makeRotationFromQuaternion(e),this.setFromRotationMatrix(so,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ao.setFromEuler(this),this.setFromQuaternion(ao,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cu=0;const oo=new V,ii=new ar,dn=new at,_r=new V,Hi=new V,lu=new V,uu=new ar,co=new V(1,0,0),lo=new V(0,1,0),uo=new V(0,0,1),ho={type:"added"},du={type:"removed"},ri={type:"childadded",child:null},us={type:"childremoved",child:null};class _t extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new V,t=new on,n=new ar,r=new V(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new We}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(lo,e)}rotateZ(e){return this.rotateOnAxis(uo,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(lo,e)}translateZ(e){return this.translateOnAxis(uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_r.copy(e):_r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Hi,_r,this.up):dn.lookAt(_r,Hi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(dn),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ho),ri.child=e,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(du),us.child=e,this.dispatchEvent(us),us.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ho),ri.child=e,this.dispatchEvent(ri),ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}_t.DEFAULT_UP=new V(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new V,hn=new V,ds=new V,fn=new V,si=new V,ai=new V,fo=new V,hs=new V,fs=new V,ps=new V,ms=new ut,gs=new ut,_s=new ut;class Xt{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Kt.subVectors(r,t),hn.subVectors(n,t),ds.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(hn),c=Kt.dot(ds),l=hn.dot(hn),u=hn.dot(ds),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(l*c-o*u)*f,v=(a*u-o*c)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ms.setScalar(0),gs.setScalar(0),_s.setScalar(0),ms.fromBufferAttribute(e,t),gs.fromBufferAttribute(e,n),_s.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ms,s.x),a.addScaledVector(gs,s.y),a.addScaledVector(_s,s.z),a}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),hn.subVectors(e,t),Kt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Kt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;si.subVectors(r,n),ai.subVectors(s,n),hs.subVectors(e,n);const c=si.dot(hs),l=ai.dot(hs);if(c<=0&&l<=0)return t.copy(n);fs.subVectors(e,r);const u=si.dot(fs),h=ai.dot(fs);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(si,a);ps.subVectors(e,s);const m=si.dot(ps),v=ai.dot(ps);if(v>=0&&m<=v)return t.copy(s);const x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(ai,o);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return fo.subVectors(s,r),o=(h-u)/(h-u+(m-v)),t.copy(r).addScaledVector(fo,o);const d=1/(p+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(si,a).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function vs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=La(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=vs(a,s,e+1/3),this.g=vs(a,s,e),this.b=vs(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=bc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Je.fromWorkingColorSpace(Et.copy(this),e),Math.round(Ct(Et.r*255,0,255))*65536+Math.round(Ct(Et.g*255,0,255))*256+Math.round(Ct(Et.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Lt){Je.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(vr);const n=Ji(wn.h,vr.h,t),r=Ji(wn.s,vr.s,t),s=Ji(wn.l,vr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Ve;Ve.NAMES=bc;let hu=0;class Ui extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=gn(),this.name="",this.blending=Mi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ds,this.blendDst=Is,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ds&&(n.blendSrc=this.blendSrc),this.blendDst!==Is&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ri extends Ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new V,xr=new Ye;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),e}}class wc extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tc extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fu=0;const Ht=new at,xs=new _t,oi=new V,Ft=new Zn,Vi=new Zn,Mt=new V;class zt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mc(e)?Tc:wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return xs.lookAt(e),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ft.min,Vi.min),Ft.expandByPoint(Mt),Mt.addVectors(Ft.max,Vi.max),Ft.expandByPoint(Mt)):(Ft.expandByPoint(Vi.min),Ft.expandByPoint(Vi.max))}Ft.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Mt.fromBufferAttribute(o,l),c&&(oi.fromBufferAttribute(e,l),Mt.add(oi)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new V,c[C]=new V;const l=new V,u=new V,h=new V,f=new Ye,m=new Ye,v=new Ye,x=new V,p=new V;function d(C,y,M){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,C),m.fromBufferAttribute(s,y),v.fromBufferAttribute(s,M),u.sub(l),h.sub(l),m.sub(f),v.sub(f);const b=1/(m.x*v.y-v.x*m.y);isFinite(b)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(b),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(b),o[C].add(x),o[y].add(x),o[M].add(x),c[C].add(p),c[y].add(p),c[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,y=w.length;C<y;++C){const M=w[C],b=M.start,O=M.count;for(let N=b,G=b+O;N<G;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const E=new V,g=new V,P=new V,T=new V;function R(C){P.fromBufferAttribute(r,C),T.copy(P);const y=o[C];E.copy(y),E.sub(P.multiplyScalar(P.dot(y))).normalize(),g.crossVectors(T,y);const b=g.dot(c[C])<0?-1:1;a.setXYZW(C,E.x,E.y,E.z,b)}for(let C=0,y=w.length;C<y;++C){const M=w[C],b=M.start,O=M.count;for(let N=b,G=b+O;N<G;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,o=new V,c=new V,l=new V,u=new V,h=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let m=0,v=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*u;for(let d=0;d<u;d++)f[v++]=l[m++]}return new qt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new at,Nn=new su,Mr=new Ii,mo=new V,yr=new V,Sr=new V,Er=new V,Ms=new V,br=new V,go=new V,wr=new V;class Ke extends _t{constructor(e=new zt,t=new Ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Ms.fromBufferAttribute(h,e),a?br.addScaledVector(Ms,u):br.addScaledVector(Ms.sub(t),u))}t.add(br)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(Mr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Mr,mo)===null||Nn.origin.distanceToSquared(mo)>(e.far-e.near)**2))&&(po.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(po),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const p=f[v],d=a[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let g=w,P=E;g<P;g+=3){const T=o.getX(g),R=o.getX(g+1),C=o.getX(g+2);r=Tr(this,d,e,n,l,u,h,T,R,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=v,d=x;p<d;p+=3){const w=o.getX(p),E=o.getX(p+1),g=o.getX(p+2);r=Tr(this,a,e,n,l,u,h,w,E,g),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const p=f[v],d=a[p.materialIndex],w=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let g=w,P=E;g<P;g+=3){const T=g,R=g+1,C=g+2;r=Tr(this,d,e,n,l,u,h,T,R,C),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=v,d=x;p<d;p+=3){const w=p,E=p+1,g=p+2;r=Tr(this,a,e,n,l,u,h,w,E,g),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function pu(i,e,t,n,r,s,a,o){let c;if(e.side===Dt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Pn,o),c===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:i}}function Tr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,yr),i.getVertexPosition(c,Sr),i.getVertexPosition(l,Er);const u=pu(i,e,t,n,yr,Sr,Er,go);if(u){const h=new V;Xt.getBarycoord(go,yr,Sr,Er,h),r&&(u.uv=Xt.getInterpolatedAttribute(r,o,c,l,h,new Ye)),s&&(u.uv1=Xt.getInterpolatedAttribute(s,o,c,l,h,new Ye)),a&&(u.normal=Xt.getInterpolatedAttribute(a,o,c,l,h,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new V,materialIndex:0};Xt.getNormal(yr,Sr,Er,f.normal),u.face=f,u.barycoord=h}return u}class yt extends zt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function v(x,p,d,w,E,g,P,T,R,C,y){const M=g/R,b=P/C,O=g/2,N=P/2,G=T/2,X=R+1,Z=C+1;let j=0,L=0;const ie=new V;for(let ae=0;ae<Z;ae++){const te=ae*b-N;for(let se=0;se<X;se++){const Me=se*M-O;ie[x]=Me*w,ie[p]=te*E,ie[d]=G,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[p]=0,ie[d]=T>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(se/R),h.push(1-ae/C),j+=1}}for(let ae=0;ae<C;ae++)for(let te=0;te<R;te++){const se=f+te+X*ae,Me=f+te+X*(ae+1),q=f+(te+1)+X*(ae+1),D=f+(te+1)+X*ae;c.push(se,Me,D),c.push(Me,q,D),L+=6}o.addGroup(m,L,y),m+=L,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Ci(i[t]);for(const r in n)e[r]=n[r]}return e}function mu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ac(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const gu={clone:Ci,merge:Rt};var _u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_u,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rc extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new V,_o=new Ye,vo=new Ye;class Wt extends Rc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,_o,vo),t.subVectors(vo,_o)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,li=1;class xu extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(ci,li,e,t);r.layers=this.layers,this.add(r);const s=new Wt(ci,li,e,t);s.layers=this.layers,this.add(s);const a=new Wt(ci,li,e,t);a.layers=this.layers,this.add(a);const o=new Wt(ci,li,e,t);o.layers=this.layers,this.add(o);const c=new Wt(ci,li,e,t);c.layers=this.layers,this.add(c);const l=new Wt(ci,li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Cc extends wt{constructor(e,t,n,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mu extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Cc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yt(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Rn});s.uniforms.tEquirect.value=t;const a=new Ke(r,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=sn),new xu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ys=new V,yu=new V,Su=new We;class kn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ys.subVectors(n,t).cross(yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Su.getNormalMatrix(e),r=this.coplanarPoint(ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Ii,Ar=new V;class Da{constructor(e=new kn,t=new kn,n=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],m=r[8],v=r[9],x=r[10],p=r[11],d=r[12],w=r[13],E=r[14],g=r[15];if(n[0].setComponents(c-s,f-l,p-m,g-d).normalize(),n[1].setComponents(c+s,f+l,p+m,g+d).normalize(),n[2].setComponents(c+a,f+u,p+v,g+w).normalize(),n[3].setComponents(c-a,f-u,p-v,g-w).normalize(),n[4].setComponents(c-o,f-h,p-x,g-E).normalize(),t===mn)n[5].setComponents(c+o,f+h,p+x,g+E).normalize();else if(t===Gr)n[5].setComponents(o,h,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ar.x=r.normal.x>0?e.max.x:e.min.x,Ar.y=r.normal.y>0?e.max.y:e.min.y,Ar.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Eu(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],x=h[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,h[f]=x)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const x=h[m];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Kr extends zt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=t/c,m=[],v=[],x=[],p=[];for(let d=0;d<u;d++){const w=d*f-a;for(let E=0;E<l;E++){const g=E*h-s;v.push(g,-w,0),x.push(0,0,1),p.push(E/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let w=0;w<o;w++){const E=w+l*d,g=w+l*(d+1),P=w+1+l*(d+1),T=w+1+l*d;m.push(E,g,T),m.push(g,P,T)}this.setIndex(m),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.widthSegments,e.heightSegments)}}var bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Du=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ou=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Md=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,th=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ah=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ch=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_h=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ch=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ph=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$h=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:bu,alphahash_pars_fragment:wu,alphamap_fragment:Tu,alphamap_pars_fragment:Au,alphatest_fragment:Ru,alphatest_pars_fragment:Cu,aomap_fragment:Pu,aomap_pars_fragment:Lu,batching_pars_vertex:Du,batching_vertex:Iu,begin_vertex:Uu,beginnormal_vertex:Nu,bsdfs:Fu,iridescence_fragment:Ou,bumpmap_pars_fragment:Bu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:ku,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Vu,color_fragment:Gu,color_pars_fragment:Wu,color_pars_vertex:Xu,color_vertex:qu,common:Yu,cube_uv_reflection_fragment:$u,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ku,displacementmap_vertex:ju,emissivemap_fragment:Ju,emissivemap_pars_fragment:Qu,colorspace_fragment:ed,colorspace_pars_fragment:td,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:rd,envmap_pars_vertex:sd,envmap_physical_pars_fragment:gd,envmap_vertex:ad,fog_vertex:od,fog_pars_vertex:cd,fog_fragment:ld,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:hd,lights_lambert_fragment:fd,lights_lambert_pars_fragment:pd,lights_pars_begin:md,lights_toon_fragment:_d,lights_toon_pars_fragment:vd,lights_phong_fragment:xd,lights_phong_pars_fragment:Md,lights_physical_fragment:yd,lights_physical_pars_fragment:Sd,lights_fragment_begin:Ed,lights_fragment_maps:bd,lights_fragment_end:wd,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:Rd,logdepthbuf_vertex:Cd,map_fragment:Pd,map_pars_fragment:Ld,map_particle_fragment:Dd,map_particle_pars_fragment:Id,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Nd,morphinstance_vertex:Fd,morphcolor_vertex:Od,morphnormal_vertex:Bd,morphtarget_pars_vertex:zd,morphtarget_vertex:kd,normal_fragment_begin:Hd,normal_fragment_maps:Vd,normal_pars_fragment:Gd,normal_pars_vertex:Wd,normal_vertex:Xd,normalmap_pars_fragment:qd,clearcoat_normal_fragment_begin:Yd,clearcoat_normal_fragment_maps:$d,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:Kd,opaque_fragment:jd,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:eh,dithering_fragment:th,dithering_pars_fragment:nh,roughnessmap_fragment:ih,roughnessmap_pars_fragment:rh,shadowmap_pars_fragment:sh,shadowmap_pars_vertex:ah,shadowmap_vertex:oh,shadowmask_pars_fragment:ch,skinbase_vertex:lh,skinning_pars_vertex:uh,skinning_vertex:dh,skinnormal_vertex:hh,specularmap_fragment:fh,specularmap_pars_fragment:ph,tonemapping_fragment:mh,tonemapping_pars_fragment:gh,transmission_fragment:_h,transmission_pars_fragment:vh,uv_pars_fragment:xh,uv_pars_vertex:Mh,uv_vertex:yh,worldpos_vertex:Sh,background_vert:Eh,background_frag:bh,backgroundCube_vert:wh,backgroundCube_frag:Th,cube_vert:Ah,cube_frag:Rh,depth_vert:Ch,depth_frag:Ph,distanceRGBA_vert:Lh,distanceRGBA_frag:Dh,equirect_vert:Ih,equirect_frag:Uh,linedashed_vert:Nh,linedashed_frag:Fh,meshbasic_vert:Oh,meshbasic_frag:Bh,meshlambert_vert:zh,meshlambert_frag:kh,meshmatcap_vert:Hh,meshmatcap_frag:Vh,meshnormal_vert:Gh,meshnormal_frag:Wh,meshphong_vert:Xh,meshphong_frag:qh,meshphysical_vert:Yh,meshphysical_frag:$h,meshtoon_vert:Zh,meshtoon_frag:Kh,points_vert:jh,points_frag:Jh,shadow_vert:Qh,shadow_frag:ef,sprite_vert:tf,sprite_frag:nf},_e={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},rn={basic:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Rt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Rt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Rt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Rt([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Rt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Rt([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Rt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Rt([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Rt([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Rt([_e.lights,_e.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};rn.physical={uniforms:Rt([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Rr={r:0,b:0,g:0},On=new on,rf=new at;function sf(i,e,t,n,r,s,a){const o=new Ve(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function v(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function x(w){let E=!1;const g=v(w);g===null?d(o,c):g&&g.isColor&&(d(g,1),E=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,E){const g=v(E);g&&(g.isCubeTexture||g.mapping===$r)?(u===void 0&&(u=new Ke(new yt(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Ci(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),On.copy(E.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rf.makeRotationFromEuler(On)),u.material.toneMapped=Je.getTransfer(g.colorSpace)!==rt,(h!==g||f!==g.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=g,f=g.version,m=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Ke(new Kr(2,2),new Ln({name:"BackgroundMaterial",uniforms:Ci(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Je.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||f!==g.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=g,f=g.version,m=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,E){w.getRGB(Rr,Ac(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(o,c)},render:x,addToRenderList:p}}function af(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,b,O,N,G){let X=!1;const Z=h(N,O,b);s!==Z&&(s=Z,l(s.object)),X=m(M,N,O,G),X&&v(M,N,O,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,g(M,b,O,N),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,b,O){const N=O.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let X=G[b.id];X===void 0&&(X={},G[b.id]=X);let Z=X[N];return Z===void 0&&(Z=f(c()),X[N]=Z),Z}function f(M){const b=[],O=[],N=[];for(let G=0;G<t;G++)b[G]=0,O[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:O,attributeDivisors:N,object:M,attributes:{},index:null}}function m(M,b,O,N){const G=s.attributes,X=b.attributes;let Z=0;const j=O.getAttributes();for(const L in j)if(j[L].location>=0){const ae=G[L];let te=X[L];if(te===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),ae===void 0||ae.attribute!==te||te&&ae.data!==te.data)return!0;Z++}return s.attributesNum!==Z||s.index!==N}function v(M,b,O,N){const G={},X=b.attributes;let Z=0;const j=O.getAttributes();for(const L in j)if(j[L].location>=0){let ae=X[L];ae===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const te={};te.attribute=ae,ae&&ae.data&&(te.data=ae.data),G[L]=te,Z++}s.attributes=G,s.attributesNum=Z,s.index=N}function x(){const M=s.newAttributes;for(let b=0,O=M.length;b<O;b++)M[b]=0}function p(M){d(M,0)}function d(M,b){const O=s.newAttributes,N=s.enabledAttributes,G=s.attributeDivisors;O[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),G[M]!==b&&(i.vertexAttribDivisor(M,b),G[M]=b)}function w(){const M=s.newAttributes,b=s.enabledAttributes;for(let O=0,N=b.length;O<N;O++)b[O]!==M[O]&&(i.disableVertexAttribArray(O),b[O]=0)}function E(M,b,O,N,G,X,Z){Z===!0?i.vertexAttribIPointer(M,b,O,G,X):i.vertexAttribPointer(M,b,O,N,G,X)}function g(M,b,O,N){x();const G=N.attributes,X=O.getAttributes(),Z=b.defaultAttributeValues;for(const j in X){const L=X[j];if(L.location>=0){let ie=G[j];if(ie===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const ae=ie.normalized,te=ie.itemSize,se=e.get(ie);if(se===void 0)continue;const Me=se.buffer,q=se.type,D=se.bytesPerElement,W=q===i.INT||q===i.UNSIGNED_INT||ie.gpuType===ba;if(ie.isInterleavedBufferAttribute){const ee=ie.data,he=ee.stride,Se=ie.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<L.locationSize;Ee++)d(L.location+Ee,ee.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<L.locationSize;Ee++)p(L.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ee=0;Ee<L.locationSize;Ee++)E(L.location+Ee,te/L.locationSize,q,ae,he*D,(Se+te/L.locationSize*Ee)*D,W)}else{if(ie.isInstancedBufferAttribute){for(let ee=0;ee<L.locationSize;ee++)d(L.location+ee,ie.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ee=0;ee<L.locationSize;ee++)p(L.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ee=0;ee<L.locationSize;ee++)E(L.location+ee,te/L.locationSize,q,ae,te*D,te/L.locationSize*ee*D,W)}}else if(Z!==void 0){const ae=Z[j];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(L.location,ae);break;case 3:i.vertexAttrib3fv(L.location,ae);break;case 4:i.vertexAttrib4fv(L.location,ae);break;default:i.vertexAttrib1fv(L.location,ae)}}}}w()}function P(){C();for(const M in n){const b=n[M];for(const O in b){const N=b[O];for(const G in N)u(N[G].object),delete N[G];delete b[O]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const O in b){const N=b[O];for(const G in N)u(N[G].object),delete N[G];delete b[O]}delete n[M.id]}function R(M){for(const b in n){const O=n[b];if(O[M.id]===void 0)continue;const N=O[M.id];for(const G in N)u(N[G].object),delete N[G];delete O[M.id]}}function C(){y(),a=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:w}}function of(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];t.update(m,n,1)}function c(l,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x]*f[x];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function cf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==an&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:g,vertexTextures:P,maxSamples:T}}function lf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new kn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const w=s?0:n,E=w*4;let g=d.clippingState||null;c.value=g,g=u(v,f,E,m);for(let P=0;P!==E;++P)g[P]=t[P];d.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,v){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,v!==!0||p===null){const d=m+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,g=m;E!==x;++E,g+=4)a.copy(h[E]).applyMatrix4(w,o),a.normal.toArray(p,g),p[g+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function uf(i){let e=new WeakMap;function t(a,o){return o===Hs?a.mapping=bi:o===Vs&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hs||o===Vs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Mu(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Lc extends Rc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _i=4,xo=[.125,.215,.35,.446,.526,.582],Gn=20,Ss=new Lc,Mo=new Ve;let Es=null,bs=0,ws=0,Ts=!1;const Hn=(1+Math.sqrt(5))/2,ui=1/Hn,yo=[new V(-Hn,ui,0),new V(Hn,ui,0),new V(-ui,0,Hn),new V(ui,0,Hn),new V(0,Hn,-ui),new V(0,Hn,ui),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class So{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Es=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Es,bs,ws),this._renderer.xr.enabled=Ts,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Es=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:sr,format:en,colorSpace:Li,depthBuffer:!1},r=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=df(s)),this._blurMaterial=hf(s,e,t)}return r}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Ss)}_sceneToCubeUV(e,t,n,r){const o=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Mo),u.toneMapping=Cn,u.autoClear=!1;const m=new Ri({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),v=new Ke(new yt,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Mo),x=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):w===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const E=this._cubeSize;Cr(r,w*E,d>2?E:0,E,E),u.setRenderTarget(r),x&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bi||e.mapping===wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Cr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ss)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yo[(r-s-1)%yo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ke(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),x=s/v,p=isFinite(s)?1+Math.floor(u*x):Gn;p>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const d=[];let w=0;for(let R=0;R<Gn;++R){const C=R/x,y=Math.exp(-C*C/2);d.push(y),R===0?w+=y:R<p&&(w+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-n;const g=this._sizeLods[r],P=3*g*(r>E-_i?r-E+_i:0),T=4*(this._cubeSize-g);Cr(t,P,T,3*g,2*g),c.setRenderTarget(t),c.render(h,Ss)}}function df(i){const e=[],t=[],n=[];let r=i;const s=i-_i+1+xo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-_i?c=xo[a-i+_i-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,x=3,p=2,d=1,w=new Float32Array(x*v*m),E=new Float32Array(p*v*m),g=new Float32Array(d*v*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,C=T>2?0:-1,y=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];w.set(y,x*v*T),E.set(f,p*v*T);const M=[T,T,T,T,T,T];g.set(M,d*v*T)}const P=new zt;P.setAttribute("position",new qt(w,x)),P.setAttribute("uv",new qt(E,p)),P.setAttribute("faceIndex",new qt(g,d)),e.push(P),r>_i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eo(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hf(i,e,t){const n=new Float32Array(Gn),r=new V(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function bo(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wo(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ff(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Hs||c===Vs,u=c===bi||c===wi;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new So(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new So(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mf(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const x=m[v];for(let p=0,d=x.length;p<d;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,v=h.attributes.position;let x=0;if(m!==null){const w=m.array;x=m.version;for(let E=0,g=w.length;E<g;E+=3){const P=w[E+0],T=w[E+1],R=w[E+2];f.push(P,T,T,R,R,P)}}else if(v!==void 0){const w=v.array;x=v.version;for(let E=0,g=w.length/3-1;E<g;E+=3){const P=E+0,T=E+1,R=E+2;f.push(P,T,T,R,R,P)}}else return;const p=new(Mc(f)?Tc:wc)(f,1);p.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function gf(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*a),t.update(m,n,1)}function l(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,f*a,v),t.update(m,n,v))}function u(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];t.update(p,n,1)}function h(f,m,v,x){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/a,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,x,0,v);let d=0;for(let w=0;w<v;w++)d+=m[w]*x[w];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _f(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vf(i,e,t){const n=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let g=0;v===!0&&(g=1),x===!0&&(g=2),p===!0&&(g=3);let P=o.attributes.position.count*g,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*T*4*h),C=new Sc(R,P,T,h);C.type=an,C.needsUpdate=!0;const y=g*4;for(let b=0;b<h;b++){const O=d[b],N=w[b],G=E[b],X=P*T*4*b;for(let Z=0;Z<O.count;Z++){const j=Z*y;v===!0&&(r.fromBufferAttribute(O,Z),R[X+j+0]=r.x,R[X+j+1]=r.y,R[X+j+2]=r.z,R[X+j+3]=0),x===!0&&(r.fromBufferAttribute(N,Z),R[X+j+4]=r.x,R[X+j+5]=r.y,R[X+j+6]=r.z,R[X+j+7]=0),p===!0&&(r.fromBufferAttribute(G,Z),R[X+j+8]=r.x,R[X+j+9]=r.y,R[X+j+10]=r.z,R[X+j+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:C,size:new Ye(P,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const x=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function xf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Dc extends wt{constructor(e,t,n,r,s,a,o,c,l,u=yi){if(u!==yi&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yi&&(n=Yn),n===void 0&&u===Ai&&(n=Ti),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=c!==void 0?c:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ic=new wt,To=new Dc(1,1),Uc=new Sc,Nc=new iu,Fc=new Cc,Ao=[],Ro=[],Co=new Float32Array(16),Po=new Float32Array(9),Lo=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ao[r];if(s===void 0&&(s=new Float32Array(r),Ao[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jr(i,e){let t=Ro[e];t===void 0&&(t=new Int32Array(e),Ro[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Lo.set(n),i.uniformMatrix2fv(this.addr,!1,Lo),xt(t,n)}}function wf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Po.set(n),i.uniformMatrix3fv(this.addr,!1,Po),xt(t,n)}}function Tf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Co.set(n),i.uniformMatrix4fv(this.addr,!1,Co),xt(t,n)}}function Af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Nf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(To.compareFunction=xc,s=To):s=Ic,t.setTexture2D(e||s,r)}function Ff(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nc,r)}function Of(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fc,r)}function Bf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Uc,r)}function zf(i){switch(i){case 5126:return Mf;case 35664:return yf;case 35665:return Sf;case 35666:return Ef;case 35674:return bf;case 35675:return wf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return Rf;case 35668:case 35672:return Cf;case 35669:case 35673:return Pf;case 5125:return Lf;case 36294:return Df;case 36295:return If;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Bf}}function kf(i,e){i.uniform1fv(this.addr,e)}function Hf(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function Vf(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function Gf(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function Wf(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xf(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qf(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yf(i,e){i.uniform1iv(this.addr,e)}function $f(i,e){i.uniform2iv(this.addr,e)}function Zf(i,e){i.uniform3iv(this.addr,e)}function Kf(i,e){i.uniform4iv(this.addr,e)}function jf(i,e){i.uniform1uiv(this.addr,e)}function Jf(i,e){i.uniform2uiv(this.addr,e)}function Qf(i,e){i.uniform3uiv(this.addr,e)}function ep(i,e){i.uniform4uiv(this.addr,e)}function tp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ic,s[a])}function np(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nc,s[a])}function ip(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Fc,s[a])}function rp(i,e,t){const n=this.cache,r=e.length,s=jr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Uc,s[a])}function sp(i){switch(i){case 5126:return kf;case 35664:return Hf;case 35665:return Vf;case 35666:return Gf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return $f;case 35668:case 35672:return Zf;case 35669:case 35673:return Kf;case 5125:return jf;case 36294:return Jf;case 36295:return Qf;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}class ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zf(t.type)}}class op{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sp(t.type)}}class cp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const As=/(\w+)(\])?(\[|\.)?/g;function Do(i,e){i.seq.push(e),i.map[e.id]=e}function lp(i,e,t){const n=i.name,r=n.length;for(As.lastIndex=0;;){const s=As.exec(n),a=As.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Do(t,l===void 0?new ap(o,i,e):new op(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new cp(o),Do(t,h)),t=h}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);lp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Io(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const up=37297;let dp=0;function hp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Uo=new We;function fp(i){Je._getMatrix(Uo,Je.workingColorSpace,i);const e=`mat3( ${Uo.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Zr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function No(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+hp(i.getShaderSource(e),a)}else return r}function pp(i,e){const t=fp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mp(i,e){let t;switch(e){case ml:t="Linear";break;case gl:t="Reinhard";break;case _l:t="Cineon";break;case vl:t="ACESFilmic";break;case Ml:t="AgX";break;case yl:t="Neutral";break;case xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pr=new V;function gp(){Je.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),e=Pr.y.toFixed(4),t=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _p(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ki).join(`
`)}function vp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ki(i){return i!==""}function Fo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(i){return i.replace(Mp,Sp)}const yp=new Map;function Sp(i,e){let t=qe[e];if(t===void 0){const n=yp.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return va(t)}const Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bo(i){return i.replace(Ep,bp)}function bp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case wi:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ap(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Rp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ea:e="ENVMAP_BLENDING_MULTIPLY";break;case fl:e="ENVMAP_BLENDING_MIX";break;case pl:e="ENVMAP_BLENDING_ADD";break}return e}function Cp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Pp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=wp(t),l=Tp(t),u=Ap(t),h=Rp(t),f=Cp(t),m=_p(t),v=vp(s),x=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ki).join(`
`),d.length>0&&(d+=`
`)):(p=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),d=[zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,pp("linearToOutputTexel",t.outputColorSpace),gp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ki).join(`
`)),a=va(a),a=Fo(a,t),a=Oo(a,t),o=va(o),o=Fo(o,t),o=Oo(o,t),a=Bo(a),o=Bo(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=w+p+a,g=w+d+o,P=Io(r,r.VERTEX_SHADER,E),T=Io(r,r.FRAGMENT_SHADER,g);r.attachShader(x,P),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(b){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(T).trim();let X=!0,Z=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,T);else{const j=No(r,P,"vertex"),L=No(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+O+`
`+j+`
`+L)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||G==="")&&(Z=!1);Z&&(b.diagnostics={runnable:X,programLog:O,vertexShader:{log:N,prefix:p},fragmentShader:{log:G,prefix:d}})}r.deleteShader(P),r.deleteShader(T),C=new Vr(r,x),y=xp(r,x)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,up)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let Lp=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ip(e),t.set(e,n)),n}}class Ip{constructor(e){this.id=Lp++,this.code=e,this.usedTimes=0}}function Up(i,e,t,n,r,s,a){const o=new Ec,c=new Dp,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,M,b,O,N){const G=O.fog,X=N.geometry,Z=y.isMeshStandardMaterial?O.environment:null,j=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),L=j&&j.mapping===$r?j.image.height:null,ie=v[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=ae!==void 0?ae.length:0;let se=0;X.morphAttributes.position!==void 0&&(se=1),X.morphAttributes.normal!==void 0&&(se=2),X.morphAttributes.color!==void 0&&(se=3);let Me,q,D,W;if(ie){const je=rn[ie];Me=je.vertexShader,q=je.fragmentShader}else Me=y.vertexShader,q=y.fragmentShader,c.update(y),D=c.getVertexShaderID(y),W=c.getFragmentShaderID(y);const ee=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Se=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,Ie=!!y.map,De=!!y.matcap,Ze=!!j,B=!!y.aoMap,I=!!y.lightMap,pe=!!y.bumpMap,le=!!y.normalMap,ue=!!y.displacementMap,Ue=!!y.emissiveMap,me=!!y.metalnessMap,A=!!y.roughnessMap,_=y.anisotropy>0,H=y.clearcoat>0,Q=y.dispersion>0,ne=y.iridescence>0,J=y.sheen>0,be=y.transmission>0,de=_&&!!y.anisotropyMap,fe=H&&!!y.clearcoatMap,Oe=H&&!!y.clearcoatNormalMap,oe=H&&!!y.clearcoatRoughnessMap,we=ne&&!!y.iridescenceMap,Ne=ne&&!!y.iridescenceThicknessMap,Fe=J&&!!y.sheenColorMap,Te=J&&!!y.sheenRoughnessMap,Xe=!!y.specularMap,ze=!!y.specularColorMap,Qe=!!y.specularIntensityMap,F=be&&!!y.transmissionMap,ge=be&&!!y.thicknessMap,K=!!y.gradientMap,re=!!y.alphaMap,xe=y.alphaTest>0,ve=!!y.alphaHash,ke=!!y.extensions;let Be=Cn;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Be=i.toneMapping);const $e={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:q,defines:y.defines,customVertexShaderID:D,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:Se,instancingColor:Se&&N.instanceColor!==null,instancingMorph:Se&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Li,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:De,envMap:Ze,envMapMode:Ze&&j.mapping,envMapCubeUVHeight:L,aoMap:B,lightMap:I,bumpMap:pe,normalMap:le,displacementMap:f&&ue,emissiveMap:Ue,normalMapObjectSpace:le&&y.normalMapType===wl,normalMapTangentSpace:le&&y.normalMapType===vc,metalnessMap:me,roughnessMap:A,anisotropy:_,anisotropyMap:de,clearcoat:H,clearcoatMap:fe,clearcoatNormalMap:Oe,clearcoatRoughnessMap:oe,dispersion:Q,iridescence:ne,iridescenceMap:we,iridescenceThicknessMap:Ne,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:Te,specularMap:Xe,specularColorMap:ze,specularIntensityMap:Qe,transmission:be,transmissionMap:F,thicknessMap:ge,gradientMap:K,opaque:y.transparent===!1&&y.blending===Mi&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:xe,alphaHash:ve,combine:y.combine,mapUv:Ie&&x(y.map.channel),aoMapUv:B&&x(y.aoMap.channel),lightMapUv:I&&x(y.lightMap.channel),bumpMapUv:pe&&x(y.bumpMap.channel),normalMapUv:le&&x(y.normalMap.channel),displacementMapUv:ue&&x(y.displacementMap.channel),emissiveMapUv:Ue&&x(y.emissiveMap.channel),metalnessMapUv:me&&x(y.metalnessMap.channel),roughnessMapUv:A&&x(y.roughnessMap.channel),anisotropyMapUv:de&&x(y.anisotropyMap.channel),clearcoatMapUv:fe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&x(y.sheenRoughnessMap.channel),specularMapUv:Xe&&x(y.specularMap.channel),specularColorMapUv:ze&&x(y.specularColorMap.channel),specularIntensityMapUv:Qe&&x(y.specularIntensityMap.channel),transmissionMapUv:F&&x(y.transmissionMap.channel),thicknessMapUv:ge&&x(y.thicknessMap.channel),alphaMapUv:re&&x(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(le||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(Ie||re),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:he,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===rt,decodeVideoTextureEmissive:Ue&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===Dt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ke&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&y.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)M.push(b),M.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(w(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function g(y){const M=v[y.type];let b;if(M){const O=rn[M];b=gu.clone(O.uniforms)}else b=y.uniforms;return b}function P(y,M){let b;for(let O=0,N=u.length;O<N;O++){const G=u[O];if(G.cacheKey===M){b=G,++b.usedTimes;break}}return b===void 0&&(b=new Pp(i,M,y,s),u.push(b)),b}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function R(y){c.remove(y)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:g,acquireProgram:P,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:C}}function Np(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Fp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ho(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,m,v,x,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:v,renderOrder:h.renderOrder,z:x,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=x,d.group=p),e++,d}function o(h,f,m,v,x,p){const d=a(h,f,m,v,x,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,f,m,v,x,p){const d=a(h,f,m,v,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Fp),n.length>1&&n.sort(f||ko),r.length>1&&r.sort(f||ko)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function Op(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ho,i.set(n,[a])):r>=s.length?(a=new Ho,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ve};break;case"SpotLight":t={position:new V,direction:new V,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function zp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kp=0;function Hp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vp(i){const e=new Bp,t=zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const r=new V,s=new at,a=new at;function o(l){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,x=0,p=0,d=0,w=0,E=0,g=0,P=0,T=0,R=0;l.sort(Hp);for(let y=0,M=l.length;y<M;y++){const b=l[y],O=b.color,N=b.intensity,G=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=O.r*N,h+=O.g*N,f+=O.b*N;else if(b.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(b.sh.coefficients[Z],N);R++}else if(b.isDirectionalLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const j=b.shadow,L=t.get(b);L.shadowIntensity=j.intensity,L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,n.directionalShadow[m]=L,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=b.shadow.matrix,w++}n.directional[m]=Z,m++}else if(b.isSpotLight){const Z=e.get(b);Z.position.setFromMatrixPosition(b.matrixWorld),Z.color.copy(O).multiplyScalar(N),Z.distance=G,Z.coneCos=Math.cos(b.angle),Z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Z.decay=b.decay,n.spot[x]=Z;const j=b.shadow;if(b.map&&(n.spotLightMap[P]=b.map,P++,j.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[x]=j.matrix,b.castShadow){const L=t.get(b);L.shadowIntensity=j.intensity,L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,n.spotShadow[x]=L,n.spotShadowMap[x]=X,g++}x++}else if(b.isRectAreaLight){const Z=e.get(b);Z.color.copy(O).multiplyScalar(N),Z.halfWidth.set(b.width*.5,0,0),Z.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=Z,p++}else if(b.isPointLight){const Z=e.get(b);if(Z.color.copy(b.color).multiplyScalar(b.intensity),Z.distance=b.distance,Z.decay=b.decay,b.castShadow){const j=b.shadow,L=t.get(b);L.shadowIntensity=j.intensity,L.shadowBias=j.bias,L.shadowNormalBias=j.normalBias,L.shadowRadius=j.radius,L.shadowMapSize=j.mapSize,L.shadowCameraNear=j.camera.near,L.shadowCameraFar=j.camera.far,n.pointShadow[v]=L,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=b.shadow.matrix,E++}n.point[v]=Z,v++}else if(b.isHemisphereLight){const Z=e.get(b);Z.skyColor.copy(b.color).multiplyScalar(N),Z.groundColor.copy(b.groundColor).multiplyScalar(N),n.hemi[d]=Z,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==m||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==p||C.hemiLength!==d||C.numDirectionalShadows!==w||C.numPointShadows!==E||C.numSpotShadows!==g||C.numSpotMaps!==P||C.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=g+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,C.directionalLength=m,C.pointLength=v,C.spotLength=x,C.rectAreaLength=p,C.hemiLength=d,C.numDirectionalShadows=w,C.numPointShadows=E,C.numSpotShadows=g,C.numSpotMaps=P,C.numLightProbes=R,n.version=kp++)}function c(l,u){let h=0,f=0,m=0,v=0,x=0;const p=u.matrixWorldInverse;for(let d=0,w=l.length;d<w;d++){const E=l[d];if(E.isDirectionalLight){const g=n.directional[h];g.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(p),h++}else if(E.isSpotLight){const g=n.spot[m];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(p),a.identity(),s.copy(E.matrixWorld),s.premultiply(p),a.extractRotation(s),g.halfWidth.set(E.width*.5,0,0),g.halfHeight.set(0,E.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),v++}else if(E.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(E.matrixWorld),g.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function Vo(i){const e=new Vp(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Gp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vo(i),e.set(r,[o])):s>=a.length?(o=new Vo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Wp extends Ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=El,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xp extends Ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $p(i,e,t){let n=new Da;const r=new Ye,s=new Ye,a=new ut,o=new Wp({depthPacking:bl}),c=new Xp,l={},u=t.maxTextureSize,h={[Pn]:Dt,[Dt]:Pn,[Ot]:Ot},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:qp,fragmentShader:Yp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new zt;v.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ke(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let d=this.type;this.render=function(T,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Rn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=d!==pn&&this.type===pn,G=d===pn&&this.type!==pn;for(let X=0,Z=T.length;X<Z;X++){const j=T[X],L=j.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const ie=L.getFrameExtents();if(r.multiply(ie),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,L.mapSize.y=s.y)),L.map===null||N===!0||G===!0){const te=this.type!==pn?{minFilter:Bt,magFilter:Bt}:{};L.map!==null&&L.map.dispose(),L.map=new $n(r.x,r.y,te),L.map.texture.name=j.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const ae=L.getViewportCount();for(let te=0;te<ae;te++){const se=L.getViewport(te);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),O.viewport(a),L.updateMatrices(j,te),n=L.getFrustum(),g(R,C,L.camera,j,this.type)}L.isPointLightShadow!==!0&&this.type===pn&&w(L,C),L.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(y,M,b)};function w(T,R){const C=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,C,m,x,null)}function E(T,R,C,y){let M=null;const b=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)M=b;else if(M=C.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,N=R.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let X=G[N];X===void 0&&(X=M.clone(),G[N]=X,R.addEventListener("dispose",P)),M=X}if(M.visible=R.visible,M.wireframe=R.wireframe,y===pn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=C}return M}function g(T,R,C,y,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===pn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const N=e.update(T),G=T.material;if(Array.isArray(G)){const X=N.groups;for(let Z=0,j=X.length;Z<j;Z++){const L=X[Z],ie=G[L.materialIndex];if(ie&&ie.visible){const ae=E(T,ie,y,M);T.onBeforeShadow(i,T,R,C,N,ae,L),i.renderBufferDirect(C,null,N,ae,T,L),T.onAfterShadow(i,T,R,C,N,ae,L)}}}else if(G.visible){const X=E(T,G,y,M);T.onBeforeShadow(i,T,R,C,N,X,null),i.renderBufferDirect(C,null,N,X,T,null),T.onAfterShadow(i,T,R,C,N,X,null)}}const O=T.children;for(let N=0,G=O.length;N<G;N++)g(O[N],R,C,y,M)}function P(T){T.target.removeEventListener("dispose",P);for(const C in l){const y=l[C],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Zp={[Us]:Ns,[Fs]:zs,[Os]:ks,[Ei]:Bs,[Ns]:Us,[zs]:Fs,[ks]:Os,[Bs]:Ei};function Kp(i,e){function t(){let F=!1;const ge=new ut;let K=null;const re=new ut(0,0,0,0);return{setMask:function(xe){K!==xe&&!F&&(i.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ve,ke,Be,$e){$e===!0&&(xe*=Be,ve*=Be,ke*=Be),ge.set(xe,ve,ke,Be),re.equals(ge)===!1&&(i.clearColor(xe,ve,ke,Be),re.copy(ge))},reset:function(){F=!1,K=null,re.set(-1,0,0,0)}}}function n(){let F=!1,ge=!1,K=null,re=null,xe=null;return{setReversed:function(ve){if(ge!==ve){const ke=e.get("EXT_clip_control");ge?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const Be=xe;xe=null,this.setClear(Be)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?ee(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(ve){K!==ve&&!F&&(i.depthMask(ve),K=ve)},setFunc:function(ve){if(ge&&(ve=Zp[ve]),re!==ve){switch(ve){case Us:i.depthFunc(i.NEVER);break;case Ns:i.depthFunc(i.ALWAYS);break;case Fs:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Os:i.depthFunc(i.EQUAL);break;case Bs:i.depthFunc(i.GEQUAL);break;case zs:i.depthFunc(i.GREATER);break;case ks:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ve}},setLocked:function(ve){F=ve},setClear:function(ve){xe!==ve&&(ge&&(ve=1-ve),i.clearDepth(ve),xe=ve)},reset:function(){F=!1,K=null,re=null,xe=null,ge=!1}}}function r(){let F=!1,ge=null,K=null,re=null,xe=null,ve=null,ke=null,Be=null,$e=null;return{setTest:function(je){F||(je?ee(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(je){ge!==je&&!F&&(i.stencilMask(je),ge=je)},setFunc:function(je,Tt,It){(K!==je||re!==Tt||xe!==It)&&(i.stencilFunc(je,Tt,It),K=je,re=Tt,xe=It)},setOp:function(je,Tt,It){(ve!==je||ke!==Tt||Be!==It)&&(i.stencilOp(je,Tt,It),ve=je,ke=Tt,Be=It)},setLocked:function(je){F=je},setClear:function(je){$e!==je&&(i.clearStencil(je),$e=je)},reset:function(){F=!1,ge=null,K=null,re=null,xe=null,ve=null,ke=null,Be=null,$e=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,m=[],v=null,x=!1,p=null,d=null,w=null,E=null,g=null,P=null,T=null,R=new Ve(0,0,0),C=0,y=!1,M=null,b=null,O=null,N=null,G=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(L)[1]),Z=j>=1):L.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Z=j>=2);let ie=null,ae={};const te=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),Me=new ut().fromArray(te),q=new ut().fromArray(se);function D(F,ge,K,re){const xe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(F,ve),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<K;ke++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ge+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ve}const W={};W[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(Ei),pe(!1),le(Wa),ee(i.CULL_FACE),B(Rn);function ee(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function he(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Se(F,ge){return h[F]!==ge?(i.bindFramebuffer(F,ge),h[F]=ge,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ee(F,ge){let K=m,re=!1;if(F){K=f.get(ge),K===void 0&&(K=[],f.set(ge,K));const xe=F.textures;if(K.length!==xe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,ke=xe.length;ve<ke;ve++)K[ve]=i.COLOR_ATTACHMENT0+ve;K.length=xe.length,re=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,re=!0);re&&i.drawBuffers(K)}function Ie(F){return v!==F?(i.useProgram(F),v=F,!0):!1}const De={[Vn]:i.FUNC_ADD,[Kc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};De[Jc]=i.MIN,De[Qc]=i.MAX;const Ze={[el]:i.ZERO,[tl]:i.ONE,[nl]:i.SRC_COLOR,[Ds]:i.SRC_ALPHA,[cl]:i.SRC_ALPHA_SATURATE,[al]:i.DST_COLOR,[rl]:i.DST_ALPHA,[il]:i.ONE_MINUS_SRC_COLOR,[Is]:i.ONE_MINUS_SRC_ALPHA,[ol]:i.ONE_MINUS_DST_COLOR,[sl]:i.ONE_MINUS_DST_ALPHA,[ll]:i.CONSTANT_COLOR,[ul]:i.ONE_MINUS_CONSTANT_COLOR,[dl]:i.CONSTANT_ALPHA,[hl]:i.ONE_MINUS_CONSTANT_ALPHA};function B(F,ge,K,re,xe,ve,ke,Be,$e,je){if(F===Rn){x===!0&&(he(i.BLEND),x=!1);return}if(x===!1&&(ee(i.BLEND),x=!0),F!==Zc){if(F!==p||je!==y){if((d!==Vn||g!==Vn)&&(i.blendEquation(i.FUNC_ADD),d=Vn,g=Vn),je)switch(F){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,E=null,P=null,T=null,R.set(0,0,0),C=0,p=F,y=je}return}xe=xe||ge,ve=ve||K,ke=ke||re,(ge!==d||xe!==g)&&(i.blendEquationSeparate(De[ge],De[xe]),d=ge,g=xe),(K!==w||re!==E||ve!==P||ke!==T)&&(i.blendFuncSeparate(Ze[K],Ze[re],Ze[ve],Ze[ke]),w=K,E=re,P=ve,T=ke),(Be.equals(R)===!1||$e!==C)&&(i.blendColor(Be.r,Be.g,Be.b,$e),R.copy(Be),C=$e),p=F,y=!1}function I(F,ge){F.side===Ot?he(i.CULL_FACE):ee(i.CULL_FACE);let K=F.side===Dt;ge&&(K=!K),pe(K),F.blending===Mi&&F.transparent===!1?B(Rn):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const re=F.stencilWrite;o.setTest(re),re&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function pe(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function le(F){F!==qc?(ee(i.CULL_FACE),F!==b&&(F===Wa?i.cullFace(i.BACK):F===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),b=F}function ue(F){F!==O&&(Z&&i.lineWidth(F),O=F)}function Ue(F,ge,K){F?(ee(i.POLYGON_OFFSET_FILL),(N!==ge||G!==K)&&(i.polygonOffset(ge,K),N=ge,G=K)):he(i.POLYGON_OFFSET_FILL)}function me(F){F?ee(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function A(F){F===void 0&&(F=i.TEXTURE0+X-1),ie!==F&&(i.activeTexture(F),ie=F)}function _(F,ge,K){K===void 0&&(ie===null?K=i.TEXTURE0+X-1:K=ie);let re=ae[K];re===void 0&&(re={type:void 0,texture:void 0},ae[K]=re),(re.type!==F||re.texture!==ge)&&(ie!==K&&(i.activeTexture(K),ie=K),i.bindTexture(F,ge||W[F]),re.type=F,re.texture=ge)}function H(){const F=ae[ie];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(F){Me.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Me.copy(F))}function Te(F){q.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function Xe(F,ge){let K=l.get(ge);K===void 0&&(K=new WeakMap,l.set(ge,K));let re=K.get(F);re===void 0&&(re=i.getUniformBlockIndex(ge,F.name),K.set(F,re))}function ze(F,ge){const re=l.get(ge).get(F);c.get(ge)!==re&&(i.uniformBlockBinding(ge,re,F.__bindingPointIndex),c.set(ge,re))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,ae={},h={},f=new WeakMap,m=[],v=null,x=!1,p=null,d=null,w=null,E=null,g=null,P=null,T=null,R=new Ve(0,0,0),C=0,y=!1,M=null,b=null,O=null,N=null,G=null,Me.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:he,bindFramebuffer:Se,drawBuffers:Ee,useProgram:Ie,setBlending:B,setMaterial:I,setFlipSided:pe,setCullFace:le,setLineWidth:ue,setPolygonOffset:Ue,setScissorTest:me,activeTexture:A,bindTexture:_,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ne,texImage2D:we,texImage3D:Ne,updateUBOMapping:Xe,uniformBlockBinding:ze,texStorage2D:Oe,texStorage3D:oe,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:de,compressedTexSubImage3D:fe,scissor:Fe,viewport:Te,reset:Qe}}function Go(i,e,t,n){const r=jp(n);switch(t){case hc:return i*e;case pc:return i*e;case mc:return i*e*2;case Aa:return i*e/r.components*r.byteLength;case Ra:return i*e/r.components*r.byteLength;case gc:return i*e*2/r.components*r.byteLength;case Ca:return i*e*2/r.components*r.byteLength;case fc:return i*e*3/r.components*r.byteLength;case en:return i*e*4/r.components*r.byteLength;case Pa:return i*e*4/r.components*r.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qs:case $s:return Math.max(i,16)*Math.max(e,8)/4;case Xs:case Ys:return Math.max(i,8)*Math.max(e,8)/2;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ta:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case la:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Hr:case ha:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _c:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ma:case ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jp(i){switch(i){case vn:case lc:return{byteLength:1,components:1};case tr:case uc:case sr:return{byteLength:2,components:1};case wa:case Ta:return{byteLength:2,components:4};case Yn:case ba:case an:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jp(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return m?new OffscreenCanvas(A,_):Wr("canvas")}function x(A,_,H){let Q=1;const ne=me(A);if((ne.width>H||ne.height>H)&&(Q=H/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(Q*ne.width),be=Math.floor(Q*ne.height);h===void 0&&(h=v(J,be));const de=_?v(J,be):h;return de.width=J,de.height=be,de.getContext("2d").drawImage(A,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+be+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,_,H,Q,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=_;if(_===i.RED&&(H===i.FLOAT&&(J=i.R32F),H===i.HALF_FLOAT&&(J=i.R16F),H===i.UNSIGNED_BYTE&&(J=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.R8UI),H===i.UNSIGNED_SHORT&&(J=i.R16UI),H===i.UNSIGNED_INT&&(J=i.R32UI),H===i.BYTE&&(J=i.R8I),H===i.SHORT&&(J=i.R16I),H===i.INT&&(J=i.R32I)),_===i.RG&&(H===i.FLOAT&&(J=i.RG32F),H===i.HALF_FLOAT&&(J=i.RG16F),H===i.UNSIGNED_BYTE&&(J=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RG8UI),H===i.UNSIGNED_SHORT&&(J=i.RG16UI),H===i.UNSIGNED_INT&&(J=i.RG32UI),H===i.BYTE&&(J=i.RG8I),H===i.SHORT&&(J=i.RG16I),H===i.INT&&(J=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGB8UI),H===i.UNSIGNED_SHORT&&(J=i.RGB16UI),H===i.UNSIGNED_INT&&(J=i.RGB32UI),H===i.BYTE&&(J=i.RGB8I),H===i.SHORT&&(J=i.RGB16I),H===i.INT&&(J=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),H===i.UNSIGNED_INT&&(J=i.RGBA32UI),H===i.BYTE&&(J=i.RGBA8I),H===i.SHORT&&(J=i.RGBA16I),H===i.INT&&(J=i.RGBA32I)),_===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),_===i.RGBA){const be=ne?Zr:Je.getTransfer(Q);H===i.FLOAT&&(J=i.RGBA32F),H===i.HALF_FLOAT&&(J=i.RGBA16F),H===i.UNSIGNED_BYTE&&(J=be===rt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(A,_){let H;return A?_===null||_===Yn||_===Ti?H=i.DEPTH24_STENCIL8:_===an?H=i.DEPTH32F_STENCIL8:_===tr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yn||_===Ti?H=i.DEPTH_COMPONENT24:_===an?H=i.DEPTH_COMPONENT32F:_===tr&&(H=i.DEPTH_COMPONENT16),H}function P(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){const _=A.target;_.removeEventListener("dispose",T),C(_),_.isVideoTexture&&u.delete(_)}function R(A){const _=A.target;_.removeEventListener("dispose",R),M(_)}function C(A){const _=n.get(A);if(_.__webglInit===void 0)return;const H=A.source,Q=f.get(H);if(Q){const ne=Q[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&y(A),Object.keys(Q).length===0&&f.delete(H)}n.remove(A)}function y(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const H=A.source,Q=f.get(H);delete Q[_.__cacheKey],a.memory.textures--}function M(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let ne=0;ne<_.__webglFramebuffer[Q].length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[Q][ne]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=A.textures;for(let Q=0,ne=H.length;Q<ne;Q++){const J=n.get(H[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[Q])}n.remove(A)}let b=0;function O(){b=0}function N(){const A=b;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),b+=1,A}function G(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function X(A,_){const H=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,A,_);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function Z(A,_){const H=n.get(A);if(A.version>0&&H.__version!==A.version){q(H,A,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function j(A,_){const H=n.get(A);if(A.version>0&&H.__version!==A.version){q(H,A,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function L(A,_){const H=n.get(A);if(A.version>0&&H.__version!==A.version){D(H,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}const ie={[Gs]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Ws]:i.MIRRORED_REPEAT},ae={[Bt]:i.NEAREST,[Sl]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ts]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},te={[Tl]:i.NEVER,[Dl]:i.ALWAYS,[Al]:i.LESS,[xc]:i.LEQUAL,[Rl]:i.EQUAL,[Ll]:i.GEQUAL,[Cl]:i.GREATER,[Pl]:i.NOTEQUAL};function se(A,_){if(_.type===an&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===ts||_.magFilter===ur||_.magFilter===Xn||_.minFilter===sn||_.minFilter===ts||_.minFilter===ur||_.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ie[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Bt||_.minFilter!==ur&&_.minFilter!==Xn||_.type===an&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Me(A,_){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));const Q=_.source;let ne=f.get(Q);ne===void 0&&(ne={},f.set(Q,ne));const J=G(_);if(J!==A.__cacheKey){ne[J]===void 0&&(ne[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[J].usedTimes++;const be=ne[A.__cacheKey];be!==void 0&&(ne[A.__cacheKey].usedTimes--,be.usedTimes===0&&y(_)),A.__cacheKey=J,A.__webglTexture=ne[J].texture}return H}function q(A,_,H){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);const ne=Me(A,_),J=_.source;t.bindTexture(Q,A.__webglTexture,i.TEXTURE0+H);const be=n.get(J);if(J.version!==be.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);const de=Je.getPrimaries(Je.workingColorSpace),fe=_.colorSpace===An?null:Je.getPrimaries(_.colorSpace),Oe=_.colorSpace===An||de===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let oe=x(_.image,!1,r.maxTextureSize);oe=Ue(_,oe);const we=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type);let Fe=E(_.internalFormat,we,Ne,_.colorSpace,_.isVideoTexture);se(Q,_);let Te;const Xe=_.mipmaps,ze=_.isVideoTexture!==!0,Qe=be.__version===void 0||ne===!0,F=J.dataReady,ge=P(_,oe);if(_.isDepthTexture)Fe=g(_.format===Ai,_.type),Qe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Fe,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Fe,oe.width,oe.height,0,we,Ne,null));else if(_.isDataTexture)if(Xe.length>0){ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,ge,Fe,Xe[0].width,Xe[0].height);for(let K=0,re=Xe.length;K<re;K++)Te=Xe[K],ze?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Te.width,Te.height,we,Ne,Te.data):t.texImage2D(i.TEXTURE_2D,K,Fe,Te.width,Te.height,0,we,Ne,Te.data);_.generateMipmaps=!1}else ze?(Qe&&t.texStorage2D(i.TEXTURE_2D,ge,Fe,oe.width,oe.height),F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,we,Ne,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,oe.width,oe.height,0,we,Ne,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ze&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Fe,Xe[0].width,Xe[0].height,oe.depth);for(let K=0,re=Xe.length;K<re;K++)if(Te=Xe[K],_.format!==en)if(we!==null)if(ze){if(F)if(_.layerUpdates.size>0){const xe=Go(Te.width,Te.height,_.format,_.type);for(const ve of _.layerUpdates){const ke=Te.data.subarray(ve*xe/Te.data.BYTES_PER_ELEMENT,(ve+1)*xe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,ve,Te.width,Te.height,1,we,ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Te.width,Te.height,oe.depth,we,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Fe,Te.width,Te.height,oe.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Te.width,Te.height,oe.depth,we,Ne,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Fe,Te.width,Te.height,oe.depth,0,we,Ne,Te.data)}else{ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,ge,Fe,Xe[0].width,Xe[0].height);for(let K=0,re=Xe.length;K<re;K++)Te=Xe[K],_.format!==en?we!==null?ze?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Te.width,Te.height,we,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Fe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Te.width,Te.height,we,Ne,Te.data):t.texImage2D(i.TEXTURE_2D,K,Fe,Te.width,Te.height,0,we,Ne,Te.data)}else if(_.isDataArrayTexture)if(ze){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Fe,oe.width,oe.height,oe.depth),F)if(_.layerUpdates.size>0){const K=Go(oe.width,oe.height,_.format,_.type);for(const re of _.layerUpdates){const xe=oe.data.subarray(re*K/oe.data.BYTES_PER_ELEMENT,(re+1)*K/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,we,Ne,xe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,we,Ne,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,we,Ne,oe.data);else if(_.isData3DTexture)ze?(Qe&&t.texStorage3D(i.TEXTURE_3D,ge,Fe,oe.width,oe.height,oe.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,we,Ne,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,we,Ne,oe.data);else if(_.isFramebufferTexture){if(Qe)if(ze)t.texStorage2D(i.TEXTURE_2D,ge,Fe,oe.width,oe.height);else{let K=oe.width,re=oe.height;for(let xe=0;xe<ge;xe++)t.texImage2D(i.TEXTURE_2D,xe,Fe,K,re,0,we,Ne,null),K>>=1,re>>=1}}else if(Xe.length>0){if(ze&&Qe){const K=me(Xe[0]);t.texStorage2D(i.TEXTURE_2D,ge,Fe,K.width,K.height)}for(let K=0,re=Xe.length;K<re;K++)Te=Xe[K],ze?F&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,we,Ne,Te):t.texImage2D(i.TEXTURE_2D,K,Fe,we,Ne,Te);_.generateMipmaps=!1}else if(ze){if(Qe){const K=me(oe);t.texStorage2D(i.TEXTURE_2D,ge,Fe,K.width,K.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ne,oe)}else t.texImage2D(i.TEXTURE_2D,0,Fe,we,Ne,oe);p(_)&&d(Q),be.__version=J.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function D(A,_,H){if(_.image.length!==6)return;const Q=Me(A,_),ne=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const J=n.get(ne);if(ne.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+H);const be=Je.getPrimaries(Je.workingColorSpace),de=_.colorSpace===An?null:Je.getPrimaries(_.colorSpace),fe=_.colorSpace===An||be===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Oe=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,we=[];for(let re=0;re<6;re++)!Oe&&!oe?we[re]=x(_.image[re],!0,r.maxCubemapSize):we[re]=oe?_.image[re].image:_.image[re],we[re]=Ue(_,we[re]);const Ne=we[0],Fe=s.convert(_.format,_.colorSpace),Te=s.convert(_.type),Xe=E(_.internalFormat,Fe,Te,_.colorSpace),ze=_.isVideoTexture!==!0,Qe=J.__version===void 0||Q===!0,F=ne.dataReady;let ge=P(_,Ne);se(i.TEXTURE_CUBE_MAP,_);let K;if(Oe){ze&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Xe,Ne.width,Ne.height);for(let re=0;re<6;re++){K=we[re].mipmaps;for(let xe=0;xe<K.length;xe++){const ve=K[xe];_.format!==en?Fe!==null?ze?F&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,ve.width,ve.height,Fe,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,Xe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,0,0,ve.width,ve.height,Fe,Te,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe,Xe,ve.width,ve.height,0,Fe,Te,ve.data)}}}else{if(K=_.mipmaps,ze&&Qe){K.length>0&&ge++;const re=me(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Xe,re.width,re.height)}for(let re=0;re<6;re++)if(oe){ze?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,we[re].width,we[re].height,Fe,Te,we[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,we[re].width,we[re].height,0,Fe,Te,we[re].data);for(let xe=0;xe<K.length;xe++){const ke=K[xe].image[re].image;ze?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,ke.width,ke.height,Fe,Te,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,Xe,ke.width,ke.height,0,Fe,Te,ke.data)}}else{ze?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,Te,we[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Fe,Te,we[re]);for(let xe=0;xe<K.length;xe++){const ve=K[xe];ze?F&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,0,0,Fe,Te,ve.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe+1,Xe,Fe,Te,ve.image[re])}}}p(_)&&d(i.TEXTURE_CUBE_MAP),J.__version=ne.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function W(A,_,H,Q,ne,J){const be=s.convert(H.format,H.colorSpace),de=s.convert(H.type),fe=E(H.internalFormat,be,de,H.colorSpace),Oe=n.get(_),oe=n.get(H);if(oe.__renderTarget=_,!Oe.__hasExternalTextures){const we=Math.max(1,_.width>>J),Ne=Math.max(1,_.height>>J);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,fe,we,Ne,_.depth,0,be,de,null):t.texImage2D(ne,J,fe,we,Ne,0,be,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ne,oe.__webglTexture,0,pe(_)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ne,oe.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(A,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const Q=_.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,J=g(_.stencilBuffer,ne),be=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=pe(_);le(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,J,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,J,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,A)}else{const Q=_.textures;for(let ne=0;ne<Q.length;ne++){const J=Q[ne],be=s.convert(J.format,J.colorSpace),de=s.convert(J.type),fe=E(J.internalFormat,be,de,J.colorSpace),Oe=pe(_);H&&le(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,fe,_.width,_.height):le(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,fe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,fe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const ne=Q.__webglTexture,J=pe(_);if(_.depthTexture.format===yi)le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(_.depthTexture.format===Ai)le(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Se(A){const _=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Q}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");he(_.__webglFramebuffer,A)}else if(H){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),ee(_.__webglDepthbuffer[Q],A,!1);else{const ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ee(_.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(A,_,H){const Q=n.get(A);_!==void 0&&W(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Se(A)}function Ie(A){const _=A.texture,H=n.get(A),Q=n.get(_);A.addEventListener("dispose",R);const ne=A.textures,J=A.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let fe=0;fe<_.mipmaps.length;fe++)H.__webglFramebuffer[de][fe]=i.createFramebuffer()}else H.__webglFramebuffer[de]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)H.__webglFramebuffer[de]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(be)for(let de=0,fe=ne.length;de<fe;de++){const Oe=n.get(ne[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&le(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const fe=ne[de];H.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Oe=s.convert(fe.format,fe.colorSpace),oe=s.convert(fe.type),we=E(fe.internalFormat,Oe,oe,fe.colorSpace,A.isXRRenderTarget===!0),Ne=pe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,we,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,H.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),se(i.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)W(H.__webglFramebuffer[de][fe],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,fe);else W(H.__webglFramebuffer[de],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,fe=ne.length;de<fe;de++){const Oe=ne[de],oe=n.get(Oe);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),se(i.TEXTURE_2D,Oe),W(H.__webglFramebuffer,A,Oe,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),p(Oe)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),se(de,_),_.mipmaps&&_.mipmaps.length>0)for(let fe=0;fe<_.mipmaps.length;fe++)W(H.__webglFramebuffer[fe],A,_,i.COLOR_ATTACHMENT0,de,fe);else W(H.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,de,0);p(_)&&d(de),t.unbindTexture()}A.depthBuffer&&Se(A)}function De(A){const _=A.textures;for(let H=0,Q=_.length;H<Q;H++){const ne=_[H];if(p(ne)){const J=w(A),be=n.get(ne).__webglTexture;t.bindTexture(J,be),d(J),t.unbindTexture()}}}const Ze=[],B=[];function I(A){if(A.samples>0){if(le(A)===!1){const _=A.textures,H=A.width,Q=A.height;let ne=i.COLOR_BUFFER_BIT;const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(A),de=_.length>1;if(de)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const Oe=n.get(_[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,ne,i.NEAREST),c===!0&&(Ze.length=0,B.length=0,Ze.push(i.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(J),B.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const Oe=n.get(_[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function pe(A){return Math.min(r.maxSamples,A.samples)}function le(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ue(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Ue(A,_){const H=A.colorSpace,Q=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Li&&H!==An&&(Je.getTransfer(H)===rt?(Q!==en||ne!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}function me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=L,this.rebindTextures=Ee,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=W,this.useMultisampledRTT=le}function Qp(i,e){function t(n,r=An){let s;const a=Je.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.BYTE;if(n===uc)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===ba)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===sr)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===fc)return i.RGB;if(n===en)return i.RGBA;if(n===pc)return i.LUMINANCE;if(n===mc)return i.LUMINANCE_ALPHA;if(n===yi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Aa)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===gc)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===Or||n===Br||n===zr||n===kr)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xs||n===qs||n===Ys||n===$s)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$s)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zs||n===Ks||n===js)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Zs||n===Ks)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===js)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa||n===ca||n===la||n===ua||n===da)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Js)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qs)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ea)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ta)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ra)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ca)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===la)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ua)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hr||n===ha||n===fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Hr)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===pa||n===ma||n===ga)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class em extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),d=this._getHandJoint(l,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new wt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:nm,fragmentShader:im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sm extends Di{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,v=null;const x=new rm,p=t.getContextAttributes();let d=null,w=null;const E=[],g=[],P=new Ye;let T=null;const R=new Wt;R.viewport=new ut;const C=new Wt;C.viewport=new ut;const y=[R,C],M=new em;let b=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let D=E[q];return D===void 0&&(D=new Rs,E[q]=D),D.getTargetRaySpace()},this.getControllerGrip=function(q){let D=E[q];return D===void 0&&(D=new Rs,E[q]=D),D.getGripSpace()},this.getHand=function(q){let D=E[q];return D===void 0&&(D=new Rs,E[q]=D),D.getHandSpace()};function N(q){const D=g.indexOf(q.inputSource);if(D===-1)return;const W=E[D];W!==void 0&&(W.update(q.inputSource,q.frame,l||a),W.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",X);for(let q=0;q<E.length;q++){const D=g[q];D!==null&&(g[q]=null,E[q].disconnect(D))}b=null,O=null,x.reset(),e.setRenderTarget(d),m=null,f=null,h=null,r=null,w=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",G),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const D={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,D),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new $n(m.framebufferWidth,m.framebufferHeight,{format:en,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let D=null,W=null,ee=null;p.depth&&(ee=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=p.stencil?Ai:yi,W=p.stencil?Ti:Yn);const he={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new $n(f.textureWidth,f.textureHeight,{format:en,type:vn,depthTexture:new Dc(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Me.setContext(r),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(q){for(let D=0;D<q.removed.length;D++){const W=q.removed[D],ee=g.indexOf(W);ee>=0&&(g[ee]=null,E[ee].disconnect(W))}for(let D=0;D<q.added.length;D++){const W=q.added[D];let ee=g.indexOf(W);if(ee===-1){for(let Se=0;Se<E.length;Se++)if(Se>=g.length){g.push(W),ee=Se;break}else if(g[Se]===null){g[Se]=W,ee=Se;break}if(ee===-1)break}const he=E[ee];he&&he.connect(W)}}const Z=new V,j=new V;function L(q,D,W){Z.setFromMatrixPosition(D.matrixWorld),j.setFromMatrixPosition(W.matrixWorld);const ee=Z.distanceTo(j),he=D.projectionMatrix.elements,Se=W.projectionMatrix.elements,Ee=he[14]/(he[10]-1),Ie=he[14]/(he[10]+1),De=(he[9]+1)/he[5],Ze=(he[9]-1)/he[5],B=(he[8]-1)/he[0],I=(Se[8]+1)/Se[0],pe=Ee*B,le=Ee*I,ue=ee/(-B+I),Ue=ue*-B;if(D.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(ue),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),he[10]===-1)q.projectionMatrix.copy(D.projectionMatrix),q.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{const me=Ee+ue,A=Ie+ue,_=pe-Ue,H=le+(ee-Ue),Q=De*Ie/A*me,ne=Ze*Ie/A*me;q.projectionMatrix.makePerspective(_,H,Q,ne,me,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,D){D===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(D.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let D=q.near,W=q.far;x.texture!==null&&(x.depthNear>0&&(D=x.depthNear),x.depthFar>0&&(W=x.depthFar)),M.near=C.near=R.near=D,M.far=C.far=R.far=W,(b!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,O=M.far),R.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;const ee=q.parent,he=M.cameras;ie(M,ee);for(let Se=0;Se<he.length;Se++)ie(he[Se],ee);he.length===2?L(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),ae(q,M,ee)};function ae(q,D,W){W===null?q.matrix.copy(D.matrixWorld):(q.matrix.copy(W.matrixWorld),q.matrix.invert(),q.matrix.multiply(D.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(D.projectionMatrix),q.projectionMatrixInverse.copy(D.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=nr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let te=null;function se(q,D){if(u=D.getViewerPose(l||a),v=D,u!==null){const W=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ee=!1;W.length!==M.cameras.length&&(M.cameras.length=0,ee=!0);for(let Se=0;Se<W.length;Se++){const Ee=W[Se];let Ie=null;if(m!==null)Ie=m.getViewport(Ee);else{const Ze=h.getViewSubImage(f,Ee);Ie=Ze.viewport,Se===0&&(e.setRenderTargetTextures(w,Ze.colorTexture,f.ignoreDepthValues?void 0:Ze.depthStencilTexture),e.setRenderTarget(w))}let De=y[Se];De===void 0&&(De=new Wt,De.layers.enable(Se),De.viewport=new ut,y[Se]=De),De.matrix.fromArray(Ee.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Ee.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Se===0&&(M.matrix.copy(De.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ee===!0&&M.cameras.push(De)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")){const Se=h.getDepthInformation(W[0]);Se&&Se.isValid&&Se.texture&&x.init(e,Se,r.renderState)}}for(let W=0;W<E.length;W++){const ee=g[W],he=E[W];ee!==null&&he!==void 0&&he.update(ee,D,l||a)}te&&te(q,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),v=null}const Me=new Pc;Me.setAnimationLoop(se),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}}const Bn=new on,am=new at;function om(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Ac(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,E,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,g)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,w,E):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Dt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Dt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),E=w.envMap,g=w.envMapRotation;E&&(p.envMap.value=E,Bn.copy(g),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),p.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(Bn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,w,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function cm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const g=E.program;n.uniformBlockBinding(w,g)}function l(w,E){let g=r[w.id];g===void 0&&(v(w),g=u(w),r[w.id]=g,w.addEventListener("dispose",p));const P=E.program;n.updateUBOMapping(w,P);const T=e.render.frame;s[w.id]!==T&&(f(w),s[w.id]=T)}function u(w){const E=h();w.__bindingPointIndex=E;const g=i.createBuffer(),P=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,g),g}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const E=r[w.id],g=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,R=g.length;T<R;T++){const C=Array.isArray(g[T])?g[T]:[g[T]];for(let y=0,M=C.length;y<M;y++){const b=C[y];if(m(b,T,y,P)===!0){const O=b.__offset,N=Array.isArray(b.value)?b.value:[b.value];let G=0;for(let X=0;X<N.length;X++){const Z=N[X],j=x(Z);typeof Z=="number"||typeof Z=="boolean"?(b.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,O+G,b.__data)):Z.isMatrix3?(b.__data[0]=Z.elements[0],b.__data[1]=Z.elements[1],b.__data[2]=Z.elements[2],b.__data[3]=0,b.__data[4]=Z.elements[3],b.__data[5]=Z.elements[4],b.__data[6]=Z.elements[5],b.__data[7]=0,b.__data[8]=Z.elements[6],b.__data[9]=Z.elements[7],b.__data[10]=Z.elements[8],b.__data[11]=0):(Z.toArray(b.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,E,g,P){const T=w.value,R=E+"_"+g;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{const C=P[R];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return P[R]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function v(w){const E=w.uniforms;let g=0;const P=16;for(let R=0,C=E.length;R<C;R++){const y=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,b=y.length;M<b;M++){const O=y[M],N=Array.isArray(O.value)?O.value:[O.value];for(let G=0,X=N.length;G<X;G++){const Z=N[G],j=x(Z),L=g%P,ie=L%j.boundary,ae=L+ie;g+=ie,ae!==0&&P-ae<j.storage&&(g+=P-ae),O.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=g,g+=j.storage}}}const T=g%P;return T>0&&(g+=P-T),w.__size=g,w.__cache={},this}function x(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function p(w){const E=w.target;E.removeEventListener("dispose",p);const g=a.indexOf(E.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class lm{constructor(e={}){const{canvas:t=Zl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=Cn,this.toneMappingExposure=1;const g=this;let P=!1,T=0,R=0,C=null,y=-1,M=null;const b=new ut,O=new ut;let N=null;const G=new Ve(0);let X=0,Z=t.width,j=t.height,L=1,ie=null,ae=null;const te=new ut(0,0,Z,j),se=new ut(0,0,Z,j);let Me=!1;const q=new Da;let D=!1,W=!1;const ee=new at,he=new at,Se=new V,Ee=new ut,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ze(){return C===null?L:1}let B=n;function I(S,z){return t.getContext(S,z)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sa}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),B===null){const z="webgl2";if(B=I(z,S),B===null)throw I(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let pe,le,ue,Ue,me,A,_,H,Q,ne,J,be,de,fe,Oe,oe,we,Ne,Fe,Te,Xe,ze,Qe,F;function ge(){pe=new pf(B),pe.init(),ze=new Qp(B,pe),le=new cf(B,pe,e,ze),ue=new Kp(B,pe),le.reverseDepthBuffer&&f&&ue.buffers.depth.setReversed(!0),Ue=new _f(B),me=new Np,A=new Jp(B,pe,ue,me,le,ze,Ue),_=new uf(g),H=new ff(g),Q=new Eu(B),Qe=new af(B,Q),ne=new mf(B,Q,Ue,Qe),J=new xf(B,ne,Q,Ue),Fe=new vf(B,le,A),oe=new lf(me),be=new Up(g,_,H,pe,le,Qe,oe),de=new om(g,me),fe=new Op,Oe=new Gp(pe),Ne=new sf(g,_,H,ue,J,m,c),we=new $p(g,J,le),F=new cm(B,Ue,le,ue),Te=new of(B,pe,Ue),Xe=new gf(B,pe,Ue),Ue.programs=be.programs,g.capabilities=le,g.extensions=pe,g.properties=me,g.renderLists=fe,g.shadowMap=we,g.state=ue,g.info=Ue}ge();const K=new sm(g,B);this.xr=K,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=pe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=pe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(S){S!==void 0&&(L=S,this.setSize(Z,j,!1))},this.getSize=function(S){return S.set(Z,j)},this.setSize=function(S,z,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=S,j=z,t.width=Math.floor(S*L),t.height=Math.floor(z*L),Y===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(Z*L,j*L).floor()},this.setDrawingBufferSize=function(S,z,Y){Z=S,j=z,L=Y,t.width=Math.floor(S*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,z,Y,$){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,z,Y,$),ue.viewport(b.copy(te).multiplyScalar(L).round())},this.getScissor=function(S){return S.copy(se)},this.setScissor=function(S,z,Y,$){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,z,Y,$),ue.scissor(O.copy(se).multiplyScalar(L).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(S){ue.setScissorTest(Me=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(S=!0,z=!0,Y=!0){let $=0;if(S){let k=!1;if(C!==null){const ce=C.texture.format;k=ce===Pa||ce===Ca||ce===Ra}if(k){const ce=C.texture.type,ye=ce===vn||ce===Yn||ce===tr||ce===Ti||ce===wa||ce===Ta,Ae=Ne.getClearColor(),Re=Ne.getClearAlpha(),He=Ae.r,Ge=Ae.g,Ce=Ae.b;ye?(v[0]=He,v[1]=Ge,v[2]=Ce,v[3]=Re,B.clearBufferuiv(B.COLOR,0,v)):(x[0]=He,x[1]=Ge,x[2]=Ce,x[3]=Re,B.clearBufferiv(B.COLOR,0,x))}else $|=B.COLOR_BUFFER_BIT}z&&($|=B.DEPTH_BUFFER_BIT),Y&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),fe.dispose(),Oe.dispose(),me.dispose(),_.dispose(),H.dispose(),J.dispose(),Qe.dispose(),F.dispose(),be.dispose(),K.dispose(),K.removeEventListener("sessionstart",Fi),K.removeEventListener("sessionend",Oa),Dn.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=Ue.autoReset,z=we.enabled,Y=we.autoUpdate,$=we.needsUpdate,k=we.type;ge(),Ue.autoReset=S,we.enabled=z,we.autoUpdate=Y,we.needsUpdate=$,we.type=k}function ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ke(S){const z=S.target;z.removeEventListener("dispose",ke),Be(z)}function Be(S){$e(S),me.remove(S)}function $e(S){const z=me.get(S).programs;z!==void 0&&(z.forEach(function(Y){be.releaseProgram(Y)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,Y,$,k,ce){z===null&&(z=Ie);const ye=k.isMesh&&k.matrixWorld.determinant()<0,Ae=Gc(S,z,Y,$,k);ue.setMaterial($,ye);let Re=Y.index,He=1;if($.wireframe===!0){if(Re=ne.getWireframeAttribute(Y),Re===void 0)return;He=2}const Ge=Y.drawRange,Ce=Y.attributes.position;let et=Ge.start*He,st=(Ge.start+Ge.count)*He;ce!==null&&(et=Math.max(et,ce.start*He),st=Math.min(st,(ce.start+ce.count)*He)),Re!==null?(et=Math.max(et,0),st=Math.min(st,Re.count)):Ce!=null&&(et=Math.max(et,0),st=Math.min(st,Ce.count));const ot=st-et;if(ot<0||ot===1/0)return;Qe.setup(k,$,Ae,Y,Re);let Pt,tt=Te;if(Re!==null&&(Pt=Q.get(Re),tt=Xe,tt.setIndex(Pt)),k.isMesh)$.wireframe===!0?(ue.setLineWidth($.wireframeLinewidth*Ze()),tt.setMode(B.LINES)):tt.setMode(B.TRIANGLES);else if(k.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),ue.setLineWidth(Le*Ze()),k.isLineSegments?tt.setMode(B.LINES):k.isLineLoop?tt.setMode(B.LINE_LOOP):tt.setMode(B.LINE_STRIP)}else k.isPoints?tt.setMode(B.POINTS):k.isSprite&&tt.setMode(B.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Le=k._multiDrawStarts,cn=k._multiDrawCounts,nt=k._multiDrawCount,Yt=Re?Q.get(Re).bytesPerElement:1,Kn=me.get($).currentProgram.getUniforms();for(let Ut=0;Ut<nt;Ut++)Kn.setValue(B,"_gl_DrawID",Ut),tt.render(Le[Ut]/Yt,cn[Ut])}else if(k.isInstancedMesh)tt.renderInstances(et,ot,k.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,cn=Math.min(Y.instanceCount,Le);tt.renderInstances(et,ot,cn)}else tt.render(et,ot)};function je(S,z,Y){S.transparent===!0&&S.side===Ot&&S.forceSinglePass===!1?(S.side=Dt,S.needsUpdate=!0,lr(S,z,Y),S.side=Pn,S.needsUpdate=!0,lr(S,z,Y),S.side=Ot):lr(S,z,Y)}this.compile=function(S,z,Y=null){Y===null&&(Y=S),d=Oe.get(Y),d.init(z),E.push(d),Y.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),S!==Y&&S.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const $=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ce=k.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const Ae=ce[ye];je(Ae,Y,k),$.add(Ae)}else je(ce,Y,k),$.add(ce)}),E.pop(),d=null,$},this.compileAsync=function(S,z,Y=null){const $=this.compile(S,z,Y);return new Promise(k=>{function ce(){if($.forEach(function(ye){me.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){k(S);return}setTimeout(ce,10)}pe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Tt=null;function It(S){Tt&&Tt(S)}function Fi(){Dn.stop()}function Oa(){Dn.start()}const Dn=new Pc;Dn.setAnimationLoop(It),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(S){Tt=S,K.setAnimationLoop(S),S===null?Dn.stop():Dn.start()},K.addEventListener("sessionstart",Fi),K.addEventListener("sessionend",Oa),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,z,C),d=Oe.get(S,E.length),d.init(z),E.push(d),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(he),W=this.localClippingEnabled,D=oe.init(this.clippingPlanes,W),p=fe.get(S,w.length),p.init(),w.push(p),K.enabled===!0&&K.isPresenting===!0){const ce=g.xr.getDepthSensingMesh();ce!==null&&es(ce,z,-1/0,g.sortObjects)}es(S,z,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(ie,ae),De=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,De&&Ne.addToRenderList(p,S),this.info.render.frame++,D===!0&&oe.beginShadows();const Y=d.state.shadowsArray;we.render(Y,S,z),D===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,k=p.transmissive;if(d.setupLights(),z.isArrayCamera){const ce=z.cameras;if(k.length>0)for(let ye=0,Ae=ce.length;ye<Ae;ye++){const Re=ce[ye];za($,k,S,Re)}De&&Ne.render(S);for(let ye=0,Ae=ce.length;ye<Ae;ye++){const Re=ce[ye];Ba(p,S,Re,Re.viewport)}}else k.length>0&&za($,k,S,z),De&&Ne.render(S),Ba(p,S,z);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(g,S,z),Qe.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(d=E[E.length-1],D===!0&&oe.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function es(S,z,Y,$){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){$&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);const ye=J.update(S),Ae=S.material;Ae.visible&&p.push(S,ye,Ae,Y,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const ye=J.update(S),Ae=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ee.copy(ye.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(he)),Array.isArray(Ae)){const Re=ye.groups;for(let He=0,Ge=Re.length;He<Ge;He++){const Ce=Re[He],et=Ae[Ce.materialIndex];et&&et.visible&&p.push(S,ye,et,Y,Ee.z,Ce)}}else Ae.visible&&p.push(S,ye,Ae,Y,Ee.z,null)}}const ce=S.children;for(let ye=0,Ae=ce.length;ye<Ae;ye++)es(ce[ye],z,Y,$)}function Ba(S,z,Y,$){const k=S.opaque,ce=S.transmissive,ye=S.transparent;d.setupLightsView(Y),D===!0&&oe.setGlobalState(g.clippingPlanes,Y),$&&ue.viewport(b.copy($)),k.length>0&&cr(k,z,Y),ce.length>0&&cr(ce,z,Y),ye.length>0&&cr(ye,z,Y),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function za(S,z,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new $n(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?sr:vn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=d.state.transmissionRenderTarget[$.id],ye=$.viewport||b;ce.setSize(ye.z,ye.w);const Ae=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(G),X=g.getClearAlpha(),X<1&&g.setClearColor(16777215,.5),g.clear(),De&&Ne.render(Y);const Re=g.toneMapping;g.toneMapping=Cn;const He=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),D===!0&&oe.setGlobalState(g.clippingPlanes,$),cr(S,Y,$),A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ce=0,et=z.length;Ce<et;Ce++){const st=z[Ce],ot=st.object,Pt=st.geometry,tt=st.material,Le=st.group;if(tt.side===Ot&&ot.layers.test($.layers)){const cn=tt.side;tt.side=Dt,tt.needsUpdate=!0,ka(ot,Y,$,Pt,tt,Le),tt.side=cn,tt.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(ce),A.updateRenderTargetMipmap(ce))}g.setRenderTarget(Ae),g.setClearColor(G,X),He!==void 0&&($.viewport=He),g.toneMapping=Re}function cr(S,z,Y){const $=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ce=S.length;k<ce;k++){const ye=S[k],Ae=ye.object,Re=ye.geometry,He=$===null?ye.material:$,Ge=ye.group;Ae.layers.test(Y.layers)&&ka(Ae,z,Y,Re,He,Ge)}}function ka(S,z,Y,$,k,ce){S.onBeforeRender(g,z,Y,$,k,ce),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(g,z,Y,$,S,ce),k.transparent===!0&&k.side===Ot&&k.forceSinglePass===!1?(k.side=Dt,k.needsUpdate=!0,g.renderBufferDirect(Y,z,$,k,S,ce),k.side=Pn,k.needsUpdate=!0,g.renderBufferDirect(Y,z,$,k,S,ce),k.side=Ot):g.renderBufferDirect(Y,z,$,k,S,ce),S.onAfterRender(g,z,Y,$,k,ce)}function lr(S,z,Y){z.isScene!==!0&&(z=Ie);const $=me.get(S),k=d.state.lights,ce=d.state.shadowsArray,ye=k.state.version,Ae=be.getParameters(S,k.state,ce,z,Y),Re=be.getProgramCacheKey(Ae);let He=$.programs;$.environment=S.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(S.isMeshStandardMaterial?H:_).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,He===void 0&&(S.addEventListener("dispose",ke),He=new Map,$.programs=He);let Ge=He.get(Re);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===ye)return Va(S,Ae),Ge}else Ae.uniforms=be.getUniforms(S),S.onBeforeCompile(Ae,g),Ge=be.acquireProgram(Ae,Re),He.set(Re,Ge),$.uniforms=Ae.uniforms;const Ce=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=oe.uniform),Va(S,Ae),$.needsLights=Xc(S),$.lightsStateVersion=ye,$.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function Ha(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Vr.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Va(S,z){const Y=me.get(S);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function Gc(S,z,Y,$,k){z.isScene!==!0&&(z=Ie),A.resetTextureUnits();const ce=z.fog,ye=$.isMeshStandardMaterial?z.environment:null,Ae=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Li,Re=($.isMeshStandardMaterial?H:_).get($.envMap||ye),He=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,st=!!Y.morphAttributes.color;let ot=Cn;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ot=g.toneMapping);const Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=Pt!==void 0?Pt.length:0,Le=me.get($),cn=d.state.lights;if(D===!0&&(W===!0||S!==M)){const kt=S===M&&$.id===y;oe.setState($,S,kt)}let nt=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==cn.state.version||Le.outputColorSpace!==Ae||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==Re||$.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==He||Le.vertexTangents!==Ge||Le.morphTargets!==Ce||Le.morphNormals!==et||Le.morphColors!==st||Le.toneMapping!==ot||Le.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Le.__version=$.version);let Yt=Le.currentProgram;nt===!0&&(Yt=lr($,z,k));let Kn=!1,Ut=!1,Oi=!1;const ct=Yt.getUniforms(),tn=Le.uniforms;if(ue.useProgram(Yt.program)&&(Kn=!0,Ut=!0,Oi=!0),$.id!==y&&(y=$.id,Ut=!0),Kn||M!==S){ue.buffers.depth.getReversed()?(ee.copy(S.projectionMatrix),jl(ee),Jl(ee),ct.setValue(B,"projectionMatrix",ee)):ct.setValue(B,"projectionMatrix",S.projectionMatrix),ct.setValue(B,"viewMatrix",S.matrixWorldInverse);const xn=ct.map.cameraPosition;xn!==void 0&&xn.setValue(B,Se.setFromMatrixPosition(S.matrixWorld)),le.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ct.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ut=!0,Oi=!0)}if(k.isSkinnedMesh){ct.setOptional(B,k,"bindMatrix"),ct.setOptional(B,k,"bindMatrixInverse");const kt=k.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ct.setValue(B,"boneTexture",kt.boneTexture,A))}k.isBatchedMesh&&(ct.setOptional(B,k,"batchingTexture"),ct.setValue(B,"batchingTexture",k._matricesTexture,A),ct.setOptional(B,k,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",k._indirectTexture,A),ct.setOptional(B,k,"batchingColorTexture"),k._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",k._colorsTexture,A));const Bi=Y.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&Fe.update(k,Y,Yt),(Ut||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,ct.setValue(B,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(tn.envMap.value=Re,tn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),Ut&&(ct.setValue(B,"toneMappingExposure",g.toneMappingExposure),Le.needsLights&&Wc(tn,Oi),ce&&$.fog===!0&&de.refreshFogUniforms(tn,ce),de.refreshMaterialUniforms(tn,$,L,j,d.state.transmissionRenderTarget[S.id]),Vr.upload(B,Ha(Le),tn,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Vr.upload(B,Ha(Le),tn,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ct.setValue(B,"center",k.center),ct.setValue(B,"modelViewMatrix",k.modelViewMatrix),ct.setValue(B,"normalMatrix",k.normalMatrix),ct.setValue(B,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const kt=$.uniformsGroups;for(let xn=0,Mn=kt.length;xn<Mn;xn++){const Ga=kt[xn];F.update(Ga,Yt),F.bind(Ga,Yt)}}return Yt}function Wc(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Xc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,z,Y){me.get(S.texture).__webglTexture=z,me.get(S.depthTexture).__webglTexture=Y;const $=me.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,z){const Y=me.get(S);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,Y=0){C=S,T=z,R=Y;let $=!0,k=null,ce=!1,ye=!1;if(S){const Re=me.get(S);if(Re.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(Re.__hasExternalTextures)A.rebindTextures(S,me.get(S.texture).__webglTexture,me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ce=S.depthTexture;if(Re.__boundDepthTexture!==Ce){if(Ce!==null&&me.has(Ce)&&(S.width!==Ce.image.width||S.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const Ge=me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?k=Ge[z][Y]:k=Ge[z],ce=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?k=me.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[Y]:k=Ge,b.copy(S.viewport),O.copy(S.scissor),N=S.scissorTest}else b.copy(te).multiplyScalar(L).floor(),O.copy(se).multiplyScalar(L).floor(),N=Me;if(ue.bindFramebuffer(B.FRAMEBUFFER,k)&&$&&ue.drawBuffers(S,k),ue.viewport(b),ue.scissor(O),ue.setScissorTest(N),ce){const Re=me.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,Y)}else if(ye){const Re=me.get(S.texture),He=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,He)}y=-1},this.readRenderTargetPixels=function(S,z,Y,$,k,ce,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){ue.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const Re=S.texture,He=Re.format,Ge=Re.type;if(!le.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-$&&Y>=0&&Y<=S.height-k&&B.readPixels(z,Y,$,k,ze.convert(He),ze.convert(Ge),ce)}finally{const Re=C!==null?me.get(C).__webglFramebuffer:null;ue.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,z,Y,$,k,ce,ye){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){const Re=S.texture,He=Re.format,Ge=Re.type;if(!le.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=S.width-$&&Y>=0&&Y<=S.height-k){ue.bindFramebuffer(B.FRAMEBUFFER,Ae);const Ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.bufferData(B.PIXEL_PACK_BUFFER,ce.byteLength,B.STREAM_READ),B.readPixels(z,Y,$,k,ze.convert(He),ze.convert(Ge),0);const et=C!==null?me.get(C).__webglFramebuffer:null;ue.bindFramebuffer(B.FRAMEBUFFER,et);const st=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Kl(B,st,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ce),B.deleteBuffer(Ce),B.deleteSync(st),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,z=null,Y=0){S.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1]);const $=Math.pow(2,-Y),k=Math.floor(S.image.width*$),ce=Math.floor(S.image.height*$),ye=z!==null?z.x:0,Ae=z!==null?z.y:0;A.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,ye,Ae,k,ce),ue.unbindTexture()},this.copyTextureToTexture=function(S,z,Y=null,$=null,k=0){S.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,S=arguments[1],z=arguments[2],k=arguments[3]||0,Y=null);let ce,ye,Ae,Re,He,Ge,Ce,et,st;const ot=S.isCompressedTexture?S.mipmaps[k]:S.image;Y!==null?(ce=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Re=Y.min.x,He=Y.min.y,Ge=Y.isBox3?Y.min.z:0):(ce=ot.width,ye=ot.height,Ae=ot.depth||1,Re=0,He=0,Ge=0),$!==null?(Ce=$.x,et=$.y,st=$.z):(Ce=0,et=0,st=0);const Pt=ze.convert(z.format),tt=ze.convert(z.type);let Le;z.isData3DTexture?(A.setTexture3D(z,0),Le=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(A.setTexture2DArray(z,0),Le=B.TEXTURE_2D_ARRAY):(A.setTexture2D(z,0),Le=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const cn=B.getParameter(B.UNPACK_ROW_LENGTH),nt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yt=B.getParameter(B.UNPACK_SKIP_PIXELS),Kn=B.getParameter(B.UNPACK_SKIP_ROWS),Ut=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Re),B.pixelStorei(B.UNPACK_SKIP_ROWS,He),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ge);const Oi=S.isDataArrayTexture||S.isData3DTexture,ct=z.isDataArrayTexture||z.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const tn=me.get(S),Bi=me.get(z),kt=me.get(tn.__renderTarget),xn=me.get(Bi.__renderTarget);ue.bindFramebuffer(B.READ_FRAMEBUFFER,kt.__webglFramebuffer),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Mn=0;Mn<Ae;Mn++)Oi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.get(S).__webglTexture,k,Ge+Mn),S.isDepthTexture?(ct&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,me.get(z).__webglTexture,k,st+Mn),B.blitFramebuffer(Re,He,ce,ye,Ce,et,ce,ye,B.DEPTH_BUFFER_BIT,B.NEAREST)):ct?B.copyTexSubImage3D(Le,k,Ce,et,st+Mn,Re,He,ce,ye):B.copyTexSubImage2D(Le,k,Ce,et,st+Mn,Re,He,ce,ye);ue.bindFramebuffer(B.READ_FRAMEBUFFER,null),ue.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Le,k,Ce,et,st,ce,ye,Ae,Pt,tt,ot.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,k,Ce,et,st,ce,ye,Ae,Pt,ot.data):B.texSubImage3D(Le,k,Ce,et,st,ce,ye,Ae,Pt,tt,ot):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,k,Ce,et,ce,ye,Pt,tt,ot.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,k,Ce,et,ot.width,ot.height,Pt,ot.data):B.texSubImage2D(B.TEXTURE_2D,k,Ce,et,ce,ye,Pt,tt,ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,cn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Kn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ut),k===0&&z.generateMipmaps&&B.generateMipmap(Le),ue.unbindTexture()},this.copyTextureToTexture3D=function(S,z,Y=null,$=null,k=0){return S.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,S=arguments[2],z=arguments[3],k=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,z,Y,$,k)},this.initRenderTarget=function(S){me.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),ue.unbindTexture()},this.resetState=function(){T=0,R=0,C=null,ue.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Ua{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new Ua(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class um extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class dm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_a,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const At=new V;class Xr{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Oc extends Ui{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let di;const Gi=new V,hi=new V,fi=new V,pi=new Ye,Wi=new Ye,Bc=new at,Lr=new V,Xi=new V,Dr=new V,Wo=new Ye,Cs=new Ye,Xo=new Ye;class hm extends _t{constructor(e=new Oc){if(super(),this.isSprite=!0,this.type="Sprite",di===void 0){di=new zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dm(t,5);di.setIndex([0,1,2,0,2,3]),di.setAttribute("position",new Xr(n,3,0,!1)),di.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=di,this.material=e,this.center=new Ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),Bc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-fi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Ir(Lr.set(-.5,-.5,0),fi,a,hi,r,s),Ir(Xi.set(.5,-.5,0),fi,a,hi,r,s),Ir(Dr.set(.5,.5,0),fi,a,hi,r,s),Wo.set(0,0),Cs.set(1,0),Xo.set(1,1);let o=e.ray.intersectTriangle(Lr,Xi,Dr,!1,Gi);if(o===null&&(Ir(Xi.set(-.5,.5,0),fi,a,hi,r,s),Cs.set(0,1),o=e.ray.intersectTriangle(Lr,Dr,Xi,!1,Gi),o===null))return;const c=e.ray.origin.distanceTo(Gi);c<e.near||c>e.far||t.push({distance:c,point:Gi.clone(),uv:Xt.getInterpolation(Gi,Lr,Xi,Dr,Wo,Cs,Xo,new Ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ir(i,e,t,n,r,s){pi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Wi.x=s*pi.x-r*pi.y,Wi.y=r*pi.x+s*pi.y):Wi.copy(pi),i.copy(e),i.x+=Wi.x,i.y+=Wi.y,i.applyMatrix4(Bc)}class fm extends wt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Bt,u=Bt,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xa extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mi=new at,qo=new at,Ur=[],Yo=new Zn,pm=new at,qi=new Ke,Yi=new Ii;class mm extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,pm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Yo.copy(e.boundingBox).applyMatrix4(mi),this.boundingBox.union(Yo)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,mi),Yi.copy(e.boundingSphere).applyMatrix4(mi),this.boundingSphere.union(Yi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yi.copy(this.boundingSphere),Yi.applyMatrix4(n),e.ray.intersectsSphere(Yi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,mi),qo.multiplyMatrices(n,mi),qi.matrixWorld=qo,qi.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){const c=Ur[a];c.instanceId=s,c.object=this,t.push(c)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new fm(new Float32Array(r*this.count),r,this.count,Aa,an));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class gm extends wt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ir extends zt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new V,u=new Ye;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qn extends zt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let v=0;const x=[],p=n/2;let d=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(m,2));function w(){const g=new V,P=new V;let T=0;const R=(t-e)/n;for(let C=0;C<=s;C++){const y=[],M=C/s,b=M*(t-e)+e;for(let O=0;O<=r;O++){const N=O/r,G=N*c+o,X=Math.sin(G),Z=Math.cos(G);P.x=b*X,P.y=-M*n+p,P.z=b*Z,h.push(P.x,P.y,P.z),g.set(X,R,Z).normalize(),f.push(g.x,g.y,g.z),m.push(N,1-M),y.push(v++)}x.push(y)}for(let C=0;C<r;C++)for(let y=0;y<s;y++){const M=x[y][C],b=x[y+1][C],O=x[y+1][C+1],N=x[y][C+1];(e>0||y!==0)&&(u.push(M,b,N),T+=3),(t>0||y!==s-1)&&(u.push(b,O,N),T+=3)}l.addGroup(d,T,0),d+=T}function E(g){const P=v,T=new Ye,R=new V;let C=0;const y=g===!0?e:t,M=g===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,p*M,0),f.push(0,M,0),m.push(.5,.5),v++;const b=v;for(let O=0;O<=r;O++){const G=O/r*c+o,X=Math.cos(G),Z=Math.sin(G);R.x=y*Z,R.y=p*M,R.z=y*X,h.push(R.x,R.y,R.z),f.push(0,M,0),T.x=X*.5+.5,T.y=Z*.5*M+.5,m.push(T.x,T.y),v++}for(let O=0;O<r;O++){const N=P+O,G=b+O;g===!0?u.push(G,G+1,N):u.push(G+1,G,N),C+=3}l.addGroup(d,C,g===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pi extends zt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/r,m=new V,v=new Ye;for(let x=0;x<=r;x++){for(let p=0;p<=n;p++){const d=s+p/n*a;m.x=h*Math.cos(d),m.y=h*Math.sin(d),c.push(m.x,m.y,m.z),l.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,u.push(v.x,v.y)}h+=f}for(let x=0;x<r;x++){const p=x*(n+1);for(let d=0;d<n;d++){const w=d+p,E=w,g=w+n+1,P=w+n+2,T=w+1;o.push(E,g,T),o.push(g,P,T)}}this.setIndex(o),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class or extends zt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new V,f=new V,m=[],v=[],x=[],p=[];for(let d=0;d<=n;d++){const w=[],E=d/n;let g=0;d===0&&a===0?g=.5/t:d===n&&c===Math.PI&&(g=-.5/t);for(let P=0;P<=t;P++){const T=P/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+E*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(T+g,1-E),w.push(l++)}u.push(w)}for(let d=0;d<n;d++)for(let w=0;w<t;w++){const E=u[d][w+1],g=u[d][w],P=u[d+1][w],T=u[d+1][w+1];(d!==0||a>0)&&m.push(E,g,T),(d!==n-1||c<Math.PI)&&m.push(g,P,T)}this.setIndex(m),this.setAttribute("position",new dt(v,3)),this.setAttribute("normal",new dt(x,3)),this.setAttribute("uv",new dt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jr extends zt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new V,h=new V,f=new V;for(let m=0;m<=n;m++)for(let v=0;v<=r;v++){const x=v/r*s,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(x),h.y=(e+t*Math.cos(p))*Math.sin(x),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(v/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=r;v++){const x=(r+1)*m+v-1,p=(r+1)*(m-1)+v-1,d=(r+1)*(m-1)+v,w=(r+1)*m+v;a.push(x,p,w),a.push(p,d,w)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pt extends Ui{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zc extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _m extends zc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ps=new at,$o=new V,Zo=new V;class vm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$o.setFromMatrixPosition(e.matrixWorld),t.position.copy($o),Zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zo),t.updateMatrixWorld(),Ps.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ps),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ps)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xm extends vm{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new xm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sa);const ft={sky:11125976,ground:5212732,berm:3815480,bermAccent:5920080,gate:14431557,gateBase:2763310,portal:7023242,portalGlow:11820287,player:9417940,shield:4868682,swordBlade:14211288,swordGuard:4013373,enemy:10101299,enemyHit:16747146,slash:16770720,impact:16764006},U={arenaRadius:28,playerRadius:.55,playerSpeed:8.5,playerHp:100,gateHp:500,gateSize:2.4,enemySize:1.1,enemySpeed:2.6,enemyHp:20,enemyContactDamage:9,enemyGateDamage:1.2,enemyContactCooldown:.8,enemyGateCooldown:1.2,enemyAttackRange:1.55,enemyTelegraph:.48,enemyBonk:.22,enemyRecover:.4,enemyKnockback:2.8,corpseLifetime:2.8,corpseBounce:.42,maxEnemies:300,waveCountdown:3,cameraDistance:3.2,cameraHeight:1.55,cameraLookHeight:1.05,mouseSensitivity:.0022,lightDamage:18,combo3Damage:28,comboWindow:.6,comboStepDur:[.3,.3,.42],lightRange:3.2,lightCooldown:.08,heavyDamage:42,heavyRange:3.4,heavyCooldown:.48,heavyDur:.36,pushDamage:26,pushRange:3,pushCooldown:.35,pushDur:.28,spinDamage:14,spinRevolutions:3,spinRange:3.4,spinCooldown:2.6,spinDur:1.15,slamDamage:55,slamRange:4.2,slamCooldown:3.2,slamWindup:.42,slamSlam:.18,slamRecover:.22,dodgeCooldown:.85,dodgeDuration:.28,dodgeSpeedMul:2.6,iFrameDuration:.35,jumpVelocity:7.2,gravity:22,playerKnockback:4.5,hitStop:.06,scorePerKill:12,scorePerSecondNear:6};function ym(i){const e=Math.max(0,Math.floor(i)),t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`}function Sm(i){const e=new Set,t={dx:0,dy:0,buttons:0},n={x:0,y:0},r={light:!1,heavy:!1,push:!1,block:!1,dodge:!1,spin:!1,slam:!1,jump:!1,camera:!1},s=matchMedia("(pointer: coarse)").matches;let a=!1,o=!1,c=0,l=0;function u(){if(s&&(n.x!==0||n.y!==0))return;let T=0,R=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(T-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(T+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(R-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(R+=1);const C=Math.hypot(T,R)||1;n.x=T/C,n.y=R/C}function h(T){e.add(T.code),T.code==="KeyE"&&(r.heavy=!0),(T.code==="ShiftLeft"||T.code==="ShiftRight")&&(r.dodge=!0),T.code==="KeyQ"&&(r.spin=!0),T.code==="KeyF"&&(r.slam=!0),T.code==="KeyV"&&(r.camera=!0),T.code==="Space"&&(T.preventDefault(),r.jump=!0),u()}function f(T){e.delete(T.code),u()}function m(T){var R;t.buttons|=1<<T.button,T.button===2&&(r.block=!0),T.button===0&&(r.block||t.buttons&4||t.buttons&4?r.push=!0:r.light=!0),!a&&!s&&((R=i.requestPointerLock)==null||R.call(i))}function v(T){t.buttons&=~(1<<T.button),T.button===2&&(r.block=!1)}function x(T){a?(t.dx+=T.movementX,t.dy+=T.movementY):o&&(t.dx+=T.clientX-c,t.dy+=T.clientY-l,c=T.clientX,l=T.clientY)}function p(){a=document.pointerLockElement===i}function d(T){T.preventDefault()}window.addEventListener("keydown",h),window.addEventListener("keyup",f),i.addEventListener("mousedown",m),window.addEventListener("mouseup",v),window.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",p),i.addEventListener("contextmenu",d);const w=document.getElementById("stick"),E=document.getElementById("stick-knob"),g=document.getElementById("touch");if(s&&g){let y=function(M){const b=w.getBoundingClientRect(),O=b.left+b.width/2,N=b.top+b.height/2;let G=M.clientX-O,X=M.clientY-N;const Z=Math.hypot(G,X)||1,j=Math.min(Z,R);G=G/Z*j,X=X/Z*j,n.x=G/R,n.y=X/R,E&&(E.style.transform=`translate(${G}px, ${X}px)`)};var P=y;g.classList.remove("hidden");let T=null;const R=46;w==null||w.addEventListener("pointerdown",M=>{T=M.pointerId,w.setPointerCapture(M.pointerId),y(M)}),w==null||w.addEventListener("pointermove",M=>{M.pointerId===T&&y(M)});const C=M=>{M.pointerId===T&&(T=null,n.x=0,n.y=0,E&&(E.style.transform="translate(0,0)"))};w==null||w.addEventListener("pointerup",C),w==null||w.addEventListener("pointercancel",C),i.addEventListener("pointerdown",M=>{var b,O;(O=(b=M.target).closest)!=null&&O.call(b,".touch-actions, .stick, button, .overlay")||M.clientX<window.innerWidth*.45||(o=!0,c=M.clientX,l=M.clientY)}),window.addEventListener("pointerup",()=>{o=!1}),document.querySelectorAll(".tbtn").forEach(M=>{const b=M.dataset.act,O=G=>{G.preventDefault(),b==="block"?r.block=!0:b==="light"&&r.block?r.push=!0:b&&(r[b]=!0)},N=()=>{b==="block"&&(r.block=!1)};M.addEventListener("pointerdown",O),M.addEventListener("pointerup",N),M.addEventListener("pointercancel",N)})}return{move:n,actions:r,mouse:t,get pointerLocked(){return a},requestLock(){var T;s||(T=i.requestPointerLock)==null||T.call(i)},consumeMouseDelta(){const T=t.dx,R=t.dy;return t.dx=0,t.dy=0,{dx:T,dy:R}},consumeAction(T){return r[T]?(T==="block"||(r[T]=!1),!0):!1},isBlocking(){return r.block||!!(t.buttons&4)},dispose(){window.removeEventListener("keydown",h),window.removeEventListener("keyup",f),i.removeEventListener("mousedown",m),window.removeEventListener("mouseup",v),window.removeEventListener("mousemove",x),document.removeEventListener("pointerlockchange",p),i.removeEventListener("contextmenu",d)}}}const rr=[{x:-18,z:-6,radius:9.2,label:"westBerm",visualRadius:10}];function kc(){return rr}function Em(i){rr.length=0;for(const e of i)rr.push({x:e.x,z:e.z,radius:e.radius,label:e.label??e.id??"obstacle",visualRadius:e.visualRadius??e.radius+.8})}function Ma(i,e=.55){for(const t of rr){const n=i.x-t.x,r=i.z-t.z,s=Math.hypot(n,r),a=t.radius+e;if(!(s>=a))if(s>1e-4){const o=a/s;i.x=t.x+n*o,i.z=t.z+r*o}else i.x=t.x+a,i.z=t.z}}function bm(i,e,t,n,r=.55){let s=t,a=n;for(const c of rr){const l=i-c.x,u=e-c.z,h=Math.hypot(l,u),f=c.radius+r+4.5;if(h>=f||h<.01)continue;const m=1-h/f,v=m*m*2.4;s+=l/h*v,a+=u/h*v}const o=Math.hypot(s,a)||1;return{dirX:s/o,dirZ:a/o}}const wm=1,Tm={id:"default",name:"Default Arena",author:"sec-knight",description:"Shipped horde defense layout — gate behind player, portal far +Z, west berm.",tags:["official"]},Am={arenaRadius:28,playerSpawn:{x:0,z:-4},gate:{x:0,z:-23.5,size:2.4},portal:{x:0,z:24.5},obstacles:[{id:"westBerm",kind:"berm",x:-18,z:-6,radius:9.2,visualRadius:10}],environment:{sky:"#a9c4d8",ground:"#4f8a3c",fogNear:42,fogFar:70}},Rm={player:{hp:100,radius:.55,speed:8.5},gate:{hp:500},enemy:{hp:20,size:1.1,speed:2.6,contactDamage:9,gateDamage:1.2,knockback:2.8},weapons:{light:{damage:18,range:3.2,cooldown:.08},comboFinisher:{damage:28},heavy:{damage:42,range:3.4,cooldown:.48},push:{damage:26,range:3,cooldown:.35},spin:{damage:14,range:3.4,revolutions:3,cooldown:2.6},slam:{damage:55,range:4.2,cooldown:3.2}},shield:{blockDamageMul:.28}},Cm={player:{knockback:4.5,hitStop:.06,dodgeCooldown:.85,dodgeDuration:.28,iFrameDuration:.35,jumpVelocity:7.2,gravity:22,mouseSensitivity:.0022},camera:{distance:3.2,height:1.55,lookHeight:1.05},horde:{maxEnemies:300,contactCooldown:.8,gateContactCooldown:1.2,attackRange:1.55,telegraph:.48,bonk:.22,recover:.4},corpse:{lifetime:2.8,bounce:.42}},Pm={waveCountdown:3,betweenWavePause:1.4,waveCount:{kind:"quadratic",base:4,quadratic:3.2,linear:5,cap:300},scoring:{perKill:12,perSecondNear:6,waveClearBonus:40},spawn:{ringBaseRadius:2.2,ringSpacing:1.7,ringGrowth:4}},Lm={schemaVersion:wm,foundation:Tm,world:Am,things:Rm,actors:Cm,events:Pm},Dm=1,Im={id:"pressure-test",name:"Pressure Test",author:"mark",description:"Aggressive quadratic horde ramp for stress testing instancing and berm pathing.",tags:["stress","admin"],parentId:"default"},Um={enemy:{hp:16,speed:3,contactDamage:11}},Nm={horde:{maxEnemies:300}},Fm={waveCountdown:2,betweenWavePause:1,waveCount:{kind:"quadratic",base:8,quadratic:4.5,linear:6,cap:300}},Om={schemaVersion:Dm,foundation:Im,things:Um,actors:Nm,events:Fm},Bm=1,zm={id:"studio",name:"Domain Workshop",author:"mark",description:"Prototyping level with Things / Actors / Events / Worlds pads. Programmer-art authoring sandbox.",tags:["studio","workshop","authoring"]},km={arenaRadius:36,playerSpawn:{x:0,z:0},gate:{x:0,z:-32,size:1.2},portal:{x:0,z:32},obstacles:[],environment:{sky:"#c5d6e4",ground:"#5a6b52",fogNear:48,fogFar:90},zones:[{id:"pad-things",domain:"things",label:"THINGS",x:-14,z:-12,width:16,depth:14,color:"#c9a46a"},{id:"pad-actors",domain:"actors",label:"ACTORS",x:14,z:-12,width:16,depth:14,color:"#5ba8d8"},{id:"pad-events",domain:"events",label:"EVENTS",x:-14,z:14,width:16,depth:14,color:"#e08a2e"},{id:"pad-worlds",domain:"world",label:"WORLDS",x:14,z:14,width:16,depth:14,color:"#6bbf7a"}]},Hm={player:{hp:100,radius:.55,speed:9.5},gate:{hp:500},enemy:{hp:20,size:1.1,speed:2.6,contactDamage:9,gateDamage:1.2,knockback:2.8},catalog:[{id:"hat-captain",name:"Captain Hat",kind:"equip",slot:"head",parts:[{id:"brim",primitive:"cylinder",x:0,y:.05,z:0,sx:.55,sy:.06,sz:.55,color:"#1a1a1a"},{id:"crown",primitive:"cylinder",x:0,y:.22,z:0,sx:.32,sy:.28,sz:.32,color:"#222222"},{id:"plume",primitive:"sphere",x:.05,y:.42,z:-.05,sx:.12,sy:.18,sz:.12,color:"#c53d4a"}]},{id:"sword-captain",name:"Captain Sword",kind:"equip",slot:"hand",parts:[{id:"blade",primitive:"box",x:0,y:.55,z:0,sx:.08,sy:.9,sz:.16,color:"#d8dde8"},{id:"guard",primitive:"box",x:0,y:.12,z:0,sx:.36,sy:.08,sz:.12,color:"#c9a46a"},{id:"grip",primitive:"cylinder",x:0,y:-.08,z:0,sx:.07,sy:.28,sz:.07,color:"#4a3020"}]},{id:"chest-oak",name:"Oak Chest",kind:"prop",slot:"world",parts:[{id:"body",primitive:"box",x:0,y:.35,z:0,sx:1.1,sy:.7,sz:.7,color:"#8b5a2b"},{id:"lid",primitive:"box",x:0,y:.78,z:0,sx:1.14,sy:.16,sz:.74,color:"#6e4420"},{id:"lock",primitive:"sphere",x:0,y:.55,z:.38,sx:.12,sy:.12,sz:.12,color:"#c9a46a"}]}]},Vm={player:{knockback:4.5,hitStop:.06,dodgeCooldown:.85,dodgeDuration:.28,iFrameDuration:.35,jumpVelocity:7.2,gravity:22,mouseSensitivity:.0022},camera:{distance:4.2,height:1.8,lookHeight:1.1},horde:{maxEnemies:300,contactCooldown:.8,gateContactCooldown:1.2,attackRange:1.55,telegraph:.48,bonk:.22,recover:.4},corpse:{lifetime:2.8,bounce:.42},catalog:[{id:"undead-soldier",name:"Undead Soldier",role:"minion",hp:18,speed:2.4,size:1,color:"#6a8f6a",thingIds:[]},{id:"enemy-captain",name:"Enemy Captain",role:"elite",hp:140,speed:2.1,size:1.35,color:"#4a5568",thingIds:["hat-captain","sword-captain"],summons:{actorId:"undead-soldier",maxAlive:100,refill:!0}}]},Gm={waveCountdown:3,betweenWavePause:1.4,waveCount:{kind:"fixed",count:0},scoring:{perKill:12,perSecondNear:6,waveClearBonus:40},spawn:{ringBaseRadius:2.2,ringSpacing:1.7,ringGrowth:4},scripts:[{id:"chest-captain-gauntlet",name:"Chest Captain Gauntlet",description:"Walk near the chest → summon captain → captain keeps up to 100 undead soldiers → kill captain → chest unlocks.",steps:[{id:"approach",when:{nearThing:"chest-oak",radius:4},then:{spawnActor:"enemy-captain",at:"events-stage"}},{id:"reinforce",while:{actorAlive:"enemy-captain"},then:{summonLoop:{actorId:"undead-soldier",maxAlive:100,refill:!0}}},{id:"loot",when:{actorDead:"enemy-captain"},then:{unlockThing:"chest-oak"}}]}]},Wm={schemaVersion:Bm,foundation:zm,world:km,things:Hm,actors:Vm,events:Gm},qr={default:Lm,"pressure-test":Om,studio:Wm},Yr="default";function Hc(i,e){if(e==null)return i;if(Array.isArray(e))return e.slice();if(typeof e!="object")return e;const t={...i};for(const n of Object.keys(e)){const r=i==null?void 0:i[n],s=e[n];s!==null&&typeof s=="object"&&!Array.isArray(s)&&typeof r=="object"&&r&&!Array.isArray(r)?t[n]=Hc(r,s):t[n]=s}return t}function Nr(i,e,t){return Math.min(t,Math.max(e,i))}function Xm(i,e){var n,r,s,a,o,c,l,u,h;const t=e??i.arenaRadius??28;return{arenaRadius:t,playerSpawn:i.playerSpawn??{x:0,z:-4},gate:{x:((n=i.gate)==null?void 0:n.x)??0,z:((r=i.gate)==null?void 0:r.z)??-t+4.5,size:((s=i.gate)==null?void 0:s.size)??2.4},portal:{x:((a=i.portal)==null?void 0:a.x)??0,z:((o=i.portal)==null?void 0:o.z)??t-3.5},obstacles:(i.obstacles??[]).map(f=>({id:f.id,kind:f.kind??"berm",x:f.x,z:f.z,radius:f.radius,visualRadius:f.visualRadius??f.radius+.8})),environment:{sky:((c=i.environment)==null?void 0:c.sky)??"#a9c4d8",ground:((l=i.environment)==null?void 0:l.ground)??"#4f8a3c",fogNear:((u=i.environment)==null?void 0:u.fogNear)??42,fogFar:((h=i.environment)==null?void 0:h.fogFar)??70},zones:(i.zones??[]).map(f=>({id:f.id,domain:f.domain,label:f.label??String(f.domain??"zone").toUpperCase(),x:f.x??0,z:f.z??0,width:f.width??12,depth:f.depth??12,color:f.color}))}}function vi(i=Yr){const e=qr[i];if(!e)throw new Error(`Unknown preset: ${i}`);return Na(e,Yr)}function Na(i,e=Yr){const t=structuredClone(qr[e]??qr[Yr]),n=Hc(t,i);if(n.schemaVersion!==1)throw new Error(`Unsupported schemaVersion: ${n.schemaVersion}`);return Fa(n)}function Fa(i){var t,n,r;const e=structuredClone(i);e.world=Xm(e.world??{},(t=e.world)==null?void 0:t.arenaRadius),e.world.arenaRadius=Nr(e.world.arenaRadius,12,40),e.world.gate.size=Nr(e.world.gate.size,1,6);for(const s of e.world.obstacles)s.radius=Nr(s.radius,.5,18),s.visualRadius=Nr(s.visualRadius??s.radius+.8,s.radius,20);return(n=e.foundation)!=null&&n.id||(e.foundation={...e.foundation,id:"custom",name:"Custom"}),(r=e.foundation)!=null&&r.name||(e.foundation.name=e.foundation.id),e.things=e.things??{},e.things.catalog=Array.isArray(e.things.catalog)?e.things.catalog:[],e.actors=e.actors??{},e.actors.catalog=Array.isArray(e.actors.catalog)?e.actors.catalog:[],e.events=e.events??{},e.events.scripts=Array.isArray(e.events.scripts)?e.events.scripts:[],e}function ya(i){return JSON.stringify(i,null,2)}let Qr=vi("default");function ht(){return Qr}function er(i){Qr=i}function Ko(){return Qr.events??{}}function qm(){var i;return((i=Qr.events)==null?void 0:i.scoring)??{perKill:12,perSecondNear:6,waveClearBonus:40}}function jo(i){return Number.parseInt(String(i).replace("#",""),16)}function Ym(i={},e={},t={}){var h,f,m,v,x,p,d,w,E,g,P,T,R,C,y,M,b,O,N;const n=i.player??{},r=i.gate??{},s=i.enemy??{},a=i.weapons??{},o=e.player??{},c=e.camera??{},l=e.horde??{},u=e.corpse??{};Object.assign(U,{playerHp:n.hp??U.playerHp,playerRadius:n.radius??U.playerRadius,playerSpeed:n.speed??U.playerSpeed,gateHp:r.hp??U.gateHp,enemyHp:s.hp??U.enemyHp,enemySize:s.size??U.enemySize,enemySpeed:s.speed??U.enemySpeed,enemyContactDamage:s.contactDamage??U.enemyContactDamage,enemyGateDamage:s.gateDamage??U.enemyGateDamage,enemyKnockback:s.knockback??U.enemyKnockback,lightDamage:((h=a.light)==null?void 0:h.damage)??U.lightDamage,lightRange:((f=a.light)==null?void 0:f.range)??U.lightRange,lightCooldown:((m=a.light)==null?void 0:m.cooldown)??U.lightCooldown,combo3Damage:((v=a.comboFinisher)==null?void 0:v.damage)??U.combo3Damage,heavyDamage:((x=a.heavy)==null?void 0:x.damage)??U.heavyDamage,heavyRange:((p=a.heavy)==null?void 0:p.range)??U.heavyRange,heavyCooldown:((d=a.heavy)==null?void 0:d.cooldown)??U.heavyCooldown,pushDamage:((w=a.push)==null?void 0:w.damage)??U.pushDamage,pushRange:((E=a.push)==null?void 0:E.range)??U.pushRange,pushCooldown:((g=a.push)==null?void 0:g.cooldown)??U.pushCooldown,spinDamage:((P=a.spin)==null?void 0:P.damage)??U.spinDamage,spinRange:((T=a.spin)==null?void 0:T.range)??U.spinRange,spinRevolutions:((R=a.spin)==null?void 0:R.revolutions)??U.spinRevolutions,spinCooldown:((C=a.spin)==null?void 0:C.cooldown)??U.spinCooldown,slamDamage:((y=a.slam)==null?void 0:y.damage)??U.slamDamage,slamRange:((M=a.slam)==null?void 0:M.range)??U.slamRange,slamCooldown:((b=a.slam)==null?void 0:b.cooldown)??U.slamCooldown,playerKnockback:o.knockback??U.playerKnockback,hitStop:o.hitStop??U.hitStop,dodgeCooldown:o.dodgeCooldown??U.dodgeCooldown,dodgeDuration:o.dodgeDuration??U.dodgeDuration,iFrameDuration:o.iFrameDuration??U.iFrameDuration,jumpVelocity:o.jumpVelocity??U.jumpVelocity,gravity:o.gravity??U.gravity,mouseSensitivity:o.mouseSensitivity??U.mouseSensitivity,cameraDistance:c.distance??U.cameraDistance,cameraHeight:c.height??U.cameraHeight,cameraLookHeight:c.lookHeight??U.cameraLookHeight,maxEnemies:l.maxEnemies??U.maxEnemies,enemyContactCooldown:l.contactCooldown??U.enemyContactCooldown,enemyGateCooldown:l.gateContactCooldown??U.enemyGateCooldown,enemyAttackRange:l.attackRange??U.enemyAttackRange,enemyTelegraph:l.telegraph??U.enemyTelegraph,enemyBonk:l.bonk??U.enemyBonk,enemyRecover:l.recover??U.enemyRecover,corpseLifetime:u.lifetime??U.corpseLifetime,corpseBounce:u.bounce??U.corpseBounce,waveCountdown:t.waveCountdown??U.waveCountdown,scorePerKill:((O=t.scoring)==null?void 0:O.perKill)??U.scorePerKill,scorePerSecondNear:((N=t.scoring)==null?void 0:N.perSecondNear)??U.scorePerSecondNear})}function xi(i,e){var a;er(e);const{world:t,things:n,actors:r,events:s}=e;U.arenaRadius=t.arenaRadius,U.gateSize=t.gate.size,Ym(n,r,s),Em(t.obstacles.map(o=>({x:o.x,z:o.z,radius:o.radius,label:o.id,visualRadius:o.visualRadius}))),i.arena.applyWorld(t),i.player.setSpawn(t.playerSpawn),(a=i.workshop)==null||a.applyBundle(e),i.onApplied&&i.onApplied(e)}function $m(i){var n;const e=structuredClone(i.getBundle()),t=e.world;return t.arenaRadius=U.arenaRadius,t.gate={x:i.arena.gateGroup.position.x,z:i.arena.gateGroup.position.z,size:U.gateSize},t.portal={x:i.arena.portalGroup.position.x,z:i.arena.portalGroup.position.z},t.obstacles=kc().map(r=>({id:r.label??"obstacle",kind:"berm",x:r.x,z:r.z,radius:r.radius,visualRadius:r.visualRadius??r.radius+.8})),e.things=e.things??{},e.things.player={hp:U.playerHp,radius:U.playerRadius,speed:U.playerSpeed},e.things.gate={hp:U.gateHp},e.things.enemy={hp:U.enemyHp,size:U.enemySize,speed:U.enemySpeed,contactDamage:U.enemyContactDamage,gateDamage:U.enemyGateDamage,knockback:U.enemyKnockback},e.events=e.events??{},e.events.waveCountdown=U.waveCountdown,e.events.betweenWavePause=e.events.betweenWavePause??1.4,e.events.scoring={perKill:U.scorePerKill,perSecondNear:U.scorePerSecondNear,waveClearBonus:((n=e.events.scoring)==null?void 0:n.waveClearBonus)??40},e}function Zm(i,e,t){var s;const n=jo(t.sky),r=jo(t.ground);ft.sky=n,ft.ground=r,i.background=new Ve(n),i.fog&&(i.fog.color.setHex(n),i.fog.near=t.fogNear,i.fog.far=t.fogFar),(s=e.ground)==null||s.material.color.setHex(r)}function Km(i){const e=new gt;e.name="Arena",i.add(e);const t=new Ke(new ir(U.arenaRadius,64),new pt({color:ft.ground}));t.rotation.x=-Math.PI/2,t.receiveShadow=!1,e.add(t);const n=new Ke(new Pi(U.arenaRadius-.9,U.arenaRadius+1.4,64),new pt({color:ft.berm,side:Ot}));n.rotation.x=-Math.PI/2,n.position.y=.02,e.add(n);const r=new pt({color:ft.bermAccent}),s=[];for(let E=0;E<10;E++){const g=E/10*Math.PI*2+.2,P=new Ke(new yt(4.2,1.6,1.1),r);P.position.set(Math.cos(g)*(U.arenaRadius+.2),.8,Math.sin(g)*(U.arenaRadius+.2)),P.lookAt(0,.8,0),e.add(P),s.push(P)}const a=new gt;a.name="Obstacles",e.add(a);function o(){var E;for(;a.children.length;){const g=a.children[0];(E=g.geometry)==null||E.dispose(),a.remove(g)}for(const g of kc()){const P=new Ke(new or(g.visualRadius??g.radius+.8,24,16,0,Math.PI*2,0,Math.PI*.5),new pt({color:12105912}));P.position.set(g.x,0,g.z),a.add(P)}}o();const c=new gt;e.add(c);const l=new Ke(new yt(3.2,.45,3.2),new pt({color:ft.gateBase}));l.position.y=.225,c.add(l);const u=new Ke(new yt(U.gateSize,U.gateSize,U.gateSize),new pt({color:ft.gate,emissive:0,emissiveIntensity:0}));u.position.y=.45+U.gateSize/2,c.add(u);const h=new gt;e.add(h);const f=new Ke(new yt(2.2,2.8,.6),new pt({color:ft.portal,emissive:ft.portalGlow,emissiveIntensity:.45}));f.position.y=1.5,h.add(f);const m=new Ke(new Jr(1.5,.12,8,24),new Ri({color:ft.portalGlow}));m.position.y=1.5,h.add(m);const v=new _m(14215423,3820072,.85);i.add(v);const x=new Mm(16773848,.9);x.position.set(12,22,8),i.add(x),i.background=new Ve(ft.sky),i.fog=new Ua(ft.sky,42,70);function p(E){for(let g=0;g<s.length;g++){const P=g/s.length*Math.PI*2+.2;s[g].position.set(Math.cos(P)*(E+.2),.8,Math.sin(P)*(E+.2)),s[g].lookAt(0,.8,0)}}function d(E){const g=E.arenaRadius;U.arenaRadius=g,U.gateSize=E.gate.size,t.geometry.dispose(),t.geometry=new ir(g,64),n.geometry.dispose(),n.geometry=new Pi(g-.9,g+1.4,64),p(g),c.position.set(E.gate.x,0,E.gate.z),h.position.set(E.portal.x,0,E.portal.z);const P=E.gate.size;u.geometry.dispose(),u.geometry=new yt(P,P,P),u.position.y=.45+P/2,o(),Zm(i,{ground:t},E.environment)}function w(E){c.visible=E,h.visible=E}return{group:e,gateGroup:c,gateMesh:u,portalGroup:h,ground:t,get portalPosition(){return h.position},get gatePosition(){return c.position},applyWorld:d,setSiegeVisible:w,clampToArena(E,g=U.playerRadius){const P=U.arenaRadius-g-.4,T=Math.hypot(E.x,E.z);if(T>P){const R=P/T;E.x*=R,E.z*=R}Ma(E,g)}}}const Vt={x:.65,y:.9,z:-.15},Gt={x:-.55,y:.85,z:-.1},jt=-1;function jm(i,e=new V(0,0,-4)){const t=new gt;t.position.copy(e),i.add(t);const n=new Ke(new or(U.playerRadius,24,18),new pt({color:ft.player,emissive:0}));n.position.y=U.playerRadius,t.add(n);const r=new gt;r.position.y=.9,t.add(r);const s=new Ke(new qn(.55,.55,.1,22),new pt({color:ft.shield,emissive:0,emissiveIntensity:0}));s.rotation.set(0,0,Math.PI/2),s.position.set(Gt.x,Gt.y-.9,Gt.z),r.add(s);const a=new gt;a.position.set(Vt.x,Vt.y-.9,Vt.z),r.add(a);const o=new Ke(new yt(.12,1.35,.06),new pt({color:ft.swordBlade}));o.position.y=.55,a.add(o);const c=new Ke(new qn(.22,.22,.08,12),new pt({color:ft.swordGuard}));c.rotation.z=Math.PI/2,a.add(c);const l=new Ke(new qn(.05,.05,.35,8),new pt({color:5913122}));l.position.y=-.18,a.add(l);const u=1.15,h=Math.PI*.92,f=h/2,m=new gt;m.position.set(0,.12,0),r.add(m);const v=new Pi(u-.14,u+.14,40,1,Math.PI/2-f,h),x=new Ri({color:ft.slash,transparent:!0,opacity:0,side:Ot,depthWrite:!1,depthTest:!1}),p=new Ke(v,x);p.rotation.x=-Math.PI/2,p.position.set(0,.12,0),p.renderOrder=20,p.frustumCulled=!1,r.add(p);const d=new Pi(.4,.75,32),w=new Ri({color:ft.impact,transparent:!0,opacity:0,side:Ot,depthWrite:!1}),E=new Ke(d,w);E.rotation.x=-Math.PI/2,E.position.y=.06,t.add(E);const g={yaw:Math.PI,pitch:.12,hp:U.playerHp,vy:0,grounded:!0,blocking:!1,iFrames:0,dodgeTimer:0,hitStop:0,knockX:0,knockZ:0,anim:null,comboStep:0,comboTimer:0,cooldowns:{light:0,heavy:0,push:0,spin:0,slam:0,dodge:0},alive:!0,pendingHits:[],cameraMode:0},P=new V,T=new V,R=new V;function C(){return P.set(-Math.sin(g.yaw),0,-Math.cos(g.yaw)),P}function y(){return T.set(Math.cos(g.yaw),0,-Math.sin(g.yaw)),T}function M(){b(),s.position.set(Gt.x,Gt.y-.9,Gt.z),s.rotation.set(0,0,Math.PI/2),s.scale.set(1,1,1),r.rotation.set(0,0,0),m.rotation.set(0,0,0),n.scale.set(1,1,1)}function b(){a.parent!==r&&(m.remove(a),r.add(a)),a.position.set(Vt.x,Vt.y-.9,Vt.z),a.rotation.set(0,0,0),a.scale.set(1,1,1)}function O(){a.parent!==m&&(r.remove(a),m.add(a)),a.position.set(0,0,-.9299999999999999),a.rotation.set(-Math.PI/2,0,0),a.scale.set(1,1,1)}function N(L){g.anim={...L,t:0},g.pendingHits=(L.hits||[]).map(ie=>({...ie,fired:!1}))}function G(L){return 1-(1-L)**3}function X(L){return L*L*L}function Z(L){const ie=Math.sin(performance.now()*.006)*.03;if(n.position.y=U.playerRadius+ie,t.rotation.y=g.yaw,w.opacity>0){w.opacity=Math.max(0,w.opacity-L*2.2);const se=1+(1-w.opacity)*2.8;E.scale.set(se,se,se)}if(!g.anim){x.opacity=Math.max(0,x.opacity-L*4),p.visible=x.opacity>.02,m.rotation.y=0,g.blocking?(b(),s.position.set(0,.22,1.1*jt),s.rotation.set(Math.PI/2,0,0),s.scale.set(1.4,1.4,1.4),s.material.emissive.setHex(6986956),s.material.emissiveIntensity=.45,a.position.set(.75,-.1,.05*jt),a.rotation.set(.4,0,.7)):(b(),s.material.emissive.setHex(0),s.material.emissiveIntensity=0,s.scale.set(1,1,1),s.position.set(Gt.x,Gt.y-.9,Gt.z),s.rotation.set(0,0,Math.PI/2),a.position.set(Vt.x,Vt.y-.9,Vt.z),a.rotation.set(0,0,0));return}g.anim.t+=L;const ae=Math.min(1,g.anim.t/g.anim.dur),te=g.anim.type;if(te==="slashL"||te==="slashR"){const se=te==="slashL",Me=Math.sin(ae*Math.PI);O();const q=se?-f:f,D=se?f:-f;m.rotation.y=Qi.lerp(q,D,G(ae)),p.visible=!0,x.opacity=.35+Me*.65,p.scale.setScalar(.94+Me*.08),s.position.set(-.45,0,.1*jt),s.rotation.set(0,0,Math.PI/2)}else if(te==="slashSpin"){const se=ae*Math.PI*2;O(),r.rotation.y=se,m.rotation.y=0,p.visible=!0,x.opacity=.7*(1-ae*.5),s.position.set(-.85,.05,.05*jt),s.rotation.set(0,0,Math.PI/2)}else if(te==="spin"){b();const se=U.spinRevolutions,Me=ae*Math.PI*2*se;r.rotation.y=Me,a.position.set(1.25,.05,0),a.rotation.set(0,0,-Math.PI/2),s.position.set(-1.25,.05,0),s.rotation.set(Math.PI/2,0,Math.PI/2),x.opacity=.55,p.visible=!0,n.scale.setScalar(1+Math.sin(Me*2)*.04)}else if(te==="slam"){b();const se=U.slamWindup,Me=U.slamSlam,q=g.anim.t;if(q<se){const D=G(q/se);a.position.set(.25,.2+D*1.1,.1*jt),a.rotation.set(-1.4*D,0,.2),s.position.set(-.25,.15+D*1,.05*jt),s.rotation.set(-.4*D,0,Math.PI/2),n.scale.set(1,1+D*.12,1)}else if(q<se+Me){const D=X((q-se)/Me);a.position.set(.2,1.3-D*1.5,.35*jt),a.rotation.set(-1.4+D*2.2,0,0),s.position.set(-.2,1.15-D*1.35,.3*jt),s.rotation.set(-.4+D*1.2,0,Math.PI/2),n.scale.set(1+D*.2,1.12-D*.25,1+D*.2),D>.85&&w.opacity<.1&&(w.opacity=.95,E.scale.set(1,1,1))}else{const D=(q-se-Me)/U.slamRecover;a.position.lerp(new V(Vt.x,Vt.y-.9,Vt.z),D),s.position.lerp(new V(Gt.x,Gt.y-.9,Gt.z),D),n.scale.setScalar(1)}x.opacity=0}else if(te==="heavy"||te==="push"){const se=Math.sin(ae*Math.PI);if(te==="push")b(),s.position.set(0,.15,(.4+se*.9)*jt),s.rotation.set(Math.PI/2,0,0),s.scale.set(1.3,1.3,1.3),a.position.set(.6,0,.1*jt);else{O();const Me=-f*.55,q=f*.65;m.rotation.y=Qi.lerp(Me,q,G(ae)),p.visible=!0,x.opacity=se*.85,s.position.set(-.4,0,.2*jt)}}else te==="dodge"&&(n.material.transparent=!0,n.material.opacity=.4+.6*Math.abs(Math.sin(ae*Math.PI*4)));if(ae>=1){const se=te==="dodge";g.anim=null,r.rotation.set(0,0,0),M(),x.opacity=0,p.visible=!1,m.rotation.y=0,se&&(n.material.transparent=!1,n.material.opacity=1)}}function j(){if(!g.anim)return[];const L=Math.min(1,g.anim.t/g.anim.dur),ie=[];for(const ae of g.pendingHits)!ae.fired&&L>=ae.at&&(ae.fired=!0,ie.push(ae));return ie}return{root:t,body:n,sword:a,shield:s,state:g,getForward:C,getRight:y,get position(){return t.position},setSpawn(L={x:0,z:-4}){t.position.set(L.x??0,t.position.y,L.z??-4)},applyLook(L,ie){g.yaw-=L*U.mouseSensitivity,g.pitch-=ie*U.mouseSensitivity,g.pitch=Qi.clamp(g.pitch,-.35,.55)},cycleCamera(){return g.cameraMode=(g.cameraMode+1)%3,g.cameraMode},tryLight(){if(!g.alive||g.dodgeTimer>0||g.cooldowns.light>0||g.anim&&(g.anim.type==="spin"||g.anim.type==="slam"))return!1;g.comboTimer<=0&&(g.comboStep=0);const L=g.comboStep%3,ie=U.comboStepDur[L];return g.cooldowns.light=U.lightCooldown,g.comboTimer=U.comboWindow,g.comboStep=L+1,L===0?N({type:"slashL",dur:ie,hits:[{kind:"arc",damage:U.lightDamage,range:U.lightRange,arc:-.1,at:.4}]}):L===1?N({type:"slashR",dur:ie,hits:[{kind:"arc",damage:U.lightDamage,range:U.lightRange,arc:-.1,at:.4}]}):(N({type:"slashSpin",dur:ie,hits:[{kind:"radius",damage:U.combo3Damage,range:U.lightRange*.95,at:.35},{kind:"radius",damage:U.combo3Damage*.6,range:U.lightRange*.95,at:.7}]}),g.comboStep=0,g.comboTimer=0),!0},tryHeavy(){return!g.alive||g.dodgeTimer>0||g.cooldowns.heavy>0||g.anim&&(g.anim.type==="spin"||g.anim.type==="slam")?!1:(g.cooldowns.heavy=U.heavyCooldown,g.comboStep=0,g.comboTimer=0,N({type:"heavy",dur:U.heavyDur,hits:[{kind:"arc",damage:U.heavyDamage,range:U.heavyRange,arc:-.15,at:.45}]}),!0)},tryPush(){return!g.alive||g.cooldowns.push>0||g.anim&&(g.anim.type==="spin"||g.anim.type==="slam")?!1:(g.cooldowns.push=U.pushCooldown,N({type:"push",dur:U.pushDur,hits:[{kind:"arc",damage:U.pushDamage,range:U.pushRange,arc:-.2,at:.35}]}),!0)},trySpin(){if(!g.alive||g.dodgeTimer>0||g.cooldowns.spin>0)return!1;g.cooldowns.spin=U.spinCooldown,g.comboStep=0,g.comboTimer=0;const L=[];for(let ie=0;ie<U.spinRevolutions;ie++)L.push({kind:"radius",damage:U.spinDamage,range:U.spinRange,at:(ie+.45)/U.spinRevolutions});return N({type:"spin",dur:U.spinDur,hits:L}),!0},trySlam(){if(!g.alive||g.dodgeTimer>0||g.cooldowns.slam>0)return!1;g.cooldowns.slam=U.slamCooldown,g.comboStep=0,g.comboTimer=0;const L=U.slamWindup+U.slamSlam+U.slamRecover,ie=U.slamWindup/L+U.slamSlam*.9/L;return N({type:"slam",dur:L,hits:[{kind:"radius",damage:U.slamDamage,range:U.slamRange,at:ie}]}),!0},tryDodge(){return!g.alive||g.cooldowns.dodge>0||g.dodgeTimer>0?!1:(g.cooldowns.dodge=U.dodgeCooldown,g.dodgeTimer=U.dodgeDuration,g.iFrames=U.iFrameDuration,N({type:"dodge",dur:U.dodgeDuration,hits:[]}),!0)},tryJump(){return!g.alive||!g.grounded?!1:(g.vy=U.jumpVelocity,g.grounded=!1,!0)},takeDamage(L,ie=0,ae=0){if(!g.alive||g.iFrames>0)return 0;let te=L;g.blocking&&(te*=.28),g.hp=Math.max(0,g.hp-te),g.iFrames=g.blocking?.15:.4,g.hitStop=U.hitStop;const se=t.position.x-ie,Me=t.position.z-ae,q=Math.hypot(se,Me)||1,D=g.blocking?U.playerKnockback*.35:U.playerKnockback;return g.knockX=se/q*D,g.knockZ=Me/q*D,n.material.emissiveIntensity=.7,n.material.emissive.setHex(16720418),setTimeout(()=>{n.material.emissiveIntensity=0},90),g.hp<=0&&(g.alive=!1),te},consumeHits:j,update(L,ie,ae){var q,D,W;if(!g.alive)return;if(g.hitStop>0){g.hitStop=Math.max(0,g.hitStop-L),g.iFrames=Math.max(0,g.iFrames-L),Z(L*.2);return}for(const ee of Object.keys(g.cooldowns))g.cooldowns[ee]=Math.max(0,g.cooldowns[ee]-L);g.iFrames=Math.max(0,g.iFrames-L),g.dodgeTimer=Math.max(0,g.dodgeTimer-L),g.comboTimer=Math.max(0,g.comboTimer-L),g.comboTimer<=0&&(g.comboStep=0),g.blocking=ie.isBlocking(),g.blocking&&g.anim&&(g.anim.type==="slashL"||g.anim.type==="slashR"||g.anim.type==="slashSpin"||g.anim.type==="heavy")&&(g.anim=null,g.pendingHits=[],r.rotation.set(0,0,0),m.rotation.set(0,0,0),M(),x.opacity=0,p.visible=!1),g.blocking&&(((q=g.anim)==null?void 0:q.type)==="spin"||((D=g.anim)==null?void 0:D.type)==="slam"||((W=g.anim)==null?void 0:W.type)==="dodge")&&(g.blocking=!1);const te=C(),se=y();R.set(0,0,0),R.addScaledVector(se,ie.move.x),R.addScaledVector(te,-ie.move.y),R.lengthSq()>1&&R.normalize();let Me=U.playerSpeed;g.dodgeTimer>0&&(Me*=U.dodgeSpeedMul),g.blocking&&(Me*=.55),g.anim&&(g.anim.type==="slam"||g.anim.type==="heavy"||g.anim.type==="push")&&(Me*=.35),g.anim&&g.anim.type==="spin"&&(Me*=.7),t.position.x+=R.x*Me*L+g.knockX*L,t.position.z+=R.z*Me*L+g.knockZ*L,g.knockX*=Math.max(0,1-L*8),g.knockZ*=Math.max(0,1-L*8),g.vy-=U.gravity*L,t.position.y+=g.vy*L,t.position.y<=0&&(t.position.y=0,g.vy=0,g.grounded=!0),ae(t.position,U.playerRadius),Z(L)},facingDir(){return C().clone()}}}function Jo(i,e,t){const n=e.state.yaw,r=e.state.pitch,s=e.state.cameraMode;let a=U.cameraDistance,o=U.cameraHeight,c=U.cameraLookHeight;s===1?(a=5.2,o=3.4,c=.6):s===2&&(a=2.2,o=1.25,c=1.15);const l=new V(e.position.x,e.position.y+c,e.position.z),u=new V(Math.sin(n)*a*Math.cos(r),o+Math.sin(r)*a,Math.cos(n)*a*Math.cos(r)),h=l.clone().add(u);i.position.lerp(h,1-Math.pow(.001,t)),i.lookAt(l)}const $i=0,Ls=1,Qo=2,ec=3,zn=1,tc=2;function Jm(i){const e=U.maxEnemies,t=new yt(U.enemySize,U.enemySize,U.enemySize),n=new pt({color:ft.enemy}),r=new mm(t,n,e);r.instanceMatrix.setUsage(Za),r.frustumCulled=!1,r.boundingSphere=new Ii(new V(0,0,0),U.arenaRadius+2),r.count=0,i.add(r);const s=new _t,a=new Uint8Array(e),o=new Float32Array(e),c=new Float32Array(e),l=new Float32Array(e),u=new Float32Array(e),h=new Float32Array(e),f=new Float32Array(e),m=new Uint8Array(e),v=new Float32Array(e),x=new Float32Array(e),p=new Float32Array(e),d=new Float32Array(e),w=new Float32Array(e),E=new Float32Array(e),g=new Float32Array(e),P=new Float32Array(e),T=new Float32Array(e),R=new Float32Array(e),C=new Float32Array(e),y=new Float32Array(e),M=new Float32Array(e),b=new Float32Array(e),O=new Float32Array(e),N=new Float32Array(e),G=new Float32Array(e*3);r.instanceColor=new xa(G,3),r.instanceColor.setUsage(Za);const X=new Ve(ft.enemy),Z=new Ve(ft.enemyHit),j=new Ve(5903648),L=new Ve;let ie=0,ae=[];for(let I=e-1;I>=0;I--)ae.push(I);function te(){r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0}function se(I,pe){G[I*3]=pe.r,G[I*3+1]=pe.g,G[I*3+2]=pe.b}function Me(I,pe={}){const le=pe.bounce??0,ue=pe.lean??0,Ue=pe.stretchY??1,me=pe.stretchXZ??1,A=x[I],_=E[I];s.position.set(o[I],c[I]+le,l[I]);const H=h[I],Q=(1+H*.22)*me*(1+_*.35),ne=(1+H*.1)*Ue*(1-_*.45);s.scale.set(Q,Math.max(.35,ne),Q);const J=pe.wobbleRoll??0;s.rotation.set(ue+_*.4+M[I],A+b[I],J+O[I]),s.updateMatrix(),r.setMatrixAt(I,s.matrix)}function q(I){s.position.set(0,-10,0),s.scale.setScalar(0),s.rotation.set(0,0,0),s.updateMatrix(),r.setMatrixAt(I,s.matrix),R[I]=0,C[I]=0,y[I]=0,M[I]=0,b[I]=0,O[I]=0,g[I]=0,P[I]=0,T[I]=0,N[I]=0}function D(I){a[I]=0,q(I),ae.push(I),te()}function W(I,pe){if(ae.length===0)return-1;const le=ae.pop();return a[le]=zn,o[le]=I,c[le]=U.enemySize/2,l[le]=pe,u[le]=U.enemyHp,h[le]=0,f[le]=0,m[le]=$i,v[le]=Math.random()*.4,x[le]=Math.random()*Math.PI*2,p[le]=Math.random()*Math.PI*2,d[le]=0,w[le]=0,E[le]=0,g[le]=0,P[le]=0,T[le]=0,R[le]=0,C[le]=0,y[le]=0,M[le]=0,b[le]=0,O[le]=0,N[le]=0,se(le,X),Me(le),ie+=1,r.count=e,te(),le}function ee(I,pe,le){if(a[I]!==zn)return;a[I]=tc,ie-=1;let ue=o[I]-pe,Ue=l[I]-le,me=Math.hypot(ue,Ue);me<.01&&(ue=Math.sin(x[I]+Math.PI),Ue=Math.cos(x[I]+Math.PI),me=1);const A=ue/me,_=Ue/me;g[I]=A*(4.5+Math.random()*2.5)+d[I],T[I]=_*(4.5+Math.random()*2.5)+w[I],P[I]=4.2+Math.random()*2.8,R[I]=(Math.random()-.5)*10,C[I]=(Math.random()-.5)*10,y[I]=(Math.random()-.5)*10,N[I]=U.corpseLifetime,E[I]=0,h[I]=0,d[I]=0,w[I]=0,se(I,j),te()}function he(I,pe,le){const ue=new V().subVectors(le,pe).normalize(),Ue=new V(-ue.z,0,ue.x);let me=0,A=0;for(;me<I;){const _=Math.min(I-me,6+A*4),H=2.2+A*1.7;for(let Q=0;Q<_;Q++){const ne=Q/_*Math.PI*2+A*.35,J=pe.x+Math.cos(ne)*H*.65+Ue.x*Math.sin(ne)*H,be=pe.z+ue.z*(1.5+A*.4)+Math.sin(ne)*H*.75,de=U.arenaRadius-2,fe=Math.hypot(J,be),Oe=fe>de?J/fe*de:J,oe=fe>de?be/fe*de:be;W(Oe,oe)>=0&&(me+=1)}if(A+=1,A>40)break}return me}function Se(){for(let I=0;I<e;I++)a[I]&&q(I),a[I]=0;ie=0,ae=[];for(let I=e-1;I>=0;I--)ae.push(I);te()}function Ee(I,pe,le=null,ue=null){if(a[I]!==zn)return!1;u[I]-=pe,h[I]=1,E[I]=1,L.copy(X).lerp(Z,.85),se(I,L);const Ue=le??o[I],me=ue??l[I];let A=o[I]-Ue,_=l[I]-me,H=Math.hypot(A,_);return H<.01&&(A=Math.sin(x[I]+Math.PI),_=Math.cos(x[I]+Math.PI),H=1),d[I]=A/H*U.enemyKnockback,w[I]=_/H*U.enemyKnockback,m[I]===Ls&&(m[I]=$i,v[I]=0),u[I]<=0?(ee(I,Ue,me),!0):!1}function Ie(I,pe){N[I]-=pe,P[I]-=U.gravity*pe,o[I]+=g[I]*pe,c[I]+=P[I]*pe,l[I]+=T[I]*pe,M[I]+=R[I]*pe,b[I]+=C[I]*pe,O[I]+=y[I]*pe;const le=U.enemySize/2;c[I]<=le&&(c[I]=le,P[I]<-.5?(P[I]=-P[I]*U.corpseBounce,g[I]*=.72,T[I]*=.72,R[I]*=.65,C[I]*=.65,y[I]*=.65):(P[I]=0,g[I]*=Math.max(0,1-pe*2.2),T[I]*=Math.max(0,1-pe*2.2)));const ue=U.arenaRadius-1,Ue=Math.hypot(o[I],l[I]);Ue>ue&&(o[I]=o[I]/Ue*ue,l[I]=l[I]/Ue*ue,g[I]*=-.35,T[I]*=-.35);const me={x:o[I],z:l[I]};Ma(me,U.enemySize*.5),(me.x!==o[I]||me.z!==l[I])&&(g[I]*=-.25,T[I]*=-.25),o[I]=me.x,l[I]=me.z,Me(I),N[I]<=0&&D(I)}function De(I,pe,le,ue,Ue){let me=!1;const A=performance.now()*.001;for(let _=0;_<e;_++){if(a[_]===tc){Ie(_,I),me=!0;continue}if(a[_]!==zn)continue;f[_]=Math.max(0,f[_]-I),v[_]+=I,E[_]>0&&(E[_]=Math.max(0,E[_]-I*4)),(d[_]!==0||w[_]!==0)&&(o[_]+=d[_]*I,l[_]+=w[_]*I,d[_]*=Math.max(0,1-I*7),w[_]*=Math.max(0,1-I*7),Math.abs(d[_])<.05&&(d[_]=0),Math.abs(w[_])<.05&&(w[_]=0)),h[_]>0&&(h[_]=Math.max(0,h[_]-I*3),L.copy(X).lerp(Z,h[_]),se(_,L),me=!0);const H=le.x-o[_],Q=le.z-l[_],ne=Math.hypot(H,Q)||1,J=pe.x-o[_],be=pe.z-l[_],de=Math.hypot(J,be)||1;let fe=H/ne,Oe=Q/ne;if(de<11){const Be=Qi.clamp(1.15-de/11,.25,.85);fe=fe*(1-Be)+J/de*Be,Oe=Oe*(1-Be)+be/de*Be;const $e=Math.hypot(fe,Oe)||1;fe/=$e,Oe/=$e}let oe=0,we=0;for(let Be=0;Be<8;Be++){const $e=(_+1+Be*37)%e;if(a[$e]!==zn||$e===_)continue;const je=o[_]-o[$e],Tt=l[_]-l[$e],It=je*je+Tt*Tt;if(It<1.6&&It>1e-4){const Fi=1/It;oe+=je*Fi,we+=Tt*Fi}}fe+=oe*.15,Oe+=we*.15;const Ne=bm(o[_],l[_],fe,Oe,U.enemySize*.5);fe=Ne.dirX,Oe=Ne.dirZ;const Fe=Math.hypot(fe,Oe)||1;fe/=Fe,Oe/=Fe;let Xe=Math.atan2(fe,Oe)-x[_];for(;Xe>Math.PI;)Xe-=Math.PI*2;for(;Xe<-Math.PI;)Xe+=Math.PI*2;x[_]+=Xe*Math.min(1,I*6);let ze=0,Qe=0,F=1,ge=1,K=0,re=!1;if(m[_]===$i&&(de<U.enemyAttackRange&&f[_]<=0?(m[_]=Ls,v[_]=0):re=!0),m[_]===Ls){const Be=Math.min(1,v[_]/U.enemyTelegraph),$e=Be*Be;Qe=.95*$e,F=1-$e*.22,ge=1+$e*.28,ze=$e*.15,x[_]=Math.atan2(J,be),v[_]>=U.enemyTelegraph&&(m[_]=Qo,v[_]=0)}else if(m[_]===Qo){const Be=Math.min(1,v[_]/U.enemyBonk);Qe=.95-Be*1.7,F=.78+Be*.4,ge=1.28-Be*.35,ze=(1-Be)*.12;const $e=7.5*(1-Be);o[_]+=Math.sin(x[_])*$e*I,l[_]+=Math.cos(x[_])*$e*I,Be>.35&&Be<.85&&f[_]<=0&&Math.hypot(pe.x-o[_],pe.z-l[_])<U.playerRadius+U.enemySize*.7&&(f[_]=U.enemyContactCooldown,ue==null||ue(_)),v[_]>=U.enemyBonk&&(m[_]=ec,v[_]=0)}else if(m[_]===ec){const Be=Math.min(1,v[_]/U.enemyRecover);Qe=Qi.lerp(-.35,0,Be),F=1,ge=1,v[_]>=U.enemyRecover&&(m[_]=$i,v[_]=0,f[_]=U.enemyContactCooldown*.5)}if(re){const Be=U.enemySpeed*(.9+_%5*.04);o[_]+=fe*Be*I,l[_]+=Oe*Be*I;const $e=A*7.5+p[_];ze=Math.abs(Math.sin($e))*.22,F=1+Math.sin($e)*.12,ge=1-Math.sin($e)*.1,K=Math.sin($e*.5)*.18,Qe=Math.sin($e)*.08}c[_]=U.enemySize/2;const xe=U.arenaRadius-1,ve=Math.hypot(o[_],l[_]);ve>xe&&(o[_]=o[_]/ve*xe,l[_]=l[_]/ve*xe);const ke={x:o[_],z:l[_]};Ma(ke,U.enemySize*.5),o[_]=ke.x,l[_]=ke.z,Me(_,{bounce:ze,lean:Qe,stretchY:F,stretchXZ:ge,wobbleRoll:K}),me=!0,ne<U.gateSize*.85&&f[_]<=0&&m[_]===$i&&(f[_]=U.enemyGateCooldown,Ue==null||Ue(_))}me&&te()}function Ze(I,pe,le,ue=.35){const Ue=[],me=I.x,A=I.z;for(let _=0;_<e;_++){if(a[_]!==zn)continue;const H=o[_]-me,Q=l[_]-A,ne=Math.hypot(H,Q);if(ne>le||ne<.01)continue;const J=H/ne,be=Q/ne;J*pe.x+be*pe.z>=ue&&Ue.push({i:_,dist:ne})}return Ue.sort((_,H)=>_.dist-H.dist),Ue}function B(I,pe){const le=[];for(let ue=0;ue<e;ue++){if(a[ue]!==zn)continue;const Ue=Math.hypot(o[ue]-I.x,l[ue]-I.z);Ue<=pe&&le.push({i:ue,dist:Ue})}return le}return{mesh:r,get aliveCount(){return ie},spawnWave:he,clear:Se,damage:Ee,update:De,queryHits:Ze,queryRadius:B,getPosition(I){return{x:o[I],y:c[I],z:l[I]}}}}function Qm(i,e,t){let n=0;function r(f,m){let v=0;const x=i.position.x,p=i.position.z;for(const d of f)e.damage(d.i,m,x,p)&&(v+=1);return f.length&&(n=Math.min(.4,n+.05+f.length*.012),t==null||t.hit(),i.state.hitStop=Math.max(i.state.hitStop,U.hitStop)),v}function s(f){if(f.kind==="radius"){const x=e.queryRadius(i.position,f.range);return r(x,f.damage)}const m=i.facingDir(),v=e.queryHits(i.position,m,f.range,f.arc??-.05);return r(v,f.damage)}function a(){i.tryLight()&&(t==null||t.slash())}function o(){i.tryHeavy()&&(t==null||t.slash())}function c(){i.tryPush()&&(t==null||t.push())}function l(){i.trySpin()&&(t==null||t.spin())}function u(){i.trySlam()&&(t==null||t.slam())}function h(f){n=Math.max(0,n-f*1.8);let m=0;const v=i.consumeHits();for(const x of v)m+=s(x),x.kind==="radius"&&x.damage>=U.slamDamage*.9&&(n=Math.min(.55,n+.22),t==null||t.slam());return m}return{light:a,heavy:o,push:c,spin:l,slam:u,update:h,get shake(){return n},addShake(f){n=Math.min(.6,n+f)}}}function eg(i,e,t){const n=e??{kind:"quadratic",base:4,quadratic:3.2,linear:5,cap:300},r=n.cap??t??300;if(n.kind==="fixed")return Math.min(r,Math.floor(n.count??12));if(n.kind==="linear")return Math.min(r,Math.floor((n.base??0)+i*(n.linear??4)));if(n.kind==="table"){const a=n.counts??[12],o=Math.min(Math.max(0,i-1),a.length-1);return Math.min(r,Math.floor(a[o]))}const s=(n.base??0)+i*i*(n.quadratic??3.2)+i*(n.linear??5);return Math.min(r,Math.floor(s))}function tg(i,e){let t=0,n="idle",r=0,s=0,a=0,o={};function c(p,d){o[p]=d}function l(p,d){var w;(w=o[p])==null||w.call(o,d)}function u(p){const d=Ko();return eg(p,d.waveCount,U.maxEnemies)}function h(){return Ko().betweenWavePause??1.4}function f(){t=0,a=0,i.clear(),m()}function m(){t+=1,n="countdown",r=U.waveCountdown,s=Math.ceil(r),l("countdown",{wave:t,value:s})}function v(){const p=u(t);i.spawnWave(p,e.portalPosition,e.gatePosition),n="fighting",l("fight",{wave:t,count:p})}function x(p){if(n==="countdown"){r-=p;const d=Math.max(0,Math.ceil(r));d!==s&&(s=d,l("countdown",{wave:t,value:s||"FIGHT!"})),r<=0&&v();return}if(n==="fighting"){i.aliveCount===0&&(a=t,n="between",r=h(),l("cleared",{wave:t}));return}n==="between"&&(r-=p,r<=0&&m())}return{on:c,startRun:f,update:x,spawnTestWave(p=24){i.spawnWave(p,e.portalPosition,e.gatePosition),n="fighting",l("fight",{wave:t,count:p})},clearHorde:()=>i.clear(),get wave(){return t},get phase(){return n},get wavesCleared(){return a},get countdownValue(){return s}}}function ng(){const i={hud:document.getElementById("hud"),menu:document.getElementById("menu"),gameover:document.getElementById("gameover"),studio:document.getElementById("studio-hud"),studioDomain:document.getElementById("studio-domain"),gateText:document.getElementById("gate-text"),gateFill:document.getElementById("gate-fill"),hpText:document.getElementById("hp-text"),hpFill:document.getElementById("hp-fill"),score:document.getElementById("stat-score"),wave:document.getElementById("stat-wave"),kills:document.getElementById("stat-kills"),time:document.getElementById("stat-time"),alive:document.getElementById("stat-alive"),callout:document.getElementById("wave-callout"),waveTitle:document.getElementById("wave-title"),waveCount:document.getElementById("wave-count"),hint:document.getElementById("hint"),goTitle:document.getElementById("go-title"),goFlavor:document.getElementById("go-flavor"),goScore:document.getElementById("go-score"),goKills:document.getElementById("go-kills"),goWaves:document.getElementById("go-waves"),goTime:document.getElementById("go-time"),goBest:document.getElementById("go-best")};function e(){var u;i.menu.classList.remove("hidden"),i.gameover.classList.add("hidden"),i.hud.classList.add("hidden"),(u=i.studio)==null||u.classList.add("hidden")}function t(){var u;i.menu.classList.add("hidden"),i.gameover.classList.add("hidden"),i.hud.classList.remove("hidden"),(u=i.studio)==null||u.classList.add("hidden")}function n(){var u;i.menu.classList.add("hidden"),i.gameover.classList.add("hidden"),i.hud.classList.add("hidden"),(u=i.studio)==null||u.classList.remove("hidden")}function r(u){if(!i.studioDomain)return;const h={things:"Things · craft props & gear",actors:"Actors · assemble enemies",events:"Events · chain triggers",world:"Worlds · review layouts"};i.studioDomain.textContent=u?h[u]??u:"Plaza · walk onto a domain pad",i.studioDomain.dataset.domain=u??"plaza"}function s({reason:u,score:h,kills:f,waves:m,time:v,best:x}){var p;i.gameover.classList.remove("hidden"),(p=i.studio)==null||p.classList.add("hidden"),i.goTitle.textContent="Game Over",i.goFlavor.textContent=u==="gate"?"The gate was breached.":"You fell in battle.",i.goScore.textContent=String(Math.floor(h)),i.goKills.textContent=String(f),i.goWaves.textContent=String(m),i.goTime.textContent=`${Math.floor(v)}s`,i.goBest.textContent=String(Math.floor(x))}function a(u){const h=Math.max(0,u.gateHp/u.gateMax),f=Math.max(0,u.hp/u.hpMax);i.gateText.textContent=`${Math.ceil(u.gateHp)} / ${u.gateMax}`,i.hpText.textContent=`${Math.ceil(u.hp)} / ${u.hpMax}`,i.gateFill.style.transform=`scaleX(${h})`,i.hpFill.style.transform=`scaleX(${f})`,i.score.textContent=String(Math.floor(u.score)),i.wave.textContent=String(u.wave),i.kills.textContent=String(u.kills),i.time.textContent=ym(u.time),i.alive.textContent=String(u.alive)}function o(u,h){i.callout.classList.remove("hidden"),i.waveTitle.textContent=`WAVE ${u}`,i.waveCount.textContent=String(h)}function c(){i.callout.classList.add("hidden")}function l(u){var h;(h=i.hint)==null||h.classList.toggle("hidden",!u)}return{showMenu:e,showHud:t,showStudio:n,showGameOver:s,update:a,showCallout:o,hideCallout:c,setHintVisible:l,setStudioDomain:r,els:i}}function ig(){let i=null,e=null;function t(){if(i)return i;const s=window.AudioContext||window.webkitAudioContext;return s?(i=new s,e=i.createGain(),e.gain.value=.22,e.connect(i.destination),i):null}function n(s,a,o="square",c=.2,l=0){const u=t();if(!u)return;u.state==="suspended"&&u.resume();const h=u.currentTime,f=u.createOscillator(),m=u.createGain();f.type=o,f.frequency.setValueAtTime(s,h),l&&f.frequency.exponentialRampToValueAtTime(Math.max(40,s+l),h+a),m.gain.setValueAtTime(c,h),m.gain.exponentialRampToValueAtTime(.001,h+a),f.connect(m),m.connect(e),f.start(h),f.stop(h+a+.02)}function r(s,a=.15,o=800){const c=t();if(!c)return;c.state==="suspended"&&c.resume();const l=c.currentTime,u=Math.floor(c.sampleRate*s),h=c.createBuffer(1,u,c.sampleRate),f=h.getChannelData(0);for(let p=0;p<u;p++)f[p]=Math.random()*2-1;const m=c.createBufferSource();m.buffer=h;const v=c.createBiquadFilter();v.type="bandpass",v.frequency.value=o,v.Q.value=.7;const x=c.createGain();x.gain.setValueAtTime(a,l),x.gain.exponentialRampToValueAtTime(.001,l+s),m.connect(v),v.connect(x),x.connect(e),m.start(l)}return{unlock(){var s,a;(a=(s=t())==null?void 0:s.resume)==null||a.call(s)},slash(){r(.08,.12,1800),n(420+Math.random()*80,.07,"sawtooth",.08,-180)},spin(){n(220,.12,"triangle",.1,120),r(.1,.1,600)},slam(){n(90,.18,"sine",.25,-40),r(.15,.2,200)},block(){n(160,.06,"square",.1),r(.05,.08,400)},push(){n(140,.1,"sawtooth",.12,-60),r(.08,.14,500)},hit(){n(300+Math.random()*40,.05,"square",.1,-100),r(.06,.12,900)},hurt(){n(180,.12,"sawtooth",.14,-80)},gateHit(){n(70,.1,"sine",.16,-20)},dodge(){n(520,.05,"sine",.06,80)}}}function rg(){return location.pathname.includes("/admin/")?!0:new URLSearchParams(location.search).has("admin")}function lt(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function bt(i,e){const t=lt("label","admin-field");return t.append(lt("span","admin-label",i),e),t}function Jt(i,e=1,t,n){const r=lt("input");return r.type="number",r.step=String(e),r.value=String(i),t!==void 0&&(r.min=String(t)),n!==void 0&&(r.max=String(n)),r}function nc(i){const e=lt("input");return e.type="color",e.value=i.startsWith("#")?i:`#${i}`,e}function sg(i){var g;if(!rg())return{enabled:!1};let e=!1,t="foundation";const n=lt("div","admin-studio hidden");n.innerHTML="";const r=lt("div","admin-header"),s=lt("strong","","Horde Admin Studio"),a=lt("button","admin-icon-btn","×");r.append(s,a);const o=lt("div","admin-tabs"),c=[["foundation","Foundation"],["world","World"],["things","Things"],["actors","Actors"],["events","Events"]],l={};for(const[P,T]of c){const R=lt("button","admin-tab",T);R.type="button",R.dataset.tab=P,l[P]=R,o.append(R)}const u=lt("div","admin-body"),h=lt("div","admin-footer"),f=lt("button","btn primary admin-apply","Apply to world"),m=lt("button","btn admin-export","Export JSON");h.append(f,m),n.append(r,o,u,h),(g=document.getElementById("app"))==null||g.append(n);function v(P){t=P;for(const[T,R]of Object.entries(l))R.classList.toggle("active",T===P);w()}function x(P,T){P.addEventListener("change",()=>T(Number(P.value)))}function p(P,T){P.addEventListener("input",()=>T(P.value))}function d(P,T){const R=structuredClone(ht()),C=P.split(".");let y=R;for(let M=0;M<C.length-1;M++){const b=C[M];y[b]===void 0&&(y[b]=/^\d+$/.test(C[M+1])?[]:{}),y=y[b]}y[C[C.length-1]]=T,er(Fa(R))}function w(){var T,R,C,y,M,b,O,N,G,X,Z,j,L,ie,ae,te,se,Me,q;u.replaceChildren();const P=ht();if(t==="foundation"){const D=lt("select");for(const Ee of Object.keys(qr)){const Ie=lt("option");Ie.value=Ee,Ie.textContent=Ee,(Ee===P.foundation.id||P.foundation.parentId===Ee)&&(Ie.selected=!0),D.append(Ie)}D.addEventListener("change",()=>{var Ee;er(vi(D.value)),xi(i,ht()),(Ee=i.onApply)==null||Ee.call(i),w()}),u.append(bt("Preset",D));const W=lt("input");W.value=P.foundation.id,W.addEventListener("change",()=>d("foundation.id",W.value)),u.append(bt("Level id",W));const ee=lt("input");ee.value=P.foundation.name??"",ee.addEventListener("change",()=>d("foundation.name",ee.value)),u.append(bt("Name",ee));const he=lt("label","admin-field"),Se=lt("input");Se.type="file",Se.accept=".json,application/json",Se.addEventListener("change",async()=>{var De;const Ee=(De=Se.files)==null?void 0:De[0];if(!Ee)return;const Ie=await Ee.text();er(Na(JSON.parse(Ie))),w()}),he.append(lt("span","admin-label","Import bundle"),Se),u.append(he)}if(t==="world"){const D=P.world,W=Jt(D.arenaRadius,1,12,40);x(W,I=>d("world.arenaRadius",I)),u.append(bt("Arena radius",W));const ee=Jt(D.gate.x,.5),he=Jt(D.gate.z,.5);x(ee,I=>d("world.gate.x",I)),x(he,I=>d("world.gate.z",I)),u.append(bt("Gate X",ee),bt("Gate Z",he));const Se=Jt(D.portal.x,.5),Ee=Jt(D.portal.z,.5);x(Se,I=>d("world.portal.x",I)),x(Ee,I=>d("world.portal.z",I)),u.append(bt("Portal X",Se),bt("Portal Z",Ee));const Ie=(T=D.obstacles)==null?void 0:T[0];if(Ie){const I=Jt(Ie.x,.5),pe=Jt(Ie.z,.5),le=Jt(Ie.radius,.1,.5,18);x(I,ue=>d("world.obstacles.0.x",ue)),x(pe,ue=>d("world.obstacles.0.z",ue)),x(le,ue=>d("world.obstacles.0.radius",ue)),u.append(lt("p","admin-hint","West berm obstacle")),u.append(bt("Berm X",I),bt("Berm Z",pe),bt("Berm radius",le))}const De=D.environment??{},Ze=nc(De.sky??"#a9c4d8"),B=nc(De.ground??"#4f8a3c");p(Ze,I=>d("world.environment.sky",I)),p(B,I=>d("world.environment.ground",I)),u.append(bt("Sky",Ze),bt("Ground",B))}if(t==="things"){const D=P.things??{},W=(ee,he,Se,Ee=1)=>{const Ie=Jt(Se,Ee);x(Ie,De=>d(he,De)),u.append(bt(ee,Ie))};W("Player HP","things.player.hp",((R=D.player)==null?void 0:R.hp)??100),W("Gate HP","things.gate.hp",((C=D.gate)==null?void 0:C.hp)??500),W("Enemy HP","things.enemy.hp",((y=D.enemy)==null?void 0:y.hp)??20),W("Enemy speed","things.enemy.speed",((M=D.enemy)==null?void 0:M.speed)??2.6,.1),W("Light damage","things.weapons.light.damage",((O=(b=D.weapons)==null?void 0:b.light)==null?void 0:O.damage)??18),W("Heavy damage","things.weapons.heavy.damage",((G=(N=D.weapons)==null?void 0:N.heavy)==null?void 0:G.damage)??42)}if(t==="actors"){const D=P.actors??{},W=(ee,he,Se,Ee=1)=>{const Ie=Jt(Se,Ee);x(Ie,De=>d(he,De)),u.append(bt(ee,Ie))};W("Max enemies","actors.horde.maxEnemies",((X=D.horde)==null?void 0:X.maxEnemies)??300,1),W("Corpse lifetime","actors.corpse.lifetime",((Z=D.corpse)==null?void 0:Z.lifetime)??2.8,.1),W("Camera distance","actors.camera.distance",((j=D.camera)==null?void 0:j.distance)??3.2,.1),W("Player speed","things.player.speed",((ie=(L=P.things)==null?void 0:L.player)==null?void 0:ie.speed)??8.5,.1)}if(t==="events"){const D=P.events??{},W=(Se,Ee,Ie,De=1)=>{const Ze=Jt(Ie,De);x(Ze,B=>d(Ee,B)),u.append(bt(Se,Ze))};W("Wave countdown","events.waveCountdown",D.waveCountdown??3,.5),W("Between-wave pause","events.betweenWavePause",D.betweenWavePause??1.4,.1),W("Wave base","events.waveCount.base",((ae=D.waveCount)==null?void 0:ae.base)??4),W("Wave quadratic","events.waveCount.quadratic",((te=D.waveCount)==null?void 0:te.quadratic)??3.2,.1),W("Wave linear","events.waveCount.linear",((se=D.waveCount)==null?void 0:se.linear)??5,.1),W("Wave cap","events.waveCount.cap",((Me=D.waveCount)==null?void 0:Me.cap)??300),W("Score per kill","events.scoring.perKill",((q=D.scoring)==null?void 0:q.perKill)??12);const ee=lt("button","btn","Spawn test wave (24)");ee.type="button",ee.addEventListener("click",()=>i.waves.spawnTestWave(24));const he=lt("button","btn","Clear horde");he.type="button",he.addEventListener("click",()=>i.waves.clearHorde()),u.append(ee,he)}}function E(P){var T;e=P,n.classList.toggle("hidden",!e),e&&((T=document.exitPointerLock)==null||T.call(document),w())}for(const P of Object.values(l))P.addEventListener("click",()=>v(P.dataset.tab));return a.addEventListener("click",()=>E(!1)),f.addEventListener("click",()=>{var P;xi(i,ht()),(P=i.onApply)==null||P.call(i)}),m.addEventListener("click",()=>{const P=ya($m(i)),T=new Blob([P],{type:"application/json"}),R=document.createElement("a");R.href=URL.createObjectURL(T),R.download=`${ht().foundation.id}.bundle.json`,R.click(),URL.revokeObjectURL(R.href)}),window.addEventListener("keydown",P=>{P.code==="Backquote"&&!P.target.closest("input, textarea, select")&&(P.preventDefault(),E(!e))}),v("foundation"),{enabled:!0,open:()=>E(!0),close:()=>E(!1)}}const ic={box:()=>new yt(1,1,1),sphere:()=>new or(.5,16,12),cylinder:()=>new qn(.5,.5,1,16)};function ag(i){const e=i.primitive??"box",t=(ic[e]??ic.box)(),n=new pt({color:new Ve(i.color??"#cccccc")}),r=new Ke(t,n);return r.name=i.id??e,r.position.set(i.x??0,i.y??0,i.z??0),r.scale.set(i.sx??1,i.sy??1,i.sz??1),r.userData.partId=i.id,r}function rc(i){const e=new gt;e.name=i.id??"thing",e.userData.thingId=i.id;for(const t of i.parts??[])e.add(ag(t));return e}function Vc(i="box"){const e={id:`${i}-${Math.random().toString(36).slice(2,7)}`,primitive:i,x:0,y:.5,z:0,sx:.5,sy:.5,sz:.5,color:"#c9a46a"};return i==="sphere"&&(e.sx=e.sy=e.sz=.4,e.y=.4),i==="cylinder"&&(e.sx=e.sz=.35,e.sy=.6,e.y=.3),e}function og(i="New Thing"){return{id:`${i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40)||"thing"}-${Math.random().toString(36).slice(2,5)}`,name:i,kind:"equip",slot:"hand",parts:[Vc("box")]}}const cg={things:13214826,actors:6007e3,events:14715438,world:7061370};function Fr(i,e="#f2f4f8"){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="rgba(10, 14, 22, 0.55)",n.fillRect(16,24,480,80),n.font="bold 48px Segoe UI, Trebuchet MS, sans-serif",n.fillStyle=e,n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,64);const r=new gm(t);r.colorSpace=Lt;const s=new Oc({map:r,transparent:!0,depthWrite:!1}),a=new hm(s);return a.scale.set(6,1.5,1),a}function lg(i){i.traverse(e=>{var t,n,r,s,a,o,c;(n=(t=e.geometry)==null?void 0:t.dispose)==null||n.call(t),e.material&&(Array.isArray(e.material)?e.material.forEach(l=>{var u;return(u=l.dispose)==null?void 0:u.call(l)}):(s=(r=e.material).dispose)==null||s.call(r)),(a=e.material)!=null&&a.map&&((c=(o=e.material.map).dispose)==null||c.call(o))})}function ug(i){const e=new gt;e.name="StudioWorkshop",e.visible=!1,i.add(e);const t=new gt;t.name="Pads",e.add(t);const n=new gt;n.name="Previews",e.add(n);let r=[],s=null;function a(v){for(;v.children.length;){const x=v.children[0];lg(x),v.remove(x)}}function o(v=[]){a(t),r=v.slice();for(const x of r){const p=cg[x.domain]??8947848,d=new gt;d.name=x.id,d.position.set(x.x,0,x.z);const w=new Ke(new yt(x.width,.08,x.depth),new pt({color:p,transparent:!0,opacity:.55}));w.position.y=.04,d.add(w);const E=new Ke(new yt(x.width+.3,.12,x.depth+.3),new pt({color:1712176,transparent:!0,opacity:.35}));E.position.y=.02,d.add(E);const g=Fr(x.label??x.domain.toUpperCase(),"#f2f4f8");g.position.set(0,2.4,-x.depth*.42),d.add(g);const P=new Ke(new qn(1.4,1.6,.18,24),new pt({color:2765124}));P.position.y=.12,d.add(P),t.add(d)}}function c(v){return r.find(x=>x.domain===v)}function l(v){var T,R,C;if(a(n),!v)return;const x=((T=v.things)==null?void 0:T.catalog)??[],p=((R=v.actors)==null?void 0:R.catalog)??[],d=((C=v.events)==null?void 0:C.scripts)??[],w=c("things"),E=c("actors"),g=c("events"),P=c("world");w&&x.forEach((y,M)=>{const b=rc(y),O=M%3,N=Math.floor(M/3);b.position.set(w.x+(O-1)*2.4,.35,w.z+N*2.2-1.5),n.add(b)}),E&&p.forEach((y,M)=>{const b=new gt;b.name=y.id;const O=new Ke(new yt(y.size??1.1,(y.size??1.1)*1.4,y.size??1.1),new pt({color:new Ve(y.color??"#888888")}));O.position.y=(y.size??1.1)*1.4/2,b.add(O);const N=(y.thingIds??[]).map(G=>x.find(X=>X.id===G)).filter(Boolean);for(const G of N){const X=rc(G);G.slot==="head"?X.position.set(0,(y.size??1.1)*1.45,0):G.slot==="hand"?X.position.set(.7,(y.size??1.1)*.7,.2):X.position.set(0,.2,.9),b.add(X)}if(y.summons){const G=Fr(`summons ≤${y.summons.maxAlive}`,"#f0c14a");G.scale.set(4,1,1),G.position.set(0,(y.size??1.1)*2.1,0),b.add(G)}b.position.set(E.x+(M-(p.length-1)/2)*3.2,.2,E.z),n.add(b)}),g&&d.forEach((y,M)=>{const b=new gt,O=new Ke(new yt(3.2,.2,2.2),new pt({color:3811864}));O.position.y=.2,b.add(O);const N=Fr(y.name??y.id,"#f0c14a");N.scale.set(5,1.2,1),N.position.set(0,1.6,0),b.add(N),(y.steps??[]).forEach((G,X)=>{const Z=new Ke(new yt(2.6,.35,.5),new pt({color:new Ve().setHSL(.08+X*.08,.65,.45)}));Z.position.set(0,.55+X*.45,0),b.add(Z)}),b.position.set(g.x+(M-(d.length-1)/2)*4,.15,g.z),n.add(b)}),P&&[{label:"default",r:1.8,c:5212732},{label:"pressure",r:2.2,c:9067068},{label:"studio",r:2,c:5925714}].forEach((M,b)=>{const O=new gt,N=new Ke(new ir(M.r,32),new pt({color:M.c,side:Ot}));N.rotation.x=-Math.PI/2,N.position.y=.12,O.add(N);const G=new Ke(new Jr(M.r,.08,8,32),new Ri({color:15922424}));G.rotation.x=Math.PI/2,G.position.y=.14,O.add(G);const X=Fr(M.label,"#f2f4f8");X.scale.set(3.5,.9,1),X.position.set(0,1.2,0),O.add(X),O.position.set(P.x+(b-1)*4.5,0,P.z),n.add(O)})}function u(v){var x;o(((x=v==null?void 0:v.world)==null?void 0:x.zones)??[]),l(v)}function h(v){e.visible=v}function f(v,x){for(const p of r){const d=p.width/2,w=p.depth/2;if(v>=p.x-d&&v<=p.x+d&&x>=p.z-w&&x<=p.z+w)return p.domain}return null}function m(v,x){const p=f(v,x);return p!==s?(s=p,p):s}return{root:e,applyBundle:u,setVisible:h,domainAt:f,updateFromPlayer:m,getActiveDomain:()=>s,rebuildPreviews:l}}const sc="horde-studio-draft";function Pe(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function nn(i,e){const t=Pe("label","admin-field");return t.append(Pe("span","admin-label",i),e),t}function gi(i,e=.05){const t=Pe("input");return t.type="number",t.step=String(e),t.value=String(i??0),t}function dg(i){var R;const e=Pe("aside","studio-dock hidden"),t=Pe("div","studio-dock-header"),n=Pe("strong","","Domain Workshop"),r=Pe("span","studio-domain-pill","plaza");t.append(n,r);const s=Pe("div","studio-dock-body"),a=Pe("div","studio-dock-footer"),o=Pe("button","btn primary","Save draft"),c=Pe("button","btn","Export bundle"),l=Pe("button","btn","Leave studio");a.append(o,c,l),e.append(t,s,a),(R=document.getElementById("app"))==null||R.append(e);let u=null,h=null,f=!1;function m(){var C;return((C=ht().things)==null?void 0:C.catalog)??[]}function v(C){var M;const y=structuredClone(ht());y.things=y.things??{},y.things.catalog=y.things.catalog??[],C(y.things.catalog),er(Fa(y)),(M=i.onCatalogChange)==null||M.call(i,ht()),T()}function x(){return m().find(C=>C.id===u)??m()[0]??null}function p(C){var y,M;return C?((y=C.parts)==null?void 0:y.find(b=>b.id===h))??((M=C.parts)==null?void 0:M[0])??null:null}function d(){var Me,q;s.replaceChildren(),s.append(Pe("p","admin-hint","Assemble from box / sphere / cylinder. Save drafts locally, export JSON into a bundle."));const C=Pe("div","studio-list");for(const D of m()){const W=Pe("button","studio-list-item",D.name);D.id===(u??((Me=m()[0])==null?void 0:Me.id))&&W.classList.add("active"),W.type="button",W.addEventListener("click",()=>{var ee,he;u=D.id,h=((he=(ee=D.parts)==null?void 0:ee[0])==null?void 0:he.id)??null,T()}),C.append(W)}s.append(C);const y=Pe("div","studio-btn-row"),M=Pe("button","btn","+ New thing");M.type="button",M.addEventListener("click",()=>{const D=og("New Thing");v(W=>{W.push(D),u=D.id,h=D.parts[0].id})}),y.append(M),s.append(y);const b=x();if(!b)return;const O=Pe("input");O.value=b.name,O.addEventListener("change",()=>{v(D=>{const W=D.find(ee=>ee.id===b.id);W&&(W.name=O.value)})}),s.append(nn("Name",O));const N=Pe("select");for(const D of["equip","prop"]){const W=Pe("option");W.value=D,W.textContent=D,D===b.kind&&(W.selected=!0),N.append(W)}N.addEventListener("change",()=>{v(D=>{const W=D.find(ee=>ee.id===b.id);W&&(W.kind=N.value)})}),s.append(nn("Kind",N));const G=Pe("select");for(const D of["head","hand","world"]){const W=Pe("option");W.value=D,W.textContent=D,D===b.slot&&(W.selected=!0),G.append(W)}G.addEventListener("change",()=>{v(D=>{const W=D.find(ee=>ee.id===b.id);W&&(W.slot=G.value)})}),s.append(nn("Slot",G)),s.append(Pe("p","admin-hint","Parts"));const X=Pe("div","studio-btn-row");for(const D of["box","sphere","cylinder"]){const W=Pe("button","btn",`+ ${D}`);W.type="button",W.addEventListener("click",()=>{const ee=Vc(D);v(he=>{const Se=he.find(Ee=>Ee.id===b.id);Se&&(Se.parts=Se.parts??[],Se.parts.push(ee),h=ee.id)})}),X.append(W)}s.append(X);const Z=Pe("div","studio-list");for(const D of b.parts??[]){const W=Pe("button","studio-list-item",`${D.primitive} · ${D.id}`);D.id===((q=p())==null?void 0:q.id)&&W.classList.add("active"),W.type="button",W.addEventListener("click",()=>{h=D.id,T()}),Z.append(W)}s.append(Z);const j=p(b);if(!j)return;const L=(D,W,ee=.05)=>(W.addEventListener("change",()=>{const he=D==="color"?W.value:Number(W.value);v(Se=>{var De;const Ee=Se.find(Ze=>Ze.id===b.id),Ie=(De=Ee==null?void 0:Ee.parts)==null?void 0:De.find(Ze=>Ze.id===j.id);Ie&&(Ie[D]=he)})}),W);s.append(Pe("p","admin-hint",`Gizmo · ${j.id}`)),s.append(nn("X",L("x",gi(j.x)))),s.append(nn("Y",L("y",gi(j.y)))),s.append(nn("Z",L("z",gi(j.z)))),s.append(nn("Scale X",L("sx",gi(j.sx)))),s.append(nn("Scale Y",L("sy",gi(j.sy)))),s.append(nn("Scale Z",L("sz",gi(j.sz))));const ie=Pe("input");ie.type="color",ie.value=(j.color??"#cccccc").startsWith("#")?j.color:`#${j.color}`,L("color",ie),s.append(nn("Color",ie));const ae=Pe("div","studio-btn-row"),te=[["−X","x",-.1],["+X","x",.1],["−Y","y",-.1],["+Y","y",.1],["−Z","z",-.1],["+Z","z",.1]];for(const[D,W,ee]of te){const he=Pe("button","btn studio-nudge",D);he.type="button",he.addEventListener("click",()=>{v(Se=>{var De;const Ee=Se.find(Ze=>Ze.id===b.id),Ie=(De=Ee==null?void 0:Ee.parts)==null?void 0:De.find(Ze=>Ze.id===j.id);Ie&&(Ie[W]=Number((Ie[W]+ee).toFixed(3)))})}),ae.append(he)}s.append(ae);const se=Pe("button","btn","Delete part");se.type="button",se.addEventListener("click",()=>{v(D=>{var ee;const W=D.find(he=>he.id===b.id);W&&(W.parts=(W.parts??[]).filter(he=>he.id!==j.id),h=((ee=W.parts[0])==null?void 0:ee.id)??null)})}),s.append(se)}function w(){var y;s.replaceChildren(),s.append(Pe("p","admin-hint","Actors wear Things you authored. Example: Enemy Captain equips hat + sword and refills up to 100 undead soldiers."));const C=((y=ht().actors)==null?void 0:y.catalog)??[];for(const M of C){const b=Pe("div","studio-card");b.append(Pe("strong","",M.name)),b.append(Pe("p","",`role ${M.role} · hp ${M.hp} · things: ${(M.thingIds??[]).join(", ")||"—"}`)),M.summons&&b.append(Pe("p","admin-hint",`summons ${M.summons.actorId} · maxAlive ${M.summons.maxAlive} · refill ${M.summons.refill}`)),s.append(b)}}function E(){var y;s.replaceChildren(),s.append(Pe("p","admin-hint","Event scripts chain world triggers. Sample: near chest → spawn captain → summon loop while alive → unlock chest on death."));const C=((y=ht().events)==null?void 0:y.scripts)??[];for(const M of C){const b=Pe("div","studio-card");b.append(Pe("strong","",M.name??M.id)),M.description&&b.append(Pe("p","",M.description));const O=Pe("ol","studio-steps");for(const N of M.steps??[]){const G=Pe("li","",N.id),X=Pe("code","",JSON.stringify(N.when??N.while??{})+" → "+JSON.stringify(N.then??{}));G.append(Pe("br"),X),O.append(G)}b.append(O),s.append(b)}}function g(){var M;s.replaceChildren(),s.append(Pe("p","admin-hint","Worlds pad reviews layout presets. Play Arena still uses combat bundles; this pad is for comparing authored worlds."));const C=((M=ht().world)==null?void 0:M.zones)??[];for(const b of C){const O=Pe("div","studio-card");O.append(Pe("strong","",`${b.label} (${b.domain})`)),O.append(Pe("p","",`pad at (${b.x}, ${b.z}) · ${b.width}×${b.depth}`)),s.append(O)}const y=Pe("div","studio-card");y.append(Pe("strong","","Active foundation")),y.append(Pe("p","",`${ht().foundation.name} · id ${ht().foundation.id}`)),s.append(y)}function P(){s.replaceChildren(),s.append(Pe("p","admin-hint","Walk onto a domain pad. Things = craft props & gear. Actors = assemble enemies from things. Events = chain triggers. Worlds = review layouts."));const C=Pe("ol","studio-steps");C.append(Pe("li","","Author a hat / sword on the Things pad")),C.append(Pe("li","","Build an Enemy Captain on Actors that equips them")),C.append(Pe("li","","Plan the chest → captain → undead refill → loot chain on Events")),C.append(Pe("li","","Review the workshop layout on Worlds")),s.append(C)}function T(){var y;const C=((y=i.getActiveDomain)==null?void 0:y.call(i))??null;r.textContent=C??"plaza",r.dataset.domain=C??"plaza",C==="things"?d():C==="actors"?w():C==="events"?E():C==="world"?g():P()}return o.addEventListener("click",()=>{localStorage.setItem(sc,ya(ht())),o.textContent="Saved ✓",setTimeout(()=>{o.textContent="Save draft"},1200)}),c.addEventListener("click",()=>{const C=ya(ht()),y=document.createElement("a");y.href=URL.createObjectURL(new Blob([C],{type:"application/json"})),y.download=`${ht().foundation.id}.bundle.json`,y.click(),URL.revokeObjectURL(y.href)}),l.addEventListener("click",()=>{var C;return(C=i.onLeave)==null?void 0:C.call(i)}),{root:e,render:T,setVisible(C){f=C,e.classList.toggle("hidden",!C),C&&T()},isVisible:()=>f,loadDraft(){const C=localStorage.getItem(sc);if(!C)return null;try{return JSON.parse(C)}catch{return null}}}}const ac="threejs-horde-best";function hg(i){const e=new lm({canvas:i,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=Lt;const t=new um,n=new Wt(72,window.innerWidth/window.innerHeight,.1,120),r=Km(t),s=ug(t),a=vi("default"),o=a.world.playerSpawn,c=jm(t,new V(o.x,0,o.z)),l=Jm(t),u=ig(),h=Qm(c,l,u),f=tg(l,r),m=Sm(i),v=ng();let x="menu",p=U.gateHp,d=0,w=0,E=0,g=Number(localStorage.getItem(ac)||0),P=0,T=performance.now(),R=!1,C=null;const y={arena:r,player:c,waves:f,swarm:l,scene:t,workshop:s,getBundle:ht,onApplied:null,onApply:null};xi(y,a),y.onApply=()=>{p=Math.min(p,U.gateHp),c.state.hp=Math.min(c.state.hp,U.playerHp)};const M=sg({...y,onApply:y.onApply}),b=dg({getActiveDomain:()=>s.getActiveDomain(),onCatalogChange:te=>{s.rebuildPreviews(te)},onLeave:()=>Z()});f.on("countdown",({wave:te,value:se})=>{v.showCallout(te,se)}),f.on("fight",()=>{v.hideCallout()}),f.on("cleared",()=>{d+=qm().waveClearBonus??40});function O(){const te=window.innerWidth,se=window.innerHeight;n.aspect=te/se,n.updateProjectionMatrix(),e.setSize(te,se)}window.addEventListener("resize",O);function N(){l.clear(),c.state.hp=U.playerHp,c.state.alive=!0,c.state.iFrames=0,c.state.vy=0;const te=ht().world.playerSpawn;c.setSpawn(te),c.state.yaw=Math.PI,c.state.pitch=.12,p=U.gateHp,d=0,w=0,E=0,r.gateMesh.material.color.setHex(14431557),f.startRun()}function G(){var te;u.unlock(),s.setVisible(!1),r.setSiegeVisible(!0),b.setVisible(!1),((te=ht().foundation)==null?void 0:te.id)==="studio"&&xi(y,vi("default")),N(),x="playing",v.showHud(),v.setHintVisible(!matchMedia("(pointer: coarse)").matches),m.requestLock()}function X(){var Me;u.unlock(),l.clear();const te=b.loadDraft(),se=((Me=te==null?void 0:te.foundation)==null?void 0:Me.id)==="studio"?Na(te):vi("studio");xi(y,se),s.setVisible(!0),r.setSiegeVisible(!1),c.state.hp=U.playerHp,c.state.alive=!0,c.state.vy=0,c.setSpawn(ht().world.playerSpawn),c.state.yaw=0,c.state.pitch=.1,x="studio",C=null,v.showStudio(),v.setStudioDomain(null),b.setVisible(!0),m.requestLock()}function Z(){var te;(te=document.exitPointerLock)==null||te.call(document),s.setVisible(!1),r.setSiegeVisible(!0),b.setVisible(!1),M.enabled&&M.close(),xi(y,vi("default")),l.clear(),x="menu",v.showMenu(),l.spawnWave(18,r.portalPosition,r.gatePosition)}function j(te){var se;x==="playing"&&(x="gameover",(se=document.exitPointerLock)==null||se.call(document),g=Math.max(g,d),localStorage.setItem(ac,String(Math.floor(g))),v.showGameOver({reason:te,score:d,kills:w,waves:f.wavesCleared,time:E,best:g}))}function L(){m.consumeAction("light")&&h.light(),m.consumeAction("push")&&h.push(),m.consumeAction("heavy")&&h.heavy(),m.consumeAction("spin")&&h.spin(),m.consumeAction("slam")&&h.slam(),m.consumeAction("dodge")&&c.tryDodge()&&u.dodge(),m.consumeAction("jump")&&c.tryJump(),m.consumeAction("camera")&&c.cycleCamera();const te=m.isBlocking();te&&!R&&u.block(),R=te}function ie(te){P=requestAnimationFrame(ie);const se=Math.min(.05,(te-T)/1e3);if(T=te,x==="playing"){const{dx:Me,dy:q}=m.consumeMouseDelta();c.applyLook(Me,q),L(),c.update(se,m,r.clampToArena);const D=h.update(se);D>0&&(w+=D,d+=D*U.scorePerKill),f.update(se),l.update(se,c.position,r.gatePosition,ee=>{const he=l.getPosition(ee);c.takeDamage(U.enemyContactDamage,he.x,he.z)>0&&(u.hurt(),h.addShake(.12),d+=1),c.state.alive||j("player")},()=>{p=Math.max(0,p-U.enemyGateDamage),r.gateMesh.material.emissive.setHex(16729156),r.gateMesh.material.emissiveIntensity=.85,u.gateHit(),h.addShake(.08),p<=0&&j("gate")}),r.gateMesh.material.emissiveIntensity=Math.max(0,r.gateMesh.material.emissiveIntensity-se*2.5),f.phase==="fighting"&&(l.aliveCount>0&&(d+=U.scorePerSecondNear*se),E+=se),Jo(n,c,se),h.shake>0&&(n.position.x+=(Math.random()-.5)*h.shake,n.position.y+=(Math.random()-.5)*h.shake*.6),v.update({gateHp:p,gateMax:U.gateHp,hp:c.state.hp,hpMax:U.playerHp,score:d,wave:f.wave,kills:w,time:E,alive:l.aliveCount});const W=p/U.gateHp;r.gateMesh.material.color.setRGB(.86*(.4+.6*W),.21*W,.27*W)}else if(x==="studio"){const{dx:Me,dy:q}=m.consumeMouseDelta();c.applyLook(Me,q),m.consumeAction("jump")&&c.tryJump(),m.consumeAction("camera")&&c.cycleCamera(),c.update(se,m,r.clampToArena),Jo(n,c,se);const D=s.updateFromPlayer(c.position.x,c.position.z);D!==C&&(C=D,v.setStudioDomain(D),b.isVisible()&&b.render())}else{l.update(se*.35,c.position,r.gatePosition);const Me=te*25e-5;n.position.set(Math.sin(Me)*14,8,Math.cos(Me)*14),n.lookAt(0,1,-8)}e.render(t,n)}function ae(){var te,se,Me,q,D;(te=document.getElementById("btn-play"))==null||te.addEventListener("click",()=>G()),(se=document.getElementById("btn-studio"))==null||se.addEventListener("click",()=>X()),(Me=document.getElementById("btn-retry"))==null||Me.addEventListener("click",()=>G()),(q=document.getElementById("btn-menu"))==null||q.addEventListener("click",()=>{x="menu",l.clear(),v.showMenu()}),(D=document.getElementById("btn-studio-leave"))==null||D.addEventListener("click",()=>Z()),window.addEventListener("keydown",W=>{var ee;W.code==="Escape"&&((ee=document.exitPointerLock)==null||ee.call(document),v.setHintVisible(!0),x==="studio"&&b.setVisible(!0))})}return ae(),v.showMenu(),l.spawnWave(18,r.portalPosition,r.gatePosition),P=requestAnimationFrame(ie),globalThis.__horde={player:c,admin:M,dock:b,workshop:s,getBundle:ht,startStudio:X,isBlocking:()=>c.state.blocking,shieldPos:()=>({...c.shield.position})},{start:G,startStudio:X,admin:M,dispose(){cancelAnimationFrame(P),m.dispose(),window.removeEventListener("resize",O),e.dispose()}}}const fg=`
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="31" fill="#111"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="#f8f4f3" stroke-width="3"/>
    <circle cx="32" cy="32" r="14" fill="none" stroke="#f8f4f3" stroke-width="2" opacity="0.55"/>
  </svg>
`;function pg(i="sm"){return`
    <div class="sg-coin${i==="lg"?" sg-coin--lg":""}" aria-hidden="true">
      <div class="sg-coin__scene">
        <div class="sg-coin__spin">
          <div class="sg-coin__face sg-coin__face--front">
            <img src="/admin/horde-three/assets/logo.svg" alt="" width="64" height="64" decoding="async" />
          </div>
          <div class="sg-coin__face sg-coin__face--back">${fg}</div>
        </div>
      </div>
    </div>
  `}function mg(){document.querySelectorAll("[data-sg-coin]").forEach(i=>{const e=i.dataset.sgCoin==="lg"?"lg":"sm";i.innerHTML=pg(e)})}mg();const gg=document.getElementById("game");hg(gg);
