import{r as c,g as d,o as s,b as a,d as t,t as l,F as u,h}from"./index.f06cee32.js";const x={class:"container mx-auto"},_={class:"mt-3 text-2xl font-bold text-center dark:text-white"},g={class:"max-w-lg mx-auto mt-10 space-y-5"},m=["href"],p={class:"text-xl font-semibold text-white"},v={setup(b){const n=c(!0),e=c([]);return d.get("https://script.google.com/macros/s/AKfycbzQ46_DERwzwijSpj9ocsaKTXPDwGfr-LLf8xu1lqE70ZIDz35pJwqBjulZPcdAFYuScw/exec").then(o=>{e.value=o.data,n.value=!1}),(o,f)=>(s(),a("div",x,[t("h2",_,l(e.value[0].title),1),t("div",g,[(s(!0),a(u,null,h(e.value.slice(1),(r,i)=>(s(),a("div",{key:i,class:"grid text-center"},[t("a",{target:"_blank",href:r.link,class:"p-3 min-w-[200px] text-center transition-all duration-200 border border-gray-200 border-dashed rounded shadow-sm bg-blue-500 hover:border-gray-500 hover:bg-indigo-600"},[t("h3",p,l(r.title),1)],8,m)]))),128))])]))}};export{v as default};
