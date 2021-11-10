import{j as u,F as C,a as t,S as T,L as p,t as q,b as J,c as V,r as m,u as W,d as Z,C as g,e as ee,i as te,m as L,M as ne,T as le,f as oe,g as ue,h as ce,P as re,B as se,k as ae,l as M,R as x,Q as ie,n as de,o as he,p as me}from"./vendor.0530f9c0.js";const fe=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}};fe();function j({headerStyle:e}){let l=!0;return e!="home"&&(l=!1),u(C,{children:[l&&u("header",{className:"flex flex-col justify-center px-4 items-center min-h-[330px] md:min-h-[590px] home-top-image",children:[t("h1",{className:"text-white text-3xl md:text-4xl mb-5",children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),t("h4",{className:"text-white text-base md:text-3xl mb-5",children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"}),u("div",{className:"flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black",children:[t(T,{className:"h-10 w-10"}),t("input",{className:"h-full w-full p-5",placeholder:"\u5730\u9EDE...\u535A\u7269\u9928...\u65C5\u904A\u57CE\u5E02"})]}),t("button",{className:"btn-green w-[170px]",children:"\u641C\u5C0B"})]}),!l&&t("header",{className:"bg-green-light p-3",children:t(p,{to:"home",children:u("div",{className:"mx-auto container px-5 md:px-10 font-bold",children:[t("h1",{className:"text-3xl md:text-2xl mb-2",children:"\u53F0\u7063\u65C5\u904A\u666F\u9EDE\u5C0E\u89BD"}),t("h4",{className:"text-base md:text-lg ",children:"\u5168\u53F0\u7063\u89C0\u5149\u666F\u9EDE\u5831\u4F60\u77E5\uFF0C\u4EA4\u901A\u9910\u98F2\u65C5\u5BBF\u901A\u901A\u6709!"})]})})})]})}var k;(function(e){e.Taipei="Taipei",e.NewTaipei="NewTaipei",e.HsinchuCounty="HsinchuCounty",e.Keelung="Keelung",e.Taoyuan="Taoyuan",e.Hsinchu="Hsinchu",e.YilanCounty="YilanCounty",e.MiaoliCounty="MiaoliCounty",e.Taichung="Taichung",e.ChanghuaCounty="ChanghuaCounty",e.NantouCounty="NantouCounty",e.YunlinCounty="YunlinCounty",e.Chiayi="Chiayi",e.ChiayiCounty="ChiayiCounty",e.Tainan="Tainan",e.Kaohsiung="Kaohsiung",e.PingtungCounty="PingtungCounty",e.PenghuCounty="PenghuCounty",e.TaitungCounty="TaitungCounty",e.HualienCounty="HualienCounty",e.KinmenCounty="KinmenCounty",e.LienchiangCounty="LienchiangCounty"})(k||(k={}));var E;(function(e){e.Taipei="\u81FA\u5317\u5E02",e.NewTaipei="\u65B0\u5317\u5E02",e.HsinchuCounty="\u65B0\u7AF9\u7E23",e.Keelung="\u57FA\u9686\u5E02",e.Taoyuan="\u6843\u5712\u5E02",e.Hsinchu="\u65B0\u7AF9\u5E02",e.YilanCounty="\u5B9C\u862D\u7E23",e.MiaoliCounty="\u82D7\u6817\u7E23",e.Taichung="\u81FA\u4E2D\u5E02",e.ChanghuaCounty="\u5F70\u5316\u7E23",e.NantouCounty="\u5357\u6295\u7E23",e.YunlinCounty="\u96F2\u6797\u7E23",e.Chiayi="\u5609\u7FA9\u5E02",e.ChiayiCounty="\u5609\u7FA9\u7E23",e.Tainan="\u81FA\u5357\u5E02",e.Kaohsiung="\u9AD8\u96C4\u5E02",e.PingtungCounty="\u5C4F\u6771\u7E23",e.PenghuCounty="\u6F8E\u6E56\u7E23",e.TaitungCounty="\u81FA\u6771\u7E23",e.HualienCounty="\u82B1\u84EE\u7E23",e.KinmenCounty="\u91D1\u9580\u7E23",e.LienchiangCounty="\u9023\u6C5F\u7E23"})(E||(E={}));const H=()=>Object.values(k),K=()=>Object.values(E),pe=(e,l)=>e?l.filter(a=>{if(ye(a).find(s=>be(e,s)))return!0}):l,ge=(e,l)=>{let a=[];return e.map(r=>Object.keys(l).map((n,s)=>{r===n&&a.push(l[n])})),a},xe=(e,l)=>{const a=ge(e,E);return l.filter(r=>a.find(n=>{if(r.City==n)return console.log("location.City == c",r.City==n),!0}))},O=(e,l)=>l.filter(a=>a!==e),be=(e,l)=>l.match(RegExp(e,"i")),ye=e=>Object.values(e).filter(l=>typeof l=="string"),Ce="https://ptx.transportdata.tw/MOTC/v2/",R="Tourism/ScenicSpot/";function Ee(){let e="bcee97e768f0431784373e00f3539404",l="bAY5MKsU_isyBjPsnFHcHlJgd1k",a=new Date().toUTCString(),r=new J("SHA-1","TEXT");r.setHMACKey(l,"TEXT"),r.update("x-date: "+a);let n=r.getHMAC("B64");return{Authorization:'hmac username="'+e+'", algorithm="hmac-sha1", headers="x-date", signature="'+n+'"',"X-Date":a}}function we(e){return{ID:e.ID,City:e.City,Name:e.Name,Phone:e.Phone,Address:e.Address,ZipCode:e.ZipCode,DescriptionDetail:e.DescriptionDetail,Description:e.Description,TravelInfo:e.TravelInfo,OpenTime:e.OpenTime,Picture:e.Picture,MapUrl:e.MapUrl,Position:e.Position,Class1:e.Class1,Class2:e.Class2,Class3:e.Class3,Level:e.Level,WebsiteUrl:e.WebsiteUrl,ParkingInfo:e.ParkingInfo,ParkingPosition:e.ParkingPosition,TicketInfo:e.TicketInfo,Remarks:e.Remarks,Keyword:e.Keyword}}function Ae(e){return String(new globalThis.URL(e,Ce))}async function $(e){return fetch(Ae(e),{method:"GET",headers:Ee()}).then(l=>l.json()).then(l=>l.map(we,l)).then(q(console.log))}const Se="?$filter=Picture%2FPictureUrl1%20ne%20null%20&$format=JSON",U={getAll:()=>$(`${R}${Se}`),getByCityName:e=>$(`${R}${e}`)},b=V(e=>({loading:!1,scenicSpotsAll:[],scenicSpotsFiltered:[],scenicSpotId:{},async getScenicSpotsAll(){U.getAll().then(l=>e(a=>a.scenicSpotsAll=l))},setLoading(l){e({loading:l})}})),De=()=>Object.keys(E).map(e=>`/images/${e}.jpg`);function ke(){const e=b(i=>i.scenicSpotsAll);let l=H(),a=K(),r=De();const n="bg-gray-300 bg-cover h-[220px] relative text-center overflow-hidden hover:cursor-pointer",s="text-white absolute bottom-2 left-2",f=b(i=>i.getScenicSpotsAll);return m.exports.useEffect(()=>{e.length===0&&f(),console.log("allLocation:",e)},[e]),u(C,{children:[t("h1",{className:"text-xl md:text-2xl font-bold mb-4 mt-14",children:"\u71B1\u9580\u666F\u9EDE"}),t("div",{className:"grid grid-col md:grid-cols-3 gap-4 ",children:a.map((i,h)=>t(p,{to:"scenicSpot?city="+l[h],children:t("div",{className:n,style:{backgroundImage:`url(${r[h]})`},children:t("label",{className:s,children:i})})},h))})]})}function z({name:e,text:l,isChecked:a,onChange:r}){function n(){document.getElementById(e).click()}return u("div",{className:"checkbox-btn",onClick:n,children:[t("input",{id:e,type:"checkbox",name:e,onChange:r}),t("label",{children:l})]})}let F=!1,S=0,N=!1,B=!1;const Fe=H(),D=K();function Ne(){const[e,l]=W("city",ee),a=b(o=>o.getScenicSpotsAll),r=b(o=>o.scenicSpotsAll),[n,s]=m.exports.useState([]),[f,i]=m.exports.useState([]),[h,y]=m.exports.useState([]),[d,w]=m.exports.useState([]),[Y,Ie]=m.exports.useState([]),Q=o=>{U.getByCityName(o).then(c=>{s(c)})},G=async()=>{if(!F){console.log("%c\u6587\u5B57","color:orange;background:black;padding:2px 10px",h),console.log("%c\u57CE\u5E02","color:orange;background:black;padding:2px 10px",d),console.log("%c\u7279\u5225","color:orange;background:black;padding:2px 10px",Y);let o;r.length>0?o=L(c=>c,r):o=L(c=>c,n),d.includes("allCity")||(o=await xe(d,o)),o=await pe(h,o),console.log("\u7BE9\u9078\u66F4\u65B0\u4E2D list",o),i(o),F=!0}setTimeout(()=>{F=!1},1e3)},X=m.exports.useCallback(Z(o=>{console.log("%c debounce","color:orange;background:black;padding:2px 10px"),y(o)},800),[]),_=o=>{X(o.target.value)},P=o=>{if(o.target.name==="allCity"){d.length===1&&d[0]==="allCity"&&!o.target.checked&&(o.target.checked=!0),d.map(c=>{var I;(I=document.getElementById(c))==null||I.click()}),w(["allCity"]);return}else if(o.target.name!="allCity"){if(d.includes("allCity")){const c=document.getElementById("allCity");c.checked=!1,w(O("allCity",d))}o.target.checked?w(c=>[...c,o.target.name]):w(O(o.target.name,d))}},v=async()=>{B||n.length===0&&(console.log("\u8CC7\u6599\u521D\u59CB\u5316..."),B=!0,await Q("Taipei"),B=!1),N||r.length===0&&te("allCity",d)&&(console.log("\u53D6\u5F97\u5168\u90E8\u8CC7\u6599\u4E2D..."),N=!0,await await a(),N=!1)};S==0&&(e&&d.push(e),v()),m.exports.useEffect(()=>{v(),console.log("renderTime",S),S>0&&(l(d),G())},[h,d]),m.exports.useEffect(()=>{r.length>0&&s(r)},[r]),m.exports.useEffect(()=>{i(n)},[n]);let A=(o,c)=>t(z,{onChange:P,name:Fe[o],text:c},o);return S+=1,u(C,{children:[u("section",{className:"flex flex-row items-center",children:[t(p,{to:"/home",children:"\u9996\u9801"}),t(g,{className:"h-4 w-4"}),t(p,{to:"/home",children:"\u57CE\u5E02"}),t(g,{className:"h-4 w-4"}),t(p,{to:"/scenicSpot",children:"\u666F\u9EDE"})]}),u("section",{className:"flex flex-col md:flex-row",children:[u("article",{className:"w-full hidden md:block w-3/12 inline-flex flex-shrink-0 flex-col",children:[t("h1",{className:"text-xl md:text-xl font-bold mb-3.5",children:"\u7BE9\u9078\u689D\u4EF6"}),t(z,{onChange:P,name:"allCity",text:"\u5168\u90E8"}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u5317\u90E8"}),D.map((o,c)=>{if(c<4)return A(c,o)}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u4E2D\u90E8"}),D.map((o,c)=>{if(c>5&&c<=13)return A(c,o)}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u5357\u90E8"}),D.map((o,c)=>{if(c>13&&c<=16)return A(c,o)}),t("h4",{className:"text-sm md:text-sm font-black mb-2",children:"\u5916\u5CF6"}),D.map((o,c)=>{if(c>16&&c<=19)return A(c,o)})]}),u("article",{className:"w-full md:w-9/12 inline-flex flex-col",children:[u("div",{className:"flex flex-row mb-7 items-center bg-white pl-4 h-[50px] border-black border-2 md:h-[75px] xl:w-3/4",children:[t(T,{className:"h-10 w-10"}),t("input",{className:"h-full w-full p-5",placeholder:"\u5730\u9EDE...\u535A\u7269\u9928...\u65C5\u904A\u57CE\u5E02",onChange:_})]}),u("div",{className:"flex justify-between",children:[u("small",{className:"my-4",children:[" ",f.length," \u9805\u666F\u9EDE"]}),u("button",{className:"w-[120px] mb-2.5 rounded-none bg-gray-300 sm:hidden font-bold",children:[t(g,{className:"h-5 w-5 inline-block items-center"}),"\u7BE9\u9078\u689D\u4EF6"]})]}),f&&f.map(o=>u("div",{className:"flex flex-row overflow-hidden border rounded-md pr-9 h-60 mb-4 xl:w-3/4",children:[t("div",{className:"overflow-hidden min-w-[110px] relative w-2/5",children:t("img",{className:"object-cover absolute top-50% left-50% block min-w-full min-h-full transform translate-x-50 translate-y-50",src:o.Picture.PictureUrl1})}),u("div",{className:"py-6 flex flex-col justify-between ml-5 font-bold w-3/5 relative md:w-3/5 xl:w-4/5",children:[t("h3",{className:"text-sm",children:o.City}),t("h1",{className:"mt-0.5",children:o.Name}),t("small",{className:"text-sm mt-4 font-normal desText",children:o.DescriptionDetail}),t(p,{to:`scenicSpot/${o.ID}`,className:"flex justify-end mt-3",children:u("button",{className:"w-40 bg-white border border_g text-lg font-bold inline-block px-8 py-2",children:["\u8A73\u7D30\u4ECB\u7D39",t(g,{className:"hidden h-5 w-5 inline-block align-text-bottom md:inline-block"})]})})]})]},o.ID))]})]})]})}function Be({lat:e,lon:l}){return t(C,{children:u(ne,{className:"h-full",center:[e,l],zoom:15,scrollWheelZoom:!1,children:[t(le,{attribution:'\xA9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t(oe,{position:[e,l]})]})})}function Pe(){const{id:e}=ue(),l=b(i=>i.scenicSpotsAll),a=b(i=>i.getScenicSpotsAll),r=i=>l.find(h=>h.ID===i);let n=r(e);const[s,f]=m.exports.useState({});return m.exports.useEffect(()=>{if(l.length===0&&a(),n&&n.ID!=e&&(console.warn("detail.ID != id",n.ID),r(e)),n&&n.Picture!=null){let i=new Map(Object.entries(n.Picture));f(()=>{let h={backgroundImage:"url(https://p3n3w9t2.rocketcdn.me/wp-content/uploads/2020/09/autumn-in-taiwan-header.png)",backgroundSize:"cover"};return i.forEach(y=>{y&&y.includes("http")&&(h={backgroundImage:`url(${y})`,backgroundSize:"cover"})}),h})}},[l,n,e]),u(C,{children:[u("section",{className:"flex flex-row items-center",children:[t(p,{to:"/home",children:"\u9996\u9801"}),t(g,{className:"h-4 w-4"}),t(p,{to:"/home",children:"\u57CE\u5E02"}),t(g,{className:"h-4 w-4"}),t(p,{to:"/scenicSpot",children:"\u666F\u9EDE"}),t(g,{className:"h-4 w-4"}),n==null?void 0:n.Name]}),t("section",{className:"my-4 border rounded-lg h-[310px]",style:s}),u("section",{className:"my-4 flex flex-col border border-gray rounded-lg p-10",children:[u("p",{className:"my-2 flex flex-row content-center items-center",children:[t(ce,{className:"h-5 w-5 mr-1 min-w-[20px]"}),"\u5730\u5740: ",(n==null?void 0:n.Address)||"\u8CC7\u8A0A\u5F85\u88DC"]}),u("p",{className:"my-2 flex flex-row content-center items-center",children:[t(re,{className:"h-5 w-5 mr-1 min-w-[20px]"}),"\u96FB\u8A71: ",(n==null?void 0:n.Phone)||"\u8CC7\u8A0A\u5F85\u88DC"]}),u("p",{className:"my-2 flex flex-row content-center items-center",children:[t(se,{className:"h-5 w-5 mr-1 min-w-[20px]"}),"\u958B\u653E\u6642\u9593: ",(n==null?void 0:n.OpenTime)||"\u8CC7\u8A0A\u5F85\u88DC"]})]}),u("section",{className:"my-3 py-6",children:[t("h1",{className:"text-2xl font-bold mb-4",children:n==null?void 0:n.Name}),t("p",{children:n==null?void 0:n.DescriptionDetail})]}),t("section",{className:"my-4 border-0 border-transparent shadow rounded-lg overflow-hidden h-[310px] w-full",children:t(Be,{lat:(n==null?void 0:n.Position.PositionLat)||0,lon:(n==null?void 0:n.Position.PositionLon)||0})})]})}function ve(){return t(ae,{children:u("div",{className:"h-screen flex flex-col",children:[u(M,{children:[t(x,{exact:!0,path:"/home",children:t(j,{headerStyle:"home"})}),t(x,{children:t(j,{headerStyle:"pages"})})]}),t("main",{className:"container px-5 mb-20 md:px-10 mx-auto",children:t(M,{children:u(ie,{ReactRouterRoute:x,children:[t(x,{exact:!0,path:"/home",component:ke}),t(x,{exact:!0,path:"/scenicSpot",component:Ne}),t(x,{path:"/scenicSpot/:id",component:Pe}),t(de,{to:"/home"})]})})}),t("footer",{className:"text-center flex justify-center items-center bg-black text-white min-h-[40px] md:h-[60px] text-sm",children:"\u53F0\u7063\u65C5\u904A\u5C0E\u89BD 2021-11-05 08:59"})]})})}he.render(t(me.StrictMode,{children:t(ve,{})}),document.getElementById("root"));