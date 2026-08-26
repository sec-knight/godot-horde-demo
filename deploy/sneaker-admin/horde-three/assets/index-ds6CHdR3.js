(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ca="170",al=0,ja=1,ol=2,vc=1,cl=2,pn=3,Pn=0,It=1,Bt=2,Rn=0,yi=1,Ja=2,Qa=3,eo=4,ll=5,Gn=100,ul=101,dl=102,hl=103,fl=104,pl=200,ml=201,gl=202,_l=203,zs=204,ks=205,vl=206,xl=207,Ml=208,yl=209,Sl=210,El=211,bl=212,wl=213,Tl=214,Hs=0,Vs=1,Gs=2,wi=3,Ws=4,Xs=5,qs=6,Ys=7,Pa=0,Al=1,Rl=2,Cn=0,Cl=1,Pl=2,Ll=3,Dl=4,Il=5,Ul=6,Nl=7,xc=300,Ti=301,Ai=302,$s=303,Ks=304,Qr=306,Zs=1e3,Yn=1001,js=1002,zt=1003,Fl=1004,hr=1005,sn=1006,as=1007,$n=1008,vn=1009,Mc=1010,yc=1011,ir=1012,La=1013,Kn=1014,an=1015,or=1016,Da=1017,Ia=1018,Ri=1020,Sc=35902,Ec=1021,bc=1022,tn=1023,wc=1024,Tc=1025,Si=1026,Ci=1027,Ua=1028,Na=1029,Ac=1030,Fa=1031,Oa=1033,zr=33776,kr=33777,Hr=33778,Vr=33779,Js=35840,Qs=35841,ea=35842,ta=35843,na=36196,ia=37492,ra=37496,sa=37808,aa=37809,oa=37810,ca=37811,la=37812,ua=37813,da=37814,ha=37815,fa=37816,pa=37817,ma=37818,ga=37819,_a=37820,va=37821,Gr=36492,xa=36494,Ma=36495,Rc=36283,ya=36284,Sa=36285,Ea=36286,Ol=3200,Bl=3201,Cc=0,zl=1,An="",Dt="srgb",Ii="srgb-linear",es="linear",rt="srgb",ei=7680,to=519,kl=512,Hl=513,Vl=514,Pc=515,Gl=516,Wl=517,Xl=518,ql=519,ba=35044,no=35048,io="300 es",mn=2e3,qr=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ro=1234567;const er=Math.PI/180,rr=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function Ba(i,e){return(i%e+e)%e}function Yl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function $l(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function Kl(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function Zl(i,e=1){return e-Math.abs(Ba(i,e*2)-e)}function jl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ql(i,e){return i+Math.floor(Math.random()*(e-i+1))}function eu(i,e){return i+Math.random()*(e-i)}function tu(i){return i*(.5-Math.random())}function nu(i){i!==void 0&&(ro=i);let e=ro+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iu(i){return i*er}function ru(i){return i*rr}function su(i){return(i&i-1)===0&&i!==0}function au(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cu(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),d=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*d,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*d,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*d,o*l);break;case"XZX":i.set(o*d,c*_,c*m,o*l);break;case"YXY":i.set(c*m,o*d,c*_,o*l);break;case"ZYZ":i.set(c*_,c*m,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nr={DEG2RAD:er,RAD2DEG:rr,generateUUID:gn,clamp:Pt,euclideanModulo:Ba,mapLinear:Yl,inverseLerp:$l,lerp:tr,damp:Kl,pingpong:Zl,smoothstep:jl,smootherstep:Jl,randInt:Ql,randFloat:eu,randFloatSpread:tu,seededRandom:nu,degToRad:iu,radToDeg:ru,isPowerOfTwo:su,ceilPowerOfTwo:au,floorPowerOfTwo:ou,setQuaternionFromProperEuler:cu,normalize:it,denormalize:en};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],f=n[7],h=n[2],m=n[5],_=n[8],x=r[0],p=r[3],u=r[6],v=r[1],b=r[4],y=r[7],C=r[2],w=r[5],R=r[8];return s[0]=a*x+o*v+c*C,s[3]=a*p+o*b+c*w,s[6]=a*u+o*y+c*R,s[1]=l*x+d*v+f*C,s[4]=l*p+d*b+f*w,s[7]=l*u+d*y+f*R,s[2]=h*x+m*v+_*C,s[5]=h*p+m*b+_*w,s[8]=h*u+m*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=d*a-o*l,h=o*c-d*s,m=l*s-a*c,_=t*f+n*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*l-d*n)*x,e[2]=(o*n-r*a)*x,e[3]=h*x,e[4]=(d*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(os.makeScale(e,t)),this}rotate(e){return this.premultiply(os.makeRotation(-e)),this}translate(e,t){return this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const os=new We;function Lc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lu(){const i=Yr("canvas");return i.style.display="block",i}const so={};function Ji(i){i in so||(so[i]=!0,console.warn(i))}function uu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function du(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?es:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ei(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ao=[.64,.33,.3,.6,.15,.06],oo=[.2126,.7152,.0722],co=[.3127,.329],lo=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Ii]:{primaries:ao,whitePoint:co,transfer:es,toXYZ:lo,fromXYZ:uo,luminanceCoefficients:oo,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:ao,whitePoint:co,transfer:rt,toXYZ:lo,fromXYZ:uo,luminanceCoefficients:oo,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}});let ti;class fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=Yr("canvas")),ti.width=e.width,ti.height=e.height;const n=ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_n(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_n(t[n]/255)*255):t[n]=_n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pu=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(cs(r[a].image)):s.push(cs(r[a]))}else s=cs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function cs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mu=0;class Tt extends Ui{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Yn,r=Yn,s=sn,a=$n,o=tn,c=vn,l=Tt.DEFAULT_ANISOTROPY,d=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=gn(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=xc;Tt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],d=c[4],f=c[8],h=c[1],m=c[5],_=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(m+1)/2,C=(u+1)/2,w=(d+h)/4,R=(f+x)/4,I=(_+p)/4;return b>y&&b>C?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=w/n,s=R/n):y>C?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=I/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=R/s,r=I/s),this.set(n,r,s,t),this}let v=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-x)/v,this.z=(h-d)/v,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gu extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends gu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ic extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],f=n[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(f!==x||c!==h||l!==m||d!==_){let p=1-o;const u=c*h+l*m+d*_+f*x,v=u>=0?1:-1,b=1-u*u;if(b>Number.EPSILON){const C=Math.sqrt(b),w=Math.atan2(C,u*v);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}const y=o*v;if(c=c*p+h*y,l=l*p+m*y,d=d*p+_*y,f=f*p+x*y,p===1-o){const C=1/Math.sqrt(c*c+l*l+d*d+f*f);c*=C,l*=C,d*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+d*f+c*m-l*h,e[t+1]=c*_+d*h+l*f-o*m,e[t+2]=l*_+d*m+o*h-c*f,e[t+3]=d*_-o*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),f=o(s/2),h=c(n/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=h*d*f+l*m*_,this._y=l*m*f-h*d*_,this._z=l*d*_+h*m*f,this._w=l*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+l*m*_,this._y=l*m*f-h*d*_,this._z=l*d*_-h*m*f,this._w=l*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-l*m*_,this._y=l*m*f+h*d*_,this._z=l*d*_+h*m*f,this._w=l*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-l*m*_,this._y=l*m*f+h*d*_,this._z=l*d*_-h*m*f,this._w=l*d*f+h*m*_;break;case"YZX":this._x=h*d*f+l*m*_,this._y=l*m*f+h*d*_,this._z=l*d*_-h*m*f,this._w=l*d*f-h*m*_;break;case"XZY":this._x=h*d*f-l*m*_,this._y=l*m*f-h*d*_,this._z=l*d*_+h*m*f,this._w=l*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),f=Math.sin((1-t)*d)/l,h=Math.sin(t*d)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),d=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*d,this.y=n+c*d+o*l-s*f,this.z=r+c*f+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ls.copy(this).projectOnVector(e),this.sub(ls)}reflect(e){return this.sub(ls.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ls=new W,ho=new cr;class Jn{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),pr.subVectors(this.max,Hi),ni.subVectors(e.a,Hi),ii.subVectors(e.b,Hi),ri.subVectors(e.c,Hi),yn.subVectors(ii,ni),Sn.subVectors(ri,ii),In.subVectors(ni,ri);let t=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-In.z,In.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,In.z,0,-In.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-In.y,In.x,0];return!us(t,ni,ii,ri,pr)||(t=[1,0,0,0,1,0,0,0,1],!us(t,ni,ii,ri,pr))?!1:(mr.crossVectors(yn,Sn),t=[mr.x,mr.y,mr.z],us(t,ni,ii,ri,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new W,new W,new W,new W,new W,new W,new W,new W],Kt=new W,fr=new Jn,ni=new W,ii=new W,ri=new W,yn=new W,Sn=new W,In=new W,Hi=new W,pr=new W,mr=new W,Un=new W;function us(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Un.fromArray(i,s);const o=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),c=e.dot(Un),l=t.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const vu=new Jn,Vi=new W,ds=new W;class Ni{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(ds)),this.expandByPoint(Vi.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new W,hs=new W,gr=new W,En=new W,fs=new W,_r=new W,ps=new W;class xu{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hs.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),En.copy(this.origin).sub(hs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=En.dot(this.direction),c=-En.dot(gr),l=En.lengthSq(),d=Math.abs(1-a*a);let f,h,m,_;if(d>0)if(f=a*c-o,h=a*o-c,_=s*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,m=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l):h<=_?(f=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hs).addScaledVector(gr,h),m}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){fs.subVectors(t,e),_r.subVectors(n,e),ps.crossVectors(fs,_r);let a=this.direction.dot(ps),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const c=o*this.direction.dot(_r.crossVectors(En,_r));if(c<0)return null;const l=o*this.direction.dot(fs.cross(En));if(l<0||c+l>a)return null;const d=-o*En.dot(ps);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,s,a,o,c,l,d,f,h,m,_,x,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,d,f,h,m,_,x,p)}set(e,t,n,r,s,a,o,c,l,d,f,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/si.setFromMatrixColumn(e,0).length(),s=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,_=o*d,x=o*f;t[0]=c*d,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*d,m=c*f,_=l*d,x=l*f;t[0]=h+x*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-_,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*d,m=c*f,_=l*d,x=l*f;t[0]=h-x*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*d,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*d,m=a*f,_=o*d,x=o*f;t[0]=c*d,t[4]=_*l-m,t[8]=h*l+x,t[1]=c*f,t[5]=x*l+h,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*d,t[4]=x-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=m*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*d,t[4]=-f,t[8]=l*d,t[1]=h*f+x,t[5]=a*d,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*d,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mu,e,yu)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),bn.crossVectors(n,Ft),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),bn.crossVectors(n,Ft)),bn.normalize(),vr.crossVectors(Ft,bn),r[0]=bn.x,r[4]=vr.x,r[8]=Ft.x,r[1]=bn.y,r[5]=vr.y,r[9]=Ft.y,r[2]=bn.z,r[6]=vr.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],f=n[5],h=n[9],m=n[13],_=n[2],x=n[6],p=n[10],u=n[14],v=n[3],b=n[7],y=n[11],C=n[15],w=r[0],R=r[4],I=r[8],S=r[12],M=r[1],A=r[5],P=r[9],D=r[13],X=r[2],B=r[6],L=r[10],Y=r[14],H=r[3],te=r[7],ne=r[11],ae=r[15];return s[0]=a*w+o*M+c*X+l*H,s[4]=a*R+o*A+c*B+l*te,s[8]=a*I+o*P+c*L+l*ne,s[12]=a*S+o*D+c*Y+l*ae,s[1]=d*w+f*M+h*X+m*H,s[5]=d*R+f*A+h*B+m*te,s[9]=d*I+f*P+h*L+m*ne,s[13]=d*S+f*D+h*Y+m*ae,s[2]=_*w+x*M+p*X+u*H,s[6]=_*R+x*A+p*B+u*te,s[10]=_*I+x*P+p*L+u*ne,s[14]=_*S+x*D+p*Y+u*ae,s[3]=v*w+b*M+y*X+C*H,s[7]=v*R+b*A+y*B+C*te,s[11]=v*I+b*P+y*L+C*ne,s[15]=v*S+b*D+y*Y+C*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*c*f-r*l*f-s*o*h+n*l*h+r*o*m-n*c*m)+x*(+t*c*m-t*l*h+s*a*h-r*a*m+r*l*d-s*c*d)+p*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*d-n*l*d)+u*(-r*o*d-t*c*f+t*o*h+r*a*f-n*a*h+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],v=f*p*l-x*h*l+x*c*m-o*p*m-f*c*u+o*h*u,b=_*h*l-d*p*l-_*c*m+a*p*m+d*c*u-a*h*u,y=d*x*l-_*f*l+_*o*m-a*x*m-d*o*u+a*f*u,C=_*f*c-d*x*c-_*o*h+a*x*h+d*o*p-a*f*p,w=t*v+n*b+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=v*R,e[1]=(x*h*s-f*p*s-x*r*m+n*p*m+f*r*u-n*h*u)*R,e[2]=(o*p*s-x*c*s+x*r*l-n*p*l-o*r*u+n*c*u)*R,e[3]=(f*c*s-o*h*s-f*r*l+n*h*l+o*r*m-n*c*m)*R,e[4]=b*R,e[5]=(d*p*s-_*h*s+_*r*m-t*p*m-d*r*u+t*h*u)*R,e[6]=(_*c*s-a*p*s-_*r*l+t*p*l+a*r*u-t*c*u)*R,e[7]=(a*h*s-d*c*s+d*r*l-t*h*l-a*r*m+t*c*m)*R,e[8]=y*R,e[9]=(_*f*s-d*x*s-_*n*m+t*x*m+d*n*u-t*f*u)*R,e[10]=(a*x*s-_*o*s+_*n*l-t*x*l-a*n*u+t*o*u)*R,e[11]=(d*o*s-a*f*s-d*n*l+t*f*l+a*n*m-t*o*m)*R,e[12]=C*R,e[13]=(d*x*r-_*f*r+_*n*h-t*x*h-d*n*p+t*f*p)*R,e[14]=(_*o*r-a*x*r-_*n*c+t*x*c+a*n*p-t*o*p)*R,e[15]=(a*f*r-d*o*r+d*n*c-t*f*c-a*n*h+t*o*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,f=o+o,h=s*l,m=s*d,_=s*f,x=a*d,p=a*f,u=o*f,v=c*l,b=c*d,y=c*f,C=n.x,w=n.y,R=n.z;return r[0]=(1-(x+u))*C,r[1]=(m+y)*C,r[2]=(_-b)*C,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(h+u))*w,r[6]=(p+v)*w,r[7]=0,r[8]=(_+b)*R,r[9]=(p-v)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=si.set(r[0],r[1],r[2]).length();const a=si.set(r[4],r[5],r[6]).length(),o=si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const l=1/s,d=1/a,f=1/o;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=d,Zt.elements[5]*=d,Zt.elements[6]*=d,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=mn){const c=this.elements,l=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let m,_;if(o===mn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===qr)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=mn){const c=this.elements,l=1/(t-e),d=1/(n-r),f=1/(a-s),h=(t+e)*l,m=(n+r)*d;let _,x;if(o===mn)_=(a+s)*f,x=-2*f;else if(o===qr)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new W,Zt=new ot,Mu=new W(0,0,0),yu=new W(1,1,1),bn=new W,vr=new W,Ft=new W,fo=new ot,po=new cr;class on{constructor(e=0,t=0,n=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return po.setFromEuler(this),this.setFromQuaternion(po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Su=0;const mo=new W,ai=new cr,dn=new ot,xr=new W,Gi=new W,Eu=new W,bu=new cr,go=new W(1,0,0),_o=new W(0,1,0),vo=new W(0,0,1),xo={type:"added"},wu={type:"removed"},oi={type:"childadded",child:null},ms={type:"childremoved",child:null};class _t extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new W,t=new on,n=new cr,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new We}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(go,e)}rotateY(e){return this.rotateOnAxis(_o,e)}rotateZ(e){return this.rotateOnAxis(vo,e)}translateOnAxis(e,t){return mo.copy(e).applyQuaternion(this.quaternion),this.position.add(mo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(go,e)}translateY(e){return this.translateOnAxis(_o,e)}translateZ(e){return this.translateOnAxis(vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Gi,xr,this.up):dn.lookAt(xr,Gi,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),ai.setFromRotationMatrix(dn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xo),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu),ms.child=e,this.dispatchEvent(ms),ms.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xo),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Eu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}_t.DEFAULT_UP=new W(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new W,hn=new W,gs=new W,fn=new W,ci=new W,li=new W,Mo=new W,_s=new W,vs=new W,xs=new W,Ms=new dt,ys=new dt,Ss=new dt;class qt{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jt.subVectors(r,t),hn.subVectors(n,t),gs.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(hn),c=jt.dot(gs),l=hn.dot(hn),d=hn.dot(gs),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(l*c-o*d)*h,_=(a*d-o*c)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ms.setScalar(0),ys.setScalar(0),Ss.setScalar(0),Ms.fromBufferAttribute(e,t),ys.fromBufferAttribute(e,n),Ss.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ms,s.x),a.addScaledVector(ys,s.y),a.addScaledVector(Ss,s.z),a}static isFrontFacing(e,t,n,r){return jt.subVectors(n,t),hn.subVectors(e,t),jt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),jt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ci.subVectors(r,n),li.subVectors(s,n),_s.subVectors(e,n);const c=ci.dot(_s),l=li.dot(_s);if(c<=0&&l<=0)return t.copy(n);vs.subVectors(e,r);const d=ci.dot(vs),f=li.dot(vs);if(d>=0&&f<=d)return t.copy(r);const h=c*f-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(ci,a);xs.subVectors(e,s);const m=ci.dot(xs),_=li.dot(xs);if(_>=0&&m<=_)return t.copy(s);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(li,o);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return Mo.subVectors(s,r),o=(f-d)/(f-d+(m-_)),t.copy(r).addScaledVector(Mo,o);const u=1/(p+x+h);return a=x*u,o=h*u,t.copy(n).addScaledVector(ci,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Ba(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Es(a,s,e+1/3),this.g=Es(a,s,e),this.b=Es(a,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}copyLinearToSRGB(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Je.fromWorkingColorSpace(bt.copy(this),e),Math.round(Pt(bt.r*255,0,255))*65536+Math.round(Pt(bt.g*255,0,255))*256+Math.round(Pt(bt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,r=bt.g,s=bt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=d<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Dt){Je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,r=bt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Mr);const n=tr(wn.h,Mr.h,t),r=tr(wn.s,Mr.s,t),s=tr(wn.l,Mr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ve;Ve.NAMES=Nc;let Tu=0;class Fi extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=gn(),this.name="",this.blending=yi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zs,this.blendDst=ks,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=to,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zs&&(n.blendSrc=this.blendSrc),this.blendDst!==ks&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==to&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pi extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new W,yr=new $e;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ba&&(e.usage=this.usage),e}}class Fc extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oc extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Au=0;const Vt=new ot,bs=new _t,ui=new W,Ot=new Jn,Wi=new Jn,Mt=new W;class kt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?Oc:Fc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return bs.lookAt(e),bs.updateMatrix(),this.applyMatrix4(bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Ot.min,Wi.min),Ot.expandByPoint(Mt),Mt.addVectors(Ot.max,Wi.max),Ot.expandByPoint(Mt)):(Ot.expandByPoint(Wi.min),Ot.expandByPoint(Wi.max))}Ot.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Mt.fromBufferAttribute(o,l),c&&(ui.fromBufferAttribute(e,l),Mt.add(ui)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new W,c[I]=new W;const l=new W,d=new W,f=new W,h=new $e,m=new $e,_=new $e,x=new W,p=new W;function u(I,S,M){l.fromBufferAttribute(n,I),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),h.fromBufferAttribute(s,I),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),d.sub(l),f.sub(l),m.sub(h),_.sub(h);const A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(A),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(A),o[I].add(x),o[S].add(x),o[M].add(x),c[I].add(p),c[S].add(p),c[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,S=v.length;I<S;++I){const M=v[I],A=M.start,P=M.count;for(let D=A,X=A+P;D<X;D+=3)u(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const b=new W,y=new W,C=new W,w=new W;function R(I){C.fromBufferAttribute(r,I),w.copy(C);const S=o[I];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(w,S);const A=y.dot(c[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,A)}for(let I=0,S=v.length;I<S;++I){const M=v[I],A=M.start,P=M.count;for(let D=A,X=A+P;D<X;D+=3)R(e.getX(D+0)),R(e.getX(D+1)),R(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,c=new W,l=new W,d=new W,f=new W;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(d),c.add(d),l.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,f=o.normalized,h=new l.constructor(c.length*d);let m=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*d;for(let u=0;u<d;u++)h[_++]=l[m++]}return new Yt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,f=l.length;d<f;d++){const h=l[d],m=e(h,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],f=s[l];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new ot,Nn=new xu,Sr=new Ni,So=new W,Er=new W,br=new W,wr=new W,ws=new W,Tr=new W,Eo=new W,Ar=new W;class Ze extends _t{constructor(e=new kt,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],f=s[c];d!==0&&(ws.fromBufferAttribute(f,e),a?Tr.addScaledVector(ws,d):Tr.addScaledVector(ws.sub(t),d))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(Sr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Sr,So)===null||Nn.origin.distanceToSquared(So)>(e.far-e.near)**2))&&(yo.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(yo),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,C=b;y<C;y+=3){const w=o.getX(y),R=o.getX(y+1),I=o.getX(y+2);r=Rr(this,u,e,n,l,d,f,w,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);r=Rr(this,a,e,n,l,d,f,v,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=v,C=b;y<C;y+=3){const w=y,R=y+1,I=y+2;r=Rr(this,u,e,n,l,d,f,w,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const v=p,b=p+1,y=p+2;r=Rr(this,a,e,n,l,d,f,v,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ru(i,e,t,n,r,s,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Pn,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ar);return l<t.near||l>t.far?null:{distance:l,point:Ar.clone(),object:i}}function Rr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Er),i.getVertexPosition(c,br),i.getVertexPosition(l,wr);const d=Ru(i,e,t,n,Er,br,wr,Eo);if(d){const f=new W;qt.getBarycoord(Eo,Er,br,wr,f),r&&(d.uv=qt.getInterpolatedAttribute(r,o,c,l,f,new $e)),s&&(d.uv1=qt.getInterpolatedAttribute(s,o,c,l,f,new $e)),a&&(d.normal=qt.getInterpolatedAttribute(a,o,c,l,f,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new W,materialIndex:0};qt.getNormal(Er,br,wr,h.normal),d.face=h,d.barycoord=f}return d}class yt extends kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function _(x,p,u,v,b,y,C,w,R,I,S){const M=y/R,A=C/I,P=y/2,D=C/2,X=w/2,B=R+1,L=I+1;let Y=0,H=0;const te=new W;for(let ne=0;ne<L;ne++){const ae=ne*A-D;for(let ge=0;ge<B;ge++){const Se=ge*M-P;te[x]=Se*v,te[p]=ae*b,te[u]=X,l.push(te.x,te.y,te.z),te[x]=0,te[p]=0,te[u]=w>0?1:-1,d.push(te.x,te.y,te.z),f.push(ge/R),f.push(1-ne/I),Y+=1}}for(let ne=0;ne<I;ne++)for(let ae=0;ae<R;ae++){const ge=h+ae+B*ne,Se=h+ae+B*(ne+1),G=h+(ae+1)+B*(ne+1),q=h+(ae+1)+B*ne;c.push(ge,Se,q),c.push(Se,G,q),H+=6}o.addGroup(m,H,S),m+=H,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const r in n)e[r]=n[r]}return e}function Cu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Pu={clone:Li,merge:Ct};var Lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lu,this.fragmentShader=Du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Cu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zc extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new W,bo=new $e,wo=new $e;class Xt extends zc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,bo,wo),t.subVectors(wo,bo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const di=-90,hi=1;class Iu extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(di,hi,e,t);r.layers=this.layers,this.add(r);const s=new Xt(di,hi,e,t);s.layers=this.layers,this.add(s);const a=new Xt(di,hi,e,t);a.layers=this.layers,this.add(a);const o=new Xt(di,hi,e,t);o.layers=this.layers,this.add(o);const c=new Xt(di,hi,e,t);c.layers=this.layers,this.add(c);const l=new Xt(di,hi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class kc extends Tt{constructor(e,t,n,r,s,a,o,c,l,d){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uu extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new kc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yt(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Rn});s.uniforms.tEquirect.value=t;const a=new Ze(r,s),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=sn),new Iu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ts=new W,Nu=new W,Fu=new We;class Hn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ts.subVectors(n,t).cross(Nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ts),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fu.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Ni,Cr=new W;class za{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,a=new Hn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],v=r[13],b=r[14],y=r[15];if(n[0].setComponents(c-s,h-l,p-m,y-u).normalize(),n[1].setComponents(c+s,h+l,p+m,y+u).normalize(),n[2].setComponents(c+a,h+d,p+_,y+v).normalize(),n[3].setComponents(c-a,h-d,p-_,y-v).normalize(),n[4].setComponents(c-o,h-f,p-x,y-b).normalize(),t===mn)n[5].setComponents(c+o,h+f,p+x,y+b).normalize();else if(t===qr)n[5].setComponents(o,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Cr.x=r.normal.x>0?e.max.x:e.min.x,Cr.y=r.normal.y>0?e.max.y:e.min.y,Cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ou(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const d=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];i.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class ts extends kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,f=e/o,h=t/c,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const v=u*h-a;for(let b=0;b<l;b++){const y=b*f-s;_.push(y,-v,0),x.push(0,0,1),p.push(b/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<o;v++){const b=v+l*u,y=v+l*(u+1),C=v+1+l*(u+1),w=v+1+l*u;m.push(b,y,w),m.push(y,C,w)}this.setIndex(m),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
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
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
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
#endif`,Xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qu=`#ifdef USE_BATCHING
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
#endif`,Yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ju=`#ifdef USE_IRIDESCENCE
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
#endif`,Ju=`#ifdef USE_BUMPMAP
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
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,od=`#define PI 3.141592653589793
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
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
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
#endif`,Fd=`struct PhysicalMaterial {
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
}`,Od=`
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yd=`#if defined( USE_POINTS_UV )
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
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qd=`#ifdef USE_MORPHTARGETS
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
#endif`,eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,th=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ah=`#ifdef USE_NORMALMAP
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
#endif`,oh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ph=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sh=`float getShadowMask() {
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
}`,Eh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bh=`#ifdef USE_SKINNING
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
#endif`,wh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Th=`#ifdef USE_SKINNING
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
#endif`,Ah=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ph=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lh=`#ifdef USE_TRANSMISSION
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
#endif`,Dh=`#ifdef USE_TRANSMISSION
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
#endif`,Ih=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bh=`uniform sampler2D t2D;
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
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gh=`#include <common>
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
}`,Wh=`#if DEPTH_PACKING == 3200
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
}`,Xh=`#define DISTANCE
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
}`,qh=`#define DISTANCE
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
}`,Yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$h=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kh=`uniform float scale;
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
}`,Zh=`uniform vec3 diffuse;
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
}`,jh=`#include <common>
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
}`,Jh=`uniform vec3 diffuse;
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
}`,Qh=`#define LAMBERT
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
}`,ef=`#define LAMBERT
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
}`,tf=`#define MATCAP
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
}`,nf=`#define MATCAP
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
}`,rf=`#define NORMAL
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
}`,sf=`#define NORMAL
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
}`,af=`#define PHONG
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
}`,of=`#define PHONG
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
}`,cf=`#define STANDARD
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
}`,lf=`#define STANDARD
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
}`,uf=`#define TOON
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
}`,df=`#define TOON
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
}`,hf=`uniform float size;
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#include <common>
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
}`,mf=`uniform vec3 color;
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
}`,gf=`uniform float rotation;
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
}`,_f=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Bu,alphahash_pars_fragment:zu,alphamap_fragment:ku,alphamap_pars_fragment:Hu,alphatest_fragment:Vu,alphatest_pars_fragment:Gu,aomap_fragment:Wu,aomap_pars_fragment:Xu,batching_pars_vertex:qu,batching_vertex:Yu,begin_vertex:$u,beginnormal_vertex:Ku,bsdfs:Zu,iridescence_fragment:ju,bumpmap_pars_fragment:Ju,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:td,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:rd,color_pars_vertex:sd,color_vertex:ad,common:od,cube_uv_reflection_fragment:cd,defaultnormal_vertex:ld,displacementmap_pars_vertex:ud,displacementmap_vertex:dd,emissivemap_fragment:hd,emissivemap_pars_fragment:fd,colorspace_fragment:pd,colorspace_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:_d,envmap_pars_fragment:vd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Pd,envmap_vertex:Md,fog_vertex:yd,fog_pars_vertex:Sd,fog_fragment:Ed,fog_pars_fragment:bd,gradientmap_pars_fragment:wd,lightmap_pars_fragment:Td,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Rd,lights_pars_begin:Cd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Dd,lights_phong_fragment:Id,lights_phong_pars_fragment:Ud,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Bd,lights_fragment_end:zd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Gd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:qd,map_particle_pars_fragment:Yd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Kd,morphinstance_vertex:Zd,morphcolor_vertex:jd,morphnormal_vertex:Jd,morphtarget_pars_vertex:Qd,morphtarget_vertex:eh,normal_fragment_begin:th,normal_fragment_maps:nh,normal_pars_fragment:ih,normal_pars_vertex:rh,normal_vertex:sh,normalmap_pars_fragment:ah,clearcoat_normal_fragment_begin:oh,clearcoat_normal_fragment_maps:ch,clearcoat_pars_fragment:lh,iridescence_pars_fragment:uh,opaque_fragment:dh,packing:hh,premultiplied_alpha_fragment:fh,project_vertex:ph,dithering_fragment:mh,dithering_pars_fragment:gh,roughnessmap_fragment:_h,roughnessmap_pars_fragment:vh,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:Mh,shadowmap_vertex:yh,shadowmask_pars_fragment:Sh,skinbase_vertex:Eh,skinning_pars_vertex:bh,skinning_vertex:wh,skinnormal_vertex:Th,specularmap_fragment:Ah,specularmap_pars_fragment:Rh,tonemapping_fragment:Ch,tonemapping_pars_fragment:Ph,transmission_fragment:Lh,transmission_pars_fragment:Dh,uv_pars_fragment:Ih,uv_pars_vertex:Uh,uv_vertex:Nh,worldpos_vertex:Fh,background_vert:Oh,background_frag:Bh,backgroundCube_vert:zh,backgroundCube_frag:kh,cube_vert:Hh,cube_frag:Vh,depth_vert:Gh,depth_frag:Wh,distanceRGBA_vert:Xh,distanceRGBA_frag:qh,equirect_vert:Yh,equirect_frag:$h,linedashed_vert:Kh,linedashed_frag:Zh,meshbasic_vert:jh,meshbasic_frag:Jh,meshlambert_vert:Qh,meshlambert_frag:ef,meshmatcap_vert:tf,meshmatcap_frag:nf,meshnormal_vert:rf,meshnormal_frag:sf,meshphong_vert:af,meshphong_frag:of,meshphysical_vert:cf,meshphysical_frag:lf,meshtoon_vert:uf,meshtoon_frag:df,points_vert:hf,points_frag:ff,shadow_vert:pf,shadow_frag:mf,sprite_vert:gf,sprite_frag:_f},xe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},rn={basic:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ct([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ct([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ct([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ct([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ct([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ct([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ct([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ct([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ct([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Ct([xe.common,xe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Ct([xe.lights,xe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};rn.physical={uniforms:Ct([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Pr={r:0,b:0,g:0},On=new on,vf=new ot;function xf(i,e,t,n,r,s,a){const o=new Ve(0);let c=s===!0?0:1,l,d,f=null,h=0,m=null;function _(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function x(v){let b=!1;const y=_(v);y===null?u(o,c):y&&y.isColor&&(u(y,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,b){const y=_(b);y&&(y.isCubeTexture||y.mapping===Qr)?(d===void 0&&(d=new Ze(new yt(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Li(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),On.copy(b.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(vf.makeRotationFromEuler(On)),d.material.toneMapped=Je.getTransfer(y.colorSpace)!==rt,(f!==y||h!==y.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,m=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ze(new ts(2,2),new Ln({name:"BackgroundMaterial",uniforms:Li(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,m=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function u(v,b){v.getRGB(Pr,Bc(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),c=b,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,u(o,c)},render:x,addToRenderList:p}}function Mf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(M,A,P,D,X){let B=!1;const L=f(D,P,A);s!==L&&(s=L,l(s.object)),B=m(M,D,P,X),B&&_(M,D,P,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,y(M,A,P,D),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function f(M,A,P){const D=P.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let B=X[A.id];B===void 0&&(B={},X[A.id]=B);let L=B[D];return L===void 0&&(L=h(c()),B[D]=L),L}function h(M){const A=[],P=[],D=[];for(let X=0;X<t;X++)A[X]=0,P[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:P,attributeDivisors:D,object:M,attributes:{},index:null}}function m(M,A,P,D){const X=s.attributes,B=A.attributes;let L=0;const Y=P.getAttributes();for(const H in Y)if(Y[H].location>=0){const ne=X[H];let ae=B[H];if(ae===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;L++}return s.attributesNum!==L||s.index!==D}function _(M,A,P,D){const X={},B=A.attributes;let L=0;const Y=P.getAttributes();for(const H in Y)if(Y[H].location>=0){let ne=B[H];ne===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),X[H]=ae,L++}s.attributes=X,s.attributesNum=L,s.index=D}function x(){const M=s.newAttributes;for(let A=0,P=M.length;A<P;A++)M[A]=0}function p(M){u(M,0)}function u(M,A){const P=s.newAttributes,D=s.enabledAttributes,X=s.attributeDivisors;P[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),X[M]!==A&&(i.vertexAttribDivisor(M,A),X[M]=A)}function v(){const M=s.newAttributes,A=s.enabledAttributes;for(let P=0,D=A.length;P<D;P++)A[P]!==M[P]&&(i.disableVertexAttribArray(P),A[P]=0)}function b(M,A,P,D,X,B,L){L===!0?i.vertexAttribIPointer(M,A,P,X,B):i.vertexAttribPointer(M,A,P,D,X,B)}function y(M,A,P,D){x();const X=D.attributes,B=P.getAttributes(),L=A.defaultAttributeValues;for(const Y in B){const H=B[Y];if(H.location>=0){let te=X[Y];if(te===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),te!==void 0){const ne=te.normalized,ae=te.itemSize,ge=e.get(te);if(ge===void 0)continue;const Se=ge.buffer,G=ge.type,q=ge.bytesPerElement,Z=G===i.INT||G===i.UNSIGNED_INT||te.gpuType===La;if(te.isInterleavedBufferAttribute){const J=te.data,ce=J.stride,oe=te.offset;if(J.isInstancedInterleavedBuffer){for(let se=0;se<H.locationSize;se++)u(H.location+se,J.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let se=0;se<H.locationSize;se++)p(H.location+se);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let se=0;se<H.locationSize;se++)b(H.location+se,ae/H.locationSize,G,ne,ce*q,(oe+ae/H.locationSize*se)*q,Z)}else{if(te.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)u(H.location+J,te.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let J=0;J<H.locationSize;J++)p(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let J=0;J<H.locationSize;J++)b(H.location+J,ae/H.locationSize,G,ne,ae*q,ae/H.locationSize*J*q,Z)}}else if(L!==void 0){const ne=L[Y];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(H.location,ne);break;case 3:i.vertexAttrib3fv(H.location,ne);break;case 4:i.vertexAttrib4fv(H.location,ne);break;default:i.vertexAttrib1fv(H.location,ne)}}}}v()}function C(){I();for(const M in n){const A=n[M];for(const P in A){const D=A[P];for(const X in D)d(D[X].object),delete D[X];delete A[P]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const P in A){const D=A[P];for(const X in D)d(D[X].object),delete D[X];delete A[P]}delete n[M.id]}function R(M){for(const A in n){const P=n[A];if(P[M.id]===void 0)continue;const D=P[M.id];for(const X in D)d(D[X].object),delete D[X];delete P[M.id]}}function I(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function yf(i,e,t){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,f){f!==0&&(i.drawArraysInstanced(n,l,d,f),t.update(d,n,f))}function o(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];t.update(m,n,1)}function c(l,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x]*h[x];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==an&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function Ef(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Hn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||r;return r=h,n=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?d(null):l();else{const v=s?0:n,b=v*4;let y=u.clippingState||null;c.value=y,y=d(_,h,b,m);for(let C=0;C!==b;++C)y[C]=t[C];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const u=m+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let b=0,y=m;b!==x;++b,y+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function bf(i){let e=new WeakMap;function t(a,o){return o===$s?a.mapping=Ti:o===Ks&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===$s||o===Ks)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Uu(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Vc extends zc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,To=[.125,.215,.35,.446,.526,.582],Wn=20,As=new Vc,Ao=new Ve;let Rs=null,Cs=0,Ps=0,Ls=!1;const Vn=(1+Math.sqrt(5))/2,fi=1/Vn,Ro=[new W(-Vn,fi,0),new W(Vn,fi,0),new W(-fi,0,Vn),new W(fi,0,Vn),new W(0,Vn,-fi),new W(0,Vn,fi),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Co{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rs,Cs,Ps),this._renderer.xr.enabled=Ls,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rs=this._renderer.getRenderTarget(),Cs=this._renderer.getActiveCubeFace(),Ps=this._renderer.getActiveMipmapLevel(),Ls=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:or,format:tn,colorSpace:Ii,depthBuffer:!1},r=Po(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Po(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(s)),this._blurMaterial=Tf(s,e,t)}return r}_compileMaterial(e){const t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,As)}_sceneToCubeUV(e,t,n,r){const o=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Ao),d.toneMapping=Cn,d.autoClear=!1;const m=new Pi({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),_=new Ze(new yt,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Ao),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):v===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const b=this._cubeSize;Lr(r,v*b,u>2?b:0,b,b),d.setRenderTarget(r),x&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ti||e.mapping===Ai;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Lr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,As)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ro[(r-s-1)%Ro.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Ze(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):Wn;p>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const u=[];let v=0;for(let R=0;R<Wn;++R){const I=R/x,S=Math.exp(-I*I/2);u.push(S),R===0?v+=S:R<p&&(v+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-n;const y=this._sizeLods[r],C=3*y*(r>b-Mi?r-b+Mi:0),w=4*(this._cubeSize-y);Lr(t,C,w,3*y,2*y),c.setRenderTarget(t),c.render(f,As)}}function wf(i){const e=[],t=[],n=[];let r=i;const s=i-Mi+1+To.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Mi?c=To[a-i+Mi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,f=1+l,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,x=3,p=2,u=1,v=new Float32Array(x*_*m),b=new Float32Array(p*_*m),y=new Float32Array(u*_*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,I=w>2?0:-1,S=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];v.set(S,x*_*w),b.set(h,p*_*w);const M=[w,w,w,w,w,w];y.set(M,u*_*w)}const C=new kt;C.setAttribute("position",new Yt(v,x)),C.setAttribute("uv",new Yt(b,p)),C.setAttribute("faceIndex",new Yt(y,u)),e.push(C),r>Mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Po(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Tf(i,e,t){const n=new Float32Array(Wn),r=new W(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ka(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Lo(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Do(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ka(){return`

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
	`}function Af(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===$s||c===Ks,d=c===Ti||c===Ai;if(l||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Co(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Co(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Cf(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let b=0,y=v.length;b<y;b+=3){const C=v[b+0],w=v[b+1],R=v[b+2];h.push(C,w,w,R,R,C)}}else if(_!==void 0){const v=_.array;x=_.version;for(let b=0,y=v.length/3-1;b<y;b+=3){const C=b+0,w=b+1,R=b+2;h.push(C,w,w,R,R,C)}}else return;const p=new(Lc(h)?Oc:Fc)(h,1);p.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:d}}function Pf(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,m){i.drawElements(n,m,s,h*a),t.update(m,n,1)}function l(h,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,h*a,_),t.update(m,n,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];t.update(p,n,1)}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)l(h[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,x,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v]*x[v];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function Lf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Df(i,e,t){const n=new WeakMap,r=new dt;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let C=o.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*w*4*f),I=new Ic(R,C,w,f);I.type=an,I.needsUpdate=!0;const S=y*4;for(let A=0;A<f;A++){const P=u[A],D=v[A],X=b[A],B=C*w*4*A;for(let L=0;L<P.count;L++){const Y=L*S;_===!0&&(r.fromBufferAttribute(P,L),R[B+Y+0]=r.x,R[B+Y+1]=r.y,R[B+Y+2]=r.z,R[B+Y+3]=0),x===!0&&(r.fromBufferAttribute(D,L),R[B+Y+4]=r.x,R[B+Y+5]=r.y,R[B+Y+6]=r.z,R[B+Y+7]=0),p===!0&&(r.fromBufferAttribute(X,L),R[B+Y+8]=r.x,R[B+Y+9]=r.y,R[B+Y+10]=r.z,R[B+Y+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:I,size:new $e(C,w)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function If(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class Gc extends Tt{constructor(e,t,n,r,s,a,o,c,l,d=Si){if(d!==Si&&d!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Si&&(n=Kn),n===void 0&&d===Ci&&(n=Ri),super(null,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wc=new Tt,Io=new Gc(1,1),Xc=new Ic,qc=new _u,Yc=new kc,Uo=[],No=[],Fo=new Float32Array(16),Oo=new Float32Array(9),Bo=new Float32Array(4);function Oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Uo[r];if(s===void 0&&(s=new Float32Array(r),Uo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ns(i,e){let t=No[e];t===void 0&&(t=new Int32Array(e),No[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Uf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Bf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Bo.set(n),i.uniformMatrix2fv(this.addr,!1,Bo),xt(t,n)}}function zf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Oo.set(n),i.uniformMatrix3fv(this.addr,!1,Oo),xt(t,n)}}function kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Fo.set(n),i.uniformMatrix4fv(this.addr,!1,Fo),xt(t,n)}}function Hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Kf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Io.compareFunction=Pc,s=Io):s=Wc,t.setTexture2D(e||s,r)}function Zf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||qc,r)}function jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yc,r)}function Jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xc,r)}function Qf(i){switch(i){case 5126:return Uf;case 35664:return Nf;case 35665:return Ff;case 35666:return Of;case 35674:return Bf;case 35675:return zf;case 35676:return kf;case 5124:case 35670:return Hf;case 35667:case 35671:return Vf;case 35668:case 35672:return Gf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Jf}}function ep(i,e){i.uniform1fv(this.addr,e)}function tp(i,e){const t=Oi(e,this.size,2);i.uniform2fv(this.addr,t)}function np(i,e){const t=Oi(e,this.size,3);i.uniform3fv(this.addr,t)}function ip(i,e){const t=Oi(e,this.size,4);i.uniform4fv(this.addr,t)}function rp(i,e){const t=Oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sp(i,e){const t=Oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ap(i,e){const t=Oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function op(i,e){i.uniform1iv(this.addr,e)}function cp(i,e){i.uniform2iv(this.addr,e)}function lp(i,e){i.uniform3iv(this.addr,e)}function up(i,e){i.uniform4iv(this.addr,e)}function dp(i,e){i.uniform1uiv(this.addr,e)}function hp(i,e){i.uniform2uiv(this.addr,e)}function fp(i,e){i.uniform3uiv(this.addr,e)}function pp(i,e){i.uniform4uiv(this.addr,e)}function mp(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Wc,s[a])}function gp(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||qc,s[a])}function _p(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yc,s[a])}function vp(i,e,t){const n=this.cache,r=e.length,s=ns(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Xc,s[a])}function xp(i){switch(i){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return rp;case 35675:return sp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return cp;case 35668:case 35672:return lp;case 35669:case 35673:return up;case 5125:return dp;case 36294:return hp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return _p;case 36289:case 36303:case 36311:case 36292:return vp}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qf(t.type)}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xp(t.type)}}class Sp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ds=/(\w+)(\])?(\[|\.)?/g;function zo(i,e){i.seq.push(e),i.map[e.id]=e}function Ep(i,e,t){const n=i.name,r=n.length;for(Ds.lastIndex=0;;){const s=Ds.exec(n),a=Ds.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){zo(t,l===void 0?new Mp(o,i,e):new yp(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Sp(o),zo(t,f)),t=f}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ep(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ko(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bp=37297;let wp=0;function Tp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ho=new We;function Ap(i){Je._getMatrix(Ho,Je.workingColorSpace,i);const e=`mat3( ${Ho.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case es:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tp(i.getShaderSource(e),a)}else return r}function Rp(i,e){const t=Ap(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cp(i,e){let t;switch(e){case Cl:t="Linear";break;case Pl:t="Reinhard";break;case Ll:t="Cineon";break;case Dl:t="ACESFilmic";break;case Ul:t="AgX";break;case Nl:t="Neutral";break;case Il:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Dr=new W;function Pp(){Je.getLuminanceCoefficients(Dr);const i=Dr.x.toFixed(4),e=Dr.y.toFixed(4),t=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Dp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qi(i){return i!==""}function Go(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Up=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(i){return i.replace(Up,Fp)}const Np=new Map;function Fp(i,e){let t=Ye[e];if(t===void 0){const n=Np.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wa(t)}const Op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xo(i){return i.replace(Op,Bp)}function Bp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function kp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case Ai:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Vp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pa:e="ENVMAP_BLENDING_MULTIPLY";break;case Al:e="ENVMAP_BLENDING_MIX";break;case Rl:e="ENVMAP_BLENDING_ADD";break}return e}function Gp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=zp(t),l=kp(t),d=Hp(t),f=Vp(t),h=Gp(t),m=Lp(t),_=Dp(s),x=r.createProgram();let p,u,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Qi).join(`
`),u.length>0&&(u+=`
`)):(p=[qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),u=[qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Rp("linearToOutputTexel",t.outputColorSpace),Pp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),a=wa(a),a=Go(a,t),a=Wo(a,t),o=wa(o),o=Go(o,t),o=Wo(o,t),a=Xo(a),o=Xo(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const b=v+p+a,y=v+u+o,C=ko(r,r.VERTEX_SHADER,b),w=ko(r,r.FRAGMENT_SHADER,y);r.attachShader(x,C),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(A){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(x).trim(),D=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(w).trim();let B=!0,L=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,C,w);else{const Y=Vo(r,C,"vertex"),H=Vo(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+Y+`
`+H)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||X==="")&&(L=!1);L&&(A.diagnostics={runnable:B,programLog:P,vertexShader:{log:D,prefix:p},fragmentShader:{log:X,prefix:u}})}r.deleteShader(C),r.deleteShader(w),I=new Wr(r,x),S=Ip(r,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,bp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=w,this}let Xp=0;class qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}}class Yp{constructor(e){this.id=Xp++,this.code=e,this.usedTimes=0}}function $p(i,e,t,n,r,s,a){const o=new Uc,c=new qp,l=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,A,P,D){const X=P.fog,B=D.geometry,L=S.isMeshStandardMaterial?P.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||L),H=Y&&Y.mapping===Qr?Y.image.height:null,te=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=ne!==void 0?ne.length:0;let ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let Se,G,q,Z;if(te){const je=rn[te];Se=je.vertexShader,G=je.fragmentShader}else Se=S.vertexShader,G=S.fragmentShader,c.update(S),q=c.getVertexShaderID(S),Z=c.getFragmentShaderID(S);const J=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),oe=D.isInstancedMesh===!0,se=D.isBatchedMesh===!0,Ee=!!S.map,Ae=!!S.matcap,Xe=!!Y,F=!!S.aoMap,U=!!S.lightMap,de=!!S.bumpMap,ue=!!S.normalMap,fe=!!S.displacementMap,Ue=!!S.emissiveMap,_e=!!S.metalnessMap,T=!!S.roughnessMap,g=S.anisotropy>0,V=S.clearcoat>0,ee=S.dispersion>0,ie=S.iridescence>0,Q=S.sheen>0,we=S.transmission>0,pe=g&&!!S.anisotropyMap,me=V&&!!S.clearcoatMap,Oe=V&&!!S.clearcoatNormalMap,le=V&&!!S.clearcoatRoughnessMap,Te=ie&&!!S.iridescenceMap,Ne=ie&&!!S.iridescenceThicknessMap,Fe=Q&&!!S.sheenColorMap,Re=Q&&!!S.sheenRoughnessMap,qe=!!S.specularMap,ze=!!S.specularColorMap,Qe=!!S.specularIntensityMap,O=we&&!!S.transmissionMap,ve=we&&!!S.thicknessMap,j=!!S.gradientMap,re=!!S.alphaMap,ye=S.alphaTest>0,Me=!!S.alphaHash,ke=!!S.extensions;let Be=Cn;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=i.toneMapping);const Ke={shaderID:te,shaderType:S.type,shaderName:S.name,vertexShader:Se,fragmentShader:G,defines:S.defines,customVertexShaderID:q,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:se,batchingColor:se&&D._colorsTexture!==null,instancing:oe,instancingColor:oe&&D.instanceColor!==null,instancingMorph:oe&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ii,alphaToCoverage:!!S.alphaToCoverage,map:Ee,matcap:Ae,envMap:Xe,envMapMode:Xe&&Y.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:U,bumpMap:de,normalMap:ue,displacementMap:h&&fe,emissiveMap:Ue,normalMapObjectSpace:ue&&S.normalMapType===zl,normalMapTangentSpace:ue&&S.normalMapType===Cc,metalnessMap:_e,roughnessMap:T,anisotropy:g,anisotropyMap:pe,clearcoat:V,clearcoatMap:me,clearcoatNormalMap:Oe,clearcoatRoughnessMap:le,dispersion:ee,iridescence:ie,iridescenceMap:Te,iridescenceThicknessMap:Ne,sheen:Q,sheenColorMap:Fe,sheenRoughnessMap:Re,specularMap:qe,specularColorMap:ze,specularIntensityMap:Qe,transmission:we,transmissionMap:O,thicknessMap:ve,gradientMap:j,opaque:S.transparent===!1&&S.blending===yi&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:ye,alphaHash:Me,combine:S.combine,mapUv:Ee&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:U&&x(S.lightMap.channel),bumpMapUv:de&&x(S.bumpMap.channel),normalMapUv:ue&&x(S.normalMap.channel),displacementMapUv:fe&&x(S.displacementMap.channel),emissiveMapUv:Ue&&x(S.emissiveMap.channel),metalnessMapUv:_e&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:pe&&x(S.anisotropyMap.channel),clearcoatMapUv:me&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(S.sheenRoughnessMap.channel),specularMapUv:qe&&x(S.specularMap.channel),specularColorMapUv:ze&&x(S.specularColorMap.channel),specularIntensityMapUv:Qe&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:ve&&x(S.thicknessMap.channel),alphaMapUv:re&&x(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ue||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ee||re),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ce,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:Ue&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(v(M,S),b(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=_[S.type];let A;if(M){const P=rn[M];A=Pu.clone(P.uniforms)}else A=S.uniforms;return A}function C(S,M){let A;for(let P=0,D=d.length;P<D;P++){const X=d[P];if(X.cacheKey===M){A=X,++A.usedTimes;break}}return A===void 0&&(A=new Wp(i,M,S,s),d.push(A)),A}function w(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function R(S){c.remove(S)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:I}}function Kp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $o(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,m,_,x,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function o(f,h,m,_,x,p){const u=a(f,h,m,_,x,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(f,h,m,_,x,p){const u=a(f,h,m,_,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(f,h){t.length>1&&t.sort(f||Zp),n.length>1&&n.sort(h||Yo),r.length>1&&r.sort(h||Yo)}function d(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function jp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new $o,i.set(n,[a])):r>=s.length?(a=new $o,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ve};break;case"SpotLight":t={position:new W,direction:new W,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let em=0;function tm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nm(i){const e=new Jp,t=Qp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new W);const r=new W,s=new ot,a=new ot;function o(l){let d=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,x=0,p=0,u=0,v=0,b=0,y=0,C=0,w=0,R=0;l.sort(tm);for(let S=0,M=l.length;S<M;S++){const A=l[S],P=A.color,D=A.intensity,X=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=P.r*D,f+=P.g*D,h+=P.b*D;else if(A.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(A.sh.coefficients[L],D);R++}else if(A.isDirectionalLight){const L=e.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Y=A.shadow,H=t.get(A);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=A.shadow.matrix,v++}n.directional[m]=L,m++}else if(A.isSpotLight){const L=e.get(A);L.position.setFromMatrixPosition(A.matrixWorld),L.color.copy(P).multiplyScalar(D),L.distance=X,L.coneCos=Math.cos(A.angle),L.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),L.decay=A.decay,n.spot[x]=L;const Y=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,Y.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[x]=Y.matrix,A.castShadow){const H=t.get(A);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=B,y++}x++}else if(A.isRectAreaLight){const L=e.get(A);L.color.copy(P).multiplyScalar(D),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=L,p++}else if(A.isPointLight){const L=e.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),L.distance=A.distance,L.decay=A.decay,A.castShadow){const Y=A.shadow,H=t.get(A);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=B,n.pointShadowMatrix[_]=A.shadow.matrix,b++}n.point[_]=L,_++}else if(A.isHemisphereLight){const L=e.get(A);L.skyColor.copy(A.color).multiplyScalar(D),L.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[u]=L,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==v||I.numPointShadows!==b||I.numSpotShadows!==y||I.numSpotMaps!==C||I.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,I.directionalLength=m,I.pointLength=_,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=v,I.numPointShadows=b,I.numSpotShadows=y,I.numSpotMaps=C,I.numLightProbes=R,n.version=em++)}function c(l,d){let f=0,h=0,m=0,_=0,x=0;const p=d.matrixWorldInverse;for(let u=0,v=l.length;u<v;u++){const b=l[u];if(b.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),f++}else if(b.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(b.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),h++}else if(b.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function Ko(i){const e=new nm(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function im(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ko(i),e.set(r,[o])):s>=a.length?(o=new Ko(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class rm extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ol,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sm extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const am=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,om=`uniform sampler2D shadow_pass;
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
}`;function cm(i,e,t){let n=new za;const r=new $e,s=new $e,a=new dt,o=new rm({depthPacking:Bl}),c=new sm,l={},d=t.maxTextureSize,f={[Pn]:It,[It]:Pn,[Bt]:Bt},h=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:am,fragmentShader:om}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new kt;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ze(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let u=this.type;this.render=function(w,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Rn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=u!==pn&&this.type===pn,X=u===pn&&this.type!==pn;for(let B=0,L=w.length;B<L;B++){const Y=w[B],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const te=H.getFrameExtents();if(r.multiply(te),s.copy(H.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/te.x),r.x=s.x*te.x,H.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/te.y),r.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||D===!0||X===!0){const ae=this.type!==pn?{minFilter:zt,magFilter:zt}:{};H.map!==null&&H.map.dispose(),H.map=new Zn(r.x,r.y,ae),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ne=H.getViewportCount();for(let ae=0;ae<ne;ae++){const ge=H.getViewport(ae);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),P.viewport(a),H.updateMatrices(Y,ae),n=H.getFrustum(),y(R,I,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===pn&&v(H,I),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,A)};function v(w,R){const I=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zn(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,I,h,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,I,m,x,null)}function b(w,R,I,S){let M=null;const A=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)M=A;else if(M=I.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const P=M.uuid,D=R.uuid;let X=l[P];X===void 0&&(X={},l[P]=X);let B=X[D];B===void 0&&(B=M.clone(),X[D]=B,R.addEventListener("dispose",C)),M=B}if(M.visible=R.visible,M.wireframe=R.wireframe,S===pn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=i.properties.get(M);P.light=I}return M}function y(w,R,I,S,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const D=e.update(w),X=w.material;if(Array.isArray(X)){const B=D.groups;for(let L=0,Y=B.length;L<Y;L++){const H=B[L],te=X[H.materialIndex];if(te&&te.visible){const ne=b(w,te,S,M);w.onBeforeShadow(i,w,R,I,D,ne,H),i.renderBufferDirect(I,null,D,ne,w,H),w.onAfterShadow(i,w,R,I,D,ne,H)}}}else if(X.visible){const B=b(w,X,S,M);w.onBeforeShadow(i,w,R,I,D,B,null),i.renderBufferDirect(I,null,D,B,w,null),w.onAfterShadow(i,w,R,I,D,B,null)}}const P=w.children;for(let D=0,X=P.length;D<X;D++)y(P[D],R,I,S,M)}function C(w){w.target.removeEventListener("dispose",C);for(const I in l){const S=l[I],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const lm={[Hs]:Vs,[Gs]:qs,[Ws]:Ys,[wi]:Xs,[Vs]:Hs,[qs]:Gs,[Ys]:Ws,[Xs]:wi};function um(i,e){function t(){let O=!1;const ve=new dt;let j=null;const re=new dt(0,0,0,0);return{setMask:function(ye){j!==ye&&!O&&(i.colorMask(ye,ye,ye,ye),j=ye)},setLocked:function(ye){O=ye},setClear:function(ye,Me,ke,Be,Ke){Ke===!0&&(ye*=Be,Me*=Be,ke*=Be),ve.set(ye,Me,ke,Be),re.equals(ve)===!1&&(i.clearColor(ye,Me,ke,Be),re.copy(ve))},reset:function(){O=!1,j=null,re.set(-1,0,0,0)}}}function n(){let O=!1,ve=!1,j=null,re=null,ye=null;return{setReversed:function(Me){if(ve!==Me){const ke=e.get("EXT_clip_control");ve?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const Be=ye;ye=null,this.setClear(Be)}ve=Me},getReversed:function(){return ve},setTest:function(Me){Me?J(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Me){j!==Me&&!O&&(i.depthMask(Me),j=Me)},setFunc:function(Me){if(ve&&(Me=lm[Me]),re!==Me){switch(Me){case Hs:i.depthFunc(i.NEVER);break;case Vs:i.depthFunc(i.ALWAYS);break;case Gs:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case Ws:i.depthFunc(i.EQUAL);break;case Xs:i.depthFunc(i.GEQUAL);break;case qs:i.depthFunc(i.GREATER);break;case Ys:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Me}},setLocked:function(Me){O=Me},setClear:function(Me){ye!==Me&&(ve&&(Me=1-Me),i.clearDepth(Me),ye=Me)},reset:function(){O=!1,j=null,re=null,ye=null,ve=!1}}}function r(){let O=!1,ve=null,j=null,re=null,ye=null,Me=null,ke=null,Be=null,Ke=null;return{setTest:function(je){O||(je?J(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(je){ve!==je&&!O&&(i.stencilMask(je),ve=je)},setFunc:function(je,At,Ut){(j!==je||re!==At||ye!==Ut)&&(i.stencilFunc(je,At,Ut),j=je,re=At,ye=Ut)},setOp:function(je,At,Ut){(Me!==je||ke!==At||Be!==Ut)&&(i.stencilOp(je,At,Ut),Me=je,ke=At,Be=Ut)},setLocked:function(je){O=je},setClear:function(je){Ke!==je&&(i.clearStencil(je),Ke=je)},reset:function(){O=!1,ve=null,j=null,re=null,ye=null,Me=null,ke=null,Be=null,Ke=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,u=null,v=null,b=null,y=null,C=null,w=null,R=new Ve(0,0,0),I=0,S=!1,M=null,A=null,P=null,D=null,X=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),L=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),L=Y>=2);let te=null,ne={};const ae=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Se=new dt().fromArray(ae),G=new dt().fromArray(ge);function q(O,ve,j,re){const ye=new Uint8Array(4),Me=i.createTexture();i.bindTexture(O,Me),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<j;ke++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ve+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Me}const Z={};Z[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(wi),de(!1),ue(ja),J(i.CULL_FACE),F(Rn);function J(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function ce(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function oe(O,ve){return f[O]!==ve?(i.bindFramebuffer(O,ve),f[O]=ve,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ve),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function se(O,ve){let j=m,re=!1;if(O){j=h.get(ve),j===void 0&&(j=[],h.set(ve,j));const ye=O.textures;if(j.length!==ye.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,ke=ye.length;Me<ke;Me++)j[Me]=i.COLOR_ATTACHMENT0+Me;j.length=ye.length,re=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,re=!0);re&&i.drawBuffers(j)}function Ee(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const Ae={[Gn]:i.FUNC_ADD,[ul]:i.FUNC_SUBTRACT,[dl]:i.FUNC_REVERSE_SUBTRACT};Ae[hl]=i.MIN,Ae[fl]=i.MAX;const Xe={[pl]:i.ZERO,[ml]:i.ONE,[gl]:i.SRC_COLOR,[zs]:i.SRC_ALPHA,[Sl]:i.SRC_ALPHA_SATURATE,[Ml]:i.DST_COLOR,[vl]:i.DST_ALPHA,[_l]:i.ONE_MINUS_SRC_COLOR,[ks]:i.ONE_MINUS_SRC_ALPHA,[yl]:i.ONE_MINUS_DST_COLOR,[xl]:i.ONE_MINUS_DST_ALPHA,[El]:i.CONSTANT_COLOR,[bl]:i.ONE_MINUS_CONSTANT_COLOR,[wl]:i.CONSTANT_ALPHA,[Tl]:i.ONE_MINUS_CONSTANT_ALPHA};function F(O,ve,j,re,ye,Me,ke,Be,Ke,je){if(O===Rn){x===!0&&(ce(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),O!==ll){if(O!==p||je!==S){if((u!==Gn||y!==Gn)&&(i.blendEquation(i.FUNC_ADD),u=Gn,y=Gn),je)switch(O){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.ONE,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ja:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,b=null,C=null,w=null,R.set(0,0,0),I=0,p=O,S=je}return}ye=ye||ve,Me=Me||j,ke=ke||re,(ve!==u||ye!==y)&&(i.blendEquationSeparate(Ae[ve],Ae[ye]),u=ve,y=ye),(j!==v||re!==b||Me!==C||ke!==w)&&(i.blendFuncSeparate(Xe[j],Xe[re],Xe[Me],Xe[ke]),v=j,b=re,C=Me,w=ke),(Be.equals(R)===!1||Ke!==I)&&(i.blendColor(Be.r,Be.g,Be.b,Ke),R.copy(Be),I=Ke),p=O,S=!1}function U(O,ve){O.side===Bt?ce(i.CULL_FACE):J(i.CULL_FACE);let j=O.side===It;ve&&(j=!j),de(j),O.blending===yi&&O.transparent===!1?F(Rn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const re=O.stencilWrite;o.setTest(re),re&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function de(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function ue(O){O!==al?(J(i.CULL_FACE),O!==A&&(O===ja?i.cullFace(i.BACK):O===ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),A=O}function fe(O){O!==P&&(L&&i.lineWidth(O),P=O)}function Ue(O,ve,j){O?(J(i.POLYGON_OFFSET_FILL),(D!==ve||X!==j)&&(i.polygonOffset(ve,j),D=ve,X=j)):ce(i.POLYGON_OFFSET_FILL)}function _e(O){O?J(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function T(O){O===void 0&&(O=i.TEXTURE0+B-1),te!==O&&(i.activeTexture(O),te=O)}function g(O,ve,j){j===void 0&&(te===null?j=i.TEXTURE0+B-1:j=te);let re=ne[j];re===void 0&&(re={type:void 0,texture:void 0},ne[j]=re),(re.type!==O||re.texture!==ve)&&(te!==j&&(i.activeTexture(j),te=j),i.bindTexture(O,ve||Z[O]),re.type=O,re.texture=ve)}function V(){const O=ne[te];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(O){Se.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Se.copy(O))}function Re(O){G.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),G.copy(O))}function qe(O,ve){let j=l.get(ve);j===void 0&&(j=new WeakMap,l.set(ve,j));let re=j.get(O);re===void 0&&(re=i.getUniformBlockIndex(ve,O.name),j.set(O,re))}function ze(O,ve){const re=l.get(ve).get(O);c.get(ve)!==re&&(i.uniformBlockBinding(ve,re,O.__bindingPointIndex),c.set(ve,re))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},te=null,ne={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,u=null,v=null,b=null,y=null,C=null,w=null,R=new Ve(0,0,0),I=0,S=!1,M=null,A=null,P=null,D=null,X=null,Se.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ce,bindFramebuffer:oe,drawBuffers:se,useProgram:Ee,setBlending:F,setMaterial:U,setFlipSided:de,setCullFace:ue,setLineWidth:fe,setPolygonOffset:Ue,setScissorTest:_e,activeTexture:T,bindTexture:g,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:ie,texImage2D:Te,texImage3D:Ne,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:Oe,texStorage3D:le,texSubImage2D:Q,texSubImage3D:we,compressedTexSubImage2D:pe,compressedTexSubImage3D:me,scissor:Fe,viewport:Re,reset:Qe}}function Zo(i,e,t,n){const r=dm(n);switch(t){case Ec:return i*e;case wc:return i*e;case Tc:return i*e*2;case Ua:return i*e/r.components*r.byteLength;case Na:return i*e/r.components*r.byteLength;case Ac:return i*e*2/r.components*r.byteLength;case Fa:return i*e*2/r.components*r.byteLength;case bc:return i*e*3/r.components*r.byteLength;case tn:return i*e*4/r.components*r.byteLength;case Oa:return i*e*4/r.components*r.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:case ta:return Math.max(i,16)*Math.max(e,8)/4;case Js:case ea:return Math.max(i,8)*Math.max(e,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gr:case xa:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rc:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sa:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dm(i){switch(i){case vn:case Mc:return{byteLength:1,components:1};case ir:case yc:case or:return{byteLength:2,components:1};case Da:case Ia:return{byteLength:2,components:4};case Kn:case La:case an:return{byteLength:4,components:1};case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function hm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):Yr("canvas")}function x(T,g,V){let ee=1;const ie=_e(T);if((ie.width>V||ie.height>V)&&(ee=V/Math.max(ie.width,ie.height)),ee<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(ee*ie.width),we=Math.floor(ee*ie.height);f===void 0&&(f=_(Q,we));const pe=g?_(Q,we):f;return pe.width=Q,pe.height=we,pe.getContext("2d").drawImage(T,0,0,Q,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+we+")."),pe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,g,V,ee,ie=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=g;if(g===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8)),g===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),g===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8)),g===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),g===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),g===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),g===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),g===i.RGBA){const we=ie?es:Je.getTransfer(ee);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=we===rt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function y(T,g){let V;return T?g===null||g===Kn||g===Ri?V=i.DEPTH24_STENCIL8:g===an?V=i.DEPTH32F_STENCIL8:g===ir&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Kn||g===Ri?V=i.DEPTH_COMPONENT24:g===an?V=i.DEPTH_COMPONENT32F:g===ir&&(V=i.DEPTH_COMPONENT16),V}function C(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==sn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function w(T){const g=T.target;g.removeEventListener("dispose",w),I(g),g.isVideoTexture&&d.delete(g)}function R(T){const g=T.target;g.removeEventListener("dispose",R),M(g)}function I(T){const g=n.get(T);if(g.__webglInit===void 0)return;const V=T.source,ee=h.get(V);if(ee){const ie=ee[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(T),Object.keys(ee).length===0&&h.delete(V)}n.remove(T)}function S(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const V=T.source,ee=h.get(V);delete ee[g.__cacheKey],a.memory.textures--}function M(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(g.__webglFramebuffer[ee]))for(let ie=0;ie<g.__webglFramebuffer[ee].length;ie++)i.deleteFramebuffer(g.__webglFramebuffer[ee][ie]);else i.deleteFramebuffer(g.__webglFramebuffer[ee]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[ee])}else{if(Array.isArray(g.__webglFramebuffer))for(let ee=0;ee<g.__webglFramebuffer.length;ee++)i.deleteFramebuffer(g.__webglFramebuffer[ee]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let ee=0;ee<g.__webglColorRenderbuffer.length;ee++)g.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[ee]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const V=T.textures;for(let ee=0,ie=V.length;ee<ie;ee++){const Q=n.get(V[ee]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(V[ee])}n.remove(T)}let A=0;function P(){A=0}function D(){const T=A;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),A+=1,T}function X(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function B(T,g){const V=n.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(V,T,g);return}}t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+g)}function L(T,g){const V=n.get(T);if(T.version>0&&V.__version!==T.version){G(V,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+g)}function Y(T,g){const V=n.get(T);if(T.version>0&&V.__version!==T.version){G(V,T,g);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+g)}function H(T,g){const V=n.get(T);if(T.version>0&&V.__version!==T.version){q(V,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+g)}const te={[Zs]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},ne={[zt]:i.NEAREST,[Fl]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[as]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},ae={[kl]:i.NEVER,[ql]:i.ALWAYS,[Hl]:i.LESS,[Pc]:i.LEQUAL,[Vl]:i.EQUAL,[Xl]:i.GEQUAL,[Gl]:i.GREATER,[Wl]:i.NOTEQUAL};function ge(T,g){if(g.type===an&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===sn||g.magFilter===as||g.magFilter===hr||g.magFilter===$n||g.minFilter===sn||g.minFilter===as||g.minFilter===hr||g.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,te[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,te[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,te[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ne[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ne[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===zt||g.minFilter!==hr&&g.minFilter!==$n||g.type===an&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Se(T,g){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",w));const ee=g.source;let ie=h.get(ee);ie===void 0&&(ie={},h.set(ee,ie));const Q=X(g);if(Q!==T.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[Q].usedTimes++;const we=ie[T.__cacheKey];we!==void 0&&(ie[T.__cacheKey].usedTimes--,we.usedTimes===0&&S(g)),T.__cacheKey=Q,T.__webglTexture=ie[Q].texture}return V}function G(T,g,V){let ee=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(ee=i.TEXTURE_3D);const ie=Se(T,g),Q=g.source;t.bindTexture(ee,T.__webglTexture,i.TEXTURE0+V);const we=n.get(Q);if(Q.version!==we.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);const pe=Je.getPrimaries(Je.workingColorSpace),me=g.colorSpace===An?null:Je.getPrimaries(g.colorSpace),Oe=g.colorSpace===An||pe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let le=x(g.image,!1,r.maxTextureSize);le=Ue(g,le);const Te=s.convert(g.format,g.colorSpace),Ne=s.convert(g.type);let Fe=b(g.internalFormat,Te,Ne,g.colorSpace,g.isVideoTexture);ge(ee,g);let Re;const qe=g.mipmaps,ze=g.isVideoTexture!==!0,Qe=we.__version===void 0||ie===!0,O=Q.dataReady,ve=C(g,le);if(g.isDepthTexture)Fe=y(g.format===Ci,g.type),Qe&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Fe,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,Te,Ne,null));else if(g.isDataTexture)if(qe.length>0){ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,Fe,qe[0].width,qe[0].height);for(let j=0,re=qe.length;j<re;j++)Re=qe[j],ze?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Re.width,Re.height,Te,Ne,Re.data):t.texImage2D(i.TEXTURE_2D,j,Fe,Re.width,Re.height,0,Te,Ne,Re.data);g.generateMipmaps=!1}else ze?(Qe&&t.texStorage2D(i.TEXTURE_2D,ve,Fe,le.width,le.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Te,Ne,le.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,le.width,le.height,0,Te,Ne,le.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ze&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Fe,qe[0].width,qe[0].height,le.depth);for(let j=0,re=qe.length;j<re;j++)if(Re=qe[j],g.format!==tn)if(Te!==null)if(ze){if(O)if(g.layerUpdates.size>0){const ye=Zo(Re.width,Re.height,g.format,g.type);for(const Me of g.layerUpdates){const ke=Re.data.subarray(Me*ye/Re.data.BYTES_PER_ELEMENT,(Me+1)*ye/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Me,Re.width,Re.height,1,Te,ke)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Re.width,Re.height,le.depth,Te,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Fe,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Re.width,Re.height,le.depth,Te,Ne,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,Fe,Re.width,Re.height,le.depth,0,Te,Ne,Re.data)}else{ze&&Qe&&t.texStorage2D(i.TEXTURE_2D,ve,Fe,qe[0].width,qe[0].height);for(let j=0,re=qe.length;j<re;j++)Re=qe[j],g.format!==tn?Te!==null?ze?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Re.width,Re.height,Te,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,j,Fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Re.width,Re.height,Te,Ne,Re.data):t.texImage2D(i.TEXTURE_2D,j,Fe,Re.width,Re.height,0,Te,Ne,Re.data)}else if(g.isDataArrayTexture)if(ze){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Fe,le.width,le.height,le.depth),O)if(g.layerUpdates.size>0){const j=Zo(le.width,le.height,g.format,g.type);for(const re of g.layerUpdates){const ye=le.data.subarray(re*j/le.data.BYTES_PER_ELEMENT,(re+1)*j/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,Te,Ne,ye)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Te,Ne,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,le.width,le.height,le.depth,0,Te,Ne,le.data);else if(g.isData3DTexture)ze?(Qe&&t.texStorage3D(i.TEXTURE_3D,ve,Fe,le.width,le.height,le.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Te,Ne,le.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,le.width,le.height,le.depth,0,Te,Ne,le.data);else if(g.isFramebufferTexture){if(Qe)if(ze)t.texStorage2D(i.TEXTURE_2D,ve,Fe,le.width,le.height);else{let j=le.width,re=le.height;for(let ye=0;ye<ve;ye++)t.texImage2D(i.TEXTURE_2D,ye,Fe,j,re,0,Te,Ne,null),j>>=1,re>>=1}}else if(qe.length>0){if(ze&&Qe){const j=_e(qe[0]);t.texStorage2D(i.TEXTURE_2D,ve,Fe,j.width,j.height)}for(let j=0,re=qe.length;j<re;j++)Re=qe[j],ze?O&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Te,Ne,Re):t.texImage2D(i.TEXTURE_2D,j,Fe,Te,Ne,Re);g.generateMipmaps=!1}else if(ze){if(Qe){const j=_e(le);t.texStorage2D(i.TEXTURE_2D,ve,Fe,j.width,j.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ne,le)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Te,Ne,le);p(g)&&u(ee),we.__version=Q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function q(T,g,V){if(g.image.length!==6)return;const ee=Se(T,g),ie=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const Q=n.get(ie);if(ie.version!==Q.__version||ee===!0){t.activeTexture(i.TEXTURE0+V);const we=Je.getPrimaries(Je.workingColorSpace),pe=g.colorSpace===An?null:Je.getPrimaries(g.colorSpace),me=g.colorSpace===An||we===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Oe=g.isCompressedTexture||g.image[0].isCompressedTexture,le=g.image[0]&&g.image[0].isDataTexture,Te=[];for(let re=0;re<6;re++)!Oe&&!le?Te[re]=x(g.image[re],!0,r.maxCubemapSize):Te[re]=le?g.image[re].image:g.image[re],Te[re]=Ue(g,Te[re]);const Ne=Te[0],Fe=s.convert(g.format,g.colorSpace),Re=s.convert(g.type),qe=b(g.internalFormat,Fe,Re,g.colorSpace),ze=g.isVideoTexture!==!0,Qe=Q.__version===void 0||ee===!0,O=ie.dataReady;let ve=C(g,Ne);ge(i.TEXTURE_CUBE_MAP,g);let j;if(Oe){ze&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,Ne.width,Ne.height);for(let re=0;re<6;re++){j=Te[re].mipmaps;for(let ye=0;ye<j.length;ye++){const Me=j[ye];g.format!==tn?Fe!==null?ze?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,0,0,Me.width,Me.height,Fe,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,qe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,0,0,Me.width,Me.height,Fe,Re,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye,qe,Me.width,Me.height,0,Fe,Re,Me.data)}}}else{if(j=g.mipmaps,ze&&Qe){j.length>0&&ve++;const re=_e(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,qe,re.width,re.height)}for(let re=0;re<6;re++)if(le){ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Te[re].width,Te[re].height,Fe,Re,Te[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,Te[re].width,Te[re].height,0,Fe,Re,Te[re].data);for(let ye=0;ye<j.length;ye++){const ke=j[ye].image[re].image;ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,0,0,ke.width,ke.height,Fe,Re,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,qe,ke.width,ke.height,0,Fe,Re,ke.data)}}else{ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Fe,Re,Te[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,qe,Fe,Re,Te[re]);for(let ye=0;ye<j.length;ye++){const Me=j[ye];ze?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,0,0,Fe,Re,Me.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ye+1,qe,Fe,Re,Me.image[re])}}}p(g)&&u(i.TEXTURE_CUBE_MAP),Q.__version=ie.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Z(T,g,V,ee,ie,Q){const we=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),me=b(V.internalFormat,we,pe,V.colorSpace),Oe=n.get(g),le=n.get(V);if(le.__renderTarget=g,!Oe.__hasExternalTextures){const Te=Math.max(1,g.width>>Q),Ne=Math.max(1,g.height>>Q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,me,Te,Ne,g.depth,0,we,pe,null):t.texImage2D(ie,Q,me,Te,Ne,0,we,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ie,le.__webglTexture,0,de(g)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ie,le.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(T,g,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const ee=g.depthTexture,ie=ee&&ee.isDepthTexture?ee.type:null,Q=y(g.stencilBuffer,ie),we=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=de(g);ue(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Q,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,T)}else{const ee=g.textures;for(let ie=0;ie<ee.length;ie++){const Q=ee[ie],we=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),me=b(Q.internalFormat,we,pe,Q.colorSpace),Oe=de(g);V&&ue(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,me,g.width,g.height):ue(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,me,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,me,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(g.depthTexture);ee.__renderTarget=g,(!ee.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),B(g.depthTexture,0);const ie=ee.__webglTexture,Q=de(g);if(g.depthTexture.format===Si)ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(g.depthTexture.format===Ci)ue(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function oe(T){const g=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const ee=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),ee){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,ee.removeEventListener("dispose",ie)};ee.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=ee}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ce(g.__webglFramebuffer,T)}else if(V){g.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[ee]),g.__webglDepthbuffer[ee]===void 0)g.__webglDepthbuffer[ee]=i.createRenderbuffer(),J(g.__webglDepthbuffer[ee],T,!1);else{const ie=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=g.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),J(g.__webglDepthbuffer,T,!1);else{const ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,g,V){const ee=n.get(T);g!==void 0&&Z(ee.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&oe(T)}function Ee(T){const g=T.texture,V=n.get(T),ee=n.get(g);T.addEventListener("dispose",R);const ie=T.textures,Q=T.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=g.version,a.memory.textures++),Q){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let me=0;me<g.mipmaps.length;me++)V.__webglFramebuffer[pe][me]=i.createFramebuffer()}else V.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)V.__webglFramebuffer[pe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(we)for(let pe=0,me=ie.length;pe<me;pe++){const Oe=n.get(ie[pe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ue(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const me=ie[pe];V.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);const Oe=s.convert(me.format,me.colorSpace),le=s.convert(me.type),Te=b(me.internalFormat,Oe,le,me.colorSpace,T.isXRRenderTarget===!0),Ne=de(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Te,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),J(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),ge(i.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Z(V.__webglFramebuffer[pe][me],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Z(V.__webglFramebuffer[pe],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let pe=0,me=ie.length;pe<me;pe++){const Oe=ie[pe],le=n.get(Oe);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),ge(i.TEXTURE_2D,Oe),Z(V.__webglFramebuffer,T,Oe,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),p(Oe)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),ge(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let me=0;me<g.mipmaps.length;me++)Z(V.__webglFramebuffer[me],T,g,i.COLOR_ATTACHMENT0,pe,me);else Z(V.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,pe,0);p(g)&&u(pe),t.unbindTexture()}T.depthBuffer&&oe(T)}function Ae(T){const g=T.textures;for(let V=0,ee=g.length;V<ee;V++){const ie=g[V];if(p(ie)){const Q=v(T),we=n.get(ie).__webglTexture;t.bindTexture(Q,we),u(Q),t.unbindTexture()}}}const Xe=[],F=[];function U(T){if(T.samples>0){if(ue(T)===!1){const g=T.textures,V=T.width,ee=T.height;let ie=i.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(T),pe=g.length>1;if(pe)for(let me=0;me<g.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let me=0;me<g.length;me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const Oe=n.get(g[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,V,ee,0,0,V,ee,ie,i.NEAREST),c===!0&&(Xe.length=0,F.length=0,Xe.push(i.COLOR_ATTACHMENT0+me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Xe.push(Q),F.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let me=0;me<g.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,we.__webglColorRenderbuffer[me]);const Oe=n.get(g[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function de(T){return Math.min(r.maxSamples,T.samples)}function ue(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function fe(T){const g=a.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function Ue(T,g){const V=T.colorSpace,ee=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Ii&&V!==An&&(Je.getTransfer(V)===rt?(ee!==tn||ie!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),g}function _e(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=L,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=se,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ue}function fm(i,e){function t(n,r=An){let s;const a=Je.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mc)return i.BYTE;if(n===yc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===La)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===or)return i.HALF_FLOAT;if(n===Ec)return i.ALPHA;if(n===bc)return i.RGB;if(n===tn)return i.RGBA;if(n===wc)return i.LUMINANCE;if(n===Tc)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===Ua)return i.RED;if(n===Na)return i.RED_INTEGER;if(n===Ac)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Oa)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Hr||n===Vr)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Js||n===Qs||n===ea||n===ta)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Js)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===na||n===ia)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===aa||n===oa||n===ca||n===la||n===ua||n===da||n===ha||n===fa||n===pa||n===ma||n===ga||n===_a||n===va)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===xa||n===Ma)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Gr)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rc||n===ya||n===Sa||n===Ea)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Gr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class pm extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pt extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mm={type:"move"};class Is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&h>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_m=`
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

}`;class vm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Tt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:gm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xm extends Ui{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,f=null,h=null,m=null,_=null;const x=new vm,p=t.getContextAttributes();let u=null,v=null;const b=[],y=[],C=new $e;let w=null;const R=new Xt;R.viewport=new dt;const I=new Xt;I.viewport=new dt;const S=[R,I],M=new pm;let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=b[G];return q===void 0&&(q=new Is,b[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=b[G];return q===void 0&&(q=new Is,b[G]=q),q.getGripSpace()},this.getHand=function(G){let q=b[G];return q===void 0&&(q=new Is,b[G]=q),q.getHandSpace()};function D(G){const q=y.indexOf(G.inputSource);if(q===-1)return;const Z=b[q];Z!==void 0&&(Z.update(G.inputSource,G.frame,l||a),Z.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",B);for(let G=0;G<b.length;G++){const q=y[G];q!==null&&(y[G]=null,b[G].disconnect(q))}A=null,P=null,x.reset(),e.setRenderTarget(u),m=null,h=null,f=null,r=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",X),r.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Zn(m.framebufferWidth,m.framebufferHeight,{format:tn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let q=null,Z=null,J=null;p.depth&&(J=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=p.stencil?Ci:Si,Z=p.stencil?Ri:Kn);const ce={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Zn(h.textureWidth,h.textureHeight,{format:tn,type:vn,depthTexture:new Gc(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(G){for(let q=0;q<G.removed.length;q++){const Z=G.removed[q],J=y.indexOf(Z);J>=0&&(y[J]=null,b[J].disconnect(Z))}for(let q=0;q<G.added.length;q++){const Z=G.added[q];let J=y.indexOf(Z);if(J===-1){for(let oe=0;oe<b.length;oe++)if(oe>=y.length){y.push(Z),J=oe;break}else if(y[oe]===null){y[oe]=Z,J=oe;break}if(J===-1)break}const ce=b[J];ce&&ce.connect(Z)}}const L=new W,Y=new W;function H(G,q,Z){L.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(Z.matrixWorld);const J=L.distanceTo(Y),ce=q.projectionMatrix.elements,oe=Z.projectionMatrix.elements,se=ce[14]/(ce[10]-1),Ee=ce[14]/(ce[10]+1),Ae=(ce[9]+1)/ce[5],Xe=(ce[9]-1)/ce[5],F=(ce[8]-1)/ce[0],U=(oe[8]+1)/oe[0],de=se*F,ue=se*U,fe=J/(-F+U),Ue=fe*-F;if(q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ue),G.translateZ(fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ce[10]===-1)G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const _e=se+fe,T=Ee+fe,g=de-Ue,V=ue+(J-Ue),ee=Ae*Ee/T*_e,ie=Xe*Ee/T*_e;G.projectionMatrix.makePerspective(g,V,ee,ie,_e,T),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function te(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let q=G.near,Z=G.far;x.texture!==null&&(x.depthNear>0&&(q=x.depthNear),x.depthFar>0&&(Z=x.depthFar)),M.near=I.near=R.near=q,M.far=I.far=R.far=Z,(A!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,P=M.far),R.layers.mask=G.layers.mask|2,I.layers.mask=G.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const J=G.parent,ce=M.cameras;te(M,J);for(let oe=0;oe<ce.length;oe++)te(ce[oe],J);ce.length===2?H(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),ne(G,M,J)};function ne(G,q,Z){Z===null?G.matrix.copy(q.matrixWorld):(G.matrix.copy(Z.matrixWorld),G.matrix.invert(),G.matrix.multiply(q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(q.projectionMatrix),G.projectionMatrixInverse.copy(q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=rr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ae=null;function ge(G,q){if(d=q.getViewerPose(l||a),_=q,d!==null){const Z=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let J=!1;Z.length!==M.cameras.length&&(M.cameras.length=0,J=!0);for(let oe=0;oe<Z.length;oe++){const se=Z[oe];let Ee=null;if(m!==null)Ee=m.getViewport(se);else{const Xe=f.getViewSubImage(h,se);Ee=Xe.viewport,oe===0&&(e.setRenderTargetTextures(v,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(v))}let Ae=S[oe];Ae===void 0&&(Ae=new Xt,Ae.layers.enable(oe),Ae.viewport=new dt,S[oe]=Ae),Ae.matrix.fromArray(se.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(se.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),oe===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),J===!0&&M.cameras.push(Ae)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const oe=f.getDepthInformation(Z[0]);oe&&oe.isValid&&oe.texture&&x.init(e,oe,r.renderState)}}for(let Z=0;Z<b.length;Z++){const J=y[Z],ce=b[Z];J!==null&&ce!==void 0&&ce.update(J,q,l||a)}ae&&ae(G,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),_=null}const Se=new Hc;Se.setAnimationLoop(ge),this.setAnimationLoop=function(G){ae=G},this.dispose=function(){}}}const Bn=new on,Mm=new ot;function ym(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Bc(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,b,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,v,b):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===It&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===It&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),b=v.envMap,y=v.envMapRotation;b&&(p.envMap.value=b,Bn.copy(y),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),p.envMapRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Bn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,v,b){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=b*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===It&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){const y=b.program;n.uniformBlockBinding(v,y)}function l(v,b){let y=r[v.id];y===void 0&&(_(v),y=d(v),r[v.id]=y,v.addEventListener("dispose",p));const C=b.program;n.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function d(v){const b=f();v.__bindingPointIndex=b;const y=i.createBuffer(),C=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,y),y}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=r[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,R=y.length;w<R;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,M=I.length;S<M;S++){const A=I[S];if(m(A,w,S,C)===!0){const P=A.__offset,D=Array.isArray(A.value)?A.value:[A.value];let X=0;for(let B=0;B<D.length;B++){const L=D[B],Y=x(L);typeof L=="number"||typeof L=="boolean"?(A.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,P+X,A.__data)):L.isMatrix3?(A.__data[0]=L.elements[0],A.__data[1]=L.elements[1],A.__data[2]=L.elements[2],A.__data[3]=0,A.__data[4]=L.elements[3],A.__data[5]=L.elements[4],A.__data[6]=L.elements[5],A.__data[7]=0,A.__data[8]=L.elements[6],A.__data[9]=L.elements[7],A.__data[10]=L.elements[8],A.__data[11]=0):(L.toArray(A.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,b,y,C){const w=v.value,R=b+"_"+y;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const I=C[R];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return C[R]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(v){const b=v.uniforms;let y=0;const C=16;for(let R=0,I=b.length;R<I;R++){const S=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,A=S.length;M<A;M++){const P=S[M],D=Array.isArray(P.value)?P.value:[P.value];for(let X=0,B=D.length;X<B;X++){const L=D[X],Y=x(L),H=y%C,te=H%Y.boundary,ne=H+te;y+=te,ne!==0&&C-ne<Y.storage&&(y+=C-ne),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=Y.storage}}}const w=y%C;return w>0&&(y+=C-w),v.__size=y,v.__cache={},this}function x(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function p(v){const b=v.target;b.removeEventListener("dispose",p);const y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function u(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Em{constructor(e={}){const{canvas:t=lu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=Cn,this.toneMappingExposure=1;const y=this;let C=!1,w=0,R=0,I=null,S=-1,M=null;const A=new dt,P=new dt;let D=null;const X=new Ve(0);let B=0,L=t.width,Y=t.height,H=1,te=null,ne=null;const ae=new dt(0,0,L,Y),ge=new dt(0,0,L,Y);let Se=!1;const G=new za;let q=!1,Z=!1;const J=new ot,ce=new ot,oe=new W,se=new dt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ae=!1;function Xe(){return I===null?H:1}let F=n;function U(E,z){return t.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ca}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Me,!1),F===null){const z="webgl2";if(F=U(z,E),F===null)throw U(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let de,ue,fe,Ue,_e,T,g,V,ee,ie,Q,we,pe,me,Oe,le,Te,Ne,Fe,Re,qe,ze,Qe,O;function ve(){de=new Rf(F),de.init(),ze=new fm(F,de),ue=new Sf(F,de,e,ze),fe=new um(F,de),ue.reverseDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),Ue=new Lf(F),_e=new Kp,T=new hm(F,de,fe,_e,ue,ze,Ue),g=new bf(y),V=new Af(y),ee=new Ou(F),Qe=new Mf(F,ee),ie=new Cf(F,ee,Ue,Qe),Q=new If(F,ie,ee,Ue),Fe=new Df(F,ue,T),le=new Ef(_e),we=new $p(y,g,V,de,ue,Qe,le),pe=new ym(y,_e),me=new jp,Oe=new im(de),Ne=new xf(y,g,V,fe,Q,m,c),Te=new cm(y,Q,ue),O=new Sm(F,Ue,ue,fe),Re=new yf(F,de,Ue),qe=new Pf(F,de,Ue),Ue.programs=we.programs,y.capabilities=ue,y.extensions=de,y.properties=_e,y.renderLists=me,y.shadowMap=Te,y.state=fe,y.info=Ue}ve();const j=new xm(y,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(L,Y,!1))},this.getSize=function(E){return E.set(L,Y)},this.setSize=function(E,z,$=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=E,Y=z,t.width=Math.floor(E*H),t.height=Math.floor(z*H),$===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(L*H,Y*H).floor()},this.setDrawingBufferSize=function(E,z,$){L=E,Y=z,H=$,t.width=Math.floor(E*$),t.height=Math.floor(z*$),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,z,$,K){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,z,$,K),fe.viewport(A.copy(ae).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(ge)},this.setScissor=function(E,z,$,K){E.isVector4?ge.set(E.x,E.y,E.z,E.w):ge.set(E,z,$,K),fe.scissor(P.copy(ge).multiplyScalar(H).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){fe.setScissorTest(Se=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,z=!0,$=!0){let K=0;if(E){let k=!1;if(I!==null){const he=I.texture.format;k=he===Oa||he===Fa||he===Na}if(k){const he=I.texture.type,be=he===vn||he===Kn||he===ir||he===Ri||he===Da||he===Ia,Pe=Ne.getClearColor(),Le=Ne.getClearAlpha(),He=Pe.r,Ge=Pe.g,De=Pe.b;be?(_[0]=He,_[1]=Ge,_[2]=De,_[3]=Le,F.clearBufferuiv(F.COLOR,0,_)):(x[0]=He,x[1]=Ge,x[2]=De,x[3]=Le,F.clearBufferiv(F.COLOR,0,x))}else K|=F.COLOR_BUFFER_BIT}z&&(K|=F.DEPTH_BUFFER_BIT),$&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),Oe.dispose(),_e.dispose(),g.dispose(),V.dispose(),Q.dispose(),Qe.dispose(),O.dispose(),we.dispose(),j.dispose(),j.removeEventListener("sessionstart",Bi),j.removeEventListener("sessionend",Wa),Dn.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=Ue.autoReset,z=Te.enabled,$=Te.autoUpdate,K=Te.needsUpdate,k=Te.type;ve(),Ue.autoReset=E,Te.enabled=z,Te.autoUpdate=$,Te.needsUpdate=K,Te.type=k}function Me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ke(E){const z=E.target;z.removeEventListener("dispose",ke),Be(z)}function Be(E){Ke(E),_e.remove(E)}function Ke(E){const z=_e.get(E).programs;z!==void 0&&(z.forEach(function($){we.releaseProgram($)}),E.isShaderMaterial&&we.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,$,K,k,he){z===null&&(z=Ee);const be=k.isMesh&&k.matrixWorld.determinant()<0,Pe=il(E,z,$,K,k);fe.setMaterial(K,be);let Le=$.index,He=1;if(K.wireframe===!0){if(Le=ie.getWireframeAttribute($),Le===void 0)return;He=2}const Ge=$.drawRange,De=$.attributes.position;let et=Ge.start*He,st=(Ge.start+Ge.count)*He;he!==null&&(et=Math.max(et,he.start*He),st=Math.min(st,(he.start+he.count)*He)),Le!==null?(et=Math.max(et,0),st=Math.min(st,Le.count)):De!=null&&(et=Math.max(et,0),st=Math.min(st,De.count));const ct=st-et;if(ct<0||ct===1/0)return;Qe.setup(k,K,Pe,$,Le);let Lt,tt=Re;if(Le!==null&&(Lt=ee.get(Le),tt=qe,tt.setIndex(Lt)),k.isMesh)K.wireframe===!0?(fe.setLineWidth(K.wireframeLinewidth*Xe()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(k.isLine){let Ie=K.linewidth;Ie===void 0&&(Ie=1),fe.setLineWidth(Ie*Xe()),k.isLineSegments?tt.setMode(F.LINES):k.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else k.isPoints?tt.setMode(F.POINTS):k.isSprite&&tt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ie=k._multiDrawStarts,cn=k._multiDrawCounts,nt=k._multiDrawCount,$t=Le?ee.get(Le).bytesPerElement:1,Qn=_e.get(K).currentProgram.getUniforms();for(let Nt=0;Nt<nt;Nt++)Qn.setValue(F,"_gl_DrawID",Nt),tt.render(Ie[Nt]/$t,cn[Nt])}else if(k.isInstancedMesh)tt.renderInstances(et,ct,k.count);else if($.isInstancedBufferGeometry){const Ie=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,cn=Math.min($.instanceCount,Ie);tt.renderInstances(et,ct,cn)}else tt.render(et,ct)};function je(E,z,$){E.transparent===!0&&E.side===Bt&&E.forceSinglePass===!1?(E.side=It,E.needsUpdate=!0,dr(E,z,$),E.side=Pn,E.needsUpdate=!0,dr(E,z,$),E.side=Bt):dr(E,z,$)}this.compile=function(E,z,$=null){$===null&&($=E),u=Oe.get($),u.init(z),b.push(u),$.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),E!==$&&E.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const K=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const he=k.material;if(he)if(Array.isArray(he))for(let be=0;be<he.length;be++){const Pe=he[be];je(Pe,$,k),K.add(Pe)}else je(he,$,k),K.add(he)}),b.pop(),u=null,K},this.compileAsync=function(E,z,$=null){const K=this.compile(E,z,$);return new Promise(k=>{function he(){if(K.forEach(function(be){_e.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){k(E);return}setTimeout(he,10)}de.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let At=null;function Ut(E){At&&At(E)}function Bi(){Dn.stop()}function Wa(){Dn.start()}const Dn=new Hc;Dn.setAnimationLoop(Ut),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(E){At=E,j.setAnimationLoop(E),E===null?Dn.stop():Dn.start()},j.addEventListener("sessionstart",Bi),j.addEventListener("sessionend",Wa),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,z,I),u=Oe.get(E,b.length),u.init(z),b.push(u),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),G.setFromProjectionMatrix(ce),Z=this.localClippingEnabled,q=le.init(this.clippingPlanes,Z),p=me.get(E,v.length),p.init(),v.push(p),j.enabled===!0&&j.isPresenting===!0){const he=y.xr.getDepthSensingMesh();he!==null&&ss(he,z,-1/0,y.sortObjects)}ss(E,z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(te,ne),Ae=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ae&&Ne.addToRenderList(p,E),this.info.render.frame++,q===!0&&le.beginShadows();const $=u.state.shadowsArray;Te.render($,E,z),q===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=p.opaque,k=p.transmissive;if(u.setupLights(),z.isArrayCamera){const he=z.cameras;if(k.length>0)for(let be=0,Pe=he.length;be<Pe;be++){const Le=he[be];qa(K,k,E,Le)}Ae&&Ne.render(E);for(let be=0,Pe=he.length;be<Pe;be++){const Le=he[be];Xa(p,E,Le,Le.viewport)}}else k.length>0&&qa(K,k,E,z),Ae&&Ne.render(E),Xa(p,E,z);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(y,E,z),Qe.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(u=b[b.length-1],q===!0&&le.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function ss(E,z,$,K){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){K&&se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const be=Q.update(E),Pe=E.material;Pe.visible&&p.push(E,be,Pe,$,se.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const be=Q.update(E),Pe=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),se.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),se.copy(be.boundingSphere.center)),se.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(Pe)){const Le=be.groups;for(let He=0,Ge=Le.length;He<Ge;He++){const De=Le[He],et=Pe[De.materialIndex];et&&et.visible&&p.push(E,be,et,$,se.z,De)}}else Pe.visible&&p.push(E,be,Pe,$,se.z,null)}}const he=E.children;for(let be=0,Pe=he.length;be<Pe;be++)ss(he[be],z,$,K)}function Xa(E,z,$,K){const k=E.opaque,he=E.transmissive,be=E.transparent;u.setupLightsView($),q===!0&&le.setGlobalState(y.clippingPlanes,$),K&&fe.viewport(A.copy(K)),k.length>0&&ur(k,z,$),he.length>0&&ur(he,z,$),be.length>0&&ur(be,z,$),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function qa(E,z,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[K.id]===void 0&&(u.state.transmissionRenderTarget[K.id]=new Zn(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?or:vn,minFilter:$n,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const he=u.state.transmissionRenderTarget[K.id],be=K.viewport||A;he.setSize(be.z,be.w);const Pe=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(X),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),Ae&&Ne.render($);const Le=y.toneMapping;y.toneMapping=Cn;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),u.setupLightsView(K),q===!0&&le.setGlobalState(y.clippingPlanes,K),ur(E,$,K),T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he),de.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let De=0,et=z.length;De<et;De++){const st=z[De],ct=st.object,Lt=st.geometry,tt=st.material,Ie=st.group;if(tt.side===Bt&&ct.layers.test(K.layers)){const cn=tt.side;tt.side=It,tt.needsUpdate=!0,Ya(ct,$,K,Lt,tt,Ie),tt.side=cn,tt.needsUpdate=!0,Ge=!0}}Ge===!0&&(T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he))}y.setRenderTarget(Pe),y.setClearColor(X,B),He!==void 0&&(K.viewport=He),y.toneMapping=Le}function ur(E,z,$){const K=z.isScene===!0?z.overrideMaterial:null;for(let k=0,he=E.length;k<he;k++){const be=E[k],Pe=be.object,Le=be.geometry,He=K===null?be.material:K,Ge=be.group;Pe.layers.test($.layers)&&Ya(Pe,z,$,Le,He,Ge)}}function Ya(E,z,$,K,k,he){E.onBeforeRender(y,z,$,K,k,he),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(y,z,$,K,E,he),k.transparent===!0&&k.side===Bt&&k.forceSinglePass===!1?(k.side=It,k.needsUpdate=!0,y.renderBufferDirect($,z,K,k,E,he),k.side=Pn,k.needsUpdate=!0,y.renderBufferDirect($,z,K,k,E,he),k.side=Bt):y.renderBufferDirect($,z,K,k,E,he),E.onAfterRender(y,z,$,K,k,he)}function dr(E,z,$){z.isScene!==!0&&(z=Ee);const K=_e.get(E),k=u.state.lights,he=u.state.shadowsArray,be=k.state.version,Pe=we.getParameters(E,k.state,he,z,$),Le=we.getProgramCacheKey(Pe);let He=K.programs;K.environment=E.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(E.isMeshStandardMaterial?V:g).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",ke),He=new Map,K.programs=He);let Ge=He.get(Le);if(Ge!==void 0){if(K.currentProgram===Ge&&K.lightsStateVersion===be)return Ka(E,Pe),Ge}else Pe.uniforms=we.getUniforms(E),E.onBeforeCompile(Pe,y),Ge=we.acquireProgram(Pe,Le),He.set(Le,Ge),K.uniforms=Pe.uniforms;const De=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=le.uniform),Ka(E,Pe),K.needsLights=sl(E),K.lightsStateVersion=be,K.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),K.currentProgram=Ge,K.uniformsList=null,Ge}function $a(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Wr.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Ka(E,z){const $=_e.get(E);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function il(E,z,$,K,k){z.isScene!==!0&&(z=Ee),T.resetTextureUnits();const he=z.fog,be=K.isMeshStandardMaterial?z.environment:null,Pe=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ii,Le=(K.isMeshStandardMaterial?V:g).get(K.envMap||be),He=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),De=!!$.morphAttributes.position,et=!!$.morphAttributes.normal,st=!!$.morphAttributes.color;let ct=Cn;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ct=y.toneMapping);const Lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tt=Lt!==void 0?Lt.length:0,Ie=_e.get(K),cn=u.state.lights;if(q===!0&&(Z===!0||E!==M)){const Ht=E===M&&K.id===S;le.setState(K,E,Ht)}let nt=!1;K.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==cn.state.version||Ie.outputColorSpace!==Pe||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Le||K.fog===!0&&Ie.fog!==he||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==le.numPlanes||Ie.numIntersection!==le.numIntersection)||Ie.vertexAlphas!==He||Ie.vertexTangents!==Ge||Ie.morphTargets!==De||Ie.morphNormals!==et||Ie.morphColors!==st||Ie.toneMapping!==ct||Ie.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Ie.__version=K.version);let $t=Ie.currentProgram;nt===!0&&($t=dr(K,z,k));let Qn=!1,Nt=!1,zi=!1;const lt=$t.getUniforms(),nn=Ie.uniforms;if(fe.useProgram($t.program)&&(Qn=!0,Nt=!0,zi=!0),K.id!==S&&(S=K.id,Nt=!0),Qn||M!==E){fe.buffers.depth.getReversed()?(J.copy(E.projectionMatrix),du(J),hu(J),lt.setValue(F,"projectionMatrix",J)):lt.setValue(F,"projectionMatrix",E.projectionMatrix),lt.setValue(F,"viewMatrix",E.matrixWorldInverse);const xn=lt.map.cameraPosition;xn!==void 0&&xn.setValue(F,oe.setFromMatrixPosition(E.matrixWorld)),ue.logarithmicDepthBuffer&&lt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&lt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Nt=!0,zi=!0)}if(k.isSkinnedMesh){lt.setOptional(F,k,"bindMatrix"),lt.setOptional(F,k,"bindMatrixInverse");const Ht=k.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),lt.setValue(F,"boneTexture",Ht.boneTexture,T))}k.isBatchedMesh&&(lt.setOptional(F,k,"batchingTexture"),lt.setValue(F,"batchingTexture",k._matricesTexture,T),lt.setOptional(F,k,"batchingIdTexture"),lt.setValue(F,"batchingIdTexture",k._indirectTexture,T),lt.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&lt.setValue(F,"batchingColorTexture",k._colorsTexture,T));const ki=$.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Fe.update(k,$,$t),(Nt||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,lt.setValue(F,"receiveShadow",k.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(nn.envMap.value=Le,nn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),Nt&&(lt.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&rl(nn,zi),he&&K.fog===!0&&pe.refreshFogUniforms(nn,he),pe.refreshMaterialUniforms(nn,K,H,Y,u.state.transmissionRenderTarget[E.id]),Wr.upload(F,$a(Ie),nn,T)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Wr.upload(F,$a(Ie),nn,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&lt.setValue(F,"center",k.center),lt.setValue(F,"modelViewMatrix",k.modelViewMatrix),lt.setValue(F,"normalMatrix",k.normalMatrix),lt.setValue(F,"modelMatrix",k.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ht=K.uniformsGroups;for(let xn=0,Mn=Ht.length;xn<Mn;xn++){const Za=Ht[xn];O.update(Za,$t),O.bind(Za,$t)}}return $t}function rl(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function sl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,z,$){_e.get(E.texture).__webglTexture=z,_e.get(E.depthTexture).__webglTexture=$;const K=_e.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const $=_e.get(E);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,$=0){I=E,w=z,R=$;let K=!0,k=null,he=!1,be=!1;if(E){const Le=_e.get(E);if(Le.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Le.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Le.__hasExternalTextures)T.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const De=E.depthTexture;if(Le.__boundDepthTexture!==De){if(De!==null&&_e.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Ge=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?k=Ge[z][$]:k=Ge[z],he=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?k=_e.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[$]:k=Ge,A.copy(E.viewport),P.copy(E.scissor),D=E.scissorTest}else A.copy(ae).multiplyScalar(H).floor(),P.copy(ge).multiplyScalar(H).floor(),D=Se;if(fe.bindFramebuffer(F.FRAMEBUFFER,k)&&K&&fe.drawBuffers(E,k),fe.viewport(A),fe.scissor(P),fe.setScissorTest(D),he){const Le=_e.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,$)}else if(be){const Le=_e.get(E.texture),He=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.__webglTexture,$||0,He)}S=-1},this.readRenderTargetPixels=function(E,z,$,K,k,he,be){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){fe.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const Le=E.texture,He=Le.format,Ge=Le.type;if(!ue.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-K&&$>=0&&$<=E.height-k&&F.readPixels(z,$,K,k,ze.convert(He),ze.convert(Ge),he)}finally{const Le=I!==null?_e.get(I).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,z,$,K,k,he,be){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){const Le=E.texture,He=Le.format,Ge=Le.type;if(!ue.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-K&&$>=0&&$<=E.height-k){fe.bindFramebuffer(F.FRAMEBUFFER,Pe);const De=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.bufferData(F.PIXEL_PACK_BUFFER,he.byteLength,F.STREAM_READ),F.readPixels(z,$,K,k,ze.convert(He),ze.convert(Ge),0);const et=I!==null?_e.get(I).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,et);const st=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await uu(F,st,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,De),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,he),F.deleteBuffer(De),F.deleteSync(st),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,$=0){E.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-$),k=Math.floor(E.image.width*K),he=Math.floor(E.image.height*K),be=z!==null?z.x:0,Pe=z!==null?z.y:0;T.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,be,Pe,k,he),fe.unbindTexture()},this.copyTextureToTexture=function(E,z,$=null,K=null,k=0){E.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],z=arguments[2],k=arguments[3]||0,$=null);let he,be,Pe,Le,He,Ge,De,et,st;const ct=E.isCompressedTexture?E.mipmaps[k]:E.image;$!==null?(he=$.max.x-$.min.x,be=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,Le=$.min.x,He=$.min.y,Ge=$.isBox3?$.min.z:0):(he=ct.width,be=ct.height,Pe=ct.depth||1,Le=0,He=0,Ge=0),K!==null?(De=K.x,et=K.y,st=K.z):(De=0,et=0,st=0);const Lt=ze.convert(z.format),tt=ze.convert(z.type);let Ie;z.isData3DTexture?(T.setTexture3D(z,0),Ie=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Ie=F.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Ie=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const cn=F.getParameter(F.UNPACK_ROW_LENGTH),nt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),$t=F.getParameter(F.UNPACK_SKIP_PIXELS),Qn=F.getParameter(F.UNPACK_SKIP_ROWS),Nt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),F.pixelStorei(F.UNPACK_SKIP_ROWS,He),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge);const zi=E.isDataArrayTexture||E.isData3DTexture,lt=z.isDataArrayTexture||z.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const nn=_e.get(E),ki=_e.get(z),Ht=_e.get(nn.__renderTarget),xn=_e.get(ki.__renderTarget);fe.bindFramebuffer(F.READ_FRAMEBUFFER,Ht.__webglFramebuffer),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Mn=0;Mn<Pe;Mn++)zi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.get(E).__webglTexture,k,Ge+Mn),E.isDepthTexture?(lt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.get(z).__webglTexture,k,st+Mn),F.blitFramebuffer(Le,He,he,be,De,et,he,be,F.DEPTH_BUFFER_BIT,F.NEAREST)):lt?F.copyTexSubImage3D(Ie,k,De,et,st+Mn,Le,He,he,be):F.copyTexSubImage2D(Ie,k,De,et,st+Mn,Le,He,he,be);fe.bindFramebuffer(F.READ_FRAMEBUFFER,null),fe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Ie,k,De,et,st,he,be,Pe,Lt,tt,ct.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,k,De,et,st,he,be,Pe,Lt,ct.data):F.texSubImage3D(Ie,k,De,et,st,he,be,Pe,Lt,tt,ct):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,De,et,he,be,Lt,tt,ct.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,De,et,ct.width,ct.height,Lt,ct.data):F.texSubImage2D(F.TEXTURE_2D,k,De,et,he,be,Lt,tt,ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,cn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nt),k===0&&z.generateMipmaps&&F.generateMipmap(Ie),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,z,$=null,K=null,k=0){return E.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,E=arguments[2],z=arguments[3],k=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,z,$,K,k)},this.initRenderTarget=function(E){_e.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){w=0,R=0,I=null,fe.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Ha{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new Ha(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bm extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rt=new W;class $r{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=en(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $c extends Fi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const Xi=new W,mi=new W,gi=new W,_i=new $e,qi=new $e,Kc=new ot,Ir=new W,Yi=new W,Ur=new W,jo=new $e,Us=new $e,Jo=new $e;class Tm extends _t{constructor(e=new $c){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wm(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new $r(n,3,0,!1)),pi.setAttribute("uv",new $r(n,2,3,!1))}this.geometry=pi,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mi.setFromMatrixScale(this.matrixWorld),Kc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mi.multiplyScalar(-gi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Nr(Ir.set(-.5,-.5,0),gi,a,mi,r,s),Nr(Yi.set(.5,-.5,0),gi,a,mi,r,s),Nr(Ur.set(.5,.5,0),gi,a,mi,r,s),jo.set(0,0),Us.set(1,0),Jo.set(1,1);let o=e.ray.intersectTriangle(Ir,Yi,Ur,!1,Xi);if(o===null&&(Nr(Yi.set(-.5,.5,0),gi,a,mi,r,s),Us.set(0,1),o=e.ray.intersectTriangle(Ir,Ur,Yi,!1,Xi),o===null))return;const c=e.ray.origin.distanceTo(Xi);c<e.near||c>e.far||t.push({distance:c,point:Xi.clone(),uv:qt.getInterpolation(Xi,Ir,Yi,Ur,jo,Us,Jo,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Nr(i,e,t,n,r,s){_i.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(qi.x=s*_i.x-r*_i.y,qi.y=r*_i.x+s*_i.y):qi.copy(_i),i.copy(e),i.x+=qi.x,i.y+=qi.y,i.applyMatrix4(Kc)}class Am extends Tt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=zt,d=zt,f,h){super(null,a,o,c,l,d,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta extends Yt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new ot,Qo=new ot,Fr=[],ec=new Jn,Rm=new ot,$i=new Ze,Ki=new Ni;class Cm extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Rm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),ec.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(ec)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Ki.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),e.ray.intersectsSphere(Ki)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vi),Qo.multiplyMatrices(n,vi),$i.matrixWorld=Qo,$i.raycast(e,Fr);for(let a=0,o=Fr.length;a<o;a++){const c=Fr[a];c.instanceId=s,c.object=this,t.push(c)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Am(new Float32Array(r*this.count),r,this.count,Ua,an));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pm extends Tt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends kt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new W,d=new $e;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const m=n+f/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,c.push(d.x,d.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jn extends kt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],m=[];let _=0;const x=[],p=n/2;let u=0;v(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(m,2));function v(){const y=new W,C=new W;let w=0;const R=(t-e)/n;for(let I=0;I<=s;I++){const S=[],M=I/s,A=M*(t-e)+e;for(let P=0;P<=r;P++){const D=P/r,X=D*c+o,B=Math.sin(X),L=Math.cos(X);C.x=A*B,C.y=-M*n+p,C.z=A*L,f.push(C.x,C.y,C.z),y.set(B,R,L).normalize(),h.push(y.x,y.y,y.z),m.push(D,1-M),S.push(_++)}x.push(S)}for(let I=0;I<r;I++)for(let S=0;S<s;S++){const M=x[S][I],A=x[S+1][I],P=x[S+1][I+1],D=x[S][I+1];(e>0||S!==0)&&(d.push(M,A,D),w+=3),(t>0||S!==s-1)&&(d.push(A,P,D),w+=3)}l.addGroup(u,w,0),u+=w}function b(y){const C=_,w=new $e,R=new W;let I=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let P=1;P<=r;P++)f.push(0,p*M,0),h.push(0,M,0),m.push(.5,.5),_++;const A=_;for(let P=0;P<=r;P++){const X=P/r*c+o,B=Math.cos(X),L=Math.sin(X);R.x=S*L,R.y=p*M,R.z=S*B,f.push(R.x,R.y,R.z),h.push(0,M,0),w.x=B*.5+.5,w.y=L*.5*M+.5,m.push(w.x,w.y),_++}for(let P=0;P<r;P++){const D=C+P,X=A+P;y===!0?d.push(X,X+1,D):d.push(X+1,X,D),I+=3}l.addGroup(u,I,y===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Di extends kt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],d=[];let f=e;const h=(t-e)/r,m=new W,_=new $e;for(let x=0;x<=r;x++){for(let p=0;p<=n;p++){const u=s+p/n*a;m.x=f*Math.cos(u),m.y=f*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,d.push(_.x,_.y)}f+=h}for(let x=0;x<r;x++){const p=x*(n+1);for(let u=0;u<n;u++){const v=u+p,b=v,y=v+n+1,C=v+n+2,w=v+1;o.push(b,y,w),o.push(y,C,w)}}this.setIndex(o),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lr extends kt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const d=[],f=new W,h=new W,m=[],_=[],x=[],p=[];for(let u=0;u<=n;u++){const v=[],b=u/n;let y=0;u===0&&a===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const w=C/t;f.x=-e*Math.cos(r+w*s)*Math.sin(a+b*o),f.y=e*Math.cos(a+b*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+b*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),p.push(w+y,1-b),v.push(l++)}d.push(v)}for(let u=0;u<n;u++)for(let v=0;v<t;v++){const b=d[u][v+1],y=d[u][v],C=d[u+1][v],w=d[u+1][v+1];(u!==0||a>0)&&m.push(b,y,w),(u!==n-1||c<Math.PI)&&m.push(y,C,w)}this.setIndex(m),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class is extends kt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],d=new W,f=new W,h=new W;for(let m=0;m<=n;m++)for(let _=0;_<=r;_++){const x=_/r*s,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),h.subVectors(f,d).normalize(),c.push(h.x,h.y,h.z),l.push(_/r),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=r;_++){const x=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,v=(r+1)*m+_;a.push(x,p,v),a.push(p,u,v)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mt extends Fi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Pa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zc extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Lm extends Zc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ns=new ot,tc=new W,nc=new W;class Dm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(tc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),Ns.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ns),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Im extends Dm{constructor(){super(new Vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Um extends Zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ca);const ft={sky:11125976,ground:5212732,berm:3815480,bermAccent:5920080,gate:14431557,gateBase:2763310,portal:7023242,portalGlow:11820287,player:9417940,shield:4868682,swordBlade:14211288,swordGuard:4013373,enemy:10101299,enemyHit:16747146,slash:16770720,impact:16764006},N={arenaRadius:28,playerRadius:.55,playerSpeed:8.5,playerHp:100,gateHp:500,gateSize:2.4,enemySize:1.1,enemySpeed:2.6,enemyHp:20,enemyContactDamage:9,enemyGateDamage:1.2,enemyContactCooldown:.8,enemyGateCooldown:1.2,enemyAttackRange:1.55,enemyTelegraph:.48,enemyBonk:.22,enemyRecover:.4,enemyKnockback:2.8,corpseLifetime:2.8,corpseBounce:.42,maxEnemies:300,waveCountdown:3,cameraDistance:3.2,cameraHeight:1.55,cameraLookHeight:1.05,mouseSensitivity:.0022,lightDamage:18,combo3Damage:28,comboWindow:.6,comboStepDur:[.3,.3,.42],lightRange:3.2,lightCooldown:.08,heavyDamage:42,heavyRange:3.4,heavyCooldown:.48,heavyDur:.36,pushDamage:26,pushRange:3,pushCooldown:.35,pushDur:.28,spinDamage:14,spinRevolutions:3,spinRange:3.4,spinCooldown:2.6,spinDur:1.15,slamDamage:55,slamRange:4.2,slamCooldown:3.2,slamWindup:.42,slamSlam:.18,slamRecover:.22,dodgeCooldown:.85,dodgeDuration:.28,dodgeSpeedMul:2.6,iFrameDuration:.35,jumpVelocity:7.2,gravity:22,playerKnockback:4.5,hitStop:.06,scorePerKill:12,scorePerSecondNear:6};function Nm(i){const e=Math.max(0,Math.floor(i)),t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`}function Fm(i){const e=new Set,t={dx:0,dy:0,buttons:0},n={x:0,y:0},r={light:!1,heavy:!1,push:!1,block:!1,dodge:!1,spin:!1,slam:!1,jump:!1,camera:!1},s=matchMedia("(pointer: coarse)").matches;let a=!1,o=!1,c=0,l=0;function d(){if(s&&(n.x!==0||n.y!==0))return;let w=0,R=0;(e.has("KeyA")||e.has("ArrowLeft"))&&(w-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(w+=1),(e.has("KeyW")||e.has("ArrowUp"))&&(R-=1),(e.has("KeyS")||e.has("ArrowDown"))&&(R+=1);const I=Math.hypot(w,R)||1;n.x=w/I,n.y=R/I}function f(w){e.add(w.code),w.code==="KeyE"&&(r.heavy=!0),(w.code==="ShiftLeft"||w.code==="ShiftRight")&&(r.dodge=!0),w.code==="KeyQ"&&(r.spin=!0),w.code==="KeyF"&&(r.slam=!0),w.code==="KeyV"&&(r.camera=!0),w.code==="Space"&&(w.preventDefault(),r.jump=!0),d()}function h(w){e.delete(w.code),d()}function m(w){var R;t.buttons|=1<<w.button,w.button===2&&(r.block=!0),w.button===0&&(r.block||t.buttons&4||t.buttons&4?r.push=!0:r.light=!0),!a&&!s&&((R=i.requestPointerLock)==null||R.call(i))}function _(w){t.buttons&=~(1<<w.button),w.button===2&&(r.block=!1)}function x(w){a?(t.dx+=w.movementX,t.dy+=w.movementY):o&&(t.dx+=w.clientX-c,t.dy+=w.clientY-l,c=w.clientX,l=w.clientY)}function p(){a=document.pointerLockElement===i}function u(w){w.preventDefault()}window.addEventListener("keydown",f),window.addEventListener("keyup",h),i.addEventListener("mousedown",m),window.addEventListener("mouseup",_),window.addEventListener("mousemove",x),document.addEventListener("pointerlockchange",p),i.addEventListener("contextmenu",u);const v=document.getElementById("stick"),b=document.getElementById("stick-knob"),y=document.getElementById("touch");if(s&&y){let S=function(M){const A=v.getBoundingClientRect(),P=A.left+A.width/2,D=A.top+A.height/2;let X=M.clientX-P,B=M.clientY-D;const L=Math.hypot(X,B)||1,Y=Math.min(L,R);X=X/L*Y,B=B/L*Y,n.x=X/R,n.y=B/R,b&&(b.style.transform=`translate(${X}px, ${B}px)`)};var C=S;y.classList.remove("hidden");let w=null;const R=46;v==null||v.addEventListener("pointerdown",M=>{w=M.pointerId,v.setPointerCapture(M.pointerId),S(M)}),v==null||v.addEventListener("pointermove",M=>{M.pointerId===w&&S(M)});const I=M=>{M.pointerId===w&&(w=null,n.x=0,n.y=0,b&&(b.style.transform="translate(0,0)"))};v==null||v.addEventListener("pointerup",I),v==null||v.addEventListener("pointercancel",I),i.addEventListener("pointerdown",M=>{var A,P;(P=(A=M.target).closest)!=null&&P.call(A,".touch-actions, .stick, button, .overlay")||M.clientX<window.innerWidth*.45||(o=!0,c=M.clientX,l=M.clientY)}),window.addEventListener("pointerup",()=>{o=!1}),document.querySelectorAll(".tbtn").forEach(M=>{const A=M.dataset.act,P=X=>{X.preventDefault(),A==="block"?r.block=!0:A==="light"&&r.block?r.push=!0:A&&(r[A]=!0)},D=()=>{A==="block"&&(r.block=!1)};M.addEventListener("pointerdown",P),M.addEventListener("pointerup",D),M.addEventListener("pointercancel",D)})}return{move:n,actions:r,mouse:t,get pointerLocked(){return a},requestLock(){var w;s||(w=i.requestPointerLock)==null||w.call(i)},consumeMouseDelta(){const w=t.dx,R=t.dy;return t.dx=0,t.dy=0,{dx:w,dy:R}},consumeAction(w){return r[w]?(w==="block"||(r[w]=!1),!0):!1},isBlocking(){return r.block||!!(t.buttons&4)},dispose(){window.removeEventListener("keydown",f),window.removeEventListener("keyup",h),i.removeEventListener("mousedown",m),window.removeEventListener("mouseup",_),window.removeEventListener("mousemove",x),document.removeEventListener("pointerlockchange",p),i.removeEventListener("contextmenu",u)}}}const ar=[{x:-18,z:-6,radius:9.2,label:"westBerm",visualRadius:10}];function jc(){return ar}function Om(i){ar.length=0;for(const e of i)ar.push({x:e.x,z:e.z,radius:e.radius,label:e.label??e.id??"obstacle",visualRadius:e.visualRadius??e.radius+.8})}function Aa(i,e=.55){for(const t of ar){const n=i.x-t.x,r=i.z-t.z,s=Math.hypot(n,r),a=t.radius+e;if(!(s>=a))if(s>1e-4){const o=a/s;i.x=t.x+n*o,i.z=t.z+r*o}else i.x=t.x+a,i.z=t.z}}function Bm(i,e,t,n,r=.55){let s=t,a=n;for(const c of ar){const l=i-c.x,d=e-c.z,f=Math.hypot(l,d),h=c.radius+r+4.5;if(f>=h||f<.01)continue;const m=1-f/h,_=m*m*2.4;s+=l/f*_,a+=d/f*_}const o=Math.hypot(s,a)||1;return{dirX:s/o,dirZ:a/o}}const zm=1,km={id:"default",name:"Default Arena",author:"sec-knight",description:"Shipped horde defense layout — gate behind player, portal far +Z, west berm.",tags:["official"]},Hm={arenaRadius:28,playerSpawn:{x:0,z:-4},gate:{x:0,z:-23.5,size:2.4},portal:{x:0,z:24.5},obstacles:[{id:"westBerm",kind:"berm",x:-18,z:-6,radius:9.2,visualRadius:10}],environment:{sky:"#a9c4d8",ground:"#4f8a3c",fogNear:42,fogFar:70}},Vm={player:{hp:100,radius:.55,speed:8.5},gate:{hp:500},enemy:{hp:20,size:1.1,speed:2.6,contactDamage:9,gateDamage:1.2,knockback:2.8},weapons:{light:{damage:18,range:3.2,cooldown:.08},comboFinisher:{damage:28},heavy:{damage:42,range:3.4,cooldown:.48},push:{damage:26,range:3,cooldown:.35},spin:{damage:14,range:3.4,revolutions:3,cooldown:2.6},slam:{damage:55,range:4.2,cooldown:3.2}},shield:{blockDamageMul:.28}},Gm={player:{knockback:4.5,hitStop:.06,dodgeCooldown:.85,dodgeDuration:.28,iFrameDuration:.35,jumpVelocity:7.2,gravity:22,mouseSensitivity:.0022},camera:{distance:3.2,height:1.55,lookHeight:1.05},horde:{maxEnemies:300,contactCooldown:.8,gateContactCooldown:1.2,attackRange:1.55,telegraph:.48,bonk:.22,recover:.4},corpse:{lifetime:2.8,bounce:.42}},Wm={waveCountdown:3,betweenWavePause:1.4,waveCount:{kind:"quadratic",base:4,quadratic:3.2,linear:5,cap:300},scoring:{perKill:12,perSecondNear:6,waveClearBonus:40},spawn:{ringBaseRadius:2.2,ringSpacing:1.7,ringGrowth:4}},Xm={schemaVersion:zm,foundation:km,world:Hm,things:Vm,actors:Gm,events:Wm},qm=1,Ym={id:"pressure-test",name:"Pressure Test",author:"mark",description:"Aggressive quadratic horde ramp for stress testing instancing and berm pathing.",tags:["stress","admin"],parentId:"default"},$m={enemy:{hp:16,speed:3,contactDamage:11}},Km={horde:{maxEnemies:300}},Zm={waveCountdown:2,betweenWavePause:1,waveCount:{kind:"quadratic",base:8,quadratic:4.5,linear:6,cap:300}},jm={schemaVersion:qm,foundation:Ym,things:$m,actors:Km,events:Zm},Jm=1,Qm={id:"studio",name:"Domain Workshop",author:"mark",description:"Prototyping level with Things / Actors / Events / Worlds pads. Programmer-art authoring sandbox.",tags:["studio","workshop","authoring"]},eg={arenaRadius:36,playerSpawn:{x:0,z:0},gate:{x:0,z:-32,size:1.2},portal:{x:0,z:32},obstacles:[],environment:{sky:"#c5d6e4",ground:"#5a6b52",fogNear:48,fogFar:90},zones:[{id:"pad-things",domain:"things",label:"THINGS",x:-14,z:-12,width:16,depth:14,color:"#c9a46a"},{id:"pad-actors",domain:"actors",label:"ACTORS",x:14,z:-12,width:16,depth:14,color:"#5ba8d8"},{id:"pad-events",domain:"events",label:"EVENTS",x:-14,z:14,width:16,depth:14,color:"#e08a2e"},{id:"pad-worlds",domain:"world",label:"WORLDS",x:14,z:14,width:16,depth:14,color:"#6bbf7a"}]},tg={player:{hp:100,radius:.55,speed:9.5},gate:{hp:500},enemy:{hp:20,size:1.1,speed:2.6,contactDamage:9,gateDamage:1.2,knockback:2.8},catalog:[{id:"hat-captain",name:"Captain Hat",kind:"equip",slot:"head",style:"hat",parts:[{id:"brim",primitive:"cylinder",x:0,y:.05,z:0,sx:.55,sy:.06,sz:.55,color:"#1a1a1a"},{id:"crown",primitive:"cylinder",x:0,y:.22,z:0,sx:.32,sy:.28,sz:.32,color:"#222222"},{id:"plume",primitive:"sphere",x:.05,y:.42,z:-.05,sx:.12,sy:.18,sz:.12,color:"#c53d4a"}]},{id:"sword-captain",name:"Captain Sword",kind:"equip",slot:"hand",style:"sword",parts:[{id:"blade",primitive:"box",x:0,y:.55,z:0,sx:.08,sy:.9,sz:.16,color:"#d8dde8"},{id:"guard",primitive:"box",x:0,y:.12,z:0,sx:.36,sy:.08,sz:.12,color:"#c9a46a"},{id:"grip",primitive:"cylinder",x:0,y:-.08,z:0,sx:.07,sy:.28,sz:.07,color:"#4a3020"}]},{id:"chest-oak",name:"Oak Chest",kind:"prop",slot:"world",parts:[{id:"body",primitive:"box",x:0,y:.35,z:0,sx:1.1,sy:.7,sz:.7,color:"#8b5a2b"},{id:"lid",primitive:"box",x:0,y:.78,z:0,sx:1.14,sy:.16,sz:.74,color:"#6e4420"},{id:"lock",primitive:"sphere",x:0,y:.55,z:.38,sx:.12,sy:.12,sz:.12,color:"#c9a46a"}]}]},ng={player:{knockback:4.5,hitStop:.06,dodgeCooldown:.85,dodgeDuration:.28,iFrameDuration:.35,jumpVelocity:7.2,gravity:22,mouseSensitivity:.0022},camera:{distance:4.2,height:1.8,lookHeight:1.1},horde:{maxEnemies:300,contactCooldown:.8,gateContactCooldown:1.2,attackRange:1.55,telegraph:.48,bonk:.22,recover:.4},corpse:{lifetime:2.8,bounce:.42},catalog:[{id:"undead-soldier",name:"Undead Soldier",role:"minion",hp:18,speed:2.4,size:1,color:"#6a8f6a",thingIds:[]},{id:"enemy-captain",name:"Enemy Captain",role:"elite",hp:140,speed:2.1,size:1.35,color:"#4a5568",slots:{head:"hat-captain",hand:"sword-captain"},thingIds:["hat-captain","sword-captain"],summons:{actorId:"undead-soldier",maxAlive:100,refill:!0}}]},ig={waveCountdown:3,betweenWavePause:1.4,waveCount:{kind:"fixed",count:0},scoring:{perKill:12,perSecondNear:6,waveClearBonus:40},spawn:{ringBaseRadius:2.2,ringSpacing:1.7,ringGrowth:4},scripts:[{id:"chest-captain-gauntlet",name:"Chest Captain Gauntlet",description:"Walk near the chest → summon captain → captain keeps up to 100 undead soldiers → kill captain → chest unlocks.",steps:[{id:"approach",when:{nearThing:"chest-oak",radius:4},then:{spawnActor:"enemy-captain",at:"events-stage"}},{id:"reinforce",while:{actorAlive:"enemy-captain"},then:{summonLoop:{actorId:"undead-soldier",maxAlive:100,refill:!0}}},{id:"loot",when:{actorDead:"enemy-captain"},then:{unlockThing:"chest-oak"}}]}]},rg={schemaVersion:Jm,foundation:Qm,world:eg,things:tg,actors:ng,events:ig},Kr={default:Xm,"pressure-test":jm,studio:rg},Zr="default",sg=[{id:"weapon-sword",name:"Sword",kind:"equip",slot:"hand",style:"sword",parts:[{id:"blade",primitive:"box",x:0,y:.55,z:0,sx:.1,sy:1.2,sz:.06,color:"#d8dde8"},{id:"guard",primitive:"box",x:0,y:.05,z:0,sx:.38,sy:.08,sz:.1,color:"#c9a46a"},{id:"grip",primitive:"cylinder",x:0,y:-.2,z:0,sx:.07,sy:.32,sz:.07,color:"#4a3020"}]},{id:"weapon-spear",name:"Spear",kind:"equip",slot:"hand",style:"spear",parts:[{id:"shaft",primitive:"cylinder",x:0,y:.45,z:0,sx:.06,sy:1.6,sz:.06,color:"#6e4420"},{id:"tip",primitive:"box",x:0,y:1.35,z:0,sx:.12,sy:.35,sz:.06,color:"#c0c8d4"},{id:"butt",primitive:"sphere",x:0,y:-.35,z:0,sx:.1,sy:.1,sz:.1,color:"#3d3d3d"}]},{id:"weapon-hammer",name:"Hammer",kind:"equip",slot:"hand",style:"hammer",parts:[{id:"handle",primitive:"cylinder",x:0,y:.2,z:0,sx:.08,sy:.9,sz:.08,color:"#5a3a22"},{id:"head",primitive:"box",x:0,y:.75,z:0,sx:.55,sy:.35,sz:.35,color:"#7a808c"},{id:"pommel",primitive:"sphere",x:0,y:-.28,z:0,sx:.12,sy:.12,sz:.12,color:"#3d3d3d"}]},{id:"hat-cap",name:"Soft Cap",kind:"equip",slot:"head",style:"hat",parts:[{id:"crown",primitive:"sphere",x:0,y:.12,z:0,sx:.42,sy:.28,sz:.42,color:"#3a6ea5"},{id:"brim",primitive:"cylinder",x:0,y:.02,z:.08,sx:.48,sy:.04,sz:.48,color:"#2a5078"}]},{id:"hat-bucket",name:"Bucket Helm",kind:"equip",slot:"head",style:"hat",parts:[{id:"dome",primitive:"cylinder",x:0,y:.22,z:0,sx:.48,sy:.4,sz:.48,color:"#8a909c"},{id:"rim",primitive:"cylinder",x:0,y:.02,z:0,sx:.55,sy:.06,sz:.55,color:"#6a707c"},{id:"slot",primitive:"box",x:0,y:.18,z:.24,sx:.28,sy:.06,sz:.04,color:"#1a1a1a"}]},{id:"hat-none",name:"No Hat",kind:"equip",slot:"head",style:"hat",parts:[]}],ag=[{id:"sky",name:"Sky",hex:"#8fb4d4"},{id:"moss",name:"Moss",hex:"#6bbf7a"},{id:"ember",name:"Ember",hex:"#e08a2e"},{id:"rose",name:"Rose",hex:"#c53d4a"},{id:"gold",name:"Gold",hex:"#c9a46a"},{id:"slate",name:"Slate",hex:"#6a7380"},{id:"violet",name:"Violet",hex:"#7a6bb0"},{id:"snow",name:"Snow",hex:"#e8ecf2"}];function Jc(i=[]){const e=new Map;for(const t of sg)e.set(t.id,structuredClone(t));for(const t of i)t!=null&&t.id&&e.set(t.id,t);return[...e.values()]}function Va(i,e){return(i??[]).filter(t=>t.kind==="equip"&&t.slot===e&&t.id!=="hat-none")}function Qc(i,e){const t=Va(i,e);return[{id:null,name:"No Hat",slot:"head",parts:[]},...t]}function el(i,e){if(e==null)return i;if(Array.isArray(e))return e.slice();if(typeof e!="object")return e;const t={...i};for(const n of Object.keys(e)){const r=i==null?void 0:i[n],s=e[n];s!==null&&typeof s=="object"&&!Array.isArray(s)&&typeof r=="object"&&r&&!Array.isArray(r)?t[n]=el(r,s):t[n]=s}return t}function Or(i,e,t){return Math.min(t,Math.max(e,i))}function og(i,e){var n,r,s,a,o,c,l,d,f;const t=e??i.arenaRadius??28;return{arenaRadius:t,playerSpawn:i.playerSpawn??{x:0,z:-4},gate:{x:((n=i.gate)==null?void 0:n.x)??0,z:((r=i.gate)==null?void 0:r.z)??-t+4.5,size:((s=i.gate)==null?void 0:s.size)??2.4},portal:{x:((a=i.portal)==null?void 0:a.x)??0,z:((o=i.portal)==null?void 0:o.z)??t-3.5},obstacles:(i.obstacles??[]).map(h=>({id:h.id,kind:h.kind??"berm",x:h.x,z:h.z,radius:h.radius,visualRadius:h.visualRadius??h.radius+.8})),environment:{sky:((c=i.environment)==null?void 0:c.sky)??"#a9c4d8",ground:((l=i.environment)==null?void 0:l.ground)??"#4f8a3c",fogNear:((d=i.environment)==null?void 0:d.fogNear)??42,fogFar:((f=i.environment)==null?void 0:f.fogFar)??70},zones:(i.zones??[]).map(h=>({id:h.id,domain:h.domain,label:h.label??String(h.domain??"zone").toUpperCase(),x:h.x??0,z:h.z??0,width:h.width??12,depth:h.depth??12,color:h.color}))}}function Xn(i=Zr){const e=Kr[i];if(!e)throw new Error(`Unknown preset: ${i}`);return Ga(e,Zr)}function Ga(i,e=Zr){const t=structuredClone(Kr[e]??Kr[Zr]),n=el(t,i);if(n.schemaVersion!==1)throw new Error(`Unsupported schemaVersion: ${n.schemaVersion}`);return jr(n)}function jr(i){var t,n,r;const e=structuredClone(i);e.world=og(e.world??{},(t=e.world)==null?void 0:t.arenaRadius),e.world.arenaRadius=Or(e.world.arenaRadius,12,40),e.world.gate.size=Or(e.world.gate.size,1,6);for(const s of e.world.obstacles)s.radius=Or(s.radius,.5,18),s.visualRadius=Or(s.visualRadius??s.radius+.8,s.radius,20);return(n=e.foundation)!=null&&n.id||(e.foundation={...e.foundation,id:"custom",name:"Custom"}),(r=e.foundation)!=null&&r.name||(e.foundation.name=e.foundation.id),e.things=e.things??{},e.things.catalog=Jc(Array.isArray(e.things.catalog)?e.things.catalog:[]),e.actors=e.actors??{},e.actors.catalog=Array.isArray(e.actors.catalog)?e.actors.catalog:[],e.events=e.events??{},e.events.scripts=Array.isArray(e.events.scripts)?e.events.scripts:[],e}function Ra(i){return JSON.stringify(i,null,2)}let rs=Xn("default");function at(){return rs}function bi(i){rs=i}function ic(){return rs.events??{}}function cg(){var i;return((i=rs.events)==null?void 0:i.scoring)??{perKill:12,perSecondNear:6,waveClearBonus:40}}function rc(i){return Number.parseInt(String(i).replace("#",""),16)}function lg(i={},e={},t={}){var f,h,m,_,x,p,u,v,b,y,C,w,R,I,S,M,A,P,D;const n=i.player??{},r=i.gate??{},s=i.enemy??{},a=i.weapons??{},o=e.player??{},c=e.camera??{},l=e.horde??{},d=e.corpse??{};Object.assign(N,{playerHp:n.hp??N.playerHp,playerRadius:n.radius??N.playerRadius,playerSpeed:n.speed??N.playerSpeed,gateHp:r.hp??N.gateHp,enemyHp:s.hp??N.enemyHp,enemySize:s.size??N.enemySize,enemySpeed:s.speed??N.enemySpeed,enemyContactDamage:s.contactDamage??N.enemyContactDamage,enemyGateDamage:s.gateDamage??N.enemyGateDamage,enemyKnockback:s.knockback??N.enemyKnockback,lightDamage:((f=a.light)==null?void 0:f.damage)??N.lightDamage,lightRange:((h=a.light)==null?void 0:h.range)??N.lightRange,lightCooldown:((m=a.light)==null?void 0:m.cooldown)??N.lightCooldown,combo3Damage:((_=a.comboFinisher)==null?void 0:_.damage)??N.combo3Damage,heavyDamage:((x=a.heavy)==null?void 0:x.damage)??N.heavyDamage,heavyRange:((p=a.heavy)==null?void 0:p.range)??N.heavyRange,heavyCooldown:((u=a.heavy)==null?void 0:u.cooldown)??N.heavyCooldown,pushDamage:((v=a.push)==null?void 0:v.damage)??N.pushDamage,pushRange:((b=a.push)==null?void 0:b.range)??N.pushRange,pushCooldown:((y=a.push)==null?void 0:y.cooldown)??N.pushCooldown,spinDamage:((C=a.spin)==null?void 0:C.damage)??N.spinDamage,spinRange:((w=a.spin)==null?void 0:w.range)??N.spinRange,spinRevolutions:((R=a.spin)==null?void 0:R.revolutions)??N.spinRevolutions,spinCooldown:((I=a.spin)==null?void 0:I.cooldown)??N.spinCooldown,slamDamage:((S=a.slam)==null?void 0:S.damage)??N.slamDamage,slamRange:((M=a.slam)==null?void 0:M.range)??N.slamRange,slamCooldown:((A=a.slam)==null?void 0:A.cooldown)??N.slamCooldown,playerKnockback:o.knockback??N.playerKnockback,hitStop:o.hitStop??N.hitStop,dodgeCooldown:o.dodgeCooldown??N.dodgeCooldown,dodgeDuration:o.dodgeDuration??N.dodgeDuration,iFrameDuration:o.iFrameDuration??N.iFrameDuration,jumpVelocity:o.jumpVelocity??N.jumpVelocity,gravity:o.gravity??N.gravity,mouseSensitivity:o.mouseSensitivity??N.mouseSensitivity,cameraDistance:c.distance??N.cameraDistance,cameraHeight:c.height??N.cameraHeight,cameraLookHeight:c.lookHeight??N.cameraLookHeight,maxEnemies:l.maxEnemies??N.maxEnemies,enemyContactCooldown:l.contactCooldown??N.enemyContactCooldown,enemyGateCooldown:l.gateContactCooldown??N.enemyGateCooldown,enemyAttackRange:l.attackRange??N.enemyAttackRange,enemyTelegraph:l.telegraph??N.enemyTelegraph,enemyBonk:l.bonk??N.enemyBonk,enemyRecover:l.recover??N.enemyRecover,corpseLifetime:d.lifetime??N.corpseLifetime,corpseBounce:d.bounce??N.corpseBounce,waveCountdown:t.waveCountdown??N.waveCountdown,scorePerKill:((P=t.scoring)==null?void 0:P.perKill)??N.scorePerKill,scorePerSecondNear:((D=t.scoring)==null?void 0:D.perSecondNear)??N.scorePerSecondNear})}function qn(i,e){var a;bi(e);const{world:t,things:n,actors:r,events:s}=e;N.arenaRadius=t.arenaRadius,N.gateSize=t.gate.size,lg(n,r,s),Om(t.obstacles.map(o=>({x:o.x,z:o.z,radius:o.radius,label:o.id,visualRadius:o.visualRadius}))),i.arena.applyWorld(t),i.player.setSpawn(t.playerSpawn),(a=i.workshop)==null||a.applyBundle(e),i.onApplied&&i.onApplied(e)}function ug(i){var n;const e=structuredClone(i.getBundle()),t=e.world;return t.arenaRadius=N.arenaRadius,t.gate={x:i.arena.gateGroup.position.x,z:i.arena.gateGroup.position.z,size:N.gateSize},t.portal={x:i.arena.portalGroup.position.x,z:i.arena.portalGroup.position.z},t.obstacles=jc().map(r=>({id:r.label??"obstacle",kind:"berm",x:r.x,z:r.z,radius:r.radius,visualRadius:r.visualRadius??r.radius+.8})),e.things=e.things??{},e.things.player={hp:N.playerHp,radius:N.playerRadius,speed:N.playerSpeed},e.things.gate={hp:N.gateHp},e.things.enemy={hp:N.enemyHp,size:N.enemySize,speed:N.enemySpeed,contactDamage:N.enemyContactDamage,gateDamage:N.enemyGateDamage,knockback:N.enemyKnockback},e.events=e.events??{},e.events.waveCountdown=N.waveCountdown,e.events.betweenWavePause=e.events.betweenWavePause??1.4,e.events.scoring={perKill:N.scorePerKill,perSecondNear:N.scorePerSecondNear,waveClearBonus:((n=e.events.scoring)==null?void 0:n.waveClearBonus)??40},e}function dg(i,e,t){var s;const n=rc(t.sky),r=rc(t.ground);ft.sky=n,ft.ground=r,i.background=new Ve(n),i.fog&&(i.fog.color.setHex(n),i.fog.near=t.fogNear,i.fog.far=t.fogFar),(s=e.ground)==null||s.material.color.setHex(r)}function hg(i){const e=new pt;e.name="Arena",i.add(e);const t=new Ze(new sr(N.arenaRadius,64),new mt({color:ft.ground}));t.rotation.x=-Math.PI/2,t.receiveShadow=!1,e.add(t);const n=new Ze(new Di(N.arenaRadius-.9,N.arenaRadius+1.4,64),new mt({color:ft.berm,side:Bt}));n.rotation.x=-Math.PI/2,n.position.y=.02,e.add(n);const r=new mt({color:ft.bermAccent}),s=[];for(let b=0;b<10;b++){const y=b/10*Math.PI*2+.2,C=new Ze(new yt(4.2,1.6,1.1),r);C.position.set(Math.cos(y)*(N.arenaRadius+.2),.8,Math.sin(y)*(N.arenaRadius+.2)),C.lookAt(0,.8,0),e.add(C),s.push(C)}const a=new pt;a.name="Obstacles",e.add(a);function o(){var b;for(;a.children.length;){const y=a.children[0];(b=y.geometry)==null||b.dispose(),a.remove(y)}for(const y of jc()){const C=new Ze(new lr(y.visualRadius??y.radius+.8,24,16,0,Math.PI*2,0,Math.PI*.5),new mt({color:12105912}));C.position.set(y.x,0,y.z),a.add(C)}}o();const c=new pt;e.add(c);const l=new Ze(new yt(3.2,.45,3.2),new mt({color:ft.gateBase}));l.position.y=.225,c.add(l);const d=new Ze(new yt(N.gateSize,N.gateSize,N.gateSize),new mt({color:ft.gate,emissive:0,emissiveIntensity:0}));d.position.y=.45+N.gateSize/2,c.add(d);const f=new pt;e.add(f);const h=new Ze(new yt(2.2,2.8,.6),new mt({color:ft.portal,emissive:ft.portalGlow,emissiveIntensity:.45}));h.position.y=1.5,f.add(h);const m=new Ze(new is(1.5,.12,8,24),new Pi({color:ft.portalGlow}));m.position.y=1.5,f.add(m);const _=new Lm(14215423,3820072,.85);i.add(_);const x=new Um(16773848,.9);x.position.set(12,22,8),i.add(x),i.background=new Ve(ft.sky),i.fog=new Ha(ft.sky,42,70);function p(b){for(let y=0;y<s.length;y++){const C=y/s.length*Math.PI*2+.2;s[y].position.set(Math.cos(C)*(b+.2),.8,Math.sin(C)*(b+.2)),s[y].lookAt(0,.8,0)}}function u(b){const y=b.arenaRadius;N.arenaRadius=y,N.gateSize=b.gate.size,t.geometry.dispose(),t.geometry=new sr(y,64),n.geometry.dispose(),n.geometry=new Di(y-.9,y+1.4,64),p(y),c.position.set(b.gate.x,0,b.gate.z),f.position.set(b.portal.x,0,b.portal.z);const C=b.gate.size;d.geometry.dispose(),d.geometry=new yt(C,C,C),d.position.y=.45+C/2,o(),dg(i,{ground:t},b.environment)}function v(b){c.visible=b,f.visible=b}return{group:e,gateGroup:c,gateMesh:d,portalGroup:f,ground:t,get portalPosition(){return f.position},get gatePosition(){return c.position},applyWorld:u,setSiegeVisible:v,clampToArena(b,y=N.playerRadius){const C=N.arenaRadius-y-.4,w=Math.hypot(b.x,b.z);if(w>C){const R=C/w;b.x*=R,b.z*=R}Aa(b,y)}}}const sc={box:()=>new yt(1,1,1),sphere:()=>new lr(.5,16,12),cylinder:()=>new jn(.5,.5,1,16)};function fg(i){const e=i.primitive??"box",t=(sc[e]??sc.box)(),n=new mt({color:new Ve(i.color??"#cccccc")}),r=new Ze(t,n);return r.name=i.id??e,r.position.set(i.x??0,i.y??0,i.z??0),r.scale.set(i.sx??1,i.sy??1,i.sz??1),r.userData.partId=i.id,r}function Jr(i){const e=new pt;e.name=i.id??"thing",e.userData.thingId=i.id;for(const t of i.parts??[])e.add(fg(t));return e}function tl(i="box"){const e={id:`${i}-${Math.random().toString(36).slice(2,7)}`,primitive:i,x:0,y:.5,z:0,sx:.5,sy:.5,sz:.5,color:"#c9a46a"};return i==="sphere"&&(e.sx=e.sy=e.sz=.4,e.y=.4),i==="cylinder"&&(e.sx=e.sz=.35,e.sy=.6,e.y=.3),e}function pg(i="New Thing"){return{id:`${i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40)||"thing"}-${Math.random().toString(36).slice(2,5)}`,name:i,kind:"equip",slot:"hand",style:"sword",parts:[tl("box")]}}function mg(i="New Actor"){return{id:`${i.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,40)||"actor"}-${Math.random().toString(36).slice(2,5)}`,name:i,role:"minion",hp:30,speed:2.4,size:1.1,color:"#6a7380",slots:{head:null,hand:null},thingIds:[]}}function Fs(i,e=[]){const t={head:null,hand:null,...i.slots??{}};for(const n of i.thingIds??[]){const r=e.find(s=>s.id===n);r&&(r.slot==="head"&&(t.head=n),r.slot==="hand"&&(t.hand=n))}return t}function ac(i={}){return[i.head,i.hand].filter(Boolean)}const nl="horde-player-loadout",Zi={color:"#8fb4d4",slots:{head:"hat-cap",hand:"weapon-sword"}};function Xr(){var i,e;try{const t=localStorage.getItem(nl);if(!t)return structuredClone(Zi);const n=JSON.parse(t);return{color:typeof n.color=="string"?n.color:Zi.color,slots:{head:((i=n.slots)==null?void 0:i.head)??Zi.slots.head,hand:((e=n.slots)==null?void 0:e.hand)??Zi.slots.hand}}}catch{return structuredClone(Zi)}}function Os(i){localStorage.setItem(nl,JSON.stringify(i))}function oc(i,e){return e?(i??[]).find(t=>t.id===e)??null:null}const Gt={x:.65,y:.9,z:-.15},Wt={x:-.55,y:.85,z:-.1},Jt=-1;function cc(i){for(;i.children.length;){const e=i.children[0];e.traverse(t=>{var n,r,s,a;(r=(n=t.geometry)==null?void 0:n.dispose)==null||r.call(n),t.material&&(Array.isArray(t.material)?t.material.forEach(o=>{var c;return(c=o.dispose)==null?void 0:c.call(o)}):(a=(s=t.material).dispose)==null||a.call(s))}),i.remove(e)}}function lc(i){const e=new Ze(new yt(.12,1.35,.06),new mt({color:ft.swordBlade}));e.position.y=.55,i.add(e);const t=new Ze(new jn(.22,.22,.08,12),new mt({color:ft.swordGuard}));t.rotation.z=Math.PI/2,i.add(t);const n=new Ze(new jn(.05,.05,.35,8),new mt({color:5913122}));n.position.y=-.18,i.add(n)}function gg(i,e=new W(0,0,-4)){const t=new pt;t.position.copy(e),i.add(t);const n=new Ze(new lr(N.playerRadius,24,18),new mt({color:ft.player,emissive:0}));n.position.y=N.playerRadius,t.add(n);const r=new pt;r.name="hatSlot",r.position.set(0,N.playerRadius*.95,0),n.add(r);const s=new pt;s.position.y=.9,t.add(s);const a=new Ze(new jn(.55,.55,.1,22),new mt({color:ft.shield,emissive:0,emissiveIntensity:0}));a.rotation.set(0,0,Math.PI/2),a.position.set(Wt.x,Wt.y-.9,Wt.z),s.add(a);const o=new pt;o.position.set(Gt.x,Gt.y-.9,Gt.z),s.add(o),lc(o);const c=1.15,l=Math.PI*.92,d=l/2,f=new pt;f.position.set(0,.12,0),s.add(f);const h=new Di(c-.14,c+.14,40,1,Math.PI/2-d,l),m=new Pi({color:ft.slash,transparent:!0,opacity:0,side:Bt,depthWrite:!1,depthTest:!1}),_=new Ze(h,m);_.rotation.x=-Math.PI/2,_.position.set(0,.12,0),_.renderOrder=20,_.frustumCulled=!1,s.add(_);const x=new Di(.4,.75,32),p=new Pi({color:ft.impact,transparent:!0,opacity:0,side:Bt,depthWrite:!1}),u=new Ze(x,p);u.rotation.x=-Math.PI/2,u.position.y=.06,t.add(u);const v={yaw:Math.PI,pitch:.12,hp:N.playerHp,vy:0,grounded:!0,blocking:!1,iFrames:0,dodgeTimer:0,hitStop:0,knockX:0,knockZ:0,anim:null,comboStep:0,comboTimer:0,cooldowns:{light:0,heavy:0,push:0,spin:0,slam:0,dodge:0},alive:!0,pendingHits:[],cameraMode:0},b=new W,y=new W,C=new W;function w(){return b.set(-Math.sin(v.yaw),0,-Math.cos(v.yaw)),b}function R(){return y.set(Math.cos(v.yaw),0,-Math.sin(v.yaw)),y}function I(){S(),a.position.set(Wt.x,Wt.y-.9,Wt.z),a.rotation.set(0,0,Math.PI/2),a.scale.set(1,1,1),s.rotation.set(0,0,0),f.rotation.set(0,0,0),n.scale.set(1,1,1)}function S(){o.parent!==s&&(f.remove(o),s.add(o)),o.position.set(Gt.x,Gt.y-.9,Gt.z),o.rotation.set(0,0,0),o.scale.set(1,1,1)}function M(){o.parent!==f&&(s.remove(o),f.add(o)),o.position.set(0,0,-.9299999999999999),o.rotation.set(-Math.PI/2,0,0),o.scale.set(1,1,1)}function A(L){v.anim={...L,t:0},v.pendingHits=(L.hits||[]).map(Y=>({...Y,fired:!1}))}function P(L){return 1-(1-L)**3}function D(L){return L*L*L}function X(L){const Y=Math.sin(performance.now()*.006)*.03;if(n.position.y=N.playerRadius+Y,t.rotation.y=v.yaw,p.opacity>0){p.opacity=Math.max(0,p.opacity-L*2.2);const ne=1+(1-p.opacity)*2.8;u.scale.set(ne,ne,ne)}if(!v.anim){m.opacity=Math.max(0,m.opacity-L*4),_.visible=m.opacity>.02,f.rotation.y=0,v.blocking?(S(),a.position.set(0,.22,1.1*Jt),a.rotation.set(Math.PI/2,0,0),a.scale.set(1.4,1.4,1.4),a.material.emissive.setHex(6986956),a.material.emissiveIntensity=.45,o.position.set(.75,-.1,.05*Jt),o.rotation.set(.4,0,.7)):(S(),a.material.emissive.setHex(0),a.material.emissiveIntensity=0,a.scale.set(1,1,1),a.position.set(Wt.x,Wt.y-.9,Wt.z),a.rotation.set(0,0,Math.PI/2),o.position.set(Gt.x,Gt.y-.9,Gt.z),o.rotation.set(0,0,0));return}v.anim.t+=L;const H=Math.min(1,v.anim.t/v.anim.dur),te=v.anim.type;if(te==="slashL"||te==="slashR"){const ne=te==="slashL",ae=Math.sin(H*Math.PI);M();const ge=ne?-d:d,Se=ne?d:-d;f.rotation.y=nr.lerp(ge,Se,P(H)),_.visible=!0,m.opacity=.35+ae*.65,_.scale.setScalar(.94+ae*.08),a.position.set(-.45,0,.1*Jt),a.rotation.set(0,0,Math.PI/2)}else if(te==="slashSpin"){const ne=H*Math.PI*2;M(),s.rotation.y=ne,f.rotation.y=0,_.visible=!0,m.opacity=.7*(1-H*.5),a.position.set(-.85,.05,.05*Jt),a.rotation.set(0,0,Math.PI/2)}else if(te==="spin"){S();const ne=N.spinRevolutions,ae=H*Math.PI*2*ne;s.rotation.y=ae,o.position.set(1.25,.05,0),o.rotation.set(0,0,-Math.PI/2),a.position.set(-1.25,.05,0),a.rotation.set(Math.PI/2,0,Math.PI/2),m.opacity=.55,_.visible=!0,n.scale.setScalar(1+Math.sin(ae*2)*.04)}else if(te==="slam"){S();const ne=N.slamWindup,ae=N.slamSlam,ge=v.anim.t;if(ge<ne){const Se=P(ge/ne);o.position.set(.25,.2+Se*1.1,.1*Jt),o.rotation.set(-1.4*Se,0,.2),a.position.set(-.25,.15+Se*1,.05*Jt),a.rotation.set(-.4*Se,0,Math.PI/2),n.scale.set(1,1+Se*.12,1)}else if(ge<ne+ae){const Se=D((ge-ne)/ae);o.position.set(.2,1.3-Se*1.5,.35*Jt),o.rotation.set(-1.4+Se*2.2,0,0),a.position.set(-.2,1.15-Se*1.35,.3*Jt),a.rotation.set(-.4+Se*1.2,0,Math.PI/2),n.scale.set(1+Se*.2,1.12-Se*.25,1+Se*.2),Se>.85&&p.opacity<.1&&(p.opacity=.95,u.scale.set(1,1,1))}else{const Se=(ge-ne-ae)/N.slamRecover;o.position.lerp(new W(Gt.x,Gt.y-.9,Gt.z),Se),a.position.lerp(new W(Wt.x,Wt.y-.9,Wt.z),Se),n.scale.setScalar(1)}m.opacity=0}else if(te==="heavy"||te==="push"){const ne=Math.sin(H*Math.PI);if(te==="push")S(),a.position.set(0,.15,(.4+ne*.9)*Jt),a.rotation.set(Math.PI/2,0,0),a.scale.set(1.3,1.3,1.3),o.position.set(.6,0,.1*Jt);else{M();const ae=-d*.55,ge=d*.65;f.rotation.y=nr.lerp(ae,ge,P(H)),_.visible=!0,m.opacity=ne*.85,a.position.set(-.4,0,.2*Jt)}}else te==="dodge"&&(n.material.transparent=!0,n.material.opacity=.4+.6*Math.abs(Math.sin(H*Math.PI*4)));if(H>=1){const ne=te==="dodge";v.anim=null,s.rotation.set(0,0,0),I(),m.opacity=0,_.visible=!1,f.rotation.y=0,ne&&(n.material.transparent=!1,n.material.opacity=1)}}function B(){if(!v.anim)return[];const L=Math.min(1,v.anim.t/v.anim.dur),Y=[];for(const H of v.pendingHits)!H.fired&&L>=H.at&&(H.fired=!0,Y.push(H));return Y}return{root:t,body:n,sword:o,shield:a,hatSlot:r,state:v,getForward:w,getRight:R,get position(){return t.position},setSpawn(L={x:0,z:-4}){t.position.set(L.x??0,t.position.y,L.z??-4)},applyLoadout(L,Y=[]){var ae,ge,Se,G;const H=(L==null?void 0:L.color)??"#8fb4d4";n.material.color.set(H),cc(r);const te=oc(Y,(ae=L==null?void 0:L.slots)==null?void 0:ae.head);if(te&&(((ge=te.parts)==null?void 0:ge.length)??0)>0){const q=Jr(te);r.add(q)}cc(o);const ne=oc(Y,(Se=L==null?void 0:L.slots)==null?void 0:Se.hand);if(ne&&(((G=ne.parts)==null?void 0:G.length)??0)>0){const q=Jr(ne);o.add(q)}else lc(o)},applyLook(L,Y){v.yaw-=L*N.mouseSensitivity,v.pitch-=Y*N.mouseSensitivity,v.pitch=nr.clamp(v.pitch,-.35,.55)},cycleCamera(){return v.cameraMode=(v.cameraMode+1)%3,v.cameraMode},tryLight(){if(!v.alive||v.dodgeTimer>0||v.cooldowns.light>0||v.anim&&(v.anim.type==="spin"||v.anim.type==="slam"))return!1;v.comboTimer<=0&&(v.comboStep=0);const L=v.comboStep%3,Y=N.comboStepDur[L];return v.cooldowns.light=N.lightCooldown,v.comboTimer=N.comboWindow,v.comboStep=L+1,L===0?A({type:"slashL",dur:Y,hits:[{kind:"arc",damage:N.lightDamage,range:N.lightRange,arc:-.1,at:.4}]}):L===1?A({type:"slashR",dur:Y,hits:[{kind:"arc",damage:N.lightDamage,range:N.lightRange,arc:-.1,at:.4}]}):(A({type:"slashSpin",dur:Y,hits:[{kind:"radius",damage:N.combo3Damage,range:N.lightRange*.95,at:.35},{kind:"radius",damage:N.combo3Damage*.6,range:N.lightRange*.95,at:.7}]}),v.comboStep=0,v.comboTimer=0),!0},tryHeavy(){return!v.alive||v.dodgeTimer>0||v.cooldowns.heavy>0||v.anim&&(v.anim.type==="spin"||v.anim.type==="slam")?!1:(v.cooldowns.heavy=N.heavyCooldown,v.comboStep=0,v.comboTimer=0,A({type:"heavy",dur:N.heavyDur,hits:[{kind:"arc",damage:N.heavyDamage,range:N.heavyRange,arc:-.15,at:.45}]}),!0)},tryPush(){return!v.alive||v.cooldowns.push>0||v.anim&&(v.anim.type==="spin"||v.anim.type==="slam")?!1:(v.cooldowns.push=N.pushCooldown,A({type:"push",dur:N.pushDur,hits:[{kind:"arc",damage:N.pushDamage,range:N.pushRange,arc:-.2,at:.35}]}),!0)},trySpin(){if(!v.alive||v.dodgeTimer>0||v.cooldowns.spin>0)return!1;v.cooldowns.spin=N.spinCooldown,v.comboStep=0,v.comboTimer=0;const L=[];for(let Y=0;Y<N.spinRevolutions;Y++)L.push({kind:"radius",damage:N.spinDamage,range:N.spinRange,at:(Y+.45)/N.spinRevolutions});return A({type:"spin",dur:N.spinDur,hits:L}),!0},trySlam(){if(!v.alive||v.dodgeTimer>0||v.cooldowns.slam>0)return!1;v.cooldowns.slam=N.slamCooldown,v.comboStep=0,v.comboTimer=0;const L=N.slamWindup+N.slamSlam+N.slamRecover,Y=N.slamWindup/L+N.slamSlam*.9/L;return A({type:"slam",dur:L,hits:[{kind:"radius",damage:N.slamDamage,range:N.slamRange,at:Y}]}),!0},tryDodge(){return!v.alive||v.cooldowns.dodge>0||v.dodgeTimer>0?!1:(v.cooldowns.dodge=N.dodgeCooldown,v.dodgeTimer=N.dodgeDuration,v.iFrames=N.iFrameDuration,A({type:"dodge",dur:N.dodgeDuration,hits:[]}),!0)},tryJump(){return!v.alive||!v.grounded?!1:(v.vy=N.jumpVelocity,v.grounded=!1,!0)},takeDamage(L,Y=0,H=0){if(!v.alive||v.iFrames>0)return 0;let te=L;v.blocking&&(te*=.28),v.hp=Math.max(0,v.hp-te),v.iFrames=v.blocking?.15:.4,v.hitStop=N.hitStop;const ne=t.position.x-Y,ae=t.position.z-H,ge=Math.hypot(ne,ae)||1,Se=v.blocking?N.playerKnockback*.35:N.playerKnockback;return v.knockX=ne/ge*Se,v.knockZ=ae/ge*Se,n.material.emissiveIntensity=.7,n.material.emissive.setHex(16720418),setTimeout(()=>{n.material.emissiveIntensity=0},90),v.hp<=0&&(v.alive=!1),te},consumeHits:B,update(L,Y,H){var ge,Se,G;if(!v.alive)return;if(v.hitStop>0){v.hitStop=Math.max(0,v.hitStop-L),v.iFrames=Math.max(0,v.iFrames-L),X(L*.2);return}for(const q of Object.keys(v.cooldowns))v.cooldowns[q]=Math.max(0,v.cooldowns[q]-L);v.iFrames=Math.max(0,v.iFrames-L),v.dodgeTimer=Math.max(0,v.dodgeTimer-L),v.comboTimer=Math.max(0,v.comboTimer-L),v.comboTimer<=0&&(v.comboStep=0),v.blocking=Y.isBlocking(),v.blocking&&v.anim&&(v.anim.type==="slashL"||v.anim.type==="slashR"||v.anim.type==="slashSpin"||v.anim.type==="heavy")&&(v.anim=null,v.pendingHits=[],s.rotation.set(0,0,0),f.rotation.set(0,0,0),I(),m.opacity=0,_.visible=!1),v.blocking&&(((ge=v.anim)==null?void 0:ge.type)==="spin"||((Se=v.anim)==null?void 0:Se.type)==="slam"||((G=v.anim)==null?void 0:G.type)==="dodge")&&(v.blocking=!1);const te=w(),ne=R();C.set(0,0,0),C.addScaledVector(ne,Y.move.x),C.addScaledVector(te,-Y.move.y),C.lengthSq()>1&&C.normalize();let ae=N.playerSpeed;v.dodgeTimer>0&&(ae*=N.dodgeSpeedMul),v.blocking&&(ae*=.55),v.anim&&(v.anim.type==="slam"||v.anim.type==="heavy"||v.anim.type==="push")&&(ae*=.35),v.anim&&v.anim.type==="spin"&&(ae*=.7),t.position.x+=C.x*ae*L+v.knockX*L,t.position.z+=C.z*ae*L+v.knockZ*L,v.knockX*=Math.max(0,1-L*8),v.knockZ*=Math.max(0,1-L*8),v.vy-=N.gravity*L,t.position.y+=v.vy*L,t.position.y<=0&&(t.position.y=0,v.vy=0,v.grounded=!0),H(t.position,N.playerRadius),X(L)},facingDir(){return w().clone()}}}function uc(i,e,t){const n=e.state.yaw,r=e.state.pitch,s=e.state.cameraMode;let a=N.cameraDistance,o=N.cameraHeight,c=N.cameraLookHeight;s===1?(a=5.2,o=3.4,c=.6):s===2&&(a=2.2,o=1.25,c=1.15);const l=new W(e.position.x,e.position.y+c,e.position.z),d=new W(Math.sin(n)*a*Math.cos(r),o+Math.sin(r)*a,Math.cos(n)*a*Math.cos(r)),f=l.clone().add(d);i.position.lerp(f,1-Math.pow(.001,t)),i.lookAt(l)}const ji=0,Bs=1,dc=2,hc=3,zn=1,fc=2;function _g(i){const e=N.maxEnemies,t=new yt(N.enemySize,N.enemySize,N.enemySize),n=new mt({color:ft.enemy}),r=new Cm(t,n,e);r.instanceMatrix.setUsage(no),r.frustumCulled=!1,r.boundingSphere=new Ni(new W(0,0,0),N.arenaRadius+2),r.count=0,i.add(r);const s=new _t,a=new Uint8Array(e),o=new Float32Array(e),c=new Float32Array(e),l=new Float32Array(e),d=new Float32Array(e),f=new Float32Array(e),h=new Float32Array(e),m=new Uint8Array(e),_=new Float32Array(e),x=new Float32Array(e),p=new Float32Array(e),u=new Float32Array(e),v=new Float32Array(e),b=new Float32Array(e),y=new Float32Array(e),C=new Float32Array(e),w=new Float32Array(e),R=new Float32Array(e),I=new Float32Array(e),S=new Float32Array(e),M=new Float32Array(e),A=new Float32Array(e),P=new Float32Array(e),D=new Float32Array(e),X=new Float32Array(e*3);r.instanceColor=new Ta(X,3),r.instanceColor.setUsage(no);const B=new Ve(ft.enemy),L=new Ve(ft.enemyHit),Y=new Ve(5903648),H=new Ve;let te=0,ne=[];for(let U=e-1;U>=0;U--)ne.push(U);function ae(){r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0}function ge(U,de){X[U*3]=de.r,X[U*3+1]=de.g,X[U*3+2]=de.b}function Se(U,de={}){const ue=de.bounce??0,fe=de.lean??0,Ue=de.stretchY??1,_e=de.stretchXZ??1,T=x[U],g=b[U];s.position.set(o[U],c[U]+ue,l[U]);const V=f[U],ee=(1+V*.22)*_e*(1+g*.35),ie=(1+V*.1)*Ue*(1-g*.45);s.scale.set(ee,Math.max(.35,ie),ee);const Q=de.wobbleRoll??0;s.rotation.set(fe+g*.4+M[U],T+A[U],Q+P[U]),s.updateMatrix(),r.setMatrixAt(U,s.matrix)}function G(U){s.position.set(0,-10,0),s.scale.setScalar(0),s.rotation.set(0,0,0),s.updateMatrix(),r.setMatrixAt(U,s.matrix),R[U]=0,I[U]=0,S[U]=0,M[U]=0,A[U]=0,P[U]=0,y[U]=0,C[U]=0,w[U]=0,D[U]=0}function q(U){a[U]=0,G(U),ne.push(U),ae()}function Z(U,de){if(ne.length===0)return-1;const ue=ne.pop();return a[ue]=zn,o[ue]=U,c[ue]=N.enemySize/2,l[ue]=de,d[ue]=N.enemyHp,f[ue]=0,h[ue]=0,m[ue]=ji,_[ue]=Math.random()*.4,x[ue]=Math.random()*Math.PI*2,p[ue]=Math.random()*Math.PI*2,u[ue]=0,v[ue]=0,b[ue]=0,y[ue]=0,C[ue]=0,w[ue]=0,R[ue]=0,I[ue]=0,S[ue]=0,M[ue]=0,A[ue]=0,P[ue]=0,D[ue]=0,ge(ue,B),Se(ue),te+=1,r.count=e,ae(),ue}function J(U,de,ue){if(a[U]!==zn)return;a[U]=fc,te-=1;let fe=o[U]-de,Ue=l[U]-ue,_e=Math.hypot(fe,Ue);_e<.01&&(fe=Math.sin(x[U]+Math.PI),Ue=Math.cos(x[U]+Math.PI),_e=1);const T=fe/_e,g=Ue/_e;y[U]=T*(4.5+Math.random()*2.5)+u[U],w[U]=g*(4.5+Math.random()*2.5)+v[U],C[U]=4.2+Math.random()*2.8,R[U]=(Math.random()-.5)*10,I[U]=(Math.random()-.5)*10,S[U]=(Math.random()-.5)*10,D[U]=N.corpseLifetime,b[U]=0,f[U]=0,u[U]=0,v[U]=0,ge(U,Y),ae()}function ce(U,de,ue){const fe=new W().subVectors(ue,de).normalize(),Ue=new W(-fe.z,0,fe.x);let _e=0,T=0;for(;_e<U;){const g=Math.min(U-_e,6+T*4),V=2.2+T*1.7;for(let ee=0;ee<g;ee++){const ie=ee/g*Math.PI*2+T*.35,Q=de.x+Math.cos(ie)*V*.65+Ue.x*Math.sin(ie)*V,we=de.z+fe.z*(1.5+T*.4)+Math.sin(ie)*V*.75,pe=N.arenaRadius-2,me=Math.hypot(Q,we),Oe=me>pe?Q/me*pe:Q,le=me>pe?we/me*pe:we;Z(Oe,le)>=0&&(_e+=1)}if(T+=1,T>40)break}return _e}function oe(){for(let U=0;U<e;U++)a[U]&&G(U),a[U]=0;te=0,ne=[];for(let U=e-1;U>=0;U--)ne.push(U);ae()}function se(U,de,ue=null,fe=null){if(a[U]!==zn)return!1;d[U]-=de,f[U]=1,b[U]=1,H.copy(B).lerp(L,.85),ge(U,H);const Ue=ue??o[U],_e=fe??l[U];let T=o[U]-Ue,g=l[U]-_e,V=Math.hypot(T,g);return V<.01&&(T=Math.sin(x[U]+Math.PI),g=Math.cos(x[U]+Math.PI),V=1),u[U]=T/V*N.enemyKnockback,v[U]=g/V*N.enemyKnockback,m[U]===Bs&&(m[U]=ji,_[U]=0),d[U]<=0?(J(U,Ue,_e),!0):!1}function Ee(U,de){D[U]-=de,C[U]-=N.gravity*de,o[U]+=y[U]*de,c[U]+=C[U]*de,l[U]+=w[U]*de,M[U]+=R[U]*de,A[U]+=I[U]*de,P[U]+=S[U]*de;const ue=N.enemySize/2;c[U]<=ue&&(c[U]=ue,C[U]<-.5?(C[U]=-C[U]*N.corpseBounce,y[U]*=.72,w[U]*=.72,R[U]*=.65,I[U]*=.65,S[U]*=.65):(C[U]=0,y[U]*=Math.max(0,1-de*2.2),w[U]*=Math.max(0,1-de*2.2)));const fe=N.arenaRadius-1,Ue=Math.hypot(o[U],l[U]);Ue>fe&&(o[U]=o[U]/Ue*fe,l[U]=l[U]/Ue*fe,y[U]*=-.35,w[U]*=-.35);const _e={x:o[U],z:l[U]};Aa(_e,N.enemySize*.5),(_e.x!==o[U]||_e.z!==l[U])&&(y[U]*=-.25,w[U]*=-.25),o[U]=_e.x,l[U]=_e.z,Se(U),D[U]<=0&&q(U)}function Ae(U,de,ue,fe,Ue){let _e=!1;const T=performance.now()*.001;for(let g=0;g<e;g++){if(a[g]===fc){Ee(g,U),_e=!0;continue}if(a[g]!==zn)continue;h[g]=Math.max(0,h[g]-U),_[g]+=U,b[g]>0&&(b[g]=Math.max(0,b[g]-U*4)),(u[g]!==0||v[g]!==0)&&(o[g]+=u[g]*U,l[g]+=v[g]*U,u[g]*=Math.max(0,1-U*7),v[g]*=Math.max(0,1-U*7),Math.abs(u[g])<.05&&(u[g]=0),Math.abs(v[g])<.05&&(v[g]=0)),f[g]>0&&(f[g]=Math.max(0,f[g]-U*3),H.copy(B).lerp(L,f[g]),ge(g,H),_e=!0);const V=ue.x-o[g],ee=ue.z-l[g],ie=Math.hypot(V,ee)||1,Q=de.x-o[g],we=de.z-l[g],pe=Math.hypot(Q,we)||1;let me=V/ie,Oe=ee/ie;if(pe<11){const Be=nr.clamp(1.15-pe/11,.25,.85);me=me*(1-Be)+Q/pe*Be,Oe=Oe*(1-Be)+we/pe*Be;const Ke=Math.hypot(me,Oe)||1;me/=Ke,Oe/=Ke}let le=0,Te=0;for(let Be=0;Be<8;Be++){const Ke=(g+1+Be*37)%e;if(a[Ke]!==zn||Ke===g)continue;const je=o[g]-o[Ke],At=l[g]-l[Ke],Ut=je*je+At*At;if(Ut<1.6&&Ut>1e-4){const Bi=1/Ut;le+=je*Bi,Te+=At*Bi}}me+=le*.15,Oe+=Te*.15;const Ne=Bm(o[g],l[g],me,Oe,N.enemySize*.5);me=Ne.dirX,Oe=Ne.dirZ;const Fe=Math.hypot(me,Oe)||1;me/=Fe,Oe/=Fe;let qe=Math.atan2(me,Oe)-x[g];for(;qe>Math.PI;)qe-=Math.PI*2;for(;qe<-Math.PI;)qe+=Math.PI*2;x[g]+=qe*Math.min(1,U*6);let ze=0,Qe=0,O=1,ve=1,j=0,re=!1;if(m[g]===ji&&(pe<N.enemyAttackRange&&h[g]<=0?(m[g]=Bs,_[g]=0):re=!0),m[g]===Bs){const Be=Math.min(1,_[g]/N.enemyTelegraph),Ke=Be*Be;Qe=.95*Ke,O=1-Ke*.22,ve=1+Ke*.28,ze=Ke*.15,x[g]=Math.atan2(Q,we),_[g]>=N.enemyTelegraph&&(m[g]=dc,_[g]=0)}else if(m[g]===dc){const Be=Math.min(1,_[g]/N.enemyBonk);Qe=.95-Be*1.7,O=.78+Be*.4,ve=1.28-Be*.35,ze=(1-Be)*.12;const Ke=7.5*(1-Be);o[g]+=Math.sin(x[g])*Ke*U,l[g]+=Math.cos(x[g])*Ke*U,Be>.35&&Be<.85&&h[g]<=0&&Math.hypot(de.x-o[g],de.z-l[g])<N.playerRadius+N.enemySize*.7&&(h[g]=N.enemyContactCooldown,fe==null||fe(g)),_[g]>=N.enemyBonk&&(m[g]=hc,_[g]=0)}else if(m[g]===hc){const Be=Math.min(1,_[g]/N.enemyRecover);Qe=nr.lerp(-.35,0,Be),O=1,ve=1,_[g]>=N.enemyRecover&&(m[g]=ji,_[g]=0,h[g]=N.enemyContactCooldown*.5)}if(re){const Be=N.enemySpeed*(.9+g%5*.04);o[g]+=me*Be*U,l[g]+=Oe*Be*U;const Ke=T*7.5+p[g];ze=Math.abs(Math.sin(Ke))*.22,O=1+Math.sin(Ke)*.12,ve=1-Math.sin(Ke)*.1,j=Math.sin(Ke*.5)*.18,Qe=Math.sin(Ke)*.08}c[g]=N.enemySize/2;const ye=N.arenaRadius-1,Me=Math.hypot(o[g],l[g]);Me>ye&&(o[g]=o[g]/Me*ye,l[g]=l[g]/Me*ye);const ke={x:o[g],z:l[g]};Aa(ke,N.enemySize*.5),o[g]=ke.x,l[g]=ke.z,Se(g,{bounce:ze,lean:Qe,stretchY:O,stretchXZ:ve,wobbleRoll:j}),_e=!0,ie<N.gateSize*.85&&h[g]<=0&&m[g]===ji&&(h[g]=N.enemyGateCooldown,Ue==null||Ue(g))}_e&&ae()}function Xe(U,de,ue,fe=.35){const Ue=[],_e=U.x,T=U.z;for(let g=0;g<e;g++){if(a[g]!==zn)continue;const V=o[g]-_e,ee=l[g]-T,ie=Math.hypot(V,ee);if(ie>ue||ie<.01)continue;const Q=V/ie,we=ee/ie;Q*de.x+we*de.z>=fe&&Ue.push({i:g,dist:ie})}return Ue.sort((g,V)=>g.dist-V.dist),Ue}function F(U,de){const ue=[];for(let fe=0;fe<e;fe++){if(a[fe]!==zn)continue;const Ue=Math.hypot(o[fe]-U.x,l[fe]-U.z);Ue<=de&&ue.push({i:fe,dist:Ue})}return ue}return{mesh:r,get aliveCount(){return te},spawnWave:ce,clear:oe,damage:se,update:Ae,queryHits:Xe,queryRadius:F,getPosition(U){return{x:o[U],y:c[U],z:l[U]}}}}function vg(i,e,t){let n=0;function r(h,m){let _=0;const x=i.position.x,p=i.position.z;for(const u of h)e.damage(u.i,m,x,p)&&(_+=1);return h.length&&(n=Math.min(.4,n+.05+h.length*.012),t==null||t.hit(),i.state.hitStop=Math.max(i.state.hitStop,N.hitStop)),_}function s(h){if(h.kind==="radius"){const x=e.queryRadius(i.position,h.range);return r(x,h.damage)}const m=i.facingDir(),_=e.queryHits(i.position,m,h.range,h.arc??-.05);return r(_,h.damage)}function a(){i.tryLight()&&(t==null||t.slash())}function o(){i.tryHeavy()&&(t==null||t.slash())}function c(){i.tryPush()&&(t==null||t.push())}function l(){i.trySpin()&&(t==null||t.spin())}function d(){i.trySlam()&&(t==null||t.slam())}function f(h){n=Math.max(0,n-h*1.8);let m=0;const _=i.consumeHits();for(const x of _)m+=s(x),x.kind==="radius"&&x.damage>=N.slamDamage*.9&&(n=Math.min(.55,n+.22),t==null||t.slam());return m}return{light:a,heavy:o,push:c,spin:l,slam:d,update:f,get shake(){return n},addShake(h){n=Math.min(.6,n+h)}}}function xg(i,e,t){const n=e??{kind:"quadratic",base:4,quadratic:3.2,linear:5,cap:300},r=n.cap??t??300;if(n.kind==="fixed")return Math.min(r,Math.floor(n.count??12));if(n.kind==="linear")return Math.min(r,Math.floor((n.base??0)+i*(n.linear??4)));if(n.kind==="table"){const a=n.counts??[12],o=Math.min(Math.max(0,i-1),a.length-1);return Math.min(r,Math.floor(a[o]))}const s=(n.base??0)+i*i*(n.quadratic??3.2)+i*(n.linear??5);return Math.min(r,Math.floor(s))}function Mg(i,e){let t=0,n="idle",r=0,s=0,a=0,o={};function c(p,u){o[p]=u}function l(p,u){var v;(v=o[p])==null||v.call(o,u)}function d(p){const u=ic();return xg(p,u.waveCount,N.maxEnemies)}function f(){return ic().betweenWavePause??1.4}function h(){t=0,a=0,i.clear(),m()}function m(){t+=1,n="countdown",r=N.waveCountdown,s=Math.ceil(r),l("countdown",{wave:t,value:s})}function _(){const p=d(t);i.spawnWave(p,e.portalPosition,e.gatePosition),n="fighting",l("fight",{wave:t,count:p})}function x(p){if(n==="countdown"){r-=p;const u=Math.max(0,Math.ceil(r));u!==s&&(s=u,l("countdown",{wave:t,value:s||"FIGHT!"})),r<=0&&_();return}if(n==="fighting"){i.aliveCount===0&&(a=t,n="between",r=f(),l("cleared",{wave:t}));return}n==="between"&&(r-=p,r<=0&&m())}return{on:c,startRun:h,update:x,spawnTestWave(p=24){i.spawnWave(p,e.portalPosition,e.gatePosition),n="fighting",l("fight",{wave:t,count:p})},clearHorde:()=>i.clear(),get wave(){return t},get phase(){return n},get wavesCleared(){return a},get countdownValue(){return s}}}function yg(){const i={hud:document.getElementById("hud"),menu:document.getElementById("menu"),gameover:document.getElementById("gameover"),setup:document.getElementById("character-setup"),studio:document.getElementById("studio-hud"),studioDomain:document.getElementById("studio-domain"),gateText:document.getElementById("gate-text"),gateFill:document.getElementById("gate-fill"),hpText:document.getElementById("hp-text"),hpFill:document.getElementById("hp-fill"),score:document.getElementById("stat-score"),wave:document.getElementById("stat-wave"),kills:document.getElementById("stat-kills"),time:document.getElementById("stat-time"),alive:document.getElementById("stat-alive"),callout:document.getElementById("wave-callout"),waveTitle:document.getElementById("wave-title"),waveCount:document.getElementById("wave-count"),hint:document.getElementById("hint"),goTitle:document.getElementById("go-title"),goFlavor:document.getElementById("go-flavor"),goScore:document.getElementById("go-score"),goKills:document.getElementById("go-kills"),goWaves:document.getElementById("go-waves"),goTime:document.getElementById("go-time"),goBest:document.getElementById("go-best")};function e(){var h,m;i.menu.classList.add("hidden"),i.gameover.classList.add("hidden"),i.hud.classList.add("hidden"),(h=i.studio)==null||h.classList.add("hidden"),(m=i.setup)==null||m.classList.add("hidden")}function t(){e(),i.menu.classList.remove("hidden")}function n(){e(),i.hud.classList.remove("hidden")}function r(){var h;e(),(h=i.setup)==null||h.classList.remove("hidden")}function s(){var h;e(),(h=i.studio)==null||h.classList.remove("hidden")}function a(h){if(!i.studioDomain)return;const m={things:"Things · craft props & gear",actors:"Actors · assemble enemies",events:"Events · chain triggers",world:"Worlds · review layouts"};i.studioDomain.textContent=h?m[h]??h:"Plaza · walk onto a domain pad",i.studioDomain.dataset.domain=h??"plaza"}function o({reason:h,score:m,kills:_,waves:x,time:p,best:u}){e(),i.gameover.classList.remove("hidden"),i.goTitle.textContent="Game Over",i.goFlavor.textContent=h==="gate"?"The gate was breached.":"You fell in battle.",i.goScore.textContent=String(Math.floor(m)),i.goKills.textContent=String(_),i.goWaves.textContent=String(x),i.goTime.textContent=`${Math.floor(p)}s`,i.goBest.textContent=String(Math.floor(u))}function c(h){const m=Math.max(0,h.gateHp/h.gateMax),_=Math.max(0,h.hp/h.hpMax);i.gateText.textContent=`${Math.ceil(h.gateHp)} / ${h.gateMax}`,i.hpText.textContent=`${Math.ceil(h.hp)} / ${h.hpMax}`,i.gateFill.style.transform=`scaleX(${m})`,i.hpFill.style.transform=`scaleX(${_})`,i.score.textContent=String(Math.floor(h.score)),i.wave.textContent=String(h.wave),i.kills.textContent=String(h.kills),i.time.textContent=Nm(h.time),i.alive.textContent=String(h.alive)}function l(h,m){i.callout.classList.remove("hidden"),i.waveTitle.textContent=`WAVE ${h}`,i.waveCount.textContent=String(m)}function d(){i.callout.classList.add("hidden")}function f(h){var m;(m=i.hint)==null||m.classList.toggle("hidden",!h)}return{showMenu:t,showHud:n,showSetup:r,showStudio:s,showGameOver:o,update:c,showCallout:l,hideCallout:d,setHintVisible:f,setStudioDomain:a,els:i}}function Sg(){let i=null,e=null;function t(){if(i)return i;const s=window.AudioContext||window.webkitAudioContext;return s?(i=new s,e=i.createGain(),e.gain.value=.22,e.connect(i.destination),i):null}function n(s,a,o="square",c=.2,l=0){const d=t();if(!d)return;d.state==="suspended"&&d.resume();const f=d.currentTime,h=d.createOscillator(),m=d.createGain();h.type=o,h.frequency.setValueAtTime(s,f),l&&h.frequency.exponentialRampToValueAtTime(Math.max(40,s+l),f+a),m.gain.setValueAtTime(c,f),m.gain.exponentialRampToValueAtTime(.001,f+a),h.connect(m),m.connect(e),h.start(f),h.stop(f+a+.02)}function r(s,a=.15,o=800){const c=t();if(!c)return;c.state==="suspended"&&c.resume();const l=c.currentTime,d=Math.floor(c.sampleRate*s),f=c.createBuffer(1,d,c.sampleRate),h=f.getChannelData(0);for(let p=0;p<d;p++)h[p]=Math.random()*2-1;const m=c.createBufferSource();m.buffer=f;const _=c.createBiquadFilter();_.type="bandpass",_.frequency.value=o,_.Q.value=.7;const x=c.createGain();x.gain.setValueAtTime(a,l),x.gain.exponentialRampToValueAtTime(.001,l+s),m.connect(_),_.connect(x),x.connect(e),m.start(l)}return{unlock(){var s,a;(a=(s=t())==null?void 0:s.resume)==null||a.call(s)},slash(){r(.08,.12,1800),n(420+Math.random()*80,.07,"sawtooth",.08,-180)},spin(){n(220,.12,"triangle",.1,120),r(.1,.1,600)},slam(){n(90,.18,"sine",.25,-40),r(.15,.2,200)},block(){n(160,.06,"square",.1),r(.05,.08,400)},push(){n(140,.1,"sawtooth",.12,-60),r(.08,.14,500)},hit(){n(300+Math.random()*40,.05,"square",.1,-100),r(.06,.12,900)},hurt(){n(180,.12,"sawtooth",.14,-80)},gateHit(){n(70,.1,"sine",.16,-20)},dodge(){n(520,.05,"sine",.06,80)}}}function Eg(){return location.pathname.includes("/admin/")?!0:new URLSearchParams(location.search).has("admin")}function ut(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function wt(i,e){const t=ut("label","admin-field");return t.append(ut("span","admin-label",i),e),t}function Qt(i,e=1,t,n){const r=ut("input");return r.type="number",r.step=String(e),r.value=String(i),t!==void 0&&(r.min=String(t)),n!==void 0&&(r.max=String(n)),r}function pc(i){const e=ut("input");return e.type="color",e.value=i.startsWith("#")?i:`#${i}`,e}function bg(i){var y;if(!Eg())return{enabled:!1};let e=!1,t="foundation";const n=ut("div","admin-studio hidden");n.innerHTML="";const r=ut("div","admin-header"),s=ut("strong","","Horde Admin Studio"),a=ut("button","admin-icon-btn","×");r.append(s,a);const o=ut("div","admin-tabs"),c=[["foundation","Foundation"],["world","World"],["things","Things"],["actors","Actors"],["events","Events"]],l={};for(const[C,w]of c){const R=ut("button","admin-tab",w);R.type="button",R.dataset.tab=C,l[C]=R,o.append(R)}const d=ut("div","admin-body"),f=ut("div","admin-footer"),h=ut("button","btn primary admin-apply","Apply to world"),m=ut("button","btn admin-export","Export JSON");f.append(h,m),n.append(r,o,d,f),(y=document.getElementById("app"))==null||y.append(n);function _(C){t=C;for(const[w,R]of Object.entries(l))R.classList.toggle("active",w===C);v()}function x(C,w){C.addEventListener("change",()=>w(Number(C.value)))}function p(C,w){C.addEventListener("input",()=>w(C.value))}function u(C,w){const R=structuredClone(at()),I=C.split(".");let S=R;for(let M=0;M<I.length-1;M++){const A=I[M];S[A]===void 0&&(S[A]=/^\d+$/.test(I[M+1])?[]:{}),S=S[A]}S[I[I.length-1]]=w,bi(jr(R))}function v(){var w,R,I,S,M,A,P,D,X,B,L,Y,H,te,ne,ae,ge,Se,G;d.replaceChildren();const C=at();if(t==="foundation"){const q=ut("select");for(const se of Object.keys(Kr)){const Ee=ut("option");Ee.value=se,Ee.textContent=se,(se===C.foundation.id||C.foundation.parentId===se)&&(Ee.selected=!0),q.append(Ee)}q.addEventListener("change",()=>{var se;bi(Xn(q.value)),qn(i,at()),(se=i.onApply)==null||se.call(i),v()}),d.append(wt("Preset",q));const Z=ut("input");Z.value=C.foundation.id,Z.addEventListener("change",()=>u("foundation.id",Z.value)),d.append(wt("Level id",Z));const J=ut("input");J.value=C.foundation.name??"",J.addEventListener("change",()=>u("foundation.name",J.value)),d.append(wt("Name",J));const ce=ut("label","admin-field"),oe=ut("input");oe.type="file",oe.accept=".json,application/json",oe.addEventListener("change",async()=>{var Ae;const se=(Ae=oe.files)==null?void 0:Ae[0];if(!se)return;const Ee=await se.text();bi(Ga(JSON.parse(Ee))),v()}),ce.append(ut("span","admin-label","Import bundle"),oe),d.append(ce)}if(t==="world"){const q=C.world,Z=Qt(q.arenaRadius,1,12,40);x(Z,U=>u("world.arenaRadius",U)),d.append(wt("Arena radius",Z));const J=Qt(q.gate.x,.5),ce=Qt(q.gate.z,.5);x(J,U=>u("world.gate.x",U)),x(ce,U=>u("world.gate.z",U)),d.append(wt("Gate X",J),wt("Gate Z",ce));const oe=Qt(q.portal.x,.5),se=Qt(q.portal.z,.5);x(oe,U=>u("world.portal.x",U)),x(se,U=>u("world.portal.z",U)),d.append(wt("Portal X",oe),wt("Portal Z",se));const Ee=(w=q.obstacles)==null?void 0:w[0];if(Ee){const U=Qt(Ee.x,.5),de=Qt(Ee.z,.5),ue=Qt(Ee.radius,.1,.5,18);x(U,fe=>u("world.obstacles.0.x",fe)),x(de,fe=>u("world.obstacles.0.z",fe)),x(ue,fe=>u("world.obstacles.0.radius",fe)),d.append(ut("p","admin-hint","West berm obstacle")),d.append(wt("Berm X",U),wt("Berm Z",de),wt("Berm radius",ue))}const Ae=q.environment??{},Xe=pc(Ae.sky??"#a9c4d8"),F=pc(Ae.ground??"#4f8a3c");p(Xe,U=>u("world.environment.sky",U)),p(F,U=>u("world.environment.ground",U)),d.append(wt("Sky",Xe),wt("Ground",F))}if(t==="things"){const q=C.things??{},Z=(J,ce,oe,se=1)=>{const Ee=Qt(oe,se);x(Ee,Ae=>u(ce,Ae)),d.append(wt(J,Ee))};Z("Player HP","things.player.hp",((R=q.player)==null?void 0:R.hp)??100),Z("Gate HP","things.gate.hp",((I=q.gate)==null?void 0:I.hp)??500),Z("Enemy HP","things.enemy.hp",((S=q.enemy)==null?void 0:S.hp)??20),Z("Enemy speed","things.enemy.speed",((M=q.enemy)==null?void 0:M.speed)??2.6,.1),Z("Light damage","things.weapons.light.damage",((P=(A=q.weapons)==null?void 0:A.light)==null?void 0:P.damage)??18),Z("Heavy damage","things.weapons.heavy.damage",((X=(D=q.weapons)==null?void 0:D.heavy)==null?void 0:X.damage)??42)}if(t==="actors"){const q=C.actors??{},Z=(J,ce,oe,se=1)=>{const Ee=Qt(oe,se);x(Ee,Ae=>u(ce,Ae)),d.append(wt(J,Ee))};Z("Max enemies","actors.horde.maxEnemies",((B=q.horde)==null?void 0:B.maxEnemies)??300,1),Z("Corpse lifetime","actors.corpse.lifetime",((L=q.corpse)==null?void 0:L.lifetime)??2.8,.1),Z("Camera distance","actors.camera.distance",((Y=q.camera)==null?void 0:Y.distance)??3.2,.1),Z("Player speed","things.player.speed",((te=(H=C.things)==null?void 0:H.player)==null?void 0:te.speed)??8.5,.1)}if(t==="events"){const q=C.events??{},Z=(oe,se,Ee,Ae=1)=>{const Xe=Qt(Ee,Ae);x(Xe,F=>u(se,F)),d.append(wt(oe,Xe))};Z("Wave countdown","events.waveCountdown",q.waveCountdown??3,.5),Z("Between-wave pause","events.betweenWavePause",q.betweenWavePause??1.4,.1),Z("Wave base","events.waveCount.base",((ne=q.waveCount)==null?void 0:ne.base)??4),Z("Wave quadratic","events.waveCount.quadratic",((ae=q.waveCount)==null?void 0:ae.quadratic)??3.2,.1),Z("Wave linear","events.waveCount.linear",((ge=q.waveCount)==null?void 0:ge.linear)??5,.1),Z("Wave cap","events.waveCount.cap",((Se=q.waveCount)==null?void 0:Se.cap)??300),Z("Score per kill","events.scoring.perKill",((G=q.scoring)==null?void 0:G.perKill)??12);const J=ut("button","btn","Spawn test wave (24)");J.type="button",J.addEventListener("click",()=>i.waves.spawnTestWave(24));const ce=ut("button","btn","Clear horde");ce.type="button",ce.addEventListener("click",()=>i.waves.clearHorde()),d.append(J,ce)}}function b(C){var w;e=C,n.classList.toggle("hidden",!e),e&&((w=document.exitPointerLock)==null||w.call(document),v())}for(const C of Object.values(l))C.addEventListener("click",()=>_(C.dataset.tab));return a.addEventListener("click",()=>b(!1)),h.addEventListener("click",()=>{var C;qn(i,at()),(C=i.onApply)==null||C.call(i)}),m.addEventListener("click",()=>{const C=Ra(ug(i)),w=new Blob([C],{type:"application/json"}),R=document.createElement("a");R.href=URL.createObjectURL(w),R.download=`${at().foundation.id}.bundle.json`,R.click(),URL.revokeObjectURL(R.href)}),window.addEventListener("keydown",C=>{C.code==="Backquote"&&!C.target.closest("input, textarea, select")&&(C.preventDefault(),b(!e))}),_("foundation"),{enabled:!0,open:()=>b(!0),close:()=>b(!1)}}const wg={things:13214826,actors:6007e3,events:14715438,world:7061370};function Br(i,e="#f2f4f8"){const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),n.fillStyle="rgba(10, 14, 22, 0.55)",n.fillRect(16,24,480,80),n.font="bold 48px Segoe UI, Trebuchet MS, sans-serif",n.fillStyle=e,n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,64);const r=new Pm(t);r.colorSpace=Dt;const s=new $c({map:r,transparent:!0,depthWrite:!1}),a=new Tm(s);return a.scale.set(6,1.5,1),a}function Tg(i){i.traverse(e=>{var t,n,r,s,a,o,c;(n=(t=e.geometry)==null?void 0:t.dispose)==null||n.call(t),e.material&&(Array.isArray(e.material)?e.material.forEach(l=>{var d;return(d=l.dispose)==null?void 0:d.call(l)}):(s=(r=e.material).dispose)==null||s.call(r)),(a=e.material)!=null&&a.map&&((c=(o=e.material.map).dispose)==null||c.call(o))})}function Ag(i){const e=new pt;e.name="StudioWorkshop",e.visible=!1,i.add(e);const t=new pt;t.name="Pads",e.add(t);const n=new pt;n.name="Previews",e.add(n);let r=[],s=null;function a(_){for(;_.children.length;){const x=_.children[0];Tg(x),_.remove(x)}}function o(_=[]){a(t),r=_.slice();for(const x of r){const p=wg[x.domain]??8947848,u=new pt;u.name=x.id,u.position.set(x.x,0,x.z);const v=new Ze(new yt(x.width,.08,x.depth),new mt({color:p,transparent:!0,opacity:.55}));v.position.y=.04,u.add(v);const b=new Ze(new yt(x.width+.3,.12,x.depth+.3),new mt({color:1712176,transparent:!0,opacity:.35}));b.position.y=.02,u.add(b);const y=Br(x.label??x.domain.toUpperCase(),"#f2f4f8");y.position.set(0,2.4,-x.depth*.42),u.add(y);const C=new Ze(new jn(1.4,1.6,.18,24),new mt({color:2765124}));C.position.y=.12,u.add(C),t.add(u)}}function c(_){return r.find(x=>x.domain===_)}function l(_){var w,R,I;if(a(n),!_)return;const x=((w=_.things)==null?void 0:w.catalog)??[],p=((R=_.actors)==null?void 0:R.catalog)??[],u=((I=_.events)==null?void 0:I.scripts)??[],v=c("things"),b=c("actors"),y=c("events"),C=c("world");v&&x.forEach((S,M)=>{const A=Jr(S),P=M%3,D=Math.floor(M/3);A.position.set(v.x+(P-1)*2.4,.35,v.z+D*2.2-1.5),n.add(A)}),b&&p.forEach((S,M)=>{const A=new pt;A.name=S.id;const P=new Ze(new yt(S.size??1.1,(S.size??1.1)*1.4,S.size??1.1),new mt({color:new Ve(S.color??"#888888")}));P.position.y=(S.size??1.1)*1.4/2,A.add(P);const D=S.slots??{},X=[D.head,D.hand,...S.thingIds??[]].filter(Boolean),B=[...new Set(X)].map(L=>x.find(Y=>Y.id===L)).filter(Boolean);for(const L of B){const Y=Jr(L);L.slot==="head"?Y.position.set(0,(S.size??1.1)*1.45,0):L.slot==="hand"?Y.position.set(.7,(S.size??1.1)*.7,.2):Y.position.set(0,.2,.9),A.add(Y)}if(S.summons){const L=Br(`summons ≤${S.summons.maxAlive}`,"#f0c14a");L.scale.set(4,1,1),L.position.set(0,(S.size??1.1)*2.1,0),A.add(L)}A.position.set(b.x+(M-(p.length-1)/2)*3.2,.2,b.z),n.add(A)}),y&&u.forEach((S,M)=>{const A=new pt,P=new Ze(new yt(3.2,.2,2.2),new mt({color:3811864}));P.position.y=.2,A.add(P);const D=Br(S.name??S.id,"#f0c14a");D.scale.set(5,1.2,1),D.position.set(0,1.6,0),A.add(D),(S.steps??[]).forEach((X,B)=>{const L=new Ze(new yt(2.6,.35,.5),new mt({color:new Ve().setHSL(.08+B*.08,.65,.45)}));L.position.set(0,.55+B*.45,0),A.add(L)}),A.position.set(y.x+(M-(u.length-1)/2)*4,.15,y.z),n.add(A)}),C&&[{label:"default",r:1.8,c:5212732},{label:"pressure",r:2.2,c:9067068},{label:"studio",r:2,c:5925714}].forEach((M,A)=>{const P=new pt,D=new Ze(new sr(M.r,32),new mt({color:M.c,side:Bt}));D.rotation.x=-Math.PI/2,D.position.y=.12,P.add(D);const X=new Ze(new is(M.r,.08,8,32),new Pi({color:15922424}));X.rotation.x=Math.PI/2,X.position.y=.14,P.add(X);const B=Br(M.label,"#f2f4f8");B.scale.set(3.5,.9,1),B.position.set(0,1.2,0),P.add(B),P.position.set(C.x+(A-1)*4.5,0,C.z),n.add(P)})}function d(_){var x;o(((x=_==null?void 0:_.world)==null?void 0:x.zones)??[]),l(_)}function f(_){e.visible=_}function h(_,x){for(const p of r){const u=p.width/2,v=p.depth/2;if(_>=p.x-u&&_<=p.x+u&&x>=p.z-v&&x<=p.z+v)return p.domain}return null}function m(_,x){const p=h(_,x);return p!==s?(s=p,p):s}return{root:e,applyBundle:d,setVisible:f,domainAt:h,updateFromPlayer:m,getActiveDomain:()=>s,rebuildPreviews:l}}const mc="horde-studio-draft";function Ce(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n}function St(i,e){const t=Ce("label","admin-field");return t.append(Ce("span","admin-label",i),e),t}function kn(i,e=.05){const t=Ce("input");return t.type="number",t.step=String(e),t.value=String(i??0),t}function xi(i,e){const t=Ce("select");for(const n of i){const r=Ce("option");r.value=n.value,r.textContent=n.label,String(n.value)===String(e??"")&&(r.selected=!0),t.append(r)}return t}function Rg(i){var A;const e=Ce("aside","studio-dock hidden"),t=Ce("div","studio-dock-header"),n=Ce("strong","","Domain Workshop"),r=Ce("span","studio-domain-pill","plaza");t.append(n,r);const s=Ce("div","studio-dock-body"),a=Ce("div","studio-dock-footer"),o=Ce("button","btn primary","Save draft"),c=Ce("button","btn","Export bundle"),l=Ce("button","btn","Leave studio");a.append(o,c,l),e.append(t,s,a),(A=document.getElementById("app"))==null||A.append(e);let d=null,f=null,h=null,m=!1;function _(){var P;return((P=at().things)==null?void 0:P.catalog)??[]}function x(){var P;return((P=at().actors)==null?void 0:P.catalog)??[]}function p(P){var X;const D=structuredClone(at());D.things=D.things??{},D.things.catalog=D.things.catalog??[],P(D.things.catalog),bi(jr(D)),(X=i.onCatalogChange)==null||X.call(i,at()),M()}function u(P){var X;const D=structuredClone(at());D.actors=D.actors??{},D.actors.catalog=D.actors.catalog??[],P(D.actors.catalog),bi(jr(D)),(X=i.onCatalogChange)==null||X.call(i,at()),M()}function v(){return _().find(P=>P.id===d)??_()[0]??null}function b(P){var D,X;return P?((D=P.parts)==null?void 0:D.find(B=>B.id===f))??((X=P.parts)==null?void 0:X[0])??null:null}function y(){return x().find(P=>P.id===h)??x()[0]??null}function C(){var J,ce;s.replaceChildren(),s.append(Ce("p","admin-hint","Author gear for player & actor slots. Hand items show up as weapons; head items as hats in Character Setup."));const P=Ce("div","studio-list");for(const oe of _()){const se=Ce("button","studio-list-item",`${oe.name} · ${oe.slot}`);oe.id===(d??((J=_()[0])==null?void 0:J.id))&&se.classList.add("active"),se.type="button",se.addEventListener("click",()=>{var Ee,Ae;d=oe.id,f=((Ae=(Ee=oe.parts)==null?void 0:Ee[0])==null?void 0:Ae.id)??null,M()}),P.append(se)}s.append(P);const D=Ce("div","studio-btn-row"),X=Ce("button","btn","+ New thing");X.type="button",X.addEventListener("click",()=>{const oe=pg("New Thing");p(se=>{se.push(oe),d=oe.id,f=oe.parts[0].id})}),D.append(X),s.append(D);const B=v();if(!B)return;const L=Ce("input");L.value=B.name,L.addEventListener("change",()=>{p(oe=>{const se=oe.find(Ee=>Ee.id===B.id);se&&(se.name=L.value)})}),s.append(St("Name",L));const Y=xi([{value:"equip",label:"equip (wearable)"},{value:"prop",label:"prop (world)"}],B.kind);Y.addEventListener("change",()=>{p(oe=>{const se=oe.find(Ee=>Ee.id===B.id);se&&(se.kind=Y.value)})}),s.append(St("Kind",Y));const H=xi([{value:"head",label:"head (hat slot)"},{value:"hand",label:"hand (weapon slot)"},{value:"world",label:"world (prop)"}],B.slot);if(H.addEventListener("change",()=>{p(oe=>{const se=oe.find(Ee=>Ee.id===B.id);se&&(se.slot=H.value,H.value==="head"&&(se.style="hat"),H.value==="hand"&&!["sword","spear","hammer"].includes(se.style)&&(se.style="sword"))})}),s.append(St("Equip slot",H)),B.slot==="hand"){const oe=xi([{value:"sword",label:"sword"},{value:"spear",label:"spear"},{value:"hammer",label:"hammer"}],B.style??"sword");oe.addEventListener("change",()=>{p(se=>{const Ee=se.find(Ae=>Ae.id===B.id);Ee&&(Ee.style=oe.value)})}),s.append(St("Weapon style",oe))}s.append(Ce("p","admin-hint","Parts"));const te=Ce("div","studio-btn-row");for(const oe of["box","sphere","cylinder"]){const se=Ce("button","btn",`+ ${oe}`);se.type="button",se.addEventListener("click",()=>{const Ee=tl(oe);p(Ae=>{const Xe=Ae.find(F=>F.id===B.id);Xe&&(Xe.parts=Xe.parts??[],Xe.parts.push(Ee),f=Ee.id)})}),te.append(se)}s.append(te);const ne=Ce("div","studio-list");for(const oe of B.parts??[]){const se=Ce("button","studio-list-item",`${oe.primitive} · ${oe.id}`);oe.id===((ce=b())==null?void 0:ce.id)&&se.classList.add("active"),se.type="button",se.addEventListener("click",()=>{f=oe.id,M()}),ne.append(se)}s.append(ne);const ae=b(B);if(!ae)return;const ge=(oe,se)=>(se.addEventListener("change",()=>{const Ee=oe==="color"?se.value:Number(se.value);p(Ae=>{var U;const Xe=Ae.find(de=>de.id===B.id),F=(U=Xe==null?void 0:Xe.parts)==null?void 0:U.find(de=>de.id===ae.id);F&&(F[oe]=Ee)})}),se);s.append(Ce("p","admin-hint",`Gizmo · ${ae.id}`)),s.append(St("X",ge("x",kn(ae.x)))),s.append(St("Y",ge("y",kn(ae.y)))),s.append(St("Z",ge("z",kn(ae.z)))),s.append(St("Scale X",ge("sx",kn(ae.sx)))),s.append(St("Scale Y",ge("sy",kn(ae.sy)))),s.append(St("Scale Z",ge("sz",kn(ae.sz))));const Se=Ce("input");Se.type="color",Se.value=(ae.color??"#cccccc").startsWith("#")?ae.color:`#${ae.color}`,ge("color",Se),s.append(St("Color",Se));const G=Ce("div","studio-btn-row"),q=[["−X","x",-.1],["+X","x",.1],["−Y","y",-.1],["+Y","y",.1],["−Z","z",-.1],["+Z","z",.1]];for(const[oe,se,Ee]of q){const Ae=Ce("button","btn studio-nudge",oe);Ae.type="button",Ae.addEventListener("click",()=>{p(Xe=>{var de;const F=Xe.find(ue=>ue.id===B.id),U=(de=F==null?void 0:F.parts)==null?void 0:de.find(ue=>ue.id===ae.id);U&&(U[se]=Number((U[se]+Ee).toFixed(3)))})}),G.append(Ae)}s.append(G);const Z=Ce("button","btn","Delete part");Z.type="button",Z.addEventListener("click",()=>{p(oe=>{var Ee;const se=oe.find(Ae=>Ae.id===B.id);se&&(se.parts=(se.parts??[]).filter(Ae=>Ae.id!==ae.id),f=((Ee=se.parts[0])==null?void 0:Ee.id)??null)})}),s.append(Z)}function w(){var q;s.replaceChildren(),s.append(Ce("p","admin-hint","Equip Things into the same head / hand slots the player uses. Mannequin updates live on the Actors pad."));const P=Ce("div","studio-list");for(const Z of x()){const J=Ce("button","studio-list-item",`${Z.name} · ${Z.role}`);Z.id===(h??((q=x()[0])==null?void 0:q.id))&&J.classList.add("active"),J.type="button",J.addEventListener("click",()=>{h=Z.id,M()}),P.append(J)}s.append(P);const D=Ce("div","studio-btn-row"),X=Ce("button","btn","+ New actor");X.type="button",X.addEventListener("click",()=>{const Z=mg("New Actor");u(J=>{J.push(Z),h=Z.id})}),D.append(X),s.append(D);const B=y();if(!B)return;const L=Ce("input");L.value=B.name,L.addEventListener("change",()=>{u(Z=>{const J=Z.find(ce=>ce.id===B.id);J&&(J.name=L.value)})}),s.append(St("Name",L));const Y=xi([{value:"minion",label:"minion"},{value:"elite",label:"elite"},{value:"boss",label:"boss"}],B.role??"minion");Y.addEventListener("change",()=>{u(Z=>{const J=Z.find(ce=>ce.id===B.id);J&&(J.role=Y.value)})}),s.append(St("Role",Y));const H=kn(B.hp??30,1);H.addEventListener("change",()=>{u(Z=>{const J=Z.find(ce=>ce.id===B.id);J&&(J.hp=Number(H.value))})}),s.append(St("HP",H));const te=Ce("input");te.type="color",te.value=(B.color??"#6a7380").startsWith("#")?B.color:`#${B.color}`,te.addEventListener("input",()=>{u(Z=>{const J=Z.find(ce=>ce.id===B.id);J&&(J.color=te.value)})}),s.append(St("Body color",te));const ne=Fs(B,_());s.append(Ce("p","admin-hint","Equipment slots"));const ae=Qc(_(),"head").map(Z=>({value:Z.id??"",label:Z.name})),ge=xi(ae,ne.head??"");ge.addEventListener("change",()=>{u(Z=>{const J=Z.find(oe=>oe.id===B.id);if(!J)return;const ce={...Fs(J,_()),head:ge.value||null};J.slots=ce,J.thingIds=ac(ce)})}),s.append(St("Hat slot",ge));const Se=[{value:"",label:"— none —"},...Va(_(),"hand").map(Z=>({value:Z.id,label:Z.name}))],G=xi(Se,ne.hand??"");G.addEventListener("change",()=>{u(Z=>{const J=Z.find(oe=>oe.id===B.id);if(!J)return;const ce={...Fs(J,_()),hand:G.value||null};J.slots=ce,J.thingIds=ac(ce)})}),s.append(St("Weapon slot",G)),B.summons&&s.append(Ce("p","admin-hint",`Summons: ${B.summons.actorId} · max ${B.summons.maxAlive} · refill ${B.summons.refill}`))}function R(){var D;s.replaceChildren(),s.append(Ce("p","admin-hint","Event scripts chain world triggers. Sample: near chest → spawn captain → summon loop while alive → unlock chest on death."));const P=((D=at().events)==null?void 0:D.scripts)??[];for(const X of P){const B=Ce("div","studio-card");B.append(Ce("strong","",X.name??X.id)),X.description&&B.append(Ce("p","",X.description));const L=Ce("ol","studio-steps");for(const Y of X.steps??[]){const H=Ce("li","",Y.id),te=Ce("code","",`${JSON.stringify(Y.when??Y.while??{})} → ${JSON.stringify(Y.then??{})}`);H.append(Ce("br"),te),L.append(H)}B.append(L),s.append(B)}}function I(){var X;s.replaceChildren(),s.append(Ce("p","admin-hint","Worlds pad reviews layout presets. Play Arena still uses combat bundles; this pad is for comparing authored worlds."));const P=((X=at().world)==null?void 0:X.zones)??[];for(const B of P){const L=Ce("div","studio-card");L.append(Ce("strong","",`${B.label} (${B.domain})`)),L.append(Ce("p","",`pad at (${B.x}, ${B.z}) · ${B.width}×${B.depth}`)),s.append(L)}const D=Ce("div","studio-card");D.append(Ce("strong","","Active foundation")),D.append(Ce("p","",`${at().foundation.name} · id ${at().foundation.id}`)),s.append(D)}function S(){s.replaceChildren(),s.append(Ce("p","admin-hint","Walk onto a domain pad. Things = craft props & gear. Actors = assemble enemies from things. Events = chain triggers. Worlds = review layouts."));const P=Ce("ol","studio-steps");P.append(Ce("li","","Author a hat / sword on the Things pad")),P.append(Ce("li","","Equip an Actor (or the player via Character Setup) with those Things")),P.append(Ce("li","","Plan the chest → captain → undead refill → loot chain on Events")),P.append(Ce("li","","Review the workshop layout on Worlds")),s.append(P)}function M(){var D;const P=((D=i.getActiveDomain)==null?void 0:D.call(i))??null;r.textContent=P??"plaza",r.dataset.domain=P??"plaza",P==="things"?C():P==="actors"?w():P==="events"?R():P==="world"?I():S()}return o.addEventListener("click",()=>{localStorage.setItem(mc,Ra(at())),o.textContent="Saved ✓",setTimeout(()=>{o.textContent="Save draft"},1200)}),c.addEventListener("click",()=>{const P=Ra(at()),D=document.createElement("a");D.href=URL.createObjectURL(new Blob([P],{type:"application/json"})),D.download=`${at().foundation.id}.bundle.json`,D.click(),URL.revokeObjectURL(D.href)}),l.addEventListener("click",()=>{var P;return(P=i.onLeave)==null?void 0:P.call(i)}),{root:e,render:M,setVisible(P){m=P,e.classList.toggle("hidden",!P),P&&M()},isVisible:()=>m,loadDraft(){const P=localStorage.getItem(mc);if(!P)return null;try{return JSON.parse(P)}catch{return null}}}}function Cg({onConfirm:i,onBack:e,onChange:t,getCatalog:n}){var p,u;const r=document.getElementById("character-setup");if(!r)return{show(){},hide(){},getLoadout:()=>Xr()};const s=r.querySelector("#setup-colors"),a=r.querySelector("#setup-hats"),o=r.querySelector("#setup-weapons"),c=r.querySelector("#setup-color-custom"),l=r.querySelector("#setup-summary");let d=Xr();function f(){return(n==null?void 0:n())??[]}function h(){Os(d),t==null||t(d,f()),m()}function m(){if(!l)return;const v=f(),b=v.find(C=>C.id===d.slots.head),y=v.find(C=>C.id===d.slots.hand);l.textContent=`${(y==null?void 0:y.name)??"Sword"} · ${(b==null?void 0:b.name)??"No Hat"} · ${d.color}`}function _(v,b,y){const C=document.createElement("button");return C.type="button",C.className=`setup-option${b?" active":""}`,C.textContent=v,C.addEventListener("click",y),C}function x(){const v=f();if(s){s.replaceChildren();for(const b of ag){const y=_(b.name,d.color.toLowerCase()===b.hex.toLowerCase(),()=>{d.color=b.hex,c&&(c.value=b.hex),h(),x()});y.style.setProperty("--swatch",b.hex),y.classList.add("setup-swatch"),s.append(y)}}if(c&&(c.value=d.color.startsWith("#")?d.color:`#${d.color}`),a){a.replaceChildren();for(const b of Qc(v,"head")){const y=b.id,C=(d.slots.head??null)===y;a.append(_(b.name,C,()=>{d.slots.head=y,h(),x()}))}}if(o){o.replaceChildren();for(const b of Va(v,"hand")){const y=d.slots.hand===b.id;o.append(_(b.name,y,()=>{d.slots.hand=b.id,h(),x()}))}}m()}return c==null||c.addEventListener("input",()=>{d.color=c.value,h(),x()}),(p=r.querySelector("#btn-enter-arena"))==null||p.addEventListener("click",()=>{Os(d),i==null||i(d,f())}),(u=r.querySelector("#btn-setup-back"))==null||u.addEventListener("click",()=>{Os(d),e==null||e()}),{show(){d=Xr(),r.classList.remove("hidden"),x(),h()},hide(){r.classList.add("hidden")},getLoadout:()=>structuredClone(d),refresh:x}}const Pg="horde-studio-draft";function gc(){var t,n;let i=[];try{const r=localStorage.getItem(Pg);if(r){const s=JSON.parse(r);i=((t=s==null?void 0:s.things)==null?void 0:t.catalog)??[]}}catch{}const e=((n=at().things)==null?void 0:n.catalog)??[];return Jc([...e,...i])}const _c="threejs-horde-best";function Lg(i){const e=new Em({canvas:i,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=Dt;const t=new bm,n=new Xt(72,window.innerWidth/window.innerHeight,.1,120),r=hg(t),s=Ag(t),a=Xn("default"),o=a.world.playerSpawn,c=gg(t,new W(o.x,0,o.z)),l=_g(t),d=Sg(),f=vg(c,l,d),h=Mg(l,r),m=Fm(i),_=yg();let x="menu",p=N.gateHp,u=0,v=0,b=0,y=Number(localStorage.getItem(_c)||0),C=0,w=performance.now(),R=!1,I=null;const S={arena:r,player:c,waves:h,swarm:l,scene:t,workshop:s,getBundle:at,onApplied:null,onApply:null};qn(S,a);function M(G=Xr()){c.applyLoadout(G,gc())}M(),S.onApply=()=>{p=Math.min(p,N.gateHp),c.state.hp=Math.min(c.state.hp,N.playerHp),M()};const A=bg({...S,onApply:S.onApply}),P=Rg({getActiveDomain:()=>s.getActiveDomain(),onCatalogChange:G=>{s.rebuildPreviews(G)},onLeave:()=>te()}),D=Cg({getCatalog:()=>gc(),onChange:(G,q)=>{c.applyLoadout(G,q)},onConfirm:()=>Y(),onBack:()=>{x="menu",D.hide(),_.showMenu()}});h.on("countdown",({wave:G,value:q})=>{_.showCallout(G,q)}),h.on("fight",()=>{_.hideCallout()}),h.on("cleared",()=>{u+=cg().waveClearBonus??40});function X(){const G=window.innerWidth,q=window.innerHeight;n.aspect=G/q,n.updateProjectionMatrix(),e.setSize(G,q)}window.addEventListener("resize",X);function B(){l.clear(),c.state.hp=N.playerHp,c.state.alive=!0,c.state.iFrames=0,c.state.vy=0;const G=at().world.playerSpawn;c.setSpawn(G),c.state.yaw=Math.PI,c.state.pitch=.12,p=N.gateHp,u=0,v=0,b=0,r.gateMesh.material.color.setHex(14431557),M(),h.startRun()}function L(){var q;d.unlock(),s.setVisible(!1),r.setSiegeVisible(!0),P.setVisible(!1),((q=at().foundation)==null?void 0:q.id)==="studio"&&qn(S,Xn("default")),l.clear();const G=at().world.playerSpawn;c.setSpawn(G),c.state.yaw=Math.PI*.15,c.state.pitch=.08,c.root.position.y=0,M(),x="setup",D.show(),_.showSetup()}function Y(){var G;d.unlock(),D.hide(),s.setVisible(!1),r.setSiegeVisible(!0),P.setVisible(!1),((G=at().foundation)==null?void 0:G.id)==="studio"&&qn(S,Xn("default")),B(),x="playing",_.showHud(),_.setHintVisible(!matchMedia("(pointer: coarse)").matches),m.requestLock()}function H(){var Z;d.unlock(),l.clear();const G=P.loadDraft(),q=((Z=G==null?void 0:G.foundation)==null?void 0:Z.id)==="studio"?Ga(G):Xn("studio");qn(S,q),s.setVisible(!0),r.setSiegeVisible(!1),c.state.hp=N.playerHp,c.state.alive=!0,c.state.vy=0,c.setSpawn(at().world.playerSpawn),c.state.yaw=0,c.state.pitch=.1,x="studio",I=null,_.showStudio(),_.setStudioDomain(null),P.setVisible(!0),m.requestLock()}function te(){var G;(G=document.exitPointerLock)==null||G.call(document),s.setVisible(!1),r.setSiegeVisible(!0),P.setVisible(!1),A.enabled&&A.close(),qn(S,Xn("default")),M(),l.clear(),x="menu",_.showMenu(),l.spawnWave(18,r.portalPosition,r.gatePosition)}function ne(G){var q;x==="playing"&&(x="gameover",(q=document.exitPointerLock)==null||q.call(document),y=Math.max(y,u),localStorage.setItem(_c,String(Math.floor(y))),_.showGameOver({reason:G,score:u,kills:v,waves:h.wavesCleared,time:b,best:y}))}function ae(){m.consumeAction("light")&&f.light(),m.consumeAction("push")&&f.push(),m.consumeAction("heavy")&&f.heavy(),m.consumeAction("spin")&&f.spin(),m.consumeAction("slam")&&f.slam(),m.consumeAction("dodge")&&c.tryDodge()&&d.dodge(),m.consumeAction("jump")&&c.tryJump(),m.consumeAction("camera")&&c.cycleCamera();const G=m.isBlocking();G&&!R&&d.block(),R=G}function ge(G){C=requestAnimationFrame(ge);const q=Math.min(.05,(G-w)/1e3);if(w=G,x==="playing"){const{dx:Z,dy:J}=m.consumeMouseDelta();c.applyLook(Z,J),ae(),c.update(q,m,r.clampToArena);const ce=f.update(q);ce>0&&(v+=ce,u+=ce*N.scorePerKill),h.update(q),l.update(q,c.position,r.gatePosition,se=>{const Ee=l.getPosition(se);c.takeDamage(N.enemyContactDamage,Ee.x,Ee.z)>0&&(d.hurt(),f.addShake(.12),u+=1),c.state.alive||ne("player")},()=>{p=Math.max(0,p-N.enemyGateDamage),r.gateMesh.material.emissive.setHex(16729156),r.gateMesh.material.emissiveIntensity=.85,d.gateHit(),f.addShake(.08),p<=0&&ne("gate")}),r.gateMesh.material.emissiveIntensity=Math.max(0,r.gateMesh.material.emissiveIntensity-q*2.5),h.phase==="fighting"&&(l.aliveCount>0&&(u+=N.scorePerSecondNear*q),b+=q),uc(n,c,q),f.shake>0&&(n.position.x+=(Math.random()-.5)*f.shake,n.position.y+=(Math.random()-.5)*f.shake*.6),_.update({gateHp:p,gateMax:N.gateHp,hp:c.state.hp,hpMax:N.playerHp,score:u,wave:h.wave,kills:v,time:b,alive:l.aliveCount});const oe=p/N.gateHp;r.gateMesh.material.color.setRGB(.86*(.4+.6*oe),.21*oe,.27*oe)}else if(x==="studio"){const{dx:Z,dy:J}=m.consumeMouseDelta();c.applyLook(Z,J),m.consumeAction("jump")&&c.tryJump(),m.consumeAction("camera")&&c.cycleCamera(),c.update(q,m,r.clampToArena),uc(n,c,q);const ce=s.updateFromPlayer(c.position.x,c.position.z);ce!==I&&(I=ce,_.setStudioDomain(ce),P.isVisible()&&P.render())}else if(x==="setup"){c.state.yaw+=q*.55,c.root.rotation.y=c.state.yaw;const Z=c.position.clone();Z.y+=1.05,n.position.set(Z.x+3.4,2.2,Z.z+3.8),n.lookAt(Z)}else{l.update(q*.35,c.position,r.gatePosition);const Z=G*25e-5;n.position.set(Math.sin(Z)*14,8,Math.cos(Z)*14),n.lookAt(0,1,-8)}e.render(t,n)}function Se(){var G,q,Z,J,ce;(G=document.getElementById("btn-play"))==null||G.addEventListener("click",()=>L()),(q=document.getElementById("btn-studio"))==null||q.addEventListener("click",()=>H()),(Z=document.getElementById("btn-retry"))==null||Z.addEventListener("click",()=>Y()),(J=document.getElementById("btn-menu"))==null||J.addEventListener("click",()=>{x="menu",D.hide(),l.clear(),_.showMenu()}),(ce=document.getElementById("btn-studio-leave"))==null||ce.addEventListener("click",()=>te()),window.addEventListener("keydown",oe=>{var se;oe.code==="Escape"&&((se=document.exitPointerLock)==null||se.call(document),_.setHintVisible(!0),x==="studio"&&P.setVisible(!0))})}return Se(),_.showMenu(),l.spawnWave(18,r.portalPosition,r.gatePosition),C=requestAnimationFrame(ge),globalThis.__horde={player:c,admin:A,dock:P,workshop:s,characterSetup:D,getBundle:at,startStudio:H,openSetup:L,isBlocking:()=>c.state.blocking,shieldPos:()=>({...c.shield.position})},{start:Y,openSetup:L,startStudio:H,admin:A,dispose(){cancelAnimationFrame(C),m.dispose(),window.removeEventListener("resize",X),e.dispose()}}}const Dg=`
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="31" fill="#111"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="#f8f4f3" stroke-width="3"/>
    <circle cx="32" cy="32" r="14" fill="none" stroke="#f8f4f3" stroke-width="2" opacity="0.55"/>
  </svg>
`;function Ig(i="sm"){return`
    <div class="sg-coin${i==="lg"?" sg-coin--lg":""}" aria-hidden="true">
      <div class="sg-coin__scene">
        <div class="sg-coin__spin">
          <div class="sg-coin__face sg-coin__face--front">
            <img src="/admin/horde-three/assets/logo.svg" alt="" width="64" height="64" decoding="async" />
          </div>
          <div class="sg-coin__face sg-coin__face--back">${Dg}</div>
        </div>
      </div>
    </div>
  `}function Ug(){document.querySelectorAll("[data-sg-coin]").forEach(i=>{const e=i.dataset.sgCoin==="lg"?"lg":"sm";i.innerHTML=Ig(e)})}Ug();const Ng=document.getElementById("game");Lg(Ng);
