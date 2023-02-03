(function(){"use strict";var t={2098:function(t,e,n){var s=n(144),i=n(1096),o=n(7181),a=n(7941),r=n(4437),c=n(1200),l=n(6904),u=n(1908),f=n(2755),d=n(5294),p=n(1950),k=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app"},[e(i.Z,{staticClass:"todo"},[e(c.Z,{staticClass:"container"},[e(d.Z,{staticClass:"d-flex justify-center mb-6"},[e(r.Z,{attrs:{cols:"12",md:"4"}},[e(l.Z,[e(p.Z,{attrs:{type:"text",name:"todo-input",placeholder:"Write a task",required:""},model:{value:t.taskText,callback:function(e){t.taskText=e},expression:"taskText"}}),e(o.Z,{attrs:{color:"primary"},on:{click:t.addTask}},[t._v("Add task")])],1),e("div",{staticClass:"task-list"},[t.tasks.length?e("h2",{staticClass:"todo-title"},[t._v("Task list:")]):t._e(),t._l(t.tasks,(function(n,s){return e(u.Z,{key:n.id,staticClass:"todo-item"},[e("span",[t._v(t._s(s+1)+".")]),e("span",{class:{done:n.isComplite}},[t._v(" "+t._s(n.text))]),e(f.Z,{staticClass:"task-check"},[e(a.Z,{attrs:{"input-value":t.active,color:"teal darken-2"},on:{change:t.checkTask},model:{value:n.isComplite,callback:function(e){t.$set(n,"isComplite",e)},expression:"task.isComplite"}})],1)],1)}))],2)],1)],1)],1)],1)],1)},v=[],h=(n(7658),{name:"App",data(){return{taskText:"",tasks:[],isDone:!1,id:0}},mounted(){const t=localStorage.getItem("tasks");t&&(this.tasks=JSON.parse(t))},methods:{addTask(){this.tasks.push({id:this.id,text:this.taskText,isComplite:this.isDone}),localStorage.setItem("tasks",JSON.stringify(this.tasks)),this.taskText=""},checkTask(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}}}),m=h,b=n(1001),g=(0,b.Z)(m,k,v,!1,null,null,null),y=g.exports,x=n(3806);s.ZP.use(x.Z);var O=new x.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:O,render:t=>t(y)}).$mount("#app")}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,o){if(!s){var a=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],o=t[u][2];for(var r=!0,c=0;c<s.length;c++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(r=!1,o<a&&(a=o));if(r){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,o,a=s[0],r=s[1],c=s[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(c)var u=c(n)}for(e&&e(s);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},s=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(2098)}));s=n.O(s)})();
//# sourceMappingURL=app.ddcd9fdb.js.map