(()=>{var __webpack_modules__={923:(module,__unused_webpack_exports,__webpack_require__)=>{var{Eta}=__webpack_require__(761),eta=new Eta({}),__data__={lang:"en"},etaFn=function(it){let include=(e,t)=>this.render(e,t,options),includeAsync=(e,t)=>this.renderAsync(e,t,options),__eta={res:"",e:this.config.escapeFunction,f:this.config.filterFunction};function layout(e,t){__eta.layout=e,__eta.layoutData=t}with(it||{}){__eta.res+="<h1>Hello ",__eta.res+=__eta.e(name),__eta.res+='!</h1>\n<div>Local data from JS: title = "',__eta.res+=__eta.e(title),__eta.res+='"</div>\n<div>Query param: lang = "',__eta.res+=__eta.e(lang),__eta.res+='"</div>\n<p>People:</p>\n<ul class="people">\n  ';for(let i=0;i<people.length;i++)__eta.res+="  <li>",__eta.res+=__eta.e(people[i]),__eta.res+="</li>\n  ";__eta.res+="</ul>\n",__eta.res+=__webpack_require__(899)({...it}),__eta.res+=__webpack_require__(899)({...it,nested:{name:"Armageddon"},title:"Included data",lang:"de"}),__eta.layout&&(__eta.res=include(__eta.layout,{...it,body:__eta.res,...__eta.layoutData}))}return __eta.res},templateFn=e=>etaFn.bind(eta)(Object.assign(__data__,e));module.exports=templateFn},899:(module,__unused_webpack_exports,__webpack_require__)=>{var{Eta}=__webpack_require__(761),eta=new Eta({}),__data__={},etaFn=function(it){let include=(e,t)=>this.render(e,t,options),includeAsync=(e,t)=>this.renderAsync(e,t,options),__eta={res:"",e:this.config.escapeFunction,f:this.config.filterFunction};function layout(e,t){__eta.layout=e,__eta.layoutData=t}with(it||{})__eta.res+='<div class="star">++ Included partial ++</div>\n<div>passed variable: nested.name = "',__eta.res+=__eta.e(nested.name),__eta.res+='"</div>\n<div>passed global variable: title = "',__eta.res+=__eta.e(title),__eta.res+='"</div>\n<div>passed query variable: lang = "',__eta.res+=__eta.e(lang),__eta.res+='"</div>\n<img src="'+__webpack_require__(598)+'">',__eta.layout&&(__eta.res=include(__eta.layout,{...it,body:__eta.res,...__eta.layoutData}));return __eta.res},templateFn=e=>etaFn.bind(eta)(Object.assign(__data__,e));module.exports=templateFn},598:(e,t,n)=>{"use strict";e.exports=n.p+"img/stern.6adb226f.svg"},761:(e,t,n)=>{"use strict";function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.r(t),n.d(t,{Eta:()=>A});class i{constructor(e){this.cache=void 0,this.cache=e}define(e,t){this.cache[e]=t}get(e){return this.cache[e]}remove(e){delete this.cache[e]}reset(){this.cache={}}load(e){this.cache=a({},this.cache,e)}}class r extends Error{constructor(e){super(e),this.name="Eta Error"}}function s(e,t,n){const a=t.slice(0,n).split(/\n/),i=a.length,s=a[i-1].length+1;throw e+=" at line "+i+" col "+s+":\n\n  "+t.split(/\n/)[i-1]+"\n  "+Array(s).join(" ")+"^",new r(e)}function c(e,t,n,a){const i=t.split("\n"),s=Math.max(n-3,0),c=Math.min(i.length,n+3),_=a,l=i.slice(s,c).map((function(e,t){const a=t+s+1;return(a==n?" >> ":"    ")+a+"| "+e})).join("\n"),o=new r((_?_+":"+n+"\n":"line "+n+"\n")+l+"\n\n"+e.message);throw o.name=e.name,o}const _=async function(){}.constructor;function l(e,t){const n=this.config,a=t&&t.async?_:Function;try{return new a(n.varName,"options",this.compileToString.call(this,e,t))}catch(n){throw n instanceof SyntaxError?new r("Bad template syntax\n\n"+n.message+"\n"+Array(n.message.length+1).join("=")+"\n"+this.compileToString.call(this,e,t)+"\n"):n}}function o(e,t){const n=this.config,a=t&&t.async,i=this.compileBody,r=this.parse.call(this,e);let s=`${n.functionHeader}\nlet include = (template, data) => this.render(template, data, options);\nlet includeAsync = (template, data) => this.renderAsync(template, data, options);\n\nlet __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction${n.debug?', line: 1, templateStr: "'+e.replace(/\\|"/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n")+'"':""}};\n\nfunction layout(path, data) {\n  __eta.layout = path;\n  __eta.layoutData = data;\n}${n.debug?"try {":""}${n.useWith?"with("+n.varName+"||{}){":""}\n\n${i.call(this,r)}\nif (__eta.layout) {\n  __eta.res = ${a?"await includeAsync":"include"} (__eta.layout, {...${n.varName}, body: __eta.res, ...__eta.layoutData});\n}\n${n.useWith?"}":""}${n.debug?"} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }":""}\nreturn __eta.res;\n`;if(n.plugins)for(let e=0;e<n.plugins.length;e++){const t=n.plugins[e];t.processFnString&&(s=t.processFnString(s,n))}return s}function u(e){const t=this.config;let n=0;const a=e.length;let i="";for(;n<a;n++){const a=e[n];if("string"==typeof a)i+="__eta.res+='"+a+"'\n";else{const e=a.t;let n=a.val||"";t.debug&&(i+="__eta.line="+a.lineNo+"\n"),"r"===e?(t.autoFilter&&(n="__eta.f("+n+")"),i+="__eta.res+="+n+"\n"):"i"===e?(t.autoFilter&&(n="__eta.f("+n+")"),t.autoEscape&&(n="__eta.e("+n+")"),i+="__eta.res+="+n+"\n"):"e"===e&&(i+=n+"\n")}}return i}const p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function d(e){return p[e]}const h={autoEscape:!0,autoFilter:!1,autoTrim:[!1,"nl"],cache:!1,cacheFilepaths:!0,debug:!1,escapeFunction:function(e){const t=String(e);return/[&<>"']/.test(t)?t.replace(/[&<>"']/g,d):t},filterFunction:e=>String(e),functionHeader:"",parse:{exec:"",interpolate:"=",raw:"~"},plugins:[],rmWhitespace:!1,tags:["<%","%>"],useWith:!1,varName:"it"},g=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,f=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,m=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;function y(e){return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function b(e,t){return e.slice(0,t).split("\n").length}function w(e){const t=this.config;let n=[],a=!1,i=0;const r=t.parse;if(t.plugins)for(let n=0;n<t.plugins.length;n++){const a=t.plugins[n];a.processTemplate&&(e=a.processTemplate(e,t))}function c(e,i){e&&(e=function(e,t,n,a){let i,r;return Array.isArray(t.autoTrim)?(i=t.autoTrim[1],r=t.autoTrim[0]):i=r=t.autoTrim,(n||!1===n)&&(i=n),(a||!1===a)&&(r=a),r||i?"slurp"===i&&"slurp"===r?e.trim():("_"===i||"slurp"===i?e=e.trimStart():"-"!==i&&"nl"!==i||(e=e.replace(/^(?:\r\n|\n|\r)/,"")),"_"===r||"slurp"===r?e=e.trimEnd():"-"!==r&&"nl"!==r||(e=e.replace(/(?:\r\n|\n|\r)$/,"")),e):e}(e,t,a,i),e&&(e=e.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),n.push(e)))}t.rmWhitespace&&(e=e.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),g.lastIndex=0,f.lastIndex=0,m.lastIndex=0;const _=[r.exec,r.interpolate,r.raw].reduce((function(e,t){return e&&t?e+"|"+y(t):t?y(t):e}),""),l=new RegExp(y(t.tags[0])+"(-|_)?\\s*("+_+")?\\s*","g"),o=new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?"+y(t.tags[1])+")","g");let u;for(;u=l.exec(e);){const _=e.slice(i,u.index);i=u[0].length+u.index;const p=u[2]||"";let d;c(_,u[1]),o.lastIndex=i;let h=!1;for(;d=o.exec(e);){if(d[1]){const t=e.slice(i,d.index);l.lastIndex=i=o.lastIndex,a=d[2],h={t:p===r.exec?"e":p===r.raw?"r":p===r.interpolate?"i":"",val:t};break}{const t=d[0];if("/*"===t){const t=e.indexOf("*/",o.lastIndex);-1===t&&s("unclosed comment",e,d.index),o.lastIndex=t}else"'"===t?(f.lastIndex=d.index,f.exec(e)?o.lastIndex=f.lastIndex:s("unclosed string",e,d.index)):'"'===t?(m.lastIndex=d.index,m.exec(e)?o.lastIndex=m.lastIndex:s("unclosed string",e,d.index)):"`"===t&&(g.lastIndex=d.index,g.exec(e)?o.lastIndex=g.lastIndex:s("unclosed string",e,d.index))}}h?(t.debug&&(h.lineNo=b(e,u.index)),n.push(h)):s("unclosed tag",e,u.index)}if(c(e.slice(i,e.length),!1),t.plugins)for(let e=0;e<t.plugins.length;e++){const a=t.plugins[e];a.processAST&&(n=a.processAST(n,t))}return n}function x(e,t){const n=t&&t.async?this.templatesAsync:this.templatesSync;if(this.resolvePath&&this.readFile&&!e.startsWith("@")){const e=t.filepath,a=n.get(e);if(this.config.cache&&a)return a;{const a=this.readFile(e),i=this.compile(a,t);return this.config.cache&&n.define(e,i),i}}{const t=n.get(e);if(t)return t;throw new r("Failed to get template '"+e+"'")}}function v(e,t,n){let i;const r=a({},n,{async:!1});return"string"==typeof e?(this.resolvePath&&this.readFile&&!e.startsWith("@")&&(r.filepath=this.resolvePath(e,r)),i=x.call(this,e,r)):i=e,i.call(this,t,r)}function k(e,t,n){let i;const r=a({},n,{async:!0});"string"==typeof e?(this.resolvePath&&this.readFile&&!e.startsWith("@")&&(r.filepath=this.resolvePath(e,r)),i=x.call(this,e,r)):i=e;const s=i.call(this,t,r);return Promise.resolve(s)}function F(e,t){const n=this.compile(e,{async:!1});return v.call(this,n,t)}function S(e,t){const n=this.compile(e,{async:!0});return k.call(this,n,t)}class q{constructor(e){this.config=void 0,this.RuntimeErr=c,this.compile=l,this.compileToString=o,this.compileBody=u,this.parse=w,this.render=v,this.renderAsync=k,this.renderString=F,this.renderStringAsync=S,this.filepathCache={},this.templatesSync=new i({}),this.templatesAsync=new i({}),this.resolvePath=null,this.readFile=null,this.config=e?a({},h,e):a({},h)}configure(e){this.config=a({},this.config,e)}withConfig(e){return a({},this,{config:a({},this.config,e)})}loadTemplate(e,t,n){if("string"==typeof t)(n&&n.async?this.templatesAsync:this.templatesSync).define(e,this.compile(t,n));else{let a=this.templatesSync;("AsyncFunction"===t.constructor.name||n&&n.async)&&(a=this.templatesAsync),a.define(e,t)}}}class A extends q{}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__={};(()=>{"use strict";var e=__webpack_require__(923);const t=__webpack_require__.n(e)()({title:"My Title",name:"World",people:["Alexa <Amazon>","Cortana <MS>","Siri <Apple>"],nested:{name:"Eta"}});document.getElementById("main").innerHTML=t,console.log(">> app")})()})();