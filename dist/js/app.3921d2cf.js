(function(e){function t(t){for(var r,a,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&m.push(l[a][0]),l[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==l[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},l={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vueGame/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2840:function(e,t,n){e.exports=n.p+"media/muz4.c856506d.mp3"},3122:function(e,t,n){},"321d":function(e,t,n){e.exports=n.p+"media/muz1.9d0fee54.mp3"},"377c":function(e,t,n){"use strict";n("973f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),l={class:"container-title"};function i(e,t,n,i,a,o){var c=Object(r["i"])("GameOptions");return Object(r["f"])(),Object(r["c"])("div",l,[Object(r["e"])(c)])}var a=function(e){return Object(r["h"])("data-v-4f04008e"),e=e(),Object(r["g"])(),e},o={class:"container"},c=a((function(){return Object(r["d"])("h1",null,"Game Options:",-1)})),u={class:"containerInput"},s=a((function(){return Object(r["d"])("label",{class:"itemLabel",for:"Normal"},"Normal",-1)})),d={class:"containerInput"},m=a((function(){return Object(r["d"])("label",{class:"itemLabel",for:"Sound Only"},"Sound Only",-1)})),f={class:"containerInput"},p=a((function(){return Object(r["d"])("label",{class:"itemLabel",for:"Light Only"},"Light Only",-1)})),b={class:"containerInput"},O=a((function(){return Object(r["d"])("label",{class:"itemLabel",for:"Free board"},"Free board",-1)}));function y(e,t,n,l,i,a){var y=Object(r["i"])("GameElement");return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",o,[c,Object(r["d"])("div",u,[Object(r["l"])(Object(r["d"])("input",{type:"radio",id:"Normal",value:"Normal","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.picked=e}),onClick:t[1]||(t[1]=function(){return a.idElement&&a.idElement.apply(a,arguments)}),ref:"input"},null,512),[[r["k"],i.picked]]),s]),Object(r["d"])("div",d,[Object(r["l"])(Object(r["d"])("input",{type:"radio",id:"Sound Only",value:"Sound Only","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.picked=e}),onClick:t[3]||(t[3]=function(){return a.idElement&&a.idElement.apply(a,arguments)}),ref:"input"},null,512),[[r["k"],i.picked]]),m]),Object(r["d"])("div",f,[Object(r["l"])(Object(r["d"])("input",{type:"radio",id:"Light Only",value:"Light Only","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.picked=e}),onClick:t[5]||(t[5]=function(){return a.idElement&&a.idElement.apply(a,arguments)}),ref:"input"},null,512),[[r["k"],i.picked]]),p]),Object(r["d"])("div",b,[Object(r["l"])(Object(r["d"])("input",{type:"radio",id:"Free board",value:"Free board","onUpdate:modelValue":t[6]||(t[6]=function(e){return i.picked=e}),onClick:t[7]||(t[7]=function(){return a.idElement&&a.idElement.apply(a,arguments)}),ref:"input"},null,512),[[r["k"],i.picked]]),O])]),Object(r["e"])(y,{idOption:i.idOption},null,8,["idOption"])],64)}var h={class:"container-start"},v={class:"level-title"},j={class:"game-container"},g=["src"],k=["src"],A=["src"],T=["src"];function C(e,t,n,l,i,a){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",h,[Object(r["d"])("button",{class:"start-game",onClick:t[0]||(t[0]=function(){return a.randomClick&&a.randomClick.apply(a,arguments)})},"Start"),Object(r["d"])("h2",v,"Round: "+Object(r["j"])(i.numberLevel),1)]),Object(r["d"])("div",j,[Object(r["d"])("div",{class:"game-element1",id:"game-element1",onClick:t[1]||(t[1]=function(){return a.actionClick&&a.actionClick.apply(a,arguments)})},[Object(r["d"])("audio",{src:i.file4},null,8,g)]),Object(r["d"])("div",{class:"game-element2",id:"game-element2",onClick:t[2]||(t[2]=function(){return a.actionClick&&a.actionClick.apply(a,arguments)})},[Object(r["d"])("audio",{src:i.file3},null,8,k)]),Object(r["d"])("div",{class:"game-element3",id:"game-element3",onClick:t[3]||(t[3]=function(){return a.actionClick&&a.actionClick.apply(a,arguments)})},[Object(r["d"])("audio",{src:i.file2},null,8,A)]),Object(r["d"])("div",{class:"game-element4",id:"game-element4",onClick:t[4]||(t[4]=function(){return a.actionClick&&a.actionClick.apply(a,arguments)})},[Object(r["d"])("audio",{src:i.file1},null,8,T)])])],64)}n("a434");var L,E,w=n("321d"),I=n.n(w),S=n("6d31"),M=n.n(S),x=n("f6a9"),_=n.n(x),G=n("2840"),P=n.n(G),B={name:"GameElement",data:function(){return{arrayRandom:[],fullArray:[],newArray:[],numberTimes:0,numberLevel:0,numberOperations:0,file1:I.a,file2:M.a,file3:_.a,file4:P.a}},props:{idOption:String},watch:{idOption:function(){this.numberLevel=0,this.numberTimes=0,this.numberOperations=0}},mounted:function(){this.fullArray.push(document.getElementById("game-element1"),document.getElementById("game-element2"),document.getElementById("game-element3"),document.getElementById("game-element4"))},methods:{randomClick:function(e){var t=this;switch(this.idOption&&this.numberLevel++,this.idOption){case"Normal":E=setInterval((function(){t.numberTimes++,t.numberTimes==t.numberLevel&&clearInterval(E),L=Math.floor(Math.random(t.fullArray)*t.fullArray.length),t.fullArray[L].classList.add("colorTime");var e=document.querySelector(".colorTime");t.newArray.push(e),t.fullArray[L].lastElementChild.play(),setTimeout((function(){return t.fullArray[L].classList.remove("colorTime")}),300)}),1500);break;case"Sound Only":E=setInterval((function(){t.numberTimes++,t.numberTimes==t.numberLevel&&clearInterval(E),L=Math.floor(Math.random(t.fullArray)*t.fullArray.length),t.fullArray[L].classList.add("colorTime");var e=document.querySelector(".colorTime");t.newArray.push(e),t.fullArray[L].lastElementChild.play(),setTimeout((function(){return t.fullArray[L].classList.remove("colorTime")}),300)}),1e3);break;case"Light Only":E=setInterval((function(){t.numberTimes++,t.numberTimes==t.numberLevel&&clearInterval(E),L=Math.floor(Math.random(t.fullArray)*t.fullArray.length),t.fullArray[L].classList.add("colorTime");var e=document.querySelector(".colorTime");t.newArray.push(e),t.fullArray[L].lastElementChild.play(),setTimeout((function(){return t.fullArray[L].classList.remove("colorTime")}),100)}),400);break;case"Free board":E=setInterval((function(){t.numberTimes++,t.numberTimes==t.numberLevel&&clearInterval(E),L=Math.floor(Math.random(t.fullArray)*t.fullArray.length);var e=document.getElementById(t.fullArray[L].id);t.newArray.push(e),t.fullArray[L].lastElementChild.play()}),1500)}},actionClick:function(e){this.numberOperations<this.numberTimes&&(this.newArray[0].id==e.target.id?(e.target.lastElementChild.play(),this.newArray.splice(0,1),this.numberOperations++,this.numberOperations==this.numberTimes&&(this.numberTimes=0,this.numberOperations=0,this.randomClick(e))):(alert("error"),this.numberLevel=0,this.numberTimes=0,this.numberOperations=0))}}},F=(n("7c94"),n("6b0d")),N=n.n(F);const z=N()(B,[["render",C],["__scopeId","data-v-591fbcc6"]]);var U=z,V={name:"GameOptions",data:function(){return{picked:"",start:!0,idOption:""}},components:{GameElement:U},methods:{idElement:function(e){this.idOption=e.target.id}}};n("684c");const q=N()(V,[["render",y],["__scopeId","data-v-4f04008e"]]);var J=q,R={name:"App",components:{GameOptions:J},methods:{reverseMessage:function(){console.log(this.stability),this.start=!1}}};n("377c");const D=N()(R,[["render",i]]);var H=D;Object(r["b"])(H).mount("#app")},"61d1":function(e,t,n){},"684c":function(e,t,n){"use strict";n("61d1")},"6d31":function(e,t,n){e.exports=n.p+"media/muz2.09a727a9.mp3"},"7c94":function(e,t,n){"use strict";n("3122")},"973f":function(e,t,n){},f6a9:function(e,t,n){e.exports=n.p+"media/muz3.f89e743f.mp3"}});
//# sourceMappingURL=app.3921d2cf.js.map