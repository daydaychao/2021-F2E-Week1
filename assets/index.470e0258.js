import{j as g,u as p,S as A,L as x,t as w,a as f,r as m,m as v,B,b as E,R as a,c as S,d as L,e as j}from"./vendor.83a3b45e.js";const H=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))c(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function s(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(u){if(u.ep)return;u.ep=!0;const o=s(u);fetch(u.href,o)}};H();const n=g.exports.jsx,r=g.exports.jsxs,l=g.exports.Fragment;function b({headerStyle:e}){let i=!0;return e!="home"&&(i=!1),console.log("[Header] useLocation:",p()),r(l,{children:[i&&r("header",{className:"flex flex-col justify-center px-4 items-center min-h-[330px] md:min-h-[590px] home-top-image",children:[n("h1",{className:"text-white text-3xl md:text-4xl mb-5",children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),n("h4",{className:"text-white text-base md:text-3xl mb-5",children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"}),r("div",{className:"flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black",children:[n(A,{className:"h-10 w-10"}),n("input",{className:"h-full w-full p-5",placeholder:"\u5730\u9EDE...\u535A\u7269\u9928...\u65C5\u904A\u57CE\u5E02"})]}),n("button",{className:"rounded bg-green-light h-[40px] w-[170px] font-bold text-lg",children:"\u641C\u5C0B"})]}),!i&&n("header",{className:"h-[99px] bg-green-light p-3",children:n(x,{to:"./",children:r("div",{className:"mx-auto container",children:[n("h1",{className:"text-3xl md:text-2xl mb-2",children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),n("h4",{className:"text-base md:text-lg ",children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"})]})})})]})}var d;(function(e){e.Taipei="Taipei",e.NewTaipei="NewTaipei",e.Taoyuan="Taoyuan",e.Taichung="Taichung",e.Tainan="Tainan",e.Kaohsiung="Kaohsiung",e.Keelung="Keelung",e.Hsinchu="Hsinchu",e.HsinchuCounty="HsinchuCounty",e.MiaoliCounty="MiaoliCounty",e.ChanghuaCounty="ChanghuaCounty",e.Nantou="NantouCounty",e.YunlinCounty="YunlinCounty",e.ChiayiCounty="ChiayiCounty",e.Chiayi="Chiayi",e.PingtungCounty="PingtungCounty",e.YilanCounty="YilanCounty",e.HualienCounty="HualienCounty",e.TaitungCounty="TaitungCounty",e.KinmenCounty="KinmenCounty",e.PenghuCounty="PenghuCounty",e.LienchiangCounty="LienchiangCounty"})(d||(d={}));var h;(function(e){e.Taipei="\u53F0\u5317\u5E02",e.NewTaipei="\u65B0\u5317\u5E02",e.Taoyuan="\u6843\u5712",e.Taichung="\u53F0\u4E2D",e.Tainan="\u53F0\u5357",e.Kaohsiung="\u9AD8\u96C4",e.Keelung="\u57FA\u9686",e.Hsinchu="\u65B0\u7AF9",e.HsinchuCounty="\u65B0\u7AF9",e.MiaoliCounty="\u82D7\u6817",e.ChanghuaCounty="\u5F70\u5316",e.Nantou="\u5357\u6295",e.YunlinCounty="\u96F2\u6797",e.ChiayiCounty="\u5609\u7FA9\u7E23",e.Chiayi="\u5609\u7FA9",e.PingtungCounty="\u5C4F\u6771",e.YilanCounty="\u5B9C\u862D",e.HualienCounty="\u82B1\u84EE",e.TaitungCounty="\u53F0\u4E2D\u7E23",e.KinmenCounty="\u91D1\u9580\u7E23",e.PenghuCounty="\u6F8E\u6E56\u7E23",e.LienchiangCounty="\u9023\u6C5F\u7E23"})(h||(h={}));const P=()=>Object.values(d),I=()=>Object.values(h),K=()=>Object.keys(h).map(e=>`../public/images/${e}.jpg`);function O(){let e=P(),i=I(),s=K();const c="bg-gray-300 bg-cover h-[220px] relative text-center overflow-hidden hover:cursor-pointer",u="text-white absolute bottom-2 left-2";return r(l,{children:[n("h1",{className:"text-xl md:text-2xl font-bold mb-4",children:"\u71B1\u9580\u666F\u9EDE"}),n("div",{className:"grid grid-col md:grid-cols-3 gap-4 ",children:i.map((o,t)=>n(x,{to:"scenicSpot?city="+e[t],children:n("div",{className:c,style:{backgroundImage:`url(${s[t]})`},children:n("label",{className:u,children:o})},t)}))})]})}const R="https://ptx.transportdata.tw/MOTC/v2/",y="Tourism/ScenicSpot/";function M(e){return String(new globalThis.URL(e,R))}async function C(e){return fetch(M(e)).then(i=>i.json()).then(w(console.log))}const k={getAll:()=>C(`${y}/`),getByCityName:e=>C(`${y}${e}`)};function T(){const{cityName:e}=f(),[i,s]=m.exports.useState(),c=t=>{k.getByCityName(t).then(F=>{let D=v(u,F);s(D)})};function u(t){return{ID:t.ID,Name:t.Name,DescriptionDetail:t.DescriptionDetail,Description:t.Description}}const o={useLocation:p(),useParams:f(),cityName:e};return m.exports.useEffect(()=>{console.table(o)},[o]),r(l,{children:[n("button",{type:"button",className:"bg-green-light",onClick:()=>c(d.Taipei),children:"get api"}),i&&i.map(t=>r("div",{children:[t.Name,t.DescriptionDetail,t.Description]},t.ID))]})}function Y(){return n(l,{children:"Detail"})}function $(){return n(B,{children:r("div",{className:"h-screen flex flex-col",children:[r(E,{children:[n(a,{exact:!0,path:"/",children:n(b,{headerStyle:"home"})}),n(a,{children:n(b,{headerStyle:"pages"})})]}),n("main",{className:"container p-5 md:p-10 m-auto",children:r(E,{children:[n(a,{exact:!0,path:"/",component:O}),n(a,{exact:!0,path:"/scenicSpot",component:T}),n(a,{exact:!0,path:"/scenicSpot/:spotsId",component:Y}),n(S,{to:"/"})]})}),n("footer",{className:"text-center flex justify-center items-center bg-black text-white min-h-[40px] md:h-[60px] text-sm",children:"\u53F0\u7063\u65C5\u904A\u5C0E\u89BD"})]})})}L.render(n(j.StrictMode,{children:n($,{})}),document.getElementById("root"));