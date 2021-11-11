/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes-load
 */
 ;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/** jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ **/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});




/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var n in t){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,u,c=this.waypoints[n][s],d=c.options.offset,f=c.triggerPoint,w=0,y=null==f;c.element!==c.element.window&&(w=c.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(c):"string"==typeof d&&(d=parseFloat(d),c.options.offset.indexOf("%")>-1&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=w+a-d,l=f<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=l&&h,u=!l&&!h,!y&&p?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!y&&u?(c.queueTrigger(r.forward),o[c.group.id]=c.group):y&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}for(var g in o)o[g].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();


/*!
 * Stellar.js v0.6.2
 * http://markdalgleish.com/projects/stellar.js
 *
 * Copyright 2014, Mark Dalgleish
 * This content is released under the MIT license
 * http://markdalgleish.mit-license.org
 */

;(function(e,t,n,r){function d(t,n){this.element=t;this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="stellar",s={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:true,verticalScrolling:true,horizontalOffset:0,verticalOffset:0,responsive:true,parallaxBackgrounds:true,parallaxElements:true,hideDistantElements:true,hideElement:function(e){e.hide()},showElement:function(e){e.show()}},o={scroll:{getLeft:function(e){return e.scrollLeft()},setLeft:function(e,t){e.scrollLeft(t)},getTop:function(e){return e.scrollTop()},setTop:function(e,t){e.scrollTop(t)}},position:{getLeft:function(e){return parseInt(e.css("left"),10)*-1},getTop:function(e){return parseInt(e.css("top"),10)*-1}},margin:{getLeft:function(e){return parseInt(e.css("margin-left"),10)*-1},getTop:function(e){return parseInt(e.css("margin-top"),10)*-1}},transform:{getLeft:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[4],10)*-1:0},getTop:function(e){var t=getComputedStyle(e[0])[f];return t!=="none"?parseInt(t.match(/(-?[0-9]+)/g)[5],10)*-1:0}}},u={position:{setLeft:function(e,t){e.css("left",t)},setTop:function(e,t){e.css("top",t)}},transform:{setPosition:function(e,t,n,r,i){e[0].style[f]="translate3d("+(t-n)+"px, "+(r-i)+"px, 0)"}}},a=function(){var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,n=e("script")[0].style,r="",i;for(i in n){if(t.test(i)){r=i.match(t)[0];break}}if("WebkitOpacity"in n){r="Webkit"}if("KhtmlOpacity"in n){r="Khtml"}return function(e){return r+(r.length>0?e.charAt(0).toUpperCase()+e.slice(1):e)}}(),f=a("transform"),l=e("<div />",{style:"background:#fff"}).css("background-position-x")!==r,c=l?function(e,t,n){e.css({"background-position-x":t,"background-position-y":n})}:function(e,t,n){e.css("background-position",t+" "+n)},h=l?function(e){return[e.css("background-position-x"),e.css("background-position-y")]}:function(e){return e.css("background-position").split(" ")},p=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)};d.prototype={init:function(){this.options.name=i+"_"+Math.floor(Math.random()*1e9);this._defineElements();this._defineGetters();this._defineSetters();this._handleWindowLoadAndResize();this._detectViewport();this.refresh({firstLoad:true});if(this.options.scrollProperty==="scroll"){this._handleScrollEvent()}else{this._startAnimationLoop()}},_defineElements:function(){if(this.element===n.body)this.element=t;this.$scrollElement=e(this.element);this.$element=this.element===t?e("body"):this.$scrollElement;this.$viewportElement=this.options.viewportElement!==r?e(this.options.viewportElement):this.$scrollElement[0]===t||this.options.scrollProperty==="scroll"?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var e=this,t=o[e.options.scrollProperty];this._getScrollLeft=function(){return t.getLeft(e.$scrollElement)};this._getScrollTop=function(){return t.getTop(e.$scrollElement)}},_defineSetters:function(){var t=this,n=o[t.options.scrollProperty],r=u[t.options.positionProperty],i=n.setLeft,s=n.setTop;this._setScrollLeft=typeof i==="function"?function(e){i(t.$scrollElement,e)}:e.noop;this._setScrollTop=typeof s==="function"?function(e){s(t.$scrollElement,e)}:e.noop;this._setPosition=r.setPosition||function(e,n,i,s,o){if(t.options.horizontalScrolling){r.setLeft(e,n,i)}if(t.options.verticalScrolling){r.setTop(e,s,o)}}},_handleWindowLoadAndResize:function(){var n=this,r=e(t);if(n.options.responsive){r.bind("load."+this.name,function(){n.refresh()})}r.bind("resize."+this.name,function(){n._detectViewport();if(n.options.responsive){n.refresh()}})},refresh:function(n){var r=this,i=r._getScrollLeft(),s=r._getScrollTop();if(!n||!n.firstLoad){this._reset()}this._setScrollLeft(0);this._setScrollTop(0);this._setOffsets();this._findParticles();this._findBackgrounds();if(n&&n.firstLoad&&/WebKit/.test(navigator.userAgent)){e(t).load(function(){var e=r._getScrollLeft(),t=r._getScrollTop();r._setScrollLeft(e+1);r._setScrollTop(t+1);r._setScrollLeft(e);r._setScrollTop(t)})}this._setScrollLeft(i);this._setScrollTop(s)},_detectViewport:function(){var e=this.$viewportElement.offset(),t=e!==null&&e!==r;this.viewportWidth=this.$viewportElement.width();this.viewportHeight=this.$viewportElement.height();this.viewportOffsetTop=t?e.top:0;this.viewportOffsetLeft=t?e.left:0},_findParticles:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop();if(this.particles!==r){for(var s=this.particles.length-1;s>=0;s--){this.particles[s].$element.data("stellar-elementIsActive",r)}}this.particles=[];if(!this.options.parallaxElements)return;this.$element.find("[data-stellar-ratio]").each(function(n){var i=e(this),s,o,u,a,f,l,c,h,p,d=0,v=0,m=0,g=0;if(!i.data("stellar-elementIsActive")){i.data("stellar-elementIsActive",this)}else if(i.data("stellar-elementIsActive")!==this){return}t.options.showElement(i);if(!i.data("stellar-startingLeft")){i.data("stellar-startingLeft",i.css("left"));i.data("stellar-startingTop",i.css("top"))}else{i.css("left",i.data("stellar-startingLeft"));i.css("top",i.data("stellar-startingTop"))}u=i.position().left;a=i.position().top;f=i.css("margin-left")==="auto"?0:parseInt(i.css("margin-left"),10);l=i.css("margin-top")==="auto"?0:parseInt(i.css("margin-top"),10);h=i.offset().left-f;p=i.offset().top-l;i.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===true){d=m;v=g;c=t;return false}else{m+=t.position().left;g+=t.position().top}});s=i.data("stellar-horizontal-offset")!==r?i.data("stellar-horizontal-offset"):c!==r&&c.data("stellar-horizontal-offset")!==r?c.data("stellar-horizontal-offset"):t.horizontalOffset;o=i.data("stellar-vertical-offset")!==r?i.data("stellar-vertical-offset"):c!==r&&c.data("stellar-vertical-offset")!==r?c.data("stellar-vertical-offset"):t.verticalOffset;t.particles.push({$element:i,$offsetParent:c,isFixed:i.css("position")==="fixed",horizontalOffset:s,verticalOffset:o,startingPositionLeft:u,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:v,stellarRatio:i.data("stellar-ratio")!==r?i.data("stellar-ratio"):1,width:i.outerWidth(true),height:i.outerHeight(true),isHidden:false})})},_findBackgrounds:function(){var t=this,n=this._getScrollLeft(),i=this._getScrollTop(),s;this.backgrounds=[];if(!this.options.parallaxBackgrounds)return;s=this.$element.find("[data-stellar-background-ratio]");if(this.$element.data("stellar-background-ratio")){s=s.add(this.$element)}s.each(function(){var s=e(this),o=h(s),u,a,f,l,p,d,v,m,g,y=0,b=0,w=0,E=0;if(!s.data("stellar-backgroundIsActive")){s.data("stellar-backgroundIsActive",this)}else if(s.data("stellar-backgroundIsActive")!==this){return}if(!s.data("stellar-backgroundStartingLeft")){s.data("stellar-backgroundStartingLeft",o[0]);s.data("stellar-backgroundStartingTop",o[1])}else{c(s,s.data("stellar-backgroundStartingLeft"),s.data("stellar-backgroundStartingTop"))}p=s.css("margin-left")==="auto"?0:parseInt(s.css("margin-left"),10);d=s.css("margin-top")==="auto"?0:parseInt(s.css("margin-top"),10);v=s.offset().left-p-n;m=s.offset().top-d-i;s.parents().each(function(){var t=e(this);if(t.data("stellar-offset-parent")===true){y=w;b=E;g=t;return false}else{w+=t.position().left;E+=t.position().top}});u=s.data("stellar-horizontal-offset")!==r?s.data("stellar-horizontal-offset"):g!==r&&g.data("stellar-horizontal-offset")!==r?g.data("stellar-horizontal-offset"):t.horizontalOffset;a=s.data("stellar-vertical-offset")!==r?s.data("stellar-vertical-offset"):g!==r&&g.data("stellar-vertical-offset")!==r?g.data("stellar-vertical-offset"):t.verticalOffset;t.backgrounds.push({$element:s,$offsetParent:g,isFixed:s.css("background-attachment")==="fixed",horizontalOffset:u,verticalOffset:a,startingValueLeft:o[0],startingValueTop:o[1],startingBackgroundPositionLeft:isNaN(parseInt(o[0],10))?0:parseInt(o[0],10),startingBackgroundPositionTop:isNaN(parseInt(o[1],10))?0:parseInt(o[1],10),startingPositionLeft:s.position().left,startingPositionTop:s.position().top,startingOffsetLeft:v,startingOffsetTop:m,parentOffsetLeft:y,parentOffsetTop:b,stellarRatio:s.data("stellar-background-ratio")===r?1:s.data("stellar-background-ratio")})})},_reset:function(){var e,t,n,r,i;for(i=this.particles.length-1;i>=0;i--){e=this.particles[i];t=e.$element.data("stellar-startingLeft");n=e.$element.data("stellar-startingTop");this._setPosition(e.$element,t,t,n,n);this.options.showElement(e.$element);e.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null)}for(i=this.backgrounds.length-1;i>=0;i--){r=this.backgrounds[i];r.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null);c(r.$element,r.startingValueLeft,r.startingValueTop)}},destroy:function(){this._reset();this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name);this._animationLoop=e.noop;e(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var n=this,r=e(t);r.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name);if(typeof this.options.horizontalOffset==="function"){this.horizontalOffset=this.options.horizontalOffset();r.bind("resize.horizontal-"+this.name,function(){n.horizontalOffset=n.options.horizontalOffset()})}else{this.horizontalOffset=this.options.horizontalOffset}if(typeof this.options.verticalOffset==="function"){this.verticalOffset=this.options.verticalOffset();r.bind("resize.vertical-"+this.name,function(){n.verticalOffset=n.options.verticalOffset()})}else{this.verticalOffset=this.options.verticalOffset}},_repositionElements:function(){var e=this._getScrollLeft(),t=this._getScrollTop(),n,r,i,s,o,u,a,f=true,l=true,h,p,d,v,m;if(this.currentScrollLeft===e&&this.currentScrollTop===t&&this.currentWidth===this.viewportWidth&&this.currentHeight===this.viewportHeight){return}else{this.currentScrollLeft=e;this.currentScrollTop=t;this.currentWidth=this.viewportWidth;this.currentHeight=this.viewportHeight}for(m=this.particles.length-1;m>=0;m--){i=this.particles[m];s=i.isFixed?1:0;if(this.options.horizontalScrolling){h=(e+i.horizontalOffset+this.viewportOffsetLeft+i.startingPositionLeft-i.startingOffsetLeft+i.parentOffsetLeft)*-(i.stellarRatio+s-1)+i.startingPositionLeft;d=h-i.startingPositionLeft+i.startingOffsetLeft}else{h=i.startingPositionLeft;d=i.startingOffsetLeft}if(this.options.verticalScrolling){p=(t+i.verticalOffset+this.viewportOffsetTop+i.startingPositionTop-i.startingOffsetTop+i.parentOffsetTop)*-(i.stellarRatio+s-1)+i.startingPositionTop;v=p-i.startingPositionTop+i.startingOffsetTop}else{p=i.startingPositionTop;v=i.startingOffsetTop}if(this.options.hideDistantElements){l=!this.options.horizontalScrolling||d+i.width>(i.isFixed?0:e)&&d<(i.isFixed?0:e)+this.viewportWidth+this.viewportOffsetLeft;f=!this.options.verticalScrolling||v+i.height>(i.isFixed?0:t)&&v<(i.isFixed?0:t)+this.viewportHeight+this.viewportOffsetTop}if(l&&f){if(i.isHidden){this.options.showElement(i.$element);i.isHidden=false}this._setPosition(i.$element,h,i.startingPositionLeft,p,i.startingPositionTop)}else{if(!i.isHidden){this.options.hideElement(i.$element);i.isHidden=true}}}for(m=this.backgrounds.length-1;m>=0;m--){o=this.backgrounds[m];s=o.isFixed?0:1;u=this.options.horizontalScrolling?(e+o.horizontalOffset-this.viewportOffsetLeft-o.startingOffsetLeft+o.parentOffsetLeft-o.startingBackgroundPositionLeft)*(s-o.stellarRatio)+"px":o.startingValueLeft;a=this.options.verticalScrolling?(t+o.verticalOffset-this.viewportOffsetTop-o.startingOffsetTop+o.parentOffsetTop-o.startingBackgroundPositionTop)*(s-o.stellarRatio)+"px":o.startingValueTop;c(o.$element,u,a)}},_handleScrollEvent:function(){var e=this,t=false;var n=function(){e._repositionElements();t=false};var r=function(){if(!t){p(n);t=true}};this.$scrollElement.bind("scroll."+this.name,r);r()},_startAnimationLoop:function(){var e=this;this._animationLoop=function(){p(e._animationLoop);e._repositionElements()};this._animationLoop()}};e.fn[i]=function(t){var n=arguments;if(t===r||typeof t==="object"){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new d(this,t))}})}else if(typeof t==="string"&&t[0]!=="_"&&t!=="init"){return this.each(function(){var r=e.data(this,"plugin_"+i);if(r instanceof d&&typeof r[t]==="function"){r[t].apply(r,Array.prototype.slice.call(n,1))}if(t==="destroy"){e.data(this,"plugin_"+i,null)}})}};e[i]=function(n){var r=e(t);return r.stellar.apply(r,Array.prototype.slice.call(arguments,0))};e[i].scrollProperty=o;e[i].positionProperty=u;t.Stellar=d})(jQuery,this,document);


/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);void 0===a.rtl&&"rtl"==$("html").attr("dir")&&(a.rtl=!0),n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,r=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,s=("ontouchstart"in window||r||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":n.vars.rtl?"marginRight":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=n.vars.rtl?37===t?n.getTarget("next"):39===t&&n.getTarget("prev"):39===t?n.getTarget("next"):37===t&&n.getTarget("prev");n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var r=t<0?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(r,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),s&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),r?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),r;r=n.vars.rtl?-1*(t.offset().right-$(n).scrollLeft()):t.offset().left-$(n).scrollLeft(),r<=0&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,r;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var s=0;s<n.pagingCount;s++){if(r=n.slides.eq(s),void 0===r.attr("data-thumb-alt")&&r.attr("data-thumb-alt",""),a=$("<a></a>").attr("href","#").text(t),"thumbnails"===n.vars.controlNav&&(a=$("<img/>").attr("src",r.attr("data-thumb"))),""!==r.attr("data-thumb-alt")&&a.attr("alt",r.attr("data-thumb-alt")),"thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=r.attr("data-thumbcaption");if(""!==c&&void 0!==c){var d=$("<span></span>").addClass(i+"caption").text(c);a.append(d)}}var u=$("<li>");a.appendTo(u),u.append("</li>"),n.controlNavScaffold.append(u),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;""!==l&&l!==e.type||(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),""!==l&&l!==e.type||($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),w=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;if(w+=d?i:n,m=(a.vars.rtl?-1:1)*w,x=d?Math.abs(w)<Math.abs(-n):Math.abs(w)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA)return void setImmediate(function(){t._gesture.stop()});(!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=w/(0===a.currentSlide&&w<0||a.currentSlide===a.last&&w>0?Math.abs(w)/c+2:1)),a.setProps(l+m,"setTouch")))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}s=null,o=null,m=null,l=null,w=0}}var s,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,w=0;r?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,s=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?s-b:(n.vars.rtl?-1:1)*(s-y),x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),s=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).innerHeight()},e):t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause();break}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return!!e&&document[e]},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,r,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&r){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)s?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return!!t||(!(!m||n.currentItem!==n.count-1||0!==e||"prev"!==n.direction)||(!m||0!==n.currentItem||e!==n.pagingCount-1||"next"===n.direction)&&(!(e===n.currentSlide&&!m)&&(!!n.vars.animationLoop||(!n.atEnd||0!==n.currentSlide||e!==a||"next"===n.direction)&&(!n.atEnd||n.currentSlide!==a||0!==e||"next"!==n.direction))))},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e||(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo;return function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}()*(n.vars.rtl?1:-1)+"px"}();n.transitions&&(i=n.isFirefox?d?"translate3d(0,"+i+",0)":"translate3d("+parseInt(i)+"px,0,0)":d?"translate3d(0,"+i+",0)":"translate3d("+(n.vars.rtl?-1:1)*parseInt(i)+"px,0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.vars.rtl?n.slides.css({width:"100%",float:"right",marginLeft:"-100%",position:"relative"}):n.slides.css({width:"100%",float:"left",marginRight:"-100%",position:"relative"}),"init"===e&&(s?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.vars.rtl&&n.isFirefox?n.newSlides.css({width:n.computedW,marginRight:n.computedM,float:"right",display:"block"}):n.newSlides.css({width:n.computedW,marginRight:n.computedM,float:"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.isFirefox&&(n.w=n.width()),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"",nextText:"",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,isFirefox:!1,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){},rtl:!1},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&!1===e.allowOneSlide||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);


/** Isotope Extended http://isotope.metafizzy.co/ */
;(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);



/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});


/* sliding-graphs */
function isScrolledIntoView(e){var t="#"+e;var n=$(window).scrollTop();var r=n+$(window).height();if($(t).length>0){var i=$(t).offset().top;var s=i+$(t).height()}return s>=n&&i<=r&&s<=r&&i>=n}function sliding_horizontal_graph(e,t){$("#"+e+" li span").each(function(n){var r=n+1;var i=$("#"+e+" li:nth-child("+r+") span");var s=i.attr("title");i.animate({width:s+"%"},t)})}function graph_init(e,t){$(window).scroll(function(){if(isScrolledIntoView(e)){sliding_horizontal_graph(e,t)}else{}});if(isScrolledIntoView(e)){sliding_horizontal_graph(e,t)}}function htmlDecode(e){var t=$("<div/>").html(e).text();return t}function playpause(e){if(e.hasClass("playing")){$("#slider_container").cameraResume();e.removeClass("playing").addClass("paused")}else{$("#slider_container").cameraPause();e.removeClass("paused").addClass("playing")}}



/* Plugin: QueryLoader2 http://www.gayadesign.com */
/*
 * QueryLoader2 - A simple script to create a preloader for images
 *
 * For instructions read the original post:
 * http://www.gayadesign.com/diy/queryloader2-preload-your-images-with-ease/
 *
 * Copyright (c) 2011 - Gaya Kessler
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version: 3.2.2
 * Last update: 2016-06-28

 *
 */
!function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return r(n?n:e)},c,c.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){"use strict";var i=e("./ImageLoaded.js"),r={create:function(){this.element=document.createElement("img"),this.src&&this.src!="none"?this.element.setAttribute("src",this.src):this.element.setAttribute("src","")},preload:function(e){i(this.element,function(t,n){e(t,n)})}};t.exports=function(e){var t=Object.create(r);return t.src=e,t.element=null,"undefined"!=typeof e&&t.create(),t}},{"./ImageLoaded.js":2}],2:[function(e,t,n){"use strict";function i(e,t){function n(e,t,n,i){e.addEventListener?e[n?"addEventListener":"removeEventListener"](t,i):e[n?"attachEvent":"detachEvent"]("on"+t,i)}function i(){n(e,"load",!1,i),n(e,"error",!1,i),t(null,!1)}var o;return e.nodeName?"img"!==e.nodeName.toLowerCase()?t(new Error("Element supplied is not an image")):e.src&&e.complete&&void 0!==e.naturalWidth?t(null,!0):(n(e,"load",!0,i),n(e,"error",!0,i),void((e.readyState||e.complete)&&(o=e.src,e.src=r,e.src=o))):t(new Error("First argument must be an image element"))}var r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.exports=i},{}],3:[function(e,t,n){"use strict";var i=e("./Image.js"),r={getImageSrcs:function(e){if(this.sources=[],"undefined"!=typeof e&&(this.findImageInElement(e),this.deepSearch===!0))for(var t=e.querySelectorAll("*"),n=0;n<t.length;n++)"SCRIPT"!==t[n].tagName&&this.findImageInElement(t[n]);return this.sources.length||this.sources.push("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),this.sources},findAndPreload:function(e){if("undefined"!=typeof e){this.sources=this.getImageSrcs(e);for(var t=0;t<this.sources.length;t++){var n=i(this.sources[t]);n.preload(this.imageLoaded.bind(this)),this.images.push(n)}}},imageLoaded:function(){this.loaded++,this.updateProgress()},updateProgress:function(){this.parent.updateProgress(this.loaded,this.sources.length)},findImageInElement:function(e){var t=this.determineUrlAndType(e);if(!this.hasGradient(t.url)){t.url=this.stripUrl(t.url);for(var n=t.url.split(", "),i=0;i<n.length;i++)if(this.validUrl(n[i])&&this.urlIsNew(n[i])){var r="";(this.isIE()||this.isOpera())&&(r="?rand="+Math.random()),this.sources.push(n[i]+r)}}},determineUrlAndType:function(e){var t="",n="normal",i=e.currentStyle||window.getComputedStyle(e,null);return"undefined"!=typeof i.backgroundImage&&""!==i.backgroundImage&&"none"!==i.backgroundImage||"undefined"!=typeof e.style.backgroundImage&&""!==e.style.backgroundImage&&"none"!==e.style.backgroundImage?(t=i.backgroundImage||e.style.backgroundImage,n="background"):"img"===e.nodeName.toLowerCase()&&(t=e.src),{url:t,type:n}},hasGradient:function(e){return e&&"undefined"!=typeof e.indexOf?-1!==e.indexOf("gradient("):!1},stripUrl:function(e){return e=e.replace(/url\(\'/g,""),e=e.replace(/url\(/g,""),e=e.replace(/\'\)/g,""),e=e.replace(/\)/g,""),e=e.replace(/"/g,"")},validUrl:function(e){return e.length>0&&!e.match(/^(data:)/i)},urlIsNew:function(e){return-1===this.sources.indexOf(e)},isIE:function(){return navigator.userAgent.match(/msie/i)},isOpera:function(){return navigator.userAgent.match(/Opera/i)}};t.exports=function(e){var t=Object.create(r);return t.parent=e,t.sources=[],t.images=[],t.loaded=0,t.deepSearch=!0,t}},{"./Image.js":1}],4:[function(e,t,n){"use strict";var i=e("./PercentageParser"),r={create:function(){this.element=document.createElement("div"),this.element.setAttribute("class",this.className),this.setStyling(),this.updateProgress(0,0)},setStyling:function(){this.element.style.height=this.barHeight+"px",this.element.style.marginTop="-"+this.barHeight/2+"px",this.element.style.backgroundColor=this.barColor,this.element.style.position="absolute",this.element.style.top="50%",this.setTransitionTime(100)},updateProgress:function(e,t){0!==t&&this.setTransitionTime(t),e=i(e),this.element.style.width=e+"%"},setTransitionTime:function(e){this.element.style.WebkitTransition="width "+e+"ms",this.element.style.MozTransition="width "+e+"ms",this.element.style.OTransition="width "+e+"ms",this.element.style.MsTransition="width "+e+"ms",this.element.style.Transition="width "+e+"ms"}};t.exports=function(){var e=Object.create(r);return e.element=null,e.className="queryloader__overlay__bar",e.barHeight=1,e.barColor="#fff",e}},{"./PercentageParser":6}],5:[function(e,t,n){"use strict";var i=e("./PercentageParser"),r={create:function(){this.element=document.createElement("div"),this.element.setAttribute("class",this.className),this.element.setAttribute("id",this.idName),this.applyStyling(),this.updateProgress(0,0)},applyStyling:function(){this.element.style.height="40px",this.element.style.width="100%",this.element.style.position="absolute",this.element.style.fontSize="3em",this.element.style.top="50%",this.element.style.left="0",this.element.style.marginTop="-"+(59+this.barHeight)+"px",this.element.style.textAlign="center",this.element.style.color=this.barColor},updateProgress:function(e,t){e=i(e),this.element.innerHTML=e+"%"}};t.exports=function(){var e=Object.create(r);return e.element=null,e.idName="qlPercentage",e.className="queryloader__overlay__percentage",e.barHeight=1,e.barColor="#fff",e}},{"./PercentageParser":6}],6:[function(e,t,n){"use strict";function i(e){return parseInt(e)<0?0:parseInt(e)>100?100:parseInt(e)}t.exports=i},{}],7:[function(e,t,n){"use strict";var i=e("./LoadingBar"),r=e("./Percentage"),o={init:function(){this.create(),this.loadingBar=i(),this.loadingBar.barHeight=this.barHeight,this.loadingBar.barColor=this.barColor,this.loadingBar.create(),this.element.appendChild(this.loadingBar.element),this.showPercentage&&(this.percentage=r(),this.percentage.barColor=this.barColor,this.percentage.idName=this.percentageId,this.percentage.create(),this.element.appendChild(this.percentage.element)),this.parentElement.appendChild(this.element)},create:function(){this.element=document.querySelector("#"+this.idName)||document.createElement("div"),this.element.setAttribute("class",this.className),this.element.setAttribute("id",this.idName),this.applyStyling()},applyStyling:function(){this.element.style.position=this.calculatePosition(),this.element.style.width="100%",this.element.style.height="100%",this.element.style.backgroundColor=this.backgroundColor,this.element.style.backgroundPosition="fixed",this.element.style.zIndex=666999,this.element.style.top="0",this.element.style.left="0",this.element.style.WebkitTransition="opacity "+this.fadeOutTime+"ms",this.element.style.MozTransition="opacity "+this.fadeOutTime+"ms",this.element.style.OTransition="opacity "+this.fadeOutTime+"ms",this.element.style.MsTransition="opacity "+this.fadeOutTime+"ms",this.element.style.Transition="opacity "+this.fadeOutTime+"ms"},calculatePosition:function(){var e="absolute";return"body"?e="fixed":"fixed"===this.parentElement.style.position&&"absolute"===this.parentElement.style.position||(this.parentElement.style.position="relative"),e},updateProgress:function(e,t){jQuery("#hazel_website_load .percentage").text(Math.ceil(e)+"%"),null!==this.loadingBar&&this.loadingBar.updateProgress(e,t),null!==this.percentage&&this.percentage.updateProgress(e,t)},remove:function(){this.canRemove(this.element)&&this.element.parentNode.removeChild(this.element)},canRemove:function(e){return e.parentNode&&"undefined"!=typeof e.parentNode.removeChild}};t.exports=function(e){var t=Object.create(o);return t.parentElement=e,t.idName="qLoverlay",t.percentageId="qlPercentage",t.className="queryloader__overlay",t.element=null,t.loadingBar=null,t.percentage=null,t.barColor="#ff0000",t.backgroundColor="#000",t.barHeight=1,t.fadeOutTime=300,t.showPercentage=!1,t}},{"./LoadingBar":4,"./Percentage":5}],8:[function(e,t,n){Function.prototype.bind||(Function.prototype.bind=function(e){"use strict";if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,i=function(){},r=function(){return n.apply(this instanceof i&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return i.prototype=this.prototype,r.prototype=new i,r}),"function"!=typeof Object.create&&(Object.create=function(){function e(){}var t=Object.prototype.hasOwnProperty;return function(n){if("object"!=typeof n)throw TypeError("Object prototype may only be an Object or null");e.prototype=n;var i=new e;if(e.prototype=null,arguments.length>1){var r=Object(arguments[1]);for(var o in r)t.call(r,o)&&(i[o]=r[o])}return i}}())},{}],9:[function(e,t,n){"use strict";t.exports=function(){var e=window.setInterval(function(){if("undefined"!=typeof document.getElementsByTagName("body")[0]){var t=document.createElement("div");t.style.position="fixed",t.style.width="0",t.style.height="0",t.style.zIndex="-1",t.style.backgroundColor="#000",t.style.left="0",t.style.top="0",t.setAttribute("id","qLtempOverlay"),document.getElementsByTagName("body")[0].appendChild(t),window.clearInterval(e)}},1)}},{}],10:[function(e,t,n){"use strict";var i=e("./../ImagePreloader"),r=e("./../Overlay"),o={init:function(e,t){this.options=this.extend(t,e),"undefined"!=typeof this.element&&(this.createOverlay(),this.removeTempOverlay(),this.createPreloader(),this.startMaxTimeout())},extend:function(e,t){"undefined"==typeof e&&(e={});for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},startMaxTimeout:function(){this.maxTimeout=window.setTimeout(this.doneLoading.bind(this),this.options.maxTime)},createOverlay:function(){this.overlay=r(this.element),this.overlay.idName=this.options.overlayId,this.overlay.percentageId=this.options.percentageId,this.overlay.backgroundColor=this.options.backgroundColor,this.overlay.barHeight=this.options.barHeight,this.overlay.barColor=this.options.barColor,this.overlay.showPercentage=this.options.percentage,this.overlay.fadeOutTime=this.options.fadeOutTime,"undefined"!=typeof this.element&&this.overlay.init()},removeTempOverlay:function(){window.setTimeout(function(){var e=document.getElementById("qLtempOverlay");e&&e.parentNode&&e.parentNode.removeChild(e)},0)},createPreloader:function(){this.preloader=i(this),this.preloader.deepSearch=this.options.deepSearch,window.setTimeout(function(){this.preloader.findAndPreload(this.element)}.bind(this),100)},updateProgress:function(e,t){var n=e/t*100;this.overlay.updateProgress(n,this.options.minimumTime),"function"==typeof this.options.onProgress&&this.options.onProgress(n,e,t),e===t&&this.done===!1&&(window.clearTimeout(this.maxTimeout),window.setTimeout(this.doneLoading.bind(this),this.options.minimumTime))},doneLoading:function(){window.clearTimeout(this.maxTimeout),this.done=!0,this.overlay.element.style.opacity=0,window.setTimeout(this.destroy.bind(this),this.options.fadeOutTime)},destroy:function(){this.overlay.remove(),this.options.onComplete()}};t.exports=function(e,t){var n=Object.create(o);if(n.element=e,n.options={},n.done=!1,n.maxTimeout=null,n.overlay=null,n.preloader=null,null!==e){var i=function(){};n.init(t,{onComplete:i,onProgress:i,backgroundColor:"#000",barColor:"#fff",overlayId:"qLoverlay",percentageId:"qLpercentage",barHeight:1,percentage:!1,deepSearch:!0,minimumTime:300,maxTime:1e4,fadeOutTime:1e3})}return n}},{"./../ImagePreloader":3,"./../Overlay":7}],11:[function(e,t,n){e("./Polyfills");var i=e("./QueryLoader"),r=e("./QueryLoader/TempOverlay");(window.jQuery||window.Zepto)&&!function(e){"use strict";e.fn.queryLoader2=function(e){return this.each(function(){i(this,e)})}}(window.jQuery||window.Zepto),"undefined"!=typeof t&&(t.exports=i),"function"==typeof define&&define.amd&&define([],function(){"use strict";return i}),window.QueryLoader2=i,r()},{"./Polyfills":8,"./QueryLoader":10,"./QueryLoader/TempOverlay":9}]},{},[11]);



/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!function r(a,s,l){function d(n,e){if(!s[n]){if(!a[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(u)return u(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var i=s[n]={exports:{}};a[n][0].call(i.exports,function(e){var t=a[n][1][e];return d(t||e)},i,i.exports,r,a,s,l)}return s[n].exports}for(var u="function"==typeof require&&require,e=0;e<l.length;e++)d(l[e]);return d}({1:[function(e,t,n){},{}],2:[function(i,r,e){(function(e){var t,n=void 0!==e?e:"undefined"!=typeof window?window:{},o=i(1);"undefined"!=typeof document?t=document:(t=n["__GLOBAL_DOCUMENT_CACHE@4"])||(t=n["__GLOBAL_DOCUMENT_CACHE@4"]=o),r.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],3:[function(e,n,t){(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,n,t){!function(e){var t=setTimeout;function o(){}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function i(n,o){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,r._immediateFn(function(){var e=1===n._state?o.onFulfilled:o.onRejected;if(null!==e){var t;try{t=e(n._value)}catch(e){return void s(o.promise,e)}a(o.promise,t)}else(1===n._state?a:s)(o.promise,n._value)})):n._deferreds.push(o)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof r)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void d((o=n,i=e,function(){o.apply(i,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){s(t,e)}var o,i}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(o);return i(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},r.all=function(e){var s=Array.prototype.slice.call(e);return new r(function(o,i){if(0===s.length)return o([]);var r=s.length;function a(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){a(t,e)},i)}s[t]=e,0==--r&&o(s)}catch(e){i(e)}}for(var e=0;e<s.length;e++)a(e,s[e])})},r.resolve=function(t){return t&&"object"==typeof t&&t.constructor===r?t:new r(function(e){e(t)})},r.reject=function(n){return new r(function(e,t){t(n)})},r.race=function(i){return new r(function(e,t){for(var n=0,o=i.length;n<o;n++)i[n].then(e,t)})},r._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},r._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},r._setImmediateFn=function(e){r._immediateFn=e},r._setUnhandledRejectionFn=function(e){r._unhandledRejectionFn=e},void 0!==n&&n.exports?n.exports=r:e.Promise||(e.Promise=r)}(this)},{}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=e(7),r=(o=i)&&o.__esModule?o:{default:o},s=e(15),l=e(27);var d={lang:"en",en:s.EN,language:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(null!=t&&t.length){if("string"!=typeof t[0])throw new TypeError("Language code must be a string value");if(!/^[a-z]{2,3}((\-|_)[a-z]{2})?$/i.test(t[0]))throw new TypeError("Language code must have format 2-3 letters and. optionally, hyphen, underscore followed by 2 more letters");d.lang=t[0],void 0===d[t[0]]?(t[1]=null!==t[1]&&void 0!==t[1]&&"object"===a(t[1])?t[1]:{},d[t[0]]=(0,l.isObjectEmpty)(t[1])?s.EN:t[1]):null!==t[1]&&void 0!==t[1]&&"object"===a(t[1])&&(d[t[0]]=t[1])}return d.lang},t:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof e&&e.length){var n=void 0,o=void 0,i=d.language(),r=function(e,t,n){return"object"!==(void 0===e?"undefined":a(e))||"number"!=typeof t||"number"!=typeof n?e:[function(){return arguments.length<=1?void 0:arguments[1]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 0===(arguments.length<=0?void 0:arguments[0])||1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1&&(arguments.length<=0?void 0:arguments[0])%100!=11?arguments.length<=1?void 0:arguments[1]:0!==(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])||11===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])||12===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:2<(arguments.length<=0?void 0:arguments[0])&&(arguments.length<=0?void 0:arguments[0])<20?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:0===(arguments.length<=0?void 0:arguments[0])||0<(arguments.length<=0?void 0:arguments[0])%100&&(arguments.length<=0?void 0:arguments[0])%100<20?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1&&(arguments.length<=0?void 0:arguments[0])%100!=11?arguments.length<=1?void 0:arguments[1]:2<=(arguments.length<=0?void 0:arguments[0])%10&&((arguments.length<=0?void 0:arguments[0])%100<10||20<=(arguments.length<=0?void 0:arguments[0])%100)?arguments.length<=2?void 0:arguments[2]:[3]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1&&(arguments.length<=0?void 0:arguments[0])%100!=11?arguments.length<=1?void 0:arguments[1]:2<=(arguments.length<=0?void 0:arguments[0])%10&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||20<=(arguments.length<=0?void 0:arguments[0])%100)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2<=(arguments.length<=0?void 0:arguments[0])&&(arguments.length<=0?void 0:arguments[0])<=4?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2<=(arguments.length<=0?void 0:arguments[0])%10&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||20<=(arguments.length<=0?void 0:arguments[0])%100)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return(arguments.length<=0?void 0:arguments[0])%100==1?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])%100==2?arguments.length<=3?void 0:arguments[3]:(arguments.length<=0?void 0:arguments[0])%100==3||(arguments.length<=0?void 0:arguments[0])%100==4?arguments.length<=4?void 0:arguments[4]:arguments.length<=1?void 0:arguments[1]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:2<(arguments.length<=0?void 0:arguments[0])&&(arguments.length<=0?void 0:arguments[0])<7?arguments.length<=3?void 0:arguments[3]:6<(arguments.length<=0?void 0:arguments[0])&&(arguments.length<=0?void 0:arguments[0])<11?arguments.length<=4?void 0:arguments[4]:arguments.length<=5?void 0:arguments[5]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:3<=(arguments.length<=0?void 0:arguments[0])%100&&(arguments.length<=0?void 0:arguments[0])%100<=10?arguments.length<=4?void 0:arguments[4]:11<=(arguments.length<=0?void 0:arguments[0])%100?arguments.length<=5?void 0:arguments[5]:arguments.length<=6?void 0:arguments[6]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:0===(arguments.length<=0?void 0:arguments[0])||1<(arguments.length<=0?void 0:arguments[0])%100&&(arguments.length<=0?void 0:arguments[0])%100<11?arguments.length<=2?void 0:arguments[2]:10<(arguments.length<=0?void 0:arguments[0])%100&&(arguments.length<=0?void 0:arguments[0])%100<20?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return(arguments.length<=0?void 0:arguments[0])%10==1?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10==2?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 11!==(arguments.length<=0?void 0:arguments[0])&&(arguments.length<=0?void 0:arguments[0])%10==1?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2<=(arguments.length<=0?void 0:arguments[0])%10&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||20<=(arguments.length<=0?void 0:arguments[0])%100)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:8!==(arguments.length<=0?void 0:arguments[0])&&11!==(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:3===(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]}][n].apply(null,[t].concat(e))};return void 0!==d[i]&&(n=d[i][e],null!==t&&"number"==typeof t&&(o=d[i]["mejs.plural-form"],n=r.apply(null,[n,t,o]))),!n&&d.en&&(n=d.en[e],null!==t&&"number"==typeof t&&(o=d.en["mejs.plural-form"],n=r.apply(null,[n,t,o]))),n=n||e,null!==t&&"number"==typeof t&&(n=n.replace("%1",t)),(0,l.escapeHTML)(n)}return e}};r.default.i18n=d,"undefined"!=typeof mejsL10n&&r.default.i18n.language(mejsL10n.language,mejsL10n.strings),n.default=d},{15:15,27:27,7:7}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=o(e(3)),j=o(e(2)),I=o(e(7)),M=e(27),O=e(28),D=e(8),R=e(25);function o(e){return e&&e.__esModule?e:{default:e}}var i=function e(t,n,o){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var f=this;o=Array.isArray(o)?o:null,f.defaults={renderers:[],fakeNodeName:"mediaelementwrapper",pluginPath:"build/",shimScriptAccess:"sameDomain"},n=Object.assign(f.defaults,n),f.mediaElement=j.default.createElement(n.fakeNodeName);var i=t,r=!1;if("string"==typeof t?f.mediaElement.originalNode=j.default.getElementById(t):i=(f.mediaElement.originalNode=t).id,void 0===f.mediaElement.originalNode||null===f.mediaElement.originalNode)return null;f.mediaElement.options=n,i=i||"mejs_"+Math.random().toString().slice(2),f.mediaElement.originalNode.setAttribute("id",i+"_from_mejs");var a=f.mediaElement.originalNode.tagName.toLowerCase();-1<["video","audio"].indexOf(a)&&!f.mediaElement.originalNode.getAttribute("preload")&&f.mediaElement.originalNode.setAttribute("preload","none"),f.mediaElement.originalNode.parentNode.insertBefore(f.mediaElement,f.mediaElement.originalNode),f.mediaElement.appendChild(f.mediaElement.originalNode);var s=function(t,e){if("https:"===F.default.location.protocol&&0===t.indexOf("http:")&&R.IS_IOS&&-1<I.default.html5media.mediaTypes.indexOf(e)){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=(F.default.URL||F.default.webkitURL).createObjectURL(this.response);return f.mediaElement.originalNode.setAttribute("src",e),e}return t},n.open("GET",t),n.responseType="blob",n.send()}return t},l=void 0;if(null!==o)l=o;else if(null!==f.mediaElement.originalNode)switch(l=[],f.mediaElement.originalNode.nodeName.toLowerCase()){case"iframe":l.push({type:"",src:f.mediaElement.originalNode.getAttribute("src")});break;case"audio":case"video":var d=f.mediaElement.originalNode.children.length,u=f.mediaElement.originalNode.getAttribute("src");if(u){var p=f.mediaElement.originalNode,m=(0,O.formatType)(u,p.getAttribute("type"));l.push({type:m,src:s(u,m)})}for(var h=0;h<d;h++){var v=f.mediaElement.originalNode.children[h];if("source"===v.tagName.toLowerCase()){var g=v.getAttribute("src"),y=(0,O.formatType)(g,v.getAttribute("type"));l.push({type:y,src:s(g,y)})}}}f.mediaElement.id=i,f.mediaElement.renderers={},f.mediaElement.events={},f.mediaElement.promises=[],f.mediaElement.renderer=null,f.mediaElement.rendererName=null,f.mediaElement.changeRenderer=function(e,t){var n=c,o=2<Object.keys(t[0]).length?t[0]:t[0].src;if(void 0!==n.mediaElement.renderer&&null!==n.mediaElement.renderer&&n.mediaElement.renderer.name===e)return n.mediaElement.renderer.pause(),n.mediaElement.renderer.stop&&n.mediaElement.renderer.stop(),n.mediaElement.renderer.show(),n.mediaElement.renderer.setSrc(o),!0;void 0!==n.mediaElement.renderer&&null!==n.mediaElement.renderer&&(n.mediaElement.renderer.pause(),n.mediaElement.renderer.stop&&n.mediaElement.renderer.stop(),n.mediaElement.renderer.hide());var i=n.mediaElement.renderers[e],r=null;if(null!=i)return i.show(),i.setSrc(o),n.mediaElement.renderer=i,n.mediaElement.rendererName=e,!0;for(var a=n.mediaElement.options.renderers.length?n.mediaElement.options.renderers:D.renderer.order,s=0,l=a.length;s<l;s++){var d=a[s];if(d===e){r=D.renderer.renderers[d];var u=Object.assign(r.options,n.mediaElement.options);return(i=r.create(n.mediaElement,u,t)).name=e,n.mediaElement.renderers[r.name]=i,n.mediaElement.renderer=i,n.mediaElement.rendererName=e,i.show(),!0}}return!1},f.mediaElement.setSize=function(e,t){void 0!==f.mediaElement.renderer&&null!==f.mediaElement.renderer&&f.mediaElement.renderer.setSize(e,t)},f.mediaElement.generateError=function(e,t){e=e||"",t=Array.isArray(t)?t:[];var n=(0,M.createEvent)("error",f.mediaElement);n.message=e,n.urls=t,f.mediaElement.dispatchEvent(n),r=!0};var E=I.default.html5media.properties,b=I.default.html5media.methods,S=function(t,e,n,o){var i=t[e];Object.defineProperty(t,e,{get:function(){return n.apply(t,[i])},set:function(e){return i=o.apply(t,[e])}})},x=function(e){if("src"!==e){var t=""+e.substring(0,1).toUpperCase()+e.substring(1),n=function(){return void 0!==f.mediaElement.renderer&&null!==f.mediaElement.renderer&&"function"==typeof f.mediaElement.renderer["get"+t]?f.mediaElement.renderer["get"+t]():null},o=function(e){void 0!==f.mediaElement.renderer&&null!==f.mediaElement.renderer&&"function"==typeof f.mediaElement.renderer["set"+t]&&f.mediaElement.renderer["set"+t](e)};S(f.mediaElement,e,n,o),f.mediaElement["get"+t]=n,f.mediaElement["set"+t]=o}},w=function(){return void 0!==f.mediaElement.renderer&&null!==f.mediaElement.renderer?f.mediaElement.renderer.getSrc():null},P=function(e){var t=[];if("string"==typeof e)t.push({src:e,type:e?(0,O.getTypeFromFile)(e):""});else if("object"===(void 0===e?"undefined":L(e))&&void 0!==e.src){var n=(0,O.absolutizeUrl)(e.src),o=e.type,i=Object.assign(e,{src:n,type:""!==o&&null!=o||!n?o:(0,O.getTypeFromFile)(n)});t.push(i)}else if(Array.isArray(e))for(var r=0,a=e.length;r<a;r++){var s=(0,O.absolutizeUrl)(e[r].src),l=e[r].type,d=Object.assign(e[r],{src:s,type:""!==l&&null!=l||!s?l:(0,O.getTypeFromFile)(s)});t.push(d)}var u=D.renderer.select(t,f.mediaElement.options.renderers.length?f.mediaElement.options.renderers:[]),c=void 0;if(f.mediaElement.paused||null==f.mediaElement.src||""===f.mediaElement.src||(f.mediaElement.pause(),c=(0,M.createEvent)("pause",f.mediaElement),f.mediaElement.dispatchEvent(c)),f.mediaElement.originalNode.src=t[0].src||"",null!==u||!t[0].src)return!(null==t[0].src||""===t[0].src)?f.mediaElement.changeRenderer(u.rendererName,t):null;f.mediaElement.generateError("No renderer found",t)},T=function(e,t){try{if("play"!==e||"native_dash"!==f.mediaElement.rendererName&&"native_hls"!==f.mediaElement.rendererName&&"vimeo_iframe"!==f.mediaElement.rendererName)f.mediaElement.renderer[e](t);else{var n=f.mediaElement.renderer[e](t);n&&"function"==typeof n.then&&n.catch(function(){f.mediaElement.paused&&setTimeout(function(){var e=f.mediaElement.renderer.play();void 0!==e&&e.catch(function(){f.mediaElement.renderer.paused||f.mediaElement.renderer.pause()})},150)})}}catch(e){f.mediaElement.generateError(e,l)}},C=function(o){f.mediaElement[o]=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return void 0!==f.mediaElement.renderer&&null!==f.mediaElement.renderer&&"function"==typeof f.mediaElement.renderer[o]&&(f.mediaElement.promises.length?Promise.all(f.mediaElement.promises).then(function(){T(o,t)}).catch(function(e){f.mediaElement.generateError(e,l)}):T(o,t)),null}};S(f.mediaElement,"src",w,P),f.mediaElement.getSrc=w,f.mediaElement.setSrc=P;for(var k=0,_=E.length;k<_;k++)x(E[k]);for(var N=0,A=b.length;N<A;N++)C(b[N]);return f.mediaElement.addEventListener=function(e,t){f.mediaElement.events[e]=f.mediaElement.events[e]||[],f.mediaElement.events[e].push(t)},f.mediaElement.removeEventListener=function(e,t){if(!e)return f.mediaElement.events={},!0;var n=f.mediaElement.events[e];if(!n)return!0;if(!t)return f.mediaElement.events[e]=[],!0;for(var o=0;o<n.length;o++)if(n[o]===t)return f.mediaElement.events[e].splice(o,1),!0;return!1},f.mediaElement.dispatchEvent=function(e){var t=f.mediaElement.events[e.type];if(t)for(var n=0;n<t.length;n++)t[n].apply(null,[e])},f.mediaElement.destroy=function(){var e=f.mediaElement.originalNode.cloneNode(!0),t=f.mediaElement.parentElement;e.removeAttribute("id"),e.remove(),f.mediaElement.remove(),t.appendChild(e)},l.length&&(f.mediaElement.src=l),f.mediaElement.promises.length?Promise.all(f.mediaElement.promises).then(function(){f.mediaElement.options.success&&f.mediaElement.options.success(f.mediaElement,f.mediaElement.originalNode)}).catch(function(){r&&f.mediaElement.options.error&&f.mediaElement.options.error(f.mediaElement,f.mediaElement.originalNode)}):(f.mediaElement.options.success&&f.mediaElement.options.success(f.mediaElement,f.mediaElement.originalNode),r&&f.mediaElement.options.error&&f.mediaElement.options.error(f.mediaElement,f.mediaElement.originalNode)),f.mediaElement};F.default.MediaElement=i,I.default.MediaElement=i,n.default=i},{2:2,25:25,27:27,28:28,3:3,7:7,8:8}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=e(3);var r={version:"4.2.16",html5media:{properties:["volume","src","currentTime","muted","duration","paused","ended","buffered","error","networkState","readyState","seeking","seekable","currentSrc","preload","bufferedBytes","bufferedTime","initialTime","startOffsetTime","defaultPlaybackRate","playbackRate","played","autoplay","loop","controls"],readOnlyProperties:["duration","paused","ended","buffered","error","networkState","readyState","seeking","seekable"],methods:["load","play","pause","canPlayType"],events:["loadstart","durationchange","loadedmetadata","loadeddata","progress","canplay","canplaythrough","suspend","abort","error","emptied","stalled","play","playing","pause","waiting","seeking","seeked","timeupdate","ended","ratechange","volumechange"],mediaTypes:["audio/mp3","audio/ogg","audio/oga","audio/wav","audio/x-wav","audio/wave","audio/x-pn-wav","audio/mpeg","audio/mp4","video/mp4","video/webm","video/ogg","video/ogv"]}};((o=i)&&o.__esModule?o:{default:o}).default.mejs=r,n.default=r},{3:3}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.renderer=void 0;var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),a=e(7),s=(o=a)&&o.__esModule?o:{default:o};var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderers={},this.order=[]}return r(e,[{key:"add",value:function(e){if(void 0===e.name)throw new TypeError("renderer must contain at least `name` property");this.renderers[e.name]=e,this.order.push(e.name)}},{key:"select",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=t.length;if(t=t.length?t:this.order,!n){var o=[/^(html5|native)/i,/^flash/i,/iframe$/i],i=function(e){for(var t=0,n=o.length;t<n;t++)if(o[t].test(e))return t;return o.length};t.sort(function(e,t){return i(e)-i(t)})}for(var r=0,a=t.length;r<a;r++){var s=t[r],l=this.renderers[s];if(null!=l)for(var d=0,u=e.length;d<u;d++)if("function"==typeof l.canPlayType&&"string"==typeof e[d].type&&l.canPlayType(e[d].type))return{rendererName:l.name,src:e[d].src}}return null}},{key:"order",set:function(e){if(!Array.isArray(e))throw new TypeError("order must be an array of strings.");this._order=e},get:function(){return this._order}},{key:"renderers",set:function(e){if(null!==e&&"object"!==(void 0===e?"undefined":i(e)))throw new TypeError("renderers must be an array of objects.");this._renderers=e},get:function(){return this._renderers}}]),e}(),d=n.renderer=new l;s.default.Renderers=d},{7:7}],9:[function(e,t,n){"use strict";var f=a(e(3)),p=a(e(2)),i=a(e(5)),o=e(16),r=a(o),m=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(e(25)),h=e(27),v=e(26),g=e(28);function a(e){return e&&e.__esModule?e:{default:e}}Object.assign(o.config,{usePluginFullScreen:!0,fullscreenText:null,useFakeFullscreen:!1}),Object.assign(r.default.prototype,{isFullScreen:!1,isNativeFullScreen:!1,isInIframe:!1,isPluginClickThroughCreated:!1,fullscreenMode:"",containerSizeTimeout:null,buildfullscreen:function(n){if(n.isVideo){n.isInIframe=f.default.location!==f.default.parent.location,n.detectFullscreenMode();var o=this,e=(0,h.isString)(o.options.fullscreenText)?o.options.fullscreenText:i.default.t("mejs.fullscreen"),t=p.default.createElement("div");if(t.className=o.options.classPrefix+"button "+o.options.classPrefix+"fullscreen-button",t.innerHTML='<button type="button" aria-controls="'+o.id+'" title="'+e+'" aria-label="'+e+'" tabindex="0"></button>',o.addControlElement(t,"fullscreen"),t.addEventListener("click",function(){m.HAS_TRUE_NATIVE_FULLSCREEN&&m.IS_FULLSCREEN||n.isFullScreen?n.exitFullScreen():n.enterFullScreen()}),n.fullscreenBtn=t,o.options.keyActions.push({keys:[70],action:function(e,t,n,o){o.ctrlKey||void 0!==e.enterFullScreen&&(e.isFullScreen?e.exitFullScreen():e.enterFullScreen())}}),o.exitFullscreenCallback=function(e){var t=e.which||e.keyCode||0;o.options.enableKeyboard&&27===t&&(m.HAS_TRUE_NATIVE_FULLSCREEN&&m.IS_FULLSCREEN||o.isFullScreen)&&n.exitFullScreen()},o.globalBind("keydown",o.exitFullscreenCallback),o.normalHeight=0,o.normalWidth=0,m.HAS_TRUE_NATIVE_FULLSCREEN){n.globalBind(m.FULLSCREEN_EVENT_NAME,function(){n.isFullScreen&&(m.isFullScreen()?(n.isNativeFullScreen=!0,n.setControlsSize()):(n.isNativeFullScreen=!1,n.exitFullScreen()))})}}},cleanfullscreen:function(e){e.exitFullScreen(),e.globalUnbind("keydown",e.exitFullscreenCallback)},detectFullscreenMode:function(){var e=null!==this.media.rendererName&&/(native|html5)/i.test(this.media.rendererName),t="";return m.HAS_TRUE_NATIVE_FULLSCREEN&&e?t="native-native":m.HAS_TRUE_NATIVE_FULLSCREEN&&!e?t="plugin-native":this.usePluginFullScreen&&m.SUPPORT_POINTER_EVENTS&&(t="plugin-click"),this.fullscreenMode=t},enterFullScreen:function(){var o=this,e=null!==o.media.rendererName&&/(html5|native)/i.test(o.media.rendererName),t=getComputedStyle(o.getElement(o.container));if(o.isVideo)if(!1===o.options.useFakeFullscreen&&m.IS_IOS&&m.HAS_IOS_FULLSCREEN&&"function"==typeof o.media.originalNode.webkitEnterFullscreen&&o.media.originalNode.canPlayType((0,g.getTypeFromFile)(o.media.getSrc())))o.media.originalNode.webkitEnterFullscreen();else{if((0,v.addClass)(p.default.documentElement,o.options.classPrefix+"fullscreen"),(0,v.addClass)(o.getElement(o.container),o.options.classPrefix+"container-fullscreen"),o.normalHeight=parseFloat(t.height),o.normalWidth=parseFloat(t.width),"native-native"!==o.fullscreenMode&&"plugin-native"!==o.fullscreenMode||(m.requestFullScreen(o.getElement(o.container)),o.isInIframe&&setTimeout(function e(){if(o.isNativeFullScreen){var t=f.default.innerWidth||p.default.documentElement.clientWidth||p.default.body.clientWidth,n=screen.width;.002*n<Math.abs(n-t)?o.exitFullScreen():setTimeout(e,500)}},1e3)),o.getElement(o.container).style.width="100%",o.getElement(o.container).style.height="100%",o.containerSizeTimeout=setTimeout(function(){o.getElement(o.container).style.width="100%",o.getElement(o.container).style.height="100%",o.setControlsSize()},500),e)o.node.style.width="100%",o.node.style.height="100%";else for(var n=o.getElement(o.container).querySelectorAll("embed, object, video"),i=n.length,r=0;r<i;r++)n[r].style.width="100%",n[r].style.height="100%";o.options.setDimensions&&"function"==typeof o.media.setSize&&o.media.setSize(screen.width,screen.height);for(var a=o.getElement(o.layers).children,s=a.length,l=0;l<s;l++)a[l].style.width="100%",a[l].style.height="100%";o.fullscreenBtn&&((0,v.removeClass)(o.fullscreenBtn,o.options.classPrefix+"fullscreen"),(0,v.addClass)(o.fullscreenBtn,o.options.classPrefix+"unfullscreen")),o.setControlsSize(),o.isFullScreen=!0;var d=Math.min(screen.width/o.width,screen.height/o.height),u=o.getElement(o.container).querySelector("."+o.options.classPrefix+"captions-text");u&&(u.style.fontSize=100*d+"%",u.style.lineHeight="normal",o.getElement(o.container).querySelector("."+o.options.classPrefix+"captions-position").style.bottom=(screen.height-o.normalHeight)/2-o.getElement(o.controls).offsetHeight/2+d+15+"px");var c=(0,h.createEvent)("enteredfullscreen",o.getElement(o.container));o.getElement(o.container).dispatchEvent(c)}},exitFullScreen:function(){var e=this,t=null!==e.media.rendererName&&/(native|html5)/i.test(e.media.rendererName);if(e.isVideo){if(clearTimeout(e.containerSizeTimeout),m.HAS_TRUE_NATIVE_FULLSCREEN&&(m.IS_FULLSCREEN||e.isFullScreen)&&m.cancelFullScreen(),(0,v.removeClass)(p.default.documentElement,e.options.classPrefix+"fullscreen"),(0,v.removeClass)(e.getElement(e.container),e.options.classPrefix+"container-fullscreen"),e.options.setDimensions){if(e.getElement(e.container).style.width=e.normalWidth+"px",e.getElement(e.container).style.height=e.normalHeight+"px",t)e.node.style.width=e.normalWidth+"px",e.node.style.height=e.normalHeight+"px";else for(var n=e.getElement(e.container).querySelectorAll("embed, object, video"),o=n.length,i=0;i<o;i++)n[i].style.width=e.normalWidth+"px",n[i].style.height=e.normalHeight+"px";"function"==typeof e.media.setSize&&e.media.setSize(e.normalWidth,e.normalHeight);for(var r=e.getElement(e.layers).children,a=r.length,s=0;s<a;s++)r[s].style.width=e.normalWidth+"px",r[s].style.height=e.normalHeight+"px"}e.fullscreenBtn&&((0,v.removeClass)(e.fullscreenBtn,e.options.classPrefix+"unfullscreen"),(0,v.addClass)(e.fullscreenBtn,e.options.classPrefix+"fullscreen")),e.setControlsSize(),e.isFullScreen=!1;var l=e.getElement(e.container).querySelector("."+e.options.classPrefix+"captions-text");l&&(l.style.fontSize="",l.style.lineHeight="",e.getElement(e.container).querySelector("."+e.options.classPrefix+"captions-position").style.bottom="");var d=(0,h.createEvent)("exitedfullscreen",e.getElement(e.container));e.getElement(e.container).dispatchEvent(d)}}})},{16:16,2:2,25:25,26:26,27:27,28:28,3:3,5:5}],10:[function(e,t,n){"use strict";var c=r(e(2)),o=e(16),i=r(o),f=r(e(5)),p=e(27),m=e(26);function r(e){return e&&e.__esModule?e:{default:e}}Object.assign(o.config,{playText:null,pauseText:null}),Object.assign(i.default.prototype,{buildplaypause:function(e,t,n,o){var i=this,r=i.options,a=(0,p.isString)(r.playText)?r.playText:f.default.t("mejs.play"),s=(0,p.isString)(r.pauseText)?r.pauseText:f.default.t("mejs.pause"),l=c.default.createElement("div");l.className=i.options.classPrefix+"button "+i.options.classPrefix+"playpause-button "+i.options.classPrefix+"play",l.innerHTML='<button type="button" aria-controls="'+i.id+'" title="'+a+'" aria-label="'+s+'" tabindex="0"></button>',l.addEventListener("click",function(){i.paused?i.play():i.pause()});var d=l.querySelector("button");function u(e){"play"===e?((0,m.removeClass)(l,i.options.classPrefix+"play"),(0,m.removeClass)(l,i.options.classPrefix+"replay"),(0,m.addClass)(l,i.options.classPrefix+"pause"),d.setAttribute("title",s),d.setAttribute("aria-label",s)):((0,m.removeClass)(l,i.options.classPrefix+"pause"),(0,m.removeClass)(l,i.options.classPrefix+"replay"),(0,m.addClass)(l,i.options.classPrefix+"play"),d.setAttribute("title",a),d.setAttribute("aria-label",a))}i.addControlElement(l,"playpause"),u("pse"),o.addEventListener("loadedmetadata",function(){-1===o.rendererName.indexOf("flash")&&u("pse")}),o.addEventListener("play",function(){u("play")}),o.addEventListener("playing",function(){u("play")}),o.addEventListener("pause",function(){u("pse")}),o.addEventListener("ended",function(){e.options.loop||((0,m.removeClass)(l,i.options.classPrefix+"pause"),(0,m.removeClass)(l,i.options.classPrefix+"play"),(0,m.addClass)(l,i.options.classPrefix+"replay"),d.setAttribute("title",a),d.setAttribute("aria-label",a))})}})},{16:16,2:2,26:26,27:27,5:5}],11:[function(e,t,n){"use strict";var p=r(e(2)),o=e(16),i=r(o),m=r(e(5)),y=e(25),E=e(30),b=e(26);function r(e){return e&&e.__esModule?e:{default:e}}Object.assign(o.config,{enableProgressTooltip:!0,useSmoothHover:!0,forceLive:!1}),Object.assign(i.default.prototype,{buildprogress:function(h,s,e,d){var u=0,v=!1,c=!1,g=this,t=h.options.autoRewind,n=h.options.enableProgressTooltip?'<span class="'+g.options.classPrefix+'time-float"><span class="'+g.options.classPrefix+'time-float-current">00:00</span><span class="'+g.options.classPrefix+'time-float-corner"></span></span>':"",o=p.default.createElement("div");o.className=g.options.classPrefix+"time-rail",o.innerHTML='<span class="'+g.options.classPrefix+"time-total "+g.options.classPrefix+'time-slider"><span class="'+g.options.classPrefix+'time-buffering"></span><span class="'+g.options.classPrefix+'time-loaded"></span><span class="'+g.options.classPrefix+'time-current"></span><span class="'+g.options.classPrefix+'time-hovered no-hover"></span><span class="'+g.options.classPrefix+'time-handle"><span class="'+g.options.classPrefix+'time-handle-content"></span></span>'+n+"</span>",g.addControlElement(o,"progress"),g.options.keyActions.push({keys:[37,227],action:function(e){if(!isNaN(e.duration)&&0<e.duration){e.isVideo&&(e.showControls(),e.startControlsTimer());var t=e.getElement(e.container).querySelector("."+g.options.classPrefix+"time-total");t&&t.focus();var n=Math.max(e.currentTime-e.options.defaultSeekBackwardInterval(e),0);e.paused||e.pause(),setTimeout(function(){e.setCurrentTime(n)},0),setTimeout(function(){e.play()},0)}}},{keys:[39,228],action:function(e){if(!isNaN(e.duration)&&0<e.duration){e.isVideo&&(e.showControls(),e.startControlsTimer());var t=e.getElement(e.container).querySelector("."+g.options.classPrefix+"time-total");t&&t.focus();var n=Math.min(e.currentTime+e.options.defaultSeekForwardInterval(e),e.duration);e.paused||e.pause(),setTimeout(function(){e.setCurrentTime(n)},0),setTimeout(function(){e.play()},0)}}}),g.rail=s.querySelector("."+g.options.classPrefix+"time-rail"),g.total=s.querySelector("."+g.options.classPrefix+"time-total"),g.loaded=s.querySelector("."+g.options.classPrefix+"time-loaded"),g.current=s.querySelector("."+g.options.classPrefix+"time-current"),g.handle=s.querySelector("."+g.options.classPrefix+"time-handle"),g.timefloat=s.querySelector("."+g.options.classPrefix+"time-float"),g.timefloatcurrent=s.querySelector("."+g.options.classPrefix+"time-float-current"),g.slider=s.querySelector("."+g.options.classPrefix+"time-slider"),g.hovered=s.querySelector("."+g.options.classPrefix+"time-hovered"),g.buffer=s.querySelector("."+g.options.classPrefix+"time-buffering"),g.newTime=0,g.forcedHandlePause=!1,g.setTransformStyle=function(e,t){e.style.transform=t,e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t},g.buffer.style.display="none";var i=function(e){var t=getComputedStyle(g.total),n=(0,b.offset)(g.total),o=g.total.offsetWidth,i=void 0!==t.webkitTransform?"webkitTransform":void 0!==t.mozTransform?"mozTransform ":void 0!==t.oTransform?"oTransform":void 0!==t.msTransform?"msTransform":"transform",r="WebKitCSSMatrix"in window?"WebKitCSSMatrix":"MSCSSMatrix"in window?"MSCSSMatrix":"CSSMatrix"in window?"CSSMatrix":void 0,a=0,s=0,l=0,d=void 0;if(d=e.originalEvent&&e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.changedTouches?e.changedTouches[0].pageX:e.pageX,g.getDuration()){if(d<n.left?d=n.left:d>o+n.left&&(d=o+n.left),a=(l=d-n.left)/o,g.newTime=a*g.getDuration(),v&&null!==g.getCurrentTime()&&g.newTime.toFixed(4)!==g.getCurrentTime().toFixed(4)&&(g.setCurrentRailHandle(g.newTime),g.updateCurrent(g.newTime)),!y.IS_IOS&&!y.IS_ANDROID){if(l<0&&(l=0),g.options.useSmoothHover&&null!==r&&void 0!==window[r]){var u=new window[r](getComputedStyle(g.handle)[i]).m41,c=l/parseFloat(getComputedStyle(g.total).width)-u/parseFloat(getComputedStyle(g.total).width);g.hovered.style.left=u+"px",g.setTransformStyle(g.hovered,"scaleX("+c+")"),g.hovered.setAttribute("pos",l),0<=c?(0,b.removeClass)(g.hovered,"negative"):(0,b.addClass)(g.hovered,"negative")}if(g.timefloat){var f=g.timefloat.offsetWidth/2,p=mejs.Utils.offset(g.getElement(g.container)),m=getComputedStyle(g.timefloat);s=d-p.left<g.timefloat.offsetWidth?f:d-p.left>=g.getElement(g.container).offsetWidth-f?g.total.offsetWidth-f:l,(0,b.hasClass)(g.getElement(g.container),g.options.classPrefix+"long-video")&&(s+=parseFloat(m.marginLeft)/2+g.timefloat.offsetWidth/2),g.timefloat.style.left=s+"px",g.timefloatcurrent.innerHTML=(0,E.secondsToTimeCode)(g.newTime,h.options.alwaysShowHours,h.options.showTimecodeFrameCount,h.options.framesPerSecond,h.options.secondsDecimalLength,h.options.timeFormat),g.timefloat.style.display="block"}}}else y.IS_IOS||y.IS_ANDROID||!g.timefloat||(s=g.timefloat.offsetWidth+o>=g.getElement(g.container).offsetWidth?g.timefloat.offsetWidth/2:0,g.timefloat.style.left=s+"px",g.timefloat.style.left=s+"px",g.timefloat.style.display="block")},f=function(){1e3<=new Date-u&&g.play()};g.slider.addEventListener("focus",function(){h.options.autoRewind=!1}),g.slider.addEventListener("blur",function(){h.options.autoRewind=t}),g.slider.addEventListener("keydown",function(e){if(1e3<=new Date-u&&(c=g.paused),g.options.enableKeyboard&&g.options.keyActions.length){var t=e.which||e.keyCode||0,n=g.getDuration(),o=h.options.defaultSeekForwardInterval(d),i=h.options.defaultSeekBackwardInterval(d),r=g.getCurrentTime(),a=g.getElement(g.container).querySelector("."+g.options.classPrefix+"volume-slider");if(38===t||40===t){a&&(a.style.display="block"),g.isVideo&&(g.showControls(),g.startControlsTimer());var s=38===t?Math.min(g.volume+.1,1):Math.max(g.volume-.1,0),l=s<=0;return g.setVolume(s),void g.setMuted(l)}switch(a&&(a.style.display="none"),t){case 37:g.getDuration()!==1/0&&(r-=i);break;case 39:g.getDuration()!==1/0&&(r+=o);break;case 36:r=0;break;case 35:r=n;break;case 13:case 32:return void(y.IS_FIREFOX&&(g.paused?g.play():g.pause()));default:return}r=r<0||isNaN(r)?0:n<=r?n:Math.floor(r),u=new Date,c||h.pause(),setTimeout(function(){g.setCurrentTime(r)},0),r<g.getDuration()&&!c&&setTimeout(f,1100),h.showControls(),e.preventDefault(),e.stopPropagation()}});var r=["mousedown","touchstart"];g.slider.addEventListener("dragstart",function(){return!1});for(var a=0,l=r.length;a<l;a++)g.slider.addEventListener(r[a],function(e){if(g.forcedHandlePause=!1,g.getDuration()!==1/0&&(1===e.which||0===e.which)){g.paused||(g.pause(),g.forcedHandlePause=!0),v=!0,i(e);for(var t=["mouseup","touchend"],n=0,o=t.length;n<o;n++)g.getElement(g.container).addEventListener(t[n],function(e){var t=e.target;(t===g.slider||t.closest("."+g.options.classPrefix+"time-slider"))&&i(e)});g.globalBind("mouseup.dur touchend.dur",function(){v&&null!==g.getCurrentTime()&&g.newTime.toFixed(4)!==g.getCurrentTime().toFixed(4)&&(g.setCurrentTime(g.newTime),g.setCurrentRailHandle(g.newTime),g.updateCurrent(g.newTime)),g.forcedHandlePause&&(g.slider.focus(),g.play()),g.forcedHandlePause=!1,v=!1,g.timefloat&&(g.timefloat.style.display="none")})}},!(!y.SUPPORT_PASSIVE_EVENT||"touchstart"!==r[a])&&{passive:!0});g.slider.addEventListener("mouseenter",function(e){e.target===g.slider&&g.getDuration()!==1/0&&(g.getElement(g.container).addEventListener("mousemove",function(e){var t=e.target;(t===g.slider||t.closest("."+g.options.classPrefix+"time-slider"))&&i(e)}),!g.timefloat||y.IS_IOS||y.IS_ANDROID||(g.timefloat.style.display="block"),g.hovered&&!y.IS_IOS&&!y.IS_ANDROID&&g.options.useSmoothHover&&(0,b.removeClass)(g.hovered,"no-hover"))}),g.slider.addEventListener("mouseleave",function(){g.getDuration()!==1/0&&(v||(g.timefloat&&(g.timefloat.style.display="none"),g.hovered&&g.options.useSmoothHover&&(0,b.addClass)(g.hovered,"no-hover")))}),g.broadcastCallback=function(e){var t,n,o,i,r=s.querySelector("."+g.options.classPrefix+"broadcast");if(g.options.forceLive||g.getDuration()===1/0){if(!r&&g.options.forceLive){var a=p.default.createElement("span");a.className=g.options.classPrefix+"broadcast",a.innerText=m.default.t("mejs.live-broadcast"),g.slider.style.display="none",g.rail.appendChild(a)}}else r&&(g.slider.style.display="",r.remove()),h.setProgressRail(e),g.forcedHandlePause||h.setCurrentRail(e),t=g.getCurrentTime(),n=m.default.t("mejs.time-slider"),o=(0,E.secondsToTimeCode)(t,h.options.alwaysShowHours,h.options.showTimecodeFrameCount,h.options.framesPerSecond,h.options.secondsDecimalLength,h.options.timeFormat),i=g.getDuration(),g.slider.setAttribute("role","slider"),g.slider.tabIndex=0,d.paused?(g.slider.setAttribute("aria-label",n),g.slider.setAttribute("aria-valuemin",0),g.slider.setAttribute("aria-valuemax",isNaN(i)?0:i),g.slider.setAttribute("aria-valuenow",t),g.slider.setAttribute("aria-valuetext",o)):(g.slider.removeAttribute("aria-label"),g.slider.removeAttribute("aria-valuemin"),g.slider.removeAttribute("aria-valuemax"),g.slider.removeAttribute("aria-valuenow"),g.slider.removeAttribute("aria-valuetext"))},d.addEventListener("progress",g.broadcastCallback),d.addEventListener("timeupdate",g.broadcastCallback),d.addEventListener("play",function(){g.buffer.style.display="none"}),d.addEventListener("playing",function(){g.buffer.style.display="none"}),d.addEventListener("seeking",function(){g.buffer.style.display=""}),d.addEventListener("seeked",function(){g.buffer.style.display="none"}),d.addEventListener("pause",function(){g.buffer.style.display="none"}),d.addEventListener("waiting",function(){g.buffer.style.display=""}),d.addEventListener("loadeddata",function(){g.buffer.style.display=""}),d.addEventListener("canplay",function(){g.buffer.style.display="none"}),d.addEventListener("error",function(){g.buffer.style.display="none"}),g.getElement(g.container).addEventListener("controlsresize",function(e){g.getDuration()!==1/0&&(h.setProgressRail(e),g.forcedHandlePause||h.setCurrentRail(e))})},cleanprogress:function(e,t,n,o){o.removeEventListener("progress",e.broadcastCallback),o.removeEventListener("timeupdate",e.broadcastCallback),e.rail&&e.rail.remove()},setProgressRail:function(e){var t=this,n=void 0!==e?e.detail.target||e.target:t.media,o=null;n&&n.buffered&&0<n.buffered.length&&n.buffered.end&&t.getDuration()?o=n.buffered.end(n.buffered.length-1)/t.getDuration():n&&void 0!==n.bytesTotal&&0<n.bytesTotal&&void 0!==n.bufferedBytes?o=n.bufferedBytes/n.bytesTotal:e&&e.lengthComputable&&0!==e.total&&(o=e.loaded/e.total),null!==o&&(o=Math.min(1,Math.max(0,o)),t.loaded&&t.setTransformStyle(t.loaded,"scaleX("+o+")"))},setCurrentRailHandle:function(e){this.setCurrentRailMain(this,e)},setCurrentRail:function(){this.setCurrentRailMain(this)},setCurrentRailMain:function(e,t){if(void 0!==e.getCurrentTime()&&e.getDuration()){var n=void 0===t?e.getCurrentTime():t;if(e.total&&e.handle){var o=parseFloat(getComputedStyle(e.total).width),i=Math.round(o*n/e.getDuration()),r=i-Math.round(e.handle.offsetWidth/2);if(r=r<0?0:r,e.setTransformStyle(e.current,"scaleX("+i/o+")"),e.setTransformStyle(e.handle,"translateX("+r+"px)"),e.options.useSmoothHover&&!(0,b.hasClass)(e.hovered,"no-hover")){var a=parseInt(e.hovered.getAttribute("pos"),10),s=(a=isNaN(a)?0:a)/o-r/o;e.hovered.style.left=r+"px",e.setTransformStyle(e.hovered,"scaleX("+s+")"),0<=s?(0,b.removeClass)(e.hovered,"negative"):(0,b.addClass)(e.hovered,"negative")}}}}})},{16:16,2:2,25:25,26:26,30:30,5:5}],12:[function(e,t,n){"use strict";var a=r(e(2)),o=e(16),i=r(o),s=e(30),l=e(26);function r(e){return e&&e.__esModule?e:{default:e}}Object.assign(o.config,{duration:0,timeAndDurationSeparator:"<span> | </span>"}),Object.assign(i.default.prototype,{buildcurrent:function(e,t,n,o){var i=this,r=a.default.createElement("div");r.className=i.options.classPrefix+"time",r.setAttribute("role","timer"),r.setAttribute("aria-live","off"),r.innerHTML='<span class="'+i.options.classPrefix+'currenttime">'+(0,s.secondsToTimeCode)(0,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat)+"</span>",i.addControlElement(r,"current"),e.updateCurrent(),i.updateTimeCallback=function(){i.controlsAreVisible&&e.updateCurrent()},o.addEventListener("timeupdate",i.updateTimeCallback)},cleancurrent:function(e,t,n,o){o.removeEventListener("timeupdate",e.updateTimeCallback)},buildduration:function(e,t,n,o){var i=this;if(t.lastChild.querySelector("."+i.options.classPrefix+"currenttime"))t.querySelector("."+i.options.classPrefix+"time").innerHTML+=i.options.timeAndDurationSeparator+'<span class="'+i.options.classPrefix+'duration">'+(0,s.secondsToTimeCode)(i.options.duration,i.options.alwaysShowHours,i.options.showTimecodeFrameCount,i.options.framesPerSecond,i.options.secondsDecimalLength,i.options.timeFormat)+"</span>";else{t.querySelector("."+i.options.classPrefix+"currenttime")&&(0,l.addClass)(t.querySelector("."+i.options.classPrefix+"currenttime").parentNode,i.options.classPrefix+"currenttime-container");var r=a.default.createElement("div");r.className=i.options.classPrefix+"time "+i.options.classPrefix+"duration-container",r.innerHTML='<span class="'+i.options.classPrefix+'duration">'+(0,s.secondsToTimeCode)(i.options.duration,i.options.alwaysShowHours,i.options.showTimecodeFrameCount,i.options.framesPerSecond,i.options.secondsDecimalLength,i.options.timeFormat)+"</span>",i.addControlElement(r,"duration")}i.updateDurationCallback=function(){i.controlsAreVisible&&e.updateDuration()},o.addEventListener("timeupdate",i.updateDurationCallback)},cleanduration:function(e,t,n,o){o.removeEventListener("timeupdate",e.updateDurationCallback)},updateCurrent:function(){var e=this,t=e.getCurrentTime();isNaN(t)&&(t=0);var n=(0,s.secondsToTimeCode)(t,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat);5<n.length?(0,l.addClass)(e.getElement(e.container),e.options.classPrefix+"long-video"):(0,l.removeClass)(e.getElement(e.container),e.options.classPrefix+"long-video"),e.getElement(e.controls).querySelector("."+e.options.classPrefix+"currenttime")&&(e.getElement(e.controls).querySelector("."+e.options.classPrefix+"currenttime").innerText=n)},updateDuration:function(){var e=this,t=e.getDuration();void 0!==e.media&&(isNaN(t)||t===1/0||t<0)&&(e.media.duration=e.options.duration=t=0),0<e.options.duration&&(t=e.options.duration);var n=(0,s.secondsToTimeCode)(t,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength,e.options.timeFormat);5<n.length?(0,l.addClass)(e.getElement(e.container),e.options.classPrefix+"long-video"):(0,l.removeClass)(e.getElement(e.container),e.options.classPrefix+"long-video"),e.getElement(e.controls).querySelector("."+e.options.classPrefix+"duration")&&0<t&&(e.getElement(e.controls).querySelector("."+e.options.classPrefix+"duration").innerHTML=n)}})},{16:16,2:2,26:26,30:30}],13:[function(e,t,n){"use strict";var L=r(e(2)),d=r(e(7)),F=r(e(5)),o=e(16),i=r(o),m=e(30),j=e(27),I=e(26);function r(e){return e&&e.__esModule?e:{default:e}}Object.assign(o.config,{startLanguage:"",tracksText:null,chaptersText:null,tracksAriaLive:!1,hideCaptionsButtonWhenEmpty:!0,toggleCaptionsButtonWhenOnlyOne:!1,slidesSelector:""}),Object.assign(i.default.prototype,{hasChapters:!1,buildtracks:function(o,e,t,n){if(this.findTracks(),o.tracks.length||o.trackFiles&&0!==!o.trackFiles.length){var i=this,r=i.options.tracksAriaLive?' role="log" aria-live="assertive" aria-atomic="false"':"",a=(0,j.isString)(i.options.tracksText)?i.options.tracksText:F.default.t("mejs.captions-subtitles"),s=(0,j.isString)(i.options.chaptersText)?i.options.chaptersText:F.default.t("mejs.captions-chapters"),l=null===o.trackFiles?o.tracks.length:o.trackFiles.length;if(i.domNode.textTracks)for(var d=i.domNode.textTracks.length-1;0<=d;d--)i.domNode.textTracks[d].mode="hidden";i.cleartracks(o),o.captions=L.default.createElement("div"),o.captions.className=i.options.classPrefix+"captions-layer "+i.options.classPrefix+"layer",o.captions.innerHTML='<div class="'+i.options.classPrefix+"captions-position "+i.options.classPrefix+'captions-position-hover"'+r+'><span class="'+i.options.classPrefix+'captions-text"></span></div>',o.captions.style.display="none",t.insertBefore(o.captions,t.firstChild),o.captionsText=o.captions.querySelector("."+i.options.classPrefix+"captions-text"),o.captionsButton=L.default.createElement("div"),o.captionsButton.className=i.options.classPrefix+"button "+i.options.classPrefix+"captions-button",o.captionsButton.innerHTML='<button type="button" aria-controls="'+i.id+'" title="'+a+'" aria-label="'+a+'" tabindex="0"></button><div class="'+i.options.classPrefix+"captions-selector "+i.options.classPrefix+'offscreen"><ul class="'+i.options.classPrefix+'captions-selector-list"><li class="'+i.options.classPrefix+'captions-selector-list-item"><input type="radio" class="'+i.options.classPrefix+'captions-selector-input" name="'+o.id+'_captions" id="'+o.id+'_captions_none" value="none" checked disabled><label class="'+i.options.classPrefix+"captions-selector-label "+i.options.classPrefix+'captions-selected" for="'+o.id+'_captions_none">'+F.default.t("mejs.none")+"</label></li></ul></div>",i.addControlElement(o.captionsButton,"tracks"),o.captionsButton.querySelector("."+i.options.classPrefix+"captions-selector-input").disabled=!1,o.chaptersButton=L.default.createElement("div"),o.chaptersButton.className=i.options.classPrefix+"button "+i.options.classPrefix+"chapters-button",o.chaptersButton.innerHTML='<button type="button" aria-controls="'+i.id+'" title="'+s+'" aria-label="'+s+'" tabindex="0"></button><div class="'+i.options.classPrefix+"chapters-selector "+i.options.classPrefix+'offscreen"><ul class="'+i.options.classPrefix+'chapters-selector-list"></ul></div>';for(var u=0,c=0;c<l;c++){var f=o.tracks[c].kind;o.tracks[c].src.trim()&&("subtitles"===f||"captions"===f?u++:"chapters"!==f||e.querySelector("."+i.options.classPrefix+"chapter-selector")||o.captionsButton.parentNode.insertBefore(o.chaptersButton,o.captionsButton))}o.trackToLoad=-1,o.selectedTrack=null,o.isLoadingTrack=!1;for(var p=0;p<l;p++){var m=o.tracks[p].kind;!o.tracks[p].src.trim()||"subtitles"!==m&&"captions"!==m||o.addTrackButton(o.tracks[p].trackId,o.tracks[p].srclang,o.tracks[p].label)}o.loadNextTrack();var h=["mouseenter","focusin"],v=["mouseleave","focusout"];if(i.options.toggleCaptionsButtonWhenOnlyOne&&1===u)o.captionsButton.addEventListener("click",function(e){var t="none";null===o.selectedTrack&&(t=o.tracks[0].trackId);var n=e.keyCode||e.which;o.setTrack(t,void 0!==n)});else{for(var g=o.captionsButton.querySelectorAll("."+i.options.classPrefix+"captions-selector-label"),y=o.captionsButton.querySelectorAll("input[type=radio]"),E=0,b=h.length;E<b;E++)o.captionsButton.addEventListener(h[E],function(){(0,I.removeClass)(this.querySelector("."+i.options.classPrefix+"captions-selector"),i.options.classPrefix+"offscreen")});for(var S=0,x=v.length;S<x;S++)o.captionsButton.addEventListener(v[S],function(){(0,I.addClass)(this.querySelector("."+i.options.classPrefix+"captions-selector"),i.options.classPrefix+"offscreen")});for(var w=0,P=y.length;w<P;w++)y[w].addEventListener("click",function(e){var t=e.keyCode||e.which;o.setTrack(this.value,void 0!==t)});for(var T=0,C=g.length;T<C;T++)g[T].addEventListener("click",function(e){var t=(0,I.siblings)(this,function(e){return"INPUT"===e.tagName})[0],n=(0,j.createEvent)("click",t);t.dispatchEvent(n),e.preventDefault()});o.captionsButton.addEventListener("keydown",function(e){e.stopPropagation()})}for(var k=0,_=h.length;k<_;k++)o.chaptersButton.addEventListener(h[k],function(){this.querySelector("."+i.options.classPrefix+"chapters-selector-list").children.length&&(0,I.removeClass)(this.querySelector("."+i.options.classPrefix+"chapters-selector"),i.options.classPrefix+"offscreen")});for(var N=0,A=v.length;N<A;N++)o.chaptersButton.addEventListener(v[N],function(){(0,I.addClass)(this.querySelector("."+i.options.classPrefix+"chapters-selector"),i.options.classPrefix+"offscreen")});o.chaptersButton.addEventListener("keydown",function(e){e.stopPropagation()}),o.options.alwaysShowControls?(0,I.addClass)(o.getElement(o.container).querySelector("."+i.options.classPrefix+"captions-position"),i.options.classPrefix+"captions-position-hover"):(o.getElement(o.container).addEventListener("controlsshown",function(){(0,I.addClass)(o.getElement(o.container).querySelector("."+i.options.classPrefix+"captions-position"),i.options.classPrefix+"captions-position-hover")}),o.getElement(o.container).addEventListener("controlshidden",function(){n.paused||(0,I.removeClass)(o.getElement(o.container).querySelector("."+i.options.classPrefix+"captions-position"),i.options.classPrefix+"captions-position-hover")})),n.addEventListener("timeupdate",function(){o.displayCaptions()}),""!==o.options.slidesSelector&&(o.slidesContainer=L.default.querySelectorAll(o.options.slidesSelector),n.addEventListener("timeupdate",function(){o.displaySlides()}))}},cleartracks:function(e){e&&(e.captions&&e.captions.remove(),e.chapters&&e.chapters.remove(),e.captionsText&&e.captionsText.remove(),e.captionsButton&&e.captionsButton.remove(),e.chaptersButton&&e.chaptersButton.remove())},rebuildtracks:function(){var e=this;e.findTracks(),e.buildtracks(e,e.getElement(e.controls),e.getElement(e.layers),e.media)},findTracks:function(){var e=this,t=null===e.trackFiles?e.node.querySelectorAll("track"):e.trackFiles,n=t.length;e.tracks=[];for(var o=0;o<n;o++){var i=t[o],r=i.getAttribute("srclang").toLowerCase()||"",a=e.id+"_track_"+o+"_"+i.getAttribute("kind")+"_"+r;e.tracks.push({trackId:a,srclang:r,src:i.getAttribute("src"),kind:i.getAttribute("kind"),label:i.getAttribute("label")||"",entries:[],isLoaded:!1})}},setTrack:function(e,t){for(var n=this,o=n.captionsButton.querySelectorAll('input[type="radio"]'),i=n.captionsButton.querySelectorAll("."+n.options.classPrefix+"captions-selected"),r=n.captionsButton.querySelector('input[value="'+e+'"]'),a=0,s=o.length;a<s;a++)o[a].checked=!1;for(var l=0,d=i.length;l<d;l++)(0,I.removeClass)(i[l],n.options.classPrefix+"captions-selected");r.checked=!0;for(var u=(0,I.siblings)(r,function(e){return(0,I.hasClass)(e,n.options.classPrefix+"captions-selector-label")}),c=0,f=u.length;c<f;c++)(0,I.addClass)(u[c],n.options.classPrefix+"captions-selected");if("none"===e)n.selectedTrack=null,(0,I.removeClass)(n.captionsButton,n.options.classPrefix+"captions-enabled");else for(var p=0,m=n.tracks.length;p<m;p++){var h=n.tracks[p];if(h.trackId===e){null===n.selectedTrack&&(0,I.addClass)(n.captionsButton,n.options.classPrefix+"captions-enabled"),n.selectedTrack=h,n.captions.setAttribute("lang",n.selectedTrack.srclang),n.displayCaptions();break}}var v=(0,j.createEvent)("captionschange",n.media);v.detail.caption=n.selectedTrack,n.media.dispatchEvent(v),t||setTimeout(function(){n.getElement(n.container).focus()},500)},loadNextTrack:function(){var e=this;e.trackToLoad++,e.trackToLoad<e.tracks.length?(e.isLoadingTrack=!0,e.loadTrack(e.trackToLoad)):(e.isLoadingTrack=!1,e.checkForTracks())},loadTrack:function(e){var t=this,n=t.tracks[e];void 0===n||void 0===n.src&&""===n.src||(0,I.ajax)(n.src,"text",function(e){n.entries="string"==typeof e&&/<tt\s+xml/gi.exec(e)?d.default.TrackFormatParser.dfxp.parse(e):d.default.TrackFormatParser.webvtt.parse(e),n.isLoaded=!0,t.enableTrackButton(n),t.loadNextTrack(),"slides"===n.kind?t.setupSlides(n):"chapters"!==n.kind||t.hasChapters||(t.drawChapters(n),t.hasChapters=!0)},function(){t.removeTrackButton(n.trackId),t.loadNextTrack()})},enableTrackButton:function(e){var t=this,n=e.srclang,o=L.default.getElementById(""+e.trackId);if(o){var i=e.label;""===i&&(i=F.default.t(d.default.language.codes[n])||n),o.disabled=!1;for(var r=(0,I.siblings)(o,function(e){return(0,I.hasClass)(e,t.options.classPrefix+"captions-selector-label")}),a=0,s=r.length;a<s;a++)r[a].innerHTML=i;if(t.options.startLanguage===n){o.checked=!0;var l=(0,j.createEvent)("click",o);o.dispatchEvent(l)}}},removeTrackButton:function(e){var t=L.default.getElementById(""+e);if(t){var n=t.closest("li");n&&n.remove()}},addTrackButton:function(e,t,n){var o=this;""===n&&(n=F.default.t(d.default.language.codes[t])||t),o.captionsButton.querySelector("ul").innerHTML+='<li class="'+o.options.classPrefix+'captions-selector-list-item"><input type="radio" class="'+o.options.classPrefix+'captions-selector-input" name="'+o.id+'_captions" id="'+e+'" value="'+e+'" disabled><label class="'+o.options.classPrefix+'captions-selector-label"for="'+e+'">'+n+" (loading)</label></li>"},checkForTracks:function(){var e=this,t=!1;if(e.options.hideCaptionsButtonWhenEmpty){for(var n=0,o=e.tracks.length;n<o;n++){var i=e.tracks[n].kind;if(("subtitles"===i||"captions"===i)&&e.tracks[n].isLoaded){t=!0;break}}e.captionsButton.style.display=t?"":"none",e.setControlsSize()}},displayCaptions:function(){if(void 0!==this.tracks){var e=this,t=e.selectedTrack;if(null!==t&&t.isLoaded){var n=e.searchTrackPosition(t.entries,e.media.currentTime);if(-1<n){var o=t.entries[n].text;return"function"==typeof e.options.captionTextPreprocessor&&(o=e.options.captionTextPreprocessor(o)),e.captionsText.innerHTML=function(e){var t=L.default.createElement("div");t.innerHTML=e;for(var n=t.getElementsByTagName("script"),o=n.length;o--;)n[o].remove();for(var i=t.getElementsByTagName("*"),r=0,a=i.length;r<a;r++)for(var s=i[r].attributes,l=Array.prototype.slice.call(s),d=0,u=l.length;d<u;d++)l[d].name.startsWith("on")||l[d].value.startsWith("javascript")?i[r].remove():"style"===l[d].name&&i[r].removeAttribute(l[d].name);return t.innerHTML}(o),e.captionsText.className=e.options.classPrefix+"captions-text "+(t.entries[n].identifier||""),e.captions.style.display="",void(e.captions.style.height="0px")}e.captions.style.display="none"}else e.captions.style.display="none"}},setupSlides:function(e){this.slides=e,this.slides.entries.imgs=[this.slides.entries.length],this.showSlide(0)},showSlide:function(e){var i=this,r=this;if(void 0!==r.tracks&&void 0!==r.slidesContainer){var t=r.slides.entries[e].text,n=r.slides.entries[e].imgs;if(void 0===n||void 0===n.fadeIn){var a=L.default.createElement("img");a.src=t,a.addEventListener("load",function(){var e=i,t=(0,I.siblings)(e,function(e){return t(e)});e.style.display="none",r.slidesContainer.innerHTML+=e.innerHTML,(0,I.fadeIn)(r.slidesContainer.querySelector(a));for(var n=0,o=t.length;n<o;n++)(0,I.fadeOut)(t[n],400)}),r.slides.entries[e].imgs=n=a}else if(!(0,I.visible)(n)){var o=(0,I.siblings)(self,function(e){return o(e)});(0,I.fadeIn)(r.slidesContainer.querySelector(n));for(var s=0,l=o.length;s<l;s++)(0,I.fadeOut)(o[s])}}},displaySlides:function(){if(void 0!==this.slides){var e=this.slides,t=this.searchTrackPosition(e.entries,this.media.currentTime);-1<t&&this.showSlide(t)}},drawChapters:function(e){var r=this,t=e.entries.length;if(t){r.chaptersButton.querySelector("ul").innerHTML="";for(var n=0;n<t;n++)r.chaptersButton.querySelector("ul").innerHTML+='<li class="'+r.options.classPrefix+'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="'+r.options.classPrefix+'captions-selector-input" name="'+r.id+'_chapters" id="'+r.id+"_chapters_"+n+'" value="'+e.entries[n].start+'" disabled><label class="'+r.options.classPrefix+'chapters-selector-label"for="'+r.id+"_chapters_"+n+'">'+e.entries[n].text+"</label></li>";for(var o=r.chaptersButton.querySelectorAll('input[type="radio"]'),i=r.chaptersButton.querySelectorAll("."+r.options.classPrefix+"chapters-selector-label"),a=0,s=o.length;a<s;a++)o[a].disabled=!1,o[a].checked=!1,o[a].addEventListener("click",function(e){var t=r.chaptersButton.querySelectorAll("li"),n=(0,I.siblings)(this,function(e){return(0,I.hasClass)(e,r.options.classPrefix+"chapters-selector-label")})[0];this.checked=!0,this.parentNode.setAttribute("aria-checked",!0),(0,I.addClass)(n,r.options.classPrefix+"chapters-selected"),(0,I.removeClass)(r.chaptersButton.querySelector("."+r.options.classPrefix+"chapters-selected"),r.options.classPrefix+"chapters-selected");for(var o=0,i=t.length;o<i;o++)t[o].setAttribute("aria-checked",!1);void 0===(e.keyCode||e.which)&&setTimeout(function(){r.getElement(r.container).focus()},500),r.media.setCurrentTime(parseFloat(this.value)),r.media.paused&&r.media.play()});for(var l=0,d=i.length;l<d;l++)i[l].addEventListener("click",function(e){var t=(0,I.siblings)(this,function(e){return"INPUT"===e.tagName})[0],n=(0,j.createEvent)("click",t);t.dispatchEvent(n),e.preventDefault()})}},searchTrackPosition:function(e,t){for(var n=0,o=e.length-1,i=void 0,r=void 0,a=void 0;n<=o;){if(r=e[i=n+o>>1].start,a=e[i].stop,r<=t&&t<a)return i;r<t?n=i+1:t<r&&(o=i-1)}return-1}}),d.default.language={codes:{af:"mejs.afrikaans",sq:"mejs.albanian",ar:"mejs.arabic",be:"mejs.belarusian",bg:"mejs.bulgarian",ca:"mejs.catalan",zh:"mejs.chinese","zh-cn":"mejs.chinese-simplified","zh-tw":"mejs.chines-traditional",hr:"mejs.croatian",cs:"mejs.czech",da:"mejs.danish",nl:"mejs.dutch",en:"mejs.english",et:"mejs.estonian",fl:"mejs.filipino",fi:"mejs.finnish",fr:"mejs.french",gl:"mejs.galician",de:"mejs.german",el:"mejs.greek",ht:"mejs.haitian-creole",iw:"mejs.hebrew",hi:"mejs.hindi",hu:"mejs.hungarian",is:"mejs.icelandic",id:"mejs.indonesian",ga:"mejs.irish",it:"mejs.italian",ja:"mejs.japanese",ko:"mejs.korean",lv:"mejs.latvian",lt:"mejs.lithuanian",mk:"mejs.macedonian",ms:"mejs.malay",mt:"mejs.maltese",no:"mejs.norwegian",fa:"mejs.persian",pl:"mejs.polish",pt:"mejs.portuguese",ro:"mejs.romanian",ru:"mejs.russian",sr:"mejs.serbian",sk:"mejs.slovak",sl:"mejs.slovenian",es:"mejs.spanish",sw:"mejs.swahili",sv:"mejs.swedish",tl:"mejs.tagalog",th:"mejs.thai",tr:"mejs.turkish",uk:"mejs.ukrainian",vi:"mejs.vietnamese",cy:"mejs.welsh",yi:"mejs.yiddish"}},d.default.TrackFormatParser={webvtt:{pattern:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(e){for(var t=e.split(/\r?\n/),n=[],o=void 0,i=void 0,r=void 0,a=0,s=t.length;a<s;a++){if((o=this.pattern.exec(t[a]))&&a<t.length){for(0<=a-1&&""!==t[a-1]&&(r=t[a-1]),i=t[++a],a++;""!==t[a]&&a<t.length;)i=i+"\n"+t[a],a++;i=null===i?"":i.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),n.push({identifier:r,start:0===(0,m.convertSMPTEtoSeconds)(o[1])?.2:(0,m.convertSMPTEtoSeconds)(o[1]),stop:(0,m.convertSMPTEtoSeconds)(o[3]),text:i,settings:o[5]})}r=""}return n}},dfxp:{parse:function(e){var t=(e=$(e).filter("tt")).firstChild,n=t.querySelectorAll("p"),o=e.getElementById(""+t.attr("style")),i=[],r=void 0;if(o.length){o.removeAttribute("id");var a=o.attributes;if(a.length){r={};for(var s=0,l=a.length;s<l;s++)r[a[s].name.split(":")[1]]=a[s].value}}for(var d=0,u=n.length;d<u;d++){var c=void 0,f={start:null,stop:null,style:null,text:null};if(n.eq(d).attr("begin")&&(f.start=(0,m.convertSMPTEtoSeconds)(n.eq(d).attr("begin"))),!f.start&&n.eq(d-1).attr("end")&&(f.start=(0,m.convertSMPTEtoSeconds)(n.eq(d-1).attr("end"))),n.eq(d).attr("end")&&(f.stop=(0,m.convertSMPTEtoSeconds)(n.eq(d).attr("end"))),!f.stop&&n.eq(d+1).attr("begin")&&(f.stop=(0,m.convertSMPTEtoSeconds)(n.eq(d+1).attr("begin"))),r)for(var p in c="",r)c+=p+":"+r[p]+";";c&&(f.style=c),0===f.start&&(f.start=.2),f.text=n.eq(d).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),i.push(f)}return i}}}},{16:16,2:2,26:26,27:27,30:30,5:5,7:7}],14:[function(e,t,n){"use strict";var x=r(e(2)),o=e(16),i=r(o),w=r(e(5)),P=e(25),T=e(27),C=e(26);function r(e){return e&&e.__esModule?e:{default:e}}Object.assign(o.config,{muteText:null,unmuteText:null,allyVolumeControlText:null,hideVolumeOnTouchDevices:!0,audioVolume:"horizontal",videoVolume:"vertical",startVolume:.8}),Object.assign(i.default.prototype,{buildvolume:function(e,t,n,o){if(!P.IS_ANDROID&&!P.IS_IOS||!this.options.hideVolumeOnTouchDevices){var a=this,s=a.isVideo?a.options.videoVolume:a.options.audioVolume,r=(0,T.isString)(a.options.muteText)?a.options.muteText:w.default.t("mejs.mute"),l=(0,T.isString)(a.options.unmuteText)?a.options.unmuteText:w.default.t("mejs.unmute"),i=(0,T.isString)(a.options.allyVolumeControlText)?a.options.allyVolumeControlText:w.default.t("mejs.volume-help-text"),d=x.default.createElement("div");if(d.className=a.options.classPrefix+"button "+a.options.classPrefix+"volume-button "+a.options.classPrefix+"mute",d.innerHTML="horizontal"===s?'<button type="button" aria-controls="'+a.id+'" title="'+r+'" aria-label="'+r+'" tabindex="0"></button>':'<button type="button" aria-controls="'+a.id+'" title="'+r+'" aria-label="'+r+'" tabindex="0"></button><a href="javascript:void(0);" class="'+a.options.classPrefix+'volume-slider" aria-label="'+w.default.t("mejs.volume-slider")+'" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="'+a.options.classPrefix+'offscreen">'+i+'</span><div class="'+a.options.classPrefix+'volume-total"><div class="'+a.options.classPrefix+'volume-current"></div><div class="'+a.options.classPrefix+'volume-handle"></div></div></a>',a.addControlElement(d,"volume"),a.options.keyActions.push({keys:[38],action:function(e){var t=e.getElement(e.container).querySelector("."+a.options.classPrefix+"volume-slider");t&&t.matches(":focus")&&(t.style.display="block"),e.isVideo&&(e.showControls(),e.startControlsTimer());var n=Math.min(e.volume+.1,1);e.setVolume(n),0<n&&e.setMuted(!1)}},{keys:[40],action:function(e){var t=e.getElement(e.container).querySelector("."+a.options.classPrefix+"volume-slider");t&&(t.style.display="block"),e.isVideo&&(e.showControls(),e.startControlsTimer());var n=Math.max(e.volume-.1,0);e.setVolume(n),n<=.1&&e.setMuted(!0)}},{keys:[77],action:function(e){var t=e.getElement(e.container).querySelector("."+a.options.classPrefix+"volume-slider");t&&(t.style.display="block"),e.isVideo&&(e.showControls(),e.startControlsTimer()),e.media.muted?e.setMuted(!1):e.setMuted(!0)}}),"horizontal"===s){var u=x.default.createElement("a");u.className=a.options.classPrefix+"horizontal-volume-slider",u.href="javascript:void(0);",u.setAttribute("aria-label",w.default.t("mejs.volume-slider")),u.setAttribute("aria-valuemin",0),u.setAttribute("aria-valuemax",100),u.setAttribute("aria-valuenow",100),u.setAttribute("role","slider"),u.innerHTML+='<span class="'+a.options.classPrefix+'offscreen">'+i+'</span><div class="'+a.options.classPrefix+'horizontal-volume-total"><div class="'+a.options.classPrefix+'horizontal-volume-current"></div><div class="'+a.options.classPrefix+'horizontal-volume-handle"></div></div>',d.parentNode.insertBefore(u,d.nextSibling)}var c=!1,f=!1,p=!1,m="vertical"===s?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-slider"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-slider"),h="vertical"===s?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-total"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-total"),v="vertical"===s?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-current"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-current"),g="vertical"===s?a.getElement(a.container).querySelector("."+a.options.classPrefix+"volume-handle"):a.getElement(a.container).querySelector("."+a.options.classPrefix+"horizontal-volume-handle"),y=function(e){if(null!==e&&!isNaN(e)&&void 0!==e){if(e=Math.max(0,e),0===(e=Math.min(e,1))){(0,C.removeClass)(d,a.options.classPrefix+"mute"),(0,C.addClass)(d,a.options.classPrefix+"unmute");var t=d.firstElementChild;t.setAttribute("title",l),t.setAttribute("aria-label",l)}else{(0,C.removeClass)(d,a.options.classPrefix+"unmute"),(0,C.addClass)(d,a.options.classPrefix+"mute");var n=d.firstElementChild;n.setAttribute("title",r),n.setAttribute("aria-label",r)}var o=100*e+"%",i=getComputedStyle(g);"vertical"===s?(v.style.bottom=0,v.style.height=o,g.style.bottom=o,g.style.marginBottom=-parseFloat(i.height)/2+"px"):(v.style.left=0,v.style.width=o,g.style.left=o,g.style.marginLeft=-parseFloat(i.width)/2+"px")}},E=function(e){var t=(0,C.offset)(h),n=getComputedStyle(h);p=!0;var o=null;if("vertical"===s){var i=parseFloat(n.height);if(o=(i-(e.pageY-t.top))/i,0===t.top||0===t.left)return}else{var r=parseFloat(n.width);o=(e.pageX-t.left)/r}o=Math.max(0,o),o=Math.min(o,1),y(o),a.setMuted(0===o),a.setVolume(o),e.preventDefault(),e.stopPropagation()},b=function(){a.muted?(y(0),(0,C.removeClass)(d,a.options.classPrefix+"mute"),(0,C.addClass)(d,a.options.classPrefix+"unmute")):(y(o.volume),(0,C.removeClass)(d,a.options.classPrefix+"unmute"),(0,C.addClass)(d,a.options.classPrefix+"mute"))};e.getElement(e.container).addEventListener("keydown",function(e){!!e.target.closest("."+a.options.classPrefix+"container")||"vertical"!==s||(m.style.display="none")}),d.addEventListener("mouseenter",function(e){e.target===d&&(m.style.display="block",f=!0,e.preventDefault(),e.stopPropagation())}),d.addEventListener("focusin",function(){m.style.display="block",f=!0}),d.addEventListener("focusout",function(e){e.relatedTarget&&(!e.relatedTarget||e.relatedTarget.matches("."+a.options.classPrefix+"volume-slider"))||"vertical"!==s||(m.style.display="none")}),d.addEventListener("mouseleave",function(){f=!1,c||"vertical"!==s||(m.style.display="none")}),d.addEventListener("focusout",function(){f=!1}),d.addEventListener("keydown",function(e){if(a.options.enableKeyboard&&a.options.keyActions.length){var t=e.which||e.keyCode||0,n=o.volume;switch(t){case 38:n=Math.min(n+.1,1);break;case 40:n=Math.max(0,n-.1);break;default:return!0}c=!1,y(n),o.setVolume(n),e.preventDefault(),e.stopPropagation()}}),d.querySelector("button").addEventListener("click",function(){o.setMuted(!o.muted);var e=(0,T.createEvent)("volumechange",o);o.dispatchEvent(e)}),m.addEventListener("dragstart",function(){return!1}),m.addEventListener("mouseover",function(){f=!0}),m.addEventListener("focusin",function(){m.style.display="block",f=!0}),m.addEventListener("focusout",function(){f=!1,c||"vertical"!==s||(m.style.display="none")}),m.addEventListener("mousedown",function(e){E(e),a.globalBind("mousemove.vol",function(e){var t=e.target;c&&(t===m||t.closest("vertical"===s?"."+a.options.classPrefix+"volume-slider":"."+a.options.classPrefix+"horizontal-volume-slider"))&&E(e)}),a.globalBind("mouseup.vol",function(){c=!1,f||"vertical"!==s||(m.style.display="none")}),c=!0,e.preventDefault(),e.stopPropagation()}),o.addEventListener("volumechange",function(e){var t;c||b(),t=Math.floor(100*o.volume),m.setAttribute("aria-valuenow",t),m.setAttribute("aria-valuetext",t+"%")});var S=!1;o.addEventListener("rendererready",function(){p||setTimeout(function(){S=!0,(0===e.options.startVolume||o.originalNode.muted)&&(o.setMuted(!0),e.options.startVolume=0),o.setVolume(e.options.startVolume),a.setControlsSize()},250)}),o.addEventListener("loadedmetadata",function(){setTimeout(function(){p||S||((0===e.options.startVolume||o.originalNode.muted)&&o.setMuted(!0),o.setVolume(e.options.startVolume),a.setControlsSize()),S=!1},250)}),(0===e.options.startVolume||o.originalNode.muted)&&(o.setMuted(!0),e.options.startVolume=0,b()),a.getElement(a.container).addEventListener("controlsresize",function(){b()})}}})},{16:16,2:2,25:25,26:26,27:27,5:5}],15:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.EN={"mejs.plural-form":1,"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}},{}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.config=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),S=r(e(3)),x=r(e(2)),f=r(e(7)),d=r(e(6)),a=r(e(17)),u=r(e(5)),w=e(25),m=e(27),c=e(30),p=e(28),P=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(e(26));function r(e){return e&&e.__esModule?e:{default:e}}f.default.mepIndex=0,f.default.players={};var s=n.config={poster:"",showPosterWhenEnded:!1,showPosterWhenPaused:!1,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:40,defaultSeekBackwardInterval:function(e){return.05*e.getDuration()},defaultSeekForwardInterval:function(e){return.05*e.getDuration()},setDimensions:!0,audioWidth:-1,audioHeight:-1,loop:!1,autoRewind:!0,enableAutosize:!0,timeFormat:"",alwaysShowHours:!1,showTimecodeFrameCount:!1,framesPerSecond:25,alwaysShowControls:!1,hideVideoControlsOnLoad:!1,hideVideoControlsOnPause:!1,clickToPlayPause:!0,controlsTimeoutDefault:1500,controlsTimeoutMouseEnter:2500,controlsTimeoutMouseLeave:1e3,iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],useDefaultControls:!1,isVideo:!0,stretching:"auto",classPrefix:"mejs__",enableKeyboard:!0,pauseOtherPlayers:!0,secondsDecimalLength:0,customError:null,keyActions:[{keys:[32,179],action:function(e){w.IS_FIREFOX||(e.paused||e.ended?e.play():e.pause())}}]};f.default.MepDefaults=s;var l=function(){function r(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var n=this,o="string"==typeof e?x.default.getElementById(e):e;if(!(n instanceof r))return new r(o,t);if(n.node=n.media=o,n.node){if(n.media.player)return n.media.player;if(n.hasFocus=!1,n.controlsAreVisible=!0,n.controlsEnabled=!0,n.controlsTimer=null,n.currentMediaTime=0,n.proxy=null,void 0===t){var i=n.node.getAttribute("data-mejsoptions");t=i?JSON.parse(i):{}}return n.options=Object.assign({},s,t),n.options.loop&&!n.media.getAttribute("loop")?(n.media.loop=!0,n.node.loop=!0):n.media.loop&&(n.options.loop=!0),n.options.timeFormat||(n.options.timeFormat="mm:ss",n.options.alwaysShowHours&&(n.options.timeFormat="hh:mm:ss"),n.options.showTimecodeFrameCount&&(n.options.timeFormat+=":ff")),(0,c.calculateTimeFormat)(0,n.options,n.options.framesPerSecond||25),n.id="mep_"+f.default.mepIndex++,(f.default.players[n.id]=n).init(),n}}return o(r,[{key:"getElement",value:function(e){return e}},{key:"init",value:function(){var n=this,e=Object.assign({},n.options,{success:function(e,t){n._meReady(e,t)},error:function(e){n._handleError(e)}}),t=n.node.tagName.toLowerCase();if(n.isDynamic="audio"!==t&&"video"!==t&&"iframe"!==t,n.isVideo=n.isDynamic?n.options.isVideo:"audio"!==t&&n.options.isVideo,n.mediaFiles=null,n.trackFiles=null,w.IS_IPAD&&n.options.iPadUseNativeControls||w.IS_IPHONE&&n.options.iPhoneUseNativeControls)n.node.setAttribute("controls",!0),w.IS_IPAD&&n.node.getAttribute("autoplay")&&n.play();else if(!n.isVideo&&(n.isVideo||!n.options.features.length&&!n.options.useDefaultControls)||w.IS_ANDROID&&n.options.AndroidUseNativeControls)n.isVideo||n.options.features.length||n.options.useDefaultControls||(n.node.style.display="none");else{n.node.removeAttribute("controls");var o=n.isVideo?u.default.t("mejs.video-player"):u.default.t("mejs.audio-player"),i=x.default.createElement("span");if(i.className=n.options.classPrefix+"offscreen",i.innerText=o,n.media.parentNode.insertBefore(i,n.media),n.container=x.default.createElement("div"),n.getElement(n.container).id=n.id,n.getElement(n.container).className=n.options.classPrefix+"container "+n.options.classPrefix+"container-keyboard-inactive "+n.media.className,n.getElement(n.container).tabIndex=0,n.getElement(n.container).setAttribute("role","application"),n.getElement(n.container).setAttribute("aria-label",o),n.getElement(n.container).innerHTML='<div class="'+n.options.classPrefix+'inner"><div class="'+n.options.classPrefix+'mediaelement"></div><div class="'+n.options.classPrefix+'layers"></div><div class="'+n.options.classPrefix+'controls"></div></div>',n.getElement(n.container).addEventListener("focus",function(e){if(!n.controlsAreVisible&&!n.hasFocus&&n.controlsEnabled){n.showControls(!0);var t=(0,m.isNodeAfter)(e.relatedTarget,n.getElement(n.container))?"."+n.options.classPrefix+"controls ."+n.options.classPrefix+"button:last-child > button":"."+n.options.classPrefix+"playpause-button > button";n.getElement(n.container).querySelector(t).focus()}}),n.node.parentNode.insertBefore(n.getElement(n.container),n.node),n.options.features.length||n.options.useDefaultControls||(n.getElement(n.container).style.background="transparent",n.getElement(n.container).querySelector("."+n.options.classPrefix+"controls").style.display="none"),n.isVideo&&"fill"===n.options.stretching&&!P.hasClass(n.getElement(n.container).parentNode,n.options.classPrefix+"fill-container")){n.outerContainer=n.media.parentNode;var r=x.default.createElement("div");r.className=n.options.classPrefix+"fill-container",n.getElement(n.container).parentNode.insertBefore(r,n.getElement(n.container)),r.appendChild(n.getElement(n.container))}w.IS_ANDROID&&P.addClass(n.getElement(n.container),n.options.classPrefix+"android"),w.IS_IOS&&P.addClass(n.getElement(n.container),n.options.classPrefix+"ios"),w.IS_IPAD&&P.addClass(n.getElement(n.container),n.options.classPrefix+"ipad"),w.IS_IPHONE&&P.addClass(n.getElement(n.container),n.options.classPrefix+"iphone"),P.addClass(n.getElement(n.container),n.isVideo?n.options.classPrefix+"video":n.options.classPrefix+"audio"),n.getElement(n.container).querySelector("."+n.options.classPrefix+"mediaelement").appendChild(n.node),(n.media.player=n).controls=n.getElement(n.container).querySelector("."+n.options.classPrefix+"controls"),n.layers=n.getElement(n.container).querySelector("."+n.options.classPrefix+"layers");var a=n.isVideo?"video":"audio",s=a.substring(0,1).toUpperCase()+a.substring(1);0<n.options[a+"Width"]||-1<n.options[a+"Width"].toString().indexOf("%")?n.width=n.options[a+"Width"]:""!==n.node.style.width&&null!==n.node.style.width?n.width=n.node.style.width:n.node.getAttribute("width")?n.width=n.node.getAttribute("width"):n.width=n.options["default"+s+"Width"],0<n.options[a+"Height"]||-1<n.options[a+"Height"].toString().indexOf("%")?n.height=n.options[a+"Height"]:""!==n.node.style.height&&null!==n.node.style.height?n.height=n.node.style.height:n.node.getAttribute("height")?n.height=n.node.getAttribute("height"):n.height=n.options["default"+s+"Height"],n.initialAspectRatio=n.height>=n.width?n.width/n.height:n.height/n.width,n.setPlayerSize(n.width,n.height),e.pluginWidth=n.width,e.pluginHeight=n.height}if(f.default.MepDefaults=e,new d.default(n.media,e,n.mediaFiles),void 0!==n.getElement(n.container)&&n.options.features.length&&n.controlsAreVisible&&!n.options.hideVideoControlsOnLoad){var l=(0,m.createEvent)("controlsshown",n.getElement(n.container));n.getElement(n.container).dispatchEvent(l)}}},{key:"showControls",value:function(e){var i=this;if(e=void 0===e||e,!i.controlsAreVisible&&i.isVideo){if(e)!function(){P.fadeIn(i.getElement(i.controls),200,function(){P.removeClass(i.getElement(i.controls),i.options.classPrefix+"offscreen");var e=(0,m.createEvent)("controlsshown",i.getElement(i.container));i.getElement(i.container).dispatchEvent(e)});for(var n=i.getElement(i.container).querySelectorAll("."+i.options.classPrefix+"control"),e=function(e,t){P.fadeIn(n[e],200,function(){P.removeClass(n[e],i.options.classPrefix+"offscreen")})},t=0,o=n.length;t<o;t++)e(t)}();else{P.removeClass(i.getElement(i.controls),i.options.classPrefix+"offscreen"),i.getElement(i.controls).style.display="",i.getElement(i.controls).style.opacity=1;for(var t=i.getElement(i.container).querySelectorAll("."+i.options.classPrefix+"control"),n=0,o=t.length;n<o;n++)P.removeClass(t[n],i.options.classPrefix+"offscreen"),t[n].style.display="";var r=(0,m.createEvent)("controlsshown",i.getElement(i.container));i.getElement(i.container).dispatchEvent(r)}i.controlsAreVisible=!0,i.setControlsSize()}}},{key:"hideControls",value:function(e,t){var i=this;if(e=void 0===e||e,!0===t||!(!i.controlsAreVisible||i.options.alwaysShowControls||i.paused&&4===i.readyState&&(!i.options.hideVideoControlsOnLoad&&i.currentTime<=0||!i.options.hideVideoControlsOnPause&&0<i.currentTime)||i.isVideo&&!i.options.hideVideoControlsOnLoad&&!i.readyState||i.ended)){if(e)!function(){P.fadeOut(i.getElement(i.controls),200,function(){P.addClass(i.getElement(i.controls),i.options.classPrefix+"offscreen"),i.getElement(i.controls).style.display="";var e=(0,m.createEvent)("controlshidden",i.getElement(i.container));i.getElement(i.container).dispatchEvent(e)});for(var n=i.getElement(i.container).querySelectorAll("."+i.options.classPrefix+"control"),e=function(e,t){P.fadeOut(n[e],200,function(){P.addClass(n[e],i.options.classPrefix+"offscreen"),n[e].style.display=""})},t=0,o=n.length;t<o;t++)e(t)}();else{P.addClass(i.getElement(i.controls),i.options.classPrefix+"offscreen"),i.getElement(i.controls).style.display="",i.getElement(i.controls).style.opacity=0;for(var n=i.getElement(i.container).querySelectorAll("."+i.options.classPrefix+"control"),o=0,r=n.length;o<r;o++)P.addClass(n[o],i.options.classPrefix+"offscreen"),n[o].style.display="";var a=(0,m.createEvent)("controlshidden",i.getElement(i.container));i.getElement(i.container).dispatchEvent(a)}i.controlsAreVisible=!1}}},{key:"startControlsTimer",value:function(e){var t=this;e=void 0!==e?e:t.options.controlsTimeoutDefault,t.killControlsTimer("start"),t.controlsTimer=setTimeout(function(){t.hideControls(),t.killControlsTimer("hide")},e)}},{key:"killControlsTimer",value:function(){null!==this.controlsTimer&&(clearTimeout(this.controlsTimer),delete this.controlsTimer,this.controlsTimer=null)}},{key:"disableControls",value:function(){this.killControlsTimer(),this.controlsEnabled=!1,this.hideControls(!1,!0)}},{key:"enableControls",value:function(){this.controlsEnabled=!0,this.showControls(!1)}},{key:"_setDefaultPlayer",value:function(){var e=this;e.proxy&&e.proxy.pause(),e.proxy=new a.default(e),e.media.addEventListener("loadedmetadata",function(){0<e.getCurrentTime()&&0<e.currentMediaTime&&(e.setCurrentTime(e.currentMediaTime),w.IS_IOS||w.IS_ANDROID||e.play())})}},{key:"_meReady",value:function(e,t){var n=this,o=t.getAttribute("autoplay"),i=!(null==o||"false"===o),r=null!==e.rendererName&&/(native|html5)/i.test(n.media.rendererName);if(n.getElement(n.controls)&&n.enableControls(),n.getElement(n.container)&&n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-play")&&(n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-play").style.display=""),!n.created){if(n.created=!0,n.media=e,n.domNode=t,!(w.IS_ANDROID&&n.options.AndroidUseNativeControls||w.IS_IPAD&&n.options.iPadUseNativeControls||w.IS_IPHONE&&n.options.iPhoneUseNativeControls)){if(!n.isVideo&&!n.options.features.length&&!n.options.useDefaultControls)return i&&r&&n.play(),void(n.options.success&&("string"==typeof n.options.success?S.default[n.options.success](n.media,n.domNode,n):n.options.success(n.media,n.domNode,n)));if(n.featurePosition={},n._setDefaultPlayer(),n.buildposter(n,n.getElement(n.controls),n.getElement(n.layers),n.media),n.buildkeyboard(n,n.getElement(n.controls),n.getElement(n.layers),n.media),n.buildoverlays(n,n.getElement(n.controls),n.getElement(n.layers),n.media),n.options.useDefaultControls){var a=["playpause","current","progress","duration","tracks","volume","fullscreen"];n.options.features=a.concat(n.options.features.filter(function(e){return-1===a.indexOf(e)}))}n.buildfeatures(n,n.getElement(n.controls),n.getElement(n.layers),n.media);var s=(0,m.createEvent)("controlsready",n.getElement(n.container));n.getElement(n.container).dispatchEvent(s),n.setPlayerSize(n.width,n.height),n.setControlsSize(),n.isVideo&&(n.clickToPlayPauseCallback=function(){if(n.options.clickToPlayPause){var e=n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-button"),t=e.getAttribute("aria-pressed");n.paused&&t?n.pause():n.paused?n.play():n.pause(),e.setAttribute("aria-pressed",!t),n.getElement(n.container).focus()}},n.createIframeLayer(),n.media.addEventListener("click",n.clickToPlayPauseCallback),!w.IS_ANDROID&&!w.IS_IOS||n.options.alwaysShowControls?(n.getElement(n.container).addEventListener("mouseenter",function(){n.controlsEnabled&&(n.options.alwaysShowControls||(n.killControlsTimer("enter"),n.showControls(),n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))}),n.getElement(n.container).addEventListener("mousemove",function(){n.controlsEnabled&&(n.controlsAreVisible||n.showControls(),n.options.alwaysShowControls||n.startControlsTimer(n.options.controlsTimeoutMouseEnter))}),n.getElement(n.container).addEventListener("mouseleave",function(){n.controlsEnabled&&(n.paused||n.options.alwaysShowControls||n.startControlsTimer(n.options.controlsTimeoutMouseLeave))})):n.node.addEventListener("touchstart",function(){n.controlsAreVisible?n.hideControls(!1):n.controlsEnabled&&n.showControls(!1)},!!w.SUPPORT_PASSIVE_EVENT&&{passive:!0}),n.options.hideVideoControlsOnLoad&&n.hideControls(!1),n.options.enableAutosize&&n.media.addEventListener("loadedmetadata",function(e){var t=void 0!==e?e.detail.target||e.target:n.media;n.options.videoHeight<=0&&!n.domNode.getAttribute("height")&&!n.domNode.style.height&&null!==t&&!isNaN(t.videoHeight)&&(n.setPlayerSize(t.videoWidth,t.videoHeight),n.setControlsSize(),n.media.setSize(t.videoWidth,t.videoHeight))})),n.media.addEventListener("play",function(){for(var e in n.hasFocus=!0,f.default.players)if(f.default.players.hasOwnProperty(e)){var t=f.default.players[e];t.id===n.id||!n.options.pauseOtherPlayers||t.paused||t.ended||!0===t.options.ignorePauseOtherPlayersOption||(t.pause(),t.hasFocus=!1)}w.IS_ANDROID||w.IS_IOS||n.options.alwaysShowControls||!n.isVideo||n.hideControls()}),n.media.addEventListener("ended",function(){if(n.options.autoRewind)try{n.setCurrentTime(0),setTimeout(function(){var e=n.getElement(n.container).querySelector("."+n.options.classPrefix+"overlay-loading");e&&e.parentNode&&(e.parentNode.style.display="none")},20)}catch(e){}"function"==typeof n.media.renderer.stop?n.media.renderer.stop():n.pause(),n.setProgressRail&&n.setProgressRail(),n.setCurrentRail&&n.setCurrentRail(),n.options.loop?n.play():!n.options.alwaysShowControls&&n.controlsEnabled&&n.showControls()}),n.media.addEventListener("loadedmetadata",function(){(0,c.calculateTimeFormat)(n.getDuration(),n.options,n.options.framesPerSecond||25),n.updateDuration&&n.updateDuration(),n.updateCurrent&&n.updateCurrent(),n.isFullScreen||(n.setPlayerSize(n.width,n.height),n.setControlsSize())});var l=null;n.media.addEventListener("timeupdate",function(){isNaN(n.getDuration())||l===n.getDuration()||(l=n.getDuration(),(0,c.calculateTimeFormat)(l,n.options,n.options.framesPerSecond||25),n.updateDuration&&n.updateDuration(),n.updateCurrent&&n.updateCurrent(),n.setControlsSize())}),n.getElement(n.container).addEventListener("click",function(e){P.addClass(e.currentTarget,n.options.classPrefix+"container-keyboard-inactive")}),n.getElement(n.container).addEventListener("focusin",function(e){P.removeClass(e.currentTarget,n.options.classPrefix+"container-keyboard-inactive"),!n.isVideo||w.IS_ANDROID||w.IS_IOS||!n.controlsEnabled||n.options.alwaysShowControls||(n.killControlsTimer("enter"),n.showControls(),n.startControlsTimer(n.options.controlsTimeoutMouseEnter))}),n.getElement(n.container).addEventListener("focusout",function(e){setTimeout(function(){e.relatedTarget&&n.keyboardAction&&!e.relatedTarget.closest("."+n.options.classPrefix+"container")&&(n.keyboardAction=!1,!n.isVideo||n.options.alwaysShowControls||n.paused||n.startControlsTimer(n.options.controlsTimeoutMouseLeave))},0)}),setTimeout(function(){n.setPlayerSize(n.width,n.height),n.setControlsSize()},0),n.globalResizeCallback=function(){n.isFullScreen||w.HAS_TRUE_NATIVE_FULLSCREEN&&x.default.webkitIsFullScreen||n.setPlayerSize(n.width,n.height),n.setControlsSize()},n.globalBind("resize",n.globalResizeCallback)}i&&r&&n.play(),n.options.success&&("string"==typeof n.options.success?S.default[n.options.success](n.media,n.domNode,n):n.options.success(n.media,n.domNode,n))}}},{key:"_handleError",value:function(e,t,n){var o=this,i=o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-play");i&&(i.style.display="none"),o.options.error&&o.options.error(e,t,n),o.getElement(o.container).querySelector("."+o.options.classPrefix+"cannotplay")&&o.getElement(o.container).querySelector("."+o.options.classPrefix+"cannotplay").remove();var r=x.default.createElement("div");r.className=o.options.classPrefix+"cannotplay",r.style.width="100%",r.style.height="100%";var a="function"==typeof o.options.customError?o.options.customError(o.media,o.media.originalNode):o.options.customError,s="";if(!a){var l=o.media.originalNode.getAttribute("poster");if(l&&(s='<img src="'+l+'" alt="'+f.default.i18n.t("mejs.download-file")+'">'),e.message&&(a="<p>"+e.message+"</p>"),e.urls)for(var d=0,u=e.urls.length;d<u;d++){var c=e.urls[d];a+='<a href="'+c.src+'" data-type="'+c.type+'"><span>'+f.default.i18n.t("mejs.download-file")+": "+c.src+"</span></a>"}}a&&o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-error")&&(r.innerHTML=a,o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-error").innerHTML=""+s+r.outerHTML,o.getElement(o.layers).querySelector("."+o.options.classPrefix+"overlay-error").parentNode.style.display="block"),o.controlsEnabled&&o.disableControls()}},{key:"setPlayerSize",value:function(e,t){var n=this;if(!n.options.setDimensions)return!1;switch(void 0!==e&&(n.width=e),void 0!==t&&(n.height=t),n.options.stretching){case"fill":n.isVideo?n.setFillMode():n.setDimensions(n.width,n.height);break;case"responsive":n.setResponsiveMode();break;case"none":n.setDimensions(n.width,n.height);break;default:!0===n.hasFluidMode()?n.setResponsiveMode():n.setDimensions(n.width,n.height)}}},{key:"hasFluidMode",value:function(){var e=this;return-1!==e.height.toString().indexOf("%")||e.node&&e.node.style.maxWidth&&"none"!==e.node.style.maxWidth&&e.node.style.maxWidth!==e.width||e.node&&e.node.currentStyle&&"100%"===e.node.currentStyle.maxWidth}},{key:"setResponsiveMode",value:function(){var e,o=this,t=function(){for(var t=void 0,n=o.getElement(o.container);n;){try{if(w.IS_FIREFOX&&"html"===n.tagName.toLowerCase()&&S.default.self!==S.default.top&&null!==S.default.frameElement)return S.default.frameElement;t=n.parentElement}catch(e){t=n.parentElement}if(t&&P.visible(t))return t;n=t}return null}(),n=t?getComputedStyle(t,null):getComputedStyle(x.default.body,null),i=o.isVideo?o.node.videoWidth&&0<o.node.videoWidth?o.node.videoWidth:o.node.getAttribute("width")?o.node.getAttribute("width"):o.options.defaultVideoWidth:o.options.defaultAudioWidth,r=o.isVideo?o.node.videoHeight&&0<o.node.videoHeight?o.node.videoHeight:o.node.getAttribute("height")?o.node.getAttribute("height"):o.options.defaultVideoHeight:o.options.defaultAudioHeight,a=(e=1,o.isVideo&&(e=o.node.videoWidth&&0<o.node.videoWidth&&o.node.videoHeight&&0<o.node.videoHeight?o.height>=o.width?o.node.videoWidth/o.node.videoHeight:o.node.videoHeight/o.node.videoWidth:o.initialAspectRatio,(isNaN(e)||e<.01||100<e)&&(e=1)),e),s=parseFloat(n.height),l=void 0,d=parseFloat(n.width);if(l=o.isVideo?"100%"===o.height?parseFloat(d*r/i,10):o.height>=o.width?parseFloat(d/a,10):parseFloat(d*a,10):r,isNaN(l)&&(l=s),0<o.getElement(o.container).parentNode.length&&"body"===o.getElement(o.container).parentNode.tagName.toLowerCase()&&(d=S.default.innerWidth||x.default.documentElement.clientWidth||x.default.body.clientWidth,l=S.default.innerHeight||x.default.documentElement.clientHeight||x.default.body.clientHeight),l&&d){o.getElement(o.container).style.width=d+"px",o.getElement(o.container).style.height=l+"px",o.node.style.width="100%",o.node.style.height="100%",o.isVideo&&o.media.setSize&&o.media.setSize(d,l);for(var u=o.getElement(o.layers).children,c=0,f=u.length;c<f;c++)u[c].style.width="100%",u[c].style.height="100%"}}},{key:"setFillMode",value:function(){var e=this,t=S.default.self!==S.default.top&&null!==S.default.frameElement,n=function(){for(var t=void 0,n=e.getElement(e.container);n;){try{if(w.IS_FIREFOX&&"html"===n.tagName.toLowerCase()&&S.default.self!==S.default.top&&null!==S.default.frameElement)return S.default.frameElement;t=n.parentElement}catch(e){t=n.parentElement}if(t&&P.visible(t))return t;n=t}return null}(),o=n?getComputedStyle(n,null):getComputedStyle(x.default.body,null);"none"!==e.node.style.height&&e.node.style.height!==e.height&&(e.node.style.height="auto"),"none"!==e.node.style.maxWidth&&e.node.style.maxWidth!==e.width&&(e.node.style.maxWidth="none"),"none"!==e.node.style.maxHeight&&e.node.style.maxHeight!==e.height&&(e.node.style.maxHeight="none"),e.node.currentStyle&&("100%"===e.node.currentStyle.height&&(e.node.currentStyle.height="auto"),"100%"===e.node.currentStyle.maxWidth&&(e.node.currentStyle.maxWidth="none"),"100%"===e.node.currentStyle.maxHeight&&(e.node.currentStyle.maxHeight="none")),t||parseFloat(o.width)||(n.style.width=e.media.offsetWidth+"px"),t||parseFloat(o.height)||(n.style.height=e.media.offsetHeight+"px"),o=getComputedStyle(n);var i=parseFloat(o.width),r=parseFloat(o.height);e.setDimensions("100%","100%");var a=e.getElement(e.container).querySelector("."+e.options.classPrefix+"poster>img");a&&(a.style.display="");for(var s=e.getElement(e.container).querySelectorAll("object, embed, iframe, video"),l=e.height,d=e.width,u=i,c=l*i/d,f=d*r/l,p=r,m=i<f==!1,h=m?Math.floor(u):Math.floor(f),v=m?Math.floor(c):Math.floor(p),g=m?i+"px":h+"px",y=m?v+"px":r+"px",E=0,b=s.length;E<b;E++)s[E].style.height=y,s[E].style.width=g,e.media.setSize&&e.media.setSize(g,y),s[E].style.marginLeft=Math.floor((i-h)/2)+"px",s[E].style.marginTop=0}},{key:"setDimensions",value:function(e,t){var n=this;e=(0,m.isString)(e)&&-1<e.indexOf("%")?e:parseFloat(e)+"px",t=(0,m.isString)(t)&&-1<t.indexOf("%")?t:parseFloat(t)+"px",n.getElement(n.container).style.width=e,n.getElement(n.container).style.height=t;for(var o=n.getElement(n.layers).children,i=0,r=o.length;i<r;i++)o[i].style.width=e,o[i].style.height=t}},{key:"setControlsSize",value:function(){var t=this;if(P.visible(t.getElement(t.container)))if(t.rail&&P.visible(t.rail)){for(var e=t.total?getComputedStyle(t.total,null):null,n=e?parseFloat(e.marginLeft)+parseFloat(e.marginRight):0,o=getComputedStyle(t.rail),i=parseFloat(o.marginLeft)+parseFloat(o.marginRight),r=0,a=P.siblings(t.rail,function(e){return e!==t.rail}),s=a.length,l=0;l<s;l++)r+=a[l].offsetWidth;r+=n+(0===n?2*i:i)+1,t.getElement(t.container).style.minWidth=r+"px";var d=(0,m.createEvent)("controlsresize",t.getElement(t.container));t.getElement(t.container).dispatchEvent(d)}else{for(var u=t.getElement(t.controls).children,c=0,f=0,p=u.length;f<p;f++)c+=u[f].offsetWidth;t.getElement(t.container).style.minWidth=c+"px"}}},{key:"addControlElement",value:function(e,t){var n=this;if(void 0!==n.featurePosition[t]){var o=n.getElement(n.controls).children[n.featurePosition[t]-1];o.parentNode.insertBefore(e,o.nextSibling)}else{n.getElement(n.controls).appendChild(e);for(var i=n.getElement(n.controls).children,r=0,a=i.length;r<a;r++)if(e===i[r]){n.featurePosition[t]=r;break}}}},{key:"createIframeLayer",value:function(){var t=this;if(t.isVideo&&null!==t.media.rendererName&&-1<t.media.rendererName.indexOf("iframe")&&!x.default.getElementById(t.media.id+"-iframe-overlay")){var e=x.default.createElement("div"),n=x.default.getElementById(t.media.id+"_"+t.media.rendererName);e.id=t.media.id+"-iframe-overlay",e.className=t.options.classPrefix+"iframe-overlay",e.addEventListener("click",function(e){t.options.clickToPlayPause&&(t.paused?t.play():t.pause(),e.preventDefault(),e.stopPropagation())}),n.parentNode.insertBefore(e,n)}}},{key:"resetSize",value:function(){var e=this;setTimeout(function(){e.setPlayerSize(e.width,e.height),e.setControlsSize()},50)}},{key:"setPoster",value:function(e){var t=this;if(t.getElement(t.container)){var n=t.getElement(t.container).querySelector("."+t.options.classPrefix+"poster");n||((n=x.default.createElement("div")).className=t.options.classPrefix+"poster "+t.options.classPrefix+"layer",t.getElement(t.layers).appendChild(n));var o=n.querySelector("img");!o&&e&&((o=x.default.createElement("img")).className=t.options.classPrefix+"poster-img",o.width="100%",o.height="100%",n.style.display="",n.appendChild(o)),e?(o.setAttribute("src",e),n.style.backgroundImage='url("'+e+'")',n.style.display=""):o?(n.style.backgroundImage="none",n.style.display="none",o.remove()):n.style.display="none"}else(w.IS_IPAD&&t.options.iPadUseNativeControls||w.IS_IPHONE&&t.options.iPhoneUseNativeControls||w.IS_ANDROID&&t.options.AndroidUseNativeControls)&&(t.media.originalNode.poster=e)}},{key:"changeSkin",value:function(e){var t=this;t.getElement(t.container).className=t.options.classPrefix+"container "+e,t.setPlayerSize(t.width,t.height),t.setControlsSize()}},{key:"globalBind",value:function(e,n){var o=this.node?this.node.ownerDocument:x.default;if((e=(0,m.splitEvents)(e,this.id)).d)for(var t=e.d.split(" "),i=0,r=t.length;i<r;i++)t[i].split(".").reduce(function(e,t){return o.addEventListener(t,n,!1),t},"");if(e.w)for(var a=e.w.split(" "),s=0,l=a.length;s<l;s++)a[s].split(".").reduce(function(e,t){return S.default.addEventListener(t,n,!1),t},"")}},{key:"globalUnbind",value:function(e,n){var o=this.node?this.node.ownerDocument:x.default;if((e=(0,m.splitEvents)(e,this.id)).d)for(var t=e.d.split(" "),i=0,r=t.length;i<r;i++)t[i].split(".").reduce(function(e,t){return o.removeEventListener(t,n,!1),t},"");if(e.w)for(var a=e.w.split(" "),s=0,l=a.length;s<l;s++)a[s].split(".").reduce(function(e,t){return S.default.removeEventListener(t,n,!1),t},"")}},{key:"buildfeatures",value:function(e,t,n,o){for(var i=0,r=this.options.features.length;i<r;i++){var a=this.options.features[i];if(this["build"+a])try{this["build"+a](e,t,n,o)}catch(e){console.error("error building "+a,e)}}}},{key:"buildposter",value:function(e,t,n,o){var i=this,r=x.default.createElement("div");r.className=i.options.classPrefix+"poster "+i.options.classPrefix+"layer",n.appendChild(r);var a=o.originalNode.getAttribute("poster");""!==e.options.poster&&(a&&w.IS_IOS&&o.originalNode.removeAttribute("poster"),a=e.options.poster),a?i.setPoster(a):null!==i.media.renderer&&"function"==typeof i.media.renderer.getPosterUrl?i.setPoster(i.media.renderer.getPosterUrl()):r.style.display="none",o.addEventListener("play",function(){r.style.display="none"}),o.addEventListener("playing",function(){r.style.display="none"}),e.options.showPosterWhenEnded&&e.options.autoRewind&&o.addEventListener("ended",function(){r.style.display=""}),o.addEventListener("error",function(){r.style.display="none"}),e.options.showPosterWhenPaused&&o.addEventListener("pause",function(){e.ended||(r.style.display="")})}},{key:"buildoverlays",value:function(t,e,n,o){if(t.isVideo){var i=this,r=x.default.createElement("div"),a=x.default.createElement("div"),s=x.default.createElement("div");r.style.display="none",r.className=i.options.classPrefix+"overlay "+i.options.classPrefix+"layer",r.innerHTML='<div class="'+i.options.classPrefix+'overlay-loading"><span class="'+i.options.classPrefix+'overlay-loading-bg-img"></span></div>',n.appendChild(r),a.style.display="none",a.className=i.options.classPrefix+"overlay "+i.options.classPrefix+"layer",a.innerHTML='<div class="'+i.options.classPrefix+'overlay-error"></div>',n.appendChild(a),s.className=i.options.classPrefix+"overlay "+i.options.classPrefix+"layer "+i.options.classPrefix+"overlay-play",s.innerHTML='<div class="'+i.options.classPrefix+'overlay-button" role="button" tabindex="0" aria-label="'+u.default.t("mejs.play")+'" aria-pressed="false"></div>',s.addEventListener("click",function(){if(i.options.clickToPlayPause){var e=i.getElement(i.container).querySelector("."+i.options.classPrefix+"overlay-button"),t=e.getAttribute("aria-pressed");i.paused?i.play():i.pause(),e.setAttribute("aria-pressed",!!t),i.getElement(i.container).focus()}}),s.addEventListener("keydown",function(e){var t=e.keyCode||e.which||0;if(13===t||w.IS_FIREFOX&&32===t){var n=(0,m.createEvent)("click",s);return s.dispatchEvent(n),!1}}),n.appendChild(s),null!==i.media.rendererName&&(/(youtube|facebook)/i.test(i.media.rendererName)&&!(i.media.originalNode.getAttribute("poster")||t.options.poster||"function"==typeof i.media.renderer.getPosterUrl&&i.media.renderer.getPosterUrl())||w.IS_STOCK_ANDROID||i.media.originalNode.getAttribute("autoplay"))&&(s.style.display="none");var l=!1;o.addEventListener("play",function(){s.style.display="none",r.style.display="none",a.style.display="none",l=!1}),o.addEventListener("playing",function(){s.style.display="none",r.style.display="none",a.style.display="none",l=!1}),o.addEventListener("seeking",function(){s.style.display="none",r.style.display="",l=!1}),o.addEventListener("seeked",function(){s.style.display=i.paused&&!w.IS_STOCK_ANDROID?"":"none",r.style.display="none",l=!1}),o.addEventListener("pause",function(){r.style.display="none",w.IS_STOCK_ANDROID||l||(s.style.display=""),l=!1}),o.addEventListener("waiting",function(){r.style.display="",l=!1}),o.addEventListener("loadeddata",function(){r.style.display="",w.IS_ANDROID&&(o.canplayTimeout=setTimeout(function(){if(x.default.createEvent){var e=x.default.createEvent("HTMLEvents");return e.initEvent("canplay",!0,!0),o.dispatchEvent(e)}},300)),l=!1}),o.addEventListener("canplay",function(){r.style.display="none",clearTimeout(o.canplayTimeout),l=!1}),o.addEventListener("error",function(e){i._handleError(e,i.media,i.node),r.style.display="none",s.style.display="none",l=!0}),o.addEventListener("loadedmetadata",function(){i.controlsEnabled||i.enableControls()}),o.addEventListener("keydown",function(e){i.onkeydown(t,o,e),l=!1})}}},{key:"buildkeyboard",value:function(o,e,t,i){var r=this;r.getElement(r.container).addEventListener("keydown",function(){r.keyboardAction=!0}),r.globalKeydownCallback=function(e){var t=x.default.activeElement.closest("."+r.options.classPrefix+"container"),n=r.media.closest("."+r.options.classPrefix+"container");return r.hasFocus=!(!t||!n||t.id!==n.id),r.onkeydown(o,i,e)},r.globalClickCallback=function(e){r.hasFocus=!!e.target.closest("."+r.options.classPrefix+"container")},r.globalBind("keydown",r.globalKeydownCallback),r.globalBind("click",r.globalClickCallback)}},{key:"onkeydown",value:function(e,t,n){if(e.hasFocus&&e.options.enableKeyboard)for(var o=0,i=e.options.keyActions.length;o<i;o++)for(var r=e.options.keyActions[o],a=0,s=r.keys.length;a<s;a++)if(n.keyCode===r.keys[a])return r.action(e,t,n.keyCode,n),n.preventDefault(),void n.stopPropagation();return!0}},{key:"play",value:function(){this.proxy.play()}},{key:"pause",value:function(){this.proxy.pause()}},{key:"load",value:function(){this.proxy.load()}},{key:"setCurrentTime",value:function(e){this.proxy.setCurrentTime(e)}},{key:"getCurrentTime",value:function(){return this.proxy.currentTime}},{key:"getDuration",value:function(){return this.proxy.duration}},{key:"setVolume",value:function(e){this.proxy.volume=e}},{key:"getVolume",value:function(){return this.proxy.getVolume()}},{key:"setMuted",value:function(e){this.proxy.setMuted(e)}},{key:"setSrc",value:function(e){this.controlsEnabled||this.enableControls(),this.proxy.setSrc(e)}},{key:"getSrc",value:function(){return this.proxy.getSrc()}},{key:"canPlayType",value:function(e){return this.proxy.canPlayType(e)}},{key:"remove",value:function(){var l=this,d=l.media.rendererName,u=l.media.originalNode.src;for(var e in l.options.features){var t=l.options.features[e];if(l["clean"+t])try{l["clean"+t](l,l.getElement(l.layers),l.getElement(l.controls),l.media)}catch(e){console.error("error cleaning "+t,e)}}var n=l.node.getAttribute("width"),o=l.node.getAttribute("height");(n?-1===n.indexOf("%")&&(n+="px"):n="auto",o?-1===o.indexOf("%")&&(o+="px"):o="auto",l.node.style.width=n,l.node.style.height=o,l.setPlayerSize(0,0),l.isDynamic?l.getElement(l.container).parentNode.insertBefore(l.node,l.getElement(l.container)):function(){l.node.setAttribute("controls",!0),l.node.setAttribute("id",l.node.getAttribute("id").replace("_"+d,"").replace("_from_mejs",""));var e=l.getElement(l.container).querySelector("."+l.options.classPrefix+"poster>img");(e&&l.node.setAttribute("poster",e.src),delete l.node.autoplay,l.node.setAttribute("src",""),""!==l.media.canPlayType((0,p.getTypeFromFile)(u))&&l.node.setAttribute("src",u),d&&-1<d.indexOf("iframe"))&&x.default.getElementById(l.media.id+"-iframe-overlay").remove();var i=l.node.cloneNode();if(i.style.display="",l.getElement(l.container).parentNode.insertBefore(i,l.getElement(l.container)),l.node.remove(),l.mediaFiles)for(var t=0,n=l.mediaFiles.length;t<n;t++){var o=x.default.createElement("source");o.setAttribute("src",l.mediaFiles[t].src),o.setAttribute("type",l.mediaFiles[t].type),i.appendChild(o)}if(l.trackFiles)for(var r=function(e,t){var n=l.trackFiles[e],o=x.default.createElement("track");o.kind=n.kind,o.label=n.label,o.srclang=n.srclang,o.src=n.src,i.appendChild(o),o.addEventListener("load",function(){this.mode="showing",i.textTracks[e].mode="showing"})},a=0,s=l.trackFiles.length;a<s;a++)r(a);delete l.node,delete l.mediaFiles,delete l.trackFiles}(),l.media.renderer&&"function"==typeof l.media.renderer.destroy&&l.media.renderer.destroy(),delete f.default.players[l.id],"object"===i(l.getElement(l.container)))&&(l.getElement(l.container).parentNode.querySelector("."+l.options.classPrefix+"offscreen").remove(),l.getElement(l.container).remove());l.globalUnbind("resize",l.globalResizeCallback),l.globalUnbind("keydown",l.globalKeydownCallback),l.globalUnbind("click",l.globalClickCallback),delete l.media.player}},{key:"paused",get:function(){return this.proxy.paused}},{key:"muted",get:function(){return this.proxy.muted},set:function(e){this.setMuted(e)}},{key:"ended",get:function(){return this.proxy.ended}},{key:"readyState",get:function(){return this.proxy.readyState}},{key:"currentTime",set:function(e){this.setCurrentTime(e)},get:function(){return this.getCurrentTime()}},{key:"duration",get:function(){return this.getDuration()}},{key:"volume",set:function(e){this.setVolume(e)},get:function(){return this.getVolume()}},{key:"src",set:function(e){this.setSrc(e)},get:function(){return this.getSrc()}}]),r}();S.default.MediaElementPlayer=l,f.default.MediaElementPlayer=l,n.default=l},{17:17,2:2,25:25,26:26,27:27,28:28,3:3,30:30,5:5,6:6,7:7}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),r=e(3),a=(o=r)&&o.__esModule?o:{default:o};var s=function(){function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.media=t.media,this.isVideo=t.isVideo,this.classPrefix=t.options.classPrefix,this.createIframeLayer=function(){return t.createIframeLayer()},this.setPoster=function(e){return t.setPoster(e)},this}return i(e,[{key:"play",value:function(){this.media.play()}},{key:"pause",value:function(){this.media.pause()}},{key:"load",value:function(){this.isLoaded||this.media.load(),this.isLoaded=!0}},{key:"setCurrentTime",value:function(e){this.media.setCurrentTime(e)}},{key:"getCurrentTime",value:function(){return this.media.currentTime}},{key:"getDuration",value:function(){var e=this.media.getDuration();return e===1/0&&this.media.seekable&&this.media.seekable.length&&(e=this.media.seekable.end(0)),e}},{key:"setVolume",value:function(e){this.media.setVolume(e)}},{key:"getVolume",value:function(){return this.media.getVolume()}},{key:"setMuted",value:function(e){this.media.setMuted(e)}},{key:"setSrc",value:function(e){var t=this,n=document.getElementById(t.media.id+"-iframe-overlay");n&&n.remove(),t.media.setSrc(e),t.createIframeLayer(),null!==t.media.renderer&&"function"==typeof t.media.renderer.getPosterUrl&&t.setPoster(t.media.renderer.getPosterUrl())}},{key:"getSrc",value:function(){return this.media.getSrc()}},{key:"canPlayType",value:function(e){return this.media.canPlayType(e)}},{key:"paused",get:function(){return this.media.paused}},{key:"muted",set:function(e){this.setMuted(e)},get:function(){return this.media.muted}},{key:"ended",get:function(){return this.media.ended}},{key:"readyState",get:function(){return this.media.readyState}},{key:"currentTime",set:function(e){this.setCurrentTime(e)},get:function(){return this.getCurrentTime()}},{key:"duration",get:function(){return this.getDuration()}},{key:"remainingTime",get:function(){return this.getDuration()-this.currentTime()}},{key:"volume",set:function(e){this.setVolume(e)},get:function(){return this.getVolume()}},{key:"src",set:function(e){this.setSrc(e)},get:function(){return this.getSrc()}}]),e}();n.default=s,a.default.DefaultPlayer=s},{3:3}],18:[function(e,t,n){"use strict";a(e(3));var o,i=a(e(7)),r=a(e(16));function a(e){return e&&e.__esModule?e:{default:e}}"undefined"!=typeof jQuery?i.default.$=jQuery:"undefined"!=typeof Zepto?i.default.$=Zepto:"undefined"!=typeof ender&&(i.default.$=ender),void 0!==(o=i.default.$)&&(o.fn.mediaelementplayer=function(e){return!1===e?this.each(function(){var e=o(this).data("mediaelementplayer");e&&e.remove(),o(this).removeData("mediaelementplayer")}):this.each(function(){o(this).data("mediaelementplayer",new r.default(this,e))}),this},o(document).ready(function(){o("."+i.default.MepDefaults.classPrefix+"player").mediaelementplayer()}))},{16:16,3:3,7:7}],19:[function(e,t,n){"use strict";var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S=a(e(3)),x=a(e(7)),w=e(8),P=e(27),o=e(28),i=e(25),r=e(26);function a(e){return e&&e.__esModule?e:{default:e}}var T={promise:null,load:function(e){return"undefined"!=typeof dashjs?T.promise=new Promise(function(e){e()}).then(function(){T._createPlayer(e)}):(e.options.path="string"==typeof e.options.path?e.options.path:"https://cdn.dashjs.org/latest/dash.all.min.js",T.promise=T.promise||(0,r.loadScript)(e.options.path),T.promise.then(function(){T._createPlayer(e)})),T.promise},_createPlayer:function(e){var t=dashjs.MediaPlayer().create();return S.default["__ready__"+e.id](t),t}},s={name:"native_dash",options:{prefix:"native_dash",dash:{path:"https://cdn.dashjs.org/latest/dash.all.min.js",debug:!1,drm:{},robustnessLevel:""}},canPlayType:function(e){return i.HAS_MSE&&-1<["application/dash+xml"].indexOf(e.toLowerCase())},create:function(s,l,e){var t=s.originalNode,r=s.id+"_"+l.prefix,a=t.autoplay,n=t.children,d=null,u=null;t.removeAttribute("type");for(var o=0,i=n.length;o<i;o++)n[o].removeAttribute("type");d=t.cloneNode(!0),l=Object.assign(l,s.options);for(var c=x.default.html5media.properties,f=x.default.html5media.events.concat(["click","mouseover","mouseout"]).filter(function(e){return"error"!==e}),p=function(e){var t=(0,P.createEvent)(e.type,s);s.dispatchEvent(t)},m=function(i){var e=""+i.substring(0,1).toUpperCase()+i.substring(1);d["get"+e]=function(){return null!==u?d[i]:null},d["set"+e]=function(e){if(-1===x.default.html5media.readOnlyProperties.indexOf(i))if("src"===i){var t="object"===(void 0===e?"undefined":b(e))&&e.src?e.src:e;if(d[i]=t,null!==u){u.reset();for(var n=0,o=f.length;n<o;n++)d.removeEventListener(f[n],p);u=T._createPlayer({options:l.dash,id:r}),e&&"object"===(void 0===e?"undefined":b(e))&&"object"===b(e.drm)&&(u.setProtectionData(e.drm),(0,P.isString)(l.dash.robustnessLevel)&&l.dash.robustnessLevel&&u.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)),u.attachSource(t),a&&u.play()}}else d[i]=e}},h=0,v=c.length;h<v;h++)m(c[h]);if(S.default["__ready__"+r]=function(e){s.dashPlayer=u=e;for(var t,n=dashjs.MediaPlayer.events,o=0,i=f.length;o<i;o++)"loadedmetadata"===(t=f[o])&&(u.initialize(),u.attachView(d),u.setAutoPlay(!1),"object"!==b(l.dash.drm)||x.default.Utils.isObjectEmpty(l.dash.drm)||(u.setProtectionData(l.dash.drm),(0,P.isString)(l.dash.robustnessLevel)&&l.dash.robustnessLevel&&u.getProtectionController().setRobustnessLevel(l.dash.robustnessLevel)),u.attachSource(d.getSrc())),d.addEventListener(t,p);var r=function(e){if("error"===e.type.toLowerCase())s.generateError(e.message,d.src),console.error(e);else{var t=(0,P.createEvent)(e.type,s);t.data=e,s.dispatchEvent(t)}};for(var a in n)n.hasOwnProperty(a)&&u.on(n[a],function(e){return r(e)})},e&&0<e.length)for(var g=0,y=e.length;g<y;g++)if(w.renderer.renderers[l.prefix].canPlayType(e[g].type)){d.setAttribute("src",e[g].src),void 0!==e[g].drm&&(l.dash.drm=e[g].drm);break}d.setAttribute("id",r),t.parentNode.insertBefore(d,t),t.autoplay=!1,t.style.display="none",d.setSize=function(e,t){return d.style.width=e+"px",d.style.height=t+"px",d},d.hide=function(){return d.pause(),d.style.display="none",d},d.show=function(){return d.style.display="",d},d.destroy=function(){null!==u&&u.reset()};var E=(0,P.createEvent)("rendererready",d);return s.dispatchEvent(E),s.promises.push(T.load({options:l.dash,id:r})),d}};o.typeChecks.push(function(e){return~e.toLowerCase().indexOf(".mpd")?"application/dash+xml":null}),w.renderer.add(s)},{25:25,26:26,27:27,28:28,3:3,7:7,8:8}],20:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.PluginDetector=void 0;var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C=o(e(3)),k=o(e(2)),_=o(e(7)),N=o(e(5)),A=e(8),L=e(27),F=e(25),j=e(28);function o(e){return e&&e.__esModule?e:{default:e}}var r=n.PluginDetector={plugins:[],hasPluginVersion:function(e,t){var n=r.plugins[e];return t[1]=t[1]||0,t[2]=t[2]||0,n[0]>t[0]||n[0]===t[0]&&n[1]>t[1]||n[0]===t[0]&&n[1]===t[1]&&n[2]>=t[2]},addPlugin:function(e,t,n,o,i){r.plugins[e]=r.detectPlugin(t,n,o,i)},detectPlugin:function(e,t,n,o){var i=[0,0,0],r=void 0,a=void 0;if(null!==F.NAV.plugins&&void 0!==F.NAV.plugins&&"object"===d(F.NAV.plugins[e])){if((r=F.NAV.plugins[e].description)&&(void 0===F.NAV.mimeTypes||!F.NAV.mimeTypes[t]||F.NAV.mimeTypes[t].enabledPlugin))for(var s=0,l=(i=r.replace(e,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".")).length;s<l;s++)i[s]=parseInt(i[s].match(/\d+/),10)}else if(void 0!==C.default.ActiveXObject)try{(a=new ActiveXObject(n))&&(i=o(a))}catch(e){}return i}};r.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(e){var t=[],n=e.GetVariable("$version");return n&&(n=n.split(" ")[1].split(","),t=[parseInt(n[0],10),parseInt(n[1],10),parseInt(n[2],10)]),t});var i={create:function(e,t,n){var r={},o=!1;r.options=t,r.id=e.id+"_"+r.options.prefix,r.mediaElement=e,r.flashState={},r.flashApi=null,r.flashApiStack=[];for(var i=_.default.html5media.properties,a=function(t){r.flashState[t]=null;var e=""+t.substring(0,1).toUpperCase()+t.substring(1);r["get"+e]=function(){if(null!==r.flashApi){if("function"==typeof r.flashApi["get_"+t]){var e=r.flashApi["get_"+t]();return"buffered"===t?{start:function(){return 0},end:function(){return e},length:1}:e}return null}return null},r["set"+e]=function(e){if("src"===t&&(e=(0,j.absolutizeUrl)(e)),null!==r.flashApi&&void 0!==r.flashApi["set_"+t])try{r.flashApi["set_"+t](e)}catch(e){}else r.flashApiStack.push({type:"set",propName:t,value:e})}},s=0,l=i.length;s<l;s++)a(i[s]);var d=_.default.html5media.methods,u=function(e){r[e]=function(){if(o)if(null!==r.flashApi){if(r.flashApi["fire_"+e])try{r.flashApi["fire_"+e]()}catch(e){}}else r.flashApiStack.push({type:"call",methodName:e})}};d.push("stop");for(var c=0,f=d.length;c<f;c++)u(d[c]);for(var p=["rendererready"],m=0,h=p.length;m<h;m++){var v=(0,L.createEvent)(p[m],r);e.dispatchEvent(v)}C.default["__ready__"+r.id]=function(){if(r.flashReady=!0,r.flashApi=k.default.getElementById("__"+r.id),r.flashApiStack.length)for(var e=0,t=r.flashApiStack.length;e<t;e++){var n=r.flashApiStack[e];if("set"===n.type){var o=n.propName,i=""+o.substring(0,1).toUpperCase()+o.substring(1);r["set"+i](n.value)}else"call"===n.type&&r[n.methodName]()}},C.default["__event__"+r.id]=function(e,t){var n=(0,L.createEvent)(e,r);if(t)try{n.data=JSON.parse(t),n.details.data=JSON.parse(t)}catch(e){n.message=t}r.mediaElement.dispatchEvent(n)},r.flashWrapper=k.default.createElement("div"),-1===["always","sameDomain"].indexOf(r.options.shimScriptAccess)&&(r.options.shimScriptAccess="sameDomain");var g=e.originalNode.autoplay,y=["uid="+r.id,"autoplay="+g,"allowScriptAccess="+r.options.shimScriptAccess,"preload="+(e.originalNode.getAttribute("preload")||"")],E=null!==e.originalNode&&"video"===e.originalNode.tagName.toLowerCase(),b=E?e.originalNode.height:1,S=E?e.originalNode.width:1;e.originalNode.getAttribute("src")&&y.push("src="+e.originalNode.getAttribute("src")),!0===r.options.enablePseudoStreaming&&(y.push("pseudostreamstart="+r.options.pseudoStreamingStartQueryParam),y.push("pseudostreamtype="+r.options.pseudoStreamingType)),r.options.streamDelimiter&&y.push("streamdelimiter="+encodeURIComponent(r.options.streamDelimiter)),r.options.proxyType&&y.push("proxytype="+r.options.proxyType),e.appendChild(r.flashWrapper),e.originalNode.style.display="none";var x=[];if(F.IS_IE||F.IS_EDGE){var w=k.default.createElement("div");r.flashWrapper.appendChild(w),x=F.IS_EDGE?['type="application/x-shockwave-flash"','data="'+r.options.pluginPath+r.options.filename+'"','id="__'+r.id+'"','width="'+S+'"','height="'+b+"'\""]:['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"','codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"','id="__'+r.id+'"','width="'+S+'"','height="'+b+'"'],E||x.push('style="clip: rect(0 0 0 0); position: absolute;"'),w.outerHTML="<object "+x.join(" ")+'><param name="movie" value="'+r.options.pluginPath+r.options.filename+"?x="+new Date+'" /><param name="flashvars" value="'+y.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+r.options.shimScriptAccess+'" /><param name="allowFullScreen" value="true" /><div>'+N.default.t("mejs.install-flash")+"</div></object>"}else x=['id="__'+r.id+'"','name="__'+r.id+'"','play="true"','loop="false"','quality="high"','bgcolor="#000000"','wmode="transparent"','allowScriptAccess="'+r.options.shimScriptAccess+'"','allowFullScreen="true"','type="application/x-shockwave-flash"','pluginspage="//www.macromedia.com/go/getflashplayer"','src="'+r.options.pluginPath+r.options.filename+'"','flashvars="'+y.join("&")+'"'],E?(x.push('width="'+S+'"'),x.push('height="'+b+'"')):x.push('style="position: fixed; left: -9999em; top: -9999em;"'),r.flashWrapper.innerHTML="<embed "+x.join(" ")+">";if(r.flashNode=r.flashWrapper.lastChild,r.hide=function(){o=!1,E&&(r.flashNode.style.display="none")},r.show=function(){o=!0,E&&(r.flashNode.style.display="")},r.setSize=function(e,t){r.flashNode.style.width=e+"px",r.flashNode.style.height=t+"px",null!==r.flashApi&&"function"==typeof r.flashApi.fire_setSize&&r.flashApi.fire_setSize(e,t)},r.destroy=function(){r.flashNode.remove()},n&&0<n.length)for(var P=0,T=n.length;P<T;P++)if(A.renderer.renderers[t.prefix].canPlayType(n[P].type)){r.setSrc(n[P].src);break}return r}};if(r.hasPluginVersion("flash",[10,0,0])){j.typeChecks.push(function(e){return(e=e.toLowerCase()).startsWith("rtmp")?~e.indexOf(".mp3")?"audio/rtmp":"video/rtmp":/\.og(a|g)/i.test(e)?"audio/ogg":~e.indexOf(".m3u8")?"application/x-mpegURL":~e.indexOf(".mpd")?"application/dash+xml":~e.indexOf(".flv")?"video/flv":null});var a={name:"flash_video",options:{prefix:"flash_video",filename:"mediaelement-flash-video.swf",enablePseudoStreaming:!1,pseudoStreamingStartQueryParam:"start",pseudoStreamingType:"byte",proxyType:"",streamDelimiter:""},canPlayType:function(e){return~["video/mp4","video/rtmp","audio/rtmp","rtmp/mp4","audio/mp4","video/flv","video/x-flv"].indexOf(e.toLowerCase())},create:i.create};A.renderer.add(a);var s={name:"flash_hls",options:{prefix:"flash_hls",filename:"mediaelement-flash-video-hls.swf"},canPlayType:function(e){return~["application/x-mpegurl","application/vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].indexOf(e.toLowerCase())},create:i.create};A.renderer.add(s);var l={name:"flash_dash",options:{prefix:"flash_dash",filename:"mediaelement-flash-video-mdash.swf"},canPlayType:function(e){return~["application/dash+xml"].indexOf(e.toLowerCase())},create:i.create};A.renderer.add(l);var u={name:"flash_audio",options:{prefix:"flash_audio",filename:"mediaelement-flash-audio.swf"},canPlayType:function(e){return~["audio/mp3"].indexOf(e.toLowerCase())},create:i.create};A.renderer.add(u);var c={name:"flash_audio_ogg",options:{prefix:"flash_audio_ogg",filename:"mediaelement-flash-audio-ogg.swf"},canPlayType:function(e){return~["audio/ogg","audio/oga","audio/ogv"].indexOf(e.toLowerCase())},create:i.create};A.renderer.add(c)}},{2:2,25:25,27:27,28:28,3:3,5:5,7:7,8:8}],21:[function(e,t,n){"use strict";var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E=a(e(3)),b=a(e(7)),S=e(8),x=e(27),o=e(25),i=e(28),r=e(26);function a(e){return e&&e.__esModule?e:{default:e}}var w={promise:null,load:function(e){return"undefined"!=typeof flvjs?w.promise=new Promise(function(e){e()}).then(function(){w._createPlayer(e)}):(e.options.path="string"==typeof e.options.path?e.options.path:"https://cdn.jsdelivr.net/npm/flv.js@latest",w.promise=w.promise||(0,r.loadScript)(e.options.path),w.promise.then(function(){w._createPlayer(e)})),w.promise},_createPlayer:function(e){flvjs.LoggingControl.enableDebug=e.options.debug,flvjs.LoggingControl.enableVerbose=e.options.debug;var t=flvjs.createPlayer(e.options,e.configs);return E.default["__ready__"+e.id](t),t}},s={name:"native_flv",options:{prefix:"native_flv",flv:{path:"https://cdn.jsdelivr.net/npm/flv.js@latest",cors:!0,debug:!1}},canPlayType:function(e){return o.HAS_MSE&&-1<["video/x-flv","video/flv"].indexOf(e.toLowerCase())},create:function(s,a,e){var t=s.originalNode,l=s.id+"_"+a.prefix,d=null,u=null;d=t.cloneNode(!0),a=Object.assign(a,s.options);for(var n=b.default.html5media.properties,c=b.default.html5media.events.concat(["click","mouseover","mouseout"]).filter(function(e){return"error"!==e}),f=function(e){var t=(0,x.createEvent)(e.type,s);s.dispatchEvent(t)},o=function(r){var e=""+r.substring(0,1).toUpperCase()+r.substring(1);d["get"+e]=function(){return null!==u?d[r]:null},d["set"+e]=function(e){if(-1===b.default.html5media.readOnlyProperties.indexOf(r))if("src"===r){if(d[r]="object"===(void 0===e?"undefined":y(e))&&e.src?e.src:e,null!==u){var t={type:"flv"};t.url=e,t.cors=a.flv.cors,t.debug=a.flv.debug,t.path=a.flv.path;var n=a.flv.configs;u.destroy();for(var o=0,i=c.length;o<i;o++)d.removeEventListener(c[o],f);(u=w._createPlayer({options:t,configs:n,id:l})).attachMediaElement(d),u.load()}}else d[r]=e}},i=0,r=n.length;i<r;i++)o(n[i]);if(E.default["__ready__"+l]=function(e){s.flvPlayer=u=e;for(var t,i=flvjs.Events,n=0,o=c.length;n<o;n++)"loadedmetadata"===(t=c[n])&&(u.unload(),u.detachMediaElement(),u.attachMediaElement(d),u.load()),d.addEventListener(t,f);var r=function(o){i.hasOwnProperty(o)&&u.on(i[o],function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t){if("error"===e){var n=t[0]+": "+t[1]+" "+t[2].msg;s.generateError(n,d.src)}else{var o=(0,x.createEvent)(e,s);o.data=t,s.dispatchEvent(o)}}(i[o],t)})};for(var a in i)r(a)},e&&0<e.length)for(var p=0,m=e.length;p<m;p++)if(S.renderer.renderers[a.prefix].canPlayType(e[p].type)){d.setAttribute("src",e[p].src);break}d.setAttribute("id",l),t.parentNode.insertBefore(d,t),t.autoplay=!1,t.style.display="none";var h={type:"flv"};h.url=d.src,h.cors=a.flv.cors,h.debug=a.flv.debug,h.path=a.flv.path;var v=a.flv.configs;d.setSize=function(e,t){return d.style.width=e+"px",d.style.height=t+"px",d},d.hide=function(){return null!==u&&u.pause(),d.style.display="none",d},d.show=function(){return d.style.display="",d},d.destroy=function(){null!==u&&u.destroy()};var g=(0,x.createEvent)("rendererready",d);return s.dispatchEvent(g),s.promises.push(w.load({options:h,configs:v,id:l})),d}};i.typeChecks.push(function(e){return~e.toLowerCase().indexOf(".flv")?"video/flv":null}),S.renderer.add(s)},{25:25,26:26,27:27,28:28,3:3,7:7,8:8}],22:[function(e,t,n){"use strict";var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E=a(e(3)),b=a(e(7)),S=e(8),x=e(27),o=e(25),i=e(28),r=e(26);function a(e){return e&&e.__esModule?e:{default:e}}var w={promise:null,load:function(e){return"undefined"!=typeof Hls?w.promise=new Promise(function(e){e()}).then(function(){w._createPlayer(e)}):(e.options.path="string"==typeof e.options.path?e.options.path:"https://cdn.jsdelivr.net/npm/hls.js@latest",w.promise=w.promise||(0,r.loadScript)(e.options.path),w.promise.then(function(){w._createPlayer(e)})),w.promise},_createPlayer:function(e){var t=new Hls(e.options);return E.default["__ready__"+e.id](t),t}},s={name:"native_hls",options:{prefix:"native_hls",hls:{path:"https://cdn.jsdelivr.net/npm/hls.js@latest",autoStartLoad:!1,debug:!1}},canPlayType:function(e){return o.HAS_MSE&&-1<["application/x-mpegurl","application/vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].indexOf(e.toLowerCase())},create:function(d,i,u){var e=d.originalNode,r=d.id+"_"+i.prefix,t=e.getAttribute("preload"),n=e.autoplay,c=null,f=null,p=0,m=u.length;f=e.cloneNode(!0),(i=Object.assign(i,d.options)).hls.autoStartLoad=t&&"none"!==t||n;for(var o=b.default.html5media.properties,h=b.default.html5media.events.concat(["click","mouseover","mouseout"]).filter(function(e){return"error"!==e}),v=function(e){var t=(0,x.createEvent)(e.type,d);d.dispatchEvent(t)},a=function(o){var e=""+o.substring(0,1).toUpperCase()+o.substring(1);f["get"+e]=function(){return null!==c?f[o]:null},f["set"+e]=function(e){if(-1===b.default.html5media.readOnlyProperties.indexOf(o))if("src"===o){if(f[o]="object"===(void 0===e?"undefined":y(e))&&e.src?e.src:e,null!==c){c.destroy();for(var t=0,n=h.length;t<n;t++)f.removeEventListener(h[t],v);(c=w._createPlayer({options:i.hls,id:r})).loadSource(e),c.attachMedia(f)}}else f[o]=e}},s=0,l=o.length;s<l;s++)a(o[s]);if(E.default["__ready__"+r]=function(e){d.hlsPlayer=c=e;for(var i=Hls.Events,t=function(e){if("loadedmetadata"===e){var t=d.originalNode.src;c.detachMedia(),c.loadSource(t),c.attachMedia(f)}f.addEventListener(e,v)},n=0,o=h.length;n<o;n++)t(h[n]);var s=void 0,l=void 0,r=function(o){i.hasOwnProperty(o)&&c.on(i[o],function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t){if("hlsError"===e&&(console.warn(t),(t=t[1]).fatal))switch(t.type){case"mediaError":var n=(new Date).getTime();if(!s||3e3<n-s)s=(new Date).getTime(),c.recoverMediaError();else if(!l||3e3<n-l)l=(new Date).getTime(),console.warn("Attempting to swap Audio Codec and recover from media error"),c.swapAudioCodec(),c.recoverMediaError();else{var o="Cannot recover, last media error recovery failed";d.generateError(o,f.src),console.error(o)}break;case"networkError":if("manifestLoadError"===t.details)if(p<m&&void 0!==u[p+1])f.setSrc(u[p++].src),f.load(),f.play();else{var i="Network error";d.generateError(i,u),console.error(i)}else{var r="Network error";d.generateError(r,u),console.error(r)}break;default:c.destroy()}else{var a=(0,x.createEvent)(e,d);a.data=t,d.dispatchEvent(a)}}(i[o],t)})};for(var a in i)r(a)},0<m)for(;p<m;p++)if(S.renderer.renderers[i.prefix].canPlayType(u[p].type)){f.setAttribute("src",u[p].src);break}"auto"===t||n||(f.addEventListener("play",function(){null!==c&&c.startLoad()}),f.addEventListener("pause",function(){null!==c&&c.stopLoad()})),f.setAttribute("id",r),e.parentNode.insertBefore(f,e),e.autoplay=!1,e.style.display="none",f.setSize=function(e,t){return f.style.width=e+"px",f.style.height=t+"px",f},f.hide=function(){return f.pause(),f.style.display="none",f},f.show=function(){return f.style.display="",f},f.destroy=function(){null!==c&&(c.stopLoad(),c.destroy())};var g=(0,x.createEvent)("rendererready",f);return d.dispatchEvent(g),d.promises.push(w.load({options:i.hls,id:r})),f}};i.typeChecks.push(function(e){return~e.toLowerCase().indexOf(".m3u8")?"application/x-mpegURL":null}),S.renderer.add(s)},{25:25,26:26,27:27,28:28,3:3,7:7,8:8}],23:[function(e,t,n){"use strict";var o=r(e(3)),g=r(e(2)),y=r(e(7)),E=e(8),b=e(27),i=e(25);function r(e){return e&&e.__esModule?e:{default:e}}var a={name:"html5",options:{prefix:"html5"},canPlayType:function(e){var t=g.default.createElement("video");return i.IS_ANDROID&&/\/mp(3|4)$/i.test(e)||~["application/x-mpegurl","vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].indexOf(e.toLowerCase())&&i.SUPPORTS_NATIVE_HLS?"yes":t.canPlayType?t.canPlayType(e.toLowerCase()).replace(/no/,""):""},create:function(n,e,t){var o=n.id+"_"+e.prefix,i=!1,r=null;void 0===n.originalNode||null===n.originalNode?(r=g.default.createElement("audio"),n.appendChild(r)):r=n.originalNode,r.setAttribute("id",o);for(var a=y.default.html5media.properties,s=function(t){var e=""+t.substring(0,1).toUpperCase()+t.substring(1);r["get"+e]=function(){return r[t]},r["set"+e]=function(e){-1===y.default.html5media.readOnlyProperties.indexOf(t)&&(r[t]=e)}},l=0,d=a.length;l<d;l++)s(a[l]);for(var u,c=y.default.html5media.events.concat(["click","mouseover","mouseout"]).filter(function(e){return"error"!==e}),f=0,p=c.length;f<p;f++)u=c[f],r.addEventListener(u,function(e){if(i){var t=(0,b.createEvent)(e.type,e.target);n.dispatchEvent(t)}});r.setSize=function(e,t){return r.style.width=e+"px",r.style.height=t+"px",r},r.hide=function(){return i=!1,r.style.display="none",r},r.show=function(){return i=!0,r.style.display="",r};var m=0,h=t.length;if(0<h)for(;m<h;m++)if(E.renderer.renderers[e.prefix].canPlayType(t[m].type)){r.setAttribute("src",t[m].src);break}r.addEventListener("error",function(e){e&&e.target&&e.target.error&&4===e.target.error.code&&i&&(m<h&&void 0!==t[m+1]?(r.src=t[m++].src,r.load(),r.play()):n.generateError("Media error: Format(s) not supported or source(s) not found",t))});var v=(0,b.createEvent)("rendererready",r);return n.dispatchEvent(v),r}};o.default.HtmlMediaElement=y.default.HtmlMediaElement=a,E.renderer.add(a)},{2:2,25:25,27:27,3:3,7:7,8:8}],24:[function(e,t,n){"use strict";var w=a(e(3)),P=a(e(2)),T=a(e(7)),o=e(8),C=e(27),i=e(28),r=e(26);function a(e){return e&&e.__esModule?e:{default:e}}var k={isIframeStarted:!1,isIframeLoaded:!1,iframeQueue:[],enqueueIframe:function(e){k.isLoaded="undefined"!=typeof YT&&YT.loaded,k.isLoaded?k.createIframe(e):(k.loadIframeApi(),k.iframeQueue.push(e))},loadIframeApi:function(){k.isIframeStarted||((0,r.loadScript)("https://www.youtube.com/player_api"),k.isIframeStarted=!0)},iFrameReady:function(){for(k.isLoaded=!0,k.isIframeLoaded=!0;0<k.iframeQueue.length;){var e=k.iframeQueue.pop();k.createIframe(e)}},createIframe:function(e){return new YT.Player(e.containerId,e)},getYouTubeId:function(e){var t="";return 0<e.indexOf("?")?""===(t=k.getYouTubeIdFromParam(e))&&(t=k.getYouTubeIdFromUrl(e)):t=k.getYouTubeIdFromUrl(e),(t=t.substring(t.lastIndexOf("/")+1).split("?"))[0]},getYouTubeIdFromParam:function(e){if(null==e||!e.trim().length)return null;for(var t=e.split("?")[1].split("&"),n="",o=0,i=t.length;o<i;o++){var r=t[o].split("=");if("v"===r[0]){n=r[1];break}}return n},getYouTubeIdFromUrl:function(e){return null!=e&&e.trim().length?(e=e.split("?")[0]).substring(e.lastIndexOf("/")+1):null},getYouTubeNoCookieUrl:function(e){if(null==e||!e.trim().length||-1===e.indexOf("//www.youtube"))return e;var t=e.split("/");return t[2]=t[2].replace(".com","-nocookie.com"),t.join("/")}},s={name:"youtube_iframe",options:{prefix:"youtube_iframe",youtube:{autoplay:0,controls:0,disablekb:1,end:0,loop:0,modestbranding:0,playsinline:0,rel:0,showinfo:0,start:0,iv_load_policy:3,nocookie:!1,imageQuality:null}},canPlayType:function(e){return~["video/youtube","video/x-youtube"].indexOf(e.toLowerCase())},create:function(m,n,o){var h={},v=[],g=null,r=!0,a=!1,y=null;h.options=n,h.id=m.id+"_"+n.prefix,h.mediaElement=m;for(var e=T.default.html5media.properties,t=function(i){var e=""+i.substring(0,1).toUpperCase()+i.substring(1);h["get"+e]=function(){if(null!==g){switch(i){case"currentTime":return g.getCurrentTime();case"duration":return g.getDuration();case"volume":return g.getVolume()/100;case"playbackRate":return g.getPlaybackRate();case"paused":return r;case"ended":return a;case"muted":return g.isMuted();case"buffered":var e=g.getVideoLoadedFraction(),t=g.getDuration();return{start:function(){return 0},end:function(){return e*t},length:1};case"src":return g.getVideoUrl();case"readyState":return 4}return null}return null},h["set"+e]=function(e){if(null!==g)switch(i){case"src":var t="string"==typeof e?e:e[0].src,n=k.getYouTubeId(t);m.originalNode.autoplay?g.loadVideoById(n):g.cueVideoById(n);break;case"currentTime":g.seekTo(e);break;case"muted":e?g.mute():g.unMute(),setTimeout(function(){var e=(0,C.createEvent)("volumechange",h);m.dispatchEvent(e)},50);break;case"volume":e,g.setVolume(100*e),setTimeout(function(){var e=(0,C.createEvent)("volumechange",h);m.dispatchEvent(e)},50);break;case"playbackRate":g.setPlaybackRate(e),setTimeout(function(){var e=(0,C.createEvent)("ratechange",h);m.dispatchEvent(e)},50);break;case"readyState":var o=(0,C.createEvent)("canplay",h);m.dispatchEvent(o)}else v.push({type:"set",propName:i,value:e})}},i=0,s=e.length;i<s;i++)t(e[i]);for(var l=T.default.html5media.methods,d=function(e){h[e]=function(){if(null!==g)switch(e){case"play":return r=!1,g.playVideo();case"pause":return r=!0,g.pauseVideo();case"load":return null}else v.push({type:"call",methodName:e})}},u=0,c=l.length;u<c;u++)d(l[u]);var f=P.default.createElement("div");f.id=h.id,h.options.youtube.nocookie&&(m.originalNode.src=k.getYouTubeNoCookieUrl(o[0].src)),m.originalNode.parentNode.insertBefore(f,m.originalNode),m.originalNode.style.display="none";var p="audio"===m.originalNode.tagName.toLowerCase(),E=p?"1":m.originalNode.height,b=p?"1":m.originalNode.width,S=k.getYouTubeId(o[0].src),x={id:h.id,containerId:f.id,videoId:S,height:E,width:b,playerVars:Object.assign({controls:0,rel:0,disablekb:1,showinfo:0,modestbranding:0,html5:1,iv_load_policy:3},h.options.youtube),origin:w.default.location.host,events:{onReady:function(e){if(m.youTubeApi=g=e.target,m.youTubeState={paused:!0,ended:!1},v.length)for(var t=0,n=v.length;t<n;t++){var o=v[t];if("set"===o.type){var i=o.propName,r=""+i.substring(0,1).toUpperCase()+i.substring(1);h["set"+r](o.value)}else"call"===o.type&&h[o.methodName]()}y=g.getIframe(),m.originalNode.muted&&g.mute();for(var a=["mouseover","mouseout"],s=function(e){var t=(0,C.createEvent)(e.type,h);m.dispatchEvent(t)},l=0,d=a.length;l<d;l++)y.addEventListener(a[l],s,!1);for(var u=["rendererready","loadedmetadata","loadeddata","canplay"],c=0,f=u.length;c<f;c++){var p=(0,C.createEvent)(u[c],h);m.dispatchEvent(p)}},onStateChange:function(e){var t=[];switch(e.data){case-1:t=["loadedmetadata"],r=!0,a=!1;break;case 0:t=["ended"],r=!1,a=!h.options.youtube.loop,h.options.youtube.loop||h.stopInterval();break;case 1:t=["play","playing"],a=r=!1,h.startInterval();break;case 2:t=["pause"],r=!0,a=!1,h.stopInterval();break;case 3:t=["progress"],a=!1;break;case 5:t=["loadeddata","loadedmetadata","canplay"],r=!0,a=!1}for(var n=0,o=t.length;n<o;n++){var i=(0,C.createEvent)(t[n],h);m.dispatchEvent(i)}},onError:function(e){return function(e){var t="";switch(e.data){case 2:t="The request contains an invalid parameter value. Verify that video ID has 11 characters and that contains no invalid characters, such as exclamation points or asterisks.";break;case 5:t="The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";break;case 100:t="The video requested was not found. Either video has been removed or has been marked as private.";break;case 101:case 105:t="The owner of the requested video does not allow it to be played in embedded players.";break;default:t="Unknown error."}m.generateError("Code "+e.data+": "+t,o)}(e)}}};return(p||m.originalNode.hasAttribute("playsinline"))&&(x.playerVars.playsinline=1),m.originalNode.controls&&(x.playerVars.controls=1),m.originalNode.autoplay&&(x.playerVars.autoplay=1),m.originalNode.loop&&(x.playerVars.loop=1),(x.playerVars.loop&&1===parseInt(x.playerVars.loop,10)||-1<m.originalNode.src.indexOf("loop="))&&!x.playerVars.playlist&&-1===m.originalNode.src.indexOf("playlist=")&&(x.playerVars.playlist=k.getYouTubeId(m.originalNode.src)),k.enqueueIframe(x),h.onEvent=function(e,t,n){null!=n&&(m.youTubeState=n)},h.setSize=function(e,t){null!==g&&g.setSize(e,t)},h.hide=function(){h.stopInterval(),h.pause(),y&&(y.style.display="none")},h.show=function(){y&&(y.style.display="")},h.destroy=function(){g.destroy()},h.interval=null,h.startInterval=function(){h.interval=setInterval(function(){var e=(0,C.createEvent)("timeupdate",h);m.dispatchEvent(e)},250)},h.stopInterval=function(){h.interval&&clearInterval(h.interval)},h.getPosterUrl=function(){var e=n.youtube.imageQuality,t=k.getYouTubeId(m.originalNode.src);return e&&-1<["default","hqdefault","mqdefault","sddefault","maxresdefault"].indexOf(e)&&t?"https://img.youtube.com/vi/"+t+"/"+e+".jpg":""},h}};w.default.onYouTubePlayerAPIReady=function(){k.iFrameReady()},i.typeChecks.push(function(e){return/\/\/(www\.youtube|youtu\.?be)/i.test(e)?"video/x-youtube":null}),o.renderer.add(s)},{2:2,26:26,27:27,28:28,3:3,7:7,8:8}],25:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.cancelFullScreen=n.requestFullScreen=n.isFullScreen=n.FULLSCREEN_EVENT_NAME=n.HAS_NATIVE_FULLSCREEN_ENABLED=n.HAS_TRUE_NATIVE_FULLSCREEN=n.HAS_IOS_FULLSCREEN=n.HAS_MS_NATIVE_FULLSCREEN=n.HAS_MOZ_NATIVE_FULLSCREEN=n.HAS_WEBKIT_NATIVE_FULLSCREEN=n.HAS_NATIVE_FULLSCREEN=n.SUPPORTS_NATIVE_HLS=n.SUPPORT_PASSIVE_EVENT=n.SUPPORT_POINTER_EVENTS=n.HAS_MSE=n.IS_STOCK_ANDROID=n.IS_SAFARI=n.IS_FIREFOX=n.IS_CHROME=n.IS_EDGE=n.IS_IE=n.IS_ANDROID=n.IS_IOS=n.IS_IPOD=n.IS_IPHONE=n.IS_IPAD=n.UA=n.NAV=void 0;var i=a(e(3)),r=a(e(2)),o=a(e(7));function a(e){return e&&e.__esModule?e:{default:e}}for(var s=n.NAV=i.default.navigator,l=n.UA=s.userAgent.toLowerCase(),d=n.IS_IPAD=/ipad/i.test(l)&&!i.default.MSStream,u=n.IS_IPHONE=/iphone/i.test(l)&&!i.default.MSStream,c=n.IS_IPOD=/ipod/i.test(l)&&!i.default.MSStream,f=(n.IS_IOS=/ipad|iphone|ipod/i.test(l)&&!i.default.MSStream,n.IS_ANDROID=/android/i.test(l)),p=n.IS_IE=/(trident|microsoft)/i.test(s.appName),m=(n.IS_EDGE="msLaunchUri"in s&&!("documentMode"in r.default)),h=n.IS_CHROME=/chrome/i.test(l),v=n.IS_FIREFOX=/firefox/i.test(l),g=n.IS_SAFARI=/safari/i.test(l)&&!h,y=n.IS_STOCK_ANDROID=/^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l),E=(n.HAS_MSE="MediaSource"in i.default),b=n.SUPPORT_POINTER_EVENTS=function(){var e=r.default.createElement("x"),t=r.default.documentElement,n=i.default.getComputedStyle;if(!("pointerEvents"in e.style))return!1;e.style.pointerEvents="auto",e.style.pointerEvents="x",t.appendChild(e);var o=n&&"auto"===(n(e,"")||{}).pointerEvents;return e.remove(),!!o}(),S=n.SUPPORT_PASSIVE_EVENT=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});i.default.addEventListener("test",null,t)}catch(e){}return e}(),x=["source","track","audio","video"],w=void 0,P=0,T=x.length;P<T;P++)w=r.default.createElement(x[P]);var C=n.SUPPORTS_NATIVE_HLS=g||p&&/edge/i.test(l),k=void 0!==w.webkitEnterFullscreen,_=void 0!==w.requestFullscreen;k&&/mac os x 10_5/i.test(l)&&(k=_=!1);var N=void 0!==w.webkitRequestFullScreen,A=void 0!==w.mozRequestFullScreen,L=void 0!==w.msRequestFullscreen,F=N||A||L,j=F,I="",M=void 0,O=void 0,D=void 0;A?j=r.default.mozFullScreenEnabled:L&&(j=r.default.msFullscreenEnabled),h&&(k=!1),F&&(N?I="webkitfullscreenchange":A?I="fullscreenchange":L&&(I="MSFullscreenChange"),n.isFullScreen=M=function(){return A?r.default.mozFullScreen:N?r.default.webkitIsFullScreen:L?null!==r.default.msFullscreenElement:void 0},n.requestFullScreen=O=function(e){N?e.webkitRequestFullScreen():A?e.mozRequestFullScreen():L&&e.msRequestFullscreen()},n.cancelFullScreen=D=function(){N?r.default.webkitCancelFullScreen():A?r.default.mozCancelFullScreen():L&&r.default.msExitFullscreen()});var R=n.HAS_NATIVE_FULLSCREEN=_,V=n.HAS_WEBKIT_NATIVE_FULLSCREEN=N,H=n.HAS_MOZ_NATIVE_FULLSCREEN=A,U=n.HAS_MS_NATIVE_FULLSCREEN=L,q=n.HAS_IOS_FULLSCREEN=k,B=n.HAS_TRUE_NATIVE_FULLSCREEN=F,z=n.HAS_NATIVE_FULLSCREEN_ENABLED=j,W=n.FULLSCREEN_EVENT_NAME=I;n.isFullScreen=M,n.requestFullScreen=O,n.cancelFullScreen=D,o.default.Features=o.default.Features||{},o.default.Features.isiPad=d,o.default.Features.isiPod=c,o.default.Features.isiPhone=u,o.default.Features.isiOS=o.default.Features.isiPhone||o.default.Features.isiPad,o.default.Features.isAndroid=f,o.default.Features.isIE=p,o.default.Features.isEdge=m,o.default.Features.isChrome=h,o.default.Features.isFirefox=v,o.default.Features.isSafari=g,o.default.Features.isStockAndroid=y,o.default.Features.hasMSE=E,o.default.Features.supportsNativeHLS=C,o.default.Features.supportsPointerEvents=b,o.default.Features.supportsPassiveEvent=S,o.default.Features.hasiOSFullScreen=q,o.default.Features.hasNativeFullscreen=R,o.default.Features.hasWebkitNativeFullScreen=V,o.default.Features.hasMozNativeFullScreen=H,o.default.Features.hasMsNativeFullScreen=U,o.default.Features.hasTrueNativeFullScreen=B,o.default.Features.nativeFullScreenEnabled=z,o.default.Features.fullScreenEventName=W,o.default.Features.isFullScreen=M,o.default.Features.requestFullScreen=O,o.default.Features.cancelFullScreen=D},{2:2,3:3,7:7}],26:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeClass=n.addClass=n.hasClass=void 0,n.loadScript=a,n.offset=s,n.toggleClass=h,n.fadeOut=v,n.fadeIn=g,n.siblings=y,n.visible=E,n.ajax=b;var l=r(e(3)),i=r(e(2)),o=r(e(7));function r(e){return e&&e.__esModule?e:{default:e}}function a(o){return new Promise(function(e,t){var n=i.default.createElement("script");n.src=o,n.async=!0,n.onload=function(){n.remove(),e()},n.onerror=function(){n.remove(),t()},i.default.head.appendChild(n)})}function s(e){var t=e.getBoundingClientRect(),n=l.default.pageXOffset||i.default.documentElement.scrollLeft,o=l.default.pageYOffset||i.default.documentElement.scrollTop;return{top:t.top+o,left:t.left+n}}var d=void 0,u=void 0,c=void 0;"classList"in i.default.documentElement?(d=function(e,t){return void 0!==e.classList&&e.classList.contains(t)},u=function(e,t){return e.classList.add(t)},c=function(e,t){return e.classList.remove(t)}):(d=function(e,t){return new RegExp("\\b"+t+"\\b").test(e.className)},u=function(e,t){f(e,t)||(e.className+=" "+t)},c=function(e,t){e.className=e.className.replace(new RegExp("\\b"+t+"\\b","g"),"")});var f=n.hasClass=d,p=n.addClass=u,m=n.removeClass=c;function h(e,t){f(e,t)?m(e,t):p(e,t)}function v(i){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:400,a=arguments[2];i.style.opacity||(i.style.opacity=1);var s=null;l.default.requestAnimationFrame(function e(t){var n=t-(s=s||t),o=parseFloat(1-n/r,2);i.style.opacity=o<0?0:o,r<n?a&&"function"==typeof a&&a():l.default.requestAnimationFrame(e)})}function g(i){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:400,a=arguments[2];i.style.opacity||(i.style.opacity=0);var s=null;l.default.requestAnimationFrame(function e(t){var n=t-(s=s||t),o=parseFloat(n/r,2);i.style.opacity=1<o?1:o,r<n?a&&"function"==typeof a&&a():l.default.requestAnimationFrame(e)})}function y(e,t){var n=[];for(e=e.parentNode.firstChild;t&&!t(e)||n.push(e),e=e.nextSibling;);return n}function E(e){return void 0!==e.getClientRects&&"function"===e.getClientRects?!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length):!(!e.offsetWidth&&!e.offsetHeight)}function b(e,t,n,o){var i=l.default.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),r="application/x-www-form-urlencoded; charset=UTF-8",a=!1,s="*/".concat("*");switch(t){case"text":r="text/plain";break;case"json":r="application/json, text/javascript";break;case"html":r="text/html";break;case"xml":r="application/xml, text/xml"}"application/x-www-form-urlencoded"!==r&&(s=r+", */*; q=0.01"),i&&(i.open("GET",e,!0),i.setRequestHeader("Accept",s),i.onreadystatechange=function(){if(!a&&4===i.readyState)if(200===i.status){a=!0;var e=void 0;switch(t){case"json":e=JSON.parse(i.responseText);break;case"xml":e=i.responseXML;break;default:e=i.responseText}n(e)}else"function"==typeof o&&o(i.status)},i.send())}o.default.Utils=o.default.Utils||{},o.default.Utils.offset=s,o.default.Utils.hasClass=f,o.default.Utils.addClass=p,o.default.Utils.removeClass=m,o.default.Utils.toggleClass=h,o.default.Utils.fadeIn=g,o.default.Utils.fadeOut=v,o.default.Utils.siblings=y,o.default.Utils.visible=E,o.default.Utils.ajax=b,o.default.Utils.loadScript=a},{2:2,3:3,7:7}],27:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.escapeHTML=a,n.debounce=s,n.isObjectEmpty=l,n.splitEvents=d,n.createEvent=u,n.isNodeAfter=c,n.isString=f;var o,i=e(7),r=(o=i)&&o.__esModule?o:{default:o};function a(e){if("string"!=typeof e)throw new Error("Argument passed must be a string");var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};return e.replace(/[&<>"]/g,function(e){return t[e]})}function s(o,i){var r=this,a=arguments,s=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if("function"!=typeof o)throw new Error("First argument must be a function");if("number"!=typeof i)throw new Error("Second argument must be a numeric value");var l=void 0;return function(){var e=r,t=a,n=s&&!l;clearTimeout(l),l=setTimeout(function(){l=null,s||o.apply(e,t)},i),n&&o.apply(e,t)}}function l(e){return Object.getOwnPropertyNames(e).length<=0}function d(e,n){var o=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,i={d:[],w:[]};return(e||"").split(" ").forEach(function(e){var t=e+(n?"."+n:"");t.startsWith(".")?(i.d.push(t),i.w.push(t)):i[o.test(e)?"w":"d"].push(t)}),i.d=i.d.join(" "),i.w=i.w.join(" "),i}function u(e,t){if("string"!=typeof e)throw new Error("Event name must be a string");var n=e.match(/([a-z]+\.([a-z]+))/i),o={target:t};return null!==n&&(e=n[1],o.namespace=n[2]),new window.CustomEvent(e,{detail:o})}function c(e,t){return!!(e&&t&&2&e.compareDocumentPosition(t))}function f(e){return"string"==typeof e}r.default.Utils=r.default.Utils||{},r.default.Utils.escapeHTML=a,r.default.Utils.debounce=s,r.default.Utils.isObjectEmpty=l,r.default.Utils.splitEvents=d,r.default.Utils.createEvent=u,r.default.Utils.isNodeAfter=c,r.default.Utils.isString=f},{7:7}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.typeChecks=void 0,n.absolutizeUrl=l,n.formatType=d,n.getMimeFromType=u,n.getTypeFromFile=c,n.getExtension=f,n.normalizeExtension=p;var o,i=e(7),r=(o=i)&&o.__esModule?o:{default:o},a=e(27);var s=n.typeChecks=[];function l(e){if("string"!=typeof e)throw new Error("`url` argument must be a string");var t=document.createElement("div");return t.innerHTML='<a href="'+(0,a.escapeHTML)(e)+'">x</a>',t.firstChild.href}function d(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return e&&!t?c(e):t}function u(e){if("string"!=typeof e)throw new Error("`type` argument must be a string");return e&&-1<e.indexOf(";")?e.substr(0,e.indexOf(";")):e}function c(e){if("string"!=typeof e)throw new Error("`url` argument must be a string");for(var t=0,n=s.length;t<n;t++){var o=s[t](e);if(o)return o}var i=p(f(e)),r="video/mp4";return i&&(~["mp4","m4v","ogg","ogv","webm","flv","mpeg","mov"].indexOf(i)?r="video/"+i:~["mp3","oga","wav","mid","midi"].indexOf(i)&&(r="audio/"+i)),r}function f(e){if("string"!=typeof e)throw new Error("`url` argument must be a string");var t=e.split("?")[0].split("\\").pop().split("/").pop();return~t.indexOf(".")?t.substring(t.lastIndexOf(".")+1):""}function p(e){if("string"!=typeof e)throw new Error("`extension` argument must be a string");switch(e){case"mp4":case"m4v":return"mp4";case"webm":case"webma":case"webmv":return"webm";case"ogg":case"oga":case"ogv":return"ogg";default:return e}}r.default.Utils=r.default.Utils||{},r.default.Utils.typeChecks=s,r.default.Utils.absolutizeUrl=l,r.default.Utils.formatType=d,r.default.Utils.getMimeFromType=u,r.default.Utils.getTypeFromFile=c,r.default.Utils.getExtension=f,r.default.Utils.normalizeExtension=p},{27:27,7:7}],29:[function(e,t,n){"use strict";var o,i=a(e(2)),r=a(e(4));function a(e){return e&&e.__esModule?e:{default:e}}if([Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})}),function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=i.default.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1,o=arguments.length;n<o;n++){var i=arguments[n];if(null!==i)for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}),String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length-1;0<=--n&&t.item(n)!==this;);return-1<n}),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t=(this.document||this.ownerDocument).querySelectorAll(e),n=void 0,o=this;do{for(n=t.length;0<=--n&&t.item(n)!==o;);}while(n<0&&(o=o.parentElement));return o}),function(){for(var i=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-i)),o=window.setTimeout(function(){e(t+n)},n);return i=t+n,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),/firefox/i.test(navigator.userAgent)){var s=window.getComputedStyle;window.getComputedStyle=function(e,t){var n=s(e,t);return null===n?{getPropertyValue:function(){}}:n}}window.Promise||(window.Promise=r.default),(o=window.Node||window.Element)&&o.prototype&&null===o.prototype.children&&Object.defineProperty(o.prototype,"children",{get:function(){for(var e=0,t=void 0,n=this.childNodes,o=[];t=n[e++];)1===t.nodeType&&o.push(t);return o}})},{2:2,4:4}],30:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isDropFrame=C,n.secondsToTimeCode=a,n.timeCodeToSeconds=s,n.calculateTimeFormat=l,n.convertSMPTEtoSeconds=d;var o,i=e(7),r=(o=i)&&o.__esModule?o:{default:o};function C(){return!((0<arguments.length&&void 0!==arguments[0]?arguments[0]:25)%1==0)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:25,i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:"hh:mm:ss";e=!e||"number"!=typeof e||e<0?0:e;var a=Math.round(.066666*o),s=Math.round(o),l=24*Math.round(3600*o),d=Math.round(600*o),u=C(o)?";":":",c=void 0,f=void 0,p=void 0,m=void 0,h=Math.round(e*o);if(C(o)){h<0&&(h=l+h);var v=(h%=l)%d;h+=9*a*Math.floor(h/d),a<v&&(h+=a*Math.floor((v-a)/Math.round(60*s-a)));var g=Math.floor(h/s);c=Math.floor(Math.floor(g/60)/60),f=Math.floor(g/60)%60,p=n?g%60:Math.floor(h/s%60).toFixed(i)}else c=Math.floor(e/3600)%24,f=Math.floor(e/60)%60,p=n?Math.floor(e%60):Math.floor(e%60).toFixed(i);c=c<=0?0:c,p=60===(p=p<=0?0:p)?0:p,f=60===(f=f<=0?0:f)?0:f;for(var y=r.split(":"),E={},b=0,S=y.length;b<S;++b){for(var x="",w=0,P=y[b].length;w<P;w++)x.indexOf(y[b][w])<0&&(x+=y[b][w]);~["f","s","m","h"].indexOf(x)&&(E[x]=y[b].length)}var T=t||0<c?(c<10&&1<E.h?"0"+c:c)+":":"";return T+=(f<10&&1<E.m?"0"+f:f)+":",T+=""+(p<10&&1<E.s?"0"+p:p),n&&(T+=(m=(m=(h%s).toFixed(0))<=0?0:m)<10&&E.f?u+"0"+m:""+u+m),T}function s(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:25;if("string"!=typeof e)throw new TypeError("Time must be a string");if(0<e.indexOf(";")&&(e=e.replace(";",":")),!/\d{2}(\:\d{2}){0,3}/i.test(e))throw new TypeError("Time code must have the format `00:00:00`");var n=e.split(":"),o=void 0,i=0,r=0,a=0,s=0,l=0,d=Math.round(.066666*t),u=Math.round(t),c=3600*u,f=60*u;switch(n.length){default:case 1:a=parseInt(n[0],10);break;case 2:r=parseInt(n[0],10),a=parseInt(n[1],10);break;case 3:i=parseInt(n[0],10),r=parseInt(n[1],10),a=parseInt(n[2],10);break;case 4:i=parseInt(n[0],10),r=parseInt(n[1],10),a=parseInt(n[2],10),s=parseInt(n[3],10)}return o=C(t)?c*i+f*r+u*a+s-d*((l=60*i+r)-Math.floor(l/10)):(c*i+f*r+t*a+s)/t,parseFloat(o.toFixed(3))}function l(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:25;e=!e||"number"!=typeof e||e<0?0:e;for(var o=Math.floor(e/3600)%24,i=Math.floor(e/60)%60,r=Math.floor(e%60),a=[[Math.floor((e%1*n).toFixed(3)),"f"],[r,"s"],[i,"m"],[o,"h"]],s=t.timeFormat,l=s[1]===s[0],d=l?2:1,u=s.length<d?s[d]:":",c=s[0],f=!1,p=0,m=a.length;p<m;p++)if(~s.indexOf(a[p][1]))f=!0;else if(f){for(var h=!1,v=p;v<m;v++)if(0<a[v][0]){h=!0;break}if(!h)break;l||(s=c+s),s=a[p][1]+u+s,l&&(s=a[p][1]+s),c=a[p][1]}t.timeFormat=s}function d(e){if("string"!=typeof e)throw new TypeError("Argument must be a string value");for(var t=~(e=e.replace(",",".")).indexOf(".")?e.split(".")[1].length:0,n=0,o=1,i=0,r=(e=e.split(":").reverse()).length;i<r;i++)o=1,0<i&&(o=Math.pow(60,i)),n+=Number(e[i])*o;return Number(n.toFixed(t))}r.default.Utils=r.default.Utils||{},r.default.Utils.secondsToTimeCode=a,r.default.Utils.timeCodeToSeconds=s,r.default.Utils.calculateTimeFormat=l,r.default.Utils.convertSMPTEtoSeconds=d},{7:7}]},{},[29,6,5,15,23,20,19,21,22,24,16,18,17,9,10,11,12,13,14]);




/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
  
  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;
  
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );




/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);

/* dlmenu modified */
/**
 * jquery.dlmenu.js v1.0.1
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
!function(n,i,s){"use strict";var t=i.Modernizr,e=n("body");n.DLMenu=function(i,s){this.$el=n(s),this._init(i)},n.DLMenu.defaults={animationClasses:{classin:"dl-animate-in-1",classout:"dl-animate-out-1"},onLevelClick:function(n,i){return!1},onLinkClick:function(n,i){return!1}},n.DLMenu.prototype={_init:function(i){this.options=n.extend(!0,{},n.DLMenu.defaults,i),this._config();var s={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.animEndEventName=s[t.prefixed("animation")]+".dlmenu",this.transEndEventName=e[t.prefixed("transition")]+".dlmenu",this.supportAnimations=t.cssanimations,this.supportTransitions=t.csstransitions,this._initEvents()},_config:function(){this.open=!1,this.$trigger=this.$el.find(".dl-trigger"),this.$menu=this.$el.children("ul.dl-menu"),this.$menuitems=this.$menu.find("li:not(.dl-back)"),this.$el.find("ul.dl-submenu-smart").prepend('<li class="dl-back"><a href="#">back</a></li>'),this.$back=this.$menu.find("li.dl-back")},_initEvents:function(){var s=this;this.$trigger.on("click.dlmenu",function(){return s.open?s._closeMenu():(s._openMenu(),i.pagePositionY=n(i).scrollTop()),!1}),this.$menuitems.on("click.dlmenu",function(t){t.stopPropagation();var e=n(this),o=e.children("ul.dl-submenu-smart");if(o.length>0){var a=o.closest(".dl-menu").css("top"),l=o.clone().css({opacity:0,top:a,"margin-top":o.css("margin-top")}).insertAfter(s.$menu),r=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classout).addClass("dl-subview"),e.addClass("dl-subviewopen").parents(".dl-subviewopen:first").removeClass("dl-subviewopen").addClass("dl-subview"),i.maxTransform=0,i.startPoint=n(i).scrollTop(),i.maxTransform=n(".dl-subviewopen").height()-(n(i).height()-(n(".dl-subviewopen").offset().top-n(i).scrollTop()))+25,l.remove()};return setTimeout(function(){l.addClass(s.options.animationClasses.classin),s.$menu.addClass(s.options.animationClasses.classout),s.supportAnimations?s.$menu.on(s.animEndEventName,r):r.call(),s.options.onLevelClick(e,e.children("a:first").text())}),!1}s.options.onLinkClick(e,t)}),this.$back.on("click.dlmenu",function(t){var e=n(this),o=e.parents("ul.dl-submenu-smart:first"),a=o.parent(),l=o.closest(".dl-menu").css("top"),r=o.clone().css("top",l).css("margin-top",o.css("margin-top")).insertAfter(s.$menu),u=function(){s.$menu.off(s.animEndEventName).removeClass(s.options.animationClasses.classin),r.remove()};return setTimeout(function(){r.addClass(s.options.animationClasses.classout),s.$menu.addClass(s.options.animationClasses.classin),s.supportAnimations?s.$menu.on(s.animEndEventName,u):u.call(),a.removeClass("dl-subviewopen");var t=e.parents(".dl-subview:first");t.is("li")&&t.addClass("dl-subviewopen"),t.removeClass("dl-subview"),i.maxTransform=0,i.startPoint=n(i).scrollTop(),i.maxTransform=t.height()-(n(i).height()-(t.offset().top-n(i).scrollTop()))+25}),!1})},closeMenu:function(){this.open&&this._closeMenu()},_closeMenu:function(){var n=this,i=function(){n.$menu.off(n.transEndEventName),n._resetMenu()};this.$menu.removeClass("dl-menuopen"),this.$menu.addClass("dl-menu-toggle"),this.$trigger.removeClass("dl-active"),this.supportTransitions?this.$menu.on(this.transEndEventName,i):i.call(),this.open=!1},openMenu:function(){this.open||this._openMenu()},_openMenu:function(){var s=this;e.off("click").on("click.dlmenu",function(){s._closeMenu()}),this.$menu.addClass("dl-menuopen dl-menu-toggle").on(this.transEndEventName,function(){i.maxTransform=0,n(".dl-menuopen").length&&(i.startPoint=n(i).scrollTop(),i.maxTransform=n(".dl-menuopen").height()-(n(i).height()-(n(".dl-menuopen").offset().top-n(i).scrollTop()))+25),n(this).removeClass("dl-menu-toggle")}),this.$trigger.addClass("dl-active"),this.open=!0},_resetMenu:function(){this.$menu.removeClass("dl-subview"),this.$menuitems.removeClass("dl-subview dl-subviewopen")}};var o=function(n){i.console&&i.console.error(n)};n.fn.dlmenu=function(i){if("string"==typeof i){var s=Array.prototype.slice.call(arguments,1);this.each(function(){var t=n.data(this,"dlmenu");return t?n.isFunction(t[i])&&"_"!==i.charAt(0)?void t[i].apply(t,s):void o("no such method '"+i+"' for dlmenu instance"):void o("cannot call methods on dlmenu prior to initialization; attempted to call method '"+i+"'")})}else this.each(function(){var s=n.data(this,"dlmenu");s?s._init():s=n.data(this,"dlmenu",new n.DLMenu(i,this))});return this}}(jQuery,window);

/*
 * jQuery plugin "tytabs" by Tyler ( Gregory Jacob )
 * http://blog.carefordesign.com
 *
 * Copyright 2010, Gregory Jacob
 * Data : 31 decembre 2010
 */
;(function($){$.fn.tytabs=function(options){var defaults={prefixtabs:"tab",prefixcontent:"content",classcontent:"tabscontent",tabinit:"1",catchget:"tab",fadespeed:"normal"},opts=$.extend({},defaults,options);return this.each(function(){var obj=$(this);opts.classcontent="."+opts.classcontent;opts.prefixcontent="#"+opts.prefixcontent;function showTab(id){$(opts.classcontent,obj).stop(true,true);var contentvisible=$(opts.classcontent+":visible",obj);if(contentvisible.length>0){contentvisible.fadeOut(opts.fadespeed,function(){fadeincontent(id)})}else{fadeincontent(id)}$("#"+opts.prefixtabs+opts.tabinit).removeAttr("class");$("#"+opts.prefixtabs+id).attr("class","current");opts.tabinit=id}function fadeincontent(id){$(opts.prefixcontent+id,obj).fadeIn(opts.fadespeed)}$("ul.tabs li",obj).click(function(){showTab($(this).attr("id").replace(opts.prefixtabs,""));return false});var tab=getvars(opts.catchget);showTab(((tab&&$(opts.prefixcontent+tab).length==1)?tab:($(opts.prefixcontent+opts.tabinit).length==1)?opts.tabinit:"1"))})};function getvars(q,s){s=(s)?s:window.location.search;var re=new RegExp("&"+q+"=([^&]*)","i");return(s=s.replace(/^\?/,"&").match(re))?s=s[1]:s=""}})(jQuery);

/* browserdetect */
var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS",this.isEdge=window.navigator.userAgent.indexOf("Edge")>-1?true:false,this.isModernIE=window.navigator.userAgent.indexOf("Trident")>-1&&!this.isEdge?true:false},searchString:function(i){for(var n=0;n<i.length;n++){var r=i[n].string,t=i[n].prop;if(this.versionSearchString=i[n].versionSearch||i[n].identity,r){if(-1!=r.indexOf(i[n].subString))return i[n].identity}else if(t)return i[n].identity}},searchVersion:function(i){var n=i.indexOf(this.versionSearchString);if(-1!=n)return parseFloat(i.substring(n+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();

/* Hoverizr [grayscale modern IE's] */
;(function($){$.fn.hoverizr=function(m){var o={'effect':"grayscale",'overlay':"top",'container':"overlayed",'width':"responsive",'height':"auto",'stretch':"no",'speedIn':"slow",'speedOut':"fast"};var m=$.extend(o,m);if($('img').css('maxWidth')!="none"){var p=1;$('img').css('maxWidth',"none")}else{var p=0}this.each(function(){$(this).wrap('<div class="'+m.container+'" />');$(this).parent('.'+m.container+'').css({'position':'relative'});$(this).parent('.'+m.container+'').append('<canvas class="canv"></canvas>');$(this).next('.canv').css({'position':'absolute','top':'0','left':'0','z-index':10});if(m.overlay=="top"){$(this).css({'z-index':-1})}else{$(this).css({'z-index':1});$(this).next('.canv').css({'display':'none'})}var a=$(this).width();var b=$(this).height();$(this).next('.canv').attr({"width":a,"height":b});var c=$(this).next('.canv').get(0);var d=c.getContext("2d");var f=$(this).get(0);d.drawImage(f,0,0);if(m.effect!='noise'&&'blur'){try{try{var g=d.getImageData(0,0,a,b)}catch(e){netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");var g=d.getImageData(0,0,a,b)}}catch(e){throw new Error("unable to access image data: "+e)}var h=g.data}switch(m.effect){case"invert":for(var i=0,n=h.length;i<n;i+=4){h[i]=255-h[i];h[i+1]=255-h[i+1];h[i+2]=255-h[i+2]}break;case"blur":var j,x,y;var k=new Image;k.src=$(this).attr('src');d.globalAlpha=0.0625;for(y=-3;y<3;y+=1){for(x=-3;x<3;x+=1){d.drawImage(k,x,y)}}d.globalAlpha=1;break;default:for(var i=0,n=h.length;i<n;i+=4){var l=h[i]*.3+h[i+1]*.59+h[i+2]*.11;h[i]=l;h[i+1]=l;h[i+2]=l}break}if(m.effect!=("blur"||"noise")){d.putImageData(g,0,0)}if(m.width=="responsive"){$(this).next('.canv').css({'max-width':'100%'});$(this).css({'max-width':'100%'});$(this).parent('.'+m.container+'').css({'width':'100%'})}else if(m.stretch=="no"){$(this).parent('.'+m.container+'').css({'width':m.width,'height':m.height,overflow:"hidden"})}else{$(this).next('.canv').css({'width':m.width,'height':m.height});$(this).css({'width':m.width,'height':m.height});$(this).parent('.'+m.container+'').css({'width':m.width,'height':m.height})}});if(p==1){$('img').css('maxWidth',"100%")}if(m.overlay=="top"){this.parent('.'+m.container+'').hover(function(){$(this).children('.canv').stop(true,true).fadeOut(m.speedOut)},function(){$(this).children('.canv').stop(true,true).fadeIn(m.speedIn)})}else{this.parent('.'+m.container+'').hover(function(){$(this).children('.canv').stop(true,true).fadeIn(m.speedOut)},function(){$(this).children('.canv').stop(true,true).fadeOut(m.speedIn)})}}})(jQuery);

/*fittext*/
;(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this);var n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n();e(window).on("resize.fittext orientationchange.fittext",n)})}})(jQuery);

/* owlCarousel */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7(A 3c.3q!=="9"){3c.3q=9(e){9 t(){}t.5S=e;p 5R t}}(9(e,t,n){h r={1N:9(t,n){h r=c;r.$k=e(n);r.6=e.4M({},e.37.2B.6,r.$k.v(),t);r.2A=t;r.4L()},4L:9(){9 r(e){h n,r="";7(A t.6.33==="9"){t.6.33.R(c,[e])}l{1A(n 38 e.d){7(e.d.5M(n)){r+=e.d[n].1K}}t.$k.2y(r)}t.3t()}h t=c,n;7(A t.6.2H==="9"){t.6.2H.R(c,[t.$k])}7(A t.6.2O==="2Y"){n=t.6.2O;e.5K(n,r)}l{t.3t()}},3t:9(){h e=c;e.$k.v("d-4I",e.$k.2x("2w")).v("d-4F",e.$k.2x("H"));e.$k.z({2u:0});e.2t=e.6.q;e.4E();e.5v=0;e.1X=14;e.23()},23:9(){h e=c;7(e.$k.25().N===0){p b}e.1M();e.4C();e.$S=e.$k.25();e.E=e.$S.N;e.4B();e.$G=e.$k.17(".d-1K");e.$K=e.$k.17(".d-1p");e.3u="U";e.13=0;e.26=[0];e.m=0;e.4A();e.4z()},4z:9(){h e=c;e.2V();e.2W();e.4t();e.30();e.4r();e.4q();e.2p();e.4o();7(e.6.2o!==b){e.4n(e.6.2o)}7(e.6.O===j){e.6.O=4Q}e.19();e.$k.17(".d-1p").z("4i","4h");7(!e.$k.2m(":3n")){e.3o()}l{e.$k.z("2u",1)}e.5O=b;e.2l();7(A e.6.3s==="9"){e.6.3s.R(c,[e.$k])}},2l:9(){h e=c;7(e.6.1Z===j){e.1Z()}7(e.6.1B===j){e.1B()}e.4g();7(A e.6.3w==="9"){e.6.3w.R(c,[e.$k])}},3x:9(){h e=c;7(A e.6.3B==="9"){e.6.3B.R(c,[e.$k])}e.3o();e.2V();e.2W();e.4f();e.30();e.2l();7(A e.6.3D==="9"){e.6.3D.R(c,[e.$k])}},3F:9(){h e=c;t.1c(9(){e.3x()},0)},3o:9(){h e=c;7(e.$k.2m(":3n")===b){e.$k.z({2u:0});t.18(e.1C);t.18(e.1X)}l{p b}e.1X=t.4d(9(){7(e.$k.2m(":3n")){e.3F();e.$k.4b({2u:1},2M);t.18(e.1X)}},5x)},4B:9(){h e=c;e.$S.5n(\'<L H="d-1p">\').4a(\'<L H="d-1K"></L>\');e.$k.17(".d-1p").4a(\'<L H="d-1p-49">\');e.1H=e.$k.17(".d-1p-49");e.$k.z("4i","4h")},1M:9(){h e=c,t=e.$k.1I(e.6.1M),n=e.$k.1I(e.6.2i);7(!t){e.$k.I(e.6.1M)}7(!n){e.$k.I(e.6.2i)}},2V:9(){h t=c,n,r;7(t.6.2Z===b){p b}7(t.6.48===j){t.6.q=t.2t=1;t.6.1h=b;t.6.1s=b;t.6.1O=b;t.6.22=b;t.6.1Q=b;t.6.1R=b;p b}n=e(t.6.47).1f();7(n>(t.6.1s[0]||t.2t)){t.6.q=t.2t}7(t.6.1h!==b){t.6.1h.5g(9(e,t){p e[0]-t[0]});1A(r=0;r<t.6.1h.N;r+=1){7(t.6.1h[r][0]<=n){t.6.q=t.6.1h[r][1]}}}l{7(n<=t.6.1s[0]&&t.6.1s!==b){t.6.q=t.6.1s[1]}7(n<=t.6.1O[0]&&t.6.1O!==b){t.6.q=t.6.1O[1]}7(n<=t.6.22[0]&&t.6.22!==b){t.6.q=t.6.22[1]}7(n<=t.6.1Q[0]&&t.6.1Q!==b){t.6.q=t.6.1Q[1]}7(n<=t.6.1R[0]&&t.6.1R!==b){t.6.q=t.6.1R[1]}}7(t.6.q>t.E&&t.6.46===j){t.6.q=t.E}},4r:9(){h n=c,r,i;7(n.6.2Z!==j){p b}i=e(t).1f();n.3d=9(){7(e(t).1f()!==i){7(n.6.O!==b){t.18(n.1C)}t.5d(r);r=t.1c(9(){i=e(t).1f();n.3x()},n.6.45)}};e(t).44(n.3d)},4f:9(){h e=c;e.2g(e.m);7(e.6.O!==b){e.3j()}},43:9(){h t=c,n=0,r=t.E-t.6.q;t.$G.2f(9(i){h s=e(c);s.z({1f:t.M}).v("d-1K",3p(i));7(i%t.6.q===0||i===r){7(!(i>r)){n+=1}}s.v("d-24",n)})},42:9(){h e=c,t=e.$G.N*e.M;e.$K.z({1f:t*2,T:0});e.43()},2W:9(){h e=c;e.40();e.42();e.3Z();e.3v()},40:9(){h e=c;e.M=1F.4O(e.$k.1f()/e.6.q)},3v:9(){h e=c,t=(e.E*e.M-e.6.q*e.M)*-1;7(e.6.q>e.E){e.D=0;t=0;e.3z=0}l{e.D=e.E-e.6.q;e.3z=t}p t},3Y:9(){p 0},3Z:9(){h t=c,n=0,r=0,i,s,o;t.J=[0];t.3E=[];1A(i=0;i<t.E;i+=1){r+=t.M;t.J.2D(-r);7(t.6.12===j){s=e(t.$G[i]);o=s.v("d-24");7(o!==n){t.3E[n]=t.J[i];n=o}}}},4t:9(){h t=c;7(t.6.2a===j||t.6.1v===j){t.B=e(\'<L H="d-5A"/>\').5m("5l",!t.F.15).5c(t.$k)}7(t.6.1v===j){t.3T()}7(t.6.2a===j){t.3S()}},3S:9(){h t=c,n=e(\'<L H="d-4U"/>\');t.B.1o(n);t.1u=e("<L/>",{"H":"d-1n",2y:t.6.2U[0]||""});t.1q=e("<L/>",{"H":"d-U",2y:t.6.2U[1]||""});n.1o(t.1u).1o(t.1q);n.w("2X.B 21.B",\'L[H^="d"]\',9(e){e.1l()});n.w("2n.B 28.B",\'L[H^="d"]\',9(n){n.1l();7(e(c).1I("d-U")){t.U()}l{t.1n()}})},3T:9(){h t=c;t.1k=e(\'<L H="d-1v"/>\');t.B.1o(t.1k);t.1k.w("2n.B 28.B",".d-1j",9(n){n.1l();7(3p(e(c).v("d-1j"))!==t.m){t.1g(3p(e(c).v("d-1j")),j)}})},3P:9(){h t=c,n,r,i,s,o,u;7(t.6.1v===b){p b}t.1k.2y("");n=0;r=t.E-t.E%t.6.q;1A(s=0;s<t.E;s+=1){7(s%t.6.q===0){n+=1;7(r===s){i=t.E-t.6.q}o=e("<L/>",{"H":"d-1j"});u=e("<3N></3N>",{4R:t.6.39===j?n:"","H":t.6.39===j?"d-59":""});o.1o(u);o.v("d-1j",r===s?i:s);o.v("d-24",n);t.1k.1o(o)}}t.35()},35:9(){h t=c;7(t.6.1v===b){p b}t.1k.17(".d-1j").2f(9(){7(e(c).v("d-24")===e(t.$G[t.m]).v("d-24")){t.1k.17(".d-1j").Z("2d");e(c).I("2d")}})},3e:9(){h e=c;7(e.6.2a===b){p b}7(e.6.2e===b){7(e.m===0&&e.D===0){e.1u.I("1b");e.1q.I("1b")}l 7(e.m===0&&e.D!==0){e.1u.I("1b");e.1q.Z("1b")}l 7(e.m===e.D){e.1u.Z("1b");e.1q.I("1b")}l 7(e.m!==0&&e.m!==e.D){e.1u.Z("1b");e.1q.Z("1b")}}},30:9(){h e=c;e.3P();e.3e();7(e.B){7(e.6.q>=e.E){e.B.3K()}l{e.B.3J()}}},55:9(){h e=c;7(e.B){e.B.3k()}},U:9(e){h t=c;7(t.1E){p b}t.m+=t.6.12===j?t.6.q:1;7(t.m>t.D+(t.6.12===j?t.6.q-1:0)){7(t.6.2e===j){t.m=0;e="2k"}l{t.m=t.D;p b}}t.1g(t.m,e)},1n:9(e){h t=c;7(t.1E){p b}7(t.6.12===j&&t.m>0&&t.m<t.6.q){t.m=0}l{t.m-=t.6.12===j?t.6.q:1}7(t.m<0){7(t.6.2e===j){t.m=t.D;e="2k"}l{t.m=0;p b}}t.1g(t.m,e)},1g:9(e,n,r){h i=c,s;7(i.1E){p b}7(A i.6.1Y==="9"){i.6.1Y.R(c,[i.$k])}7(e>=i.D){e=i.D}l 7(e<=0){e=0}i.m=i.d.m=e;7(i.6.2o!==b&&r!=="4e"&&i.6.q===1&&i.F.1x===j){i.1t(0);7(i.F.1x===j){i.1L(i.J[e])}l{i.1r(i.J[e],1)}i.2r();i.4l();p b}s=i.J[e];7(i.F.1x===j){i.1T=b;7(n===j){i.1t("1w");t.1c(9(){i.1T=j},i.6.1w)}l 7(n==="2k"){i.1t(i.6.2v);t.1c(9(){i.1T=j},i.6.2v)}l{i.1t("1m");t.1c(9(){i.1T=j},i.6.1m)}i.1L(s)}l{7(n===j){i.1r(s,i.6.1w)}l 7(n==="2k"){i.1r(s,i.6.2v)}l{i.1r(s,i.6.1m)}}i.2r()},2g:9(e){h t=c;7(A t.6.1Y==="9"){t.6.1Y.R(c,[t.$k])}7(e>=t.D||e===-1){e=t.D}l 7(e<=0){e=0}t.1t(0);7(t.F.1x===j){t.1L(t.J[e])}l{t.1r(t.J[e],1)}t.m=t.d.m=e;t.2r()},2r:9(){h e=c;e.26.2D(e.m);e.13=e.d.13=e.26[e.26.N-2];e.26.5f(0);7(e.13!==e.m){e.35();e.3e();e.2l();7(e.6.O!==b){e.3j()}}7(A e.6.3y==="9"&&e.13!==e.m){e.6.3y.R(c,[e.$k])}},X:9(){h e=c;e.3A="X";t.18(e.1C)},3j:9(){h e=c;7(e.3A!=="X"){e.19()}},19:9(){h e=c;e.3A="19";7(e.6.O===b){p b}t.18(e.1C);e.1C=t.4d(9(){e.U(j)},e.6.O)},1t:9(e){h t=c;7(e==="1m"){t.$K.z(t.2z(t.6.1m))}l 7(e==="1w"){t.$K.z(t.2z(t.6.1w))}l 7(A e!=="2Y"){t.$K.z(t.2z(e))}},2z:9(e){p{"-1G-1a":"2C "+e+"1z 2s","-1W-1a":"2C "+e+"1z 2s","-o-1a":"2C "+e+"1z 2s",1a:"2C "+e+"1z 2s"}},3H:9(){p{"-1G-1a":"","-1W-1a":"","-o-1a":"",1a:""}},3I:9(e){p{"-1G-P":"1i("+e+"V, C, C)","-1W-P":"1i("+e+"V, C, C)","-o-P":"1i("+e+"V, C, C)","-1z-P":"1i("+e+"V, C, C)",P:"1i("+e+"V, C,C)"}},1L:9(e){h t=c;t.$K.z(t.3I(e))},3L:9(e){h t=c;t.$K.z({T:e})},1r:9(e,t){h n=c;n.29=b;n.$K.X(j,j).4b({T:e},{54:t||n.6.1m,3M:9(){n.29=j}})},4E:9(){h e=c,r="1i(C, C, C)",i=n.56("L"),s,o,u,a;i.2w.3O="  -1W-P:"+r+"; -1z-P:"+r+"; -o-P:"+r+"; -1G-P:"+r+"; P:"+r;s=/1i\\(C, C, C\\)/g;o=i.2w.3O.5i(s);u=o!==14&&o.N===1;a="5z"38 t||t.5Q.4P;e.F={1x:u,15:a}},4q:9(){h e=c;7(e.6.27!==b||e.6.1U!==b){e.3Q();e.3R()}},4C:9(){h e=c,t=["s","e","x"];e.16={};7(e.6.27===j&&e.6.1U===j){t=["2X.d 21.d","2N.d 3U.d","2n.d 3V.d 28.d"]}l 7(e.6.27===b&&e.6.1U===j){t=["2X.d","2N.d","2n.d 3V.d"]}l 7(e.6.27===j&&e.6.1U===b){t=["21.d","3U.d","28.d"]}e.16.3W=t[0];e.16.2K=t[1];e.16.2J=t[2]},3R:9(){h t=c;t.$k.w("5y.d",9(e){e.1l()});t.$k.w("21.3X",9(t){p e(t.1d).2m("5C, 5E, 5F, 5N")})},3Q:9(){9 s(e){7(e.2b!==W){p{x:e.2b[0].2c,y:e.2b[0].41}}7(e.2b===W){7(e.2c!==W){p{x:e.2c,y:e.41}}7(e.2c===W){p{x:e.52,y:e.53}}}}9 o(t){7(t==="w"){e(n).w(r.16.2K,a);e(n).w(r.16.2J,f)}l 7(t==="Q"){e(n).Q(r.16.2K);e(n).Q(r.16.2J)}}9 u(n){h u=n.3h||n||t.3g,a;7(u.5a===3){p b}7(r.E<=r.6.q){p}7(r.29===b&&!r.6.3f){p b}7(r.1T===b&&!r.6.3f){p b}7(r.6.O!==b){t.18(r.1C)}7(r.F.15!==j&&!r.$K.1I("3b")){r.$K.I("3b")}r.11=0;r.Y=0;e(c).z(r.3H());a=e(c).2h();i.2S=a.T;i.2R=s(u).x-a.T;i.2P=s(u).y-a.5o;o("w");i.2j=b;i.2L=u.1d||u.4c}9 a(o){h u=o.3h||o||t.3g,a,f;r.11=s(u).x-i.2R;r.2I=s(u).y-i.2P;r.Y=r.11-i.2S;7(A r.6.2E==="9"&&i.3C!==j&&r.Y!==0){i.3C=j;r.6.2E.R(r,[r.$k])}7((r.Y>8||r.Y<-8)&&r.F.15===j){7(u.1l!==W){u.1l()}l{u.5L=b}i.2j=j}7((r.2I>10||r.2I<-10)&&i.2j===b){e(n).Q("2N.d")}a=9(){p r.Y/5};f=9(){p r.3z+r.Y/5};r.11=1F.3v(1F.3Y(r.11,a()),f());7(r.F.1x===j){r.1L(r.11)}l{r.3L(r.11)}}9 f(n){h s=n.3h||n||t.3g,u,a,f;s.1d=s.1d||s.4c;i.3C=b;7(r.F.15!==j){r.$K.Z("3b")}7(r.Y<0){r.1y=r.d.1y="T"}l{r.1y=r.d.1y="3i"}7(r.Y!==0){u=r.4j();r.1g(u,b,"4e");7(i.2L===s.1d&&r.F.15!==j){e(s.1d).w("3a.4k",9(t){t.4S();t.4T();t.1l();e(t.1d).Q("3a.4k")});a=e.4N(s.1d,"4V").3a;f=a.4W();a.4X(0,0,f)}}o("Q")}h r=c,i={2R:0,2P:0,4Y:0,2S:0,2h:14,4Z:14,50:14,2j:14,51:14,2L:14};r.29=j;r.$k.w(r.16.3W,".d-1p",u)},4j:9(){h e=c,t=e.4m();7(t>e.D){e.m=e.D;t=e.D}l 7(e.11>=0){t=0;e.m=0}p t},4m:9(){h t=c,n=t.6.12===j?t.3E:t.J,r=t.11,i=14;e.2f(n,9(s,o){7(r-t.M/20>n[s+1]&&r-t.M/20<o&&t.34()==="T"){i=o;7(t.6.12===j){t.m=e.4p(i,t.J)}l{t.m=s}}l 7(r+t.M/20<o&&r+t.M/20>(n[s+1]||n[s]-t.M)&&t.34()==="3i"){7(t.6.12===j){i=n[s+1]||n[n.N-1];t.m=e.4p(i,t.J)}l{i=n[s+1];t.m=s+1}}});p t.m},34:9(){h e=c,t;7(e.Y<0){t="3i";e.3u="U"}l{t="T";e.3u="1n"}p t},4A:9(){h e=c;e.$k.w("d.U",9(){e.U()});e.$k.w("d.1n",9(){e.1n()});e.$k.w("d.19",9(t,n){e.6.O=n;e.19();e.32="19"});e.$k.w("d.X",9(){e.X();e.32="X"});e.$k.w("d.1g",9(t,n){e.1g(n)});e.$k.w("d.2g",9(t,n){e.2g(n)})},2p:9(){h e=c;7(e.6.2p===j&&e.F.15!==j&&e.6.O!==b){e.$k.w("57",9(){e.X()});e.$k.w("58",9(){7(e.32!=="X"){e.19()}})}},1Z:9(){h t=c,n,r,i,s,o;7(t.6.1Z===b){p b}1A(n=0;n<t.E;n+=1){r=e(t.$G[n]);7(r.v("d-1e")==="1e"){4s}i=r.v("d-1K");s=r.17(".5b");7(A s.v("1J")!=="2Y"){r.v("d-1e","1e");4s}7(r.v("d-1e")===W){s.3K();r.I("4u").v("d-1e","5e")}7(t.6.4v===j){o=i>=t.m}l{o=j}7(o&&i<t.m+t.6.q&&s.N){t.4w(r,s)}}},4w:9(e,n){9 o(){e.v("d-1e","1e").Z("4u");n.5h("v-1J");7(r.6.4x==="4y"){n.5j(5k)}l{n.3J()}7(A r.6.2T==="9"){r.6.2T.R(c,[r.$k])}}9 u(){i+=1;7(r.2Q(n.3l(0))||s===j){o()}l 7(i<=2q){t.1c(u,2q)}l{o()}}h r=c,i=0,s;7(n.5p("5q")==="5r"){n.z("5s-5t","5u("+n.v("1J")+")");s=j}l{n[0].1J=n.v("1J")}u()},1B:9(){9 s(){h r=e(n.$G[n.m]).2G();n.1H.z("2G",r+"V");7(!n.1H.1I("1B")){t.1c(9(){n.1H.I("1B")},0)}}9 o(){i+=1;7(n.2Q(r.3l(0))){s()}l 7(i<=2q){t.1c(o,2q)}l{n.1H.z("2G","")}}h n=c,r=e(n.$G[n.m]).17("5w"),i;7(r.3l(0)!==W){i=0;o()}l{s()}},2Q:9(e){h t;7(!e.3M){p b}t=A e.4D;7(t!=="W"&&e.4D===0){p b}p j},4g:9(){h t=c,n;7(t.6.2F===j){t.$G.Z("2d")}t.1D=[];1A(n=t.m;n<t.m+t.6.q;n+=1){t.1D.2D(n);7(t.6.2F===j){e(t.$G[n]).I("2d")}}t.d.1D=t.1D},4n:9(e){h t=c;t.4G="d-"+e+"-5B";t.4H="d-"+e+"-38"},4l:9(){9 a(e){p{2h:"5D",T:e+"V"}}h e=c,t=e.4G,n=e.4H,r=e.$G.1S(e.m),i=e.$G.1S(e.13),s=1F.4J(e.J[e.m])+e.J[e.13],o=1F.4J(e.J[e.m])+e.M/2,u="5G 5H 5I 5J";e.1E=j;e.$K.I("d-1P").z({"-1G-P-1P":o+"V","-1W-4K-1P":o+"V","4K-1P":o+"V"});i.z(a(s,10)).I(t).w(u,9(){e.3m=j;i.Q(u);e.31(i,t)});r.I(n).w(u,9(){e.36=j;r.Q(u);e.31(r,n)})},31:9(e,t){h n=c;e.z({2h:"",T:""}).Z(t);7(n.3m&&n.36){n.$K.Z("d-1P");n.3m=b;n.36=b;n.1E=b}},4o:9(){h e=c;e.d={2A:e.2A,5P:e.$k,S:e.$S,G:e.$G,m:e.m,13:e.13,1D:e.1D,15:e.F.15,F:e.F,1y:e.1y}},3G:9(){h r=c;r.$k.Q(".d d 21.3X");e(n).Q(".d d");e(t).Q("44",r.3d)},1V:9(){h e=c;7(e.$k.25().N!==0){e.$K.3r();e.$S.3r().3r();7(e.B){e.B.3k()}}e.3G();e.$k.2x("2w",e.$k.v("d-4I")||"").2x("H",e.$k.v("d-4F"))},5T:9(){h e=c;e.X();t.18(e.1X);e.1V();e.$k.5U()},5V:9(t){h n=c,r=e.4M({},n.2A,t);n.1V();n.1N(r,n.$k)},5W:9(e,t){h n=c,r;7(!e){p b}7(n.$k.25().N===0){n.$k.1o(e);n.23();p b}n.1V();7(t===W||t===-1){r=-1}l{r=t}7(r>=n.$S.N||r===-1){n.$S.1S(-1).5X(e)}l{n.$S.1S(r).5Y(e)}n.23()},5Z:9(e){h t=c,n;7(t.$k.25().N===0){p b}7(e===W||e===-1){n=-1}l{n=e}t.1V();t.$S.1S(n).3k();t.23()}};e.37.2B=9(t){p c.2f(9(){7(e(c).v("d-1N")===j){p b}e(c).v("d-1N",j);h n=3c.3q(r);n.1N(t,c);e.v(c,"2B",n)})};e.37.2B.6={q:5,1h:b,1s:[60,4],1O:[61,3],22:[62,2],1Q:b,1R:[63,1],48:b,46:b,1m:2M,1w:64,2v:65,O:b,2p:b,2a:b,2U:["1n","U"],2e:j,12:b,1v:j,39:b,2Z:j,45:2M,47:t,1M:"d-66",2i:"d-2i",1Z:b,4v:j,4x:"4y",1B:b,2O:b,33:b,3f:j,27:j,1U:j,2F:b,2o:b,3B:b,3D:b,2H:b,3s:b,1Y:b,3y:b,3w:b,2E:b,2T:b}})(67,68,69)',62,382,'||||||options|if||function||false|this|owl||||var||true|elem|else|currentItem|||return|items|||||data|on|||css|typeof|owlControls|0px|maximumItem|itemsAmount|browser|owlItems|class|addClass|positionsInArray|owlWrapper|div|itemWidth|length|autoPlay|transform|off|apply|userItems|left|next|px|undefined|stop|newRelativeX|removeClass||newPosX|scrollPerPage|prevItem|null|isTouch|ev_types|find|clearInterval|play|transition|disabled|setTimeout|target|loaded|width|goTo|itemsCustom|translate3d|page|paginationWrapper|preventDefault|slideSpeed|prev|append|wrapper|buttonNext|css2slide|itemsDesktop|swapSpeed|buttonPrev|pagination|paginationSpeed|support3d|dragDirection|ms|for|autoHeight|autoPlayInterval|visibleItems|isTransition|Math|webkit|wrapperOuter|hasClass|src|item|transition3d|baseClass|init|itemsDesktopSmall|origin|itemsTabletSmall|itemsMobile|eq|isCss3Finish|touchDrag|unWrap|moz|checkVisible|beforeMove|lazyLoad||mousedown|itemsTablet|setVars|roundPages|children|prevArr|mouseDrag|mouseup|isCssFinish|navigation|touches|pageX|active|rewindNav|each|jumpTo|position|theme|sliding|rewind|eachMoveUpdate|is|touchend|transitionStyle|stopOnHover|100|afterGo|ease|originalItems|opacity|rewindSpeed|style|attr|html|addCssSpeed|userOptions|owlCarousel|all|push|startDragging|addClassActive|height|beforeInit|newPosY|end|move|targetElement|200|touchmove|jsonPath|offsetY|completeImg|offsetX|relativePos|afterLazyLoad|navigationText|updateItems|calculateAll|touchstart|string|responsive|updateControls|clearTransStyle|hoverStatus|jsonSuccess|moveDirection|checkPagination|endCurrent|fn|in|paginationNumbers|click|grabbing|Object|resizer|checkNavigation|dragBeforeAnimFinish|event|originalEvent|right|checkAp|remove|get|endPrev|visible|watchVisibility|Number|create|unwrap|afterInit|logIn|playDirection|max|afterAction|updateVars|afterMove|maximumPixels|apStatus|beforeUpdate|dragging|afterUpdate|pagesInArray|reload|clearEvents|removeTransition|doTranslate|show|hide|css2move|complete|span|cssText|updatePagination|gestures|disabledEvents|buildButtons|buildPagination|mousemove|touchcancel|start|disableTextSelect|min|loops|calculateWidth|pageY|appendWrapperSizes|appendItemsSizes|resize|responsiveRefreshRate|itemsScaleUp|responsiveBaseWidth|singleItem|outer|wrap|animate|srcElement|setInterval|drag|updatePosition|onVisibleItems|block|display|getNewPosition|disable|singleItemTransition|closestItem|transitionTypes|owlStatus|inArray|moveEvents|response|continue|buildControls|loading|lazyFollow|lazyPreload|lazyEffect|fade|onStartup|customEvents|wrapItems|eventTypes|naturalWidth|checkBrowser|originalClasses|outClass|inClass|originalStyles|abs|perspective|loadContent|extend|_data|round|msMaxTouchPoints|5e3|text|stopImmediatePropagation|stopPropagation|buttons|events|pop|splice|baseElWidth|minSwipe|maxSwipe|dargging|clientX|clientY|duration|destroyControls|createElement|mouseover|mouseout|numbers|which|lazyOwl|appendTo|clearTimeout|checked|shift|sort|removeAttr|match|fadeIn|400|clickable|toggleClass|wrapAll|top|prop|tagName|DIV|background|image|url|wrapperWidth|img|500|dragstart|ontouchstart|controls|out|input|relative|textarea|select|webkitAnimationEnd|oAnimationEnd|MSAnimationEnd|animationend|getJSON|returnValue|hasOwnProperty|option|onstartup|baseElement|navigator|new|prototype|destroy|removeData|reinit|addItem|after|before|removeItem|1199|979|768|479|800|1e3|carousel|jQuery|window|document'.split('|'),0,{}));


/* isotope - from hazel html version */
;(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);

/*!
 * SelectWoo 1.0.6
 * https://github.com/woocommerce/selectWoo
 *
 * Released under the MIT license
 * https://github.com/woocommerce/selectWoo/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  // Determine whether the browser is on a touchscreen device.
  Utils.isTouchscreen = function() {
    if ('undefined' === typeof Utils._isTouchscreenCache) {
      Utils._isTouchscreenCache = 'ontouchstart' in document.documentElement;
    }
    return Utils._isTouchscreenCache;
  }

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="listbox" tabindex="-1"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[data-selected]');

    var $selected = $options.filter('[data-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[data-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('data-selected', 'true');
        } else {
          $option.attr('data-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'option',
      'data-selected': 'false',
      'tabindex': -1
    };

    if (data.disabled) {
      delete attrs['data-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['data-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs['aria-label'] = data.text;
      delete attrs['data-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);
      $label.attr('role', 'presentation');

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested',
        'role': 'listbox'
      });
      $childrenContainer.append($children);
      $option.attr('role', 'list');

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('data-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[data-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[data-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted').attr('aria-selected', 'true');
      self.$results.attr('aria-activedescendant', params.element.attr('id'));
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[data-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('data-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[data-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted')
          .attr('aria-selected', 'false');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[data-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';
    var searchHidden = this.options.get('minimumResultsForSearch') === Infinity;

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      // This needs to be delayed as the active element is the body when the
      // key is pressed.
      window.setTimeout(function () {
        self.$selection.focus();
      }, 1);

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');
        $element.select2('close');

        // Remove any focus when dropdown is closed by clicking outside the select area.
        // Timeout of 1 required for close to finish wrapping up.
        setTimeout(function(){
         $this.find('*:focus').blur();
         $target.focus();
        }, 1);
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);

    // This makes single non-search selects work in screen readers. If it causes problems elsewhere, remove.
    this.$selection.attr('role', 'combobox');

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('keydown', function (evt) {
      // If user starts typing an alphanumeric key on the keyboard, open if not opened.
      if (!container.isOpen() && evt.which >= 48 && evt.which <= 90) {
        container.open();
      }
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered" aria-live="polite" aria-relevant="additions removals" aria-atomic="true"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );

    this.$selection.on('keydown', function (evt) {
      // If user starts typing an alphanumeric key on the keyboard, open if not opened.
      if (!container.isOpen() && evt.which >= 48 && evt.which <= 90) {
        container.open();
      }
    });

    // Focus on the search field when the container is focused instead of the main container.
    container.on( 'focus', function(){
      self.focusOnSearch();
    });
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation" aria-hidden="true">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  /**
   * Focus on the search field instead of the main multiselect container.
   */
  MultipleSelection.prototype.focusOnSearch = function() {
    var self = this;

    if ('undefined' !== typeof self.$search) {
      // Needs 1 ms delay because of other 1 ms setTimeouts when rendering.
      setTimeout(function(){
        // Prevent the dropdown opening again when focused from this.
        // This gets reset automatically when focus is triggered.
        self._keyUpPrevented = true;

        self.$search.focus();
      }, 1);
    }
  }

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);
      if ('string' === typeof formatted) {
        formatted = formatted.trim();
      }

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="text" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.attr('aria-owns', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.removeAttr('aria-owns');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.data._resultId);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      } else if (evt.which === KEYS.ENTER) {
        container.open();
        evt.preventDefault();
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = '';

    if (container != null) {
      id += container.id
    } else {
      id += Utils.generateChars(4);
    }

    id += '-result-';
    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
        self.container.focusOnActiveElement();
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="text" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="true" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-owns', resultsId);
      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-activedescendant');
      self.$search.removeAttr('aria-owns');
      self.$search.val('');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.data._resultId);
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('open', function(){
      // Focus on the active element when opening dropdown.
      // Needs 1 ms delay because of other 1 ms setTimeouts when rendering.
      setTimeout(function(){
        self.focusOnActiveElement();
      }, 1);
    });

    $(document).on('keydown', function (evt) {
      var key = evt.which;
      if (self.isOpen()) {
        if (key === KEYS.ESC || (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER || key === KEYS.TAB) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }

        var $searchField = self.$dropdown.find('.select2-search__field');
        if (! $searchField.length) {
          $searchField = self.$container.find('.select2-search__field');
        }

        // Move the focus to the selected element on keyboard navigation.
        // Required for screen readers to work properly.
        if (key === KEYS.DOWN || key === KEYS.UP) {
            self.focusOnActiveElement();
        } else {
          // Focus on the search if user starts typing.
          $searchField.focus();
          // Focus back to active selection when finished typing.
          // Small delay so typed character can be read by screen reader.
          setTimeout(function(){
              self.focusOnActiveElement();
          }, 1000);
        }
      } else if (self.hasFocus()) {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            key === KEYS.DOWN) {
          self.open();
          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype.focusOnActiveElement = function () {
    // Don't mess with the focus on touchscreens because it causes havoc with on-screen keyboards.
    if (this.isOpen() && ! Utils.isTouchscreen()) {
      this.$results.find('li.select2-results__option--highlighted').focus();
    }
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.selectWoo == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.selectWoo = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2 != null && $.fn.select2.defaults != null) {
    $.fn.selectWoo.defaults = $.fn.select2.defaults;
  }

  if ($.fn.selectWoo.defaults == null) {
    $.fn.selectWoo.defaults = Defaults;
  }

  // Also register selectWoo under select2 if select2 is not already present.
  $.fn.select2 = $.fn.select2 || $.fn.selectWoo;

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;
  jQuery.fn.selectWoo.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));


/*jquery.mb.YTPlayer 13-11-2020
 _ jquery.mb.components 
 _ email: matbicoc@gmail.com 
 _ Copyright (c) 2001-2020. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */

var ytp=ytp||{};let YTPrndSuffix=(new Date).getTime(),YTPtimerLabels={init:"YTPlayerInit_"+YTPrndSuffix,startPlaying:"YTPlayerStartPlay_"+YTPrndSuffix};function onYouTubeIframeAPIReady(){ytp.YTAPIReady||(ytp.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"))}let getYTPVideoID=function(e){let r,t;return e.indexOf("youtu.be")>0||e.indexOf("youtube.com/embed")>0?r=(t=(r=e.substr(e.lastIndexOf("/")+1,e.length)).indexOf("?list=")>0?r.substr(r.lastIndexOf("="),r.length):null)?r.substr(0,r.lastIndexOf("?")):r:e.indexOf("http")>-1?(r=e.match(/[\\?&]v=([^&#]*)/)[1],t=e.indexOf("list=")>0?e.match(/[\\?&]list=([^&#]*)/)[1]:null):t=(r=e.length>15?null:e)?null:e,{videoID:r,playlistID:t}};function iOSversion(){if(/iP(hone|od|ad)/.test(navigator.platform)){let e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return[parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3]||0,10)]}}!function(jQuery,ytp){jQuery.mbYTPlayer={name:"jquery.mb.YTPlayer",version:"3.3.5",build:"7541",author:"Matteo Bicocchi (pupunzi)",apiKey:"",defaults:{videoURL:null,containment:"body",ratio:"auto",fadeOnStartTime:1e3,startAt:0,stopAt:0,autoPlay:!0,delayAtStart:1e3,coverImage:!1,loop:!0,addRaster:!1,mask:!1,opacity:1,quality:"hd1080",vol:50,mute:!1,showControls:!0,anchor:"center,center",showAnnotations:!1,cc_load_policy:!1,showYTLogo:!0,useOnMobile:!0,playOnlyIfVisible:!1,onScreenPercentage:30,goFullScreenOnPlay:!1,stopMovieOnBlur:!0,realFullscreen:!0,optimizeDisplay:!0,abundance:.3,gaTrack:!0,remember_last_time:!1,addFilters:!1,onReady:function(e){},onError:function(e,r){},onEnd:function(){}},controls:{play:"P",pause:"p",mute:"M",unmute:"A",onlyYT:"O",showSite:"R",ytLogo:"Y"},controlBar:null,locationProtocol:"https:",defaultFilters:{grayscale:{value:0,unit:"%"},hue_rotate:{value:0,unit:"deg"},invert:{value:0,unit:"%"},opacity:{value:0,unit:"%"},saturate:{value:0,unit:"%"},sepia:{value:0,unit:"%"},brightness:{value:0,unit:"%"},contrast:{value:0,unit:"%"},blur:{value:0,unit:"px"}},buildPlayer:function(options){if(ytp.YTAPIReady||void 0!==window.YT)setTimeout(function(){jQuery(document).trigger("YTAPIReady"),ytp.YTAPIReady=!0},100);else{jQuery("#YTAPI").remove();let e=jQuery("<script>").attr({src:"https://www.youtube.com/iframe_api?v="+jQuery.mbYTPlayer.version,id:"YTAPI"});jQuery("head").prepend(e)}function isIframe(){let e=!1;try{self.location.href!==top.location.href&&(e=!0)}catch(r){e=!0}return e}return this.each(function(){let YTPlayer=this,$YTPlayer=jQuery(YTPlayer);$YTPlayer.hide(),YTPlayer.loop=0,YTPlayer.state=0,YTPlayer.filters=jQuery.extend(!0,{},jQuery.mbYTPlayer.defaultFilters),YTPlayer.filtersEnabled=!0,YTPlayer.id=YTPlayer.id||"YTP_"+(new Date).getTime(),$YTPlayer.addClass("mb_YTPlayer");let property=$YTPlayer.data("property")&&"string"==typeof $YTPlayer.data("property")?eval("("+$YTPlayer.data("property")+")"):$YTPlayer.data("property");"object"!=typeof property&&(property={}),YTPlayer.opt=jQuery.extend(!0,{},jQuery.mbYTPlayer.defaults,YTPlayer.opt,options,property),YTPrndSuffix=getYTPVideoID(YTPlayer.opt.videoURL).videoID,YTPtimerLabels={init:"YTPlayerInit_"+YTPrndSuffix,startPlaying:"YTPlayerStartPlay_"+YTPrndSuffix},console.time(YTPtimerLabels.init),console.time(YTPtimerLabels.startPlaying),YTPlayer.opt.elementId=YTPlayer.id,0===YTPlayer.opt.vol&&(YTPlayer.opt.vol=1,YTPlayer.opt.mute=!0),YTPlayer.opt.autoPlay&&!1===YTPlayer.opt.mute&&jQuery.mbBrowser.chrome&&(jQuery(document).one("mousedown.YTPstart",function(){$YTPlayer.YTPPlay()}),console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")),YTPlayer.opt.loop&&"boolean"==typeof YTPlayer.opt.loop&&(YTPlayer.opt.loop=9999);let fullScreenAvailable=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled;YTPlayer.opt.realFullscreen=!(isIframe()||!fullScreenAvailable)&&YTPlayer.opt.realFullscreen,YTPlayer.opt.showAnnotations=YTPlayer.opt.showAnnotations?"1":"3",YTPlayer.opt.cc_load_policy=YTPlayer.opt.cc_load_policy?"1":"0",YTPlayer.opt.coverImage=YTPlayer.opt.coverImage||YTPlayer.opt.backgroundImage,YTPlayer.opt.quality="hd1080",jQuery.mbBrowser.msie&&jQuery.mbBrowser.version<9&&(YTPlayer.opt.opacity=1),YTPlayer.opt.containment="self"===YTPlayer.opt.containment?$YTPlayer:jQuery(YTPlayer.opt.containment),YTPlayer.isRetina=window.retina||window.devicePixelRatio>1,YTPlayer.opt.ratio="auto"===YTPlayer.opt.ratio?16/9:YTPlayer.opt.ratio,YTPlayer.opt.ratio=eval(YTPlayer.opt.ratio);let origContainmentBackground=YTPlayer.opt.containment.css("background-image");origContainmentBackground="none"===origContainmentBackground?null:origContainmentBackground,YTPlayer.orig_containment_background=origContainmentBackground,$YTPlayer.attr("id")||$YTPlayer.attr("id","ytp_"+(new Date).getTime()),YTPlayer.playerID="iframe_"+YTPlayer.id,YTPlayer.isAlone=!1,YTPlayer.hasFocus=!0,YTPlayer.videoID=YTPlayer.opt.videoURL?getYTPVideoID(YTPlayer.opt.videoURL).videoID:!!$YTPlayer.attr("href")&&getYTPVideoID($YTPlayer.attr("href")).videoID,YTPlayer.playlistID=YTPlayer.opt.videoURL?getYTPVideoID(YTPlayer.opt.videoURL).playlistID:!!$YTPlayer.attr("href")&&getYTPVideoID($YTPlayer.attr("href")).playlistID;let start_from_last=0;if(jQuery.mbCookie.get("YTPlayer_start_from"+YTPlayer.videoID)&&(start_from_last=parseFloat(jQuery.mbCookie.get("YTPlayer_start_from"+YTPlayer.videoID))),YTPlayer.opt.remember_last_time&&start_from_last&&(YTPlayer.start_from_last=start_from_last,jQuery.mbCookie.remove("YTPlayer_start_from"+YTPlayer.videoID)),YTPlayer.isPlayer=$YTPlayer.is(YTPlayer.opt.containment),YTPlayer.isBackground=YTPlayer.opt.containment.is("body"),YTPlayer.isBackground&&ytp.backgroundIsInited)return;if(YTPlayer.isPlayer&&$YTPlayer.show(),YTPlayer.overlay=jQuery("<div/>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).addClass("YTPOverlay"),$YTPlayer.changeCoverImage(),YTPlayer.wrapper=jQuery("<div/>").attr("id","wrapper_"+YTPlayer.id).css({position:"absolute",zIndex:0,minWidth:"100%",minHeight:"100%",left:0,top:0,overflow:"hidden",opacity:0}).addClass("mbYTP_wrapper"),YTPlayer.isPlayer){let e=jQuery.browser.mobile?"inlinePlayButtonMobile":"inlinePlayButton";YTPlayer.inlinePlayButton=jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play),$YTPlayer.append(YTPlayer.inlinePlayButton),YTPlayer.inlinePlayButton.on("click",function(e){$YTPlayer.YTPPlay(),YTPlayer.inlinePlayButton.hide(),YTPlayer.opt.goFullScreenOnPlay&&$YTPlayer.YTPFullscreen(),e.stopPropagation()}),YTPlayer.opt.autoPlay&&YTPlayer.inlinePlayButton.hide(),YTPlayer.overlay.on("click",function(){$YTPlayer.YTPTogglePlay(),YTPlayer.opt.goFullScreenOnPlay&&$YTPlayer.YTPFullscreen()}).css({cursor:"pointer"})}let playerBox=jQuery("<div/>").attr("id",YTPlayer.playerID).addClass("playerBox");if(playerBox.css({position:"absolute",zIndex:0,width:"100%",height:"100%",top:0,left:0,overflow:"hidden",opacity:1}),YTPlayer.wrapper.append(playerBox),playerBox.after(YTPlayer.overlay),YTPlayer.isPlayer&&(YTPlayer.inlineWrapper=jQuery("<div/>").addClass("inline-YTPlayer"),YTPlayer.inlineWrapper.css({position:"relative",maxWidth:YTPlayer.opt.containment.css("width")}),YTPlayer.opt.containment.css({position:"relative",paddingBottom:"56.25%",overflow:"hidden",height:0}),YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),YTPlayer.opt.containment.children().not("script, style").each(function(){"static"===jQuery(this).css("position")&&jQuery(this).css("position","relative")}),YTPlayer.isBackground?(jQuery("body").css({boxSizing:"border-box"}),YTPlayer.wrapper.css({position:"fixed",top:0,left:0,zIndex:0})):"static"===YTPlayer.opt.containment.css("position")&&(YTPlayer.opt.containment.css({position:"relative"}),$YTPlayer.show()),YTPlayer.opt.containment.prepend(YTPlayer.wrapper),YTPlayer.isBackground||YTPlayer.overlay.on("mouseenter",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.addClass("visible")}).on("mouseleave",function(){YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.removeClass("visible")}),jQuery.mbBrowser.mobile&&!YTPlayer.opt.useOnMobile)return YTPlayer.opt.coverImage&&(YTPlayer.wrapper.css({backgroundImage:"url("+YTPlayer.opt.coverImage+")",backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat",opacity:1}),YTPlayer.wrapper.css({opacity:1})),$YTPlayer;jQuery.mbBrowser.mobile&&YTPlayer.opt.autoPlay&&YTPlayer.opt.useOnMobile&&jQuery("body").one("touchstart",function(){YTPlayer.player.playVideo()}),jQuery(document).one("YTAPIReady",function(){$YTPlayer.trigger("YTAPIReady_"+YTPlayer.id),ytp.YTAPIReady=!0}),YTPlayer.isOnScreen=jQuery.mbYTPlayer.isOnScreen(YTPlayer,YTPlayer.opt.onScreenPercentage),$YTPlayer.one("YTAPIReady_"+YTPlayer.id,function(){let e=this,r=jQuery(e);e.isBackground&&ytp.backgroundIsInited||e.isInit||(e.isBackground&&(ytp.backgroundIsInited=!0),e.opt.autoPlay=void 0===e.opt.autoPlay?!!e.isBackground:e.opt.autoPlay,e.opt.vol=e.opt.vol?e.opt.vol:100,jQuery.mbYTPlayer.getDataFromAPI(e),jQuery(e).on("YTPChanged",function(t){if(e.isInit)return;e.isInit=!0;let a={modestbranding:1,autoplay:0,controls:0,showinfo:0,rel:0,enablejsapi:1,version:3,playerapiid:e.playerID,origin:"*",allowfullscreen:!0,wmode:"transparent",iv_load_policy:e.opt.showAnnotations,cc_load_policy:e.opt.cc_load_policy,playsinline:jQuery.mbBrowser.mobile&&!e.isPlayer?1:0,html5:document.createElement("video").canPlayType?1:0};new YT.Player(e.playerID,{playerVars:a,events:{onReady:function(t){e.player=t.target,e.player.loadVideoById({videoId:e.videoID.toString(),suggestedQuality:e.opt.quality}),r.trigger("YTPlayerIsReady_"+e.id)},onStateChange:function(r){if("function"!=typeof r.target.getPlayerState)return;let t,a=r.target.getPlayerState();if(e.preventTrigger||e.isStarting)return void(e.preventTrigger=!1);switch(e.state=a,r.data===YT.PlayerState.PLAYING&&r.target.setPlaybackQuality(e.opt.quality),a){case-1:t="YTPUnstarted";break;case 0:t="YTPRealEnd";break;case 1:t="YTPPlay",e.controlBar.length&&e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause),e.isPlayer&&e.inlinePlayButton.hide(),jQuery(document).off("mousedown.YTPstart");break;case 2:t="YTPPause",e.controlBar.length&&e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play),e.isPlayer&&e.inlinePlayButton.show();break;case 3:e.player.setPlaybackQuality(e.opt.quality),t="YTPBuffering",e.controlBar.length&&e.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);break;case 5:t="YTPCued"}let o=jQuery.Event(t);o.time=e.currentTime,jQuery(e).trigger(o)},onPlaybackQualityChange:function(r){let t=r.target.getPlaybackQuality(),a=jQuery.Event("YTPQualityChange");a.quality=t,jQuery(e).trigger(a)},onError:function(t){switch("function"==typeof e.opt.onError&&e.opt.onError(r,t),console.debug("error:",t),t.data){case 2:console.error("video ID:: "+e.videoID+": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");break;case 5:console.error("video ID:: "+e.videoID+": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");break;case 100:console.error("video ID:: "+e.videoID+": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");break;case 101:case 150:console.error("video ID:: "+e.videoID+": The video doesn't exist or The owner does not allow it to be played in embedded players.")}e.isList&&jQuery(e).YTPPlayNext()}}}),r.on("YTPlayerIsReady_"+e.id,function(){if(e.isReady)return this;e.playerEl=e.player.getIframe(),jQuery(e.playerEl).unselectable(),r.optimizeDisplay(),jQuery(window).off("resize.YTP_"+e.id).on("resize.YTP_"+e.id,function(){r.optimizeDisplay()}),jQuery(window).off("orientationchange.YTP_"+e.id).on("orientationchange.YTP_"+e.id,function(){r.optimizeDisplay()}),e.opt.remember_last_time&&jQuery(window).on("unload.YTP_"+e.id,function(){let r=e.player.getCurrentTime();jQuery.mbCookie.set("YTPlayer_start_from"+e.videoID,r,0)}),r.YTPCheckForState()})}))}),$YTPlayer.off("YTPTime.mask"),jQuery.mbYTPlayer.applyMask(YTPlayer),console.timeEnd(YTPtimerLabels.init),setTimeout(function(){ytp.YTAPIReady||"object"!=typeof window.YT||(jQuery(document).trigger("YTAPIReady"),ytp.YTAPIReady=!0,console.error("YTPlayer: More then a call to the YT API has been detected"))},YTPlayer.opt.delayAtStart)})},isOnScreen:function(e,r){r=r||10;let t=e.wrapper,a=jQuery(window).scrollTop(),o=a+jQuery(window).height(),i=t.height()*r/100,n=t.offset().top+i;return t.offset().top+(t.height()-i)<=o&&n>=a},getDataFromAPI:function(e){e.videoData=jQuery.mbStorage.get("YTPlayer_data_"+e.videoID),e.videoData?(setTimeout(function(){e.dataReceived=!0;let r=jQuery.Event("YTPChanged");r.time=e.currentTime,r.videoId=e.videoID,r.opt=e.opt,jQuery(e).trigger(r);let t=jQuery.Event("YTPData");t.prop={};for(let r in e.videoData)e.videoData.hasOwnProperty(r)&&(t.prop[r]=e.videoData[r]);jQuery(e).trigger(t)},e.opt.fadeOnStartTime),e.hasData=!0):jQuery.mbYTPlayer.apiKey?jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id="+e.videoID+"&key="+jQuery.mbYTPlayer.apiKey+"&part=snippet",function(r){e.dataReceived=!0;let t=jQuery.Event("YTPChanged");t.time=e.currentTime,t.videoId=e.videoID,jQuery(e).trigger(t),r.items[0]?(!function(r){e.videoData={},e.videoData.id=e.videoID,e.videoData.channelTitle=r.channelTitle,e.videoData.title=r.title,e.videoData.description=r.description.length<400?r.description:r.description.substring(0,400)+" ...",e.videoData.thumb_max=r.thumbnails.maxres?r.thumbnails.maxres.url:null,e.videoData.thumb_high=r.thumbnails.high?r.thumbnails.high.url:null,e.videoData.thumb_medium=r.thumbnails.medium?r.thumbnails.medium.url:null,jQuery.mbStorage.set("YTPlayer_data_"+e.videoID,e.videoData)}(r.items[0].snippet),e.hasData=!0):(e.videoData={},e.hasData=!1);let a=jQuery.Event("YTPData");a.prop={};for(let r in e.videoData)a.prop[r]=e.videoData[r];jQuery(e).trigger(a)}).fail(function(r){console.error("YT data error:: ",r),e.hasData=!1;let t=jQuery.Event("YTPChanged");t.time=e.currentTime,t.videoId=e.videoID,jQuery(e).trigger(t)}):(setTimeout(function(){let r=jQuery.Event("YTPChanged");r.time=e.currentTime,r.videoId=e.videoID,jQuery(e).trigger(r)},10),e.videoData=null),e.opt.ratio="auto"==e.opt.ratio?16/9:e.opt.ratio,e.isPlayer&&!e.opt.autoPlay&&(e.loading=jQuery("<div/>").addClass("loading").html("Loading").hide(),jQuery(e).append(e.loading),e.loading.fadeIn())},removeStoredData:function(){jQuery.mbStorage.remove()},getVideoData:function(){return this.get(0).videoData},getVideoID:function(){return this.get(0).videoID||!1},getPlaylistID:function(){return this.get(0).playlistID||!1},setVideoQuality:function(e){let r=this.get(0),t=r.player.getCurrentTime();return jQuery(r).YTPPause(),r.opt.quality=e,r.player.setPlaybackQuality(e),r.player.seekTo(t),jQuery(r).YTPPlay(),this},getVideoQuality:function(){return this.get(0).player.getPlaybackQuality()},playlist:function(e,r,t){let a=this.get(0);return a.isList=!0,r&&(e=jQuery.shuffle(e)),a.videoID||(a.videos=e,a.videoCounter=1,a.videoLength=e.length,jQuery(a).data("property",e[0]),jQuery(a).YTPlayer()),"function"==typeof t&&jQuery(a).on("YTPChanged",function(){t(a)}),jQuery(a).on("YTPEnd",function(){jQuery(a).YTPPlayNext()}),this},playNext:function(){let e=this.get(0);return e.videoCounter++,e.videoCounter>e.videoLength&&(e.videoCounter=1),jQuery(e).YTPPlayIndex(e.videoCounter),this},playPrev:function(){let e=this.get(0);return e.videoCounter--,e.videoCounter<=0&&(e.videoCounter=e.videoLength),jQuery(e).YTPPlayIndex(e.videoCounter),this},playIndex:function(e){let r=this.get(0);r.checkForStartAt&&(clearInterval(r.checkForStartAt),clearInterval(r.getState)),r.videoCounter=e,r.videoCounter>=r.videoLength&&(r.videoCounter=r.videoLength);let t=r.videos[r.videoCounter-1];return jQuery(r).YTPChangeVideo(t),this},changeVideo:function(e){let r=this,t=r.get(0);t.opt.startAt=0,t.opt.stopAt=0,t.opt.mask=!1,t.opt.mute=!0,t.opt.autoPlay=!0,t.opt.addFilters=!1,t.opt.coverImage=!1,t.hasData=!1,t.hasChanged=!0,t.player.loopTime=void 0,e&&jQuery.extend(t.opt,e),t.videoID=getYTPVideoID(t.opt.videoURL).videoID,t.opt.loop&&"boolean"==typeof t.opt.loop&&(t.opt.loop=9999),t.wrapper.css({background:"none"}),jQuery(t.playerEl).CSSAnimate({opacity:0},t.opt.fadeOnStartTime,function(){jQuery.mbYTPlayer.getDataFromAPI(t),r.YTPGetPlayer().loadVideoById({videoId:t.videoID,suggestedQuality:t.opt.quality}),r.YTPPause(),r.optimizeDisplay(),t.checkForStartAt&&(clearInterval(t.checkForStartAt),clearInterval(t.getState)),r.YTPCheckForState()});let a=jQuery.Event("YTPChangeVideo");return a.time=t.currentTime,jQuery(t).trigger(a),jQuery.mbYTPlayer.applyMask(t),this},getPlayer:function(){let e=this.get(0);return e.isReady?e.player:null},playerDestroy:function(){let e=this.get(0);return e.isReady?(ytp.YTAPIReady=!0,ytp.backgroundIsInited=!1,e.isInit=!1,e.videoID=null,e.isReady=!1,e.wrapper.remove(),jQuery("#controlBar_"+e.id).remove(),clearInterval(e.checkForStartAt),clearInterval(e.getState),this):this},fullscreen:function(real){let YTPlayer=this.get(0);void 0===real&&(real=eval(YTPlayer.opt.realFullscreen));let controls=jQuery("#controlBar_"+YTPlayer.id),fullScreenBtn=controls.find(".mb_OnlyYT"),videoWrapper=YTPlayer.isPlayer?YTPlayer.opt.containment:YTPlayer.wrapper;if(real){let e=jQuery.mbBrowser.mozilla?"mozfullscreenchange":jQuery.mbBrowser.webkit?"webkitfullscreenchange":"fullscreenchange";jQuery(document).off(e).on(e,function(){RunPrefixMethod(document,"IsFullScreen")||RunPrefixMethod(document,"FullScreen")?jQuery(YTPlayer).trigger("YTPFullScreenStart"):(YTPlayer.isAlone=!1,fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),videoWrapper.removeClass("YTPFullscreen"),videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0}),YTPlayer.isBackground?jQuery("body").after(controls):YTPlayer.wrapper.before(controls),jQuery(window).resize(),jQuery(YTPlayer).trigger("YTPFullScreenEnd"))})}if(YTPlayer.isAlone)jQuery(document).off("mousemove.YTPlayer"),clearTimeout(YTPlayer.hideCursor),YTPlayer.overlay.css({cursor:"auto"}),real?cancelFullscreen():(videoWrapper.CSSAnimate({opacity:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime),videoWrapper.css({zIndex:0})),fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),YTPlayer.isAlone=!1;else{function hideMouse(){YTPlayer.overlay.css({cursor:"none"})}jQuery(document).on("mousemove.YTPlayer",function(e){YTPlayer.overlay.css({cursor:"auto"}),clearTimeout(YTPlayer.hideCursor),jQuery(e.target).parents().is(".mb_YTPBar")||(YTPlayer.hideCursor=setTimeout(hideMouse,3e3))}),hideMouse(),real?(videoWrapper.css({opacity:0}),videoWrapper.addClass("YTPFullscreen"),launchFullscreen(videoWrapper.get(0)),setTimeout(function(){videoWrapper.CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),videoWrapper.append(controls),jQuery(YTPlayer).optimizeDisplay(),YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime()+.1,!0)},YTPlayer.opt.fadeOnStartTime)):videoWrapper.css({zIndex:1e4}).CSSAnimate({opacity:1},2*YTPlayer.opt.fadeOnStartTime),fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),YTPlayer.isAlone=!0}function RunPrefixMethod(e,r){let t,a,o=["webkit","moz","ms","o",""],i=0;for(;i<o.length&&!e[t];){if(t=r,""==o[i]&&(t=t.substr(0,1).toLowerCase()+t.substr(1)),"undefined"!=(a=typeof e[t=o[i]+t]))return o=[o[i]],"function"==a?e[t]():e[t];i++}}function launchFullscreen(e){RunPrefixMethod(e,"RequestFullScreen")}function cancelFullscreen(){(RunPrefixMethod(document,"FullScreen")||RunPrefixMethod(document,"IsFullScreen"))&&RunPrefixMethod(document,"CancelFullScreen")}return this},toggleLoops:function(){let e=this.get(0),r=e.opt;return 1==r.loop?r.loop=0:(r.startAt?e.player.seekTo(r.startAt):e.player.playVideo(),r.loop=1),this},play:function(){let e=this.get(0),r=jQuery(e);return e.isReady?(setTimeout(function(){r.YTPSetAbundance(e.opt.abundance)},300),e.player.playVideo(),jQuery(e.playerEl).css({opacity:1}),e.wrapper.css({backgroundImage:"none"}),e.wrapper.CSSAnimate({opacity:e.isAlone?1:e.opt.opacity},e.opt.fadeOnStartTime),jQuery("#controlBar_"+e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause),e.state=1,this):this},togglePlay:function(e){let r=this.get(0);return r.isReady?(1==r.state?this.YTPPause():this.YTPPlay(),"function"==typeof e&&e(r.state),this):this},stop:function(){let e=this.get(0);return e.isReady?(jQuery("#controlBar_"+e.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play),e.player.stopVideo(),this):this},pause:function(){let e=this.get(0);return e.isReady?(e.opt.abundance<.2&&this.YTPSetAbundance(.2),e.player.pauseVideo(),e.state=2,this):this},seekTo:function(e){let r=this.get(0);return r.isReady?(r.player.seekTo(e,!0),this):this},getPlaybackRate:function(){let e=this.get(0);return e.isReady?e.player.getPlaybackRate():this},setPlaybackRate:function(e){let r=this.get(0);return r.isReady?(r.player.setPlaybackRate(e),this):this},setVolume:function(e){let r=this.get(0);return r.isReady?(r.opt.vol=e,this.YTPUnmute(),r.player.setVolume(r.opt.vol),r.volumeBar&&r.volumeBar.length&&r.volumeBar.updateSliderVal(e),this):this},getVolume:function(){let e=this.get(0);return e.isReady?e.player.getVolume():this},toggleVolume:function(){let e=this.get(0);return e.isReady?(e.isMute?(jQuery.mbBrowser.mobile||this.YTPSetVolume(e.opt.vol),this.YTPUnmute()):this.YTPMute(),this):this},mute:function(){let e=this.get(0);if(!e.isReady)return this;if(e.isMute)return this;e.player.mute(),e.isMute=!0,e.player.setVolume(0),e.volumeBar&&e.volumeBar.length&&e.volumeBar.width()>10&&e.volumeBar.updateSliderVal(0),jQuery("#controlBar_"+e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute),jQuery(e).addClass("isMuted"),e.volumeBar&&e.volumeBar.length&&e.volumeBar.addClass("muted");let r=jQuery.Event("YTPMuted");return r.time=e.currentTime,e.preventTrigger||jQuery(e).trigger(r),this},unmute:function(){let e=this.get(0);if(!e.isReady)return this;if(!e.isMute)return this;e.player.unMute(),e.isMute=!1,jQuery(e).YTPSetVolume(e.opt.vol),e.volumeBar&&e.volumeBar.length&&e.volumeBar.updateSliderVal(e.opt.vol>10?e.opt.vol:10),jQuery("#controlBar_"+e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute),jQuery(e).removeClass("isMuted"),e.volumeBar&&e.volumeBar.length&&e.volumeBar.removeClass("muted");let r=jQuery.Event("YTPUnmuted");return r.time=e.currentTime,e.preventTrigger||jQuery(e).trigger(r),this},applyFilter:function(e,r){let t=this.get(0);if(!t.isReady)return this;t.filters[e].value=r,t.filtersEnabled&&this.YTPEnableFilters()},applyFilters:function(e){let r=this,t=r.get(0);if(!t.isReady)return jQuery(t).on("YTPReady",function(){r.YTPApplyFilters(e)}),this;for(let t in e)r.YTPApplyFilter(t,e[t]);r.trigger("YTPFiltersApplied")},toggleFilter:function(e,r){let t=this.get(0);return t.isReady?(t.filters[e].value?t.filters[e].value=0:t.filters[e].value=r,t.filtersEnabled&&jQuery(t).YTPEnableFilters(),this):this},toggleFilters:function(e){let r=this.get(0);return r.isReady?(r.filtersEnabled?(jQuery(r).trigger("YTPDisableFilters"),jQuery(r).YTPDisableFilters()):(jQuery(r).YTPEnableFilters(),jQuery(r).trigger("YTPEnableFilters")),"function"==typeof e&&e(r.filtersEnabled),this):this},disableFilters:function(){let e=this.get(0);if(!e.isReady)return this;let r=jQuery(e.playerEl);return r.css("-webkit-filter",""),r.css("filter",""),e.filtersEnabled=!1,this},enableFilters:function(){let e=this.get(0);if(!e.isReady)return this;let r=jQuery(e.playerEl),t="";for(let r in e.filters)e.filters[r].value&&(t+=r.replace("_","-")+"("+e.filters[r].value+e.filters[r].unit+") ");return r.css("-webkit-filter",t),r.css("filter",t),e.filtersEnabled=!0,this},removeFilter:function(e,r){let t=this,a=t.get(0);if(!a.isReady)return this;if("function"==typeof e&&(r=e,e=null),e)t.YTPApplyFilter(e,0),"function"==typeof r&&r(e);else{for(let e in a.filters)a.filters.hasOwnProperty(e)&&(t.YTPApplyFilter(e,0),"function"==typeof r&&r(e));a.filters=jQuery.extend(!0,{},jQuery.mbYTPlayer.defaultFilters)}let o=jQuery.Event("YTPFiltersApplied");return t.trigger(o),this},getFilters:function(){let e=this.get(0);return e.isReady?e.filters:this},addMask:function(e){let r=this.get(0);e||(e=r.actualMask);let t=jQuery("<img/>").attr("src",e).on("load",function(){r.overlay.CSSAnimate({opacity:0},r.opt.fadeOnStartTime,function(){r.hasMask=!0,t.remove(),r.overlay.css({backgroundImage:"url("+e+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}),r.overlay.CSSAnimate({opacity:1},r.opt.fadeOnStartTime)})});return this},removeMask:function(){let e=this.get(0);return e.overlay.CSSAnimate({opacity:0},e.opt.fadeOnStartTime,function(){e.hasMask=!1,e.overlay.css({backgroundImage:"",backgroundRepeat:"",backgroundPosition:"",backgroundSize:""}),e.overlay.CSSAnimate({opacity:1},e.opt.fadeOnStartTime)}),this},applyMask:function(e){let r=jQuery(e);if(r.off("YTPTime.mask"),e.opt.mask)if("string"==typeof e.opt.mask)r.YTPAddMask(e.opt.mask),e.actualMask=e.opt.mask;else if("object"==typeof e.opt.mask){for(let r in e.opt.mask)e.opt.mask[r]&&(img=jQuery("<img/>").attr("src",e.opt.mask[r]));e.opt.mask[0]&&r.YTPAddMask(e.opt.mask[0]),r.on("YTPTime.mask",function(t){for(let a in e.opt.mask)t.time==a&&(e.opt.mask[a]?(r.YTPAddMask(e.opt.mask[a]),e.actualMask=e.opt.mask[a]):r.YTPRemoveMask())})}},toggleMask:function(){let e=this.get(0),r=jQuery(e);return e.hasMask?r.YTPRemoveMask():r.YTPAddMask(),this},manageProgress:function(){let e=this.get(0),r=jQuery("#controlBar_"+e.id),t=r.find(".mb_YTPProgress"),a=r.find(".mb_YTPLoaded"),o=r.find(".mb_YTPseekbar"),i=t.outerWidth(),n=Math.floor(e.player.getCurrentTime()),l=Math.floor(e.player.getDuration()),s=n*i/l,u=100*e.player.getVideoLoadedFraction();return a.css({left:0,width:u+"%"}),o.css({left:0,width:s}),{totalTime:l,currentTime:n}},buildControls:function(YTPlayer){if(jQuery("#controlBar_"+YTPlayer.id).remove(),!YTPlayer.opt.showControls)return void(YTPlayer.controlBar=!1);if(YTPlayer.opt.showYTLogo=YTPlayer.opt.showYTLogo||YTPlayer.opt.printUrl,jQuery("#controlBar_"+YTPlayer.id).length)return;YTPlayer.controlBar=jQuery("<div/>").attr("id","controlBar_"+YTPlayer.id).addClass("mb_YTPBar").css({whiteSpace:"noWrap",position:YTPlayer.isBackground?"fixed":"absolute",zIndex:YTPlayer.isBackground?1e4:1e3}).hide().on("click",function(e){e.stopPropagation()});let buttonBar=jQuery("<div/>").addClass("buttonBar"),playpause=jQuery("<span>"+jQuery.mbYTPlayer.controls.play+"</span>").addClass("mb_YTPPlayPause ytpicon").on("click",function(e){e.stopPropagation(),jQuery(YTPlayer).YTPTogglePlay()}),MuteUnmute=jQuery("<span>"+jQuery.mbYTPlayer.controls.mute+"</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click",function(e){e.stopPropagation(),jQuery(YTPlayer).YTPToggleVolume()}),volumeBar=jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display:"inline-block"});YTPlayer.volumeBar=volumeBar;let idx=jQuery("<span/>").addClass("mb_YTPTime"),vURL=YTPlayer.opt.videoURL?YTPlayer.opt.videoURL:"";vURL.indexOf("http")<0&&(vURL="https://www.youtube.com/watch?v="+YTPlayer.opt.videoURL);let movieUrl=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title","view on YouTube").on("click",function(){window.open(vURL,"viewOnYT")}),onlyVideo=jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click",function(e){e.stopPropagation(),jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen)}),progressBar=jQuery("<div/>").addClass("mb_YTPProgress").css("position","absolute").on("click",function(e){e.stopPropagation(),timeBar.css({width:e.clientX-timeBar.offset().left}),YTPlayer.timeW=e.clientX-timeBar.offset().left,YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0});let r=Math.floor(YTPlayer.player.getDuration());YTPlayer.goto=timeBar.outerWidth()*r/progressBar.outerWidth(),YTPlayer.player.seekTo(parseFloat(YTPlayer.goto),!0),YTPlayer.controlBar.find(".mb_YTPLoaded").css({width:0})}),loadedBar=jQuery("<div/>").addClass("mb_YTPLoaded").css("position","absolute"),timeBar=jQuery("<div/>").addClass("mb_YTPseekbar").css("position","absolute");progressBar.append(loadedBar).append(timeBar),buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),YTPlayer.opt.showYTLogo&&buttonBar.append(movieUrl),(YTPlayer.isBackground||eval(YTPlayer.opt.realFullscreen)&&!YTPlayer.isBackground)&&buttonBar.append(onlyVideo),YTPlayer.controlBar.append(buttonBar).append(progressBar),YTPlayer.isBackground?jQuery("body").after(YTPlayer.controlBar):(YTPlayer.controlBar.addClass("inlinePlayer"),YTPlayer.wrapper.before(YTPlayer.controlBar)),volumeBar.simpleSlider({initialval:YTPlayer.opt.vol,scale:100,orientation:"h",callback:function(e){0==e.value?jQuery(YTPlayer).YTPMute():jQuery(YTPlayer).YTPUnmute(),YTPlayer.player.setVolume(e.value),YTPlayer.isMute||(YTPlayer.opt.vol=e.value)}})},changeCoverImage:function(e){let r=this.get(0);if(r.opt.coverImage||r.orig_containment_background){let t=e||(r.opt.coverImage?"url("+r.opt.coverImage+") center center":r.orig_containment_background);t&&r.opt.containment.css({background:t,backgroundSize:"cover",backgroundAttachment:"fixed"})}return this},checkForState:function(){let YTPlayer=this.get(0),$YTPlayer=jQuery(YTPlayer);clearInterval(YTPlayer.getState);let interval=100;if(!jQuery.contains(document,YTPlayer))return $YTPlayer.YTPPlayerDestroy(),clearInterval(YTPlayer.getState),void clearInterval(YTPlayer.checkForStartAt);jQuery.mbYTPlayer.checkForStart(YTPlayer),YTPlayer.getState=setInterval(function(){let $YTPlayer=jQuery(YTPlayer);if(!YTPlayer.isReady)return;let prog=jQuery(YTPlayer).YTPManageProgress(),stopAt=YTPlayer.opt.stopAt>YTPlayer.opt.startAt?YTPlayer.opt.stopAt:0;if(stopAt=stopAt<YTPlayer.player.getDuration()?stopAt:0,YTPlayer.currentTime!=prog.currentTime){let e=jQuery.Event("YTPTime");e.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(e)}if(YTPlayer.currentTime=prog.currentTime,YTPlayer.totalTime=YTPlayer.player.getDuration(),0==YTPlayer.player.getVolume()?$YTPlayer.addClass("isMuted"):$YTPlayer.removeClass("isMuted"),YTPlayer.opt.showControls&&(prog.totalTime?YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime)+" / "+jQuery.mbYTPlayer.formatTime(prog.totalTime)):YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),eval(YTPlayer.opt.stopMovieOnBlur)&&(document.hasFocus()?document.hasFocus()&&!YTPlayer.hasFocus&&-1!=YTPlayer.state&&0!=YTPlayer.state&&(YTPlayer.hasFocus=!0,YTPlayer.preventTrigger=!0,$YTPlayer.YTPPlay()):1==YTPlayer.state&&(YTPlayer.hasFocus=!1,YTPlayer.preventTrigger=!0,$YTPlayer.YTPPause())),YTPlayer.opt.playOnlyIfVisible){let e=jQuery.mbYTPlayer.isOnScreen(YTPlayer,YTPlayer.opt.onScreenPercentage);e||1!=YTPlayer.state?e&&!YTPlayer.isOnScreen&&(YTPlayer.isOnScreen=!0,YTPlayer.player.playVideo()):(YTPlayer.isOnScreen=!1,$YTPlayer.YTPPause())}if(YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()<=400&&!YTPlayer.isCompact?(YTPlayer.controlBar.addClass("compact"),YTPlayer.isCompact=!0,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)):YTPlayer.controlBar.length&&YTPlayer.controlBar.outerWidth()>400&&YTPlayer.isCompact&&(YTPlayer.controlBar.removeClass("compact"),YTPlayer.isCompact=!1,!YTPlayer.isMute&&YTPlayer.volumeBar&&YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),YTPlayer.player.getPlayerState()>0&&(parseFloat(YTPlayer.player.getDuration()-YTPlayer.opt.fadeOnStartTime/1e3)<YTPlayer.player.getCurrentTime()||stopAt>0&&parseFloat(YTPlayer.player.getCurrentTime())>=stopAt)){if(YTPlayer.isEnded)return;if(YTPlayer.isEnded=!0,setTimeout(function(){YTPlayer.isEnded=!1},1e3),YTPlayer.isList){if(!YTPlayer.opt.loop||YTPlayer.opt.loop>0&&YTPlayer.player.loopTime===YTPlayer.opt.loop-1){YTPlayer.player.loopTime=void 0,clearInterval(YTPlayer.getState);let e=jQuery.Event("YTPEnd");return e.time=YTPlayer.currentTime,void jQuery(YTPlayer).trigger(e)}}else if(!YTPlayer.opt.loop||YTPlayer.opt.loop>0&&YTPlayer.player.loopTime===YTPlayer.opt.loop-1)return YTPlayer.player.loopTime=void 0,YTPlayer.state=2,$YTPlayer.changeCoverImage(YTPlayer),jQuery(YTPlayer).YTPPause(),void YTPlayer.wrapper.CSSAnimate({opacity:0},YTPlayer.opt.fadeOnStartTime,function(){YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play),$YTPlayer.changeCoverImage();let e=jQuery.Event("YTPEnd");e.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(e),YTPlayer.player.seekTo(YTPlayer.opt.startAt,!0)});YTPlayer.player.loopTime=YTPlayer.player.loopTime?++YTPlayer.player.loopTime:1,YTPlayer.opt.startAt=YTPlayer.opt.startAt||1,YTPlayer.preventTrigger=!0,YTPlayer.state=2,YTPlayer.player.seekTo(YTPlayer.opt.startAt,!0)}},interval)},checkForStart:function(YTPlayer){let $YTPlayer=jQuery(YTPlayer);if(!jQuery.contains(document,YTPlayer))return void $YTPlayer.YTPPlayerDestroy();if(jQuery.mbYTPlayer.buildControls(YTPlayer),YTPlayer.overlay)if(YTPlayer.opt.addRaster){let e="dot"==YTPlayer.opt.addRaster?"raster-dot":"raster";YTPlayer.overlay.addClass(YTPlayer.isRetina?e+" retina":e)}else YTPlayer.overlay.removeClass(function(e,r){let t=r.split(" "),a=[];return jQuery.each(t,function(e,r){/raster.*/.test(r)&&a.push(r)}),a.push("retina"),a.join(" ")});YTPlayer.preventTrigger=!0,YTPlayer.state=2,YTPlayer.preventTrigger=!0,YTPlayer.player.mute(),YTPlayer.player.playVideo(),YTPlayer.isStarting=!0;let startAt=YTPlayer.start_from_last?YTPlayer.start_from_last:YTPlayer.opt.startAt?YTPlayer.opt.startAt:1;return YTPlayer.preventTrigger=!0,YTPlayer.checkForStartAt=setInterval(function(){YTPlayer.player.mute(),YTPlayer.player.seekTo(startAt,!0);let canPlayVideo=YTPlayer.player.getVideoLoadedFraction()>=startAt/YTPlayer.player.getDuration();if(jQuery.browser.mobile&&(canPlayVideo=!0),YTPlayer.player.getDuration()>0&&YTPlayer.player.getCurrentTime()>=startAt&&canPlayVideo){YTPlayer.start_from_last=null,YTPlayer.preventTrigger=!0,$YTPlayer.YTPPause(),clearInterval(YTPlayer.checkForStartAt),"function"==typeof YTPlayer.opt.onReady&&YTPlayer.opt.onReady(YTPlayer),YTPlayer.isReady=!0,$YTPlayer.YTPRemoveFilter(),YTPlayer.opt.addFilters?$YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters):$YTPlayer.YTPApplyFilters(),$YTPlayer.YTPEnableFilters();let YTPready=jQuery.Event("YTPReady");if(YTPready.time=YTPlayer.currentTime,$YTPlayer.trigger(YTPready),YTPlayer.state=2,YTPlayer.opt.mute?$YTPlayer.YTPMute():(YTPlayer.opt.autoPlay&&(console.debug("To make the video 'auto-play' you must mute the audio according with the latest vendor policy"),YTPlayer.player.mute()),YTPlayer.player.unMute()),"undefined"!=typeof _gaq&&eval(YTPlayer.opt.gaTrack)?_gaq.push(["_trackEvent","YTPlayer","Play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()]):"undefined"!=typeof ga&&eval(YTPlayer.opt.gaTrack)&&ga("send","event","YTPlayer","play",YTPlayer.hasData?YTPlayer.videoData.title:YTPlayer.videoID.toString()),YTPlayer.opt.autoPlay){let e=jQuery.Event("YTPStart");e.time=YTPlayer.currentTime,jQuery(YTPlayer).trigger(e),YTPlayer.isStarting=!1,"mac"===jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&jQuery("body").one("mousedown.YTPstart",function(){$YTPlayer.YTPPlay()}),$YTPlayer.YTPPlay(),console.timeEnd(YTPtimerLabels.startPlaying)}else YTPlayer.preventTrigger=!0,$YTPlayer.YTPPause(),YTPlayer.start_from_last&&YTPlayer.player.seekTo(startAt,!0),setTimeout(function(){YTPlayer.preventTrigger=!0,$YTPlayer.YTPPause(),YTPlayer.isPlayer||(YTPlayer.opt.coverImage?(YTPlayer.wrapper.css({opacity:0}),setTimeout(function(){$YTPlayer.changeCoverImage()},YTPlayer.opt.fadeOnStartTime)):(jQuery(YTPlayer.playerEl).CSSAnimate({opacity:1},YTPlayer.opt.fadeOnStartTime),YTPlayer.wrapper.CSSAnimate({opacity:YTPlayer.isAlone?1:YTPlayer.opt.opacity},YTPlayer.opt.fadeOnStartTime))),YTPlayer.isStarting=!1},500),YTPlayer.controlBar.length&&YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);YTPlayer.isPlayer&&!YTPlayer.opt.autoPlay&&YTPlayer.loading&&YTPlayer.loading.length&&(YTPlayer.loading.html("Ready"),setTimeout(function(){YTPlayer.loading.fadeOut()},100)),YTPlayer.controlBar&&YTPlayer.controlBar.length&&YTPlayer.controlBar.slideDown(1e3)}"mac"===jQuery.mbBrowser.os.name&&jQuery.mbBrowser.safari&&(YTPlayer.player.playVideo(),startAt>=0&&YTPlayer.player.seekTo(startAt,!0))},100),$YTPlayer},getTime:function(){let e=this.get(0);return jQuery.mbYTPlayer.formatTime(e.currentTime)},getTotalTime:function(){let e=this.get(0);return jQuery.mbYTPlayer.formatTime(e.totalTime)},formatTime:function(e){let r=Math.floor(e/60),t=Math.floor(e-60*r);return(r<=9?"0"+r:r)+" : "+(t<=9?"0"+t:t)},setAnchor:function(e){this.optimizeDisplay(e)},getAnchor:function(){return this.get(0).opt.anchor},setAbundance:function(e,r){let t=this.get(0);return r&&(t.opt.abundance=e),this.optimizeDisplay(t.opt.anchor,e),this},getAbundance:function(){return this.get(0).opt.abundance},setOption:function(e,r){return this.get(0).opt[e]=r,this}},jQuery.fn.optimizeDisplay=function(anchor,abundanceX){let YTPlayer=this.get(0),vid={},el=YTPlayer.wrapper,iframe=jQuery(YTPlayer.playerEl);YTPlayer.opt.anchor=anchor||YTPlayer.opt.anchor,YTPlayer.opt.anchor="undefined "!=typeof YTPlayer.opt.anchor?YTPlayer.opt.anchor:"center,center";let YTPAlign=YTPlayer.opt.anchor.split(","),ab=abundanceX||YTPlayer.opt.abundance;if(YTPlayer.opt.optimizeDisplay){let abundance=el.height()*ab,win={};win.width=el.outerWidth(),win.height=el.outerHeight()+abundance,YTPlayer.opt.ratio="auto"===YTPlayer.opt.ratio?16/9:YTPlayer.opt.ratio,YTPlayer.opt.ratio=eval(YTPlayer.opt.ratio),vid.width=win.width+abundance,vid.height=Math.ceil(vid.width/YTPlayer.opt.ratio),vid.marginTop=Math.ceil(-(vid.height-win.height+abundance)/2),vid.marginLeft=-abundance/2;let lowest=vid.height<win.height;lowest&&(vid.height=win.height+abundance,vid.width=Math.ceil(vid.height*YTPlayer.opt.ratio),vid.marginTop=-abundance/2,vid.marginLeft=Math.ceil(-(vid.width-win.width)/2));for(let e in YTPAlign)if(YTPAlign.hasOwnProperty(e)){let r=YTPAlign[e].replace(/ /g,"");switch(r){case"top":vid.marginTop=-abundance;break;case"bottom":vid.marginTop=Math.ceil(-(vid.height-win.height)-abundance/2);break;case"left":vid.marginLeft=-abundance;break;case"right":vid.marginLeft=Math.ceil(-(vid.width-win.width)+abundance/2)}}}else vid.width="100%",vid.height="100%",vid.marginTop=0,vid.marginLeft=0;iframe.css({width:vid.width,height:vid.height,marginTop:vid.marginTop,marginLeft:vid.marginLeft,maxWidth:"initial"})},jQuery.shuffle=function(e){let r=e.slice(),t=r.length,a=t;for(;a--;){let e=parseInt(Math.random()*t),o=r[a];r[a]=r[e],r[e]=o}return r},jQuery.fn.unselectable=function(){return this.each(function(){jQuery(this).css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).attr("unselectable","on")})},jQuery.fn.YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.mb_YTPlayer=jQuery.mbYTPlayer.buildPlayer,jQuery.fn.YTPCheckForState=jQuery.mbYTPlayer.checkForState,jQuery.fn.YTPGetPlayer=jQuery.mbYTPlayer.getPlayer,jQuery.fn.YTPGetVideoID=jQuery.mbYTPlayer.getVideoID,jQuery.fn.YTPGetPlaylistID=jQuery.mbYTPlayer.getPlaylistID,jQuery.fn.YTPChangeVideo=jQuery.fn.YTPChangeMovie=jQuery.mbYTPlayer.changeVideo,jQuery.fn.YTPPlayerDestroy=jQuery.mbYTPlayer.playerDestroy,jQuery.fn.YTPPlay=jQuery.mbYTPlayer.play,jQuery.fn.YTPTogglePlay=jQuery.mbYTPlayer.togglePlay,jQuery.fn.YTPStop=jQuery.mbYTPlayer.stop,jQuery.fn.YTPPause=jQuery.mbYTPlayer.pause,jQuery.fn.YTPSeekTo=jQuery.mbYTPlayer.seekTo,jQuery.fn.YTPGetPlaybackRate=jQuery.mbYTPlayer.getPlaybackRate,jQuery.fn.YTPSetPlaybackRate=jQuery.mbYTPlayer.setPlaybackRate,jQuery.fn.changeCoverImage=jQuery.mbYTPlayer.changeCoverImage,jQuery.fn.YTPlaylist=jQuery.mbYTPlayer.playlist,jQuery.fn.YTPPlayNext=jQuery.mbYTPlayer.playNext,jQuery.fn.YTPPlayPrev=jQuery.mbYTPlayer.playPrev,jQuery.fn.YTPPlayIndex=jQuery.mbYTPlayer.playIndex,jQuery.fn.YTPMute=jQuery.mbYTPlayer.mute,jQuery.fn.YTPUnmute=jQuery.mbYTPlayer.unmute,jQuery.fn.YTPToggleVolume=jQuery.mbYTPlayer.toggleVolume,jQuery.fn.YTPSetVolume=jQuery.mbYTPlayer.setVolume,jQuery.fn.YTPGetVolume=jQuery.mbYTPlayer.getVolume,jQuery.fn.YTPGetVideoData=jQuery.mbYTPlayer.getVideoData,jQuery.fn.YTPFullscreen=jQuery.mbYTPlayer.fullscreen,jQuery.fn.YTPToggleLoops=jQuery.mbYTPlayer.toggleLoops,jQuery.fn.YTPManageProgress=jQuery.mbYTPlayer.manageProgress,jQuery.fn.YTPSetVideoQuality=jQuery.mbYTPlayer.setVideoQuality,jQuery.fn.YTPGetVideoQuality=jQuery.mbYTPlayer.getVideoQuality,jQuery.fn.YTPApplyFilter=jQuery.mbYTPlayer.applyFilter,jQuery.fn.YTPApplyFilters=jQuery.mbYTPlayer.applyFilters,jQuery.fn.YTPToggleFilter=jQuery.mbYTPlayer.toggleFilter,jQuery.fn.YTPToggleFilters=jQuery.mbYTPlayer.toggleFilters,jQuery.fn.YTPRemoveFilter=jQuery.mbYTPlayer.removeFilter,jQuery.fn.YTPDisableFilters=jQuery.mbYTPlayer.disableFilters,jQuery.fn.YTPEnableFilters=jQuery.mbYTPlayer.enableFilters,jQuery.fn.YTPGetFilters=jQuery.mbYTPlayer.getFilters,jQuery.fn.YTPGetTime=jQuery.mbYTPlayer.getTime,jQuery.fn.YTPGetTotalTime=jQuery.mbYTPlayer.getTotalTime,jQuery.fn.YTPAddMask=jQuery.mbYTPlayer.addMask,jQuery.fn.YTPRemoveMask=jQuery.mbYTPlayer.removeMask,jQuery.fn.YTPToggleMask=jQuery.mbYTPlayer.toggleMask,jQuery.fn.YTPGetAbundance=jQuery.mbYTPlayer.getAbundance,jQuery.fn.YTPSetAbundance=jQuery.mbYTPlayer.setAbundance,jQuery.fn.YTPSetAnchor=jQuery.mbYTPlayer.setAnchor,jQuery.fn.YTPGetAnchor=jQuery.mbYTPlayer.getAnchor,jQuery.fn.YTPSetOption=jQuery.mbYTPlayer.setOption}(jQuery,ytp);var nAgt=navigator.userAgent;function isTouchSupported(){var e=nAgt.msMaxTouchPoints,r="ontouchstart"in document.createElement("div");return!(!e&&!r)}jQuery.browser=jQuery.browser||{},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.safari=!1,jQuery.browser.chrome=!1,jQuery.browser.androidStock=!1,jQuery.browser.msie=!1,jQuery.browser.edge=!1,jQuery.browser.ua=nAgt;var getOS=function(){var e={version:"Unknown version",name:"Unknown OS"};return-1!=navigator.appVersion.indexOf("Win")&&(e.name="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(e.name="Mac"),-1!=navigator.appVersion.indexOf("Linux")&&(e.name="Linux"),/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(e.version=/Mac OS X ([\._\d]+)/.exec(nAgt)[1],e.version=e.version.replace(/_/g,".").substring(0,5)),/Windows/.test(nAgt)&&(e.version="Unknown.Unknown"),/Windows NT 5.1/.test(nAgt)&&(e.version="5.1"),/Windows NT 6.0/.test(nAgt)&&(e.version="6.0"),/Windows NT 6.1/.test(nAgt)&&(e.version="6.1"),/Windows NT 6.2/.test(nAgt)&&(e.version="6.2"),/Windows NT 10.0/.test(nAgt)&&(e.version="10.0"),/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(e.version="Unknown.Unknown"),e.name=e.name.toLowerCase(),e.major_version="Unknown",e.minor_version="Unknown","Unknown.Unknown"!=e.version&&(e.major_version=parseFloat(e.version.split(".")[0]),e.minor_version=parseFloat(e.version.split(".")[1])),e},nameOffset,verOffset,ix;if(jQuery.browser.os=getOS(),jQuery.browser.hasTouch=isTouchSupported(),jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10),-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));function uncamel(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function setUnit(e,r){return"string"!=typeof e||e.match(/^[\-0-9\.]+jQuery/)?""+e+r:e}function setFilter(e,r,t){var a=uncamel(r),o=jQuery.browser.mozilla?"":jQuery.CSS.sfx;e[o+"filter"]=e[o+"filter"]||"",t=setUnit(t>jQuery.CSS.filters[r].max?jQuery.CSS.filters[r].max:t,jQuery.CSS.filters[r].unit),e[o+"filter"]+=a+"("+t+") ",delete e[r]}-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion,jQuery.browser.android=/Android/i.test(nAgt),jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt),jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt),jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt),jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt),jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt),jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle,jQuery.isMobile=jQuery.browser.mobile,jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width(),jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt),jQuery.mbBrowser=jQuery.browser,jQuery.browser.versionCompare=function(e,r){if("stringstring"!=typeof e+typeof r)return!1;for(var t=e.split("."),a=r.split("."),o=0,i=Math.max(t.length,a.length);o<i;o++){if(t[o]&&!a[o]&&0<parseInt(t[o])||parseInt(t[o])>parseInt(a[o]))return 1;if(a[o]&&!t[o]&&0<parseInt(a[o])||parseInt(t[o])<parseInt(a[o]))return-1}return 0},jQuery.support.CSStransition=function(){var e=(document.body||document.documentElement).style;return void 0!==e.transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition}(),jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(e){var r=jQuery.extend(!0,{},e);for(var t in jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx="-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-"),jQuery.CSS.sfx="",r){if("transform"===t&&(r[jQuery.CSS.sfx+"transform"]=r[t],delete r[t]),"transform-origin"===t&&(r[jQuery.CSS.sfx+"transform-origin"]=e[t],delete r[t]),"filter"!==t||jQuery.browser.mozilla||(r[jQuery.CSS.sfx+"filter"]=e[t],delete r[t]),"blur"===t&&setFilter(r,"blur",e[t]),"brightness"===t&&setFilter(r,"brightness",e[t]),"contrast"===t&&setFilter(r,"contrast",e[t]),"grayscale"===t&&setFilter(r,"grayscale",e[t]),"hueRotate"===t&&setFilter(r,"hueRotate",e[t]),"invert"===t&&setFilter(r,"invert",e[t]),"saturate"===t&&setFilter(r,"saturate",e[t]),"sepia"===t&&setFilter(r,"sepia",e[t]),"x"===t){var a=jQuery.CSS.sfx+"transform";r[a]=r[a]||"",r[a]+=" translateX("+setUnit(e[t],"px")+")",delete r[t]}"y"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" translateY("+setUnit(e[t],"px")+")",delete r[t]),"z"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" translateZ("+setUnit(e[t],"px")+")",delete r[t]),"rotate"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" rotate("+setUnit(e[t],"deg")+")",delete r[t]),"rotateX"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" rotateX("+setUnit(e[t],"deg")+")",delete r[t]),"rotateY"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" rotateY("+setUnit(e[t],"deg")+")",delete r[t]),"rotateZ"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" rotateZ("+setUnit(e[t],"deg")+")",delete r[t]),"scale"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" scale("+setUnit(e[t],"")+")",delete r[t]),"scaleX"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" scaleX("+setUnit(e[t],"")+")",delete r[t]),"scaleY"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" scaleY("+setUnit(e[t],"")+")",delete r[t]),"scaleZ"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" scaleZ("+setUnit(e[t],"")+")",delete r[t]),"skew"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" skew("+setUnit(e[t],"deg")+")",delete r[t]),"skewX"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" skewX("+setUnit(e[t],"deg")+")",delete r[t]),"skewY"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" skewY("+setUnit(e[t],"deg")+")",delete r[t]),"perspective"===t&&(r[a=jQuery.CSS.sfx+"transform"]=r[a]||"",r[a]+=" perspective("+setUnit(e[t],"px")+")",delete r[t])}return r},getProp:function(e){var r,t=[];for(r in e)0>t.indexOf(r)&&t.push(uncamel(r));return t.join(",")},animate:function(e,r,t,a,o){return this.each(function(){function i(){n.called=!0,n.CSSAIsRunning=!1,l.off(jQuery.CSS.transitionEnd+"."+n.id),clearTimeout(n.timeout),l.css(jQuery.CSS.sfx+"transition",""),"function"==typeof o&&o.apply(n),"function"==typeof n.CSSqueue&&(n.CSSqueue(),n.CSSqueue=null)}var n=this,l=jQuery(this);n.id=n.id||"CSSA_"+(new Date).getTime();var s=s||{type:"noEvent"};if(n.CSSAIsRunning&&n.eventType==s.type&&!jQuery.browser.msie&&9>=jQuery.browser.version)n.CSSqueue=function(){l.CSSAnimate(e,r,t,a,o)};else if(n.CSSqueue=null,n.eventType=s.type,0!==l.length&&e){if(e=jQuery.normalizeCss(e),n.CSSAIsRunning=!0,"function"==typeof r&&(o=r,r=jQuery.fx.speeds._default),"function"==typeof t&&(a=t,t=0),"string"==typeof t&&(o=t,t=0),"function"==typeof a&&(o=a,a="cubic-bezier(0.65,0.03,0.36,0.72)"),"string"==typeof r)for(var u in jQuery.fx.speeds){if(r==u){r=jQuery.fx.speeds[u];break}r=jQuery.fx.speeds._default}if(r||(r=jQuery.fx.speeds._default),"string"==typeof o&&(a=o,o=null),jQuery.support.CSStransition){var y={default:"ease",in:"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};y[a]&&(a=y[a]),l.off(jQuery.CSS.transitionEnd+"."+n.id),y=jQuery.CSS.getProp(e);var d={};jQuery.extend(d,e),d[jQuery.CSS.sfx+"transition-property"]=y,d[jQuery.CSS.sfx+"transition-duration"]=r+"ms",d[jQuery.CSS.sfx+"transition-delay"]=t+"ms",d[jQuery.CSS.sfx+"transition-timing-function"]=a,setTimeout(function(){l.one(jQuery.CSS.transitionEnd+"."+n.id,i),l.css(d)},1),n.timeout=setTimeout(function(){n.called||!o?(n.called=!1,n.CSSAIsRunning=!1):(l.css(jQuery.CSS.sfx+"transition",""),o.apply(n),n.CSSAIsRunning=!1,"function"==typeof n.CSSqueue&&(n.CSSqueue(),n.CSSqueue=null))},r+t+10)}else{for(y in e)"transform"===y&&delete e[y],"filter"===y&&delete e[y],"transform-origin"===y&&delete e[y],"auto"===e[y]&&delete e[y],"x"===y&&(s=e[y],e[u="left"]=s,delete e[y]),"y"===y&&(s=e[y],e[u="top"]=s,delete e[y]),"-ms-transform"!==y&&"-ms-filter"!==y||delete e[y];l.delay(t).animate(e,r,o)}}})}},jQuery.fn.CSSAnimate=jQuery.CSS.animate,jQuery.normalizeCss=jQuery.CSS.normalizeCss,jQuery.fn.css3=function(e){return this.each(function(){var r=jQuery(this),t=jQuery.normalizeCss(e);r.css(t)})},function(e){e.simpleSlider={defaults:{initialval:0,maxval:100,orientation:"h",readonly:!1,callback:!1},events:{start:e.browser.mobile?"touchstart":"mousedown",end:e.browser.mobile?"touchend":"mouseup",move:e.browser.mobile?"touchmove":"mousemove"},init:function(r){return this.each(function(){var t=this,a=e(t);a.addClass("simpleSlider"),t.opt={},e.extend(t.opt,e.simpleSlider.defaults,r),e.extend(t.opt,a.data());var o="h"==t.opt.orientation?"horizontal":"vertical",i=e("<div/>").addClass("level").addClass(o);a.prepend(i),t.level=i,a.css({cursor:"default"}),"auto"==t.opt.maxval&&(t.opt.maxval=e(t).outerWidth()),a.updateSliderVal(),t.opt.readonly||(a.on(e.simpleSlider.events.start,function(r){e.browser.mobile&&(r=r.changedTouches[0]),t.canSlide=!0,a.updateSliderVal(r),"h"==t.opt.orientation?a.css({cursor:"col-resize"}):a.css({cursor:"row-resize"}),t.lastVal=t.val,e.browser.mobile||(r.preventDefault(),r.stopPropagation())}),e(document).on(e.simpleSlider.events.move,function(r){e.browser.mobile&&(r=r.changedTouches[0]),t.canSlide&&(e(document).css({cursor:"default"}),a.updateSliderVal(r),e.browser.mobile||(r.preventDefault(),r.stopPropagation()))}).on(e.simpleSlider.events.end,function(){e(document).css({cursor:"auto"}),t.canSlide=!1,a.css({cursor:"auto"})}))})},updateSliderVal:function(r){var t=this.get(0);if(t.opt){t.opt.initialval="number"==typeof t.opt.initialval?t.opt.initialval:t.opt.initialval(t);var a=e(t).outerWidth(),o=e(t).outerHeight();t.x="object"==typeof r?r.clientX+document.body.scrollLeft-this.offset().left:"number"==typeof r?r*a/t.opt.maxval:t.opt.initialval*a/t.opt.maxval,t.y="object"==typeof r?r.clientY+document.body.scrollTop-this.offset().top:"number"==typeof r?(t.opt.maxval-t.opt.initialval-r)*o/t.opt.maxval:t.opt.initialval*o/t.opt.maxval,t.y=this.outerHeight()-t.y,t.scaleX=t.x*t.opt.maxval/a,t.scaleY=t.y*t.opt.maxval/o,t.outOfRangeX=t.scaleX>t.opt.maxval?t.scaleX-t.opt.maxval:t.scaleX<0?t.scaleX:0,t.outOfRangeY=t.scaleY>t.opt.maxval?t.scaleY-t.opt.maxval:t.scaleY<0?t.scaleY:0,t.outOfRange="h"==t.opt.orientation?t.outOfRangeX:t.outOfRangeY,t.value=void 0!==r?"h"==t.opt.orientation?t.x>=this.outerWidth()?t.opt.maxval:t.x<=0?0:t.scaleX:t.y>=this.outerHeight()?t.opt.maxval:t.y<=0?0:t.scaleY:"h"==t.opt.orientation?t.scaleX:t.scaleY,"h"==t.opt.orientation?t.level.width(i(t.x,a)+"%"):t.level.height(i(t.y,o)),t.lastVal===t.value&&("h"===t.opt.orientation&&(t.x>=this.outerWidth()||t.x<=0)||"h"!==t.opt.orientation&&(t.y>=this.outerHeight()||t.y<=0))||("function"==typeof t.opt.callback&&t.opt.callback(t),t.lastVal=t.value)}function i(e,r){return Math.floor(100*e/r)}}},e.fn.simpleSlider=e.simpleSlider.init,e.fn.updateSliderVal=e.simpleSlider.updateSliderVal}(jQuery),function(e){e.mbCookie={set:function(e,r,t,a){"object"==typeof r&&(r=JSON.stringify(r)),a=a?"; domain="+a:"";var o=new Date,i="";0<t&&(o.setTime(o.getTime()+864e5*t),i="; expires="+o.toGMTString()),document.cookie=e+"="+r+i+"; path=/"+a},get:function(e){e+="=";for(var r=document.cookie.split(";"),t=0;t<r.length;t++){for(var a=r[t];" "==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(e))try{return JSON.parse(a.substring(e.length,a.length))}catch(r){return a.substring(e.length,a.length)}}return null},remove:function(r){e.mbCookie.set(r,"",-1)}},e.mbStorage={set:function(e,r){"object"==typeof r&&(r=JSON.stringify(r)),localStorage.setItem(e,r)},get:function(e){if(!localStorage[e])return null;try{return JSON.parse(localStorage[e])}catch(r){return localStorage[e]}},remove:function(e){e?localStorage.removeItem(e):localStorage.clear()}}}(jQuery);

/*GREYSCALE*/
;(function(a){a.fn.greyScale=function(c){$options=a.extend({fadeTime:a.fx.speeds._default,reverse:false},c);function b(f,e,d){can=a("<canvas>").css({display:"none",left:"0",position:"absolute",top:"0"}).attr({width:e,height:d}).addClass("gsCanvas");ctx=can[0].getContext("2d");ctx.drawImage(f,0,0,e,d);imageData=ctx.getImageData(0,0,e,d);px=imageData.data;for(i=0;i<px.length;i+=4){grey=px[i]*0.3+px[i+1]*0.59+px[i+2]*0.11;px[i]=px[i+1]=px[i+2]=grey}ctx.putImageData(imageData,0,0);return can}if(a.browser.msie){this.each(function(){var d=$options.reverse?0:1;a(this).css({filter:"progid:DXImageTransform.Microsoft.BasicImage(grayscale="+d+")",zoom:"1"});a(this).hover(function(){var e=$options.reverse?1:0;a(this).css({filter:"progid:DXImageTransform.Microsoft.BasicImage(grayscale="+e+")"})},function(){var e=$options.reverse?0:1;a(this).css("filter","progid:DXImageTransform.Microsoft.BasicImage(grayscale="+e+")")})})}else{this.each(function(d){a(this).wrap('<div class="gsWrapper">');gsWrapper=a(this).parent();gsWrapper.css({position:"relative",display:"inline-block"});if(window.location.hostname!==this.src.split("/")[2]){a.getImageData({url:a(this).attr("src"),success:a.proxy(function(e){can=b(e,e.width,e.height);if($options.reverse){can.appendTo(gsWrapper).css({display:"block",opacity:"0"})}else{can.appendTo(gsWrapper).fadeIn($options.fadeTime)}},gsWrapper),error:function(f,e){}})}else{can=b(a(this)[0],a(this).width(),a(this).height());if($options.reverse){can.appendTo(gsWrapper).css({display:"block",opacity:"0"})}else{can.appendTo(gsWrapper).fadeIn($options.fadeTime)}}});a(this).parent().delegate(".gsCanvas","mouseover mouseout",function(d){over=$options.reverse?1:0;out=$options.reverse?0:1;(d.type=="mouseover")&&a(this).stop().animate({opacity:over},$options.fadeTime);(d.type=="mouseout")&&a(this).stop().animate({opacity:out},$options.fadeTime)})}}})(jQuery);(function(X,V){function O(){}function H(c){E=[c]}function W(c,g,e){return c&&c.apply(g.context||g,e)}function U(A){function s(K){!n++&&V(function(){g();e&&(z[w]={s:[K]});x&&(K=x.apply(A,[K]));W(A.success,A,[K,G]);W(h,A,[A,G])},0)}function o(K){!n++&&V(function(){g();e&&K!=F&&(z[w]=K);W(A.error,A,[A,K]);W(h,A,[A,K])},0)}A=X.extend({},B,A);var h=A.complete,x=A.dataFilter,J=A.callbackParameter,I=A.callback,t=A.cache,e=A.pageCache,D=A.charset,w=A.url,u=A.data,C=A.timeout,c,n=0,g=O;A.abort=function(){!n++&&g()};if(W(A.beforeSend,A,[A])===false||n){return A}w=w||y;u=u?typeof u=="string"?u:X.param(u,A.traditional):y;w+=u?(/\?/.test(w)?"&":"?")+u:y;J&&(w+=(/\?/.test(w)?"&":"?")+encodeURIComponent(J)+"=?");!t&&!e&&(w+=(/\?/.test(w)?"&":"?")+"_"+(new Date).getTime()+"=");w=w.replace(/=\?(&|$)/,"="+I+"$1");e&&(c=z[w])?c.s?s(c.s[0]):o(c):V(function(L,K,M){if(!n){M=C>0&&V(function(){o(F)},C);g=function(){M&&clearTimeout(M);L[q]=L[v]=L[p]=L[r]=null;R[m](L);K&&R[m](K)};window[I]=H;L=X(l)[0];L.id=k+b++;if(D){L[a]=D}var N=function(P){(L[v]||O)();P=E;E=undefined;P?s(P[0]):o(j)};if(f.msie){L.event=v;L.htmlFor=L.id;L[q]=function(){/loaded|complete/.test(L.readyState)&&N()}}else{L[r]=L[p]=N;f.opera?(K=X(l)[0]).text="jQuery('#"+L.id+"')[0]."+r+"()":L[d]=d}L.src=w;R.insertBefore(L,R.firstChild);K&&R.insertBefore(K,R.firstChild)}},0);return A}var d="async",a="charset",y="",j="error",k="_jqjsp",v="onclick",r="on"+j,p="onload",q="onreadystatechange",m="removeChild",l="<script/>",G="success",F="timeout",f=X.browser,R=X("head")[0]||document.documentElement,z={},b=0,E,B={callback:k,url:location.href};U.setup=function(c){X.extend(B,c)};X.jsonp=U})(jQuery,setTimeout);(function(a){a.getImageData=function(b){var d=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;if(b.url){var c=location.protocol==="https:",h="";h=b.server&&d.test(b.server)&&b.server.indexOf("https:")&&(c||b.url.indexOf("https:"))?b.server:"//img-to-json.appspot.com/?callback=?";a.jsonp({url:h,data:{url:escape(b.url)},dataType:"jsonp",timeout:10000,success:function(e){var f=new Image;a(f).load(function(){this.width=e.width;this.height=e.height;typeof b.success==typeof Function&&b.success(this)}).attr("src",e.data)},error:function(e,f){typeof b.error==typeof Function&&b.error(e,f)}})}else{typeof b.error==typeof Function&&b.error(null,"no_url")}}})(jQuery)