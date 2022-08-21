var g=Object.defineProperty,f=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var h=(e,t,s)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t)=>{for(var s in t||(t={}))x.call(t,s)&&h(e,s,t[s]);if(m)for(var s of m(t))y.call(t,s)&&h(e,s,t[s]);return e},_=(e,t)=>f(e,b(t));import{_ as v}from"./lodash.13d896cc.js";import{e as R}from"./api.c5a084e8.js";import{I as w,o as d,b as c,d as o,t as i,C as S,J as L,F as C,g as k,E as B,K as I,L as M}from"./index.02769abc.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";const F={data(){return{search:"",testResults:[],allresult:[],results:[]}},methods:{modeltestResults(){fetch(`${R}?type=examlist&id=${this.$route.params.id}`).then(e=>e.json()).then(e=>{this.url="https://script.google.com/macros/s/AKfycbzOBSdG0T8p7OIhwx8FSVELW8OwReJ-hS-HBS09FT3abMJR6MEeUyGFjItGBoVJYLDCkQ/exec?sheet="+e.exam.exam.substr(39,44),fetch(this.url).then(t=>t.json()).then(t=>{let s=t;this.testResults=v.sortBy(s.map(l=>_(u({},l),{attempt:l.attempt||1})),[l=>-l.score,"duration"]).map((l,a)=>u({position:a+1},l)),this.allresult=this.testResults,setTimeout(()=>{location.hash=`#${this.user.reg}`},1e3)})})},millisToMinutesAndSeconds(e){var t=Math.floor(e/6e4),s=(e%6e4/1e3).toFixed(0);return t+":"+(s<10?"0":"")+s},searchResult(){this.testResults=this.allresult.filter(e=>{if(e.name.toLowerCase().includes(this.search.toLowerCase())||e.college.toLowerCase().includes(this.search.toLowerCase()))return e})},getStyle(e){return e==1?"success":e==2?"orange darken-2":e==3?"indigo":""},getborderStyle(e){let t={1:"s singleResult mb-2",2:"f singleResult mb-2",3:"d singleResult mb-2"};return t[e]?t[e]:"singleResult mb-2"}},created(){this.modeltestResults(),window.scrollTo(0,0)},computed:{user(){return w.state.user}}},j=e=>(I("data-v-6f6c1ab4"),e=e(),M(),e),D={class:"leaderboard"},E={class:"my-4 text-3xl font-bold text-center text-gray-900 dark:text-white"},J={class:"p-5 mx-1 rounded md:w-1/2 md:mx-auto bg-gray-50"},V={class:"form-control"},A={class:"mt-4"},G={key:0},K=["id"],O={class:"flex items-center justify-center w-10 h-10 font-semibold text-white rounded-full bg-gradient-to-t from-indigo-400 to-indigo-600"},z={class:"flex-1 ml-2 text-gray-900 md:ml-4"},N={class:"text-lg font-semibold"},Q={class:"text-sm text-gray-500"},U={class:"p-2 text-gray-900 border-2 border-blue-400"},$={key:1,class:"text-center"},H=j(()=>o("button",{class:"btn loader btn-primary"},"Loading...",-1)),W=[H];function Y(e,t,s,l,a,n){return d(),c("div",D,[o("div",null,[o("h1",E,"MCQ Leaderboard-"+i(this.$route.params.id),1),o("div",J,[o("div",V,[S(o("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>a.search=r),placeholder:"Search by Name/College",onKeyup:t[1]||(t[1]=(...r)=>n.searchResult&&n.searchResult(...r)),class:"input input-primary input-bordered"},null,544),[[L,a.search]])]),o("div",A,[a.allresult.length>0?(d(),c("div",G,[(d(!0),c(C,null,k(a.testResults,(r,p)=>(d(),c("div",{key:p,id:r.reg,class:B(`${n.getborderStyle(r.position)} flex justify-between items-center p-5   rounded  shadow-md ${r.reg==n.user.reg?"bg-green-200":""}`),style:{"scroll-margin":"100px"}},[o("span",O,i(r.position),1),o("div",z,[o("h2",N,i(r.name),1),o("p",null,i(r.college),1),o("p",Q," Duration: "+i(n.millisToMinutesAndSeconds(r.duration))+" minutes ",1)]),o("div",U,i(r.score),1)],10,K))),128))])):(d(),c("div",$,W))])])])])}var te=T(F,[["render",Y],["__scopeId","data-v-6f6c1ab4"]]);export{te as default};
