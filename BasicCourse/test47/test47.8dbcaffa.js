parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({4:[function(require,module,exports) {
var e=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function n(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function t(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var i=document.getElementById("cookersay"),r=document.getElementById("clientsay"),a=document.getElementById("waitersay"),c=document.getElementById("cooker"),u=document.getElementById("client"),s=document.getElementById("waiter"),l=document.getElementById("waiterimg"),h=document.getElementById("money"),m=document.getElementById("food"),f=function(){function n(e,t,i){o(this,n),this.money=e,this.chair=t,this.peolist=i,this.peolist=[]}return e(n,[{key:"hire",value:function(e){return this.peolist.push(e),this.peolist}},{key:"fire",value:function(e){var n=this.peolist;for(var t in n)e==n[t]&&(n=n.splice(t,1));return n}},{key:"addmoney",value:function(e,n){this.money=this.money+e.price+n.price,h.innerHTML="现金:"+this.money+"¥"}}]),n}(),y=new f(1e4,1,"");y.hire("tony"),y.hire("coco"),console.log(y);var d=function(){function n(e,t){o(this,n),this.name=e,this.ordertime=t}return e(n,[{key:"comein",value:function(){m.setAttribute("style","background:url(food.jpg) no-repeat;background-size: cover;display:none;"),u.className="container clientinmove",r.innerHTML="欢迎客人~"+this.name+"~进店~"}},{key:"eat",value:function(e,n){m.style.display="block",l.setAttribute("style","background:url(waiter.jpg) no-repeat;background-size: cover;"),r.innerHTML="客人"+this.name+"开始吃"+e.name+"和"+n.name}},{key:"leave",value:function(){m.setAttribute("style","background:url(foodover.jpg) no-repeat;background-size: cover;display:block;"),u.className="container clientoutmove",r.innerHTML="客人"+this.name+"吃完饭走了~"}}]),n}(),p=function(){function n(e,t,i){o(this,n),this.id=e,this.name=t,this.wage=i}return e(n,[{key:"finishwork",value:function(e){return e+"是"+this.name+"的工作内容"}}]),n}(),g=function(i){function c(e){o(this,c);var t=n(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return t.name=e,t.instance=null,t.job="服务员",t}return t(c,p),e(c,[{key:"orderdishes",value:function(e,n){r.innerHTML="等待中。。",l.setAttribute("style","background:url(waiter.jpg) no-repeat;background-size: cover;"),s.className="container waiterordermove",a.innerHTML=this.name+"服务员受理客人点菜："+e.name+"和"+n.name}},{key:"servedishes",value:function(e,n){l.setAttribute("style","background:url(waiter2.jpg) no-repeat;background-size: cover;"),s.className="container waiterservemove",a.innerHTML=this.name+"上菜咯，"+e.name+"和"+n.name}}],[{key:"getinstance",value:function(e){return this.instance||(this.instance=new c(e)),console.log(this.instance),this.instance}}]),c}(),v=function(r){function a(e){o(this,a);var t=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.instance=null,t.name=e,t.job="新东方厨师",t}return t(a,p),e(a,[{key:"cook",value:function(e){i.innerHTML="新东方厨师"+this.name+"烹饪了"+e.name}}],[{key:"getinstance",value:function(e){return this.instance||(this.instance=new a(e)),console.log(this.instance),this.instance}}]),a}(),b=function e(n,t,i){o(this,e),this.name=n,this.price=t,this.timeout=i},w=new b("麻辣小龙虾",100,3e3),k=new b("桂花山药",30,2e3),j=new b("糖焖莲子",20,2e3),M=new b("冰糖百合",50,3e3),T=new b("辣炒肥肠",30,4e3),E=new b("辣子鸡丁",60,3e3),O=new b("鱼香肉丝",30,3e3),_=new d("不愿意透露姓名的客人",3e3),H=new d("伊藤诚",3e3),I=new d("小木曽雪菜",3e3),L=new d("东马小三",3e3),B=new d("李小红",3e3),P=new d("你猜我是谁",3e3),z=new d("吴彦祖",3e3),A={0:w,1:k,2:j,3:M,4:T,5:E,6:O},N={0:_,1:H,2:I,3:L,4:B,5:P,6:z},x=g.getinstance("蕾姆"),C=v.getinstance("小当家");function R(e,n,t,o){var r=function(e){return new Promise(function(n,t){setTimeout(n,e)})};r().then(function(){return e.comein(),r(3e3)}).then(function(){return console.log(e.name+"点了"+n.name+"和"+t.name),r(e.ordertime)}).then(function(){return x.orderdishes(n,t),r(3e3)}).then(function(){return C.cook(n),r(n.timeout)}).then(function(){return C.cook(t),r(t.timeout)}).then(function(){return x.servedishes(n,t),r(3e3)}).then(function(){return e.eat(n,t),r(3e3)}).then(function(){return e.leave(),r(3e3)}).then(function(){return o.addmoney(n,t),a.innerHTML="欢迎下次光临~",i.innerHTML="欢迎下次光临~",r(1e3)})}function S(e,n,t){var o=Object.keys(e).length,i=Object.keys(n).length,r=Math.round(Math.random()*o),a=Math.round(Math.random()*i),c=Math.round(Math.random()*i);R(e[r],n[a],n[c],t)}S(N,A,y),setInterval(function(){S(N,A,y)},25e3);
},{}]},{},[4], null)