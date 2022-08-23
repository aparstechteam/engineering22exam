var g=Object.defineProperty,x=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&m(e,s,t[s]);if(h)for(var s of h(t))y.call(t,s)&&m(e,s,t[s]);return e},_=(e,t)=>x(e,f(t));import{_ as v}from"./lodash.56e7e76d.js";import{M as w,s as R,o as d,b as u,d as r,t as l,g as S,v as L,F as k,h as C,n as M,p as T,i as B}from"./index.1f6764a4.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";const I={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){fetch(`${w}?type=examlist&id=${this.$route.params.id}`).then(e=>e.json()).then(e=>{if(new Date(e.exam.end_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbzOBSdG0T8p7OIhwx8FSVELW8OwReJ-hS-HBS09FT3abMJR6MEeUyGFjItGBoVJYLDCkQ/exec?sheet="+e.exam.exam.substr(39,44),fetch(this.url).then(t=>t.json()).then(t=>{let s=t;this.testResults=v.sortBy(s.map(i=>_(c({},i),{attempt:i.attempt||1})),[i=>-i.score,"duration"]).map((i,a)=>c({position:a+1},i)),this.allresult=this.testResults,setTimeout(()=>{location.hash=`#${this.user.uid}`},1e3)})})},millisToMinutesAndSeconds(e){var t=Math.floor(e/6e4),s=(e%6e4/1e3).toFixed(0);return t+":"+(s<10?"0":"")+s},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let t={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return t[e]?t[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return R.state.user}}},F=e=>(T("data-v-2a343922"),e=e(),B(),e),j={class:"leaderboard"},V={class:"my-4 text-3xl font-bold text-center text-gray-900 dark:text-white"},A={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},E={class:"form-control"},G={class:"mt-4"},J={key:0},O=["id"],$={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},z={class:"flex-1 ml-2 text-gray-900 md:ml-4"},K={class:"text-lg font-semibold"},N={class:"text-sm text-gray-500"},Q={class:"p-2 text-gray-900 border-2 border-blue-400"},U={key:1,class:"text-center"},H=F(()=>r("button",{class:"btn loader btn-primary"},"Loading...",-1)),W=[H];function Y(e,t,s,i,a,n){return d(),u("div",j,[r("div",null,[r("h1",V,"MCQ Leaderboard-"+l(this.$route.params.id),1),r("div",A,[r("div",E,[S(r("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.search=o),placeholder:"Search by Name/College",onKeyup:t[1]||(t[1]=(...o)=>n.searchResult&&n.searchResult(...o)),class:"input input-primary input-bordered"},null,544),[[L,a.search]])]),r("div",G,[a.allresult.length>0?(d(),u("div",J,[(d(!0),u(k,null,C(a.testResults,(o,p)=>(d(),u("div",{key:p,id:o.uid,class:M(`${n.getborderStyle(o.position)} flex justify-between items-center p-5   rounded  shadow-md ${o.uid==n.user.uid?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[r("span",$,l(o.position),1),r("div",z,[r("h2",K,l(o.name),1),r("p",null,l(o.college),1),r("p",N," ID: "+l(o.ttrx)+", Duration: "+l(n.millisToMinutesAndSeconds(o.duration))+" minutes ",1)]),r("div",Q,l(o.score),1)],10,O))),128))])):(d(),u("div",U,W))])])])])}var ee=D(I,[["render",Y],["__scopeId","data-v-2a343922"]]);export{ee as default};
