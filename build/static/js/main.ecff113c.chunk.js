(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{121:function(e,t,a){e.exports=a(392)},125:function(e,t,a){},126:function(e,t,a){},384:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(14),i=a.n(r),l=(a(125),a(38));a(126);function s(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1];return c.a.createElement("div",{className:"card ".concat(r?"flip":""),onClick:function(){return i(!r)}},c.a.createElement("h2",{className:"term"},r?e.flashcards[e.index].definition:e.flashcards[e.index].term))}var o=a(112),d=a(113),m=a(120),u=a(119),p=(a(127),c.a.Component,a(384),[{id:1,term:"Apple",definition:"a yummy fruit"},{id:2,term:"Banana",definition:"a yellow fruit"},{id:3,term:"Orange",definition:"vitamin c source"}]);var f=a(385);a(389),a(393);f.apps.length||f.initializeApp({apiKey:"AIzaSyBWhtKWxnPdL5DjiwZdz2aCa2Py3xm4zu4",authDomain:"flashycards-221e2.firebaseapp.com",databaseURL:"https://flashycards-221e2.firebaseio.com/",projectId:"flashycards-221e2",storageBucket:"flashycards-221e2.appspot.com",messagingSenderId:"79644345793",appId:"1:79644345793:web:7c30bae7f50472062b9b40",measurementId:"G-W7CQFGWZC3"}),f.analytics();document.getElementById("object"),document.getElementById("list");f.database().ref().child("lists").child("sample").on("value",(function(e){return console.log(e.val())}));var b=function(){var e=Object(n.useState)(p),t=Object(l.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(0)),i=Object(l.a)(r,2),o=i[0],d=i[1];return c.a.createElement("div",{className:"card_container"},c.a.createElement("button",{className:"createlist",onClick:function(){return c.a.createElement("p",null,"HELLO WORLD ")}},"Add Card"),c.a.createElement(s,{flashcards:a,index:o}),c.a.createElement("div",null,c.a.createElement("button",{className:"prevcard",onClick:function(){o-1>0&&d(o-1)}},"Prev")),c.a.createElement("div",null,c.a.createElement("button",{className:"nextcard",onClick:function(){o+1<a.length&&d(o+1)}},"Next")))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.ecff113c.chunk.js.map