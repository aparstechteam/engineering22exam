import{r as n,l as i,m as h,o as s,b as a,d as e,t as d,F as _,h as u}from"./index.1f6764a4.js";const x={class:"container mx-auto"},m={class:"mt-3 text-2xl font-bold text-center dark:text-white"},b={class:"max-w-lg mx-auto mt-10 space-y-5"},g=["href"],p={class:"text-xl font-semibold text-white"},w={setup(v){const l=n(!0),t=n([]);return i.get(h+"?tab=recorded").then(r=>{t.value=r.data,l.value=!1}),(r,f)=>(s(),a("div",x,[e("h2",m,d(t.value[0].title),1),e("div",b,[(s(!0),a(_,null,u(t.value.slice(1),(o,c)=>(s(),a("div",{key:c,class:"grid text-center"},[e("a",{target:"_blank",href:o.link,class:"p-3 min-w-[200px] text-center transition-all duration-200 border border-gray-200 border-dashed rounded shadow-sm bg-red-500 hover:border-gray-500 hover:bg-red-600"},[e("h3",p,d(o.title),1)],8,g)]))),128))])]))}};export{w as default};
