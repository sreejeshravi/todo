(()=>{"use strict";var t={3947:(t,e,n)=>{var r=n(7294),o=n(3935),c=n(4027),u=n(4575),l=n.n(u),a=n(3913),s=n.n(a),i=n(2205),f=n.n(i),p=n(8585),d=n.n(p),h=n(9754),v=n.n(h),g=n(7242);const m=(0,g.$j)((function(t){return console.log("XXXX   state ",t),{todoCounter:t.todoCounter}}),(function(t){return console.log("XXXX   DISPAtch ",t),{toDoAction:function(){console.log("todo asddd"),t({type:"Add",payload:1})}}}))((function(t){return r.createElement("div",null,r.createElement("p",{className:"ui-counter__title"},"Counter Widget"),r.createElement("h2",null,"Todo Counter - ",t.todoCounter," "),r.createElement("button",{onClick:function(){t.toDoAction,console.log(t,"counterssss")}},"Add Count"))}));n(9669);r.Component;var y=n(4890),C={todoCounter:10};const b=(0,y.MT)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e,"   act"),e.type){case"Add":return{todoCounter:100};default:return t}}));var x=function(t){f()(c,t);var e,n,o=(e=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=v()(e);if(n){var o=v()(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return d()(this,t)});function c(){return l()(this,c),console.log("App.constructor()"),o.call(this)}return s()(c,[{key:"render",value:function(){return console.log("App.render()"),r.createElement("div",{className:"ui-app"},r.createElement(g.zt,{store:b},r.createElement(m,null)))}}]),c}(r.Component);o.hydrate(r.createElement(c.VK,null,r.createElement(x,null)),document.getElementById("app"))}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0},e=[[3947,736]],r=()=>{};function o(){for(var r,o=0;o<e.length;o++){for(var c=e[o],u=!0,l=1;l<c.length;l++){var a=c[l];0!==t[a]&&(u=!1)}u&&(e.splice(o--,1),r=n(n.s=c[0]))}return 0===e.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},u=u.slice();for(var t=0;t<u.length;t++)c(u[t]);return(r=o)()};var c=o=>{for(var c,u,[a,s,i,f]=o,p=0,d=[];p<a.length;p++)u=a[p],n.o(t,u)&&t[u]&&d.push(t[u][0]),t[u]=0;for(c in s)n.o(s,c)&&(n.m[c]=s[c]);for(i&&i(n),l(o);d.length;)d.shift()();return f&&e.push.apply(e,f),r()},u=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[],l=u.push.bind(u);u.push=c})(),n.x()})();
//# sourceMappingURL=main.js.map