import{bA as i,r as u,D as _,E as d,u as r,j as n,k as o,l as c}from"./index.36876eab.js";const m={key:0},p=["src"],f={key:1,class:"flex items-center justify-center min-h-screen"},h=c("button",{class:"btn btn-circle loading"},null,-1),g=[h],b={setup(k){const l=i();let t=u(""),e=localStorage.getItem("engineeringad_22");return e=JSON.parse(e),e.group&&_.get(`${d}?type=examlist&id=${l.params.id}`).then(a=>{let s=a.data.exam.cq_link.split(",");t.value=s[parseInt(e.group)-1]||s[s.length-1]}),(a,s)=>r(t)?(n(),o("div",m,[c("iframe",{src:r(t),frameborder:"0",class:"w-screen min-h-screen"},null,8,p)])):(n(),o("div",f,g))}};export{b as default};
