(function(t){function e(e){for(var n,a,r=e[0],c=e[1],u=e[2],h=0,f=[];h<r.length;h++)a=r[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"1d0f":function(t,e,i){},"35bf":function(t,e,i){"use strict";var n=i("1d0f"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.showGame?i("mine-sweeping",{attrs:{"show-game":t.showGame,"game-info":t.gameInfo},on:{"update:showGame":function(e){t.showGame=e},"update:show-game":function(e){t.showGame=e}}}):i("select-level",{on:{"chose-level":t.choseLevel}})],1)},o=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",[t._v("选择难度")]),i("ul",t._l(t.level,(function(e,n){return i("li",{key:n,on:{click:function(i){return t.handleChoseLevel(e.value)}}},[t._v(t._s(e.text))])})),0)])},r=[],c={name:"index",components:{},data:function(){return{level:[{text:"青铜",value:[9,9,10]},{text:"黄金",value:[12,9,20]},{text:"钻石",value:[16,9,30]},{text:"星耀",value:[16,16,50]},{text:"王者",value:[30,16,99]}]}},methods:{handleChoseLevel:function(t){this.$emit("chose-level",t)}}},u=c,l=(i("991e"),i("2877")),h=Object(l["a"])(u,a,r,!1,null,"7c109a0a",null),f=h.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{staticClass:"tool-content-t"},[i("div",{class:["mark-btn",t.isMarkStatus?"marked":""],on:{click:t.changeIsMarkStatus}},[t._v("标记❤")]),i("div",{staticClass:"mark-btn right"},[t._v("计时："+t._s(t.time)+" s")])]),i("div",{staticClass:"game-content"},t._l(t.cols,(function(e){return i("div",{key:Math.random()+e,staticClass:"game-content-row"},t._l(t.rows,(function(n){return i("span",{key:Math.random()+n,staticClass:"game-block",class:[t.lattice[(e-1)*t.rows+n-1].isOpen?"open":"",t.lattice[(e-1)*t.rows+n-1].isMark?"mark":""],on:{click:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"left",37,i.key,["Left","ArrowLeft"])?null:"button"in i&&0!==i.button?null:void t.handleClickLattice(t.lattice[(e-1)*t.rows+n-1])},contextmenu:function(i){i.preventDefault(),t.handleSureMinePoint(t.lattice[(e-1)*t.rows+n-1])}}},[t.lattice[(e-1)*t.rows+n-1].isMark?i("span",[t._v("❤")]):i("span",[t._v(t._s(t.lattice[(e-1)*t.rows+n-1].mineNum))])])})),0)})),0),i("div",{staticClass:"tool-content"},[i("div",[t._v("剩余雷数："+t._s(t.minePosition.length))]),i("div",{staticClass:"tool"},[i("div",{on:{click:t.reStart}},[t._v("重开一局")]),i("div",{on:{click:t.changeLevel}},[t._v("改变难度")])])])])},m=[],v=(i("99af"),i("4160"),i("c975"),i("a434"),i("d3b7"),i("6062"),i("3ca3"),i("159b"),i("ddb0"),i("2909")),p={name:"mineSweeping",components:{},props:{showGame:{required:!0,type:Boolean},gameInfo:{required:!0,type:Array}},data:function(){return{rows:0,cols:0,latticeNum:0,minePosition:[],minePositionBake:[],lattice:[{index:0,mineNum:0,isMine:!1,isOpen:!1,isMark:!1}],over:0,isMarkStatus:!1,time:0,interval:null}},computed:{timeText:function(){return this.getTimeText(this.time)}},watch:{over:function(t){switch(t){case 1:alert("BOOM，爱心轰炸");break;case 2:var e=this.judgeWrongMark();e?setTimeout((function(){alert("你有".concat(e,"个爱心标记错啦"))}),500):(this.openAllRest(),alert("优秀，找出了全部的❤"));break;default:break}t&&window.clearInterval(this.interval)}},created:function(){this.init()},mounted:function(){var t=this;this.$nextTick((function(){t.setTime()}))},methods:{init:function(){Object.assign(this.$data,this.$options.data()),this.rows=this.gameInfo[0],this.cols=this.gameInfo[1],this.latticeNum=this.rows*this.cols,this.getMinePosition(),this.initLattice()},setTime:function(){var t=this;this.interval=setInterval((function(){t.time++}),1e3)},getTimeText:function(t){},changeIsMarkStatus:function(){this.isMarkStatus=!this.isMarkStatus},getMinePosition:function(){for(var t=[],e=0;e<this.gameInfo[2];e++){var i=Math.floor(Math.random()*this.latticeNum);-1===t.indexOf(i)?t.push(i):e--}this.minePosition=t,this.minePositionBake=[].concat(t)},initLattice:function(){for(var t=[],e=1;e<=this.latticeNum;e++){var i={index:e,isOpen:!1,mineNum:0,isMark:!1};i.isMine=this.minePosition.indexOf(e)>-1,i.isMine||this.getMineNumAroundLattice(i,e),t.push(i)}this.lattice=t},openAllRest:function(){this.lattice.forEach((function(t){t.isOpen=!0}))},getMineNumAroundLattice:function(t,e){var i=this,n=this.getLatticeIndex(e);n.forEach((function(e){i.minePosition.indexOf(e)>-1&&t.mineNum++}))},getLatticeIndex:function(t){for(var e=[],i=Math.ceil(t/this.rows),n=Math.ceil(t%this.rows)||this.rows,s=1===i?0:-1;s<(i===this.cols?1:2);s++)for(var o=1===n?0:-1;o<(n===this.rows?1:2);o++){var a=(i+s-1)*this.rows+(n+o);e.push(a)}return e},handleClickLattice:function(t){this.isMarkStatus?this.handleSureMinePoint(t):this.leftClick(t)},leftClick:function(t){if(this.over)return!1;if(t.isMine)this.over=1;else if(t.mineNum)t.isOpen||t.isMark||(t.isOpen=!0);else{var e=this.getLatticeIndex(t.index);this.showWhiteAround(t,e)}},handleSureMinePoint:function(t){t.isOpen?t.isMark&&(t.isMark=!1,t.isOpen=!1,this.minePosition.push(t.index)):(t.isMark=!t.isMark,t.isMark?(t.isOpen=!0,this.minePosition.splice(this.minePosition.indexOf(t.index),1),this.judgeIsOver()):this.minePosition.push(t.index))},judgeIsOver:function(){this.over=0===this.minePosition.length?2:0},judgeWrongMark:function(){var t=this,e=0;return this.minePositionBake.forEach((function(i){t.lattice[i-1].isMark||e++})),e},showWhiteAround:function(t,e){e=Object(v["a"])(new Set(e));for(var i=0;i<e.length;i++){var n=e[i]-1;if(e.splice(i,1),i--,!this.lattice[n].isOpen&&(this.lattice[n].isOpen=!0,!this.lattice[n].mineNum)){var s=this.getLatticeIndex(this.lattice[n].index);this.showWhiteAround(this.lattice[n],e.concat(s))}}},reStart:function(){this.init()},changeLevel:function(){this.$emit("update:showGame",!1)}}},g=p,k=(i("35bf"),Object(l["a"])(g,d,m,!1,null,"17713913",null)),w=k.exports,M={name:"app",components:{SelectLevel:f,MineSweeping:w},data:function(){return{showGame:!0,gameInfo:[8,8,10]}},methods:{choseLevel:function(t){this.gameInfo=t,this.showGame=!0}}},b=M,x=(i("5c0b"),Object(l["a"])(b,s,o,!1,null,null,null)),O=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"991e":function(t,e,i){"use strict";var n=i("e242"),s=i.n(n);s.a},"9c0c":function(t,e,i){},e242:function(t,e,i){}});
//# sourceMappingURL=app.a1fddb7d.js.map