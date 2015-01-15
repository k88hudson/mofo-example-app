!function t(e,r,n){function i(o,a){if(!r[o]){if(!e[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=r[o]={exports:{}};e[o][0].call(u.exports,function(t){var r=e[o][1][t];return i(r?r:t)},u,u.exports,t,e,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)i(n[o]);return i}({1:[function(t){var e=window.React,r=t("./components/Gallery.jsx"),n=t("../settings");e.render(e.createElement(r,{settings:n}),document.getElementById("gallery-app"))},{"../settings":11,"./components/Gallery.jsx":5}],2:[function(t,e){function r(){}function n(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function i(){if(y.XMLHttpRequest&&("file:"!=y.location.protocol||!y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1}function s(t){return t===Object(t)}function o(t){if(!s(t))return t;var e=[];for(var r in t)null!=t[r]&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}function a(t){for(var e,r,n={},i=t.split("&"),s=0,o=i.length;o>s;++s)r=i[s],e=r.split("="),n[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return n}function l(t){var e,r,n,i,s=t.split(/\r?\n/),o={};s.pop();for(var a=0,l=s.length;l>a;++a)r=s[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),i=g(r.slice(e+1)),o[n]=i;return o}function c(t){return t.split(/ *; */).shift()}function u(t){return m(t.split(/ *; */),function(t,e){var r=e.split(/ *= */),n=r.shift(),i=r.shift();return n&&i&&(t[n]=i),t},{})}function h(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method?this.xhr.responseText:null,this.setStatusProperties(this.xhr.status),this.header=this.headers=l(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text):null}function p(t,e){var r=this;f.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new h(r)}catch(n){t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=n}r.callback(t,e)})}function d(t,e){return"function"==typeof e?new p("GET",t).end(e):1==arguments.length?new p("GET",t):new p(t,e)}var f=t("emitter"),m=t("reduce"),y="undefined"==typeof window?this:window,g="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};d.serializeObject=o,d.parseString=a,d.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},d.serialize={"application/x-www-form-urlencoded":o,"application/json":JSON.stringify},d.parse={"application/x-www-form-urlencoded":a,"application/json":JSON.parse},h.prototype.get=function(t){return this.header[t.toLowerCase()]},h.prototype.setHeaderProperties=function(){var t=this.header["content-type"]||"";this.type=c(t);var e=u(t);for(var r in e)this[r]=e[r]},h.prototype.parseBody=function(t){var e=d.parse[this.type];return e&&t&&t.length?e(t):null},h.prototype.setStatusProperties=function(t){var e=t/100|0;this.status=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t||1223==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},h.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",i=new Error(n);return i.status=this.status,i.method=e,i.url=r,i},d.Response=h,f(p.prototype),p.prototype.use=function(t){return t(this),this},p.prototype.timeout=function(t){return this._timeout=t,this},p.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},p.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},p.prototype.set=function(t,e){if(s(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},p.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},p.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},p.prototype.type=function(t){return this.set("Content-Type",d.types[t]||t),this},p.prototype.accept=function(t){return this.set("Accept",d.types[t]||t),this},p.prototype.auth=function(t,e){var r=btoa(t+":"+e);return this.set("Authorization","Basic "+r),this},p.prototype.query=function(t){return"string"!=typeof t&&(t=o(t)),t&&this._query.push(t),this},p.prototype.field=function(t,e){return this._formData||(this._formData=new FormData),this._formData.append(t,e),this},p.prototype.attach=function(t,e,r){return this._formData||(this._formData=new FormData),this._formData.append(t,e,r),this},p.prototype.send=function(t){var e=s(t),r=this.getHeader("Content-Type");if(e&&s(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this.getHeader("Content-Type"),this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return e?(r||this.type("json"),this):this},p.prototype.callback=function(t,e){var r=this._callback;return this.clearTimeout(),2==r.length?r(t,e):t?this.emit("error",t):void r(e)},p.prototype.crossDomainError=function(){var t=new Error("Origin is not allowed by Access-Control-Allow-Origin");t.crossDomain=!0,this.callback(t)},p.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},p.prototype.withCredentials=function(){return this._withCredentials=!0,this},p.prototype.end=function(t){var e=this,s=this.xhr=i(),o=this._query.join("&"),a=this._timeout,l=this._formData||this._data;if(this._callback=t||r,s.onreadystatechange=function(){return 4==s.readyState?0==s.status?e.aborted?e.timeoutError():e.crossDomainError():void e.emit("end"):void 0},s.upload&&(s.upload.onprogress=function(t){t.percent=t.loaded/t.total*100,e.emit("progress",t)}),a&&!this._timer&&(this._timer=setTimeout(function(){e.abort()},a)),o&&(o=d.serializeObject(o),this.url+=~this.url.indexOf("?")?"&"+o:"?"+o),s.open(this.method,this.url,!0),this._withCredentials&&(s.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof l&&!n(l)){var c=d.serialize[this.getHeader("Content-Type")];c&&(l=c(l))}for(var u in this.header)null!=this.header[u]&&s.setRequestHeader(u,this.header[u]);return this.emit("request",this),s.send(l),this},d.Request=p,d.get=function(t,e,r){var n=d("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},d.head=function(t,e,r){var n=d("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},d.del=function(t,e){var r=d("DELETE",t);return e&&r.end(e),r},d.patch=function(t,e,r){var n=d("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},d.post=function(t,e,r){var n=d("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},d.put=function(t,e,r){var n=d("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},e.exports=d},{emitter:3,reduce:4}],3:[function(t,e){function r(t){return t?n(t):void 0}function n(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,i=0;i<r.length;i++)if(n=r[i],n===e||n.fn===e){r.splice(i,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,i=r.length;i>n;++n)r[n].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],4:[function(t,e){e.exports=function(t,e,r){for(var n=0,i=t.length,s=3==arguments.length?r:t[n++];i>n;)s=e.call(null,s,t[n],++n,t);return s}},{}],5:[function(t,e){var r=window.React,n=t("./webmaker-login-ux/WebmakerLoginUX.jsx"),i=t("./gallery/MakeGallery.jsx"),s=r.createClass({displayName:"Gallery",render:function(){return r.createElement("div",null,r.createElement(n,null),r.createElement(i,{apiserver:this.props.settings.apiserver,editor:this.props.settings.editor}))}});e.exports=s},{"./gallery/MakeGallery.jsx":7,"./webmaker-login-ux/WebmakerLoginUX.jsx":9}],6:[function(t,e){var r=window.React,n=t("../../mixins/I18N.jsx"),i=r.createClass({displayName:"Make",mixins:[n],getInitialState:function(){return{strings:{name:"Name",author:"By",likes:"Likes",published:"Published",view:"Click to open make"}}},render:function(){var t=this.localizeDate(this.props.created);return r.createElement("div",{className:"make component"},r.createElement("div",null,r.createElement("span",{className:"label"},this.state.strings.name),": ",this.props.name),r.createElement("div",null,r.createElement("span",{className:"label"},this.state.strings.author),": ",this.props.author),r.createElement("div",null,r.createElement("span",{className:"label"},this.state.strings.likes),": ",this.props.likes),r.createElement("div",null,r.createElement("span",{className:"label"},this.state.strings.published),": ",t),r.createElement("a",{href:this.props.editor+"/?make="+this.props.id},this.state.strings.view))}});e.exports=i},{"../../mixins/I18N.jsx":10}],7:[function(t,e){var r=window.React,n=t("./Make.jsx"),i=t("superagent"),s=r.createClass({displayName:"MakeGallery",getInitialState:function(){return{makes:[]}},componentDidMount:function(){i.get(this.props.apiserver+"/api/1.0/findAll").end(this.handleMakes)},handleMakes:function(t,e){e=JSON.parse(e.text),this.setState({makes:e.makes})},render:function(){return r.createElement("div",{className:"make-gallery component"},this.buildMakes())},buildMakes:function(){var t=this.props.editor;return this.state.makes.map(function(e){return r.createElement(n,r.__spread({},e,{key:e.id,editor:t}))})}});e.exports=s},{"./Make.jsx":6,superagent:2}],8:[function(t,e){var r=window.React,n=r.createClass({displayName:"LogoType",render:function(){return r.createElement("div",{className:"logo component"},r.createElement("img",{src:"images/logo.png"}),r.createElement("span",{className:"logotype"},"mozilla "+this.props.product))}});e.exports=n},{}],9:[function(t,e){var r=window.React,n=t("./LogoType.jsx"),i=t("../../mixins/I18N.jsx"),s=r.createClass({displayName:"WebmakerLoginUX",mixins:[i],getInitialState:function(){return{strings:{join:"Join Webmaker",signIn:"Sign in",signOut:"Sign out"}}},render:function(){var t="btn btn-primary";return r.createElement("div",{className:"webmaker-login-ux component"},r.createElement(n,{product:"example app"}),r.createElement("span",{className:"controls"},r.createElement("button",{className:t,onClick:this.joinWebmaker},this.state.strings.join),r.createElement("button",{className:t,onClick:this.signIn},this.state.strings.signIn),r.createElement("button",{className:t,onClick:this.signOut},this.state.strings.signOut)))},joinWebmaker:function(){},signIn:function(){},signOut:function(){}});e.exports=s},{"../../mixins/I18N.jsx":10,"./LogoType.jsx":8}],10:[function(t,e){var r={setLocale:function(){},localize:function(t){return t.split("").reverse().join("")},localizeAll:function(t){var e={};return Object.keys(t).forEach(function(n){e[n]=r.localize(t[n])}),e}};e.exports={localizeDate:function(t){var e=new Date(t);return e.toLocaleString()},componentDidMount:function(){var t=navigator.language;r.setLocale(t);var e=this.state.strings,n=r.localizeAll(e);this.setState({locale:t,strings:n})}}},{}],11:[function(t,e){e.exports={apiserver:"http://localhost:55555",gallery:"http://localhost:55555/gallery",editor:"http://localhost:55555/editor",cdn:"http://localhost:55555/cdn"}},{}]},{},[1]);